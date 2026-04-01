export const day27Data = {
  title: "روز ۲۷: حالت مفعولی غیرمستقیم (Dativ)",
  objective: "یادگیری تغییر حروف تعریف و اسم‌ها در حالت Dativ و کاربرد آن در جملات روزمره.",
  grammarData: {
    subtitle: "حالت Dativ در زبان آلمانی",
    content: [
      {
        type: "text",
        title: "Dativ چیست؟",
        text: "Dativ (حالت مفعولی غیرمستقیم) برای نشان دادن «به چه کسی؟» یا «برای چه کسی؟» استفاده می‌شود. بسیاری از فعل‌ها فقط با Dativ می‌آیند: helfen, danken, antworten, gefallen, gehören, schmecken. همچنین در جملات با دو مفعول، مفعول غیرمستقیم در Dativ می‌آید."
      },
      {
        type: "table",
        title: "تغییرات حروف تعریف در Dativ",
        rows: [
          { de: "der → dem [deːm]", fa: "مذکر: مرد → به مرد" },
          { de: "die → der [deːɐ̯]", fa: "مؤنث: زن → به زن" },
          { de: "das → dem [deːm]", fa: "خنثی: بچه → به بچه" },
          { de: "die(pl) → den + N", fa: "جمع: دوستان → به دوستان + N" }
        ]
      },
      {
        type: "table",
        title: "حروف تعریف نامشخص در Dativ",
        rows: [
          { de: "ein → einem (مذکر)", fa: "یک مرد → به یک مرد" },
          { de: "eine → einer (مؤنث)", fa: "یک زن → به یک زن" },
          { de: "einem (خنثی)", fa: "یک بچه → به یک بچه" },
          { de: "kein → keinem/keiner/keinen+ N", fa: "هیچ → به هیچ ..." }
        ]
      },
      {
        type: "table",
        title: "ضمایر شخصی در Dativ",
        rows: [
          { de: "ich → mir [miːɐ̯]", fa: "من → به من" },
          { de: "du → dir [diːɐ̯]", fa: "تو → به تو" },
          { de: "er → ihm [iːm]", fa: "او (مذکر) → به او" },
          { de: "sie → ihr [iːɐ̯]", fa: "او (مؤنث) → به او" },
          { de: "es → ihm [iːm]", fa: "آن → به آن" },
          { de: "wir → uns [ʊns]", fa: "ما → به ما" },
          { de: "ihr → euch [ɔʏ̯ç]", fa: "شما (جمع) → به شما" },
          { de: "sie → ihnen [ˈiːnən]", fa: "آن‌ها → به آن‌ها" },
          { de: "Sie → Ihnen [ˈiːnən]", fa: "شما (رسمی) → به شما" }
        ]
      },
      {
        type: "table",
        title: "افعال مهم با Dativ",
        rows: [
          { de: "helfen [ˈhɛlpfn̩]", fa: "کمک کردن" },
          { de: "danken [ˈdaŋkn̩]", fa: "تشکر کردن" },
          { de: "antworten [ˈantvɔʁtn̩]", fa: "جواب دادن" },
          { de: "gefallen [ɡəˈfalən]", fa: "خوش آمدن" },
          { de: "gehören [ɡəˈhøːʁən]", fa: "تعلق داشتن" },
          { de: "schmecken [ˈʃmɛkn̩]", fa: "مزه دادن" },
          { de: "grüßen [ˈɡʁyːsn̩]", fa: "سلام کردن" },
          { de: "glauben [ˈɡlaʊ̯bn̩]", fa: "باور کردن" },
          { de: "fehlen [ˈfeːlən]", fa: "کم بودن / دلتنگی" },
          { de: "zuhören [ˈtsuːˌhøːʁən]", fa: "گوش دادن" }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های Dativ",
        items: [
          { de: "Ich helfe dem Mann.", fa: "به مرد کمک می‌کنم." },
          { de: "Ich danke dir.", fa: "از تو تشکر می‌کنم." },
          { de: "Das Buch gefällt mir.", fa: "این کتاب به من خوش می‌آید." },
          { de: "Das schmeckt ihm.", fa: "این به او مزه می‌دهد." },
          { de: "Wem gehört das Auto?", fa: "این ماشین مال کیست؟" },
          { de: "Antworten Sie mir bitte!", fa: "لطفاً به من جواب دهید!" },
          { de: "Ich glaube dir.", fa: "به تو باور دارم." },
          { de: "Grüßen Sie Ihre Familie von mir!", fa: "از طرف من به خانواده‌تان سلام برسانید!" },
          { de: "Hören Sie mir zu!", fa: "به من گوش دهید!" },
          { de: "Du fehlst mir.", fa: "دلتنگتم." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم!",
        text: "فعل‌های Dativ همیشه با مفعول غیرمستقیم می‌آیند. این فعل‌ها Akkusativ نمی‌گیرند! فعل‌های مهم: helfen, danken, gefallen, schmecken, gehören, antworten. همیشه از خودتان بپرسید: «به چه کسی؟» اگر جواب Dativ است. نکته: فعل «helfen» همیشه با Dativ می‌آید حتی اگر مفعول مستقیم هم داشته باشد."
      },
      {
        type: "interactive_quiz",
        title: "Dativ را بشناسید",
        questions: [
          {
            question: "ضمیر Dativ برای ich چیست؟",
            questionDe: "Was ist das Dativpronomen für 'ich'?",
            options: [
              { text: "mich", isCorrect: false },
              { text: "mir", isCorrect: true },
              { text: "ich", isCorrect: false },
              { text: "uns", isCorrect: false }
            ],
            explanation: "ich → mir (Dativ)."
          },
          {
            question: "«Ich helfe dir» یعنی چه؟",
            questionDe: "Was bedeutet 'Ich helfe dir'?",
            options: [
              { text: "من تو را می‌بینم", isCorrect: false },
              { text: "من به تو کمک می‌کنم", isCorrect: true },
              { text: "من تو را دوست دارم", isCorrect: false },
              { text: "من با تو صحبت می‌کنم", isCorrect: false }
            ],
            explanation: "helfen + Dativ: به کسی کمک کردن."
          },
          {
            question: "«Das gefällt mir» یعنی چه؟",
            questionDe: "Was bedeutet 'Das gefällt mir'?",
            options: [
              { text: "این مال من است", isCorrect: false },
              { text: "این به من خوش می‌آید", isCorrect: true },
              { text: "این برای من است", isCorrect: false },
              { text: "این از من است", isCorrect: false }
            ],
            explanation: "gefallen + Dativ: خوش آمدن."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ضمیر Dativ صحیح",
        instruction: "ضمیر Dativ صحیح را در جای خالی بنویسید.",
        blanks: [
          { sentence: "Ich helfe ___. (تو)", answer: "dir", hint: "du → dir (Dativ)" },
          { sentence: "Das Buch gefällt ___. (من)", answer: "mir", hint: "ich → mir (Dativ)" },
          { sentence: "Er dankt ___. (ما)", answer: "uns", hint: "wir → uns (Dativ)" },
          { sentence: "Das schmeckt ___. (آن‌ها)", answer: "ihnen", hint: "sie → ihnen (Dativ)" },
          { sentence: "Wem gehört das? – Es gehört ___. (او مؤنث)", answer: "ihr", hint: "sie → ihr (Dativ)" },
          { sentence: "Antworten Sie ___. (من)", answer: "mir", hint: "ich → mir (Dativ)" },
          { sentence: "Ich glaube ___. (تو)", answer: "dir", hint: "du → dir (Dativ)" },
          { sentence: "Helfen Sie ___. (من)", answer: "mir", hint: "ich → mir (Dativ)" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "افعال مهم با Dativ",
        words: [
          { de: "helfen", fa: "کمک کردن", ipa: "[ˈhɛlpfn̩]", article: "-", plural: "-", conjugation: { ich: "helfe", du: "hilfst", er: "hilft", wir: "helfen", ihr: "helft", sie: "helfen" }, examples: [{ de: "Kannst du mir helfen?", fa: "می‌توانی به من کمک کنی؟" }, { de: "Ich helfe dir gern.", fa: "با کمال میل کمکت می‌کنم." }] },
          { de: "danken", fa: "تشکر کردن", ipa: "[ˈdaŋkn̩]", article: "-", plural: "-", conjugation: { ich: "danke", du: "dankst", er: "dankt", wir: "danken", ihr: "dankt", sie: "danken" }, examples: [{ de: "Ich danke dir vielmals!", fa: "خیلی از تو ممنونم!" }, { de: "Er hat ihr gedankt.", fa: "او از او (مؤنث) تشکر کرده." }] },
          { de: "antworten", fa: "جواب دادن", ipa: "[ˈantvɔʁtn̩]", article: "-", plural: "-", conjugation: { ich: "antworte", du: "antwortest", er: "antwortet", wir: "antworten", ihr: "antwortet", sie: "antworten" }, examples: [{ de: "Antworten Sie bitte!", fa: "لطفاً جواب دهید!" }, { de: "Er antwortet mir nicht.", fa: "او به من جواب نمی‌دهد." }] },
          { de: "gefallen", fa: "خوش آمدن", ipa: "[ɡəˈfalən]", article: "-", plural: "-", conjugation: { ich: "gefalle", du: "gefallst", er: "gefällt", wir: "gefallen", ihr: "gefallt", sie: "gefallen" }, examples: [{ de: "Das Kleid gefällt ihr.", fa: "این لباس به او خوش می‌آید." }, { de: "Gefällt dir das Essen?", fa: "غذا به تو خوش می‌آید؟" }] },
          { de: "gehören", fa: "تعلق داشتن", ipa: "[ɡəˈhøːʁən]", article: "-", plural: "-", conjugation: { ich: "gehöre", du: "gehörst", er: "gehört", wir: "gehören", ihr: "gehört", sie: "gehören" }, examples: [{ de: "Wem gehört das?", fa: "این مال کیست؟" }, { de: "Das Buch gehört mir.", fa: "کتاب مال من است." }] },
          { de: "schmecken", fa: "مزه دادن", ipa: "[ˈʃmɛkn̩]", article: "-", plural: "-", conjugation: { ich: "schmecke", du: "schmeckst", er: "schmeckt", wir: "schmecken", ihr: "schmeckt", sie: "schmecken" }, examples: [{ de: "Das Essen schmeckt uns.", fa: "غذا به ما مزه می‌دهد." }, { de: "Schmeckt es Ihnen?", fa: "مزه‌اش به شما می‌دهد؟" }] },
          { de: "grüßen", fa: "سلام کردن", ipa: "[ˈɡʁyːsn̩]", article: "-", plural: "-", conjugation: { ich: "grüße", du: "grüßt", er: "grüßt", wir: "grüßen", ihr: "grüßt", sie: "grüßen" }, examples: [{ de: "Grüßen Sie Ihre Mutter!", fa: "به مادرتان سلام برسانید!" }, { de: "Ich grüße dich!", fa: "سلام!" }] },
          { de: "glauben", fa: "باور کردن", ipa: "[ˈɡlaʊ̯bn̩]", article: "-", plural: "-", conjugation: { ich: "glaube", du: "glaubst", er: "glaubt", wir: "glauben", ihr: "glaubt", sie: "glauben" }, examples: [{ de: "Ich glaube dir.", fa: "به تو باور دارم." }, { de: "Glaubst du mir?", fa: "باورم داری؟" }] },
          { de: "fehlen", fa: "کم بودن / دلتنگی", ipa: "[ˈfeːlən]", article: "-", plural: "-", conjugation: { ich: "fehle", du: "fehlst", er: "fehlt", wir: "fehlen", ihr: "fehlt", sie: "fehlen" }, examples: [{ de: "Du fehlst mir.", fa: "دلتنگتم." }, { de: "Mir fehlt das Geld.", fa: "پول کم دارم." }] },
          { de: "zuhören", fa: "گوش دادن", ipa: "[ˈtsuːˌhøːʁən]", article: "-", plural: "-", conjugation: { ich: "höre zu", du: "hörst zu", er: "hört zu", wir: "hören zu", ihr: "hört zu", sie: "hören zu" }, examples: [{ de: "Hören Sie mir zu!", fa: "به من گوش دهید!" }, { de: "Hör mir bitte zu!", fa: "لطفاً به من گوش بده!" }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Ich habe heute einen neuen Kollegen getroffen. Er heißt Thomas. Ich habe ihm geholfen, den Computer einzurichten. Er hat mir gedankt. Das Büro gefällt ihm sehr gut. Er arbeitet in der IT-Abteilung. Sein Chef hat ihm die Aufgaben erklärt. Ich habe ihm gezeigt, wo die Kantine ist. Das Essen dort schmeckt allen Kollegen. Am Abend haben wir ihm einen Kaffee angeboten. Er hat sich sehr gefreut.",
      translation: "امروز همکار جدیدی را ملاقات کردم. اسمش توماس است. به او کمک کردم کامپیوتر را راه‌اندازی کند. او از من تشکر کرد. اداره خیلی به او خوش می‌آید. او در بخش IT کار می‌کند. رئیسش وظایف را به او توضیح داد. به او نشان دادم کانتین کجاست. غذای آنجا به همه همکاران مزه می‌دهد. عصر به او قهوه‌ای پیشنهاد دادیم. او خیلی خوشحال شد.",
      questions: [
        { question: "همکار جدید چه کسی است؟", answer: "توماس." },
        { question: "او به توماس چه کمکی کرد؟", answer: "کامپیوتر را راه‌اندازی کرد." },
        { question: "توماس کجا کار می‌کند؟", answer: "در بخش IT." },
        { question: "غذا به همکاران چطور بود؟", answer: "مزه داد." }
      ]
    }
  ],
  writing: [
    {
      title: "تعریف کردن از یک روز",
      prompt: "روزتان را توصیف کنید. از افعال Dativ استفاده کنید.",
      steps: [
        { title: "مرحله ۱: صبح", text: "صبح چه اتفاقی افتاد؟", example: { de: "Mein Kollege hat mir geholfen.", fa: "همکارم به من کمک کرد." } },
        { title: "مرحله ۲: ظهر", text: "ظهر چه کردید؟", example: { de: "Das Essen hat mir geschmeckt.", fa: "غذا به من مزه داد." } },
        { title: "مرحله ۳: شب", text: "شب چه کردید؟", example: { de: "Ich habe meiner Freundin eine Nachricht geschrieben.", fa: "به دوستم پیام نوشتم." } }
      ],
      modelAnswer: "Heute war ein guter Tag. Am Morgen hat mir mein Chef bei einer Aufgabe geholfen. Ich habe ihm gedankt. Das neue Projekt gefällt mir sehr gut. Am Mittag habe ich mit Kollegen gegessen. Das Essen hat uns allen geschmeckt. Am Nachmittag hat ein Kollege mir eine E-Mail geschrieben. Ich habe ihm schnell geantwortet. Am Abend habe ich meiner Mutter angerufen. Sie hat sich sehr gefreut."
    }
  ],
  listening: [
    {
      title: "جملات Dativ",
      instruction: "به جملات گوش دهید و آن‌ها را بنویسید.",
      sentences: [
        { de: "Ich helfe dir.", fa: "به تو کمک می‌کنم.", tts: "slow" },
        { de: "Das gefällt mir.", fa: "این به من خوش می‌آید.", tts: "slow" },
        { de: "Er dankt ihr.", fa: "او از او (مؤنث) تشکر می‌کند.", tts: "slow" },
        { de: "Das schmeckt uns.", fa: "این به ما مزه می‌دهد.", tts: "slow" },
        { de: "Antworte mir!", fa: "به من جواب بده!", tts: "slow" },
        { de: "Wem gehört das?", fa: "این مال کیست؟", tts: "slow" }
      ]
    }
  ],
  speaking: [
    {
      title: "گفتگو: کمک و تشکر",
      pattern: "A: Kannst du mir bitte helfen? B: Natürlich! Was brauchst du? A: Ich suche die Post. B: Gehen Sie geradeaus. A: Vielen Dank! B: Bitte schön! A: Gefällt Ihnen die Stadt? B: Ja, sehr gut!",
      exercise: "با یک دوست گفتگو کنید. از کسی کمک بخواهید و از او تشکر کنید. حداقل ۴ فعل Dativ استفاده کنید."
    }
  ],
  cultureTip: "در آلمان، تشکر کردن بسیار مهم است. عبارت «Danke schön!» یا «Vielen Dank!» همیشه استفاده می‌شود. وقتی کسی به شما کمک می‌کند، حتماً تشکر کنید: «Ich danke Ihnen!». فعل «gefallen» بسیار رایج است برای بیان علاقه: «Das gefällt mir!» (این را دوست دارم!).",
  examData: {
    questions: [
      { question: "ضمیر Dativ برای ich چیست؟", options: ["mich", "mir", "ich", "uns"], answer: 1 },
      { question: "«Ich helfe dir» یعنی چه؟", options: ["من تو را می‌بینم", "من به تو کمک می‌کنم", "من تو را دوست دارم", "من با تو صحبت می‌کنم"], answer: 1 },
      { question: "کدام فعل Dativ می‌گیرد؟", options: ["sehen", "helfen", "lesen", "schreiben"], answer: 1 },
      { question: "«Das gefällt mir» یعنی چه؟", options: ["این مال من است", "این به من خوش می‌آید", "این برای من است", "این از من است"], answer: 1 },
      { question: "حروف تعریف der در Dativ چیست؟", options: ["den", "dem", "der", "des"], answer: 1 },
      { question: "ضمیر Dativ برای du چیست؟", options: ["dich", "dir", "du", "dein"], answer: 1 },
      { question: "کدام فعل Dativ می‌گیرد؟", options: ["kaufen", "suchen", "danken", "machen"], answer: 2 },
      { question: "«Das schmeckt mir» یعنی چه؟", options: ["این بوی خوبی دارد", "این به من مزه می‌دهد", "این زیباست", "این گران است"], answer: 1 },
      { question: "حروف تعریف die (مؤنث) در Dativ چیست؟", options: ["der", "die", "dem", "den"], answer: 0 },
      { question: "«Wem gehört das?» یعنی چه؟", options: ["این چیست؟", "این کجاست؟", "این مال کیست؟", "این چقدر است؟"], answer: 2 }
    ]
  }
};
