export const day5Data = {
  title: "روز ۵: غذاها، سفارش در کافه و غول مرحله‌ی اول (Akkusativ)",
  objective: "امروز وارد مبحث طلایی «Akkusativ» می‌شویم؛ می‌فهمیم چگونه مفعول مستقیم بسازیم. سپس با یادگیری واژگان غذا و نوشیدنی، یاد می‌گیریم در رستوران‌ها و کافه‌های آلمانی سفارش بدهیم. در نهایت، روز ۵ با یک آزمون جامع برای کل ۵ روز اول به پایان می‌رسد.",

  grammarData: {
    subtitle: "این درس شامل آشنایی با حالت آکوزاتیو، فعل‌های ویژه مفعول‌ساز و مکالمه در رستوران است.",
    content: [
      {
        type: "text",
        title: "۱. معرفی غول مهربان: آکوزاتیو (Akkusativ)",
        text: "تا الان ما با فاعل کار داشتیم (Nominativ). اما وقتی در جمله یک «مفعول مستقیم» داریم، وارد حالت Akkusativ می‌شویم.\nمثال در فارسی: «من یک سیب می‌خورم». در اینجا «من» فاعل است و «سیب» مفعول. در آلمانی وقتی کلمه‌ای مفعول می‌شود، آرتیکل‌های آن تغییر می‌کند!\n\n**قانون طلایی آکوزاتیو:**\nدر آکوزاتیو، فقط و فقط جنسیت **مذکر (der / ein)** تغییر می‌کند! خنثی، مونث و جمع هیچ تغییری نمی‌کنند و دقیقاً شبیه حالت فاعلی (Nominativ) می‌مانند."
      },
      {
        type: "table",
        title: "تغییرات جادویی آکوزاتیو",
        rows: [
          { de: "مذکر (der ➔ den)", fa: "Ich kaufe den Tisch. (من آن میز را می‌خرم)" },
          { de: "مذکر (ein ➔ einen)", fa: "Ich habe einen Bruder. (من یک برادر دارم)" },
          { de: "خنثی (das ➔ das / ein ➔ ein)", fa: "Ich lese das/ein Buch. (بدون تغییر!)" },
          { de: "مونث (die ➔ die / eine ➔ eine)", fa: "Er kauft die/eine Lampe. (بدون تغییر!)" },
          { de: "جمع (die ➔ die)", fa: "Ich sehe die Kinder. (بدون تغییر!)" }
        ]
      },
      {
        type: "alert",
        title: "فعل‌های آکوزاتیو‌ساز (Akkusativ-Verben)",
        text: "بیشتر فعل‌های زبان آلمانی آکوزاتیو‌ساز هستند. چند فعل کلیدی که همیشه بعد از آن‌ها باید آکوزاتیو بیاورید:\nhaben (داشتن)، kaufen (خریدن)، essen (خوردن)، trinken (نوشیدن)، lesen (خواندن)، sehen (دیدن)، brauchen (نیاز داشتن)."
      },
      {
        type: "examples",
        title: "دقت به تغییرات مذکر",
        items: [
          { de: "Der Tisch ist schön. (Nominativ)", fa: "آن میز زیبا است. (میز فاعل است)" },
          { de: "Ich kaufe den Tisch. (Akkusativ)", fa: "من آن میز را می‌خرم. (میز مفعول است)" },
          { de: "Ich möchte einen Kaffee.", fa: "من یک قهوه می‌خواهم. (Kaffee مذکر است، پس einen می‌شود)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: آکوزاتیو",
        questions: [
          {
            question: "کلمه «کیک» (Kuchen) مذکر (der) است. اگر بخواهیم بگوییم «من یک کیک می‌خورم»، آرتیکل صحیح کدام است؟",
            questionDe: "Wie sagt man 'من یک کیک می‌خورم'?",
            options: [
              { text: "Ich esse ein Kuchen.", isCorrect: false },
              { text: "Ich esse eine Kuchen.", isCorrect: false },
              { text: "Ich esse einen Kuchen.", isCorrect: true }
            ],
            explanation: "بسیار عالی! چون فعل essen خروجی مفعولی (Akkusativ) دارد و کلمه Kuchen مذکر است، باید از آرتیکل einen استفاده کنیم."
          },
          {
            question: "کلمه «آب» (Wasser) خنثی (das) است. چطور می‌گوییم «من یک آب می‌نوشم»؟",
            questionDe: "Wie sagt man 'من یک آب می‌نوشم'?",
            options: [
              { text: "Ich trinke ein Wasser.", isCorrect: true },
              { text: "Ich trinke einen Wasser.", isCorrect: false },
              { text: "Ich trinke eine Wasser.", isCorrect: false }
            ],
            explanation: "درست است! کلمات خنثی (das) در آکوزاتیو هیچ تغییری نمی‌کنند و همان ein باقی می‌مانند."
          }
        ]
      },
      {
        type: "text",
        title: "۲. سفارش مودبانه در رستوران و کافه",
        text: "در رستوران‌های آلمان، ما از فعل «möchten» (خواستن / میل داشتن) استفاده می‌کنیم تا به شکل محترمانه‌ای سفارش بدهیم. (استفاده از ich will خیلی بی‌ادبانه محسوب می‌شود)."
      },
      {
        type: "table",
        title: "الگوهای کلیدی سفارش دادن",
        rows: [
          { de: "Ich möchte...", fa: "من... میل دارم/می‌خوام. (Ich möchte einen Kaffee)" },
          { de: "Ich nehme...", fa: "من... برمیدارم/می‌گیرم. (Ich nehme den Salat)" },
          { de: "Für mich..., bitte.", fa: "برای من... لطفاً. (Für mich ein Bier, bitte)" },
          { de: "Die Rechnung, bitte.", fa: "صورت‌حساب لطفاً." }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "غذاها (Das Essen)",
        words: [
          {
            de: "Salat",
            fa: "سالاد",
            article: "der",
            plural: "die Salate",
            examples: [
              { de: "Ich esse einen Salat.", fa: "من یک سالاد می‌خورم." }
            ]
          },
          {
            de: "Kuchen",
            fa: "کیک / شیرینی",
            article: "der",
            plural: "die Kuchen",
            examples: [
              { de: "Der Kuchen ist sehr lecker.", fa: "کیک خیلی خوشمزه است." }
            ]
          },
          {
            de: "Pizza",
            fa: "پیتزا",
            article: "die",
            plural: "die Pizzas / Pizzen",
            examples: [
              { de: "Wir möchten eine Pizza bestellen.", fa: "ما می‌خواهیم یک پیتزا سفارش دهیم." }
            ]
          },
          {
            de: "Suppe",
            fa: "سوپ",
            article: "die",
            plural: "die Suppen",
            examples: [
              { de: "Ich nehme die Suppe als Vorspeise.", fa: "من سوپ را به عنوان پیش‌غذا برمی‌دارم." }
            ]
          },
          {
            de: "Brötchen",
            fa: "نان کوچک / باگت کوچک",
            article: "das",
            plural: "die Brötchen",
            examples: [
              { de: "Zum Frühstück esse ich ein Brötchen.", fa: "برای صبحانه یک نان کوچک می‌خورم." }
            ]
          },
          {
            de: "Obst / Gemüse",
            fa: "میوه / سبزیجات",
            article: "das / das",
            plural: "-",
            examples: [
              { de: "Obst und Gemüse sind gesund.", fa: "میوه و سبزیجات سالم هستند." }
            ]
          }
        ]
      },
      {
        title: "نوشیدنی‌ها (Die Getränke)",
        words: [
          {
            de: "Kaffee",
            fa: "قهوه",
            article: "der",
            plural: "die Kaffees",
            examples: [
              { de: "Trinkst du gern Kaffee?", fa: "دوست داری قهوه بنوشی؟" }
            ]
          },
          {
            de: "Tee",
            fa: "چای",
            article: "der",
            plural: "die Tees",
            examples: [
              { de: "Für mich einen Tee, bitte.", fa: "برای من یک چای لطفاً." }
            ]
          },
          {
            de: "Wasser",
            fa: "آب",
            article: "das",
            plural: "die Wasser",
            examples: [
              { de: "Ich nehme ein Wasser mit Gas.", fa: "من یک آب گازدار می‌گیرم." }
            ]
          },
          {
            de: "Bier",
            fa: "آبجو",
            article: "das",
            plural: "die Biere",
            examples: [
              { de: "Ein Bier, bitte.", fa: "یک آبجو لطفاً." }
            ]
          }
        ]
      },
      {
        title: "در رستوران / کافه (Im Restaurant)",
        words: [
          {
            de: "möchten",
            fa: "میل داشتن / خواستن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Was möchten Sie trinken?", fa: "میل دارید چه بنوشید؟" }
            ]
          },
          {
            de: "Rechnung",
            fa: "صورت‌حساب / فاکتور",
            article: "die",
            plural: "die Rechnungen",
            examples: [
              { de: "Die Rechnung, bitte.", fa: "صورت‌حساب لطفاً." }
            ]
          },
          {
            de: "zahlen / bezahlen",
            fa: "پرداخت کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wir möchten zahlen.", fa: "ما می‌خواهیم حساب کنیم (پول بدهیم)." }
            ]
          },
          {
            de: "zusammen / getrennt",
            fa: "با هم / جداگانه",
            article: "-",
            plural: "-",
            examples: [
              { de: "Zusammen oder getrennt?", fa: "با هم (حساب می‌کنید) یا جدا؟" }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Abendessen in Berlin\n\nMarkus und Sarah gehen in ein Restaurant. Der Kellner kommt und fragt: „Guten Abend, was möchten Sie trinken?“\nMarkus sagt: „Ich möchte ein Wasser ohne Gas. Und für meine Frau, bitte einen Tee.“\nDer Kellner bringt die Getränke. Dann fragt er: „Was möchten Sie essen?“\nSarah sagt: „Ich nehme die Pizza mit Tomaten. Ich habe großen Hunger!“\nMarkus sagt: „Und ich möchte einen Salat.“\nNach dem Essen sagt Markus: „Herr Ober, die Rechnung, bitte!“\nDer Kellner fragt: „Zusammen oder getrennt?“ Markus antwortet: „Zusammen, bitte.“",
      questions: [
        { question: "مارکوس چه نوشیدنی‌ای سفارش می‌دهد؟ سارا چطور؟" },
        { question: "سارا چه غذایی سفارش می‌دهد و چرا؟ (جمله مربوط به گرسنگی را پیدا کنید)" },
        { question: "مارکوس برای غذا چه می‌خورد؟ دقت کنید که کلمه Salat، در آکوزاتیو einen Salat شده است." },
        { question: "در زمان حساب کردن، آیا آن‌ها صورت‌حساب را جداگانه محاسبه می‌کنند یا با هم؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن دیالوگ در کافه (Im Café)",
      prompt: "شما با یک دوست به کافه رفته‌اید. یک دیالوگ کوتاه بین خودتان، دوستتان و گارسون بنویسید.",
      steps: [
        {
          title: "خوشامدگویی و پرسش",
          text: "از زبان گارسون بپرسید که چه میل دارید. (از فعل möchten و ضمیر 모دبانه Sie استفاده کن).",
          example: { de: "Kellner: Guten Tag! Was möchten Sie trinken?", fa: "گارسون: روز بخیر! چه میل دارید بنوشید؟" }
        },
        {
          title: "سفارش خودت و دوستت",
          text: "خودت و دوستت به ترتیب چیزی را با فعل‌های möchten، nehme یا Für mich... سفارش بدهید. (به Akkusativ در صورت لزوم دقت کنید).",
          example: { de: "Ich: Ich möchte einen Kaffee. \nFreund: Und für mich einen Tee, bitte.", fa: "من: من یک قهوه می‌خواهم. دوست: و برای من یک چای لطفاً." }
        },
        {
          title: "پرداخت",
          text: "در انتها از زبان خودت صورت‌حساب را بخواه و بگو که می‌خواهید جداگانه یا باهم حساب کنید.",
          example: { de: "Wir möchten zahlen. Getrennt, bitte.", fa: "ما می‌خواهیم پرداخت کنیم. جداگانه لطفاً." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. آکوزاتیو در مکالمه واقعی",
      source: "Learn German - Akkusativ explained",
      link: "https://www.youtube.com/watch?v=J_jKjF7Ohyk",
      instructions: "این ویدیو نحوه استفاده از آکوزاتیو برای اشیاء را نشان می‌دهد.\n۱. با دقت گوش دهید. هر بار که گوینده بعد از افعالی مثل haben, kaufen, brauchen کلمه‌ای با آرتیکل «den» یا «einen» می‌آورد ویدیو را پاز کرده و تکرار کنید.\n۲. 5 شی را در اتاق خود ببینید و با haben جملاتی با حفظ قواعد آکوزاتیو بسازید. (مثال: Ich habe einen Stift)."
    },
    {
      title: "۲. دیالوگ کافه و رستوران",
      source: "German for beginners - Ordering food and drinks",
      link: "https://www.youtube.com/watch?v=jJiE4Rfcl9w",
      instructions: "تمرین گوش دادن به ملودیِ سفارش دادن:\n۱. به نحوه تلفظ «Ich möchte...» دقت کنید (حرف ö باید دقیق تلفظ شود).\n۲. سوال پایانی گارسون یعنی «Zusammen oder getrennt» در فرهنگ آلمان بسیار کلیدی است، این عبارت را 3 بار با لحن سوالی و بلند تکرار کنید."
    }
  ],

  speaking: [
    {
      title: "سفارش دادن جلوی آینه",
      pattern: "- Guten Tag, was möchten Sie trinken?\n- Ich möchte einen Kaffee, bitte.\n- Und was nehmen Sie als Hauptgericht?\n- Ich nehme eine Pizza und einen Salat.",
      exercise: "جلوی آینه بایستید. نقش یک مشتری بسیار گرسنه را بازی کنید!\nابتدا 3 نوشیدنی مختلف را با «Ich möchte» سفارش دهید. (حواستان به der/die/das باشد! Kaffee مذکر است پس Einen Kaffee، اما Wasser خنثی است پس Ein Wasser).\nسپس 3 غذای مختلف را با «Ich nehme» سفارش دهید."
    },
    {
      title: "جمع‌بندی 5 روز اول با معرفی کامل!",
      pattern: "Hallo, ich heiße... Ich wohne in... In meiner Freizeit mache ich gern...",
      exercise: "اکنون شما آماده‌اید که درباره خود صحبت کنید! \nبدون نگاه کردن به هیچ متنی، گوشی خود را بردارید و صدای خود را ضبط کنید. یک متن شفاهی شامل:\n- نام و اهل کجا هستید\n- خانواده‌تان (چه کسی را دارید)\n- روتین امروزتان و اینکه کِی بیدار شده‌اید\n- چه توانایی‌ای دارید (können)\n- و الان چه چیزی میل دارید بخورید/بنوشید (möchten)."
    }
  ],

  cultureTip: "وقتی در رستوران یا کافه‌ای در آلمان، اتریش یا سوئیس نشسته‌اید و می‌خواهید حساب کنید، برخلاف ایران لازم نیست بلند شوید و سمت صندوق بروید. شما باید سر میز خود بمانید و به گارسون بگویید: «Zahlen, bitte» یا «Die Rechnung, bitte». گارسون با یک کیف پولِ کمری بزرگ به سر میز شما می‌آید. همچنین پرسش «Zusammen oder getrennt?» (باهم یا جدا؟) خیلی نرمال است؛ آلمانی‌ها عاشق این هستند که هرکس دُنگِ خودش را بپردازد، حتی در قرارهای دوستانه شریک شدن صورت‌حساب بسیار نادر است!",

  examData: {
    questions: [
      {
        question: "در حالت Akkusativ (مفعولی)، کدام آرتیکل تغییر می‌کند و به 'den' تبدیل می‌شود؟",
        options: [
          "die (مونث)",
          "das (خنثی)",
          "der (مذکر)",
          "die (جمع)"
        ],
        answer: 2
      },
      {
        question: "کدام جمله از لحاظ ساختار آکوزاتیو صحیح است؟",
        options: [
          "Ich habe ein Bruder.",
          "Ich habe eine Bruder.",
          "Ich habe einen Bruder.",
          "Ich habe bruder."
        ],
        answer: 2
      },
      {
        question: "شما در یک کافه نشسته‌اید. مودبانه‌ترین راه برای سفارشِ یک چای کدام است؟",
        options: [
          "Ich will ein Tee.",
          "Geben Sie mir ein Tee.",
          "Ich möchte einen Tee.",
          "Tee für mich."
        ],
        answer: 2
      },
      {
        question: "سوال 'Zusammen oder getrennt؟' در رستوران چه مفهومی دارد؟",
        options: [
          "آیا غذا را با هم می‌خورید یا جدا؟",
          "آیا صندلی‌ها را کنار هم بگذارم یا جدا؟",
          "صورت‌حساب را یک‌جا تایپ کنم یا جداگانه حساب می‌کنید؟",
          "نوشیدنی‌ها را با غذا بیاورم یا جدا؟"
        ],
        answer: 2
      },
      {
        question: "کلمه Apfel (سیب) مذکر (der) است. جمله 'من یک سیب می‌خورم' کدام است؟",
        options: [
          "Ich esse ein Apfel.",
          "Ich esse einen Apfel.",
          "Ich esse der Apfel.",
          "Ich esse eine Apfel."
        ],
        answer: 1
      },
      {
        question: "کدام فعل به عنوان فعل 'مفعول ساز' (Akkusativ) شناخته نمی‌شود؟ (استثنا است)",
        options: [
          "haben",
          "sein",
          "kaufen",
          "nehmen"
        ],
        answer: 1
      },
      {
        question: "کلمه Buch (کتاب) خنثی (das) است. در حالت Akkusativ نامعین به چه شکل در می‌آید؟",
        options: [
          "einen",
          "eine",
          "einem",
          "ein"
        ],
        answer: 3
      },
      {
        question: "چگونه می‌پرسیم 'ساعت چند است؟'",
        options: [
          "Wie uhr ist es?",
          "Wie spät ist es?",
          "Wann uhr ist das?",
          "Welche uhr ist es?"
        ],
        answer: 1
      },
      {
        question: "ترجمه جمله 'Am Wochenende gehe ich ins Kino' چیست؟",
        options: [
          "عصرها به سینما می‌روم.",
          "اول هفته به سینما می‌روم.",
          "آخر هفته به سینما می‌روم.",
          "دیروز به سینما رفتم."
        ],
        answer: 2
      },
      {
        question: "قانون کلیدی افعال جداشدنی (Trennbare Verben) در جملات خبری ساده چیست؟",
        options: [
          "پیشوند اول جمله، فعل آخر جمله.",
          "پیشوند به فعل می‌چسبد و در جایگاه دوم است.",
          "فعل در جایگاه دوم صرف می‌شود، پیشوند به انتهای جمله پرتاب می‌شود.",
          "هر دو با هم به انتهای جمله منتقل می‌شوند."
        ],
        answer: 2
      }
    ]
  }
};
