export const day16Data = {
  title: "روز ۱۶: تسلط بر کلمات پرسشی (W-Fragen) و مصاحبه",
  objective: "امروز یاد می‌گیریم چگونه هر سوالی که در زندگی روزمره و امتحان نیاز داریم را با استفاده از کلمات پرسشی (W-Fragen) بپرسیم. در نهایت، تمرین یک مونولوگ جامع (صحبت تک‌نفره) را برای امتحان‌های A1/A2 آغاز می‌کنیم.",

  grammarData: {
    subtitle: "آشنایی با تمام W-Fragen ها و قوانین طلایی ساخت سوال.",
    content: [
      {
        type: "text",
        title: "۱. کلمات پرسشی طلایی (Die W-Fragen)",
        text: "در ساختار سوالی اطلاعات‌خواه (سوالاتی که با بله/خیر جواب داده نمی‌شوند)، همیشه سوال با یک کلمه W-Frage شروع می‌شود. قانون ثابت: کلمه پرسشی در جایگاه اول، فعل متصرف در جایگاه دوم!"
      },
      {
        type: "table",
        title: "هشت کلمه پرسشی اصلی",
        rows: [
          { de: "Wer? (چه کسی)", fa: "Wer bist du? (تو کی هستی؟)" },
          { de: "Was? (چه چیزی)", fa: "Was machst du? (چه کار می‌کنی؟)" },
          { de: "Wo? (کجا - ثابت)", fa: "Wo wohnst du? (کجا زندگی می‌کنی؟)" },
          { de: "Woher? (از کجا - مبدا)", fa: "Woher kommst du? (اهل کجا هستی؟)" },
          { de: "Wohin? (به کجا - مقصد)", fa: "Wohin gehst du? (به کجا می‌روی؟)" },
          { de: "Wann? (چه‌وقت / کی)", fa: "Wann kommst du? (کی می‌آیی؟)" },
          { de: "Warum? (چرا / به چه دلیل)", fa: "Warum lernst du Deutsch? (چرا آلمانی می‌خوانی؟)" },
          { de: "Wie? (چگونه / چطور)", fa: "Wie geht es dir? (حالت چطور است؟)" }
        ]
      },
      {
        type: "alert",
        title: "تفاوت حساس Wo, Woher, Wohin",
        text: "یکی از اشتباهات رایج زبان‌آموزان ترکیب این سه است:\n- Wo (کجا): برای جای ثابت استفاده می‌شود (Wo arbeiten Sie?).\n- Woher (از کجا): برای مبدأ و ریشه استفاده می‌شود (Woher kommen Sie?).\n- Wohin (به کجا): همیشه نیازمند یک فعل حرکتی است (Wohin fahren Sie?)."
      },
      {
        type: "examples",
        title: "سوالات ترکیبی با Wie",
        items: [
          { de: "Wie viel kostet das?", fa: "این چقدر قیمت دارد؟ (Wie viel = چقدر / برای چیزهای غیرقابل شمارش)" },
          { de: "Wie viele Kinder hast du?", fa: "تو چند (تا) فرزند داری؟ (Wie viele = چند تا / برای چیزهای قابل شمارش)" },
          { de: "Wie lange lernst du Deutsch?", fa: "چه مدت است که آلمانی می‌خوانی؟ (Wie lange = چه مدت)" }
        ]
      },
      {
        type: "text",
        title: "۲. آمادگی برای مصاحبه (Teil 2 Sprechen)",
        text: "بخش دوم آزمون گوته A1 به این شکل است که به شما یک کلمه کلیدی (مثلاً Urlaub) می‌دهند و باید از پارتنر خود یک سوال بپرسید. اگر مسلط به W-Fragen باشید، این بخش برای شما یک شوخی خواهد بود!"
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: تسلط بر پرسش",
        questions: [
          {
            question: "شما می‌خواهید بپرسید «همکار تو کِی به اداره می‌آید؟». کدام سوال از نظر گرامری (جایگاه کلمات) کاملاً صحیح است؟",
            questionDe: "Wie fragt man 'Wann kommt...?' richtig?",
            options: [
              { text: "Wann dein Kollege kommt ins Büro?", isCorrect: false },
              { text: "Wann kommt dein Kollege ins Büro?", isCorrect: true },
              { text: "Kommt wann dein Kollege ins Büro?", isCorrect: false }
            ],
            explanation: "آفرین! قانون طلایی W-Fragen این است: 1. کلمه پرسشی (Wann) 2. فعل صرف شده (kommt) 3. فاعل (dein Kollege). پس گزینه دوم درست است."
          },
          {
            question: "در پاسخ به سوال «Woher kommen Sie?» قطعا از کدام حرف اضافه (Präposition) استفاده می‌کنید؟",
            questionDe: "Welche Präposition passt zu 'Woher'?",
            options: [
              { text: "in", isCorrect: false },
              { text: "nach", isCorrect: false },
              { text: "aus", isCorrect: true }
            ],
            explanation: "دقیقاً! وقتی می‌گوییم Woher (از کجا) همیشه باید با aus (از درون، اهل) جواب بدهیم. เช่น Ich komme aus dem Iran."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "کلمات پرسشی (W-Fragen)",
        words: [
          {
            de: "wer",
            fa: "چه‌کسی",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wer ist dieser Mann?", fa: "این مرد کیست؟" }
            ]
          },
          {
            de: "was",
            fa: "چه‌چیزی (یا چه کاری)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Was trinken Sie gern?", fa: "شما با میل (دوست دارید) چه بنوشید؟" }
            ]
          },
          {
            de: "wo / woher / wohin",
            fa: "کجا / از کجا / به کجا",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wohin fährst du am Wochenende?", fa: "آخر هفته به کجا می‌روی؟" }
            ]
          },
          {
            de: "wann / warum",
            fa: "چه‌وقت / چرا",
            article: "-",
            plural: "-",
            examples: [
              { de: "Warum ist das Baby laut?", fa: "چرا نوزاد پرسروصدا است؟" }
            ]
          },
          {
            de: "wie",
            fa: "چگونه / چطور (در خیلی از اصطلاحات استفاده می‌شود)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wie schreibt man das?", fa: "آدم این را چطور می‌نویسد؟" }
            ]
          }
        ]
      },
      {
        title: "اصطلاحات و ترکیبات پرسشی",
        words: [
          {
            de: "wie viel / wie viele",
            fa: "چقدر / چندتا",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wie viele Sprachen sprichst du?", fa: "تو چند زبان صحبت می‌کنی؟" }
            ]
          },
          {
            de: "wie lange / wie oft",
            fa: "چه مدت / هر چند وقت یک‌بار",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wie oft gehst du ins Fitnessstudio?", fa: "هر چند وقت یک‌بار به باشگاه می‌روی؟" }
            ]
          },
          {
            de: "welcher / welche / welches",
            fa: "کدام (برای M / F / N)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Welches Buch liest du?", fa: "کدام کتاب را می‌خوانی؟" }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Interview mit Anna\n\nReporter: Hallo Anna! Wer bist du und woher kommst du?\nAnna: Hallo, ich bin Anna und ich komme aus der Schweiz. Ich wohne jetzt in Berlin.\nReporter: Berlin ist toll! Warum wohnst du hier und was machst du von Beruf?\nAnna: Ich arbeite als Lehrerin in einer Sprachschule. Ich wohne hier, weil (زیرا) mein Mann auch hier arbeitet.\nReporter: Wie viele Stunden arbeitest du jeden Tag?\nAnna: Ich arbeite acht Stunden. Am Abend bin ich oft müde, aber ich liebe meinen Job.\nReporter: Wohin fahrt ihr dieses Jahr in den Urlaub?\nAnna: Wir fliegen nach Italien. Das Wetter ist dort sehr schön.",
      questions: [
        { question: "خبرنگار (Reporter) با چه سوالی به دنبال ریشه و ملیت آنا می‌گردد؟" },
        { question: "چرا آنا در برلین زندگی می‌کند؟" },
        { question: "آنا هر روز چند ساعت کار می‌کند؟ (کدام سوال پرسشی باعث دریافت این جواب شد؟)" },
        { question: "خبرنگار از چه کلمه پرسشی برای پرسیدن درباره‌ی مقصد سفر (Italien) استفاده کرده است؟" }
      ]
    }
  ],

  writing: [
    {
      title: "طراحی سوالات مصاحبه",
      prompt: "تصور کنید یک دوست جدید پیدا کرده‌اید. ۵ سوال کامل با کلمات پرسشی مختلف (Wo, Woher, Was, Wie oft, Wann) بنویسید تا او را بهتر بشناسید.",
      steps: [
        {
          title: "سوالات مکانی",
          text: "یک سوال درباره محل زندگی (Wo) و یک سوال درباره وطن (Woher) بپرسید.",
          example: { de: "Wo wohnst du jetzt? Und woher kommst du eigentlich?", fa: "الان کجا زندگی می‌کنی؟ و در واقع اهل کجا هستی؟" }
        },
        {
          title: "سوالات شغلی و روتین",
          text: "با Was درباره شغل او، و با Wann درباره ساعت بیدار شدنش بپرسید.",
          example: { de: "Was machst du von Beruf? Wann stehst du morgens auf?", fa: "از نظر شغلی چه کار می‌کنی؟ صبح‌ها کِی بیدار می‌شوی؟" }
        },
        {
          title: "عادت‌ها",
          text: "با Wie oft بپرسید هر چند وقت یک‌بار ورزش می‌کند.",
          example: { de: "Wie oft machst du Sport in der Woche?", fa: "در هفته هر چند وقت یک‌بار ورزش می‌کنی؟" }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. رگبار سوالات!",
      source: "Basic German Question Words",
      link: "https://www.youtube.com/watch?v=7euPPqMFnqE",
      instructions: "تمرین تشخیص پرسش:\n۱. دقت کنید که وقتی آلمانی‌ها سوالی با W-Frage می‌پرسند، تن صدایشان در انتهای جمله پایین می‌آید (برخلاف سوالاتِ بله/خیر که تن صدا بالا می‌رود).\n۲. صدای ویدیو را متوقف کنید و تلفظ دقیق کلمات پرسشی را حداقل سه بار تقلید کنید."
    },
    {
      title: "۲. سوال و جواب در مصاحبه روزمره",
      source: "Daily sentences A1",
      link: "https://www.youtube.com/watch?v=UHIcV033osU",
      instructions: "تمرین واکنش سریع:\n۱. ویدیو را تماشا کنید. قبل از اینکه شخصِ توی ویدیو جواب سوال مطرح شده را بدهد، شما با یک کلمه یا یک جمله بسیار کوتاه به آن سوال (بر اساس زندگی خودتان) پاسخ دهید."
    }
  ],

  speaking: [
    {
      title: "بخش دوم آزمون A1 (تک کارت‌ها)",
      pattern: "[W-Frage] + [Verb] + [Subjekt] + [Rest]?",
      exercise: "تصور کنید در آزمون شفاهی هستید. روی ۳ کارت کلماتِ (Wochenende, lernen, Sport) نوشته شده است. جلوی آینه با صدای بلند برای هر کدام یک سوال بسازید. مثال:\nکارت Urlaub ➔ Wann machst du Urlaub?\nکارت Deutsch ➔ Warum lernst du Deutsch?"
    },
    {
      title: "مونولوگ معرفی و روتین (شروع)",
      pattern: "Hallo, ich heiße... Ich stehe um... auf.",
      exercise: "سعی کنید همه دانسته‌های خود را ترکیب کنید. گوشی را در حالت ضبط صدا بگذارید. خودتان را کاملاً معرفی کنید (اسم، سن، ملیت، محل زندگی، شغل) و ۳ جمله هم در مورد روتین صبحگاهی خود (بیدار شدن، صبحانه خوردن، رفتن سر کار) به صورت یک متنِ پیوسته بگویید."
    }
  ],

  cultureTip: "مستقیم بودن آلمانی‌ها در سوال پرسیدن: در فرهنگ کشورهای آلمانی‌زبان، پرسیدن سوالات صریح و مستقیم (Direktheit) معمولاً نشانه‌ی شفافیت و علاقه‌مندی است، نه بی‌ادبی. اگر کسی از شما می‌پرسد «Warum machst du das so?» (چرا این کار را این‌طور انجام می‌دهی؟) معمولاً قصد توهین ندارد، بلکه صرفاً دلیل منطقی عمل شما را می‌خواهد بداند! البته، سوال کردن درباره میزان حقوق (Gehalt) در آلمان تا حد زیادی یک تابو (Tabu) محسوب می‌شود."
};
