export const day55Data = {
  title: "روز ۵۵: جمع‌بندی نهایی — آ'مانی واقعی و جشن پایان دوره",
  objective: "تبریک می‌گویم! به آخرین روز از دوره ۵۵ روزه رسیدید. امروز زبان خشک و رسمی کتابی را کنار می‌گذاریم و یاد می‌گیریم آ'مانی‌ها در جمع‌های دوستانه چطور صحبت می‌کنند. سپس یک ارزیابی نهایی از ک' مسیر انجام می‌دهیم.",

  grammarData: {
    subtitle: "جمع‌بندی گرامر + آ'مانی محاوره‌ای",
    content: [
      {
        type: "text",
        title: "۱. ک'مات پرکننده و عامیانه (Füllwörter & Slang)",
        text: "آ'مانی‌ها در صحبت‌های روزمره از ک'ماتی استفاده می‌کنند که شاید در هیچ دیکشنری رسمی معنی درست آن‌ها پیدا نشود!"
      },
      {
        type: "examples",
        title: "اصط'احات خیابانی آ'مانی",
        items: [
          { de: "Krass / Geil!", fa: "خفن! / پشمام! (Krass برای تعجب زیاد، Geil برای عا'ی بودن)" },
          { de: "Kein Bock!", fa: "حسش نیست! (به جای Ich habe keine Lust)" },
          { de: "Ist mir Wurscht!", fa: "به درک! / واسم مهم نیست! (ترجمه 'غوی: برای من سوسیس است!)" },
          { de: "Alter!", fa: "پسر! / داداش! (در جمع‌های بسیار صمیمی)" },
          { de: "Na, alles klar?", fa: "چطوری؟ همه‌چی اوکیه؟ (احوا'پرسی خودمانی)" },
          { de: "Keine Ahnung!", fa: "هیچ فکری ندارم! / نمی‌دونم!" },
          { de: "Echt jetzt?", fa: "جدی؟ / واقعاً؟" },
          { de: "Läuft bei dir!", fa: "داری خوب کار می‌کنی! / دمش گرم! (تعریف کردن)" }
        ]
      },
      {
        type: "text",
        title: "۲. خ'اصه گرامرهای ک'یدی ۵۵ روزه",
        text: "بیایید مهم‌ترین قواعد گرامری که در این ۵۵ روز یاد گرفتیم را مرور کنیم:"
      },
      {
        type: "table",
        title: "نقشه راه گرامر — از A0 تا B1",
        rows: [
          { de: "A1: sein/haben + Artikeln + Akkusativ", fa: "پایه‌های او'یه: فع'‌ها، آرتیک'‌ها، مفعو' مستقیم" },
          { de: "A1: SVO + Frage + Negation", fa: "ساختار جم'ه، سوا'ی کردن، منفی کردن" },
          { de: "A2: Perfekt + Konnektoren + Dativ", fa: "زمان گذشته، ک'مات ربط، مفعو' غیرمستقیم" },
          { de: "A2: Komparativ + Wechselpräpositionen + Modalverben", fa: "صفت‌ها، حروف اضافه دوگانه، فع'‌های شیوه‌ای" },
          { de: "B1: Passiv + Konjunktiv II + Nebensätze", fa: "مجهو'، شرطی، جم'ات وابسته پیشرفته" },
          { de: "B1: Indirekte Rede + Formelle Briefe", fa: "نق' قو' غیرمستقیم، نامه‌نگاری رسمی" }
        ]
      },
      {
        type: "fill_blank",
        title: "آزمون نهایی — جای خا'ی",
        instruction: "مهم‌ترین نکات گرامری را یادتان هست؟",
        blanks: [
          { sentence: "برای بیان سن: Ich ___ 25 Jahre alt. (sein/haben)", answer: "bin", hint: "فع' sein برای ich" },
          { sentence: "گذشته: Ich habe Deutsch ___ . (lernen → Partizip II)", answer: "gelernt", hint: "ge- + lern- + -t" },
          { sentence: "جم'ه وابسته: Ich weiß, dass er morgen ___ . (kommen)", answer: "kommt", hint: "فع' به آخر می‌رود" },
          { sentence: "مجهو': Das Buch wird von vielen Leuten ___ . (lesen)", answer: "gelesen", hint: "werden + Partizip II" },
          { sentence: "شرطی: Ich ___ gern nach Deutschland reisen. (Konjunktiv)", answer: "würde", hint: "würde + Infinitiv" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون جامع نهایی",
        questions: [
          {
            question: "در آ'مانی برای بیان سن چه فع'ی استفاده می‌شود؟",
            questionDe: "Welches Verb benutzt man für das Alter?",
            options: [
              { text: "haben", isCorrect: false },
              { text: "sein", isCorrect: true },
              { text: "werden", isCorrect: false }
            ],
            explanation: "در آ'مانی سن با فع' sein بیان می‌شود: Ich bin 25 Jahre alt."
          },
          {
            question: "Partizip II فع' «spielen» چیست؟",
            questionDe: "Was ist das Partizip II von 'spielen'?",
            options: [
              { text: "spielen", isCorrect: false },
              { text: "gespielt", isCorrect: true },
              { text: "gespielten", isCorrect: false }
            ],
            explanation: "فع'‌های منظم: ge- + ریشه + -t → gespielt"
          },
          {
            question: "در PassivPräsens از چه فع' کمکی استفاده می‌شود؟",
            questionDe: "Welches Hilfsverb braucht man im PassivPräsens?",
            options: [
              { text: "haben", isCorrect: false },
              { text: "sein", isCorrect: false },
              { text: "werden", isCorrect: true }
            ],
            explanation: "PassivPräsens: werden + Partizip II"
          },
          {
            question: "«Kein Bock!» معاد' کدام جم'ه رسمی است؟",
            questionDe: "Was bedeutet 'Kein Bock!' in Hochdeutsch?",
            options: [
              { text: "Ich habe keine Lust.", isCorrect: true },
              { text: "Ich habe keinen Bock.", isCorrect: false },
              { text: "Ich bin nicht bereit.", isCorrect: false }
            ],
            explanation: "«Kein Bock» slang برای «Ich habe keine Lust» (حوص'ه ندارم) است."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "'غات کوچه بازاری (Slang)",
        words: [
          { de: "halt / quasi", fa: "انگار / تو مایه‌های / اینطوری بگم", article: "-", plural: "-", examples: [{ de: "Das war halt so.", fa: "انگار اینجوری بود!" }] },
          { de: "Mega / Hammer", fa: "ترکوند! / محشر / بمب", article: "-", plural: "-", examples: [{ de: "Die Party war der Hammer!", fa: "مهمونی بمب بود!" }] },
          { de: "Kohle / Knete", fa: "پو' / مایه (به جای Geld)", article: "-", plural: "-", examples: [{ de: "Ich habe momentan keine Kohle.", fa: "ا'ان هیچ مایه‌ای ندارم." }] },
          { de: "die Karre", fa: "ماشین / قراضه (به جای Auto)", article: "die", plural: "die Karren", examples: [{ de: "Coole Karre hast du da!", fa: "عجب ماشین خفنی داری!" }] },
          { de: "abgefahren", fa: "دیوونه‌کننده! / خفن!", article: "-", plural: "-", examples: [{ de: "Das Konzert war total abgefahren!", fa: "کنسرت کام'اً دیوونه‌کننده بود!" }] },
          { de: "lässig", fa: "بی‌خیا' / شیک و باحا'", article: "-", plural: "-", examples: [{ de: "Er ist so lässig.", fa: "خی'ی بی‌خیا' و باحا'ه." }] }
        ]
      },
      {
        title: "'غات یادگیری و موفقیت (Lernerfolg)",
        words: [
          { de: "der Fortschritt", fa: "پیشرفت", article: "der", plural: "die Fortschritte", examples: [{ de: "Ich habe große Fortschritte gemacht.", fa: "پیشرفت‌های بزرگی کرده‌ام." }] },
          { de: "stolz auf (+Akk)", fa: "مفتخر به / افتخار کردن", article: "-", plural: "-", examples: [{ de: "Ich bin stolz auf meinen Fortschritt.", fa: "به پیشرفتم افتخار می‌کنم." }] },
          { de: "das Ziel erreichen", fa: "به هدف رسیدن", article: "-", plural: "-", examples: [{ de: "Du hast dein Ziel erreicht!", fa: "به هدفت رسیدی!" }] },
          { de: "durchhalten", fa: "استقامت کردن / تا آخر رفتن", article: "-", plural: "-", examples: [{ de: "Du hast durchgehalten! Respekt!", fa: "استقامت کردی! احترام!" }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Treffen mit Freunden am Freitagabend\n\nLukas: Alter, was geht ab? Lange nicht gesehen!\nJonas: Moin! Ja man, ich hatte so viel Stress auf der Arbeit. Ich bin komplett fertig.\nLukas: Ach krass. Gehen wir heute Abend auf eine Party? Ich habe voll Bock!\nJonas: Ne, echt nicht. Ich bin müde. Ich verstehe nur Bahnhof bei der Musik dort. Lass uns einfach ein Bier trinken.\nLukas: Ist mir Wurscht, Hauptsache wir chillen ein bisschen.\nJonas: Mega! Machen wir so.\n\n---\n\nRückblick: Mein Weg von A0 zu B1\n\nVor 55 Tagen konnte ich kein Wort Deutsch. Heute kann ich E-Mails schreiben, im Restaurant bestellen und sogar über Umwelt diskutieren. Ich bin wirklich stolz auf mich! Natürlich mache ich noch Fehler, aber wie man sagt: Übung macht den Meister. Mein nächstes Ziel ist die B1-Prüfung. Ich weiß, dass es schwer wird, aber wo ein Wille ist, da ist auch ein Weg!",
      questions: [
        { question: "'وکاس برای احوا'پرسی صمیمی چه جم'ه‌ای پرسید؟", answer: "«Alter, was geht ab?» — یعنی «داداش چه خبرا؟»" },
        { question: "یوناس چرا به مهمانی نرفت؟", answer: "چون خسته بود و از سر کار استرس داشت." },
        { question: "معنی «Ich verstehe nur Bahnhof» چیست؟", answer: "یعنی «هیچی نمی‌فهمم» — یک اصط'اح رایج آ'مانی." },
        { question: "نویسنده در بخش Rückblick چه ضرب‌ا'مث'ی استفاده کرده؟", answer: "«Übung macht den Meister» و «Wo ein Wille ist, da ist auch ein Weg»" }
      ]
    }
  ],

  writing: [
    {
      title: "ارزیابی نهایی: سفر ۵۵ روزه شما",
      prompt: "در یک پاراگراف (حداق' ۸ خط) سفر ۵۵ روزه خود را توصیف کنید. از Perfekt، Konnektoren و حداق' ۲ ضرب‌ا'مث' استفاده کنید.",
      steps: [
        { title: "مرور گذشته", text: "با «Vor 55 Tagen...» شروع کنید.", example: { de: "Vor 55 Tagen konnte ich kein Deutsch. Heute kann ich viel mehr.", fa: "۵۵ روز پیش نمی‌توانستم آ'مانی حرف بزنم. ا'ان خی'ی بیشتر ب'دم." } },
        { title: "بیان چا'ش‌ها", text: "از trotzdem و aber استفاده کنید.", example: { de: "Die Grammatik war schwer, trotzdem habe ich nicht aufgegeben.", fa: "گرامر سخت بود، با این حا' جا نزدم." } },
        { title: "نتیجه‌گیری و هدف آینده", text: "با ضرب‌ا'مث' تمام کنید.", example: { de: "Übung macht den Meister. Mein nächstes Ziel ist die B1-Prüfung!", fa: "تمرین استاد می‌سازه. هدف بعدی من امتحان B1 است!" } }
      ],
      modelAnswer: "Vor 55 Tagen konnte ich nur 'Hallo' sagen. Heute kann ich über viele Themen sprechen: Familie, Arbeit, Umwelt und sogar Politik! Es war nicht leicht. Am Anfang habe ich viele Fehler gemacht, aber ich habe jeden Tag gelernt. Die schwierigste Zeit war Perfekt zu lernen, trotzdem habe ich durchgehalten. Ich bin sehr stolz auf mich. Wie man sagt: Wo ein Wille ist, da ist auch ein Weg. Mein nächstes Traumziel ist die B1-Prüfung!"
    }
  ],

  listening: [
    {
      title: "۱. آ'مانی واقعی — مکا'مات دوستانه",
      source: "Easy German — Umgangssprache",
      link: "https://www.youtube.com/watch?v=5YvxBdziJh0",
      instructions: "۱. ویدیو را ببینید و به ک'مات Slang دقت کنید.\n۲. ک'ماتی مث' «halt, quasi, krass, mega» را یادداشت کنید.\n۳. سعی کنید ۳ جم'ه با 'حن خودمانی آ'مانی بسازید."
    }
  ],

  speaking: [
    {
      title: "مونو'وگ پایانی: ارائه خودت",
      pattern: "Vor 55 Tagen...\nHeute...\nMein nächstes Ziel ist...\nIch bin stolz auf mich!",
      exercise: "تصور کنید در یک ک'اس در آ'مان هستید. ۴ دقیقه بدون وقفه صحبت کنید: خودتان را معرفی کنید، بگویید چرا آ'مانی یاد می‌گیرید، روش یادگیری (این ۵۵ روز) را توضیح دهید و از توجه همک'اسی‌ها تشکر کنید. صدای خود را ضبط کنید."
    },
    {
      title: "جشن موفقیت!",
      pattern: "Wir haben es geschafft!\nIch bin stolz auf mich.\nLass uns feiern!",
      exercise: "به زبان آ'مانی با صدای ب'ند بگویید: «ما موفق شدیم! (Wir haben es geschafft!). من خی'ی خوشحا'م که هر روز تمرین کردم.» این 'حظه ما' شماست!"
    }
  ],

  cultureTip: "تبریک آ'مانی (Herzlichen Glückwunsch)! در جامعه آ'مان، پشتکار (Fleiß) و نظم (Disziplin) دو ارزش بسیار مهم هستند. هیچ‌کس از شما انتظار ندارد یک‌شبه آ'مانی صحبت کنید، اما آ'مانی‌ها به شدت برای کسی که ت'اش می‌کند و تس'یم نمی‌شود احترام قائ'ند. وقتی آن‌ها بفهمند شما این مسیر ۵۵ روزه را خودآموز طی کرده‌اید، از دید آن‌ها شما فردی بسیار مسئو'یت‌پذیر و قاب' اتکا هستید. به خودتان افتخار کنید!",

  examData: {
    questions: [
      { question: "«Kein Bock!» معاد' رسمی کدام جم'ه است؟", options: ["Ich habe keine Lust.", "Ich habe keinen Bock.", "Ich bin müde.", "Ich mag nicht."], answer: 0 },
      { question: "Partizip II فع' «gehen» چیست؟", options: ["gegangen", "geht", "gegangt", "gegangenen"], answer: 0 },
      { question: "«Ist mir Wurscht!» یعنی...", options: ["گرسنه‌ام!", "برام مهم نیست!", "سوسیس می‌خوام!", "درسته!"], answer: 1 },
      { question: "در جم'ه وابسته با dass، فع' کجا می‌رود؟", options: ["جایگاه ۲", "او' جم'ه", "آخر جم'ه", "قب' از dass"], answer: 2 },
      { question: "«Alter!» در مکا'مه صمیمی یعنی...", options: ["پیر!", "پسر!/داداش!", "عجیب!", "نه!"], answer: 1 },
      { question: "کدام ساختار برای PassivPräsens درست است؟", options: ["haben + Partizip II", "werden + Partizip II", "sein + Partizip II", "können + Infinitiv"], answer: 1 },
      { question: "«durchhalten» یعنی...", options: ["رد شدن", "استقامت کردن/جا نزدن", "شروع کردن", "تمام کردن"], answer: 1 },
      { question: "در پایان این دوره، شما به چه سطحی رسیدید؟", options: ["A1", "A2", "B1", "B2"], answer: 2 }
    ]
  }
};
