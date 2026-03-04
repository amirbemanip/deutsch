export const day11Data = {
  title: "روز ۱۱: دنیای مشاغل، ادارات آلمانی و گشت در شهر",
  objective: "امروز یاد می‌گیریم چگونه شغل خود را به شکل حرفه‌ای معرفی کنیم. سپس با لغات طلایی محیط کار (Büro) آشنا می‌شویم. در نیمه دوم، نحوه انجام کارهای ضروری در بانک و اداره پست و آدرس‌پرسیدن برای مکان‌های تفریحی شهر را می‌آموزیم.",

  grammarData: {
    subtitle: "این درس شامل ساختارهای کلیدی برای معرفی شغل، مکان‌ها در داتیو/آکوزاتیو (مقدماتی) و واژگان تخصصی اداره است.",
    content: [
      {
        type: "text",
        title: "۱. معرفی شغل (Beruf)",
        text: "برای اینکه بگوییم چه کاره هستیم، ۳ فرمول کاملاً استاندارد در آلمانی وجود دارد. خبر خوب: در آلمانی موقع گفتن شغل خود، نیازی به آرتیکل (ein/eine) ندارید!"
      },
      {
        type: "table",
        title: "فرمول‌های استخدام!",
        rows: [
          { de: "Ich bin + شغل", fa: "Ich bin Arzt. (من پزشک هستم - سریع و ساده)" },
          { de: "Ich arbeite als + شغل", fa: "Ich arbeite als Lehrer. (من به عنوان معلم کار می‌کنم)" },
          { de: "Ich arbeite bei + نام شرکت + in + شهر", fa: "Ich arbeite bei BMW in München. (من در شرکت بی‌ام‌و در شهر مونیخ کار می‌کنم)" }
        ]
      },
      {
        type: "alert",
        title: "حرف اضافه‌ی طلاییِ شرکت‌ها (bei)",
        text: "برای معرفی شرکت یا محل کار خود، همیشه از حرف اضافه **bei** استفاده می‌کنیم (نه in یا für). مثلاً: Ich arbeite bei Siemens."
      },
      {
        type: "alert",
        title: "پسوند زنانه در مشاغل",
        text: "در زبان آلمانی، برای تبدیل شغل یک آقا به خانم، در ۹۹٪ مواقع فقط کافیست پسوند «in» را به آخر کلمه اضافه کنید. مثلاً: der Lehrer (معلم مرد) ➔ die Lehrerin (معلم زن)."
      },
      {
        type: "text",
        title: "۲. در دفتر کار (Im Büro)",
        text: "آلمانی‌ها عاشق نظم اداری (Bürokratie) هستند. در دفتر کار چند فعل بسیار پرکاربردند: \n- schreiben (نوشتن)\n- telefonieren (تلفن زدن)\n- eine Besprechung haben (جلسه داشتن)"
      },
      {
        type: "examples",
        title: "جملات روتینِ کارمندِ آلمانی",
        items: [
          { de: "Ich habe um 10 Uhr einen Termin.", fa: "من ساعت ۱۰ یک قرار(کاری/رسمی) دارم." },
          { de: "Ich schreibe jeden Tag viele E-Mails.", fa: "من هر روز ایمیل‌های زیادی می‌نویسم." },
          { de: "Mein Chef ist heute nicht da.", fa: "رئیس من امروز حضور ندارد." }
        ]
      },
      {
        type: "text",
        title: "۳. بانک، پست و جاهای شهر",
        text: "برای انجام کارها در سطح شهر، فعلِ دوست‌داشتنیِ möchten (مایل بودن/خواستن) بهترین دوست شماست."
      },
      {
        type: "examples",
        title: "کارهای کفی شهر!",
        items: [
          { de: "Ich möchte ein Konto eröffnen.", fa: "من می‌خواهم یک حساب بانکی باز کنم." },
          { de: "Ich möchte diesen Brief schicken.", fa: "من می‌خواهم این نامه را بفرستم." },
          { de: "Am Wochenende gehe ich ins Kino.", fa: "آخر هفته به سینما (ins Kino) می‌روم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: کار و شهر",
        questions: [
          {
            question: "شما یک خانم معمار (Architekt) هستید و در شرکت زیمنس (Siemens) در برلین کار می‌کنید. کدام جمله صحیح است؟",
            questionDe: "Wie stellt sich eine weibliche Architektin bei Siemens in Berlin vor?",
            options: [
              { text: "Ich bin Architekt bei Siemens in Berlin.", isCorrect: false },
              { text: "Ich arbeite als Architektin bei Siemens in Berlin.", isCorrect: true },
              { text: "Ich arbeite für Architekt in Siemens bei Berlin.", isCorrect: false }
            ],
            explanation: "دقیقاً! اولاً چون شما خانم هستید کلمه باید Architektin باشد. ثانیاً الگو این است: arbeite als (شغل) bei (شرکت) in (شهر)."
          },
          {
            question: "کدام کلمه برای گفتن «قرار دکتر، ملاقات کاری یا نوبت در اداره» استفاده می‌شود؟",
            questionDe: "Welches Wort benutzt man für geschäftliche/medizinische Verabredungen?",
            options: [
              { text: "das Meeting", isCorrect: false },
              { text: "das Datum", isCorrect: false },
              { text: "der Termin", isCorrect: true }
            ],
            explanation: "آفرین! کلمه Termin یکی از مقدس‌ترین کلمات در آلمان است و برای هر نوع نوبت یا قرار رسمی به کار می‌رود."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "مشاغل (Die Berufe)",
        words: [
          {
            de: "der Lehrer / die Lehrerin",
            fa: "معلم (مرد / زن)",
            article: "der / die",
            plural: "die Lehrer / die Lehrerinnen",
            examples: [
              { de: "Mein Vater ist Lehrer von Beruf.", fa: "پدر من از نظر شغلی معلم است." }
            ]
          },
          {
            de: "der Verkäufer / die Verkäuferin",
            fa: "فروشنده",
            article: "der / die",
            plural: "die Verkäufer / die Verkäuferinnen",
            examples: [
              { de: "Sie arbeitet als Verkäuferin bei Aldi.", fa: "او به عنوان فروشنده در آلدی کار می‌کند." }
            ]
          },
          {
            de: "der Ingenieur / die Ingenieurin",
            fa: "مهندس",
            article: "der / die",
            plural: "die Ingenieure / die Ingenieurinnen",
            examples: [
              { de: "Viele Ingenieure arbeiten bei BMW.", fa: "مهندسان زیادی در بی‌ام‌و کار می‌کنند." }
            ]
          },
          {
            de: "der Arzt / die Ärztin",
            fa: "پزشک (تغییر vowel برای مؤنث: Arzt ➔ Ärztin)",
            article: "der / die",
            plural: "die Ärzte / die Ärztinnen",
            examples: [
              { de: "Ich bin krank. Ich muss zum Arzt.", fa: "من بیمارم. باید نزد پزشک بروم." }
            ]
          },
          {
            de: "arbeitslos / der Student",
            fa: "بیکار (صفت) / دانشجو",
            article: "- / der",
            plural: "- / die Studenten",
            examples: [
              { de: "Ich bin momentan arbeitslos.", fa: "من در حال حاضر بیکار هستم." }
            ]
          }
        ]
      },
      {
        title: "در دفتر کار (Im Büro)",
        words: [
          {
            de: "der Chef / die Chefin",
            fa: "رئیس",
            article: "der / die",
            plural: "die Chefs / die Chefinnen",
            examples: [
              { de: "Mein Chef ist sehr nett.", fa: "رئیس من بسیار مهربان است." }
            ]
          },
          {
            de: "der Kollege / die Kollegin",
            fa: "همکار",
            article: "der / die",
            plural: "die Kollegen / die Kolleginnen",
            examples: [
              { de: "Ich trinke Kaffee mit meinen Kollegen.", fa: "من با همکارانم قهوه می‌نوشم." }
            ]
          },
          {
            de: "der Termin",
            fa: "قرار ملاقات / نوبت رسمی",
            article: "der",
            plural: "die Termine",
            examples: [
              { de: "Ich habe heute einen Termin beim Arzt.", fa: "من امروز در مطب پزشک یک نوبت دارم." }
            ]
          },
          {
            de: "die Besprechung",
            fa: "جلسه کاری / Meeting",
            article: "die",
            plural: "die Besprechungen",
            examples: [
              { de: "Die Besprechung beginnt um 9 Uhr.", fa: "جلسه ساعت ۹ آغاز می‌شود." }
            ]
          }
        ]
      },
      {
        title: "بانک و پست (Bank und Post)",
        words: [
          {
            de: "das Konto",
            fa: "حساب بانکی",
            article: "das",
            plural: "die Konten",
            examples: [
              { de: "Ich möchte ein Konto eröffnen.", fa: "من می‌خواهم یک حساب باز کنم." }
            ]
          },
          {
            de: "Geld abheben",
            fa: "پول نقد دریافت کردن از حساب (فعل)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich muss Geld am Automaten abheben.", fa: "من باید از خودپرداز پول بگیرم." }
            ]
          },
          {
            de: "der Brief / das Paket",
            fa: "نامه / بسته پستی",
            article: "der / das",
            plural: "die Briefe / die Pakete",
            examples: [
              { de: "Wie viel kostet dieses Paket?", fa: "این بسته پستی چقدر هزینه دارد؟" }
            ]
          },
          {
            de: "die Briefmarke",
            fa: "تمبر",
            article: "die",
            plural: "die Briefmarken",
            examples: [
              { de: "Ich brauche fünf Briefmarken.", fa: "من ۵ عدد تمبر نیاز دارم." }
            ]
          }
        ]
      },
      {
        title: "مکان‌های شهر (Orte in der Stadt)",
        words: [
          {
            de: "der Park / das Kino",
            fa: "پارک / سینما",
            article: "der / das",
            plural: "die Parks / die Kinos",
            examples: [
              { de: "Gehen wir ins Kino?", fa: "آیا به سینما می‌رویم؟" }
            ]
          },
          {
            de: "das Restaurant / das Café",
            fa: "رستوران / کافه",
            article: "das / das",
            plural: "die Restaurants / die Cafés",
            examples: [
              { de: "Das Restaurant ist sehr gut.", fa: "آن رستوران بسیار خوب است." }
            ]
          },
          {
            de: "das Museum / die Bibliothek",
            fa: "موزه / کتابخانه",
            article: "das / die",
            plural: "die Museen / die Bibliotheken",
            examples: [
              { de: "Ich lerne in der Bibliothek.", fa: "من در کتابخانه درس می‌خوانم." }
            ]
          },
          {
            de: "der Bahnhof",
            fa: "ایستگاه مرکزی قطار",
            article: "der",
            plural: "die Bahnhöfe",
            examples: [
              { de: "Ich warte am Bahnhof.", fa: "من در ایستگاه قطار منتظر هستم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein anstrengender Tag für Sara\n\nSara ist 25 Jahre alt und sie arbeitet als Informatikerin bei SAP in Walldorf. Ihr Arbeitstag ist oft lang. Zuerst steht sie um 7 Uhr auf und geht ins Büro. \nIm Büro hat sie viele Termine. Sie schreibt E-Mails und telefoniert mit ihrem Chef. Um 13 Uhr macht (macht ➔ انجام دادن) sie eine Pause und isst mit ihren Kollegen im Restaurant.\nAber heute hat sie auch andere Aufgaben. Nach der Arbeit geht sie zur Bank. Sie möchte Geld abheben. Dann geht sie zur Post. Sie muss ein Paket an ihre Mutter schicken. Am Abend ist Sara sehr müde. Sie geht nicht ins Kino. Sie bleibt zu Hause und schläft.",
      questions: [
        { question: "سارا چه شغلی دارد و در کدام شهر/شرکت کار می‌کند؟" },
        { question: "او در دفتر (Büro) به طور کلی چه کارهایی (افعالی) انجام می‌دهد؟" },
        { question: "ساعات ناهار و استراحت او با چه کسانی می‌گذرد؟" },
        { question: "بعد از کار (Nach der Arbeit) سارا به کدام دو مکان در شهر می‌رود و هدفش چیست؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره‌ی شغل و شهر خودتان",
      prompt: "حالا نوبت شماست که در یک متن کوتاه رزومه و برنامه‌ی گشتِ شهریِ خود را بنویسید (حتی اگر شغلی که می‌نویسید خیالی باشد).",
      steps: [
        {
          title: "معرفی شغل و محل کار",
          text: "با فرمول (Ich arbeite als ... bei... in...) شغل خود را معرفی کنید.",
          example: { de: "Ich bin Lisa. Ich arbeite als Lehrerin bei einer Schule in Frankfurt.", fa: "من لیزا هستم. من به عنوان معلم در مدرسه‌ای در فرانکفورت کار می‌کنم." }
        },
        {
          title: "کارهای روزمره",
          text: "با استفاده از افعالی که خواندیم (مثلاً E-Mails schreiben، telefonieren) دو جمله در مورد کارتان بنویسید.",
          example: { de: "In meinem Beruf spreche ich viel. Ich habe jeden Tag viele Termine.", fa: "در شغلم من زیاد صحبت می‌کنم. من هر روز قرارهای (کلاس‌های) زیادی دارم." }
        },
        {
          title: "تفریحِ بعد از کار",
          text: "بگویید بعد از کار یا در آخر هفته به کدام مکان‌های شهر می‌روید. (Am Wochenende gehe ich...)",
          example: { de: "Am Wochenende entspanne (استراحت کردن) ich. Ich gehe oft in den Park oder ins Kino.", fa: "آخر هفته‌ها من استراحت می‌کنم. من اغلب به پارک یا سینما می‌روم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. من کی هستم و چکاره‌ام؟",
      source: "Talking about your profession - Berufe",
      link: "https://www.youtube.com/watch?v=L6Up_-0bfq8",
      instructions: "برای یادگیری شغل‌ها:\n۱. پسوندِ -in برای خانم‌ها به شدت در آلمان رعایت می‌شود. در این ویدیو به نحوه تلفظ این پسوند دقت کنید (مثلاً Arzt ➔ Ärztin).\n۲. نام ۵ شغلی که برای شما جذاب است را از ویدیو یادداشت کنید و برای خود با صدای بلند زمزمه کنید."
    },
    {
      title: "۲. مکالمات در بانک و پست",
      source: "At the Bank & Post Office in Germany",
      link: "https://www.youtube.com/watch?v=lNGFKrmS0so",
      instructions: "در این ویدیو به دو کلمه استراتژیک دقت کنید:\n۱. فعل (eröffnen) برای باز کردن حساب!\n۲. کلمه (das Paket) برای بسته پستی. سعی کنید فرمولِ «Ich möchte ... schicken» را بعد از گوینده تقلید کنید."
    }
  ],

  speaking: [
    {
      title: "معرفی در مصاحبه کاری",
      pattern: "- Was sind Sie von Beruf?\n- Ich bin ... / Ich arbeite als ...",
      exercise: "تصور کنید در اتاق مصاحبه نشسته‌اید. جلوی آینه به زبان آلمانی با اعتماد به نفس نام، سن، شغل و شهری که دوست دارید در آن کار کنید را بیان کنید. حتماً از ساختار «Ich arbeite als ...» استفاده کنید."
    },
    {
      title: "باجه‌ی اداره پستِ برلین!",
      pattern: "Guten Tag, ich möchte dieses Paket nach [Land] schicken. Wie viel kostet das?",
      exercise: "یک جعبه‌ی خالی در دست بگیرید. نقش خودتان را بازی کنید که در اداره پست یک بسته را برای کشورتان (مثلاً Iran یا Österreich) می‌فرستید. علاوه بر بسته، بپرسید قیمت ۳ تمبر (drei Briefmarken) چقدر می‌شود."
    }
  ],

  cultureTip: "مفهوم Termin (نوبت/قرار) در فرهنگ آلمانی یک مسئله‌ی مرگ و زندگی است! در آلمان شما نمی‌توانید بدون هماهنگی به اداره، بانک، دکتر یا حتی سراغِ رئیس خود بروید؛ حتماً باید از قبل یک Termin بگیرید. همچنین اگر Termin دارید، باید دقیقا رأس ساعت (حتی ۵ دقیقه زودتر) آنجا باشید؛ چون Pünktlichkeit (وقت‌شناسی) قانونِ اول بقا در محیط کار آلمانی است."
};
