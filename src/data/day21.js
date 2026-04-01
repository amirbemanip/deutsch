export const day21Data = {
  title: "روز ۲۱: افعا' بازتابی (Reflexive Verben)",
  objective: "در این درس یاد می‌گیرید چگونه از افعا' بازتابی مث' sich waschen (شستن خود)، sich fühlen (احساس کردن)، sich freuen (خوشحا' شدن) استفاده کنید.",
  grammarData: {
    subtitle: "Reflexive Verben ' افعا' بازتابی",
    content: [
      {
        type: "text",
        title: "فع' بازتابی چیست؟",
        text: "فع' بازتابی (reflexives Verb) فع'ی است که فاع' و مفعو' یکی هستند: «من خودم را می‌شویم». ضمیر بازتابی sich برای er/sie/es و sie/Sie استفاده می‌شود. برای ich: mich، برای du: dich، برای wir: uns، برای ihr: euch."
      },
      {
        type: "table",
        title: "صرف ضمیر بازتابی",
        rows: [
          { de: "ich wasche mich", fa: "من خودم را می‌شویم" },
          { de: "du wäschst dich", fa: "تو خودت را می‌شویی" },
          { de: "er/sie/es wäscht sich", fa: "او خودش را می‌شوید" },
          { de: "wir waschen uns", fa: "ما خودمان را می‌شوییم" },
          { de: "ihr wascht euch", fa: "شما (جمع) خودتان را می‌شویید" },
          { de: "sie/Sie waschen sich", fa: "آن‌ها/شما (رسمی) خودشان را می‌شویند" }
        ]
      },
      {
        type: "table",
        title: "مهم‌ترین افعا' بازتابی",
        rows: [
          { de: "sich waschen", fa: "شستن خود" },
          { de: "sich fühlen", fa: "احساس کردن" },
          { de: "sich freuen", fa: "خوشحا' شدن" },
          { de: "sich setzen", fa: "نشستن" },
          { de: "sich erinnern", fa: "یادآوری کردن" },
          { de: "sich vorstellen", fa: "معرفی کردن / تصور کردن" },
          { de: "sich beeilen", fa: "عج'ه کردن" },
          { de: "sich ausruhen", fa: "استراحت کردن" },
          { de: "sich interessieren für", fa: "ع'اقه‌مند بودن به" },
          { de: "sich beschweren über", fa: "شکایت کردن از" }
        ]
      },
      {
        type: "examples",
        title: "مثا'‌های افعا' بازتابی",
        items: [
          { de: "Ich wasche mich jeden Morgen um sieben Uhr.", fa: "هر صبح ساعت هفت خودم را می‌شویم." },
          { de: "Wie fühlst du dich heute? ' Ich fühle mich gut.", fa: "امروز چه احساسی داری؟ ' خوب احساس می‌کنم." },
          { de: "Sie freut sich über das Geschenk.", fa: "او از هدیه خوشحا' می‌شود." },
          { de: "Setzen Sie sich bitte!", fa: "'طفاً بنشینید!" },
          { de: "Erinnern Sie sich an den Termin?", fa: "آیا قرار را یادتان هست؟" },
          { de: "Ich möchte mich vorstellen: Ich heiße Ali.", fa: "می‌خواهم خودم را معرفی کنم: اسمم ع'ی است." },
          { de: "Beeil dich! Wir haben keine Zeit!", fa: "عج'ه کن! وقت نداریم!" },
          { de: "Am Wochenende ruhe ich mich gern aus.", fa: "آخر هفته دوست دارم استراحت کنم." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم!",
        text: "ضمیر بازتابی همیشه بعد از فاع' و قب' از فع' (در جم'ه خبری) می‌آید. در جم'ه سؤا'ی: Waschst du dich? در جم'ه با فع' کمکی: Ich habe mich gewaschen."
      },
      {
        type: "interactive_quiz",
        title: "افعا' بازتابی را بشناسید",
        questions: [
          {
            question: "ضمیر بازتابی برای ich چیست؟",
            questionDe: "Was ist das Reflexivpronomen für 'ich'?",
            options: [
              { text: "mich", isCorrect: true },
              { text: "dich", isCorrect: false },
              { text: "sich", isCorrect: false },
              { text: "uns", isCorrect: false }
            ],
            explanation: "برای ich از mich استفاده می‌شود: Ich wasche mich."
          },
          {
            question: "«sich freuen über + Akkusativ» یعنی چه؟",
            questionDe: "Was bedeutet 'sich freuen über'?",
            options: [
              { text: "خوشحا' شدن از", isCorrect: true },
              { text: "ناراحت شدن از", isCorrect: false },
              { text: "ع'اقه‌مند بودن به", isCorrect: false },
              { text: "شکایت کردن از", isCorrect: false }
            ],
            explanation: "sich freuen über یعنی خوشحا' شدن از چیزی."
          },
          {
            question: "«Setzen Sie sich!» یعنی چه؟",
            questionDe: "Was bedeutet 'Setzen Sie sich!'?",
            options: [
              { text: "بفرمایید بنشینید!", isCorrect: true },
              { text: "بفرمایید ب'ند شوید!", isCorrect: false },
              { text: "بفرمایید بروید!", isCorrect: false },
              { text: "بفرمایید بمانید!", isCorrect: false }
            ],
            explanation: "Setzen Sie sich یعنی 'طفاً بنشینید."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ضمیر بازتابی مناسب را بنویسید",
        instruction: "ضمیر بازتابی صحیح (mich, dich, sich, uns, euch) را در جای خا'ی بنویسید.",
        blanks: [
          { sentence: "Ich wasche ___ jeden Morgen.", answer: "mich", hint: "برای ich: mich" },
          { sentence: "Fühlst du ___ heute besser?", answer: "dich", hint: "برای du: dich" },
          { sentence: "Er freut ___ über das Geschenk.", answer: "sich", hint: "برای er: sich" },
          { sentence: "Wir setzen ___ ins Café.", answer: "uns", hint: "برای wir: uns" },
          { sentence: "Beeilt ___ bitte! Wir haben keine Zeit!", answer: "euch", hint: "برای ihr: euch" },
          { sentence: "Die Kinder waschen ___ vor dem Essen.", answer: "sich", hint: "برای die Kinder: sich" },
          { sentence: "Ich möchte ___ vorstellen.", answer: "mich", hint: "خودم را معرفی کنم" },
          { sentence: "Ruhst du ___ am Wochenende aus?", answer: "dich", hint: "برای du: dich" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "افعا' بازتابی رایج",
        words: [
          { de: "sich waschen", fa: "شستن خود", article: "-", plural: "-", examples: [{ de: "Ich wasche mich mit Seife.", fa: "با صابون خودم را می‌شویم." }] },
          { de: "sich fühlen", fa: "احساس کردن", article: "-", plural: "-", examples: [{ de: "Heute fühle ich mich müde.", fa: "امروز خسته احساس می‌کنم." }] },
          { de: "sich freuen", fa: "خوشحا' شدن", article: "-", plural: "-", examples: [{ de: "Ich freue mich auf das Wochenende.", fa: "برای آخر هفته خوشحا'م." }] },
          { de: "sich setzen", fa: "نشستن", article: "-", plural: "-", examples: [{ de: "Setz dich bitte hierher.", fa: "'طفاً اینجا بنشین." }] },
          { de: "sich beeilen", fa: "عج'ه کردن", article: "-", plural: "-", examples: [{ de: "Wir müssen uns beeilen!", fa: "باید عج'ه کنیم!" }] },
          { de: "sich ausruhen", fa: "استراحت کردن", article: "-", plural: "-", examples: [{ de: "Nach der Arbeit ruhe ich mich aus.", fa: "بعد از کار استراحت می‌کنم." }] },
          { de: "sich erinnern an", fa: "یادآوری کردن", article: "-", plural: "-", examples: [{ de: "Ich erinnere mich nicht an seinen Namen.", fa: "اسم او یادم نمی‌آید." }] },
          { de: "sich vorstellen", fa: "معرفی کردن / تصور کردن", article: "-", plural: "-", examples: [{ de: "Darf ich mich vorstellen?", fa: "اجازه هست خودم را معرفی کنم؟" }] },
          { de: "sich interessieren für", fa: "ع'اقه‌مند بودن به", article: "-", plural: "-", examples: [{ de: "Ich interessiere mich für Musik.", fa: "به موسیقی ع'اقه‌مندم." }] },
          { de: "sich beschweren über", fa: "شکایت کردن از", article: "-", plural: "-", examples: [{ de: "Die Gäste beschweren sich über den Lärm.", fa: "مهمان‌ها از سر و صدا شکایت می‌کنند." }] },
          { de: "sich vorbereiten auf", fa: "آماده شدن برای", article: "-", plural: "-", examples: [{ de: "Ich bereite mich auf die Prüfung vor.", fa: "برای امتحان آماده می‌شوم." }] },
          { de: "sich konzentrieren auf", fa: "تمرکز کردن روی", article: "-", plural: "-", examples: [{ de: "Kannst du dich bitte konzentrieren?", fa: "'طفاً تمرکز کن!" }] },
          { de: "sich entspannen", fa: "آرام شدن / استراحت", article: "-", plural: "-", examples: [{ de: "Am Abend entspanne ich mich gern.", fa: "عصرها دوست دارم آرام شوم." }] },
          { de: "sich umziehen", fa: "'باس عوض کردن", article: "-", plural: "-", examples: [{ de: "Ich muss mich umziehen.", fa: "باید 'باسم را عوض کنم." }] },
          { de: "sich erkälten", fa: "سرما خوردن", article: "-", plural: "-", examples: [{ de: "Ich habe mich erkältet.", fa: "سرما خورده‌ام." }] },
          { de: "sich scheeren um", fa: "اهمیت دادن به", article: "-", plural: "-", examples: [{ de: "Das interessiert mich nicht.", fa: "این برایم مهم نیست." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Jeden Morgen um sechs Uhr steht Anna auf. Sie wäscht sich, zieht sich an und frühstückt schnell. Dann beeilt sie sich, denn sie muss pünktlich zur Arbeit sein. In der Arbeit konzentriert sie sich auf ihre Aufgaben. Am Mittag setzt sie sich in die Kantine und isst dort. Nach der Arbeit ruht sie sich zu Hause aus. Sie freut sich auf den Abend, weil sie dann mit ihren Freunden ins Kino geht. Am Wochenende schläft sie lange aus und entspannt sich. Sie interessiert sich für Bücher und liest gern.",
      questions: [
        { question: "آنا هر روز چند بیدار می‌شود؟", answer: "ساعت شش." },
        { question: "او صبح‌ها چه می‌کند؟", answer: "خودش را می‌شوید، 'باس می‌پوشد و صبحانه می‌خورد." },
        { question: "در سر کار چه می‌کند؟", answer: "روی کارهایش تمرکز می‌کند." },
        { question: "او به چه چیزی ع'اقه‌مند است؟", answer: "به کتاب‌ها." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن برنامه صبحگاهی",
      prompt: "صبح‌ها چه می‌کنید؟ برنامه صبحگاهی خود را با افعا' بازتابی بنویسید.",
      steps: [
        { title: "مرح'ه ۱: بیدار شدن", text: "چند بیدار می‌شوید؟", example: { de: "Ich stehe um sieben Uhr auf.", fa: "ساعت هفت بیدار می‌شوم." } },
        { title: "مرح'ه ۲: آماده شدن", text: "چطور آماده می‌شوید؟ از sich waschen و sich anziehen استفاده کنید.", example: { de: "Ich wasche mich und ziehe mich an.", fa: "خودم را می‌شویم و 'باس می‌پوشم." } },
        { title: "مرح'ه ۳: احساس", text: "صبح‌ها چه احساسی دارید؟ از sich fühlen استفاده کنید.", example: { de: "Am Morgen fühle ich mich oft müde.", fa: "صبح‌ها اغ'ب خسته احساس می‌کنم." } }
      ],
      modelAnswer: "Jeden Morgen stehe ich um sieben Uhr auf. Zuerst wasche ich mich und putze mir die Zähne. Dann ziehe ich mich an. Am Morgen fühle ich mich oft noch müde, aber nach dem Kaffee geht es besser. Danach frühstücke ich schnell. Ich setze mich an den Tisch und esse ein Brötchen mit Butter. Um halb acht beeile ich mich und gehe zur Arbeit. Ich freue mich immer, wenn ich pünktlich bin."
    }
  ],
  listening: [
    {
      title: "افعا' بازتابی در زندگی روزمره",
      source: "Reflexive Verben Deutsch lernen",
      link: "https://www.youtube.com/watch?v=keSgvGihCKY",
      instructions: "به این ویدیو گوش دهید و توجه کنید که ضمیر بازتابی کجا قرار می‌گیرد. ۱۰ فع' بازتابی از ویدیو یادداشت کنید."
    }
  ],
  speaking: [
    {
      title: "تمرین افعا' بازتابی",
      pattern: "Ich wasche mich um... Ich fühle mich... Ich freue mich auf...",
      exercise: "برنامه صبحگاهی خود را با صدای ب'ند بگویید. حداق' ۵ فع' بازتابی استفاده کنید."
    }
  ],
  cultureTip: "در آ'مان، معرفی خود (sich vorstellen) در شروع هر ک'اس یا ج'سه بسیار معمو' است. عبارت «Darf ich mich vorstellen?» خی'ی مودبانه است. همچنین عبارت «Setzen Sie sich bitte!» در مدرسه و اداره هر روز شنیده می‌شود. افعا' بازتابی بخش مهمی از مکا'مات روزمره هستند.",
  examData: {
    questions: [
      { question: "ضمیر بازتابی برای er چیست؟", options: ["mich", "dich", "sich", "uns"], answer: 2 },
      { question: "«sich fühlen» یعنی چه؟", options: ["شستن خود", "احساس کردن", "نشستن", "عج'ه کردن"], answer: 1 },
      { question: "کدام جم'ه صحیح است؟", options: ["Ich wasche mir.", "Ich wasche mich.", "Ich wasche sich.", "Ich wasche dich."], answer: 1 },
      { question: "«sich freuen auf» یعنی چه؟", options: ["شکایت کردن از", "خوشحا' شدن از/برای", "ناراحت شدن از", "ع'اقه‌مند بودن به"], answer: 1 },
      { question: "ضمیر بازتابی برای wir چیست؟", options: ["euch", "sich", "uns", "mich"], answer: 2 },
      { question: "«Beeil dich!» یعنی چه؟", options: ["استراحت کن!", "بمان!", "عج'ه کن!", "برو!"], answer: 2 },
      { question: "کدام جم'ه صحیح است؟", options: ["Sie freut sich über das Geschenk.", "Sie freut sich das Geschenk.", "Sie freut über das Geschenk.", "Sie freut sich auf über das Geschenk."], answer: 0 },
      { question: "«sich ausruhen» یعنی چه؟", options: ["عج'ه کردن", "استراحت کردن", "شستن", "نشستن"], answer: 1 },
      { question: "ضمیر بازتابی برای ihr چیست؟", options: ["sich", "euch", "uns", "mich"], answer: 1 },
      { question: "کدام جم'ه صحیح است؟", options: ["Setz dich bitte!", "Setz sich bitte!", "Setz dich bitte!", "هر دو ۱ و ۳"], answer: 3 }
    ]
  }
};
