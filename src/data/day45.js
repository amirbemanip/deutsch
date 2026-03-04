export const day45Data = {
  title: "روز ۴۵: ایستگاه مرور کلیدی - کلمات ربط پیشرفته و برنامه‌ریزی مشترک",
  objective: "امروز یک مرور جامع بر تمام مباحث کار، اوقات فراغت، رسانه و فرهنگ داریم. هدف اصلی این است که کلمات ربط پیشرفته (مانند deswegen, darum, dennoch) را در مکالمات خود بگنجانیم و برای بخش سوم امتحان شفاهی (برنامه‌ریزی مشترک با پارتنر) کاملاً آماده شویم.",

  grammarData: {
    subtitle: "ارتقای سطح جملات با کلمات ربط پیشرفته B1 و ساختارهای برنامه‌ریزی.",
    content: [
      {
        type: "text",
        title: "۱. کلمات ربط دلیل و نتیجه (deshalb, deswegen, darum)",
        text: "در سطح پایه از weil (چون) استفاده می‌کردیم که فعل را به آخر می‌برد. در B1 برای حرفه‌ای‌تر صحبت کردن، ابتدا دلیل را می‌گوییم و سپس با کلماتی مثل deshalb (بنابراین) نتیجه را بیان می‌کنیم."
      },
      {
        type: "table",
        title: "جایگزین‌های حرفه‌ای",
        rows: [
          { de: "سطح A2 (با weil)", fa: "Ich habe keine Zeit, weil ich viel arbeite. (دلیل در جمله دوم است و فعل در آخر)." },
          { de: "سطح B1 (با deshalb / deswegen / darum)", fa: "Ich arbeite viel, deshalb/deswegen/darum habe ich keine Zeit. (نتیجه در جمله دوم است و فعل در جایگاه 2 می‌آید)." }
        ]
      },
      {
        type: "text",
        title: "۲. کلمات ربط تضاد (trotzdem, dennoch)",
        text: "به جای استفاده مکرر از aber (اما)، از کلمات پیشرفته‌تری برای بیان تضاد یا شگفتی استفاده کنید."
      },
      {
        type: "examples",
        title: "بیان تضاد",
        items: [
          { de: "Das Museum ist teuer. Trotzdem gehe ich gerne hin.", fa: "موزه گران است. با این حال من با کمال میل به آنجا می‌روم. (فعل در جایگاه 2)." },
          { de: "Der Film war lang. Dennoch war er sehr spannend.", fa: "فیلم طولانی بود. با وجود این (با این حال) او (فیلم) بسیار هیجان‌انگیز بود. (dennoch بسیار رسمی و شیک است)." }
        ]
      },
      {
        type: "text",
        title: "۳. برنامه‌ریزی مشترک (Gemeinsam etwas planen - Teil 3)",
        text: "بخش سوم امتحان شفاهی نیاز به تعامل دارد. شما باید پیشنهاد بدهید (Vorschläge machen)، مخالفت کنید (ablehnen) و جایگزین بیاورید (Alternativen nennen)."
      },
      {
        type: "examples",
        title: "عبارات طلایی برنامه‌ریزی",
        items: [
          { de: "پیشنهاد دادن:", fa: "Hast du Lust, ins Kino zu gehen? / Wie wäre es mit einem Konzert?" },
          { de: "مخالفت مودبانه:", fa: "Gute Idee, aber da habe ich leider keine Zeit. / Das ist mir leider zu teuer." },
          { de: "ارائه جایگزین:", fa: "Wir könnten stattdessen... / Wollen wir lieber...?" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: کلمات ربط و برنامه‌ریزی",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «من خسته‌ام، بنابراین در خانه می‌مانم.» کدام ساختار صحیح است؟",
            questionDe: "Welcher Satz ist grammatikalisch richtig?",
            options: [
              { text: "Ich bin müde, deswegen bleibe ich zu Hause.", isCorrect: true },
              { text: "Ich bin müde, deswegen ich zu Hause bleibe.", isCorrect: false },
              { text: "Ich bin müde, weil bleibe ich zu Hause.", isCorrect: false }
            ],
            explanation: "آفرین! deswegen در جایگاه اول جمله دوم قرار می‌گیرد و دقیقاً بعد از آن فعل (bleibe) در جایگاه دوم می‌آید."
          },
          {
            question: "پارتنر شما پیشنهاد می‌دهد یکشنبه به موزه بروید. شما وقت ندارید و می‌خواهید شنبه را پیشنهاد دهید. بهترین جواب کدام است؟",
            questionDe: "Wie lehnen Sie höflich ab und machen einen neuen Vorschlag?",
            options: [
              { text: "Nein, am Sonntag kann ich nicht.", isCorrect: false },
              { text: "Gute Idee, aber am Sonntag habe ich keine Zeit. Wie wäre es mit Samstag?", isCorrect: true },
              { text: "Ich will am Samstag ins Museum.", isCorrect: false }
            ],
            explanation: "دقیقاً! مخالفت مودبانه (Gute Idee, aber...) همراه با یک پیشنهاد جدید (Wie wäre es mit...) کلید گرفتن نمره کامل در بخش سوم امتحان است."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "کلمات ربط نتیجه و تضاد (Konnektoren)",
        words: [
          {
            de: "deswegen / deshalb / darum",
            fa: "به همین دلیل / بنابراین",
            article: "-",
            plural: "-",
            examples: [
              { de: "Es regnet, deswegen bleiben wir zu Hause.", fa: "باران می‌بارد، به همین دلیل ما در خانه می‌مانیم." }
            ]
          },
          {
            de: "dennoch / trotzdem",
            fa: "با این وجود / با این حال",
            article: "-",
            plural: "-",
            examples: [
              { de: "Die Ausstellung ist teuer, dennoch lohnt sich ein Besuch.", fa: "نمایشگاه گران است، با این وجود ارزش دیدن دارد." }
            ]
          },
          {
            de: "selbst wenn",
            fa: "حتی اگر",
            article: "-",
            plural: "-",
            examples: [
              { de: "Selbst wenn ich müde bin, lese ich abends ein Buch.", fa: "حتی اگر خسته باشم، عصرها کتاب می‌خوانم. (selbst wenn فعل را به آخر می‌برد)." }
            ]
          }
        ]
      },
      {
        title: "برنامه‌ریزی (Planung)",
        words: [
          {
            de: "stattdessen",
            fa: "به جای آن (در عوض)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich mag kein Theater. Wollen wir stattdessen ins Kino gehen?", fa: "من تئاتر دوست ندارم. آیا می‌خواهیم به جایش به سینما برویم؟" }
            ]
          },
          {
            de: "ablehnen",
            fa: "رد کردن (پیشنهاد یا دعوت)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich muss deine Einladung leider ablehnen.", fa: "من متاسفانه باید دعوت تو را رد کنم." }
            ]
          },
          {
            de: "Lust haben (auf + Akk)",
            fa: "حوصله/میل داشتن برای چیزی",
            article: "-",
            plural: "-",
            examples: [
              { de: "Hast du Lust auf einen Filmeabend?", fa: "آیا میل به یک عصر فیلم‌دیدن داری؟" }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Dialog: Konzert oder Kino?\n\nLukas: Hallo Anna! Wir haben für dieses Wochenende noch nichts geplant. Hast du Lust, etwas zusammen zu unternehmen?\nAnna: Hallo Lukas! Ja, gerne. Wie wäre es mit einem Konzert? Es gibt am Samstag ein tolles Jazz-Konzert im Stadtpark.\nLukas: Gute Idee, aber ehrlich gesagt interessiere ich mich nicht besonders für Jazzmusik. Außerdem soll es am Samstagabend regnen, deswegen wäre ein Open-Air-Konzert vielleicht keine gute Wahl.\nAnna: Das stimmt, daran habe ich nicht gedacht. Wir könnten stattdessen ins Kino gehen. Der neue Actionfilm läuft gerade.\nLukas: Super! Den wollte ich sowieso sehen. Selbst wenn er ein bisschen lang ist, lohnt es sich bestimmt.\nAnna: Perfekt. Dann kaufe ich uns die Tickets für Samstag um 20 Uhr.",
      questions: [
        { question: "آنا ابتدا چه پیشنهادی می‌دهد؟ (چه رویدادی و چه زمانی؟)" },
        { question: "چرا لوکاس پیشنهاد آنا را رد می‌کند؟ (دو دلیل بیاورید، از deswegen استفاده کنید)" },
        { question: "آنا به عنوان جایگزین (Alternativen) چه پیشنهادی می‌دهد؟" },
        { question: "لوکاس با وجود طولانی بودن فیلم، نظرش چیست؟ (با توجه به جمله با selbst wenn)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن: مکالمه برنامه‌ریزی (Gemeinsam planen)",
      prompt: "شما و دوستتان می‌خواهید آخر هفته کاری انجام دهید. یک دیالوگ کوتاه (حدود ۸ خط) بنویسید. شما پیشنهاد رفتن به موزه می‌دهید. دوستتان به دلیل گرانی رد می‌کند و در عوض سینما را پیشنهاد می‌دهد. شما موافقت می‌کنید و ساعت قرار را تعیین می‌کنید.",
      steps: [
        {
          title: "پیشنهاد اول",
          text: "استفاده از Hast du Lust... / Wie wäre es mit...",
          example: { de: "Ich: Hast du am Wochenende Zeit? Wie wäre es mit einem Museumsbesuch?", fa: "من: آخر هفته وقت داری؟ نظرت درباره رفتن به موزه چیست؟" }
        },
        {
          title: "مخالفت و دلیل دوست + پیشنهاد جدید",
          text: "استفاده از deswegen و stattdessen.",
          example: { de: "Freund: Gute Idee, aber ich habe wenig Geld, deswegen ist mir das Museum zu teuer. Wollen wir stattdessen ins Kino gehen?", fa: "دوست: ایده خوبی است، اما من پول کمی دارم، به همین دلیل موزه برای من خیلی گران است. می‌خواهیم بجایش به سینما برویم؟" }
        },
        {
          title: "موافقت و تعیین زمان/مکان",
          text: "استفاده از Treffen / Einverstanden.",
          example: { de: "Ich: Einverstanden! Treffen wir uns am Samstag um 18 Uhr vor dem Kino.", fa: "من: موافقم! بیا شنبه ساعت 18 جلوی سینما همدیگر را ببینیم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. ویدیو آموزشی: کلمات ربط پیشرفته",
      source: "Master German Connectors (B1)",
      link: "https://www.youtube.com/watch?v=2YnTIFgMzEY",
      instructions: "تمرین شنیداری ساختار جملات:\nبه جایگاه فعل بعد از کلماتی مثل deswegen و trotzdem دقت کنید. این کلمات در واقع قید هستند، بنابراین جمله بعد از آن‌ها همیشه با فعل شروع می‌شود."
    },
    {
      title: "۲. نمونه واقعی امتحان شفاهی B1",
      source: "Gemeinsam etwas planen (Kino)",
      link: "https://www.youtube.com/watch?v=MjKL-mP7g5w",
      instructions: "تمرین دریافت عبارات تعاملی:\nبه نحوه تعامل دو نفر گوش دهید. آن‌ها مکث می‌کنند، حرف هم را تایید می‌کنند (Da hast du recht) و سپس پیشنهاد خود را می‌دهند."
    }
  ],

  speaking: [
    {
      title: "شبیه‌سازی کامل بخش ۳ امتحان شفاهی (Teil 3)",
      pattern: "Wir müssen... / Hast du eine Idee? / Ich schlage vor... / In Ordnung.",
      exercise: "شما و پارتنرتان وظیفه دارید برای دوستتان که به شهر شما می‌آید یک برنامه آخر هفته بچینید. (نقش دو نفر را خودتان بازی کنید یا با کسی تمرین کنید). قرار است درباره این ۳ مورد تصمیم بگیرید: 1. کجا بروید؟ (موزه/کنسرت) 2. کِی بروید؟ 3. چگونه بروید؟ (ماشین/قطار)."
    },
    {
      title: "مونولوگ جمع‌بندی (Rückblick)",
      pattern: "In den letzten Tagen habe ich gelernt... / Besonders interessant fand ich... / Deswegen...",
      exercise: "یک فایل صوتی ۲ دقیقه‌ای ضبط کنید و به آلمانی بگویید در این ۵ روز اخیر (از روز ۴۱ تا ۴۵) درباره کار، سرگرمی‌ها و رسانه چه چیزهایی یاد گرفتید و چرا این کلمات برایتان مفیدند."
    }
  ],

  cultureTip: "فرهنگ برنامه‌ریزی (Termine planen) در آلمان: آلمانی‌ها عاشق برنامه‌ریزی (Planung) در تقویم (Terminkalender) هستند! در آلمان بسیار غیرعادی است که به دوستتان زنگ بزنید و بگویید «۱۰ دقیقه دیگر بیا بیرون برویم کافه». قرارها معمولاً چندین روز (یا هفته) از قبل تنظیم می‌شوند. آن‌ها برای قرار کافه رفتن هم به هم «Termin» (وقت قرار) پیشنهاد می‌دهند. یادگیری ساختارهای «Gemeinsam planen» (برنامه‌ریزی مشترک) نه تنها برای امتحان B1 اسپیکینگ ضروری است، بلکه کلید داشتن یک زندگی اجتماعی موفق در آلمان است."
};
