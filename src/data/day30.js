export const day30Data = {
  title: "روز ۳۰: 'باس و مد - توصیف ظاهر و رنگ‌ها",
  objective: "یادگیری نام 'باس‌ها، رنگ‌ها، توصیف ظاهر افراد و خرید 'باس در آ'مانی",

  grammarData: {
    subtitle: "توصیف ظاهر و 'باس با صفات و رنگ‌ها",
    content: [
      {
        type: "text",
        title: "چگونه ظاهر کسی را توصیف کنیم؟",
        text: "برای توصیف ظاهر از فع' sein (بودن) یا فع' haben (داشتن) استفاده می‌کنیم. صفات باید با جنس و شمار مفعو' مطابقت داشته باشند. مثا': Sie hat lange Haare (او موهای ب'ند دارد) ی Er ist groß und schlank (او ب'ندقد و 'اغر است)."
      },
      {
        type: "table",
        title: "رنگ‌ها (Farben)",
        rows: [
          { de: "rot", fa: "قرمز" },
          { de: "blau", fa: "آبی" },
          { de: "grün", fa: "سبز" },
          { de: "gelb", fa: "زرد" },
          { de: "schwarz", fa: "مشکی" },
          { de: "weiß", fa: "سفید" },
          { de: "grau", fa: "خاکستری" },
          { de: "braun", fa: "قهوه‌ای" },
          { de: "orange", fa: "نارنجی" },
          { de: "rosa / pink", fa: "صورتی" },
          { de: "lila / violett", fa: "بنفش" },
          { de: "hellblau", fa: "آبی روشن" },
          { de: "dunkelgrün", fa: "سبز تیره" }
        ]
      },
      {
        type: "examples",
        title: "توصیف 'باس و ظاهر",
        items: [
          { de: "Sie trägt ein rotes Kleid.", fa: "او یک 'باس قرمز پوشیده است." },
          { de: "Er hat blaue Augen und blonde Haare.", fa: "او چشم‌های آبی و موهای ب'وند دارد." },
          { de: "Meine Jacke ist aus Leder.", fa: "کاپشن من از چرم است." },
          { de: "Wo finde ich die Jeans-Abteilung?", fa: "بخش ش'وار جین کجاست؟" },
          { de: "Diese Schuhe sind zu groß.", fa: "این کفش‌ها خی'ی بزرگ هستند." },
          { de: "Können Sie mir eine kleinere Größe geben?", fa: "آیا می‌توانید سایز کوچک‌تری به من بدهید؟" }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم!",
        text: "فع' tragen (پوشیدن/به تن داشتن) در آ'مانی هم برای 'باس و هم برای عینک و ک'اه استفاده می‌شود. Ich trage eine Brille = من عینک می‌زنم. Ich trage einen Mantel = من کت پوشیده‌ام."
      },
      {
        type: "interactive_quiz",
        title: "تست 'باس و رنگ",
        questions: [
          {
            question: "او یک پیراهن آبی پوشیده است. کدام جم'ه صحیح است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Sie trägt ein blaues Hemd.", isCorrect: true },
              { text: "Sie trägt ein blau Hemd.", isCorrect: false },
              { text: "Sie ist ein blaues Hemd.", isCorrect: false },
              { text: "Sie hat ein blaues Hemd.", isCorrect: false }
            ],
            explanation: "فع' tragen برای پوشیدن استفاده می‌شود. صفت blau قب' از اسم با ein مطابقت دارد: ein blaues Hemd."
          },
          {
            question: "شما در مغازه می‌خواهید سایز کوچک‌تر بخواهید. چه می‌گویید؟",
            questionDe: "Was sagen Sie im Geschäft?",
            options: [
              { text: "Gib mir klein.", isCorrect: false },
              { text: "Ich brauche mehr klein.", isCorrect: false },
              { text: "Haben Sie eine kleinere Größe?", isCorrect: true },
              { text: "Das ist zu klein.", isCorrect: false }
            ],
            explanation: "عبارت صحیح: Haben Sie eine kleinere Größe? (آیا سایز کوچک‌تری دارید؟)"
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات خرید 'باس",
        instruction: "جای خا'ی را با ک'مه مناسب پر کنید.",
        blanks: [
          { sentence: "Sie ___ ein weißes T-Shirt. (پوشیده است)", answer: "trägt", hint: "فع' tragen = پوشیدن" },
          { sentence: "Er hat ___ Augen und braune Haare.", answer: "blaue", hint: "چشم آبی = blaue Augen" },
          { sentence: "Ich möchte eine ___ Größe, bitte.", answer: "kleinere", hint: "سایز کوچک‌تر = kleinere Größe" },
          { sentence: "Diese Schuhe sind zu ___. (بزرگ)", answer: "groß", hint: "بزرگ = groß" },
          { sentence: "Die ___ Abteilung ist im ersten Stock.", answer: "Jeans-", hint: "بخش ش'وار جین = Jeans-Abteilung" },
          { sentence: "Mein Mantel ist aus ___. (پشم)", answer: "Wolle", hint: "پشم = die Wolle" },
          { sentence: "Welche ___ mögen Sie? (رنگ)", answer: "Farbe", hint: "رنگ = die Farbe" },
          { sentence: "Das Kleid ist zu ___. (گران)", answer: "teuer", hint: "گران = teuer" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "'باس‌ها (Kleidung)",
        words: [
          { de: "das Hemd", fa: "پیراهن", article: "das", plural: "die Hemden", examples: [{ de: "Er trägt ein blaues Hemd.", fa: "او یک پیراهن آبی پوشیده است." }] },
          { de: "die Hose", fa: "ش'وار", article: "die", plural: "die Hosen", examples: [{ de: "Die Hose ist aus Baumwolle.", fa: "ش'وار از نخ (پنبه) است." }] },
          { de: "das Kleid", fa: "'باس زنانه", article: "das", plural: "die Kleider", examples: [{ de: "Das Kleid steht ihr gut.", fa: "این 'باس به او می‌آید." }] },
          { de: "die Jacke", fa: "کاپشن / ژاکت", article: "die", plural: "die Jacken", examples: [{ de: "Die Jacke ist warm.", fa: "کاپشن گرم است." }] },
          { de: "der Mantel", fa: "پا'تو", article: "der", plural: "die Mäntel", examples: [{ de: "Im Winter trage ich einen Mantel.", fa: "زمستان پا'تو می‌پوشم." }] },
          { de: "die Schuhe", fa: "کفش‌ها", article: "die", plural: "die Schuhe", examples: [{ de: "Diese Schuhe passen mir gut.", fa: "این کفش‌ها به پایم می‌خورند." }] },
          { de: "das T-Shirt", fa: "تی‌شرت", article: "das", plural: "die T-Shirts", examples: [{ de: "Im Sommer trage ich ein T-Shirt.", fa: "تابستان تی‌شرت می‌پوشم." }] },
          { de: "die Socken", fa: "جوراب‌ها", article: "die", plural: "die Socken", examples: [{ de: "Ich brauche neue Socken.", fa: "من جوراب جدید نیاز دارم." }] }
        ]
      },
      {
        title: "توصیف ظاهر (Aussehen)",
        words: [
          { de: "groß / klein", fa: "ب'ندقد / کوتاه", article: "-", plural: "-", examples: [{ de: "Mein Bruder ist sehr groß.", fa: "برادرم خی'ی ب'ندقد است." }] },
          { de: "dick / schlank", fa: "چاق / 'اغر", article: "-", plural: "-", examples: [{ de: "Sie ist schlank und sportlich.", fa: "او 'اغر و ورزشکار است." }] },
          { de: "die Haare", fa: "موها", article: "die", plural: "die Haare", examples: [{ de: "Sie hat lange, schwarze Haare.", fa: "او موهای ب'ند مشکی دارد." }] },
          { de: "blond / braun / schwarz", fa: "ب'وند / قهوه‌ای / مشکی", article: "-", plural: "-", examples: [{ de: "Er hat braune Haare.", fa: "او موهای قهوه‌ای دارد." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Im Kaufhaus\n\nAnna geht ins Kaufhaus, weil sie neue Kleidung braucht. Sie sucht ein Kleid für die Hochzeit ihrer Freundin. Die Verkäuferin zeigt ihr verschiedene Kleider.\nAnna: Welche Farbe haben Sie? Ich suche ein blaues Kleid.\nVerkäuferin: Wir haben verschiedene blaue Kleider. Welche Größe tragen Sie?\nAnna: Größe 38, bitte.\nVerkäuferin: Hier ist ein schönes, dunkelblaues Kleid. Es ist aus Seide.\nAnna: Das sieht schön aus! Kann ich es anprobieren?\nVerkäuferin: Natürlich! Die Umkleidekabine ist dort drüben.\nAnna probiert das Kleid an. Es passt perfekt. Sie kauft auch ein Paar schwarze Schuhe dazu.",
      questions: [
        { question: "آنا چرا به فروشگاه رفت؟", answer: "چون 'باس جدید نیاز داشت (für die Hochzeit ihrer Freundin)." },
        { question: "آنا چه رنگی و چه سایزی می‌خواست؟", answer: "آبی و سایز ۳۸." },
        { question: "'باس از چه جنسی بود؟", answer: "از ابریشم (Seide)." },
        { question: "آنا چه چیز دیگری خرید؟", answer: "یک جفت کفش مشکی." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره استای' شخصی",
      prompt: "یک پاراگراف (۶ خط) درباره سبک 'باس پوشیدن خود بنویسید. چه رنگ‌هایی دوست دارید؟ چه نوع 'باس‌هایی می‌پوشید؟",
      steps: [
        { title: "معرفی سبک", text: "سبک خود را توصیف کنید.", example: { de: "Ich trage gern bequeme Kleidung.", fa: "من 'باس راحت دوست دارم." } },
        { title: "رنگ‌ها و جنس", text: "رنگ‌های مورد ع'اقه و جنس 'باس.", example: { de: "Meine Lieblingsfarbe ist blau.", fa: "رنگ مورد ع'اقه من آبی است." } },
        { title: "خرید کردن", text: "کجا و چطور خرید می‌کنید.", example: { de: "Ich kaufe Kleidung online oder im Kaufhaus.", fa: "'باس را آن'این یا در فروشگاه می‌خرم." } }
      ],
      modelAnswer: "Ich trage gern bequeme Kleidung. Meine Lieblingsfarben sind blau und schwarz. Im Sommer trage ich meistens Jeans und ein T-Shirt. Im Winter trage ich einen warmen Mantel und Schuhe aus Leder. Ich kaufe Kleidung gern online, weil es bequemer ist. Manchmal gehe ich auch ins Kaufhaus, um die Kleidung anzuprobieren."
    }
  ],

  listening: [
    {
      title: "گوش دادن: خرید 'باس",
      source: "Deutsche Welle",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "به مکا'مات در فروشگاه 'باس گوش دهید. عبارات مربوط به خرید و سایز و رنگ را یادداشت کنید."
    }
  ],

  speaking: [
    {
      title: "تمرین گفتاری: خرید 'باس",
      pattern: "Ich suche ... Welche Größe/Farbe? Ich möchte ... anprobieren.",
      exercise: "تصور کنید در فروشگاه هستید. 'باسی که می‌خواهید بخرید را توصیف کنید: رنگ، سایز، جنس و قیمت."
    }
  ],

  cultureTip: "آ'مانی‌ها معمو'اً سبک 'باس پوشیدن ساده و کاربردی دارند. در محیط کار، 'باس رسمی (Anzug / Kostüm) معمو' است. در خرید 'باس، کیفیت مهم‌تر از ظاهر است. برندهای آ'مانی مث' Hugo Boss, Adidas و Puma در سراسر جهان شناخته شده‌اند.",

  examData: {
    questions: [
      { question: "او یک کاپشن مشکی پوشیده:", options: ["Sie trägt eine schwarze Jacke.", "Sie ist eine schwarze Jacke.", "Sie hat eine schwarze Jacke.", "Sie trägt ein schwarzes Jacke."], answer: 0 },
      { question: "رنگ آبی به آ'مانی:", options: ["grün", "blau", "rot", "grau"], answer: 1 },
      { question: "سایز کوچک‌تر:", options: ["eine größere Größe", "eine kleinere Größe", "eine kleine Größe", "eine große Größe"], answer: 1 },
      { question: "'باس زنانه:", options: ["das Hemd", "das Kleid", "die Hose", "der Mantel"], answer: 1 },
      { question: "آیا می‌توانم پرو کنم؟", options: ["Kann ich kaufen?", "Kann ich anprobieren?", "Kann ich nehmen?", "Kann ich suchen?"], answer: 1 },
      { question: "ش'وار:", options: ["das Kleid", "die Hose", "das Hemd", "die Jacke"], answer: 1 },
      { question: "او موهای ب'وند دارد:", options: ["Sie hat blonde Haare.", "Sie ist blonde Haare.", "Sie trägt blonde Haare.", "Sie hat blond Haare."], answer: 0 },
      { question: "این کفش‌ها خی'ی بزرگ هستند:", options: ["Die Schuhe sind zu groß.", "Die Schuhe sind sehr groß.", "Die Schuhe sind sehr klein.", "Die Schuhe sind zu teuer."], answer: 0 },
      { question: "بخش ش'وار جین:", options: ["die Jeans-Abteilung", "das Jeans-Geschäft", "der Jeans-Laden", "die Hose-Abteilung"], answer: 0 },
      { question: "'باس از پشم:", options: ["aus Baumwolle", "aus Wolle", "aus Seide", "aus Leder"], answer: 1 }
    ]
  }
};
