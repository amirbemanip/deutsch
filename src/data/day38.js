export const day38Data = {
  title: "روز ۳۸: محل سکونت، زندگی شهری در برابر روستایی و قالب ارائه",
  objective: "امروز وارد موضوع محبوب زندگی و مسکن (Wohnen) می‌شویم. یاد می‌گیریم چطور خانه و محله خود را با جزئیات توصیف کنیم و زندگی در شهر (Stadtleben) را با زندگی در روستا (Landleben) مقایسه کنیم. همچنین یک الگوی طلایی ۵ بخشی برای ارائه‌های آزمون معرفی می‌کنیم.",

  grammarData: {
    subtitle: "صفت‌های توصیفی خانه و حروف اضافه متضاد (während, dagegen).",
    content: [
      {
        type: "text",
        title: "۱. توصیف محل سکونت (Die Wohnung beschreiben)",
        text: "برای توصیف خانه در سطح B1، فقط گفتن «خانه من بزرگ است» کافی نیست. باید درباره محله (Umgebung)، هزینه‌ها (Miete) و دسترسی‌ها (Verkehrsverbindung) صحبت کنید."
      },
      {
        type: "examples",
        title: "جملات کاربردی برای توصیف خانه",
        items: [
          { de: "Ich wohne in einer Dreizimmerwohnung am Stadtrand.", fa: "من در یک آپارتمان سه خوابه (سه اتاقه) در حاشیه شهر زندگی می‌کنم." },
          { de: "Die Wohnung ist zwar nicht sehr groß, aber gemütlich und hell.", fa: "این آپارتمان اگرچه خیلی بزرگ نیست، اما دنج و روشن است." },
          { de: "In der Umgebung gibt es viele Einkaufsmöglichkeiten und Parks.", fa: "در محیط اطراف، امکانات خرید زیاد و پارک‌هایی وجود دارد." }
        ]
      },
      {
        type: "text",
        title: "۲. مقایسه: شهر در برابر روستا (Stadt vs. Land)",
        text: "یکی از سوالات همیشگی آزمون‌ها و گفت‌وگوهای روزمره آلمانی، ترجیح شما بین زندگی در شهر بزرگ (Großstadt) و روستا (Dorf / auf dem Land) است."
      },
      {
        type: "table",
        title: "کلمات متضاد برای مقایسه (während / dagegen)",
        rows: [
          { de: "während (در حالی که)", fa: "Während das Stadtleben hektisch ist, ist das Landleben ruhig. (während یک کلمه ربط فرعی است -> فعل در آخر)." },
          { de: "dagegen (در مقابل / برعکس)", fa: "Die Mieten in der Stadt sind hoch. Auf dem Land sind sie dagegen günstig. (dagegen در جایگاه ۳ یا ۱ می‌آید)." }
        ]
      },
      {
        type: "text",
        title: "۳. الگوی طلایی ۵ بخشی برای ارائه (B1 Präsentation Template)",
        text: "برای هر موضوعی که در آزمون B1 به شما می‌دهند (چه تکنولوژی، چه مسکن، چه ورزش)، از این الگو استفاده کنید تا ۳ دقیقه را به راحتی پر کنید:"
      },
      {
        type: "alert",
        title: "الگوی ۵ بخشی",
        text: "1. Einleitung (مقدمه)\n2. Vorteile (مزایا با مثال)\n3. Nachteile (معایب با مثال)\n4. Eigene Meinung (نظر شخصی شما)\n5. Schluss / Fazit (نتیجه‌گیری)"
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: مسکن و مقایسه",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «در حالی که در شهر ترافیک وجود دارد، در روستا هوا تمیز است.» کدام جمله از نظر گرامری درست است؟",
            questionDe: "Welcher Satz mit 'während' ist richtig?",
            options: [
              { text: "Während es in der Stadt Verkehr gibt, ist die Luft auf dem Land sauber.", isCorrect: true },
              { text: "Während gibt es in der Stadt Verkehr, die Luft ist auf dem Land sauber.", isCorrect: false },
              { text: "Es gibt in der Stadt Verkehr, während ist die Luft auf dem Land sauber.", isCorrect: false }
            ],
            explanation: "آفرین! während یک کلمه ربط فرعی (Subjunktion) است، پس در جمله اول فعل (gibt) به آخر می‌رود و جمله دوم با فعل (ist) شروع می‌شود."
          },
          {
            question: "اگر آپارتمان شما در «حاشیه شهر» (نه مرکز و نه روستا) قرار داشته باشد، از کدام عبارت استفاده می‌کنید؟",
            questionDe: "Wie sagt man 'am Rande der Stadt'?",
            options: [
              { text: "im Zentrum", isCorrect: false },
              { text: "auf dem Land", isCorrect: false },
              { text: "am Stadtrand", isCorrect: true }
            ],
            explanation: "دقیقاً! am Stadtrand (حاشیه شهر) یک اصطلاح بسیار پرکاربرد و نشان‌دهنده سطح واژگان خوب شماست."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "مسکن و خانه (Wohnen)",
        words: [
          {
            de: "die Umgebung",
            fa: "محیط اطراف / محله",
            article: "die",
            plural: "die Umgebungen",
            examples: [
              { de: "Die Umgebung meiner Wohnung ist sehr ruhig.", fa: "محیط اطراف آپارتمان من بسیار آرام است." }
            ]
          },
          {
            de: "gemütlich",
            fa: "دنج / راحت / صمیمی",
            article: "-",
            plural: "-",
            examples: [
              { de: "Unser Wohnzimmer ist klein, aber sehr gemütlich.", fa: "اتاق نشیمن ما کوچک است، اما بسیار دنج است." }
            ]
          },
          {
            de: "der Stadtrand",
            fa: "حاشیه شهر",
            article: "der",
            plural: "die Stadtränder",
            examples: [
              { de: "Ich wohne lieber am Stadtrand als im Zentrum.", fa: "من ترجیح می‌دهم در حاشیه شهر زندگی کنم تا در مرکز." }
            ]
          },
          {
            de: "die Miete",
            fa: "اجاره",
            article: "die",
            plural: "die Mieten",
            examples: [
              { de: "Die Mieten in München sind extrem hoch.", fa: "اجاره‌ها در مونیخ به شدت بالا هستند." }
            ]
          }
        ]
      },
      {
        title: "شهر در برابر روستا",
        words: [
          {
            de: "das Stadtleben",
            fa: "زندگی شهری",
            article: "das",
            plural: "-",
            examples: [
              { de: "Das Stadtleben ist spannend und vielfältig.", fa: "زندگی شهری هیجان‌انگیز و متنوع است." }
            ]
          },
          {
            de: "hektisch",
            fa: "پر هیاهو / پر استرس / پر شتاب",
            article: "-",
            plural: "-",
            examples: [
              { de: "Das Leben in der Großstadt ist mir zu hektisch.", fa: "زندگی در کلان‌شهر برای من بیش از حد پر تکاپو است." }
            ]
          },
          {
            de: "das Landleben",
            fa: "زندگی روستایی (حومه)",
            article: "das",
            plural: "-",
            examples: [
              { de: "Das Landleben bietet viel Natur und Ruhe.", fa: "زندگی روستایی طبیعت زیاد و آرامش ارائه می‌دهد." }
            ]
          },
          {
            de: "die Lebensqualität",
            fa: "کیفیت زندگی",
            article: "die",
            plural: "-",
            examples: [
              { de: "Auf dem Land ist die Lebensqualität oft besser.", fa: "در روستا اغلب کیفیت زندگی بهتر است." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Stadt oder Land? Wo wohnt man besser?\n\nHeutzutage diskutieren viele Menschen darüber, was besser ist: das Stadtleben oder das Landleben. Beide haben Vor- und Nachteile. Während das Leben in der Stadt aufregend und vielfältig ist, ist es auf dem Land viel entspannter.\nIch persönlich wohne in einer Dreizimmerwohnung am Stadtrand von Berlin. Die Wohnung ist zwar nicht riesig, aber sehr gemütlich und hat einen großen Balkon. Der größte Vorteil der Stadt sind die vielen Einkaufsmöglichkeiten und Kulturangebote. Andererseits sind die Mieten oft sehr hoch und der Verkehr ist laut. \nAuf dem Land hat man dagegen mehr Ruhe und die Natur direkt vor der Tür. Trotzdem würde ich lieber in der Stadt wohnen, weil ich die Flexibilität liebe. Zusammenfassend kann man sagen, dass die Entscheidung stark von der persönlichen Lebenssituation abhängt.",
      questions: [
        { question: "نویسنده در حال حاضر کجا زندگی می‌کند؟ (دقیق با اصطلاحات متن بگویید)" },
        { question: "بزرگترین مزیت شهر از نظر نویسنده چیست؟ (دو مورد)" },
        { question: "در مقابل (dagegen)، ویژگی‌های مثبت ജീവിത در روستا چیست؟ (Ruhe / Natur)" },
        { question: "چرا نویسنده با وجود معایب، همچنان زندگی در شهر را ترجیح می‌دهد؟ (Flexibilität)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره محل سکونت و ترجیح شما",
      prompt: "در یک پاراگراف (حدود ۷ خط) خانه فعلی خود را توصیف کنید (کجا، اندازه، محیط اطراف). سپس بگویید آیا زندگی در شهر را ترجیح می‌دهید یا روستا و چرا.",
      steps: [
        {
          title: "توصیف خانه (Wohnen)",
          text: "استفاده از am Stadtrand یا im Zentrum و gemütlich.",
          example: { de: "Ich wohne in einer Zweizimmerwohnung im Zentrum. Sie ist klein, aber gemütlich und hell.", fa: "من در یک آپارتمان دو اتاقه در مرکز زندگی می‌کنم. کوچک است، اما دنج و روشن است." }
        },
        {
          title: "محیط اطراف (Umgebung)",
          text: "توضیح درباره امکانات یا همسایه‌ها.",
          example: { de: "In der Umgebung gibt es einen Park und viele Einkaufsmöglichkeiten.", fa: "در محیط اطراف یک پارک و امکانات خرید زیادی وجود دارد." }
        },
        {
          title: "شهر یا روستا؟ (Vergleich)",
          text: "استفاده از während یا einerseits/andererseits.",
          example: { de: "Während die Stadt hektisch ist, liebe ich die vielen Cafés. Ich möchte später nicht auf dem Land leben, weil es mir dort zu langweilig ist.", fa: "در حالی که شهر پر هیاهوست، من عاشق کافه‌های زیاد آن هستم. من بعداً نمی‌خواهم در روستا زندگی کنم، چون آنجا برایم بیش از حد خسته‌کننده است." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. توصیف خانه رویایی",
      source: "Wohnen: Stadt oder Land? (A2/B1)",
      link: "https://www.youtube.com/watch?v=MQEtwdaFQ10",
      instructions: "تمرین شنیدن صفت‌ها:\nوقتی افراد خانه‌شان را توصیف می‌کنند، به صفت‌هایی که استفاده می‌کنند (پنجره‌های بزرگ، روشن، تاریک، پرسر و صدا، حیاط دار) با دقت گوش کنید."
    },
    {
      title: "۲. پادکست: مزایا و معایب شهر/روستا",
      source: "Deutsch auf Podcast (B1)",
      link: "https://www.youtube.com/watch?v=GzjEYyHLaC4",
      instructions: "جمع‌آوری استدلال‌ها:\nبر روی یک کاغذ یک جدول T بکشید (یک طرف Stadt، یک طرف Land). هر مزیتی که در پادکست شنیدید را خلاصه یادداشت کنید (مثلاً: +Kino, -Stau)."
    }
  ],

  speaking: [
    {
      title: "مونولوگ توصیف محل زندگی",
      pattern: "Ich wohne in... Die Wohnung ist... In der Umgebung...",
      exercise: "بدون وقفه به مدت ۲ دقیقه درباره محل زندگی فعلی‌تان در ایران یا کشوری که هستید صحبت کنید. باید از کلمات Umgebung, gemütlich, Miete (یا قیمت خانه) و Stadtrand/Zentrum استفاده کنید."
    },
    {
      title: "شبیه‌سازی کارت امتحان: شهر یا روستا",
      pattern: "1. Einleitung -> 2. Vorteile -> 3. Nachteile -> 4. Meinung",
      exercise: "با استفاده از الگوی ۵ بخشی، ۳ دقیقه درباره موضوع «زندگی در شهر در برابر روستا» صحبت کنید. دو مزیت برای هر کدام ذکر کنید و در نهایت بگویید خودتان در آینده می‌خواهید کجا生活 کنید و چرا."
    }
  ],

  cultureTip: "تمایل آلمانی‌ها به شهرهای کوچک و روستاها (Das Landleben): برخلاف بسیاری از کشورها که همه آرزوی مهاجرت به پایتخت یا کلان‌شهرها را دارند، در آلمان «تمرکززدایی» (Dezentralisierung) بسیار قوی است. روستاها و شهرهای کوچک آلمان (Kleinstädte/Dörfer) از نظر امکانات (اینترنت، مدرسه، سوپرمارکت، اتصالات قطار و اتوبوس) تفاوت زیادی با شهرهای بزرگ ندارند. بسیاری از خانواده‌های آلمانی ترجیح می‌دهند برای کیفیت زندگی بهتر کودکانشان (هوای پاک‌تر، طبیعت، ایمنی) از شهرهای بزرگ به روستاها یا حاشیه شهرها بروند."
};
