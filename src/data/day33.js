export const day33Data = {
  title: "روز ۳۳: um...zu و damit - جملات هدفی",
  objective: "یادگیری بیان هدف و منظور با ساختارهای um...zu و damit در جملات آلمانی",
  level: "A2",

  grammarData: {
    subtitle: "جملات هدفی (Finalsätze)",
    content: [
      {
        type: "text",
        title: "um...zu چیست و چه وقت استفاده می‌شود؟",
        text: "وقتی می‌خواهیم هدف یک کار را بیان کنیم (برای چه کاری؟)، از um...zu استفاده می‌کنیم. شرط مهم: فاعل هر دو جمله باید یکسان باشد. فرمول: جمله اصلی + کاما + um + بقیه کلمات + zu + مصدر فعل در آخر."
      },
      {
        type: "alert",
        title: "فرمول um...zu!",
        text: "Subject + Verb + ..., um + ... + zu + Infinitiv. مثال: Ich lerne Deutsch, um in Deutschland zu arbeiten. (من آلمانی می‌خوانم تا در آلمان کار کنم.) فاعل هر دو بخش Ich است."
      },
      {
        type: "text",
        title: "damit چیست و چه وقت استفاده می‌شود؟",
        text: "وقتی فاعل جمله اول با فاعل جمله دوم متفاوت است، از damit استفاده می‌کنیم. damit یک Subjunktion است و فعل را به آخر جمله می‌فرستد."
      },
      {
        type: "table",
        title: "تفاوت um...zu و damit",
        rows: [
          { de: "um...zu + Infinitiv", fa: "فاعل هر دو جمله یکسان است" },
          { de: "damit + Verb در آخر", fa: "فاعل جمله‌ها متفاوت است" },
          { de: "Ich spare Geld, um ein Auto zu kaufen.", fa: "من پول پس‌انداز می‌کنم تا ماشین بخرم. (فاعل: من)" },
          { de: "Ich spare Geld, damit meine Frau ein Auto kaufen kann.", fa: "من پول پس‌انداز می‌کنم تا همسرم بتواند ماشین بخرد. (فاعل: من → همسرم)" },
          { de: "Er lernt viel, um die Prüfung zu bestehen.", fa: "او زیاد درس می‌خواند تا در امتحان قبول شود." },
          { de: "Er lernt viel, damit seine Eltern stolz sind.", fa: "او زیاد درس می‌خواند تا والدینش مفتخر باشند." }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های um...zu",
        items: [
          { de: "Ich lerne jeden Tag, um die Prüfung zu bestehen.", fa: "هر روز درس می‌خوانم تا در امتحان قبول شوم." },
          { de: "Er geht früh schlafen, um morgen fit zu sein.", fa: "او زود می‌خوابد تا فردا سرحال باشد." },
          { de: "Wir fahren nach Berlin, um unsere Freunde zu besuchen.", fa: "ما به برلین می‌رویم تا دوستانمان را ببینیم." },
          { de: "Sie arbeitet viel, um Geld zu sparen.", fa: "او زیاد کار می‌کند تا پول پس‌انداز کند." },
          { de: "Ich gehe ins Fitnessstudio, um gesund zu bleiben.", fa: "به باشگاه می‌روم تا سالم بمانم." },
          { de: "Wir lernen zusammen, um schneller besser zu werden.", fa: "با هم درس می‌خوانیم تا سریع‌تر بهتر شویم." }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های damit",
        items: [
          { de: "Ich erkläre es dir, damit du es verstehst.", fa: "برایت توضیح می‌دهم تا تو آن را بفهمی." },
          { de: "Die Mutter kocht, damit die Kinder satt werden.", fa: "مادر آشپزی می‌کند تا بچه‌ها سیر شوند." },
          { de: "Er spricht langsam, damit alle ihn verstehen.", fa: "او آرام صحبت می‌کند تا همه او را بفهمند." },
          { de: "Wir kaufen Geschenke, damit sich die Kinder freuen.", fa: "ما هدیه می‌خریم تا بچه‌ها خوشحال شوند." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "تست um...zu و damit",
        questions: [
          {
            question: "کدام جمله صحیح است؟ من کار می‌کنم تا پول دربیاورم.",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich arbeite, um Geld zu verdienen.", isCorrect: true },
              { text: "Ich arbeite, damit Geld zu verdienen.", isCorrect: false },
              { text: "Ich arbeite, um Geld verdienen.", isCorrect: false },
              { text: "Ich arbeite, zu Geld verdienen.", isCorrect: false }
            ],
            explanation: "چون فاعل هر دو بخش یکسان است (من)، از um...zu استفاده می‌کنیم."
          },
          {
            question: "کدام جمله صحیح است؟ من آرام صحبت می‌کنم تا دوستم مرا بفهمد.",
            questionDe: "Fälle mit verschiedenem Subjekt brauchen damit.",
            options: [
              { text: "Ich spreche langsam, um mein Freund mich versteht.", isCorrect: false },
              { text: "Ich spreche langsam, damit mein Freund mich versteht.", isCorrect: true },
              { text: "Ich spreche langsam, um mein Freund zu verstehen.", isCorrect: false },
              { text: "Ich spreche langsam, damit mein Freund mich zu verstehen.", isCorrect: false }
            ],
            explanation: "چون فاعل‌ها متفاوت هستند (من و دوستم)، باید از damit استفاده کنیم."
          },
          {
            question: "کدام ساختار صحیح است؟ Ich gehe früh ins Bett, ___",
            questionDe: "um...zu oder damit?",
            options: [
              { text: "um morgen fit zu sein.", isCorrect: true },
              { text: "damit morgen fit zu sein.", isCorrect: false },
              { text: "um morgen fit sein.", isCorrect: false },
              { text: "zu morgen fit sein.", isCorrect: false }
            ],
            explanation: "فاعل هر دو Ich است، پس um...zu صحیح است."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمیل جملات هدفی",
        instruction: "جای خالی را با um...zu یا damit پر کنید.",
        blanks: [
          { sentence: "Ich lerne Deutsch, ___ in Deutschland zu arbeiten.", answer: "um", hint: "فاعل یکسان → um...zu" },
          { sentence: "Ich helfe dir, ___ du schneller fertig wirst.", answer: "damit", hint: "فاعل متفاوت → damit" },
          { sentence: "Sie spart Geld, ___ ein neues Auto zu kaufen.", answer: "um", hint: "فاعل یکسان → um...zu" },
          { sentence: "Er spricht laut, ___ alle ihn hören können.", answer: "damit", hint: "فاعل متفاوت → damit" },
          { sentence: "Wir gehen ins Kino, ___ einen Film zu sehen.", answer: "um", hint: "فاعل یکسان → um...zu" },
          { sentence: "Die Lehrerin erklärt es, ___ die Schüler es verstehen.", answer: "damit", hint: "فاعل متفاوت → damit" },
          { sentence: "Ich trinke Kaffee, ___ wach zu bleiben.", answer: "um", hint: "فاعل یکسان → um...zu" },
          { sentence: "Ich rufe dich an, ___ du Bescheid weißt.", answer: "damit", hint: "فاعل متفاوت → damit" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "هدف و منظور (Ziel und Zweck)",
        words: [
          { de: "um...zu", fa: "به منظور / تا اینکه (فاعل یکسان)", ipa: "[ʊm tsuː]", article: "-", plural: "-", examples: [{ de: "Ich spare, um eine Reise zu machen.", fa: "پس‌انداز می‌کنم تا سفر کنم." }] },
          { de: "damit", fa: "تا اینکه (فاعل متفاوت)", ipa: "[daˈmɪt]", article: "-", plural: "-", examples: [{ de: "Ich sage es dir, damit du es weißt.", fa: "به تو می‌گویم تا بدانی." }] },
          { de: "der Zweck", fa: "هدف / منظور", ipa: "[tsvɛk]", article: "der", plural: "die Zwecke", examples: [{ de: "Was ist der Zweck davon?", fa: "منظور از این چیست؟" }] },
          { de: "das Ziel", fa: "هدف", ipa: "[tsiːl]", article: "das", plural: "die Ziele", examples: [{ de: "Mein Ziel ist es, Deutsch zu lernen.", fa: "هدف من یادگیری آلمانی است." }] },
          { de: "der Grund", fa: "دلیل", ipa: "[ɡʁʊnt]", article: "der", plural: "die Gründe", examples: [{ de: "Aus welchem Grund lernst du Deutsch?", fa: "به چه دلیلی آلمانی یاد می‌گیری؟" }] }
        ]
      },
      {
        title: "افعال کاربردی برای جملات هدفی",
        words: [
          { de: "lernen", fa: "یاد گرفتن", ipa: "[ˈlɛʁnən]", article: "-", plural: "-", conjugation: { ich: "lerne", du: "lernst", er: "lernt", wir: "lernen", ihr: "lernt", sie: "lernen" }, examples: [{ de: "Ich lerne, um besser zu werden.", fa: "یاد می‌گیرم تا بهتر شوم." }] },
          { de: "sparen", fa: "پس‌انداز کردن", ipa: "[ˈʃpaːʁən]", article: "-", plural: "-", conjugation: { ich: "spare", du: "sparst", er: "spart", wir: "sparen", ihr: "spart", sie: "sparen" }, examples: [{ de: "Er spart, um ein Haus zu kaufen.", fa: "او پس‌انداز می‌کند تا خانه بخرد." }] },
          { de: "üben", fa: "تمرین کردن", ipa: "[ˈyːbn̩]", article: "-", plural: "-", conjugation: { ich: "übe", du: "übst", er: "übt", wir: "üben", ihr: "übt", sie: "üben" }, examples: [{ de: "Sie übt, um perfekt zu spielen.", fa: "او تمرین می‌کند تا بی‌نقص بنوازد." }] },
          { de: "sich bemühen", fa: "تلاش کردن", ipa: "[zɪç bəˈmyːən]", article: "-", plural: "-", conjugation: { ich: "bemühe mich", du: "bemühst dich", er: "bemüht sich", wir: "bemühen uns", ihr: "bemüht euch", sie: "bemühen sich" }, examples: [{ de: "Ich bemühe mich, um pünktlich zu sein.", fa: "تلاش می‌کنم تا سر وقت باشم." }] },
          { de: "versuchen", fa: "سعی کردن", ipa: "[fɛɐ̯ˈzuːxn̩]", article: "-", plural: "-", conjugation: { ich: "versuche", du: "versuchst", er: "versucht", wir: "versuchen", ihr: "versucht", sie: "versuchen" }, examples: [{ de: "Er versucht, um besser zu sprechen.", fa: "او سعی می‌کند تا بهتر صحبت کند." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Warum lernen wir Deutsch?\n\nViele Menschen lernen Deutsch, um in Deutschland zu studieren oder zu arbeiten. Anna zum Beispiel kommt aus Polen. Sie lernt seit zwei Jahren Deutsch, um an einer deutschen Universität Medizin zu studieren.\nIhr Bruder Tomás arbeitet schon in München. Er hat früher Deutsch gelernt, um dort einen Job zu finden. Jetzt hilft er seiner Schwester, damit sie schneller Deutsch lernt. Er erkl\u00e4rt ihr die Grammatik, damit sie die Prüfung besteht.\nAnna übt jeden Tag, um fließend zu sprechen. Sie hört Podcasts, damit ihr Hörverständnis besser wird. Ihr Ziel ist klar: Sie möchte nächstes Jahr die B2-Prüfung bestehen.",
      translation: "چرا آلمانی یاد می‌گیریم؟\n\nخیلی از مردم آلمانی یاد می‌گیرند تا در آلمان تحصیل یا کار کنند. مثلاً آنا از لهستان آمده. او دو سال است آلمانی یاد می‌گیرد تا در دانشگاه آلمانی پزشکی بخواند.\nبرادرش توماس در مونیخ کار می‌کند. او قبلاً آلمانی یاد گرفته تا آنجا کار پیدا کند. حالا به خواهرش کمک می‌کند تا سریع‌تر آلمانی یاد بگیرد. گرامر را توضیح می‌دهد تا خواهرش در امتحان قبول شود.\nآنا هر روز تمرین می‌کند تا روان صحبت کند. به پادکست گوش می‌دهد تا مهارت شنیداری‌اش بهتر شود. هدفش واضح است: می‌خواهد سال آینده امتحان B2 را قبول شود.",
      questions: [
        { question: "آنا چرا آلمانی یاد می‌گیرد؟", answer: "به منظور تحصیل پزشکی در دانشگاه آلمان." },
        { question: "توماس قبلاً چرا آلمانی یاد گرفت؟", answer: "به منظور پیدا کردن کار در مونیخ." },
        { question: "توماس چگونه به خواهرش کمک می‌کند؟ (damit)", answer: "او گرامر توضیح می‌دهد تا خواهرش در امتحان قبول شود." },
        { question: "هدف نهایی آنا چیست؟", answer: "قبولی در امتحان B2 سال آینده." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره هدف",
      prompt: "یک پاراگراف (۶-۷ خط) درباره هدف خود بنویسید. از حداقل ۳ بار um...zu و ۲ بار damit استفاده کنید.",
      steps: [
        { title: "هدف اصلی", text: "هدف اصلی خود را بیان کنید.", example: { de: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", fa: "آلمانی یاد می‌گیرم تا در آلمان کار کنم." } },
        { title: "اهداف فرعی", text: "هدف کوچک‌تر را بیان کنید.", example: { de: "Ich übe jeden Tag, um besser zu sprechen.", fa: "هر روز تمرین می‌کنم تا بهتر صحبت کنم." } },
        { title: "کمک به دیگران", text: "از damit برای کمک به دیگران استفاده کنید.", example: { de: "Ich helfe meinem Bruder, damit er auch Deutsch lernt.", fa: "به برادرم کمک می‌کنم تا او هم آلمانی یاد بگیرد." } }
      ],
      modelAnswer: "Ich lerne Deutsch, um in Deutschland zu studieren. Jeden Tag übe ich, um meine Aussprache zu verbessern. Ich lese deutsche Bücher, um meinen Wortschatz zu erweitern. Außerdem helfe ich meiner Freundin, damit sie auch Deutsch lernt. Wir lernen zusammen, damit es mehr Spaß macht. Mein Ziel ist es, nächstes Jahr die B1-Prüfung zu bestehen."
    }
  ],

  listening: [
    {
      title: "گوش دادن: بیان هدف",
      instruction: "به جملات زیر گوش دهید و تکرار کنید.",
      sentences: [
        { de: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", fa: "آلمانی یاد می‌گیرم تا در آلمان کار کنم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich lerne Deutsch, um in Deutschland zu arbeiten" },
        { de: "Er hilft ihr, damit sie die Prüfung besteht.", fa: "به او کمک می‌کند تا در امتحان قبول شود.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Er hilft ihr, damit sie die Prüfung besteht" },
        { de: "Wir sparen Geld, um ein Auto zu kaufen.", fa: "پول پس‌انداز می‌کنیم تا ماشین بخریم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Wir sparen Geld, um ein Auto zu kaufen" },
        { de: "Sie spricht langsam, damit alle verstehen.", fa: "آرام صحبت می‌کند تا همه بفهمند.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Sie spricht langsam, damit alle verstehen" },
        { de: "Mein Ziel ist es, gesund zu bleiben.", fa: "هدف من این است که سالم بمانم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Mein Ziel ist es, gesund zu bleiben" }
      ]
    }
  ],

  speaking: [
    {
      title: "تمرین گفتاری: چرا آلمانی یاد می‌گیرم؟",
      pattern: "Ich lerne Deutsch, um... Außerdem lerne ich, damit...",
      exercise: "درباره دلیل یادگیری آلمانی صحبت کنید. از um...zu و damit استفاده کنید و حداقل ۲ دقیقه صحبت کنید."
    }
  ],

  cultureTip: "در فرهنگ آلمانی، هدفمندی (Zielstrebigkeit) بسیار ارزشمند است. آلمانی‌ها دوست دارند بدانند هر کاری برای چه هدفی انجام می‌شود. وقتی در مصاحبه شغلی می‌پرسند «Warum möchten Sie bei uns arbeiten؟» انتظار یک پاسخ هدفمند دارند. استفاده از um...zu در پاسخ نشان می‌دهد که شما فردی هدفمند و منظم هستید.",

  examData: {
    questions: [
      { question: "من آلمانی می‌خوانم تا در آلمان کار کنم:", options: ["Ich lerne Deutsch, um in Deutschland zu arbeiten.", "Ich lerne Deutsch, damit in Deutschland zu arbeiten.", "Ich lerne Deutsch, um in Deutschland arbeite.", "Ich lerne Deutsch, zu arbeiten in Deutschland."], answer: 0 },
      { question: "کدام ساختار برای فاعل‌های متفاوت استفاده می‌شود؟", options: ["um...zu", "damit", "zu", "für"], answer: 1 },
      { question: "او آرام صحبت می‌کند تا همه او را بفهمند:", options: ["Er spricht langsam, um alle ihn verstehen.", "Er spricht langsam, damit alle ihn verstehen.", "Er spricht langsam, um alle ihn zu verstehen.", "Er spricht langsam, damit alle ihn zu verstehen."], answer: 1 },
      { question: "کدام جمله صحیح است؟", options: ["Ich helfe dir, um du fertig wirst.", "Ich helfe dir, damit du fertig wirst.", "Ich helfe dir, um du zu fertig wirst.", "Ich helfe dir, damit du zu fertig wirst."], answer: 1 },
      { question: "هدف به آلمانی:", options: ["der Zweck", "das Ziel", "der Grund", "die Ursache"], answer: 1 },
      { question: "من زود می‌خوابم تا فردا سرحال باشم:", options: ["Ich gehe früh schlafen, um morgen fit zu sein.", "Ich gehe früh schlafen, damit morgen fit zu sein.", "Ich gehe früh schlafen, um morgen fit sein.", "Ich gehe früh schlafen, zu morgen fit sein."], answer: 0 },
      { question: "پس‌انداز کردن:", options: ["sparen", "sparen um", "für sparen", "zu sparen"], answer: 0 },
      { question: "کدام جمله فاعل‌های متفاوت دارد؟", options: ["Ich lerne, um zu bestehen.", "Ich helfe dir, damit du bestehst.", "Er arbeitet, um Geld zu verdienen.", "Sie übt, um besser zu spielen."], answer: 1 },
      { question: "تمرین کردن به آلمانی:", options: ["spielen", "üben", "machen", "tun"], answer: 1 },
      { question: "آینده نزدیک:", options: ["Ich lerne, um zu bestehen.", "Ich lerne, damit ich bestehe.", "Ich lerne, zu bestehen.", "Ich lerne, damit zu bestehen."], answer: 0 }
    ]
  }
};
