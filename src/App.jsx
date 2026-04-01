import React, { useState, useEffect, useMemo } from 'react';
import {
  LayoutDashboard, Calendar, CheckCircle2, Lock, Star, Trophy,
  ChevronLeft, BarChart3, BookOpen, Clock, ArrowRight, GraduationCap,
  MessageSquare, Headphones, Mic, Play, Award, ChevronRight, RotateCcw,
  Volume2, BookMarked, PenTool, Search, Map, Target, TrendingUp,
  BookCheck, Sparkles, X, Filter, Hash, Layers, Moon, Sun,
  Bookmark, BookmarkCheck, Shuffle, CheckSquare, ShuffleIcon
} from 'lucide-react';

import { curriculumData } from './data/curriculumData';

const App = () => {
  const [view, setView] = useState('dashboard');
  const [selectedDay, setSelectedDay] = useState(null);
  const [lessonData, setLessonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem('german_mastery_persian_v2');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeSection, setActiveSection] = useState('overview');
  const [completedTasksData, setCompletedTasksData] = useState(() => {
    const savedTasks = localStorage.getItem('german_mastery_tasks_v2');
    return savedTasks ? JSON.parse(savedTasks) : {};
  });
  const [lessonProgress, setLessonProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [allVocab, setAllVocab] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('german_dark_mode') === 'true';
  });
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('german_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [reviewQueue, setReviewQueue] = useState(() => {
    const saved = localStorage.getItem('german_review_queue');
    return saved ? JSON.parse(saved) : {};
  });

  const completedTasks = completedTasksData[selectedDay] || [];
  const isExamDay = selectedDay ? (curriculumData.getDayData(selectedDay)?.hasExam || false) : false;
  const totalDays = 55;

  useEffect(() => {
    localStorage.setItem('german_mastery_persian_v2', JSON.stringify(completedDays));
  }, [completedDays]);

  useEffect(() => {
    localStorage.setItem('german_mastery_tasks_v2', JSON.stringify(completedTasksData));
  }, [completedTasksData]);

  useEffect(() => {
    localStorage.setItem('german_dark_mode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('german_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('german_review_queue', JSON.stringify(reviewQueue));
  }, [reviewQueue]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (view === 'lesson') {
      const total = isExamDay ? 7 : 6;
      setLessonProgress((completedTasks.length / total) * 100);
    }
  }, [completedTasks, view, isExamDay]);

  const playTTS = (text, e) => {
    if (e) e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
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

  const handleDayClick = async (dayNum) => {
    if (dayNum <= totalDays) {
      setSelectedDay(dayNum);
      setActiveSection('overview');
      setLessonData(null);
      setIsLoading(true);
      setView('lesson');
      try {
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

  const toggleBookmark = (word) => {
    setBookmarks(prev => {
      const exists = prev.find(b => b.de === word.de);
      if (exists) return prev.filter(b => b.de !== word.de);
      return [...prev, { ...word, day: selectedDay, timestamp: Date.now() }];
    });
  };

  const isBookmarked = (word) => bookmarks.some(b => b.de === word.de);

  const addToReview = (word) => {
    setReviewQueue(prev => ({
      ...prev,
      [word.de]: { word, lastReview: Date.now(), interval: 1, ease: 2.5, nextReview: Date.now() + 86400000 }
    }));
  };

  const getReviewWords = () => {
    const now = Date.now();
    return Object.values(reviewQueue).filter(item => item.nextReview <= now);
  };

  const resetProgress = () => {
    if (window.confirm("آیا از پاک کردن کل پیشرفت خود مطمئن هستید؟ این عمل قابل بازگشت نیست.")) {
      setCompletedDays([]);
      setCompletedTasksData({});
      localStorage.removeItem('german_mastery_persian_v2');
      localStorage.removeItem('german_mastery_tasks_v2');
    }
  };

  const searchVocabulary = async (query) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }
    const results = [];
    const q = query.toLowerCase();
    for (let i = 1; i <= 55; i++) {
      try {
        const module = await import(`./data/day${i}.js`);
        const data = module[`day${i}Data`];
        if (data?.vocabData?.categories) {
          data.vocabData.categories.forEach(cat => {
            cat.words?.forEach(word => {
              if (word.de?.toLowerCase().includes(q) || word.fa?.includes(query)) {
                results.push({ ...word, day: i, category: cat.title });
              }
            });
          });
        }
      } catch { /* skip missing files */ }
    }
    setSearchResults(results.slice(0, 30));
  };

  const stats = useMemo(() => {
    const a1 = curriculumData.getLevelProgress(completedDays, "A1");
    const a2 = curriculumData.getLevelProgress(completedDays, "A2");
    const b1 = curriculumData.getLevelProgress(completedDays, "B1");
    const totalVocab = completedDays.length * 15;
    const studyHours = completedDays.length * 1.5;
    return { a1, a2, b1, totalVocab, studyHours };
  }, [completedDays]);

  // ─── SectionCard ───
  const SectionCard = ({ id, icon: Icon, title, time, desc }) => (
    <div
      onClick={() => { setActiveSection(id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${activeSection === id ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-slate-100 hover:border-blue-200 bg-white'}`}
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

  // ─── InteractiveQuiz ───
  const InteractiveQuiz = ({ quizData }) => {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    if (!quizData || !quizData.questions || !Array.isArray(quizData.questions)) return null;

    const handleSelect = (qIdx, oIdx) => {
      if (showResults) return;
      setSelectedAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
    };

    const score = useMemo(() => {
      if (!showResults) return 0;
      let correct = 0;
      quizData.questions.forEach((q, i) => {
        if (q.options[selectedAnswers[i]]?.isCorrect) correct++;
      });
      return correct;
    }, [showResults, selectedAnswers, quizData]);

    return (
      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 mt-6" dir="rtl">
        <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-xl"><Star size={24} /></span>
          {quizData.title || "کوییز تعاملی"}
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
                    if (isCorrect) btnClass += "border-green-500 bg-green-50 text-green-700 shadow-md";
                    else if (isSelected && !isCorrect) btnClass += "border-red-500 bg-red-50 text-red-700 opacity-60";
                    else btnClass += "border-slate-100 text-slate-400 opacity-30";
                  }
                  return (
                    <button key={oIdx} onClick={() => handleSelect(qIdx, oIdx)} className={btnClass} dir="ltr">
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
        {showResults && (
          <div className={`mt-6 p-6 rounded-2xl text-center ${score === quizData.questions.length ? 'bg-green-50 border-2 border-green-300' : score >= quizData.questions.length * 0.7 ? 'bg-yellow-50 border-2 border-yellow-300' : 'bg-red-50 border-2 border-red-300'}`}>
            <p className="text-3xl font-black mb-2">{score} / {quizData.questions.length}</p>
            <p className="font-bold text-lg">
              {score === quizData.questions.length ? '🎉 عالی! همه درست!' : score >= quizData.questions.length * 0.7 ? '👍 خوب بود! ولی یه کم تمرین بیشتر لازمه.' : '📚 باید بیشتر تمرین کنی. دوباره بخون و امتحان بده.'}
            </p>
          </div>
        )}
        {!showResults && Object.keys(selectedAnswers).length === quizData.questions.length && (
          <button onClick={() => setShowResults(true)} className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-blue-700 transition-all w-full shadow-lg hover:shadow-xl hover:-translate-y-1">
            بررسی جواب‌ها
          </button>
        )}
      </div>
    );
  };

  // ─── FillInTheBlank ───
  const FillInTheBlank = ({ data }) => {
    const [answers, setAnswers] = useState({});
    const [showHints, setShowHints] = useState({});

    if (!data || !data.blanks || !Array.isArray(data.blanks)) return null;

    const checkAnswer = (idx) => {
      return answers[idx]?.toLowerCase().trim() === data.blanks[idx].answer.toLowerCase();
    };

    const allCorrect = data.blanks.every((_, idx) => checkAnswer(idx));

    return (
      <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-200 mt-6" dir="rtl">
        <h3 className="text-xl font-black text-indigo-900 mb-4 flex items-center gap-3">
          <span className="bg-indigo-100 text-indigo-600 p-2 rounded-xl"><PenTool size={20} /></span>
          {data.title || "جای خالی را پر کنید"}
        </h3>
        <p className="text-indigo-700 mb-4 font-medium">{data.instruction}</p>
        <div className="space-y-4">
          {data.blanks.map((blank, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-indigo-100">
              <p className="font-bold text-slate-700 mb-3" dir="ltr">{blank.sentence}</p>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={answers[idx] || ''}
                  onChange={(e) => setAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                  placeholder="جوابت رو بنویس..."
                  className={`flex-1 px-4 py-3 rounded-xl border-2 outline-none font-bold text-lg transition-all ${checkAnswer(idx) ? 'border-green-400 bg-green-50' : answers[idx] ? 'border-orange-300 bg-orange-50' : 'border-slate-200'}`}
                  dir="ltr"
                />
                {checkAnswer(idx) && <CheckCircle2 size={24} className="text-green-500 shrink-0" />}
              </div>
              <button onClick={() => setShowHints(prev => ({ ...prev, [idx]: !prev[idx] }))} className="text-xs text-indigo-400 mt-2 hover:text-indigo-600">
                {showHints[idx] ? 'مخفی کردن راهنمایی' : 'راهنمایی'}
              </button>
              {showHints[idx] && <p className="text-sm text-indigo-600 mt-1 font-medium">{blank.hint}</p>}
            </div>
          ))}
        </div>
        {allCorrect && (
          <div className="mt-4 p-4 bg-green-100 rounded-xl text-center">
            <p className="text-green-700 font-black text-lg">🎉 آفرین! همه جواب‌ها درسته!</p>
          </div>
        )}
      </div>
    );
  };

  // ─── VocabularyReviewGame ───
  const VocabularyReviewGame = ({ words }) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [known, setKnown] = useState([]);
    const [unknown, setUnknown] = useState([]);

    if (!words || words.length === 0) return null;
    const current = words[currentIdx];

    const handleKnow = () => {
      setKnown(prev => [...prev, currentIdx]);
      setShowAnswer(false);
      setCurrentIdx(prev => Math.min(prev + 1, words.length - 1));
    };

    const handleDontKnow = () => {
      setUnknown(prev => [...prev, currentIdx]);
      setShowAnswer(false);
      setCurrentIdx(prev => Math.min(prev + 1, words.length - 1));
    };

    const isDone = known.length + unknown.length >= words.length;

    if (isDone) {
      return (
        <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center" dir="rtl">
          <h3 className="text-2xl font-black mb-4">نتیجه مرور لغات</h3>
          <div className="flex justify-center gap-8 mb-6">
            <div className="text-center">
              <p className="text-4xl font-black text-green-600">{known.length}</p>
              <p className="text-sm text-slate-500 font-bold">بلدم</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-red-500">{unknown.length}</p>
              <p className="text-sm text-slate-500 font-bold">نمی‌دونم</p>
            </div>
          </div>
          <button onClick={() => { setKnown([]); setUnknown([]); setCurrentIdx(0); setShowAnswer(false); }}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-black hover:bg-blue-700">
            دوباره مرور کن
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center" dir="rtl">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-bold text-slate-400">{known.length + unknown.length + 1} / {words.length}</span>
          <span className="text-sm font-bold text-green-600">بلدم: {known.length}</span>
          <span className="text-sm font-bold text-red-500">نمی‌دونم: {unknown.length}</span>
        </div>
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          <p className="text-3xl font-black text-blue-700 mb-4" dir="ltr">{current.de}</p>
          {current.article && <span className="text-sm text-slate-400 mb-6">{current.article}</span>}
          {showAnswer ? (
            <div className="mt-4">
              <p className="text-2xl font-bold text-slate-700 mb-2">{current.fa}</p>
              {current.examples?.[0] && (
                <p className="text-sm text-slate-500 mt-2" dir="ltr">{current.examples[0].de}</p>
              )}
            </div>
          ) : (
            <button onClick={() => setShowAnswer(true)} className="mt-4 bg-slate-100 text-slate-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-200">
              نشون بده
            </button>
          )}
        </div>
        {showAnswer && (
          <div className="flex gap-4 mt-6">
            <button onClick={handleDontKnow} className="flex-1 bg-red-50 text-red-600 px-6 py-4 rounded-xl font-black border-2 border-red-200 hover:bg-red-100">
              ❌ نمی‌دونم
            </button>
            <button onClick={handleKnow} className="flex-1 bg-green-50 text-green-600 px-6 py-4 rounded-xl font-black border-2 border-green-200 hover:bg-green-100">
              ✅ بلدم
            </button>
          </div>
        )}
      </div>
    );
  };

  // ─── Search Modal ───
  const SearchModal = () => {
    if (view !== 'search') return null;
    return (
      <div className="animate-in pb-20 px-4 md:px-0">
        <nav className="bg-white border-b p-4 sticky top-0 z-50 flex justify-between items-center max-w-6xl mx-auto rounded-b-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setView('dashboard')} className="p-2 text-slate-400 hover:text-blue-600">
              <ChevronLeft size={20} className="rotate-180" />
            </button>
            <h1 className="text-xl font-black flex items-center gap-2"><Search size={20} /> جستجوی لغات</h1>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto p-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => searchVocabulary(e.target.value)}
              placeholder="یه لغت آلمانی یا فارسی سرچ کن..."
              className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 outline-none focus:border-blue-400 text-xl font-bold transition-all"
              dir="ltr"
              autoFocus
            />
          </div>
          {searchResults.length > 0 ? (
            <div className="space-y-4">
              {searchResults.map((word, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center hover:border-blue-200 transition-all">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {word.article && <span className="text-xs font-black bg-blue-100 text-blue-600 px-2 py-1 rounded">{word.article}</span>}
                      <span className="font-black text-xl text-slate-800" dir="ltr">{word.de}</span>
                      <button onClick={(e) => playTTS(word.de, e)} className="text-blue-400 hover:text-blue-600"><Volume2 size={16} /></button>
                    </div>
                    <p className="text-slate-500 font-medium">{word.fa}</p>
                  </div>
                  <button onClick={() => { setView('lesson'); handleDayClick(word.day); }}
                    className="text-xs bg-slate-100 text-slate-600 px-3 py-2 rounded-lg font-bold hover:bg-blue-100 hover:text-blue-600">
                    روز {word.day}
                  </button>
                </div>
              ))}
            </div>
          ) : searchQuery.length >= 2 ? (
            <div className="text-center py-20 text-slate-400">
              <Search size={48} className="mx-auto mb-4 opacity-30" />
              <p className="font-bold">هیچ نتیجه‌ای پیدا نشد</p>
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400">
              <Search size={48} className="mx-auto mb-4 opacity-30" />
              <p className="font-bold">حداقل ۲ حرف تایپ کنید</p>
            </div>
          )}
        </main>
      </div>
    );
  };

  // ─── Stats View ───
  const StatsView = () => {
    if (view !== 'stats') return null;
    return (
      <div className="animate-in pb-20 px-4 md:px-0">
        <nav className="bg-white border-b p-4 sticky top-0 z-50 flex justify-between items-center max-w-6xl mx-auto rounded-b-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setView('dashboard')} className="p-2 text-slate-400 hover:text-blue-600">
              <ChevronLeft size={20} className="rotate-180" />
            </button>
            <h1 className="text-xl font-black flex items-center gap-2"><BarChart3 size={20} /> آمار و پیشرفت</h1>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center">
              <p className="text-4xl font-black text-blue-600">{completedDays.length}</p>
              <p className="text-sm text-slate-500 font-bold mt-1">روز تکمیل شده</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center">
              <p className="text-4xl font-black text-green-600">~{stats.totalVocab}</p>
              <p className="text-sm text-slate-500 font-bold mt-1">لغت یاد گرفته</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center">
              <p className="text-4xl font-black text-orange-600">~{Math.round(stats.studyHours)}</p>
              <p className="text-sm text-slate-500 font-bold mt-1">ساعت مطالعه</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center">
              <p className="text-4xl font-black text-purple-600">{Math.round((completedDays.length / 55) * 100)}%</p>
              <p className="text-sm text-slate-500 font-bold mt-1">کل دوره</p>
            </div>
          </div>
          <h2 className="text-xl font-black mb-4">پیشرفت هر سطح</h2>
          {curriculumData.levels.map(level => {
            const progress = curriculumData.getLevelProgress(completedDays, level.id);
            return (
              <div key={level.id} className="bg-white p-6 rounded-3xl border border-slate-100 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-black text-lg">{level.title}</h3>
                    <p className="text-sm text-slate-400">{level.subtitle}</p>
                  </div>
                  <span className="text-3xl font-black text-blue-600">{progress}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full transition-all duration-700" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    );
  };

  // ─── ReadingComprehension ───
  const ReadingComprehension = ({ data, playTTS }) => {
    const [showAnswers, setShowAnswers] = useState(false);
    if (!data) return null;
    return (
      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-6 relative">
        <button onClick={(e) => playTTS(data.text, e)} className="absolute top-6 left-6 text-slate-400 hover:text-blue-600 bg-white p-3 rounded-xl shadow-sm"><Volume2 size={24} /></button>
        <p className="text-xl font-medium text-slate-800 leading-loose whitespace-pre-line bg-white p-6 rounded-2xl md:ml-16 mb-6" dir="ltr">{data.text}</p>
        {data.questions && (
          <div className="mt-8 space-y-4">
            <h4 className="font-black text-slate-700 mb-4">سوالات درک مطلب:</h4>
            {data.questions.map((q, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <p className="font-bold text-slate-700">{i + 1}. {q.question}</p>
                {showAnswers && q.answer && (
                  <p className="text-green-700 font-medium mt-2 bg-green-50 p-3 rounded-lg">✅ {q.answer}</p>
                )}
              </div>
            ))}
            <button onClick={() => setShowAnswers(!showAnswers)} className="text-sm text-blue-600 font-bold hover:underline mt-2">
              {showAnswers ? 'مخفی کردن جواب‌ها' : 'نمایش جواب‌ها'}
            </button>
          </div>
        )}
      </div>
    );
  };

  // ─── WritingExercise ───
  const WritingExercise = ({ data, playTTS }) => {
    const [userText, setUserText] = useState('');
    const [showModel, setShowModel] = useState(false);
    if (!data) return null;
    return (
      <div className="bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl text-white mb-10 overflow-hidden relative border border-slate-800">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-bl-full opacity-5 blur-3xl"></div>
        <h3 className="text-2xl font-black mb-6 text-blue-300 flex items-center gap-4 relative z-10">
          <span className="bg-blue-600/20 text-blue-400 p-3 rounded-2xl"><PenTool size={28} /></span>
          {data.title || "تمرین نگارش"}
        </h3>
        {data.prompt && <p className="text-slate-200 leading-loose mb-10 whitespace-pre-line relative z-10 text-lg border-r-4 border-blue-500/50 pr-5 tracking-wide">{data.prompt}</p>}
        {data.steps && (
          <div className="space-y-6 mb-10 relative z-10">
            {data.steps.map((step, sIdx) => (
              <div key={sIdx} className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/50 shadow-inner">
                <h4 className="font-black text-blue-400 mb-4 flex items-center gap-3 text-xl">
                  <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm">{sIdx + 1}</span>
                  {step.title}
                </h4>
                <p className="text-slate-300 mb-6 leading-loose font-medium text-lg">{step.text}</p>
                {step.example && (
                  <div className="mb-2 bg-slate-900/80 p-5 rounded-2xl border-l-4 border-emerald-500 flex items-start gap-4 shadow-md" dir="ltr">
                    <button onClick={(e) => playTTS(step.example.de, e)} className="text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 p-2 rounded-xl mt-0.5 shrink-0"><Volume2 size={24} /></button>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-emerald-50 text-xl mb-1 break-words">{step.example.de}</p>
                      {step.example.fa && <p className="text-base text-slate-400 font-medium mt-2 break-words" dir="rtl">{step.example.fa}</p>}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="relative z-10 mt-8">
          <label className="block text-slate-400 font-bold mb-3 text-sm tracking-widest uppercase">تمرین شما</label>
          <textarea
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            className="w-full h-56 bg-white/5 border-2 border-slate-700/50 rounded-3xl p-6 text-white text-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500/50 focus:bg-white/10 outline-none resize-none transition-all placeholder-slate-600/50 font-medium leading-loose"
            placeholder="متن خود را اینجا به آلمانی بنویسید..."
            dir="ltr"
          />
          <div className="flex justify-between items-center mt-4">
            <span className="text-slate-500 text-sm">{userText.split(/\s+/).filter(Boolean).length} کلمه</span>
            {data.modelAnswer && (
              <button onClick={() => setShowModel(!showModel)} className="text-blue-400 text-sm font-bold hover:text-blue-300">
                {showModel ? 'مخفی کردن نمونه جواب' : 'نمایش نمونه جواب'}
              </button>
            )}
          </div>
          {showModel && data.modelAnswer && (
            <div className="mt-4 bg-emerald-900/30 p-6 rounded-2xl border border-emerald-700/30">
              <p className="text-emerald-300 font-bold text-sm mb-2">نمونه جواب:</p>
              <p className="text-white leading-loose" dir="ltr">{data.modelAnswer}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ─── ExamSection ───
  const ExamSection = ({ lessonData, onComplete, isCompleted }) => {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = lessonData.examData?.questions || [];
    const score = useMemo(() => {
      if (!showResults) return 0;
      let correct = 0;
      questions.forEach((q, i) => {
        if (selectedAnswers[i] === q.answer) correct++;
      });
      return correct;
    }, [showResults, selectedAnswers, questions]);

    if (questions.length === 0) {
      return <div className="text-center py-10 text-slate-400">آزمون این درس در حال آماده‌سازی است...</div>;
    }

    return (
      <div className="animate-in space-y-10">
        <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3 text-orange-600">
          <Star fill="currentColor" /> آزمون جامع
        </h2>
        <div className="space-y-6">
          {questions.map((q, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <p className="text-lg font-black text-slate-800 mb-4">{index + 1}. {q.question}</p>
              <div className="space-y-3">
                {q.options.map((opt, i) => {
                  const isSelected = selectedAnswers[index] === i;
                  const isCorrect = q.answer === i;
                  let cls = "flex items-center gap-3 p-4 bg-white border-2 rounded-2xl cursor-pointer transition-all ";
                  if (!showResults) {
                    cls += isSelected ? "border-orange-500 bg-orange-50" : "border-slate-200 hover:border-orange-300";
                  } else {
                    if (isCorrect) cls += "border-green-500 bg-green-50";
                    else if (isSelected && !isCorrect) cls += "border-red-500 bg-red-50 opacity-60";
                    else cls += "border-slate-100 opacity-30";
                  }
                  return (
                    <div key={i} onClick={() => !showResults && setSelectedAnswers(prev => ({ ...prev, [index]: i }))} className={cls}>
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold ${showResults && isCorrect ? 'border-green-500 text-green-600' : isSelected ? 'border-orange-500 text-orange-600' : 'border-slate-300 text-slate-400'}`}>
                        {showResults && isCorrect ? '✓' : String.fromCharCode(65 + i)}
                      </span>
                      <span className="font-bold text-slate-700">{opt}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        {showResults && (
          <div className={`p-6 rounded-3xl text-center ${score >= questions.length * 0.7 ? 'bg-green-50 border-2 border-green-300' : 'bg-red-50 border-2 border-red-300'}`}>
            <p className="text-4xl font-black mb-2">{score} / {questions.length}</p>
            <p className="font-bold text-lg">
              {score >= questions.length * 0.8 ? '🎉 عالی! آماده روز بعدی هستی!' : score >= questions.length * 0.6 ? '👍 قابل قبول! ولی مرور کن.' : '📚 باید بیشتر تمرین کنی.'}
            </p>
          </div>
        )}
        {!showResults && Object.keys(selectedAnswers).length === questions.length && (
          <button onClick={() => setShowResults(true)} className="w-full py-5 bg-orange-600 text-white rounded-2xl font-black text-lg hover:bg-orange-700 transition-all shadow-xl">
            بررسی جواب‌ها
          </button>
        )}
        {showResults && (
          <button onClick={onComplete} className={`w-full py-5 rounded-2xl font-black transition-all ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-green-600 text-white shadow-xl hover:bg-green-700'}`}>
            {isCompleted ? 'آزمون تکمیل شد ✓' : 'ثبت و اتمام آزمون'}
          </button>
        )}
      </div>
    );
  };

  // ─── VerbConjugation Exercise ───
  const VerbConjugation = ({ data }) => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const persons = ['ich', 'du', 'er', 'wir', 'ihr', 'sie'];
    const personLabels = { ich: 'ich', du: 'du', er: 'er/sie/es', wir: 'wir', ihr: 'ihr', sie: 'sie/Sie' };

    if (!data || Object.keys(data).length === 0) return null;
    const correctCount = persons.filter(p => answers[p]?.toLowerCase().trim() === data[p]?.toLowerCase()).length;

    return (
      <div className="bg-violet-50 p-6 rounded-3xl border border-violet-200" dir="rtl">
        <h3 className="text-xl font-black text-violet-900 mb-4 flex items-center gap-3">
          <span className="bg-violet-100 text-violet-600 p-2 rounded-xl"><BookOpen size={20} /></span>
          صرف فعل: {data.infinitiv || 'تمرین'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {persons.map(p => (
            <div key={p} className="bg-white p-3 rounded-xl border border-violet-100">
              <label className="text-xs font-bold text-violet-600 block mb-1">{personLabels[p]}</label>
              <input
                type="text"
                value={answers[p] || ''}
                onChange={e => setAnswers(prev => ({ ...prev, [p]: e.target.value }))}
                className={`w-full px-3 py-2 rounded-lg border-2 outline-none font-bold text-sm ${showResults ? (answers[p]?.toLowerCase().trim() === data[p]?.toLowerCase() ? 'border-green-400 bg-green-50' : 'border-red-300 bg-red-50') : 'border-slate-200'}`}
                dir="ltr"
                placeholder="..."
              />
              {showResults && answers[p]?.toLowerCase().trim() !== data[p]?.toLowerCase() && (
                <p className="text-xs text-green-600 font-bold mt-1">{data[p]}</p>
              )}
            </div>
          ))}
        </div>
        {showResults && (
          <p className="text-center font-black mt-4 text-lg">{correctCount}/6 درست</p>
        )}
        {!showResults && Object.keys(answers).length >= 6 && (
          <button onClick={() => setShowResults(true)} className="w-full mt-4 bg-violet-600 text-white py-3 rounded-xl font-black hover:bg-violet-700">
            بررسی
          </button>
        )}
      </div>
    );
  };

  // ─── SentenceBuilder Exercise ───
  const SentenceBuilder = ({ sentence, words }) => {
    const [available, setAvailable] = useState(() => words ? [...words].sort(() => Math.random() - 0.5) : []);
    const [built, setBuilt] = useState([]);
    const [showResult, setShowResult] = useState(false);

    if (!words || !sentence) return null;

    const isCorrect = built.join(' ') === sentence;

    const addWord = (word, idx) => {
      setBuilt(prev => [...prev, word]);
      setAvailable(prev => prev.filter((_, i) => i !== idx));
    };

    const removeWord = (idx) => {
      setAvailable(prev => [...prev, built[idx]]);
      setBuilt(prev => prev.filter((_, i) => i !== idx));
    };

    const reset = () => {
      setAvailable([...words].sort(() => Math.random() - 0.5));
      setBuilt([]);
      setShowResult(false);
    };

    return (
      <div className="bg-teal-50 p-6 rounded-3xl border border-teal-200" dir="ltr">
        <h3 className="text-lg font-black text-teal-900 mb-4 flex items-center gap-3" dir="rtl">
          <span className="bg-teal-100 text-teal-600 p-2 rounded-xl"><ShuffleIcon size={20} /></span>
          کلمات را مرتب کنید
        </h3>
        <div className="min-h-[50px] bg-white p-4 rounded-xl border-2 border-dashed border-teal-300 mb-4 flex flex-wrap gap-2">
          {built.length === 0 && <span className="text-slate-400 text-sm">کلمات را اینجا بکشید...</span>}
          {built.map((w, i) => (
            <button key={i} onClick={() => removeWord(i)} className={`px-3 py-2 rounded-lg font-bold text-sm ${showResult ? (isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800') : 'bg-teal-200 text-teal-800'}`}>
              {w}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {available.map((w, i) => (
            <button key={i} onClick={() => addWord(w, i)} className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg font-bold text-sm hover:bg-teal-100 hover:text-teal-800 border border-slate-200">
              {w}
            </button>
          ))}
        </div>
        {showResult && !isCorrect && <p className="text-green-700 font-bold text-sm mb-2" dir="rtl">جمله درست: {sentence}</p>}
        {showResult && <p className={`font-black text-center ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>{isCorrect ? '✅ عالی!' : '❌ اشتباه'}</p>}
        <div className="flex gap-2 mt-3">
          {built.length > 0 && !showResult && <button onClick={() => setShowResult(true)} className="flex-1 bg-teal-600 text-white py-2 rounded-xl font-black hover:bg-teal-700">بررسی</button>}
          <button onClick={reset} className="px-4 py-2 bg-slate-200 text-slate-600 rounded-xl font-bold"><RotateCcw size={16} /></button>
        </div>
      </div>
    );
  };

  // ─── MatchingGame Exercise ───
  const MatchingGame = ({ pairs }) => {
    const [selected, setSelected] = useState(null);
    const [matched, setMatched] = useState([]);

    if (!pairs || !Array.isArray(pairs) || pairs.length === 0) return null;

    const [shuffledRight] = useState(() => [...pairs].sort(() => Math.random() - 0.5));

    const handleLeftClick = (idx) => { if (!matched.includes('l'+idx)) setSelected({ side: 'left', idx }); };
    const handleRightClick = (idx) => {
      if (selected?.side === 'left' && !matched.includes('r'+idx)) {
        if (pairs[selected.idx].de === shuffledRight[idx].de) {
          setMatched(prev => [...prev, 'l'+selected.idx, 'r'+idx]);
        }
        setSelected(null);
      }
    };

    const isComplete = matched.length >= pairs.length * 2;

    return (
      <div className="bg-amber-50 p-6 rounded-3xl border border-amber-200" dir="rtl">
        <h3 className="text-lg font-black text-amber-900 mb-4 flex items-center gap-3">
          <span className="bg-amber-100 text-amber-600 p-2 rounded-xl"><CheckSquare size={20} /></span>
          تطابق: آلمانی ↔ فارسی
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            {pairs.map((p, i) => (
              <button key={i} onClick={() => handleLeftClick(i)}
                className={`w-full p-3 rounded-xl text-sm font-bold text-left border-2 transition-all ${matched.includes('l'+i) ? 'bg-green-100 border-green-300 text-green-700' : selected?.idx === i ? 'bg-amber-200 border-amber-400' : 'bg-white border-slate-200 hover:border-amber-300'}`}
                dir="ltr">{p.de}</button>
            ))}
          </div>
          <div className="space-y-2">
            {shuffledRight.map((p, i) => (
              <button key={i} onClick={() => handleRightClick(i)}
                className={`w-full p-3 rounded-xl text-sm font-bold text-right border-2 transition-all ${matched.includes('r'+i) ? 'bg-green-100 border-green-300 text-green-700' : 'bg-white border-slate-200 hover:border-amber-300'}`}
                dir="rtl">{p.fa}</button>
            ))}
          </div>
        </div>
        {isComplete && <p className="text-center font-black text-green-600 mt-4 text-lg">🎉 همه درست!</p>}
      </div>
    );
  };

  // ─── ArticleQuiz Exercise ───
  const ArticleQuiz = ({ nouns }) => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const articles = ['der', 'die', 'das'];

    if (!nouns || !Array.isArray(nouns) || nouns.length === 0) return null;

    const correctCount = nouns.filter(n => answers[n.de] === n.article).length;

    return (
      <div className="bg-rose-50 p-6 rounded-3xl border border-rose-200" dir="rtl">
        <h3 className="text-lg font-black text-rose-900 mb-4 flex items-center gap-3">
          <span className="bg-rose-100 text-rose-600 p-2 rounded-xl"><Layers size={20} /></span>
          آرتیکل صحیح را انتخاب کنید
        </h3>
        <div className="space-y-3">
          {nouns.map((n, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-rose-100 flex items-center justify-between">
              <span className="font-bold text-slate-700" dir="ltr">{n.de} — {n.fa}</span>
              <div className="flex gap-2">
                {articles.map(a => (
                  <button key={a} onClick={() => !showResults && setAnswers(prev => ({ ...prev, [n.de]: a }))}
                    className={`px-4 py-2 rounded-lg font-bold text-sm border-2 transition-all ${showResults ? (a === n.article ? 'bg-green-200 border-green-400 text-green-800' : answers[n.de] === a ? 'bg-red-100 border-red-300 text-red-600' : 'bg-slate-50 border-slate-200 text-slate-400') : answers[n.de] === a ? 'bg-rose-200 border-rose-400' : 'bg-slate-50 border-slate-200 hover:border-rose-300'}`}>
                    {a}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        {showResults && <p className="text-center font-black mt-4 text-lg">{correctCount}/{nouns.length} درست</p>}
        {!showResults && Object.keys(answers).length >= nouns.length && (
          <button onClick={() => setShowResults(true)} className="w-full mt-4 bg-rose-600 text-white py-3 rounded-xl font-black hover:bg-rose-700">بررسی</button>
        )}
      </div>
    );
  };

  // ─── Glossary View ───
  const GlossaryView = () => {
    const [query, setQuery] = useState('');
    const [filterDay, setFilterDay] = useState('all');
    const [glossaryWords, setGlossaryWords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadAll = async () => {
        const allWords = [];
        for (let i = 1; i <= 55; i++) {
          try {
            const m = await import(`./data/day${i}.js`);
            const d = m[`day${i}Data`];
            if (d?.vocabData?.categories) {
              d.vocabData.categories.forEach(cat => {
                cat.words?.forEach(w => {
                  allWords.push({ ...w, day: i, category: cat.title });
                });
              });
            }
          } catch {}
        }
        setGlossaryWords(allWords);
        setLoading(false);
      };
      loadAll();
    }, []);

    const filtered = glossaryWords.filter(w => {
      const matchQuery = !query || w.de?.toLowerCase().includes(query.toLowerCase()) || w.fa?.includes(query);
      const matchDay = filterDay === 'all' || w.day === parseInt(filterDay);
      return matchQuery && matchDay;
    });

    return (
      <div className="animate-in pb-20 px-4 md:px-0">
        <nav className="bg-white dark:bg-slate-800 border-b p-4 sticky top-0 z-50 flex justify-between items-center max-w-6xl mx-auto rounded-b-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setView('dashboard')} className="p-2 text-slate-400 hover:text-blue-600"><ChevronLeft size={20} className="rotate-180" /></button>
            <h1 className="text-xl font-black flex items-center gap-2"><BookMarked size={20} /> واژه‌نامه کامل</h1>
          </div>
          <span className="text-sm text-slate-500">{filtered.length} لغت</span>
        </nav>
        <main className="max-w-6xl mx-auto p-6">
          <div className="flex gap-4 mb-6">
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="جستجوی لغت..."
              className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 outline-none focus:border-blue-400 font-bold" dir="ltr" autoFocus />
            <select value={filterDay} onChange={e => setFilterDay(e.target.value)} className="px-4 py-3 rounded-xl border-2 border-slate-200 font-bold">
              <option value="all">همه روزها</option>
              {Array.from({length:55},(_,i)=>i+1).map(d=><option key={d} value={d}>روز {d}</option>)}
            </select>
          </div>
          {loading ? <p className="text-center py-10">در حال بارگذاری...</p> : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filtered.slice(0, 100).map((w, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 flex justify-between items-center hover:border-blue-200 transition-all">
                  <div>
                    <div className="flex items-center gap-2">
                      {w.article && <span className="text-xs font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded">{w.article}</span>}
                      <span className="font-black text-lg" dir="ltr">{w.de}</span>
                      {w.ipa && <span className="text-xs text-slate-400">{w.ipa}</span>}
                      <button onClick={() => playTTS(w.de)} className="text-blue-400 hover:text-blue-600"><Volume2 size={14} /></button>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">{w.fa}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">روز {w.day}</span>
                    <button onClick={() => toggleBookmark(w)} className={isBookmarked(w) ? 'text-yellow-500' : 'text-slate-300'}>
                      {isBookmarked(w) ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    );
  };

  // ─── Bookmarks View ───
  const BookmarksView = () => (
    <div className="animate-in pb-20 px-4 md:px-0">
      <nav className="bg-white dark:bg-slate-800 border-b p-4 sticky top-0 z-50 flex justify-between items-center max-w-6xl mx-auto rounded-b-2xl shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => setView('dashboard')} className="p-2 text-slate-400 hover:text-blue-600"><ChevronLeft size={20} className="rotate-180" /></button>
          <h1 className="text-xl font-black flex items-center gap-2"><BookmarkCheck size={20} /> لغات نشان‌شده</h1>
        </div>
        <span className="text-sm text-slate-500">{bookmarks.length} لغت</span>
      </nav>
      <main className="max-w-6xl mx-auto p-6">
        {bookmarks.length === 0 ? (
          <div className="text-center py-20 text-slate-400"><Bookmark size={48} className="mx-auto mb-4 opacity-30" /><p className="font-bold">هنوز لغتی نشان‌گذاری نکردید</p></div>
        ) : (
          <div className="space-y-3">
            {bookmarks.map((w, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                <div>
                  <span className="font-black text-lg" dir="ltr">{w.de}</span>
                  {w.ipa && <span className="text-xs text-slate-400 mr-2">{w.ipa}</span>}
                  <p className="text-sm text-slate-500">{w.fa}</p>
                </div>
                <button onClick={() => toggleBookmark(w)} className="text-red-400 hover:text-red-600"><X size={18} /></button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );

  // ─── Review View ───
  const ReviewView = () => {
    const reviewWords = getReviewWords();
    const [currentIdx, setCurrentIdx] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [done, setDone] = useState([]);

    if (reviewWords.length === 0) {
      return (
        <div className="animate-in pb-20 px-4 md:px-0">
          <nav className="bg-white border-b p-4 sticky top-0 z-50 flex justify-between items-center max-w-6xl mx-auto rounded-b-2xl shadow-sm">
            <div className="flex items-center gap-3">
              <button onClick={() => setView('dashboard')} className="p-2 text-slate-400 hover:text-blue-600"><ChevronLeft size={20} className="rotate-180" /></button>
              <h1 className="text-xl font-black flex items-center gap-2"><RotateCcw size={20} /> مرور لغات</h1>
            </div>
          </nav>
          <main className="max-w-6xl mx-auto p-6 text-center py-20">
            <CheckCircle2 size={64} className="mx-auto mb-4 text-green-500" />
            <h2 className="text-2xl font-black mb-2">همه لغات مرور شدند!</h2>
            <p className="text-slate-500">فعلاً لغتی برای مرور ندارید. بعد از یادگیری لغات جدید، اینجا نمایش داده می‌شوند.</p>
          </main>
        </div>
      );
    }

    const current = reviewWords[currentIdx % reviewWords.length];

    const handleAnswer = (knew) => {
      const item = reviewQueue[current.word.de];
      if (!item) return;
      const newInterval = knew ? Math.round(item.interval * item.ease) : 1;
      const newEase = knew ? Math.max(1.3, item.ease + 0.1) : Math.max(1.3, item.ease - 0.2);
      setReviewQueue(prev => ({
        ...prev,
        [current.word.de]: { ...item, lastReview: Date.now(), interval: newInterval, ease: newEase, nextReview: Date.now() + newInterval * 86400000 }
      }));
      setDone(prev => [...prev, current.word.de]);
      setShowAnswer(false);
      setCurrentIdx(prev => prev + 1);
    };

    return (
      <div className="animate-in pb-20 px-4 md:px-0">
        <nav className="bg-white border-b p-4 sticky top-0 z-50 flex justify-between items-center max-w-6xl mx-auto rounded-b-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setView('dashboard')} className="p-2 text-slate-400 hover:text-blue-600"><ChevronLeft size={20} className="rotate-180" /></button>
            <h1 className="text-xl font-black flex items-center gap-2"><RotateCcw size={20} /> مرور لغات</h1>
          </div>
          <span className="text-sm text-slate-500">{done.length}/{reviewWords.length}</span>
        </nav>
        <main className="max-w-xl mx-auto p-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center">
            <p className="text-3xl font-black text-blue-700 mb-4" dir="ltr">{current.word.de}</p>
            {current.word.ipa && <p className="text-sm text-slate-400 mb-6">{current.word.ipa}</p>}
            {showAnswer ? (
              <div className="mb-6">
                <p className="text-2xl font-bold text-slate-700 mb-2">{current.word.fa}</p>
                {current.word.examples?.[0] && <p className="text-sm text-slate-500 mt-2" dir="ltr">{current.word.examples[0].de}</p>}
              </div>
            ) : (
              <button onClick={() => setShowAnswer(true)} className="mb-6 bg-slate-100 text-slate-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-200">نشان بده</button>
            )}
            {showAnswer && (
              <div className="flex gap-4">
                <button onClick={() => handleAnswer(false)} className="flex-1 bg-red-50 text-red-600 px-6 py-4 rounded-xl font-black border-2 border-red-200 hover:bg-red-100">❌ نمی‌دونم</button>
                <button onClick={() => handleAnswer(true)} className="flex-1 bg-green-50 text-green-600 px-6 py-4 rounded-xl font-black border-2 border-green-200 hover:bg-green-100">✅ بلدم</button>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  };

  // ─── Dashboard ───
  const Dashboard = () => (
    <div className="animate-in pb-20 px-4 md:px-0">
      <nav className="bg-white border-b p-4 sticky top-0 z-50 flex justify-between items-center max-w-6xl mx-auto rounded-b-2xl shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg"><GraduationCap size={24} /></div>
          <h1 className="text-xl font-black">آلمانی از صفر تا B1</h1>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title={darkMode ? 'حالت روشن' : 'حالت تاریک'}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setView('review')} className="p-2 text-slate-400 hover:text-blue-600 transition-colors relative" title="مرور لغات">
            <RotateCcw size={18} />
            {getReviewWords().length > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">{getReviewWords().length}</span>}
          </button>
          <button onClick={() => setView('glossary')} className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="واژه‌نامه">
            <BookMarked size={18} />
          </button>
          <button onClick={() => setView('bookmarks')} className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="نشان‌شده‌ها">
            <Bookmark size={18} />
          </button>
          <button onClick={() => setView('search')} className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="جستجوی لغات">
            <Search size={18} />
          </button>
          <button onClick={() => setView('stats')} className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="آمار و پیشرفت">
            <BarChart3 size={18} />
          </button>
          <button onClick={resetProgress} className="p-2 text-slate-300 hover:text-red-500 transition-colors" title="بازنشانی پیشرفت">
            <RotateCcw size={18} />
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 text-right">
        {/* Hero */}
        <header className="mb-8">
          <div className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <p className="text-blue-300 font-bold text-sm mb-2">
                {completedDays.length < 17 ? 'سطح A1 — مبتدی' : completedDays.length < 35 ? 'سطح A2 — ابتدایی بالاتر' : 'سطح B1 — متوسط'}
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-2 leading-tight text-right">
                درس بعدی: روز {completedDays.length + 1 <= totalDays ? completedDays.length + 1 : totalDays}
              </h2>
              <p className="text-slate-300 mb-4 text-sm">
                {curriculumData.getDayData(completedDays.length + 1 <= totalDays ? completedDays.length + 1 : totalDays)?.title}
              </p>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-300">پیشرفت کل دوره</span>
                  <span className="text-lg font-black text-white">{Math.round((completedDays.length / totalDays) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full transition-all duration-700" style={{ width: `${(completedDays.length / totalDays) * 100}%` }}></div>
                </div>
                <p className="text-xs text-slate-400 mt-1">{completedDays.length} از {totalDays} روز تکمیل شده</p>
              </div>
              <button onClick={() => handleDayClick(completedDays.length + 1 <= totalDays ? completedDays.length + 1 : totalDays)}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-black shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto">
                شروع درس جدید <ArrowRight size={20} className="rotate-180" />
              </button>
            </div>
            <BarChart3 className="absolute -bottom-10 -left-10 text-white/5" size={280} />
          </div>
        </header>

        {/* Progress Overview */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {curriculumData.levels.map(level => {
            const progress = curriculumData.getLevelProgress(completedDays, level.id);
            const colors = { emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700', blue: 'bg-blue-50 border-blue-200 text-blue-700', orange: 'bg-orange-50 border-orange-200 text-orange-700' };
            return (
              <div key={level.id} className={`p-4 rounded-2xl border-2 ${colors[level.color]}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-black text-lg">{level.id}</span>
                  <span className="text-sm font-bold">{progress}%</span>
                </div>
                <div className="w-full bg-white/50 rounded-full h-2">
                  <div className={`h-2 rounded-full transition-all ${level.color === 'emerald' ? 'bg-emerald-500' : level.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'}`} style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roadmap by Level */}
        {curriculumData.levels.map(level => (
          <div key={level.id} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-black">{level.title}</h3>
              <span className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full font-bold">
                روز {level.days[0]} تا {level.days[1]}
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3" dir="ltr">
              {curriculumData.getDaysForLevel(level.id).map(d => {
                const isDone = completedDays.includes(d.day);
                const isNext = d.day === (completedDays.length + 1);
                return (
                  <div key={d.day}
                    onClick={() => handleDayClick(d.day)}
                    title={d.title}
                    className={`day-card h-20 md:h-24 rounded-2xl border-2 flex flex-col items-center justify-center cursor-pointer relative transition-all hover:-translate-y-1 hover:shadow-lg ${isDone ? 'bg-green-50 border-green-200 text-green-700' : isNext ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-xl ring-2 ring-blue-100' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400'}`}>
                    <span className="text-[10px] font-black opacity-40 mb-0.5">{d.level}</span>
                    <span className="text-xl md:text-2xl font-black">{d.day}</span>
                    {d.hasExam && <Star size={12} className={`absolute top-2 right-2 ${isDone ? 'text-green-500' : isNext ? 'text-orange-600' : 'text-orange-400'}`} fill="currentColor" />}
                    {isDone && <CheckCircle2 size={14} className="absolute bottom-2 right-2 text-green-500" />}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </main>
    </div>
  );

  // ─── Lesson Player ───
  const LessonPlayer = () => {
    const dayInfo = curriculumData.getDayData(selectedDay);
    return (
      <div className="animate-in p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => setView('dashboard')} className="flex items-center gap-2 text-slate-400 font-bold mb-8 hover:text-blue-600 transition-colors">
            <ChevronLeft size={20} className="rotate-180" /> بازگشت به داشبورد
          </button>

          <header className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-slate-100 mb-6 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-right flex-1 w-full relative">
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-bold mb-2 inline-block">{dayInfo?.level}</span>
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
              <SectionCard id="reading" icon={BookMarked} title="درک مطلب" time="۲۰ دقیقه" desc="متن و سوالات" />
              <SectionCard id="writing" icon={PenTool} title="تمرین نوشتن" time="۳۰ دقیقه" desc="تقویت جمله‌سازی" />
              <SectionCard id="listening" icon={Headphones} title="تمرین شنیداری" time="۳۰ دقیقه" desc="پادکست و تلفظ" />
              <SectionCard id="speaking" icon={Mic} title="تمرین گفتاری" time="۱۵ دقیقه" desc="مکالمه و تمرین" />
              {isExamDay && (
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur opacity-25"></div>
                  <div className="relative">
                    <SectionCard id="exam" icon={Star} title="آزمون جامع" time="۳۰ دقیقه" desc="مرور مباحث" />
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-3 bg-white rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-100 p-6 md:p-12 min-h-[500px] text-right order-1 lg:order-2">
              {activeSection === 'overview' && lessonData && (
                <div className="text-center py-20 animate-in">
                  <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"><Play size={48} fill="currentColor" /></div>
                  <h2 className="text-3xl font-black mb-4">آماده برای شروع درس {selectedDay}؟</h2>
                  <p className="text-slate-400 mb-10">
                    {isExamDay ? 'امروز علاوه بر ۶ بخش اصلی، یک آزمون جامع هم در پایان دارید!' : 'هر ۶ بخش را برای تکمیل درس انجام دهید.'}
                  </p>
                  {lessonData?.cultureTip && (
                    <div className="bg-emerald-50 border border-emerald-100 p-6 md:p-8 rounded-[2rem] mb-10 text-right relative overflow-hidden mt-8">
                      <h3 className="text-emerald-800 font-black mb-3 flex flex-wrap items-center gap-2 text-lg md:text-xl relative z-10">
                        <span className="bg-emerald-200 text-emerald-700 p-2 rounded-xl shrink-0"><Star size={18} fill="currentColor" /></span>
                        نکته فرهنگی (Landeskunde)
                      </h3>
                      <p className="text-emerald-900 leading-relaxed font-medium text-base md:text-lg relative z-10">{lessonData.cultureTip}</p>
                    </div>
                  )}
                  <button onClick={() => setActiveSection('grammar')} className="bg-blue-600 text-white px-8 md:px-12 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-transform active:scale-95 text-base md:text-lg w-full sm:w-auto">
                    شروع مطالعه <ArrowRight size={20} className="rotate-180 inline-block mr-2" />
                  </button>
                </div>
              )}

              {activeSection === 'grammar' && lessonData && (
                <div className="animate-in space-y-10">
                  <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3">آموزش گرامر <BookOpen className="text-blue-600" /></h2>
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
                                    <th className="p-4 text-right">فارسی (توضیح)</th>
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
                        } else if (block.type === 'fill_blank') {
                          return <FillInTheBlank key={idx} data={block} />;
                        }
                        return null;
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-10 text-slate-400">محتوای گرامر این درس در حال آماده‌سازی است...</div>
                  )}
                  <button onClick={() => setCompletedTasks(prev => prev.includes('grammar') ? prev : [...prev, 'grammar'])}
                    className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('grammar') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white shadow-xl shadow-blue-100'}`}>
                    {completedTasks.includes('grammar') ? 'بخش گرامر تکمیل شد ✓' : 'اتمام مطالعه گرامر'}
                  </button>
                </div>
              )}

              {activeSection === 'vocab' && lessonData && (
                <div className="animate-in space-y-10">
                  <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3">واژگان جدید <MessageSquare className="text-blue-600" /></h2>
                  {lessonData.vocabData?.categories ? (
                    <div className="space-y-16">
                      {/* Review Game */}
                      <VocabularyReviewGame words={lessonData.vocabData.categories.flatMap(c => c.words || [])} />
                      {/* Detailed Cards */}
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
                                        <span className="font-black text-slate-900 text-xl md:text-2xl tracking-tight leading-none">{item.de}</span>
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
                  ) : lessonData.vocabData && Array.isArray(lessonData.vocabData) ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="ltr">
                      {lessonData.vocabData.map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:border-blue-300 transition-all">
                          <div className="text-left flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                              <span className="font-black text-blue-700 text-2xl" dir="ltr">{item.de}</span>
                              <button onClick={(e) => playTTS(item.de, e)} className="text-slate-400 hover:text-blue-600"><Volume2 size={20} /></button>
                            </div>
                            {item.usage && <p className="text-[10px] text-slate-400 uppercase font-bold" dir="ltr">{item.usage}</p>}
                          </div>
                          <span className="font-black text-slate-700 text-lg">{item.fa}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10 text-slate-400">واژگان این درس در حال آماده‌سازی است...</div>
                  )}
                  <button onClick={() => setCompletedTasks(prev => prev.includes('vocab') ? prev : [...prev, 'vocab'])}
                    className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('vocab') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white shadow-xl shadow-blue-100'}`}>
                    {completedTasks.includes('vocab') ? 'لغات را یاد گرفتم ✓' : 'اتمام تمرین لغات'}
                  </button>
                </div>
              )}

              {activeSection === 'reading' && lessonData && (
                <div className="animate-in space-y-10">
                  <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3">درک مطلب (Leseverstehen) <BookMarked className="text-blue-600" /></h2>
                  {Array.isArray(lessonData.reading) ? lessonData.reading.map((readItem, idx) => (
                    <ReadingComprehension key={idx} data={readItem} playTTS={playTTS} />
                  )) : (
                    <div className="text-center py-10 text-slate-500 font-bold bg-slate-50 rounded-3xl border border-dashed border-slate-200 p-10">
                      محتوای خواندنی این درس در حال آماده‌سازی است...
                    </div>
                  )}
                  <button onClick={() => setCompletedTasks(prev => prev.includes('reading') ? prev : [...prev, 'reading'])}
                    className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('reading') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white shadow-xl shadow-blue-100'}`}>
                    {completedTasks.includes('reading') ? 'بخش خواندن تمام شد ✓' : 'اتمام تمرین خواندن'}
                  </button>
                </div>
              )}

              {activeSection === 'writing' && lessonData && (
                <div className="animate-in space-y-10">
                  <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3">تمرین نوشتن (Schreiben) <PenTool className="text-blue-600" /></h2>
                  {Array.isArray(lessonData.writing) ? lessonData.writing.map((writeItem, idx) => (
                    <WritingExercise key={idx} data={writeItem} playTTS={playTTS} />
                  )) : (
                    <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white text-center py-12">
                      موضوع انشاء این درس در حال آماده‌سازی است...
                    </div>
                  )}
                  <button onClick={() => setCompletedTasks(prev => prev.includes('writing') ? prev : [...prev, 'writing'])}
                    className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('writing') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white shadow-xl shadow-blue-100'}`}>
                    {completedTasks.includes('writing') ? 'تمرین نوشتن تمام شد ✓' : 'پایان تمرین نوشتن'}
                  </button>
                </div>
              )}

              {activeSection === 'listening' && lessonData && (
                <div className="animate-in space-y-10">
                  <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3">تمرین شنیداری (Hören) <Headphones className="text-blue-600" /></h2>
                  {Array.isArray(lessonData.listening) ? lessonData.listening.map((listenItem, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      {listenItem.title && <h3 className="text-xl font-bold text-slate-800 mb-3">{listenItem.title}</h3>}
                      <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line mb-4">{listenItem.instructions}</p>
                      <div className="bg-white p-5 rounded-2xl border border-slate-100 flex justify-between items-center">
                        <span className="font-black text-slate-800 text-sm" dir="ltr">{listenItem.source}</span>
                        <a href={listenItem.link} target="_blank" rel="noreferrer" className="text-blue-600 font-black text-sm hover:underline flex items-center gap-2">
                          <Play size={16} /> باز کردن
                        </a>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-10 text-slate-400">تمرین شنیداری این درس در حال آماده‌سازی است...</div>
                  )}
                  <button onClick={() => setCompletedTasks(prev => prev.includes('listening') ? prev : [...prev, 'listening'])}
                    className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('listening') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white shadow-xl shadow-blue-100'}`}>
                    {completedTasks.includes('listening') ? 'بخش شنیداری تمام شد ✓' : 'اتمام تمرین شنیداری'}
                  </button>
                </div>
              )}

              {activeSection === 'speaking' && lessonData && (
                <div className="animate-in space-y-10">
                  <h2 className="text-2xl font-black border-b pb-4 flex items-center gap-3">تمرین مکالمه (Sprechen) <Mic className="text-blue-600" /></h2>
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
                    <div className="text-center py-10 text-slate-400">تمرین مکالمه این درس در حال آماده‌سازی است...</div>
                  )}
                  <button onClick={() => setCompletedTasks(prev => prev.includes('speaking') ? prev : [...prev, 'speaking'])}
                    className={`w-full py-5 rounded-2xl font-black mt-10 transition-all ${completedTasks.includes('speaking') ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white shadow-xl shadow-blue-100'}`}>
                    {completedTasks.includes('speaking') ? 'تمرین گفتاری تمام شد ✓' : 'اتمام تمرین گفتاری'}
                  </button>
                </div>
              )}

              {activeSection === 'exam' && lessonData && (
                <ExamSection lessonData={lessonData} onComplete={() => setCompletedTasks(prev => prev.includes('exam') ? prev : [...prev, 'exam'])} isCompleted={completedTasks.includes('exam')} />
              )}
            </div>
          </main>

          {lessonProgress === 100 && (
            <div className="mt-12 text-center animate-in">
              <button onClick={finishDay} className="bg-green-600 hover:bg-green-700 text-white px-24 py-6 rounded-[3rem] font-black text-2xl shadow-2xl transition-all scale-105 active:scale-95 flex items-center gap-4 mx-auto group">
                ثبت پیشرفت و بازگشت <CheckCircle2 size={32} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ─── Main Render ───
  if (view === 'search') return <SearchModal />;
  if (view === 'stats') return <StatsView />;
  if (view === 'glossary') return <GlossaryView />;
  if (view === 'bookmarks') return <BookmarksView />;
  if (view === 'review') return <ReviewView />;
  if (view === 'lesson') return <LessonPlayer />;
  return <Dashboard />;
};

export default App;
