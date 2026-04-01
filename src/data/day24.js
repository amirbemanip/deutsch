export const day24Data = {
  title: "Ø±ÙˆØ² Û²Û´: ØµÙØªâ€ŒÙ‡Ø§ â€” Komparativ Ùˆ Superlativ",
  objective: "Ø¯Ø± Ø§ÛŒÙ† Ø±ÙˆØ² ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒØ¯ Ú†Ø·ÙˆØ± Ú†ÛŒØ²Ù‡Ø§ Ø±Ø§ Ù…Ù‚Ø§ÛŒØ³Ù‡ Ú©Ù†ÛŒØ¯. Â«Ø¨Ø±Ù„ÛŒÙ† Ø¨Ø²Ø±Ú¯â€ŒØªØ± Ø§Ø² Ù…ÙˆÙ†ÛŒØ® Ø§Ø³ØªÂ» ÛŒØ§ Â«Ø§ÛŒÙ† Ø±Ø³ØªÙˆØ±Ø§Ù† Ø¨Ù‡ØªØ±ÛŒÙ† Ø§Ø³ØªÂ» â€” Ù‡Ù…Ù‡ Ø§ÛŒÙ†â€ŒÙ‡Ø§ Ø¨Ø§ Komparativ Ùˆ Superlativ Ø³Ø§Ø®ØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯.",

  grammarData: {
    subtitle: "Komparativ (Ù…Ù‚Ø§ÛŒØ³Ù‡ Ø¯Ùˆ Ú†ÛŒØ²) Ùˆ Superlativ (Ø¨Ø±ØªØ±ÛŒÙ†)",
    content: [
      {
        type: "text",
        title: "Û±. Komparativ â€” Ù…Ù‚Ø§ÛŒØ³Ù‡ Ø¯Ùˆ Ú†ÛŒØ² (Ù…Ø«Ù„Ø§Ù‹ Ø¨Ø²Ø±Ú¯â€ŒØªØ±ØŒ Ø²ÛŒØ¨Ø§ØªØ±)",
        text: "Ø¨Ø±Ø§ÛŒ Ù…Ù‚Ø§ÛŒØ³Ù‡ Ø¯Ùˆ Ú†ÛŒØ²ØŒ Ø¨Ù‡ Ø¢Ø®Ø± ØµÙØª Ù¾Ø³ÙˆÙ†Ø¯ -er Ø§Ø¶Ø§ÙÙ‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ… Ùˆ Ø§Ø² Ú©Ù„Ù…Ù‡ als (Ø§Ø²) Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ….\nÙØ±Ù…ÙˆÙ„: ØµÙØª + er + als"
      },
      {
        type: "table",
        title: "Ù‚Ø§Ø¹Ø¯Ù‡ Komparativ",
        rows: [
          { de: "groÃŸ â†’ grÃ¶ÃŸer als", fa: "Ø¨Ø²Ø±Ú¯ â†’ Ø¨Ø²Ø±Ú¯â€ŒØªØ± Ø§Ø²: Berlin ist grÃ¶ÃŸer als MÃ¼nchen." },
          { de: "schÃ¶n â†’ schÃ¶ner als", fa: "Ø²ÛŒØ¨Ø§ â†’ Ø²ÛŒØ¨Ø§ØªØ± Ø§Ø²: Die Stadt ist schÃ¶ner als das Dorf." },
          { de: "schnell â†’ schneller als", fa: "Ø³Ø±ÛŒØ¹ â†’ Ø³Ø±ÛŒØ¹â€ŒØªØ± Ø§Ø²: Der Zug ist schneller als der Bus." },
          { de: "alt â†’ Ã¤lter als", fa: "Ù‚Ø¯ÛŒÙ…ÛŒ/Ù¾ÛŒØ± â†’ Ù‚Ø¯ÛŒÙ…ÛŒâ€ŒØªØ± Ø§Ø² (Umlaut! aâ†’Ã¤)" },
          { de: "jung â†’ jÃ¼nger als", fa: "Ø¬ÙˆØ§Ù† â†’ Ø¬ÙˆØ§Ù†â€ŒØªØ± Ø§Ø² (Umlaut! uâ†’Ã¼)" },
          { de: "gut â†’ besser als", fa: "Ø®ÙˆØ¨ â†’ Ø¨Ù‡ØªØ± Ø§Ø² (Ø¨ÛŒâ€ŒÙ‚Ø§Ø¹Ø¯Ù‡!)" },
          { de: "viel â†’ mehr als", fa: "Ø²ÛŒØ§Ø¯ â†’ Ø¨ÛŒØ´ØªØ± Ø§Ø² (Ø¨ÛŒâ€ŒÙ‚Ø§Ø¹Ø¯Ù‡!)" },
          { de: "gern â†’ lieber als", fa: "Ø¨Ø§ Ù„Ø°Øª â†’ ØªØ±Ø¬ÛŒØ­â€ŒØªØ± Ø§Ø² (Ø¨ÛŒâ€ŒÙ‚Ø§Ø¹Ø¯Ù‡!)" }
        ]
      },
      {
        type: "text",
        title: "Û². Superlativ â€” Ø¨Ø±ØªØ±ÛŒÙ† (Ø¨Ù‡ØªØ±ÛŒÙ†ØŒ Ø¨Ø²Ø±Ú¯â€ŒØªØ±ÛŒÙ†)",
        text: "Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ø¨Ø±ØªØ±ÛŒÙ†ØŒ Ø§Ø² ØµÙØª + -st + Ø¢Ø±ØªÛŒÚ©Ù„ am/der die das Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ….\nÙØ±Ù…ÙˆÙ„ Ø¨Ø§ am: am + ØµÙØª + st + en\nÙØ±Ù…ÙˆÙ„ Ø¨Ø§ Ø¢Ø±ØªÛŒÚ©Ù„: der/die/das + ØµÙØª + st + e/en"
      },
      {
        type: "table",
        title: "Ù‚Ø§Ø¹Ø¯Ù‡ Superlativ",
        rows: [
          { de: "groÃŸ â†’ am grÃ¶ÃŸten / der grÃ¶ÃŸte", fa: "Ø¨Ø²Ø±Ú¯â€ŒØªØ±ÛŒÙ†: Das ist am grÃ¶ÃŸten. / der grÃ¶ÃŸte Mann" },
          { de: "schÃ¶n â†’ am schÃ¶nsten / das schÃ¶nste", fa: "Ø²ÛŒØ¨Ø§ØªØ±ÛŒÙ†: Der Sommer ist am schÃ¶nsten." },
          { de: "gut â†’ am besten / das beste", fa: "Ø¨Ù‡ØªØ±ÛŒÙ†: Das Restaurant ist am besten." },
          { de: "schnell â†’ am schnellsten / der schnellste", fa: "Ø³Ø±ÛŒØ¹â€ŒØªØ±ÛŒÙ†: Er ist am schnellsten." },
          { de: "billig â†’ am billigsten / das billigste", fa: "Ø§Ø±Ø²Ø§Ù†â€ŒØªØ±ÛŒÙ†: Das ist am billigsten." }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: ØµÙØªâ€ŒÙ‡Ø§ÛŒ Ø¨Ø§ Umlaut",
        text: "Ø¨Ø¹Ø¶ÛŒ ØµÙØªâ€ŒÙ‡Ø§ÛŒ ØªÚ©â€ŒÙ‡Ø¬Ø§ÛŒÛŒ Ø¨Ø§ Ø­Ø±ÙˆÙ ØµØ¯Ø§Ø¯Ø§Ø± a, o, u Ù‡Ù†Ú¯Ø§Ù… Ø§Ø¶Ø§ÙÙ‡ Ø´Ø¯Ù† -er Ùˆ -st Umlaut Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯:\nalt â†’ Ã¤lter â†’ am Ã¤ltesten\njung â†’ jÃ¼nger â†’ am jÃ¼ngsten\ngroÃŸ â†’ grÃ¶ÃŸer â†’ am grÃ¶ÃŸten\nkalt â†’ kÃ¤lter â†’ am kÃ¤ltesten"
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§Ù„â€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ",
        items: [
          { de: "Berlin ist grÃ¶ÃŸer als MÃ¼nchen.", fa: "Ø¨Ø±Ù„ÛŒÙ† Ø¨Ø²Ø±Ú¯â€ŒØªØ± Ø§Ø² Ù…ÙˆÙ†ÛŒØ® Ø§Ø³Øª." },
          { de: "Der Sommer ist die schÃ¶nste Jahreszeit.", fa: "ØªØ§Ø¨Ø³ØªØ§Ù† Ø²ÛŒØ¨Ø§ØªØ±ÛŒÙ† ÙØµÙ„ Ø§Ø³Øª." },
          { de: "Ich trinke lieber Tee als Kaffee.", fa: "Ù…Ù† Ú†Ø§ÛŒ Ø±Ø§ ØªØ±Ø¬ÛŒØ­ Ù…ÛŒâ€ŒØ¯Ù‡Ù… ØªØ§ Ù‚Ù‡ÙˆÙ‡." },
          { de: "Das ist das beste Restaurant der Stadt.", fa: "Ø§ÛŒÙ† Ø¨Ù‡ØªØ±ÛŒÙ† Ø±Ø³ØªÙˆØ±Ø§Ù† Ø´Ù‡Ø± Ø§Ø³Øª." },
          { de: "Wer ist Ã¤lter? Du oder dein Bruder?", fa: "Ú©ÛŒ Ù‚Ø¯ÛŒÙ…ÛŒâ€ŒØªØ±Ù‡ØŸ ØªÙˆ ÛŒØ§ Ø¨Ø±Ø§Ø¯Ø±ØªØŸ" }
        ]
      },
      {
        type: "fill_blank",
        title: "Komparativ Ùˆ Superlativ Ø±Ø§ Ú©Ø§Ù…Ù„ Ú©Ù†ÛŒØ¯",
        instruction: "Ø´Ú©Ù„ Ø¯Ø±Ø³Øª ØµÙØª Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯:",
        blanks: [
          { sentence: "Berlin ist ___ (groÃŸ) als MÃ¼nchen.", answer: "grÃ¶ÃŸer", hint: "Komparativ: ØµÙØª + er" },
          { sentence: "Der Sommer ist am ___ (schÃ¶n).", answer: "schÃ¶nsten", hint: "Superlativ: am + adj + st + en" },
          { sentence: "Das ist das ___ (gut) Restaurant.", answer: "beste", hint: "gut â†’ besser â†’ best" },
          { sentence: "Mein Bruder ist ___ (jung) als ich.", answer: "jÃ¼nger", hint: "Umlaut: u â†’ Ã¼" },
          { sentence: "Ich esse ___ (gern) Pizza als Salat.", answer: "lieber", hint: "gern â†’ lieber (Ø¨ÛŒâ€ŒÙ‚Ø§Ø¹Ø¯Ù‡)" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ†: Komparativ Ùˆ Superlativ",
        questions: [
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…Ù„Ù‡ Komparativ Ø±Ø§ Ø¯Ø±Ø³Øª Ù†Ø´Ø§Ù† Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ØŸ",
            questionDe: "Welcher Komparativ ist richtig?",
            options: [
              { text: "Berlin ist mehr groÃŸ als MÃ¼nchen.", isCorrect: false },
              { text: "Berlin ist grÃ¶ÃŸ als MÃ¼nchen.", isCorrect: false },
              { text: "Berlin ist grÃ¶ÃŸer als MÃ¼nchen.", isCorrect: true }
            ],
            explanation: "Ø¨Ø±Ø§ÛŒ Komparativ ØµÙØªâ€ŒÙ‡Ø§ÛŒ ØªÚ©â€ŒÙ‡Ø¬Ø§ÛŒÛŒ -er Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯: groÃŸ â†’ grÃ¶ÃŸer."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Superlativ Ø¯Ø±Ø³Øª Ø§Ø³ØªØŸ",
            questionDe: "Welcher Superlativ ist richtig?",
            options: [
              { text: "Das ist am besten.", isCorrect: true },
              { text: "Das ist am gutsten.", isCorrect: false },
              { text: "Das ist am bessersten.", isCorrect: false }
            ],
            explanation: "gut â†’ besser â†’ am besten (Ø¨ÛŒâ€ŒÙ‚Ø§Ø¹Ø¯Ù‡)"
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "ØµÙØªâ€ŒÙ‡Ø§ÛŒ Ù¾Ø±Ú©Ø§Ø±Ø¨Ø±Ø¯ Ø¨Ø±Ø§ÛŒ Ù…Ù‚Ø§ÛŒØ³Ù‡",
        words: [
          { de: "groÃŸ / grÃ¶ÃŸer / am grÃ¶ÃŸten", fa: "Ø¨Ø²Ø±Ú¯ / Ø¨Ø²Ø±Ú¯â€ŒØªØ± / Ø¨Ø²Ø±Ú¯â€ŒØªØ±ÛŒÙ†", article: "-", plural: "-", examples: [{ de: "Wer ist der grÃ¶ÃŸte in der Klasse?", fa: "Ø¨Ø²Ø±Ú¯â€ŒØªØ±ÛŒÙ† Ú©Ù„Ø§Ø³ Ú©ÛŒÙ‡ØŸ" }] },
          { de: "klein / kleiner / am kleinsten", fa: "Ú©ÙˆÚ†Ú© / Ú©ÙˆÚ†Ú©â€ŒØªØ± / Ú©ÙˆÚ†Ú©â€ŒØªØ±ÛŒÙ†", article: "-", plural: "-", examples: [{ de: "Das ist das kleinste Zimmer.", fa: "Ø§ÛŒÙ† Ú©ÙˆÚ†Ú©â€ŒØªØ±ÛŒÙ† Ø§ØªØ§Ù‚Ù‡." }] },
          { de: "schÃ¶n / schÃ¶ner / am schÃ¶nsten", fa: "Ø²ÛŒØ¨Ø§ / Ø²ÛŒØ¨Ø§ØªØ± / Ø²ÛŒØ¨Ø§ØªØ±ÛŒÙ†", article: "-", plural: "-", examples: [{ de: "Das Bild ist schÃ¶ner als das Foto.", fa: "ØªØµÙˆÛŒØ± Ø²ÛŒØ¨Ø§ØªØ± Ø§Ø² Ø¹Ú©Ø³Ù‡." }] },
          { de: "teuer / teurer / am teuersten", fa: "Ú¯Ø±Ø§Ù† / Ú¯Ø±Ø§Ù†â€ŒØªØ± / Ú¯Ø±Ø§Ù†â€ŒØªØ±ÛŒÙ†", article: "-", plural: "-", examples: [{ de: "Das Auto ist das teuerste.", fa: "Ø§ÛŒÙ† Ù…Ø§Ø´ÛŒÙ† Ú¯Ø±Ø§Ù†â€ŒØªØ±ÛŒÙ†Ù‡." }] },
          { de: "billig / billiger / am billigsten", fa: "Ø§Ø±Ø²Ø§Ù† / Ø§Ø±Ø²Ø§Ù†â€ŒØªØ± / Ø§Ø±Ø²Ø§Ù†â€ŒØªØ±ÛŒÙ†", article: "-", plural: "-", examples: [{ de: "Lidl ist billiger als Rewe.", fa: "Ù„ÛŒØ¯Ù„ Ø§Ø±Ø²Ø§Ù†â€ŒØªØ± Ø§Ø² Ø±ÙˆÙ‡Ù‡." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Meine Stadt\n\nMeine Stadt ist kleiner als Berlin, aber sie ist schoener als viele andere Staedte. Die Altstadt ist am schoensten, besonders im Sommer. Hier gibt es das beste Restaurant der Stadt. Dort ist das Essen am leckersten und die Preise sind guenstiger als in anderen Restaurants. Mein Lieblingsessen dort ist die Suppe. Der Sommer ist die schoenste Jahreszeit hier, weil die Tage am laengsten sind. Im Winter ist es kaelter, aber der Weihnachtsmarkt ist am gemuetlichsten. Ich finde, meine Stadt ist am besten zum Wohnen!",
      questions: [
        { question: "Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ø´Ù‡Ø±Ø´ Ø±Ø§ Ø¨Ø§ Ø¨Ø±Ù„ÛŒÙ† Ù…Ù‚Ø§ÛŒØ³Ù‡ Ù…ÛŒâ€ŒÚ©Ù†Ø¯. Ú©Ø¯Ø§Ù… Ú©ÙˆÚ†Ú©â€ŒØªØ± Ø§Ø³ØªØŸ", answer: "Ø´Ù‡Ø± Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ú©ÙˆÚ†Ú©â€ŒØªØ± Ø§Ø³Øª." },
        { question: "Ú©Ø¯Ø§Ù… ÙØµÙ„ Ø²ÛŒØ¨Ø§ØªØ±ÛŒÙ† ÙØµÙ„ Ø¯Ø± Ø´Ù‡Ø± Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ø§Ø³ØªØŸ", answer: "ØªØ§Ø¨Ø³ØªØ§Ù† â€” Die Tage sind am laengsten." },
        { question: "Ú†Ø±Ø§ Ù‚ÛŒÙ…Øªâ€ŒÙ‡Ø§ÛŒ Ø±Ø³ØªÙˆØ±Ø§Ù† Ù…ÙˆØ±Ø¯ Ø¹Ù„Ø§Ù‚Ù‡ Ø®ÙˆØ¨ Ø§Ø³ØªØŸ", answer: "Ù‚ÛŒÙ…Øªâ€ŒÙ‡Ø§ Ø§Ø±Ø²Ø§Ù†â€ŒØªØ± Ø§Ø² Ø±Ø³ØªÙˆØ±Ø§Ù†â€ŒÙ‡Ø§ÛŒ Ø¯ÛŒÚ¯Ø± Ø§Ø³Øª (guenstiger)." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù…Ù‚Ø§ÛŒØ³Ù‡ Ø¯Ùˆ Ø´Ù‡Ø±/Ú©Ø´ÙˆØ±",
      prompt: "Ø¯Ùˆ Ø´Ù‡Ø± ÛŒØ§ Ø¯Ùˆ Ú©Ø´ÙˆØ± Ø±Ø§ Ø¨Ø§ Ù‡Ù… Ù…Ù‚Ø§ÛŒØ³Ù‡ Ú©Ù†ÛŒØ¯. Ø§Ø² Komparativ Ùˆ Superlativ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      steps: [
        { title: "Ù…Ø¹Ø±ÙÛŒ Ø¯Ùˆ Ù…ÙˆØ±Ø¯", text: "Ø¯Ùˆ Ø´Ù‡Ø±/Ú©Ø´ÙˆØ± Ø±Ø§ Ù†Ø§Ù… Ø¨Ø¨Ø±ÛŒØ¯.", example: { de: "Ich vergleiche Berlin und Wien.", fa: "Ù…Ù† Ø¨Ø±Ù„ÛŒÙ† Ùˆ ÙˆÛŒÙ† Ø±Ø§ Ù…Ù‚Ø§ÛŒØ³Ù‡ Ù…ÛŒâ€ŒÚ©Ù†Ù…." } },
        { title: "Ù…Ù‚Ø§ÛŒØ³Ù‡ Ø¨Ø§ Komparativ", text: "Ø§Ø² ...als Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Berlin ist groesser als Wien, aber Wien ist schoener.", fa: "Ø¨Ø±Ù„ÛŒÙ† Ø¨Ø²Ø±Ú¯â€ŒØªØ± Ø§Ø² ÙˆÛŒÙ† Ø§Ø³ØªØŒ Ø§Ù…Ø§ ÙˆÛŒÙ† Ø²ÛŒØ¨Ø§ØªØ± Ø§Ø³Øª." } },
        { title: "Ø¨Ø±ØªØ±ÛŒÙ† Ø¨Ø§ Superlativ", text: "Ø§Ø² am ...sten Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Das Essen ist in Wien am besten.", fa: "ØºØ°Ø§ Ø¯Ø± ÙˆÛŒÙ† Ø¨Ù‡ØªØ±ÛŒÙ† Ø§Ø³Øª." } }
      ],
      modelAnswer: "Berlin und Wien sind beide schoene Staedte. Berlin ist groesser als Wien und hat mehr Einwohner. Aber Wien ist aelter und hat die schoensten Gebaeude. Das Essen ist in Wien am besten, besonders die Sachertorte. Ich finde, Wien ist gemuetlicher als Berlin, aber Berlin ist interessanter fuer junge Leute."
    }
  ],

  listening: [
    {
      title: "Û±. Ø¢Ù…ÙˆØ²Ø´ Komparativ Ùˆ Superlativ",
      source: "Deutschlernen â€” Komparativ und Superlativ",
      link: "https://www.youtube.com/watch?v=9s7UaGBXOxE",
      instructions: "Û±. ÙˆÛŒØ¯ÛŒÙˆ Ø±Ø§ Ø¨Ø¨ÛŒÙ†ÛŒØ¯ Ùˆ Ù‚ÙˆØ§Ø¹Ø¯ Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯.\nÛ². Ûµ Ø¬Ù…Ù„Ù‡ Ù…Ù‚Ø§ÛŒØ³Ù‡â€ŒØ§ÛŒ Ø¨Ø§ ØµØ¯Ø§ÛŒ Ø¨Ù„Ù†Ø¯ Ø¨Ø³Ø§Ø²ÛŒØ¯.\nÛ³. Umlautâ€ŒÙ‡Ø§ (aâ†’ae, oâ†’oe, uâ†’ue) Ø±Ø§ ØªÙ…Ø±ÛŒÙ† Ú©Ù†ÛŒØ¯."
    }
  ],

  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ù…Ù‚Ø§ÛŒØ³Ù‡",
      pattern: "... ist groesser als ...\n... ist am schoensten.\nIch trinke lieber Tee als Kaffee.",
      exercise: "Ûµ Ú†ÛŒØ² Ø¯Ø± Ø²Ù†Ø¯Ú¯ÛŒ Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ø§ Ù‡Ù… Ù…Ù‚Ø§ÛŒØ³Ù‡ Ú©Ù†ÛŒØ¯. Ù…Ø«Ù„Ø§Ù‹: Â«ØºØ°Ø§ÛŒ Ø§ÛŒØ±Ø§Ù†ÛŒ Ø®ÙˆØ´Ù…Ø²Ù‡â€ŒØªØ± Ø§Ø² ØºØ°Ø§ÛŒ Ø¢Ù„Ù…Ø§Ù†ÛŒ Ø§Ø³ØªÂ» ÛŒØ§ Â«ØªØ§Ø¨Ø³ØªØ§Ù† Ø¨Ù‡ØªØ±ÛŒÙ† ÙØµÙ„ Ø§Ø³Øª.Â»"
    }
  ],

  cultureTip: "Ù†Ú©ØªÙ‡ Ø¬Ø§Ù„Ø¨: Ø¯Ø± Ø¢Ù„Ù…Ø§Ù† ÙˆÙ‚ØªÛŒ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡ÛŒØ¯ Ø¨Ú¯ÙˆÛŒÛŒØ¯ Â«ØªØ±Ø¬ÛŒØ­ Ù…ÛŒâ€ŒØ¯Ù‡Ù…Â» Ø§Ø² lieber (ØªØ±Ø¬ÛŒØ­â€ŒØªØ±) Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯. Ù…Ø«Ù„Ø§Ù‹ Ich trinke lieber Tee ÛŒØ¹Ù†ÛŒ Â«ØªØ±Ø¬ÛŒØ­ Ù…ÛŒâ€ŒØ¯Ù‡Ù… Ú†Ø§ÛŒ Ø¨Ù†ÙˆØ´Ù…Â». Ø§ÛŒÙ† Ø®ÛŒÙ„ÛŒ Ø±Ø§ÛŒØ¬â€ŒØªØ± Ø§Ø² Ich bevorzuge Tee Ø§Ø³Øª. Ù‡Ù…Ú†Ù†ÛŒÙ† Ø¯Ø± Ù…Ú©Ø§Ù„Ù…Ù‡ Ø±ÙˆØ²Ù…Ø±Ù‡ØŒ Ø§Ø² am besten Ø¨Ø±Ø§ÛŒ ØªÙˆØµÛŒÙ‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯: Am besten kommst du um 8 Uhr. (Ø¨Ù‡ØªØ±Ù‡ Ø³Ø§Ø¹Øª Û¸ Ø¨ÛŒØ§ÛŒÛŒ.)",

  examData: {
    questions: [
      { question: "Komparativ ÙØ¹Ù„ Â«groÃŸÂ» Ú†ÛŒØ³ØªØŸ", options: ["groÃŸer", "grÃ¶ÃŸer", "grÃ¶ÃŸerer", "grÃ¶ssest"], answer: 1 },
      { question: "Superlativ ÙØ¹Ù„ Â«gutÂ» Ú†ÛŒØ³ØªØŸ", options: ["am gutsten", "am bessersten", "am besten", "am gutesten"], answer: 2 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…Ù„Ù‡ Ø¯Ø±Ø³Øª Ø§Ø³ØªØŸ", options: ["Berlin ist mehr groÃŸ als MÃ¼nchen.", "Berlin ist grÃ¶ÃŸer als MÃ¼nchen.", "Berlin ist groÃŸter als MÃ¼nchen."], answer: 1 },
      { question: "Â«Ich esse lieber PizzaÂ» ÛŒØ¹Ù†ÛŒ...", options: ["Ù…Ù† Ù¾ÛŒØªØ²Ø§ Ù†Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…", "ØªØ±Ø¬ÛŒØ­ Ù…ÛŒâ€ŒØ¯Ù‡Ù… Ù¾ÛŒØªØ²Ø§ Ø¨Ø®ÙˆØ±Ù…", "Ù…Ù† Ù¾ÛŒØªØ²Ø§ÛŒ Ø²ÛŒØ§Ø¯ Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…"], answer: 1 },
      { question: "Superlativ Â«schÃ¶nÂ» Ú†ÛŒØ³ØªØŸ", options: ["am schÃ¶nersten", "am schÃ¶nsten", "am schonten"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… ØµÙØª Umlaut Ù†Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ØŸ", options: ["alt", "groÃŸ", "schnell", "jung"], answer: 2 },
      { question: "Â«Das ist das beste RestaurantÂ» â€” Ø§ÛŒÙ† Ú†Ù‡ Ù†ÙˆØ¹ Ù…Ù‚Ø§ÛŒØ³Ù‡â€ŒØ§ÛŒ Ø§Ø³ØªØŸ", options: ["Komparativ", "Superlativ", "Positiv"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…Ù„Ù‡ Superlativ Ø±Ø§ Ø¯Ø±Ø³Øª Ù†Ø´Ø§Ù† Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ØŸ", options: ["Das ist das billiger Restaurant.", "Das ist das billigste Restaurant.", "Das ist das am billigste Restaurant."], answer: 1 }
    ]
  }
};
