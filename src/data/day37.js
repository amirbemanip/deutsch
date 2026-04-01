export const day37Data = {
  title: "روز ۳۷: کونیونکتیو دوم (Konjunktiv II) - آرزوها، ادب و فرضیات",
  objective: "یادگیری Konjunktiv II برای بیان آرزوها، صحبت مؤدبانه و بیان شرایط فرضی (würde, hätte, wäre, könnte)",
  level: "B1",

  grammarData: {
    subtitle: "Konjunktiv II: جهان فرضی و مؤدبانه",
    content: [
      {
        type: "text",
        title: "۱. Konjunktiv II چیست؟",
        text: "Konjunktiv II برای سه کاربرد اصلی استفاده می‌شود: ۱) بیان آرزو و خواسته (Ich würde gern reisen)، ۲) صحبت مؤدبانه (Könnten Sie mir helfen?)، ۳) بیان شرایط فرضی (Wenn ich reich wäre, würde ich reisen). ساختار اصلی: würde + مصدر (Infinitiv) برای بیشتر افعال. اما افعال sein, haben, مودال‌ها و افعال نامنظم رایج شکل خاص خود را دارند."
      },
      {
        type: "table",
        title: "صورت Konjunktiv II افعال مهم",
        rows: [
          { de: "sein → wäre", fa: "Ich wäre gern reich. (کاش ثروتمند بودم.)" },
          { de: "haben → hätte", fa: "Ich hätte gern ein Auto. (کاش ماشین داشتم.)" },
          { de: "werden → würde", fa: "Ich würde gern reisen. (کاش سفر می‌کردم.)" },
          { de: "können → könnte", fa: "Könnten Sie mir helfen? (می‌توانید کمکم کنید؟)" },
          { de: "müssen → müsste", fa: "Ich müsste eigentlich lernen. (باید درس بخوانم.)" },
          { de: "dürfen → dürfte", fa: "Das dürfte stimmen. (احتمالاً درست است.)" },
          { de: "sollen → sollte", fa: "Du solltest mehr schlafen. (باید بیشتر بخوابی.)" },
          { de: "wissen → wüsste", fa: "Ich wüsste gern die Antwort. (کاش جواب را می‌دانستم.)" }
        ]
      },
      {
        type: "text",
        title: "۲. ساختار würde + Infinitiv",
        text: "برای اکثر افعال منظم و بسیاری از افعال نامنظم، از würde + مصدر استفاده می‌کنیم. قاعده: فاعل + würde (صرف شده) + بقیه جمله + مصدر در آخر. برای فعل‌های sein, haben و افعال مودال شکل خاص Konjunktiv II ترجیح داده می‌شود."
      },
      {
        type: "examples",
        title: "مثال‌های کاربردی",
        items: [
          { de: "Wenn ich mehr Zeit hätte, würde ich mehr lesen.", fa: "اگر وقت بیشتری داشتم، بیشتر کتاب می‌خواندم." },
          { de: "Ich würde gern nach Japan reisen.", fa: "کاش می‌توانستم به ژاپن سفر کنم." },
          { de: "Könnten Sie bitte langsamer sprechen?", fa: "می‌توانید لطفاً آهسته‌تر صحبت کنید؟" },
          { de: "Wenn ich du wäre, würde ich das nicht machen.", fa: "اگر جای تو بودم، این کار را نمی‌کردم." },
          { de: "Ich hätte gern einen Kaffee, bitte.", fa: "لطفاً یک قهوه می‌خواستم. (مؤدبانه در کافه)" },
          { de: "Wäre es möglich, einen Termin zu machen?", fa: "آیا امکانش هست وقت بگیرم؟ (مؤدبانه)" },
          { de: "Ich wünschte, ich könnte fliegen.", fa: "کاش می‌توانستم پرواز کنم." }
        ]
      },
      {
        type: "alert",
        title: "تفاوت مهم: Konjunktiv II با و بدون würde",
        text: "برای فعل‌های sein, haben, مودال‌ها و افعال نامنظم رایج (kommen, gehen, wissen, geben)، شکل خاص Konjunktiv II (wäre, hätte, könnte, käme...) ترجیح داده می‌شود. مثلاً نمی‌گوییم ich würde sein بلکه می‌گوییم ich wäre. اما برای افعال منظم و نامنظم بلندتر، استفاده از würde رایج‌تر است."
      },
      {
        type: "interactive_quiz",
        title: "آزمون Konjunktiv II",
        questions: [
          {
            question: "Konjunktiv II فعل sein برای ich چیست؟",
            questionDe: "Wie lautet Konjunktiv II von sein für ich?",
            options: [
              { text: "ich wäre", isCorrect: true },
              { text: "ich würde sein", isCorrect: false },
              { text: "ich war", isCorrect: false }
            ],
            explanation: "فعل sein در Konjunktiv II شکل خاص خود را دارد: wäre. از würde استفاده نمی‌شود."
          },
          {
            question: "کدام جمله مؤدبانه‌ترین درخواست است؟",
            questionDe: "Welche Anfrage ist am höflichsten?",
            options: [
              { text: "Kannst du mir helfen?", isCorrect: false },
              { text: "Könntest du mir helfen?", isCorrect: false },
              { text: "Könnten Sie mir helfen?", isCorrect: true }
            ],
            explanation: "استفاده از Konjunktiv II (könnten) + Sie (رسمی) مؤدبانه‌ترین شکل درخواست است."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین Konjunktiv II",
        instruction: "جملات را با شکل صحیح Konjunktiv II کامل کنید.",
        blanks: [
          { sentence: "Wenn ich reich _______ (sein), würde ich eine Weltreise machen.", answer: "wäre", hint: "Konjunktiv II von sein" },
          { sentence: "Ich _______ (haben) gern ein großes Haus.", answer: "hätte", hint: "Konjunktiv II von haben" },
          { sentence: "_______ (können) Sie mir bitte helfen?", answer: "Könnten", hint: "Konjunktiv II von können + Sie" },
          { sentence: "Ich _______ (wollen) Ihnen eine Frage stellen.", answer: "wollte", hint: "Konjunktiv II von wollen" },
          { sentence: "Wenn ich mehr Geld _______ (haben), würde ich reisen.", answer: "hätte", hint: "Konjunktiv II von haben im Nebensatz" },
          { sentence: "Ich _______ gern Deutsch sprechen.", answer: "würde", hint: "würde + Infinitiv" },
          { sentence: "Es _______ schön, wenn du kommen könntest.", answer: "wäre", hint: "Konjunktiv II von sein" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "آرزوها و خواسته‌ها (Wünsche)",
        words: [
          { de: "der Wunsch", fa: "آرزو / خواسته", ipa: "[vʊnʃ]", article: "der", plural: "die Wünsche", examples: [{ de: "Ich habe einen großen Wunsch.", fa: "من یک آرزوی بزرگ دارم." }] },
          { de: "träumen von", fa: "رؤیا دیدن درباره", ipa: "[ˈtʁɔɪ̯mən fɔn]", article: "-", plural: "-", examples: [{ de: "Ich tr\u00e4ume von einer besseren Welt.", fa: "من رؤیای دنیای بهتری را دارم." }] },
          { de: "sich wünschen", fa: "آرزو کردن / خواستن", ipa: "[zɪç ˈvʏʁʃən]", article: "-", plural: "-", examples: [{ de: "Ich wünsche mir ein neues Fahrrad.", fa: "من یک دوچرخه نو می‌خواهم." }] },
          { de: "der Traum", fa: "رؤیا / خواب", ipa: "[tʁaʊ̯m]", article: "der", plural: "die Träume", examples: [{ de: "Mein Traum ist es, Pilot zu werden.", fa: "رؤیای من این است که خلبان شوم." }] }
        ]
      },
      {
        title: "شرایط فرضی (Hypothetische Situationen)",
        words: [
          { de: "die Bedingung", fa: "شرط", ipa: "[bəˈdɪŋʊŋ]", article: "die", plural: "die Bedingungen", examples: [{ de: "Unter welcher Bedingung?", fa: "تحت چه شرایطی؟" }] },
          { de: "die Situation", fa: "وضعیت / موقعیت", ipa: "[zituaˈtsi̯oːn]", article: "die", plural: "die Situationen", examples: [{ de: "In dieser Situation würde ich ruhig bleiben.", fa: "در این وضعیت من آرام می‌ماندم." }] },
          { de: "möglich", fa: "ممکن", ipa: "[ˈmøːklɪç]", article: "-", plural: "-", examples: [{ de: "Wäre das möglich?", fa: "آیا این ممکن است؟" }] },
          { de: "unmöglich", fa: "غیرممکن", ipa: "[ˈʊnˌmøːklɪç]", article: "-", plural: "-", examples: [{ de: "Das wäre unmöglich ohne Ihre Hilfe.", fa: "این بدون کمک شما غیرممکن بود." }] },
          { de: "vorschlagen", fa: "پیشنهاد دادن", ipa: "[ˈfoːɐ̯ˌʃlaːɡn̩]", article: "-", plural: "-", conjugation: { ich: "schlage vor", du: "schlägst vor", er: "schlägt vor", wir: "schlagen vor", ihr: "schlagt vor", sie: "schlagen vor" }, examples: [{ de: "Ich würde vorschlagen, dass wir früher kommen.", fa: "پیشنهاد می‌کنم زودتر بیاییم." }] },
          { de: "empfehlen", fa: "توصیه کردن", ipa: "[ɛmˈpfeːlən]", article: "-", plural: "-", conjugation: { ich: "empfehle", du: "empfiehlst", er: "empfiehlt", wir: "empfehlen", ihr: "empfehlt", sie: "empfehlen" }, examples: [{ de: "Ich würde Ihnen empfehlen, mehr zu üben.", fa: "به شما توصیه می‌کنم بیشتر تمرین کنید." }] },
          { de: "höflich", fa: "مؤدب", ipa: "[ˈhøːflɪç]", article: "-", plural: "-", examples: [{ de: "Könnten Sie bitte höflicher sein?", fa: "می‌توانید مؤدبانه‌تر باشید؟" }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Wenn ich Millionär wäre...\n\nStellen Sie sich vor: Sie hätten plötzlich eine Million Euro. Was würden Sie tun?\nMaria (28, Lehrerin) sagt: \"Wenn ich so viel Geld hätte, würde ich erstmal um die Welt reisen. Ich würde nach Japan, Australien und Brasilien fliegen. Danach würde ich ein kleines Café eröffnen.\"\nThomas (45, Ingenieur) meint: \"Ich würde ein großes Haus am See kaufen. Natürlich würde ich auch meinen Kindern helfen. Sie könnten ohne Sorgen studieren.\"\nLisa (35, Ärztin) antwortet: \"Ich würde eine Stiftung gründen, um kranken Kindern zu helfen. Außerdem würde ich lernen, Klavier zu spielen.\"\nInteressant ist: Die meisten Menschen würden nicht aufhören zu arbeiten. Sie würden nur etwas anderes machen, das ihnen Freude bringt.",
      translation: "اگر میلیونر بودم...\n\nتصور کنید: ناگهان یک میلیون یورو داشتید. چه می‌کردید؟\nماریا (۲۸ ساله، معلم) می‌گوید: «اگر اینقدر پول داشتم، اول دور دنیا سفر می‌کردم. به ژاپن، استرالیا و برزیل می‌رفتم. بعد یک کافه کوچک باز می‌کردم.»\nتوماس (۴۵ ساله، مهندس) می‌گوید: «یک خانه بزرگ کنار دریاچه می‌خریدم. البته به بچه‌هایم هم کمک می‌کردم. آن‌ها می‌توانستند بدون نگرانی درس بخوانند.»\nلیزا (۳۵ ساله، پزشک) جواب می‌دهد: «یک بنیاد تأسیس می‌کردم تا به بچه‌های بیمار کمک کنم. همچنین یاد می‌گرفتم پیانو بزنم.»\nجالب این است: بیشتر مردم کار را کنار نمی‌گذاشتند. فقط کار دیگری انجام می‌دادند که به آن‌ها لذت می‌داد.",
      questions: [
        { question: "اگر ماریا این همه پول داشت ابتدا چه کاری می‌کرد؟", answer: "ابتدا به دور دنیا سفر می‌کرد." },
        { question: "توماس چه چیزی برای بچه‌هایش می‌خواست؟", answer: "می‌خواست بچه‌هایش بدون نگرانی درس بخوانند." },
        { question: "لیزا چه بنیادی تأسیس می‌کرد و چه چیزی یاد می‌گرفت؟", answer: "بنیادی برای کمک به بچه‌های بیمار و یادگیری پیانو." },
        { question: "چه نکته جالبی درباره پاسخ‌ها وجود داشت؟", answer: "بیشتر مردم کار را کنار نمی‌گذاشتند، فقط کار دیگری انجام می‌دادند." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره آرزوها",
      prompt: "یک متن ۸-۱۰ خطی درباره این موضوع بنویسید: «اگر یک میلیون یورو داشتم...» از Konjunktiv II و würde استفاده کنید.",
      steps: [
        { title: "مقدمه فرضی", text: "با Angenommen شروع کنید", example: { de: "Angenommen, ich hätte eine Million Euro.", fa: "فرض کنید من یک میلیون یورو داشته باشم." } },
        { title: "بیان کارها", text: "از würde + مصدر و hätte/wäre استفاده کنید", example: { de: "Ich würde ein Haus kaufen und meine Familie unterstützen.", fa: "خانه‌ای می‌خریدم و از خانواده‌ام حمایت می‌کردم." } },
        { title: "نتیجه‌گیری", text: "جمله پایانی", example: { de: "Aber glücklicher wäre ich nicht unbedingt.", fa: "اما لزوماً خوشبخت‌تر نمی‌شدم." } }
      ],
      modelAnswer: "Angenommen, ich hätte plötzlich eine Million Euro. Zuerst würde ich eine lange Reise machen. Ich würde nach Japan und Norwegen fliegen, weil ich diese Länder schon immer besuchen wollte. Danach würde ich ein kleines Haus am Meer kaufen. Ich hätte dann genug Zeit für meine Hobbys. Meinen Eltern würde ich eine große Wohnung kaufen, damit sie es bequemer haben. Einen Teil des Geldes würde ich für die Ausbildung meiner Geschwister sparen. Natürlich würde ich auch etwas spenden. Aber ich würde nicht aufhören zu arbeiten, weil mir meine Arbeit Spaß macht."
    }
  ],

  listening: [
    {
      title: "گوش دادن: Konjunktiv II",
      instruction: "به جملات زیر گوش دهید و تکرار کنید.",
      sentences: [
        { de: "Wenn ich reich wäre, würde ich reisen.", fa: "اگر ثروتمند بودم، سفر می‌کردم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Wenn ich reich wäre, würde ich reisen" },
        { de: "Könnten Sie mir bitte helfen?", fa: "می‌توانید لطفاً کمکم کنید؟", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Könnten Sie mir bitte helfen" },
        { de: "Ich hätte gern einen Kaffee.", fa: "یک قهوه می‌خواستم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich hätte gern einen Kaffee" },
        { de: "Ich würde gern nach Deutschland reisen.", fa: "کاش می‌توانستم به آلمان سفر کنم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich würde gern nach Deutschland reisen" },
        { de: "Wäre es möglich, einen Termin zu machen?", fa: "آیا امکانش هست وقت بگیرم؟", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Wäre es möglich, einen Termin zu machen" }
      ]
    }
  ],

  speaking: [
    {
      title: "بازی نقش: درخواست مؤدبانه",
      pattern: "Könnten Sie...? Ich hätte gern... Wäre es möglich...?",
      exercise: "در موقعیت‌های زیر از Konjunktiv II مؤدبانه استفاده کنید: ۱) در رستوران غذا سفارش دهید. ۲) از رئیس مرخصی بخواهید. ۳) در هتل اتاق رزرو کنید."
    }
  ],

  cultureTip: "آلمانی‌ها بسیار از Konjunktiv II استفاده می‌کنند تا مؤدب باشند. در آلمان، مستقیم خواستن چیزی بدون Konjunktiv II ممکن است بی‌ادبانه به نظر برسد. مثلاً به جای «Ich will einen Kaffee» (من قهوه می‌خواهم) می‌گویند «Ich hätte gern einen Kaffee» (قهوه‌ای می‌خواستم). در محیط کار و اداره، استفاده از Konjunktiv II نشاندهنده سطح بالای زبانی شماست.",

  examData: {
    questions: [
      { question: "Konjunktiv II فعل haben برای er چیست؟", options: ["er hat", "er hätte", "er haben würde", "er hatte"], answer: 1 },
      { question: "«کاش پول بیشتری داشتم» به آلمانی:؟", options: ["Ich wünschte mehr Geld.", "Ich hätte gern mehr Geld.", "Ich will mehr Geld.", "Ich habe mehr Geld gewollt."], answer: 1 },
      { question: "کدام شکل مؤدبانه‌تر است؟", options: ["Können Sie mir helfen?", "Könnten Sie mir helfen?", "Kannst du mir helfen?", "Hilf mir!"], answer: 1 },
      { question: "«Wenn ich du ..., würde ich das nicht machen.»", options: ["bin", "war", "wäre", "sei"], answer: 2 },
      { question: "Konjunktiv II فعل können چیست؟", options: ["kannte", "könnte", "könne", "können würde"], answer: 1 },
      { question: "«Ich _______ gern ein Zimmer reservieren.»", options: ["würde", "wollte", "hätte", "könnte"], answer: 0 },
      { question: "«Ohne deine Hilfe _______ ich das nicht geschafft.»", options: ["habe", "hatte", "hätte", "würde"], answer: 2 },
      { question: "کدام فعل از شکل خاص Konjunktiv II استفاده می‌کند؟", options: ["spielen", "arbeiten", "wissen", "lernen"], answer: 2 }
    ]
  }
};
