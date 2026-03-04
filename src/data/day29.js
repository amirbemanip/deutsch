export const day29Data = {
  title: "روز ۲۹: ارائه و سخنرانی B1 (Präsentation) و کلمات ربط دوقلو",
  objective: "امروز یاد می‌گیریم چگونه مانند بخش دوم آزمون گوته (Teil 2: Präsentation) یک ارائه سه دقیقه‌ای ساختاریافته داشته باشیم. در کنار آن، سه «کلمه ربط دوقلو» یاد می‌گیریم که استفاده از آنها بلافاصله سطح زبان شما را یک پله بالاتر نشان می‌دهد.",

  grammarData: {
    subtitle: "کلمات ربط دوقلو (Zweiteilige Konnektoren) برای تاکید و زیبایی.",
    content: [
      {
        type: "text",
        title: "چرا کلمات ربط دوقلو؟",
        text: "در سطح B1 از شما انتظار می‌رود به جای استفاده مکرر از und (و) یا aber (اما)، از ساختارهای زیباتری برای اتصال دو بخش از یک جمله استفاده کنید. این کلمات ربط از دو بخش تشکیل شده‌اند."
      },
      {
        type: "table",
        title: "۳ کلمه ربط دوقلوی طلایی",
        rows: [
          { de: "sowohl ... als auch ...", fa: "هم ... و هم ... / هم این ... هم آن ..." },
          { de: "weder ... noch ...", fa: "نه ... و نه ... / نه این ... نه آن ..." },
          { de: "nicht nur ..., sondern auch ...", fa: "نه تنها ...، بلکه ... نیز" }
        ]
      },
      {
        type: "examples",
        title: "۱. هم این، هم آن (sowohl ... als auch)",
        items: [
          { de: "Ich spreche sowohl Englisch als auch Deutsch.", fa: "من هم انگلیسی و هم آلمانی صحبت می‌کنم. (به جای: Ich spreche Englisch und Deutsch)" },
          { de: "Das Hotel war sowohl teuer als auch schmutzig.", fa: "هتل هم گران و هم کثیف بود." }
        ]
      },
      {
        type: "examples",
        title: "۲. نه این، نه آن (weder ... noch)",
        items: [
          { de: "Ich habe heute weder Zeit noch Geld.", fa: "من امروز نه وقت دارم و نه پول. (نکته: این ساختار خودش منفی‌ساز است، پس نباید از nicht یا kein استفاده کنید)." },
          { de: "Er trinkt weder Kaffee noch Tee.", fa: "او نه قهوه می‌نوشد و نه چای." }
        ]
      },
      {
        type: "examples",
        title: "۳. نه تنها... بلکه (nicht nur ... sondern auch)",
        items: [
          { de: "Sie ist nicht nur intelligent, sondern auch sehr sympathisch.", fa: "او نه تنها باهوش است، بلکه بسیار خونگرم نیز هست." },
          { de: "Ich arbeite nicht nur als Lehrer, sondern ich studiere auch.", fa: "من نه تنها به عنوان معلم کار می‌کنم، بلکه درس هم می‌خوانم." }
        ]
      },
      {
        type: "text",
        title: "ساختار یک ارائه B1 (Präsentation Aufbau)",
        text: "در بخش دوم امتحان شفاهی B1، باید درباره یک موضوع (مثل: سفر، شبکه‌های اجتماعی، ورزش) حدود ۳ دقیقه صحبت کنید. یک ارائه استاندارد شامل ۳ بخش است: Einleitung (مقدمه)، Hauptteil (بدنه اصلی شامل تجربه شخصی و وضعیت کشورتان)، و Schluss (نتیجه‌گیری)."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: کلمات ربط دوقلو",
        questions: [
          {
            question: "شما گیاه‌خوار هستید و می‌خواهید بگویید: «من گوشت نمی‌خورم، ماهی هم نمی‌خورم». کدام جمله با کلاس‌تر و بهتر است؟",
            questionDe: "Wie sagen Sie das eleganter?",
            options: [
              { text: "Ich esse nicht Fleisch und nicht Fisch.", isCorrect: false },
              { text: "Ich esse weder Fleisch noch Fisch.", isCorrect: true },
              { text: "Ich esse nicht nur Fleisch sondern auch Fisch.", isCorrect: false }
            ],
            explanation: "آفرین! weder...noch دقیقاً به معنایِ «نه این و نه آن» است و به تنهایی جمله را منفی می‌کند."
          },
          {
            question: "می‌خواهید همکارتان را تحسین کنید: «او (زن) نه تنها مهربان است، بلکه خیلی هم به من کمک می‌کند.»",
            questionDe: "Wählen Sie die richtige Struktur.",
            options: [
              { text: "Sie ist sowohl nett als auch sie hilft mir.", isCorrect: false },
              { text: "Sie ist weder nett noch hilfreich.", isCorrect: false },
              { text: "Sie ist nicht nur nett, sondern sie hilft mir auch viel.", isCorrect: true }
            ],
            explanation: "دقیقاً! nicht nur... sondern auch برای بیان اینکه شخص یک ویژگی خوب دارد و علاوه بر آن یک ویژگی خوب دیگر هم دارد (نه تنها... بلکه) استفاده می‌شود."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "کلمات برای ارائه (Präsentation)",
        words: [
          {
            de: "das Thema",
            fa: "موضوع",
            article: "das",
            plural: "die Themen",
            examples: [
              { de: "Mein Thema heute lautet: Reisen.", fa: "موضوع امروز من این است (نام دارد): سفر کردن." }
            ]
          },
          {
            de: "die Erfahrung",
            fa: "تجربه",
            article: "die",
            plural: "die Erfahrungen",
            examples: [
              { de: "Ich habe gute Erfahrungen mit dem Zug gemacht.", fa: "من تجربیات خوبی با قطار داشته‌ام." }
            ]
          },
          {
            de: "das Heimatland",
            fa: "کشور زادگاه (موطن)",
            article: "das",
            plural: "die Heimatländer",
            examples: [
              { de: "In meinem Heimatland ist das Wetter sehr heiß.", fa: "در کشور زادگاه من هوا بسیار گرم است." }
            ]
          },
          {
            de: "zusammenfassend",
            fa: "به طور خلاصه / در نتیجه‌گیری",
            article: "-",
            plural: "-",
            examples: [
              { de: "Zusammenfassend kann man sagen, dass Sport wichtig ist.", fa: "به طور خلاصه می‌توان گفت که ورزش مهم است." }
            ]
          }
        ]
      },
      {
        title: "کلمات ربط دوقلو (Zweiteilige Konnektoren)",
        words: [
          {
            de: "sowohl ... als auch ...",
            fa: "هم ... و هم ...",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wir besuchen sowohl das Museum als auch den Park.", fa: "ما هم موزه و هم پارک را می‌بینیم (بازدید می‌کنیم)." }
            ]
          },
          {
            de: "weder ... noch ...",
            fa: "نه ... و نه ...",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich kann weder singen noch tanzen.", fa: "من نه می‌توانم بخوانم و نه برقصم." }
            ]
          },
          {
            de: "nicht nur ..., sondern (auch) ...",
            fa: "نه تنها ... بلکه (همچنین) ...",
            article: "-",
            plural: "-",
            examples: [
              { de: "Das Auto ist nicht nur schnell, sondern auch sicher.", fa: "این ماشین نه تنها سریع است، بلکه امن نیز هست." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Eine Präsentation: Reisen und Urlaub\n\nHallo zusammen! Mein Thema heute lautet: Reisen und Urlaub. Zuerst spreche ich über meine persönlichen Erfahrungen. Danach erzähle ich etwas über die Situation in meinem Heimatland. Zum Schluss nenne ich Vorteile und Nachteile.\nIch reise sehr gern. Letztes Jahr war ich in Italien. Die Reise war unvergesslich. Das Wetter war nicht nur sonnig, sondern die Leute waren auch sehr freundlich. Ich spreche sowohl Englisch als auch ein bisschen Italienisch, deshalb hatte ich keine Probleme.\nIn meinem Heimatland Iran reisen die Menschen oft in den Norden ans Meer oder in den Süden. Im Sommer ist es dort jedoch oft zu heiß, sodass viele Leute lieber in den Bergen Urlaub machen.\nZusammenfassend kann man sagen, dass Reisen sowohl entspannend als auch informativ ist. Danke für Ihre Aufmerksamkeit!",
      questions: [
        { question: "راوی (گوینده) در مقدمه، ساختار ارائه خود را چگونه تقسیم می‌کند؟ (Zuerst..., Danach..., Zum Schluss...)" },
        { question: "او در ایتالیا چه تجربه‌ای داشت و از کدام کلمه دوقلو برای توصیف هوا و مردم استفاده کرد؟" },
        { question: "او چه زبان‌هایی صحبت می‌کند؟ (از کلمه دوقلو استفاده شده)" },
        { question: "در نتیجه‌گیری (Zusammenfassend)، او در مورد سفر چه نظری می‌دهد؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن بدنه یک ارائه (تجربه شخصی)",
      prompt: "فرض کنید موضوع ارائه شما Sport und Gesundheit (ورزش و سلامتی) است. یک پاراگراف (حدود ۶ خط) درباره تجربه شخصی خود بنویسید.",
      steps: [
        {
          title: "استفاده از sowohl ... als auch",
          text: "بگویید که دو ورزش مختلف را انجام می‌دهید.",
          example: { de: "Um gesund zu bleiben, mache ich sowohl Yoga als auch Krafttraining.", fa: "برای سالم ماندن، من هم یوگا و هم تمرینات قدرتی انجام می‌دهم." }
        },
        {
          title: "استفاده از weder ... noch",
          text: "بگویید که دو چیز ناسالم (مثلاً سیگار و فست‌فود) را مصرف نمی‌کنید.",
          example: { de: "Ich rauche weder Zigaretten, noch esse ich oft Fastfood.", fa: "من نه سیگار می‌کشم، نه اغلب فست‌فود می‌خورم." }
        },
        {
          title: "استفاده از nicht nur ... sondern auch",
          text: "نتیجه فعالیت‌های خود را با این ساختار بیان کنید.",
          example: { de: "Sport ist nicht nur gut für den Körper, sondern auch für die Seele.", fa: "ورزش نه تنها برای بدن خوب است، بلکه برای روح نیز (مفید است)." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. گوش دادن به یک ارائه کامل",
      source: "B1 Goethe Sprechen Teil 2",
      link: "https://claims.advancedcare.com/default.aspx/browse/aHYT96/B1-Sprechen-Teil-2-Themen.pdf",
      instructions: "تمرین ساختار:\nوقتی به نمونه‌های امتحانی گوش می‌دهید، دقت کنید که همه کاندیداها از عبارات ثابت (Redemittel) استفاده می‌کنند: (Mein Thema heute ist..., Zuerst möchte ich..., In meiner Heimat..., Zusammenfassend...). این عبارات را حفظ کنید!"
    },
    {
      title: "۲. دیالوگ‌های روزمره: مطب دکتر",
      source: "Everyday Dialogues A2-B1",
      link: "https://www.youtube.com/watch?v=TESqCnU8ISM",
      instructions: "تمرین شنیدن در محیط:\nدر دیالوگ‌های مطب دکتر، گوش کنید که افراد چگونه علائم بیماری خود را شرح می‌دهند («Ich habe nicht nur Kopfschmerzen, sondern auch Fieber» = من نه تنها سردرد دارم، بلکه تب هم دارم)."
    }
  ],

  speaking: [
    {
      title: "شبیه‌سازی امتحان: ارائه (Präsentation)",
      pattern: "Mein Thema ist... Zuerst... In meiner Heimat... Zum Schluss...",
      exercise: "تایمر گوشی خود را روی ۳ دقیقه تنظیم کنید. جلوی آینه یک ارائه کامل درباره موضوع Lernen im Internet (یادگیری در اینترنت) بدهید.\nمراحل:\n۱. معرفی موضوع\n۲. تجربه شخصی شما (چقدر با گوشی یاد می‌گیرید؟)\n۳. وضعیت در کشور شما (آیا مردم زیاد از اینترنت برای یادگیری استفاده می‌کنند؟)\n۴. مزایا و معایب\n۵. نتیجه‌گیری."
    },
    {
      title: "استفاده زنده از کلمات دوقلو",
      pattern: "sowohl... als auch... / weder... noch...",
      exercise: "در حین ارائه بالا (یا در مکالمه با خودتان)، سعی کنید حداقل یک بار بگویید: «Das Internet ist nicht nur praktisch, sondern auch billiger.»"
    }
  ],

  cultureTip: "ساختارمندی و نظم در آلمان (Struktur & Ordnung): در مدارس و دانشگاه‌های آلمان، حتی از سنین پایین، نحوه ارائه دادن (Referat halten) تمرین می‌شود. آلمانی‌ها عاشق ساختار هستند (یک مقدمه واضح، بدنه، و نتیجه‌گیری همراه با مزایا و معایب). اگر در امتحان گوته آلمانی‌تان ضعیف باشد اما ساختار ارائه شما مرتب باشد، نمره بسیار خوبی در بخش Sprechen خواهید گرفت! (همیشه با Eine Einleitung شروع کنید)."
};
