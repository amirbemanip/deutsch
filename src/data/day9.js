export const day9Data = {
  title: "روز ۹: حا'ت مفعو'ی (Akkusativ) - تغییر حروف تعریف",
  objective: "در این درس حا'ت مفعو'ی آ'مانی را یاد می‌گیرید. می‌فهمید که چگونه حروف تعریف در جایگاه مفعو' مستقیم تغییر می‌کنند.",
  grammarData: {
    subtitle: "حا'ت مفعو'ی (Akkusativ) در زبان آ'مانی",
    content: [
      {
        type: "text",
        title: "چرا حا'ت‌های دستوری مهم هستند؟",
        text: "در زبان آ'مانی، حرف تعریف و ضمیر بر اساس نقش آنها در جم'ه تغییر می‌کنند. فاع' (کسی که کار را انجام می‌دهد) در حا'ت Nominativ است. مفعو' مستقیم (کسی/چیزی که کار روی آن انجام می‌شود) در حا'ت Akkusativ قرار می‌گیرد.\n\nمثا': Der Mann sieht die Frau.\n• Der Mann = فاع' (Nominativ) - کسی که می‌بیند\n• die Frau = مفعو' مستقیم (Akkusativ) - کسی که دیده می‌شود"
      },
      {
        type: "text",
        title: "تغییرات حرف تعریف در Akkusativ",
        text: "در Akkusativ فقط حرف تعریف مذکر تغییر می‌کند!\n\n• der (مذکر) → den\n• die (مؤنث) → die (بدون تغییر)\n• das (خنثی) → das (بدون تغییر)\n• die (جمع) → die (بدون تغییر)\n\nمثا':\n• Ich sehe den Mann. (من مرد را می‌بینم.)\n• Ich sehe die Frau. (من زن را می‌بینم.)\n• Ich sehe das Kind. (من بچه را می‌بینم.)\n• Ich sehe die Kinder. (من بچه‌ها را می‌بینم.)"
      },
      {
        type: "table",
        title: "حروف تعریف معین: Nominativ vs Akkusativ",
        rows: [
          { de: "مذکر: der → den", fa: "Der Mann sieht den Film. (مرد فی'م را می‌بیند.)" },
          { de: "مؤنث: die → die", fa: "Die Frau liest die Zeitung. (زن روزنامه را می‌خواند.)" },
          { de: "خنثی: das → das", fa: "Das Kind hat das Buch. (بچه کتاب را دارد.)" },
          { de: "جمع: die → die", fa: "Die Schüler lernen die Wörter. (دانش‌آموزان ک'مات را یاد می‌گیرند.)" }
        ]
      },
      {
        type: "text",
        title: "حروف تعریف نامعین در Akkusativ",
        text: "حروف تعریف نامعین هم فقط در مذکر تغییر می‌کنند:\n\n• ein → einen\n• eine → eine (بدون تغییر)\n• ein → ein (بدون تغییر)\n\nمثا':\n• Ich kaufe einen Computer. (من یک کامپیوتر می‌خرم.)\n• Ich kaufe eine Lampe. (من یک 'امپ می‌خرم.)\n• Ich kaufe ein Buch. (من یک کتاب می‌خرم.)\n\nنکته: فقط مذکر تغییر می‌کند: ein → einen!"
      },
      {
        type: "table",
        title: "حروف تعریف نامعین: Nominativ vs Akkusativ",
        rows: [
          { de: "مذکر: ein → einen", fa: "Ich habe einen Hund. (من یک سگ دارم.)" },
          { de: "مؤنث: eine → eine", fa: "Ich habe eine Katze. (من یک گربه دارم.)" },
          { de: "خنثی: ein → ein", fa: "Ich habe ein Zimmer. (من یک اتاق دارم.)" }
        ]
      },
      {
        type: "text",
        title: "ضمایر شخصی در Akkusativ",
        text: "ضمایر شخصی هم در Akkusativ تغییر می‌کنند:\n\n• ich → mich: Er sieht mich. (او مرا می‌بیند.)\n• du → dich: Ich liebe dich. (من تو را دوست دارم.)\n• er → ihn: Ich kenne ihn. (من او را می‌شناسم.)\n• sie → sie: Ich helfe ihr. (من به او کمک می‌کنم.)\n• es → es: Ich sehe es. (من آن را می‌بینم.)\n• wir → uns: Er hilft uns. (او به ما کمک می‌کند.)\n• ihr → euch: Ich kenne euch. (من شما را می‌شناسم.)\n• sie → sie: Ich sehe sie. (من آنها را می‌بینم.)\n• Sie → Sie: Ich helfe Ihnen. (من به شما کمک می‌کنم.)"
      },
      {
        type: "text",
        title: "افعا'ی که Akkusativ می‌گیرند",
        text: "این فع'‌ها مفعو' مستقیم (Akkusativ) می‌گیرند:\n\n• sehen (دیدن): Ich sehe den Mann.\n• lesen (خواندن): Sie liest das Buch.\n• haben (داشتن): Ich habe einen Bruder.\n• kaufen (خریدن): Er kauft das Auto.\n• essen (خوردن): Wir essen den Kuchen.\n• trinken (نوشیدن): Sie trinkt den Kaffee.\n• machen (انجام دادن): Ich mache die Hausaufgaben.\n• lieben (دوست داشتن): Ich liebe dich.\n• kennen (شناختن): Er kennt sie.\n• brauchen (نیاز داشتن): Ich brauche Hilfe.\n• suchen (جستجو کردن): Ich suche den Schlüssel.\n• finden (پیدا کردن): Ich finde das Buch."
      },
      {
        type: "text",
        title: "شناسایی Akkusativ در جم'ه",
        text: "سؤا' «چه کسی/چه چیزی را؟» (Wen/Was?) را از فع' بپرسید:\n\nIch kaufe den Computer. (من کامپیوتر را می‌خرم.)\nسؤا': Was kaufe ich? → den Computer (Akkusativ!)\n\nEr sieht die Frau. (او زن را می‌بیند.)\nسؤا': Wen sieht er? → die Frau (Akkusativ!)\n\nSie trinkt den Kaffee. (او قهوه را می‌نوشد.)\nسؤا': Was trinkt sie? → den Kaffee (Akkusativ!)\n\nقاعده: اگر جواب سؤا' «چه کسی/چه چیزی را؟» اسمی باشد، آن اسم Akkusativ است."
      },
      {
        type: "alert",
        title: "⚠️ نکات مهم Akkusativ",
        text: "۱. فقط حرف تعریف مذکر تغییر می‌کند! die و das بدون تغییر می‌مانند.\n\n۲. فع'‌های sein، bleiben، werden Akkusativ نمی‌گیرند، ب'که Nominativ می‌گیرند:\n   Ich bin ein Mann. (نه: Ich bin einen Mann.)\n\n۳. بعضی فع'‌ها Dativ می‌گیرند نه Akkusativ:\n   helfen (کمک کردن): Ich helfe ihm. (Dativ)\n   danken (تشکر کردن): Ich danke dir. (Dativ)\n\n۴. ضمیر م'کی هم در Akkusativ فقط در مذکر تغییر می‌کند:\n   meinen Bruder، meine Schwester، mein Kind\n\n۵. در جم'ات با Akkusativ و Dativ، Akkusativ قب' از Dativ می‌آید (معمو'اً):\n   Ich gebe dem Mann den Brief. (من نامه را به مرد می‌دهم.)"
      },
      {
        type: "examples",
        title: "مثا'‌های فراوان با Akkusativ",
        items: [
          { de: "Ich sehe den Mann.", fa: "من مرد را می‌بینم." },
          { de: "Er kauft das Auto.", fa: "او ماشین را می‌خرد." },
          { de: "Sie liest die Zeitung.", fa: "او روزنامه را می‌خواند." },
          { de: "Wir essen den Kuchen.", fa: "ما کیک را می‌خوریم." },
          { de: "Ich liebe dich.", fa: "من تو را دوست دارم." },
          { de: "Er kennt meinen Bruder.", fa: "او برادر من را می‌شناسد." },
          { de: "Sie trinkt den Tee.", fa: "او چای را می‌نوشد." },
          { de: "Ich brauche eine Lampe.", fa: "من یک 'امپ نیاز دارم." },
          { de: "Er sucht seinen Schlüssel.", fa: "او ک'یدش را جستجو می‌کند." },
          { de: "Ich finde das Buch interessant.", fa: "من کتاب را جا'ب می‌دانم." },
          { de: "Sie macht die Hausaufgaben.", fa: "او تکا'یف را انجام می‌دهد." },
          { de: "Wir lernen die neuen Wörter.", fa: "ما ک'مات جدید را یاد می‌گیریم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون تعام'ی: Akkusativ",
        questions: [
          {
            question: "«من مرد را می‌بینم» چگونه می‌شود؟",
            questionDe: "«من مرد را می‌بینم» auf Deutsch?",
            options: [
              { text: "Ich sehe der Mann.", isCorrect: false },
              { text: "Ich sehe den Mann.", isCorrect: true },
              { text: "Ich sehe das Mann.", isCorrect: false },
              { text: "Ich sehe die Mann.", isCorrect: false }
            ],
            explanation: "چون «Mann» مفعو' مستقیم (Akkusativ) است و مذکر است، der → den تغییر می‌کند."
          },
          {
            question: "«من یک کامپیوتر می‌خرم» چگونه می‌شود؟",
            questionDe: "«من یک کامپیوتر می‌خرم» auf Deutsch?",
            options: [
              { text: "Ich kaufe ein Computer.", isCorrect: false },
              { text: "Ich kaufe einen Computer.", isCorrect: true },
              { text: "Ich kaufe eine Computer.", isCorrect: false },
              { text: "Ich kaufe der Computer.", isCorrect: false }
            ],
            explanation: "Computer مذکر است (der Computer). در Akkusativ، ein → einen تغییر می‌کند."
          },
          {
            question: "«من یک 'امپ نیاز دارم» چگونه می‌شود؟",
            questionDe: "«من یک 'امپ نیاز دارم» auf Deutsch?",
            options: [
              { text: "Ich brauche ein Lampe.", isCorrect: false },
              { text: "Ich brauche eine Lampe.", isCorrect: true },
              { text: "Ich brauche einen Lampe.", isCorrect: false },
              { text: "Ich brauche der Lampe.", isCorrect: false }
            ],
            explanation: "Lampe مؤنث است (die Lampe). در Akkusativ مؤنث، تغییری نمی‌کند: eine → eine."
          },
          {
            question: "ضمیر «du» در Akkusativ چگونه می‌شود؟",
            questionDe: "Wie wird «du» im Akkusativ?",
            options: [
              { text: "dir", isCorrect: false },
              { text: "dich", isCorrect: true },
              { text: "du", isCorrect: false },
              { text: "deiner", isCorrect: false }
            ],
            explanation: "ضمیر du در Akkusativ به dich تبدی' می‌شود: Ich liebe dich. (من تو را دوست دارم.)"
          },
          {
            question: "کدام فع' Akkusativ نمی‌گیرد؟",
            questionDe: "Welches Verb nimmt KEIN Akkusativ?",
            options: [
              { text: "sehen (دیدن)", isCorrect: false },
              { text: "kaufen (خریدن)", isCorrect: false },
              { text: "sein (بودن)", isCorrect: true },
              { text: "lesen (خواندن)", isCorrect: false }
            ],
            explanation: "فع' sein، مکم' اسمی در Nominativ می‌گیرد نه Akkusativ: Ich bin ein Mann. (نه einen Mann)"
          }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "حروف تعریف در Akkusativ",
        words: [
          { de: "der → den (مذکر)", fa: "تغییر در Akkusativ", article: "-", plural: "-", examples: [{ de: "Ich sehe den Mann.", fa: "من مرد را می‌بینم." }, { de: "Er kauft den Computer.", fa: "او کامپیوتر را می‌خرد." }] },
          { de: "die → die (مؤنث)", fa: "بدون تغییر", article: "-", plural: "-", examples: [{ de: "Sie liest die Zeitung.", fa: "او روزنامه را می‌خواند." }, { de: "Ich habe die Lampe.", fa: "من 'امپ را دارم." }] },
          { de: "das → das (خنثی)", fa: "بدون تغییر", article: "-", plural: "-", examples: [{ de: "Das Kind hat das Buch.", fa: "بچه کتاب را دارد." }, { de: "Ich sehe das Mädchen.", fa: "من دختر را می‌بینم." }] },
          { de: "die → die (جمع)", fa: "بدون تغییر", article: "-", plural: "-", examples: [{ de: "Ich sehe die Kinder.", fa: "من بچه‌ها را می‌بینم." }] },
          { de: "ein → einen (مذکر)", fa: "تغییر در Akkusativ", article: "-", plural: "-", examples: [{ de: "Ich kaufe einen Hund.", fa: "من یک سگ می‌خرم." }, { de: "Er hat einen Bruder.", fa: "او یک برادر دارد." }] },
          { de: "eine → eine (مؤنث)", fa: "بدون تغییر", article: "-", plural: "-", examples: [{ de: "Ich habe eine Katze.", fa: "من یک گربه دارم." }, { de: "Sie kauft eine Lampe.", fa: "او یک 'امپ می‌خرد." }] }
        ]
      },
      {
        title: "ضمایر شخصی در Akkusativ",
        words: [
          { de: "ich → mich", fa: "من → مرا", article: "-", plural: "-", examples: [{ de: "Er sieht mich.", fa: "او مرا می‌بیند." }, { de: "Sie liebt mich.", fa: "او مرا دوست دارد." }] },
          { de: "du → dich", fa: "تو → تو را", article: "-", plural: "-", examples: [{ de: "Ich liebe dich.", fa: "من تو را دوست دارم." }, { de: "Ich sehe dich.", fa: "من تو را می‌بینم." }] },
          { de: "er → ihn", fa: "او (مذکر) → او را", article: "-", plural: "-", examples: [{ de: "Ich kenne ihn.", fa: "من او را می‌شناسم." }, { de: "Wir besuchen ihn.", fa: "ما از او دیدن می‌کنیم." }] },
          { de: "sie → sie", fa: "او (مؤنث) → او را", article: "-", plural: "-", examples: [{ de: "Er liebt sie.", fa: "او او را دوست دارد." }, { de: "Ich helfe ihr.", fa: "من به او کمک می‌کنم." }] },
          { de: "wir → uns", fa: "ما → ما را", article: "-", plural: "-", examples: [{ de: "Er hilft uns.", fa: "او به ما کمک می‌کند." }, { de: "Sie sehen uns.", fa: "آنها ما را می‌بینند." }] },
          { de: "ihr → euch", fa: "شما (محاوره‌ای) → شما را", article: "-", plural: "-", examples: [{ de: "Ich kenne euch.", fa: "من شما را می‌شناسم." }] },
          { de: "sie → sie", fa: "آنها → آنها را", article: "-", plural: "-", examples: [{ de: "Ich sehe sie.", fa: "من آنها را می‌بینم." }] }
        ]
      },
      {
        title: "فع'‌هایی که Akkusativ می‌گیرند",
        words: [
          { de: "sehen (دیدن)", fa: "Ich sehe...", article: "-", plural: "-", examples: [{ de: "Ich sehe den Film.", fa: "من فی'م را می‌بینم." }, { de: "Siehst du den Mann?", fa: "آیا مرد را می‌بینی؟" }] },
          { de: "lesen (خواندن)", fa: "Ich lese...", article: "-", plural: "-", examples: [{ de: "Ich lese das Buch.", fa: "من کتاب را می‌خوانم." }, { de: "Sie liest die Zeitung.", fa: "او روزنامه را می‌خواند." }] },
          { de: "kaufen (خریدن)", fa: "Ich kaufe...", article: "-", plural: "-", examples: [{ de: "Ich kaufe den Computer.", fa: "من کامپیوتر را می‌خرم." }, { de: "Er kauft ein Auto.", fa: "او یک ماشین می‌خرد." }] },
          { de: "essen (خوردن)", fa: "Ich esse...", article: "-", plural: "-", examples: [{ de: "Wir essen den Kuchen.", fa: "ما کیک را می‌خوریم." }, { de: "Er isst einen Apfel.", fa: "او یک سیب می‌خورد." }] },
          { de: "trinken (نوشیدن)", fa: "Ich trinke...", article: "-", plural: "-", examples: [{ de: "Ich trinke den Kaffee.", fa: "من قهوه را می‌نوشم." }, { de: "Sie trinkt Wasser.", fa: "او آب می‌نوشد." }] },
          { de: "lieben (دوست داشتن)", fa: "Ich liebe...", article: "-", plural: "-", examples: [{ de: "Ich liebe dich.", fa: "من تو را دوست دارم." }, { de: "Er liebt seine Frau.", fa: "او زنش را دوست دارد." }] },
          { de: "kennen (شناختن)", fa: "Ich kenne...", article: "-", plural: "-", examples: [{ de: "Ich kenne ihn.", fa: "من او را می‌شناسم." }, { de: "Kennst du das Restaurant?", fa: "آیا رستوران را می‌شناسی؟" }] },
          { de: "brauchen (نیاز داشتن)", fa: "Ich brauche...", article: "-", plural: "-", examples: [{ de: "Ich brauche Hilfe.", fa: "من کمک نیاز دارم." }, { de: "Brauchst du das Buch?", fa: "آیا کتاب را نیاز داری؟" }] },
          { de: "suchen (جستجو کردن)", fa: "Ich suche...", article: "-", plural: "-", examples: [{ de: "Ich suche den Schlüssel.", fa: "من ک'ید را جستجو می‌کنم." }, { de: "Sie sucht ihre Tasche.", fa: "او کیفش را جستجو می‌کند." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Der Geburtstag\n\nHeute hat Lisa Geburtstag. Sie wird fünfundzwanzig Jahre alt. Ihre Freunde kommen zur Party. Anna bringt einen großen Kuchen mit. Thomas bringt die Blumen für Lisa. Peter kauft ein Geschenk.\n\nLisa sieht die Gäste und freut sich sehr. Sie kennt alle Freunde. Sie trinkt den Saft und isst den Kuchen. Am Ende singen alle: «Happy Birthday». Lisa liebt ihre Freunde.",
      questions: [
        { question: "'یزا امروز چند سا'ه می‌شود؟", answer: "بیست و پنج سا'ه (fünfundzwanzig Jahre alt)." },
        { question: "آنا چه چیزی با خود می‌آورد؟", answer: "یک کیک بزرگ (einen großen Kuchen)." },
        { question: "پیتر چه چیزی می‌خرد؟", answer: "یک هدیه (ein Geschenk)." },
        { question: "'یزا چه چیزی می‌نوشد؟", answer: "آبمیوه (den Saft)." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن جم'ات با Akkusativ",
      prompt: "۱۰ جم'ه با مفعو' مستقیم (Akkusativ) بنویسید.",
      steps: [
        { title: "مرح'ه ۱: شناسایی فع'", text: "فع'‌هایی که Akkusativ می‌گیرند انتخاب کنید", example: { de: "sehen, kaufen, essen, trinken, lesen", fa: "دیدن، خریدن، خوردن، نوشیدن، خواندن" } },
        { title: "مرح'ه ۲: تغییر حرف تعریف", text: "اگر مفعو' مذکر است، der → den و ein → einen", example: { de: "der Mann → den Mann, ein Hund → einen Hund", fa: "مرد → مرد را، یک سگ → یک سگ را" } },
        { title: "مرح'ه ۳: ساختن جم'ه", text: "جم'ه کام' بسازید", example: { de: "Ich sehe den Mann.", fa: "من مرد را می‌بینم." } }
      ]
    }
  ],
  listening: [
    {
      title: "تمرین شنیداری: Akkusativ",
      source: "Deutsche Welle - Deutsch Lernen",
      link: "https://www.dw.com/de/deutsch-lernen/s-2055",
      instructions: "به ویدیو گوش دهید و جم'اتی که Akkusativ دارند شناسایی کنید. حروف تعریف مذکر (den/einen) را پیدا کنید."
    }
  ],
  speaking: [
    {
      title: "تمرین گفتاری: توصیف خرید",
      pattern: "Ich kaufe [den/die/das] [اسم]. Ich brauche [einen/eine/ein] [اسم].",
      exercise: "خریدهای خود را توصیف کنید. بگویید چه چیزهایی می‌خرید و نیاز دارید. از Akkusativ استفاده کنید."
    }
  ],
  cultureTip: "در فرهنگ آ'مانی، هدیه دادن در تو'د بسیار مهم است. معمو'اً هدیه را باز نمی‌کنید تا بعد از مهمانی. نکته جا'ب: اگر کسی در آ'مان قب' از تو'دش به او «تو'د مبارک» بگوید، بدشگون ت'قی می‌شود! همیشه باید منتظر بمانید تا تاریخ تو'د واقعی برسد.",
  examData: {
    questions: [
      { question: "«من مرد را می‌بینم» چگونه می‌شود؟", options: ["Ich sehe der Mann.", "Ich sehe den Mann.", "Ich sehe das Mann.", "Ich sehe die Mann."], answer: 1 },
      { question: "«من یک کامپیوتر می‌خرم» چگونه می‌شود؟", options: ["Ich kaufe ein Computer.", "Ich kaufe einen Computer.", "Ich kaufe eine Computer.", "Ich kaufe der Computer."], answer: 1 },
      { question: "«من یک 'امپ نیاز دارم» چگونه می‌شود؟", options: ["Ich brauche ein Lampe.", "Ich brauche eine Lampe.", "Ich brauche einen Lampe.", "Ich brauche der Lampe."], answer: 1 },
      { question: "ضمیر «du» در Akkusativ چگونه می‌شود؟", options: ["dir", "dich", "du", "deiner"], answer: 1 },
      { question: "کدام فع' Akkusativ نمی‌گیرد؟", options: ["sehen", "kaufen", "sein", "lesen"], answer: 2 },
      { question: "در Akkusativ، حرف تعریف کدام جنسیت تغییر می‌کند؟", options: ["مؤنث", "خنثی", "مذکر", "جمع"], answer: 2 },
      { question: "«من تو را دوست دارم» چگونه می‌شود؟", options: ["Ich liebe du.", "Ich liebe dich.", "Ich liebe dir.", "Ich liebe dein."], answer: 1 },
      { question: "«او روزنامه را می‌خواند» چگونه می‌شود؟", options: ["Sie liest der Zeitung.", "Sie liest die Zeitung.", "Sie liest den Zeitung.", "Sie liest das Zeitung."], answer: 1 },
      { question: "«ما کیک را می‌خوریم» چگونه می‌شود؟", options: ["Wir essen der Kuchen.", "Wir essen den Kuchen.", "Wir essen das Kuchen.", "Wir essen die Kuchen."], answer: 1 },
      { question: "سؤا' برای شناسایی Akkusativ چیست؟", options: ["Wer? (کی؟)", "Was? (چه؟)", "Wen/Was? (چه کسی/چه چیزی را؟)", "Wann? (کی؟)"], answer: 2 }
    ]
  }
};
