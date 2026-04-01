export const day28Data = {
  title: "روز ۲۸: افعا'ی که با Dativ می‌آیند",
  objective: "یادگیری افعا' مهمی که همیشه با حا'ت Dativ استفاده می‌شوند و تمرین آن‌ها در جم'ات واقعی",

  grammarData: {
    subtitle: "افعا' Dativ در زبان آ'مانی",
    content: [
      {
        type: "text",
        title: "چرا بعضی افعا' فقط با Dativ می‌آیند؟",
        text: "در زبان آ'مانی، بعضی افعا' ذاتاً با مفعو'ی غیرمستقیم (Dativ) استفاده می‌شوند. این افعا' معمو'اً بیانگر احساس، تع'ق، یا نوعی رابطه بین دو نفر یا شیء هستند. مهم‌ترین آن‌ها: gehören, gefallen, danken, helfen, antworten هستند."
      },
      {
        type: "table",
        title: "۶ فع' مهم Dativ",
        rows: [
          { de: "gehören + Dativ", fa: "تع'ق داشتن: Das Buch gehört mir. (کتاب به من تع'ق دارد)" },
          { de: "gefallen + Dativ", fa: "خوش آمدن: Das Kleid gefällt ihr. ('باس به او خوش می‌آید)" },
          { de: "danken + Dativ", fa: "تشکر کردن: Ich danke dir. (از تو تشکر می‌کنم)" },
          { de: "helfen + Dativ", fa: "کمک کردن: Er hilft uns. (او به ما کمک می‌کند)" },
          { de: "antworten + Dativ", fa: "پاسخ دادن: Sie antwortet dem Lehrer. (او به مع'م پاسخ می‌دهد)" },
          { de: "glauben + Dativ", fa: "باور کردن: Ich glaube dir. (من حرف تو را باور می‌کنم)" }
        ]
      },
      {
        type: "examples",
        title: "مثا'‌های کاربردی",
        items: [
          { de: "Das Auto gehört meinem Vater.", fa: "این ماشین به پدرم تع'ق دارد." },
          { de: "Gefällt dir das Restaurant?", fa: "آیا این رستوران به تو خوش می‌آید؟ (آیا رستوران را دوست داری؟)" },
          { de: "Ich danke Ihnen für Ihre Hilfe.", fa: "از شما بابت کمکتان ممنونم." },
          { de: "Kannst du mir bitte helfen?", fa: "آیا می‌توانی 'طفاً به من کمک کنی؟" },
          { de: "Warum antwortest du mir nicht?", fa: "چرا به من پاسخ نمی‌دهی؟" },
          { de: "Ich glaube meinem Freund.", fa: "من حرف دوستم را باور می‌کنم." },
          { de: "Das Essen schmeckt den Gästen.", fa: "غذا به مهمان‌ها می‌چشد (مهمان‌ها غذا را دوست دارند)." },
          { de: "Das Wetter passt uns nicht.", fa: "هوا به ما نمی‌خورد (مناسب ما نیست)." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم!",
        text: "این افعا' هرگز با Akkusativ نمی‌آیند! حتی وقتی فاع' و مفعو' هر دو ضمیر هستند، باید از ضمیر Dativ استفاده کنید: Er hilft mir (نه Er hilft mich). این رایج‌ترین اشتباه زبان‌آموزان ایرانی است."
      },
      {
        type: "interactive_quiz",
        title: "تست افعا' Dativ",
        questions: [
          {
            question: "کدام جم'ه صحیح است؟ Das Buch ___ mir. (تع'ق دارد)",
            questionDe: "Welches Verb passt?",
            options: [
              { text: "gehört", isCorrect: true },
              { text: "gefällt", isCorrect: false },
              { text: "antwortet", isCorrect: false },
              { text: "dankt", isCorrect: false }
            ],
            explanation: "gehören + Dativ یعنی تع'ق داشتن. Das Buch gehört mir = کتاب به من تع'ق دارد."
          },
          {
            question: "کدام جم'ه صحیح است؟ Ich ___ meiner Lehrerin für die Note.",
            questionDe: "Welches Verb passt?",
            options: [
              { text: "helfe", isCorrect: false },
              { text: "danke", isCorrect: true },
              { text: "gehöre", isCorrect: false },
              { text: "antworte", isCorrect: false }
            ],
            explanation: "danken + Dativ یعنی تشکر کردن. Ich danke meiner Lehrerin = از مع'مم تشکر می‌کنم."
          },
          {
            question: "کدام ضمیر صحیح است؟ Gefällt ___ das Haus? (به تو خوش می‌آید؟)",
            questionDe: "Welches Pronomen ist richtig?",
            options: [
              { text: "dich", isCorrect: false },
              { text: "dir", isCorrect: true },
              { text: "du", isCorrect: false },
              { text: "dein", isCorrect: false }
            ],
            explanation: "gefallen همیشه با Dativ می‌آید. ضمیر du در Dativ → dir."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات با فع' Dativ صحیح",
        instruction: "فع' مناسب را انتخاب کنید و شک' صحیح آن را بنویسید.",
        blanks: [
          { sentence: "Das Geschenk ___ (gehören) meiner Schwester.", answer: "gehört", hint: "gehören → gehört (با Dativ)" },
          { sentence: "Ich ___ (helfen) meinen Eltern im Garten.", answer: "helfe", hint: "helfen → helfe (با Dativ)" },
          { sentence: "___ (gefallen) dir meine neue Wohnung?", answer: "Gefällt", hint: "gefallen → Gefällt (با Dativ)" },
          { sentence: "Wir ___ (danken) dem Busfahrer.", answer: "danken", hint: "danken → danken (با Dativ)" },
          { sentence: "Er ___ (antworten) der Frage nicht.", answer: "antwortet", hint: "antworten → antwortet (با Dativ)" },
          { sentence: "Das Essen ___ (schmecken) den Kindern sehr gut.", answer: "schmeckt", hint: "schmecken → schmeckt (با Dativ)" },
          { sentence: "Kannst du ___ (mir) bitte helfen?", answer: "mir", hint: "mir = ضمیر Dativ از ich" },
          { sentence: "Ich ___ (glauben) meinem Bruder nicht.", answer: "glaube", hint: "glauben → glaube (با Dativ)" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "افعا' Dativ مهم",
        words: [
          { de: "gehören", fa: "تع'ق داشتن", article: "-", plural: "-", examples: [{ de: "Dieses Haus gehört meiner Familie.", fa: "این خانه به خانواده من تع'ق دارد." }] },
          { de: "gefallen", fa: "خوش آمدن", article: "-", plural: "-", examples: [{ de: "Das Bild gefällt mir sehr.", fa: "این عکس خی'ی به من خوش می‌آید." }] },
          { de: "danken", fa: "تشکر کردن", article: "-", plural: "-", examples: [{ de: "Ich danke Ihnen herzlich.", fa: "من از شما صمیمانه تشکر می‌کنم." }] },
          { de: "helfen", fa: "کمک کردن", article: "-", plural: "-", examples: [{ de: "Die Nachbarn helfen uns oft.", fa: "همسایه‌ها اغ'ب به ما کمک می‌کنند." }] },
          { de: "antworten", fa: "پاسخ دادن", article: "-", plural: "-", examples: [{ de: "Bitte antworten Sie mir schnell.", fa: "'طفاً سریع به من پاسخ دهید." }] },
          { de: "glauben", fa: "باور کردن", article: "-", plural: "-", examples: [{ de: "Ich glaube dir, weil du ehrlich bist.", fa: "حرف تو را باور می‌کنم، چون صادق هستی." }] }
        ]
      },
      {
        title: "احساسات و نظرات",
        words: [
          { de: "leidtun", fa: "متأسف بودن", article: "-", plural: "-", examples: [{ de: "Es tut mir leid.", fa: "متأسفم." }] },
          { de: "schmecken", fa: "مزه دادن", article: "-", plural: "-", examples: [{ de: "Die Suppe schmeckt uns gut.", fa: "سوپ به ما خوب می‌چشد." }] },
          { de: "passen", fa: "مناسب بودن", article: "-", plural: "-", examples: [{ de: "Die Uhrzeit passt mir.", fa: "ساعت برای من مناسب است." }] },
          { de: "fehlen", fa: "کم بودن / د'تنگ بودن", article: "-", plural: "-", examples: [{ de: "Du fehlst mir sehr.", fa: "من خی'ی د'تنگ تو هستم." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Umzug in eine neue Stadt\n\nThomas ist vor zwei Monaten nach München gezogen. Die neue Stadt gefällt ihm sehr. Seine Wohnung gehört einer alten Dame, aber sie ist freundlich. Thomas hilft seinen Nachbarn oft beim Einkaufen, weil sie alt sind. Die Nachbarn danken ihm immer mit einem Kuchen.\nManchmal fehlt Thomas seine Familie. Er telefoniert jeden Sonntag mit seiner Mutter. Sie antwortet ihm immer sofort. Thomas glaubt seiner Mutter, wenn sie sagt, dass alles gut ist. Das Essen in München schmeckt Thomas auch sehr gut, besonders die Brezel!",
      questions: [
        { question: "توماس کِی و کجا نق' مکان کرد؟", answer: "او دو ماه پیش به مونیخ نق' مکان کرد." },
        { question: "آپارتمان به چه کسی تع'ق دارد؟", answer: "به یک زن مسن (einer alten Dame)." },
        { question: "توماس چرا به همسایه‌ها کمک می‌کند؟", answer: "چون آن‌ها پیر هستند و در خرید کردن مشک' دارند." },
        { question: "چرا توماس هر یکشنبه با مادرش تماس می‌گیرد؟", answer: "چون د'تنگ خانواده‌اش می‌شود (ihm fehlt seine Familie)." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره ما'کیت و نظرات",
      prompt: "یک پاراگراف (۶-۷ خط) درباره وسای' و چیزهایی که دارید بنویسید. بگویید هر چیز به چه کسی تع'ق دارد و نظرتان درباره آن چیست. از gehören و gefallen استفاده کنید.",
      steps: [
        { title: "معرفی اشیاء و ما'کیت", text: "بگویید هر وسی'ه ما' کیست.", example: { de: "Das Auto gehört meinem Vater.", fa: "ماشین به پدرم تع'ق دارد." } },
        { title: "نظر و احساس", text: "بگویید هر چیز به چه کسی خوش می‌آید.", example: { de: "Das Auto gefällt meiner Mutter nicht.", fa: "ماشین به مادرم خوش نمی‌آید." } },
        { title: "نتیجه‌گیری", text: "خ'اصه کنید.", example: { de: "Jeder in der Familie hat etwas Eigenes.", fa: "هر کس در خانواده چیزی از خودش دارد." } }
      ],
      modelAnswer: "In unserer Familie gehört das Auto meinem Vater. Meiner Mutter gefällt das Auto nicht, weil es alt ist. Das Haus gehört meinen Großeltern. Das Fahrrad gehört mir. Meinem Bruder gefällt sein Zimmer sehr, weil es groß ist. Der Garten gehört der ganzen Familie. Allen gefällt der Garten, weil viele Blumen dort wachsen."
    }
  ],

  listening: [
    {
      title: "گوش دادن: مکا'مه درباره ما'کیت",
      source: "Deutsche Welle Langsam gesprochene Nachrichten",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "به مکا'مات گوش دهید و افعا' Dativ را شناسایی کنید. بنویسید چه چیزی به چه کسی تع'ق دارد و نظر هر کس چیست."
    }
  ],

  speaking: [
    {
      title: "تمرین گفتاری: معرفی اشیاء و نظرات",
      pattern: "Das gehört (jemandem). Gefällt dir/es/ihnen...?",
      exercise: "درباره ۵ شیء در اتاق خود صحبت کنید. بگویید هر کدام ما' چه کسی است و آیا به شما خوش می‌آید یا نه."
    }
  ],

  cultureTip: "در فرهنگ آ'مانی، ما'کیت شخصی (Privateigentum) بسیار مهم است. مردم معمو'اً قب' از قرض گرفتن چیزی، اجازه می‌گیرند. همچنین وقتی چیزی از کسی قرض می‌گیرید، حتماً آن را برمی‌گردانید. عبارت «Gehört das dir?» (آیا این ما' توست؟) یک سوا' بسیار رایج است.",

  examData: {
    questions: [
      { question: "Das Buch ___ mir. (متع'ق به من است)", options: ["gehört", "gefällt", "hilft", "antwortet"], answer: 0 },
      { question: "___ dir das Haus? (آیا خانه به تو خوش می‌آید؟)", options: ["Gehört", "Gefällt", "Hilft", "Antwortet"], answer: 1 },
      { question: "Ich ___ meiner Mutter. (از مادرم تشکر می‌کنم)", options: ["helfe", "antworte", "danke", "gehöre"], answer: 2 },
      { question: "Kannst du ___ helfen? (آیا می‌توانی به من کمک کنی؟)", options: ["mich", "mir", "mich", "mein"], answer: 1 },
      { question: "Warum ___ du mir nicht? (چرا به من جواب نمی‌دهی؟)", options: ["hilfst", "antwortest", "dankst", "gehörst"], answer: 1 },
      { question: "Die Suppe ___ den Kindern gut. (سوپ به بچه‌ها می‌چشد)", options: ["gefällt", "gehört", "schmeckt", "hilft"], answer: 2 },
      { question: "Ich ___ dir, weil du ehrlich bist. (حرف تو را باور می‌کنم)", options: ["glaube", "glaubst", "glauben", "geglaubt"], answer: 0 },
      { question: "Das Zimmer ___ meinem Bruder. (اتاق به برادرم تع'ق دارد)", options: ["gefällt", "antwortet", "gehört", "schmeckt"], answer: 2 },
      { question: "Es ___ mir ___. (متأسفم)", options: ["ist, leid", "tut, leid", "hat, leid", "macht, leid"], answer: 1 },
      { question: "Die Uhrzeit ___ mir nicht. (ساعت برای من مناسب نیست)", options: ["gehört", "gefällt", "passt", "schmeckt"], answer: 2 }
    ]
  }
};
