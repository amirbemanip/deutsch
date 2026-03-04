export const day2Data = {
  title: "روز ۲: آرتیکل‌ها، افعال بی‌قاعده و زمان‌بندی",
  objective: "امروز وارد دنیای واقعی آلمانی می‌شویم. یاد می‌گیرید که کلمات در آلمانی جنسیت دارند (der/die/das)، چطور فعل‌های پرکاربرد بی‌قاعده مثل خوردن و رفتن را صرف کنید، و چگونه برنامه‌ی هفتگی خود را با اعداد و روزهای هفته بیان کنید.",

  grammarData: {
    subtitle: "این درس شامل چهار بخش اصلی است: آرتیکل‌ها، افعال بی‌قاعده، روزهای هفته و اعداد.",
    content: [
      {
        type: "text",
        title: "۱. دنیای عجیب آرتیکل‌ها (der, die, das)",
        text: "در زبان آلمانی، هر اسم یک «جنسیت گرامری» دارد. این جنسیت هیچ ربطی به جنسیت بیولوژیکی ندارد! (مثلاً کلمه «دختر» از نظر گرامری خنثی است!).\nشما باید هر کلمه‌ی جدید را با آرتیکل معین (The) کش مرور و حفظ کنید. سه آرتیکل معین داریم:\n- مفرد مذکر: der (مثل der Mann - مرد)\n- مفرد مونث: die (مثل die Frau - زن)\n- مفرد خنثی: das (مثل das Kind - بچه)"
      },
      {
        type: "table",
        title: "آرتیکل‌های معین (معادل The در انگلیسی / «آن» در فارسی)",
        rows: [
          { de: "der Tisch", fa: "میز (مذکر)" },
          { de: "die Lampe", fa: "لامپ (مونث)" },
          { de: "das Buch", fa: "کتاب (خنثی)" },
          { de: "die [Plural]", fa: "حالت جمع همه اسم‌ها با die ساخته می‌شود (die Bücher = کتاب‌ها)" }
        ]
      },
      {
        type: "text",
        title: "آرتیکل‌های نامعین (ein, eine)",
        text: "وقتی می‌خواهیم بگوییم «یک» چیزی (مثل A/An در انگلیسی)، از آرتیکل نامعین استفاده می‌کنیم.\n- برای اسامی der و das ⬅️ از **ein** استفاده می‌کنیم (ein Tisch, ein Buch).\n- برای اسامی die (مونث) ⬅️ از **eine** استفاده می‌کنیم (eine Lampe).\n- ⚠️ در حالت جمع کلمه‌ی «یک» نداریم!"
      },
      {
        type: "examples",
        title: "ساختن جملات با آرتیکل‌ها (معرفی کردن اشیا)",
        items: [
          { de: "Das ist ein Tisch. Der Tisch ist groß.", fa: "این [یک] میز است. [آن] میز بزرگ است." },
          { de: "Das ist eine Lampe. Die Lampe ist neu.", fa: "این [یک] لامپ است. [آن] لامپ جدید است." },
          { de: "Das ist ein Handy. Das Handy ist gut.", fa: "این [یک] موبایل است. موبایل خوب است." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: آرتیکل‌ها",
        questions: [
          {
            question: "اگر بدانیم کلمه‌ی «کیف» (Tasche) مونث (die) است، چطور می‌گوییم «این یک کیف است»؟",
            questionDe: "Wie sagt man 'این یک کیف است'?",
            options: [
              { text: "Das ist ein Tasche.", isCorrect: false },
              { text: "Das ist eine Tasche.", isCorrect: true },
              { text: "Das ist der Tasche.", isCorrect: false }
            ],
            explanation: "آفرین! چون Tasche مونث (die) است، آرتیکل نامعین آن eine می‌شود."
          },
          {
            question: "برای حالت جمع کلمه‌ی مردها (Männer)، آرتیکل معین چیست؟",
            questionDe: "Welcher Artikel ist richtig für 'Männer' (Plural)?",
            options: [
              { text: "der", isCorrect: false },
              { text: "das", isCorrect: false },
              { text: "die", isCorrect: true }
            ],
            explanation: "درست است! آرتیکل معین برای تمام اسامی جمع، فارغ از جنسیت مفرد آن‌ها، همیشه die است."
          }
        ]
      },
      {
        type: "text",
        title: "۲. افعال بی‌قاعده و تغییر ریشه",
        text: "در روز اول با sein و haben آشنا شدید. اما بسیاری از افعال حرکتی یا روزمره یک قانون خاص دارند: در فرم‌های du (تو) و er/sie/es (او/آن)، حرف صدادار وسطِ ریشه‌ی فعل تغییر می‌کند!\n\nاین سه فعل کلیدی را یاد بگیرید:\n۱. essen (خوردن) ⬅️ حرف e تبدیل به i می‌شود.\n۲. lesen (خواندن) ⬅️ حرف e تبدیل به ie می‌شود.\n۳. fahren (رانندگی کردن/رفتن با وسیله) ⬅️ حرف a تبدیل به ä می‌شود."
      },
      {
        type: "table",
        title: "صرف ۳ فعل مهم (essen, lesen, fahren)",
        rows: [
          { de: "ich esse / lese / fahre", fa: "من می‌خورم / می‌خوانم / می‌روم (بدون تغییر)" },
          { de: "du ❗️isst / liest / fährst", fa: "تو می‌خوری (e ⬅️ i) / می‌خوانی (e ⬅️ ie) / می‌روی (a ⬅️ ä)" },
          { de: "er/sie/es ❗️isst / liest / fährt", fa: "او می‌خورد / می‌خواند / می‌رود (همان تغییرات بالا اعمال می‌شود)" },
          { de: "wir essen / lesen / fahren", fa: "ما می‌خوریم / می‌خوانیم / می‌رویم (بدون تغییر، شبیه مصدر)" },
          { de: "ihr esst / lest / fahrt", fa: "شماها می‌خورید / می‌خوانید / می‌روید (بدون تغییر ریشه)" },
          { de: "sie/Sie essen / lesen / fahren", fa: "آن‌ها / شما(رسمی) می‌خورند / می‌خوانند / می‌روند (بدون تغییر)" }
        ]
      },
      {
        type: "examples",
        title: "مثال‌هایی با افعال تغییر ریشه",
        items: [
          { de: "Er isst Pizza.", fa: "او پیتزا می‌خورد. (essen ⬅️ er isst)" },
          { de: "Lies du ein Buch?", fa: "آیا تو کتاب می‌خوانی؟ (lesen ⬅️ du liest -- صبر کنید، در سوال کلمه‌ی اول فعل می‌آید: Liest du...?)" },
          { de: "Sie fährt nach Berlin.", fa: "او (مونث) به برلین می‌رود. (fahren ⬅️ sie fährt)" }
        ]
      },
      {
        type: "text",
        title: "۳. روزهای هفته و قیدهای زمانی (Wochentage & Zeitangaben)",
        text: "روزهای هفته در آلمانی با پسوند -tag تمام می‌شوند (جز چهارشنبه). نکته‌ی مهم این است که برای گفتن «در فلان روز»، از حرف اضافه **am** استفاده می‌کنیم (مثل on در انگلیسی).\nمثال: am Montag (در روز دوشنبه).\n\n**قانون جایگاه دوم فعل:** فراموش نکنید، اگر زمان (مثل Heute یا Am Montag) را در ابتدای جمله بیاورید، فعل باید بلافاصله بعد از آن بیاید!"
      },
      {
        type: "table",
        title: "زمان‌ها در یک نگاه",
        rows: [
          { de: "Montag / Dienstag", fa: "دوشنبه / سه‌شنبه" },
          { de: "Mittwoch / Donnerstag", fa: "چهارشنبه / پنج‌شنبه" },
          { de: "Freitag / Samstag / Sonntag", fa: "جمعه / شنبه / یکشنبه" },
          { de: "heute / morgen / gestern", fa: "امروز / فردا / دیروز" },
          { de: "am Wochenende", fa: "در آخر هفته (معمولاً شنبه و یکشنبه آلمان)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون جایگاه فعل با قید زمان",
        questions: [
          {
            question: "اگر بخواهیم بگوییم «روز جمعه من پیتزا می‌خورم» (Am Freitag / ich / Pizza / essen)، کدام جمله از نظر گرامری کاملاً صحیح است؟",
            questionDe: "Welcher Satz ist grammatikalisch 100% richtig?",
            options: [
              { text: "Am Freitag ich esse Pizza.", isCorrect: false },
              { text: "Ich am Freitag esse Pizza.", isCorrect: false },
              { text: "Am Freitag esse ich Pizza.", isCorrect: true }
            ],
            explanation: "دقیقاً! وقتی Am Freitag در جایگاه اول قرار می‌گیرد، فعل (esse) باید در جایگاه دوم بیاید و فاعل (ich) به بعد از فعل منتقل می‌شود."
          }
        ]
      },
      {
        type: "table",
        title: "۴. اعداد ۰ تا ۲۰ (Zahlen)",
        rows: [
          { de: "0: null | 1: eins", fa: "صفر | یک" },
          { de: "2: zwei | 3: drei", fa: "دو | سه" },
          { de: "4: vier | 5: fünf", fa: "چهار | پنج" },
          { de: "6: sechs | 7: sieben", fa: "شش | هفت" },
          { de: "8: acht | 9: neun", fa: "هشت | نه" },
          { de: "10: zehn | 11: elf", fa: "ده | یازده" },
          { de: "12: zwölf | 13: dreizehn", fa: "دوازده | سیزده (ترکیب ۳+۱۰)" },
          { de: "14: vierzehn | 15: fünfzehn", fa: "چهارده | پانزده (ترکیب ۴+۱۰ / ۵+۱۰)" },
          { de: "16: sechzehn | 17: siebzehn", fa: "شانزده | هفده (⚠️ توجه: s در آخر sechs و en در آخر sieben حذف می‌شود!)" },
          { de: "18: achtzehn | 19: neunzehn", fa: "هجده | نوزده" },
          { de: "20: zwanzig", fa: "بیست" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "در اطراف خانه (Gegenstände im Haus)",
        words: [
          {
            de: "Tisch",
            fa: "میز",
            article: "der",
            plural: "die Tische",
            examples: [
              { de: "Das ist ein Tisch. Der Tisch ist braun.", fa: "این یک میز است. میز قهوه‌ای است." }
            ]
          },
          {
            de: "Stuhl",
            fa: "صندلی",
            article: "der",
            plural: "die Stühle",
            examples: [
              { de: "Ich habe einen Stuhl. Er ist bequem.", fa: "من یک صندلی دارم. راحت است." }
            ]
          },
          {
            de: "Lampe",
            fa: "لامپ",
            article: "die",
            plural: "die Lampen",
            examples: [
              { de: "Die Lampe ist neu und sehr hell.", fa: "لامپ جدید و بسیار پرنور است." }
            ]
          },
          {
            de: "Tür",
            fa: "دَر",
            article: "die",
            plural: "die Türen",
            examples: [
              { de: "Die Tür ist offen.", fa: "دَر باز است." }
            ]
          },
          {
            de: "Fenster",
            fa: "پنجره",
            article: "das",
            plural: "die Fenster",
            examples: [
              { de: "Das Fenster ist groß.", fa: "پنجره بزرگ است." }
            ]
          },
          {
            de: "Buch",
            fa: "کتاب",
            article: "das",
            plural: "die Bücher",
            examples: [
              { de: "Das Buch ist sehr interessant.", fa: "کتاب بسیار جالب است." }
            ]
          }
        ]
      },
      {
        title: "وسایل ارتباطی و نقلیه (Technik und Verkehr)",
        words: [
          {
            de: "Handy",
            fa: "موبایل",
            article: "das",
            plural: "die Handys",
            examples: [
              { de: "Hier ist mein Handy.", fa: "موبایل من اینجاست." }
            ]
          },
          {
            de: "Laptop",
            fa: "لپ‌تاپ",
            article: "der",
            plural: "die Laptops",
            examples: [
              { de: "Der Laptop kostet 800 Euro.", fa: "لپ‌تاپ ۸۰۰ یورو قیمت دارد." }
            ]
          },
          {
            de: "Auto",
            fa: "خودرو / ماشین",
            article: "das",
            plural: "die Autos",
            examples: [
              { de: "Er fährt ein Auto.", fa: "او یک ماشین می‌راند." }
            ]
          },
          {
            de: "Bus",
            fa: "اتوبوس",
            article: "der",
            plural: "die Busse",
            examples: [
              { de: "Wir fahren mit dem Bus.", fa: "ما با اتوبوس می‌رویم." }
            ]
          },
          {
            de: "Fahrrad",
            fa: "دوچرخه",
            article: "das",
            plural: "die Fahrräder",
            examples: [
              { de: "Fährst du mit dem Fahrrad?", fa: "آیا با دوچرخه می‌روی؟" }
            ]
          }
        ]
      },
      {
        title: "افعال پرکاربرد (Wichtige Verben)",
        words: [
          {
            de: "essen",
            fa: "خوردن",
            examples: [
              { de: "Ich esse morgens ein Brot.", fa: "من صبح‌ها یک نان می‌خورم." },
              { de: "Was isst du gern?", fa: "دوست داری چه بخوری؟ (چی با میل می‌خوری؟)" }
            ]
          },
          {
            de: "lesen",
            fa: "خواندن",
            examples: [
              { de: "Sie liest jeden Tag ein Buch.", fa: "او (مونث) هر روز یک کتاب می‌خواند." }
            ]
          },
          {
            de: "fahren",
            fa: "رانندگی کردن / با وسیله سفر کردن",
            examples: [
              { de: "Fährst du nach Berlin?", fa: "آیا به برلین سفر می‌کنی؟" }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Mein Tagesablauf und meine Wohnung\n\nHallo, ich bin Markus. Ich bin neunzehn Jahre alt und Student in München. Hier ist meine Wohnung. Das ist ein Tisch und das ist eine Lampe. Der Tisch ist alt, aber die Lampe ist sehr neu. Ich habe auch einen Laptop und ein Handy. Das Handy ist klein.\n\nMein Wochenplan ist voll: Am Montag fahre ich zur Universität. Ich fahre mit dem Fahrrad. Am Dienstag habe ich frei und ich lese ein Buch. Am Mittwoch fahre ich mit dem Bus in die Stadt. Am Wochenende bin ich müde. Dann esse ich gern Pizza und schlafe viel.",
      questions: [
        { question: "مارکوس چند سال دارد؟" },
        { question: "لامپ او چه ویژگی‌ای دارد فرمت جمله‌بندی (Der/Die/Das ... ist...) را رعایت کنید." },
        { question: "روزهای دوشنبه او چگونه به دانشگاه می‌رود؟" },
        { question: "در آخر هفته (am Wochenende) مارکوس معمولاً چه احساسی دارد و چه می‌خورد؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن برنامه‌ی هفتگی خودت (Mein Wochenplan)",
      prompt: "حالا نوبت شماست که ۳ جمله درباره‌ی کارهایی که در طول هفته انجام می‌دهید بنویسید. فرض کنید یک دوست از شما برنامه را پرسیده است. جملات شما باید شامل زمان و افعال متنوع باشد.",
      steps: [
        {
          title: "جمله اول: روزمره (دوشنبه/سه‌شنبه)",
          text: "با یکی از روزهای دوشنبه یا سه‌شنبه शुरू کن (Am Montag / Am Dienstag). یک فعل (مثلاً essen یا fangen یا lesen) انتخاب کن و قانون جایگاه دوم فعل را رعایت کن.",
          example: { de: "Am Montag fahre ich mit dem Bus zur Arbeit.", fa: "دوشنبه با اتوبوس سر کار می‌روم." }
        },
        {
          title: "جمله دوم: اواسط هفته با فعل تغییر ریشه",
          text: "برای چهارشنبه یا پنج‌شنبه (Am Mittwoch)، از فعل lesen استفاده کن. بگو که یک کتاب می‌خوانی. این بار می‌توانی فاعل را اول بیاوری.",
          example: { de: "Ich lese am Mittwoch ein Buch. Das Buch ist sehr gut.", fa: "من چهارشنبه یک کتاب می‌خوانم. کتاب خیلی خوب است." }
        },
        {
          title: "جمله سوم: آخر هفته",
          text: "با Am Wochenende شروع کن. بگو که چه چیزی می‌خوری (با فعل essen). یادت باشد چون زمان اول آمده، فعل باید دوم باشد.",
          example: { de: "Am Wochenende esse ich gern Pizza. Ich bin sehr glücklich.", fa: "آخر هفته‌ها با کمال میل پیتزا می‌خورم. من خیلی خوشحالم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. آرتیکل‌ها را تجسم کن! (der, die, das)",
      source: "Learn German A1 - Articles Explained",
      link: "https://www.youtube.com/watch?v=TWhrJYJSO20",
      instructions: "تمرین جادویی حافظه:\nتوصیه می‌شود برای به خاطر سپردن آرتیکل‌ها، یک رنگ را در ذهنتان مرتبط کنید. مثلاً der (آبی)، die (قرمز)، das (سبز).\nدر این ویدیو، هر بار که کلمه‌ی جدیدی می‌شنوید، مثلاً der Tisch، یک میز آبی‌رنگ را در ذهنتان تصور کنید. این تکنیک روانشناسی به شما کمک می‌کند آرتیکل را برای همیشه حفظ کنید. بار دوم ویدیو را ببینید و جمله‌ی Das ist ein... را بلند تکرار کنید."
    },
    {
      title: "۲. تلفظ اعداد تا ۲۰ (Zahlen)",
      source: "German Numbers 1-20 Pronunciation",
      link: "https://www.youtube.com/watch?v=TjiKn034jRo",
      instructions: "دقت کنید که در آلمانی حرف «z» مثل «تس» تلفظ می‌شود. پس zwei خوانده می‌شود «تسوای» نه زوای! \nروی کلمات 16 (sechzehn) و 17 (siebzehn) تمرکز کنید. پس از تماشای ویدیو، اعداد 10 تا 20 را به ترتیب از حفظ و با صدای رسا برای خودتان بشمارید."
    }
  ],

  speaking: [
    {
      title: "توصیف اتاق (Zimmer beschreiben)",
      pattern: "- Was ist das?\n- Das ist ein Tisch.\n- Wie ist der Tisch?\n- Der Tisch ist groß und braun.\n- Hast du eine Lampe?\n- Ja, die Lampe ist sehr hell.",
      exercise: "در مرکز اتاق خود بایستید. ۵ وسیله را انتخاب کنید.\nگام ۱: تصور کنید چشم‌هایتان را بسته‌اند و کسی از شما می‌پرسد «Was ist das?» (این چیه؟)\nگام ۲: ابتدا با ein/eine وسیله را معرفی کنید (Das ist ein Stuhl).\nگام ۳: سپس با der/die/das یک ویژگی از آن را بگویید (Der Stuhl ist alt).\nاین کار را برای هر ۵ وسیله تکرار کنید. با صدای بلند صحبت کنید تا گوشتان به صدای آلمانیِ خودتان عادت کند."
    },
    {
      title: "مصاحبه با اعداد",
      pattern: "- Wie alt bist du?\n- Ich bin neunzehn (19) Jahre alt.\n- Und wie viele Handys hast du?\n- Ich habe zwei (2) Handys.",
      exercise: "سعی کنید دیالوگ بالا را با سن واقعی خودتان و تعداد واقعی کامپیوترها/موبایل‌هایتان بازسازی کنید. اگر سن شما هنوز تدریس نشده (مثلا 25)، فعلاً از یکی از اعداد 10 تا 20 برای تمرین استفاده کنید."
    }
  ],

  cultureTip: "چرا آینقدر قوانین جنسیت (der, die, das) در آلمانی عجیب است؟ در آلمان حتی کلمه «دختر» (das Mädchen) خنثی است! دلیل تاریخی آن است که هر کلمه‌ای که پسوند کوچک‌کننده (-chen) داشته باشد، به طور خودکار خنثی (das) می‌شود. آلمانی‌ها خودشان هم این را از روی منطق یاد نمی‌گیرند، بلکه از کودکی این کلمات را فقط به صورت جفتی شنیده‌اند. پس هرگز نپرسید «چرا این کلمه مونث است؟»، فقط از امروز کلمه را همراه با آرتیکل آن عنوان یک واحد یکپارچه یاد بگیرید."
};
