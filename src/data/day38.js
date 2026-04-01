export const day38Data = {
  title: "روز ۳۸: جملات وابسته پیشرفته (obwohl, bevor, nachdem, als, wenn, seitdem)",
  objective: "یادگیری حروف ربط فرعی پیشرفته و تسلط بر جایگاه فعل در جملات پیچیده",
  level: "B1",

  grammarData: {
    subtitle: "Nebensätze: حروف ربط فرعی و ترتیب کلمات",
    content: [
      {
        type: "text",
        title: "مرور سریع: قانون جایگاه فعل در Nebensatz",
        text: "در جمله‌واره وابسته (Nebensatz)، فعل اصلی همیشه به آخر جمله می‌رود. حرف ربط فرعی (Subjunktion) در ابتداى Nebensatz قرار می‌گیرد و کاما آن را از جمله اصلی جدا می‌کند. نکته مهم B1: اگر جمله با Nebensatz شروع شود، فعل جمله اصلی بلافاصله بعد از کاما در جایگاه ۲ قرار می‌گیرد."
      },
      {
        type: "table",
        title: "حروف ربط فرعی پیشرفته",
        rows: [
          { de: "obwohl", fa: "اگرچه / با وجود اینکه (تضاد)" },
          { de: "bevor", fa: "قبل از اینکه (زمانی)" },
          { de: "nachdem", fa: "بعد از اینکه (زمانی)" },
          { de: "als", fa: "وقتی که (یکبار در گذشته)" },
          { de: "wenn", fa: "وقتی که (عادتی/آینده) / اگر (شرطی)" },
          { de: "seitdem", fa: "از وقتی که / از آن زمان که" },
          { de: "sobald", fa: "به محض اینکه" },
          { de: "solange", fa: "تا زمانی که / مادامی که" },
          { de: "falls", fa: "در صورتی که (شرطی)" },
          { de: "damit", fa: "به طوری که / برای اینکه (هدف)" }
        ]
      },
      {
        type: "text",
        title: "تفاوت als و wenn",
        text: "als برای یک رویداد واحد در گذشته استفاده می‌شود (Ich war 10, als ich nach Deutschland kam). wenn سه کاربرد دارد: ۱) رویداد تکراری در گذشته (Immer wenn es regnete, blieb ich zu Hause)، ۲) رویداد در آینده (Wenn ich Zeit habe, komme ich)، ۳) شرط (Wenn du hilfst, schaffe ich es)."
      },
      {
        type: "text",
        title: "نکته زمانی: nachdem و bevor",
        text: "در nachdem و bevor، زمان فعل در جمله وابسته و جمله اصلی متفاوت است. قانون Plusquamperfekt: اگر در nachdem جمله اصلی Perfekt باشد، جمله وابسته Plusquamperfekt است و بالعکس. مثال: Nachdem ich gegessen hatte, ging ich spazieren."
      },
      {
        type: "examples",
        title: "مثال‌های کاربردی",
        items: [
          { de: "Obwohl es regnet, gehe ich spazieren.", fa: "اگرچه باران می‌بارد، من پیاده‌روی می‌روم." },
          { de: "Bevor du gehst, musst du aufräumen.", fa: "قبل از اینکه بروی، باید مرتب کنی." },
          { de: "Nachdem ich aufgestanden bin, frühstücke ich.", fa: "بعد از اینکه بلند شدم، صبحانه می‌خورم." },
          { de: "Als ich jung war, wohnte ich in Berlin.", fa: "وقتی جوان بودم، در برلین زندگی می‌کردم." },
          { de: "Wenn ich Ferien habe, reise ich gern.", fa: "وقتی تعطیلات دارم، دوست دارم سفر کنم." },
          { de: "Seitdem er Deutsch lernt, versteht er mehr.", fa: "از وقتی آلمانی یاد می‌گیرد، بیشتر می‌فهمد." },
          { de: "Sobald ich zu Hause bin, rufe ich dich an.", fa: "به محض اینکه برسم خانه، بهت زنگ می‌زنم." },
          { de: "Solange du hier bist, bin ich glücklich.", fa: "تا وقتی اینجا هستی، من خوشبختم." }
        ]
      },
      {
        type: "alert",
        title: "قانون طلایی: ترتیب فعل در جملات مرکب",
        text: "اگر جمله با Nebensatz شروع شود، فعل جمله اصلی بلافاصله بعد از کاما در جایگاه ۲ می‌آید. مثال: Obwohl es regnet, gehe ich spazieren. (فعل gehe بعد از کاما در جایگاه ۲). اما اگر جمله اصلی اول بیاید: Ich gehe spazieren, obwohl es regnet. (فعل regnet در آخر Nebensatz)."
      },
      {
        type: "interactive_quiz",
        title: "آزمون جملات وابسته",
        questions: [
          {
            question: "کدام جمله صحیح است؟ «بعد از اینکه غذا خوردم، بیرون رفتم.»",
            questionDe: "Welcher Satz ist grammatikalisch korrekt?",
            options: [
              { text: "Nachdem ich hatte gegessen, ging ich raus.", isCorrect: false },
              { text: "Nachdem ich gegessen hatte, ging ich raus.", isCorrect: true },
              { text: "Nachdem ich gegessen habe, ging ich raus.", isCorrect: false }
            ],
            explanation: "در nachdem اگر جمله اصلی Perfekt/Präteritum باشد، جمله وابسته Plusquamperfekt (hatte + Partizip II) است."
          },
          {
            question: "کدام حرف ربط برای یک رویداد واحد در گذشته استفاده می‌شود؟",
            questionDe: "Welches Wort benutzt man für ein einmaliges Ereignis in der Vergangenheit?",
            options: [
              { text: "wenn", isCorrect: false },
              { text: "als", isCorrect: true },
              { text: "seitdem", isCorrect: false }
            ],
            explanation: "als برای یک رویداد واحد در گذشته استفاده می‌شود. wenn برای عادت یا آینده."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین جملات وابسته",
        instruction: "حرف ربط مناسب را وارد کنید.",
        blanks: [
          { sentence: "_______ ich nach Deutschland kam, konnte ich kein Deutsch.", answer: "Als", hint: "یک رویداد واحد در گذشته" },
          { sentence: "Ich bleibe zu Hause, _______ es regnet.", answer: "obwohl", hint: "تضاد / اگرچه" },
          { sentence: "_______ du kommst, ruf mich bitte an.", answer: "Bevor", hint: "قبل از اینکه" },
          { sentence: "_______ er Deutsch gelernt hat, hat er mehr Freunde gefunden.", answer: "Seitdem", hint: "از وقتی که" },
          { sentence: "_______ ich zu Hause ankomme, koche ich das Abendessen.", answer: "Sobald", hint: "به محض اینکه" },
          { sentence: "_______ ich Ferien hatte, bin ich immer ans Meer gefahren.", answer: "Immer wenn", hint: "هر وقت (تکراری در گذشته)" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "زمان و ترتیب (Zeit und Reihenfolge)",
        words: [
          { de: "gleichzeitig", fa: "همزمان", ipa: "[ˈɡlaɪ̯çtsaɪ̯tɪç]", article: "-", plural: "-", examples: [{ de: "Gleichzeitig arbeitete er und hörte Musik.", fa: "همزمان کار می‌کرد و موسیقی گوش می‌داد." }] },
          { de: "anschließend", fa: "متعاقباً / بعد از آن", ipa: "[ˈanˌʃliːsənt]", article: "-", plural: "-", examples: [{ de: "Anschließend gingen wir nach Hause.", fa: "بعد از آن به خانه رفتیم." }] },
          { de: "zuvor", fa: "پیش از آن", ipa: "[tsuˈfoːɐ̯]", article: "-", plural: "-", examples: [{ de: "Ich hatte ihn zuvor noch nie gesehen.", fa: "قبل از آن هرگز او را ندیده بودم." }] },
          { de: "inzwischen", fa: "در این فاصله / هم‌اکنون", ipa: "[ˈɪntsvɪʃən]", article: "-", plural: "-", examples: [{ de: "Inzwischen hat sich viel verändert.", fa: "در این فاصله خیلی چیزها تغییر کرده." }] },
          { de: "mittlerweile", fa: "در حال حاضر / تا الان", ipa: "[ˈmɪtlɐˌvaɪ̯lə]", article: "-", plural: "-", examples: [{ de: "Mittlerweile spreche ich gut Deutsch.", fa: "تا الان آلمانی خوب صحبت می‌کنم." }] }
        ]
      },
      {
        title: "روابط علّی و شرطی",
        words: [
          { de: "der Grund", fa: "دلیل / علت", ipa: "[ɡʁʊnt]", article: "der", plural: "die Gründe", examples: [{ de: "Es gibt viele Gründe dafür.", fa: "دلیل زیادی برای آن وجود دارد." }] },
          { de: "die Folge", fa: "نتیجه / پیامد", ipa: "[ˈfɔlɡə]", article: "die", plural: "die Folgen", examples: [{ de: "Das hat schwerwiegende Folgen.", fa: "این پیامدهای جدی دارد." }] },
          { de: "trotzdem", fa: "با وجود این", ipa: "[ˈtʁɔt͡sdeːm]", article: "-", plural: "-", examples: [{ de: "Er ist krank, trotzdem arbeitet er.", fa: "مریض است، با وجود این کار می‌کند." }] },
          { de: "dennoch", fa: "با این وجود", ipa: "[ˈdɛnɔx]", article: "-", plural: "-", examples: [{ de: "Es war kalt, dennoch gingen wir schwimmen.", fa: "سرد بود، با این وجود رفتیم شنا." }] },
          { de: "zwar ..., aber ...", fa: "البته ... ولی ...", ipa: "[tsvaːɐ̯]", article: "-", plural: "-", examples: [{ de: "Zwar ist es teuer, aber sehr gut.", fa: "البته گران است ولی خیلی خوب." }] },
          { de: "andernfalls", fa: "در غیر این صورت", ipa: "[ˈandɐnˌfals]", article: "-", plural: "-", examples: [{ de: "Beeil dich, andernfalls kommen wir zu spät.", fa: "عجله کن، در غیر این صورت دیر می‌رسیم." }] },
          { de: "vorausgesetzt", fa: "به شرط آنکه", ipa: "[foˈʁaʊ̯sɡəzɛtst]", article: "-", plural: "-", examples: [{ de: "Vorausgesetzt, du hilfst mir.", fa: "به شرط آنکه کمکم کنی." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein besonderer Tag in meinem Leben\n\nAls ich 18 Jahre alt war, habe ich eine wichtige Entscheidung getroffen. Nachdem ich mein Abitur bestanden hatte, wollte ich sofort ins Ausland gehen. Meine Eltern waren zuerst besorgt, weil ich noch so jung war. Obwohl sie Angst hatten, haben sie mich unterstützt.\nSeitdem ich in Wien studiere, hat sich mein Leben komplett verändert. Bevor ich hierherkam, hatte ich noch nie allein gelebt. Sobald ich meine erste Wohnung bezogen hatte, fühlte ich mich erwachsen. Solange ich in der Schule war, hatte meine Mutter immer für mich gekocht. Jetzt musste ich alles selbst machen.\nInzwischen bin ich seit drei Jahren hier. Mittlerweile spreche ich fließend Deutsch und habe viele Freunde gefunden.",
      translation: "یک روز خاص در زندگی من\n\nوقتی ۱۸ ساله بودم، تصمیم مهمی گرفتم. بعد از اینکه آبیتور را قبول شدم، می‌خواستم فوراً به خارج بروم. والدینم اول نگران بودند چون هنوز خیلی جوان بودم. اگرچه ترس داشتند، از من حمایت کردند.\nاز وقتی در وین تحصیل می‌کنم، زندگی‌ام کاملاً تغییر کرده. قبل از اینکه به اینجا بیایم، هرگز تنها زندگی نکرده بودم. به محض اینکه اولین آپارتمانم را گرفتم، احساس بزرگی کردم. تا وقتی در مدرسه بودم، مادرم همیشه برایم آشپزی می‌کرد. حالا باید همه چیز را خودم انجام می‌دادم.\nدر حال حاضر سه سال است اینجا هستم. تا الان روان آلمانی صحبت می‌کنم و دوستان زیادی پیدا کرده‌ام.",
      questions: [
        { question: "نویسنده چند سالش بود که تصمیم مهمی گرفت؟", answer: "۱۸ ساله بود." },
        { question: "والدینش چه واکنشی نشان دادند؟", answer: "اول نگران بودند اما از او حمایت کردند." },
        { question: "قبل از رفتن به وین چه تجربه‌ای نداشت؟", answer: "هرگز تنها زندگی نکرده بود." },
        { question: "اگر سال آینده شغل خوبی پیدا نکند چه کاری می‌کند؟", answer: "به خانه برمی‌گردد." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن روایت زندگی",
      prompt: "یک متن ۸-۱۰ خطی درباره یک روز مهم یا تصمیم مهم زندگیتان بنویسید. از als, nachdem, bevor, seitdem, obwohl استفاده کنید.",
      steps: [
        { title: "شروع روایت با als", text: "Als + زمان در گذشته", example: { de: "Als ich 20 Jahre alt war, zog ich nach München.", fa: "وقتی ۲۰ ساله بودم، به مونیخ نقل مکان کردم." } },
        { title: "توضیح ترتیب وقایع", text: "از nachdem و bevor استفاده کنید", example: { de: "Nachdem ich die Wohnung gefunden hatte, suchte ich einen Job.", fa: "بعد از اینکه آپارتمان را پیدا کردم، دنبال شغل گشتم." } },
        { title: "نتیجه فعلی با seitdem", text: "از وقتی که...", example: { de: "Seitdem lebe ich hier und bin glücklich.", fa: "از آن زمان اینجا زندگی می‌کنم و خوشبختم." } }
      ],
      modelAnswer: "Als ich 22 Jahre alt war, habe ich eine schwierige Entscheidung getroffen. Nachdem ich mein Studium abgeschlossen hatte, wollte ich ins Ausland gehen. Meine Eltern waren dagegen, aber obwohl sie traurig waren, haben sie mich unterstützt. Bevor ich nach Deutschland flog, hatte ich noch nie allein gelebt. Sobald ich in Frankfurt ankam, suchte ich eine Wohnung. Seitdem ich hier lebe, hat sich mein Leben stark verändert. Mittlerweile spreche ich gut Deutsch und habe einen festen Job."
    }
  ],

  listening: [
    {
      title: "جملات پیچیده در مکالمه",
      instruction: "به جملات زیر گوش دهید و تکرار کنید.",
      sentences: [
        { de: "Obwohl es regnet, gehe ich spazieren.", fa: "اگرچه باران می‌آید، پیاده‌روی می‌روم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Obwohl es regnet, gehe ich spazieren" },
        { de: "Nachdem ich gegessen hatte, ging ich schlafen.", fa: "بعد از اینکه غذا خوردم، خوابیدم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Nachdem ich gegessen hatte, ging ich schlafen" },
        { de: "Seitdem er hier lebt, ist er glücklicher.", fa: "از وقتی اینجا زندگی می‌کند، خوشحال‌تر است.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Seitdem er hier lebt, ist er glücklicher" },
        { de: "Sobald ich zu Hause bin, rufe ich dich an.", fa: "به محض اینکه برسم خانه، بهت زنگ می‌زنم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Sobald ich zu Hause bin, rufe ich dich an" },
        { de: "Bevor du gehst, musst du aufräumen.", fa: "قبل از اینکه بری، باید مرتب کنی.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Bevor du gehst, musst du aufräumen" }
      ]
    }
  ],

  speaking: [
    {
      title: "توصیف روال صبحگاهی",
      pattern: "Nachdem ich ... habe, ... / Bevor ich ..., ... / Seitdem ich ...",
      exercise: "روال صبحگاهی خود را با استفاده از nachdem, bevor و seitdem توصیف کنید. هر جمله حداقل یک Nebensatz داشته باشد."
    }
  ],

  cultureTip: "در زبان آلمانی، جملات پیچیده با چند Nebensatz نشاندهنده سطح بالای زبانی است. آلمانی‌ها در نوشتن و صحبت‌های رسمی از جملات بلند و پیچیده استفاده می‌کنند. یکی از ویژگی‌های معروف زبان آلمانی، فعل آخ (Satzklammer) است که شنونده باید تا آخر جمله صبر کند تا بفهمد فعل چیست.",

  examData: {
    questions: [
      { question: "کدام جمله صحیح است؟ «وقتی جوان بودم در برلین زندگی می‌کردم.»", options: ["Wenn ich jung war, lebte ich in Berlin.", "Als ich jung war, lebte ich in Berlin.", "Seitdem ich jung war, lebte ich in Berlin.", "Obwohl ich jung war, lebte ich in Berlin."], answer: 1 },
      { question: "در Nebensatz فعل کجا قرار می‌گیرد؟", options: ["جایگاه ۱", "جایگاه ۲", "آخر جمله", "بعد از فاعل"], answer: 2 },
      { question: "«Obwohl es regnet, _______ ich spazieren.»", options: ["gehe", "ich gehe", "gehe ich", "ich"], answer: 2 },
      { question: "برای یک رویداد تکراری در گذشته از کدام استفاده می‌شود؟", options: ["als", "wenn", "seitdem", "nachdem"], answer: 1 },
      { question: "«Nachdem ich _______ hatte, ging ich schlafen.»", options: ["essen", "gegessen", "habe gegessen", "esse"], answer: 1 },
      { question: "کدام حرف ربط معنی «از وقتی که» دارد؟", options: ["bevor", "sobald", "seitdem", "obwohl"], answer: 2 },
      { question: "«_______ du kommst, ruf mich bitte an.» (به محض اینکه)", options: ["Obwohl", "Sobald", "Bevor", "Nachdem"], answer: 1 },
      { question: "«Ich bleibe zu Hause, _______ ich krank bin.» (اگرچه)", options: ["weil", "obwohl", "dass", "damit"], answer: 1 }
    ]
  }
};
