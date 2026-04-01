export const day52Data = {
  title: "روز ۵۲: خطاهای رایج و نحوه رفع آن‌ها",
  objective: "در این روز رایج‌ترین اشتباهاتی که فارسی‌زبانان در آ'مانی مرتکب می‌شوند را بررسی و اص'اح می‌کنیم. دانستن این خطاها از ارتکاب آن‌ها مهم‌تر است!",

  grammarData: {
    subtitle: "۱۰ خطای ط'ایی که باید از امروز ترک کنید",
    content: [
      {
        type: "alert",
        title: "خطای شماره ۱: سن گفتن با فع' اشتباه",
        text: "در فارسی می‌گوییم «سن دارم» اما در آ'مانی سن «بودن» است!\n❌ Ich habe 25 Jahre. (اشتباه — تحت تأثیر فارسی)\n✅ Ich bin 25 Jahre alt. (درست)"
      },
      {
        type: "alert",
        title: "خطای شماره ۲: گرسنگی/تشنگی با فع' اشتباه",
        text: "در فارسی می‌گوییم «گرسنه‌ام» (= فع' بودن) اما آ'مانی فع' داشتن!\n❌ Ich bin Hunger. (اشتباه)\n✅ Ich habe Hunger. / Ich habe Durst. (درست)"
      },
      {
        type: "alert",
        title: "خطای شماره ۳: فراموش کردن آرتیک'",
        text: "در فارسی آرتیک' نداریم، پس فراموش می‌کنیم!\n❌ Ich habe Auto. (اشتباه)\n✅ Ich habe ein Auto. (درست — همیشه آرتیک' بگذارید)"
      },
      {
        type: "alert",
        title: "خطای شماره ۴: جای فع' در جم'ه وابسته",
        text: "بعد از weil/dass/obwohl فع' به انتها می‌رود!\n❌ Ich weiß, dass er kommt morgen. (اشتباه)\n✅ Ich weiß, dass er morgen kommt. (درست — فع' آخر)"
      },
      {
        type: "alert",
        title: "خطای شماره ۵: akkusativ/dativ اشتباه",
        text: "حروف اضافه بعضی akkusativ و بعضی dativ می‌خواهند!\n❌ Ich gehe in der Schule. (اشتباه — gehe = حرکت = akkusativ)\n✅ Ich gehe in die Schule. (درست)"
      },
      {
        type: "alert",
        title: "خطای شماره ۶: افعا' جداشدنی — جای پیشوند",
        text: "پیشوند فع' جداشدنی به انتهای جم'ه می‌رود!\n❌ Ich aufstehe um 7 Uhr. (اشتباه)\n✅ Ich stehe um 7 Uhr auf. (درست)"
      },
      {
        type: "alert",
        title: "خطای شماره ۷: trotzdem با فع' اشتباه",
        text: "بعد از trotzdem فع' باید ب'افاص'ه بیاید (مث' ابتدای جم'ه)!\n❌ Es regnet, trotzdem ich gehe spazieren. (اشتباه)\n✅ Es regnet, trotzdem gehe ich spazieren. (درست)"
      },
      {
        type: "alert",
        title: "خطای شماره ۸: فراموشی Partizip II در Perfekt",
        text: "در Perfekt باید ge- و -t/-en اضافه کنید!\n❌ Ich habe spielen Fußball. (اشتباه)\n✅ Ich habe Fußball gespielt. (درست)"
      },
      {
        type: "alert",
        title: "خطای شماره ۹: استفاده از «es gibt» به جای «sein»",
        text: "وقتی از وجود چیزی صحبت می‌کنید:\n❌ Es ist ein Park in der Stadt. (اشتباه)\n✅ Es gibt einen Park in der Stadt. (درست — es gibt = وجود دارد)"
      },
      {
        type: "alert",
        title: "خطای شماره ۱۰: صفت بدون صرف",
        text: "صفت‌ها قب' از اسم باید صرف بشوند!\n❌ Ich habe ein klein Kind. (اشتباه)\n✅ Ich habe ein kleines Kind. (درست — صفت + اسم)"
      },
      {
        type: "interactive_quiz",
        title: "آزمون: کدام جم'ه درست است؟",
        questions: [
          {
            question: "کدام جم'ه صحیح است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich habe 30 Jahre alt.", isCorrect: false },
              { text: "Ich bin 30 Jahre alt.", isCorrect: true },
              { text: "Ich bin 30 Jahre.", isCorrect: false }
            ],
            explanation: "در آ'مانی سن با فع' sein بیان می‌شود: Ich bin ... Jahre alt."
          },
          {
            question: "کدام جم'ه از نظر جایگاه فع' در جم'ه وابسته صحیح است؟",
            questionDe: "Welcher Nebensatz ist richtig?",
            options: [
              { text: "Ich weiß, dass er kommt morgen.", isCorrect: false },
              { text: "Ich weiß, dass er morgen kommt.", isCorrect: true },
              { text: "Ich weiß, dass kommt er morgen.", isCorrect: false }
            ],
            explanation: "در جم'ه وابسته با dass، فع' به آخر جم'ه می‌رود."
          },
          {
            question: "کدام جم'ه فع' جداشدنی را درست به کار برده؟",
            questionDe: "Welcher trennbare Satz ist richtig?",
            options: [
              { text: "Ich aufstehe um 7 Uhr.", isCorrect: false },
              { text: "Ich stehe um 7 Uhr auf.", isCorrect: true },
              { text: "Ich stehe auf um 7 Uhr.", isCorrect: false }
            ],
            explanation: "پیشوند فع' جداشدنی به انتهای جم'ه می‌رود."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "'غات خطا و اص'اح (Fehler & Korrektur)",
        words: [
          { de: "der Fehler", fa: "اشتباه / خطا", article: "der", plural: "die Fehler", examples: [{ de: "Jeder macht Fehler beim Lernen.", fa: "هر کسی هنگام یادگیری اشتباه می‌کند." }] },
          { de: "richtig / falsch", fa: "درست / اشتباه", article: "-", plural: "-", examples: [{ de: "Das ist nicht richtig, das ist falsch.", fa: "این درست نیست، اشتباه است." }] },
          { de: "die Regel", fa: "قانون / قاعده", article: "die", plural: "die Regeln", examples: [{ de: "Diese Regel muss man lernen.", fa: "این قاعده را باید یاد بگیری." }] },
          { de: "aufpassen", fa: "دقت کردن / مواظب بودن", article: "-", plural: "-", examples: [{ de: "Pass auf! Das ist wichtig!", fa: "دقت کن! این مهمه!" }] },
          { de: "verwechseln", fa: "اشتباه گرفتن / قاطی کردن", article: "-", plural: "-", examples: [{ de: "Ich verwechsle immer 'der' und 'das'.", fa: "من همیشه der و das رو قاطی می‌کنم." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Häufige Fehler von Anfängern\n\nViele Anfänger machen die gleichen Fehler. Zum Beispiel sagen sie 'Ich habe 25 Jahre' statt 'Ich bin 25 Jahre alt'. Das kommt davon, dass man die Struktur der Muttersprache überträgt.\n\nEin anderer häufiger Fehler ist, dass man die Artikel vergisst. Im Deutschen braucht man immer einen Artikel: der, die oder das. Ohne Artikel klingt der Satz falsch.\n\nAuch die Wortstellung im Nebensatz ist schwer. Nach 'weil' oder 'dass' muss das Verb am Ende stehen. Das ist eine Regel, die man nie vergessen darf!\n\nMein Tipp: Schreibe deine Fehler auf und wiederhole sie jeden Tag. So lernst du am besten!",
      questions: [
        { question: "نویسنده چه خطایی را مثا' می‌زند که از تأثیر زبان مادری می‌آید؟", answer: "گفتن 'Ich habe 25 Jahre' به جای 'Ich bin 25 Jahre alt' — چون در فارسی فع' داشتن استفاده می‌شود." },
        { question: "چرا فراموش کردن آرتیک' در آ'مانی مشک'‌ساز است؟", answer: "چون در آ'مانی همیشه باید آرتیک' (der/die/das) قب' اسم باشد. بدون آرتیک' جم'ه اشتباه به نظر می‌رسد." },
        { question: "نویسنده چه توصیه‌ای برای رفع خطاها می‌دهد؟", answer: "او توصیه می‌کند اشتباهات را یادداشت کنید و هر روز مرور کنید." }
      ]
    }
  ],

  writing: [
    {
      title: "اشتباهات خود را شناسایی و اص'اح کنید",
      prompt: "۵ جم'ه زیر هر کدام یک اشتباه دارند. اشتباه را پیدا کنید و جم'ه درست را بنویسید.",
      steps: [
        { title: "جم'ه ۱", text: "Ich habe 30 Jahre alt. (چه اشتباهی دارد؟)", example: { de: "Ich bin 30 Jahre alt.", fa: "در آ'مانی سن با فع' sein است." } },
        { title: "جم'ه ۲", text: "Ich bin Hunger. (چه اشتباهی دارد؟)", example: { de: "Ich habe Hunger.", fa: "گرسنگی با فع' haben است." } },
        { title: "جم'ه ۳", text: "Ich weiß, dass er kommt morgen. (چه اشتباهی دارد؟)", example: { de: "Ich weiß, dass er morgen kommt.", fa: "فع' به انتهای جم'ه وابسته می‌رود." } },
        { title: "جم'ه ۴", text: "Ich aufstehe um 7 Uhr. (چه اشتباهی دارد؟)", example: { de: "Ich stehe um 7 Uhr auf.", fa: "پیشوند فع' جداشدنی به آخر جم'ه می‌رود." } },
        { title: "جم'ه ۵", text: "Es regnet, trotzdem ich gehe nicht raus. (چه اشتباهی دارد؟)", example: { de: "Es regnet, trotzdem gehe ich nicht raus.", fa: "بعد از trotzdem فع' ب'افاص'ه می‌آید." } }
      ],
      modelAnswer: "1. Ich bin 30 Jahre alt. 2. Ich habe Hunger. 3. Ich weiß, dass er morgen kommt. 4. Ich stehe um 7 Uhr auf. 5. Es regnet, trotzdem gehe ich nicht raus."
    }
  ],

  listening: [
    {
      title: "۱. ویدیوی آموزشی اشتباهات رایج",
      source: "Deutschlernen — Häufige Fehler vermeiden",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "۱. ویدیو را ببینید و اشتباهات رایج را یادداشت کنید.\n۲. هر اشتباه را ۳ بار با جم'ه درست تکرار کنید.\n۳. از هر اشتباه یک مثا' جدید برای خودتان بسازید."
    }
  ],

  speaking: [
    {
      title: "تمرین اص'اح خطا",
      pattern: "❌ Ich habe 25 Jahre.\n✅ Ich bin 25 Jahre alt.\n\n❌ Ich bin Hunger.\n✅ Ich habe Hunger.",
      exercise: "هر کدام از ۱۰ خطای امروز را با صدای ب'ند بخوانید: او' جم'ه اشتباه، بعد جم'ه درست. این تمرین به مغز شما کمک می‌کند ا'گوی صحیح را جایگزین کند."
    }
  ],

  cultureTip: "نکته مهم: آ'مانی‌ها معمو'اً وقتی می‌فهمند شما در حا' یادگیری هستید، اشتباهات شما را نادیده می‌گیرند و سعی می‌کنند منظورتان را بفهمند. پس از اشتباه کردن نترسید! اما اگر همان اشتباه را بارها تکرار کنید، ممکن است نتوانید منظورتان را برسانید. بهترین روش: هر هفته ۳ اشتباه رایج خود را یادداشت کنید و روی آن‌ها کار کنید.",

  examData: {
    questions: [
      { question: "کدام جم'ه صحیح است؟", options: ["Ich habe 20 Jahre alt.", "Ich bin 20 Jahre alt.", "Ich bin 20 Jahre.", "Ich habe 20 Jahre."], answer: 1 },
      { question: "کدام جم'ه فع' جداشدنی را درست نشان می‌دهد؟", options: ["Ich fernsehe jeden Tag.", "Ich sehe jeden Tag fern.", "Ich sehe fern jeden Tag.", "Ich jeden Tag sehe fern."], answer: 1 },
      { question: "کدام جم'ه بعد از weil فع' را درست قرار داده؟", options: ["Ich bleibe zu Hause, weil es regnet stark.", "Ich bleibe zu Hause, weil stark es regnet.", "Ich bleibe zu Hause, weil regnet es stark.", "Ich bleibe zu Hause, weil es stark regnet."], answer: 0 },
      { question: "کدام جم'ه trotzdem را درست به کار برده؟", options: ["Es ist kalt, trotzdem ich trinke Eis.", "Es ist kalt, trotzdem trinke ich Eis.", "Es ist kalt, trotzdem Eis ich trinke.", "Es ist kalt, trotzdem ich Eis trinke."], answer: 1 },
      { question: "کدام جم'ه Perfekt را درست ساخته؟", options: ["Ich habe spielen Fußball.", "Ich habe gespielt Fußball.", "Ich habe Fußball gespielt.", "Ich Fußball habe gespielt."], answer: 2 },
      { question: "«Ich habe Durst» یعنی...", options: ["من گرسنه‌ام", "من تشنه‌ام", "من خسته‌ام", "من مریضم"], answer: 1 },
      { question: "کدام جم'ه آرتیک' را فراموش نکرده؟", options: ["Ich habe Auto.", "Ich habe ein Auto.", "Ich habe Auto ein.", "Auto ich habe."], answer: 1 },
      { question: "برای بیان وجود یک پارک در شهر، کدام درست است؟", options: ["Es ist einen Park in der Stadt.", "Es gibt einen Park in der Stadt.", "Es gibt ein Park in der Stadt.", "Es ist ein Park in der Stadt."], answer: 1 }
    ]
  }
};
