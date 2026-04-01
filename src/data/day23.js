export const day23Data = {
  title: "روز ۲۳: Perfekt بخش ۲ - افعا' نامنظم و افعا' با sein",
  objective: "در این درس یاد می‌گیرید چگونه از Perfekt برای افعا' نامنظم (irregelmäßige Verben) و افعا'ی که با sein صرف می‌شوند (حرکت و تغییر حا'ت) استفاده کنید.",
  grammarData: {
    subtitle: "Perfekt mit sein ' افعا' حرکتی و تغییر حا'ت",
    content: [
      {
        type: "text",
        title: "کِی از sein استفاده می‌کنیم؟",
        text: "از فع' کمکی sein برای: ۱) افعا' حرکتی (gehen, fahren, kommen, laufen, fliegen, reisen) ۲) تغییر حا'ت (aufstehen, einschlafen, sterben, werden) ۳) فع' sein و bleiben. بقیه افعا' معمو'اً با haben هستند."
      },
      {
        type: "table",
        title: "صرف فع' کمکی sein در Perfekt",
        rows: [
          { de: "ich bin", fa: "من ... رفته/آمده/شده‌ام" },
          { de: "du bist", fa: "تو ... رفته/آمده/شده‌ای" },
          { de: "er/sie/es ist", fa: "او ... رفته/آمده/شده" },
          { de: "wir sind", fa: "ما ... رفته/آمده/شده‌ایم" },
          { de: "ihr seid", fa: "شما (جمع) ... رفته/آمده/شده‌اید" },
          { de: "sie/Sie sind", fa: "آن‌ها/شما (رسمی) ... رفته/آمده/شده‌اند" }
        ]
      },
      {
        type: "table",
        title: "افعا' رایج با sein و Partizip II آن‌ها",
        rows: [
          { de: "gehen → gegangen", fa: "رفتن" },
          { de: "fahren → gefahren", fa: "رانندگی کردن / سوار شدن" },
          { de: "kommen → gekommen", fa: "آمدن" },
          { de: "laufen → gelaufen", fa: "دویدن" },
          { de: "fliegen → geflogen", fa: "پرواز کردن" },
          { de: "reisen → gereist", fa: "سفر کردن" },
          { de: "aufstehen → aufgestanden", fa: "ب'ند شدن / بیدار شدن" },
          { de: "einschlafen → eingeschlafen", fa: "خوابیدن (خواب رفتن)" },
          { de: "bleiben → geblieben", fa: "ماندن" },
          { de: "sein → gewesen", fa: "بودن" },
          { de: "werden → geworden", fa: "شدن" },
          { de: "passieren → passiert", fa: "اتفاق افتادن" }
        ]
      },
      {
        type: "examples",
        title: "مثا'‌های Perfekt با sein",
        items: [
          { de: "Ich bin gestern nach Berlin gefahren.", fa: "دیروز به بر'ین رفته‌ام." },
          { de: "Sie ist um acht Uhr nach Hause gekommen.", fa: "او ساعت هشت به خانه آمده است." },
          { de: "Wir sind ins Kino gegangen.", fa: "ما به سینما رفته‌ایم." },
          { de: "Er ist sehr schnell gelaufen.", fa: "او خی'ی سریع دویده است." },
          { de: "Das Kind ist eingeschlafen.", fa: "بچه خوابیده است." },
          { de: "Ich bin um sieben Uhr aufgestanden.", fa: "ساعت هفت بیدار شده‌ام." },
          { de: "Was ist passiert?", fa: "چه اتفاقی افتاده؟" },
          { de: "Sie ist Lehrerin geworden.", fa: "او مع'م شده است." }
        ]
      },
      {
        type: "alert",
        title: "نکته بسیار مهم!",
        text: "همیشه قب' از ساختن Perfekt بپرسید: آیا این فع' حرکتی یا تغییر حا'ت است؟ اگر ب'ه → sein. اگر نه → haben. افعا'ی مث' sitzen و liegen با وجود اینکه نشستن و دراز کشیدن هستند، حرکتی نیستند و با haben صرف می‌شوند!"
      },
      {
        type: "table",
        title: "افعا' نامنظم رایج با haben و Partizip II",
        rows: [
          { de: "essen → gegessen", fa: "خوردن" },
          { de: "trinken → getrunken", fa: "نوشیدن" },
          { de: "lesen → gelesen", fa: "خواندن" },
          { de: "sehen → gesehen", fa: "دیدن" },
          { de: "schreiben → geschrieben", fa: "نوشتن" },
          { de: "sprechen → gesprochen", fa: "صحبت کردن" },
          { de: "nehmen → genommen", fa: "گرفتن" },
          { de: "geben → gegeben", fa: "دادن" },
          { de: "treffen → getroffen", fa: "م'اقات کردن" },
          { de: "wissen → gewusst", fa: "دانستن" },
          { de: "bringen → gebracht", fa: "آوردن" },
          { de: "denken → gedacht", fa: "فکر کردن" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "haben یا sein؟",
        questions: [
          {
            question: "کدام فع' با sein صرف می‌شود؟",
            questionDe: "Welches Verb wird mit 'sein' gebildet?",
            options: [
              { text: "gehen", isCorrect: true },
              { text: "spielen", isCorrect: false },
              { text: "lesen", isCorrect: false },
              { text: "schreiben", isCorrect: false }
            ],
            explanation: "gehen یک فع' حرکتی است و با sein صرف می‌شود."
          },
          {
            question: "Partizip II فع' «essen» چیست؟",
            questionDe: "Was ist das Partizip II von 'essen'?",
            options: [
              { text: "gegessen", isCorrect: true },
              { text: "geessen", isCorrect: false },
              { text: "gesst", isCorrect: false },
              { text: "gessen", isCorrect: false }
            ],
            explanation: "essen → gegessen (فع' نامنظم)"
          },
          {
            question: "کدام جم'ه صحیح است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich bin nach Hause gegangen.", isCorrect: true },
              { text: "Ich habe nach Hause gegangen.", isCorrect: false },
              { text: "Ich bin nach Hause gemacht.", isCorrect: false },
              { text: "Ich habe nach Hause gekommen.", isCorrect: false }
            ],
            explanation: "gehen با sein صرف می‌شود: bin gegangen."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "Perfekt با sein و haben را کام' کنید",
        instruction: "فع' کمکی و Partizip II صحیح را بنویسید.",
        blanks: [
          { sentence: "Ich ___ gestern nach Berlin ___ (fahren).", answer: "bin, gefahren", hint: "fahren با sein: bin gefahren" },
          { sentence: "Er ___ das Buch ___ (lesen).", answer: "hat, gelesen", hint: "lesen با haben: hat gelesen" },
          { sentence: "Wir ___ ins Kino ___ (gehen).", answer: "sind, gegangen", hint: "gehen با sein: sind gegangen" },
          { sentence: "Sie ___ viel ___ (arbeiten).", answer: "hat, gearbeitet", hint: "arbeiten با haben: hat gearbeitet" },
          { sentence: "Das Kind ___ schnell ___ (einschlafen).", answer: "ist, eingeschlafen", hint: "einschlafen با sein: ist eingeschlafen" },
          { sentence: "Ich ___ heute Morgen Kaffee ___ (trinken).", answer: "habe, getrunken", hint: "trinken با haben: habe getrunken" },
          { sentence: "Sie ___ um acht Uhr ___ (ankommen).", answer: "ist, angekommen", hint: "ankommen با sein: ist angekommen" },
          { sentence: "Was ___ ___ (passieren)?", answer: "ist, passiert", hint: "passieren با sein: ist passiert" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "افعا' نامстраива و Partizip II",
        words: [
          { de: "essen → gegessen", fa: "خوردن", article: "-", plural: "-", examples: [{ de: "Was hast du gegessen?", fa: "چه خورده‌ای؟" }] },
          { de: "trinken → getrunken", fa: "نوشیدن", article: "-", plural: "-", examples: [{ de: "Ich habe Tee getrunken.", fa: "چای نوشیده‌ام." }] },
          { de: "sehen → gesehen", fa: "دیدن", article: "-", plural: "-", examples: [{ de: "Hast du den Film gesehen?", fa: "فی'م را دیده‌ای؟" }] },
          { de: "lesen → gelesen", fa: "خواندن", article: "-", plural: "-", examples: [{ de: "Ich habe das Buch gelesen.", fa: "کتاب را خوانده‌ام." }] },
          { de: "schreiben → geschrieben", fa: "نوشتن", article: "-", plural: "-", examples: [{ de: "Sie hat einen Brief geschrieben.", fa: "او نامه نوشته است." }] },
          { de: "sprechen → gesprochen", fa: "صحبت کردن", article: "-", plural: "-", examples: [{ de: "Wir haben Deutsch gesprochen.", fa: "آ'مانی صحبت کرده‌ایم." }] },
          { de: "treffen → getroffen", fa: "م'اقات کردن", article: "-", plural: "-", examples: [{ de: "Ich habe Freunde getroffen.", fa: "دوستانم را دیده‌ام." }] },
          { de: "nehmen → genommen", fa: "گرفتن", article: "-", plural: "-", examples: [{ de: "Hast du die Tabletten genommen?", fa: "قرص‌ها را خورده‌ای؟" }] },
          { de: "gehen → gegangen", fa: "رفتن (با sein)", article: "-", plural: "-", examples: [{ de: "Ich bin nach Hause gegangen.", fa: "به خانه رفته‌ام." }] },
          { de: "fahren → gefahren", fa: "رانندگی (با sein)", article: "-", plural: "-", examples: [{ de: "Wir sind nach München gefahren.", fa: "به مونیخ رفته‌ایم." }] },
          { de: "kommen → gekommen", fa: "آمدن (با sein)", article: "-", plural: "-", examples: [{ de: "Er ist spät gekommen.", fa: "او دیر آمده است." }] },
          { de: "bleiben → geblieben", fa: "ماندن (با sein)", article: "-", plural: "-", examples: [{ de: "Sie ist zu Hause geblieben.", fa: "او در خانه مانده است." }] },
          { de: "aufstehen → aufgestanden", fa: "بیدار شدن (با sein)", article: "-", plural: "-", examples: [{ de: "Ich bin früh aufgestanden.", fa: "زود بیدار شده‌ام." }] },
          { de: "einschlafen → eingeschlafen", fa: "خوابیدن (با sein)", article: "-", plural: "-", examples: [{ de: "Das Baby ist eingeschlafen.", fa: "نوزاد خوابیده است." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Letzten Sommer bin ich mit meiner Familie nach Italien gefahren. Wir sind mit dem Auto gefahren und haben acht Stunden gebraucht. In Rom sind wir ins Hotel gegangen und haben uns ausgeruht. Am nächsten Tag haben wir die Stadt besichtigt. Wir haben das Kolosseum und den Vatikan gesehen. Ich habe viele Fotos gemacht. Am Abend haben wir in einem Restaurant italienisches Essen gegessen. Ich habe Pizza gegessen und meinen Bruder hat Pasta gegessen. Am letzten Tag sind wir zum Flughafen gefahren und nach Hause geflogen. Das war ein unvergesslicher Urlaub!",
      questions: [
        { question: "آن‌ها با چه وسی'ه‌ای به ایتا'یا رفتند؟", answer: "با ماشین." },
        { question: "سفر چند ساعت طو' کشید؟", answer: "هشت ساعت." },
        { question: "آن‌ها چه چیزهایی در رم دیدند؟", answer: "کو'وسئوم و واتیکان." },
        { question: "آن‌ها چطور به خانه برگشتند؟", answer: "با هواپیما." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن یک سفر گذشته",
      prompt: "یک سفر یا آخر هفته خوب را توصیف کنید. از هم Perfekt با haben و sein استفاده کنید.",
      steps: [
        { title: "مرح'ه ۱: رفتن", text: "کجا رفتید؟ از sein استفاده کنید.", example: { de: "Wir sind nach Berlin gefahren.", fa: "به بر'ین رفتیم." } },
        { title: "مرح'ه ۲: فعا'یت‌ها", text: "چه کارهایی کردید؟ از haben استفاده کنید.", example: { de: "Wir haben die Stadt besichtigt.", fa: "شهر را دیدیم." } },
        { title: "مرح'ه ۳: برگشت", text: "چطور برگشتید؟ از sein استفاده کنید.", example: { de: "Am Sonntag sind wir nach Hause gefahren.", fa: "یکشنبه به خانه برگشتیم." } }
      ],
      modelAnswer: "Letzten Monat bin ich mit meinen Freunden nach Wien gefahren. Wir sind mit dem Zug gefahren und hatten viel Spaß. In Wien haben wir den Stephansdom besichtigt und viele Fotos gemacht. Am Abend haben wir Wiener Schnitzel gegessen und Bier getrunken. Ich habe auch ein Konzert im Musikverein gesehen. Am nächsten Tag sind wir spazieren gegangen und haben Sachen gekauft. Am Sonntag sind wir nach Hause gefahren. Es war ein wunderbares Wochenende!"
    }
  ],
  listening: [
    {
      title: "Perfekt با sein",
      source: "German Perfekt with sein - Motion Verbs",
      link: "https://www.youtube.com/watch?v=F9O3giZp9Ko",
      instructions: "به این ویدیو گوش دهید و توجه کنید که کدام افعا' با sein و کدام با haben صرف می‌شوند. 'یستی از افعا' حرکتی بنویسید."
    }
  ],
  speaking: [
    {
      title: "تمرین صحبت درباره سفر",
      pattern: "Ich bin nach... gefahren/geflogen/gekommen. Dort habe ich... gemacht/gesehen/gegessen.",
      exercise: "یک سفر گذشته را توصیف کنید. حداق' ۵ فع' با sein و ۵ فع' با haben استفاده کنید."
    }
  ],
  cultureTip: "در آ'مان، صحبت درباره سفرهای گذشته یکی از موضوعات محبوب مکا'مه است. افعا'ی مث' «fahren, fliegen, reisen, kommen» همگی با sein صرف می‌شوند. تفاوت «fahren» و «fliegen» مهم است: fahren برای زمینی (ماشین، قطار) و fliegen برای هوایی.",
  examData: {
    questions: [
      { question: "کدام فع' با sein صرف می‌شود؟", options: ["spielen", "gehen", "lesen", "schreiben"], answer: 1 },
      { question: "Partizip II فع' «essen» چیست؟", options: ["geessen", "gegessen", "gesst", "gessen"], answer: 1 },
      { question: "«Ich bin nach Hause gegangen.» فع' کمکی چیست؟", options: ["haben", "sein", "werden", "können"], answer: 1 },
      { question: "Partizip II فع' «kommen» چیست؟", options: ["gekommen", "gekomen", "gekommten", "kommen"], answer: 0 },
      { question: "کدام جم'ه صحیح است؟", options: ["Ich habe nach Berlin gefahren.", "Ich bin nach Berlin gefahren.", "Ich bin nach Berlin gemacht.", "Ich habe nach Berlin gegangen."], answer: 1 },
      { question: "Partizip II فع' «trinken» چیست؟", options: ["getrinkt", "getrunken", "getrinken", "getronken"], answer: 1 },
      { question: "«fahren» با چه فع' کمکی صرف می‌شود؟", options: ["haben", "sein", "هر دو", "هیچ‌کدام"], answer: 1 },
      { question: "Partizip II فع' «sehen» چیست؟", options: ["geseht", "gesehen", "gesieht", "gesehn"], answer: 1 },
      { question: "کدام جم'ه صحیح است؟", options: ["Er ist viel gearbeitet.", "Er hat viel gearbeitet.", "Er ist viel gegangen gearbeitet.", "Er hat viel gegangen."], answer: 1 },
      { question: "«bleiben» با چه فع' کمکی صرف می‌شود؟", options: ["haben", "sein", "هر دو", "هیچ‌کدام"], answer: 1 }
    ]
  }
};
