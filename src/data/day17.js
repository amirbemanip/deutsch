export const day17Data = {
  title: "روز ۱۷: مرور جامع A1 - آزمون آزمایشی",
  objective: "مرور کام' تمام مباحث A1 و آمادگی برای آزمون A1",
  grammarData: {
    subtitle: "مرور جامع گرامر A1",
    content: [
      {
        type: "text",
        title: "مرور Artikel و جنسیت اسم",
        text: "در آ'مانی سه جنسیت وجود دارد: مذکر (der)، مؤنث (die) و خنثی (das). قواعد ک'ی: اسامی با -ung, -heit, -keit, -schaft معمو'اً مؤنث هستند (die Zeitung). اسامی با -chen, -lein معمو'اً خنثی هستند (das Mädchen). اسامی با -er برای اشخاص معمو'اً مذکر هستند (der Lehrer)."
      },
      {
        type: "table",
        title: "مرور Artikel",
        rows: [
          { de: "der (مذکر)", fa: "der Mann, der Tisch, der Apfel" },
          { de: "die (مؤنث)", fa: "die Frau, die Lampe, die Banane" },
          { de: "das (خنثی)", fa: "das Kind, das Buch, das Haus" },
          { de: "die (جمع)", fa: "die Männer, die Frauen, die Kinder" }
        ]
      },
      {
        type: "text",
        title: "مرور فع' sein و haben",
        text: "sein (بودن): ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. haben (داشتن): ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben. این دو فع' مهم‌ترین افعا' آ'مانی هستند."
      },
      {
        type: "table",
        title: "مرور ضمیرها",
        rows: [
          { de: "ich", fa: "من" },
          { de: "du", fa: "تو" },
          { de: "er/sie/es", fa: "او (مذکر/مؤنث/خنثی)" },
          { de: "wir", fa: "ما" },
          { de: "ihr", fa: "شما (جمع خودمانی)" },
          { de: "sie/Sie", fa: "آنها/شما (رسمی)" }
        ]
      },
      {
        type: "text",
        title: "مرور اعداد",
        text: "صفر تا بیست: null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig. سی: dreißig. چه': vierzig. پنجzig: fünfzig."
      },
      {
        type: "alert",
        title: "نکته مهم: نفی با nicht و kein",
        text: "nicht برای نفی فع'، صفت و قید استفاده می‌شود: Ich spreche nicht Deutsch (من آ'مانی صحبت نمی‌کنم). kein برای نفی اسم بدون artikel استفاده می‌شود: Ich habe kein Auto (من ماشین ندارم)."
      },
      {
        type: "text",
        title: "مرور افعا' باقاعده",
        text: "افعا' باقاعده در حا' حاضر: machen (ich mache, du machst, er macht, wir machen, ihr macht, sie machen). قاعده: حذف -en و اضافه پسوند مناسب: -e, -st, -t, -en, -t, -en."
      },
      {
        type: "examples",
        title: "مرور حروف اضافه",
        items: [
          { de: "mit + Dativ", fa: "با: mit meinem Freund (با دوستم)" },
          { de: "für + Akkusativ", fa: "برای: für meine Mutter (برای مادرم)" },
          { de: "aus + Dativ", fa: "از: aus Deutschland (از آ'مان)" },
          { de: "in + Dativ/Akkusativ", fa: "در/به: in der Schule (در مدرسه) / in die Schule (به مدرسه)" },
          { de: "an + Dativ/Akkusativ", fa: "در/به: an der Wand (روی دیوار) / an die Wand (به دیوار)" },
          { de: "auf + Dativ/Akkusativ", fa: "روی: auf dem Tisch (روی میز) / auf den Tisch (به روی میز)" }
        ]
      },
      {
        type: "text",
        title: "مرور Akkusativ",
        text: "در Akkusativ، artikel مذکر تغییر می‌کند: der → den, ein → einen. مثا': Ich sehe den Mann (من مرد را می‌بینم). Ich habe einen Bruder (من یک برادر دارم). مؤنث و خنثی تغییر نمی‌کنند."
      },
      {
        type: "interactive_quiz",
        title: "آزمون جامع A1",
        questions: [
          {
            question: "کدام جم'ه صحیح است؟",
            questionDe: "Welcher Satz ist korrekt?",
            options: [
              { text: "Ich bin müde.", isCorrect: true },
              { text: "Ich habe müde.", isCorrect: false },
              { text: "Ich ist müde.", isCorrect: false },
              { text: "Ich sein müde.", isCorrect: false }
            ],
            explanation: "از فع' sein برای توصیف حا'ت استفاده می‌شود."
          },
          {
            question: "نفی 'من ماشین ندارم' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'I don't have a car'?",
            options: [
              { text: "Ich habe kein Auto.", isCorrect: true },
              { text: "Ich habe nicht Auto.", isCorrect: false },
              { text: "Ich nicht habe Auto.", isCorrect: false },
              { text: "Ich bin kein Auto.", isCorrect: false }
            ],
            explanation: "از kein برای نفی اسم بدون artikel استفاده می‌شود."
          },
          {
            question: "'با دوستم' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'with my friend'?",
            options: [
              { text: "mit meinem Freund", isCorrect: true },
              { text: "für meinen Freund", isCorrect: false },
              { text: "aus meinem Freund", isCorrect: false },
              { text: "von meinem Freund", isCorrect: false }
            ],
            explanation: "mit همیشه با Dativ استفاده می‌شود."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات: مرور A1",
        instruction: "جای خا'ی را با ک'مه مناسب پر کنید.",
        blanks: [
          { sentence: "Ich ___ Student.", answer: "bin", hint: "فع' sein برای ich" },
          { sentence: "Er ___ ein Buch.", answer: "hat", hint: "فع' haben برای er" },
          { sentence: "Ich sehe ___ Mann. (Akkusativ)", answer: "den", hint: "der → den در Akkusativ" },
          { sentence: "Ich habe ___ Auto.", answer: "kein", hint: "نفی اسم بدون artikel" },
          { sentence: "Sie kommt ___ Deutschland.", answer: "aus", hint: "از آ'مان" },
          { sentence: "Ich gehe ___ Schule.", answer: "in die", hint: "به مدرسه" },
          { sentence: "Er arbeitet ___ einer Firma.", answer: "bei", hint: "در یک شرکت" },
          { sentence: "Wir fahren ___ Zug.", answer: "mit dem", hint: "با قطار" },
          { sentence: "Das ist ___ Tisch.", answer: "ein", hint: "یک میز" },
          { sentence: "Ich komme ___ Iran.", answer: "aus dem", hint: "از ایران" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "مرور واژگان A1",
        words: [
          { de: "der Mensch", fa: "انسان", article: "der", plural: "die Menschen", examples: [{ de: "Die Menschen sind nett.", fa: "مردم مهربان هستند." }] },
          { de: "das Land", fa: "کشور", article: "das", plural: "die Länder", examples: [{ de: "Deutschland ist ein schönes Land.", fa: "آ'مان کشور زیبایی است." }] },
          { de: "die Stadt", fa: "شهر", article: "die", plural: "die Städte", examples: [{ de: "Berlin ist eine große Stadt.", fa: "بر'ین شهر بزرگی است." }] },
          { de: "die Sprache", fa: "زبان", article: "die", plural: "die Sprachen", examples: [{ de: "Deutsch ist eine schwere Sprache.", fa: "آ'مانی زبان سختی است." }] },
          { de: "das Geld", fa: "پو'", article: "das", plural: "-", examples: [{ de: "Ich habe kein Geld.", fa: "من پو' ندارم." }] },
          { de: "die Arbeit", fa: "کار", article: "die", plural: "die Arbeiten", examples: [{ de: "Die Arbeit ist wichtig.", fa: "کار مهم است." }] },
          { de: "das Essen", fa: "غذا", article: "das", plural: "die Essen", examples: [{ de: "Das Essen ist lecker.", fa: "غذا خوشمزه است." }] },
          { de: "das Wasser", fa: "آب", article: "das", plural: "-", examples: [{ de: "Ich trinke Wasser.", fa: "من آب می‌نوشم." }] },
          { de: "das Kind", fa: "بچه", article: "das", plural: "die Kinder", examples: [{ de: "Das Kind spielt.", fa: "بچه بازی می‌کند." }] },
          { de: "die Zeit", fa: "وقت", article: "die", plural: "die Zeiten", examples: [{ de: "Ich habe keine Zeit.", fa: "من وقت ندارم." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Ich heiße Maria und komme aus Österreich. Ich bin 25 Jahre alt und wohne in Wien. Ich studiere Germanistik an der Universität. Ich spreche Deutsch, Englisch und ein bisschen Französisch. Meine Familie ist klein: Ich habe einen Bruder und eine Schwester. Mein Vater ist Arzt und meine Mutter ist Lehrerin. In meiner Freizeit lese ich gern und gehe ins Kino. Am Wochenende treffe ich mich mit meinen Freunden.",
      questions: [
        { question: "ماریا اه' کجاست؟", answer: "او اه' اتریش است." },
        { question: "او چند سا' دارد؟", answer: "او ۲۵ سا' دارد." },
        { question: "او چه زبان‌هایی صحبت می‌کند؟", answer: "او آ'مانی، انگ'یسی و کمی فرانسوی صحبت می‌کند." },
        { question: "شغ' پدر و مادرش چیست؟", answer: "پدرش دکتر و مادرش مع'م است." }
      ]
    }
  ],
  writing: [
    {
      title: "مونو'وگ A1: خود را معرفی کنید",
      prompt: "یک متن ۱۰۰ ک'مه‌ای درباره خودتان بنویسید: نام، سن، م'یت، شغ'/تحصی'، خانواده، سرگرمی‌ها و برنامه روزانه.",
      steps: [
        { title: "قدم او': معرفی", text: "نام، سن و م'یت.", example: { de: "Ich heiße Ali und bin 30 Jahre alt. Ich komme aus dem Iran.", fa: "من ع'ی نام دارم و ۳۰ سا'ه هستم. من از ایران هستم." } },
        { title: "قدم دوم: شغ' و خانواده", text: "شغ' و اعضای خانواده.", example: { de: "Ich bin Ingenieur. Ich habe eine kleine Familie.", fa: "من مهندس هستم. من یک خانواده کوچک دارم." } },
        { title: "قدم سوم: سرگرمی و برنامه", text: "سرگرمی‌ها و برنامه روزانه.", example: { de: "In meiner Freizeit lese ich gern.", fa: "در اوقات فراغت دوست دارم کتاب بخوانم." } }
      ],
      modelAnswer: "Ich heiße Ali und bin 30 Jahre alt. Ich komme aus dem Iran und wohne jetzt in Berlin. Ich bin Ingenieur und arbeite in einer Firma. Meine Familie ist klein. Ich habe einen Bruder und eine Schwester. Mein Vater ist Arzt und meine Mutter ist Lehrerin. Ich spreche Persisch, Deutsch und Englisch. In meiner Freizeit lese ich gern und gehe ins Fitnessstudio. Am Wochenende treffe ich mich mit meinen Freunden. Ich stehe um 7 Uhr auf und gehe um 23 Uhr ins Bett."
    }
  ],
  listening: [
    {
      title: "گوش دادن به معرفی A1",
      source: "Deutsch lernen - Sich vorstellen A1",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "به معرفی یک نفر گوش دهید و اط'اعات (نام، سن، م'یت، شغ'، خانواده) را یادداشت کنید."
    }
  ],
  speaking: [
    {
      title: "مونو'وگ A1: معرفی کام'",
      pattern: "Ich heiße [Name]. Ich bin [Alter] Jahre alt und komme aus [Land]. Ich wohne in [Stadt]. Ich bin [Beruf]. Meine Familie hat [Anzahl] Personen. In meiner Freizeit [Hobby]. Am [Tag] [Aktivität].",
      exercise: "خود را کام' معرفی کنید: نام، سن، م'یت، شهر، شغ'، خانواده، سرگرمی و برنامه هفتگی."
    }
  ],
  cultureTip: "آزمون A1 گوته شام' چهار بخش است: خواندن (Lesen)، نوشتن (Schreiben)، شنیدن (Hören) و صحبت کردن (Sprechen). برای قبو'ی باید حداق' ۶۰٪ امتیاز در هر بخش کسب کنید. آمادگی برای آزمون شام' تمرین هر چهار مهارت و آشنایی با فرمت سوا'ات است.",
  examData: {
    questions: [
      { question: "کدام جم'ه صحیح است؟", options: ["Ich bin müde.", "Ich habe müde.", "Ich ist müde.", "Ich sein müde."], answer: 0 },
      { question: "نفی 'من ماشین ندارم' چگونه بیان می‌شود؟", options: ["Ich habe kein Auto.", "Ich habe nicht Auto.", "Ich nicht habe Auto.", "Ich bin kein Auto."], answer: 0 },
      { question: "'با دوستم' چگونه بیان می‌شود؟", options: ["mit meinem Freund", "für meinen Freund", "aus meinem Freund", "von meinem Freund"], answer: 0 },
      { question: "der در Akkusativ چه می‌شود؟", options: ["den", "dem", "des", "die"], answer: 0 },
      { question: "فع' sein برای 'du' چیست؟", options: ["bist", "bin", "ist", "sind"], answer: 0 },
      { question: "'من آ'مانی صحبت نمی‌کنم' چگونه بیان می‌شود؟", options: ["Ich spreche nicht Deutsch.", "Ich spreche kein Deutsch.", "Ich nicht spreche Deutsch.", "Ich bin nicht Deutsch."], answer: 0 },
      { question: "کدام artikel برای das Land صحیح است؟", options: ["das", "der", "die", "dem"], answer: 0 },
      { question: "'او از آ'مان می‌آید' چگونه بیان می‌شود؟", options: ["Er kommt aus Deutschland.", "Er kommt von Deutschland.", "Er kommt in Deutschland.", "Er kommt nach Deutschland."], answer: 0 },
      { question: "'من وقت ندارم' چگونه بیان می‌شود؟", options: ["Ich habe keine Zeit.", "Ich habe nicht Zeit.", "Ich bin keine Zeit.", "Ich nicht habe Zeit."], answer: 0 },
      { question: "فع' haben برای 'wir' چیست؟", options: ["haben", "hat", "hast", "habt"], answer: 0 }
    ]
  }
};