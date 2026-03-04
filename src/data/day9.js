export const day9Data = {
  title: "روز ۹: وسایل نقلیه، سفر درون‌شهری و خوشمزه‌های آلمانی!",
  objective: "امروز یاد می‌گیریم بگوییم چگونه و با چه وسیله‌ای به سر کار یا دانشگاه می‌رویم. در بخش دوم، با فعل‌های خوردن و نوشیدن (essen/trinken) جملات کاربردی در مورد غذاها می‌سازیم و یاد می‌گیریم یک داستان کامل از صبح تا شب شامل هوا، لباس، رفت‌وآمد و غذا تعریف کنیم.",

  grammarData: {
    subtitle: "این درس شامل آشنایی با حالت Dativ (داتیو) در حد وسایل نقلیه، و افعال خوردن و نوشیدن است.",
    content: [
      {
        type: "text",
        title: "۱. وسایل نقلیه (Verkehrsmittel) و یک راز کوچک داتیو!",
        text: "برای گفتن اینکه با چه وسیله‌ای می‌رویم، از حرف اضافه «mit» (با) استفاده می‌کنیم.\nاما یک قانون بسیار مهم در آلمانی وجود دارد: **بعد از حرف اضافه‌ی mit، همیشه حالت Dativ (متممی) می‌آید.**\n\nدر حالت داتیو چه اتفاقی می‌افتد؟\n- مذکر (der) ➔ **dem**\n- خنثی (das) ➔ **dem**\n- مونث (die) ➔ **der**\n\n(نگران نباشید، داتیو را در درس‌های آینده کامل باز می‌کنیم. فعلاً فقط ترکیب‌های mit را به صورت حفظی یاد بگیرید)."
      },
      {
        type: "table",
        title: "من با ... می‌روم (Ich fahre mit ...)",
        rows: [
          { de: "mit dem Bus", fa: "با اتوبوس (der Bus)" },
          { de: "mit dem Auto", fa: "با ماشین (das Auto)" },
          { de: "mit dem Fahrrad", fa: "با دوچرخه (das Fahrrad)" },
          { de: "mit dem Zug", fa: "با قطار (der Zug)" },
          { de: "mit der U-Bahn", fa: "با مترو (die U-Bahn)" },
          { de: "mit der Straßenbahn", fa: "با تراموا/قطار شهری (die Straßenbahn)" }
        ]
      },
      {
        type: "alert",
        title: "استثنای پیاده‌روی!",
        text: "اگر پیاده می‌روید، دیگر از فعل fahren (راندن/با وسیله رفتن) استفاده نمی‌کنید، بلکه از gehen (رفتن) استفاده می‌کنید: **Ich gehe zu Fuß.** (من پیاده می‌روم)."
      },
      {
        type: "examples",
        title: "سؤال و جواب‌های حمل‌ونقل",
        items: [
          { de: "Wie kommst du zur Arbeit?", fa: "چگونه به سر کار می‌آیی؟ (kommst du zur = می‌آیی به)" },
          { de: "Ich fahre mit dem Auto zur Arbeit.", fa: "من با ماشین به سر کار می‌روم." },
          { de: "Ich gehe oft zu Fuß.", fa: "من اغلب پیاده می‌روم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: حمل‌ونقل",
        questions: [
          {
            question: "مترو در زبان آلمانی die U-Bahn (مونث) است. جمله «من با مترو به دانشگاه می‌روم.» کدام است؟",
            questionDe: "Wie sagt man 'من با مترو به دانشگاه می‌روم'?",
            options: [
              { text: "Ich fahre mit die U-Bahn zur Uni.", isCorrect: false },
              { text: "Ich fahre mit der U-Bahn zur Uni.", isCorrect: true },
              { text: "Ich fahre mit dem U-Bahn zur Uni.", isCorrect: false }
            ],
            explanation: "بسیار عالی! بعد از mit همیشه Dativ داریم. در حالت داتیو کلمات die (مونث) تبدیل به der می‌شوند."
          }
        ]
      },
      {
        type: "text",
        title: "۲. خوردن و نوشیدن (essen und trinken)",
        text: "این دو فعل از مهم‌ترین افعال زندگی روزمره هستند. فعل trinken (نوشیدن) کاملاً باقاعده است، اما فعل essen (خوردن) در صرف برای دوم شخص (du) و سوم شخص مفرد (er/sie) بی‌قاعده است و حرف 'e' به 'i' تبدیل می‌شود."
      },
      {
        type: "table",
        title: "صرف فعل essen (خوردن)",
        rows: [
          { de: "ich esse", fa: "من می‌خورم" },
          { de: "du isst (تغییر حرف صدادار)", fa: "تو می‌خوری" },
          { de: "er/sie isst", fa: "او می‌خورد" },
          { de: "wir/sie essen", fa: "ما/آن‌ها می‌خورند" }
        ]
      },
      {
        type: "examples",
        title: "جملاتی با خوردن و نوشیدن (قانون آکوزاتیو فراموش نشود!)",
        items: [
          { de: "Ich esse morgens ein Brot. (das Brot)", fa: "من صبح‌ها یک نان(ساندویچ کوچک) می‌خورم." },
          { de: "Er trinkt einen Kaffee. (der Kaffee ➔ einen)", fa: "او یک قهوه می‌نوشد." },
          { de: "Isst du gern Gemüse?", fa: "آیا دوست داری سبزیجات بخوری؟" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "وسایل نقلیه (Die Verkehrsmittel)",
        words: [
          {
            de: "Auto",
            fa: "ماشین / خودرو",
            article: "das",
            plural: "die Autos",
            examples: [
              { de: "Ich fahre mit dem Auto zur Arbeit.", fa: "من با ماشین به سر کار می‌روم." }
            ]
          },
          {
            de: "Bus",
            fa: "اتوبوس",
            article: "der",
            plural: "die Busse",
            examples: [
              { de: "Der Bus kommt pünktlich.", fa: "اتوبوس سر وقت می‌آید." }
            ]
          },
          {
            de: "Fahrrad",
            fa: "دوچرخه",
            article: "das",
            plural: "die Fahrräder",
            examples: [
              { de: "Ich fahre gern mit dem Fahrrad.", fa: "من دوچرخه‌سواری (رفتن با دوچرخه) را دوست دارم." }
            ]
          },
          {
            de: "Zug",
            fa: "قطار",
            article: "der",
            plural: "die Züge",
            examples: [
              { de: "Wir fahren mit dem Zug nach Berlin.", fa: "ما با قطار به برلین می‌رویم." }
            ]
          },
          {
            de: "U-Bahn / Straßenbahn",
            fa: "مترو (زیرزمینی) / قطار شهری (روی زمین)",
            article: "die / die",
            plural: "die U-Bahnen",
            examples: [
              { de: "In München fahren viele Leute mit der U-Bahn.", fa: "در مونیخ افراد زیادی با مترو رفت‌وآمد می‌کنند." }
            ]
          },
          {
            de: "zu Fuß gehen",
            fa: "پیاده رفتن (فعل ترکیبی)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich gehe zu Fuß.", fa: "من پیاده می‌روم." }
            ]
          }
        ]
      },
      {
        title: "خوردنی‌ها (Das Essen)",
        words: [
          {
            de: "Brot",
            fa: "نان",
            article: "das",
            plural: "die Brote",
            examples: [
              { de: "Ich esse gern frisches Brot.", fa: "دوست دارم نانِ تازه بخورم." }
            ]
          },
          {
            de: "Käse / Butter",
            fa: "پنیر / کره",
            article: "der / die",
            plural: "die Käse / -",
            examples: [
              { de: "Zum Frühstück esse ich Brot mit Butter und Käse.", fa: "برای صبحانه نان با کره و پنیر می‌خورم." }
            ]
          },
          {
            de: "Obst / Gemüse",
            fa: "میوه / سبزیجات",
            article: "das / das",
            plural: "-",
            examples: [
              { de: "Obst und Gemüse sind sehr gesund.", fa: "میوه و سبزیجات بسیار سالم هستند." }
            ]
          },
          {
            de: "Kuchen / Schokolade",
            fa: "کیک / شکلات",
            article: "der / die",
            plural: "die Kuchen / die Schokoladen",
            examples: [
              { de: "Ich esse einen Kuchen.", fa: "من یک کیک (Akk) می‌خورم." }
            ]
          }
        ]
      },
      {
        title: "نوشیدنی‌ها (Die Getränke)",
        words: [
          {
            de: "Wasser / Milch",
            fa: "آب / شیر",
            article: "das / die",
            plural: "-",
            examples: [
              { de: "Kinder trinken Milch.", fa: "بچه‌ها شیر می‌نوشند." }
            ]
          },
          {
            de: "Kaffee / Tee",
            fa: "قهوه / چای",
            article: "der / der",
            plural: "die Kaffees / die Tees",
            examples: [
              { de: "Trinkst du einen Kaffee?", fa: "آیا یک (einen) قهوه می‌نوشی؟" }
            ]
          },
          {
            de: "Saft",
            fa: "آبمیوه (مثل Apfelsaft: آب سیب)",
            article: "der",
            plural: "die Säfte",
            examples: [
              { de: "Ich trinke morgens einen Orangensaft.", fa: "من صبح‌ها یک آب‌پرتقال می‌نوشم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Der Weg zur Arbeit\n\nGuten Morgen! Es ist 8 Uhr und das Wetter ist heute schlecht. Es ist kalt und es regnet stark. Ich trage einen Mantel und ziehe warme Schuhe an. Meine Arbeit ist nicht so nah (نزدیک).\nNormalerweise fahre ich mit dem Fahrrad, weil es gesund ist. Aber heute fahre ich mit dem Bus. Der Bus ist warm. Zuerst laufe (می‌دوم/پیاده می‌روم) ich zur Bushaltestelle. Danach fahre ich 20 Minuten mit dem Bus. Schließlich gehe ich fünf Minuten zu Fuß zum Büro!\nIm Büro trinke ich zuerst einen heißen Kaffee. Dann esse ich ein Brot mit Käse. Danach beginnt meine Arbeit.",
      questions: [
        { question: "چرا شخص راوی امروز به جای دوچرخه با اتوبوس به سر کار می‌رود؟" },
        { question: "مدت زمان سفر او با اتوبوس (mit dem Bus) چقدر است و در نهایت تا دفترش چه کار می‌کند؟" },
        { question: "در جمله «Ich trinke zuerst einen heißen Kaffee»، کلمه Kaffee چه نقشی دارد که آرتیکل آن einen شده است؟" },
        { question: "صبحانه او در دفتر (Büro) دقیقاً شامل چه چیزهایی است؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن یک روتینِ واقعیِ شهری",
      prompt: "حالا یک داستانک از یک روز ایده‌آل بنویسید! هوا خوب است، به سر کار/دانشگاه می‌روید، و در آنجا چیزی می‌خورید.",
      steps: [
        {
          title: "وضعیت هوا و لباس",
          text: "با توصیف هوا شروع کنید و بگویید چه چیزی می‌پوشید. (استفاده از Heute ist es... و Ich trage...).",
          example: { de: "Heute ist es warm und sonnig. Ich trage ein T-Shirt.", fa: "امروز هوا گرم و آفتابی است. من یک تیشرت می‌پوشم." }
        },
        {
          title: "مسیر حرکت",
          text: "با استفاده از قید Dann، بگویید با چه وسیله‌ای به کجا می‌روید (مثلاً mit dem Fahrrad zur Uni).",
          example: { de: "Dann fahre ich mit dem Fahrrad zur Uni.", fa: "سپس با دوچرخه به دانشگاه می‌روم." }
        },
        {
          title: "غذا و نوشیدنی",
          text: "در مقصد چه می‌کنید؟ با استفاده از Danach و افعال essen/trinken بگویید چه چیزی می‌خورید و می‌نوشید.",
          example: { de: "Danach trinke ich einen Kaffee und esse ein Brot mit Butter.", fa: "بعد از آن یک قهوه می‌نوشم و یک مقداری نان با کره می‌خورم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. عبور و مرور در خیابان‌های آلمان",
      source: "Easy German - Public Transport",
      link: "https://www.youtube.com/watch?v=_Ts_JuhJxl0",
      instructions: "تمرین تشخیص کلمات کلیدی:\n۱. در ویدیو دقت کنید که افراد چقدر سریع عبارت «mit der U-Bahn» یا «mit dem Auto» را به هم می‌چسبانند و شبیه یک کلمه تلفظ می‌کنند.\n۲. هر بار جمله (Wie kommst du zur Arbeit?) از رهگذران پرسیده شد، ویدیو را متوقف کنید و خودتان بلند جواب دهید: (Ich fahre mit...)."
    },
    {
      title: "۲. خوشمزه‌های آلمانی!",
      source: "Learn German - Food and Drinks",
      link: "https://www.youtube.com/watch?v=2iYy6tqOoRc",
      instructions: "تمرین حافظه تصویری:\n۱. با دیدن هر کلمه جدید، توجه کنید که آرتیکل آن چه رنگی است (معمولاً آبی برای der، سبز یا بی‌رنگ برای das و قرمز برای die در ویدیوهای آموزشی استفاده می‌شود).\n۲. پنج خوردنی/نوشیدنی که همین الان در یخچال شماست را به آلمانی لیست کنید."
    }
  ],

  speaking: [
    {
      title: "گپ‌زدن در ایستگاه اتوبوس",
      pattern: "- Hallo! Wie kommst du heute zur Uni?\n- Ich fahre mit der U-Bahn. Und du?\n- Meistens fahre ich mit dem Fahrrad, aber heute gehe ich zu Fuß.",
      exercise: "در ذهن خود یک دوست آلمانی در ایستگاه اتوبوس تصور کنید و مکالمه بالا را بلند بلند بازی کنید. سعی کنید تمام وسایل نقلیه را در این مکالمه جایگزین کنید تا دهانتان به گفتن «mit dem...» و «mit der...» عادت کند."
    },
    {
      title: "سفارش صبحانه",
      pattern: "Zum Frühstück esse ich ... und ich trinke ...",
      exercise: "یک بشقاب فرضی در دست بگیرید. رو به آینه، با استفاده از کلمات جدید دقیقاً توضیح دهید که برای صبحانه فردا قصد دارید چه چیزی بخورید (essen) و چه چیزی بنوشید (trinken). فراموش نکنید که اگر مثلاً پنیر (der Käse) می‌خورید، باید بگویید einen Käse!"
    }
  ],

  cultureTip: "شبکه حمل‌ونقل عمومی آلمان (ÖPNV) یکی از گسترده‌ترین شبکه‌ها در جهان است. در شهرهای بزرگ، خیلی از مردم اصلاً ماشین شخصی (Auto) ندارند، زیرا U-Bahn (مترو)، S-Bahn (قطار بین‌شهری/حومه)، Tram یا Straßenbahn (قطار شهری) و Bus همیشه و همه‌جا در دسترس هستند. دوچرخه‌سواری (Fahrrad fahren) نیز در شهرهایی مثل مونستر (Münster) و فرایبورگ (Freiburg)، به قدری رایج است که دوچرخه‌ها خیابان‌های مخصوص به خود را دارند و ماشین‌ها باید به شدت مراقب آن‌ها باشند."
};
