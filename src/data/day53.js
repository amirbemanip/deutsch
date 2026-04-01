export const day53Data = {
  title: "Ø±ÙˆØ² ÛµÛ³: Ø§ØµØ·Ù„Ø§Ø­Ø§Øª Ùˆ Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„â€ŒÙ‡Ø§ÛŒ Ø¢Ù„Ù…Ø§Ù†ÛŒ",
  objective: "Ø¯Ø± Ø§ÛŒÙ† Ø±ÙˆØ² Ø§ØµØ·Ù„Ø§Ø­Ø§Øª Ø±Ø§ÛŒØ¬ Ùˆ Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„â€ŒÙ‡Ø§ÛŒÛŒ Ø±Ø§ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒØ¯ Ú©Ù‡ Ù‡Ø± Ø¢Ù„Ù…Ø§Ù†ÛŒâ€ŒØ²Ø¨Ø§Ù†ÛŒ Ø¯Ø± Ø²Ù†Ø¯Ú¯ÛŒ Ø±ÙˆØ²Ù…Ø±Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†Ø¯.",

  grammarData: {
    subtitle: "Ø§ØµØ·Ù„Ø§Ø­Ø§Øª Ø¨Ø§ ÙØ¹Ù„â€ŒÙ‡Ø§ÛŒ Ú©Ù„ÛŒØ¯ÛŒ Ø¢Ù„Ù…Ø§Ù†ÛŒ",
    content: [
      {
        type: "text",
        title: "Û±. Ø§ØµØ·Ù„Ø§Ø­Ø§Øª Ø¨Ø§ ÙØ¹Ù„ sein",
        text: "Ø¨Ø³ÛŒØ§Ø±ÛŒ Ø§Ø² Ø§ØµØ·Ù„Ø§Ø­Ø§Øª Ø¢Ù„Ù…Ø§Ù†ÛŒ Ø¨Ø§ ÙØ¹Ù„ Ø³Ø§Ø¯Ù‡ sein (Ø¨ÙˆØ¯Ù†) Ø³Ø§Ø®ØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯."
      },
      {
        type: "examples",
        title: "Ø§ØµØ·Ù„Ø§Ø­Ø§Øª Ø¨Ø§ sein",
        items: [
          { de: "Das ist mir egal.", fa: "Ø¨Ø±Ø§Ù… Ù…Ù‡Ù… Ù†ÛŒØ³Øª." },
          { de: "Das ist nicht mein Ding.", fa: "Ø§ÛŒÙ† Ú©Ø§Ø± Ù…Ù† Ù†ÛŒØ³Øª / Ø¨Ù‡ Ø§ÛŒÙ† Ø¹Ù„Ø§Ù‚Ù‡ Ù†Ø¯Ø§Ø±Ù…." },
          { de: "Das ist ja der Hammer!", fa: "Ø§ÛŒÙ† Ú©Ù‡ Ø®ÛŒÙ„ÛŒ Ø¨Ø§Ø­Ø§Ù„Ù‡!" }
        ]
      },
      {
        type: "text",
        title: "Û². Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„â€ŒÙ‡Ø§ÛŒ Ù…Ø¹Ø±ÙˆÙ Ø¢Ù„Ù…Ø§Ù†ÛŒ",
        text: "Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„â€ŒÙ‡Ø§ Ø¨Ø®Ø´ Ù…Ù‡Ù…ÛŒ Ø§Ø² ÙØ±Ù‡Ù†Ú¯ Ù‡Ø± Ø²Ø¨Ø§Ù†ÛŒ Ù‡Ø³ØªÙ†Ø¯."
      },
      {
        type: "examples",
        title: "Û±Û° Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„ Ù¾Ø±Ú©Ø§Ø±Ø¨Ø±Ø¯",
        items: [
          { de: "Uebung macht den Meister.", fa: "ØªÙ…Ø±ÛŒÙ†ØŒ Ø§Ø³ØªØ§Ø¯ Ù…ÛŒâ€ŒØ³Ø§Ø²Ù‡." },
          { de: "Der Apfel faellt nicht weit vom Stamm.", fa: "Ø³ÛŒØ¨ Ø§Ø² Ø¯Ø±Ø®Øª Ø¯ÙˆØ± Ù†Ù…ÛŒâ€ŒØ§ÙØªÙ‡." },
          { de: "Wer rastet, der rostet.", fa: "Ù‡Ø± Ú©Ù‡ Ø¨ÛŒÚ©Ø§Ø± Ø¨Ø´ÛŒÙ†Ù‡ØŒ Ø²Ù†Ú¯ Ù…ÛŒâ€ŒØ²Ù†Ù‡." },
          { de: "Morgenstund hat Gold im Mund.", fa: "ØµØ¨Ø­ Ø²ÙˆØ¯ Ø·Ù„Ø§ Ø¯Ù‡Ù†Ø´Ù‡!" },
          { de: "Aller Anfang ist schwer.", fa: "Ù‡Ø± Ø´Ø±ÙˆØ¹ÛŒ Ø³Ø®ØªÙ‡." },
          { de: "Luegen haben kurze Beine.", fa: "Ø¯Ø±ÙˆØº Ù¾Ø§Ù‡Ø§Ø´ Ú©ÙˆØªØ§Ù‡Ù‡." },
          { de: "Besser spaet als nie.", fa: "Ø¨Ù‡ØªØ± Ø¯ÛŒØ± Ø§Ø² Ù‡Ø±Ú¯Ø²!" },
          { de: "Wo ein Wille ist, da ist auch ein Weg.", fa: "Ù‡Ø±Ø¬Ø§ Ø§Ø±Ø§Ø¯Ù‡ Ø¨Ø§Ø´Ù‡ØŒ Ø±Ø§Ù‡ Ù‡Ù… Ù‡Ø³Øª." }
        ]
      },
      {
        type: "fill_blank",
        title: "Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„â€ŒÙ‡Ø§ Ø±Ø§ Ú©Ø§Ù…Ù„ Ú©Ù†ÛŒØ¯",
        blanks: [
          { sentence: "Uebung macht den ___ .", answer: "Meister", hint: "Ø§Ø³ØªØ§Ø¯" },
          { sentence: "Wer rastet, der ___ .", answer: "rostet", hint: "Ø²Ù†Ú¯ Ø²Ø¯Ù†" },
          { sentence: "Aller ___ ist schwer.", answer: "Anfang", hint: "Ø´Ø±ÙˆØ¹" },
          { sentence: "Besser spaet als ___ .", answer: "nie", hint: "Ù‡Ø±Ú¯Ø²" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ†: Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„â€ŒÙ‡Ø§",
        questions: [
          {
            question: "Ù…Ø¹Ù†ÛŒ Uebung macht den Meister Ú†ÛŒØ³ØªØŸ",
            options: [
              { text: "Ø§Ø³ØªØ§Ø¯ Ø®ÛŒÙ„ÛŒ Ù…Ù‡Ù…Ù‡", isCorrect: false },
              { text: "ØªÙ…Ø±ÛŒÙ†ØŒ Ø§Ø³ØªØ§Ø¯ Ù…ÛŒâ€ŒØ³Ø§Ø²Ù‡", isCorrect: true },
              { text: "Ø§Ø³ØªØ§Ø¯Ù‡Ø§ ØªÙ…Ø±ÛŒÙ† Ù†Ù…ÛŒâ€ŒÚ©Ù†Ù†", isCorrect: false }
            ],
            explanation: "Ø¨Ø§ ØªÙ…Ø±ÛŒÙ† Ù…Ø¯Ø§ÙˆÙ…ØŒ Ø¨Ù‡ ØªØ³Ù„Ø· Ù…ÛŒâ€ŒØ±Ø³ÛŒØ¯."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "Ø§ØµØ·Ù„Ø§Ø­Ø§Øª Ø±ÙˆØ²Ù…Ø±Ù‡",
        words: [
          { de: "die Daumen druecken", fa: "Ø¢Ø±Ø²ÙˆÛŒ Ù…ÙˆÙÙ‚ÛŒØª Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich druecke dir die Daumen!", fa: "Ø¨Ø±Ø§Øª Ø¢Ø±Ø²ÙˆÛŒ Ù…ÙˆÙÙ‚ÛŒØª Ù…ÛŒâ€ŒÚ©Ù†Ù…!" }] },
          { de: "den Nagel auf den Kopf treffen", fa: "Ø¯Ù‚ÛŒÙ‚ Ù‡Ø¯Ù Ø²Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Du hast den Nagel auf den Kopf getroffen!", fa: "Ø¯Ù‚ÛŒÙ‚Ø§Ù‹ Ø¯Ø±Ø³Øª Ú¯ÙØªÛŒ!" }] },
          { de: "Tomaten auf den Augen haben", fa: "Ú©ÙˆØ± Ø¨ÙˆØ¯Ù† (Ú©Ù†Ø§ÛŒÙ‡â€ŒØ§ÛŒ)", article: "-", plural: "-", examples: [{ de: "Hast du Tomaten auf den Augen?", fa: "Ú©ÙˆØ±ÛŒØŸ Ø§ÛŒÙ†Ø¬Ø§ Ù†ÙˆØ´ØªÙ‡!" }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Sprichwoerter im Alltag\n\nMeine Oma hat mir als Kind immer Sprichwoerter beigebracht. Mein Lieblingssprichwort ist: Wo ein Wille ist, da ist auch ein Weg. Das bedeutet, dass man niemals aufgeben soll.\n\nMein Bruder sagt immer: Morgenstund hat Gold im Mund. Er steht jeden Tag um 5 Uhr auf!\n\nWenn jemand luegt, sagen wir auf Deutsch: Luegen haben kurze Beine. Das heisst, die Wahrheit kommt immer irgendwann heraus.",
      questions: [
        { question: "Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„ Ù…ÙˆØ±Ø¯ Ø¹Ù„Ø§Ù‚Ù‡ Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ú†ÛŒØ³ØªØŸ", answer: "Wo ein Wille ist, da ist auch ein Weg â€” Ù‡Ø±Ú¯Ø² Ù†Ø¨Ø§ÛŒØ¯ ØªØ³Ù„ÛŒÙ… Ø´ÙˆÛŒ." },
        { question: "Ø¨Ø±Ø§Ø¯Ø± Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ú†Ø±Ø§ Ù‡Ø± Ø±ÙˆØ² Ø³Ø§Ø¹Øª Ûµ Ø¨ÛŒØ¯Ø§Ø± Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", answer: "Ú†ÙˆÙ† Ù…Ø¹ØªÙ‚Ø¯ Ø§Ø³Øª Morgenstund hat Gold im Mund." },
        { question: "Luegen haben kurze Beine ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", answer: "Ø¯Ø±ÙˆØº Ø²ÙˆØ¯ Ø¨Ø±Ù…Ù„Ø§ Ù…ÛŒâ€ŒØ´ÙˆØ¯." }
      ]
    }
  ],

  writing: [
    {
      title: "Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„ Ø¯Ø± Ù…ØªÙ†",
      prompt: "ÛŒÚ© Ù¾Ø§Ø±Ø§Ú¯Ø±Ø§Ù Ø¯Ø±Ø¨Ø§Ø±Ù‡ ØªØ¬Ø±Ø¨Ù‡ ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø¢Ù„Ù…Ø§Ù†ÛŒ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯ Ùˆ Ø­Ø¯Ø§Ù‚Ù„ Û² Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      steps: [
        { title: "Ø´Ø±ÙˆØ¹", text: "Ø¨Ø§ Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„ Ø´Ø±ÙˆØ¹ Ú©Ù†ÛŒØ¯.", example: { de: "Aller Anfang ist schwer, aber ich gebe nicht auf.", fa: "Ù‡Ø± Ø´Ø±ÙˆØ¹ÛŒ Ø³Ø®ØªÙ‡ØŒ Ø§Ù…Ø§ Ù…Ù† Ø¬Ø§ Ù†Ù…ÛŒâ€ŒØ²Ù†Ù…." } },
        { title: "Ù†ØªÛŒØ¬Ù‡â€ŒÚ¯ÛŒØ±ÛŒ", text: "Ø¨Ø§ Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„ Ø¯ÙˆÙ… ØªÙ…Ø§Ù… Ú©Ù†ÛŒØ¯.", example: { de: "Uebung macht den Meister!", fa: "ØªÙ…Ø±ÛŒÙ†ØŒ Ø§Ø³ØªØ§Ø¯ Ù…ÛŒâ€ŒØ³Ø§Ø²Ù‡!" } }
      ],
      modelAnswer: "Aller Anfang ist schwer. Als ich nach Deutschland kam, konnte ich kein Wort Deutsch. Aber ich habe jeden Tag gelernt. Nach einem Jahr kann ich jetzt flieÃŸend sprechen. Wo ein Wille ist, da ist auch ein Weg!"
    }
  ],

  listening: [
    {
      title: "Û±. Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„â€ŒÙ‡Ø§ÛŒ Ø¢Ù„Ù…Ø§Ù†ÛŒ",
      source: "German Proverbs Explained",
      link: "https://www.youtube.com/watch?v=3JZ_DqEL7ig",
      instructions: "ÙˆÛŒØ¯ÛŒÙˆ Ø±Ø§ Ø¨Ø¨ÛŒÙ†ÛŒØ¯ Ùˆ Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„â€ŒÙ‡Ø§ Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
    }
  ],

  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„",
      pattern: "Uebung macht den Meister!\nWo ein Wille ist, da ist auch ein Weg.",
      exercise: "Ù‡Ø± Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„ Ø±Ø§ Ø¨Ø§ Ù„Ø­Ù† Ù‚Ø§Ø·Ø¹ ØªÚ©Ø±Ø§Ø± Ú©Ù†ÛŒØ¯."
    }
  ],

  cultureTip: "Ø¢Ù„Ù…Ø§Ù†ÛŒâ€ŒÙ‡Ø§ Ø¹Ø§Ø´Ù‚ Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„â€ŒØ§Ù†Ø¯! Ø§Ú¯Ø± Ø¯Ø± Ù…Ú©Ø§Ù„Ù…Ù‡ B1 Ø®ÙˆØ¯ ÛŒÚ© Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„ Ù…Ù†Ø§Ø³Ø¨ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯ØŒ Ù…Ù…ØªØ­Ù† Ø¨Ø³ÛŒØ§Ø± ØªØ­Øª ØªØ£Ø«ÛŒØ± Ù‚Ø±Ø§Ø± Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯.",

  examData: {
    questions: [
      { question: "Ù…Ø¹Ù†ÛŒ Uebung macht den Meister Ú†ÛŒØ³ØªØŸ", options: ["Ø§Ø³ØªØ§Ø¯ Ø®ÛŒÙ„ÛŒ Ù…Ù‡Ù…Ù‡", "ØªÙ…Ø±ÛŒÙ†ØŒ Ø§Ø³ØªØ§Ø¯ Ù…ÛŒâ€ŒØ³Ø§Ø²Ù‡", "Ø§Ø³ØªØ§Ø¯Ù‡Ø§ ØªÙ…Ø±ÛŒÙ† Ù†Ù…ÛŒâ€ŒÚ©Ù†Ù†"], answer: 1 },
      { question: "Luegen haben kurze Beine ÛŒØ¹Ù†ÛŒ...", options: ["Ø¯Ø±ÙˆØºâ€ŒÚ¯Ùˆ Ù¾Ø§Ù‡Ø§Ø´ Ú©ÙˆØªØ§Ù‡Ù‡", "Ø¯Ø±ÙˆØº Ø²ÙˆØ¯ Ø¨Ø±Ù…Ù„Ø§ Ù…ÛŒØ´Ù‡", "Ú©Ø³ÛŒ Ú©Ù‡ Ø¯Ø±ÙˆØº Ù…ÛŒÚ¯Ù‡ Ø±Ø§Ù‡ Ù†Ù…ÛŒØ±Ù‡"], answer: 1 },
      { question: "Das ist nicht mein Ding ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", options: ["Ø§ÛŒÙ† Ù…Ø§Ù„ Ù…Ù† Ù†ÛŒØ³Øª", "Ø¨Ù‡ Ø§ÛŒÙ† Ø¹Ù„Ø§Ù‚Ù‡ Ù†Ø¯Ø§Ø±Ù…", "Ù…Ù† Ø§ÛŒÙ† Ø±Ùˆ Ù†Ù…ÛŒâ€ŒÙÙ‡Ù…Ù…"], answer: 1 },
      { question: "Tomaten auf den Augen haben ÛŒØ¹Ù†ÛŒ...", options: ["Ú¯ÙˆØ¬Ù‡ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù‡", "Ú©ÙˆØ±Ù‡ / Ù†Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù‡", "Ú†Ø´Ù…Ø§Ø´ Ù‚Ø±Ù…Ø²Ù‡"], answer: 1 },
      { question: "Besser spaet als nie ÛŒØ¹Ù†ÛŒ...", options: ["Ø¯ÛŒØ± Ø¨Ù‡ØªØ± Ø§Ø² Ù‡Ø±Ú¯Ø²", "Ù‡Ø±Ú¯Ø² Ø¯ÛŒØ± Ù†ÛŒØ³Øª", "Ø¯ÛŒØ± Ù†Ø±Ùˆ"], answer: 0 },
      { question: "Die Daumen druecken ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", options: ["Ø¢Ø±Ø²ÙˆÛŒ Ù…ÙˆÙÙ‚ÛŒØª", "Ø§Ù†Ú¯Ø´Øª Ø´Ú©Ø³ØªÙ‡", "Ø¯Ø³Øª Ø¯Ø§Ø¯Ù†"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ø¶Ø±Ø¨â€ŒØ§Ù„Ù…Ø«Ù„ Ø¯Ø±Ø¨Ø§Ø±Ù‡ ØªØ³Ù„ÛŒÙ… Ù†Ø´Ø¯Ù† Ø§Ø³ØªØŸ", options: ["Wo ein Wille ist, da ist auch ein Weg", "Der Apfel faellt nicht weit vom Stamm", "Luegen haben kurze Beine"], answer: 0 },
      { question: "Morgenstund hat Gold im Mund ÛŒØ¹Ù†ÛŒ...", options: ["Ø·Ù„Ø§ Ø®ÙˆØ¨Ù‡", "ØµØ¨Ø­ Ø²ÙˆØ¯ Ø¨ÛŒØ¯Ø§Ø± Ø´Ø¯Ù† Ø®ÙˆØ¨Ù‡", "Ø¯Ù‡Ù† Ø·Ù„Ø§ÛŒÛŒ"], answer: 1 }
    ]
  }
};
