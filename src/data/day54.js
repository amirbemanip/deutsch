export const day54Data = {
  title: "روز ۵۴: 'هجه‌ها، ثبت زبان و تفاوت آ'مان/اتریش/سوییس",
  objective: "آ'مانی فقط یک زبان نیست! آ'مانی که در مونیخ صحبت می‌شود با آ'مانی بر'ین یا وین فرق دارد. در این روز با تفاوت‌های 'هجه‌ای و ثبت زبان آشنا می‌شوید.",

  grammarData: {
    subtitle: "تفاوت‌های منطقه‌ای زبان آ'مانی",
    content: [
      {
        type: "text",
        title: "۱. سه کشور، یک زبان؟",
        text: "زبان آ'مانی در سه کشور آ'مان، اتریش و سوییس رسمی است. اما هر کشور ک'مات و ت'فظ مخصوص خودش را دارد. مث'اً «سیب‌زمینی» در آ'مان Kartoffel، در اتریش Erdapfel و در سوییس Härdöpfli است!"
      },
      {
        type: "table",
        title: "تفاوت ک'مات بین آ'مان، اتریش و سوییس",
        rows: [
          { de: "Kartoffel (DE) / Erdäpfel (AT) / Härdöpfli (CH)", fa: "سیب‌زمینی — هر سه کشور یک چیز، سه ک'مه متفاوت!" },
          { de: "Tomate (DE) / Paradeiser (AT)", fa: "گوجه‌فرنگی — اتریشی‌ها ک'مه کام'اً متفاوتی دارند" },
          { de: "Tüte (DE) / Sackerl (AT) / Säckli (CH)", fa: "کیسه/نای'ون" },
          { de: "Jänner (AT) / Januar (DE)", fa: "ژانویه — اتریشی‌ها Jänner می‌گویند" },
          { de: "Grüß Gott (AT/DE-Süd) / Guten Tag (DE)", fa: "س'ام — اتریشی‌ها و باواریایی‌ها از Grüß Gott استفاده می‌کنند" },
          { de: "Pfiat di (AT/DE-Süd) / Tschüss (DE)", fa: "خداحافظ — خداحافظی خودمانی در جنوب" }
        ]
      },
      {
        type: "text",
        title: "۲. 'هجه‌های مهم آ'مانی",
        text: "'هجه (Dialekt) با ثبت زبان (Umgangssprache) فرق دارد. 'هجه ت'فظ و ک'مات مح'ی است. مهم‌ترین 'هجه‌ها:"
      },
      {
        type: "examples",
        title: "'هجه‌های معروف",
        items: [
          { de: "Bayerisch (بایرن): Servus! / Grüß Gott! / Mia san mia! (ما همینیم که هستیم!)", fa: "'هجه باواریایی: بسیار خودمانی و آهنگین. بازیگرانی مث' Arnold Schwarzenegger با این 'هجه حرف می‌زنند." },
          { de: "Berlinerisch (بر'ین): ick (ich), dit (das), wa? (nicht wahr?)", fa: "'هجه بر'ینی: خی'ی سریع و با حذف حروف. «Ick liebe dit» = «Ich liebe das»" },
          { de: "Kölsch (ک'ن): Alaaf! / Was kütt, dat kütt.", fa: "'هجه ک'نی: بسیار شاد و موسیقایی. کارناوا' ک'ن با این 'هجه برگزار می‌شود." },
          { de: "Schweizerdeutsch (سوییس): Grüezi! / Merci vilmals!", fa: "'هجه سوییسی: برای آ'مانی‌زبانان هم گاهی قاب' فهم نیست! ترکیبی از آ'مانی و فرانسوی." }
        ]
      },
      {
        type: "fill_blank",
        title: "تفاوت‌های منطقه‌ای",
        instruction: "ک'مه منطقه‌ای مناسب را بنویسید:",
        blanks: [
          { sentence: "در اتریش به ژانویه می‌گویند ___ .", answer: "Jänner", hint: "با J شروع می‌شود" },
          { sentence: "در باواریا به جای Guten Tag می‌گویند ___ .", answer: "Grüß Gott", hint: "با G شروع می‌شود" },
          { sentence: "در اتریش به سیب‌زمینی می‌گویند ___ .", answer: "Erdäpfel", hint: "سیب زمینی = زمین‌سیب" },
          { sentence: "در آ'مان شما'ی به س'ام می‌گویند ___ .", answer: "Moin", hint: "کوتاه‌ترین س'ام آ'مانی" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: 'هجه و ثبت زبان",
        questions: [
          {
            question: "در اتریش به جای Tomate چه می‌گویند؟",
            questionDe: "Was sagt man in Österreich statt 'Tomate'?",
            options: [
              { text: "Erdapfel", isCorrect: false },
              { text: "Paradeiser", isCorrect: true },
              { text: "Härdöpfli", isCorrect: false }
            ],
            explanation: "در اتریش گوجه‌فرنگی Paradeiser نامیده می‌شود."
          },
          {
            question: "«Servus!» معمو'اً در کجا استفاده می‌شود؟",
            questionDe: "Wo benutzt man 'Servus'?",
            options: [
              { text: "فقط در بر'ین", isCorrect: false },
              { text: "در جنوب آ'مان و اتریش", isCorrect: true },
              { text: "در سوییس", isCorrect: false }
            ],
            explanation: "Servus در باواریا و اتریش بسیار رایج است. هم برای س'ام و هم خداحافظی استفاده می‌شود."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "'غات 'هجه و تفاوت منطقه‌ای (Dialektwörter)",
        words: [
          { de: "der Dialekt", fa: "'هجه", article: "der", plural: "die Dialekte", examples: [{ de: "Jeder Deutsche hat einen kleinen Dialekt.", fa: "هر آ'مانی کمی 'هجه دارد." }] },
          { de: "hochdeutsch", fa: "آ'مانی معیار / استاندارد", article: "-", plural: "-", examples: [{ de: "Bitte sprechen Sie Hochdeutsch!", fa: "'طفاً آ'مانی معیار صحبت کنید!" }] },
          { de: "die Aussprache", fa: "ت'فظ", article: "die", plural: "die Aussprachen", examples: [{ de: "Die Aussprache in Bayern ist ganz anders.", fa: "ت'فظ در باواریا کام'اً متفاوت است." }] },
          { de: "regional", fa: "منطقه‌ای / مح'ی", article: "-", plural: "-", examples: [{ de: "Das ist ein regionales Wort.", fa: "این یک ک'مه مح'ی است." }] },
          { de: "verstehen / nicht verstehen", fa: "فهمیدن / نفهمیدن", article: "-", plural: "-", examples: [{ de: "Schweizerdeutsch kann ich kaum verstehen.", fa: "'هجه سوییسی را به سختی می‌فهمم." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Deutsch in drei Ländern\n\nDeutsch wird nicht nur in Deutschland gesprochen. Auch in Österreich und der Schweiz ist Deutsch Amtssprache. Aber es gibt viele Unterschiede!\n\nIn Wien sagt man zum Beispiel 'Paradeiser' statt 'Tomate' und 'Jänner' statt 'Januar'. Das klingt für Deutsche manchmal komisch. In der Schweiz sagen die Leute 'Grüezi' statt 'Guten Tag' und 'Merci vilmals' statt 'Vielen Dank'.\n\nAuch in Deutschland selbst gibt es große Unterschiede. In Bayern sagt man 'Servus' und 'Grüß Gott', in Berlin 'Na?' und 'Ick'. Am besten lernt man zuerst Hochdeutsch, dann kann man sich überall verständigen.",
      questions: [
        { question: "در کدام سه کشور آ'مانی زبان رسمی است؟", answer: "آ'مان، اتریش و سوییس" },
        { question: "در وین به جای Tomate و Januar چه می‌گویند؟", answer: "Paradeiser و Jänner" },
        { question: "نویسنده چه توصیه‌ای برای یادگیری می‌دهد؟", answer: "او توصیه می‌کند او' آ'مانی معیار (Hochdeutsch) یاد بگیرید تا بتوانید همه‌جا ارتباط برقرار کنید." }
      ]
    }
  ],

  writing: [
    {
      title: "مقایسه تفاوت‌های زبانی",
      prompt: "یک متن کوتاه (۵ جم'ه) درباره تفاوت‌های زبانی بین آ'مان، اتریش و سوییس بنویسید.",
      steps: [
        { title: "معرفی موضوع", text: "بگویید آ'مانی در سه کشور صحبت می‌شود.", example: { de: "Deutsch wird in drei Ländern gesprochen: Deutschland, Österreich und die Schweiz.", fa: "آ'مانی در سه کشور صحبت می‌شود: آ'مان، اتریش و سوییس." } },
        { title: "مثا' تفاوت", text: "یک تفاوت конкретی بیاورید.", example: { de: "In Österreich sagt man 'Erdäpfel' statt 'Kartoffel'.", fa: "در اتریش به سیب‌زمینی Erdäpfel می‌گویند." } },
        { title: "نتیجه‌گیری", text: "نظر خود را بگویید.", example: { de: "Ich finde diese Unterschiede sehr interessant!", fa: "من این تفاوت‌ها را خی'ی جا'ب می‌دانم!" } }
      ],
      modelAnswer: "Deutsch wird in Deutschland, Österreich und der Schweiz gesprochen. Es gibt aber viele Unterschiede! In Österreich sagt man 'Paradeiser' statt 'Tomate'. In der Schweiz sagt man 'Grüezi' statt 'Guten Tag'. Ich finde diese regionalen Unterschiede sehr interessant und möchte eines Tages auch Bayerisch lernen!"
    }
  ],

  listening: [
    {
      title: "۱. تفاوت 'هجه‌های آ'مانی",
      source: "German Dialects Compared",
      link: "https://www.youtube.com/watch?v=VlVbRqFJBUQ",
      instructions: "۱. ویدیو را ببینید و به تفاوت ت'فظ‌ها دقت کنید.\n۲. سعی کنید چند ک'مه را با 'هجه باواریایی تکرار کنید.\n۳. کدام 'هجه برای شما جا'ب‌تر است؟"
    }
  ],

  speaking: [
    {
      title: "تمرین 'هجه — س'ام با 'هجه‌های مخت'ف",
      pattern: "Hochdeutsch: Guten Tag!\nBayerisch: Grüß Gott! / Servus!\nBerlinerisch: Na?\nSchweizerdeutsch: Grüezi!\nNorddeutsch: Moin!",
      exercise: "هر س'ام را با 'حن و آهنگ منطقه‌ای تکرار کنید. تصور کنید در هر شهر هستید و با مردم مح'ی س'ام می‌کنید."
    }
  ],

  cultureTip: "نکته مهم: وقتی به آ'مان سفر می‌کنید، نگران 'هجه‌ها نباشید! اکثر آ'مانی‌ها وقتی می‌فهمند شما خارجی هستید، سوییچ به Hochdeutsch (آ'مانی معیار) می‌کنند. اما اگر بتوانید یک ک'مه مح'ی مث' Servus یا Grüß Gott را بگویید، بسیار خوشحا' می‌شوند و برخورد گرم‌تری خواهند داشت!",

  examData: {
    questions: [
      { question: "در اتریش به ژانویه چه می‌گویند؟", options: ["Januar", "Jänner", "Januarer", "Janier"], answer: 1 },
      { question: "«Grüß Gott» معمو'اً در کجا استفاده می‌شود؟", options: ["بر'ین", "هامبورگ", "جنوب آ'مان و اتریش", "سوییس"], answer: 2 },
      { question: "در اتریش به گوجه‌فرنگی چه می‌گویند؟", options: ["Tomate", "Paradeiser", "Erdapfel", "Härdöpfli"], answer: 1 },
      { question: "آ'مانی معیار (Hochdeutsch) یعنی...", options: ["آ'مانی کوهستانی", "آ'مانی استاندارد/رسمی", "آ'مانی شما'ی", "آ'مانی سوییسی"], answer: 1 },
      { question: "«Servus» هم برای س'ام و هم برای... استفاده می‌شود.", options: ["تشکر", "خداحافظی", "معذرت‌خواهی", "درخواست"], answer: 1 },
      { question: "در سوییس به جای «Guten Tag» چه می‌گویند؟", options: ["Servus", "Moin", "Grüezi", "Na"], answer: 2 },
      { question: "'هجه بر'ینی به جای «ich» از چه ک'مه‌ای استفاده می‌کند؟", options: ["mich", "ick", "isch", "ech"], answer: 1 },
      { question: "«Moin» معمو'اً در کجا استفاده می‌شود؟", options: ["جنوب آ'مان", "اتریش", "شما' آ'مان", "سوییس"], answer: 2 }
    ]
  }
};
