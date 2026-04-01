export const day11Data = {
  title: "روز ۱۱: خرید + واحدهای اندازه‌گیری + اعضای بدن + بیان درد",
  objective: "در پایان این روز، شما می‌توانید خرید کنید، واحدهای اندازه‌گیری را به کار ببرید، اعضای بدن را نام ببرید و درد خود را بیان کنید.",
  level: "A1",
  grammarData: {
    subtitle: "خرید، واحدها و اعضای بدن",
    content: [
      {
        type: "text",
        title: "خرید در آلمانی",
        text: "برای خرید کردن از عبارات زیر استفاده می‌کنیم: Ich möchte... (می‌خواهم...), Ich brauche... (نیاز دارم...), Was kostet das? (چقدر می‌شود؟),Wie teuer ist das? (چقدر گران است؟), Kann ich... haben? (می‌توانم... داشته باشم؟). فروشنده می‌گوید: Bitte schön! (لطفاً!)، Das macht... (می‌شود...)."
      },
      {
        type: "table",
        title: "واحدهای اندازه‌گیری",
        rows: [
          { de: "das Kilo / der Kilogramm", fa: "کیلوگرم" },
          { de: "das Gramm", fa: "گرم" },
          { de: "der Liter", fa: "لیتر" },
          { de: "das Pfund (۵۰۰ گرم)", fa: "پوند" },
          { de: "das Stück", fa: "عدد/قطعه" },
          { de: "die Tüte", fa: "کیسه" },
          { de: "die Dose", fa: "قوطی" },
          { de: "die Flasche", fa: "بطری" },
          { de: "das Brot", fa: "نان" },
          { de: "das Brötchen", fa: "نان رولتی" }
        ]
      },
      {
        type: "text",
        title: "مکالمه خرید",
        text: "Dialog: Kunde: Guten Tag! Ich möchte bitte zwei Kilo Äpfel. Verkäufer: Welche Sorte? Kunde: Die roten, bitte. Verkäufer: Das macht drei Euro fünfzig. Kunde: Und ein Kilo Bananen, bitte. Verkäufer: Noch etwas? Kunde: Nein danke, das ist alles. Verkäufer: Macht zusammen fünfzig Euro."
      },
      {
        type: "examples",
        title: "مثال‌های خرید",
        items: [
          { de: "Ich möchte drei Brötchen.", fa: "می‌خواهم سه نان رولتی." },
          { de: "Ein Kilo Tomaten, bitte.", fa: "یک کیلوگرم گوجه، لطفاً." },
          { de: "Was kostet das Brot?", fa: "这条面包多少钱？" },
          { de: "Die Bananen kosten zwei Euro pro Kilo.", fa: "موز هر کیلو دو یورو." },
          { de: "Ich brauche eine Flasche Milch.", fa: "نیاز دارم به یک بطری شیر." }
        ]
      },
      {
        type: "alert",
        title: "توجه: شمارش در آلمانی",
        text: "در آلمانی برای شمارش، از اعداد به صورت واحد استفاده می‌شود: ein Kilo (یک کیلو)، drei Stück (سه عدد). توجه کنید که فعل بعد از واحد نمی‌آید: Drei Äpfel, bitte (سه سیب، لطفاً)، نه Drei Äpfel sind bitte."
      },
      {
        type: "text",
        title: "اعضای بدن",
        text: "در آلمانی اعضای بدن با حروف تعریف می‌آیند: der Kopf (سر)، die Hand (دست)، der Arm (بازو)، das Bein (پا)، der Fuß (پا)، das Auge (چشم)، die Nase (بینی)، der Mund (دهان)، das Ohr (گوش)، das Haar (مو)."
      },
      {
        type: "table",
        title: "اعضای بدن",
        rows: [
          { de: "der Kopf [kɔpfi]", fa: "سر" },
          { de: "das Auge [ˈaʊɡə]", fa: "چشم" },
          { de: "die Nase [ˈnaːzə]", fa: "بینی" },
          { de: "der Mund [mʊnt]", fa: "دهان" },
          { de: "das Ohr [oːɐ̯]", fa: "گوش" },
          { de: "das Haar [haːɐ̯]", fa: "مو" },
          { de: "der Arm [aʁm]", fa: "بازو" },
          { de: "die Hand [hant]", fa: "دست" },
          { de: "das Bein [baɪn]", fa: "پا" },
          { de: "der Fuß [fuːs]", fa: "پا (کف پا)" },
          { de: "der Zahn [tsaːn]", fa: "دندان" },
          { de: "die Zunge [ˈtsʊŋə]", fa: "زبان" }
        ]
      },
      {
        type: "text",
        title: "بیان درد با wehtun",
        text: "برای بیان درد در آلمانی از ساختار wehtun استفاده می‌شود: Mein Kopf tut weh (سرم درد می‌کند)، Der Bauch tut mir weh (شکم درد می‌کند)، Die Augen tun mir weh (چشمانم درد می‌کند). توجه: فعل همیشه در سوم شخص می‌آید!"
      },
      {
        type: "examples",
        title: "بیان درد",
        items: [
          { de: "Mein Kopf tut weh.", fa: "سرم درد می‌کند." },
          { de: "Der Bauch tut mir weh.", fa: "شکم درد می‌کند." },
          { de: "Die Zähne tun mir weh.", fa: "دندان‌هایم درد می‌کنند." },
          { de: "Der Rücken tut weh.", fa: "کمرم درد می‌کند." },
          { de: "Mir tut alles weh.", fa: "همه جایم درد می‌کند." }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین: خرید و درد",
        instruction: "جملات را با کلمه مناسب تکمیل کنید.",
        blanks: [
          { sentence: "Ich möchte zwei ___ Äpfel.", answer: "Kilo", hint: "کیلوگرم" },
          { sentence: "___ kostet das Brot?", answer: "Was", hint: "چقدر" },
          { sentence: "Mein ___ tut weh.", answer: "Kopf", hint: "سر" },
          { sentence: "Die ___ tut mir weh.", answer: "Hand", hint: "دست" },
          { sentence: "Ich brauche eine ___ Milch.", answer: "Flasche", hint: "بطری" },
          { sentence: "Der ___ tut weh.", answer: "Bauch", hint: "شکم" },
          { sentence: "Drei ___ bitte!", answer: "Brötchen", hint: "نان رولتی" },
          { sentence: "Was ___ das?", answer: "kostet", hint: "می‌شود" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: خرید و بدن",
        questions: [
          {
            question: "«سرم درد می‌کند» چگونه گفته می‌شود؟",
            questionDe: "Wie sagt man auf Deutsch \"Mein Kopf tut weh\"?",
            options: [
              { text: "Mein Kopf tut weh.", isCorrect: true },
              { text: "Mein Kopf ist weh.", isCorrect: false },
              { text: "Ich habe Kopfweh.", isCorrect: false },
              { text: "Kopf ist krank.", isCorrect: false }
            ],
            explanation: "ساختار wehtun همیشه با فعل در سوم شخص می‌آید: tun + weh."
          },
          {
            question: "یک کیلوگرم چگونه گفته می‌شود؟",
            questionDe: "Wie heißt \"ein Kilo\" auf Deutsch?",
            options: [
              { text: "ein Kilo", isCorrect: true },
              { text: "ein Kilogramm", isCorrect: false },
              { text: "ein Kilos", isCorrect: false },
              { text: "ein Kile", isCorrect: false }
            ],
            explanation: "Kilo می‌تواند به تنهایی استفاده شود یا با Kilogramm."
          },
          {
            question: "«دستم درد می‌کند» چگونه گفته می‌شود؟",
            questionDe: "Wie sagt man \"Meine Hand tut weh\"?",
            options: [
              { text: "Die Hand tut mir weh.", isCorrect: true },
              { text: "Die Hand ist weh.", isCorrect: false },
              { text: "Ich habe Handweh.", isCorrect: false },
              { text: "Hand tut weh.", isCorrect: false }
            ],
            explanation: "در جمله باید از ضمیر mir استفاده شود: tun + mir + weh."
          }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "واحدهای اندازه‌گیری",
        words: [
          { de: "das Kilo", fa: "کیلوگرم", article: "das", plural: "die Kilos", ipa: "[ˈkiːlo]", examples: [{ de: "Ich kaufe ein Kilo Äpfel.", fa: "یک کیلو سیب می‌خرم." }] },
          { de: "das Gramm", fa: "گرم", article: "das", plural: "die Gramm", ipa: "[ɡʁam]", examples: [{ de: "Zwei Gramm Zucker, bitte.", fa: "دو گرم شكر، لطفاً." }] },
          { de: "der Liter", fa: "لیتر", article: "der", plural: "die Liter", ipa: "[ˈliːtɐ̯]", examples: [{ de: "Ein Liter Milch, bitte.", fa: "یک لیتر شیر، لطفاً." }] },
          { de: "das Pfund", fa: "پوند (۵۰۰ گرم)", article: "das", plural: "die Pfund", ipa: "[pfʊnt]", examples: [{ de: "Drei Pfund Rindfleisch.", fa: "سه پوند گوشت گاو." }] },
          { de: "das Stück", fa: "عدد/قطعه", article: "das", plural: "die Stück", ipa: "[ʃtʏk]", examples: [{ de: "Fünf Stück Brot, bitte.", fa: "پنج قطعه نان، لطفاً." }] },
          { de: "die Tüte", fa: "کیسه", article: "die", plural: "die Tüten", ipa: "[ˈtyːtə]", examples: [{ de: "Eine Tüte für die Äpfel.", fa: "یک کیسه برای سیب‌ها." }] },
          { de: "die Dose", fa: "قوطی", article: "die", plural: "die Dosen", ipa: "[ˈdoːzə]", examples: [{ de: "Eine Dose Cola, bitte.", fa: "یک قوطی کولا، لطفاً." }] },
          { de: "die Flasche", fa: "بطری", article: "die", plural: "die Flaschen", ipa: "[ˈflaʃə]", examples: [{ de: "Zwei Flaschen Wasser.", fa: "دو بطری آب." }] },
          { de: "das Brot", fa: "نان (باگت)", article: "das", plural: "die Brote", ipa: "[bʁoːt]", examples: [{ de: "Das Brot ist frisch.", fa: "نان تازه است." }] },
          { de: "das Brötchen", fa: "نان رولتی", article: "das", plural: "die Brötchen", ipa: "[ˈbʁøːtçən]", examples: [{ de: "Drei Brötchen mit Käse.", fa: "سه نان رولتی با پنیر." }] }
        ]
      },
      {
        title: "اعضای بدن",
        words: [
          { de: "der Kopf", fa: "سر", article: "der", plural: "die Köpfe", ipa: "[kɔpf]", conjugation: { ich:"habe Kopf", du:"hast Kopf", er:"hat Kopf", wir:"haben Kopf", ihr:"habt Kopf", sie:"haben Kopf" }, examples: [{ de: "Der Kopf tut mir weh.", fa: "سرم درد می‌کند." }] },
          { de: "das Auge", fa: "چشم", article: "das", plural: "die Augen", ipa: "[ˈaʊɡə]", conjugation: { ich:"sehe", du:"siehs t", er:"sieht", wir:"sehen", ihr:"seht", sie:"sehen" }, examples: [{ de: "Die Augen sind braun.", fa: "چشمان قهوه‌ای هستند." }] },
          { de: "die Nase", fa: "بینی", article: "die", plural: "die Nasen", ipa: "[ˈnaːzə]", examples: [{ de: "Die Nase ist rot.", fa: "بینی قرمز است." }] },
          { de: "der Mund", fa: "دهان", article: "der", plural: "die Münder", ipa: "[mʊnt]", examples: [{ de: "Mach den Mund auf!", fa: "دهانت را باز کن!" }] },
          { de: "das Ohr", fa: "گوش", article: "das", plural: "die Ohren", ipa: "[oːɐ̯]", examples: [{ de: "Die Ohren tun mir weh.", fa: "گوش‌هایم درد می‌کنند." }] },
          { de: "der Arm", fa: "بازو", article: "der", plural: "die Arme", ipa: "[aʁm]", examples: [{ de: "Der Arm ist gebrochen.", fa: "بازو شکسته است." }] },
          { de: "die Hand", fa: "دست", article: "die", plural: "die Hände", ipa: "[hant]", examples: [{ de: "Die Hand ist klein.", fa: "دست کوچک است." }] },
          { de: "das Bein", fa: "پا (از ران به پایین)", article: "das", plural: "die Beine", ipa: "[baɪn]", examples: [{ de: "Das Bein tut weh.", fa: "پا درد می‌کند." }] },
          { de: "der Fuß", fa: "پا (کف پا)", article: "der", plural: "die Füße", ipa: "[fuːs]", examples: [{ de: "Die Füße sind müde.", fa: "پاها خسته هستند." }] },
          { de: "der Zahn", fa: "دندان", article: "der", plural: "die Zähne", ipa: "[tsaːn]", examples: [{ de: "Der Zahn tut mir weh.", fa: "دندانم درد می‌کند." }] },
          { de: "der Bauch", fa: "شکم", article: "der", plural: "die Bäuche", ipa: "[baʊx]", examples: [{ de: "Der Bauch ist voll.", fa: "شکم پر است." }] },
          { de: "der Rücken", fa: "کمر/پشت", article: "der", plural: "die Rücken", ipa: "[ˈʁʏkən]", examples: [{ de: "Der Rücken tut weh.", fa: "کمرم درد می‌کند." }] },
          { de: "das Haar", fa: "مو", article: "das", plural: "die Haare", ipa: "[haːɐ̯]", examples: [{ de: "Das Haar ist lang.", fa: "مو بلند است." }] },
          { de: "die Zunge", fa: "زبان", article: "die", plural: "die Zungen", ipa: "[ˈtsʊŋə]", examples: [{ de: "Die Zunge ist rot.", fa: "زبان قرمز است." }] }
        ]
      },
      {
        title: "افعال خرید",
        words: [
          { de: "kaufen", fa: "خریدن", article: "", plural: "", ipa: "[ˈkaʊfən]", conjugation: { ich:"kaufe", du:"kaufst", er:"kauft", wir:"kaufen", ihr:"kauft", sie:"kaufen" }, examples: [{ de: "Ich kaufe Brot.", fa: "نان می‌خرم." }] },
          { de: "bezahlen", fa: "پرداختن", article: "", plural: "", ipa: "[bəˈtsaːlən]", conjugation: { ich:"bezahle", du:"bezahlst", er:"bezahlt", wir:"bezahlen", ihr:"bezahlt", sie:"bezahlen" }, examples: [{ de: "Ich bezahle mit Karte.", fa: "با کارت پرداخت می‌کنم." }] },
          { de: "kosten", fa: "قیمت داشتن", article: "", plural: "", ipa: "[ˈkɔstən]", conjugation: { ich:"koste", du:"kostest", er:"kostet", wir:"kosten", ihr:"kostet", sie:"kosten" }, examples: [{ de: "Das kostet zehn Euro.", fa: "این ده یورو می‌شود." }] },
          { de: "möchten", fa: "می‌خواستن", article: "", plural: "", ipa: "[ˈmœçtən]", conjugation: { ich:"möchte", du:"möchtest", er:"möchte", wir:"möchten", ihr:"möchtet", sie:"möchten" }, examples: [{ de: "Ich möchte Kaffee.", fa: "می‌خواهم قهوه." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Im Supermarkt. Anna: Guten Tag! Ich möchte bitte zwei Kilo Äpfel. Verkäufer: Welche Sorte? Anna: Die roten, bitte. Verkäufer: Das macht drei Euro. Anna: Und ein Kilo Bananen. Verkäufer: Möchten Sie auch Gemüse? Anna: Ja, ein Pfund Tomaten, bitte. Verkäufer: Noch etwas? Anna: Nein danke, das ist alles. Verkäufer: Macht zusammen fünfzig Euro. Anna: Hier bitte. Auf Wiedersehen! Verkäufer: Auf Wiedersehen!",
      translation: "در سوپرمارکت. آنا: سلام! می‌خواهم لطفاً دو کیلو سیب. فروشنده: کدام نوع؟ آنا: قرمزها، لطفاً. فروشنده: می‌شود سه یورو. آنا: و یک کیلو موز. فروشنده: آیا سبزی هم می‌خواهید؟ آنا: بله، نیم پوند گوجه، لطفاً. فروشنده: چیز دیگری؟ آنا: نه ممنون، همین‌ها تمام است. فروشنده: جمعاً پنجاه یورو می‌شود. آنا: اینجا لطفاً. خداحافظ! فروشنده: خداحافظ!",
      questions: [
        { question: "آنا چند کیلو سیب خرید؟", answer: "دو کیلو" },
        { question: "فروشنده چقدر پول خواست؟", answer: "پنجاه یورو" },
        { question: "آنا چه سبزی خرید؟", answer: "گوجه فرنگی" }
      ]
    },
    {
      text: "Beim Arzt. Patient: Herr Doktor, mir tut alles weh! Arzt: Was genau tut weh? Patient: Der Kopf, der Bauch und der Rücken. Arzt: Wie lange schon? Patient: Seit drei Tagen. Arzt: Haben Sie Fieber? Patient: Ja, ich habe 38 Grad Fieber. Arzt: Dann müssen Sie viel Wasser trinken und sich ausruhen.",
      translation: "نزد پزشک. بیمار: آقای دکتر، همه جایم درد می‌کند! پزشک: دقیقاً کجاها درد می‌کند؟ بیمار: سر، شکم و کمر. پزشک: چه مدت است؟ بیمار: از سه روز پیش. پزشک: تب دارید؟ بیمار: بله، تب ۳۸ درجه دارم. پزشک: پس باید آب زیاد بنوشید و استراحت کنید.",
      questions: [
        { question: "بیمار کجایش درد می‌کند؟", answer: "سر، شکم و کمر" },
        { question: "تب بیمار چند درجه است؟", answer: "۳۸ درجه" }
      ]
    }
  ],
  writing: [
    {
      title: "مکالمه خرید",
      prompt: "یک مکالمه کوتاه در فروشگاه بنویسید که در آن خرید میوه و سبزیجات را تمرین کنید.",
      steps: [
        { title: "قدم اول: سلام و درخواست", text: "با سلام شروع کنید و چیزی که می‌خواهید را بگویید.", example: { de: "Guten Tag! Ich möchte bitte zwei Kilo Äpfel.", fa: "سلام! می‌خواهم لطفاً دو کیلو سیب." } },
        { title: "قدم دوم: قیمت و پرداخت", text: "قیمت را بپرسید و پرداخت کنید.", example: { de: "Was kostet das? Hier bitte.", fa: "چقدر می‌شود؟ اینجا لطفاً." } }
      ],
      modelAnswer: "Kunde: Guten Tag! Ich möchte drei Kilo Bananen. Verkäufer: Die kosten vier Euro pro Kilo. Kunde: Und ein Kilo Tomaten, bitte. Verkäufer: Das macht zusammen zehn Euro fünfzig. Kunde: Hier sind zwanzig Euro. Verkäufer: Hier ist das Rückgeld: neun Euro fünfzig. Kunde: Danke schön! Auf Wiedersehen!"
    }
  ],
  listening: [
    {
      title: "گوش دادن به مکالمه خرید",
      instruction: "به مکالمه گوش دهید و تعداد موارد خریداری شده را بنویسید.",
      sentences: [
        { de: "Ich möchte bitte ein Kilo Äpfel.", fa: "می‌خواهم لطفاً یک کیلو سیب.", tts: "Ich möchte bitte ein Kilo Äpfel." },
        { de: "Was kostet das Brot?", fa: "نان چقدر می‌شود؟", tts: "Was kostet das Brot?" },
        { de: "Der Kopf tut mir weh.", fa: "سرم درد می‌کند.", tts: "Der Kopf tut mir weh." },
        { de: "Ich brauche eine Flasche Wasser.", fa: "نیاز دارم به یک بطری آب.", tts: "Ich brauche eine Flasche Wasser." }
      ]
    }
  ],
  speaking: [
    {
      title: "بیان خرید",
      pattern: "Ich möchte bitte [ مقدار ] [ کالا ]. Was kostet das?",
      exercise: "حداقل سه درخواست خرید با واحدهای مختلف تمرین کنید."
    },
    {
      title: "بیان درد",
      pattern: "Mein [عضو] tut weh. / Der [عضو] tut mir weh.",
      exercise: "ده جمله برای بیان درد اعضای مختلف بدن تمرین کنید."
    }
  ],
  cultureTip: "در آلمان، فروشگاه‌ها معمولاً از شنبه تا جمعه از ساعت ۸ صبح تا ۸ شب باز هستند. یکشنبه‌ها همه فروشگاه‌ها بسته است. در سوپرمارکت‌ها، معمولاً خودتان باید کیسه بردارید یا خرید کنید. برای میوه و سبزیجات، باید خودتان میوه را در کیسه بگذارید و برچسب قیمت را بزنید.",
  examData: {
    questions: [
      { question: "«یک کیلوگرم سیب» چگونه گفته می‌شود؟", options: ["ein Kilo Äpfel", "ein Kilos Äpfel", "einen Kilo Äpfel", "eine Kilo Äpfel"], answer: 0 },
      { question: "«سرم درد می‌کند» چگونه گفته می‌شود؟", options: ["Mein Kopf tut weh.", "Mein Kopf ist weh.", "Kopf tut mir weh.", "Ich habe Kopf weh."], answer: 0 },
      { question: "کدام واحد برای شیر استفاده می‌شود؟", options: ["der Liter", "das Kilo", "das Stück", "die Tüte"], answer: 0 },
      { question: "«بطری» چگونه گفته می‌شود؟", options: ["die Flasche", "die Dose", "die Tüte", "das Stück"], answer: 0 },
      { question: "«دست» چگونه گفته می‌شود؟", options: ["die Hand", "der Arm", "das Bein", "der Fuß"], answer: 0 },
      { question: "«چقدر می‌شود؟» چگونه گفته می‌شود؟", options: ["Was kostet das?", "Wie teuer ist das?", "Wie viel ist das?", "Kostet es viel?"], answer: 0 },
      { question: "«شکم درد می‌کند» چگونه گفته می‌شود؟", options: ["Der Bauch tut weh.", "Bauch hat weh.", "Ich habe Bauchweh.", "Der Bauch ist weh."], answer: 0 },
      { question: "کدام برای نان استفاده می‌شود؟", options: ["das Brot", "die Brötchen", "beide", "weder noch"], answer: 2 },
      { question: "«پا» (کف پا) چگونه گفته می‌شود؟", options: ["der Fuß", "das Bein", "der Schritt", "die Sohle"], answer: 0 },
      { question: "«قوطی» چگونه گفته می‌شود؟", options: ["die Dose", "die Büchse", "die Kiste", "die Packung"], answer: 0 }
    ]
  }
};