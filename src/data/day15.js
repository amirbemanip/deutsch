export const day15Data = {
  title: "روز ۱۵: توصیف ویژگی‌ها، شخصیت و غول مرحله‌ی چهارم",
  objective: "در این روز یاد می‌گیریم آدم‌ها را از نظر ظاهری و شخصیتی توصیف کنیم (بسیار مهم در امتحانات A1). همچنین با ترکیب مطالب این ۵ روز اخیر، غول مرحله‌ی چهارم را شکست می‌دهیم و آماده ورود به دنیای جدیدی از گرامرهای A2 می‌شویم.",

  grammarData: {
    subtitle: "توصیف ظاهر با haben/sein، صفت‌های شخصیتی، و یک آزمون جامع ۱۰ سوالی.",
    content: [
      {
        type: "text",
        title: "۱. توصیف ظاهر (Das Aussehen)",
        text: "برای توصیف هیکل و قد از فعل sein (بودن) استفاده می‌کنیم و برای توصیف مو، چشم و ریش از فعل haben (داشتن)."
      },
      {
        type: "examples",
        title: "فرمول‌های ظاهری",
        items: [
          { de: "Er ist groß und dünn.", fa: "او قدبلند و لاغر است. (با sein)" },
          { de: "Sie hat blaue Augen und blonde Haare.", fa: "او چشمان آبی و موهای بلوند دارد. (با haben)" },
          { de: "Mein Vater trägt eine Brille.", fa: "پدر من یک عینک بر چشم دارد. (فعل tragen = پوشیدن/بر تن داشتن)" }
        ]
      },
      {
        type: "text",
        title: "۲. توصیف شخصیت (Der Charakter)",
        text: "برای توصیف اخلاق و شخصیت در آلمانی، همیشه از فعل sein (ist/sind/bin...) همراه با صفت‌ها استفاده می‌کنیم."
      },
      {
        type: "table",
        title: "صفت‌های متضاد شخصیتی",
        rows: [
          { de: "freundlich (مهربان/دوستانه)", fa: "unfreundlich (نامهربان/سرد)" },
          { de: "fleißig (کوشا/زرنگ)", fa: "faul (تنبل)" },
          { de: "lustig (شوخ‌طبع/بامزه)", fa: "ernst (جدی)" },
          { de: "ruhig (آرام)", fa: "laut (شلوغ/پرسروصدا)" }
        ]
      },
      {
        type: "text",
        title: "۳. صفت‌ها قبل از اسم (پیش‌مقدمه)",
        text: "در سطح پایه شما یاد گرفتید بگویید (Das Haus ist groß ➔ خانه بزرگ است). اما اگر بخواهید بگویید (یک خانه بزرگ ➔ ein großes Haus)، صفت دستخوش تغییر می‌شود. نگران نباشید، فعلاً در این روز فقط فرمول‌های ساده‌ی A1 را تمرین می‌کنیم و سراغ این بحث پیچیده نمی‌رویم."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ظاهر و باطن",
        questions: [
          {
            question: "شما می‌خواهید بگویید «پدربزرگم موهای جوگندمی (grau) و کوتاه دارد». از کدام فعل استفاده می‌کنید؟",
            questionDe: "Wie sagt man 'او موهای کوتاه و خاکستری دارد'?",
            options: [
              { text: "Mein Opa ist kurze graue Haare.", isCorrect: false },
              { text: "Mein Opa hat kurze graue Haare.", isCorrect: true },
              { text: "Mein Opa trägt graue Haare.", isCorrect: false }
            ],
            explanation: "آفرین! برای داشتنِ مو و چشم، ما از فعل haben استفاده می‌کنیم. فعل tragen برای عینک یا لباس است."
          },
          {
            question: "شخصی که همیشه به دیگران کمک می‌کند و روی لبش لبخند است در آلمانی چه نامیده می‌شود؟",
            questionDe: "Wie nennt man eine Person, die immer lächelt und nett ist?",
            options: [
              { text: "ernst", isCorrect: false },
              { text: "faul", isCorrect: false },
              { text: "freundlich", isCorrect: true }
            ],
            explanation: "دقیقاً! کلمه nett یا freundlich برای افراد مهربان و خوش‌برخورد استفاده می‌شود."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "ظاهر (Das Aussehen)",
        words: [
          {
            de: "die Haare (Pl.)",
            fa: "موها (همیشه جمع)",
            article: "die",
            plural: "-",
            examples: [
              { de: "Sie hat sehr lange Haare.", fa: "او موهای بسیار بلندی دارد." }
            ]
          },
          {
            de: "die Augen (Pl.)",
            fa: "چشم‌ها",
            article: "die",
            plural: "-",
            examples: [
              { de: "Deine Augen sind braun.", fa: "چشمان تو قهوه‌ای هستند." }
            ]
          },
          {
            de: "groß / klein",
            fa: "بلندقد (یا بزرگ) / کوتاه‌قد (یا کوچک)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Mein Bruder ist ziemlich groß.", fa: "برادرم نسبتاً قدبلند است." }
            ]
          },
          {
            de: "dick / schlank (dünn)",
            fa: "چاق / لاغر(متناسب)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Er macht viel Sport und ist sehr schlank.", fa: "او زیاد ورزش می‌کند و بسیار متناسب(لاغر) است." }
            ]
          },
          {
            de: "die Brille / der Bart",
            fa: "عینک / ریش",
            article: "die / der",
            plural: "die Brillen / die Bärte",
            examples: [
              { de: "Mein Vater trägt einen Bart.", fa: "پدر من ریش دارد (ریش می‌پوشد!)." }
            ]
          },
          {
            de: "hübsch / hässlich",
            fa: "زیبا(خوشگل) / زشت",
            article: "-",
            plural: "-",
            examples: [
              { de: "Das Mädchen ist sehr hübsch.", fa: "آن دختر بسیار زیبا است." }
            ]
          }
        ]
      },
      {
        title: "رنگ مو و چشم",
        words: [
          {
            de: "blond / schwarz",
            fa: "بلوند / مشکی",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich habe blonde Haare.", fa: "من موهای بلوند دارم." }
            ]
          },
          {
            de: "braun / blau / grün",
            fa: "قهوه‌ای / آبی / سبز",
            article: "-",
            plural: "-",
            examples: [
              { de: "Sie hat grüne Augen.", fa: "او چشمان سبزی دارد." }
            ]
          },
          {
            de: "grau",
            fa: "خاکستری (جوگندمی)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Mein Opa hat graue Haare.", fa: "پدربزرگم موهای جوگندمی دارد." }
            ]
          }
        ]
      },
      {
        title: "شخصیت (Der Charakter)",
        words: [
          {
            de: "freundlich / unfreundlich",
            fa: "مهربان / نامهربان",
            article: "-",
            plural: "-",
            examples: [
              { de: "Die Verkäuferin war sehr freundlich.", fa: "زن فروشنده بسیار مهربان بود." }
            ]
          },
          {
            de: "lustig / ernst",
            fa: "با مزه و شوخ / جدی",
            article: "-",
            plural: "-",
            examples: [
              { de: "Mein Chef ist oft ernst.", fa: "رئیس من اغلب جدی است." }
            ]
          },
          {
            de: "fleißig / faul",
            fa: "زرنگ و کوشا / تنبل",
            article: "-",
            plural: "-",
            examples: [
              { de: "Der Student ist faul. Er lernt nicht.", fa: "آن دانشجو تنبل است. او درس نمی‌خواند." }
            ]
          },
          {
            de: "ruhig / laut",
            fa: "آرام و ساکت / پرسروصدا",
            article: "-",
            plural: "-",
            examples: [
              { de: "Meine Tochter ist ein ruhiges Kind.", fa: "دخترِ من یک کودکِ آرام است." }
            ]
          },
          {
            de: "schüchtern",
            fa: "خجالتی",
            article: "-",
            plural: "-",
            examples: [
              { de: "Anna spricht nicht viel. Sie ist schüchtern.", fa: "آنا زیاد صحبت نمی‌کند. او خجالتی است." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein fantastisches Team\n\nDas ist meine Familie. Wir sind genau vier Personen. Mein Vater heißt Thomas. Er ist 50 Jahre alt, groß und ein bisschen dick. Er hat kurze graue Haare. Charakterlich ist er sehr ruhig und geduldig (صبور). \nMeine Mutter heißt Maria. Sie ist klein, sehr schlank und trägt eine rote Brille. Sie hat wunderschöne braune Augen. Sie ist unglaublich fleißig, kocht das beste Essen und ist immer freundlich zu mir.\nMein Bruder Lukas ist jünger als ich. Er hat lockige blonde Haare. Er ist meistens lustig, aber für die Schule ist er oft zu faul! Ich liebe meine Familie, so wie sie ist.",
      questions: [
        { question: "خانواده نویسنده شامل چند نفر است؟" },
        { question: "ظاهر و شخصیت پدر (توماس) چگونه توصیف شده است؟" },
        { question: "مادر (ماریا) چه وسیله‌ای بر چشم دارد و شخصیت او چگونه است؟" },
        { question: "چرا لوکاس در مدرسه موفق نیست؟ (کدام صفت برای او به کار رفته؟)" }
      ]
    }
  ],

  writing: [
    {
      title: "توصیف کردن یک شخص",
      prompt: "به یکی از اعضای خانواده خود، یا یک سلبریتی یا دوست خوب فکر کنید. در یک پاراگراف کوتاه (5-6 جمله)، او را از نظر ظاهری و شخصیتی با جزئیات توصیف کنید.",
      steps: [
        {
          title: "معرفی پایه",
          text: "مشخص کنید این شخص کیست و چه نام دارد.",
          example: { de: "Das ist meine beste Freundin. Sie heißt Sarah.", fa: "این بهترین دوست من است. نام او سارا است." }
        },
        {
          title: "اندام و استخوان‌بندی",
          text: "با استفاده از فعل sein بگویید آیا او قدبلند، چاق یا لاغر است.",
          example: { de: "Sarah ist sehr groß und schlank.", fa: "سارا بسیار قدبلند و متناسب است." }
        },
        {
          title: "مو، چشم و جزئیات",
          text: "با استفاده از فعل haben رنگ مو و چشم او را بگویید.",
          example: { de: "Sie hat lange schwarze Haare und grüne Augen. Sie trägt auch eine Brille.", fa: "او موهای بلند مشکی و چشمان سبز دارد. او همچنین عینک می‌زند." }
        },
        {
          title: "شخصیت",
          text: "با دو صفت شخصیتی او را توصیف کنید.",
          example: { de: "Sie ist immer lustig und sehr freundlich zu allen Menschen.", fa: "او همیشه شوخ‌طبع است و نسبت به تمام انسان‌ها بسیار مهربان است." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. او چه شکلی است؟",
      source: "Leute beschreiben – Aussehen & Adjektive",
      link: "https://www.youtube.com/watch?v=UqViotzrGEo",
      instructions: "تمرین تشخیص ویژگی‌ها:\n۱. به نحوه استفاده از کلمه «ziemlich» (نسبتاً) و «sehr» (بسیار) قبل از صفت‌ها دقت کنید. (er ist ziemlich groß).\n۲. صدای ویدیو را قطع کنید، وقتی چهره‌ای نشان داده می‌شود سریع بلندی مو و رنگ چشم‌اش را با صدای بلند به آلمانی بگویید."
    },
    {
      title: "۲. باطن آدم‌ها!",
      source: "Characterising People in German",
      link: "https://www.youtube.com/watch?v=kWLbDcwI9Pk",
      instructions: "تمرین تلفظ صفت‌ها:\n۱. تلفظ حرف 'ch' در schüchtern را تمرین کنید (صدای «ش» می‌دهد، شیشتِرن).\n۲. در حین ویدیو، ۳ صفتی که به شخصیت خودتان نزدیک‌تر است را با صدای بلند به شکل (Ich bin...) تکرار کنید."
    }
  ],

  speaking: [
    {
      title: "بازی حدس تصویر",
      pattern: "Diese Person hat [Haare]. Er/Sie ist [Körperbau] und [Charakter].",
      exercise: "در اینترنت عکس یک فرد مشهور (مثلاً یک بازیگر یا فوتبالیست) را پیدا کنید.\nگوشی را روی ضبط بگذارید. بدون اینکه نام او را بیاورید، در 4 جمله او را توصیف کنید. (قد، هیکل، مو، و اینکه به نظر جدی می‌آید یا شوخ). سپس وویس را برای دوستتان بفرستید تا حدس بزند (اگر کسی را ندارید، خودتان بعداً گوش دهید و فرض کنید شخص دیگری توصیف کرده!)."
    },
    {
      title: "معرفی پارتنر / دوست ایده‌آل",
      pattern: "Mein Traummann / Meine Traumfrau ist [Eigenschaft].",
      exercise: "ایستاده جلوی آینه به زبان آلمانی همسر، پارتنر یا دوست ایده‌آل خود را برای آینده توصیف کنید! بگویید دوست دارید چه ظاهری داشته باشد (Er/Sie hat...) و چه اخلاقیاتی برای شما مهم است (Er/Sie ist sehr fleißig und...)."
    }
  ],

  cultureTip: "تمجید (Komplimente) در زبان آلمانی: برخلاف فرهنگ‌های شرقی که پر از تعارفات پیچیده هستند، آلمانی‌ها در تعریف کردن از ظاهر بسیار مستقیم اما به اندازه عمل می‌کنند. جملاتی نظیر «Du siehst gut aus!» (خوشتیپ/زیبا به نظر می‌رسی) یا «Du hast ein schönes Lächeln» (تو لبخند زیبایی داری) کافی و مناسب است. همچنین اگر به آلمانی‌ها بگویید «شما کمی چاق شده‌اید» به هیچ وجه مثل ایران برخورد نمی‌کنند و این را یک بی‌ادبی کلامی بسیار شدید در نظر می‌گیرند؛ در آلمان در مورد وزن افراد در Small talk اصلاً صحبت نمی‌شود!",

  examData: {
    questions: [
      {
        question: "کدام فعل برای توصیف داشتنِ «ریش» و «چشم» مناسب است؟",
        options: [
          "sein",
          "haben",
          "können",
          "müssen"
        ],
        answer: 1
      },
      {
        question: "معنی کلمه «schüchtern» چیست؟",
        options: [
          "خجالتی",
          "زرنگ",
          "تنبل",
          "عصبانی"
        ],
        answer: 0
      },
      {
        question: "در سوپرمارکت به یک کارمند برخورد می‌کنید که بسیار بدعنق و سرد است. کدام صفت مناسب اوست؟",
        options: [
          "lustig",
          "freundlich",
          "unfreundlich",
          "fleißig"
        ],
        answer: 2
      },
      {
        question: "برای گفتن «من موهای بلوند دارم»، کدام جمله گرامری صحیح است؟",
        options: [
          "Ich bin blonde Haare.",
          "Ich habe blonde Haare.",
          "Meine Haare ist blond.",
          "Ich tragen blonde Haare."
        ],
        answer: 1
      },
      {
        question: "ترجمه قطعی «Er ist ziemlich groß und schlank» چیست؟",
        options: [
          "او نسبتاً قدبلند و لاغر/متناسب است.",
          "او بسیار بزرگ و چاق است.",
          "او خیلی قدکوتاه و لاغر است.",
          "او موهای بلند و لاغری دارد!"
        ],
        answer: 0
      },
      {
        question: "اگر بخواهید بگویید «پدر من عینک می‌زند»، کدام فعل در زبان آلمانی به درستی نقش بازی می‌کند؟",
        options: [
          "haben (Mein Vater hat eine Brille)",
          "tragen (Mein Vater trägt eine Brille)",
          "sein (Mein Vater ist eine Brille)",
          "können (Mein Vater kann eine Brille)"
        ],
        answer: 1
      },
      {
        question: "کدام کلمه جمعِ «برادر» در آلمانی است؟",
        options: [
          "die Bruderen",
          "die Brüder",
          "die Bruders",
          "die Brüders"
        ],
        answer: 1
      },
      {
        question: "اگر بخواهید پیشنهاد رفتن به سینما بدهید، کدام ساختار صحیح است؟",
        options: [
          "Wir wollen gehen ins Kino?",
          "Wollen wir ins Kino gehen?",
          "Gehen wollen wir Kino?",
          "Wir Kino gehen wollen?"
        ],
        answer: 1
      },
      {
        question: "مفهوم «Ich bin Einzelkind» چیست؟",
        options: [
          "من یک کودک دارم.",
          "من یک کودکِ تنها هستم.",
          "من تک‌فرزند هستم (خواهر و برادر ندارم).",
          "من در کودکی تنها بودم."
        ],
        answer: 2
      },
      {
        question: "در گرامر گذشته خواندیم (Er war...) یعنی (او بود). حالا اگر بخواهیم بگوییم «ما بودیم»؟",
        options: [
          "Wir war",
          "Wir wart",
          "Wir waren",
          "Wir haben"
        ],
        answer: 2
      }
    ]
  }
};
