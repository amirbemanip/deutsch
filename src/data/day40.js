export const day40Data = {
  title: "روز ۴۰: نگارش رسمی - ایمیل، نامه، شکایت و درخواست",
  objective: "یادگیری نگارش رسمی آلمانی شامل ایمیل اداری، نامه رسمی، نامه شکایت و درخواست شغلی",
  level: "B1",

  grammarData: {
    subtitle: "نگارش رسمی آلمانی: ساختار، عبارات و قوانین",
    content: [
      {
        type: "text",
        title: "ساختار نامه و ایمیل رسمی آلمانی",
        text: "نامه رسمی آلمانی شامل بخش‌های زیر است: ۱) آدرس فرستنده (Absender) - بالا سمت چپ یا حذف در ایمیل. ۲) آدرس گیرنده (Empfänger) - سمت چپ. ۳) تاریخ (Datum) - سمت راست با فرمت Ort, den TT.MM.JJJJ. ۴) موضوع (Betreff) - با کلمه Betreff:. ۵) سلام (Anrede) - Sehr geehrte Frau/Herr + نام خانوادگی. ۶) متن اصلی. ۷) پایان‌نامه (Grußformel) - Mit freundlichen Grüßen. ۸) امضا."
      },
      {
        type: "table",
        title: "فرمت تاریخ و عبارات رسمی",
        rows: [
          { de: "Berlin, den 15. März 2024", fa: "برلین، ۱۵ مارس ۲۰۲۴" },
          { de: "Sehr geehrte Frau Müller,", fa: "خانم مولر محترم،" },
          { de: "Sehr geehrter Herr Schmidt,", fa: "آقای اشمیت محترم،" },
          { de: "Sehr geehrte Damen und Herren,", fa: "خانم‌ها و آقایان محترم، (وقتی نام شخص نامشخص است)" },
          { de: "Mit freundlichen Grüßen", fa: "با احترام (پایان‌نامه رسمی)" },
          { de: "Hochachtungsvoll", fa: "با کمال احترام (خیلی رسمی)" },
          { de: "Ich schreibe Ihnen bezüglich...", fa: "در رابطه با... به شما نامه می‌نویسم." },
          { de: "Ich möchte Sie bitten, ...", fa: "می‌خواستم از شما درخواست کنم..." }
        ]
      },
      {
        type: "text",
        title: "ساختار نامه شکایت (Beschwerdebrief)",
        text: "نامه شکایت شامل: ۱) معرفی مشکل و زمان خرید/اتفاق. ۲) توضیح دقیق مشکل. ۳) درخواست مشخص (جبران، بازپرداخت، تعمیر). ۴) مهلت زمانی برای پاسخ. لحن باید مؤدبانه ولی قاطع باشد. از Konjunktiv II برای مؤدب بودن استفاده کنید."
      },
      {
        type: "examples",
        title: "عبارات کلیدی نامه شکایت",
        items: [
          { de: "Ich möchte mich über ... beschweren.", fa: "می‌خواهم از ... شکایت کنم." },
          { de: "Leider muss ich Ihnen mitteilen, dass...", fa: "متأسفانه باید به شما اطلاع بدهم که..." },
          { de: "Ich bin mit dem Produkt nicht zufrieden.", fa: "من از محصول راضی نیستم." },
          { de: "Ich bitte Sie, das Problem zu lösen.", fa: "از شما می‌خواهم مشکل را حل کنید." },
          { de: "Ich erwarte eine Antwort innerhalb von zwei Wochen.", fa: "انتظار پاسخ ظرف دو هفته را دارم." },
          { de: "Ich wäre Ihnen dankbar, wenn Sie sich darum kümmern könnten.", fa: "ممنون می‌شوم اگر بتوانید به این موضوع رسیدگی کنید." },
          { de: "Anbei sende ich Ihnen die Kopie der Rechnung.", fa: "در پیوست کپی فاکتور را برایتان ارسال می‌کنم." }
        ]
      },
      {
        type: "text",
        title: "قالب ایمیل رسمی",
        text: "یک ایمیل رسمی همانند نامه است اما در محیط دیجیتال. نکات: موضوع (Betreff) باید واضح و کوتاه باشد. اگر گیرنده را نمی‌شناسید از Sehr geehrte Damen und Herren استفاده کنید. همیشه با نام و عنوان شغلی امضا کنید."
      },
      {
        type: "alert",
        title: "نکات مهم نگارش رسمی آلمانی",
        text: "۱) هرگز از نام کوچک استفاده نکنید (نه: Sehr geehrte Lisa). ۲) همیشه از Sie (شما رسمی) استفاده کنید، نه du. ۳) افعال Konjunktiv II برای مؤدب بودن (könnte, würde). ۴) در آلمان نامه‌های رسمی معمولاً با Mit freundlichen Grüßen تمام می‌شوند نه Liebe Grüße. ۵) حتماً شماره پرونده یا شماره سفارش (Aktenzeichen / Bestellnummer) را ذکر کنید."
      },
      {
        type: "interactive_quiz",
        title: "آزمون نگارش رسمی",
        questions: [
          {
            question: "پایان‌نامه رسمی مناسب کدام است؟",
            questionDe: "Welche Grußformel ist formal korrekt?",
            options: [
              { text: "Liebe Grüße", isCorrect: false },
              { text: "Mit freundlichen Grüßen", isCorrect: true },
              { text: "Tschüss", isCorrect: false }
            ],
            explanation: "Mit freundlichen Grüßen پایان‌نامه استاندارد رسمی آلمانی است."
          },
          {
            question: "کدام جمله مؤدبانه‌ترین درخواست است؟",
            questionDe: "Welche Bitte ist am höflichsten?",
            options: [
              { text: "Senden Sie mir das Paket!", isCorrect: false },
              { text: "Ich bitte Sie, mir das Paket zu senden.", isCorrect: false },
              { text: "Ich wäre Ihnen dankbar, wenn Sie mir das Paket senden könnten.", isCorrect: true }
            ],
            explanation: "Konjunktiv II (wäre, könnte) مؤدبانه‌ترین شکل درخواست در نامه رسمی است."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین نگارش رسمی",
        instruction: "قسمت‌های خالی را با عبارات مناسب پر کنید.",
        blanks: [
          { sentence: "_______ Frau Schmidt, ich schreibe Ihnen bezüglich meiner Bestellung.", answer: "Sehr geehrte", hint: "سلام رسمی به زن" },
          { sentence: "Ich _______ mich über die defekte Waschmaschine _______.", answer: "möchte ... beschweren", hint: "فعل شکایت کردن" },
          { sentence: "_______ sende ich Ihnen die Rechnung.", answer: "Anbei", hint: "در پیوست" },
          { sentence: "Ich _______ eine Antwort innerhalb von zwei Wochen.", answer: "erwarte", hint: "انتظار دارم" },
          { sentence: "Ich _______ Ihnen _______, wenn Sie sich darum kümmern könnten.", answer: "wäre ... dankbar", hint: "Konjunktiv II مؤدبانه" },
          { sentence: "_______ Grüßen", answer: "Mit freundlichen", hint: "پایان‌نامه رسمی" },
          { sentence: "Ich schreibe Ihnen _______ der Stornierung meiner Reise.", answer: "bezüglich", hint: "در رابطه با" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "نگارش رسمی (Formelles Schreiben)",
        words: [
          { de: "die Beschwerde", fa: "شکایت", ipa: "[bəˈʃveːɐ̯də]", article: "die", plural: "die Beschwerden", examples: [{ de: "Ich habe eine Beschwerde.", fa: "من یک شکایت دارم." }] },
          { de: "die Rechnung", fa: "فاکتور / صورت‌حساب", ipa: "[ˈʁeçnʊŋ]", article: "die", plural: "die Rechnungen", examples: [{ de: "Könnten Sie mir die Rechnung schicken?", fa: "می‌توانید فاکتور را بفرستید؟" }] },
          { de: "die Stornierung", fa: "لغو (رزرو/سفارش)", ipa: "[ʃtɔʁniˈʁʊŋ]", article: "die", plural: "die Stornierungen", examples: [{ de: "Ich möchte eine Stornierung beantragen.", fa: "می‌خواهم درخواست لغو بدهم." }] },
          { de: "die Frist", fa: "مهلت / ضرب‌الاجل", ipa: "[fʁɪst]", article: "die", plural: "die Fristen", examples: [{ de: "Die Frist ist am 30. April.", fa: "مهلت ۳۰ آوریل است." }] },
          { de: "der Antrag", fa: "درخواست / تقاضا", ipa: "[ˈanˌtʁaːk]", article: "der", plural: "die Anträge", examples: [{ de: "Ich stelle einen Antrag auf Urlaub.", fa: "درخواست مرخصی می‌دهم." }] }
        ]
      },
      {
        title: "واژگان اداری و تجاری (Büro und Geschäft)",
        words: [
          { de: "die Bewerbung", fa: "درخواست شغل / استخدام", ipa: "[bəˈvɛʁbʊŋ]", article: "die", plural: "die Bewerbungen", examples: [{ de: "Ich schicke meine Bewerbung.", fa: "درخواست شغلم را می‌فرستم." }] },
          { de: "der Lebenslauf", fa: "رزومه / سوابق", ipa: "[ˈleːbn̩sˌlaʊ̯f]", article: "der", plural: "die Lebensläufe", examples: [{ de: "Mein Lebenslauf liegt bei.", fa: "رزومه‌ام پیوست است." }] },
          { de: "das Anschreiben", fa: "نامه درخواست شغل", ipa: "[ˈanˌʃʁaɪ̯bn̩]", article: "das", plural: "die Anschreiben", examples: [{ de: "Das Anschreiben sollte kurz sein.", fa: "نامه درخواست باید کوتاه باشد." }] },
          { de: "die Gehaltsvorstellung", fa: "انتظار حقوق", ipa: "[ɡəˈhaltsfɔɐ̯ˌʃtɛlʊŋ]", article: "die", plural: "die Gehaltsvorstellungen", examples: [{ de: "Meine Gehaltsvorstellung liegt bei 3.000 Euro.", fa: "انتظار حقوق من ۳۰۰۰ یورو است." }] },
          { de: "das Vorstellungsgespräch", fa: "مصاحبه شغلی", ipa: "[foːɐ̯ˈʃtɛlʊŋsɡəˌʃpʁɛç]", article: "das", plural: "die Vorstellungsgespräche", examples: [{ de: "Wann ist das Vorstellungsgespräch?", fa: "مصاحبه کی است؟" }] },
          { de: "die Kündigung", fa: "اخراج / فسخ قرارداد", ipa: "[ˈkʏndɪɡʊŋ]", article: "die", plural: "die Kündigungen", examples: [{ de: "Er hat seine Kündigung erhalten.", fa: "او اخطار اخراج دریافت کرده." }] },
          { de: "das Angebot", fa: "پیشنهاد (قیمت/خدمات)", ipa: "[ˈʔanɡəboːt]", article: "das", plural: "die Angebote", examples: [{ de: "Ich bitte um ein Angebot.", fa: "لطفاً پیشنهاد قیمت بدهید." }] },
          { de: "die Bestellung", fa: "سفارش", ipa: "[bəˈʃtɛlʊŋ]", article: "die", plural: "die Bestellungen", examples: [{ de: "Meine Bestellung ist noch nicht angekommen.", fa: "سفارش من هنوز نرسیده." }] },
          { de: "der Empfänger", fa: "گیرنده", ipa: "[ɛmˈpfɛŋɐ]", article: "der", plural: "die Empfänger", examples: [{ de: "Bitte geben Sie den Empfänger an.", fa: "لطفاً گیرنده را مشخص کنید." }] },
          { de: "das Aktenzeichen", fa: "شماره پرونده", ipa: "[ˈaktn̩ˌtsaɪ̯çən]", article: "das", plural: "die Aktenzeichen", examples: [{ de: "Bitte geben Sie Ihr Aktenzeichen an.", fa: "لطفاً شماره پرونده خود را بدهید." }] },
          { de: "die Unterschrift", fa: "امضا", ipa: "[ˈʊntɐˌʃʁɪft]", article: "die", plural: "die Unterschriften", examples: [{ de: "Bitte setzen Sie hier Ihre Unterschrift.", fa: "لطفاً اینجا امضا کنید." }] },
          { de: "der Vertrag", fa: "قرارداد", ipa: "[ˈfɛɐ̯tʁaːk]", article: "der", plural: "die Verträge", examples: [{ de: "Bitte lesen Sie den Vertrag genau.", fa: "لطفاً قرارداد را دقیق بخوانید." }] },
          { de: "die Bestätigung", fa: "تأیید / رسید", ipa: "[bəˈʃtɛːtɪɡʊŋ]", article: "die", plural: "die Bestätigungen", examples: [{ de: "Ich warte auf Ihre Bestätigung.", fa: "منتظر تأیید شما هستم." }] },
          { de: "zuständig für", fa: "مسئول", ipa: "[ˈt͡suːˌʃtɛndɪç fyːɐ̯]", article: "-", plural: "-", examples: [{ de: "Wer ist dafür zuständig?", fa: "چه کسی مسئول این است؟" }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein formeller Beschwerdebrief\n\nMaria Schneider\nMusterstraße 12\n10115 Berlin\n\nTechShop GmbH\nKundenservice\nHauptstraße 5\n80331 München\n\nBerlin, den 20. März 2024\n\nBetreff: Beschwerde über defektes Produkt - Bestellnummer 12345\n\nSehr geehrte Damen und Herren,\n\nam 10. März 2024 habe ich in Ihrem Online-Shop einen Laptop bestellt. Leider muss ich Ihnen mitteilen, dass das Gerät bei der Lieferung beschädigt war. Der Bildschirm hat einen Riss und der Laptop startet nicht.\n\nIch bitte Sie, das Problem schnellstmöglich zu lösen. Ich wäre Ihnen dankbar, wenn Sie mir entweder ein neues Gerät senden könnten oder den Kaufpreis erstatten würden.\n\nIch erwarte eine Antwort innerhalb von 14 Tagen.\n\nMit freundlichen Grüßen\nMaria Schneider",
      translation: "یک نامه شکایت رسمی\n\nبرلین، ۲۰ مارس ۲۰۲۴\nموضوع: شکایت درباره محصول معیوب - شماره سفارش ۱۲۳۴۵\n\nخانم‌ها و آقایان محترم،\n\nدر ۱۰ مارس ۲۰۲۴ از فروشگاه آنلاین شما یک لپ‌تاپ سفارش دادم. متأسفانه باید به شما اطلاع بدهم که دستگاه هنگام تحویل آسیب دیده بود. صفحه نمایش ترک دارد و لپ‌تاپ روشن نمی‌شود.\n\nاز شما می‌خواهم مشکل را در اسرع وقت حل کنید. ممنون می‌شوم اگر بتوانید یک دستگاه جدید بفرستید یا هزینه را بازپرداخت کنید.\n\nانتظار پاسخ ظرف ۱۴ روز را دارم.\n\nبا احترام\nماریا اشنایدر",
      questions: [
        { question: "ماریا چه مشکلی داشت؟", answer: "لپ‌تاپی که سفارش داده بود آسیب‌دیده رسید." },
        { question: "او چه درخواستی از شرکت دارد؟", answer: "یک دستگاه نو یا بازپرداخت پول." },
        { question: "او چه مهلتی داده است؟", answer: "۱۴ روز." },
        { question: "اگر پاسخی دریافت نکند چه کاری می‌کند؟", answer: "اقدامات قانونی انجام می‌دهد." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن نامه شکایت",
      prompt: "یک نامه شکایت رسمی ۱۰-۱۲ خطی بنویسید. مثلاً: شکایت از هتل، رستوران، یا محصول معیوب.",
      steps: [
        { title: "معرفی خود و موضوع", text: "نام، آدرس، موضوع، سلام رسمی", example: { de: "Sehr geehrte Damen und Herren, ich schreibe Ihnen bezüglich meines Aufenthalts in Ihrem Hotel.", fa: "محترماً، در رابطه با اقامتم در هتل شما می‌نویسم." } },
        { title: "شرح مشکل", text: "با جزئیات و تاریخ", example: { de: "Leider war das Zimmer nicht sauber und das Frühstück war kalt.", fa: "متأسفانه اتاق تمیز نبود و صبحانه سرد بود." } },
        { title: "درخواست و پایان", text: "درخواست مشخص + مهلت", example: { de: "Ich bitte Sie um eine Lösung. Mit freundlichen Grüßen", fa: "لطفاً راه‌حل ارائه دهید. با احترام" } }
      ],
      modelAnswer: "Sehr geehrte Damen und Herren,\n\nam 5. April 2024 habe ich zwei Nächte in Ihrem Hotel verbracht. Leider muss ich mich über mehrere Probleme beschweren.\n\nErstens war das Zimmer bei der Ankunft nicht sauber. Zweitens funktionierte die Heizung nicht, obwohl es draußen sehr kalt war. Drittens war das Personal nicht freundlich und hat meine Beschwerden ignoriert.\n\nIch habe 150 Euro pro Nacht bezahlt und erwarte eine angemessene Leistung. Ich wäre Ihnen dankbar, wenn Sie mir einen Teil des Geldes erstatten könnten.\n\nIch erwarte Ihre Antwort innerhalb von zwei Wochen.\n\nMit freundlichen Grüßen\nMax Mustermann"
    }
  ],

  listening: [
    {
      title: "گوش دادن: نگارش رسمی",
      instruction: "به جملات زیر گوش دهید و تکرار کنید.",
      sentences: [
        { de: "Sehr geehrte Damen und Herren.", fa: "خانم‌ها و آقایان محترم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Sehr geehrte Damen und Herren" },
        { de: "Ich schreibe Ihnen bezüglich meiner Bestellung.", fa: "در رابطه با سفارشم به شما نامه می‌نویسم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich schreibe Ihnen bezüglich meiner Bestellung" },
        { de: "Mit freundlichen Grüßen.", fa: "با احترام.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Mit freundlichen Grüßen" },
        { de: "Ich wäre Ihnen dankbar, wenn Sie helfen könnten.", fa: "ممنون می‌شوم اگر بتوانید کمک کنید.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich wäre Ihnen dankbar, wenn Sie helfen könnten" },
        { de: "Ich erwarte eine Antwort innerhalb von zwei Wochen.", fa: "انتظار پاسخ ظرف دو هفته را دارم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich erwarte eine Antwort innerhalb von zwei Wochen" }
      ]
    }
  ],

  speaking: [
    {
      title: "تماس تلفنی اداری",
      pattern: "Guten Tag, ich rufe an, weil... / Könnten Sie mir bitte helfen? / Ich möchte eine Beschwerde machen.",
      exercise: "تصور کنید با یک شرکت تلفنی تماس می‌گیرید تا شکایت کنید. مشکل: قبض اشتباه. از عبارات مؤدبانه استفاده کنید."
    }
  ],

  cultureTip: "در فرهنگ آلمانی، نگارش رسمی بسیار مهم است. آلمانی‌ها انتظار دارند نامه‌های اداری کاملاً مرتب، بدون غلط املایی و با ساختار صحیح باشند. استفاده از Sehr geehrte/r + نام خانوادگی الزامی است. هرگز در نامه رسمی از نام کوچک استفاده نکنید. در آلمان، شکایت کردن (beschweren) یک حق طبیعی است و شرکت‌ها موظف به پاسخگویی هستند.",

  examData: {
    questions: [
      { question: "پایان‌نامه رسمی درست کدام است؟", options: ["Tschüss!", "Liebe Grüße", "Mit freundlichen Grüßen", "Bis bald"], answer: 2 },
      { question: "کدام سلام رسمی درست است؟", options: ["Hallo Herr Schmidt", "Lieber Herr Schmidt", "Sehr geehrter Herr Schmidt", "Hallo zusammen"], answer: 2 },
      { question: "«Ich schreibe Ihnen bezüglich...» یعنی:؟", options: ["من به شما نامه می‌نویسم درباره...", "من شما را می‌شناسم.", "من منتظر شما هستم.", "من شکایت دارم."], answer: 0 },
      { question: "در نامه رسمی از کدام ضمیر استفاده می‌شود؟", options: ["du", "ihr", "Sie", "man"], answer: 2 },
      { question: "«Ich erwarte eine Antwort innerhalb von zwei Wochen» یعنی:؟", options: ["من جواب را فرستادم.", "من انتظار پاسخ ظرف دو هفته را دارم.", "من دو هفته پیش جواب دادم.", "من جواب ندادم."], answer: 1 },
      { question: "کدام شماره در نامه شکایت ذکر می‌شود؟", options: ["شماره تلفن", "شماره سفارش", "شماره کارت", "شماره منزل"], answer: 1 },
      { question: "«Anbei sende ich Ihnen...» یعنی:؟", options: ["در پیوست برایتان می‌فرستم...", "قبلاً برایتان فرستادم...", "لطفاً برایم بفرستید...", "فردا می‌فرستم..."], answer: 0 },
      { question: "«Mit freundlichen Grüßen» فارسی آن:", options: ["سلام گرم", "با تشکر", "با احترام", "خدا نگهدار"], answer: 2 }
    ]
  }
};
