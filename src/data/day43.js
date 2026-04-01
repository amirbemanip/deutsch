export const day43Data = {
  title: "روز ۴۳: رسانه و تکنولوژی — اینترنت و زندگی دیجیتال",
  objective: "در این روز درباره تکنولوژی، اینترنت، شبکه‌های اجتماعی و تأثیر آن‌ها بر زندگی روزمره یاد می‌گیرید و می‌توانید مزایا و معایب را به آلمانی بحث کنید.",

  grammarData: {
    subtitle: "ساختارهای بحث درباره مزایا و معایب",
    content: [
      {
        type: "text",
        title: "۱. بیان مزایا و معایب",
        text: "در سطح B1 باید بتوانید درباره یک موضوع مزایا و معایب را بیان کنید. از این ساختارها استفاده کنید:"
      },
      {
        type: "table",
        title: "عبارات مزایا و معایب",
        rows: [
          { de: "Einerseits..., andererseits...", fa: "از یک طرف... از طرف دیگر..." },
          { de: "Auf der einen Seite..., auf der anderen Seite...", fa: "در یک طرف... در طرف دیگر..." },
          { de: "Zwar..., aber trotzdem...", fa: "اگرچه... اما با این حال..." },
          { de: "Der Vorteil ist, dass... / Der Nachteil ist, dass...", fa: "مزیت این است که... / عیب این است که..." }
        ]
      },
      {
        type: "examples",
        title: "مثال درباره تکنولوژی",
        items: [
          { de: "Einerseits ist das Internet sehr praktisch. Andererseits verbringen wir zu viel Zeit am Handy.", fa: "از یک طرف اینترنت خیلی عملی است. از طرف دیگر ما وقت زیادی با گوشی می‌گذرانیم." },
          { de: "Zwar gibt es viele Vorteile von Social Media, aber trotzdem sollten wir vorsichtig sein.", fa: "اگرچه مزایای زیادی از شبکه‌های اجتماعی وجود دارد، اما با این حال باید مراقب باشیم." }
        ]
      },
      {
        type: "fill_blank",
        title: "جای خالی را پر کنید",
        instruction: "کلمه مناسب را بنویسید:",
        blanks: [
          { sentence: "___ ist das Internet praktisch, ___ andererseits ist es auch gefaehrlich.", answer: "Einerseits", hint: "از یک طرف..." },
          { sentence: "Zwar gibt es viele Vorteile, ___ sollten wir aufpassen.", answer: "aber", hint: "اما..." },
          { sentence: "Der ___ ist, dass man schnell Informationen finden kann.", answer: "Vorteil", hint: "مزیت = V..." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: رسانه و تکنولوژی",
        questions: [
          {
            question: "کدام ساختار برای بیان مزایا و معایب درست است؟",
            questionDe: "Welche Struktur ist fuer Pro und Contra richtig?",
            options: [
              { text: "Einerseits..., andererseits...", isCorrect: true },
              { text: "Zuerst..., dann...", isCorrect: false },
              { text: "Heute..., morgen...", isCorrect: false }
            ],
            explanation: "Einerseits/andererseits ساختار استاندارد برای بیان مزایا و معایب است."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "لغات تکنولوژی و اینترنت",
        words: [
          { de: "das Internet", fa: "اینترنت", article: "das", plural: "-", examples: [{ de: "Ohne Internet waere das Leben anders.", fa: "بدون اینترنت زندگی متفاوت بود." }] },
          { de: "die Webseite / die Website", fa: "وبسایت", article: "die", plural: "die Webseiten", examples: [{ de: "Diese Webseite ist sehr nuetzlich.", fa: "این وبسایت بسیار مفید است." }] },
          { de: "die Suchmaschine", fa: "موتور جستجو", article: "die", plural: "die Suchmaschinen", examples: [{ de: "Google ist die bekannteste Suchmaschine.", fa: "گوگل معروف‌ترین موتور جستجو است." }] },
          { de: "herunterladen", fa: "دانلود کردن", article: "-", plural: "-", examples: [{ de: "Ich lade die App herunter.", fa: "اپلیکیشن را دانلود می‌کنم." }] },
          { de: "der Datenschutz", fa: "حفاظت از داده‌ها", article: "der", plural: "-", examples: [{ de: "Datenschutz ist in Deutschland wichtig.", fa: "حفاظت از داده‌ها در آلمان مهم است." }] },
          { de: "die Privatsphaere", fa: "حریم خصوصی", article: "die", plural: "-", examples: [{ de: "Die Privatsphaere leidet unter den sozialen Netzwerken.", fa: "حریم خصوصی تحت تأثیر شبکه‌های اجتماعی آسیب می‌بیند." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Leben ohne Smartphone\n\nIn einer Umfrage haben 1.000 Deutsche gefragt, ob sie einen Tag ohne Smartphone schaffen wuerden. Das Ergebnis war ueberraschend: Nur 15 Prozent sagten, dass sie das koennten. Die meisten Menschen sind heute suechtig nach ihren Handys.\nEinerseits haben Smartphones viele Vorteile. Man kann schnell Informationen finden und mit Freunden kommunizieren. Andererseits gibt es auch Nachteile. Viele Menschen verbringen zu viel Zeit vor dem Bildschirm.\nEin interessanter Trend ist das Digital Detox. Immer mehr Menschen versuchen, regelmaessig offline zu sein.",
      questions: [
        { question: "در نظرسنجی چند درصد مردم گفتند می‌توانند بدون گوشی زندگی کنند؟", answer: "فقط ۱۵ درصد." },
        { question: "مزیت گوشی هوشمند چیست؟", answer: "می‌توان سریع اطلاعات پیدا کرد و با دوستان ارتباط برقرار کرد." },
        { question: "Digital Detox یعنی چه؟", answer: "تلاش برای offline بودن به صورت منظم و دوری از گوشی." }
      ]
    }
  ],

  writing: [
    {
      title: "مزایا و معایب تکنولوژی",
      prompt: "یک متن کوتاه (۶-۷ جمله) درباره مزایا و معایب اینترنت یا شبکه‌های اجتماعی بنویسید.",
      steps: [
        { title: "مزایا", text: "از Einerseits شروع کنید.", example: { de: "Einerseits ist das Internet sehr nuetzlich.", fa: "از یک طرف اینترنت خیلی مفید است." } },
        { title: "معایب", text: "از Andererseits ادامه دهید.", example: { de: "Andererseits verbringen wir zu viel Zeit online.", fa: "از طرف دیگر وقت زیادی آنلاین می‌گذرانیم." } },
        { title: "نتیجه‌گیری", text: "نظر نهایی خود را بگویید.", example: { de: "Ich finde, wir sollten das Internet richtig nutzen.", fa: "فکر می‌کنم باید از اینترنت درست استفاده کنیم." } }
      ],
      modelAnswer: "Einerseits ist das Internet sehr praktisch. Man kann schnell Informationen finden und mit Freunden kommunizieren. Andererseits verbringen viele Menschen zu viel Zeit online. Zwar gibt es viele Vorteile, aber trotzdem sollten wir aufpassen. Ich finde, wir sollten das Internet richtig und bewusst nutzen."
    }
  ],

  listening: [
    {
      title: "۱. Digital Detox و زندگی آفلاین",
      source: "Easy German - Digital Detox",
      link: "https://www.youtube.com/watch?v=3JZ_DqEL7ig",
      instructions: "۱. ویدیو را ببینید و نکات کلیدی را یادداشت کنید.\n۲. سعی کنید نظر خود را بعد از تماشا بیان کنید."
    }
  ],

  speaking: [
    {
      title: "بحث درباره تکنولوژی",
      pattern: "Einerseits ist das Internet nuetzlich, andererseits...",
      exercise: "۳ دقیقه درباره مزایا و معایب شبکه‌های اجتماعی صحبت کنید. از Einerseits/Andererseits استفاده کنید."
    }
  ],

  cultureTip: "در آلمان بحث Datenschutz (حفاظت از داده‌ها) بسیار جدی است. GDPR (قوانین حفاظت از داده‌های اروپا) از آلمان آمده. آلمانی‌ها بسیار به حریم خصوصی اهمیت می‌دهند. همچنین پدیده Digital Detox (دوری داوطلبانه از تکنولوژی) در آلمان بسیار رایج شده.",

  examData: {
    questions: [
      { question: "برای بیان مزایا و معایب، کدام ساختار درست است؟", options: ["Zuerst/dann", "Einerseits/andererseits", "Heute/morgen", "Links/rechts"], answer: 1 },
      { question: "Datenschutz یعنی...", options: ["حفاظت از داده‌ها", "امنیت", "رمز عبور", "اینترنت"], answer: 0 },
      { question: "«herunterladen» یعنی...", options: ["آپلود کردن", "دانلود کردن", "پاک کردن", "ارسال کردن"], answer: 1 },
      { question: "Digital Detox یعنی...", options: ["استفاده بیشتر از گوشی", "دوری از تکنولوژی", "خرید گوشی جدید", "بازی کردن"], answer: 1 },
      { question: "«Zwar..., aber trotzdem...» یعنی...", options: ["اول... بعد...", "اگرچه... اما...", "چپ... راست...", "بله... نه..."], answer: 1 },
      { question: "Privatsphaere یعنی...", options: ["فضای عمومی", "حریم خصوصی", "شبکه اجتماعی", "اینترنت"], answer: 1 }
    ]
  }
};
