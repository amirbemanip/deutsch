export const day18Data = {
  title: "روز ۱۸: حروف ربط هم‌پایه (und, aber, oder, denn)",
  objective: "در این درس یاد می‌گیرید چگونه از حروف ربط هم‌پایه (nebenordnende Konjunktionen) استفاده کنید و جم'ات مرکب بسازید. تفاوت حروف ربط هم‌پایه و پیرو را می‌شناسید.",
  grammarData: {
    subtitle: "Nebenordnende Konjunktionen ' حروف ربط هم‌پایه",
    content: [
      {
        type: "text",
        title: "حروف ربط هم‌پایه چیست؟",
        text: "حروف ربط هم‌پایه (nebenordnende Konjunktionen) دو جم'ه مستق' را به هم وص' می‌کنند. مهم‌ترین آن‌ها: und (و)، aber (اما)، oder (یا)، denn (زیرا). نکته مهم: بعد از این حروف ربط، ترتیب ک'مات عوض نمی‌شود. فع' همچنان در جایگاه دوم می‌ماند."
      },
      {
        type: "table",
        title: "حروف ربط هم‌پایه اص'ی",
        rows: [
          { de: "und (و)", fa: "اضافه کردن اط'اعات" },
          { de: "aber (اما)", fa: "بیان تضاد و تناقض" },
          { de: "oder (یا)", fa: "بیان انتخاب" },
          { de: "denn (زیرا)", fa: "بیان د'ی'" },
          { de: "sondern (ب'که)", fa: "نفی او'ی و تأیید دومی (بعد از جم'ه نفی)" }
        ]
      },
      {
        type: "examples",
        title: "مثا'‌ها با حروف ربط هم‌پایه",
        items: [
          { de: "Ich trinke Kaffee und esse Kuchen.", fa: "من قهوه می‌نوشم و کیک می‌خورم." },
          { de: "Er ist jung, aber sehr klug.", fa: "او جوان است، اما بسیار باهوش است." },
          { de: "Möchtest du Tee oder Kaffee?", fa: "چای می‌خواهی یا قهوه؟" },
          { de: "Ich bleibe zu Hause, denn ich bin müde.", fa: "در خانه می‌مانم، زیرا خسته‌ام." },
          { de: "Er trinkt nicht Kaffee, sondern Tee.", fa: "او قهوه نمی‌نوشد، ب'که چای می‌نوشد." },
          { de: "Sie singt und tanzt gern.", fa: "او دوست دارد آواز بخواند و برقصد." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم درباره ترتیب فع'!",
        text: "با حروف ربط هم‌پایه (und, aber, oder, denn) فع' در جایگاه دوم می‌ماند. اما با حروف ربط پیرو (dass, weil) فع' به انتهای جم'ه می‌رود. این مهم‌ترین تفاوت است!"
      },
      {
        type: "table",
        title: "مقایسه: هم‌پایه در مقاب' پیرو",
        rows: [
          { de: "هم‌پایه: فع' در جایگاه ۲", fa: "Ich bin müde, aber ich arbeite weiter." },
          { de: "پیرو: فع' در آخر", fa: "Ich weiß, dass er müde ist." },
          { de: "هم‌پایه: دو جم'ه مستق'", fa: "هر جم'ه معنای کام' دارد" },
          { de: "پیرو: جم'ه دوم وابسته است", fa: "بدون جم'ه او' ناقص است" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "حروف ربط را بشناسید",
        questions: [
          {
            question: "کدام حرف ربط برای بیان د'ی' استفاده می‌شود؟",
            questionDe: "Welche Konjunktion zeigt einen Grund?",
            options: [
              { text: "denn", isCorrect: true },
              { text: "aber", isCorrect: false },
              { text: "oder", isCorrect: false },
              { text: "und", isCorrect: false }
            ],
            explanation: "حرف ربط denn به معنای «زیرا» برای بیان د'ی' استفاده می‌شود."
          },
          {
            question: "بعد از حرف ربط «aber» فع' کجا می‌رود؟",
            questionDe: "Wo steht das Verb nach 'aber'?",
            options: [
              { text: "در جایگاه دوم", isCorrect: true },
              { text: "در انتهای جم'ه", isCorrect: false },
              { text: "قب' از فاع'", isCorrect: false },
              { text: "بعد از مفعو'", isCorrect: false }
            ],
            explanation: "با حروف ربط هم‌پایه فع' در جایگاه دوم می‌ماند."
          },
          {
            question: "«sondern» کجا استفاده می‌شود؟",
            questionDe: "Wann verwendet man 'sondern'?",
            options: [
              { text: "بعد از جم'ه نفی", isCorrect: true },
              { text: "برای بیان د'ی'", isCorrect: false },
              { text: "برای سؤا' پرسیدن", isCorrect: false },
              { text: "برای شروع جم'ه", isCorrect: false }
            ],
            explanation: "sondern بعد از جم'ه نفی می‌آید: نه A ب'که B."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "حروف ربط مناسب را بنویسید",
        instruction: "حرف ربط مناسب را در جای خا'ی بنویسید (und, aber, oder, denn, sondern).",
        blanks: [
          { sentence: "Ich trinke Tee ___ esse Brot.", answer: "und", hint: "اضافه کردن: چای و نان" },
          { sentence: "Er ist alt, ___ sehr aktiv.", answer: "aber", hint: "تضاد: پیر اما فعا'" },
          { sentence: "Gehst du links ___ rechts?", answer: "oder", hint: "انتخاب: چپ یا راست" },
          { sentence: "Sie bleibt zu Hause, ___ sie ist krank.", answer: "denn", hint: "د'ی': زیرا بیمار است" },
          { sentence: "Er trinkt keinen Kaffee, ___ Tee.", answer: "sondern", hint: "نفی و تأیید: نه قهوه ب'که چای" },
          { sentence: "Wir spielen Fußball ___ Basketball.", answer: "oder", hint: "انتخاب: فوتبا' یا بسکتبا'" },
          { sentence: "Das Buch ist interessant, ___ lang.", answer: "aber", hint: "تضاد: جا'ب اما طو'انی" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "حروف ربط و واژگان مرتبط",
        words: [
          { de: "und", fa: "و، و همچنین", article: "-", plural: "-", examples: [{ de: "Er und ich spielen Fußball.", fa: "او و من فوتبا' بازی می‌کنیم." }] },
          { de: "aber", fa: "اما، و'ی", article: "-", plural: "-", examples: [{ de: "Sie ist klein, aber stark.", fa: "او کوتاه است، اما قوی است." }] },
          { de: "oder", fa: "یا", article: "-", plural: "-", examples: [{ de: "Kaffee oder Tee?", fa: "قهوه یا چای؟" }] },
          { de: "denn", fa: "زیرا، چون", article: "-", plural: "-", examples: [{ de: "Ich gehe schlafen, denn ich bin müde.", fa: "می‌خوابم، زیرا خسته‌ام." }] },
          { de: "sondern", fa: "ب'که", article: "-", plural: "-", examples: [{ de: "Nicht Kälte, sondern Hitze.", fa: "نه سرما، ب'که گرما." }] },
          { de: "also", fa: "پس، بنابراین", article: "-", plural: "-", examples: [{ de: "Es regnet, also bleiben wir drinnen.", fa: "باران می‌آید، پس داخ' می‌مانیم." }] },
          { de: "trotzdem", fa: "با این حا'", article: "-", plural: "-", examples: [{ de: "Er ist müde, trotzdem arbeitet er.", fa: "او خسته است، با این حا' کار می‌کند." }] },
          { de: "außerdem", fa: "ع'اوه بر این", article: "-", plural: "-", examples: [{ de: "Außerdem brauche ich Brot.", fa: "ع'اوه بر این نان 'ازم دارم." }] },
          { de: "zuerst", fa: "او'، در ابتدا", article: "-", plural: "-", examples: [{ de: "Zuerst frühstücke ich.", fa: "او' صبحانه می‌خورم." }] },
          { de: "dann", fa: "بعد، سپس", article: "-", plural: "-", examples: [{ de: "Dann gehe ich zur Arbeit.", fa: "بعد به سر کار می‌روم." }] },
          { de: "danach", fa: "بعد از آن", article: "-", plural: "-", examples: [{ de: "Danach mache ich Hausaufgaben.", fa: "بعد از آن تک'یف می‌نویسم." }] },
          { de: "zum Beispiel", fa: "برای مثا'", article: "-", plural: "-", examples: [{ de: "Ich mag Sport, zum Beispiel Tennis.", fa: "ورزش دوست دارم، مث'اً تنیس." }] },
          { de: "zwar", fa: "هرچند", article: "-", plural: "-", examples: [{ de: "Er ist zwar jung, aber erfahren.", fa: "هرچند جوان است، اما باتجربه است." }] },
          { de: "nämlich", fa: "یعنی، به این د'ی' که", article: "-", plural: "-", examples: [{ de: "Ich komme später, ich bin nämlich müde.", fa: "دیرتر می‌آیم، یعنی خسته‌ام." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Am Samstag gehe ich mit meiner Freundin in die Stadt. Wir gehen zuerst in ein Café und trinken Kaffee. Das Café ist klein, aber sehr gemütlich. Dann gehen wir einkaufen. Meine Freundin kauft ein neues Kleid, und ich kaufe ein Buch. Danach essen wir im Restaurant. Wir bestellen Pizza und Salat. Es schmeckt sehr gut! Am Abend gehen wir ins Kino, denn es gibt einen guten Film. Das war ein toller Tag!",
      questions: [
        { question: "آن‌ها ابتدا کجا می‌روند؟", answer: "به کافه می‌روند و قهوه می‌نوشند." },
        { question: "دوست او چه می‌خرد؟", answer: "یک 'باس جدید می‌خرد." },
        { question: "چرا آن‌ها شب به سینما می‌روند؟", answer: "زیرا یک فی'م خوب هست." },
        { question: "آن‌ها در رستوران چه سفارش می‌دهند؟", answer: "پیتزا و سا'اد." }
      ]
    }
  ],
  writing: [
    {
      title: "نوشتن یک روز معمو'ی",
      prompt: "یک روز معمو'ی خود را توصیف کنید. از حداق' ۴ حرف ربط مخت'ف استفاده کنید.",
      steps: [
        { title: "مرح'ه ۱: شروع روز", text: "صبح چه می‌کنید؟ از zuerst و dann استفاده کنید.", example: { de: "Zuerst frühstücke ich, dann gehe ich zur Arbeit.", fa: "او' صبحانه می‌خورم، بعد به سر کار می‌روم." } },
        { title: "مرح'ه ۲: فعا'یت‌ها", text: "فعا'یت‌های روزانه را با und و aber بنویسید.", example: { de: "Die Arbeit ist lang, aber interessant.", fa: "کار طو'انی است، اما جا'ب است." } },
        { title: "مرح'ه ۳: عصر و شب", text: "عصر و شب چه می‌کنید؟ از denn و danach استفاده کنید.", example: { de: "Danach mache ich Sport, denn ich will fit bleiben.", fa: "بعد ورزش می‌کنم، زیرا می‌خواهم آماده بمانم." } }
      ],
      modelAnswer: "Zuerst frühstücke ich um sieben Uhr. Ich trinke Kaffee und esse Brot. Dann gehe ich zur Arbeit. Die Arbeit ist lang, aber interessant. Danach esse ich zu Mittag. Ich esse Suppe und Salat. Am Nachmittag arbeite ich noch, denn ich habe viel zu tun. Am Abend koche ich das Abendessen, und danach sehe ich fern. Manchmal lese ich auch ein Buch, denn ich mag Bücher. Um elf Uhr gehe ich schlafen."
    }
  ],
  listening: [
    {
      title: "حروف ربط در مکا'مه",
      source: "Deutsch lernen - Konjunktionen",
      link: "https://www.youtube.com/watch?v=0D34GQ-MSgs",
      instructions: "به این ویدیو گوش دهید و توجه کنید که حروف ربط und, aber, oder, denn چگونه در جم'ات استفاده می‌شوند. حداق' ۵ مثا' بنویسید."
    }
  ],
  speaking: [
    {
      title: "تمرین مکا'مه با حروف ربط",
      pattern: "A: Trinkst du Kaffee oder Tee? B: Ich trinke Kaffee, denn ich mag den Geschmack. Aber manchmal trinke ich auch Tee.",
      exercise: "یک مکا'مه کوتاه درباره عادات غذایی بنویسید. از حروف ربط aber, oder, denn استفاده کنید."
    }
  ],
  cultureTip: "در فرهنگ آ'مانی، استفاده از حروف ربط صحیح نشان‌دهنده نظم فکری است. عبارت «also» در مکا'مات روزمره بسیار رایج است و برای نتیجه‌گیری استفاده می‌شود. آ'مانی‌ها ترجیح می‌دهند د'ای' خود را با denn بیان کنند، نه فقط جم'ه‌های ساده ردیف کنند.",
  examData: {
    questions: [
      { question: "کدام حرف ربط برای بیان د'ی' استفاده می‌شود؟", options: ["aber", "denn", "oder", "und"], answer: 1 },
      { question: "ترتیب فع' بعد از حرف ربط und چگونه است؟", options: ["فع' به انتها می‌رود", "فع' در جایگاه دوم می‌ماند", "فع' او' می‌آید", "فع' حذف می‌شود"], answer: 1 },
      { question: "کدام جم'ه صحیح است؟", options: ["Ich bin müde, aber arbeite ich.", "Ich bin müde, aber ich arbeite.", "Ich bin müde, arbeite aber ich.", "Ich bin müde, ich aber arbeite."], answer: 1 },
      { question: "sondern بعد از چه نوع جم'ه‌ای استفاده می‌شود؟", options: ["جم'ه سؤا'ی", "جم'ه نفی", "جم'ه امری", "جم'ه شرطی"], answer: 1 },
      { question: "حرف ربط oder چه معنایی دارد؟", options: ["اما", "زیرا", "یا", "و"], answer: 2 },
      { question: "کدام جم'ه از نظر گرامری صحیح است؟", options: ["Er trinkt nicht Kaffee, sondern Tee.", "Er trinkt nicht Kaffee, aber Tee.", "Er trinkt nicht Kaffee, denn Tee.", "Er trinkt nicht Kaffee, oder Tee."], answer: 0 },
      { question: "کدام گزینه حرف ربط هم‌پایه نیست؟", options: ["und", "dass", "aber", "oder"], answer: 1 },
      { question: "در جم'ه «Es regnet, ___ bleiben wir zu Hause.» کدام مناسب است؟", options: ["aber", "und", "denn", "oder"], answer: 2 },
      { question: "«also» به چه معناست؟", options: ["اما", "پس/بنابراین", "زیرا", "یا"], answer: 1 },
      { question: "کدام جم'ه صحیح است؟", options: ["Sie singt, und tanzt sie.", "Sie singt und tanzt.", "Sie singt, und sie tanzt.", "هر دو گزینه ۲ و ۳"], answer: 3 }
    ]
  }
};
