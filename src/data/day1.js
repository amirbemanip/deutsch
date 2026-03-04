export const day1Data = {
  title: "روز ۱: پایه‌های زبان آلمانی - الفبا، معرفی خود، و افعال اصلی (sein/haben)",
  objective: "در پایان این درس جامع، شما قادر خواهید بود خود و دیگران را به زبان آلمانی معرفی کنید، احوال‌پرسی کنید، ساختار اولین جملات معنادار خود را بسازید، و تلفظ‌های پایه آلمانی را به درستی ادا کنید. این درس نیاز شما به هرگونه معلم یا کلاس سطح مبتدی را برطرف می‌کند.",

  grammarData: {
    subtitle: "آموزش گام‌به‌گام گرامر همراه با کوئیزهای تعاملی",
    content: [
      {
        type: "text",
        title: "خوش‌آمدید به زبان آلمانی! (Willkommen)",
        text: "زبان آلمانی بسیار قانون‌مند است. اگر از روز اول پایه‌های گرامری و تلفظ را درست یاد بگیرید، مسیر پیش رو بسیار هموار خواهد شد.\nدر این روز اول، نیازی به حفظ کردن کلمات پیچیده نداریم. هدف ما شکستن سد مکالمه و آشنایی با فرمت جملات است."
      },
      {
        type: "table",
        title: "۱. الفبای آلمانی و قوانین تلفظ پایه‌ای",
        rows: [
          { de: "A a", fa: "مانند «آ» یا «اَ» کوتاه: der Apfel (سیب)" },
          { de: "E e", fa: "مانند «اِ» کشیده: der Elefant (فیل)" },
          { de: "I i", fa: "مانند «ای» کوتاه: immer (همیشه)" },
          { de: "O o", fa: "مانند «اُ» یا «او»: oder (یا)" },
          { de: "U u", fa: "مانند «او»: und (و)" },
          { de: "V v", fa: "معمولاً صدای «ف» می‌دهد (گاهی «و»): der Vater (پدر)" },
          { de: "W w", fa: "مانند «و» (دندان روی لب پایین): das Wasser (آب)" },
          { de: "J j", fa: "مانند «ی»: ja (بله)" },
          { de: "Z z", fa: "مانند «تس» (ت+س با هم تلفظ می‌شوند): die Zeit (زمان)" },
          { de: "S s", fa: "در ابتدای کلمه صدای «ز» و در آخر کلمه صدای «س» می‌دهد: die Sonne (خورشید)" },
          { de: "Ä ä / Ö ö / Ü ü / ß", fa: "آوملاوت‌ها (Umlaut): Ä (اِ باز)، Ö (لب گرد صدای اِ)، Ü (لب گرد صدای ای). ß (اس‌تست) صدای «س» مشدد می‌دهد: groß (بزرگ)" }
        ]
      },
      {
        type: "alert",
        title: "نکته طلایی تلفظ در آلمانی",
        text: "در زبان آلمانی تقریباً هر کلمه‌ای همان‌طور که نوشته می‌شود، خوانده می‌شود! به استثنای چند ترکیب حرفی مهم که در جدول زیر آمده است."
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
          { de: "ch", fa: "اگر قبل از آن (a, o, u) بیاید صدای «خ» می‌دهد (مثل machen). اگر قبل از آن (e, i, ä, ö, ü) بیاید صدای «ش» خیلی نرم (مثل باد) می‌دهد (مثل ich)." },
          { de: "sp / st", fa: "اگر در *ابتدای* یک کلمه یا سیلاب بیایند، صدای «شپ» و «شت» می‌دهند: spielen (بازی کردن) / stehen (ایستادن)" },
          { de: "ph", fa: "صدای «ف» می‌دهد: Physik (فیزیک)" },
          { de: "tion", fa: "در انتهای کلمات صدای «تسیون» می‌دهد: Information (اطلاعات)" },
          { de: "H h", fa: "اگر اول کلمه یا قبل از حروف صدادار بیاید، خوانده می‌شود. اما وسط کلمه باعث کشیده شدن حرف صدادار قبلش می‌شود." },
          { de: "S s", fa: "اگر بعد از آن حرف صدادار بیاید، صدای «ز» می‌دهد." },
          { de: "R r", fa: "اگر قبل از آن حرف صدادار بیاید (در آخر کلمه)، تلفظ آن نرم‌تر و شبیه «آ» کوتاه می‌شود: der Lehrer (معلم)." }
        ]
      },
      {
        type: "text",
        title: "۲. ضمایر شخصی فاعلی (Personalpronomen)",
        text: "برای جمله‌سازی، اولین چیزی که باید یاد بگیریم این است که چطور بگوییم «من، تو، او و...».\nدر زبان آلمانی بر خلاف فارسی، برای «او» سه کلمه مجزا (برای مرد، زن و خنثی) وجود دارد. همچنین آلمانی‌ها روی تفاوت بین «تو» (دوستانه) و «شما» (رسمی) بسیار حساس هستند."
      },
      {
        type: "table",
        title: "ضمایر فاعلی",
        rows: [
          { de: "ich", fa: "من (اول شخص مفرد)" },
          { de: "du", fa: "تو (دوم شخص مفرد دوستانه - برای خانواده، دوستان و کودکان)" },
          { de: "er", fa: "او (مذکر - برای مردان و اسامی با آرتیکل der)" },
          { de: "sie", fa: "او (مونث - برای زنان و اسامی با آرتیکل die)" },
          { de: "es", fa: "او / آن (خنثی - برای اسامی با آرتیکل das مانند بچه، نوزاد)" },
          { de: "wir", fa: "ما (اول شخص جمع)" },
          { de: "ihr", fa: "شماها (دوم شخص جمع دوستانه - وقتی با جمعی از دوستان حرف می‌زنید)" },
          { de: "sie", fa: "آن‌ها (سوم شخص جمع)" },
          { de: "Sie", fa: "شما (رسمی - برای غریبه‌ها و محیط کار. همیشه با S بزرگ نوشته می‌شود!)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ضمایر فاعلی",
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
            explanation: "بسیار عالی! برای مدیران، افراد غریبه و در محیط‌های رسمی همیشه از Sie (با S بزرگ) استفاده می‌کنیم."
          },
          {
            question: "برای اشاره به گروهی از دوستانتان (علی، سارا و مریم) از کدام ضمیر استفاده می‌کنید؟",
            questionDe: "Welches Pronomen benutzen Sie für eine Gruppe von Freunden?",
            options: [
              { text: "Sie", isCorrect: false },
              { text: "ihr", isCorrect: true },
              { text: "wir", isCorrect: false }
            ],
            explanation: "درست است! کلمه ihr به معنای «شماها» (جمع دوستانه) است."
          }
        ]
      },
      {
        type: "text",
        title: "۳. طلایی‌ترین افعال آلمانی: sein (بودن) و haben (داشتن)",
        text: "تقریباً نیمی از مکالمات روزمره شما با همین دو فعل ساخته می‌شود. در زبان آلمانی، فعل‌ها بر اساس فاعل (من، تو، او...) تغییر شکل می‌دهند. به این کار «صرف فعل» می‌گویند.\nاین دو فعل کاملاً بی‌قاعده هستند و شکل صرف آن‌ها را باید از حفظ باشید."
      },
      {
        type: "table",
        title: "صرف فعل sein (بودن)",
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
        title: "کاربرد فعل sein",
        items: [
          { de: "Ich bin 25 Jahre alt.", fa: "من ۲۵ ساله هستم. (⚠️ مهم: در آلمانی برای بیان سن از فعل «بودن» استفاده می‌شود، نه داشتن!)" },
          { de: "Sie ist Lehrerin.", fa: "او (مونث) معلم است. (در آلمانی برای شغل از آرتیکل a/an استفاده نمی‌شود، فقط اسم شغل را می‌گوییم.)" },
          { de: "Wir sind im Iran.", fa: "ما در ایران هستیم." }
        ]
      },
      {
        type: "alert",
        title: "هشدار گرامری!",
        text: "توجه کنید که در جدول بالا، ضمیرهای wir (ما)، sie (آن‌ها) و Sie (شما رسمی) همیشه فعل یکسانی دارند (sind). این یک قانون طلایی در طول یادگیری شماست که کار را آسان می‌کند!"
      },
      {
        type: "table",
        title: "صرف فعل haben (داشتن)",
        rows: [
          { de: "ich habe", fa: "من دارم (Ich habe Zeit. من وقت دارم.)" },
          { de: "du hast", fa: "تو داری (Du hast ein Auto. تو ماشین داری.)" },
          { de: "er / sie / es hat", fa: "او / آن دارد (Er hat zwei Kinder. او دو بچه دارد.)" },
          { de: "wir haben", fa: "ما داریم (Wir haben Geld. ما پول داریم.)" },
          { de: "ihr habt", fa: "شماها دارید (Ihr habt Glück. شماها شانس دارید.)" },
          { de: "sie / Sie haben", fa: "آن‌ها / شما (رسمی) دارند (Sie haben ein Haus. شما یک خانه دارید.)" }
        ]
      },
      {
        type: "examples",
        title: "کاربرد فعل haben",
        items: [
          { de: "Ich habe einen Bruder.", fa: "من یک برادر دارم." },
          { de: "Sie haben keine Zeit.", fa: "شما (رسمی) وقت ندارید." },
          { de: "Er hat Hunger.", fa: "او گرسنه است. (⚠️ مهم: عیناً میشه «او گرسنگی دارد». در آلمانی گرسنگی و تشنگی را با فعل داشتن بیان می‌کنند، نه بودن.)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: افعال sein و haben",
        questions: [
          {
            question: "کدام جمله از نظر گرامری برای بیان سن درست است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich habe 30 Jahre alt.", isCorrect: false },
              { text: "Ich bin 30 Jahre alt.", isCorrect: true },
              { text: "Ich bin 30 Jahre.", isCorrect: false }
            ],
            explanation: "آفرین! برای بیان سن در آلمانی از فعل sein استفاده می‌کنیم: Ich bin ... Jahre alt."
          },
          {
            question: "برای گفتن «من گرسنه‌ام» به آلمانی چه می‌گوییم؟",
            questionDe: "Wie sagt man 'من گرسنه‌ام' auf Deutsch?",
            options: [
              { text: "Ich bin Hunger.", isCorrect: false },
              { text: "Ich habe hungrig.", isCorrect: false },
              { text: "Ich habe Hunger.", isCorrect: true }
            ],
            explanation: "عالیه! ما در آلمانی می‌گوییم «من گرسنگی دارم» (Ich habe Hunger)."
          }
        ]
      },
      {
        type: "text",
        title: "۴. ساختار پایه‌ی جمله (Satzbau)",
        text: "شما در حال یادگیری مهم‌ترین، حیاتی‌ترین و غیرقابل شکست‌ترین قانون کل زبان آلمانی هستید:\n\n**در جملات خبری، فعلِ اولویت‌دار همیشه، حتماً، و بدون هیچ استثنایی در جایگاه دوم (Position 2) قرار می‌گیرد!**\n\nفرمول جمله خبری ساده: فاعل (جایگاه ۱) + فعل صرف‌شده (جایگاه ۲) + بقیه جمله (جایگاه ۳)."
      },
      {
        type: "examples",
        title: "مثال ساختار جمله (Aussagesatz)",
        items: [
          { de: "[Ich] [bin] [müde].", fa: "من (جایگاه ۱) هستم (جایگاه ۲) خسته (بقیه جمله)." },
          { de: "[Er] [hat] [heute keine Zeit].", fa: "او (جایگاه ۱) دارد (جایگاه ۲) امروز هیچ وقتی (بقیه)." },
          { de: "[Heute] [bin] [ich müde].", fa: "امروز (جایگاه ۱) هستم (جایگاه ۲) من خسته. (دقت کنید! حتی اگر کلمه‌ی «امروز» را اول جمله بیاوریم، باز هم فعل باید در جایگاه دوم بماند و فاعل به جایگاه سوم پرتاب می‌شود!)" }
        ]
      },
      {
        type: "text",
        title: "سوالی کردن جملات",
        text: "ما دو نوع سوال در زبان آلمانی داریم:\n۱. **سوالات W-Fragen**: سوالاتی که با کلمات پرسشی (مثل کی، کجا، چطور) شروع می‌شوند. فرمول: W-Wort (جایگاه ۱) + فعل (جایگاه ۲) + فاعل (جایگاه ۳).\n۲. **سوالات بله/خیر (Ja/Nein Fragen)**: تنها زمانی که فعل به جایگاه اول می‌آید! جای فاعل و فعل عوض می‌شود. فرمول: فعل (جایگاه ۱) + فاعل (جایگاه ۲) + بقیه."
      },
      {
        type: "examples",
        title: "مثال‌های سوالی",
        items: [
          { de: "Wie heißt du?", fa: "اسمت چیه؟ (Wie = چطور (W-Wort در جای ۱)، heißt (فعل در جای ۲))." },
          { de: "Woher kommst du?", fa: "اهل کجایی؟ (Woher = از کجا (W-Wort در جای ۱)، kommst (فعل در جای ۲))." },
          { de: "Bist du müde?", fa: "آیا تو خسته‌ای؟ (بله/خیر - فعل bist در جای ۱ آمده است)." },
          { de: "Haben Sie Kinder?", fa: "آیا شما فرزند دارید؟ (بله/خیر - فعل Haben در جای ۱)." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون ساختار جمله",
        questions: [
          {
            question: "اگر بخواهیم کلمه‌ی «Heute» (امروز) را در ابتدای جمله بیاوریم، ساختار درست کدام است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Heute ich bin müde.", isCorrect: false },
              { text: "Heute bin ich müde.", isCorrect: true },
              { text: "Bin ich heute müde.", isCorrect: false }
            ],
            explanation: "بسیار عالی! قانون جایگاه دوم فعل رعایت شد. چون Heute اول نشست، فعل bin باید دوم باشد و ضمیر ich به جایگاه سوم رفت."
          },
          {
            question: "کدام سوال از نوع بله/خیر، درست ساخته شده است؟",
            questionDe: "Welche Ja/Nein-Frage ist richtig?",
            options: [
              { text: "Bist du Herr Müller?", isCorrect: true },
              { text: "Du bist Herr Müller?", isCorrect: false },
              { text: "Herr Müller bist du?", isCorrect: false }
            ],
            explanation: "آفرین! در سوالات بله/خیر، خودِ فعل باید همیشه در جایگاه اول قرار بگیرد."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "احوال‌پرسی و وداع (Begrüßung und Verabschiedung)",
        words: [
          {
            de: "Hallo",
            fa: "سلام (غیررسمی)",
            examples: [
              { de: "Hallo, wie geht es dir?", fa: "سلام، حالت چطوره؟" }
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
              { de: "Guten Tag, Frau Müller.", fa: "روز بخیر خانم مولر. (از ساعت ۱۰ تا ۱۸ می‌گویند)" }
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
        title: "اطلاعات شخصی (Persönliche Informationen)",
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
            fa: "نام داشتن (فعل)",
            examples: [
              { de: "Ich heiße Ali.", fa: "من علی نام دارم." },
              { de: "Wie heißt du?", fa: "نامت چیست؟" }
            ]
          },
          {
            de: "kommen (aus)",
            fa: "آمدن از (اهلیت داشتن)",
            examples: [
              { de: "Ich komme aus dem Iran.", fa: "من اهل ایران هستم." },
              { de: "Woher kommen Sie?", fa: "شما اهل کجا هستید؟" }
            ]
          },
          {
            de: "wohnen (in)",
            fa: "ساکن بودن در",
            examples: [
              { de: "Ich wohne in Berlin.", fa: "من در برلین زندگی می‌کنم." },
              { de: "Wo wohnst du?", fa: "تو کجا زندگی می‌کنی؟" }
            ]
          },
          {
            de: "das Alter",
            fa: "سن",
            article: "das",
            examples: [
              { de: "Ich bin 25 Jahre alt.", fa: "من ۲۵ ساله هستم." }
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
              { de: "Die Frau kommt aus Deutschland.", fa: "آن زن اهل آلمان است." },
              { de: "Guten Tag, Frau Müller.", fa: "روز بخیر، خانم مولر." }
            ]
          },
          {
            de: "das Kind",
            fa: "بچه، کودک",
            article: "das",
            plural: "die Kinder",
            examples: [
              { de: "Das Kind ist 5 Jahre alt.", fa: "کودک ۵ ساله است." },
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
        title: "صفت‌ها و حالت‌ها (Adjektive)",
        words: [
          {
            de: "gut",
            fa: "خوب",
            examples: [
              { de: "Mir geht es gut.", fa: "حالم خوب است." },
              { de: "Das Auto ist sehr gut.", fa: "ماشین خیلی خوب است." }
            ]
          },
          {
            de: "schlecht",
            fa: "بد",
            examples: [
              { de: "Mir geht es heute schlecht.", fa: "امروز حالم بد است." }
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
            fa: "خوشحال / خوشبخت",
            examples: [
              { de: "Sie ist sehr glücklich.", fa: "او خیلی خوشحال است." }
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
        { question: "این مکالمه در چه زمانی از روز اتفاق می‌افتد؟" },
        { question: "Lukas اهل کجاست و کجا زندگی می‌کند؟" },
        { question: "شغل Sarah چیست؟" },
        { question: "Sarah چه احساسی دارد؟ آیا خسته است؟" },
        { question: "آن‌ها در نهایت تصمیم می‌گیرند چه کار کنند؟" }
      ]
    },
    {
      text: "Meine Familie (خانواده من)\n\Hallo! Mein Name ist Amir. Ich bin 28 Jahre alt. Ich komme aus dem Iran, aus Teheran, aber ich wohne jetzt in Frankfurt. Ich bin verheiratet. Meine Frau heißt Sara. Sie ist 26 Jahre alt und ist Krankenschwester. Wir haben keine Kinder. Wir haben einen Hund. Wir sind sehr glücklich in Deutschland, aber heute bin ich ein bisschen müde.",
      questions: [
        { question: "Amir چند سال دارد؟" },
        { question: "او اهل کجاست و اکنون کجا زندگی می‌کند؟" },
        { question: "همسر او چه شغلی دارد و چند ساله است؟" },
        { question: "آیا آن‌ها فرزند دارند؟" },
        { question: "وضعیت احساسی Amir امروز چگونه است؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن متن معرفی کامل خودت (Vorstellung)",
      prompt: "شما با موفقیت گرامرهای پایه‌ای را یاد گرفتید. حالا نوبت این است که یک متن یکپارچه درباره خودتان بنویسید. لطفاً بر اساس گام‌های زیر، جملات خود را بسازید و در کادر بنویسید.",
      steps: [
        {
          title: "نام و سن",
          text: "با یک سلام رسمی (Guten Tag) شروع کن. بگو اسمت چیست (Ich heiße...) و چند سال داری (Ich bin... Jahre alt).",
          example: { de: "Guten Tag. Ich heiße Julia und ich bin 22 Jahre alt.", fa: "روز بخیر. نام من جولیا است و ۲۲ ساله‌ام." }
        },
        {
          title: "اصالت و سکونت",
          text: "بگو اهل کدام کشوری (Ich komme aus...) و اکنون کجا زندگی می‌کنی (Ich wohne in...).",
          example: { de: "Ich komme aus Spanien, aber ich wohne in Hamburg.", fa: "من اهل اسپانیا هستم، اما در هامبورگ زندگی می‌کنم." }
        },
        {
          title: "خانواده و وضعیت",
          text: "از فعل haben برای بیان داشتن برادر/خواهر یا فرزند استفاده کن. و از فعل sein برای توصیف وضعیت احساسی (متاهل، مجرد، خسته، خوشحال) استفاده کن.",
          example: { de: "Ich habe zwei Brüder. Ich habe keine Kinder. Ich bin verheiratet und sehr glücklich.", fa: "دقت کنید در فرمت بالا هر جمله کامل است و نقطه دارد." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. معرفی و احوال‌پرسی (A1 hören)",
      source: "Goethe Institut / Easy German - A1 Introductions",
      link: "https://www.youtube.com/watch?v=5YvxBdziJh0",
      instructions: "تمرین شنیداری خودآموز برای رسیدن به بالاترین سطح:\n۱. یک بار کامل ویدیو را ببینید، حتی اگر معنی برخی کلمات را نفهمیدید.\n۲. بار دوم، ویدیو را پس از هر جمله متوقف کنید و آن جمله را بلند با لحن خودِ بازیگر (مثل یک بازیگر تئاتر) تکرار کنید.\n۳. روی تلفظ‌های ch و sch در جملات Ich heiße و Ich komme دقت کنید."
    },
    {
      title: "۲. گوش دادن به الفبا (ABC)",
      source: "Das Deutsche Alphabet - Pronunciation Guide",
      link: "https://www.youtube.com/watch?v=zxQGGCO2yro",
      instructions: "برای لهجه ۱۰۰٪ آلمانی، این ویدیو را پخش کنید. چشم‌هایتان را ببندید. هر حرفی را که می‌شنوید، در ذهن خود مجسم کنید و بلند تکرار کنید. این تمرین برای هجی کردن اسم شما (Buchstabieren) در اداره‌جات آلمان حیاتی است."
    }
  ],

  speaking: [
    {
      title: "شبیه‌سازی مکالمه و Roleplay",
      pattern: "- Guten Morgen!\n- Guten Morgen. Wie heißen Sie?\n- Mein Name ist Müller. Und Sie?\n- Ich bin Herr Wagner. Woher kommen Sie, Herr Müller?\n- Ich komme aus der Schweiz. Und Sie?\n- Ich komme aus Deutschland.",
      exercise: "جلوی دیوار یا یک آینه بایستید. تصور کنید روز اول ورود شما به آلمان است و با همسایه خود روبرو شده‌اید.\nگام ۱: بخش pattern (الگو) را با دکمه‌های صدا بشنوید.\nگام ۲: نقش اول (Herr Müller) را بازی کنید.\nگام ۳: حالا جاهای خالی را با اطلاعات واقعی خودتان پر کنید و بدون نگاه کردن به متن، خود را معرفی کنید."
    },
    {
      title: "هجی کردن نام (Buchstabieren)",
      pattern: "- Wie heißen Sie?\n- Ich heiße Ali.\n- Wie bitte? Können Sie das buchstabieren? (ببخشید، ممکنه هجی کنید؟)\n- Ja. A - L - I.",
      exercise: "در آلمان برای تمام کارهای اداری، باز کردن حساب بانکی و... نام شما را هجی می‌کنند. همین حالا نام و نام خانوادگی، اسم خیابان محل سکونت خود، و نام شهرتان را حرف به حرف با صدای بلند هجی کنید. اگر مطمئن نیستید، به جدول الفبا در بخش گرامر نگاه کنید و صدای آن را بشنوید."
    }
  ],

  cultureTip: "در فرهنگ آلمانی (آلمان، اتریش، سوییس)، رعایت حریم خصوصی و رسمی بودن (Höflichkeit) بسیار مهم است. هرگز با کسی که تازه دیدید، افراد مسن‌تر، استاد دانشگاه، یا کارمند بانک با صیغه «تو» (du) صحبت نکنید. گفتنِ du به پلیس در آلمان می‌تواند جریمه نقدی داشته باشد! از روز اول عادت کنید همه را Sie خطاب کنید تا زمانی که خود آن فرد به شما پیشنهاد دهد که به هم «تو» بگویید (Das Du anbieten). همچنین تماس چشمی (Blickkontakt) هنگام سلام و خداحافظی نشانه احترام قوی است."
};
