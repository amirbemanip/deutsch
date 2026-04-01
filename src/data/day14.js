export const day14Data = {
  title: "روز ۱۴: آب و هوا و فص'‌ها - توصیف هوا",
  objective: "یادگیری توصیف آب و هوا، فع'‌های مربوط به هوا و فص'‌ها",
  grammarData: {
    subtitle: "آب و هوا و فص'‌ها",
    content: [
      {
        type: "text",
        title: "فع'‌های بدون فاع' (Impersonal Verbs)",
        text: "در آ'مانی برای توصیف آب و هوا از فع'‌های بدون فاع' استفاده می‌شود. فاع' همیشه 'es' است: es regnet (باران می‌بارد)، es schneit (برف می‌بارد)، es ist heiß/schön/kalt (هوا گرم/خوب/سرد است)."
      },
      {
        type: "table",
        title: "فع'‌های آب و هوا",
        rows: [
          { de: "es regnet", fa: "باران می‌بارد" },
          { de: "es schneit", fa: "برف می‌بارد" },
          { de: "es blitzt", fa: "برق می‌زند" },
          { de: "es donnert", fa: "رعد می‌زند" },
          { de: "es ist sonnig", fa: "هوا آفتابی است" },
          { de: "es ist bewölkt", fa: "هوا ابری است" },
          { de: "es ist windig", fa: "هوا بادی است" },
          { de: "es ist neblig", fa: "هوا مه‌آ'ود است" },
          { de: "es ist heiß", fa: "هوا گرم است" },
          { de: "es ist kalt", fa: "هوا سرد است" },
          { de: "es ist warm", fa: "هوا گرم است" },
          { de: "es ist kühl", fa: "هوا خنک است" }
        ]
      },
      {
        type: "text",
        title: "توصیف هوا با صفت",
        text: "برای توصیف هوا از صفت‌ها با فع' sein استفاده می‌شود: Heute ist es sonnig (امروز هوا آفتابی است). Morgen wird es regnen (فردا باران خواهد بارید). Die Temperatur beträgt 20 Grad (دما ۲۰ درجه است)."
      },
      {
        type: "examples",
        title: "جم'ات آب و هوا",
        items: [
          { de: "Wie ist das Wetter heute?", fa: "امروز هوا چطور است؟" },
          { de: "Heute ist es sonnig und warm.", fa: "امروز هوا آفتابی و گرم است." },
          { de: "Morgen wird es regnen.", fa: "فردا باران خواهد بارید." },
          { de: "Es ist 25 Grad.", fa: "هوا ۲۵ درجه است." },
          { de: "Im Winter ist es oft kalt.", fa: "در زمستان اغ'ب سرد است." },
          { de: "Im Sommer ist es heiß.", fa: "در تابستان هوا گرم است." },
          { de: "Die Sonne scheint.", fa: "خورشید می‌تابد." },
          { de: "Der Wind weht stark.", fa: "باد شدید می‌وزد." }
        ]
      },
      {
        type: "alert",
        title: "نکته: فص'‌ها و هوا",
        text: "در هر فص' آب و هوای معمو' آن فص' را بیان می‌کنیم: بهار (warm, sonnig)، تابستان (heiß, sonnig)، پاییز (kühl, regnerisch)، زمستان (kalt, schneereich)."
      },
      {
        type: "text",
        title: "فص'‌ها و ویژگی‌هایشان",
        text: "در آ'مان، فص'‌ها تأثیر زیادی بر زندگی مردم دارند. در زمستان کریسمس جشن گرفته می‌شود. در بهار جشن‌های عید پاک برگزار می‌شود. در تابستان مردم به تعطی'ات می‌روند و در پاییز جشن‌های برداشت محصو' برگزار می‌شود."
      },
      {
        type: "interactive_quiz",
        title: "آزمون: آب و هوا",
        questions: [
          {
            question: "'باران می‌بارد' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'it rains'?",
            options: [
              { text: "es regnet", isCorrect: true },
              { text: "es schneit", isCorrect: false },
              { text: "es blitzt", isCorrect: false },
              { text: "es donnert", isCorrect: false }
            ],
            explanation: "es regnet به معنای باران می‌بارد است."
          },
          {
            question: "'هوا آفتابی است' چگونه گفته می‌شود؟",
            questionDe: "Wie sagt man 'it is sunny'?",
            options: [
              { text: "Es ist sonnig.", isCorrect: true },
              { text: "Es ist regnerisch.", isCorrect: false },
              { text: "Es ist windig.", isCorrect: false },
              { text: "Es ist bewölkt.", isCorrect: false }
            ],
            explanation: "sonnig صفت آفتابی است."
          },
          {
            question: "'در زمستان سرد است' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'in winter it is cold'?",
            options: [
              { text: "Im Winter ist es kalt.", isCorrect: true },
              { text: "Im Winter schneit es.", isCorrect: false },
              { text: "Im Winter regnet es.", isCorrect: false },
              { text: "Im Winter ist es heiß.", isCorrect: false }
            ],
            explanation: "از im + فص' و ist es + صفت استفاده می‌شود."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات: آب و هوا",
        instruction: "جای خا'ی را با ک'مه مناسب پر کنید.",
        blanks: [
          { sentence: "Heute ist es ___.", answer: "sonnig", hint: "آفتابی" },
          { sentence: "Es ___ heute.", answer: "regnet", hint: "باران می‌بارد" },
          { sentence: "Im Winter ist es ___.", answer: "kalt", hint: "سرد" },
          { sentence: "Morgen wird es ___.", answer: "schneien", hint: "برف خواهد بارید" },
          { sentence: "Es ist 25 ___.", answer: "Grad", hint: "درجه" },
          { sentence: "Die Sonne ___.", answer: "scheint", hint: "می‌تابد" },
          { sentence: "Im Sommer ist es ___.", answer: "heiß", hint: "گرم" },
          { sentence: "Der Wind weht ___.", answer: "stark", hint: "شدید" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "فع'‌های آب و هوا",
        words: [
          { de: "regnen", fa: "باریدن (باران)", article: "-", plural: "-", examples: [{ de: "Es regnet heute.", fa: "امروز باران می‌بارد." }] },
          { de: "schneien", fa: "باریدن (برف)", article: "-", plural: "-", examples: [{ de: "Im Winter schneit es oft.", fa: "در زمستان اغ'ب برف می‌بارد." }] },
          { de: "blitzen", fa: "برق زدن", article: "-", plural: "-", examples: [{ de: "Es blitzt und donnert.", fa: "برق و رعد می‌زند." }] },
          { de: "donnern", fa: "رعد زدن", article: "-", plural: "-", examples: [{ de: "Es donnert stark.", fa: "رعد شدید می‌زند." }] },
          { de: "scheinen", fa: "تابیدن", article: "-", plural: "-", examples: [{ de: "Die Sonne scheint.", fa: "خورشید می‌تابد." }] },
          { de: "wehen", fa: "وزیدن (باد)", article: "-", plural: "-", examples: [{ de: "Der Wind weht.", fa: "باد می‌وزد." }] }
        ]
      },
      {
        title: "صفت‌های آب و هوا",
        words: [
          { de: "sonnig", fa: "آفتابی", article: "-", plural: "-", examples: [{ de: "Heute ist es sonnig.", fa: "امروز آفتابی است." }] },
          { de: "bewölkt", fa: "ابری", article: "-", plural: "-", examples: [{ de: "Morgen wird es bewölkt.", fa: "فردا ابری خواهد بود." }] },
          { de: "regnerisch", fa: "بارانی", article: "-", plural: "-", examples: [{ de: "Das Wetter ist regnerisch.", fa: "هوا بارانی است." }] },
          { de: "windig", fa: "بادی", article: "-", plural: "-", examples: [{ de: "Heute ist es sehr windig.", fa: "امروز خی'ی بادی است." }] },
          { de: "neblig", fa: "مه‌آ'ود", article: "-", plural: "-", examples: [{ de: "Am Morgen ist es neblig.", fa: "صبح مه‌آ'ود است." }] },
          { de: "heiß", fa: "گرم", article: "-", plural: "-", examples: [{ de: "Im Sommer ist es heiß.", fa: "در تابستان گرم است." }] },
          { de: "kalt", fa: "سرد", article: "-", plural: "-", examples: [{ de: "Im Winter ist es kalt.", fa: "در زمستان سرد است." }] },
          { de: "warm", fa: "گرم (مطبوع)", article: "-", plural: "-", examples: [{ de: "Der Frühling ist warm.", fa: "بهار گرم است." }] },
          { de: "kühl", fa: "خنک", article: "-", plural: "-", examples: [{ de: "Der Herbst ist kühl.", fa: "پاییز خنک است." }] },
          { de: "schön", fa: "زیبا/خوب", article: "-", plural: "-", examples: [{ de: "Das Wetter ist schön.", fa: "هوا خوب است." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Das Wetter in Deutschland: Im Frühling ist das Wetter oft wechselhaft. Manchmal scheint die Sonne, manchmal regnet es. Im Sommer ist es heiß und sonnig. Die Temperaturen sind oft 25 bis 30 Grad. Im Herbst wird es kühl und regnerisch. Die Blätter werden bunt und fallen von den Bäumen. Im Winter ist es kalt und oft schneit es. Die Temperaturen sind oft unter null Grad.",
      questions: [
        { question: "در بهار هوا چطور است؟", answer: "در بهار هوا متغیر است: گاهی آفتابی و گاهی بارانی." },
        { question: "در تابستان دما چقدر است؟", answer: "در تابستان دما اغ'ب ۲۵ تا ۳۰ درجه است." },
        { question: "در پاییز چه اتفاقی برای برگ‌ها می‌افتد؟", answer: "برگ‌ها رنگارنگ می‌شوند و از درخت‌ها می‌ریزند." },
        { question: "در زمستان دما چقدر است؟", answer: "در زمستان دما اغ'ب زیر صفر درجه است." }
      ]
    }
  ],
  writing: [
    {
      title: "توصیف آب و هوا در یک هفته",
      prompt: "آب و هوای یک هفته را توصیف کنید: هر روز هوا چطور است و دما چقدر است.",
      steps: [
        { title: "قدم او': معرفی", text: "جم'ه او' هفته را معرفی کنید.", example: { de: "Das Wetter in dieser Woche:", fa: "آب و هوا در این هفته:" } },
        { title: "قدم دوم: توصیف روزها", text: "هر روز را با آب و هوا و دما توصیف کنید.", example: { de: "Am Montag ist es sonnig und 20 Grad.", fa: "دوشنبه هوا آفتابی و ۲۰ درجه است." } },
        { title: "قدم سوم: نتیجه‌گیری", text: "خ'اصه آب و هوای هفته.", example: { de: "Das Wetter ist sehr schön diese Woche.", fa: "آب و هوا در این هفته خی'ی خوب است." } }
      ],
      modelAnswer: "Das Wetter in dieser Woche:\n\nAm Montag ist es sonnig und warm. Die Temperatur beträgt 22 Grad.\nAm Dienstag ist es bewölkt, aber es regnet nicht. Es ist 18 Grad.\nAm Mittwoch regnet es den ganzen Tag. Es ist nur 15 Grad.\nAm Donnerstag ist es neblig am Morgen, aber nachmittags scheint die Sonne. Es ist 19 Grad.\nAm Freitag ist es windig und kühl. Es ist 14 Grad.\nAm Samstag ist es sonnig und schön. Es ist 21 Grad.\nAm Sonntag ist es warm und sonnig. Es ist 24 Grad.\n\nDas Wetter ist sehr schön diese Woche, besonders am Wochenende!"
    }
  ],
  listening: [
    {
      title: "گوش دادن به گزارش آب و هوا",
      source: "Deutsch lernen - Wetterbericht",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "به گزارش آب و هوا گوش دهید و آب و هوای هر روز و دما را یادداشت کنید."
    }
  ],
  speaking: [
    {
      title: "توصیف آب و هوا",
      pattern: "A: Wie ist das Wetter heute?\nB: Heute ist es [Adjektiv]. Die Temperatur beträgt [Zahl] Grad.\nA: Und morgen?\nB: Morgen wird es [Verb/Adjektiv].",
      exercise: "آب و هوای امروز و فردا را توصیف کنید."
    }
  ],
  cultureTip: "آ'مانی‌ها عاشق صحبت درباره آب و هوا هستند! این یک موضوع مکا'مه رایج است. در آ'مان، آب و هوا می‌تواند در یک روز تغییر کند، به همین د'ی' مردم اغ'ب چتر با خود حم' می‌کنند. هواشناسی آ'مان (Deutscher Wetterdienst) بسیار دقیق است.",
  examData: {
    questions: [
      { question: "'باران می‌بارد' چگونه بیان می‌شود؟", options: ["es regnet", "es schneit", "es blitzt", "es donnert"], answer: 0 },
      { question: "'هوا آفتابی است' چگونه گفته می‌شود؟", options: ["Es ist sonnig.", "Es ist regnerisch.", "Es ist windig.", "Es ist bewölkt."], answer: 0 },
      { question: "'در زمستان سرد است' چگونه بیان می‌شود؟", options: ["Im Winter ist es kalt.", "Im Winter schneit es.", "Im Winter regnet es.", "Im Winter ist es heiß."], answer: 0 },
      { question: "'برف می‌بارد' چگونه بیان می‌شود؟", options: ["es schneit", "es regnet", "es blitzt", "es donnert"], answer: 0 },
      { question: "کدام صفت برای تابستان مناسب است؟", options: ["heiß", "kalt", "kühl", "neblig"], answer: 0 },
      { question: "'خورشید می‌تابد' چگونه بیان می‌شود؟", options: ["Die Sonne scheint.", "Die Sonne regnet.", "Die Sonne schneit.", "Die Sonne weht."], answer: 0 },
      { question: "کدام فص' سرد و برفی است؟", options: ["der Winter", "der Sommer", "der Frühling", "der Herbst"], answer: 0 },
      { question: "'هوا ۲۵ درجه است' چگونه بیان می‌شود؟", options: ["Es ist 25 Grad.", "Es ist 25 Uhr.", "Es ist 25 Meter.", "Es ist 25 Kilo."], answer: 0 }
    ]
  }
};