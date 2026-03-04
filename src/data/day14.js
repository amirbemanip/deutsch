export const day14Data = {
  title: "روز ۱۴: گذشته‌ی جادویی با war/hatte و خانواده‌ی آلمانی",
  objective: "امروز وارد دنیای گذشته می‌شویم! یاد می‌گیریم چطور با دو کلمه جادویی (war و hatte) بیش از نیمی از داستان‌های گذشته خود را تعریف کنیم. همچنین فعل مُدال (können) را می‌آموزیم تا از توانایی‌ها بگوییم و در پایان خانواده خود را به زبان آلمانی معرفی می‌کنیم.",

  grammarData: {
    subtitle: "این درس شامل گذشته‌ی افعال به همراه معرفی اعضای خانواده و کلمات مربوط به توانایی است.",
    content: [
      {
        type: "text",
        title: "۱. ماشین زمان: زمان گذشته ساده (Präteritum)",
        text: "در سطح A1، شما برای تعریف کردن اتفاقات گذشته بیشتر از زمان حال کامل (Perfekt) استفاده خواهید کرد (که در روزهای آینده می‌خوانیم). اما دو فعل بسیار مهم (بودن = sein) و (داشتن = haben) در گذشته به شکل ساده‌ی خود یعنی war و hatte استفاده می‌شوند."
      },
      {
        type: "table",
        title: "صرف جادوییِ war (بودم) و hatte (داشتم)",
        rows: [
          { de: "ich (من)", fa: "ich war (بودم) / ich hatte (داشتم)" },
          { de: "du (تو)", fa: "du warst (بودی) / du hattest (داشتی)" },
          { de: "er/sie/es (او/آن)", fa: "er war (بود) / er hatte (داشت - دقت کنید سوم شخص دقیقاً مثل ich است!)" },
          { de: "wir/Sie/sie (ما/شما/آن‌ها)", fa: "wir waren (بودیم) / wir hatten (داشتیم)" },
          { de: "ihr (شماها)", fa: "ihr wart (بودید) / ihr hattet (داشتید)" }
        ]
      },
      {
        type: "examples",
        title: "داستان‌های کوچک در گذشته",
        items: [
          { de: "Gestern war ich sehr müde.", fa: "دیروز من خیلی خسته بودم." },
          { de: "Er hatte gestern keine Zeit.", fa: "او دیروز هیچ وقتی نداشت." },
          { de: "Wo warst du am Wochenende?", fa: "کجا بودی آخر هفته؟" },
          { de: "Wir hatten viel Stress.", fa: "ما استرس زیادی داشتیم." }
        ]
      },
      {
        type: "text",
        title: "۲. فعل مُدال können (توانستن)",
        text: "از فعل können برای بیان مهارت‌ها (توانایی فیزیکی/ذهنی) یا امکان انجام کاری استفاده می‌شود. مثل همیشه، قانون افعال مدال: فعل können در جایگاه دوم و فعل اصلی به انتهای جمله فرستاده می‌شود."
      },
      {
        type: "examples",
        title: "جملات پرکاربرد با können",
        items: [
          { de: "Ich kann gut schwimmen.", fa: "من می‌توانم خوب شنا کنم. (مهارت)" },
          { de: "Kannst du mir helfen?", fa: "می‌توانی به من کمک کنی؟" },
          { de: "Tut mir leid, ich kann heute nicht kommen.", fa: "متاسفم، من امروز نمی‌توانم بیایم. (عدم امکان)" }
        ]
      },
      {
        type: "text",
        title: "۳. خانواده من (Meine Familie)",
        text: "در آلمانی وقتی می‌خواهید تعداد خواهر و برادر خود را بگویید از کلمه Geschwister استفاده می‌کنید. (مثل siblings در انگلیسی)."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: گذشته و توانایی",
        questions: [
          {
            question: "شما می‌خواهید بگویید «او دیروز در برلین بود». کدام جمله با گرامر گذشته صحیح است؟",
            questionDe: "Wie sagt man 'او دیروز در برلین بود'?",
            options: [
              { text: "Er ist gestern in Berlin.", isCorrect: false },
              { text: "Er war gestern in Berlin.", isCorrect: true },
              { text: "Er wart gestern in Berlin.", isCorrect: false }
            ],
            explanation: "آفرین! برای er (او)، صرف فعل گذشته sein می‌شود war."
          },
          {
            question: "شما می‌خواهید بگویید «من نمی‌توانم آلمانی صحبت کنم». جایگاه کلمات آلمانی باید چگونه باشد؟",
            questionDe: "Wie sagt man 'من نمی‌توانم آلمانی صحبت کنم'?",
            options: [
              { text: "Ich kann nicht sprechen Deutsch.", isCorrect: false },
              { text: "Ich spreche kann nicht Deutsch.", isCorrect: false },
              { text: "Ich kann nicht Deutsch sprechen.", isCorrect: true }
            ],
            explanation: "دقیقاً! فعل مدال kann در جایگاه دوم است، کلمه منفی‌ساز nicht می‌آید و مصدر فعلِ اصلي (sprechen) می‌پرد به آخر جمله."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "کلمات مربوط به زمان گذشته",
        words: [
          {
            de: "gestern / vorgestern",
            fa: "دیروز / پریروز",
            article: "-",
            plural: "-",
            examples: [
              { de: "Gestern war ich zu Hause.", fa: "دیروز من در خانه بودم." }
            ]
          },
          {
            de: "früher",
            fa: "قبلاً / در گذشته",
            article: "-",
            plural: "-",
            examples: [
              { de: "Früher war er mein Lehrer.", fa: "قبلاً او معلم من بود." }
            ]
          },
          {
            de: "letzte Woche",
            fa: "هفته‌ی گذشته (قبل)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Letzte Woche hatte ich Urlaub.", fa: "هفته‌ی گذشته من مرخصی/تعطیلات داشتم." }
            ]
          }
        ]
      },
      {
        title: "خانواده (Die Familie)",
        words: [
          {
            de: "die Familie / die Eltern",
            fa: "خانواده / والدین",
            article: "die",
            plural: "die Familien / -",
            examples: [
              { de: "Meine Eltern leben im Iran.", fa: "پدر و مادر من در ایران زندگی می‌کنند." }
            ]
          },
          {
            de: "der Vater / die Mutter",
            fa: "پدر / مادر",
            article: "der / die",
            plural: "die Väter / die Mütter",
            examples: [
              { de: "Sein Vater ist Arzt.", fa: "پدر او پزشک است." }
            ]
          },
          {
            de: "die Geschwister",
            fa: "خواهر و برادر (جمع)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Hast du Geschwister?", fa: "آیا تو خواهر یا برادر داری؟" }
            ]
          },
          {
            de: "der Bruder / die Schwester",
            fa: "برادر / خواهر",
            article: "der / die",
            plural: "die Brüder / die Schwestern",
            examples: [
              { de: "Ich habe zwei Brüder.", fa: "من دو برادر دارم." }
            ]
          },
          {
            de: "das Einzelkind",
            fa: "تک‌فرزند",
            article: "das",
            plural: "die Einzelkinder",
            examples: [
              { de: "Ich habe keine Geschwister. Ich bin Einzelkind.", fa: "من خواهر-برادر ندارم. من تک‌فرزند هستم." }
            ]
          },
          {
            de: "der Großvater / die Großmutter",
            fa: "پدربزرگ (Opa) / مادربزرگ (Oma)",
            article: "der / die",
            plural: "die Großväter / die Großmütter",
            examples: [
              { de: "Meine Großmutter kocht sehr gut.", fa: "مادربزرگ من خیلی خوب آشپزی می‌کند." }
            ]
          },
          {
            de: "der Sohn / die Tochter",
            fa: "پسر (فرزند) / دختر (فرزند)",
            article: "der / die",
            plural: "die Söhne / die Töchter",
            examples: [
              { de: "Sie haben einen Sohn.", fa: "آن‌ها یک پسر (فرزند) دارند." }
            ]
          },
          {
            de: "die Tante / der Onkel",
            fa: "خاله و عمه / دایی و عمو",
            article: "die / der",
            plural: "die Tanten / die Onkel",
            examples: [
              { de: "Mein Onkel wohnt in Berlin.", fa: "عموی/دایی من در برلین زندگی می‌کند." }
            ]
          }
        ]
      },
      {
        title: "توانستن و ابراز ناتوانی",
        words: [
          {
            de: "können",
            fa: "توانستن (مهارت/امکان)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Er kann sehr schnell laufen.", fa: "او می‌تواند خیلی سریع بدود." }
            ]
          },
          {
            de: "helfen",
            fa: "کمک کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich kann dir morgen helfen.", fa: "من می‌توانم فردا به تو کمک کنم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein anstrengendes Wochenende\n\nHallo Markus,\nwie war dein Wochenende? Mein Wochenende war nicht so gut. Letzte Woche hatte ich viel Stress auf der Arbeit. Ich war sehr müde. \nAm Samstag wollte (می‌خواستم) ich ins Kino gehen, aber ich konnte nicht. Meine Mutter war krank und ich musste ihr helfen. Wir waren auch im Krankenhaus. Danach hatte ich keine Energie mehr.\nHeute geht es meiner Mutter besser. Wie waren deine Tage? Hattest du ein gutes Wochenende?\nLiebe Grüße,\nSarah",
      questions: [
        { question: "چرا سارا در آخر هفته نتوانست به سینما برود؟" },
        { question: "وضعیت کاری سارا در هفته گذشته (Letzte Woche) چگونه بود؟" },
        { question: "سارا در روز شنبه همراه مادرش در کجا بودند؟" },
        { question: "کدام دو مُدال وِرب (können و müssen) در متن برای بیان ناتوانی و اجبار به کار رفته‌اند؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره دیروز و معرفی خانواده",
      prompt: "دو پاراگراف بنویسید: در پاراگراف اول از war و hatte استفاده کنید و بگویید دیروز چگونه بود. در پاراگراف دوم بگویید خانواده شما چند نفره است.",
      steps: [
        {
          title: "وضعیت دیروز",
          text: "از Gestern شروع کنید. بگویید دیروز کجا بودید و چه داشتید.",
          example: { de: "Gestern war ich zu Hause. Ich hatte keine Lust auf Arbeit. Das Wetter war auch schlecht.", fa: "دیروز من در خانه بودم. من هیچ حوصله‌ای برای کار نداشتم. هوا هم بد بود." }
        },
        {
          title: "بیان توانایی یا اجبار",
          text: "با استفاده از konnte (نتوانستم) و musste (مجبور بودم) دلیل بیاورید.",
          example: { de: "Aber ich musste meine Wohnung putzen. Ich konnte leider nicht fernsehen.", fa: "اما من مجبور بودم آپارتمانم را تمیز کنم. متاسفانه نتوانستم تلویزیون تماشا کنم." }
        },
        {
          title: "معرفی خانواده",
          text: "بگویید که آیا خواهر و برادر دارید یا خیر، و والدینتان کجا هستند.",
          example: { de: "Meine Familie ist klein. Ich habe zwei Geschwister: einen Bruder und eine Schwester. Meine Eltern leben im Iran.", fa: "خانواده من کوچک است. من دو خواهر-برادر دارم: یک برادر و یک خواهر. والدین من در ایران زندگی می‌کنند." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. معرفی পরিবারের اعضای خانواده",
      source: "Learn German - Family Vocabulary",
      link: "https://www.youtube.com/watch?v=njo4oy6xGrE",
      instructions: "تمرین دقت به آرتیکل‌ها:\n۱. دقت کنید که تمام مردان خانواده (Vater, Bruder, Onkel, Sohn) دارای آرتیکل der، و تمام زنان (Mutter, Schwester, Tante, Tochter) دارای آرتیکل die هستند.\n۲. جمع کلمات را از گوینده تقلید کنید (Die Brüder, Die Töchter)."
    },
    {
      title: "۲. سفر در زمان با War و Hatte",
      source: "Präteritum von haben und sein",
      link: "https://learngermanoriginal.com/courses/a1-course/lesson-41/",
      instructions: "تمرین سرعت واکنش:\n۱. ویدیوی گرامر را ببینید و وقتی گوینده می‌گوید ich bin (من هستم)، شما سریعاً بلند بگویید: ich war! (من بودم). این تبدیلِ ذهنیِ سریع در صحبت کردن معجزه می‌کند."
    }
  ],

  speaking: [
    {
      title: "دیروز چطور بود؟",
      pattern: "Gestern war ich [Ort]. Ich hatte [Problem / Gefühl].",
      exercise: "جلوی آینه بایستید. تصور کنید دیروز خیلی روز بدی بوده است. به آلمانی بگویید که خسته بوده‌اید (Ich war müde) و سردرد داشته‌اید (Ich hatte Kopfschmerzen). بگویید مجبور بودید کار کنید (Ich musste arbeiten) و نتوانستید بخوابید (Ich konnte nicht schlafen)."
    },
    {
      title: "معرفی خانواده در مهمانی",
      pattern: "Ich habe [X] Geschwister. Das ist mein/meine [Familienmitglied].",
      exercise: "عکس خانواده خود را در گوشی باز کنید. صدای خود را ضبط کنید و تک تک اعضا را معرفی کنید. مثلاً بگویید: (Das ist mein Vater. Er ist 50 Jahre alt. Er arbeitet als ...). اگر تک‌فرزند هستید با افتخار بگویید: (Ich bin Einzelkind!)."
    }
  ],

  cultureTip: "خانواده‌های کوچک در آلمان (Kleinfamilien): برخلاف بسیاری از کشورها، مفهوم خانواده در آلمان معمولاً به «والدین و فرزندانشان» (Kernfamilie) محدود می‌شود. ارتباط با خویشاوندان دور (عمه، دایی و بچه‌هایشان) معمولاً بسیار رسمی‌تر و کمتر است. همچنین، بسیار رایج است که فرزندان به محض رسیدن به سن ۱۸ سالگی یا شروع دانشگاه، از خانه والدین نقل مکان (Auszug) کنند و در شهرهای دور مستقل زندگی کنند."
};
