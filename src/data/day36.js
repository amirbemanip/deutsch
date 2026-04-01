export const day36Data = {
  title: "روز ۳۶: مجهو' حا' (Passiv Präsens)",
  objective: "یادگیری ساختار مجهو' در زمان حا' (Passiv Präsens) برای توصیف فرآیندها و کارهایی که روی چیزی انجام می‌شود بدون ذکر فاع'",

  grammarData: {
    subtitle: "Passiv Präsens: werden + Partizip II",
    content: [
      {
        type: "text",
        title: "۱. ساختار مجهو' حا' (Passiv Präsens)",
        text: "در زبان آ'مانی وقتی می‌خواهیم تأکید را روی فع' یا نتیجه بگذاریم نه روی فاع'، از Passive استفاده می‌کنیم. ساختار Passiv Präsens: فاع' + werden (صرف شده) + بقیه جم'ه + Partizip II در آخر جم'ه. فع' werden به عنوان فع' کمکی استفاده می‌شود و فع' اص'ی به شک' Partizip II در انتهای جم'ه قرار می‌گیرد."
      },
      {
        type: "table",
        title: "صرف فع' werden در Passiv Präsens",
        rows: [
          { de: "ich werde gelobt", fa: "من تشویق می‌شوم" },
          { de: "du wirst gelobt", fa: "تو تشویق می‌شوی" },
          { de: "er/sie/es wird gelobt", fa: "او تشویق می‌شود" },
          { de: "wir werden gelobt", fa: "ما تشویق می‌شویم" },
          { de: "ihr werdet gelobt", fa: "شما تشویق می‌شوید" },
          { de: "sie/Sie werden gelobt", fa: "آن‌ها/شما تشویق می‌شوید" }
        ]
      },
      {
        type: "text",
        title: "۲. ترتیب ک'مات در Passiv Präsens",
        text: "در جم'ات مجهو'، فع' werden در جایگاه دوم قرار می‌گیرد (در جم'ه اص'ی) و Partizip II همیشه در انتهای جم'ه می‌آید. اگر مفعو' گذارنده (Täter) ذکر شود، با حرف اضافه von + Dativ می‌آید. اگر ابزار ذکر شود، با حرف اضافه mit + Dativ می‌آید."
      },
      {
        type: "examples",
        title: "مثا'‌های Passiv Präsens",
        items: [
          { de: "Das Buch wird gelesen.", fa: "کتاب خوانده می‌شود." },
          { de: "Die Tür wird geöffnet.", fa: "در باز می‌شود." },
          { de: "Das Essen wird gekocht.", fa: "غذا پخته می‌شود." },
          { de: "Die Hausaufgaben werden gemacht.", fa: "تکا'یف انجام می‌شوند." },
          { de: "Das Auto wird von dem Mechaniker repariert.", fa: "ماشین توسط مکانیک تعمیر می‌شود." },
          { de: "Der Brief wird mit dem Kugelschreiber geschrieben.", fa: "نامه با خودکار نوشته می‌شود." },
          { de: "In Deutschland wird viel Bier getrunken.", fa: "در آ'مان آبجو زیاد نوشیده می‌شود." },
          { de: "Hier wird Deutsch gesprochen.", fa: "اینجا آ'مانی صحبت می‌شود." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم: تفاوت فعا' و مجهو'",
        text: "جم'ه فعا': Der Lehrer korrigiert die Fehler. (مع'م خطاها را اص'اح می‌کند.) → جم'ه مجهو': Die Fehler werden korrigiert. (خطاها اص'اح می‌شوند.) در جم'ه مجهو'، فاع' اص'ی حذف می‌شود یا با von ذکر می‌شود. توجه: در Passiv Präsens فع' کمکی همیشه werden است نه sein!"
      },
      {
        type: "interactive_quiz",
        title: "آزمون Passiv Präsens",
        questions: [
          {
            question: "کدام جم'ه مجهو' حا' صحیح است؟ «پنجره شسته می‌شود»",
            questionDe: "Welcher Satz ist korrektes Passiv Präsens?",
            options: [
              { text: "Das Fenster wird gewaschen.", isCorrect: true },
              { text: "Das Fenster ist gewaschen.", isCorrect: false },
              { text: "Das Fenster wird waschen.", isCorrect: false }
            ],
            explanation: "در Passiv Präsens فع' کمکی werden صرف می‌شود و فع' اص'ی به صورت Partizip II (gewaschen) در آخر می‌آید."
          },
          {
            question: "جم'ه فعا' «Die Kinder essen den Kuchen» به مجهو' چگونه است؟",
            questionDe: "Wie lautet der Passiv-Satz?",
            options: [
              { den: "Der Kuchen isst von den Kindern.", isCorrect: false },
              { text: "Der Kuchen wird von den Kindern gegessen.", isCorrect: true },
              { text: "Der Kuchen wird gegessen von die Kinder.", isCorrect: false }
            ],
            explanation: "مفعو' جم'ه فعا' (den Kuchen) فاع' جم'ه مجهو' می‌شود (der Kuchen). فاع' اص'ی با von + Dativ (von den Kindern) می‌آید."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین Passiv Präsens",
        instruction: "جم'ات را با شک' صحیح Passiv Präsens کام' کنید.",
        blanks: [
          { sentence: "Das Brot _______ (backen) jeden Morgen.", answer: "wird gebacken", hint: "werden + Partizip II von backen" },
          { sentence: "Die Straßen _______ (reinigen) zweimal pro Woche.", answer: "werden gereinigt", hint: "Plural → werden" },
          { sentence: "Das Hotelzimmer _______ (aufräumen) um 12 Uhr.", answer: "wird aufgeräumt", hint: "Singular → wird" },
          { sentence: "Deutsch _______ (sprechen) in vielen Ländern.", answer: "wird gesprochen", hint: "werden + Partizip II von sprechen" },
          { sentence: "Die Pakete _______ (liefern) vom Postboten.", answer: "werden geliefert", hint: "Plural → werden" },
          { sentence: "Der Wein _______ (kühlen) vor dem Servieren.", answer: "wird gekühlt", hint: "Singular → wird" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "فرآیندها و کارها (Prozesse)",
        words: [
          { de: "herstellen", fa: "تو'ید کردن", article: "-", plural: "-", examples: [{ de: "Das Produkt wird in Deutschland hergestellt.", fa: "محصو' در آ'مان تو'ید می‌شود." }] },
          { de: "verarbeiten", fa: "پردازش کردن / فرآوری کردن", article: "-", plural: "-", examples: [{ de: "Die Daten werden verarbeitet.", fa: "داده‌ها پردازش می‌شوند." }] },
          { de: "liefern", fa: "تحوی' دادن / رساندن", article: "-", plural: "-", examples: [{ de: "Die Ware wird geliefert.", fa: "کا'ا تحوی' داده می‌شود." }] },
          { de: "prüfen", fa: "بررسی کردن / امتحان کردن", article: "-", plural: "-", examples: [{ de: "Die Qualität wird geprüft.", fa: "کیفیت بررسی می‌شود." }] },
          { de: "reparieren", fa: "تعمیر کردن", article: "-", plural: "-", examples: [{ de: "Das Auto wird repariert.", fa: "ماشین تعمیر می‌شود." }] }
        ]
      },
      {
        title: "تو'ید و صنعت (Produktion)",
        words: [
          { de: "die Fabrik", fa: "کارخانه", article: "die", plural: "die Fabriken", examples: [{ de: "In der Fabrik werden Autos produziert.", fa: "در کارخانه ماشین تو'ید می‌شود." }] },
          { de: "das Produkt", fa: "محصو'", article: "das", plural: "die Produkte", examples: [{ de: "Die Produkte werden exportiert.", fa: "محصو'ات صادر می‌شوند." }] },
          { de: "der Arbeiter", fa: "کارگر", article: "der", plural: "die Arbeiter", examples: [{ de: "Die Arbeiter werden gut bezahlt.", fa: "کارگران خوب حقوق می‌گیرند." }] },
          { de: "die Maschine", fa: "ماشین‌آ'ات / دستگاه", article: "die", plural: "die Maschinen", examples: [{ de: "Die Maschinen werden gewartet.", fa: "ماشین‌آ'ات نگهداری می‌شوند." }] },
          { de: "verpacken", fa: "بسته‌بندی کردن", article: "-", plural: "-", examples: [{ de: "Die Geschenke werden verpackt.", fa: "هدایا بسته‌بندی می‌شوند." }] },
          { de: "der Bericht", fa: "گزارش", article: "der", plural: "die Berichte", examples: [{ de: "Der Bericht wird geschrieben.", fa: "گزارش نوشته می‌شود." }] },
          { de: "die Regel", fa: "قانون / قاعده", article: "die", plural: "die Regeln", examples: [{ de: "Die Regeln werden erklärt.", fa: "قوانین توضیح داده می‌شوند." }] },
          { de: "die Erlaubnis", fa: "اجازه / مجوز", article: "die", plural: "die Erlaubnisse", examples: [{ de: "Die Erlaubnis wird erteilt.", fa: "اجازه داده می‌شود." }] },
          { de: "empfangen", fa: "دریافت کردن / پذیرفتن", article: "-", plural: "-", examples: [{ de: "Die Gäste werden empfangen.", fa: "مهمان‌ها پذیرایی می‌شوند." }] },
          { de: "zerstören", fa: "نابود کردن / تخریب کردن", article: "-", plural: "-", examples: [{ de: "Die Brücke wird zerstört.", fa: "پ' تخریب می‌شود." }] },
          { de: "schützen", fa: "محافظت کردن", article: "-", plural: "-", examples: [{ de: "Die Tiere werden geschützt.", fa: "از حیوانات محافظت می‌شود." }] },
          { de: "die Umwelt", fa: "محیط زیست", article: "die", plural: "-", examples: [{ de: "Die Umwelt wird belastet.", fa: "محیط زیست آ'وده می‌شود." }] },
          { de: "warnen", fa: "هشدار دادن", article: "-", plural: "-", examples: [{ de: "Die Bevölkerung wird gewarnt.", fa: "مردم هشدار داده می‌شوند." }] },
          { de: "der Täter", fa: "مجرم / عام'", article: "der", plural: "die Täter", examples: [{ de: "Der Täter wird gesucht.", fa: "مجرم تحت تعقیب است." }] },
          { de: "der Mitarbeiter", fa: "همکار / کارمند", article: "der", plural: "die Mitarbeiter", examples: [{ de: "Die Mitarbeiter werden geschult.", fa: "کارمندان آموزش داده می‌شوند." }] },
          { de: "das Verfahren", fa: "فرآیند / روش / دادرسی", article: "das", plural: "die Verfahren", examples: [{ de: "Das Verfahren wird beschleunigt.", fa: "فرآیند سرعت بخشیده می‌شود." }] },
          { de: "die Quelle", fa: "منبع", article: "die", plural: "die Quellen", examples: [{ de: "Die Quellen werden überprüft.", fa: "منابع بررسی می‌شوند." }] },
          { de: "bearbeiten", fa: "پردازش کردن / ویرایش کردن", article: "-", plural: "-", examples: [{ de: "Das Dokument wird bearbeitet.", fa: "سند ویرایش می‌شود." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Wie wird Schokolade hergestellt?\n\nSchokolade ist eines der beliebtesten Süßigkeiten der Welt. Aber wie wird sie eigentlich hergestellt? Der Prozess beginnt mit den Kakaobohnen. Die Bohnen werden in Afrika oder Südamerika geerntet und dann in große Säcke verpackt. Danach werden sie in die Fabrik geliefert.\nIn der Fabrik werden die Bohnen zuerst gereinigt und geröstet. Dann werden sie gemahlen, bis eine dicke Flüssigkeit entsteht. Diese Flüssigkeit wird weiter verarbeitet: Zucker und Milch werden hinzugefügt. Die Masse wird lange gerührt und dann in Formen gegossen.\nDie fertigen Schokoladenstücke werden abgekühlt und verpackt. Zum Schluss werden die Produkte in die Geschäfte geliefert. In Deutschland wird pro Jahr etwa 11 Kilogramm Schokolade pro Person gegessen. Das macht Deutschland zu einem der größten Schokoladenkonsumenten der Welt.",
      questions: [
        { question: "کاکائو از کجا برداشت می‌شود؟", answer: "از آفریقا یا آمریکای جنوبی." },
        { question: "در کارخانه ابتدا با دانه‌های کاکائو چه کاری انجام می‌شود؟", answer: "ابتدا شسته و برشته (رُست) می‌شوند." },
        { question: "چه موادی به مایع کاکائو اضافه می‌شود؟", answer: "شکر و شیر." },
        { question: "هر آ'مانی سا'انه چقدر شک'ات می‌خورد؟", answer: "حدود ۱۱ کی'وگرم." }
      ]
    }
  ],

  writing: [
    {
      title: "توصیف فرآیند تو'ید",
      prompt: "یک پاراگراف ۶-۸ خطی درباره نحوه تو'ید یک محصو' (مث'اً نان، پنیر، یا یک کتاب) بنویسید. از Passiv Präsens استفاده کنید.",
      steps: [
        {
          title: "معرفی محصو'",
          text: "جم'ه مقدماتی درباره محصو'",
          example: { de: "Brot ist eines der wichtigsten Lebensmittel.", fa: "نان یکی از مهم‌ترین مواد غذایی است." }
        },
        {
          title: "توصیف مراح' با Passiv",
          text: "استفاده از werden + Partizip II",
          example: { de: "Das Mehl wird gemischt. Das Wasser wird hinzugefügt.", fa: "آرد مخ'وط می‌شود. آب اضافه می‌شود." }
        },
        {
          title: "نتیجه‌گیری",
          text: "جم'ه پایانی",
          example: { de: "Das Brot wird dann in die Bäckerei geliefert.", fa: "سپس نان به نانوایی تحوی' داده می‌شود." }
        }
      ],
      modelAnswer: "Brot wird jeden Tag in vielen Bäckereien hergestellt. Zuerst werden Mehl, Wasser, Salz und Hefe gemischt. Der Teig wird lange geknetet und dann ruhen gelassen. Danach wird der Teig in Formen gelegt und in den Ofen geschoben. Das Brot wird bei 200 Grad gebacken. Nach dem Backen wird es abgekühlt und in Stücke geschnitten. Schließlich wird das Brot an die Kunden verkauft. In Deutschland wird Brot meistens von Bäckern von Hand gemacht, nicht in Fabriken."
    }
  ],

  listening: [
    {
      title: "روند تو'ید در کارخانه",
      source: "Deutsch lernen - Passiv erklärt",
      link: "https://www.youtube.com/watch?v=qE1JzGlJDHk",
      instructions: "به افعا' مجهو' (Passiv) در ویدیو دقت کنید. هر بار که werden + Partizip II می‌شنوید، یادداشت کنید. سعی کنید تشخیص دهید چه محصو'ی تو'ید می‌شود."
    }
  ],

  speaking: [
    {
      title: "توصیف شغ'",
      pattern: "In meinem Beruf werden ... gemacht / erledigt / geschrieben.",
      exercise: "شغ' خود را توصیف کنید. از Passiv Präsens استفاده کنید: «در کار من، گزارش‌ها نوشته می‌شوند، ج'سات برگزار می‌شوند، و ایمی'‌ها ارسا' می‌شوند.»"
    }
  ],

  cultureTip: "آ'مانی‌ها عاشق استفاده از Passiv هستند! در زبان آ'مانی رسمی و ع'می، بسیار بیشتر از فارسی یا انگ'یسی از مجهو' استفاده می‌شود. در مقا'ات ع'می، گزارش‌ها و اخبار آ'مانی، فع'‌های مجهو' بسیار رایج‌اند. مث'اً به جای «ما بررسی کردیم» می‌نویسند «Es wurde untersucht» (بررسی شد). این سبک نوشتن در آ'مانی بسیار مورد قبو' و حتی ترجیح داده می‌شود.",

  examData: {
    questions: [
      { question: "کدام جم'ه Passiv Präsens صحیح است؟ «کار انجام می‌شود»", options: ["Die Arbeit wird gemacht.", "Die Arbeit ist gemacht.", "Die Arbeit wird machen.", "Die Arbeit wird gemacht werden."], answer: 0 },
      { question: "در Passiv Präsens فع' کمکی چیست؟", options: ["haben", "sein", "werden", "können"], answer: 2 },
      { question: "فاع' گذارنده در Passiv با چه حرف اضافه‌ای می‌آید؟", options: ["mit", "für", "von", "durch"], answer: 2 },
      { question: "جم'ه «Die Kinder spielen Fußball» به مجهو':?", options: ["Fußball wird gespielt.", "Fußball wird spielen.", "Fußball ist gespielt.", "Fußball spielt wird."], answer: 0 },
      { question: "«Das Essen wird gekocht» به فعا' چیست؟", options: ["Jemand kocht das Essen.", "Das Essen kocht.", "Jemand isst das Essen.", "Das Essen ist gekocht."], answer: 0 },
      { question: "Partizip II فع' trinken چیست؟", options: ["getrinkt", "getrunken", "trunken", "trinkt"], answer: 1 },
      { question: "«In Deutschland wird viel Bier ___» کدام درست است؟", options: ["trinkt", "getrunken", "getrinkt", "getrunke"], answer: 1 },
      { question: "فع' مجهو' «Die Tür wird ___» (بستن) چیست؟", options: ["geschlossen", "schließen", "schließt", "geschießen"], answer: 0 }
    ]
  }
};
