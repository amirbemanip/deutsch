export const day32Data = {
  title: "روز ۳۲: مسکن - اجاره، توصیف آپارتمان و همسایه‌ها",
  objective: "یادگیری واژگان مربوط به خانه و آپارتمان، اجاره مسکن، توصیف اتاق‌ها و صحبت درباره همسایه‌ها",

  grammarData: {
    subtitle: "توصیف خانه و موقعیت مکانی با حروف اضافه",
    content: [
      {
        type: "text",
        title: "چگونه خانه و آپارتمان را توصیف کنیم؟",
        text: "برای توصیف خانه از حروف اضافه مکانی مث' in (در), neben (کنار), gegenüber (روبرو), zwischen (بین), über (روی) و unter (زیر) استفاده می‌کنیم. همچنین فع' es gibt (وجود دارد) بسیار کاربردی است."
      },
      {
        type: "table",
        title: "اتاق‌ها و بخش‌های خانه (Räume)",
        rows: [
          { de: "das Wohnzimmer", fa: "اتاق نشیمن" },
          { de: "das Schlafzimmer", fa: "اتاق خواب" },
          { de: "die Küche", fa: "آشپزخانه" },
          { de: "das Badezimmer", fa: "حمام / دستشویی" },
          { de: "das Esszimmer", fa: "اتاق غذاخوری" },
          { de: "das Kinderzimmer", fa: "اتاق بچه‌ها" },
          { de: "der Flur / der Gang", fa: "راهرو" },
          { de: "der Balkon", fa: "با'کن" },
          { de: "der Keller", fa: "زیرزمین" },
          { de: "der Dachboden", fa: "زیرشیروانی" }
        ]
      },
      {
        type: "examples",
        title: "توصیف آپارتمان",
        items: [
          { de: "Meine Wohnung hat drei Zimmer und eine Küche.", fa: "آپارتمان من سه اتاق و یک آشپزخانه دارد." },
          { de: "Das Wohnzimmer ist neben der Küche.", fa: "اتاق نشیمن کنار آشپزخانه است." },
          { de: "Im Badezimmer gibt es eine Dusche und eine Badewanne.", fa: "در حمام یک دوش و یک وان وجود دارد." },
          { de: "Die Wohnung liegt im zweiten Stock.", fa: "آپارتمان در طبقه دوم است." },
          { de: "Wie groß ist die Wohnung? Sie ist 80 Quadratmeter groß.", fa: "آپارتمان چقدر بزرگ است؟ ۸۰ متر مربع است." },
          { de: "Die Miete beträgt 700 Euro warm.", fa: "اجاره با هزینه‌ها ۷۰۰ یورو است." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم!",
        text: "در آ'مان، اجاره به دو صورت kalt (فقط اجاره بدون هزینه‌ها) و warm (اجاره با هزینه‌های آب، برق و گرمایش) محاسبه می‌شود. معمو'اً warmmiete بیشتر از kaltmiete است."
      },
      {
        type: "interactive_quiz",
        title: "تست مسکن",
        questions: [
          {
            question: "آپارتمان شما ۷۵ متر است. چگونه بگویید؟",
            questionDe: "Wie groß ist Ihre Wohnung?",
            options: [
              { text: "Meine Wohnung ist 75 Quadratmeter groß.", isCorrect: true },
              { text: "Meine Wohnung hat 75 Meter.", isCorrect: false },
              { text: "Meine Wohnung ist 75 Meter.", isCorrect: false },
              { text: "75 Quadratmeter Wohnung.", isCorrect: false }
            ],
            explanation: "عبارت صحیح: ... Quadratmeter groß (به اندازه ... متر مربع)."
          },
          {
            question: "اجاره ماهانه چقدر است؟",
            questionDe: "Wie sagt man auf Deutsch?",
            options: [
              { text: "Wie kostet die Miete?", isCorrect: false },
              { text: "Wie viel kostet die Miete?", isCorrect: true },
              { text: "Wie viel ist die Miete?", isCorrect: false },
              { text: "Was ist die Miete?", isCorrect: false }
            ],
            explanation: "سؤا' صحیح: Wie viel kostet die Miete? (اجاره چقدر است؟)"
          },
          {
            question: "آپارتمان در طبقه سوم:",
            questionDe: "Im welchen Stock ist die Wohnung?",
            options: [
              { text: "in drei Stock", isCorrect: false },
              { text: "im dritten Stock", isCorrect: true },
              { text: "auf drei Stock", isCorrect: false },
              { text: "im dritte Stock", isCorrect: false }
            ],
            explanation: "صحیح: im dritten Stock (در طبقه سوم). شمارش طبقات با Ordinalzahl + im + Stock."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات مسکن",
        instruction: "جای خا'ی را با ک'مه مناسب پر کنید.",
        blanks: [
          { sentence: "Meine Wohnung hat drei ___. (اتاق)", answer: "Zimmer", hint: "اتاق = das Zimmer" },
          { sentence: "Die Wohnung liegt im zweiten ___. (طبقه)", answer: "Stock", hint: "طبقه = der Stock / Stockwerk" },
          { sentence: "Die ___ beträgt 650 Euro. (اجاره)", answer: "Miete", hint: "اجاره = die Miete" },
          { sentence: "Im ___ gibt es eine Dusche. (حمام)", answer: "Badezimmer", hint: "حمام = das Badezimmer" },
          { sentence: "Die Wohnung ist 70 ___ groß. (متر مربع)", answer: "Quadratmeter", hint: "متر مربع = Quadratmeter" },
          { sentence: "Der ___ ist sehr sonnig. (با'کن)", answer: "Balkon", hint: "با'کن = der Balkon" },
          { sentence: "___ ist neben der Küche. (اتاق نشیمن)", answer: "Das Wohnzimmer", hint: "اتاق نشیمن = das Wohnzimmer" },
          { sentence: "Ich wohne im ___ Stock. (او')", answer: "ersten", hint: "طبقه او' = im ersten Stock" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "خانه و آپارتمان (Haus und Wohnung)",
        words: [
          { de: "die Wohnung", fa: "آپارتمان", article: "die", plural: "die Wohnungen", examples: [{ de: "Ich suche eine neue Wohnung.", fa: "من دنبا' آپارتمان جدید هستم." }] },
          { de: "das Haus", fa: "خانه", article: "das", plural: "die Häuser", examples: [{ de: "Das Haus hat einen Garten.", fa: "خانه حیاط دارد." }] },
          { de: "die Miete", fa: "اجاره", article: "die", plural: "die Mieten", examples: [{ de: "Die Miete ist sehr hoch.", fa: "اجاره خی'ی با'است." }] },
          { de: "der Vermieter", fa: "صاحبخانه (مرد)", article: "der", plural: "die Vermieter", examples: [{ de: "Der Vermieter ist freundlich.", fa: "صاحبخانه مهربان است." }] },
          { de: "der Nachbar", fa: "همسایه", article: "der", plural: "die Nachbarn", examples: [{ de: "Meine Nachbarn sind sehr nett.", fa: "همسایه‌های من خی'ی مهربان هستند." }] },
          { de: "der Mieter", fa: "مستأجر", article: "der", plural: "die Mieter", examples: [{ de: "Ich bin der Mieter dieser Wohnung.", fa: "من مستأجر این آپارتمان هستم." }] }
        ]
      },
      {
        title: "مب'مان و وسای' (Möbel)",
        words: [
          { de: "das Sofa", fa: "مب'", article: "das", plural: "die Sofas", examples: [{ de: "Das Sofa steht im Wohnzimmer.", fa: "مب' در اتاق نشیمن است." }] },
          { de: "der Tisch", fa: "میز", article: "der", plural: "die Tische", examples: [{ de: "Der Tisch ist aus Holz.", fa: "میز از چوب است." }] },
          { de: "das Bett", fa: "تخت خواب", article: "das", plural: "die Betten", examples: [{ de: "Das Bett ist sehr bequem.", fa: "تخت خواب خی'ی راحت است." }] },
          { de: "der Schrank", fa: "کمد", article: "der", plural: "die Schränke", examples: [{ de: "Die Kleidung ist im Schrank.", fa: "'باس‌ها در کمد هستند." }] },
          { de: "der Kühlschrank", fa: "یخچا'", article: "der", plural: "die Kühlschränke", examples: [{ de: "Im Kühlschrank ist Milch.", fa: "در یخچا' شیر هست." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Eine Wohnungssuche\n\nHallo, ich bin Ali. Ich suche eine Wohnung in Berlin. Gestern habe ich eine Wohnung besichtigt. Sie liegt im dritten Stock und hat drei Zimmer, eine Küche und ein Badezimmer. Die Wohnung ist 75 Quadratmeter groß und hat einen Balkon.\nDie Warmmiete beträgt 800 Euro. Das Wohnzimmer ist groß und hell. Die Küche hat einen Kühlschrank und einen Herd. Das Schlafzimmer ist neben dem Badezimmer. Der Vermieter ist ein alter Mann, aber sehr freundlich.\nDie Nachbarn sind auch nett. Im Erdgeschoss wohnt eine Familie mit zwei Kindern. Ich glaube, die Wohnung gefällt mir. Ich möchte sie mieten.",
      questions: [
        { question: "ع'ی کجا دنبا' آپارتمان است؟", answer: "در بر'ین." },
        { question: "آپارتمان چند اتاق و چند متر است؟", answer: "سه اتاق، ۷۵ متر مربع." },
        { question: "اجاره گرم (Warmmiete) چقدر است؟", answer: "۸۰۰ یورو." },
        { question: "همسایه طبقه همکف چه کسانی هستند؟", answer: "یک خانواده با دو بچه." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره آپارتمان",
      prompt: "یک پاراگراف (۶ خط) درباره آپارتمان خود بنویسید. چند اتاق دارد، چقدر بزرگ است، اجاره چقدر است.",
      steps: [
        { title: "معرفی", text: "بگویید کجا زندگی می‌کنید.", example: { de: "Ich wohne in einer kleinen Wohnung.", fa: "من در یک آپارتمان کوچک زندگی می‌کنم." } },
        { title: "توصیف", text: "اتاق‌ها و امکانات.", example: { de: "Die Wohnung hat zwei Zimmer und eine Küche.", fa: "آپارتمان دو اتاق و یک آشپزخانه دارد." } },
        { title: "هزینه و نظر", text: "اجاره و نظر ک'ی.", example: { de: "Die Miete ist günstig und die Nachbarn sind nett.", fa: "اجاره ارزان است و همسایه‌ها مهربان هستند." } }
      ],
      modelAnswer: "Ich wohne in einer kleinen Wohnung im zweiten Stock. Die Wohnung hat zwei Zimmer, eine Küche und ein Badezimmer. Sie ist 55 Quadratmeter groß. Das Wohnzimmer ist hell und hat ein großes Fenster. Die Küche ist klein, aber praktisch. Ich habe auch einen kleinen Balkon. Die Warmmiete beträgt 500 Euro. Meine Nachbarn sind sehr freundlich. Ich bin zufrieden mit meiner Wohnung."
    }
  ],

  listening: [
    {
      title: "گوش دادن: بازدید آپارتمان",
      source: "Deutsche Welle",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "به مکا'مات مربوط به اجاره و بازدید آپارتمان گوش دهید. اندازه، تعداد اتاق‌ها و اجاره را یادداشت کنید."
    }
  ],

  speaking: [
    {
      title: "تمرین گفتاری: توصیف آپارتمان",
      pattern: "Meine Wohnung hat ... Sie liegt im ... Stock. Die Miete beträgt ...",
      exercise: "آپارتمان خود را به آ'مانی توصیف کنید: چند اتاق، چند متر، چه امکاناتی دارد و اجاره چقدر است."
    }
  ],

  cultureTip: "پیدا کردن آپارتمان در شهرهای بزرگ آ'مان (به خصوص مونیخ، بر'ین و هامبورگ) بسیار سخت و رقابتی است. معمو'اً برای اجاره باید مدارک زیادی ارائه دهید: قرارداد کار، فیش حقوقی و Schufa-Auskunft (گزارش اعتباری). همچنین معمو'اً باید سه ماه اجاره به عنوان ودیعه (Kaution) پرداخت کنید.",

  examData: {
    questions: [
      { question: "آپارتمان چند متر است؟", options: ["Wie viel kostet die Wohnung?", "Wie groß ist die Wohnung?", "Wo ist die Wohnung?", "Wann ist die Wohnung frei?"], answer: 1 },
      { question: "اتاق نشیمن:", options: ["das Schlafzimmer", "das Badezimmer", "das Wohnzimmer", "die Küche"], answer: 2 },
      { question: "آپارتمان در طبقه دوم:", options: ["im zweiten Stock", "in zwei Stock", "auf zwei Stock", "im zweite Stock"], answer: 0 },
      { question: "اجاره گرم:", options: ["Kaltmiete", "Warmmiete", "Heizmiete", "Wohnmiete"], answer: 1 },
      { question: "صاحبخانه:", options: ["der Mieter", "der Vermieter", "der Nachbar", "der Gast"], answer: 1 },
      { question: "با'کن:", options: ["der Keller", "der Balkon", "der Dachboden", "der Garten"], answer: 1 },
      { question: "مستأجر:", options: ["der Vermieter", "der Mieter", "der Nachbar", "der Besitzer"], answer: 1 },
      { question: "آشپزخانه:", options: ["das Badezimmer", "die Küche", "das Schlafzimmer", "der Flur"], answer: 1 },
      { question: "متر مربع:", options: ["Quadratmeter", "Kilometer", "Zentimeter", "Millimeter"], answer: 0 },
      { question: "همسایه:", options: ["der Freund", "der Gast", "der Nachbar", "der Kollege"], answer: 2 }
    ]
  }
};
