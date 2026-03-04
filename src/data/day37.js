export const day37Data = {
  title: "روز ۳۷: تأثیر تکنولوژی بر خانواده، کودکان و کلمات دوگانه",
  objective: "امروز یاد می‌گیریم چطور درباره موضوعات حساس‌ترِ تکنولوژی صحبت کنیم: تأثیر موبایل بر کودکان، قلدری مجازی (Cybermobbing) و نقش اینترنت در حفظ ارتباط خانواده‌های دور از هم. همچنین کلمات ربط دوقلوی جدیدی یاد می‌گیریم.",

  grammarData: {
    subtitle: "استفاده از کلمات ربط دوگانه پیشرفته (zwar... aber / weder... noch).",
    content: [
      {
        type: "text",
        title: "۱. ساختار zwar ... aber ... (اگرچه ... اما ...)",
        text: "این ساختار برای بیان یک تضاد ملایم بسیار کاربردی است. شما یک نکته را می‌پذیرید (zwar)، اما بلافاصله یک نکته متضاد یا محدودکننده را اضافه می‌کنید (aber)."
      },
      {
        type: "alert",
        title: "جایگاه فعل",
        text: "کلمه zwar می‌تواند در جایگاه ۱ या ۳ قرار بگیرد، اما aber همیشه در جایگاه صفر (بین دو جمله) است."
      },
      {
        type: "examples",
        title: "مثال‌های zwar ... aber",
        items: [
          { de: "Das Handy ist zwar teuer, aber es hat eine tolle Kamera.", fa: "این گوشی اگرچه گران است، اما دوربین فوق‌العاده‌ای دارد. (zwar در جایگاه ۳ بعد از فعل)." },
          { de: "Zwar ist das Handy teuer, aber es hat eine tolle Kamera.", fa: "اگرچه این گوشی گران است، اما دوربین فوق‌العاده‌ای دارد. (zwar در جایگاه ۱)." },
          { de: "Social Media ist zwar praktisch, aber manchmal auch sehr stressig.", fa: "سوشال مدیا اگرچه کاربردی است، اما گاهی بسیار استرس‌زا نیز هست." }
        ]
      },
      {
        type: "text",
        title: "۲. کلمات طلایی برای توصیف تأثیرات (Verben und Ausdrücke)",
        text: "وقتی درباره تأثیرات یک چیز صحبت می‌کنیم، باید از کلماتی مثل «کمک کردن»، «خطر داشتن» و «وابسته بودن» استفاده کنیم."
      },
      {
        type: "examples",
        title: "عبارات تأثیرگذاری",
        items: [
          { de: "in engem Kontakt bleiben", fa: "در ارتباط نزدیک ماندن (Dank der Technologie bleibe ich mit meiner Familie in engem Kontakt)." },
          { de: "klare Regeln vereinbaren", fa: "قوانین مشخصی تعیین کردن (Eltern müssen klare Regeln vereinbaren)." },
          { de: "abhängig sein von (+ Dat)", fa: "وابسته بودن به (Viele Jugendliche sind abhängig vom Internet)." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ساختارهای دوگانه",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «اینترنت اگرچه سریع است، اما خطرناک است». کدام فرم درست است؟",
            questionDe: "Wie sagt man das auf Deutsch?",
            options: [
              { text: "Zwar das Internet ist schnell, aber es ist gefährlich.", isCorrect: false },
              { text: "Das Internet ist zwar schnell, aber es ist gefährlich.", isCorrect: true },
              { text: "Das Internet zwar schnell ist, aber ist es gefährlich.", isCorrect: false }
            ],
            explanation: "آفرین! وقتی zwar در وسط جمله می‌آید، دقیقاً بعد از فعل (ist) قرار می‌گیرد."
          },
          {
            question: "کدام کلمه اضافه (Präposition) برای «abhängig sein» (وابسته بودن) استفاده می‌شود؟",
            questionDe: "Welche Präposition passt?",
            options: [
              { text: "abhängig für", isCorrect: false },
              { text: "abhängig von", isCorrect: true },
              { text: "abhängig mit", isCorrect: false }
            ],
            explanation: "دقیقاً! abhängig بودن همیشه با von به همراه حالت گرامری Dativ استفاده می‌شود."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "تکنولوژی و خانواده",
        words: [
          {
            de: "die Distanz",
            fa: "فاصله",
            article: "die",
            plural: "die Distanzen",
            examples: [
              { de: "Trotz der Distanz sehen wir uns oft per Video.", fa: "با وجود فاصله، ما یکدیگر را اغلب از طریق ویدیو می‌بینیم." }
            ]
          },
          {
            de: "in engem Kontakt bleiben",
            fa: "در ارتباط نزدیک ماندن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Es ist wichtig, mit der Familie in engem Kontakt zu bleiben.", fa: "مهم است که با خانواده در ارتباط نزدیک بمانیم." }
            ]
          },
          {
            de: "die Bildschirmzeit",
            fa: "زمان صفحه نمایش (مدت زمان خیره شدن به اسکرین)",
            article: "die",
            plural: "-",
            examples: [
              { de: "Die Bildschirmzeit von Kindern sollte limitiert sein.", fa: "مدت زمان استفاده از صفحه نمایشِ کودکان باید محدود شود." }
            ]
          }
        ]
      },
      {
        title: "خطرات و قوانین",
        words: [
          {
            de: "das Cybermobbing",
            fa: "قلدری/آزار و اذیت سایبری",
            article: "das",
            plural: "-",
            examples: [
              { de: "Cybermobbing ist ein großes Problem in Schulen.", fa: "قلدری سایبری یک مشکل بزرگ در مدارس است." }
            ]
          },
          {
            de: "abhängig",
            fa: "وابسته / معتاد",
            article: "-",
            plural: "-",
            examples: [
              { de: "Viele Teenager sind abhängig von ihrem Handy.", fa: "بسیاری از نوجوانان به گوشی خود وابسته هستند." }
            ]
          },
          {
            de: "eine Regel vereinbaren",
            fa: "یک قانون وضع/توافق کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Eltern müssen klare Regeln vereinbaren.", fa: "والدین باید قوانین شفافی وضع کنند." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Technologie, Kinder und Familie\n\nDank der Technologie können heute viele Familien trotz großer Distanz in engem Kontakt bleiben. Zum Beispiel studiere ich in Deutschland, aber meine Eltern leben im Iran. Wir machen jeden Freitag einen Videocall. Gerade für Familien, die weit auseinander wohnen, ist das Internet ein riesiger Vorteil.\nAber wenn es um Kinder geht, gibt es viele Diskussionen. Einerseits können soziale Medien Kindern helfen, kreativ zu sein. Andererseits gibt es große Gefahren wie Cybermobbing oder Sucht. Viele Jugendliche sind heute abhängig von Likes und Kommentaren. Social Media ist zwar manchmal lehrreich, aber es kostet auch sehr viel Zeit.\nIch finde es wichtig, dass Eltern klare Regeln vereinbaren. Sie sollten die Bildschirmzeit kontrollieren und mit ihren Kindern über die Gefahren sprechen.",
      questions: [
        { question: "چرا راوی از اینترنت برای ارتباط با خانواده استفاده می‌کند؟ (به دلیلِ... Dank... / Distanz)" },
        { question: "بر اساس متن، یک مزیتِ اینترنت برای کودکان چیست؟ (kreativ)" },
        { question: "دو خطر بزرگ شبکه‌های اجتماعی برای جوانان در متن کدامند؟ (Cybermobbing / abhängig)" },
        { question: "توصیه نویسنده به والدین چیست؟ (Regeln / Bildschirmzeit)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره مقررات اینترنت برای کودکان",
      prompt: "آیا کودکان زیر ۱۲ سال باید گوشی هوشمند داشته باشند؟ نظر خود را در ۵-۶ خط بنویسید. از ساختارهای zwar...aber و کلمات Gefahr (خطر) و Regel (قانون) استفاده کنید.",
      steps: [
        {
          title: "بیان نظر کلی",
          text: "موافقید یا مخالف؟",
          example: { de: "Meiner Meinung nach sollten Kinder unter 12 Jahren kein eigenes Smartphone haben.", fa: "به نظر من کودکان زیر ۱۲ سال نباید گوشی هوشمندِ مخصوص به خود را داشته باشند." }
        },
        {
          title: "استفاده از zwar...aber",
          text: "یک مزیت را بپذیرید اما خطر را گوشزد کنید.",
          example: { de: "Das Handy ist zwar praktisch für Notfälle, aber das Internet hat viele Gefahren für Kinder.", fa: "گوشی اگرچه برای مواقع اضطراری کاربردی است، اما اینترنت خطرات زیادی برای کودکان دارد." }
        },
        {
          title: "ارائه پیشنهاد",
          text: "استفاده از Regeln (قوانین).",
          example: { de: "Deshalb ist es wichtig, dass Eltern klare Regeln vereinbaren und die Nutzung kontrollieren.", fa: "بنابراین مهم است که والدین قوانین شفافی وضع کنند و استفاده را کنترل کنند." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. پادکست رسانه‌ها و کودکان",
      source: "Social Media und Kinder (B1)",
      link: "https://www.youtube.com/watch?v=hF1Nxas8kKo",
      instructions: "تمرین شنیدن استدلال:\nهنگامی که کارشناسان در پادکست‌ها صحبت می‌کنند، به نحوه استفاده آن‌ها از کلمه «Gefahr» (خطر) و «Risiko» (ریسک) دقت کنید. آن‌ها معمولاً این کلمات را با افعالی مثل «bergen» (در بر داشتن) یا «mit sich bringen» (با خود به همراه آوردن) ترکیب می‌کنند."
    },
    {
      title: "۲. ویدیوکال با خانواده",
      source: "Videocall in German",
      link: "https://www.youtube.com/watch?v=QqyxEhjT0mE",
      instructions: "تمرین اصطلاحات تماس تصویری:\nکلماتی مثل «Ich kann dich nicht hören» (صدایت را ندارم)، «Das Bild ist eingefroren» (تصویر یخ زده/گیر کرده) یا «Die Verbindung ist schlecht» (اتصال ضعیف است) را در طول ویدیوها شکار کنید!"
    }
  ],

  speaking: [
    {
      title: "مونولوگ ۳ دقیقه‌ای: اینترنت و کودکان",
      pattern: "Heute spreche ich über... Einerseits... Zwar... aber... Zusammenfassend...",
      exercise: "سوالی که در امتحان بسیار رایج است: «Sollten Kinder Smartphones haben?». فرض کنید روبروی ممتحن هستید. ۳ دقیقه صحبت کنید. مزایا (سرگرمی، یادگیری، تماس با والدین) و معایب (قلدری مجازی، اعتیاد، مشکلات خواب) را بیان کنید و در نهایت نظر قاطع خود را بدهید."
    },
    {
      title: "صحبت درباره خانواده دور",
      pattern: "Trotz der Distanz... / Dank der Technologie... / in engem Kontakt...",
      exercise: "درباره نحوه ارتباط خود با خانواده‌تان در ایران صحبت کنید. بگویید هفته‌ای چند بار واتس‌اپ یا اسکایپ می‌کنید و چرا این تکنولوژی برای شما یک «نعمت» (Segen / riesiger Vorteil) است."
    }
  ],

  cultureTip: "تربیت کودکان در آلمان (Medienerziehung): والدین آلمانی به شدت روی «تربیت رسانه‌ای» فرزندانشان حساس هستند. برخلاف برخی کشورها که دادن تبلت به دست کودک برای آرام کردن او یک عادت رایج است، در آلمان این کار به خصوص در مکان‌های عمومی خیلی ناپسند شمرده می‌شود. بسیاری از والدین آلمانی تا سن ۱۲ یا ۱۴ سالگی اجازه داشتن گوشی هوشمند به فرزندان خود نمی‌دهند و معمولاً زمان تماشای تلویزیون (Bildschirmzeit) را به شدت، مثلاً به ۳۰ دقیقه در روز، محدود می‌کنند."
};
