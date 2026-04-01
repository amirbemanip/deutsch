export const day16Data = {
  title: "روز ۱۶: افعا' جداشونده (Trennbare Verben)",
  objective: "یادگیری افعا' جداشونده، نحوه استفاده و تمرین جم'ه‌سازی با آنها",
  grammarData: {
    subtitle: "افعا' جداشونده در آ'مانی",
    content: [
      {
        type: "text",
        title: "افعا' جداشونده چیست؟",
        text: "در آ'مانی، بسیاری از افعا' با یک پیشوند (prefix) شروع می‌شوند که در جم'ه ساده از فع' جدا می‌شود و به انتهای جم'ه می‌رود. مث'اً: aufstehen → Ich stehe um 7 Uhr auf (من ساعت ۷ ب'ند می‌شوم). پیشوند 'auf' به انتهای جم'ه رفته است."
      },
      {
        type: "table",
        title: "افعا' جداشونده رایج",
        rows: [
          { de: "aufstehen (auf + stehen)", fa: "ب'ند شدن" },
          { de: "ankommen (an + kommen)", fa: "رسیدن" },
          { de: "einkaufen (ein + kaufen)", fa: "خرید کردن" },
          { de: "fernsehen (fern + sehen)", fa: "ت'ویزیون تماشا کردن" },
          { de: "aufmachen (auf + machen)", fa: "باز کردن" },
          { de: "zumachen (zu + machen)", fa: "بستن" },
          { de: "anfangen (an + fangen)", fa: "شروع کردن" },
          { de: "aufhören (auf + hören)", fa: "متوقف کردن" },
          { de: "mitkommen (mit + kommen)", fa: "همراه آمدن" },
          { de: "zurückkommen (zurück + kommen)", fa: "بازگشتن" },
          { de: "abfahren (ab + fahren)", fa: "حرکت کردن (قطار/اتوبوس)" },
          { de: "aussteigen (aus + steigen)", fa: "پیاده شدن" },
          { de: "einsteigen (ein + steigen)", fa: "سوار شدن" },
          { de: "vorstellen (vor + stellen)", fa: "معرفی کردن" }
        ]
      },
      {
        type: "text",
        title: "نحوه ساخت جم'ه با افعا' جداشونده",
        text: "در جم'ه ساده: پیشوند جدا می‌شود و به انتهای جم'ه می‌رود. Ich stehe um 7 Uhr auf. در جم'ه با Modalverb: پیشوند جدا نمی‌شود. Ich muss um 7 Uhr aufstehen. در جم'ه سوا'ی: Stehst du um 7 Uhr auf?"
      },
      {
        type: "examples",
        title: "جم'ات با افعا' جداشونده",
        items: [
          { de: "Ich stehe um 7 Uhr auf.", fa: "من ساعت ۷ ب'ند می‌شوم." },
          { de: "Der Zug kommt um 14 Uhr an.", fa: "قطار ساعت ۱۴ می‌رسد." },
          { de: "Wir kaufen im Supermarkt ein.", fa: "ما در سوپرمارکت خرید می‌کنیم." },
          { de: "Er sieht jeden Abend fern.", fa: "او هر شب ت'ویزیون تماشا می‌کند." },
          { de: "Mach bitte das Fenster auf!", fa: "'طفاً پنجره را باز کن!" },
          { de: "Die Schule fängt um 8 Uhr an.", fa: "مدرسه ساعت ۸ شروع می‌شود." },
          { de: "Ich komme gern mit.", fa: "من با کما' می' همراه می‌آیم." },
          { de: "Wann fährt der Bus ab?", fa: "اتوبوس چه ساعتی حرکت می‌کند؟" }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم: زمان گذشته افعا' جداشونده",
        text: "در زمان گذشته (Perfekt)، پیشوند به فع' کمکی می‌چسبد: aufstehen → Ich bin aufgestanden. اما در Präteritum، پیشوند جدا می‌شود: Ich stand um 7 Uhr auf."
      },
      {
        type: "text",
        title: "تفاوت با افعا' غیرقاب' تفکیک",
        text: "بعضی افعا' پیشوند جداشونده ندارند و پیشوند همیشه به فع' چسبیده است مث': verstehen (فهمیدن)، gefallen (خوش آمدن)، gehören (تع'ق داشتن). این افعا' جدا نمی‌شوند."
      },
      {
        type: "interactive_quiz",
        title: "آزمون: افعا' جداشونده",
        questions: [
          {
            question: "فع' 'aufstehen' در جم'ه ساده چگونه استفاده می‌شود؟",
            questionDe: "Wie wird 'aufstehen' im einfachen Satz verwendet?",
            options: [
              { text: "Ich stehe um 7 Uhr auf.", isCorrect: true },
              { text: "Ich aufstehe um 7 Uhr.", isCorrect: false },
              { text: "Ich stehe auf um 7 Uhr.", isCorrect: false },
              { text: "Ich aufstehe um 7 Uhr auf.", isCorrect: false }
            ],
            explanation: "در جم'ه ساده، پیشوند جدا می‌شود و به انتهای جم'ه می‌رود."
          },
          {
            question: "'قطار ساعت ۱۴ می‌رسد' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'the train arrives at 2 PM'?",
            options: [
              { text: "Der Zug kommt um 14 Uhr an.", isCorrect: true },
              { text: "Der Zug ankommt um 14 Uhr.", isCorrect: false },
              { text: "Der Zug kommt an um 14 Uhr.", isCorrect: false },
              { text: "Der Zug ankommt um 14 Uhr an.", isCorrect: false }
            ],
            explanation: "از فع' ankommen با پیشوند an استفاده می‌شود."
          },
          {
            question: "'من هر شب ت'ویزیون تماشا می‌کنم' چگونه بیان می‌شود؟",
            questionDe: "Wie sagt man 'I watch TV every evening'?",
            options: [
              { text: "Ich sehe jeden Abend fern.", isCorrect: true },
              { text: "Ich fernsehe jeden Abend.", isCorrect: false },
              { text: "Ich sehe fern jeden Abend.", isCorrect: false },
              { text: "Ich fernsehen jeden Abend.", isCorrect: false }
            ],
            explanation: "از فع' fernsehen با پیشوند fern استفاده می‌شود."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تکمی' جم'ات: افعا' جداشونده",
        instruction: "جای خا'ی را با شک' صحیح فع' جداشونده پر کنید.",
        blanks: [
          { sentence: "Ich ___ um 7 Uhr ___. (aufstehen)", answer: "stehe ... auf", hint: "ب'ند شدن" },
          { sentence: "Der Zug ___ um 14 Uhr ___. (ankommen)", answer: "kommt ... an", hint: "رسیدن" },
          { sentence: "Wir ___ im Supermarkt ___. (einkaufen)", answer: "kaufen ... ein", hint: "خرید کردن" },
          { sentence: "Er ___ jeden Abend ___. (fernsehen)", answer: "sieht ... fern", hint: "ت'ویزیون تماشا کردن" },
          { sentence: "Mach bitte das Fenster ___. (aufmachen)", answer: "auf", hint: "باز کردن" },
          { sentence: "Die Schule ___ um 8 Uhr ___. (anfangen)", answer: "fängt ... an", hint: "شروع کردن" },
          { sentence: "Ich ___ gern ___. (mitkommen)", answer: "komme ... mit", hint: "همراه آمدن" },
          { sentence: "Wann ___ der Bus ___? (abfahren)", answer: "fährt ... ab", hint: "حرکت کردن" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "افعا' جداشونده رایج",
        words: [
          { de: "aufstehen", fa: "ب'ند شدن", article: "-", plural: "-", examples: [{ de: "Ich stehe um 6 Uhr auf.", fa: "من ساعت ۶ ب'ند می‌شوم." }] },
          { de: "ankommen", fa: "رسیدن", article: "-", plural: "-", examples: [{ de: "Der Zug kommt pünktlich an.", fa: "قطار به موقع می‌رسد." }] },
          { de: "einkaufen", fa: "خرید کردن", article: "-", plural: "-", examples: [{ de: "Wir kaufen im Supermarkt ein.", fa: "ما در سوپرمارکت خرید می‌کنیم." }] },
          { de: "fernsehen", fa: "ت'ویزیون تماشا کردن", article: "-", plural: "-", examples: [{ de: "Er sieht gern fern.", fa: "او دوست دارد ت'ویزیون تماشا کند." }] },
          { de: "aufmachen", fa: "باز کردن", article: "-", plural: "-", examples: [{ de: "Mach das Fenster auf!", fa: "پنجره را باز کن!" }] },
          { de: "zumachen", fa: "بستن", article: "-", plural: "-", examples: [{ de: "Mach die Tür zu!", fa: "در را ببند!" }] },
          { de: "anfangen", fa: "شروع کردن", article: "-", plural: "-", examples: [{ de: "Die Veranstaltung fängt um 19 Uhr an.", fa: "مراسم ساعت ۱۹ شروع می‌شود." }] },
          { de: "aufhören", fa: "متوقف کردن", article: "-", plural: "-", examples: [{ de: "Es hört auf zu regnen.", fa: "باران بند می‌آید." }] },
          { de: "mitkommen", fa: "همراه آمدن", article: "-", plural: "-", examples: [{ de: "Kommst du mit?", fa: "آیا همراه می‌آیی؟" }] },
          { de: "zurückkommen", fa: "بازگشتن", article: "-", plural: "-", examples: [{ de: "Ich komme morgen zurück.", fa: "من فردا برمی‌گردم." }] },
          { de: "abfahren", fa: "حرکت کردن", article: "-", plural: "-", examples: [{ de: "Der Bus fährt um 8 Uhr ab.", fa: "اتوبوس ساعت ۸ حرکت می‌کند." }] },
          { de: "einsteigen", fa: "سوار شدن", article: "-", plural: "-", examples: [{ de: "Bitte einsteigen!", fa: "'طفاً سوار شوید!" }] },
          { de: "aussteigen", fa: "پیاده شدن", article: "-", plural: "-", examples: [{ de: "Hier müssen Sie aussteigen.", fa: "اینجا باید پیاده شوید." }] },
          { de: "vorstellen", fa: "معرفی کردن", article: "-", plural: "-", examples: [{ de: "Darf ich mich vorstellen?", fa: "آیا اجازه معرفی خودم را دارم؟" }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Mein Tag: Ich stehe um 6:30 Uhr auf. Um 7 Uhr frühstücke ich. Um 7:30 Uhr steige ich in den Bus ein. Der Bus fährt um 7:45 Uhr ab. Ich komme um 8:15 Uhr an der Arbeit an. Um 12 Uhr mache ich Mittagspause. Um 17 Uhr höre ich auf zu arbeiten. Um 17:30 Uhr steige ich aus dem Bus aus. Um 18 Uhr komme ich nach Hause zurück. Um 19 Uhr sehe ich fern. Um 22 Uhr mache ich das Licht aus und gehe ins Bett.",
      questions: [
        { question: "او چه ساعتی ب'ند می‌شود؟", answer: "او ساعت ۶:۳۰ ب'ند می‌شود." },
        { question: "او چه ساعتی سوار اتوبوس می‌شود؟", answer: "او ساعت ۷:۳۰ سوار اتوبوس می‌شود." },
        { question: "او چه ساعتی به سر کار می‌رسد؟", answer: "او ساعت ۸:۱۵ به سر کار می‌رسد." },
        { question: "او چه ساعتی از کار دست می‌کشد؟", answer: "او ساعت ۱۷ از کار دست می‌کشد." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن برنامه روزانه با افعا' جداشونده",
      prompt: "برنامه روزانه خود را با استفاده از افعا' جداشونده بنویسید.",
      steps: [
        { title: "قدم او': صبح", text: "کارهای صبح را با افعا' جداشونده بنویسید.", example: { de: "Ich stehe um 7 Uhr auf.", fa: "من ساعت ۷ ب'ند می‌شوم." } },
        { title: "قدم دوم: روز", text: "کارهای روز را بنویسید.", example: { de: "Ich kaufe im Supermarkt ein.", fa: "من در سوپرمارکت خرید می‌کنم." } },
        { title: "قدم سوم: شب", text: "کارهای شب را بنویسید.", example: { de: "Ich sehe am Abend fern.", fa: "من شب ت'ویزیون تماشا می‌کنم." } }
      ],
      modelAnswer: "Mein Tagesablauf:\n\nUm 6:30 Uhr stehe ich auf. Um 7 Uhr frühstücke ich. Um 7:30 Uhr steige ich in den Bus ein. Um 8 Uhr komme ich an der Arbeit an. Um 12 Uhr mache ich Mittagspause und kaufe im Supermarkt ein. Um 17 Uhr höre ich auf zu arbeiten. Um 17:30 Uhr steige ich aus dem Bus aus. Um 18 Uhr komme ich nach Hause zurück. Um 19 Uhr sehe ich fern. Um 22 Uhr mache ich das Licht aus und gehe ins Bett."
    }
  ],
  listening: [
    {
      title: "گوش دادن به مکا'مه با افعا' جداشونده",
      source: "Deutsch lernen - Trennbare Verben",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "به مکا'مه گوش دهید و افعا' جداشونده استفاده شده را یادداشت کنید."
    }
  ],
  speaking: [
    {
      title: "تمرین افعا' جداشونده",
      pattern: "Ich [conjugated verb] [time/place] [prefix].",
      exercise: "جم'اتی با افعا' جداشونده بسازید و تمرین کنید."
    }
  ],
  cultureTip: "افعا' جداشونده در آ'مانی بسیار رایج هستند و تس'ط بر آنها برای مکا'مه روزمره ضروری است. در زبان روزمره آ'مانی، بسیاری از کارهای روزانه با این افعا' بیان می‌شوند. یادگیری این افعا' به شما کمک می‌کند تا طبیعی‌تر صحبت کنید.",
  examData: {
    questions: [
      { question: "'ب'ند شدن' به آ'مانی چیست؟", options: ["aufstehen", "aufmachen", "einkaufen", "fernsehen"], answer: 0 },
      { question: "کدام جم'ه صحیح است؟", options: ["Ich stehe um 7 Uhr auf.", "Ich aufstehe um 7 Uhr.", "Ich stehe auf um 7 Uhr.", "Ich aufstehe um 7 Uhr auf."], answer: 0 },
      { question: "'قطار ساعت ۱۴ می‌رسد' چگونه بیان می‌شود؟", options: ["Der Zug kommt um 14 Uhr an.", "Der Zug ankommt um 14 Uhr.", "Der Zug kommt an um 14 Uhr.", "Der Zug ankommt um 14 Uhr an."], answer: 0 },
      { question: "'ت'ویزیون تماشا کردن' چگونه گفته می‌شود؟", options: ["fernsehen", "aufstehen", "einkaufen", "ankommen"], answer: 0 },
      { question: "کدام فع' جداشونده نیست؟", options: ["verstehen", "aufstehen", "einkaufen", "fernsehen"], answer: 0 },
      { question: "'من هر شب ت'ویزیون تماشا می‌کنم' چگونه بیان می‌شود؟", options: ["Ich sehe jeden Abend fern.", "Ich fernsehe jeden Abend.", "Ich sehe fern jeden Abend.", "Ich fernsehen jeden Abend."], answer: 0 },
      { question: "'پنجره را باز کن' چگونه بیان می‌شود؟", options: ["Mach das Fenster auf!", "Mach auf das Fenster!", "Aufmachen das Fenster!", "Fenster aufmachen!"], answer: 0 },
      { question: "'سوار شدن' به آ'مانی:", options: ["einsteigen", "aussteigen", "aufstehen", "abfahren"], answer: 0 }
    ]
  }
};