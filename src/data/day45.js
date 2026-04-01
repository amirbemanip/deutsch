export const day45Data = {
  title: "Ø±ÙˆØ² Û´Ûµ: Ø±ÙˆØ§Ø¨Ø· Ùˆ Ø²Ù†Ø¯Ú¯ÛŒ Ø§Ø¬ØªÙ…Ø§Ø¹ÛŒ - Ø¯ÙˆØ³ØªÛŒØŒ Ø§Ø­Ø³Ø§Ø³Ø§Øª Ùˆ ØªØ¶Ø§Ø¯Ù‡Ø§",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ ÙˆØ§Ú˜Ú¯Ø§Ù† Ùˆ Ø¹Ø¨Ø§Ø±Ø§Øª Ù…Ø±Ø¨ÙˆØ· Ø¨Ù‡ Ø±ÙˆØ§Ø¨Ø·ØŒ Ø§Ø­Ø³Ø§Ø³Ø§ØªØŒ Ø¯ÙˆØ³ØªÛŒØŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ùˆ Ø­ل ØªØ¶Ø§Ø¯Ù‡Ø§ Ø¯Ø± Ø³Ø·Ø­ B1",

  grammarData: {
    subtitle: "RelativsÃ¤tze Ùˆ ØµÙØ§Øª Ù…ÙˆØµÙˆلÛŒ Ø¯Ø± ØªÙˆØµÛŒÙ Ø§ÙØ±Ø§Ø¯",
    content: [
      {
        type: "text",
        title: "Û±. Ø¬Ù…لØ§Øª Ù…ÙˆØµÙˆلÛŒ (RelativsÃ¤tze)",
        text: "Ø¬Ù…لØ§Øª Ù…ÙˆØµÙˆلÛŒ (RelativsÃ¤tze) Ø¨Ø±Ø§ÛŒ ØªÙˆØµÛŒÙ Ùˆ Ø§Ø±Ø§Ø¦Ù‡ Ø§Ø·لØ§Ø¹Ø§Øª Ø§Ø¶Ø§ÙÛŒ Ø¯Ø±Ø¨Ø§Ø±Ù‡ ÛŒÚ© Ø§Ø³Ù… Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯. Ø§ÛŒÙ† Ø¬Ù…لØ§Øª Ø¨Ø§ Ø¶Ù…ÛŒØ± Ù…ÙˆØµÙˆلÛŒ (Relativpronomen) Ø´Ø±ÙˆØ¹ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯ Ùˆ ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø± Ù…ÛŒâ€ŒØ¢ÛŒØ¯. Relativpronomen Ø¨Ø± Ø§Ø³Ø§Ø³ Ø¬Ù†Ø³ÛŒØª Ùˆ Ø­Ø§لØª Ø§Ø³Ù… Ù‚Ø¨لÛŒ ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯. Ø¯Ø± Ø¨Ø­Ø« Ø±ÙˆØ§Ø¨Ø·ØŒ Ø§ÛŒÙ† Ø³Ø§Ø®ØªØ§Ø± Ø¨Ø³ÛŒØ§Ø± Ú©Ø§Ø±Ø¨Ø±Ø¯ Ø¯Ø§Ø±Ø¯: Die Freundin, die ich kenne, ist nett."
      },
      {
        type: "table",
        title: "Ø¶Ù…ÛŒØ±Ù‡Ø§ÛŒ Ù…ÙˆØµÙˆلÛŒ (Relativpronomen)",
        rows: [
          { de: "der â†’ der/dem/dessen", fa: "N: der Mann, der ... / D: dem Mann, dem ... / G: dessen" },
          { de: "die â†’ die/der/deren", fa: "N: die Frau, die ... / D: der Frau, der ... / G: deren" },
          { de: "das â†’ das/dem/dessen", fa: "N: das Kind, das ... / D: dem Kind, dem ... / G: dessen" },
          { de: "die (Pl.) â†’ die/denen/deren", fa: "N: die Leute, die ... / D: den Leuten, denen ... / G: deren" }
        ]
      },
      {
        type: "text",
        title: "Û². RelativsÃ¤tze Ø¨Ø±Ø§ÛŒ ØªÙˆØµÛŒÙ Ø§ÙØ±Ø§Ø¯",
        text: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ: Der Freund, mit dem ich arbeite, ist sehr nett. (Ø¯ÙˆØ³ØªÛŒ Ú©Ù‡ Ø¨Ø§ Ø§Ùˆ Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù… Ø®ÛŒلÛŒ Ù…Ù‡Ø±Ø¨Ø§Ù† Ø§Ø³Øª). Die Frau, deren Kinder hier spielen, wohnt nebenan. (Ø²Ù†ÛŒ Ú©Ù‡ Ø¨Ú†Ù‡â€ŒÙ‡Ø§ÛŒØ´ Ø§ÛŒÙ†Ø¬Ø§ Ø¨Ø§Ø²ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯ Ù‡Ù…Ø³Ø§ÛŒÙ‡ Ø§Ø³Øª). Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: Relativpronomen Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û± Ø¬Ù…لÙ‡ Ù…ÙˆØµÙˆلÛŒ Ù‚Ø±Ø§Ø± Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ Ùˆ ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø± Ù…ÛŒâ€ŒØ¢ÛŒØ¯."
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ Ø±ÙˆØ§Ø¨Ø· Ø§Ø¬ØªÙ…Ø§Ø¹ÛŒ",
        items: [
          { de: "Ich habe eine Freundin, die immer fÃ¼r mich da ist.", fa: "Ù…Ù† Ø¯ÙˆØ³ØªÛŒ Ø¯Ø§Ø±Ù… Ú©Ù‡ Ù‡Ù…ÛŒØ´Ù‡ Ø¨Ø±Ø§ÛŒÙ… Ù‡Ø³Øª." },
          { de: "Der Mann, mit dem ich zusammenwohne, ist mein Bruder.", fa: "Ù…Ø±Ø¯ÛŒ Ú©Ù‡ Ø¨Ø§ Ø§Ùˆ Ø²Ù†Ø¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ù… Ø¨Ø±Ø§Ø¯Ø±Ù… Ø§Ø³Øª." },
          { de: "Sie ist eine Person, der man vertrauen kann.", fa: "Ø§Ùˆ Ø´Ø®ØµÛŒ Ø§Ø³Øª Ú©Ù‡ Ù…ÛŒâ€ŒØªÙˆØ§Ù† Ø¨Ù‡ Ø§Ùˆ Ø§Ø¹ØªÙ…Ø§Ø¯ Ú©Ø±Ø¯." },
          { de: "Die Familie, in der ich aufgewachsen bin, ist sehr groÃŸ.", fa: "Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡â€ŒØ§ÛŒ Ú©Ù‡ Ø¯Ø± Ø¢Ù† Ø¨Ø²Ø±Ú¯ Ø´Ø¯Ù‡â€ŒØ§Ù… Ø®ÛŒلÛŒ Ø¨Ø²Ø±Ú¯ Ø§Ø³Øª." },
          { de: "Das ist der Grund, warum ich traurig bin.", fa: "Ø§ÛŒÙ† Ø¯لÛŒلÛŒ Ø§Ø³Øª Ú©Ù‡ ØºÙ…Ú¯ÛŒÙ† Ù‡Ø³ØªÙ…." },
          { de: "Ich kenne niemanden, der so geduldig ist wie er.", fa: "Ú©Ø³ÛŒ Ø±Ø§ Ù†Ù…ÛŒâ€ŒØ´Ù†Ø§Ø³Ù… Ú©Ù‡ Ø¨Ù‡ Ø§Ù†Ø¯Ø§Ø²Ù‡ Ø§Ùˆ ØµØ¨ÙˆØ± Ø¨Ø§Ø´Ø¯." }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡: ØªÙØ§ÙˆØª dass Ùˆ Relativsatz",
        text: "dass Ø¬Ù…لÙ‡ ÙˆØ§Ø¨Ø³ØªÙ‡â€ŒØ§ÛŒ Ù…ÛŒâ€ŒØ³Ø§Ø²Ø¯ Ú©Ù‡ Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø¨Ø¹Ø¯ Ø§Ø² ÙØ¹ل Ù…ÛŒâ€ŒØ¢ÛŒØ¯: Ich weiÃŸ, dass er nett ist. Relativsatz Ø¬Ù…لÙ‡â€ŒØ§ÛŒ Ø§Ø³Øª Ú©Ù‡ Ø§Ø³Ù… Ø±Ø§ ØªÙˆØµÛŒÙ Ù…ÛŒâ€ŒÚ©Ù†Ø¯: Der Mann, der nett ist, wohnt hier. Relativpronomen Ø¨Ø§ÛŒØ¯ Ø¨Ø§ Ø¬Ù†Ø³ÛŒØª Ùˆ Ø¹Ø¯Ø¯ Ø§Ø³Ù… Ù…Ø·Ø§Ø¨Ù‚Øª Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´Ø¯."
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ† RelativsÃ¤tze",
        questions: [
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ Â«Ø¯ÙˆØ³ØªÛŒ Ú©Ù‡ Ø¨Ø§ Ø§Ùˆ Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù… Ø®ÛŒلÛŒ Ù…Ù‡Ø±Ø¨Ø§Ù† Ø§Ø³Øª.Â»",
            questionDe: "Welcher Satz ist grammatikalisch korrekt?",
            options: [
              { text: "Der Freund, mit dem ich arbeite, ist sehr nett.", isCorrect: true },
              { text: "Der Freund, mit den ich arbeite, ist sehr nett.", isCorrect: false },
              { text: "Der Freund, der ich arbeite, ist sehr nett.", isCorrect: false }
            ],
            explanation: "mit + Dativ: mit dem (mÃ¤nnlich). Relativpronomen stimmt mit dem Nomen Ã¼berein."
          },
          {
            question: "Â«Die Frau, _______ Kinder hier spielen, ist meine Nachbarin.Â»",
            questionDe: "Welches Relativpronomen passt?",
            options: [
              { text: "deren", isCorrect: true },
              { text: "derer", isCorrect: false },
              { text: "der", isCorrect: false }
            ],
            explanation: "deren = Genitiv feminin: Frau (die) â†’ deren Kinder (Ø¨Ú†Ù‡â€ŒÙ‡Ø§ÛŒØ´)."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÙ…Ø±ÛŒÙ† RelativsÃ¤tze",
        instruction: "Relativpronomen Ù…Ù†Ø§Ø³Ø¨ Ø±Ø§ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Ich habe einen Freund, _______ immer fÃ¼r mich da ist.", answer: "der", hint: "Ù…Ø°Ú©Ø± Nominativ â†’ der" },
          { sentence: "Das ist die Frau, _______ ich helfe.", answer: "der", hint: "Ù…Ø¤Ù†Ø« Dativ â†’ der" },
          { sentence: "Die Kinder, _______ Eltern im Ausland leben, sind traurig.", answer: "deren", hint: "Genitiv Plural â†’ deren" },
          { sentence: "Der Mann, mit _______ ich zusammenarbeite, ist sehr freundlich.", answer: "dem", hint: "Ù…Ø°Ú©Ø± Dativ nach mit â†’ dem" },
          { sentence: "Sie ist eine Person, _______ man vertrauen kann.", answer: "der", hint: "Ù…Ø¤Ù†Ø« Dativ â†’ der" },
          { sentence: "Das ist der Ort, _______ wir uns kennengelernt haben.", answer: "wo", hint: "Ort â†’ wo" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "Ø±ÙˆØ§Ø¨Ø· Ùˆ Ø§Ø­Ø³Ø§Ø³Ø§Øª (Beziehungen und GefÃ¼hle)",
        words: [
          { de: "die Freundschaft", fa: "Ø¯ÙˆØ³ØªÛŒ", article: "die", plural: "die Freundschaften", examples: [{ de: "Unsere Freundschaft ist sehr wichtig.", fa: "Ø¯ÙˆØ³ØªÛŒ Ù…Ø§ Ø®ÛŒلÛŒ Ù…Ù‡Ù… Ø§Ø³Øª." }] },
          { de: "die Beziehung", fa: "Ø±Ø§Ø¨Ø·Ù‡ (Ø¹Ø§Ø·ÙÛŒ/Ø§Ø¬ØªÙ…Ø§Ø¹ÛŒ)", article: "die", plural: "die Beziehungen", examples: [{ de: "Sie haben eine gute Beziehung.", fa: "Ø¢Ù†â€ŒÙ‡Ø§ Ø±Ø§Ø¨Ø·Ù‡ Ø®ÙˆØ¨ÛŒ Ø¯Ø§Ø±Ù†Ø¯." }] },
          { de: "das GefÃ¼hl", fa: "Ø§Ø­Ø³Ø§Ø³", article: "das", plural: "die GefÃ¼hle", examples: [{ de: "Ich habe gemischte GefÃ¼hle.", fa: "Ø§Ø­Ø³Ø§Ø³Ø§Øª Ù…Ø®ØªلØ·ÛŒ Ø¯Ø§Ø±Ù…." }] },
          { de: "vertrauen", fa: "Ø§Ø¹ØªÙ…Ø§Ø¯ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich vertraue dir.", fa: "Ø¨Ù‡ ØªÙˆ Ø§Ø¹ØªÙ…Ø§Ø¯ Ø¯Ø§Ø±Ù…." }] },
          { de: "der Vertrauen", fa: "Ø§Ø¹ØªÙ…Ø§Ø¯", article: "der", plural: "-", examples: [{ de: "Vertrauen ist wichtig in einer Beziehung.", fa: "Ø§Ø¹ØªÙ…Ø§Ø¯ Ø¯Ø± Ø±Ø§Ø¨Ø·Ù‡ Ù…Ù‡Ù… Ø§Ø³Øª." }] }
        ]
      },
      {
        title: "ØªØ¶Ø§Ø¯Ù‡Ø§ Ùˆ Ø­ل Ù…Ø´Ú©ل (Konflikte und LÃ¶sung)",
        words: [
          { de: "der Konflikt", fa: "ØªØ¶Ø§Ø¯ / Ø¯Ø±Ú¯ÛŒØ±ÛŒ", article: "der", plural: "die Konflikte", examples: [{ de: "Wir haben einen Konflikt.", fa: "Ù…Ø§ ÛŒÚ© ØªØ¶Ø§Ø¯ Ø¯Ø§Ø±ÛŒÙ…." }] },
          { de: "der Streit", fa: "Ø¨Ø­Ø« / Ø¯Ø¹ÙˆØ§", article: "der", plural: "die Streite", examples: [{ de: "Sie hatten einen Streit.", fa: "Ø¢Ù†â€ŒÙ‡Ø§ Ø¯Ø¹ÙˆØ§ Ú©Ø±Ø¯Ù†Ø¯." }] },
          { de: "sich versÃ¶hnen", fa: "Ø¢Ø´ØªÛŒ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Nach dem Streit haben sie sich versÃ¶hnt.", fa: "Ø¨Ø¹Ø¯ Ø§Ø² Ø¯Ø¹ÙˆØ§ Ø¢Ø´ØªÛŒ Ú©Ø±Ø¯Ù†Ø¯." }] },
          { de: "verzeihen", fa: "Ø¨Ø®Ø´ÛŒØ¯Ù†", article: "-", plural: "-", examples: [{ de: "Kannst du mir verzeihen?", fa: "Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒ Ù…Ø±Ø§ Ø¨Ø¨Ø®Ø´ÛŒØŸ" }] },
          { de: "verletzt", fa: "Ø¯لØ®ÙˆØ± / Ø²Ø®Ù…ÛŒ", article: "-", plural: "-", examples: [{ de: "Ich fÃ¼hle mich verletzt.", fa: "Ø§Ø­Ø³Ø§Ø³ Ø¯لØ®ÙˆØ±ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ù…." }] },
          { de: "die EnttÃ¤uschung", fa: "Ù†Ø§Ø§Ù…ÛŒØ¯ÛŒ / Ø³Ø±Ø®ÙˆØ±Ø¯Ú¯ÛŒ", article: "die", plural: "die EnttÃ¤uschungen", examples: [{ de: "Das war eine groÃŸe EnttÃ¤uschung.", fa: "Ø§ÛŒÙ† Ù†Ø§Ø§Ù…ÛŒØ¯ÛŒ Ø¨Ø²Ø±Ú¯ÛŒ Ø¨ÙˆØ¯." }] },
          { de: "eifersÃ¼chtig", fa: "Ø­Ø³ÙˆØ¯", article: "-", plural: "-", examples: [{ de: "Er ist eifersÃ¼chtig auf seinen Freund.", fa: "Ø§Ùˆ Ø¨Ù‡ Ø¯ÙˆØ³ØªØ´ Ø­Ø³ÙˆØ¯ Ø§Ø³Øª." }] },
          { de: "die Gemeinsamkeit", fa: "ÙˆØ¬Ù‡ Ø§Ø´ØªØ±Ø§Ú©", article: "die", plural: "die Gemeinsamkeiten", examples: [{ de: "Wir haben viele Gemeinsamkeiten.", fa: "ÙˆØ¬Ù‡ Ø§Ø´ØªØ±Ø§Ú© Ø²ÛŒØ§Ø¯ÛŒ Ø¯Ø§Ø±ÛŒÙ…." }] },
          { de: "auseinandergehen", fa: "Ø§Ø² Ù‡Ù… Ø¬Ø¯Ø§ Ø´Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Sie sind auseinandergegangen.", fa: "Ø¢Ù†â€ŒÙ‡Ø§ Ø§Ø² Ù‡Ù… Ø¬Ø¯Ø§ Ø´Ø¯Ù†Ø¯." }] },
          { de: "das VerstÃ¤ndnis", fa: "Ø¯Ø±Ú© / ÙÙ‡Ù…", article: "das", plural: "-", examples: [{ de: "Er hat kein VerstÃ¤ndnis fÃ¼r meine Situation.", fa: "Ø§Ùˆ Ø¯Ø±Ú©ÛŒ Ø§Ø² ÙˆØ¶Ø¹ÛŒØª Ù…Ù† Ù†Ø¯Ø§Ø±Ø¯." }] },
          { de: "mitfÃ¼hlen", fa: "Ù‡Ù…Ø¯لÛŒ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich kann gut mitfÃ¼hlen.", fa: "Ø®ÙˆØ¨ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ù… Ù‡Ù…Ø¯لÛŒ Ú©Ù†Ù…." }] },
          { de: "die UnterstÃ¼tzung", fa: "Ø­Ù…Ø§ÛŒØª / Ù¾Ø´ØªÛŒØ¨Ø§Ù†ÛŒ", article: "die", plural: "-", examples: [{ de: "Danke fÃ¼r deine UnterstÃ¼tzung!", fa: "Ù…Ù…Ù†ÙˆÙ† Ø§Ø² Ø­Ù…Ø§ÛŒØªØª!" }] },
          { de: "streiten sich", fa: "Ø¯Ø¹ÙˆØ§ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Die Kinder streiten sich oft.", fa: "Ø¨Ú†Ù‡â€ŒÙ‡Ø§ Ø§ØºلØ¨ Ø¯Ø¹ÙˆØ§ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯." }] },
          { de: "sich kÃ¼mmern um", fa: "Ø±Ø³ÛŒØ¯Ú¯ÛŒ Ú©Ø±Ø¯Ù† Ø¨Ù‡", article: "-", plural: "-", examples: [{ de: "Sie kÃ¼mmert sich um ihre Familie.", fa: "Ø§Ùˆ Ø¨Ù‡ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡â€ŒØ§Ø´ Ø±Ø³ÛŒØ¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "die Eifersucht", fa: "Ø­Ø³Ø§Ø¯Øª", article: "die", plural: "-", examples: [{ de: "Eifersucht kann Beziehungen zerstÃ¶ren.", fa: "Ø­Ø³Ø§Ø¯Øª Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ø¯ Ø±ÙˆØ§Ø¨Ø· Ø±Ø§ Ù†Ø§Ø¨ÙˆØ¯ Ú©Ù†Ø¯." }] },
          { de: "das Vertrauen", fa: "Ø§Ø¹ØªÙ…Ø§Ø¯", article: "das", plural: "-", examples: [{ de: "Vertrauen muss man verdienen.", fa: "Ø§Ø¹ØªÙ…Ø§Ø¯ Ø¨Ø§ÛŒØ¯ Ú©Ø³Ø¨ Ø´ÙˆØ¯." }] },
          { de: "das Kompliment", fa: "ØªØ¹Ø±ÛŒÙ / ØªÙ…Ø¬ÛŒØ¯", article: "das", plural: "die Komplimente", examples: [{ de: "Er hat mir ein Kompliment gemacht.", fa: "Ø§Ùˆ Ø§Ø² Ù…Ù† ØªØ¹Ø±ÛŒÙ Ú©Ø±Ø¯." }] },
          { de: "sich entschuldigen", fa: "Ø¹Ø°Ø±Ø®ÙˆØ§Ù‡ÛŒ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich mÃ¶chte mich entschuldigen.", fa: "Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ø¹Ø°Ø±Ø®ÙˆØ§Ù‡ÛŒ Ú©Ù†Ù…." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Wahre Freundschaft\n\nWas bedeutet wahre Freundschaft? FÃ¼r mich ist eine Freundin eine Person, der man alles erzÃ¤hlen kann, ohne Angst zu haben. Mein bester Freund, mit dem ich seit der Kindheit befreundet bin, lebt leider in einer anderen Stadt. Trotzdem telefonieren wir jede Woche.\nFreundschaften haben sowohl schÃ¶ne als auch schwierige Momente. Manchmal gibt es Konflikte, weil man unterschiedliche Meinungen hat. Letztes Jahr hatten wir einen groÃŸen Streit, weil er mir nicht gesagt hatte, dass er umzieht. Ich war sehr verletzt und enttÃ¤uscht.\nAber wahre Freundschaft bedeutet auch, Fehler verzeihen zu kÃ¶nnen. Nach einigen Wochen haben wir uns ausgesprochen und versÃ¶hnt. Er hat sich entschuldigt und gesagt, dass er nicht wusste, wie er es mir sagen sollte. Ich habe ihm verziehen, weil ich weiÃŸ, dass er es nicht bÃ¶se gemeint hat.\nDas Wichtigste in einer Freundschaft ist Vertrauen und VerstÃ¤ndnis. Man sollte fÃ¼reinander da sein, auch wenn es schwierig ist. Ein guter Freund ist wie ein Familienmitglied, das man sich aussucht.",
      questions: [
        { question: "Ø¨Ù‡ØªØ±ÛŒÙ† Ø¯ÙˆØ³Øª Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ú©Ø¬Ø§ Ø²Ù†Ø¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", answer: "Ø¯Ø± Ø´Ù‡Ø± Ø¯ÛŒÚ¯Ø±ÛŒ." },
        { question: "Ø¢Ù†â€ŒÙ‡Ø§ Ø³Ø§ل Ú¯Ø°Ø´ØªÙ‡ Ú†Ø±Ø§ Ø¯Ø¹ÙˆØ§ Ú©Ø±Ø¯Ù†Ø¯ØŸ", answer: "Ú†ÙˆÙ† Ø¯ÙˆØ³ØªØ´ Ù†Ú¯ÙØªÙ‡ Ø¨ÙˆØ¯ Ú©Ù‡ Ù†Ù‚ل Ù…Ú©Ø§Ù† Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
        { question: "Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ú†Ú¯ÙˆÙ†Ù‡ ØªÙˆØ§Ù†Ø³Øª Ø¨Ø¨Ø®Ø´Ø¯ØŸ", answer: "ÙÙ‡Ù…ÛŒØ¯ Ú©Ù‡ Ø¯ÙˆØ³ØªØ´ Ù‚ØµØ¯ Ø¨Ø¯ÛŒ Ù†Ø¯Ø§Ø´ØªÙ‡." },
        { question: "Ø¨Ù‡ Ù†Ø¸Ø± Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ù…Ù‡Ù…â€ŒØªØ±ÛŒÙ† Ú†ÛŒØ² Ø¯Ø± Ø¯ÙˆØ³ØªÛŒ Ú†ÛŒØ³ØªØŸ", answer: "Ø§Ø¹ØªÙ…Ø§Ø¯ (Vertrauen) Ùˆ Ø¯Ø±Ú© (VerstÃ¤ndnis)." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¯ÙˆØ³ØªÛŒ",
      prompt: "ÛŒÚ© Ù…ØªÙ† Û±Û°-Û±Û² Ø®Ø·ÛŒ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¨Ù‡ØªØ±ÛŒÙ† Ø¯ÙˆØ³ØªØªØ§Ù† ÛŒØ§ ÛŒÚ© Ø±Ø§Ø¨Ø·Ù‡ Ù…Ù‡Ù… Ø¯Ø± Ø²Ù†Ø¯Ú¯ÛŒâ€ŒØªØ§Ù† Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯. Ø§Ø² RelativsÃ¤tze Ùˆ ÙˆØ§Ú˜Ú¯Ø§Ù† Ø§Ø­Ø³Ø§Ø³Ø§Øª Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      steps: [
        {
          title: "Ù…Ø¹Ø±ÙÛŒ Ø´Ø®Øµ",
          text: "Ø¨Ø§ Relativsatz",
          example: { de: "Mein bester Freund ist eine Person, die mich sehr gut versteht.", fa: "Ø¨Ù‡ØªØ±ÛŒÙ† Ø¯ÙˆØ³Øª Ù…Ù† Ø´Ø®ØµÛŒ Ø§Ø³Øª Ú©Ù‡ Ø®ÙˆØ¨ Ù…Ø±Ø§ Ù…ÛŒâ€ŒÙÙ‡Ù…Ø¯." }
        },
        {
          title: "ØªÙˆØµÛŒÙ Ø±Ø§Ø¨Ø·Ù‡",
          text: "Ø§Ø­Ø³Ø§Ø³Ø§Øª Ùˆ Ø®Ø§Ø·Ø±Ø§Øª",
          example: { de: "Mit dem ich seit vielen Jahren befreundet bin...", fa: "Ú©Ù‡ Ø³Ø§لâ€ŒÙ‡Ø§Ø³Øª Ø¨Ø§ Ø§Ùˆ Ø¯ÙˆØ³Øª Ù‡Ø³ØªÙ…..." }
        },
        {
          title: "Ù†ØªÛŒØ¬Ù‡â€ŒÚ¯ÛŒØ±ÛŒ",
          text: "Ø§Ù‡Ù…ÛŒØª Ø¯ÙˆØ³ØªÛŒ",
          example: { de: "Wahre Freundschaft ist unbezahlbar.", fa: "Ø¯ÙˆØ³ØªÛŒ ÙˆØ§Ù‚Ø¹ÛŒ Ø¨ÛŒâ€ŒÙ‚ÛŒÙ…Øª Ø§Ø³Øª." }
        }
      ],
      modelAnswer: "Meine beste Freundin ist Sara, mit der ich seit der UniversitÃ¤t befreundet bin. Sie ist eine Person, der ich immer vertrauen kann. Wir haben viele Gemeinsamkeiten: Wir lieben beide BÃ¼cher, Musik und Reisen. Sara ist jemand, die mich zum Lachen bringt, auch wenn ich traurig bin. Letztes Jahr hatten wir einen kleinen Streit, weil sie mein Geheimnis erzÃ¤hlt hat. Ich war sehr verletzt und habe mich nicht gemeldet. Aber dann hat sie sich entschuldigt und gesagt, dass es ein MissverstÃ¤ndnis war. Ich habe ihr verziehen, weil unsere Freundschaft wichtiger ist als ein Fehler. Sara ist wie eine Schwester fÃ¼r mich, die ich mir ausgesucht habe. Ich weiÃŸ, dass sie immer fÃ¼r mich da sein wird, egal was passiert. Wahre Freundschaft bedeutet, fÃ¼reinander da zu sein."
    }
  ],

  listening: [
    {
      title: "Ø¨Ø­Ø« Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¯ÙˆØ³ØªÛŒ",
      source: "Freundschaft und Beziehungen (B1)",
      link: "https://www.youtube.com/watch?v=9Z3wJKkOqSM",
      instructions: "Ø¨Ù‡ Ø¨Ø­Ø« Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¯ÙˆØ³ØªÛŒ Ùˆ Ø±ÙˆØ§Ø¨Ø· Ø¯Ø± ÙˆÛŒØ¯ÛŒÙˆ Ø¯Ù‚Øª Ú©Ù†ÛŒØ¯. RelativsÃ¤tze Ùˆ Ø¹Ø¨Ø§Ø±Ø§Øª Ø§Ø­Ø³Ø§Ø³ÛŒ (verletzt, enttÃ¤uscht, verzeihen) Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
    }
  ],

  speaking: [
    {
      title: "ØªÙˆØµÛŒÙ ÛŒÚ© Ø´Ø®Øµ Ù…Ù‡Ù…",
      pattern: "Das ist eine Person, die... / Mein bester Freund, mit dem ich... / Sie ist jemand, der...",
      exercise: "Ù…Ø¯Øª Û² Ø¯Ù‚ÛŒÙ‚Ù‡ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¨Ù‡ØªØ±ÛŒÙ† Ø¯ÙˆØ³Øª ÛŒØ§ ÛŒÚ© Ø´Ø®Øµ Ù…Ù‡Ù… Ø¯Ø± Ø²Ù†Ø¯Ú¯ÛŒâ€ŒØªØ§Ù† ØµØ­Ø¨Øª Ú©Ù†ÛŒØ¯. Ø§Ø² RelativsÃ¤tze Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯ Ùˆ Ø§Ø­Ø³Ø§Ø³Ø§ØªØªØ§Ù† Ø±Ø§ Ø¨ÛŒØ§Ù† Ú©Ù†ÛŒØ¯."
    }
  ],

  cultureTip: "Ø¯Ø± ÙØ±Ù‡Ù†Ú¯ Ø¢لÙ…Ø§Ù†ÛŒØŒ Ø¯ÙˆØ³ØªÛŒ Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø¹Ù…ÛŒÙ‚ Ùˆ Ø·ÙˆلØ§Ù†ÛŒâ€ŒÙ…Ø¯Øª Ø§Ø³Øª Ø§Ù…Ø§ Ø´Ú©لâ€ŒÚ¯ÛŒØ±ÛŒ Ø¢Ù† Ù…Ù…Ú©Ù† Ø§Ø³Øª Ú©Ù†Ø¯ Ø¨Ø§Ø´Ø¯. Ø¢لÙ…Ø§Ù†ÛŒâ€ŒÙ‡Ø§ Ø¨Ø±Ø§ÛŒ ØµØ¯Ø§Ù‚Øª Ùˆ Ø±Ú©â€ŒÚ¯ÙˆÛŒÛŒ Ø¯Ø± Ø¯ÙˆØ³ØªÛŒ Ø§Ø±Ø²Ø´ Ù‚Ø§Ø¦لÙ†Ø¯. Ø¨Ø±Ø¹Ú©Ø³ ÙØ±Ù‡Ù†Ú¯â€ŒÙ‡Ø§ÛŒÛŒ Ú©Ù‡ Ø³Ø±ÛŒØ¹ Ø¯ÙˆØ³Øª Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯ØŒ Ø¢لÙ…Ø§Ù†ÛŒâ€ŒÙ‡Ø§ Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø§Ø¨ØªØ¯Ø§ ÙØ§ØµلÙ‡ Ø±Ø§ Ø­ÙØ¸ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯ Ùˆ Ú©Ù…â€ŒÚ©Ù… Ø¨Ù‡ Ù‡Ù… Ù†Ø²Ø¯ÛŒÚ© Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯. Ù…ÙÙ‡ÙˆÙ… Kumpel (Ø±ÙÛŒÙ‚/Ø¯ÙˆØ³Øª ØµÙ…ÛŒÙ…ÛŒ) Ùˆ Freund/Freundin (Ø¯ÙˆØ³Øª ÙˆØ§Ù‚Ø¹ÛŒ) Ù…ØªÙØ§ÙˆØª Ø§Ø³Øª.",

  examData: {
    questions: [
      { question: "Â«Ich habe einen Freund, _______ immer fÃ¼r mich da ist.Â»", options: ["der", "den", "dem", "dessen"], answer: 0 },
      { question: "Â«Die Frau, mit _______ ich zusammenarbeite, ist sehr nett.Â»", options: ["der", "die", "den", "deren"], answer: 0 },
      { question: "Â«Die Kinder, _______ Eltern arbeiten, sind allein.Â»", options: ["deren", "derer", "denen", "die"], answer: 0 },
      { question: "Ú©لÙ…Ù‡ Â«Ø§Ø¹ØªÙ…Ø§Ø¯Â» Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:?", options: ["der Streit", "das Vertrauen", "das GefÃ¼hl", "die EnttÃ¤uschung"], answer: 1 },
      { question: "Â«Kannst du mir _______?Â» (Ø¨Ø®Ø´ÛŒØ¯Ù†)", options: ["vertrauen", "verzeihen", "versÃ¶hnen", "verstehen"], answer: 1 },
      { question: "Â«Nach dem Streit haben sie sich _______.Â» (Ø¢Ø´ØªÛŒ Ú©Ø±Ø¯Ù†)", options: ["gestritten", "versÃ¶hnt", "verletzt", "enttÃ¤uscht"], answer: 1 },
      { question: "Â«Ich fÃ¼hle mich _______.Â» (Ø¯لØ®ÙˆØ±)", options: ["verletzt", "glÃ¼cklich", "zufrieden", "stark"], answer: 0 },
      { question: "Relativpronomen Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Ú†Ù†Ø¯Ù… Ø¬Ù…لÙ‡ Ù…ÙˆØµÙˆلÛŒ Ù‚Ø±Ø§Ø± Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ØŸ", options: ["Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û²", "Ø¢Ø®Ø± Ø¬Ù…لÙ‡", "Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û±", "Ø¨Ø¹Ø¯ Ø§Ø² ÙØ¹ل"], answer: 2 }
    ]
  }
};
