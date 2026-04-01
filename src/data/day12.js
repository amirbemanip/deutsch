export const day12Data = {
  title: "Ø±ÙˆØ² Û±Û²: Ø²Ù…Ø§Ù† - Ø³Ø§Ø¹ØªØŒ Ø±ÙˆØ²Ù‡Ø§ØŒ Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø³Ø§Ø¹Øª Ú¯ÙØªÙ†ØŒ Ø±ÙˆØ²Ù‡Ø§ÛŒ Ù‡ÙØªÙ‡ Ùˆ ØªÙˆØµÛŒÙ Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡",
  grammarData: {
    subtitle: "Ø²Ù…Ø§Ù† Ùˆ Ø³Ø§Ø¹Øª",
    content: [
      {
        type: "text",
        title: "Ø³Ø§Ø¹Øª Ú¯ÙØªÙ† Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ",
        text: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ø³Ø§Ø¹Øª Ø±Ø§ Ø¨Ø§ Wie viel Uhr ist es? (Ø³Ø§Ø¹Øª Ú†Ù†Ø¯ Ø§Ø³ØªØŸ) Ù…ÛŒâ€ŒÙ¾Ø±Ø³Ù†Ø¯. Ù¾Ø§Ø³Ø®: Es ist ein Uhr (Ø³Ø§Ø¹Øª ÛŒÚ© Ø§Ø³Øª) ÛŒØ§ Es ist zwei Uhr (Ø³Ø§Ø¹Øª Ø¯Ùˆ Ø§Ø³Øª). Ø¨Ø±Ø§ÛŒ Ø¯Ù‚ÛŒÙ‚Ù‡â€ŒÙ‡Ø§: Es ist fÃ¼nf nach drei (Ø³Ø§Ø¹Øª Ø³Ù‡ Ùˆ Ù¾Ù†Ø¬ Ø¯Ù‚ÛŒÙ‚Ù‡) ÛŒØ³ÛŒ: Es ist Viertel nach drei (Ø³Ø§Ø¹Øª Ø³Ù‡ Ùˆ Ø±Ø¨Ø¹)."
      },
      {
        type: "table",
        title: "Ø§Ø¹Ø¯Ø§Ø¯ Ùˆ Ø¯Ù‚ÛŒÙ‚Ù‡â€ŒÙ‡Ø§",
        rows: [
          { de: "Es ist ein Uhr.", fa: "Ø³Ø§Ø¹Øª ÛŒÚ© Ø§Ø³Øª." },
          { de: "Es ist zwei Uhr.", fa: "Ø³Ø§Ø¹Øª Ø¯Ùˆ Ø§Ø³Øª." },
          { de: "Es ist halb drei.", fa: "Ø³Ø§Ø¹Øª Ø¯Ùˆ Ùˆ Ù†ÛŒÙ… Ø§Ø³Øª." },
          { de: "Es ist Viertel nach drei.", fa: "Ø³Ø§Ø¹Øª Ø³Ù‡ Ùˆ Ø±Ø¨Ø¹ Ø§Ø³Øª." },
          { de: "Es ist Viertel vor drei.", fa: "Ø³Ø§Ø¹Øª Ø³Ù‡ Ú©Ù…ØªØ± Ø±Ø¨Ø¹ Ø§Ø³Øª." },
          { de: "Es ist zehn nach vier.", fa: "Ø³Ø§Ø¹Øª Ú†Ù‡Ø§Ø± Ùˆ Ø¯Ù‡ Ø¯Ù‚ÛŒÙ‚Ù‡ Ø§Ø³Øª." },
          { de: "Es ist zwanzig vor fÃ¼nf.", fa: "Ø³Ø§Ø¹Øª Ù¾Ù†Ø¬ Ú©Ù…ØªØ± Ø¨ÛŒØ³Øª Ø¯Ù‚ÛŒÙ‚Ù‡ Ø§Ø³Øª." },
          { de: "Es ist fÃ¼nf vor sechs.", fa: "Ø³Ø§Ø¹Øª Ø´Ø´ Ú©Ù…ØªØ± Ù¾Ù†Ø¬ Ø¯Ù‚ÛŒÙ‚Ù‡ Ø§Ø³Øª." }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: Ù†ÛŒÙ… Ø³Ø§Ø¹Øª Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ",
        text: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ لEs ist halb dreiل ÛŒØ¹Ù†ÛŒ Ø³Ø§Ø¹Øª Ø¯Ùˆ Ùˆ Ù†ÛŒÙ… (Ù†Ù‡ Ø³Ù‡ Ùˆ Ù†ÛŒÙ…!). halb + Ø³Ø§Ø¹Øª Ø¨Ø¹Ø¯ÛŒ = Ù†ÛŒÙ… Ø³Ø§Ø¹Øª Ù‚Ø¨ل Ø§Ø² Ø¢Ù† Ø³Ø§Ø¹Øª. Ø§ÛŒÙ† ØªÙØ§ÙˆØª Ù…Ù‡Ù…ÛŒ Ø¨Ø§ ÙØ§Ø±Ø³ÛŒ Ùˆ Ø§Ù†Ú¯لÛŒØ³ÛŒ Ø¯Ø§Ø±Ø¯."
      },
      {
        type: "text",
        title: "Ø±ÙˆØ²Ù‡Ø§ÛŒ Ù‡ÙØªÙ‡",
        text: "der Montag (Ø¯ÙˆØ´Ù†Ø¨Ù‡)ØŒ der Dienstag (Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡)ØŒ der Mittwoch (Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡)ØŒ der Donnerstag (Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡)ØŒ der Freitag (Ø¬Ù…Ø¹Ù‡)ØŒ der Samstag/Sonnabend (Ø´Ù†Ø¨Ù‡)ØŒ der Sonntag (ÛŒÚ©Ø´Ù†Ø¨Ù‡). Ø¨Ø§ Ø­Ø±Ù Ø§Ø¶Ø§ÙÙ‡ am: am Montag (Ø±ÙˆØ² Ø¯ÙˆØ´Ù†Ø¨Ù‡)."
      },
      {
        type: "table",
        title: "Ø±ÙˆØ²Ù‡Ø§ÛŒ Ù‡ÙØªÙ‡",
        rows: [
          { de: "der Montag", fa: "Ø¯ÙˆØ´Ù†Ø¨Ù‡" },
          { de: "der Dienstag", fa: "Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡" },
          { de: "der Mittwoch", fa: "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡" },
          { de: "der Donnerstag", fa: "Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡" },
          { de: "der Freitag", fa: "Ø¬Ù…Ø¹Ù‡" },
          { de: "der Samstag", fa: "Ø´Ù†Ø¨Ù‡" },
          { de: "der Sonntag", fa: "ÛŒÚ©Ø´Ù†Ø¨Ù‡" }
        ]
      },
      {
        type: "text",
        title: "Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡ (Tagesablauf)",
        text: "Ø¨Ø±Ø§ÛŒ ØªÙˆØµÛŒÙ Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡ Ø§Ø² Ø²Ù…Ø§Ù† Ùˆ ÙØ¹ل Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: Ich stehe um 7 Uhr auf (Ø³Ø§Ø¹Øª Û· Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆÙ…). Ø³Ù¾Ø³ ØµØ¨Ø­Ø§Ù†Ù‡ Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…: Ich frÃ¼hstÃ¼cke um 8 Uhr."
      },
      {
        type: "examples",
        title: "Ø¬Ù…لØ§Øª Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡",
        items: [
          { de: "Ich stehe um 7 Uhr auf.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û· Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆÙ…." },
          { de: "Ich frÃ¼hstÃ¼cke um 8 Uhr.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û¸ ØµØ¨Ø­Ø§Ù†Ù‡ Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…." },
          { de: "Ich gehe um 9 Uhr zur Arbeit.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û¹ Ø¨Ù‡ Ø³Ø± Ú©Ø§Ø± Ù…ÛŒâ€ŒØ±ÙˆÙ…." },
          { de: "Ich esse um 12 Uhr zu Mittag.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û±Û² Ù†Ø§Ù‡Ø§Ø± Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…." },
          { de: "Ich komme um 6 Uhr nach Hause.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û¶ Ø¨Ù‡ Ø®Ø§Ù†Ù‡ Ù…ÛŒâ€ŒØ¢ÛŒÙ…." },
          { de: "Ich esse um 8 Uhr zu Abend.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û¸ Ø´Ø§Ù… Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…." },
          { de: "Ich gehe um 11 Uhr ins Bett.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û±Û± Ø¨Ù‡ Ø±Ø®ØªØ®ÙˆØ§Ø¨ Ù…ÛŒâ€ŒØ±ÙˆÙ…." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ†: Ø³Ø§Ø¹Øª Ùˆ Ø²Ù…Ø§Ù†",
        questions: [
          {
            question: "لØ³Ø§Ø¹Øª Ø¯Ùˆ Ùˆ Ù†ÛŒÙ…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man ل2:30ل auf Deutsch?",
            options: [
              { text: "Es ist halb drei.", isCorrect: true },
              { text: "Es ist halb zwei.", isCorrect: false },
              { text: "Es ist zwei Uhr dreiÃŸig.", isCorrect: false },
              { text: "Es ist dreiÃŸig nach zwei.", isCorrect: false }
            ],
            explanation: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ لhalb + Ø³Ø§Ø¹Øª Ø¨Ø¹Ø¯ل ÛŒØ¹Ù†ÛŒ Ù†ÛŒÙ… Ø³Ø§Ø¹Øª Ù‚Ø¨ل Ø§Ø² Ø¢Ù† Ø³Ø§Ø¹Øª."
          },
          {
            question: "لØ±ÙˆØ² Ø¯ÙˆØ´Ù†Ø¨Ù‡ل Ú†Ú¯ÙˆÙ†Ù‡ Ú¯ÙØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man لon Mondayل?",
            options: [
              { text: "am Montag", isCorrect: true },
              { text: "der Montag", isCorrect: false },
              { text: "im Montag", isCorrect: false },
              { text: "auf Montag", isCorrect: false }
            ],
            explanation: "Ø¨Ø±Ø§ÛŒ Ú¯ÙØªÙ† لØ±ÙˆØ² Ø¯ÙˆØ´Ù†Ø¨Ù‡ل Ø§Ø² am + Ø±ÙˆØ² Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          },
          {
            question: "لÙ…Ù† Ø³Ø§Ø¹Øª Û· Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆÙ…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man لI get up at 7 oلclockل?",
            options: [
              { text: "Ich stehe um 7 Uhr auf.", isCorrect: true },
              { text: "Ich stehe um 7 Uhr.", isCorrect: false },
              { text: "Ich aufstehe um 7 Uhr.", isCorrect: false },
              { text: "Ich gehe um 7 Uhr auf.", isCorrect: false }
            ],
            explanation: "Ø§Ø² ÙØ¹ل separable (aufstehen) Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÚ©Ù…ÛŒل Ø¬Ù…لØ§Øª: Ø²Ù…Ø§Ù†",
        instruction: "Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø±Ø§ Ø¨Ø§ Ú©لÙ…Ù‡ Ù…Ù†Ø§Ø³Ø¨ Ù¾Ø± Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Es ist ___ Uhr.", answer: "drei", hint: "Ø³Ø§Ø¹Øª Ø³Ù‡" },
          { sentence: "Ich stehe um 7 Uhr ___.", answer: "auf", hint: "Ø¨لÙ†Ø¯ Ø´Ø¯Ù† (separable)" },
          { sentence: "Es ist ___ drei.", answer: "halb", hint: "Ù†ÛŒÙ… Ø³Ø§Ø¹Øª" },
          { sentence: "Ich gehe ___ Montag zur Arbeit.", answer: "am", hint: "Ø­Ø±Ù Ø§Ø¶Ø§ÙÙ‡ Ø±ÙˆØ²" },
          { sentence: "Es ist Viertel ___ drei.", answer: "nach", hint: "Ø±Ø¨Ø¹ Ø¨Ø¹Ø¯ Ø§Ø² Ø³Ù‡" },
          { sentence: "Ich ___ um 8 Uhr zu Mittag.", answer: "esse", hint: "Ø®ÙˆØ±Ø¯Ù†" },
          { sentence: "Es ist zwanzig ___ fÃ¼nf.", answer: "vor", hint: "Ø¨ÛŒØ³Øª Ø¯Ù‚ÛŒÙ‚Ù‡ Ù‚Ø¨ل Ø§Ø² Ù¾Ù†Ø¬" },
          { sentence: "Ich gehe um 11 Uhr ins ___.", answer: "Bett", hint: "Ø±Ø®ØªØ®ÙˆØ§Ø¨" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "Ø±ÙˆØ²Ù‡Ø§ÛŒ Ù‡ÙØªÙ‡",
        words: [
          { de: "der Montag", fa: "Ø¯ÙˆØ´Ù†Ø¨Ù‡", article: "der", plural: "-", examples: [{ de: "Am Montag habe ich Deutschkurs.", fa: "Ø±ÙˆØ² Ø¯ÙˆØ´Ù†Ø¨Ù‡ Ú©لØ§Ø³ Ø¢لÙ…Ø§Ù†ÛŒ Ø¯Ø§Ø±Ù…." }] },
          { de: "der Dienstag", fa: "Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡", article: "der", plural: "-", examples: [{ de: "Dienstags gehe ich ins Fitnessstudio.", fa: "Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡â€ŒÙ‡Ø§ Ø¨Ù‡ Ø¨Ø§Ø´Ú¯Ø§Ù‡ Ù…ÛŒâ€ŒØ±ÙˆÙ…." }] },
          { de: "der Mittwoch", fa: "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡", article: "der", plural: "-", examples: [{ de: "Am Mittwoch treffe ich meine Freunde.", fa: "Ø±ÙˆØ² Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡ Ø¨Ø§ Ø¯ÙˆØ³ØªØ§Ù†Ù… Ù…لØ§Ù‚Ø§Øª Ù…ÛŒâ€ŒÚ©Ù†Ù…." }] },
          { de: "der Donnerstag", fa: "Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡", article: "der", plural: "-", examples: [{ de: "Donnerstags habe ich frei.", fa: "Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡â€ŒÙ‡Ø§ Ø¢Ø²Ø§Ø¯ Ù‡Ø³ØªÙ…." }] },
          { de: "der Freitag", fa: "Ø¬Ù…Ø¹Ù‡", article: "der", plural: "-", examples: [{ de: "Am Freitag gehe ich ins Kino.", fa: "Ø±ÙˆØ² Ø¬Ù…Ø¹Ù‡ Ø¨Ù‡ Ø³ÛŒÙ†Ù…Ø§ Ù…ÛŒâ€ŒØ±ÙˆÙ…." }] },
          { de: "der Samstag", fa: "Ø´Ù†Ø¨Ù‡", article: "der", plural: "-", examples: [{ de: "Samstags schlafe ich lange.", fa: "Ø´Ù†Ø¨Ù‡â€ŒÙ‡Ø§ Ø¯ÛŒØ± Ù…ÛŒâ€ŒØ®ÙˆØ§Ø¨Ù…." }] },
          { de: "der Sonntag", fa: "ÛŒÚ©Ø´Ù†Ø¨Ù‡", article: "der", plural: "-", examples: [{ de: "Sonntags besuche ich meine Familie.", fa: "ÛŒÚ©Ø´Ù†Ø¨Ù‡â€ŒÙ‡Ø§ Ø§Ø² Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡â€ŒØ§Ù… Ø¯ÛŒØ¯Ù† Ù…ÛŒâ€ŒÚ©Ù†Ù…." }] }
        ]
      },
      {
        title: "Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡",
        words: [
          { de: "aufstehen", fa: "Ø¨لÙ†Ø¯ Ø´Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich stehe um 6 Uhr auf.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û¶ Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆÙ…." }] },
          { de: "frÃ¼hstÃ¼cken", fa: "ØµØ¨Ø­Ø§Ù†Ù‡ Ø®ÙˆØ±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich frÃ¼hstÃ¼cke um 7 Uhr.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û· ØµØ¨Ø­Ø§Ù†Ù‡ Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…." }] },
          { de: "arbeiten", fa: "Ú©Ø§Ø± Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Er arbeitet von 9 bis 17 Uhr.", fa: "Ø§Ùˆ Ø§Ø² Û¹ ØªØ§ Ûµ Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "zu Mittag essen", fa: "Ù†Ø§Ù‡Ø§Ø± Ø®ÙˆØ±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Wir essen um 12 Uhr zu Mittag.", fa: "Ù…Ø§ Ø³Ø§Ø¹Øª Û±Û² Ù†Ø§Ù‡Ø§Ø± Ù…ÛŒâ€ŒØ®ÙˆØ±ÛŒÙ…." }] },
          { de: "nach Hause kommen", fa: "Ø¨Ù‡ Ø®Ø§Ù†Ù‡ Ø¢Ù…Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich komme um 6 Uhr nach Hause.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û¶ Ø¨Ù‡ Ø®Ø§Ù†Ù‡ Ù…ÛŒâ€ŒØ¢ÛŒÙ…." }] },
          { de: "zu Abend essen", fa: "Ø´Ø§Ù… Ø®ÙˆØ±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Wir essen um 8 Uhr zu Abend.", fa: "Ù…Ø§ Ø³Ø§Ø¹Øª Û¸ Ø´Ø§Ù… Ù…ÛŒâ€ŒØ®ÙˆØ±ÛŒÙ…." }] },
          { de: "ins Bett gehen", fa: "Ø¨Ù‡ Ø±Ø®ØªØ®ÙˆØ§Ø¨ Ø±ÙØªÙ†", article: "-", plural: "-", examples: [{ de: "Ich gehe um 23 Uhr ins Bett.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û²Û³ Ø¨Ù‡ Ø±Ø®ØªØ®ÙˆØ§Ø¨ Ù…ÛŒâ€ŒØ±ÙˆÙ…." }] },
          { de: "schlafen", fa: "Ø®ÙˆØ§Ø¨ÛŒØ¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich schlafe 8 Stunden.", fa: "Ù…Ù† Û¸ Ø³Ø§Ø¹Øª Ù…ÛŒâ€ŒØ®ÙˆØ§Ø¨Ù…." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Mein Tagesablauf: Ich stehe um 6:30 Uhr auf. Um 7 Uhr frÃ¼hstÃ¼cke ich. Um 8 Uhr gehe ich zur Arbeit. Ich arbeite von 8:30 bis 17 Uhr. Um 12 Uhr esse ich zu Mittag. Um 18 Uhr komme ich nach Hause. Um 19 Uhr esse ich zu Abend. Um 22:30 Uhr gehe ich ins Bett.",
      questions: [
        { question: "Ø§Ùˆ Ú†Ù‡ Ø³Ø§Ø¹ØªÛŒ Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", answer: "Ø§Ùˆ Ø³Ø§Ø¹Øª Û¶:Û³Û° Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆØ¯." },
        { question: "Ø§Ùˆ Ú†Ù‡ Ø³Ø§Ø¹ØªÛŒ Ø¨Ù‡ Ø³Ø± Ú©Ø§Ø± Ù…ÛŒâ€ŒØ±ÙˆØ¯ØŸ", answer: "Ø§Ùˆ Ø³Ø§Ø¹Øª Û¸ Ø¨Ù‡ Ø³Ø± Ú©Ø§Ø± Ù…ÛŒâ€ŒØ±ÙˆØ¯." },
        { question: "Ø§Ùˆ Ú†Ù‡ Ø³Ø§Ø¹ØªÛŒ Ù†Ø§Ù‡Ø§Ø± Ù…ÛŒâ€ŒØ®ÙˆØ±Ø¯ØŸ", answer: "Ø§Ùˆ Ø³Ø§Ø¹Øª Û±Û² Ù†Ø§Ù‡Ø§Ø± Ù…ÛŒâ€ŒØ®ÙˆØ±Ø¯." },
        { question: "Ø§Ùˆ Ú†Ù‡ Ø³Ø§Ø¹ØªÛŒ Ø¨Ù‡ Ø±Ø®ØªØ®ÙˆØ§Ø¨ Ù…ÛŒâ€ŒØ±ÙˆØ¯ØŸ", answer: "Ø§Ùˆ Ø³Ø§Ø¹Øª Û²Û²:Û³Û° Ø¨Ù‡ Ø±Ø®ØªØ®ÙˆØ§Ø¨ Ù…ÛŒâ€ŒØ±ÙˆØ¯." }
      ]
    }
  ],
  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡",
      prompt: "Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡ Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯: Ú†Ù‡ Ø³Ø§Ø¹ØªÛŒ Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆÛŒØ¯ØŒ ØµØ¨Ø­Ø§Ù†Ù‡ Ù…ÛŒâ€ŒØ®ÙˆØ±ÛŒØ¯ØŒ Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯ Ùˆ ...",
      steps: [
        { title: "Ù‚Ø¯Ù… Ø§Ùˆل: ØµØ¨Ø­", text: "Ú©Ø§Ø±Ù‡Ø§ÛŒ ØµØ¨Ø­ Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.", example: { de: "Ich stehe um 7 Uhr auf und frÃ¼hstÃ¼cke um 7:30.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û· Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆÙ… Ùˆ Ø³Ø§Ø¹Øª Û·:Û³Û° ØµØ¨Ø­Ø§Ù†Ù‡ Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…." } },
        { title: "Ù‚Ø¯Ù… Ø¯ÙˆÙ…: Ø±ÙˆØ²", text: "Ú©Ø§Ø±Ù‡Ø§ÛŒ Ø±ÙˆØ² Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.", example: { de: "Ich arbeite von 9 bis 17 Uhr.", fa: "Ù…Ù† Ø§Ø² Û¹ ØªØ§ Ûµ Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù…." } },
        { title: "Ù‚Ø¯Ù… Ø³ÙˆÙ…: Ø´Ø¨", text: "Ú©Ø§Ø±Ù‡Ø§ÛŒ Ø´Ø¨ Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.", example: { de: "Um 22 Uhr gehe ich ins Bett.", fa: "Ø³Ø§Ø¹Øª Û²Û² Ø¨Ù‡ Ø±Ø®ØªØ®ÙˆØ§Ø¨ Ù…ÛŒâ€ŒØ±ÙˆÙ…." } }
      ],
      modelAnswer: "Mein Tagesablauf:\n\nUm 6:30 Uhr stehe ich auf. Um 7 Uhr frÃ¼hstÃ¼cke ich: Ich esse Brot und trinke Kaffee. Um 8 Uhr gehe ich zur Arbeit. Ich arbeite von 8:30 bis 17 Uhr. Um 12 Uhr esse ich zu Mittag. Um 17:30 Uhr komme ich nach Hause. Um 19 Uhr esse ich zu Abend. Um 20 Uhr schaue ich fern oder lese ein Buch. Um 22:30 Uhr gehe ich ins Bett."
    }
  ],
  listening: [
    {
      title: "Ú¯ÙˆØ´ Ø¯Ø§Ø¯Ù† Ø¨Ù‡ Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡",
      source: "Deutsch lernen - Tagesablauf",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "Ø¨Ù‡ Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡ ÛŒÚ© Ù†ÙØ± Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ Ø³Ø§Ø¹Øªâ€ŒÙ‡Ø§ÛŒ Ù‡Ø± ÙØ¹Ø§لÛŒØª Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
    }
  ],
  speaking: [
    {
      title: "Ú¯ÙØªÙ† Ø³Ø§Ø¹Øª",
      pattern: "A: Wie viel Uhr ist es?\nB: Es ist [Stunde] Uhr [Minute]. / Es ist [Zeit].",
      exercise: "Ø³Ø§Ø¹Øªâ€ŒÙ‡Ø§ÛŒ Ù…Ø®ØªلÙ Ø±Ø§ Ø¨Ø®ÙˆØ§Ù†ÛŒØ¯ Ùˆ Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ Ø¨Ú¯ÙˆÛŒÛŒØ¯."
    }
  ],
  cultureTip: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ØŒ Ù…Ø±Ø¯Ù… Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø²ÙˆØ¯ Ø´Ø§Ù… Ù…ÛŒâ€ŒØ®ÙˆØ±Ù†Ø¯ (Ø­Ø¯ÙˆØ¯ Ø³Ø§Ø¹Øª Û±Û¸-Û±Û¹). Ø´Ù†Ø¨Ù‡â€ŒÙ‡Ø§ Ùˆ ÛŒÚ©Ø´Ù†Ø¨Ù‡â€ŒÙ‡Ø§ ØªØ¹Ø·ÛŒل Ù‡Ø³ØªÙ†Ø¯ Ùˆ ÙØ±ÙˆØ´Ú¯Ø§Ù‡â€ŒÙ‡Ø§ Ø¨Ø³ØªÙ‡â€ŒØ§Ù†Ø¯. Ø¢لÙ…Ø§Ù†ÛŒâ€ŒÙ‡Ø§ Ø¨Ù‡ ÙˆÙ‚Øª Ø¨Ø³ÛŒØ§Ø± Ø­Ø³Ø§Ø³ Ù‡Ø³ØªÙ†Ø¯ Ùˆ Ø¯ÛŒØ± Ø¢Ù…Ø¯Ù† Ø¨ÛŒâ€ŒØ§Ø¯Ø¨ÛŒ Ù…Ø­Ø³ÙˆØ¨ Ù…ÛŒâ€ŒØ´ÙˆØ¯.",
  examData: {
    questions: [
      { question: "لØ³Ø§Ø¹Øª Ø¯Ùˆ Ùˆ Ù†ÛŒÙ…ل Ú†Ú¯ÙˆÙ†Ù‡ Ú¯ÙØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Es ist halb drei.", "Es ist halb zwei.", "Es ist zwei Uhr dreiÃŸig.", "Es ist dreiÃŸig nach zwei."], answer: 0 },
      { question: "لØ±ÙˆØ² Ø¬Ù…Ø¹Ù‡ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["am Freitag", "der Freitag", "im Freitag", "auf Freitag"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich stehe um 7 Uhr auf.", "Ich aufstehe um 7 Uhr.", "Ich gehe um 7 Uhr auf.", "Ich bin um 7 Uhr auf."], answer: 0 },
      { question: "لÛŒÚ©Ø´Ù†Ø¨Ù‡ل Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:", options: ["der Sonntag", "der Samstag", "der Montag", "der Freitag"], answer: 0 },
      { question: "لØ³Ø§Ø¹Øª Ø³Ù‡ Ùˆ Ø±Ø¨Ø¹ل Ú†Ú¯ÙˆÙ†Ù‡ Ú¯ÙØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Es ist Viertel nach drei.", "Es ist Viertel vor drei.", "Es ist drei Uhr fÃ¼nfzehn.", "Es ist halb vier."], answer: 0 },
      { question: "لÙ…Ù† Ø³Ø§Ø¹Øª Û±Û² Ù†Ø§Ù‡Ø§Ø± Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich esse um 12 Uhr zu Mittag.", "Ich esse um 12 Uhr zu Abend.", "Ich frÃ¼hstÃ¼cke um 12 Uhr.", "Ich esse um 12 Uhr FrÃ¼hstÃ¼ck."], answer: 0 },
      { question: "لØ³Ø§Ø¹Øª Ú†Ù†Ø¯ Ø§Ø³ØªØŸل Ú†Ú¯ÙˆÙ†Ù‡ Ù¾Ø±Ø³ÛŒØ¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Wie viel Uhr ist es?", "Was ist die Uhr?", "Wie spÃ¤t ist es?", "Welche Uhr ist es?"], answer: 0 },
      { question: "لÙ…Ù† Ø¨Ù‡ Ø±Ø®ØªØ®ÙˆØ§Ø¨ Ù…ÛŒâ€ŒØ±ÙˆÙ…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich gehe ins Bett.", "Ich gehe zum Bett.", "Ich gehe im Bett.", "Ich gehe nach Bett."], answer: 0 }
    ]
  }
};