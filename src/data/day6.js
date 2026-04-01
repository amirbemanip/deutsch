export const day6Data = {
  title: "روز ۶: نفی (nicht در مقابل kein/keine)",
  objective: "در پایان این روز، شما قادر خواهید بود جملات را منفی کنید. تفاوت nicht و kein/keine را بدانید و موقعیت صحیح nicht در جمله را یاد بگیرید.",
  level: "A1",

  grammarData: {
    subtitle: "درس‌های گرامری با تمرین تعاملی",
    content: [
      {
        type: "text",
        title: "دو روش نفی در آلمانی",
        text: "در زبان آلمانی دو کلمه برای نفی وجود دارد: nicht و kein/keine. انتخاب بین این دو به چیزی که می‌خواهید نفی کنید بستگی دارد.\nقاعده کلی: nicht برای نفی فعل‌ها، صفت‌ها و قیدها استفاده می‌شود. kein/keine برای نفی اسم‌هایی که آرتیکل دارند."
      },
      {
        type: "table",
        title: "kein/keine (نفی اسم‌ها)",
        rows: [
          { de: "kein + اسم مذکر (der)", fa: "Ich habe keinen Hund. (سگ ندارم.) - kein جایگزین der می‌شود" },
          { de: "keine + اسم مؤنث (die)", fa: "Ich habe keine Katze. (گربه ندارم.) - keine جایگزین die می‌شود" },
          { de: "kein + اسم خنثی (das)", fa: "Ich habe kein Auto. (ماشین ندارم.) - kein جایگزین das می‌شود" },
          { de: "keine + جمع", fa: "Ich habe keine Kinder. (بچه ندارم.) - keine جایگزین die (جمع) می‌شود" }
        ]
      },
      {
        type: "table",
        title: "kein/keine - جدول کامل",
        rows: [
          { de: "der Hund → kein Hund", fa: "من سگ ندارم: Ich habe keinen Hund." },
          { de: "die Katze → keine Katze", fa: "من گربه ندارم: Ich habe keine Katze." },
          { de: "das Auto → kein Auto", fa: "من ماشین ندارم: Ich habe kein Auto." },
          { de: "die Kinder → keine Kinder", fa: "من بچه ندارم: Ich habe keine Kinder." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم درباره kein",
        text: "kein دقیقاً مثل ضمیر ملکی mein رفتار می‌کند! اگر mein را بلدید، kein هم آسان است: mein → kein، meine → keine. فقط تفاوت در معناست: mein=مال من، kein=نه... (نفی)"
      },
      {
        type: "text",
        title: "nicht (نفی فعل، صفت و قید)",
        text: "وقتی می‌خواهید فعل، صفت، قید یا کل جمله را نفی کنید، از nicht استفاده می‌کنید."
      },
      {
        type: "table",
        title: "موقعیت nicht در جمله",
        rows: [
          { de: "نفی فعل", fa: "nicht قبل از آخرین عضو جمله: Ich lerne heute nicht. (امروز یاد نمی‌گیرم.)" },
          { de: "نفی صفت", fa: "nicht قبل از صفت: Das Buch ist nicht interessant. (کتاب جالب نیست.)" },
          { de: "نفی مکان", fa: "nicht قبل از مکان: Ich wohne nicht in Berlin. (در برلین زندگی نمی‌کنم.)" },
          { de: "نفی زمان", fa: "nicht قبل از زمان: Ich lerne nicht heute. (امروز یاد نمی‌گیرم.)" },
          { de: "نفی همیشه قبل از مفعول", fa: "Ich spreche nicht Deutsch. (آلمانی صحبت نمی‌کنم.)" },
          { de: "نفی فعل‌های کمکی", fa: "nicht قبل از فعل اصلی: Ich kann nicht kommen. (نمی‌توانم بیایم.)" }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های کاربردی nicht",
        items: [
          { de: "Ich bin nicht müde.", fa: "من خسته نیستم." },
          { de: "Er kommt nicht aus Deutschland.", fa: "او از آلمان نمی‌آید." },
          { de: "Wir sprechen nicht Deutsch.", fa: "ما آلمانی صحبت نمی‌کنیم." },
          { de: "Das ist nicht gut.", fa: "این خوب نیست." },
          { de: "Ich habe heute nicht Zeit.", fa: "امروز وقت ندارم." },
          { de: "Sie ist nicht krank.", fa: "او مریض نیست." }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های کاربردی kein/keine",
        items: [
          { de: "Ich habe keine Geschwister.", fa: "من خواهر و برادر ندارم." },
          { de: "Er hat kein Geld.", fa: "او پول ندارد." },
          { de: "Sie haben keine Kinder.", fa: "آن‌ها بچه ندارند." },
          { de: "Wir haben kein Auto.", fa: "ما ماشین نداریم." },
          { de: "Ich habe keine Zeit.", fa: "من وقت ندارم." },
          { de: "Das ist kein Problem.", fa: "این مشکلی نیست." }
        ]
      },
      {
        type: "table",
        title: "خلاصه: nicht یا kein؟",
        rows: [
          { de: "نفی فعل", fa: "nicht: Ich lerne nicht. (یاد نمی‌گیرم.)" },
          { de: "نفی صفت", fa: "nicht: Er ist nicht groß. (او بلند نیست.)" },
          { de: "نفی اسم با آرتیکل", fa: "kein/keine: Ich habe kein Auto. (ماشین ندارم.)" },
          { de: "نفی عبارت با sein", fa: "nicht: Das ist nicht gut. (این خوب نیست.)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: nicht یا kein",
        questions: [
          {
            question: "کدام جمله صحیح است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich habe nicht Hund.", isCorrect: false },
              { text: "Ich habe keinen Hund.", isCorrect: true },
              { text: "Ich habe kein Hund.", isCorrect: false }
            ],
            explanation: "درست! Hund مذکر است، پس از keinen استفاده می‌کنیم."
          },
          {
            question: "کدام جمله صحیح است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Das Buch ist kein interessant.", isCorrect: false },
              { text: "Das Buch ist nicht interessant.", isCorrect: true },
              { text: "Das Buch nicht ist interessant.", isCorrect: false }
            ],
            explanation: "عالی! صفت «interessant» با nicht نفی می‌شود."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین جای خالی: nicht یا kein/keine",
        instructions: "نفی مناسب را در جای خالی بنویسید.",
        sentences: [
          { de: "Ich habe ___ Zeit.", answer: "keine", hint: "نفی اسم مؤنث" },
          { de: "Das ist ___ gut.", answer: "nicht", hint: "نفی صفت" },
          { de: "Er hat ___ Kinder.", answer: "keine", hint: "نفی جمع" },
          { de: "Ich bin ___ müde.", answer: "nicht", hint: "نفی صفت" },
          { de: "Sie haben ___ Auto.", answer: "kein", hint: "نفی اسم خنثی" },
          { de: "Ich komme ___ aus Berlin.", answer: "nicht", hint: "نفی مکان" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "کلمات روزمره",
        words: [
          {
            de: "das Problem",
            fa: "مشکل",
            ipa: "[pʁoˈbleːm]",
            article: "das",
            plural: "die Probleme",
            examples: [{ de: "Das ist kein Problem.", fa: "این مشکلی نیست." }]
          },
          {
            de: "die Frage",
            fa: "سوال",
            ipa: "[ˈfʁaːɡə]",
            article: "die",
            plural: "die Fragen",
            examples: [{ de: "Ich habe keine Fragen.", fa: "سوالی ندارم." }]
          },
          {
            de: "die Antwort",
            fa: "جواب",
            ipa: "[ˈantvɔʁt]",
            article: "die",
            plural: "die Antworten",
            examples: [{ de: "Ich weiß keine Antwort.", fa: "جوابی نمی‌دانم." }]
          },
          {
            de: "das Geld",
            fa: "پول",
            ipa: "[ɡɛlt]",
            article: "das",
            examples: [{ de: "Ich habe kein Geld.", fa: "پول ندارم." }]
          },
          {
            de: "die Arbeit",
            fa: "کار",
            ipa: "[ˈaʁbaɪ̯t]",
            article: "die",
            plural: "die Arbeiten",
            examples: [{ de: "Ich habe keine Arbeit.", fa: "کار ندارم." }]
          },
          {
            de: "das Essen",
            fa: "غذا",
            ipa: "[ˈɛsn̩]",
            article: "das",
            plural: "die Essen",
            examples: [{ de: "Das Essen ist nicht gut.", fa: "غذا خوب نیست." }]
          },
          {
            de: "das Getränk",
            fa: "نوشیدنی",
            ipa: "[ɡəˈtʁɛŋk]",
            article: "das",
            plural: "die Getränke",
            examples: [{ de: "Ich trinke kein Getränk.", fa: "نوشیدنی نمی‌نوشم." }]
          },
          {
            de: "der Grund",
            fa: "دلیل",
            ipa: "[ɡʁʊnt]",
            article: "der",
            plural: "die Gründe",
            examples: [{ de: "Es gibt keinen Grund.", fa: "دلیلی وجود ندارد." }]
          }
        ]
      },
      {
        title: "صفات و قیدها (برای تمرین nicht)",
        words: [
          {
            de: "richtig",
            fa: "درست",
            ipa: "[ˈʁɪçtɪç]",
            examples: [{ de: "Das ist nicht richtig.", fa: "این درست نیست." }]
          },
          {
            de: "falsch",
            fa: "غلط",
            ipa: "[falʃ]",
            examples: [{ de: "Das ist falsch.", fa: "این غلط است." }]
          },
          {
            de: "schnell",
            fa: "سریع",
            ipa: "[ʃnɛl]",
            examples: [{ de: "Er ist nicht schnell.", fa: "او سریع نیست." }]
          },
          {
            de: "langsam",
            fa: "آهسته",
            ipa: "[ˈlaŋzaːm]",
            examples: [{ de: "Bitte nicht so langsam!", fa: "لطفاً اینقدر آهسته نباش!" }]
          },
          {
            de: "wichtig",
            fa: "مهم",
            ipa: "[ˈvɪçtɪç]",
            examples: [{ de: "Das ist nicht wichtig.", fa: "این مهم نیست." }]
          },
          {
            de: "schwer",
            fa: "سنگین / سخت",
            ipa: "[ʃveːɐ̯]",
            examples: [{ de: "Das ist nicht schwer.", fa: "این سخت نیست." }]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "In der Schule (در مدرسه)\n\nLehrerin: Guten Morgen, Kinder! Wie geht es euch?\nKinder: Gut, danke!\nLehrerin: Gut. Hat heute jemand Fragen?\nAli: Ja, bitte. Ich habe eine Frage.\nLehrerin: Ja, Ali?\nAli: Ich verstehe die Aufgabe nicht. Das ist schwer.\nLehrerin: Das ist nicht schwer. Ich helfe dir.\nAli: Danke! Und ich habe kein Papier.\nLehrerin: Kein Problem. Hier ist Papier.\nAli: Danke schön!",
      translation: [
        { de: "In der Schule", fa: "در مدرسه" },
        { de: "Lehrerin: Guten Morgen, Kinder!", fa: "معلم: صبح بخیر بچه‌ها!" },
        { de: "Wie geht es euch?", fa: "حالتان چطور است؟" },
        { de: "Kinder: Gut, danke!", fa: "بچه‌ها: خوبیم، ممنون!" },
        { de: "Hat heute jemand Fragen?", fa: "امروز کسی سوالی دارد؟" },
        { de: "Ali: Ja, bitte. Ich habe eine Frage.", fa: "علی: بله لطفاً. من یک سوال دارم." },
        { de: "Ich verstehe die Aufgabe nicht.", fa: "من تمرین را نمی‌فهمم." },
        { de: "Das ist schwer.", fa: "این سخت است." },
        { de: "Das ist nicht schwer.", fa: "این سخت نیست." },
        { de: "Ich helfe dir.", fa: "کمکت می‌کنم." },
        { de: "Ich habe kein Papier.", fa: "من کاغذ ندارم." },
        { de: "Kein Problem.", fa: "مشکلی نیست." }
      ],
      questions: [
        { question: "علی چه مشکلی دارد؟", answer: "تمرین را نمی‌فهمد و کاغذ ندارد." },
        { question: "معلم چطور کمک می‌کند؟", answer: "معلم می‌گوید کمکش می‌کند و کاغذ به او می‌دهد." },
        { question: "علی از nicht یا kein استفاده می‌کند؟", answer: "هر دو: «Ich verstehe die Aufgabe nicht» (nicht) و «Ich habe kein Papier» (kein)." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن توصیف زندگی روزمره با نفی",
      prompt: "با استفاده از nicht و kein/keine، زندگی روزمره خود را توصیف کنید.",
      steps: [
        {
          title: "چیزهایی که ندارید",
          text: "از kein/keine استفاده کنید.",
          example: { de: "Ich habe kein Auto und keine Katze.", fa: "ماشین ندارم و گربه ندارم." }
        },
        {
          title: "چیزهایی که نیستید",
          text: "از nicht با sein استفاده کنید.",
          example: { de: "Ich bin nicht krank und nicht müde.", fa: "مریض نیستم و خسته نیستم." }
        },
        {
          title: "کارهایی که نمی‌کنید",
          text: "از nicht با فعل استفاده کنید.",
          example: { de: "Ich lerne heute nicht.", fa: "امروز یاد نمی‌گیرم." }
        }
      ],
      modelAnswer: "Ich bin nicht müde, aber ich habe keine Zeit. Ich habe kein Auto und kein Handy. Das Essen ist nicht schlecht. Ich spreche nicht Englisch. Ich komme nicht aus Berlin. Das ist kein Problem."
    }
  ],

  listening: [
    {
      title: "۱. جملات منفی (A1 hören)",
      instruction: "تمرین شنیداری:\n۱. جملات را بشنوید و مشخص کنید از nicht یا kein استفاده شده.\n۲. جملات را با صدای بلند تکرار کنید.\n۳. دقت کنید به موقعیت nicht در جمله.",
      sentences: [
        { de: "Ich bin nicht müde.", fa: "من خسته نیستم.", tts: "Ich bin nicht müde." },
        { de: "Ich habe keine Zeit.", fa: "من وقت ندارم.", tts: "Ich habe keine Zeit." },
        { de: "Das ist nicht gut.", fa: "این خوب نیست.", tts: "Das ist nicht gut." },
        { de: "Er hat kein Auto.", fa: "او ماشین ندارد.", tts: "Er hat kein Auto." },
        { de: "Sie kommen nicht aus Deutschland.", fa: "آن‌ها از آلمان نمی‌آیند.", tts: "Sie kommen nicht aus Deutschland." },
        { de: "Wir haben keine Kinder.", fa: "ما بچه نداریم.", tts: "Wir haben keine Kinder." }
      ]
    }
  ],

  speaking: [
    {
      title: "تمرین نفی در مکالمه",
      pattern: "- Hast du ein Auto?\n- Nein, ich habe kein Auto.\n- Bist du müde?\n- Nein, ich bin nicht müde.\n- Sprichst du Englisch?\n- Nein, ich spreche nicht Englisch. Aber ich spreche Deutsch.",
      exercise: "تمرین:\nگام ۱: بخش pattern را بشنوید.\nگام ۲: به سوالات جواب منفی بدهید.\nگام ۳: جواب‌های خودتان را با اطلاعات واقعی جایگزین کنید."
    }
  ],

  cultureTip: "در فرهنگ آلمانی، مستقیم و صریح بودن (Direktheit) ارزش محسوب می‌شود. آلمانی‌ها وقتی نمی‌توانند کاری انجام دهند، مستقیماً می‌گویند «Nein» یا «Das geht nicht» (این نمی‌شود). این را بی‌ادبی ندانید! همچنین وقتی آلمانی‌ها می‌گویند «Ich habe keine Zeit» (وقت ندارم)، معمولاً واقعاً وقت ندارند و تعارف نمی‌کنند. در مقابل، گفتن «Ja, ja» (بله، بله) در آلمانی گاهی به معنای بی‌توجهی است، نه موافقت!",

  examData: {
    questions: [
      {
        question: "کدام جمله صحیح است؟",
        options: ["Ich habe nicht Hund.", "Ich habe keinen Hund.", "Ich habe kein Hund."],
        answer: 1
      },
      {
        question: "kein/keine برای چه چیزی استفاده می‌شود؟",
        options: ["نفی فعل", "نفی صفت", "نفی اسم با آرتیکل", "نفی قید"],
        answer: 2
      },
      {
        question: "کدام جمله صحیح است؟",
        options: ["Das Buch ist kein interessant.", "Das Buch ist nicht interessant.", "Das Buch nicht ist interessant."],
        answer: 1
      },
      {
        question: "«Ich habe keine Zeit» یعنی چه؟",
        options: ["من وقت دارم", "من وقت ندارم", "من زمان هستم"],
        answer: 1
      },
      {
        question: "kein برای اسم مذکر چه شکلی دارد؟",
        options: ["kein", "keine", "keinen"],
        answer: 2
      },
      {
        question: "«nicht» در جمله «Ich bin nicht müde» چه چیزی را نفی می‌کند؟",
        options: ["فعل bin", "صفت müde", "ضمیر ich"],
        answer: 1
      },
      {
        question: "کدام گزینه صحیح نیست؟",
        options: ["Ich habe kein Geld.", "Ich habe keine Kinder.", "Ich habe nicht Kinder."],
        answer: 2
      },
      {
        question: "«Das ist kein Problem» یعنی چه؟",
        options: ["این مشکل است", "این مشکلی نیست", "این مشکل ندارد"],
        answer: 1
      },
      {
        question: "نفی فعل با چه کلمه‌ای انجام می‌شود؟",
        options: ["kein", "keine", "nicht"],
        answer: 2
      },
      {
        question: "کدام جمله صحیح است؟",
        options: ["Er kommt nicht aus Berlin.", "Er kommt kein Berlin.", "Er nicht kommt aus Berlin."],
        answer: 0
      }
    ]
  }
};
