export const day12Data = {
  title: "روز ۱۲: اعضای خانواده + مشاغل",
  objective: "در پایان این روز، شما می‌توانید اعضای خانواده را نام ببرید، شغل‌ها را توصیف کنید و جملاتی درباره خانواده خود بسازید.",
  level: "A1",
  grammarData: {
    subtitle: "خانواده و مشاغل",
    content: [
      {
        type: "text",
        title: "اعضای خانواده",
        text: "در آلمانی اعضای خانواده این‌گونه هستند: der Vater (پدر)، die Mutter (مادر)، der Bruder (برادر)، die Schwester (خواهر)، der Sohn (پسر)، die Tochter (دختر)، der Opa / der Großvater (پدربزرگ)، die Oma / die Großmutter (مادربزرگ)، der Onkel (عمو/دائی)، die Tante (عمه/خاله)."
      },
      {
        type: "table",
        title: "اعضای خانواده",
        rows: [
          { de: "der Vater [ˈfaːtɐ̯]", fa: "پدر" },
          { de: "die Mutter [ˈmʊtɐ̯]", fa: "مادر" },
          { de: "der Bruder [ˈbʁuːdɐ̯]", fa: "برادر" },
          { de: "die Schwester [ˈʃvɛstɐ̯]", fa: "خواهر" },
          { de: "der Sohn [zoːn]", fa: "پسر" },
          { de: "die Tochter [ˈtɔxtɐ̯]", fa: "دختر" },
          { de: "der Opa / der Großvater", fa: "پدربزرگ" },
          { de: "die Oma / die Großmutter", fa: "مادربزرگ" },
          { de: "der Onkel [ˈɔŋkəl]", fa: "عمو/دائی" },
          { de: "die Tante [ˈtantə]", fa: "عمه/خاله" },
          { de: "der Cousin [kuˈzɛ̃]", fa: "پسر عمو/دائی" },
          { de: "die Cousine [kuˈziːnə]", fa: "دختر عمو/خاله" },
          { de: "der Neffe [ˈnɛfə]", fa: "برادرزاده" },
          { de: "die Nichte [ˈnɪçtə]", fa: "خواهرزاده" },
          { de: "der Enkel [ˈɛŋkəl]", fa: "نوه (پسر)" },
          { de: "die Enkelin [ˈɛŋkəlɪn]", fa: "نوه (دختر)" }
        ]
      },
      {
        type: "text",
        title: "استفاده از haben برای توصیف خانواده",
        text: "برای بیان داشتن اعضای خانواده از فعل haben استفاده می‌کنیم. توجه کنید که بعد از haben باید از حرف تعریف نا опредеف (Akkusativ) استفاده شود: Ich habe einen Bruder (یک برادر دارم)، Ich habe eine Schwester (یک خواهر دارم)، Ich habe zwei Kinder (دو بچه دارم)."
      },
      {
        type: "examples",
        title: "مثال‌های توصیف خانواده",
        items: [
          { de: "Ich habe einen Bruder.", fa: "یک برادر دارم." },
          { de: "Ich habe zwei Schwestern.", fa: "دو خواهر دارم." },
          { de: "Mein Bruder ist älter als ich.", fa: "برادرم از من بزرگ‌تر است." },
          { de: "Meine Eltern wohnen in Berlin.", fa: "والدینم در برلین زندگی می‌کنند." },
          { de: "Ich habe keine Geschwister.", fa: "من خواهر و برادر ندارم." }
        ]
      },
      {
        type: "text",
        title: "مشاغل",
        text: "برای بیان شغل از فعل sein استفاده می‌کنیم: Ich bin Student (دانشجو هستم)، Sie ist Ärztin (پزشک است). توجه کنید که معمولاً بدون حرف تعریف می‌آید: Ich bin Lehrer (معلم هستم)، نه Ich bin der Lehrer."
      },
      {
        type: "table",
        title: "مشاغل",
        rows: [
          { de: "der Lehrer / die Lehrerin", fa: "معلم" },
          { de: "der Arzt / die Ärztin", fa: "پزشک" },
          { de: "der Ingenieur / die Ingenieurin", fa: "مهندس" },
          { de: "der Student / die Studentin", fa: "دانشجو" },
          { de: "der Koch / die Köchin", fa: "آشپز" },
          { de: "der Kellner / die Kellnerin", fa: "پیشخدمت" },
          { de: "der Polizist / die Polizistin", fa: "پلیس" },
          { de: "der Fahrer / die Fahrerin", fa: "راننده" },
          { de: "der Verkäufer / die Verkäuferin", fa: "فروشنده" },
          { de: "der Kaufmann / die Kauffrau", fa: "بازرگان" },
          { de: "der Schriftsteller / die Schriftstellerin", fa: "نویسنده" },
          { de: "der Musiker / die Musikerin", fa: "موسیقی‌دان" },
          { de: "der Anwalt / die Anwältin", fa: "وکیل" },
          { de: "der Lehrer / die Lehrerin", fa: "معلم" },
          { de: "der Bauer / die Bäuerin", fa: "کشاورز" }
        ]
      },
      {
        type: "alert",
        title: "توجه: حرف تعریف در مشاغل",
        text: "وقتی فقط شغل را بیان می‌کنیم، نیازی به حرف تعریف نیست: Ich bin Arzt (پزشک هستم). اما وقتی تعریف می‌کنیم یا صفت می‌آوریم، باید از حرف تعریف استفاده شود: Ich bin ein guter Arzt (پزشک خوبی هستم). Ich bin der neue Lehrer (معلم جدید هستم)."
      },
      {
        type: "examples",
        title: "مثال‌های مشاغل",
        items: [
          { de: "Mein Vater ist Ingenieur.", fa: "پدرم مهندس است." },
          { de: "Meine Mutter ist Ärztin.", fa: "مادرم پزشک است." },
          { de: "Mein Bruder arbeitet als Koch.", fa: "برادرم به عنوان آشپز کار می‌کند." },
          { de: "Ich möchte Anwalt werden.", fa: "می‌خواهم وکیل شوم." },
          { de: "Meine Schwester studiert Medizin.", fa: "خواهرم پزشکی می‌خواند." }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین: خانواده و مشاغل",
        instruction: "جملات را تکمیل کنید.",
        blanks: [
          { sentence: "Mein ___ heißt Hans.", answer: "Vater", hint: "پدر" },
          { sentence: "Ich ___ zwei Brüder.", answer: "habe", hint: "دارم" },
          { sentence: "Meine Mutter ist ___.", answer: "Lehrerin", hint: "معلم زن" },
          { sentence: "Mein Bruder ist ___.", answer: "Student", hint: "دانشجو" },
          { sentence: "Er arbeitet als ___.", answer: "Ingenieur", hint: "مهندس" },
          { sentence: "Meine ___ ist sehr nett.", answer: "Schwester", hint: "خواهر" },
          { sentence: "___ Eltern sind in Tehran.", answer: "Meine", hint: "والدینم" },
          { sentence: "Sie ist ___ Ärztin.", answer: "eine", hint: "یک" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: خانواده و مشاغل",
        questions: [
          {
            question: "«پدربزرگ» چگونه گفته می‌شود؟",
            questionDe: "Wie heißt \"Großvater\" auf Deutsch?",
            options: [
              { text: "der Opa / der Großvater", isCorrect: true },
              { text: "der Onkel", isCorrect: false },
              { text: "der Vater", isCorrect: false },
              { text: "der Urgroßvater", isCorrect: false }
            ],
            explanation: "Opa یا Großvater هر دو قابل استفاده است."
          },
          {
            question: "کدام جمله صحیح است؟",
            questionDe: "Welcher Satz ist korrekt?",
            options: [
              { text: "Ich bin Arzt.", isCorrect: true },
              { text: "Ich bin der Arzt.", isCorrect: false },
              { text: "Ich bin ein Arzt.", isCorrect: false },
              { text: "Ich bin die Arzt.", isCorrect: false }
            ],
            explanation: "برای بیان شغل بدون تعریف، نیازی به حرف تعریف نیست."
          },
          {
            question: "«من دو خواهر دارم» چگونه گفته می‌شود؟",
            questionDe: "Wie sagt man \"I have two sisters\"?",
            options: [
              { text: "Ich habe zwei Schwestern.", isCorrect: true },
              { text: "Ich bin zwei Schwestern.", isCorrect: false },
              { text: "Ich habe zwei Schwester.", isCorrect: false },
              { text: "Ich habe zwei Schwester.", isCorrect: false }
            ],
            explanation: "Schwester جمع: Schwestern"
          },
          {
            question: "«خواهرزاده» چگونه گفته می‌شود؟",
            questionDe: "Wie heißt \"Nichte\" auf Deutsch?",
            options: [
              { text: "die Nichte", isCorrect: true },
              { text: "die Nichte", isCorrect: false },
              { text: "die Schwester", isCorrect: false },
              { text: "die Cousine", isCorrect: false }
            ],
            explanation: "Nichte (خواهرزاده) با Nichte (دختر عمو) تفاوت دارد."
          },
          {
            question: "«پزشک زن» چگونه گفته می‌شود؟",
            questionDe: "Wie heißt \"Ärztin\"?",
            options: [
              { text: "die Ärztin", isCorrect: true },
              { text: "der Ärztin", isCorrect: false },
              { text: "die Arzt", isCorrect: false },
              { text: "das Ärztin", isCorrect: false }
            ],
            explanation: "فرم مؤنث با -in ساخته می‌شود: Arzt → Ärztin"
          }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "اعضای خانواده",
        words: [
          { de: "die Familie", fa: "خانواده", article: "die", plural: "die Familien", ipa: "[faˈmiːliə]", examples: [{ de: "Meine Familie ist groß.", fa: "خانواده من بزرگ است." }] },
          { de: "der Vater", fa: "پدر", article: "der", plural: "die Väter", ipa: "[ˈfaːtɐ̯]", examples: [{ de: "Mein Vater arbeitet viel.", fa: "پدرم زیاد کار می‌کند." }] },
          { de: "die Mutter", fa: "مادر", article: "die", plural: "die Mütter", ipa: "[ˈmʊtɐ̯]", examples: [{ de: "Meine Mutter kocht gut.", fa: "مادرم آشپزی خوبی دارد." }] },
          { de: "der Sohn", fa: "پسر", article: "der", plural: "die Söhne", ipa: "[zoːn]", examples: [{ de: "Der Sohn ist sechs Jahre alt.", fa: "پسر شش ساله است." }] },
          { de: "die Tochter", fa: "دختر", article: "die", plural: "die Töchter", ipa: "[ˈtɔxtɐ̯]", examples: [{ de: "Die Tochter geht zur Schule.", fa: "دختر به مدرسه می‌رود." }] },
          { de: "der Bruder", fa: "برادر", article: "der", plural: "die Brüder", ipa: "[ˈbʁuːdɐ̯]", examples: [{ de: "Mein Bruder spielt Fußball.", fa: "برادرم فوتبال بازی می‌کند." }] },
          { de: "die Schwester", fa: "خواهر", article: "die", plural: "die Schwestern", ipa: "[ˈʃvɛstɐ̯]", examples: [{ de: "Meine Schwester ist jünger.", fa: "خواهرم کوچک‌تر است." }] },
          { de: "der Großvater", fa: "پدربزرگ", article: "der", plural: "die Großväter", ipa: "[ˈɡʁoːsfaːtɐ̯]", examples: [{ de: "Mein Großvater ist 78 Jahre alt.", fa: "پدربزرگم ۷۸ ساله است." }] },
          { de: "die Großmutter", fa: "مادربزرگ", article: "die", plural: "die Großmütter", ipa: "[ˈɡʁoːsmʊtɐ̯]", examples: [{ de: "Meine Großmutter wohnt in München.", fa: "مادربزرگم در مونیخ زندگی می‌کند." }] },
          { de: "die Eltern", fa: "والدین", article: "die", ipa: "[ˈɛltɐ̯n]", examples: [{ de: "Meine Eltern sind sehr nett.", fa: "والدینم بسیار مهربان هستند." }] },
          { de: "die Geschwister", fa: "خواهر و برادرها", article: "die", ipa: "[ɡəˈʃvɪstɐ̯]", examples: [{ de: "Ich habe keine Geschwister.", fa: "من خواهر و برادر ندارم." }] },
          { de: "der Ehemann", fa: "شوهر", article: "der", plural: "die Ehemänner", ipa: "[ˈeːəman]", examples: [{ de: "Ihr Ehemann ist Arzt.", fa: "شوهرش پزشک است." }] },
          { de: "die Ehefrau", fa: "همسر (زن)", article: "die", plural: "die Ehefrauen", ipa: "[ˈeːfʁaʊ]", examples: [{ de: "Seine Ehefrau ist Lehrerin.", fa: "همسرش معلم است." }] },
          { de: "der Onkel", fa: "عمو/دائی", article: "der", plural: "die Onkel", ipa: "[ˈɔŋkəl]", examples: [{ de: "Mein Onkel wohnt in Hamburg.", fa: "عمویم در هامبورگ زندگی می‌کند." }] },
          { de: "die Tante", fa: "عمه/خاله", article: "die", plural: "die Tanten", ipa: "[ˈtantə]", examples: [{ de: "Meine Tante kommt morgen.", fa: "خاله فردا می‌آید." }] }
        ]
      },
      {
        title: "مشاغل",
        words: [
          { de: "der Lehrer / die Lehrerin", fa: "معلم", article: "der/die", plural: "die Lehrer/innen", ipa: "[ˈleːʁɐ̯]/[ˈleːʁəʁɪn]", examples: [{ de: "Er ist Lehrer an einer Schule.", fa: "او معلم مدرسه است." }] },
          { de: "der Arzt / die Ärztin", fa: "پزشک", article: "der/die", plural: "die Ärzte/innen", ipa: "[aʁtst]/[ˈɛʁtstɪn]", examples: [{ de: "Die Ärztin arbeitet im Krankenhaus.", fa: "پزشک زن در بیمارستان کار می‌کند." }] },
          { de: "der Ingenieur / die Ingenieurin", fa: "مهندس", article: "der/die", plural: "die Ingenieure/innen", ipa: "[ɪnʒeˈnøːɐ̯]/[ɪnʒeˈnøːʁɪn]", examples: [{ de: "Mein Vater ist Ingenieur.", fa: "پدرم مهندس است." }] },
          { de: "der Student / die Studentin", fa: "دانشجو", article: "der/die", plural: "die Studenten/innen", ipa: "[ʃtuˈdɛnt]/[ʃtuˈdɛntɪn]", examples: [{ de: "Ich bin Student an der Universität.", fa: "من دانشجوی دانشگاه هستم." }] },
          { de: "der Koch / die Köchin", fa: "آشپز", article: "der/die", plural: "die Köche/innen", ipa: "[kɔx]/[ˈkœçɪn]", examples: [{ de: "Der Koch bereitet das Essen zu.", fa: "آشپز غذا را آماده می‌کند." }] },
          { de: "der Kellner / die Kellnerin", fa: "پیشخدمت", article: "der/die", plural: "die Kellner/innen", ipa: "[ˈkɛlnɐ̯]/[ˈkɛlnəʁɪn]", examples: [{ de: "Die Kellnerin bringt den Kaffee.", fa: "پیشخدمت قهوه را می‌آورد." }] },
          { de: "der Polizist / die Polizistin", fa: "پلیس", article: "der/die", plural: "die Polizisten/innen", ipa: "[poliˈtsɪst]/[poliˈtsɪstɪn]", examples: [{ de: "Der Polizist hilft den Menschen.", fa: "پلیس به مردم کمک می‌کند." }] },
          { de: "der Verkäufer / die Verkäuferin", fa: "فروشنده", article: "der/die", plural: "die Verkäufer/innen", ipa: "[fɛɐ̯ˈkɔʏfɐ̯]/[fɛɐ̯ˈkɔʏfəʁɪn]", examples: [{ de: "Die Verkäuferin ist freundlich.", fa: "فروشنده مهربان است." }] },
          { de: "der Anwalt / die Anwältin", fa: "وکیل", article: "der/die", plural: "die Anwälte/innen", ipa: "[ˈanvalt]/[ˈanvɛltɪn]", examples: [{ de: "Er ist Anwalt.", fa: "او وکیل است." }] },
          { de: "der Schriftsteller / die Schriftstellerin", fa: "نویسنده", article: "der/die", plural: "die Schriftsteller/innen", ipa: "[ˈʃʁɪftʃtɛlɐ̯]/[ˈʃʁɪftʃtɛləʁɪn]", examples: [{ de: "Goethe war ein berühmter Schriftsteller.", fa: "گوته نویسنده مشهوری بود." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Das ist meine Familie. Mein Vater heißt Thomas und er ist Ingenieur. Meine Mutter heißt Maria und sie ist Lehrerin. Ich habe einen Bruder. Er heißt Lukas und er ist Student. Meine Schwester heißt Anna. Sie ist Ärztin. Mein Großvater wohnt in München. Er ist 78 Jahre alt. Meine Großmutter ist 75 Jahre alt. Sie kocht sehr gut. Meine Familie ist mir sehr wichtig.",
      translation: "این خانواده من است. پدرم توماس نام دارد و او مهندس است. مادرم ماریا نام دارد و او معلم است. من یک برادر دارم. او لوکاس نام دارد و دانشجو است. خواهرم آنا نام دارد. او پزشک است. پدربزرگم در مونیخ زندگی می‌کند. او ۷۸ ساله است. مادربزرگم ۷۵ ساله است. او آشپزی بسیار خوبی دارد. خانواده برایم خیلی مهم است.",
      questions: [
        { question: "پدر شغل چه دارد؟", answer: "مهندس" },
        { question: "خواهر چه شغلی دارد؟", answer: "پزشک" },
        { question: "پدربزرگ چند ساله است؟", answer: "۷۸ ساله" }
      ]
    },
    {
      text: "Mein Freund Max stellt seine Familie vor. Er sagt: Das ist mein Vater, er heißt Hans und arbeitet als Arzt. Meine Mutter heißt Susanne, sie ist Lehrerin. Ich habe zwei Brüder. Der ältere Bruder heißt Peter und er ist Student. Der jüngere Bruder heißt Thomas und er ist noch in der Schule. Ich habe auch eine Schwester, sie heißt Lisa und ist 16 Jahre alt. Wir wohnen alle zusammen in einem großen Haus.",
      translation: "دوستم ماکس خانواده‌اش را معرفی می‌کند. او می‌گوید: این پدرم است، نامش هانس است و به عنوان پزشک کار می‌کند. مادرم سوزان نام دارد، او معلم است. من دو برادر دارم. برادر بزرگ‌ترم پیتر نام دارد و دانشجو است. برادر کوچک‌ترم توماس نام دارد و هنوز در مدرسه است. من یک خواهر هم دارم، او لیزا نام دارد و ۱۶ ساله است. همه ما با هم در خانه بزرگی زندگی می‌کنیم.",
      questions: [
        { question: "پدر ماکس چه کاری دارد؟", answer: "پزشک" },
        { question: "ماکس چند برادر دارد؟", answer: "دو برادر" },
        { question: "لیزا چند ساله است؟", answer: "۱۶ ساله" }
      ]
    }
  ],
  writing: [
    {
      title: "معرفی خانواده",
      prompt: "خانواده خود را به صورت کوتاه معرفی کنید: نام، سن، شغل و رابطه.",
      steps: [
        { title: "قدم اول: معرفی کلی", text: "با معرفی کلی خانواده شروع کنید.", example: { de: "Das ist meine Familie.", fa: "این خانواده من است." } },
        { title: "قدم دوم: والدین", text: "نام و شغل والدین را بگویید.", example: { de: "Mein Vater heißt Reza und er ist Ingenieur.", fa: "پدرم رضا نام دارد و مهندس است." } },
        { title: "قدم سوم: خواهر و برادر", text: "تعداد و مشخصات خواهر و برادرها را بنویسید.", example: { de: "Ich habe einen Bruder und eine Schwester.", fa: "من یک برادر و یک خواهر دارم." } }
      ],
      modelAnswer: "Das ist meine Familie. Mein Vater heißt Reza. Er ist 50 Jahre alt und arbeitet als Ingenieur. Meine Mutter heißt Fatima. Sie ist 48 Jahre alt und ist Lehrerin. Ich habe einen Bruder. Er heißt Ali und ist 22 Jahre alt. Er studiert Medizin. Meine Schwester heißt Sara. Sie ist 18 Jahre alt und macht Abitur. Mein Großvater wohnt in Tehran. Er ist 75 Jahre alt. Meine Familie ist mir sehr wichtig."
    }
  ],
  listening: [
    {
      title: "گوش دادن به معرفی خانواده",
      instruction: "به معرفی خانواده گوش دهید و نام و شغل هر فرد را بنویسید.",
      sentences: [
        { de: "Mein Vater heißt Hans und ist Arzt.", fa: "پدرم هانس نام دارد و پزشک است.", tts: "Mein Vater heißt Hans und ist Arzt." },
        { de: "Meine Mutter ist Lehrerin.", fa: "مادرم معلم است.", tts: "Meine Mutter ist Lehrerin." },
        { de: "Ich habe zwei Schwestern.", fa: "من دو خواهر دارم.", tts: "Ich habe zwei Schwestern." },
        { de: "Mein Bruder ist Student.", fa: "برادرم دانشجو است.", tts: "Mein Bruder ist Student." }
      ]
    }
  ],
  speaking: [
    {
      title: "معرفی خانواده",
      pattern: "Das ist mein/meine [ Familiemitglied ]. Er/Sie heißt [Name]. Er/Sie ist [Alter] Jahre alt und ist [Beruf].",
      exercise: "حداقل یک پاراگراف درباره خانواده خود بگویید."
    }
  ],
  cultureTip: "در آلمان، خانواده‌ها اهمیت زیادی دارند. معمولاً بزرگ‌ترها (پدربزرگ و مادربزرگ) در تعطیلات یا آخر هفته ملاقات می‌کنند. عنوان‌ها در خانواده مهم هستند: Opa برای پدربزرگ، Oma برای مادربزرگ. بسیاری از آلمانی‌ها به صورت هسته‌ای زندگی می‌کنند ولی رابطه با خانواده گسترده حفظ می‌شود.",
  examData: {
    questions: [
      { question: "«خواهر» چگونه گفته می‌شود؟", options: ["die Schwester", "der Bruder", "die Tochter", "die Mutter"], answer: 0 },
      { question: "«من یک برادر دارم» چگونه گفته می‌شود؟", options: ["Ich habe einen Bruder.", "Ich bin ein Bruder.", "Ich habe Bruder.", "Ich habe ein Bruder."], answer: 0 },
      { question: "جمع «der Bruder» چیست؟", options: ["die Brüder", "die Bruders", "die Bruder", "die Bruderen"], answer: 0 },
      { question: "«والدین» چگونه گفته می‌شود؟", options: ["die Eltern", "die Kinder", "die Geschwister", "die Großeltern"], answer: 0 },
      { question: "«پزشک زن» چگونه گفته می‌شود؟", options: ["die Ärztin", "die Arzt", "die Ärzte", "der Arzt"], answer: 0 },
      { question: "کدام جمله صحیح است؟", options: ["Ich bin Student.", "Ich bin der Student.", "Ich bin ein Student.", "Student bin ich."], answer: 0 },
      { question: "«پدربزرگ» چگونه گفته می‌شود؟", options: ["der Opa / der Großvater", "der Vater", "der Onkel", "der Bruder"], answer: 0 },
      { question: "فعل «برای داشتن» چیست؟", options: ["haben", "sein", "werden", "haben"], answer: 0 },
      { question: "«عمو» چگونه گفته می‌شود؟", options: ["der Onkel", "der Oheim", "der Vater", "der Mann"], answer: 0 },
      { question: "کدام برای «عمه» استفاده می‌شود؟", options: ["die Tante", "die Kusine", "die Mutter", "die Schwester"], answer: 0 }
    ]
  }
};