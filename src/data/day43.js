export const day43Data = {
  title: "روز ۴۳: اوقات فراغت، سرگرمی‌ها و ارزیابی مسیر",
  objective: "امروز وارد موضوع شیرین اوقات فراغت (Freizeit) و سرگرمی‌ها (Hobbys) می‌شویم که هم در مکالمات روزمره بسیار کاربرد دارد و هم موضوع همیشگی آزمون‌هاست. همچنین یاد می‌گیریم چطور با استفاده از افعال انعکاسی (Reflexivverben) علاقه‌مندی‌های خود را به شکل سطح B1 بیان کنیم.",

  grammarData: {
    subtitle: "افعال انعکاسی با حروف اضافه (sich interessieren für, sich freuen auf).",
    content: [
      {
        type: "text",
        title: "۱. بیان علاقه‌مندی‌ها (Interessen ausdrücken)",
        text: "در سطح پایه می‌گفتیم «Mein Hobby ist...» (سرگرمی من ... است). اما در B1 باید از افعال انعکاسی پیشرفته‌تر استفاده کنیم."
      },
      {
        type: "examples",
        title: "افعال پرکاربرد اوقات فراغت",
        items: [
          { de: "sich interessieren für (+ Akkusativ):", fa: "علاقه‌مند بودن به. (Ich interessiere mich für Fotografie. / من به عکاسی علاقه‌مندم.)" },
          { de: "sich freuen auf (+ Akkusativ):", fa: "با خوشحالی در انتظار چیزی بودن (آینده). (Ich freue mich auf das Wochenende. / بی‌صبرانه منتظر آخر هفته‌ام.)" },
          { de: "sich treffen mit (+ Dativ):", fa: "ملاقات کردن با. (Ich treffe mich am Freitag mit meinen Freunden. / من جمعه با دوستانم قرار می‌گذارم.)" }
        ]
      },
      {
        type: "text",
        title: "۲. توصیف اهمیت (Was ist mir wichtig?)",
        text: "برای اینکه بگویید چه چیزی در اوقات فراغت برایتان مهم است، از ساختارهای توابع (dass-Satz) استفاده کنید."
      },
      {
        type: "examples",
        title: "ساختارهای طلایی",
        items: [
          { de: "Mir ist wichtig, dass ich nach der Arbeit entspannen kann.", fa: "برای من مهم است که بتوانم بعد از کار استراحت کنم." },
          { de: "Am meisten Spaß macht mir, neue Orte zu entdecken.", fa: "بیشترین لذت برای من این است که (zu entdecken) مکان‌های جدید را کشف کنم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: حروف اضافه",
        questions: [
          {
            question: "شما می‌خواهید بگویید «من به موسیقی پاپ علاقه دارم.» جای خالی را پر کنید: Ich interessiere mich _____ Popmusik.",
            questionDe: "Welche Präposition ist richtig?",
            options: [
              { text: "an", isCorrect: false },
              { text: "für", isCorrect: true },
              { text: "über", isCorrect: false }
            ],
            explanation: "آفرین! sich interessieren همیشه با حرف اضافه «für» (برای/به) همراه است."
          },
          {
            question: "شما فردا مسافرت می‌روید و بسیار خوشحال هستید. چطور می‌گویید «من بی‌صبرانه منتظر سفر هستم.»؟",
            questionDe: "Wie drückt man Vorfreude aus?",
            options: [
              { text: "Ich freue mich über die Reise.", isCorrect: false },
              { text: "Ich freue mich für die Reise.", isCorrect: false },
              { text: "Ich freue mich auf die Reise.", isCorrect: true }
            ],
            explanation: "دقیقاً! وقتی چیزی در آینده اتفاق می‌افتد و ما منتظرش هستیم، از «sich freuen auf» استفاده می‌کنیم."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "اوقات فراغت و سرگرمی",
        words: [
          {
            de: "die Freizeitmöglichkeit",
            fa: "امکان/گزینه تفریحی",
            article: "die",
            plural: "die Freizeitmöglichkeiten",
            examples: [
              { de: "In Berlin gibt es unzählige Freizeitmöglichkeiten.", fa: "در برلین گزینه‌های تفریحی بی‌شماری وجود دارد." }
            ]
          },
          {
            de: "abschalten",
            fa: "آرام شدن / از فکر کار بیرون آمدن (ریکاوری ذهنی)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Beim Sport kann ich am besten abschalten.", fa: "هنگام ورزش می‌توانم به بهترین شکل ذهنم را آزاد کنم." }
            ]
          },
          {
            de: "sich interessieren für (+ Akk)",
            fa: "علاقه داشتن به",
            article: "-",
            plural: "-",
            examples: [
              { de: "Interessierst du dich für Kunst?", fa: "آیا به هنر علاقه داری؟" }
            ]
          },
          {
            de: "das Kulturangebot",
            fa: "پیشنهاد / برنامه فرهنگی (تئاتر، موزه، کنسرت)",
            article: "das",
            plural: "die Kulturangebote",
            examples: [
              { de: "Das Kulturangebot dieser Stadt ist fantastisch.", fa: "برنامه‌های فرهنگی این شهر خارق‌العاده است." }
            ]
          }
        ]
      },
      {
        title: "ارزیابی و زمان",
        words: [
          {
            de: "in letzter Zeit",
            fa: "اخیراً / در این اواخر",
            article: "-",
            plural: "-",
            examples: [
              { de: "In letzter Zeit lese ich wieder öfter.", fa: "اخیراً دوباره بیشتر مطالعه می‌کنم." }
            ]
          },
          {
            de: "ehrlich gesagt",
            fa: "راستش را بخواهید / صادقانه بگویم",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ehrlich gesagt habe ich kaum noch Freizeit.", fa: "صادقانه بگویم من تقریباً دیگر وقت آزادی ندارم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Freizeit und Erholung nach der Arbeit\n\nEhrlich gesagt war mein Alltag in letzter Zeit sehr stressig. Ich habe viel gearbeitet und hatte kaum Zeit für mich selbst. Aber mir ist klar geworden, dass ich einen Ausgleich brauche. Mir ist wichtig, dass ich nach der Arbeit abschalten kann.\nDeshalb interessiere ich mich jetzt mehr für Sport und Kultur. In meiner Stadt gibt es zum Glück viele Freizeitmöglichkeiten. Am Wochenende treffe ich mich oft mit meinen Freunden. Wir gehen spazieren oder nutzen das große Kulturangebot der Stadt, zum Beispiel besuchen wir Ausstellungen. Am meisten Spaß macht mir jedoch das Fotografieren in der Natur. Jetzt freue ich mich schon sehr auf das nächste Wochenende, weil wir einen kleinen Ausflug ans Meer geplant haben.",
      questions: [
        { question: "چرا راوی تصمیم گرفته به اوقات فراغتش بیشتر اهمیت دهد؟ (با توجه به جمله اول)" },
        { question: "برای راوی چه چیزی بعد از کار مهم است؟ (با استفاده از abschalten پاسخ دهید)" },
        { question: "او در آخر هفته‌ها با دوستانش چه کار می‌کند؟ (دو فعالیت را نام ببرید)" },
        { question: "بیشترین لذت (Am meisten Spaß) برای او چیست؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن: سرگرمی‌ها و علایق شما",
      prompt: "در یک پاراگراف (حدود ۷ خط) توضیح دهید اخیراً (in letzter Zeit) در اوقات فراغتتان چه می‌کنید. از دو فعل انعکاسی (sich interessieren für / sich treffen mit) استفاده کنید و بگویید برای آرامش ذهنی (abschalten) چه کاری به شما بیشترین لذت را می‌دهد.",
      steps: [
        {
          title: "وضعیت اخیر",
          text: "استفاده از In letzter Zeit.",
          example: { de: "In letzter Zeit habe ich abends wieder mehr Freizeit.", fa: "اخیراً عصرها دوباره وقت آزاد بیشتری دارم." }
        },
        {
          title: "علایق و دوستان",
          text: "استفاده از sich interessieren و sich treffen.",
          example: { de: "Ich interessiere mich für Geschichte und treffe mich oft mit alten Freunden.", fa: "من به تاریخ علاقه دارم و اغلب با دوستان قدیمی قرار می‌گذارم." }
        },
        {
          title: "آرامش و لذت",
          text: "استفاده از um abzuschalten و am meisten Spaß macht mir...",
          example: { de: "Um nach der Arbeit abzuschalten, höre ich Musik. Am meisten Spaß macht mir das Kochen am Wochenende.", fa: "برای اینکه بعد از کار ذهنم را آزاد کنم موزیک گوش می‌دهم. بیشترین تفریح برای من آشپزی در آخر هفته است." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. پادکست سرگرمی‌ها (Hobbys)",
      source: "Deutsch Podcast B1: Über Hobbys sprechen",
      link: "https://www.youtube.com/watch?v=qHyskezr54k",
      instructions: "تمرین دریافت عبارات پرکردنی (Füllwörter):\nهنگام گوش دادن به مکالمه دو نفر درباره سرگرمی‌هایشان، به کلماتی مثل «ehrlich gesagt» (صادقانه بگویم)، «eigentlich» (در واقع) یا «naja» (خب) دقت کنید. این کلمات مکالمه شما را بسیار طبیعی (بومی‌طور) می‌کنند."
    },
    {
      title: "۲. خودارزیابی و یادگیری (Reflexion)",
      source: "My Path to B1 (Review)",
      link: "https://theawesomegermanlanguage.com/my-path-to-b1/",
      instructions: "تمرین مرور ساختارها:\nدر مکالمات پیشخوانده، ساختار فعل جایگاه 2 (Hauptsatz) و فعل در انتها (Nebensatz) را مرور کنید."
    }
  ],

  speaking: [
    {
      title: "مونولوگ: اوقات فراغت من",
      pattern: "Ehrlich gesagt... In letzter Zeit... Ich interessiere mich für... Um abzuschalten...",
      exercise: "مدت ۲ دقیقه بدون وقفه صحبت کنید. ابتدا بگویید آیا در طول هفته وقت آزاد دارید یا نه. سپس توضیح دهید آخر هفته‌ها به چه چیزی علاقه دارید و چگونه خستگی در می‌کنید."
    },
    {
      title: "نقش‌آفرینی: برنامه‌ریزی آخر هفته",
      pattern: "Was hältst du davon, wenn...? / Ich freue mich auf...",
      exercise: "با یک دوست فرضی برای شنبه برنامه بچینید. A: «من به موزه علاقه دارم، چطور است به نمایشگاه برویم؟» B: «ایده خوبی است، من هم بی‌صبرانه منتظر آخر هفته‌ام!»"
    }
  ],

  cultureTip: "اهمیت Vereine (انجمن‌ها و باشگاه‌ها) در آلمان: یکی از بهترین راه‌ها برای پیدا کردن دوست آلمانی و ادغام (Integration) در جامعه، عضویت در یک «Verein» است. تقریباً برای هر چیزی در آلمان یک باشگاه وجود دارد: Sportverein (باشگاه ورزشی، مخصوصاً فوتبال محلی)، Musikverein (گروه موسیقی)، و حتی Kleingartenverein (انجمن باغچه‌های کوچک). آلمانی‌ها اوقات فراغت خود را بسیار جدی می‌گیرند و عضویت در این باشگاه‌ها بخش بزرگی از زندگی اجتماعی آن‌ها را تشکیل می‌دهد."
};
