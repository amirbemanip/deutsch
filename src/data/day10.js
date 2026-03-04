export const day10Data = {
  title: "روز ۱۰: خرید در سوپرمارکت، اعضای بدن و غول مرحله‌ی سوم",
  objective: "امروز یاد می‌گیریم در یک سوپرمارکت آلمانی قدم بزنیم، موجودی و قیمت اجناس را بپرسیم و خرید کنیم. در بخش دوم با اعضای بدن آشنا می‌شویم تا اگر روزی بیمار شدیم، بتوانیم به سادگی دردمان را بیان کنیم. روز ۱۰ با یک آزمون بزرگ پایان می‌یابد.",

  grammarData: {
    subtitle: "این درس شامل عبارات کلیدی خرید، واحدهای اندازه‌گیری، کلمات اعضای بدن و نحوه بیان بیماری است.",
    content: [
      {
        type: "text",
        title: "۱. مکالمات بقا در سوپرمارکت (Im Supermarkt)",
        text: "در سوپرمارکت‌های آلمان (مثل Aldi, Lidl, Rewe) شما باید بتوانید اجناس را پیدا کنید، وزن آن‌ها را مشخص کنید و در نهایت در صندوق (die Kasse) پرداخت کنید."
      },
      {
        type: "table",
        title: "عبارات جادویی برای پیدا کردن و خرید",
        rows: [
          { de: "Entschuldigung, wo finde ich ...?", fa: "ببخشید، ... را کجا می‌توانم پیدا کنم؟" },
          { de: "Ich suche ... / Ich brauche ...", fa: "من دنبال ... می‌گردم / من ... نیاز دارم." },
          { de: "Haben Sie ...?", fa: "آیا شما ... دارید؟" },
          { de: "Ich möchte ... kaufen.", fa: "من می‌خواهم ... بخرم." }
        ]
      },
      {
        type: "examples",
        title: "نمونه‌هایی از آکوزاتیو در خرید",
        items: [
          { de: "Wo finde ich den Käse? (der Käse ➔ den)", fa: "پنیر را کجا پیدا می‌کنم؟" },
          { de: "Ich suche einen Apfel.", fa: "من دنبال یک سیب می‌گردم." },
          { de: "Haben Sie frische Milch? (die Milch ➔ die)", fa: "شیر تازه دارید؟" }
        ]
      },
      {
        type: "text",
        title: "۲. واحدها و بسته‌بندی‌ها (Mengen und Verpackungen)",
        text: "در آلمان برای خرید میوه، سبزیجات و گوشت باید واحدها را بشناسید. (نکته: در آلمانی بعد از واحد اندازه‌گیری، حرف اضافه‌ای مثل of در انگلیسی نیاز نداریم!)."
      },
      {
        type: "table",
        title: "واحدهای رایج",
        rows: [
          { de: "ein Kilo (یک کیلو)", fa: "Ich möchte ein Kilo Bananen. (یک کیلو موز)" },
          { de: "100 Gramm (صد گرم)", fa: "Ich hätte gern 100 Gramm Käse. (صد گرم پنیر)" },
          { de: "ein Liter (یک لیتر)", fa: "Ein Liter Milch, bitte. (یک لیتر شیر)" },
          { de: "eine Flasche (یک بطری)", fa: "Ich brauche eine Flasche Wasser. (یک بطری آب)" },
          { de: "eine Packung (یک بسته)", fa: "Eine Packung Eier. (یک بسته تخم‌مرغ)" }
        ]
      },
      {
        type: "alert",
        title: "تفاوت Mögen و Schmecken",
        text: "برای گفتن «دوست داشتن غذا»: \n۱. فعل mögen (دوست داشتن کلی): Ich mag Pizza. (من پیتزا دوست دارم - مفعول Akkusativ است)\n۲. فعل schmecken (خوشمزه بودن/مزه دادن): Die Pizza schmeckt mir gut! (پیتزا به من مزه می‌دهد - اینجا پیتزا فاعل است!)."
      },
      {
        type: "text",
        title: "۳. اعضای بدن و بیان درد (Körperteile und Schmerzen)",
        text: "برای بیان اینکه کجای شما درد می‌کند، از فعل «weh tun» (درد کردن - یک فعل جداشدنی!) یا کلمه «Schmerzen» (دردها) استفاده می‌کنیم."
      },
      {
        type: "examples",
        title: "فرمول‌های بیان درد",
        items: [
          { de: "Mein Kopf tut weh.", fa: "سرم درد می‌کند. (Kopf فاعل است، فعل tut صرف شده، weh آخر رفته)" },
          { de: "Meine Augen tun weh.", fa: "چشمانم درد می‌کنند. (چون چشم‌ها جمع است، فعل می‌شوند tun)" },
          { de: "Ich habe Kopfschmerzen.", fa: "من سردرد دارم. (Kopf + Schmerzen)" },
          { de: "Ich habe Bauchschmerzen.", fa: "من دل‌درد دارم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: خرید و سلامتی",
        questions: [
          {
            question: "اگر بخواهید نیم کیلو سیب زمینی (Kartoffeln) بخرید، کدام جمله از نظر گرامری (حذف حرف اضافه) در آلمانی صحیح است؟",
            questionDe: "Wie sagt man 'من نیم کیلو سیب‌زمینی می‌خواهم'?",
            options: [
              { text: "Ich möchte ein halbes Kilo von Kartoffeln.", isCorrect: false },
              { text: "Ich möchte ein halbes Kilo Kartoffeln.", isCorrect: true },
              { text: "Ich möchte ein halbes Kilo für Kartoffeln.", isCorrect: false }
            ],
            explanation: "آفرین! در آلمانی بین واحد اندازه‌گیری (Kilo) و خود جنس (Kartoffeln) هیچ حرف اضافه‌ای مثل von یا of قرار نمی‌گیرد."
          },
          {
            question: "شما دندان‌درد دارید. دندان در آلمانی der Zahn و جمع آن die Zähne است. کدام جمله صحیح است؟",
            questionDe: "Wie sagt man 'دندان‌هایم درد می‌کنند'?",
            options: [
              { text: "Meine Zähne tut weh.", isCorrect: false },
              { text: "Meine Zähne tun weh.", isCorrect: true },
              { text: "Mein Zähne tut weh.", isCorrect: false }
            ],
            explanation: "بسیار عالی! چون دندان‌ها (Zähne) جمع هستند، ضمیر ملکی Meine می‌شود و فعل هماید برای جمع صرف شود (tun)."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "در سوپرمارکت (Im Supermarkt)",
        words: [
          {
            de: "die Kasse",
            fa: "صندوق پرداخت",
            article: "die",
            plural: "die Kassen",
            examples: [
              { de: "Zahlen Sie bitte an der Kasse.", fa: "لطفاً در صندوق پرداخت کنید." }
            ]
          },
          {
            de: "der Einkaufswagen",
            fa: "چرخ/کالسکه خرید",
            article: "der",
            plural: "die Einkaufswagen",
            examples: [
              { de: "Ich nehme einen Einkaufswagen.", fa: "من یک چرخ خرید برمی‌دارم." }
            ]
          },
          {
            de: "bar bezahlen / mit Karte bezahlen",
            fa: "نقد پرداخت کردن / با کارت پرداخت کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Möchten Sie bar oder mit Karte bezahlen?", fa: "آیا مایلید نقد پرداخت کنید یا با کارت؟" }
            ]
          },
          {
            de: "die Quittung / der Kassenzettel",
            fa: "رسید خرید",
            article: "die / der",
            plural: "die Quittungen",
            examples: [
              { de: "Brauchen Sie den Kassenzettel?", fa: "آیا رسید خرید را نیاز دارید؟" }
            ]
          },
          {
            de: "kosten / der Preis",
            fa: "ارزش داشتن (قیمت داشتن) / قیمت",
            article: "- / der",
            plural: "-",
            examples: [
              { de: "Was kostet das Brot?", fa: "این نان قیمتش چقدر است؟" }
            ]
          }
        ]
      },
      {
        title: "بسته‌بندی و وزن (Mengen)",
        words: [
          {
            de: "das Gramm / das Kilo(gramm)",
            fa: "گَرم / کیلو",
            article: "das / das",
            plural: "-",
            examples: [
              { de: "Ich möchte 200 Gramm Käse.", fa: "من ۲۰۰ گرم پنیر می‌خواهم." }
            ]
          },
          {
            de: "der Liter",
            fa: "لیتر",
            article: "der",
            plural: "-",
            examples: [
              { de: "Ein Liter Milch kostet einen Euro.", fa: "یک لیتر شیر یک یورو قیمت دارد." }
            ]
          },
          {
            de: "die Flasche / die Dose",
            fa: "بطری / قوطی",
            article: "die / die",
            plural: "die Flaschen / die Dosen",
            examples: [
              { de: "Ich kaufe eine Dose Cola und zwei Flaschen Wasser.", fa: "من یک قوطی نوشابه و دو بطری آب می‌خرم." }
            ]
          },
          {
            de: "das Stück",
            fa: "یک عدد / یک تکه",
            article: "das",
            plural: "die Stücke",
            examples: [
              { de: "Drei Stück Pizza, bitte.", fa: "سه تکه (اسلایس) پیتزا لطفاً." }
            ]
          }
        ]
      },
      {
        title: "اعضای بدن (Die Körperteile)",
        words: [
          {
            de: "der Kopf",
            fa: "سر",
            article: "der",
            plural: "die Köpfe",
            examples: [
              { de: "Mein Kopf tut weh.", fa: "سرم درد می‌کند." }
            ]
          },
          {
            de: "das Gesicht",
            fa: "صورت",
            article: "das",
            plural: "die Gesichter",
            examples: [
              { de: "Sie hat ein schönes Gesicht.", fa: "او صورت زیبایی دارد." }
            ]
          },
          {
            de: "das Auge / das Ohr",
            fa: "چشم / گوش",
            article: "das / das",
            plural: "die Augen / die Ohren",
            examples: [
              { de: "Seine Augen sind blau.", fa: "چشمان او آبی هستند." }
            ]
          },
          {
            de: "die Nase / der Mund",
            fa: "بینی / دهان",
            article: "die / der",
            plural: "die Nasen / die Münder",
            examples: [
              { de: "Ich habe Schmerzen im Mund.", fa: "من در دهانم درد دارم." }
            ]
          },
          {
            de: "der Bauch / der Rücken",
            fa: "شکم / کمر (پشت)",
            article: "der / der",
            plural: "die Bäuche / die Rücken",
            examples: [
              { de: "Mein Rücken tut nach der Arbeit weh.", fa: "کمرم بعد از کار درد می‌گیرد." }
            ]
          },
          {
            de: "der Arm / die Hand",
            fa: "بازو (و دست تا مچ) / دست (از مچ تا انگشتان)",
            article: "der / die",
            plural: "die Arme / die Hände",
            examples: [
              { de: "Wasche bitte deine Hände!", fa: "لطفاً دست‌هایت را بشوی!" }
            ]
          },
          {
            de: "das Bein / der Fuß",
            fa: "پا (از ران تا مچ) / کف پا",
            article: "das / der",
            plural: "die Beine / die Füße",
            examples: [
              { de: "Nach dem Sport tun meine Beine weh.", fa: "بعد از ورزش پاهایم درد می‌کنند." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein schlechter Tag für Max\n\nMax geht heute Morgen in den Rewe-Supermarkt. Er nimmt einen Einkaufswagen und sucht Obst. Er möchte ein Kilo Äpfel und zwei Flaschen Orangensaft kaufen. Er fragt eine Mitarbeiterin: „Entschuldigung, wo finde ich den Saft?“ Die Mitarbeiterin sagt: „Dort links, bei den Getränken.“\nNach dem Einkaufen geht Max zur Kasse. Er bezahlt mit Karte. Er nimmt seine Taschen und geht zu Fuß nach Hause.\nAber zu Hause geht es Max nicht gut (حالش خوب نیست). Er hat Bauchschmerzen! Vielleicht hat er zu viele alte Äpfel gegessen. Er legt sich ins Bett und ruht sich aus (استراحت می‌کند). Sein Kopf tut leider auch weh. Er trinkt nur noch Wasser und schläft.",
      questions: [
        { question: "مکس در سوپرمارکت دقیقاً چه چیزهایی و با چه مقدار/تعدادی می‌خرد؟" },
        { question: "او برای پیدا کردن آبمیوه (den Saft) چه سؤالی از کارمند می‌پرسد؟" },
        { question: "مکس خرید خود را در صندوق چگونه پرداخت می‌کند؟ (نقد یا کارت؟)" },
        { question: "پس از رسیدن به خانه، کدام قسمت‌های بدن مکس درد می‌گیرد؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن یک لیست خرید و دیالوگ پرداخت",
      prompt: "فرض کنید برای مهمانی آخر هفته خرید می‌کنید و سپس در صندوق با صندوق‌دار صحبت می‌کنید.",
      steps: [
        {
          title: "بیان موجودی و نیاز",
          text: "از فعل brauchen (نیاز داشتن) استفاده کنید و 3 آیتم با ذکر واحد اندازه‌گیری نام ببرید. (Ich brauche...).",
          example: { de: "Für mein Wochenende brauche ich drei Flaschen Wasser, ein Kilo Tomaten und eine Packung Eier.", fa: "برای آخر هفته‌ام من 3 بطری آب، یک کیلو گوجه و یک بسته تخم‌مرغ نیاز دارم." }
        },
        {
          title: "پرسش قیمت",
          text: "یک جنس گران را انتخاب کنید و از فعل kosten استفاده کنید تا قیمت آن را بپرسید.",
          example: { de: "Entschuldigung, was kostet das Fleisch?", fa: "ببخشید، قیمت این گوشت چقدر است؟" }
        },
        {
          title: "پرداخت در صندوق",
          text: "دیالوگ کوتاهی بنویسید که صندوق‌دار قیمت کل را می‌گوید و شما نحوه پرداخت خود را اعلام می‌کنید.",
          example: { de: "Kassierer: Das macht 25 Euro, bitte. \nIch: Ich bezahle mit Karte. \nKassierer: Brauchen Sie den Kassenzettel? \nIch: Nein, danke.", fa: "صندوق‌دار: می‌شود 25 یورو لطفاً. من: با کارت پرداخت می‌کنم. صندوق‌دار: رسید را می‌خواهید؟ من: نه، ممنون." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. بقا در سوپرمارکت!",
      source: "Easy German - Im Supermarkt (Shopping Groceries)",
      link: "https://www.youtube.com/watch?v=nUu0ZeCqCh4",
      instructions: "تمرین تقلید لحن (Shadowing):\n۱. ویدیو را پخش کنید. زمانی که شخص به صندوق (Kasse) می‌رسد، به مکالمه سریع آن‌ها بسیار دقت کنید.\n۲. عبارات «mit Karte» و «den Kassenzettel, bitte» را با همان سرعت و لحن گوینده تکرار کنید. این پرتکرارترین مکالمه شما در آلمان خواهد بود."
    },
    {
      title: "۲. معرفی اعضای بدن",
      source: "Learn German - Body Parts (Körperteile)",
      link: "https://www.youtube.com/watch?v=Ete-ii0Flkw",
      instructions: "تمرین فیزیکی-شنیداری (TPR):\n۱. جلوی یک آینه بزرگ بایستید و هندزفری بگذارید.\n۲. هر بار که نام یک عضو (مثلاً das Auge) گفته شد، سریعاً آن را روی بدن خود لمس کنید و بلند تکرار کنید.\n۳. مراقب کلماتی مثل das Bein (کل پا) و der Fuß (فقط کف پا) در زبان آلمانی باشید (در فارسی ما به هر دو می‌گوییم پا!)."
    }
  ],

  speaking: [
    {
      title: "مشتریِ گمراه در Rewe!",
      pattern: "- Entschuldigung, ich suche [Lebensmittel].\n- Dort drüben. / Das finden Sie hier links.",
      exercise: "تصور کنید در یک سوپرمارکت غول‌پیکر گم شده‌اید!\nگوشی را روی ضبط بگذارید. نقش خریدار را بازی کنید و 5 بار با لحنی مودبانه (Entschuldigung) از کارمند سوپرمارکت آدرس 5 ماده غذایی مختلف را بپرسید. سپس در قالب کارمند به خودتان جواب دهید (Das ist dort links)."
    },
    {
      title: "مطب دکتر خانوادگی",
      pattern: "Mir geht es schlecht. Mein [Körperteil] tut weh. Ich habe [Körperteil]schmerzen.",
      exercise: "چشمانتان را ریز کنید و حالت یک فرد بیمار را بگیرید.\nرو به وب‌کم یا آینه، در 4 جمله سعی کنید به یک پزشک آلمانی توضیح دهید که چه مشکلی دارید. مثلاً بگویید سرتان درد می‌کند (Mein Kopf tut weh) و معده‌درد دارید (Ich habe Bauchschmerzen)."
    }
  ],

  cultureTip: "خرید در سوپرمارکت‌های آلمان (مخصوصاً Aldi و Lidl) شبیه به یک رقابت ورزشی است! برخلاف ایران یا آمریکا، صندوق‌دارها با سرعت نور اجناس را اسکن می‌کنند! قانون نانوشته این است: شما نباید اجناس را روی پیشخوان بسته‌بندی کنید؛ بلکه باید سریعاً آن‌ها را داخل چرخ خرید خود بریزید، پرداخت کنید، و چرخ را به یک میز در کنار خروجی (Einpackstation) ببرید و آنجا با خیال راحت بسته‌بندی کنید. همچنین اگر کلمه «mit Karte» (با کارت) را یک ثانیه تأخیر بگویید، صندوق‌دار پیش‌فرض فکر می‌کند نقد می‌دهید!",

  examData: {
    questions: [
      {
        question: "در سوپرمارکت می‌خواهید بپرسید «شیر کجاست؟». جمله صحیح چیست؟",
        options: [
          "Wo ist finde die Milch?",
          "Entschuldigung, wo finde ich die Milch?",
          "Ich finde wo Milch?",
          "Milch wo ist?"
        ],
        answer: 1
      },
      {
        question: "اگر بخواهید 200 گرم پنیر بخرید (der Käse)، کدام جمله صحیح است؟",
        options: [
          "Ich möchte 200 Gramm von Käse.",
          "Ich möchte 200 Gramm Käse.",
          "Ich möchte 200 Gramm für Käse.",
          "Ich kaufe 200 Käse Gramm."
        ],
        answer: 1
      },
      {
        question: "در صندوق پرداخت می‌خواهید بگویید «با کارت پرداخت می‌کنم».",
        options: [
          "Ich bezahle mit Karte.",
          "Ich bezahle durch Karte.",
          "Ich Karte bezahle.",
          "Ich mache mit Karte."
        ],
        answer: 0
      },
      {
        question: "صندوق‌دار می‌پرسد «Brauchen Sie den Kassenzettel?». او چه چیزی از شما می‌پرسد؟",
        options: [
          "آیا کیسه پلاستیکی می‌خواهید؟",
          "آیا نقد پرداخت می‌کنید؟",
          "آیا رسید خرید (فاکتور) را نیاز دارید؟",
          "آیا کارت تخفیف دارید؟"
        ],
        answer: 2
      },
      {
        question: "کدام کلمه به معنای «صورت» در زبان آلمانی است؟",
        options: [
          "der Kopf",
          "das Gesicht",
          "die Nase",
          "der Hals"
        ],
        answer: 1
      },
      {
        question: "کلمه 'درد کردن' (weh tun) یک فعل جداشدنی است. برای گفتن «پاهای من درد می‌کنند»، کدام جمله درست است؟ (پاها: die Beine)",
        options: [
          "Meine Beine tun weh.",
          "Meine Beine tut weh.",
          "Meine Beine weh tun.",
          "Meine Beine tun wehen."
        ],
        answer: 0
      },
      {
        question: "ترکیب صحیح برای گفتن «من سردرد دارم» چیست؟ (Kopf: سر | Schmerzen: دردها)",
        options: [
          "Ich bin Kopfschmerzen.",
          "Ich habe Kopfweh.",
          "Ich habe Kopfschmerzen.",
          "Mein Kopfschmerzen."
        ],
        answer: 2
      },
      {
        question: "تفاوت Mögen و Schmecken چیست؟",
        options: [
          "اولی برای درد است، دومی برای سلامتی.",
          "Mögen یعنی به طور کلی چیزی را دوست داشتن. Schmecken یعنی به من مزه می‌دهد (خوشمزه است).",
          "هر دو دقیقاً یک معنی می‌دهند و تفاوتی ندارند.",
          "Mögen فقط برای آدم‌هاست، Schmecken برای غذاها."
        ],
        answer: 1
      },
      {
        question: "شما به پزشک مراجعه کرده‌اید و شکم شما درد می‌کند (der Bauch). چگونه بیان می‌کنید؟",
        options: [
          "Mich Bauch tut weh.",
          "Mein Bauch tut weh.",
          "Ich habe Bauch tut weh.",
          "Bauchschmerzen ich bin."
        ],
        answer: 1
      },
      {
        question: "در آلمانی تفاوت das Bein و der Fuß چیست؟",
        options: [
          "Bein برای حیوانات است، Fuß برای انسان‌ها.",
          "Bein یعنی استخوان، Fuß یعنی پا.",
          "Bein به کل پا (از ران تا مچ) گفته می‌شود، Fuß فقط کف و مچ پا است.",
          "هیچ تفاوتی ندارند و هم‌معنی هستند."
        ],
        answer: 2
      }
    ]
  }
};
