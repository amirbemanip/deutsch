export const day8Data = {
  title: "روز ۸: لباس‌ها، آب‌وهوا و غول مرحله‌ی دوم (آزمون A1)",
  objective: "امروز وارد دنیای پوشاک و آب‌وهوا می‌شویم تا بتوانیم توصیف کنیم در فصل‌های مختلف چه می‌پوشیم. در پایان این روز، یک آزمون جامع و یک چالش مکالمه (Sprechen) شبیه‌سازی شده‌ی امتحان A1 داریم که میزان تسلط شما بر ۸ روز گذشته را می‌سنجد.",

  grammarData: {
    subtitle: "این درس روی فعل 특ی‌ویژه tragen (پوشیدن)، توصیف فصل‌ها و آب‌وهوا تمرکز دارد و با یک آزمون بزرگ تمام می‌شود.",
    content: [
      {
        type: "text",
        title: "۱. فعل پوشیدن (tragen / anhaben)",
        text: "برای اینکه بگوییم چه لباسی به تن داریم، از دو ساختار می‌توانیم استفاده کنیم:\n۱. فعل tragen (این فعل بی‌قاعده است و در حالت du / er / sie، املات می‌گیرد ➔ ä).\n۲. فعل جداشدنی anhaben (haben ... an)."
      },
      {
        type: "table",
        title: "صرف فعل بی‌قاعده‌ی tragen",
        rows: [
          { de: "ich trage", fa: "من می‌پوشم" },
          { de: "du trägst (توجه به ä)", fa: "تو می‌پوشی" },
          { de: "er/sie/es trägt", fa: "او می‌پوشد" },
          { de: "wir/sie/Sie tragen", fa: "ما/آن‌ها/شما می‌پوشید" },
          { de: "ihr tragt (بدون ä)", fa: "شماها می‌پوشید" }
        ]
      },
      {
        type: "alert",
        title: "دقت به آکوزاتیو (Akkusativ) در لباس‌ها",
        text: "فعل‌های tragen و anhaben هردو «مفعول‌ساز» (Akkusativ) هستند. بنابراین اگر لباس شما مذکر (der) باشد، آرتیکل آن به **einen/den** تغییر می‌کند."
      },
      {
        type: "examples",
        title: "لباس پوشیدن در عمل",
        items: [
          { de: "Ich trage ein T-Shirt. (das T-Shirt ➔ خنثی، بدون تغییر)", fa: "من یک تیشرت پوشیده‌ام." },
          { de: "Du trägst eine Jacke. (die Jacke ➔ مونث، بدون تغییر)", fa: "تو یک کاپشن پوشیده‌ای." },
          { de: "Er hat einen Mantel an. (der Mantel ➔ مذکر، Akkusativ!)", fa: "او یک پالتو به تن دارد." }
        ]
      },
      {
        type: "text",
        title: "۲. آب‌وهوا و فصل‌ها (Wetter und Jahreszeiten)",
        text: "برای بیان وضعیت آب‌وهوا در زبان آلمانی، همیشه از ضمیر خنثای «Es» (به معنای هوا / وضعیت) استفاده می‌کنیم."
      },
      {
        type: "table",
        title: "چهار فصل و هوای آن‌ها",
        rows: [
          { de: "der Frühling (بهار)", fa: "Es ist warm. (هوا گرم و مطبوع است)" },
          { de: "der Sommer (تابستان)", fa: "Es ist heiß und sonnig. (هوا داغ و آفتابی است)" },
          { de: "der Herbst (پاییز)", fa: "Es regnet. (باران می‌بارد - regnen یک فعل است)" },
          { de: "der Winter (زمستان)", fa: "Es ist kalt und es schneit. (هوا سرد است و برف می‌بارد)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: فصل‌ها و لباس‌ها",
        questions: [
          {
            question: "اگر در تابستان بسیار گرم باشد، جمله صحیح برای «من یک تیشرت می‌پوشم» کدام است؟",
            questionDe: "Wie sagt man 'من در تابستان یک تیشرت می‌پوشم'?",
            options: [
              { text: "Im Sommer ich trage ein T-Shirt.", isCorrect: false },
              { text: "Im Sommer trage ich ein T-Shirt.", isCorrect: true },
              { text: "Ich trage im Sommer einen T-Shirt.", isCorrect: false }
            ],
            explanation: "دقیقاً! قید زمان (Im Sommer) اول آمده، پس فعل (trage) دوم و فاعل (ich) سوم می‌نشیند. T-Shirt هم خنثی است و ein باقی می‌ماند."
          },
          {
            question: "شال‌گردن (der Schal) مذکر است. جمله صحیحِ «او(مرد) در زمستان یک شال می‌پوشد» کدام است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Im Winter tragt er ein Schal.", isCorrect: false },
              { text: "Im Winter trägt er einen Schal.", isCorrect: true },
              { text: "Er trägt im Winter eine Schal.", isCorrect: false }
            ],
            explanation: "آفرین! اولاً فعل برای er باید املات بگیرد (trägt)، ثانیاً Schal مفعولِ مذکر است پس به einen تبدیل می‌شود."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "لباس‌های من (Meine Kleidung)",
        words: [
          {
            de: "T-Shirt / Hemd",
            fa: "تی‌شرت / پیراهن مردانه دکمه‌دار",
            article: "das / das",
            plural: "die T-Shirts / die Hemden",
            examples: [
              { de: "Ich trage ein weißes Hemd.", fa: "من یک پیراهن سفید پوشیده‌ام." }
            ]
          },
          {
            de: "Hose / Jeans",
            fa: "شلوار / شلوار جین",
            article: "die / die",
            plural: "die Hosen / die Jeans",
            examples: [
              { de: "Die Hose ist neu.", fa: "این شلوار جدید است." }
            ]
          },
          {
            de: "Kleid / Rock",
            fa: "پیراهن زنانه (یک‌سره) / دامن",
            article: "das / der",
            plural: "die Kleider / die Röcke",
            examples: [
              { de: "Sie trägt ein rotes Kleid.", fa: "او یک پیراهن قرمز پوشیده است." }
            ]
          },
          {
            de: "Jacke / Mantel",
            fa: "کاپشن-ژاکت / پالتو بلند",
            article: "die / der",
            plural: "die Jacken / die Mäntel",
            examples: [
              { de: "Im Winter brauche ich einen Mantel.", fa: "در زمستان یک پالتو نیاز دارم. (einen Mantel)" }
            ]
          },
          {
            de: "Schuhe / Socken",
            fa: "کفش‌ها / جوراب‌ها (همیشه جمع به کار می‌روند)",
            article: "die (Pl) / die (Pl)",
            plural: "-",
            examples: [
              { de: "Meine Schuhe sind schwarz.", fa: "کفش‌های من مشکی هستند." }
            ]
          },
          {
            de: "Pullover",
            fa: "پلیور / ژاکت بافتنی",
            article: "der",
            plural: "die Pullover",
            examples: [
              { de: "Der Pullover ist sehr warm.", fa: "این پلیور بسیار گرم است." }
            ]
          }
        ]
      },
      {
        title: "فصل‌ها و آب‌وهوا (Jahreszeiten und Wetter)",
        words: [
          {
            de: "Frühling / Sommer",
            fa: "بهار / تابستان",
            article: "der / der",
            plural: "-",
            examples: [
              { de: "Im Sommer ist es heiß.", fa: "در تابستان هوا داغ است." }
            ]
          },
          {
            de: "Herbst / Winter",
            fa: "پاییز / زمستان",
            article: "der / der",
            plural: "-",
            examples: [
              { de: "Im Herbst regnet es oft.", fa: "در پاییز اغلب باران می‌بارد." }
            ]
          },
          {
            de: "sonnig / bewölkt",
            fa: "آفتابی / ابری",
            article: "-",
            plural: "-",
            examples: [
              { de: "Heute ist es sonnig.", fa: "امروز هوا آفتابی است." }
            ]
          },
          {
            de: "kalt / warm / heiß",
            fa: "سرد / گرم / داغ",
            article: "-",
            plural: "-",
            examples: [
              { de: "Im Winter ist es sehr kalt.", fa: "در زمستان هوا بسیار سرد است." }
            ]
          },
          {
            de: "regnen / schneien",
            fa: "باران باریدن / برف باریدن (فعل هستند)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Es regnet heute.", fa: "امروز باران می‌بارد." },
              { de: "Im Winter schneit es.", fa: "در زمستان برف می‌بارد." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Vier Jahreszeiten in München\n\nHallo, ich bin Lukas. Ich lebe in München. In München ist das Wetter sehr interessant. Zuerst kommt der Frühling. Es ist oft warm und sonnig, aber manchmal regnet es auch. Ich trage meistens ein T-Shirt und eine leichte (سبک) Jacke.\nDann kommt der Sommer. Es ist sehr heiß! Ich brauche keinen Mantel. Ich trage nur ein T-Shirt und eine kurze Hose.\nDanach beginnt der Herbst. Es ist kühl und regnerisch. Ich trage einen Pullover und gute Schuhe. Schließlich kommt der Winter. Im Winter ist es in München sehr kalt und es schneit oft. Ich trage einen warmen Mantel, eine Mütze (کلاه) und Handschuhe (دستکش).",
      questions: [
        { question: "در بهار مونیخ (Frühling) هوا معمولاً چگونه است؟ چه لباسی برای این هوا مناسب است؟" },
        { question: "چرا لوکاس در تابستان پالتو (Mantel) نیاز ندارد؟ هوا در تابستان چگونه است؟" },
        { question: "قیدِ زمان «Danach» به معنی «پس از آن» برای توصیف ورود به کدام فصل استفاده شده است؟" },
        { question: "در زمستان سرد و برفی، لوکاس مجبور است چه اقلامی بپوشد؟ (حالت Akkusativ را در متن پیدا کنید)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره‌ی فصل محبوب و لباس‌های شما",
      prompt: "حالا نوبت شماست. قصد داریم در یک پاراگراف کوتاه بنویسید که امروز چه پوشیده‌اید، و فصل مورد علاقه‌تان کدام است و در آن فصل چه می‌پوشید.",
      steps: [
        {
          title: "امروز چه پوشیده‌ای؟",
          text: "با جمله (Heute trage ich...) لباس فعلی خود را توصیف کن. از حداقل دو تکه لباس (مثلاً تی‌شرت و شلوار) با ذکر رنگشان استفاده کن.",
          example: { de: "Heute trage ich ein rotes T-Shirt und eine blaue Hose.", fa: "امروز یک تیشرت قرمز و شلوار آبی پوشیده‌ام." }
        },
        {
          title: "فصل محبوب و آب‌وهوای آن",
          text: "فصل محبوبت را نام ببر (Mein Lieblingsjahreszeit ist der...). بعد بگو هوا در آن فصل چگونه است (es ist...).",
          example: { de: "Meine Lieblingsjahreszeit ist der Sommer. Im Sommer ist es sehr sonnig und heiß.", fa: "فصل محبوب من تابستان است. در تابستان هوا بسیار آفتابی و داغ است." }
        },
        {
          title: "لباس‌های مخصوص آن فصل",
          text: "حالا بگو در آن فصل معمولاً چه می‌پوشی. (Im Sommer trage ich anziehen / ...). دقت کن که فعل در جایگاه دوم باشد.",
          example: { de: "Im Sommer trage ich oft ein T-Shirt, weil (زیرا) es warm ist.", fa: "در تابستان اغلب یک تیشرت می‌پوشم، زیرا هوا گرم است." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. کمد لباسِ آلمانی",
      source: "Learn German - Kleidung (Clothes)",
      link: "https://www.youtube.com/watch?v=dNLzCWeSvZY",
      instructions: "برای یادگیری لباس‌ها، دیدن ضروری است.\n۱. ویدیو را تماشا کنید. هر بار که کلمه‌ای مذکر (der Pullover, der Mantel) گفته می‌شود، به این فکر کنید که اگر بخواهید آن را بخرید باید از «einen» استفاده کنید!\n۲. به لباس‌های کمد خودتان نگاه کنید و سریعاً به آلمانی نامشان را بگویید."
    },
    {
      title: "۲. آب‌وهوا در گزارش‌های واقعی",
      source: "Weather in German - Wetter",
      link: "https://www.youtube.com/watch?v=VjYFRWBKqWw",
      instructions: "تمرین شنیداری وضعیت هوا:\n۱. به تلفظ جملاتی مثل (Es regnet) و (Es schneit) دقت کنید. دقت کنید که این‌ها «فعل» هستند، نه صفت!\n۲. در روزهای آینده، هر روز صبح به آسمان نگاه کنید و یک جمله کوتاه به زبان آلمانی برای توصیف هوا بگویید (Heute ist es sonnig)."
    }
  ],

  speaking: [
    {
      title: "شبیه‌ساز امتحان تلک/گوته: بخش دوم (Alltag)",
      pattern: "[معرفی] + Mein Tag: Am Morgen... Dann... Danach...",
      exercise: "در امتحان A1 معمولاً می‌گویند یک روز معمولی‌تان را توصیف کنید.\nگوشی را روی ضبط بگذارید. ۲ دقیقه کامل صحبت کنید:\n- ابتدا بیدار شدن و صبحانه را با حداقل یک فعل بازتابی (sich waschen) بگویید.\n- سپس مسیر سر کار و ناهار را با قید Dann پیش ببرید.\n- عصر، مرتب کردن خانه (aufräumen) را شرح دهید و بگویید در آخر (Schließlich) ساعت چند می‌خوابید."
    },
    {
      title: "گزارشگر مد و آب‌وهوا",
      pattern: "- Heute ist es [Wetter] und ich trage [Kleidung].",
      exercise: "جلوی آینه بایستید. خود را یک گزارشگر در خیابان‌های برلین تصور کنید. با صدای بلند بگویید چه فصلی است و هوا چگونه است (مثلاً فرض کنید زمستان است). سپس توضیح دهید خودتان چه پوشیده‌اید (Ich trage einen Mantel...). \nنکته کلیدی: سعی کنید فعل trage را برای ضمیر er/sie نیز صرف کنید (Mein Freund trägt eine Jacke)."
    }
  ],

  cultureTip: "مفهوم «Zwiebellook» (پوشش پیازی!): در آلمان به دلیل متغیر بودن شدید هوا حتی در بهار و تابستان (صبح سرد است، ظهر داغ می‌شود، عصر باران می‌گیرد)، مردم از استراتژی «لایه‌لایه لباس پوشیدن» استفاده می‌کنند. یعنی یک تی‌شرت، روی آن یک پیراهن باز، و روی آن یک سویشرت یا کاپشن می‌پوشند تا در طول روز به راحتی لایه‌ها را کم یا زیاد کنند. پس داشتن یک Jacke (کاپشن نازک) در هر فصلی در آلمان یک ضرورت است!",

  examData: {
    questions: [
      {
        question: "در زمستان هوا سرد است. جمله صحیح برای 'من یک پالتو می‌پوشم' چیست؟ (کلمه پالتو der Mantel است)",
        options: [
          "Ich trage ein Mantel.",
          "Ich trage einen Mantel.",
          "Ich trage der Mantel.",
          "Ich trage eine Mantel."
        ],
        answer: 1
      },
      {
        question: "صرفِ فعلِ 'پوشیدن' (tragen) برای سوم شخص مفرد (او مرد - er) کدام است؟",
        options: [
          "er tragt",
          "er tragen",
          "er trag",
          "er trägt"
        ],
        answer: 3
      },
      {
        question: "اگر هوا بارانی باشد، آلمانی‌ها چه می‌گویند؟",
        options: [
          "Es ist regnen.",
          "Es regnet.",
          "Das Wetter ist regen.",
          "Regnen ist heute."
        ],
        answer: 1
      },
      {
        question: "کدام یک از قیدهای زیر برای شروع یک داستان (مثلاً بیدار شدن از خواب) مناسب‌تر است؟",
        options: [
          "Schließlich",
          "Danach",
          "Zuerst",
          "Später"
        ],
        answer: 2
      },
      {
        question: "کدام جمله در رابطه با افعال بازتابی (Reflexivverben) از نظر گرامری کاملاً صحیح است؟",
        options: [
          "Morgens wasche ich mich.",
          "Ich wasche mich morgens.",
          "Morgens wasche ich dich.",
          "هم گزینه ۱ و هم گزینه ۲"
        ],
        answer: 3
      },
      {
        question: "صدا و حالت سوال پرسیدنِ گارسون در آلمان معمولاً چگونه است؟ (با توجه به دروس قبل)",
        options: [
          "Was du willst?",
          "Was möchten Sie?",
          "Gib mir Bestellung.",
          "Du nimmst was?"
        ],
        answer: 1
      },
      {
        question: "حالت Plural (جمع) کلمه‌ی 'صندلی' (der Stuhl) در آلمانی چیست؟",
        options: [
          "die Stuhls",
          "die Stuhle",
          "die Stühle",
          "die Stühlen"
        ],
        answer: 2
      },
      {
        question: "اگر بخواهیم بگوییم 'در اتاق نشیمن یک تلویزیون وجود دارد' (تلویزیون: der Fernseher)، کدام جمله با ساختار Es gibt صحیح است؟",
        options: [
          "Im Wohnzimmer gibt es ein Fernseher.",
          "Im Wohnzimmer es gibt einen Fernseher.",
          "Im Wohnzimmer gibt es einen Fernseher.",
          "Es gibt im Wohnzimmer der Fernseher."
        ],
        answer: 2
      },
      {
        question: "کدام جمله ساختارِ ترتیب و جمله‌سازی آلمانی را به درستی رعایت نکرده است؟ (نادرست است)",
        options: [
          "Dann gehe ich zur Arbeit.",
          "Danach ich trinke Kaffee.",
          "Später mache ich eine Pause.",
          "Schließlich gehe ich ins Bett."
        ],
        answer: 1
      },
      {
        question: "شما با همکارتان به کافه رفته‌اید و زمان حساب کردن است. گارسون می‌گوید 'Zusammen oder getrennt?'. مفهوم فرهنگی این جمله در آلمان چیست؟",
        options: [
          "آیا از غذا راضی بودید یا نه؟",
          "آیا می‌خواهید پول را نقد بدهید یا با کارت؟",
          "آیا کل مبلغ را یک‌نفر حساب می‌کند یا هزینه‌ها را جدا و دُنگ‌دُنگ پرداخت می‌کنید؟",
          "آیا غذای باقی‌مانده را می‌برید یا اینجا می‌خورید؟"
        ],
        answer: 2
      }
    ]
  }
};
