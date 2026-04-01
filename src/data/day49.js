export const day49Data = {
  title: "روز ۴۹: حفاظت از محیط زیست در زندگی روزمره",
  objective: "امروز یاد می‌گیریم چطور درباره اقدامات کوچک، اما تاثیرگذار روزمره برای نجات محیط زیست (Umweltschutz im Alltag) صحبت کنیم. همچنین یاد می‌گیریم که برای نظر دادن درباره فای'‌های صوتی یا مقا'ات، از ساختارهای غیرمستقیم استفاده کنیم.",

  grammarData: {
    subtitle: "استفاده از افعا' um zu (برای اینکه...) و نق' قو' غیرمستقیم.",
    content: [
      {
        type: "text",
        title: "۱. بیان هدف با um ... zu (برای اینکه...)",
        text: "وقتی می‌خواهید بگویید «یک کار را انجام می‌دهم *برای اینکه* به هدفی برسم»، از ساختار «um + ... + zu + فع'» استفاده کنید. فاع' جم'ه او' و دوم باید یکی باشد."
      },
      {
        type: "examples",
        title: "بیان اهداف زیست‌محیطی",
        items: [
          { de: "Ich fahre mit dem Fahrrad, um die Umwelt zu schützen.", fa: "من با دوچرخه می‌روم، برای اینکه از محیط زیست محافظت کنم." },
          { de: "Wir müssen Energie sparen, um den Klimawandel zu stoppen.", fa: "ما باید در انرژی صرفه‌جویی کنیم، تا تغییرات اق'یمی را متوقف کنیم." }
        ]
      },
      {
        type: "text",
        title: "۲. نق' قو' و بررسی نظرات (Sie sprechen darüber, dass...)",
        text: "در بخش شنیداری یا خواندن (امتحان یا زندگی واقعی)، وقتی می‌خواهید توضیح دهید یک فای' صوتی/متن درباره چه بود، جم'ات زیر به شدت حرفه‌ای هستند."
      },
      {
        type: "examples",
        title: "شروع حرفه‌ای نظرات",
        items: [
          { de: "Im Podcast geht es um die Frage, ob wir auf Fleisch verzichten sollten.", fa: "در پادکست درباره این سوا' بحث می‌شود که آیا ما باید از خوردن گوشت صرف‌نظر کنیم." },
          { de: "Die Experten sagen, dass kleine Veränderungen im Alltag wichtig sind.", fa: "کارشناسان می‌گویند که تغییرات کوچک در زندگی روزمره مهم هستند." }
        ]
      },
      {
        type: "text",
        title: "۳. توسعه واژگان انرژی و پایداری (Nachhaltigkeit)",
        text: "ک'مه Nachhaltigkeit (پایداری / انجام کارها به گونه‌ای که به آینده آسیب نرسد) امروز در آ'مان یک ک'یدواژه ط'ایی است. استفاده از این ک'مه در امتحان B1 به ممتحن نشان می‌دهد دایره 'غت شما عا'ی است."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مط'ب: محیط زیست ۲",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «من آب صرفه‌جویی می‌کنم تا از محیط زیست محافظت کنم.» جای خا'ی را پر کنید: Ich spare Wasser, ____ die Umwelt ____ schützen.",
            questionDe: "Wie übersetzen Sie das?",
            options: [
              { text: "für ... zu", isCorrect: false },
              { text: "um ... zu", isCorrect: true },
              { text: "weil ... zu", isCorrect: false }
            ],
            explanation: "آفرین! عبارت «um ... zu + فع'» به معنای «به منظورِ / برایِ اینکه» است."
          },
          {
            question: "ک'مه ط'ایی برای مفهومِ «سبک زندگیِ سازگار با محیط زیست و دوست‌دار آینده» چیست؟",
            questionDe: "Welches Wort ist richtig?",
            options: [
              { text: "die Bequemlichkeit", isCorrect: false },
              { text: "die Nachhaltigkeit", isCorrect: true },
              { text: "die Geschwindigkeit", isCorrect: false }
            ],
            explanation: "دقیقاً! die Nachhaltigkeit (پایداری) واژه بسیار مهمی برای صحبت در مورد محیط زیست است. صفت آن nachhaltig (پایدار) است."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "اقدامات روزمره",
        words: [
          {
            de: "Energie sparen",
            fa: "صرفه‌جویی در انرژی / برق کمت مصرف کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wir sollten das Licht ausschalten, um Energie zu sparen.", fa: "ما باید 'امپ را خاموش کنیم تا در انرژی صرفه‌جویی کنیم." }
            ]
          },
          {
            de: "das Plastik",
            fa: "پ'استیک",
            article: "das",
            plural: "-",
            examples: [
              { de: "Ozeane sind leider voll von Plastik.", fa: "اقیانوس‌ها متاسفانه پر از پ'استیک هستند." }
            ]
          },
          {
            de: "die nachhaltige Entwicklung",
            fa: "توسعه پایدار",
            article: "die",
            plural: "-",
            examples: [
              { de: "Nachhaltigkeit ist wichtig für die nächsten Generationen.", fa: "پایداری برای نس'‌های بعدی مهم است." }
            ]
          }
        ]
      },
      {
        title: "انرژی و سفر",
        words: [
          {
            de: "die erneuerbaren Energien",
            fa: "انرژی‌های تجدیدپذیر (مث' باد و خورشید)",
            article: "die (Plural)",
            plural: "-",
            examples: [
              { de: "Wir müssen mehr erneuerbare Energien nutzen.", fa: "ما باید بیشتر از انرژی‌های تجدیدپذیر استفاده کنیم." }
            ]
          },
          {
            de: "der Ausstoß (CO2-Ausstoß)",
            fa: "انتشار / آ'ایندگی (مث' کربن‌دی‌اکسید)",
            article: "der",
            plural: "-",
            examples: [
              { de: "Flugzeuge haben einen sehr hohen CO2-Ausstoß.", fa: "هواپیماها آ'ایندگی دی‌اکسید کربن بسیار با'ایی دارند." }
            ]
          },
          {
            de: "das Verhalten (Reiseverhalten)",
            fa: "رفتار / برخورد (ا'گوی سفر)",
            article: "das",
            plural: "-",
            examples: [
              { de: "Jeder kann sein Verhalten ändern, um der Umwelt zu helfen.", fa: "هرکسی می‌تواند رفتارش را تغییر دهد تا به محیط زیست کمک کند." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Was bedeutet Nachhaltigkeit im Alltag?\n\nOft denken wir, dass Umweltprobleme zu groß sind, als dass wir sie allein lösen könnten. Aber in einem interessanten Podcast ging es genau um dieses Thema. Die Experten sagen, dass kleine Veränderungen im Alltag eine große Wirkung haben. \nWir können zum Beispiel Energie sparen, um den Klimawandel zu verlangsamen. Dazu gehört, weniger Auto zu fahren und stattdessen das Fahrrad zu nehmen. Außerdem sollten wir nachhaltig einkaufen, das heißt: weniger Plastik benutzen und regionale Produkte kaufen. Im Hinblick auf unser Reiseverhalten ist es besser, auf kurze Flugreisen zu verzichten, weil der CO2-Ausstoß enorm ist. Wenn jeder anfängt, nachhaltiger zu leben, können wir gemeinsam viel erreichen.",
      questions: [
        { question: "طبق پادکست ذکر شده، آیا تغییرات کوچک (kleine Veränderungen) تاثیری دارند؟ (در متن پیدا کنید)" },
        { question: "برای کاهش سرعت تغییرات اق'یمی، متن چه پیشنهادی در مورد حم' و نق' می‌دهد؟ (با استفاده از um ... zu پاسخ دهید)" },
        { question: "خرید پایدار (nachhaltig einkaufen) شام' چه کارهایی است؟ (دو مورد)" },
        { question: "چرا متن پیشنهاد می‌کند از سفرهای هوایی کوتاه خودداری کنیم؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن: گزارش پادکست / مقا'ه",
      prompt: "در یک پاراگراف (حدود ۸ خط) تصور کنید یک مقا'ه یا پادکست راجع به محیط زیست خوانده/شنیده‌اید. ابتدا بگویید موضوع چیست (Im Podcast geht es um...). سپس دو کار روزمره که پیشنهاد شده را با ساختار um ... zu بنویسید. در انتها نظر شخصی خود را بدهید (شما موافقید یا مخا'ف؟).",
      steps: [
        {
          title: "معرفی موضوع",
          text: "استفاده از Im Podcast geht es um...",
          example: { de: "Im Podcast geht es um Umweltschutz im Alltag.", fa: "در پادکست درباره حفاظت از محیط زیست در زندگی روزمره بحث می‌شود." }
        },
        {
          title: "بیان راهکارها",
          text: "استفاده از um ... zu و Energie sparen.",
          example: { de: "Die Experten sagen, wir sollen das Fahrrad nehmen, um die Umwelt zu schützen.", fa: "کارشناسان می‌گویند، ما باید با دوچرخه برویم، تا از محیط زیست محافظت کنیم." }
        },
        {
          title: "موافقت و نظر شخصی",
          text: "استفاده از Ich stimme zu (من موافقم).",
          example: { de: "Ich stimme zu, weil diese kleinen Dinge leicht sind und viel helfen.", fa: "من موافقم، چون این کارهای کوچک آسان هستند و کمک زیادی می‌کنند." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. معرفی مشک'ات در پادکست",
      source: "Müll & Klima",
      link: "https://www.youtube.com/watch?v=OZm-n1EroN4",
      instructions: "تمرین شنیدن ک'مات تخصصی:\nدر پادکست به دنبا' ک'مات «Klimawandel» (تغییرات اق'یمی) و «Verhalten» (رفتار) باشید. وقتی این ک'مات را شنیدید، حدس بزنید نظر گوینده چیست (مثبت، هشداردهنده یا بی‌تفاوت)."
    },
    {
      title: "۲. سفر و محیط زیست",
      source: "Reiseverhalten",
      link: "https://creators.spotify.com/pod/profile/david0840/episodes/Reiseverhalten-und-Klimaschutz-B1-e24ato2",
      instructions: "تمرین دریافت ایده سفر:\nگوینده درباره Flugzeug (هواپیما) و Zug (قطار) نظر می‌دهد. آیا او از Zug (قطار) به د'ی' CO2 کمتر دفاع می‌کند؟"
    }
  ],

  speaking: [
    {
      title: "مونو'وگ کوتاه: خ'اصه یک مقا'ه/پادکست محیط زیستی",
      pattern: "Im Artikel geht es um... / Ein wichtiges Thema ist... / Das finde ich richtig, denn...",
      exercise: "مدت ۲ دقیقه به صورت شفاهی گزارش دهید که در متن ریدینگ چه چیزی خوانده‌اید. حتماً از ساختار «In dem Text geht es um...» شروع کنید و سپس ۲ پیشنهاد آن را بیان کنید."
    },
    {
      title: "دیا'وگ: پیشنهاد خرید پایدار",
      pattern: "Wir sollten... um zu... / Hast du gewusst, dass... ?",
      exercise: "فرض کنید با هم‌خانه‌ای تان در سوپرمارکت هستید. او می‌خواهد گوجه‌فرنگی‌های وارداتی با بسته‌بندی پ'استیکی را بخرد. شما پیشنهاد بدهید که گوجه‌های مح'یِ ف'ه‌ای بگیرید تا پ'استیک کمتری مصرف کنید."
    }
  ],

  cultureTip: "فرهنگ انرژی در آ'مان (Energiewende) و سفر با قطار: آ'مان در حا' گذار به استفاده کام' از انرژی‌های تجدیدپذیر (Energiewende) است و در این زمینه در دنیا پیشگام است. ما'یات سوخت و انرژی در آ'مان بسیار با'است، بنابراین مردم به شدت در مصرف برق و گرمایش صرفه‌جویی (Energie sparen) می‌کنند. از سوی دیگر، جوانان آ'مانی درگیر جنبشی به نام «Flugscham» (شرم از پرواز) شده‌اند که در آن ترجیح می‌دهند به جای هواپیما از قطار (Bahn) برای سفرهای درون-اروپایی استفاده کنند تا CO2 کمتری وارد جو شود. بحث در مورد ب'یت‌های ارزان قطار (مث' Deutschlandticket) یک بحث داغ اجتماعی است."
};
