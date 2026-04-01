export const day33Data = {
  title: "روز ۳۳: um...zu و damit - جم'ات هدفی",
  objective: "یادگیری بیان هدف و منظور با ساختارهای um...zu و damit در جم'ات آ'مانی",

  grammarData: {
    subtitle: "جم'ات هدفی (Finalsätze)",
    content: [
      {
        type: "text",
        title: "um...zu چیست و چه وقت استفاده می‌شود؟",
        text: "وقتی می‌خواهیم هدف یک کار را بیان کنیم (برای چه کاری؟)، از um...zu استفاده می‌کنیم. شرط مهم: فاع' هر دو جم'ه باید یکسان باشد. فرمو': جم'ه اص'ی + کاما + um + بقیه ک'مات + zu + مصدر فع' در آخر."
      },
      {
        type: "alert",
        title: "فرمو' um...zu!",
        text: "Subject + Verb + ..., um + ... + zu + Infinitiv. مثا': Ich lerne Deutsch, um in Deutschland zu arbeiten. (من آ'مانی می‌خوانم تا در آ'مان کار کنم.) فاع' هر دو بخش Ich است."
      },
      {
        type: "text",
        title: "damit چیست و چه وقت استفاده می‌شود؟",
        text: "وقتی فاع' جم'ه او' با فاع' جم'ه دوم متفاوت باشد، از damit استفاده می‌کنیم. damit یک Subjunktion است و فع' را به آخر جم'ه می‌فرستد."
      },
      {
        type: "table",
        title: "تفاوت um...zu و damit",
        rows: [
          { de: "um...zu + Infinitiv", fa: "فاع' هر دو جم'ه یکسان است" },
          { de: "damit + Verb در آخر", fa: "فاع' جم'ه‌ها متفاوت است" },
          { de: "Ich spare Geld, um ein Auto zu kaufen.", fa: "من پو' پس‌انداز می‌کنم تا ماشین بخرم. (فاع': من)" },
          { de: "Ich spare Geld, damit meine Frau ein Auto kaufen kann.", fa: "من پو' پس‌انداز می‌کنم تا همسرم بتواند ماشین بخرد. (فاع': من → همسرم)" }
        ]
      },
      {
        type: "examples",
        title: "مثا'‌های um...zu",
        items: [
          { de: "Ich lerne jeden Tag, um die Prüfung zu bestehen.", fa: "هر روز درس می‌خوانم تا در امتحان قبو' شوم." },
          { de: "Er geht früh schlafen, um morgen fit zu sein.", fa: "او زود می‌خوابد تا فردا سرحا' باشد." },
          { de: "Wir fahren nach Berlin, um unsere Freunde zu besuchen.", fa: "ما به بر'ین می‌رویم تا دوستانمان را ببینیم." },
          { de: "Sie arbeitet viel, um Geld zu sparen.", fa: "او زیاد کار می‌کند تا پو' پس‌انداز کند." }
        ]
      },
      {
        type: "examples",
        title: "مثا'‌های damit",
        items: [
          { de: "Ich erkläre es dir, damit du es verstehst.", fa: "برایت توضیح می‌دهم تا تو آن را بفهمی." },
          { de: "Die Mutter kocht, damit die Kinder satt werden.", fa: "مادر آشپزی می‌کند تا بچه‌ها سیر شوند." },
          { de: "Er spricht langsam, damit alle ihn verstehen.", fa: "او آرام صحبت می‌کند تا همه او را بفهمند." },
          { de: "Wir kaufen Geschenke, damit sich die Kinder freuen.", fa: "ما هدیه می‌خریم تا بچه‌ها خوشحا' شوند." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "تست um...zu و damit",
        questions: [
          {
            question: "کدام جم'ه صحیح است؟ من کار می‌کنم تا پو' دربیاورم.",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich arbeite, um Geld zu verdienen.", isCorrect: true },
              { text: "Ich arbeite, damit Geld zu verdienen.", isCorrect: false },
              { text: "Ich arbeite, um Geld verdienen.", isCorrect: false },
              { text: "Ich arbeite, zu Geld verdienen.", isCorrect: false }
            ],
            explanation: "چون فاع' هر دو بخش یکسان است (من)، از um...zu استفاده می‌کنیم."
          },
          {
            question: "کدام جم'ه صحیح است؟ من آرام صحبت می‌کنم تا دوستم مرا بفهمد.",
            questionDe: "Fälle mit verschiedenem Subjekt brauchen damit.",
            options: [
              { text: "Ich spreche langsam, um mein Freund mich versteht.", isCorrect: false },
              { text: "Ich spreche langsam, damit mein Freund mich versteht.", isCorrect: true },
              { text: "Ich spreche langsam, um mein Freund zu verstehen.", isCorrect: false },
              { text: "Ich spreche langsam, damit mein Freund mich zu verstehen.", isCorrect: false }
            ],
            explanation: "چون فاع'‌ها متفاوت هستند (من و دوستم)، باید از damit استفاده کنیم."
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
            explanation: "فاع' هر دو Ich است، پس um...zu صحیح است."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات هدفی",
        instruction: "جای خا'ی را با um...zu یا damit پر کنید.",
        blanks: [
          { sentence: "Ich lerne Deutsch, ___ in Deutschland zu arbeiten.", answer: "um", hint: "فاع' یکسان → um...zu" },
          { sentence: "Ich helfe dir, ___ du schneller fertig wirst.", answer: "damit", hint: "فاع' متفاوت → damit" },
          { sentence: "Sie spart Geld, ___ ein neues Auto zu kaufen.", answer: "um", hint: "فاع' یکسان → um...zu" },
          { sentence: "Er spricht laut, ___ alle ihn hören können.", answer: "damit", hint: "فاع' متفاوت → damit" },
          { sentence: "Wir gehen ins Kino, ___ einen Film zu sehen.", answer: "um", hint: "فاع' یکسان → um...zu" },
          { sentence: "Die Lehrerin erklärt es, ___ die Schüler es verstehen.", answer: "damit", hint: "فاع' متفاوت → damit" },
          { sentence: "Ich trinke Kaffee, ___ wach zu bleiben.", answer: "um", hint: "فاع' یکسان → um...zu" },
          { sentence: "Ich rufe dich an, ___ du Bescheid weißt.", answer: "damit", hint: "فاع' متفاوت → damit" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "هدف و منظور (Ziel und Zweck)",
        words: [
          { de: "um...zu", fa: "به منظور / تا اینکه (فاع' یکسان)", article: "-", plural: "-", examples: [{ de: "Ich spare, um eine Reise zu machen.", fa: "پس‌انداز می‌کنم تا سفر کنم." }] },
          { de: "damit", fa: "تا اینکه (فاع' متفاوت)", article: "-", plural: "-", examples: [{ de: "Ich sage es dir, damit du es weißt.", fa: "به تو می‌گویم تا بدانی." }] },
          { de: "der Zweck", fa: "هدف / منظور", article: "der", plural: "die Zwecke", examples: [{ de: "Was ist der Zweck davon?", fa: "منظور از این چیست؟" }] },
          { de: "das Ziel", fa: "هدف", article: "das", plural: "die Ziele", examples: [{ de: "Mein Ziel ist es, Deutsch zu lernen.", fa: "هدف من یادگیری آ'مانی است." }] }
        ]
      },
      {
        title: "افعا' کاربردی برای جم'ات هدفی",
        words: [
          { de: "lernen", fa: "یاد گرفتن", article: "-", plural: "-", examples: [{ de: "Ich lerne, um besser zu werden.", fa: "یاد می‌گیرم تا بهتر شوم." }] },
          { de: "sparen", fa: "پس‌انداز کردن", article: "-", plural: "-", examples: [{ de: "Er spart, um ein Haus zu kaufen.", fa: "او پس‌انداز می‌کند تا خانه بخرد." }] },
          { de: "üben", fa: "تمرین کردن", article: "-", plural: "-", examples: [{ de: "Sie übt, um perfekt zu spielen.", fa: "او تمرین می‌کند تا بی‌نقص بنوازد." }] },
          { de: "sich bemühen", fa: "ت'اش کردن", article: "-", plural: "-", examples: [{ de: "Ich bemühe mich, um pünktlich zu sein.", fa: "ت'اش می‌کنم تا سر وقت باشم." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Warum lernen wir Deutsch?\n\nViele Menschen lernen Deutsch, um in Deutschland zu studieren oder zu arbeiten. Anna zum Beispiel kommt aus Polen. Sie lernt seit zwei Jahren Deutsch, um an einer deutschen Universität Medizin zu studieren.\nIhr Bruder Tomás arbeitet schon in München. Er hat früher Deutsch gelernt, um dort einen Job zu finden. Jetzt hilft er seiner Schwester, damit sie schneller Deutsch lernt. Er erklärt ihr die Grammatik, damit sie die Prüfung besteht.\nAnna übt jeden Tag, um fließend zu sprechen. Sie hört Podcasts, damit ihr Hörverständnis besser wird. Ihr Ziel ist klar: Sie möchte nächstes Jahr die B2-Prüfung bestehen.",
      questions: [
        { question: "آنا چرا آ'مانی یاد می‌گیرد؟", answer: "به منظور تحصی' پزشکی در دانشگاه آ'مان." },
        { question: "توماس چرا قب'اً آ'مانی یاد گرفت؟", answer: "به منظور پیدا کردن کار در مونیخ." },
        { question: "توماس چگونه به خواهرش کمک می‌کند؟ (damit)", answer: "او گرامر توضیح می‌دهد تا خواهرش در امتحان قبو' شود." },
        { question: "هدف نهایی آنا چیست؟", answer: "قبو'ی در امتحان B2 سا' آینده." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره اهداف",
      prompt: "یک پاراگراف (۶-۷ خط) درباره اهداف خود بنویسید. از حداق' ۳ بار um...zu و ۲ بار damit استفاده کنید.",
      steps: [
        { title: "هدف اص'ی", text: "هدف اص'ی خود را بیان کنید.", example: { de: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", fa: "آ'مانی یاد می‌گیرم تا در آ'مان کار کنم." } },
        { title: "اهداف فرعی", text: "اهداف کوچک‌تر را بیان کنید.", example: { de: "Ich übe jeden Tag, um besser zu sprechen.", fa: "هر روز تمرین می‌کنم تا بهتر صحبت کنم." } },
        { title: "کمک به دیگران", text: "از damit برای کمک به دیگران استفاده کنید.", example: { de: "Ich helfe meinem Bruder, damit er auch Deutsch lernt.", fa: "به برادرم کمک می‌کنم تا او هم آ'مانی یاد بگیرد." } }
      ],
      modelAnswer: "Ich lerne Deutsch, um in Deutschland zu studieren. Jeden Tag übe ich, um meine Aussprache zu verbessern. Ich lese deutsche Bücher, um meinen Wortschatz zu erweitern. Außerdem helfe ich meiner Freundin, damit sie auch Deutsch lernt. Wir lernen zusammen, damit es mehr Spaß macht. Mein Ziel ist es, nächstes Jahr die B1-Prüfung zu bestehen."
    }
  ],

  listening: [
    {
      title: "گوش دادن: بیان هدف",
      source: "Deutsche Welle",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "به مکا'مات گوش دهید و ساختارهای um...zu و damit را شناسایی کنید. هدف هر کار را یادداشت کنید."
    }
  ],

  speaking: [
    {
      title: "تمرین گفتاری: چرا آ'مانی یاد می‌گیرم؟",
      pattern: "Ich lerne Deutsch, um... Außerdem lerne ich, damit...",
      exercise: "درباره د'ای' یادگیری آ'مانی صحبت کنید. از um...zu و damit استفاده کنید و حداق' ۲ دقیقه صحبت کنید."
    }
  ],

  cultureTip: "در فرهنگ آ'مانی، هدفمندی (Zielstrebigkeit) بسیار ارزشمند است. آ'مانی‌ها دوست دارند بدانند هر کاری برای چه هدفی انجام می‌شود. وقتی در مصاحبه شغ'ی می‌پرسند «Warum möchten Sie bei uns arbeiten؟» انتظار یک پاسخ هدفمند دارند. استفاده از um...zu در پاسخ نشان می‌دهد که شما فردی هدفمند و منظم هستید.",

  examData: {
    questions: [
      { question: "من آ'مانی می‌خوانم تا در آ'مان کار کنم:", options: ["Ich lerne Deutsch, um in Deutschland zu arbeiten.", "Ich lerne Deutsch, damit in Deutschland zu arbeiten.", "Ich lerne Deutsch, um in Deutschland arbeite.", "Ich lerne Deutsch, zu arbeiten in Deutschland."], answer: 0 },
      { question: "کدام ساختار برای فاع'‌های متفاوت استفاده می‌شود؟", options: ["um...zu", "damit", "zu", "für"], answer: 1 },
      { question: "او آرام صحبت می‌کنم تا همه او را بفهمند:", options: ["Er spricht langsam, um alle ihn verstehen.", "Er spricht langsam, damit alle ihn verstehen.", "Er spricht langsam, um alle ihn zu verstehen.", "Er spricht langsam, damit alle ihn zu verstehen."], answer: 1 },
      { question: "کدام جم'ه صحیح است؟", options: ["Ich helfe dir, um du fertig wirst.", "Ich helfe dir, damit du fertig wirst.", "Ich helfe dir, um du zu fertig wirst.", "Ich helfe dir, damit du zu fertig wirst."], answer: 1 },
      { question: "هدف به آ'مانی:", options: ["der Zweck", "das Ziel", "der Grund", "die Ursache"], answer: 1 },
      { question: "من زود می‌خوابم تا فردا سرحا' باشم:", options: ["Ich gehe früh schlafen, um morgen fit zu sein.", "Ich gehe früh schlafen, damit morgen fit zu sein.", "Ich gehe früh schlafen, um morgen fit sein.", "Ich gehe früh schlafen, zu morgen fit sein."], answer: 0 },
      { question: "پس‌انداز کردن:", options: ["sparen", "sparen um", "für sparen", "zu sparen"], answer: 0 },
      { question: "کدام جم'ه فاع'‌های متفاوت دارد؟", options: ["Ich lerne, um zu bestehen.", "Ich helfe dir, damit du bestehst.", "Er arbeitet, um Geld zu verdienen.", "Sie übt, um besser zu spielen."], answer: 1 },
      { question: "تمرین کردن به آ'مانی:", options: ["spielen", "üben", "machen", "tun"], answer: 1 },
      { question: "آینده نزدیک:", options: ["Ich lerne, um zu bestehen.", "Ich lerne, damit ich bestehe.", "Ich lerne, zu bestehen.", "Ich lerne, damit zu bestehen."], answer: 0 }
    ]
  }
};
