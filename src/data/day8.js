export const day8Data = {
  title: "روز ۸: حروف اضافه پایه‌ای (in, auf, an, aus, mit, nach, zu, von)",
  objective: "در پایان این روز، شما قادر خواهید بود ۸ حرف اضافه پایه‌ای آلمانی را با معنی و کاربردشان یاد بگیرید، تفاوت استفاده برای مکان و جهت را بدانید و ۱۵ اسم جدید یاد بگیرید.",
  level: "A1",

  grammarData: {
    subtitle: "درس‌های گرامری با تمرین تعاملی",
    content: [
      {
        type: "text",
        title: "حروف اضافه در آلمانی",
        text: "حروف اضافه کلمات کوچکی هستند که رابطه بین کلمات جمله را نشان می‌دهند. در زبان آلمانی، بعضی حروف اضافه همیشه با Dativ و بعضی همیشه با Akkusativ می‌روند.\nاما در سطح A1، فقط معنی و کاربرد اصلی را یاد می‌گیریم."
      },
      {
        type: "table",
        title: "۸ حرف اضافه پایه‌ای",
        rows: [
          { de: "in (در / به داخل)", fa: "Ich wohne in Berlin. (در برلین زندگی می‌کنم.) / Ich gehe in die Schule. (به مدرسه می‌روم.)" },
          { de: "auf (روی / به روی)", fa: "Das Buch liegt auf dem Tisch. (کتاب روی میز است.) / Ich lege das Buch auf den Tisch. (کتاب را روی میز می‌گذارم.)" },
          { de: "an (به / کنار / به کنار)", fa: "Das Bild hängt an der Wand. (عکس روی دیوار است.) / Ich gehe an die Tür. (به در می‌روم.)" },
          { de: "aus (از / اهل)", fa: "Ich komme aus dem Iran. (از ایران می‌آیم.) / Er kommt aus der Türkei. (او اهل ترکیه است.)" },
          { de: "mit (با / همراه)", fa: "Ich fahre mit dem Bus. (با اتوبوس می‌روم.) / Er kommt mit seiner Freundin. (او با دوست دخترش می‌آید.)" },
          { de: "nach (به / بعد از)", fa: "Ich fahre nach Berlin. (به برلین می‌روم.) / Nach dem Essen lerne ich. (بعد از غذا یاد می‌گیرم.)" },
          { de: "zu (به / نزد)", fa: "Ich gehe zum Arzt. (به دکتر می‌روم.) / Er geht zu seiner Mutter. (او نزد مادرش می‌رود.)" },
          { de: "von (از / از طرف)", fa: "Das ist von mir. (این از طرف من است.) / Ich komme von der Arbeit. (از سر کار می‌آیم.)" }
        ]
      },
      {
        type: "alert",
        title: "تفاوت مهم: aus در مقابل von",
        text: "برای گفتن «اهل کجایی» اگر کشور باشد: Ich komme aus dem Iran. اگر شهر باشد: Ich komme aus Berlin. اما برای «از کجا می‌آییم» (جهت): Ich komme von der Arbeit. (از سر کار.)"
      },
      {
        type: "text",
        title: "تفاوت مکان ثابت و جهت حرکت",
        text: "این یکی از مهم‌ترین مفاهیم زبان آلمانی است:\n- مکان ثابت (wo? = کجا؟): فعل‌هایی مثل wohnen, sein, liegen, sitzen, stehen\n- جهت حرکت (wohin? = به کجا؟): فعل‌هایی مثل gehen, fahren, kommen, legen, stellen"
      },
      {
        type: "table",
        title: "مثال‌های مکان ثابت و جهت حرکت",
        rows: [
          { de: "مکان ثابت (wo?)", fa: "Ich bin in der Schule. (در مدرسه هستم.) / Das Buch liegt auf dem Tisch. (کتاب روی میز است.)" },
          { de: "جهت حرکت (wohin?)", fa: "Ich gehe in die Schule. (به مدرسه می‌روم.) / Ich lege das Buch auf den Tisch. (کتاب را روی میز می‌گذارم.)" },
          { de: "تفاوت: in + Dativ (مکان)", fa: "in der Küche (در آشپزخانه), im (= in dem) Garten (در باغ)" },
          { de: "تفاوت: in + Akkusativ (جهت)", fa: "in die Küche (به آشپزخانه), in den Garten (به باغ)" }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های کاربردی هر حرف اضافه",
        items: [
          { de: "in: Ich wohne in einer Wohnung.", fa: "در یک آپارتمان زندگی می‌کنم." },
          { de: "auf: Das Handy ist auf dem Tisch.", fa: "گوشی روی میز است." },
          { de: "an: Das Bild hängt an der Wand.", fa: "عکس به دیوار آویزان است." },
          { de: "aus: Er kommt aus der Türkei.", fa: "او اهل ترکیه است." },
          { de: "mit: Ich fahre mit dem Auto.", fa: "با ماشین می‌روم." },
          { de: "nach: Wir fahren nach Wien.", fa: "ما به وین می‌رویم." },
          { de: "zu: Gehst du zum Supermarkt?", fa: "به سوپرمارکت می‌روی؟" },
          { de: "von: Das Geschenk ist von meiner Mutter.", fa: "این هدیه از مادرم است." }
        ]
      },
      {
        type: "table",
        title: "حروف اضافه + آرتیکل ترکیبی",
        rows: [
          { de: "in + dem = im", fa: "im Haus (در خانه), im Garten (در باغ), im Büro (در دفتر)" },
          { de: "in + das = ins", fa: "ins Kino (به سینما), ins Bett (به تختخواب), ins Krankenhaus (به بیمارستان)" },
          { de: "zu + dem = zum", fa: "zum Arzt (به دکتر), zum Bahnhof (به ایستگاه قطار), zum Frühstück (برای صبحانه)" },
          { de: "zu + der = zur", fa: "zur Schule (به مدرسه), zur Uni (به دانشگاه), zur Arbeit (به سر کار)" },
          { de: "von + dem = vom", fa: "vom Arzt (از دکتر), vom Bahnhof (از ایستگاه), vom Lehrer (از معلم)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: حروف اضافه",
        questions: [
          {
            question: "کدام حرف اضافه صحیح است؟ «Ich komme ___ dem Iran.»",
            questionDe: "Welche Präposition ist richtig?",
            options: [
              { text: "von", isCorrect: false },
              { text: "aus", isCorrect: true },
              { text: "nach", isCorrect: false }
            ],
            explanation: "درست! برای گفتن «اهل کجایی» از aus استفاده می‌کنیم."
          },
          {
            question: "کدام حرف اضافه صحیح است؟ «Ich fahre ___ Berlin.»",
            questionDe: "Welche Präposition ist richtig?",
            options: [
              { text: "aus", isCorrect: false },
              { text: "von", isCorrect: false },
              { text: "nach", isCorrect: true }
            ],
            explanation: "عالی! برای جهت حرکت به شهرها از nach استفاده می‌کنیم."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین جای خالی: حروف اضافه",
        instructions: "حرف اضافه مناسب را در جای خالی بنویسید.",
        sentences: [
          { de: "Ich komme ___ Deutschland.", answer: "aus", hint: "برای بیان اهل کجا بودن" },
          { de: "Ich fahre ___ dem Bus.", answer: "mit", hint: "برای بیان وسیله نقلیه" },
          { de: "Das Buch ist ___ dem Tisch.", answer: "auf", hint: "برای بیان مکان روی چیزی" },
          { de: "Ich gehe ___ dem Arzt.", answer: "zum", hint: "برای بیان رفتن نزد کسی" },
          { de: "Ich wohne ___ Berlin.", answer: "in", hint: "برای بیان مکان در شهر" },
          { de: "Ich komme ___ der Arbeit.", answer: "von", hint: "برای بیان از کجا آمدن" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "مکان‌ها",
        words: [
          {
            de: "die Schule",
            fa: "مدرسه",
            ipa: "[ˈʃuːlə]",
            article: "die",
            plural: "die Schulen",
            examples: [{ de: "Ich gehe zur Schule.", fa: "به مدرسه می‌روم." }]
          },
          {
            de: "der Supermarkt",
            fa: "سوپرمارکت",
            ipa: "[ˈzuːpɐmaʁkt]",
            article: "der",
            plural: "die Supermärkte",
            examples: [{ de: "Ich gehe zum Supermarkt.", fa: "به سوپرمارکت می‌روم." }]
          },
          {
            de: "die Küche",
            fa: "آشپزخانه",
            ipa: "[ˈkʏçə]",
            article: "die",
            plural: "die Küchen",
            examples: [{ de: "Meine Mutter ist in der Küche.", fa: "مادرم در آشپزخانه است." }]
          },
          {
            de: "das Krankenhaus",
            fa: "بیمارستان",
            ipa: "[ˈkʁaŋkn̩haʊ̯s]",
            article: "das",
            plural: "die Krankenhäuser",
            examples: [{ de: "Er ist im Krankenhaus.", fa: "او در بیمارستان است." }]
          },
          {
            de: "der Bahnhof",
            fa: "ایستگاه قطار",
            ipa: "[ˈbaːnhoːf]",
            article: "der",
            plural: "die Bahnhöfe",
            examples: [{ de: "Ich gehe zum Bahnhof.", fa: "به ایستگاه قطار می‌روم." }]
          },
          {
            de: "die Bibliothek",
            fa: "کتابخانه",
            ipa: "[bibli̯oˈteːk]",
            article: "die",
            plural: "die Bibliotheken",
            examples: [{ de: "Ich lerne in der Bibliothek.", fa: "در کتابخانه درس می‌خوانم." }]
          },
          {
            de: "das Büro",
            fa: "دفتر کار",
            ipa: "[byˈʁoː]",
            article: "das",
            plural: "die Büros",
            examples: [{ de: "Mein Vater ist im Büro.", fa: "پدرم در دفتر است." }]
          },
          {
            de: "das Restaurant",
            fa: "رستوران",
            ipa: "[ʁɛstoˈʁɑ̃ː]",
            article: "das",
            plural: "die Restaurants",
            examples: [{ de: "Wir gehen ins Restaurant.", fa: "ما به رستوران می‌رویم." }]
          }
        ]
      },
      {
        title: "وسایل نقلیه",
        words: [
          {
            de: "der Bus",
            fa: "اتوبوس",
            ipa: "[bʊs]",
            article: "der",
            plural: "die Busse",
            examples: [{ de: "Ich fahre mit dem Bus.", fa: "با اتوبوس می‌روم." }]
          },
          {
            de: "der Zug",
            fa: "قطار",
            ipa: "[tsuːk]",
            article: "der",
            plural: "die Züge",
            examples: [{ de: "Ich fahre mit dem Zug.", fa: "با قطار می‌روم." }]
          },
          {
            de: "die Straßenbahn",
            fa: "tram / قطار شهری",
            ipa: "[ˈʃtʁaːsn̩baːn]",
            article: "die",
            plural: "die Straßenbahnen",
            examples: [{ de: "Die Straßenbahn kommt.", fa: "tram می‌آید." }]
          },
          {
            de: "das Fahrrad",
            fa: "دوچرخه",
            ipa: "[ˈfaːɐ̯ʁaːt]",
            article: "das",
            plural: "die Fahrräder",
            examples: [{ de: "Ich fahre mit dem Fahrrad.", fa: "با دوچرخه می‌روم." }]
          },
          {
            de: "die U-Bahn",
            fa: "مترو",
            ipa: "[ˈuːbaːn]",
            article: "die",
            plural: "die U-Bahnen",
            examples: [{ de: "Ich nehme die U-Bahn.", fa: "مترو سوار می‌شوم." }]
          },
          {
            de: "das Taxi",
            fa: "تاکسی",
            ipa: "[ˈtaksi]",
            article: "das",
            plural: "die Taxis",
            examples: [{ de: "Wir nehmen ein Taxi.", fa: "تاکسی می‌گیریم." }]
          },
          {
            de: "die Haltestelle",
            fa: "ایستگاه اتوبوس/ tram",
            ipa: "[ˈhaltəˌʃtɛlə]",
            article: "die",
            plural: "die Haltestellen",
            examples: [{ de: "Wo ist die Haltestelle?", fa: "ایستگاه کجاست؟" }]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Der Weg zur Arbeit (راه سر کار)\n\nIch heiße Thomas und wohne in München. Jeden Tag gehe ich zur Arbeit.\nUm 7 Uhr frühstücke ich. Dann gehe ich zur U-Bahn-Station. Ich nehme die U-Bahn und fahre zum Büro. Das Büro ist im Stadtzentrum.\nMittags gehe ich ins Restaurant und esse mit meinen Kollegen. Nachmittags arbeite ich bis 5 Uhr.\nAm Abend fahre ich mit dem Bus nach Hause. Manchmal gehe ich noch zum Supermarkt oder zur Bibliothek. Am Wochenende fahre ich mit dem Zug nach Berlin.",
      translation: [
        { de: "Der Weg zur Arbeit", fa: "راه سر کار" },
        { de: "Ich heiße Thomas und wohne in München.", fa: "نام من توماس است و در مونیخ زندگی می‌کنم." },
        { de: "Jeden Tag gehe ich zur Arbeit.", fa: "هر روز به سر کار می‌روم." },
        { de: "Um 7 Uhr frühstücke ich.", fa: "ساعت ۷ صبحانه می‌خورم." },
        { de: "Dann gehe ich zur U-Bahn-Station.", fa: "بعد به ایستگاه مترو می‌روم." },
        { de: "Ich nehme die U-Bahn und fahre zum Büro.", fa: "مترو سوار می‌شوم و به دفتر می‌روم." },
        { de: "Das Büro ist im Stadtzentrum.", fa: "دفتر در مرکز شهر است." },
        { de: "Mittags gehe ich ins Restaurant.", fa: "ظهرها به رستوران می‌روم." },
        { de: "Nachmittags arbeite ich bis 5 Uhr.", fa: "بعدازظهرها تا ساعت ۵ کار می‌کنم." },
        { de: "Am Abend fahre ich mit dem Bus nach Hause.", fa: "شب‌ها با اتوبوس به خانه می‌روم." },
        { de: "Am Wochenende fahre ich mit dem Zug nach Berlin.", fa: "آخر هفته با قطار به برلین می‌روم." }
      ],
      questions: [
        { question: "توماس کجا زندگی می‌کند؟", answer: "در مونیخ." },
        { question: "توماس چطور به سر کار می‌رود؟", answer: "با مترو." },
        { question: "توماس ناهار را کجا می‌خورد؟", answer: "در رستوران." },
        { question: "توماس آخر هفته‌ها کجا می‌رود؟", answer: "با قطار به برلین." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن مسیر روزانه (Wegbeschreibung)",
      prompt: "مسیر روزانه خود را از خانه تا محل کار/تحصیل بنویسید.",
      steps: [
        {
          title: "شروع روز",
          text: "صبحانه و آماده شدن را توصیف کنید.",
          example: { de: "Um 7 Uhr frühstücke ich in der Küche.", fa: "ساعت ۷ در آشپزخانه صبحانه می‌خورم." }
        },
        {
          title: "مسیر",
          text: "با چه وسیله‌ای و به کجا می‌روید.",
          example: { de: "Dann gehe ich zur U-Bahn-Station und fahre mit der U-Bahn.", fa: "بعد به ایستگاه مترو می‌روم و با مترو می‌روم." }
        },
        {
          title: "برگشت",
          text: "عصر چطور به خانه برمی‌گردید.",
          example: { de: "Am Abend fahre ich mit dem Bus nach Hause.", fa: "شب‌ها با اتوبوس به خانه می‌روم." }
        }
      ],
      modelAnswer: "Ich heiße Sara und wohne in Hamburg. Um 7 Uhr frühstücke ich. Dann gehe ich zur Bushaltestelle. Ich fahre mit dem Bus zum Büro. Das Büro ist im Stadtzentrum. Mittags esse ich im Restaurant. Nachmittags arbeite ich bis 5 Uhr. Am Abend fahre ich mit der U-Bahn nach Hause."
    }
  ],

  listening: [
    {
      title: "۱. حروف اضافه (A1 hören)",
      instruction: "تمرین شنیداری:\n۱. جملات را بشنوید و حرف اضافه را تشخیص دهید.\n۲. مشخص کنید مکان ثابت است یا جهت حرکت.\n۳. جملات را با صدای بلند تکرار کنید.",
      sentences: [
        { de: "Ich wohne in Berlin.", fa: "در برلین زندگی می‌کنم.", tts: "Ich wohne in Berlin." },
        { de: "Ich fahre mit dem Bus.", fa: "با اتوبوس می‌روم.", tts: "Ich fahre mit dem Bus." },
        { de: "Ich komme aus dem Iran.", fa: "از ایران می‌آیم.", tts: "Ich komme aus dem Iran." },
        { de: "Ich gehe zum Arzt.", fa: "به دکتر می‌روم.", tts: "Ich gehe zum Arzt." },
        { de: "Das Buch liegt auf dem Tisch.", fa: "کتاب روی میز است.", tts: "Das Buch liegt auf dem Tisch." },
        { de: "Nach dem Essen lerne ich.", fa: "بعد از غذا یاد می‌گیرم.", tts: "Nach dem Essen lerne ich." }
      ]
    }
  ],

  speaking: [
    {
      title: "تمرین مسیر با حروف اضافه",
      pattern: "- Wo wohnst du?\n- Ich wohne in München.\n- Wie fährst du zur Arbeit?\n- Ich fahre mit der U-Bahn.\n- Wo arbeitest du?\n- Ich arbeite im Stadtzentrum. Nach der Arbeit gehe ich zum Supermarkt.",
      exercise: "تمرین:\nگام ۱: بخش pattern را بشنوید.\nگام ۲: مسیر واقعی خود را توضیح دهید.\nگام ۳: از حروف اضافه مختلف استفاده کنید."
    }
  ],

  cultureTip: "در آلمان، سیستم حمل و نقل عمومی (ÖPNV) بسیار عالی است. مترو (U-Bahn)، tram (Straßenbahn) و اتوبوس به‌خوبی به هم متصل هستند. نکته مهم: بلیط باید قبل از سوار شدن خریداری شود و بازرسان (Kontrolleure) به‌صورت تصادفی بلیط را چک می‌کنند. اگر بلیط نداشته باشید، جریمه سنگین (۶۰ یورو) می‌شوید! همچنین در آلمان، ساعت قطارها بسیار دقیق است و حتی ۲ دقیقه تأخیر هم نشان‌دهنده مشکل است.",

  examData: {
    questions: [
      {
        question: "کدام حرف اضافه برای «اهل ایران بودن» استفاده می‌شود؟",
        options: ["von", "aus", "nach", "mit"],
        answer: 1
      },
      {
        question: "«Ich fahre ___ dem Bus» یعنی چه؟",
        options: ["با اتوبوس می‌روم", "به اتوبوس می‌روم", "از اتوبوس می‌آیم"],
        answer: 0
      },
      {
        question: "کدام حرف اضافه برای جهت حرکت به شهرها استفاده می‌شود؟",
        options: ["in", "aus", "nach", "mit"],
        answer: 2
      },
      {
        question: "«zum» ترکیبی از کدام حروف اضافه و آرتیکل است؟",
        options: ["zu + der", "zu + dem", "zu + das"],
        answer: 1
      },
      {
        question: "کدام جمله صحیح است؟",
        options: ["Ich komme von dem Iran.", "Ich komme aus dem Iran.", "Ich komme nach dem Iran."],
        answer: 1
      },
      {
        question: "«Das Buch ist ___ dem Tisch» (روی میز)",
        options: ["in", "auf", "an", "mit"],
        answer: 1
      },
      {
        question: "کدام ترکیب صحیح است؟",
        options: ["ins Kino", "im Kino", "zum Kino"],
        answer: 0
      },
      {
        question: "«Nach dem Essen» یعنی چه؟",
        options: ["قبل از غذا", "بعد از غذا", "هنگام غذا"],
        answer: 1
      },
      {
        question: "«von» برای چه معنایی استفاده می‌شود؟",
        options: ["به", "از", "با", "روی"],
        answer: 1
      },
      {
        question: "کدام جمله صحیح است؟",
        options: ["Ich gehe zu Schule.", "Ich gehe zur Schule.", "Ich gehe zum Schule."],
        answer: 1
      }
    ]
  }
};
