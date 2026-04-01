export const day17Data = {
  title: "روز ۱۷: افعال جداشدنی (Trennbare Verben) - بخش عمیق",
  objective: "در پایان این روز، شما می‌توانید از افعال جداشدنی به درستی استفاده کنید و ساختار آنها را در جمله بفهمید.",
  level: "A2",
  grammarData: {
    subtitle: "افعال جداشدنی",
    content: [
      {
        type: "text",
        title: "قاعده افعال جداشدنی",
        text: "افعال جداشدنی افعالی هستند که یک پیشوند (prefix) دارند. این پیشوند در جمله اصلی از فعل جدا می‌شود و به آخر جمله می‌رود. در حالی که فعل اصلی در موقعیت دوم قرار می‌گیرد. مثال: aufstehen → Ich stehe um sieben Uhr auf (من ساعت هفت بیدار می‌شوم)."
      },
      {
        type: "table",
        title: "پیشوندهای جداشدنی رایج",
        rows: [
          { de: "ab-", fa: "از، پایین" },
          { de: "an-", fa: "شروع، به" },
          { de: "auf-", fa: "باز، بالا" },
          { de: "aus-", fa: "بیرون، تمام شدن" },
          { de: "ein-", fa: "داخل" },
          { de: "mit-", fa: "با هم" },
          { de: "nach-", fa: "بعد، به سمت" },
          { de: "zu-", fa: "به سمت، بستن" },
          { de: "vor-", fa: "قبل، جلو" },
          { de: "weg-", fa: "دور" }
        ]
      },
      {
        type: "text",
        title: "افعال جداشدنی رایج",
        text: "بیایید افعال مهم را یاد بگیریم: ankommen (رسیدن)، einkaufen (خرید کردن)، fernsehen (تلویزیون دیدن)، aufräumen (مرتب کردن)، vorstellen (معرفی کردن)، mitkommen (همراه آمدن)، ausfüllen (پر کردن)، aufstehen (بیدار شدن)، zumachen (بستن)، weggehen (رفتن)."
      },
      {
        type: "examples",
        title: "مثال‌های مهم",
        items: [
          { de: "Der Zug kommt um acht Uhr an.", fa: "قطار ساعت هشت می‌رسد." },
          { de: "Ich kaufe am Samstag ein.", fa: "شنبه خرید می‌کنم." },
          { de: "Ich sehe jeden Abend fern.", fa: "هر شب تلویزیون می‌بینم." },
          { de: "Ich räume mein Zimmer auf.", fa: "اتاقم را مرتب می‌کنم." },
          { de: "Ich stelle mich vor: Ich heiße Hans.", fa: "معرفی می‌کنم: نامم هانس است." },
          { de: "Kommst du mit?", fa: "همراه می‌آیی؟" }
        ]
      },
      {
        type: "alert",
        title: "قاعده مهم: جایگاه پیشوند",
        text: "پیشوند همیشه در آخر جمله اصلی می‌آید! این یکی از مهم‌ترین قواعد آلمانی است. Ich stehe um sieben Uhr auf (صحیح). Ich aufstehe um sieben Uhr (غلط). Ich stehe auf um sieben Uhr (غلط)."
      },
      {
        type: "text",
        title: "افعال غیرجداشدنی (استثناها)",
        text: "بعضی افعال جداشدنی نیستند و پیشوند آنها همیشه به فعل چسبیده می‌ماند. اینها را باید حفظ کنید: erzählen (گفتن)، bekommen (گرفتن)، verstehen (فهمیدن)، versprechen (وعده دادن)، gefallen (پسندیدن)، verkaufen (فروختن)."
      },
      {
        type: "fill_blank",
        title: "تمرین: افعال جداشدنی",
        instruction: "پیشوند را به جای درست بگذارید.",
        blanks: [
          { sentence: "Ich ___ um sechs Uhr ___ (aufstehen).", answer: "stehe...auf", hint: "بیدار شدن" },
          { sentence: "Er ___ spät ___ (ankommen).", answer: "kommt...an", hint: "رسیدن" },
          { sentence: "Wir ___ am Samstag ___ (einkaufen).", answer: "kaufen...ein", hint: "خرید کردن" },
          { sentence: "Sie ___ das Fenster ___ (zumachen).", answer: "macht...zu", hint: "بستن" },
          { sentence: "Ich ___ meinen Freund ___ (vorstellen).", answer: "stelle...vor", hint: "معرفی کردن" },
          { sentence: "Er ___ immer ___ (fernsehen).", answer: "sieht...fern", hint: "تلویزیون دیدن" },
          { sentence: "Wir ___ um neun Uhr ___ (weggehen).", answer: "gehen...weg", hint: "رفتن" },
          { sentence: "Sie ___ das Formular ___ (ausfüllen).", answer: "füllt...aus", hint: "پر کردن" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: افعال جداشدنی",
        questions: [
          {
            question: "«بیدار شدن» چیست؟",
            questionDe: "Wie heißt \"aufstehen\"?",
            options: [
              { text: "aufstehen", isCorrect: true },
              { text: "stehenauf", isCorrect: false },
              { text: "anstehen", isCorrect: false },
              { text: "ausstehen", isCorrect: false }
            ],
            explanation: "پیشوند auf جداشدنی است."
          },
          {
            question: "«خرید کردن» کدام است؟",
            questionDe: "Welches Verb bedeutet \"einkaufen\"?",
            options: [
              { text: "einkaufen", isCorrect: true },
              { text: "auskaufen", isCorrect: false },
              { text: "verkaufen", isCorrect: false },
              { text: "ankaufen", isCorrect: false }
            ],
            explanation: "ein + kaufen = خرید کردن"
          },
          {
            question: "پیشوند «an» در کدام فعل است؟",
            questionDe: "Welches Verb hat das Präfix \"an-\"?",
            options: [
              { text: "ankommen", isCorrect: true },
              { text: "aufstehen", isCorrect: false },
              { text: "weggehen", isCorrect: false },
              { text: "zumachen", isCorrect: false }
            ],
            explanation: "ankommen = رسیدن"
          },
          {
            question: "کدام غیرجداشدنی است؟",
            questionDe: "Welches Verb ist untrennbar?",
            options: [
              { text: "erzählen", isCorrect: true },
              { text: "aufstehen", isCorrect: false },
              { text: "einkaufen", isCorrect: false },
              { text: "anmachen", isCorrect: false }
            ],
            explanation: "erzählen یک فعل غیرجداشدنی است."
          }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "افعال جداشدنی",
        words: [
          { de: "aufstehen", fa: "بیدار شدن / بلند شدن", article: "", ipa: "[ˈaʊfʃtantən]", conjugation: { ich:"stehe...auf", du:"stehst...auf", er:"steht...auf", wir:"stehen...auf", ihr:"steht...auf", sie:"stehen...auf" }, examples: [{ de: "Ich stehe um sechs Uhr auf.", fa: "ساعت شش بیدار می‌شوم." }] },
          { de: "ankommen", fa: "رسیدن", article: "", ipa: "[ˈankɔmən]", conjugation: { ich:"komme...an", du:"kommst...an", er:"kommt...an", wir:"kommen...an", ihr:"kommt...an", sie:"kommen...an" }, examples: [{ de: "Der Zug kommt um zehn Uhr an.", fa: "قطار ساعت ده می‌رسد." }] },
          { de: "einkaufen", fa: "خرید کردن", article: "", ipa: "[ˈaɪnkaʊfən]", conjugation: { ich:"kaufe...ein", du:"kaufst...ein", er:"kauft...ein", wir:"kaufen...ein", ihr:"kauft...ein", sie:"kaufen...ein" }, examples: [{ de: "Ich kaufe Brot ein.", fa: "نان می‌خرم." }] },
          { de: "fernsehen", fa: "تلویزیون دیدن", article: "", ipa: "[fɛʁnˈzeːən]", conjugation: { ich:"sehe...fern", du:"siehst...fern", er:"sieht...fern", wir:"sehen...fern", ihr:"seht...fern", sie:"sehen...fern" }, examples: [{ de: "Ich sehe abends fern.", fa: "شب‌ها تلویزیون می‌بینم." }] },
          { de: "aufräumen", fa: "مرتب کردن", article: "", ipa: "[ˈaʊfʁɔʏmən]", conjugation: { ich:"räume...auf", du:"räumst...auf", er:"räumt...auf", wir:"räumen...auf", ihr:"räumt...auf", sie:"räumen...auf" }, examples: [{ de: "Ich räume mein Zimmer auf.", fa: "اتاقم را مرتب می‌کنم." }] },
          { de: "vorstellen", fa: "معرفی کردن", article: "", ipa: "[ˈfoːɐ̯ʃtɛlən]", conjugation: { ich:"stelle...vor", du:"stellst...vor", er:"stellt...vor", wir:"stellen...vor", ihr:"stellt...vor", sie:"stellen...vor" }, examples: [{ de: "Ich stelle mich vor.", fa: "خودم را معرفی می‌کنم." }] },
          { de: "mitkommen", fa: "همراه آمدن", article: "", ipa: "[ˈmɪtkɔmən]", conjugation: { ich:"komme...mit", du:"kommst...mit", er:"kommt...mit", wir:"kommen...mit", ihr:"kommt...mit", sie:"kommen...mit" }, examples: [{ de: "Kommst du mit?", fa: "همراه می‌آیی؟" }] },
          { de: "zumachen", fa: "بستن", article: "", ipa: "[ˈtsuːmaxən]", conjugation: { ich:"mache...zu", du:"machst...zu", er:"macht...zu", wir:"machen...zu", ihr:"macht...zu", sie:"machen...zu" }, examples: [{ de: "Bitte mach die Tür zu.", fa: "لطفاً در را ببند." }] },
          { de: "weggehen", fa: "رفتن / بیرون رفتن", article: "", ipa: "[ˈvɛkɡeːən]", conjugation: { ich:"gehe...weg", du:"gehst...weg", er:"geht...weg", wir:"gehen...weg", ihr:"geht...weg", sie:"gehen...weg" }, examples: [{ de: "Ich muss jetzt weggehen.", fa: "باید الآن بروم." }] },
          { de: "ausfüllen", fa: "پر کردن", article: "", ipa: "[ˈaʊsfʏlən]", conjugation: { ich:"fülle...aus", du:"füllst...aus", er:"füllt...aus", wir:"füllen...aus", ihr:"füllt...aus", sie:"füllen...aus" }, examples: [{ de: "Ich fülle das Formular aus.", fa: "فرم را پر می‌کنم." }] }
        ]
      },
      {
        title: "افعال غیرجداشدنی",
        words: [
          { de: "erzählen", fa: "گفتن (داستان)", article: "", ipa: "[ɛʁˈtsɛːlən]", conjugation: { ich:"erzähle", du:"erzählst", er:"erzählt", wir:"erzählen", ihr:"erzählt", sie:"erzählen" }, examples: [{ de: "Er erzählt eine Geschichte.", fa: "او یک داستان تعریف می‌کند." }] },
          { de: "bekommen", fa: "گرفتن / دریافت کردن", article: "", ipa: "[bəˈkɔmən]", conjugation: { ich:"bekomme", du:"bekommst", er:"bekommt", wir:"bekommen", ihr:"bekommt", sie:"bekommen" }, examples: [{ de: "Ich bekomme einen Brief.", fa: "یک نامه می‌گیرم." }] },
          { de: "verstehen", fa: "فهمیدن", article: "", ipa: "[fɛɐ̯ˈʃteːən]", conjugation: { ich:"verstehe", du:"verstehst", er:"versteht", wir:"verstehen", ihr:"versteht", sie:"verstehen" }, examples: [{ de: "Ich verstehe dich.", fa: "متوجه تو می‌شوم." }] },
          { de: "verkaufen", fa: "فروختن", article: "", ipa: "[fɛɐ̯ˈkaʊfən]", conjugation: { ich:"verkaufe", du:"verkaufst", er:"verkauft", wir:"verkaufen", ihr:"verkauft", sie:"verkaufen" }, examples: [{ de: "Er verkauft sein Auto.", fa: "ماشینش را می‌فروشد." }] },
          { de: "gefallen", fa: "پسندیدن", article: "", ipa: "[ɡəˈfalən]", conjugation: { ich:"ge falle", du:"gefällst", er:"gefällt", wir:"gefallen", ihr:"gefallt", sie:"gefallen" }, examples: [{ de: "Das Buch gefällt mir.", fa: "این کتاب را دوست دارم." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Mein Tag mit trennbaren Verben. Jeden Morgen stehe ich um sieben Uhr auf. Dann räume ich mein Zimmer auf. Um neun Uhr gehe ich zur Arbeit. Unterwegs kaufe ich Brot ein. Abends sehe ich fern. Um elf Uhr gehe ich ins Bett. Das ist mein Tag.",
      translation: "روز من با افعال جداشدنی. هر صبح ساعت هفت بیدار می‌شوم. بعد اتاقم را مرتب می‌کنم. ساعت نه به سر کار می‌روم. در راه نان می‌خرم. شب‌ها تلویزیون می‌بینم. ساعت یازده به رختخواب می‌روم. این روز من است.",
      questions: [
        { question: "چه ساعتی بیدار می‌شود؟", answer: "ساعت هفت" },
        { question: "چه کارهایی انجام می‌دهد؟", answer: "مرتب کردن، خرید، تلویزیون دیدن" }
      ]
    },
    {
      text: "Gespräch. Tom: Was machst du am Samstag? Anna: Ich räume meine Wohnung auf. Tom: Dann kaufst du ein? Anna: Ja, ich kaufe Lebensmittel ein. Tom: Abends? Anna: Abends sehe ich einen Film. Kommst du mit? Tom: Ja, gern!",
      translation: "گفتگو. توم: شنبه چه کار می‌کنی؟ آنا: آپارتمانم را مرتب می‌کنم. توم: بعد خرید می‌کنی؟ آنا: بله، مواد غذایی می‌خرم. توم: شب‌ها؟ آنا: شب‌ها فیلم می‌بینم. همراه می‌آیی؟ توم: بله، با کمال میل!",
      questions: [
        { question: "آنا شنبه چه کاری می‌کند؟", answer: "آپارتمان را مرتب می‌کند و خرید می‌کند" },
        { question: "توم چه پیشنهادی می‌دهد؟", answer: "همراه آمدن برای فیلم" }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن با افعال جداشدنی",
      prompt: "یک روز کامل با افعال جداشدنی بنویسید.",
      steps: [
        { title: "صبح", text: "از بیدار شدن تا رفتن.", example: { de: "Ich stehe um sieben Uhr auf.", fa: "ساعت هفت بیدار می‌شوم." } },
        { title: "روز", text: "فعالیت‌های روزانه با افعال.", example: { de: "Ich kaufe Brot ein.", fa: "نان می‌خرم." } },
        { title: "شب", text: "فعالیت‌های شبانه.", example: { de: "Ich sehe fern.", fa: "تلویزیون می‌بینم." } }
      ],
      modelAnswer: "Ich stehe um halb sieben auf. Ich räume mein Zimmer auf und frühstücke. Um acht Uhr gehe ich zur Arbeit. Um zwölf Uhr esse ich zu Mittag. Am Nachmittag kaufe ich ein. Abends sehe ich fern und um zehn Uhr gehe ich zu Bett."
    }
  ],
  listening: [
    {
      title: "گوش دادن به افعال جداشدنی",
      instruction: "به جملات گوش دهید و فعل را شناسایی کنید.",
      sentences: [
        { de: "Ich stehe um sechs Uhr auf.", fa: "ساعت شش بیدار می‌شوم.", tts: "Ich stehe um sechs Uhr auf." },
        { de: "Ich kaufe Lebensmittel ein.", fa: "مواد غذایی می‌خرم.", tts: "Ich kaufe Lebensmittel ein." },
        { de: "Ich räume mein Zimmer auf.", fa: "اتاقم را مرتب می‌کنم.", tts: "Ich räume mein Zimmer auf." },
        { de: "Ich sehe abends fern.", fa: "شب‌ها تلویزیون می‌بینم.", tts: "Ich sehe abends fern." }
      ]
    }
  ],
  speaking: [
    {
      title: "تمرین افعال جداشدنی",
      pattern: "Ich [فعل] + پیشوند در آخر جمله.",
      exercise: "حداقل ۵ جمله با افعال جداشدنی بسازید."
    }
  ],
  cultureTip: "در آلمان، وقت‌شناسی بسیار مهم است. افعال جداشدنی مثل «ankommen» (رسیدن) برای وقت‌شناسی استفاده می‌شود: Der Zug kommt pünktlich an (قطار سر وقت می‌رسد).零点 نیست - باید پیام را درک کرد.",
  examData: {
    questions: [
      { question: "کدام فعل جداشدنی است؟", options: ["aufstehen", "erzählen", "bekommen", "verstehen"], answer: 0 },
      { question: "«pflegen» (مراقبت کردن) چیست؟", options: ["ein pflegen", "behalten", "verstehen", "gefallen"], answer: 0 },
      { question: "«خریدن» چگونه می‌شود؟", options: ["einkaufen", "auskaufen", "verkaufen", "bekaufen"], answer: 0 },
      { question: "جمله صحیح کدام است؟", options: ["Ich stehe um sieben Uhr auf.", "Ich aufstehe um sieben Uhr.", "Ich stehe auf um sieben.", "Aufstehen ich um sieben."], answer: 0 },
      { question: "«تلویزیون دیدن» چیست؟", options: ["fernsehen", "sehenfern", "tv sehen", "sehen"], answer: 0 },
      { question: "کدام غیرجداشدنی است؟", options: ["bekommen", "aufstehen", "einkaufen", "weggehen"], answer: 0 },
      { question: "«معرفی کردن» چیست؟", options: ["vorstellen", "anstellen", "zustellen", "ausstellen"], answer: 0 },
      { question: "«بستن» چیست؟", options: ["zumachen", "anmachen", "aufmachen", "ausmachen"], answer: 0 },
      { question: "«پر کردن» چیست؟", options: ["ausfüllen", "einfüllen", "aufüllen", "anfüllen"], answer: 0 },
      { question: "«همراه آمدن» چیست؟", options: ["mitkommen", "zukommen", "ankommen", "wegkommen"], answer: 0 }
    ]
  }
};