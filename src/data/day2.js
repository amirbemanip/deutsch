export const day2Data = {
  title: "روز ۲: آرتیکل‌ها (der/die/das) + قواعد جنسیت اسم‌ها",
  objective: "در پایان این روز، شما قادر خواهید بود جنسیت اسم‌ها (مذکر، مؤنث، خنثی) را با استفاده از ۷ قانون کاربردی حدس بزنید، آرتیکل‌ها را در حالت مرفوع (Nominativ) به‌درستی به‌کار ببرید و ۱۵ اسم جدید با آرتیکل صحیح یاد بگیرید.",
  level: "A1",

  grammarData: {
    subtitle: "درس‌های گرامری با تمرین تعاملی",
    content: [
      {
        type: "text",
        title: "چرا آرتیکل‌ها مهم هستند؟",
        text: "در زبان فارسی ما آرتیکل نداریم. اما در آلمانی، هر اسمی یک جنسیت دارد: مذکر (der)، مؤنث (die) یا خنثی (das). این جنسیت معمولاً هیچ ربطی به معنای کلمه ندارد! مثلاً das Mädchen (دختر) خنثی است!\nآرتیکل درست مثل یک کلید است که قفل‌های زیادی را باز می‌کند. بدون آرتیکل، نمی‌توانید جمله بسازید."
      },
      {
        type: "table",
        title: "آرتیکل‌ها در حالت مرفوع (Nominativ)",
        rows: [
          { de: "der (مذکر - مفرد)", fa: "der Mann (مرد), der Tisch (میز), der Hund (سگ)" },
          { de: "die (مؤنث - مفرد)", fa: "die Frau (زن), die Lampe (چراغ), die Katze (گربه)" },
          { de: "das (خنثی - مفرد)", fa: "das Kind (بچه), das Buch (کتاب), das Haus (خانه)" },
          { de: "die (جمع)", fa: "die Männer (مردها), die Frauen (زن‌ها), die Kinder (بچه‌ها)" }
        ]
      },
      {
        type: "text",
        title: "۷ قانون طلایی برای حدس زدن جنسیت اسم‌ها",
        text: "اگرچه جنسیت اسم‌ها اغلب باید حفظ شوند، اما ۷ قانون کلی وجود دارد که در ۸۰% موارد درست کار می‌کنند. این قوانین را حتماً حفظ کنید!"
      },
      {
        type: "table",
        title: "قانون ۱-۴: اسم‌های مذکر (der)",
        rows: [
          { de: "روزها، ماه‌ها، فصل‌ها", fa: "der Montag (دوشنبه), der Januar (ژانویه), der Winter (زمستان) → همه der" },
          { de: "نام‌های جهت‌ها", fa: "der Norden (شمال), der Süden (جنوب), der Osten (شرق), der Westen (غرب) → der" },
          { de: "پسوندهای -er (کسی که...)", fa: "der Lehrer (معلم), der Schüler (دانش‌آموز), der Programmierer (برنامه‌نویس) → der" },
          { de: "اکثر مایعات و گازها", fa: "der Kaffee (قهوه), der Tee (چای), der Wein (شراب), der Saft (آبمیوه) → der" }
        ]
      },
      {
        type: "table",
        title: "قانون ۵-۶: اسم‌های مؤنث (die)",
        rows: [
          { de: "پسوندهای -e, -ung, -heit, -keit, -schaft, -tion, -tät", fa: "die Lampe (چراغ), die Zeitung (روزنامه), die Freiheit (آزادی), die Möglichkeit (امکان), die Freundschaft (دوستی), die Nation (ملت), die Universität (دانشگاه) → همه die" },
          { de: "اکثر میوه‌ها و گل‌ها", fa: "die Rose (گل رز), die Tulpe (لاله), die Banane (موز), die Orange (پرتقال) → die" }
        ]
      },
      {
        type: "table",
        title: "قانون ۷: اسم‌های خنثی (das)",
        rows: [
          { de: "پسوندهای -chen, -lein (تصغیر), -ment, -um", fa: "das Mädchen (دخترک), das Brötchen (نان کوچک), das Dokument (سند), das Museum (موزه) → همه das" },
          { de: "حروف الفبا و رنگ‌ها به‌عنوان اسم", fa: "das A (حرف آ), das Blau (رنگ آبی), das Rot (رنگ قرمز) → das" },
          { de: "جمع اسم‌ها با پیشوند Ge-", fa: "das Gebäude (ساختمان), das Gemüse (سبزیجات), das Getränk (نوشیدنی) → das" }
        ]
      },
      {
        type: "alert",
        title: "استثناها را فراموش نکنید!",
        text: "هر قانونی استثنا دارد! بهترین روش این است: همیشه آرتیکل را همراه اسم یاد بگیرید. مثلاً نگویید «Buch»، بگویید «das Buch». آلمانی‌ها هم وقتی اسم جدیدی یاد می‌گیرند، آرتیکل آن را حفظ می‌کنند."
      },
      {
        type: "interactive_quiz",
        title: "آزمون: آرتیکل‌های صحیح",
        questions: [
          {
            question: "آرتیکل صحیح برای کلمه «Universität» کدام است؟",
            questionDe: "Was ist der richtige Artikel für 'Universität'?",
            options: [
              { text: "der Universität", isCorrect: false },
              { text: "die Universität", isCorrect: true },
              { text: "das Universität", isCorrect: false }
            ],
            explanation: "عالی! کلماتی که به -tät ختم می‌شوند همیشه مؤنث (die) هستند."
          },
          {
            question: "آرتیکل صحیح برای «Mädchen» (دختر) چیست؟",
            questionDe: "Welcher Artikel ist richtig für 'Mädchen'?",
            options: [
              { text: "das Mädchen", isCorrect: true },
              { text: "die Mädchen", isCorrect: false },
              { text: "der Mädchen", isCorrect: false }
            ],
            explanation: "درست! کلماتی که به -chen ختم می‌شوند (تصغیر) همیشه خنثی (das) هستند، حتی اگر معنایشان مذکر یا مؤنث باشد!"
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین جای خالی: آرتیکل‌ها",
        instructions: "آرتیکل صحیح (der, die, das) را در جای خالی بنویسید.",
        sentences: [
          { de: "___ Lehrer kommt aus Deutschland.", answer: "Der", hint: "پسوند -er → مذکر" },
          { de: "___ Zeitung liegt auf dem Tisch.", answer: "Die", hint: "پسوند -ung → مؤنث" },
          { de: "___ Mädchen heißt Anna.", answer: "Das", hint: "پسوند -chen → خنثی" },
          { de: "___ Kaffee ist sehr gut.", answer: "Der", hint: "نوشیدنی‌ها → مذکر" },
          { de: "___ Rose ist rot.", answer: "Die", hint: "گل‌ها → مؤنث" },
          { de: "___ Montag ist mein Lieblingstag.", answer: "Der", hint: "روزها → مذکر" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "اسمهای مذکر (der)",
        words: [
          {
            de: "der Mann",
            fa: "مرد",
            ipa: "[man]",
            article: "der",
            plural: "die Männer",
            examples: [{ de: "Der Mann liest ein Buch.", fa: "مرد کتاب می‌خواند." }]
          },
          {
            de: "der Tisch",
            fa: "میز",
            ipa: "[tɪʃ]",
            article: "der",
            plural: "die Tische",
            examples: [{ de: "Der Tisch ist groß.", fa: "میز بزرگ است." }]
          },
          {
            de: "der Stuhl",
            fa: "صندلی",
            ipa: "[ʃtuːl]",
            article: "der",
            plural: "die Stühle",
            examples: [{ de: "Der Stuhl ist neu.", fa: "صندلی نو است." }]
          },
          {
            de: "der Lehrer",
            fa: "معلم (مرد)",
            ipa: "[ˈleːɐ̯]",
            article: "der",
            plural: "die Lehrer",
            conjugation: null,
            examples: [{ de: "Der Lehrer spricht Deutsch.", fa: "معلم آلمانی صحبت می‌کند." }]
          },
          {
            de: "der Student",
            fa: "دانشجو (مرد)",
            ipa: "[ʃtuˈdɛnt]",
            article: "der",
            plural: "die Studenten",
            examples: [{ de: "Der Student lernt viel.", fa: "دانشجو زیاد یاد می‌گیرد." }]
          },
          {
            de: "der Hund",
            fa: "سگ",
            ipa: "[hʊnt]",
            article: "der",
            plural: "die Hunde",
            examples: [{ de: "Der Hund ist klein.", fa: "سگ کوچک است." }]
          },
          {
            de: "der Computer",
            fa: "کامپیوتر",
            ipa: "[kɔmˈpjuːtɐ]",
            article: "der",
            plural: "die Computer",
            examples: [{ de: "Der Computer ist neu.", fa: "کامپیوتر نو است." }]
          }
        ]
      },
      {
        title: "اسمهای مؤنث (die)",
        words: [
          {
            de: "die Frau",
            fa: "زن / خانم",
            ipa: "[fʁaʊ̯]",
            article: "die",
            plural: "die Frauen",
            examples: [{ de: "Die Frau kommt aus Berlin.", fa: "خانم از برلین می‌آید." }]
          },
          {
            de: "die Lampe",
            fa: "چراغ / لامپ",
            ipa: "[ˈlampə]",
            article: "die",
            plural: "die Lampen",
            examples: [{ de: "Die Lampe ist an.", fa: "چراغ روشن است." }]
          },
          {
            de: "die Tür",
            fa: "در",
            ipa: "[tyːɐ̯]",
            article: "die",
            plural: "die Türen",
            examples: [{ de: "Die Tür ist zu.", fa: "در بسته است." }]
          },
          {
            de: "die Lehrerin",
            fa: "معلم (زن)",
            ipa: "[ˈleːɐ̯ʁɪn]",
            article: "die",
            plural: "die Lehrerinnen",
            examples: [{ de: "Die Lehrerin ist nett.", fa: "معلم مهربان است." }]
          },
          {
            de: "die Studentin",
            fa: "دانشجو (زن)",
            ipa: "[ʃtuˈdɛntɪn]",
            article: "die",
            plural: "die Studentinnen",
            examples: [{ de: "Die Studentin kommt aus dem Iran.", fa: "دانشجو از ایران می‌آید." }]
          },
          {
            de: "die Katze",
            fa: "گربه",
            ipa: "[ˈkatsə]",
            article: "die",
            plural: "die Katzen",
            examples: [{ de: "Die Katze schläft.", fa: "گربه خواب است." }]
          },
          {
            de: "die Zeitung",
            fa: "روزنامه",
            ipa: "[ˈtsaɪ̯tʊŋ]",
            article: "die",
            plural: "die Zeitungen",
            examples: [{ de: "Die Zeitung ist interessant.", fa: "روزنامه جالب است." }]
          },
          {
            de: "die Universität",
            fa: "دانشگاه",
            ipa: "[univɛʁziˈtɛːt]",
            article: "die",
            plural: "die Universitäten",
            examples: [{ de: "Die Universität ist groß.", fa: "دانشگاه بزرگ است." }]
          }
        ]
      },
      {
        title: "اسمهای خنثی (das)",
        words: [
          {
            de: "das Kind",
            fa: "بچه",
            ipa: "[kɪnt]",
            article: "das",
            plural: "die Kinder",
            examples: [{ de: "Das Kind spielt.", fa: "بچه بازی می‌کند." }]
          },
          {
            de: "das Buch",
            fa: "کتاب",
            ipa: "[buːx]",
            article: "das",
            plural: "die Bücher",
            examples: [{ de: "Das Buch ist gut.", fa: "کتاب خوب است." }]
          },
          {
            de: "das Haus",
            fa: "خانه",
            ipa: "[haʊ̯s]",
            article: "das",
            plural: "die Häuser",
            examples: [{ de: "Das Haus ist alt.", fa: "خانه قدیمی است." }]
          },
          {
            de: "das Mädchen",
            fa: "دختر (کوچک)",
            ipa: "[ˈmɛːtçən]",
            article: "das",
            plural: "die Mädchen",
            examples: [{ de: "Das Mädchen heißt Sara.", fa: "دختر سارا نام دارد." }]
          },
          {
            de: "das Zimmer",
            fa: "اتاق",
            ipa: "[ˈtsɪmɐ]",
            article: "das",
            plural: "die Zimmer",
            examples: [{ de: "Das Zimmer ist sauber.", fa: "اتاق تمیز است." }]
          },
          {
            de: "das Auto",
            fa: "ماشین",
            ipa: "[ˈaʊ̯toː]",
            article: "das",
            plural: "die Autos",
            examples: [{ de: "Das Auto ist schnell.", fa: "ماشین سریع است." }]
          },
          {
            de: "das Wasser",
            fa: "آب",
            ipa: "[ˈvasɐ]",
            article: "das",
            plural: "die Wasser",
            examples: [{ de: "Das Wasser ist kalt.", fa: "آب سرد است." }]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Mein Zimmer (اتاق من)\n\nIch wohne in Berlin. Mein Zimmer ist klein, aber schön. Hier ist ein Tisch und ein Stuhl. Auf dem Tisch liegt eine Lampe und ein Buch. Das Buch ist interessant. Neben dem Tisch steht ein Computer.\nDie Tür ist weiß. An der Tür hängt ein Bild. Das Bild zeigt eine Stadt. Neben meinem Zimmer ist die Küche.\nIch bin Studentin und lerne Deutsch. Das Zimmer ist mein Lieblingsplatz.",
      translation: [
        { de: "Mein Zimmer", fa: "اتاق من" },
        { de: "Ich wohne in Berlin.", fa: "من در برلین زندگی می‌کنم." },
        { de: "Mein Zimmer ist klein, aber schön.", fa: "اتاق من کوچک اما زیباست." },
        { de: "Hier ist ein Tisch und ein Stuhl.", fa: "اینجا یک میز و یک صندلی است." },
        { de: "Auf dem Tisch liegt eine Lampe und ein Buch.", fa: "روی میز یک چراغ و یک کتاب است." },
        { de: "Das Buch ist interessant.", fa: "کتاب جالب است." },
        { de: "Neben dem Tisch steht ein Computer.", fa: "کنار میز یک کامپیوتر هست." },
        { de: "Die Tür ist weiß.", fa: "در سفید است." },
        { de: "An der Tür hängt ein Bild.", fa: "به در یک عکس آویزان است." },
        { de: "Das Bild zeigt eine Stadt.", fa: "عکس یک شهر را نشان می‌دهد." },
        { de: "Ich bin Studentin und lerne Deutsch.", fa: "من دانشجو هستم و آلمانی یاد می‌گیرم." },
        { de: "Das Zimmer ist mein Lieblingsplatz.", fa: "اتاق جای مورد علاقه من است." }
      ],
      questions: [
        { question: "اتاق نویسنده چطور است؟", answer: "کوچک اما زیباست." },
        { question: "روی میز چه چیزهایی هست؟", answer: "یک چراغ و یک کتاب." },
        { question: "روی در چه چیزی آویزان است؟", answer: "یک عکس (از یک شهر)." },
        { question: "نویسنده چه کاره است؟", answer: "دانشجوست و آلمانی یاد می‌گیرد." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن توصیف یک اتاق (Zimmerbeschreibung)",
      prompt: "با استفاده از اسم‌ها و آرتیکل‌هایی که یاد گرفتید، یک اتاق (واقعی یا خیالی) را توصیف کنید.",
      steps: [
        {
          title: "معرفی اتاق",
          text: "بگو کجا زندگی می‌کنی و اتاقت چگونه است.",
          example: { de: "Ich wohne in München. Mein Zimmer ist groß.", fa: "من در مونیخ زندگی می‌کنم. اتاقم بزرگ است." }
        },
        {
          title: "اشیاء در اتاق",
          text: "اشیاء را با آرتیکل صحیح نام ببر. از «Hier ist...» یا «Auf dem Tisch ist...» استفاده کن.",
          example: { de: "Hier ist ein Tisch, ein Stuhl und ein Bett.", fa: "اینجا یک میز، یک صندلی و یک تخت است." }
        },
        {
          title: "رنگ و توصیف",
          text: "رنگ اشیاء و احساس خودت را بیان کن.",
          example: { de: "Der Tisch ist braun. Die Lampe ist gelb. Ich mag mein Zimmer.", fa: "میز قهوه‌ای است. چراغ زرد است. اتاقم را دوست دارم." }
        }
      ],
      modelAnswer: "Ich wohne in Hamburg. Mein Zimmer ist klein, aber gemütlich. Hier ist ein brauner Tisch und ein schwarzer Stuhl. Auf dem Tisch liegt ein Buch und eine Lampe. Die Lampe ist gelb. Neben dem Tisch steht mein Computer. Das Bett ist weiß. Die Tür ist braun. Ich bin Student und lerne Deutsch in meinem Zimmer. Das Zimmer ist gut."
    }
  ],

  listening: [
    {
      title: "۱. آرتیکل‌ها و اسم‌ها (A1 hören)",
      instruction: "تمرین شنیداری:\n۱. جملات را بشنوید.\n۲. آرتیکل هر اسم را با صدای بلند تکرار کنید.\n۳. دقت کنید: der Tisch، die Lampe، das Buch.",
      sentences: [
        { de: "Der Mann kommt.", fa: "مرد می‌آید.", tts: "Der Mann kommt." },
        { de: "Die Frau liest.", fa: "زن می‌خواند.", tts: "Die Frau liest." },
        { de: "Das Kind spielt.", fa: "بچه بازی می‌کند.", tts: "Das Kind spielt." },
        { de: "Der Hund ist groß.", fa: "سگ بزرگ است.", tts: "Der Hund ist groß." },
        { de: "Die Katze schläft.", fa: "گربه خواب است.", tts: "Die Katze schläft." },
        { de: "Das Buch ist interessant.", fa: "کتاب جالب است.", tts: "Das Buch ist interessant." }
      ]
    }
  ],

  speaking: [
    {
      title: "تمرین آرتیکل‌ها با صدا",
      pattern: "- Was ist das?\n- Das ist ein Tisch.\n- Ist der Tisch groß?\n- Ja, der Tisch ist groß.\n- Und was ist das?\n- Das ist eine Lampe. Die Lampe ist gelb.",
      exercise: "جلوی آینه بایستید و اشیاء اتاق خود را نشان دهید.\nگام ۱: هر شیء را با آرتیکل صحیح نام ببرید.\nگام ۲: یک توصیف اضافه کنید (رنگ، اندازه).\nگام ۳: از pattern بالا استفاده کنید و مکالمه کوتاه بسازید."
    }
  ],

  cultureTip: "در آلمان، دانستن آرتیکل صحیح اسم‌ها نشان‌دهنده سطح زبانی شماست. آلمانی‌ها وقتی می‌شنوند کسی آرتیکل را اشتباه می‌گوید، فوراً متوجه می‌شوند که زبان مادری او آلمانی نیست. اما نگران نباشید! حتی آلمانی‌ها هم گاهی در آرتیکل بعضی کلمات شک دارند. نکته جالب: در سوئیس آلمانی، گاهی به‌جای das از de استفاده می‌کنند که بسیار ساده‌تر است!",

  examData: {
    questions: [
      {
        question: "آرتیکل صحیح برای کلمه «Tisch» (میز) چیست؟",
        options: ["der", "die", "das"],
        answer: 0
      },
      {
        question: "کدام کلمه خنثی (das) است؟",
        options: ["der Hund", "die Frau", "das Kind", "der Lehrer"],
        answer: 2
      },
      {
        question: "پسوند -ung نشان‌دهنده چه جنسیتی است؟",
        options: ["der (مذکر)", "die (مؤنث)", "das (خنثی)"],
        answer: 1
      },
      {
        question: "آرتیکل صحیح «Mädchen» (دختر) چیست؟",
        options: ["die Mädchen", "das Mädchen", "der Mädchen"],
        answer: 1
      },
      {
        question: "کدام جمله صحیح است؟",
        options: ["Der Lampe ist gelb.", "Die Lampe ist gelb.", "Das Lampe ist gelb."],
        answer: 1
      },
      {
        question: "شکل جمع die چه کاربردی دارد؟",
        options: ["فقط مفرد مؤنث", "فقط جمع", "هر سه جنسیت مفرد", "جمع همه اسم‌ها"],
        answer: 3
      },
      {
        question: "کدام پسوند نشان‌دهنده اسم مذکر است؟",
        options: ["-chen", "-er", "-ung", "-heit"],
        answer: 1
      },
      {
        question: "آرتیکل صحیح «Universität» چیست؟",
        options: ["der Universität", "die Universität", "das Universität"],
        answer: 1
      },
      {
        question: "کدام گزینه صحیح است؟",
        options: ["Das Buch ist gut.", "Der Buch ist gut.", "Die Buch ist gut."],
        answer: 0
      },
      {
        question: "آرتیکل روزهای هفته چیست؟",
        options: ["die", "das", "der"],
        answer: 2
      }
    ]
  }
};
