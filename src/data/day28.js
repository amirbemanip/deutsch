export const day28Data = {
  title: "روز ۲۸: بیانِ هدف (um...zu / damit) و روزمرگی در B1",
  objective: "امروز یکی از زیباترین و کاربردی‌ترین گرامرهای آلمانی را یاد می‌گیریم: چگونه هدف و دلیلِ انجام یک کار را بیان کنیم (تا اینکه... / به منظور اینکه...). همچنین یاد می‌گیریم روزمرگی خود را مانند یک پادکستِر آلمانی، جذاب و طولانی تعریف کنیم.",

  grammarData: {
    subtitle: "ساختارهای فینال (Finalsätze) برای نشان دادن قصد و هدف.",
    content: [
      {
        type: "text",
        title: "۱. ساختار um ... zu (به منظورِ / تا اینکه...)",
        text: "وقتی می‌خواهیم بپرسیم «برای چه هدفی؟» (Wozu? / Zu welchem Zweck?)، از ساختار um...zu استفاده می‌کنیم. \nشرط مهم: فاعلِ جمله اول و جمله دوم باید یکسان باشد."
      },
      {
        type: "alert",
        title: "فرمولِ um ... zu",
        text: "جمله اصلی + کاما + um + بقیه کلمات + zu + فعل به صورت مصدر (Infinitiv) در انتهای جمله."
      },
      {
        type: "examples",
        title: "مثال‌های um ... zu",
        items: [
          { de: "Ich lerne jeden Tag Deutsch, um die B1-Prüfung zu bestehen.", fa: "من هر روز آلمانی می‌خوانم، تا در امتحان B1 قبول شوم. (من آلمانی می‌خوانم، تا من قبول شوم - فاعل هردو Ich است)." },
          { de: "Er geht früh ins Bett, um morgen fit zu sein.", fa: "او زود به رختخواب می‌رود، تا فردا روی فرم باشد." },
          { de: "Wir gehen in den Supermarkt, um frisches Brot einzukaufen.", fa: "ما به سوپرمارکت می‌رویم تا نان تازه بخریم. (دقت کنید: در افعال جداشدنی، zu دقیقاً وسط پیشوند و فعل قرار می‌گیرد: ein-zu-kaufen)." }
        ]
      },
      {
        type: "text",
        title: "۲. ساختار damit (تا اینکه...)",
        text: "اگر فاعل جمله اول با فاعل جمله دوم متفاوت باشد، دیگر نمی‌توانیم از um...zu استفاده کنیم. اینجا باید از damit استفاده کنیم. کلمه damit یک حرف ربط فرعی است، یعنی فعل را متصرف می‌کند و به انتهای جمله می‌فرستد."
      },
      {
        type: "examples",
        title: "مثال‌های damit (فاعل متفاوت)",
        items: [
          { de: "Ich spreche langsam, damit meine Kollegen mich besser verstehen.", fa: "من آرام صحبت می‌کنم (فاعل: من)، تا همکارانم مرا بهتر بفهمند (فاعل: همکاران). (فعل verstehen در انتها قرار گرفته است)." },
          { de: "Die Mutter gibt dem Kind Geld, damit es ein Eis kauft.", fa: "مادر به کودک پول می‌دهد (فاعل: مادر)، تا او یک بستنی بخرد (فاعل: کودک)." },
          { de: "[نکته]: شما می‌توانید همیشه از damit استفاده کنید (حتی وقتی فاعل‌ها یکی هستند)، اما um...zu در آلمانی بسیار زیباتر و رایج‌تر است.", fa: "مثال: Ich lerne Deutsch, damit ich die Prüfung bestehe. (درست است، اما um...zu قشنگ‌تر است)." }
        ]
      },
      {
        type: "text",
        title: "۳. تعریف روزمرگی (Tagesablauf) به سبک B1",
        text: "در A1 می‌گفتیم: Ich stehe auf. Ich dusche. Ich esse. در B1 باید مانند یک داستان پیوسته صحبت کنیم."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: um...zu و damit",
        questions: [
          {
            question: "کدام ساختار برای این مفهوم درست است: «من کار می‌کنم تا پول دربیاورم»؟",
            questionDe: "Welcher Satz ist grammatikalisch schön und richtig?",
            options: [
              { text: "Ich arbeite, um Geld zu verdienen.", isCorrect: true },
              { text: "Ich arbeite, damit ich Geld verdienen.", isCorrect: false },
              { text: "Ich arbeite, Geld um verdienen zu.", isCorrect: false }
            ],
            explanation: "آفرین! چون فاعل هر دو بخش جمله (من کار می‌کنم / من درمی‌آورم) یکسان است، بهترین و زیباترین ساختار um ... zu + Infinitiv است."
          },
          {
            question: "شما به فرزندتان کاپشن می‌دهید تا او (Er) سرما نخورد (nicht friert). کدام درست است؟",
            questionDe: "Ich gebe meinem Sohn eine Jacke, ___",
            options: [
              { text: "um er nicht zu frieren.", isCorrect: false },
              { text: "damit er nicht friert.", isCorrect: true },
              { text: "weil er nicht friert.", isCorrect: false }
            ],
            explanation: "دقیقاً! چون فاعل در جمله اول (من) و فاعل در جمله دوم (او) متفاوت هستند، ما مجاز به استفاده از um...zu نیستیم و باید حتماً از damit (که فعل را به آخر می‌برد) استفاده کنیم."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "کلمات هدف و نتیجه (Zweck & Ziel)",
        words: [
          {
            de: "das Ziel",
            fa: "هدف",
            article: "das",
            plural: "die Ziele",
            examples: [
              { de: "Mein größtes Ziel ist es, fließend Deutsch zu sprechen.", fa: "بزرگترین هدف من این است که آلمانی را روان صحبت کنم." }
            ]
          },
          {
            de: "damit",
            fa: "تا اینکه / برای اینکه (فعل می‌رود آخر)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich helfe dir, damit du schneller fertig bist.", fa: "من به تو کمک می‌کنم، تا تو سریع‌تر آماده (تمام) شوی." }
            ]
          },
          {
            de: "um ... zu",
            fa: "به منظورِ / تا اینکه (فعل مصدر در آخر)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich trinke Kaffee, um wach zu bleiben.", fa: "من قهوه می‌نوشم تا بیدار بمانم." }
            ]
          }
        ]
      },
      {
        title: "واژگان روزمره B1 (Alltag B1)",
        words: [
          {
            de: "den Tag starten",
            fa: "روز را آغاز کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich starte meinen Tag mit einer Tasse Tee.", fa: "من روزم را با یک فنجان چای آغاز می‌کنم." }
            ]
          },
          {
            de: "viel zu tun haben",
            fa: "کار/مشغله زیادی داشتن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Heute kann ich nicht kommen. Ich habe viel zu tun.", fa: "امروز نمی‌توانم بیایم. کارهای زیادی برای انجام دادن دارم." }
            ]
          },
          {
            de: "sich konzentrieren",
            fa: "تمرکز کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Im Büro fällt es mir schwer, mich zu konzentrieren.", fa: "در اداره برایم سخت است که تمرکز کنم." }
            ]
          },
          {
            de: "bewusst",
            fa: "آگاهانه",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich lebe bewusster, um gesünder zu sein.", fa: "من آگاهانه‌تر زندگی می‌کنم تا سالم‌تر باشم." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein produktiver Tag\n\nMein Alltag ist ziemlich organisiert. Jeden Morgen stehe ich um 6 Uhr auf, um eine halbe Stunde Yoga zu machen. Das ist wichtig für mich, damit mein Körper wach wird. Danach starte ich meinen Tag mit einem gesunden Frühstück.\nBeruflich habe ich immer viel zu tun. Ich arbeite als Projektmanager. Oft schreibe ich E-Mails, telefoniere mit Kunden und organisiere Meetings. Ich plane meine Aufgaben sehr bewusst, um keinen Stress zu haben. Meistens mache ich um 13 Uhr eine Pause, damit ich mich nachmittags besser konzentrieren kann.\nAm Abend treffe ich mich gern mit Freunden oder koche etwas Leckeres, um den Tag entspannt zu beenden.",
      questions: [
        { question: "راوی داستان چرا هر صبح ساعت ۶ برای انجام یوگا بیدار می‌شود؟ (به استفاده از um...zu دقت کنید)" },
        { question: "چرا برای او مهم است که یوگا کند؟ (تا او چه بشود؟ با استفاده از damit جواب دهید)" },
        { question: "راوی چرا وظایفش را آگاهانه برنامه‌ریزی می‌کند؟ (با استفاده از um...zu)" },
        { question: "هدف راوی از استراحت کردن در ساعت ۱۳ چیست؟ (با استفاده از damit)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره اهداف شخصی",
      prompt: "پنج کار مختلف که در زندگی انجام می‌دهید را بنویسید و دلیل/هدف آنها را بیان کنید (سه تا با um...zu و دو تا با damit).",
      steps: [
        {
          title: "استفاده از um...zu (اهداف شخصی)",
          text: "مثلاً: زبان می‌خوانم، ورزش می‌کنم، پول پس‌انداز می‌کنم...",
          example: { de: "Ich spare jeden Monat Geld, um nächstes Jahr nach Italien zu reisen.", fa: "من هر ماه پول پس‌انداز می‌کنم، تا سال آینده به ایتالیا سفر کنم." }
        },
        {
          title: "استفاده از damit (اهداف برای دیگران یا شرطی)",
          text: "مثلاً: به والدینم زنگ می‌زنم تا آنها خوشحال شوند.",
          example: { de: "Ich rufe meine Eltern oft an, damit sie sich freuen.", fa: "من اغلب به والدینم زنگ می‌زنم، تا آنها خوشحال شوند." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. تعریف روزمرگی",
      source: "Dein Tag auf Deutsch (German Podcast)",
      link: "https://www.youtube.com/watch?v=AbWLg-fRHv8",
      instructions: "تمرین تشخیص ساختار:\nهنگام گوش دادن به پادکست‌های آلمانی، دقت کنید چطور بومی‌زبان‌ها به جای جملات ساده «من این کار را کردم»، مدام از «من این کار را کردم تا... (um...zu)» استفاده می‌کنند. این نشان‌دهنده جریانِ تفکر آلمانی است."
    },
    {
      title: "۲. کنکتورهای هدف",
      source: "Connectors: um...zu vs damit",
      link: "https://www.youtube.com/watch?v=6sIwOkx3Ico",
      instructions: "تمرین تلفظ um...zu:\nدر تلفظ استاندارد، کلمه «zu» به کلمه بعد از خودش (فعل) می‌چسبد. نگویید (um ... مكث ... zu ... مكث ... lernen). بلکه بگویید: (um_Deutsch_zulernen). این ترکیب را سه بار بلند تکرار کنید."
    }
  ],

  speaking: [
    {
      title: "مونولوگ طولانی: چرا آلمانی می‌خوانم؟",
      pattern: "Ich lerne Deutsch, um... Ich brauche die Sprache, damit...",
      exercise: "بزرگترین سوال آزمون‌های گوته را تمرین کنید: «Warum lernen Sie Deutsch?». دو دقیقه بی‌وقفه صحبت کنید. \nIch lerne Deutsch, um in Deutschland zu studieren. Außerdem brauche ich die Sprache, damit ich hier Leute kennenlerne..."
    },
    {
      title: "برنامه‌ریزی برای آخر هفته",
      pattern: "Am Wochenende fahre ich nach..., um... zu...",
      exercise: "جلوی آینه بایستید. برنامه خیالی آخر هفته خود را با ذکر دلیل بگویید:\nAm Samstag gehe ich in die Stadt, um neue Schuhe zu kaufen. Danach besuche ich meine Oma, damit sie nicht alleine ist."
    }
  ],

  cultureTip: "هدف‌گرایی (Zielstrebigkeit) در فرهنگ آلمان: در آلمان کمتر کاری بدون دلیل و هدف خاص انجام می‌شود. برنامه‌ریزی برای رسیدن به اهداف، بخش مهمی از زندگی است. به همین دلیل ساختار um...zu در مکالمات روزمره بسیار زیاد شنیده می‌شود. وقتی شما در محل کار یا دانشگاه کارهایتان را با um...zu توجیه می‌کنید، از دید یک آلمانی فردی بسیار منظم (organisiert) و هدفمند به نظر می‌رسید."
};
