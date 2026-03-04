export const day36Data = {
  title: "روز ۳۶: تکنولوژی، شبکه‌های اجتماعی و بیان مزایا و معایب",
  objective: "امروز درباره دو موضوع داغ و همیشگی در آزمون‌های زبان صحبت می‌کنیم: تکنولوژی و شبکه‌های اجتماعی. همچنین یاد می‌گیریم چگونه مانند یک فرد دارای سطح B1 حرفه‌ای، مزایا و معایب (Vorteile und Nachteile) یک موضوع را با ساختارهای دوقلو بیان کنیم.",

  grammarData: {
    subtitle: "بیان همزمان دو جنبه: Einerseits ... andererseits / Auf der einen Seite ... auf der anderen Seite.",
    content: [
      {
        type: "text",
        title: "۱. ساختارهای تضاد (Gegensatz)",
        text: "وقتی می‌خواهید درباره موضوعی مثل شبکه‌های اجتماعی نظر متعادلی بدهید (هم خوب است هم بد)، بهترین راه استفاده از ساختارهای دوقلوی تضاد است. این جملات نشان می‌دهند شما توانایی تحلیل عمیق دارید."
      },
      {
        type: "table",
        title: "کلمات ربط برای بیان مزایا/معایب",
        rows: [
          { de: "einerseits ..., andererseits ...", fa: "از یک طرف ...، از طرف دیگر ..." },
          { de: "auf der einen Seite ..., auf der anderen Seite ...", fa: "در یک سمت ...، در سمت دیگر ..." }
        ]
      },
      {
        type: "alert",
        title: "قانون طلایی جایگاه فعل",
        text: "کلماتی مثل einerseits و andererseits معمولاً در جایگاه 1 می‌نشینند، بنابراین فعل بلافاصله در جایگاه 2 (بعد از آن‌ها) می‌آید."
      },
      {
        type: "examples",
        title: "مثال‌های کاربردی",
        items: [
          { de: "Einerseits ist das Internet sehr praktisch. Andererseits kann es gefährlich sein.", fa: "از یک طرف اینترنت بسیار کاربردی است. از طرف دیگر می‌تواند خطرناک باشد." },
          { de: "Auf der einen Seite verbindet Facebook Menschen. Auf der anderen Seite kostet es viel Zeit.", fa: "در یک سمت، فیس‌بوک انسان‌ها را به هم وصل می‌کند. در سمت دیگر وقت زیادی می‌گیرد." },
          { de: "[نکته]:", fa: "شما می‌توانید هر دو بخش را با یک کاما در یک جمله ترکیب کنید: Einerseits ist es praktisch, andererseits ist es teuer." }
        ]
      },
      {
        type: "text",
        title: "۲. استفاده از wegen و trotz",
        text: "یکی دیگر از ویژگی‌های بارز سطح B1، استفاده از حروف اضافه wegen (به‌خاطرِ / به دلیلِ) و trotz (با وجودِ) همراه با حالت گرامری Genitiv (اضافه ملکی) است."
      },
      {
        type: "examples",
        title: "تبدیل جملات فعلی به اسمی (Genitiv)",
        items: [
          { de: "Weil das Wetter schlecht ist, bleiben wir zu Hause. (استفاده از weil)", fa: "چون هوا بد است، در خانه می‌مانیم." },
          { de: "Wegen des schlechten Wetters bleiben wir zu Hause. (استفاده از wegen)", fa: "به دلیل هوایِ بد (Genitiv)، ما در خانه می‌مانیم. (این جمله بسیار سطح بالاتر است)." },
          { de: "Obwohl es regnet, gehen wir spazieren. (استفاده از obwohl)", fa: "با وجود اینکه باران می‌بارد، ما به پیاده‌روی می‌رویم." },
          { de: "Trotz des Regens gehen wir spazieren. (استفاده از trotz)", fa: "با وجودِ باران (Genitiv)، ما به پیاده‌روی می‌رویم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ساختارهای دوگانه و حروف اضافه",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «از یک طرف خرید آنلاین راحت است، از طرف دیگر برای مغازه‌ها بد است.» کدام درست است؟",
            questionDe: "Welcher Satz ist grammatikalisch richtig?",
            options: [
              { text: "Einerseits ist es bequem, andererseits das ist schlecht für Geschäfte.", isCorrect: false },
              { text: "Einerseits ist es bequem, andererseits ist es schlecht für Geschäfte.", isCorrect: true },
              { text: "Einerseits es ist bequem, andererseits es ist schlecht für Geschäfte.", isCorrect: false }
            ],
            explanation: "دقیقاً! کلمات einerseits و andererseits هر دو در جایگاه ۱ هستند، بنابراین فعل باید بلافاصله بعد از آن‌ها (جایگاه ۲) بیاید (ist / ist)."
          },
          {
            question: "کدام جمله به معنای «به دلیل ترافیک من دیر رسیدم» و در سطح B1 نوشته شده است؟",
            questionDe: "Finden Sie die beste B1-Struktur.",
            options: [
              { text: "Weil der Stau, kam ich zu spät.", isCorrect: false },
              { text: "Deshalb der Stau, kam ich zu spät.", isCorrect: false },
              { text: "Wegen des Staus kam ich zu spät.", isCorrect: true }
            ],
            explanation: "آفرین! کلمه wegen یک حرف اضافه است که معمولاً به Genitiv (des Staus) نیاز دارد و مستقیماً روی یک اسم سوار می‌شود، نه یک جمله کامل."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "تکنولوژی و شبکه‌های اجتماعی",
        words: [
          {
            de: "die Technologie",
            fa: "تکنولوژی / فناوری",
            article: "die",
            plural: "die Technologien",
            examples: [
              { de: "Technologie erleichtert unser Leben.", fa: "تکنولوژی زندگی ما را آسان‌تر می‌کند." }
            ]
          },
          {
            de: "das soziale Netzwerk",
            fa: "شبکه اجتماعی",
            article: "das",
            plural: "die sozialen Netzwerke",
            examples: [
              { de: "Jugendliche nutzen oft soziale Netzwerke.", fa: "جوانان اغلب از شبکه‌های اجتماعی استفاده می‌کنند." }
            ]
          },
          {
            de: "der Bildschirm",
            fa: "صفحه نمایش (مانیتور / صفحه گوشی)",
            article: "der",
            plural: "die Bildschirme",
            examples: [
              { de: "Wir verbringen zu viel Zeit vor dem Bildschirm.", fa: "ما وقت زیادی را جلوی صفحه نمایش می‌گذرانیم." }
            ]
          },
          {
            de: "erreichbar",
            fa: "در دسترس (قابل تماس)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Durch das Handy sind wir immer erreichbar.", fa: "به وسیله موبایل ما همیشه در دسترس هستیم." }
            ]
          }
        ]
      },
      {
        title: "مزایا، معایب و استرس",
        words: [
          {
            de: "der Vorteil",
            fa: "مزیت / نقطه مثبت",
            article: "der",
            plural: "die Vorteile",
            examples: [
              { de: "Das Internet hat viele Vorteile.", fa: "اینترنت مزایای زیادی دارد." }
            ]
          },
          {
            de: "der Nachteil",
            fa: "عیب / نقطه منفی",
            article: "der",
            plural: "die Nachteile",
            examples: [
              { de: "Ein großer Nachteil ist der Datenklau.", fa: "یک عیب بزرگ، سرقت اطلاعات است." }
            ]
          },
          {
            de: "überfordert",
            fa: "تحت فشار روانی شدید / کلافه از حجم کار",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wegen der vielen E-Mails fühle ich mich oft überfordert.", fa: "به خاطر ایمیل‌های زیاد من اغلب احساس فشار روانی/کلافگی می‌کنم." }
            ]
          },
          {
            de: "den Kopf frei bekommen",
            fa: "ذهن را آزاد کردن / ریلکس کردن (اصطلاح)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich gehe spazieren, um den Kopf frei zu bekommen.", fa: "من می‌روم قدم بزنم تا ذهنم را آزاد کنم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Fluch und Segen der Technologie\n\nDas Smartphone ist heute ein fester Bestandteil unseres Alltags. Es gibt viele Diskussionen über die Vorteile und Nachteile von sozialen Netzwerken. Auf der einen Seite ermöglichen Apps wie WhatsApp oder Instagram einen schnellen Austausch von Informationen. Wir sind immer erreichbar und können leicht mit Freunden in Kontakt bleiben.\nAuf der anderen Seite hat diese Entwicklung auch Nachteile. Viele Menschen, besonders Jugendliche, verbringen zu viel Zeit vor dem Bildschirm. Wegen der ständigen Erreichbarkeit fühlen sich viele Leute gestresst und überfordert.\nZusammenfassend kann man sagen, dass Technologie sehr praktisch ist. Trotz des Stresses möchte ich nicht auf mein Smartphone verzichten. Aber ich versuche, am Wochenende manchmal offline zu sein, um den Kopf frei zu bekommen.",
      questions: [
        { question: "نویسنده چه مزیتی (Vorteil) را در مورد شبکه‌های اجتماعی ذکر می‌کند؟ (با استفاده از auf der einen Seite)" },
        { question: "چرا بسیاری از مردم احساس استرس و کلافگی (überfordert) می‌کنند؟ (به دلیلِ... / Wegen)" },
        { question: "با وجود استرس (Trotz)، نتیجه‌گیری کلی نویسنده درباره گوشی هوشمندش چیست؟" },
        { question: "او در آخر هفته‌ها برای آزاد کردن ذهنش سعی می‌کند چه کاری انجام دهد؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره شبکه‌های اجتماعی",
      prompt: "یک پاراگراف ۵-۶ خطی درباره نظر خودتان در مورد شبکه‌های اجتماعی (مثل اینستاگرام) بنویسید. از ساختار einerseits/andererseits و کلمه überfordert استفاده کنید.",
      steps: [
        {
          title: "بیان جنبه مثبت",
          text: "استفاده از Einerseits...",
          example: { de: "Einerseits finde ich Instagram sehr interessant, weil ich schöne Fotos sehen kann.", fa: "از یک طرف من اینستاگرام را بسیار جالب می‌دانم چون می‌توانم عکس‌های زیبایی ببینم." }
        },
        {
          title: "بیان جنبه منفی",
          text: "استفاده از andererseits...",
          example: { de: "Andererseits verbringe ich zu viel Zeit dort.", fa: "از طرف دیگر وقت زیادی را آنجا می‌گذرانم." }
        },
        {
          title: "بیان احساس یا نتیجه",
          text: "استفاده از überfordert یا um den Kopf frei zu bekommen.",
          example: { de: "Manchmal fühle ich mich überfordert, deshalb lege ich mein Handy weg, um den Kopf frei zu bekommen.", fa: "گاهی اوقات احساس فشار/کلافگی می‌کنم، بنابراین گوشی‌ام را کنار می‌گذارم تا ذهنم را آزاد کنم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. بحث در مورد مزایا و معایب",
      source: "B1 Diskussion: Das Internet",
      link: "https://www.youtube.com/watch?v=EDrf3J0zMYc",
      instructions: "تمرین تشخیص ساختارهای تضاد:\nوقتی به بحث‌های آلمانی گوش می‌دهید، متوجه می‌شوید که آن‌ها هرگز فقط یک طرفه صحبت نمی‌کنند. سعی کنید وقتی یک آلمانی می‌گوید «Auf der einen Seite...»، شما فوراً منتظر جمله بعدی با «Auf der anderen Seite...» باشید."
    },
    {
      title: "۲. پادکست استرس و زندگی",
      source: "Stress im Alltag (B1)",
      link: "https://www.youtube.com/watch?v=EJhmeSk0y0M",
      instructions: "تمرین دریافت احساسات:\nبه لحن گوینده وقتی از فشارهای روزمره (Überforderung) حرف می‌زند دقت کنید. آن‌ها معمولاً از کلماتی مثل «Wahnsinn» (دیوانگی) یا «anstrengend» (خسته‌کننده) در کنار توصیف استرس استفاده می‌کنند."
    }
  ],

  speaking: [
    {
      title: "مونولوگ ارزیابی: تکنولوژی",
      pattern: "Einerseits... Andererseits... Wegen...",
      exercise: "مدت ۲ دقیقه جلوی دوربین خود درباره نقش گوشی هوشمند در زندگی‌تان صحبت کنید.\nموضوعات:\n۱. چند ساعت در روز استفاده می‌کنید؟\n۲. مزایای آن چیست؟\n۳. معایب آن چیست؟\n۴. آیا به خاطر آن استرس می‌گیرید (wegen)؟"
    },
    {
      title: "دیالوگ کوتاه: شکایت از کار",
      pattern: "Ich bin überfordert... Ich brauche einen Ausgleich...",
      exercise: "تصور کنید با دوستتان در کافه هستید. به آلمانی غر بزنید: «به خاطر کار زیاد (Wegen der vielen Arbeit) وقت ندارم. من کلافه‌ام (überfordert). من باید یک سرگرمی جدید پیدا کنم تا ذهنم آزاد شود (um den Kopf frei zu bekommen).»"
    }
  ],

  cultureTip: "نگاه آلمانی‌ها به تکنولوژی (Datenschutz و Offline-Zeiten): آلمانی‌ها با اینکه کشور بسیار پیشرفته‌ای هستند، دیدگاهی بسیار انتقادی و محتاطانه نسبت به شبکه‌های اجتماعی دارند. واژه Datenschutz (حفاظت از داده‌ها/حریم خصوصی) در آلمان یک موضوع فوق‌العاده مهم است (به همین دلیل در آلمان برخلاف بسیاری از کشورها، سرویس Google Street View سال‌ها مسدود بود یا محدود است). همچنین مفهوم Digital Detox (سم‌زدایی دیجیتال) و دوری از موبایل در تعطیلات بسیار در آلمان محبوب است."
};
