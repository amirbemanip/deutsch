export const day20Data = {
  title: "Ø±ÙˆØ² Û²Û°: Ø±Ø³ØªÙˆØ±Ø§Ù† Ùˆ Ú©Ø§ÙÙ‡ - Ø³ÙØ§Ø±Ø´ ØºØ°Ø§ØŒ Ù…Ù†ÙˆØŒ Ù¾Ø±Ø¯Ø§Ø®Øª",
  objective: "Ø¯Ø± Ø§ÛŒÙ† Ø¯Ø±Ø³ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒØ¯ Ú†Ú¯ÙˆÙ†Ù‡ Ø¯Ø± Ø±Ø³ØªÙˆØ±Ø§Ù† Ùˆ Ú©Ø§ÙÙ‡ Ø¢لÙ…Ø§Ù†ÛŒ Ø³ÙØ§Ø±Ø´ Ø¯Ù‡ÛŒØ¯ØŒ Ø§Ø² Ù…Ù†Ùˆ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ù†ÛŒØ¯ØŒ Ù‚ÛŒÙ…Øª Ø¨Ù¾Ø±Ø³ÛŒØ¯ Ùˆ ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨ Ø¨Ø®ÙˆØ§Ù‡ÛŒØ¯.",
  grammarData: {
    subtitle: "Im Restaurant bestellen ل Ø³ÙØ§Ø±Ø´ Ø¯Ø§Ø¯Ù† Ø¯Ø± Ø±Ø³ØªÙˆØ±Ø§Ù†",
    content: [
      {
        type: "text",
        title: "Ù…Ú©Ø§لÙ…Ù‡ Ø±Ø³ØªÙˆØ±Ø§Ù†",
        text: "Ø¯Ø± Ø±Ø³ØªÙˆØ±Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒ Ø§Ø² Ø¹Ø¨Ø§Ø±Øªâ€ŒÙ‡Ø§ÛŒ Ù…ÙˆØ¯Ø¨Ø§Ù†Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯. Ù…Ù‡Ù…â€ŒØªØ±ÛŒÙ† Ø¢Ù†â€ŒÙ‡Ø§: Ich hÃ¤tte gern... (Ù…ÛŒâ€ŒØ®ÙˆØ§Ø³ØªÙ…...) Ùˆ Ich mÃ¶chte... (Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù…...). Ø¨Ø±Ø§ÛŒ Ù¾Ø±Ø¯Ø§Ø®Øª: Die Rechnung, bitte! (ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨ØŒ لØ·ÙØ§Ù‹!). Ø¨Ø±Ø§ÛŒ Ù¾Ø±Ø³ÛŒØ¯Ù† Ù‚ÛŒÙ…Øª: Wie viel kostet das? (Ú†Ù‚Ø¯Ø± Ø§Ø³ØªØŸ)"
      },
      {
        type: "table",
        title: "Ù…Ø±Ø§Ø­ل Ù…Ú©Ø§لÙ…Ù‡ Ø¯Ø± Ø±Ø³ØªÙˆØ±Ø§Ù†",
        rows: [
          { de: "Ø´Ø±ÙˆØ¹: Guten Tag! / Einen Tisch fÃ¼r zwei Personen, bitte.", fa: "Ø³لØ§Ù…ØŒ ÛŒÚ© Ù…ÛŒØ² Ø¨Ø±Ø§ÛŒ Ø¯Ùˆ Ù†ÙØ±ØŒ لØ·ÙØ§Ù‹." },
          { de: "Ù…Ù†Ùˆ: Die Speisekarte, bitte. / KÃ¶nnen wir bestellen?", fa: "Ù…Ù†ÙˆØŒ لØ·ÙØ§Ù‹. / Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒÙ… Ø³ÙØ§Ø±Ø´ Ø¯Ù‡ÛŒÙ…ØŸ" },
          { de: "Ø³ÙØ§Ø±Ø´: Ich hÃ¤tte gern... / Ich mÃ¶chte..., bitte.", fa: "Ù…ÛŒâ€ŒØ®ÙˆØ§Ø³ØªÙ…... / Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù…... لØ·ÙØ§Ù‹." },
          { de: "Ø³Ø¤Ø§ل: Was kÃ¶nnen Sie empfehlen?", fa: "Ú†Ù‡ Ú†ÛŒØ²ÛŒ Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯ Ù…ÛŒâ€ŒØ¯Ù‡ÛŒØ¯ØŸ" },
          { de: "Ù¾Ø±Ø¯Ø§Ø®Øª: Die Rechnung, bitte! / Zahlen, bitte!", fa: "ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨ØŒ لØ·ÙØ§Ù‹!" },
          { de: "Ù¾Ø±Ø¯Ø§Ø®Øª: Ich mÃ¶chte bar / mit Karte zahlen.", fa: "Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ù†Ù‚Ø¯ / Ø¨Ø§ Ú©Ø§Ø±Øª Ù¾Ø±Ø¯Ø§Ø®Øª Ú©Ù†Ù…." }
        ]
      },
      {
        type: "examples",
        title: "Ù…Ú©Ø§لÙ…Ù‡ Ù†Ù…ÙˆÙ†Ù‡ Ø±Ø³ØªÙˆØ±Ø§Ù†",
        items: [
          { de: "Guten Tag! Ich hÃ¤tte gern ein Tisch fÃ¼r zwei Personen.", fa: "Ø³لØ§Ù…! ÛŒÚ© Ù…ÛŒØ² Ø¨Ø±Ø§ÛŒ Ø¯Ùˆ Ù†ÙØ± Ù…ÛŒâ€ŒØ®ÙˆØ§Ø³ØªÙ…." },
          { de: "KÃ¶nnen wir bestellen? Ich hÃ¤tte gern eine Tomatensuppe als Vorspeise.", fa: "Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒÙ… Ø³ÙØ§Ø±Ø´ Ø¯Ù‡ÛŒÙ…ØŸ Ø³ÙˆÙ¾ Ú¯ÙˆØ¬Ù‡ Ø¨Ù‡ Ø¹Ù†ÙˆØ§Ù† Ù¾ÛŒØ´â€ŒØºØ°Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ§Ø³ØªÙ…." },
          { de: "Als Hauptgericht nehme ich das Schnitzel mit Pommes.", fa: "Ø¨Ù‡ Ø¹Ù†ÙˆØ§Ù† ØºØ°Ø§ÛŒ Ø§ØµلÛŒ Ø´Ù†ÛŒØªØ³ل Ø¨Ø§ Ø³ÛŒØ¨â€ŒØ²Ù…ÛŒÙ†ÛŒ Ø³Ø±Ø®â€ŒÚ©Ø±Ø¯Ù‡ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù…." },
          { de: "Was trinken Sie? ل FÃ¼r mich ein Wasser, bitte.", fa: "Ú†Ù‡ Ù…ÛŒâ€ŒÙ†ÙˆØ´ÛŒØ¯ØŸ ل Ø¨Ø±Ø§ÛŒ Ù…Ù† ÛŒÚ© Ø¢Ø¨ØŒ لØ·ÙØ§Ù‹." },
          { de: "Schmeckt es Ihnen? ل Ja, sehr gut! Danke.", fa: "Ø®ÙˆØ´Ù…Ø²Ù‡ Ø§Ø³ØªØŸ ل Ø¨لÙ‡ØŒ Ø®ÛŒلÛŒ Ø®ÙˆØ¨! Ù…Ù…Ù†ÙˆÙ†." },
          { de: "Die Rechnung, bitte! ل Zusammen oder getrennt?", fa: "ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨ØŒ لØ·ÙØ§Ù‹! ل Ø¨Ø§ Ù‡Ù… ÛŒØ§ Ø¬Ø¯Ø§ØŸ" },
          { de: "Zusammen, bitte. Ich zahle mit Karte.", fa: "Ø¨Ø§ Ù‡Ù…ØŒ لØ·ÙØ§Ù‹. Ø¨Ø§ Ú©Ø§Ø±Øª Ù¾Ø±Ø¯Ø§Ø®Øª Ù…ÛŒâ€ŒÚ©Ù†Ù…." }
        ]
      },
      {
        type: "alert",
        title: "Ich hÃ¤tte gern vs Ich mÃ¶chte",
        text: "Ù‡Ø± Ø¯Ùˆ Ø¹Ø¨Ø§Ø±Øª Ù…ÙˆØ¯Ø¨Ø§Ù†Ù‡ Ù‡Ø³ØªÙ†Ø¯. Â«Ich hÃ¤tte gernÂ» Ù…ÙˆØ¯Ø¨â€ŒØªØ± Ùˆ Ø±Ø§ÛŒØ¬â€ŒØªØ± Ø§Ø³Øª. Â«Ich mÃ¶chteÂ» Ù‡Ù… ØµØ­ÛŒØ­ Ùˆ Ù…ÙˆØ¯Ø¨ Ø§Ø³Øª. Ù‡Ø±Ú¯Ø² Ù†Ú¯ÙˆÛŒÛŒØ¯ Â«Ich willÂ» Ú†ÙˆÙ† Ø®ÛŒلÛŒ Ù…Ø³ØªÙ‚ÛŒÙ… Ùˆ ØºÛŒØ±Ù…ÙˆØ¯Ø¨Ø§Ù†Ù‡ Ø§Ø³Øª!"
      },
      {
        type: "table",
        title: "Ø§Ù†ÙˆØ§Ø¹ ØºØ°Ø§ Ùˆ Ù†ÙˆØ´ÛŒØ¯Ù†ÛŒ",
        rows: [
          { de: "die Vorspeise", fa: "Ù¾ÛŒØ´â€ŒØºØ°Ø§ (Ø³ÙˆÙ¾ØŒ Ø³Ø§لØ§Ø¯)" },
          { de: "das Hauptgericht", fa: "ØºØ°Ø§ÛŒ Ø§ØµلÛŒ (Ú¯ÙˆØ´ØªØŒ Ù…Ø§Ù‡ÛŒØŒ Ù…Ø±Øº)" },
          { de: "die Nachspeise / der Nachtisch", fa: "Ø¯Ø³Ø± (Ú©ÛŒÚ©ØŒ Ø¨Ø³ØªÙ†ÛŒ)" },
          { de: "das GetrÃ¤nk", fa: "Ù†ÙˆØ´ÛŒØ¯Ù†ÛŒ (Ø¢Ø¨ØŒ Ø¢Ø¨â€ŒÙ…ÛŒÙˆÙ‡ØŒ Ù‚Ù‡ÙˆÙ‡)" },
          { de: "alkoholfrei", fa: "Ø¨Ø¯ÙˆÙ† Ø§لÚ©ل" },
          { de: "mit Alkohol", fa: "Ø¨Ø§ Ø§لÚ©ل" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Ù…Ú©Ø§لÙ…Ù‡ Ø±Ø³ØªÙˆØ±Ø§Ù†",
        questions: [
          {
            question: "Ø¨Ø±Ø§ÛŒ Ø³ÙØ§Ø±Ø´ Ù…ÙˆØ¯Ø¨Ø§Ù†Ù‡ Ú©Ø¯Ø§Ù… Ø¹Ø¨Ø§Ø±Øª ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ",
            questionDe: "Welcher Ausdruck ist hÃ¶flich fÃ¼r eine Bestellung?",
            options: [
              { text: "Ich hÃ¤tte gern eine Suppe.", isCorrect: true },
              { text: "Ich will eine Suppe.", isCorrect: false },
              { text: "Gib mir eine Suppe.", isCorrect: false },
              { text: "Eine Suppe!", isCorrect: false }
            ],
            explanation: "Â«Ich hÃ¤tte gernÂ» Ù…ÙˆØ¯Ø¨â€ŒØªØ±ÛŒÙ† Ùˆ Ø±Ø§ÛŒØ¬â€ŒØªØ±ÛŒÙ† Ø´Ú©ل Ø³ÙØ§Ø±Ø´ Ø§Ø³Øª."
          },
          {
            question: "Â«Die Rechnung, bitte!Â» ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ",
            questionDe: "Was bedeutet لDie Rechnung, bitte!ل?",
            options: [
              { text: "ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨ØŒ لØ·ÙØ§Ù‹!", isCorrect: true },
              { text: "Ù…Ù†ÙˆØŒ لØ·ÙØ§Ù‹!", isCorrect: false },
              { text: "ÛŒÚ© Ù…ÛŒØ²ØŒ لØ·ÙØ§Ù‹!", isCorrect: false },
              { text: "Ø¢Ø¨ØŒ لØ·ÙØ§Ù‹!", isCorrect: false }
            ],
            explanation: "Die Rechnung ÛŒØ¹Ù†ÛŒ ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨."
          },
          {
            question: "ÙˆÙ‚ØªÛŒ Ú¯Ø§Ø±Ø³ÙˆÙ† Ø¨Ù¾Ø±Ø³Ø¯ Â«Zusammen oder getrennt?Â» Ù…Ù†Ø¸ÙˆØ±Ø´ Ú†ÛŒØ³ØªØŸ",
            questionDe: "Was meint der Kellner mit لZusammen oder getrenntل?",
            options: [
              { text: "Ø¨Ø§ Ù‡Ù… ÛŒØ§ Ø¬Ø¯Ø§ Ù¾Ø±Ø¯Ø§Ø®Øª Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯ØŸ", isCorrect: true },
              { text: "Ø¨Ø§ Ù‡Ù… ÛŒØ§ Ø¬Ø¯Ø§ Ù…ÛŒâ€ŒÙ†Ø´ÛŒÙ†ÛŒØ¯ØŸ", isCorrect: false },
              { text: "Ø¨Ø§ Ù‡Ù… ÛŒØ§ Ø¬Ø¯Ø§ Ø³ÙØ§Ø±Ø´ Ù…ÛŒâ€ŒØ¯Ù‡ÛŒØ¯ØŸ", isCorrect: false },
              { text: "ØºØ°Ø§ Ø±Ø§ Ø¨Ø§ Ù‡Ù… ÛŒØ§ Ø¬Ø¯Ø§ Ø³Ø±Ùˆ Ú©Ù†Ù…ØŸ", isCorrect: false }
            ],
            explanation: "Zusammen oder getrennt ÛŒØ¹Ù†ÛŒ Ø¨Ø§ Ù‡Ù… ÛŒØ§ Ø¬Ø¯Ø§ Ø­Ø³Ø§Ø¨ Ú©Ù†ÛŒØ¯."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "Ù…Ú©Ø§لÙ…Ù‡ Ø±Ø³ØªÙˆØ±Ø§Ù† Ø±Ø§ Ú©Ø§Ù…ل Ú©Ù†ÛŒØ¯",
        instruction: "Ø¹Ø¨Ø§Ø±Ø§Øª Ù…Ù†Ø§Ø³Ø¨ Ø±Ø§ Ø¯Ø± Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.",
        blanks: [
          { sentence: "Guten Tag! ___ ___ ein Tisch fÃ¼r zwei Personen, bitte.", answer: "Ich hÃ¤tte gern", hint: "Ù…ÙˆØ¯Ø¨Ø§Ù†Ù‡â€ŒØªØ±ÛŒÙ† Ø´Ú©ل Ø³ÙØ§Ø±Ø´" },
          { sentence: "Als Vorspeise ___ ich eine Tomatensuppe.", answer: "nehme", hint: "nehme ich = Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù…" },
          { sentence: "___ ___ das Schnitzel?", answer: "Wie viel kostet", hint: "Ú†Ù‚Ø¯Ø± Ø§Ø³ØªØŸ" },
          { sentence: "Die ___, bitte! Ich mÃ¶chte mit Karte ___.", answer: "Rechnung, zahlen", hint: "ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨ Ùˆ Ù¾Ø±Ø¯Ø§Ø®Øª" },
          { sentence: "___ mÃ¶chten Sie trinken? ل FÃ¼r mich ein Wasser.", answer: "Was", hint: "Ú†Ù‡ Ù…ÛŒâ€ŒÙ†ÙˆØ´ÛŒØ¯ØŸ" },
          { sentence: "KÃ¶nnen wir bitte die ___ sehen?", answer: "Speisekarte", hint: "Ù…Ù†ÙˆÛŒ ØºØ°Ø§" },
          { sentence: "___ oder getrennt?", answer: "Zusammen", hint: "Ø¨Ø§ Ù‡Ù… ÛŒØ§ Ø¬Ø¯Ø§" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "ÙˆØ§Ú˜Ú¯Ø§Ù† Ø±Ø³ØªÙˆØ±Ø§Ù† Ùˆ Ú©Ø§ÙÙ‡",
        words: [
          { de: "die Speisekarte", fa: "Ù…Ù†ÙˆÛŒ ØºØ°Ø§", article: "die", plural: "-n", examples: [{ de: "KÃ¶nnen wir bitte die Speisekarte haben?", fa: "Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒÙ… Ù…Ù†Ùˆ Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´ÛŒÙ…ØŸ" }] },
          { de: "die Rechnung", fa: "ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨", article: "die", plural: "-en", examples: [{ de: "Die Rechnung, bitte!", fa: "ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨ØŒ لØ·ÙØ§Ù‹!" }] },
          { de: "das Schnitzel", fa: "Ø´Ù†ÛŒØªØ³ل (Ú¯ÙˆØ´Øª Ø³ÙˆØ®Ø§Ø±ÛŒ)", article: "das", plural: "-", examples: [{ de: "Ich hÃ¤tte gern ein Schnitzel mit Pommes.", fa: "Ø´Ù†ÛŒØªØ³ل Ø¨Ø§ Ø³ÛŒØ¨â€ŒØ²Ù…ÛŒÙ†ÛŒ Ù…ÛŒâ€ŒØ®ÙˆØ§Ø³ØªÙ…." }] },
          { de: "die Suppe", fa: "Ø³ÙˆÙ¾", article: "die", plural: "-n", examples: [{ de: "Die Suppe schmeckt sehr gut.", fa: "Ø³ÙˆÙ¾ Ø®ÛŒلÛŒ Ø®ÙˆØ´Ù…Ø²Ù‡ Ø§Ø³Øª." }] },
          { de: "der Salat", fa: "Ø³Ø§لØ§Ø¯", article: "der", plural: "-e", examples: [{ de: "Als Vorspeise nehme ich einen Salat.", fa: "Ù¾ÛŒØ´â€ŒØºØ°Ø§ Ø³Ø§لØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù…." }] },
          { de: "das Brot", fa: "Ù†Ø§Ù†", article: "das", plural: "Brote", examples: [{ de: "KÃ¶nnen wir noch etwas Brot bekommen?", fa: "Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒÙ… Ú©Ù…ÛŒ Ù†Ø§Ù† Ø¨Ú¯ÛŒØ±ÛŒÙ…ØŸ" }] },
          { de: "die Kartoffel", fa: "Ø³ÛŒØ¨â€ŒØ²Ù…ÛŒÙ†ÛŒ", article: "die", plural: "-n", examples: [{ de: "Ich esse gern Kartoffeln.", fa: "Ø³ÛŒØ¨â€ŒØ²Ù…ÛŒÙ†ÛŒ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù…." }] },
          { de: "das HÃ¤hnchen", fa: "Ù…Ø±Øº", article: "das", plural: "-", examples: [{ de: "MÃ¶chten Sie das HÃ¤hnchen mit Reis?", fa: "Ù…Ø±Øº Ø¨Ø§ Ø¨Ø±Ù†Ø¬ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡ÛŒØ¯ØŸ" }] },
          { de: "das Eis", fa: "Ø¨Ø³ØªÙ†ÛŒ", article: "das", plural: "-e", examples: [{ de: "Zum Nachtisch nehme ich ein Eis.", fa: "Ø¯Ø³Ø± Ø¨Ø³ØªÙ†ÛŒ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù…." }] },
          { de: "der Kuchen", fa: "Ú©ÛŒÚ©", article: "der", plural: "-", examples: [{ de: "Haben Sie auch Kuchen?", fa: "Ú©ÛŒÚ© Ù‡Ù… Ø¯Ø§Ø±ÛŒØ¯ØŸ" }] },
          { de: "das Mineralwasser", fa: "Ø¢Ø¨ Ù…Ø¹Ø¯Ù†ÛŒ", article: "das", plural: "-", examples: [{ de: "Ein stilles Wasser, bitte.", fa: "ÛŒÚ© Ø¢Ø¨ Ø¨Ø¯ÙˆÙ† Ú¯Ø§Ø²ØŒ لØ·ÙØ§Ù‹." }] },
          { de: "der Orangensaft", fa: "Ø¢Ø¨ Ù¾Ø±ØªÙ‚Ø§ل", article: "der", plural: "OrangensÃ¤fte", examples: [{ de: "Einen Orangensaft, bitte.", fa: "ÛŒÚ© Ø¢Ø¨ Ù¾Ø±ØªÙ‚Ø§لØŒ لØ·ÙØ§Ù‹." }] },
          { de: "der Kellner / die Kellnerin", fa: "Ú¯Ø§Ø±Ø³ÙˆÙ†", article: "der/die", plural: "-", examples: [{ de: "Entschuldigung, Kellner!", fa: "Ø¨Ø¨Ø®Ø´ÛŒØ¯ØŒ Ø¢Ù‚Ø§ Ú¯Ø§Ø±Ø³ÙˆÙ†!" }] },
          { de: "die Bestellung", fa: "Ø³ÙØ§Ø±Ø´", article: "die", plural: "-en", examples: [{ de: "Sind Sie bereit zu bestellen?", fa: "Ø¢Ù…Ø§Ø¯Ù‡ Ø³ÙØ§Ø±Ø´ Ù‡Ø³ØªÛŒØ¯ØŸ" }] },
          { de: "bezahlen / zahlen", fa: "Ù¾Ø±Ø¯Ø§Ø®Øª Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich mÃ¶chte mit Karte bezahlen.", fa: "Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ø¨Ø§ Ú©Ø§Ø±Øª Ù¾Ø±Ø¯Ø§Ø®Øª Ú©Ù†Ù…." }] },
          { de: "die Quittung", fa: "Ø±Ø³ÛŒØ¯", article: "die", plural: "-en", examples: [{ de: "Kann ich eine Quittung haben?", fa: "Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ù… Ø±Ø³ÛŒØ¯ Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´Ù…ØŸ" }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Maria und ihr Freund gehen ins Restaurant. Der Kellner bringt die Speisekarte. Maria bestellt eine Tomatensuppe als Vorspeise und ein Schnitzel mit Pommes als Hauptgericht. Ihr Freund wÃ¤hlt einen Salat und das HÃ¤hnchen mit Reis. FÃ¼r das Trinken nehmen sie zwei GlÃ¤ser Orangensaft. Das Essen schmeckt sehr gut! Nach dem Essen bestellen sie noch ein Eis zum Nachtisch. Am Ende rufen sie den Kellner: لDie Rechnung, bitte!ل Sie zahlen zusammen mit Karte und geben ein Trinkgeld. Das Restaurant war sehr gemÃ¼tlich und das Essen war kÃ¶stlich!",
      questions: [
        { question: "Ù…Ø§Ø±ÛŒØ§ Ú†Ù‡ Ù¾ÛŒØ´â€ŒØºØ°Ø§ÛŒÛŒ Ø³ÙØ§Ø±Ø´ Ø¯Ø§Ø¯ØŸ", answer: "Ø³ÙˆÙ¾ Ú¯ÙˆØ¬Ù‡." },
        { question: "Ø¯ÙˆØ³Øª Ø§Ùˆ Ú†Ù‡ ØºØ°Ø§ÛŒÛŒ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ø±Ø¯ØŸ", answer: "Ø³Ø§لØ§Ø¯ Ùˆ Ù…Ø±Øº Ø¨Ø§ Ø¨Ø±Ù†Ø¬." },
        { question: "Ø¢Ù†â€ŒÙ‡Ø§ Ú†Ù‡ Ù†ÙˆØ´ÛŒØ¯Ù†ÛŒ Ù†ÙˆØ´ÛŒØ¯Ù†Ø¯ØŸ", answer: "Ø¯Ùˆ لÛŒÙˆØ§Ù† Ø¢Ø¨ Ù¾Ø±ØªÙ‚Ø§ل." },
        { question: "Ø¢Ù†â€ŒÙ‡Ø§ Ú†Ø·ÙˆØ± Ù¾Ø±Ø¯Ø§Ø®Øª Ú©Ø±Ø¯Ù†Ø¯ØŸ", answer: "Ø¨Ø§ Ù‡Ù… Ùˆ Ø¨Ø§ Ú©Ø§Ø±Øª." },
        { question: "Ø¢Ù†â€ŒÙ‡Ø§ Ø¨Ù‡ Ú¯Ø§Ø±Ø³ÙˆÙ† Ú†Ù‚Ø¯Ø± Ø§Ù†Ø¹Ø§Ù… Ø¯Ø§Ø¯Ù†Ø¯ØŸ", answer: "Ø¯Ø± Ù…ØªÙ† Ø°Ú©Ø± Ù†Ø´Ø¯Ù‡ ÙÙ‚Ø· Ú¯ÙØªÙ‡ Trinkgeld Ø¯Ø§Ø¯Ù†Ø¯." }
      ]
    }
  ],
  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† ÛŒÚ© Ù…Ú©Ø§لÙ…Ù‡ Ø±Ø³ØªÙˆØ±Ø§Ù†",
      prompt: "ÛŒÚ© Ù…Ú©Ø§لÙ…Ù‡ Ø¨ÛŒÙ† Ú¯Ø§Ø±Ø³ÙˆÙ† Ùˆ Ù…Ø´ØªØ±ÛŒ Ø¯Ø± Ø±Ø³ØªÙˆØ±Ø§Ù† Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯. Ø´Ø§Ù…ل Ø³ÙØ§Ø±Ø´ØŒ Ø³Ø¤Ø§لØŒ Ùˆ Ù¾Ø±Ø¯Ø§Ø®Øª Ø¨Ø§Ø´Ø¯.",
      steps: [
        { title: "Ù…Ø±Ø­لÙ‡ Û±: ÙˆØ±ÙˆØ¯", text: "Ù…Ø´ØªØ±ÛŒ ÙˆØ§Ø±Ø¯ Ø±Ø³ØªÙˆØ±Ø§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ùˆ Ù…ÛŒØ² Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯.", example: { de: "Guten Tag! Ich hÃ¤tte gern einen Tisch fÃ¼r zwei.", fa: "Ø³لØ§Ù…! ÛŒÚ© Ù…ÛŒØ² Ø¨Ø±Ø§ÛŒ Ø¯Ùˆ Ù†ÙØ± Ù…ÛŒâ€ŒØ®ÙˆØ§Ø³ØªÙ…." } },
        { title: "Ù…Ø±Ø­لÙ‡ Û²: Ø³ÙØ§Ø±Ø´", text: "Ù…Ø´ØªØ±ÛŒ ØºØ°Ø§ Ùˆ Ù†ÙˆØ´ÛŒØ¯Ù†ÛŒ Ø³ÙØ§Ø±Ø´ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯.", example: { de: "Ich hÃ¤tte gern die Tomatensuppe und das Schnitzel.", fa: "Ø³ÙˆÙ¾ Ú¯ÙˆØ¬Ù‡ Ùˆ Ø´Ù†ÛŒØªØ³ل Ù…ÛŒâ€ŒØ®ÙˆØ§Ø³ØªÙ…." } },
        { title: "Ù…Ø±Ø­لÙ‡ Û³: Ù¾Ø±Ø¯Ø§Ø®Øª", text: "Ù…Ø´ØªØ±ÛŒ ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ø¯.", example: { de: "Die Rechnung, bitte! Ich zahle mit Karte.", fa: "ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨! Ø¨Ø§ Ú©Ø§Ø±Øª Ù¾Ø±Ø¯Ø§Ø®Øª Ù…ÛŒâ€ŒÚ©Ù†Ù…." } }
      ],
      modelAnswer: "Kellner: Guten Tag! Haben Sie reserviert? Kunde: Nein. Ich hÃ¤tte gern einen Tisch fÃ¼r zwei, bitte. Kellner: NatÃ¼rlich, bitte hier entlang. MÃ¶chten Sie bestellen? Kunde: Ja, bitte. Die Speisekarte sehen wir gern. Kellner: Hier bitte. Kunde: FÃ¼r mich eine Tomatensuppe und das Schnitzel mit Pommes. Und fÃ¼r meinen Freund einen Salat und das HÃ¤hnchen. Kellner: Und was mÃ¶chten Sie trinken? Kunde: Zwei GlÃ¤ser Orangensaft, bitte. ... Kellner: Schmeckt es Ihnen? Kunde: Ja, sehr gut! Danke. KÃ¶nnen wir die Rechnung haben? Kellner: NatÃ¼rlich. Zusammen oder getrennt? Kunde: Zusammen, bitte. Ich zahle mit Karte. Kellner: Vielen Dank. Kommen Sie gern wieder!"
    }
  ],
  listening: [
    {
      title: "Ù…Ú©Ø§لÙ…Ù‡ Ø±Ø³ØªÙˆØ±Ø§Ù†",
      source: "German in the Restaurant - Dialogue",
      link: "https://www.youtube.com/watch?v=jJiE4Rfcl9w",
      instructions: "Ø¨Ù‡ Ø¯ÛŒØ§لÙˆÚ¯ Ø±Ø³ØªÙˆØ±Ø§Ù† Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯. ØªÙˆØ¬Ù‡ Ú©Ù†ÛŒØ¯ Ú©Ù‡ Ich hÃ¤tte gern Ùˆ Die Rechnung, bitte Ú†Ú¯ÙˆÙ†Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯. Ù…Ú©Ø§لÙ…Ù‡ Ø±Ø§ ØªÚ©Ø±Ø§Ø± Ú©Ù†ÛŒØ¯."
    }
  ],
  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ø³ÙØ§Ø±Ø´ ØºØ°Ø§",
      pattern: "Kellner: Was mÃ¶chten Sie? Kunde: Ich hÃ¤tte gern... / Die Rechnung, bitte!",
      exercise: "Ø¨Ø§ ÛŒÚ© Ù†ÙØ± Ù…Ú©Ø§لÙ…Ù‡ Ø±Ø³ØªÙˆØ±Ø§Ù† ØªÙ…Ø±ÛŒÙ† Ú©Ù†ÛŒØ¯. ÛŒÚ©ÛŒ Ù†Ù‚Ø´ Ú¯Ø§Ø±Ø³ÙˆÙ† Ùˆ ÛŒÚ©ÛŒ Ù†Ù‚Ø´ Ù…Ø´ØªØ±ÛŒ Ø±Ø§ Ø¨Ø§Ø²ÛŒ Ú©Ù†Ø¯."
    }
  ],
  cultureTip: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ØŒ Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø§Ù†Ø¹Ø§Ù… (Trinkgeld) Ø­Ø¯ÙˆØ¯ Û±Û°Ùª ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨ Ø§Ø³Øª. Ø¹Ø¨Ø§Ø±Øª Â«Stimmt so!Â» ÙˆÙ‚ØªÛŒ Ù¾Ùˆل Ù†Ù‚Ø¯ Ù…ÛŒâ€ŒØ¯Ù‡ÛŒØ¯ ÛŒØ¹Ù†ÛŒ Ø¨Ù‚ÛŒÙ‡ Ù¾Ùˆل لØ§Ø²Ù… Ù†ÛŒØ³Øª Ùˆ Ø§Ù†Ø¹Ø§Ù… Ø§Ø³Øª. Ø¯Ø± Ø§ØªØ±ÛŒØ´ Ùˆ Ø³ÙˆØ¦ÛŒØ³ Ù‡Ù… Ø±Ø³ÙˆÙ… Ù…Ø´Ø§Ø¨Ù‡ÛŒ ÙˆØ¬ÙˆØ¯ Ø¯Ø§Ø±Ø¯. ØµØ¨Ø± Ú©Ù†ÛŒØ¯ ØªØ§ Ú¯Ø§Ø±Ø³ÙˆÙ† ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨ Ø±Ø§ Ø¨ÛŒØ§ÙˆØ±Ø¯ØŒ Ù‡Ø±Ú¯Ø² Ø¹Ø¬لÙ‡ Ù†Ú©Ù†ÛŒØ¯!",
  examData: {
    questions: [
      { question: "Ú©Ø¯Ø§Ù… Ø¹Ø¨Ø§Ø±Øª Ø¨Ø±Ø§ÛŒ Ø³ÙØ§Ø±Ø´ Ù…ÙˆØ¯Ø¨Ø§Ù†Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich will ein Bier.", "Ich hÃ¤tte gern ein Bier.", "Gib mir ein Bier.", "Ein Bier hier!"], answer: 1 },
      { question: "Â«Die Rechnung, bitte!Â» ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", options: ["Ù…Ù†Ùˆ لØ·ÙØ§Ù‹", "ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨ لØ·ÙØ§Ù‹", "Ø¢Ø¨ لØ·ÙØ§Ù‹", "Ù…ÛŒØ² لØ·ÙØ§Ù‹"], answer: 1 },
      { question: "Â«Zusammen oder getrennt?Â» ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", options: ["Ø¨Ø§ Ù‡Ù… ÛŒØ§ Ø¬Ø¯Ø§ Ø¨Ù†Ø´ÛŒÙ†ÛŒØ¯ØŸ", "Ø¨Ø§ Ù‡Ù… ÛŒØ§ Ø¬Ø¯Ø§ Ø­Ø³Ø§Ø¨ Ú©Ù†ÛŒØ¯ØŸ", "Ø¨Ø§ Ù‡Ù… ÛŒØ§ Ø¬Ø¯Ø§ Ø³ÙØ§Ø±Ø´ Ø¯Ù‡ÛŒØ¯ØŸ", "Ø¨Ø§ Ù‡Ù… ÛŒØ§ Ø¬Ø¯Ø§ ØºØ°Ø§ Ø¨Ø®ÙˆØ±ÛŒØ¯ØŸ"], answer: 1 },
      { question: "Â«VorspeiseÂ» ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", options: ["ØºØ°Ø§ÛŒ Ø§ØµلÛŒ", "Ù¾ÛŒØ´â€ŒØºØ°Ø§", "Ø¯Ø³Ø±", "Ù†ÙˆØ´ÛŒØ¯Ù†ÛŒ"], answer: 1 },
      { question: "Â«HauptgerichtÂ» ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", options: ["Ù¾ÛŒØ´â€ŒØºØ°Ø§", "Ø¯Ø³Ø±", "ØºØ°Ø§ÛŒ Ø§ØµلÛŒ", "Ù†ÙˆØ´ÛŒØ¯Ù†ÛŒ"], answer: 2 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich mÃ¶chte mit Karte zahlen.", "Ich mÃ¶chte zahlen mit Karte.", "Ich mÃ¶chte Karte mit zahlen.", "Ich mit Karte mÃ¶chte zahlen."], answer: 0 },
      { question: "Â«SpeisekarteÂ» ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", options: ["ØµÙˆØ±Øªâ€ŒØ­Ø³Ø§Ø¨", "Ø±Ø³ÛŒØ¯", "Ù…Ù†Ùˆ", "Ø§Ù†Ø¹Ø§Ù…"], answer: 2 },
      { question: "Ú©Ø¯Ø§Ù… Ø¹Ø¨Ø§Ø±Øª ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Was kostet das? fÃ¼r wie viel?", "Wie viel das kostet?", "Wie viel kostet das?", "Kostet das wie viel?"], answer: 2 },
      { question: "Â«TrinkgeldÂ» ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", options: ["Ù¾Ùˆل Ù†ÙˆØ´ÛŒØ¯Ù†ÛŒ", "Ø§Ù†Ø¹Ø§Ù…", "Ø­Ø³Ø§Ø¨", "Ø±Ø³ÛŒØ¯"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¹Ø¨Ø§Ø±Øª Ø¨Ø±Ø§ÛŒ Ù¾Ø±Ø¯Ø§Ø®Øª Ø¨Ø§ Ú©Ø§Ø±Øª Ø§Ø³ØªØŸ", options: ["Ich zahle bar.", "Ich zahle mit Karte.", "Ich zahle mit Geld.", "Ich zahle mit Trinkgeld."], answer: 1 }
    ]
  }
};
