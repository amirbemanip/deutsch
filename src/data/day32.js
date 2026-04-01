export const day32Data = {
  title: "Ø±ÙˆØ² Û³Û²: Ù…Ø³Ú©Ù† - Ø§Ø¬Ø§Ø±Ù‡ØŒ ØªÙˆØµÛŒÙ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ùˆ Ù‡Ù…Ø³Ø§ÛŒÙ‡â€ŒÙ‡Ø§",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ ÙˆØ§Ú˜Ú¯Ø§Ù† Ù…Ø±Ø¨ÙˆØ· Ø¨Ù‡ Ø®Ø§Ù†Ù‡ Ùˆ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù†ØŒ Ø§Ø¬Ø§Ø±Ù‡ Ù…Ø³Ú©Ù†ØŒ ØªÙˆØµÛŒÙ Ø§ØªØ§Ù‚â€ŒÙ‡Ø§ Ùˆ ØµØ­Ø¨Øª Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ù‡Ù…Ø³Ø§ÛŒÙ‡â€ŒÙ‡Ø§",

  grammarData: {
    subtitle: "ØªÙˆØµÛŒÙ Ø®Ø§Ù†Ù‡ Ùˆ Ù…ÙˆÙ‚Ø¹ÛŒØª Ù…Ú©Ø§Ù†ÛŒ Ø¨Ø§ Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡",
    content: [
      {
        type: "text",
        title: "Ú†Ú¯ÙˆÙ†Ù‡ Ø®Ø§Ù†Ù‡ Ùˆ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø±Ø§ ØªÙˆØµÛŒÙ Ú©Ù†ÛŒÙ…ØŸ",
        text: "Ø¨Ø±Ø§ÛŒ ØªÙˆØµÛŒÙ Ø®Ø§Ù†Ù‡ Ø§Ø² Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡ Ù…Ú©Ø§Ù†ÛŒ Ù…Ø«ل in (Ø¯Ø±), neben (Ú©Ù†Ø§Ø±), gegenÃ¼ber (Ø±ÙˆØ¨Ø±Ùˆ), zwischen (Ø¨ÛŒÙ†), Ã¼ber (Ø±ÙˆÛŒ) Ùˆ unter (Ø²ÛŒØ±) Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…. Ù‡Ù…Ú†Ù†ÛŒÙ† ÙØ¹ل es gibt (ÙˆØ¬ÙˆØ¯ Ø¯Ø§Ø±Ø¯) Ø¨Ø³ÛŒØ§Ø± Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ Ø§Ø³Øª."
      },
      {
        type: "table",
        title: "Ø§ØªØ§Ù‚â€ŒÙ‡Ø§ Ùˆ Ø¨Ø®Ø´â€ŒÙ‡Ø§ÛŒ Ø®Ø§Ù†Ù‡ (RÃ¤ume)",
        rows: [
          { de: "das Wohnzimmer", fa: "Ø§ØªØ§Ù‚ Ù†Ø´ÛŒÙ…Ù†" },
          { de: "das Schlafzimmer", fa: "Ø§ØªØ§Ù‚ Ø®ÙˆØ§Ø¨" },
          { de: "die KÃ¼che", fa: "Ø¢Ø´Ù¾Ø²Ø®Ø§Ù†Ù‡" },
          { de: "das Badezimmer", fa: "Ø­Ù…Ø§Ù… / Ø¯Ø³ØªØ´ÙˆÛŒÛŒ" },
          { de: "das Esszimmer", fa: "Ø§ØªØ§Ù‚ ØºØ°Ø§Ø®ÙˆØ±ÛŒ" },
          { de: "das Kinderzimmer", fa: "Ø§ØªØ§Ù‚ Ø¨Ú†Ù‡â€ŒÙ‡Ø§" },
          { de: "der Flur / der Gang", fa: "Ø±Ø§Ù‡Ø±Ùˆ" },
          { de: "der Balkon", fa: "Ø¨Ø§لÚ©Ù†" },
          { de: "der Keller", fa: "Ø²ÛŒØ±Ø²Ù…ÛŒÙ†" },
          { de: "der Dachboden", fa: "Ø²ÛŒØ±Ø´ÛŒØ±ÙˆØ§Ù†ÛŒ" }
        ]
      },
      {
        type: "examples",
        title: "ØªÙˆØµÛŒÙ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù†",
        items: [
          { de: "Meine Wohnung hat drei Zimmer und eine KÃ¼che.", fa: "Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ù…Ù† Ø³Ù‡ Ø§ØªØ§Ù‚ Ùˆ ÛŒÚ© Ø¢Ø´Ù¾Ø²Ø®Ø§Ù†Ù‡ Ø¯Ø§Ø±Ø¯." },
          { de: "Das Wohnzimmer ist neben der KÃ¼che.", fa: "Ø§ØªØ§Ù‚ Ù†Ø´ÛŒÙ…Ù† Ú©Ù†Ø§Ø± Ø¢Ø´Ù¾Ø²Ø®Ø§Ù†Ù‡ Ø§Ø³Øª." },
          { de: "Im Badezimmer gibt es eine Dusche und eine Badewanne.", fa: "Ø¯Ø± Ø­Ù…Ø§Ù… ÛŒÚ© Ø¯ÙˆØ´ Ùˆ ÛŒÚ© ÙˆØ§Ù† ÙˆØ¬ÙˆØ¯ Ø¯Ø§Ø±Ø¯." },
          { de: "Die Wohnung liegt im zweiten Stock.", fa: "Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø¯Ø± Ø·Ø¨Ù‚Ù‡ Ø¯ÙˆÙ… Ø§Ø³Øª." },
          { de: "Wie groÃŸ ist die Wohnung? Sie ist 80 Quadratmeter groÃŸ.", fa: "Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ú†Ù‚Ø¯Ø± Ø¨Ø²Ø±Ú¯ Ø§Ø³ØªØŸ Û¸Û° Ù…ØªØ± Ù…Ø±Ø¨Ø¹ Ø§Ø³Øª." },
          { de: "Die Miete betrÃ¤gt 700 Euro warm.", fa: "Ø§Ø¬Ø§Ø±Ù‡ Ø¨Ø§ Ù‡Ø²ÛŒÙ†Ù‡â€ŒÙ‡Ø§ Û·Û°Û° ÛŒÙˆØ±Ùˆ Ø§Ø³Øª." }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…!",
        text: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ØŒ Ø§Ø¬Ø§Ø±Ù‡ Ø¨Ù‡ Ø¯Ùˆ ØµÙˆØ±Øª kalt (ÙÙ‚Ø· Ø§Ø¬Ø§Ø±Ù‡ Ø¨Ø¯ÙˆÙ† Ù‡Ø²ÛŒÙ†Ù‡â€ŒÙ‡Ø§) Ùˆ warm (Ø§Ø¬Ø§Ø±Ù‡ Ø¨Ø§ Ù‡Ø²ÛŒÙ†Ù‡â€ŒÙ‡Ø§ÛŒ Ø¢Ø¨ØŒ Ø¨Ø±Ù‚ Ùˆ Ú¯Ø±Ù…Ø§ÛŒØ´) Ù…Ø­Ø§Ø³Ø¨Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯. Ù…Ø¹Ù…ÙˆلØ§Ù‹ warmmiete Ø¨ÛŒØ´ØªØ± Ø§Ø² kaltmiete Ø§Ø³Øª."
      },
      {
        type: "interactive_quiz",
        title: "ØªØ³Øª Ù…Ø³Ú©Ù†",
        questions: [
          {
            question: "Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø´Ù…Ø§ Û·Ûµ Ù…ØªØ± Ø§Ø³Øª. Ú†Ú¯ÙˆÙ†Ù‡ Ø¨Ú¯ÙˆÛŒÛŒØ¯ØŸ",
            questionDe: "Wie groÃŸ ist Ihre Wohnung?",
            options: [
              { text: "Meine Wohnung ist 75 Quadratmeter groÃŸ.", isCorrect: true },
              { text: "Meine Wohnung hat 75 Meter.", isCorrect: false },
              { text: "Meine Wohnung ist 75 Meter.", isCorrect: false },
              { text: "75 Quadratmeter Wohnung.", isCorrect: false }
            ],
            explanation: "Ø¹Ø¨Ø§Ø±Øª ØµØ­ÛŒØ­: ... Quadratmeter groÃŸ (Ø¨Ù‡ Ø§Ù†Ø¯Ø§Ø²Ù‡ ... Ù…ØªØ± Ù…Ø±Ø¨Ø¹)."
          },
          {
            question: "Ø§Ø¬Ø§Ø±Ù‡ Ù…Ø§Ù‡Ø§Ù†Ù‡ Ú†Ù‚Ø¯Ø± Ø§Ø³ØªØŸ",
            questionDe: "Wie sagt man auf Deutsch?",
            options: [
              { text: "Wie kostet die Miete?", isCorrect: false },
              { text: "Wie viel kostet die Miete?", isCorrect: true },
              { text: "Wie viel ist die Miete?", isCorrect: false },
              { text: "Was ist die Miete?", isCorrect: false }
            ],
            explanation: "Ø³Ø¤Ø§ل ØµØ­ÛŒØ­: Wie viel kostet die Miete? (Ø§Ø¬Ø§Ø±Ù‡ Ú†Ù‚Ø¯Ø± Ø§Ø³ØªØŸ)"
          },
          {
            question: "Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø¯Ø± Ø·Ø¨Ù‚Ù‡ Ø³ÙˆÙ…:",
            questionDe: "Im welchen Stock ist die Wohnung?",
            options: [
              { text: "in drei Stock", isCorrect: false },
              { text: "im dritten Stock", isCorrect: true },
              { text: "auf drei Stock", isCorrect: false },
              { text: "im dritte Stock", isCorrect: false }
            ],
            explanation: "ØµØ­ÛŒØ­: im dritten Stock (Ø¯Ø± Ø·Ø¨Ù‚Ù‡ Ø³ÙˆÙ…). Ø´Ù…Ø§Ø±Ø´ Ø·Ø¨Ù‚Ø§Øª Ø¨Ø§ Ordinalzahl + im + Stock."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÚ©Ù…ÛŒل Ø¬Ù…لØ§Øª Ù…Ø³Ú©Ù†",
        instruction: "Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø±Ø§ Ø¨Ø§ Ú©لÙ…Ù‡ Ù…Ù†Ø§Ø³Ø¨ Ù¾Ø± Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Meine Wohnung hat drei ___. (Ø§ØªØ§Ù‚)", answer: "Zimmer", hint: "Ø§ØªØ§Ù‚ = das Zimmer" },
          { sentence: "Die Wohnung liegt im zweiten ___. (Ø·Ø¨Ù‚Ù‡)", answer: "Stock", hint: "Ø·Ø¨Ù‚Ù‡ = der Stock / Stockwerk" },
          { sentence: "Die ___ betrÃ¤gt 650 Euro. (Ø§Ø¬Ø§Ø±Ù‡)", answer: "Miete", hint: "Ø§Ø¬Ø§Ø±Ù‡ = die Miete" },
          { sentence: "Im ___ gibt es eine Dusche. (Ø­Ù…Ø§Ù…)", answer: "Badezimmer", hint: "Ø­Ù…Ø§Ù… = das Badezimmer" },
          { sentence: "Die Wohnung ist 70 ___ groÃŸ. (Ù…ØªØ± Ù…Ø±Ø¨Ø¹)", answer: "Quadratmeter", hint: "Ù…ØªØ± Ù…Ø±Ø¨Ø¹ = Quadratmeter" },
          { sentence: "Der ___ ist sehr sonnig. (Ø¨Ø§لÚ©Ù†)", answer: "Balkon", hint: "Ø¨Ø§لÚ©Ù† = der Balkon" },
          { sentence: "___ ist neben der KÃ¼che. (Ø§ØªØ§Ù‚ Ù†Ø´ÛŒÙ…Ù†)", answer: "Das Wohnzimmer", hint: "Ø§ØªØ§Ù‚ Ù†Ø´ÛŒÙ…Ù† = das Wohnzimmer" },
          { sentence: "Ich wohne im ___ Stock. (Ø§Ùˆل)", answer: "ersten", hint: "Ø·Ø¨Ù‚Ù‡ Ø§Ùˆل = im ersten Stock" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "Ø®Ø§Ù†Ù‡ Ùˆ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† (Haus und Wohnung)",
        words: [
          { de: "die Wohnung", fa: "Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù†", article: "die", plural: "die Wohnungen", examples: [{ de: "Ich suche eine neue Wohnung.", fa: "Ù…Ù† Ø¯Ù†Ø¨Ø§ل Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø¬Ø¯ÛŒØ¯ Ù‡Ø³ØªÙ…." }] },
          { de: "das Haus", fa: "Ø®Ø§Ù†Ù‡", article: "das", plural: "die HÃ¤user", examples: [{ de: "Das Haus hat einen Garten.", fa: "Ø®Ø§Ù†Ù‡ Ø­ÛŒØ§Ø· Ø¯Ø§Ø±Ø¯." }] },
          { de: "die Miete", fa: "Ø§Ø¬Ø§Ø±Ù‡", article: "die", plural: "die Mieten", examples: [{ de: "Die Miete ist sehr hoch.", fa: "Ø§Ø¬Ø§Ø±Ù‡ Ø®ÛŒلÛŒ Ø¨Ø§لØ§Ø³Øª." }] },
          { de: "der Vermieter", fa: "ØµØ§Ø­Ø¨Ø®Ø§Ù†Ù‡ (Ù…Ø±Ø¯)", article: "der", plural: "die Vermieter", examples: [{ de: "Der Vermieter ist freundlich.", fa: "ØµØ§Ø­Ø¨Ø®Ø§Ù†Ù‡ Ù…Ù‡Ø±Ø¨Ø§Ù† Ø§Ø³Øª." }] },
          { de: "der Nachbar", fa: "Ù‡Ù…Ø³Ø§ÛŒÙ‡", article: "der", plural: "die Nachbarn", examples: [{ de: "Meine Nachbarn sind sehr nett.", fa: "Ù‡Ù…Ø³Ø§ÛŒÙ‡â€ŒÙ‡Ø§ÛŒ Ù…Ù† Ø®ÛŒلÛŒ Ù…Ù‡Ø±Ø¨Ø§Ù† Ù‡Ø³ØªÙ†Ø¯." }] },
          { de: "der Mieter", fa: "Ù…Ø³ØªØ£Ø¬Ø±", article: "der", plural: "die Mieter", examples: [{ de: "Ich bin der Mieter dieser Wohnung.", fa: "Ù…Ù† Ù…Ø³ØªØ£Ø¬Ø± Ø§ÛŒÙ† Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ù‡Ø³ØªÙ…." }] }
        ]
      },
      {
        title: "Ù…Ø¨لÙ…Ø§Ù† Ùˆ ÙˆØ³Ø§ÛŒل (MÃ¶bel)",
        words: [
          { de: "das Sofa", fa: "Ù…Ø¨ل", article: "das", plural: "die Sofas", examples: [{ de: "Das Sofa steht im Wohnzimmer.", fa: "Ù…Ø¨ل Ø¯Ø± Ø§ØªØ§Ù‚ Ù†Ø´ÛŒÙ…Ù† Ø§Ø³Øª." }] },
          { de: "der Tisch", fa: "Ù…ÛŒØ²", article: "der", plural: "die Tische", examples: [{ de: "Der Tisch ist aus Holz.", fa: "Ù…ÛŒØ² Ø§Ø² Ú†ÙˆØ¨ Ø§Ø³Øª." }] },
          { de: "das Bett", fa: "ØªØ®Øª Ø®ÙˆØ§Ø¨", article: "das", plural: "die Betten", examples: [{ de: "Das Bett ist sehr bequem.", fa: "ØªØ®Øª Ø®ÙˆØ§Ø¨ Ø®ÛŒلÛŒ Ø±Ø§Ø­Øª Ø§Ø³Øª." }] },
          { de: "der Schrank", fa: "Ú©Ù…Ø¯", article: "der", plural: "die SchrÃ¤nke", examples: [{ de: "Die Kleidung ist im Schrank.", fa: "لØ¨Ø§Ø³â€ŒÙ‡Ø§ Ø¯Ø± Ú©Ù…Ø¯ Ù‡Ø³ØªÙ†Ø¯." }] },
          { de: "der KÃ¼hlschrank", fa: "ÛŒØ®Ú†Ø§ل", article: "der", plural: "die KÃ¼hlschrÃ¤nke", examples: [{ de: "Im KÃ¼hlschrank ist Milch.", fa: "Ø¯Ø± ÛŒØ®Ú†Ø§ل Ø´ÛŒØ± Ù‡Ø³Øª." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Eine Wohnungssuche\n\nHallo, ich bin Ali. Ich suche eine Wohnung in Berlin. Gestern habe ich eine Wohnung besichtigt. Sie liegt im dritten Stock und hat drei Zimmer, eine KÃ¼che und ein Badezimmer. Die Wohnung ist 75 Quadratmeter groÃŸ und hat einen Balkon.\nDie Warmmiete betrÃ¤gt 800 Euro. Das Wohnzimmer ist groÃŸ und hell. Die KÃ¼che hat einen KÃ¼hlschrank und einen Herd. Das Schlafzimmer ist neben dem Badezimmer. Der Vermieter ist ein alter Mann, aber sehr freundlich.\nDie Nachbarn sind auch nett. Im Erdgeschoss wohnt eine Familie mit zwei Kindern. Ich glaube, die Wohnung gefÃ¤llt mir. Ich mÃ¶chte sie mieten.",
      questions: [
        { question: "Ø¹لÛŒ Ú©Ø¬Ø§ Ø¯Ù†Ø¨Ø§ل Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø§Ø³ØªØŸ", answer: "Ø¯Ø± Ø¨Ø±لÛŒÙ†." },
        { question: "Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ú†Ù†Ø¯ Ø§ØªØ§Ù‚ Ùˆ Ú†Ù†Ø¯ Ù…ØªØ± Ø§Ø³ØªØŸ", answer: "Ø³Ù‡ Ø§ØªØ§Ù‚ØŒ Û·Ûµ Ù…ØªØ± Ù…Ø±Ø¨Ø¹." },
        { question: "Ø§Ø¬Ø§Ø±Ù‡ Ú¯Ø±Ù… (Warmmiete) Ú†Ù‚Ø¯Ø± Ø§Ø³ØªØŸ", answer: "Û¸Û°Û° ÛŒÙˆØ±Ùˆ." },
        { question: "Ù‡Ù…Ø³Ø§ÛŒÙ‡ Ø·Ø¨Ù‚Ù‡ Ù‡Ù…Ú©Ù Ú†Ù‡ Ú©Ø³Ø§Ù†ÛŒ Ù‡Ø³ØªÙ†Ø¯ØŸ", answer: "ÛŒÚ© Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ø¨Ø§ Ø¯Ùˆ Ø¨Ú†Ù‡." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù†",
      prompt: "ÛŒÚ© Ù¾Ø§Ø±Ø§Ú¯Ø±Ø§Ù (Û¶ Ø®Ø·) Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø®ÙˆØ¯ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯. Ú†Ù†Ø¯ Ø§ØªØ§Ù‚ Ø¯Ø§Ø±Ø¯ØŒ Ú†Ù‚Ø¯Ø± Ø¨Ø²Ø±Ú¯ Ø§Ø³ØªØŒ Ø§Ø¬Ø§Ø±Ù‡ Ú†Ù‚Ø¯Ø± Ø§Ø³Øª.",
      steps: [
        { title: "Ù…Ø¹Ø±ÙÛŒ", text: "Ø¨Ú¯ÙˆÛŒÛŒØ¯ Ú©Ø¬Ø§ Ø²Ù†Ø¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯.", example: { de: "Ich wohne in einer kleinen Wohnung.", fa: "Ù…Ù† Ø¯Ø± ÛŒÚ© Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ú©ÙˆÚ†Ú© Ø²Ù†Ø¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ù…." } },
        { title: "ØªÙˆØµÛŒÙ", text: "Ø§ØªØ§Ù‚â€ŒÙ‡Ø§ Ùˆ Ø§Ù…Ú©Ø§Ù†Ø§Øª.", example: { de: "Die Wohnung hat zwei Zimmer und eine KÃ¼che.", fa: "Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø¯Ùˆ Ø§ØªØ§Ù‚ Ùˆ ÛŒÚ© Ø¢Ø´Ù¾Ø²Ø®Ø§Ù†Ù‡ Ø¯Ø§Ø±Ø¯." } },
        { title: "Ù‡Ø²ÛŒÙ†Ù‡ Ùˆ Ù†Ø¸Ø±", text: "Ø§Ø¬Ø§Ø±Ù‡ Ùˆ Ù†Ø¸Ø± Ú©لÛŒ.", example: { de: "Die Miete ist gÃ¼nstig und die Nachbarn sind nett.", fa: "Ø§Ø¬Ø§Ø±Ù‡ Ø§Ø±Ø²Ø§Ù† Ø§Ø³Øª Ùˆ Ù‡Ù…Ø³Ø§ÛŒÙ‡â€ŒÙ‡Ø§ Ù…Ù‡Ø±Ø¨Ø§Ù† Ù‡Ø³ØªÙ†Ø¯." } }
      ],
      modelAnswer: "Ich wohne in einer kleinen Wohnung im zweiten Stock. Die Wohnung hat zwei Zimmer, eine KÃ¼che und ein Badezimmer. Sie ist 55 Quadratmeter groÃŸ. Das Wohnzimmer ist hell und hat ein groÃŸes Fenster. Die KÃ¼che ist klein, aber praktisch. Ich habe auch einen kleinen Balkon. Die Warmmiete betrÃ¤gt 500 Euro. Meine Nachbarn sind sehr freundlich. Ich bin zufrieden mit meiner Wohnung."
    }
  ],

  listening: [
    {
      title: "Ú¯ÙˆØ´ Ø¯Ø§Ø¯Ù†: Ø¨Ø§Ø²Ø¯ÛŒØ¯ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù†",
      source: "Deutsche Welle",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "Ø¨Ù‡ Ù…Ú©Ø§لÙ…Ø§Øª Ù…Ø±Ø¨ÙˆØ· Ø¨Ù‡ Ø§Ø¬Ø§Ø±Ù‡ Ùˆ Ø¨Ø§Ø²Ø¯ÛŒØ¯ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯. Ø§Ù†Ø¯Ø§Ø²Ù‡ØŒ ØªØ¹Ø¯Ø§Ø¯ Ø§ØªØ§Ù‚â€ŒÙ‡Ø§ Ùˆ Ø§Ø¬Ø§Ø±Ù‡ Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
    }
  ],

  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ú¯ÙØªØ§Ø±ÛŒ: ØªÙˆØµÛŒÙ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù†",
      pattern: "Meine Wohnung hat ... Sie liegt im ... Stock. Die Miete betrÃ¤gt ...",
      exercise: "Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯: Ú†Ù†Ø¯ Ø§ØªØ§Ù‚ØŒ Ú†Ù†Ø¯ Ù…ØªØ±ØŒ Ú†Ù‡ Ø§Ù…Ú©Ø§Ù†Ø§ØªÛŒ Ø¯Ø§Ø±Ø¯ Ùˆ Ø§Ø¬Ø§Ø±Ù‡ Ú†Ù‚Ø¯Ø± Ø§Ø³Øª."
    }
  ],

  cultureTip: "Ù¾ÛŒØ¯Ø§ Ú©Ø±Ø¯Ù† Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø¯Ø± Ø´Ù‡Ø±Ù‡Ø§ÛŒ Ø¨Ø²Ø±Ú¯ Ø¢لÙ…Ø§Ù† (Ø¨Ù‡ Ø®ØµÙˆØµ Ù…ÙˆÙ†ÛŒØ®ØŒ Ø¨Ø±لÛŒÙ† Ùˆ Ù‡Ø§Ù…Ø¨ÙˆØ±Ú¯) Ø¨Ø³ÛŒØ§Ø± Ø³Ø®Øª Ùˆ Ø±Ù‚Ø§Ø¨ØªÛŒ Ø§Ø³Øª. Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø¨Ø±Ø§ÛŒ Ø§Ø¬Ø§Ø±Ù‡ Ø¨Ø§ÛŒØ¯ Ù…Ø¯Ø§Ø±Ú© Ø²ÛŒØ§Ø¯ÛŒ Ø§Ø±Ø§Ø¦Ù‡ Ø¯Ù‡ÛŒØ¯: Ù‚Ø±Ø§Ø±Ø¯Ø§Ø¯ Ú©Ø§Ø±ØŒ ÙÛŒØ´ Ø­Ù‚ÙˆÙ‚ÛŒ Ùˆ Schufa-Auskunft (Ú¯Ø²Ø§Ø±Ø´ Ø§Ø¹ØªØ¨Ø§Ø±ÛŒ). Ù‡Ù…Ú†Ù†ÛŒÙ† Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø¨Ø§ÛŒØ¯ Ø³Ù‡ Ù…Ø§Ù‡ Ø§Ø¬Ø§Ø±Ù‡ Ø¨Ù‡ Ø¹Ù†ÙˆØ§Ù† ÙˆØ¯ÛŒØ¹Ù‡ (Kaution) Ù¾Ø±Ø¯Ø§Ø®Øª Ú©Ù†ÛŒØ¯.",

  examData: {
    questions: [
      { question: "Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ú†Ù†Ø¯ Ù…ØªØ± Ø§Ø³ØªØŸ", options: ["Wie viel kostet die Wohnung?", "Wie groÃŸ ist die Wohnung?", "Wo ist die Wohnung?", "Wann ist die Wohnung frei?"], answer: 1 },
      { question: "Ø§ØªØ§Ù‚ Ù†Ø´ÛŒÙ…Ù†:", options: ["das Schlafzimmer", "das Badezimmer", "das Wohnzimmer", "die KÃ¼che"], answer: 2 },
      { question: "Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø¯Ø± Ø·Ø¨Ù‚Ù‡ Ø¯ÙˆÙ…:", options: ["im zweiten Stock", "in zwei Stock", "auf zwei Stock", "im zweite Stock"], answer: 0 },
      { question: "Ø§Ø¬Ø§Ø±Ù‡ Ú¯Ø±Ù…:", options: ["Kaltmiete", "Warmmiete", "Heizmiete", "Wohnmiete"], answer: 1 },
      { question: "ØµØ§Ø­Ø¨Ø®Ø§Ù†Ù‡:", options: ["der Mieter", "der Vermieter", "der Nachbar", "der Gast"], answer: 1 },
      { question: "Ø¨Ø§لÚ©Ù†:", options: ["der Keller", "der Balkon", "der Dachboden", "der Garten"], answer: 1 },
      { question: "Ù…Ø³ØªØ£Ø¬Ø±:", options: ["der Vermieter", "der Mieter", "der Nachbar", "der Besitzer"], answer: 1 },
      { question: "Ø¢Ø´Ù¾Ø²Ø®Ø§Ù†Ù‡:", options: ["das Badezimmer", "die KÃ¼che", "das Schlafzimmer", "der Flur"], answer: 1 },
      { question: "Ù…ØªØ± Ù…Ø±Ø¨Ø¹:", options: ["Quadratmeter", "Kilometer", "Zentimeter", "Millimeter"], answer: 0 },
      { question: "Ù‡Ù…Ø³Ø§ÛŒÙ‡:", options: ["der Freund", "der Gast", "der Nachbar", "der Kollege"], answer: 2 }
    ]
  }
};
