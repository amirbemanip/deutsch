export const day15Data = {
  title: "روز ۱۵: هوا + فصول + اصطلاحات آب‌وهوایی",
  objective: "در پایان این روز، شما می‌توانید وضعیت هوا را توصیف کنید و درباره آب‌وهوا صحبت کنید.",
  level: "A1",
  grammarData: {
    subtitle: "هوا و فصول",
    content: [
      {
        type: "text",
        title: "افعال ناپرسشی (Impersonal) برای هوا",
        text: "در آلمانی برای بیان هوا از فعل ناپرسشی (es) استفاده می‌کنیم: es regnet (باران می‌بارد)، es schneit (برف می‌بارد)، es ist sonnig (آفتابی است)، es ist bewölkt (ابری است)، es ist windig (بادی است)، es ist nebelig (مه‌آلود است).",
        examples: [
          { de: "Es regnet.", fa: "باران می‌بارد." },
          { de: "Es schneit.", fa: "برف می‌بارد." },
          { de: "Es ist sonnig.", fa: "آفتابی است." },
          { de: "Es ist windig.", fa: "بادی است." }
        ]
      },
      {
        type: "table",
        title: "آب‌وهوا",
        rows: [
          { de: "Es regnet.", fa: "باران می‌بارد." },
          { de: "Es schneit.", fa: "برف می‌بارد." },
          { de: "Es hagelt.", fa: "تگرگ می‌بارد." },
          { de: "Es blitzt.", fa: "رعد و برق می‌زند." },
          { de: "Es donnert.", fa: "آسمان غرش می‌کند." },
          { de: "Es ist sonnig.", fa: "آفتابی است." },
          { de: "Es ist bewölkt.", fa: "ابری است." },
          { de: "Es ist nebelig.", fa: "مه‌آلود است." },
          { de: "Es ist windig.", fa: "بادی است." },
          { de: "Es ist neblig.", fa: "مه‌آلود است." }
        ]
      },
      {
        type: "table",
        title: "صفات هوایی",
        rows: [
          { de: "heiß", fa: "گرم" },
          { de: "warm", fa: "معتدل" },
          { de: "kalt", fa: "سرد" },
          { de: "kühl", fa: "خنک" },
          { de: "mild", fa: "ملایم" },
          { de: "schön", fa: "زیبا" },
          { de: "schrecklich", fa: "وحشتناک" },
          { de: "angenehm", fa: "دلپذیر" }
        ]
      },
      {
        type: "text",
        title: "دما و درجه حرارت",
        text: "برای گفتن دما: Es ist 20 Grad (بیست درجه است). برای مثبت و منفی: plus 20 Grad (بیست درجه بالای صفر)، minus 5 Grad (پنج درجه زیر صفر). در آلمانی از سلسیوس استفاده می‌شود."
      },
      {
        type: "text",
        title: "فصول و ویژگی‌ها",
        text: "بهار (der Frühling): Blumen blühen (گل‌ها شکوفه می‌دهند)، es ist mild (هوا ملایم است). تابستان (der Sommer): es ist warm/heiß (گرم است). پاییز (der Herbst): die Blätter fallen (برگ‌ها می‌ریزند). زمستان (der Winter): es schneit (برف می‌بارد)، es ist k cold (سرد است)."
      },
      {
        type: "examples",
        title: "مثال‌های توصیف هوا",
        items: [
          { de: "Wie ist das Wetter heute?", fa: "امروز هوا چطور است؟" },
          { de: "Heute ist es schön.", fa: "امروز هوا زیباست." },
          { de: "Es regnet heute.", fa: "امروز باران می‌بارد." },
          { de: "Im Sommer ist es immer warm.", fa: "تابستان‌ها همیشه گرم است." },
          { de: "Im Winter schneit es oft.", fa: "زمستان‌ها اغلب برف می‌بارد." }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین: هوا",
        instruction: "جملات را کامل کنید.",
        blanks: [
          { sentence: "Heute ___ es sonnig.", answer: "ist", hint: "است" },
          { sentence: "Im ___ ist es warm.", answer: "Sommer", hint: "تابستان" },
          { sentence: "Es ___ heute.", answer: "regnet", hint: "باران می‌بارد" },
          { sentence: "Im ___ fallen die Blätter.", answer: "Herbst", hint: "پاییز" },
          { sentence: "Es ist 25 ___ heute.", answer: "Grad", hint: "درجه" },
          { sentence: "Es ___ im Winter.", answer: "schneit", hint: "برف می‌بارد" },
          { sentence: "Wie ist das ___ heute?", answer: "Wetter", hint: "آب و هوا" },
          { sentence: "Es ist ___ und kalt.", answer: "windig", hint: "بادی" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: هوا",
        questions: [
          {
            question: "«باران می‌بارد» چگونه گفته می‌شود؟",
            questionDe: "Wie sagt man \"Es regnet\"?",
            options: [
              { text: "Es regnet.", isCorrect: true },
              { text: "Es regnet es.", isCorrect: false },
              { text: "Regnet es.", isCorrect: false },
              { text: "Es regnet nicht.", isCorrect: false }
            ],
            explanation: "افعال ناپرسشی با es شروع می‌شوند."
          },
          {
            question: "کدام برای تابستان است؟",
            questionDe: "Welche Jahreszeit ist der Sommer?",
            options: [
              { text: "der Sommer", isCorrect: true },
              { text: "der Winter", isCorrect: false },
              { text: "der Herbst", isCorrect: false },
              { text: "der Frühling", isCorrect: false }
            ],
            explanation: "تابستان = der Sommer"
          },
          {
            question: "«برف می‌بارد» چیست؟",
            questionDe: "Wie heißt \"Es schneit\"?",
            options: [
              { text: "Es schneit.", isCorrect: true },
              { text: "Es schneit es.", isCorrect: false },
              { text: "Schneit es.", isCorrect: false },
              { text: "Es ist Schnee.", isCorrect: false }
            ],
            explanation: "برف = der Schnee، می‌بارد = schneit"
          },
          {
            question: "«گرم» چیست؟",
            questionDe: "Wie heißt \"heiß\"?",
            options: [
              { text: "heiß", isCorrect: true },
              { text: "warm", isCorrect: false },
              { text: "kalt", isCorrect: false },
              { text: "kühl", isCorrect: false }
            ],
            explanation: "گرم داغ = heiß، گرم معتدل = warm"
          }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "افعال هوا",
        words: [
          { de: "regnen", fa: "بارانیدن", article: "", ipa: "[ˈʁeːɡnən]", conjugation: { ich:"es regnet", du:"es regnet", er:"es regnet", wir:"es regnet", ihr:"es regnet", sie:"es regnet" }, examples: [{ de: "Es regnet.", fa: "باران می‌بارد." }] },
          { de: "schneien", fa: "برفیدن", article: "", ipa: "[ˈʃnaɪən]", conjugation: { ich:"es schneit", du:"es schneit", er:"es schneit", wir:"es schneit", ihr:"es schneit", sie:"es schneit" }, examples: [{ de: "Es schneit.", fa: "برف می‌بارد." }] },
          { de: "blitzen", fa: "رعد زدن", article: "", ipa: "[ˈblɪtsən]", conjugation: { ich:"es blitzt", du:"es blitzt", er:"es blitzt", wir:"es blitzt", ihr:"es blitzt", sie:"es blitzt" }, examples: [{ de: "Es blitzt.", fa: "رعد می‌زند." }] },
          { de: "donnern", fa: "غرش کردن", article: "", ipa: "[ˈdɔnɐ̯nən]", conjugation: { ich:"es donnert", du:"es donnert", er:"es donnert", wir:"es donnert", ihr:"es donnert", sie:"es donnert" }, examples: [{ de: "Es donnert.", fa: "آسمان غرش می‌کند." }] },
          { de: "hageln", fa: "تگرگ ریختن", article: "", ipa: "[ˈhaːɡəln]", conjugation: { ich:"es hagelt", du:"es hagelt", er:"es hagelt", wir:"es hagelt", ihr:"es hagelt", sie:"es hagelt" }, examples: [{ de: "Es hagelt.", fa: "تگرگ می‌ریزد." }] }
        ]
      },
      {
        title: "صفات و کلمات هوایی",
        words: [
          { de: "das Wetter [ˈvɛtɐ̯]", fa: "آب و هوا", article: "das", examples: [{ de: "Das Wetter ist gut.", fa: "آب و هوا خوب است." }] },
          { de: "die Sonne [ˈzɔnə]", fa: "آفتاب", article: "die", plural: "die Sonnen", examples: [{ de: "Die Sonne scheint.", fa: "آفتاب می‌تابد." }] },
          { de: "der Regen [ˈʁeːɡən]", fa: "باران", article: "der", examples: [{ de: "Der Regen fällt.", fa: "باران می‌بارد." }] },
          { de: "der Schnee [ʃneː]", fa: "برف", article: "der", examples: [{ de: "Der Schnee ist weiß.", fa: "برف سفید است." }] },
          { de: "der Wind [vɪnt]", fa: "باد", article: "der", plural: "die Winde", examples: [{ de: "Der Wind weht.", fa: "باد می‌وزد." }] },
          { de: "die Wolke [ˈvɔlkə]", fa: "ابر", article: "die", plural: "die Wolken", examples: [{ de: "Die Wolken sind dunkel.", fa: "ابرها تاریک هستند." }] },
          { de: "der Nebel [ˈneːbəl]", fa: "مه", article: "der", examples: [{ de: "Der Nebel ist dicht.", fa: "مه غلیظ است." }] },
          { de: "der Blitz [blɪts]", fa: "رعد", article: "der", plural: "die Blitze", examples: [{ de: "Der Blitz leuchtet.", fa: "رعد می‌درخشد." }] },
          { de: "heiß [haɪs]", fa: "داغ/گرم", article: "", examples: [{ de: "Es ist heute sehr heiß.", fa: "امروز خیلی گرم است." }] },
          { de: "kalt [kalt]", fa: "سرد", article: "", examples: [{ de: "Im Winter ist es kalt.", fa: "زمستان سرد است." }] },
          { de: "warm [vaʁm]", fa: "گرم (معتدل)", article: "", examples: [{ de: "Der Sommer ist warm.", fa: "تابستان گرم است." }] },
          { de: "sonnig [ˈzɔnɪç]", fa: "آفتابی", article: "", examples: [{ de: "Es ist heute sonnig.", fa: "امروز آفتابی است." }] }
        ]
      },
      {
        title: "فصول",
        words: [
          { de: "der Frühling", fa: "بهار", article: "der", ipa: "[ˈfʁyːlɪŋ]", examples: [{ de: "Im Frühling blühen die Blumen.", fa: "بهار گل‌ها شکوفه می‌دهند." }] },
          { de: "der Sommer", fa: "تابستان", article: "der", ipa: "[ˈzɔmɐ̯]", examples: [{ de: "Im Sommer ist es warm.", fa: "تابستان گرم است." }] },
          { de: "der Herbst", fa: "پاییز", article: "der", ipa: "[hɛʁpst]", examples: [{ de: "Im Herbst fallen die Blätter.", fa: "پاییز برگ‌ها می‌ریزند." }] },
          { de: "der Winter", fa: "زمستان", article: "der", ipa: "[ˈvɪntɐ̯]", examples: [{ de: "Im Winter schneit es.", fa: "زمستان برف می‌بارد." }] },
          { de: "der Grad", fa: "درجه", article: "der", plural: "die Grade/Grad", ipa: "[ɡʁaːt]", examples: [{ de: "Es sind zwanzig Grad.", fa: "بیست درجه است." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Das Wetter heute. Am Montag ist es sonnig und warm. Die Temperatur ist zwanzig Grad. Am Dienstag regnet es. Es ist kühl. Am Mittwoch schneit es. Es ist sehr kalt. Am Donnerstag ist es bewölkt. Der Wind weht stark. Am Freitag ist es nebelig. Man kann kaum sehen. Am Wochenende wird es wieder sonnig.",
      translation: "آب و هوای امروز. دوشنبه آفتابی و گرم است. دما بیست درجه است. سه‌شنبه باران می‌بارد. خنک است. چهارشنبه برف می‌بارد. خیلی سرد است. پنج‌شنبه ابری است. باد شدید می‌وزد. جمعه مه‌آلود است. تقریباً نمی‌توان دید. آخر هفته دوباره آفتابی می‌شود.",
      questions: [
        { question: "دوشنبه هوا چطور بود؟", answer: "آفتابی و گرم" },
        { question: "چهارشنبه چه خبر بود؟", answer: "برف می‌بارد و سرد بود" },
        { question: "جمعه هوا چطور بود؟", answer: "مه‌آلود" }
      ]
    },
    {
      text: "Gespräch über das Wetter. Tom: Wie ist das Wetter bei euch? Anna: Bei uns ist es heute sehr schön. Die Sonne scheint und es ist warm. Tom: Bei uns regnet es leider. Es ist kalt und windig. Anna: Das tut mir leid. Wie viel Grad sind es bei dir? Tom: Nur zehn Grad. Anna: Das ist kühl. Hier sind es fünfundzwanzig Grad.",
      translation: "گفتگو درباره هوا. توم: هوای شما چطور است؟ آنا: اینجا امروز خیلی زیباست. آفتاب می‌تابد و گرم است. توم: متأسفانه اینجا باران می‌بارد. سرد و بادی است. آنا: متأسفم. چند درجه است؟ توم: فقط ده درجه. آنا: خنک است. اینجا بیست و پنج درجه است.",
      questions: [
        { question: "هوای آنا چطور است؟", answer: "آفتابی و گرم" },
        { question: "دمای توم چند است؟", answer: "ده درجه" }
      ]
    }
  ],
  writing: [
    {
      title: "توصیف هوا",
      prompt: "هوای امروز را بنویسید یا بهترین و بدترین هوایی که دیده‌اید.",
      steps: [
        { title: "هوای فعلی", text: "الان هوا چطور است؟", example: { de: "Heute ist es sonnig.", fa: "امروز آفتابی است." } },
        { title: "دما", text: "چند درجه است؟", example: { de: "Es sind 20 Grad.", fa: "بیست درجه است." } },
        { title: "حس شما", text: "هوا را دوست دارید؟", example: { de: "Ich mag warmes Wetter.", fa: "هوای گرم را دوست دارم." } }
      ],
      modelAnswer: "Heute ist das Wetter sehr schön. Die Sonne scheint und es ist warm. Es sind 22 Grad. Ich gehe gern spazieren, wenn das Wetter so gut ist. Im Winter mag ich den Schnee, aber im Sommer ist mir manchmal zu heiß."
    }
  ],
  listening: [
    {
      title: "گوش دادن به توصیف هوا",
      instruction: "به توصیف هوا گوش دهید و آب و هوا را بنویسید.",
      sentences: [
        { de: "Es regnet heute.", fa: "امروز باران می‌بارد.", tts: "Es regnet heute." },
        { de: "Es ist sehr kalt.", fa: "خیلی سرد است.", tts: "Es ist sehr kalt." },
        { de: "Die Sonne scheint.", fa: "آفتاب می‌تابد.", tts: "Die Sonne scheint." },
        { de: "Es schneit.", fa: "برف می‌بارد.", tts: "Es schneit." }
      ]
    }
  ],
  speaking: [
    {
      title: "توصیف هوا",
      pattern: "Es ist [گرم/سرد/آفتابی]. Es regnet/schneit.",
      exercise: "هوای امروز، دیروز و فردا را توصیف کنید."
    }
  ],
  cultureTip: "آلمان آب و هوای متنوعی دارد. تابستان‌ها گرم و محدود است (ژوئن تا آگوست). زمستان‌ها سرد و گاهی برفی است. آلمانی‌ها عاشق صحبت درباره هوا هستند - این موضوع مکالمه را شروع می‌کند. در تابستان، مردم از اسکندریا استفاده می‌کنند.",
  examData: {
    questions: [
      { question: "«باران می‌بارد» چیست؟", options: ["Es regnet", "Es regnet", "Es regnen", "Regnet es"], answer: 0 },
      { question: "«تابستان» چیست؟", options: ["der Sommer", "der Winter", "der Herbst", "der Frühling"], answer: 0 },
      { question: "«آفتابی» چیست؟", options: ["sonnig", "heiß", "warm", "schön"], answer: 0 },
      { question: "کدام برای برف است؟", options: ["schneien", "regnen", "blitzen", "donnern"], answer: 0 },
      { question: "«درجه» چیست؟", options: ["der Grad", "die Grad", "das Grad", "Grad"], answer: 0 },
      { question: "«گرم داغ» چیست؟", options: ["heiß", "warm", "kalt", "kühl"], answer: 0 },
      { question: "«باد» چیست؟", options: ["der Wind", "die Wind", "das Wind", "Winde"], answer: 0 },
      { question: "«مه» چیست؟", options: ["der Nebel", "die Nebel", "das Nebel", "Nebel"], answer: 0 },
      { question: "کدام برای رعد است؟", options: ["blitzen", "donnern", "regnen", "schneien"], answer: 0 },
      { question: "«ده درجه» چگونه گفته می‌شود؟", options: ["zehn Grad", "zehn Grade", "zehn Graden", "Zehn Grad"], answer: 0 }
    ]
  }
};