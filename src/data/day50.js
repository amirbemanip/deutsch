export const day50Data = {
  title: "روز ۵۰: ایستگاه پایانی - مرور جامع و جشن پایان دوره",
  objective: "تبریک می‌گویم! شما به روز پنجاهم رسیدید. امروز روز جمع‌بندی (Zusammenfassung) کل مباحث اجتماعی، محیط زیستی و کاری در سطح B1 است. هدف امروز این است که تمام کلمات ربط پیشرفته را یکپارچه کنید و برای آزمون نهایی B1 خودتان را ارزیابی (Selbstevaluation) کنید.",

  grammarData: {
    subtitle: "تثبیت نهایی کلمات ربط B1 و ساختارهای مسئولیت‌پذیری.",
    content: [
      {
        type: "text",
        title: "۱. کلمات ربط در کنار هم (Konnektoren-Check)",
        text: "در سطح B1 شما باید بتوانید به راحتی بین بیان دلیل، نتیجه و تضاد جابجا شوید. بیایید آن‌ها را ترکیب کنیم."
      },
      {
        type: "examples",
        title: "ترکیب طلایی",
        items: [
          { de: "Dass:", fa: "Wir sollten uns bewusst machen, dass jeder Verantwortung trägt. (ما باید آگاه باشیم که هرکسی مسئولیت حمل می‌کند.)" },
          { de: "Weil / Denn:", fa: "Ich fahre Rad, weil ich die Umwelt schützen will. = Ich fahre Rad, denn ich will die Umwelt schützen." },
          { de: "Deshalb:", fa: "Die Umwelt ist in Gefahr, deshalb müssen wir handeln." },
          { de: "Trotzdem:", fa: "Autos sind bequem, trotzdem fahre ich lieber mit dem Zug." },
          { de: "Wenn / Falls:", fa: "Wenn jeder mithilft, können wir die Probleme lösen. (شرط در ابتدا، فعل در جایگاه یکم جمله بعد)." }
        ]
      },
      {
        type: "text",
        title: "۲. صحبت درباره مسئولیت (Verantwortung)",
        text: "یک موضوع بسیار رایج در آزمون‌های آلمانی، بحث مسئولیت (فردی در برابر دولتی) است."
      },
      {
        type: "examples",
        title: "بیان مسئولیت‌ها",
        items: [
          { de: "Jeder trägt eine gewisse Verantwortung für die Gesellschaft.", fa: "هرکس مسئولیت خاصی در قبال جامعه بر عهده دارد." },
          { de: "Die Politiker sollten strengere Gesetze machen.", fa: "سیاستمداران باید قوانین سخت‌گیرانه‌تری وضع کنند (Konjunktiv II برای پیشنهاد)." },
          { de: "Kleine Schritte können in der Summe viel bewirken.", fa: "قدم‌های کوچک می‌توانند در مجموع تأثیر زیادی داشته باشند." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ایستگاه نهایی B1",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «باران می‌بارد، با این حال من پیاده‌روی می‌کنم.» کدام گزینه درست است؟",
            questionDe: "Welcher Konnektor ist richtig?",
            options: [
              { text: "Es regnet, trotzdem ich gehe spazieren.", isCorrect: false },
              { text: "Es regnet, trotzdem gehe ich spazieren.", isCorrect: true },
              { text: "Es regnet, deshalb gehe ich spazieren.", isCorrect: false }
            ],
            explanation: "آفرین! trotzdem (با این حال / تضاد) در ابتدای جمله دوم قرار می‌گیرد و دقیقاً بعد از آن فعل (gehe) می‌آید."
          },
          {
            question: "شما می‌خواهید یک پیشنهاد مودبانه یا یک نصیحت بکنید: «ما باید آگاه باشیم که...». از کدام فعل باید استفاده کرد؟",
            questionDe: "Wie gibt man höflich einen Ratschlag?",
            options: [
              { text: "Wir müssen bewusster sein...", isCorrect: false },
              { text: "Wir sollten uns bewusst machen, dass...", isCorrect: true },
              { text: "Wir werden bewusst...", isCorrect: false }
            ],
            explanation: "دقیقاً! sollten (ما باید / ما بهتر است) حالت Konjunktiv II فعل sollen است و بهترین راه برای دادن نصیحت در امتحان B1 است."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "جامعه و مسئولیت",
        words: [
          {
            de: "die Verantwortung",
            fa: "مسئولیت",
            article: "die",
            plural: "die Verantwortungen",
            examples: [
              { de: "Eltern tragen eine große Verantwortung für ihre Kinder.", fa: "والدین مسئولیت بزرگی در قبال فرزندان‌شان بر عهده دارند." }
            ]
          },
          {
            de: "die Gesellschaft",
            fa: "جامعه",
            article: "die",
            plural: "die Gesellschaften",
            examples: [
              { de: "Welche Rolle spielt Sport in unserer Gesellschaft?", fa: "ورزش چه نقشی در جامعه ما ایفا می‌کند؟" }
            ]
          },
          {
            de: "sich bewusst machen",
            fa: "به خود آگاه کردن / متوجه شدن حقیقت",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wir sollten uns bewusst machen, wie wichtig Wasser ist.", fa: "ما باید آگاه باشیم (بفهمیم) که آب چقدر مهم است." }
            ]
          }
        ]
      },
      {
        title: "عمل کردن و تغییر",
        words: [
          {
            de: "handeln",
            fa: "عمل کردن / اقدام کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Die Politiker müssen jetzt handeln, nicht nur reden.", fa: "سیاستمداران باید الان عمل کنند، نه اینکه فقط حرف بزنند." }
            ]
          },
          {
            de: "bewirken",
            fa: "باعث شدن / ایجاد اثر کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Zusammen können wir viel Gutes bewirken.", fa: "با هم می‌توانیم خوبی‌های زیادی به وجود بیاوریم." }
            ]
          },
          {
            de: "Rücksicht nehmen (auf)",
            fa: "ملاحظه کردن / هوای کسی/چیزی را داشتن",
            article: "-",
            plural: "-",
            examples: [
              { de: "In einer Stadt müssen wir Rücksicht auf unsere Nachbarn nehmen.", fa: "در یک شهر ما باید ملاحظه همسایگان‌مان را بکنیم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Blick zurück und nach vorne (Rückblick und Ausblick)\n\nHerzlichen Glückwunsch! Wenn du diesen Text liest, hast du 50 Tage lang intensiv Deutsch gelernt. In dieser Zeit haben wir über viele Themen gesprochen: von Familie und Beruf über Hobbys bis hin zu Umwelt und Gesellschaft. \nWir sollten uns bewusst machen, dass Sprachenlernen Zeit braucht. Manchmal ist es schwer und man macht Fehler, trotzdem darf man nicht aufgeben. Jeder Mensch, der eine neue Sprache lernt, trägt auch die Verantwortung, diese Sprache im Alltag zu nutzen. \nIn Zukunft solltest du versuchen, Filme auf Deutsch zu schauen, Podcasts zu hören und mit Muttersprachlern zu reden. Wenn du keine Angst vor Fehlern hast, wirst du bestimmt Erfolg haben. Wir hoffen, dass dieser Kurs dir geholfen hat. Viel Erfolg auf deinem weiteren Weg!",
      questions: [
        { question: "متن به مناسبت پایان چه دوره‌ای نوشته شده است؟" },
        { question: "طبق متن، وقتی یادگیری زبان سخت می‌شود و اشتباه می‌کنیم، چه واکنشی باید نشان دهیم؟ (با کلمه trotzdem)" },
        { question: "متن برای آینده چه پیشنهاداتی می‌دهد؟ (انجام سه کار)" },
        { question: "«شرطِ» رسیدن به موفقیت در انتهای متن چیست؟ (با استفاده از Wenn ذکر شده)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن: خودارزیابی و آینده (Reflexion)",
      prompt: "در یک پاراگراف (حداقل ۸ خط) سفر ۵۰ روزه خود را توصیف کنید. بگویید در این مدت چه چیزهایی آموختید (In den letzten 50 Tagen habe ich gelernt...). بزرگترین چالش شما چه بود (Die größte Herausforderung war...)؟ و در نهایت برنامه شما برای استفاده از زبان آلمانی در آینده چیست؟",
      steps: [
        {
          title: "مرور گذشته",
          text: "استفاده از In letzter Zeit و Perfekt.",
          example: { de: "In den letzten 50 Tagen habe ich viel über die deutsche Sprache gelernt.", fa: "در 50 روز گذشته من چیزهای زیادی درباره زبان آلمانی یاد گرفتم." }
        },
        {
          title: "بیان چالش‌ها",
          text: "استفاده از trotzdem یا einerseits / andererseits.",
          example: { de: "Die Grammatik war manchmal sehr schwer, trotzdem habe ich nicht aufgegeben.", fa: "گرامر گاهی خیلی سخت بود، با این حال من جا نزدم (تسلیم نشدم)." }
        },
        {
          title: "برنامه‌های آینده",
          text: "استفاده از In Zukunft möchte ich...",
          example: { de: "In Zukunft möchte ich in Deutschland studieren, deshalb muss ich mein Deutsch täglich üben.", fa: "در آینده می‌خواهم در آلمان تحصیل کنم، بنابراین باید آلمانی‌ام را هر روز تمرین کنم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. پادکست جمع‌بندی (پایان سطح B1)",
      source: "Gratulation und nächste Schritte",
      link: "https://www.youtube.com/watch?v=S0KfiMYsvZs",
      instructions: "تمرین لذت بردن از پیشرفت:\nیک پادکست در سطح B1 را که روزهای اول برایتان بسیار سخت بود پخش کنید. حالا متوجه می‌شوید که چقدر از کلمات (Klimawandel, Erfahrung, Beruf) برایتان آشناست! موفقیت خود را جشن بگیرید."
    },
    {
      title: "۲. ویدیو آمادگی امتحان",
      source: "Mündliche Prüfung B1 (Goethe/Telc)",
      link: "https://www.youtube.com/watch?v=IWXPnN5foH8",
      instructions: "تمرین شبیه‌سازی:\nبه یک ویدیوی امتحان شفاهی واقعی B1 در یوتیوب نگاه کنید. توجه کنید که چطور ممتحن‌ها (Prüfer) سوال می‌پرسند و چطور زبان‌آموزان با استفاده از Konnektoren به آن‌ها جواب می‌دهند."
    }
  ],

  speaking: [
    {
      title: "مونولوگ پایانی: ارائه خودت و مسیر یادگیری‌ت (Präsentation)",
      pattern: "Heute möchte ich über meinen Lernprozess sprechen... / Besonders interessant fand ich... / Zusammenfassend...",
      exercise: "تصور کنید در یک کلاس در آلمان هستید. ۴ دقیقه بدون وقفه صحبت کنید: خودتان را معرفی کنید، بگویید چرا آلمانی یاد می‌گیرید، روش یادگیری (این برنامه ۵۰ روزه) را توضیح دهید و بابت توجه همکلاسی‌ها تشکر کنید."
    },
    {
      title: "دیالوگ: جشن گرفتن موفقیت!",
      pattern: "Lass uns feiern! / Ich bin stolz auf mich. / Wir haben es geschafft!",
      exercise: "به زبان آلمانی با صدای بلند با خودتان یا همکلاسی‌تان صحبت کنید: «ما موفق شدیم! (Wir haben es geschafft!). من خیلی خوشحالم که هر روز تمرین کردم. دوست داری آخر هفته برای جشن گرفتن بریم پیتزا بخوریم؟»"
    }
  ],

  cultureTip: "تبریک آلمانی (Herzlichen Glückwunsch) و فرهنگ تلاش: در جامعه آلمان، پشتکار (Fleiß) و نظم (Disziplin) دو ارزش بسیار مهم و بنیادی هستند. هیچ‌کس از شما انتظار ندارد یک‌شبه و بدون نقص (perfekt) آلمانی صحبت کنید، اما آلمانی‌ها به شدت برای کسی که تلاش می‌کند، تسلیم نمی‌شود و کلمات را با نظم یاد می‌گیرد احترام قائلند. وقتی آن‌ها متوجه می‌شوند که شما این مسیر طولانی و سخت را به صورت خودآموز (Autodidakt) طی کرده‌اید، از دید آن‌ها شما فردی بسیار مسئولیت‌پذیر (verantwortungsbewusst) و قابل اتکا هستید. به خودتان افتخار کنید، شما شایسته آن هستید! (Du kannst stolz auf dich sein!)."
};
