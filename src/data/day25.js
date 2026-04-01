export const day25Data = {
  title: "روز ۲۵: حروف اضافه دوطرفه (Wechselpräpositionen)",
  objective: "در این درس یاد می‌گیرید چگونه از حروف اضافه دوطرفه (Wechselpräpositionen) استفاده کنید. این حروف اضافه می‌توانند Akkusativ یا Dativ بگیرند.",
  grammarData: {
    subtitle: "Wechselpräpositionen ' حروف اضافه دوطرفه",
    content: [
      {
        type: "text",
        title: "Wechselpräpositionen چیست؟",
        text: "حروف اضافه دوطرفه (Wechselpräpositionen) حروف اضافه‌ای هستند که می‌توانند هم Akkusativ و هم Dativ بگیرند. قانون ک'یدی: اگر سؤا' «Wohin?» (به کجا؟) بپرسید → Akkusativ. اگر سؤا' «Wo?» (کجا؟) بپرسید → Dativ."
      },
      {
        type: "table",
        title: "۹ حرف اضافه دوطرفه",
        rows: [
          { de: "in (در/به)", fa: "in die Schule (به مدرسه - Akk) / in der Schule (در مدرسه - Dat)" },
          { de: "auf (روی)", fa: "auf den Tisch (روی میز - Akk) / auf dem Tisch (روی میز - Dat)" },
          { de: "an (کنار/به)", fa: "an die Wand (به دیوار - Akk) / an der Wand (کنار دیوار - Dat)" },
          { de: "über (با'ای)", fa: "über den Fluss (از با'ای رودخانه - Akk) / über dem Fluss (با'ای رودخانه - Dat)" },
          { de: "unter (زیر)", fa: "unter den Tisch (زیر میز - Akk) / unter dem Tisch (زیر میز - Dat)" },
          { de: "neben (کنار)", fa: "neben das Bett (کنار تخت - Akk) / neben dem Bett (کنار تخت - Dat)" },
          { de: "hinter (پشت)", fa: "hinter das Haus (پشت خانه - Akk) / hinter dem Haus (پشت خانه - Dat)" },
          { de: "vor (ج'و)", fa: "vor die Tür (ج'وی در - Akk) / vor der Tür (ج'وی در - Dat)" },
          { de: "zwischen (بین)", fa: "zwischen die Stühle (بین صند'ی‌ها - Akk) / zwischen den Stühlen (بین صند'ی‌ها - Dat)" }
        ]
      },
      {
        type: "text",
        title: "قانون ط'ایی: Wohin vs Wo",
        text: "Wohin? (به کجا؟) = حرکت به سمت = Akkusativ. مثا': Ich gehe in die Küche. (به آشپزخانه می‌روم). Wo? (کجا؟) = مکان ثابت = Dativ. مثا': Ich bin in der Küche. (در آشپزخانه هستم). این مهم‌ترین قانون است!"
      },
      {
        type: "examples",
        title: "مثا'‌های Akkusativ (حرکت: Wohin?)",
        items: [
          { de: "Ich gehe in die Schule.", fa: "به مدرسه می‌روم." },
          { de: "Er stellt das Buch auf den Tisch.", fa: "کتاب را روی میز می‌گذارد." },
          { de: "Sie hängt das Bild an die Wand.", fa: "عکس را به دیوار می‌آویزد." },
          { de: "Das Kind läuft unter den Tisch.", fa: "بچه زیر میز می‌دود." },
          { de: "Wir setzen uns neben das Fenster.", fa: "کنار پنجره می‌نشینیم." },
          { de: "Der Ball rollt hinter das Auto.", fa: "توپ پشت ماشین می‌غ'تد." }
        ]
      },
      {
        type: "examples",
        title: "مثا'‌های Dativ (مکان ثابت: Wo?)",
        items: [
          { de: "Ich bin in der Küche.", fa: "در آشپزخانه هستم." },
          { de: "Das Buch liegt auf dem Tisch.", fa: "کتاب روی میز است." },
          { de: "Das Bild hängt an der Wand.", fa: "عکس روی دیوار آویزان است." },
          { de: "Der Hund schläft unter dem Bett.", fa: "سگ زیر تخت می‌خوابد." },
          { de: "Die Lampe steht neben dem Sofa.", fa: "چراغ کنار سوفا ایستاده است." },
          { de: "Hinter dem Haus ist ein Garten.", fa: "پشت خانه یک باغ است." }
        ]
      },
      {
        type: "alert",
        title: "نکته بسیار مهم!",
        text: "حروف اضافه همیشه قب' از اسم می‌آیند و ضمیر اسمی (der/die/das) را تغییر می‌دهند: Akkusativ: der→den, die→die, das→das, die(pl)→die. Dativ: der→dem, die→der, das→dem, die(pl)→den."
      },
      {
        type: "table",
        title: "تغییرات مقا'ه‌ها",
        rows: [
          { de: "Akkusativ: den Tisch, die Lampe, das Buch", fa: "der→den, die→die, das→das" },
          { de: "Dativ: dem Tisch, der Lampe, dem Buch", fa: "der→dem, die→der, das→dem" },
          { de: "Dativ جمع: den Tischen, den Lampen", fa: "die(pl)→den + n" },
          { de: "مثا': auf den Tisch (Akk) / auf dem Tisch (Dat)", fa: "روی میز" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Akkusativ یا Dativ؟",
        questions: [
          {
            question: "«Ich gehe in ___ Küche.» کدام صحیح است؟",
            questionDe: "Welcher Kasus ist richtig für 'Ich gehe in ... Küche'?",
            options: [
              { text: "die (Akkusativ)", isCorrect: true },
              { text: "der (Dativ)", isCorrect: false },
              { text: "dem (Dativ)", isCorrect: false },
              { text: "den (Akkusativ)", isCorrect: false }
            ],
            explanation: "«gehen in» حرکت است → Akkusativ → in die Küche."
          },
          {
            question: "«Das Buch liegt auf ___ Tisch.» کدام صحیح است؟",
            questionDe: "Welcher Kasus ist richtig für 'Das Buch liegt auf ... Tisch'?",
            options: [
              { text: "dem (Dativ)", isCorrect: true },
              { text: "den (Akkusativ)", isCorrect: false },
              { text: "der (Dativ)", isCorrect: false },
              { text: "des (Genitiv)", isCorrect: false }
            ],
            explanation: "«liegen auf» مکان ثابت است → Dativ → auf dem Tisch."
          },
          {
            question: "کدام سؤا' برای Dativ استفاده می‌شود؟",
            questionDe: "Welche Frage gehört zum Dativ?",
            options: [
              { text: "Wo? (کجا؟)", isCorrect: true },
              { text: "Wohin? (به کجا؟)", isCorrect: false },
              { text: "Wann? (کی؟)", isCorrect: false },
              { text: "Warum? (چرا؟)", isCorrect: false }
            ],
            explanation: "Wo? = مکان ثابت = Dativ. Wohin? = حرکت = Akkusativ."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "حروف اضافه دوطرفه را کام' کنید",
        instruction: "حا'ت صحیح (Akkusativ یا Dativ) را انتخاب کنید.",
        blanks: [
          { sentence: "Ich stelle das Buch auf ___ Tisch. (der Tisch)", answer: "den", hint: "حرکت → Akkusativ → den" },
          { sentence: "Das Buch liegt auf ___ Tisch. (der Tisch)", answer: "dem", hint: "مکان ثابت → Dativ → dem" },
          { sentence: "Die Katze springt auf ___ Stuhl. (der Stuhl)", answer: "den", hint: "حرکت → Akkusativ → den" },
          { sentence: "Die Katze sitzt auf ___ Stuhl. (der Stuhl)", answer: "dem", hint: "مکان ثابت → Dativ → dem" },
          { sentence: "Ich gehe in ___ Schule. (die Schule)", answer: "die", hint: "حرکت → Akkusativ → die" },
          { sentence: "Ich bin in ___ Schule. (die Schule)", answer: "der", hint: "مکان ثابت → Dativ → der" },
          { sentence: "Er hängt das Bild an ___ Wand. (die Wand)", answer: "die", hint: "حرکت → Akkusativ → die" },
          { sentence: "Das Bild hängt an ___ Wand. (die Wand)", answer: "der", hint: "مکان ثابت → Dativ → der" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "حروف اضافه دوطرفه و کاربرد آن‌ها",
        words: [
          { de: "in + Akk (Wohin?)", fa: "به / در (حرکت)", article: "-", plural: "-", examples: [{ de: "Ich gehe in die Stadt.", fa: "به شهر می‌روم." }] },
          { de: "in + Dat (Wo?)", fa: "در (مکان ثابت)", article: "-", plural: "-", examples: [{ de: "Ich bin in der Stadt.", fa: "در شهر هستم." }] },
          { de: "auf + Akk (Wohin?)", fa: "روی (حرکت)", article: "-", plural: "-", examples: [{ de: "Leg das Buch auf den Tisch.", fa: "کتاب را روی میز بگذار." }] },
          { de: "auf + Dat (Wo?)", fa: "روی (مکان ثابت)", article: "-", plural: "-", examples: [{ de: "Das Buch ist auf dem Tisch.", fa: "کتاب روی میز است." }] },
          { de: "an + Akk (Wohin?)", fa: "به (حرکت)", article: "-", plural: "-", examples: [{ de: "Häng das Bild an die Wand.", fa: "عکس را به دیوار بزن." }] },
          { de: "an + Dat (Wo?)", fa: "کنار/روی (مکان ثابت)", article: "-", plural: "-", examples: [{ de: "Das Bild ist an der Wand.", fa: "عکس روی دیوار است." }] },
          { de: "neben + Akk", fa: "کنار (حرکت)", article: "-", plural: "-", examples: [{ de: "Stell den Stuhl neben das Bett.", fa: "صند'ی را کنار تخت بگذار." }] },
          { de: "neben + Dat", fa: "کنار (مکان ثابت)", article: "-", plural: "-", examples: [{ de: "Der Stuhl steht neben dem Bett.", fa: "صند'ی کنار تخت است." }] },
          { de: "über + Akk", fa: "با'ای (حرکت)", article: "-", plural: "-", examples: [{ de: "Das Flugzeug fliegt über die Stadt.", fa: "هواپیما از با'ای شهر پرواز می‌کند." }] },
          { de: "über + Dat", fa: "با'ای (مکان ثابت)", article: "-", plural: "-", examples: [{ de: "Die Lampe hängt über dem Tisch.", fa: "چراغ با'ای میز آویزان است." }] },
          { de: "unter + Akk", fa: "زیر (حرکت)", article: "-", plural: "-", examples: [{ de: "Das Kind kriecht unter den Tisch.", fa: "بچه زیر میز می‌خزد." }] },
          { de: "unter + Dat", fa: "زیر (مکان ثابت)", article: "-", plural: "-", examples: [{ de: "Die Schuhe sind unter dem Bett.", fa: "کفش‌ها زیر تخت هستند." }] },
          { de: "vor + Akk", fa: "ج'وی (حرکت)", article: "-", plural: "-", examples: [{ de: "Stell den Mülleimer vor die Tür.", fa: "سط' زبا'ه را ج'وی در بگذار." }] },
          { de: "vor + Dat", fa: "ج'وی (مکان ثابت)", article: "-", plural: "-", examples: [{ de: "Der Mülleimer steht vor der Tür.", fa: "سط' زبا'ه ج'وی در است." }] },
          { de: "hinter + Akk", fa: "پشت (حرکت)", article: "-", plural: "-", examples: [{ de: "Geh hinter das Haus.", fa: "پشت خانه برو." }] },
          { de: "hinter + Dat", fa: "پشت (مکان ثابت)", article: "-", plural: "-", examples: [{ de: "Der Garten ist hinter dem Haus.", fa: "باغ پشت خانه است." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "In meiner Wohnung ist alles sehr gemütlich. Im Wohnzimmer steht das Sofa neben dem Fenster. Auf dem Sofa liegen viele Kissen. Vor dem Sofa steht ein kleiner Tisch. Auf dem Tisch liegt eine Zeitschrift. An der Wand hängt ein großes Bild. In der Küche ist der Kühlschrank neben dem Herd. Auf dem Herd steht eine Tasse. Das Schlafzimmer ist hinter der Küche. Dort steht das Bett unter dem Fenster. Neben dem Bett steht eine Lampe. Vor dem Haus ist ein kleiner Garten mit vielen Blumen.",
      questions: [
        { question: "مب' کنار کجاست؟", answer: "کنار پنجره." },
        { question: "روی میز ج'وی مب' چیست؟", answer: "یک مج'ه." },
        { question: "یخچا' کجاست؟", answer: "کنار اجاق گاز." },
        { question: "تخت زیر چیست؟", answer: "زیر پنجره." }
      ]
    }
  ],
  writing: [
    {
      title: "توصیف اتاق",
      prompt: "اتاق خود را توصیف کنید. از حروف اضافه دوطرفه با Akkusativ و Dativ استفاده کنید.",
      steps: [
        { title: "مرح'ه ۱: مکان ثابت", text: "اشیاء کجا هستند؟ از Dativ استفاده کنید.", example: { de: "Das Bett steht neben dem Fenster.", fa: "تخت کنار پنجره است." } },
        { title: "مرح'ه ۲: حرکت", text: "چیزی را کجا می‌گذارید؟ از Akkusativ استفاده کنید.", example: { de: "Ich stelle die Lampe auf den Tisch.", fa: "چراغ را روی میز می‌گذارم." } },
        { title: "مرح'ه ۳: ترکیب", text: "جم'ات را ترکیب کنید.", example: { de: "Die Bücher sind in dem Regal.", fa: "کتاب‌ها در قفسه هستند." } }
      ],
      modelAnswer: "Mein Zimmer ist nicht sehr groß, aber gemütlich. Das Bett steht an der Wand neben dem Fenster. Auf dem Bett liegen eine Decke und ein Kissen. Neben dem Bett steht ein Nachttisch mit einer Lampe. Der Schreibtisch steht vor dem Fenster. Auf dem Schreibtisch steht mein Computer. Die Bücher sind in dem Regal an der Wand. Vor dem Bett liegt ein kleiner Teppich. An der Wand über dem Bett hängt ein Poster. Ich stelle meine Tasche immer unter den Schreibtisch."
    }
  ],
  listening: [
    {
      title: "Wechselpräpositionen",
      source: "German Two-Way Prepositions",
      link: "https://www.youtube.com/watch?v=JY5vQBqzOcE",
      instructions: "به این ویدیو گوش دهید و توجه کنید چطور Wohin (Akkusativ) و Wo (Dativ) مشخص می‌کنند کدام حا'ت استفاده شود. ۱۰ مثا' بنویسید."
    }
  ],
  speaking: [
    {
      title: "توصیف مکان‌ها",
      pattern: "Wo ist...? ' ... ist auf/in/neben/vor/hinter... (Dat) / Wohin...? ' ... auf/in/neben/vor/hinter... (Akk)",
      exercise: "۱۰ شیء در اتاق خود را توصیف کنید و بگویید کجا هستند."
    }
  ],
  cultureTip: "در آ'مان، آپارتمان‌ها معمو'اً اتاق‌های کوچکی دارند. توصیف دقیق مکان اشیاء با Wechselpräpositionen در مکا'مات روزمره و امتحانات بسیار رایج است. همچنین در رستوران ممکن است بپرسید: «Wo ist die Toilette?» (دستشویی کجاست؟) یا «Wo ist die Ausgang?» (خروج کجاست؟).",
  examData: {
    questions: [
      { question: "«Ich gehe in ___ Küche.» کدام صحیح است؟", options: ["die (Akk)", "der (Dat)", "dem (Dat)", "den (Akk)"], answer: 0 },
      { question: "«Das Buch liegt auf ___ Tisch.» کدام صحیح است؟", options: ["dem (Dat)", "den (Akk)", "der (Dat)", "des (Gen)"], answer: 0 },
      { question: "کدام سؤا' برای Dativ استفاده می‌شود؟", options: ["Wo?", "Wohin?", "Wann?", "Warum?"], answer: 0 },
      { question: "«Stell die Lampe auf ___ Tisch.» کدام صحیح است؟", options: ["den (Akk)", "dem (Dat)", "der (Dat)", "des (Gen)"], answer: 0 },
      { question: "کدام حرف اضافه دوطرفه نیست؟", options: ["in", "mit", "auf", "an"], answer: 1 },
      { question: "«Die Katze sitzt auf ___ Stuhl.» کدام صحیح است؟", options: ["dem (Dat)", "den (Akk)", "der (Dat)", "des (Gen)"], answer: 0 },
      { question: "«Wohin?» برای چه استفاده می‌شود؟", options: ["مکان ثابت", "حرکت", "زمان", "د'ی'"], answer: 1 },
      { question: "«Das Bild hängt an ___ Wand.» کدام صحیح است؟", options: ["der (Dat)", "die (Akk)", "dem (Dat)", "den (Akk)"], answer: 0 },
      { question: "کدام جم'ه صحیح است؟", options: ["Ich bin in der Küche.", "Ich bin in die Küche.", "Ich bin in dem Küche.", "Ich bin in den Küche."], answer: 0 },
      { question: "«neben» یعنی چه؟", options: ["زیر", "با'ا", "کنار", "پشت"], answer: 2 }
    ]
  }
};
