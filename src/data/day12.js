export const day12Data = {
  title: "روز ۱۲: سرگرمی‌ها، علایق و هنر دعوت کردن!",
  objective: "امروز یاد می‌گیریم درباره‌ی کارهایی که در اوقات فراغت انجام می‌دهیم صحبت کنیم. تفاوت ظریف بین «gern» و «mögen» را کشف می‌کنیم و می‌آموزیم چگونه دوستانمان را به سینما، کافه یا مهمانی دعوت کنیم (یکی از مهم‌ترین بخش‌های آزمون گوته!).",

  grammarData: {
    subtitle: "تمرکز این درس بر روی بیان علایق، کار با قید gern و ساختار دعوت و پیشنهاد دادن است.",
    content: [
      {
        type: "text",
        title: "۱. اوقات فراغت (Die Freizeit) و سرگرمی‌ها",
        text: "وقتی می‌خواهیم بگویم «من ... انجام می‌دهم»، ۲ راه داریم:\nراه اول: استفاده از اسمِ هابی ➔ Mein Hobby ist Lesen. (سرگرمی من خواندن است).\nراه دوم: استفاده از فعل + قید طلاییِ gern ➔ Ich lese gern. (من با میل/دوست دارم بخوانم)."
      },
      {
        type: "alert",
        title: "رازِ بزرگِ GERN و MÖGEN",
        text: "این یکی از بزرگترین اشتباهات زبان‌آموزان است! \n- فعل mögen (دوست داشتن): فقط برای **اسم‌ها (چیزها / اشخاص)** استفاده می‌شود. (Ich mag Pizza / Ich mag dich).\n- قید gern (با میل): فقط برای **فعل‌ها (انجام یک کار)** استفاده می‌شود. (Ich koche gern ➔ نگویید Ich mag kochen!).\n\nپس gern را دقیقاً بعد از فعل می‌آوریم تا نشان دهیم آن کار را با عشق انجام می‌دهیم."
      },
      {
        type: "examples",
        title: "کارهای مورد علاقه",
        items: [
          { de: "Ich höre gern Musik.", fa: "من دوست دارم به موسیقی گوش دهم. (با میل گوش می‌دهم)" },
          { de: "Er spielt gern Fußball.", fa: "او با میل (دوست دارد) فوتبال بازی می‌کند." },
          { de: "Wir reisen sehr gern.", fa: "ما خیلی دوست داریم سفر کنیم." }
        ]
      },
      {
        type: "text",
        title: "۲. پیشنهاد دادن و دعوت کردن (Einladen)",
        text: "در بخش شفاهی یا نامه‌نگاری A1، شما حتماً باید بتوانید کسی را دعوت کنید. برای پیشنهاد دادن، از فعل مُدال wollen (خواستن - که قبلاً دیده‌ایم) استفاده می‌کنیم."
      },
      {
        type: "table",
        title: "فرمول‌های دعوت شفاهی و کتبی",
        rows: [
          { de: "Hast du Zeit?", fa: "وقت داری؟ (شروع هر دعوتی!)" },
          { de: "Wollen wir ins Kino gehen?", fa: "آیا می‌خواهیم به سینما برویم؟ / بیا بریم سینما!" },
          { de: "Kommst du mit?", fa: "همراه من می‌آیی؟" },
          { de: "Ich lade dich zu meiner Party ein.", fa: "من تو را به مهمانی‌ام دعوت می‌کنم. (فعل جداشدنی ein|laden)" }
        ]
      },
      {
        type: "examples",
        title: "جواب دادن به دعوت",
        items: [
          { de: "Ja, gerne. Das ist eine gute Idee!", fa: "بله، با کمال میل. این یک ایده عالی است!" },
          { de: "Leider habe ich keine Zeit. Ich muss arbeiten.", fa: "متاسفانه من وقت ندارم. من باید کار کنم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: علایق و دعوت",
        questions: [
          {
            question: "شما عاشق آشپزی کردن هستید (kochen یک فعل است). کدام جمله در آلمانی صحیح است؟",
            questionDe: "Wie sagt man 'من دوست دارم آشپزی کنم'?",
            options: [
              { text: "Ich mag kochen.", isCorrect: false },
              { text: "Ich koche gern.", isCorrect: true },
              { text: "Ich habe kochen gern.", isCorrect: false }
            ],
            explanation: "آفرین! چون kochen یک کار (فعل) است، برای نشان دادن علاقه به انجام آن، باید فعل را صرف کنید و بلافاصله کلمه gern را بیاورید. mögen فقط برای اسم‌هاست!"
          },
          {
            question: "می‌خواهید دوستتان را رسماً به یک قهوه دعوت کنید. فعل یکپارچه‌ی دعوت کردن (einladen) است. جمله درست چیست؟",
            questionDe: "Wie lädt man einen Freund zum Kaffee ein?",
            options: [
              { text: "Ich einlade dich zum Kaffee.", isCorrect: false },
              { text: "Ich lade dich zum Kaffee ein.", isCorrect: true },
              { text: "Ich lade ein dich zum Kaffee.", isCorrect: false }
            ],
            explanation: "بسیار عالی! einladen یک فعل جداشدنی (Trennbare Verben) است. بخش ein کَنده می‌شود و در انتهای جمله قرار می‌گیرد."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "سرگرمی‌ها (Die Hobbys)",
        words: [
          {
            de: "das Hobby",
            fa: "سرگرمی",
            article: "das",
            plural: "die Hobbys",
            examples: [
              { de: "Was ist dein Hobby?", fa: "سرگرمی تو چیست؟" }
            ]
          },
          {
            de: "lesen / Musik hören",
            fa: "خواندن / موسیقی گوش کردن (افعال)",
            article: "-",
            plural: "-",
            examples: [
              { de: "In meiner Freizeit lese ich gern.", fa: "در اوقات فراغتم با میل(دوست دارم) می‌خوانم." }
            ]
          },
          {
            de: "schwimmen / wandern",
            fa: "شنا کردن / کوهنوردی (پیاده‌روی در طبیعت)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Am Wochenende wandern wir in den Bergen.", fa: "آخر هفته‌ها ما در کوه‌ها پیاده‌روی/کوهنوردی می‌کنیم." }
            ]
          },
          {
            de: "kochen / backen",
            fa: "پختن غذا / پختن شیرینی و نان",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich backe gern Kuchen.", fa: "من دوست دارم کیک بپزم." }
            ]
          },
          {
            de: "reisen / fotografieren",
            fa: "سفر کردن / عکاسی کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich fotografiere gern Landschaften.", fa: "من دوست دارم از منظره‌ها عکاسی کنم." }
            ]
          },
          {
            de: "fernsehen",
            fa: "تلویزیون دیدن (فعل جداشدنی: fern|sehen)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Abends sehe ich oft fern.", fa: "عصرها من اغلب تلویزیون می‌بینم." }
            ]
          }
        ]
      },
      {
        title: "ورزش (Der Sport)",
        words: [
          {
            de: "Sport treiben / machen",
            fa: "ورزش کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Treibst du viel Sport?", fa: "آیا زیاد ورزش می‌کنی؟" }
            ]
          },
          {
            de: "Fußball spielen",
            fa: "فوتبال بازی کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Jungen spielen oft Fußball.", fa: "پسرها اغلب فوتبال بازی می‌کنند." }
            ]
          },
          {
            de: "joggen / Rad fahren",
            fa: "دویدن آرام / دوچرخه‌سواری",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich fahre gern Rad im Park.", fa: "من دوست دارم در پارک دوچرخه‌سواری کنم." }
            ]
          },
          {
            de: "das Fitnessstudio",
            fa: "باشگاه ورزشی",
            article: "das",
            plural: "die Fitnessstudios",
            examples: [
              { de: "Ich gehe zweimal pro Woche ins Fitnessstudio.", fa: "من دو بار در هفته به باشگاه می‌روم." }
            ]
          }
        ]
      },
      {
        title: "دعوت کردن (Einladen)",
        words: [
          {
            de: "einladen",
            fa: "دعوت کردن (فعل جداشدنی)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich lade dich zu meinem Geburtstag ein.", fa: "من تو را به تولدم دعوت می‌کنم." }
            ]
          },
          {
            de: "die Einladung",
            fa: "دعوت / دعوت‌نامه",
            article: "die",
            plural: "die Einladungen",
            examples: [
              { de: "Danke für die Einladung!", fa: "ممنون برای دعوت!" }
            ]
          },
          {
            de: "die Lust / die Zeit",
            fa: "حوصله-میل / وقت",
            article: "die / die",
            plural: "die Zeiten",
            examples: [
              { de: "Hast du heute Abend Zeit und Lust?", fa: "امشب وقت و حوصله داری؟" }
            ]
          },
          {
            de: "mitkommen",
            fa: "همراه آمدن (فعل جداشدنی: mit|kommen)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Kommst du morgen mit ins Kino?", fa: "فردا با من به سینما می‌آیی؟" }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein tolles Wochenende!\n\nHallo Anna,\nwie geht es dir? Ich habe heute am Nachmittag Zeit. Meine Hobbys sind Kochen und Filme sehen. Ich koche sehr gern, aber ich esse nicht gern alleine (به تنهایی).\nHast du heute Abend Zeit? Wollen wir zusammen kochen und danach einen Film sehen? Ich lade dich zu mir nach Hause ein. Mein Haus ist in der Nähe (نزدیک) vom Bahnhof. \nKommst du mit? Bitte antworte mir schnell.\nLiebe Grüße,\nDein Felix",
      questions: [
        { question: "هابی‌های فلیکس (نویسنده ایمیل) چیست؟" },
        { question: "مشکل فلیکس چیست که این ایمیل را نوشته؟ (چرا تنها آشپزی نمی‌کند؟)" },
        { question: "فلیکس با استفاده از ترکیب «Wollen wir...» چه پیشنهادی به آنا می‌دهد؟" },
        { question: "فلیکس از چه فعلی (einladen) برای دعوت رسمی آنا به خانه خودش استفاده کرده است و شکل استفاده آن چگونه است؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن یک پیام دعوت به دوست",
      prompt: "دقیقاً مشابه چیزی که در امتحان A1 از شما می‌خواهند! یک پیام کوتاه (5-6 خط) به دوستتان بنویسید، بگویید سرگرمی مورد علاقه شما مثلاً عکاسی یا ورزش است، بپرسید شنبه وقت دارد، و او را به پارک یا کافه دعوت کنید.",
      steps: [
        {
          title: "شروع و احوال‌پرسی",
          text: "با یک سلام دوستانه مثل (Hallo ..., wie geht es dir?) شروع کنید.",
          example: { de: "Hallo Jonas, wie geht es dir? Mir geht es sehr gut.", fa: "سلام یوناس، حالت چطور است؟ من حالم خیلی خوب است." }
        },
        {
          title: "بیان علاقه و پیشنهاد",
          text: "با استفاده از gern یک کاری که دوست دارید بگویید، سپس بپرسید آیا شنبه وقت دارد؟",
          example: { de: "Ich fahre sehr gern Rad. Hast du am Samstag Zeit?", fa: "من خیلی دوست دارم دوچرخه‌سواری کنم. شنبه وقت داری؟" }
        },
        {
          title: "دعوت اصلی و پایان",
          text: "پیشنهاد خود را با (Wollen wir...) بدهید و از او بخواهید که بیاید.",
          example: { de: "Wollen wir im Park Rad fahren? Ich lade dich danach auf einen Kaffee ein! Liebe Grüße, Thomas.", fa: "آیا می‌خواهیم در پارک دوچرخه سواری کنیم؟ من تو را بعد از آن به یک قهوه دعوت می‌کنم! با احترام فراوان، توماس." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. تو دوست داری چکار کنی؟",
      source: "Was machst du in deiner Freizeit? - Easy German",
      link: "https://www.youtube.com/watch?v=VcZShQOJ23w",
      instructions: "تمرین شنیدن قید gern:\n۱. دقت کنید که چقدر آلمانی‌ها از کلمه gern استفاده می‌کنند و آن را دقیقاً کجا قرار می‌دهند (معمولاً بلافاصله بعد از فعل و قبل از مفعول).\n۲. در حین ویدیو، ۳ فعالیتی که مردم آلمان زیاد انجام می‌دهند (مثل wandern یا grillen) را شکار کنید."
    },
    {
      title: "۲. با هم بریم بیرون؟",
      source: "Einladung auf Deutsch - Invitation",
      link: "https://www.youtube.com/watch?v=5alTxRuLvdM",
      instructions: "تمرین شبیه‌سازی مکالمه:\n۱. به نحوه پاسخ دادن افراد گوش دهید. وقتی کسی پیشنهاد را قبول می‌کند معمولاً می‌گوید: (Ja, gerne. Gute Idee!).\n۲. وقتی کسی رد می‌کند همیشه دلیل می‌آورد: (Nein, tut mir leid. Ich muss arbeiten). این دو قالب را بارها بلند تکرار کنید."
    }
  ],

  speaking: [
    {
      title: "شبکه‌سازی در کلاس زبان",
      pattern: "- Was sind deine Hobbys?\n- Ich [lese / koche / schwimme] gern.",
      exercise: "تصور کنید در اولین روز کلاس زبان آلمانی هستید.\nگوشی را روی حالت ضبط ویدیو بگذارید. خود را معرفی کنید، سن و شغلتان را بگویید و سپس ۳ مورد از سرگرمی‌هایتان را با استفاده از ساختار (Ich ... gern) بیان کنید و در نهایت از شخص مقابل بپرسید (Und du? Was machst du gern?)."
    },
    {
      title: "تماس تلفنی برای آخر هفته",
      pattern: "Hallo! Hast du am [Tag] Zeit? Wollen wir [Aktivität] machen?",
      exercise: "یک تلفن خیالی را کنار گوشتان بگیرید! به یک دوست خیالی زنگ بزنید. احوالپرسی کنید، بپرسید آیا مثلاً جمعه عصر وقت دارد (Hast du am Freitagabend Zeit?)، و پیشنهاد دهید که با هم به رستوران بروید (Wollen wir ins Restaurant gehen?). به خودتان پاسخ دهید که بله، ایده خوبی است!"
    }
  ],

  cultureTip: "مفهوم «بیش از حد کار نکردن» (Feierabend): در آلمان، پس از پایان ساعت کاری (معمولاً ساعت ۵ یا ۱۷:۰۰)، مفهوم Feierabend شروع می‌شود. این زمان، زمان مقدس استراحت و اوقات فراغت (Freizeit) است. آلمانی‌ها بسیار اهمیت می‌دهند که تعادل کار و زندگی (Work-Life-Balance) را حفظ کنند. آن‌ها بلافاصله بعد از کار به Verein (باشگاه‌های انجمنی مثل فوتبال، موسیقی، شطرنج) می‌روند. اگر ساعت ۶ عصر به یک آلمانی ایمیل کاری بزنید، هیچ شانسی برای دریافت جواب تا صبح فردا نخواهید داشت!"
};
