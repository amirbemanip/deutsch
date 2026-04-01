export const day34Data = {
  title: "Ø±ÙˆØ² Û³Û´: Ø§ÙØ¹Ø§ل Ù…ÙˆØ¯Ø§ل Ø¹Ù…ÛŒÙ‚ + Ù…ÙˆØ¯Ø§لâ€ŒÙ‡Ø§ÛŒ Ø¯ÙˆÚ¯Ø§Ù†Ù‡",
  objective: "Ù…Ø±ÙˆØ± Ø¹Ù…ÛŒÙ‚ Ø§ÙØ¹Ø§ل Ù…ÙˆØ¯Ø§ل (kÃ¶nnen, mÃ¼ssen, dÃ¼rfen, sollen, wollen, mÃ¶gen) Ùˆ ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Ø¯Ùˆ ÙØ¹ل Ù…ÙˆØ¯Ø§ل Ø¯Ø± ÛŒÚ© Ø¬Ù…لÙ‡",

  grammarData: {
    subtitle: "Ø§ÙØ¹Ø§ل Ù…ÙˆØ¯Ø§ل (Modalverben) Ø¯Ø± Ø¹Ù…Ù‚",
    content: [
      {
        type: "text",
        title: "Ù…Ø±ÙˆØ± Ø³Ø±ÛŒØ¹ Ø§ÙØ¹Ø§ل Ù…ÙˆØ¯Ø§ل",
        text: "Ø§ÙØ¹Ø§ل Ù…ÙˆØ¯Ø§ل Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û² Ù‚Ø±Ø§Ø± Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯ Ùˆ ÙØ¹ل Ø§ØµلÛŒ Ø¯Ø± Ø¢Ø®Ø± Ø¬Ù…لÙ‡ Ø¨Ù‡ ØµÙˆØ±Øª Ù…ØµØ¯Ø± (Ø¨Ø¯ÙˆÙ† zu) Ù…ÛŒâ€ŒØ¢ÛŒØ¯. Ø¯Ø± Ø¬Ù…لØ§Øª ÙØ±Ø¹ÛŒØŒ ÙØ¹ل Ù…ÙˆØ¯Ø§ل Ù‡Ù… Ø¨Ù‡ Ø¢Ø®Ø± Ù…ÛŒâ€ŒØ±ÙˆØ¯."
      },
      {
        type: "table",
        title: "Ø¬Ø¯Ùˆل Ú©Ø§Ù…ل Ø§ÙØ¹Ø§ل Ù…ÙˆØ¯Ø§ل (Ø­Ø§ل Ø³Ø§Ø¯Ù‡)",
        rows: [
          { de: "kÃ¶nnen (ich kann)", fa: "ØªÙˆØ§Ù†Ø³ØªÙ†: Ich kann schwimmen." },
          { de: "mÃ¼ssen (ich muss)", fa: "Ø¨Ø§ÛŒØ¯ Ú©Ø±Ø¯Ù†: Ich muss arbeiten." },
          { de: "dÃ¼rfen (ich darf)", fa: "Ø§Ø¬Ø§Ø²Ù‡ Ø¯Ø§Ø´ØªÙ†: Ich darf gehen." },
          { de: "sollen (ich soll)", fa: "Ø¨Ø§ÛŒØ¯ (ØªÙˆØµÛŒÙ‡): Du sollst lernen." },
          { de: "wollen (ich will)", fa: "Ø®ÙˆØ§Ø³ØªÙ†: Er will reisen." },
          { de: "mÃ¶gen (ich mag)", fa: "Ø¯ÙˆØ³Øª Ø¯Ø§Ø´ØªÙ†: Sie mag Kaffee." },
          { de: "mÃ¶chten (ich mÃ¶chte)", fa: "Ù…Ø§ÛŒل Ø¨ÙˆØ¯Ù†: Wir mÃ¶chten essen." }
        ]
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ Ù…ÙˆØ¯Ø§لâ€ŒÙ‡Ø§",
        items: [
          { de: "Kannst du mir helfen?", fa: "Ø¢ÛŒØ§ Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒ Ø¨Ù‡ Ù…Ù† Ú©Ù…Ú© Ú©Ù†ÛŒØŸ" },
          { de: "Ich muss morgen frÃ¼h aufstehen.", fa: "Ù…Ù† Ø¨Ø§ÛŒØ¯ ÙØ±Ø¯Ø§ ØµØ¨Ø­ Ø²ÙˆØ¯ Ø¨لÙ†Ø¯ Ø´ÙˆÙ…." },
          { de: "Darf ich hier rauchen?", fa: "Ø¢ÛŒØ§ Ø§Ø¬Ø§Ø²Ù‡ Ø¯Ø§Ø±Ù… Ø§ÛŒÙ†Ø¬Ø§ Ø³ÛŒÚ¯Ø§Ø± Ø¨Ú©Ø´Ù…ØŸ" },
          { de: "Du sollst mehr Wasser trinken.", fa: "ØªÙˆ Ø¨Ø§ÛŒØ¯ Ø¢Ø¨ Ø¨ÛŒØ´ØªØ±ÛŒ Ø¨Ù†ÙˆØ´ÛŒ." },
          { de: "Er will nÃ¤chstes Jahr nach Japan reisen.", fa: "Ø§Ùˆ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯ Ø³Ø§ل Ø¢ÛŒÙ†Ø¯Ù‡ Ø¨Ù‡ Ú˜Ø§Ù¾Ù† Ø³ÙØ± Ú©Ù†Ø¯." },
          { de: "Ich mag italienisches Essen.", fa: "Ù…Ù† ØºØ°Ø§ÛŒ Ø§ÛŒØªØ§لÛŒØ§ÛŒÛŒ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù…." },
          { de: "Wir mÃ¶chten ein Zimmer reservieren.", fa: "Ù…Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡ÛŒÙ… ÛŒÚ© Ø§ØªØ§Ù‚ Ø±Ø²Ø±Ùˆ Ú©Ù†ÛŒÙ…." }
        ]
      },
      {
        type: "text",
        title: "Ù…ÙˆØ¯Ø§لâ€ŒÙ‡Ø§ÛŒ Ø¯ÙˆÚ¯Ø§Ù†Ù‡ (Doppelmodale)",
        text: "Ú¯Ø§Ù‡ÛŒ Ø§ÙˆÙ‚Ø§Øª Ø¯Ùˆ ÙØ¹ل Ù…ÙˆØ¯Ø§ل Ø¯Ø± ÛŒÚ© Ø¬Ù…لÙ‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯. Ø¯Ø± Ø§ÛŒÙ† Ø­Ø§لØªØŒ ÙØ¹ل Ø¯ÙˆÙ… Ø¨Ù‡ ØµÙˆØ±Øª Ù…ØµØ¯Ø± (Infinitiv) Ù…ÛŒâ€ŒØ¢ÛŒØ¯. Ø§ÛŒÙ† Ø³Ø§Ø®ØªØ§Ø± Ø¨ÛŒØ´ØªØ± Ø¯Ø± Ù…Ú©Ø§لÙ…Ù‡ Ø±ÙˆØ²Ù…Ø±Ù‡ Ùˆ ØºÛŒØ±Ø±Ø³Ù…ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ Ù…ÙˆØ¯Ø§ل Ø¯ÙˆÚ¯Ø§Ù†Ù‡",
        items: [
          { de: "Das muss ich kÃ¶nnen.", fa: "Ù…Ù† Ø¨Ø§ÛŒØ¯ Ø¨ØªÙˆØ§Ù†Ù… Ø§ÛŒÙ† Ú©Ø§Ø± Ø±Ø§ Ø¨Ú©Ù†Ù…. (Ø¨Ø§ÛŒØ¯ + ØªÙˆØ§Ù†Ø³ØªÙ†)" },
          { de: "Das will ich nicht mÃ¼ssen.", fa: "Ù…Ù† Ù†Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ù…Ø¬Ø¨ÙˆØ± Ø¨Ø§Ø´Ù…. (Ø®ÙˆØ§Ø³ØªÙ† + Ø¨Ø§ÛŒØ¯)" },
          { de: "Kannst du das nicht sollen?", fa: "Ø¢ÛŒØ§ Ù†Ø¨Ø§ÛŒØ¯ Ø¨ØªÙˆØ§Ù†ÛŒ Ø§ÛŒÙ† Ú©Ø§Ø± Ø±Ø§ Ø¨Ú©Ù†ÛŒØŸ (ØªÙˆØ§Ù†Ø³ØªÙ† + Ø¨Ø§ÛŒØ¯)" },
          { de: "Das solltest du kÃ¶nnen.", fa: "ØªÙˆ Ø¨Ø§ÛŒØ¯ Ø¨ØªÙˆØ§Ù†ÛŒ Ø§ÛŒÙ† Ú©Ø§Ø± Ø±Ø§ Ø¨Ú©Ù†ÛŒ. (Ø¨Ø§ÛŒØ¯ + ØªÙˆØ§Ù†Ø³ØªÙ†)" },
          { de: "Ich mÃ¶chte das nicht mÃ¼ssen.", fa: "Ù…Ù† Ù†Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ù…Ø¬Ø¨ÙˆØ± Ø¨Ø§Ø´Ù…. (Ù…Ø§ÛŒل + Ø¨Ø§ÛŒØ¯)" },
          { de: "Er will das nicht dÃ¼rfen.", fa: "Ø§Ùˆ Ù†Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯ Ø§Ø¬Ø§Ø²Ù‡ Ù†Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´Ø¯. (Ø®ÙˆØ§Ø³ØªÙ† + Ø§Ø¬Ø§Ø²Ù‡)" }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù… Ù…ÙˆØ¯Ø§لâ€ŒÙ‡Ø§ÛŒ Ø¯ÙˆÚ¯Ø§Ù†Ù‡!",
        text: "Ø¯Ø± Ù…ÙˆØ¯Ø§لâ€ŒÙ‡Ø§ÛŒ Ø¯ÙˆÚ¯Ø§Ù†Ù‡ØŒ ÙØ¹ل Ø§Ùˆل Ù…Ø¹Ù…ÙˆلØ§Ù‹ ØµØ±Ù Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ùˆ ÙØ¹ل Ø¯ÙˆÙ… Ø¨Ù‡ ØµÙˆØ±Øª Ù…ØµØ¯Ø± Ø¨Ø§Ù‚ÛŒ Ù…ÛŒâ€ŒÙ…Ø§Ù†Ø¯. Ø§ÛŒÙ† Ø³Ø§Ø®ØªØ§Ø± Ø¨ÛŒØ´ØªØ± Ø¯Ø± Ù…Ú©Ø§لÙ…Ø§Øª ØºÛŒØ±Ø±Ø³Ù…ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ùˆ Ø¯Ø± Ù†ÙˆØ´ØªØ§Ø± Ø±Ø³Ù…ÛŒ Ú©Ù…ØªØ± Ø¯ÛŒØ¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
      },
      {
        type: "interactive_quiz",
        title: "ØªØ³Øª Ø§ÙØ¹Ø§ل Ù…ÙˆØ¯Ø§ل",
        questions: [
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ Ù…Ù† Ø¨Ø§ÛŒØ¯ ÙØ±Ø¯Ø§ Ú©Ø§Ø± Ú©Ù†Ù….",
            questionDe: "Welcher Satz ist korrekt?",
            options: [
              { text: "Ich muss morgen arbeiten.", isCorrect: true },
              { text: "Ich morgen muss arbeiten.", isCorrect: false },
              { text: "Ich arbeiten muss morgen.", isCorrect: false },
              { text: "Morgen ich muss arbeiten.", isCorrect: false }
            ],
            explanation: "Ù…ÙˆØ¯Ø§ل (muss) Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û² Ùˆ ÙØ¹ل Ø§ØµلÛŒ (arbeiten) Ø¯Ø± Ø¢Ø®Ø± Ø¬Ù…لÙ‡."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ Ù…ÙˆØ¯Ø§ل Ø¯ÙˆÚ¯Ø§Ù†Ù‡ Ø¯Ø§Ø±Ø¯ØŸ",
            questionDe: "Welcher Satz hat zwei Modalverben?",
            options: [
              { text: "Ich kann das machen.", isCorrect: false },
              { text: "Das muss ich kÃ¶nnen.", isCorrect: true },
              { text: "Ich muss das machen.", isCorrect: false },
              { text: "Ich will das machen.", isCorrect: false }
            ],
            explanation: "Das muss ich kÃ¶nnen = Ù…Ù† Ø¨Ø§ÛŒØ¯ Ø¨ØªÙˆØ§Ù†Ù… Ø§ÛŒÙ† Ú©Ø§Ø± Ø±Ø§ Ø¨Ú©Ù†Ù…. Ø¯Ùˆ Ù…ÙˆØ¯Ø§ل: mÃ¼ssen Ùˆ kÃ¶nnen."
          },
          {
            question: "Ø¢ÛŒØ§ Ø§Ø¬Ø§Ø²Ù‡ Ø¯Ø§Ø±Ù… Ø¨Ø±ÙˆÙ…ØŸ",
            questionDe: "Wie fragt man hÃ¶flich?",
            options: [
              { text: "Kann ich gehen?", isCorrect: false },
              { text: "Darf ich gehen?", isCorrect: true },
              { text: "Muss ich gehen?", isCorrect: false },
              { text: "Will ich gehen?", isCorrect: false }
            ],
            explanation: "Darf ich...? Ø¨Ø±Ø§ÛŒ Ø¯Ø±Ø®ÙˆØ§Ø³Øª Ø§Ø¬Ø§Ø²Ù‡ Ø±Ø³Ù…ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÚ©Ù…ÛŒل Ø¬Ù…لØ§Øª Ø¨Ø§ Ù…ÙˆØ¯Ø§ل ØµØ­ÛŒØ­",
        instruction: "Ù…ÙˆØ¯Ø§ل Ù…Ù†Ø§Ø³Ø¨ Ø±Ø§ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ù†ÛŒØ¯ Ùˆ Ø´Ú©ل ØµØ­ÛŒØ­ Ø¢Ù† Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.",
        blanks: [
          { sentence: "Ich ___ morgen frÃ¼h aufstehen. (Ø¨Ø§ÛŒØ¯)", answer: "muss", hint: "Ø¨Ø§ÛŒØ¯ = mÃ¼ssen â†’ muss" },
          { sentence: "___ du mir helfen? (Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒ)", answer: "Kannst", hint: "ØªÙˆØ§Ù†Ø³ØªÙ† = kÃ¶nnen â†’ kannst" },
          { sentence: "___ ich hier sitzen? (Ø§Ø¬Ø§Ø²Ù‡ Ø¯Ø§Ø±Ù…)", answer: "Darf", hint: "Ø§Ø¬Ø§Ø²Ù‡ Ø¯Ø§Ø´ØªÙ† = dÃ¼rfen â†’ Darf" },
          { sentence: "Er ___ nÃ¤chstes Jahr reisen. (Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯)", answer: "will", hint: "Ø®ÙˆØ§Ø³ØªÙ† = wollen â†’ will" },
          { sentence: "Wir ___ ein Zimmer reservieren. (Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡ÛŒÙ…)", answer: "mÃ¶chten", hint: "Ù…Ø§ÛŒل Ø¨ÙˆØ¯Ù† = mÃ¶chten" },
          { sentence: "Sie ___ Kaffee nicht. (Ø¯ÙˆØ³Øª Ù†Ø¯Ø§Ø±Ø¯)", answer: "mag", hint: "Ø¯ÙˆØ³Øª Ø¯Ø§Ø´ØªÙ† = mÃ¶gen â†’ mag" },
          { sentence: "Du ___ mehr lernen. (Ø¨Ø§ÛŒØ¯)", answer: "sollst", hint: "Ø¨Ø§ÛŒØ¯ (ØªÙˆØµÛŒÙ‡) = sollen â†’ sollst" },
          { sentence: "Das ___ ich nicht ___. (Ø¨Ø§ÛŒØ¯ Ø¨ØªÙˆØ§Ù†Ù…)", answer: "muss, kÃ¶nnen", hint: "Ù…ÙˆØ¯Ø§ل Ø¯ÙˆÚ¯Ø§Ù†Ù‡: muss + kÃ¶nnen" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "Ø§ÙØ¹Ø§ل Ù…ÙˆØ¯Ø§ل (Modalverben)",
        words: [
          { de: "kÃ¶nnen", fa: "ØªÙˆØ§Ù†Ø³ØªÙ† / Ø¨لØ¯ Ø¨ÙˆØ¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich kann gut kochen.", fa: "Ù…Ù† Ø¢Ø´Ù¾Ø²ÛŒ Ø®ÙˆØ¨ Ø¨لØ¯ Ù‡Ø³ØªÙ…." }] },
          { de: "mÃ¼ssen", fa: "Ø¨Ø§ÛŒØ¯ Ú©Ø±Ø¯Ù† (Ø§Ø¬Ø¨Ø§Ø±)", article: "-", plural: "-", examples: [{ de: "Du musst pÃ¼nktlich kommen.", fa: "ØªÙˆ Ø¨Ø§ÛŒØ¯ Ø³Ø± ÙˆÙ‚Øª Ø¨ÛŒØ§ÛŒÛŒ." }] },
          { de: "dÃ¼rfen", fa: "Ø§Ø¬Ø§Ø²Ù‡ Ø¯Ø§Ø´ØªÙ†", article: "-", plural: "-", examples: [{ de: "Kinder dÃ¼rfen nicht rauchen.", fa: "Ø¨Ú†Ù‡â€ŒÙ‡Ø§ Ø§Ø¬Ø§Ø²Ù‡ Ø³ÛŒÚ¯Ø§Ø± Ú©Ø´ÛŒØ¯Ù† Ù†Ø¯Ø§Ø±Ù†Ø¯." }] },
          { de: "sollen", fa: "Ø¨Ø§ÛŒØ¯ (ØªÙˆØµÛŒÙ‡ / ÙˆØ¸ÛŒÙÙ‡)", article: "-", plural: "-", examples: [{ de: "Du sollst mehr schlafen.", fa: "ØªÙˆ Ø¨Ø§ÛŒØ¯ Ø¨ÛŒØ´ØªØ± Ø¨Ø®ÙˆØ§Ø¨ÛŒ." }] },
          { de: "wollen", fa: "Ø®ÙˆØ§Ø³ØªÙ†", article: "-", plural: "-", examples: [{ de: "Sie will Arztin werden.", fa: "Ø§Ùˆ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯ Ù¾Ø²Ø´Ú© Ø´ÙˆØ¯." }] },
          { de: "mÃ¶gen", fa: "Ø¯ÙˆØ³Øª Ø¯Ø§Ø´ØªÙ†", article: "-", plural: "-", examples: [{ de: "Ich mag Schokolade.", fa: "Ù…Ù† Ø´Ú©لØ§Øª Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù…." }] }
        ]
      },
      {
        title: "Ø­Ø§لØªâ€ŒÙ‡Ø§ÛŒ Ù…Ø®ØªلÙ Ù…ÙˆØ¯Ø§ل",
        words: [
          { de: "kÃ¶nnen + Infinitiv", fa: "ØªÙˆØ§Ù†Ø³ØªÙ†: Ich kann schwimmen.", article: "-", plural: "-", examples: [{ de: "Kannst du das?", fa: "Ø¢ÛŒØ§ Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒ Ø§ÛŒÙ† Ú©Ø§Ø± Ø±Ø§ Ø¨Ú©Ù†ÛŒØŸ" }] },
          { de: "mÃ¼ssen + Infinitiv", fa: "Ø¨Ø§ÛŒØ¯: Ich muss arbeiten.", article: "-", plural: "-", examples: [{ de: "Das muss ich machen.", fa: "Ù…Ù† Ø¨Ø§ÛŒØ¯ Ø§ÛŒÙ† Ú©Ø§Ø± Ø±Ø§ Ø¨Ú©Ù†Ù…." }] },
          { de: "Doppelmodal", fa: "Ù…ÙˆØ¯Ø§ل Ø¯ÙˆÚ¯Ø§Ù†Ù‡: Das muss ich kÃ¶nnen.", article: "-", plural: "-", examples: [{ de: "Das solltest du wissen.", fa: "ØªÙˆ Ø¨Ø§ÛŒØ¯ Ø§ÛŒÙ† Ø±Ø§ Ø¨Ø¯Ø§Ù†ÛŒ." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein GesprÃ¤ch Ã¼ber die Zukunft\n\nMaria: Was willst du nÃ¤chstes Jahr machen?\nPeter: Ich mÃ¶chte nach Deutschland reisen. Ich kann schon ein bisschen Deutsch sprechen, aber ich muss noch viel lernen.\nMaria: Das solltest du wirklich machen! Kannst du auch in Deutschland arbeiten?\nPeter: Ja, ich darf dort arbeiten, weil ich einen deutschen Pass habe. Aber ich will erst die Sprache besser lernen, bevor ich arbeite.\nMaria: Das musst du nicht alleine machen. Ich kann dir helfen, wenn du mÃ¶chtest.\nPeter: Das wÃ¤re toll! Ich mag es, wenn Freunde mir helfen. Aber du sollst auch an dich denken. Du musst ja auch deine eigene Arbeit machen.",
      questions: [
        { question: "Ù¾ÛŒØªØ± Ø³Ø§ل Ø¢ÛŒÙ†Ø¯Ù‡ Ú†Ù‡ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯ Ø¨Ú©Ù†Ø¯ØŸ", answer: "Ø§Ùˆ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯ Ø¨Ù‡ Ø¢لÙ…Ø§Ù† Ø³ÙØ± Ú©Ù†Ø¯." },
        { question: "Ø¢ÛŒØ§ Ù¾ÛŒØªØ± Ø§Ø¬Ø§Ø²Ù‡ Ú©Ø§Ø± Ø¯Ø± Ø¢لÙ…Ø§Ù† Ø±Ø§ Ø¯Ø§Ø±Ø¯ØŸ Ú†Ø±Ø§ØŸ", answer: "Ø¨لÙ‡ØŒ Ú†ÙˆÙ† Ù¾Ø§Ø³Ù¾ÙˆØ±Øª Ø¢لÙ…Ø§Ù†ÛŒ Ø¯Ø§Ø±Ø¯." },
        { question: "Ù¾ÛŒØªØ± Ú†Ø±Ø§ Ø§Ùˆل Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯ Ø²Ø¨Ø§Ù† Ø±Ø§ ÛŒØ§Ø¯ Ø¨Ú¯ÛŒØ±Ø¯ØŸ", answer: "Ø§Ùˆ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯ Ø§Ùˆل Ø²Ø¨Ø§Ù† Ø±Ø§ Ø¨Ù‡ØªØ± ÛŒØ§Ø¯ Ø¨Ú¯ÛŒØ±Ø¯ØŒ Ø¨Ø¹Ø¯ Ú©Ø§Ø± Ú©Ù†Ø¯." },
        { question: "Ù…Ø§Ø±ÛŒØ§ Ú†Ù‡ ØªÙˆØµÛŒÙ‡â€ŒØ§ÛŒ Ø¨Ù‡ Ù¾ÛŒØªØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", answer: "Ø§Ùˆ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒØ¯ Ù¾ÛŒØªØ± Ø¨Ø§ÛŒØ¯ Ø¨Ù‡ Ø®ÙˆØ¯Ø´ Ù‡Ù… ÙÚ©Ø± Ú©Ù†Ø¯ Ùˆ Ú©Ø§Ø± Ø®ÙˆØ¯Ø´ Ø±Ø§ Ù‡Ù… Ø§Ù†Ø¬Ø§Ù… Ø¯Ù‡Ø¯." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ø¯Ø±Ø¨Ø§Ø±Ù‡ ØªÙˆØ§Ù†Ø§ÛŒÛŒâ€ŒÙ‡Ø§ Ùˆ Ø®ÙˆØ§Ø³ØªÙ‡â€ŒÙ‡Ø§",
      prompt: "ÛŒÚ© Ù¾Ø§Ø±Ø§Ú¯Ø±Ø§Ù (Û¶-Û· Ø®Ø·) Ø¯Ø±Ø¨Ø§Ø±Ù‡ ØªÙˆØ§Ù†Ø§ÛŒÛŒâ€ŒÙ‡Ø§ØŒ Ø§Ø¬Ø¨Ø§Ø±Ù‡Ø§ Ùˆ Ø®ÙˆØ§Ø³ØªÙ‡â€ŒÙ‡Ø§ÛŒ Ø®ÙˆØ¯ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯. Ø§Ø² Ø­Ø¯Ø§Ù‚ل Ûµ ÙØ¹ل Ù…ÙˆØ¯Ø§ل Ù…Ø®ØªلÙ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      steps: [
        { title: "ØªÙˆØ§Ù†Ø§ÛŒÛŒâ€ŒÙ‡Ø§", text: "Ø§Ø² kÃ¶nnen Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Ich kann gut kochen.", fa: "Ø¢Ø´Ù¾Ø²ÛŒ Ø®ÙˆØ¨ Ø¨لØ¯ Ù‡Ø³ØªÙ…." } },
        { title: "Ø§Ø¬Ø¨Ø§Ø±Ù‡Ø§", text: "Ø§Ø² mÃ¼ssen Ùˆ sollen Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Ich muss jeden Tag arbeiten.", fa: "Ø¨Ø§ÛŒØ¯ Ù‡Ø± Ø±ÙˆØ² Ú©Ø§Ø± Ú©Ù†Ù…." } },
        { title: "Ø®ÙˆØ§Ø³ØªÙ‡â€ŒÙ‡Ø§", text: "Ø§Ø² wollen Ùˆ mÃ¶chten Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Ich mÃ¶chte nÃ¤chstes Jahr reisen.", fa: "Ø³Ø§ل Ø¢ÛŒÙ†Ø¯Ù‡ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ø³ÙØ± Ú©Ù†Ù…." } }
      ],
      modelAnswer: "Ich kann Deutsch und Englisch sprechen. Ich muss jeden Tag zur Arbeit gehen und viele Aufgaben machen. Ich soll auch mehr Sport treiben, aber ich habe wenig Zeit. Ich will nÃ¤chstes Jahr eine Reise nach Deutschland machen. Ich mÃ¶chte dort studieren und neue Leute kennenlernen. Ich darf auch dort arbeiten, weil ich ein Visum habe. MÃ¶gen Sie das?"
    }
  ],

  listening: [
    {
      title: "Ú¯ÙˆØ´ Ø¯Ø§Ø¯Ù†: Ù…Ú©Ø§لÙ…Ø§Øª Ø¨Ø§ Ù…ÙˆØ¯Ø§لâ€ŒÙ‡Ø§",
      source: "Deutsche Welle",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "Ø¨Ù‡ Ù…Ú©Ø§لÙ…Ø§Øª Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ Ø§ÙØ¹Ø§ل Ù…ÙˆØ¯Ø§ل Ø±Ø§ Ø´Ù†Ø§Ø³Ø§ÛŒÛŒ Ú©Ù†ÛŒØ¯. Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯ Ù‡Ø± Ú©Ø³ Ú†Ù‡ Ú©Ø§Ø±ÛŒ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ø¯ØŒ Ø¨Ø§ÛŒØ¯ ÛŒØ§ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯ Ø§Ù†Ø¬Ø§Ù… Ø¯Ù‡Ø¯."
    }
  ],

  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ú¯ÙØªØ§Ø±ÛŒ: ØªÙˆØ§Ù†Ø§ÛŒÛŒâ€ŒÙ‡Ø§ Ùˆ Ø®ÙˆØ§Ø³ØªÙ‡â€ŒÙ‡Ø§",
      pattern: "Ich kann... Ich muss... Ich will... Ich darf...",
      exercise: "Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ûµ Ú©Ø§Ø±ÛŒ Ú©Ù‡ Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒØ¯ØŒ Ø¨Ø§ÛŒØ¯ Ùˆ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡ÛŒØ¯ Ø§Ù†Ø¬Ø§Ù… Ø¯Ù‡ÛŒØ¯ ØµØ­Ø¨Øª Ú©Ù†ÛŒØ¯. Ø§Ø² Ù…ÙˆØ¯Ø§لâ€ŒÙ‡Ø§ÛŒ Ù…Ø®ØªلÙ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯."
    }
  ],

  cultureTip: "Ø¯Ø± ÙØ±Ù‡Ù†Ú¯ Ø¢لÙ…Ø§Ù†ÛŒØŒ ØªÙØ§ÙˆØª Ø¨ÛŒÙ† mÃ¼ssen Ùˆ sollen Ø¨Ø³ÛŒØ§Ø± Ù…Ù‡Ù… Ø§Ø³Øª. mÃ¼ssen Ø¨ÛŒØ§Ù†Ú¯Ø± Ø§Ø¬Ø¨Ø§Ø± Ù‚Ø§Ù†ÙˆÙ†ÛŒ ÛŒØ§ Ø´Ø®ØµÛŒ Ø§Ø³Øª (Ich muss zur Arbeit gehen)ØŒ Ø¯Ø± Ø­Ø§لÛŒÚ©Ù‡ sollen Ø¨ÛŒØ§Ù†Ú¯Ø± ØªÙˆØµÛŒÙ‡ ÛŒØ§ ÙˆØ¸ÛŒÙÙ‡ Ø§Ø®لØ§Ù‚ÛŒ Ø§Ø³Øª (Du sollst pÃ¼nktlich sein). Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø´ØªØ¨Ø§Ù‡ Ø§Ø² Ø§ÛŒÙ† Ø¯Ùˆ Ù…ÛŒâ€ŒØªÙˆØ¯ Ø¨Ø§Ø¹Ø« Ø³ÙˆØ¡ØªÙØ§Ù‡Ù… Ø´ÙˆØ¯. Ù‡Ù…Ú†Ù†ÛŒÙ† ÙØ¹ل dÃ¼rfen Ø¯Ø± Ø¢لÙ…Ø§Ù† Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ù‚ÙˆØ§Ù†ÛŒÙ† Ùˆ Ù…Ù‚Ø±Ø±Ø§Øª Ø¨Ø³ÛŒØ§Ø± Ø±Ø§ÛŒØ¬ Ø§Ø³Øª.",

  examData: {
    questions: [
      { question: "Ù…Ù† Ø¨Ø§ÛŒØ¯ ÙØ±Ø¯Ø§ Ø²ÙˆØ¯ Ø¨لÙ†Ø¯ Ø´ÙˆÙ…:", options: ["Ich muss morgen frÃ¼h aufstehen.", "Ich will morgen frÃ¼h aufstehen.", "Ich kann morgen frÃ¼h aufstehen.", "Ich darf morgen frÃ¼h aufstehen."], answer: 0 },
      { question: "Ø¢ÛŒØ§ Ø§Ø¬Ø§Ø²Ù‡ Ø¯Ø§Ø±Ù… Ø§ÛŒÙ†Ø¬Ø§ Ø¨Ø´ÛŒÙ†Ù…ØŸ", options: ["Kann ich hier sitzen?", "Darf ich hier sitzen?", "Muss ich hier sitzen?", "Will ich hier sitzen?"], answer: 1 },
      { question: "Ø§Ùˆ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯ Ù¾Ø²Ø´Ú© Ø´ÙˆØ¯:", options: ["Er will Arzt werden.", "Er kann Arzt werden.", "Er muss Arzt werden.", "Er darf Arzt werden."], answer: 0 },
      { question: "Ø¢Ø´Ù¾Ø²ÛŒ Ø¨لØ¯Ù…:", options: ["Ich muss kochen.", "Ich will kochen.", "Ich kann kochen.", "Ich soll kochen."], answer: 2 },
      { question: "ØªÙˆ Ø¨Ø§ÛŒØ¯ Ø¨ÛŒØ´ØªØ± Ø¨Ø®ÙˆØ§Ø¨ÛŒ:", options: ["Du musst mehr schlafen.", "Du sollst mehr schlafen.", "Du kannst mehr schlafen.", "Du willst mehr schlafen."], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ù…ÙˆØ¯Ø§ل Ø¯ÙˆÚ¯Ø§Ù†Ù‡ Ø§Ø³ØªØŸ", options: ["Ich kann das machen.", "Das muss ich kÃ¶nnen.", "Ich will das machen.", "Ich soll das machen."], answer: 1 },
      { question: "Ù…Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡ÛŒÙ… Ø±Ø²Ø±Ùˆ Ú©Ù†ÛŒÙ…:", options: ["Wir mÃ¼ssen reservieren.", "Wir kÃ¶nnen reservieren.", "Wir mÃ¶chten reservieren.", "Wir sollen reservieren."], answer: 2 },
      { question: "Ø¯ÙˆØ³Øª Ø¯Ø§Ø´ØªÙ†:", options: ["wollen", "kÃ¶nnen", "mÃ¶gen", "dÃ¼rfen"], answer: 2 },
      { question: "Ú©ÙˆØ¯Ú©Ø§Ù† Ø§Ø¬Ø§Ø²Ù‡ Ù†Ø¯Ø§Ø±Ù†Ø¯ Ø³ÛŒÚ¯Ø§Ø± Ø¨Ú©Ø´Ù†Ø¯:", options: ["Kinder mÃ¼ssen nicht rauchen.", "Kinder dÃ¼rfen nicht rauchen.", "Kinder sollen nicht rauchen.", "Kinder kÃ¶nnen nicht rauchen."], answer: 1 },
      { question: "Ich ___ gut schwimmen. (Ø¨لØ¯Ù…)", options: ["muss", "darf", "kann", "will"], answer: 2 }
    ]
  }
};
