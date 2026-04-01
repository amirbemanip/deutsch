export const day36Data = {
  title: "روز ۳۶: مجهول حال (Passiv Präsens)",
  objective: "یادگیری ساختار مجهول در زمان حال (Passiv Präsens) برای توصیف فرآیندها و کارهایی که روی چیزی انجام می‌شود بدون ذکر فاعل",
  level: "B1",

  grammarData: {
    subtitle: "Passiv Präsens: werden + Partizip II",
    content: [
      {
        type: "text",
        title: "۱. ساختار مجهول حال (Passiv Präsens)",
        text: "در زبان آلمانی وقتی می‌خواهیم تأکید را روی فعل یا نتیجه بگذاریم نه روی فاعل، از Passive استفاده می‌کنیم. ساختار Passiv Präsens: فاعل + werden (صرف شده) + بقیه جمله + Partizip II در آخر جمله. فعل werden به عنوان فعل کمکی استفاده می‌شود و فعل اصلی به شکل Partizip II در انتهای جمله قرار می‌گیرد."
      },
      {
        type: "table",
        title: "صرف فعل werden در Passiv Präsens",
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
        title: "۲. ترتیب کلمات در Passiv Präsens",
        text: "در جملات مجهول، فعل werden در جایگاه دوم قرار می‌گیرد (در جمله اصلی) و Partizip II همیشه در انتهای جمله می‌آید. اگر عامل گذارنده (Täter) ذکر شود، با حرف اضافه von + Dativ می‌آید. اگر ابزار ذکر شود، با حرف اضافه mit + Dativ می‌آید."
      },
      {
        type: "examples",
        title: "مثال‌های Passiv Präsens",
        items: [
          { de: "Das Buch wird gelesen.", fa: "کتاب خوانده می‌شود." },
          { de: "Die Tür wird geöffnet.", fa: "در باز می‌شود." },
          { de: "Das Essen wird gekocht.", fa: "غذا پخته می‌شود." },
          { de: "Die Hausaufgaben werden gemacht.", fa: "تکالیف انجام می‌شوند." },
          { de: "Das Auto wird von dem Mechaniker repariert.", fa: "ماشین توسط مکانیک تعمیر می‌شود." },
          { de: "Der Brief wird mit dem Kugelschreiber geschrieben.", fa: "نامه با خودکار نوشته می‌شود." },
          { de: "In Deutschland wird viel Bier getrunken.", fa: "در آلمان آبجو زیاد نوشیده می‌شود." },
          { de: "Hier wird Deutsch gesprochen.", fa: "اینجا آلمانی صحبت می‌شود." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم: تفاوت فاعل و مجهول",
        text: "جمله فاعلی: Der Lehrer korrigiert die Fehler. (معلم خطاها را اصلاح می‌کند.) → جمله مجهول: Die Fehler werden korrigiert. (خطاها اصلاح می‌شوند.) در جمله مجهول، فاعل اصلی حذف می‌شود یا با von ذکر می‌شود. توجه: در Passiv Präsens فعل کمکی همیشه werden است نه sein!"
      },
      {
        type: "interactive_quiz",
        title: "آزمون Passiv Präsens",
        questions: [
          {
            question: "کدام جمله مجهول حال صحیح است؟ «پنجره شسته می‌شود»",
            questionDe: "Welcher Satz ist korrektes Passiv Präsens?",
            options: [
              { text: "Das Fenster wird gewaschen.", isCorrect: true },
              { text: "Das Fenster ist gewaschen.", isCorrect: false },
              { text: "Das Fenster wird waschen.", isCorrect: false }
            ],
            explanation: "در Passiv Präsens فعل کمکی werden صرف می‌شود و فعل اصلی به صورت Partizip II (gewaschen) در آخر می‌آید."
          },
          {
            question: "جمله فاعلی «Die Kinder essen den Kuchen» به مجهول چگونه است؟",
            questionDe: "Wie lautet der Passiv-Satz?",
            options: [
              { text: "Der Kuchen isst von den Kindern.", isCorrect: false },
              { text: "Der Kuchen wird von den Kindern gegessen.", isCorrect: true },
              { text: "Der Kuchen wird gegessen von die Kinder.", isCorrect: false }
            ],
            explanation: "مفعول جمله فاعلی (den Kuchen) فاعل جمله مجهول می‌شود (der Kuchen). فاعل اصلی با von + Dativ (von den Kindern) می‌آید."
          },
          {
            question: "Passiv Präsens فاعل کمکی چیست؟",
            questionDe: "Welches Hilfsverb braucht man im Passiv Präsens?",
            options: [
              { text: "haben", isCorrect: false },
              { text: "sein", isCorrect: false },
              { text: "werden", isCorrect: true },
              { text: "können", isCorrect: false }
            ],
            explanation: "در Passiv Präsens همیشه از werden به عنوان فعل کمکی استفاده می‌شود."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین Passiv Präsens",
        instruction: "جملات را با شکل صحیح Passiv Präsens کامل کنید.",
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
          { de: "herstellen", fa: "تولید کردن", ipa: "[ˈheːɐ̯ˌʃtɛlən]", article: "-", plural: "-", conjugation: { ich: "stelle her", du: "stellst her", er: "stellt her", wir: "stellen her", ihr: "stellt her", sie: "stellen her" }, examples: [{ de: "Das Produkt wird in Deutschland hergestellt.", fa: "محصول در آلمان تولید می‌شود." }] },
          { de: "verarbeiten", fa: "پردازش کردن / فرآوری کردن", ipa: "[fɛɐ̯ˈʔaʁbaɪ̯tn̩]", article: "-", plural: "-", conjugation: { ich: "verarbeite", du: "verarbeitest", er: "verarbeitet", wir: "verarbeiten", ihr: "verarbeitet", sie: "verarbeiten" }, examples: [{ de: "Die Daten werden verarbeitet.", fa: "داده‌ها پردازش می‌شوند." }] },
          { de: "liefern", fa: "تحویل دادن / رساندن", ipa: "[ˈliːfɐn]", article: "-", plural: "-", conjugation: { ich: "liefere", du: "lieferst", er: "liefert", wir: "liefern", ihr: "liefert", sie: "liefern" }, examples: [{ de: "Die Ware wird geliefert.", fa: "کالا تحویل داده می‌شود." }] },
          { de: "prüfen", fa: "بررسی کردن / امتحان کردن", ipa: "[ˈpʁyːfn̩]", article: "-", plural: "-", conjugation: { ich: "prüfe", du: "prüfst", er: "prüft", wir: "prüfen", ihr: "prüft", sie: "prüfen" }, examples: [{ de: "Die Qualität wird geprüft.", fa: "کیفیت بررسی می‌شود." }] },
          { de: "reparieren", fa: "تعمیر کردن", ipa: "[ʁepaˈʁiːʁən]", article: "-", plural: "-", conjugation: { ich: "repariere", du: "reparierst", er: "repariert", wir: "reparieren", ihr: "repariert", sie: "reparieren" }, examples: [{ de: "Das Auto wird repariert.", fa: "ماشین تعمیر می‌شود." }] }
        ]
      },
      {
        title: "تولید و صنعت (Produktion)",
        words: [
          { de: "die Fabrik", fa: "کارخانه", ipa: "[faˈbʁɪk]", article: "die", plural: "die Fabriken", examples: [{ de: "In der Fabrik werden Autos produziert.", fa: "در کارخانه ماشین تولید می‌شود." }] },
          { de: "das Produkt", fa: "محصول", ipa: "[pʁoˈdʊkt]", article: "das", plural: "die Produkte", examples: [{ de: "Die Produkte werden exportiert.", fa: "محصولات صادر می‌شوند." }] },
          { de: "der Arbeiter", fa: "کارگر", ipa: "[ˈaʁbaɪ̯tɐ]", article: "der", plural: "die Arbeiter", examples: [{ de: "Die Arbeiter werden gut bezahlt.", fa: "کارگران خوب حقوق می‌گیرند." }] },
          { de: "die Maschine", fa: "ماشین‌آلات / دستگاه", ipa: "[maˈʃiːnə]", article: "die", plural: "die Maschinen", examples: [{ de: "Die Maschinen werden gewartet.", fa: "ماشین‌آلات نگهداری می‌شوند." }] },
          { de: "verpacken", fa: "بسته‌بندی کردن", ipa: "[fɛɐ̯ˈpakən]", article: "-", plural: "-", conjugation: { ich: "verpacke", du: "verpackst", er: "verpackt", wir: "verpacken", ihr: "verpackt", sie: "verpacken" }, examples: [{ de: "Die Geschenke werden verpackt.", fa: "هدایا بسته‌بندی می‌شوند." }] },
          { de: "der Bericht", fa: "گزارش", ipa: "[bəˈʁɪçt]", article: "der", plural: "die Berichte", examples: [{ de: "Der Bericht wird geschrieben.", fa: "گزارش نوشته می‌شود." }] },
          { de: "die Regel", fa: "قانون / قاعده", ipa: "[ˈʁeːɡl̩]", article: "die", plural: "die Regeln", examples: [{ de: "Die Regeln werden erklärt.", fa: "قوانین توضیح داده می‌شوند." }] },
          { de: "schützen", fa: "محافظت کردن", ipa: "[ˈʃʏtsn̩]", article: "-", plural: "-", conjugation: { ich: "schütze", du: "schützt", er: "schützt", wir: "schützen", ihr: "schützt", sie: "schützen" }, examples: [{ de: "Die Tiere werden geschützt.", fa: "از حیوانات محافظت می‌شود." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Wie wird Schokolade hergestellt?\n\nSchokolade ist eines der beliebtesten Süßigkeiten der Welt. Aber wie wird sie eigentlich hergestellt? Der Prozess beginnt mit den Kakaobohnen. Die Bohnen werden in Afrika oder Südamerika geerntet und dann in große Säcke verpackt. Danach werden sie in die Fabrik geliefert.\nIn der Fabrik werden die Bohnen zuerst gereinigt und geröstet. Dann werden sie gemahlen, bis eine dicke Flüssigkeit entsteht. Diese Flüssigkeit wird weiter verarbeitet: Zucker und Milch werden hinzugefügt. Die Masse wird lange gerührt und dann in Formen gegossen.\nDie fertigen Schokoladenstücke werden abgekühlt und verpackt. Zum Schluss werden die Produkte in die Geschäfte geliefert. In Deutschland wird pro Jahr etwa 11 Kilogramm Schokolade pro Person gegessen.",
      translation: "شکلات چگونه تولید می‌شود؟\n\nشکلات یکی از محبوب‌ترین شیرینی‌های جهان است. اما واقعاً چگونه تولید می‌شود؟ فرآیند با دانه‌های کاکائو شروع می‌شود. دانه‌ها در آفریقا یا آمریکای جنوبی برداشت می‌شوند و سپس در کیسه‌های بزرگ بسته‌بندی می‌شوند. بعد به کارخانه تحویل داده می‌شوند.\nدر کارخانه ابتدا دانه‌ها شسته و برشته می‌شوند. سپس آسیاب می‌شوند تا مایع غلیظی به دست آید. این مایع بیشتر پردازش می‌شود: شکر و شیر اضافه می‌شوند. ماده به دست آمده مدت زیادی هم زده می‌شود و سپس در قالب‌ها ریخته می‌شود.\nقطعات شکلات آماده سرد و بسته‌بندی می‌شوند. در نهایت محصولات به فروشگاه‌ها تحویل داده می‌شوند. در آلمان سالانه حدود ۱۱ کیلوگرم شکلات به ازای هر نفر خورده می‌شود.",
      questions: [
        { question: "کاکائو از کجا برداشت می‌شود؟", answer: "از آفریقا یا آمریکای جنوبی." },
        { question: "در کارخانه ابتدا با دانه‌ها چه کاری انجام می‌شود؟", answer: "ابتدا شسته و برشته (رُست) می‌شوند." },
        { question: "چه موادی به مایع کاکائو اضافه می‌شود؟", answer: "شکر و شیر." },
        { question: "هر آلمانی سالانه چقدر شکلات می‌خورد؟", answer: "حدود ۱۱ کیلوگرم." }
      ]
    }
  ],

  writing: [
    {
      title: "توصیف فرآیند تولید",
      prompt: "یک پاراگراف ۶-۸ خطی درباره نحوه تولید یک محصول (نان، پنیر، یا یک کتاب) بنویسید. از Passiv Präsens استفاده کنید.",
      steps: [
        { title: "معرفی محصول", text: "جمله مقدماتی درباره محصول", example: { de: "Brot ist eines der wichtigsten Lebensmittel.", fa: "نان یکی از مهم‌ترین مواد غذایی است." } },
        { title: "توصیف مراحل با Passiv", text: "استفاده از werden + Partizip II", example: { de: "Das Mehl wird gemischt. Das Wasser wird hinzugefügt.", fa: "آرد مخلوط می‌شود. آب اضافه می‌شود." } },
        { title: "نتیجه‌گیری", text: "جمله پایانی", example: { de: "Das Brot wird dann in die Bäckerei geliefert.", fa: "سپس نان به نانوایی تحویل داده می‌شود." } }
      ],
      modelAnswer: "Brot wird jeden Tag in vielen Bäckereien hergestellt. Zuerst werden Mehl, Wasser, Salz und Hefe gemischt. Der Teig wird lange geknetet und dann ruhen gelassen. Danach wird der Teig in Formen gelegt und in den Ofen geschoben. Das Brot wird bei 200 Grad gebacken. Nach dem Backen wird es abgekühlt und in Stücke geschnitten. Schließlich wird das Brot an die Kunden verkauft. In Deutschland wird Brot meistens von Bäckern von Hand gemacht."
    }
  ],

  listening: [
    {
      title: "گوش دادن: Passiv Präsens",
      instruction: "به جملات زیر گوش دهید و تکرار کنید.",
      sentences: [
        { de: "Das Buch wird gelesen.", fa: "کتاب خوانده می‌شود.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Das Buch wird gelesen" },
        { de: "Die Tür wird geöffnet.", fa: "در باز می‌شود.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Die Tür wird geöffnet" },
        { de: "Das Auto wird repariert.", fa: "ماشین تعمیر می‌شود.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Das Auto wird repariert" },
        { de: "In Deutschland wird viel Bier getrunken.", fa: "در آلمان آبجو زیاد نوشیده می‌شود.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=In Deutschland wird viel Bier getrunken" },
        { de: "Die Produkte werden verpackt.", fa: "محصولات بسته‌بندی می‌شوند.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Die Produkte werden verpackt" }
      ]
    }
  ],

  speaking: [
    {
      title: "توصیف شغل",
      pattern: "In meinem Beruf werden ... gemacht / erledigt / geschrieben.",
      exercise: "شغل خود را توصیف کنید. از Passiv Präsens استفاده کنید: «در کار من، گزارش‌ها نوشته می‌شوند، جلسات برگزار می‌شوند، و ایمیل‌ها ارسال می‌شوند.»"
    }
  ],

  cultureTip: "آلمانی‌ها عاشق استفاده از Passiv هستند! در زبان آلمانی رسمی و علمی، بسیار بیشتر از فارسی یا انگلیسی از مجهول استفاده می‌شود. در مقالات علمی، گزارش‌ها و اخبار آلمانی، افعال مجهول بسیار رایج‌اند. مثلاً به جای «ما بررسی کردیم» می‌نویسند «Es wurde untersucht» (بررسی شد). این سبک نوشتن در آلمانی بسیار مورد قبول و حتی ترجیح داده می‌شود.",

  examData: {
    questions: [
      { question: "کدام جمله Passiv Präsens صحیح است؟ «کار انجام می‌شود»", options: ["Die Arbeit wird gemacht.", "Die Arbeit ist gemacht.", "Die Arbeit wird machen.", "Die Arbeit wird gemacht werden."], answer: 0 },
      { question: "در Passiv Präsens فعل کمکی چیست؟", options: ["haben", "sein", "werden", "können"], answer: 2 },
      { question: "عامل گذارنده در Passiv با چه حرف اضافه‌ای می‌آید؟", options: ["mit", "für", "von", "durch"], answer: 2 },
      { question: "جمله «Die Kinder spielen Fu\u00dfball» به مجهول:؟", options: ["Fußball wird gespielt.", "Fußball wird spielen.", "Fußball ist gespielt.", "Fußball spielt wird."], answer: 0 },
      { question: "«Das Essen wird gekocht» به فاعلی چیست؟", options: ["Jemand kocht das Essen.", "Das Essen kocht.", "Jemand isst das Essen.", "Das Essen ist gekocht."], answer: 0 },
      { question: "Partizip II فعل trinken چیست؟", options: ["getrinkt", "getrunken", "trunken", "trinkt"], answer: 1 },
      { question: "«In Deutschland wird viel Bier ___» کدام درست است؟", options: ["trinkt", "getrunken", "getrinkt", "getrunke"], answer: 1 },
      { question: "فعل مجهول «Die Tür wird ___» (بستن) چیست؟", options: ["geschlossen", "schließen", "schließt", "geschießen"], answer: 0 }
    ]
  }
};
