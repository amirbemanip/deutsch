export const day16Data = {
  title: "روز ۱۶: خانه + اتاق‌ها + مبلمان",
  objective: "در پایان این روز، شما می‌توانید خانه و اتاق‌ها را توصیف کنید و مبلمان را نام ببرید.",
  level: "A1",
  grammarData: {
    subtitle: "خانه و مبلمان",
    content: [
      {
        type: "text",
        title: "اتاق‌های خانه",
        text: "در آلمانی برای توصیف خانه از کلمات زیر استفاده می‌کنیم: das Haus (خانه)، die Wohnung (آپارتمان)، das Zimmer (اتاق)، die Küche (آشپزخانه)، das Badezimmer (حمام)، das Schlafzimmer (اتاق خواب)، das Wohnzimmer (اتاق نشیمن)، der Flur (راهرو)، der Balkon (بالکن)، der Keller (زیرزمین)."
      },
      {
        type: "table",
        title: "اتاق‌ها",
        rows: [
          { de: "die Küche [ˈkʏçə]", fa: "آشپزخانه" },
          { de: "das Schlafzimmer", fa: "اتاق خواب" },
          { de: "das Badezimmer", fa: "حمام / دستشویی" },
          { de: "das Wohnzimmer", fa: "اتاق نشیمن" },
          { de: "das Arbeitszimmer", fa: "اتاق کار" },
          { de: "der Flur [fluːɐ̯]", fa: "راهرو" },
          { de: "der Balkon [balˈkɔ̃]", fa: "بالکن" },
          { de: "die Terrasse [tɛˈʁasə]", fa: "تراس" },
          { de: "der Keller [ˈkɛlɐ̯]", fa: "زیرزمین" },
          { de: "der Dachboden", fa: "اتاق زیرشیروانی" }
        ]
      },
      {
        type: "table",
        title: "مبلمان",
        rows: [
          { de: "das Bett [bɛt]", fa: "تخت" },
          { de: "der Schrank [ʃʁaŋk]", fa: "کمد" },
          { de: "der Tisch [tɪʃ]", fa: "میز" },
          { de: "der Stuhl [ʃtuːl]", fa: "صندلی" },
          { de: "die Couch [kaʊtʃ]", fa: "مبل" },
          { de: "der Sessel [ˈzɛsəl]", fa: "نشیمن" },
          { de: "die Lampe [ˈlampə]", fa: "چراغ" },
          { de: "der Teppich [ˈtɛpɪç]", fa: "فرش" },
          { de: "der Schrank", fa: "کمد" },
          { de: "die Kommode [kɔˈmoːdə]", fa: "کشوئی" }
        ]
      },
      {
        type: "text",
        title: "توصیف آپارتمان",
        text: "برای توصیف آپارتمان می‌گوییم: Meine Wohnung ist groß/klein (آپارتمانم بزرگ/کوچک است). Ich wohne in einer neuen Wohnung (در آپارتمان جدید زندگی می‌کنم). Die Wohnung hat drei Zimmer (سه اتاق دارد). Die Miete ist teuer/günstig ( اجاره گران/ارزان است)."
      },
      {
        type: "examples",
        title: "مثال‌های توصیف خانه",
        items: [
          { de: "Mein Zimmer ist klein.", fa: "اتاقم کوچک است." },
          { de: "Die Küche ist neu.", fa: "آشپزخانه جدید است." },
          { de: "Ich wohne in einer großen Wohnung.", fa: "در آپارتمان بزرگ زندگی می‌کنم." },
          { de: "Das Schlafzimmer ist im ersten Stock.", fa: "اتاق خواب در طبقه اول است." },
          { de: "Der Balkon ist sehr schön.", fa: "بالکن خیلی زیباست." }
        ]
      },
      {
        type: "alert",
        title: "توجه: طبقات",
        text: "در آلمانی طبقات این‌گونه هستند: Erdgeschoss (طبقه همکف)، erster Stock (طبقه اول)، zweiter Stock (طبقه دوم). توجه کنید که در آلمانی طبقه اول = همکف نیست!"
      },
      {
        type: "fill_blank",
        title: "تمرین: خانه و مبلمان",
        instruction: "جملات را کامل کنید.",
        blanks: [
          { sentence: "Die ___ ist neben dem Schlafzimmer.", answer: "Küche", hint: "آشپزخانه" },
          { sentence: "Ich schlafe im ___.", answer: "Schlafzimmer", hint: "اتاق خواب" },
          { sentence: "Das ___ ist im Wohnzimmer.", answer: "Bett", hint: "تخت" },
          { sentence: "Ich sitze auf dem ___.", answer: "Stuhl", hint: "صندلی" },
          { sentence: "Die ___ hängt an der Wand.", answer: "Lampe", hint: "چراغ" },
          { sentence: "Mein ___ ist unter dem Balkon.", answer: "Keller", hint: "زیرزمین" },
          { sentence: "Der ___ hat vier Beine.", answer: "Tisch", hint: "میز" },
          { sentence: "Wohnst du in einer ___?", answer: "Wohnung", hint: "آپارتمان" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: خانه",
        questions: [
          {
            question: "«آشپزخانه» چیست؟",
            questionDe: "Wie heißt \"Kitchen\" auf Deutsch?",
            options: [
              { text: "die Küche", isCorrect: true },
              { text: "die Küchen", isCorrect: false },
              { text: "der Küche", isCorrect: false },
              { text: "Küche", isCorrect: false }
            ],
            explanation: "کلمه Küche مؤنث است و با die می‌آید."
          },
          {
            question: "«تخت» چیست؟",
            questionDe: "Wie heißt \"Bett\"?",
            options: [
              { text: "das Bett", isCorrect: true },
              { text: "der Bett", isCorrect: false },
              { text: "die Bett", isCorrect: false },
              { text: "ein Bett", isCorrect: false }
            ],
            explanation: "Bett خنثی است."
          },
          {
            question: "«بالکن» چیست؟",
            questionDe: "Wie heißt \"Balkon\"?",
            options: [
              { text: "der Balkon", isCorrect: true },
              { text: "die Balkon", isCorrect: false },
              { text: "das Balkon", isCorrect: false },
              { text: "Balkon", isCorrect: false }
            ],
            explanation: "Balkon مذکر است."
          },
          {
            question: "کدام برای «صندلی» نیست؟",
            questionDe: "Welches ist kein Stuhl?",
            options: [
              { text: "der Tisch", isCorrect: true },
              { text: "der Stuhl", isCorrect: false },
              { text: "der Sessel", isCorrect: false },
              { text: "der Hocker", isCorrect: false }
            ],
            explanation: "میز = der Tisch"
          }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "اتاق‌ها",
        words: [
          { de: "die Wohnung", fa: "آپارتمان", article: "die", plural: "die Wohnungen", ipa: "[ˈvɔnʊŋ]", examples: [{ de: "Ich wohne in einer neuen Wohnung.", fa: "در آپارتمان جدید زندگی می‌کنم." }] },
          { de: "das Haus", fa: "خانه", article: "das", plural: "die Häuser", ipa: "[haʊs]", examples: [{ de: "Das Haus ist groß.", fa: "خانه بزرگ است." }] },
          { de: "das Zimmer", fa: "اتاق", article: "das", plural: "die Zimmer", ipa: "[ˈtsɪmɐ̯]", examples: [{ de: "Ich habe ein eigenes Zimmer.", fa: "یک اتاق شخصی دارم." }] },
          { de: "die Küche", fa: "آشپزخانه", article: "die", plural: "die Küchen", ipa: "[ˈkʏçə]", examples: [{ de: "Die Küche ist modern.", fa: "آشپزخانه مدرن است." }] },
          { de: "das Badezimmer", fa: "حمام", article: "das", plural: "die Badezimmer", ipa: "[ˈbaːdətsɪmɐ̯]", examples: [{ de: "Das Badezimmer ist klein.", fa: "حمام کوچک است." }] },
          { de: "das Schlafzimmer", fa: "اتاق خواب", article: "das", plural: "die Schlafzimmer", ipa: "[ˈʃlaːftsɪmɐ̯]", examples: [{ de: "Das Schlafzimmer ist im zweiten Stock.", fa: "اتاق خواب در طبقه دوم است." }] },
          { de: "das Wohnzimmer", fa: "اتاق نشیمن", article: "das", plural: "die Wohnzimmer", ipa: "[ˈvɔntsɪmɐ̯]", examples: [{ de: "Das Wohnzimmer ist gemütlich.", fa: "اتاق نشیمن راحت است." }] },
          { de: "der Flur", fa: "راهرو", article: "der", plural: "die Flure", ipa: "[fluːɐ̯]", examples: [{ de: "Der Flur ist lang.", fa: "راهرو بلند است." }] },
          { de: "der Balkon", fa: "بالکن", article: "der", plural: "die Balkone/Balkons", ipa: "[balˈkɔ̃]", examples: [{ de: "Der Balkon hat einen schönen Ausblick.", fa: "بالکن چشم‌انداز زیبایی دارد." }] },
          { de: "der Keller", fa: "زیرزمین", article: "der", plural: "die Keller", ipa: "[ˈkɛlɐ̯]", examples: [{ de: "Der Keller ist dunkel.", fa: "زیرزمین تاریک است." }] }
        ]
      },
      {
        title: "مبلمان",
        words: [
          { de: "das Bett", fa: "تخت", article: "das", plural: "die Betten", ipa: "[bɛt]", examples: [{ de: "Das Bett ist bequem.", fa: "تخت راحت است." }] },
          { de: "der Schrank", fa: "کمد", article: "der", plural: "die Schränke", ipa: "[ʃʁaŋk]", examples: [{ de: "Der Schrank ist voll.", fa: "کمد پر است." }] },
          { de: "der Tisch", fa: "میز", article: "der", plural: "die Tische", ipa: "[tɪʃ]", examples: [{ de: "Der Tisch ist aus Holz.", fa: "میز چوبی است." }] },
          { de: "der Stuhl", fa: "صندلی", article: "der", plural: "die Stühle", ipa: "[ʃtuːl]", examples: [{ de: "Der Stuhl ist kaputt.", fa: "صندلی خراب است." }] },
          { de: "die Couch", fa: "مبل", article: "die", plural: "die Couches", ipa: "[kaʊtʃ]", examples: [{ de: "Die Couch ist weich.", fa: "مبل نرم است." }] },
          { de: "die Lampe", fa: "چراغ/لامپ", article: "die", plural: "die Lampen", ipa: "[ˈlampə]", examples: [{ de: "Die Lampe hängt an der Decke.", fa: "چراغ به سقف آویزان است." }] },
          { de: "der Teppich", fa: "فرش", article: "der", plural: "die Teppiche", ipa: "[ˈtɛpɪç]", examples: [{ de: "Der Teppich ist rot.", fa: "فرش قرمز است." }] },
          { de: "der Sessel", fa: "صندلی راحتی", article: "der", plural: "die Sessel", ipa: "[ˈzɛsəl]", examples: [{ de: "Der Sessel ist sehr bequem.", fa: "صندلی راحتی خیلی راحت است." }] },
          { de: "die Kommode", fa: "کشوئی", article: "die", plural: "die Kommoden", ipa: "[kɔˈmoːdə]", examples: [{ de: "Die Kommode steht im Schlafzimmer.", fa: "کشوئی در اتاق خواب است." }] },
          { de: "der Spiegel", fa: "آینه", article: "der", plural: "die Spiegel", ipa: "[ˈʃpiːɡəl]", examples: [{ de: "Der Spiegel hängt im Badezimmer.", fa: "آینه در حمام آویزان است." }] }
        ]
      },
      {
        title: "افعال خانه",
        words: [
          { de: "wohnen", fa: "زندگی کردن", article: "", ipa: "[ˈvoːnən]", conjugation: { ich:"wohne", du:"wohnst", er:"wohnt", wir:"wohnen", ihr:"wohnt", sie:"wohnen" }, examples: [{ de: "Ich wohne in Berlin.", fa: "در برلین زندگی می‌کنم." }] },
          { de: "einrichten", fa: "چیدمان کردن", article: "", ipa: "[ˈaɪnrɪçtən]", conjugation: { ich:"richte ein", du:"richtest ein", er:"richtet ein", wir:"richten ein", ihr:"richtet ein", sie:"richten ein" }, examples: [{ de: "Ich richte meine Wohnung ein.", fa: "آپارتمانم را چیدمان می‌کنم." }] },
          { de: "umziehen", fa: "جابه‌جا شدن", article: "", ipa: "[ˈumtsːiːən]", conjugation: { ich:"ziehe um", du:"ziehst um", er:"zieht um", wir:"ziehen um", ihr:"zieht um", sie:"ziehen um" }, examples: [{ de: "Wir ziehen bald um.", fa: "به زودی جابه‌جا می‌شویم." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Meine Wohnung. Ich wohne in einer kleinen Wohnung. Die Wohnung hat zwei Zimmer, eine Küche und ein Badezimmer. Das Wohnzimmer ist groß und hell. Im Wohnzimmer steht ein Sofa, ein Tisch und ein Fernseher. Die Küche ist neben dem Wohnzimmer. Im Schlafzimmer steht ein Bett und ein Schrank. Der Balkon ist klein, aber schön.",
      translation: "آپارتمان من. من در یک آپارتمان کوچک زندگی می‌کنم. آپارتمان دو اتاق، یک آشپزخانه و یک حمام دارد. اتاق نشیمن بزرگ و روشن است. در اتاق نشیمن یک کاناپه، یک میز و یک تلویزیون هست. آشپزخانه کنار اتاق نشیمن است. در اتاق خواب یک تخت و یک کمد هست. بالکن کوچک است ولی زیباست.",
      questions: [
        { question: "آپارتمان چند اتاق دارد؟", answer: "دو اتاق" },
        { question: "بالکن چطور است؟", answer: "کوچک ولی زیبا" },
        { question: "در اتاق خواب چه چیزهایی هست؟", answer: "تخت و کمد" }
      ]
    },
    {
      text: " Bei Freunden. Max: Wie groß ist deine Wohnung? Anna: Sie hat drei Zimmer, eine Küche, ein Badezimmer und einen Balkon. Max: Das klingt gut! Wie hoch ist die Miete? Anna: Siebenhundert Euro warm. Max: Das ist aber teuer! Anna: Ja, aber die Lage ist zentral und die Wohnung ist neu. Max: Hast du Bilder? Anna: Ja, ich schicke sie dir.",
      translation: " chez دوستان. ماکس: آپارتمانت چقدر بزرگ است؟ آنا: سه اتاق، یک آشپزخانه، یک حمام و یک بالکن دارد. ماکس: خوب به نظر می‌رسد! اجاره چقدر است؟ آنا: هفتصد یورو گرم (با utilities). ماکس: گران است! آنا: بله، ولی موقعیت مرکزی است و آپارتمان جدید است. ماکس: عکس داری؟ آنا: بله، برایت می‌فرستم.",
      questions: [
        { question: "آپارتمان چند اتاق دارد؟", answer: "سه اتاق" },
        { question: "اجاره چقدر است؟", answer: "هفتصد یورو" }
      ]
    }
  ],
  writing: [
    {
      title: "توصیف خانه",
      prompt: "خانه یا آپارتمان خود را توصیف کنید.",
      steps: [
        { title: "موقعیت", text: "کجا زندگی می‌کنید؟", example: { de: "Ich wohne in Tehran.", fa: "در تهران زندگی می‌کنم." } },
        { title: "اتاق‌ها", text: "چند اتاق، کجا هستند؟", example: { de: "Es hat drei Zimmer.", fa: "سه اتاق دارد." } },
        { title: "مبلمان", text: "چه مبلمانی دارید؟", example: { de: "Im Wohnzimmer steht ein Tisch.", fa: "در نشیمن یک میز هست." } }
      ],
      modelAnswer: "Ich wohne in einer schönen Wohnung. Sie hat vier Zimmer: ein Wohnzimmer, zwei Schlafzimmer, eine Küche und ein Badezimmer. Die Wohnung hat auch einen Balkon. Im Wohnzimmer steht ein Sofa, ein Fernseher und ein Tisch. Die Küche ist klein aber modern. Die Miete ist 600 Euro warm."
    }
  ],
  listening: [
    {
      title: "گوش دادن به توصیف خانه",
      instruction: "به توصیف گوش دهید و اتاق‌ها را نام ببرید.",
      sentences: [
        { de: "Das ist mein Schlafzimmer.", fa: "این اتاق خواب من است.", tts: "Das ist mein Schlafzimmer." },
        { de: "Die Küche ist nebenan.", fa: "آشپزخانه کنار است.", tts: "Die Küche ist nebenan." },
        { de: "Der Balkon ist klein.", fa: "بالکن کوچک است.", tts: "Der Balkon ist klein." },
        { de: "Im Wohnzimmer steht ein Sofa.", fa: "در نشیمن یک کاناپه هست.", tts: "Im Wohnzimmer steht ein Sofa." }
      ]
    }
  ],
  speaking: [
    {
      title: "توصیف خانه",
      pattern: "Meine Wohnung hat [تعداد] Zimmer. Die Küche ist [ویژگی].",
      exercise: "خانه خود را با جزئیات توصیف کنید."
    }
  ],
  cultureTip: "در آلمان، بسیاری از مردم در آپارتمان (Wohnung) زندگی می‌کنند نه خانه‌های ویلایی. اجاره‌ها در شهرهای بزرگ گران هستند. معمولاً آپارتمان‌ها bland möbliert (با مبلمان) یا leer (خالی) عرضه می‌شوند. قراردادهای اجاره معمولاً طولانی هستند.",
  examData: {
    questions: [
      { question: "«آشپزخانه» چیست؟", options: ["die Küche", "der Küche", "das Küche", "eine Küche"], answer: 0 },
      { question: "«تخت» چیست؟", options: ["das Bett", "der Bett", "die Bett", "ein Bett"], answer: 0 },
      { question: "«بالکن» چیست؟", options: ["der Balkon", "die Balkon", "das Balkon", "einer Balkon"], answer: 0 },
      { question: "«کمد» چیست؟", options: ["der Schrank", "die Schrank", "das Schrank", "ein Schrank"], answer: 0 },
      { question: "«میز» چیست؟", options: ["der Tisch", "die Tisch", "das Tisch", "ein Tisch"], answer: 0 },
      { question: "کدام یک اتاق نیست؟", options: ["der Stuhl", "das Zimmer", "die Küche", "das Badezimmer"], answer: 0 },
      { question: "«صندلی» چیست؟", options: ["der Stuhl", "der Tisch", "der Schrank", "der Sessel"], answer: 0 },
      { question: "«فرش» چیست؟", options: ["der Teppich", "der Boden", "der Stoff", "der Linoleum"], answer: 0 },
      { question: "«چراغ» چیست؟", options: ["die Lampe", "das Licht", "die Glühbirne", "der Schein"], answer: 0 },
      { question: "«آپارتمان» چیست؟", options: ["die Wohnung", "der Wohnung", "das Wohnung", "wohnung"], answer: 0 }
    ]
  }
};