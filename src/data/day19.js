export const day19Data = {
  title: "Ø±ÙˆØ² Û±Û¹: Ø¬Ù…لØ§Øª Ù¾ÛŒØ±Ùˆ Ø¨Ø§ weil Ùˆ dass - ÙØ¹ل Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ Ù…ÛŒâ€ŒØ±ÙˆØ¯",
  objective: "Ø¯Ø± Ø§ÛŒÙ† Ø¯Ø±Ø³ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒØ¯ Ú†Ú¯ÙˆÙ†Ù‡ Ø¬Ù…لØ§Øª Ù¾ÛŒØ±Ùˆ Ø¨Ø§ weil (Ú†ÙˆÙ†/Ø¨Ù‡â€ŒØ®Ø§Ø·Ø± Ø§ÛŒÙ†Ú©Ù‡) Ùˆ dass (Ú©Ù‡) Ø¨Ø³Ø§Ø²ÛŒØ¯. Ù†Ú©ØªÙ‡ Ú©لÛŒØ¯ÛŒ: Ø¯Ø± Ø¬Ù…لØ§Øª Ù¾ÛŒØ±Ùˆ ÙØ¹ل Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯.",
  grammarData: {
    subtitle: "NebensÃ¤tze mit weil und dass ل ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø± Ø¬Ù…لÙ‡",
    content: [
      {
        type: "text",
        title: "Ø¬Ù…لÙ‡ Ù¾ÛŒØ±Ùˆ Ú†ÛŒØ³ØªØŸ",
        text: "Ø¬Ù…لÙ‡ Ù¾ÛŒØ±Ùˆ (Nebensatz) Ø¬Ù…لÙ‡â€ŒØ§ÛŒ Ø§Ø³Øª Ú©Ù‡ Ø¨Ù‡ ØªÙ†Ù‡Ø§ÛŒÛŒ Ù…Ø¹Ù†Ø§ÛŒ Ú©Ø§Ù…ل Ù†Ø¯Ø§Ø±Ø¯ Ùˆ Ù‡Ù…ÛŒØ´Ù‡ Ø¨Ø§ ÛŒÚ© Ø¬Ù…لÙ‡ Ø§ØµلÛŒ (Hauptsatz) Ù‡Ù…Ø±Ø§Ù‡ Ø§Ø³Øª. Ø¨Ø§ Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù¾ÛŒØ±Ùˆ (unterordnende Konjunktionen) Ù…Ø«ل weil Ùˆ dassØŒ ÙØ¹ل Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ù¾ÛŒØ±Ùˆ Ù…ÛŒâ€ŒØ±ÙˆØ¯. Ø³Ø§Ø®ØªØ§Ø±: ÙØ§Ø¹ل + ... + ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø±."
      },
      {
        type: "table",
        title: "Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù¾ÛŒØ±Ùˆ Ùˆ ØªØ±ØªÛŒØ¨ ÙØ¹ل",
        rows: [
          { de: "weil (Ú†ÙˆÙ†/Ø¨Ù‡â€ŒØ®Ø§Ø·Ø± Ø§ÛŒÙ†Ú©Ù‡)", fa: "Ø¬Ù…لÙ‡ Ø§ØµلÛŒ + , + weil + ÙØ§Ø¹ل + ... + ÙØ¹ل Ø¢Ø®Ø±" },
          { de: "dass (Ú©Ù‡)", fa: "Ø¬Ù…لÙ‡ Ø§ØµلÛŒ + , + dass + ÙØ§Ø¹ل + ... + ÙØ¹ل Ø¢Ø®Ø±" },
          { de: "wenn (ÙˆÙ‚ØªÛŒ/Ø§Ú¯Ø±)", fa: "Ø¬Ù…لÙ‡ Ø§ØµلÛŒ + , + wenn + ÙØ§Ø¹ل + ... + ÙØ¹ل Ø¢Ø®Ø±" },
          { de: "als (ÙˆÙ‚ØªÛŒ Ú©Ù‡ - Ú¯Ø°Ø´ØªÙ‡)", fa: "Ø¬Ù…لÙ‡ Ø§ØµلÛŒ + , + als + ÙØ§Ø¹ل + ... + ÙØ¹ل Ø¢Ø®Ø±" },
          { de: "ob (Ø¢ÛŒØ§)", fa: "Ø¬Ù…لÙ‡ Ø§ØµلÛŒ + , + ob + ÙØ§Ø¹ل + ... + ÙØ¹ل Ø¢Ø®Ø±" }
        ]
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ weil",
        items: [
          { de: "Ich bleibe zu Hause, weil ich krank bin.", fa: "Ø¯Ø± Ø®Ø§Ù†Ù‡ Ù…ÛŒâ€ŒÙ…Ø§Ù†Ù…ØŒ Ú†ÙˆÙ† Ø¨ÛŒÙ…Ø§Ø±Ù…." },
          { de: "Er lernt Deutsch, weil er in Deutschland arbeiten mÃ¶chte.", fa: "Ø§Ùˆ Ø¢لÙ…Ø§Ù†ÛŒ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ØŒ Ú†ÙˆÙ† Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯ Ø¯Ø± Ø¢لÙ…Ø§Ù† Ú©Ø§Ø± Ú©Ù†Ø¯." },
          { de: "Sie ist mÃ¼de, weil sie schlecht geschlafen hat.", fa: "Ø§Ùˆ Ø®Ø³ØªÙ‡ Ø§Ø³ØªØŒ Ú†ÙˆÙ† Ø¨Ø¯ Ø®ÙˆØ§Ø¨ÛŒØ¯Ù‡." },
          { de: "Wir gehen spazieren, weil das Wetter schÃ¶n ist.", fa: "Ù¾ÛŒØ§Ø¯Ù‡â€ŒØ±ÙˆÛŒ Ù…ÛŒâ€ŒØ±ÙˆÛŒÙ…ØŒ Ú†ÙˆÙ† Ù‡ÙˆØ§ Ø®ÙˆØ¨ Ø§Ø³Øª." },
          { de: "Er kommt nicht, weil er viel Arbeit hat.", fa: "Ø§Ùˆ Ù†Ù…ÛŒâ€ŒØ¢ÛŒØ¯ØŒ Ú†ÙˆÙ† Ú©Ø§Ø± Ø²ÛŒØ§Ø¯ÛŒ Ø¯Ø§Ø±Ø¯." }
        ]
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ dass",
        items: [
          { de: "Ich weiÃŸ, dass er heute kommen wird.", fa: "Ù…ÛŒâ€ŒØ¯Ø§Ù†Ù… Ú©Ù‡ Ø§Ùˆ Ø§Ù…Ø±ÙˆØ² Ø®ÙˆØ§Ù‡Ø¯ Ø¢Ù…Ø¯." },
          { de: "Sie glaubt, dass Deutsch schwer ist.", fa: "Ø§Ùˆ ÙÚ©Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ú©Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ Ø³Ø®Øª Ø§Ø³Øª." },
          { de: "Ich hoffe, dass du morgen Zeit hast.", fa: "Ø§Ù…ÛŒØ¯ÙˆØ§Ø±Ù… Ú©Ù‡ ÙØ±Ø¯Ø§ ÙˆÙ‚Øª Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´ÛŒ." },
          { de: "Er sagt, dass das Essen gut schmeckt.", fa: "Ø§Ùˆ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒØ¯ Ú©Ù‡ ØºØ°Ø§ Ø®ÙˆØ¨ Ù…Ø²Ù‡ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯." },
          { de: "Es ist wichtig, dass man jeden Tag Ã¼bt.", fa: "Ù…Ù‡Ù… Ø§Ø³Øª Ú©Ù‡ Ù‡Ø± Ø±ÙˆØ² ØªÙ…Ø±ÛŒÙ† Ú©Ù†ÛŒÙ…." }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ø¨Ø³ÛŒØ§Ø± Ù…Ù‡Ù…!",
        text: "Ø¬Ù…لÙ‡â€ŒÙ‡Ø§ÛŒÛŒ Ú©Ù‡ Ø¨Ø§ dass Ø´Ø±ÙˆØ¹ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯ØŒ ÙØ¹ل Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û² Ù†Ø¯Ø§Ø±Ù†Ø¯! Ø¬Ù…لÙ‡ Ø¨Ø§ dass Ø´Ø±ÙˆØ¹ Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ùˆ ÙØ¹ل Ø¯Ø± Ø§Ù†ØªÙ‡Ø§ Ù…ÛŒâ€ŒØ¢ÛŒØ¯. Ù…Ø«Ø§ل: Dass er kommt, freut mich. (Ø§ÛŒÙ†Ú©Ù‡ Ø§Ùˆ Ù…ÛŒâ€ŒØ¢ÛŒØ¯ØŒ Ø®ÙˆØ´Ø­Ø§لÙ… Ù…ÛŒâ€ŒÚ©Ù†Ø¯.)"
      },
      {
        type: "table",
        title: "Ù…Ù‚Ø§ÛŒØ³Ù‡: denn Ø¯Ø± Ù…Ù‚Ø§Ø¨ل weil",
        rows: [
          { de: "denn: Ø­Ø±Ù Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡", fa: "ÙØ¹ل Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û²: Ich bleibe, denn ich bin mÃ¼de." },
          { de: "weil: Ø­Ø±Ù Ø±Ø¨Ø· Ù¾ÛŒØ±Ùˆ", fa: "ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø±: Ich bleibe, weil ich mÃ¼de bin." },
          { de: "weil Ø±Ø³Ù…ÛŒâ€ŒØªØ± Ø§Ø³Øª", fa: "Ø¯Ø± Ù†ÙˆØ´ØªØ§Ø± Ùˆ Ø§Ù…ØªØ­Ø§Ù† weil ØªØ±Ø¬ÛŒØ­ Ø¯Ø§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯" },
          { de: "denn ÙÙ‚Ø· Ø¯Ø± Ù…Ú©Ø§لÙ…Ù‡", fa: "Ø¯Ø± Ù…Ú©Ø§لÙ…Ù‡ denn Ø±Ø§ÛŒØ¬â€ŒØªØ± Ùˆ Ø³Ø§Ø¯Ù‡â€ŒØªØ± Ø§Ø³Øª" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "weil ÛŒØ§ dassØŸ",
        questions: [
          {
            question: "Ø¯Ø± Ø¬Ù…لÙ‡ Ù¾ÛŒØ±Ùˆ ÙØ¹ل Ú©Ø¬Ø§ Ù…ÛŒâ€ŒØ±ÙˆØ¯ØŸ",
            questionDe: "Wo steht das Verb im Nebensatz?",
            options: [
              { text: "Ø¯Ø± Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡", isCorrect: true },
              { text: "Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Ø¯ÙˆÙ…", isCorrect: false },
              { text: "Ù‚Ø¨ل Ø§Ø² ÙØ§Ø¹ل", isCorrect: false },
              { text: "Ø¨Ø¹Ø¯ Ø§Ø² ÙØ§Ø¹ل", isCorrect: false }
            ],
            explanation: "Ø¯Ø± Ø¬Ù…لÙ‡ Ù¾ÛŒØ±Ùˆ ÙØ¹ل Ù‡Ù…ÛŒØ´Ù‡ Ø¯Ø± Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ù‚Ø±Ø§Ø± Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich weiÃŸ, dass er kommt.", isCorrect: true },
              { text: "Ich weiÃŸ, dass er kommt werden.", isCorrect: false },
              { text: "Ich weiÃŸ, dass kommt er.", isCorrect: false },
              { text: "Ich weiÃŸ, er dass kommt.", isCorrect: false }
            ],
            explanation: "Ø¨Ø§ dass ÙØ¹ل Ø¯Ø± Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯: dass er kommt."
          },
          {
            question: "weil Ø¨Ø±Ø§ÛŒ Ú†Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "WofÃ¼r verwendet man لweilل?",
            options: [
              { text: "Ø¨ÛŒØ§Ù† Ø¯لÛŒل", isCorrect: true },
              { text: "Ø¨ÛŒØ§Ù† Ù†ØªÛŒØ¬Ù‡", isCorrect: false },
              { text: "Ø¨ÛŒØ§Ù† Ø²Ù…Ø§Ù†", isCorrect: false },
              { text: "Ø¨ÛŒØ§Ù† Ø´Ø±Ø·", isCorrect: false }
            ],
            explanation: "weil Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ø¯لÛŒل Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: Ich bleibe, weil ich mÃ¼de bin."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "Ø¬Ù…لØ§Øª Ù¾ÛŒØ±Ùˆ Ø±Ø§ Ú©Ø§Ù…ل Ú©Ù†ÛŒØ¯",
        instruction: "ÙØ¹ل Ø±Ø§ Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ ØµØ­ÛŒØ­ Ù‚Ø±Ø§Ø± Ø¯Ù‡ÛŒØ¯ (Ø¯Ø± Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ù¾ÛŒØ±Ùˆ).",
        blanks: [
          { sentence: "Ich bleibe zu Hause, weil ich mÃ¼de ___ (sein).", answer: "bin", hint: "weil + ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø±: mÃ¼de bin" },
          { sentence: "Er glaubt, dass Deutsch schwer ___ (sein).", answer: "ist", hint: "dass + ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø±: schwer ist" },
          { sentence: "Sie kommt nicht, weil sie viel Arbeit ___ (haben).", answer: "hat", hint: "weil + ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø±: Arbeit hat" },
          { sentence: "Ich hoffe, dass du morgen Zeit ___ (haben).", answer: "hast", hint: "dass + ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø±: Zeit hast" },
          { sentence: "Wir gehen spazieren, weil das Wetter gut ___ (sein).", answer: "ist", hint: "weil + ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø±: gut ist" },
          { sentence: "WeiÃŸt du, ob er heute ___ (kommen)?", answer: "kommt", hint: "ob + ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø±: heute kommt" },
          { sentence: "Ich finde, dass das Buch interessant ___ (sein).", answer: "ist", hint: "dass + ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø±: interessant ist" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù¾ÛŒØ±Ùˆ Ùˆ ÙˆØ§Ú˜Ú¯Ø§Ù† Ù…Ø±ØªØ¨Ø·",
        words: [
          { de: "weil", fa: "Ú†ÙˆÙ†ØŒ Ø¨Ù‡â€ŒØ®Ø§Ø·Ø± Ø§ÛŒÙ†Ú©Ù‡", article: "-", plural: "-", examples: [{ de: "Ich lerne, weil ich die PrÃ¼fung bestehen will.", fa: "Ø¯Ø±Ø³ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù†Ù…ØŒ Ú†ÙˆÙ† Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ø§Ù…ØªØ­Ø§Ù† Ø±Ø§ Ù‚Ø¨Ùˆل Ø´ÙˆÙ…." }] },
          { de: "dass", fa: "Ú©Ù‡ (Ø­Ø±Ù Ø±Ø¨Ø· Ù…ÙØ¹ÙˆلÛŒ)", article: "-", plural: "-", examples: [{ de: "Ich glaube, dass er recht hat.", fa: "ÙÚ©Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù… Ú©Ù‡ Ø­Ù‚ Ø¨Ø§ Ø§ÙˆØ³Øª." }] },
          { de: "wenn", fa: "ÙˆÙ‚ØªÛŒ/Ø§Ú¯Ø±", article: "-", plural: "-", examples: [{ de: "Wenn ich Zeit habe, komme ich.", fa: "Ø§Ú¯Ø± ÙˆÙ‚Øª Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´Ù…ØŒ Ù…ÛŒâ€ŒØ¢ÛŒÙ…." }] },
          { de: "als", fa: "ÙˆÙ‚ØªÛŒ Ú©Ù‡ (Ú¯Ø°Ø´ØªÙ‡)", article: "-", plural: "-", examples: [{ de: "Als ich jung war, spielte ich FuÃŸball.", fa: "ÙˆÙ‚ØªÛŒ Ø¬ÙˆØ§Ù† Ø¨ÙˆØ¯Ù…ØŒ ÙÙˆØªØ¨Ø§ل Ø¨Ø§Ø²ÛŒ Ù…ÛŒâ€ŒÚ©Ø±Ø¯Ù…." }] },
          { de: "ob", fa: "Ø¢ÛŒØ§ (Ø­Ø±Ù Ø±Ø¨Ø· ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ…)", article: "-", plural: "-", examples: [{ de: "Ich weiÃŸ nicht, ob er kommt.", fa: "Ù†Ù…ÛŒâ€ŒØ¯Ø§Ù†Ù… Ø¢ÛŒØ§ Ø§Ùˆ Ù…ÛŒâ€ŒØ¢ÛŒØ¯." }] },
          { de: "obwohl", fa: "Ø§Ú¯Ø±Ú†Ù‡ØŒ Ø¨Ø§ ÙˆØ¬ÙˆØ¯ Ø§ÛŒÙ†Ú©Ù‡", article: "-", plural: "-", examples: [{ de: "Obwohl es regnet, gehe ich spazieren.", fa: "Ø§Ú¯Ø±Ú†Ù‡ Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¢ÛŒØ¯ØŒ Ù¾ÛŒØ§Ø¯Ù‡â€ŒØ±ÙˆÛŒ Ù…ÛŒâ€ŒØ±ÙˆÙ…." }] },
          { de: "damit", fa: "Ø¨Ù‡â€ŒØ·ÙˆØ±ÛŒ Ú©Ù‡ØŒ ØªØ§", article: "-", plural: "-", examples: [{ de: "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann.", fa: "Ø¢لÙ…Ø§Ù†ÛŒ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù… ØªØ§ Ø¨ØªÙˆØ§Ù†Ù… Ø¯Ø± Ø¢لÙ…Ø§Ù† Ú©Ø§Ø± Ú©Ù†Ù…." }] },
          { de: "woher", fa: "Ø§Ø² Ú©Ø¬Ø§", article: "-", plural: "-", examples: [{ de: "Woher weiÃŸt du das?", fa: "Ø§Ø² Ú©Ø¬Ø§ Ø§ÛŒÙ† Ø±Ø§ Ù…ÛŒâ€ŒØ¯Ø§Ù†ÛŒØŸ" }] },
          { de: "wohin", fa: "Ø¨Ù‡ Ú©Ø¬Ø§", article: "-", plural: "-", examples: [{ de: "Wohin fÃ¤hrst du?", fa: "Ø¨Ù‡ Ú©Ø¬Ø§ Ù…ÛŒâ€ŒØ±ÙˆÛŒØŸ" }] },
          { de: "wichtig", fa: "Ù…Ù‡Ù…", article: "-", plural: "-", examples: [{ de: "Es ist wichtig, gesund zu essen.", fa: "Ù…Ù‡Ù… Ø§Ø³Øª Ú©Ù‡ Ø³Ø§لÙ… Ø¨Ø®ÙˆØ±ÛŒÙ…." }] },
          { de: "richtig", fa: "Ø¯Ø±Ø³ØªØŒ ØµØ­ÛŒØ­", article: "-", plural: "-", examples: [{ de: "Ist das richtig?", fa: "Ø¢ÛŒØ§ Ø§ÛŒÙ† Ø¯Ø±Ø³Øª Ø§Ø³ØªØŸ" }] },
          { de: "meinen", fa: "Ù†Ø¸Ø± Ø¯Ø§Ø´ØªÙ†ØŒ ÙÚ©Ø± Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Was meinst du dazu?", fa: "Ù†Ø¸Ø±Øª Ø¯Ø± Ø§ÛŒÙ† Ù…ÙˆØ±Ø¯ Ú†ÛŒØ³ØªØŸ" }] },
          { de: "glauben", fa: "Ø¨Ø§ÙˆØ± Ú©Ø±Ø¯Ù†ØŒ ÙÚ©Ø± Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich glaube, dass er die Wahrheit sagt.", fa: "ÙÚ©Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù… Ú©Ù‡ Ø§Ùˆ Ø­Ù‚ÛŒÙ‚Øª Ù…ÛŒâ€ŒÚ¯ÙˆÛŒØ¯." }] },
          { de: "hoffen", fa: "Ø§Ù…ÛŒØ¯ÙˆØ§Ø± Ø¨ÙˆØ¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich hoffe, dass alles gut geht.", fa: "Ø§Ù…ÛŒØ¯ÙˆØ§Ø±Ù… Ú©Ù‡ Ù‡Ù…Ù‡ Ú†ÛŒØ² Ø®ÙˆØ¨ Ù¾ÛŒØ´ Ø¨Ø±ÙˆØ¯." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Mein Freund Tom lernt sehr fleiÃŸig Deutsch, weil er nÃ¤chstes Jahr nach Berlin ziehen mÃ¶chte. Er glaubt, dass Berlin eine tolle Stadt ist. Ich weiÃŸ nicht, ob das stimmt, denn ich war noch nie dort. Er sagt, dass es dort viele interessante Jobs gibt. Obwohl Deutsch schwer ist, macht er gute Fortschritte. Er hofft, dass er die B1-PrÃ¼fung besteht. Ich finde, dass er sehr mutig ist, weil er alles fÃ¼r Deutschland aufgibt.",
      questions: [
        { question: "Ú†Ø±Ø§ ØªØ§Ù… Ø¢لÙ…Ø§Ù†ÛŒ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ØŸ", answer: "Ú†ÙˆÙ† Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯ Ø³Ø§ل Ø¢ÛŒÙ†Ø¯Ù‡ Ø¨Ù‡ Ø¨Ø±لÛŒÙ† Ø¨Ø±ÙˆØ¯." },
        { question: "Ø§Ùˆ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¨Ø±لÛŒÙ† Ú†Ù‡ ÙÚ©Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", answer: "Ø§Ùˆ ÙÚ©Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ú©Ù‡ Ø¨Ø±لÛŒÙ† Ø´Ù‡Ø± ÙÙˆÙ‚â€ŒØ§لØ¹Ø§Ø¯Ù‡â€ŒØ§ÛŒ Ø§Ø³Øª." },
        { question: "Ø§Ùˆ Ú†Ù‡ Ø§Ù…ØªØ­Ø§Ù†ÛŒ Ø±Ø§ Ø§Ù…ÛŒØ¯ÙˆØ§Ø± Ø§Ø³Øª Ù‚Ø¨Ùˆل Ø´ÙˆØ¯ØŸ", answer: "Ø§Ù…ØªØ­Ø§Ù† B1." },
        { question: "Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø´Ø¬Ø§Ø¹Øª ØªØ§Ù… Ú†Ù‡ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒØ¯ØŸ", answer: "Ø§Ùˆ ÙÚ©Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ú©Ù‡ ØªØ§Ù… Ø®ÛŒلÛŒ Ø´Ø¬Ø§Ø¹ Ø§Ø³Øª Ú†ÙˆÙ† Ù‡Ù…Ù‡ Ú†ÛŒØ² Ø±Ø§ Ø¨Ø±Ø§ÛŒ Ø¢لÙ…Ø§Ù† Ø±Ù‡Ø§ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }
      ]
    }
  ],
  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ø¯لØ§ÛŒل ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø¢لÙ…Ø§Ù†ÛŒ",
      prompt: "ØªÙˆØ¶ÛŒØ­ Ø¯Ù‡ÛŒØ¯ Ú†Ø±Ø§ Ø¢لÙ…Ø§Ù†ÛŒ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒØ¯. Ø§Ø² weil Ùˆ dass Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      steps: [
        { title: "Ù…Ø±Ø­لÙ‡ Û±: Ø¯لÛŒل Ø§ØµلÛŒ", text: "Ú†Ø±Ø§ Ø¢لÙ…Ø§Ù†ÛŒ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒØ¯ØŸ Ø§Ø² weil Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Ich lerne Deutsch, weil ich in Deutschland studieren mÃ¶chte.", fa: "Ø¢لÙ…Ø§Ù†ÛŒ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù…ØŒ Ú†ÙˆÙ† Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ø¯Ø± Ø¢لÙ…Ø§Ù† ØªØ­ØµÛŒل Ú©Ù†Ù…." } },
        { title: "Ù…Ø±Ø­لÙ‡ Û²: Ù†Ø¸Ø± Ø´Ù…Ø§", text: "Ù†Ø¸Ø±ØªØ§Ù† Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø²Ø¨Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒ Ú†ÛŒØ³ØªØŸ Ø§Ø² dass Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Ich finde, dass Deutsch interessant ist.", fa: "ÙÚ©Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù… Ú©Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ Ø¬Ø§لØ¨ Ø§Ø³Øª." } },
        { title: "Ù…Ø±Ø­لÙ‡ Û³: Ù‡Ø¯Ù", text: "Ù‡Ø¯Ù Ø´Ù…Ø§ Ú†ÛŒØ³ØªØŸ Ø§Ø² dass Ùˆ weil Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Ich hoffe, dass ich nÃ¤chstes Jahr die B1-PrÃ¼fung bestehe.", fa: "Ø§Ù…ÛŒØ¯ÙˆØ§Ø±Ù… Ú©Ù‡ Ø³Ø§ل Ø¢ÛŒÙ†Ø¯Ù‡ Ø§Ù…ØªØ­Ø§Ù† B1 Ø±Ø§ Ù‚Ø¨Ùˆل Ø´ÙˆÙ…." } }
      ],
      modelAnswer: "Ich lerne Deutsch, weil ich in Deutschland leben und arbeiten mÃ¶chte. Ich finde, dass Deutsch eine schÃ¶ne Sprache ist, obwohl die Grammatik manchmal schwer ist. Ich glaube, dass es wichtig ist, jeden Tag zu Ã¼ben. Deshalb lerne ich jeden Tag mindestens eine Stunde. Ich hoffe, dass ich nÃ¤chstes Jahr die B1-PrÃ¼fung bestehe. Meine Familie sagt, dass ich sehr fleiÃŸig bin. Das freut mich, weil es mir zeigt, dass ich auf dem richtigen Weg bin."
    }
  ],
  listening: [
    {
      title: "weil Ùˆ dass Ø¯Ø± Ù…Ú©Ø§لÙ…Ù‡",
      source: "Deutsche Grammatik - NebensÃ¤tze",
      link: "https://www.youtube.com/watch?v=sHFbZI7AYcY",
      instructions: "Ø¨Ù‡ Ø§ÛŒÙ† ÙˆÛŒØ¯ÛŒÙˆ Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ ØªÙˆØ¬Ù‡ Ú©Ù†ÛŒØ¯ Ú©Ù‡ Ú†Ø·ÙˆØ± weil Ùˆ dass Ø¨Ø§Ø¹Ø« Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯ ÙØ¹ل Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ø¨Ø±ÙˆØ¯. Ûµ Ù…Ø«Ø§ل Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯."
    }
  ],
  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ø¬Ù…لØ§Øª Ù¾ÛŒØ±Ùˆ",
      pattern: "A: Warum lernst du Deutsch? B: Ich lerne Deutsch, weil ich in Deutschland leben mÃ¶chte. Ich finde, dass es dort gute MÃ¶glichkeiten gibt.",
      exercise: "Ø¨Ù‡ Ûµ Ø³Ø¤Ø§ل Â«Warum?Â» Ø¬ÙˆØ§Ø¨ Ø¯Ù‡ÛŒØ¯ Ùˆ Ø¯Ø± Ù‡Ø± Ø¬ÙˆØ§Ø¨ Ø§Ø² weil Ùˆ dass Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯."
    }
  ],
  cultureTip: "Ø¯Ø± Ù…Ú©Ø§لÙ…Ø§Øª Ø¢لÙ…Ø§Ù†ÛŒØŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Ø¬Ù…لØ§Øª Ù¾ÛŒØ±Ùˆ Ù†Ø´Ø§Ù†â€ŒØ¯Ù‡Ù†Ø¯Ù‡ Ø³Ø·Ø­ Ø¨Ø§لØ§ØªØ± Ø²Ø¨Ø§Ù†ÛŒ Ø§Ø³Øª. Ø¯Ø± Ø§Ù…ØªØ­Ø§Ù†Ø§Øª A2 Ùˆ B1ØŒ Ø§Ù†ØªØ¸Ø§Ø± Ù…ÛŒâ€ŒØ±ÙˆØ¯ Ú©Ù‡ Ø¨ØªÙˆØ§Ù†ÛŒØ¯ Ø§Ø² weil Ùˆ dass Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯. ØªÙØ§ÙˆØª denn Ùˆ weil Ù‡Ù… Ù…Ù‡Ù… Ø§Ø³Øª: denn Ø¨Ø±Ø§ÛŒ Ù…Ú©Ø§لÙ…Ù‡ Ø±ÙˆØ²Ù…Ø±Ù‡ Ùˆ weil Ø¨Ø±Ø§ÛŒ Ù…ØªÙ†â€ŒÙ‡Ø§ÛŒ Ø±Ø³Ù…ÛŒâ€ŒØªØ± ØªØ±Ø¬ÛŒØ­ Ø¯Ø§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯.",
  examData: {
    questions: [
      { question: "Ø¯Ø± Ø¬Ù…لÙ‡ Ù¾ÛŒØ±Ùˆ ÙØ¹ل Ú©Ø¬Ø§ Ù…ÛŒâ€ŒØ±ÙˆØ¯ØŸ", options: ["Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Ø¯ÙˆÙ…", "Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡", "Ù‚Ø¨ل Ø§Ø² ÙØ§Ø¹ل", "Ø¨Ø¹Ø¯ Ø§Ø² ÙØ§Ø¹ل"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich weiÃŸ, dass kommt er.", "Ich weiÃŸ, dass er kommt.", "Ich weiÃŸ, er dass kommt.", "Ich weiÃŸ, dass er kommt wird."], answer: 1 },
      { question: "weil Ø¨Ø±Ø§ÛŒ Ú†Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ù†ØªÛŒØ¬Ù‡", "Ø¯لÛŒل", "Ø²Ù…Ø§Ù†", "Ø´Ø±Ø·"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Er kommt nicht, weil ist er krank.", "Er kommt nicht, weil er krank ist.", "Er kommt nicht, weil er ist krank.", "Er kommt nicht, weil krank er ist."], answer: 1 },
      { question: "dass Ú†Ù‡ Ù…Ø¹Ù†Ø§ÛŒÛŒ Ø¯Ø§Ø±Ø¯ØŸ", options: ["Ú†ÙˆÙ†", "Ú©Ù‡", "Ø§Ú¯Ø±", "ÙˆÙ‚ØªÛŒ"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø­Ø±Ù Ø±Ø¨Ø· Ù¾ÛŒØ±Ùˆ Ù†ÛŒØ³ØªØŸ", options: ["weil", "dass", "aber", "ob"], answer: 2 },
      { question: "Â«Ich hoffe, dass du kommst.Â» ÙØ¹ل Ø¯Ø± Ú©Ø¬Ø§Ø³ØªØŸ", options: ["Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û²", "Ø¢Ø®Ø± Ø¬Ù…لÙ‡", "Ø§Ùˆل Ø¬Ù…لÙ‡", "ÙˆØ³Ø· Ø¬Ù…لÙ‡"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Er sagt, dass er mÃ¼de ist.", "Er sagt, dass ist er mÃ¼de.", "Er sagt, er dass mÃ¼de ist.", "Er sagt, dass er ist mÃ¼de."], answer: 0 },
      { question: "weil Ùˆ denn Ù‡Ø± Ø¯Ùˆ Ø¨Ø±Ø§ÛŒ Ú†Ù‡ Ù‡Ø³ØªÙ†Ø¯ØŸ", options: ["Ø¨ÛŒØ§Ù† Ù†ØªÛŒØ¬Ù‡", "Ø¨ÛŒØ§Ù† Ø¯لÛŒل", "Ø¨ÛŒØ§Ù† Ø²Ù…Ø§Ù†", "Ø¨ÛŒØ§Ù† Ø´Ø±Ø·"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ Ø§Ø² Ù†Ø¸Ø± Ú¯Ø±Ø§Ù…Ø±ÛŒ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich bin mÃ¼de, weil habe ich schlecht geschlafen.", "Ich bin mÃ¼de, weil ich schlecht geschlafen habe.", "Ich bin mÃ¼de, weil ich habe schlecht geschlafen.", "Ich bin mÃ¼de, weil geschlafen ich schlecht habe."], answer: 1 }
    ]
  }
};
