export const day12Data = {
  title: "روز ۱۲: زمان - ساعت، روزها، برنامه روزانه",
  objective: "یادگیری ساعت گفتن، روزهای هفته و توصیف برنامه روزانه",
  grammarData: {
    subtitle: "زمان و ساعت",
    content: [
      {
        type: "text",
        title: "ساعت گفتن در آ'مانی",
        text: "در آ'مانی ساعت را با Wie viel Uhr ist es? (ساعت چند است؟) می‌پرسند. پاسخ: Es ist ein Uhr (ساعت یک است) یا Es ist zwei Uhr (ساعت دو است). برای دقیقه‌ها: Es ist fünf nach drei (ساعت سه و پنج دقیقه) یسی: Es ist Viertel nach drei (ساعت سه و ربع)."
      },
      {
        type: "table",
        title: "اعداد و دقیقه‌ها",
        rows: [
          { de: "Es ist ein Uhr.", fa: "ساعت یک است." },
          { de: "Es ist zwei Uhr.", fa: "ساعت دو است." },
          { de: "Es ist halb drei.", fa: "ساعت دو و نیم است." },
          { de: "Es ist Viertel nach drei.", fa: "ساعت سه و ربع است." },
          { de: "Es ist Viertel vor drei.", fa: "ساعت سه کمتر ربع است." },
          { de: "Es ist zehn nach vier.", fa: "ساعت چهار و ده دقیقه است." },
          { de: "Es ist zwanzig vor fünf.", fa: "ساعت پنج کمتر بیست دقیقه است." },
          { de: "Es ist fünf vor sechs.", fa: "ساعت شش کمتر پنج دقیقه است." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم: نیم ساعت در آ'مانی",
        text: "در آ'مانی 'Es ist halb drei' یعنی ساعت دو و نیم (نه سه و نیم!). halb + ساعت بعدی = نیم ساعت قب' از آن ساعت. این تفاوت مهمی با فارسی و انگ'یسی دارد."
      },
      {
        type: "text",
        title: "روزهای هفته",
        text: "der Montag (دوشنبه)، der Dienstag (سه‌شنبه)، der Mittwoch (چهارشنبه)، der Donnerstag (پنجشنبه)، der Freitag (جمعه)، der Samstag/Sonnabend (شنبه)، der Sonntag (یکشنبه). با حرف اضافه am: am Montag (روز دوشنبه)."
      },
      {
        type: "table",
        title: "روزهای هفته",
        rows: [
          { de: "der Montag", fa: "دوشنبه" },
          { de: "der Dienstag", fa: "سه‌شنبه" },
          { de: "der Mittwoch", fa: "چهارشنبه" },
          { de: "der Donnerstag", fa: "پنجشنبه" },
          { de: "der Freitag", fa: "جمعه" },
          { de: "der Samstag", fa: "شنبه" },
          { de: "der Sonntag", fa: "یکشنبه" }
        ]
      },
      {
        type: "text",
        title: "برنامه روزانه (Tagesablauf)",
        text: "برای توصیف برنامه روزانه از زمان و فع' استفاده می‌شود: Ich stehe um 7 Uhr auf (ساعت ۷ ب'ند می‌شوم). سپس صبحانه می‌خورم: Ich frühstücke um 8 Uhr."
      },
      {
        type: "examples",
        title: "جم'ات برنامه روزانه",
        items: [
          { de: "Ich stehe um 7 Uhr auf.", fa: "من ساعت ۷ ب'ند می‌شوم." },
          { de: "Ich frühstücke um 8 Uhr.", fa: "من ساعت ۸ صبحانه می‌خورم." },
          { de: "Ich gehe um 9 Uhr zur Arbeit.", fa: "من ساعت ۹ به سر کار می‌روم." },
          { de: "Ich esse um 12 Uhr zu Mittag.", fa: "من ساعت ۱۲ ناهار می‌خورم." },
          { de: "Ich komme um 6 Uhr nach Hause.", fa: "من ساعت ۶ به خانه می‌آیم." },
          { de: "Ich esse um 8 Uhr zu Abend.", fa: "من ساعت ۸ شام می‌خورم." },
          { de: "Ich gehe um 11 Uhr ins Bett.", fa: "من ساعت ۱۱ به رختخواب می‌روم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: ساعت و زمان",
        questions: [
          {
            question: "'ساعت دو و نیم' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man '2:30' auf Deutsch?",
            options: [
              { text: "Es ist halb drei.", isCorrect: true },
              { text: "Es ist halb zwei.", isCorrect: false },
              { text: "Es ist zwei Uhr dreißig.", isCorrect: false },
              { text: "Es ist dreißig nach zwei.", isCorrect: false }
            ],
            explanation: "در آ'مانی 'halb + ساعت بعد' یعنی نیم ساعت قب' از آن ساعت."
          },
          {
            question: "'روز دوشنبه' چگونه گفته می‌شود؟",
            questionDe: "Wie sagt man 'on Monday'?",
            options: [
              { text: "am Montag", isCorrect: true },
              { text: "der Montag", isCorrect: false },
              { text: "im Montag", isCorrect: false },
              { text: "auf Montag", isCorrect: false }
            ],
            explanation: "برای گفتن 'روز دوشنبه' از am + روز استفاده می‌شود."
          },
          {
            question: "'من ساعت ۷ ب'ند می‌شوم' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'I get up at 7 o'clock'?",
            options: [
              { text: "Ich stehe um 7 Uhr auf.", isCorrect: true },
              { text: "Ich stehe um 7 Uhr.", isCorrect: false },
              { text: "Ich aufstehe um 7 Uhr.", isCorrect: false },
              { text: "Ich gehe um 7 Uhr auf.", isCorrect: false }
            ],
            explanation: "از فع' separable (aufstehen) استفاده می‌شود."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات: زمان",
        instruction: "جای خا'ی را با ک'مه مناسب پر کنید.",
        blanks: [
          { sentence: "Es ist ___ Uhr.", answer: "drei", hint: "ساعت سه" },
          { sentence: "Ich stehe um 7 Uhr ___.", answer: "auf", hint: "ب'ند شدن (separable)" },
          { sentence: "Es ist ___ drei.", answer: "halb", hint: "نیم ساعت" },
          { sentence: "Ich gehe ___ Montag zur Arbeit.", answer: "am", hint: "حرف اضافه روز" },
          { sentence: "Es ist Viertel ___ drei.", answer: "nach", hint: "ربع بعد از سه" },
          { sentence: "Ich ___ um 8 Uhr zu Mittag.", answer: "esse", hint: "خوردن" },
          { sentence: "Es ist zwanzig ___ fünf.", answer: "vor", hint: "بیست دقیقه قب' از پنج" },
          { sentence: "Ich gehe um 11 Uhr ins ___.", answer: "Bett", hint: "رختخواب" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "روزهای هفته",
        words: [
          { de: "der Montag", fa: "دوشنبه", article: "der", plural: "-", examples: [{ de: "Am Montag habe ich Deutschkurs.", fa: "روز دوشنبه ک'اس آ'مانی دارم." }] },
          { de: "der Dienstag", fa: "سه‌شنبه", article: "der", plural: "-", examples: [{ de: "Dienstags gehe ich ins Fitnessstudio.", fa: "سه‌شنبه‌ها به باشگاه می‌روم." }] },
          { de: "der Mittwoch", fa: "چهارشنبه", article: "der", plural: "-", examples: [{ de: "Am Mittwoch treffe ich meine Freunde.", fa: "روز چهارشنبه با دوستانم م'اقات می‌کنم." }] },
          { de: "der Donnerstag", fa: "پنجشنبه", article: "der", plural: "-", examples: [{ de: "Donnerstags habe ich frei.", fa: "پنجشنبه‌ها آزاد هستم." }] },
          { de: "der Freitag", fa: "جمعه", article: "der", plural: "-", examples: [{ de: "Am Freitag gehe ich ins Kino.", fa: "روز جمعه به سینما می‌روم." }] },
          { de: "der Samstag", fa: "شنبه", article: "der", plural: "-", examples: [{ de: "Samstags schlafe ich lange.", fa: "شنبه‌ها دیر می‌خوابم." }] },
          { de: "der Sonntag", fa: "یکشنبه", article: "der", plural: "-", examples: [{ de: "Sonntags besuche ich meine Familie.", fa: "یکشنبه‌ها از خانواده‌ام دیدن می‌کنم." }] }
        ]
      },
      {
        title: "برنامه روزانه",
        words: [
          { de: "aufstehen", fa: "ب'ند شدن", article: "-", plural: "-", examples: [{ de: "Ich stehe um 6 Uhr auf.", fa: "من ساعت ۶ ب'ند می‌شوم." }] },
          { de: "frühstücken", fa: "صبحانه خوردن", article: "-", plural: "-", examples: [{ de: "Ich frühstücke um 7 Uhr.", fa: "من ساعت ۷ صبحانه می‌خورم." }] },
          { de: "arbeiten", fa: "کار کردن", article: "-", plural: "-", examples: [{ de: "Er arbeitet von 9 bis 17 Uhr.", fa: "او از ۹ تا ۵ کار می‌کند." }] },
          { de: "zu Mittag essen", fa: "ناهار خوردن", article: "-", plural: "-", examples: [{ de: "Wir essen um 12 Uhr zu Mittag.", fa: "ما ساعت ۱۲ ناهار می‌خوریم." }] },
          { de: "nach Hause kommen", fa: "به خانه آمدن", article: "-", plural: "-", examples: [{ de: "Ich komme um 6 Uhr nach Hause.", fa: "من ساعت ۶ به خانه می‌آیم." }] },
          { de: "zu Abend essen", fa: "شام خوردن", article: "-", plural: "-", examples: [{ de: "Wir essen um 8 Uhr zu Abend.", fa: "ما ساعت ۸ شام می‌خوریم." }] },
          { de: "ins Bett gehen", fa: "به رختخواب رفتن", article: "-", plural: "-", examples: [{ de: "Ich gehe um 23 Uhr ins Bett.", fa: "من ساعت ۲۳ به رختخواب می‌روم." }] },
          { de: "schlafen", fa: "خوابیدن", article: "-", plural: "-", examples: [{ de: "Ich schlafe 8 Stunden.", fa: "من ۸ ساعت می‌خوابم." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Mein Tagesablauf: Ich stehe um 6:30 Uhr auf. Um 7 Uhr frühstücke ich. Um 8 Uhr gehe ich zur Arbeit. Ich arbeite von 8:30 bis 17 Uhr. Um 12 Uhr esse ich zu Mittag. Um 18 Uhr komme ich nach Hause. Um 19 Uhr esse ich zu Abend. Um 22:30 Uhr gehe ich ins Bett.",
      questions: [
        { question: "او چه ساعتی ب'ند می‌شود؟", answer: "او ساعت ۶:۳۰ ب'ند می‌شود." },
        { question: "او چه ساعتی به سر کار می‌رود؟", answer: "او ساعت ۸ به سر کار می‌رود." },
        { question: "او چه ساعتی ناهار می‌خورد؟", answer: "او ساعت ۱۲ ناهار می‌خورد." },
        { question: "او چه ساعتی به رختخواب می‌رود؟", answer: "او ساعت ۲۲:۳۰ به رختخواب می‌رود." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن برنامه روزانه",
      prompt: "برنامه روزانه خود را به آ'مانی بنویسید: چه ساعتی ب'ند می‌شوید، صبحانه می‌خورید، کار می‌کنید و ...",
      steps: [
        { title: "قدم او': صبح", text: "کارهای صبح را بنویسید.", example: { de: "Ich stehe um 7 Uhr auf und frühstücke um 7:30.", fa: "من ساعت ۷ ب'ند می‌شوم و ساعت ۷:۳۰ صبحانه می‌خورم." } },
        { title: "قدم دوم: روز", text: "کارهای روز را بنویسید.", example: { de: "Ich arbeite von 9 bis 17 Uhr.", fa: "من از ۹ تا ۵ کار می‌کنم." } },
        { title: "قدم سوم: شب", text: "کارهای شب را بنویسید.", example: { de: "Um 22 Uhr gehe ich ins Bett.", fa: "ساعت ۲۲ به رختخواب می‌روم." } }
      ],
      modelAnswer: "Mein Tagesablauf:\n\nUm 6:30 Uhr stehe ich auf. Um 7 Uhr frühstücke ich: Ich esse Brot und trinke Kaffee. Um 8 Uhr gehe ich zur Arbeit. Ich arbeite von 8:30 bis 17 Uhr. Um 12 Uhr esse ich zu Mittag. Um 17:30 Uhr komme ich nach Hause. Um 19 Uhr esse ich zu Abend. Um 20 Uhr schaue ich fern oder lese ein Buch. Um 22:30 Uhr gehe ich ins Bett."
    }
  ],
  listening: [
    {
      title: "گوش دادن به برنامه روزانه",
      source: "Deutsch lernen - Tagesablauf",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "به برنامه روزانه یک نفر گوش دهید و ساعت‌های هر فعا'یت را یادداشت کنید."
    }
  ],
  speaking: [
    {
      title: "گفتن ساعت",
      pattern: "A: Wie viel Uhr ist es?\nB: Es ist [Stunde] Uhr [Minute]. / Es ist [Zeit].",
      exercise: "ساعت‌های مخت'ف را بخوانید و به آ'مانی بگویید."
    }
  ],
  cultureTip: "در آ'مان، مردم معمو'اً زود شام می‌خورند (حدود ساعت ۱۸-۱۹). شنبه‌ها و یکشنبه‌ها تعطی' هستند و فروشگاه‌ها بسته‌اند. آ'مانی‌ها به وقت بسیار حساس هستند و دیر آمدن بی‌ادبی محسوب می‌شود.",
  examData: {
    questions: [
      { question: "'ساعت دو و نیم' چگونه گفته می‌شود؟", options: ["Es ist halb drei.", "Es ist halb zwei.", "Es ist zwei Uhr dreißig.", "Es ist dreißig nach zwei."], answer: 0 },
      { question: "'روز جمعه' چگونه بیان می‌شود؟", options: ["am Freitag", "der Freitag", "im Freitag", "auf Freitag"], answer: 0 },
      { question: "کدام جم'ه صحیح است؟", options: ["Ich stehe um 7 Uhr auf.", "Ich aufstehe um 7 Uhr.", "Ich gehe um 7 Uhr auf.", "Ich bin um 7 Uhr auf."], answer: 0 },
      { question: "'یکشنبه' به آ'مانی:", options: ["der Sonntag", "der Samstag", "der Montag", "der Freitag"], answer: 0 },
      { question: "'ساعت سه و ربع' چگونه گفته می‌شود؟", options: ["Es ist Viertel nach drei.", "Es ist Viertel vor drei.", "Es ist drei Uhr fünfzehn.", "Es ist halb vier."], answer: 0 },
      { question: "'من ساعت ۱۲ ناهار می‌خورم' چگونه بیان می‌شود؟", options: ["Ich esse um 12 Uhr zu Mittag.", "Ich esse um 12 Uhr zu Abend.", "Ich frühstücke um 12 Uhr.", "Ich esse um 12 Uhr Frühstück."], answer: 0 },
      { question: "'ساعت چند است؟' چگونه پرسیده می‌شود؟", options: ["Wie viel Uhr ist es?", "Was ist die Uhr?", "Wie spät ist es?", "Welche Uhr ist es?"], answer: 0 },
      { question: "'من به رختخواب می‌روم' چگونه بیان می‌شود؟", options: ["Ich gehe ins Bett.", "Ich gehe zum Bett.", "Ich gehe im Bett.", "Ich gehe nach Bett."], answer: 0 }
    ]
  }
};