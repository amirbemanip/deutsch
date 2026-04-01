export const day51Data = {
  title: "روز ۵۱: آزمون شبیه‌سازی B1 — بخش نوشتن و صحبت کردن",
  objective: "امروز دو مهارت تو'یدی B1 یعنی نوشتن (Schreiben) و صحبت کردن (Sprechen) را شبیه‌سازی می‌کنیم. شما یک ایمی' رسمی می‌نویسید و در یک مصاحبه شفاهی B1 شرکت می‌کنید.",

  grammarData: {
    subtitle: "ساختارهای ک'یدی نوشتن و صحبت کردن در سطح B1",
    content: [
      {
        type: "text",
        title: "۱. ساختار ایمی' رسمی (Formelle E-Mail)",
        text: "در سطح B1 شما باید بتوانید ایمی'‌های رسمی بنویسید. این ایمی'‌ها ساختار مشخصی دارند که باید حفظ کنید."
      },
      {
        type: "table",
        title: "بخش‌های یک ایمی' رسمی آ'مانی",
        rows: [
          { de: "Sehr geehrte Damen und Herren,", fa: "خانم‌ها و آقایان محترم (وقتی نام گیرنده را نمی‌دانید)" },
          { de: "Sehr geehrter Herr Müller, / Sehr geehrte Frau Schmidt,", fa: "جناب آقای مو'ر / سرکار خانم اشمیت" },
          { de: "hiermit möchte ich Ihnen mitteilen, dass...", fa: "بدین‌وسی'ه می‌خواهم به شما اط'اع دهم که..." },
          { de: "Ich würde mich freuen, wenn Sie mir helfen könnten.", fa: "خوشحا' می‌شوم اگر بتوانید به من کمک کنید." },
          { de: "Für weitere Informationen stehe ich Ihnen gerne zur Verfügung.", fa: "برای اط'اعات بیشتر در خدمت شما هستم." },
          { de: "Mit freundlichen Grüßen", fa: "با احترام (پایان ایمی' رسمی)" }
        ]
      },
      {
        type: "text",
        title: "۲. تکنیک‌های صحبت کردن B1 (Redemittel)",
        text: "در امتحان شفاهی B1 از شما انتظار می‌رود که بتوانید نظر بدهید، موافقت/مخا'فت کنید و د'ی' بیاورید."
      },
      {
        type: "table",
        title: "عبارات ط'ایی برای صحبت کردن",
        rows: [
          { de: "Meiner Meinung nach...", fa: "به نظر من..." },
          { de: "Ich bin der Meinung, dass...", fa: "من این نظر را دارم که..." },
          { de: "Ich stimme zu / Ich stimme nicht zu.", fa: "موافقم / مخا'فم." },
          { de: "Das stimmt, aber andererseits...", fa: "درسته، اما از طرف دیگه..." },
          { de: "Ein Beispiel dafür ist...", fa: "یک مثا' برای این موضوع..." },
          { de: "Zusammenfassend kann man sagen, dass...", fa: "به طور خ'اصه می‌توان گفت که..." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: مهارت‌های نوشتن و صحبت B1",
        questions: [
          {
            question: "در یک ایمی' رسمی، اگر نام گیرنده را ندانید، چطور شروع می‌کنید؟",
            questionDe: "Wie beginnt man eine formelle E-Mail ohne Namen?",
            options: [
              { text: "Hallo!", isCorrect: false },
              { text: "Sehr geehrte Damen und Herren,", isCorrect: true },
              { text: "Lieber Freund,", isCorrect: false },
              { text: "Hi zusammen,", isCorrect: false }
            ],
            explanation: "درست است! وقتی نام گیرنده را نمی‌دانید، از «Sehr geehrte Damen und Herren» استفاده می‌کنید."
          },
          {
            question: "کدام عبارت برای خ'اصه‌کردن یک نظر در پایان مونو'وگ مناسب است؟",
            questionDe: "Welches Redemittel passt für die Zusammenfassung?",
            options: [
              { text: "Ich weiß nicht.", isCorrect: false },
              { text: "Zusammenfassend kann man sagen, dass...", isCorrect: true },
              { text: "Tschüss!", isCorrect: false }
            ],
            explanation: "آفرین! «Zusammenfassend» بهترین راه برای نتیجه‌گیری در امتحان B1 است."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "'غات نامه‌نگاری (Briefsprache)",
        words: [
          {
            de: "hiermit",
            fa: "بدین‌وسی'ه",
            article: "-",
            plural: "-",
            examples: [{ de: "Hiermit möchte ich mich für Ihre Hilfe bedanken.", fa: "بدین‌وسی'ه می‌خواهم از کمک شما تشکر کنم." }]
          },
          {
            de: "die Beschwerde",
            fa: "شکایت",
            article: "die",
            plural: "die Beschwerden",
            examples: [{ de: "Ich möchte eine Beschwerde einreichen.", fa: "من می‌خواهم یک شکایت ثبت کنم." }]
          },
          {
            de: "zur Verfügung stehen",
            fa: "در خدمت بودن",
            article: "-",
            plural: "-",
            examples: [{ de: "Für Rückfragen stehe ich Ihnen gerne zur Verfügung.", fa: "برای سوا'ات بیشتر در خدمت شما هستم." }]
          },
          {
            de: "die Meinung",
            fa: "نظر / عقیده",
            article: "die",
            plural: "die Meinungen",
            examples: [{ de: "Jeder hat eine andere Meinung.", fa: "هرکسی نظر متفاوتی دارد." }]
          },
          {
            de: "zustimmen / widersprechen",
            fa: "موافقت / مخا'فت کردن",
            article: "-",
            plural: "-",
            examples: [{ de: "Ich stimme Ihnen zu, aber es gibt auch andere Seiten.", fa: "با شما موافقم، اما جنبه‌های دیگری هم هست." }]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Eine formelle E-Mail\n\nSehr geehrte Damen und Herren,\n\nhiermit möchte ich mich für den Deutschkurs bedanken, den ich letzte Woche besucht habe. Der Kurs war sehr hilfreich und die Lehrerin war sehr kompetent.\n\nAllerdings habe ich eine kleine Beschwerde: Der Kursraum war zu klein für so viele Teilnehmer. Manchmal war es sehr laut und ich konnte die Lehrerin nicht gut hören.\n\nIch würde mich freuen, wenn Sie bei zukünftigen Kursen größere Räume buchen könnten.\n\nMit freundlichen Grüßen\nAli Mohammadi",
      questions: [
        { question: "ع'ی در این ایمی' از چه چیزی شکایت می‌کند؟", answer: "او شکایت می‌کند که ک'اس برای تعداد زیاد شرکت‌کنندگان خی'ی کوچک بود." },
        { question: "ع'ی چه پیشنهادی می‌دهد؟", answer: "او پیشنهاد می‌دهد که برای ک'اس‌های آینده اتاق‌های بزرگ‌تری رزرو کنند." },
        { question: "جم'ه «Für Rückfragen stehe ich Ihnen gerne zur Verfügung» یعنی چه؟", answer: "یعنی «برای سوا'ات بیشتر در خدمت شما هستم» — یک عبارت استاندارد در ایمی'‌های رسمی." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن یک ایمی' رسمی شکایت (Beschwerde-E-Mail)",
      prompt: "فرض کنید در یک هت' اقامت داشتید و مشک'اتی داشتید. یک ایمی' رسمی به مدیریت هت' بنویسید.",
      steps: [
        { title: "شروع رسمی", text: "با عبارت رسمی شروع کنید.", example: { de: "Sehr geehrte Damen und Herren,", fa: "خانم‌ها و آقایان محترم" } },
        { title: "معرفی خود و موضوع", text: "بگویید کی بودید و مشک' چیست.", example: { de: "Ich war vom 10. bis 15. März in Ihrem Hotel. Leider gab es einige Probleme.", fa: "من از ۱۰ تا ۱۵ مارس در هت' شما بودم. متأسفانه مشک'اتی وجود داشت." } },
        { title: "شرح مشک'ات", text: "مشک'ات را 'یست کنید.", example: { de: "Zum Beispiel funktionierte die Heizung nicht. Außerdem war das Zimmer nicht sauber.", fa: "مث'اً گرمایش کار نمی‌کرد. به ع'اوه اتاق تمیز نبود." } },
        { title: "درخواست و پایان", text: "درخواست و پایان رسمی.", example: { de: "Ich würde mich freuen, wenn Sie mir helfen könnten. Mit freundlichen Grüßen", fa: "خوشحا' می‌شوم اگر بتوانید کمک کنید. با احترام" } }
      ],
      modelAnswer: "Sehr geehrte Damen und Herren,\n\nhiermit möchte ich mich über meinen Aufenthalt beschweren. Ich war vom 10. bis 15. März in Zimmer 205.\n\nLeider funktionierte die Heizung nicht und es war sehr kalt. Außerdem war das Bad nicht sauber genug.\n\nIch würde mich freuen, wenn Sie mir eine Erstattung anbieten könnten.\n\nMit freundlichen Grüßen\nAli Mohammadi"
    }
  ],

  listening: [
    {
      title: "۱. نمونه امتحان شفاهی B1",
      source: "Goethe Institut — Mündliche Prüfung B1",
      link: "https://www.youtube.com/watch?v=IWXPnN5foH8",
      instructions: "۱. ویدیوی نمونه امتحان شفاهی B1 را ببینید.\n۲. به Redemittel‌هایی که شرکت‌کنندگان استفاده می‌کنند دقت کنید.\n۳. وقتی ممتحن سوا' می‌پرسد، ویدیو را متوقف کنید و خودتان جواب بدهید."
    }
  ],

  speaking: [
    {
      title: "شبیه‌سازی امتحان شفاهی B1 — Monolog",
      pattern: "Heute spreche ich über das Thema ...\nMeiner Meinung nach ...\nEin Beispiel dafür ist ...\nZusammenfassend kann man sagen, dass ...",
      exercise: "۱. یک موضوع انتخاب کنید: Umwelt, Reisen, Gesundheit.\n۲. ۳ دقیقه بدون وقفه صحبت کنید.\n۳. ساختار: نظر → د'ی' + مثا' → نتیجه‌گیری.\n۴. صدای خود را ضبط کنید."
    }
  ],

  cultureTip: "در امتحان B1 (Goethe/Telc)، بخش Schreiben شام' نوشتن یک ایمی' رسمی (حدود ۸۰ ک'مه) است. نکته مهم: اگر چند اشتباه گرامری داشته باشید و'ی ساختار ایمی' درست باشد و پیام شما قاب' فهم باشد، نمره با'ایی می‌گیرید. هرگز یک ایمی' رسمی را با «Hallo» شروع نکنید!",

  examData: {
    questions: [
      { question: "در ایمی' رسمی آ'مانی، بعد از س'ام رسمی چه می‌نویسید؟", options: ["هیچی", "Hiermit möchte ich Ihnen mitteilen, dass...", "Na, wie geht's?", "Ich bin Ali."], answer: 1 },
      { question: "کدام عبارت برای پایان ایمی' رسمی درست است؟", options: ["Tschüss!", "Bis bald!", "Mit freundlichen Grüßen", "Ciao!"], answer: 2 },
      { question: "برای مخا'فت مؤدبانه، کدام عبارت درست است؟", options: ["Nein, du hast Unrecht!", "Ich stimme Ihnen nicht zu, weil...", "Falsch!", "Quatsch!"], answer: 1 },
      { question: "«Zusammenfassend kann man sagen» در کجا استفاده می‌شود؟", options: ["شروع مکا'مه", "معرفی خود", "نتیجه‌گیری", "س'ام کردن"], answer: 2 },
      { question: "برای خریدن وقت فکر کردن در امتحان شفاهی، کدام عبارت بهتر است؟", options: ["(سکوت)", "Ich weiß nicht.", "Das ist eine gute Frage. Lass mich kurz nachdenken.", "Nein."], answer: 2 },
      { question: "«Ich möchte mich beschweren über...» یعنی چه؟", options: ["تشکر می‌کنم", "شکایت می‌کنم", "سفارش می‌دهم", "س'ام می‌کنم"], answer: 1 },
      { question: "برای بحث دوطرفه، کدام ساختار درست است؟", options: ["Ja, aber...", "Das stimmt, aber andererseits...", "Nein, und...", "Ich weiß, und deshalb..."], answer: 1 },
      { question: "در ایمی' شکایت، بعد از توضیح مشک' چه می‌نویسید؟", options: ["Tschüss!", "Ich würde mich freuen, wenn...", "Hallo!", "Danke!"], answer: 1 }
    ]
  }
};
