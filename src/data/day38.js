export const day38Data = {
  title: "Ø±ÙˆØ² Û³Û¸: Ø¬Ù…لÙ‡â€ŒÙˆØ§Ø±Ù‡â€ŒÙ‡Ø§ÛŒ ÙˆØ§Ø¨Ø³ØªÙ‡ Ù¾ÛŒØ´Ø±ÙØªÙ‡",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø­Ø±ÙˆÙ Ø±Ø¨Ø· ÙØ±Ø¹ÛŒ Ù¾ÛŒØ´Ø±ÙØªÙ‡ (obwohl, bevor, nachdem, als, wenn, seitdem) Ùˆ ØªØ³لØ· Ø¨Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ ÙØ¹ل Ø¯Ø± Ø¬Ù…لØ§Øª Ù¾ÛŒÚ†ÛŒØ¯Ù‡",

  grammarData: {
    subtitle: "NebensÃ¤tze: Ø­Ø±ÙˆÙ Ø±Ø¨Ø· ÙØ±Ø¹ÛŒ Ùˆ ØªØ±ØªÛŒØ¨ Ú©لÙ…Ø§Øª",
    content: [
      {
        type: "text",
        title: "Û±. Ù…Ø±ÙˆØ± Ø³Ø±ÛŒØ¹: Ù‚Ø§Ù†ÙˆÙ† Ø¬Ø§ÛŒÚ¯Ø§Ù‡ ÙØ¹ل Ø¯Ø± Nebensatz",
        text: "Ø¯Ø± Ø¬Ù…لÙ‡â€ŒÙˆØ§Ø±Ù‡ ÙˆØ§Ø¨Ø³ØªÙ‡ (Nebensatz)ØŒ ÙØ¹ل Ø§ØµلÛŒ Ù‡Ù…ÛŒØ´Ù‡ Ø¨Ù‡ Ø¢Ø®Ø± Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯. Ø­Ø±Ù Ø±Ø¨Ø· ÙØ±Ø¹ÛŒ (Subjunktion) Ø¯Ø± Ø§Ø¨ØªØ¯Ø§ÛŒ Nebensatz Ù‚Ø±Ø§Ø± Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ Ùˆ Ú©Ø§Ù…Ø§ Ø¢Ù† Ø±Ø§ Ø§Ø² Ø¬Ù…لÙ‡ Ø§ØµلÛŒ Ø¬Ø¯Ø§ Ù…ÛŒâ€ŒÚ©Ù†Ø¯. Ù†Ú©ØªÙ‡ Ù…Ù‡Ù… B1: Ø§Ú¯Ø± Ø¬Ù…لÙ‡ Ø¨Ø§ Nebensatz Ø´Ø±ÙˆØ¹ Ø´ÙˆØ¯ØŒ ÙØ¹ل Ø¬Ù…لÙ‡ Ø§ØµلÛŒ Ø¨لØ§ÙØ§ØµلÙ‡ Ø¨Ø¹Ø¯ Ø§Ø² Ú©Ø§Ù…Ø§ Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û² Ù‚Ø±Ø§Ø± Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯."
      },
      {
        type: "table",
        title: "Ø­Ø±ÙˆÙ Ø±Ø¨Ø· ÙØ±Ø¹ÛŒ Ù¾ÛŒØ´Ø±ÙØªÙ‡",
        rows: [
          { de: "obwohl", fa: "Ø§Ú¯Ø±Ú†Ù‡ / Ø¨Ø§ ÙˆØ¬ÙˆØ¯ Ø§ÛŒÙ†Ú©Ù‡ (ØªØ¶Ø§á‹µ)" },
          { de: "bevor", fa: "Ù‚Ø¨ل Ø§Ø² Ø§ÛŒÙ†Ú©Ù‡ (Ø²Ù…Ø§Ù†ÛŒ)" },
          { de: "nachdem", fa: "Ø¨Ø¹Ø¯ Ø§Ø² Ø§ÛŒÙ†Ú©Ù‡ (Ø²Ù…Ø§Ù†ÛŒ)" },
          { de: "als", fa: "ÙˆÙ‚ØªÛŒ Ú©Ù‡ (ÛŒÚ©Ø¨Ø§Ø± Ø¯Ø± Ú¯Ø°Ø´ØªÙ‡)" },
          { de: "wenn", fa: "ÙˆÙ‚ØªÛŒ Ú©Ù‡ (Ø¹Ø§Ø¯ØªÛŒ/Ø¢ÛŒÙ†Ø¯Ù‡) / Ø§Ú¯Ø± (Ø´Ø±Ø·ÛŒ)" },
          { de: "seitdem", fa: "Ø§Ø² ÙˆÙ‚ØªÛŒ Ú©Ù‡ / Ø§Ø² Ø¢Ù† Ø²Ù…Ø§Ù† Ú©Ù‡" },
          { de: "sobald", fa: "Ø¨Ù‡ Ù…Ø­Ø¶ Ø§ÛŒÙ†Ú©Ù‡" },
          { de: "solange", fa: "ØªØ§ Ø²Ù…Ø§Ù†ÛŒ Ú©Ù‡ / Ù…Ø§Ø¯Ø§Ù…ÛŒ Ú©Ù‡" },
          { de: "falls", fa: "Ø¯Ø± ØµÙˆØ±ØªÛŒ Ú©Ù‡ (Ø´Ø±Ø·ÛŒ)" },
          { de: "damit", fa: "Ø¨Ù‡ Ø·ÙˆØ±ÛŒ Ú©Ù‡ / Ø¨Ø±Ø§ÛŒ Ø§ÛŒÙ†Ú©Ù‡ (Ù‡Ø¯Ù)" }
        ]
      },
      {
        type: "text",
        title: "Û². ØªÙØ§ÙˆØª als Ùˆ wenn",
        text: "als Ø¨Ø±Ø§ÛŒ ÛŒÚ© Ø±ÙˆÛŒØ¯Ø§Ø¯ ÙˆØ§Ø­Ø¯ Ø¯Ø± Ú¯Ø°Ø´ØªÙ‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ (Ich war 10, als ich nach Deutschland kam). wenn Ø³Ù‡ Ú©Ø§Ø±Ø¨Ø±Ø¯ Ø¯Ø§Ø±Ø¯: Û±) Ø±ÙˆÛŒØ¯Ø§Ø¯ ØªÚ©Ø±Ø§Ø±ÛŒ Ø¯Ø± Ú¯Ø°Ø´ØªÙ‡ (Immer wenn es regnete, blieb ich zu Hause)ØŒ Û²) Ø±ÙˆÛŒØ¯Ø§Ø¯ Ø¯Ø± Ø¢ÛŒÙ†Ø¯Ù‡ (Wenn ich Zeit habe, komme ich)ØŒ Û³) Ø´Ø±Ø· (Wenn du hilfst, schaffe ich es)."
      },
      {
        type: "text",
        title: "Û³. Ù†Ú©ØªÙ‡ Ø²Ù…Ø§Ù†ÛŒ: nachdem Ùˆ bevor",
        text: "Ø¯Ø± nachdem Ùˆ bevorØŒ Ø²Ù…Ø§Ù† ÙØ¹ل Ø¯Ø± Ø¬Ù…لÙ‡ ÙˆØ§Ø¨Ø³ØªÙ‡ Ùˆ Ø¬Ù…لÙ‡ Ø§ØµلÛŒ Ù…ØªÙØ§ÙˆØª Ø§Ø³Øª. Ù‚Ø§Ù†ÙˆÙ† Plusquamperfekt: Ø§Ú¯Ø± Ø¯Ø± nachdem Ø¬Ù…لÙ‡ Ø§ØµلÛŒ Perfekt Ø¨Ø§Ø´Ø¯ØŒ Ø¬Ù…لÙ‡ ÙˆØ§Ø¨Ø³ØªÙ‡ Plusquamperfekt Ø§Ø³Øª Ùˆ Ø¨Ø§لØ¹Ú©Ø³. Ù…Ø«Ø§ل: Nachdem ich gegessen hatte, ging ich spazieren."
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ",
        items: [
          { de: "Obwohl es regnet, gehe ich spazieren.", fa: "Ø§Ú¯Ø±Ú†Ù‡ Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯ØŒ Ù…Ù† Ø¨Ù‡ Ù¾ÛŒØ§Ø¯Ù‡â€ŒØ±ÙˆÛŒ Ù…ÛŒâ€ŒØ±ÙˆÙ…." },
          { de: "Bevor du gehst, musst du aufrÃ¤umen.", fa: "Ù‚Ø¨ل Ø§Ø² Ø§ÛŒÙ†Ú©Ù‡ Ø¨Ø±ÙˆÛŒØŒ Ø¨Ø§ÛŒØ¯ Ù…Ø±ØªØ¨ Ú©Ù†ÛŒ." },
          { de: "Nachdem ich aufgestanden bin, frÃ¼hstÃ¼cke ich.", fa: "Ø¨Ø¹Ø¯ Ø§Ø² Ø§ÛŒÙ†Ú©Ù‡ Ø¨لÙ†Ø¯ Ø´Ø¯Ù…ØŒ ØµØ¨Ø­Ø§Ù†Ù‡ Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…." },
          { de: "Als ich jung war, wohnte ich in Berlin.", fa: "ÙˆÙ‚ØªÛŒ Ø¬ÙˆØ§Ù† Ø¨ÙˆØ¯Ù…ØŒ Ø¯Ø± Ø¨Ø±لÛŒÙ† Ø²Ù†Ø¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ø±Ø¯Ù…." },
          { de: "Wenn ich Ferien habe, reise ich gern.", fa: "ÙˆÙ‚ØªÛŒ ØªØ¹Ø·ÛŒلØ§Øª Ø¯Ø§Ø±Ù…ØŒ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù… Ø³ÙØ± Ú©Ù†Ù…." },
          { de: "Seitdem er Deutsch lernt, versteht er mehr.", fa: "Ø§Ø² ÙˆÙ‚ØªÛŒ Ø¢لÙ…Ø§Ù†ÛŒ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ØŒ Ø¨ÛŒØ´ØªØ± Ù…ÛŒâ€ŒÙÙ‡Ù…Ø¯." },
          { de: "Sobald ich zu Hause bin, rufe ich dich an.", fa: "Ø¨Ù‡ Ù…Ø­Ø¶ Ø§ÛŒÙ†Ú©Ù‡ Ø¨Ø±Ø³Ù… Ø®Ø§Ù†Ù‡ØŒ Ø¨Ù‡Øª Ø²Ù†Ú¯ Ù…ÛŒâ€ŒØ²Ù†Ù…." },
          { de: "Solange du hier bist, bin ich glÃ¼cklich.", fa: "ØªØ§ ÙˆÙ‚ØªÛŒ Ø§ÛŒÙ†Ø¬Ø§ Ù‡Ø³ØªÛŒØŒ Ù…Ù† Ø®ÙˆØ´Ø¨Ø®ØªÙ…." }
        ]
      },
      {
        type: "alert",
        title: "Ù‚Ø§Ù†ÙˆÙ† Ø·لØ§ÛŒÛŒ: ØªØ±ØªÛŒØ¨ ÙØ¹ل Ø¯Ø± Ø¬Ù…لØ§Øª Ù…Ø±Ú©Ø¨",
        text: "Ø§Ú¯Ø± Ø¬Ù…لÙ‡ Ø¨Ø§ Nebensatz Ø´Ø±ÙˆØ¹ Ø´ÙˆØ¯ØŒ ÙØ¹ل Ø¬Ù…لÙ‡ Ø§ØµلÛŒ Ø¨لØ§ÙØ§ØµلÙ‡ Ø¨Ø¹Ø¯ Ø§Ø² Ú©Ø§Ù…Ø§ Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û² Ù…ÛŒâ€ŒØ¢ÛŒØ¯. Ù…Ø«Ø§ل: Obwohl es regnet, gehe ich spazieren. (ÙØ¹ل gehe Ø¨Ø¹Ø¯ Ø§Ø² Ú©Ø§Ù…Ø§ Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û²). Ø§Ù…Ø§ Ø§Ú¯Ø± Ø¬Ù…لÙ‡ Ø§ØµلÛŒ Ø§Ùˆل Ø¨ÛŒØ§ÛŒØ¯: Ich gehe spazieren, obwohl es regnet. (ÙØ¹ل regnet Ø¯Ø± Ø¢Ø®Ø± Nebensatz)."
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ† Ø¬Ù…لÙ‡â€ŒÙˆØ§Ø±Ù‡â€ŒÙ‡Ø§ÛŒ ÙˆØ§Ø¨Ø³ØªÙ‡",
        questions: [
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ Â«Ø¨Ø¹Ø¯ Ø§Ø² Ø§ÛŒÙ†Ú©Ù‡ ØºØ°Ø§ Ø®ÙˆØ±Ø¯Ù…ØŒ Ø¨ÛŒØ±ÙˆÙ† Ø±ÙØªÙ….Â»",
            questionDe: "Welcher Satz ist grammatikalisch korrekt?",
            options: [
              { text: "Nachdem ich hatte gegessen, ging ich raus.", isCorrect: false },
              { text: "Nachdem ich gegessen hatte, ging ich raus.", isCorrect: true },
              { text: "Nachdem ich gegessen habe, ging ich raus.", isCorrect: false }
            ],
            explanation: "Ø¯Ø± nachdem Ø§Ú¯Ø± Ø¬Ù…لÙ‡ Ø§ØµلÛŒ Perfekt/PrÃ¤teritum Ø¨Ø§Ø´Ø¯ØŒ Ø¬Ù…لÙ‡ ÙˆØ§Ø¨Ø³ØªÙ‡ Plusquamperfekt (hatte + Partizip II) Ø§Ø³Øª."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Ø­Ø±Ù Ø±Ø¨Ø· Ø¨Ø±Ø§ÛŒ ÛŒÚ© Ø±ÙˆÛŒØ¯Ø§Ø¯ ÙˆØ§Ø­Ø¯ Ø¯Ø± Ú¯Ø°Ø´ØªÙ‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Welches Wort benutzt man fÃ¼r ein einmaliges Ereignis in der Vergangenheit?",
            options: [
              { text: "wenn", isCorrect: false },
              { text: "als", isCorrect: true },
              { text: "seitdem", isCorrect: false }
            ],
            explanation: "als Ø¨Ø±Ø§ÛŒ ÛŒÚ© Ø±ÙˆÛŒØ¯Ø§Ø¯ ÙˆØ§Ø­Ø¯ Ø¯Ø± Ú¯Ø°Ø´ØªÙ‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯. wenn Ø¨Ø±Ø§ÛŒ Ø¹Ø§Ø¯Ø§Øª ÛŒØ§ Ø¢ÛŒÙ†Ø¯Ù‡."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÙ…Ø±ÛŒÙ† Ø¬Ù…لÙ‡â€ŒÙˆØ§Ø±Ù‡â€ŒÙ‡Ø§ÛŒ ÙˆØ§Ø¨Ø³ØªÙ‡",
        instruction: "Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù…Ù†Ø§Ø³Ø¨ Ø±Ø§ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "_______ ich nach Deutschland kam, konnte ich kein Deutsch.", answer: "Als", hint: "ÛŒÚ© Ø±ÙˆÛŒØ¯Ø§Ø¯ ÙˆØ§Ø­Ø¯ Ø¯Ø± Ú¯Ø°Ø´ØªÙ‡" },
          { sentence: "Ich bleibe zu Hause, _______ es regnet.", answer: "obwohl", hint: "ØªØ¶Ø§Ù‘Ø¯ / Ø§Ú¯Ø±Ú†Ù‡" },
          { sentence: "_______ du kommst, ruf mich bitte an.", answer: "Bevor", hint: "Ù‚Ø¨ل Ø§Ø² Ø§ÛŒÙ†Ú©Ù‡" },
          { sentence: "_______ er Deutsch gelernt hat, hat er mehr Freunde gefunden.", answer: "Seitdem", hint: "Ø§Ø² ÙˆÙ‚ØªÛŒ Ú©Ù‡" },
          { sentence: "_______ ich zu Hause ankomme, koche ich das Abendessen.", answer: "Sobald", hint: "Ø¨Ù‡ Ù…Ø­Ø¶ Ø§ÛŒÙ†Ú©Ù‡" },
          { sentence: "_______ ich Ferien hatte, bin ich immer ans Meer gefahren.", answer: "Immer wenn", hint: "Ù‡Ø± ÙˆÙ‚Øª (ØªÚ©Ø±Ø§Ø±ÛŒ Ø¯Ø± Ú¯Ø°Ø´ØªÙ‡)" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "Ø²Ù…Ø§Ù† Ùˆ ØªØ±ØªÛŒØ¨ (Zeit und Reihenfolge)",
        words: [
          { de: "gleichzeitig", fa: "Ù‡Ù…Ø²Ù…Ø§Ù†", article: "-", plural: "-", examples: [{ de: "Gleichzeitig arbeitete er und hÃ¶rte Musik.", fa: "Ù‡Ù…Ø²Ù…Ø§Ù† Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ø±Ø¯ Ùˆ Ù…ÙˆØ³ÛŒÙ‚ÛŒ Ú¯ÙˆØ´ Ù…ÛŒâ€ŒØ¯Ø§Ø¯." }] },
          { de: "anschlieÃŸend", fa: "Ù…ØªØ¹Ø§Ù‚Ø¨Ø§Ù‹ / Ø¨Ø¹Ø¯ Ø§Ø² Ø¢Ù†", article: "-", plural: "-", examples: [{ de: "AnschlieÃŸend gingen wir nach Hause.", fa: "Ø¨Ø¹Ø¯ Ø§Ø² Ø¢Ù† Ø¨Ù‡ Ø®Ø§Ù†Ù‡ Ø±ÙØªÛŒÙ…." }] },
          { de: "zuvor", fa: "Ù¾ÛŒØ´ Ø§Ø² Ø¢Ù†", article: "-", plural: "-", examples: [{ de: "Ich hatte ihn zuvor noch nie gesehen.", fa: "Ù‚Ø¨ل Ø§Ø² Ø¢Ù† Ù‡Ø±Ú¯Ø² Ø§Ùˆ Ø±Ø§ Ù†Ø¯ÛŒØ¯Ù‡ Ø¨ÙˆØ¯Ù…." }] },
          { de: "inzwischen", fa: "Ø¯Ø± Ø§ÛŒÙ† ÙØ§ØµلÙ‡ / Ù‡Ù…â€ŒØ§Ú©Ù†ÙˆÙ†", article: "-", plural: "-", examples: [{ de: "Inzwischen hat sich viel verÃ¤ndert.", fa: "Ø¯Ø± Ø§ÛŒÙ† ÙØ§ØµلÙ‡ Ø®ÛŒلÛŒ Ú†ÛŒØ²Ù‡Ø§ ØªØºÛŒÛŒØ± Ú©Ø±Ø¯Ù‡." }] },
          { de: "mittlerweile", fa: "Ø¯Ø± Ø­Ø§ل Ø­Ø§Ø¶Ø± / ØªØ§ Ø§لØ§Ù†", article: "-", plural: "-", examples: [{ de: "Mittlerweile spreche ich gut Deutsch.", fa: "ØªØ§ Ø§لØ§Ù† Ø¢لÙ…Ø§Ù†ÛŒ Ø®ÙˆØ¨ ØµØ­Ø¨Øª Ù…ÛŒâ€ŒÚ©Ù†Ù…." }] }
        ]
      },
      {
        title: "Ø±ÙˆØ§Ø¨Ø· Ø¹لÙ‘ÛŒ Ùˆ Ø´Ø±Ø·ÛŒ (Kausal und konditional)",
        words: [
          { de: "der Grund", fa: "Ø¯لÛŒل / Ø¹لØª", article: "der", plural: "die GrÃ¼nde", examples: [{ de: "Es gibt viele GrÃ¼nde dafÃ¼r.", fa: "Ø¯لØ§ÛŒل Ø²ÛŒØ§Ø¯ÛŒ Ø¨Ø±Ø§ÛŒ Ø¢Ù† ÙˆØ¬ÙˆØ¯ Ø¯Ø§Ø±Ø¯." }] },
          { de: "die Ursache", fa: "Ø¹لØª / Ø³Ø¨Ø¨", article: "die", plural: "die Ursachen", examples: [{ de: "Die Ursache des Problems ist unklar.", fa: "Ø¹لØª Ù…Ø´Ú©ل Ù†Ø§Ù…Ø´Ø®Øµ Ø§Ø³Øª." }] },
          { de: "die Folge", fa: "Ù†ØªÛŒØ¬Ù‡ / Ù¾ÛŒØ§Ù…Ø¯", article: "die", plural: "die Folgen", examples: [{ de: "Das hat schwerwiegende Folgen.", fa: "Ø§ÛŒÙ† Ù¾ÛŒØ§Ù…Ø¯Ù‡Ø§ÛŒ Ø¬Ø¯ÛŒ Ø¯Ø§Ø±Ø¯." }] },
          { de: "daraufhin", fa: "Ø¨Ø¯Ù†Ø¨Ø§ل Ø¢Ù† / Ù¾Ø³ Ø§Ø² Ø¢Ù†", article: "-", plural: "-", examples: [{ de: "Daraufhin verlieÃŸ er den Raum.", fa: "Ø¨Ø¯Ù†Ø¨Ø§ل Ø¢Ù† Ø§ØªØ§Ù‚ Ø±Ø§ ØªØ±Ú© Ú©Ø±Ø¯." }] },
          { de: "infolgedessen", fa: "Ø¯Ø± Ù†ØªÛŒØ¬Ù‡", article: "-", plural: "-", examples: [{ de: "Er hat nicht gelernt, infolgedessen hat er bestanden.", fa: "Ø¯Ø±Ø³ Ù†Ø®ÙˆØ§Ù†Ø¯ØŒ Ø¯Ø± Ù†ØªÛŒØ¬Ù‡ Ù…Ø±Ø¯ÙˆØ¯ Ø´Ø¯." }] },
          { de: "demzufolge", fa: "Ø¨Ø± Ø§ÛŒÙ† Ø§Ø³Ø§Ø³ / Ø¨Ù†Ø§Ø¨Ø±Ø§ÛŒÙ†", article: "-", plural: "-", examples: [{ de: "Demzufolge mÃ¼ssen wir warten.", fa: "Ø¨Ø± Ø§ÛŒÙ† Ø§Ø³Ø§Ø³ Ø¨Ø§ÛŒØ¯ ØµØ¨Ø± Ú©Ù†ÛŒÙ…." }] },
          { de: "zumindest", fa: "Ø­Ø¯Ø§Ù‚ل", article: "-", plural: "-", examples: [{ de: "Zumindest habe ich es versucht.", fa: "Ø­Ø¯Ø§Ù‚ل ØªلØ§Ø´ Ú©Ø±Ø¯Ù…." }] },
          { de: "hÃ¶chstens", fa: "Ø­Ø¯Ø§Ú©Ø«Ø±", article: "-", plural: "-", examples: [{ de: "Das dauert hÃ¶chstens zwei Stunden.", fa: "Ø­Ø¯Ø§Ú©Ø«Ø± Ø¯Ùˆ Ø³Ø§Ø¹Øª Ø·Ùˆل Ù…ÛŒâ€ŒÚ©Ø´Ø¯." }] },
          { de: "vorausgesetzt", fa: "Ø¨Ù‡ Ø´Ø±Ø· Ø¢Ù†Ú©Ù‡", article: "-", plural: "-", examples: [{ de: "Vorausgesetzt, du hilfst mir.", fa: "Ø¨Ù‡ Ø´Ø±Ø· Ø¢Ù†Ú©Ù‡ Ú©Ù…Ú©Ù… Ú©Ù†ÛŒ." }] },
          { de: "andernfalls", fa: "Ø¯Ø± ØºÛŒØ± Ø§ÛŒÙ† ØµÙˆØ±Øª", article: "-", plural: "-", examples: [{ de: "Beeil dich, andernfalls kommen wir zu spÃ¤t.", fa: "Ø¹Ø¬لÙ‡ Ú©Ù†ØŒ Ø¯Ø± ØºÛŒØ± Ø§ÛŒÙ† ØµÙˆØ±Øª Ø¯ÛŒØ± Ù…ÛŒâ€ŒØ±Ø³ÛŒÙ…." }] },
          { de: "im Gegensatz zu", fa: "Ø¨Ø±Ø®لØ§Ù / Ø¯Ø± Ù…Ù‚Ø§ÛŒØ³Ù‡ Ø¨Ø§", article: "-", plural: "-", examples: [{ de: "Im Gegensatz zu ihm spreche ich Deutsch.", fa: "Ø¨Ø±Ø®لØ§Ù Ø§Ùˆ Ù…Ù† Ø¢لÙ…Ø§Ù†ÛŒ ØµØ­Ø¨Øª Ù…ÛŒâ€ŒÚ©Ù†Ù…." }] },
          { de: "dementsprechend", fa: "Ù…Ø·Ø§Ø¨Ù‚ Ø¢Ù† / Ø¨Ù‡ Ù‡Ù…ÛŒÙ† ØªØ±ØªÛŒØ¨", article: "-", plural: "-", examples: [{ de: "Er hat viel gelernt und dementsprechend gut bestanden.", fa: "Ø®ÛŒلÛŒ Ø¯Ø±Ø³ Ø®ÙˆØ§Ù†Ø¯ Ùˆ Ù…Ø·Ø§Ø¨Ù‚ Ø¢Ù† Ù‚Ø¨Ùˆل Ø´Ø¯." }] },
          { de: "beziehungsweise (bzw.)", fa: "Ø¨Ù‡ Ø¹Ø¨Ø§Ø±Øª Ø¯ÛŒÚ¯Ø± / ÛŒØ§", article: "-", plural: "-", examples: [{ de: "Er kommt morgen, beziehungsweise Ã¼bermorgen.", fa: "Ø§Ùˆ ÙØ±Ø¯Ø§ Ù…ÛŒâ€ŒØ¢ÛŒØ¯ØŒ ÛŒØ§ Ù¾Ø³â€ŒÙØ±Ø¯Ø§." }] },
          { de: "sofern", fa: "Ø¨Ù‡ Ø´Ø±Ø·ÛŒ Ú©Ù‡", article: "-", plural: "-", examples: [{ de: "Sofern das Wetter gut ist, machen wir einen Ausflug.", fa: "Ø¨Ù‡ Ø´Ø±Ø·ÛŒ Ú©Ù‡ Ù‡ÙˆØ§ Ø®ÙˆØ¨ Ø¨Ø§Ø´Ø¯ØŒ Ú¯Ø±Ø¯Ø´ Ù…ÛŒâ€ŒØ±ÙˆÛŒÙ…." }] },
          { de: "dennoch", fa: "Ø¨Ø§ Ø§ÛŒÙ† ÙˆØ¬ÙˆØ¯", article: "-", plural: "-", examples: [{ de: "Es war kalt, dennoch gingen wir schwimmen.", fa: "Ø³Ø±Ø¯ Ø¨ÙˆØ¯ØŒ Ø¨Ø§ Ø§ÛŒÙ† ÙˆØ¬ÙˆØ¯ Ø±ÙØªÛŒÙ… Ø´Ù†Ø§." }] },
          { de: "trotzdem", fa: "Ø¨Ø§ ÙˆØ¬ÙˆØ¯ Ø§ÛŒÙ†", article: "-", plural: "-", examples: [{ de: "Er ist krank, trotzdem arbeitet er.", fa: "Ù…Ø±ÛŒØ¶ Ø§Ø³ØªØŒ Ø¨Ø§ ÙˆØ¬ÙˆØ¯ Ø§ÛŒÙ† Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "zwar ..., aber ...", fa: "Ø§لØ¨ØªÙ‡ ... ÙˆلÛŒ ...", article: "-", plural: "-", examples: [{ de: "Zwar ist es teuer, aber sehr gut.", fa: "Ø§لØ¨ØªÙ‡ Ú¯Ø±Ø§Ù† Ø§Ø³Øª ÙˆلÛŒ Ø®ÛŒلÛŒ Ø®ÙˆØ¨." }] },
          { de: "keinesfalls", fa: "Ø¨Ù‡ Ù‡ÛŒÚ† ÙˆØ¬Ù‡", article: "-", plural: "-", examples: [{ de: "Das darfst du keinesfalls machen.", fa: "Ø¨Ù‡ Ù‡ÛŒÚ† ÙˆØ¬Ù‡ Ù†Ø¨Ø§ÛŒØ¯ Ø§ÛŒÙ† Ú©Ø§Ø± Ø±Ø§ Ø¨Ú©Ù†ÛŒ." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Ein besonderer Tag in meinem Leben\n\nAls ich 18 Jahre alt war, habe ich eine wichtige Entscheidung getroffen. Nachdem ich mein Abitur bestanden hatte, wollte ich sofort ins Ausland gehen. Meine Eltern waren zuerst besorgt, weil ich noch so jung war. Obwohl sie Angst hatten, haben sie mich unterstÃ¼tzt.\nSeitdem ich in Wien studiere, hat sich mein Leben komplett verÃ¤ndert. Bevor ich hierherkam, hatte ich noch nie allein gelebt. Sobald ich meine erste Wohnung bezogen hatte, fÃ¼hlte ich mich erwachsen. Solange ich in der Schule war, hatte meine Mutter immer fÃ¼r mich gekocht. Jetzt musste ich alles selbst machen.\nInzwischen bin ich seit drei Jahren hier. Mittlerweile spreche ich flieÃŸend Deutsch und habe viele Freunde gefunden. Falls ich nÃ¤chstes Jahr einen guten Job finde, werde ich bleiben. Andernfalls werde ich zurÃ¼ck nach Hause fahren.",
      questions: [
        { question: "Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ú†Ù†Ø¯ Ø³Ø§لØ´ Ø¨ÙˆØ¯ Ú©Ù‡ ØªØµÙ…ÛŒÙ… Ù…Ù‡Ù…ÛŒ Ú¯Ø±ÙØªØŸ", answer: "Û±Û¸ Ø³Ø§لÙ‡ Ø¨ÙˆØ¯." },
        { question: "ÙˆØ§لØ¯ÛŒÙ†Ø´ Ú†Ù‡ ÙˆØ§Ú©Ù†Ø´ÛŒ Ù†Ø´Ø§Ù† Ø¯Ø§Ø¯Ù†Ø¯ØŸ", answer: "Ø§Ùˆل Ù†Ú¯Ø±Ø§Ù† Ø¨ÙˆØ¯Ù†Ø¯ Ø§Ù…Ø§ Ø§Ø² Ø§Ùˆ Ø­Ù…Ø§ÛŒØª Ú©Ø±Ø¯Ù†Ø¯." },
        { question: "Ù‚Ø¨ل Ø§Ø² Ø±ÙØªÙ† Ø¨Ù‡ ÙˆÛŒÙ† Ú†Ù‡ ØªØ¬Ø±Ø¨Ù‡â€ŒØ§ÛŒ Ù†Ø¯Ø§Ø´ØªØŸ", answer: "Ù‡Ø±Ú¯Ø² ØªÙ†Ù‡Ø§ Ø²Ù†Ø¯Ú¯ÛŒ Ù†Ú©Ø±Ø¯Ù‡ Ø¨ÙˆØ¯." },
        { question: "Ø§Ú¯Ø± Ø³Ø§ل Ø¢ÛŒÙ†Ø¯Ù‡ Ø´Øºل Ø®ÙˆØ¨ÛŒ Ù¾ÛŒØ¯Ø§ Ù†Ú©Ù†Ø¯ Ú†Ù‡ Ú©Ø§Ø±ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", answer: "Ø¨Ù‡ Ø®Ø§Ù†Ù‡ Ø¨Ø±Ù…ÛŒâ€ŒÚ¯Ø±Ø¯Ø¯." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ø±ÙˆØ§ÛŒØª Ø²Ù†Ø¯Ú¯ÛŒ",
      prompt: "ÛŒÚ© Ù…ØªÙ† Û¸-Û±Û° Ø®Ø·ÛŒ Ø¯Ø±Ø¨Ø§Ø±Ù‡ ÛŒÚ© Ø±ÙˆØ² Ù…Ù‡Ù… ÛŒØ§ ØªØµÙ…ÛŒÙ… Ù…Ù‡Ù… Ø²Ù†Ø¯Ú¯ÛŒØªØ§Ù† Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯. Ø§Ø² als, nachdem, bevor, seitdem, obwohl Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      steps: [
        {
          title: "Ø´Ø±ÙˆØ¹ Ø±ÙˆØ§ÛŒØª Ø¨Ø§ als",
          text: "Als + Ø²Ù…Ø§Ù† Ø¯Ø± Ú¯Ø°Ø´ØªÙ‡",
          example: { de: "Als ich 20 Jahre alt war, zog ich nach MÃ¼nchen.", fa: "ÙˆÙ‚ØªÛŒ Û²Û° Ø³Ø§لÙ‡ Ø¨ÙˆØ¯Ù…ØŒ Ø¨Ù‡ Ù…ÙˆÙ†ÛŒØ® Ù†Ù‚ل Ù…Ú©Ø§Ù† Ú©Ø±Ø¯Ù…." }
        },
        {
          title: "ØªÙˆØ¶ÛŒØ­ ØªØ±ØªÛŒØ¨ ÙˆÙ‚Ø§ÛŒØ¹",
          text: "Ø§Ø² nachdem Ùˆ bevor Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯",
          example: { de: "Nachdem ich die Wohnung gefunden hatte, suchte ich einen Job.", fa: "Ø¨Ø¹Ø¯ Ø§Ø² Ø§ÛŒÙ†Ú©Ù‡ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù† Ø±Ø§ Ù¾ÛŒØ¯Ø§ Ú©Ø±Ø¯Ù…ØŒ Ø¯Ù†Ø¨Ø§ل Ø´Øºل Ú¯Ø´ØªÙ…." }
        },
        {
          title: "Ù†ØªÛŒØ¬Ù‡ ÙØ¹لÛŒ Ø¨Ø§ seitdem",
          text: "Ø§Ø² ÙˆÙ‚ØªÛŒ Ú©Ù‡...",
          example: { de: "Seitdem lebe ich hier und bin glÃ¼cklich.", fa: "Ø§Ø² Ø¢Ù† Ø²Ù…Ø§Ù† Ø§ÛŒÙ†Ø¬Ø§ Ø²Ù†Ø¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ù… Ùˆ Ø®ÙˆØ´Ø¨Ø®ØªÙ…." }
        }
      ],
      modelAnswer: "Als ich 22 Jahre alt war, habe ich eine schwierige Entscheidung getroffen. Nachdem ich mein Studium abgeschlossen hatte, wollte ich ins Ausland gehen. Meine Eltern waren dagegen, aber obwohl sie traurig waren, haben sie mich unterstÃ¼tzt. Bevor ich nach Deutschland flog, hatte ich noch nie allein gelebt. Sobald ich in Frankfurt ankam, suchte ich eine Wohnung. Es war schwer, aber nachdem ich drei Wochen gesucht hatte, fand ich ein kleines Zimmer. Seitdem ich hier lebe, hat sich mein Leben stark verÃ¤ndert. Mittlerweile spreche ich gut Deutsch und habe einen festen Job. Falls alles gut geht, mÃ¶chte ich noch zwei Jahre bleiben."
    }
  ],

  listening: [
    {
      title: "Ø¬Ù…لØ§Øª Ù¾ÛŒÚ†ÛŒØ¯Ù‡ Ø¯Ø± Ù…Ú©Ø§لÙ…Ù‡",
      source: "Deutsche Grammatik - NebensÃ¤tze",
      link: "https://www.youtube.com/watch?v=QfwvHcVBVBU",
      instructions: "Ø¨Ù‡ Ø­Ø±ÙˆÙ Ø±Ø¨Ø· ÙØ±Ø¹ÛŒ Ø¯Ø± ÙˆÛŒØ¯ÛŒÙˆ Ø¯Ù‚Øª Ú©Ù†ÛŒØ¯. Ù‡Ø± Ø¨Ø§Ø± Ù…ÛŒâ€ŒØ´Ù†ÙˆÛŒØ¯ obwohl, bevor, nachdem, seitdem, sobald... ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯ Ùˆ ØªÙˆØ¬Ù‡ Ú©Ù†ÛŒØ¯ ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø± Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ¢ÛŒØ¯."
    }
  ],

  speaking: [
    {
      title: "ØªÙˆØµÛŒÙ Ø±ÙˆØ§ل Ø±ÙˆØ²Ø§Ù†Ù‡",
      pattern: "Nachdem ich ... habe, ... / Bevor ich ..., ... / Seitdem ich ...",
      exercise: "Ø±ÙˆØ§ل ØµØ¨Ø­Ú¯Ø§Ù‡ÛŒ Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² nachdem, bevor Ùˆ seitdem ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯. Ù‡Ø± Ø¬Ù…لÙ‡ Ø­Ø¯Ø§Ù‚ل ÛŒÚ© Nebensatz Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´Ø¯."
    }
  ],

  cultureTip: "Ø¯Ø± Ø²Ø¨Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒØŒ Ø¬Ù…لØ§Øª Ù¾ÛŒÚ†ÛŒØ¯Ù‡ Ø¨Ø§ Ú†Ù†Ø¯ Nebensatz Ù†Ø´Ø§Ù†Ù‡ Ø³Ø·Ø­ Ø¨Ø§لØ§ÛŒ Ø²Ø¨Ø§Ù†ÛŒ Ø§Ø³Øª. Ø¢لÙ…Ø§Ù†ÛŒâ€ŒÙ‡Ø§ Ø¯Ø± Ù†ÙˆØ´ØªÙ† Ùˆ ØµØ­Ø¨Øªâ€ŒÙ‡Ø§ÛŒ Ø±Ø³Ù…ÛŒ Ø§Ø² Ø¬Ù…لØ§Øª Ø¨لÙ†Ø¯ Ùˆ Ù¾ÛŒÚ†ÛŒØ¯Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯. ÛŒÚ©ÛŒ Ø§Ø² ÙˆÛŒÚ˜Ú¯ÛŒâ€ŒÙ‡Ø§ÛŒ Ù…Ø¹Ø±ÙˆÙ Ø²Ø¨Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒØŒ ÙØ¹ل Ø¢Ø®Ø± (Satzklammer) Ø§Ø³Øª Ú©Ù‡ Ø´Ù†ÙˆÙ†Ø¯Ù‡ Ø¨Ø§ÛŒØ¯ ØªØ§ Ø¢Ø®Ø± Ø¬Ù…لÙ‡ ØµØ¨Ø± Ú©Ù†Ø¯ ØªØ§ Ø¨ÙÙ‡Ù…Ø¯ ÙØ¹ل Ú†ÛŒØ³Øª. Ø§ÛŒÙ† ÙˆÛŒÚ˜Ú¯ÛŒ Ø¯Ø± Ù…Ù‚Ø§ÛŒØ³Ù‡ Ø¨Ø§ Ø§Ù†Ú¯لÛŒØ³ÛŒ Ùˆ ÙØ§Ø±Ø³ÛŒ Ø¨Ø³ÛŒØ§Ø± Ù…ØªÙØ§ÙˆØª Ø§Ø³Øª.",

  examData: {
    questions: [
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ Â«ÙˆÙ‚ØªÛŒ Ø¬ÙˆØ§Ù† Ø¨ÙˆØ¯Ù… Ø¯Ø± Ø¨Ø±لÛŒÙ† Ø²Ù†Ø¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ø±Ø¯Ù….Â»", options: ["Wenn ich jung war, lebte ich in Berlin.", "Als ich jung war, lebte ich in Berlin.", "Wenn ich jung war, lebte ich in Berlin.", "Seitdem ich jung war, lebte ich in Berlin."], answer: 1 },
      { question: "Ø¯Ø± Nebensatz ÙØ¹ل Ú©Ø¬Ø§ Ù‚Ø±Ø§Ø± Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ØŸ", options: ["Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û±", "Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û²", "Ø¢Ø®Ø± Ø¬Ù…لÙ‡", "Ø¨Ø¹Ø¯ Ø§Ø² ÙØ§Ø¹ل"], answer: 2 },
      { question: "Â«Obwohl es regnet, _______ ich spazieren.Â»", options: ["gehe", "ich gehe", "gehe ich", "ich"], answer: 2 },
      { question: "Ø¨Ø±Ø§ÛŒ ÛŒÚ© Ø±ÙˆÛŒØ¯Ø§Ø¯ ØªÚ©Ø±Ø§Ø±ÛŒ Ø¯Ø± Ú¯Ø°Ø´ØªÙ‡ Ø§Ø² Ú©Ø¯Ø§Ù… Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["als", "wenn", "seitdem", "nachdem"], answer: 1 },
      { question: "Â«Nachdem ich _______ hatte, ging ich schlafen.Â»", options: ["essen", "gegessen", "habe gegessen", "esse"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø­Ø±Ù Ø±Ø¨Ø· Ù…Ø¹Ù†Ø§ÛŒ Â«Ø§Ø² ÙˆÙ‚ØªÛŒ Ú©Ù‡Â» Ø¯Ø§Ø±Ø¯ØŸ", options: ["bevor", "sobald", "seitdem", "obwohl"], answer: 2 },
      { question: "Â«_______ du kommst, ruf mich bitte an.Â» (Ø¨Ù‡ Ù…Ø­Ø¶ Ø§ÛŒÙ†Ú©Ù‡)", options: ["Obwohl", "Sobald", "Bevor", "Nachdem"], answer: 1 },
      { question: "Â«Ich bleibe zu Hause, _______ ich krank bin.Â» (Ø§Ú¯Ø±Ú†Ù‡)", options: ["weil", "obwohl", "dass", "damit"], answer: 1 }
    ]
  }
};
