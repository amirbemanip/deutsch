export const day13Data = {
  title: "روز ۱۳: سفر، تعطیلات و کارهای خانه",
  objective: "امروز یاد می‌گیریم درباره‌ی بهترین روزهای سال (تعطیلات و سفر) و همچنین بدترین روزها (کارهای خانه و نظافت) صحبت کنیم. همچنین با فعل مُدال پرکاربرد «müssen» (مجبور بودن / باید) جمله‌سازی خواهیم کرد.",

  grammarData: {
    subtitle: "این درس شامل واژگان سفر، کارهای منزل و کاربرد فعل مُدال müssen است.",
    content: [
      {
        type: "text",
        title: "۱. سفر و تعطیلات (Urlaub und Reise)",
        text: "برای گفتن اینکه به کجا سفر می‌کنید، حرف اضافه بسیار مهم است. برای کشورها و شهرها (بدون آرتیکل) همیشه از nach استفاده می‌کنیم. اما برای جاهای طبیعی معمولاً in یا an کاربرد دارد."
      },
      {
        type: "examples",
        title: "جملات جادویی سفر",
        items: [
          { de: "Ich fahre nach Deutschland.", fa: "من به آلمان می‌روم (با زمینی/قطار)." },
          { de: "Wir fliegen nach Paris.", fa: "ما به پاریس پرواز می‌کنیم." },
          { de: "Ich mache Urlaub am Meer.", fa: "من در کنار دریا تعطیلات می‌گذرانم." },
          { de: "Sie fahren in die Berge.", fa: "آن‌ها به کوهستان می‌روند." }
        ]
      },
      {
        type: "text",
        title: "۲. کارهای خانه (Die Hausarbeit)",
        text: "کارهای خانه در آلمان بسیار سیستماتیک است. تفکیک زباله (Mülltrennung) و نظافت هفتگی از واجبات زندگی در آنجاست."
      },
      {
        type: "alert",
        title: "تفاوت Putzen، Waschen و Spülen",
        text: "در آلمانی برای «شستن و تمیزکردن» افعال دقیقی داریم:\n- putzen: تمیز کردن کلی یا پاک کردن سطوح (das Haus putzen)\n- waschen: شستن با آب و مواد شوینده - معمولاً برای لباس یا بدن (die Wäsche waschen)\n- spülen: آبکشی کردن یا شستن ظرف‌ها (das Geschirr spülen)\n- saugen: جاروبرقی کشیدن (Staub saugen)"
      },
      {
        type: "text",
        title: "۳. فعل مُدال müssen (مجبور بودن / باید)",
        text: "این فعل نشان‌دهنده یک اجبار یا ضرورت صددرصدی است. جایگاه آن مانند بقیه افعال مُدال است: فعل müssen در جایگاه دوم صرف می‌شود و فعل اصلی به صورت مصدر (Infinitiv) به انتهای جمله پرتاب می‌شود."
      },
      {
        type: "table",
        title: "صرف فعل müssen",
        rows: [
          { de: "ich", fa: "muss (حرف ü تبدیل به u می‌شود!)" },
          { de: "du", fa: "musst" },
          { de: "er/sie/es", fa: "muss" },
          { de: "wir/sie/Sie", fa: "müssen" },
          { de: "ihr", fa: "müsst" }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های müssen",
        items: [
          { de: "Ich muss heute das Zimmer aufräumen.", fa: "من باید امروز اتاق را مرتب کنم." },
          { de: "Wir müssen den Müll rausbringen.", fa: "ما باید زباله‌ها را بیرون ببریم." },
          { de: "Er muss für die Prüfung lernen.", fa: "او باید برای امتحان درس بخواند." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: سفر و اجبار",
        questions: [
          {
            question: "شما می‌خواهید بگویید «ما باید روز جمعه به برلین سفر کنیم». جمله صحیح با müssen کدام است؟",
            questionDe: "Wie sagt man 'ما باید روز جمعه به برلین سفر کنیم'?",
            options: [
              { text: "Wir reisen müssen am Freitag nach Berlin.", isCorrect: false },
              { text: "Wir müssen am Freitag nach Berlin reisen.", isCorrect: true },
              { text: "Wir mussen am Freitag reisen nach Berlin.", isCorrect: false }
            ],
            explanation: "آفرین! müssen برای wir می‌شود müssen، در جایگاه دوم می‌نشیند و فعل اصلی (reisen) دست‌نخورده به آخر جمله می‌رود."
          },
          {
            question: "برای شستن لباس‌ها در آلمانی از کدام ترکیب استفاده می‌شود؟",
            questionDe: "Welches Verb nutzt man für Kleidung?",
            options: [
              { text: "die Wäsche spülen", isCorrect: false },
              { text: "die Wäsche putzen", isCorrect: false },
              { text: "die Wäsche waschen", isCorrect: true }
            ],
            explanation: "دقیقاً! برای لباس (die Wäsche) از فعل waschen استفاده می‌کنیم. spülen برای ظرف‌ها و putzen برای سطوح یا کل خانه است."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "تعطیلات و سفر (Urlaub und Reise)",
        words: [
          {
            de: "der Urlaub",
            fa: "تعطیلات",
            article: "der",
            plural: "die Urlaube",
            examples: [
              { de: "Ich mache im Sommer Urlaub in Spanien.", fa: "من در تابستان در اسپانیا تعطیلات می‌گذرانم." }
            ]
          },
          {
            de: "die Reise",
            fa: "سفر",
            article: "die",
            plural: "die Reisen",
            examples: [
              { de: "Die Reise nach Berlin war sehr schön.", fa: "سفر به برلین بسیار زیبا بود." }
            ]
          },
          {
            de: "der Koffer / der Rucksack",
            fa: "چمدان / کوله‌پشتی",
            article: "der / der",
            plural: "die Koffer / die Rucksäcke",
            examples: [
              { de: "Mein Koffer ist zu schwer.", fa: "چمدان من خیلی سنگین است." }
            ]
          },
          {
            de: "das Hotel / der Strand",
            fa: "هتل / ساحل",
            article: "das / der",
            plural: "die Hotels / die Strände",
            examples: [
              { de: "Wir schlafen in einem schönen Hotel am Strand.", fa: "ما در یک هتل زیبا در ساحل می‌خوابیم." }
            ]
          },
          {
            de: "die Sehenswürdigkeit",
            fa: "جاذبه‌ی گردشگری / دیدنی‌ها",
            article: "die",
            plural: "die Sehenswürdigkeiten",
            examples: [
              { de: "Wir besichtigen viele Sehenswürdigkeiten.", fa: "ما از جاذبه‌های گردشگری زیادی بازدید می‌کنیم." }
            ]
          }
        ]
      },
      {
        title: "کارهای خانه (Die Hausarbeit)",
        words: [
          {
            de: "aufräumen",
            fa: "مرتب/جمع‌وجور کردن (فعل جداشدنی)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich muss mein Zimmer aufräumen.", fa: "من باید اتاقم را مرتب کنم." }
            ]
          },
          {
            de: "putzen",
            fa: "تمیز کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Am Samstag putzen wir das ganze Haus.", fa: "روز شنبه ما کل خانه را تمیز می‌کنیم." }
            ]
          },
          {
            de: "Staub saugen / Staub wischen",
            fa: "جاروبرقی کشیدن / گردگیری کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Er saugt Staub im Wohnzimmer.", fa: "او در اتاق نشیمن جاروبرقی می‌کشد." }
            ]
          },
          {
            de: "den Boden wischen",
            fa: "زمین را طی کشیدن/شستن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Sie wischt den Boden in der Küche.", fa: "او در آشپزخانه زمین را طی می‌کشد." }
            ]
          },
          {
            de: "das Geschirr spülen",
            fa: "ظرف‌ها را شستن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Nach dem Essen muss ich das Geschirr spülen.", fa: "بعد از غذا من باید ظرف‌ها را بشویم." }
            ]
          },
          {
            de: "die Wäsche waschen",
            fa: "لباس (چرک) را شستن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich wasche die Wäsche am Wochenende.", fa: "من آخر هفته‌ها لباس می‌شویم." }
            ]
          },
          {
            de: "den Müll rausbringen",
            fa: "زباله را بیرون گذاشتن (فعل جداشدنی)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Bringst du heute den Müll raus?", fa: "آیا امروز زباله را بیرون می‌گذاری؟" }
            ]
          }
        ]
      },
      {
        title: "ابزارهای نظافت",
        words: [
          {
            de: "der Staubsauger / der Besen",
            fa: "جاروبرقی / جارودستی",
            article: "der / der",
            plural: "die Staubsauger / die Besen",
            examples: [
              { de: "Der Staubsauger ist kaputt.", fa: "جاروبرقی خراب است." }
            ]
          },
          {
            de: "der Eimer / der Lappen",
            fa: "سطل / دستمالِ تمیزکاری",
            article: "der / der",
            plural: "die Eimer / die Lappen",
            examples: [
              { de: "Ich brauche einen Eimer mit Wasser und einen Lappen.", fa: "من به یک سطل با آب و یک دستمال نیاز دارم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Vor dem Urlaub\n\nMorgen fliegen Anna und Lukas nach Italien. Sie wollen zwei Wochen am Strand bleiben. Aber heute haben sie noch viel Stress. Sie müssen die Flugtickets ausdrucken und die Koffer packen. Lukas fragt: „Anna, hast du deinen Reisepass?“ \nAber das ist nicht alles. Sie müssen auch das Haus sauber machen. Anna sagt: „Lukas, du musst den Boden wischen und den Müll rausbringen! Ich muss das Bad putzen und noch einmal die Wäsche waschen. Wir brauchen saubere Kleidung für die Reise.“\nAm Abend sind beide sehr müde. Aber sie freuen sich auf den Urlaub.",
      questions: [
        { question: "آنا و لوکاس فردا به کجا و برای چه مدتی سفر می‌کنند؟" },
        { question: "آن‌ها باید چه چیزهایی را برای سفر آماده کنند؟ (چاپ کردن و بستنِ...)" },
        { question: "وظایف لوکاس در کارهای خانه چیست؟" },
        { question: "آنا باید در خانه چه کارهایی انجام دهد؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره‌ی کارهای خانه و تعطیلات",
      prompt: "دو پاراگراف بنویسید: یکی در مورد کارهایی که مجبورید در خانه انجام دهید، و دومی در مورد برنامه تعطیلات ایده‌آل خود.",
      steps: [
        {
          title: "بیان اجباراتِ خانه",
          text: "از فعل müssen و کلمات Hausarbeit استفاده کنید. بنویسید که هر هفته چه می‌کنید.",
          example: { de: "Ich muss jede Woche viel im Haushalt helfen. Ich muss immer Staub saugen und die Wäsche waschen.", fa: "من باید هر هفته در کارهای خانه خیلی کمک کنم. من باید همیشه جاروبرقی بکشم و لباس‌ها را بشویم." }
        },
        {
          title: "تقسیم وظایف",
          text: "اگر با کسی هم‌خانه هستید، بگویید او چه کاری باید انجام دهد.",
          example: { de: "Meine Schwester muss das Geschirr spülen und den Müll rausbringen.", fa: "خواهر من باید ظرف‌ها را بشوید و زباله‌ها را بیرون ببرد." }
        },
        {
          title: "برنامه سفر ایده‌آل",
          text: "از Urlaub و nach .../am ... استفاده کنید و بگویید دوست دارید کجا بروید.",
          example: { de: "Aber bald (به زودی) mache ich Urlaub. Ich fliege nach Spanien. Ich möchte am Strand liegen und mich entspannen.", fa: "اما به زودی من تعطیلات می‌روم. من به اسپانیا پرواز می‌کنم. من می‌خواهم در ساحل دراز بکشم و استراحت کنم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. به پیشواز تعطیلات!",
      source: "Ab in den Urlaub - A1 German",
      link: "https://www.youtube.com/watch?v=I0eVJ85Fu-8",
      instructions: "تمرین دقت به مقاصد:\n۱. به حروف اضافه‌ای که قبل از اسم مکان‌ها می‌آورند دقت کنید. für die Stadt / ans Meer / in die Berge.\n۲. ببینید مردم در ویدیو بیشتر از هواپیما (das Flugzeug) استفاده می‌کنند یا قطار (der Zug) و ماشین (das Auto)."
    },
    {
      title: "۲. لعنت بر کارهای خانه!",
      source: "Household chores vocabulary in German",
      link: "https://www.youtube.com/watch?v=elOErJfI6DU",
      instructions: "یادگیری افعال تخصصی:\n۱. در آلمانی برای هر ابزاری، فعل خاصی هست. به ارتباط بین (der Staubsauger / saugen) و (der Besen / fegen یا kehren) دقت کنید.\n۲. صدای ویدیو را قطع کنید، وقتی ابزاری نشان داده می‌شود سعی کنید اسم آن و فعل مربوطه‌اش را بلند حدس بزنید."
    }
  ],

  speaking: [
    {
      title: "هم‌خانه‌ی تنبل من",
      pattern: "- Ich mache immer [...]. Du musst auch helfen!\n- Du musst [...].",
      exercise: "تصور کنید در یک پانسیون یا با یک همخانه در آلمان (WG) زندگی می‌کنید و او هیچ کمکی نمی‌کند!\nجلوی آینه بایستید، با کمی عصبانیت (البته نمایشی!) به او بگویید که شما همیشه ظرف‌ها را می‌شویید و جارو می‌کنید، و حالا او باید زباله‌ها را بیرون ببرد و زمین را طی بکشد. (Du musst heute...)."
    },
    {
      title: "وُیس برای آژانس مسافرتی",
      pattern: "Guten Tag, ich möchte einen Urlaub buchen. Ich möchte nach [Land] fliegen.",
      exercise: "قصد دارید یک سفر رزرو کنید. صدای خود را ضبط کنید انگار که برای یک آژانس مسافرتی پیغام می‌گذارید. بگویید می‌خواهید در تابستان تعطیلات بروید، به کدام کشور می‌روید، هتل می‌خواهید یا کمپینگ، و چقدر می‌توانید پول بدهید."
    }
  ],

  cultureTip: "زندگی مجردی و کارهای خانه (WG-Leben): در آلمان بسیار معمول است که جوانان، دانشجویان و حتی افراد شاغل برای کاهش هزینه‌ها در آپارتمان‌های مشترک (Wohngemeinschaft یا WG) زندگی کنند. در این خانه‌ها کلمه‌ای مقدس وجود دارد به نام Putzplan (برنامه نظافت). در این برنامه کاملاً مشخص است که این هفته چه کسی باید آشپزخانه را Spülen کند، چه کسی راهرو را Wischen کند و چه کسی کیسه‌های تفکیک‌شده‌ی زباله (Mülltrennung) را Rausbringen کند. بی‌نظمی در Putzplan باعث دعواهای طولانی در WG می‌شود!"
};
