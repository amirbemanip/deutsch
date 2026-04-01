export const day27Data = {
  title: "Ø±ÙˆØ² Û²Û·: Ø­Ø§لØª Ù…ÙØ¹ÙˆلÛŒ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… (Dativ)",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ ØªØºÛŒÛŒØ± Ø­Ø±ÙˆÙ ØªØ¹Ø±ÛŒÙ Ùˆ Ø§Ø³Ù…â€ŒÙ‡Ø§ Ø¯Ø± Ø­Ø§لØª Dativ Ùˆ Ú©Ø§Ø±Ø¨Ø±Ø¯ Ø¢Ù† Ø¯Ø± Ø¬Ù…لØ§Øª Ø±ÙˆØ²Ù…Ø±Ù‡",

  grammarData: {
    subtitle: "Ø­Ø§لØª Dativ Ø¯Ø± Ø²Ø¨Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒ",
    content: [
      {
        type: "text",
        title: "Dativ Ú†ÛŒØ³ØªØŸ",
        text: "Ø­Ø§لØª Dativ (Ù…ÙØ¹ÙˆلÛŒ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ…) Ù†Ø´Ø§Ù† Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ Ú©Ø§Ø±ÛŒ Ø¨Ù‡ Ù†ÙØ¹ ÛŒØ§ Ø¶Ø±Ø± Ú†Ù‡ Ú©Ø³ÛŒ Ø§Ù†Ø¬Ø§Ù… Ù…ÛŒâ€ŒØ´ÙˆØ¯. Ø¨Ù‡ Ø³ÙˆØ§ل Wem? (Ø¨Ø±Ø§ÛŒ Ú†Ù‡ Ú©Ø³ÛŒØŸ) Ù¾Ø§Ø³Ø® Ù…ÛŒâ€ŒØ¯Ù‡Ø¯. Ù…Ø«لØ§Ù‹: Ich gebe dem Mann ein Buch. (Ù…Ù† Ø¨Ù‡ Ø¢Ù† Ù…Ø±Ø¯ Ú©ØªØ§Ø¨ÛŒ Ù…ÛŒâ€ŒØ¯Ù‡Ù….) dem Mann Ù…ÙØ¹ÙˆلÛŒ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… Ø§Ø³Øª."
      },
      {
        type: "table",
        title: "ØªØºÛŒÛŒØ± Ø­Ø±ÙˆÙ ØªØ¹Ø±ÛŒÙ Ø¯Ø± Dativ",
        rows: [
          { de: "der â†’ dem", fa: "Ù…Ø°Ú©Ø±: der Mann â†’ dem Mann" },
          { de: "die â†’ der", fa: "Ù…Ø¤Ù†Ø«: die Frau â†’ der Frau" },
          { de: "das â†’ dem", fa: "Ø®Ù†Ø«ÛŒ: das Kind â†’ dem Kind" },
          { de: "die(pl) â†’ den + n", fa: "Ø¬Ù…Ø¹: die Kinder â†’ den Kindern" },
          { de: "ein â†’ einem", fa: "Ù†Ø§Ù…Ø¹ÛŒÙ† Ù…Ø°Ú©Ø±: ein Mann â†’ einem Mann" },
          { de: "eine â†’ einer", fa: "Ù†Ø§Ù…Ø¹ÛŒÙ† Ù…Ø¤Ù†Ø«: eine Frau â†’ einer Frau" },
          { de: "ein â†’ einem", fa: "Ù†Ø§Ù…Ø¹ÛŒÙ† Ø®Ù†Ø«ÛŒ: ein Kind â†’ einem Kind" },
          { de: "mein â†’ meinem/meiner", fa: "Ù…لÚ©ÛŒ: mein Bruder â†’ meinem Bruder" }
        ]
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ",
        items: [
          { de: "Ich gebe dem Lehrer die Hausaufgaben.", fa: "Ù…Ù† ØªÚ©Ø§لÛŒÙ Ø±Ø§ Ø¨Ù‡ Ù…Ø¹لÙ… Ù…ÛŒâ€ŒØ¯Ù‡Ù…." },
          { de: "Sie schreibt ihrer Mutter einen Brief.", fa: "Ø§Ùˆ Ø¨Ù‡ Ù…Ø§Ø¯Ø±Ø´ Ù†Ø§Ù…Ù‡ Ù…ÛŒâ€ŒÙ†ÙˆÛŒØ³Ø¯." },
          { de: "Er hilft den Studenten.", fa: "Ø§Ùˆ Ø¨Ù‡ Ø¯Ø§Ù†Ø´Ø¬ÙˆÛŒØ§Ù† Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
          { de: "Wir danken dem Arzt fÃ¼r die Behandlung.", fa: "Ù…Ø§ Ø§Ø² Ù¾Ø²Ø´Ú© Ø¨Ø±Ø§ÛŒ Ø¯Ø±Ù…Ø§Ù† ØªØ´Ú©Ø± Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…." },
          { de: "Gib mir bitte das Salz!", fa: "لØ·ÙØ§Ù‹ Ù†Ù…Ú© Ø±Ø§ Ø¨Ù‡ Ù…Ù† Ø¨Ø¯Ù‡!" },
          { de: "Das Geschenk ist fÃ¼r meiner Tochter.", fa: "Ø§ÛŒÙ† Ù‡Ø¯ÛŒÙ‡ Ø¨Ø±Ø§ÛŒ Ø¯Ø®ØªØ±Ù… Ø§Ø³Øª." },
          { de: "Ich erzÃ¤hle dem Kind eine Geschichte.", fa: "Ù…Ù† Ø¨Ø±Ø§ÛŒ Ú©ÙˆØ¯Ú© Ø¯Ø§Ø³ØªØ§Ù†ÛŒ ØªØ¹Ø±ÛŒÙ Ù…ÛŒâ€ŒÚ©Ù†Ù…." }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…!",
        text: "Ø¯Ø± Ø¬Ù…Ø¹ Ø¨Ø§ Dativ Ø­ØªÙ…Ø§Ù‹ n Ø§Ø¶Ø§ÙÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: den Kinder-n, den Frau-en (Ø²Ù†Ø§Ù†). Ø§ÛŒÙ† Ù‚Ø§Ù†ÙˆÙ† Ø¨Ø±Ø§ÛŒ Ù‡Ù…Ù‡ Ø§Ø³Ù…â€ŒÙ‡Ø§ÛŒ Ø¬Ù…Ø¹ Ø¯Ø± Dativ ØµØ¯Ù‚ Ù…ÛŒâ€ŒÚ©Ù†Ø¯. Ù‡Ù…Ú†Ù†ÛŒÙ† Ø¶Ù…Ø§ÛŒØ± Ù…ÙØ¹ÙˆلÛŒ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ…: mir, dir, ihm, ihr, uns, euch, ihnen Ø±Ø§ Ø­ÙØ¸ Ú©Ù†ÛŒØ¯."
      },
      {
        type: "interactive_quiz",
        title: "ØªØ³Øª ØªØºÛŒÛŒØ± Ø­Ø±ÙˆÙ ØªØ¹Ø±ÛŒÙ",
        questions: [
          {
            question: "Ú©Ø¯Ø§Ù… Ø´Ú©ل ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ Ich gebe ___ Mann das Buch.",
            questionDe: "Ich gebe ___ Mann das Buch.",
            options: [
              { text: "dem", isCorrect: true },
              { text: "den", isCorrect: false },
              { text: "der", isCorrect: false },
              { text: "des", isCorrect: false }
            ],
            explanation: "Ú†ÙˆÙ† Mann Ù…Ø°Ú©Ø± Ø§Ø³Øª Ùˆ Ø¯Ø± Ø­Ø§لØª Dativ Ù‚Ø±Ø§Ø± Ø¯Ø§Ø±Ø¯ØŒ Ø­Ø±Ù ØªØ¹Ø±ÛŒÙ dem Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Ø´Ú©ل ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ Ich helfe ___ Kinder.",
            questionDe: "Ich helfe ___ Kinder.",
            options: [
              { text: "den Kinder", isCorrect: false },
              { text: "den Kinder-n", isCorrect: true },
              { text: "der Kinder", isCorrect: false },
              { text: "dem Kinder", isCorrect: false }
            ],
            explanation: "Ú†ÙˆÙ† Kinder Ø¬Ù…Ø¹ Ø§Ø³Øª Ùˆ Ø¯Ø± Dativ Ù‚Ø±Ø§Ø± Ø¯Ø§Ø±Ø¯ØŒ den + n Ø§Ø¶Ø§ÙÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: den Kindern."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Ø´Ú©ل ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ Sie schreibt ___ Freundin einen Brief.",
            questionDe: "Sie schreibt ___ Freundin einen Brief.",
            options: [
              { text: "ihrer", isCorrect: true },
              { text: "ihrem", isCorrect: false },
              { text: "ihren", isCorrect: false },
              { text: "ihr", isCorrect: false }
            ],
            explanation: "Freundin Ù…Ø¤Ù†Ø« Ø§Ø³Øª Ùˆ Ø¶Ù…ÛŒØ± Ù…لÚ©ÛŒ Ù…Ø·Ø§Ø¨Ù‚ Ø¨Ø§ Ø¢Ù† ihrer Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÚ©Ù…ÛŒل Ø¬Ù…لØ§Øª Ø¨Ø§ Dativ",
        instruction: "Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø±Ø§ Ø¨Ø§ Ø´Ú©ل ØµØ­ÛŒØ­ Dativ Ù¾Ø± Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Ich gebe ___ (der Lehrer) ein Geschenk.", answer: "dem Lehrer", hint: "der Lehrer Ø¯Ø± Dativ â†’ dem" },
          { sentence: "Sie hilft ___ (die Mutter) im Haushalt.", answer: "der Mutter", hint: "die Mutter Ø¯Ø± Dativ â†’ der" },
          { sentence: "Wir danken ___ (die Kinder) fÃ¼r ihre Hilfe.", answer: "den Kindern", hint: "die Kinder (Ø¬Ù…Ø¹) Ø¯Ø± Dativ â†’ den Kinder-n" },
          { sentence: "Er antwortet ___ (das MÃ¤dchen) nicht.", answer: "dem MÃ¤dchen", hint: "das MÃ¤dchen Ø¯Ø± Dativ â†’ dem" },
          { sentence: "Gib ___ (ich) bitte das Buch!", answer: "mir", hint: "pronoun ich Ø¯Ø± Dativ â†’ mir" },
          { sentence: "Das Spielzeug gehÃ¶rt ___ (die Tochter).", answer: "der Tochter", hint: "die Tochter Ø¯Ø± Dativ â†’ der" },
          { sentence: "Er hilft ___ (seine Freunde) bei der Arbeit.", answer: "seinen Freunden", hint: "seine Freunde (Ø¬Ù…Ø¹) Ø¯Ø± Dativ â†’ seinen Freunde-n" },
          { sentence: "Ich zeige ___ (der Gast) die Stadt.", answer: "dem Gast", hint: "der Gast Ø¯Ø± Dativ â†’ dem" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "Ø§ÙØ¹Ø§لÛŒ Ú©Ù‡ Ø¨Ø§ Dativ Ù…ÛŒâ€ŒØ¢ÛŒÙ†Ø¯",
        words: [
          { de: "geben", fa: "Ø¯Ø§Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich gebe ihm das Geld.", fa: "Ù…Ù† Ù¾Ùˆل Ø±Ø§ Ø¨Ù‡ Ø§Ùˆ Ù…ÛŒâ€ŒØ¯Ù‡Ù…." }] },
          { de: "helfen", fa: "Ú©Ù…Ú© Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Kannst du mir helfen?", fa: "Ø¢ÛŒØ§ Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒ Ø¨Ù‡ Ù…Ù† Ú©Ù…Ú© Ú©Ù†ÛŒØŸ" }] },
          { de: "danken", fa: "ØªØ´Ú©Ø± Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich danke dir fÃ¼r alles.", fa: "Ø§Ø² ØªÙˆ Ø¨Ø§Ø¨Øª Ù‡Ù…Ù‡ Ú†ÛŒØ² Ù…Ù…Ù†ÙˆÙ†Ù…." }] },
          { de: "gehÃ¶ren", fa: "ØªØ¹لÙ‚ Ø¯Ø§Ø´ØªÙ†", article: "-", plural: "-", examples: [{ de: "Das Buch gehÃ¶rt mir.", fa: "Ø§ÛŒÙ† Ú©ØªØ§Ø¨ Ø¨Ù‡ Ù…Ù† ØªØ¹لÙ‚ Ø¯Ø§Ø±Ø¯." }] },
          { de: "gefallen", fa: "Ø®ÙˆØ´ Ø¢Ù…Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Das gefÃ¤llt ihr sehr.", fa: "Ø§ÛŒÙ† Ø®ÛŒلÛŒ Ø¨Ù‡ Ø§Ùˆ Ø®ÙˆØ´ Ù…ÛŒâ€ŒØ¢ÛŒØ¯." }] },
          { de: "antworten", fa: "Ù¾Ø§Ø³Ø® Ø¯Ø§Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Er antwortet der Lehrerin.", fa: "Ø§Ùˆ Ø¨Ù‡ Ù…Ø¹لÙ… Ø²Ù† Ù¾Ø§Ø³Ø® Ù…ÛŒâ€ŒØ¯Ù‡Ø¯." }] },
          { de: "sagen", fa: "Ú¯ÙØªÙ†", article: "-", plural: "-", examples: [{ de: "Sag mir die Wahrheit!", fa: "Ø­Ù‚ÛŒÙ‚Øª Ø±Ø§ Ø¨Ù‡ Ù…Ù† Ø¨Ú¯Ùˆ!" }] },
          { de: "zeigen", fa: "Ù†Ø´Ø§Ù† Ø¯Ø§Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich zeige dir das Bild.", fa: "Ù…Ù† Ø¹Ú©Ø³ Ø±Ø§ Ø¨Ù‡ ØªÙˆ Ù†Ø´Ø§Ù† Ù…ÛŒâ€ŒØ¯Ù‡Ù…." }] }
        ]
      },
      {
        title: "Ø¶Ù…Ø§ÛŒØ± Ù…ÙØ¹ÙˆلÛŒ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ…",
        words: [
          { de: "mir", fa: "Ø¨Ù‡ Ù…Ù†", article: "-", plural: "-", examples: [{ de: "Gib mir das Buch!", fa: "Ú©ØªØ§Ø¨ Ø±Ø§ Ø¨Ù‡ Ù…Ù† Ø¨Ø¯Ù‡!" }] },
          { de: "dir", fa: "Ø¨Ù‡ ØªÙˆ", article: "-", plural: "-", examples: [{ de: "Ich helfe dir.", fa: "Ù…Ù† Ø¨Ù‡ ØªÙˆ Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ù…." }] },
          { de: "ihm", fa: "Ø¨Ù‡ Ø§Ùˆ (Ù…Ø°Ú©Ø±/Ø®Ù†Ø«ÛŒ)", article: "-", plural: "-", examples: [{ de: "Das gefÃ¤llt ihm.", fa: "Ø§ÛŒÙ† Ø¨Ù‡ Ø§Ùˆ Ø®ÙˆØ´ Ù…ÛŒâ€ŒØ¢ÛŒØ¯." }] },
          { de: "ihr", fa: "Ø¨Ù‡ Ø§Ùˆ (Ù…Ø¤Ù†Ø«)", article: "-", plural: "-", examples: [{ de: "Ich danke ihr.", fa: "Ù…Ù† Ø§Ø² Ø§Ùˆ Ù…Ù…Ù†ÙˆÙ†Ù…." }] },
          { de: "uns", fa: "Ø¨Ù‡ Ù…Ø§", article: "-", plural: "-", examples: [{ de: "Sie hilft uns.", fa: "Ø§Ùˆ Ø¨Ù‡ Ù…Ø§ Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "euch", fa: "Ø¨Ù‡ Ø´Ù…Ø§ (Ø¬Ù…Ø¹)", article: "-", plural: "-", examples: [{ de: "Ich antworte euch morgen.", fa: "ÙØ±Ø¯Ø§ Ø¨Ù‡ Ø´Ù…Ø§ Ù¾Ø§Ø³Ø® Ù…ÛŒâ€ŒØ¯Ù‡Ù…." }] },
          { de: "ihnen", fa: "Ø¨Ù‡ Ø¢Ù†â€ŒÙ‡Ø§", article: "-", plural: "-", examples: [{ de: "Das gehÃ¶rt ihnen.", fa: "Ø§ÛŒÙ† Ø¨Ù‡ Ø¢Ù†â€ŒÙ‡Ø§ ØªØ¹لÙ‚ Ø¯Ø§Ø±Ø¯." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Maria ist Lehrerin. Sie arbeitet in einer Schule. Jeden Morgen gibt sie den SchÃ¼lern die Hausaufgaben zurÃ¼ck. Dann erklÃ¤rt sie der Klasse eine neue Lektion. Die SchÃ¼ler helfen einander oft. Manchmal antwortet Maria den Eltern per E-Mail. Sie dankt den Eltern fÃ¼r ihre UnterstÃ¼tzung. Die Kinder gefallen der Lehrerin sehr, weil sie fleiÃŸig sind. Die Schule gehÃ¶rt der Stadt. Das gefÃ¤llt allen Lehrern, weil es eine moderne Schule ist.",
      questions: [
        { question: "Maria Ú†Ù‡ Ø´ØºلÛŒ Ø¯Ø§Ø±Ø¯ Ùˆ Ú©Ø¬Ø§ Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", answer: "Ø§Ùˆ Ù…Ø¹لÙ… Ø§Ø³Øª (Lehrerin) Ùˆ Ø¯Ø± ÛŒÚ© Ù…Ø¯Ø±Ø³Ù‡ (Schule) Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
        { question: "Ù‡Ø± ØµØ¨Ø­ Maria Ú†Ù‡ Ú©Ø§Ø±ÛŒ Ø§Ù†Ø¬Ø§Ù… Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ØŸ", answer: "Ø§Ùˆ ØªÚ©Ø§لÛŒÙ Ø±Ø§ Ø¨Ù‡ Ø¯Ø§Ù†Ø´â€ŒØ¢Ù…ÙˆØ²Ø§Ù† (SchÃ¼lern) Ø¨Ø±Ù…ÛŒâ€ŒÚ¯Ø±Ø¯Ø§Ù†Ø¯ Ùˆ Ø¯Ø±Ø³ Ø¬Ø¯ÛŒØ¯ÛŒ ØªÙˆØ¶ÛŒØ­ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯." },
        { question: "Ú†Ú¯ÙˆÙ†Ù‡ Maria Ø¨Ù‡ ÙˆØ§لØ¯ÛŒÙ† Ù¾Ø§Ø³Ø® Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ØŸ", answer: "Ø§Ø² Ø·Ø±ÛŒÙ‚ Ø§ÛŒÙ…ÛŒل (per E-Mail)." },
        { question: "Ù…Ø¯Ø±Ø³Ù‡ Ø¨Ù‡ Ú†Ù‡ Ú©Ø³ÛŒ ØªØ¹لÙ‚ Ø¯Ø§Ø±Ø¯ØŸ", answer: "Ø¨Ù‡ Ø´Ù‡Ø± (der Stadt)." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ø¨Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Dativ",
      prompt: "ÛŒÚ© Ù¾Ø§Ø±Ø§Ú¯Ø±Ø§Ù Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ú©Ù…Ú© Ú©Ø±Ø¯Ù† Ø¨Ù‡ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡â€ŒØªØ§Ù† Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯. Ø§Ø² Ø­Ø¯Ø§Ù‚ل Ûµ ÙØ¹ل Ø¨Ø§ Dativ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      steps: [
        { title: "Ù…Ø±Ø­لÙ‡ Û±: Ù…Ø¹Ø±ÙÛŒ Ø§ÙØ±Ø§Ø¯ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡", text: "Ø§Ø¨ØªØ¯Ø§ Ø§Ø¹Ø¶Ø§ÛŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ø±Ø§ Ù†Ø§Ù… Ø¨Ø¨Ø±ÛŒØ¯.", example: { de: "Meine Familie ist nicht sehr groÃŸ.", fa: "Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ù…Ù† Ø®ÛŒلÛŒ Ø¨Ø²Ø±Ú¯ Ù†ÛŒØ³Øª." } },
        { title: "Ù…Ø±Ø­لÙ‡ Û²: Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² ÙØ¹لâ€ŒÙ‡Ø§ÛŒ Dativ", text: "ÙØ¹لâ€ŒÙ‡Ø§ÛŒÛŒ Ù…Ø§Ù†Ù†Ø¯ helfen, geben, danken Ø±Ø§ Ø¨Ù‡ Ú©Ø§Ø± Ø¨Ø¨Ø±ÛŒØ¯.", example: { de: "Ich helfe meiner Mutter in der KÃ¼che.", fa: "Ù…Ù† Ø¯Ø± Ø¢Ø´Ù¾Ø²Ø®Ø§Ù†Ù‡ Ø¨Ù‡ Ù…Ø§Ø¯Ø±Ù… Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ù…." } },
        { title: "Ù…Ø±Ø­لÙ‡ Û³: ØªÙˆØ¶ÛŒØ­ Ù†ØªÛŒØ¬Ù‡", text: "Ù†ØªÛŒØ¬Ù‡ Ø§ÛŒÙ† Ú©Ù…Ú©â€ŒÙ‡Ø§ Ø±Ø§ Ø´Ø±Ø­ Ø¯Ù‡ÛŒØ¯.", example: { de: "Meiner Familie gefÃ¤llt das sehr.", fa: "Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ø§Ø² Ø§ÛŒÙ† Ø¨Ø³ÛŒØ§Ø± Ø®ÙˆØ´Ø´ Ù…ÛŒâ€ŒØ¢ÛŒØ¯." } }
      ],
      modelAnswer: "Meine Familie besteht aus fÃ¼nf Personen. Jeden Tag helfe ich meiner Mutter beim Kochen. Ich gebe meinem kleinen Bruder das Abendessen. Meiner Schwester helfe ich bei den Hausaufgaben. Meinem Vater danke ich, weil er uns immer unterstÃ¼tzt. Am Wochenende spiele ich mit meinen Geschwistern. Das gefÃ¤llt der ganzen Familie. Ich bin froh, dass ich meiner Familie helfen kann."
    }
  ],

  listening: [
    {
      title: "Ú¯ÙˆØ´ Ø¯Ø§Ø¯Ù†: Ù…Ú©Ø§لÙ…Ù‡ Ø¯Ø± Ù…Ø¯Ø±Ø³Ù‡",
      source: "Deutsche Welle Langsam gesprochene Nachrichten",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "Ø¨Ù‡ Ø§ÙØ¹Ø§ل Dativ Ø¯Ø± Ù…Ú©Ø§لÙ…Ù‡ Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯ Ø¨Ù‡ Ú†Ù‡ Ú©Ø³ÛŒ Ú©Ù…Ú© Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ùˆ Ú†Ù‡ Ú©Ø³ÛŒ Ú†Ù‡ Ú†ÛŒØ²ÛŒ Ø¨Ù‡ Ú†Ù‡ Ú©Ø³ÛŒ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯."
    }
  ],

  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ú¯ÙØªØ§Ø±ÛŒ: Ú©Ù…Ú© Ø¨Ù‡ Ø¯ÛŒÚ¯Ø±Ø§Ù†",
      pattern: "Ich helfe (jemandem) bei (etwas). Kannst du (mir/ihnen) bitte helfen?",
      exercise: "Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ú©Ù…Ú© Ú©Ø±Ø¯Ù† Ø¨Ù‡ Ø§ÙØ±Ø§Ø¯ Ù…Ø®ØªلÙ ØµØ­Ø¨Øª Ú©Ù†ÛŒØ¯. Ø§Ø² Ø¶Ù…Ø§ÛŒØ± Dativ ØµØ­ÛŒØ­ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯ Ùˆ Ø¨Ú¯ÙˆÛŒÛŒØ¯ Ø¨Ù‡ Ú†Ù‡ Ú©Ø³ÛŒ Ú†Ù‡ Ú†ÛŒØ²ÛŒ Ù…ÛŒâ€ŒØ¯Ù‡ÛŒØ¯."
    }
  ],

  cultureTip: "Ø¯Ø± ÙØ±Ù‡Ù†Ú¯ Ø¢لÙ…Ø§Ù†ÛŒØŒ Ù‚Ø¯Ø±Ø¯Ø§Ù†ÛŒ Ùˆ Ú©Ù…Ú© Ù…ØªÙ‚Ø§Ø¨ل Ø§Ù‡Ù…ÛŒØª Ø²ÛŒØ§Ø¯ÛŒ Ø¯Ø§Ø±Ø¯. ÙˆÙ‚ØªÛŒ Ú©Ø³ÛŒ Ø¨Ù‡ Ø´Ù…Ø§ Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŒ Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯ Â«Danke schÃ¶nÂ» Ùˆ Ø§Ù†ØªØ¸Ø§Ø± Ù¾Ø§Ø³Ø® Â«Bitte schÃ¶nÂ» Ø±Ø§ Ø¯Ø§Ø±Ù†Ø¯. Ø¯Ø± Ù…Ø­ÛŒØ· Ú©Ø§Ø±ØŒ Ù‡Ù…Ú©Ø§Ø±Ø§Ù† Ø§ØºلØ¨ Ø¨Ù‡ ÛŒÚ©Ø¯ÛŒÚ¯Ø± Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯ Ùˆ Ø§ÛŒÙ† Ø±ÙØªØ§Ø± Ù†Ø´Ø§Ù†Ù‡ Ø§Ø­ØªØ±Ø§Ù… Ù…ØªÙ‚Ø§Ø¨ل Ø§Ø³Øª.",

  examData: {
    questions: [
      { question: "Ú©Ø¯Ø§Ù… Ø´Ú©ل ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ Ich gebe ___ Lehrer das Heft.", options: ["dem", "den", "der", "das"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ø´Ú©ل ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ Sie hilft ___ Mutter.", options: ["der", "die", "dem", "den"], answer: 0 },
      { question: "Ich helfe ___ (Ø¬Ù…Ø¹: Kinder).", options: ["den Kindern", "den Kinder", "dem Kinder", "die Kinder"], answer: 0 },
      { question: "Das Buch gehÃ¶rt ___. (Ù…Ø¤Ù†Ø«)", options: ["ihr", "ihm", "ihnen", "er"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… ÙØ¹ل Ø¨Ø§ Dativ Ù…ÛŒâ€ŒØ¢ÛŒØ¯ØŸ", options: ["sehen", "helfen", "spielen", "essen"], answer: 1 },
      { question: "Wem antwortest du? â†’ Ich antworte ___.", options: ["meiner Freundin", "meine Freundin", "meinen Freundin", "meinem Freundin"], answer: 0 },
      { question: "Das gefÃ¤llt ___. (Ø¨Ù‡ Ù…Ø§)", options: ["uns", "wir", "unsere", "unser"], answer: 0 },
      { question: "Ich danke ___ (der Arzt).", options: ["dem Arzt", "den Arzt", "der Arzt", "das Arzt"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ø¶Ù…ÛŒØ± Dativ Ù†ÛŒØ³ØªØŸ", options: ["mich", "dir", "ihm", "euch"], answer: 0 },
      { question: "Wir helfen ___ (die Nachbarn).", options: ["den Nachbarn", "die Nachbarn", "dem Nachbarn", "der Nachbarn"], answer: 0 }
    ]
  }
};
