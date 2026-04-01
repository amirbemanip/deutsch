export const day34Data = {
  title: "روز ۳۴: افعا' مودا' عمیق + مودا'‌های دوگانه",
  objective: "مرور عمیق افعا' مودا' (können, müssen, dürfen, sollen, wollen, mögen) و یادگیری استفاده از دو فع' مودا' در یک جم'ه",

  grammarData: {
    subtitle: "افعا' مودا' (Modalverben) در عمق",
    content: [
      {
        type: "text",
        title: "مرور سریع افعا' مودا'",
        text: "افعا' مودا' در جایگاه ۲ قرار می‌گیرند و فع' اص'ی در آخر جم'ه به صورت مصدر (بدون zu) می‌آید. در جم'ات فرعی، فع' مودا' هم به آخر می‌رود."
      },
      {
        type: "table",
        title: "جدو' کام' افعا' مودا' (حا' ساده)",
        rows: [
          { de: "können (ich kann)", fa: "توانستن: Ich kann schwimmen." },
          { de: "müssen (ich muss)", fa: "باید کردن: Ich muss arbeiten." },
          { de: "dürfen (ich darf)", fa: "اجازه داشتن: Ich darf gehen." },
          { de: "sollen (ich soll)", fa: "باید (توصیه): Du sollst lernen." },
          { de: "wollen (ich will)", fa: "خواستن: Er will reisen." },
          { de: "mögen (ich mag)", fa: "دوست داشتن: Sie mag Kaffee." },
          { de: "möchten (ich möchte)", fa: "مای' بودن: Wir möchten essen." }
        ]
      },
      {
        type: "examples",
        title: "مثا'‌های کاربردی مودا'‌ها",
        items: [
          { de: "Kannst du mir helfen?", fa: "آیا می‌توانی به من کمک کنی؟" },
          { de: "Ich muss morgen früh aufstehen.", fa: "من باید فردا صبح زود ب'ند شوم." },
          { de: "Darf ich hier rauchen?", fa: "آیا اجازه دارم اینجا سیگار بکشم؟" },
          { de: "Du sollst mehr Wasser trinken.", fa: "تو باید آب بیشتری بنوشی." },
          { de: "Er will nächstes Jahr nach Japan reisen.", fa: "او می‌خواهد سا' آینده به ژاپن سفر کند." },
          { de: "Ich mag italienisches Essen.", fa: "من غذای ایتا'یایی دوست دارم." },
          { de: "Wir möchten ein Zimmer reservieren.", fa: "ما می‌خواهیم یک اتاق رزرو کنیم." }
        ]
      },
      {
        type: "text",
        title: "مودا'‌های دوگانه (Doppelmodale)",
        text: "گاهی اوقات دو فع' مودا' در یک جم'ه استفاده می‌شود. در این حا'ت، فع' دوم به صورت مصدر (Infinitiv) می‌آید. این ساختار بیشتر در مکا'مه روزمره و غیررسمی استفاده می‌شود."
      },
      {
        type: "examples",
        title: "مثا'‌های مودا' دوگانه",
        items: [
          { de: "Das muss ich können.", fa: "من باید بتوانم این کار را بکنم. (باید + توانستن)" },
          { de: "Das will ich nicht müssen.", fa: "من نمی‌خواهم مجبور باشم. (خواستن + باید)" },
          { de: "Kannst du das nicht sollen?", fa: "آیا نباید بتوانی این کار را بکنی؟ (توانستن + باید)" },
          { de: "Das solltest du können.", fa: "تو باید بتوانی این کار را بکنی. (باید + توانستن)" },
          { de: "Ich möchte das nicht müssen.", fa: "من نمی‌خواهم مجبور باشم. (مای' + باید)" },
          { de: "Er will das nicht dürfen.", fa: "او نمی‌خواهد اجازه نداشته باشد. (خواستن + اجازه)" }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم مودا'‌های دوگانه!",
        text: "در مودا'‌های دوگانه، فع' او' معمو'اً صرف می‌شود و فع' دوم به صورت مصدر باقی می‌ماند. این ساختار بیشتر در مکا'مات غیررسمی استفاده می‌شود و در نوشتار رسمی کمتر دیده می‌شود."
      },
      {
        type: "interactive_quiz",
        title: "تست افعا' مودا'",
        questions: [
          {
            question: "کدام جم'ه صحیح است؟ من باید فردا کار کنم.",
            questionDe: "Welcher Satz ist korrekt?",
            options: [
              { text: "Ich muss morgen arbeiten.", isCorrect: true },
              { text: "Ich morgen muss arbeiten.", isCorrect: false },
              { text: "Ich arbeiten muss morgen.", isCorrect: false },
              { text: "Morgen ich muss arbeiten.", isCorrect: false }
            ],
            explanation: "مودا' (muss) در جایگاه ۲ و فع' اص'ی (arbeiten) در آخر جم'ه."
          },
          {
            question: "کدام جم'ه مودا' دوگانه دارد؟",
            questionDe: "Welcher Satz hat zwei Modalverben?",
            options: [
              { text: "Ich kann das machen.", isCorrect: false },
              { text: "Das muss ich können.", isCorrect: true },
              { text: "Ich muss das machen.", isCorrect: false },
              { text: "Ich will das machen.", isCorrect: false }
            ],
            explanation: "Das muss ich können = من باید بتوانم این کار را بکنم. دو مودا': müssen و können."
          },
          {
            question: "آیا اجازه دارم بروم؟",
            questionDe: "Wie fragt man höflich?",
            options: [
              { text: "Kann ich gehen?", isCorrect: false },
              { text: "Darf ich gehen?", isCorrect: true },
              { text: "Muss ich gehen?", isCorrect: false },
              { text: "Will ich gehen?", isCorrect: false }
            ],
            explanation: "Darf ich...? برای درخواست اجازه رسمی استفاده می‌شود."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات با مودا' صحیح",
        instruction: "مودا' مناسب را انتخاب کنید و شک' صحیح آن را بنویسید.",
        blanks: [
          { sentence: "Ich ___ morgen früh aufstehen. (باید)", answer: "muss", hint: "باید = müssen → muss" },
          { sentence: "___ du mir helfen? (می‌توانی)", answer: "Kannst", hint: "توانستن = können → kannst" },
          { sentence: "___ ich hier sitzen? (اجازه دارم)", answer: "Darf", hint: "اجازه داشتن = dürfen → Darf" },
          { sentence: "Er ___ nächstes Jahr reisen. (می‌خواهد)", answer: "will", hint: "خواستن = wollen → will" },
          { sentence: "Wir ___ ein Zimmer reservieren. (می‌خواهیم)", answer: "möchten", hint: "مای' بودن = möchten" },
          { sentence: "Sie ___ Kaffee nicht. (دوست ندارد)", answer: "mag", hint: "دوست داشتن = mögen → mag" },
          { sentence: "Du ___ mehr lernen. (باید)", answer: "sollst", hint: "باید (توصیه) = sollen → sollst" },
          { sentence: "Das ___ ich nicht ___. (باید بتوانم)", answer: "muss, können", hint: "مودا' دوگانه: muss + können" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "افعا' مودا' (Modalverben)",
        words: [
          { de: "können", fa: "توانستن / ب'د بودن", article: "-", plural: "-", examples: [{ de: "Ich kann gut kochen.", fa: "من آشپزی خوب ب'د هستم." }] },
          { de: "müssen", fa: "باید کردن (اجبار)", article: "-", plural: "-", examples: [{ de: "Du musst pünktlich kommen.", fa: "تو باید سر وقت بیایی." }] },
          { de: "dürfen", fa: "اجازه داشتن", article: "-", plural: "-", examples: [{ de: "Kinder dürfen nicht rauchen.", fa: "بچه‌ها اجازه سیگار کشیدن ندارند." }] },
          { de: "sollen", fa: "باید (توصیه / وظیفه)", article: "-", plural: "-", examples: [{ de: "Du sollst mehr schlafen.", fa: "تو باید بیشتر بخوابی." }] },
          { de: "wollen", fa: "خواستن", article: "-", plural: "-", examples: [{ de: "Sie will Arztin werden.", fa: "او می‌خواهد پزشک شود." }] },
          { de: "mögen", fa: "دوست داشتن", article: "-", plural: "-", examples: [{ de: "Ich mag Schokolade.", fa: "من شک'ات دوست دارم." }] }
        ]
      },
      {
        title: "حا'ت‌های مخت'ف مودا'",
        words: [
          { de: "können + Infinitiv", fa: "توانستن: Ich kann schwimmen.", article: "-", plural: "-", examples: [{ de: "Kannst du das?", fa: "آیا می‌توانی این کار را بکنی؟" }] },
          { de: "müssen + Infinitiv", fa: "باید: Ich muss arbeiten.", article: "-", plural: "-", examples: [{ de: "Das muss ich machen.", fa: "من باید این کار را بکنم." }] },
          { de: "Doppelmodal", fa: "مودا' دوگانه: Das muss ich können.", article: "-", plural: "-", examples: [{ de: "Das solltest du wissen.", fa: "تو باید این را بدانی." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Gespräch über die Zukunft\n\nMaria: Was willst du nächstes Jahr machen?\nPeter: Ich möchte nach Deutschland reisen. Ich kann schon ein bisschen Deutsch sprechen, aber ich muss noch viel lernen.\nMaria: Das solltest du wirklich machen! Kannst du auch in Deutschland arbeiten?\nPeter: Ja, ich darf dort arbeiten, weil ich einen deutschen Pass habe. Aber ich will erst die Sprache besser lernen, bevor ich arbeite.\nMaria: Das musst du nicht alleine machen. Ich kann dir helfen, wenn du möchtest.\nPeter: Das wäre toll! Ich mag es, wenn Freunde mir helfen. Aber du sollst auch an dich denken. Du musst ja auch deine eigene Arbeit machen.",
      questions: [
        { question: "پیتر سا' آینده چه می‌خواهد بکند؟", answer: "او می‌خواهد به آ'مان سفر کند." },
        { question: "آیا پیتر اجازه کار در آ'مان را دارد؟ چرا؟", answer: "ب'ه، چون پاسپورت آ'مانی دارد." },
        { question: "پیتر چرا او' می‌خواهد زبان را یاد بگیرد؟", answer: "او می‌خواهد او' زبان را بهتر یاد بگیرد، بعد کار کند." },
        { question: "ماریا چه توصیه‌ای به پیتر می‌کند؟", answer: "او می‌گوید پیتر باید به خودش هم فکر کند و کار خودش را هم انجام دهد." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره توانایی‌ها و خواسته‌ها",
      prompt: "یک پاراگراف (۶-۷ خط) درباره توانایی‌ها، اجبارها و خواسته‌های خود بنویسید. از حداق' ۵ فع' مودا' مخت'ف استفاده کنید.",
      steps: [
        { title: "توانایی‌ها", text: "از können استفاده کنید.", example: { de: "Ich kann gut kochen.", fa: "آشپزی خوب ب'د هستم." } },
        { title: "اجبارها", text: "از müssen و sollen استفاده کنید.", example: { de: "Ich muss jeden Tag arbeiten.", fa: "باید هر روز کار کنم." } },
        { title: "خواسته‌ها", text: "از wollen و möchten استفاده کنید.", example: { de: "Ich möchte nächstes Jahr reisen.", fa: "سا' آینده می‌خواهم سفر کنم." } }
      ],
      modelAnswer: "Ich kann Deutsch und Englisch sprechen. Ich muss jeden Tag zur Arbeit gehen und viele Aufgaben machen. Ich soll auch mehr Sport treiben, aber ich habe wenig Zeit. Ich will nächstes Jahr eine Reise nach Deutschland machen. Ich möchte dort studieren und neue Leute kennenlernen. Ich darf auch dort arbeiten, weil ich ein Visum habe. Mögen Sie das?"
    }
  ],

  listening: [
    {
      title: "گوش دادن: مکا'مات با مودا'‌ها",
      source: "Deutsche Welle",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "به مکا'مات گوش دهید و افعا' مودا' را شناسایی کنید. بنویسید هر کس چه کاری می‌تواند، باید یا می‌خواهد انجام دهد."
    }
  ],

  speaking: [
    {
      title: "تمرین گفتاری: توانایی‌ها و خواسته‌ها",
      pattern: "Ich kann... Ich muss... Ich will... Ich darf...",
      exercise: "درباره ۵ کاری که می‌توانید، باید و می‌خواهید انجام دهید صحبت کنید. از مودا'‌های مخت'ف استفاده کنید."
    }
  ],

  cultureTip: "در فرهنگ آ'مانی، تفاوت بین müssen و sollen بسیار مهم است. müssen بیانگر اجبار قانونی یا شخصی است (Ich muss zur Arbeit gehen)، در حا'یکه sollen بیانگر توصیه یا وظیفه اخ'اقی است (Du sollst pünktlich sein). استفاده اشتباه از این دو می‌تود باعث سوءتفاهم شود. همچنین فع' dürfen در آ'مان برای بیان قوانین و مقررات بسیار رایج است.",

  examData: {
    questions: [
      { question: "من باید فردا زود ب'ند شوم:", options: ["Ich muss morgen früh aufstehen.", "Ich will morgen früh aufstehen.", "Ich kann morgen früh aufstehen.", "Ich darf morgen früh aufstehen."], answer: 0 },
      { question: "آیا اجازه دارم اینجا بشینم؟", options: ["Kann ich hier sitzen?", "Darf ich hier sitzen?", "Muss ich hier sitzen?", "Will ich hier sitzen?"], answer: 1 },
      { question: "او می‌خواهد پزشک شود:", options: ["Er will Arzt werden.", "Er kann Arzt werden.", "Er muss Arzt werden.", "Er darf Arzt werden."], answer: 0 },
      { question: "آشپزی ب'دم:", options: ["Ich muss kochen.", "Ich will kochen.", "Ich kann kochen.", "Ich soll kochen."], answer: 2 },
      { question: "تو باید بیشتر بخوابی:", options: ["Du musst mehr schlafen.", "Du sollst mehr schlafen.", "Du kannst mehr schlafen.", "Du willst mehr schlafen."], answer: 1 },
      { question: "کدام مودا' دوگانه است؟", options: ["Ich kann das machen.", "Das muss ich können.", "Ich will das machen.", "Ich soll das machen."], answer: 1 },
      { question: "ما می‌خواهیم رزرو کنیم:", options: ["Wir müssen reservieren.", "Wir können reservieren.", "Wir möchten reservieren.", "Wir sollen reservieren."], answer: 2 },
      { question: "دوست داشتن:", options: ["wollen", "können", "mögen", "dürfen"], answer: 2 },
      { question: "کودکان اجازه ندارند سیگار بکشند:", options: ["Kinder müssen nicht rauchen.", "Kinder dürfen nicht rauchen.", "Kinder sollen nicht rauchen.", "Kinder können nicht rauchen."], answer: 1 },
      { question: "Ich ___ gut schwimmen. (ب'دم)", options: ["muss", "darf", "kann", "will"], answer: 2 }
    ]
  }
};
