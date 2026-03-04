export const day32Data = {
  title: "روز ۳۲: مکالمات زنده (دفتر کار، خانواده و سؤالات روزمره)",
  objective: "امروز تمرکز ما کاملاً روی مکالمه و برقراری ارتباط با دیگران است. با سؤالات پرکاربرد روزمره، عبارات مربوط به اولین روز کاری در آلمان و نحوه صحبت درباره خانواده و دوستان آشنا می‌شویم.",

  grammarData: {
    subtitle: "ساختار سؤالات مستقیم و غیرمستقیم در مکالمات (W-Fragen & Ja/Nein-Fragen).",
    content: [
      {
        type: "text",
        title: "۱. ۱۰۰ سؤال طلایی زندگی روزمره",
        text: "یکی از بزرگترین مشکلات زبان‌آموزان در سطح B1 این است که می‌توانند خوب جواب بدهند، اما نمی‌توانند سوال بپرسند! در مکالمه واقعی، شما باید بتوانید توپ را به زمین حریف بیندازید."
      },
      {
        type: "examples",
        title: "سوالات کوتاه (۴-۵ کلمه‌ای) و کاربردی",
        items: [
          { de: "Hast du kurz Zeit?", fa: "یک لحظه وقت داری؟ (بسیار پرکاربرد در محل کار)" },
          { de: "Bist du morgen im Büro?", fa: "فردا در دفتر هستی؟" },
          { de: "Wie war dein Wochenende?", fa: "آخر هفته‌ت چطور بود؟ (بهترین سوال برای اسمال‌تاکِ روز دوشنبه)" },
          { de: "Was machst du heute Abend?", fa: "امروز عصر/شب چه کار می‌کنی؟" },
          { de: "Könntest du mir kurz helfen?", fa: "می‌توانی یک لحظه به من کمک کنی؟ (استفاده از Könntest برای نهایت ادب)" }
        ]
      },
      {
        type: "text",
        title: "۲. روز اول کاری (Erster Arbeitstag)",
        text: "آلمان کشوری با قوانین نانوشته در محیط کار است. معرفی کوتاه خود، پرسیدن سوالات مربوط به وظایف و ارتباط مودبانه با همکاران بسیار مهم است."
      },
      {
        type: "examples",
        title: "عبارات محیط کار (Büro)",
        items: [
          { de: "Guten Morgen, ich bin neu hier. Ich bin für die IT zuständig.", fa: "صبح بخیر، من اینجا جدید هستم. من مسئولِ بخش IT هستم. (zuständig sein für + Akk = مسئول چیزی بودن)" },
          { de: "In welcher Abteilung arbeiten Sie?", fa: "شما در کدام بخش (دپارتمان) کار می‌کنید؟" },
          { de: "Schönen Feierabend!", fa: "پایان وقت کاری خوبی داشته باشی! (جمله‌ای که آلمانی‌ها هنگام ترک دفتر به هم می‌گویند)." }
        ]
      },
      {
        type: "text",
        title: "۳. توصیف روابط (Beziehungen beschreiben)",
        text: "در بخش ۱ آزمون گوته (Sprechen Teil 1)، ممکن است مجبور شوید خود و خانواده‌تان را معرفی کنید. در B1 باید از کلمات سطح بالاتری برای توصیف روابط استفاده کنید."
      },
      {
        type: "examples",
        title: "روابط خانوادگی و دوستانه",
        items: [
          { de: "Ich habe ein sehr gutes Verhältnis zu meinen Eltern.", fa: "من رابطه بسیار خوبی با والدینم دارم. (توجه: Verhältnis zu + Dativ)." },
          { de: "Ich verstehe mich gut mit meinen Kollegen.", fa: "من با همکارانم خوب کنار می‌آیم / رابطه خوبی دارم. (sich gut verstehen mit + Dativ)." },
          { de: "Wir sehen uns nicht oft, aber wir telefonieren regelmäßig.", fa: "ما همدیگر را زیاد نمی‌بینیم، اما مرتباً تلفنی صحبت می‌کنیم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: مکالمات و روابط",
        questions: [
          {
            question: "شما می‌خواهید به همکارتان بگویید که مسئولِ پروژه جدید هستید. کدام جمله صحیح است؟",
            questionDe: "Wie sagen Sie, dass Sie verantwortlich sind?",
            options: [
              { text: "Ich bin zuständig für das neue Projekt.", isCorrect: true },
              { text: "Ich bin zuständig von das neue Projekt.", isCorrect: false },
              { text: "Ich bin arbeiten für das neue Projekt.", isCorrect: false }
            ],
            explanation: "آفرین! عبارت «zuständig sein für» یکی از پرکاربردترین اصطلاحات کاری در زبان آلمانی است."
          },
          {
            question: "می‌خواهید بگویید رابطه بدی با همسایه‌تان دارید. کدام فرم درست است؟",
            questionDe: "Welcher Satz drückt eine schlechte Beziehung aus?",
            options: [
              { text: "Ich habe ein schlechtes Verhältnis zu meinem Nachbarn.", isCorrect: true },
              { text: "Ich verstehe gut mit meinem Nachbarn.", isCorrect: false },
              { text: "Meine Beziehung mit meinem Nachbarn ist böse.", isCorrect: false }
            ],
            explanation: "دقیقاً! کلمه Verhältnis (رابطه) با حرف اضافه zu (و حالت Dativ) استفاده می‌شود."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "محیط کار و اداره (Büro und Arbeit)",
        words: [
          {
            de: "die Abteilung",
            fa: "دپارتمان / بخش",
            article: "die",
            plural: "die Abteilungen",
            examples: [
              { de: "Er arbeitet in der Marketing-Abteilung.", fa: "او در دپارتمان مارکتینگ کار می‌کند." }
            ]
          },
          {
            de: "zuständig sein für (+ Akk)",
            fa: "مسئولِ چیزی بودن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wer ist für dieses Problem zuständig?", fa: "چه کسی مسئول این مشکل است؟" }
            ]
          },
          {
            de: "der Feierabend",
            fa: "پایان وقت کاری / استراحت بعد از کار",
            article: "der",
            plural: "-",
            examples: [
              { de: "Um 17 Uhr mache ich Feierabend.", fa: "ساعت ۱۷ من کارم را تمام می‌کنم (اصطلاح)." }
            ]
          },
          {
            de: "die Vertretung",
            fa: "جایگزین (زمانی که کسی مرخصی است)",
            article: "die",
            plural: "die Vertretungen",
            examples: [
              { de: "Ich mache diese Woche die Vertretung für Maria.", fa: "من این هفته جایگزینِ (جانشین کارهای) ماریا هستم." }
            ]
          }
        ]
      },
      {
        title: "روابط اجتماعی (Beziehungen)",
        words: [
          {
            de: "das Verhältnis",
            fa: "رابطه (نحوه ارتباط بین دو نفر)",
            article: "das",
            plural: "die Verhältnisse",
            examples: [
              { de: "Unser Verhältnis ist sehr eng.", fa: "رابطه ما بسیار نزدیک (صمیمی) است." }
            ]
          },
          {
            de: "sich verstehen mit (+ Dat)",
            fa: "با کسی کنار آمدن / تفاهم داشتن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich verstehe mich super mit meinem Bruder.", fa: "من با برادرم عالی کنار می‌آیم." }
            ]
          },
          {
            de: "der Freundeskreis",
            fa: "دایره دوستان / اکیپ دوستان",
            article: "der",
            plural: "die Freundeskreise",
            examples: [
              { de: "Sie hat einen großen Freundeskreis.", fa: "او دایره دوستان بزرگی دارد." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Interview: Arbeit und Leben\n\nInterviewer: Erzählen Sie uns von Ihrem Job, Herr Müller. Was machen Sie beruflich?\nHerr Müller: Ich arbeite als Projektmanager in einer großen IT-Firma. Meine Hauptaufgabe ist es, Teams zu koordinieren. Ich bin auch für die Kommunikation mit neuen Kunden zuständig. Mein Arbeitstag beginnt meistens um 8 Uhr und um 17 Uhr mache ich Feierabend.\nInterviewer: Wie ist das Verhältnis zu Ihren Kollegen?\nHerr Müller: Ehrlich gesagt, ist das Verhältnis fantastisch. Ich verstehe mich sehr gut mit meiner Abteilung. Wir trinken oft zusammen Kaffee. Und wenn ich im Urlaub bin, macht mein Kollege Thomas meine Vertretung.\nInterviewer: Und wie verbringen Sie Ihre Freizeit?\nHerr Müller: Ich habe einen kleinen, aber engen Freundeskreis. Am Wochenende treffen wir uns oft zum Grillen, um den Kopf frei zu bekommen.",
      questions: [
        { question: "شغل آقای مولر چیست و او مسئول چه کاری است؟ (zuiständig für)" },
        { question: "آقای مولر معمولاً چه ساعتی کارش را تمام می‌کند؟ (از اصطلاح درست استفاده کنید)" },
        { question: "رابطه او با همکارانش چگونه است؟ (از فعل sich verstehen استفاده کنید)" },
        { question: "ارتباط او با دوستانش چطور توصیف شده است؟ (اندازه دایره دوستان)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره وضعیت شغلی و روابط",
      prompt: "فرض کنید در یک شبکه اجتماعیِ کاری (مثل لینکدین) می‌خواهید خودتان را معرفی کنید. ۵ خط بنویسید: نام، شغل، وظایف (با zuständig)، رابطه با همکاران و سرگرمی بعد از کار.",
      steps: [
        {
          title: "معرفی و شغل",
          text: "استفاده از عبارت von Beruf یا als.",
          example: { de: "Hallo, ich bin Lisa und arbeite als Verkäuferin in einem Schuhgeschäft.", fa: "سلام، من لیزا هستم و به عنوان فروشنده در یک مغازه کفش کار می‌کنم." }
        },
        {
          title: "بیان وظایف",
          text: "استفاده از zuständig sein für.",
          example: { de: "Ich bin für die Kundenberatung zuständig.", fa: "من مسئول مشاوره به مشتریان هستم." }
        },
        {
          title: "توصیف روابط",
          text: "توضیح دهید که با تیم خود چگونه کنار می‌آیید.",
          example: { de: "Ich verstehe mich sehr gut mit meinen Kollegen. Wir sind ein tolles Team.", fa: "من با همکارانم خیلی خوب کنار می‌آیم. ما تیم فوق‌العاده‌ای هستیم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. مکالمات روز اول کاری",
      source: "Deutsch im Büro (B1)",
      link: "https://www.youtube.com/watch?v=IW91ujcdubM",
      instructions: "تمرین سایه در دفتر:\nدر ویدیوهای مربوط به محیط کار، لحن صحبت‌ها معمولاً محترمانه‌تر (Sie-Form) است. به نحوه استفاده از کلمات Könnten Sie... و Würden Sie... (برای درخواست مودبانه) به جای سوالات مستقیم دقت کنید."
    },
    {
      title: "۲. سوالات پرکاربرد مکالمه",
      source: "100 Everyday German Questions",
      link: "https://www.youtube.com/watch?v=1Bnm4C6MTsY",
      instructions: "تمرین حفظ ریتم سوالی:\nسعی کنید ۵ سوال کوتاه که در این درس یاد گرفتید را پشت سر هم با صدای بلند بپرسید، انگار که دارید با یک آلمانی سریع و بدون لکنت حرف می‌زنید."
    }
  ],

  speaking: [
    {
      title: "نقش‌آفرینی: استخدام جدید",
      pattern: "Guten Morgen... Ich bin neu hier... Ich bin für... zuständig.",
      exercise: "در روبروی آینه بایستید. تصور کنید روز اول کار شما در یک شرکت آلمانی است. خود را به همکار فرضی‌تان معرفی کنید، بگویید کجا نشسته‌اید و از او بپرسید دستگاه کپی (der Kopierer) کجاست."
    },
    {
      title: "توصیف یک شخص مهم در زندگی",
      pattern: "Mein Verhältnis zu... Wir verstehen uns...",
      exercise: "درباره بهترین دوست خود (یا همسرتان) ۱ دقیقه صحبت کنید:\nEr/Sie heißt... Wir haben ein tolles Verhältnis. Wir sehen uns jeden Tag. Letztes Wochenende haben wir..."
    }
  ],

  cultureTip: "فرهنگ سلسله‌مراتب در شرکت‌های آلمانی (Flache Hierarchien): در قدیم، محیط کارهای آلمانی بسیار خشک بود و همه همکاران یکدیگر را با Sie و نام خانوادگی خطاب می‌کردند. امروزه در بسیاری از شرکت‌های مدرن (به خصوص استارتاپ‌ها، IT و مارکتینگ)، فرهنگِ «Duzen» (استفاده از تو/du) از همان روز اول رایج است. با این حال، قانون طلایی این است: در روز اول همیشه از Sie استفاده کنید تا زمانی که مدیر یا همکار باتجربه‌تر به شما پیشنهاد استفاده از Du را بدهد (Das Du anbieten)."
};
