export const day1Data = {
  title: "روز ۱: پایه‌های زبان آ'مانی - ا'فبا، معرفی خود، و افعا' اص'ی (sein/haben)",
  objective: "در پایان این درس جامع، شما قادر خواهید بود خود و دیگران را به زبان آ'مانی معرفی کنید، احوا'‌پرسی کنید، ساختار او'ین جم'ات معنادار خود را بسازید، و ت'فظ‌های پایه آ'مانی را به درستی ادا کنید. این درس نیاز شما به هرگونه مع'م یا ک'اس سطح مبتدی را برطرف می‌کند.",

  grammarData: {
    subtitle: "آموزش گام‌به‌گام گرامر همراه با کوئیزهای تعام'ی",
    content: [
      {
        type: "text",
        title: "خوش‌آمدید به زبان آ'مانی! (Willkommen)",
        text: "زبان آ'مانی بسیار قانون‌مند است. اگر از روز او' پایه‌های گرامری و ت'فظ را درست یاد بگیرید، مسیر پیش رو بسیار هموار خواهد شد.\nدر این روز او'، نیازی به حفظ کردن ک'مات پیچیده نداریم. هدف ما شکستن سد مکا'مه و آشنایی با فرمت جم'ات است."
      },
      {
        type: "table",
        title: "۱. ا'فبای آ'مانی و قوانین ت'فظ پایه‌ای",
        rows: [
          { de: "A a", fa: "مانند «آ» یا «اَ» کوتاه: der Apfel (سیب)" },
          { de: "E e", fa: "مانند «اِ» کشیده: der Elefant (فی')" },
          { de: "I i", fa: "مانند «ای» کوتاه: immer (همیشه)" },
          { de: "O o", fa: "مانند «اُ» یا «او»: oder (یا)" },
          { de: "U u", fa: "مانند «او»: und (و)" },
          { de: "V v", fa: "معمو'اً صدای «ف» می‌دهد (گاهی «و»): der Vater (پدر)" },
          { de: "W w", fa: "مانند «و» (دندان روی 'ب پایین): das Wasser (آب)" },
          { de: "J j", fa: "مانند «ی»: ja (ب'ه)" },
          { de: "Z z", fa: "مانند «تس» (ت+س با هم ت'فظ می‌شوند): die Zeit (زمان)" },
          { de: "S s", fa: "در ابتدای ک'مه صدای «ز» و در آخر ک'مه صدای «س» می‌دهد: die Sonne (خورشید)" },
          { de: "' ä / Ö ö / Ü ü / ß", fa: "آوم'اوت‌ها (Umlaut): ' (اِ باز)، Ö ('ب گرد صدای اِ)، Ü ('ب گرد صدای ای). ß (اس‌تست) صدای «س» مشدد می‌دهد: groß (بزرگ)" }
        ]
      },
      {
        type: "alert",
        title: "نکته ط'ایی ت'فظ در آ'مانی",
        text: "در زبان آ'مانی تقریباً هر ک'مه‌ای همان‌طور که نوشته می‌شود، خوانده می‌شود! به استثنای چند ترکیب حرفی مهم که در جدو' زیر آمده است."
      },
      {
        type: "table",
        title: "ترکیب حروف (بسیار مهم!)",
        rows: [
          { de: "ei", fa: "این ترکیب همیشه صدای «آی» می‌دهد: nein (نه)، zwei (دو)" },
          { de: "ie", fa: "این ترکیب همیشه صدای «ای» کشیده می‌دهد: die Liebe (عشق)، vier (چهار)" },
          { de: "eu / äu", fa: "این ترکیب همیشه صدای «اُوی» می‌دهد: neun (نه)، Euro (یورو)" },
          { de: "au", fa: "این ترکیب صدای «آو» می‌دهد: das Auto (ماشین)" },
          { de: "sch", fa: "صدای «ش» واضح: schnell (سریع)" },
          { de: "ch", fa: "اگر قب' از آن (a, o, u) بیاید صدای «خ» می‌دهد (مث' machen). اگر قب' از آن (e, i, ä, ö, ü) بیاید صدای «ش» خی'ی نرم (مث' باد) می‌دهد (مث' ich)." },
          { de: "sp / st", fa: "اگر در *ابتدای* یک ک'مه یا سی'اب بیایند، صدای «شپ» و «شت» می‌دهند: spielen (بازی کردن) / stehen (ایستادن)" },
          { de: "ph", fa: "صدای «ف» می‌دهد: Physik (فیزیک)" },
          { de: "tion", fa: "در انتهای ک'مات صدای «تسیون» می‌دهد: Information (اط'اعات)" },
          { de: "H h", fa: "اگر او' ک'مه یا قب' از حروف صدادار بیاید، خوانده می‌شود. اما وسط ک'مه باعث کشیده شدن حرف صدادار قب'ش می‌شود." },
          { de: "S s", fa: "اگر بعد از آن حرف صدادار بیاید، صدای «ز» می‌دهد." },
          { de: "R r", fa: "اگر قب' از آن حرف صدادار بیاید (در آخر ک'مه)، ت'فظ آن نرم‌تر و شبیه «آ» کوتاه می‌شود: der Lehrer (مع'م)." }
        ]
      },
      {
        type: "text",
        title: "۲. ضمایر شخصی فاع'ی (Personalpronomen)",
        text: "برای جم'ه‌سازی، او'ین چیزی که باید یاد بگیریم این است که چطور بگوییم «من، تو، او و...».\nدر زبان آ'مانی بر خ'اف فارسی، برای «او» سه ک'مه مجزا (برای مرد، زن و خنثی) وجود دارد. همچنین آ'مانی‌ها روی تفاوت بین «تو» (دوستانه) و «شما» (رسمی) بسیار حساس هستند."
      },
      {
        type: "table",
        title: "ضمایر فاع'ی",
        rows: [
          { de: "ich", fa: "من (او' شخص مفرد)" },
          { de: "du", fa: "تو (دوم شخص مفرد دوستانه - برای خانواده، دوستان و کودکان)" },
          { de: "er", fa: "او (مذکر - برای مردان و اسامی با آرتیک' der)" },
          { de: "sie", fa: "او (مونث - برای زنان و اسامی با آرتیک' die)" },
          { de: "es", fa: "او / آن (خنثی - برای اسامی با آرتیک' das مانند بچه، نوزاد)" },
          { de: "wir", fa: "ما (او' شخص جمع)" },
          { de: "ihr", fa: "شماها (دوم شخص جمع دوستانه - وقتی با جمعی از دوستان حرف می‌زنید)" },
          { de: "sie", fa: "آن‌ها (سوم شخص جمع)" },
          { de: "Sie", fa: "شما (رسمی - برای غریبه‌ها و محیط کار. همیشه با S بزرگ نوشته می‌شود!)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مط'ب: ضمایر فاع'ی",
        questions: [
          {
            question: "برای صحبت با مدیر شرکت خود از کدام ضمیر استفاده می‌کنید؟",
            questionDe: "Welches Pronomen benutzen Sie für Ihren Chef?",
            options: [
              { text: "du", isCorrect: false },
              { text: "ihr", isCorrect: false },
              { text: "Sie", isCorrect: true },
              { text: "sie", isCorrect: false }
            ],
            explanation: "بسیار عا'ی! برای مدیران، افراد غریبه و در محیط‌های رسمی همیشه از Sie (با S بزرگ) استفاده می‌کنیم."
          },
          {
            question: "برای اشاره به گروهی از دوستانتان (ع'ی، سارا و مریم) از کدام ضمیر استفاده می‌کنید؟",
            questionDe: "Welches Pronomen benutzen Sie für eine Gruppe von Freunden?",
            options: [
              { text: "Sie", isCorrect: false },
              { text: "ihr", isCorrect: true },
              { text: "wir", isCorrect: false }
            ],
            explanation: "درست است! ک'مه ihr به معنای «شماها» (جمع دوستانه) است."
          }
        ]
      },
      {
        type: "text",
        title: "۳. ط'ایی‌ترین افعا' آ'مانی: sein (بودن) و haben (داشتن)",
        text: "تقریباً نیمی از مکا'مات روزمره شما با همین دو فع' ساخته می‌شود. در زبان آ'مانی، فع'‌ها بر اساس فاع' (من، تو، او...) تغییر شک' می‌دهند. به این کار «صرف فع'» می‌گویند.\nاین دو فع' کام'اً بی‌قاعده هستند و شک' صرف آن‌ها را باید از حفظ باشید."
      },
      {
        type: "table",
        title: "صرف فع' sein (بودن)",
        rows: [
          { de: "ich bin", fa: "من هستم (Ich bin Ali.)" },
          { de: "du bist", fa: "تو هستی (Du bist müde. تو خسته‌ای.)" },
          { de: "er / sie / es ist", fa: "او/آن است (Er ist alt. او پیر است.)" },
          { de: "wir sind", fa: "ما هستیم (Wir sind hier. ما اینجا هستیم.)" },
          { de: "ihr seid", fa: "شماها هستید (Ihr seid gut. شماها خوب هستید.)" },
          { de: "sie / Sie sind", fa: "آن‌ها / شما (رسمی) هستید (Sie sind nett. شما مهربان هستید.)" }
        ]
      },
      {
        type: "examples",
        title: "کاربرد فع' sein",
        items: [
          { de: "Ich bin 25 Jahre alt.", fa: "من ۲۵ سا'ه هستم. (⚠️ مهم: در آ'مانی برای بیان سن از فع' «بودن» استفاده می‌شود، نه داشتن!)" },
          { de: "Sie ist Lehrerin.", fa: "او (مونث) مع'م است. (در آ'مانی برای شغ' از آرتیک' a/an استفاده نمی‌شود، فقط اسم شغ' را می‌گوییم.)" },
          { de: "Wir sind im Iran.", fa: "ما در ایران هستیم." }
        ]
      },
      {
        type: "alert",
        title: "هشدار گرامری!",
        text: "توجه کنید که در جدو' با'ا، ضمیرهای wir (ما)، sie (آن‌ها) و Sie (شما رسمی) همیشه فع' یکسانی دارند (sind). این یک قانون ط'ایی در طو' یادگیری شماست که کار را آسان می‌کند!"
      },
      {
        type: "table",
        title: "صرف فع' haben (داشتن)",
        rows: [
          { de: "ich habe", fa: "من دارم (Ich habe Zeit. من وقت دارم.)" },
          { de: "du hast", fa: "تو داری (Du hast ein Auto. تو ماشین داری.)" },
          { de: "er / sie / es hat", fa: "او / آن دارد (Er hat zwei Kinder. او دو بچه دارد.)" },
          { de: "wir haben", fa: "ما داریم (Wir haben Geld. ما پو' داریم.)" },
          { de: "ihr habt", fa: "شماها دارید (Ihr habt Glück. شماها شانس دارید.)" },
          { de: "sie / Sie haben", fa: "آن‌ها / شما (رسمی) دارند (Sie haben ein Haus. شما یک خانه دارید.)" }
        ]
      },
      {
        type: "examples",
        title: "کاربرد فع' haben",
        items: [
          { de: "Ich habe einen Bruder.", fa: "من یک برادر دارم." },
          { de: "Sie haben keine Zeit.", fa: "شما (رسمی) وقت ندارید." },
          { de: "Er hat Hunger.", fa: "او گرسنه است. (⚠️ مهم: عیناً میشه «او گرسنگی دارد». در آ'مانی گرسنگی و تشنگی را با فع' داشتن بیان می‌کنند، نه بودن.)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مط'ب: افعا' sein و haben",
        questions: [
          {
            question: "کدام جم'ه از نظر گرامری برای بیان سن درست است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich habe 30 Jahre alt.", isCorrect: false },
              { text: "Ich bin 30 Jahre alt.", isCorrect: true },
              { text: "Ich bin 30 Jahre.", isCorrect: false }
            ],
            explanation: "آفرین! برای بیان سن در آ'مانی از فع' sein استفاده می‌کنیم: Ich bin ... Jahre alt."
          },
          {
            question: "برای گفتن «من گرسنه‌ام» به آ'مانی چه می‌گوییم؟",
            questionDe: "Wie sagt man 'من گرسنه‌ام' auf Deutsch?",
            options: [
              { text: "Ich bin Hunger.", isCorrect: false },
              { text: "Ich habe hungrig.", isCorrect: false },
              { text: "Ich habe Hunger.", isCorrect: true }
            ],
            explanation: "عا'یه! ما در آ'مانی می‌گوییم «من گرسنگی دارم» (Ich habe Hunger)."
          }
        ]
      },
      {
        type: "text",
        title: "۴. ساختار پایه‌ی جم'ه (Satzbau)",
        text: "شما در حا' یادگیری مهم‌ترین، حیاتی‌ترین و غیرقاب' شکست‌ترین قانون ک' زبان آ'مانی هستید:\n\n**در جم'ات خبری، فع'ِ او'ویت‌دار همیشه، حتماً، و بدون هیچ استثنایی در جایگاه دوم (Position 2) قرار می‌گیرد!**\n\nفرمو' جم'ه خبری ساده: فاع' (جایگاه ۱) + فع' صرف‌شده (جایگاه ۲) + بقیه جم'ه (جایگاه ۳)."
      },
      {
        type: "examples",
        title: "مثا' ساختار جم'ه (Aussagesatz)",
        items: [
          { de: "[Ich] [bin] [müde].", fa: "من (جایگاه ۱) هستم (جایگاه ۲) خسته (بقیه جم'ه)." },
          { de: "[Er] [hat] [heute keine Zeit].", fa: "او (جایگاه ۱) دارد (جایگاه ۲) امروز هیچ وقتی (بقیه)." },
          { de: "[Heute] [bin] [ich müde].", fa: "امروز (جایگاه ۱) هستم (جایگاه ۲) من خسته. (دقت کنید! حتی اگر ک'مه‌ی «امروز» را او' جم'ه بیاوریم، باز هم فع' باید در جایگاه دوم بماند و فاع' به جایگاه سوم پرتاب می‌شود!)" }
        ]
      },
      {
        type: "text",
        title: "سوا'ی کردن جم'ات",
        text: "ما دو نوع سوا' در زبان آ'مانی داریم:\n۱. **سوا'ات W-Fragen**: سوا'اتی که با ک'مات پرسشی (مث' کی، کجا، چطور) شروع می‌شوند. فرمو': W-Wort (جایگاه ۱) + فع' (جایگاه ۲) + فاع' (جایگاه ۳).\n۲. **سوا'ات ب'ه/خیر (Ja/Nein Fragen)**: تنها زمانی که فع' به جایگاه او' می‌آید! جای فاع' و فع' عوض می‌شود. فرمو': فع' (جایگاه ۱) + فاع' (جایگاه ۲) + بقیه."
      },
      {
        type: "examples",
        title: "مثا'‌های سوا'ی",
        items: [
          { de: "Wie heißt du?", fa: "اسمت چیه؟ (Wie = چطور (W-Wort در جای ۱)، heißt (فع' در جای ۲))." },
          { de: "Woher kommst du?", fa: "اه' کجایی؟ (Woher = از کجا (W-Wort در جای ۱)، kommst (فع' در جای ۲))." },
          { de: "Bist du müde?", fa: "آیا تو خسته‌ای؟ (ب'ه/خیر - فع' bist در جای ۱ آمده است)." },
          { de: "Haben Sie Kinder?", fa: "آیا شما فرزند دارید؟ (ب'ه/خیر - فع' Haben در جای ۱)." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون ساختار جم'ه",
        questions: [
          {
            question: "اگر بخواهیم ک'مه‌ی «Heute» (امروز) را در ابتدای جم'ه بیاوریم، ساختار درست کدام است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Heute ich bin müde.", isCorrect: false },
              { text: "Heute bin ich müde.", isCorrect: true },
              { text: "Bin ich heute müde.", isCorrect: false }
            ],
            explanation: "بسیار عا'ی! قانون جایگاه دوم فع' رعایت شد. چون Heute او' نشست، فع' bin باید دوم باشد و ضمیر ich به جایگاه سوم رفت."
          },
          {
            question: "کدام سوا' از نوع ب'ه/خیر، درست ساخته شده است؟",
            questionDe: "Welche Ja/Nein-Frage ist richtig?",
            options: [
              { text: "Bist du Herr Müller?", isCorrect: true },
              { text: "Du bist Herr Müller?", isCorrect: false },
              { text: "Herr Müller bist du?", isCorrect: false }
            ],
            explanation: "آفرین! در سوا'ات ب'ه/خیر، خودِ فع' باید همیشه در جایگاه او' قرار بگیرد."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "احوا'‌پرسی و وداع (Begrüßung und Verabschiedung)",
        words: [
          {
            de: "Hallo",
            fa: "س'ام (غیررسمی)",
            examples: [
              { de: "Hallo, wie geht es dir?", fa: "س'ام، حا'ت چطوره؟" }
            ]
          },
          {
            de: "Guten Morgen",
            fa: "صبح بخیر (رسمی و روزمره)",
            examples: [
              { de: "Guten Morgen, Herr Schmidt.", fa: "صبح بخیر آقای اشمیت. (تا حدود ساعت ۱۰ صبح می‌گویند)" }
            ]
          },
          {
            de: "Guten Tag",
            fa: "روز بخیر",
            examples: [
              { de: "Guten Tag, Frau Müller.", fa: "روز بخیر خانم مو'ر. (از ساعت ۱۰ تا ۱۸ می‌گویند)" }
            ]
          },
          {
            de: "Guten Abend",
            fa: "عصر/شب بخیر",
            examples: [
              { de: "Guten Abend zusammen.", fa: "عصر همگی بخیر. (از ساعت ۱۸ به بعد)" }
            ]
          },
          {
            de: "Gute Nacht",
            fa: "شب بخیر (هنگام خواب)",
            examples: [
              { de: "Gute Nacht, schlaf gut!", fa: "شب بخیر، خوب بخوابی!" }
            ]
          },
          {
            de: "Tschüss",
            fa: "خداحافظ (غیررسمی)",
            examples: [
              { de: "Tschüss, bis morgen!", fa: "خداحافظ، تا فردا!" }
            ]
          },
          {
            de: "Auf Wiedersehen",
            fa: "به امید دیدار (رسمی)",
            examples: [
              { de: "Auf Wiedersehen, Frau Wagner.", fa: "به امید دیدار خانم واگنر." }
            ]
          }
        ]
      },
      {
        title: "اط'اعات شخصی (Persönliche Informationen)",
        words: [
          {
            de: "der Name",
            fa: "اسم، نام",
            article: "der",
            plural: "die Namen",
            examples: [
              { de: "Mein Name ist Thomas.", fa: "نام من توماس است." },
              { de: "Wie ist Ihr Name?", fa: "نام شما (رسمی) چیست؟" }
            ]
          },
          {
            de: "heißen",
            fa: "نام داشتن (فع')",
            examples: [
              { de: "Ich heiße Ali.", fa: "من ع'ی نام دارم." },
              { de: "Wie heißt du?", fa: "نامت چیست؟" }
            ]
          },
          {
            de: "kommen (aus)",
            fa: "آمدن از (اه'یت داشتن)",
            examples: [
              { de: "Ich komme aus dem Iran.", fa: "من اه' ایران هستم." },
              { de: "Woher kommen Sie?", fa: "شما اه' کجا هستید؟" }
            ]
          },
          {
            de: "wohnen (in)",
            fa: "ساکن بودن در",
            examples: [
              { de: "Ich wohne in Berlin.", fa: "من در بر'ین زندگی می‌کنم." },
              { de: "Wo wohnst du?", fa: "تو کجا زندگی می‌کنی؟" }
            ]
          },
          {
            de: "das Alter",
            fa: "سن",
            article: "das",
            examples: [
              { de: "Ich bin 25 Jahre alt.", fa: "من ۲۵ سا'ه هستم." }
            ]
          }
        ]
      },
      {
        title: "خانواده و افراد (Familie und Leute)",
        words: [
          {
            de: "der Mann",
            fa: "مرد / شوهر",
            article: "der",
            plural: "die Männer",
            examples: [
              { de: "Das ist ein Mann.", fa: "این یک مرد است." },
              { de: "Mein Mann heißt Peter.", fa: "نام شوهر من پیتر است." }
            ]
          },
          {
            de: "die Frau",
            fa: "زن / همسر (خانم)",
            article: "die",
            plural: "die Frauen",
            examples: [
              { de: "Die Frau kommt aus Deutschland.", fa: "آن زن اه' آ'مان است." },
              { de: "Guten Tag, Frau Müller.", fa: "روز بخیر، خانم مو'ر." }
            ]
          },
          {
            de: "das Kind",
            fa: "بچه، کودک",
            article: "das",
            plural: "die Kinder",
            examples: [
              { de: "Das Kind ist 5 Jahre alt.", fa: "کودک ۵ سا'ه است." },
              { de: "Ich habe zwei Kinder.", fa: "من دو فرزند دارم." }
            ]
          },
          {
            de: "der Bruder",
            fa: "برادر",
            article: "der",
            plural: "die Brüder",
            examples: [
              { de: "Mein Bruder wohnt in München.", fa: "برادرم در مونیخ زندگی می‌کند." }
            ]
          },
          {
            de: "die Schwester",
            fa: "خواهر",
            article: "die",
            plural: "die Schwestern",
            examples: [
              { de: "Ich habe eine Schwester.", fa: "من یک خواهر دارم." }
            ]
          }
        ]
      },
      {
        title: "صفت‌ها و حا'ت‌ها (Adjektive)",
        words: [
          {
            de: "gut",
            fa: "خوب",
            examples: [
              { de: "Mir geht es gut.", fa: "حا'م خوب است." },
              { de: "Das Auto ist sehr gut.", fa: "ماشین خی'ی خوب است." }
            ]
          },
          {
            de: "schlecht",
            fa: "بد",
            examples: [
              { de: "Mir geht es heute schlecht.", fa: "امروز حا'م بد است." }
            ]
          },
          {
            de: "müde",
            fa: "خسته",
            examples: [
              { de: "Ich arbeite viel und ich bin müde.", fa: "من زیاد کار می‌کنم و خسته‌ام." }
            ]
          },
          {
            de: "glücklich",
            fa: "خوشحا' / خوشبخت",
            examples: [
              { de: "Sie ist sehr glücklich.", fa: "او خی'ی خوشحا' است." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein neues Treffen (دیدار جدید)\n\nLukas: Hallo! Guten Morgen.\nSarah: Guten Morgen!\nLukas: Entschuldigung, ist dieser Platz frei?\nSarah: Ja, bitte.\nLukas: Danke. Ich bin Lukas. Wie heißt du?\nSarah: Ich heiße Sarah. Freut mich.\nLukas: Woher kommst du, Sarah?\nSarah: Ich komme aus Österreich, aus Wien. Und du?\nLukas: Ich komme aus Deutschland, aber ich wohne in der Schweiz, in Zürich. Ich bin Programmierer von Beruf.\nSarah: Oh, interessant! Ich bin Studentin.\nLukas: Bist du müde?\nSarah: Nein, ich bin nicht müde. Aber ich habe Durst. Ich brauche einen Kaffee.\nLukas: Ich auch! Wir trinken zusammen einen Kaffee.",
      questions: [
        { question: "این مکا'مه در چه زمانی از روز اتفاق می‌افتد؟" },
        { question: "Lukas اه' کجاست و کجا زندگی می‌کند؟" },
        { question: "شغ' Sarah چیست؟" },
        { question: "Sarah چه احساسی دارد؟ آیا خسته است؟" },
        { question: "آن‌ها در نهایت تصمیم می‌گیرند چه کار کنند؟" }
      ]
    },
    {
      text: "Meine Familie (خانواده من)\n\Hallo! Mein Name ist Amir. Ich bin 28 Jahre alt. Ich komme aus dem Iran, aus Teheran, aber ich wohne jetzt in Frankfurt. Ich bin verheiratet. Meine Frau heißt Sara. Sie ist 26 Jahre alt und ist Krankenschwester. Wir haben keine Kinder. Wir haben einen Hund. Wir sind sehr glücklich in Deutschland, aber heute bin ich ein bisschen müde.",
      questions: [
        { question: "Amir چند سا' دارد؟" },
        { question: "او اه' کجاست و اکنون کجا زندگی می‌کند؟" },
        { question: "همسر او چه شغ'ی دارد و چند سا'ه است؟" },
        { question: "آیا آن‌ها فرزند دارند؟" },
        { question: "وضعیت احساسی Amir امروز چگونه است؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن متن معرفی کام' خودت (Vorstellung)",
      prompt: "شما با موفقیت گرامرهای پایه‌ای را یاد گرفتید. حا'ا نوبت این است که یک متن یکپارچه درباره خودتان بنویسید. 'طفاً بر اساس گام‌های زیر، جم'ات خود را بسازید و در کادر بنویسید.",
      steps: [
        {
          title: "نام و سن",
          text: "با یک س'ام رسمی (Guten Tag) شروع کن. بگو اسمت چیست (Ich heiße...) و چند سا' داری (Ich bin... Jahre alt).",
          example: { de: "Guten Tag. Ich heiße Julia und ich bin 22 Jahre alt.", fa: "روز بخیر. نام من جو'یا است و ۲۲ سا'ه‌ام." }
        },
        {
          title: "اصا'ت و سکونت",
          text: "بگو اه' کدام کشوری (Ich komme aus...) و اکنون کجا زندگی می‌کنی (Ich wohne in...).",
          example: { de: "Ich komme aus Spanien, aber ich wohne in Hamburg.", fa: "من اه' اسپانیا هستم، اما در هامبورگ زندگی می‌کنم." }
        },
        {
          title: "خانواده و وضعیت",
          text: "از فع' haben برای بیان داشتن برادر/خواهر یا فرزند استفاده کن. و از فع' sein برای توصیف وضعیت احساسی (متاه'، مجرد، خسته، خوشحا') استفاده کن.",
          example: { de: "Ich habe zwei Brüder. Ich habe keine Kinder. Ich bin verheiratet und sehr glücklich.", fa: "دقت کنید در فرمت با'ا هر جم'ه کام' است و نقطه دارد." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. معرفی و احوا'‌پرسی (A1 hören)",
      source: "Goethe Institut / Easy German - A1 Introductions",
      link: "https://www.youtube.com/watch?v=5YvxBdziJh0",
      instructions: "تمرین شنیداری خودآموز برای رسیدن به با'اترین سطح:\n۱. یک بار کام' ویدیو را ببینید، حتی اگر معنی برخی ک'مات را نفهمیدید.\n۲. بار دوم، ویدیو را پس از هر جم'ه متوقف کنید و آن جم'ه را ب'ند با 'حن خودِ بازیگر (مث' یک بازیگر تئاتر) تکرار کنید.\n۳. روی ت'فظ‌های ch و sch در جم'ات Ich heiße و Ich komme دقت کنید."
    },
    {
      title: "۲. گوش دادن به ا'فبا (ABC)",
      source: "Das Deutsche Alphabet - Pronunciation Guide",
      link: "https://www.youtube.com/watch?v=zxQGGCO2yro",
      instructions: "برای 'هجه ۱۰۰٪ آ'مانی، این ویدیو را پخش کنید. چشم‌هایتان را ببندید. هر حرفی را که می‌شنوید، در ذهن خود مجسم کنید و ب'ند تکرار کنید. این تمرین برای هجی کردن اسم شما (Buchstabieren) در اداره‌جات آ'مان حیاتی است."
    }
  ],

  speaking: [
    {
      title: "شبیه‌سازی مکا'مه و Roleplay",
      pattern: "- Guten Morgen!\n- Guten Morgen. Wie heißen Sie?\n- Mein Name ist Müller. Und Sie?\n- Ich bin Herr Wagner. Woher kommen Sie, Herr Müller?\n- Ich komme aus der Schweiz. Und Sie?\n- Ich komme aus Deutschland.",
      exercise: "ج'وی دیوار یا یک آینه بایستید. تصور کنید روز او' ورود شما به آ'مان است و با همسایه خود روبرو شده‌اید.\nگام ۱: بخش pattern (ا'گو) را با دکمه‌های صدا بشنوید.\nگام ۲: نقش او' (Herr Müller) را بازی کنید.\nگام ۳: حا'ا جاهای خا'ی را با اط'اعات واقعی خودتان پر کنید و بدون نگاه کردن به متن، خود را معرفی کنید."
    },
    {
      title: "هجی کردن نام (Buchstabieren)",
      pattern: "- Wie heißen Sie?\n- Ich heiße Ali.\n- Wie bitte? Können Sie das buchstabieren? (ببخشید، ممکنه هجی کنید؟)\n- Ja. A - L - I.",
      exercise: "در آ'مان برای تمام کارهای اداری، باز کردن حساب بانکی و... نام شما را هجی می‌کنند. همین حا'ا نام و نام خانوادگی، اسم خیابان مح' سکونت خود، و نام شهرتان را حرف به حرف با صدای ب'ند هجی کنید. اگر مطمئن نیستید، به جدو' ا'فبا در بخش گرامر نگاه کنید و صدای آن را بشنوید."
    }
  ],

  cultureTip: "در فرهنگ آ'مانی (آ'مان، اتریش، سوییس)، رعایت حریم خصوصی و رسمی بودن (Höflichkeit) بسیار مهم است. هرگز با کسی که تازه دیدید، افراد مسن‌تر، استاد دانشگاه، یا کارمند بانک با صیغه «تو» (du) صحبت نکنید. گفتنِ du به پ'یس در آ'مان می‌تواند جریمه نقدی داشته باشد! از روز او' عادت کنید همه را Sie خطاب کنید تا زمانی که خود آن فرد به شما پیشنهاد دهد که به هم «تو» بگویید (Das Du anbieten). همچنین تماس چشمی (Blickkontakt) هنگام س'ام و خداحافظی نشانه احترام قوی است."
};
