export const day24Data = {
  title: "روز ۲۴: صفت‌ها — Komparativ و Superlativ",
  objective: "در این روز یاد می‌گیرید چطور چیزها را مقایسه کنید. «برلین بزرگ‌تر از مونیخ است» یا «این رستوران بهترین است» — همه این‌ها با Komparativ و Superlativ ساخته می‌شوند.",

  grammarData: {
    subtitle: "Komparativ (مقایسه دو چیز) و Superlativ (برترین)",
    content: [
      {
        type: "text",
        title: "۱. Komparativ — مقایسه دو چیز (مثلاً بزرگ‌تر، زیباتر)",
        text: "برای مقایسه دو چیز، به آخر صفت پسوند -er اضافه می‌کنیم و از کلمه als (از) استفاده می‌کنیم.\nفرمول: صفت + er + als"
      },
      {
        type: "table",
        title: "قاعده Komparativ",
        rows: [
          { de: "groß → größer als", fa: "بزرگ → بزرگ‌تر از: Berlin ist größer als München." },
          { de: "schön → schöner als", fa: "زیبا → زیباتر از: Die Stadt ist schöner als das Dorf." },
          { de: "schnell → schneller als", fa: "سریع → سریع‌تر از: Der Zug ist schneller als der Bus." },
          { de: "alt → älter als", fa: "قدیمی/پیر → قدیمی‌تر از (Umlaut! a→ä)" },
          { de: "jung → jünger als", fa: "جوان → جوان‌تر از (Umlaut! u→ü)" },
          { de: "gut → besser als", fa: "خوب → بهتر از (بی‌قاعده!)" },
          { de: "viel → mehr als", fa: "زیاد → بیشتر از (بی‌قاعده!)" },
          { de: "gern → lieber als", fa: "با لذت → ترجیح‌تر از (بی‌قاعده!)" }
        ]
      },
      {
        type: "text",
        title: "۲. Superlativ — برترین (بهترین، بزرگ‌ترین)",
        text: "برای بیان برترین، از صفت + -st + آرتیکل am/der die das استفاده می‌کنیم.\nفرمول با am: am + صفت + st + en\nفرمول با آرتیکل: der/die/das + صفت + st + e/en"
      },
      {
        type: "table",
        title: "قاعده Superlativ",
        rows: [
          { de: "groß → am größten / der größte", fa: "بزرگ‌ترین: Das ist am größten. / der größte Mann" },
          { de: "schön → am schönsten / das schönste", fa: "زیباترین: Der Sommer ist am schönsten." },
          { de: "gut → am besten / das beste", fa: "بهترین: Das Restaurant ist am besten." },
          { de: "schnell → am schnellsten / der schnellste", fa: "سریع‌ترین: Er ist am schnellsten." },
          { de: "billig → am billigsten / das billigste", fa: "ارزان‌ترین: Das ist am billigsten." }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم: صفت‌های با Umlaut",
        text: "بعضی صفت‌های تک‌هجایی با حروف صدادار a, o, u هنگام اضافه شدن -er و -st Umlaut می‌گیرند:\nalt → älter → am ältesten\njung → jünger → am jüngsten\ngroß → größer → am größten\nkalt → kälter → am kältesten"
      },
      {
        type: "examples",
        title: "مثال‌های کاربردی",
        items: [
          { de: "Berlin ist größer als München.", fa: "برلین بزرگ‌تر از مونیخ است." },
          { de: "Der Sommer ist die schönste Jahreszeit.", fa: "تابستان زیباترین فصل است." },
          { de: "Ich trinke lieber Tee als Kaffee.", fa: "من چای را ترجیح می‌دهم تا قهوه." },
          { de: "Das ist das beste Restaurant der Stadt.", fa: "این بهترین رستوران شهر است." },
          { de: "Wer ist älter? Du oder dein Bruder?", fa: "کی قدیمی‌تره؟ تو یا برادرت؟" }
        ]
      },
      {
        type: "fill_blank",
        title: "Komparativ و Superlativ را کامل کنید",
        instruction: "شکل درست صفت را بنویسید:",
        blanks: [
          { sentence: "Berlin ist ___ (groß) als München.", answer: "größer", hint: "Komparativ: صفت + er" },
          { sentence: "Der Sommer ist am ___ (schön).", answer: "schönsten", hint: "Superlativ: am + adj + st + en" },
          { sentence: "Das ist das ___ (gut) Restaurant.", answer: "beste", hint: "gut → besser → best" },
          { sentence: "Mein Bruder ist ___ (jung) als ich.", answer: "jünger", hint: "Umlaut: u → ü" },
          { sentence: "Ich esse ___ (gern) Pizza als Salat.", answer: "lieber", hint: "gern → lieber (بی‌قاعده)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "آزمون: Komparativ و Superlativ",
        questions: [
          {
            question: "کدام جمله Komparativ را درست نشان می‌دهد؟",
            questionDe: "Welcher Komparativ ist richtig?",
            options: [
              { text: "Berlin ist mehr groß als München.", isCorrect: false },
              { text: "Berlin ist größ als München.", isCorrect: false },
              { text: "Berlin ist größer als München.", isCorrect: true }
            ],
            explanation: "برای Komparativ صفت‌های تک‌هجایی -er می‌گیرند: groß → größer."
          },
          {
            question: "کدام Superlativ درست است؟",
            questionDe: "Welcher Superlativ ist richtig?",
            options: [
              { text: "Das ist am besten.", isCorrect: true },
              { text: "Das ist am gutsten.", isCorrect: false },
              { text: "Das ist am bessersten.", isCorrect: false }
            ],
            explanation: "gut → besser → am besten (بی‌قاعده)"
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "صفت‌های پرکاربرد برای مقایسه",
        words: [
          { de: "groß / größer / am größten", fa: "بزرگ / بزرگ‌تر / بزرگ‌ترین", article: "-", plural: "-", examples: [{ de: "Wer ist der größte in der Klasse?", fa: "بزرگ‌ترین کلاس کیه؟" }] },
          { de: "klein / kleiner / am kleinsten", fa: "کوچک / کوچک‌تر / کوچک‌ترین", article: "-", plural: "-", examples: [{ de: "Das ist das kleinste Zimmer.", fa: "این کوچک‌ترین اتاقه." }] },
          { de: "schön / schöner / am schönsten", fa: "زیبا / زیباتر / زیباترین", article: "-", plural: "-", examples: [{ de: "Das Bild ist schöner als das Foto.", fa: "تصویر زیباتر از عکسه." }] },
          { de: "teuer / teurer / am teuersten", fa: "گران / گران‌تر / گران‌ترین", article: "-", plural: "-", examples: [{ de: "Das Auto ist das teuerste.", fa: "این ماشین گران‌ترینه." }] },
          { de: "billig / billiger / am billigsten", fa: "ارزان / ارزان‌تر / ارزان‌ترین", article: "-", plural: "-", examples: [{ de: "Lidl ist billiger als Rewe.", fa: "لیدل ارزان‌تر از روهه." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Meine Stadt\n\nMeine Stadt ist kleiner als Berlin, aber sie ist schoener als viele andere Staedte. Die Altstadt ist am schoensten, besonders im Sommer. Hier gibt es das beste Restaurant der Stadt. Dort ist das Essen am leckersten und die Preise sind guenstiger als in anderen Restaurants. Mein Lieblingsessen dort ist die Suppe. Der Sommer ist die schoenste Jahreszeit hier, weil die Tage am laengsten sind. Im Winter ist es kaelter, aber der Weihnachtsmarkt ist am gemuetlichsten. Ich finde, meine Stadt ist am besten zum Wohnen!",
      questions: [
        { question: "نویسنده شهرش را با برلین مقایسه می‌کند. کدام کوچک‌تر است؟", answer: "شهر نویسنده کوچک‌تر است." },
        { question: "کدام فصل زیباترین فصل در شهر نویسنده است؟", answer: "تابستان — Die Tage sind am laengsten." },
        { question: "چرا قیمت‌های رستوران مورد علاقه خوب است؟", answer: "قیمت‌ها ارزان‌تر از رستوران‌های دیگر است (guenstiger)." }
      ]
    }
  ],

  writing: [
    {
      title: "مقایسه دو شهر/کشور",
      prompt: "دو شهر یا دو کشور را با هم مقایسه کنید. از Komparativ و Superlativ استفاده کنید.",
      steps: [
        { title: "معرفی دو مورد", text: "دو شهر/کشور را نام ببرید.", example: { de: "Ich vergleiche Berlin und Wien.", fa: "من برلین و وین را مقایسه می‌کنم." } },
        { title: "مقایسه با Komparativ", text: "از ...als استفاده کنید.", example: { de: "Berlin ist groesser als Wien, aber Wien ist schoener.", fa: "برلین بزرگ‌تر از وین است، اما وین زیباتر است." } },
        { title: "برترین با Superlativ", text: "از am ...sten استفاده کنید.", example: { de: "Das Essen ist in Wien am besten.", fa: "غذا در وین بهترین است." } }
      ],
      modelAnswer: "Berlin und Wien sind beide schoene Staedte. Berlin ist groesser als Wien und hat mehr Einwohner. Aber Wien ist aelter und hat die schoensten Gebaeude. Das Essen ist in Wien am besten, besonders die Sachertorte. Ich finde, Wien ist gemuetlicher als Berlin, aber Berlin ist interessanter fuer junge Leute."
    }
  ],

  listening: [
    {
      title: "۱. آموزش Komparativ و Superlativ",
      source: "Deutschlernen — Komparativ und Superlativ",
      link: "https://www.youtube.com/watch?v=9s7UaGBXOxE",
      instructions: "۱. ویدیو را ببینید و قواعد را یادداشت کنید.\n۲. ۵ جمله مقایسه‌ای با صدای بلند بسازید.\n۳. Umlaut‌ها (a→ae, o→oe, u→ue) را تمرین کنید."
    }
  ],

  speaking: [
    {
      title: "تمرین مقایسه",
      pattern: "... ist groesser als ...\n... ist am schoensten.\nIch trinke lieber Tee als Kaffee.",
      exercise: "۵ چیز در زندگی خود را با هم مقایسه کنید. مثلاً: «غذای ایرانی خوشمزه‌تر از غذای آلمانی است» یا «تابستان بهترین فصل است.»"
    }
  ],

  cultureTip: "نکته جالب: در آلمان وقتی می‌خواهید بگویید «ترجیح می‌دهم» از lieber (ترجیح‌تر) استفاده می‌کنید. مثلاً Ich trinke lieber Tee یعنی «ترجیح می‌دهم چای بنوشم». این خیلی رایج‌تر از Ich bevorzuge Tee است. همچنین در مکالمه روزمره، از am besten برای توصیه استفاده می‌کنند: Am besten kommst du um 8 Uhr. (بهتره ساعت ۸ بیایی.)",

  examData: {
    questions: [
      { question: "Komparativ فعل «groß» چیست؟", options: ["großer", "größer", "größerer", "grössest"], answer: 1 },
      { question: "Superlativ فعل «gut» چیست؟", options: ["am gutsten", "am bessersten", "am besten", "am gutesten"], answer: 2 },
      { question: "کدام جمله درست است؟", options: ["Berlin ist mehr groß als München.", "Berlin ist größer als München.", "Berlin ist großter als München."], answer: 1 },
      { question: "«Ich esse lieber Pizza» یعنی...", options: ["من پیتزا نمی‌خورم", "ترجیح می‌دهم پیتزا بخورم", "من پیتزای زیاد می‌خورم"], answer: 1 },
      { question: "Superlativ «schön» چیست؟", options: ["am schönersten", "am schönsten", "am schonten"], answer: 1 },
      { question: "کدام صفت Umlaut نمی‌گیرد؟", options: ["alt", "groß", "schnell", "jung"], answer: 2 },
      { question: "«Das ist das beste Restaurant» — این چه نوع مقایسه‌ای است؟", options: ["Komparativ", "Superlativ", "Positiv"], answer: 1 },
      { question: "کدام جمله Superlativ را درست نشان می‌دهد؟", options: ["Das ist das billiger Restaurant.", "Das ist das billigste Restaurant.", "Das ist das am billigste Restaurant."], answer: 1 }
    ]
  }
};
