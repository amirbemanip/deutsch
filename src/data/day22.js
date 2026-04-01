export const day22Data = {
  title: "روز ۲۲: زمان گذشته Perfekt - بخش ۱: افعال منظم با haben",
  objective: "در این درس یاد می‌گیرید چگونه از زمان Perfekt (گذشته) برای افعال منظم با فعل کمکی haben استفاده کنید. ساختار: ge- + ریشه فعل + -t + haben.",
  grammarData: {
    subtitle: "Perfekt mit haben - زمان گذشته با فعل کمکی haben",
    content: [
      {
        type: "text",
        title: "Perfekt چیست؟",
        text: "زمان Perfekt (گذشته) در مکالمات روزمره آلمانی بسیار رایج است. برای صحبت درباره چیزهایی که قبلاً اتفاق افتاده‌اند استفاده می‌شود. ساختار: فاعل + فعل کمکی (haben/sein) + ... + Partizip II (در انتها). امروز فقط افعال منظم با haben را یاد می‌گیریم. در مکالمات غیررسمی، Perfekt خیلی بیشتر از Präteritum استفاده می‌شود."
      },
      {
        type: "table",
        title: "صرف فعل کمکی haben در Perfekt",
        rows: [
          { de: "ich habe ... gemacht", fa: "من ... کرده‌ام" },
          { de: "du hast ... gemacht", fa: "تو ... کرده‌ای" },
          { de: "er/sie/es hat ... gemacht", fa: "او ... کرده" },
          { de: "wir haben ... gemacht", fa: "ما ... کرده‌ایم" },
          { de: "ihr habt ... gemacht", fa: "شما (جمع) ... کرده‌اید" },
          { de: "sie/Sie haben ... gemacht", fa: "آن‌ها/شما (رسمی) ... کرده‌اند" }
        ]
      },
      {
        type: "table",
        title: "صرف Perfekt با machen",
        rows: [
          { de: "ich habe gemacht", fa: "من کرده‌ام" },
          { de: "du hast gemacht", fa: "تو کرده‌ای" },
          { de: "er hat gemacht", fa: "او کرده" },
          { de: "wir haben gemacht", fa: "ما کرده‌ایم" },
          { de: "ihr habt gemacht", fa: "شما کرده‌اید" },
          { de: "sie haben gemacht", fa: "آن‌ها کرده‌اند" }
        ]
      },
      {
        type: "text",
        title: "ساخت Partizip II برای افعال منظم",
        text: "برای افعال منظم (regelmäßige Verben): ge- + ریشه فعل + -t. مثل: machen → gemacht, kaufen → gekauft, spielen → gespielt, lernen → gelernt, arbeiten → gearbeitet. توجه: اگر فعل با be-, ver-, er-, ent- شروع شود، ge- اضافه نمی‌شود! مثل: besucht (از besuchen), verstanden (از verstehen). همچنین افعالی که با -ieren تمام می‌شوند ge- نمی‌گیرند: studiert (از studieren)."
      },
      {
        type: "table",
        title: "۱۵ فعل منظم رایج و Partizip II آن‌ها",
        rows: [
          { de: "machen → gemacht [ˈmaxt]", fa: "کردن / ساختن" },
          { de: "spielen → gespielt [ɡəˈʃpiːlt]", fa: "بازی کردن" },
          { de: "kaufen → gekauft [ɡəˈkaʊ̯ft]", fa: "خریدن" },
          { de: "lernen → gelernt [ɡəˈlɛʁnt]", fa: "یاد گرفتن" },
          { de: "arbeiten → gearbeitet [ɡəˈʔaʁbaɪ̯tət]", fa: "کار کردن" },
          { de: "fragen → gefragt [ɡəˈfʁaːkt]", fa: "پرسیدن" },
          { de: "sagen → gesagt [ɡəˈzaːkt]", fa: "گفتن" },
          { de: "kochen → gekocht [ɡəˈkɔxt]", fa: "پختن" },
          { de: "wohnen → gewohnt [ɡəˈvoːnt]", fa: "زندگی کردن" },
          { de: "brauchen → gebraucht [ɡəˈbʁaʊ̯xt]", fa: "نیاز داشتن" },
          { de: "suchen → gesucht [ɡəˈzʊxt]", fa: "جستجو کردن" },
          { de: "frühstücken → gefrühstückt [ɡəˈfʁyːʃtykt]", fa: "صبحانه خوردن" },
          { de: "glauben → geglaubt [ɡəˈɡlaʊ̯pt]", fa: "باور کردن" },
          { de: "besuchen → besucht [bəˈzuːxt]", fa: "دیدن / ملاقات کردن" },
          { de: "verstehen → verstanden [fɛɐ̯ˈʃtandən]", fa: "فهمیدن" }
        ]
      },
      {
        type: "table",
        title: "۱۰ فعل منظم دیگر",
        rows: [
          { de: "brauchen → gebraucht", fa: "نیاز داشتن" },
          { de: "holen → geholt", fa: "آوردن / گرفتن" },
          { de: "probieren → probiert", fa: "امتحان کردن" },
          { de: "telefonieren → telefoniert", fa: "تلفنی صحبت کردن" },
          { de: "reservieren → reserviert", fa: "رزرو کردن" },
          { de: "studieren → studiert", fa: "تحصیل کردن" },
          { de: "putzen → geputzt", fa: "تمیز کردن" },
          { de: "duschen → geduscht", fa: "دوش گرفتن" },
          { de: "frühstücken → gefrühstückt", fa: "صبحانه خوردن" },
          { de: "brauchen → gebraucht", fa: "نیاز داشتن" }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های Perfekt با haben",
        items: [
          { de: "Ich habe heute Kaffee getrunken.", fa: "امروز قهوه نوشیده‌ام." },
          { de: "Er hat gestern ein Buch gekauft.", fa: "او دیروز یک کتاب خریده است." },
          { de: "Wir haben Fußball gespielt.", fa: "فوتبال بازی کرده‌ایم." },
          { de: "Hast du das gegessen?", fa: "آیا این را خورده‌ای؟" },
          { de: "Sie hat viel gelernt.", fa: "او زیاد درس خوانده است." },
          { de: "Ich habe lange geschlafen.", fa: "طولانی خوابیده‌ام." },
          { de: "Wir haben Deutsch gesprochen.", fa: "آلمانی صحبت کرده‌ایم." },
          { de: "Er hat das nicht verstanden.", fa: "او این را نفهمیده است." },
          { de: "Haben Sie schon gefrühstückt?", fa: "آیا صبحانه خورده‌اید؟" },
          { de: "Was hast du gemacht?", fa: "چه کار کرده‌ای؟" }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم!",
        text: "در جملات Perfekt، فعل کمکی (haben) در جایگاه دوم و Partizip II در انتهای جمله قرار می‌گیرد. ساختار: فاعل + haben + ... + Partizip II. مثل: Ich habe gestern einen Film gesehen. در جمله سؤالی: فعل کمکی در ابتدا: Hast du das gemacht? در جمله فرعی: ..., dass ich das gemacht habe."
      },
      {
        type: "interactive_quiz",
        title: "Perfekt را بشناسید",
        questions: [
          {
            question: "Partizip II فعل machen چیست؟",
            questionDe: "Was ist das Partizip II von 'machen'?",
            options: [
              { text: "gemacht", isCorrect: true },
              { text: "gemachet", isCorrect: false },
              { text: "gemach", isCorrect: false },
              { text: "macht", isCorrect: false }
            ],
            explanation: "برای افعال منظم: ge- + ریشه + -t: machen → gemacht."
          },
          {
            question: "کدام جمله Perfekt صحیح است؟",
            questionDe: "Welcher Satz ist im Perfekt richtig?",
            options: [
              { text: "Ich habe gelernt.", isCorrect: true },
              { text: "Ich gelernt habe.", isCorrect: false },
              { text: "Ich habe lernen.", isCorrect: false },
              { text: "Gelernt ich habe.", isCorrect: false }
            ],
            explanation: "ساختار صحیح: فاعل + haben + ... + Partizip II."
          },
          {
            question: "چرا در «besucht» ge- نیست؟",
            questionDe: "Warum gibt es kein 'ge-' in 'besucht'?",
            options: [
              { text: "چون فعل با be- شروع شده", isCorrect: true },
              { text: "چون فعل منظم نیست", isCorrect: false },
              { text: "چون با sein ساخته شده", isCorrect: false },
              { text: "چون فعل بازتابی است", isCorrect: false }
            ],
            explanation: "افعالی که با be-, ver-, er-, ent- شروع شوند ge- نمی‌گیرند."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "Partizip II صحیح را بنویسید",
        instruction: "فعل را به Partizip II تبدیل کنید و جمله Perfekt را کامل کنید.",
        blanks: [
          { sentence: "Ich habe gestern einen Film ___ (sehen).", answer: "gesehen", hint: "sehen → gesehen (غیرمنظم)" },
          { sentence: "Sie hat das Buch ___ (lesen).", answer: "gelesen", hint: "lesen → gelesen" },
          { sentence: "Wir haben Fußball ___ (spielen).", answer: "gespielt", hint: "spielen → gespielt (منظم)" },
          { sentence: "Hast du Deutsch ___ (lernen)?", answer: "gelernt", hint: "lernen → gelernt" },
          { sentence: "Er hat ein Auto ___ (kaufen).", answer: "gekauft", hint: "kaufen → gekauft" },
          { sentence: "Ich habe das nicht ___ (verstehen).", answer: "verstanden", hint: "verstehen → verstanden (بدون ge-)" },
          { sentence: "Wir haben zusammen ___ (frühstücken).", answer: "gefrühstückt", hint: "frühstücken → gefrühstückt" },
          { sentence: "Hast du das ___ (machen)?", answer: "gemacht", hint: "machen → gemacht" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "افعال منظم رایج با Partizip II",
        words: [
          { de: "machen", fa: "کردن / ساختن", ipa: "[ˈmaxn̩]", article: "-", plural: "-", conjugation: { ich: "mache", du: "machst", er: "macht", wir: "machen", ihr: "macht", sie: "machen" }, examples: [{ de: "Ich habe die Hausaufgaben gemacht.", fa: "تکلیف را انجام داده‌ام." }, { de: "Was hast du am Wochenende gemacht?", fa: "آخر هفته چه کار کردی؟" }] },
          { de: "spielen", fa: "بازی کردن", ipa: "[ˈʃpiːlən]", article: "-", plural: "-", conjugation: { ich: "spiele", du: "spielst", er: "spielt", wir: "spielen", ihr: "spielt", sie: "spielen" }, examples: [{ de: "Die Kinder haben im Garten gespielt.", fa: "بچه‌ها در باغ بازی کرده‌اند." }, { de: "Hast du schon einmal Fußball gespielt?", fa: "آیا تا به حال فوتبال بازی کرده‌ای؟" }] },
          { de: "kaufen", fa: "خریدن", ipa: "[ˈkaʊ̯fən]", article: "-", plural: "-", conjugation: { ich: "kaufe", du: "kaufst", er: "kauft", wir: "kaufen", ihr: "kauft", sie: "kaufen" }, examples: [{ de: "Ich habe Brot gekauft.", fa: "نان خریده‌ام." }, { de: "Sie hat ein neues Auto gekauft.", fa: "او ماشین جدیدی خریده." }] },
          { de: "lernen", fa: "یاد گرفتن", ipa: "[ˈlɛʁnən]", article: "-", plural: "-", conjugation: { ich: "lerne", du: "lernst", er: "lernt", wir: "lernen", ihr: "lernt", sie: "lernen" }, examples: [{ de: "Sie hat viel für die Prüfung gelernt.", fa: "او برای امتحان زیاد درس خوانده." }, { de: "Ich habe Deutsch in Berlin gelernt.", fa: "آلمانی را در برلین یاد گرفته‌ام." }] },
          { de: "arbeiten", fa: "کار کردن", ipa: "[ˈʔaʁbaɪ̯tn̩]", article: "-", plural: "-", conjugation: { ich: "arbeite", du: "arbeitest", er: "arbeitet", wir: "arbeiten", ihr: "arbeitet", sie: "arbeiten" }, examples: [{ de: "Er hat heute lange gearbeitet.", fa: "او امروز طولانی کار کرده." }, { de: "Wo hast du gearbeitet?", fa: "کجا کار کرده‌ای؟" }] },
          { de: "fragen", fa: "پرسیدن", ipa: "[ˈfʁaːɡn̩]", article: "-", plural: "-", conjugation: { ich: "frage", du: "fragst", er: "fragt", wir: "fragen", ihr: "fragt", sie: "fragen" }, examples: [{ de: "Ich habe den Lehrer gefragt.", fa: "از معلم پرسیده‌ام." }, { de: "Hast du nach dem Weg gefragt?", fa: "آدرس پرسیده‌ای؟" }] },
          { de: "sagen", fa: "گفتن", ipa: "[ˈzaːɡn̩]", article: "-", plural: "-", conjugation: { ich: "sage", du: "sagst", er: "sagt", wir: "sagen", ihr: "sagt", sie: "sagen" }, examples: [{ de: "Was hast du gesagt?", fa: "چه گفته‌ای؟" }, { de: "Er hat nichts gesagt.", fa: "او چیزی نگفته." }] },
          { de: "kochen", fa: "پختن", ipa: "[ˈkɔxn̩]", article: "-", plural: "-", conjugation: { ich: "koche", du: "kochst", er: "kocht", wir: "kochen", ihr: "kocht", sie: "kochen" }, examples: [{ de: "Meine Mutter hat Pasta gekocht.", fa: "مادرم پاستا پخته." }, { de: "Ich habe heute Abendessen gekocht.", fa: "امروز شام پخته‌ام." }] },
          { de: "wohnen", fa: "زندگی کردن", ipa: "[ˈvoːnən]", article: "-", plural: "-", conjugation: { ich: "wohne", du: "wohnst", er: "wohnt", wir: "wohnen", ihr: "wohnt", sie: "wohnen" }, examples: [{ de: "Er hat lange in Berlin gewohnt.", fa: "او مدت‌ها در برلین زندگی کرده." }, { de: "Wo hast du gewohnt?", fa: "کجا زندگی کرده‌ای؟" }] },
          { de: "brauchen", fa: "نیاز داشتن", ipa: "[ˈbʁaʊ̯xn̩]", article: "-", plural: "-", conjugation: { ich: "brauche", du: "brauchst", er: "braucht", wir: "brauchen", ihr: "braucht", sie: "brauchen" }, examples: [{ de: "Ich habe Hilfe gebraucht.", fa: "به کمک نیاز داشته‌ام." }, { de: "Hast du das gebraucht?", fa: "این را نیاز داشته‌ای؟" }] },
          { de: "suchen", fa: "جستجو کردن", ipa: "[ˈzuːxn̩]", article: "-", plural: "-", conjugation: { ich: "suche", du: "suchst", er: "sucht", wir: "suchen", ihr: "sucht", sie: "suchen" }, examples: [{ de: "Hast du deinen Schlüssel gefunden? – Ja, ich habe ihn gesucht und gefunden.", fa: "کلیدت را پیدا کرده‌ای؟ – بله، جستجو کردم و پیدا کردم." }] },
          { de: "frühstücken", fa: "صبحانه خوردن", ipa: "[ˈfʁyːʃtykn̩]", article: "-", plural: "-", conjugation: { ich: "frühstücke", du: "frühstückst", er: "frühstückt", wir: "frühstücken", ihr: "frühstückt", sie: "frühstücken" }, examples: [{ de: "Wir haben zusammen gefrühstückt.", fa: "با هم صبحانه خورده‌ایم." }, { de: "Hast du schon gefrühstückt?", fa: "صبحانه خورده‌ای؟" }] },
          { de: "glauben", fa: "باور کردن", ipa: "[ˈɡlaʊ̯bn̩]", article: "-", plural: "-", conjugation: { ich: "glaube", du: "glaubst", er: "glaubt", wir: "glauben", ihr: "glaubt", sie: "glauben" }, examples: [{ de: "Ich habe ihm nicht geglaubt.", fa: "باورش نکرده‌ام." }, { de: "Das habe ich nicht geglaubt.", fa: "این را باور نکرده‌ام." }] },
          { de: "besuchen", fa: "دیدن / ملاقات کردن", ipa: "[bəˈzuːxn̩]", article: "-", plural: "-", conjugation: { ich: "besuche", du: "besuchst", er: "besucht", wir: "besuchen", ihr: "besucht", sie: "besuchen" }, examples: [{ de: "Wir haben unsere Großeltern besucht.", fa: "پدربزرگ و مادربزرگمان را دیده‌ایم." }, { de: "Hast du das Museum besucht?", fa: "موزه را دیده‌ای؟" }] },
          { de: "verstehen", fa: "فهمیدن", ipa: "[fɛɐ̯ˈʃteːən]", article: "-", plural: "-", conjugation: { ich: "verstehe", du: "verstehst", er: "versteht", wir: "verstehen", ihr: "versteht", sie: "verstehen" }, examples: [{ de: "Hast du die Aufgabe verstanden?", fa: "تمرین را فهمیده‌ای؟" }, { de: "Ich habe das nicht verstanden.", fa: "این را نفهمیده‌ام." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Gestern war ein langer Tag. Ich bin um sechs Uhr aufgestanden und habe mich schnell gewaschen. Dann habe ich gefrühstückt und Kaffee getrunken. Um acht habe ich gearbeitet. Ich habe viele E-Mails geschrieben und telefoniert. Am Mittag habe ich mit meiner Kollegin gegessen. Sie hat mir von ihrem Wochenende erzählt. Nach der Arbeit habe ich eingekauft und Brot und Milch gekauft. Am Abend habe ich gekocht und einen Film gesehen. Um zehn Uhr habe ich das Licht ausgemacht und bin eingeschlafen. Es war ein produktiver Tag.",
      translation: "دیروز یک روز طولانی بود. ساعت شش بیدار شدم و سریع خودم را شستم. بعد صبحانه خوردم و قهوه نوشیدم. ساعت هشت کار کردم. ایمیل‌های زیادی نوشتم و تلفنی صحبت کردم. ظهر با همکارم غذا خوردم. او از آخر هفته‌اش برایم گفت. بعد از کار خرید کردم و نان و شیر خریدم. شب آشپزی کردم و فیلم دیدم. ساعت ده چراغ را خاموش کردم و خوابیدم. یک روز پربار بود.",
      questions: [
        { question: "او چند بیدار شد؟", answer: "ساعت شش." },
        { question: "ظهر با چه کسی غذا خورد؟", answer: "با همکارش." },
        { question: "او چه خرید؟", answer: "نان و شیر." },
        { question: "شب چه کرد؟", answer: "آشپزی کرد و فیلم دید." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن درباره دیروز",
      prompt: "دیروز چه کردید؟ از Perfekt با haben استفاده کنید.",
      steps: [
        { title: "مرحله ۱: صبح", text: "صبح چه کردید؟", example: { de: "Ich habe Kaffee getrunken.", fa: "قهوه نوشیدم." } },
        { title: "مرحله ۲: کار", text: "در سر کار چه کردید؟", example: { de: "Ich habe gearbeitet und E-Mails geschrieben.", fa: "کار کردم و ایمیل نوشتم." } },
        { title: "مرحله ۳: شب", text: "شب چه کردید؟", example: { de: "Ich habe gekocht und einen Film gesehen.", fa: "آشپزی کردم و فیلم دیدم." } }
      ],
      modelAnswer: "Gestern war ein ruhiger Tag. Ich bin früh aufgestanden und habe gefrühstückt. Danach habe ich gearbeitet. Ich habe viel am Computer gemacht und E-Mails geschrieben. Am Mittag habe ich Pizza gegessen. Nach der Arbeit habe ich eingekauft und Obst gekauft. Am Abend habe ich für meine Familie gekocht. Wir haben zusammen gegessen und geredet. Danach habe ich ein Buch gelesen und bin früh ins Bett gegangen. Es war ein guter Tag."
    }
  ],
  listening: [
    {
      title: "جملات Perfekt با haben",
      instruction: "به جملات گوش دهید و آن‌ها را بنویسید. هر جمله شامل Perfekt با haben است.",
      sentences: [
        { de: "Ich habe heute Kaffee getrunken.", fa: "امروز قهوه نوشیده‌ام.", tts: "slow" },
        { de: "Er hat gestern ein Buch gekauft.", fa: "او دیروز کتاب خریده.", tts: "slow" },
        { de: "Wir haben zusammen gefrühstückt.", fa: "با هم صبحانه خورده‌ایم.", tts: "slow" },
        { de: "Hast du die Aufgabe verstanden?", fa: "تمرین را فهمیده‌ای؟", tts: "slow" },
        { de: "Sie hat lange gearbeitet.", fa: "او طولانی کار کرده.", tts: "slow" },
        { de: "Was hast du gemacht?", fa: "چه کار کرده‌ای؟", tts: "slow" },
        { de: "Ich habe das nicht gesagt.", fa: "این را نگفته‌ام.", tts: "slow" }
      ]
    }
  ],
  speaking: [
    {
      title: "گفتگو: تعریف کردن از دیروز",
      pattern: "A: Was hast du gestern gemacht? B: Ich habe gearbeitet. Und du? A: Ich habe eingekauft und gekocht. B: Was hast du gekocht? A: Ich habe Pasta gemacht. B: Hast du auch ferngesehen? A: Ja, ich habe einen Film gesehen. B: Welchen Film? A: Einen deutschen Film. Er war sehr gut.",
      exercise: "با یک دوست درباره دیروزتان صحبت کنید. حداقل ۵ فعل در Perfekt استفاده کنید."
    }
  ],
  cultureTip: "در مکالمات غیررسمی آلمانی، Perfekt پرکاربردترین زمان برای صحبت درباره گذشته است. حتی در مکالمات رسمی هم اغلب از Perfekt استفاده می‌شود. زمان Präteritum بیشتر در نوشتن و داستان‌ها استفاده می‌شود. فعل «haben» در Perfekt همیشه با بیشتر افعال می‌آید، مگر افعال حرکتی و تغییر حالت که با sein ساخته می‌شوند.",
  examData: {
    questions: [
      { question: "Partizip II فعل spielen چیست؟", options: ["gespielt", "gespielten", "spielt", "gespielen"], answer: 0 },
      { question: "کدام فعل با sein ساخته می‌شود؟", options: ["spielen", "gehen", "machen", "lernen"], answer: 1 },
      { question: "ساختار Perfekt با haben چیست؟", options: ["فاعل + Partizip II + haben", "فاعل + haben + ... + Partizip II", "haben + فاعل + Partizip II", "Partizip II + فاعل + haben"], answer: 1 },
      { question: "Partizip II فعل kaufen چیست؟", options: ["gekauft", "gekaufen", "kauft", "gekauften"], answer: 0 },
      { question: "چرا در «besucht» ge- نیست؟", options: ["چون فعل با be- شروع شده", "چون فعل منظم نیست", "چون با sein ساخته شده", "چون فعل بازتابی است"], answer: 0 },
      { question: "«Ich habe gelernt» یعنی چه؟", options: ["من یاد می‌گیرم", "من یاد گرفته‌ام", "من یاد خواهم گرفت", "من یاد می‌دادم"], answer: 1 },
      { question: "Partizip II فعل lernen چیست؟", options: ["gelernt", "gelernen", "lernt", "gelernten"], answer: 0 },
      { question: "کدام جمله Perfekt صحیح است؟", options: ["Ich gelernt habe.", "Ich habe gelernt.", "Gelernt ich habe.", "Habe ich gelernt."], answer: 1 },
      { question: "Partizip II فعل arbeiten چیست؟", options: ["gearbeitet", "gearbeiten", "arbeitet", "gearbeiteten"], answer: 0 },
      { question: "کدام فعل Partizip II بدون ge- دارد؟", options: ["machen", "spielen", "verstehen", "kaufen"], answer: 2 }
    ]
  }
};
