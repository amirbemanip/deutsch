export const day37Data = {
  title: "روز ۳۷: کونیونکتیو دوم (Konjunktiv II) - آرزوها، ادب و فرضیات",
  objective: "یادگیری Konjunktiv II برای بیان آرزوها، صحبت مؤدبانه و بیان شرایط فرضی (würde, hätte, wäre, könnte)",

  grammarData: {
    subtitle: "Konjunktiv II: جهان فرضی و مؤدبانه",
    content: [
      {
        type: "text",
        title: "۱. Konjunktiv II چیست و چه کاربردی دارد؟",
        text: "Konjunktiv II برای سه کاربرد اص'ی استفاده می‌شود: ۱) بیان آرزو و خواسته (Ich würde gern reisen)، ۲) صحبت مؤدبانه (Könnten Sie mir helfen?)، ۳) شرایط فرضی (Wenn ich reich wäre, würde ich reisen). ساختار اص'ی: würde + مصدر (Infinitiv) برای بیشتر افعا'. اما چهار فع' مهم sein, haben, werden و افعا' مودا' شک' خاص خود را دارند."
      },
      {
        type: "table",
        title: "صورت Konjunktiv II فع'‌های مهم",
        rows: [
          { de: "sein → wäre", fa: "Ich wäre gern reich. (کاش ثروتمند بودم.)" },
          { de: "haben → hätte", fa: "Ich hätte gern ein Auto. (کاش ماشین داشتم.)" },
          { de: "werden → würde", fa: "Ich würde gern reisen. (کاش سفر می‌کردم.)" },
          { de: "können → könnte", fa: "Könnten Sie mir helfen? (می‌توانید کمکم کنید؟)" },
          { de: "müssen → müsste", fa: "Ich müsste eigentlich lernen. (باید درس بخوانم.)" },
          { de: "dürfen → dürfte", fa: "Das dürfte stimmen. (احتما'اً درست است.)" },
          { de: "sollen → sollte", fa: "Du solltest mehr schlafen. (باید بیشتر بخوابی.)" },
          { de: "wissen → wüsste", fa: "Ich wüsste gern die Antwort. (کاش جواب را می‌دانستم.)" }
        ]
      },
      {
        type: "text",
        title: "۲. ساختار würde + Infinitiv",
        text: "برای اکثر افعا' منظم و بسیاری از فع'‌های نامنظم، از würde + مصدر استفاده می‌کنیم. قاعده: فاع' + würde (صرف شده) + بقیه جم'ه + مصدر در آخر. این ساختار مشابه would + verb در انگ'یسی است (I would go). برای فع'‌های sein, haben, فع'‌های مودا' و افعا' نام嫽ز رایج (kommen, gehen, wissen) معمو'اً شک' خاص Konjunktiv II ترجیح داده می‌شود و نباید از würde استفاده کرد."
      },
      {
        type: "examples",
        title: "مثا'‌های کاربردی Konjunktiv II",
        items: [
          { de: "Wenn ich mehr Zeit hätte, würde ich mehr lesen.", fa: "اگر وقت بیشتری داشتم، بیشتر کتاب می‌خواندم." },
          { de: "Ich würde gern nach Japan reisen.", fa: "کاش می‌توانستم به ژاپن سفر کنم." },
          { de: "Könnten Sie bitte langsamer sprechen?", fa: "می‌توانید 'طفاً آهسته‌تر صحبت کنید؟" },
          { de: "Wenn ich du wäre, würde ich das nicht machen.", fa: "اگر جای تو بودم، این کار را نمی‌کردم." },
          { de: "Ich hätte gern einen Kaffee, bitte.", fa: "'طفاً یک قهوه می‌خواستم. (مؤدبانه در کافه)" },
          { de: "Ohne das Internet wäre das Leben anders.", fa: "بدون اینترنت زندگی متفاوت بود." },
          { de: "Wäre es möglich, einen Termin zu machen?", fa: "آیا امکانش هست وقت بگیرم؟ (مؤدبانه)" },
          { de: "Ich wünschte, ich könnte fliegen.", fa: "کاش می‌توانستم پرواز کنم." }
        ]
      },
      {
        type: "alert",
        title: "تفاوت مهم: Konjunktiv II با و بدون würde",
        text: "برای فع'‌های sein, haben, فع'‌های مودا' و فع'‌های نام嫽ز رایج (kommen, gehen, wissen, geben)، شک' خاص Konjunktiv II (wäre, hätte, könnte, käme...) ترجیح داده می‌شود و نباید از würde استفاده کرد. مث'اً نمی‌گوییم ~~ich würde sein~~ ب'که می‌گوییم ich wäre. اما برای فع'‌های منظم و نام嫽ز ب'ندتر، استفاده از würde رایج‌تر است."
      },
      {
        type: "interactive_quiz",
        title: "آزمون Konjunktiv II",
        questions: [
          {
            question: "Konjunktiv II فع' sein برای ich چیست؟",
            questionDe: "Wie lautet Konjunktiv II von 'sein' für 'ich'?",
            options: [
              { text: "ich wäre", isCorrect: true },
              { text: "ich würde sein", isCorrect: false },
              { text: "ich war", isCorrect: false }
            ],
            explanation: "فع' sein در Konjunktiv II شک' خاص خود را دارد: wäre. از würde استفاده نمی‌شود."
          },
          {
            question: "کدام جم'ه مؤدبانه‌ترین درخواست است؟",
            questionDe: "Welche Anfrage ist am höflichsten?",
            options: [
              { text: "Kannst du mir helfen?", isCorrect: false },
              { text: "Könntest du mir helfen?", isCorrect: false },
              { text: "Könnten Sie mir helfen?", isCorrect: true }
            ],
            explanation: "استفاده از Konjunktiv II (könnten) + Sie (رسمی) مؤدبانه‌ترین شک' درخواست است."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین Konjunktiv II",
        instruction: "جم'ات را با شک' صحیح Konjunktiv II کام' کنید.",
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
          { de: "der Wunsch", fa: "آرزو / خواسته", article: "der", plural: "die Wünsche", examples: [{ de: "Ich habe einen großen Wunsch.", fa: "من یک آرزوی بزرگ دارم." }] },
          { de: "träumen von", fa: "رؤیا دیدن درباره", article: "-", plural: "-", examples: [{ de: "Ich träume von einer besseren Welt.", fa: "من رؤیای دنیای بهتری را دارم." }] },
          { de: "sich wünschen", fa: "آرزو کردن / خواستن", article: "-", plural: "-", examples: [{ de: "Ich wünsche mir ein neues Fahrrad.", fa: "من یک دوچرخه نو می‌خواهم." }] },
          { de: "hoffen auf", fa: "امیدوار بودن به", article: "-", plural: "-", examples: [{ de: "Ich hoffe auf eine gute Note.", fa: "من امیدوارم نمره خوبی بگیرم." }] },
          { de: "der Traum", fa: "رؤیا / خواب", article: "der", plural: "die Träume", examples: [{ de: "Mein Traum ist es, Pilot zu werden.", fa: "رؤیای من این است که خ'بان شوم." }] }
        ]
      },
      {
        title: "شرایط فرضی (Hypothetische Situationen)",
        words: [
          { de: "die Bedingung", fa: "شرط", article: "die", plural: "die Bedingungen", examples: [{ de: "Unter welcher Bedingung?", fa: "تحت چه شرایطی؟" }] },
          { de: "die Situation", fa: "وضعیت / موقعیت", article: "die", plural: "die Situationen", examples: [{ de: "In dieser Situation würde ich ruhig bleiben.", fa: "در این وضعیت من آرام می‌ماندم." }] },
          { de: "voraussetzen", fa: "پیش‌فرض داشتن", article: "-", plural: "-", examples: [{ de: "Das setzt voraus, dass man genug Geld hat.", fa: "این پیش‌فرض دارد که آدم پو' کافی داشته باشد." }] },
          { de: "möglich", fa: "ممکن", article: "-", plural: "-", examples: [{ de: "Wäre das möglich?", fa: "آیا این ممکن است؟" }] },
          { de: "unmöglich", fa: "غیرممکن", article: "-", plural: "-", examples: [{ de: "Das wäre unmöglich ohne Ihre Hilfe.", fa: "این بدون کمک شما غیرممکن بود." }] },
          { de: "die Alternative", fa: "جایگزین", article: "die", plural: "die Alternativen", examples: [{ de: "Gibt es eine Alternative?", fa: "آیا جایگزینی وجود دارد؟" }] },
          { de: "annehmen", fa: "فرض کردن / قبو' کردن", article: "-", plural: "-", examples: [{ de: "Angenommen, du hättest viel Geld...", fa: "فرض کن پو' زیادی داشته باشی..." }] },
          { de: "vorschlagen", fa: "پیشنهاد دادن", article: "-", plural: "-", examples: [{ de: "Ich würde vorschlagen, dass wir früher kommen.", fa: "پیشنهاد می‌کنم زودتر بیاییم." }] },
          { de: "empfehlen", fa: "توصیه کردن", article: "-", plural: "-", examples: [{ de: "Ich würde Ihnen empfehlen, mehr zu üben.", fa: "به شما توصیه می‌کنم بیشتر تمرین کنید." }] },
          { de: "die Konsequenz", fa: "پیامد / نتیجه", article: "die", plural: "die Konsequenzen", examples: [{ de: "Man muss die Konsequenzen bedenken.", fa: "باید به پیامدها فکر کرد." }] },
          { de: "vermeiden", fa: "اجتناب کردن", article: "-", plural: "-", examples: [{ de: "Ich würde Fehler vermeiden wollen.", fa: "می‌خواهم از خطاها اجتناب کنم." }] },
          { de: "der Vorschlag", fa: "پیشنهاد", article: "der", plural: "die Vorschläge", examples: [{ de: "Haben Sie einen besseren Vorschlag?", fa: "آیا پیشنهاد بهتری دارید؟" }] },
          { de: "höflich", fa: "مؤدب", article: "-", plural: "-", examples: [{ de: "Könnten Sie bitte höflicher sein?", fa: "می‌توانید مؤدبانه‌تر باشید؟" }] },
          { de: "die Bitte", fa: "درخواست", article: "die", plural: "die Bitten", examples: [{ de: "Ich hätte eine Bitte.", fa: "من یک درخواست داشتم." }] },
          { de: "der Vergleich", fa: "مقایسه", article: "der", plural: "die Vergleiche", examples: [{ de: "Im Vergleich dazu wäre das besser.", fa: "در مقایسه با آن این بهتر بود." }] },
          { de: "bevorzugen", fa: "ترجیح دادن", article: "-", plural: "-", examples: [{ de: "Ich würde den Zug bevorzugen.", fa: "من قطار را ترجیح می‌دهم." }] },
          { de: "die Wahrscheinlichkeit", fa: "احتما'", article: "die", plural: "die Wahrscheinlichkeiten", examples: [{ de: "Die Wahrscheinlichkeit wäre gering.", fa: "احتما' کم بود." }] },
          { de: "selbstverständlich", fa: "بدیهی / ا'بته", article: "-", plural: "-", examples: [{ de: "Selbstverständlich würde ich Ihnen helfen.", fa: "ا'بته که به شما کمک می‌کردم." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Wenn ich Millionär wäre...\n\nStellen Sie sich vor: Sie hätten plötzlich eine Million Euro. Was würden Sie tun? Das ist eine beliebte Frage, die Menschen gerne diskutieren. Wir haben einige Deutsche gefragt, was sie tun würden.\nMaria (28, Lehrerin) sagt: 'Wenn ich so viel Geld hätte, würde ich erstmal um die Welt reisen. Ich würde nach Japan, Australien und Brasilien fliegen. Danach würde ich ein kleines Café eröffnen.\"\nThomas (45, Ingenieur) meint: 'Ich würde ein großes Haus am See kaufen. Natürlich würde ich auch meinen Kindern helfen. Sie könnten ohne Sorgen studieren.\"\nLisa (35, 'rztin) antwortet: 'Ich würde eine Stiftung gründen, um kranken Kindern zu helfen. Außerdem würde ich lernen, Klavier zu spielen. Das hätte ich schon immer machen wollen.\"\nInteressant ist: Die meisten Menschen würden nicht aufhören zu arbeiten. Sie würden nur etwas anderes machen, das ihnen Freude bringt. Das zeigt, dass Geld nicht alles ist ' aber es würde das Leben einfacher machen.",
      questions: [
        { question: "اگر ماریا این همه پو' داشت ابتدا چه کاری می‌کرد؟", answer: "ابتدا به دور دنیا سفر می‌کرد." },
        { question: "توماس چه چیزی برای فرزندانش می‌خواست؟", answer: "می‌خواست فرزندانش بدون نگرانی درس بخوانند." },
        { question: "'یزا چه بنیادی تأسیس می‌کرد و چه چیزی یاد می‌گرفت؟", answer: "بنیادی برای کمک به کودکان بیمار و یادگیری پیانو." },
        { question: "چه نکته جا'بی درباره پاسخ‌ها وجود داشت؟", answer: "بیشتر مردم کار را کنار نمی‌گذاشتند، فقط کار دیگری انجام می‌دادند." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره آرزوها",
      prompt: "یک متن ۸-۱۰ خطی درباره این موضوع بنویسید: «اگر یک می'یون یورو داشتم...» از Konjunktiv II و würde استفاده کنید.",
      steps: [
        {
          title: "مقدمه فرضی",
          text: "با Angenommen شروع کنید",
          example: { de: "Angenommen, ich hätte eine Million Euro.", fa: "فرض کنید من یک می'یون یورو داشته باشم." }
        },
        {
          title: "بیان کارها",
          text: "از würde + مصدر و hätte/wäre استفاده کنید",
          example: { de: "Ich würde ein Haus kaufen und meine Familie unterstützen.", fa: "خانه‌ای می‌خریدم و از خانواده‌ام حمایت می‌کردم." }
        },
        {
          title: "نتیجه‌گیری",
          text: "جم'ه پایانی",
          example: { de: "Aber glücklicher wäre ich nicht unbedingt.", fa: "اما 'زوماً خوشبخت‌تر نمی‌شدم." }
        }
      ],
      modelAnswer: "Angenommen, ich hätte plötzlich eine Million Euro. Zuerst würde ich eine lange Reise machen. Ich würde nach Japan und Norwegen fliegen, weil ich diese Länder schon immer besuchen wollte. Danach würde ich ein kleines Haus am Meer kaufen. Ich hätte dann genug Zeit für meine Hobbys, zum Beispiel Gitarre spielen und Malen. Meinen Eltern würde ich eine große Wohnung kaufen, damit sie es bequemer haben. Einen Teil des Geldes würde ich für die Ausbildung meiner Geschwister sparen. Natürlich würde ich auch etwas spenden, weil andere Menschen die Hilfe brauchen. Aber ich würde nicht aufhören zu arbeiten, weil mir meine Arbeit Spaß macht. Geld allein macht nicht glücklich, aber es würde das Leben einfacher machen."
    }
  ],

  listening: [
    {
      title: "Konjunktiv II در گفتگو",
      source: "Konjunktiv II erklärt (B1)",
      link: "https://www.youtube.com/watch?v=EaVGJwV8zgI",
      instructions: "به فع'‌های Konjunktiv II در ویدیو دقت کنید. وقتی می‌شنوید: wäre, hätte, könnte, würde... یادداشت کنید. توجه کنید در چه موقعیت‌هایی از Konjunktiv II استفاده می‌شود: آرزو، مؤدب، یا فرضی؟"
    }
  ],

  speaking: [
    {
      title: "بازی نقش: درخواست مؤدبانه",
      pattern: "Könnten Sie...? Ich hätte gern... Wäre es möglich...?",
      exercise: "در موقعیت‌های زیر از Konjunktiv II مؤدبانه استفاده کنید: ۱) در رستوران غذا سفارش دهید. ۲) از رئیس مرخصی بخواهید. ۳) در هت' اتاق رزرو کنید."
    }
  ],

  cultureTip: "آ'مانی‌ها بسیار از Konjunktiv II استفاده می‌کنند تا مؤدب باشند. در آ'مان، مستقیم خواستن چیزی بدون Konjunktiv II ممکن است بی‌ادبانه به نظر برسد. مث'اً به جای «Ich will einen Kaffee» (من قهوه می‌خواهم) می‌گویند «Ich hätte gern einen Kaffee» (قهوه‌ای می‌خواستم). در محیط کار و اداره، استفاده از Konjunktiv II نشانه سطح با'ای زبانی شماست.",

  examData: {
    questions: [
      { question: "Konjunktiv II فع' haben برای er چیست؟", options: ["er hat", "er hätte", "er haben würde", "er hatte"], answer: 1 },
      { question: "«کاش پو' بیشتری داشتم» به آ'مانی:?", options: ["Ich wünschte mehr Geld.", "Ich hätte gern mehr Geld.", "Ich will mehr Geld.", "Ich habe mehr Geld gewollt."], answer: 1 },
      { question: "کدام شک' مؤدبانه‌تر است؟", options: ["Können Sie mir helfen?", "Könnten Sie mir helfen?", "Kannst du mir helfen?", "Hilf mir!"], answer: 1 },
      { question: "«Wenn ich du ..., würde ich das nicht machen.»", options: ["bin", "war", "wäre", "sei"], answer: 2 },
      { question: "Konjunktiv II فع' können چیست؟", options: ["kannte", "könnte", "könne", "können würde"], answer: 1 },
      { question: "«Ich _______ gern ein Zimmer reservieren.»", options: ["würde", "wollte", "hätte", "könnte"], answer: 0 },
      { question: "«Ohne deine Hilfe _______ ich das nicht geschafft.»", options: ["habe", "hatte", "hätte", "würde"], answer: 2 },
      { question: "کدام فع' از شک' خاص Konjunktiv II استفاده می‌کند؟", options: ["spielen", "arbeiten", "wissen", "lernen"], answer: 2 }
    ]
  }
};
