export const day46Data = {
  title: "روز ۴۶: سلامتی، تغذیه و سبک زندگی سالم",
  objective: "امروز وارد مبحث بسیار مهم سلامتی (Gesundheit) و تغذیه (Ernährung) می‌شویم. یاد می‌گیریم چطور درباره یک سبک زندگی سالم صحبت کنیم و با تکنیک سایه‌خوانی (Shadowing) لحن و ریتم طبیعی آلمانی خود را بهبود ببخشیم.",

  grammarData: {
    subtitle: "توصیف عادت‌ها با indem و مرور کلمات ربط پیشرفته.",
    content: [
      {
        type: "text",
        title: "۱. تعریف سبک زندگی سالم (Gesunder Lebensstil)",
        text: "در ازمون B1 و مکالمات روزمره، اغلب از شما می‌پرسند که چگونه سالم می‌مانید. برای پاسخ به این سوال، واژگان کلیدیِ تغذیه، حرکت و استرس ضروری هستند."
      },
      {
        type: "examples",
        title: "جملات طلایی برای سلامتی",
        items: [
          { de: "Ein gesunder Lebensstil bedeutet für mich, dass ich mich ausgewogen ernähre.", fa: "یک سبک زندگی سالم برای من به این معناست که تغذیه متعادلی داشته باشم." },
          { de: "Ich versuche, dreimal pro Woche Sport zu treiben, um fit zu bleiben.", fa: "من سعی می‌کنم هفته‌ای سه بار ورزش کنم تا روی فرم (فیت) بمانم." },
          { de: "Es ist wichtig, Stress abzubauen und genug zu schlafen.", fa: "مهم است که استرس را کاهش دهیم و به اندازه کافی بخوابیم." }
        ]
      },
      {
        type: "text",
        title: "۲. بیان «چگونگی» با کلمه ربط indem (با انجامِ... / از طریقِ...)",
        text: "وقتی می‌خواهید توضیح دهید که «چطور / از چه طریقی» به یک هدف می‌رسید، از کلمه ربط indem استفاده کنید. این کلمه یک ساختار بسیار قوی سطح B1+ است."
      },
      {
        type: "examples",
        title: "استفاده از indem",
        items: [
          { de: "Ich nehme ab, indem ich auf Süßigkeiten verzichte.", fa: "من وزن کم می‌کنم، از این طریق که (با) پرهیز از شیرینی‌جات. (فعل به آخر می‌رود)." },
          { de: "Man bleibt gesund, indem man sich viel bewegt.", fa: "آدم سالم می‌ماند، از این طریق که زیاد تحرک داشته باشد." }
        ]
      },
      {
        type: "text",
        title: "۳. تکنیک سایه‌خوانی (Shadowing)",
        text: "سایه‌خوانی یعنی شما به یک فایل صوتی گوش دهید و دقیقاً همزمان (یا با کسر ثانیه تاخیر) سعی کنید با همان لحن، ریتم و تاکید (Betonung) جملات را تکرار کنید. این بهترین راه برای طبیعی شدن لهجه شماست."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: سلامت و گرامر",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «من استرس را کاهش می‌دهم، با انجام یوگا (از طریق انجام یوگا)».",
            questionDe: "Wie übersetzen Sie das?",
            options: [
              { text: "Ich baue Stress ab, weil ich Yoga mache.", isCorrect: false },
              { text: "Ich baue Stress ab, indem ich Yoga mache.", isCorrect: true },
              { text: "Ich baue Stress ab, damit ich Yoga mache.", isCorrect: false }
            ],
            explanation: "آفرین! کلمه indem دقیقاً به معنای «از طریقِ / با انجام دادنِ کاری» است."
          },
          {
            question: "کدام صفت برای توصیف یک رژیم غذایی خوب و همه‌جانبه استفاده می‌شود؟",
            questionDe: "Welches Adjektiv passt am besten?",
            options: [
              { text: "schnell", isCorrect: false },
              { text: "ausgewogen", isCorrect: true },
              { text: "salzig", isCorrect: false }
            ],
            explanation: "دقیقاً! eine ausgewogene Ernährung یعنی تغذیه متعادل (شامل پروتئین، سبزیجات، کربوهیدرات و...)."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "سبک زندگی و سلامتی",
        words: [
          {
            de: "der Lebensstil",
            fa: "سبک زندگی",
            article: "der",
            plural: "die Lebensstile",
            examples: [
              { de: "Sie führt einen sehr gesunden Lebensstil.", fa: "او یک سبک زندگی بسیار سالم را هدایت می‌کند (دارد)." }
            ]
          },
          {
            de: "die Gesundheit",
            fa: "سلامتی",
            article: "die",
            plural: "-",
            examples: [
              { de: "Gesundheit ist das Wichtigste im Leben.", fa: "سلامتی مهم‌ترین چیز در زندگی است." }
            ]
          },
          {
            de: "Stress abbauen",
            fa: "کاهش دادن و از بین بردن استرس",
            article: "-",
            plural: "-",
            examples: [
              { de: "Spazieren im Wald hilft mir, Stress abzubauen.", fa: "قدم زدن در جنگل به من کمک می‌کند تا استرس را کاهش دهم." }
            ]
          },
          {
            de: "sich bewegen",
            fa: "تحرک داشتن / حرکت کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ärzte empfehlen, sich jeden Tag mindestens 30 Minuten zu bewegen.", fa: "پزشکان توصیه می‌کنند هر روز حداقل 30 دقیقه تحرک داشته باشید." }
            ]
          }
        ]
      },
      {
        title: "تغذیه (Ernährung)",
        words: [
          {
            de: "die Ernährung",
            fa: "تغذیه / رژیم غذایی",
            article: "die",
            plural: "-",
            examples: [
              { de: "Eine schlechte Ernährung kann krank machen.", fa: "یک تغذیه بد می‌تواند آدم را بیمار کند." }
            ]
          },
          {
            de: "ausgewogen",
            fa: "متعادل / بالانس شده",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich achte auf eine ausgewogene Ernährung.", fa: "من به یک تغذیه متعادل توجه می‌کنم." }
            ]
          },
          {
            de: "abnehmen / zunehmen",
            fa: "وزن کم کردن / وزن اضافه کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich möchte bis zum Sommer fünf Kilo abnehmen.", fa: "من می‌خواهم تا تابستان پنج کیلو وزن کم کنم." }
            ]
          },
          {
            de: "die Mahlzeit",
            fa: "وعده غذایی",
            article: "die",
            plural: "die Mahlzeiten",
            examples: [
              { de: "Man sollte drei Hauptmahlzeiten am Tag essen.", fa: "آدم باید روزی سه وعده اصلی بخورد." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Mein Weg zu einem gesunden Lebensstil\n\nFrüher habe ich oft Fast Food gegessen und mich kaum bewegt. Ich hatte oft Stress bei der Arbeit und habe schlecht geschlafen. Letztes Jahr habe ich beschlossen, meinen Lebensstil komplett zu ändern. \nHeute achte ich sehr auf meine Gesundheit. Ich versuche fit zu bleiben, indem ich dreimal pro Woche joggen gehe. Außerdem ist mir eine ausgewogene Ernährung sehr wichtig geworden. Ich koche fast jeden Tag frisch mit viel Gemüse und esse nur selten Süßigkeiten. Wenn ich Stress habe, baue ich ihn ab, indem ich Yoga mache oder entspannende Musik höre. Selbst wenn ich manchmal Lust auf eine ungesunde Mahlzeit habe, erinnere ich mich daran, wie viel besser ich mich heute fühle. Insgesamt habe ich durch diese Veränderungen nicht nur fünf Kilo abgenommen, sondern auch viel mehr Energie für den Alltag.",
      questions: [
        { question: "راوی در گذشته چه سبک زندگی‌ای داشت؟ (دو مورد از متن بیاورید)" },
        { question: "او در حال حاضر برای حفظ تناسب اندام چه می‌کند؟ (با استفاده از indem جواب دهید)" },
        { question: "او چگونه استرس خود را مدیریت (کاهش) می‌دهد؟ (دو روش)" },
        { question: "نتیجه نهایی این تغییرات برای او چه بوده است؟ (کاهش وزن و چه چیز دیگری؟)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن: بررسی سبک زندگی شما",
      prompt: "در یک پاراگراف (حدود ۸ خط) سبک زندگی خود را ارزیابی کنید. آیا سالم زندگی می‌کنید؟ چه می‌خورید؟ چقدر تحرک دارید؟ حتماً یک بار از ساختار indem (برای روش انجام کار) و یک بار از deshalb یا trotzdem استفاده کنید.",
      steps: [
        {
          title: "ارزیابی کلی سلامتی",
          text: "استفاده از Ein gesunder Lebensstil ist für mich...",
          example: { de: "Gesundheit ist mir sehr wichtig, deshalb versuche ich, gesund zu leben.", fa: "سلامتی برای من بسیار مهم است، بنابراین سعی می‌کنم سالم زندگی کنم." }
        },
        {
          title: "تغذیه و تحرک",
          text: "استفاده از ausgewogen و sich bewegen.",
          example: { de: "Ich ernähre mich ausgewogen. Ich halte mich fit, indem ich oft schwimme.", fa: "من متعادل تغذیه می‌کنم. من خودم را روی فرم نگه می‌دارم، از این طریق که اغلب شنا می‌کنم." }
        },
        {
          title: "استرس و خواب",
          text: "استفاده از Stress abbauen.",
          example: { de: "Manchmal habe ich Stress auf der Arbeit, trotzdem schlafe ich 8 Stunden, um fit zu sein.", fa: "گاهی در سرکار استرس دارم، با این حال 8 ساعت می‌خوابم تا روی فرم باشم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. ویدیو کوتاه: زندگی سالم (B1)",
      source: "Healthy Lifestyle Tipps",
      link: "https://www.youtube.com/shorts/Bz1tgYapNoE",
      instructions: "تمرین شنیدن نکات کلیدی:\nبه توصیه‌هایی که برای سلامتی می‌شود دقت کنید. آیا آن‌ها کلماتی مثل Schlaf (خواب)، Wasser trinken (آب نوشیدن) یا Obst (میوه) را ذکر می‌کنند؟"
    },
    {
      title: "۲. پادکست تغذیه (Ernährung)",
      source: "Deutsch Podcast B1: Gesunde Ernährung",
      link: "https://www.youtube.com/watch?v=7D3ckagwTHI",
      instructions: "تمرین دریافت دلایل:\nوقتی گویندگان درباره رژیم‌های خاص (مثلا گیاه‌خواری - vegetarisch) صحبت می‌کنند، به دلایل آن‌ها گوش دهید. (مثلاً wegen der Umwelt = به خاطر محیط زیست)."
    }
  ],

  speaking: [
    {
      title: "مونولوگ سلامتی در امتحان شفاهی (Teil 2)",
      pattern: "Meine Erfahrungen... / Die Situation in meinem Heimatland... / Vor- und Nachteile...",
      exercise: "مدت ۳ دقیقه درباره موضوع «آیا فست‌فود باید در مدارس ممنوع شود؟» یا «اهمیت تغذیه سالم» صحبت کنید. \n۱. تجربه خودتان را بگویید (من سبزیجات دوست دارم).\n۲. وضعیت در کشور خودتان را بگویید (در ایران غذای خانگی مهم است).\n۳. مزایا و معایب را بگویید و نتیجه‌گیری کنید."
    },
    {
      title: "سایه‌خوانی (Shadowing) مکالمه سلامتی",
      pattern: "تکرار همزمان با لحن گوینده",
      exercise: "یک پادکست (مثلا لینک روز 183) را پخش کنید. یک هدفون بگذارید. وقتی گوینده جمله‌ای می‌گوید، شما هم دقیقاً با همان بالا و پایین بردن صدا (Intonation) آن را تکرار کنید. سعی کنید لهجه آلمانی (محکم بودن کلمات) را تقلید کنید."
    }
  ],

  cultureTip: "فرهنگ نان (Brotkultur) و غذای ارگانیک (Bio) در آلمان: آلمان دارای بیش از 3000 نوع نان مختلف است! برای آلمانی‌ها، نانِ سبوس‌دار و تیره (Vollkornbrot) نماد سلامتی است، برخلاف نان سفید که آن را ناسالم می‌دانند. وعده شام در آلمان معمولاً سرد است و به آن «Abendbrot» (نانِ عصر) می‌گویند که شامل نان، پنیر و کالباس است. همچنین، محصولات ارگانیک (Bio-Produkte) در آلمان بسیار محبوب هستند. بسیاری از آلمانی‌ها حاضرند پول بیشتری برای خرید گوشت یا سبزیجاتی بدهند که بدون مواد شیمیایی تولید شده‌اند."
};
