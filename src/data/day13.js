export const day13Data = {
  title: "روز ۱۳: زمان - ساعت + فعالیت‌های روزانه",
  objective: "در پایان این روز، شما می‌توانید ساعت را بگویید، فعالیت‌های روزانه را توصیف کنید و از افعال جداشدنی استفاده کنید.",
  level: "A1",
  grammarData: {
    subtitle: "زمان و فعالیت‌های روزانه",
    content: [
      {
        type: "text",
        title: "گفتن ساعت در آلمانی",
        text: "برای گفتن ساعت از «Wie viel Uhr ist es?» یا «Wie spät ist es?» استفاده می‌کنیم. پاسخ: Es ist ein Uhr (ساعت یک)، Es ist zwei Uhr (ساعت دو). برای ربع و نیم: Es ist Viertel nach drei (ربع به بعد از سه)، Es ist halb vier (نیم به چهار یعنی سه و نیم)."
      },
      {
        type: "table",
        title: "ساعت‌ها",
        rows: [
          { de: "Es ist ein Uhr.", fa: "ساعت یک (صبح)." },
          { de: "Es ist zwei Uhr.", fa: "ساعت دو." },
          { de: "Es ist drei Uhr.", fa: "ساعت سه." },
          { de: "Es ist halb vier.", fa: "ساعت سه و نیم." },
          { de: "Es ist Viertel nach drei.", fa: "ساعت سه و ربع." },
          { de: "Es ist Viertel vor vier.", fa: "ساعت سه و ربع به چهار." },
          { de: "Es ist fünf nach vier.", fa: "ساعت چهار و پنج دقیقه." },
          { de: "Es ist zehn vor fünf.", fa: "ساعت چهار و پنجاه دقیقه." },
          { de: "Es ist halb sechs.", fa: "ساعت پنج و نیم." },
          { de: "Es ist zwanzig nach sieben.", fa: "ساعت هفت و بیست دقیقه." }
        ]
      },
      {
        type: "alert",
        title: "توجه مهم: ساعت halb",
        text: "در آلمانی وقتی می‌گوییم halb drei یعنی ساعت سه و نیم در فارسی، اما عدد بعد از halb می‌آید! halb vier = ساعت ۳:۳۰ (نیم به چهار). این یکی از پیچیده‌ترین بخش‌های زبان آلمانی است پس باید دقت کنید."
      },
      {
        type: "text",
        title: "افعال فعالیت‌های روزانه با پیشوند جداشدنی",
        text: "افعال جداشدنی (trennbare Verben) افعالی هستند که پیشوند آنها در جمله اصلی از فعل جدا می‌شود و به آخر جمله می‌رود: aufstehen (بلند شدن) → Ich stehe um sieben Uhr auf. frühstücken (صبحانه خوردن) → Ich frühstücke um acht Uhr. zu Bett gehen (به رختخواب رفتن) → Ich gehe um zehn Uhr zu Bett."
      },
      {
        type: "table",
        title: "افعال جداشدنی روزانه",
        rows: [
          { de: "aufstehen", fa: "بلند شدن / بیدار شدن" },
          { de: "frühstücken", fa: "صبحانه خوردن" },
          { de: "zur Arbeit gehen", fa: "رفتن به سر کار" },
          { de: "Mittag essen", fa: "ناهار خوردن" },
          { de: "Feierabend machen", fa: "تمام شدن کار روزانه" },
          { de: "zu Abend essen", fa: "شام خوردن" },
          { de: "zu Bett gehen", fa: "به رختخواب رفتن" },
          { de: "fernsehen", fa: "تلویزیون دیدن" },
          { de: "einkaufen", fa: "خرید کردن" },
          { de: "schlafen gehen", fa: "خواب رفتن" }
        ]
      },
      {
        type: "examples",
        title: "مثال‌های فعالیت‌های روزانه",
        items: [
          { de: "Ich stehe um sechs Uhr auf.", fa: "ساعت شش بیدار می‌شوم." },
          { de: "Ich frühstücke um sieben Uhr.", fa: "ساعت هفت صبحانه می‌خورم." },
          { de: "Ich gehe um acht Uhr zur Arbeit.", fa: "ساعت هشت به سر کار می‌روم." },
          { de: "Ich esse um zwölf Uhr zu Mittag.", fa: "ساعت دوازده ناهار می‌خورم." },
          { de: "Ich sehe um zehn Uhr fern.", fa: "ساعت ده تلویزیون می‌بینم." },
          { de: "Ich gehe um elf Uhr zu Bett.", fa: "ساعت یازده به رختخواب می‌روم." }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین: زمان و فعالیت‌ها",
        instruction: "جملات را کامل کنید.",
        blanks: [
          { sentence: "Es ist ___ Uhr.", answer: "drei", hint: "سه" },
          { sentence: "Ich stehe um sechs Uhr ___.", answer: "auf", hint: "بلند می‌شوم" },
          { sentence: "Um sieben Uhr ___ ich.", answer: "frühstücke", hint: "صبحانه می‌خورم" },
          { sentence: "Es ist halb ___.", answer: "vier", hint: "چهار" },
          { sentence: "Ich ___ um acht Uhr zur Arbeit.", answer: "gehe", hint: "می‌روم" },
          { sentence: "Ich sehe ___ zehn Uhr fern.", answer: "um", hint: "در ساعت" },
          { sentence: "Es ist ___ nach fünf.", answer: "Viertel", hint: "ربع" },
          { sentence: "Ich gehe um elf Uhr zu ___.", answer: "Bett", hint: "رختخواب" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: زمان و روزانه",
        questions: [
          {
            question: "«ساعت سه و نیم» چگونه گفته می‌شود؟",
            questionDe: "Wie sagt man \"half past three\" auf Deutsch?",
            options: [
              { text: "Es ist halb vier.", isCorrect: true },
              { text: "Es ist halb drei.", isCorrect: false },
              { text: "Es ist drei Uhr dreißig.", isCorrect: false },
              { text: "Es ist drei und halb.", isCorrect: false }
            ],
            explanation: "halb همیشه با عدد بعدی می‌آید: halb vier = ۳:۳۰"
          },
          {
            question: "پیشوند کدام فعل جداشدنی است؟",
            questionDe: "Welches Verb ist trennbar?",
            options: [
              { text: "aufstehen", isCorrect: true },
              { text: "arbeiten", isCorrect: false },
              { text: "sprechen", isCorrect: false },
              { text: "finden", isCorrect: false }
            ],
            explanation: "auf یک پیشوند جداشدنی است."
          },
          {
            question: "«ربع به بعد از سه» چگونه گفته می‌شود؟",
            questionDe: "Wie heißt \"quarter past three\"?",
            options: [
              { text: "Viertel nach drei", isCorrect: true },
              { text: "Viertel vor drei", isCorrect: false },
              { text: "Drittel nach drei", isCorrect: false },
              { text: "Viertel drei", isCorrect: false }
            ],
            explanation: "nach یعنی به بعد."
          }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "زمان و ساعت",
        words: [
          { de: "die Uhr [uːɐ̯]", fa: "ساعت", article: "die", plural: "die Uhren", examples: [{ de: "Wie viel Uhr ist es?", fa: "چند ساعت است؟" }] },
          { de: "die Stunde [ˈʃtʊndə]", fa: "ساعت (واحد زمان)", article: "die", plural: "die Stunden", examples: [{ de: "Eine Stunde dauert sechzig Minuten.", fa: "یک ساعت شصت دقیقه طول می‌کشد." }] },
          { de: "die Minute [miˈnuːtə]", fa: "دقیقه", article: "die", plural: "die Minuten", examples: [{ de: "Fünf Minuten noch!", fa: "پنج دقیقه دیگر!" }] },
          { de: "der Feierabend [ˈfaɪɛˌʁaːbənt]", fa: "پایان کار روزانه", article: "der", plural: "die Feierabende", examples: [{ de: "Um fünfzehn Uhr ist Feierabend.", fa: "ساعت پنج کار تمام می‌شود." }] },
          { de: "der Morgen [ˈmɔʁɡən]", fa: "صبح", article: "der", plural: "die Morgen", examples: [{ de: "Guten Morgen!", fa: "صبح بخیر!" }] },
          { de: "der Mittag [ˈmɪtaːk]", fa: "ظهر", article: "der", plural: "die Mittage", examples: [{ de: "Mittagessen um zwölf Uhr.", fa: "ناهار ساعت دوازده." }] },
          { de: "der Abend [ˈaːbənt]", fa: "شب", article: "der", plural: "die Abende", examples: [{ de: "Guten Abend!", fa: "شب بخیر!" }] }
        ]
      },
      {
        title: "افعال روزانه",
        words: [
          { de: "aufstehen", fa: "بلند شدن / بیدار شدن", article: "", plural: "", ipa: "[ˈaʊfʃtantən]", conjugation: { ich:"stehe...auf", du:"stehst...auf", er:"steht...auf", wir:"stehen...auf", ihr:"steht...auf", sie:"stehen...auf" }, examples: [{ de: "Ich stehe um sechs Uhr auf.", fa: "ساعت شش بیدار می‌شوم." }] },
          { de: "frühstücken", fa: "صبحانه خوردن", article: "", plural: "", ipa: "[fʁyːˈʃtʏkən]", conjugation: { ich:"frühstücke", du:"frühstückst", er:"frühstückt", wir:"frühstücken", ihr:"frühstückt", sie:"frühstücken" }, examples: [{ de: "Ich frühstücke um sieben Uhr.", fa: "ساعت هفت صبحانه می‌خورم." }] },
          { de: "arbeiten", fa: "کار کردن", article: "", plural: "", ipa: "[ˈaʁbaɪtən]", conjugation: { ich:"arbeite", du:"arbeitest", er:"arbeitet", wir:"arbeiten", ihr:"arbeitet", sie:"arbeiten" }, examples: [{ de: "Ich arbeite von acht bis fünf.", fa: "از هشت تا پنج کار می‌کنم." }] },
          { de: "essen", fa: "خوردن", article: "", plural: "", ipa: "[ˈɛsən]", conjugation: { ich:"esse", du:"isst", er:"isst", wir:"essen", ihr:"esst", sie:"essen" }, examples: [{ de: "Ich esse zu Mittag.", fa: "ناهار می‌خورم." }] },
          { de: "fernsehen", fa: "تلویزیون دیدن", article: "", plural: "", ipa: "[fɛʁnˈzeːən]", conjugation: { ich:"sehe...fern", du:"siehst...fern", er:"sieht...fern", wir:"sehen...fern", ihr:"seht...fern", sie:"sehen...fern" }, examples: [{ de: "Ich sehe abends fern.", fa: "شب‌ها تلویزیون می‌بینم." }] },
          { de: "schlafen", fa: "خوابیدن", article: "", plural: "", ipa: "[ˈʃlaːfən]", conjugation: { ich:"schlafe", du:"schläfst", er:"schläft", wir:"schlafen", ihr:"schlaft", sie:"schlafen" }, examples: [{ de: "Ich schlafe acht Stunden.", fa: "هشت ساعت می‌خوابم." }] },
          { de: "einkaufen", fa: "خرید کردن", article: "", plural: "", ipa: "[ˈaɪnkaʊfən]", conjugation: { ich:"kaufe...ein", du:"kaufst...ein", er:"kauft...ein", wir:"kaufen...ein", ihr:"kauft...ein", sie:"kaufen...ein" }, examples: [{ de: "Ich kaufe am Samstag ein.", fa: "شنبه خرید می‌کنم." }] },
          { de: "zu Bett gehen", fa: "به رختخواب رفتن", article: "", plural: "", ipa: "[tsuː bɛt ˈɡeːən]", conjugation: { ich:"gehe...zu Bett", du:"gehst...zu Bett", er:"geht...zu Bett", wir:"gehen...zu Bett", ihr:"geht...zu Bett", sie:"gehen...zu Bett" }, examples: [{ de: "Ich gehe um elf Uhr zu Bett.", fa: "ساعت یازده به رختخواب می‌روم." }] }
        ]
      },
      {
        title: "کلمات زمانی",
        words: [
          { de: "früh", fa: "زود / صبح زود", article: "", plural: "", ipa: "[fʁyː]", examples: [{ de: "Ich stehe früh auf.", fa: "زود بیدار می‌شوم." }] },
          { de: "spät", fa: "دیر", article: "", plural: "", ipa: "[ʃpɛːt]", examples: [{ de: "Ich komme spät nach Hause.", fa: "دیر به خانه می‌رسم." }] },
          { de: "immer", fa: "همیشه", article: "", plural: "", ipa: "[ˈɪmɐ̯]", examples: [{ de: "Ich arbeite immer viel.", fa: "همیشه زیاد کار می‌کنم." }] },
          { de: "manchmal", fa: "گاهی", article: "", plural: "", ipa: "[ˈmançmaːl]", examples: [{ de: "Manchmal schlafe ich unterwegs.", fa: "گاهی در مسیر خوابم می‌رود." }] },
          { de: "täglich", fa: "روزانه", article: "", plural: "", ipa: "[ˈtɛːglɪç]", examples: [{ de: "Ich esse täglich dreimal.", fa: "روزانه سه بار می‌خورم." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Mein Tag. Ich stehe um sechs Uhr auf. Um halb sieben dusche ich. Um sieben Uhr frühstücke ich. Um acht Uhr gehe ich zur Arbeit. Ich arbeite bis sechzehn Uhr. Um zwölf Uhr esse ich zu Mittag. Um sechzehn Uhr dreißig mache ich Feierabend. Um neunzehn Uhr esse ich zu Abend. Um zweiundzwanzig Uhr sehe ich fern. Um elf Uhr gehe ich zu Bett. Um elf Uhr dreißig schlafe ich.",
      translation: "روز من. ساعت شش بیدار می‌شوم. ساعت شش و نیم دوش می‌گیرم. ساعت هفت صبحانه می‌خورم. ساعت هشت به سر کار می‌روم. تا ساعت شانزده کار می‌کنم. ساعت دوازده ناهار می‌خورم. ساعت شانزده و نیم کار تمام می‌شود. ساعت نوزده شام می‌خورم. ساعت بیست و دو تلویزیون می‌بینم. ساعت یازده به رختخواب می‌روم. ساعت یازده و نیم می‌خوابم.",
      questions: [
        { question: "چه ساعتی کار تمام می‌شود؟", answer: "ساعت شانزده و نیم" },
        { question: "چه ساعتی شام می‌خورد؟", answer: "ساعت نوزده" },
        { question: "چند ساعت می‌خوابد؟", answer: "حدود نه و نیم ساعت" }
      ]
    },
    {
      text: "Der Tag meiner Freundin. Anna: Um wie viel Uhr stehst du auf? Sara: Ich stehe um fünf Uhr dreißig auf. Anna: Das ist aber früh! Sara: Ja, ich arbeite um sechs Uhr dreißig. Ich muss früh aufstehen. Anna: Wann frühstückst du? Sara: Um sechs Uhr. Dann putze ich die Zähne und dusche. Um sieben Uhr dreißig verlasse ich das Haus. Anna: Und wann kommst du nach Hause? Sara: Um fünfzehn Uhr. Dann esse ich zu Mittag und mache Hausaufgaben.",
      translation: "روز دوستم. آنا: ساعت چند بیدار می‌شوی؟ سارا: ساعت پنج و نیم بیدار می‌شوم. آنا: خیلی زود است! سارا: بله، ساعت شش و نیم کار می‌کنم. باید زود بیدار شوم. آنا: کی صبحانه می‌خوری؟ سارا: ساعت شش. بعد مسواک می‌زنم و دوش می‌گیرم. ساعت هفت و نیم از خانه بیرون می‌روم. آنا: و کی به خانه برمی‌گردی؟ سارا: ساعت پانزده. بعد ناهار می‌خورم و تکالیف را انجام می‌دهم.",
      questions: [
        { question: "سارا چه ساعتی بیدار می‌شود؟", answer: "پنج و نیم" },
        { question: "سارا چه ساعتی به خانه برمی‌گردد؟", answer: "ساعت پانزده" }
      ]
    }
  ],
  writing: [
    {
      title: "روز معمول من",
      prompt: "روز معمول خود را به ترتیب بنویسید. از ساعت و افعال استفاده کنید.",
      steps: [
        { title: "صبح", text: "از بیدار شدن تا رفتن به کار/مدرسه.", example: { de: "Ich stehe um sechs Uhr auf.", fa: "ساعت شش بیدار می‌شوم." } },
        { title: "ظهر", text: "ناهار و استراحت.", example: { de: "Ich esse um zwölf Uhr zu Mittag.", fa: "ساعت دوازده ناهار می‌خورم." } },
        { title: "شب", text: "شام و خواب.", example: { de: "Um elf Uhr gehe ich zu Bett.", fa: "ساعت یازده به رختخواب می‌روم." } }
      ],
      modelAnswer: "Ich stehe um halb sieben auf. Um sieben Uhr frühstücke ich. Um acht Uhr gehe ich zur Universität. Ich lerne von neun bis dreizehn Uhr. Um dreizehn Uhr esse ich zu Mittag. Um vierzehn Uhr lerne ich weiter. Um sechzehn Uhr mache ich Sport. Um neunzehn Uhr esse ich zu Abend. Um einundzwanzig Uhr sehe ich fern. Um elf Uhr gehe ich zu Bett."
    }
  ],
  listening: [
    {
      title: "گوش دادن به برنامه روزانه",
      instruction: "به برنامه روزانه گوش دهید و ترتیب فعالیت‌ها را بنویسید.",
      sentences: [
        { de: "Ich stehe um sechs Uhr auf.", fa: "ساعت شش بیدار می‌شوم.", tts: "Ich stehe um sechs Uhr auf." },
        { de: "Ich frühstücke um halb sieben.", fa: "ساعت شش و نیم صبحانه می‌خورم.", tts: "Ich frühstücke um halb sieben." },
        { de: "Um acht Uhr gehe ich zur Arbeit.", fa: "ساعت هشت به سر کار می‌روم.", tts: "Um acht Uhr gehe ich zur Arbeit." },
        { de: "Um zwölf Uhr esse ich zu Mittag.", fa: "ساعت دوازده ناهار می‌خورم.", tts: "Um zwölf Uhr esse ich zu Mittag." },
        { de: "Ich gehe um fünf Uhr nach Hause.", fa: "ساعت پنج به خانه می‌روم.", tts: "Ich gehe um fünf Uhr nach Hause." }
      ]
    }
  ],
  speaking: [
    {
      title: "توصیف روز معمول",
      pattern: "Um [ساعت] [فعل]. ich [فعالم] [زمان].",
      exercise: "یک روز کامل را به ترتیب توصیف کنید."
    }
  ],
  cultureTip: "در آلمان، دقت به وقت بسیار مهم است. آلمانی‌ها به وقت‌شناسی اهمیت زیادی می‌دهند و迟到 در محیط کار بسیار منفی است. معمولاً ساعت کاری از ۸ یا ۹ صبح شروع می‌شود و تا ۱۶ یا ۱۷ بعدازظهر ادامه دارد. ناهار معمولاً کوتاه است (۳۰ دقیقه تا یک ساعت).",
  examData: {
    questions: [
      { question: "«ساعت سه و ربع» چگونه گفته می‌شود؟", options: ["Viertel nach drei", "Viertel drei", "Drei Viertel", "halb drei"], answer: 0 },
      { question: "«نیم به چهار» چیست؟", options: ["halb vier", "halb drei", "Viertel vor vier", "Viertel nach vier"], answer: 0 },
      { question: "فعل «بلند شدن» چیست؟", options: ["aufstehen", "aufmachen", "aufhören", "aufgeben"], answer: 0 },
      { question: "پیشوند کدام فعل جداشدنی است؟", options: ["fernsehen", "sprechen", "essen", "trinken"], answer: 0 },
      { question: "«ساعت کاری» چیست؟", options: ["die Arbeitszeit", "die Feierabend", "die Uhrzeit", "die Zeit"], answer: 0 },
      { question: "«صبحانه» در آلمانی چیست؟", options: ["das Frühstück", "das Mittagessen", "das Abendessen", "das Essen"], answer: 0 },
      { question: "ساعت «یازده ربع به دوازده» چند است؟", options: ["11:45", "12:15", "11:15", "12:45"], answer: 0 },
      { question: "«به خانه برگشتن» چیست؟", options: ["nach Hause kommen", "zu Hause bleiben", "von Hause gehen", "nach Hause gehen"], answer: 0 },
      { question: "«تلویزیون دیدن» چیست؟", options: ["fernsehen", "sehen", "TV gucken", "fern gucken"], answer: 0 },
      { question: "کدام جمله صحیح است؟", options: ["Ich stehe um sieben Uhr auf.", "Ich aufstehe um sieben Uhr.", "Ich stehe um sieben auf.", "Um sieben Uhr ich aufstehe."], answer: 0 }
    ]
  }
};