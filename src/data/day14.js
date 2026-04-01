export const day14Data = {
  title: "روز ۱۴: تقویم - روزهای هفته، ماه‌ها، فصول + قرار ملاقات",
  objective: "در پایان این روز، شما می‌توانید روزهای هفته، ماه‌ها و فصول را نام ببرید و قرار ملاقات بسازید.",
  level: "A1",
  grammarData: {
    subtitle: "تقویم و قرار ملاقات",
    content: [
      {
        type: "text",
        title: "روزهای هفته",
        text: "روزهای هفته در آلمانی: der Montag (دوشنبه)، der Dienstag (سه‌شنبه)، der Mittwoch (چهارشنبه)، der Donnerstag (پنج‌شنبه)، der Freitag (جمعه)، der Samstag (شنبه)، der Sonntag (یکشنبه). توجه: در آلمانی روزهای هفته حرف تعریف ندارند وقتی می‌گوییم am Montag."
      },
      {
        type: "table",
        title: "روزهای هفته",
        rows: [
          { de: "der Montag [ˈmoːntaːk]", fa: "دوشنبه" },
          { de: "der Dienstag [ˈdiːnstaːk]", fa: "سه‌شنبه" },
          { de: "der Mittwoch [ˈmɪtvɔx]", fa: "چهارشنبه" },
          { de: "der Donnerstag [ˈdɔnɐ̯staːk]", fa: "پنج‌شنبه" },
          { de: "der Freitag [ˈfʁaɪtaːk]", fa: "جمعه" },
          { de: "der Samstag [ˈzamstaːk]", fa: "شنبه" },
          { de: "der Sonntag [ˈzɔntaːk]", fa: "یکشنبه" }
        ]
      },
      {
        type: "table",
        title: "ماه‌ها",
        rows: [
          { de: "der Januar [ˈjanʊaːɐ̯]", fa: "ژانویه" },
          { de: "der Februar [ˈfeːbʁʊaːɐ̯]", fa: "فوریه" },
          { de: "der März [mɛʁts]", fa: "مارس" },
          { de: "der April [aˈpʁɪl]", fa: "آوریل" },
          { de: "der Mai [maɪ]", fa: "مه" },
          { de: "der Juni [ˈjuːni]", fa: "ژوئن" },
          { de: "der Juli [ˈjuːli]", fa: "ژوئیه" },
          { de: "der August [aʊˈɡʊst]", fa: "آگوست" },
          { de: "der September [zɛpˈtɛmbɐ̯]", fa: "سپتامبر" },
          { de: "der Oktober [ɔkˈtoːbɐ̯]", fa: "اکتبر" },
          { de: "der November [noˈvɛmbɐ̯]", fa: "نوامبر" },
          { de: "der Dezember [dɛˈtsɛmbɐ̯]", fa: "دسامبر" }
        ]
      },
      {
        type: "table",
        title: "فصول",
        rows: [
          { de: "der Frühling [ˈfʁyːlɪŋ]", fa: "بهار" },
          { de: "der Sommer [ˈzɔmɐ̯]", fa: "تابستان" },
          { de: "der Herbst [hɛʁpst]", fa: "پاییز" },
          { de: "der Winter [ˈvɪntɐ̯]", fa: "زمستان" }
        ]
      },
      {
        type: "text",
        title: "ساختن قرار ملاقات",
        text: "برای ساختن قرار ملاقات از am + روز استفاده می‌کنیم: Am Montag habe ich einen Termin (دوشنبه قرار ملاقات دارم). Ich treffe dich am Samstag (شنبه ملاقات می‌کنیم). Wann hast du Zeit? (کی وقت داری؟) Ich habe am Dienstag Zeit (سه‌شنبه وقت دارم)."
      },
      {
        type: "examples",
        title: "مثال‌های قرار ملاقات",
        items: [
          { de: "Am Montag habe ich einen Arzttermin.", fa: "دوشنبه قرار پزشک دارم." },
          { de: "Treffen wir uns am Samstag?", fa: "شنبه ملاقات می‌کنیم؟" },
          { de: "Am Sonntag bin ich zu Hause.", fa: "یکشنبه خانه هستم." },
          { de: "Der Termin ist am Mittwoch.", fa: "قرار چهارشنبه است." },
          { de: "Am Freitag habe ich keine Zeit.", fa: "جمعه وقت ندارم." }
        ]
      },
      {
        type: "alert",
        title: "توجه: آم + روز",
        text: "در آلمانی برای بیان روز خاص می‌گوییم am + روز: am Montag، am Samstag. این ساختار از حروف تعریف جلوگیری می‌کند. برای تاریخ: der erste Mai (اول ماه مه)، am ersten Mai (در اول ماه مه)."
      },
      {
        type: "fill_blank",
        title: "تمرین: تقویم و قرار",
        instruction: "جملات را تکمیل کنید.",
        blanks: [
          { sentence: "___ ist der erste Tag der Woche.", answer: "Sonntag", hint: "یکشنبه" },
          { sentence: "Am ___ bin ich frei.", answer: "Freitag", hint: "جمعه" },
          { sentence: "Der ___ ist der kälteste Monat.", answer: "Januar", hint: "ژانویه" },
          { sentence: "Im ___ blühen die Blumen.", answer: "Frühling", hint: "بهار" },
          { sentence: "Ich habe einen Termin ___ Mittwoch.", answer: "am", hint: "در" },
          { de: "Der ___ hat 31 Tage.", answer: "Juli", hint: "ژوئیه" },
          { sentence: "___ Samstag muss ich arbeiten.", answer: "Am", hint: "شنبه" },
          { sentence: "Im ___ ist es kalt.", answer: "Winter", hint: "زمستان" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: تقویم",
        questions: [
          {
            question: "«دوشنبه» چگونه گفته می‌شود؟",
            questionDe: "Wie heißt \"Montag\" auf Deutsch?",
            options: [
              { text: "der Montag", isCorrect: true },
              { text: "der Montag", isCorrect: false },
              { text: "die Montag", isCorrect: false },
              { text: "ein Montag", isCorrect: false }
            ],
            explanation: "روزهای هفته مذکر هستند و با der می‌آیند."
          },
          {
            question: "کدام ماه اول تابستان است؟",
            questionDe: "Welcher Monat ist der erste Sommermonat?",
            options: [
              { text: "Juni", isCorrect: true },
              { text: "Mai", isCorrect: false },
              { text: "Juli", isCorrect: false },
              { text: "August", isCorrect: false }
            ],
            explanation: "ژوئن اولین ماه تابستان است."
          },
          {
            question: "«در دوشنبه» چگونه گفته می‌شود؟",
            questionDe: "Wie sagt man \"am Montag\"?",
            options: [
              { text: "Am Montag", isCorrect: true },
              { text: "Im Montag", isCorrect: false },
              { text: "Auf Montag", isCorrect: false },
              { text: "Nach Montag", isCorrect: false }
            ],
            explanation: "«am» = «an dem» = «در» + روز."
          },
          {
            question: "کدام فصل پاییز است؟",
            questionDe: "Welche Jahreszeit ist Herbst?",
            options: [
              { text: "der Herbst", isCorrect: true },
              { text: "der Sommer", isCorrect: false },
              { text: "der Winter", isCorrect: false },
              { text: "der Frühling", isCorrect: false }
            ],
            explanation: "پاییز = der Herbst"
          },
          {
            question: "قرار ملاقات چیست؟",
            questionDe: "Wie heißt \"Termin\" auf Deutsch?",
            options: [
              { text: "der Termin", isCorrect: true },
              { text: "die Termin", isCorrect: false },
              { text: "das Termin", isCorrect: false },
              { text: "Termine", isCorrect: false }
            ],
            explanation: "Termin مذکر است."
          }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "روزهای هفته",
        words: [
          { de: "der Montag", fa: "دوشنبه", article: "der", plural: "die Montage", ipa: "[ˈmoːntaːk]", examples: [{ de: "Am Montag arbeite ich.", fa: "دوشنبه‌ها کار می‌کنم." }] },
          { de: "der Dienstag", fa: "سه‌شنبه", article: "der", plural: "die Dienstage", ipa: "[ˈdiːnstaːk]", examples: [{ de: "Dienstag ist der dritte Tag.", fa: "سه‌شنبه سومین روز است." }] },
          { de: "der Mittwoch", fa: "چهارشنبه", article: "der", plural: "die Mittwoche", ipa: "[ˈmɪtvɔx]", examples: [{ de: "Mittwoch ist in der Mitte der Woche.", fa: "چهارشنبه در وسط هفته است." }] },
          { de: "der Donnerstag", fa: "پنج‌شنبه", article: "der", plural: "die Donnerstage", ipa: "[ˈdɔnɐ̯staːk]", examples: [{ de: "Donnerstag ist vor Freitag.", fa: "پنج‌شنبه قبل از جمعه است." }] },
          { de: "der Freitag", fa: "جمعه", article: "der", plural: "die Freitage", ipa: "[ˈfʁaɪtaːk]", examples: [{ de: "Freitag ist der letzte Arbeitstag.", fa: "جمعه آخرین روز کاری هفته است." }] },
          { de: "der Samstag", fa: "شنبه", article: "der", plural: "die Samstage", ipa: "[ˈzamstaːk]", examples: [{ de: "Am Samstag gehe ich einkaufen.", fa: "شنبه‌ها خرید می‌روم." }] },
          { de: "der Sonntag", fa: "یکشنبه", article: "der", plural: "die Sonntage", ipa: "[ˈzɔntaːk]", examples: [{ de: "Sonntag ist der Ruhetag.", fa: "یکشنبه روز استراحت است." }] },
          { de: "die Woche [ˈvɔxə]", fa: "هفته", article: "die", plural: "die Wochen", examples: [{ de: "Eine Woche hat sieben Tage.", fa: "یک هفته هفت روز دارد." }] },
          { de: "das Wochenende", fa: "آخر هفته", article: "das", plural: "die Wochenenden", examples: [{ de: "Am Wochenende ruhen wir.", fa: "آخر هفته استراحت می‌کنیم." }] }
        ]
      },
      {
        title: "ماه‌ها",
        words: [
          { de: "der Januar", fa: "ژانویه", article: "der", ipa: "[ˈjanʊaːɐ̯]", examples: [{ de: "Im Januar ist es kalt.", fa: "ژانویه سرد است." }] },
          { de: "der Februar", fa: "فوریه", article: "der", ipa: "[ˈfeːbʁʊaːɐ̯]", examples: [{ de: "Der Februar hat 28 oder 29 Tage.", fa: "فوریه ۲۸ یا ۲۹ روز دارد." }] },
          { de: "der März", fa: "مارس", article: "der", ipa: "[mɛʁts]", examples: [{ de: "Im März beginnt der Frühling.", fa: "مارس شروع بهار است." }] },
          { de: "der April", fa: "آوریل", article: "der", ipa: "[aˈpʁɪl]", examples: [{ de: "Im April regnet es oft.", fa: "آوریل اغلب بارانی است." }] },
          { de: "der Mai", fa: "مه", article: "der", ipa: "[maɪ]", examples: [{ de: "Der Mai ist der Monat der Blumen.", fa: "مه ماه گل‌ها است." }] },
          { de: "der Juni", fa: "ژوئن", article: "der", ipa: "[ˈjuːni]", examples: [{ de: "Im Juni beginnt der Sommer.", fa: "ژوئن شروع تابستان است." }] },
          { de: "der Juli", fa: "ژوئیه", article: "der", ipa: "[ˈjuːli]", examples: [{ de: "Der Juli ist der wärmste Monat.", fa: "ژوئیه گرم‌ترین ماه است." }] },
          { de: "der August", fa: "آگوست", article: "der", ipa: "[aʊˈɡʊst]", examples: [{ de: "Im August sind Ferien.", fa: "آگوست تعطیلات تابستانی است." }] },
          { de: "der September", fa: "سپتامبر", article: "der", ipa: "[zɛpˈtɛmbɐ̯]", examples: [{ de: "Im September beginnt die Schule.", fa: "سپتامبر شروع مدرسه است." }] },
          { de: "der Oktober", fa: "اکتبر", article: "der", ipa: "[ɔkˈtoːbɐ̯]", examples: [{ de: "Im Oktober werden die Blätter bunt.", fa: "اکتبر برگ‌ها رنگی می‌شوند." }] },
          { de: "der November", fa: "نوامبر", article: "der", ipa: "[noˈvɛmbɐ̯]", examples: [{ de: "Im November ist es oft neblig.", fa: "نوامبر اغلب مه‌آلود است." }] },
          { de: "der Dezember", fa: "دسامبر", article: "der", ipa: "[dɛˈtsɛmbɐ̯]", examples: [{ de: "Im Dezember ist Weihnachten.", fa: "دسامبر کریسمس است." }] }
        ]
      },
      {
        title: "فصول و قرار ملاقات",
        words: [
          { de: "der Frühling", fa: "بهار", article: "der", ipa: "[ˈfʁyːlɪŋ]", examples: [{ de: "Im Frühling blühen die Blumen.", fa: "بهار گل‌ها شکوفه می‌دهند." }] },
          { de: "der Sommer", fa: "تابستان", article: "der", ipa: "[ˈzɔmɐ̯]", examples: [{ de: "Im Sommer ist es warm.", fa: "تابستان گرم است." }] },
          { de: "der Herbst", fa: "پاییز", article: "der", ipa: "[hɛʁpst]", examples: [{ de: "Im Herbst fallen die Blätter.", fa: "پاییز برگ‌ها می‌ریزند." }] },
          { de: "der Winter", fa: "زمستان", article: "der", ipa: "[ˈvɪntɐ̯]", examples: [{ de: "Im Winter schneit es oft.", fa: "زمستان اغثل می‌برفد." }] },
          { de: "der Termin", fa: "قرار ملاقات", article: "der", plural: "die Termine", ipa: "[tɛʁˈmiːn]", examples: [{ de: "Ich habe einen Termin.", fa: "قرار ملاقات دارم." }] },
          { de: "die Zeit [tsaɪt]", fa: "وقت", article: "die", plural: "die Zeiten", examples: [{ de: "Ich habe keine Zeit.", fa: "وقت ندارم." }] },
          { de: "treffen", fa: "ملاقات کردن", article: "", plural: "", ipa: "[ˈtʁɛfən]", conjugation: { ich:"treffe", du:"triffst", er:"trifft", wir:"treffen", ihr:"trefft", sie:"treffen" }, examples: [{ de: "Wir treffen uns am Samstag.", fa: "شنبه ملاقات می‌کنیم." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Meine Woche. Am Montag arbeite ich von acht bis fünf. Am Dienstag habe ich einen Arzttermin um vierzehn Uhr. Am Mittwoch treffe ich meine Freundin um achtzehn Uhr. Am Donnerstag gehe ich einkaufen. Am Freitagabend gehe ich ins Kino. Am Samstagmorgen schlafe ich lange. Am Sonntag bin ich mit meiner Familie zusammen.",
      translation: "هفته من. دوشنبه از هشت تا پنج کار می‌کنم. سه‌شنبه ساعت چهارده قرار پزشک دارم. چهارشنبه ساعت هجده با دوستم ملاقات می‌کنم. پنج‌شنبه خرید می‌روم. جمعه شب به سینما می‌روم. شنبه صبح طولانی می‌خوابم. یکشنبه با خانواده‌ام می‌مانم.",
      questions: [
        { question: "چه روزی قرار پزشک دارد؟", answer: "سه‌شنبه" },
        { question: "چه روزی به سینما می‌رود؟", answer: "جمعه شب" },
        { question: "کی با خانواده است؟", answer: "یکشنبه" }
      ]
    },
    {
      text: "Lisa: Hast du am Samstag Zeit? Max: Ja, warum? Lisa: Wir könnten ins Museum gehen. Max: Das ist eine gute Idee! Um wie viel Uhr treffen wir uns? Lisa: Um zehn Uhr am Eingang? Max: Perfekt! Ich komme um zehn. Lisa: Bis Samstag then! Max: Bis Samstag!",
      translation: "لیزا: شنبه وقت داری؟ ماکس: بله، چرا؟ لیزا: می‌توانیم به موزه برویم. ماکس: این ایده خوبی است! ساعت چند ملاقات کنیم؟ لیزا: ساعت ده ورودی؟ ماکس: عالی! ساعت ده می‌آیم. لیزا: تا شنبه! ماکس: تا شنبه!",
      questions: [
        { question: "کجا می‌روند؟", answer: "به موزه" },
        { question: "چه ساعتی ملاقات می‌کنند؟", answer: "ساعت ده" }
      ]
    }
  ],
  writing: [
    {
      title: "برنامه هفتگی",
      prompt: "برنامه هفتگی خود را بنویسید با ذکر روزها و فعالیت‌ها.",
      steps: [
        { title: "روزهای کاری", text: "دوشنبه تا جمعه چه کاری انجام می‌دهید؟", example: { de: "Am Montag arbeite ich.", fa: "دوشنبه کار می‌کنم." } },
        { title: "آخر هفته", text: "شنبه و یکشنبه چه کاری انجام می‌دهید؟", example: { de: "Am Wochenende ruhe ich mich aus.", fa: "آخر هفته استراحت می‌کنم." } }
      ],
      modelAnswer: "Am Montag arbeite ich von neun bis fünf. Am Dienstag habe ich einen Termin beim Arzt. Am Mittwoch treffe ich meine Freundin. Am Donnerstag lerne ich Deutsch. Am Freitagabend gehe ich aus. Am Samstagmorgen schlafe ich lange. Am Sonntag bin ich mit meiner Familie."
    }
  ],
  listening: [
    {
      title: "گوش دادن به قرار ملاقات",
      instruction: "به مکالمه گوش دهید و روز و ساعت قرار را بنویسید.",
      sentences: [
        { de: "Hast du am Dienstag Zeit?", fa: "سه‌شنبه وقت داری؟", tts: "Hast du am Dienstag Zeit?" },
        { de: "Ja, um vierzehn Uhr.", fa: "بله، ساعت چهارده.", tts: "Ja, um vierzehn Uhr." },
        { de: "Wir treffen uns am Samstag.", fa: "شنبه ملاقات می‌کنیم.", tts: "Wir treffen uns am Samstag." },
        { de: "Am Sonntag bin ich zu Hause.", fa: "یکشنبه خانه هستم.", tts: "Am Sonntag bin ich zu Hause." }
      ]
    }
  ],
  speaking: [
    {
      title: "ساختن قرار",
      pattern: "Hast du am [روز] Zeit? - Ja, um [ساعت] Uhr.",
      exercise: "سه قرار ملاقات با دوستان بسازید."
    }
  ],
  cultureTip: "در آلمان، قرار ملاقات بسیار مهم است و迟到 مردود است. معمولاً از قبل برنامه‌ریزی می‌کنند. آخر هفته‌ها (Wochenende) برای خانواده و استراحت اختصاص دارد. شنبه‌ها معمولاً روز خرید است چون مغازه‌ها باز هستند.",
  examData: {
    questions: [
      { question: "«دوشنبه» چیست؟", options: ["der Montag", "der Dienstag", "der Mittwoch", "der Freitag"], answer: 0 },
      { question: "«سپتامبر» چیست؟", options: ["der September", "der Oktober", "der November", "der August"], answer: 0 },
      { question: "«بهار» چیست؟", options: ["der Frühling", "der Sommer", "der Herbst", "der Winter"], answer: 0 },
      { question: "ساختار «در دوشنبه» چیست؟", options: ["am Montag", "im Montag", "auf Montag", "nach Montag"], answer: 0 },
      { question: "«قرار ملاقات» چیست؟", options: ["der Termin", "die Termin", "das Termin", "Termine"], answer: 0 },
      { question: "کدام شنبه است؟", options: ["Samstag", "Sonntag", "Montag", "Freitag"], answer: 0 },
      { question: "«من وقت دارم» چگونه گفته می‌شود؟", options: ["Ich habe Zeit.", "Ich bin Zeit.", "Ich mache Zeit.", "Ich spare Zeit."], answer: 0 },
      { question: "«ملاقات کردن» چیست؟", options: ["treffen", "finden", "kommen", "gehen"], answer: 0 },
      { question: "کدام ماه سردترین است؟", options: ["Dezember", "Januar", "Februar", "März"], answer: 0 },
      { question: "«یکشنبه» چیست؟", options: ["Sonntag", "Samstag", "Montag", "Dienstag"], answer: 0 }
    ]
  }
};