export const day42Data = {
  title: "روز ۴۲: آموزش و تحصیل - سیستم آموزشی آلمان",
  objective: "آشنایی با سیستم آموزشی آلمان، تحصیلات عالی، دوره‌های حرفه‌ای (Ausbildung) و واژگان تخصصی آموزش",
  level: "B1",

  grammarData: {
    subtitle: "تبدیل جمله‌ها با Infinitivkonstruktionen",
    content: [
      {
        type: "text",
        title: "۱. ساختارهای مصدری (Infinitivkonstruktionen)",
        text: "در سطح B1 باید بتوانید جملات را با مصدر (Infinitiv) ترکیب کنید. ساختارهای مهم: ۱) um...zu (هدف): Ich lerne, um zu bestehen. ۲) ohne...zu (بدون اینکه): Er ging, ohne zu grüßen. ۳) statt...zu (به جای اینکه): Statt zu arbeiten, spielt er. در همه این ساختارها فاعل جمله اصلی و مصدری باید یکی باشند."
      },
      {
        type: "table",
        title: "ساختارهای مصدری",
        rows: [
          { de: "um...zu (هدف)", fa: "Ich studiere, um einen guten Job zu bekommen." },
          { de: "ohne...zu (بدون)", fa: "Er verließ das Zimmer, ohne ein Wort zu sagen." },
          { de: "statt...zu (به جای)", fa: "Statt im Bett zu bleiben, ging er arbeiten." },
          { de: "dass (فاعل متفاوت)", fa: "Ich hoffe, dass er besteht." }
        ]
      },
      {
        type: "text",
        title: "۲. افعال و عبارات مصدرپذیر",
        text: "بعضی افعال و صفت‌ها مصدر می‌گیرند: vorhaben + zu (قصد داشتن)، vorbereiten auf + zu (آماده شدن)، versuchen + zu (سعی کردن)، aufhören + zu (متوقف شدن)، beginnen + zu (شروع کردن)، aufgeben + zu (تسلیم شدن). همچنین صفت‌ها: Es ist wichtig, Deutsch zu lernen."
      },
      {
        type: "examples",
        title: "مثال‌های آموزشی",
        items: [
          { de: "Ich habe vor, nächstes Jahr zu studieren.", fa: "قصد دارم سال آینده دانشگاه بروم." },
          { de: "Er versucht, die Prüfung zu bestehen.", fa: "او سعی می‌کند امتحان را قبول شود." },
          { de: "Es ist notwendig, jeden Tag zu üben.", fa: "لازم است هر روز تمرین کنی." },
          { de: "Sie hat beschlossen, eine Ausbildung zu machen.", fa: "او تصمیم گرفته دوره حرفه‌ای بگذراند." },
          { de: "Ohne zu lernen, kann man nicht bestehen.", fa: "بدون درس خواندن نمی‌توان قبول شد." },
          { de: "Statt zu feiern, bereitet er sich auf die Prüfung vor.", fa: "به جای جشن گرفتن، برای امتحان آماده می‌شود." }
        ]
      },
      {
        type: "alert",
        title: "تفاوت Studium و Ausbildung",
        text: "Studium = تحصیل در دانشگاه (معمولاً ۳-۵ سال، منجر به لیسانس/فوق‌لیسانس). Ausbildung = دوره حرفه‌ای در شرکت + مدرسه (معمولاً ۲-۳ سال، منجر به مدرک حرفه‌ای). در آلمان Ausbildung بسیار معتبر است و بسیاری از شغل‌ها از طریق آن آموزش داده می‌شوند."
      },
      {
        type: "interactive_quiz",
        title: "آزمون آموزش",
        questions: [
          {
            question: "کدام جمله صحیح است؟ «او رفت بدون اینکه خداحافظی کند.»",
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
              { text: "Ausbildung دوره حرفه‌ای است، Studium تحصیل دانشگاهی.", isCorrect: true },
              { text: "هیچ تفاوتی ندارند.", isCorrect: false }
            ],
            explanation: "Ausbildung دوره حرفه‌ای (کارآموزی + مدرسه) و Studium تحصیل دانشگاهی است."
          },
          {
            question: "«Statt zu schlafen, lernt sie für die Prüfung.» یعنی:؟",
            questionDe: "Was bedeutet dieser Satz?",
            options: [
              { text: "بعد از خوابیدن درس می‌خواند.", isCorrect: false },
              { text: "به جای خوابیدن برای امتحان درس می‌خواند.", isCorrect: true },
              { text: "قبل از خوابیدن درس می‌خواند.", isCorrect: false }
            ],
            explanation: "statt...zu یعنی «به جای اینکه»."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین ساختارهای مصدری",
        instruction: "جملات را با ساختار مصدری مناسب کامل کنید.",
        blanks: [
          { sentence: "Ich lerne fleißig, _______ die Prüfung _______ bestehen.", answer: "um ... zu", hint: "هدف" },
          { sentence: "Er ging nach Hause, _______ sich _______ verabschieden.", answer: "ohne ... zu", hint: "بدون" },
          { sentence: "_______ im Bett _______ bleiben, ging sie zur Arbeit.", answer: "Statt ... zu", hint: "به جای" },
          { sentence: "Es ist wichtig, jeden Tag _______ _______.", answer: "zu üben", hint: "لازم است تمرین کنی" },
          { sentence: "Sie hat vor, nächstes Jahr _______ _______.", answer: "zu studieren", hint: "قصد دارد درس بخواند" },
          { sentence: "Ohne _______ zu _______, kann man nicht bestehen.", answer: "zu lernen", hint: "بدون درس خواندن" },
          { sentence: "Er versucht, das Problem _______ _______.", answer: "zu lösen", hint: "سعی می‌کند حل کند" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "سیستم آموزشی (Bildungssystem)",
        words: [
          { de: "die Grundschule", fa: "دبستان", ipa: "[ˈɡʁʊntˌʃuːlə]", article: "die", plural: "die Grundschulen", examples: [{ de: "Kinder gehen vier Jahre zur Grundschule.", fa: "بچه‌ها چهار سال به دبستان می‌روند." }] },
          { de: "das Gymnasium", fa: "دبیرستان (آکادمیک)", ipa: "[ɡʏmˈnaːzi̯ʊm]", article: "das", plural: "die Gymnasien", examples: [{ de: "Nach der Grundschule kann man aufs Gymnasium gehen.", fa: "بعد از دبستان می‌توان به دبیرستان رفت." }] },
          { de: "die Hauptschule", fa: "دبیرستان (عملی/حرفه‌ای)", ipa: "[ˈhaʊ̯ptˌʃuːlə]", article: "die", plural: "die Hauptschulen", examples: [{ de: "Die Hauptschule dauert fünf Jahre.", fa: "دبیرستان عملی پنج سال طول می‌کشد." }] },
          { de: "die Realschule", fa: "دبیرستان (متوسطه)", ipa: "[ʁeˈaːlˌʃuːlə]", article: "die", plural: "die Realschulen", examples: [{ de: "Nach der Realschule kann man eine Ausbildung machen.", fa: "بعد از دبیرستان متوسطه می‌توان دوره حرفه‌ای گذراند." }] },
          { de: "das Abitur", fa: "دیپلم دبیرستان / کنکور", ipa: "[abiˈtuːɐ̯]", article: "das", plural: "-", examples: [{ de: "Mit dem Abitur kann man studieren.", fa: "با آبیتور می‌توان دانشگاه رفت." }] }
        ]
      },
      {
        title: "تحصیلات عالی و حرفه‌ای (Hochschule und Ausbildung)",
        words: [
          { de: "die Ausbildung", fa: "دوره حرفه‌ای / کارآموزی", ipa: "[ˈaʊ̯sbɪldʊŋ]", article: "die", plural: "die Ausbildungen", examples: [{ de: "Die Ausbildung dauert drei Jahre.", fa: "دوره حرفه‌ای سه سال طول می‌کشد." }] },
          { de: "die Universität", fa: "دانشگاه", ipa: "[univɛʁziˈtɛːt]", article: "die", plural: "die Universitäten", examples: [{ de: "Ich studiere an der Universität Berlin.", fa: "در دانشگاه برلین درس می‌خوانم." }] },
          { de: "die Fachhochschule", fa: "دانشگاه علوم کاربردی", ipa: "[ˈfaxˌhɔxˌʃuːlə]", article: "die", plural: "die Fachhochschulen", examples: [{ de: "An der Fachhochschule lernt man Praxis.", fa: "در دانشگاه علوم کاربردی عملی یاد می‌گیرید." }] },
          { de: "das Studium", fa: "تحصیلات دانشگاهی", ipa: "[ˈʃtuːdi̯ʊm]", article: "das", plural: "die Studien", examples: [{ de: "Mein Studium dauert vier Jahre.", fa: "تحصیلات من چهار سال طول می‌کشد." }] },
          { de: "der Studiengang", fa: "رشته تحصیلی", ipa: "[ˈʃtuːdi̯ənˌɡaŋ]", article: "der", plural: "die Studiengänge", examples: [{ de: "Welchen Studiengang hast du gewählt?", fa: "چه رشته‌ای انتخاب کردی؟" }] },
          { de: "die Prüfung", fa: "امتحان", ipa: "[ˈpʁyːfʊŋ]", article: "die", plural: "die Prüfungen", examples: [{ de: "Die Prüfung findet nächste Woche statt.", fa: "امتحان هفته آینده برگزار می‌شود." }] },
          { de: "die Vorlesung", fa: "کلاس درس (دانشگاه)", ipa: "[ˈfoːɐ̯ˌleːzʊŋ]", article: "die", plural: "die Vorlesungen", examples: [{ de: "Die Vorlesung beginnt um 8 Uhr.", fa: "کلاس ساعت ۸ شروع می‌شود." }] },
          { de: "das Semesterticket", fa: "بلیط ترم (حمل و نقل)", article: "das", ipa: "[zeˈmɛstɐˌtɪkət]", plural: "die Semestertickets", examples: [{ de: "Mit dem Semesterticket kann ich kostenlos fahren.", fa: "با بلیط ترم می‌توانم رایگان سفر کنم." }] },
          { de: "das Stipendium", fa: "بورسیه تحصیلی", ipa: "[ʃtiˈpɛndi̯ʊm]", article: "das", plural: "die Stipendien", examples: [{ de: "Ich habe ein Stipendium bekommen.", fa: "بورسیه تحصیلی گرفتم." }] },
          { de: "der Abschluss", fa: "مدرک / فارغ‌التحصیلی", ipa: "[ˈʔapˌʃlʊs]", article: "der", plural: "die Abschlüsse", examples: [{ de: "Nach dem Abschluss suche ich einen Job.", fa: "بعد از فارغ‌التحصیلی دنبال کار می‌گردم." }] },
          { de: "das Zeugnis", fa: "کارنامه / گواهی", ipa: "[ˈt͡sɔʏ̯kniːs]", article: "das", plural: "die Zeugnisse", examples: [{ de: "Mein Zeugnis war sehr gut.", fa: "کارنامه‌ام خیلی خوب بود." }] },
          { de: "die Note", fa: "نمره", ipa: "[ˈnoːtə]", article: "die", plural: "die Noten", examples: [{ de: "Ich habe eine gute Note bekommen.", fa: "نمره خوبی گرفتم." }] },
          { de: "das Praktikum", fa: "کارآموزی / کارورزی", ipa: "[ˈpʁaktikʊm]", article: "das", plural: "die Praktika", examples: [{ de: "Ich mache ein Praktikum bei einer Firma.", fa: "در یک شرکت کارآموزی می‌کنم." }] },
          { de: "das Zertifikat", fa: "گواهینامه / مدرک", ipa: "[t͡sɛʁtiˈfiːkaːt]", article: "das", plural: "die Zertifikate", examples: [{ de: "Das Zertifikat ist international anerkannt.", fa: "این مدرک بین‌المللی است." }] },
          { de: "die Weiterbildung", fa: "آموزش تکمیلی / ارتقای تحصیلی", ipa: "[ˈvaɪ̯tɐˌbɪldʊŋ]", article: "die", plural: "die Weiterbildungen", examples: [{ de: "Ich mache eine Weiterbildung in Deutsch.", fa: "آموزش تکمیلی آلمانی می‌گذرانم." }] },
          { de: "der Meisterbrief", fa: "مدرک استادکاری", ipa: "[ˈmaɪ̯stɐˌbʁiːf]", article: "der", plural: "die Meisterbriefe", examples: [{ de: "Mit dem Meisterbrief kann man eine Firma gründen.", fa: "با مدرک استادکاری می‌توان شرکت تأسیس کرد." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Das deutsche Bildungssystem\n\nDas deutsche Bildungssystem ist komplex und interessant. Nach der Grundschule (4 Jahre) kommen die Kinder auf verschiedene Schulen: Gymnasium, Realschule oder Hauptschule. Die Entscheidung hängt oft von den Noten ab.\nAm Gymnasium macht man nach acht oder neun Jahren das Abitur. Mit dem Abitur kann man an jeder Universität studieren. Das Studium an öffentlichen Universitäten ist in Deutschland fast kostenlos. Man zahlt nur eine kleine Semestergebühr von etwa 300 Euro. Dafür bekommt man das Semesterticket für Bus und Bahn.\nWer nicht studieren möchte, kann eine Ausbildung machen. Die Ausbildung dauert zwei bis dreieinhalb Jahre und findet im Betrieb und in der Berufsschule statt. Nach der Ausbildung bekommt man einen Abschluss und kann direkt arbeiten. Viele Deutsche machen später eine Weiterbildung oder sogar ein Studium.\nDas Besondere am deutschen System ist die duale Ausbildung. Sie verbindet Theorie und Praxis. Viele ausländische Firmen bewundern dieses System und versuchen, es zu kopieren.",
      translation: "سیستم آموزشی آلمان\n\nسیستم آموزشی آلمان پیچیده و جالب است. بعد از دبستان (۴ سال) بچه‌ها به مدارس مختلف می‌روند: گمنازیوم، رئال‌شوله یا هاپت‌شوله. تصمیم اغلب بستگی به نمرات دارد.\nدر گمنازیوم بعد از هشت یا نه سال آبیتور می‌دهند. با آبیتور می‌توان در هر دانشگاهی درس خواند. تحصیل در دانشگاه‌های دولتی آلمان تقریباً رایگان است. فقط حدود ۳۰۰ یورو شهریه ترم پرداخت می‌کنید. در عوض بلیط ترم برای اتوبوس و قطار دریافت می‌کنید.\nکسی که نمی‌خواهد درس بخواند می‌تواند دوره حرفه‌ای بگذراند. این دوره دو تا سه و نیم سال طول می‌کشد و در شرکت و مدرسه حرفه‌ای برگزار می‌شود. بعد از دوره مدرک می‌گیرید و مستقیم می‌توانید کار کنید. خیلی از آلمانی‌ها بعداً آموزش تکمیلی یا حتی دانشگاه می‌روند.\nنکته منحصر به فرد سیستم آلمان Ausbildung دوگانه است. تئوری و عمل را ترکیب می‌کند. شرکت‌های خارجی زیادی این سیستم را تحسین می‌کنند.",
      questions: [
        { question: "بعد از دبستان بچه‌ها به چه مدارسی می‌روند؟", answer: "Gymnasium, Realschule یا Hauptschule." },
        { question: "هزینه تحصیل در دانشگاه‌های دولتی آلمان چقدر است؟", answer: "تقریباً رایگان است، فقط حدود ۳۰۰ یورو شهریه ترم." },
        { question: "Ausbildung چقدر طول می‌کشد و کجا انجام می‌شود؟", answer: "دو تا سه و نیم سال در شرکت و مدرسه حرفه‌ای." },
        { question: "چه چیزی درباره سیستم آموزشی آلمان منحصر به فرد است؟", answer: "Ausbildung دوگانه که تئوری و عمل را ترکیب می‌کند." }
      ]
    }
  ],

  writing: [
    {
      title: "توصیف سیستم آموزشی",
      prompt: "یک متن ۸-۱۰ خطی درباره تجربه تحصیلی خود یا سیستم آموزشی کشورتان بنویسید. از Infinitivkonstruktionen استفاده کنید.",
      steps: [
        {
          title: "معرفی موضوع",
          text: "درباره سیستم آموزشی",
          example: { de: "In meinem Land gehen die Kinder mit sechs Jahren zur Schule.", fa: "در کشور من بچه‌ها با شش سالگی به مدرسه می‌روند." }
        },
        {
          title: "استفاده از um...zu, ohne...zu, statt...zu",
          text: "ساختارهای مصدری",
          example: { de: "Viele lernen, um einen guten Job zu bekommen.", fa: "بسیاری یاد می‌گیرند تا شغل خوبی پیدا کنند." }
        },
        {
          title: "نتیجه‌گیری",
          text: "نظر شخصی",
          example: { de: "Meiner Meinung nach ist Bildung der Schlüssel zum Erfolg.", fa: "به نظر من آموزش کلید موفقیت است." }
        }
      ],
      modelAnswer: "In Deutschland gibt es ein besonderes Bildungssystem. Nach der Grundschule können die Kinder verschiedene Schulen besuchen. Wer studieren möchte, muss das Abitur machen. Ohne das Abitur kann man nicht an einer Universität studieren. Statt sofort zu arbeiten, entscheiden sich viele für ein Studium. Wer nicht studieren will, kann eine Ausbildung machen. Die Ausbildung dauert zwei bis drei Jahre. Man arbeitet im Betrieb, um praktische Erfahrung zu sammeln. Nach dem Abschluss kann man sofort einen Job finden. Viele Menschen machen später eine Weiterbildung, um sich beruflich weiterzuentwickeln. Meiner Meinung nach ist das duale Ausbildungssystem sehr gut, weil es Theorie und Praxis verbindet."
    }
  ],

  listening: [
    {
      title: "سیستم آموزشی آلمان",
      instruction: "به جملات زیر گوش دهید و بنویسید (Dictation).",
      sentences: [
        { de: "Die Kinder gehen vier Jahre zur Grundschule.", fa: "بچه‌ها چهار سال به دبستان می‌روند.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Die Kinder gehen vier Jahre zur Grundschule" },
        { de: "Mit dem Abitur kann man studieren.", fa: "با آبیتور می‌توان درس خواند.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Mit dem Abitur kann man studieren" },
        { de: "Die Ausbildung dauert drei Jahre.", fa: "دوره حرفه‌ای سه سال طول می‌کشد.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Die Ausbildung dauert drei Jahre" },
        { de: "Ich möchte ein Studium machen.", fa: "می‌خواهم تحصیلات دانشگاهی بگیرم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich möchte ein Studium machen" },
        { de: "Die Prüfung findet nächste Woche statt.", fa: "امتحان هفته آینده برگزار می‌شود.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Die Prüfung findet nächste Woche statt" },
        { de: "Er hat ein Stipendium bekommen.", fa: "او بورسیه تحصیلی گرفت.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Er hat ein Stipendium bekommen" },
        { de: "Nach dem Abschluss suche ich eine Stelle.", fa: "بعد از فارغ‌التحصیلی دنبال شغل می‌گردم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Nach dem Abschluss suche ich eine Stelle" }
      ]
    }
  ],

  speaking: [
    {
      title: "توصیف تجربه تحصیلی",
      pattern: "Ich habe an der Universität... studiert. / Ich mache eine Ausbildung als... / Mein Studium dauert... / Meine Note war...",
      exercise: "تجربه تحصیلی خود را توصیف کنید: چه خواندید، چقدر طول کشید، چه نمراتی داشتید و چه برنامه‌ای برای آینده دارید."
    }
  ],

  cultureTip: "سیستم آموزشی آلمان (Bildungssystem) یکی از متنوع‌ترین سیستم‌ها در جهان است. ویژگی منحصر به فرد آن Ausbildung دوگانه (duale Ausbildung) است که ترکیبی از آموزش عملی در شرکت و تئوری در مدرسه حرفه‌ای است. این سیستم به آلمان اجازه داده نیروی کار ماهر تربیت کند. تحصیل در دانشگاه‌های دولتی آلمان تقریباً رایگان است و این کشور را به یکی از محبوب‌ترین مقاصد تحصیلی تبدیل کرده.",

  examData: {
    questions: [
      { question: "«Ich lerne fleißig, _______ die Prüfung zu bestehen.»", options: ["damit", "um", "ohne", "statt"], answer: 1 },
      { question: "«_______ zu lernen, spielt er den ganzen Tag.» (به جای)", options: ["Um", "Ohne", "Statt", "Bevor"], answer: 2 },
      { question: "Ausbildung در آلمان چقدر طول می‌کشد؟", options: ["یک سال", "دو تا سه و نیم سال", "پنج سال", "هشت سال"], answer: 1 },
      { question: "Abitur چیست؟", options: ["مدرک دانشگاهی", "دیپلم دبیرستان", "دوره حرفه‌ای", "آموزش ابتدایی"], answer: 1 },
      { question: "کدام ساختار صحیح است؟ «او رفت بدون اینکه چیزی بگوید.»", options: ["Er ging, ohne zu sagen.", "Er ging, ohne ein Wort zu sagen.", "Er ging, ohne dass sagen.", "Er ging, ohne sagt."], answer: 1 },
      { question: "«Ich habe vor, nächstes Jahr _______.»", options: ["studiere", "zu studieren", "studiert", "studierend"], answer: 1 },
      { question: "هزینه دانشگاه دولتی در آلمان چقدر است؟", options: ["۵۰۰۰ یورو در سال", "تقریباً رایگان", "۱۰۰۰۰ یورو در سال", "۱۰۰۰ یورو در ماه"], answer: 1 },
      { question: "duale Ausbildung یعنی:؟", options: ["دو سال تحصیل", "ترکیب کار در شرکت و مدرسه", "دو مدرک", "دو دانشگاه"], answer: 1 },
      { question: "«_______ im Bett zu _______, ging sie arbeiten.»", options: ["Um ... bleiben", "Ohne ... bleiben", "Statt ... bleiben", "Bevor ... bleiben"], answer: 2 },
      { question: "کدام عبارت به معنای «بورسیه تحصیلی» است؟", options: ["das Zeugnis", "das Stipendium", "der Abschluss", "die Note"], answer: 1 }
    ]
  }
};
