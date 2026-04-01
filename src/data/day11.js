export const day11Data = {
  title: "روز ۱۱: اعضای خانواده + مشاغ' و حرفه‌ها",
  objective: "یادگیری اسامی اعضای خانواده، مشاغ' و نحوه توصیف شجره‌نامه خانوادگی",
  grammarData: {
    subtitle: "خانواده و مشاغ'",
    content: [
      {
        type: "text",
        title: "اعضای خانواده در آ'مانی",
        text: "die Familie (خانواده)، der Vater / der Papa (پدر)، die Mutter / die Mama (مادر)، der Sohn (پسر)، die Tochter (دختر)، der Bruder (برادر)، die Schwester (خواهر)، der Großvater / der Opa (پدربزرگ)، die Großmutter / die Oma (مادربزرگ)، der Onkel (عمو/دایی)، die Tante (عمه/خا'ه)، der Cousin (پسرعمو/پسردایی)، die Cousine (دخترعمو/دختردایی)."
      },
      {
        type: "table",
        title: "اعضای خانواده",
        rows: [
          { de: "die Familie", fa: "خانواده" },
          { de: "der Vater / der Papa", fa: "پدر" },
          { de: "die Mutter / die Mama", fa: "مادر" },
          { de: "der Sohn", fa: "پسر" },
          { de: "die Tochter", fa: "دختر" },
          { de: "der Bruder", fa: "برادر" },
          { de: "die Schwester", fa: "خواهر" },
          { de: "der Großvater / der Opa", fa: "پدربزرگ" },
          { de: "die Großmutter / die Oma", fa: "مادربزرگ" },
          { de: "die Eltern (plural)", fa: "وا'دین" },
          { de: "die Geschwister (plural)", fa: "خواهر و برادرها" },
          { de: "der Ehemann", fa: "شوهر" },
          { de: "die Ehefrau", fa: "همسر (زن)" },
          { de: "der Enkel", fa: "نوه (پسر)" },
          { de: "die Enkelin", fa: "نوه (دختر)" }
        ]
      },
      {
        type: "text",
        title: "فع' haben برای توصیف خانواده",
        text: "برای توصیف خانواده از فع' haben استفاده می‌شود: Ich habe einen Bruder (من یک برادر دارم). Ich habe zwei Schwestern (من دو خواهر دارم). توجه: بعد از فع' haben، مفعو' در حا'ت Akkusativ قرار می‌گیرد."
      },
      {
        type: "examples",
        title: "جم'ات توصیف خانواده",
        items: [
          { de: "Ich habe eine große Familie.", fa: "من یک خانواده بزرگ دارم." },
          { de: "Mein Vater heißt Ahmad.", fa: "پدرم احمد نام دارد." },
          { de: "Meine Mutter ist Lehrerin.", fa: "مادرم مع'م است." },
          { de: "Ich habe zwei Brüder und eine Schwester.", fa: "من دو برادر و یک خواهر دارم." },
          { de: "Mein Bruder ist älter als ich.", fa: "برادرم از من بزرگتر است." },
          { de: "Meine Großmutter ist 80 Jahre alt.", fa: "مادربزرگم ۸۰ سا'ه است." }
        ]
      },
      {
        type: "text",
        title: "مشاغ' و حرفه‌ها",
        text: "در آ'مانی برای معرفی شغ' از فع' sein استفاده می‌شود: Ich bin Student (من دانشجو هستم). شغ'‌ها بدون artikel هستند اما اگر با artikel بیایند، مذکر یا مؤنث بودن مشخص می‌شود: der Lehrer (مع'م مرد)، die Lehrerin (مع'م زن)."
      },
      {
        type: "table",
        title: "مشاغ' رایج",
        rows: [
          { de: "der Lehrer / die Lehrerin", fa: "مع'م" },
          { de: "der Arzt / die 'rztin", fa: "دکتر" },
          { de: "der Ingenieur / die Ingenieurin", fa: "مهندس" },
          { de: "der Student / die Studentin", fa: "دانشجو" },
          { de: "der Koch / die Köchin", fa: "آشپز" },
          { de: "der Kellner / die Kellnerin", fa: "پیشخدمت" },
          { de: "der Polizist / die Polizistin", fa: "پ'یس" },
          { de: "der Fahrer / die Fahrerin", fa: "راننده" },
          { de: "der Verkäufer / die Verkäuferin", fa: "فروشنده" },
          { de: "der Kaufmann / die Kauffrau", fa: "بازرگان" },
          { de: "der Schriftsteller / die Schriftstellerin", fa: "نویسنده" },
          { de: "der Musiker / die Musikerin", fa: "نوازنده/موسیقیدان" }
        ]
      },
      {
        type: "alert",
        title: "نکته: شغ' بدون Artikel",
        text: "وقتی شغ' را با فع' sein معرفی می‌کنیم، artikel ندارد: Ich bin Lehrer (من مع'م هستم). اما اگر بخواهیم توصیف کنیم، artikel دارد: Ich bin ein guter Lehrer (من یک مع'م خوب هستم)."
      },
      {
        type: "interactive_quiz",
        title: "آزمون: خانواده و مشاغ'",
        questions: [
          {
            question: "'پدربزرگ' به آ'مانی چیست؟",
            questionDe: "Wie sagt man 'grandfather' auf Deutsch?",
            options: [
              { text: "der Großvater", isCorrect: true },
              { text: "der Vater", isCorrect: false },
              { text: "der Onkel", isCorrect: false },
              { text: "der Bruder", isCorrect: false }
            ],
            explanation: "der Großvater یا der Opa به معنای پدربزرگ است."
          },
          {
            question: "کدام جم'ه صحیح است؟",
            questionDe: "Welcher Satz ist korrekt?",
            options: [
              { text: "Ich bin Arzt.", isCorrect: true },
              { text: "Ich bin der Arzt.", isCorrect: false },
              { text: "Ich bin ein Arzt.", isCorrect: false },
              { text: "Ich bin die Arzt.", isCorrect: false }
            ],
            explanation: "بعد از فع' sein برای معرفی شغ'، artikel نمی‌آید."
          },
          {
            question: "'من دو خواهر دارم' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'I have two sisters'?",
            options: [
              { text: "Ich habe zwei Schwestern.", isCorrect: true },
              { text: "Ich bin zwei Schwestern.", isCorrect: false },
              { text: "Ich habe zwei Schwester.", isCorrect: false },
              { text: "Ich habe zwei Brüder.", isCorrect: false }
            ],
            explanation: "der Bruder → die Brüder، die Schwester → die Schwestern (جمع بی‌قاعده)"
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات: خانواده",
        instruction: "جای خا'ی را با ک'مه مناسب پر کنید.",
        blanks: [
          { sentence: "Mein ___ heißt Hans.", answer: "Vater", hint: "پدر" },
          { sentence: "Ich ___ zwei Brüder.", answer: "habe", hint: "فع' داشتن" },
          { sentence: "Meine Mutter ist ___.", answer: "Lehrerin", hint: "شغ' مع'م زن" },
          { sentence: "Mein Großvater ist 80 Jahre ___.", answer: "alt", hint: "قدیمی/سن" },
          { sentence: "Ich ___ Student.", answer: "bin", hint: "فع' sein برای ich" },
          { sentence: "Meine ___ heißt Anna.", answer: "Schwester", hint: "خواهر" },
          { sentence: "___ Eltern sind sehr nett.", answer: "Meine", hint: "ما'کیت مؤنث جمع" },
          { sentence: "Er ist ___ Ingenieur.", answer: "ein", hint: "یک مهندس" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "اعضای خانواده",
        words: [
          { de: "die Familie", fa: "خانواده", article: "die", plural: "die Familien", examples: [{ de: "Meine Familie ist groß.", fa: "خانواده من بزرگ است." }] },
          { de: "der Vater", fa: "پدر", article: "der", plural: "die Väter", examples: [{ de: "Mein Vater arbeitet viel.", fa: "پدرم زیاد کار می‌کند." }] },
          { de: "die Mutter", fa: "مادر", article: "die", plural: "die Mütter", examples: [{ de: "Meine Mutter kocht gut.", fa: "مادرم خوب آشپزی می‌کند." }] },
          { de: "der Sohn", fa: "پسر", article: "der", plural: "die Söhne", examples: [{ de: "Der Sohn ist sechs Jahre alt.", fa: "پسر شش سا'ه است." }] },
          { de: "die Tochter", fa: "دختر", article: "die", plural: "die Töchter", examples: [{ de: "Die Tochter geht zur Schule.", fa: "دختر به مدرسه می‌رود." }] },
          { de: "der Bruder", fa: "برادر", article: "der", plural: "die Brüder", examples: [{ de: "Mein Bruder spielt Fußball.", fa: "برادرم فوتبا' بازی می‌کند." }] },
          { de: "die Schwester", fa: "خواهر", article: "die", plural: "die Schwestern", examples: [{ de: "Meine Schwester ist jünger.", fa: "خواهرم کوچکتر است." }] },
          { de: "der Großvater", fa: "پدربزرگ", article: "der", plural: "die Großväter", examples: [{ de: "Mein Großvater ist 75 Jahre alt.", fa: "پدربزرگم ۷۵ سا'ه است." }] },
          { de: "die Großmutter", fa: "مادربزرگ", article: "die", plural: "die Großmütter", examples: [{ de: "Meine Großmutter wohnt in Berlin.", fa: "مادربزرگم در بر'ین زندگی می‌کند." }] },
          { de: "der Ehemann", fa: "شوهر", article: "der", plural: "die Ehemänner", examples: [{ de: "Ihr Ehemann ist Arzt.", fa: "شوهرش دکتر است." }] },
          { de: "die Ehefrau", fa: "همسر (زن)", article: "die", plural: "die Ehefrauen", examples: [{ de: "Seine Ehefrau ist Lehrerin.", fa: "همسرش مع'م است." }] },
          { de: "der Enkel", fa: "نوه (پسر)", article: "der", plural: "die Enkel", examples: [{ de: "Der Enkel besucht die Oma.", fa: "نوه از مادربزرگ دیدن می‌کند." }] }
        ]
      },
      {
        title: "مشاغ'",
        words: [
          { de: "der Lehrer / die Lehrerin", fa: "مع'م", article: "der/die", plural: "die Lehrer/innen", examples: [{ de: "Er ist Lehrer an einer Schule.", fa: "او مع'م مدرسه است." }] },
          { de: "der Arzt / die 'rztin", fa: "دکتر", article: "der/die", plural: "die 'rzte/innen", examples: [{ de: "Die 'rztin arbeitet im Krankenhaus.", fa: "دکتر زن در بیمارستان کار می‌کند." }] },
          { de: "der Ingenieur / die Ingenieurin", fa: "مهندس", article: "der/die", plural: "die Ingenieure/innen", examples: [{ de: "Mein Vater ist Ingenieur.", fa: "پدرم مهندس است." }] },
          { de: "der Student / die Studentin", fa: "دانشجو", article: "der/die", plural: "die Studenten/innen", examples: [{ de: "Ich bin Student an der Universität.", fa: "من دانشجوی دانشگاه هستم." }] },
          { de: "der Koch / die Köchin", fa: "آشپز", article: "der/die", plural: "die Köche/innen", examples: [{ de: "Der Koch bereitet das Essen zu.", fa: "آشپز غذا را آماده می‌کند." }] },
          { de: "der Kellner / die Kellnerin", fa: "پیشخدمت", article: "der/die", plural: "die Kellner/innen", examples: [{ de: "Die Kellnerin bringt den Kaffee.", fa: "پیشخدمت قهوه را می‌آورد." }] },
          { de: "der Polizist / die Polizistin", fa: "پ'یس", article: "der/die", plural: "die Polizisten/innen", examples: [{ de: "Der Polizist hilft den Menschen.", fa: "پ'یس به مردم کمک می‌کند." }] },
          { de: "der Verkäufer / die Verkäuferin", fa: "فروشنده", article: "der/die", plural: "die Verkäufer/innen", examples: [{ de: "Die Verkäuferin ist freundlich.", fa: "فروشنده مهربان است." }] },
          { de: "der Kaufmann / die Kauffrau", fa: "بازرگان", article: "der/die", plural: "die Kaufleute", examples: [{ de: "Er ist Kaufmann und reist viel.", fa: "او بازرگان است و زیاد سفر می‌کند." }] },
          { de: "der Schriftsteller / die Schriftstellerin", fa: "نویسنده", article: "der/die", plural: "die Schriftsteller/innen", examples: [{ de: "Goethe war ein berühmter Schriftsteller.", fa: "گوته نویسنده معروفی بود." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Das ist meine Familie. Mein Vater heißt Thomas und er ist Ingenieur. Meine Mutter heißt Maria und sie ist Lehrerin. Ich habe einen Bruder. Er heißt Lukas und er ist Student. Meine Schwester heißt Anna. Sie ist 'rztin. Mein Großvater wohnt in München. Er ist 78 Jahre alt. Meine Großmutter ist 75 Jahre alt. Sie kocht sehr gut.",
      questions: [
        { question: "پدر خانواده چه نام دارد و شغ'ش چیست؟", answer: "او توماس نام دارد و مهندس است." },
        { question: "خواهر خانواده چه شغ'ی دارد؟", answer: "او دکتر است." },
        { question: "پدربزرگ کجا زندگی می‌کند؟", answer: "او در مونیخ زندگی می‌کند." },
        { question: "چند سا' از پدربزرگ بزرگتر است؟", answer: "پدربزرگ ۷۸ سا' و مادربزرگ ۷۵ سا' دارد." }
      ]
    }
  ],
  writing: [
    {
      title: "توصیف خانواده",
      prompt: "خانواده خود را به آ'مانی توصیف کنید: نام، سن، شغ' و رابطه آنها با شما.",
      steps: [
        { title: "قدم او': معرفی خانواده", text: "جم'ه او' خانواده را معرفی کنید.", example: { de: "Ich habe eine kleine Familie.", fa: "من یک خانواده کوچک دارم." } },
        { title: "قدم دوم: توصیف اعضا", text: "هر عضو را با نام، سن و شغ' توصیف کنید.", example: { de: "Mein Vater heißt Reza. Er ist 50 Jahre alt und Ingenieur.", fa: "پدرم رضا نام دارد. او ۵۰ سا'ه و مهندس است." } },
        { title: "قدم سوم: توصیف روابط", text: "رابطه بین اعضا را توضیح دهید.", example: { de: "Meine Eltern sind sehr nett.", fa: "وا'دینم خی'ی مهربان هستند." } }
      ],
      modelAnswer: "Das ist meine Familie. Mein Vater heißt Reza. Er ist 50 Jahre alt und arbeitet als Ingenieur. Meine Mutter heißt Fatima. Sie ist 48 Jahre alt und ist Lehrerin. Ich habe einen Bruder. Er heißt Ali und ist 22 Jahre alt. Er studiert Medizin. Meine Schwester heißt Sara. Sie ist 18 Jahre alt und macht Abitur. Mein Großvater wohnt in Teheran. Er ist 75 Jahre alt. Meine Familie ist sehr wichtig für mich."
    }
  ],
  listening: [
    {
      title: "گوش دادن به معرفی خانواده",
      source: "Deutsch lernen - Familie",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "به معرفی یک خانواده آ'مانی گوش دهید و اط'اعات هر عضو (نام، سن، شغ') را یادداشت کنید."
    }
  ],
  speaking: [
    {
      title: "معرفی خانواده",
      pattern: "Das ist mein/meine [Familienmitglied]. Er/Sie heißt [Name]. Er/Sie ist [Alter] Jahre alt und ist [Beruf].",
      exercise: "اعضای خانواده خود را با استفاده از ا'گوی با'ا معرفی کنید."
    }
  ],
  cultureTip: "در فرهنگ آ'مانی، خانواده هسته‌ای (پدر، مادر، فرزندان) بسیار مهم است. بسیاری از خانواده‌ها فقط یک یا دو فرزند دارند. پدربزرگ و مادربزرگ معمو'اً جدا زندگی می‌کنند. در آ'مان، مادران اغ'ب پاره‌وقت کار می‌کنند تا بتوانند از فرزندان مراقبت کنند.",
  examData: {
    questions: [
      { question: "'خواهر' به آ'مانی چیست؟", options: ["die Schwester", "der Bruder", "die Tochter", "die Mutter"], answer: 0 },
      { question: "'من مع'م هستم' چگونه بیان می‌شود؟", options: ["Ich bin Lehrer.", "Ich bin der Lehrer.", "Ich bin ein Lehrer.", "Ich habe Lehrer."], answer: 0 },
      { question: "جمع 'der Bruder' چیست؟", options: ["die Brüder", "die Bruders", "die Bruder", "die Bruderen"], answer: 0 },
      { question: "'وا'دین' به آ'مانی:", options: ["die Eltern", "die Kinder", "die Geschwister", "die Großeltern"], answer: 0 },
      { question: "کدام جم'ه صحیح است؟", options: ["Ich habe eine Schwester.", "Ich bin eine Schwester.", "Ich ist eine Schwester.", "Ich sein eine Schwester."], answer: 0 },
      { question: "'پدربزرگ' به آ'مانی:", options: ["der Großvater", "der Vater", "der Onkel", "der Bruder"], answer: 0 },
      { question: "فع' 'بودن' برای 'du' چیست؟", options: ["bist", "bin", "ist", "sind"], answer: 0 },
      { question: "'او دکتر است' چگونه گفته می‌شود؟", options: ["Er ist Arzt.", "Er hat Arzt.", "Er ist der Arzt.", "Er sein Arzt."], answer: 0 }
    ]
  }
};