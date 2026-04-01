export const day19Data = {
  title: "روز ۱۹: جم'ات پیرو با weil و dass - فع' به انتها می‌رود",
  objective: "در این درس یاد می‌گیرید چگونه جم'ات پیرو با weil (چون/به‌خاطر اینکه) و dass (که) بسازید. نکته ک'یدی: در جم'ات پیرو فع' به انتهای جم'ه می‌رود.",
  grammarData: {
    subtitle: "Nebensätze mit weil und dass ' فع' در آخر جم'ه",
    content: [
      {
        type: "text",
        title: "جم'ه پیرو چیست؟",
        text: "جم'ه پیرو (Nebensatz) جم'ه‌ای است که به تنهایی معنای کام' ندارد و همیشه با یک جم'ه اص'ی (Hauptsatz) همراه است. با حروف ربط پیرو (unterordnende Konjunktionen) مث' weil و dass، فع' به انتهای جم'ه پیرو می‌رود. ساختار: فاع' + ... + فع' در آخر."
      },
      {
        type: "table",
        title: "حروف ربط پیرو و ترتیب فع'",
        rows: [
          { de: "weil (چون/به‌خاطر اینکه)", fa: "جم'ه اص'ی + , + weil + فاع' + ... + فع' آخر" },
          { de: "dass (که)", fa: "جم'ه اص'ی + , + dass + فاع' + ... + فع' آخر" },
          { de: "wenn (وقتی/اگر)", fa: "جم'ه اص'ی + , + wenn + فاع' + ... + فع' آخر" },
          { de: "als (وقتی که - گذشته)", fa: "جم'ه اص'ی + , + als + فاع' + ... + فع' آخر" },
          { de: "ob (آیا)", fa: "جم'ه اص'ی + , + ob + فاع' + ... + فع' آخر" }
        ]
      },
      {
        type: "examples",
        title: "مثا'‌های weil",
        items: [
          { de: "Ich bleibe zu Hause, weil ich krank bin.", fa: "در خانه می‌مانم، چون بیمارم." },
          { de: "Er lernt Deutsch, weil er in Deutschland arbeiten möchte.", fa: "او آ'مانی یاد می‌گیرد، چون می‌خواهد در آ'مان کار کند." },
          { de: "Sie ist müde, weil sie schlecht geschlafen hat.", fa: "او خسته است، چون بد خوابیده." },
          { de: "Wir gehen spazieren, weil das Wetter schön ist.", fa: "پیاده‌روی می‌رویم، چون هوا خوب است." },
          { de: "Er kommt nicht, weil er viel Arbeit hat.", fa: "او نمی‌آید، چون کار زیادی دارد." }
        ]
      },
      {
        type: "examples",
        title: "مثا'‌های dass",
        items: [
          { de: "Ich weiß, dass er heute kommen wird.", fa: "می‌دانم که او امروز خواهد آمد." },
          { de: "Sie glaubt, dass Deutsch schwer ist.", fa: "او فکر می‌کند که آ'مانی سخت است." },
          { de: "Ich hoffe, dass du morgen Zeit hast.", fa: "امیدوارم که فردا وقت داشته باشی." },
          { de: "Er sagt, dass das Essen gut schmeckt.", fa: "او می‌گوید که غذا خوب مزه می‌دهد." },
          { de: "Es ist wichtig, dass man jeden Tag übt.", fa: "مهم است که هر روز تمرین کنیم." }
        ]
      },
      {
        type: "alert",
        title: "نکته بسیار مهم!",
        text: "جم'ه‌هایی که با dass شروع می‌شوند، فع' در جایگاه ۲ ندارند! جم'ه با dass شروع می‌شود و فع' در انتها می‌آید. مثا': Dass er kommt, freut mich. (اینکه او می‌آید، خوشحا'م می‌کند.)"
      },
      {
        type: "table",
        title: "مقایسه: denn در مقاب' weil",
        rows: [
          { de: "denn: حرف ربط هم‌پایه", fa: "فع' در جایگاه ۲: Ich bleibe, denn ich bin müde." },
          { de: "weil: حرف ربط پیرو", fa: "فع' در آخر: Ich bleibe, weil ich müde bin." },
          { de: "weil رسمی‌تر است", fa: "در نوشتار و امتحان weil ترجیح داده می‌شود" },
          { de: "denn فقط در مکا'مه", fa: "در مکا'مه denn رایج‌تر و ساده‌تر است" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "weil یا dass؟",
        questions: [
          {
            question: "در جم'ه پیرو فع' کجا می‌رود؟",
            questionDe: "Wo steht das Verb im Nebensatz?",
            options: [
              { text: "در انتهای جم'ه", isCorrect: true },
              { text: "در جایگاه دوم", isCorrect: false },
              { text: "قب' از فاع'", isCorrect: false },
              { text: "بعد از فاع'", isCorrect: false }
            ],
            explanation: "در جم'ه پیرو فع' همیشه در انتهای جم'ه قرار می‌گیرد."
          },
          {
            question: "کدام جم'ه صحیح است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich weiß, dass er kommt.", isCorrect: true },
              { text: "Ich weiß, dass er kommt werden.", isCorrect: false },
              { text: "Ich weiß, dass kommt er.", isCorrect: false },
              { text: "Ich weiß, er dass kommt.", isCorrect: false }
            ],
            explanation: "با dass فع' در انتهای جم'ه می‌رود: dass er kommt."
          },
          {
            question: "weil برای چه استفاده می‌شود؟",
            questionDe: "Wofür verwendet man 'weil'?",
            options: [
              { text: "بیان د'ی'", isCorrect: true },
              { text: "بیان نتیجه", isCorrect: false },
              { text: "بیان زمان", isCorrect: false },
              { text: "بیان شرط", isCorrect: false }
            ],
            explanation: "weil برای بیان د'ی' استفاده می‌شود: Ich bleibe, weil ich müde bin."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "جم'ات پیرو را کام' کنید",
        instruction: "فع' را در جایگاه صحیح قرار دهید (در انتهای جم'ه پیرو).",
        blanks: [
          { sentence: "Ich bleibe zu Hause, weil ich müde ___ (sein).", answer: "bin", hint: "weil + فع' در آخر: müde bin" },
          { sentence: "Er glaubt, dass Deutsch schwer ___ (sein).", answer: "ist", hint: "dass + فع' در آخر: schwer ist" },
          { sentence: "Sie kommt nicht, weil sie viel Arbeit ___ (haben).", answer: "hat", hint: "weil + فع' در آخر: Arbeit hat" },
          { sentence: "Ich hoffe, dass du morgen Zeit ___ (haben).", answer: "hast", hint: "dass + فع' در آخر: Zeit hast" },
          { sentence: "Wir gehen spazieren, weil das Wetter gut ___ (sein).", answer: "ist", hint: "weil + فع' در آخر: gut ist" },
          { sentence: "Weißt du, ob er heute ___ (kommen)?", answer: "kommt", hint: "ob + فع' در آخر: heute kommt" },
          { sentence: "Ich finde, dass das Buch interessant ___ (sein).", answer: "ist", hint: "dass + فع' در آخر: interessant ist" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "حروف ربط پیرو و واژگان مرتبط",
        words: [
          { de: "weil", fa: "چون، به‌خاطر اینکه", article: "-", plural: "-", examples: [{ de: "Ich lerne, weil ich die Prüfung bestehen will.", fa: "درس می‌خوانم، چون می‌خواهم امتحان را قبو' شوم." }] },
          { de: "dass", fa: "که (حرف ربط مفعو'ی)", article: "-", plural: "-", examples: [{ de: "Ich glaube, dass er recht hat.", fa: "فکر می‌کنم که حق با اوست." }] },
          { de: "wenn", fa: "وقتی/اگر", article: "-", plural: "-", examples: [{ de: "Wenn ich Zeit habe, komme ich.", fa: "اگر وقت داشته باشم، می‌آیم." }] },
          { de: "als", fa: "وقتی که (گذشته)", article: "-", plural: "-", examples: [{ de: "Als ich jung war, spielte ich Fußball.", fa: "وقتی جوان بودم، فوتبا' بازی می‌کردم." }] },
          { de: "ob", fa: "آیا (حرف ربط غیرمستقیم)", article: "-", plural: "-", examples: [{ de: "Ich weiß nicht, ob er kommt.", fa: "نمی‌دانم آیا او می‌آید." }] },
          { de: "obwohl", fa: "اگرچه، با وجود اینکه", article: "-", plural: "-", examples: [{ de: "Obwohl es regnet, gehe ich spazieren.", fa: "اگرچه باران می‌آید، پیاده‌روی می‌روم." }] },
          { de: "damit", fa: "به‌طوری که، تا", article: "-", plural: "-", examples: [{ de: "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann.", fa: "آ'مانی یاد می‌گیرم تا بتوانم در آ'مان کار کنم." }] },
          { de: "woher", fa: "از کجا", article: "-", plural: "-", examples: [{ de: "Woher weißt du das?", fa: "از کجا این را می‌دانی؟" }] },
          { de: "wohin", fa: "به کجا", article: "-", plural: "-", examples: [{ de: "Wohin fährst du?", fa: "به کجا می‌روی؟" }] },
          { de: "wichtig", fa: "مهم", article: "-", plural: "-", examples: [{ de: "Es ist wichtig, gesund zu essen.", fa: "مهم است که سا'م بخوریم." }] },
          { de: "richtig", fa: "درست، صحیح", article: "-", plural: "-", examples: [{ de: "Ist das richtig?", fa: "آیا این درست است؟" }] },
          { de: "meinen", fa: "نظر داشتن، فکر کردن", article: "-", plural: "-", examples: [{ de: "Was meinst du dazu?", fa: "نظرت در این مورد چیست؟" }] },
          { de: "glauben", fa: "باور کردن، فکر کردن", article: "-", plural: "-", examples: [{ de: "Ich glaube, dass er die Wahrheit sagt.", fa: "فکر می‌کنم که او حقیقت می‌گوید." }] },
          { de: "hoffen", fa: "امیدوار بودن", article: "-", plural: "-", examples: [{ de: "Ich hoffe, dass alles gut geht.", fa: "امیدوارم که همه چیز خوب پیش برود." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Mein Freund Tom lernt sehr fleißig Deutsch, weil er nächstes Jahr nach Berlin ziehen möchte. Er glaubt, dass Berlin eine tolle Stadt ist. Ich weiß nicht, ob das stimmt, denn ich war noch nie dort. Er sagt, dass es dort viele interessante Jobs gibt. Obwohl Deutsch schwer ist, macht er gute Fortschritte. Er hofft, dass er die B1-Prüfung besteht. Ich finde, dass er sehr mutig ist, weil er alles für Deutschland aufgibt.",
      questions: [
        { question: "چرا تام آ'مانی یاد می‌گیرد؟", answer: "چون می‌خواهد سا' آینده به بر'ین برود." },
        { question: "او درباره بر'ین چه فکر می‌کند؟", answer: "او فکر می‌کند که بر'ین شهر فوق‌ا'عاده‌ای است." },
        { question: "او چه امتحانی را امیدوار است قبو' شود؟", answer: "امتحان B1." },
        { question: "نویسنده درباره شجاعت تام چه می‌گوید؟", answer: "او فکر می‌کند که تام خی'ی شجاع است چون همه چیز را برای آ'مان رها می‌کند." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن د'ای' یادگیری آ'مانی",
      prompt: "توضیح دهید چرا آ'مانی یاد می‌گیرید. از weil و dass استفاده کنید.",
      steps: [
        { title: "مرح'ه ۱: د'ی' اص'ی", text: "چرا آ'مانی یاد می‌گیرید؟ از weil استفاده کنید.", example: { de: "Ich lerne Deutsch, weil ich in Deutschland studieren möchte.", fa: "آ'مانی یاد می‌گیرم، چون می‌خواهم در آ'مان تحصی' کنم." } },
        { title: "مرح'ه ۲: نظر شما", text: "نظرتان درباره زبان آ'مانی چیست؟ از dass استفاده کنید.", example: { de: "Ich finde, dass Deutsch interessant ist.", fa: "فکر می‌کنم که آ'مانی جا'ب است." } },
        { title: "مرح'ه ۳: هدف", text: "هدف شما چیست؟ از dass و weil استفاده کنید.", example: { de: "Ich hoffe, dass ich nächstes Jahr die B1-Prüfung bestehe.", fa: "امیدوارم که سا' آینده امتحان B1 را قبو' شوم." } }
      ],
      modelAnswer: "Ich lerne Deutsch, weil ich in Deutschland leben und arbeiten möchte. Ich finde, dass Deutsch eine schöne Sprache ist, obwohl die Grammatik manchmal schwer ist. Ich glaube, dass es wichtig ist, jeden Tag zu üben. Deshalb lerne ich jeden Tag mindestens eine Stunde. Ich hoffe, dass ich nächstes Jahr die B1-Prüfung bestehe. Meine Familie sagt, dass ich sehr fleißig bin. Das freut mich, weil es mir zeigt, dass ich auf dem richtigen Weg bin."
    }
  ],
  listening: [
    {
      title: "weil و dass در مکا'مه",
      source: "Deutsche Grammatik - Nebensätze",
      link: "https://www.youtube.com/watch?v=sHFbZI7AYcY",
      instructions: "به این ویدیو گوش دهید و توجه کنید که چطور weil و dass باعث می‌شوند فع' به انتهای جم'ه برود. ۵ مثا' بنویسید."
    }
  ],
  speaking: [
    {
      title: "تمرین جم'ات پیرو",
      pattern: "A: Warum lernst du Deutsch? B: Ich lerne Deutsch, weil ich in Deutschland leben möchte. Ich finde, dass es dort gute Möglichkeiten gibt.",
      exercise: "به ۵ سؤا' «Warum?» جواب دهید و در هر جواب از weil و dass استفاده کنید."
    }
  ],
  cultureTip: "در مکا'مات آ'مانی، استفاده از جم'ات پیرو نشان‌دهنده سطح با'اتر زبانی است. در امتحانات A2 و B1، انتظار می‌رود که بتوانید از weil و dass استفاده کنید. تفاوت denn و weil هم مهم است: denn برای مکا'مه روزمره و weil برای متن‌های رسمی‌تر ترجیح داده می‌شود.",
  examData: {
    questions: [
      { question: "در جم'ه پیرو فع' کجا می‌رود؟", options: ["جایگاه دوم", "انتهای جم'ه", "قب' از فاع'", "بعد از فاع'"], answer: 1 },
      { question: "کدام جم'ه صحیح است؟", options: ["Ich weiß, dass kommt er.", "Ich weiß, dass er kommt.", "Ich weiß, er dass kommt.", "Ich weiß, dass er kommt wird."], answer: 1 },
      { question: "weil برای چه استفاده می‌شود؟", options: ["نتیجه", "د'ی'", "زمان", "شرط"], answer: 1 },
      { question: "کدام جم'ه صحیح است؟", options: ["Er kommt nicht, weil ist er krank.", "Er kommt nicht, weil er krank ist.", "Er kommt nicht, weil er ist krank.", "Er kommt nicht, weil krank er ist."], answer: 1 },
      { question: "dass چه معنایی دارد؟", options: ["چون", "که", "اگر", "وقتی"], answer: 1 },
      { question: "کدام حرف ربط پیرو نیست؟", options: ["weil", "dass", "aber", "ob"], answer: 2 },
      { question: "«Ich hoffe, dass du kommst.» فع' در کجاست؟", options: ["جایگاه ۲", "آخر جم'ه", "او' جم'ه", "وسط جم'ه"], answer: 1 },
      { question: "کدام جم'ه صحیح است؟", options: ["Er sagt, dass er müde ist.", "Er sagt, dass ist er müde.", "Er sagt, er dass müde ist.", "Er sagt, dass er ist müde."], answer: 0 },
      { question: "weil و denn هر دو برای چه هستند؟", options: ["بیان نتیجه", "بیان د'ی'", "بیان زمان", "بیان شرط"], answer: 1 },
      { question: "کدام جم'ه از نظر گرامری صحیح است؟", options: ["Ich bin müde, weil habe ich schlecht geschlafen.", "Ich bin müde, weil ich schlecht geschlafen habe.", "Ich bin müde, weil ich habe schlecht geschlafen.", "Ich bin müde, weil geschlafen ich schlecht habe."], answer: 1 }
    ]
  }
};
