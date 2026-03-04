export const day44Data = {
  title: "روز ۴۴: سینما، ادبیات، فرهنگ و مصرف رسانه",
  objective: "امروز درباره موضوعات پرتکرار فرهنگی مانند فیلم، سریال، کتاب و رویدادهای هنری صحبت می‌کنیم. یاد می‌گیریم چطور نظر خود را درباره داستان یک فیلم (Handlung) بیان کنیم، ژانرها را توضیح دهیم و عادات رسانه‌ای (Medienkonsum) خود را نقد کنیم.",

  grammarData: {
    subtitle: "ساختارهای معرفی داستان (Es geht um...) و حروف اضافه مکانی برای رویدادها.",
    content: [
      {
        type: "text",
        title: "۱. معرفی فیلم یا کتاب (Film / Buch vorstellen)",
        text: "یکی از سوالات همیشگی بخش مکالمه این است: «آخرین فیلمی که دیدی چه بود؟». برای معرفی داستان از ساختار ثابت «Es geht um...» (داستان درباره‌ی... است) استفاده می‌کنیم."
      },
      {
        type: "examples",
        title: "جملات کاربردی معرفی",
        items: [
          { de: "Zuletzt habe ich den Film 'Inception' gesehen.", fa: "اخیراً فیلم 'Inception' را دیدم." },
          { de: "In dem Film geht es um einen Mann, der Träume stehlen kann.", fa: "در این فیلم داستان درباره مردی است (Akkusativ) که می‌تواند رویاها را بدزدد." },
          { de: "Ich fand den Film sehr spannend/langweilig, weil...", fa: "من فیلم را بسیار هیجان‌انگیز/حوصله‌سربر یافتم، چون..." },
          { de: "Ich würde das Buch auf jeden Fall empfehlen.", fa: "من این کتاب را در هر صورت (حتماً) توصیه می‌کنم." }
        ]
      },
      {
        type: "text",
        title: "۲. رویدادهای فرهنگی (Kulturangebote)",
        text: "برای صحبت درباره رفتن به موزه، نمایشگاه یا کنسرت باید از حروف اضافه صحیح استفاده کنید (معمولاً in برای مکان‌های بسته و auf برای رویدادهای فضای باز)."
      },
      {
        type: "examples",
        title: "حروف اضافه رویدادها",
        items: [
          { de: "Ich gehe gern ins Museum (in das Museum).", fa: "من دوست دارم به موزه بروم. (حرکت -> Akkusativ)" },
          { de: "Gestern war ich in einer Ausstellung.", fa: "دیروز من در یک نمایشگاه بودم. (حضور -> Dativ)" },
          { de: "Gehen wir am Wochenende auf ein Konzert?", fa: "آخر هفته به یک کنسرت برویم؟ (رویداد باز -> auf + Akkusativ)" }
        ]
      },
      {
        type: "text",
        title: "۳. نقد مصرف رسانه (Medienkonsum)",
        text: "در سطح B1 از شما انتظار می‌رود بتوانید رفتارهای اجتماعی مانند استفاده زیاد از اینترنت یا تلویزیون را تحلیل کنید."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: فیلم و فرهنگ",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «در این کتاب، داستان درباره یک خانواده است.» کدام جمله از نظر گرامری کاملاً درست است؟",
            questionDe: "Welcher Satz ist grammatikalisch perfekt?",
            options: [
              { text: "In dem Buch es geht um eine Familie.", isCorrect: false },
              { text: "In dem Buch geht es um eine Familie.", isCorrect: true },
              { text: "Es geht um eine Familie in das Buch.", isCorrect: false }
            ],
            explanation: "آفرین! عبارت In dem Buch جایگاه 1 را اشغال می‌کند، پس فعل geht باید در جایگاه 2 (بلافاصله بعد از آن) بیاید. همچنین um همیشه با Akkusativ همراه است (eine Familie)."
          },
          {
            question: "شما می‌خواهید به دوستتان فیلمی را توصیه کنید و می‌گویید: «من فیلم را به تو پیشنهاد می‌کنم.» فعل empfehlen با چه حالتی می‌آید؟",
            questionDe: "Wie empfehlen Sie einen Film?",
            options: [
              { text: "Ich empfehle dich der Film.", isCorrect: false },
              { text: "Ich empfehle dir den Film.", isCorrect: true },
              { text: "Ich empfehle für dich den Film.", isCorrect: false }
            ],
            explanation: "دقیقاً! فعل empfehlen (پیشنهاد دادن) نیازمند دو مفعول است: «به چه کسی» (Dativ -> dir) و «چه چیزی» (Akkusativ -> den Film)."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "فیلم، کتاب و داستان",
        words: [
          {
            de: "die Handlung",
            fa: "پیرنگ / خط داستانی / ماجرا",
            article: "die",
            plural: "die Handlungen",
            examples: [
              { de: "Die Handlung des Films war unlogisch.", fa: "خط داستانی فیلم غیرمنطقی بود." }
            ]
          },
          {
            de: "spannend",
            fa: "هیجان‌انگیز / جذاب",
            article: "-",
            plural: "-",
            examples: [
              { de: "Der Krimi war von Anfang bis Ende spannend.", fa: "این داستان جنایی از ابتدا تا انتها هیجان‌انگیز بود." }
            ]
          },
          {
            de: "empfehlen",
            fa: "پیشنهاد دادن / توصیه کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Kannst du mir eine gute Serie empfehlen?", fa: "آیا می‌توانی یک سریال خوب به من پیشنهاد دهی؟" }
            ]
          },
          {
            de: "der Roman",
            fa: "رمان (کتاب داستانی)",
            article: "der",
            plural: "die Romane",
            examples: [
              { de: "Ich lese abends am liebsten Romane.", fa: "من عصرها ترجیح می‌دهم رمان بخوانم." }
            ]
          }
        ]
      },
      {
        title: "رویدادهای فرهنگی",
        words: [
          {
            de: "die Ausstellung",
            fa: "نمایشگاه (هنری، علمی و...)",
            article: "die",
            plural: "die Ausstellungen",
            examples: [
              { de: "Wollen wir morgen in die neue Foto-Ausstellung gehen?", fa: "می‌خواهی فردا به نمایشگاه عکس جدید برویم؟" }
            ]
          },
          {
            de: "das Sachbuch",
            fa: "کتاب علمی / غیرداستانی",
            article: "das",
            plural: "die Sachbücher",
            examples: [
              { de: "Ich interessiere mich sehr für historische Sachbücher.", fa: "من بسیار به کتاب‌های غیرداستانی تاریخی علاقه دارم." }
            ]
          },
          {
            de: "beeindruckend",
            fa: "تأثیرگذار / چشمگیر / فوق‌العاده",
            article: "-",
            plural: "-",
            examples: [
              { de: "Das Konzert gestern Abend war wirklich beeindruckend.", fa: "کنسرت دیشب واقعاً تأثیرگذار بود." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Kultur und Medienkonsum: früher und heute\n\nFrüher habe ich sehr viele Romane gelesen und bin oft ins Museum gegangen. Heute hat sich mein Medienkonsum stark verändert. In letzter Zeit schaue ich abends lieber Serien auf Streaming-Diensten, weil ich nach der Arbeit oft zu müde zum Lesen bin. \nZuletzt habe ich eine Dokumentation über Umweltschutz gesehen. In dem Film geht es um die Probleme von Plastik im Meer. Ich fand den Film sehr spannend, aber auch ein bisschen traurig. Einerseits ist Streaming sehr praktisch, andererseits verbringe ich dadurch oft zu viel Zeit vor dem Bildschirm. Deshalb versuche ich jetzt wieder bewusster Kultur zu erleben. Letztes Wochenende war ich in einer Kunst-Ausstellung, und das war wirklich beeindruckend.",
      questions: [
        { question: "چرا راوی در این اواخر بیشتر سریال می‌بیند تا کتاب بخواند؟ (دلیل در متن)" },
        { question: "آخرین فیلمی (مستندی) که او دید درباره چه موضوعی بود؟ (با استفاده از Es geht um... پاسخ دهید)" },
        { question: "نظر او درباره آن مستند چه بود؟ (دو صفت در متن پیدا کنید)" },
        { question: "او برای کاهش زمان جلوی مانیتور چه تلاشی می‌کند و آخر هفته گذشته چه کار کرد؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن: بررسی یک فیلم یا کتاب",
      prompt: "در یک پاراگراف (حدود ۸ خط) آخرین فیلم، سریال یا کتابی را که دیده‌اید/خوانده‌اید معرفی کنید. اسم آن را بگویید، در یک خط داستان آن را (Es geht um...) مشخص کنید، نظر شخصی خود را بدهید (warum fanden Sie es gut/schlecht?) و بگویید آیا آن را به دیگران توصیه می‌کنید یا خیر.",
      steps: [
        {
          title: "معرفی اثر",
          text: "استفاده از Zuletzt habe ich... gesehen/gelesen.",
          example: { de: "Zuletzt habe ich den Film 'Dark' gesehen.", fa: "اخیراً من سریال (فیلم) 'Dark' را دیدم." }
        },
        {
          title: "خلاصه داستان",
          text: "استفاده از Es geht um...",
          example: { de: "In der Serie geht es um Zeitreisen und vier Familien in einer kleinen Stadt.", fa: "در این سریال داستان درباره سفر در زمان و چهار خانواده در یک شهر کوچک است." }
        },
        {
          title: "نظر و پیشنهاد",
          text: "استفاده از spannend / langweilig و empfehlen.",
          example: { de: "Die Handlung war extrem spannend. Ich würde die Serie auf jeden Fall weiterempfehlen.", fa: "پیرنگ داستان بی‌نهایت هیجان‌انگیز بود. من این سریال را در هر صورت به دیگران توصیه می‌کنم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. مکالمه درباره فیلم و سینما",
      source: "Filmempfehlungen (B1)",
      link: "https://www.youtube.com/watch?v=mLzT7b8LAqw",
      instructions: "تمرین شنیدن ژانرها و صفات:\nهنگام گوش دادن به ویدیو، کلماتی که برای توصیف فیلم استفاده می‌شوند را یادداشت کنید: Actionfilm (فیلم اکشن)، Komödie (کمدی)، gruselig (ترسناک)، lustig (خنده‌دار)."
    },
    {
      title: "۲. پادکست: مصرف رسانه",
      source: "Medienkonsum heute",
      link: "https://www.youtube.com/watch?v=QD6UfeaNboo",
      instructions: "تمرین مقایسه (Früher vs. Heute):\nگویندگان معمولاً عادت‌های رسانه‌ای خود را مقایسه می‌کنند. به جملاتی که با «Früher...» (در گذشته...) شروع شده و با «Aber heute...» (اما امروز...) تکمیل می‌شوند دقت کنید."
    }
  ],

  speaking: [
    {
      title: "مونولوگ معرفی فیلم/کتاب",
      pattern: "Zuletzt habe ich... / Es geht um... / Die Handlung war... / Deshalb empfehle ich...",
      exercise: "تصور کنید در آزمون B1 از شما می‌پرسند «آخرین بار چه کتابی خواندید یا چه فیلمی دیدید؟». ۲ دقیقه کامل و جذاب درباره آن صحبت کنید. حتماً از ساختار Es geht um و صفت spannend استفاده کنید."
    },
    {
      title: "بحث دو نفره: کتاب یا اینترنت؟",
      pattern: "Meiner Meinung nach ist... / Einerseits... andererseits... / Das sehe ich auch so.",
      exercise: "شما و پارتنرتان باید تصمیم بگیرید: آیا کتاب خواندن در عصر اینترنت هنوز مهم است؟\nشما دفاع کنید: «Ja, Bücher fördern die Fantasie» (بله، کتاب‌ها تخیل را تقویت می‌کنند).\nمخالفت کنید: «Einerseits ja, andererseits findet man alles im Internet schneller.» (از یک طرف بله، اما از طرف دیگر در اینترنت همه چیز سریع‌تر پیدا می‌شود)."
    }
  ],

  cultureTip: "فرهنگ مطالعه (Lesekultur) و نمایشگاه‌های هنری در آلمان: آلمانی‌ها یکی از کتاب‌خوان‌ترین ملت‌های اروپا هستند. حتی در عصر دیجیتال، خواندن در قطار، پارک یا مترو بسیار رایج است (فروشگاه‌های کتاب همیشه شلوغند). نمایشگاه کتاب فرانکفورت (Frankfurter Buchmesse) بزرگترین نمایشگاه کتاب در جهان است. همچنین گذراندن یکشنبه بعد از ظهر در یک موزه (Museumsbesuch) یا گالری هنری یک تفریح استاندارد و بسیار جاافتاده برای زوج‌ها و خانواده‌های آلمانی محسوب می‌شود."
};
