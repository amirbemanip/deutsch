export const day4Data = {
  title: "روز ۴: ضمایر ملکی (Possessivpronomen) + ساختار جمله",
  objective: "در پایان این روز، شما قادر خواهید بود ضمایر ملکی (mein, dein, sein, ihr, unser, euer, ihr, Ihr) را در جملات خود به‌درستی به‌کار ببرید و ساختار جملات خبری در زبان آلمانی را یاد بگیرید.",
  level: "A1",

  grammarData: {
    subtitle: "درس‌های گرامری با تمرین تعاملی",
    content: [
      {
        type: "text",
        title: "ضمایر ملکی چیست؟",
        text: "ضمایر ملکی نشان می‌دهند که چیزی متعلق به کیست: مال من، مال تو، مال او و... در زبان آلمانی، ضمیر ملکی باید با جنسیت اسمی که قبلش می‌آید مطابقت داشته باشد. یعنی برای اسم‌های مذکر، مؤنث و خنثی شکل‌های متفاوتی دارند."
      },
      {
        type: "table",
        title: "ضمایر ملکی در Nominativ",
        rows: [
          { de: "mein / meine (مال من)", fa: "mein Bruder (برادرم), meine Schwester (خواهرم), mein Kind (بچه‌ام)" },
          { de: "dein / deine (مال تو)", fa: "dein Vater (پدرت), deine Mutter (مادرت), dein Buch (کتابت)" },
          { de: "sein / seine (مال او - مذکر)", fa: "sein Auto (ماشینش), seine Freundin (دوست دخترش), sein Handy (گوشی‌اش)" },
          { de: "ihr / ihre (مال او - مؤنث)", fa: "ihr Haus (خانه‌اش), ihre Katze (گربه‌اش), ihr Zimmer (اتاقش)" },
          { de: "sein / seine (مال آن - خنثی)", fa: "sein Name (نامش), seine Farve (رنگش)" },
          { de: "unser / unsere (مال ما)", fa: "unser Lehrer (معلممان), unsere Stadt (شهرمان), unser Haus (خانه‌مان)" },
          { de: "euer / eure (مال شماها)", fa: "euer Lehrer (معلمتان), eure Schule (مدرسه‌تان), euer Kind (بچه‌تان)" },
          { de: "ihr / ihre (مال آن‌ها)", fa: "ihr Land (کشورشان), ihre Sprache (زبانشان), ihr Kind (بچه‌شان)" },
          { de: "Ihr / Ihre (مال شما - رسمی)", fa: "Ihr Name (نام شما), Ihre Adresse (آدرس شما), Ihr Beruf (شغل شما)" }
        ]
      },
      {
        type: "table",
        title: "تغییرات ضمایر ملکی بر اساس جنسیت اسم",
        rows: [
          { de: "قبل از اسم مذکر (der)", fa: "mein, dein, sein, ihr, unser, euer, ihr, Ihr (بدون تغییر)" },
          { de: "قبل از اسم مؤنث (die)", fa: "meine, deine, seine, ihre, unsere, eure, ihre, Ihre (با -e)" },
          { de: "قبل از اسم خنثی (das)", fa: "mein, dein, sein, ihr, unser, euer, ihr, Ihr (بدون تغییر)" },
          { de: "قبل از جمع (die pl.)", fa: "meine, deine, seine, ihre, unsere, eure, ihre, Ihre (با -e)" }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم درباره euer",
        text: "توجه! ضمیر ملکی euer (مال شماها) وقتی -e اضافه می‌شود، حرف r حذف می‌شود: euer → eure. مثلاً: eure Katze (گربه شماها). همچنین Ihr (مال شما رسمی) همیشه با I بزرگ نوشته می‌شود!"
      },
      {
        type: "text",
        title: "ساختار جمله خبری (Aussagesatz)",
        text: "مهم‌ترین قانون زبان آلمانی: در جملات خبری، فعل همیشه در جایگاه دوم (Position 2) قرار می‌گیرد! این قانون بدون هیچ استثنایی همیشه رعایت می‌شود.\nفرمول: فاعل (جایگاه ۱) + فعل صرف‌شده (جایگاه ۲) + بقیه جمله (جایگاه ۳)"
      },
      {
        type: "examples",
        title: "مثال ساختار جمله",
        items: [
          { de: "[Ich] [habe] [einen Bruder].", fa: "من (جایگاه ۱) دارم (جایگاه ۲) یک برادر (بقیه)." },
          { de: "[Mein Vater] [ist] [Arzt].", fa: "پدرم (جایگاه ۱) هست (جایگاه ۲) پزشک (بقیه)." },
          { de: "[Meine Mutter] [hat] [ein Auto].", fa: "مادرم (جایگاه ۱) دارد (جایگاه ۲) یک ماشین (بقیه)." },
          { de: "[Heute] [bin] [ich müde].", fa: "امروز (جایگاه ۱) هستم (جایگاه ۲) من خسته. (دقت کنید! حتی اگر کلمه «امروز» را اول جمله بیاورید، فعل باز هم در جایگاه ۲ می‌ماند و فاعل به جایگاه ۳ می‌رود!)" }
        ]
      },
      {
        type: "table",
        title: "نکات مهم نظم کلمات",
        rows: [
          { de: "قاعده جایگاه دوم فعل", fa: "در هر جمله خبری، فعل همیشه در جایگاه ۲ قرار می‌گیرد. این مهم‌ترین قانون زبان آلمانی است!" },
          { de: "زمان + مکان", fa: "اگر زمان و مکان هر دو در جمله باشند، اول زمان، بعد مکان می‌آید: Ich lerne heute in der Schule." },
          { de: "منفی با nicht", fa: "نicht معمولاً قبل از آخرین بخش جمله می‌آید: Ich bin heute nicht müde." },
          { de: "جمله با کلمه زمانی اول", fa: "اگر زمان را اول بیاورید، فعل در جایگاه ۲ و فاعل در جایگاه ۳ می‌رود: Heute bin ich müde." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: ضمایر ملکی و نظم کلمات",
        questions: [
          {
            question: "ضمیر ملکی صحیح برای «این کتاب مال من است» چیست؟",
            questionDe: "Welches Possessivpronomen ist richtig für 'das Buch'?",
            options: [
              { text: "mein Buch", isCorrect: true },
              { text: "meine Buch", isCorrect: false },
              { text: "meinen Buch", isCorrect: false }
            ],
            explanation: "عالی! das Buch خنثی است، پس بدون تغییر می‌ماند: mein Buch."
          },
          {
            question: "کدام جمله نظم کلمات صحیح دارد؟",
            questionDe: "Welcher Satz hat die richtige Wortstellung?",
            options: [
              { de: "Heute ich bin müde.", isCorrect: false },
              { de: "Heute bin ich müde.", isCorrect: true },
              { de: "Bin ich heute müde.", isCorrect: false }
            ],
            explanation: "درست! وقتی «Heute» در جایگاه ۱ می‌آید، فعل «bin» در جایگاه ۲ و ضمیر «ich» در جایگاه ۳ قرار می‌گیرد."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین جای خالی: ضمایر ملکی",
        instructions: "ضمیر ملکی مناسب را در جای خالی بنویسید.",
        sentences: [
          { de: "Das ist ___ Bruder.", answer: "mein", hint: "مال من - اسم مذکر" },
          { de: "___ Mutter ist Lehrerin.", answer: "Meine", hint: "مال من - اسم مؤنث" },
          { de: "Wo ist ___ Buch?", answer: "dein", hint: "مال تو - اسم خنثی" },
          { de: "___ Kinder spielen.", answer: "Unsere", hint: "مال ما - جمع" },
          { de: "___ Name ist Müller.", answer: "Sein", hint: "مال او (مذکر) - اسم خنثی" },
          { de: "Das ist ___ Katze.", answer: "ihre", hint: "مال او (مؤنث) - اسم مؤنث" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "اعضای خانواده",
        words: [
          {
            de: "die Familie",
            fa: "خانواده",
            ipa: "[faˈmiːli̯ə]",
            article: "die",
            plural: "die Familien",
            examples: [{ de: "Meine Familie ist groß.", fa: "خانواده من بزرگ است." }]
          },
          {
            de: "der Vater",
            fa: "پدر",
            ipa: "[ˈfaːtɐ]",
            article: "der",
            plural: "die Väter",
            examples: [{ de: "Mein Vater heißt Ali.", fa: "پدرم علی نام دارد." }]
          },
          {
            de: "die Mutter",
            fa: "مادر",
            ipa: "[ˈmʊtɐ]",
            article: "die",
            plural: "die Mütter",
            examples: [{ de: "Meine Mutter ist Ärztin.", fa: "مادرم پزشک است." }]
          },
          {
            de: "der Bruder",
            fa: "برادر",
            ipa: "[ˈbʁuːdɐ]",
            article: "der",
            plural: "die Brüder",
            examples: [{ de: "Ich habe einen Bruder.", fa: "من یک برادر دارم." }]
          },
          {
            de: "die Schwester",
            fa: "خواهر",
            ipa: "[ˈʃvɛstɐ]",
            article: "die",
            plural: "die Schwestern",
            examples: [{ de: "Meine Schwester ist jünger.", fa: "خواهرم کوچک‌تر است." }]
          },
          {
            de: "der Sohn",
            fa: "پسر",
            ipa: "[zoːn]",
            article: "der",
            plural: "die Söhne",
            examples: [{ de: "Ihr Sohn ist nett.", fa: "پسرش مهربان است." }]
          },
          {
            de: "die Tochter",
            fa: "دختر",
            ipa: "[ˈtɔxtɐ]",
            article: "die",
            plural: "die Töchter",
            examples: [{ de: "Seine Tochter heißt Anna.", fa: "دخترش آنا نام دارد." }]
          },
          {
            de: "der Mann (Ehemann)",
            fa: "شوهر",
            ipa: "[man]",
            article: "der",
            plural: "die Männer",
            examples: [{ de: "Ihr Mann ist Lehrer.", fa: "شوهرش معلم است." }]
          },
          {
            de: "die Frau (Ehefrau)",
            fa: "همسر (زن)",
            ipa: "[fʁaʊ̯]",
            article: "die",
            plural: "die Frauen",
            examples: [{ de: "Seine Frau ist Ärztin.", fa: "همسرش پزشک است." }]
          }
        ]
      },
      {
        title: "اشیاء شخصی",
        words: [
          {
            de: "das Handy",
            fa: "گوشی موبایل",
            ipa: "[ˈhɛndi]",
            article: "das",
            plural: "die Handys",
            examples: [{ de: "Wo ist mein Handy?", fa: "گوشیم کجاست؟" }]
          },
          {
            de: "der Schlüssel",
            fa: "کلید",
            ipa: "[ˈʃlʏsl̩]",
            article: "der",
            plural: "die Schlüssel",
            examples: [{ de: "Hast du deinen Schlüssel?", fa: "کلیدت را داری؟" }]
          },
          {
            de: "die Tasche",
            fa: "کیف",
            ipa: "[ˈtaʃə]",
            article: "die",
            plural: "die Taschen",
            examples: [{ de: "Das ist meine Tasche.", fa: "این کیف من است." }]
          },
          {
            de: "das Bett",
            fa: "تختخواب",
            ipa: "[bɛt]",
            article: "das",
            plural: "die Betten",
            examples: [{ de: "Unser Bett ist groß.", fa: "تختخوابمان بزرگ است." }]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Meine Familie (خانواده من)\n\nMein Name ist Ali. Ich bin 28 Jahre alt und komme aus dem Iran. Meine Familie ist nicht groß.\nMein Vater heißt Hassan. Er ist 55 Jahre alt und ist Ingenieur. Meine Mutter heißt Fatima. Sie ist 50 Jahre alt und ist Lehrerin.\nIch habe einen Bruder. Sein Name ist Reza. Er ist 25 Jahre alt und ist Student. Meine Schwester heißt Sara. Sie ist 22 Jahre alt und wohnt in Berlin.\nMein Bruder hat ein Auto. Meine Schwester hat eine Katze. Wir haben zusammen Spaß.",
      translation: [
        { de: "Meine Familie", fa: "خانواده من" },
        { de: "Mein Name ist Ali.", fa: "نام من علی است." },
        { de: "Ich bin 28 Jahre alt und komme aus dem Iran.", fa: "من ۲۸ ساله‌ام و از ایران می‌آیم." },
        { de: "Meine Familie ist nicht groß.", fa: "خانواده من بزرگ نیست." },
        { de: "Mein Vater heißt Hassan.", fa: "پدرم حسن نام دارد." },
        { de: "Er ist 55 Jahre alt und ist Ingenieur.", fa: "او ۵۵ ساله و مهندس است." },
        { de: "Meine Mutter heißt Fatima.", fa: "مادرم فاطمه نام دارد." },
        { de: "Sie ist 50 Jahre alt und ist Lehrerin.", fa: "او ۵۰ ساله و معلم است." },
        { de: "Ich habe einen Bruder.", fa: "من یک برادر دارم." },
        { de: "Sein Name ist Reza.", fa: "نامش رضاست." },
        { de: "Er ist 25 Jahre alt und ist Student.", fa: "او ۲۵ ساله و دانشجوست." },
        { de: "Meine Schwester heißt Sara.", fa: "خواهرم سارا نام دارد." },
        { de: "Sie ist 22 Jahre alt und wohnt in Berlin.", fa: "او ۲۲ ساله است و در برلین زندگی می‌کند." },
        { de: "Mein Bruder hat ein Auto.", fa: "برادرم ماشین دارد." },
        { de: "Meine Schwester hat eine Katze.", fa: "خواهرم گربه دارد." },
        { de: "Wir haben zusammen Spaß.", fa: "با هم خوش می‌گذرانیم." }
      ],
      questions: [
        { question: "علی چند ساله است و اهل کجاست؟", answer: "۲۸ ساله و اهل ایران است." },
        { question: "پدر و مادر علی چه نام دارند و چه کاره هستند؟", answer: "پدرش حسن (مهندس) و مادرش فاطمه (معلم) است." },
        { question: "برادر علی چند ساله است و چه کاره است؟", answer: "رضاست، ۲۵ ساله و دانشجوست." },
        { question: "خواهر علی کجا زندگی می‌کند؟", answer: "در برلین زندگی می‌کند." },
        { question: "برادر و خواهر علی چه چیزهایی دارند؟", answer: "برادرش ماشین دارد و خواهرش گربه دارد." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن توصیف خانواده (Familienbeschreibung)",
      prompt: "با استفاده از ضمایر ملکی و افعال sein/haben، خانواده خود را توصیف کنید.",
      steps: [
        {
          title: "معرفی کلی",
          text: "نام و سن خود را بگویید و خانواده را معرفی کنید.",
          example: { de: "Ich heiße Sara und bin 25 Jahre alt. Meine Familie ist klein.", fa: "نام من ساراست و ۲۵ ساله‌ام. خانواده من کوچک است." }
        },
        {
          title: "معرفی اعضا",
          text: "هر عضو خانواده را با نام، سن و شغل معرفی کنید.",
          example: { de: "Mein Vater heißt Ahmad. Er ist 50 Jahre alt und ist Arzt.", fa: "پدرم احمد نام دارد. ۵۰ ساله و پزشک است." }
        },
        {
          title: "داشته‌ها و علایق",
          text: "چیزهایی که هر عضو دارد و ویژگی‌هایشان را بگویید.",
          example: { de: "Mein Bruder hat ein Auto. Meine Schwester ist Studentin.", fa: "برادرم ماشین دارد. خواهرم دانشجوست." }
        }
      ],
      modelAnswer: "Ich heiße Neda und bin 26 Jahre alt. Meine Familie ist groß. Mein Vater heißt Ali und ist 55 Jahre alt. Er ist Ingenieur. Meine Mutter heißt Maryam und ist 50 Jahre alt. Sie ist Lehrerin. Ich habe zwei Brüder. Mein Bruder heißt Reza. Er ist 28 Jahre alt und hat ein Auto. Mein anderer Bruder heißt Amir. Er ist 22 Jahre alt und ist Student. Meine Schwester heißt Sara. Sie ist 20 Jahre alt und wohnt in München. Wir haben zusammen Spaß."
    }
  ],

  listening: [
    {
      title: "۱. خانواده و ضمایر ملکی (A1 hören)",
      instruction: "تمرین شنیداری:\n۱. جملات را بشنوید و ضمیر ملکی را تشخیص دهید.\n۲. مشخص کنید هر ضمیر ملکی مال کیست.\n۳. جملات را با صدای بلند تکرار کنید.",
      sentences: [
        { de: "Mein Vater ist Arzt.", fa: "پدرم پزشک است.", tts: "Mein Vater ist Arzt." },
        { de: "Deine Mutter ist Lehrerin.", fa: "مادرت معلم است.", tts: "Deine Mutter ist Lehrerin." },
        { de: "Sein Bruder ist Student.", fa: "برادرش دانشجوست.", tts: "Sein Bruder ist Student." },
        { de: "Ihre Schwester wohnt in Berlin.", fa: "خواهرش در برلین زندگی می‌کند.", tts: "Ihre Schwester wohnt in Berlin." },
        { de: "Unser Haus ist groß.", fa: "خانه ما بزرگ است.", tts: "Unser Haus ist groß." },
        { de: "Euer Auto ist neu.", fa: "ماشین شماها نو است.", tts: "Euer Auto ist neu." }
      ]
    }
  ],

  speaking: [
    {
      title: "تمرین معرفی خانواده",
      pattern: "- Hast du Geschwister?\n- Ja, ich habe einen Bruder und eine Schwester.\n- Wie heißt dein Bruder?\n- Er heißt Reza. Er ist Student.\n- Und deine Schwester?\n- Sie heißt Sara. Sie ist Lehrerin. Sie hat ein Kind.",
      exercise: "این مکالمه را با صدای بلند تمرین کنید.\nگام ۱: بخش pattern را بشنوید.\nگام ۲: جاهای خالی را با اطلاعات واقعی خانواده خود پر کنید.\nگام ۳: بدون نگاه کردن به متن، خانواده خود را معرفی کنید."
    }
  ],

  cultureTip: "در فرهنگ آلمانی، خانواده هسته‌ای (پدر، مادر، فرزندان) اهمیت بیشتری نسبت به خانواده گسترده دارد. آلمانی‌ها معمولاً از ۱۸ سالگی مستقل می‌شوند و از خانواده جدا می‌شوند. نکته جالب: در آلمان، برخلاف ایران، پرسیدن سن خانم‌ها بی‌ادبی تلقی نمی‌شود و مردم معمولاً سن خود را بدون مشکل می‌گویند. همچنین نام‌های خانوادگی آلمانی اغلب از شغل‌ها (Müller=آسیابان، Schmidt=آهنگر) یا مکان‌ها گرفته شده‌اند.",

  examData: {
    questions: [
      {
        question: "ضمیر ملکی صحیح برای «das Buch» (کتاب - خنثی) متعلق به «من» چیست؟",
        options: ["mein Buch", "meine Buch", "meinen Buch"],
        answer: 0
      },
      {
        question: "«euer» وقتی -e اضافه می‌شود چه تغییری می‌کند؟",
        options: ["euere", "eure", "euren"],
        answer: 1
      },
      {
        question: "در جمله خبری، فعل در کجا قرار می‌گیرد؟",
        options: ["جایگاه ۱", "جایگاه ۲", "جایگاه ۳", "آخر جمله"],
        answer: 1
      },
      {
        question: "کدام ضمیر ملکی همیشه با حرف بزرگ نوشته می‌شود؟",
        options: ["mein", "ihr", "Ihr", "sein"],
        answer: 2
      },
      {
        question: "ضمیر ملکی صحیح برای «die Mutter» (مادر) مال «او (مذکر)» چیست؟",
        options: ["seine Mutter", "sein Mutter", "ihre Mutter"],
        answer: 0
      },
      {
        question: "کدام گزینه نظم کلمات صحیح دارد؟",
        options: ["Heute ich bin müde.", "Heute bin ich müde.", "Ich bin heute müde."],
        answer: 1
      },
      {
        question: "«meine Kinder» یعنی چه؟",
        options: ["بچه تو", "بچه من", "بچه او"],
        answer: 1
      },
      {
        question: "ضمیر ملکی مال «ما» برای اسم مؤنث چیست؟",
        options: ["unser", "unsere", "unseren"],
        answer: 1
      },
      {
        question: "کدام جمله صحیح است؟",
        options: ["Mein Vater ist Ingenieur.", "Meine Vater ist Ingenieur.", "Meinen Vater ist Ingenieur."],
        answer: 0
      },
      {
        question: "در جمله «Heute bin ich müde» کدام کلمه در جایگاه ۱ است؟",
        options: ["bin", "ich", "Heute", "müde"],
        answer: 2
      }
    ]
  }
};
