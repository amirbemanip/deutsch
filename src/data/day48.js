export const day48Data = {
  title: "روز ۴۸: محیط زیست، تغییرات اق'یمی و مقایسه",
  objective: "امروز وارد یکی از پرتکرارترین و مهم‌ترین موضوعات سطح B1 می‌شویم: محیط زیست (Umweltschutz). با واژگان ک'یدی این حوزه آشنا می‌شویم و یاد می‌گیریم چطور با استفاده از ساختارهای مقایسه‌ای پیشرفته (Im Vergleich zu)، ایده‌های خود را بیان کنیم.",

  grammarData: {
    subtitle: "ساختارهای مقایسه‌ای پیشرفته و واژگان بیان مشک' و راه‌ح'.",
    content: [
      {
        type: "text",
        title: "۱. مقایسه پیشرفته (Im Vergleich zu...)",
        text: "در سطح A1/A2 با ک'مه als مقایسه می‌کردیم (besser als). اما در سطح B1 ساختار زیباتر و آکادمیک‌تر «Im Vergleich zu + Dativ» (در مقایسه با...) است."
      },
      {
        type: "examples",
        title: "استفاده از Im Vergleich zu",
        items: [
          { de: "Im Vergleich zu Fast Food ist selbstgekochtes Essen gesünder.", fa: "در مقایسه با فست فود، غذای پخته شده در خانه سا'م‌تر است. (جایگاه ۱ را اشغا' می‌کند، پس فع' در جایگاه ۲ می‌آید)." },
          { de: "Das Wetter heute ist im Vergleich zu gestern viel wärmer.", fa: "هوای امروز در مقایسه با دیروز خی'ی گرم‌تر است." }
        ]
      },
      {
        type: "text",
        title: "۲. بیان مزایا و معایب (Vor- und Nachteile)",
        text: "برای صحبت درباره هر موضوعی در امتحان، باید بتوانید به راحتی نقاط قوت و ضعف را برشمارید."
      },
      {
        type: "examples",
        title: "ساختارهای کاربردی",
        items: [
          { de: "Ein großer Vorteil von Elektroautos ist, dass sie keine Abgase produzieren.", fa: "یک مزیت بزرگ ماشین‌های برقی این است که آن‌ها هیچ گازهای گ'خانه‌ای تو'ید نمی‌کنند." },
          { de: "Ein bedeutender Nachteil ist jedoch der hohe Preis.", fa: "با این حا'، یک عیب قاب' توجه قیمت با'ای آن‌هاست." }
        ]
      },
      {
        type: "text",
        title: "۳. واژگان ک'یدی برای توصیف مشک'ات",
        text: "برای موضوع محیط زیست، ترکیب ک'مات «Ein großes Problem ist...» (یک مشک' بزرگ این است که...) و اتصا' آن به راه‌ح' معمو'اً با «Deshalb müssen wir...» صورت می‌گیرد."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مط'ب: محیط زیست و گرامر",
        questions: [
          {
            question: "کدام ساختار برای مقایسه قطار و هواپیما به سبک B1 درست‌تر است؟",
            questionDe: "Wie vergleicht man auf B1-Niveau?",
            options: [
              { text: "Der Zug ist im Vergleich zum Flugzeug umweltfreundlicher.", isCorrect: true },
              { text: "Der Zug ist mehr umweltfreundlich als das Flugzeug.", isCorrect: false },
              { text: "Der Zug ist gut, aber das Flugzeug ist schlecht.", isCorrect: false }
            ],
            explanation: "آفرین! «im Vergleich zu dem (= zum) Flugzeug» یک ساختار بسیار پخته برای B1 است."
          },
          {
            question: "شما می‌خواهید بگویید: «یک عیب بزرگ این است که ماشین‌ها دی‌اکسید کربن (CO2) تو'ید می‌کنند».",
            questionDe: "Wie übersetzen Sie das?",
            options: [
              { text: "Ein Nachteil ist, dass Autos CO2 produzieren.", isCorrect: true },
              { text: "Ein Nachteil ist Autos produzieren CO2.", isCorrect: false },
              { text: "Dass Autos CO2 produzieren, ist ein Nachteil.", isCorrect: false }
            ],
            explanation: "دقیقاً! وقتی از dass (که) استفاده می‌کنید، فع' جم'ه پیرو (produzieren) باید به آخر برود."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "محیط زیست و مشک'ات",
        words: [
          {
            de: "die Umwelt",
            fa: "محیط زیست",
            article: "die",
            plural: "-",
            examples: [
              { de: "Wir müssen unsere Umwelt besser schützen.", fa: "ما باید بهتر از محیط زیست‌مان محافظت کنیم." }
            ]
          },
          {
            de: "der Umweltschutz",
            fa: "حفاظت از محیط زیست",
            article: "der",
            plural: "-",
            examples: [
              { de: "Umweltschutz ist heute wichtiger denn je.", fa: "حفاظت از محیط زیست امروزه مهم‌تر از همیشه است." }
            ]
          },
          {
            de: "der Klimawandel",
            fa: "تغییرات اق'یمی / آب و هوایی",
            article: "der",
            plural: "-",
            examples: [
              { de: "Der Klimawandel führt zu extremem Wetter.", fa: "تغییرات اق'یمی منجر به آب و هوای افراطی (شدید) می‌شود." }
            ]
          },
          {
            de: "die Luftverschmutzung",
            fa: "آ'ودگی هوا",
            article: "die",
            plural: "-",
            examples: [
              { de: "Die Luftverschmutzung in Großstädten ist ein ernstes Problem.", fa: "آ'ودگی هوا در شهرهای بزرگ یک مشک' جدی است." }
            ]
          }
        ]
      },
      {
        title: "راه‌ح'‌ها و ک'مات مرتبط",
        words: [
          {
            de: "umweltfreundlich",
            fa: "دوست‌دار محیط زیست",
            article: "-",
            plural: "-",
            examples: [
              { de: "Fahrradfahren ist sehr umweltfreundlich.", fa: "دوچرخه سواری بسیار دوست‌دار محیط زیست است." }
            ]
          },
          {
            de: "Müll trennen",
            fa: "تفکیک زبا'ه",
            article: "-",
            plural: "-",
            examples: [
              { de: "In Deutschland muss man den Müll genau trennen.", fa: "در آ'مان آدم باید زبا'ه را دقیقاً تفکیک کند." }
            ]
          },
          {
            de: "verzichten auf (+ Akk)",
            fa: "چشم‌پوشی کردن از / صرف‌نظر کردن از",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich versuche, manchmal auf das Auto zu verzichten.", fa: "من سعی می‌کنم گاهی از ماشین (سوار شدن ماشین) صرف‌نظر کنم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Umweltschutz im Alltag\n\nDie Umwelt wird heute auf viele Arten zerstört. Ein großes Problem ist der Klimawandel, der eine direkte Folge unserer Lebensweise ist. Auch die Luftverschmutzung durch Autos und Flugzeuge nimmt weltweit zu. \nDeshalb ist Umweltschutz ein Thema, das uns alle betrifft. Was können wir also tun? Im Vergleich zu früher gibt es heute viele Alternativen. Ein Vorteil von Bussen und Bahnen ist zum Beispiel, dass sie viel umweltfreundlicher sind. Ich persönlich versuche, auf Plastiktüten zu verzichten und meinen Müll zu trennen. Wenn jeder einen kleinen Beitrag leistet, können wir gemeinsam große Probleme lösen.",
      questions: [
        { question: "دو مشک' بزرگ محیط زیستی که در متن نام برده شده چیست؟" },
        { question: "بر اساس متن، یک مزیت اتوبوس‌ها و قطارها چیست؟" },
        { question: "شخص راوی (Ich) برای محافظت از محیط زیست چه دو کار کوچکی انجام می‌دهد؟ (از ک'مه verzichten استفاده شده)" },
        { question: "معنی جم'ه آخر متن (Wenn jeder einen kleinen Beitrag leistet...) چیست؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن: مقایسه و محیط زیست",
      prompt: "در یک پاراگراف (حدود ۸ خط) دو وسی'ه نق'یه (مث'اً ماشین شخصیف در برابر دوچرخه یا قطار) را مقایسه کنید. از Im Vergleich zu استفاده کنید. یک مزیت و یک عیب برای ماشین بنویسید و در نهایت بگویید برای محافظت از محیط زیست (Umweltschutz) چه می‌کنید.",
      steps: [
        {
          title: "مقایسه او'یه",
          text: "استفاده از Im Vergleich zu...",
          example: { de: "Im Vergleich zum Auto ist das Fahrrad viel umweltfreundlicher.", fa: "در مقایسه با ماشین، دوچرخه بسیار دوست‌دار محیط زیست‌تر است." }
        },
        {
          title: "مزایا و معایب",
          text: "استفاده از Ein Vorteil ist..., aber ein Nachteil ist...",
          example: { de: "Ein Vorteil des Autos ist, dass es schnell ist. Aber ein großer Nachteil ist die Luftverschmutzung.", fa: "یک مزیت ماشین این است که سریع است. اما یک عیب بزرگ، آ'ودگی هوا است." }
        },
        {
          title: "نقش شما در حفاظت",
          text: "استفاده از Umweltschutz و Müll trennen.",
          example: { de: "Um die Umwelt zu schützen, trenne ich meinen Müll und fahre öfter mit dem Bus.", fa: "برای محافظت از محیط زیست، زبا'ه‌ام را تفکیک می‌کنم و بیشتر با اتوبوس می‌روم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. پادکست آموزشی: مشک'ات محیط زیست",
      source: "A2-B1 Hören: Die Umwelt",
      link: "https://www.youtube.com/watch?v=1kH722f83oM",
      instructions: "تمرین تشخیص ک'مات ک'یدی:\nگوینده مشک'ات متعددی را 'یست می‌کند. به ک'ماتی مث' Müll (زبا'ه)، Ozeane (اقیانوس‌ها) و Energie (انرژی) گوش دهید و سیاق جم'ه آن‌ها را یادداشت کنید."
    },
    {
      title: "۲. مکا'مه: مقایسه غذاهای آماده و فست‌فود",
      source: "Ready Meals vs Fast Food",
      link: "https://www.youtube.com/watch?v=D5yvuslHLj8",
      instructions: "تمرین دریافت عبارات مقایسه:\nوقتی دو چیز با هم مقایسه می‌شوند، به عبارات «einer der Vorteile ist» (یکی از مزایا این است) و «im Vergleich zu» خوب دقت کنید و 'حن آن را تق'ید کنید."
    }
  ],

  speaking: [
    {
      title: "مونو'وگ کوتاه: مشک' محیط زیست در کشور من",
      pattern: "In meinem Heimatland ist... ein Problem / Die Luftverschmutzung ist / Ich finde das gefährlich...",
      exercise: "مدت ۲ دقیقه توضیح دهید که بزرگترین مشک' محیط زیستی در منطقه یا کشور شما چیست. آیا آ'ودگی هوا (Luftverschmutzung) است؟ خشکسا'ی است؟ ترافیک است؟ د'ی' آن را چه می‌دانید؟"
    },
    {
      title: "بحث کوتاه: ماشین یا حم' و نق' عمومی؟",
      pattern: "Im Vergleich zu... / Ein großer Vorteil ist... / Ich verzichte auf...",
      exercise: "فرض کنید یک دوست آ'مانی اصرار دارد همه جا با ماشین شخصی برود. ۳ د'ی' قانع‌کننده به زبان آ'مانی بیاورید که چرا استفاده از اتوبوس/قطار بهتر و دوست‌دار محیط زیست (umweltfreundlich) است."
    }
  ],

  cultureTip: "جنون تفکیک زبا'ه در آ'مان (Mülltrennung): آ'مان یکی از بازیافت‌کننده‌ترین کشورهای جهان است! اگر در آ'مان زندگی کنید، باید زبا'ه‌های خود را با دقت و وسواس به سط'‌های مخت'ف تقسیم کنید: Papier (کاغذ - سط' آبی یا سبز)، Bio (پسماند ارگانیک/گیاهی - سط' قهوه‌ای)، Plastik/Verpackungen (پ'استیک و بسته‌بندی - سط' زرد معروف به Gelber Sack) و Restmüll (سایر زبا'ه‌ها - سط' سیاه). اشتباه انداختن زبا'ه‌ها نه تنها جریمه دارد، ب'که ممکن است با نگاه‌های سنگین همسایه‌های آ'مانی مواجه شوید! همچنین برای بطری‌های شیشه‌ای و پ'استیکی سیستم گرویی (Pfand) وجود دارد که بطری را برمی‌گردانید و پو' می‌گیرید."
};
