export const day1Data = {
  title: "روز ۱: الفبای آلمانی + تلفظ + معرفی خود",
  objective: "در پایان این روز، شما قادر خواهید بود حروف الفبای آلمانی را با تلفظ صحیح بخوانید، قواعد ترکیب حروف را بشناسید، خودتان را به آلمانی معرفی کنید و از افعال پایه‌ای مثل heißen, kommen, wohnen, sprechen, lernen استفاده کنید.",
  level: "A1",

  grammarData: {
    subtitle: "درس‌های گرامری با تمرین تعاملی",
    content: [
      {
        type: "text",
        title: "خوش‌آمدید به زبان آلمانی! (Willkommen)",
        text: "زبان آلمانی بسیار قانون‌مند است. اگر از روز اول تلفظ و الفبا را درست یاد بگیرید، مسیر یادگیری‌تان بسیار هموار خواهد شد.\nهدف ما در روز اول: آشنایی کامل با ۲۶ حرف الفبا، حروف خاص آلمانی (ä, ö, ü, ß) و قواعد ترکیب حروف."
      },
      {
        type: "table",
        title: "۱. الفبای کامل آلمانی با IPA",
        rows: [
          { de: "A a [aː]", fa: "مانند «آ» کشیده: der Apfel [ˈapfl̩] (سیب)" },
          { de: "B b [beː]", fa: "مانند «ب»: der Ball [bal] (توپ)" },
          { de: "C tseː]", fa: "معمولاً در کلمات وام‌گرفته: das Café [kaˈfeː] (کافه)" },
          { de: "D d [deː]", fa: "مانند «د»: der Dank [daŋk] (تشکر)" },
          { de: "E e [eː]", fa: "مانند «اِ» کشیده: der Elefant [e.leˈfant] (فیل)" },
          { de: "F f [ɛf]", fa: "مانند «ف»: der Freund [fʁɔʏnt] (دوست)" },
          { de: "G g [geː]", fa: "مانند «گ»: das Geld [ɡɛlt] (پول)" },
          { de: "H h [haː]", fa: "مانند «ه»: das Haus [haʊs] (خانه)" },
          { de: "I i [iː]", fa: "مانند «ای»: immer [ˈɪmɐ] (همیشه)" },
          { de: "J j [jɔt]", fa: "مانند «ی»: ja [jaː] (بله)" },
          { de: "K k [kaː]", fa: "مانند «ک»: der Kuchen [ˈkuːxn̩] (کیک)" },
          { de: "L l [ɛl]", fa: "مانند «ل»: die Lampe [ˈlampə] (چراغ)" },
          { de: "M m [ɛm]", fa: "مانند «م»: der Mann [man] (مرد)" },
          { de: "N n [ɛn]", fa: "مانند «ن»: der Name [ˈnaːmə] (نام)" },
          { de: "O o [oː]", fa: "مانند «او»: oder [ˈoːdɐ] (یا)" },
          { de: "P p [peː]", fa: "مانند «پ»: der Park [paʁk] (پارک)" },
          { de: "Q q [kuː]", fa: "همیشه با u: die Qualität [kva.liˈtɛːt] (کیفیت)" },
          { de: "R r [ɛʁ]", fa: "غرشی از گلو (نه ر زبانی): rot [ʁoːt] (قرمز)" },
          { de: "S s [ɛs]", fa: "بین حرف صدادار: «ز» وگرنه «س»: die Sonne [ˈzɔnə] (خورشید)" },
          { de: "T t [teː]", fa: "مانند «ت»: die Tür [tyːɐ̯] (در)" },
          { de: "U u [uː]", fa: "مانند «او» عمیق: und [ʊnt] (و)" },
          { de: "V v [faʊ]", fa: "مانند «ف»: der Vater [ˈfaːtɐ] (پدر)" },
          { de: "W w [veː]", fa: "مانند «و»: das Wasser [ˈvasɐ] (آب)" },
          { de: "X x [ɪks]", fa: "مانند «کس»: der Tax [taks] (تاکسی)" },
          { de: "Y y [ˈʏpsilɔn]", fa: "معمولاً مانند «او»: das System [zysˈteːm] (سیستم)" },
          { de: "Z z [tsɛt]", fa: "مانند «تس»: die Zeit [tsaɪt] (زمان)" },
          { de: "Ä ä [ɛː]", fa: "مانند «اِ» باز: der Käse [ˈkɛːzə] (پنیر)" },
          { de: "Ö ö [øː]", fa: "مانند «اُ» گرد: schön [ʃøːn] (زیبا)" },
          { de: "Ü ü [yː]", fa: "مانند «او» گرد: über [ˈyːbɐ] (بیش از)" },
          { de: "ß [ɛsˈt͡sɛt]", fa: "صدای «س» شدید: groß [ɡʁoːs] (بزرگ)" }
        ]
      },
      {
        type: "alert",
        title: "نکته طلایی تلفظ در آلمانی",
        text: "در زبان آلمانی تقریباً هر کلمه‌ای همان‌طور که نوشته می‌شود، خوانده می‌شود! به استثنای چند ترکیب حرفی مهم که در جدول زیر آمده است."
      },
      {
        type: "table",
        title: "ترکیب حروف (بسیار مهم!)",
        rows: [
          { de: "ei [aɪ]", fa: "همیشه صدای «آی»: nein [naɪn] (نه), zwei [tsvaɪ] (دو)" },
          { de: "ie [iː]", fa: "همیشه صدای «ای» کشیده: die Liebe [ˈliːbə] (عشق), vier [fiːɐ̯] (چهار)" },
          { de: "eu / äu [ɔʏ]", fa: "همیشه صدای «اوی»: neun [nɔʏn] (نه), Euro [ˈɔʏʁoː] (یورو)" },
          { de: "au [aʊ]", fa: "صدای «آو»: das Auto [ˈaʊtoː] (ماشین)" },
          { de: "sch [ʃ]", fa: "صدای «ش» واضح: schnell [ʃnɛl] (سریع)" },
          { de: "ch [x] یا [ç]", fa: "بعد از a,o,u: صدای «خ» (machen [ˈmaxn̩]). بعد از e,i,ä,ö,ü: صدای «ش» خیلی نرم (ich [ɪç])" },
          { de: "sp / st [ʃp] / [ʃt]", fa: "در ابتدای کلمه: صدای «شپ» و «شت»: spielen [ˈʃpiːln̩] (بازی کردن) / stehen [ˈʃteːən] (ایستادن)" },
          { de: "ph [f]", fa: "صدای «ف»: Physik [fyˈziːk] (فیزیک)" },
          { de: "tion [tsi̯oːn]", fa: "در انتهای کلمات: صدای «تسیون»: Information [ɪnfɔʁmaˈtsi̯oːn] (اطلاعات)" },
          { de: "ck [k]", fa: "صدای «ک»: der Zucker [ˈtsʊkɐ] (شکر)" },
          { de: "pf [pf]", fa: "هر دو صدا با هم: der Apfel [ˈapfl̩] (سیب)" },
          { de: "z [ts]", fa: "صدای «تس»: die Zeit [tsaɪt] (زمان)" }
        ]
      },
      {
        type: "text",
        title: "۲. ضمیرهای فاعلی (Personalpronomen)",
        text: "برای جمله‌سازی، اولین چیزی که باید یاد بگیرید این است که چطور بگویید «من، تو، او و...».\nدر زبان آلمانی برخلاف فارسی، برای «او» سه کلمه جداگانه (برای مرد، زن و خنثی) وجود دارد. همچنین آلمانی‌ها روی تفاوت بین «تو» (دوستانه) و «شما» (رسمی) بسیار حساس هستند."
      },
      {
        type: "table",
        title: "ضمیرهای فاعلی (همه ۹ مورد)",
        rows: [
          { de: "ich", fa: "من (اول شخص مفرد)" },
          { de: "du", fa: "تو (دوم شخص مفرد دوستانه - برای خانواده، دوستان و کودکان)" },
          { de: "er", fa: "او (مذکر - برای مردان و اسم‌ها با آرتیکل der)" },
          { de: "sie", fa: "او (مؤنث - برای زنان و اسم‌ها با آرتیکل die)" },
          { de: "es", fa: "او / آن (خنثی - برای اسم‌ها با آرتیکل das مثل das Kind)" },
          { de: "wir", fa: "ما (اول شخص جمع)" },
          { de: "ihr", fa: "شماها (دوم شخص جمع دوستانه - وقتی با جمعی از دوستان حرف می‌زنید)" },
          { de: "sie", fa: "آن‌ها (سوم شخص جمع)" },
          { de: "Sie", fa: "شما (رسمی - برای غریبه‌ها و محیط کار. همیشه با S بزرگ نوشته می‌شود!)" }
        ]
      },
      {
        type: "text",
        title: "۳. پنج فعل ضروری روز اول",
        text: "این پنج فعل را باید از حفظ باشید. همه آن‌ها فعل‌های منظم هستند و صرف آن‌ها قاعده دارد.\nدر آلمانی فعل‌ها بر اساس فاعل (من، تو، او...) شکل عوض می‌کنند که به آن «صرف فعل» می‌گویند."
      },
      {
        type: "table",
        title: "صرف فعل heißen (نام داشتن/نامیده شدن)",
        rows: [
          { de: "ich heiße", fa: "من نامم هست: Ich heiße Ali. (نامم علی است.)" },
          { de: "du heißt", fa: "تو نامت هست: Wie heißt du? (نامت چیست؟)" },
          { de: "er/sie/es heißt", fa: "او نامش هست: Er heißt Peter. (او پیتر نام دارد.)" },
          { de: "wir heißen", fa: "ما ناممان هست: Wir heißen Müller. (نام خانوادگی‌مان مولر است.)" },
          { de: "ihr heißt", fa: "شماها نامتان هست: Wie heißt ihr? (نام‌هایتان چیست؟)" },
          { de: "sie/Sie heißen", fa: "آن‌ها/شما نامشان هست: Wie heißen Sie? (نام شما چیست؟ - رسمی)" }
        ]
      },
      {
        type: "table",
        title: "صرف فعل kommen (آمدن)",
        rows: [
          { de: "ich komme", fa: "من می‌آیم: Woher komme ich? (از کجا بیایم؟)" },
          { de: "du kommst", fa: "تو می‌آیی: Woher kommst du? (از کجایی؟)" },
          { de: "er/sie/es kommt", fa: "او می‌آید: Er kommt aus Berlin. (او از برلین می‌آید.)" },
          { de: "wir kommen", fa: "ما می‌آییم: Wir kommen aus dem Iran. (ما از ایران می‌آییم.)" },
          { de: "ihr kommt", fa: "شماها می‌آیید: Wohnt ihr in Deutschland? (آیا شماها در آلمان زندگی می‌کنید؟)" },
          { de: "sie/Sie kommen", fa: "آن‌ها/شما می‌آیید: Sie kommen aus Österreich. (آن‌ها از اتریش می‌آیند.)" }
        ]
      },
      {
        type: "table",
        title: "صرف فعل wohnen (زندگی کردن)",
        rows: [
          { de: "ich wohne", fa: "من زندگی می‌کنم: Ich wohne in Hamburg. (در هامبورگ زندگی می‌کنم.)" },
          { de: "du wohnst", fa: "تو زندگی می‌کنی: Wo wohnst du? (کجا زندگی می‌کنی؟)" },
          { de: "er/sie/es wohnt", fa: "او زندگی می‌کند: Sie wohnt bei ihrer Mutter. (او پیش مادرش زندگی می‌کند.)" },
          { de: "wir wohnen", fa: "ما زندگی می‌کنیم: Wir wohnen zusammen. (با هم زندگی می‌کنیم.)" },
          { de: "ihr wohnt", fa: "شماها زندگی می‌کنید: Wo wohnt ihr? (کجا زندگی می‌کنید؟)" },
          { de: "sie/Sie wohnen", fa: "آن‌ها/شما زندگی می‌کنید: Sie wohnen in München. (آن‌ها در مونیخ زندگی می‌کنند.)" }
        ]
      },
      {
        type: "table",
        title: "صرف فعل sprechen (صحبت کردن)",
        rows: [
          { de: "ich spreche", fa: "من صحبت می‌کنم: Ich spreche Deutsch. (آلمانی صحبت می‌کنم.)" },
          { de: "du sprichst", fa: "تو صحبت می‌کنی: Sprichst du Englisch? (انگلیسی صحبت می‌کنی؟)" },
          { de: "er/sie/es spricht", fa: "او صحبت می‌کند: Er spricht drei Sprachen. (او سه زبان صحبت می‌کند.)" },
          { de: "wir sprechen", fa: "ما صحبت می‌کنیم: Wir sprechen zusammen. (با هم صحبت می‌کنیم.)" },
          { de: "ihr sprecht", fa: "شماها صحبت می‌کنید: Sprecht ihr Farsi? (فارسی صحبت می‌کنید؟)" },
          { de: "sie/Sie sprechen", fa: "آن‌ها/شما صحبت می‌کنید: Sie sprechen langsam. (آن‌ها آرام صحبت می‌کنند.)" }
        ]
      },
      {
        type: "table",
        title: "صرف فعل lernen (یاد گرفتن)",
        rows: [
          { de: "ich lerne", fa: "من یاد می‌گیرم: Ich lerne Deutsch. (آلمانی یاد می‌گیرم.)" },
          { de: "du lernst", fa: "تو یاد می‌گیری: Wo lernst du? (کجا یاد می‌گیری؟)" },
          { de: "er/sie/es lernt", fa: "او یاد می‌گیرد: Er lernt viel. (او زیاد یاد می‌گیرد.)" },
          { de: "wir lernen", fa: "ما یاد می‌گیریم: Wir lernen zusammen. (با هم یاد می‌گیریم.)" },
          { de: "ihr lernt", fa: "شماها یاد می‌گیرید: Lernt ihr schnell? (سریع یاد می‌گیرید؟)" },
          { de: "sie/Sie lernen", fa: "آن‌ها/شما یاد می‌گیرید: Sie lernen gut. (آن‌ها خوب یاد می‌گیرند.)" }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم صرف فعل",
        text: "توجه کنید که در جدول صرف فعل‌ها، ضمیرهای wir (ما)، sie (آن‌ها) و Sie (شما رسمی) همیشه یک شکل فعل دارند! این یک قانون طلایی است که کار را آسان می‌کند."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ضمیرهای فاعلی",
        questions: [
          {
            question: "برای صحبت با مدیر شرکت خود از کدام ضمیر استفاده می‌کنید؟",
            questionDe: "Welches Pronomen benutzen Sie für Ihren Chef?",
            options: [
              { text: "du", isCorrect: false },
              { text: "ihr", isCorrect: false },
              { text: "Sie", isCorrect: true },
              { text: "sie", isCorrect: false }
            ],
            explanation: "عالی! برای مدیران، افراد مسن‌تر و محیط‌های رسمی همیشه از Sie (با S بزرگ) استفاده می‌کنیم."
          },
          {
            question: "کدام ضمیر برای اشاره به گروهی از دوستانتان (علی، سارا و مریم) استفاده می‌کنید؟",
            questionDe: "Welches Pronomen benutzen Sie für eine Gruppe von Freunden?",
            options: [
              { text: "Sie", isCorrect: false },
              { text: "ihr", isCorrect: true },
              { text: "wir", isCorrect: false }
            ],
            explanation: "درست است! کلمه ihr به معنای «شماها» (جمع دوستانه) است."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین جای خالی: ضمیرها و افعال",
        instructions: "جای خالی را با ضمیر یا فعل مناسب پر کنید.",
        sentences: [
          { de: "___ heiße Maria. Was ist dein Name?", answer: "Ich", hint: "ضمیر اول شخص مفرد" },
          { de: "___ kommen aus Deutschland.", answer: "Wir", hint: "ضمیر اول شخص جمع" },
          { de: "___ sprecht ihr?", answer: "Was", hint: "کلمه سوالی «چه»" },
          { de: "Ich ___ Deutsch.", answer: "spreche", hint: "فعل صحبت کردن با ich" },
          { de: "Wo ___ du?", answer: "wohnst", hint: "فعل زندگی کردن با du" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "معرفی و احوال‌پرسی",
        words: [
          {
            de: "Hallo",
            fa: "سلام (غیررسمی)",
            ipa: "[ˈhalo]",
            examples: [{ de: "Hallo, wie geht es dir?", fa: "سلام، حالت چطوره؟" }]
          },
          {
            de: "Guten Morgen",
            fa: "صبح بخیر",
            ipa: "[ˈɡuːtn̩ ˈmɔʁɡn̩]",
            examples: [{ de: "Guten Morgen, Frau Schmidt.", fa: "صبح بخیر خانم اشمیت." }]
          },
          {
            de: "Guten Tag",
            fa: "روز بخیر",
            ipa: "[ˈɡuːtn̩ taːk]",
            examples: [{ de: "Guten Tag, mein Name ist Ali.", fa: "روز بخیر، نام من علی است." }]
          },
          {
            de: "Guten Abend",
            fa: "عصر/شب بخیر",
            ipa: "[ˈɡuːtn̩ ˈaːbn̩t]",
            examples: [{ de: "Guten Abend zusammen!", fa: "عصر همگی بخیر!" }]
          },
          {
            de: "Gute Nacht",
            fa: "شب بخیر (موقع خواب)",
            ipa: "[ˈɡuːtə naxt]",
            examples: [{ de: "Gute Nacht, schlaf gut!", fa: "شب بخیر، خوب بخواب!" }]
          },
          {
            de: "Tschüss",
            fa: "خداحافظ (غیررسمی)",
            ipa: "[tʃʏs]",
            examples: [{ de: "Tschüss, bis morgen!", fa: "خداحافظ، تا فردا!" }]
          },
          {
            de: "Auf Wiedersehen",
            fa: "به امید دیدار (رسمی)",
            ipa: "[aʊ̯f ˈviːdɐˌzeːən]",
            examples: [{ de: "Auf Wiedersehen, Herr Wagner.", fa: "به امید دیدار آقای واگنر." }]
          },
          {
            de: "Danke",
            fa: "ممنون",
            ipa: "[ˈdaŋkə]",
            examples: [{ de: "Danke schön!", fa: "خیلی ممنون!" }]
          },
          {
            de: "Bitte",
            fa: "لطفاً / خواهش می‌کنم",
            ipa: "[ˈbɪtə]",
            examples: [{ de: "Ja, bitte.", fa: "بله، لطفاً." }]
          }
        ]
      },
      {
        title: "اطلاعات شخصی",
        words: [
          {
            de: "der Name",
            fa: "نام",
            ipa: "[ˈnaːmə]",
            article: "der",
            plural: "die Namen",
            examples: [{ de: "Mein Name ist Müller.", fa: "نام من مولر است." }]
          },
          {
            de: "das Land",
            fa: "کشور",
            ipa: "[lant]",
            article: "das",
            plural: "die Länder",
            examples: [{ de: "Ich komme aus dem Iran.", fa: "من از ایران می‌آیم." }]
          },
          {
            de: "die Stadt",
            fa: "شهر",
            ipa: "[ʃtat]",
            article: "die",
            plural: "die Städte",
            examples: [{ de: "Ich wohne in Berlin.", fa: "من در برلین زندگی می‌کنم." }]
          },
          {
            de: "die Sprache",
            fa: "زبان",
            ipa: "[ˈʃpʁaːxə]",
            article: "die",
            plural: "die Sprachen",
            examples: [{ de: "Welche Sprachen sprichst du?", fa: "چه زبان‌هایی صحبت می‌کنی؟" }]
          },
          {
            de: "Deutsch",
            fa: "آلمانی (زبان)",
            ipa: "[dɔʏtʃ]",
            examples: [{ de: "Ich lerne Deutsch.", fa: "من آلمانی یاد می‌گیرم." }]
          },
          {
            de: "der Beruf",
            fa: "شغل",
            ipa: "[bəˈʁuːf]",
            article: "der",
            plural: "die Berufe",
            examples: [{ de: "Was ist dein Beruf?", fa: "شغلت چیست؟" }]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein neues Treffen (یک دیدار جدید)\n\nLukas: Hallo! Guten Morgen.\nSarah: Guten Morgen!\nLukas: Ich bin Lukas. Wie heißt du?\nSarah: Ich heiße Sarah. Freut mich.\nLukas: Woher kommst du, Sarah?\nSarah: Ich komme aus Österreich, aus Wien. Und du?\nLukas: Ich komme aus Deutschland, aber ich wohne in der Schweiz, in Zürich.\nSarah: Oh, interessant! Ich bin Studentin. Ich lerne Deutsch.\nLukas: Ich auch! Wir sprechen zusammen Deutsch.\nSarah: Ja, das ist gut. Danke!",
      translation: [
        { de: "Ein neues Treffen", fa: "یک دیدار جدید" },
        { de: "Lukas: Hallo! Guten Morgen.", fa: "لوکاس: سلام! صبح بخیر." },
        { de: "Sarah: Guten Morgen!", fa: "سارا: صبح بخیر!" },
        { de: "Lukas: Ich bin Lukas. Wie heißt du?", fa: "لوکاس: من لوکاسم. نام تو چیست؟" },
        { de: "Sarah: Ich heiße Sarah. Freut mich.", fa: "سارا: نام من ساراست. خوشوقتم." },
        { de: "Lukas: Woher kommst du, Sarah?", fa: "لوکاس: سارا، از کجایی؟" },
        { de: "Sarah: Ich komme aus Österreich, aus Wien. Und du?", fa: "سارا: من از اتریش، از وین می‌آیم. و تو؟" },
        { de: "Lukas: Ich komme aus Deutschland, aber ich wohne in der Schweiz, in Zürich.", fa: "لوکاس: من از آلمان می‌آیم، اما در سوئیس، در زوریخ زندگی می‌کنم." },
        { de: "Sarah: Oh, interessant! Ich bin Studentin. Ich lerne Deutsch.", fa: "سارا: اوه، جالب! من دانشجو هستم. آلمانی یاد می‌گیرم." },
        { de: "Lukas: Ich auch! Wir sprechen zusammen Deutsch.", fa: "لوکاس: من هم! با هم آلمانی صحبت می‌کنیم." },
        { de: "Sarah: Ja, das ist gut. Danke!", fa: "سارا: بله، خوب است. ممنون!" }
      ],
      questions: [
        { question: "Lukas اهل کجاست و کجا زندگی می‌کند؟", answer: "او از آلمان است اما در سوئیس (زوریخ) زندگی می‌کند." },
        { question: "Sarah از کجاست؟", answer: "او از اتریش (وین) است." },
        { question: "Sarah چه می‌کند؟", answer: "او دانشجوست و آلمانی یاد می‌گیرد." },
        { question: "آن‌ها در نهایت چه تصمیمی می‌گیرند؟", answer: "آن‌ها با هم آلمانی صحبت می‌کنند." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن متن معرفی کامل خودتان (Vorstellung)",
      prompt: "شما با موفقیت قواعد پایه‌ای را یاد گرفتید. حالا نوبت این است که یک متن یک‌پارچه درباره خودتان بنویسید. لطفاً بر اساس قدم‌های زیر، جملات خود را بسازید و در کادر بنویسید.",
      steps: [
        {
          title: "نام و سن",
          text: "با یک سلام رسمی (Guten Tag) شروع کن. بگو نامت چیست (Ich heiße...) و چند سال داری (Ich bin... Jahre alt).",
          example: { de: "Guten Tag. Ich heiße Julia und ich bin 22 Jahre alt.", fa: "روز بخیر. نام من جولیاست و ۲۲ ساله‌ام." }
        },
        {
          title: "اصالت و سکونت",
          text: "بگو اهل کدام کشوری (Ich komme aus...) و الان کجا زندگی می‌کنی (Ich wohne in...).",
          example: { de: "Ich komme aus dem Iran, aber ich wohne in Hamburg.", fa: "من از ایران هستم، اما در هامبورگ زندگی می‌کنم." }
        },
        {
          title: "زبان و شغل",
          text: "بگو چه زبان‌هایی صحبت می‌کنی (Ich spreche...) و چه چیزی یاد می‌گیری (Ich lerne...).",
          example: { de: "Ich spreche Farsi und Englisch. Ich lerne jetzt Deutsch.", fa: "فارسی و انگلیسی صحبت می‌کنم. الان آلمانی یاد می‌گیرم." }
        }
      ],
      modelAnswer: "Guten Tag. Ich heiße Amir und ich bin 25 Jahre alt. Ich komme aus dem Iran, aus Teheran, aber ich wohne jetzt in München. Ich spreche Farsi und Englisch. Ich lerne Deutsch. Ich wohne in München und lerne Deutsch."
    }
  ],

  listening: [
    {
      title: "۱. معرفی و احوال‌پرسی (A1 hören)",
      instruction: "تمرین شنیداری برای رسیدن به بالاترین سطح:\n۱. یک بار کامل جملات را بشنوید.\n۲. بار دوم، هر جمله را با صدای بلند تکرار کنید.\n۳. روی تلفظ‌های ch و sch در جملات Ich heiße و Ich komme دقت کنید.",
      sentences: [
        { de: "Hallo! Guten Morgen.", fa: "سلام! صبح بخیر.", tts: "Hallo! Guten Morgen." },
        { de: "Ich heiße Maria.", fa: "نام من ماریاست.", tts: "Ich heiße Maria." },
        { de: "Ich komme aus dem Iran.", fa: "من از ایران می‌آیم.", tts: "Ich komme aus dem Iran." },
        { de: "Ich wohne in Berlin.", fa: "من در برلین زندگی می‌کنم.", tts: "Ich wohne in Berlin." },
        { de: "Ich spreche Deutsch und Englisch.", fa: "آلمانی و انگلیسی صحبت می‌کنم.", tts: "Ich spreche Deutsch und Englisch." },
        { de: "Ich lerne jetzt Deutsch.", fa: "الان آلمانی یاد می‌گیرم.", tts: "Ich lerne jetzt Deutsch." }
      ]
    },
    {
      title: "۲. هجی کردن نام (ABC)",
      instruction: "برای حفظ ۱۰۰ درصد الفبا، این ویدیو را پخش کنید. چشم‌هایتان را ببندید. هر حرفی که می‌شنوید، در ذهن خود مجسم کنید و بلند تکرار کنید. این تمرین برای هجی کردن نام شما (Buchstabieren) در اداره‌جات آلمان حیاتی است.",
      sentences: [
        { de: "A - L - I", fa: "الف - لام - ی", tts: "A L I" },
        { de: "Mein Name ist S-A-R-A.", fa: "نام من س-آ-ر-آ است.", tts: "Mein Name ist S A R A." },
        { de: "Ich heiße M-Ü-L-L-E-R.", fa: "نام من م-او-ل-ل-ا-ر است.", tts: "Ich heiße M Ü L L E R." }
      ]
    }
  ],

  speaking: [
    {
      title: "شبیه‌سازی مکالمه و Roleplay",
      pattern: "- Guten Morgen!\n- Guten Morgen. Wie heißen Sie?\n- Mein Name ist Müller. Und Sie?\n- Ich bin Herr Wagner. Woher kommen Sie, Herr Müller?\n- Ich komme aus der Schweiz. Und Sie?\n- Ich komme aus Deutschland.",
      exercise: "جلوی دیوار یا یک آینه بایستید. تصور کنید روز اول ورود شما به آلمان است و با همسایه خود روبرو شده‌اید.\nگام ۱: بخش pattern (الگو) را با دکمه‌های صدا بشنوید.\nگام ۲: نقش اول (Herr Müller) را بازی کنید.\nگام ۳: حالا جاهای خالی را با اطلاعات واقعی خودتان پر کنید و بدون نگاه کردن به متن، خود را معرفی کنید."
    },
    {
      title: "هجی کردن نام (Buchstabieren)",
      pattern: "- Wie heißen Sie?\n- Ich heiße Ali.\n- Wie bitte? Können Sie das buchstabieren?\n- Ja. A - L - I.",
      exercise: "در آلمان برای تمام کارهای اداری، باز کردن حساب بانکی و... نام شما را هجی می‌کنند. همین حالا نام و نام خانوادگی، اسم خیابان محل سکونت خود، و نام شهرتان را حرف به حرف با صدای بلند هجی کنید. اگر مطمئن نیستید، به جدول الفبا در بخش گرامر نگاه کنید و صدای آن را بشنوید."
    }
  ],

  cultureTip: "در فرهنگ آلمانی (آلمان، اتریش، سوئیس)، رعایت حریم خصوصی و رسمی بودن (Höflichkeit) بسیار مهم است. هرگز با کسی که تازه دیده‌اید، افراد مسن‌تر، استاد دانشگاه، یا کارمند بانک با صیغه «تو» (du) صحبت نکنید. گفتن du به پلیس در آلمان می‌تواند جریمه نقدی داشته باشد! از روز اول عادت کنید همه را Sie خطاب کنید تا زمانی که خود آن فرد به شما پیشنهاد دهد که به هم «تو» بگویید (Das Du anbieten). همچنین تماس چشمی (Blickkontakt) هنگام سلام و خداحافظی نشانه احترام قوی است.",

  examData: {
    questions: [
      {
        question: "تلفظ صحیح ترکیب «ei» در آلمانی چیست؟",
        options: ["ای", "آی", "اوی", "آ"],
        answer: 1
      },
      {
        question: "کدام ضمیر در آلمانی برای «شما رسمی» استفاده می‌شود؟",
        options: ["du", "ihr", "Sie", "sie"],
        answer: 2
      },
      {
        question: "فعل صحیح برای Ich ___ Deutsch چیست؟",
        options: ["spricht", "sprichst", "spreche", "sprechen"],
        answer: 2
      },
      {
        question: "معنای کلمه «Tschüss» چیست؟",
        options: ["سلام", "خداحافظ غیررسمی", "ممنون", "لطفاً"],
        answer: 1
      },
      {
        question: "کدام گزینه صحیح است؟",
        options: ["Woher du kommst?", "Woher kommst du?", "Du kommst woher?", "Kommst du woher?"],
        answer: 1
      },
      {
        question: "صرف فعل wohnen با ضمیر er چیست؟",
        options: ["wohne", "wohnst", "wohnt", "wohnen"],
        answer: 2
      },
      {
        question: "معنای «Ich komme aus dem Iran» چیست؟",
        options: ["من ایرانی هستم", "من از ایران می‌آیم", "من در ایران زندگی می‌کنم", "من ایران را دوست دارم"],
        answer: 1
      },
      {
        question: "کدام ترکیب حرفی صدای «ش» می‌دهد؟",
        options: ["ch", "sch", "ph", "ck"],
        answer: 1
      },
      {
        question: "فعل heißen با ضمیر du چیست؟",
        options: ["heiße", "heißt", "heißen", "heiß"],
        answer: 1
      },
      {
        question: "کدام گزینه برای معرفی خودتان صحیح است؟",
        options: ["Ich heiße Müller und ich komme aus Berlin.", "Ich heißen Müller und ich komme aus Berlin.", "Ich heißt Müller und ich kommt aus Berlin.", "Ich heiße Müller und ich kommen aus Berlin."],
        answer: 0
      }
    ]
  }
};
