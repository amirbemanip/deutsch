export const day27Data = {
  title: "روز ۲۷: محیط‌زیست، استرسِ کاری و مهارتِ گفت‌وگوی دوطرفه",
  objective: "امروز یاد می‌گیریم درباره دو موضوع بسیار مهم در آزمون‌های B1 و آلمانِ مدرن صحبت کنیم: حفظ محیط‌زیست (Umweltschutz) و تعادل کار و زندگی (Work-Life-Balance). همچنین نحوه مخالفت و موافقت کردن در یک مکالمه را تمرین می‌کنیم.",

  grammarData: {
    subtitle: "توسعه‌ی واژگان موضوعی و ساختارهای بیانِ نظرِ موافق/مخالف.",
    content: [
      {
        type: "text",
        title: "۱. محیط‌زیست (Die Umwelt)",
        text: "حفاظت از محیط‌زیست در آلمان یک مسئله‌ی روزمره است. از تفکیک زباله تا استفاده از وسایل نقلیه عمومی، همه درباره آن صحبت می‌کنند. در B1 باید بتوانید بگویید خودتان چه قدم‌هایی برای محیط‌زیست برمی‌دارید."
      },
      {
        type: "examples",
        title: "جملات طلایی محیط‌زیست (با کنکتورها)",
        items: [
          { de: "Ich versuche, Energie zu sparen. Deshalb schalte ich immer das Licht aus.", fa: "من سعی می‌کنم در مصرف انرژی صرفه‌جویی کنم. به همین دلیل همیشه لامپ را خاموش می‌کنیم. (نکته طلایی: ساختار versuchen + zu + Infinitiv = سعی کردن برای انجام کاری)" },
          { de: "Ich fahre oft mit dem Fahrrad, weil Autos schlecht für die Umwelt sind.", fa: "من اغلب با دوچرخه می‌روم، چون ماشین‌ها برای محیط‌زیست بد هستند." },
          { de: "Ich kaufe keine Plastiktüten. Stattdessen nehme ich eine Stofftasche mit.", fa: "من کیسه پلاستیکی نمی‌خرم. در عوض یک کیسه پارچه‌ای همراه خودم می‌برم. (Stattdessen = در عوض، جایگاه 1 می‌گیرد)" }
        ]
      },
      {
        type: "text",
        title: "۲. استرس و انگیزه در محل کار (Stress und Motivation)",
        text: "این نیز یک موضوع کلاسیک در آزمون‌های گفتاری و نوشتاری B1 است. شما باید بتوانید مشکل را بیان کنید و یک راه‌حل (Lösung) ارائه دهید."
      },
      {
        type: "examples",
        title: "جملات کاری و استرس (B1)",
        items: [
          { de: "Manchmal ist meine Arbeit sehr stressig, weil ich viele Überstunden mache.", fa: "گاهی اوقات کار من خیلی استرس‌زاست، چون من اضافه‌کاری زیادی انجام می‌دهم." },
          { de: "Trotzdem macht mir mein Job Spaß, denn meine Kollegen sind sehr nett.", fa: "با این حال، شغلم به من لذت می‌دهد، چرا که همکارانم خیلی مهربان هستند." },
          { de: "Wenn ich Stress habe, gehe ich joggen, um den Kopf frei zu bekommen.", fa: "وقتی استرس دارم، می‌روم پیاده‌رویِ تند (جاگینگ)، تا ذهنم را آزاد کنم/آزاد بشم. (ساختار um...zu + Inf = به منظورِ / برایِ)" }
        ]
      },
      {
        type: "table",
        title: "۳. بحث و گفت‌وگو (Diskussion: Zustimmung / Ablehnung)",
        rows: [
          { de: "Was hältst du davon?", fa: "نظر تو درباره‌ی این چیست؟" },
          { de: "Ich bin ganz deiner Meinung.", fa: "من کاملاً با نظر تو موافقم." },
          { de: "Das sehe ich auch so.", fa: "من هم همینطور می‌بینم (موافقم)." },
          { de: "Das sehe ich ganz anders.", fa: "من کاملاً طور دیگری می‌بینم (مخالفم)." },
          { de: "Da hast du recht, aber...", fa: "در این مورد حق با توست، اما... (مخالفت محترمانه)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: واژگان و واکنش‌ها",
        questions: [
          {
            question: "شخصی در آزمون B1 می‌گوید: «Autos sollten in der Stadt verboten sein» (ماشین‌ها در شهر باید ممنوع شوند). شما کاملاً مخالف هستید. چگونه محترمانه مخالفت می‌کنید؟",
            questionDe: "Wie widersprechen Sie höflich?",
            options: [
              { text: "Nein, du bist dumm.", isCorrect: false },
              { text: "Das sehe ich ganz anders. Viele Leute brauchen das Auto für die Arbeit.", isCorrect: true },
              { text: "Ich bin ganz deiner Meinung.", isCorrect: false }
            ],
            explanation: "آفرین! «Das sehe ich ganz anders» (من کاملاً متفاوت به قضیه نگاه می‌کنم) بهترین راه برای مخالفت در B1 است، که پس از آن باید دلیل مخالفت خود را نیز بیاورید."
          },
          {
            question: "جمله زیر را با کلمه ربط مناسب پُر کنید: Ich trenne den Müll,  ___ ich die Umwelt schützen möchte.",
            questionDe: "Welcher Konnektor passt?",
            options: [
              { text: "trotzdem", isCorrect: false },
              { text: "weil", isCorrect: true },
              { text: "deshalb", isCorrect: false }
            ],
            explanation: "دقیقاً! چون فعل (möchte) به انتهای جمله رفته است، نشان می‌دهد که دلیل (چون می‌خواهم محیط‌زیست را محافظت کنم) در اینجا ذکر شده و کلمه ربط ما weil است."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "محیط زیست (Die Umwelt)",
        words: [
          {
            de: "der Umweltschutz",
            fa: "حفاظت از محیط‌زیست",
            article: "der",
            plural: "-",
            examples: [
              { de: "Umweltschutz ist heute ein wichtiges Thema.", fa: "حفاظت از محیط‌زیست امروزه یک موضوع مهم است." }
            ]
          },
          {
            de: "die Mülltrennung",
            fa: "تفکیک زباله",
            article: "die",
            plural: "-",
            examples: [
              { de: "Die Mülltrennung in Deutschland ist manchmal kompliziert.", fa: "تفکیک زباله در آلمان گاهی پیچیده است." }
            ]
          },
          {
            de: "der öffentliche Verkehr (die öffentlichen Verkehrsmittel)",
            fa: "حمل‌ونقل عمومی",
            article: "der",
            plural: "-",
            examples: [
              { de: "Es ist besser, den öffentlichen Verkehr zu nutzen.", fa: "بهتر است که از حمل‌ونقل عمومی استفاده کنیم." }
            ]
          },
          {
            de: "schützen",
            fa: "محافظت کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wir müssen die Umwelt schützen.", fa: "ما باید از محیط‌زیست محافظت کنیم." }
            ]
          }
        ]
      },
      {
        title: "دنیای کار و استرس (Arbeitswelt)",
        words: [
          {
            de: "die Überstunde",
            fa: "اضافه‌کاری",
            article: "die",
            plural: "die Überstunden",
            examples: [
              { de: "Ich mache oft Überstunden, wenn wir viel Arbeit haben.", fa: "من اغلب اضافه‌کاری می‌کنم، وقتی ما کار زیادی داریم." }
            ]
          },
          {
            de: "die Work-Life-Balance",
            fa: "تعادل کار و زندگی",
            article: "die",
            plural: "-",
            examples: [
              { de: "Eine gute Work-Life-Balance ist für mich sehr wichtig.", fa: "یک تعادل کاری و زندگیِ خوب برای من بسیار مهم است." }
            ]
          },
          {
            de: "erschöpft",
            fa: "خسته و درمانده (بیشتر از müde)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Nach zehn Stunden im Büro bin ich völlig erschöpft.", fa: "بعد از ده ساعت در اداره من کاملاً از پا افتاده‌ام." }
            ]
          },
          {
            de: "die Motivation",
            fa: "انگیزه",
            article: "die",
            plural: "-",
            examples: [
              { de: "Gute Kollegen geben mir viel Motivation.", fa: "همکاران خوب به من انگیزه زیادی می‌دهند." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Interview: Alltag & Umwelt\n\nInterviewer: Frau Weber, was tun Sie persönlich für die Umwelt?\nFrau Weber: Ich versuche, im Alltag sehr bewusst zu leben. Zuerst einmal bin ich streng bei der Mülltrennung. Plastik, Papier und Bio-Müll kommen bei uns in verschiedene Tonnen. Außerdem kaufe ich keine Produkte mit viel Plastikverpackung.\nInterviewer: Fahren Sie oft mit dem Auto?\nFrau Weber: Früher bin ich jeden Tag mit dem Auto zur Arbeit gefahren. Aber heute fahre ich mit dem Fahrrad, obwohl es manchmal regnet. Das ist gesund und gut für das Klima. Wenn ich weite Strecken reise, nehme ich den Zug. Fliegen ist schlecht für die Umwelt, deshalb fliege ich nur selten in den Urlaub.",
      questions: [
        { question: "خانم وبر در خانه زباله‌ها (Müll) را به چند دسته تفکیک می‌کند؟" },
        { question: "خانم وبر چه استراتژی‌ای در هنگام خرید دارد؟" },
        { question: "چرا خانم وبر روزها با دوچرخه سر کار می‌رود (با وجود باران)؟" },
        { question: "چرا او به ندرت با هواپیما به تعطیلات می‌رود؟ (به کلمه deshalb توجه کنید)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره استرس و کار (B1)",
      prompt: "آیا در زندگی شما تعادل کار و زندگی (Work-Life-Balance) وجود دارد؟ در حدود 6 جمله بنویسید که آیا استرس دارید یا نه، و وقتی استرس دارید چه کار می‌کنید.",
      steps: [
        {
          title: "وضعیت کاری فعلی",
          text: "توضیح دهید کار یا درس شما چقدر استرس دارد.",
          example: { de: "Mein Beruf ist oft stressig. Ich mache viele Überstunden, weil es viele Projekte gibt.", fa: "شغل من اغلب استرس زاست. من اضافه‌کاری زیادی انجام می‌دهم چون پروژه‌های زیادی وجود دارد." }
        },
        {
          title: "بیان یک جنبه مثبت",
          text: "با trotzdem یک جنبه خوب را مطرح کنید.",
          example: { de: "Trotzdem liebe ich meinen Job, denn das Team ist fantastisch.", fa: "با این حال، من عاشق شغلم هستم، زیرا تیم فوق‌العاده است." }
        },
        {
          title: "راه‌حل کاهش استرس",
          text: "بگویید برای فرار از استرس در اوقات فراغت چه می‌کنید.",
          example: { de: "Um eine gute Work-Life-Balance zu haben, treibe ich am Wochenende Sport. Oft gehe ich joggen, um mich zu entspannen.", fa: "برای داشتن یک تعادل زندگی و کارِ خوب، من در آخر هفته ورزش می‌کنم. اغلب می‌روم پیاده‌رویِ تند تا ریلکس شوم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. محیط‌زیست در زندگی روزمره",
      source: "Umwelt & Alltag",
      link: "https://deutale.com/blog/exams/100-frequent-b1-topics-meinung-umwelt-freizeit-lists/",
      instructions: "تمرین تقلید جملات بلند:\n۱. یکی از جملات مربوط به حفاظت محیط‌زیست در متن را انتخاب کنید. مثلاً: «Ich fahre mit dem Fahrrad, obwohl es regnet».\n۲. جمله را چندین بار تکرار کنید بدون اینکه در وسط آن (حتی روی کاما) مکث کنید تا تنفس و ریتم زبان شما طبیعی شود."
    },
    {
      title: "۲. استرس و جملات شرطی (Wenn...)",
      source: "Arbeit und Motivation",
      link: "https://www.youtube.com/watch?v=8mtdGild7sI",
      instructions: "تمرین ساختار wenn (اگر/وقتی‌که):\n۱. در ویدیو جملاتی که با Wenn (موقعیت شرطی/زمانی) شروع می‌شوند را پیدا کنید.\n۲. دقت کنید که ساختار همیشه این‌گونه است: Wenn ich Stress habe, gehe ich schlafen. (Wenn + فاعل + ... + فعل) , (فعل + فاعل + ...). این قاعده استثنا ندارد!"
    }
  ],

  speaking: [
    {
      title: "بحث دوطرفه: ماشین در شهر",
      pattern: "Ich bin der Meinung... Das sehe ich ganz anders...",
      exercise: "تصور کنید در آزمون شفاهی B1 هستید. پارتنر شما می‌گوید استفاده از ماشین باید در مرکز شهر متوقف شود. شما باید با או موافقت یا مخالفت کنید (انتخاب با شماست).\nبگویید: Da hast du recht, aber viele Menschen müssen zur Arbeit fahren. Oder: Ich bin ganz deiner Meinung, öffentliche Verkehrsmittel sind besser."
    },
    {
      title: "گزارش شخصی: محیط زیست",
      pattern: "Ich versuche... Zum Beispiel...",
      exercise: "دو دقیقه زمان بگیرید. موبایل را بردارید و فیلم بگیرید: «Was tun Sie persönlich für die Umwelt?» دو مورد مثبت (مثلاً تفکیک زباله) و یک مورد منفی (مثلاً هنوز ماشین می‌رانم) از خودتان بگویید."
    }
  ],

  cultureTip: "جنون تفکیک زباله در آلمان (Mülltrennung): تفکیک زباله در آلمان فقط یک «پیشنهاد خوب» نیست، بلکه یک قانون سخت‌گیرانه با جریمه‌های سنگین (Ordnungswidrigkeit) است. حداقل ۴ سطل زباله وجود دارد: یک سطل کاغذی (آبی/سبز)، یک سطل بسته‌بندی پلاستیک و فلز (زرد)، یک سطل زیستی برای پسماند غذا (قهوه‌ای) و یک سطل زباله غیرقابل بازیافت (سیاه/خاکستری). حتی بطری‌های شیشه‌ای را باید بر اساس رنگ (سبز، سفید، قهوه‌ای) در کانتینرهای خیابان تفکیک کنید!"
};
