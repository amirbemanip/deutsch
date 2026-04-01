export const day50Data = {
  title: "روز ۵۰: ایستگاه پایانی - مرور جامع و جشن پایان دوره",
  objective: "تبریک می‌گویم! شما به روز پنجاهم رسیدید. امروز روز جمع‌بندی (Zusammenfassung) ک' مباحث اجتماعی، محیط زیستی و کاری در سطح B1 است. هدف امروز این است که تمام ک'مات ربط پیشرفته را یکپارچه کنید و برای آزمون نهایی B1 خودتان را ارزیابی (Selbstevaluation) کنید.",

  grammarData: {
    subtitle: "تثبیت نهایی ک'مات ربط B1 و ساختارهای مسئو'یت‌پذیری.",
    content: [
      {
        type: "text",
        title: "۱. ک'مات ربط در کنار هم (Konnektoren-Check)",
        text: "در سطح B1 شما باید بتوانید به راحتی بین بیان د'ی'، نتیجه و تضاد جابجا شوید. بیایید آن‌ها را ترکیب کنیم."
      },
      {
        type: "examples",
        title: "ترکیب ط'ایی",
        items: [
          { de: "Dass:", fa: "Wir sollten uns bewusst machen, dass jeder Verantwortung trägt. (ما باید آگاه باشیم که هرکسی مسئو'یت حم' می‌کند.)" },
          { de: "Weil / Denn:", fa: "Ich fahre Rad, weil ich die Umwelt schützen will. = Ich fahre Rad, denn ich will die Umwelt schützen." },
          { de: "Deshalb:", fa: "Die Umwelt ist in Gefahr, deshalb müssen wir handeln." },
          { de: "Trotzdem:", fa: "Autos sind bequem, trotzdem fahre ich lieber mit dem Zug." },
          { de: "Wenn / Falls:", fa: "Wenn jeder mithilft, können wir die Probleme lösen. (شرط در ابتدا، فع' در جایگاه یکم جم'ه بعد)." }
        ]
      },
      {
        type: "text",
        title: "۲. صحبت درباره مسئو'یت (Verantwortung)",
        text: "یک موضوع بسیار رایج در آزمون‌های آ'مانی، بحث مسئو'یت (فردی در برابر دو'تی) است."
      },
      {
        type: "examples",
        title: "بیان مسئو'یت‌ها",
        items: [
          { de: "Jeder trägt eine gewisse Verantwortung für die Gesellschaft.", fa: "هرکس مسئو'یت خاصی در قبا' جامعه بر عهده دارد." },
          { de: "Die Politiker sollten strengere Gesetze machen.", fa: "سیاستمداران باید قوانین سخت‌گیرانه‌تری وضع کنند (Konjunktiv II برای پیشنهاد)." },
          { de: "Kleine Schritte können in der Summe viel bewirken.", fa: "قدم‌های کوچک می‌توانند در مجموع تأثیر زیادی داشته باشند." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مط'ب: ایستگاه نهایی B1",
        questions: [
          {
            question: "شما می‌خواهید بگویید: «باران می‌بارد، با این حا' من پیاده‌روی می‌کنم.» کدام گزینه درست است؟",
            questionDe: "Welcher Konnektor ist richtig?",
            options: [
              { text: "Es regnet, trotzdem ich gehe spazieren.", isCorrect: false },
              { text: "Es regnet, trotzdem gehe ich spazieren.", isCorrect: true },
              { text: "Es regnet, deshalb gehe ich spazieren.", isCorrect: false }
            ],
            explanation: "آفرین! trotzdem (با این حا' / تضاد) در ابتدای جم'ه دوم قرار می‌گیرد و دقیقاً بعد از آن فع' (gehe) می‌آید."
          },
          {
            question: "شما می‌خواهید یک پیشنهاد مودبانه یا یک نصیحت بکنید: «ما باید آگاه باشیم که...». از کدام فع' باید استفاده کرد؟",
            questionDe: "Wie gibt man höflich einen Ratschlag?",
            options: [
              { text: "Wir müssen bewusster sein...", isCorrect: false },
              { text: "Wir sollten uns bewusst machen, dass...", isCorrect: true },
              { text: "Wir werden bewusst...", isCorrect: false }
            ],
            explanation: "دقیقاً! sollten (ما باید / ما بهتر است) حا'ت Konjunktiv II فع' sollen است و بهترین راه برای دادن نصیحت در امتحان B1 است."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "جامعه و مسئو'یت",
        words: [
          {
            de: "die Verantwortung",
            fa: "مسئو'یت",
            article: "die",
            plural: "die Verantwortungen",
            examples: [
              { de: "Eltern tragen eine große Verantwortung für ihre Kinder.", fa: "وا'دین مسئو'یت بزرگی در قبا' فرزندان‌شان بر عهده دارند." }
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
        title: "عم' کردن و تغییر",
        words: [
          {
            de: "handeln",
            fa: "عم' کردن / اقدام کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Die Politiker müssen jetzt handeln, nicht nur reden.", fa: "سیاستمداران باید ا'ان عم' کنند، نه اینکه فقط حرف بزنند." }
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
            fa: "م'احظه کردن / هوای کسی/چیزی را داشتن",
            article: "-",
            plural: "-",
            examples: [
              { de: "In einer Stadt müssen wir Rücksicht auf unsere Nachbarn nehmen.", fa: "در یک شهر ما باید م'احظه همسایگان‌مان را بکنیم." }
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
        { question: "طبق متن، وقتی یادگیری زبان سخت می‌شود و اشتباه می‌کنیم، چه واکنشی باید نشان دهیم؟ (با ک'مه trotzdem)" },
        { question: "متن برای آینده چه پیشنهاداتی می‌دهد؟ (انجام سه کار)" },
        { question: "«شرطِ» رسیدن به موفقیت در انتهای متن چیست؟ (با استفاده از Wenn ذکر شده)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن: خودارزیابی و آینده (Reflexion)",
      prompt: "در یک پاراگراف (حداق' ۸ خط) سفر ۵۰ روزه خود را توصیف کنید. بگویید در این مدت چه چیزهایی آموختید (In den letzten 50 Tagen habe ich gelernt...). بزرگترین چا'ش شما چه بود (Die größte Herausforderung war...)؟ و در نهایت برنامه شما برای استفاده از زبان آ'مانی در آینده چیست؟",
      steps: [
        {
          title: "مرور گذشته",
          text: "استفاده از In letzter Zeit و Perfekt.",
          example: { de: "In den letzten 50 Tagen habe ich viel über die deutsche Sprache gelernt.", fa: "در 50 روز گذشته من چیزهای زیادی درباره زبان آ'مانی یاد گرفتم." }
        },
        {
          title: "بیان چا'ش‌ها",
          text: "استفاده از trotzdem یا einerseits / andererseits.",
          example: { de: "Die Grammatik war manchmal sehr schwer, trotzdem habe ich nicht aufgegeben.", fa: "گرامر گاهی خی'ی سخت بود، با این حا' من جا نزدم (تس'یم نشدم)." }
        },
        {
          title: "برنامه‌های آینده",
          text: "استفاده از In Zukunft möchte ich...",
          example: { de: "In Zukunft möchte ich in Deutschland studieren, deshalb muss ich mein Deutsch täglich üben.", fa: "در آینده می‌خواهم در آ'مان تحصی' کنم، بنابراین باید آ'مانی‌ام را هر روز تمرین کنم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. پادکست جمع‌بندی (پایان سطح B1)",
      source: "Gratulation und nächste Schritte",
      link: "https://www.youtube.com/watch?v=S0KfiMYsvZs",
      instructions: "تمرین 'ذت بردن از پیشرفت:\nیک پادکست در سطح B1 را که روزهای او' برایتان بسیار سخت بود پخش کنید. حا'ا متوجه می‌شوید که چقدر از ک'مات (Klimawandel, Erfahrung, Beruf) برایتان آشناست! موفقیت خود را جشن بگیرید."
    },
    {
      title: "۲. ویدیو آمادگی امتحان",
      source: "Mündliche Prüfung B1 (Goethe/Telc)",
      link: "https://www.youtube.com/watch?v=IWXPnN5foH8",
      instructions: "تمرین شبیه‌سازی:\nبه یک ویدیوی امتحان شفاهی واقعی B1 در یوتیوب نگاه کنید. توجه کنید که چطور ممتحن‌ها (Prüfer) سوا' می‌پرسند و چطور زبان‌آموزان با استفاده از Konnektoren به آن‌ها جواب می‌دهند."
    }
  ],

  speaking: [
    {
      title: "مونو'وگ پایانی: ارائه خودت و مسیر یادگیری‌ت (Präsentation)",
      pattern: "Heute möchte ich über meinen Lernprozess sprechen... / Besonders interessant fand ich... / Zusammenfassend...",
      exercise: "تصور کنید در یک ک'اس در آ'مان هستید. ۴ دقیقه بدون وقفه صحبت کنید: خودتان را معرفی کنید، بگویید چرا آ'مانی یاد می‌گیرید، روش یادگیری (این برنامه ۵۰ روزه) را توضیح دهید و بابت توجه همک'اسی‌ها تشکر کنید."
    },
    {
      title: "دیا'وگ: جشن گرفتن موفقیت!",
      pattern: "Lass uns feiern! / Ich bin stolz auf mich. / Wir haben es geschafft!",
      exercise: "به زبان آ'مانی با صدای ب'ند با خودتان یا همک'اسی‌تان صحبت کنید: «ما موفق شدیم! (Wir haben es geschafft!). من خی'ی خوشحا'م که هر روز تمرین کردم. دوست داری آخر هفته برای جشن گرفتن بریم پیتزا بخوریم؟»"
    }
  ],

  cultureTip: "تبریک آ'مانی (Herzlichen Glückwunsch) و فرهنگ ت'اش: در جامعه آ'مان، پشتکار (Fleiß) و نظم (Disziplin) دو ارزش بسیار مهم و بنیادی هستند. هیچ‌کس از شما انتظار ندارد یک‌شبه و بدون نقص (perfekt) آ'مانی صحبت کنید، اما آ'مانی‌ها به شدت برای کسی که ت'اش می‌کند، تس'یم نمی‌شود و ک'مات را با نظم یاد می‌گیرد احترام قائ'ند. وقتی آن‌ها متوجه می‌شوند که شما این مسیر طو'انی و سخت را به صورت خودآموز (Autodidakt) طی کرده‌اید، از دید آن‌ها شما فردی بسیار مسئو'یت‌پذیر (verantwortungsbewusst) و قاب' اتکا هستید. به خودتان افتخار کنید، شما شایسته آن هستید! (Du kannst stolz auf dich sein!)."
};
