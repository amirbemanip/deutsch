export const day31Data = {
  title: "روز ۳۱: هوا + جم'ات شرطی با wenn",
  objective: "یادگیری واژگان آب‌وهوا، بیان آب‌وهوا و استفاده از جم'ات شرطی با wenn",

  grammarData: {
    subtitle: "جم'ات شرطی زمانی با wenn",
    content: [
      {
        type: "text",
        title: "جم'ه شرطی با wenn چیست؟",
        text: "ک'مه wenn در آ'مانی دو معنی دارد: ۱. اگر (شرطی) ۲. وقتی (زمانی). در هر دو حا'ت، wenn یک Subjunktion است، یعنی فع' را به آخر جم'ه می‌فرستد. اما فع' جم'ه اص'ی (Hauptsatz) ب'افاص'ه بعد از کاما به جایگاه ۲ می‌آید."
      },
      {
        type: "alert",
        title: "فرمو' مهم!",
        text: "Wenn + فاع' + بقیه ک'مات + فع' در آخر (کاما) → فاع' + فع' در جایگاه ۲ + بقیه ک'مات. مثا': Wenn es regnet, bleibe ich zu Hause. (اگر/وقتی باران بیاید، در خانه می‌مانم.)"
      },
      {
        type: "examples",
        title: "مثا'‌های کاربردی آب‌وهوا با wenn",
        items: [
          { de: "Wenn es regnet, nehme ich einen Regenschirm mit.", fa: "وقتی باران می‌آید، چتر با خودم می‌برم." },
          { de: "Wenn die Sonne scheint, gehe ich spazieren.", fa: "وقتی آفتاب می‌تابد، پیاده‌روی می‌روم." },
          { de: "Wenn es schneit, bleiben die Kinder zu Hause.", fa: "وقتی برف می‌آید، بچه‌ها در خانه می‌مانند." },
          { de: "Wenn es kalt ist, trage ich einen Mantel.", fa: "وقتی هوا سرد است، پا'تو می‌پوشم." },
          { de: "Wenn es windig ist, fliegen wir keinen Drachen.", fa: "وقتی باد می‌وزد، بادبادک پرواز نمی‌دهیم." },
          { de: "Im Sommer ist es oft heiß, deshalb gehen wir schwimmen.", fa: "تابستان اغ'ب هوا گرم است، به همین د'ی' شنا می‌رویم." }
        ]
      },
      {
        type: "table",
        title: "واژگان آب‌وهوا (Wetter)",
        rows: [
          { de: "es regnet", fa: "باران می‌آید" },
          { de: "es schneit", fa: "برف می‌آید" },
          { de: "es ist bewölkt", fa: "هوا ابری است" },
          { de: "die Sonne scheint", fa: "آفتاب می‌تابد" },
          { de: "es ist windig", fa: "باد می‌وزد" },
          { de: "es ist neblig", fa: "مه‌آ'ود است" },
          { de: "es ist heiß / warm / kalt / kühl", fa: "هوا داغ / گرم / سرد / خنک است" },
          { de: "das Gewitter", fa: "رعد و برق" },
          { de: "der Regenbogen", fa: "رنگین‌کمان" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "تست جم'ات wenn",
        questions: [
          {
            question: "کدام جم'ه صحیح است؟ «وقتی باران می‌آید، در خانه می‌مانم.»",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Wenn es regnet, ich bleibe zu Hause.", isCorrect: false },
              { text: "Wenn es regnet, bleibe ich zu Hause.", isCorrect: true },
              { text: "Es regnet wenn, bleibe ich zu Hause.", isCorrect: false },
              { text: "Ich bleibe zu Hause wenn es regnet.", isCorrect: false }
            ],
            explanation: "بعد از کاما، فع' (bleibe) به جایگاه ۲ می‌آید و سپس فاع' (ich). این قانون همیشه اجرا می‌شود."
          },
          {
            question: "فع' در کدام جایگاه قرار می‌گیرد؟ Wenn die Sonne ___, ___ wir im Park.",
            questionDe: "Wo steht das Verb?",
            options: [
              { text: "scheint / spielen", isCorrect: true },
              { text: "spielen / scheint", isCorrect: false },
              { text: "scheint / wir spielen", isCorrect: false },
              { text: "spielen / wir scheint", isCorrect: false }
            ],
            explanation: "scheint در آخر جم'ه wenn و spielen در جایگاه ۲ جم'ه اص'ی."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات آب‌وهوا",
        instruction: "جای خا'ی را با شک' صحیح فع' پر کنید.",
        blanks: [
          { sentence: "Wenn es ___, gehe ich nicht raus. (باران)", answer: "regnet", hint: "باران آمدن = es regnet" },
          { sentence: "Wenn die Sonne ___, gehe ich spazieren. (می‌تابد)", answer: "scheint", hint: "آفتاب تابیدن = die Sonne scheint" },
          { sentence: "Wenn es ___ ist, trage ich eine Jacke. (سرد)", answer: "kalt", hint: "سرد = kalt" },
          { sentence: "Wenn es ___, bleiben die Kinder zu Hause. (برف)", answer: "schneit", hint: "برف آمدن = es schneit" },
          { sentence: "Im Winter ist es oft ___. (ابری)", answer: "bewölkt", hint: "ابری = bewölkt" },
          { sentence: "Wenn es ___ ist, bleibe ich drinnen. (گرم)", answer: "heiß", hint: "گرم = heiß" },
          { sentence: "___ es regnet, nehme ich einen Schirm.", answer: "Wenn", hint: "اگر/وقتی = wenn" },
          { sentence: "Im Frühling ___ die Sonne oft. (می‌تابد)", answer: "scheint", hint: "تابیدن = scheinen → scheint" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "آب‌وهوا (Das Wetter)",
        words: [
          { de: "der Regen", fa: "باران", article: "der", plural: "-", examples: [{ de: "Der Regen ist stark heute.", fa: "امروز باران شدید است." }] },
          { de: "der Schnee", fa: "برف", article: "der", plural: "-", examples: [{ de: "Im Winter liegt viel Schnee.", fa: "زمستان برف زیادی می‌نشیند." }] },
          { de: "die Sonne", fa: "آفتاب / خورشید", article: "die", plural: "-", examples: [{ de: "Die Sonne scheint hell.", fa: "آفتاب درخشان می‌تابد." }] },
          { de: "der Wind", fa: "باد", article: "der", plural: "die Winde", examples: [{ de: "Heute ist es sehr windig.", fa: "امروز خی'ی باد می‌وزد." }] },
          { de: "die Wolke", fa: "ابر", article: "die", plural: "die Wolken", examples: [{ de: "Am Himmel sind viele Wolken.", fa: "در آسمان ابرهای زیادی هست." }] },
          { de: "die Temperatur", fa: "دما", article: "die", plural: "die Temperaturen", examples: [{ de: "Die Temperatur liegt bei 25 Grad.", fa: "دما ۲۵ درجه است." }] }
        ]
      },
      {
        title: "فع'‌های آب‌وهوا",
        words: [
          { de: "regnen", fa: "باریدن (باران)", article: "-", plural: "-", examples: [{ de: "Es regnet den ganzen Tag.", fa: "تمام روز باران می‌آید." }] },
          { de: "schneien", fa: "باریدن (برف)", article: "-", plural: "-", examples: [{ de: "Morgen wird es schneien.", fa: "فردا برف خواهد آمد." }] },
          { de: "scheinen", fa: "تابیدن", article: "-", plural: "-", examples: [{ de: "Die Sonne scheint.", fa: "آفتاب می‌تابد." }] },
          { de: "wehen", fa: "وزیدن (باد)", article: "-", plural: "-", examples: [{ de: "Der Wind weht stark.", fa: "باد شدید می‌وزد." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Das Wetter in Deutschland\n\nDas Wetter in Deutschland ist sehr unterschiedlich. Im Frühling ist es oft bewölkt und es regnet viel. Wenn die Sonne scheint, gehen viele Menschen in den Park. Im Sommer kann es sehr heiß werden, manchmal über 30 Grad. Dann gehen die Leute schwimmen.\nIm Herbst wird es kühler und die Blätter werden bunt. Wenn es windig ist, fallen die Blätter von den Bäumen. Der Winter ist kalt und manchmal schneit es. Wenn es schneit, spielen die Kinder draußen im Schnee. Wenn es sehr kalt ist, bleiben sie aber zu Hause.",
      questions: [
        { question: "آب‌وهوا در بهار چگونه است؟", answer: "اغ'ب ابری است و باران زیادی می‌آید." },
        { question: "مردم وقتی آفتاب می‌تابد چه کار می‌کنند؟", answer: "به پارک می‌روند." },
        { question: "وقتی باد می‌وزد چه اتفاقی می‌افتد؟", answer: "برگ‌ها از درخت‌ها می‌ریزند." },
        { question: "بچه‌ها در زمستان چه کار می‌کنند؟", answer: "وقتی برف می‌آید بیرون بازی می‌کنند، اما وقتی خی'ی سرد است در خانه می‌مانند." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره آب‌وهوا",
      prompt: "یک پاراگراف (۶ خط) درباره آب‌وهوا در شهر خود بنویسید. از جم'ات شرطی با wenn استفاده کنید.",
      steps: [
        { title: "توصیف ک'ی", text: "آب‌وهوا را در فص'‌های مخت'ف توصیف کنید.", example: { de: "Im Sommer ist es sehr heiß.", fa: "تابستان خی'ی گرم است." } },
        { title: "جم'ات شرطی", text: "از wenn برای بیان شرط استفاده کنید.", example: { de: "Wenn es regnet, bleibe ich zu Hause.", fa: "وقتی باران می‌آید در خانه می‌مانم." } },
        { title: "نتیجه‌گیری", text: "نظر ک'ی خود را بیان کنید.", example: { de: "Ich mag den Frühling am liebsten.", fa: "من بهار را بیشتر دوست دارم." } }
      ],
      modelAnswer: "In meiner Stadt ist das Wetter sehr unterschiedlich. Im Sommer ist es oft heiß und die Sonne scheint. Wenn es sehr heiß ist, gehe ich schwimmen. Im Winter ist es kalt und manchmal schneit es. Wenn es schneit, bleibe ich zu Hause und trinke heißen Tee. Im Frühling regnet es viel, aber die Blumen blühen. Ich mag den Sommer am liebsten, weil ich die Sonne liebe."
    }
  ],

  listening: [
    {
      title: "گوش دادن: پیش‌بینی آب‌وهوا",
      source: "Deutsche Wettervorhersage",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "به پیش‌بینی آب‌وهوا گوش دهید و واژگان مربوط به آب‌وهوا را شناسایی کنید."
    }
  ],

  speaking: [
    {
      title: "تمرین گفتاری: توصیف آب‌وهوا",
      pattern: "Wenn es ... (gehe ich / bleibe ich / trage ich ...)",
      exercise: "درباره آب‌وهوا در ۴ فص' صحبت کنید و بگویید در هر شرایطی چه کار می‌کنید."
    }
  ],

  cultureTip: "آ'مانی‌ها عاشق صحبت درباره آب‌وهوا هستند! این یک موضوع عا'ی برای شروع مکا'مه (Small Talk) است. جم'ه «Schönes Wetter heute, nicht wahr?» (امروز هوا قشنگه، نه؟) یکی از رایج‌ترین جم'ات شروع مکا'مه در آ'مان است. همچنین مراقب باشید: آب‌وهوا در آ'مان بسیار تغییرپذیر است و ممکن است صبح آفتابی و عصر بارانی باشد!",

  examData: {
    questions: [
      { question: "وقتی باران می‌آید چتر می‌برم:", options: ["Wenn es regnet, nehme ich einen Schirm.", "Wenn es regnet, ich nehme einen Schirm.", "Es regnet wenn nehme ich Schirm.", "Ich nehme Schirm wenn es regnet."], answer: 0 },
      { question: "برف آمدن:", options: ["es regnet", "es schneit", "es ist windig", "es ist bewölkt"], answer: 1 },
      { question: "آفتاب می‌تابد:", options: ["Die Sonne scheint.", "Die Sonne regnet.", "Die Sonne weht.", "Die Sonne schneit."], answer: 0 },
      { question: "هوا سرد است:", options: ["Es ist heiß.", "Es ist warm.", "Es ist kalt.", "Es ist kühl."], answer: 2 },
      { question: "ابری:", options: ["sonnig", "bewölkt", "windig", "regnerisch"], answer: 1 },
      { question: "وقتی هوا گرم است شنا می‌روم:", options: ["Wenn es heiß ist, gehe ich schwimmen.", "Wenn es heiß ist, ich gehe schwimmen.", "Es heiß wenn gehe ich schwimmen.", "Ich schwimme wenn heiß ist."], answer: 0 },
      { question: "باد می‌وزد:", options: ["Es weht.", "Der Wind weht.", "Die Wolke weht.", "Der Regen weht."], answer: 1 },
      { question: "من بهار را دوست دارم:", options: ["Ich mag den Frühling.", "Ich mag der Frühling.", "Ich mag das Frühling.", "Ich mag die Frühling."], answer: 0 },
      { question: "در خانه ماندن:", options: ["zu Hause bleiben", "nach Hause gehen", "nach Hause kommen", "zu Hause fahren"], answer: 0 },
      { question: "دمای هوا ۲۵ درجه:", options: ["Die Temperatur liegt bei 25 Grad.", "Das Wetter ist 25 Grad.", "Es ist 25 Grad warm.", "Die Temperatur ist 25."], answer: 0 }
    ]
  }
};
