export const day49Data = {
  title: "روز ۴۹: مهارت روایت - داستان‌گویی در گذشته، حال و آینده",
  objective: "یادگیری ترکیب زمان‌ها (Perfekt + Präsens + Futur I) برای روایت، ساختار داستان و عبارات روایی",
  level: "B1",

  grammarData: {
    subtitle: "ترکیب زمان‌ها در روایت",
    content: [
      {
        type: "text",
        title: "۱. ترکیب Perfekt + Präsens + Futur I",
        text: "در روایت از سه زمان استفاده می‌کنیم: Perfekt برای اتفاقات گذشته (Ich habe das gemacht)، Präsens برای توصیف و توضیحات کلی (Das ist wichtig)، Futur I برای آینده و پیش‌بینی (Ich werde das machen). ترکیب این سه زمان روایت را جذاب و واقعی می‌کند."
      },
      {
        type: "table",
        title: "Redemittel برای روایت",
        rows: [
          { de: "شروع داستان", fa: "Am Anfang... / Zuerst... / Vor zwei Jahren..." },
          { de: "ادامه داستان", fa: "Dann... / Danach... / Plötzlich... / Nachdem..." },
          { de: "پایان داستان", fa: "Schließlich... / Zum Schluss... / Am Ende..." },
          { de: "توضیح", fa: "Das bedeutet, dass... / Das liegt daran, dass..." },
          { de: "آینده", fa: "In Zukunft werde ich... / Nächstes Jahr plane ich..." },
          { de: "نظر شخصی", fa: "Ich fand es... / Es war... / Für mich war es..." }
        ]
      },
      {
        type: "text",
        title: "۲. ساختار یک داستان",
        text: "Einleitung (مقدمه): شخصیت‌ها، مکان، زمان را معرفی کنید. Hauptteil (بدنه): اتفاقات را توصیف کنید - از Perfekt برای اتفاقات و Präsens برای توضیحات استفاده کنید. Schluss (پایان): نتیجه‌گیری و آینده. نکته: از Konnektoren برای روان بودن استفاده کنید."
      },
      {
        type: "examples",
        title: "مثال‌های روایی",
        items: [
          { de: "Am Anfang war ich sehr nervös.", fa: "در ابتدا خیلی عصبی بودم." },
          { de: "Zuerst habe ich mich hingesetzt und gewartet.", fa: "اول نشستم و منتظر شدم." },
          { de: "Dann hat der Lehrer meinen Namen aufgerufen.", fa: "بعد معلم اسمم را صدا زد." },
          { de: "Plötzlich war alles anders.", fa: "ناگهان همه چیز فرق کرد." },
          { de: "Schließlich habe ich die Prüfung bestanden.", fa: "سرانجام امتحان را قبول شدم." },
          { de: "In Zukunft werde ich mehr üben.", fa: "در آینده بیشتر تمرین خواهم کرد." }
        ]
      },
      {
        type: "alert",
        title: "نکته: Perfekt vs Präteritum در روایت",
        text: "در مکالمه و روایت شفاهی از Perfekt استفاده کنید (Ich habe gemacht). در نوشتن رسمی و کتاب‌ها از Präteritum (Ich machte). استثنا: افعال haben, sein, können, müssen, sollen, wollen همیشه در Präteritum استفاده می‌شوند حتی در مکالمه: Ich hatte, Ich war, Ich konnte."
      },
      {
        type: "interactive_quiz",
        title: "آزمون روایت",
        questions: [
          {
            question: "«Am Anfang» یعنی:؟",
            questionDe: "Was bedeutet 'Am Anfang'?",
            options: [
              { text: "در پایان", isCorrect: false },
              { text: "در ابتدا", isCorrect: true },
              { text: "ناگهان", isCorrect: false }
            ],
            explanation: "Am Anfang = در ابتدا / در شروع."
          },
          {
            question: "برای اتفاقات گذشته در روایت شفاهی از چه زمانی استفاده می‌کنید؟",
            questionDe: "Welche Zeitform verwendet man mündlich?",
            options: [
              { text: "Präsens", isCorrect: false },
              { text: "Perfekt", isCorrect: true },
              { text: "Präteritum", isCorrect: false }
            ],
            explanation: "در مکالمه از Perfekt استفاده می‌شود."
          },
          {
            question: "«Schließlich» یعنی:؟",
            questionDe: "Was bedeutet 'Schließlich'?",
            options: [
              { text: "ناگهان", isCorrect: false },
              { text: "سرانجام / در نهایت", isCorrect: true },
              { text: "بعداً", isCorrect: false }
            ],
            explanation: "Schließlich = سرانجام / در نهایت."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین روایت",
        instruction: "داستان را با زمان و عبارت مناسب کامل کنید.",
        blanks: [
          { sentence: "_______ bin ich nach Deutschland gekommen. (دو سال پیش)", answer: "Vor zwei Jahren", hint: "شروع داستان" },
          { sentence: "_______ habe ich einen Deutschkurs besucht.", answer: "Zuerst", hint: "اول" },
          { sentence: "_______ habe ich eine Stelle gefunden.", answer: "Dann", hint: "بعد" },
          { sentence: "_______ war alles schwierig, aber jetzt ist es besser.", answer: "Am Anfang", hint: "در ابتدا" },
          { sentence: "_______ habe ich mich entschieden, zu bleiben.", answer: "Schließlich", hint: "سرانجام" },
          { sentence: "In _______ _______ ich mehr Deutsch lernen.", answer: "Zukunft ... werde", hint: "آینده: Futur I" },
          { sentence: "_______ hat mein Chef mich gefragt, ob ich bleiben möchte.", answer: "Plötzlich", hint: "ناگهان" },
          { sentence: "_______ werde ich eine Familie gründen.", answer: "Irgendwann", hint: "یک روزی / بالاخره" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "عبارات روایی (Erzählredemittel)",
        words: [
          { de: "am Anfang", fa: "در ابتدا", ipa: "[am ˈʔanfaŋ]", examples: [{ de: "Am Anfang war es schwer.", fa: "در ابتدا سخت بود." }] },
          { de: "zuerst", fa: "اول / در وهله اول", ipa: "[t͡suˈeːɐ̯st]", examples: [{ de: "Zuerst habe ich gedacht...", fa: "اول فکر کردم..." }] },
          { de: "dann", fa: "بعد / سپس", ipa: "[dan]", examples: [{ de: "Dann ist etwas passiert.", fa: "بعد اتفاقی افتاد." }] },
          { de: "danach", fa: "بعد از آن", ipa: "[ˈdaːnaːx]", examples: [{ de: "Danach bin ich nach Hause gegangen.", fa: "بعد از آن به خانه رفتم." }] },
          { de: "plötzlich", fa: "ناگهان", ipa: "[ˈplœt͡slɪç]", examples: [{ de: "Plötzlich hat es angefangen zu regnen.", fa: "ناگهان باران شروع شد." }] },
          { de: "schließlich", fa: "سرانجام / در نهایت", ipa: "[ʃliːslɪç]", examples: [{ de: "Schließlich habe ich es geschafft.", fa: "سرانجام موفق شدم." }] },
          { de: "zum Schluss", fa: "در پایان", ipa: "[t͡sʊm ʃlʊs]", examples: [{ de: "Zum Schluss möchte ich Ihnen danken.", fa: "در پایان می‌خواهم از شما تشکر کنم." }] },
          { de: "irgendwann", fa: "یک روزی / بالاخره", ipa: "[ˈɪʁɡəntvan]", examples: [{ de: "Irgendwann werde ich nach Berlin ziehen.", fa: "یک روزی به برلین نقل مکان خواهم کرد." }] },
          { de: "vor kurzem", fa: "اخیراً", ipa: "[foːɐ̯ ˈkʊʁt͡səm]", examples: [{ de: "Vor kurzem habe ich einen alten Freund getroffen.", fa: "اخیراً یک دوست قدیمی را دیدم." }] },
          { de: "zu dieser Zeit", fa: "در آن زمان", ipa: "[t͡suː ˈdiːzɐ t͡saɪ̯t]", examples: [{ de: "Zu dieser Zeit war ich Student.", fa: "در آن زمان دانشجو بودم." }] }
        ]
      },
      {
        title: "واژگان داستان و تجربه (Erzählung und Erfahrung)",
        words: [
          { de: "die Erfahrung", fa: "تجربه", ipa: "[ɛɐ̯ˈfaːʁʊŋ]", article: "die", plural: "die Erfahrungen", examples: [{ de: "Das war eine wichtige Erfahrung.", fa: "این یک تجربه مهم بود." }] },
          { de: "das Abenteuer", fa: "ماجرا / ماجراجویی", ipa: "[ˈʔapɛntɔɪ̯ɐ]", article: "das", plural: "die Abenteuer", examples: [{ de: "Mein Leben ist ein Abenteuer.", fa: "زندگی من یک ماجراجویی است." }] },
          { de: "passieren", fa: "اتفاق افتادن", ipa: "[paˈsiːʁən]", article: "-", plural: "-", conjugation: { ich: "passiere", du: "passierst", er: "passiert", wir: "passieren", ihr: "passiert", sie: "passieren" }, examples: [{ de: "Was ist passiert?", fa: "چه اتفاقی افتاد؟" }] },
          { de: "erleben", fa: "تجربه کردن / شاهد بودن", ipa: "[ɛɐ̯ˈleːbn̩]", article: "-", plural: "-", conjugation: { ich: "erlebe", du: "erlebst", er: "erlebt", wir: "erleben", ihr: "erlebt", sie: "erleben" }, examples: [{ de: "Ich habe viel erlebt.", fa: "تجربه‌های زیادی کردم." }] },
          { de: "sich erinnern an", fa: "به یاد آوردن", ipa: "[ɛɐ̯ˈɪnən]", article: "-", plural: "-", conjugation: { ich: "erinnere mich", du: "erinnerst dich", er: "erinnert sich", wir: "erinnern uns", ihr: "erinnert euch", sie: "erinnern sich" }, examples: [{ de: "Ich erinnere mich an den Tag.", fa: "آن روز را به یاد می‌آورم." }] },
          { de: "vergessen", fa: "فراموش کردن", ipa: "[fɛɐ̯ˈɡɛsn̩]", article: "-", plural: "-", conjugation: { ich: "vergesse", du: "vergisst", er: "vergisst", wir: "vergessen", ihr: "vergesst", sie: "vergessen" }, examples: [{ de: "Ich kann das nicht vergessen.", fa: "نمی‌توانم این را فراموش کنم." }] },
          { de: "begegnen", fa: "برخورد کردن / ملاقات کردن", ipa: "[bəˈɡeːɡn̩]", article: "-", plural: "-", conjugation: { ich: "begegne", du: "begegnest", er: "begegnet", wir: "begegnen", ihr: "begegnet", sie: "begegnen" }, examples: [{ de: "Ich bin ihm zufällig begegnet.", fa: "اتفاقی به او برخوردم." }] },
          { de: "sich entscheiden für", fa: "تصمیم گرفتن به نفع", ipa: "[ɛntˈʃaɪ̯dn̩]", article: "-", plural: "-", conjugation: { ich: "entscheide mich", du: "entscheidest dich", er: "entscheidet sich", wir: "entscheiden uns", ihr: "entscheidet euch", sie: "entscheiden sich" }, examples: [{ de: "Ich habe mich für Deutschland entschieden.", fa: "به نفع آلمان تصمیم گرفتم." }] },
          { de: "hoffen auf", fa: "امیدوار بودن به", ipa: "[ˈhɔfn̩]", article: "-", plural: "-", conjugation: { ich: "hoffe", du: "hoffst", er: "hofft", wir: "hoffen", ihr: "hofft", sie: "hoffen" }, examples: [{ de: "Ich hoffe auf eine bessere Zukunft.", fa: "امیدوار به آینده بهترم." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Mein Weg nach Deutschland\n\nVor drei Jahren war mein Leben ganz anders. Zu dieser Zeit habe ich in Teheran gearbeitet und hatte einen guten Job. Aber ich wollte mehr. Ich wollte die Welt sehen und neue Erfahrungen machen.\nAm Anfang war die Entscheidung schwer. Meine Familie hat mich unterstützt, aber ich hatte Angst. Zuerst habe ich Deutsch gelernt, jeden Tag drei Stunden. Es war anstrengend, aber ich habe nicht aufgegeben.\nDann habe ich mich für ein Studium in München beworben. Schließlich habe ich die Zulassung bekommen. Plötzlich war alles real: Ich musste mein ganzes Leben ändern.\nAm Flughafen habe ich mich an meine Familie erinnert. Es war ein gemischtes Gefühl: Traurigkeit und Aufregung gleichzeitig. Ich bin im Flugzeug gesessen und habe an die Zukunft gedacht.\nJetzt lebe ich seit zwei Jahren in München. Ich habe viele neue Freunde kennengelernt und viel gelernt. Manchmal vermisse ich meine Heimat, aber ich bereue nichts. In Zukunft werde ich meinen Abschluss machen und hoffentlich hier eine Arbeit finden. Irgendwann möchte ich meine Familie nach Deutschland einladen.",
      translation: "مسیر من به آلمان\n\nسه سال پیش زندگی‌ام کاملاً متفاوت بود. در آن زمان در تهران کار می‌کردم و شغل خوبی داشتم. اما بیشتر می‌خواستم. می‌خواستم دنیا را ببینم و تجربه‌های جدید کسب کنم.\nدر ابتدا تصمیم سخت بود. خانواده‌ام حمایتم کردند اما ترس داشتم. اول آلمانی یاد گرفتم، هر روز سه ساعت. خسته‌کننده بود اما کنار نگذاشتم.\nبعد برای تحصیل در مونیخ درخواست دادم. سرانجام پذیرش گرفتم. ناگهان همه چیز واقعی شد: باید کل زندگی‌ام را عوض می‌کردم.\nدر فرودگاه خانواده‌ام را به یاد آوردم. حس مخلوطی بود: غم و هیجان همزمان. در هواپیما نشسته بودم و به آینده فکر می‌کردم.\nالان دو سال است که در مونیخ زندگی می‌کنم. دوستان جدید زیادی پیدا کردم و چیزهای زیادی یاد گرفتم. گاهی وطنم را دلتنگ می‌شوم اما پشیمان نیستم. در آینده مدرکم را می‌گیرم و امیدوارم اینجا کار پیدا کنم. یک روزی می‌خواهم خانواده‌ام را به آلمان دعوت کنم.",
      questions: [
        { question: "او سه سال پیش چه کار می‌کرد؟", answer: "در تهران کار می‌کرد و شغل خوبی داشت." },
        { question: "اولین قدمش چه بود؟", answer: "هر روز سه ساعت آلمانی یاد گرفت." },
        { question: "در فرودگاه چه حسی داشت؟", answer: "حس مخلوطی از غم و هیجان." },
        { question: "هدف آینده‌اش چیست؟", answer: "گرفتن مدرک، پیدا کردن کار و دعوت خانواده به آلمان." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن یک تجربه شخصی",
      prompt: "یک تجربه مهم زندگی‌تان را در ۱۲-۱۵ خط بنویسید. از سه زمان (Perfekt, Präsens, Futur I) و Redemittel روایی استفاده کنید.",
      steps: [
        {
          title: "مقدمه و گذشته",
          text: "Am Anfang / Vor ... Jahren",
          example: { de: "Vor zwei Jahren habe ich eine wichtige Entscheidung getroffen.", fa: "دو سال پیش تصمیم مهمی گرفتم." }
        },
        {
          title: "بدنه داستان",
          text: "Dann / Danach / Plötzlich",
          example: { de: "Dann ist etwas Unerwartetes passiert.", fa: "بعد اتفاق غیرمنتظره‌ای افتاد." }
        },
        {
          title: "پایان و آینده",
          text: "Schließlich / In Zukunft",
          example: { de: "Schließlich hat sich alles zum Guten gewendet.", fa: "سرانجام همه چیز خوب شد." }
        }
      ],
      modelAnswer: "Vor drei Jahren habe ich beschlossen, Deutsch zu lernen. Am Anfang war es sehr schwer. Zuerst habe ich die Grammatik nicht verstanden. Dann habe ich einen guten Lehrer gefunden, der mir geholfen hat. Plötzlich wurde alles leichter. Ich habe jeden Tag geübt und bin besser geworden. Nach einem Jahr habe ich die A2-Prüfung bestanden. Schließlich habe ich mich für einen B1-Kurs angemeldet. Jetzt lerne ich noch intensiver. Ich erinnere mich an den ersten Tag, als ich kein Wort Deutsch konnte. Das war eine schwierige Zeit, aber auch eine wichtige Erfahrung. In Zukunft werde ich B2 machen und hoffentlich nach Deutschland reisen. Irgendwann möchte ich dort studieren und arbeiten. Diese Erfahrung hat mein Leben verändert."
    }
  ],

  listening: [
    {
      title: "داستان‌گویی",
      instruction: "به جملات زیر گوش دهید و بنویسید (Dictation). این عبارات در روایت استفاده می‌شوند.",
      sentences: [
        { de: "Am Anfang war alles schwer.", fa: "در ابتدا همه چیز سخت بود.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Am Anfang war alles schwer" },
        { de: "Zuerst habe ich mich hingesetzt.", fa: "اول نشستم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Zuerst habe ich mich hingesetzt" },
        { de: "Dann ist etwas Unerwartetes passiert.", fa: "بعد اتفاق غیرمنتظره‌ای افتاد.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Dann ist etwas Unerwartetes passiert" },
        { de: "Plötzlich hat alles sich verändert.", fa: "ناگهان همه چیز عوض شد.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Plötzlich hat alles sich verändert" },
        { de: "Schließlich habe ich es geschafft.", fa: "سرانجام موفق شدم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Schließlich habe ich es geschafft" },
        { de: "Ich erinnere mich daran.", fa: "یادم هست / به یاد می‌آورم.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=Ich erinnere mich daran" },
        { de: "In Zukunft werde ich mehr machen.", fa: "در آینده بیشتر خواهم کرد.", tts: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=In Zukunft werde ich mehr machen" }
      ]
    }
  ],

  speaking: [
    {
      title: "روایت یک تجربه",
      pattern: "Am Anfang... / Zuerst... / Dann... / Plötzlich... / Schließlich... / In Zukunft werde ich...",
      exercise: "یک تجربه مهم زندگی‌تان را برای دوستتان تعریف کنید. از سه زمان (گذشته، حال، آینده) استفاده کنید و داستان را منظم روایت کنید."
    }
  ],

  cultureTip: "در فرهنگ آلمانی، داستان‌گویی (Geschichtenerzählen) بخش مهمی از فرهنگ شفاهی است. مارکس برادران (Gebrüder Grimm) با جمع‌آوری افسانه‌ها معروف شدند. آلمانی‌ها در مکالمه روزمره هم از تکنیک‌های روایی استفاده می‌کند: «Weißt du, was mir passiert ist؟» (می‌دانی چه اتفاقی برایم افتاد؟) شروع رایج یک داستان است. در امتحان B1، بخش Sprechen شامل توصیف تصاویر و روایت اتفاقات است.",

  examData: {
    questions: [
      { question: "برای شروع داستان از کدام عبارت استفاده می‌شود؟", options: ["Schließlich", "Zum Schluss", "Am Anfang", "Danach"], answer: 2 },
      { question: "«Schließlich» یعنی:؟", options: ["ناگهان", "سرانجام", "بعد", "اول"], answer: 1 },
      { question: "در روایت شفاهی از چه زمانی برای گذشته استفاده می‌شود؟", options: ["Präteritum", "Perfekt", "Plusquamperfekt", "Futur"], answer: 1 },
      { question: "«Plötzlich» یعنی:؟", options: ["بعداً", "سرانجام", "ناگهان", "ابتدا"], answer: 2 },
      { question: "برای بیان آینده از چه ساختاری استفاده می‌شود؟", options: ["Perfekt", "Präteritum", "Futur I (werden + Infinitiv)", "Präsens"], answer: 2 },
      { question: "«sich erinnern an» یعنی:؟", options: ["فراموش کردن", "به یاد آوردن", "تجربه کردن", "تصمیم گرفتن"], answer: 1 },
      { question: "«passieren» یعنی:؟", options: ["سفر کردن", "اتفاق افتادن", "شروع کردن", "تمام شدن"], answer: 1 },
      { question: "«irgendwann» یعنی:؟", options: ["الان", "هرگز", "یک روزی", "فوراً"], answer: 2 },
      { question: "کدام فعل در Präteritum حتی در مکالمه استفاده می‌شود؟", options: ["machen", "gehen", "haben", "spielen"], answer: 2 },
      { question: "«vor kurzem» یعنی:؟", options: ["مدت‌ها پیش", "اخیراً", "فردا", "الان"], answer: 1 }
    ]
  }
};
