export const day30Data = {
  title: "روز ۳۰: شبیه‌سازی کاملِ امتحان B1 و ایستگاه تفکر",
  objective: "امروز یک روز بسیار مهم است. ما تمام مهارت‌هایی که تا امروز یاد گرفته‌ایم را در یک شبیه‌سازی کامل از امتحان شفاهی B1 (بیان داستان در گذشته، دادن نظر، نگاه به آینده) ترکیب می‌کنیم. در پایان، برای مسیرمان تا سطح B2 یک برنامه‌ریزی (Rückblick & Ausblick) انجام می‌دهیم.",

  grammarData: {
    subtitle: "ترکیب زمان‌ها (Perfekt, Präsens, Futur) و استفاده از Redemittel.",
    content: [
      {
        type: "text",
        title: "۱. کلماتِ نجات‌بخش (Redemittel) در مکالمه",
        text: "در سطح B1 از شما انتظار نمی‌رود که مثل یک ربات بدون مکث حرف بزنید. آلمانی‌ها خودشان هم هنگام فکر کردن مکث می‌کنند، اما به جای «اِممم...»، از کلماتِ پُرکننده (Füllwörter) و عبارات ثابت (Redemittel) استفاده می‌کنند تا طبیعی‌تر به نظر برسند."
      },
      {
        type: "table",
        title: "عبارات طلایی برای خریدنِ زمان",
        rows: [
          { de: "Ehrlich gesagt...", fa: "صادقانه بگویم..." },
          { de: "Lass mich kurz nachdenken.", fa: "بگذار کوتاه فکر کنم." },
          { de: "Wie soll ich sagen...", fa: "چطور بگویم..." },
          { de: "Das ist eine gute Frage.", fa: "این یک سوال خوب است." },
          { de: "Meiner Meinung nach...", fa: "به عقیده من..." }
        ]
      },
      {
        type: "text",
        title: "۲. سفر در زمان (Zeitformen mixen)",
        text: "یک داستانِ سطح B1 عالی، داستانی است که در آن گوینده به راحتی در زمان‌ها حرکت کند. ابتدا گذشته (Perfekt) را می‌گوید، سپس نظرش در زمان حال (Präsens) را بیان می‌کند و در نهایت برنامه‌اش برای آینده (Futur I یا Präsens) را می‌گوید."
      },
      {
        type: "examples",
        title: "مثالِ یک روایت ترکیبی (B1)",
        items: [
          { de: "Gestern [Vergangenheit]: Letzten Sommer bin ich nach Berlin gefahren. Das Wetter war toll und ich habe viele Museen besucht.", fa: "دیروز [گذشته]: تابستان گذشته من به برلین سفر کردم. هوا عالی بود و موزه‌های زیادی را دیدم. (استفاده از Perfekt و Präteritum برای war)." },
          { de: "Heute [Gegenwart]: Ehrlich gesagt, finde ich Berlin sehr interessant, weil es so multikulturell ist.", fa: "امروز [حال]: صادقانه بگویم، من برلین را بسیار جالب می‌یابم، چون آنقدر چندفرهنگی است. (استفاده از Redemittel + weil)." },
          { de: "Morgen [Zukunft]: Nächstes Jahr werde ich wieder nach Deutschland reisen, um München zu sehen.", fa: "فردا [آینده]: سال آینده من دوباره به آلمان سفر خواهم کرد (Futur I)، تا مونیخ را ببینم (um...zu)." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون درک مطلب: شبیه‌سازی مکالمه",
        questions: [
          {
            question: "ارزیاب از شما می‌پرسد: «کدام شهر در آلمان را بیشتر دوست دارید؟» شما فوراً جواب را نمی‌دانید. بهترین واکنش چیست؟",
            questionDe: "Wie reagieren Sie spontan?",
            options: [
              { text: "(شما ۱۰ ثانیه در سکوت فکر می‌کنید)", isCorrect: false },
              { text: "Ich weiß nicht.", isCorrect: false },
              { text: "Das ist eine gute Frage. Lass mich kurz nachdenken... Ich glaube, Hamburg ist sehr schön.", isCorrect: true }
            ],
            explanation: "آفرین! استفاده از «Das ist eine gute Frage» به شما زمان می‌دهد تا فکر کنید و این کار در امتحان نه تنها نمره منفی ندارد، بلکه نشان‌دهنده تسلط شما بر عبارات روزمره است."
          },
          {
            question: "شما می‌خواهید نظر کلی خود را درباره یک تجربه (مثلاً یک سفر) با استفاده از یک کلمه دوقلو بیان کنید. کدام جمله زیباتر است؟",
            questionDe: "Welcher Satz klingt wie echtes B1?",
            options: [
              { text: "Die Reise war nicht nur günstig, sondern auch sehr spannend.", isCorrect: true },
              { text: "Die Reise war günstig und die Reise war spannend.", isCorrect: false },
              { text: "Die Reise war günstig. Aber spannend.", isCorrect: false }
            ],
            explanation: "دقیقاً! ساختار nicht nur... sondern auch (نه تنها... بلکه) جمله شما را بسیار سطح بالا (B1/B2) نشان می‌دهد."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "ارزیابی و بازتاب (Rückblick & Ausblick)",
        words: [
          {
            de: "der Rückblick",
            fa: "نگاه به گذشته / مرور",
            article: "der",
            plural: "die Rückblicke",
            examples: [
              { de: "Wenn ich einen Rückblick mache, habe ich viel gelernt.", fa: "وقتی من یک نگاه به گذشته (مرور) می‌کنم، خیلی چیزها یاد گرفته‌ام." }
            ]
          },
          {
            de: "der Ausblick",
            fa: "چشم‌انداز / نگاه به آینده",
            article: "der",
            plural: "die Ausblicke",
            examples: [
              { de: "Der Ausblick für das nächste Jahr ist sehr positiv.", fa: "چشم‌انداز برای سال آینده بسیار مثبت است." }
            ]
          },
          {
            de: "stolz auf (+ Akk)",
            fa: "مفتخر به / افتخار کردن به",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich bin stolz auf meinen Fortschritt im Deutschen.", fa: "من به پیشرفتم در آلمانی افتخار می‌کنم." }
            ]
          },
          {
            de: "das Ziel erreichen",
            fa: "به هدف رسیدن",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich arbeite hart, um mein Ziel zu erreichen.", fa: "من سخت کار می‌کنم تا به هدفم برسم (ترکیب با um...zu)." }
            ]
          }
        ]
      },
      {
        title: "کلمات پُرکننده مکالمه (Füllwörter)",
        words: [
          {
            de: "ehrlich gesagt",
            fa: "صادقانه بگویم",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ehrlich gesagt, habe ich heute keine Lust auf Sport.", fa: "صادقانه بگویم، امروز حوصله ورزش را ندارم. (فعل habe بلافاصله بعد از کاما)." }
            ]
          },
          {
            de: "übrigens",
            fa: "راستی / ضمناً",
            article: "-",
            plural: "-",
            examples: [
              { de: "Übrigens, hast du den neuen Film schon gesehen?", fa: "راستی، آیا فیلم جدید را دیده‌ای؟" }
            ]
          },
          {
            de: "auf jeden Fall",
            fa: "در هر صورت / حتماً",
            article: "-",
            plural: "-",
            examples: [
              { de: "Ich werde dich auf jeden Fall anrufen.", fa: "من حتماً (در هر صورت) به تو زنگ خواهم زد." }
            ]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Mein Rückblick auf die letzten 30 Tage\n\nHallo! Ich lerne jetzt seit einem Monat sehr intensiv Deutsch. Wenn ich einen Rückblick mache, bin ich sehr stolz auf mich. Am Anfang war es schwierig, die Konnektoren richtig zu benutzen. Aber gestern habe ich einen langen Text geschrieben und sowohl 'obwohl' als auch 'deshalb' benutzt! Das war ein tolles Gefühl.\nEhrlich gesagt, ist das Sprechen manchmal noch ein bisschen anstrengend für mich. Wenn ich nervös bin, vergesse ich die Wörter. Trotzdem versuche ich jeden Tag, laut zu lesen, um meine Aussprache zu verbessern.\nFür die Zukunft habe ich einen klaren Ausblick: Ich werde im nächsten Jahr die B1-Prüfung machen. Deshalb muss ich jeden Tag fleißig lernen, damit mein Traum wahr wird.",
      questions: [
        { question: "نویسنده وقتی به گذشته (Rückblick) نگاه می‌کند چه احساسی دارد؟" },
        { question: "او در ابتدا با چه چیزی مشکل داشت؟ (کلمات ربط)" },
        { question: "چرا او هر روز با صدای بلند می‌خواند؟ (با استفاده از um...zu جواب دهید)" },
        { question: "چرا او باید سخت درس بخواند؟ (با استفاده از damit جواب دهید)" }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن یک ارزیابی شخصی (Rückblick)",
      prompt: "دقیقاً مانند متن Reading، یک متن کوتاه (۶-۷ خط) درباره پیشرفت زبان آلمانی خود بنویسید. از کلمات Rückblick, Ausblick, ehrlich gesagt و کنکتورهای دوقلو استفاده کنید.",
      steps: [
        {
          title: "ارزیابی گذشته (Rückblick)",
          text: "توضیح دهید قبلاً چه چیزی سخت بود و الان چطور است.",
          example: { de: "Wenn ich einen Rückblick mache, sehe ich, dass ich viel gelernt habe. Früher war die Grammatik schwer.", fa: "وقتی مروری به گذشته می‌کنم، می‌بینم که خیلی یاد گرفته‌ام. قبلاً گرامر سخت بود." }
        },
        {
          title: "بیان صادقانه وضعیت حال (Gegenwart)",
          text: "از ehrlich gesagt استفاده کنید.",
          example: { de: "Ehrlich gesagt, spreche ich noch nicht perfekt, aber ich übe jeden Tag.", fa: "صادقانه بگویم، هنوز بی‌نقص صحبت نمی‌کنم، اما هر روز تمرین می‌کنیم." }
        },
        {
          title: "چشم‌انداز آینده (Ausblick)",
          text: "از ساختار werden (Futur I) یا um...zu برای بیان هدف آینده استفاده کنید.",
          example: { de: "Mein Ausblick ist positiv: Ich werde weiterlernen, um B2 zu erreichen.", fa: "چشم‌انداز من مثبت است: من به یادگیری ادامه خواهم داد تا به B2 برسم." }
        }
      ]
    }
  ],

  listening: [
    {
      title: "۱. شبیه‌سازی مکالمات واقعی",
      source: "Real Conversations (Podcast style)",
      link: "https://www.youtube.com/watch?v=rKhZjWs8MYQ",
      instructions: "تمرین تشخیص Redemittel:\nیک پادکست سطح B1 را پلی کنید. یک خودکار و کاغذ بردارید. هر بار که گوینده از کلماتی مثل (Ehrlich gesagt / Weißt du... / Naja... / Also) استفاده کرد، روی کاغذ یک تیک بزنید. می‌بینید که این کلمات چقدر در زبان گفتاری تکرار می‌شوند!"
    },
    {
      title: "۲. ویدیوهای جمع‌بندی سطح B1",
      source: "B1 Exam Preparation",
      link: "https://deutsch.now/en/blog/7-most-common-b1-german-speaking-test-questions-explained",
      instructions: "تمرین تقلید لحن مطمئن:\nدر امتحان، لحن و اعتماد به نفس مهم است. وقتی به نمونه سوالات جواب می‌دهید، صدای خود را ضبط کنید و چک کنید آیا لحن شما روان است یا خیلی با ترس و لرز صحبت می‌کنید."
    }
  ],

  speaking: [
    {
      title: "داستان یک سفر (شبیه‌سازی کارت B1)",
      pattern: "Letzten Sommer... Das fand ich interessant, weil... Nächstes Jahr werde ich...",
      exercise: "شبیه‌سازی کامل یک سوال امتحان (Erzählen Sie von einer Reise):\nسه دقیقه بی‌وقفه صحبت کنید.\n۱. کجا رفتید و با کی؟ (Perfekt)\n۲. چه کار کردید؟ (Perfekt)\n۳. آیا پیشنهاد می‌کنید؟ (Präsens)\n۴. مقصد بعدی شما کجاست؟ (Futur I)"
    },
    {
      title: "ایستگاه تفکر: بیانیه ۳۰ روزه شما",
      pattern: "Am Anfang... Jetzt... Mein Ziel ist...",
      exercise: "در این لحظه شما ۳۰ روز محتوای فشرده (معادل ۱۲۰ روز محتوای قبلی و تمام کلاس‌های A1 و A2 و ورود به B1) را پشت سر گذاشته‌اید. به زبان آلمانی (و جلوی دوربین موبایل) یک ویدیو ۲ دقیقه‌ای برای خودتان ضبط کنید و احساس خود را از این پیشرفت بگویید."
    }
  ],

  cultureTip: "فرهنگ بازخورد دادن (Feedbackkultur) در آلمان: در آلمان بسیار معمول است که بعد از اتمام یک پروژه (या یک دوره کلاسی)، جلسه‌ای به نام Feedbackrunde برگزار شود. در این جلسه همه با استفاده از عباراتی مثل (Ehrlich gesagt / Meiner Meinung nach) نقاط قوت و ضعف را صادقانه بیان می‌کنند. توانایی ارزیابی خود و دیگران (Reflexion) یک مهارت کلیدی در فرهنگ کاری و آموزشی آلمانی است. پس به ارزیابی امروزِ خود افتخار کنید!"
};
