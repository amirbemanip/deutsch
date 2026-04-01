export const day45Data = {
  title: "روز ۴۵: روابط و زندگی اجتماعی - دوستی، احساسات و تضادها",
  objective: "یادگیری واژگان و عبارات مربوط به روابط، احساسات، دوستی، خانواده و ح' تضادها در سطح B1",

  grammarData: {
    subtitle: "Relativsätze و صفات موصو'ی در توصیف افراد",
    content: [
      {
        type: "text",
        title: "۱. جم'ات موصو'ی (Relativsätze)",
        text: "جم'ات موصو'ی (Relativsätze) برای توصیف و ارائه اط'اعات اضافی درباره یک اسم استفاده می‌شوند. این جم'ات با ضمیر موصو'ی (Relativpronomen) شروع می‌شوند و فع' در آخر می‌آید. Relativpronomen بر اساس جنسیت و حا'ت اسم قب'ی تغییر می‌کند. در بحث روابط، این ساختار بسیار کاربرد دارد: Die Freundin, die ich kenne, ist nett."
      },
      {
        type: "table",
        title: "ضمیرهای موصو'ی (Relativpronomen)",
        rows: [
          { de: "der → der/dem/dessen", fa: "N: der Mann, der ... / D: dem Mann, dem ... / G: dessen" },
          { de: "die → die/der/deren", fa: "N: die Frau, die ... / D: der Frau, der ... / G: deren" },
          { de: "das → das/dem/dessen", fa: "N: das Kind, das ... / D: dem Kind, dem ... / G: dessen" },
          { de: "die (Pl.) → die/denen/deren", fa: "N: die Leute, die ... / D: den Leuten, denen ... / G: deren" }
        ]
      },
      {
        type: "text",
        title: "۲. Relativsätze برای توصیف افراد",
        text: "مثا'‌های کاربردی: Der Freund, mit dem ich arbeite, ist sehr nett. (دوستی که با او کار می‌کنم خی'ی مهربان است). Die Frau, deren Kinder hier spielen, wohnt nebenan. (زنی که بچه‌هایش اینجا بازی می‌کنند همسایه است). نکته مهم: Relativpronomen در جایگاه ۱ جم'ه موصو'ی قرار می‌گیرد و فع' در آخر می‌آید."
      },
      {
        type: "examples",
        title: "مثا'‌های روابط اجتماعی",
        items: [
          { de: "Ich habe eine Freundin, die immer für mich da ist.", fa: "من دوستی دارم که همیشه برایم هست." },
          { de: "Der Mann, mit dem ich zusammenwohne, ist mein Bruder.", fa: "مردی که با او زندگی می‌کنم برادرم است." },
          { de: "Sie ist eine Person, der man vertrauen kann.", fa: "او شخصی است که می‌توان به او اعتماد کرد." },
          { de: "Die Familie, in der ich aufgewachsen bin, ist sehr groß.", fa: "خانواده‌ای که در آن بزرگ شده‌ام خی'ی بزرگ است." },
          { de: "Das ist der Grund, warum ich traurig bin.", fa: "این د'ی'ی است که غمگین هستم." },
          { de: "Ich kenne niemanden, der so geduldig ist wie er.", fa: "کسی را نمی‌شناسم که به اندازه او صبور باشد." }
        ]
      },
      {
        type: "alert",
        title: "نکته: تفاوت dass و Relativsatz",
        text: "dass جم'ه وابسته‌ای می‌سازد که معمو'اً بعد از فع' می‌آید: Ich weiß, dass er nett ist. Relativsatz جم'ه‌ای است که اسم را توصیف می‌کند: Der Mann, der nett ist, wohnt hier. Relativpronomen باید با جنسیت و عدد اسم مطابقت داشته باشد."
      },
      {
        type: "interactive_quiz",
        title: "آزمون Relativsätze",
        questions: [
          {
            question: "کدام جم'ه صحیح است؟ «دوستی که با او کار می‌کنم خی'ی مهربان است.»",
            questionDe: "Welcher Satz ist grammatikalisch korrekt?",
            options: [
              { text: "Der Freund, mit dem ich arbeite, ist sehr nett.", isCorrect: true },
              { text: "Der Freund, mit den ich arbeite, ist sehr nett.", isCorrect: false },
              { text: "Der Freund, der ich arbeite, ist sehr nett.", isCorrect: false }
            ],
            explanation: "mit + Dativ: mit dem (männlich). Relativpronomen stimmt mit dem Nomen überein."
          },
          {
            question: "«Die Frau, _______ Kinder hier spielen, ist meine Nachbarin.»",
            questionDe: "Welches Relativpronomen passt?",
            options: [
              { text: "deren", isCorrect: true },
              { text: "derer", isCorrect: false },
              { text: "der", isCorrect: false }
            ],
            explanation: "deren = Genitiv feminin: Frau (die) → deren Kinder (بچه‌هایش)."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین Relativsätze",
        instruction: "Relativpronomen مناسب را وارد کنید.",
        blanks: [
          { sentence: "Ich habe einen Freund, _______ immer für mich da ist.", answer: "der", hint: "مذکر Nominativ → der" },
          { sentence: "Das ist die Frau, _______ ich helfe.", answer: "der", hint: "مؤنث Dativ → der" },
          { sentence: "Die Kinder, _______ Eltern im Ausland leben, sind traurig.", answer: "deren", hint: "Genitiv Plural → deren" },
          { sentence: "Der Mann, mit _______ ich zusammenarbeite, ist sehr freundlich.", answer: "dem", hint: "مذکر Dativ nach mit → dem" },
          { sentence: "Sie ist eine Person, _______ man vertrauen kann.", answer: "der", hint: "مؤنث Dativ → der" },
          { sentence: "Das ist der Ort, _______ wir uns kennengelernt haben.", answer: "wo", hint: "Ort → wo" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "روابط و احساسات (Beziehungen und Gefühle)",
        words: [
          { de: "die Freundschaft", fa: "دوستی", article: "die", plural: "die Freundschaften", examples: [{ de: "Unsere Freundschaft ist sehr wichtig.", fa: "دوستی ما خی'ی مهم است." }] },
          { de: "die Beziehung", fa: "رابطه (عاطفی/اجتماعی)", article: "die", plural: "die Beziehungen", examples: [{ de: "Sie haben eine gute Beziehung.", fa: "آن‌ها رابطه خوبی دارند." }] },
          { de: "das Gefühl", fa: "احساس", article: "das", plural: "die Gefühle", examples: [{ de: "Ich habe gemischte Gefühle.", fa: "احساسات مخت'طی دارم." }] },
          { de: "vertrauen", fa: "اعتماد کردن", article: "-", plural: "-", examples: [{ de: "Ich vertraue dir.", fa: "به تو اعتماد دارم." }] },
          { de: "der Vertrauen", fa: "اعتماد", article: "der", plural: "-", examples: [{ de: "Vertrauen ist wichtig in einer Beziehung.", fa: "اعتماد در رابطه مهم است." }] }
        ]
      },
      {
        title: "تضادها و ح' مشک' (Konflikte und Lösung)",
        words: [
          { de: "der Konflikt", fa: "تضاد / درگیری", article: "der", plural: "die Konflikte", examples: [{ de: "Wir haben einen Konflikt.", fa: "ما یک تضاد داریم." }] },
          { de: "der Streit", fa: "بحث / دعوا", article: "der", plural: "die Streite", examples: [{ de: "Sie hatten einen Streit.", fa: "آن‌ها دعوا کردند." }] },
          { de: "sich versöhnen", fa: "آشتی کردن", article: "-", plural: "-", examples: [{ de: "Nach dem Streit haben sie sich versöhnt.", fa: "بعد از دعوا آشتی کردند." }] },
          { de: "verzeihen", fa: "بخشیدن", article: "-", plural: "-", examples: [{ de: "Kannst du mir verzeihen?", fa: "می‌توانی مرا ببخشی؟" }] },
          { de: "verletzt", fa: "د'خور / زخمی", article: "-", plural: "-", examples: [{ de: "Ich fühle mich verletzt.", fa: "احساس د'خوری می‌کنم." }] },
          { de: "die Enttäuschung", fa: "ناامیدی / سرخوردگی", article: "die", plural: "die Enttäuschungen", examples: [{ de: "Das war eine große Enttäuschung.", fa: "این ناامیدی بزرگی بود." }] },
          { de: "eifersüchtig", fa: "حسود", article: "-", plural: "-", examples: [{ de: "Er ist eifersüchtig auf seinen Freund.", fa: "او به دوستش حسود است." }] },
          { de: "die Gemeinsamkeit", fa: "وجه اشتراک", article: "die", plural: "die Gemeinsamkeiten", examples: [{ de: "Wir haben viele Gemeinsamkeiten.", fa: "وجه اشتراک زیادی داریم." }] },
          { de: "auseinandergehen", fa: "از هم جدا شدن", article: "-", plural: "-", examples: [{ de: "Sie sind auseinandergegangen.", fa: "آن‌ها از هم جدا شدند." }] },
          { de: "das Verständnis", fa: "درک / فهم", article: "das", plural: "-", examples: [{ de: "Er hat kein Verständnis für meine Situation.", fa: "او درکی از وضعیت من ندارد." }] },
          { de: "mitfühlen", fa: "همد'ی کردن", article: "-", plural: "-", examples: [{ de: "Ich kann gut mitfühlen.", fa: "خوب می‌توانم همد'ی کنم." }] },
          { de: "die Unterstützung", fa: "حمایت / پشتیبانی", article: "die", plural: "-", examples: [{ de: "Danke für deine Unterstützung!", fa: "ممنون از حمایتت!" }] },
          { de: "streiten sich", fa: "دعوا کردن", article: "-", plural: "-", examples: [{ de: "Die Kinder streiten sich oft.", fa: "بچه‌ها اغ'ب دعوا می‌کنند." }] },
          { de: "sich kümmern um", fa: "رسیدگی کردن به", article: "-", plural: "-", examples: [{ de: "Sie kümmert sich um ihre Familie.", fa: "او به خانواده‌اش رسیدگی می‌کند." }] },
          { de: "die Eifersucht", fa: "حسادت", article: "die", plural: "-", examples: [{ de: "Eifersucht kann Beziehungen zerstören.", fa: "حسادت می‌تواند روابط را نابود کند." }] },
          { de: "das Vertrauen", fa: "اعتماد", article: "das", plural: "-", examples: [{ de: "Vertrauen muss man verdienen.", fa: "اعتماد باید کسب شود." }] },
          { de: "das Kompliment", fa: "تعریف / تمجید", article: "das", plural: "die Komplimente", examples: [{ de: "Er hat mir ein Kompliment gemacht.", fa: "او از من تعریف کرد." }] },
          { de: "sich entschuldigen", fa: "عذرخواهی کردن", article: "-", plural: "-", examples: [{ de: "Ich möchte mich entschuldigen.", fa: "می‌خواهم عذرخواهی کنم." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Wahre Freundschaft\n\nWas bedeutet wahre Freundschaft? Für mich ist eine Freundin eine Person, der man alles erzählen kann, ohne Angst zu haben. Mein bester Freund, mit dem ich seit der Kindheit befreundet bin, lebt leider in einer anderen Stadt. Trotzdem telefonieren wir jede Woche.\nFreundschaften haben sowohl schöne als auch schwierige Momente. Manchmal gibt es Konflikte, weil man unterschiedliche Meinungen hat. Letztes Jahr hatten wir einen großen Streit, weil er mir nicht gesagt hatte, dass er umzieht. Ich war sehr verletzt und enttäuscht.\nAber wahre Freundschaft bedeutet auch, Fehler verzeihen zu können. Nach einigen Wochen haben wir uns ausgesprochen und versöhnt. Er hat sich entschuldigt und gesagt, dass er nicht wusste, wie er es mir sagen sollte. Ich habe ihm verziehen, weil ich weiß, dass er es nicht böse gemeint hat.\nDas Wichtigste in einer Freundschaft ist Vertrauen und Verständnis. Man sollte füreinander da sein, auch wenn es schwierig ist. Ein guter Freund ist wie ein Familienmitglied, das man sich aussucht.",
      questions: [
        { question: "بهترین دوست نویسنده کجا زندگی می‌کند؟", answer: "در شهر دیگری." },
        { question: "آن‌ها سا' گذشته چرا دعوا کردند؟", answer: "چون دوستش نگفته بود که نق' مکان می‌کند." },
        { question: "نویسنده چگونه توانست ببخشد؟", answer: "فهمید که دوستش قصد بدی نداشته." },
        { question: "به نظر نویسنده مهم‌ترین چیز در دوستی چیست؟", answer: "اعتماد (Vertrauen) و درک (Verständnis)." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره دوستی",
      prompt: "یک متن ۱۰-۱۲ خطی درباره بهترین دوستتان یا یک رابطه مهم در زندگی‌تان بنویسید. از Relativsätze و واژگان احساسات استفاده کنید.",
      steps: [
        {
          title: "معرفی شخص",
          text: "با Relativsatz",
          example: { de: "Mein bester Freund ist eine Person, die mich sehr gut versteht.", fa: "بهترین دوست من شخصی است که خوب مرا می‌فهمد." }
        },
        {
          title: "توصیف رابطه",
          text: "احساسات و خاطرات",
          example: { de: "Mit dem ich seit vielen Jahren befreundet bin...", fa: "که سا'‌هاست با او دوست هستم..." }
        },
        {
          title: "نتیجه‌گیری",
          text: "اهمیت دوستی",
          example: { de: "Wahre Freundschaft ist unbezahlbar.", fa: "دوستی واقعی بی‌قیمت است." }
        }
      ],
      modelAnswer: "Meine beste Freundin ist Sara, mit der ich seit der Universität befreundet bin. Sie ist eine Person, der ich immer vertrauen kann. Wir haben viele Gemeinsamkeiten: Wir lieben beide Bücher, Musik und Reisen. Sara ist jemand, die mich zum Lachen bringt, auch wenn ich traurig bin. Letztes Jahr hatten wir einen kleinen Streit, weil sie mein Geheimnis erzählt hat. Ich war sehr verletzt und habe mich nicht gemeldet. Aber dann hat sie sich entschuldigt und gesagt, dass es ein Missverständnis war. Ich habe ihr verziehen, weil unsere Freundschaft wichtiger ist als ein Fehler. Sara ist wie eine Schwester für mich, die ich mir ausgesucht habe. Ich weiß, dass sie immer für mich da sein wird, egal was passiert. Wahre Freundschaft bedeutet, füreinander da zu sein."
    }
  ],

  listening: [
    {
      title: "بحث درباره دوستی",
      source: "Freundschaft und Beziehungen (B1)",
      link: "https://www.youtube.com/watch?v=9Z3wJKkOqSM",
      instructions: "به بحث درباره دوستی و روابط در ویدیو دقت کنید. Relativsätze و عبارات احساسی (verletzt, enttäuscht, verzeihen) را یادداشت کنید."
    }
  ],

  speaking: [
    {
      title: "توصیف یک شخص مهم",
      pattern: "Das ist eine Person, die... / Mein bester Freund, mit dem ich... / Sie ist jemand, der...",
      exercise: "مدت ۲ دقیقه درباره بهترین دوست یا یک شخص مهم در زندگی‌تان صحبت کنید. از Relativsätze استفاده کنید و احساساتتان را بیان کنید."
    }
  ],

  cultureTip: "در فرهنگ آ'مانی، دوستی معمو'اً عمیق و طو'انی‌مدت است اما شک'‌گیری آن ممکن است کند باشد. آ'مانی‌ها برای صداقت و رک‌گویی در دوستی ارزش قائ'ند. برعکس فرهنگ‌هایی که سریع دوست می‌شوند، آ'مانی‌ها معمو'اً ابتدا فاص'ه را حفظ می‌کنند و کم‌کم به هم نزدیک می‌شوند. مفهوم Kumpel (رفیق/دوست صمیمی) و Freund/Freundin (دوست واقعی) متفاوت است.",

  examData: {
    questions: [
      { question: "«Ich habe einen Freund, _______ immer für mich da ist.»", options: ["der", "den", "dem", "dessen"], answer: 0 },
      { question: "«Die Frau, mit _______ ich zusammenarbeite, ist sehr nett.»", options: ["der", "die", "den", "deren"], answer: 0 },
      { question: "«Die Kinder, _______ Eltern arbeiten, sind allein.»", options: ["deren", "derer", "denen", "die"], answer: 0 },
      { question: "ک'مه «اعتماد» به آ'مانی:?", options: ["der Streit", "das Vertrauen", "das Gefühl", "die Enttäuschung"], answer: 1 },
      { question: "«Kannst du mir _______?» (بخشیدن)", options: ["vertrauen", "verzeihen", "versöhnen", "verstehen"], answer: 1 },
      { question: "«Nach dem Streit haben sie sich _______.» (آشتی کردن)", options: ["gestritten", "versöhnt", "verletzt", "enttäuscht"], answer: 1 },
      { question: "«Ich fühle mich _______.» (د'خور)", options: ["verletzt", "glücklich", "zufrieden", "stark"], answer: 0 },
      { question: "Relativpronomen در جایگاه چندم جم'ه موصو'ی قرار می‌گیرد؟", options: ["جایگاه ۲", "آخر جم'ه", "جایگاه ۱", "بعد از فع'"], answer: 2 }
    ]
  }
};
