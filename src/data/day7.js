export const day7Data = {
  title: "روز ۷: صرف فعل‌های منظم در زمان حال (Präsens)",
  objective: "در پایان این روز، شما قادر خواهید بود الگوی صرف فعل‌های منظم (-e, -st, -t, -en, -t, -en) را یاد بگیرید، ۱۵ فعل منظم رایج را صرف کنید و حالت‌های خاص (فعل‌های ختم به -eln, -ern) را بشناسید.",
  level: "A1",

  grammarData: {
    subtitle: "درس‌های گرامری با تمرین تعاملی",
    content: [
      {
        type: "text",
        title: "فعل‌های منظم چیست؟",
        text: "خوشبختانه اکثر فعل‌های آلمانی منظم هستند! یعنی طبق یک قانون ثابت صرف می‌شوند. فقط کافی است الگو را یاد بگیرید.\nبرای صرف فعل منظم: ابتدا مصدر فعل را پیدا کنید (بخش بدون -en)، سپس پسوندهای مناسب را اضافه کنید."
      },
      {
        type: "table",
        title: "الگوی صرف فعل منظم (بر اساس lernen)",
        rows: [
          { de: "ich lern-e", fa: "من یاد می‌گیرم: Ich lerne Deutsch." },
          { de: "du lern-st", fa: "تو یاد می‌گیری: Du lernst schnell." },
          { de: "er/sie/es lern-t", fa: "او یاد می‌گیرد: Er lernt viel." },
          { de: "wir lern-en", fa: "ما یاد می‌گیریم: Wir lernen zusammen." },
          { de: "ihr lern-t", fa: "شماها یاد می‌گیرید: Ihr lernt gut." },
          { de: "sie/Sie lern-en", fa: "آن‌ها/شما یاد می‌گیرید: Sie lernen schnell." }
        ]
      },
      {
        type: "table",
        title: "پسوندهای صرف فعل منظم",
        rows: [
          { de: "ich: -e", fa: "spreche, wohne, komme, arbeite" },
          { de: "du: -st", fa: "sprichst, wohnst, kommst, arbeitest" },
          { de: "er/sie/es: -t", fa: "spricht, wohnt, kommt, arbeitet" },
          { de: "wir: -en", fa: "sprechen, wohnen, kommen, arbeiten" },
          { de: "ihr: -t", fa: "sprecht, wohnt, kommt, arbeitet" },
          { de: "sie/Sie: -en", fa: "sprechen, wohnen, kommen, arbeiten" }
        ]
      },
      {
        type: "alert",
        title: "قاعده طلایی صرف فعل",
        text: "توجه: wir (ما) و sie/Sie (آن‌ها/شما رسمی) همیشه شکل یکسانی دارند (-en)! این یکی از آسان‌ترین بخش‌های صرف فعل آلمانی است."
      },
      {
        type: "text",
        title: "حالت‌های خاص صرف فعل",
        text: "بعضی فعل‌ها هنگام صرف تغییرات جزئی دارند. این تغییرات را یاد بگیرید تا اشتباه نکنید."
      },
      {
        type: "table",
        title: "فعل‌هایی که با s ختم می‌شوند (مثل heißen, reisen)",
        rows: [
          { de: "heißen → du heißt (نه heisst!)", fa: "وقتی فعل اصلی با s یا ss/ß ختم شود، du بدون s اضافه می‌شود." },
          { de: "reisen → du reist (نه reisst!)", fa: "فعل‌هایی که s دارند، در du فقط -t می‌گیرند." },
          { de: "sitzen → du sitzt", fa: "فعل‌هایی که z دارند هم همین قاعده را دارند." }
        ]
      },
      {
        type: "table",
        title: "فعل‌هایی که با t یا d ختم می‌شوند (مثل arbeiten, finden)",
        rows: [
          { de: "arbeiten → du arbeitest (نه arbeitst!)", fa: "وقتی فعل با t یا d ختم شود، در du و er/e/es یک e اضافه می‌شود." },
          { de: "finden → du findest, er findet", fa: "du findest (با -est), er findet (با -et)" },
          { de: "warten → du wartest, er wartet", fa: "همیشه -est و -et، نه -st و -t!" }
        ]
      },
      {
        type: "table",
        title: "فعل‌هایی که با -eln یا -ern ختم می‌شوند",
        rows: [
          { de: "klingeln (زنگ زدن): ich klingle (نه klingele!)", fa: "وقتی فعل با -eln ختم شود، در ich حرف e قبل l حذف می‌شود." },
          { de: "klingeln: du klingelst, er klingelt", fa: "بقیه ضمیرها عادی هستند." },
          { de: "ändern (تغییر دادن): ich ändere", fa: "فعل‌های -ern عادی صرف می‌شوند." },
          { de: "wandern (کوهنوردی): ich wandere", fa: "فعل‌های -ern هیچ تغییر خاصی ندارند." }
        ]
      },
      {
        type: "table",
        title: "فعل‌های با تغییر صدا (Ablaut) در du و er",
        rows: [
          { de: "fahren (رانندگی): du fährst, er fährt", fa: "a → ä در du و er" },
          { de: "schlafen (خوابیدن): du schläfst, er schläft", fa: "a → ä در du و er" },
          { de: "lesen (خواندن): du liest, er liest", fa: "e → ie در du و er" },
          { de: "sehen (دیدن): du siehst, er sieht", fa: "e → ie در du و er" },
          { de: "geben (دادن): du gibst, er gibt", fa: "e → i در du و er" },
          { de: "essen (خوردن): du isst, er isst", fa: "e → i در du و er" },
          { de: "sprechen (صحبت کردن): du sprichst, er spricht", fa: "e → i در du و er" },
          { de: "helfen (کمک کردن): du hilfst, er hilft", fa: "e → i در du و er" },
          { de: "nehmen (گرفتن): du nimmst, er nimmt", fa: "eh → i (دو برابر m)" },
          { de: "treffen (ملاقات کردن): du triffst, er trifft", fa: "e → i در du و er" }
        ]
      },
      {
        type: "text",
        title: "۱۵ فعل منظم رایج با صرف کامل",
        text: "این فعل‌ها را هر روز تمرین کنید تا صرف آن‌ها کاملاً در ذهنتان جا بیفتد."
      },
      {
        type: "interactive_quiz",
        title: "آزمون: صرف فعل",
        questions: [
          {
            question: "صرف فعل «arbeiten» با du چیست؟",
            questionDe: "Wie konjugiert man 'arbeiten' mit 'du'?",
            options: [
              { text: "du arbeitst", isCorrect: false },
              { text: "du arbeitest", isCorrect: true },
              { text: "du arbeitet", isCorrect: false }
            ],
            explanation: "درست! چون فعل با t ختم می‌شود، یک e اضافه می‌شود: du arbeitest."
          },
          {
            question: "صرف فعل «fahren» با er چیست؟",
            questionDe: "Wie konjugiert man 'fahren' mit 'er'?",
            options: [
              { text: "er fahrt", isCorrect: false },
              { text: "er fährt", isCorrect: true },
              { text: "er fahret", isCorrect: false }
            ],
            explanation: "عالی! فعل fahren در du و er تغییر صدا دارد: a → ä."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین جای خالی: صرف فعل",
        instructions: "فعل را با ضمیر مناسب صرف کنید.",
        sentences: [
          { de: "Ich ___ jeden Tag Deutsch. (lernen)", answer: "lerne", hint: "ich + lernen" },
          { de: "Du ___ in Berlin. (wohnen)", answer: "wohnst", hint: "du + wohnen" },
          { de: "Er ___ viel. (arbeiten)", answer: "arbeitet", hint: "er + arbeiten (فعل با t ختم شده)" },
          { de: "Wir ___ zusammen. (sprechen)", answer: "sprechen", hint: "wir + sprechen" },
          { de: "Ihr ___ schnell. (fahren)", answer: "fahrt", hint: "ihr + fahren" },
          { de: "Sie ___ aus dem Iran. (kommen)", answer: "kommen", hint: "Sie + kommen" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "فعل‌های منظم رایج",
        words: [
          {
            de: "arbeiten",
            fa: "کار کردن",
            ipa: "[ˈaʁbaɪ̯tn̩]",
            conjugation: { ich: "arbeite", du: "arbeitest", er: "arbeitet", wir: "arbeiten", ihr: "arbeitet", sie: "arbeiten" },
            examples: [{ de: "Ich arbeite bei Siemens.", fa: "در زیمنس کار می‌کنم." }]
          },
          {
            de: "fragen",
            fa: "پرسیدن",
            ipa: "[ˈfʁaːɡn̩]",
            conjugation: { ich: "frage", du: "fragst", er: "fragt", wir: "fragen", ihr: "fragt", sie: "fragen" },
            examples: [{ de: "Kann ich Sie etwas fragen?", fa: "می‌شود چیزی از شما بپرسم؟" }]
          },
          {
            de: "kaufen",
            fa: "خریدن",
            ipa: "[ˈkaʊ̯fn̩]",
            conjugation: { ich: "kaufe", du: "kaufst", er: "kauft", wir: "kaufen", ihr: "kauft", sie: "kaufen" },
            examples: [{ de: "Ich kaufe Brot.", fa: "نان می‌خرم." }]
          },
          {
            de: "spielen",
            fa: "بازی کردن",
            ipa: "[ˈʃpiːln̩]",
            conjugation: { ich: "spiele", du: "spielst", er: "spielt", wir: "spielen", ihr: "spielt", sie: "spielen" },
            examples: [{ de: "Die Kinder spielen Fußball.", fa: "بچه‌ها فوتبال بازی می‌کنند." }]
          },
          {
            de: "suchen",
            fa: "جستجو کردن / دنبال چیزی گشتن",
            ipa: "[ˈzuːxn̩]",
            conjugation: { ich: "suche", du: "suchst", er: "sucht", wir: "suchen", ihr: "sucht", sie: "suchen" },
            examples: [{ de: "Ich suche eine Wohnung.", fa: "دنبال آپارتمان می‌گردم." }]
          },
          {
            de: "brauchen",
            fa: "نیاز داشتن",
            ipa: "[ˈbʁaʊ̯xn̩]",
            conjugation: { ich: "brauche", du: "brauchst", er: "braucht", wir: "brauchen", ihr: "braucht", sie: "brauchen" },
            examples: [{ de: "Ich brauche Hilfe.", fa: "کمک نیاز دارم." }]
          },
          {
            de: "zeigen",
            fa: "نشان دادن",
            ipa: "[ˈtsaɪ̯ɡn̩]",
            conjugation: { ich: "zeige", du: "zeigst", er: "zeigt", wir: "zeigen", ihr: "zeigt", sie: "zeigen" },
            examples: [{ de: "Zeigen Sie mir bitte den Weg.", fa: "لطفاً راه را نشانم دهید." }]
          },
          {
            de: "frühstücken",
            fa: "صبحانه خوردن",
            ipa: "[ˈfʁyːʃtʏkn̩]",
            conjugation: { ich: "frühstücke", du: "frühstückst", er: "frühstückt", wir: "frühstücken", ihr: "frühstückt", sie: "frühstücken" },
            examples: [{ de: "Ich frühstücke um 8 Uhr.", fa: "ساعت ۸ صبحانه می‌خورم." }]
          },
          {
            de: "besuchen",
            fa: "ملاقات کردن / بازدید کردن",
            ipa: "[bəˈzuːxn̩]",
            conjugation: { ich: "besuche", du: "besuchst", er: "besucht", wir: "besuchen", ihr: "besucht", sie: "besuchen" },
            examples: [{ de: "Ich besuche meine Eltern.", fa: "والدینم را ملاقات می‌کنم." }]
          },
          {
            de: "verstehen",
            fa: "فهمیدن",
            ipa: "[fɛɐ̯ˈʃteːən]",
            conjugation: { ich: "verstehe", du: "verstehst", er: "versteht", wir: "verstehen", ihr: "versteht", sie: "verstehen" },
            examples: [{ de: "Ich verstehe das nicht.", fa: "این را نمی‌فهمم." }]
          },
          {
            de: "erklären",
            fa: "توضیح دادن",
            ipa: "[ɛɐ̯ˈkleːʁən]",
            conjugation: { ich: "erkläre", du: "erklärst", er: "erklärt", wir: "erklären", ihr: "erklärt", sie: "erklären" },
            examples: [{ de: "Können Sie das erklären?", fa: "می‌شود توضیح دهید؟" }]
          },
          {
            de: "kochen",
            fa: "پختن / آشپزی کردن",
            ipa: "[ˈkɔxn̩]",
            conjugation: { ich: "koche", du: "kochst", er: "kocht", wir: "kochen", ihr: "kocht", sie: "kochen" },
            examples: [{ de: "Meine Mutter kocht gut.", fa: "مادرم خوب آشپزی می‌کند." }]
          },
          {
            de: "wohnen",
            fa: "زندگی کردن",
            ipa: "[ˈvoːnən]",
            conjugation: { ich: "wohne", du: "wohnst", er: "wohnt", wir: "wohnen", ihr: "wohnt", sie: "wohnen" },
            examples: [{ de: "Wo wohnst du?", fa: "کجا زندگی می‌کنی؟" }]
          },
          {
            de: "machen",
            fa: "انجام دادن / ساختن",
            ipa: "[ˈmaxn̩]",
            conjugation: { ich: "mache", du: "machst", er: "macht", wir: "machen", ihr: "macht", sie: "machen" },
            examples: [{ de: "Was machst du heute?", fa: "امروز چه کار می‌کنی؟" }]
          },
          {
            de: "reisen",
            fa: "سفر کردن",
            ipa: "[ˈʁaɪ̯zn̩]",
            conjugation: { ich: "reise", du: "reist", er: "reist", wir: "reisen", ihr: "reist", sie: "reisen" },
            examples: [{ de: "Wir reisen nach Berlin.", fa: "به برلین سفر می‌کنیم." }]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Mein Alltag (زندگی روزمره من)\n\nIch heiße Maria und ich bin Studentin. Ich wohne in München und studiere an der Universität.\nIch frühstücke um 7 Uhr. Dann gehe ich zur Uni. Ich lerne Deutsch und Englisch. Meine Lehrerin erklärt die Aufgaben gut.\nNachmittags arbeite ich in einem Café. Ich koche Kaffee und mache Kuchen. Am Abend spiele ich mit meinen Freunden Fußball oder wir machen zusammen Hausaufgaben.\nAm Wochenende reise ich manchmal. Ich besuche meine Eltern in Hamburg oder kaufe neue Bücher. Das Leben ist gut.",
      translation: [
        { de: "Mein Alltag", fa: "زندگی روزمره من" },
        { de: "Ich heiße Maria und ich bin Studentin.", fa: "نام من ماریاست و دانشجو هستم." },
        { de: "Ich wohne in München und studiere an der Universität.", fa: "در مونیخ زندگی می‌کنم و در دانشگاه درس می‌خوانم." },
        { de: "Ich frühstücke um 7 Uhr.", fa: "ساعت ۷ صبحانه می‌خورم." },
        { de: "Dann gehe ich zur Uni.", fa: "بعد به دانشگاه می‌روم." },
        { de: "Ich lerne Deutsch und Englisch.", fa: "آلمانی و انگلیسی یاد می‌گیرم." },
        { de: "Meine Lehrerin erklärt die Aufgaben gut.", fa: "معلمم تمرین‌ها را خوب توضیح می‌دهد." },
        { de: "Nachmittags arbeite ich in einem Café.", fa: "بعدازظهرها در یک کافه کار می‌کنم." },
        { de: "Ich koche Kaffee und mache Kuchen.", fa: "قهوه می‌پزم و کیک درست می‌کنم." },
        { de: "Am Abend spiele ich mit meinen Freunden Fußball.", fa: "شب‌ها با دوستانم فوتبال بازی می‌کنم." },
        { de: "Am Wochenende reise ich manchmal.", fa: "آخر هفته‌ها گاهی سفر می‌کنم." },
        { de: "Ich besuche meine Eltern in Hamburg.", fa: "والدینم را در هامبورگ ملاقات می‌کنم." },
        { de: "Das Leben ist gut.", fa: "زندگی خوب است." }
      ],
      questions: [
        { question: "ماریا کجا زندگی می‌کند و چه می‌کند؟", answer: "در مونیخ زندگی می‌کند و دانشجوست." },
        { question: "ماریا صبحانه را کی می‌خورد؟", answer: "ساعت ۷." },
        { question: "ماریا بعدازظهرها کجا کار می‌کند؟", answer: "در یک کافه." },
        { question: "ماریا آخر هفته‌ها چه کار می‌کند؟", answer: "گاهی سفر می‌کند و والدینش را ملاقات می‌کند." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن برنامه روزانه (Tagesplan)",
      prompt: "با استفاده از فعل‌های منظم، برنامه روزانه خود را بنویسید.",
      steps: [
        {
          title: "صبح",
          text: "صبحانه و شروع روز را توصیف کنید.",
          example: { de: "Ich frühstücke um 7 Uhr und gehe um 8 Uhr zur Arbeit.", fa: "ساعت ۷ صبحانه می‌خورم و ساعت ۸ به سر کار می‌روم." }
        },
        {
          title: "ظهر و بعدازظهر",
          text: "کارهای ظهر و بعدازظهر را بگویید.",
          example: { de: "Mittags koche ich. Nachmittags lerne ich Deutsch.", fa: "ظهرها آشپزی می‌کنم. بعدازظهرها آلمانی یاد می‌گیرم." }
        },
        {
          title: "عصر و شب",
          text: "فعالیت‌های عصر و شب را توضیح دهید.",
          example: { de: "Abends spiele ich Fußball oder mache Hausaufgaben.", fa: "شب‌ها فوتبال بازی می‌کنم یا تکالیفم را انجام می‌دهم." }
        }
      ],
      modelAnswer: "Ich heiße Ali und bin Student. Ich frühstücke um 7 Uhr. Dann lerne ich Deutsch an der Universität. Meine Lehrerin erklärt gut. Nachmittags arbeite ich in einem Café. Ich koche Kaffee und mache Kuchen. Abends spiele ich mit meinen Freunden. Am Wochenende besuche ich meine Eltern. Ich reise manchmal nach Berlin."
    }
  ],

  listening: [
    {
      title: "۱. فعل‌های منظم (A1 hören)",
      instruction: "تمرین شنیداری:\n۱. جملات را بشنوید و فعل صرف‌شده را تشخیص دهید.\n۲. ضمیر هر فعل را مشخص کنید.\n۳. جملات را با صدای بلند تکرار کنید.",
      sentences: [
        { de: "Ich arbeite jeden Tag.", fa: "هر روز کار می‌کنم.", tts: "Ich arbeite jeden Tag." },
        { de: "Du lernst schnell.", fa: "تو سریع یاد می‌گیری.", tts: "Du lernst schnell." },
        { de: "Er spielt gut Fußball.", fa: "او خوب فوتبال بازی می‌کند.", tts: "Er spielt gut Fußball." },
        { de: "Wir kochen zusammen.", fa: "با هم آشپزی می‌کنیم.", tts: "Wir kochen zusammen." },
        { de: "Ihr reist nach Berlin.", fa: "شماها به برلین سفر می‌کنید.", tts: "Ihr reist nach Berlin." },
        { de: "Sie verstehen das.", fa: "آن‌ها این را می‌فهمند.", tts: "Sie verstehen das." }
      ]
    }
  ],

  speaking: [
    {
      title: "تمرین صرف فعل با صدا",
      pattern: "- Was machst du?\n- Ich arbeite.\n- Wo arbeitest du?\n- Ich arbeite in einem Café.\n- Und was machst du am Wochenende?\n- Am Wochenende reise ich oder besuche meine Eltern.",
      exercise: "تمرین:\nگام ۱: بخش pattern را بشنوید.\nگام ۲: جاهای خالی را با اطلاعات واقعی پر کنید.\nگام ۳: روزمره خود را توصیف کنید."
    }
  ],

  cultureTip: "در آلمان، ساعت کاری معمولاً ۸ صبح تا ۵ عصر است. وقفه ناهار (Mittagspause) بین ۱۲ تا ۱ بعدازظهر است و در این زمان بسیاری از مغازه‌ها بسته می‌شوند. آخر هفته‌ها (Samstag und Sonntag) مغازه‌ها در آلمان بسته هستند! این یکی از تفاوت‌های بزرگ با ایران است. فقط نانوایی‌ها و کافه‌ها صبح‌های شنبه باز هستند.",

  examData: {
    questions: [
      {
        question: "صرف فعل «arbeiten» با du چیست؟",
        options: ["du arbeitst", "du arbeitest", "du arbeitet"],
        answer: 1
      },
      {
        question: "صرف فعل «spielen» با er چیست؟",
        options: ["er spiele", "er spielst", "er spielt"],
        answer: 2
      },
      {
        question: "کدام فعل در du و er تغییر صدا دارد؟",
        options: ["lernen", "spielen", "fahren", "arbeiten"],
        answer: 2
      },
      {
        question: "صرف فعل «fahren» با du چیست؟",
        options: ["du fahrst", "du fährst", "du fahret"],
        answer: 1
      },
      {
        question: "فعل‌هایی که با t ختم می‌شوند در du چه پسوندی می‌گیرند؟",
        options: ["-st", "-est", "-t"],
        answer: 1
      },
      {
        question: "صرف فعل «kochen» با wir چیست؟",
        options: ["wir kocht", "wir kochen", "wir koche"],
        answer: 1
      },
      {
        question: "«Ich frühstücke um 7 Uhr» یعنی چه؟",
        options: ["ساعت ۷ بیدار می‌شوم", "ساعت ۷ صبحانه می‌خورم", "ساعت ۷ سر کار می‌روم"],
        answer: 1
      },
      {
        question: "صرف فعل «verstehen» با sie (آن‌ها) چیست؟",
        options: ["sie versteht", "sie verstehe", "sie verstehen"],
        answer: 2
      },
      {
        question: "کدام جمله صحیح است؟",
        options: ["Ich lerne Deutsch.", "Ich lernst Deutsch.", "Ich lernt Deutsch."],
        answer: 0
      },
      {
        question: "صرف فعل «sprechen» با er (با تغییر صدا) چیست؟",
        options: ["er spricht", "er spreche", "er spricht"],
        answer: 0
      }
    ]
  }
};
