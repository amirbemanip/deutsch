export const day34Data = {
  title: "روز ۳۴: خرید آنلاین، غذا و تسلط بر کلمات ربط متضاد",
  objective: "امروز درباره موضوعات بسیار مدرن صحبت می‌کنیم: سفارش آنلاین و انتخاب غذا. همچنین یکی از مهم‌ترین مباحث گرامری B1 را جمع‌بندی می‌کنیم: تبدیل ساختارهای weil/obwohl (فعل در آخر) به deshalb/trotzdem (فعل در جایگاه ۲).",

  grammarData: {
    subtitle: "بازی با کلمات ربط: weil/obwohl ↔ deshalb/trotzdem.",
    content: [
      {
        type: "text",
        title: "۱. یادآوری: weil و obwohl",
        text: "همانطور که می‌دانید، weil (چون) و obwohl (با وجود اینکه) کلمات ربط فرعی (Subjunktionen) هستند. یعنی فعل متصرف را به آخر جمله می‌فرستند."
      },
      {
        type: "examples",
        title: "مثال با weil و obwohl",
        items: [
          { de: "Ich lerne Deutsch, weil ich in Deutschland leben möchte.", fa: "من آلمانی می‌خوانم، چون می‌خواهم در آلمان زندگی کنم." },
          { de: "Ich lerne Deutsch, obwohl die Grammatik schwer ist.", fa: "من آلمانی می‌خوانم، با وجود اینکه گرامر سخت است." }
        ]
      },
      {
        type: "text",
        title: "۲. تبدیل به deshalb و trotzdem",
        text: "در سطح B1، شما باید بتوانید جملات بالا را با deshalb (بنابراین) و trotzdem (با این حال) بازنویسی کنید. این کلمات در جایگاه ۱ قرار می‌گیرند و فعل بلافاصله بعد از آن‌ها می‌آید."
      },
      {
        type: "alert",
        title: "فرمول طلایی تبدیل",
        text: "فعل همیشه در جمله دوم به جایگاه دوم (بلافاصله بعد از deshalb/trotzdem) می‌آید."
      },
      {
        type: "examples",
        title: "مثال‌های تبدیل",
        items: [
          { de: "(weil) Ich besuche einen Kurs, weil ich mein Deutsch verbessern möchte.", fa: "من به کلاس می‌روم، چون می‌خواهم آلمانی‌ام را بهتر کنم." },
          { de: "(deshalb) Ich möchte mein Deutsch verbessern, deshalb besuche ich einen Kurs.", fa: "من می‌خواهم آلمانی‌ام را بهتر کنم، بنابراین به کلاس می‌روم. (دقت کنید: جای علت و معلول عوض می‌شود!)." },
          { de: "(obwohl) Ich gehe zum Training, obwohl ich sehr müde bin.", fa: "من به تمرین می‌روم، با وجود اینکه خیلی خسته‌ام." },
          { de: "(trotzdem) Ich bin sehr müde, trotzdem gehe ich zum Training.", fa: "من خیلی خسته‌ام، با این حال به تمرین می‌روم. (باز هم جای دلیل و نتیجه عوض می‌شود)." }
        ]
      },
      {
        type: "text",
        title: "۳. واژگان خرید آنلاین",
        text: "در زندگی روزمره، خرید اینترنتی بخش بزرگی از فعالیت ماست. باید بدانید سبد خرید، افزودن کالا و ثبت سفارش به آلمانی چه می‌شود."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: تبدیل ساختارها",
        questions: [
          {
            question: "جمله «Er bleibt zu Hause, weil er krank ist» را با deshalb بازنویسی کنید.",
            questionDe: "Wie lautet der Satz mit 'deshalb'?",
            options: [
              { text: "Er ist krank, deshalb er bleibt zu Hause.", isCorrect: false },
              { text: "Er ist krank, deshalb bleibt er zu Hause.", isCorrect: true },
              { text: "Deshalb er krank ist, bleibt er zu Hause.", isCorrect: false }
            ],
            explanation: "دقیقاً! ابتدا دلیل را می‌آوریم (او مریض است)، سپس deshalb، و بلافاصله فعل bleibt."
          },
          {
            question: "جمله «Sie kauft das Auto nicht, obwohl sie Geld hat» را با trotzdem بازنویسی کنید.",
            questionDe: "Wie lautet der Satz mit 'trotzdem'?",
            options: [
              { text: "Sie hat Geld, trotzdem kauft sie das Auto nicht.", isCorrect: true },
              { text: "Trotzdem sie Geld hat, kauft sie das Auto nicht.", isCorrect: false },
              { text: "Sie kauft das Auto nicht, trotzdem hat sie Geld.", isCorrect: false }
            ],
            explanation: "آفرین! ابتدا وضعیت (او پول دارد)، سپس trotzdem، و بلافاصله فعل kauft (با این حال ماشین را نمی‌خرد)."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "خرید آنلاین (Online-Shopping)",
        words: [
          {
            de: "die Bestellung",
            fa: "سفارش",
            article: "die",
            plural: "die Bestellungen",
            examples: [
              { de: "Ihre Bestellung wurde erfolgreich versendet.", fa: "سفارش شما با موفقیت ارسال شد." }
            ]
          },
          {
            de: "der Warenkorb",
            fa: "سبد خرید",
            article: "der",
            plural: "die Warenkörbe",
            examples: [
              { de: "Fügen Sie das Produkt zum Warenkorb hinzu.", fa: "محصول را به سبد خرید اضافه کنید." }
            ]
          },
          {
            de: "hinzufügen",
            fa: "اضافه کردن (افزودن)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich füge den Laptop zum Warenkorb hinzu.", fa: "من لپ‌تاپ را به سبد خرید اضافه می‌کنم (فعل جداشدنی)." }
            ]
          },
          {
            de: "die Lieferung",
            fa: "ارسال / تحویل بار",
            article: "die",
            plural: "die Lieferungen",
            examples: [
              { de: "Die Lieferung dauert drei bis fünf Werktage.", fa: "ارسال سه تا پنج روز کاری طول می‌کشد." }
            ]
          }
        ]
      },
      {
        title: "غذا و تغذیه (Essen und Ernährung)",
        words: [
          {
            de: "die Ernährung",
            fa: "تغذیه",
            article: "die",
            plural: "-",
            examples: [
              { de: "Eine gesunde Ernährung ist wichtig für den Körper.", fa: "یک تغذیه سالم برای بدن مهم است." }
            ]
          },
          {
            de: "verzichten auf (+ Akk)",
            fa: "چشم‌پوشی کردن از / صرف‌نظر کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich versuche, auf Zucker zu verzichten.", fa: "من سعی می‌کنم از (خوردن) شکر صرف‌نظر کنم." }
            ]
          },
          {
            de: "zubereiten",
            fa: "آماده کردن (غذا) / پخت و پز",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich bereite mein Abendessen meistens selbst zu.", fa: "من معمولاً شامم را خودم آماده می‌کنم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Alltag im Internet\n\nHeutzutage bestellen viele Menschen ihre Kleidung und Elektronik online, weil es sehr praktisch ist. Ehrlich gesagt bin ich auch ein Fan vom Online-Shopping. Letzte Woche war mein Laptop kaputt, deshalb musste ich schnell einen neuen kaufen. Ich habe das Produkt zum Warenkorb hinzugefügt und per Kreditkarte bezahlt. Obwohl die Lieferung normalerweise drei Tage dauert, kam das Paket schon am nächsten Morgen an!\nAuch beim Essen spielen Apps eine große Rolle. Manchmal habe ich nach der Arbeit keine Lust zu kochen, trotzdem bestelle ich kein Fastfood. Ich achte sehr auf meine Ernährung. Meistens bereite ich am Wochenende gesundes Essen zu und friere es ein. So verzichte ich auf ungesundes Essen und spare Geld.",
      questions: [
        { question: "چرا راوی هفته گذشته مجبور شد سریع یک لپ‌تاپ بخرد؟ (استفاده از deshalb)" },
        { question: "او در مورد زمان ارسال کالا چه می‌گوید؟ (با استفاده از obwohl توضیح دهید)" },
        { question: "وقتی او بعد از کار حوصله پختن ندارد چه می‌کند؟ (با استفاده از trotzdem)" },
        { question: "او برای اینکه تغذیه سالم داشته باشد و پول پس‌انداز کند چه استراتژی‌ای دارد؟ (zubereiten)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره خرید و غذا",
      prompt: "درباره تجربه خرید آنلاین و عادات غذایی خود یک پاراگراف (حدود ۷ خط) بنویسید. باید حداقل یک بار از deshalb و یک بار از trotzdem استفاده کنید.",
      steps: [
        {
          title: "خرید آنلاین (deshalb)",
          text: "یک دلیل بیاورید که چرا آنلاین خرید می‌کنید.",
          example: { de: "Online-Shopping ist bequem, deshalb kaufe ich oft Kleidung im Internet.", fa: "خرید آنلاین راحت است، بنابراین من اغلب لباس در اینترنت می‌خرم." }
        },
        {
          title: "ارسال کالا (Warenkorb/Lieferung)",
          text: "مراحل خرید را کوتاه بگویید.",
          example: { de: "Ich füge die Schuhe zum Warenkorb hinzu. Die Lieferung ist immer schnell.", fa: "من کفش‌ها را به سبد خرید اضافه می‌کنم. ارسال همیشه سریع است." }
        },
        {
          title: "غذا (trotzdem/verzichten)",
          text: "بگویید با وجود زمان کم، غذای سالم می‌خورید.",
          example: { de: "Ich habe wenig Zeit, trotzdem verzichte ich auf Fastfood. Ich bereite mein Essen selbst zu.", fa: "من وقت کمی دارم، با این حال از فست‌فود صرف‌نظر می‌کنم. من غذایم را خودم آماده می‌کنم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. پادکست خرید و محصولات",
      source: "German Podcast A2/B1",
      link: "https://www.youtube.com/watch?v=rKhZjWs8MYQ",
      instructions: "تمرین دریافت جملات پسیو:\nدر وب‌سایت‌های آنلاین معمولاً جملات مجهول (Passiv) زیاد استفاده می‌شود: «Ihre Bestellung wurde versendet» (سفارش شما ارسال شد). به این الگوها (wurde + قسمت سوم فعل در آخر) دقت کنید."
    },
    {
      title: "۲. ویدیوهای آشپزی و تغذیه",
      source: "Gesunde Ernährung (B1)",
      link: "https://training.german-course-vienna.com",
      instructions: "تمرین تقلید تلفظ کلمات طولانی:\nکلماتی مثل «Nahrungsergänzungsmittel» (مکمل‌های غذایی) یا «Kohlenhydrate» (کربوهیدرات‌ها) را بخش بخش کنید و سه بار تکرار کنید (Koh-len-hy-dra-te)."
    }
  ],

  speaking: [
    {
      title: "توضیح دادن نحوه استفاده از یک اپلیکیشن",
      pattern: "Zuerst... Dann füge ich... zum Warenkorb hinzu... Zum Schluss...",
      exercise: "تصور کنید به پدر یا مادربزرگ خود یاد می‌دهید چطور از آمازون خرید کند. مراحل را به آلمانی برای آن‌ها بلند توضیح دهید: «Zuerst suchst du das Produkt. Dann fügst du es zum Warenkorb hinzu...»"
    },
    {
      title: "مونولوگ متضادها",
      pattern: "...deshalb... / ...trotzdem...",
      exercise: "سه جفت جمله درباره زندگی خود بسازید و با صدای بلند بگویید:\n۱. Ich liebe Schokolade, trotzdem verzichte ich darauf.\n۲. Ich habe kein Auto, deshalb fahre ich mit dem Fahrrad.\n۳. Meine Arbeit ist stressig, trotzdem macht sie mir Spaß."
    }
  ],

  cultureTip: "خرید آنلاین (Online-Handel) در آلمان: آلمان یکی از بزرگترین بازارهای خرید آنلاین (به ویژه Amazon و Zalando) در اروپاست. یکی از دلایل محبوبیت عجیب خرید آنلاین در آلمان، قانون «Rückgaberecht» (حق پس دادن کالا) است. شما معمولاً تا ۱۴ روز (و گاهی تا ۱۰۰ روز!) مهلت دارید کالا را بدون هیچ دلیلی و کاملاً رایگان (kostenloser Rückversand) پس بفرستید. آلمانی‌ها عاشق این ویژگی هستند و معمولاً لباس‌ها را در سه سایز مختلف سفارش می‌دهند و دو تای آن را پس می‌فرستند!"
};
