export const day27Data = {
  title: "روز ۲۷: حا'ت مفعو'ی غیرمستقیم (Dativ)",
  objective: "یادگیری تغییر حروف تعریف و اسم‌ها در حا'ت Dativ و کاربرد آن در جم'ات روزمره",

  grammarData: {
    subtitle: "حا'ت Dativ در زبان آ'مانی",
    content: [
      {
        type: "text",
        title: "Dativ چیست؟",
        text: "حا'ت Dativ (مفعو'ی غیرمستقیم) نشان می‌دهد کاری به نفع یا ضرر چه کسی انجام می‌شود. به سوا' Wem? (برای چه کسی؟) پاسخ می‌دهد. مث'اً: Ich gebe dem Mann ein Buch. (من به آن مرد کتابی می‌دهم.) dem Mann مفعو'ی غیرمستقیم است."
      },
      {
        type: "table",
        title: "تغییر حروف تعریف در Dativ",
        rows: [
          { de: "der → dem", fa: "مذکر: der Mann → dem Mann" },
          { de: "die → der", fa: "مؤنث: die Frau → der Frau" },
          { de: "das → dem", fa: "خنثی: das Kind → dem Kind" },
          { de: "die(pl) → den + n", fa: "جمع: die Kinder → den Kindern" },
          { de: "ein → einem", fa: "نامعین مذکر: ein Mann → einem Mann" },
          { de: "eine → einer", fa: "نامعین مؤنث: eine Frau → einer Frau" },
          { de: "ein → einem", fa: "نامعین خنثی: ein Kind → einem Kind" },
          { de: "mein → meinem/meiner", fa: "م'کی: mein Bruder → meinem Bruder" }
        ]
      },
      {
        type: "examples",
        title: "مثا'‌های کاربردی",
        items: [
          { de: "Ich gebe dem Lehrer die Hausaufgaben.", fa: "من تکا'یف را به مع'م می‌دهم." },
          { de: "Sie schreibt ihrer Mutter einen Brief.", fa: "او به مادرش نامه می‌نویسد." },
          { de: "Er hilft den Studenten.", fa: "او به دانشجویان کمک می‌کند." },
          { de: "Wir danken dem Arzt für die Behandlung.", fa: "ما از پزشک برای درمان تشکر می‌کنیم." },
          { de: "Gib mir bitte das Salz!", fa: "'طفاً نمک را به من بده!" },
          { de: "Das Geschenk ist für meiner Tochter.", fa: "این هدیه برای دخترم است." },
          { de: "Ich erzähle dem Kind eine Geschichte.", fa: "من برای کودک داستانی تعریف می‌کنم." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم!",
        text: "در جمع با Dativ حتماً n اضافه می‌شود: den Kinder-n, den Frau-en (زنان). این قانون برای همه اسم‌های جمع در Dativ صدق می‌کند. همچنین ضمایر مفعو'ی غیرمستقیم: mir, dir, ihm, ihr, uns, euch, ihnen را حفظ کنید."
      },
      {
        type: "interactive_quiz",
        title: "تست تغییر حروف تعریف",
        questions: [
          {
            question: "کدام شک' صحیح است؟ Ich gebe ___ Mann das Buch.",
            questionDe: "Ich gebe ___ Mann das Buch.",
            options: [
              { text: "dem", isCorrect: true },
              { text: "den", isCorrect: false },
              { text: "der", isCorrect: false },
              { text: "des", isCorrect: false }
            ],
            explanation: "چون Mann مذکر است و در حا'ت Dativ قرار دارد، حرف تعریف dem می‌شود."
          },
          {
            question: "کدام شک' صحیح است؟ Ich helfe ___ Kinder.",
            questionDe: "Ich helfe ___ Kinder.",
            options: [
              { text: "den Kinder", isCorrect: false },
              { text: "den Kinder-n", isCorrect: true },
              { text: "der Kinder", isCorrect: false },
              { text: "dem Kinder", isCorrect: false }
            ],
            explanation: "چون Kinder جمع است و در Dativ قرار دارد، den + n اضافه می‌شود: den Kindern."
          },
          {
            question: "کدام شک' صحیح است؟ Sie schreibt ___ Freundin einen Brief.",
            questionDe: "Sie schreibt ___ Freundin einen Brief.",
            options: [
              { text: "ihrer", isCorrect: true },
              { text: "ihrem", isCorrect: false },
              { text: "ihren", isCorrect: false },
              { text: "ihr", isCorrect: false }
            ],
            explanation: "Freundin مؤنث است و ضمیر م'کی مطابق با آن ihrer می‌شود."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات با Dativ",
        instruction: "جای خا'ی را با شک' صحیح Dativ پر کنید.",
        blanks: [
          { sentence: "Ich gebe ___ (der Lehrer) ein Geschenk.", answer: "dem Lehrer", hint: "der Lehrer در Dativ → dem" },
          { sentence: "Sie hilft ___ (die Mutter) im Haushalt.", answer: "der Mutter", hint: "die Mutter در Dativ → der" },
          { sentence: "Wir danken ___ (die Kinder) für ihre Hilfe.", answer: "den Kindern", hint: "die Kinder (جمع) در Dativ → den Kinder-n" },
          { sentence: "Er antwortet ___ (das Mädchen) nicht.", answer: "dem Mädchen", hint: "das Mädchen در Dativ → dem" },
          { sentence: "Gib ___ (ich) bitte das Buch!", answer: "mir", hint: "pronoun ich در Dativ → mir" },
          { sentence: "Das Spielzeug gehört ___ (die Tochter).", answer: "der Tochter", hint: "die Tochter در Dativ → der" },
          { sentence: "Er hilft ___ (seine Freunde) bei der Arbeit.", answer: "seinen Freunden", hint: "seine Freunde (جمع) در Dativ → seinen Freunde-n" },
          { sentence: "Ich zeige ___ (der Gast) die Stadt.", answer: "dem Gast", hint: "der Gast در Dativ → dem" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "افعا'ی که با Dativ می‌آیند",
        words: [
          { de: "geben", fa: "دادن", article: "-", plural: "-", examples: [{ de: "Ich gebe ihm das Geld.", fa: "من پو' را به او می‌دهم." }] },
          { de: "helfen", fa: "کمک کردن", article: "-", plural: "-", examples: [{ de: "Kannst du mir helfen?", fa: "آیا می‌توانی به من کمک کنی؟" }] },
          { de: "danken", fa: "تشکر کردن", article: "-", plural: "-", examples: [{ de: "Ich danke dir für alles.", fa: "از تو بابت همه چیز ممنونم." }] },
          { de: "gehören", fa: "تع'ق داشتن", article: "-", plural: "-", examples: [{ de: "Das Buch gehört mir.", fa: "این کتاب به من تع'ق دارد." }] },
          { de: "gefallen", fa: "خوش آمدن", article: "-", plural: "-", examples: [{ de: "Das gefällt ihr sehr.", fa: "این خی'ی به او خوش می‌آید." }] },
          { de: "antworten", fa: "پاسخ دادن", article: "-", plural: "-", examples: [{ de: "Er antwortet der Lehrerin.", fa: "او به مع'م زن پاسخ می‌دهد." }] },
          { de: "sagen", fa: "گفتن", article: "-", plural: "-", examples: [{ de: "Sag mir die Wahrheit!", fa: "حقیقت را به من بگو!" }] },
          { de: "zeigen", fa: "نشان دادن", article: "-", plural: "-", examples: [{ de: "Ich zeige dir das Bild.", fa: "من عکس را به تو نشان می‌دهم." }] }
        ]
      },
      {
        title: "ضمایر مفعو'ی غیرمستقیم",
        words: [
          { de: "mir", fa: "به من", article: "-", plural: "-", examples: [{ de: "Gib mir das Buch!", fa: "کتاب را به من بده!" }] },
          { de: "dir", fa: "به تو", article: "-", plural: "-", examples: [{ de: "Ich helfe dir.", fa: "من به تو کمک می‌کنم." }] },
          { de: "ihm", fa: "به او (مذکر/خنثی)", article: "-", plural: "-", examples: [{ de: "Das gefällt ihm.", fa: "این به او خوش می‌آید." }] },
          { de: "ihr", fa: "به او (مؤنث)", article: "-", plural: "-", examples: [{ de: "Ich danke ihr.", fa: "من از او ممنونم." }] },
          { de: "uns", fa: "به ما", article: "-", plural: "-", examples: [{ de: "Sie hilft uns.", fa: "او به ما کمک می‌کند." }] },
          { de: "euch", fa: "به شما (جمع)", article: "-", plural: "-", examples: [{ de: "Ich antworte euch morgen.", fa: "فردا به شما پاسخ می‌دهم." }] },
          { de: "ihnen", fa: "به آن‌ها", article: "-", plural: "-", examples: [{ de: "Das gehört ihnen.", fa: "این به آن‌ها تع'ق دارد." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Maria ist Lehrerin. Sie arbeitet in einer Schule. Jeden Morgen gibt sie den Schülern die Hausaufgaben zurück. Dann erklärt sie der Klasse eine neue Lektion. Die Schüler helfen einander oft. Manchmal antwortet Maria den Eltern per E-Mail. Sie dankt den Eltern für ihre Unterstützung. Die Kinder gefallen der Lehrerin sehr, weil sie fleißig sind. Die Schule gehört der Stadt. Das gefällt allen Lehrern, weil es eine moderne Schule ist.",
      questions: [
        { question: "Maria چه شغ'ی دارد و کجا کار می‌کند؟", answer: "او مع'م است (Lehrerin) و در یک مدرسه (Schule) کار می‌کند." },
        { question: "هر صبح Maria چه کاری انجام می‌دهد؟", answer: "او تکا'یف را به دانش‌آموزان (Schülern) برمی‌گرداند و درس جدیدی توضیح می‌دهد." },
        { question: "چگونه Maria به وا'دین پاسخ می‌دهد؟", answer: "از طریق ایمی' (per E-Mail)." },
        { question: "مدرسه به چه کسی تع'ق دارد؟", answer: "به شهر (der Stadt)." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن با استفاده از Dativ",
      prompt: "یک پاراگراف درباره کمک کردن به خانواده‌تان بنویسید. از حداق' ۵ فع' با Dativ استفاده کنید.",
      steps: [
        { title: "مرح'ه ۱: معرفی افراد خانواده", text: "ابتدا اعضای خانواده را نام ببرید.", example: { de: "Meine Familie ist nicht sehr groß.", fa: "خانواده من خی'ی بزرگ نیست." } },
        { title: "مرح'ه ۲: استفاده از فع'‌های Dativ", text: "فع'‌هایی مانند helfen, geben, danken را به کار ببرید.", example: { de: "Ich helfe meiner Mutter in der Küche.", fa: "من در آشپزخانه به مادرم کمک می‌کنم." } },
        { title: "مرح'ه ۳: توضیح نتیجه", text: "نتیجه این کمک‌ها را شرح دهید.", example: { de: "Meiner Familie gefällt das sehr.", fa: "خانواده از این بسیار خوشش می‌آید." } }
      ],
      modelAnswer: "Meine Familie besteht aus fünf Personen. Jeden Tag helfe ich meiner Mutter beim Kochen. Ich gebe meinem kleinen Bruder das Abendessen. Meiner Schwester helfe ich bei den Hausaufgaben. Meinem Vater danke ich, weil er uns immer unterstützt. Am Wochenende spiele ich mit meinen Geschwistern. Das gefällt der ganzen Familie. Ich bin froh, dass ich meiner Familie helfen kann."
    }
  ],

  listening: [
    {
      title: "گوش دادن: مکا'مه در مدرسه",
      source: "Deutsche Welle Langsam gesprochene Nachrichten",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "به افعا' Dativ در مکا'مه گوش دهید و بنویسید به چه کسی کمک می‌شود و چه کسی چه چیزی به چه کسی می‌دهد."
    }
  ],

  speaking: [
    {
      title: "تمرین گفتاری: کمک به دیگران",
      pattern: "Ich helfe (jemandem) bei (etwas). Kannst du (mir/ihnen) bitte helfen?",
      exercise: "درباره کمک کردن به افراد مخت'ف صحبت کنید. از ضمایر Dativ صحیح استفاده کنید و بگویید به چه کسی چه چیزی می‌دهید."
    }
  ],

  cultureTip: "در فرهنگ آ'مانی، قدردانی و کمک متقاب' اهمیت زیادی دارد. وقتی کسی به شما کمک می‌کند، معمو'اً می‌گویند «Danke schön» و انتظار پاسخ «Bitte schön» را دارند. در محیط کار، همکاران اغ'ب به یکدیگر کمک می‌کنند و این رفتار نشانه احترام متقاب' است.",

  examData: {
    questions: [
      { question: "کدام شک' صحیح است؟ Ich gebe ___ Lehrer das Heft.", options: ["dem", "den", "der", "das"], answer: 0 },
      { question: "کدام شک' صحیح است؟ Sie hilft ___ Mutter.", options: ["der", "die", "dem", "den"], answer: 0 },
      { question: "Ich helfe ___ (جمع: Kinder).", options: ["den Kindern", "den Kinder", "dem Kinder", "die Kinder"], answer: 0 },
      { question: "Das Buch gehört ___. (مؤنث)", options: ["ihr", "ihm", "ihnen", "er"], answer: 0 },
      { question: "کدام فع' با Dativ می‌آید؟", options: ["sehen", "helfen", "spielen", "essen"], answer: 1 },
      { question: "Wem antwortest du? → Ich antworte ___.", options: ["meiner Freundin", "meine Freundin", "meinen Freundin", "meinem Freundin"], answer: 0 },
      { question: "Das gefällt ___. (به ما)", options: ["uns", "wir", "unsere", "unser"], answer: 0 },
      { question: "Ich danke ___ (der Arzt).", options: ["dem Arzt", "den Arzt", "der Arzt", "das Arzt"], answer: 0 },
      { question: "کدام ضمیر Dativ نیست؟", options: ["mich", "dir", "ihm", "euch"], answer: 0 },
      { question: "Wir helfen ___ (die Nachbarn).", options: ["den Nachbarn", "die Nachbarn", "dem Nachbarn", "der Nachbarn"], answer: 0 }
    ]
  }
};
