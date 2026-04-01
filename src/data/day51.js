export const day51Data = {
  title: "روز ۵۱: شبیه‌سازی B1 — نوشتن + صحبت کردن",
  objective: "امروز دو مهارت تولیدی B1 یعنی نوشتن (Schreiben) و صحبت کردن (Sprechen) را شبیه‌سازی می‌کنیم. شما یک ایمیل رسمی می‌نویسید و در یک مصاحبه شفاهی B1 شرکت می‌کنید.",
  level: "B1",

  grammarData: {
    subtitle: "ساختارهای کلیدی نوشتن و صحبت کردن در سطح B1",
    content: [
      {
        type: "text",
        title: "۱. ساختار ایمیل رسمی (Formelle E-Mail)",
        text: "در سطح B1 شما باید بتوانید ایمیل‌های رسمی بنویسید. این ایمیل‌ها ساختار مشخصی دارند: سلام رسمی، معرفی خود و موضوع، شرح مشکل یا درخواست، درخواست پایانی و خداحافظی رسمی."
      },
      {
        type: "table",
        title: "بخش‌های یک ایمیل رسمی آلمانی",
        rows: [
          { de: "Sehr geehrte Damen und Herren,", fa: "خانم‌ها و آقایان محترم (وقتی نام گیرنده را نمی‌دانید)" },
          { de: "Sehr geehrter Herr Müller, / Sehr geehrte Frau Schmidt,", fa: "جناب آقای مولر / سرکار خانم اشمیت" },
          { de: "hiermit möchte ich Ihnen mitteilen, dass...", fa: "بدین‌وسیله می‌خواهم به شما اطلاع دهم که..." },
          { de: "Ich würde mich freuen, wenn Sie mir helfen könnten.", fa: "خوشحال می‌شوم اگر بتوانید به من کمک کنید." },
          { de: "Für weitere Informationen stehe ich Ihnen gerne zur Verfügung.", fa: "برای اطلاعات بیشتر در خدمت شما هستم." },
          { de: "Mit freundlichen Grüßen", fa: "با احترام (پایان ایمیل رسمی)" }
        ]
      },
      {
        type: "text",
        title: "۲. تکنیک‌های صحبت کردن B1 (Redemittel)",
        text: "در امتحان شفاهی B1 از شما انتظار می‌رود که بتوانید نظر بدهید، موافقت/مخالفت کنید و دلیل بیاورید. همچنین بتوانید جمع‌بندی کنید."
      },
      {
        type: "table",
        title: "عبارات طلایی برای صحبت کردن",
        rows: [
          { de: "Meiner Meinung nach...", fa: "به نظر من..." },
          { de: "Ich bin der Meinung, dass...", fa: "من این نظر را دارم که..." },
          { de: "Ich stimme zu / Ich stimme nicht zu.", fa: "موافقم / مخالفم." },
          { de: "Einerseits... andererseits...", fa: "از یک طرف... از طرف دیگر..." },
          { de: "Ein Beispiel dafür ist...", fa: "یک مثال برای این موضوع..." },
          { de: "Zusammenfassend kann man sagen, dass...", fa: "به طور خلاصه می‌توان گفت که..." },
          { de: "Das ist eine gute Frage. Lass mich kurz nachdenken.", fa: "این سوال خوبی است. بگذار کوتاه فکر کنم." },
          { de: "Abschließend möchte ich sagen...", fa: "در پایان می‌خواهم بگویم..." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم درباره بخش نوشتن B1",
        text: "در بخش Schreiben شما باید حدود ۸۰ کلمه بنویسید. نکته کلیدی: حتی اگر چند اشتباه گرامری داشته باشید، اما ساختار ایمیل درست باشد و پیام شما قابل فهم باشد، نمره بالایی می‌گیرید. هرگز ایمیل رسمی را با «Hallo» شروع نکنید!"
      },
      {
        type: "interactive_quiz",
        title: "آزمون: مهارت‌های نوشتن و صحبت B1",
        questions: [
          {
            question: "در یک ایمیل رسمی آلمانی، اگر نام گیرنده را نمی‌دانید، چگونه شروع می‌کنید؟",
            questionDe: "Wie beginnt man eine formelle E-Mail ohne Namen?",
            options: [
              { text: "Hallo!", isCorrect: false },
              { text: "Sehr geehrte Damen und Herren,", isCorrect: true },
              { text: "Lieber Freund,", isCorrect: false },
              { text: "Hi zusammen,", isCorrect: false }
            ],
            explanation: "درست است! وقتی نام گیرنده را نمی‌دانید، از «Sehr geehrte Damen und Herren» استفاده می‌کنید."
          },
          {
            question: "کدام عبارت برای خلاصه‌کردن یک نظر در پایان مونولوگ مناسب است؟",
            questionDe: "Welches Redemittel passt für die Zusammenfassung?",
            options: [
              { text: "Ich weiß nicht.", isCorrect: false },
              { text: "Zusammenfassend kann man sagen, dass...", isCorrect: true },
              { text: "Tschüss!", isCorrect: false },
              { text: "Na ja...", isCorrect: false }
            ],
            explanation: "آفرین! «Zusammenfassend» بهترین راه برای نتیجه‌گیری در امتحان B1 است."
          },
          {
            question: "«Einerseits... andererseits...» برای چه کاری استفاده می‌شود؟",
            questionDe: "Wofür benutzt man «Einerseits... andererseits...»?",
            options: [
              { text: "برای سلام کردن", isCorrect: false },
              { text: "برای بحث دوطرفه و بررسی مزایا و معایب", isCorrect: true },
              { text: "برای خداحافظی", isCorrect: false },
              { text: "برای عذرخواهی", isCorrect: false }
            ],
            explanation: "این عبارت برای بررسی دو جنبه مختلف یک موضوع استفاده می‌شود."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین ساختار ایمیل و صحبت",
        instruction: "عبارت مناسب را در جای خالی بنویسید.",
        blanks: [
          { sentence: "برای شروع ایمیل رسمی بدون نام: Sehr geehrte _______ und Herren,", answer: "Damen", hint: "خانم‌ها" },
          { sentence: "برای ابراز نظر: _______ Meinung nach ist das wichtig.", answer: "Meiner", hint: "به نظر من" },
          { sentence: "برای نتیجه‌گیری: Zusammenfassend kann man _______, dass...", answer: "sagen", hint: "گفتن" },
          { sentence: "برای پایان ایمیل رسمی: Mit _______ Grüßen", answer: "freundlichen", hint: "با احترام" },
          { sentence: "برای مخالفت مؤدبانه: Ich stimme _______ zu, aber...", answer: "Ihnen", hint: "با شما" },
          { sentence: "برای معرفی خود در ایمیل: hiermit _______ ich Ihnen mitteilen, dass...", answer: "möchte", hint: "می‌خواهم" },
          { sentence: "برای بررسی دوطرفه: _______, andererseits gibt es auch Vorteile.", answer: "Einerseits", hint: "از یک طرف" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "لغات نامه‌نگاری و صحبت (Briefsprache & Sprechmittel)",
        words: [
          { de: "hiermit", fa: "بدین‌وسیله", ipa: "[ˈhiːɐ̯mɪt]", article: "-", plural: "-", examples: [{ de: "Hiermit möchte ich mich für Ihre Hilfe bedanken.", fa: "بدین‌وسیله می‌خواهم از کمک شما تشکر کنم." }] },
          { de: "die Beschwerde", fa: "شکایت", ipa: "[bəˈʃveːɐ̯də]", article: "die", plural: "die Beschwerden", examples: [{ de: "Ich möchte eine Beschwerde einreichen.", fa: "من می‌خواهم یک شکایت ثبت کنم." }] },
          { de: "zur Verfügung stehen", fa: "در خدمت بودن", ipa: "[t͡suːɐ̯ fɛɐ̯ˈfyːɡʊŋ ˈʃteːən]", article: "-", plural: "-", conjugation: { ich: "stehe zur Verfügung", du: "stehst zur Verfügung", er: "steht zur Verfügung", wir: "stehen zur Verfügung", ihr: "steht zur Verfügung", sie: "stehen zur Verfügung" }, examples: [{ de: "Für Rückfragen stehe ich Ihnen gerne zur Verfügung.", fa: "برای سوالات بیشتر در خدمت شما هستم." }] },
          { de: "die Meinung", fa: "نظر / عقیده", ipa: "[ˈmaɪ̯nʊŋ]", article: "die", plural: "die Meinungen", examples: [{ de: "Jeder hat eine andere Meinung.", fa: "هرکسی نظر متفاوتی دارد." }] },
          { de: "zustimmen (+Dat)", fa: "موافقت کردن", ipa: "[ˈt͡suːˌʃtɪmən]", article: "-", plural: "-", conjugation: { ich: "stimme zu", du: "stimmst zu", er: "stimmt zu", wir: "stimmen zu", ihr: "stimmt zu", sie: "stimmen zu" }, examples: [{ de: "Ich stimme Ihnen zu.", fa: "موافقم." }] },
          { de: "widersprechen (+Dat)", fa: "مخالفت کردن", ipa: "[ˈviːdɐˌʃpʁɛçn̩]", article: "-", plural: "-", conjugation: { ich: "widerspreche", du: "widersprichst", er: "widerspricht", wir: "widersprechen", ihr: "widersprecht", sie: "widersprechen" }, examples: [{ de: "Ich muss Ihnen leider widersprechen.", fa: "متأسفانه باید با شما مخالفت کنم." }] },
          { de: "der Ratschlag", fa: "توصیه / پند", ipa: "[ˈʁaːtˌʃlaːk]", article: "der", plural: "die Ratschläge", examples: [{ de: "Ich habe einen guten Ratschlag für Sie.", fa: "یک توصیه خوب برای شما دارم." }] },
          { de: "vorschlagen", fa: "پیشنهاد دادن", ipa: "[ˈfoːɐ̯ˌʃlaːɡn̩]", article: "-", plural: "-", conjugation: { ich: "schlage vor", du: "schlägst vor", er: "schlägt vor", wir: "schlagen vor", ihr: "schlagt vor", sie: "schlagen vor" }, examples: [{ de: "Ich schlage vor, dass wir morgen treffen.", fa: "پیشنهاد می‌دهم فردا ملاقات کنیم." }] },
          { de: "sich beschweren über (+Akk)", fa: "شکایت کردن از", ipa: "[bəˈʃveːʁən]", article: "-", plural: "-", conjugation: { ich: "beschwere mich", du: "beschwerst dich", er: "beschwert sich", wir: "beschweren uns", ihr: "beschwert euch", sie: "beschweren sich" }, examples: [{ de: "Ich möchte mich über den Lärm beschweren.", fa: "می‌خواهم از سروصدا شکایت کنم." }] },
          { de: "die Erstattung", fa: "بازپرداخت", ipa: "[ɛɐ̯ˈʃtatʊŋ]", article: "die", plural: "die Erstattungen", examples: [{ de: "Ich bitte um eine Erstattung.", fa: "درخواست بازپرداخت دارم." }] },
          { de: "die Rückmeldung", fa: "بازخورد / پاسخ", ipa: "[ˈʁʏkˌmɛldʊŋ]", article: "die", plural: "die Rückmeldungen", examples: [{ de: "Ich freue mich auf Ihre Rückmeldung.", fa: "منتظر پاسخ شما هستم." }] },
          { de: "berücksichtigen", fa: "در نظر گرفتن", ipa: "[bəˈʁʏkˌzɪçtɪɡn̩]", article: "-", plural: "-", conjugation: { ich: "berücksichtige", du: "berücksichtigst", er: "berücksichtigt", wir: "berücksichtigen", ihr: "berücksichtigt", sie: "berücksichtigen" }, examples: [{ de: "Bitte berücksichtigen Sie meine Bitte.", fa: "لطفاً درخواستم را در نظر بگیرید." }] },
          { de: "ausführlich", fa: "مفصل / جامع", ipa: "[ˈaʊ̯sˌfyːɐ̯lɪç]", article: "-", plural: "-", examples: [{ de: "Bitte erklären Sie das ausführlich.", fa: "لطفاً مفصل توضیح دهید." }] },
          { de: "zuständig", fa: "مسئول / صلاحیت‌دار", ipa: "[ˈt͡suːˌʃtɛndɪç]", article: "-", plural: "-", examples: [{ de: "Wer ist zuständig für diese Frage?", fa: "چه کسی مسئول این سوال است؟" }] },
          { de: "der Ansprechpartner", fa: "فرد تماس / مسئول", ipa: "[ˈaːnˌʃpʁɛçˌpaʁtnɐ]", article: "der", plural: "die Ansprechpartner", examples: [{ de: "Frau Weber ist Ihre Ansprechpartnerin.", fa: "خانم وبر فرد تماس شماست." }] },
          { de: "fristgerecht", fa: "در مهلت مقرر", ipa: "[ˈfʁɪstɡəˌʁɛçt]", article: "-", plural: "-", examples: [{ de: "Bitte senden Sie die Bewerbung fristgerecht.", fa: "لطفاً درخواست را در مهلت مقرر بفرستید." }] },
          { de: "die Begründung", fa: "دلیل / توجیه", ipa: "[bəˈɡʁyːndʊŋ]", article: "die", plural: "die Begründungen", examples: [{ de: "Ich brauche eine Begründung.", fa: "به یک دلیل نیاز دارم." }] },
          { de: "abschließend", fa: "در پایان / نهایتاً", ipa: "[ˈaːpˌʃliːsənt]", article: "-", plural: "-", examples: [{ de: "Abschließend möchte ich Ihnen danken.", fa: "در پایان می‌خواهم از شما تشکر کنم." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Eine formelle E-Mail\n\nSehr geehrte Damen und Herren,\n\nhiermit möchte ich mich für den Deutschkurs bedanken, den ich letzte Woche besucht habe. Der Kurs war sehr hilfreich und die Lehrerin war sehr kompetent.\n\nAllerdings habe ich eine kleine Beschwerde: Der Kursraum war zu klein für so viele Teilnehmer. Manchmal war es sehr laut und ich konnte die Lehrerin nicht gut hören.\n\nIch würde mich freuen, wenn Sie bei zukünftigen Kursen größere Räume buchen könnten.\n\nFür Rückfragen stehe ich Ihnen gerne zur Verfügung.\n\nMit freundlichen Grüßen\nAli Mohammadi",
      translation: "یک ایمیل رسمی\n\nخانم‌ها و آقایان محترم،\n\nبدین‌وسیله می‌خواهم از دوره آلمانی تشکر کنم که هفته گذشته شرکت کردم. دوره بسیار مفید بود و معلم بسیار باصلاحیت بود.\n\nبا این حال یک شکایت کوچک دارم: کلاس برای این تعداد شرکت‌کننده خیلی کوچک بود. گاهی خیلی بلند بود و نمی‌توانستم معلم را خوب بشنوم.\n\nخوشحال می‌شوم اگر برای دوره‌های آینده اتاق‌های بزرگ‌تری رزرو کنید.\n\nبرای سوالات بیشتر در خدمت شما هستم.\n\nبا احترام\nعلی محمدی",
      questions: [
        { question: "علی در این ایمیل از چه چیزی شکایت می‌کند؟", answer: "او شکایت می‌کند که کلاس برای تعداد شرکت‌کننده‌ها خیلی کوچک بود." },
        { question: "علی چه پیشنهادی می‌دهد؟", answer: "او پیشنهاد می‌دهد که برای کلاس‌های آینده اتاق‌های بزرگ‌تری رزرو کنند." },
        { question: "جمله «Für Rückfragen stehe ich Ihnen gerne zur Verfügung» یعنی چه؟", answer: "یعنی «برای سوالات بیشتر در خدمت شما هستم» — یک عبارت استاندارد در ایمیل‌های رسمی." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن یک ایمیل رسمی شکایت (Beschwerde-E-Mail)",
      prompt: "فرض کنید در یک هتل اقامت داشتید و مشکلاتی داشتید. یک ایمیل رسمی به مدیریت هتل بنویسید (حدود ۸۰ کلمه).",
      steps: [
        { title: "شروع رسمی", text: "با عبارت رسمی شروع کنید.", example: { de: "Sehr geehrte Damen und Herren,", fa: "خانم‌ها و آقایان محترم..." } },
        { title: "معرفی خود و موضوع", text: "بگویید کی بودید و مشکل چیست.", example: { de: "Ich war vom 10. bis 15. März in Ihrem Hotel. Leider gab es einige Probleme.", fa: "من از ۱۰ تا ۱۵ مارس در هتل شما بودم. متأسفانه مشکلاتی وجود داشت." } },
        { title: "شرح مشکلات", text: "مشکلات را لیست کنید.", example: { de: "Zum Beispiel funktionierte die Heizung nicht. Außerdem war das Zimmer nicht sauber.", fa: "مثلاً گرمایش کار نمی‌کرد. به علاوه اتاق تمیز نبود." } },
        { title: "درخواست و پایان", text: "درخواست و پایان رسمی.", example: { de: "Ich würde mich freuen, wenn Sie mir helfen könnten. Mit freundlichen Grüßen", fa: "خوشحال می‌شوم اگر بتوانید کمک کنید. با احترام" } }
      ],
      modelAnswer: "Sehr geehrte Damen und Herren,\n\nhiermit möchte ich mich über meinen Aufenthalt beschweren. Ich war vom 10. bis 15. März in Zimmer 205.\n\nLeider funktionierte die Heizung nicht und es war sehr kalt. Außerdem war das Bad nicht sauber genug. Das Frühstück war auch nicht frisch.\n\nIch würde mich freuen, wenn Sie mir eine Erstattung anbieten könnten.\n\nFür Rückfragen stehe ich Ihnen gerne zur Verfügung.\n\nMit freundlichen Grüßen\nAli Mohammadi"
    }
  ],

  listening: [
    {
      title: "تمرین دیکته — جملات رسمی",
      instruction: "به جملات زیر گوش دهید و بنویسید (Dictation). این جملات سبک ایمیل رسمی دارند.",
      sentences: [
        { de: "Hiermit möchte ich Ihnen mitteilen, dass ich krank bin.", fa: "بدین‌وسیله می‌خواهم به شما اطلاع دهم که مریض هستم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Hiermit möchte ich Ihnen mitteilen, dass ich krank bin" },
        { de: "Ich würde mich freuen, wenn Sie mir helfen könnten.", fa: "خوشحال می‌شوم اگر بتوانید به من کمک کنید.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich würde mich freuen, wenn Sie mir helfen könnten" },
        { de: "Für Rückfragen stehe ich Ihnen gerne zur Verfügung.", fa: "برای سوالات بیشتر در خدمت شما هستم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Für Rückfragen stehe ich Ihnen gerne zur Verfügung" },
        { de: "Meiner Meinung nach ist das die beste Lösung.", fa: "به نظر من این بهترین راه‌حل است.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Meiner Meinung nach ist das die beste Lösung" },
        { de: "Zusammenfassend kann man sagen, dass Deutsch nicht so schwer ist.", fa: "به طور خلاصه می‌توان گفت که آلمانی آنقدر سخت نیست.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Zusammenfassend kann man sagen, dass Deutsch nicht so schwer ist" },
        { de: "Ich stimme Ihnen zu, aber andererseits gibt es auch Probleme.", fa: "موافقم، اما از طرف دیگر مشکلاتی هم هست.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich stimme Ihnen zu, aber andererseits gibt es auch Probleme" },
        { de: "Die Bewerbung muss fristgerecht eingereicht werden.", fa: "درخواست باید در مهلت مقرر ارسال شود.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Die Bewerbung muss fristgerecht eingereicht werden" },
        { de: "Ich möchte mich für Ihre Rückmeldung bedanken.", fa: "می‌خواهم از بازخورد شما تشکر کنم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich möchte mich für Ihre Rückmeldung bedanken" }
      ]
    }
  ],

  speaking: [
    {
      title: "شبیه‌سازی امتحان شفاهی B1 — Monolog",
      pattern: "Heute spreche ich über das Thema ...\nMeiner Meinung nach ...\nEin Beispiel dafür ist ...\nEinerseits ..., andererseits ...\nZusammenfassend kann man sagen, dass ...\nAbschließend möchte ich sagen, dass ...",
      exercise: "۱. یک موضوع انتخاب کنید: Umwelt, Reisen, Gesundheit.\n۲. ۳ دقیقه بدون وقفه صحبت کنید.\n۳. ساختار: نظر → دلیل + مثال → بررسی دوطرفه → نتیجه‌گیری.\n۴. صدای خود را ضبط کنید و گوش دهید."
    },
    {
      title: "شبیه‌سازی امتحان شفاهی B1 — Dialog",
      pattern: "A: Ich schlage vor, dass wir ...\nB: Das ist eine gute Idee, aber ...\nA: Einerseits hast du recht, andererseits ...\nB: Lass uns einen Kompromiss finden.",
      exercise: "با یک دوست (یا با خودتان) یک مکالمه ۳ دقیقه‌ای درباره برنامه‌ریزی یک سفر گروهی انجام دهید. از Redemittel استفاده کنید و هر دو نفر باید نظر بدهند."
    }
  ],

  cultureTip: "در امتحان B1 (Goethe/Telc)، بخش Schreiben شامل نوشتن یک ایمیل رسمی (حدود ۸۰ کلمه) است. نکته مهم: اگر چند اشتباه گرامری داشته باشید ولی ساختار ایمیل درست باشد و پیام شما قابل فهم باشد، نمره بالایی می‌گیرید. در بخش Sprechen، آرام و واضح صحبت کنید. اگر سوالی را نفهمیدید، مؤدبانه بخواهید تکرار کنند: «Könnten Sie die Frage bitte wiederholen?»",

  examData: {
    questions: [
      { question: "در ایمیل رسمی آلمانی، بعد از سلام رسمی چه می‌نویسید؟", options: ["هیچی", "Hiermit möchte ich Ihnen mitteilen, dass...", "Na, wie geht's?", "Ich bin Ali."], answer: 1 },
      { question: "کدام عبارت برای پایان ایمیل رسمی درست است؟", options: ["Tschüss!", "Bis bald!", "Mit freundlichen Grüßen", "Ciao!"], answer: 2 },
      { question: "برای مخالفت مؤدبانه، کدام عبارت درست است؟", options: ["Nein, du hast Unrecht!", "Ich stimme Ihnen nicht zu, weil...", "Falsch!", "Quatsch!"], answer: 1 },
      { question: "«Zusammenfassend kann man sagen» در کجا استفاده می‌شود؟", options: ["شروع مکالمه", "معرفی خود", "نتیجه‌گیری", "سلام کردن"], answer: 2 },
      { question: "برای خریدن وقت فکر کردن در امتحان شفاهی، کدام عبارت بهتر است؟", options: ["(سکوت)", "Ich weiß nicht.", "Das ist eine gute Frage. Lass mich kurz nachdenken.", "Nein."], answer: 2 },
      { question: "«Ich möchte mich beschweren über...» یعنی چه؟", options: ["تشکر می‌کنم", "شکایت می‌کنم", "سفارش می‌دهم", "سلام می‌کنم"], answer: 1 },
      { question: "«Einerseits... andererseits...» یعنی چه؟", options: ["اول... بعد...", "از یک طرف... از طرف دیگر...", "بالا... پایین...", "اینجا... آنجا..."], answer: 1 },
      { question: "در ایمیل شکایت، بعد از توضیح مشکل چه می‌نویسید؟", options: ["Tschüss!", "Ich würde mich freuen, wenn...", "Hallo!", "Danke!"], answer: 1 },
      { question: "«fristgerecht» یعنی چه؟", options: ["رایگان", "در مهلت مقرر", "فوری", "دیر"], answer: 1 },
      { question: "کدام یک Redemittel برای معرفی موضوع در مونولوگ نیست؟", options: ["Heute spreche ich über...", "Meiner Meinung nach...", "Tschüss!", "Ein Beispiel dafür ist..."], answer: 2 }
    ]
  }
};
