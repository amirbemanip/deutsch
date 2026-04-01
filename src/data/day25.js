export const day25Data = {
  title: "روز ۲۵: حروف اضافه دوطرفه (Wechselpräpositionen)",
  objective: "در این درس یاد می‌گیرید چگونه از حروف اضافه دوطرفه استفاده کنید.قاعده: Wo? → Dativ. Wohin? → Akkusativ.",
  grammarData: {
    subtitle: "Wechselpräpositionen - حروف اضافه دوطرفه",
    content: [
      {
        type: "text",
        title: "Wechselpräpositionen چیست؟",
        text: "حروف اضافه دوطرفه (Wechselpräpositionen) حروف اضافه‌ای هستند که می‌توانند هم Akkusativ و هم Dativ بگیرند.قاعده کلیدی: اگر سؤال «Wohin?» (به کجا؟) بپرسید → Akkusativ (حرکت). اگر سؤال «Wo?» (کجا؟) بپرسید → Dativ (مکان ثابت). این ۹ حرف اضافه بسیار مهم هستند."
      },
      {
        type: "table",
        title: "۹ حرف اضافه دوطرفه",
        rows: [
          { de: "in [ɪn]", fa: "در/به داخل" },
          { de: "auf [aʊ̯f]", fa: "روی" },
          { de: "an [aːn]", fa: "کنار/به سمت" },
          { de: "über [ˈyːbɐ]", fa: "بالای/درباره" },
          { de: "unter [ˈʊntɐ]", fa: "زیر" },
          { de: "neben [ˈneːbn̩]", fa: "کنار" },
          { de: "zwischen [ˈtʃvɪʃən]", fa: "بین" },
          { de: "vor [foːɐ̯]", fa: "جلوی/قبل از" },
          { de: "hinter [ˈhɪntɐ]", fa: "پشت" }
        ]
      },
      {
        type: "table",
        title: "تغییرات حروف تعریف با Akkusativ و Dativ",
        rows: [
          { de: "Akkusativ: der→den, die→die, das→das, die(pl)→die", fa: "حرکت به سمت → Akkusativ" },
          { de: "Dativ: der→dem, die→der, das→dem, die(pl)→den+N", fa: "مکان ثابت → Dativ" },
          { de: "Ich gehe IN DIE Küche (Akkusativ)", fa: "من به آشپزخانه می‌روم (حرکت)" },
          { de: "Ich bin IN DER Küche (Dativ)", fa: "من در آشپزخانه هستم (مکان)" },
          { de: "Er legt das Buch AUF DEN Tisch (Akkusativ)", fa: "او کتاب را روی میز می‌گذارد (حرکت)" },
          { de: "Das Buch liegt AUF DEM Tisch (Dativ)", fa: "کتاب روی میز است (مکان)" }
        ]
      },
      {
        type: "table",
        title: "مثال‌های بیشتر",
        rows: [
          { de: "Ich bin in der Küche. (Wo? → Dativ)", fa: "من در آشپزخانه هستم." },
          { de: "Ich gehe in die Küche. (Wohin? → Akkusativ)", fa: "من به آشپزخانه می‌روم." },
          { de: "Das Bild hängt an der Wand. (Wo? → Dativ)", fa: "عکس روی دیوار آویزان است." },
          { de: "Ich hänge das Bild an die Wand. (Wohin? → Akkusativ)", fa: "عکس را به دیوار می‌زنم." },
          { de: "Der Ball ist unter dem Tisch. (Wo? → Dativ)", fa: "توپ زیر میز است." },
          { de: "Ich schiebe den Ball unter den Tisch. (Wohin? → Akkusativ)", fa: "توپ را زیر میز هل می‌دهم." },
          { de: "Die Katze sitzt auf dem Stuhl. (Wo? → Dativ)", fa: "گربه روی صندلی نشسته." },
          { de: "Die Katze springt auf den Stuhl. (Wohin? → Akkusativ)", fa: "گربه روی صندلی می‌پرد." }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های بیشتر Wechselpräpositionen",
        items: [
          { de: "Ich bin in der Schule.", fa: "در مدرسه هستم." },
          { de: "Ich gehe in die Schule.", fa: "به مدرسه می‌روم." },
          { de: "Das Buch ist auf dem Tisch.", fa: "کتاب روی میز است." },
          { de: "Ich lege das Buch auf den Tisch.", fa: "کتاب را روی میز می‌گذارم." },
          { de: "Die Uhr hängt an der Wand.", fa: "ساعت روی دیوار آویزان است." },
          { de: "Ich hänge die Uhr an die Wand.", fa: "ساعت را به دیوار می‌زنم." },
          { de: "Das Kind steht zwischen den Eltern.", fa: "بچه بین والدین ایستاده." },
          { de: "Er stellt sich zwischen die Kinder.", fa: "او بین بچه‌ها می‌ایستد." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم!",
        text: "همیشه از خودتان بپرسید: «آیا حرکتی اتفاق می‌افتد؟» اگر بله → Akkusativ (Wohin?). اگر نه و مکان ثابت است → Dativ (Wo?). فعل‌های حرکتی مثل gehen, fahren, stellen, legen, setzen → Akkusativ. فعل‌های حالت مثل sein, stehen, liegen, sitzen, hängen → Dativ."
      },
      {
        type: "interactive_quiz",
        title: "Akkusativ یا Dativ؟",
        questions: [
          {
            question: "کدام جمله صحیح است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich bin in der Küche.", isCorrect: true },
              { text: "Ich bin in die Küche.", isCorrect: false },
              { text: "Ich bin in dem Küche.", isCorrect: false },
              { text: "Ich bin in den Küche.", isCorrect: false }
            ],
            explanation: "«bin» حالت ثابت است → Dativ: in der Küche."
          },
          {
            question: "کدام جمله صحیح است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich gehe in der Küche.", isCorrect: false },
              { text: "Ich gehe in die Küche.", isCorrect: true },
              { text: "Ich gehe in dem Küche.", isCorrect: false },
              { text: "Ich gehe in den Küche.", isCorrect: false }
            ],
            explanation: "«gehe» حرکت است → Akkusativ: in die Küche."
          },
          {
            question: "«Wo?» یعنی کدام حالت؟",
            questionDe: "Welcher Fall ist 'Wo'?",
            options: [
              { text: "Akkusativ", isCorrect: false },
              { text: "Dativ", isCorrect: true },
              { text: "Nominativ", isCorrect: false },
              { text: "Genitiv", isCorrect: false }
            ],
            explanation: "«Wo?» (کجا؟) → Dativ (مکان ثابت)."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "Akkusativ یا Dativ صحیح",
        instruction: "شکل صحیح حرف تعریف را با توجه به Akkusativ یا Dativ بنویسید.",
        blanks: [
          { sentence: "Ich bin in ___ Küche. (die Küche)", answer: "der", hint: "«bin» → مکان ثابت → Dativ: die→der" },
          { sentence: "Ich gehe in ___ Küche. (die Küche)", answer: "die", hint: "«gehe» → حرکت → Akkusativ: die→die" },
          { sentence: "Das Buch liegt auf ___ Tisch. (der Tisch)", answer: "dem", hint: "«liegt» → مکان → Dativ: der→dem" },
          { sentence: "Ich lege das Buch auf ___ Tisch. (der Tisch)", answer: "den", hint: "«lege» → حرکت → Akkusativ: der→den" },
          { sentence: "Er sitzt neben ___ Fenster. (das Fenster)", answer: "dem", hint: "«sitzt» → مکان → Dativ: das→dem" },
          { sentence: "Sie stellt die Lampe neben ___ Sofa. (das Sofa)", answer: "das", hint: "«stellt» → حرکت → Akkusativ: das→das" },
          { sentence: "Die Katze ist unter ___ Bett. (das Bett)", answer: "dem", hint: "«ist» → مکان → Dativ: das→dem" },
          { sentence: "Das Kind läuft unter ___ Baum. (der Baum)", answer: "den", hint: "«läuft» → حرکت → Akkusativ: der→den" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "حروف اضافه دوطرفه با مثال",
        words: [
          { de: "in", fa: "در/به داخل", ipa: "[ɪn]", article: "-", plural: "-", examples: [{ de: "Ich bin im Zimmer. / Ich gehe ins Zimmer.", fa: "در اتاق هستم. / به اتاق می‌روم." }, { de: "Er ist in der Schule.", fa: "او در مدرسه است." }] },
          { de: "auf", fa: "روی", ipa: "[aʊ̯f]", article: "-", plural: "-", examples: [{ de: "Das Buch ist auf dem Tisch.", fa: "کتاب روی میز است." }, { de: "Ich stelle die Vase auf den Tisch.", fa: "گلدان را روی میز می‌گذارم." }] },
          { de: "an", fa: "کنار/به سمت", ipa: "[aːn]", article: "-", plural: "-", examples: [{ de: "Das Bild ist an der Wand.", fa: "عکس روی دیوار است." }, { de: "Ich hänge das Bild an die Wand.", fa: "عکس را به دیوار می‌زنم." }] },
          { de: "über", fa: "بالای/درباره", ipa: "[ˈyːbɐ]", article: "-", plural: "-", examples: [{ de: "Das Flugzeug fliegt über der Stadt.", fa: "هواپیما بالای شهر پرواز می‌کند." }, { de: "Sprechen wir über das Wetter.", fa: "درباره آب و هوا صحبت کنیم." }] },
          { de: "unter", fa: "زیر", ipa: "[ˈʊntɐ]", article: "-", plural: "-", examples: [{ de: "Der Hund ist unter dem Tisch.", fa: "سگ زیر میز است." }, { de: "Ich stelle die Kiste unter den Tisch.", fa: "جعبه را زیر میز می‌گذارم." }] },
          { de: "neben", fa: "کنار", ipa: "[ˈneːbn̩]", article: "-", plural: "-", examples: [{ de: "Ich sitze neben meinem Freund.", fa: "کنار دوستم نشسته‌ام." }, { de: "Stell dich neben mich!", fa: "کنار من بایست!" }] },
          { de: "zwischen", fa: "بین", ipa: "[ˈtʃvɪʃən]", article: "-", plural: "-", examples: [{ de: "Das Kind steht zwischen den Eltern.", fa: "بچه بین والدین ایستاده." }, { de: "Er setzt sich zwischen uns.", fa: "او بین ما می‌نشیند." }] },
          { de: "vor", fa: "جلوی/قبل از", ipa: "[foːɐ̯]", article: "-", plural: "-", examples: [{ de: "Das Auto steht vor dem Haus.", fa: "ماشین جلوی خانه است." }, { de: "Vor dem Essen wasche ich mir die Hände.", fa: "قبل از غذا دست‌هایم را می‌شویم." }] },
          { de: "hinter", fa: "پشت", ipa: "[ˈhɪntɐ]", article: "-", plural: "-", examples: [{ de: "Der Garten ist hinter dem Haus.", fa: "باغ پشت خانه است." }, { de: "Er stellt sich hinter mich.", fa: "او پشت من می‌ایستد." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Ich wohne in einer großen Wohnung. Die Küche ist neben dem Wohnzimmer. Das Sofa steht in der Ecke. Das Bild hängt an der Wand. Die Lampe steht auf dem Tisch. Mein Bett ist im Schlafzimmer. Die Katze liegt oft unter dem Bett. Im Badezimmer ist die Waschmaschine. Der Kühlschrank ist in der Küche. Vor dem Haus ist ein großer Garten mit Blumen. Hinter dem Haus ist ein kleiner Teich.",
      translation: "من در یک آپارتمان بزرگ زندگی می‌کنم. آشپزخانه کنار اتاق نشیمن است. مبل در گوشه است. عکس روی دیوار آویزان است. چراغ روی میز است. تختم در اتاق خواب است. گربه اغلب زیر تخت دراز کشیده. در حمام ماشین لباسشویی است. یخچال در آشپزخانه است. جلوی خانه باغ بزرگی با گل‌هاست. پشت خانه حوض کوچکی است.",
      questions: [
        { question: "آشپزخانه کجاست؟", answer: "کنار اتاق نشیمن." },
        { question: "گربه کجاست؟", answer: "زیر تخت." },
        { question: "چراغ کجاست؟", answer: "روی میز." },
        { question: "جلوی خانه چیست؟", answer: "باغ بزرگی با گل‌ها." }
      ]
    }
  ],
  writing: [
    {
      title: "توصیف خانه",
      prompt: "خانه خود را توصیف کنید. از Wechselpräpositionen استفاده کنید.",
      steps: [
        { title: "مرحله ۱: اتاق‌ها", text: "چند اتاق دارید؟", example: { de: "Ich habe drei Zimmer.", fa: "سه اتاق دارم." } },
        { title: "مرحله ۲: مکان وسایل", text: "وسایل کجا هستند؟ (Wo?)", example: { de: "Das Bett ist im Schlafzimmer.", fa: "تخت در اتاق خواب است." } },
        { title: "مرحله ۳: حرکت", text: "وسایل را کجا می‌گذارید؟ (Wohin?)", example: { de: "Ich stelle die Lampe auf den Tisch.", fa: "چراغ را روی میز می‌گذارم." } }
      ],
      modelAnswer: "Ich wohne in einer kleinen Wohnung. Es gibt ein Wohnzimmer, eine Küche und ein Schlafzimmer. Im Wohnzimmer steht ein Sofa neben dem Fenster. Der Fernseher ist an der Wand. In der Küche ist der Kühlschrank neben der Tür. Das Bett steht im Schlafzimmer. Unter dem Bett ist eine Kiste. Vor dem Haus ist ein kleiner Garten."
    }
  ],
  listening: [
    {
      title: "جملات با Wechselpräpositionen",
      instruction: "به جملات گوش دهید و آن‌ها را بنویسید.",
      sentences: [
        { de: "Ich bin in der Küche.", fa: "در آشپزخانه هستم.", tts: "slow" },
        { de: "Ich gehe in die Küche.", fa: "به آشپزخانه می‌روم.", tts: "slow" },
        { de: "Das Buch liegt auf dem Tisch.", fa: "کتاب روی میز است.", tts: "slow" },
        { de: "Ich lege das Buch auf den Tisch.", fa: "کتاب را روی میز می‌گذارم.", tts: "slow" },
        { de: "Die Katze sitzt unter dem Bett.", fa: "گربه زیر تخت نشسته.", tts: "slow" },
        { de: "Das Bild hängt an der Wand.", fa: "عکس روی دیوار آویزان است.", tts: "slow" }
      ]
    }
  ],
  speaking: [
    {
      title: "گفتگو: توصیف اتاق",
      pattern: "A: Was ist in deinem Zimmer? B: In meinem Zimmer ist ein Bett. Das Bett steht neben dem Fenster. An der Wand hängt ein Bild. A: Und wo ist der Schreibtisch? B: Der Schreibtisch steht vor dem Fenster. A: Wo ist die Lampe? B: Die Lampe steht auf dem Schreibtisch.",
      exercise: "اتاق خود را برای دوستتان توصیف کنید. حداقل ۵ حرف اضافه دوطرفه استفاده کنید."
    }
  ],
  cultureTip: "در آلمان، مردم معمولاً درباره آپارتمانشان صحبت می‌کنند. اصطلاح «wohnen» (زندگی کردن) بسیار رایج است. وقتی آدرس می‌دهید، از حروف اضافه استفاده می‌کنید: «Ich wohne in der Hauptstraße» یا «Die Bäckerei ist neben der Bank».",
  examData: {
    questions: [
      { question: "«Wo?» کدام حالت را نشان می‌دهد؟", options: ["Akkusativ", "Dativ", "Nominativ", "Genitiv"], answer: 1 },
      { question: "«Wohin?» کدام حالت را نشان می‌دهد؟", options: ["Akkusativ", "Dativ", "Nominativ", "Genitiv"], answer: 0 },
      { question: "کدام جمله صحیح است؟", options: ["Ich bin in die Küche.", "Ich bin in der Küche.", "Ich bin in dem Küche.", "Ich bin in den Küche."], answer: 1 },
      { question: "کدام جمله صحیح است؟", options: ["Ich gehe in der Küche.", "Ich gehe in die Küche.", "Ich gehe in dem Küche.", "Ich gehe in den Küche."], answer: 1 },
      { question: "das Bett + unter + Dativ = ?", options: ["unter das Bett", "unter dem Bett", "unter den Bett", "unter der Bett"], answer: 1 },
      { question: "der Tisch + auf + Akkusativ = ?", options: ["auf dem Tisch", "auf den Tisch", "auf der Tisch", "auf das Tisch"], answer: 1 },
      { question: "کدام فعل Akkusativ می‌گیرد؟", options: ["sein", "stehen", "gehen", "liegen"], answer: 2 },
      { question: "کدام فعل Dativ می‌گیرد؟", options: ["legen", "stellen", "sitzen", "bringen"], answer: 2 },
      { question: "die Wand + an + Dativ = ?", options: ["an die Wand", "an der Wand", "an dem Wand", "an den Wand"], answer: 1 },
      { question: "کدام جمله صحیح است؟", options: ["Das Buch ist auf den Tisch.", "Das Buch ist auf dem Tisch.", "Das Buch ist auf der Tisch.", "Das Buch ist auf das Tisch."], answer: 1 }
    ]
  }
};
