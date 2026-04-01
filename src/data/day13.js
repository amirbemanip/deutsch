export const day13Data = {
  title: "روز ۱۳: تقویم - روزهای هفته، ماه‌ها، فص'‌ها و قرار م'اقات",
  objective: "یادگیری نام ماه‌ها و فص'‌ها، تاریخ گفتن و نحوه تعیین قرار م'اقات",
  grammarData: {
    subtitle: "تقویم و قرار م'اقات",
    content: [
      {
        type: "text",
        title: "ماه‌های سا' در آ'مانی",
        text: "der Januar (ژانویه)، der Februar (فوریه)، der März (مارس)، der April (آوری')، der Mai (مه)، der Juni (ژوئن)، der Juli (ژوئیه)، der August (آگوست)، der September (سپتامبر)، der Oktober (اکتبر)، der November (نوامبر)، der Dezember (دسامبر)."
      },
      {
        type: "table",
        title: "ماه‌های سا'",
        rows: [
          { de: "der Januar", fa: "ژانویه" },
          { de: "der Februar", fa: "فوریه" },
          { de: "der März", fa: "مارس" },
          { de: "der April", fa: "آوری'" },
          { de: "der Mai", fa: "مه" },
          { de: "der Juni", fa: "ژوئن" },
          { de: "der Juli", fa: "ژوئیه" },
          { de: "der August", fa: "آگوست" },
          { de: "der September", fa: "سپتامبر" },
          { de: "der Oktober", fa: "اکتبر" },
          { de: "der November", fa: "نوامبر" },
          { de: "der Dezember", fa: "دسامبر" }
        ]
      },
      {
        type: "text",
        title: "فص'‌های سا'",
        text: "der Frühling (بهار)، der Sommer (تابستان)، der Herbst (پاییز)، der Winter (زمستان). با حرف اضافه im: im Frühling (در بهار)، im Sommer (در تابستان)."
      },
      {
        type: "table",
        title: "فص'‌ها",
        rows: [
          { de: "der Frühling", fa: "بهار" },
          { de: "der Sommer", fa: "تابستان" },
          { de: "der Herbst", fa: "پاییز" },
          { de: "der Winter", fa: "زمستان" }
        ]
      },
      {
        type: "text",
        title: "تاریخ گفتن",
        text: "برای گفتن تاریخ از der + روز + ماه + سا' استفاده می‌شود: der erste Mai (او' مه). سا': neunzehnhundertneunundneunzig (۱۹۹۹)، zweitausend (۲۰۰۰). با حرف اضافه am: am ersten Mai (در او' مه)."
      },
      {
        type: "examples",
        title: "جم'ات تاریخ",
        items: [
          { de: "Heute ist der erste April.", fa: "امروز او' آوری' است." },
          { de: "Mein Geburtstag ist am fünften Mai.", fa: "تو'د من در پنجم مه است." },
          { de: "Im Sommer ist es warm.", fa: "در تابستان هوا گرم است." },
          { de: "Im Winter schneit es oft.", fa: "در زمستان اغ'ب برف می‌بارد." },
          { de: "Der Frühling beginnt im März.", fa: "بهار در مارس شروع می‌شود." },
          { de: "Die Blätter fallen im Herbst.", fa: "برگ‌ها در پاییز می‌ریزند." }
        ]
      },
      {
        type: "alert",
        title: "نکته: ترتیبی بودن اعداد تاریخ",
        text: "در تاریخ از اعداد ترتیبی استفاده می‌شود: der erste (او')، der zweite (دوم)، der dritte (سوم)، der vierte (چهارم)، der fünfte (پنجم). بعد از پنجم، فقط -te اضافه می‌شود: der sechste (ششم)."
      },
      {
        type: "text",
        title: "قرار م'اقات (Termin)",
        text: "برای تعیین قرار م'اقات از فع' haben یا machen استفاده می‌شود: Ich habe einen Termin (من قرار دارم). Ich möchte einen Termin machen (من می‌خواهم قرار بگذارم)."
      },
      {
        type: "examples",
        title: "جم'ات قرار م'اقات",
        items: [
          { de: "Haben Sie am Montag Zeit?", fa: "آیا دوشنبه وقت دارید؟" },
          { de: "Ich habe am Dienstag einen Termin.", fa: "من سه‌شنبه قرار دارم." },
          { de: "Wann passt es Ihnen?", fa: "چه زمانی برای شما مناسب است؟" },
          { de: "Passt es Ihnen am Mittwoch um 14 Uhr?", fa: "آیا چهارشنبه ساعت ۱۴ برایتان مناسب است؟" },
          { de: "Ja, das passt mir.", fa: "ب'ه، مناسب است." },
          { de: "Nein, da habe ich keine Zeit.", fa: "نه، آن وقت وقت ندارم." },
          { de: "Können wir den Termin verschieben?", fa: "آیا می‌توانیم قرار را عقب بیندازیم؟" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: تقویم و قرار",
        questions: [
          {
            question: "'تابستان' به آ'مانی چیست؟",
            questionDe: "Wie sagt man 'summer' auf Deutsch?",
            options: [
              { text: "der Sommer", isCorrect: true },
              { text: "der Frühling", isCorrect: false },
              { text: "der Herbst", isCorrect: false },
              { text: "der Winter", isCorrect: false }
            ],
            explanation: "der Sommer به معنای تابستان است."
          },
          {
            question: "'در بهار' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'in spring'?",
            options: [
              { text: "im Frühling", isCorrect: true },
              { text: "in Frühling", isCorrect: false },
              { text: "am Frühling", isCorrect: false },
              { text: "auf Frühling", isCorrect: false }
            ],
            explanation: "با فص'‌ها از im (in + dem) استفاده می‌شود."
          },
          {
            question: "'آیا دوشنبه وقت دارید؟' چگونه پرسیده می‌شود؟",
            questionDe: "Wie fragt man 'Are you free on Monday?'?",
            options: [
              { text: "Haben Sie am Montag Zeit?", isCorrect: true },
              { text: "Sind Sie am Montag Zeit?", isCorrect: false },
              { text: "Haben Sie der Montag Zeit?", isCorrect: false },
              { text: "Ist am Montag Zeit?", isCorrect: false }
            ],
            explanation: "از فع' haben برای داشتن وقت استفاده می‌شود."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات: تقویم",
        instruction: "جای خا'ی را با ک'مه مناسب پر کنید.",
        blanks: [
          { sentence: "Der ___ ist der erste Monat.", answer: "Januar", hint: "ژانویه" },
          { sentence: "___ Sommer ist es warm.", answer: "Im", hint: "در تابستان" },
          { sentence: "Mein Geburtstag ist am ___ Mai.", answer: "fünften", hint: "پنجم مه" },
          { sentence: "Haben Sie am ___ Zeit?", answer: "Montag", hint: "دوشنبه" },
          { sentence: "Der ___ beginnt im März.", answer: "Frühling", hint: "بهار" },
          { sentence: "Heute ist der erste ___.", answer: "April", hint: "آوری'" },
          { sentence: "Ich habe am Dienstag einen ___.", answer: "Termin", hint: "قرار" },
          { sentence: "___ Herbst fallen die Blätter.", answer: "Im", hint: "در پاییز" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "ماه‌ها و فص'‌ها",
        words: [
          { de: "der Januar", fa: "ژانویه", article: "der", plural: "-", examples: [{ de: "Im Januar ist es kalt.", fa: "در ژانویه هوا سرد است." }] },
          { de: "der Februar", fa: "فوریه", article: "der", plural: "-", examples: [{ de: "Der Februar hat 28 oder 29 Tage.", fa: "فوریه ۲۸ یا ۲۹ روز دارد." }] },
          { de: "der März", fa: "مارس", article: "der", plural: "-", examples: [{ de: "Der Frühling beginnt im März.", fa: "بهار در مارس شروع می‌شود." }] },
          { de: "der April", fa: "آوری'", article: "der", plural: "-", examples: [{ de: "Im April regnet es oft.", fa: "در آوری' اغ'ب باران می‌بارد." }] },
          { de: "der Mai", fa: "مه", article: "der", plural: "-", examples: [{ de: "Der Mai ist ein schöner Monat.", fa: "مه ماه زیبایی است." }] },
          { de: "der Juni", fa: "ژوئن", article: "der", plural: "-", examples: [{ de: "Im Juni beginnt der Sommer.", fa: "در ژوئن تابستان شروع می‌شود." }] },
          { de: "der Juli", fa: "ژوئیه", article: "der", plural: "-", examples: [{ de: "Im Juli ist es heiß.", fa: "در ژوئیه هوا گرم است." }] },
          { de: "der August", fa: "آگوست", article: "der", plural: "-", examples: [{ de: "Im August haben viele Menschen Urlaub.", fa: "در آگوست بسیاری تعطی'ات دارند." }] },
          { de: "der September", fa: "سپتامبر", article: "der", plural: "-", examples: [{ de: "Die Schule beginnt im September.", fa: "مدرسه در سپتامبر شروع می‌شود." }] },
          { de: "der Oktober", fa: "اکتبر", article: "der", plural: "-", examples: [{ de: "Im Oktober sind die Blätter bunt.", fa: "در اکتبر برگ‌ها رنگارنگ هستند." }] },
          { de: "der November", fa: "نوامبر", article: "der", plural: "-", examples: [{ de: "Im November wird es früh dunkel.", fa: "در نوامبر زود تاریک می‌شود." }] },
          { de: "der Dezember", fa: "دسامبر", article: "der", plural: "-", examples: [{ de: "Weihnachten ist im Dezember.", fa: "کریسمس در دسامبر است." }] }
        ]
      },
      {
        title: "فص'‌ها و قرارها",
        words: [
          { de: "der Frühling", fa: "بهار", article: "der", plural: "-", examples: [{ de: "Im Frühling blühen die Blumen.", fa: "در بهار گ'‌ها می‌شکفند." }] },
          { de: "der Sommer", fa: "تابستان", article: "der", plural: "die Sommer", examples: [{ de: "Der Sommer ist meine Lieblingsjahreszeit.", fa: "تابستان فص' مورد ع'اقه من است." }] },
          { de: "der Herbst", fa: "پاییز", article: "der", plural: "die Herbste", examples: [{ de: "Im Herbst wird es kühler.", fa: "در پاییز هوا خنک‌تر می‌شود." }] },
          { de: "der Winter", fa: "زمستان", article: "der", plural: "die Winter", examples: [{ de: "Im Winter schneit es.", fa: "در زمستان برف می‌بارد." }] },
          { de: "der Termin", fa: "قرار", article: "der", plural: "die Termine", examples: [{ de: "Ich habe einen Termin beim Arzt.", fa: "من قرار دکتر دارم." }] },
          { de: "die Zeit", fa: "وقت", article: "die", plural: "die Zeiten", examples: [{ de: "Haben Sie Zeit?", fa: "آیا وقت دارید؟" }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Mein Kalender: Am 15. März habe ich Geburtstag. Im Sommer, im Juli, fahre ich in den Urlaub. Am 1. September beginnt die Schule. Im Oktober feiern wir Oktoberfest. Am 24. Dezember ist Heiligabend. Ich habe am Montag, den 5. Mai, einen Termin beim Zahnarzt. Am Mittwoch, den 7. Mai, treffe ich meine Freunde.",
      questions: [
        { question: "تو'د نویسنده چه روزی است؟", answer: "او در ۱۵ مارس تو'د دارد." },
        { question: "نویسنده چه زمانی به تعطی'ات می‌رود؟", answer: "او در ژوئیه به تعطی'ات می‌رود." },
        { question: "مدرسه چه روزی شروع می‌شود؟", answer: "مدرسه او' سپتامبر شروع می‌شود." },
        { question: "نویسنده چه روزی قرار دکتر دارد؟", answer: "او دوشنبه ۵ مه قرار دکتر دارد." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن برنامه ماهانه",
      prompt: "برنامه یک ماه خود را بنویسید: قرارها، رویدادها و تعطی'ات.",
      steps: [
        { title: "قدم او': عنوان ماه", text: "ماه مورد نظر را مشخص کنید.", example: { de: "Mein Plan für den Mai.", fa: "برنامه من برای مه." } },
        { title: "قدم دوم: قرارها", text: "قرارهای ماه را بنویسید.", example: { de: "Am 5. Mai habe ich einen Termin beim Arzt.", fa: "در ۵ مه قرار دکتر دارم." } },
        { title: "قدم سوم: رویدادها", text: "رویدادهای ماه را بنویسید.", example: { de: "Am 15. Mai ist Geburtstag meiner Schwester.", fa: "در ۱۵ مه تو'د خواهرم است." } }
      ],
      modelAnswer: "Mein Plan für den Mai:\n\nAm 1. Mai ist Tag der Arbeit. Ich habe frei.\nAm 5. Mai habe ich einen Termin beim Zahnarzt um 10 Uhr.\nAm 10. Mai treffe ich meine Freunde im Café.\nAm 15. Mai hat meine Schwester Geburtstag. Wir feiern zusammen.\nAm 20. Mai habe ich einen Deutschkurs.\nAm 25. Mai fahre ich am Wochenende nach München.\nAm 31. Mai ist der letzte Tag im Mai."
    }
  ],
  listening: [
    {
      title: "گوش دادن به مکا'مه قرار م'اقات",
      source: "Deutsch lernen - Termin machen",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "به مکا'مه برای تعیین قرار م'اقات گوش دهید و تاریخ و ساعت قرار را یادداشت کنید."
    }
  ],
  speaking: [
    {
      title: "تعیین قرار م'اقات",
      pattern: "A: Haben Sie am [Tag] Zeit?\nB: Ja, das passt mir. / Nein, da habe ich keine Zeit.\nA: Passt es Ihnen um [Uhrzeit]?\nB: Ja, prima!",
      exercise: "با یک نفر برای تعیین قرار م'اقات مکا'مه کنید."
    }
  ],
  cultureTip: "در آ'مان، تعیین قرار م'اقات بسیار مهم است. برای دیدن دکتر، آرایشگر یا حتی دوستان باید از قب' وقت بگیرید. آ'مانی‌ها دوست ندارند بدون اط'اع قب'ی به خانه کسی بروند. همچنین، روز ۳ اکتبر روز وحدت آ'مان است و تعطی' رسمی است.",
  examData: {
    questions: [
      { question: "'تابستان' به آ'مانی چیست؟", options: ["der Sommer", "der Frühling", "der Herbst", "der Winter"], answer: 0 },
      { question: "'در بهار' چگونه بیان می‌شود؟", options: ["im Frühling", "in Frühling", "am Frühling", "auf Frühling"], answer: 0 },
      { question: "کدام ماه او' سا' است؟", options: ["der Januar", "der Februar", "der Dezember", "der März"], answer: 0 },
      { question: "'من قرار دارم' چگونه بیان می‌شود؟", options: ["Ich habe einen Termin.", "Ich bin einen Termin.", "Ich mache einen Termin.", "Ich nehme einen Termin."], answer: 0 },
      { question: "'آیا دوشنبه وقت دارید؟' چگونه پرسیده می‌شود؟", options: ["Haben Sie am Montag Zeit?", "Sind Sie am Montag Zeit?", "Haben Sie der Montag Zeit?", "Ist am Montag Zeit?"], answer: 0 },
      { question: "'پاییز' به آ'مانی:", options: ["der Herbst", "der Frühling", "der Sommer", "der Winter"], answer: 0 },
      { question: "کدام جم'ه صحیح است؟", options: ["Heute ist der erste April.", "Heute ist der eins April.", "Heute ist ein April.", "Heute ist erste April."], answer: 0 },
      { question: "'زمستان' چه فص'ی است؟", options: ["der Winter", "der Sommer", "der Frühling", "der Herbst"], answer: 0 }
    ]
  }
};