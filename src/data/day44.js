export const day44Data = {
  title: "روز ۴۴: محیط زیست و طبیعت - تغییرات اقلیمی",
  objective: "یادگیری واژگان و عبارات مربوط به محیط زیست، تغییرات اقلیمی، بازیافت و بحث درباره مسئولیت فردی و جمعی",
  level: "B1",

  grammarData: {
    subtitle: "Passiv گذشته و آینده + بیان نظرات",
    content: [
      {
        type: "text",
        title: "۱. مجهول گذشته (Präteritum Passiv)",
        text: "ساختار: wurde + Partizip II. مثال: Das Wald wurde zerstört. (جنگل نابود شد.) در بحث محیط زیست، از مجهول گذشته برای توصیف آسیب‌ها استفاده می‌کنیم. تفاوت با Perfekt Passiv: Das Wald ist zerstört worden. (هر دو صحیح هستند.)"
      },
      {
        type: "table",
        title: "انواع مجهول",
        rows: [
          { de: "Präsens Passiv: wird gemacht", fa: "الان انجام می‌شود" },
          { de: "Präteritum Passiv: wurde gemacht", fa: "انجام شد (گذشته)" },
          { de: "Perfekt Passiv: ist gemacht worden", fa: "انجام شده است" },
          { de: "Futur I Passiv: wird gemacht werden", fa: "انجام خواهد شد" }
        ]
      },
      {
        type: "text",
        title: "۲. عبارات بیان نظر درباره محیط زیست",
        text: "برای بیان نظر از این عبارات استفاده کنید: Meiner Meinung nach (به نظر من)، Ich bin der Ansicht that (من این نظر را دارم که)، Ich finde es wichtig (مهم می‌دانم)، Es ist notwendig (لازم است). همچنین از Konjunktiv II برای پیشنهاد استفاده کنید: Man sollte mehr recyceln."
      },
      {
        type: "examples",
        title: "مثال‌های محیط زیستی",
        items: [
          { de: "Die Wälder wurden in den letzten Jahren zerstört.", fa: "جنگل‌ها در سال‌های اخیر نابود شدند." },
          { de: "Mehr Solarpanels werden installiert werden.", fa: "پنل‌های خورشیدی بیشتری نصب خواهند شد." },
          { de: "Meiner Meinung nach muss jeder Einzelne etwas tun.", fa: "به نظر من هر فردی باید کاری انجام دهد." },
          { de: "Es ist notwendig, erneuerbare Energien zu nutzen.", fa: "لازم است از انرژی‌های تجدیدپذیر استفاده شود." },
          { de: "Müll sollte getrennt werden.", fa: "زباله باید تفکیک شود." },
          { de: "Die Luftverschmutzung wird durch Autos verursacht.", fa: "آلودگی هوا توسط اتومبیل‌ها ایجاد می‌شود." }
        ]
      },
      {
        type: "alert",
        title: "نکته: Umwelt vs Natur vs Klima",
        text: "Umwelt = محیط زیست (کل محیط شامل هوا، آب، خاک، حیوانات). Natur = طبیعت (جنگل، کوه، دریا). Klima = آب و هوا / اقلیم. Klimawandel = تغییرات اقلیمی. Umweltschutz = حفاظت از محیط زیست. Umweltverschmutzung = آلودگی محیط زیست."
      },
      {
        type: "interactive_quiz",
        title: "آزمون محیط زیست",
        questions: [
          {
            question: "کدام جمله مجهول گذشته است؟",
            questionDe: "Welcher Satz steht im Präteritum Passiv?",
            options: [
              { text: "Die Wälder werden zerstört.", isCorrect: false },
              { text: "Die Wälder wurden zerstört.", isCorrect: true },
              { text: "Die Wälder sind zerstört worden.", isCorrect: false }
            ],
            explanation: "wurde/wurden + Partizip II = مجهول گذشته."
          },
          {
            question: "«Meiner Meinung nach» یعنی:؟",
            questionDe: "Was bedeutet 'Meiner Meinung nach'?",
            options: [
              { text: "در واقع", isCorrect: false },
              { text: "به نظر من", isCorrect: true },
              { text: "به هر حال", isCorrect: false }
            ],
            explanation: "Meiner Meinung nach = به نظر من."
          },
          {
            question: "«erneuerbare Energie» یعنی:؟",
            questionDe: "Was bedeutet 'erneuerbare Energie'?",
            options: [
              { text: "انرژی هسته‌ای", isCorrect: false },
              { text: "انرژی تجدیدپذیر", isCorrect: true },
              { text: "انرژی فسیلی", isCorrect: false }
            ],
            explanation: "erneuerbare Energie = انرژی تجدیدپذیر (خورشیدی، بادی و غیره)."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین مجهول و محیط زیست",
        instruction: "جملات را با شکل مناسب Passiv یا عبارت نظر کامل کنید.",
        blanks: [
          { sentence: "Die Wälder _______ in den letzten Jahren _______. (تخریب - مجهول گذشته)", answer: "wurden ... zerstört", hint: "Präteritum Passiv" },
          { sentence: "_______ Meinung nach muss jeder etwas für die Umwelt tun.", answer: "Meiner", hint: "به نظر من" },
          { sentence: "Müll _______ _______ werden. (باید تفکیک شود)", answer: "sollte getrennt", hint: "Konjunktiv II + مجهول" },
          { sentence: "Es ist _______, erneuerbare Energien zu nutzen.", answer: "notwendig", hint: "لازم است" },
          { sentence: "Mehr Solarpanels _______ installiert _______. (آینده)", answer: "werden ... werden", hint: "Futur I Passiv" },
          { sentence: "Die Luft _______ durch Autos _______. (آلودگی - مجهول حال)", answer: "wird ... verschmutzt", hint: "Vorgangspassiv" },
          { sentence: "Ich _______ es _______, weniger Plastik zu benutzen.", answer: "finde ... wichtig", hint: "مهم می‌دانم" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "محیط زیست (Umwelt und Natur)",
        words: [
          { de: "die Umwelt", fa: "محیط زیست", ipa: "[ˈʔʊmvɛlt]", article: "die", plural: "-", examples: [{ de: "Wir müssen die Umwelt schützen.", fa: "باید از محیط زیست محافظت کنیم." }] },
          { de: "der Klimawandel", fa: "تغییرات اقلیمی", ipa: "[ˈkliːmaˌvandl̩]", article: "der", plural: "-", examples: [{ de: "Der Klimawandel ist ein großes Problem.", fa: "تغییرات اقلیمی مشکل بزرگی است." }] },
          { de: "das Recycling", fa: "بازیافت", ipa: "[ʁiˈsaɪ̯klɪŋ]", article: "das", plural: "-", examples: [{ de: "Recycling ist wichtig für die Umwelt.", fa: "بازیافت برای محیط زیست مهم است." }] },
          { de: "die erneuerbare Energie", fa: "انرژی تجدیدپذیر", ipa: "[ɛɐ̯ˈnɔɪ̯əʁbaʁə ɛnɛʁˈɡiː]", article: "die", plural: "die erneuerbaren Energien", examples: [{ de: "Solar ist eine erneuerbare Energie.", fa: "انرژی خورشیدی یک انرژی تجدیدپذیر است." }] },
          { de: "der Wald", fa: "جنگل", ipa: "[valt]", article: "der", plural: "die Wälder", examples: [{ de: "Der Wald ist grün.", fa: "جنگل سبز است." }] },
          { de: "die Umweltverschmutzung", fa: "آلودگی محیط زیست", ipa: "[ˈʊmvɛltfɛɐ̯ˌʃmʊtnʊŋ]", article: "die", plural: "-", examples: [{ de: "Die Umweltverschmutzung nimmt zu.", fa: "آلودگی محیط زیست رو به افزایش است." }] },
          { de: "die Luftverschmutzung", fa: "آلودگی هوا", ipa: "[ˈlʊftfɛɐ̯ˌʃmʊtnʊŋ]", article: "die", plural: "-", examples: [{ de: "Die Luftverschmutzung ist in Städten schlimm.", fa: "آلودگی هوا در شهرها بد است." }] },
          { de: "der Müll", fa: "زباله", ipa: "[mʏl]", article: "der", plural: "-", examples: [{ de: "Bitte trennen Sie den Müll.", fa: "لطفاً زباله را تفکیک کنید." }] },
          { de: "das Klima", fa: "آب و هوا / اقلیم", ipa: "[ˈkliːma]", article: "das", plural: "die Klimate", examples: [{ de: "Das Klima verändert sich.", fa: "اقلیم در حال تغییر است." }] }
        ]
      },
      {
        title: "انرژی و حفاظت (Energie und Schutz)",
        words: [
          { de: "die Sonnenenergie", fa: "انرژی خورشیدی", ipa: "[ˈzɔnənɛnɛʁˌɡiː]", article: "die", plural: "-", examples: [{ de: "Sonnenenergie ist umweltfreundlich.", fa: "انرژی خورشیدی دوستدار محیط زیست است." }] },
          { de: "die Windenergie", fa: "انرژی بادی", ipa: "[ˈvɪntɛnɛʁˌɡiː]", article: "die", plural: "-", examples: [{ de: "Windkraftwerke produzieren Strom.", fa: "نیروگاه‌های بادی برق تولید می‌کنند." }] },
          { de: "das Solarpanel", fa: "پنل خورشیدی", ipa: "[zoˈlaːɐ̯ˌpanɛl]", article: "das", plural: "die Solarpanels", examples: [{ de: "Auf dem Dach sind Solarpanels.", fa: "روی سقف پنل‌های خورشیدی هست." }] },
          { de: "schützen", fa: "محافظت کردن", ipa: "[ˈʃyːt͡sn̩]", article: "-", plural: "-", conjugation: { ich: "schütze", du: "schützt", er: "schützt", wir: "schützen", ihr: "schützt", sie: "schützen" }, examples: [{ de: "Wir müssen die Natur schützen.", fa: "باید از طبیعت محافظت کنیم." }] },
          { de: "recyceln", fa: "بازیافت کردن", ipa: "[ʁiˈtsaɪ̯kl̩n]", article: "-", plural: "-", conjugation: { ich: "recycle", du: "recycelst", er: "recycelt", wir: "recyceln", ihr: "recycelt", sie: "recyceln" }, examples: [{ de: "Wir recyceln Plastik.", fa: "پلاستیک را بازیافت می‌کنیم." }] },
          { de: "trennen", fa: "تفکیک کردن / جدا کردن", ipa: "[ˈtʁɛnən]", article: "-", plural: "-", conjugation: { ich: "trenne", du: "trennst", er: "trennt", wir: "trennen", ihr: "trennt", sie: "trennen" }, examples: [{ de: "Man sollte Müll trennen.", fa: "باید زباله را تفکیک کرد." }] },
          { de: "zerstören", fa: "نابود کردن", ipa: "[t͡sɛɐ̯ˈʃtøːʁən]", article: "-", plural: "-", conjugation: { ich: "zerstöre", du: "zerstörst", er: "zerstört", wir: "zerstören", ihr: "zerstört", sie: "zerstören" }, examples: [{ de: "Die Fabrik zerstört die Natur.", fa: "کارخانه طبیعت را نابود می‌کند." }] },
          { de: "verschmutzen", fa: "آلوده کردن", ipa: "[fɛɐ̯ˈʃmʊt͡sn̩]", article: "-", plural: "-", conjugation: { ich: "verschmutze", du: "verschmutzt", er: "verschmutzt", wir: "verschmutzen", ihr: "verschmutzt", sie: "verschmutzen" }, examples: [{ de: "Fabriken verschmutzen die Luft.", fa: "کارخانه‌ها هوا را آلوده می‌کنند." }] },
          { de: "umweltfreundlich", fa: "دوستدار محیط زیست", ipa: "[ˈʔʊmvɛltˌfʁɔʏ̯ntlɪç]", article: "-", plural: "-", examples: [{ de: "Dieses Produkt ist umweltfreundlich.", fa: "این محصول دوستدار محیط زیست است." }] },
          { de: "nachhaltig", fa: "پایدار", ipa: "[ˈnaːxˌhaltɪç]", article: "-", plural: "-", examples: [{ de: "Wir müssen nachhaltig leben.", fa: "باید پایدار زندگی کنیم." }] },
          { de: "der CO2-Ausstoß", fa: "انتشار دی‌اکسید کربن", ipa: "[tseːoːˈt͡svaɪ̯ ˈʔaʊ̯sʃtoːs]", article: "der", plural: "-", examples: [{ de: "Der CO2-Ausstoß muss reduziert werden.", fa: "انتشار CO2 باید کاهش یابد." }] },
          { de: "das Ozonloch", fa: "سوراخ لایه ازن", ipa: "[oˈt͡soːnˌlɔx]", article: "das", plural: "-", examples: [{ de: "Das Ozonloch wird größer.", fa: "سوراخ ازن بزرگ‌تر می‌شود." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Klimawandel und was wir tun können\n\nDer Klimawandel ist eines der größten Probleme unserer Zeit. Die Temperaturen steigen, die Gletscher schmelzen und der Meeresspiegel steigt. In den letzten 100 Jahren wurde die Erde um etwa 1 Grad wärmer. Das klingt wenig, aber es hat große Auswirkungen.\nDie Hauptursache ist der CO2-Ausstoß durch Fabriken und Autos. Wälder wurden zerstört, um Platz für Straßen und Gebäude zu schaffen. Die Luft wurde durch Abgase verschmutzt.\nAber es gibt Hoffnung. Immer mehr Menschen nutzen erneuerbare Energien wie Sonnen- und Windenergie. Müll wird getrennt und recycelt. Viele Städte werden umweltfreundlicher: Es gibt mehr Fahrradwege und weniger Autos in der Innenstadt.\nJeder Einzelne kann etwas tun: Weniger Plastik benutzen, das Fahrrad statt das Auto nehmen und sparsam mit Energie umgehen. Meiner Meinung nach ist es noch nicht zu spät, aber wir müssen jetzt handeln.",
      translation: "تغییرات اقلیمی و کارهایی که می‌توانیم بکنیم\n\nتغییرات اقلیمی یکی از بزرگ‌ترین مشکلات زمان ماست. دما بالا می‌رود، یخچال‌ها ذوب می‌شوند و سطح دریا بالا می‌آید. در ۱۰۰ سال اخیر زمین حدود ۱ درجه گرم‌تر شده. کم به نظر می‌رسد اما تأثیرات بزرگی دارد.\nعلت اصلی انتشار CO2 توسط کارخانه‌ها و اتومبیل‌هاست. جنگل‌ها نابود شدند تا جا برای جاده‌ها و ساختمان‌ها باز شود. هوا توسط دود آلوده شد.\nاما امید هست. هر روز افراد بیشتری از انرژی‌های تجدیدپذیر مثل خورشیدی و بادی استفاده می‌کنند. زباله تفکیک و بازیافت می‌شود. شهرها دوستدار محیط زیست‌تر می‌شوند: مسیرهای دوچرخه بیشتر و اتومبیل کمتر در مرکز شهر.\nهر فردی می‌تواند کاری کند: پلاستیک کمتر، دوچرخه به جای ماشین و مصرف هوشمندانه انرژی. به نظر من هنوز دیر نشده اما باید الان عمل کنیم.",
      questions: [
        { question: "علت اصلی تغییرات اقلیمی چیست؟", answer: "انتشار CO2 توسط کارخانه‌ها و اتومبیل‌ها." },
        { question: "در ۱۰۰ سال اخیر زمین چقدر گرم‌تر شده؟", answer: "حدود ۱ درجه." },
        { question: "چه انرژی‌هایی جایگزین شده‌اند؟", answer: "انرژی خورشیدی و بادی." },
        { question: "هر فرد چه کارهایی می‌تواند بکند؟", answer: "پلاستیک کمتر، دوچرخه به جای ماشین و مصرف هوشمندانه انرژی." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره حفاظت از محیط زیست",
      prompt: "یک متن ۱۰-۱۲ خطی درباره کارهایی که برای حفاظت از محیط زیست انجام می‌دهید یا باید انجام دهید بنویسید. از Passiv استفاده کنید.",
      steps: [
        {
          title: "معرفی مشکل",
          text: "مشکلات محیط زیستی",
          example: { de: "Die Umwelt wird jeden Tag mehr verschmutzt.", fa: "محیط زیست هر روز بیشتر آلوده می‌شود." }
        },
        {
          title: "راه‌حل‌ها",
          text: "پیشنهادات",
          example: { de: "Müll sollte getrennt werden.", fa: "زباله باید تفکیک شود." }
        },
        {
          title: "نتیجه‌گیری",
          text: "نظر شخصی",
          example: { de: "Jeder kann einen Beitrag leisten.", fa: "هر کسی می‌تواند سهمی داشته باشد." }
        }
      ],
      modelAnswer: "Der Klimawandel ist ein ernstes Problem. Die Luft wird durch Autos und Fabriken verschmutzt. Wälder wurden in vielen Ländern zerstört. Plastikmüll wird ins Meer geworfen. Aber jeder Einzelne kann etwas tun. Müll sollte getrennt und recycelt werden. Weniger Plastik sollte benutzt werden. Das Fahrrad kann statt des Autos genommen werden. Erneuerbare Energien sollten mehr genutzt werden. In meiner Stadt werden neue Fahrradwege gebaut. Meiner Meinung nach ist es wichtig, dass jeder seinen Beitrag leistet. Wenn alle zusammenarbeiten, kann die Umwelt geschützt werden."
    }
  ],

  listening: [
    {
      title: "محیط زیست",
      instruction: "به جملات زیر گوش دهید و بنویسید (Dictation).",
      sentences: [
        { de: "Wir müssen die Umwelt schützen.", fa: "باید از محیط زیست محافظت کنیم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Wir müssen die Umwelt schützen" },
        { de: "Der Klimawandel ist ein großes Problem.", fa: "تغییرات اقلیمی مشکل بزرگی است.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Der Klimawandel ist ein großes Problem" },
        { de: "Müll sollte getrennt werden.", fa: "زباله باید تفکیک شود.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Müll sollte getrennt werden" },
        { de: "Erneuerbare Energien sind umweltfreundlich.", fa: "انرژی‌های تجدیدپذیر دوستدار محیط زیست هستند.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Erneuerbare Energien sind umweltfreundlich" },
        { de: "Die Wälder wurden zerstört.", fa: "جنگل‌ها نابود شدند.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Die Wälder wurden zerstört" },
        { de: "Jeder kann einen Beitrag leisten.", fa: "هر کسی می‌تواند سهمی داشته باشد.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Jeder kann einen Beitrag leisten" },
        { de: "Recycling ist wichtig für die Natur.", fa: "بازیافت برای طبیعت مهم است.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Recycling ist wichtig für die Natur" }
      ]
    }
  ],

  speaking: [
    {
      title: "بحث درباره تغییرات اقلیمی",
      pattern: "Meiner Meinung nach ist Klimawandel... / Ich finde es wichtig, dass... / Man sollte mehr... / Jeder Einzelne kann...",
      exercise: "درباره تغییرات اقلیمی و کارهایی که می‌توانید انجام دهید صحبت کنید. نظرتان را بیان کنید و پیشنهاد بدهید."
    }
  ],

  cultureTip: "آلمان یکی از پیشروان حفاظت از محیط زیست است. جنبش سبز (Die Grünen) از آلمان شروع شد. آلمانی‌ها زباله را دقیق تفکیک می‌کنند: کاغذ، شیشه، پلاستیک و بیولوژیک. مفهوم Energiewende (گذار انرژی) یعنی حرکت از انرژی هسته‌ای و فسیلی به انرژی‌های تجدیدپذیر. Pfand (بازپرداخت) برای بطری‌ها وجود دارد: وقتی بطری را پس می‌دهید، پولش را می‌گیرید.",

  examData: {
    questions: [
      { question: "«Die Wälder _______ zerstört.» (مجهول گذشته)", options: ["werden", "wurden", "sind", "haben"], answer: 1 },
      { question: "«Meiner Meinung nach» یعنی:؟", options: ["در واقع", "به نظر من", "به هر حال", "متأسفانه"], answer: 1 },
      { question: "«erneuerbare Energie» یعنی:؟", options: ["انرژی هسته‌ای", "انرژی تجدیدپذیر", "انرژی فسیلی", "انرژی برق"], answer: 1 },
      { question: "کدام فعل یعنی «نابود کردن»؟", options: ["schützen", "recyceln", "zerstören", "trennen"], answer: 2 },
      { question: "«Müll sollte _______ werden.»", options: ["trennt", "getrennt", "trennen", "trennte"], answer: 1 },
      { question: "«Umweltverschmutzung» یعنی:؟", options: ["حفاظت محیط زیست", "آلودگی محیط زیست", "بازیافت", "انرژی پاک"], answer: 1 },
      { question: "کدام عبارت صحیح است؟", options: ["Ich finde es wichtig.", "Ich finde es Wichtig.", "Ich finde wichtig es.", "Wichtig finde ich es."], answer: 0 },
      { question: "«umweltfreundlich» یعنی:؟", options: ["آلوده", "خطرناک", "دوستدار محیط زیست", "گران"], answer: 2 },
      { question: "«CO2-Ausstoß» یعنی:؟", options: ["جذب کربن", "انتشار دی‌اکسید کربن", "تصفیه هوا", "گرمایش زمین"], answer: 1 },
      { question: "«nachhaltig» یعنی:؟", options: ["سریع", "ارزان", "پایدار", "جدید"], answer: 2 }
    ]
  }
};
