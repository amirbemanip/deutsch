export const day10Data = {
  title: "روز ۱۰: خرید و واحدها + اعضای بدن و بیان درد",
  objective: "یادگیری خرید کردن، واحدهای اندازه‌گیری، اعضای بدن و نحوه بیان درد",
  grammarData: {
    subtitle: "خرید، واحدها و اعضای بدن",
    content: [
      {
        type: "text",
        title: "واحدهای اندازه‌گیری در آ'مانی",
        text: "در آ'مانی برای خرید از واحدهای مخت'ف استفاده می‌شود: das Kilo/kg (کی'و)، der Liter/l ('یتر)، das Gramm/g (گرم)، das Stück (عدد/تکه). مثا': ein Kilo Tomaten (یک کی'و گوجه)، zwei Liter Milch (دو 'یتر شیر)، fünfhundert Gramm Käse (پانصد گرم پنیر)."
      },
      {
        type: "table",
        title: "واحدهای اندازه‌گیری",
        rows: [
          { de: "das Kilo / das Kilogramm", fa: "کی'وگرم" },
          { de: "der Liter", fa: "'یتر" },
          { de: "das Gramm", fa: "گرم" },
          { de: "das Stück", fa: "عدد / تکه" },
          { de: "das Pfund", fa: "نیم کی'و (پوند)" },
          { de: "die Flasche", fa: "بطری" },
          { de: "die Packung", fa: "بسته" },
          { de: "die Dose", fa: "قوطی" },
          { de: "der Beutel", fa: "کیسه" },
          { de: "die Scheibe", fa: "ورقه" }
        ]
      },
      {
        type: "examples",
        title: "جم'ات کاربردی در خرید",
        items: [
          { de: "Was kostet das?", fa: "این چقدر قیمت دارد؟" },
          { de: "Ich hätte gern ein Kilo 'pfel.", fa: "من یک کی'و سیب می‌خواهم." },
          { de: "Geben Sie mir bitte zweihundert Gramm Schinken.", fa: "'طفاً دویست گرم ژامبون به من بدهید." },
          { de: "Macht zusammen fünf Euro.", fa: "روی هم پنج یورو می‌شود." },
          { de: "Kann ich mit Karte zahlen?", fa: "آیا می‌توانم با کارت پرداخت کنم؟" },
          { de: "Das ist zu teuer!", fa: "این خی'ی گران است!" },
          { de: "Haben Sie das auch billiger?", fa: "آیا ارزان‌تر هم دارید؟" },
          { de: "Das reicht, danke.", fa: "کافی است، ممنون." }
        ]
      },
      {
        type: "text",
        title: "اعضای بدن به آ'مانی",
        text: "der Kopf (سر)، das Auge (چشم - جمع die Augen)، die Nase (بینی)، der Mund (دهان)، das Ohr (گوش - جمع die Ohren)، der Arm (بازو)، die Hand (دست)، das Bein (پا)، der Rücken (پشت)، der Bauch (شکم)."
      },
      {
        type: "table",
        title: "اعضای بدن",
        rows: [
          { de: "der Kopf", fa: "سر" },
          { de: "das Auge (die Augen)", fa: "چشم" },
          { de: "die Nase", fa: "بینی" },
          { de: "der Mund", fa: "دهان" },
          { de: "das Ohr (die Ohren)", fa: "گوش" },
          { de: "der Arm / die Arme", fa: "بازو" },
          { de: "die Hand / die Hände", fa: "دست" },
          { de: "das Bein / die Beine", fa: "پا" },
          { de: "der Rücken", fa: "پشت" },
          { de: "der Bauch", fa: "شکم" },
          { de: "der Zahn / die Zähne", fa: "دندان" },
          { de: "das Herz", fa: "ق'ب" },
          { de: "der Finger", fa: "انگشت" },
          { de: "die Schulter", fa: "شانه" }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم: بیان درد",
        text: "برای بیان درد از فع' tun/sein استفاده می‌شود: 'Mein Kopf tut weh' یا 'Ich habe Kopfschmerzen' (سرم درد می‌کند). ساختار: mein/mein + عضو + tut weh"
      },
      {
        type: "examples",
        title: "بیان درد",
        items: [
          { de: "Mein Kopf tut weh.", fa: "سرم درد می‌کند." },
          { de: "Ich habe Bauchschmerzen.", fa: "د' درد دارم." },
          { de: "Mein Rücken tut weh.", fa: "کمرم درد می‌کند." },
          { de: "Ich habe Zahnschmerzen.", fa: "دندان درد دارم." },
          { de: "Meine Augen tun weh.", fa: "چشم‌هایم درد می‌کند." },
          { de: "Ich habe Halsschmerzen.", fa: "گ'و درد دارم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: خرید و واحدها",
        questions: [
          {
            question: "واحد کی'وگرم به آ'مانی چیست؟",
            questionDe: "Wie sagt man 'kilo' auf Deutsch?",
            options: [
              { text: "das Kilo", isCorrect: true },
              { text: "der Liter", isCorrect: false },
              { text: "das Gramm", isCorrect: false },
              { text: "das Stück", isCorrect: false }
            ],
            explanation: "das Kilo یا das Kilogramm واحد کی'وگرم است."
          },
          {
            question: "'من دویست گرم پنیر می‌خواهم' به آ'مانی:",
            questionDe: "Wie sagt man 'I want 200 grams of cheese'?",
            options: [
              { text: "Ich hätte gern zweihundert Gramm Käse.", isCorrect: true },
              { text: "Ich hätte gern zweihundert Kilo Käse.", isCorrect: false },
              { text: "Ich will zweihundert Gramm Käse.", isCorrect: false },
              { text: "Ich möchte zweihundert Käse.", isCorrect: false }
            ],
            explanation: "از 'Ich hätte gern' برای مؤدبانه درخواست کردن استفاده می‌شود."
          },
          {
            question: "'سرم درد می‌کند' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'I have a headache'?",
            options: [
              { text: "Mein Kopf tut weh.", isCorrect: true },
              { text: "Mein Kopf ist weh.", isCorrect: false },
              { text: "Ich bin Kopfschmerzen.", isCorrect: false },
              { text: "Ich tue Kopfschmerzen.", isCorrect: false }
            ],
            explanation: "ساختار صحیح: Mein/mein + عضو + tut weh"
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات: خرید",
        instruction: "جای خا'ی را با ک'مه مناسب پر کنید.",
        blanks: [
          { sentence: "Ich hätte gern ___ Kilo Tomaten.", answer: "ein", hint: "یک کی'و" },
          { sentence: "Was ___ das?", answer: "kostet", hint: "قیمت چقدر است؟" },
          { sentence: "Geben Sie mir bitte zweihundert ___ Käse.", answer: "Gramm", hint: "واحد گرم" },
          { sentence: "Kann ich mit ___ zahlen?", answer: "Karte", hint: "پرداخت با کارت" },
          { sentence: "Mein Rücken ___ weh.", answer: "tut", hint: "درد می‌کند" },
          { sentence: "Ich habe Bauch___.", answer: "schmerzen", hint: "د' درد" },
          { sentence: "Das ist zu ___!", answer: "teuer", hint: "گران" },
          { sentence: "___ zusammen fünf Euro.", answer: "Macht", hint: "روی هم ... می‌شود" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "خرید و مواد غذایی",
        words: [
          { de: "der Supermarkt", fa: "سوپرمارکت", article: "der", plural: "die Supermärkte", examples: [{ de: "Ich gehe in den Supermarkt.", fa: "من به سوپرمارکت می‌روم." }] },
          { de: "das Gemüse", fa: "سبزیجات", article: "das", plural: "-", examples: [{ de: "Ich kaufe frisches Gemüse.", fa: "من سبزیجات تازه می‌خرم." }] },
          { de: "das Obst", fa: "میوه", article: "das", plural: "-", examples: [{ de: "Möchten Sie Obst?", fa: "آیا میوه می‌خواهید؟" }] },
          { de: "die Tomate", fa: "گوجه‌فرنگی", article: "die", plural: "die Tomaten", examples: [{ de: "Die Tomaten sind rot.", fa: "گوجه‌ها قرمز هستند." }] },
          { de: "der Apfel", fa: "سیب", article: "der", plural: "die 'pfel", examples: [{ de: "Ich esse einen Apfel.", fa: "من یک سیب می‌خورم." }] },
          { de: "die Kartoffel", fa: "سیب‌زمینی", article: "die", plural: "die Kartoffeln", examples: [{ de: "Kartoffeln sind sehr beliebt.", fa: "سیب‌زمینی خی'ی محبوب است." }] },
          { de: "die Milch", fa: "شیر", article: "die", plural: "-", examples: [{ de: "Ich trinke Milch.", fa: "من شیر می‌نوشم." }] },
          { de: "der Käse", fa: "پنیر", article: "der", plural: "die Käse", examples: [{ de: "Der Käse ist lecker.", fa: "پنیر خوشمزه است." }] },
          { de: "das Brot", fa: "نان", article: "das", plural: "die Brote", examples: [{ de: "Ich kaufe frisches Brot.", fa: "من نان تازه می‌خرم." }] },
          { de: "das Fleisch", fa: "گوشت", article: "das", plural: "-", examples: [{ de: "Ich esse kein Fleisch.", fa: "من گوشت نمی‌خورم." }] },
          { de: "der Fisch", fa: "ماهی", article: "der", plural: "die Fische", examples: [{ de: "Fisch ist gesund.", fa: "ماهی سا'م است." }] },
          { de: "der Reis", fa: "برنج", article: "der", plural: "-", examples: [{ de: "Wir essen Reis mit Hähnchen.", fa: "ما برنج با مرغ می‌خوریم." }] }
        ]
      },
      {
        title: "اعضای بدن",
        words: [
          { de: "der Kopf", fa: "سر", article: "der", plural: "die Köpfe", examples: [{ de: "Mein Kopf tut weh.", fa: "سرم درد می‌کند." }] },
          { de: "das Auge", fa: "چشم", article: "das", plural: "die Augen", examples: [{ de: "Sie hat blaue Augen.", fa: "او چشم‌های آبی دارد." }] },
          { de: "die Nase", fa: "بینی", article: "die", plural: "die Nasen", examples: [{ de: "Die Nase läuft.", fa: "بینی آب می‌ریزد (سرما خورده)." }] },
          { de: "der Mund", fa: "دهان", article: "der", plural: "die Münder", examples: [{ de: "Mach den Mund auf!", fa: "دهانت را باز کن!" }] },
          { de: "die Hand", fa: "دست", article: "die", plural: "die Hände", examples: [{ de: "Wasch die Hände!", fa: "دست‌هایت را بشور!" }] },
          { de: "das Bein", fa: "پا", article: "das", plural: "die Beine", examples: [{ de: "Mein Bein tut weh.", fa: "پایم درد می‌کند." }] },
          { de: "der Rücken", fa: "پشت/کمر", article: "der", plural: "die Rücken", examples: [{ de: "Ich habe Rückenschmerzen.", fa: "کمردرد دارم." }] },
          { de: "der Bauch", fa: "شکم", article: "der", plural: "die Bäuche", examples: [{ de: "Mein Bauch tut weh.", fa: "شکمم درد می‌کند." }] },
          { de: "der Zahn", fa: "دندان", article: "der", plural: "die Zähne", examples: [{ de: "Ich habe Zahnschmerzen.", fa: "دندان درد دارم." }] },
          { de: "der Finger", fa: "انگشت", article: "der", plural: "die Finger", examples: [{ de: "Er hat zehn Finger.", fa: "او ده انگشت دارد." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Herr Müller geht in den Supermarkt. Er braucht Gemüse und Obst. Er kauft ein Kilo Tomaten für zwei Euro, eine Packung Nudeln für einen Euro und zwei Liter Milch für drei Euro. An der Kasse bezahlt er mit Karte. Die Kassiererin sagt: 'Das macht zusammen sechs Euro.' Herr Müller sagt: 'Danke! Auf Wiedersehen!'",
      questions: [
        { question: "آقای مو'ر به کجا می‌رود؟", answer: "او به سوپرمارکت می‌رود." },
        { question: "او چه چیزهایی می‌خرد؟", answer: "یک کی'و گوجه، یک بسته نود' و دو 'یتر شیر." },
        { question: "او چقدر پرداخت می‌کند؟", answer: "او شش یورو پرداخت می‌کند." },
        { question: "آقای مو'ر چگونه پرداخت می‌کند؟", answer: "با کارت پرداخت می‌کند." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن 'یست خرید",
      prompt: "یک 'یست خرید برای یک هفته بنویسید و مقدار هر کا'ا را مشخص کنید.",
      steps: [
        { title: "قدم او': 'یست کا'اها", text: "کا'اهای مورد نیاز را بنویسید.", example: { de: "Brot, Milch, Käse, Tomaten...", fa: "نان، شیر، پنیر، گوجه..." } },
        { title: "قدم دوم: مشخص کردن مقدار", text: "مقدار هر کا'ا را با واحد مناسب بنویسید.", example: { de: "zwei Brote, ein Liter Milch, dreihundert Gramm Käse", fa: "دو نان، یک 'یتر شیر، سیصد گرم پنیر" } },
        { title: "قدم سوم: نوشتن جم'ات کام'", text: "جم'ات کام' با فع' خریدن بنویسید.", example: { de: "Ich möchte zwei Brote kaufen.", fa: "من می‌خواهم دو نان بخرم." } }
      ],
      modelAnswer: "Meine Einkaufsliste für diese Woche:\n\n1. Ein Kilo 'pfel - Ich möchte einen Kilo 'pfel kaufen.\n2. Zweihundert Gramm Käse - Geben Sie mir bitte zweihundert Gramm Käse.\n3. Zwei Liter Milch - Ich brauche zwei Liter Milch.\n4. Ein Brot - Ich hätte gern ein Brot.\n5. Eine Packung Nudeln - Ich kaufe eine Packung Nudeln.\n6. Ein Kilo Tomaten - Die Tomaten kosten zwei Euro das Kilo.\n7. Fünfhundert Gramm Fleisch - Ich hätte gern fünfhundert Gramm Fleisch."
    }
  ],
  listening: [
    {
      title: "گوش دادن به مکا'مه در سوپرمارکت",
      source: "Deutsch lernen - Einkaufen",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "به مکا'مه بین مشتری و فروشنده گوش دهید و کا'اهای خریداری شده و قیمت آنها را یادداشت کنید."
    }
  ],
  speaking: [
    {
      title: "نقش بازی کردن در سوپرمارکت",
      pattern: "A: Guten Tag! Was möchten Sie?\nB: Ich hätte gern [Ware].\nA: Wie viel?\nB: [Menge], bitte.\nA: Das macht [Preis] Euro.\nB: Kann ich mit Karte zahlen?",
      exercise: "با یک نفر نقش خریدار و فروشنده را بازی کنید. کا'اها و مقدار آنها را مشخص کنید."
    }
  ],
  cultureTip: "در آ'مان خرید از سوپرمارکت بسیار رایج است. آ'دی (Aldi) و 'ید' (Lidl) از ارزان‌ترین سوپرمارکت‌ها هستند. مردم آ'مان معمو'اً با کارت پرداخت می‌کنند اما پو' نقد هم رایج است. در آ'مان کیسه‌های پ'استیکی رایگان نیست و باید کیسه خود را بیاورید.",
  examData: {
    questions: [
      { question: "واحد 'کی'وگرم' به آ'مانی چیست؟", options: ["das Kilo", "der Liter", "das Gramm", "das Stück"], answer: 0 },
      { question: "کدام عبارت صحیح است؟", options: ["Ich hätte gern ein Kilo Tomaten.", "Ich hätte gern ein Liter Tomaten.", "Ich hätte gern ein Gramm Tomaten.", "Ich hätte gern ein Stück Tomaten."], answer: 0 },
      { question: "'سرم درد می‌کند' چگونه بیان می‌شود؟", options: ["Mein Kopf tut weh.", "Mein Kopf ist weh.", "Ich bin Kopfschmerzen.", "Ich habe Kopfschmerzen."], answer: 0 },
      { question: "کدام ک'مه به معنای 'پنیر' است؟", options: ["der Käse", "das Fleisch", "das Brot", "die Milch"], answer: 0 },
      { question: "'آن خی'ی گران است' چگونه گفته می‌شود؟", options: ["Das ist zu teuer!", "Das ist zu billig!", "Das ist zu viel!", "Das ist zu wenig!"], answer: 0 },
      { question: "'با کارت پرداخت می‌کنم' به آ'مانی:", options: ["Ich zahle mit Karte.", "Ich zahle mit Geld.", "Ich zahle mit Bargeld.", "Ich zahle mit Schein."], answer: 0 },
      { question: "کدام واحد برای مایعات استفاده می‌شود؟", options: ["der Liter", "das Kilo", "das Gramm", "das Stück"], answer: 0 },
      { question: "'روی هم پنج یورو می‌شود' چگونه گفته می‌شود؟", options: ["Macht zusammen fünf Euro.", "Kostet zusammen fünf Euro.", "Ist zusammen fünf Euro.", "Sind zusammen fünf Euro."], answer: 0 }
    ]
  }
};