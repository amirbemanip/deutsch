export const day3Data = {
  title: "روز ۳: خانواده، علایق و افعال کمکی (können/müssen)",
  objective: "امروز یاد می‌گیریم که چطور درباره خانواده‌مان صحبت کنیم، در مورد سرگرمی‌ها و علایقمان بگوییم، و توانایی‌ها (من می‌توانم...) و اجبارهایمان (من باید...) را در جملات آلمانی با ساختار استاندارد بیان کنیم.",

  grammarData: {
    subtitle: "این درس شامل معرفی اعضای خانواده، ساختار علاقه با gern، و دو فعل کمکی بسیار مهم (können و müssen) است.",
    content: [
      {
        type: "text",
        title: "۱. معرفی خانواده و ضمایر ملکی (Possessivartikel)",
        text: "برای معرفی خانواده از دو فعل که یاد گرفتید (sein و haben) استفاده می‌کنیم.\n- با sein: Das ist mein Vater. (این پدر من است.)\n- با haben: Ich habe einen Bruder. (من یک برادر دارم.)\n\n**لیست کامل ضمایر ملکی (مالیت):**\n- من (ich) ➔ mein (مال من)\n- تو (du) ➔ dein (مال تو)\n- او مرد/خنثی (er/es) ➔ sein (مال او)\n- او زن (sie) ➔ ihr (مال او)\n- ما (wir) ➔ unser (مال ما)\n- شماها (ihr) ➔ euer (مال شماها)\n- آن‌ها / شما محترمانه (sie/Sie) ➔ ihr / Ihr (مال آن‌ها / مال شما)"
      },
      {
        type: "alert",
        title: "نکته درباره‌ی Akkusativ و کلمات ملکی",
        text: "همانطور که می‌دانید، در حالت مفعولی (Akkusativ) فقط جنسیت مذکر (der) تغییر می‌کند. این تغییر روی ضمایر ملکی هم اعمال می‌شود!\nمثال: Ich habe einen Bruder. ➔ Ich liebe **meinen** Bruder. (من برادرم را دوست دارم). \ndein ➔ deinen, sein ➔ seinen\nاما مونث و خنثی همان eine و ein می‌مانند (Ich habe eine Schwester / ein Kind)."
      },
      {
        type: "text",
        title: "۲. بیان علاقه‌مندی با کلمه جادویی «gern»",
        text: "در آلمانی برای گفتن «من دوست دارم کاری را انجام دهم»، بر خلاف انگلیسی نیازی به دو فعل نداریم! بلکه فقط قید gern (با میل و رغبت) را دقیقاً بعد از فعل اصلی می‌آوریم."
      },
      {
        type: "table",
        title: "چگونه بگوییم: دوست دارم / دوست ندارم",
        rows: [
          { de: "Ich lese gern.", fa: "من دوست دارم کتاب بخوانم. (من با میل می‌خوانم)" },
          { de: "Ich schwimme nicht gern.", fa: "من دوست ندارم شنا کنم. (nicht gern = دوست ندارم)" },
          { de: "Was machst du gern?", fa: "دوست داری چه کار کنی؟ (چه چیزی با میل انجام می‌دهی؟)" }
        ]
      },
      {
        type: "examples",
        title: "مثال‌هایی با gern",
        items: [
          { de: "Ich trinke gern Kaffee.", fa: "دوست دارم قهوه بنوشم." },
          { de: "Sie hört gern Musik.", fa: "او (مونث) دوست دارد موسیقی گوش دهد." },
          { de: "Wir spielen nicht gern Fußball.", fa: "ما دوست نداریم فوتبال بازی کنیم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: استفاده از gern",
        questions: [
          {
            question: "اگر بخواهیم بگوییم «من دوست دارم پیتزا بخورم» کدام جمله درست است؟",
            questionDe: "Wie sagt man 'من دوست دارم پیتزا بخورم'?",
            options: [
              { text: "Ich liebe essen Pizza.", isCorrect: false },
              { text: "Ich gern esse Pizza.", isCorrect: false },
              { text: "Ich esse gern Pizza.", isCorrect: true }
            ],
            explanation: "آفرین! قید gern بلافاصله بعد از فعل (esse) می‌نشیند و به این معنی است که آن فعل را با عشق و علاقه انجام می‌دهم."
          }
        ]
      },
      {
        type: "text",
        title: "۳. افعال کمکی (Modalverben): können و müssen",
        text: "افعال کمکی حال و هوای جمله را تغییر می‌دهند:\n- können: توانستن، قادر بودن، بلد بودن.\n- müssen: باید، مجبور بودن.\n\n**قانون طلایی افعال کمکی:** فعل کمکی در جایگاه دوم صرف می‌شود، و فعل اصلیِ جمله پرت می‌شود به **آخرین کلمه جمله** و همیشه به‌صورت مصدر (بدون صرف) باقی می‌ماند!"
      },
      {
        type: "table",
        title: "صرف دو فعل کمکی (können / müssen)",
        rows: [
          { de: "ich kann / muss", fa: "من می‌توانم / من باید" },
          { de: "du ❗️kannst / musst", fa: "تو می‌توانی / تو باید" },
          { de: "er/sie/es ❗️kann / muss", fa: "او می‌تواند / او باید (دقت کنید: اول شخص و سوم شخص همیشه یک شکل هستند!)" },
          { de: "wir können / müssen", fa: "ما می‌توانیم / ما باید" },
          { de: "ihr könnt / müsst", fa: "شماها می‌توانید / شماها باید" },
          { de: "sie/Sie können / müssen", fa: "آن‌ها/شما(رسمی) می‌توانند / باید" }
        ]
      },
      {
        type: "examples",
        title: "ساختار ساندویچی افعال کمکی",
        items: [
          { de: "Ich kann ein bisschen Deutsch sprechen.", fa: "من می‌توانم کمی آلمانی صحبت کنم. (kann در جای ۲، sprechen در آخر)" },
          { de: "Wir müssen heute lange arbeiten.", fa: "ما باید امروز طولانی کار کنیم. (müssen در جای ۲، arbeiten در آخر)" },
          { de: "Kannst du Auto fahren?", fa: "آیا تو می‌توانی رانندگی کنی؟ (سوال بله/خیر: فعل کمکی در جای ۱، فعل اصلی آخر)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون ساختار فعل کمکی",
        questions: [
          {
            question: "کدام جمله از نظر گرامری برای «او باید آلمانی یاد بگیرد» درست است؟",
            questionDe: "Welcher Satz ist grammatikalisch richtig?",
            options: [
              { text: "Er muss lernen Deutsch.", isCorrect: false },
              { text: "Er muss Deutsch lernen.", isCorrect: true },
              { text: "Er Deutsch lernen muss.", isCorrect: false }
            ],
            explanation: "بسیار عالی! فعل muss در جایگاه دوم قرار می‌گیرد، و فعل lernen حتماً باید به آخر جمله شلیک شود."
          },
          {
            question: "برای پرسیدن «آیا تو می‌توانی شنا کنی؟» کدام سوال صحیح است؟",
            questionDe: "Welcher Fragesatz ist richtig?",
            options: [
              { text: "Kannst du schwimmen?", isCorrect: true },
              { text: "Du kannst schwimmen?", isCorrect: false },
              { text: "Schwimmen kannst du?", isCorrect: false }
            ],
            explanation: "درست است! در سوال بله/خیر، فعل کمکی (Kannst) در جایگاه اول می‌آید و مصدر (schwimmen) در آخر."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "خانواده (Die Familie)",
        words: [
          {
            de: "Eltern",
            fa: "والدین / پدر و مادر",
            article: "die (Pl.)",
            plural: "-",
            examples: [
              { de: "Meine Eltern wohnen im Iran.", fa: "پدر و مادرم در ایران زندگی می‌کنند." }
            ]
          },
          {
            de: "Vater / Mutter",
            fa: "پدر / مادر",
            article: "der / die",
            plural: "die Väter / die Mütter",
            examples: [
              { de: "Mein Vater heißt Ali und meine Mutter heißt Sara.", fa: "اسم پدرم علی و اسم مادرم سارا است." }
            ]
          },
          {
            de: "Bruder / Schwester",
            fa: "برادر / خواهر",
            article: "der / die",
            plural: "die Brüder / die Schwestern",
            examples: [
              { de: "Ich habe einen Bruder und zwei Schwestern.", fa: "من یک برادر و دو خواهر دارم." }
            ]
          },
          {
            de: "Geschwister",
            fa: "خواهر و برادر (به‌طور کلی)",
            article: "die (Pl.)",
            plural: "-",
            examples: [
              { de: "Hast du Geschwister?", fa: "آیا خواهر و برادری داری؟" }
            ]
          },
          {
            de: "Sohn / Tochter",
            fa: "پسر (فرزند) / دختر (فرزند)",
            article: "der / die",
            plural: "die Söhne / die Töchter",
            examples: [
              { de: "Sie haben einen Sohn und eine Tochter.", fa: "آن‌ها یک پسر و یک دختر دارند." }
            ]
          },
          {
            de: "verheiratet / ledig",
            fa: "متأهل / مجرد",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich bin nicht verheiratet, ich bin ledig.", fa: "من متاهل نیستم، مجردم." }
            ]
          }
        ]
      },
      {
        title: "سرگرمی‌ها و علایق (Hobbys)",
        words: [
          {
            de: "Musik hören",
            fa: "موسیقی گوش دادن",
            article: "-",
            plural: "-",
            examples: [
              { de: "In meiner Freizeit höre ich gern Musik.", fa: "در اوقات فراغتم دوست دارم موسیقی گوش دهم." }
            ]
          },
          {
            de: "fernsehen",
            fa: "تلویزیون دیدن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Abends sehe ich gern fern.", fa: "عصرها دوست دارم تلویزیون تماشا کنم." }
            ]
          },
          {
            de: "Fußball spielen",
            fa: "فوتبال بازی کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Mein Bruder spielt sehr gern Fußball.", fa: "برادرم خیلی دوست دارد فوتبال بازی کند." }
            ]
          },
          {
            de: "spazieren gehen",
            fa: "پیاده‌روی رفتن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Am Wochenende gehen wir gern spazieren.", fa: "آخر هفته‌ها دوست داریم به پیاده‌روی برویم." }
            ]
          },
          {
            de: "schwimmen",
            fa: "شنا کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich schwimme nicht gern.", fa: "من خیلی اهل شنا کردن نیستم." }
            ]
          }
        ]
      },
      {
        title: "افعال پرکاربرد دیگر (können / müssen)",
        words: [
          {
            de: "können",
            fa: "توانستن / بلد بودن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Sie kann sehr gut Deutsch sprechen.", fa: "او می‌تواند خیلی خوب آلمانی صحبت کند." }
            ]
          },
          {
            de: "müssen",
            fa: "باید / مجبور بودن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich muss morgen früh aufstehen.", fa: "من فردا باید زود بیدار شوم." }
            ]
          },
          {
            de: "arbeiten",
            fa: "کار کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Am Montag muss ich arbeiten.", fa: "دوشنبه باید کار کنم." }
            ]
          },
          {
            de: "lernen",
            fa: "مسلط شدن / درس خواندن / یادگرفتن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wir müssen Deutsch lernen.", fa: "ما باید آلمانی یاد بگیریم." }
            ]
          }
        ]
      },
      {
        title: "افعال متضاد پایه (Gegensatz-Verben)",
        words: [
          {
            de: "geben / nehmen",
            fa: "دادن / گرفتن",
            examples: [
              { de: "Ich gebe dir das Buch und ich nehme den Stift.", fa: "کتاب را به تو می‌دهم و خودکار را می‌گیرم." }
            ]
          },
          {
            de: "kaufen / verkaufen",
            fa: "خریدن / فروختن",
            examples: [
              { de: "Er kauft ein Auto und sie verkauft ihr Fahrrad.", fa: "او یک ماشین می‌خرد و او (مونث) دوچرخه‌اش را می‌فروشد." }
            ]
          },
          {
            de: "leben / sterben",
            fa: "زندگی کردن / مردن",
            examples: [
              { de: "Wir leben in Deutschland.", fa: "ما در آلمان زندگی می‌کنیم." }
            ]
          },
          {
            de: "lachen / weinen",
            fa: "خندیدن / گریه کردن",
            examples: [
              { de: "Das Kind lacht viel, aber das Baby weint.", fa: "کودک زیاد می‌خندد، اما نوزاد گریه می‌کند." }
            ]
          },
          {
            de: "sitzen / stehen",
            fa: "نشستن / ایستادن",
            examples: [
              { de: "Ich sitze auf dem Stuhl und du stehst.", fa: "من روی صندلی نشسته‌ام و تو ایستاده‌ای." }
            ]
          },
          {
            de: "lieben / hassen",
            fa: "دوست داشتن (عشق ورزیدن) / تنفر داشتن",
            examples: [
              { de: "Ich liebe Musik, aber ich hasse Lärm.", fa: "من عاشق موسیقی‌ام، اما از سر و صدا متنفرم." }
            ]
          },
          {
            de: "finden / verlieren",
            fa: "پیدا کردن / گم کردن (از دست دادن)",
            examples: [
              { de: "Ich finde meine Schlüssel nicht. Ich verliere immer alles.", fa: "کلیدهایم را پیدا نمی‌کنم. همیشه همه چیز را گم می‌کنم." }
            ]
          },
          {
            de: "fragen / antworten",
            fa: "پرسیدن / پاسخ دادن",
            examples: [
              { de: "Der Lehrer fragt und der Schüler antwortet.", fa: "معلم می‌پرسد و دانش‌آموز جواب می‌دهد." }
            ]
          },
          {
            de: "brechen / reparieren",
            fa: "شکستن / تعمیر کردن",
            examples: [
              { de: "Das Auto ist kaputt, ich muss es reparieren.", fa: "ماشین خراب است، باید آن را تعمیر کنم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Interview: Familie und Hobbys\n\nInterviewer: Hallo Julia! Wie groß ist deine Familie?\nJulia: Hallo! Meine Familie ist klein. Meine Eltern wohnen in Berlin. Mein Vater ist 52 und meine Mutter ist 49 Jahre alt. Ich habe nur einen Bruder. Er heißt Felix und ist 20.\nInterviewer: Und was machst du gern in deiner Freizeit?\nJulia: Ich lese sehr gern Bücher. Ich kann auch sehr gut Gitarre spielen! Am Wochenende höre ich Musik oder gehe spazieren. Ich schwimme aber nicht gern.\nInterviewer: Musst du am Wochenende arbeiten?\nJulia: Nein, am Samstag und Sonntag habe ich frei. Aber am Montag muss ich wieder früh aufstehen und arbeiten.",
      questions: [
        { question: "خانواده گولیا چقدر بزرگ است و والدین او کجا زندگی می‌کنند؟" },
        { question: "برادر جولیا چه نام دارد و چند ساله است؟" },
        { question: "جولیا در اوقات فراغتش چه کارهایی را دوست دارد انجام دهد و چه کاری را دوست ندارد؟" },
        { question: "جولیا چه مهارتی دارد (چه کاری را خوب بلد است انجام دهد)؟" },
        { question: "آیا او آخر هفته باید کار کند؟ چه زمانی مجبور است بیدار شود و کار کند؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره خانواده و توانمندی‌ها",
      prompt: "حالا نوبت شماست. می‌خواهیم یک پاراگراف کامل درباره خودتان، خانواده، علایق و کارهایی که مجبور هستید امروز انجام دهید بنویسیم. دستورالعمل‌ها (گام‌ها) را بخوانید و جملات خود را بسازید.",
      steps: [
        {
          title: "خانواده",
          text: "با یک معرفی ساده از وضعیت تاهل و خواهر برادرهایت شروع کن. (من مجرد/متاهل هستم. من [اعداد] خواهر و [اعداد] برادر دارم).",
          example: { de: "Ich bin ledig und habe einen Bruder und zwei Schwestern.", fa: "من مجردهستم و یک برادر و دو خواهر دارم." }
        },
        {
          title: "اوقات فراغت و علایق",
          text: "با جمله In meiner Freizeit... شروع کن و از gern برای کارهایی که دوست داری استفاده کن. (مثلاً فوتبال بازی کردن، کتاب خواندن، موسیقی گوش دادن).",
          example: { de: "In meiner Freizeit lese ich gern Bücher und spiele Fußball.", fa: "در اوقات فراغتم دوست دارم کتاب بخوانم و فوتبال بازی کنم." }
        },
        {
          title: "توانمندی و اجبار (können und müssen)",
          text: "یک جمله درباره کاری بنویس که خوب می‌توانی انجام دهی (können). و یک جمله درباره کاری بنویس که امروز بالاجبار باید انجام دهی (müssen).",
          example: { de: "Ich kann sehr gut Deutsch sprechen. Aber heute muss ich lange arbeiten.", fa: "من خیلی خوب می‌توانم آلمانی حرف بزنم. اما امروز باید طولانی کار کنم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. مکالمه بارے خانواده",
      source: "Easy German - Meine Familie",
      link: "https://www.youtube.com/watch?v=TevSW9mpRpk",
      instructions: "تمرین شنیداری هدفمند:\n۱. یک‌بار ویدیو را ببینید و سعی کنید اسامی اعضای خانواده را (Vater, Mutter, Bruder, Schwester, Eltern, Kind) شکار کنید.\n۲. هرگاه کسی جمله «Ich habe...» (مثلاً من یک خواهر دارم) گفت ویدیو را متوقف کنید و آن را تکرار کنید.\n۳. بعد از پایان ویدیو، خانواده خود را حداقل با ۵ جمله بلند به آلمانی پیش خود معرفی کنید."
    },
    {
      title: "۲. جادوی können و müssen",
      source: "A1 Grammar Modal verbs",
      link: "https://www.youtube.com/watch?v=gj2TIapk7LU",
      instructions: "این ویدیو درباره قوانین افعال کمکی است. \nدر این ساختار مهم، همیشه دو فعل داریم که آلمانی‌ها به آن «ساندویچ افعال» می‌گویند. \nهنگام تماشای ویدیو، به دقت به افعالی که در انتهای جملات می‌آیند توجه کنید و همراه گوینده آن‌ها را تکرار کنید (مثل: ...sprechen, ...arbeiten)."
    }
  ],

  speaking: [
    {
      title: "مصاحبه علایق (Was machst du gern?)",
      pattern: "- Hallo, was machst du gern in deiner Freizeit?\n- Ich lese sehr gern Bücher. Und du?\n- Ich spiele gern Computerspiele.\n- Kannst du gut Deutsch sprechen?\n- Ja, ich kann ein bisschen Deutsch sprechen.",
      exercise: "تصور کنید در یک کلاس زبان قصد دارید با همکلاسی جدیدتان آشنا شوید.\nگام ۱: نقش یک پرسشگر را بازی کنید و بلند در اتاق بپرسید «Was machst du gern?»\nگام ۲: جای خود را عوض کنید، و به عنوان شخص پاسخ‌دهنده با علایق واقعی خودتان جواب دهید. جملات را با 'Ich ... gern' بسازید.\nگام ۳: حالا ۵ کاری را که دوست ندارید با nicht gern بیان کنید. مثلاً Ich singe nicht gern (دوست ندارم آواز بخوانم)."
    },
    {
      title: "کارهای اجباری امروز",
      pattern: "- Was musst du heute machen?\n- Ich muss heute arbeiten. Und am Abend muss ich einkaufen.",
      exercise: "دفترچه خود را بردارید. لیست ۳ کاری که فردا (Morgen) باید انجام دهید را در نظر بگیرید.\nحالا جلوی آینه با صدای بلند برای خودتان با ساختار «Ich muss morgen ...» این برنامه‌ها را شرح دهید. یادتان نرود فعل اصلی عملیات (مثل arbeiten, aufräumen, kochen) باید در انتهای جمله قرار گیرد."
    }
  ],

  cultureTip: "در آلمان، پرسیدن درباره میزان حقوق، قیمت خانه، یا سوالات خیلی شخصی در همان برخوردهای ابتدایی بسیار گستاخانه و Tabu محسوب می‌شود. در عوض، بهترین موضوع برای باز کردن سرِ صحبت با آلمانی‌ها پرسیدن درباره اوقات فراغتشان (Freizeit) و سرگرمی‌هایشان است. آلمانی‌ها عاشق باشگاه‌ها (Vereine) و سرگرمی‌های منظم هستند. پس اصطلاح «Was machen Sie in Ihrer Freizeit?» یک کلید طلایی برای دوست‌یابی در محیط آلمان است."
};
