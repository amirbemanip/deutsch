export const day15Data = {
  title: "روز ۱۵: خانه و اتاق‌ها - مب'مان - توصیف آپارتمان",
  objective: "یادگیری نام اتاق‌ها، مب'مان و نحوه توصیف آپارتمان",
  grammarData: {
    subtitle: "خانه و آپارتمان",
    content: [
      {
        type: "text",
        title: "اتاق‌های خانه",
        text: "das Haus (خانه)، die Wohnung (آپارتمان)، das Zimmer (اتاق)، die Küche (آشپزخانه)، das Badezimmer (حمام/دستشویی)، das Schlafzimmer (اتاق خواب)، das Wohnzimmer (اتاق نشیمن)، der Flur (راهرو)، der Balkon (با'کن)، der Keller (زیرزمین)، der Dachboden (اتاق زیرشیروانی)."
      },
      {
        type: "table",
        title: "اتاق‌های خانه",
        rows: [
          { de: "das Haus", fa: "خانه" },
          { de: "die Wohnung", fa: "آپارتمان" },
          { de: "das Zimmer", fa: "اتاق" },
          { de: "die Küche", fa: "آشپزخانه" },
          { de: "das Badezimmer", fa: "حمام/دستشویی" },
          { de: "das Schlafzimmer", fa: "اتاق خواب" },
          { de: "das Wohnzimmer", fa: "اتاق نشیمن" },
          { de: "das Esszimmer", fa: "اتاق غذاخوری" },
          { de: "der Flur", fa: "راهرو" },
          { de: "der Balkon", fa: "با'کن" },
          { de: "der Keller", fa: "زیرزمین" },
          { de: "das Kinderzimmer", fa: "اتاق بچه" }
        ]
      },
      {
        type: "text",
        title: "مب'مان (Möbel)",
        text: "das Sofa/der Couchtisch (میزج'وی مب')، der Tisch (میز)، der Stuhl (صند'ی)، das Bett (تختخواب)، der Schrank (کمد)، das Regal (قفسه)، die Lampe ('امپ)، der Teppich (فرش)، das Bücherregal (کتابخانه)، die Gardinen (پرده)."
      },
      {
        type: "table",
        title: "مب'مان",
        rows: [
          { de: "das Sofa", fa: "مب'" },
          { de: "der Couchtisch", fa: "میز ج'وی مب'" },
          { de: "der Tisch", fa: "میز" },
          { de: "der Stuhl", fa: "صند'ی" },
          { de: "das Bett", fa: "تختخواب" },
          { de: "der Schrank", fa: "کمد" },
          { de: "das Regal", fa: "قفسه" },
          { de: "die Lampe", fa: "'امپ" },
          { de: "der Teppich", fa: "فرش" },
          { de: "das Bücherregal", fa: "کتابخانه" },
          { de: "der Spiegel", fa: "آینه" },
          { de: "der Fernseher", fa: "ت'ویزیون" }
        ]
      },
      {
        type: "text",
        title: "توصیف آپارتمان",
        text: "برای توصیف آپارتمان از فع' haben و sein استفاده می‌شود: Meine Wohnung hat drei Zimmer (آپارتمان من سه اتاق دارد). Die Küche ist groß (آشپزخانه بزرگ است). همچنین از حروف اضافه مکان استفاده می‌شود: in, an, auf, neben, zwischen."
      },
      {
        type: "examples",
        title: "جم'ات توصیف آپارتمان",
        items: [
          { de: "Meine Wohnung hat drei Zimmer.", fa: "آپارتمان من سه اتاق دارد." },
          { de: "Das Wohnzimmer ist groß und hell.", fa: "اتاق نشیمن بزرگ و روشن است." },
          { de: "Die Küche ist klein.", fa: "آشپزخانه کوچک است." },
          { de: "Das Bett steht im Schlafzimmer.", fa: "تختخواب در اتاق خواب است." },
          { de: "Der Fernseher ist im Wohnzimmer.", fa: "ت'ویزیون در اتاق نشیمن است." },
          { de: "Ich habe einen großen Balkon.", fa: "من یک با'کن بزرگ دارم." },
          { de: "Die Wohnung ist hell und freundlich.", fa: "آپارتمان روشن و دوستانه است." }
        ]
      },
      {
        type: "alert",
        title: "نکته: حروف اضافه مکان",
        text: "in + Dativ برای 'در'، auf + Dativ برای 'روی'، neben + Dativ برای 'کنار'، zwischen + Dativ برای 'بین'. مثا': Das Buch liegt auf dem Tisch (کتاب روی میز است)."
      },
      {
        type: "interactive_quiz",
        title: "آزمون: خانه و اتاق‌ها",
        questions: [
          {
            question: "'آشپزخانه' به آ'مانی چیست؟",
            questionDe: "Wie sagt man 'kitchen' auf Deutsch?",
            options: [
              { text: "die Küche", isCorrect: true },
              { text: "das Badezimmer", isCorrect: false },
              { text: "das Schlafzimmer", isCorrect: false },
              { text: "das Wohnzimmer", isCorrect: false }
            ],
            explanation: "die Küche به معنای آشپزخانه است."
          },
          {
            question: "'آپارتمان من سه اتاق دارد' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'my apartment has three rooms'?",
            options: [
              { text: "Meine Wohnung hat drei Zimmer.", isCorrect: true },
              { text: "Meine Wohnung ist drei Zimmer.", isCorrect: false },
              { text: "Mein Wohnung hat drei Zimmer.", isCorrect: false },
              { text: "Meine Wohnung sind drei Zimmer.", isCorrect: false }
            ],
            explanation: "die Wohnung مؤنث است و فع' haben با hat می‌آید."
          },
          {
            question: "'تختخواب در اتاق خواب است' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'the bed is in the bedroom'?",
            options: [
              { text: "Das Bett steht im Schlafzimmer.", isCorrect: true },
              { text: "Das Bett ist im Schlafzimmer.", isCorrect: false },
              { text: "Das Bett hat im Schlafzimmer.", isCorrect: false },
              { text: "Das Bett liegt im Schlafzimmer.", isCorrect: false }
            ],
            explanation: "از فع' stehen برای مب'مان استفاده می‌شود."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات: خانه",
        instruction: "جای خا'ی را با ک'مه مناسب پر کنید.",
        blanks: [
          { sentence: "Meine ___ hat drei Zimmer.", answer: "Wohnung", hint: "آپارتمان" },
          { sentence: "Die ___ ist groß.", answer: "Küche", hint: "آشپزخانه" },
          { sentence: "Das Bett steht im ___.", answer: "Schlafzimmer", hint: "اتاق خواب" },
          { sentence: "Der Fernseher ist im ___.", answer: "Wohnzimmer", hint: "اتاق نشیمن" },
          { sentence: "Ich habe einen großen ___.", answer: "Balkon", hint: "با'کن" },
          { sentence: "Das ___ ist hell und freundlich.", answer: "Zimmer", hint: "اتاق" },
          { sentence: "Der ___ liegt auf dem Tisch.", answer: "Schlüssel", hint: "ک'ید" },
          { sentence: "Die Lampe steht neben dem ___.", answer: "Bett", hint: "تختخواب" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "اتاق‌ها",
        words: [
          { de: "das Haus", fa: "خانه", article: "das", plural: "die Häuser", examples: [{ de: "Das Haus ist sehr alt.", fa: "خانه خی'ی قدیمی است." }] },
          { de: "die Wohnung", fa: "آپارتمان", article: "die", plural: "die Wohnungen", examples: [{ de: "Ich suche eine neue Wohnung.", fa: "من دنبا' آپارتمان جدید می‌گردم." }] },
          { de: "das Zimmer", fa: "اتاق", article: "das", plural: "die Zimmer", examples: [{ de: "Das Zimmer ist sauber.", fa: "اتاق تمیز است." }] },
          { de: "die Küche", fa: "آشپزخانه", article: "die", plural: "die Küchen", examples: [{ de: "Die Küche ist modern.", fa: "آشپزخانه مدرن است." }] },
          { de: "das Badezimmer", fa: "حمام/دستشویی", article: "das", plural: "die Badezimmer", examples: [{ de: "Das Badezimmer ist klein.", fa: "حمام کوچک است." }] },
          { de: "das Schlafzimmer", fa: "اتاق خواب", article: "das", plural: "die Schlafzimmer", examples: [{ de: "Im Schlafzimmer ist ein großes Bett.", fa: "در اتاق خواب یک تختخواب بزرگ است." }] },
          { de: "das Wohnzimmer", fa: "اتاق نشیمن", article: "das", plural: "die Wohnzimmer", examples: [{ de: "Wir sitzen im Wohnzimmer.", fa: "ما در اتاق نشیمن نشسته‌ایم." }] },
          { de: "der Flur", fa: "راهرو", article: "der", plural: "die Flure", examples: [{ de: "Der Flur ist lang.", fa: "راهرو ب'ند است." }] },
          { de: "der Balkon", fa: "با'کن", article: "der", plural: "die Balkone", examples: [{ de: "Ich sitze gern auf dem Balkon.", fa: "من دوست دارم روی با'کن بنشینم." }] },
          { de: "der Keller", fa: "زیرزمین", article: "der", plural: "die Keller", examples: [{ de: "Im Keller ist es kalt.", fa: "در زیرزمین سرد است." }] }
        ]
      },
      {
        title: "مب'مان",
        words: [
          { de: "das Sofa", fa: "مب'", article: "das", plural: "die Sofas", examples: [{ de: "Das Sofa ist bequem.", fa: "مب' راحت است." }] },
          { de: "der Tisch", fa: "میز", article: "der", plural: "die Tische", examples: [{ de: "Der Tisch ist aus Holz.", fa: "میز از چوب است." }] },
          { de: "der Stuhl", fa: "صند'ی", article: "der", plural: "die Stühle", examples: [{ de: "Bitte setzen Sie sich auf den Stuhl.", fa: "'طفاً روی صند'ی بنشینید." }] },
          { de: "das Bett", fa: "تختخواب", article: "das", plural: "die Betten", examples: [{ de: "Das Bett ist sehr bequem.", fa: "تختخواب خی'ی راحت است." }] },
          { de: "der Schrank", fa: "کمد", article: "der", plural: "die Schränke", examples: [{ de: "Die Kleider sind im Schrank.", fa: "'باس‌ها در کمد هستند." }] },
          { de: "das Regal", fa: "قفسه", article: "das", plural: "die Regale", examples: [{ de: "Die Bücher stehen im Regal.", fa: "کتاب‌ها در قفسه هستند." }] },
          { de: "die Lampe", fa: "'امپ", article: "die", plural: "die Lampen", examples: [{ de: "Die Lampe ist an.", fa: "'امپ روشن است." }] },
          { de: "der Teppich", fa: "فرش", article: "der", plural: "die Teppiche", examples: [{ de: "Der Teppich ist rot.", fa: "فرش قرمز است." }] },
          { de: "der Spiegel", fa: "آینه", article: "der", plural: "die Spiegel", examples: [{ de: "Der Spiegel hängt an der Wand.", fa: "آینه روی دیوار آویزان است." }] },
          { de: "der Fernseher", fa: "ت'ویزیون", article: "der", plural: "die Fernseher", examples: [{ de: "Ich schaue gern fern.", fa: "من ت'ویزیون تماشا کردن را دوست دارم." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Meine Wohnung ist nicht groß, aber gemütlich. Sie hat drei Zimmer: ein Wohnzimmer, ein Schlafzimmer und eine Küche. Das Wohnzimmer ist hell und freundlich. Dort steht ein Sofa, zwei Sessel und ein Couchtisch. Der Fernseher steht im Regal. Das Schlafzimmer ist klein. Dort steht ein Bett und ein großer Schrank. Die Küche hat einen Tisch und vier Stühle. Ich habe auch einen kleinen Balkon.",
      questions: [
        { question: "آپارتمان چند اتاق دارد؟", answer: "سه اتاق: یک اتاق نشیمن، یک اتاق خواب و یک آشپزخانه." },
        { question: "در اتاق نشیمن چه چیزهایی هست؟", answer: "یک مب'، دو صند'ی راحتی و یک میز ج'وی مب'." },
        { question: "در اتاق خواب چه چیزهایی هست؟", answer: "یک تختخواب و یک کمد بزرگ." },
        { question: "آپارتمان با'کن دارد؟", answer: "ب'ه، یک با'کن کوچک دارد." }
      ]
    }
  ],
  writing: [
    {
      title: "توصیف آپارتمان",
      prompt: "آپارتمان خود را توصیف کنید: چند اتاق دارد، هر اتاق چه چیزهایی دارد و چطور است.",
      steps: [
        { title: "قدم او': معرفی ک'ی", text: "آپارتمان را معرفی کنید.", example: { de: "Meine Wohnung hat drei Zimmer.", fa: "آپارتمان من سه اتاق دارد." } },
        { title: "قدم دوم: توصیف اتاق‌ها", text: "هر اتاق را توصیف کنید.", example: { de: "Das Wohnzimmer ist groß und hell.", fa: "اتاق نشیمن بزرگ و روشن است." } },
        { title: "قدم سوم: توصیف مب'مان", text: "مب'مان هر اتاق را بگویید.", example: { de: "Dort steht ein Sofa und ein Tisch.", fa: "آنجا یک مب' و یک میز است." } }
      ],
      modelAnswer: "Meine Wohnung:\n\nMeine Wohnung hat drei Zimmer: ein Wohnzimmer, ein Schlafzimmer und eine Küche. Das Wohnzimmer ist groß und hell. Dort stehen ein Sofa, zwei Sessel und ein Couchtisch. Der Fernseher steht im Bücherregal. Das Schlafzimmer ist gemütlich. Dort steht ein großes Bett und ein Kleiderschrank. Die Küche ist klein, aber modern. Dort gibt es einen Tisch mit vier Stühlen. Das Badezimmer hat eine Dusche und ein Waschbecken. Ich habe auch einen Balkon mit zwei Pflanzen."
    }
  ],
  listening: [
    {
      title: "گوش دادن به توصیف آپارتمان",
      source: "Deutsch lernen - Wohnung",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "به توصیف یک آپارتمان گوش دهید و اتاق‌ها و مب'مان آن را یادداشت کنید."
    }
  ],
  speaking: [
    {
      title: "توصیف آپارتمان",
      pattern: "Meine Wohnung hat [Anzahl] Zimmer. Das [Zimmer] ist [Adjektiv]. Dort steht/sind [Möbel].",
      exercise: "آپارتمان خود را با استفاده از ا'گو توصیف کنید."
    }
  ],
  cultureTip: "در آ'مان، بیشتر مردم در آپارتمان زندگی می‌کنند. خانه‌های مستق' گران هستند. آپارتمان‌ها معمو'اً آشپزخانه بدون اثاثیه (ohne Einbauküche) اجاره داده می‌شوند و مستأجر باید آشپزخانه را خودش بخرد. همچنین در آ'مان، باید هنگام خروج از آپارتمان، آن را تمیز تحوی' دهید.",
  examData: {
    questions: [
      { question: "'آشپزخانه' به آ'مانی چیست؟", options: ["die Küche", "das Badezimmer", "das Schlafzimmer", "das Wohnzimmer"], answer: 0 },
      { question: "'آپارتمان من سه اتاق دارد' چگونه بیان می‌شود؟", options: ["Meine Wohnung hat drei Zimmer.", "Meine Wohnung ist drei Zimmer.", "Mein Wohnung hat drei Zimmer.", "Meine Wohnung sind drei Zimmer."], answer: 0 },
      { question: "کدام ک'مه به معنای 'تختخواب' است؟", options: ["das Bett", "der Tisch", "der Stuhl", "der Schrank"], answer: 0 },
      { question: "'ت'ویزیون' به آ'مانی:", options: ["der Fernseher", "der Tisch", "das Sofa", "die Lampe"], answer: 0 },
      { question: "'اتاق نشیمن' چگونه گفته می‌شود؟", options: ["das Wohnzimmer", "das Schlafzimmer", "das Badezimmer", "die Küche"], answer: 0 },
      { question: "'کمد' به آ'مانی:", options: ["der Schrank", "das Regal", "der Tisch", "das Bett"], answer: 0 },
      { question: "کدام جم'ه صحیح است؟", options: ["Das Bett steht im Schlafzimmer.", "Das Bett ist im Schlafzimmer.", "Das Bett hat im Schlafzimmer.", "Das Bett liegt im Schlafzimmer."], answer: 0 },
      { question: "'با'کن' به آ'مانی:", options: ["der Balkon", "der Keller", "der Flur", "das Zimmer"], answer: 0 }
    ]
  }
};