export const day39Data = {
  title: "روز ۳۹: گفتار غیرمستقیم (Indirekte Rede)",
  objective: "یادگیری نقل قول غیرمستقیم در زبان آلمانی با dass و Konjunktiv I",
  level: "B1",

  grammarData: {
    subtitle: "Indirekte Rede: نقل قول آنچه دیگران گفته‌اند",
    content: [
      {
        type: "text",
        title: "Indirekte Rede چیست؟",
        text: "وقتی می‌خواهیم حرف کسی را بدون نقل مستقیم بیان کنیم، از گفتار غیرمستقیم استفاده می‌کنیم. دو روش وجود دارد: روش ساده با dass (که + جمله عادی) و روش رسمی با Konjunktiv I. در سطح B1، روش dass رایج‌تر و آسان‌تر است."
      },
      {
        type: "table",
        title: "افعال گزارش‌دهنده (Verba dicendi)",
        rows: [
          { de: "sagen (dass)", fa: "گفتن: Er sagt, dass er müde ist." },
          { de: "meinen", fa: "نظر دادن: Er meint, dass das falsch ist." },
          { de: "behaupten", fa: "ادعا کردن: Sie behauptet, dass sie krank ist." },
          { de: "erklären", fa: "توضیح دادن: Er erklärt, dass es einfach ist." },
          { de: "berichten", fa: "گزارش دادن: Sie berichtet, dass alles gut ist." },
          { de: "fragen, ob", fa: "پرسیدن آیا: Er fragt, ob ich komme." },
          { de: "antworten, dass", fa: "جواب دادن: Sie antwortet, dass sie kommt." },
          { de: "mitteilen, dass", fa: "اطلاع دادن: Er teilt mit, dass er verreist." }
        ]
      },
      {
        type: "text",
        title: "ساختار با dass",
        text: "بعد از فعل گزارش‌دهنده + dass، جمله وابسته با فعل در آخر می‌آید. زمان فعل حفظ می‌شود (Present → Present، Perfekt → Perfekt). نکته مهم: اگر فاعل جمله نقل‌قولی عوض شود، ضمیرها هم عوض می‌شوند. مثال: Er sagt: «Ich bin müde.» → Er sagt, dass er müde ist."
      },
      {
        type: "text",
        title: "Konjunktiv I (معرفی مختصر)",
        text: "در روزنامه‌ها و اخبار، از Konjunktiv I برای نقل قول غیرمستقیم استفاده می‌شود: Er sagt, er sei müde (او می‌گوید خسته است). شکل Konjunktiv I: sei (für sein), habe (für haben), gehe, komme, mache... اما در مکالمه روزمره، روش dass بسیار رایج‌تر است."
      },
      {
        type: "examples",
        title: "مثال‌های نقل قول غیرمستقیم",
        items: [
          { de: "Direkt: «Ich habe Hunger.» → Indirekt: Er sagt, dass er Hunger hat.", fa: "مستقیم: «گرسنه‌ام.» → غیرمستقیم: او می‌گوید که گرسنه است." },
          { de: "Direkt: «Ich komme morgen.» → Indirekt: Sie sagt, dass sie morgen kommt.", fa: "مستقیم: «فردا می‌آیم.» → غیرمستقیم: او می‌گوید که فردا می‌آید." },
          { de: "Direkt: «Hast du Zeit?» → Er fragt, ob ich Zeit habe.", fa: "مستقیم: «وقت داری؟» → او می‌پرسد آیا وقت دارم." },
          { de: "Die Polizei berichtet, dass der Mann verschwunden ist.", fa: "پلیس گزارش می‌دهد که مرد ناپدید شده است." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم: تغییر ضمیرها",
        text: "وقتی نقل قول می‌کنید، ضمیرها باید تغییر کنند. اگر شخص اول (ich) صحبت کرده، وقتی شما نقل می‌کنید باید به او/آن‌ها تغییر دهید. مثال: Er sagt: «Ich bin müde.» → Er sagt, dass ER müde ist. (نه dass ICH müde bin). این رایج‌ترین اشتباه زبان‌آموزان است."
      },
      {
        type: "interactive_quiz",
        title: "آزمون Indirekte Rede",
        questions: [
          {
            question: "نقل قول غیرمستقیم: Er sagt: «Ich komme morgen.» → Er sagt, dass ...",
            questionDe: "Wie lautet der indirekte Satz?",
            options: [
              { text: "er kommt morgen.", isCorrect: false },
              { text: "er morgen kommt.", isCorrect: true },
              { text: "er morgen komme.", isCorrect: false }
            ],
            explanation: "با dass فعل در آخر جمله می‌آید. ضمیر ich به er تغییر می‌کند."
          },
          {
            question: "برای سؤال غیرمستقیم از چه کلمه‌ای استفاده می‌شود؟",
            questionDe: "Welches Wort benutzt man für indirekte Fragen?",
            options: [
              { text: "dass", isCorrect: false },
              { text: "ob", isCorrect: true },
              { text: "wenn", isCorrect: false }
            ],
            explanation: "برای سؤال بله/خیر غیرمستقیم از ob استفاده می‌شود: Er fragt, ob ich komme."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین Indirekte Rede",
        instruction: "جملات مستقیم را به غیرمستقیم تبدیل کنید.",
        blanks: [
          { sentence: "Er sagt: «Ich bin krank.» → Er sagt, dass er krank _______.", answer: "ist", hint: "ضمیر ich → er، فعل ist" },
          { sentence: "Sie sagt: «Ich habe keine Zeit.» → Sie sagt, dass sie keine Zeit _______.", answer: "hat", hint: "ضمیر ich → sie، فعل hat" },
          { sentence: "Er fragt: «Kommst du morgen?» → Er fragt, _______ ich morgen komme.", answer: "ob", hint: "سؤال غیرمستقیم → ob" },
          { sentence: "Sie sagt: «Ich war in Berlin.» → Sie sagt, dass sie in Berlin _______.", answer: "war", hint: "زمان گذشته حفظ می‌شود" },
          { sentence: "Er meint: «Das ist falsch.» → Er meint, dass das falsch _______.", answer: "ist", hint: "فعل ist در آخر" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "گفتار و ارتباط (Sprechen und Kommunikation)",
        words: [
          { de: "die Aussage", fa: "اظهار / بیان", ipa: "[ˈaʊ̯szaːɡə]", article: "die", plural: "die Aussagen", examples: [{ de: "Die Aussage des Zeugen war wichtig.", fa: "اظهار شاهد مهم بود." }] },
          { de: "die Meinung", fa: "نظر / عقیده", ipa: "[ˈmaɪ̯nʊŋ]", article: "die", plural: "die Meinungen", examples: [{ de: "Meiner Meinung nach ist das richtig.", fa: "به نظر من این درست است." }] },
          { de: "behaupten", fa: "ادعا کردن", ipa: "[bəˈhaɪ̯tn̩]", article: "-", plural: "-", conjugation: { ich: "behaupte", du: "behauptest", er: "behauptet", wir: "behaupten", ihr: "behauptet", sie: "behaupten" }, examples: [{ de: "Er behauptet, dass er unschuldig ist.", fa: "او ادعا می‌کند که بی‌گناه است." }] },
          { de: "bestätigen", fa: "تأیید کردن", ipa: "[bəˈʃtɛːtɪɡn̩]", article: "-", plural: "-", conjugation: { ich: "bestätige", du: "bestätigst", er: "bestätigt", wir: "bestätigen", ihr: "bestätigt", sie: "bestätigen" }, examples: [{ de: "Die Polizei bestätigt, dass der Mann gefunden wurde.", fa: "پلیس تأیید می‌کند که مرد پیدا شده." }] },
          { de: "bezweifeln", fa: "شک کردن / تردید داشتن", ipa: "[bəˈtsvaɪ̯fl̩n]", article: "-", plural: "-", conjugation: { ich: "bezweifle", du: "bezweifelst", er: "bezweifelt", wir: "bezweifeln", ihr: "bezweifelt", sie: "bezweifeln" }, examples: [{ de: "Ich bezweifle, dass er die Wahrheit sagt.", fa: "شک دارم که حقیقت را بگوید." }] }
        ]
      },
      {
        title: "رسانه و خبر (Medien und Nachrichten)",
        words: [
          { de: "der Bericht", fa: "گزارش", ipa: "[bəˈʁɪçt]", article: "der", plural: "die Berichte", examples: [{ de: "Der Bericht zeigt, dass die Zahlen steigen.", fa: "گزارش نشان می‌دهد که اعداد بالا می‌روند." }] },
          { de: "die Nachricht", fa: "خبر", ipa: "[ˈnaːxʁɪçt]", article: "die", plural: "die Nachrichten", examples: [{ de: "Die Nachrichten berichten, dass es regnen wird.", fa: "اخبار گزارش می‌دهند که باران خواهد آمد." }] },
          { de: "das Interview", fa: "مصاحبه", ipa: "[ˈɪntɐvjuː]", article: "das", plural: "die Interviews", examples: [{ de: "Im Interview sagt er, dass er zufrieden ist.", fa: "در مصاحبه می‌گوید که راضی است." }] },
          { de: "der Zeuge", fa: "شاهد", ipa: "[ˈtsɔɪ̯ɡə]", article: "der", plural: "die Zeugen", examples: [{ de: "Der Zeuge sagt, dass er nichts gesehen hat.", fa: "شاهد می‌گوید که چیزی ندیده." }] },
          { de: "der Journalist", fa: "روزنامه‌نگار", ipa: "[ʒʊʁnaˈlɪst]", article: "der", plural: "die Journalisten", examples: [{ de: "Der Journalist fragt, ob das stimmt.", fa: "روزنامه‌نگار می‌پرسد آیا این درست است." }] },
          { de: "veröffentlichen", fa: "منتشر کردن", ipa: "[fɛɐ̯ˈœfntlɪçən]", article: "-", plural: "-", conjugation: { ich: "veröffentliche", du: "veröffentlichst", er: "veröffentlicht", wir: "veröffentlichen", ihr: "veröffentlicht", sie: "veröffentlichen" }, examples: [{ de: "Die Zeitung veröffentlicht, dass die Steuern steigen.", fa: "روزنامه منتشر می‌کند که مالیات‌ها بالا می‌روند." }] },
          { de: "mitteilen", fa: "اطلاع دادن", ipa: "[ˈmɪtˌtaɪ̯lən]", article: "-", plural: "-", conjugation: { ich: "teile mit", du: "teilst mit", er: "teilt mit", wir: "teilen mit", ihr: "teilt mit", sie: "teilen mit" }, examples: [{ de: "Er teilt mit, dass das Meeting verschoben ist.", fa: "او اطلاع می‌دهد که جلسه به تأخیر افتاده." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Eine Pressekonferenz in Berlin\n\nBei einer Pressekonferenz in Berlin hat der Gesundheitsminister wichtige Informationen mitgeteilt. Er berichtet, dass die Zahl der Kranken in den letzten Wochen stark gestiegen ist. Der Minister bestätigt, dass die Regierung neue Maßnahmen ergreifen wird.\nEin Journalist fragt, ob die Schulen geschlossen werden. Der Pressesprecher antwortet, dass man die Situation genau beobachte. Er betont, dass es wichtig sei, ruhig zu bleiben.\nEin Experte meint, dass die Maßnahmen zu spät kommen. Er bezweifelt, dass sie wirksam genug sind. Trotzdem hofft er, dass die Lage sich in den nächsten Wochen verbessert. Die Bürger hoffen, dass alles bald vorbei ist.",
      translation: "یک کنفرانس مطبوعاتی در برلین\n\nدر یک کنفرانس مطبوعاتی در برلین، وزیر بهداشت اطلاعات مهمی ارائه داد. او گزارش می‌دهد که تعداد بیماران در هفته‌های اخیر به شدت افزایش یافته. وزیر تأیید می‌کند که دولت اقدامات جدیدی اتخاذ خواهد کرد.\nیک روزنامه‌نگار می‌پرسد آیا مدارس بسته خواهند شد. سخنگوی مطبوعاتی جواب می‌دهد که وضعیت را دقیقاً زیر نظر دارند. او تأکید می‌کند که مهم است آرام بمانیم.\nیک کارشناس نظر می‌دهد که اقدامات دیر انجام شده. او شک دارد که به اندازه کافی مؤثر باشند. با این حال امیدوار است که وضعیت در هفته‌های آینده بهتر شود. شهروندان امیدوارند که همه چیز زود تمام شود.",
      questions: [
        { question: "وزیر بهداشت چه خبری اعلام کرد؟", answer: "تعداد بیماران در هفته‌های اخیر به شدت افزایش یافته." },
        { question: "روزنامه‌نگار چه سؤالی پرسید؟", answer: "آیا مدارس بسته می‌شوند." },
        { question: "کارشناس چه نظری داشت؟", answer: "او شک داشت که اقدامات کافی باشد و فکر می‌کرد دیر شده." },
        { question: "مردم چه امیدی دارند؟", answer: "امیدوارند که همه چیز زود تمام شود." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن گزارش خبری",
      prompt: "یک متن ۸-۱۰ خطی به سبک گزارش خبری بنویسید. از افعال گزارش‌دهنده (berichten, bestätigen, erklären) و dass استفاده کنید.",
      steps: [
        { title: "شروع خبری", text: "با یک جمله رسمی شروع کنید", example: { de: "Laut den Nachrichten hat der Bürgermeister eine wichtige Entscheidung getroffen.", fa: "به گفته اخبار، شهردار تصمیم مهمی گرفته." } },
        { title: "نقل قول با dass", text: "از افعال گزارش‌دهنده استفاده کنید", example: { de: "Er erklärt, dass die Stadt mehr Grünflächen braucht.", fa: "او توضیح می‌دهد که شهر به فضای سبز بیشتری نیاز دارد." } },
        { title: "نظرات مختلف", text: "نظرات موافق و مخالف", example: { de: "Einige Bürger meinen, dass das zu teuer ist.", fa: "بعضی شهروندان معتقدند که این خیلی گران است." } }
      ],
      modelAnswer: "Laut einem Bericht der Tageszeitung hat die Stadt Frankfurt eine neue Umweltinitiative gestartet. Die Bürgermeisterin erklärt, dass die Luftqualität in der Stadt besser werden muss. Sie bestätigt, dass mehr Bäume gepflanzt werden. Einige Anwohner berichten, dass sie die neue Initiative unterstützen. Andere Bürger bezweifeln, dass die Maßnahmen ausreichen. Der Stadtsprecher teilt mit, dass es einen neuen Plan gibt. Er hofft, dass alle Bürger mitmachen."
    }
  ],

  listening: [
    {
      title: "گزارش خبری",
      instruction: "به جملات زیر گوش دهید و تکرار کنید.",
      sentences: [
        { de: "Der Minister sagt, dass die Lage besser wird.", fa: "وزیر می‌گوید که وضعیت بهتر می‌شود.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Der Minister sagt, dass die Lage besser wird" },
        { de: "Die Experten berichten, dass es kalt wird.", fa: "کارشناسان گزارش می‌دهند که هوا سرد می‌شود.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Die Experten berichten, dass es kalt wird" },
        { de: "Er fragt, ob ich Zeit habe.", fa: "او می‌پرسد آیا وقت دارم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Er fragt, ob ich Zeit habe" },
        { de: "Sie bestätigt, dass das richtig ist.", fa: "او تأیید می‌کند که این درست است.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Sie bestätigt, dass das richtig ist" },
        { de: "Ich bezweifle, dass er die Wahrheit sagt.", fa: "شک دارم که حقیقت را بگوید.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich bezweifle, dass er die Wahrheit sagt" }
      ]
    }
  ],

  speaking: [
    {
      title: "نقل قول خبری",
      pattern: "Er/Sie sagt, dass... / Er/Sie meint, dass... / Er/Sie fragt, ob...",
      exercise: "یک خبر را برای دوستانتان تعریف کنید. از نقل قول غیرمستقیم استفاده کنید: «رئیس‌جمهور گفت که...»، «کارشناسان معتقدند که...»، «مردم می‌پرسند آیا...»"
    }
  ],

  cultureTip: "در روزنامه‌نگاری آلمانی، استفاده از Konjunktiv I برای نقل قول غیرمستقیم بسیار رایج و حتی الزامی است. مثلاً در روزنامه‌ها می‌نویسند: Der Minister sagte, er sei der Meinung, dass... (وزیر گفت که نظرش این است). اگر Konjunktiv I با Konjunktiv II قابل اشتباه باشد، از Konjunktiv II استفاده می‌شود. در مکالمه روزمره، مردم عادی از dass استفاده می‌کنند.",

  examData: {
    questions: [
      { question: "در نقل قول غیرمستقیم با dass، فعل کجا می‌رود؟", options: ["جایگاه ۲", "جایگاه ۱", "آخر جمله", "بعد از dass"], answer: 2 },
      { question: "«Er sagt: «Ich bin müde.»» به غیرمستقیم:؟", options: ["Er sagt, dass er ist müde.", "Er sagt, dass er müde ist.", "Er sagt, dass ich müde bin.", "Er sagt, er sei müde."], answer: 1 },
      { question: "برای سؤال غیرمستقیم از چه کلمه‌ای استفاده می‌شود؟", options: ["dass", "ob", "wenn", "falls"], answer: 1 },
      { question: "«Sie fragt: «Hast du Zeit?»» به غیرمستقیم:؟", options: ["Sie fragt, dass ich Zeit habe.", "Sie fragt, ob ich Zeit habe.", "Sie fragt, ob ich Zeit bin.", "Sie fragt, ob du Zeit hast."], answer: 1 },
      { question: "کدام فعل گزارش‌دهنده نیست؟", options: ["berichten", "behaupten", "bestätigen", "besuchen"], answer: 3 },
      { question: "«Laut dem Bericht ...» به چه معنی است؟", options: ["در گزارش", "طبق گزارش", "از گزارش", "برای گزارش"], answer: 1 },
      { question: "در روزنامه‌نگاری آلمانی از چه شکلی استفاده می‌شود؟", options: ["Konjunktiv I", "Konjunktiv II", "Passiv", "Perfekt"], answer: 0 },
      { question: "«Der Zeuge sagt, dass er nichts gesehen _______.»", options: ["ist", "hat", "hatte", "wird"], answer: 1 }
    ]
  }
};
