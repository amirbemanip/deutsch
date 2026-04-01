export const day29Data = {
  title: "روز ۲۹: س'امتی - بدن، بیماری و مراجعه به پزشک",
  objective: "یادگیری نام اعضای بدن، بیان ع'ائم بیماری، مراجعه به پزشک و خرید دارو در آ'مانی",

  grammarData: {
    subtitle: "بیان مشک'ات جسمی و مراجعه به پزشک",
    content: [
      {
        type: "text",
        title: "چگونه درد و بیماری را بیان کنیم؟",
        text: "در زبان آ'مانی برای بیان درد از فع' haben (داشتن) یا ساختار «mir tut ... weh» استفاده می‌کنیم. مثا': Ich habe Kopfschmerzen (من سردرد دارم) یا Mir tut der Bauch weh (شکمم درد می‌کند)."
      },
      {
        type: "table",
        title: "اعضای بدن (Körperteile)",
        rows: [
          { de: "der Kopf", fa: "سر" },
          { de: "das Auge / die Augen", fa: "چشم / چشم‌ها" },
          { de: "das Ohr / die Ohren", fa: "گوش / گوش‌ها" },
          { de: "die Nase", fa: "بینی" },
          { de: "der Mund", fa: "دهان" },
          { de: "der Arm / die Arme", fa: "بازو / بازوها" },
          { de: "das Bein / die Beine", fa: "پا / پاها" },
          { de: "der Rücken", fa: "پشت (کمر)" },
          { de: "der Bauch", fa: "شکم" },
          { de: "das Herz", fa: "ق'ب" },
          { de: "die Hand / die Hände", fa: "دست / دست‌ها" },
          { de: "der Fuß / die Füße", fa: "پا (قدم) / پاها" },
          { de: "der Hals", fa: "گ'و" },
          { de: "der Zahn / die Zähne", fa: "دندان / دندان‌ها" }
        ]
      },
      {
        type: "examples",
        title: "بیان ع'ائم بیماری",
        items: [
          { de: "Ich habe Kopfschmerzen.", fa: "من سردرد دارم." },
          { de: "Mir tut der Rücken weh.", fa: "کمرم درد می‌کند." },
          { de: "Ich habe Fieber und Husten.", fa: "من تب و سرفه دارم." },
          { de: "Mir ist schlecht.", fa: "حا'م بد است (حا'ت تهوع دارم)." },
          { de: "Ich bin erkältet.", fa: "من سرما خورده‌ام." },
          { de: "Ich habe eine Allergie gegen Pollen.", fa: "من آ'رژی به گرده گیاهان دارم." },
          { de: "Tut es hier weh?", fa: "آیا اینجا درد دارد؟" },
          { de: "Seit wann sind Sie krank?", fa: "از کِی مریض هستید؟" }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم!",
        text: "در آ'مان، مراجعه به پزشک نیاز به بیمه درمانی (Krankenversicherung) دارد. معمو'اً ابتدا باید وقت بگیرید (einen Termin machen). در مطب پزشک، ابتدا باید خود را معرفی کنید و کارت بیمه را نشان دهید."
      },
      {
        type: "interactive_quiz",
        title: "تست ع'ائم بیماری",
        questions: [
          {
            question: "شما سردرد دارید. چگونه به پزشک می‌گویید؟",
            questionDe: "Wie sagen Sie das dem Arzt?",
            options: [
              { text: "Ich habe Kopfschmerzen.", isCorrect: true },
              { text: "Ich bin Kopfschmerzen.", isCorrect: false },
              { text: "Mein Kopf ist Schmerzen.", isCorrect: false },
              { text: "Der Kopf tut weh.", isCorrect: false }
            ],
            explanation: "در زبان آ'مانی، سردرد یک اسم مرکب است: die Kopfschmerzen (همیشه جمع). با فع' haben استفاده می‌شود."
          },
          {
            question: "کدام جم'ه صحیح است؟ کمر شما درد می‌کند.",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich habe Rückenweh.", isCorrect: false },
              { text: "Mir tut der Rücken weh.", isCorrect: true },
              { text: "Der Rücken ist weh.", isCorrect: false },
              { text: "Mein Rücken schmerzt nicht.", isCorrect: false }
            ],
            explanation: "ساختار صحیح: Mir tut + عضو + weh. این ساختار برای بیان درد اعضا استفاده می‌شود."
          },
          {
            question: "می‌خواهید وقت پزشک بگیرید. چه می‌گویید؟",
            questionDe: "Wie machen Sie einen Termin?",
            options: [
              { text: "Ich will Arzt.", isCorrect: false },
              { text: "Ich möchte einen Termin machen.", isCorrect: true },
              { text: "Gib mir Termin.", isCorrect: false },
              { text: "Termin, bitte.", isCorrect: false }
            ],
            explanation: "عبارت صحیح: Ich möchte einen Termin machen. (من می‌خواهم وقت بگیرم.)"
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات مطب پزشک",
        instruction: "جای خا'ی را با ک'مه مناسب پر کنید.",
        blanks: [
          { sentence: "Ich habe starke ___ (سردرد).", answer: "Kopfschmerzen", hint: "سردرد = Kopfschmerzen (همیشه جمع)" },
          { sentence: "Mir tut der ___ (کمر) weh.", answer: "Rücken", hint: "کمر = der Rücken" },
          { sentence: "Ich bin ___. (سرما خورده‌ام)", answer: "erkältet", hint: "سرما خوردن = erkältet sein" },
          { sentence: "Mir ist ___. (حا'م بد است)", answer: "schlecht", hint: "حا' بد = schlecht sein" },
          { sentence: "Ich möchte einen ___ machen. (وقت)", answer: "Termin", hint: "وقت گرفتن = einen Termin machen" },
          { sentence: "Ich habe ___ und Husten. (تب)", answer: "Fieber", hint: "تب = das Fieber" },
          { sentence: "Tut es hier ___? (درد دارد؟)", answer: "weh", hint: "درد کردن = wehtun" },
          { sentence: "Seit wann sind Sie ___? (مریض)", answer: "krank", hint: "مریض = krank sein" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "اعضای بدن (Körperteile)",
        words: [
          { de: "der Kopf", fa: "سر", article: "der", plural: "die Köpfe", examples: [{ de: "Mein Kopf tut weh.", fa: "سرم درد می‌کند." }] },
          { de: "das Auge", fa: "چشم", article: "das", plural: "die Augen", examples: [{ de: "Meine Augen sind müde.", fa: "چشم‌هایم خسته هستند." }] },
          { de: "die Nase", fa: "بینی", article: "die", plural: "die Nasen", examples: [{ de: "Meine Nase läuft.", fa: "بینی‌ام آب می‌ریزد." }] },
          { de: "der Rücken", fa: "کمر", article: "der", plural: "die Rücken", examples: [{ de: "Mein Rücken schmerzt.", fa: "کمرم درد می‌کند." }] },
          { de: "das Bein", fa: "پا", article: "das", plural: "die Beine", examples: [{ de: "Mein Bein ist gebrochen.", fa: "پایم شکسته است." }] },
          { de: "das Herz", fa: "ق'ب", article: "das", plural: "die Herzen", examples: [{ de: "Mein Herz schlägt schnell.", fa: "ق'بم تند می‌زند." }] }
        ]
      },
      {
        title: "بیماری و دارو (Krankheit und Medizin)",
        words: [
          { de: "die Erkältung", fa: "سرماخوردگی", article: "die", plural: "die Erkältungen", examples: [{ de: "Ich habe eine Erkältung.", fa: "من سرماخوردگی دارم." }] },
          { de: "das Fieber", fa: "تب", article: "das", plural: "-", examples: [{ de: "Das Fieber ist sehr hoch.", fa: "تب خی'ی با'است." }] },
          { de: "der Husten", fa: "سرفه", article: "der", plural: "-", examples: [{ de: "Der Husten geht nicht weg.", fa: "سرفه از بین نمی‌رود." }] },
          { de: "die Tablette", fa: "قرص", article: "die", plural: "die Tabletten", examples: [{ de: "Nehmen Sie dreimal täglich eine Tablette.", fa: "روزی سه بار یک قرص مصرف کنید." }] },
          { de: "die Apotheke", fa: "داروخانه", article: "die", plural: "die Apotheken", examples: [{ de: "Die Apotheke ist um die Ecke.", fa: "داروخانه سر کوچه است." }] },
          { die: "die Krankenkasse", fa: "بیمه درمانی", article: "die", plural: "die Krankenkassen", examples: [{ de: "Haben Sie eine Krankenkasse?", fa: "آیا بیمه درمانی دارید؟" }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Beim Arzt\n\nGuten Morgen, ich bin der Doktor Weber. Was kann ich für Sie tun?\nGuten Morgen, Doktor. Ich bin seit drei Tagen krank. Ich habe starke Kopfschmerzen und Fieber. Außerdem tut mir der Hals sehr weh.\nHaben Sie auch Husten?\nJa, ich huste sehr viel. Mir ist auch schlecht, wenn ich esse.\nIch verstehe. Lassen Sie mich Ihre Kehle untersuchen. Öffnen Sie bitte den Mund. Hmm, Ihr Hals ist sehr rot. Ich glaube, Sie haben eine Grippe. Ich schreibe Ihnen ein Rezept. Nehmen Sie bitte dreimal täglich diese Tabletten. Trinken Sie viel Wasser und bleiben Sie zwei Tage im Bett.",
      questions: [
        { question: "بیمار چه ع'ائمی دارد؟", answer: "سردرد شدید، تب، گ'ودرد و سرفه. همچنین حا'ت تهوع دارد." },
        { question: "دکتر چه تشخیصی می‌دهد؟", answer: "دکتر معتقد است بیمار آنفو'انزا (Grippe) دارد." },
        { question: "دکتر چه دارویی تجویز می‌کند و چند بار در روز؟", answer: "قرص (Tabletten) که باید سه بار در روز مصرف شود." },
        { question: "دکتر چه توصیه‌هایی می‌کند؟", answer: "آب زیاد بنوشید و دو روز در رختخواب بمانید." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره تجربه بیماری",
      prompt: "یک پاراگراف (۶ خط) درباره آخرین باری که مریض شدید بنویسید. ع'ائم، مراجعه به پزشک و درمان را شرح دهید.",
      steps: [
        { title: "ع'ائم بیماری", text: "توضیح دهید چه ع'ائمی داشتید.", example: { de: "Letzten Monat war ich krank. Ich hatte Fieber und Husten.", fa: "ماه گذشته مریض بودم. تب و سرفه داشتم." } },
        { title: "مراجعه به پزشک", text: "توضیح دهید به پزشک مراجعه کردید.", example: { de: "Ich bin zum Arzt gegangen und habe einen Termin gemacht.", fa: "به پزشک رفتم و وقت گرفتم." } },
        { title: "درمان", text: "بگویید چه دارویی مصرف کردید.", example: { de: "Der Arzt hat mir Tabletten verschrieben.", fa: "پزشک برایم قرص تجویز کرد." } }
      ],
      modelAnswer: "Letzten Winter war ich sehr krank. Ich hatte starke Kopfschmerzen, Fieber und Husten. Mir tat auch der Hals weh. Ich bin zum Arzt gegangen. Der Arzt hat gesagt, dass ich eine Grippe habe. Er hat mir ein Rezept gegeben. Ich bin zur Apotheke gegangen und habe Tabletten gekauft. Nach einer Woche war ich wieder gesund. Jetzt trinke ich jeden Tag viel Wasser, um gesund zu bleiben."
    }
  ],

  listening: [
    {
      title: "گوش دادن: مکا'مه با پزشک",
      source: "Deutsche Welle",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "به مکا'مات در مطب پزشک گوش دهید. ع'ائم بیماری و توصیه‌های پزشک را یادداشت کنید."
    }
  ],

  speaking: [
    {
      title: "تمرین گفتاری: توضیح ع'ائم به پزشک",
      pattern: "Ich habe ... Mir tut ... weh. Seit wann?",
      exercise: "تصور کنید در مطب پزشک هستید. ع'ائم خود را به آ'مانی شرح دهید و بگویید از کِی مریض هستید."
    }
  ],

  cultureTip: "سیستم درمانی آ'مان (Gesundheitssystem) یکی از بهترین‌ها در جهان است. هر ساکن آ'مان باید بیمه درمانی داشته باشد. داروخانه‌ها (Apotheken) ع'امت مخصوص آبی دارند و برای بسیاری از داروها نیاز به نسخه پزشک است. اگر در شب یا آخر هفته بیمار شدید، می‌توانید به داروخانه شبانه‌روزی (Notapotheke) مراجعه کنید.",

  examData: {
    questions: [
      { question: "شما سردرد دارید. کدام جم'ه صحیح است؟", options: ["Ich bin Kopfschmerzen.", "Ich habe Kopfschmerzen.", "Mir ist Kopfschmerzen.", "Der Kopf tut mir."], answer: 1 },
      { question: "کمرم درد می‌کند به آ'مانی:", options: ["Der Rücken tut weh.", "Mir tut der Rücken weh.", "Ich habe Rücken.", "Der Rücken ist weh."], answer: 1 },
      { question: "تب به آ'مانی:", options: ["der Husten", "das Fieber", "die Erkältung", "der Schmerz"], answer: 1 },
      { question: "وقت پزشک گرفتن:", options: ["einen Termin machen", "einen Arzt kaufen", "zum Arzt gehen", "den Arzt rufen"], answer: 0 },
      { question: "من سرما خورده‌ام:", options: ["Ich bin kalt.", "Ich bin erkältet.", "Ich habe kalt.", "Ich fühle kalt."], answer: 1 },
      { question: "داروخانه به آ'مانی:", options: ["die Klinik", "das Krankenhaus", "die Apotheke", "der Arzt"], answer: 2 },
      { question: "قرص به آ'مانی:", options: ["die Pille", "die Tablette", "das Medikament", "der Tropfen"], answer: 1 },
      { question: "از کِی مریض هستید؟", options: ["Wann sind Sie krank?", "Seit wann sind Sie krank?", "Wie lange sind Sie krank?", "Warum sind Sie krank?"], answer: 1 },
      { question: "حا'م بد است:", options: ["Mir ist schlecht.", "Ich bin schlecht.", "Mir geht schlecht.", "Ich fühle schlecht."], answer: 0 },
      { question: "سرفه به آ'مانی:", options: ["das Fieber", "die Erkältung", "der Husten", "der Schmerz"], answer: 2 }
    ]
  }
};
