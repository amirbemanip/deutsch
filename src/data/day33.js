export const day33Data = {
  title: "روز ۳۳: هابی‌ها، ورزش و ارزیابی سطح مکالمه",
  objective: "امروز یاد می‌گیریم چطور درباره سرگرمی‌ها (Hobbys) و ورزش با ساختار B1 صحبت کنیم (از چه زمانی؟ هر چند وقت یکبار؟ چرا؟). همچنین یک ایستگاه ارزیابی داریم تا نقاط ضعف مکالمه خود را شناسایی کنیم.",

  grammarData: {
    subtitle: "استفاده از قیدهای زمان (seit wann / wie oft) و ساختارهای مقایسه‌ای (früher vs heute).",
    content: [
      {
        type: "text",
        title: "۱. صحبت درباره سرگرمی‌ها (Hobbys B1)",
        text: "در سطح A1 می‌گفتیم: «Ich spiele Fußball». در سطح B1 باید جزئیات اضافه کنیم: زمان شروع، فرکانس (تعداد دفعات) و دلیلِ دوست داشتن آن."
      },
      {
        type: "examples",
        title: "الگوی کامل معرفی سرگرمی",
        items: [
          { de: "Seit wann?", fa: "Seit meiner Schulzeit / Seit drei Jahren / Schon immer (از همیشه)" },
          { de: "Wie oft?", fa: "Zwei- bis dreimal pro Woche / Jedes Wochenende / Fast jeden Tag" },
          { de: "Warum?", fa: "Weil es der perfekte Ausgleich zum Alltag ist. / Um fit zu bleiben." },
          { de: "ترکیب کامل:", fa: "Seit meiner Schulzeit spiele ich Fußball. Ich trainiere dreimal pro Woche, weil es der perfekte Ausgleich zum Alltag ist." }
        ]
      },
      {
        type: "text",
        title: "۲. مقایسه گذشته و حال (Früher vs. Heute)",
        text: "یکی از مهارت‌های مهم در مکالمه B1، توانایی مقایسه عادت‌های گذشته با الان است. برای این کار به راحتی زمان گذشته (Perfekt/Präteritum) را با حال (Präsens) در دو جمله جداگانه می‌آوریم."
      },
      {
        type: "examples",
        title: "مثال مقایسه زمانی",
        items: [
          { de: "Früher habe ich kaum Sport gemacht, weil ich viel gearbeitet habe.", fa: "قبلاً من به ندرت ورزش می‌کردم، چون خیلی کار می‌کردم. (استفاده از Perfekt)." },
          { de: "Heute gehe ich jedoch regelmäßig ins Fitnessstudio, um fit zu bleiben.", fa: "اما امروز به طور منظم به باشگاه می‌روم تا روی فرم بمانم. (استفاده از Präsens + jedoch + um...zu)." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ساختارهای توصیفی",
        questions: [
          {
            question: "کدام سوال برای پرسیدن درباره فرکانسِ یک سرگرمی استفاده می‌شود؟",
            questionDe: "Wie fragt man nach der Häufigkeit?",
            options: [
              { text: "Seit wann machst du Yoga?", isCorrect: false },
              { text: "Wie oft machst du Yoga?", isCorrect: true },
              { text: "Warum machst du Yoga?", isCorrect: false }
            ],
            explanation: "آفرین! «Wie oft» (هر چند وقت یکبار / چند بار) برای پرسیدن درباره فرکانس استفاده می‌شود."
          },
          {
            question: "شما می‌خواهید بگویید که ورزش برای شما راهی برای فرار از استرس روزمره است. بهترین کلمه کدام است؟",
            questionDe: "Welches Wort passt am besten?",
            options: [
              { text: "Sport ist für mich ein Problem.", isCorrect: false },
              { text: "Sport ist für mich ein großer Ausgleich.", isCorrect: true },
              { text: "Sport ist für mich eine Kondition.", isCorrect: false }
            ],
            explanation: "دقیقاً! کلمه der Ausgleich (تعادل / جبران) یک کلمه طلایی در سطح B1/B2 است که نشان می‌دهد فعالیتی به شما کمک می‌کند استرس کار یا روزمره را «جبران» و متعادل کنید."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "کلمات طلایی برای سرگرمی (Freizeit)",
        words: [
          {
            de: "der Ausgleich",
            fa: "تعادل / جبران / خروج از فشار",
            article: "der",
            plural: "die Ausgleiche",
            examples: [
              { de: "Musik ist für mich ein guter Ausgleich zum Stress.", fa: "موسیقی برای من یک تعادلِ خوب برای (در برابر) استرس است." }
            ]
          },
          {
            de: "regelmäßig",
            fa: "به طور منظم",
            article: "-",
            plural: "-",
            examples: [
              { de: "Man muss regelmäßig Vokabeln lernen.", fa: "آدم باید به طور منظم لغات را یاد بگیرد." }
            ]
          },
          {
            de: "kaum",
            fa: "به ندرت / خیلی کم / به سختی",
            article: "-",
            plural: "-",
            examples: [
              { de: "Früher hatte ich kaum Freizeit.", fa: "قبلاً من به ندرت وقت آزاد داشتم." }
            ]
          },
          {
            de: "leidenschaftlich",
            fa: "با اشتیاق فراوان / عاشقانه",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich koche leidenschaftlich gern.", fa: "من با عشق و علاقه آشپزی می‌کنم." }
            ]
          }
        ]
      },
      {
        title: "ورزش و سلامتی (Sport)",
        words: [
          {
            de: "fit bleiben",
            fa: "روی فرم ماندن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Um fit zu bleiben, trinke ich viel Wasser.", fa: "برای روی فرم ماندن، آب زیاد می‌نوشم." }
            ]
          },
          {
            de: "die Kondition",
            fa: "توان بدنی / استقامت",
            article: "die",
            plural: "die Konditionen",
            examples: [
              { de: "Meine Kondition ist durch das Laufen viel besser geworden.", fa: "توان بدنی من به وسیله دویدن خیلی بهتر شده است." }
            ]
          },
          {
            de: "sich begeistern für (+ Akk)",
            fa: "برای چیزی به وجد آمدن / مشتاق بودن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich kann mich sehr für Kunst begeistern.", fa: "من می‌توانم خیلی برای هنر مشتاق باشم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Mein Hobby: Laufen als Ausgleich\n\nSchon seit meiner Schulzeit begeistere ich mich für Sport, aber früher habe ich meistens Fußball gespielt. Heute habe ich jedoch einen anstrengenden Bürojob, deshalb spiele ich kaum noch Fußball. Stattdessen gehe ich regelmäßig joggen.\nIch laufe drei- bis viermal pro Woche im Park. Das ist für mich der perfekte Ausgleich zum Alltag, weil ich dabei den Kopf frei bekomme. Oft höre ich beim Laufen auch Podcasts auf Deutsch, um gleichzeitig meine Sprache zu verbessern.\nEhrlich gesagt war es am Anfang schwer. Meine Kondition war nicht so gut. Aber mittlerweile bin ich sehr stolz auf mich. Ich mache das vor allem, um langfristig gesund und fit zu bleiben. Was ist Ihr Lieblingshobby?",
      questions: [
        { question: "راوی قبلاً در دوران مدرسه چه ورزشی می‌کرد؟ (استفاده از früher)" },
        { question: "چرا او امروز به ندرت (kaum) فوتبال بازی می‌کند؟ (دلیل شغلی)" },
        { question: "فرکانس دویدن او چقدر است؟ (چند بار در هفته)" },
        { question: "دویدن برای او چه نقشی دارد و چه چیزی به او می‌دهد؟ (استفاده از Ausgleich)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره یک سرگرمی شخصی",
      prompt: "درباره یکی از سرگرمی‌های مهم خود بنویسید (۶ خط). بگویید از کی شروع کرده‌اید (Seit wann)، هر چند وقت یکبار انجام می‌دهید (Wie oft) و چرا برایتان جذاب یا مفید است (Warum).",
      steps: [
        {
          title: "معرفی و زمان شروع",
          text: "استفاده از seit.",
          example: { de: "Seit fünf Jahren fotografiere ich leidenschaftlich gern.", fa: "از پنج سال پیش با عشق و علاقه عکاسی می‌کنم." }
        },
        {
          title: "فرکانس و مکان",
          text: "استفاده از قیدهای تکرار مثل jedes Wochenende.",
          example: { de: "Fast jedes Wochenende gehe ich in die Natur, um Fotos zu machen.", fa: "تقریباً هر آخر هفته به طبیعت می‌روم تا عکس بگیرم." }
        },
        {
          title: "دلیل و نتیجه",
          text: "استفاده از Ausgleich یا begeistern.",
          example: { de: "Fotografie ist ein toller Ausgleich, weil ich mich dabei entspannen kann.", fa: "عکاسی یک جبران/تعادل عالی است، چون در حین آن می‌توانم ریلکس کنم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. مکالمه درباره سرگرمی‌ها",
      source: "Hobbies and Free Time (B1)",
      link: "https://www.youtube.com/watch?v=PyDW4dGg8d8",
      instructions: "تمرین شنیداری هدفمند:\nوقتی به مکالمه دو آلمانی درباره هابی گوش می‌دهید، دقت کنید که چقدر از کلمه «eigentlich» (در واقع) استفاده می‌کنند (مثلاً: Eigentlich wollte ich heute joggen, aber es regnet)."
    },
    {
      title: "۲. ویدیو تناسب اندام به آلمانی",
      source: "Sport und Fitness B1",
      link: "https://www.youtube.com/watch?v=v8Kp5DSpZZY",
      instructions: "تمرین دریافت واژگان ورزش:\nلیستی از ورزش‌هایی که در ویدیو نام برده می‌شود (مثل Schwimmen, Krafttraining, Radfahren) تهیه کنید و ببینید برای هر کدام از کدام فعل استفاده می‌شود (مثلاً Rad fahren اما Yoga machen)."
    }
  ],

  speaking: [
    {
      title: "مونولوگ مقایسه‌ای: گذشته و حال",
      pattern: "Früher habe ich... Heute mache ich...",
      exercise: "مدت ۲ دقیقه جلوی آینه درباره وضعیت جسمانی یا سرگرمی خود صحبت کنید. از این الگو استفاده کنید: قبلاً چه می‌کردم / امروز چه می‌کنم / هدفم در آینده این است که روی فرم بمانم (um fit zu bleiben)."
    },
    {
      title: "ارزیابی مکالمه (Selbsteinschätzung)",
      pattern: "Ich kann schon... / Ich muss noch...",
      exercise: "صدای خود را ضبط کنید و به این ۳ سوال به آلمانی جواب دهید:\n۱. چه چیزی در مکالمه آلمانی برایم آسان است؟ (مثلاً Ich kann mich gut vorstellen)\n۲. چه چیزی هنوز سخت است؟ (مثلاً Die Konnektoren sind noch schwer)\n۳. برنامه من برای ماه بعد چیست؟ (Ich werde mehr Podcasts hören)."
    }
  ],

  cultureTip: "اهمیت Vereinsleben (زندگی باشگاهی/انجمنی) در آلمان: در آلمان برای هر نوع سرگرمی ده‌ها انجمن (Verein) وجود دارد؛ از باشگاه فوتبال (Fußballverein) گرفته تا انجمن پرورش زنبورعسل یا خوانندگی! عضویت در این انجمن‌ها (Mitglied sein) یکی از بهترین و سریع‌ترین راه‌ها برای پیدا کردن دوستان آلمانی و ادغام شدن (Integration) در جامعه است. اگر به آلمان رفتید، در اولین فرصت در یک Verein مرتبط با هابیِ خود ثبت‌نام کنید!"
};
