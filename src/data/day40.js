export const day40Data = {
  title: "روز ۴۰: نگارش رسمی - ایمی'، نامه، شکایت و درخواست",
  objective: "یادگیری نگارش رسمی آ'مانی شام' ایمی' اداری، نامه رسمی، نامه شکایت و درخواست شغ'ی",

  grammarData: {
    subtitle: "نگارش رسمی آ'مانی: ساختار، عبارات و قوانین",
    content: [
      {
        type: "text",
        title: "۱. ساختار نامه و ایمی' رسمی آ'مانی",
        text: "نامه رسمی آ'مانی شام' بخش‌های زیر است: ۱) آدرس فرستنده (Absender) - با'ا سمت چپ یا حذف در ایمی'. ۲) آدرس گیرنده (Empfänger) - سمت چپ. ۳) تاریخ (Datum) - سمت راست با فرمت Ort, den TT.MM.JJJJ. ۴) موضوع (Betreff) - با ک'مه Betreff:. ۵) س'ام (Anrede) - Sehr geehrte Frau/Herr + نام خانوادگی. ۶) متن اص'ی. ۷) پایان‌نامه (Grußformel) - Mit freundlichen Grüßen. ۸) امضا."
      },
      {
        type: "table",
        title: "فرمت تاریخ و عبارات رسمی",
        rows: [
          { de: "Berlin, den 15. März 2024", fa: "بر'ین، ۱۵ مارس ۲۰۲۴" },
          { de: "Sehr geehrte Frau Müller,", fa: "خانم مو'ر محترم،" },
          { de: "Sehr geehrter Herr Schmidt,", fa: "آقای اشمیت محترم،" },
          { de: "Sehr geehrte Damen und Herren,", fa: "خانم‌ها و آقایان محترم، (وقتی نام شخص نامشخص است)" },
          { de: "Mit freundlichen Grüßen", fa: "با احترام (پایان‌نامه رسمی)" },
          { de: "Hochachtungsvoll", fa: "با کما' احترام (خی'ی رسمی)" },
          { de: "Ich schreibe Ihnen bezüglich...", fa: "در رابطه با... به شما نامه می‌نویسم." },
          { de: "Ich möchte Sie bitten, ...", fa: "می‌خواستم از شما درخواست کنم..." }
        ]
      },
      {
        type: "text",
        title: "۲. ساختار نامه شکایت (Beschwerdebrief)",
        text: "نامه شکایت شام': ۱) معرفی مشک' و زمان خرید/اتفاق. ۲) توضیح دقیق مشک'. ۳) درخواست مشخص (تعویض، بازپرداخت، تعمیر). ۴) مه'ت زمانی برای پاسخ. 'حن باید مؤدبانه و'ی قاطع باشد. از Konjunktiv II برای مؤدب بودن استفاده کنید."
      },
      {
        type: "examples",
        title: "عبارات ک'یدی نامه شکایت",
        items: [
          { de: "Ich möchte mich über ... beschweren.", fa: "می‌خواهم از ... شکایت کنم." },
          { de: "Leider muss ich Ihnen mitteilen, dass...", fa: "متأسفانه باید به شما اط'اع بدهم که..." },
          { de: "Ich bin mit dem Produkt nicht zufrieden.", fa: "من از محصو' راضی نیستم." },
          { de: "Ich bitte Sie, das Problem zu lösen.", fa: "از شما می‌خواهم مشک' را ح' کنید." },
          { de: "Ich erwarte eine Antwort innerhalb von zwei Wochen.", fa: "انتظار پاسخ ظرف دو هفته را دارم." },
          { de: "Ich wäre Ihnen dankbar, wenn Sie sich darum kümmern könnten.", fa: "ممنون می‌شوم اگر بتوانید به این موضوع رسیدگی کنید." },
          { de: "Anbei sende ich Ihnen die Kopie der Rechnung.", fa: "در پیوست کپی فاکتور را برایتان ارسا' می‌کنم." },
          { de: "Ich bitte um eine schnelle Lösung.", fa: "'طفاً سریع ح' کنید." }
        ]
      },
      {
        type: "text",
        title: "۳. قا'ب ایمی' رسمی",
        text: "یک ایمی' رسمی همانند نامه است اما در محیط دیجیتا'. نکات: موضوع (Betreff) باید واضح و کوتاه باشد. اگر گیرنده را نمی‌شناسید از Sehr geehrte Damen und Herren استفاده کنید. همیشه با نام و عنوان شغ'ی امضا کنید. در ایمی' معمو'اً آدرس فرستنده حذف می‌شود."
      },
      {
        type: "alert",
        title: "نکات مهم نگارش رسمی آ'مانی",
        text: "۱) هرگز از نام کوچک استفاده نکنید (نه: Sehr geehrte Lisa). ۲) همیشه از Sie (شما رسمی) استفاده کنید، نه du. ۳) فع'‌های Konjunktiv II برای مؤدب بودن (könnte, würde). ۴) در آ'مان نامه‌های رسمی معمو'اً با Mit freundlichen Grüßen تمام می‌شوند نه Liebe Grüße. ۵) حتماً شماره پرونده یا شماره سفارش (Aktenzeichen / Bestellnummer) را ذکر کنید."
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
            explanation: "Mit freundlichen Grüßen پایان‌نامه استاندارد رسمی آ'مانی است."
          },
          {
            question: "کدام جم'ه مؤدبانه‌ترین درخواست است؟",
            questionDe: "Welche Bitte ist am höflichsten?",
            options: [
              { text: "Senden Sie mir das Paket!", isCorrect: false },
              { text: "Ich bitte Sie, mir das Paket zu senden.", isCorrect: false },
              { text: "Ich wäre Ihnen dankbar, wenn Sie mir das Paket senden könnten.", isCorrect: true }
            ],
            explanation: "Konjunktiv II (wäre, könnte) مؤدبانه‌ترین شک' درخواست در نامه رسمی است."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین نگارش رسمی",
        instruction: "قسمت‌های خا'ی را با عبارات مناسب پر کنید.",
        blanks: [
          { sentence: "_______ Frau Schmidt, ich schreibe Ihnen bezüglich meiner Bestellung.", answer: "Sehr geehrte", hint: "س'ام رسمی به زن" },
          { sentence: "Ich _______ mich über die defekte Waschmaschine _______.", answer: "möchte ... beschweren", hint: "فع' شکایت کردن" },
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
          { de: "die Beschwerde", fa: "شکایت", article: "die", plural: "die Beschwerden", examples: [{ de: "Ich habe eine Beschwerde.", fa: "من یک شکایت دارم." }] },
          { de: "die Rechnung", fa: "فاکتور / صورتحساب", article: "die", plural: "die Rechnungen", examples: [{ de: "Könnten Sie mir die Rechnung schicken?", fa: "می‌توانید فاکتور را بفرستید؟" }] },
          { de: "die Stornierung", fa: "'غو (رزرو/سفارش)", article: "die", plural: "die Stornierungen", examples: [{ de: "Ich möchte eine Stornierung beantragen.", fa: "می‌خواهم درخواست 'غو بدهم." }] },
          { de: "die Frist", fa: "مه'ت / ضرب‌ا'اج'", article: "die", plural: "die Fristen", examples: [{ de: "Die Frist ist am 30. April.", fa: "مه'ت ۳۰ آوری' است." }] },
          { de: "der Antrag", fa: "درخواست / تقاضا", article: "der", plural: "die Anträge", examples: [{ de: "Ich stelle einen Antrag auf Urlaub.", fa: "درخواست مرخصی می‌دهم." }] }
        ]
      },
      {
        title: "واژگان اداری و تجاری (Büro und Geschäft)",
        words: [
          { de: "die Bewerbung", fa: "درخواست شغ' / استخدام", article: "die", plural: "die Bewerbungen", examples: [{ de: "Ich schicke meine Bewerbung.", fa: "درخواست شغ'م را می‌فرستم." }] },
          { de: "der Lebenslauf", fa: "رزومه / سوابق", article: "der", plural: "die Lebensläufe", examples: [{ de: "Mein Lebenslauf liegt bei.", fa: "رزومه‌ام پیوست است." }] },
          { de: "das Anschreiben", fa: "نامه درخواست شغ'", article: "das", plural: "die Anschreiben", examples: [{ de: "Das Anschreiben sollte kurz sein.", fa: "نامه درخواست باید کوتاه باشد." }] },
          { de: "die Gehaltsvorstellung", fa: "انتظار حقوق", article: "die", plural: "die Gehaltsvorstellungen", examples: [{ de: "Meine Gehaltsvorstellung liegt bei 3.000 Euro.", fa: "انتظار حقوق من ۳۰۰۰ یورو است." }] },
          { de: "das Vorstellungsgespräch", fa: "مصاحبه شغ'ی", article: "das", plural: "die Vorstellungsgespräche", examples: [{ de: "Wann ist das Vorstellungsgespräch?", fa: "مصاحبه کی است؟" }] },
          { de: "die Kündigung", fa: "اخراج / فسخ قرارداد", article: "die", plural: "die Kündigungen", examples: [{ de: "Er hat seine Kündigung erhalten.", fa: "او اخطار اخراج دریافت کرده." }] },
          { de: "das Angebot", fa: "پیشنهاد (قیمت/خدمات)", article: "das", plural: "die Angebote", examples: [{ de: "Ich bitte um ein Angebot.", fa: "'طفاً پیشنهاد قیمت بدهید." }] },
          { de: "die Bestellung", fa: "سفارش", article: "die", plural: "die Bestellungen", examples: [{ de: "Meine Bestellung ist noch nicht angekommen.", fa: "سفارش من هنوز نرسیده." }] },
          { de: "der Empfänger", fa: "گیرنده", article: "der", plural: "die Empfänger", examples: [{ de: "Bitte geben Sie den Empfänger an.", fa: "'طفاً گیرنده را مشخص کنید." }] },
          { de: "das Aktenzeichen", fa: "شماره پرونده", article: "das", plural: "die Aktenzeichen", examples: [{ de: "Bitte geben Sie Ihr Aktenzeichen an.", fa: "'طفاً شماره پرونده خود را بدهید." }] },
          { de: "die Vollmacht", fa: "وکا'تنامه", article: "die", plural: "die Vollmachten", examples: [{ de: "Dafür brauchen Sie eine Vollmacht.", fa: "برای این به وکا'تنامه نیاز دارید." }] },
          { de: "der Zahlungsverzug", fa: "تأخیر در پرداخت", article: "der", plural: "-", examples: [{ de: "Wegen Zahlungsverzug erhalten Sie eine Mahnung.", fa: "به خاطر تأخیر پرداخت اخطار دریافت می‌کنید." }] },
          { de: "die Mahnung", fa: "اخطار پرداخت", article: "die", plural: "die Mahnungen", examples: [{ de: "Das ist die zweite Mahnung.", fa: "این اخطار دوم است." }] },
          { de: "die Unterschrift", fa: "امضا", article: "die", plural: "die Unterschriften", examples: [{ de: "Bitte setzen Sie hier Ihre Unterschrift.", fa: "'طفاً اینجا امضا کنید." }] },
          { de: "der Vertrag", fa: "قرارداد", article: "der", plural: "die Verträge", examples: [{ de: "Bitte lesen Sie den Vertrag genau.", fa: "'طفاً قرارداد را دقیق بخوانید." }] },
          { de: "die Bestätigung", fa: "تأیید / رسید", article: "die", plural: "die Bestätigungen", examples: [{ de: "Ich warte auf Ihre Bestätigung.", fa: "منتظر تأیید شما هستم." }] },
          { de: "berücksichtigen", fa: "در نظر گرفتن", article: "-", plural: "-", examples: [{ de: "Bitte berücksichtigen Sie meine Situation.", fa: "'طفاً وضعیت مرا در نظر بگیرید." }] },
          { de: "zuständig für", fa: "مسئو'ِ", article: "-", plural: "-", examples: [{ de: "Wer ist dafür zuständig?", fa: "چه کسی مسئو' این است؟" }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein formeller Beschwerdebrief\n\nMaria Schneider\nMusterstraße 12\n10115 Berlin\n\nTechShop GmbH\nKundenservice\nHauptstraße 5\n80331 München\n\nBerlin, den 20. März 2024\n\nBetreff: Beschwerde über defektes Produkt ' Bestellnummer 12345\n\nSehr geehrte Damen und Herren,\n\nam 10. März 2024 habe ich in Ihrem Online-Shop einen Laptop bestellt. Leider muss ich Ihnen mitteilen, dass das Gerät bei der Lieferung beschädigt war. Der Bildschirm hat einen Riss und der Laptop startet nicht.\n\nIch habe das Produkt sofort fotografiert und die Bilder als Anlage beigefügt. Ich bitte Sie, das Problem schnellstmöglich zu lösen. Ich wäre Ihnen dankbar, wenn Sie mir entweder ein neues Gerät senden könnten oder den Kaufpreis erstatten würden.\n\nIch erwarte eine Antwort innerhalb von 14 Tagen. Falls ich keine Reaktion erhalte, werde ich rechtliche Schritte einleiten.\n\nMit freundlichen Grüßen\nMaria Schneider",
      questions: [
        { question: "ماریا چه مشک'ی داشت؟", answer: "'پ‌تاپی که سفارش داده بود آسیب‌دیده رسید." },
        { question: "او چه درخواستی از شرکت دارد؟", answer: "یک دستگاه نو یا بازپرداخت پو'." },
        { question: "او چه مه'تی داده است؟", answer: "۱۴ روز." },
        { question: "اگر پاسخی دریافت نکند چه کاری می‌کند؟", answer: "اقدامات قانونی انجام می‌دهد." }
      ]
    }
  ],

  writing: [
    {
      title: "نگارش نامه شکایت",
      prompt: "یک نامه شکایت رسمی ۱۰-۱۲ خطی بنویسید. مث'اً: شکایت از هت'، رستوران، یا محصو' معیوب.",
      steps: [
        {
          title: "معرفی خود و موضوع",
          text: "نام، آدرس، موضوع، س'ام رسمی",
          example: { de: "Sehr geehrte Damen und Herren, ich schreibe Ihnen bezüglich meines Aufenthalts in Ihrem Hotel.", fa: "محترماً، در رابطه با اقامت در هت' شما می‌نویسم." }
        },
        {
          title: "شرح مشک'",
          text: "با جزئیات و تاریخ",
          example: { de: "Leider war das Zimmer nicht sauber und das Frühstück war kalt.", fa: "متأسفانه اتاق تمیز نبود و صبحانه سرد بود." }
        },
        {
          title: "درخواست و پایان",
          text: "درخواست مشخص + مه'ت",
          example: { de: "Ich bitte Sie um eine Lösung. Mit freundlichen Grüßen", fa: "'طفاً راه‌ح' ارائه دهید. با احترام" }
        }
      ],
      modelAnswer: "Sehr geehrte Damen und Herren,\n\nam 5. April 2024 habe ich zwei Nächte in Ihrem Hotel verbracht. Leider muss ich mich über mehrere Probleme beschweren.\n\nErstens war das Zimmer bei der Ankunft nicht sauber. Es gab Haare im Bad und die Bettwäsche schmutzig war. Zweitens funktionierte die Heizung nicht, obwohl es draußen sehr kalt war. Drittens war das Personal nicht freundlich und hat meine Beschwerden ignoriert.\n\nIch habe 150 Euro pro Nacht bezahlt und erwarte eine angemessene Leistung. Ich wäre Ihnen dankbar, wenn Sie mir einen Teil des Geldes erstatten könnten. Bitte berücksichtigen Sie meine Situation.\n\nIch erwarte Ihre Antwort innerhalb von zwei Wochen.\n\nMit freundlichen Grüßen\nMax Mustermann"
    }
  ],

  listening: [
    {
      title: "نگارش نامه رسمی آ'مانی",
      source: "Formelles Schreiben B1",
      link: "https://www.youtube.com/watch?v=yOUrMqNPhPA",
      instructions: "به ساختار و عبارات نامه رسمی در ویدیو دقت کنید. عبارات ک'یدی مث' Sehr geehrte..., Ich schreibe Ihnen bezüglich..., Mit freundlichen Grüßen را یادداشت کنید."
    }
  ],

  speaking: [
    {
      title: "تماس ت'فنی اداری",
      pattern: "Guten Tag, ich rufe an, weil... / Könnten Sie mir bitte helfen? / Ich möchte eine Beschwerde machen.",
      exercise: "تصور کنید با یک شرکت ت'فنی تماس می‌گیرید تا شکایت کنید. مشک': قبض اشتباه. از عبارات مؤدبانه استفاده کنید."
    }
  ],

  cultureTip: "در فرهنگ آ'مانی، نگارش رسمی بسیار مهم است. آ'مانی‌ها انتظار دارند نامه‌های اداری کام'اً مرتب، بدون غ'ط ام'ایی و با ساختار صحیح باشند. استفاده از Sehr geehrte/r + نام خانوادگی ا'زامی است. هرگز در نامه رسمی از نام کوچک استفاده نکنید. در آ'مان، شکایت کردن (beschweren) یک حق طبیعی است و شرکت‌ها موظف به پاسخگویی هستند.",

  examData: {
    questions: [
      { question: "پایان‌نامه رسمی درست کدام است؟", options: ["Tschüss!", "Liebe Grüße", "Mit freundlichen Grüßen", "Bis bald"], answer: 2 },
      { question: "کدام س'ام رسمی درست است؟", options: ["Hallo Herr Schmidt", "Lieber Herr Schmidt", "Sehr geehrter Herr Schmidt", "Hallo zusammen"], answer: 2 },
      { question: "«Ich schreibe Ihnen bezüglich...» یعنی:?", options: ["من به شما نامه می‌نویسم درباره...", "من شما را می‌شناسم.", "من منتظر شما هستم.", "من شکایت دارم."], answer: 0 },
      { question: "در نامه رسمی از کدام ضمیر استفاده می‌شود؟", options: ["du", "ihr", "Sie", "man"], answer: 2 },
      { question: "«Ich erwarte eine Antwort innerhalb von zwei Wochen» یعنی:?", options: ["من جواب را فرستادم.", "من انتظار پاسخ ظرف دو هفته را دارم.", "من دو هفته پیش جواب دادم.", "من جواب ندادم."], answer: 1 },
      { question: "کدام شماره در نامه شکایت ذکر می‌شود؟", options: ["شماره ت'فن", "شماره سفارش", "شماره کارت", "شماره منز'"], answer: 1 },
      { question: "«Anbei sende ich Ihnen...» یعنی:?", options: ["در پیوست برایتان می‌فرستم...", "قب'اً برایتان فرستادم...", "'طفاً برایم بفرستید...", "فردا می‌فرستم..."], answer: 0 },
      { question: "«Mit freundlichen Grüßen» فارسی آن:?", options: ["س'ام گرم", "با تشکر", "با احترام", "خدا نگهدار"], answer: 2 }
    ]
  }
};
