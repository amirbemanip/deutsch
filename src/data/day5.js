export const day5Data = {
  title: "روز ۵: اعداد ۱ تا ۱۰۰ + بیان سن + شماره تلفن",
  objective: "در پایان این روز، شما قادر خواهید بود اعداد ۱ تا ۱۰۰ را به آلمانی بگویید، سن خود و دیگران را بیان کنید و شماره تلفن بدهید.",
  level: "A1",

  grammarData: {
    subtitle: "درس‌های گرامری با تمرین تعاملی",
    content: [
      {
        type: "text",
        title: "اعداد آلمانی چطور کار می‌کنند؟",
        text: "نکته جالب درباره اعداد آلمانی: آلمانی‌ها اعداد را برعکس انگلیسی می‌گویند! یعنی اول رقم یکان، بعد رقم دهگان. مثلاً ۲۵ را «پنج‌و‌بیست» (fünfundzwanzig) می‌گویند.\nدر زبان فارسی هم ما گاهی این‌طور می‌گوییم (مثلاً «بیست‌وپنج»)، پس زیاد سخت نیست!"
      },
      {
        type: "table",
        title: "اعداد ۰ تا ۱۲ (باید حفظ شوند)",
        rows: [
          { de: "0 - null", fa: "صفر" },
          { de: "1 - eins", fa: "یک" },
          { de: "2 - zwei", fa: "دو" },
          { de: "3 - drei", fa: "سه" },
          { de: "4 - vier", fa: "چهار" },
          { de: "5 - fünf", fa: "پنج" },
          { de: "6 - sechs", fa: "شش" },
          { de: "7 - sieben", fa: "هفت" },
          { de: "8 - acht", fa: "هشت" },
          { de: "9 - neun", fa: "نه" },
          { de: "10 - zehn", fa: "ده" },
          { de: "11 - elf", fa: "یازده" },
          { de: "12 - zwölf", fa: "دوازده" }
        ]
      },
      {
        type: "table",
        title: "اعداد ۱۳ تا ۱۹ (سیزده + عدد)",
        rows: [
          { de: "13 - dreizehn", fa: "سیزده (dreizehn = drei + zehn)" },
          { de: "14 - vierzehn", fa: "چهارده (vier + zehn)" },
          { de: "15 - fünfzehn", fa: "پانزده" },
          { de: "16 - sechzehn", fa: "شانزده (نه sechs، بلکه sech!)" },
          { de: "17 - siebzehn", fa: "هفده (نه sieben، بلکه sieb!)" },
          { de: "18 - achtzehn", fa: "هجده" },
          { de: "19 - neunzehn", fa: "نوزده" }
        ]
      },
      {
        type: "table",
        title: "دهگان‌ها (۲۰، ۳۰، ۴۰...)",
        rows: [
          { de: "20 - zwanzig", fa: "بیست" },
          { de: "30 - dreißig", fa: "سی" },
          { de: "40 - vierzig", fa: "چهل" },
          { de: "50 - fünfzig", fa: "پنجاه" },
          { de: "60 - sechzig", fa: "شصت" },
          { de: "70 - siebzig", fa: "هفتاد" },
          { de: "80 - achtzig", fa: "هشتاد" },
          { de: "90 - neunzig", fa: "نود" },
          { de: "100 - (ein)hundert", fa: "صد" }
        ]
      },
      {
        type: "table",
        title: "اعداد ترکیبی (۲۱ تا ۹۹) - برعکس!",
        rows: [
          { de: "21 - einundzwanzig", fa: "بیست‌ویک (یک‌و‌بیست!)" },
          { de: "25 - fünfundzwanzig", fa: "بیست‌وپنج (پنج‌و‌بیست!)" },
          { de: "34 - vierunddreißig", fa: "سی‌وچهار (چهار‌و‌سی!)" },
          { de: "47 - siebenundvierzig", fa: "چهل‌وهفت (هفت‌و‌چهل!)" },
          { de: "58 - achtundfünfzig", fa: "پنجاه‌وهشت (هشت‌و‌پنجاه!)" },
          { de: "63 - dreiundsechzig", fa: "شصت‌وسه (سه‌و‌شصت!)" },
          { de: "76 - sechsundsiebzig", fa: "هفتاد‌وشش (شش‌و‌هفتاد!)" },
          { de: "89 - neunundachtzig", fa: "هشتاد‌ونه (نه‌و‌هشتاد!)" },
          { de: "99 - neunundneunzig", fa: "نود‌ونه (نه‌و‌نود!)" }
        ]
      },
      {
        type: "alert",
        title: "قانون طلایی اعداد آلمانی",
        text: "فرمول: یکان + und + دهگان. مثلاً ۲۵ = fünf (۵) + und (و) + zwanzig (۲۰) = fünfundzwanzig. و تأکید روی بخش دهگان است: fünfundZWANzig."
      },
      {
        type: "examples",
        title: "بیان سن",
        items: [
          { de: "Wie alt bist du?", fa: "چند سالته؟ (غیررسمی)" },
          { de: "Wie alt sind Sie?", fa: "چند ساله‌اید؟ (رسمی)" },
          { de: "Ich bin 25 Jahre alt.", fa: "من ۲۵ ساله‌ام." },
          { de: "Er ist 30 Jahre alt.", fa: "او ۳۰ ساله است." },
          { de: "Mein Sohn ist 5 Jahre alt.", fa: "پسرم ۵ ساله است." },
          { de: "Wie alt ist deine Mutter?", fa: "مادرت چند ساله است؟" }
        ]
      },
      {
        type: "examples",
        title: "شماره تلفن",
        items: [
          { de: "Wie ist deine Telefonnummer?", fa: "شماره تلفنت چنده؟" },
          { de: "Meine Telefonnummer ist 0176 123 456 78.", fa: "شماره تلفنم ۰۱۷۶ ۱۲۳ ۴۵۶ ۷۸ است." },
          { de: "Null - eins - sieben - sechs.", fa: "صفر - یک - هفت - شش." },
          { de: "Können Sie das wiederholen?", fa: "می‌شود تکرار کنید؟" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: اعداد و سن",
        questions: [
          {
            question: "اعداد آلمانی چطور گفته می‌شوند؟",
            questionDe: "Wie sagt man 25 auf Deutsch?",
            options: [
              { text: "zwanzigfünf", isCorrect: false },
              { text: "fünfundzwanzig", isCorrect: true },
              { text: "fünfzwanzig", isCorrect: false }
            ],
            explanation: "درست! در آلمانی اول یکان (fünf=۵)، بعد und (و)، بعد دهگان (zwanzig=۲۰) گفته می‌شود."
          },
          {
            question: "چطور می‌پرسید «چند سالته؟»",
            questionDe: "Wie fragt man nach dem Alter?",
            options: [
              { text: "Wie viel Jahre bist du?", isCorrect: false },
              { text: "Wie alt bist du?", isCorrect: true },
              { text: "Wie Jahre hast du?", isCorrect: false }
            ],
            explanation: "عالی! عبارت صحیح «Wie alt bist du?» (چند ساله‌ای؟) است."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین جای خالی: اعداد",
        instructions: "عدد آلمانی صحیح را بنویسید.",
        sentences: [
          { de: "Ich bin ___ Jahre alt. (۲۲)", answer: "zweiundzwanzig", hint: "۲ + und + ۲۰" },
          { de: "Meine Telefonnummer ist 0___ . (۸)", answer: "acht", hint: "عدد ۸" },
          { de: "___ und dreißig = ۳۵", answer: "Fünf", hint: "۵ + und + ۳۰" },
          { de: "Meine Mutter ist ___ Jahre alt. (۵۰)", answer: "fünfzig", hint: "۵۰" },
          { de: "Das Buch kostet ___ Euro. (۱۲)", answer: "zwölf", hint: "عدد ۱۲" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "اعداد اصلی",
        words: [
          {
            de: "eins",
            fa: "یک",
            ipa: "[aɪ̯ns]",
            examples: [{ de: "Ich habe eins.", fa: "یکی دارم." }]
          },
          {
            de: "zwei",
            fa: "دو",
            ipa: "[tsvaɪ̯]",
            examples: [{ de: "Ich habe zwei Brüder.", fa: "دو برادر دارم." }]
          },
          {
            de: "drei",
            fa: "سه",
            ipa: "[dʁaɪ̯]",
            examples: [{ de: "Drei Personen kommen.", fa: "سه نفر می‌آیند." }]
          },
          {
            de: "fünf",
            fa: "پنج",
            ipa: "[fʏnf]",
            examples: [{ de: "Ich bin fünf Jahre alt.", fa: "پنج ساله‌ام." }]
          },
          {
            de: "zehn",
            fa: "ده",
            ipa: "[tseːn]",
            examples: [{ de: "Das kostet zehn Euro.", fa: "ده یورو قیمت دارد." }]
          },
          {
            de: "zwanzig",
            fa: "بیست",
            ipa: "[ˈtsvantsɪç]",
            examples: [{ de: "Sie ist zwanzig Jahre alt.", fa: "او بیست ساله است." }]
          },
          {
            de: "dreißig",
            fa: "سی",
            ipa: "[ˈdʁaɪ̯sɪç]",
            examples: [{ de: "Er ist dreißig.", fa: "او سی ساله است." }]
          },
          {
            de: "hundert",
            fa: "صد",
            ipa: "[ˈhʊndɐt]",
            examples: [{ de: "Das kostet hundert Euro.", fa: "صد یورو قیمت دارد." }]
          }
        ]
      },
      {
        title: "کلمات مرتبط با سن و تلفن",
        words: [
          {
            de: "das Alter",
            fa: "سن",
            ipa: "[ˈaltɐ]",
            article: "das",
            examples: [{ de: "Wie ist dein Alter?", fa: "سنت چقدر است؟" }]
          },
          {
            de: "das Jahr",
            fa: "سال",
            ipa: "[jaːɐ̯]",
            article: "das",
            plural: "die Jahre",
            examples: [{ de: "Ich bin 25 Jahre alt.", fa: "۲۵ ساله‌ام." }]
          },
          {
            de: "die Telefonnummer",
            fa: "شماره تلفن",
            ipa: "[te.leˈfoːnˌnʊmɐ]",
            article: "die",
            plural: "die Telefonnummern",
            examples: [{ de: "Wie ist deine Telefonnummer?", fa: "شماره تلفنت چنده؟" }]
          },
          {
            de: "die Nummer",
            fa: "شماره",
            ipa: "[ˈnʊmɐ]",
            article: "die",
            plural: "die Nummern",
            examples: [{ de: "Welche Nummer ist das?", fa: "این شماره چنده؟" }]
          },
          {
            de: "das Handy",
            fa: "گوشی موبایل",
            ipa: "[ˈhɛndi]",
            article: "das",
            plural: "die Handys",
            examples: [{ de: "Ich habe ein neues Handy.", fa: "گوشی نو دارم." }]
          },
          {
            de: "der Euro",
            fa: "یورو",
            ipa: "[ˈɔʏʁoː]",
            article: "der",
            plural: "die Euro",
            examples: [{ de: "Das kostet fünf Euro.", fa: "پنج یورو قیمت دارد." }]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Im Kaufhaus (در فروشگاه)\n\nVerkäufer: Guten Tag! Kann ich Ihnen helfen?\nKunde: Ja, bitte. Wie viel kostet das Buch?\nVerkäufer: Das Buch kostet zwölf Euro.\nKunde: Und die Tasche?\nVerkäufer: Die Tasche kostet fünfundzwanzig Euro.\nKunde: Gut. Ich nehme das Buch und die Tasche. Zusammen siebenunddreißig Euro?\nVerkäufer: Nein, zusammen siebenunddreißig Euro. Stimmt so.\nKunde: Danke! Können Sie mir Ihre Telefonnummer geben?\nVerkäufer: Ja, natürlich. Die Nummer ist 089 123 456 78.\nKunde: Danke schön!",
      translation: [
        { de: "Im Kaufhaus", fa: "در فروشگاه" },
        { de: "Verkäufer: Guten Tag! Kann ich Ihnen helfen?", fa: "فروشنده: روز بخیر! می‌توانم کمکتان کنم؟" },
        { de: "Kunde: Ja, bitte. Wie viel kostet das Buch?", fa: "مشتری: بله لطفاً. کتاب چند قیمت دارد؟" },
        { de: "Verkäufer: Das Buch kostet zwölf Euro.", fa: "فروشنده: کتاب دوازده یورو قیمت دارد." },
        { de: "Kunde: Und die Tasche?", fa: "مشتری: و کیف؟" },
        { de: "Verkäufer: Die Tasche kostet fünfundzwanzig Euro.", fa: "فروشنده: کیف بیست‌وپنج یورو قیمت دارد." },
        { de: "Gut. Ich nehme das Buch und die Tasche.", fa: "خوب. کتاب و کیف را می‌گیرم." },
        { de: "Zusammen siebenunddreißig Euro?", fa: "روی‌هم سی‌وهفت یورو؟" },
        { de: "Verkäufer: Nein, zusammen siebenunddreißig Euro. Stimmt so.", fa: "فروشنده: نه، روی‌هم سی‌وهفت یورو. درست است." },
        { de: "Können Sie mir Ihre Telefonnummer geben?", fa: "می‌شود شماره تلفنتان را بدهید؟" },
        { de: "Die Nummer ist 089 123 456 78.", fa: "شماره ۰۸۹ ۱۲۳ ۴۵۶ ۷۸ است." }
      ],
      questions: [
        { question: "کتاب چند یورو قیمت دارد؟", answer: "دوازده یورو." },
        { question: "کیف چند یورو قیمت دارد؟", answer: "بیست‌وپنج یورو." },
        { question: "مشتری چه چیزهایی می‌خرد؟", answer: "کتاب و کیف." },
        { question: "شماره تلفن فروشنده چند است؟", answer: "۰۸۹ ۱۲۳ ۴۵۶ ۷۸." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن اطلاعات شخصی (Persönliche Daten)",
      prompt: "یک فرم اطلاعات شخصی را پر کنید: نام، سن، شماره تلفن.",
      steps: [
        {
          title: "نام و سن",
          text: "نام و سن خود را بنویسید.",
          example: { de: "Ich heiße Ali und ich bin 25 Jahre alt.", fa: "نام من علی است و ۲۵ ساله‌ام." }
        },
        {
          title: "شماره تلفن",
          text: "شماره تلفن خود را با اعداد آلمانی بنویسید.",
          example: { de: "Meine Telefonnummer ist 0176 987 654 32.", fa: "شماره تلفنم ۰۱۷۶ ۹۸۷ ۶۵۴ ۳۲ است." }
        },
        {
          title: "اطلاعات خانواده",
          text: "سن اعضای خانواده را هم بنویسید.",
          example: { de: "Mein Vater ist 55 Jahre alt. Meine Mutter ist 50 Jahre alt.", fa: "پدرم ۵۵ ساله و مادرم ۵۰ ساله است." }
        }
      ],
      modelAnswer: "Ich heiße Reza und bin 28 Jahre alt. Meine Telefonnummer ist 0151 234 567 89. Mein Vater ist 58 Jahre alt und meine Mutter ist 53 Jahre alt. Mein Bruder ist 22 Jahre alt. Meine Schwester ist 18 Jahre alt."
    }
  ],

  listening: [
    {
      title: "۱. اعداد و شماره تلفن (A1 hören)",
      instruction: "تمرین شنیداری:\n۱. به اعداد گوش دهید و آن‌ها را یادداشت کنید.\n۲. شماره تلفن‌ها را تکرار کنید.\n۳. دقت کنید به ترتیب یکان-دهگان.",
      sentences: [
        { de: "Ich bin fünfundzwanzig Jahre alt.", fa: "من بیست‌وپنج ساله‌ام.", tts: "Ich bin fünfundzwanzig Jahre alt." },
        { de: "Die Telefonnummer ist 0176 234 567.", fa: "شماره تلفن ۰۱۷۶ ۲۳۴ ۵۶۷ است.", tts: "Die Telefonnummer ist 0176 234 567." },
        { de: "Das Buch kostet achtzehn Euro.", fa: "کتاب هجده یورو قیمت دارد.", tts: "Das Buch kostet achtzehn Euro." },
        { de: "Meine Mutter ist dreiundfünfzig.", fa: "مادرم پنجاه‌وسه ساله است.", tts: "Meine Mutter ist dreiundfünfzig." },
        { de: "Die Nummer ist 089 765 4321.", fa: "شماره ۰۸۹ ۷۶۵ ۴۳۲۱ است.", tts: "Die Nummer ist 089 765 4321." }
      ]
    }
  ],

  speaking: [
    {
      title: "تمرین شماره تلفن و سن",
      pattern: "- Wie alt bist du?\n- Ich bin sechsundzwanzig Jahre alt. Und du?\n- Ich bin achtundzwanzig.\n- Was ist deine Telefonnummer?\n- 0151 234 567 89.\n- Kannst du das wiederholen? Langsam bitte.\n- Ja. Null - eins - fünf - eins...",
      exercise: "تمرین:\nگام ۱: سن خود و یک نفر از خانواده را بگویید.\nگام ۲: شماره تلفن خود را با صدای بلند و آرام بخوانید.\nگام ۳: از یک نفر بخواهید شماره‌اش را بگوید و شما یادداشت کنید."
    }
  ],

  cultureTip: "در آلمان، پرسیدن سن در موقعیت‌های رسمی معمول است و بی‌ادبی تلقی نمی‌شود. برای مثال، هنگام ثبت‌نام در دانشگاه، افتتاح حساب بانکی یا مراجعه به پزشک، سن شما را می‌پرسند. همچنین شماره تلفن در آلمان به‌صورت زیر تقسیم‌بندی می‌شود: شماره شهر (Vorwahl) + شماره شخصی. شماره موبایل با ۰۱۵۱، ۰۱۶۰، ۰۱۷۰ شروع می‌شود.",

  examData: {
    questions: [
      {
        question: "عدد ۲۵ به آلمانی چطور گفته می‌شود؟",
        options: ["zwanzigfünf", "fünfundzwanzig", "fünfzwanzig"],
        answer: 1
      },
      {
        question: "«Wie alt bist du?» یعنی چه؟",
        options: ["کجایی؟", "چند سالته؟", "چه شغلی داری؟"],
        answer: 1
      },
      {
        question: "عدد ۳۴ به آلمانی چیست؟",
        options: ["dreißigvier", "vierunddreißig", "dreißigundvier"],
        answer: 1
      },
      {
        question: "عدد ۱۷ به آلمانی چیست؟",
        options: ["siebzig", "siebenzehn", "siebzehn"],
        answer: 2
      },
      {
        question: "چطور می‌پرسید «شماره تلفنت چنده؟»",
        options: ["Wie ist deine Nummer?", "Wie ist deine Telefonnummer?", "Wie viel ist deine Nummer?"],
        answer: 1
      },
      {
        question: "عدد ۶۰ به آلمانی چیست؟",
        options: ["sechzig", "sechszig", "sechzehn"],
        answer: 0
      },
      {
        question: "در آلمانی اعداد ترکیبی چطور گفته می‌شوند؟",
        options: ["دهگان + یکان", "یکان + دهگان", "هر دو شکل"],
        answer: 1
      },
      {
        question: "«Das kostet zwölf Euro» یعنی چه؟",
        options: ["آن دوازده یورو دارد", "آن دوازده یورو قیمت دارد", "آن دوازده یورو می‌شود"],
        answer: 1
      },
      {
        question: "عدد ۹۹ به آلمانی چیست؟",
        options: ["neunzigneun", "neunundneunzig", "neunzigundneun"],
        answer: 1
      },
      {
        question: "«Können Sie das wiederholen?» یعنی چه؟",
        options: ["می‌شود بگویید؟", "می‌شود تکرار کنید؟", "می‌شود کمک کنید؟"],
        answer: 1
      }
    ]
  }
};
