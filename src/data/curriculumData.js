export const curriculumData = {
  levels: [
    {
      id: "A1",
      title: "سطح A1 — مبتدی",
      subtitle: "از صفر مطلق تا اولین مکالمات",
      color: "emerald",
      days: [1, 17],
      topics: [
        "الفبا و تلفظ",
        "معرفی خود و احوال‌پرسی",
        "آرتیکل‌ها و جنسیت اسم",
        "فعل‌های sein و haben",
        "ضمایر فاعلی و ملکی",
        "اعداد و زمان",
        "جملات خبری و سوالی",
        "منفی کردن (nicht و kein)",
        "حروف اضافه مکان و زمان",
        "آکوزاتیو (مفعول مستقیم)",
        "فعل‌های جداشدنی",
        "ضمایر ملکی (mein, dein, ...)",
        "هفته و ماه‌ها",
        "خانواده، شغل، خرید روزمره"
      ]
    },
    {
      id: "A2",
      title: "سطح A2 — ابتدایی بالاتر",
      subtitle: "مکالمات روزمره و زندگی عملی",
      color: "blue",
      days: [18, 35],
      topics: [
        "کلمات ربط ساده (und, aber, oder, weil, dass)",
        "فعل‌های بازتابی (sich)",
        "زمان گذشته (Perfekt)",
        "صفت‌های برتر و برترین (Komparativ, Superlativ)",
        "حروف اضافه دوگانه (Wechselpräpositionen)",
        "فعل‌های جداشدنی (پیشرفته‌تر)",
        "سفر و حمل‌ونقل",
        "سلامت و بدن",
        "مفعول غیرمستقیم (Dativ)",
        "جملات وابسته (Nebensätze)",
        "زندگی روزمره و خانه",
        "لباس و آب‌وهوا"
      ]
    },
    {
      id: "B1",
      title: "سطح B1 — متوسط",
      subtitle: "بیان نظر، استدلال و مکالمات پیچیده",
      color: "orange",
      days: [36, 55],
      topics: [
        "مجهول (Passiv)",
        "Konjunktiv II (آرزو و احتمال)",
        "جملات وابسته پیشرفته (damit, um...zu, obwohl)",
        "نقل قول غیرمستقیم",
        "نامه‌نگاری رسمی و ایمیل",
        "شغل و حرفه",
        "تحصیل و آموزش",
        "رسانه و تکنولوژی",
        "محیط زیست و جامعه",
        "بحث و مناظره",
        "بیان عقیده و موافقت/مخالفت",
        "اصطلاحات و ضرب‌المثل‌ها"
      ]
    }
  ],

  days: [
    { day: 1, level: "A1", title: "الفبا، تلفظ و معرفی خود", topicKey: "alphabet", hasExam: false },
    { day: 2, level: "A1", title: "آرتیکل‌ها (der/die/das) و جنسیت اسم", topicKey: "articles", hasExam: false },
    { day: 3, level: "A1", title: "فعل‌های sein و haben — صرف کامل", topicKey: "sein_haben", hasExam: false },
    { day: 4, level: "A1", title: "ضمایر ملکی و ساختار جمله", topicKey: "possessives", hasExam: false },
    { day: 5, level: "A1", title: "اعداد ۱ تا ۱۰۰ و سن گفتن", topicKey: "numbers", hasExam: true },
    { day: 6, level: "A1", title: "جملات منفی (nicht و kein)", topicKey: "negation", hasExam: false },
    { day: 7, level: "A1", title: "فعل‌های قاعده‌مند — صرف حالحاضر", topicKey: "regular_verbs", hasExam: false },
    { day: 8, level: "A1", title: "حروف اضافه مکان و زمان", topicKey: "prepositions_basic", hasExam: false },
    { day: 9, level: "A1", title: "آکوزاتیو — مفعول مستقیم", topicKey: "akkusativ", hasExam: true },
    { day: 10, level: "A1", title: "خرید و فروشگاه — واحدها و قیمت", topicKey: "shopping", hasExam: false },
    { day: 11, level: "A1", title: "خانواده و شغل", topicKey: "family_work", hasExam: false },
    { day: 12, level: "A1", title: "زمان و ساعت", topicKey: "time", hasExam: false },
    { day: 13, level: "A1", title: "هفته، ماه‌ها و تقویم", topicKey: "calendar", hasExam: true },
    { day: 14, level: "A1", title: "آب‌وهوا و فصل‌ها", topicKey: "weather", hasExam: false },
    { day: 15, level: "A1", title: "خانه و اتاق — مبلمان", topicKey: "home", hasExam: false },
    { day: 16, level: "A1", title: "فعل‌های جداشدنی (ankommen, einkaufen...)", topicKey: "separable_verbs", hasExam: false },
    { day: 17, level: "A1", title: "مرور جامع A1 + آزمون شبیه‌سازی", topicKey: "a1_review", hasExam: true },

    { day: 18, level: "A2", title: "کلمات ربط ساده (und, aber, oder, denn)", topicKey: "conjunctions_simple", hasExam: false },
    { day: 19, level: "A2", title: "جملات وابسته — weil و dass", topicKey: "weil_dass", hasExam: false },
    { day: 20, level: "A2", title: "رستوران و کافه — سفارش غذا", topicKey: "restaurant", hasExam: true },
    { day: 21, level: "A2", title: "فعل‌های بازتابی (sich waschen, sich freuen)", topicKey: "reflexive_verbs", hasExam: false },
    { day: 22, level: "A2", title: "زمان گذشته — Perfekt (بخش ۱)", topicKey: "perfekt_intro", hasExam: false },
    { day: 23, level: "A2", title: "زمان گذشته — Perfekt (بخش ۲: فعل‌های نامنظم)", topicKey: "perfekt_irregular", hasExam: false },
    { day: 24, level: "A2", title: "صفت‌ها — Komparativ و Superlativ", topicKey: "comparison", hasExam: false },
    { day: 25, level: "A2", title: "حروف اضافه دوگانه (Wechselpräpositionen)", topicKey: "wechselpraep", hasExam: true },
    { day: 26, level: "A2", title: "سفر — وسایل نقلیه و مسیریابی", topicKey: "travel", hasExam: false },
    { day: 27, level: "A2", title: "مفعول غیرمستقیم — Dativ", topicKey: "dativ", hasExam: false },
    { day: 28, level: "A2", title: "فعل‌های با Dativ (gehören, gefallen, danken)", topicKey: "dativ_verbs", hasExam: false },
    { day: 29, level: "A2", title: "سلامت و بدن — بیان بیماری", topicKey: "health", hasExam: false },
    { day: 30, level: "A2", title: "لباس و مد — توصیف ظاهر", topicKey: "clothing", hasExam: true },
    { day: 31, level: "A2", title: "آب‌وهوا و برنامه‌ریزی — wenn-Sätze", topicKey: "wenn_saetze", hasExam: false },
    { day: 32, level: "A2", title: "خانه و اجاره — توصیف محل زندگی", topicKey: "housing", hasExam: false },
    { day: 33, level: "A2", title: "ساختارهای um...zu و damit", topicKey: "umzu_damit", hasExam: false },
    { day: 34, level: "A2", title: "فعل‌های modal (می‌توانم، باید، می‌خواهم)", topicKey: "modals", hasExam: false },
    { day: 35, level: "A2", title: "مرور جامع A2 + آزمون شبیه‌سازی", topicKey: "a2_review", hasExam: true },

    { day: 36, level: "B1", title: "مجهول (PassivPräsens) — گزارش و توصیف فرآیند", topicKey: "passiv", hasExam: false },
    { day: 37, level: "B1", title: "Konjunktiv II — آرزو و احتمال (würde, hätte, wäre)", topicKey: "konjunktiv", hasExam: false },
    { day: 38, level: "B1", title: "جملات وابسته پیشرفته — obwohl, bevor, nachdem", topicKey: "nebensaetze_adv", hasExam: true },
    { day: 39, level: "B1", title: "نقل قول غیرمستقیم — Indirekte Rede", topicKey: "indirect_speech", hasExam: false },
    { day: 40, level: "B1", title: "نامه‌نگاری رسمی و ایمیل", topicKey: "formal_writing", hasExam: false },
    { day: 41, level: "B1", title: "شغل و حرفه — درخواست کار", topicKey: "career", hasExam: false },
    { day: 42, level: "B1", title: "تحصیل و آموزش", topicKey: "education", hasExam: true },
    { day: 43, level: "B1", title: "رسانه و تکنولوژی — زندگی دیجیتال", topicKey: "media_tech", hasExam: false },
    { day: 44, level: "B1", title: "محیط زیست و طبیعت", topicKey: "environment", hasExam: false },
    { day: 45, level: "B1", title: "رابطه و زندگی اجتماعی", topicKey: "relationships", hasExam: false },
    { day: 46, level: "B1", title: "کلمات ربط پیشرفته — کنکتورها در عمل", topicKey: "konnektoren", hasExam: true },
    { day: 47, level: "B1", title: "درک مطلب پیشرفته — مقاله و خبر", topicKey: "reading_advanced", hasExam: false },
    { day: 48, level: "B1", title: "بحث و مناظره — بیان عقیده", topicKey: "debate", hasExam: false },
    { day: 49, level: "B1", title: "مهارت روایت — داستان گفتن در سه زمان", topicKey: "narrative", hasExam: false },
    { day: 50, level: "B1", title: "آزمون شبیه‌سازی B1 — بخش خواندن و شنیدن", topicKey: "b1_exam_lesen_hoeren", hasExam: true },
    { day: 51, level: "B1", title: "آزمون شبیه‌سازی B1 — بخش نوشتن و صحبت کردن", topicKey: "b1_exam_schreiben_sprechen", hasExam: true },
    { day: 52, level: "B1", title: "خطاهای رایج و نحوه رفع آن‌ها", topicKey: "common_mistakes", hasExam: false },
    { day: 53, level: "B1", title: "اصطلاحات و ضرب‌المثل‌های آلمانی", topicKey: "idioms", hasExam: false },
    { day: 54, level: "B1", title: "لهجه‌ها، ثبت زبان و تفاوت آلمان/اتریش/سوییس", topicKey: "dialects", hasExam: false },
    { day: 55, level: "B1", title: "جمع‌بندی نهایی — آلمانی واقعی و جشن پایان", topicKey: "final_celebration", hasExam: false }
  ],

  getLevelForDay(day) {
    if (day <= 17) return "A1";
    if (day <= 35) return "A2";
    return "B1";
  },

  getLevelData(levelId) {
    return this.levels.find(l => l.id === levelId);
  },

  getDayData(day) {
    return this.days.find(d => d.day === day);
  },

  getDaysForLevel(levelId) {
    return this.days.filter(d => d.level === levelId);
  },

  getLevelProgress(completedDays, levelId) {
    const levelDays = this.getDaysForLevel(levelId);
    const completed = levelDays.filter(d => completedDays.includes(d.day));
    return Math.round((completed.length / levelDays.length) * 100);
  }
};
