export const day46Data = {
  title: "روز ۴۶: س'امتی، تغذیه و سبک زندگی سا'م",
  objective: "امروز وارد مبحث بسیار مهم س'امتی (Gesundheit) و تغذیه (Ernährung) می‌شویم. یاد می‌گیریم چطور درباره یک سبک زندگی سا'م صحبت کنیم و با تکنیک سایه‌خوانی (Shadowing) 'حن و ریتم طبیعی آ'مانی خود را بهبود ببخشیم.",

  grammarData: {
    subtitle: "توصیف عادت‌ها با indem و مرور ک'مات ربط پیشرفته.",
    content: [
      {
        type: "text",
        title: "۱. تعریف سبک زندگی سا'م (Gesunder Lebensstil)",
        text: "در ازمون B1 و مکا'مات روزمره، اغ'ب از شما می‌پرسند که چگونه سا'م می‌مانید. برای پاسخ به این سوا'، واژگان ک'یدیِ تغذیه، حرکت و استرس ضروری هستند."
      },
      {
        type: "examples",
        title: "جم'ات ط'ایی برای س'امتی",
        items: [
          { de: "Ein gesunder Lebensstil bedeutet für mich, dass ich mich ausgewogen ernähre.", fa: "یک سبک زندگی سا'م برای من به این معناست که تغذیه متعاد'ی داشته باشم." },
          { de: "Ich versuche, dreimal pro Woche Sport zu treiben, um fit zu bleiben.", fa: "من سعی می‌کنم هفته‌ای سه بار ورزش کنم تا روی فرم (فیت) بمانم." },
          { de: "Es ist wichtig, Stress abzubauen und genug zu schlafen.", fa: "مهم است که استرس را کاهش دهیم و به اندازه کافی بخوابیم." }
        ]
      },
      {
        type: "text",
        title: "۲. بیان «چگونگی» با ک'مه ربط indem (با انجامِ... / از طریقِ...)",
        text: "وقتی می‌خواهید توضیح دهید که «چطور / از چه طریقی» به یک هدف می‌رسید، از ک'مه ربط indem استفاده کنید. این ک'مه یک ساختار بسیار قوی سطح B1+ است."
      },
      {
        type: "examples",
        title: "استفاده از indem",
        items: [
          { de: "Ich nehme ab, indem ich auf Süßigkeiten verzichte.", fa: "من وزن کم می‌کنم، از این طریق که (با) پرهیز از شیرینی‌جات. (فع' به آخر می‌رود)." },
          { de: "Man bleibt gesund, indem man sich viel bewegt.", fa: "آدم سا'م می‌ماند، از این طریق که زیاد تحرک داشته باشد." }
        ]
      },
      {
        type: "text",
        title: "۳. تکنیک سایه‌خوانی (Shadowing)",
        text: "سایه‌خوانی یعنی شما به یک فای' صوتی گوش دهید و دقیقاً همزمان (یا با کسر ثانیه تاخیر) سعی کنید با همان 'حن، ریتم و تاکید (Betonung) جم'ات را تکرار کنید. این بهترین راه برای طبیعی شدن 'هجه شماست."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مط'ب: س'امت و گرامر",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «من استرس را کاهش می‌دهم، با انجام یوگا (از طریق انجام یوگا)».",
            questionDe: "Wie übersetzen Sie das?",
            options: [
              { text: "Ich baue Stress ab, weil ich Yoga mache.", isCorrect: false },
              { text: "Ich baue Stress ab, indem ich Yoga mache.", isCorrect: true },
              { text: "Ich baue Stress ab, damit ich Yoga mache.", isCorrect: false }
            ],
            explanation: "آفرین! ک'مه indem دقیقاً به معنای «از طریقِ / با انجام دادنِ کاری» است."
          },
          {
            question: "کدام صفت برای توصیف یک رژیم غذایی خوب و همه‌جانبه استفاده می‌شود؟",
            questionDe: "Welches Adjektiv passt am besten?",
            options: [
              { text: "schnell", isCorrect: false },
              { text: "ausgewogen", isCorrect: true },
              { text: "salzig", isCorrect: false }
            ],
            explanation: "دقیقاً! eine ausgewogene Ernährung یعنی تغذیه متعاد' (شام' پروتئین، سبزیجات، کربوهیدرات و...)."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "سبک زندگی و س'امتی",
        words: [
          {
            de: "der Lebensstil",
            fa: "سبک زندگی",
            article: "der",
            plural: "die Lebensstile",
            examples: [
              { de: "Sie führt einen sehr gesunden Lebensstil.", fa: "او یک سبک زندگی بسیار سا'م را هدایت می‌کند (دارد)." }
            ]
          },
          {
            de: "die Gesundheit",
            fa: "س'امتی",
            article: "die",
            plural: "-",
            examples: [
              { de: "Gesundheit ist das Wichtigste im Leben.", fa: "س'امتی مهم‌ترین چیز در زندگی است." }
            ]
          },
          {
            de: "Stress abbauen",
            fa: "کاهش دادن و از بین بردن استرس",
            article: "-",
            plural: "-",
            examples: [
              { de: "Spazieren im Wald hilft mir, Stress abzubauen.", fa: "قدم زدن در جنگ' به من کمک می‌کند تا استرس را کاهش دهم." }
            ]
          },
          {
            de: "sich bewegen",
            fa: "تحرک داشتن / حرکت کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "'rzte empfehlen, sich jeden Tag mindestens 30 Minuten zu bewegen.", fa: "پزشکان توصیه می‌کنند هر روز حداق' 30 دقیقه تحرک داشته باشید." }
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
            fa: "متعاد' / با'انس شده",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich achte auf eine ausgewogene Ernährung.", fa: "من به یک تغذیه متعاد' توجه می‌کنم." }
            ]
          },
          {
            de: "abnehmen / zunehmen",
            fa: "وزن کم کردن / وزن اضافه کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich möchte bis zum Sommer fünf Kilo abnehmen.", fa: "من می‌خواهم تا تابستان پنج کی'و وزن کم کنم." }
            ]
          },
          {
            de: "die Mahlzeit",
            fa: "وعده غذایی",
            article: "die",
            plural: "die Mahlzeiten",
            examples: [
              { de: "Man sollte drei Hauptmahlzeiten am Tag essen.", fa: "آدم باید روزی سه وعده اص'ی بخورد." }
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
        { question: "او در حا' حاضر برای حفظ تناسب اندام چه می‌کند؟ (با استفاده از indem جواب دهید)" },
        { question: "او چگونه استرس خود را مدیریت (کاهش) می‌دهد؟ (دو روش)" },
        { question: "نتیجه نهایی این تغییرات برای او چه بوده است؟ (کاهش وزن و چه چیز دیگری؟)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن: بررسی سبک زندگی شما",
      prompt: "در یک پاراگراف (حدود ۸ خط) سبک زندگی خود را ارزیابی کنید. آیا سا'م زندگی می‌کنید؟ چه می‌خورید؟ چقدر تحرک دارید؟ حتماً یک بار از ساختار indem (برای روش انجام کار) و یک بار از deshalb یا trotzdem استفاده کنید.",
      steps: [
        {
          title: "ارزیابی ک'ی س'امتی",
          text: "استفاده از Ein gesunder Lebensstil ist für mich...",
          example: { de: "Gesundheit ist mir sehr wichtig, deshalb versuche ich, gesund zu leben.", fa: "س'امتی برای من بسیار مهم است، بنابراین سعی می‌کنم سا'م زندگی کنم." }
        },
        {
          title: "تغذیه و تحرک",
          text: "استفاده از ausgewogen و sich bewegen.",
          example: { de: "Ich ernähre mich ausgewogen. Ich halte mich fit, indem ich oft schwimme.", fa: "من متعاد' تغذیه می‌کنم. من خودم را روی فرم نگه می‌دارم، از این طریق که اغ'ب شنا می‌کنم." }
        },
        {
          title: "استرس و خواب",
          text: "استفاده از Stress abbauen.",
          example: { de: "Manchmal habe ich Stress auf der Arbeit, trotzdem schlafe ich 8 Stunden, um fit zu sein.", fa: "گاهی در سرکار استرس دارم، با این حا' 8 ساعت می‌خوابم تا روی فرم باشم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. ویدیو کوتاه: زندگی سا'م (B1)",
      source: "Healthy Lifestyle Tipps",
      link: "https://www.youtube.com/shorts/Bz1tgYapNoE",
      instructions: "تمرین شنیدن نکات ک'یدی:\nبه توصیه‌هایی که برای س'امتی می‌شود دقت کنید. آیا آن‌ها ک'ماتی مث' Schlaf (خواب)، Wasser trinken (آب نوشیدن) یا Obst (میوه) را ذکر می‌کنند؟"
    },
    {
      title: "۲. پادکست تغذیه (Ernährung)",
      source: "Deutsch Podcast B1: Gesunde Ernährung",
      link: "https://www.youtube.com/watch?v=7D3ckagwTHI",
      instructions: "تمرین دریافت د'ای':\nوقتی گویندگان درباره رژیم‌های خاص (مث'ا گیاه‌خواری - vegetarisch) صحبت می‌کنند، به د'ای' آن‌ها گوش دهید. (مث'اً wegen der Umwelt = به خاطر محیط زیست)."
    }
  ],

  speaking: [
    {
      title: "مونو'وگ س'امتی در امتحان شفاهی (Teil 2)",
      pattern: "Meine Erfahrungen... / Die Situation in meinem Heimatland... / Vor- und Nachteile...",
      exercise: "مدت ۳ دقیقه درباره موضوع «آیا فست‌فود باید در مدارس ممنوع شود؟» یا «اهمیت تغذیه سا'م» صحبت کنید. \n۱. تجربه خودتان را بگویید (من سبزیجات دوست دارم).\n۲. وضعیت در کشور خودتان را بگویید (در ایران غذای خانگی مهم است).\n۳. مزایا و معایب را بگویید و نتیجه‌گیری کنید."
    },
    {
      title: "سایه‌خوانی (Shadowing) مکا'مه س'امتی",
      pattern: "تکرار همزمان با 'حن گوینده",
      exercise: "یک پادکست (مث'ا 'ینک روز 183) را پخش کنید. یک هدفون بگذارید. وقتی گوینده جم'ه‌ای می‌گوید، شما هم دقیقاً با همان با'ا و پایین بردن صدا (Intonation) آن را تکرار کنید. سعی کنید 'هجه آ'مانی (محکم بودن ک'مات) را تق'ید کنید."
    }
  ],

  cultureTip: "فرهنگ نان (Brotkultur) و غذای ارگانیک (Bio) در آ'مان: آ'مان دارای بیش از 3000 نوع نان مخت'ف است! برای آ'مانی‌ها، نانِ سبوس‌دار و تیره (Vollkornbrot) نماد س'امتی است، برخ'اف نان سفید که آن را ناسا'م می‌دانند. وعده شام در آ'مان معمو'اً سرد است و به آن «Abendbrot» (نانِ عصر) می‌گویند که شام' نان، پنیر و کا'باس است. همچنین، محصو'ات ارگانیک (Bio-Produkte) در آ'مان بسیار محبوب هستند. بسیاری از آ'مانی‌ها حاضرند پو' بیشتری برای خرید گوشت یا سبزیجاتی بدهند که بدون مواد شیمیایی تو'ید شده‌اند."
};
