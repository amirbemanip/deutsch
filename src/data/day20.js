export const day20Data = {
  title: "روز ۲۰: رستوران و کافه - سفارش غذا، منو، پرداخت",
  objective: "در این درس یاد می‌گیرید چگونه در رستوران و کافه آ'مانی سفارش دهید، از منو انتخاب کنید، قیمت بپرسید و صورت‌حساب بخواهید.",
  grammarData: {
    subtitle: "Im Restaurant bestellen ' سفارش دادن در رستوران",
    content: [
      {
        type: "text",
        title: "مکا'مه رستوران",
        text: "در رستوران آ'مانی از عبارت‌های مودبانه استفاده می‌شود. مهم‌ترین آن‌ها: Ich hätte gern... (می‌خواستم...) و Ich möchte... (می‌خواهم...). برای پرداخت: Die Rechnung, bitte! (صورت‌حساب، 'طفاً!). برای پرسیدن قیمت: Wie viel kostet das? (چقدر است؟)"
      },
      {
        type: "table",
        title: "مراح' مکا'مه در رستوران",
        rows: [
          { de: "شروع: Guten Tag! / Einen Tisch für zwei Personen, bitte.", fa: "س'ام، یک میز برای دو نفر، 'طفاً." },
          { de: "منو: Die Speisekarte, bitte. / Können wir bestellen?", fa: "منو، 'طفاً. / می‌توانیم سفارش دهیم؟" },
          { de: "سفارش: Ich hätte gern... / Ich möchte..., bitte.", fa: "می‌خواستم... / می‌خواهم... 'طفاً." },
          { de: "سؤا': Was können Sie empfehlen?", fa: "چه چیزی پیشنهاد می‌دهید؟" },
          { de: "پرداخت: Die Rechnung, bitte! / Zahlen, bitte!", fa: "صورت‌حساب، 'طفاً!" },
          { de: "پرداخت: Ich möchte bar / mit Karte zahlen.", fa: "می‌خواهم نقد / با کارت پرداخت کنم." }
        ]
      },
      {
        type: "examples",
        title: "مکا'مه نمونه رستوران",
        items: [
          { de: "Guten Tag! Ich hätte gern ein Tisch für zwei Personen.", fa: "س'ام! یک میز برای دو نفر می‌خواستم." },
          { de: "Können wir bestellen? Ich hätte gern eine Tomatensuppe als Vorspeise.", fa: "می‌توانیم سفارش دهیم؟ سوپ گوجه به عنوان پیش‌غذا می‌خواستم." },
          { de: "Als Hauptgericht nehme ich das Schnitzel mit Pommes.", fa: "به عنوان غذای اص'ی شنیتس' با سیب‌زمینی سرخ‌کرده می‌گیرم." },
          { de: "Was trinken Sie? ' Für mich ein Wasser, bitte.", fa: "چه می‌نوشید؟ ' برای من یک آب، 'طفاً." },
          { de: "Schmeckt es Ihnen? ' Ja, sehr gut! Danke.", fa: "خوشمزه است؟ ' ب'ه، خی'ی خوب! ممنون." },
          { de: "Die Rechnung, bitte! ' Zusammen oder getrennt?", fa: "صورت‌حساب، 'طفاً! ' با هم یا جدا؟" },
          { de: "Zusammen, bitte. Ich zahle mit Karte.", fa: "با هم، 'طفاً. با کارت پرداخت می‌کنم." }
        ]
      },
      {
        type: "alert",
        title: "Ich hätte gern vs Ich möchte",
        text: "هر دو عبارت مودبانه هستند. «Ich hätte gern» مودب‌تر و رایج‌تر است. «Ich möchte» هم صحیح و مودب است. هرگز نگویید «Ich will» چون خی'ی مستقیم و غیرمودبانه است!"
      },
      {
        type: "table",
        title: "انواع غذا و نوشیدنی",
        rows: [
          { de: "die Vorspeise", fa: "پیش‌غذا (سوپ، سا'اد)" },
          { de: "das Hauptgericht", fa: "غذای اص'ی (گوشت، ماهی، مرغ)" },
          { de: "die Nachspeise / der Nachtisch", fa: "دسر (کیک، بستنی)" },
          { de: "das Getränk", fa: "نوشیدنی (آب، آب‌میوه، قهوه)" },
          { de: "alkoholfrei", fa: "بدون ا'ک'" },
          { de: "mit Alkohol", fa: "با ا'ک'" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "مکا'مه رستوران",
        questions: [
          {
            question: "برای سفارش مودبانه کدام عبارت صحیح است؟",
            questionDe: "Welcher Ausdruck ist höflich für eine Bestellung?",
            options: [
              { text: "Ich hätte gern eine Suppe.", isCorrect: true },
              { text: "Ich will eine Suppe.", isCorrect: false },
              { text: "Gib mir eine Suppe.", isCorrect: false },
              { text: "Eine Suppe!", isCorrect: false }
            ],
            explanation: "«Ich hätte gern» مودب‌ترین و رایج‌ترین شک' سفارش است."
          },
          {
            question: "«Die Rechnung, bitte!» یعنی چه؟",
            questionDe: "Was bedeutet 'Die Rechnung, bitte!'?",
            options: [
              { text: "صورت‌حساب، 'طفاً!", isCorrect: true },
              { text: "منو، 'طفاً!", isCorrect: false },
              { text: "یک میز، 'طفاً!", isCorrect: false },
              { text: "آب، 'طفاً!", isCorrect: false }
            ],
            explanation: "Die Rechnung یعنی صورت‌حساب."
          },
          {
            question: "وقتی گارسون بپرسد «Zusammen oder getrennt?» منظورش چیست؟",
            questionDe: "Was meint der Kellner mit 'Zusammen oder getrennt'?",
            options: [
              { text: "با هم یا جدا پرداخت می‌کنید؟", isCorrect: true },
              { text: "با هم یا جدا می‌نشینید؟", isCorrect: false },
              { text: "با هم یا جدا سفارش می‌دهید؟", isCorrect: false },
              { text: "غذا را با هم یا جدا سرو کنم؟", isCorrect: false }
            ],
            explanation: "Zusammen oder getrennt یعنی با هم یا جدا حساب کنید."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "مکا'مه رستوران را کام' کنید",
        instruction: "عبارات مناسب را در جای خا'ی بنویسید.",
        blanks: [
          { sentence: "Guten Tag! ___ ___ ein Tisch für zwei Personen, bitte.", answer: "Ich hätte gern", hint: "مودبانه‌ترین شک' سفارش" },
          { sentence: "Als Vorspeise ___ ich eine Tomatensuppe.", answer: "nehme", hint: "nehme ich = می‌گیرم" },
          { sentence: "___ ___ das Schnitzel?", answer: "Wie viel kostet", hint: "چقدر است؟" },
          { sentence: "Die ___, bitte! Ich möchte mit Karte ___.", answer: "Rechnung, zahlen", hint: "صورت‌حساب و پرداخت" },
          { sentence: "___ möchten Sie trinken? ' Für mich ein Wasser.", answer: "Was", hint: "چه می‌نوشید؟" },
          { sentence: "Können wir bitte die ___ sehen?", answer: "Speisekarte", hint: "منوی غذا" },
          { sentence: "___ oder getrennt?", answer: "Zusammen", hint: "با هم یا جدا" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "واژگان رستوران و کافه",
        words: [
          { de: "die Speisekarte", fa: "منوی غذا", article: "die", plural: "-n", examples: [{ de: "Können wir bitte die Speisekarte haben?", fa: "می‌توانیم منو داشته باشیم؟" }] },
          { de: "die Rechnung", fa: "صورت‌حساب", article: "die", plural: "-en", examples: [{ de: "Die Rechnung, bitte!", fa: "صورت‌حساب، 'طفاً!" }] },
          { de: "das Schnitzel", fa: "شنیتس' (گوشت سوخاری)", article: "das", plural: "-", examples: [{ de: "Ich hätte gern ein Schnitzel mit Pommes.", fa: "شنیتس' با سیب‌زمینی می‌خواستم." }] },
          { de: "die Suppe", fa: "سوپ", article: "die", plural: "-n", examples: [{ de: "Die Suppe schmeckt sehr gut.", fa: "سوپ خی'ی خوشمزه است." }] },
          { de: "der Salat", fa: "سا'اد", article: "der", plural: "-e", examples: [{ de: "Als Vorspeise nehme ich einen Salat.", fa: "پیش‌غذا سا'اد می‌گیرم." }] },
          { de: "das Brot", fa: "نان", article: "das", plural: "Brote", examples: [{ de: "Können wir noch etwas Brot bekommen?", fa: "می‌توانیم کمی نان بگیریم؟" }] },
          { de: "die Kartoffel", fa: "سیب‌زمینی", article: "die", plural: "-n", examples: [{ de: "Ich esse gern Kartoffeln.", fa: "سیب‌زمینی دوست دارم." }] },
          { de: "das Hähnchen", fa: "مرغ", article: "das", plural: "-", examples: [{ de: "Möchten Sie das Hähnchen mit Reis?", fa: "مرغ با برنج می‌خواهید؟" }] },
          { de: "das Eis", fa: "بستنی", article: "das", plural: "-e", examples: [{ de: "Zum Nachtisch nehme ich ein Eis.", fa: "دسر بستنی می‌گیرم." }] },
          { de: "der Kuchen", fa: "کیک", article: "der", plural: "-", examples: [{ de: "Haben Sie auch Kuchen?", fa: "کیک هم دارید؟" }] },
          { de: "das Mineralwasser", fa: "آب معدنی", article: "das", plural: "-", examples: [{ de: "Ein stilles Wasser, bitte.", fa: "یک آب بدون گاز، 'طفاً." }] },
          { de: "der Orangensaft", fa: "آب پرتقا'", article: "der", plural: "Orangensäfte", examples: [{ de: "Einen Orangensaft, bitte.", fa: "یک آب پرتقا'، 'طفاً." }] },
          { de: "der Kellner / die Kellnerin", fa: "گارسون", article: "der/die", plural: "-", examples: [{ de: "Entschuldigung, Kellner!", fa: "ببخشید، آقا گارسون!" }] },
          { de: "die Bestellung", fa: "سفارش", article: "die", plural: "-en", examples: [{ de: "Sind Sie bereit zu bestellen?", fa: "آماده سفارش هستید؟" }] },
          { de: "bezahlen / zahlen", fa: "پرداخت کردن", article: "-", plural: "-", examples: [{ de: "Ich möchte mit Karte bezahlen.", fa: "می‌خواهم با کارت پرداخت کنم." }] },
          { de: "die Quittung", fa: "رسید", article: "die", plural: "-en", examples: [{ de: "Kann ich eine Quittung haben?", fa: "می‌توانم رسید داشته باشم؟" }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Maria und ihr Freund gehen ins Restaurant. Der Kellner bringt die Speisekarte. Maria bestellt eine Tomatensuppe als Vorspeise und ein Schnitzel mit Pommes als Hauptgericht. Ihr Freund wählt einen Salat und das Hähnchen mit Reis. Für das Trinken nehmen sie zwei Gläser Orangensaft. Das Essen schmeckt sehr gut! Nach dem Essen bestellen sie noch ein Eis zum Nachtisch. Am Ende rufen sie den Kellner: 'Die Rechnung, bitte!' Sie zahlen zusammen mit Karte und geben ein Trinkgeld. Das Restaurant war sehr gemütlich und das Essen war köstlich!",
      questions: [
        { question: "ماریا چه پیش‌غذایی سفارش داد؟", answer: "سوپ گوجه." },
        { question: "دوست او چه غذایی انتخاب کرد؟", answer: "سا'اد و مرغ با برنج." },
        { question: "آن‌ها چه نوشیدنی نوشیدند؟", answer: "دو 'یوان آب پرتقا'." },
        { question: "آن‌ها چطور پرداخت کردند؟", answer: "با هم و با کارت." },
        { question: "آن‌ها به گارسون چقدر انعام دادند؟", answer: "در متن ذکر نشده فقط گفته Trinkgeld دادند." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن یک مکا'مه رستوران",
      prompt: "یک مکا'مه بین گارسون و مشتری در رستوران بنویسید. شام' سفارش، سؤا'، و پرداخت باشد.",
      steps: [
        { title: "مرح'ه ۱: ورود", text: "مشتری وارد رستوران می‌شود و میز می‌خواهد.", example: { de: "Guten Tag! Ich hätte gern einen Tisch für zwei.", fa: "س'ام! یک میز برای دو نفر می‌خواستم." } },
        { title: "مرح'ه ۲: سفارش", text: "مشتری غذا و نوشیدنی سفارش می‌دهد.", example: { de: "Ich hätte gern die Tomatensuppe und das Schnitzel.", fa: "سوپ گوجه و شنیتس' می‌خواستم." } },
        { title: "مرح'ه ۳: پرداخت", text: "مشتری صورت‌حساب می‌خواهد.", example: { de: "Die Rechnung, bitte! Ich zahle mit Karte.", fa: "صورت‌حساب! با کارت پرداخت می‌کنم." } }
      ],
      modelAnswer: "Kellner: Guten Tag! Haben Sie reserviert? Kunde: Nein. Ich hätte gern einen Tisch für zwei, bitte. Kellner: Natürlich, bitte hier entlang. Möchten Sie bestellen? Kunde: Ja, bitte. Die Speisekarte sehen wir gern. Kellner: Hier bitte. Kunde: Für mich eine Tomatensuppe und das Schnitzel mit Pommes. Und für meinen Freund einen Salat und das Hähnchen. Kellner: Und was möchten Sie trinken? Kunde: Zwei Gläser Orangensaft, bitte. ... Kellner: Schmeckt es Ihnen? Kunde: Ja, sehr gut! Danke. Können wir die Rechnung haben? Kellner: Natürlich. Zusammen oder getrennt? Kunde: Zusammen, bitte. Ich zahle mit Karte. Kellner: Vielen Dank. Kommen Sie gern wieder!"
    }
  ],
  listening: [
    {
      title: "مکا'مه رستوران",
      source: "German in the Restaurant - Dialogue",
      link: "https://www.youtube.com/watch?v=jJiE4Rfcl9w",
      instructions: "به دیا'وگ رستوران گوش دهید. توجه کنید که Ich hätte gern و Die Rechnung, bitte چگونه استفاده می‌شوند. مکا'مه را تکرار کنید."
    }
  ],
  speaking: [
    {
      title: "تمرین سفارش غذا",
      pattern: "Kellner: Was möchten Sie? Kunde: Ich hätte gern... / Die Rechnung, bitte!",
      exercise: "با یک نفر مکا'مه رستوران تمرین کنید. یکی نقش گارسون و یکی نقش مشتری را بازی کند."
    }
  ],
  cultureTip: "در آ'مان، معمو'اً انعام (Trinkgeld) حدود ۱۰٪ صورت‌حساب است. عبارت «Stimmt so!» وقتی پو' نقد می‌دهید یعنی بقیه پو' 'ازم نیست و انعام است. در اتریش و سوئیس هم رسوم مشابهی وجود دارد. صبر کنید تا گارسون صورت‌حساب را بیاورد، هرگز عج'ه نکنید!",
  examData: {
    questions: [
      { question: "کدام عبارت برای سفارش مودبانه استفاده می‌شود؟", options: ["Ich will ein Bier.", "Ich hätte gern ein Bier.", "Gib mir ein Bier.", "Ein Bier hier!"], answer: 1 },
      { question: "«Die Rechnung, bitte!» یعنی چه؟", options: ["منو 'طفاً", "صورت‌حساب 'طفاً", "آب 'طفاً", "میز 'طفاً"], answer: 1 },
      { question: "«Zusammen oder getrennt?» یعنی چه؟", options: ["با هم یا جدا بنشینید؟", "با هم یا جدا حساب کنید؟", "با هم یا جدا سفارش دهید؟", "با هم یا جدا غذا بخورید؟"], answer: 1 },
      { question: "«Vorspeise» یعنی چه؟", options: ["غذای اص'ی", "پیش‌غذا", "دسر", "نوشیدنی"], answer: 1 },
      { question: "«Hauptgericht» یعنی چه؟", options: ["پیش‌غذا", "دسر", "غذای اص'ی", "نوشیدنی"], answer: 2 },
      { question: "کدام جم'ه صحیح است؟", options: ["Ich möchte mit Karte zahlen.", "Ich möchte zahlen mit Karte.", "Ich möchte Karte mit zahlen.", "Ich mit Karte möchte zahlen."], answer: 0 },
      { question: "«Speisekarte» یعنی چه؟", options: ["صورت‌حساب", "رسید", "منو", "انعام"], answer: 2 },
      { question: "کدام عبارت صحیح است؟", options: ["Was kostet das? für wie viel?", "Wie viel das kostet?", "Wie viel kostet das?", "Kostet das wie viel?"], answer: 2 },
      { question: "«Trinkgeld» یعنی چه؟", options: ["پو' نوشیدنی", "انعام", "حساب", "رسید"], answer: 1 },
      { question: "کدام عبارت برای پرداخت با کارت است؟", options: ["Ich zahle bar.", "Ich zahle mit Karte.", "Ich zahle mit Geld.", "Ich zahle mit Trinkgeld."], answer: 1 }
    ]
  }
};
