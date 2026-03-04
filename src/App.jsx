import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard, Calendar, CheckCircle2, Lock, Star, Trophy,
  ChevronLeft, BarChart3, BookOpen, Clock, ArrowRight, GraduationCap,
  MessageSquare, Headphones, Mic, Play, Award, ChevronRight, RotateCcw,
  Volume2, BookMarked, PenTool
} from 'lucide-react';

const App = () => {
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'lesson'
  const [selectedDay, setSelectedDay] = useState(null);
  const [lessonData, setLessonData] = useState(null); // داده‌های درس لود شده
  const [isLoading, setIsLoading] = useState(false); // وضعیت لودینگ
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem('german_mastery_persian_v1');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeSection, setActiveSection] = useState('overview');

  // نگهداری پیشرفت داخل درس‌ها
  const [completedTasksData, setCompletedTasksData] = useState(() => {
    const savedTasks = localStorage.getItem('german_mastery_tasks_v1');
    return savedTasks ? JSON.parse(savedTasks) : {};
  });

  // تسک‌های درس فعلی که باز است
  const completedTasks = completedTasksData[selectedDay] || [];
  const isExamDay = selectedDay ? (Math.floor((selectedDay * 4) / 6) > Math.floor(((selectedDay - 1) * 4) / 6)) : false;

  const playTTS = (text, e) => {
    if (e) e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      window.speechSynthesis.speak(utterance);
    } else {
      alert("مرورگر شما از پخش صدا پشتیبانی نمی‌کند.");
    }
  };

  const setCompletedTasks = (newTasks) => {
    setCompletedTasksData(prev => ({
      ...prev,
      [selectedDay]: typeof newTasks === 'function' ? newTasks(prev[selectedDay] || []) : newTasks
    }));
  };

  const [lessonProgress, setLessonProgress] = useState(0);

  useEffect(() => {
    localStorage.setItem('german_mastery_persian_v1', JSON.stringify(completedDays));
  }, [completedDays]);

  useEffect(() => {
    localStorage.setItem('german_mastery_tasks_v1', JSON.stringify(completedTasksData));
  }, [completedTasksData]);

  useEffect(() => {
    if (view === 'lesson') {
      const total = isExamDay ? 7 : 6; // grammar, vocab, reading, writing, listening, speaking (+exam)
      setLessonProgress((completedTasks.length / total) * 100);
    }
  }, [completedTasks, view, isExamDay]);

  const totalDays = 55;

  const handleDayClick = async (dayNum) => {
    if (dayNum <= totalDays) {
      setSelectedDay(dayNum);
      setCompletedTasks([]);
      setActiveSection('overview');
      setLessonData(null);
      setIsLoading(true);
      setView('lesson');

      try {
        // ایمپورت داینامیک دیتای درس
        const module = await import(`./data/day${dayNum}.js`);
        setLessonData(module[`day${dayNum}Data`]);
      } catch (error) {
        console.error("Error loading lesson data:", error);
        alert("دیتای این درس هنوز آماده نیست!");
        setView('dashboard');
      } finally {
        setIsLoading(false);
      }

      window.scrollTo(0, 0);
    }
  };

  const finishDay = () => {
    if (!completedDays.includes(selectedDay)) {
      setCompletedDays(prev => [...prev, selectedDay].sort((a, b) => a - b));
    }
    setView('dashboard');
  };

  const resetProgress = () => {
    if (window.confirm("آیا از پاک کردن کل پیشرفت خود مطمئن هستید؟")) {
      setCompletedDays([]);
      localStorage.removeItem('german_mastery_persian_v1');
    }
  };

  const SectionCard = ({ id, icon: Icon, title, time, desc }) => (
    <div
      onClick={() => setActiveSection(id)}
      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${activeSection === id ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-slate-100 hover:border-blue-200 bg-white'
        }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className={`p-2 rounded-xl ${activeSection === id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
          <Icon size={18} />
        </div>
        <span className="text-[10px] font-black text-slate-400 flex items-center gap-1">
          <Clock size={12} /> {time}
        </span>
      </div>
      <h3 className="font-bold text-slate-800 text-sm">{title}</h3>
      <p className="text-[10px] text-slate-400 mt-1">{desc}</p>
      {completedTasks.includes(id) && (
        <div className="mt-2 flex items-center gap-1 text-green-600 text-[10px] font-bold">
          <CheckCircle2 size={12} /> انجام شد
        </div>
      )}
    </div>
  );

  const InteractiveQuiz = ({ quizData }) => {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleSelect = (qIdx, oIdx) => {
      if (showResults) return;
      setSelectedAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
    };

    return (
      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 mt-6" dir="rtl">
        <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-xl"><Star size={24} /></span>
          {quizData.title || "کوییز تعاملی گرامر"}
        </h3>
        <div className="space-y-6">
          {quizData.questions.map((q, qIdx) => (
            <div key={qIdx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-100 text-slate-500 font-black rounded-full flex items-center justify-center pt-1">{qIdx + 1}</span>
                <p className="font-bold text-slate-800 text-lg leading-relaxed pt-1" dir="ltr">{q.question}</p>
                {q.questionDe && (
                  <button onClick={(e) => playTTS(q.questionDe, e)} className="text-blue-500 hover:text-blue-700 ml-auto mt-1"><Volume2 size={24} /></button>
                )}
              </div>
              <div className="space-y-3 mr-12">
                {q.options.map((opt, oIdx) => {
                  const isSelected = selectedAnswers[qIdx] === oIdx;
                  const isCorrect = opt.isCorrect;
                  let btnClass = "w-full text-left px-5 py-4 rounded-xl border-2 transition-all font-bold text-lg ";

                  if (!showResults) {
                    btnClass += isSelected ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm translate-x-2" : "border-slate-100 hover:border-blue-300 hover:bg-slate-50 text-slate-600";
                  } else {
                    if (isCorrect) {
                      btnClass += "border-green-500 bg-green-50 text-green-700 shadow-md";
                    } else if (isSelected && !isCorrect) {
                      btnClass += "border-red-500 bg-red-50 text-red-700 opacity-60";
                    } else {
                      btnClass += "border-slate-100 text-slate-400 opacity-30";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      className={btnClass}
                      dir="ltr"
                    >
                      <div className="flex justify-between items-center w-full">
                        <span>{opt.text}</span>
                        {showResults && isCorrect && <CheckCircle2 size={24} className="text-green-500" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              {showResults && q.explanation && (
                <div className="mt-6 mr-12 p-5 bg-blue-50/80 border border-blue-100 text-blue-900 rounded-2xl flex items-start gap-4">
                  <div className="bg-white p-2 rounded-xl shadow-sm text-blue-600 shrink-0"><BookOpen size={20} /></div>
                  <span className="leading-relaxed font-medium text-base pt-1">{q.explanation}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        {!showResults && Object.keys(selectedAnswers).length === quizData.questions.length && (
          <button
            onClick={() => setShowResults(true)}
            className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-blue-700 transition-all w-full shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            بررسی جواب‌ها و ثبت
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900" dir="rtl">
      {/* Styles Injected */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .day-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .day-card:hover:not(.cursor-not-allowed) { transform: translateY(-5px) scale(1.03); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
      `}</style>

      {view === 'dashboard' ? (
        <div className="animate-in pb-20 px-4 md:px-0">
          <nav className="bg-white border-b p-4 sticky top-0 z-50 flex justify-between items-center max-w-6xl mx-auto rounded-b-2xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg"><GraduationCap size={24} /></div>
              <h1 className="text-xl font-black">پنل یادگیری آلمانی</h1>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={resetProgress} className="p-2 text-slate-300 hover:text-red-500 transition-colors"><RotateCcw size={18} title="بازنشانی پیشرفت" /></button>
            </div>
          </nav>

          <main className="max-w-6xl mx-auto p-6 text-right">
            <header className="mb-12">
              <div className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight text-right">درس بعدی:<br />روز {completedDays.length + 1 <= totalDays ? completedDays.length + 1 : totalDays}</h2>
                <button onClick={() => handleDayClick(completedDays.length + 1 <= totalDays ? completedDays.length + 1 : totalDays)} className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-black shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto">
                  شروع درس جدید <ArrowRight size={20} className="rotate-180" />
                </button>
                <BarChart3 className="absolute -bottom-10 -left-10 text-white/5" size={280} />
              </div>
            </header>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3" dir="ltr">
              {Array.from({ length: totalDays }, (_, i) => {
                const d = i + 1;
                const isDone = completedDays.includes(d);
                const isNext = d === (completedDays.length + 1);
                const isExam = Math.floor((d * 4) / 6) > Math.floor(((d - 1) * 4) / 6);
                return (
                  <div key={d} onClick={() => handleDayClick(d)} className={`day-card h-20 md:h-24 rounded-2xl border-2 flex flex-col items-center justify-center cursor-pointer relative transition-all hover:-translate-y-1 hover:shadow-lg ${isDone ? 'bg-green-50 border-green-200 text-green-700' : isNext ? (isExam ? 'bg-orange-50 border-orange-500 text-orange-700 shadow-xl ring-2 ring-orange-100' : 'bg-blue-50 border-blue-500 text-blue-700 shadow-xl ring-2 ring-blue-100') : (isExam ? 'bg-white border-orange-200 text-orange-600 hover:border-orange-400' : 'bg-white border-blue-200 text-blue-600 hover:border-blue-400')}`}>
                    <span className="text-[10px] font-black opacity-40 mb-0.5">DAY</span>
                    <span className="text-xl md:text-2xl font-black">{d}</span>
                    {isExam && <Star size={12} className={`absolute top-2 right-2 ${isDone ? 'text-green-500' : isNext ? 'text-orange-600' : 'text-orange-400'}`} fill="currentColor" />}
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      ) : (
        /* Lesson Player */
        <div className="animate-in p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <button onClick={() => setView('dashboard')} className="flex items-center gap-2 text-slate-400 font-bold mb-8 hover:text-blue-600 transition-colors">
              <ChevronLeft size={20} className="rotate-180" /> بازگشت به داشبورد
            </button>

            <header className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-slate-100 mb-6 flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-right flex-1 w-full relative">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  {isLoading ? 'در حال بارگذاری...' : lessonData?.title || `درس روز ${selectedDay}`}
                </h1>
                <p className="text-slate-500 mt-3 font-medium text-sm md:text-base leading-relaxed">
                  {isLoading ? 'لطفاً کمی صبر کنید.' : lessonData?.objective || "محتوای درسی روزانه..."}
                </p>
              </div>
              <div className="flex items-center justify-between w-full lg:w-auto gap-4 bg-blue-50 p-5 rounded-[2rem] border border-blue-100 min-w-[200px]">
                <div className="text-right lg:text-left flex-1 lg:flex-none">
                  <p className="text-[10px] text-blue-600 font-black uppercase tracking-wider">پیشرفت درس</p>
                  <p className="text-3xl font-black text-blue-800 tracking-tighter">{Math.round(lessonProgress)}%</p>
                </div>
                <div className="w-16 h-16 relative">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-blue-100" strokeWidth="4" />
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-blue-600 transition-all duration-700" strokeWidth="4" strokeDasharray={`${lessonProgress}, 100`} strokeLinecap="round" />
                  </svg>
                  <Award className="absolute inset-0 m-auto text-blue-600" size={24} />
                </div>
              </div>
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="lg:col-span-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4 order-2 lg:order-1">
                <SectionCard id="grammar" icon={BookOpen} title="گرامر و ساختار" time="۴۵ دقیقه" desc="قواعد پایه روز" />
                <SectionCard id="vocab" icon={MessageSquare} title="واژگان کاربردی" time="۳۰ دقیقه" desc="لغات جدید روز" />
                <SectionCard id="reading" icon={BookMarked} title="درک مطلب (خواندن)" time="۲۰ دقیقه" desc="متن و سوالات" />
                <SectionCard id="writing" icon={PenTool} title="تمرین نوشتن (انشاء)" time="۳۰ دقیقه" desc="تقویت جمله‌سازی" />
                <SectionCard id="listening" icon={Headphones} title="تمرین شنیداری" time="۳۰ دقیقه" desc="پادکست و تلفظ" />
                <SectionCard id="speaking" icon={Mic} title="تمرین گفتاری" time="۱۵ دقیقه" desc="مکالمه و مکث" />
                <div className="mt-2 md:mt-0 lg:mt-6 relative col-span-2 md:col-span-1 lg:col-span-1">
                  {isExamDay && (
                    <>
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur opacity-25"></div>
                      <div className="relative h-full">
                        <SectionCard id="exam" icon={Star} title="آزمون جامع" time="۳۰ دقیقه" desc="مرور مباحث" />
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="lg:col-span-3 bg-white rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-100 p-6 md:p-12 min-h-[500px] text-right order-1 lg:order-2">
                {activeSection === 'overview' && (
                  <div className="text-center py-20 animate-in">
                    <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"><Play size={48} fill="currentColor" /></div>
                    <h2 className="text-3xl font-black mb-4">آماده برای شروع درس {selectedDay}؟</h2>
                    <p className="text-slate-400 mb-10">
                      {isExamDay
                        ? 'امروز علاوه بر ۶ بخش اصلی، یک آزمون جامع هم در پایان دارید!'
                        : 'هر ۶ بخش گرامر، لغت، خواندن، نوشتن، شنیداری و گفتاری را برای تکمیل درس انجام دهید.'}
                    </p>
                    {lessonData?.cultureTip && (
                      <div className="bg-emerald-50 border border-emerald-100 p-6 md:p-8 rounded-[2rem] mb-10 text-right relative overflow-hidden mt-8">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-bl-full opacity-5 blur-2xl"></div>
                        <h3 className="text-emerald-800 font-black mb-3 flex flex-wrap items-center gap-2 text-lg md:text-xl relative z-10">
                          <span className="bg-emerald-200 text-emerald-700 p-2 rounded-xl shrink-0"><Star size={18} fill="currentColor" /></span>
                          نکته فرهنگی (Landeskunde)
                        </h3>
                        <p className="text-emerald-900 leading-relaxed font-medium text-base md:text-lg relative z-10">{lessonData.cultureTip}</p>
                      </div>
                    )}
                    <button onClick={() => setActiveSection('grammar')} className="bg-blue-600 text-white px-8 md:px-12 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-transform active:scale-95 text-base md:text-lg w-full sm:w-auto">شروع مطالعه بخش اصلی</button>
                  </div>
                )}

                {activeSection === 'grammar' && lessonData && (
                  <div className="animate-in space-y-10">
                    <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3">آموزش گرامر <BookOpen className="text-blue-600" /></h2>
                    {lessonData.grammarData?.alphabet && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" dir="ltr">
                        {lessonData.grammarData.alphabet.map((item, i) => (
                          <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-2xl font-black text-blue-600">{item.letter}</span>
                              <button onClick={(e) => playTTS(item.letter, e)} className="text-slate-400 hover:text-blue-600"><Volume2 size={16} /></button>
                            </div>
                            <p className="text-sm font-bold text-slate-800 mt-1">{item.sound}</p>
                            <p className="text-[10px] text-slate-400">{item.example}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {lessonData.grammarData?.content && Array.isArray(lessonData.grammarData.content) ? (
                      <div className="space-y-8" dir="rtl">
                        {lessonData.grammarData.content.map((block, idx) => {
                          if (block.type === 'text') {
                            return (
                              <div key={idx} className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
                                {block.title && <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3">{block.title}</h3>}
                                <p className="text-slate-600 leading-relaxed whitespace-pre-line text-base md:text-lg">{block.text}</p>
                              </div>
                            );
                          } else if (block.type === 'table') {
                            return (
                              <div key={idx} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm mt-4">
                                {block.title && <h3 className="text-xl font-bold text-slate-800 p-4 bg-slate-50 border-b">{block.title}</h3>}
                                <table className="w-full text-left" dir="ltr">
                                  <thead className="bg-slate-50">
                                    <tr className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                      <th className="p-4">German</th>
                                      <th className="p-4 text-right">Persian (توضیح)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {block.rows.map((row, rIdx) => (
                                      <tr key={rIdx} className="border-t border-slate-50 hover:bg-blue-50/30 transition-colors">
                                        <td className="p-4 flex items-center gap-3 font-black text-blue-700 text-lg">
                                          <span>{row.de}</span>
                                          <button onClick={(e) => playTTS(row.de, e)} className="text-slate-400 hover:text-blue-600"><Volume2 size={18} /></button>
                                        </td>
                                        <td className="p-4 font-bold text-slate-600 text-right text-base">{row.fa}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            );
                          } else if (block.type === 'examples') {
                            return (
                              <div key={idx} className="bg-blue-50 p-5 md:p-6 rounded-2xl border border-blue-100 mt-4">
                                {block.title && <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4">{block.title}</h3>}
                                <div className="space-y-4">
                                  {block.items.map((ex, exIdx) => (
                                    <div key={exIdx} className="bg-white p-4 rounded-xl shadow-sm">
                                      <div className="flex items-center gap-3 mb-2" dir="ltr">
                                        <button onClick={(e) => playTTS(ex.de, e)} className="text-blue-400 hover:text-blue-600 shrink-0"><Volume2 size={20} /></button>
                                        <span className="font-black text-slate-800 text-base md:text-lg leading-tight">{ex.de}</span>
                                      </div>
                                      <p className="text-slate-600 font-medium text-sm md:text-base text-right mt-1">{ex.fa}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          } else if (block.type === 'alert') {
                            return (
                              <div key={idx} className="bg-orange-50 border-r-4 border-orange-500 p-6 rounded-l-2xl mt-4 text-orange-900">
                                {block.title && <h3 className="text-lg font-black mb-2 flex items-center gap-2"><Star size={18} fill="currentColor" /> {block.title}</h3>}
                                <p className="leading-relaxed font-medium">{block.text}</p>
                              </div>
                            );
                          } else if (block.type === 'interactive_quiz') {
                            return <InteractiveQuiz key={idx} quizData={block} />;
                          }
                          return null;
                        })}
                      </div>
                    ) : (
                      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100" dir="ltr">
                        {lessonData.grammarData?.pronouns && (
                          <table className="w-full text-left"><thead className="bg-slate-50"><tr className="text-[10px] font-black uppercase text-slate-400 tracking-widest"><th className="p-4">آلمانی</th><th className="p-4 text-right">توضیح</th></tr></thead>
                            <tbody>{lessonData.grammarData.pronouns.map((p, i) => (
                              <tr key={i} className="border-t border-slate-50 hover:bg-blue-50/30 transition-colors">
                                <td className="p-4 flex items-center gap-3 font-black text-blue-700 text-xl">
                                  <span>{p.de}</span>
                                  <button onClick={(e) => playTTS(p.de, e)} className="text-slate-400 hover:text-blue-600"><Volume2 size={18} /></button>
                                </td>
                                <td className="p-4 font-bold text-slate-500 text-right">{p.fa}</td>
                              </tr>
                            ))}</tbody>
                          </table>
                        )}
                      </div>
                    )}
                    <button onClick={() => setCompletedTasks(prev => prev.includes('grammar') ? prev : [...prev, 'grammar'])} className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('grammar') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white shadow-xl shadow-blue-100'}`}>
                      {completedTasks.includes('grammar') ? 'بخش گرامر تکمیل شد ✓' : 'اتمام مطالعه گرامر'}
                    </button>
                  </div>
                )}

                {activeSection === 'vocab' && lessonData && (
                  <div className="animate-in space-y-10">
                    <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3">واژگان جدید <MessageSquare className="text-blue-600" /></h2>
                    {lessonData.vocabData?.categories ? (
                      <div className="space-y-16">
                        {lessonData.vocabData.categories.map((cat, cIdx) => (
                          <div key={cIdx}>
                            {cat.title && <h3 className="text-2xl font-black text-slate-800 mb-6 border-b-2 border-slate-100 pb-3 inline-block pr-4 pl-12 rounded-tr-2xl bg-white shadow-sm">{cat.title}</h3>}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6" dir="ltr">
                              {cat.words.map((item, i) => (
                                <div key={i} className="flex flex-col p-6 bg-slate-50 rounded-[2rem] border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden group">
                                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 rounded-bl-full opacity-0 group-hover:opacity-5 transition-opacity"></div>
                                  <div className="flex justify-between items-start mb-6">
                                    <div>
                                      <div className="flex items-start gap-2 mb-2">
                                        {item.article && (
                                          <span className={`text-[10px] md:text-xs font-black uppercase px-2 py-1.5 rounded-lg shadow-sm mt-1 sm:mt-0 shrink-0 ${item.article === 'der' ? 'bg-blue-100 text-blue-700' : item.article === 'die' ? 'bg-red-100 text-red-700' : item.article === 'das' ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                                            {item.article}
                                          </span>
                                        )}
                                        <div className="flex flex-wrap items-center gap-2 w-full">
                                          <span className="font-black text-slate-900 text-xl md:text-2xl tracking-tight leading-none max-w-[calc(100%-40px)] break-words">{item.de}</span>
                                          <button onClick={(e) => playTTS(item.de, e)} className="text-blue-500 hover:text-blue-700 hover:scale-110 transition-transform bg-white p-1.5 md:p-2 rounded-full shadow-sm shrink-0"><Volume2 size={18} /></button>
                                        </div>
                                      </div>
                                      {item.plural && <p className="text-sm font-bold text-slate-500 ml-1">Plural: <span className="text-slate-800 bg-slate-200/50 px-2 py-0.5 rounded-md">{item.plural}</span></p>}
                                    </div>
                                    <span className="font-black text-slate-800 text-lg md:text-xl text-right bg-white px-3 md:px-4 py-2 rounded-xl shadow-sm border border-slate-100 mt-2 md:mt-0" dir="rtl">{item.fa}</span>
                                  </div>

                                  {item.examples && item.examples.length > 0 && (
                                    <div className="mt-auto space-y-3 pt-4 border-t border-slate-200/60 w-full">
                                      {item.examples.map((ex, exIdx) => (
                                        <div key={exIdx} className="bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-slate-100/50 hover:border-blue-100 transition-colors w-full">
                                          <div className="flex flex-col sm:flex-row items-start gap-2 w-full">
                                            <div className="flex items-start gap-2 w-full sm:w-auto flex-1">
                                              <button onClick={(e) => playTTS(ex.de, e)} className="text-indigo-400 hover:text-indigo-600 mt-0.5 shrink-0 bg-indigo-50 p-1.5 rounded-lg"><Play size={14} fill="currentColor" /></button>
                                              <p className="font-bold text-slate-700 text-base md:text-lg leading-snug break-words flex-1">{ex.de}</p>
                                            </div>
                                            <p className="text-sm md:text-base font-medium text-slate-500 text-right bg-slate-50 p-2 rounded-lg mt-2 sm:mt-0 w-full sm:w-auto break-words" dir="rtl">{ex.fa}</p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="ltr">
                        {lessonData.vocabData?.map((item, i) => (
                          <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:border-blue-300 transition-all">
                            <div className="text-left flex flex-col gap-2">
                              <div className="flex items-center gap-3">
                                <span className="font-black text-blue-700 text-2xl" dir="ltr">{item.de}</span>
                                <button onClick={(e) => playTTS(item.de, e)} className="text-slate-400 hover:text-blue-600"><Volume2 size={20} /></button>
                              </div>
                              <div className="flex items-center gap-2">
                                {item.usage && <button onClick={(e) => playTTS(item.usage, e)} className="text-slate-300 hover:text-blue-400"><Volume2 size={14} /></button>}
                                <p className="text-[10px] text-slate-400 uppercase font-bold" dir="ltr">{item.usage}</p>
                              </div>
                            </div>
                            <span className="font-black text-slate-700 text-lg">{item.fa}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <button onClick={() => setCompletedTasks(prev => prev.includes('vocab') ? prev : [...prev, 'vocab'])} className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('vocab') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white shadow-xl shadow-blue-100'}`}>
                      {completedTasks.includes('vocab') ? 'لغات را یاد گرفتم ✓' : 'اتمام تمرین لغات'}
                    </button>
                  </div>
                )}

                {activeSection === 'reading' && lessonData && (
                  <div className="animate-in space-y-10">
                    <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3">درک مطلب (Leseverstehen) <BookMarked className="text-blue-600" /></h2>
                    {Array.isArray(lessonData.reading) ? lessonData.reading.map((readItem, idx) => (
                      <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-6 relative">
                        <button onClick={(e) => playTTS(readItem.text, e)} className="absolute top-6 left-6 text-slate-400 hover:text-blue-600 bg-white p-3 rounded-xl shadow-sm"><Volume2 size={24} /></button>
                        <p className="text-xl font-medium text-slate-800 leading-loose whitespace-pre-line bg-white p-6 rounded-2xl md:ml-16 mb-6" dir="ltr">{readItem.text}</p>
                        {readItem.questions && (
                          <div className="mt-8 space-y-4">
                            <h4 className="font-black text-slate-700 mb-4">سوالات درک مطلب:</h4>
                            {readItem.questions.map((q, i) => (
                              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                <p className="font-bold text-slate-700">{i + 1}. {q.question}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )) : (
                      <div className="text-center py-10 text-slate-500 font-bold bg-slate-50 rounded-3xl border border-dashed border-slate-200 p-10">محتوای خواندنی این درس در حال آماده‌سازی است...</div>
                    )}
                    <button onClick={() => setCompletedTasks(prev => prev.includes('reading') ? prev : [...prev, 'reading'])} className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('reading') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white shadow-xl shadow-blue-100'}`}>
                      {completedTasks.includes('reading') ? 'بخش خواندن تمام شد ✓' : 'اتمام تمرین خواندن'}
                    </button>
                  </div>
                )}

                {activeSection === 'writing' && lessonData && (
                  <div className="animate-in space-y-10">
                    <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3">تمرین نوشتن (Schreiben) <PenTool className="text-blue-600" /></h2>
                    {Array.isArray(lessonData.writing) ? lessonData.writing.map((writeItem, idx) => (
                      <div key={idx} className="bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl text-white mb-10 overflow-hidden relative border border-slate-800">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-bl-full opacity-5 blur-3xl"></div>
                        <h3 className="text-2xl font-black mb-6 text-blue-300 flex items-center gap-4 relative z-10">
                          <span className="bg-blue-600/20 text-blue-400 p-3 rounded-2xl"><PenTool size={28} /></span>
                          {writeItem.title || "تمرین نگارش"}
                        </h3>

                        {writeItem.prompt && <p className="text-slate-200 leading-loose mb-10 whitespace-pre-line relative z-10 text-lg border-r-4 border-blue-500/50 pr-5 tracking-wide">{writeItem.prompt}</p>}

                        {writeItem.steps && (
                          <div className="space-y-6 mb-10 relative z-10">
                            {writeItem.steps.map((step, sIdx) => (
                              <div key={sIdx} className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/50 shadow-inner">
                                <h4 className="font-black text-blue-400 mb-4 flex items-center gap-3 text-xl"><span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm">{sIdx + 1}</span> {step.title}</h4>
                                <p className="text-slate-300 mb-6 leading-loose font-medium text-lg">{step.text}</p>
                                {step.example && (
                                  <div className="mb-2 bg-slate-900/80 p-5 rounded-2xl border-l-4 border-emerald-500 flex items-start gap-4 shadow-md" dir="ltr">
                                    <button onClick={(e) => playTTS(step.example.de, e)} className="text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 p-2 rounded-xl mt-0.5"><Volume2 size={24} /></button>
                                    <div>
                                      <p className="font-black text-emerald-50 text-xl mb-1">{step.example.de}</p>
                                      {step.example.fa && <p className="text-base text-slate-400 font-medium mt-2" dir="rtl">{step.example.fa}</p>}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="relative z-10 mt-8">
                          <label className="block text-slate-400 font-bold mb-3 text-sm tracking-widest uppercase">Your Workspace</label>
                          <textarea
                            className="w-full h-56 bg-white/5 border-2 border-slate-700/50 rounded-3xl p-6 text-white text-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500/50 focus:bg-white/10 outline-none resize-none transition-all placeholder-slate-600/50 font-medium leading-loose"
                            placeholder="متن خود را اینجا به آلمانی بنویسید (فقط جهت تمرین شخصی و یادداشت)..."
                            dir="ltr"
                          ></textarea>
                        </div>
                      </div>
                    )) : (
                      <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white text-center py-12">
                        موضوع انشاء این درس در حال آماده‌سازی است...
                      </div>
                    )}
                    <button onClick={() => setCompletedTasks(prev => prev.includes('writing') ? prev : [...prev, 'writing'])} className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('writing') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white shadow-xl shadow-blue-100'}`}>
                      {completedTasks.includes('writing') ? 'تمرین نوشتن تمام شد ✓' : 'پایان تمرین نوشتن'}
                    </button>
                  </div>
                )}

                {activeSection === 'listening' && lessonData && (
                  <div className="animate-in space-y-10 text-center py-10">
                    <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-orange-500 mb-6 shadow-sm"><Headphones size={40} /></div>
                    <h2 className="text-3xl font-black mb-8">شنیداری آلمانی</h2>
                    {Array.isArray(lessonData.listening) ? lessonData.listening.map((listenItem, idx) => (
                      <div key={idx} className="mb-8">
                        {listenItem.title && <h3 className="text-xl font-bold text-slate-700 mb-3 text-right">{listenItem.title}</h3>}
                        <p className="text-slate-500 text-sm mx-auto leading-relaxed text-right whitespace-pre-line mb-4">{listenItem.instructions}</p>
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mt-4 text-right">
                          <div className="bg-white p-5 rounded-2xl border border-slate-100 flex justify-between items-center">
                            <span className="font-black text-slate-800" dir="ltr">{listenItem.source}</span>
                            <a href={listenItem.link} target="_blank" rel="noreferrer" className="text-blue-600 font-black text-sm hover:underline">باز کردن لینک</a>
                          </div>
                        </div>
                      </div>
                    )) : (
                      <>
                        <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed whitespace-pre-line">{lessonData.listening?.instructions || "به پادکست گوش دهید و تکرار کنید."}</p>
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mt-8 text-right">
                          <div className="bg-white p-5 rounded-2xl border border-slate-100 flex justify-between items-center">
                            <span className="font-black text-slate-800">{lessonData.listening?.source}</span>
                            <a href={lessonData.listening?.link} target="_blank" rel="noreferrer" className="text-blue-600 font-black text-sm hover:underline">باز کردن لینک</a>
                          </div>
                        </div>
                      </>
                    )}
                    <button onClick={() => setCompletedTasks(prev => prev.includes('listening') ? prev : [...prev, 'listening'])} className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('listening') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white'}`}>
                      بخش شنیداری تمام شد ✓
                    </button>
                  </div>
                )}

                {activeSection === 'speaking' && lessonData && (
                  <div className="animate-in space-y-10">
                    <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3">تمرین مکالمه <Mic className="text-blue-600" /></h2>
                    {Array.isArray(lessonData.speaking) ? lessonData.speaking.map((speakItem, idx) => (
                      <div key={idx} className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden text-center mb-6">
                        <p className="text-[10px] opacity-40 font-black uppercase mb-3 tracking-widest">{speakItem.title || "تمرین"}</p>
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4">
                          <button onClick={(e) => playTTS(speakItem.pattern, e)} className="text-slate-400 hover:text-white bg-slate-800 p-3 rounded-xl"><Volume2 size={24} /></button>
                          <p className="text-xl md:text-3xl font-black mb-4 md:mb-6 leading-tight whitespace-pre-line flex-1 text-center md:text-left break-words" dir="ltr">{speakItem.pattern}</p>
                        </div>
                        <p className="text-sm border-t border-slate-700 pt-6 opacity-80 leading-relaxed font-medium whitespace-pre-line text-right">{speakItem.exercise}</p>
                        <div className="absolute top-0 left-0 p-10 opacity-5"><Mic size={160} /></div>
                      </div>
                    )) : (
                      <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden text-center">
                        <p className="text-[10px] opacity-40 font-black uppercase mb-3 tracking-widest">Today's Pattern</p>
                        <p className="text-2xl md:text-4xl font-black mb-6 leading-tight whitespace-pre-line break-words" dir="ltr">{lessonData.speaking?.pattern}</p>
                        <p className="text-sm opacity-60 leading-relaxed italic font-medium whitespace-pre-line">{lessonData.speaking?.exercise}</p>
                        <div className="absolute top-0 left-0 p-10 opacity-5"><Mic size={160} /></div>
                      </div>
                    )}
                    <button onClick={() => setCompletedTasks(prev => prev.includes('speaking') ? prev : [...prev, 'speaking'])} className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('speaking') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white shadow-xl shadow-blue-100'}`}>
                      تمرین گفتاری تمام شد ✓
                    </button>
                  </div>
                )}
                {activeSection === 'exam' && lessonData && (
                  <div className="animate-in space-y-10">
                    <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3 text-orange-600">آزمون جامع دوره‌ای <Star fill="currentColor" /></h2>

                    {lessonData.examData?.questions?.map((q, index) => (
                      <div key={index} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-6">
                        <p className="text-lg font-black text-slate-800 mb-4">{index + 1}. {q.question}</p>
                        <div className="space-y-3">
                          {q.options.map((opt, i) => (
                            <label key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl cursor-pointer hover:border-orange-400 transition-colors">
                              <input type="radio" name={`question-${index}`} className="w-4 h-4 text-orange-600 focus:ring-orange-500 border-gray-300" />
                              <span className="font-bold text-slate-700">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}

                    <button onClick={() => setCompletedTasks(prev => prev.includes('exam') ? prev : [...prev, 'exam'])} className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('exam') ? 'bg-green-100 text-green-700' : 'bg-orange-600 text-white shadow-xl shadow-orange-100'}`}>
                      {completedTasks.includes('exam') ? 'آزمون تکمیل شد ✓' : 'ثبت پاسخ‌ها و اتمام آزمون'}
                    </button>
                  </div>
                )}
              </div>
            </main>

            {lessonProgress === 100 && (
              <div className="mt-12 text-center animate-in">
                <button onClick={finishDay} className="bg-green-600 hover:bg-green-700 text-white px-24 py-6 rounded-[3rem] font-black text-2xl shadow-2xl transition-all scale-105 active:scale-95 flex items-center gap-4 mx-auto group">
                  ثبت پیشرفت و بازگشت
                  <CheckCircle2 size={32} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;