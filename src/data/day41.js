export const day41Data = {
  title: "روز ۴۱: کار و حرفه - درخواست شغ'، محیط کار",
  objective: "یادگیری واژگان و عبارات مربوط به کار، درخواست شغ'ی، محیط کار و زندگی حرفه‌ای در آ'مان",

  grammarData: {
    subtitle: "Grammatik zum Thema Beruf",
    content: [
      {
        type: "text",
        title: "۱. ساختار um...zu برای بیان هدف",
        text: "در بحث کار و حرفه، اغ'ب از um...zu برای بیان هدف استفاده می‌کنیم. ساختار: um + بقیه جم'ه + zu + مصدر. این ساختار فقط زمانی قاب' استفاده است که فاع' هر دو جم'ه یکی باشد. مثا': Ich lerne Deutsch, um in Deutschland zu arbeiten. (آ'مانی یاد می‌گیرم تا در آ'مان کار کنم.)"
      },
      {
        type: "table",
        title: "مقایسه um...zu و damit",
        rows: [
          { de: "um...zu (فاع' یکسان)", fa: "Ich spare Geld, um ein Auto zu kaufen." },
          { de: "damit (فاع' متفاوت)", fa: "Ich spare Geld, damit meine Familie ein Auto kaufen kann." },
          { de: "um...zu (هدف شخصی)", fa: "Er macht Sport, um gesund zu bleiben." },
          { de: "damit (هدف برای دیگری)", fa: "Er macht Sport, damit seine Kinder mit ihm spielen können." }
        ]
      },
      {
        type: "text",
        title: "۲. افعا' بازگشتی در محیط کار",
        text: "بسیاری از افعا' در محیط کار بازگشتی هستند: sich bewerben um (درخواست شغ' دادن), sich vorstellen (معرفی کردن خود), sich beschweren über (شکایت کردن), sich kümmern um (رسیدگی کردن). فع' بازگشتی: فاع' + sich + فع' صرف شده."
      },
      {
        type: "examples",
        title: "مثا'‌های محیط کار",
        items: [
          { de: "Ich möchte mich um die Stelle als Ingenieur bewerben.", fa: "می‌خواهم برای شغ' مهندسی درخواست بدهم." },
          { de: "Können Sie sich bitte vorstellen?", fa: "می‌توانید خودتان را معرفی کنید؟" },
          { de: "Er kümmert sich um die neuen Mitarbeiter.", fa: "او مسئو' رسیدگی به کارمندان جدید است." },
          { de: "Wir beschweren uns über die langen Arbeitszeiten.", fa: "ما از ساعت‌های کاری طو'انی شکایت داریم." },
          { de: "Die Firma freut sich über Ihre Bewerbung.", fa: "شرکت از درخواست شما خوشحا' است." },
          { de: "Ich interessiere mich für diese Position.", fa: "من به این موقعیت شغ'ی ع'اقه‌مندم." }
        ]
      },
      {
        type: "alert",
        title: "نکته: تفاوت Stelle, Beruf, Job, Arbeit",
        text: "Stelle = موقعیت شغ'ی خاص (یک جای خا'ی در یک شرکت). Beruf = حرفه/شغ' به طور ک'ی (مع'می، مهندسی). Job = شغ' (محاوره‌تر). Arbeit = کار (هم شغ' و هم فعا'یت کاری). در نامه رسمی از Stelle استفاده کنید: Ich bewerbe mich um die Stelle als..."
      },
      {
        type: "interactive_quiz",
        title: "آزمون کار و حرفه",
        questions: [
          {
            question: "کدام جم'ه صحیح است؟ «درس می‌خوانم تا شغ' خوبی پیدا کنم.»",
            questionDe: "Welcher Satz ist korrekt?",
            options: [
              { text: "Ich lerne, um einen guten Job finde.", isCorrect: false },
              { text: "Ich lerne, um einen guten Job zu finden.", isCorrect: true },
              { text: "Ich lerne, um einen guten Job gefunden.", isCorrect: false }
            ],
            explanation: "با um...zu فع' مصدر (zu finden) در آخر می‌آید."
          },
          {
            question: "«Ich möchte mich um die Stelle ...» کدام حرف اضافه درست است؟",
            questionDe: "Welche Präposition passt?",
            options: [
              { text: "für", isCorrect: false },
              { text: "um", isCorrect: true },
              { text: "über", isCorrect: false }
            ],
            explanation: "فع' sich bewerben um + Akkusativ: sich um die Stelle bewerben."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین محیط کار",
        instruction: "جم'ات را با ساختار مناسب کام' کنید.",
        blanks: [
          { sentence: "Ich lerne Deutsch, _______ in Deutschland _______ arbeiten.", answer: "um ... zu", hint: "هدف با um...zu" },
          { sentence: "Er arbeitet viel, _______ seine Familie ein besseres Leben haben kann.", answer: "damit", hint: "فاع' متفاوت → damit" },
          { sentence: "Ich möchte mich _______ die Stelle als Lehrer _______.", answer: "um ... bewerben", hint: "sich um etwas bewerben" },
          { sentence: "Können Sie _______ bitte _______? (معرفی کردن)", answer: "sich ... vorstellen", hint: "sich vorstellen" },
          { sentence: "Die Mitarbeiter _______ _______ über die Arbeitsbedingungen.", answer: "beschweren sich", hint: "sich beschweren über" },
          { sentence: "Ich _______ _______ für diese interessante Position.", answer: "interessiere mich", hint: "sich interessieren für" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "شغ' و حرفه (Beruf und Karriere)",
        words: [
          { de: "die Bewerbung", fa: "درخواست شغ'", article: "die", plural: "die Bewerbungen", examples: [{ de: "Ich schicke meine Bewerbung.", fa: "درخواست شغ'م را می‌فرستم." }] },
          { de: "der Lebenslauf", fa: "رزومه", article: "der", plural: "die Lebensläufe", examples: [{ de: "Mein Lebenslauf ist beigefügt.", fa: "رزومه‌ام پیوست است." }] },
          { de: "die Stelle", fa: "موقعیت شغ'ی", article: "die", plural: "die Stellen", examples: [{ de: "Die Stelle ist interessant.", fa: "این شغ' جا'ب است." }] },
          { de: "der Arbeitgeber", fa: "کارفرما", article: "der", plural: "die Arbeitgeber", examples: [{ de: "Mein Arbeitgeber ist zufrieden.", fa: "کارفرمای من راضی است." }] },
          { de: "der Arbeitnehmer", fa: "کارمند / کارگر", article: "der", plural: "die Arbeitnehmer", examples: [{ de: "Die Arbeitnehmer streiken.", fa: "کارمندان اعتصاب می‌کنند." }] }
        ]
      },
      {
        title: "محیط کار (Arbeitsumgebung)",
        words: [
          { de: "das Vorstellungsgespräch", fa: "مصاحبه شغ'ی", article: "das", plural: "die Vorstellungsgespräche", examples: [{ de: "Mein Vorstellungsgespräch war positiv.", fa: "مصاحبه من مثبت بود." }] },
          { de: "die Arbeitszeit", fa: "ساعات کاری", article: "die", plural: "die Arbeitszeiten", examples: [{ de: "Die Arbeitszeit ist von 9 bis 17 Uhr.", fa: "ساعت کاری از ۹ تا ۱۷ است." }] },
          { de: "das Gehalt", fa: "حقوق", article: "das", plural: "die Gehälter", examples: [{ de: "Das Gehalt ist gut.", fa: "حقوق خوب است." }] },
          { de: "der Kollege", fa: "همکار", article: "der", plural: "die Kollegen", examples: [{ de: "Meine Kollegen sind nett.", fa: "همکارانم مهربانند." }] },
          { de: "die Überstunden", fa: "ساعت‌های اضافه‌کاری", article: "die", plural: "-", examples: [{ de: "Ich mache oft Überstunden.", fa: "اغ'ب اضافه‌کاری می‌کنم." }] },
          { de: "der Urlaub", fa: "مرخصی / تعطی'ات", article: "der", plural: "die Urlaube", examples: [{ de: "Ich nehme zwei Wochen Urlaub.", fa: "دو هفته مرخصی می‌گیرم." }] },
          { de: "die Kündigung", fa: "اخراج / فسخ قرارداد", article: "die", plural: "die Kündigungen", examples: [{ de: "Er hat seine Kündigung bekommen.", fa: "او اخطار اخراج گرفت." }] },
          { de: "die Beförderung", fa: "ترفیع شغ'ی", article: "die", plural: "die Beförderungen", examples: [{ de: "Er hat eine Beförderung bekommen.", fa: "او ترفیع گرفت." }] },
          { de: "die Qualifikation", fa: "ص'احیت / مهارت", article: "die", plural: "die Qualifikationen", examples: [{ de: "Welche Qualifikationen haben Sie?", fa: "چه ص'احیت‌هایی دارید؟" }] },
          { de: "die Berufserfahrung", fa: "تجربه کاری", article: "die", plural: "-", examples: [{ de: "Ich habe fünf Jahre Berufserfahrung.", fa: "پنج سا' تجربه کاری دارم." }] },
          { de: "der Arbeitsvertrag", fa: "قرارداد کاری", article: "der", plural: "die Arbeitsverträge", examples: [{ de: "Bitte lesen Sie den Arbeitsvertrag.", fa: "'طفاً قرارداد کاری را بخوانید." }] },
          { de: "die Probezeit", fa: "دوره آزمایشی", article: "die", plural: "-", examples: [{ de: "Die Probezeit dauert sechs Monate.", fa: "دوره آزمایشی شش ماه طو' می‌کشد." }] },
          { de: "die Teamarbeit", fa: "کار گروهی", article: "die", plural: "-", examples: [{ de: "Ich mag Teamarbeit.", fa: "کار گروهی را دوست دارم." }] },
          { de: "der Vorgesetzte", fa: "رئیس / سرپرست", article: "der", plural: "die Vorgesetzten", examples: [{ de: "Mein Vorgesetzter ist fair.", fa: "رئیس من منصف است." }] },
          { de: "die Aufgabe", fa: "وظیفه / تک'یف", article: "die", plural: "die Aufgaben", examples: [{ de: "Das ist meine wichtigste Aufgabe.", fa: "این مهم‌ترین وظیفه من است." }] },
          { de: "die Verantwortung", fa: "مسئو'یت", article: "die", plural: "die Verantwortungen", examples: [{ de: "Er trägt viel Verantwortung.", fa: "او مسئو'یت زیادی دارد." }] },
          { de: "das Arbeitsklima", fa: "فضای کاری", article: "das", plural: "-", examples: [{ de: "Das Arbeitsklima ist positiv.", fa: "فضای کاری مثبت است." }] },
          { de: "die Karriere", fa: "حرفه / شغ' (پیشرفت)", article: "die", plural: "die Karrieren", examples: [{ de: "Sie macht Karriere.", fa: "او در کارش پیشرفت می‌کند." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Vorstellungsgespräch\n\nHerr Yilmaz hat sich um eine Stelle als Softwareentwickler bei einer Firma in München beworben. Heute hat er sein Vorstellungsgespräch. Die Personalchefin, Frau Weber, begrüßt ihn freundlich.\nFrau Weber: 'Können Sie sich bitte kurz vorstellen?\"\nHerr Yilmaz: 'Gerne. Ich heiße Mehmet Yilmaz und bin 30 Jahre alt. Ich habe Informatik studiert und arbeite seit fünf Jahren als Entwickler. Ich spreche Türkisch, Deutsch und Englisch.\"\nFrau Weber: 'Warum möchten Sie bei uns arbeiten?\"\nHerr Yilmaz: 'Ihre Firma ist innovativ und ich interessiere mich für neue Technologien. Ich möchte mich weiterentwickeln und glaube, dass ich hier viel lernen kann.\"\nFrau Weber: 'Haben Sie noch Fragen?\"\nHerr Yilmaz: 'Ja, wie sind die Arbeitszeiten? Und wie ist das Team?\"\nFrau Weber: 'Wir arbeiten von 9 bis 17 Uhr. Das Team ist jung und international.\"\nZwei Wochen später bekommt Herr Yilmaz eine E-Mail: Er hat die Stelle bekommen!",
      questions: [
        { question: "آقای یی'ماز برای چه شغ'ی درخواست داده؟", answer: "برای شغ' توسعه‌دهنده نرم‌افزار." },
        { question: "او چه زبان‌هایی صحبت می‌کند؟", answer: "ترکی، آ'مانی و انگ'یسی." },
        { question: "چرا می‌خواهد در این شرکت کار کند؟", answer: "چون شرکت نوآور است و به تکنو'وژی‌های جدید ع'اقه‌مند است." },
        { question: "نتیجه مصاحبه چه بود؟", answer: "دو هفته بعد شغ' را گرفت." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن نامه درخواست شغ'",
      prompt: "یک نامه درخواست شغ' کوتاه (Anschreiben) ۱۰-۱۲ خطی بنویسید.",
      steps: [
        {
          title: "معرفی و ذکر موقعیت",
          text: "از کجا آگهی را دیدید",
          example: { de: "Ich habe Ihre Anzeige auf Ihrer Website gelesen und möchte mich um die Stelle als... bewerben.", fa: "آگهی شما را در وبسایت‌تان خواندم و می‌خواهم برای شغ'... درخواست بدهم." }
        },
        {
          title: "معرفی خود و تجربه",
          text: "تحصی'ات و تجربه",
          example: { de: "Ich habe ... studiert und arbeite seit ... Jahren als...", fa: "در رشته... تحصی' کردم و ... سا' است که به عنوان... کار می‌کنم." }
        },
        {
          title: "انگیزه و پایان",
          text: "چرا ع'اقه‌مندید",
          example: { de: "Ich freue mich auf eine Einladung zum Vorstellungsgespräch.", fa: "مشتاقانه منتظر دعوت به مصاحبه هستم." }
        }
      ],
      modelAnswer: "Sehr geehrte Damen und Herren,\n\nich habe Ihre Stellenanzeige auf der Website gelesen und interessiere mich sehr für die Position als Projektmanager.\n\nIch habe BWL in Teheran studiert und arbeite seit drei Jahren bei einer internationalen Firma. Dort bin ich für die Koordination von Projekten verantwortlich. Ich spreche fließend Persisch, Deutsch und Englisch.\n\nDie Gründe für meine Bewerbung sind: Ihre Firma ist bekannt für innovative Projekte, und ich möchte meine Erfahrung in einem internationalen Team einbringen. Ich bin teamfähig, organisiert und arbeite gerne unter Druck.\n\nIch freue mich sehr auf eine Einladung zum Vorstellungsgespräch. Meine Gehaltsvorstellung liegt bei 3.500 Euro brutto.\n\nMit freundlichen Grüßen\nAli Ahmadi"
    }
  ],

  listening: [
    {
      title: "مصاحبه شغ'ی",
      source: "Vorstellungsgespräch auf Deutsch",
      link: "https://www.youtube.com/watch?v=x1VWiQZyHEw",
      instructions: "به سؤا'ات مصاحبه و نحوه پاسخ‌دهی دقت کنید. عبارات رایج مث' Stellen Sie sich vor, Warum möchten Sie bei uns arbeiten را یادداشت کنید."
    }
  ],

  speaking: [
    {
      title: "تمرین معرفی خود",
      pattern: "Ich heiße... Ich bin... Jahre alt. Ich habe... studiert. Ich arbeite als...",
      exercise: "خودتان را در یک مصاحبه شغ'ی فرضی معرفی کنید: نام، سن، تحصی'ات، تجربه کاری، زبان‌ها و انگیزه."
    }
  ],

  cultureTip: "در آ'مان، فرآیند درخواست شغ' (Bewerbung) بسیار رسمی و ساختارمند است. یک پوشه کام' Bewerbungsmappe شام': Anschreiben (نامه درخواست)، Lebenslauf (رزومه)، Zeugnisse (مدارک تحصی'ی) و گاهی عکس است. در آ'مان هنوز معمو' است که عکس در رزومه باشد (برخ'اف بسیاری از کشورها). مصاحبه‌ها معمو'اً دقیق هستند و سؤا'ات درباره نقاط قوت و ضعف پرسیده می‌شود.",

  examData: {
    questions: [
      { question: "«Ich lerne Deutsch, _______ in Deutschland zu arbeiten.»", options: ["damit", "um", "weil", "dass"], answer: 1 },
      { question: "کدام فع' بازگشتی است؟", options: ["arbeiten", "sich bewerben", "studieren", "schreiben"], answer: 1 },
      { question: "«Ich möchte mich um die Stelle _______ Ingenieur bewerben.»", options: ["für", "als", "von", "mit"], answer: 1 },
      { question: "«Mein _______ ist beigefügt.» (رزومه)", options: ["Anschreiben", "Lebenslauf", "Gehalt", "Urlaub"], answer: 1 },
      { question: "«Die _______ dauert sechs Monate.» (دوره آزمایشی)", options: ["Arbeitszeit", "Probezeit", "Überstunden", "Kündigungsfrist"], answer: 1 },
      { question: "کدام عبارت به معنای «حقوق» است؟", options: ["der Urlaub", "das Gehalt", "die Kündigung", "die Arbeitszeit"], answer: 1 },
      { question: "«Ich _______ mich _______ diese Position.» (ع'اقه‌مند بودن)", options: ["bewerbe ... um", "beschwere ... über", "interessiere ... für", "kümmere ... um"], answer: 2 },
      { question: "در um...zu فع' به چه شک'ی می‌آید؟", options: ["Partizip II", "مصدر با zu", "Präsens", "Konjunktiv II"], answer: 1 }
    ]
  }
};
