export const day4Data = {
  title: "روز ۴: گفتن ساعت، مکان‌ها و افعال جداشدنی",
  objective: "در این روز یکی از جذاب‌ترین و مهم‌ترین قواعد زبان آلمانی یعنی «افعال جداشدنی (Trennbare Verben)» را یاد می‌گیریم. علاوه بر این خواندن ساعت‌ها و رفت و آمد در مکان‌های شهر را مسلط خواهیم شد.",

  grammarData: {
    subtitle: "این درس شامل خواندن ساعت کامل و نیم‌ساعت، مکان‌های شهر و مبحث جذاب افعال جداشدنی است.",
    content: [
      {
        type: "text",
        title: "۱. ساعت چنده؟ (Wie spät ist es?)",
        text: "برای پرسیدن ساعت به آلمانی معمولاً می‌گوییم: Wie spät ist es? (چقدر دیر است؟)\nبرای جواب دادن از ضمیر خنثی «es» استفاده می‌کنیم: Es ist ... Uhr (ساعت ... است)."
      },
      {
        type: "table",
        title: "خواندن ساعت کامل و نیم",
        rows: [
          { de: "Es ist eins / ein Uhr.", fa: "ساعت یک است. (1:00)" },
          { de: "Es ist halb drei.", fa: "ساعت دو و نیم است. (2:30)" },
          { de: "Es ist Viertel nach zwei.", fa: "ساعت دو و ربع است. (2:15 - ربع بعد از 2)" },
          { de: "Es ist Viertel vor acht.", fa: "ساعت یک ربع به هشت است. (7:45 - ربع مانده به 8)" }
        ]
      },
      {
        type: "alert",
        title: "خطر! قانونی عجیب در نیم‌ساعت‌ها",
        text: "آلمانی‌ها نیم‌ساعت‌ها را همیشه به عنوان «نیم‌مقدار از ساعت بعدی» می‌خوانند. یعنی برای ۲:۳۰ می‌گویند halb drei (نیم‌ساعت تا ساعت سه!) و برای ۷:۳۰ می‌گویند halb acht."
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: ساعت",
        questions: [
          {
            question: "ساعت ۵:۳۰ به زبان آلمانی محاوره چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 5:30 auf Deutsch?",
            options: [
              { text: "Es ist halb fünf.", isCorrect: false },
              { text: "Es ist halb sechs.", isCorrect: true },
              { text: "Es ist fünf halb.", isCorrect: false }
            ],
            explanation: "بسیار عالی! در زبان آلمانی «نیم‌ساعت» یعنی نگاه کردن به ساعت بعدی. 5:30 نصف راه تا 6 است، پس می‌شود halb sechs."
          }
        ]
      },
      {
        type: "text",
        title: "۲. مکان‌های شهر (Orte in der Stadt)",
        text: "برای اینکه بگوییم به مکانی می‌رویم یا در آنجا هستیم، از حروف اضافه خاصی استفاده می‌کنیم.\nبرای الآن فقط این سه فرمول پرکاربرد را حفظ کنید:\n- من در یک فضای بسته هستم: Ich bin im ... / in der ... (مثل im Supermarkt, in der Bank)\n- من دارم وارد فضایی می‌شوم (حرکت): Ich gehe in den Supermarkt / in die Bank\n- من به ساختمان یا موسسه‌ای می‌روم: Ich gehe zur Bank / zur Post / zum Arzt"
      },
      {
        type: "examples",
        title: "بودن یا رفتن!",
        items: [
          { de: "Ich bin zu Hause.", fa: "من در خانه هستم. (zu Hause یک استثناست، به معنی در خانه)" },
          { de: "Ich gehe nach Hause.", fa: "من به خانه می‌روم. (یک استثنای دیگر!)" },
          { de: "Ich gehe in die Stadt.", fa: "من به مرکز شهر/شهر می‌روم." }
        ]
      },
      {
        type: "text",
        title: "۳. افعال جداشدنی (Trennbare Verben)",
        text: "رسیدیم به یکی از معروف‌ترین قواعد آلمانی! بعضی از افعال در زبان آلمانی یک «پیشوند» (Präfix) مشخص دارند مثل auf- یا ein-.\nوقتی می‌خواهید با این افعال جمله بسازید، فعل می‌شکند! ریشه فعل در جایگاه دوم جمله قرار می‌گیرد تا صرف شود، و آن پیشوند جادویی شلیک می‌شود به آخرین کلمه جمله!"
      },
      {
        type: "table",
        title: "۳ فعل جداشدنی طلايي برای روتین रोजمره",
        rows: [
          { de: "aufstehen", fa: "بیدار شدن / بلند شدن (auf + stehen)" },
          { de: "einkaufen", fa: "خرید کردن (ein + kaufen)" },
          { de: "fernsehen", fa: "تلویزیون دیدن (fern + sehen)" }
        ]
      },
      {
        type: "examples",
        title: "انفجار افعال در جمله!",
        items: [
          { de: "Ich stehe jeden Tag um 7 Uhr auf.", fa: "من هر روز ساعت 7 بیدار می‌شوم. (stehen صرف شد، auf آخر رفت)" },
          { de: "Wir kaufen am Samstag im Supermarkt ein.", fa: "ما روز شنبه در سوپرمارکت خرید می‌کنیم. (kaufen صرف شد، ein آخر رفت)" },
          { de: "Siehst du am Abend fern?", fa: "آیا عصر تلویزیون تماشا می‌کنی؟ (sehen صرف شد و در سوال بله/خیر جایگاه 1 آمد، fern آخر رفت)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون گرامر افعال جداشدنی",
        questions: [
          {
            question: "می‌دانیم (anrufen) به معنای زنگ زدن یک فعل جداشدنی است. اگر بخواهیم بگوییم «من امروز به مادرم زنگ می‌زنم» (Ich + heute + meine Mutter + anrufen)، شکل صحیح کدام است؟",
            questionDe: "Welcher Satz ist grammatikalisch 100% richtig?",
            options: [
              { text: "Ich anrufe heute meine Mutter.", isCorrect: false },
              { text: "Ich rufe heute meine Mutter an.", isCorrect: true },
              { text: "Ich rufe an heute meine Mutter.", isCorrect: false }
            ],
            explanation: "آفرین! فعل rufe صرف شد و جایگاه ۲ نشست. پیشوند an کاملاً به آخر جمله پرتاب شد."
          }
        ]
      },
      {
        type: "text",
        title: "۴. ترکیب همه چیز: فعل جداشدنی + فعل کمکی",
        text: "اگر در یک جمله هم فعل کمکی (مثل können/müssen) داشته باشیم و هم فعل جداشدنی چطور؟\nقانون افعال کمکی را به یاد دارید؟ آنها فعل اصلی را (به صورت خام) به آخر جمله پرت می‌کنند.\nاتفاقی که می‌افتد این است: فعل جداشدنی دوباره به هم می‌چسبد!! چون باید خام در انتهای جمله بماند."
      },
      {
        type: "examples",
        title: "افعال جداشدنی در کنار können/müssen",
        items: [
          { de: "Ich muss morgen früh aufstehen.", fa: "من فردا صبح باید بلند شوم. (muss در جایگاه 2، فعل aufstehen بصورت مصدر و کامل چسبیده به هم در آخر)" },
          { de: "Wir können heute nicht fernsehen.", fa: "ما امروز نمی‌توانیم تلویزیون ببینیم." }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "ساعت و زمان (Wann?)",
        words: [
          {
            de: "Uhr",
            fa: "ساعت (برای گفتن زمان)",
            article: "die",
            plural: "-",
            examples: [
              { de: "Es ist zwei Uhr.", fa: "ساعت دو است." }
            ]
          },
          {
            de: "halb",
            fa: "نیم",
            article: "-",
            plural: "-",
            examples: [
              { de: "Es ist halb acht (7:30).", fa: "ساعت هفت و نیم است." }
            ]
          },
          {
            de: "am Morgen",
            fa: "صبح‌ها / در صبح",
            article: "-",
            plural: "-",
            examples: [
              { de: "Am Morgen trinke ich Kaffee.", fa: "صبح‌ها قهوه می‌نوشم." }
            ]
          },
          {
            de: "am Abend",
            fa: "عصرها / غروب‌ها",
            article: "-",
            plural: "-",
            examples: [
              { de: "Am Abend sehe ich fern.", fa: "عصرها تلویزیون تماشا می‌کنم." }
            ]
          },
          {
            de: "pünktlich",
            fa: "سروقت / وقت‌شناس",
            article: "-",
            plural: "-",
            examples: [
              { de: "Bitte sei pünktlich!", fa: "لطفاً سر وقت باش!" }
            ]
          }
        ]
      },
      {
        title: "مکان‌های شهر (Orte)",
        words: [
          {
            de: "Supermarkt",
            fa: "سوپرمارکت",
            article: "der",
            plural: "die Supermärkte",
            examples: [
              { de: "Ich gehe in den Supermarkt.", fa: "من به سوپرمارکت می‌روم." }
            ]
          },
          {
            de: "Bank",
            fa: "بانک",
            article: "die",
            plural: "die Banken",
            examples: [
              { de: "Frau Müller geht zur Bank.", fa: "خانم مولر به بانک می‌رود." }
            ]
          },
          {
            de: "Post",
            fa: "اداره پست",
            article: "die",
            plural: "-",
            examples: [
              { de: "Ich muss heute zur Post gehen.", fa: "من امروز باید به اداره پست بروم." }
            ]
          },
          {
            de: "Kino",
            fa: "سینما",
            article: "das",
            plural: "die Kinos",
            examples: [
              { de: "Gehen wir ins Kino?", fa: "می‌رویم سینما؟" }
            ]
          },
          {
            de: "Bahnhof",
            fa: "ایستگاه قطار",
            article: "der",
            plural: "die Bahnhöfe",
            examples: [
              { de: "Ich bin am Bahnhof.", fa: "من در ایستگاه قطار هستم." }
            ]
          }
        ]
      },
      {
        title: "افعال جداشدنی پرکاربرد (Trennbare Verben)",
        words: [
          {
            de: "aufstehen",
            fa: "از خواب بلند شدن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wann stehst du auf?", fa: "کی از خواب بیدار می‌شوی؟" }
            ]
          },
          {
            de: "einkaufen",
            fa: "خرید کردن (مایحتاج روزمره)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Wir kaufen jeden Samstag ein.", fa: "ما هر شنبه خرید می‌کنیم." }
            ]
          },
          {
            de: "anrufen",
            fa: "تماس گرفتن (تلفنی)",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich rufe dich am Abend an.", fa: "من غروب به تو زنگ می‌زنم." }
            ]
          },
          {
            de: "fernsehen",
            fa: "تلویزیون دیدن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Er sieht gern fern.", fa: "او به تلوزیون دیدن علاقه دارد. (توجه: فعل sehen خود بی‌قاعده است و e به ie تبدیل می‌شود)" }
            ]
          },
          {
            de: "mitkommen",
            fa: "همراهِ کسی آمدن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich gehe ins Kino. Kommst du mit?", fa: "من به سینما می‌روم. با من می‌آیی؟" }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Mein typischer Dienstag\n\nHallo. Ich bin Claudia und das ist mein typischer Tag. Morgens stehe ich um halb sieben auf (6:30 Uhr). Dann trinke ich Kaffee und arbeite von acht bis vierzehn Uhr. Am Nachmittag gehe ich in die Stadt. Zuerst gehe ich zur Post, und dann kaufe ich im Supermarkt ein.\nHeute Abend habe ich Freizeit. Um Viertel nach acht (20:15) fängt ein guter Film an. Ich sehe gern fern. Am Wochenende muss ich nicht früh aufstehen. Da schlafe ich bis neun Uhr!",
      questions: [
        { question: "کلودیا چه ساعتی بلند می‌شود؟ ساعت را هم به عدد بنویسید (مثال 7:30)." },
        { question: "او بعد از کار (بعدازظهر) چه مسیرهایی را دنبال می‌کند؟ به كدام ساختمان‌ها می‌رود؟" },
        { question: "چه ساعتی فیلم شروع می‌شود؟ ساعت را بازنویسی کنید." },
        { question: "چرا او آخر هفته‌ها زود بیدار نمی‌شود؟ (متن آلمانی را پیدا کنید)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن روتین روزانه و مسیرها (Tagesablauf)",
      prompt: "حالا نوبت شماست که روزمرگی‌های خود را شرح دهید. جملاتی درباره ساعتی که بیدار می‌شوید، کارهایی که در شهر انجام می‌دهید، و برنامه‌های عصرهایتان بنویسید.",
      steps: [
        {
          title: "بیداری و زمان",
          text: "با یک فعل جداشدنی (aufstehen) و ساعت بیداری خودت شروع کن. یادت باشد پیشوند auf در آخر جمله قرار بگیرد.",
          example: { de: "Ich stehe jeden Tag um sieben Uhr auf.", fa: "من هر روز ساعت 7 بلند می‌شوم." }
        },
        {
          title: "انجام کارها در شهر",
          text: "یک جمله بنویس که بعدازظهر (Am Nachmittag) باید به کدام مکان در شهر بروی (مثلا zur Bank یا in den Supermarkt) و می‌خواهی آنجا چه کنی (از einkaufen استفاده کن).",
          example: { de: "Am Nachmittag gehe ich in den Supermarkt und kaufe ein.", fa: "عصر می‌روم به سوپرمارکت و خرید می‌کنم." }
        },
        {
          title: "استراحت شبانه",
          text: "از فعل fernsehen استفاده کن و بگو که شب (am Abend) مشغول دیدن تلویزیون می‌شوی.",
          example: { de: "Am Abend sehe ich gern fern. Dann schlafe ich.", fa: "شبها دوست دارم تلویزیون ببینم. سپس می‌خوابم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. افعال جداشدنی درعمل!",
      source: "Easy German - Tagesablauf (Trennbare Verben)",
      link: "https://www.youtube.com/watch?v=YwRv9SQNi3c",
      instructions: "این ویدیو شاهکار درک افعال جداشدنی است. \n۱. خوب گوش دهید که گوینده چگونه بین ریشه فعل و پیشوندِ جداشدە در انتهای جمله، با صدایش فاصله و تکیه ایجاد می‌کند. \n۲. هر بار که کلماتی مثل aufstehen، einkaufen یا fernsehen در ویدیو آمد، جمله را پاز کنید و 3 بار با صدای بلند تقلید کنید."
    },
    {
      title: "۲. ساعت دقیق به آلمانی",
      source: "A1 German Learn Uhrzeit",
      link: "https://www.youtube.com/watch?v=rosbsSh0Kqk",
      instructions: "مبحث halb (نیم‌ساعت‌ها) می‌تواند بسیار گیج‌کننده باشد. \n۱. وقتی ویدیو به بخش halb رسید، چشمان خود را ببندید و یک ساعت دیواری را تصور کنید. وقتی گوینده می‌گوید halb drei، در ذهنتان 2:30 را نقاشی کنید. \n۲. در انتهای ویدیو، با نگاه به ساعت دیواری اتاق خودتان، زمان حالتی فعلی را با صدای بلند به آلمانی بیان کنید."
    }
  ],

  speaking: [
    {
      title: "شرح برنامه کاری با افعال جداشدنی",
      pattern: "- Um wie viel Uhr stehst du auf?\n- Ich stehe um halb acht auf.\n- Was machst du am Nachmittag?\n- Ich gehe zur Bank und kaufe im Supermarkt ein.",
      exercise: "شرح روتین یکی از بهترین راه‌ها برای روانی کلام است. جلوی آینه یک برنامه فرضی برای جمعه خودتان تعیین کنید. گام به گام بلند بگوئید صبح کی بلند می‌شوید (aufstehen)، چه می‌خورید، کِی سر کار می‌روید، کِی و كجا خرید می‌کنید (einkaufen) و شب کِی به کسی زنگ می‌زنید (anrufen) یا تلویزیون می‌بینید (fernsehen)."
    },
    {
      title: "دعوت به سینما با (mitkommen)",
      pattern: "- Hallo! Ich gehe heute Abend ins Kino. Kommst du mit?\n- Ja, sehr gern! Wann fängt der Film an?\n- Um Viertel nach acht.",
      exercise: "تصور کنید در واتس‌اپ برای دوست آلمانی‌تان ویس می‌گذارید. این دیالوگ دو نفره را کامل با احساس بازی کنید. از فعل جذاب mitkommen (همراه آمدن) استفاده کنید و از او برای رفتن به Supermarkt یا Kino دعوت کنید."
    }
  ],

  cultureTip: "مفهوم «Pünktlichkeit» یا وقت‌شناسی در آلمان یه شوخی یا تعارف نیست، یک خط قرمز جدی است! وقتی یک آلمانی ساعت 8:00 با شما قرار می‌گذارد، انتظار دارد 7:55 آنجا باشید. اگر ساعت 8:05 برسید، شما «تاخیر» داشته‌اید. در محیط کار این قانون سفت و سخت‌تر هم هست. پس یاد گرفتن Uhrzeit برای زندگی در کشورهای آلمانی‌زبان، اولین کلید بقا است!"
};
