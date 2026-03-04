export const day35Data = {
  title: "روز ۳۵: تسلط بر بخش دوم امتحان شفاهی (کارت‌های موضوعی)",
  objective: "امروز تمرکز ما روی بخش دوم امتحان شفاهی B1 (Präsentation / ارائه) است. دو کارت بسیار پرتکرار امتحان یعنی «سرگرمی‌ها» و «سفر و تجربیات» را با تمام جزئیات و ساختارها بررسی و تمرین می‌کنیم.",

  grammarData: {
    subtitle: "ساختار یک ارائه ۳ دقیقه‌ای (Einleitung, Hauptteil, Schluss).",
    content: [
      {
        type: "text",
        title: "۱. چارچوبِ ارائه (Präsentation Rahmen)",
        text: "در بخش دوم امتحان شفاهی B1، شما یک کارت دریافت می‌کنید و ۳ دقیقه وقت دارید تا درباره آن صحبت کنید. شما نباید فقط به سوالات جواب کوتاه بدهید، بلکه باید یک «مونولوگ پیوسته» با ساختار شفاف ارائه دهید."
      },
      {
        type: "table",
        title: "مراحل ۴ گانه ارائه",
        rows: [
          { de: "1. Einleitung (مقدمه)", fa: "معرفی موضوع + جمله شروع" },
          { de: "2. Eigene Erfahrung (تجربه شخصی)", fa: "توضیح کامل تجربه خودتان" },
          { de: "3. Heimatland (کشور زادگاه)", fa: "وضعیت این موضوع در کشورتان" },
          { de: "4. Schluss (نتیجه‌گیری)", fa: "خلاصه‌سازی + تشکر از شنوندگان" }
        ]
      },
      {
        type: "examples",
        title: "جملات جادویی (Redemittel) برای ارائه",
        items: [
          { de: "Mein Thema heute lautet: ...", fa: "موضوع امروز من این است..." },
          { de: "Zuerst möchte ich über meine persönlichen Erfahrungen sprechen.", fa: "ابتدا می‌خواهم درباره تجربیات شخصی‌ام صحبت کنم." },
          { de: "Jetzt komme ich zur Situation in meinem Heimatland.", fa: "حالا می‌رسم به وضعیت در کشوری که در آن متولد شده‌ام." },
          { de: "Zusammenfassend kann man sagen, dass...", fa: "به طور خلاصه می‌توان گفت که..." },
          { de: "Danke für Ihre Aufmerksamkeit.", fa: "از توجه شما سپاسگزارم. (جمله آخر)" }
        ]
      },
      {
        type: "text",
        title: "۲. دیالوگِ بعد از ارائه (Teil 3)",
        text: "بعد از اینکه شما ۳ دقیقه صحبت کردید، پارتنر شما (فرد دیگری که با شما امتحان می‌دهد) باید یک سوال از ارائه شما بپرسد. شما هم موظفید به او یک بازخورد کوتاه (Feedback) بدهید."
      },
      {
        type: "examples",
        title: "بازخورد و پرسش",
        items: [
          { de: "Deine Präsentation war sehr interessant. Ich habe eine Frage: ...", fa: "ارائه تو بسیار جالب بود. من یک سوال دارم: ..." },
          { de: "Das hast du sehr schön erklärt, aber ich möchte wissen, ...", fa: "تو این را خیلی قشنگ توضیح دادی، اما می‌خواهم بدانم که..." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ساختار ارائه",
        questions: [
          {
            question: "شما می‌خواهید از بخش «تجربه شخصی» به بخش «وضعیت در کشورم» بروید. کدام جمله بهترین پُل ارتباطی است؟",
            questionDe: "Welcher Satz passt am besten für den Übergang?",
            options: [
              { text: "Ich bin im Iran geboren.", isCorrect: false },
              { text: "Jetzt komme ich zur Situation in meinem Heimatland Iran.", isCorrect: true },
              { text: "Der Iran ist schön.", isCorrect: false }
            ],
            explanation: "آفرین! استفاده از کلمه Übergang (پُل ارتباطی / گذار) مثل «Jetzt komme ich zu...» ساختار ارائه شما را بسیار حرفه‌ای می‌کند."
          },
          {
            question: "شما ارائه خود را به اتمام رسانده‌اید. آخرین جمله‌ای که باید به ممتحن بگویید چیست؟",
            questionDe: "Wie beenden Sie die Präsentation?",
            options: [
              { text: "Danke für Ihre Aufmerksamkeit. Haben Sie noch Fragen?", isCorrect: true },
              { text: "Ich bin fertig. Tschüss.", isCorrect: false },
              { text: "Gibt es Fragen?", isCorrect: false }
            ],
            explanation: "دقیقاً! تشکر از توجه (Aufmerksamkeit) و دعوت به پرسیدن سوال، استانداردِ طلایی پایان ارائه در B1 است."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "ارائه و سخنرانی (Präsentation)",
        words: [
          {
            de: "das Thema",
            fa: "موضوع",
            article: "das",
            plural: "die Themen",
            examples: [
              { de: "Das Thema meiner Präsentation ist Reisen.", fa: "موضوع ارائه من، سفر کردن است." }
            ]
          },
          {
            de: "die Aufmerksamkeit",
            fa: "توجه",
            article: "die",
            plural: "-",
            examples: [
              { de: "Vielen Dank für Ihre Aufmerksamkeit.", fa: "خیلی ممنون بابت توجه شما." }
            ]
          },
          {
            de: "zusammenfassend",
            fa: "به طور خلاصه",
            article: "-",
            plural: "-",
            examples: [
              { de: "Zusammenfassend kann ich sagen, dass Sport gesund ist.", fa: "به طور خلاصه می‌توانم بگویم که ورزش سالم است." }
            ]
          },
          {
            de: "die Struktur",
            fa: "ساختار",
            article: "die",
            plural: "die Strukturen",
            examples: [
              { de: "Die Präsentation hat eine klare Struktur.", fa: "ارائه دارای یک ساختار واضح است." }
            ]
          }
        ]
      },
      {
        title: "کلمات پرکاربرد برای موضوع سفر و سرگرمی",
        words: [
          {
            de: "unvergesslich",
            fa: "فراموش نشدنی",
            article: "-",
            plural: "-",
            examples: [
              { de: "Meine Reise nach Italien war unvergesslich.", fa: "سفر من به ایتالیا فراموش‌نشدنی بود." }
            ]
          },
          {
            de: "die Erfahrung",
            fa: "تجربه",
            article: "die",
            plural: "die Erfahrungen",
            examples: [
              { de: "Ich habe viele gute Erfahrungen gesammelt.", fa: "من تجربیات خوب زیادی جمع‌آوری کرده‌ام." }
            ]
          },
          {
            de: "die Leidenschaft",
            fa: "شور و اشتیاق / عشقِ سوزان (به یک کار)",
            article: "die",
            plural: "die Leidenschaften",
            examples: [
              { de: "Fotografie ist meine größte Leidenschaft.", fa: "عکاسی بزرگترین اشتیاق (علاقه شدید) من است." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Präsentation: Reisen und Erfahrungen\n\nHallo zusammen! Mein Thema heute lautet: Eine unvergessliche Reise. Zuerst möchte ich über meine persönlichen Erfahrungen sprechen. Letztes Jahr bin ich mit meiner Familie nach Spanien geflogen. Wir waren eine Woche in Barcelona. Die Reise war unvergesslich, weil das Wetter wunderschön war und wir viel besichtigt haben. Ehrlich gesagt, liebe ich Spanien, weil die Kultur so reich ist.\nJetzt komme ich zur Situation in meinem Heimatland Iran. Bei uns gibt es viele schöne Orte. Viele Menschen fahren im Sommer ans Meer oder in den Norden. Die Natur dort ist fantastisch.\nZusammenfassend kann man sagen, dass Reisen nicht nur entspannend, sondern auch lehrreich ist. Man lernt neue Kulturen kennen. Danke für Ihre Aufmerksamkeit! Haben Sie noch Fragen?",
      questions: [
        { question: "گوینده با کدام جمله (Redemittel) به بخشِ کشور زادگاه (ایران) پل می‌زند؟" },
        { question: "چرا سفر او به اسپانیا فراموش‌نشدنی بود؟ (با استفاده از weil توضیح دهید)" },
        { question: "در جمله آخر (Zusammenfassend)، گوینده از کدام کلمه ربط دوقلو برای توصیف سفر استفاده کرده است؟" },
        { question: "مردم در ایران معمولاً در تابستان به کجا سفر می‌کنند؟" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن سناریوی ارائه (کارت Hobbys)",
      prompt: "فرض کنید موضوع ارائه شما Hobbys und Freizeit است. متن ارائه خود را در سه پاراگراف کوتاه (۱. تجربه من، ۲. در کشور من، ۳. نتیجه‌گیری کوتاه و تشکر) بنویسید.",
      steps: [
        {
          title: "۱. معرفی و تجربه شخصی",
          text: "استفاده از Zuerst möchte ich... و معرفی هابی.",
          example: { de: "Mein Thema heute ist Hobbys. Zuerst spreche ich über meine Erfahrung. Mein Lieblingshobby ist Schwimmen, weil es mich fit hält.", fa: "موضوع من امروز سرگرمی‌ها است. ابتدا از تجربه‌ام می‌گویم. سرگرمی محبوب من شنا است چون مرا روی فرم نگه می‌دارد." }
        },
        {
          title: "۲. وضعیت در کشور",
          text: "استفاده از Jetzt komme ich zur... و توضیح وضعیت در ایران.",
          example: { de: "Jetzt komme ich zu meinem Heimatland. Im Iran spielen die meisten Männer sehr gerne Fußball, während die Frauen oft Yoga machen.", fa: "حالا می‌رسم به کشورم. در ایران بیشتر مردها با کمال میل فوتبال بازی می‌کنند، در حالیکه زن‌ها اغلب یوگا انجام می‌دهند." }
        },
        {
          title: "۳. نتیجه و پایان",
          text: "استفاده از Zusammenfassend... و تشکر.",
          example: { de: "Zusammenfassend kann man sagen, Hobbys sind extrem wichtig gegen Stress. Danke für Ihre Aufmerksamkeit!", fa: "خلاصه می‌توان گفت، سرگرمی‌ها در برابر استرس بسیار مهم‌اند. ممنون از توجه شما!" }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. نمونه واقعی از امتحان Sprechen",
      source: "Goethe Zertifikat B1 Sprechen Teil 2",
      link: "https://claims.advancedcare.com/default.aspx/browse/aHYT96/B1-Sprechen-Teil-2-Themen.pdf",
      instructions: "تمرین شنیدن بازخورد:\nدر پایان ارائه همکلاسی، فرد باید یک سؤال بپرسد. گوش کنید که این سؤال چگونه پرسیده می‌شود (مثلاً: Du hast gesagt, du reist gern. Aber hast du auch schlechte Erfahrungen gemacht?)."
    },
    {
      title: "۲. پادکست‌های مونولوگی",
      source: "Deutsch Podcast (Freie Themen)",
      link: "https://www.youtube.com/watch?v=LPI4atD8g-g",
      instructions: "تمرین حفظ زمانبندی:\nسه دقیقه در آلمانی زمان نسبتاً طولانی است. به یک پادکست سه دقیقه‌ای گوش دهید تا متوجه شوید تقریباً چند کلمه و چند جمله باید در این زمان بیان شود."
    }
  ],

  speaking: [
    {
      title: "شبیه‌سازی کامل (Präsentation: Reisen)",
      pattern: "Mein Thema ist... Zuerst... Dann... Zum Schluss...",
      exercise: "تایمر گوشی را روی ۳ دقیقه تنظیم کنید. دقیقاً متن Reading امروز (یا سفر شخصی خودتان) را با صدای بلند ایستاده ارائه دهید. از حرکات دست استفاده کنید و تلاش کنید بدون تپق تا آخر پیش بروید."
    },
    {
      title: "نقش‌آفرینی: ارائه دادن بازخورد و پرسش",
      pattern: "Deine Präsentation war... Ich hätte noch eine Frage...",
      exercise: "تصور کنید همکلاسی شما ارائه‌ای درباره ورزش داده است. به آلمانی بگویید: «ارائه تو خیلی جالب بود. من یک سؤال دارم: آیا در باشگاه دوستان جدیدی پیدا کرده‌ای؟» (Hast du im Fitnessstudio neue Freunde gefunden?)."
    }
  ],

  cultureTip: "اهمیتِ «Haltung» (طرز ایستادن و ظاهر) در ارائه آلمانی: در آلمان (چه در دانشگاه، چه در محیط کار و چه در امتحانات زبانی)، نحوه ارائه دادن بسیار مهم است. صاف ایستادن، نگاه کردن به چشمان مخاطب (Blickkontakt)، دست‌به‌سینه نبودن و صدای رسا، نشان‌دهنده اعتمادبه‌نفس شماست. ممتحنین آلمانی تحت تأثیر زبان‌بدنِ قوی قرار می‌گیرند. اگر کمی هم گرامرتان ضعیف باشد، یک ارائه محکم با زبان‌بدن خوب، نمره قبولی شما را تضمین می‌کند!"
};
