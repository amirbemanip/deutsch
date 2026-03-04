export const day42Data = {
  title: "روز ۴۲: مسیر حرفه‌ای، شغل رویایی و برنامه‌ریزی برای آینده",
  objective: "امروز یاد می‌گیریم چطور داستان کاری خودمان (Lebenslauf) را از گذشته تا امروز به زبان آلمانی تعریف کنیم. درباره شغل رویایی (Traumjob)، نقاط قوت و ضعف صحبت می‌کنیم و یاد می‌گیریم چطور برنامه‌های آینده را با اطمینان بیان کنیم.",

  grammarData: {
    subtitle: "استفاده از قیدهای زمانی (zuerst, danach, inzwischen) و ساختار Konjunktiv II (wäre/hätte).",
    content: [
      {
        type: "text",
        title: "۱. تعریف مسیر زندگی و کاری (Der Lebenslauf)",
        text: "برای اینکه داستان زندگی یا کار خود را تعریف کنید، باید یک خط زمانی (Timeline) در صحبت‌هایتان بسازید."
      },
      {
        type: "examples",
        title: "کلمات طلاییِ خط زمانی",
        items: [
          { de: "Zuerst...", fa: "در ابتدا... (Zuerst habe ich im Iran studiert)." },
          { de: "Danach...", fa: "بعد از آن... (Danach habe ich in einer Firma gearbeitet)." },
          { de: "Später...", fa: "بعداً... (Später bin ich nach Deutschland gekommen)." },
          { de: "Inzwischen... / Mittlerweile...", fa: "در این حین / در حال حاضر... (Inzwischen lerne ich Deutsch)." }
        ]
      },
      {
        type: "text",
        title: "۲. صحبت درباره شغل رویایی (Der Traumjob)",
        text: "وقتی درباره چیزی که هنوز واقعی نیست (شغل رویایی، آرزو) صحبت می‌کنید، باید از Konjunktiv II استفاده کنید."
      },
      {
        type: "examples",
        title: "ساختارهای آرزو",
        items: [
          { de: "Mein Traumjob wäre ein Job in der IT.", fa: "شغل رویایی من شغلی در IT خواهد بود (فعل sein -> wäre)." },
          { de: "Ich hätte gern mehr Verantwortung.", fa: "من با کمال میل مسئولیت بیشتری می‌داشتم (فعل haben -> hätte)." },
          { de: "Ich würde gern in einem internationalen Team arbeiten.", fa: "من با کمال میل می‌خواهم در یک تیم بین‌المللی کار کنم (فعل würde + مصدر در آخر)." }
        ]
      },
      {
        type: "text",
        title: "۳. برنامه‌ریزی برای آینده (Zukunftspläne)",
        text: "در سطح B1، به جای اینکه دائم بگویید «Ich möchte»، از ساختارهای قوی‌تری برای بیان قصد و هدف استفاده کنید."
      },
      {
        type: "examples",
        title: "بیان قصد و برنامه",
        items: [
          { de: "Ich habe vor, die B1-Prüfung zu machen.", fa: "من قصد دارم که آزمون B1 را بدهم (ساختار haben vor + zu)." },
          { de: "Ich werde wahrscheinlich ein Praktikum machen.", fa: "من احتمالاً یک دوره کارآموزی را انجام خواهم داد (استفاده از Futur I)." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: زمان‌ها و آرزوها",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «در ابتدا من کارآموزی کردم، سپس کار پیدا کردم.» کدام کلمات برای اتصال بهترند؟",
            questionDe: "Welche Wörter passen am besten?",
            options: [
              { text: "Aber / Und", isCorrect: false },
              { text: "Zuerst / Danach", isCorrect: true },
              { text: "Weil / Obwohl", isCorrect: false }
            ],
            explanation: "آفرین! Zuerst (در ابتدا) و Danach (سپس) بهترین قیدها برای ایجاد یک توالی زمانی (Chronologie) هستند."
          },
          {
            question: "برای بیان «من قصد دارم که...» کدام ساختار از نظر گرامری درست است؟",
            questionDe: "Wie drückt man einen Plan aus?",
            options: [
              { text: "Ich habe vor, Deutsch zu lernen.", isCorrect: true },
              { text: "Ich habe vor Deutsch lernen.", isCorrect: false },
              { text: "Ich habe vor, dass Deutsch lerne.", isCorrect: false }
            ],
            explanation: "دقیقاً! فعل جداشدنی vorhaben همیشه به یک مصدر با zu (Infinitiv mit zu) در انتهای جمله نیاز دارد."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "مسیر حرفه‌ای و کار",
        words: [
          {
            de: "die Ausbildung",
            fa: "آموزش حرفه‌ای / کارآموزی تخصصی (اغلب 3 ساله)",
            article: "die",
            plural: "die Ausbildungen",
            examples: [
              { de: "Ich habe eine Ausbildung als Elektriker gemacht.", fa: "من یک دوره آموزش حرفه‌ای به عنوان برق‌کار گذراندم." }
            ]
          },
          {
            de: "die Berufserfahrung",
            fa: "تجربه کاری / سابقه کار",
            article: "die",
            plural: "die Berufserfahrungen",
            examples: [
              { de: "Ich habe fünf Jahre Berufserfahrung in diesem Bereich.", fa: "من پنج سال سابقه کار در این زمینه دارم." }
            ]
          },
          {
            de: "sich bewerben",
            fa: "درخواست کار دادن (اپلای کردن)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Er bewirbt sich um eine Stelle bei Siemens.", fa: "او برای یک موقعیت شغلی در زیمنس درخواست می‌دهد." }
            ]
          },
          {
            de: "die Weiterbildung",
            fa: "آموزش تکمیلی (ضمن خدمت)",
            article: "die",
            plural: "die Weiterbildungen",
            examples: [
              { de: "Ich mache am Wochenende eine Weiterbildung.", fa: "من آخر هفته‌ها یک آموزش تکمیلی می‌گذرانم." }
            ]
          }
        ]
      },
      {
        title: "نقاط قوت، ضعف و آینده",
        words: [
          {
            de: "die Stärke",
            fa: "نقطه قوت",
            article: "die",
            plural: "die Stärken",
            examples: [
              { de: "Meine größte Stärke ist meine Pünktlichkeit.", fa: "بزرگترین نقطه قوت من وقت‌شناسی‌ام است." }
            ]
          },
          {
            de: "die Schwäche",
            fa: "نقطه ضعف",
            article: "die",
            plural: "die Schwächen",
            examples: [
              { de: "Meine Schwäche ist manchmal meine Ungeduld.", fa: "نقطه ضعف من گاهی بی‌صبری‌ام است." }
            ]
          },
          {
            de: "vorhaben",
            fa: "قصد داشتن / برنامه داشتن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Was hast du am Wochenende vor?", fa: "آخر هفته چه قصدی (برنامه‌ای) داری؟" }
            ]
          },
          {
            de: "wahrscheinlich",
            fa: "احتمالاً",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich werde wahrscheinlich im IT-Bereich bleiben.", fa: "من احتمالاً در زمینه IT باقی خواهم ماند." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Mein beruflicher Weg und mein Traumjob\n\nZuerst habe ich in meinem Heimatland Informatik studiert. Danach habe ich zwei Jahre Berufserfahrung als Programmierer gesammelt. Später bin ich nach Deutschland gekommen, um eine neue Sprache zu lernen und neue Chancen zu finden. Inzwischen lerne ich fleißig Deutsch und habe bereits das B1-Niveau fast erreicht.\nMein Traumjob wäre Softwareentwickler in einer internationalen Firma. Eine meiner großen Stärken ist das logische Denken. Außerdem arbeite ich gerne im Team. Meine Schwäche ist manchmal die deutsche Sprache, aber ich lerne jeden Tag dazu.\nIn den nächsten Monaten habe ich vor, mich bei einigen Firmen zu bewerben. Ich werde wahrscheinlich auch eine Weiterbildung im Bereich Künstliche Intelligenz machen, damit meine Chancen auf dem deutschen Arbeitsmarkt steigen.",
      questions: [
        { question: "نویسنده در ابتدا در کشور زادگاهش چه خوانده است؟ (گامِ Zuerst)" },
        { question: "شغل رویایی او چیست؟ (با استفاده از wäre)" },
        { question: "طبق متن، بزرگترین نقطه قوت (Stärke) و نقطه ضعف (Schwäche) او چیست؟" },
        { question: "او در ماه‌های آینده چه قصدی دارد؟ (پاسخ با ساختار: Er hat vor...)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن: رزومه شفاهی من و شغل رویایی",
      prompt: "در یک پاراگراف کوتاه (حدود ۸ خط)، داستان کاری خود را بنویسید (از zuerst تا inzwischen). سپس بگویید شغل رویایی شما چیست (wäre) و قصد دارید در ۶ ماه آینده چه کنید (Ich habe vor...).",
      steps: [
        {
          title: "گذشته تا حال (خط زمانی)",
          text: "استفاده از Zuerst... Danach... Inzwischen...",
          example: { de: "Zuerst habe ich im Iran studiert. Danach habe ich als Lehrer gearbeitet. Inzwischen lebe ich in Deutschland.", fa: "در ابتدا من در ایران درس خواندم. سپس به عنوان معلم کار کردم. در حال حاضر من در آلمان زندگی می‌کنم." }
        },
        {
          title: "شغل رویایی",
          text: "استفاده از Mein Traumjob wäre...",
          example: { de: "Mein Traumjob wäre Projektmanager. Dafür brauche ich gutes Deutsch.", fa: "شغل رویایی من مدیر پروژه خواهد بود. برای آن من به آلمانی خوب نیاز دارم." }
        },
        {
          title: "برنامه‌های آینده",
          text: "استفاده از habe vor, ... zu...",
          example: { de: "Ich habe vor, die B1-Prüfung zu bestehen und mich dann zu bewerben.", fa: "من قصد دارم آزمون B1 را قبول شوم و سپس اپلای کنم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. پادکست رزومه مستمر",
      source: "Berufliche Entwicklung (B1)",
      link: "https://www.youtube.com/watch?v=Rz5DW0pRtIg",
      instructions: "تمرین دریافت ترتیب زمانی:\nهنگام توصیف رزومه شفاهی (مخصوصا در مصاحبه کاری)، به کلمات ربط دهنده (später، dann، im Anschluss) که داستان طرف مقابل را به هم می‌چسبانند دقت کنید."
    },
    {
      title: "۲. مصاحبه کاری خیالی",
      source: "Vorstellungsgespräch: Stärken und Schwächen",
      link: "https://www.youtube.com/watch?v=NqUscdS9xkc",
      instructions: "تمرین شنیدن نقاط قوت:\nلیست کلمات صفت مربوط به شخصیت را هنگام تماشای مصاحبه یادداشت کنید: zuverlässig (قابل اعتماد)، pünktlich (وقت‌شناس)، teamfähig (اهل کار گروهی)."
    }
  ],

  speaking: [
    {
      title: "مونولوگ: معرفی تخصصی (Vorstellungsgespräch)",
      pattern: "Mein Name ist... Zuerst... Danach... Inzwischen... Mein Ziel ist...",
      exercise: "تصور کنید در یک مصاحبه کاری (Vorstellungsgespräch) هستید و مسئول استخدام می‌گوید: «Erzählen Sie etwas über sich» (درباره خودتان بگویید). ۲ دقیقه کامل و حرفه‌ای از گذشته، حال و آینده خود صحبت کنید."
    },
    {
      title: "دیالوگ: برنامه‌ریزی یک پروژه آینده",
      pattern: "Ich habe vor... / Was hältst du davon... / Wir könnten...",
      exercise: "با یک همکلاسی (یا با خودتان) یک برنامه مشترک برای یافتن کار بریزید.\nA: «من قصد دارم فردا رزومه‌ام را بنویسم. تو چطور؟»\nB: «ایده خوبی است (Gute Idee). ما می‌توانیم (wir könnten) با هم آگهی‌ها را چک کنیم.»"
    }
  ],

  cultureTip: "مفهوم Ausbildung (آموزش حرفه‌ای دوگانه) در آلمان: در آلمان حتماً نیاز نیست به دانشگاه بروید تا شغل و درآمد خوبی داشته باشید! سیستم «Duale Ausbildung» (آموزش سیستم دوگانه) یعنی ۳ روز در هفته کارآموزی در یک شرکت و ۲ روز درس در مدرسه فنی حرفه‌ای. این دوره‌ها حدود ۳ سال طول می‌کشند (از نانوایی تا برنامه‌نویسی آی‌تی). داشتن مدرک پایان Ausbildung در آلمان اعتبار بسیار بالایی دارد و بسیاری از مهاجران با ورود به این دوره‌ها (Azubi شدن) بسیار سریع وارد بازار کار با ثبات می‌شوند."
};
