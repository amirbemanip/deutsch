export const day9Data = {
  title: "روز ۹: حالت مفعولی (Akkusativ) - مفعول مستقیم",
  objective: "در پایان این روز، شما قادر خواهید بود حالت مفعولی (Akkusativ) را بشناسید، تغییرات آرتیکل‌ها را در این حالت یاد بگیرید و افعالی که Akkusativ می‌گیرند را به‌درستی به‌کار ببرید.",
  level: "A1",

  grammarData: {
    subtitle: "درس‌های گرامری با تمرین تعاملی",
    content: [
      {
        type: "text",
        title: "حالت مفعولی چیست؟",
        text: "در زبان آلمانی، اسم‌ها بسته به نقششان در جمله، تغییر شکل می‌دهند. این تغییرات را «حالت» (Fall یا Kasus) می‌گویند.\nحالت اول: مرفوع (Nominativ) = فاعل (کسی که کار را انجام می‌دهد)\nحالت دوم: مفعولی (Akkusativ) = مفعول مستقیم (کسی/چیزی که کار روی آن انجام می‌شود)"
      },
      {
        type: "text",
        title: "چطور مفعول مستقیم را بشناسیم؟",
        text: "سؤال: Was? (چه؟) oder Wen? (که را؟)\nاگر جواب این سؤال‌ها اسمی باشد، آن اسم مفعول مستقیم است و باید در حالت Akkusativ باشد.\nمثال: Ich kaufe den Tisch. → Was kaufe ich? → den Tisch (مفعول مستقیم)"
      },
      {
        type: "table",
        title: "تغییرات آرتیکل‌ها در Akkusativ",
        rows: [
          { de: "der → den (مذکر)", fa: "Ich sehe den Mann. (مرد را می‌بینم.) - فقط der به den تغییر می‌کند!" },
          { de: "die → die (مؤنث)", fa: "Ich sehe die Frau. (زن را می‌بینم.) - die بدون تغییر!" },
          { de: "das → das (خنثی)", fa: "Ich sehe das Kind. (بچه را می‌بینم.) - das بدون تغییر!" },
          { de: "die → die (جمع)", fa: "Ich sehe die Kinder. (بچه‌ها را می‌بینم.) - die بدون تغییر!" }
        ]
      },
      {
        type: "alert",
        title: "قانون طلایی Akkusativ",
        text: "فقط اسم‌های مذکر (der) در Akkusativ تغییر می‌کنند: der → den. بقیه (die, das, جمع) هیچ تغییری نمی‌کنند! پس فقط یک تغییر را حفظ کنید: der → den."
      },
      {
        type: "table",
        title: "آرتیکل نامشخص (ein/kein) در Akkusativ",
        rows: [
          { de: "ein → einen (مذکر)", fa: "Ich habe einen Bruder. (برادر دارم.) / Ich habe keinen Hund. (سگ ندارم.)" },
          { de: "eine → eine (مؤنث)", fa: "Ich habe eine Schwester. (خواهر دارم.) / Ich habe keine Katze. (گربه ندارم.)" },
          { de: "ein → ein (خنثی)", fa: "Ich habe ein Kind. (بچه دارم.) / Ich habe kein Auto. (ماشین ندارم.)" }
        ]
      },
      {
        type: "table",
        title: "ضمیر ملکی در Akkusativ",
        rows: [
          { de: "mein → meinen (مذکر)", fa: "Ich liebe meinen Vater. (پدرم را دوست دارم.)" },
          { de: "meine → meine (مؤنث)", fa: "Ich liebe meine Mutter. (مادرم را دوست دارم.)" },
          { de: "mein → mein (خنثی)", fa: "Ich liebe mein Kind. (بچه‌ام را دوست دارم.)" }
        ]
      },
      {
        type: "text",
        title: "۱۰ فعل که Akkusativ می‌گیرند",
        text: "این فعل‌ها همیشه مفعول مستقیم دارند و اسم بعد از آن‌ها باید در Akkusativ باشد."
      },
      {
        type: "table",
        title: "فعل‌های Akkusativ",
        rows: [
          { de: "sehen (دیدن)", fa: "Ich sehe den Film. (فیلم را می‌بینم.)" },
          { de: "kaufen (خریدن)", fa: "Ich kaufe das Buch. (کتاب را می‌خرم.)" },
          { de: "essen (خوردن)", fa: "Ich esse den Apfel. (سیب را می‌خورم.)" },
          { de: "trinken (نوشیدن)", fa: "Ich trinke den Kaffee. (قهوه را می‌نوشم.)" },
          { de: "lesen (خواندن)", fa: "Ich lese die Zeitung. (روزنامه را می‌خوانم.)" },
          { de: "suchen (جستجو کردن)", fa: "Ich suche den Schlüssel. (کلید را جستجو می‌کنم.)" },
          { de: "brauchen (نیاز داشتن)", fa: "Ich brauche das Buch. (کتاب را نیاز دارم.)" },
          { de: "haben (داشتن)", fa: "Ich habe den Hund. (سگ را دارم.)" },
          { de: "machen (انجام دادن)", fa: "Ich mache die Hausaufgaben. (تکالیف را انجام می‌دهم.)" },
          { de: "lieben (دوست داشتن)", fa: "Ich liebe die Musik. (موسیقی را دوست دارم.)" }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های کاربردی Akkusativ",
        items: [
          { de: "Ich sehe einen Film.", fa: "یک فیلم می‌بینم. (einen = یک + مذکر در Akkusativ)" },
          { de: "Er kauft eine Tasche.", fa: "او یک کیف می‌خرد. (eine = یک + مؤنث - بدون تغییر)" },
          { de: "Sie isst das Brot.", fa: "او نان را می‌خورد. (das = بدون تغییر)" },
          { de: "Wir trinken den Tee.", fa: "ما چای را می‌نوشیم. (den = the + مذکر در Akkusativ)" },
          { de: "Hast du meinen Schlüssel gesehen?", fa: "کلیدم را دیده‌ای؟ (meinen = مال من + مذکر در Akkusativ)" },
          { de: "Ich brauche deine Hilfe.", fa: "کمک تو را نیاز دارم. (deine = مال تو + مؤنث - بدون تغییر)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: Akkusativ",
        questions: [
          {
            question: "آرتیکل «der Mann» در Akkusativ چه می‌شود؟",
            questionDe: "Was wird aus 'der Mann' im Akkusativ?",
            options: [
              { text: "der Mann", isCorrect: false },
              { text: "den Mann", isCorrect: true },
              { text: "dem Mann", isCorrect: false }
            ],
            explanation: "درست! فقط der → den تغییر می‌کند."
          },
          {
            question: "کدام جمله صحیح است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich sehe der Film.", isCorrect: false },
              { text: "Ich sehe den Film.", isCorrect: true },
              { text: "Ich sehe dem Film.", isCorrect: false }
            ],
            explanation: "عالی! فعل sehen مفعول مستقیم می‌گیرد و آرتیکل مذکر باید den باشد."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین جای خالی: Akkusativ",
        instructions: "آرتیکل صحیح را در Akkusativ بنویسید.",
        sentences: [
          { de: "Ich kaufe ___ Tisch.", answer: "den", hint: "der Tisch → den Tisch" },
          { de: "Sie isst ___ Apfel.", answer: "den", hint: "der Apfel → den Apfel" },
          { de: "Er liest ___ Zeitung.", answer: "die", hint: "die Zeitung → die (بدون تغییر)" },
          { de: "Wir kaufen ___ Auto.", answer: "das", hint: "das Auto → das (بدون تغییر)" },
          { de: "Ich habe ___ Bruder.", answer: "einen", hint: "ein Bruder → einen Bruder" },
          { de: "Hast du ___ Buch gesehen?", answer: "mein", hint: "mein Buch → mein (بدون تغییر - خنثی)" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "غذاها و نوشیدنی‌ها",
        words: [
          {
            de: "der Apfel",
            fa: "سیب",
            ipa: "[ˈapfl̩]",
            article: "der",
            plural: "die Äpfel",
            examples: [{ de: "Ich esse einen Apfel.", fa: "یک سیب می‌خورم." }]
          },
          {
            de: "das Brot",
            fa: "نان",
            ipa: "[bʁoːt]",
            article: "das",
            plural: "die Brote",
            examples: [{ de: "Ich kaufe Brot.", fa: "نان می‌خرم." }]
          },
          {
            de: "die Milch",
            fa: "شیر",
            ipa: "[mɪlç]",
            article: "die",
            examples: [{ de: "Ich trinke Milch.", fa: "شیر می‌نوشم." }]
          },
          {
            de: "der Käse",
            fa: "پنیر",
            ipa: "[ˈkɛːzə]",
            article: "der",
            plural: "die Käse",
            examples: [{ de: "Ich esse Käse.", fa: "پنیر می‌خورم." }]
          },
          {
            de: "der Reis",
            fa: "برنج",
            ipa: "[ʁaɪ̯s]",
            article: "der",
            examples: [{ de: "Ich koche Reis.", fa: "برنج می‌پزم." }]
          },
          {
            de: "das Fleisch",
            fa: "گوشت",
            ipa: "[flaɪ̯ʃ]",
            article: "das",
            examples: [{ de: "Ich esse kein Fleisch.", fa: "گوشت نمی‌خورم." }]
          },
          {
            de: "das Gemüse",
            fa: "سبزیجات",
            ipa: "[ɡəˈmyːzə]",
            article: "das",
            examples: [{ de: "Ich esse viel Gemüse.", fa: "سبزیجات زیاد می‌خورم." }]
          },
          {
            de: "der Saft",
            fa: "آبمیوه",
            ipa: "[zaft]",
            article: "der",
            plural: "die Säfte",
            examples: [{ de: "Ich trinke Orangensaft.", fa: "آب پرتقال می‌نوشم." }]
          }
        ]
      },
      {
        title: "اشیاء خانه",
        words: [
          {
            de: "der Fernseher",
            fa: "تلویزیون",
            ipa: "[ˈfɛʁnzeːɐ̯]",
            article: "der",
            plural: "die Fernseher",
            examples: [{ de: "Ich sehe fern.", fa: "تلویزیون نگاه می‌کنم." }]
          },
          {
            de: "die Tasche",
            fa: "کیف",
            ipa: "[ˈtaʃə]",
            article: "die",
            plural: "die Taschen",
            examples: [{ de: "Ich kaufe eine neue Tasche.", fa: "کیف نو می‌خرم." }]
          },
          {
            de: "das Bild",
            fa: "عکس / تصویر",
            ipa: "[bɪlt]",
            article: "das",
            plural: "die Bilder",
            examples: [{ de: "Ich sehe das Bild.", fa: "عکس را می‌بینم." }]
          },
          {
            de: "das Geschenk",
            fa: "هدیه",
            ipa: "[ɡəˈʃɛŋk]",
            article: "das",
            plural: "die Geschenke",
            examples: [{ de: "Ich kaufe ein Geschenk.", fa: "هدیه می‌خرم." }]
          },
          {
            de: "die Musik",
            fa: "موسیقی",
            ipa: "[muˈziːk]",
            article: "die",
            examples: [{ de: "Ich höre Musik.", fa: "موسیقی گوش می‌دهم." }]
          },
          {
            de: "der Film",
            fa: "فیلم",
            ipa: "[fɪlm]",
            article: "der",
            plural: "die Filme",
            examples: [{ de: "Ich sehe einen Film.", fa: "فیلم می‌بینم." }]
          },
          {
            de: "das Hobby",
            fa: "سرگرمی / علاقه",
            ipa: "[ˈhɔbi]",
            article: "das",
            plural: "die Hobbys",
            examples: [{ de: "Was ist dein Hobby?", fa: "سرگرمیت چیست؟" }]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Im Supermarkt (در سوپرمارکت)\n\nAnna: Guten Tag! Was brauchen Sie heute?\nAli: Guten Tag! Ich brauche Brot und Milch.\nAnna: Möchten Sie auch Käse?\nAli: Ja, ich kaufe auch Käse. Und ich suche Äpfel.\nAnna: Die Äpfel sind dort, neben dem Gemüse.\nAli: Danke! Ich nehme auch Fleisch und Reis.\nAnna: Gut. Sonst noch etwas?\nAli: Ja, ich kaufe noch Orangensaft und Kuchen. Ich koche heute Abend für meine Familie.\nAnna: Sehr gut! Das macht zusammen 25 Euro.\nAli: Danke schön!",
      translation: [
        { de: "Im Supermarkt", fa: "در سوپرمارکت" },
        { de: "Anna: Guten Tag! Was brauchen Sie heute?", fa: "آنا: روز بخیر! امروز چه چیزی نیاز دارید؟" },
        { de: "Ali: Ich brauche Brot und Milch.", fa: "علی: نان و شیر نیاز دارم." },
        { de: "Möchten Sie auch Käse?", fa: "پنیر هم می‌خواهید؟" },
        { de: "Ja, ich kaufe auch Käse.", fa: "بله، پنیر هم می‌خرم." },
        { de: "Ich suche Äpfel.", fa: "سیب جستجو می‌کنم." },
        { de: "Die Äpfel sind dort, neben dem Gemüse.", fa: "سیب‌ها آنجا هستند، کنار سبزیجات." },
        { de: "Ich nehme auch Fleisch und Reis.", fa: "گوشت و برنج هم می‌گیرم." },
        { de: "Sonst noch etwas?", fa: "چیز دیگری؟" },
        { de: "Ich koche heute Abend für meine Familie.", fa: "امشب برای خانواده‌ام آشپزی می‌کنم." },
        { de: "Das macht zusammen 25 Euro.", fa: "روی‌هم ۲۵ یورو می‌شود." }
      ],
      questions: [
        { question: "علی چه چیزهایی نیاز دارد؟", answer: "نان، شیر، پنیر، سیب، گوشت، برنج، آب پرتقال و کیک." },
        { question: "سیب‌ها کجا هستند؟", answer: "کنار سبزیجات." },
        { question: "علی امشب چه کار می‌کند؟", answer: "برای خانواده‌اش آشپزی می‌کند." },
        { question: "جمع خرید چند یورو شد؟", answer: "۲۵ یورو." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن لیست خرید و برنامه آشپزی",
      prompt: "با استفاده از Akkusativ، لیست خرید و برنامه آشپزی خود را بنویسید.",
      steps: [
        {
          title: "لیست خرید",
          text: "چیزهایی که نیاز دارید را با آرتیکل Akkusativ بنویسید.",
          example: { de: "Ich brauche Milch, Brot und Käse.", fa: "شیر، نان و پنیر نیاز دارم." }
        },
        {
          title: "برنامه آشپزی",
          text: "بگویید چه چیزهایی می‌خورید و می‌نوشید.",
          example: { de: "Ich esse den Apfel und trinke den Saft.", fa: "سیب را می‌خورم و آبمیوه را می‌نوشم." }
        },
        {
          title: "خریدها",
          text: "چه چیزهایی می‌خرید.",
          example: { de: "Ich kaufe das Fleisch und die Milch.", fa: "گوشت و شیر را می‌خرم." }
        }
      ],
      modelAnswer: "Ich gehe heute zum Supermarkt. Ich brauche Brot, Milch und Käse. Ich kaufe auch Äpfel und Orangensaft. Für das Abendessen koche ich Reis und Fleisch. Ich esse den Kuchen und trinke den Tee. Meine Familie liebt das Essen."
    }
  ],

  listening: [
    {
      title: "۱. Akkusativ در جملات (A1 hören)",
      instruction: "تمرین شنیداری:\n۱. جملات را بشنوید و آرتیکل Akkusativ را تشخیص دهید.\n۲. مشخص کنید کدام اسم مفعول مستقیم است.\n۳. جملات را با صدای بلند تکرار کنید.",
      sentences: [
        { de: "Ich sehe den Film.", fa: "فیلم را می‌بینم.", tts: "Ich sehe den Film." },
        { de: "Sie isst den Apfel.", fa: "او سیب را می‌خورد.", tts: "Sie isst den Apfel." },
        { de: "Er kauft das Buch.", fa: "او کتاب را می‌خرد.", tts: "Er kauft das Buch." },
        { de: "Wir trinken den Kaffee.", fa: "ما قهوه را می‌نوشیم.", tts: "Wir trinken den Kaffee." },
        { de: "Ich habe eine Schwester.", fa: "یک خواهر دارم.", tts: "Ich habe eine Schwester." },
        { de: "Hast du meinen Schlüssel?", fa: "کلیدم را داری؟", tts: "Hast du meinen Schlüssel?" }
      ]
    }
  ],

  speaking: [
    {
      title: "تمرین Akkusativ در مکالمه",
      pattern: "- Was machst du?\n- Ich esse einen Apfel.\n- Und was trinkst du?\n- Ich trinke den Kaffee.\n- Was kaufst du heute?\n- Ich kaufe das Brot und die Milch.",
      exercise: "تمرین:\nگام ۱: بخش pattern را بشنوید.\nگام ۲: جاهای خالی را با اطلاعات واقعی پر کنید.\nگام ۳: Akkusativ را درست استفاده کنید."
    }
  ],

  cultureTip: "در آلمان، سوپرمارکت‌ها معمولاً یکشنبه‌ها بسته هستند! (Sonntags ist alles zu.) بنابراین باید شنبه خرید کنید. نکته جالب: در آلمان، خالی کردن بطری‌ها در فروشگاه (Pfand) رایج است. هر بطری پلاستیکی ۲۵ سنت و شیشه‌ای ۸ سنت ارزش دارد. همچنین کیسه خرید (Tüte) در آلمان رایگان نیست و باید آن را بخرید یا کیسه خودتان را بیاورید.",

  examData: {
    questions: [
      {
        question: "آرتیکل «der Mann» در Akkusativ چه می‌شود؟",
        options: ["der Mann", "den Mann", "dem Mann"],
        answer: 1
      },
      {
        question: "آرتیکل «die Frau» در Akkusativ چه می‌شود؟",
        options: ["die Frau", "der Frau", "den Frau"],
        answer: 0
      },
      {
        question: "کدام جمله صحیح است؟",
        options: ["Ich sehe der Film.", "Ich sehe den Film.", "Ich sehe dem Film."],
        answer: 1
      },
      {
        question: "«Ich kaufe ein Buch» در Akkusativ چه می‌شود؟",
        options: ["Ich kaufe einen Buch.", "Ich kaufe ein Buch.", "Ich kaufe einen Buch."],
        answer: 1
      },
      {
        question: "کدام فعل Akkusativ می‌گیرد؟",
        options: ["sein", "wohnen", "sehen", "kommen"],
        answer: 2
      },
      {
        question: "«Ich habe einen Bruder» یعنی چه؟",
        options: ["برادرم هست", "یک برادر دارم", "برادرم را می‌بینم"],
        answer: 1
      },
      {
        question: "آرتیکل «das Auto» در Akkusativ چه می‌شود؟",
        options: ["den Auto", "das Auto", "dem Auto"],
        answer: 1
      },
      {
        question: "کدام جمله صحیح است؟",
        options: ["Sie isst den Apfel.", "Sie isst der Apfel.", "Sie isst dem Apfel."],
        answer: 0
      },
      {
        question: "«mein Bruder» در Akkusativ چه می‌شود؟",
        options: ["meinen Bruder", "mein Bruder", "meinem Bruder"],
        answer: 0
      },
      {
        question: "فقط کدام جنسیت در Akkusativ تغییر می‌کند؟",
        options: ["مؤنث (die)", "خنثی (das)", "مذکر (der)", "جمع"],
        answer: 2
      }
    ]
  }
};
