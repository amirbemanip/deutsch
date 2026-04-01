export const day39Data = {
  title: "روز ۳۹: گفتار غیرمستقیم (Indirekte Rede)",
  objective: "یادگیری نحوه نق' قو' غیرمستقیم در زبان آ'مانی با dass و Konjunktiv I",

  grammarData: {
    subtitle: "Indirekte Rede: نق' قو' آنچه دیگران گفته‌اند",
    content: [
      {
        type: "text",
        title: "۱. Indirekte Rede چیست؟",
        text: "وقتی می‌خواهیم حرف کسی را بدون نق' مستقیم بیان کنیم، از گفتار غیرمستقیم استفاده می‌کنیم. دو روش وجود دارد: روش ساده با dass (که + جم'ه عادی) و روش رسمی با Konjunktiv I. در سطح B1، روش dass رایج‌تر و آسان‌تر است. Konjunktiv I بیشتر در روزنامه‌نگاری و متون رسمی استفاده می‌شود."
      },
      {
        type: "table",
        title: "افعا' گزارش‌دهنده (Verba dicendi)",
        rows: [
          { de: "sagen (dass)", fa: "گفتن: Er sagt, dass er müde ist." },
          { de: "meinen", fa: "نظر دادن: Er meint, dass das falsch ist." },
          { de: "behaupten", fa: "ادعا کردن: Sie behauptet, dass sie krank ist." },
          { de: "erklären", fa: "توضیح دادن: Er erklärt, dass es einfach ist." },
          { de: "berichten", fa: "گزارش دادن: Sie berichtet, dass alles gut ist." },
          { de: "fragen, ob", fa: "پرسیدن آیا: Er fragt, ob ich komme." },
          { de: "antworten, dass", fa: "جواب دادن: Sie antwortet, dass sie kommt." },
          { de: "mitteilen, dass", fa: "اط'اع دادن: Er teilt mit, dass er verreist." }
        ]
      },
      {
        type: "text",
        title: "۲. ساختار با dass",
        text: "بعد از فع' گزارش‌دهنده + dass، جم'ه وابسته با فع' در آخر می‌آید. زمان فع' حفظ می‌شود (Present → Present، Perfekt → Perfekt). نکته مهم: اگر فاع' جم'ه نق'‌قو'ی عوض شود، ضمیرها هم عوض می‌شوند. مثا': Er sagt: 'Ich bin müde.\" → Er sagt, dass er müde ist."
      },
      {
        type: "text",
        title: "۳. Konjunktiv I (معرفی مختصر)",
        text: "در روزنامه‌ها و اخبار، از Konjunktiv I برای نق' قو' غیرمستقیم استفاده می‌شود: Er sagt, er sei müde (او می‌گوید خسته است). شک' Konjunktiv I: sei (für sein), habe (für haben), gehe, komme, mache... اما در مکا'مه روزمره، روش dass بسیار رایج‌تر است."
      },
      {
        type: "examples",
        title: "مثا'‌های نق' قو' غیرمستقیم",
        items: [
          { de: "Direkt: 'Ich habe Hunger.\" → Indirekt: Er sagt, dass er Hunger hat.", fa: "مستقیم: «گرسنه‌ام.» → غیرمستقیم: او می‌گوید که گرسنه است." },
          { de: "Direkt: 'Ich komme morgen.\" → Indirekt: Sie sagt, dass sie morgen kommt.", fa: "مستقیم: «فردا می‌آیم.» → غیرمستقیم: او می‌گوید که فردا می‌آید." },
          { de: "Direkt: 'Ich bin nicht einverstanden.\" → Er meint, dass er nicht einverstanden sei.", fa: "مستقیم: «موافقم نیستم.» → او نظرش این است که موافق نیست." },
          { de: "Direkt: 'Hast du Zeit?\" → Er fragt, ob ich Zeit habe.", fa: "مستقیم: «وقت داری؟» → او می‌پرسد آیا وقت دارم." },
          { de: "Die Polizei berichtet, dass der Mann verschwunden ist.", fa: "پ'یس گزارش می‌دهد که مرد ناپدید شده است." },
          { de: "Der Arzt erklärt, dass die Behandlung dauert.", fa: "پزشک توضیح می‌دهد که درمان طو' می‌کشد." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم: تغییر ضمیرها",
        text: "وقتی نق' قو' می‌کنید، ضمیرها باید تغییر کنند. اگر شخص او' (ich) صحبت کرده، وقتی شما نق' می‌کنید باید به او/آن‌ها تغییر دهید. مثا': Er sagt: 'Ich bin müde.\" → Er sagt, dass ER müde ist. (نه dass ICH müde bin). این رایج‌ترین اشتباه زبان‌آموزان است."
      },
      {
        type: "interactive_quiz",
        title: "آزمون Indirekte Rede",
        questions: [
          {
            question: "نق' قو' غیرمستقیم: Er sagt: 'Ich komme morgen.\" → Er sagt, dass ...",
            questionDe: "Wie lautet der indirekte Satz?",
            options: [
              { text: "er kommt morgen.", isCorrect: false },
              { text: "er morgen kommt.", isCorrect: true },
              { text: "er morgen komme.", isCorrect: false }
            ],
            explanation: "با dass فع' در آخر جم'ه می‌آید. ضمیر ich به er تغییر می‌کند."
          },
          {
            question: "برای سؤا' غیرمستقیم از چه ک'مه‌ای استفاده می‌شود؟",
            questionDe: "Welches Wort benutzt man für indirekte Fragen?",
            options: [
              { text: "dass", isCorrect: false },
              { text: "ob", isCorrect: true },
              { text: "wenn", isCorrect: false }
            ],
            explanation: "برای سؤا' ب'ه/خیر غیرمستقیم از ob استفاده می‌شود: Er fragt, ob ich komme."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین Indirekte Rede",
        instruction: "جم'ات مستقیم را به غیرمستقیم تبدی' کنید.",
        blanks: [
          { sentence: "Er sagt: 'Ich bin krank.\" → Er sagt, dass er krank _______.", answer: "ist", hint: "ضمیر ich → er، فع' ist" },
          { sentence: "Sie sagt: 'Ich habe keine Zeit.\" → Sie sagt, dass sie keine Zeit _______.", answer: "hat", hint: "ضمیر ich → sie، فع' hat" },
          { sentence: "Er fragt: 'Kommst du morgen?\" → Er fragt, _______ ich morgen komme.", answer: "ob", hint: "سؤا' غیرمستقیم → ob" },
          { sentence: "Sie sagt: 'Ich war in Berlin.\" → Sie sagt, dass sie in Berlin _______.", answer: "war", hint: "زمان گذشته حفظ می‌شود" },
          { sentence: "Er meint: 'Das ist falsch.\" → Er meint, dass das falsch _______.", answer: "ist", hint: "فع' ist در آخر" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "گفتار و ارتباط (Sprechen und Kommunikation)",
        words: [
          { de: "die Aussage", fa: "اظهار / بیان", article: "die", plural: "die Aussagen", examples: [{ de: "Die Aussage des Zeugen war wichtig.", fa: "اظهار شاهد مهم بود." }] },
          { de: "die Meinung", fa: "نظر / عقیده", article: "die", plural: "die Meinungen", examples: [{ de: "Meiner Meinung nach ist das richtig.", fa: "به نظر من این درست است." }] },
          { de: "behaupten", fa: "ادعا کردن", article: "-", plural: "-", examples: [{ de: "Er behauptet, dass er unschuldig ist.", fa: "او ادعا می‌کند که بی‌گناه است." }] },
          { de: "bestätigen", fa: "تأیید کردن", article: "-", plural: "-", examples: [{ de: "Die Polizei bestätigt, dass der Mann gefunden wurde.", fa: "پ'یس تأیید می‌کند که مرد پیدا شده." }] },
          { de: "bezweifeln", fa: "شک کردن / تردید داشتن", article: "-", plural: "-", examples: [{ de: "Ich bezweifle, dass er die Wahrheit sagt.", fa: "شک دارم که حقیقت را بگوید." }] }
        ]
      },
      {
        title: "رسانه و خبر (Medien und Nachrichten)",
        words: [
          { de: "der Bericht", fa: "گزارش", article: "der", plural: "die Berichte", examples: [{ de: "Der Bericht zeigt, dass die Zahlen steigen.", fa: "گزارش نشان می‌دهد که اعداد با'ا می‌روند." }] },
          { de: "die Nachricht", fa: "خبر", article: "die", plural: "die Nachrichten", examples: [{ de: "Die Nachrichten berichten, dass es regnen wird.", fa: "اخبار گزارش می‌دهند که باران خواهد آمد." }] },
          { de: "das Interview", fa: "مصاحبه", article: "das", plural: "die Interviews", examples: [{ de: "Im Interview sagt er, dass er zufrieden ist.", fa: "در مصاحبه می‌گوید که راضی است." }] },
          { de: "der Zeuge", fa: "شاهد", article: "der", plural: "die Zeugen", examples: [{ de: "Der Zeuge sagt, dass er nichts gesehen hat.", fa: "شاهد می‌گوید که چیزی ندیده." }] },
          { de: "die Überschrift", fa: "تیتر / عنوان خبر", article: "die", plural: "die Überschriften", examples: [{ de: "Die Überschrift besagt, dass der Markt sinkt.", fa: "تیتر حاکی از آن است که بازار سقوط می‌کند." }] },
          { de: "der Journalist", fa: "روزنامه‌نگار", article: "der", plural: "die Journalisten", examples: [{ de: "Der Journalist fragt, ob das stimmt.", fa: "روزنامه‌نگار می‌پرسد آیا این درست است." }] },
          { de: "veröffentlichen", fa: "منتشر کردن", article: "-", plural: "-", examples: [{ de: "Die Zeitung veröffentlicht, dass die Steuern steigen.", fa: "روزنامه منتشر می‌کند که ما'یات‌ها با'ا می‌روند." }] },
          { de: "die Quelle", fa: "منبع", article: "die", plural: "die Quellen", examples: [{ de: "Aus welcher Quelle stammt diese Information?", fa: "این اط'اعات از کدام منبع است؟" }] },
          { de: "vertrauenswürdig", fa: "قاب' اعتماد", article: "-", plural: "-", examples: [{ de: "Ist diese Quelle vertrauenswürdig?", fa: "آیا این منبع قاب' اعتماد است؟" }] },
          { de: "die Schlagzeile", fa: "تیتر خبری", article: "die", plural: "die Schlagzeilen", examples: [{ de: "Das ist eine große Schlagzeile.", fa: "این یک تیتر بزرگ است." }] },
          { de: "berichten über", fa: "گزارش دادن درباره", article: "-", plural: "-", examples: [{ de: "Die Medien berichten über den Unfall.", fa: "رسانه‌ها درباره حادثه گزارش می‌دهند." }] },
          { de: "die Tageszeitung", fa: "روزنامه روزانه", article: "die", plural: "die Tageszeitungen", examples: [{ de: "Ich lese jeden Morgen die Tageszeitung.", fa: "هر صبح روزنامه می‌خوانم." }] },
          { de: "der Pressesprecher", fa: "سخنگوی مطبوعاتی", article: "der", plural: "die Pressesprecher", examples: [{ de: "Der Pressesprecher teilt mit, dass die Regierung handelt.", fa: "سخنگو اط'اع می‌دهد که دو'ت اقدام می‌کند." }] },
          { de: "das Zitat", fa: "نق' قو'", article: "das", plural: "die Zitate", examples: [{ de: "Das Zitat stammt von Einstein.", fa: "نق' قو' از اینشتین است." }] },
          { de: "angeblich", fa: "به ادعای / ظاهراً", article: "-", plural: "-", examples: [{ de: "Angeblich hat er das gesagt.", fa: "ظاهراً او این را گفته." }] },
          { de: "offenbar", fa: "ظاهراً / آشکارا", article: "-", plural: "-", examples: [{ de: "Offenbar hat niemand gewusst, dass er krank war.", fa: "ظاهراً کسی نمی‌دانست که او مریض بوده." }] },
          { de: "laut (+ Dativ)", fa: "طبق / به گفته", article: "-", plural: "-", examples: [{ de: "Laut dem Bericht ist das Kind gesund.", fa: "طبق گزارش، کودک سا'م است." }] },
          { de: "mitteilen", fa: "اط'اع دادن", article: "-", plural: "-", examples: [{ de: "Er teilt mit, dass das Meeting verschoben ist.", fa: "او اط'اع می‌دهد که ج'سه به تعویق افتاده." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Eine Pressekonferenz in Berlin\n\nBei einer Pressekonferenz in Berlin hat der Gesundheitsminister wichtige Informationen mitgeteilt. Er berichtet, dass die Zahl der Kranken in den letzten Wochen stark gestiegen ist. Laut offiziellen Berichten seien mehr als 50.000 Menschen betroffen. Der Minister bestätigt, dass die Regierung neue Maßnahmen ergreifen wird.\nEin Journalist fragt, ob die Schulen geschlossen werden. Der Pressesprecher antwortet, dass man die Situation genau beobachte. Er betont, dass es wichtig sei, ruhig zu bleiben. Angeblich soll es einen neuen Plan geben, aber offiziell wurde nichts bestätigt.\nEin Experte meint, dass die Maßnahmen zu spät kommen. Er bezweifelt, dass sie wirksam genug sind. Trotzdem hofft er, dass die Lage sich in den nächsten Wochen verbessert. Die Bürger hoffen, dass alles bald vorbei ist.",
      questions: [
        { question: "وزیر بهداشت چه خبری اع'ام کرد؟", answer: "تعداد بیماران در هفته‌های اخیر به شدت افزایش یافته." },
        { question: "روزنامه‌نگار چه سؤا'ی پرسید؟", answer: "آیا مدارس بسته می‌شوند." },
        { question: "کارشناس چه نظری داشت؟", answer: "او شک داشت که اقدامات کافی باشند و فکر می‌کرد دیر شده." },
        { question: "مردم چه امیدی دارند؟", answer: "امیدوارند که همه چیز به زودی تمام شود." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن گزارش خبری",
      prompt: "یک متن ۸-۱۰ خطی به سبک گزارش خبری بنویسید. از افعا' گزارش‌دهنده (berichten, bestätigen, erklären) و dass استفاده کنید.",
      steps: [
        {
          title: "شروع خبری",
          text: "با یک جم'ه رسمی شروع کنید",
          example: { de: "Laut den Nachrichten hat der Bürgermeister eine wichtige Entscheidung getroffen.", fa: "به گفته اخبار، شهردار تصمیم مهمی گرفته." }
        },
        {
          title: "نق' قو' با dass",
          text: "از فع'‌های گزارش‌دهنده استفاده کنید",
          example: { de: "Er erklärt, dass die Stadt mehr Grünflächen braucht.", fa: "او توضیح می‌دهد که شهر به فضای سبز بیشتری نیاز دارد." }
        },
        {
          title: "نظرات مخت'ف",
          text: "نظرات موافق و مخا'ف",
          example: { de: "Einige Bürger meinen, dass das zu teuer ist.", fa: "برخی شهروندان معتقدند که این خی'ی گران است." }
        }
      ],
      modelAnswer: "Laut einem Bericht der Tageszeitung hat die Stadt Frankfurt eine neue Umweltinitiative gestartet. Die Bürgermeisterin erklärt, dass die Luftqualität in der Stadt besser werden muss. Sie bestätigt, dass mehr Bäume gepflanzt werden. Einige Anwohner berichten, dass sie die neue Initiative unterstützen. Sie meinen, dass mehr Radwege wichtig sind. Andere Bürger bezweifeln, dass die Maßnahmen ausreichen. Sie behaupten, dass die Industrie auch etwas tun muss. Der Stadtsprecher teilt mit, dass es einen neuen Plan gibt. Er hofft, dass alle Bürger mitmachen. Experten bestätigen, dass solche Initiativen langfristig wirken."
    }
  ],

  listening: [
    {
      title: "گزارش خبری",
      source: "Tagesschau - Indirekte Rede",
      link: "https://www.youtube.com/watch?v=JjVs3Ow2bCE",
      instructions: "به نقل قول‌های غیرمستقیم در اخبار دقت کنید. گوینده اخبار معمولاً می‌گوید: Der Minister sagte, dass... یا Experten berichten, dass... این افعال گزارش‌دهنده را یادداشت کنید."
    }
  ],

  speaking: [
    {
      title: "نق' قو' خبری",
      pattern: "Er/Sie sagt, dass... / Er/Sie meint, dass... / Er/Sie fragt, ob...",
      exercise: "یک خبر را برای دوستتان تعریف کنید. از نق' قو' غیرمستقیم استفاده کنید: «رئیس‌جمهور گفت که...»، «کارشناسان معتقدند که...»، «مردم می‌پرسند آیا...»"
    }
  ],

  cultureTip: "در روزنامه‌نگاری آلمانی، استفاده از Konjunktiv I برای نقل قول غیرمستقیم بسیار رایج و حتی الزامی است. مثلاً در روزنامه‌ها می‌نویسند: Der Minister sagte, er sei der Meinung, dass... (وزیر گفت که نظرش این است). اگر Konjunktiv I با Konjunktiv II قابل اشتباه باشد، از Konjunktiv II استفاده می‌شود. در مکالمه روزمره، مردم عادی از dass استفاده می‌کنند.",

  examData: {
    questions: [
      { question: "در نق' قو' غیرمستقیم با dass، فع' کجا می‌رود؟", options: ["جایگاه ۲", "جایگاه ۱", "آخر جم'ه", "بعد از dass"], answer: 2 },
      { question: "«Er sagt: 'Ich bin müde.\"» به غیرمستقیم:?", options: ["Er sagt, dass er ist müde.", "Er sagt, dass er müde ist.", "Er sagt, dass ich müde bin.", "Er sagt, er sei müde."], answer: 1 },
      { question: "برای سؤا' غیرمستقیم از چه ک'مه‌ای استفاده می‌شود؟", options: ["dass", "ob", "wenn", "falls"], answer: 1 },
      { question: "«Sie fragt: 'Hast du Zeit?\"» به غیرمستقیم:?", options: ["Sie fragt, dass ich Zeit habe.", "Sie fragt, ob ich Zeit habe.", "Sie fragt, ob ich Zeit bin.", "Sie fragt, ob du Zeit hast."], answer: 1 },
      { question: "کدام فع' گزارش‌دهنده نیست؟", options: ["berichten", "behaupten", "bestätigen", "besuchen"], answer: 3 },
      { question: "«Laut dem Bericht ...» به چه معناست؟", options: ["در گزارش", "طبق گزارش", "از گزارش", "برای گزارش"], answer: 1 },
      { question: "در روزنامه‌نگاری آ'مانی از چه شک'ی استفاده می‌شود؟", options: ["Konjunktiv I", "Konjunktiv II", "Passiv", "Perfekt"], answer: 0 },
      { question: "«Der Zeuge sagt, dass er nichts gesehen _______.»", options: ["ist", "hat", "hatte", "wird"], answer: 1 }
    ]
  }
};
