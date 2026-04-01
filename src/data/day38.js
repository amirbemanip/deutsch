export const day38Data = {
  title: "روز ۳۸: جم'ه‌واره‌های وابسته پیشرفته",
  objective: "یادگیری حروف ربط فرعی پیشرفته (obwohl, bevor, nachdem, als, wenn, seitdem) و تس'ط بر جایگاه فع' در جم'ات پیچیده",

  grammarData: {
    subtitle: "Nebensätze: حروف ربط فرعی و ترتیب ک'مات",
    content: [
      {
        type: "text",
        title: "۱. مرور سریع: قانون جایگاه فع' در Nebensatz",
        text: "در جم'ه‌واره وابسته (Nebensatz)، فع' اص'ی همیشه به آخر جم'ه می‌رود. حرف ربط فرعی (Subjunktion) در ابتدای Nebensatz قرار می‌گیرد و کاما آن را از جم'ه اص'ی جدا می‌کند. نکته مهم B1: اگر جم'ه با Nebensatz شروع شود، فع' جم'ه اص'ی ب'افاص'ه بعد از کاما در جایگاه ۲ قرار می‌گیرد."
      },
      {
        type: "table",
        title: "حروف ربط فرعی پیشرفته",
        rows: [
          { de: "obwohl", fa: "اگرچه / با وجود اینکه (تضاድ)" },
          { de: "bevor", fa: "قب' از اینکه (زمانی)" },
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
        title: "۲. تفاوت als و wenn",
        text: "als برای یک رویداد واحد در گذشته استفاده می‌شود (Ich war 10, als ich nach Deutschland kam). wenn سه کاربرد دارد: ۱) رویداد تکراری در گذشته (Immer wenn es regnete, blieb ich zu Hause)، ۲) رویداد در آینده (Wenn ich Zeit habe, komme ich)، ۳) شرط (Wenn du hilfst, schaffe ich es)."
      },
      {
        type: "text",
        title: "۳. نکته زمانی: nachdem و bevor",
        text: "در nachdem و bevor، زمان فع' در جم'ه وابسته و جم'ه اص'ی متفاوت است. قانون Plusquamperfekt: اگر در nachdem جم'ه اص'ی Perfekt باشد، جم'ه وابسته Plusquamperfekt است و با'عکس. مثا': Nachdem ich gegessen hatte, ging ich spazieren."
      },
      {
        type: "examples",
        title: "مثا'‌های کاربردی",
        items: [
          { de: "Obwohl es regnet, gehe ich spazieren.", fa: "اگرچه باران می‌بارد، من به پیاده‌روی می‌روم." },
          { de: "Bevor du gehst, musst du aufräumen.", fa: "قب' از اینکه بروی، باید مرتب کنی." },
          { de: "Nachdem ich aufgestanden bin, frühstücke ich.", fa: "بعد از اینکه ب'ند شدم، صبحانه می‌خورم." },
          { de: "Als ich jung war, wohnte ich in Berlin.", fa: "وقتی جوان بودم، در بر'ین زندگی می‌کردم." },
          { de: "Wenn ich Ferien habe, reise ich gern.", fa: "وقتی تعطی'ات دارم، دوست دارم سفر کنم." },
          { de: "Seitdem er Deutsch lernt, versteht er mehr.", fa: "از وقتی آ'مانی یاد می‌گیرد، بیشتر می‌فهمد." },
          { de: "Sobald ich zu Hause bin, rufe ich dich an.", fa: "به محض اینکه برسم خانه، بهت زنگ می‌زنم." },
          { de: "Solange du hier bist, bin ich glücklich.", fa: "تا وقتی اینجا هستی، من خوشبختم." }
        ]
      },
      {
        type: "alert",
        title: "قانون ط'ایی: ترتیب فع' در جم'ات مرکب",
        text: "اگر جم'ه با Nebensatz شروع شود، فع' جم'ه اص'ی ب'افاص'ه بعد از کاما در جایگاه ۲ می‌آید. مثا': Obwohl es regnet, gehe ich spazieren. (فع' gehe بعد از کاما در جایگاه ۲). اما اگر جم'ه اص'ی او' بیاید: Ich gehe spazieren, obwohl es regnet. (فع' regnet در آخر Nebensatz)."
      },
      {
        type: "interactive_quiz",
        title: "آزمون جم'ه‌واره‌های وابسته",
        questions: [
          {
            question: "کدام جم'ه صحیح است؟ «بعد از اینکه غذا خوردم، بیرون رفتم.»",
            questionDe: "Welcher Satz ist grammatikalisch korrekt?",
            options: [
              { text: "Nachdem ich hatte gegessen, ging ich raus.", isCorrect: false },
              { text: "Nachdem ich gegessen hatte, ging ich raus.", isCorrect: true },
              { text: "Nachdem ich gegessen habe, ging ich raus.", isCorrect: false }
            ],
            explanation: "در nachdem اگر جم'ه اص'ی Perfekt/Präteritum باشد، جم'ه وابسته Plusquamperfekt (hatte + Partizip II) است."
          },
          {
            question: "کدام حرف ربط برای یک رویداد واحد در گذشته استفاده می‌شود؟",
            questionDe: "Welches Wort benutzt man für ein einmaliges Ereignis in der Vergangenheit?",
            options: [
              { text: "wenn", isCorrect: false },
              { text: "als", isCorrect: true },
              { text: "seitdem", isCorrect: false }
            ],
            explanation: "als برای یک رویداد واحد در گذشته استفاده می‌شود. wenn برای عادات یا آینده."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین جم'ه‌واره‌های وابسته",
        instruction: "حروف ربط مناسب را وارد کنید.",
        blanks: [
          { sentence: "_______ ich nach Deutschland kam, konnte ich kein Deutsch.", answer: "Als", hint: "یک رویداد واحد در گذشته" },
          { sentence: "Ich bleibe zu Hause, _______ es regnet.", answer: "obwohl", hint: "تضاّد / اگرچه" },
          { sentence: "_______ du kommst, ruf mich bitte an.", answer: "Bevor", hint: "قب' از اینکه" },
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
          { de: "gleichzeitig", fa: "همزمان", article: "-", plural: "-", examples: [{ de: "Gleichzeitig arbeitete er und hörte Musik.", fa: "همزمان کار می‌کرد و موسیقی گوش می‌داد." }] },
          { de: "anschließend", fa: "متعاقباً / بعد از آن", article: "-", plural: "-", examples: [{ de: "Anschließend gingen wir nach Hause.", fa: "بعد از آن به خانه رفتیم." }] },
          { de: "zuvor", fa: "پیش از آن", article: "-", plural: "-", examples: [{ de: "Ich hatte ihn zuvor noch nie gesehen.", fa: "قب' از آن هرگز او را ندیده بودم." }] },
          { de: "inzwischen", fa: "در این فاص'ه / هم‌اکنون", article: "-", plural: "-", examples: [{ de: "Inzwischen hat sich viel verändert.", fa: "در این فاص'ه خی'ی چیزها تغییر کرده." }] },
          { de: "mittlerweile", fa: "در حا' حاضر / تا ا'ان", article: "-", plural: "-", examples: [{ de: "Mittlerweile spreche ich gut Deutsch.", fa: "تا ا'ان آ'مانی خوب صحبت می‌کنم." }] }
        ]
      },
      {
        title: "روابط ع'ّی و شرطی (Kausal und konditional)",
        words: [
          { de: "der Grund", fa: "د'ی' / ع'ت", article: "der", plural: "die Gründe", examples: [{ de: "Es gibt viele Gründe dafür.", fa: "د'ای' زیادی برای آن وجود دارد." }] },
          { de: "die Ursache", fa: "ع'ت / سبب", article: "die", plural: "die Ursachen", examples: [{ de: "Die Ursache des Problems ist unklar.", fa: "ع'ت مشک' نامشخص است." }] },
          { de: "die Folge", fa: "نتیجه / پیامد", article: "die", plural: "die Folgen", examples: [{ de: "Das hat schwerwiegende Folgen.", fa: "این پیامدهای جدی دارد." }] },
          { de: "daraufhin", fa: "بدنبا' آن / پس از آن", article: "-", plural: "-", examples: [{ de: "Daraufhin verließ er den Raum.", fa: "بدنبا' آن اتاق را ترک کرد." }] },
          { de: "infolgedessen", fa: "در نتیجه", article: "-", plural: "-", examples: [{ de: "Er hat nicht gelernt, infolgedessen hat er bestanden.", fa: "درس نخواند، در نتیجه مردود شد." }] },
          { de: "demzufolge", fa: "بر این اساس / بنابراین", article: "-", plural: "-", examples: [{ de: "Demzufolge müssen wir warten.", fa: "بر این اساس باید صبر کنیم." }] },
          { de: "zumindest", fa: "حداق'", article: "-", plural: "-", examples: [{ de: "Zumindest habe ich es versucht.", fa: "حداق' ت'اش کردم." }] },
          { de: "höchstens", fa: "حداکثر", article: "-", plural: "-", examples: [{ de: "Das dauert höchstens zwei Stunden.", fa: "حداکثر دو ساعت طو' می‌کشد." }] },
          { de: "vorausgesetzt", fa: "به شرط آنکه", article: "-", plural: "-", examples: [{ de: "Vorausgesetzt, du hilfst mir.", fa: "به شرط آنکه کمکم کنی." }] },
          { de: "andernfalls", fa: "در غیر این صورت", article: "-", plural: "-", examples: [{ de: "Beeil dich, andernfalls kommen wir zu spät.", fa: "عج'ه کن، در غیر این صورت دیر می‌رسیم." }] },
          { de: "im Gegensatz zu", fa: "برخ'اف / در مقایسه با", article: "-", plural: "-", examples: [{ de: "Im Gegensatz zu ihm spreche ich Deutsch.", fa: "برخ'اف او من آ'مانی صحبت می‌کنم." }] },
          { de: "dementsprechend", fa: "مطابق آن / به همین ترتیب", article: "-", plural: "-", examples: [{ de: "Er hat viel gelernt und dementsprechend gut bestanden.", fa: "خی'ی درس خواند و مطابق آن قبو' شد." }] },
          { de: "beziehungsweise (bzw.)", fa: "به عبارت دیگر / یا", article: "-", plural: "-", examples: [{ de: "Er kommt morgen, beziehungsweise übermorgen.", fa: "او فردا می‌آید، یا پس‌فردا." }] },
          { de: "sofern", fa: "به شرطی که", article: "-", plural: "-", examples: [{ de: "Sofern das Wetter gut ist, machen wir einen Ausflug.", fa: "به شرطی که هوا خوب باشد، گردش می‌رویم." }] },
          { de: "dennoch", fa: "با این وجود", article: "-", plural: "-", examples: [{ de: "Es war kalt, dennoch gingen wir schwimmen.", fa: "سرد بود، با این وجود رفتیم شنا." }] },
          { de: "trotzdem", fa: "با وجود این", article: "-", plural: "-", examples: [{ de: "Er ist krank, trotzdem arbeitet er.", fa: "مریض است، با وجود این کار می‌کند." }] },
          { de: "zwar ..., aber ...", fa: "ا'بته ... و'ی ...", article: "-", plural: "-", examples: [{ de: "Zwar ist es teuer, aber sehr gut.", fa: "ا'بته گران است و'ی خی'ی خوب." }] },
          { de: "keinesfalls", fa: "به هیچ وجه", article: "-", plural: "-", examples: [{ de: "Das darfst du keinesfalls machen.", fa: "به هیچ وجه نباید این کار را بکنی." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein besonderer Tag in meinem Leben\n\nAls ich 18 Jahre alt war, habe ich eine wichtige Entscheidung getroffen. Nachdem ich mein Abitur bestanden hatte, wollte ich sofort ins Ausland gehen. Meine Eltern waren zuerst besorgt, weil ich noch so jung war. Obwohl sie Angst hatten, haben sie mich unterstützt.\nSeitdem ich in Wien studiere, hat sich mein Leben komplett verändert. Bevor ich hierherkam, hatte ich noch nie allein gelebt. Sobald ich meine erste Wohnung bezogen hatte, fühlte ich mich erwachsen. Solange ich in der Schule war, hatte meine Mutter immer für mich gekocht. Jetzt musste ich alles selbst machen.\nInzwischen bin ich seit drei Jahren hier. Mittlerweile spreche ich fließend Deutsch und habe viele Freunde gefunden. Falls ich nächstes Jahr einen guten Job finde, werde ich bleiben. Andernfalls werde ich zurück nach Hause fahren.",
      questions: [
        { question: "نویسنده چند سا'ش بود که تصمیم مهمی گرفت؟", answer: "۱۸ سا'ه بود." },
        { question: "وا'دینش چه واکنشی نشان دادند؟", answer: "او' نگران بودند اما از او حمایت کردند." },
        { question: "قب' از رفتن به وین چه تجربه‌ای نداشت؟", answer: "هرگز تنها زندگی نکرده بود." },
        { question: "اگر سا' آینده شغ' خوبی پیدا نکند چه کاری می‌کند؟", answer: "به خانه برمی‌گردد." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن روایت زندگی",
      prompt: "یک متن ۸-۱۰ خطی درباره یک روز مهم یا تصمیم مهم زندگیتان بنویسید. از als, nachdem, bevor, seitdem, obwohl استفاده کنید.",
      steps: [
        {
          title: "شروع روایت با als",
          text: "Als + زمان در گذشته",
          example: { de: "Als ich 20 Jahre alt war, zog ich nach München.", fa: "وقتی ۲۰ سا'ه بودم، به مونیخ نق' مکان کردم." }
        },
        {
          title: "توضیح ترتیب وقایع",
          text: "از nachdem و bevor استفاده کنید",
          example: { de: "Nachdem ich die Wohnung gefunden hatte, suchte ich einen Job.", fa: "بعد از اینکه آپارتمان را پیدا کردم، دنبا' شغ' گشتم." }
        },
        {
          title: "نتیجه فع'ی با seitdem",
          text: "از وقتی که...",
          example: { de: "Seitdem lebe ich hier und bin glücklich.", fa: "از آن زمان اینجا زندگی می‌کنم و خوشبختم." }
        }
      ],
      modelAnswer: "Als ich 22 Jahre alt war, habe ich eine schwierige Entscheidung getroffen. Nachdem ich mein Studium abgeschlossen hatte, wollte ich ins Ausland gehen. Meine Eltern waren dagegen, aber obwohl sie traurig waren, haben sie mich unterstützt. Bevor ich nach Deutschland flog, hatte ich noch nie allein gelebt. Sobald ich in Frankfurt ankam, suchte ich eine Wohnung. Es war schwer, aber nachdem ich drei Wochen gesucht hatte, fand ich ein kleines Zimmer. Seitdem ich hier lebe, hat sich mein Leben stark verändert. Mittlerweile spreche ich gut Deutsch und habe einen festen Job. Falls alles gut geht, möchte ich noch zwei Jahre bleiben."
    }
  ],

  listening: [
    {
      title: "جم'ات پیچیده در مکا'مه",
      source: "Deutsche Grammatik - Nebensätze",
      link: "https://www.youtube.com/watch?v=QfwvHcVBVBU",
      instructions: "به حروف ربط فرعی در ویدیو دقت کنید. هر بار می‌شنوید obwohl, bevor, nachdem, seitdem, sobald... یادداشت کنید و توجه کنید فع' در آخر جم'ه می‌آید."
    }
  ],

  speaking: [
    {
      title: "توصیف روا' روزانه",
      pattern: "Nachdem ich ... habe, ... / Bevor ich ..., ... / Seitdem ich ...",
      exercise: "روا' صبحگاهی خود را با استفاده از nachdem, bevor و seitdem توصیف کنید. هر جم'ه حداق' یک Nebensatz داشته باشد."
    }
  ],

  cultureTip: "در زبان آ'مانی، جم'ات پیچیده با چند Nebensatz نشانه سطح با'ای زبانی است. آ'مانی‌ها در نوشتن و صحبت‌های رسمی از جم'ات ب'ند و پیچیده استفاده می‌کنند. یکی از ویژگی‌های معروف زبان آ'مانی، فع' آخر (Satzklammer) است که شنونده باید تا آخر جم'ه صبر کند تا بفهمد فع' چیست. این ویژگی در مقایسه با انگ'یسی و فارسی بسیار متفاوت است.",

  examData: {
    questions: [
      { question: "کدام جم'ه صحیح است؟ «وقتی جوان بودم در بر'ین زندگی می‌کردم.»", options: ["Wenn ich jung war, lebte ich in Berlin.", "Als ich jung war, lebte ich in Berlin.", "Wenn ich jung war, lebte ich in Berlin.", "Seitdem ich jung war, lebte ich in Berlin."], answer: 1 },
      { question: "در Nebensatz فع' کجا قرار می‌گیرد؟", options: ["جایگاه ۱", "جایگاه ۲", "آخر جم'ه", "بعد از فاع'"], answer: 2 },
      { question: "«Obwohl es regnet, _______ ich spazieren.»", options: ["gehe", "ich gehe", "gehe ich", "ich"], answer: 2 },
      { question: "برای یک رویداد تکراری در گذشته از کدام استفاده می‌شود؟", options: ["als", "wenn", "seitdem", "nachdem"], answer: 1 },
      { question: "«Nachdem ich _______ hatte, ging ich schlafen.»", options: ["essen", "gegessen", "habe gegessen", "esse"], answer: 1 },
      { question: "کدام حرف ربط معنای «از وقتی که» دارد؟", options: ["bevor", "sobald", "seitdem", "obwohl"], answer: 2 },
      { question: "«_______ du kommst, ruf mich bitte an.» (به محض اینکه)", options: ["Obwohl", "Sobald", "Bevor", "Nachdem"], answer: 1 },
      { question: "«Ich bleibe zu Hause, _______ ich krank bin.» (اگرچه)", options: ["weil", "obwohl", "dass", "damit"], answer: 1 }
    ]
  }
};
