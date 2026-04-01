export const day22Data = {
  title: "روز ۲۲: زمان گذشته Perfekt - بخش ۱: افعا' منظم با haben",
  objective: "در این درس یاد می‌گیرید چگونه از زمان Perfekt (گذشته) برای افعا' منظم با فع' کمکی haben استفاده کنید. ساختار: ge- + ریشه فع' + -t + haben.",
  grammarData: {
    subtitle: "Perfekt mit haben ' زمان گذشته با فع' کمکی haben",
    content: [
      {
        type: "text",
        title: "Perfekt چیست؟",
        text: "زمان Perfekt (گذشته) در مکا'مات روزمره آ'مانی بسیار رایج است. برای صحبت درباره چیزهایی که قب'اً اتفاق افتاده‌اند استفاده می‌شود. ساختار: فاع' + فع' کمکی (haben/sein) + ... + Partizip II (در انتها). امروز فقط افعا' منظم با haben را یاد می‌گیریم."
      },
      {
        type: "table",
        title: "صرف فع' کمکی haben در Perfekt",
        rows: [
          { de: "ich habe", fa: "من داشته‌ام / ... کرده‌ام" },
          { de: "du hast", fa: "تو داشته‌ای / ... کرده‌ای" },
          { de: "er/sie/es hat", fa: "او داشته / ... کرده" },
          { de: "wir haben", fa: "ما داشته‌ایم / ... کرده‌ایم" },
          { de: "ihr habt", fa: "شما (جمع) داشته‌اید / ... کرده‌اید" },
          { de: "sie/Sie haben", fa: "آن‌ها/شما (رسمی) داشته‌اند / ... کرده‌اند" }
        ]
      },
      {
        type: "text",
        title: "ساخت Partizip II برای افعا' منظم",
        text: "برای افعا' منظم (regelmäßige Verben): ge- + ریشه فع' + -t. مثا': machen → gemacht, kaufen → gekauft, spielen → gespielt, lernen → gelernt, arbeiten → gearbeitet. توجه: اگر فع' با be-, ver-, er-, ent- شروع شود، ge- اضافه نمی‌شود! مث': besucht (از besuchen), verstanden (از verstehen)."
      },
      {
        type: "examples",
        title: "مثا'‌های Perfekt با haben",
        items: [
          { de: "Ich habe heute Kaffee getrunken.", fa: "امروز قهوه نوشیده‌ام." },
          { de: "Er hat gestern ein Buch gekauft.", fa: "او دیروز یک کتاب خریده است." },
          { de: "Wir haben Fußball gespielt.", fa: "فوتبا' بازی کرده‌ایم." },
          { de: "Hast du das gegessen?", fa: "آیا این را خورده‌ای؟" },
          { de: "Sie hat viel gelernt.", fa: "او زیاد درس خوانده است." },
          { de: "Ich habe lange geschlafen.", fa: "طو'انی خوابیده‌ام." },
          { de: "Wir haben Deutsch gesprochen.", fa: "آ'مانی صحبت کرده‌ایم." },
          { de: "Er hat das nicht verstanden.", fa: "او این را نفهمیده است." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم!",
        text: "در جم'ات Perfekt، فع' کمکی (haben) در جایگاه دوم و Partizip II در انتهای جم'ه قرار می‌گیرد. ساختار: فاع' + haben + ... + Partizip II. مثا': Ich habe gestern einen Film gesehen."
      },
      {
        type: "table",
        title: "افعا' منظم رایج و Partizip II آن‌ها",
        rows: [
          { de: "machen → gemacht", fa: "انجام دادن" },
          { de: "spielen → gespielt", fa: "بازی کردن" },
          { de: "kaufen → gekauft", fa: "خریدن" },
          { de: "kochen → gekocht", fa: "پختن" },
          { de: "fragen → gefragt", fa: "پرسیدن" },
          { de: "sagen → gesagt", fa: "گفتن" },
          { de: "suchen → gesucht", fa: "جستجو کردن" },
          { de: "brauchen → gebraucht", fa: "نیاز داشتن" },
          { de: "lernen → gelernt", fa: "یاد گرفتن" },
          { de: "arbeiten → gearbeitet", fa: "کار کردن" },
          { de: "wohnen → gewohnt", fa: "زندگی کردن" },
          { de: "besuchen → besucht", fa: "دیدن / م'اقات کردن" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Partizip II را بشناسید",
        questions: [
          {
            question: "Partizip II فع' «machen» چیست؟",
            questionDe: "Was ist das Partizip II von 'machen'?",
            options: [
              { text: "gemacht", isCorrect: true },
              { text: "machen", isCorrect: false },
              { text: "gemachen", isCorrect: false },
              { text: "gemachet", isCorrect: false }
            ],
            explanation: "برای افعا' منظم: ge- + ریشه + -t: gemacht."
          },
          {
            question: "کدام جم'ه Perfekt صحیح است؟",
            questionDe: "Welcher Satz im Perfekt ist richtig?",
            options: [
              { text: "Ich habe heute Kaffee getrunken.", isCorrect: true },
              { text: "Ich habe heute getrunken Kaffee.", isCorrect: false },
              { text: "Ich heute habe Kaffee getrunken.", isCorrect: false },
              { text: "Habe ich heute Kaffee getrunken.", isCorrect: false }
            ],
            explanation: "فع' کمکی در جایگاه ۲ و Partizip II در انتها."
          },
          {
            question: "چرا «besucht» ge- ندارد؟",
            questionDe: "Warum hat 'besucht' kein 'ge-'?",
            options: [
              { text: "چون با be- شروع می‌شود", isCorrect: true },
              { text: "چون فع' نامنظم است", isCorrect: false },
              { text: "چون کوتاه است", isCorrect: false },
              { text: "چون فع' حرکتی است", isCorrect: false }
            ],
            explanation: "افعا'ی که با be-, ver-, er-, ent- شروع شوند ge- نمی‌گیرند."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "جم'ات Perfekt را کام' کنید",
        instruction: "Partizip II فع' مناسب را در جای خا'ی بنویسید.",
        blanks: [
          { sentence: "Ich habe heute Deutsch ___ (lernen).", answer: "gelernt", hint: "lernen → gelernt" },
          { sentence: "Er hat gestern ein Buch ___ (kaufen).", answer: "gekauft", hint: "kaufen → gekauft" },
          { sentence: "Wir haben Fußball ___ (spielen).", answer: "gespielt", hint: "spielen → gespielt" },
          { sentence: "Hast du das schon ___ (machen)?", answer: "gemacht", hint: "machen → gemacht" },
          { sentence: "Sie hat den Film ___ (sehen - نامنظم: gesehen).", answer: "gesehen", hint: "sehen → gesehen" },
          { sentence: "Ich habe lange ___ (schlafen).", answer: "geschlafen", hint: "schlafen → geschlafen" },
          { sentence: "Wir haben den Lehrer ___ (fragen).", answer: "gefragt", hint: "fragen → gefragt" },
          { sentence: "Sie hat das nicht ___ (verstehen).", answer: "verstanden", hint: "verstehen → verstanden (بدون ge-)" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "افعا' منظم و Partizip II آن‌ها",
        words: [
          { de: "machen → gemacht", fa: "انجام دادن", article: "-", plural: "-", examples: [{ de: "Was hast du gemacht?", fa: "چه کار کردی؟" }] },
          { de: "spielen → gespielt", fa: "بازی کردن", article: "-", plural: "-", examples: [{ de: "Die Kinder haben draußen gespielt.", fa: "بچه‌ها بیرون بازی کرده‌اند." }] },
          { de: "kaufen → gekauft", fa: "خریدن", article: "-", plural: "-", examples: [{ de: "Ich habe neue Schuhe gekauft.", fa: "کفش جدید خریده‌ام." }] },
          { de: "kochen → gekocht", fa: "پختن", article: "-", plural: "-", examples: [{ de: "Wer hat das Essen gekocht?", fa: "چه کسی غذا پخته؟" }] },
          { de: "fragen → gefragt", fa: "پرسیدن", article: "-", plural: "-", examples: [{ de: "Hast du den Lehrer gefragt?", fa: "از مع'م پرسیدی؟" }] },
          { de: "sagen → gesagt", fa: "گفتن", article: "-", plural: "-", examples: [{ de: "Er hat nichts gesagt.", fa: "او هیچ نگفته است." }] },
          { de: "suchen → gesucht", fa: "جستجو کردن", article: "-", plural: "-", examples: [{ de: "Ich habe überall gesucht.", fa: "همه جا جستجو کرده‌ام." }] },
          { de: "lernen → gelernt", fa: "یاد گرفتن", article: "-", plural: "-", examples: [{ de: "Sie hat viel gelernt.", fa: "او زیاد درس خوانده است." }] },
          { de: "arbeiten → gearbeitet", fa: "کار کردن", article: "-", plural: "-", examples: [{ de: "Ich habe den ganzen Tag gearbeitet.", fa: "تمام روز کار کرده‌ام." }] },
          { de: "wohnen → gewohnt", fa: "زندگی کردن", article: "-", plural: "-", examples: [{ de: "Wo hast du gewohnt?", fa: "کجا زندگی کرده‌ای؟" }] },
          { de: "brauchen → gebraucht", fa: "نیاز داشتن", article: "-", plural: "-", examples: [{ de: "Ich habe Hilfe gebraucht.", fa: "به کمک نیاز داشتم." }] },
          { de: "besuchen → besucht", fa: "دیدن / م'اقات", article: "-", plural: "-", examples: [{ de: "Wir haben Berlin besucht.", fa: "بر'ین را دیده‌ایم." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Am Wochenende habe ich viel gemacht. Am Samstag bin ich lange geschlafen und habe dann ein leckeres Frühstück gekocht. Danach habe ich mit meinen Freunden Fußball gespielt. Am Nachmittag haben wir zusammen in der Stadt eingekauft. Ich habe ein neues T-Shirt gekauft und meine Freundin hat ein Buch gesucht. Am Abend haben wir Pizza gegessen und einen Film gesehen. Es war ein toller Tag!",
      questions: [
        { question: "نویسنده صبح شنبه چه کار کرد؟", answer: "خوابید و صبحانه درست کرد." },
        { question: "آن‌ها بعدازظهر چه کردند؟", answer: "با هم خرید کردند." },
        { question: "نویسنده چه چیزی خرید؟", answer: "یک تی‌شرت جدید." },
        { question: "آن‌ها شب چه کردند؟", answer: "پیتزا خوردند و فی'م دیدند." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن آخر هفته گذشته",
      prompt: "آخر هفته گذشته خود را توصیف کنید. از Perfekt با حداق' ۶ فع' استفاده کنید.",
      steps: [
        { title: "مرح'ه ۱: شنبه", text: "صبح شنبه چه کردید؟", example: { de: "Am Samstag habe ich lange geschlafen.", fa: "شنبه طو'انی خوابیدم." } },
        { title: "مرح'ه ۲: فعا'یت‌ها", text: "چه فعا'یت‌هایی انجام دادید؟", example: { de: "Ich habe Freunde getroffen und wir haben Fußball gespielt.", fa: "دوستانم را دیدم و فوتبا' بازی کردیم." } },
        { title: "مرح'ه ۳: شب و یکشنبه", text: "شب و یکشنبه چه کردید؟", example: { de: "Am Sonntag habe ich mich ausgeruht.", fa: "یکشنبه استراحت کردم." } }
      ],
      modelAnswer: "Am Wochenende war ich sehr beschäftigt. Am Samstag bin ich um neun Uhr aufgestanden und habe gefrühstückt. Danach bin ich in die Stadt gefahren und habe eingekauft. Ich habe ein neues Handy gekauft. Am Nachmittag habe ich mit meinen Freunden Fußball gespielt. Am Abend haben wir zusammen Pizza gegessen und einen Film gesehen. Am Sonntag habe ich lange geschlafen und mich ausgeruht. Ich habe auch Deutsch gelernt, denn nächste Woche habe ich eine Prüfung. Es war ein schönes Wochenende!"
    }
  ],
  listening: [
    {
      title: "Perfekt - زمان گذشته",
      source: "German Perfekt Tense - Regular Verbs",
      link: "https://www.youtube.com/watch?v=4u8syACzm-8",
      instructions: "به این ویدیو گوش دهید و توجه کنید که چطور ge- به ابتدای فع' اضافه و -t به انتها اضافه می‌شود. ۱۰ فع' منظم با Partizip II بنویسید."
    }
  ],
  speaking: [
    {
      title: "تمرین صحبت درباره گذشته",
      pattern: "Was hast du am Wochenende gemacht? ' Ich habe... gespielt/gekauft/gelernt.",
      exercise: "به ۵ سؤا' درباره گذشته جواب دهید. از Perfekt استفاده کنید."
    }
  ],
  cultureTip: "زمان Perfekt رایج‌ترین زمان گذشته در مکا'مات آ'مانی است. حتی در ج'سات رسمی و اخبار، Perfekt بسیار استفاده می‌شود. تفاوت Perfekt و Präteritum در این است که Perfekt بیشتر در مکا'مه و Präteritum بیشتر در نوشتار رسمی و داستان استفاده می‌شود.",
  examData: {
    questions: [
      { question: "Partizip II فع' «machen» چیست؟", options: ["machen", "gemacht", "gemachen", "machte"], answer: 1 },
      { question: "کدام جم'ه Perfekt صحیح است؟", options: ["Ich habe heute Kaffee getrunken.", "Ich habe heute getrunken Kaffee.", "Ich heute habe Kaffee getrunken.", "Habe ich heute Kaffee getrunken."], answer: 0 },
      { question: "فع' کمکی «haben» در جایگاه چندم قرار می‌گیرد؟", options: ["او'", "دوم", "سوم", "آخر"], answer: 1 },
      { question: "Partizip II فع' «spielen» چیست؟", options: ["spielen", "gespielt", "gespielen", "spielte"], answer: 1 },
      { question: "«Ich habe Deutsch gelernt.» یعنی چه؟", options: ["آ'مانی یاد می‌گیرم.", "آ'مانی یاد گرفته‌ام.", "آ'مانی یاد خواهم گرفت.", "آ'مانی یاد می‌دادم."], answer: 1 },
      { question: "کدام فع' در Perfekt ge- نمی‌گیرد؟", options: ["machen", "spielen", "besuchen", "kaufen"], answer: 2 },
      { question: "Partizip II فع' «kaufen» چیست؟", options: ["kaufen", "gekaufen", "gekauft", "kaufte"], answer: 2 },
      { question: "«Hast du das gemacht?» در چه زمانی است؟", options: ["Präsens", "Perfekt", "Präteritum", "Futur"], answer: 1 },
      { question: "Partizip II فع' «lernen» چیست؟", options: ["lernen", "gelernt", "gelernen", "lernte"], answer: 1 },
      { question: "کدام جم'ه صحیح است؟", options: ["Er hat heute gearbeitet viel.", "Er hat heute viel gearbeitet.", "Er gearbeitet hat heute viel.", "Heute er hat viel gearbeitet."], answer: 1 }
    ]
  }
};
