export const day53Data = {
  title: "روز ۵۳: اصطلاحات و ضرب‌المثل‌های آلمانی",
  objective: "در این روز اصطلاحات رایج و ضرب‌المثل‌هایی را یاد می‌گیرید که هر آلمانی‌زبانی در زندگی روزمره استفاده می‌کند.",

  grammarData: {
    subtitle: "اصطلاحات با فعل‌های کلیدی آلمانی",
    content: [
      {
        type: "text",
        title: "۱. اصطلاحات با فعل sein",
        text: "بسیاری از اصطلاحات آلمانی با فعل ساده sein (بودن) ساخته می‌شوند."
      },
      {
        type: "examples",
        title: "اصطلاحات با sein",
        items: [
          { de: "Das ist mir egal.", fa: "برام مهم نیست." },
          { de: "Das ist nicht mein Ding.", fa: "این کار من نیست / به این علاقه ندارم." },
          { de: "Das ist ja der Hammer!", fa: "این که خیلی باحاله!" }
        ]
      },
      {
        type: "text",
        title: "۲. ضرب‌المثل‌های معروف آلمانی",
        text: "ضرب‌المثل‌ها بخش مهمی از فرهنگ هر زبانی هستند."
      },
      {
        type: "examples",
        title: "۱۰ ضرب‌المثل پرکاربرد",
        items: [
          { de: "Uebung macht den Meister.", fa: "تمرین، استاد می‌سازه." },
          { de: "Der Apfel faellt nicht weit vom Stamm.", fa: "سیب از درخت دور نمی‌افته." },
          { de: "Wer rastet, der rostet.", fa: "هر که بیکار بشینه، زنگ می‌زنه." },
          { de: "Morgenstund hat Gold im Mund.", fa: "صبح زود طلا دهنشه!" },
          { de: "Aller Anfang ist schwer.", fa: "هر شروعی سخته." },
          { de: "Luegen haben kurze Beine.", fa: "دروغ پاهاش کوتاهه." },
          { de: "Besser spaet als nie.", fa: "بهتر دیر از هرگز!" },
          { de: "Wo ein Wille ist, da ist auch ein Weg.", fa: "هرجا اراده باشه، راه هم هست." }
        ]
      },
      {
        type: "fill_blank",
        title: "ضرب‌المثل‌ها را کامل کنید",
        blanks: [
          { sentence: "Uebung macht den ___ .", answer: "Meister", hint: "استاد" },
          { sentence: "Wer rastet, der ___ .", answer: "rostet", hint: "زنگ زدن" },
          { sentence: "Aller ___ ist schwer.", answer: "Anfang", hint: "شروع" },
          { sentence: "Besser spaet als ___ .", answer: "nie", hint: "هرگز" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: ضرب‌المثل‌ها",
        questions: [
          {
            question: "معنی Uebung macht den Meister چیست؟",
            options: [
              { text: "استاد خیلی مهمه", isCorrect: false },
              { text: "تمرین، استاد می‌سازه", isCorrect: true },
              { text: "استادها تمرین نمی‌کنن", isCorrect: false }
            ],
            explanation: "با تمرین مداوم، به تسلط می‌رسید."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "اصطلاحات روزمره",
        words: [
          { de: "die Daumen druecken", fa: "آرزوی موفقیت کردن", article: "-", plural: "-", examples: [{ de: "Ich druecke dir die Daumen!", fa: "برات آرزوی موفقیت می‌کنم!" }] },
          { de: "den Nagel auf den Kopf treffen", fa: "دقیق هدف زدن", article: "-", plural: "-", examples: [{ de: "Du hast den Nagel auf den Kopf getroffen!", fa: "دقیقاً درست گفتی!" }] },
          { de: "Tomaten auf den Augen haben", fa: "کور بودن (کنایه‌ای)", article: "-", plural: "-", examples: [{ de: "Hast du Tomaten auf den Augen?", fa: "کوری؟ اینجا نوشته!" }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Sprichwoerter im Alltag\n\nMeine Oma hat mir als Kind immer Sprichwoerter beigebracht. Mein Lieblingssprichwort ist: Wo ein Wille ist, da ist auch ein Weg. Das bedeutet, dass man niemals aufgeben soll.\n\nMein Bruder sagt immer: Morgenstund hat Gold im Mund. Er steht jeden Tag um 5 Uhr auf!\n\nWenn jemand luegt, sagen wir auf Deutsch: Luegen haben kurze Beine. Das heisst, die Wahrheit kommt immer irgendwann heraus.",
      questions: [
        { question: "ضرب‌المثل مورد علاقه نویسنده چیست؟", answer: "Wo ein Wille ist, da ist auch ein Weg — هرگز نباید تسلیم شوی." },
        { question: "برادر نویسنده چرا هر روز ساعت ۵ بیدار می‌شود؟", answer: "چون معتقد است Morgenstund hat Gold im Mund." },
        { question: "Luegen haben kurze Beine یعنی چه؟", answer: "دروغ زود برملا می‌شود." }
      ]
    }
  ],

  writing: [
    {
      title: "استفاده از ضرب‌المثل در متن",
      prompt: "یک پاراگراف درباره تجربه یادگیری آلمانی بنویسید و حداقل ۲ ضرب‌المثل استفاده کنید.",
      steps: [
        { title: "شروع", text: "با ضرب‌المثل شروع کنید.", example: { de: "Aller Anfang ist schwer, aber ich gebe nicht auf.", fa: "هر شروعی سخته، اما من جا نمی‌زنم." } },
        { title: "نتیجه‌گیری", text: "با ضرب‌المثل دوم تمام کنید.", example: { de: "Uebung macht den Meister!", fa: "تمرین، استاد می‌سازه!" } }
      ],
      modelAnswer: "Aller Anfang ist schwer. Als ich nach Deutschland kam, konnte ich kein Wort Deutsch. Aber ich habe jeden Tag gelernt. Nach einem Jahr kann ich jetzt fließend sprechen. Wo ein Wille ist, da ist auch ein Weg!"
    }
  ],

  listening: [
    {
      title: "۱. ضرب‌المثل‌های آلمانی",
      source: "German Proverbs Explained",
      link: "https://www.youtube.com/watch?v=3JZ_DqEL7ig",
      instructions: "ویدیو را ببینید و ضرب‌المثل‌ها را یادداشت کنید."
    }
  ],

  speaking: [
    {
      title: "تمرین ضرب‌المثل",
      pattern: "Uebung macht den Meister!\nWo ein Wille ist, da ist auch ein Weg.",
      exercise: "هر ضرب‌المثل را با لحن قاطع تکرار کنید."
    }
  ],

  cultureTip: "آلمانی‌ها عاشق ضرب‌المثل‌اند! اگر در مکالمه B1 خود یک ضرب‌المثل مناسب استفاده کنید، ممتحن بسیار تحت تأثیر قرار می‌گیرد.",

  examData: {
    questions: [
      { question: "معنی Uebung macht den Meister چیست؟", options: ["استاد خیلی مهمه", "تمرین، استاد می‌سازه", "استادها تمرین نمی‌کنن"], answer: 1 },
      { question: "Luegen haben kurze Beine یعنی...", options: ["دروغ‌گو پاهاش کوتاهه", "دروغ زود برملا میشه", "کسی که دروغ میگه راه نمیره"], answer: 1 },
      { question: "Das ist nicht mein Ding یعنی چه؟", options: ["این مال من نیست", "به این علاقه ندارم", "من این رو نمی‌فهمم"], answer: 1 },
      { question: "Tomaten auf den Augen haben یعنی...", options: ["گوجه دوست داره", "کوره / نمی‌بینه", "چشماش قرمزه"], answer: 1 },
      { question: "Besser spaet als nie یعنی...", options: ["دیر بهتر از هرگز", "هرگز دیر نیست", "دیر نرو"], answer: 0 },
      { question: "Die Daumen druecken یعنی چه؟", options: ["آرزوی موفقیت", "انگشت شکسته", "دست دادن"], answer: 0 },
      { question: "کدام ضرب‌المثل درباره تسلیم نشدن است؟", options: ["Wo ein Wille ist, da ist auch ein Weg", "Der Apfel faellt nicht weit vom Stamm", "Luegen haben kurze Beine"], answer: 0 },
      { question: "Morgenstund hat Gold im Mund یعنی...", options: ["طلا خوبه", "صبح زود بیدار شدن خوبه", "دهن طلایی"], answer: 1 }
    ]
  }
};
