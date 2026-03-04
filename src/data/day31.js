export const day31Data = {
  title: "روز ۳۱: استاد شدن در Small Talk و کلمات ربطِ قیدی",
  objective: "امروز یاد می‌گیریم چطور با همکاران و دوستان در محیط‌های غیررسمی (مثل کافه) اسمال‌تاکِ حرفه‌ای داشته باشیم. همچنین ۵ کلمه ربطِ قیدی جدید یاد می‌گیریم که مانند چسب، جملاتِ تکه‌تکه شما را به یک متن روان B1 تبدیل می‌کنند.",

  grammarData: {
    subtitle: "توسعه کلمات ربط جایگاه ۱ (Adverbiale Konnektoren).",
    content: [
      {
        type: "text",
        title: "۱. کلمات ربط قیدی (Adverbiale Konnektoren)",
        text: "همانطور که قبلاً یاد گرفتید، بعضی از کلمات ربط (مثل deshalb, trotzdem, außerdem) در ابتدای جمله دوم (جایگاه ۱) قرار می‌گیرند و بلافاصله بعد از آن‌ها فعل در جایگاه ۲ می‌آید. امروز ۵ کلمه بسیار پرکاربرد دیگر از این خانواده را یاد می‌گیریم."
      },
      {
        type: "table",
        title: "۵ کنکتور طلاییِ سطح B1",
        rows: [
          { de: "also", fa: "پس / بنابراین / در نتیجه (غیررسمی‌تر از deshalb)" },
          { de: "dann", fa: "سپس / بعدش (برای بیان ترتیب زمان)" },
          { de: "danach", fa: "پس از آن (مترادف dann، اما کمی حرفه‌ای‌تر)" },
          { de: "jedoch", fa: "اما / با این حال (نسخه رسمی‌ترِ aber. این کلمه جایگاه ۱ می‌گیرد!)" },
          { de: "sonst", fa: "وگرنه / در غیر این صورت" }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های طلایی",
        items: [
          { de: "Ich habe morgen frei, also können wir uns treffen.", fa: "من فردا وقتِ آزاد دارم، پس (بنابراین) می‌توانیم همدیگر را ببینیم." },
          { de: "Wir essen zusammen, dann sehen wir einen Film.", fa: "ما با هم غذا می‌خوریم، سپس یک فیلم می‌بینیم." },
          { de: "Er hat viel gelernt, jedoch hat er die Prüfung nicht bestanden.", fa: "او خیلی درس خواند، با این حال در امتحان قبول نشد. (مقایسه با aber: Er hat viel gelernt, aber er hat die Prüfung nicht bestanden. کلمه aber در جایگاه صفر است)." },
          { de: "Beeil dich, sonst verpassen wir den Bus!", fa: "عجله کن، وگرنه اتوبوس را از دست می‌دهیم! (ساختار: دستور + کاما + sonst + فعل)." }
        ]
      },
      {
        type: "text",
        title: "۲. هنرِ گپ زدن (Small Talk)",
        text: "در آلمان، مکالمات کوتاه و دوستانه در محل کار، سوپرمارکت یا کافه بسیار مهم است. برای اینکه ماشینی به نظر نرسید، از کلماتی مثل «ehrlich gesagt» (صادقانه بگویم)، «eigentlich» (در واقع) و «Lass uns...» (بیا تا...) استفاده کنید."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: کنکتورها",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «من پول ندارم، (وگرنه) ماشین را می‌خریدم». کدام جمله درست است؟",
            questionDe: "Welcher Satz ist grammatikalisch korrekt?",
            options: [
              { text: "Ich habe kein Geld, sonst ich kaufe das Auto.", isCorrect: false },
              { text: "Ich habe kein Geld, sonst kaufe ich das Auto.", isCorrect: true },
              { text: "Ich habe kein Geld, sonst kaufe das Auto ich.", isCorrect: false }
            ],
            explanation: "آفرین! sonst در جایگاه 1 می‌نشیند و فعل kaufe بلافاصله بعد از آن در جایگاه 2 قرار می‌گیرد."
          },
          {
            question: "تفاوت aber و jedoch در چیست؟",
            questionDe: "Was ist der Unterschied?",
            options: [
              { text: "هیچ تفاوتی ندارند.", isCorrect: false },
              { text: "jedoch جایگاه 1 می‌گیرد (فعل می‌آید جایگاه 2)، اما aber جایگاه 0 می‌گیرد.", isCorrect: true },
              { text: "jedoch فعل را به آخر جمله می‌فرستد.", isCorrect: false }
            ],
            explanation: "کاملاً درست است! Er ist klug, aber er ist faul. / Er ist klug, jedoch ist er faul. (jedoch بسیار رسمی‌تر و زیباتر برای رایتینگ B1 است)."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "عبارات Small Talk (اسمال‌تاک)",
        words: [
          {
            de: "Wie läuft dein Tag?",
            fa: "روزت چطور پیش می‌رود؟ / روزت چطوره؟",
            article: "-",
            plural: "-",
            examples: [
              { de: "Hallo Anna! Wie läuft dein Tag bis jetzt?", fa: "سلام آنا! روزت تا الان چطور پیش می‌رود؟" }
            ]
          },
          {
            de: "viel um die Ohren haben",
            fa: "سرم خیلی شلوغ است (گوش‌هایم پُر از کار است!)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich habe diese Woche viel um die Ohren.", fa: "من این هفته سرم خیلی شلوغ است. (یک اصطلاح کاملاً بومی)." }
            ]
          },
          {
            de: "Was steht heute noch an?",
            fa: "امروز چه برنامه‌های دیگری باقی مانده؟ (چه چیزی در انتظار است؟)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Was steht heute bei dir noch an?", fa: "امروز چه برنامه‌های دیگری داری؟" }
            ]
          },
          {
            de: "eigentlich ganz gut",
            fa: "در واقع کاملا خوب / روی‌هم‌رفته بد نیست",
            article: "-",
            plural: "-",
            examples: [
              { de: "Eigentlich ganz gut, danke der Nachfrage.", fa: "در واقع کاملاً خوب، ممنون که پرسیدی." }
            ]
          }
        ]
      },
      {
        title: "کلمات ربط و ساختار",
        words: [
          {
            de: "also",
            fa: "پس / بنابراین",
            article: "-",
            plural: "-",
            examples: [
              { de: "Es regnet, also bleibe ich zu Hause.", fa: "باران می‌بارد، پس در خانه می‌مانم." }
            ]
          },
          {
            de: "jedoch",
            fa: "با این حال / اما (רسمی)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich hatte Zeit, jedoch hatte ich keine Lust.", fa: "من وقت داشتم، اما (با این حال) حوصله نداشتم." }
            ]
          },
          {
            de: "sonst",
            fa: "وگرنه",
            article: "-",
            plural: "-",
            examples: [
              { de: "Trink Wasser, sonst bekommst du Kopfschmerzen.", fa: "آب بنوش، وگرنه سردرد می‌گیری." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Gespräch im Café\n\nMarkus: Hey Sarah, schön dich zu sehen! Wie läuft dein Tag bis jetzt?\nSarah: Hallo Markus! Eigentlich ganz gut. Am Morgen hatte ich ein wichtiges Meeting, also war ich ein bisschen nervös. Jetzt habe ich aber Pause. Und bei dir? Was steht heute noch an?\nMarkus: Ehrlich gesagt, habe ich diese Woche viel um die Ohren. Mein Chef hat mir ein neues Projekt gegeben, jedoch fehlen mir noch viele Informationen. Ich muss heute noch drei Berichte schreiben, sonst bekomme ich Probleme mit den Deadlines.\nSarah: Das klingt stressig. Lass uns erstmal Kaffee trinken, danach siehst du alles positiver!\nMarkus: Gute Idee. Ich hatte Lust auf einen starken Espresso.",
      questions: [
        { question: "چرا سارا در هنگام صبح کمی عصبی/مضطرب بود؟ (از also استفاده شده)" },
        { question: "چرا مارکوس در این هفته سرش خیلی شلوغ است (viel um die Ohren)? " },
        { question: "مشکل مارکوس با پروژه جدید چیست؟ (به استفاده از jedoch دقت کنید)" },
        { question: "چرا مارکوس باید امروز سه گزارش بنویسد؟ (اگر ننویسد چه می‌شود؟ با sonst جواب دهید)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن یک دیالوگ Small Talk",
      prompt: "فرض کنید با یک همکار سابق در سوپرمارکت روبرو می‌شوید. یک مکالمه ۶ خطی بنویسید که شامل احوال‌پرسی، پرسیدن از برنامه‌های امروز (Was steht an?) و استفاده از sonst و also باشد.",
      steps: [
        {
          title: "احوال‌پرسی پرانرژی",
          text: "استفاده از عبارت Schön dich zu sehen.",
          example: { de: "Hallo Ali! Schön dich zu sehen. Wie läuft dein Tag?", fa: "سلام علی! از دیدنت خوشحالم. روزت چطور پیش می‌رود؟" }
        },
        {
          title: "پاسخ دادن و استفاده از also",
          text: "بیان یک موقعیت و نتیجه‌گیری.",
          example: { de: "Ganz gut, danke. Ich habe heute Urlaub, also bin ich sehr entspannt.", fa: "کاملاً خوب، ممنون. من امروز مرخصی دارم، پس خیلی ریلکسم." }
        },
        {
          title: "خداحافظی با دلیل (sonst)",
          text: "استفاده از sonst برای نشان دادن عجله داشتن.",
          example: { de: "Was steht bei dir heute noch an? Ich muss schnell gehen, sonst schließt der Supermarkt.", fa: "امروز چه برنامه‌ای داری؟ من باید سریع بروم، وگرنه سوپرمارکت بسته می‌شود." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. عبارات ثابت در کافه",
      source: "Dialogue in a Café B1",
      link: "https://www.youtube.com/watch?v=Ah3c_KkcTEQ",
      instructions: "تمرین تقلید لحن (Intonation):\nبه لحن کش‌دار آلمانی‌ها هنگام گفتن «Eigentlich...» (آیی‌گنت‌لیش...) یا «Ehrlich gesagt...» دقت کنید. این کلمات را تند و ماشینی نگویید. آن‌ها کلمات پُرکننده‌اند تا شما فکر کنید."
    },
    {
      title: "۲. سوال و جواب سریع",
      source: "100 Q&A Daily Routine",
      link: "https://www.youtube.com/watch?v=pRaq_s-U1VA",
      instructions: "تمرین واکنش سریع:\nوقتی گوینده می‌پرسد «Was steht heute bei dir an?»، ویدیو را متوقف کنید و در ۲ ثانیه برنامه‌ی واقعی امروزتان را به آلمانی بگویید (Ich muss noch einkaufen und dann lernen)."
    }
  ],

  speaking: [
    {
      title: "مونولوگ: برنامه امروز من و استفاده از sonst",
      pattern: "Heute muss ich..., sonst...",
      exercise: "سنگین‌ترین برنامه کاری یا تحصیلی خود را تصور کنید و آن را با صدای بلند شرح دهید:\nIch muss heute viel arbeiten, jedoch habe ich auch einen Arzttermin. Deshalb muss ich mich beeilen, sonst komme ich zu spät zum Arzt."
    },
    {
      title: "نقش‌آفرینی: دیدار در کافه",
      pattern: "Lass uns... Ich habe viel um die Ohren...",
      exercise: "تصور کنید یک دوست آلمانی با شما تماس می‌گیرد:\n- دوست: Hey, hast du Zeit für einen Kaffee?\n- شما: (صادقانه بگویم سرم شلوغ است، اما فردا می‌توانیم):\nEhrlich gesagt habe ich heute viel um die Ohren. Aber lass uns morgen treffen. Ich habe morgen Nachmittag frei!"
    }
  ],

  cultureTip: "مفهوم Small Talk در محل کار (Kaffeeklatsch): آلمانی‌ها در محل کار معمولاً بسیار متمرکز (sachlich) هستند، اما در زمان استراحت یا کنار دستگاه قهوه‌ساز، Small Talk کوتاه بسیار رایج است. نپرسیدن درباره‌ی روز همکارتان (مثلاً بعد از پایان یک جلسه طولانی) می‌تواند بی‌ادبانه تلقی شود. البته موضوعات Small Talk آلمانی‌ها معمولاً محدود به آب‌وهوا، ترافیک، سفرهای آخر هفته و ورزش است؛ هرگز در Small Talk با همکاران درباره مسائل مالی، سیاست، یا مشکلات عمیق شخصی صحبت نکنید!"
};
