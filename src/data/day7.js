export const day7Data = {
  title: "روز ۷: رنگ‌ها، صفت‌ها و رازهای جمع‌بستن",
  objective: "امروز یاد می‌گیریم دنیای اطرافمان را رنگ‌آمیزی و توصیف کنیم (رنگ‌ها و صفات). همچنین یکی از چالش‌برانگیزترین بخش‌های آلمانی یعنی «نوشتن کلمات به صورت چندتایی (Plural)» را با الگوهای طلایی یاد می‌گیریم تا بتوانیم درباره وسایل خانه‌مان روان‌تر صحبت کنیم.",

  grammarData: {
    subtitle: "این درس روی توصیف ظاهر اشیا، یادگیری روش‌های جمع بستن کلمات و تکنیک‌های داستان‌گویی تمرکز دارد.",
    content: [
      {
        type: "text",
        title: "۱. توصیف اشیا با رنگ و صفت",
        text: "یکی از ساده‌ترین ساختارها در آلمانی برای توصیف یک چیز، استفاده از فعل sein (بودن) است.\nتنها کافیست بگویید: ضمیر/اسم + فعل sein + صفت.\nصفت‌ها در این حالت (وقتی بعد از فعل sein می‌آیند) کاملاً دست‌نخورده باقی می‌مانند و هیچ پسوندی نمی‌گیرند!"
      },
      {
        type: "examples",
        title: "توصیفِ ساده",
        items: [
          { de: "Das Auto ist rot.", fa: "ماشین قرمز است." },
          { de: "Der Tisch ist alt, aber schön.", fa: "میز قدیمی است، اما زیباست." },
          { de: "Die Lampe ist sehr hell.", fa: "لامپ خیلی پرنور (روشن) است." }
        ]
      },
      {
        type: "table",
        title: "رنگ‌ها در یک نگاه",
        rows: [
          { de: "rot / blau / grün", fa: "قرمز / آبی / سبز" },
          { de: "schwarz / weiß / grau", fa: "مشکی / سفید / خاکستری" },
          { de: "gelb / braun", fa: "زرد / قهوه‌ای" },
          { de: "bunt", fa: "رنگارنگ" }
        ]
      },
      {
        type: "text",
        title: "۲. ورود به دنیای جمع‌ها (Der Plural)",
        text: "در انگلیسی برای جمع بستن کلمات فقط یک `s` اضافه می‌کنیم (car ➔ cars). اما متأسفانه (یا خوشبختانه!) در آلمانی برای این کار ۵ روش مختلف وجود دارد.\n\n**دو قانون طلایی که همیشه ثابت است:**\n۱. آرتیکل تمام کلمات در حالت جمع (Plural) همیشه و بدون استثنا **die** است.\n۲. آرتیکل نامعینِ جمع نداریم (ein/eine حذف می‌شود و کلمه به تنهایی می‌آید).\n\nدر ادامه الگوهای رایج را می‌بینیم:"
      },
      {
        type: "table",
        title: "الگوهای رایج جمع بستن در A1",
        rows: [
          { de: "فقط گرفتنِ e (رایج برای der/das)", fa: "der Tisch ➔ die Tische | das Regal ➔ die Regale" },
          { de: "گرفتنِ er (معمولاً همراه املات: a➔ä, o➔ö, u➔ü)", fa: "das Buch ➔ die Bücher | das Haus ➔ die Häuser" },
          { de: "گرفتنِ n یا en (رایج‌ترین الگو برای کلمات die)", fa: "die Lampe ➔ die Lampen | die Tür ➔ die Türen" },
          { de: "بدون تغییر! (فقط آرتیکل عوض می‌شود)", fa: "das Fenster ➔ die Fenster | das Zimmer ➔ die Zimmer" },
          { de: "گرفتنِ s (معمولاً کلماتی که از انگلیسی یا زبان‌های دیگر آمده‌اند)", fa: "das Sofa ➔ die Sofas | das Auto ➔ die Autos" }
        ]
      },
      {
        type: "alert",
        title: "نکته‌ی کلیدی در مورد جمع",
        text: "آلمانی‌ها خودشان هم قوانین Plural را حفظ نمی‌کنند! آن‌ها هر کلمه‌ی جدید را با فایل صوتیِ آرتیکل و فرم جمعش در مغزشان ثبت می‌کنند. شما نیز باید همیشه کلمه را با جمعش یاد بگیرید."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ساختار Plural",
        questions: [
          {
            question: "کلمه‌ی صندلی (der Stuhl) در حالت جمع می‌گیرد (die Stühle). اگر بخواهیم بگوییم «در اتاق ۳ صندلی وجود دارد»، کدام جمله صحیح است؟",
            questionDe: "Welcher Satz ist grammatikalisch 100% richtig?",
            options: [
              { text: "Im Zimmer gibt es drei Stuhl.", isCorrect: false },
              { text: "Im Zimmer gibt es drei Stühle.", isCorrect: true },
              { text: "Im Zimmer gibt es drei der Stühle.", isCorrect: false }
            ],
            explanation: "آفرین! وقتی تعداد بیش از یک است، باید از فرم جمع کلمه (Stühle) استفاده کنید. نیازی به آوردن آرتیکل Die نیست."
          }
        ]
      },
      {
        type: "text",
        title: "۳. گسترش داستان‌گویی با قیدهای توالی",
        text: "برای اینکه لیستِ کارها تبدیل به یک «داستان» شود، باید آن‌ها را از ربات‌گونه بودن در بیاوریم. این قیدها جادوی زبان آلمانی برای توصیف هستند:\n\n1. zuerst (اول از همه / در ابتدا)\n2. dann (سپس)\n3. danach (بعد از آن)\n4. später (بعدتر / بعداً)\n5. schließlich (سرانجام / در آخر)\n\n**یادآوری حیاتی:** اگر هر کدام از این کلمات را در ابتدای جمله بگذارید، **فعل فوراً بعد از آن در جایگاه دوم ظاهر می‌شود!**"
      },
      {
        type: "examples",
        title: "توالی بهشتِ نظم آلمانی",
        items: [
          { de: "Zuerst ziehe ich mich an. Danach frühstücke ich.", fa: "ابتدا (اول از همه) لباس می‌پوشم. بعد از آن صبحانه می‌خورم." },
          { de: "Später gehe ich zur Arbeit. Schließlich komme ich zurück.", fa: "بعداً به سر کار می‌روم. سرانجام (در پایان کار) بر می‌گردم." }
        ]
      },
      {
        type: "text",
        title: "۴. منفی کردن جملات (nicht, kein و کلمه‌ی جادویی Doch)",
        text: "برای منفی کردن در آلمانی دو ابزار اصلی داریم:\n\n۱. **kein / keine (هیچ):** فقط برای منفی کردن اسم‌هایی که آرتیکل نامعین (ein/eine) دارند یا اصلاً آرتیکل ندارند استفاده می‌شود. \n- مذکر و خنثی: kein (مانند: Ich habe kein Auto - من هیچ ماشینی ندارم).\n- مونث و جمع: keine (مانند: Ich habe keine Kinder - من هیچ بچه‌ای ندارم).\n\n۲. **nicht (نه / نیست):** برای منفی کردن افعال، صفت‌ها و اسم‌های خاص یا اسم‌های دارای آرتیکل معین (der/die/das/mein) استفاده می‌شود.\nمثال: Das Auto ist nicht rot. (ماشین قرمز نیست). / Ich spiele nicht. (من بازی نمی‌کنم).\n\n۳. **کلمه‌ی جادویی Doch (چرا که نه! / اتفاقاً آره):** وقتی کسی از شما یک سوال **منفی** می‌پرسد و شما می‌خواهید جواب مثبت (برخلاف میل او) بدهید، به جای Ja حتماً باید از Doch استفاده کنید!\nمثال: Hast du kein Auto? (ماشین نداری؟) ➔ Doch! Ich habe ein Auto. (چرا اتفاقاً! من ماشین دارم)."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: nicht یا kein یا Doch؟",
        questions: [
          {
            question: "اگر دوستتان بپرسد: Kommst du nicht mit? (با ما نمی‌آیی؟) و شما بخواهید بگویید «چرا! می‌آیم»، چه می‌گویید؟",
            questionDe: "Wie antwortet man positiv auf 'Kommst du nicht mit?'?",
            options: [
              { text: "Ja, ich komme mit.", isCorrect: false },
              { text: "Doch! Ich komme mit.", isCorrect: true },
              { text: "Nein, ich komme mit.", isCorrect: false }
            ],
            explanation: "آفرین! چون سوال منفی (با nicht) پرسیده شده و جواب شما مثبت است، باید از Doch استفاده کنید."
          },
          {
            question: "برای منفی کردن این جمله از چه کلمه‌ای استفاده می‌کنید؟ 'Das ist ___ mein Buch.' (این کتاب من نیست)",
            questionDe: "Welches Wort ist richtig: 'Das ist ___ mein Buch.'?",
            options: [
              { text: "kein", isCorrect: false },
              { text: "nicht", isCorrect: true },
              { text: "keine", isCorrect: false }
            ],
            explanation: "بسیار عالی! چون کلمه Buch اینجا ضمیر ملکی (mein) دارد، یک اسم مشخص است. اسم‌های مشخص و صفت‌ها همیشه با nicht منفی می‌شوند."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "رنگ‌ها (Die Farben)",
        words: [
          {
            de: "schwarz / weiß",
            fa: "مشکی / سفید",
            article: "-",
            plural: "-",
            examples: [
              { de: "Das Auto ist schwarz und das Haus ist weiß.", fa: "ماشین مشکی است و خانه سفید است." }
            ]
          },
          {
            de: "rot / blau / grün",
            fa: "قرمز / آبی / سبز",
            article: "-",
            plural: "-",
            examples: [
              { de: "Der Apfel ist rot. Der Himmel ist blau.", fa: "سیب قرمز است. آسمان آبی است." }
            ]
          },
          {
            de: "gelb / braun / grau",
            fa: "زرد / قهوه‌ای / خاکستری",
            article: "-",
            plural: "-",
            examples: [
              { de: "Der Teppich ist grau. Der Tisch ist braun.", fa: "فرش خاکستری است. میز قهوه‌ای است." }
            ]
          },
          {
            de: "hell / dunkel",
            fa: "روشن / تیره (برای ترکیب با رنگ‌ها)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Das T-Shirt ist hellblau.", fa: "تیشرت آبی روشن است." }
            ]
          }
        ]
      },
      {
        title: "صفات متضاد پرکاربرد (Gegensätze)",
        words: [
          {
            de: "groß / klein",
            fa: "بزرگ / کوچک",
            article: "-",
            plural: "-",
            examples: [
              { de: "Das Wohnzimmer ist sehr groß.", fa: "اتاق نشیمن بسیار بزرگ است." }
            ]
          },
          {
            de: "neu / alt",
            fa: "جدید / قدیمی",
            article: "-",
            plural: "-",
            examples: [
              { de: "Der Schrank ist alt, aber er ist schön.", fa: "کمد قدیمی است، اما زیباست." }
            ]
          },
          {
            de: "schön / hässlich",
            fa: "زیبا / زشت",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich finde die Lampe hässlich.", fa: "به نظرم لامپ زشت است." }
            ]
          },
          {
            de: "hell / dunkel (für Räume)",
            fa: "روشن / تاریک (برای نورپردازی اتاق)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Das Bad ist leider sehr dunkel.", fa: "حمام متاسفانه بسیار تاریک است." }
            ]
          }
        ]
      },
      {
        title: "جمعِ وسایل خانه (Pluralformen der Möbel)",
        words: [
          {
            de: "das Zimmer ➔ die Zimmer",
            fa: "اتاق ➔ اتاق‌ها",
            article: "das/die",
            plural: "die Zimmer",
            examples: [
              { de: "Meine Wohnung hat drei Zimmer.", fa: "آپارتمان من ۳ اتاق دارد." }
            ]
          },
          {
            de: "der Tisch ➔ die Tische",
            fa: "میز ➔ میزها",
            article: "der/die",
            plural: "die Tische",
            examples: [
              { de: "Im Café gibt es viele Tische.", fa: "در کافه میزهای زیادی وجود دارد." }
            ]
          },
          {
            de: "der Stuhl ➔ die Stühle",
            fa: "صندلی ➔ صندلی‌ها (املات + e)",
            article: "der/die",
            plural: "die Stühle",
            examples: [
              { de: "Wir brauchen vier Stühle.", fa: "ما چهار صندلی نیاز داریم." }
            ]
          },
          {
            de: "das Fenster ➔ die Fenster",
            fa: "پنجره ➔ پنجره‌ها",
            article: "das/die",
            plural: "die Fenster",
            examples: [
              { de: "Das Haus hat große Fenster.", fa: "خانه پنجره‌های بزرگی دارد." }
            ]
          },
          {
            de: "das Bett ➔ die Betten",
            fa: "تخت ➔ تخت‌ها",
            article: "das/die",
            plural: "die Betten",
            examples: [
              { de: "Wo sind die Betten?", fa: "تخت‌ها کجا هستند؟" }
            ]
          },
          {
            de: "die Wand ➔ die Wände",
            fa: "دیوار ➔ دیوارها",
            article: "die/die",
            plural: "die Wände",
            examples: [
              { de: "Die Wände im Schlafzimmer sind grün.", fa: "دیوارهای اتاق خواب سبز هستند." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein farbiges Zuhause\n\nHallo, ich bin Julia und ich liebe Farben! Mein kleines Haus ist sehr bunt. Von außen ist es weiß, aber die Tür ist rot! Wenn man hineinkommt, sieht man zuerst den Flur. Der Flur ist gelb und hell.\n\nMeine Lieblingszimmer sind das Wohnzimmer und die Küche. Im Wohnzimmer gibt es zwei graue Sofas und vier grüne Stühle. Die Wände sind hellblau. Danach kommt die Küche. Sie ist klein, aber sehr modern. Die Schränke in der Küche sind braun und neu. Schließlich gibt es im zweiten Stock die Schlafzimmer. Die Betten dort sind groß und sehr bequem.",
      questions: [
        { question: "درِ خانه‌ی جولیا چه رنگی است؟" },
        { question: "کدام اتاق‌های خانه اتاق‌های مورد علاقه‌ی (Lieblingszimmer) او هستند؟" },
        { question: "با قانون توالی زمان چک کنید: در پاراگراف دوم، بعد از راهرو ابتدا به کدام اتاق‌ها می‌رسیم و در نهایت (schließlich) به کجا می‌رویم؟" },
        { question: "در اتاق نشیمن چه وسایلی با چه رنگ‌هایی وجود دارند؟ (استفاده از Plural را پیدا کنید)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره رنگ‌ها و دکوراسیون",
      prompt: "حالا نوبت شماست. قصد داریم ۳ پاراگراف کوتاه درباره خانه‌ی رؤیایی یا خانه‌ی فعلی‌تان بنویسید. در این متن باید اشیا را جمع ببندید و آن‌ها را با رنگ‌ها ترکیب کنید.",
      steps: [
        {
          title: "معرفی خانه و تعداد اتاق‌ها",
          text: "با این جمله شروع کنید که خانه‌تان چند اتاق دارد. کلمه Zimmer در حالت جمع تغییر نمی‌کند.",
          example: { de: "Ich wohne in einem kleinen Haus. Mein Haus hat vier Zimmer: ein Wohnzimmer, eine Küche und zwei Schlafzimmer.", fa: "من در یک خانه کوچک زندگی می‌کنم. خانه من 4 اتاق دارد: یک نشیمن، یک آشپزخانه و دو اتاق خواب." }
        },
        {
          title: "رنگ‌آمیزی دیوارها و وسایل در نشیمن",
          text: "حالا بگویید دیوارهای اتاق نشیمن چه رنگی است (die Wände sind...). سپس دو وسیله را در حالت جمع (مثلاً لامپ‌ها، صندلی‌ها) توصیف کنید.",
          example: { de: "Im Wohnzimmer sind die Wände weiß und hell. Wir haben zwei Sofas. Die Sofas sind grau und sehr bequem.", fa: "در اتاق نشیمن دیوارها روشن و سفیدند. ما دو مبل داریم. مبل‌ها خاکستری رنگ و بسیار راحت هستند." }
        },
        {
          title: "ترتیب دادن به یک بازدید!",
          text: "با استفاده از (Zuerst, Dann, Schließlich) تصور کنید به کسی خانه را نشان می‌دهید. اول куда می‌رویم؟ بعد 어디؟",
          example: { de: "Zuerst gehen wir in die kleine Küche. Danach zeige ich dir das helle Bad. Schließlich sehen wir das große Schlafzimmer.", fa: "در ابتدا می‌رویم به آشپزخانه کوچک. سپس به تو حمام روشن را نشان می‌دهم. سرانجام اتاق خواب بزرگ را می‌بینیم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. تلفظ رنگ‌ها در آلمانی",
      source: "Learn German Colors",
      link: "https://www.youtube.com/watch?v=tBlSEhckJhA",
      instructions: "برای یادگیری رنگ‌ها، حافظه بصری بهترین سلاح است.\n۱. یکبار ویدیو را ببینید و به تلفظ حرف «r» در کلماتی مثل rot, braun و grau دقت کنید.\n۲. اطراف خود در اتاق نگاه کنید. ۵ وسیله مختلف پیدا کنید و با صدای بلند رنگ آن‌ها را بگویید (مثال: Das Buch ist blau. Die Lampe ist weiß).\n۳. یک چالش: سعی کنید سریع رنگ لباسی که الان پوشیده‌اید را به آلمانی بیان کنید!"
    },
    {
      title: "۲. هنر توالی در داستان‌گویی",
      source: "Reihenfolge im Satz: zuerst, dann",
      link: "https://www.youtube.com/watch?v=lnZ_-snzcQg",
      instructions: "این ویدیو جادوی روانی کلام شماست.\n۱. گوش دهید که ریتم گوینده زمانی که می‌گوید «Danach...» یا «Später...» چگونه است. این کلمات معمولاً با مکثِ جزئی یا تأکید ادا می‌شوند.\n۲. در مکالمات ویدیو، جایگاه فعل‌ها را زیر نظر بگیرید. هر بار که قید در ابتدای جمله آمد، با انگشت روی میز بزنید تا جایگاه دوم فعل ملکه ذهنتان شود."
    }
  ],

  speaking: [
    {
      title: "معمارِ رنگ‌ها (Architekt der Farben)",
      pattern: "- Welche Farbe hat dein Sofa?\n- Mein Sofa ist grau, aber die Kissen sind rot.\n- Und wie sind die Wände?\n- Die Wände sind weiß und sehr hell.",
      exercise: "تصور کنید یک طراح داخلی هستید.\nگام ۱: بلند شوید و در اتاق بگردید. رنگ و صفتِ حداقل ۸ وسیله را با صدای بلند ارزیابی کنید. از تضادها استفاده کنید (مثل: Der Tisch ist alt, aber er ist schön).\nگام ۲: اگر وسیله‌ای جمع است (مثل صندلی‌ها)، حتماً با فعل sind بگویید (Die Stühle sind grün)."
    },
    {
      title: "تعریف یک داستان ۵ قسمتی!",
      pattern: "Zuerst... Dann... Danach... Später... Schließlich...",
      exercise: "یک کار روتین اما پیچیده را انتخاب کنید (مثلاً مسیر رفتن به سر کار یا فرآیند پختن شام).\nتمرین شما این است که बिना هیچ متنی، با استفاده از ۵ انگشت دستتان، این داستان را در ۵ جمله بلند تعریف کنید. با اولین شروع (Zuerst) انگشت شست را باز کنید و فعل را روی بند دوم انگشت بیاورید! این کار را تا انگشت پنجم (Schließlich) ادامه دهید. این بازی فیزیکی، جایگاه فعل را در مغز شما تثبیت می‌کند."
    }
  ],

  cultureTip: "آلمانی‌ها در چیدمان داخلی خانه‌شان (Inneneinrichtung) به‌شدت مینیمالیست هستند. دیوارها معمولاً همیشه weiße Wände (دیوارهای کاملاً سفید) دارند تا نور طبیعی را بیشتر کنند، زیرا زمستان‌ها در آلمان طولانی و تاریک است. همچنین برای کفپوش، کمتر از فرش‌های بزرگ پر نقش و نگار (مثل ایران) استفاده می‌کنند؛ در عوض کف‌های پارکت چوبی گرم و فرش‌های کوچک تزئینی رواج دارد. این سادگی و استفاده از رنگ‌های روشن (hellblau, hellgrau) برای ماکسیمایز کردن «نور» است."
};
