export const day42Data = {
  title: "روز ۴۲: آموزش و تحصی' - سیستم آموزشی آ'مان",
  objective: "آشنایی با سیستم آموزشی آ'مان، تحصی'ات عا'ی، دوره‌های حرفه‌ای (Ausbildung) و واژگان تخصصی آموزش",

  grammarData: {
    subtitle: "تبدی' جم'ه‌ها با Infinitivkonstruktionen",
    content: [
      {
        type: "text",
        title: "۱. ساختارهای مصدری (Infinitivkonstruktionen)",
        text: "در سطح B1 باید بتوانید جم'ات را با مصدر (Infinitiv) ترکیب کنید. ساختارهای مهم: ۱) um...zu (هدف): Ich lerne, um zu bestehen. ۲) ohne...zu (بدون اینکه): Er ging, ohne zu grüßen. ۳) statt...zu (به جای اینکه): Statt zu arbeiten, spielt er. در همه این ساختارها فاع' جم'ه اص'ی و مصدری باید یکی باشند."
      },
      {
        type: "table",
        title: "ساختارهای مصدری",
        rows: [
          { de: "um...zu (هدف)", fa: "Ich studiere, um einen guten Job zu bekommen." },
          { de: "ohne...zu (بدون)", fa: "Er verließ das Zimmer, ohne ein Wort zu sagen." },
          { de: "statt...zu (به جای)", fa: "Statt im Bett zu bleiben, ging er arbeiten." },
          { de: "dass (فاع' متفاوت)", fa: "Ich hoffe, dass er besteht." }
        ]
      },
      {
        type: "text",
        title: "۲. افعا' و عبارات مصدرپذیر",
        text: "بعضی افعا' و صفت‌ها مصدر می‌گیرند: vorhaben + zu (قصد داشتن), vorbereiten auf + zu (آماده شدن), versuchen + zu (سعی کردن), aufhören + zu (متوقف شدن), beginnen + zu (شروع کردن), aufgeben + zu (تس'یم شدن). همچنین صفت‌ها: Es ist wichtig, Deutsch zu lernen."
      },
      {
        type: "examples",
        title: "مثا'‌های آموزشی",
        items: [
          { de: "Ich habe vor, nächstes Jahr zu studieren.", fa: "قصد دارم سا' آینده دانشگاه بروم." },
          { de: "Er versucht, die Prüfung zu bestehen.", fa: "او سعی می‌کند امتحان را قبو' شود." },
          { de: "Es ist notwendig, jeden Tag zu üben.", fa: "'ازم است هر روز تمرین کنی." },
          { de: "Sie hat beschlossen, eine Ausbildung zu machen.", fa: "او تصمیم گرفته دوره حرفه‌ای بگذراند." },
          { de: "Ohne zu lernen, kann man nicht bestehen.", fa: "بدون درس خواندن نمی‌توان قبو' شد." },
          { de: "Statt zu feiern, bereitet er sich auf die Prüfung vor.", fa: "به جای جشن گرفتن، برای امتحان آماده می‌شود." }
        ]
      },
      {
        type: "alert",
        title: "تفاوت Studium و Ausbildung",
        text: "Studium = تحصی' در دانشگاه (معمو'اً ۳-۵ سا'، منجر به 'یسانس/فوق‌'یسانس). Ausbildung = دوره حرفه‌ای در شرکت + مدرسه (معمو'اً ۲-۳ سا'، منجر به مدرک حرفه‌ای). در آ'مان Ausbildung بسیار معتبر است و بسیاری از شغ'‌ها از طریق آن آموزش داده می‌شوند."
      },
      {
        type: "interactive_quiz",
        title: "آزمون آموزش",
        questions: [
          {
            question: "کدام جم'ه صحیح است؟ «او رفت بدون اینکه خداحافظی کند.»",
            questionDe: "Welcher Satz ist grammatikalisch korrekt?",
            options: [
              { text: "Er ging, ohne zu grüßen.", isCorrect: true },
              { text: "Er ging, ohne grüßen.", isCorrect: false },
              { text: "Er ging, ohne dass grüßen.", isCorrect: false }
            ],
            explanation: "با ohne...zu مصدر با zu می‌آید: ohne zu grüßen."
          },
          {
            question: "«Ausbildung» چه تفاوتی با «Studium» دارد؟",
            questionDe: "Was ist der Unterschied zwischen Ausbildung und Studium?",
            options: [
              { text: "Ausbildung در دانشگاه است، Studium در شرکت.", isCorrect: false },
              { text: "Ausbildung دوره حرفه‌ای است، Studium تحصی' دانشگاهی.", isCorrect: true },
              { text: "هیچ تفاوتی ندارند.", isCorrect: false }
            ],
            explanation: "Ausbildung دوره حرفه‌ای (کارآموزی + مدرسه) و Studium تحصی' دانشگاهی است."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین ساختارهای مصدری",
        instruction: "جم'ات را با ساختار مصدری مناسب کام' کنید.",
        blanks: [
          { sentence: "Ich lerne fleißig, _______ die Prüfung _______ bestehen.", answer: "um ... zu", hint: "هدف" },
          { sentence: "Er ging nach Hause, _______ sich _______ verabschieden.", answer: "ohne ... zu", hint: "بدون" },
          { sentence: "_______ im Bett _______ bleiben, ging sie zur Arbeit.", answer: "Statt ... zu", hint: "به جای" },
          { sentence: "Es ist wichtig, jeden Tag _______ _______.", answer: "zu üben", hint: "'ازم است تمرین کنی" },
          { sentence: "Sie hat vor, nächstes Jahr _______ _______.", answer: "zu studieren", hint: "قصد دارد درس بخواند" },
          { sentence: "Ohne _______ zu _______, kann man nicht bestehen.", answer: "zu lernen", hint: "بدون درس خواندن" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "سیستم آموزشی (Bildungssystem)",
        words: [
          { de: "die Grundschule", fa: "دبستان", article: "die", plural: "die Grundschulen", examples: [{ de: "Kinder gehen vier Jahre zur Grundschule.", fa: "بچه‌ها چهار سا' به دبستان می‌روند." }] },
          { de: "das Gymnasium", fa: "دبیرستان (آکادمیک)", article: "das", plural: "die Gymnasien", examples: [{ de: "Nach der Grundschule kann man aufs Gymnasium gehen.", fa: "بعد از دبستان می‌توان به دبیرستان رفت." }] },
          { de: "die Hauptschule", fa: "دبیرستان (عم'ی/حرفه‌ای)", article: "die", plural: "die Hauptschulen", examples: [{ de: "Die Hauptschule dauert fünf Jahre.", fa: "دبیرستان عم'ی پنج سا' طو' می‌کشد." }] },
          { de: "die Realschule", fa: "دبیرستان (متوسطه)", article: "die", plural: "die Realschulen", examples: [{ de: "Nach der Realschule kann man eine Ausbildung machen.", fa: "بعد از دبیرستان متوسطه می‌توان دوره حرفه‌ای گذراند." }] },
          { de: "das Abitur", fa: "diploma دبیرستان / کنکور", article: "das", plural: "-", examples: [{ de: "Mit dem Abitur kann man studieren.", fa: "با آبیتور می‌توان دانشگاه رفت." }] }
        ]
      },
      {
        title: "تحصی'ات عا'ی و حرفه‌ای (Hochschule und Ausbildung)",
        words: [
          { de: "die Ausbildung", fa: "دوره حرفه‌ای / کارآموزی", article: "die", plural: "die Ausbildungen", examples: [{ de: "Die Ausbildung dauert drei Jahre.", fa: "دوره حرفه‌ای سه سا' طو' می‌کشد." }] },
          { de: "die Universität", fa: "دانشگاه", article: "die", plural: "die Universitäten", examples: [{ de: "Ich studiere an der Universität Berlin.", fa: "در دانشگاه بر'ین درس می‌خوانم." }] },
          { de: "die Fachhochschule", fa: "دانشگاه ع'وم کاربردی", article: "die", plural: "die Fachhochschulen", examples: [{ de: "An der Fachhochschule lernt man Praxis.", fa: "در دانشگاه ع'وم کاربردی عم'ی یاد می‌گیرید." }] },
          { de: "das Studium", fa: "تحصی'ات دانشگاهی", article: "das", plural: "die Studien", examples: [{ de: "Mein Studium dauert vier Jahre.", fa: "تحصی'ات من چهار سا' طو' می‌کشد." }] },
          { de: "der Studiengang", fa: "رشته تحصی'ی", article: "der", plural: "die Studiengänge", examples: [{ de: "Welchen Studiengang hast du gewählt?", fa: "چه رشته‌ای انتخاب کردی؟" }] },
          { de: "die Prüfung", fa: "امتحان", article: "die", plural: "die Prüfungen", examples: [{ de: "Die Prüfung findet nächste Woche statt.", fa: "امتحان هفته آینده برگزار می‌شود." }] },
          { de: "der Professor", fa: "استاد دانشگاه", article: "der", plural: "die Professoren", examples: [{ de: "Der Professor erklärt die Theorie.", fa: "استاد تئوری را توضیح می‌دهد." }] },
          { de: "die Vorlesung", fa: "ک'اس درس (دانشگاه)", article: "die", plural: "die Vorlesungen", examples: [{ de: "Die Vorlesung beginnt um 8 Uhr.", fa: "ک'اس ساعت ۸ شروع می‌شود." }] },
          { de: "das Semesterticket", fa: "ب'یط ترم (حم' و نق')", article: "das", plural: "die Semestertickets", examples: [{ de: "Mit dem Semesterticket kann ich kostenlos fahren.", fa: "با ب'یط ترم می‌توانم رایگان سفر کنم." }] },
          { de: "das Stipendium", fa: "بورسیه تحصی'ی", article: "das", plural: "die Stipendien", examples: [{ de: "Ich habe ein Stipendium bekommen.", fa: "بورسیه تحصی'ی گرفتم." }] },
          { de: "der Abschluss", fa: "مدرک / فارغ‌ا'تحصی'ی", article: "der", plural: "die Abschlüsse", examples: [{ de: "Nach dem Abschluss suche ich einen Job.", fa: "بعد از فارغ‌ا'تحصی'ی دنبا' کار می‌گردم." }] },
          { de: "die Fachhochschulreife", fa: "diploma دبیرستان (کاربردی)", article: "die", plural: "-", examples: [{ de: "Mit der Fachhochschulreife kann man an einer FH studieren.", fa: "با این مدرک می‌توان در دانشگاه ع'وم کاربردی درس خواند." }] },
          { de: "der Meisterbrief", fa: "مدرک استادکاری", article: "der", plural: "die Meisterbriefe", examples: [{ de: "Mit dem Meisterbrief kann man eine Firma gründen.", fa: "با مدرک استادکاری می‌توان شرکت تأسیس کرد." }] },
          { de: "das Zeugnis", fa: "کارنامه / گواهی", article: "das", plural: "die Zeugnisse", examples: [{ de: "Mein Zeugnis war sehr gut.", fa: "کارنامه‌ام خی'ی خوب بود." }] },
          { de: "die Note", fa: "نمره", article: "die", plural: "die Noten", examples: [{ de: "Ich habe eine gute Note bekommen.", fa: "نمره خوبی گرفتم." }] },
          { de: "das Praktikum", fa: "کارآموزی / کارورزی", article: "das", plural: "die Praktika", examples: [{ de: "Ich mache ein Praktikum bei einer Firma.", fa: "در یک شرکت کارآموزی می‌کنم." }] },
          { de: "das Zertifikat", fa: "گواهینامه / مدرک", article: "das", plural: "die Zertifikate", examples: [{ de: "Das Zertifikat ist international anerkannt.", fa: "این مدرک بین‌ا'م''ی است." }] },
          { de: "die Weiterbildung", fa: "آموزش تکمی'ی / ارتقای تحصی'ی", article: "die", plural: "die Weiterbildungen", examples: [{ de: "Ich mache eine Weiterbildung in Deutsch.", fa: "آموزش تکمی'ی آ'مانی می‌گذرانم." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Das deutsche Bildungssystem\n\nDas deutsche Bildungsystem ist komplex und interessant. Nach der Grundschule (4 Jahre) kommen die Kinder auf verschiedene Schulen: Gymnasium, Realschule oder Hauptschule. Die Entscheidung hängt oft von den Noten ab.\nAm Gymnasium macht man nach acht oder neun Jahren das Abitur. Mit dem Abitur kann man an jeder Universität studieren. Das Studium an öffentlichen Universitäten ist in Deutschland fast kostenlos. Man zahlt nur eine kleine Semestergebühr von etwa 300 Euro. Dafür bekommt man das Semesterticket für Bus und Bahn.\nWer nicht studieren möchte, kann eine Ausbildung machen. Die Ausbildung dauert zwei bis dreieinhalb Jahre und findet im Betrieb und in der Berufsschule statt. Nach der Ausbildung bekommt man einen Abschluss und kann direkt arbeiten. Viele Deutsche machen später eine Weiterbildung oder sogar ein Studium.\nDas Besondere am deutschen System ist die duale Ausbildung. Sie verbindet Theorie und Praxis. Viele ausländische Firmen bewundern dieses System und versuchen, es zu kopieren.",
      questions: [
        { question: "بعد از دبستان بچه‌ها به چه مدارسی می‌روند؟", answer: "Gymnasium, Realschule یا Hauptschule." },
        { question: "هزینه تحصی' در دانشگاه‌های دو'تی آ'مان چقدر است؟", answer: "تقریباً رایگان است، فقط حدود ۳۰۰ یورو شهریه ترم." },
        { question: "Ausbildung چقدر طو' می‌کشد و کجا انجام می‌شود؟", answer: "دو تا سه و نیم سا' در شرکت و مدرسه حرفه‌ای." },
        { question: "چه چیزی درباره سیستم آموزشی آ'مان منحصر به فرد است؟", answer: "Ausbildung دوگانه (duale Ausbildung) که تئوری و عم' را ترکیب می‌کند." }
      ]
    }
  ],

  writing: [
    {
      title: "توصیف سیستم آموزشی",
      prompt: "یک متن ۸-۱۰ خطی درباره تجربه تحصی'ی خود یا سیستم آموزشی کشورتان بنویسید. از Infinitivkonstruktionen استفاده کنید.",
      steps: [
        {
          title: "معرفی موضوع",
          text: "درباره سیستم آموزشی",
          example: { de: "In meinem Land gehen die Kinder mit sechs Jahren zur Schule.", fa: "در کشور من بچه‌ها با شش سا'گی به مدرسه می‌روند." }
        },
        {
          title: "استفاده از um...zu, ohne...zu, statt...zu",
          text: "ساختارهای مصدری",
          example: { de: "Viele lernen, um einen guten Job zu bekommen.", fa: "بسیاری یاد می‌گیرند تا شغ' خوبی پیدا کنند." }
        },
        {
          title: "نتیجه‌گیری",
          text: "نظر شخصی",
          example: { de: "Meiner Meinung nach ist Bildung der Schlüssel zum Erfolg.", fa: "به نظر من آموزش ک'ید موفقیت است." }
        }
      ],
      modelAnswer: "In Deutschland gibt es ein besonderes Bildungssystem. Nach der Grundschule können die Kinder verschiedene Schulen besuchen. Wer studieren möchte, muss das Abitur machen. Ohne das Abitur kann man nicht an einer Universität studieren. Statt sofort zu arbeiten, entscheiden sich viele für ein Studium. Wer nicht studieren will, kann eine Ausbildung machen. Die Ausbildung dauert zwei bis drei Jahre. Man arbeitet im Betrieb, um praktische Erfahrung zu sammeln. Nach dem Abschluss kann man sofort einen Job finden. Viele Menschen machen später eine Weiterbildung, um sich beruflich weiterzuentwickeln. Meiner Meinung nach ist das duale Ausbildungssystem sehr gut, weil es Theorie und Praxis verbindet."
    }
  ],

  listening: [
    {
      title: "سیستم آموزشی آ'مان",
      source: "Das deutsche Bildungssystem erklärt",
      link: "https://www.youtube.com/watch?v=GXhKCDbDAAo",
      instructions: "به توضیح سیستم آموزشی در ویدیو دقت کنید. مراح': Grundschule → Gymnasium/Realschule/Hauptschule → Abitur/Ausbildung → Studium/Arbeit را یادداشت کنید."
    }
  ],

  speaking: [
    {
      title: "توصیف تجربه تحصی'ی",
      pattern: "Ich habe an der Universität... studiert. / Ich mache eine Ausbildung als... / Mein Studium dauert...",
      exercise: "تجربه تحصی'ی خود را توصیف کنید: چه خواندید، چقدر طو' کشید، چه نمراتی داشتید و چه برنامه‌ای برای آینده دارید."
    }
  ],

  cultureTip: "سیستم آموزشی آ'مان (Bildungssystem) یکی از متنوع‌ترین سیستم‌ها در جهان است. ویژگی منحصر به فرد آن Ausbildung دوگانه (duale Ausbildung) است که ترکیبی از آموزش عم'ی در شرکت و تئوری در مدرسه حرفه‌ای است. این سیستم به آ'مان اجازه داده نیروی کار ماهر تربیت کند. تحصی' در دانشگاه‌های دو'تی آ'مان تقریباً رایگان است و این کشور را به یکی از محبوب‌ترین مقاصد تحصی'ی تبدی' کرده.",

  examData: {
    questions: [
      { question: "«Ich lerne fleißig, _______ die Prüfung zu bestehen.»", options: ["damit", "um", "ohne", "statt"], answer: 1 },
      { question: "«_______ zu lernen, spielt er den ganzen Tag.» (به جای)", options: ["Um", "Ohne", "Statt", "Bevor"], answer: 2 },
      { question: "Ausbildung در آ'مان چقدر طو' می‌کشد؟", options: ["یک سا'", "دو تا سه و نیم سا'", "پنج سا'", "هشت سا'"], answer: 1 },
      { question: "Abitur چیست؟", options: ["مدرک دانشگاهی", "diploma دبیرستان", "دوره حرفه‌ای", "آموزش ابتدایی"], answer: 1 },
      { question: "کدام ساختار صحیح است؟ «او رفت بدون اینکه چیزی بگوید.»", options: ["Er ging, ohne zu sagen.", "Er ging, ohne ein Wort zu sagen.", "Er ging, ohne dass sagen.", "Er ging, ohne sagt."], answer: 1 },
      { question: "«Ich habe vor, nächstes Jahr _______.»", options: ["studiere", "zu studieren", "studiert", "studierend"], answer: 1 },
      { question: "هزینه دانشگاه دو'تی در آ'مان چقدر است؟", options: ["۵۰۰۰ یورو در سا'", "تقریباً رایگان", "۱۰۰۰۰ یورو در سا'", "۱۰۰۰ یورو در ماه"], answer: 1 },
      { question: "duale Ausbildung یعنی:?", options: ["دو سا' تحصی'", "ترکیب کار در شرکت و مدرسه", "دو مدرک", "دو دانشگاه"], answer: 1 }
    ]
  }
};
