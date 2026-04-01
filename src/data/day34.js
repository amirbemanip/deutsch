export const day34Data = {
  title: "روز ۳۴: افعال مودال عمیق + مودال‌های دوگانه",
  objective: "مرور عمیق افعال مودال (können, müssen, dürfen, sollen, wollen, mögen) و یادگیری استفاده از دو فعل مودال در یک جمله",
  level: "A2",

  grammarData: {
    subtitle: "افال مودال (Modalverben) در عمق",
    content: [
      {
        type: "text",
        title: "مرور سریع افعال مودال",
        text: "افعال مودال در جایگاه ۲ قرار می‌گیرند و فعل اصلی در آخر جمله به صورت مصدر (بدون zu) می‌آید. در جملات فرعی، فعل مودال هم به آخر می‌رود. شش فعل مودال اصلی: können (توانستن)، müssen (باید)، dürfen (اجازه)، sollen (باید/توصیه)، wollen (خواستن) و mögen (دوست داشتن)."
      },
      {
        type: "table",
        title: "جدول کامل افعال مودال (حال ساده)",
        rows: [
          { de: "können", fa: "توانستن: ich kann, du kannst, er kann, wir können, ihr könnt, sie können" },
          { de: "müssen", fa: "باید کردن: ich muss, du musst, er muss, wir müssen, ihr müsst, sie müssen" },
          { de: "dürfen", fa: "اجازه داشتن: ich darf, du darfst, er darf, wir dürfen, ihr dürft, sie dürfen" },
          { de: "sollen", fa: "باید (توصیه): ich soll, du sollst, er soll, wir sollen, ihr sollt, sie sollen" },
          { de: "wollen", fa: "خواستن: ich will, du willst, er will, wir wollen, ihr wollt, sie wollen" },
          { de: "mögen", fa: "دوست داشتن: ich mag, du magst, er mag, wir mögen, ihr mögt, sie mögen" },
          { de: "möchten", fa: "مایل بودن: ich möchte, du möchtest, er möchte, wir möchten, ihr möchtet, sie möchten" }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های کاربردی مودال‌ها",
        items: [
          { de: "Kannst du mir helfen?", fa: "آیا می‌توانی به من کمک کنی؟" },
          { de: "Ich muss morgen früh aufstehen.", fa: "من باید فردا صبح زود بلند شوم." },
          { de: "Darf ich hier rauchen?", fa: "آیا اجازه دارم اینجا سیگار بکشم؟" },
          { de: "Du sollst mehr Wasser trinken.", fa: "تو باید آب بیشتری بنوشی." },
          { de: "Er will nächstes Jahr nach Japan reisen.", fa: "او می‌خواهد سال آینده به ژاپن سفر کند." },
          { de: "Ich mag italienisches Essen.", fa: "من غذای ایتالیایی دوست دارم." },
          { de: "Wir möchten ein Zimmer reservieren.", fa: "ما می‌خواهیم یک اتاق رزرو کنیم." }
        ]
      },
      {
        type: "text",
        title: "مودال‌های دوگانه (Doppelmodale)",
        text: "گاهی اوقات دو فعل مودال در یک جمله استفاده می‌شود. در این حالت، فعل دوم به صورت مصدر (Infinitiv) می‌آید. این ساختار بیشتر در مکالمه روزمره و غیررسمی استفاده می‌شود."
      },
      {
        type: "examples",
        title: "مثال‌های مودال دوگانه",
        items: [
          { de: "Das muss ich können.", fa: "من باید بتوانم این کار را بکنم. (باید + توانستن)" },
          { de: "Das will ich nicht müssen.", fa: "من نمی‌خواهم مجبور باشم. (خواستن + باید)" },
          { de: "Das solltest du können.", fa: "تو باید بتوانی این کار را بکنی. (باید + توانستن)" },
          { de: "Ich möchte das nicht müssen.", fa: "من نمی‌خواهم مجبور باشم. (مایل + باید)" },
          { de: "Er will das nicht dürfen.", fa: "او نمی‌خواهد اجازه نداشته باشد. (خواستن + اجازه)" },
          { de: "Sie hätte das machen sollen.", fa: "او باید این کار را می‌کرد. (باید + کردن - Konjunktiv)" }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم مودال‌های دوگانه!",
        text: "در مودال‌های دوگانه، فعل اول معمولاً صرف می‌شود و فعل دوم به صورت مصدر باقی می‌ماند. این ساختار بیشتر در مکالمات غیررسمی استفاده می‌شود و در نوشتار رسمی کمتر دیده می‌شود."
      },
      {
        type: "interactive_quiz",
        title: "تست افعال مودال",
        questions: [
          {
            question: "کدام جمله صحیح است؟ من باید فردا کار کنم.",
            questionDe: "Welcher Satz ist korrekt?",
            options: [
              { text: "Ich muss morgen arbeiten.", isCorrect: true },
              { text: "Ich morgen muss arbeiten.", isCorrect: false },
              { text: "Ich arbeiten muss morgen.", isCorrect: false },
              { text: "Morgen ich muss arbeiten.", isCorrect: false }
            ],
            explanation: "مودال (muss) در جایگاه ۲ و فعل اصلی (arbeiten) در آخر جمله."
          },
          {
            question: "کدام جمله مودال دوگانه دارد؟",
            questionDe: "Welcher Satz hat zwei Modalverben?",
            options: [
              { text: "Ich kann das machen.", isCorrect: false },
              { text: "Das muss ich können.", isCorrect: true },
              { text: "Ich muss das machen.", isCorrect: false },
              { text: "Ich will das machen.", isCorrect: false }
            ],
            explanation: "Das muss ich können = من باید بتوانم این کار را بکنم. دو مودال: müssen و können."
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
        title: "تکمیل جملات با مودال صحیح",
        instruction: "مودال مناسب را انتخاب کنید و شکل صحیح آن را بنویسید.",
        blanks: [
          { sentence: "Ich ___ morgen früh aufstehen. (باید)", answer: "muss", hint: "باید = müssen → muss" },
          { sentence: "___ du mir helfen? (می‌توانی)", answer: "Kannst", hint: "توانستن = können → kannst" },
          { sentence: "___ ich hier sitzen? (اجازه دارم)", answer: "Darf", hint: "اجازه داشتن = dürfen → Darf" },
          { sentence: "Er ___ nächstes Jahr reisen. (می‌خواهد)", answer: "will", hint: "خواستن = wollen → will" },
          { sentence: "Wir ___ ein Zimmer reservieren. (می‌خواهیم)", answer: "möchten", hint: "مایل بودن = möchten" },
          { sentence: "Sie ___ Kaffee nicht. (دوست ندارد)", answer: "mag", hint: "دوست داشتن = mögen → mag" },
          { sentence: "Du ___ mehr lernen. (باید)", answer: "sollst", hint: "باید (توصیه) = sollen → sollst" },
          { sentence: "Das ___ ich nicht ___. (باید بتوانم)", answer: "muss, können", hint: "مودال دوگانه: muss + können" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "افال مودال (Modalverben)",
        words: [
          { de: "können", fa: "توانستن / بلد بودن", ipa: "[ˈkœnən]", article: "-", plural: "-", conjugation: { ich: "kann", du: "kannst", er: "kann", wir: "können", ihr: "könnt", sie: "können" }, examples: [{ de: "Ich kann gut kochen.", fa: "من آشپزی خوب بلدم." }] },
          { de: "müssen", fa: "باید کردن (اجبار)", ipa: "[ˈmʏsn̩]", article: "-", plural: "-", conjugation: { ich: "muss", du: "musst", er: "muss", wir: "müssen", ihr: "müsst", sie: "müssen" }, examples: [{ de: "Du musst pünktlich kommen.", fa: "تو باید سر وقت بیایی." }] },
          { de: "dürfen", fa: "اجازه داشتن", ipa: "[ˈdʏʁfn̩]", article: "-", plural: "-", conjugation: { ich: "darf", du: "darfst", er: "darf", wir: "dürfen", ihr: "dürft", sie: "dürfen" }, examples: [{ de: "Kinder dürfen nicht rauchen.", fa: "بچه‌ها اجازه سیگار کشیدن ندارند." }] },
          { de: "sollen", fa: "باید (توصیه / وظیفه)", ipa: "[ˈzɔlən]", article: "-", plural: "-", conjugation: { ich: "soll", du: "sollst", er: "soll", wir: "sollen", ihr: "sollt", sie: "sollen" }, examples: [{ de: "Du sollst mehr schlafen.", fa: "تو باید بیشتر بخوابی." }] },
          { de: "wollen", fa: "خواستن", ipa: "[ˈvɔlən]", article: "-", plural: "-", conjugation: { ich: "will", du: "willst", er: "will", wir: "wollen", ihr: "wollt", sie: "wollen" }, examples: [{ de: "Sie will Arztin werden.", fa: "او می‌خواهد پزشک شود." }] },
          { de: "mögen", fa: "دوست داشتن", ipa: "[ˈmøːɡən]", article: "-", plural: "-", conjugation: { ich: "mag", du: "magst", er: "mag", wir: "mögen", ihr: "mögt", sie: "mögen" }, examples: [{ de: "Ich mag Schokolade.", fa: "من شکلات دوست دارم." }] },
          { de: "möchten", fa: "مایل بودن", ipa: "[ˈmœçtn̩]", article: "-", plural: "-", conjugation: { ich: "möchte", du: "möchtest", er: "möchte", wir: "möchten", ihr: "möchtet", sie: "möchten" }, examples: [{ de: "Wir möchten essen gehen.", fa: "ما می‌خواهیم بیرون غذا بخوریم." }] }
        ]
      },
      {
        title: "تفاوت معنایی مودال‌ها",
        words: [
          { de: "müssen vs. sollen", fa: "باید (اجبار) vs باید (توصیه)", ipa: "-", article: "-", plural: "-", examples: [{ de: "Ich muss arbeiten. vs. Du sollst lernen.", fa: "من مجبورم کار کنم. vs تو باید (توصیه) درس بخوانی." }] },
          { de: "können vs. dürfen", fa: "توانستن vs اجازه داشتن", ipa: "-", article: "-", plural: "-", examples: [{ de: "Ich kann schwimmen. vs. Darf ich gehen?", fa: "من بلدم شنا کنم. vs آیا اجازه دارم بروم؟" }] },
          { de: "wollen vs. möchten", fa: "خواستن (جدی) vs مایل بودن (مؤدبانه)", ipa: "-", article: "-", plural: "-", examples: [{ de: "Ich will nach Hause. vs. Ich möchte Kaffee.", fa: "می‌خواهم بروم خانه. vs یک قهوه میل دارم." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Gespräch über die Zukunft\n\nMaria: Was willst du nächstes Jahr machen?\nPeter: Ich möchte nach Deutschland reisen. Ich kann schon ein bisschen Deutsch sprechen, aber ich muss noch viel lernen.\nMaria: Das solltest du wirklich machen! Kannst du auch in Deutschland arbeiten?\nPeter: Ja, ich darf dort arbeiten, weil ich einen deutschen Pass habe. Aber ich will erst die Sprache besser lernen, bevor ich arbeite.\nMaria: Das musst du nicht alleine machen. Ich kann dir helfen, wenn du möchtest.\nPeter: Das wäre toll! Ich mag es, wenn Freunde mir helfen. Aber du sollst auch an dich denken. Du musst ja auch deine eigene Arbeit machen.",
      translation: "گفتگو درباره آینده\n\nماریا: سال آینده می‌خواهی چه کار کنی؟\nپیتر: می‌خواهم به آلمان سفر کنم. کمی آلمانی بلدم صحبت کنم، اما باید خیلی چیزها یاد بگیرم.\nماریا: واقعاً باید این کار را بکنی! آیا می‌توانی در آلمان هم کار کنی؟\nپیتر: بله، اجازه کار دارم چون پاسپورت آلمانی دارم. اما اول می‌خواهم زبان را بهتر یاد بگیرم، بعد کار کنم.\nماریا: لازم نیست تنها انجام بدهی. اگر بخواهی می‌توانم کمکت کنم.\nپیتر: عالی می‌شد! دوست دارم وقتی دوستانم کمکم می‌کنند. اما تو هم باید به خودت فکر کنی. تو هم باید کار خودت را انجام بدهی.",
      questions: [
        { question: "پیتر سال آینده چه می‌خواهد بکند؟", answer: "او می‌خواهد به آلمان سفر کند." },
        { question: "آیا پیتر اجازه کار در آلمان را دارد؟ چرا؟", answer: "بله، چون پاسپورت آلمانی دارد." },
        { question: "پیتر چرا اول می‌خواهد زبان را یاد بگیرد؟", answer: "او می‌خواهد اول زبان را بهتر یاد بگیرد، بعد کار کند." },
        { question: "ماریا چه توصیه‌ای به پیتر می‌کند؟", answer: "او می‌گوید پیتر باید به خودش هم فکر کند و کار خودش را هم انجام دهد." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره توانایی‌ها و خواسته‌ها",
      prompt: "یک پاراگراف (۶-۷ خط) درباره توانایی‌ها، اجبارها و خواسته‌های خود بنویسید. از حداقل ۵ فعل مودال مختلف استفاده کنید.",
      steps: [
        { title: "توانایی‌ها", text: "از können استفاده کنید.", example: { de: "Ich kann gut kochen.", fa: "آشپزی خوب بلدم." } },
        { title: "اجبارها", text: "از müssen و sollen استفاده کنید.", example: { de: "Ich muss jeden Tag arbeiten.", fa: "باید هر روز کار کنم." } },
        { title: "خواسته‌ها", text: "از wollen و möchten استفاده کنید.", example: { de: "Ich möchte nächstes Jahr reisen.", fa: "سال آینده می‌خواهم سفر کنم." } }
      ],
      modelAnswer: "Ich kann Deutsch und Englisch sprechen. Ich muss jeden Tag zur Arbeit gehen und viele Aufgaben machen. Ich soll auch mehr Sport treiben, aber ich habe wenig Zeit. Ich will nächstes Jahr eine Reise nach Deutschland machen. Ich möchte dort studieren und neue Leute kennenlernen. Ich darf auch dort arbeiten, weil ich ein Visum habe. Mögen Sie das?"
    }
  ],

  listening: [
    {
      title: "گوش دادن: مکالمات با مودال‌ها",
      instruction: "به جملات زیر گوش دهید و تکرار کنید.",
      sentences: [
        { de: "Ich kann gut schwimmen.", fa: "من خوب بلدم شنا کنم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich kann gut schwimmen" },
        { de: "Du musst pünktlich kommen.", fa: "تو باید سر وقت بیایی.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Du musst pünktlich kommen" },
        { de: "Darf ich hier sitzen?", fa: "آیا اجازه دارم اینجا بنشینم؟", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Darf ich hier sitzen" },
        { de: "Wir möchten ein Zimmer reservieren.", fa: "ما می‌خواهیم یک اتاق رزرو کنیم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Wir möchten ein Zimmer reservieren" },
        { de: "Das muss ich können.", fa: "من باید بتوانم این کار را بکنم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Das muss ich können" }
      ]
    }
  ],

  speaking: [
    {
      title: "تمرین گفتاری: توانایی‌ها و خواسته‌ها",
      pattern: "Ich kann... Ich muss... Ich will... Ich darf...",
      exercise: "درباره ۵ کاری که می‌توانید، باید و می‌خواهید انجام دهید صحبت کنید. از مودال‌های مختلف استفاده کنید."
    }
  ],

  cultureTip: "در فرهنگ آلمانی، تفاوت بین müssen و sollen بسیار مهم است. müssen بیانگر اجبار قانونی یا شخصی است (Ich muss zur Arbeit gehen)، در حالیکه sollen بیانگر توصیه یا وظیفه اخلاقی است (Du sollst pünktlich sein). استفاده اشتباه از این دو می‌تواند باعث سوءتفاهم شود. همچنین فعل dürfen در آلمان برای بیان قوانین و مقررات بسیار رایج است.",

  examData: {
    questions: [
      { question: "من باید فردا زود بلند شوم:", options: ["Ich muss morgen früh aufstehen.", "Ich will morgen früh aufstehen.", "Ich kann morgen früh aufstehen.", "Ich darf morgen früh aufstehen."], answer: 0 },
      { question: "آیا اجازه دارم اینجا بنشینم؟", options: ["Kann ich hier sitzen?", "Darf ich hier sitzen?", "Muss ich hier sitzen?", "Will ich hier sitzen?"], answer: 1 },
      { question: "او می‌خواهد پزشک شود:", options: ["Er will Arzt werden.", "Er kann Arzt werden.", "Er muss Arzt werden.", "Er darf Arzt werden."], answer: 0 },
      { question: "آشپزی بلدم:", options: ["Ich muss kochen.", "Ich will kochen.", "Ich kann kochen.", "Ich soll kochen."], answer: 2 },
      { question: "تو باید بیشتر بخوابی:", options: ["Du musst mehr schlafen.", "Du sollst mehr schlafen.", "Du kannst mehr schlafen.", "Du willst mehr schlafen."], answer: 1 },
      { question: "کدام مودال دوگانه است؟", options: ["Ich kann das machen.", "Das muss ich können.", "Ich will das machen.", "Ich soll das machen."], answer: 1 },
      { question: "ما می‌خواهیم رزرو کنیم:", options: ["Wir müssen reservieren.", "Wir können reservieren.", "Wir möchten reservieren.", "Wir sollen reservieren."], answer: 2 },
      { question: "دوست داشتن:", options: ["wollen", "können", "mögen", "dürfen"], answer: 2 },
      { question: "بچه‌ها اجازه ندارند سیگار بکشند:", options: ["Kinder müssen nicht rauchen.", "Kinder dürfen nicht rauchen.", "Kinder sollen nicht rauchen.", "Kinder können nicht rauchen."], answer: 1 },
      { question: "Ich ___ gut schwimmen. (بلدم)", options: ["muss", "darf", "kann", "will"], answer: 2 }
    ]
  }
};
