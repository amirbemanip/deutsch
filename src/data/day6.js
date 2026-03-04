export const day6Data = {
  title: "روز ۶: روتین عجیب و غریبِ آلمانی، خانه و وسایل آن",
  objective: "در روز ۶ قصد داریم از صبح تا شب، کارهای روزمره‌مان را با جزئیات کامل شرح دهیم. در اینجا با دسته جدیدی از افعال به نام «افعال انعکاسی» (Reflexivverben) آشنا می‌شویم. قسمت دوم درس به معرفی خانه، اتاق‌ها و وسایل موجود در آن اختصاص دارد.",

  grammarData: {
    subtitle: "این درس شامل قیدهای زمان، افعال کارهای خانه، افعال بازتابی (مثل دوش گرفتن) و کلمات توصیف خانه است.",
    content: [
      {
        type: "text",
        title: "۱. قیدهای زمان و ترتیب کارها (Tagesablauf)",
        text: "برای تعریف کردن داستانِ یک روز، نمی‌توانیم فقط پشت سر هم جمله بگوییم. باید آن‌ها را با قیدهای زمان به هم وصل کنیم.\nقیدهای بخش‌های روز:\n- am Morgen (صبح)\n- am Vormittag (اواخر صبح / پیش از ظهر)\n- am Mittag (ظهر)\n- am Nachmittag (بعدازظهر)\n- am Abend (عصر / شب)\n- in der Nacht (نصفه شب)\n\nقیدهای توالی و ترتیب (برای داستان‌گویی):\n- zuerst (در ابتدا / اول از همه)\n- dann (سپس / بعدش)\n- danach (بعد از آن)\n- später (بعداً)\n- schließlich (در نهایت / سرانجام)"
      },
      {
        type: "alert",
        title: "یادآوری طلایی قانونی قدیمی",
        text: "اگر جمله‌ای را با کلمات زمانی بالا (مثل Dann یا Am Morgen) شروع کنید، جایگاه دوم جمله فقط متعلق به «فعل» است و فاعل به جایگاه سوم پرتاب می‌شود!\nمثال: Dann trinke ich Kaffee. (اشتباه: Dann ich trinke Kaffee)"
      },
      {
        type: "examples",
        title: "داستان یک روتین ساده",
        items: [
          { de: "Am Morgen stehe ich um 7 Uhr auf.", fa: "صبح ساعت ۷ بیدار می‌شوم." },
          { de: "Zuerst dusche ich und dann frühstücke ich.", fa: "ابتدا دوش می‌گیرم و سپس صبحانه می‌خورم." },
          { de: "Danach gehe ich zur Arbeit.", fa: "پس از آن به سر کار می‌روم." },
          { de: "Am Abend sehe ich fern. Schließlich gehe ich ins Bett.", fa: "عصر تلویزیون می‌بینم. در نهایت به رختخواب می‌روم." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ساختار داستان‌گویی",
        questions: [
          {
            question: "اگر بخواهیم بگوییم «سپس به خانه می‌روم» کدام جمله کاملاً صحیح است؟",
            questionDe: "Wie sagt man 'سپس به خانه می‌روم'?",
            options: [
              { text: "Dann gehe ich nach Hause.", isCorrect: true },
              { text: "Dann ich gehe nach Hause.", isCorrect: false },
              { text: "Ich dann gehe nach Hause.", isCorrect: false }
            ],
            explanation: "آفرین! قید Dann در جایگاه اول نشسته است، پس فعل (gehe) قطعاً باید در جایگاه دوم باشد."
          }
        ]
      },
      {
        type: "text",
        title: "۲. افعال انعکاسی یا بازتابی (Reflexivverben)",
        text: "بعضی از کارها را ما روی وجود خودمان انجام می‌دهیم. مثلاً ماشین را می‌شوییم (عادی)، اما صورتمان را می‌شوییم (انعکاسی). در آلمانی در این حالت باید از ضمیر «خودم / خودت» استفاده کنیم.\nبه این ضمایر Reflexiv می‌گویند."
      },
      {
        type: "table",
        title: "ضمایر انعکاسی برای من و تو",
        rows: [
          { de: "ich ... mich", fa: "من ... خودم را" },
          { de: "du ... dich", fa: "تو ... خودت را" }
        ]
      },
      {
        type: "examples",
        title: "افعال انعکاسی پرکاربرد در রوتين",
        items: [
          { de: "Ich wasche mich.", fa: "من (خودم را) می‌شویم." },
          { de: "Ich ziehe mich an.", fa: "من لباس (به خودم) می‌پوشانم. (anziehen یک فعل جداشدنی است!)" },
          { de: "Ich ruhe mich aus.", fa: "من استراحت می‌کنم. (ausruhen هم جداشدنی است!)" }
        ]
      },
      {
        type: "text",
        title: "۳. توصیف خانه (Haus und Wohnung)",
        text: "در آلمان افراد یا در یک Haus (خانه ویلایی/شخصی) زندگی می‌کنند یا در یک Wohnung (آپارتمان).\nبرای توصیف اینکه خانه چه چیزهایی دارد می‌توانیم بگوییم «Meine Wohnung hat...» (آپارتمان من ... دارد) یا از ساختار جادویی «Es gibt» استفاده کنیم.\n\n**ساختار Es gibt:** یعنی «وجود دارد / هست». این عبارت همیشه در حالت Akkusativ (مفعولی) عمل می‌کند. پس کلمات مذکر را تغییر می‌دهد."
      },
      {
        type: "examples",
        title: "وسایل در اتاق من (با استفاده از es gibt)",
        items: [
          { de: "In meinem Zimmer gibt es ein Bett.", fa: "در اتاق من یک تخت وجود دارد. (das Bett خنثی است = تغییر نمی‌کند)" },
          { de: "Es gibt eine Lampe.", fa: "یک لامپ وجود دارد. (die Lampe مونث است = تغییر نمی‌کند)" },
          { de: "In der Küche gibt es einen Tisch.", fa: "در آشپزخانه یک میز وجود دارد. (der Tisch مذکر است ➔ einen Tisch!)" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "روتین روزانه (Der Tagesablauf)",
        words: [
          {
            de: "aufstehen",
            fa: "بیدار شدن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich stehe jeden Morgen um 6 Uhr auf.", fa: "من هر صبح ساعت 6 بلند می‌شوم." }
            ]
          },
          {
            de: "frühstücken",
            fa: "صبحانه خوردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Um halb sieben frühstücke ich.", fa: "ساعت شش و نیم صبحانه می‌خورم." }
            ]
          },
          {
            de: "arbeiten / Pause machen",
            fa: "کار کردن / استراحت و وقفه کاری",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich arbeite von 8 bis 16 Uhr und mache am Mittag eine Pause.", fa: "من از ۸ تا ۱۶ کار می‌کنم و ظهر یک وقفه دارم." }
            ]
          },
          {
            de: "ins Bett gehen",
            fa: "به رختخواب رفتن / خوابیدن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Schließlich gehe ich um 23 Uhr ins Bett.", fa: "در نهایت ساعت ۲۳ به تخت خواب می‌روم." }
            ]
          }
        ]
      },
      {
        title: "افعال انعکاسی (Reflexivverben)",
        words: [
          {
            de: "sich waschen",
            fa: "خود را شستن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Morgens wasche ich mich im Bad.", fa: "صبح‌ها در حمام دست و رویم را می‌شویم." }
            ]
          },
          {
            de: "sich anziehen",
            fa: "لباس پوشیدن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich ziehe mich schnell an.", fa: "من سریع لباس‌هایم را می‌پوشم." }
            ]
          },
          {
            de: "sich ausruhen",
            fa: "استراحت کردن / ریلکس کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Am Abend ruhe ich mich auf dem Sofa aus.", fa: "غروب‌ها روی مبل استراحت می‌کنم." }
            ]
          }
        ]
      },
      {
        title: "کارهای خانه (Die Hausarbeit)",
        words: [
          {
            de: "aufräumen",
            fa: "مرتب کردن / جمع و جور کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich räume mein Zimmer auf.", fa: "من اتاقم را مرتب می‌کنم." }
            ]
          },
          {
            de: "putzen",
            fa: "تمیز کردن / مسواک زدن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Am Wochenende putze ich das Haus.", fa: "در آخر هفته خانه را تمیز می‌کنم." },
              { de: "Ich putze mir die Zähne.", fa: "من دندان‌هایم را مسواک می‌زنم." }
            ]
          },
          {
            de: "kochen",
            fa: "آشپزی کردن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Heute koche ich das Essen.", fa: "امروز من غذا را می‌پزم." }
            ]
          }
        ]
      },
      {
        title: "اتاق‌ها و مبلمان (Zimmer und Möbel)",
        words: [
          {
            de: "Wohnzimmer / Schlafzimmer",
            fa: "اتاق نشیمن / اتاق خواب",
            article: "das / das",
            plural: "die Wohnzimmer / die Schlafzimmer",
            examples: [
              { de: "Das Sofa steht im Wohnzimmer.", fa: "مبل در اتاق نشیمن قرار دارد." }
            ]
          },
          {
            de: "Küche / Bad",
            fa: "آشپزخانه / حمام",
            article: "die / das",
            plural: "die Küchen / die Bäder",
            examples: [
              { de: "Die Küche ist groß und das Bad ist klein.", fa: "آشپزخانه بزرگ است و حمام کوچک." }
            ]
          },
          {
            de: "Bett / Schrank",
            fa: "تخت / کمد",
            article: "das / der",
            plural: "die Betten / die Schränke",
            examples: [
              { de: "In meinem Zimmer gibt es ein Bett und einen Schrank.", fa: "در اتاق من یک تخت و یک کمد (einen) وجود دارد." }
            ]
          },
          {
            de: "Tisch / Stuhl",
            fa: "میز / صندلی",
            article: "der / der",
            plural: "die Tische / die Stühle",
            examples: [
              { de: "Der Tisch und der Stuhl sind neu.", fa: "میز و صندلی جدید هستند." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein Tag in Andreas Leben\n\nHallo, ich bin Andrea. An einem normalen Mittwoch stehe ich um sechs Uhr auf. Zuerst wasche ich mich im Badezimmer und putze die Zähne. Dann ziehe ich mich an. Danach frühstücke ich in der Küche und trinke einen Kaffee.\nUm acht Uhr fahre ich zur Arbeit. Ich arbeite bis 16 Uhr und mache am Mittag eine Stunde Pause. Am Nachmittag kaufe ich im Supermarkt ein. Später fahre ich nach Hause. Am Abend koche ich das Essen und räume mein Wohnzimmer auf. Schließlich ruhe ich mich auf dem Sofa aus und sehe fern. Um 23 Uhr gehe ich ins Bett.",
      questions: [
        { question: "آندره‌آ در ابتدا (zuerst) پس از بیداری چه کار می‌کند؟ (بدن و لباس)" },
        { question: "او در آشپزخانه چه می‌کند؟" },
        { question: "دو کاری که آندره‌آ در بعدازظهر (am Nachmittag) و بعدتر انجام می‌دهد چیست؟" },
        { question: "در غروب (am Abend)، او روی مبل (auf dem Sofa) چه احساسی پیدا می‌کند؟ (فصل استراحت)" }
      ]
    },
    {
      text: "Meine kleine Welt: Meine Wohnung\n\nIch wohne in Köln in einer Wohnung. Meine Wohnung ist nicht sehr groß, aber gemütlich. Sie hat drei Zimmer: ein Wohnzimmer, ein Schlafzimmer und ein Arbeitszimmer. In der Wohnung gibt es auch eine kleine Küche und ein helles Bad.\nDas ist mein Lieblingszimmer: das Wohnzimmer. Hier gibt es ein Sofa, einen Fernseher und ein Bücherregal. Das Sofa ist sehr bequem und groß. Hier lese ich gern oder ruhe mich aus.",
      questions: [
        { question: "آپارتمان این شخص در کدام شهر قرار دارد و دارای چند اتاق است؟ (همه را نام ببرید)" },
        { question: "اتاق مورد علاقه (Lieblingszimmer) او کدام است؟" },
        { question: "با قانون (gibt es) چه چیزهایی در اتاق نشیمن وجود دارد؟ (به آکوزاتیوِ تلویزیون دقت کنید)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن روتین روزمره (Mein Tagesablauf)",
      prompt: "یک داستان کوتاه از روتین یک روزِ کاریِ سخت خودتان بنویسید. باید حداقل ۵ قید زمانی (Morgens, Dann, Danach...) و افعال انعکاسی به کار ببرید.",
      steps: [
        {
          title: "بخش صبح",
          text: "با یک قید زمانی صبح شروع کنید. بگویید چه ساعتی بیدار می‌شوید و کارهای شخصی مثل شستن و لباس پوشیدن را اضافه کنید.",
          example: { de: "Am Morgen stehe ich um 7 Uhr auf. Zuerst wasche ich mich im Bad und ziehe mich an.", fa: "صبح ساعت 7 بیدار می‌شوم. اول در حمام خودم را می‌شویم و لباس می‌پوشم." }
        },
        {
          title: "بخش توالی (سپس، بعد از آن)",
          text: "مشخص کنید بعد از بیداری چه می‌کنید. از Dann و Danach استفاده کنید (حواستان به قانون جایگاه دوم فعل باشد).",
          example: { de: "Dann frühstücke ich und trinke Tee. Danach gehe ich zur Arbeit.", fa: "بعدش صبحانه می‌خورم و چای می‌نوشم. پس از آن به سمت محل کار می‌روم." }
        },
        {
          title: "بخش غروب و استراحت",
          text: "با am Abend یا später کارهای مربوط به خانه (مثل مرتب کردن، آشپزی) و استراحت کردنتان را توصیف کنید و در نهایت مشخص کنید کی می‌خوابید.",
          example: { de: "Am Abend koche ich und räume die Küche auf. Später ruhe ich mich auf dem Sofa aus und sehe fern. Schließlich gehe ich ins Bett.", fa: "غروب آشپزی کرده و آشپزخانه را مرتب می‌کنم. سپس روی مبل استراحت می‌کنم و تلویزیون می‌بینم. در نهایت به تخت خواب می‌روم." }
        }
      ]
    },
    {
      title: "توصیف اتاق محبوبِ شما",
      prompt: "می‌خواهیم یک پاراگراف کاملاً توصیفی درباره اتاق شما بنویسیم. از es gibt و صفت‌ها بهره ببرید.",
      steps: [
        {
          title: "معرفی اتاق",
          text: "اتاق را معرفی کنید و با دو صفت (مثلاً روشن، بزرگ، دنج) آن را توصیف کنید.",
          example: { de: "Das ist mein Zimmer. Es ist klein, aber sehr hell und gemütlich.", fa: "این اتاق من است. گوچک، اما بسیار روشن و دنج است." }
        },
        {
          title: "چه چیزهایی در آن وجود دارد؟ (es gibt)",
          text: "با استفاده از (In meinem Zimmer gibt es...) حداقل ۳ وسیله (مثلاً تخت، کمد، میز) را نام ببرید. حواستان به آکوزاتیو اشیای مذکر (میز و کمد) باشد!",
          example: { de: "In meinem Zimmer gibt es ein Bett, eine Lampe und einen Schrank.", fa: "در اتاق من یک تخت، یک لامپ و یک کمد (einen) وجود دارد." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. کارهای روزمره آلمانی‌ها",
      source: "Learn German - Daily Routine (Tagesablauf)",
      link: "https://www.youtube.com/watch?v=M3Bw5fBXH9c",
      instructions: "این ویدیو برای یادگیری روان‌ترین عبارات روزمره ساخته شده است.\n۱. ویدیو را تماشا کنید. هرگاه گوینده از «Zuerst» یا «Danach» استفاده کرد، توجه کنید که چگونه لحن صدایش بالا می‌رود و به فعل بعد از آن تکیه می‌کند.\n۲. 5 فعل مرتبط با زندگی خودتان (مثل Frühstück، Zähne putzen) را شکار کنید و آن‌ها را همراه با زمان (ساعت فرضی) روی کاغذ بیاورید و مرتب بخوانید."
    },
    {
      title: "۲. خانه و اسامی اتاق‌ها",
      source: "Easy German - Rooms of the house",
      link: "https://www.youtube.com/watch?v=nr15nd_ZgQc",
      instructions: "تمرین تجسم فضا:\n۱. با هندزفری، وقتی تلفظ کلماتی مثل «Badezimmer» یا «Wohnzimmer» گفته می‌شود، بلند شوید، در خانه خود قدم بزنید و با دست به سمت آن اتاق اشاره کنید و بلند نامش را فریاد بزنید!\n۲. به میز و صندلی اشاره کنید و با قانون Es gibt جملات را تکرار کنید: Hier gibt es einen Tisch."
    }
  ],

  speaking: [
    {
      title: "گزارش روزانه یک ربات!",
      pattern: "Zuerst stehe ich um [Zeit] auf... Dann... Danach... Später... Schließlich...",
      exercise: "تصور کنید یک ربات با برنامه مشخصی هستید. در اتاق قدم بزنید و بدون فکر کردن طولانی، یک زنجیره ۵ بخشی از کارهای یک روز خیالی را تعریف کنید.\nقانون بازی این است: اولین کلمه‌ی هر جمله‌ی جدید باید یک قید ترتیب (Zuerst, Dann, Danach...) باشد. اگر فعل را در جایگاه دوم نیاوردید، باید کل داستان را از اول شروع کنید!"
    },
    {
      title: "راهنمای تورِ خانه شما",
      pattern: "- Willkommen in meiner Wohnung!\n- Das ist das Wohnzimmer. Hier gibt es ein Sofa.\n- Und das ist die Küche. Sie ist klein aber sehr hell.",
      exercise: "گوشی خود را روشن کنید و در حالت فیلمبرداری (ویدیو سلفی یا رو به جلو) در خانه حرکت کنید. نقش یک آژانس املاک آلمانی را بازی کنید که خانه‌اش را پرزنت می‌کند. هر اتاق را نشان دهید (Das ist das Schlafzimmer) و بگویید در این اتاق چه چیزی وجود دارد (es gibt...) و چه صفتی دارد (gemütlich / hell)."
    }
  ],

  cultureTip: "کلمه‌ی «gemütlich» (گِ-موت-لیش) یکی از زیباترین، غیرقابل ترجمه‌ترین و مهم‌ترین کلمات در فرهنگ آلمان است. این کلمه چیزی فراتر از «راحت» است؛ بلکه به حسِ دنج بودن، صمیمیت، امنیت یک مکان (مثل یک خانه با نور ملایم و مبل نرم در زمستان) یا حتی حسِ گرمِ دورهمی با دوستان اشاره دارد. وقتی در آلمان به خانه کسی دعوت شدید و روی مبل او نشستید، کافیست بگویید: «Oh, das ist aber sehr gemütlich hier!» (اوه، اینجا واقعاً دنج و صمیمی است!) تا لبخند رضایت را بر لب میزبان بنشانید."
};
