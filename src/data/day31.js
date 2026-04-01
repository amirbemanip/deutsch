export const day31Data = {
  title: "روز ۳۱: جملات شرطی زمانی با wenn + آب‌وهوا",
  objective: "یادگیری کاربرد wenn به معنی «اگر/وقتی»، جمله‌بندی شرطی زمانی و توصیف آب‌وهوا به آلمانی",
  level: "A2",

  grammarData: {
    subtitle: "جملات شرطی زمانی با wenn",
    content: [
      {
        type: "text",
        title: "جمله شرطی با wenn چیست؟",
        text: "کلمه wenn در آلمانی دو معنی دارد: ۱. اگر (شرطی) ۲. وقتی (زمانی). در هر دو حالت، wenn یک Subjunktion است یعنی فعل را به آخر جمله می‌فرستد. اما فعل جمله اصلی (Hauptsatz) بلافاصله بعد از کاما به جایگاه ۲ می‌آید. این قانون همیشه باید رعایت شود."
      },
      {
        type: "alert",
        title: "فرمول مهم!",
        text: "Wenn + فاعل + بقیه کلمات + فعل در آخر (کاما) → فاعل + فعل در جایگاه ۲ + بقیه کلمات. مثال: Wenn es regnet, bleibe ich zu Hause. (اگر/وقتی باران بیاید، در خانه می‌مانم.)"
      },
      {
        type: "table",
        title: "جدول ساختار wenn",
        rows: [
          { de: "Wenn es regnet, bleibe ich zu Hause.", fa: "وقتی باران می‌آید، در خانه می‌مانم." },
          { de: "Wenn die Sonne scheint, gehe ich spazieren.", fa: "وقتی آفتاب می‌تابد، پیاده‌روی می‌روم." },
          { de: "Wenn es schneit, spielen die Kinder.", fa: "وقتی برف می‌آید، بچه‌ها بازی می‌کنند." },
          { de: "Wenn ich Zeit habe, koche ich gern.", fa: "وقتی وقت دارم، دوست دارم آشپزی کنم." },
          { de: "Ich bleibe zu Hause, wenn es regnet.", fa: "در خانه می‌مانم، وقتی باران می‌آید." }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های کاربردی آب‌وهوا با wenn",
        items: [
          { de: "Wenn es regnet, nehme ich einen Regenschirm mit.", fa: "وقتی باران می‌آید، چتر با خودم می‌برم." },
          { de: "Wenn die Sonne scheint, gehe ich spazieren.", fa: "وقتی آفتاب می‌تابد، پیاده‌روی می‌روم." },
          { de: "Wenn es schneit, bleiben die Kinder zu Hause.", fa: "وقتی برف می‌آید، بچه‌ها در خانه می‌مانند." },
          { de: "Wenn es kalt ist, trage ich einen Mantel.", fa: "وقتی هوا سرد است، پالتو می‌پوشم." },
          { de: "Wenn es windig ist, fliegen wir keinen Drachen.", fa: "وقتی باد می‌وزد، بادبادک پرواز نمی‌دهیم." },
          { de: "Im Sommer ist es oft heiß, deshalb gehen wir schwimmen.", fa: "تابستان اغلب هوا گرم است، به همین دلیل شنا می‌رویم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "تست جملات wenn",
        questions: [
          {
            question: "کدام جمله صحیح است؟ «وقتی باران می‌آید، در خانه می‌مانم.»",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Wenn es regnet, ich bleibe zu Hause.", isCorrect: false },
              { text: "Wenn es regnet, bleibe ich zu Hause.", isCorrect: true },
              { text: "Es regnet wenn, bleibe ich zu Hause.", isCorrect: false },
              { text: "Ich bleibe zu Hause wenn es regnet.", isCorrect: false }
            ],
            explanation: "بعد از کاما، فعل (bleibe) به جایگاه ۲ می‌آید و سپس فاعل (ich). این قانون همیشه اجرا می‌شود."
          },
          {
            question: "فعل در کدام جایگاه قرار می‌گیرد؟ Wenn die Sonne ___, ___ wir im Park.",
            questionDe: "Wo steht das Verb?",
            options: [
              { text: "scheint / spielen", isCorrect: true },
              { text: "spielen / scheint", isCorrect: false },
              { text: "scheint / wir spielen", isCorrect: false },
              { text: "spielen / wir scheint", isCorrect: false }
            ],
            explanation: "scheint در آخر جمله wenn و spielen در جایگاه ۲ جمله اصلی."
          },
          {
            question: "کدام جمله با آب‌وهوا درست است؟",
            questionDe: "Welcher Wetter-Satz ist korrekt?",
            options: [
              { de: "Wenn es schneit, spielen die Kinder im Schnee.", isCorrect: true },
              { de: "Wenn es schneit, die Kinder spielen im Schnee.", isCorrect: false },
              { de: "Die Kinder spielen im Schnee wenn schneit es.", isCorrect: false },
              { de: "Im Schnee wenn es schneit spielen die Kinder.", isCorrect: false }
            ],
            explanation: "وقتی جمله با wenn شروع می‌شود، فعل (spielen) بعد از کاما در جایگاه ۲ می‌آید."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمیل جملات آب‌وهوا",
        instruction: "جای خالی را با شکل صحیح فعل پر کنید.",
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
          { de: "der Regen", fa: "باران", ipa: "[ˈʁeːɡn̩]", article: "der", plural: "-", examples: [{ de: "Der Regen ist stark heute.", fa: "امروز باران شدید است." }] },
          { de: "der Schnee", fa: "برف", ipa: "[ʃneː]", article: "der", plural: "-", examples: [{ de: "Im Winter liegt viel Schnee.", fa: "زمستان برف زیادی می‌نشیند." }] },
          { de: "die Sonne", fa: "آفتاب / خورشید", ipa: "[ˈzɔnə]", article: "die", plural: "-", examples: [{ de: "Die Sonne scheint hell.", fa: "آفتاب درخشان می‌تابد." }] },
          { de: "der Wind", fa: "باد", ipa: "[vɪnt]", article: "der", plural: "die Winde", examples: [{ de: "Heute ist es sehr windig.", fa: "امروز خیلی باد می‌وزد." }] },
          { de: "die Wolke", fa: "ابر", ipa: "[ˈvɔlkə]", article: "die", plural: "die Wolken", examples: [{ de: "Am Himmel sind viele Wolken.", fa: "در آسمان ابرهای زیادی هست." }] },
          { de: "die Temperatur", fa: "دما", ipa: "[tɛmpɛʁaˈtuːɐ̯]", article: "die", plural: "die Temperaturen", examples: [{ de: "Die Temperatur liegt bei 25 Grad.", fa: "دما ۲۵ درجه است." }] },
          { de: "der Nebel", fa: "مه", ipa: "[ˈneːbl̩]", article: "der", plural: "-", examples: [{ de: "Am Morgen ist viel Nebel.", fa: "صبح مه زیادی هست." }] },
          { de: "das Gewitter", fa: "رعد و برق", ipa: "[ɡəˈvɪtɐ]", article: "das", plural: "die Gewitter", examples: [{ de: "Heute Abend gibt es ein Gewitter.", fa: "امشب رعد و برق خواهد آمد." }] },
          { de: "der Regenbogen", fa: "رنگین‌کمان", ipa: "[ˈʁeːɡn̩ˌboːɡn̩]", article: "der", plural: "die Regenbögen", examples: [{ de: "Nach dem Regen sieht man einen Regenbogen.", fa: "بعد از باران رنگین‌کمان دیده می‌شود." }] },
          { de: "die Jahreszeit", fa: "فصل", ipa: "[ˈjaːʁəsˌtsaɪ̯t]", article: "die", plural: "die Jahreszeiten", examples: [{ de: "Der Frühling ist meine Lieblingsjahreszeit.", fa: "بهار فصل مورد علاقه من است." }] }
        ]
      },
      {
        title: "فعل‌های آب‌وهوا",
        words: [
          { de: "regnen", fa: "باریدن (باران)", ipa: "[ˈʁeːɡn̩]", article: "-", plural: "-", conjugation: { ich: "regne", du: "regnst", er: "regnet", wir: "regnen", ihr: "regnet", sie: "regnen" }, examples: [{ de: "Es regnet den ganzen Tag.", fa: "تمام روز باران می‌آید." }] },
          { de: "schneien", fa: "باریدن (برف)", ipa: "[ˈʃnaɪ̯ən]", article: "-", plural: "-", conjugation: { ich: "schneie", du: "schneist", er: "schneit", wir: "schneien", ihr: "schneit", sie: "schneien" }, examples: [{ de: "Morgen wird es schneien.", fa: "فردا برف خواهد آمد." }] },
          { de: "scheinen", fa: "تابیدن", ipa: "[ˈʃaɪ̯nən]", article: "-", plural: "-", conjugation: { ich: "scheine", du: "scheinst", er: "scheint", wir: "scheinen", ihr: "scheint", sie: "scheinen" }, examples: [{ de: "Die Sonne scheint.", fa: "آفتاب می‌تابد." }] },
          { de: "wehen", fa: "وزیدن (باد)", ipa: "[ˈveːən]", article: "-", plural: "-", conjugation: { ich: "wehe", du: "wehst", er: "weht", wir: "wehen", ihr: "weht", sie: "wehen" }, examples: [{ de: "Der Wind weht stark.", fa: "باد شدید می‌وزد." }] },
          { de: "frieren", fa: "یخ زدن / سردشدن", ipa: "[ˈfʁiːʁən]", article: "-", plural: "-", conjugation: { ich: "friere", du: "frierst", er: "friert", wir: "frieren", ihr: "friert", sie: "frieren" }, examples: [{ de: "Heute friert es draußen.", fa: "امروز بیرون خیلی سرد است." }] }
        ]
      },
      {
        title: "صفات آب‌وهوا",
        words: [
          { de: "sonnig", fa: "آفتابی", ipa: "[ˈzɔnɪç]", article: "-", plural: "-", examples: [{ de: "Heute ist ein sonniger Tag.", fa: "امروز روز آفتابی است." }] },
          { de: "bewölkt", fa: "ابری", ipa: "[bəˈvœlkt]", article: "-", plural: "-", examples: [{ de: "Der Himmel ist bewölkt.", fa: "آسمان ابری است." }] },
          { de: "windig", fa: "بادی", ipa: "[ˈvɪndɪç]", article: "-", plural: "-", examples: [{ de: "Es ist sehr windig heute.", fa: "امروز خیلی بادی است." }] },
          { de: "neblig", fa: "مه‌آلود", ipa: "[ˈneːblɪç]", article: "-", plural: "-", examples: [{ de: "Am Morgen ist es neblig.", fa: "صبح مه‌آلود است." }] },
          { de: "regnerisch", fa: "بارانی", ipa: "[ˈʁeːɡnəʁɪʃ]", article: "-", plural: "-", examples: [{ de: "Das Wochenende wird regnerisch.", fa: "آخر هفته بارانی خواهد بود." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Das Wetter in Deutschland\n\nDas Wetter in Deutschland ist sehr unterschiedlich. Im Frühling ist es oft bewölkt und es regnet viel. Wenn die Sonne scheint, gehen viele Menschen in den Park. Im Sommer kann es sehr heiß werden, manchmal über 30 Grad. Dann gehen die Leute schwimmen.\nIm Herbst wird es kühler und die Blätter werden bunt. Wenn es windig ist, fallen die Blätter von den Bäumen. Der Winter ist kalt und manchmal schneit es. Wenn es schneit, spielen die Kinder draußen im Schnee. Wenn es sehr kalt ist, bleiben sie aber zu Hause.",
      translation: "آب‌وهوا در آلمان\n\nآب‌وهوا در آلمان بسیار متفاوت است. در بهار اغلب ابری است و باران زیادی می‌آید. وقتی آفتاب می‌تابد، خیلی از مردم به پارک می‌روند. در تابستان ممکن است خیلی گرم شود، گاهی بیش از ۳۰ درجه. آنوقت مردم شنا می‌روند.\nدر پاییز هوا خنک‌تر می‌شود و برگ‌ها رنگارنگ می‌شوند. وقتی باد می‌وزد، برگ‌ها از درختان می‌افتند. زمستان سرد است و گاهی برف می‌آید. وقتی برف می‌آید، بچه‌ها بیرون در برف بازی می‌کنند. اما وقتی خیلی سرد است، در خانه می‌مانند.",
      questions: [
        { question: "آب‌وهوا در بهار چگونه است؟", answer: "اغلب ابری است و باران زیادی می‌آید." },
        { question: "مردم وقتی آفتاب می‌تابد چه کار می‌کنند؟", answer: "به پارک می‌روند." },
        { question: "وقتی باد می‌وزد چه اتفاقی می‌افتد؟", answer: "برگ‌ها از درختان می‌ریزند." },
        { question: "بچه‌ها در زمستان چه کار می‌کنند؟", answer: "وقتی برف می‌آید بیرون بازی می‌کنند، اما وقتی خیلی سرد است در خانه می‌مانند." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره آب‌وهوا",
      prompt: "یک پاراگراف (۶ خط) درباره آب‌وهوا در شهر خود بنویسید. از جملات شرطی با wenn استفاده کنید.",
      steps: [
        { title: "توصیف کلی", text: "آب‌وهوا را در فصل‌های مختلف توصیف کنید.", example: { de: "Im Sommer ist es sehr heiß.", fa: "تابستان خیلی گرم است." } },
        { title: "جملات شرطی", text: "از wenn برای بیان شرط استفاده کنید.", example: { de: "Wenn es regnet, bleibe ich zu Hause.", fa: "وقتی باران می‌آید در خانه می‌مانم." } },
        { title: "نتیجه‌گیری", text: "نظر کلی خود را بیان کنید.", example: { de: "Ich mag den Sommer am liebsten.", fa: "من تابستان را بیشتر دوست دارم." } }
      ],
      modelAnswer: "In meiner Stadt ist das Wetter sehr unterschiedlich. Im Sommer ist es oft heiß und die Sonne scheint. Wenn es sehr heiß ist, gehe ich schwimmen. Im Winter ist es kalt und manchmal schneit es. Wenn es schneit, bleibe ich zu Hause und trinke heißen Tee. Im Frühling regnet es viel, aber die Blumen blühen. Ich mag den Sommer am liebsten, weil ich die Sonne liebe."
    }
  ],

  listening: [
    {
      title: "گوش دادن: گزارش آب‌وهوا",
      instruction: "به جملات زیر گوش دهید و تکرار کنید.",
      sentences: [
        { de: "Heute ist es sonnig und warm.", fa: "امروز آفتابی و گرم است.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Heute ist es sonnig und warm" },
        { de: "Morgen wird es regnen.", fa: "فردا باران خواهد آمد.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Morgen wird es regnen" },
        { de: "Wenn es schneit, bleiben wir zu Hause.", fa: "وقتی برف می‌آید، در خانه می‌مانیم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Wenn es schneit, bleiben wir zu Hause" },
        { de: "Die Temperatur liegt bei 15 Grad.", fa: "دما ۱۵ درجه است.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Die Temperatur liegt bei 15 Grad" },
        { de: "Im Winter ist es oft bewölkt.", fa: "زمستان اغلب ابری است.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Im Winter ist es oft bewölkt" }
      ]
    }
  ],

  speaking: [
    {
      title: "تمرین گفتاری: توصیف آب‌وهوا",
      pattern: "Wenn es ... (gehe ich / bleibe ich / trage ich ...)",
      exercise: "درباره آب‌وهوا در ۴ فصل صحبت کنید و بگویید در هر شرایطی چه کار می‌کنید."
    }
  ],

  cultureTip: "آلمانی‌ها عاشق صحبت درباره آب‌وهوا هستند! این یک موضوع عالی برای شروع مکالمه (Small Talk) است. جمله «Schönes Wetter heute, nicht wahr?» (امروز هوا قشنگه، نه؟) یکی از رایج‌ترین جملات شروع مکالمه در آلمان است. همچنین مراقب باشید: آب‌وهوا در آلمان بسیار تغییرپذیر است و ممکن است صبح آفتابی و عصر بارانی باشد!",

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
