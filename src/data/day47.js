export const day47Data = {
  title: "روز ۴۷: غذاهای ارگانیک، تغییر عادت‌ها و مدیریت استرس",
  objective: "امروز یاد می‌گیریم چطور برای بخش دوم امتحان شفاهی (ارائه) یک مونولوگ درباره غذاهای ارگانیک بسازیم. همچنین درباره تغییر عادت‌های بد (Gewohnheiten) حرف می‌زنیم و یاد می‌گیریم که در رژیم غذایی کمال‌گرا نباشیم تا دچار استرس نشویم.",

  grammarData: {
    subtitle: "ساختار یک ارائه استاندارد (Präsentation) و بیان مقاصد (Vorsätze).",
    content: [
      {
        type: "text",
        title: "۱. ساختار طلایی ارائه در امتحان B1 (Teil 2)",
        text: "در بخش دوم امتحان شفاهی B1، شما باید ۳ دقیقه درباره یک موضوع صحبت کنید. اگر این ৫ بخش را رعایت کنید، نمره کامل می‌گیرید."
      },
      {
        type: "alert",
        title: "پنج بخش ارائه",
        text: "1. Einleitung: معرفی موضوع (Heute spreche ich über...)\n2. Eigene Erfahrung: تجربه شخصی (Ich persönlich...)\n3. Vor- und Nachteile: مزایا و معایب (Ein Vorteil ist..., aber ein Nachteil ist...)\n4. Meinung: نظر شخصی (Meiner Meinung nach...)\n5. Schluss: پایان (Das war meine Präsentation. Danke für Ihre Aufmerksamkeit.)"
      },
      {
        type: "text",
        title: "۲. صحبت درباره تصمیم‌ها و تغییر عادت (Gute Vorsätze)",
        text: "برای بیان اینکه قصد دارید عادت بدی را ترک کنید، از ساختار «Ich habe mir vorgenommen, ... zu ...» (من تصمیم گرفته‌ام/عزم کرده‌ام که...) استفاده کنید."
      },
      {
        type: "examples",
        title: "تغییر عادت‌ها",
        items: [
          { de: "Ich habe mir vorgenommen, weniger Süßigkeiten zu essen.", fa: "من تصمیم جدی گرفته‌ام که شیرینی کمتری بخورم." },
          { de: "Es ist schwer, alte Gewohnheiten zu ändern.", fa: "تغییر دادن عادت‌های قدیمی سخت است." },
          { de: "Statt Fast Food zu essen, koche ich heute selbst.", fa: "به جای اینکه فست فود بخورم، امروز خودم آشپزی می‌کنم. (statt ... zu)" }
        ]
      },
      {
        type: "text",
        title: "۳. تعادل بین تغذیه و استرس",
        text: "در سطح B1 از شما انتظار می‌رود افکار پخته‌تری داشته باشید. مثلاً بگویید تغذیه مهم است، اما نباید به خودمان استرس وارد کنیم (sich unter Druck setzen)."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ارائه و ساختارها",
        questions: [
          {
            question: "کدام جمله برای شروع یک ارائه (Einleitung) در امتحان B1 مناسب‌تر است؟",
            questionDe: "Wie beginnen Sie eine Präsentation?",
            options: [
              { text: "Ich rede jetzt.", isCorrect: false },
              { text: "Heute spreche ich über das Thema 'Bio-Lebensmittel'.", isCorrect: true },
              { text: "Mein Thema ist gut.", isCorrect: false }
            ],
            explanation: "آفرین! یک شروع رسمی و مودبانه با «Heute spreche ich über das Thema...» بهترین راه برای ورود به ارائه است."
          },
          {
            question: "می‌خواهید بگویید: «به جای اینکه بخوابم، کتاب می‌خوانم». جای خالی را پر کنید. _____ zu schlafen, lese ich ein Buch.",
            questionDe: "Was fehlt hier?",
            options: [
              { text: "Ohne", isCorrect: false },
              { text: "Statt", isCorrect: true },
              { text: "Um", isCorrect: false }
            ],
            explanation: "دقیقاً! کلمه Statt (همراه با zu) به معنای «به جایِ...» است."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "رژیم و ارگانیک",
        words: [
          {
            de: "die Bio-Lebensmittel",
            fa: "مواد غذایی ارگانیک (زیستی)",
            article: "die (Plural)",
            plural: "-",
            examples: [
              { de: "Bio-Lebensmittel sind gut für die Umwelt.", fa: "غذاهای ارگانیک برای محیط زیست خوب هستند." }
            ]
          },
          {
            de: "die Pestizide",
            fa: "آفت‌کش‌ها / سموم کشاورزی",
            article: "die (Plural)",
            plural: "-",
            examples: [
              { de: "Bio-Obst wächst ohne Pestizide.", fa: "میوه ارگانیک بدون آفت‌کش‌ها رشد می‌کند." }
            ]
          },
          {
            de: "das Gewissen",
            fa: "وجدان",
            article: "das",
            plural: "-",
            examples: [
              { de: "Ich habe ein schlechtes Gewissen, wenn ich zu viel Schokolade esse.", fa: "وقتی شکلات زیاد می‌خورم وجدان درد می‌گیرم (عذاب وجدان دارم)." }
            ]
          }
        ]
      },
      {
        title: "عادت‌ها و تصمیمات",
        words: [
          {
            de: "die Gewohnheit",
            fa: "عادت",
            article: "die",
            plural: "die Gewohnheiten",
            examples: [
              { de: "Rauchen ist eine sehr schlechte Gewohnheit.", fa: "سیگار کشیدن یک عادت بسیار بد است." }
            ]
          },
          {
            de: "der Vorsatz",
            fa: "تصمیم / قصد جدی (معمولاً برای سال نو)",
            article: "der",
            plural: "die Vorsätze",
            examples: [
              { de: "Mein guter Vorsatz für dieses Jahr ist mehr Sport.", fa: "تصمیم خوب من برای امسال ورزش بیشتر است." }
            ]
          },
          {
            de: "sich unter Druck setzen",
            fa: "به خود فشار آوردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Man sollte sich beim Abnehmen nicht zu sehr unter Druck setzen.", fa: "آدم نباید هنگام کاهش وزن خیلی به خودش فشار بیاورد." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Präsentation: Sollen wir nur noch Bio-Lebensmittel kaufen?\n\nHeute spreche ich über das Thema 'Bio-Lebensmittel'. Zuerst erzähle ich von meinen persönlichen Erfahrungen. Ich persönlich kaufe meistens im normalen Supermarkt ein, weil Bio-Produkte oft sehr teuer sind. \nEin großer Vorteil von Bio-Lebensmitteln ist jedoch, dass sie besser für die Umwelt und ohne Pestizide produziert werden. Außerdem schmecken sie oft intensiver. Ein Nachteil ist eindeutig der hohe Preis. Nicht jede Familie kann sich das leisten. \nMeiner Meinung nach ist es wichtig, auf gesunde Ernährung zu achten, aber man sollte sich nicht unter Druck setzen. Wenn man das Geld hat, ist Bio eine gute Wahl, aber normales Gemüse ist auch gesund. Das war meine Präsentation. Vielen Dank für Ihre Aufmerksamkeit.",
      questions: [
        { question: "چرا راوی معمولاً از سوپرمارکت‌های معمولی خرید می‌کند؟ (تجربه شخصی)" },
        { question: "دو مزیت غذاهای ارگانیک (Bio) که در متن ذکر شده چیست؟ (دو مورد)" },
        { question: "عیب بزرگ (Nachteil) غذاهای ارگانیک چیست؟" },
        { question: "نظر نهایی راوی درباره خرید غذاهای ارگانیک چیست؟ (بخش Meinung)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن: تصمیمات و عادت‌های شما",
      prompt: "در یک پاراگراف (حدود ۷ خط) یکی از عادت‌های بد خود (schlechte Gewohnheit) را توضیح دهید. سپس بگویید برای آینده چه تصمیمی گرفته‌اید (Ich habe mir vorgenommen...) و به جای آن عادت بد چه خواهید کرد (statt ... zu).",
      steps: [
        {
          title: "معرفی یک عادت",
          text: "استفاده از Eine schlechte Gewohnheit von mir ist...",
          example: { de: "Eine schlechte Gewohnheit von mir ist, dass ich abends viel am Handy spiele.", fa: "یکی از عادت‌های بد من این است که شب‌ها زیاد با موبایل بازی می‌کنم." }
        },
        {
          title: "تصمیم برای تغییر",
          text: "استفاده از Ich habe mir vorgenommen...",
          example: { de: "Ich habe mir vorgenommen, früher schlafen zu gehen.", fa: "من تصمیم جدی گرفته‌ام که زودتر بخوابم." }
        },
        {
          title: "اقدام جایگزین",
          text: "استفاده از statt ... zu.",
          example: { de: "Statt am Handy zu spielen, möchte ich abends ein paar Seiten lesen.", fa: "به جای اینکه با موبایل بازی کنم، می‌خواهم عصرها چند صفحه کتاب بخوانم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. نمونه ارائه امتحانی (Präsentation)",
      source: "Goethe B1 Sprechen Teil 2 (Bio-Produkte)",
      link: "https://www.youtube.com/watch?v=lhrn8jctOlk",
      instructions: "تمرین دریافت ساختار:\nبه نحوه شروع و پایان فرد دقت کنید. او چگونه از بخش مزایا به بخش معایب می‌رود؟ (معمولاً با عباراتی مثل «Auf der anderen Seite...» یا «Ein Nachteil ist jedoch...»)."
    },
    {
      title: "۲. پادکست تغذیه بدون استرس",
      source: "Ernährung ohne Stress (B1)",
      link: "https://www.podcast.de/episode/694707664/013-ernaehrung-ohne-stress",
      instructions: "تمرین شنیدن واژگان احساسی:\nبه کلماتی که نشان‌دهنده فشار ذهنی هستند گوش دهید: schlechtes Gewissen (عذاب وجدان)، Druck (فشار)، perfekt sein (کامل بودن)."
    }
  ],

  speaking: [
    {
      title: "مونولوگ: ارائه کامل غذاهای ارگانیک",
      pattern: "Einleitung -> Erfahrungen -> Vorteile -> Nachteile -> Meinung -> Schluss",
      exercise: "مدت ۳ دقیقه مانند یک امتحان واقعی، ارائه متن ریدینگ (Bio-Lebensmittel) را خودتان با صدای بلند و روان اجرا کنید. تصور کنید جلوی دو ممتحن نشسته‌اید. سعی کنید به کاغذ نگاه نکنید."
    },
    {
      title: "دیالوگ: شروع یک ورزش مشترک",
      pattern: "Hast du Lust...? / Wir könnten... / Ich habe mir vorgenommen...",
      exercise: "به دوستتان زنگ بزنید و به آلمانی بگویید: «سلام، من تصمیم گرفته‌ام بیشتر ورزش کنم (vorgenommen). تو هم میای دو روز در هفته با هم بدویم؟ اینطوری انگیزه بیشتری داریم.»"
    }
  ],

  cultureTip: "کلمه جذاب «der Schweinehund» (سگِ خوک‌صفتِ درون!): در فرهنگ آلمانی وقتی کسی تنبلی می‌کند و نمی‌تواند یک عادت خوب (مثل رفتن به باشگاه در روز بارانی) را شروع کند، می‌گویند او باید بر «innerer Schweinehund» خود غلبه کند! این یک کلمه استعاری، بسیار رایج و بامزه است به معنای صدای درونی‌ای که ما را به تنبلی دعوت می‌کند. وقتی در مکالمه آلمانی بگویید: «Ich muss meinen inneren Schweinehund überwinden» (باید بر سگِ خوک‌صفت درونم غلبه کنم)، آلمانی‌ها با لبخندی بزرگ به شما نگاه خواهند کرد!"
};
