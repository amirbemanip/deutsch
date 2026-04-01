export const day35Data = {
  title: "روز ۳۵: مرور جامع سطح A2 + آزمون جامع",
  objective: "مرور و جمع‌بندی تمام مباحث A2 شامل Perfekt، Dativ، حروف ربط، فعل‌های بازگشتی، مقارنه، افعال مودال و حروف اضافه مکانی-زمانی",
  level: "A2",

  grammarData: {
    subtitle: "مرور جامع گرامر A2",
    content: [
      {
        type: "text",
        title: "۱. زمان گذشته (Perfekt)",
        text: "زمان Perfekt برای بیان کارهای گذشته استفاده می‌شود. فرمول: haben/sein (صرف شده) + مفعول/ قید + Partizip II (قسمت سوم فعل) در آخر. افعال حرکتی و تغییر حالت با sein و بقیه با haben صرف می‌شوند."
      },
      {
        type: "examples",
        title: "مثال‌های Perfekt",
        items: [
          { de: "Ich habe gestern Deutsch gelernt.", fa: "دیروز آلمانی خواندم." },
          { de: "Er ist nach Berlin gefahren.", fa: "او به برلین رفت." },
          { de: "Wir haben das Buch gelesen.", fa: "ما کتاب را خواندیم." },
          { de: "Sie ist um 8 Uhr aufgestanden.", fa: "او ساعت ۸ بلند شد." },
          { de: "Ich habe mein Zimmer aufgeräumt.", fa: "اتاقم را مرتب کردم." },
          { de: "Die Kinder sind im Park gespielt.", fa: "بچه‌ها در پارک بازی کردند." }
        ]
      },
      {
        type: "text",
        title: "۲. حالت Dativ",
        text: "Dativ برای مفعول غیرمستقیم استفاده می‌شود. تغییرات: der→dem, die→der, das→dem, die(pl)→den+n. افعال مهم Dativ: helfen, danken, gehören, gefallen, antworten."
      },
      {
        type: "table",
        title: "مرور Dativ",
        rows: [
          { de: "der Lehrer → dem Lehrer", fa: "Ich helfe dem Lehrer." },
          { de: "die Mutter → der Mutter", fa: "Ich danke der Mutter." },
          { de: "das Kind → dem Kind", fa: "Das Spielzeug gehört dem Kind." },
          { de: "die Kinder → den Kindern", fa: "Das Essen schmeckt den Kindern." },
          { de: "ich → mir", fa: "Gib mir bitte das Buch!" },
          { de: "du → dir", fa: "Das gefällt dir sehr." },
          { de: "er/sie/es → ihm/ihr/ihm", fa: "Ich helfe ihr." },
          { de: "wir/ihr/sie → uns/euch/ihnen", fa: "Sie danken uns." }
        ]
      },
      {
        type: "text",
        title: "۳. حروف ربط (Konnektoren)",
        text: "حروف ربط فرعی (weil, obwohl, wenn, dass, damit) فعل را به آخر می‌فرستند. حروف ربط جایگاه ۱ (deshalb, trotzdem, also, dann) فعل را در جایگاه ۲ نگه می‌دارند."
      },
      {
        type: "examples",
        title: "مثال‌های حروف ربط",
        items: [
          { de: "Ich lerne Deutsch, weil ich in Deutschland leben möchte.", fa: "آلمانی می‌خوانم چون می‌خواهم در آلمان زندگی کنم." },
          { de: "Es regnet, deshalb bleibe ich zu Hause.", fa: "باران می‌آید، به همین دلیل در خانه می‌مانم." },
          { de: "Obwohl es kalt ist, gehe ich spazieren.", fa: "با وجود اینکه هوا سرد است، پیاده‌روی می‌روم." },
          { de: "Er ist müde, trotzdem arbeitet er weiter.", fa: "او خسته است، با این حال به کار ادامه می‌دهد." }
        ]
      },
      {
        type: "text",
        title: "۴. مقارنه (Komparativ und Superlativ)",
        text: "Komparativ: صفت + er (schneller, größer). Superlativ: am + صفت + sten (am schnellsten) یا der/die/das + صفت + ste (der schnellste)."
      },
      {
        type: "examples",
        title: "مثال‌های مقارنه",
        items: [
          { de: "Berlin ist größer als München.", fa: "برلین بزرگ‌تر از مونیخ است." },
          { de: "Mein Bruder ist älter als ich.", fa: "برادرم بزرگ‌تر از من است." },
          { de: "Das ist das beste Restaurant in der Stadt.", fa: "این بهترین رستوران شهر است." },
          { de: "Wer läuft am schnellsten?", fa: "چه کسی سریع‌تر می‌دود؟" }
        ]
      },
      {
        type: "text",
        title: "۵. فعل‌های بازگشتی (Reflexive Verben)",
        text: "بعضی افعال در آلمانی با ضمیر بازگشتی (sich) استفاده می‌شوند. sich waschen (خود را شستن)، sich fühlen (احساس کردن)، sich freuen (خوشحال شدن)."
      },
      {
        type: "examples",
        title: "مثال‌های فعل بازگشتی",
        items: [
          { de: "Ich wasche mich jeden Morgen.", fa: "هر صبح خودم را می‌شویم." },
          { de: "Er freut sich über das Geschenk.", fa: "او از هدیه خوشحال می‌شود." },
          { de: "Wir setzen uns an den Tisch.", fa: "ما پشت میز می‌نشینیم." },
          { de: "Ich fühle mich heute gut.", fa: "امروح حالم خوب است." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون جامع A2",
        questions: [
          {
            question: "کدام جمله Perfekt صحیح دارد؟",
            questionDe: "Welcher Satz hat richtiges Perfekt?",
            options: [
              { text: "Ich habe gelernt gestern.", isCorrect: false },
              { text: "Ich habe gestern gelernt.", isCorrect: true },
              { text: "Ich gelernt habe gestern.", isCorrect: false },
              { text: "Gestern ich habe gelernt.", isCorrect: false }
            ],
            explanation: "در Perfekt، Partizip II (gelernt) در آخر جمله قرار می‌گیرد."
          },
          {
            question: "کدام جمله Dativ صحیح دارد؟",
            questionDe: "Welcher Satz hat richtiges Dativ?",
            options: [
              { text: "Ich helfe den Lehrer.", isCorrect: false },
              { text: "Ich helfe dem Lehrer.", isCorrect: true },
              { text: "Ich helfe der Lehrer.", isCorrect: false },
              { text: "Ich helfe das Lehrer.", isCorrect: false }
            ],
            explanation: "helfen با Dativ می‌آید. der Lehrer در Dativ → dem Lehrer."
          },
          {
            question: "کدام حرف ربط فعل را به آخر می‌فرستد؟",
            questionDe: "Welcher Konnektor schickt das Verb ans Ende?",
            options: [
              { text: "deshalb", isCorrect: false },
              { text: "weil", isCorrect: true },
              { text: "trotzdem", isCorrect: false },
              { text: "also", isCorrect: false }
            ],
            explanation: "weil یک Subjunktion است و فعل را به آخر جمله فرعی می‌فرستد."
          },
          {
            question: "مقارنه: برلین بزرگ‌تر از هامبورگ:",
            options: [
              { text: "Berlin ist größer wie Hamburg.", isCorrect: false },
              { text: "Berlin ist größer als Hamburg.", isCorrect: true },
              { text: "Berlin ist am größter als Hamburg.", isCorrect: false },
              { text: "Berlin ist mehr groß als Hamburg.", isCorrect: false }
            ],
            explanation: "در مقارنه از als استفاده می‌شود، نه wie."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمیل جملات مرور A2",
        instruction: "جای خالی را با شکل صحیح پر کنید.",
        blanks: [
          { sentence: "Ich ___ gestern ins Kino ___. (Perfekt: gehen)", answer: "bin, gegangen", hint: "gehen با sein: bin gegangen" },
          { sentence: "Sie ___ dem Lehrer für die Hilfe ___. (Dativ: danken)", answer: "dankt", hint: "danken + Dativ" },
          { sentence: "Es regnet, ___ bleibe ich zu Hause.", answer: "deshalb", hint: "حرف ربط جایگاه ۱: deshalb" },
          { sentence: "Er ist größer ___ sein Bruder. (مقارنه)", answer: "als", hint: "مقارنه: als" },
          { sentence: "Ich ___ mich jeden Morgen. (بازگشتی: waschen)", answer: "wasche", hint: "sich waschen → ich wasche mich" },
          { sentence: "___ es kalt ist, gehe ich spazieren.", answer: "Obwohl", hint: "با وجود اینکه: obwohl" },
          { sentence: "Das Buch ___ mir sehr gut. (Dativ: gefallen)", answer: "gefällt", hint: "gefallen + Dativ" },
          { sentence: "Wer ist der ___ Sportler? (بهترین)", answer: "beste", hint: "Superlativ: der beste" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "مرور واژگان کلیدی A2",
        words: [
          { de: "die Vergangenheit", fa: "گذشته", ipa: "[fɛɐ̯ˈɡaŋənhaɪ̯t]", article: "die", plural: "-", examples: [{ de: "In der Vergangenheit war alles anders.", fa: "در گذشته همه چیز متفاوت بود." }] },
          { de: "die Gegenwart", fa: "حال", ipa: "[ˈɡeːɡənvaʁt]", article: "die", plural: "-", examples: [{ de: "In der Gegenwart lernen wir viel.", fa: "در حال حاضر خیلی یاد می‌گیریم." }] },
          { de: "die Zukunft", fa: "آینده", ipa: "[ˈtsuːkʊnft]", article: "die", plural: "die Zukünfte", examples: [{ de: "Ich plane für die Zukunft.", fa: "برای آینده برنامه‌ریزی می‌کنم." }] },
          { de: "der Vergleich", fa: "مقایسه", ipa: "[fɛɐ̯ˈɡlaɪ̯ç]", article: "der", plural: "die Vergleiche", examples: [{ de: "Im Vergleich zu letztem Jahr bin ich besser.", fa: "در مقایسه با سال گذشته بهتر هستم." }] },
          { de: "die Verbindung", fa: "ارتباط / حرف ربط", ipa: "[fɛɐ̯ˈbɪndʊŋ]", article: "die", plural: "die Verbindungen", examples: [{ de: "Die Konnektoren sind wichtige Verbindungen.", fa: "حروف ربط ارتباطات مهمی هستند." }] },
          { de: "der R\u00fcckblick", fa: "نگاه به گذشته", ipa: "[ˈʁʏkbʁɪk]", article: "der", plural: "die Rückblicke", examples: [{ de: "Ein Rückblick zeigt meinen Fortschritt.", fa: "نگاه به گذشته پیشرفت من را نشان می‌دهد." }] },
          { de: "der Fortschritt", fa: "پیشرفت", ipa: "[ˈfɔʁtʃʁɪt]", article: "der", plural: "die Fortschritte", examples: [{ de: "Ich habe große Fortschritte gemacht.", fa: "پیشرفت بزرگی کرده‌ام." }] },
          { de: "die Prüfung", fa: "امتحان", ipa: "[ˈpʁyːfʊŋ]", article: "die", plural: "die Prüfungen", examples: [{ de: "Die Prüfung war schwer.", fa: "امتحان سخت بود." }] },
          { de: "die Grammatik", fa: "گرامر", ipa: "[ɡʁaˈmatɪk]", article: "die", plural: "die Grammatiken", examples: [{ de: "Die Grammatik ist wichtig.", fa: "گرامر مهم است." }] },
          { de: "der Wortschatz", fa: "واژگان", ipa: "[ˈvɔʁtʃats]", article: "der", plural: "die Wortschätze", examples: [{ de: "Mein Wortschatz ist größer geworden.", fa: "واژگانم بزرگ‌تر شده." }] },
          { de: "die Aussprache", fa: "تلفظ", ipa: "[ˈaʊ̯sʃpʁaxə]", article: "die", plural: "-", examples: [{ de: "Deine Aussprache ist sehr gut.", fa: "تلفظت خیلی خوب است." }] },
          { de: "das Hörverständnis", fa: "مهارت شنیداری", ipa: "[ˈhøːɐ̯fɛɐ̯ˌʃtɛntnɪs]", article: "das", plural: "-", examples: [{ de: "Mein Hörverständnis hat sich verbessert.", fa: "مهارت شنیداری‌ام بهتر شده." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Mein Leben in Deutschland - Ein Rückblick\n\nVor zwei Jahren bin ich nach Deutschland gekommen. Ich konnte damals nur ein bisschen Deutsch sprechen. In der Vergangenheit war alles schwer für mich. Ich musste jeden Tag viel lernen, weil ich die B1-Prüfung bestehen wollte.\nJetzt, nach zwei Jahren, spreche ich viel besser Deutsch. Ich helfe sogar meinen Nachbarn, weil sie kein Deutsch können. Meinem Nachbarn gefällt meine Aussprache, obwohl ich manchmal Fehler mache.\nIm Vergleich zu meinem ersten Jahr bin ich jetzt viel selbstbewusster. Wenn ich Probleme habe, weiß ich, dass ich Hilfe bekommen kann. Deshalb bin ich optimistisch für die Zukunft.\nZusammenfassend kann ich sagen: Das Leben in Deutschland ist nicht einfach, aber es lohnt sich. Ich bin stolz auf meinen Fortschritt.",
      translation: "زندگی من در آلمان - یک نگاه به گذشته\n\nدو سال پیش به آلمان آمدم. آن موقع فقط کمی آلمانی بلد بودم صحبت کنم. در گذشته همه چیز برایم سخت بود. باید هر روز خیلی درس می‌خواندم چون می‌خواستم در امتحان B1 قبول شوم.\nالان، بعد از دو سال، خیلی بهتر آلمانی صحبت می‌کنم. حتی به همسایه‌هایم کمک می‌کنم چون آن‌ها آلمانی بلد نیستند. همسایه‌ام تلفظ مرا دوست دارد، با اینکه گاهی اشتباه می‌کنم.\nدر مقایسه با سال اول الان خیلی مطمئن‌تر شده‌ام. وقتی مشکلی دارم، می‌دانم که می‌توانم کمک بگیرم. به همین دلیل برای آینده خوشبین هستم.\nبه طور خلاصه می‌توانم بگویم: زندگی در آلمان آسان نیست، اما ارزشش را دارد. به پیشرفتم افتخار می‌کنم.",
      questions: [
        { question: "راوی کِی به آلمان آمد؟", answer: "دو سال پیش." },
        { question: "در گذشته چه چیزی برای راوی سخت بود؟", answer: "همه چیز سخت بود و باید هر روز زیاد درس می‌خواند." },
        { question: "راوی الان چه کمکی به همسایه‌هایش می‌کند؟", answer: "او به همسایه‌هایش کمک می‌کند چون آن‌ها آلمانی بلد نیستند." },
        { question: "راوی در مقایسه با سال اول چه تغییری کرده؟", answer: "او الان خیلی مطمئن‌تر (selbstbewusster) شده است." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن یک مرور A2",
      prompt: "یک پاراگراف (۸-۱۰ خط) درباره سفر یادگیری آلمانی خود بنویسید. از Perfekt، Dativ، حروف ربط، مقارنه و فعل بازگشتی استفاده کنید.",
      steps: [
        { title: "گذشته (Perfekt)", text: "از کجا شروع کردید.", example: { de: "Ich habe vor einem Jahr angefangen, Deutsch zu lernen.", fa: "یک سال پیش شروع به یادگیری آلمانی کردم." } },
        { title: "حال و مقارنه", text: "الان کجا هستید.", example: { de: "Jetzt spreche ich viel besser als am Anfang.", fa: "الان خیلی بهتر از ابتدا صحبت می‌کنم." } },
        { title: "آینده و نتیجه", text: "هدف شما.", example: { de: "Ich freue mich auf die Zukunft.", fa: "من از آینده خوشحالم." } }
      ],
      modelAnswer: "Ich habe vor sechs Monaten angefangen, Deutsch zu lernen. In der Vergangenheit war die Grammatik sehr schwer für mich. Ich konnte nicht gut sprechen, aber ich habe jeden Tag geübt. Jetzt, nach sechs Monaten, spreche ich viel besser. Ich helfe meiner Freundin beim Deutschlernen, weil sie auch lernen möchte. Im Vergleich zu anderen Schülern bin ich fleißiger. Wenn ich Schwierigkeiten habe, fühle ich mich nicht schlecht. Zusammenfassend kann ich sagen: Deutschlernen macht mir viel Spaß. Ich freue mich auf die Zukunft!"
    }
  ],

  listening: [
    {
      title: "گوش دادن: مرور جامع A2",
      instruction: "به جملات زیر گوش دهید و تکرار کنید.",
      sentences: [
        { de: "Ich habe gestern viel gelernt.", fa: "دیروز خیلی درس خواندم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich habe gestern viel gelernt" },
        { de: "Obwohl es regnet, gehe ich spazieren.", fa: "با اینکه باران می‌آید، پیاده‌روی می‌روم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Obwohl es regnet, gehe ich spazieren" },
        { de: "Das Buch gefällt mir sehr gut.", fa: "کتاب خیلی خوشم می‌آید.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Das Buch gefällt mir sehr gut" },
        { de: "Ich fühle mich heute besser.", fa: "امروز حالم بهتر است.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich fühle mich heute besser" },
        { de: "Berlin ist größer als München.", fa: "برلین بزرگ‌تر از مونیخ است.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Berlin ist größer als München" }
      ]
    }
  ],

  speaking: [
    {
      title: "مونولوگ: مرور A2",
      pattern: "Früher... Jetzt... In Zukunft...",
      exercise: "۳ دقیقه درباره پیشرفت زبان آلمانی خود صحبت کنید. از Perfekt (گذشته)، Präsens (حال) و Futur (آینده) استفاده کنید."
    },
    {
      title: "بحث: مقایسه گذشته و حال",
      pattern: "In der Vergangenheit... Heute... Im Vergleich zu...",
      exercise: "با یک دوست درباره تغییرات زندگی خود صحبت کنید. از مقارنه و حروف ربط استفاده کنید."
    }
  ],

  cultureTip: "آزمون A2 گوته شامل ۴ بخش خواندن، نوشتن، گوش دادن و صحبت کردن است. برای موفقیت، باید بتوانید درباره موضوعات روزمره (خانواده، خرید، کار، سلامتی) صحبت کنید و جملات ساده اما صحیح بنویسید. تمرین روزانه و مرور منظم بهترین روش آمادگی است.",

  examData: {
    questions: [
      { question: "Ich ___ gestern einen Brief ___. (Perfekt: schreiben)", options: ["habe, geschrieben", "habe, schreiben", "bin, geschrieben", "habe, schreibt"], answer: 0 },
      { question: "کدام فعل با sein صرف می‌شود؟", options: ["spielen", "gehen", "essen", "lesen"], answer: 1 },
      { question: "Ich helfe ___. (به مادرم)", options: ["meine Mutter", "meiner Mutter", "meinem Mutter", "meinen Mutter"], answer: 1 },
      { question: "Es regnet, ___ bleibe ich zu Hause.", options: ["weil", "deshalb", "obwohl", "dass"], answer: 1 },
      { question: "Berlin ist größer ___ Hamburg.", options: ["wie", "als", "denn", "von"], answer: 1 },
      { question: "Ich ___ mich jeden Morgen. (بازگشتی: duschen)", options: ["dusche", "dusche mich", "mich dusche", "duscht"], answer: 1 },
      { question: "___ es kalt ist, gehe ich raus.", options: ["Weil", "Obwohl", "Deshalb", "Also"], answer: 1 },
      { question: "Das Buch ___ mir gut. (خوشم می‌آید)", options: ["gehört", "gefällt", "antwortet", "schmeckt"], answer: 1 },
      { question: "Wer ist der ___ Sportler? (بهترین)", options: ["gut", "besser", "beste", "am besten"], answer: 2 },
      { question: "Ich ___ mich auf die Prüfung. (خوشحالم)", options: ["freue", "fühle", "wasche", "setze"], answer: 0 }
    ]
  }
};
