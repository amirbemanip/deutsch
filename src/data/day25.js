export const day25Data = {
  title: "Ø±ÙˆØ² Û²Ûµ: Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡ Ø¯ÙˆØ·Ø±ÙÙ‡ (WechselprÃ¤positionen)",
  objective: "Ø¯Ø± Ø§ÛŒÙ† Ø¯Ø±Ø³ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒØ¯ Ú†Ú¯ÙˆÙ†Ù‡ Ø§Ø² Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡ Ø¯ÙˆØ·Ø±ÙÙ‡ (WechselprÃ¤positionen) Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯. Ø§ÛŒÙ† Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ù†Ø¯ Akkusativ ÛŒØ§ Dativ Ø¨Ú¯ÛŒØ±Ù†Ø¯.",
  grammarData: {
    subtitle: "WechselprÃ¤positionen ل Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡ Ø¯ÙˆØ·Ø±ÙÙ‡",
    content: [
      {
        type: "text",
        title: "WechselprÃ¤positionen Ú†ÛŒØ³ØªØŸ",
        text: "Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡ Ø¯ÙˆØ·Ø±ÙÙ‡ (WechselprÃ¤positionen) Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡â€ŒØ§ÛŒ Ù‡Ø³ØªÙ†Ø¯ Ú©Ù‡ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ù†Ø¯ Ù‡Ù… Akkusativ Ùˆ Ù‡Ù… Dativ Ø¨Ú¯ÛŒØ±Ù†Ø¯. Ù‚Ø§Ù†ÙˆÙ† Ú©لÛŒØ¯ÛŒ: Ø§Ú¯Ø± Ø³Ø¤Ø§ل Â«Wohin?Â» (Ø¨Ù‡ Ú©Ø¬Ø§ØŸ) Ø¨Ù¾Ø±Ø³ÛŒØ¯ â†’ Akkusativ. Ø§Ú¯Ø± Ø³Ø¤Ø§ل Â«Wo?Â» (Ú©Ø¬Ø§ØŸ) Ø¨Ù¾Ø±Ø³ÛŒØ¯ â†’ Dativ."
      },
      {
        type: "table",
        title: "Û¹ Ø­Ø±Ù Ø§Ø¶Ø§ÙÙ‡ Ø¯ÙˆØ·Ø±ÙÙ‡",
        rows: [
          { de: "in (Ø¯Ø±/Ø¨Ù‡)", fa: "in die Schule (Ø¨Ù‡ Ù…Ø¯Ø±Ø³Ù‡ - Akk) / in der Schule (Ø¯Ø± Ù…Ø¯Ø±Ø³Ù‡ - Dat)" },
          { de: "auf (Ø±ÙˆÛŒ)", fa: "auf den Tisch (Ø±ÙˆÛŒ Ù…ÛŒØ² - Akk) / auf dem Tisch (Ø±ÙˆÛŒ Ù…ÛŒØ² - Dat)" },
          { de: "an (Ú©Ù†Ø§Ø±/Ø¨Ù‡)", fa: "an die Wand (Ø¨Ù‡ Ø¯ÛŒÙˆØ§Ø± - Akk) / an der Wand (Ú©Ù†Ø§Ø± Ø¯ÛŒÙˆØ§Ø± - Dat)" },
          { de: "Ã¼ber (Ø¨Ø§لØ§ÛŒ)", fa: "Ã¼ber den Fluss (Ø§Ø² Ø¨Ø§لØ§ÛŒ Ø±ÙˆØ¯Ø®Ø§Ù†Ù‡ - Akk) / Ã¼ber dem Fluss (Ø¨Ø§لØ§ÛŒ Ø±ÙˆØ¯Ø®Ø§Ù†Ù‡ - Dat)" },
          { de: "unter (Ø²ÛŒØ±)", fa: "unter den Tisch (Ø²ÛŒØ± Ù…ÛŒØ² - Akk) / unter dem Tisch (Ø²ÛŒØ± Ù…ÛŒØ² - Dat)" },
          { de: "neben (Ú©Ù†Ø§Ø±)", fa: "neben das Bett (Ú©Ù†Ø§Ø± ØªØ®Øª - Akk) / neben dem Bett (Ú©Ù†Ø§Ø± ØªØ®Øª - Dat)" },
          { de: "hinter (Ù¾Ø´Øª)", fa: "hinter das Haus (Ù¾Ø´Øª Ø®Ø§Ù†Ù‡ - Akk) / hinter dem Haus (Ù¾Ø´Øª Ø®Ø§Ù†Ù‡ - Dat)" },
          { de: "vor (Ø¬لÙˆ)", fa: "vor die TÃ¼r (Ø¬لÙˆÛŒ Ø¯Ø± - Akk) / vor der TÃ¼r (Ø¬لÙˆÛŒ Ø¯Ø± - Dat)" },
          { de: "zwischen (Ø¨ÛŒÙ†)", fa: "zwischen die StÃ¼hle (Ø¨ÛŒÙ† ØµÙ†Ø¯لÛŒâ€ŒÙ‡Ø§ - Akk) / zwischen den StÃ¼hlen (Ø¨ÛŒÙ† ØµÙ†Ø¯لÛŒâ€ŒÙ‡Ø§ - Dat)" }
        ]
      },
      {
        type: "text",
        title: "Ù‚Ø§Ù†ÙˆÙ† Ø·لØ§ÛŒÛŒ: Wohin vs Wo",
        text: "Wohin? (Ø¨Ù‡ Ú©Ø¬Ø§ØŸ) = Ø­Ø±Ú©Øª Ø¨Ù‡ Ø³Ù…Øª = Akkusativ. Ù…Ø«Ø§ل: Ich gehe in die KÃ¼che. (Ø¨Ù‡ Ø¢Ø´Ù¾Ø²Ø®Ø§Ù†Ù‡ Ù…ÛŒâ€ŒØ±ÙˆÙ…). Wo? (Ú©Ø¬Ø§ØŸ) = Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª = Dativ. Ù…Ø«Ø§ل: Ich bin in der KÃ¼che. (Ø¯Ø± Ø¢Ø´Ù¾Ø²Ø®Ø§Ù†Ù‡ Ù‡Ø³ØªÙ…). Ø§ÛŒÙ† Ù…Ù‡Ù…â€ŒØªØ±ÛŒÙ† Ù‚Ø§Ù†ÙˆÙ† Ø§Ø³Øª!"
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ Akkusativ (Ø­Ø±Ú©Øª: Wohin?)",
        items: [
          { de: "Ich gehe in die Schule.", fa: "Ø¨Ù‡ Ù…Ø¯Ø±Ø³Ù‡ Ù…ÛŒâ€ŒØ±ÙˆÙ…." },
          { de: "Er stellt das Buch auf den Tisch.", fa: "Ú©ØªØ§Ø¨ Ø±Ø§ Ø±ÙˆÛŒ Ù…ÛŒØ² Ù…ÛŒâ€ŒÚ¯Ø°Ø§Ø±Ø¯." },
          { de: "Sie hÃ¤ngt das Bild an die Wand.", fa: "Ø¹Ú©Ø³ Ø±Ø§ Ø¨Ù‡ Ø¯ÛŒÙˆØ§Ø± Ù…ÛŒâ€ŒØ¢ÙˆÛŒØ²Ø¯." },
          { de: "Das Kind lÃ¤uft unter den Tisch.", fa: "Ø¨Ú†Ù‡ Ø²ÛŒØ± Ù…ÛŒØ² Ù…ÛŒâ€ŒØ¯ÙˆØ¯." },
          { de: "Wir setzen uns neben das Fenster.", fa: "Ú©Ù†Ø§Ø± Ù¾Ù†Ø¬Ø±Ù‡ Ù…ÛŒâ€ŒÙ†Ø´ÛŒÙ†ÛŒÙ…." },
          { de: "Der Ball rollt hinter das Auto.", fa: "ØªÙˆÙ¾ Ù¾Ø´Øª Ù…Ø§Ø´ÛŒÙ† Ù…ÛŒâ€ŒØºلØªØ¯." }
        ]
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ Dativ (Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª: Wo?)",
        items: [
          { de: "Ich bin in der KÃ¼che.", fa: "Ø¯Ø± Ø¢Ø´Ù¾Ø²Ø®Ø§Ù†Ù‡ Ù‡Ø³ØªÙ…." },
          { de: "Das Buch liegt auf dem Tisch.", fa: "Ú©ØªØ§Ø¨ Ø±ÙˆÛŒ Ù…ÛŒØ² Ø§Ø³Øª." },
          { de: "Das Bild hÃ¤ngt an der Wand.", fa: "Ø¹Ú©Ø³ Ø±ÙˆÛŒ Ø¯ÛŒÙˆØ§Ø± Ø¢ÙˆÛŒØ²Ø§Ù† Ø§Ø³Øª." },
          { de: "Der Hund schlÃ¤ft unter dem Bett.", fa: "Ø³Ú¯ Ø²ÛŒØ± ØªØ®Øª Ù…ÛŒâ€ŒØ®ÙˆØ§Ø¨Ø¯." },
          { de: "Die Lampe steht neben dem Sofa.", fa: "Ú†Ø±Ø§Øº Ú©Ù†Ø§Ø± Ø³ÙˆÙØ§ Ø§ÛŒØ³ØªØ§Ø¯Ù‡ Ø§Ø³Øª." },
          { de: "Hinter dem Haus ist ein Garten.", fa: "Ù¾Ø´Øª Ø®Ø§Ù†Ù‡ ÛŒÚ© Ø¨Ø§Øº Ø§Ø³Øª." }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ø¨Ø³ÛŒØ§Ø± Ù…Ù‡Ù…!",
        text: "Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡ Ù‡Ù…ÛŒØ´Ù‡ Ù‚Ø¨ل Ø§Ø² Ø§Ø³Ù… Ù…ÛŒâ€ŒØ¢ÛŒÙ†Ø¯ Ùˆ Ø¶Ù…ÛŒØ± Ø§Ø³Ù…ÛŒ (der/die/das) Ø±Ø§ ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒØ¯Ù‡Ù†Ø¯: Akkusativ: derâ†’den, dieâ†’die, dasâ†’das, die(pl)â†’die. Dativ: derâ†’dem, dieâ†’der, dasâ†’dem, die(pl)â†’den."
      },
      {
        type: "table",
        title: "ØªØºÛŒÛŒØ±Ø§Øª Ù…Ù‚Ø§لÙ‡â€ŒÙ‡Ø§",
        rows: [
          { de: "Akkusativ: den Tisch, die Lampe, das Buch", fa: "derâ†’den, dieâ†’die, dasâ†’das" },
          { de: "Dativ: dem Tisch, der Lampe, dem Buch", fa: "derâ†’dem, dieâ†’der, dasâ†’dem" },
          { de: "Dativ Ø¬Ù…Ø¹: den Tischen, den Lampen", fa: "die(pl)â†’den + n" },
          { de: "Ù…Ø«Ø§ل: auf den Tisch (Akk) / auf dem Tisch (Dat)", fa: "Ø±ÙˆÛŒ Ù…ÛŒØ²" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Akkusativ ÛŒØ§ DativØŸ",
        questions: [
          {
            question: "Â«Ich gehe in ___ KÃ¼che.Â» Ú©Ø¯Ø§Ù… ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ",
            questionDe: "Welcher Kasus ist richtig fÃ¼r لIch gehe in ... KÃ¼cheل?",
            options: [
              { text: "die (Akkusativ)", isCorrect: true },
              { text: "der (Dativ)", isCorrect: false },
              { text: "dem (Dativ)", isCorrect: false },
              { text: "den (Akkusativ)", isCorrect: false }
            ],
            explanation: "Â«gehen inÂ» Ø­Ø±Ú©Øª Ø§Ø³Øª â†’ Akkusativ â†’ in die KÃ¼che."
          },
          {
            question: "Â«Das Buch liegt auf ___ Tisch.Â» Ú©Ø¯Ø§Ù… ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ",
            questionDe: "Welcher Kasus ist richtig fÃ¼r لDas Buch liegt auf ... Tischل?",
            options: [
              { text: "dem (Dativ)", isCorrect: true },
              { text: "den (Akkusativ)", isCorrect: false },
              { text: "der (Dativ)", isCorrect: false },
              { text: "des (Genitiv)", isCorrect: false }
            ],
            explanation: "Â«liegen aufÂ» Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª Ø§Ø³Øª â†’ Dativ â†’ auf dem Tisch."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Ø³Ø¤Ø§ل Ø¨Ø±Ø§ÛŒ Dativ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Welche Frage gehÃ¶rt zum Dativ?",
            options: [
              { text: "Wo? (Ú©Ø¬Ø§ØŸ)", isCorrect: true },
              { text: "Wohin? (Ø¨Ù‡ Ú©Ø¬Ø§ØŸ)", isCorrect: false },
              { text: "Wann? (Ú©ÛŒØŸ)", isCorrect: false },
              { text: "Warum? (Ú†Ø±Ø§ØŸ)", isCorrect: false }
            ],
            explanation: "Wo? = Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª = Dativ. Wohin? = Ø­Ø±Ú©Øª = Akkusativ."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡ Ø¯ÙˆØ·Ø±ÙÙ‡ Ø±Ø§ Ú©Ø§Ù…ل Ú©Ù†ÛŒØ¯",
        instruction: "Ø­Ø§لØª ØµØ­ÛŒØ­ (Akkusativ ÛŒØ§ Dativ) Ø±Ø§ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Ich stelle das Buch auf ___ Tisch. (der Tisch)", answer: "den", hint: "Ø­Ø±Ú©Øª â†’ Akkusativ â†’ den" },
          { sentence: "Das Buch liegt auf ___ Tisch. (der Tisch)", answer: "dem", hint: "Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª â†’ Dativ â†’ dem" },
          { sentence: "Die Katze springt auf ___ Stuhl. (der Stuhl)", answer: "den", hint: "Ø­Ø±Ú©Øª â†’ Akkusativ â†’ den" },
          { sentence: "Die Katze sitzt auf ___ Stuhl. (der Stuhl)", answer: "dem", hint: "Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª â†’ Dativ â†’ dem" },
          { sentence: "Ich gehe in ___ Schule. (die Schule)", answer: "die", hint: "Ø­Ø±Ú©Øª â†’ Akkusativ â†’ die" },
          { sentence: "Ich bin in ___ Schule. (die Schule)", answer: "der", hint: "Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª â†’ Dativ â†’ der" },
          { sentence: "Er hÃ¤ngt das Bild an ___ Wand. (die Wand)", answer: "die", hint: "Ø­Ø±Ú©Øª â†’ Akkusativ â†’ die" },
          { sentence: "Das Bild hÃ¤ngt an ___ Wand. (die Wand)", answer: "der", hint: "Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª â†’ Dativ â†’ der" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡ Ø¯ÙˆØ·Ø±ÙÙ‡ Ùˆ Ú©Ø§Ø±Ø¨Ø±Ø¯ Ø¢Ù†â€ŒÙ‡Ø§",
        words: [
          { de: "in + Akk (Wohin?)", fa: "Ø¨Ù‡ / Ø¯Ø± (Ø­Ø±Ú©Øª)", article: "-", plural: "-", examples: [{ de: "Ich gehe in die Stadt.", fa: "Ø¨Ù‡ Ø´Ù‡Ø± Ù…ÛŒâ€ŒØ±ÙˆÙ…." }] },
          { de: "in + Dat (Wo?)", fa: "Ø¯Ø± (Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª)", article: "-", plural: "-", examples: [{ de: "Ich bin in der Stadt.", fa: "Ø¯Ø± Ø´Ù‡Ø± Ù‡Ø³ØªÙ…." }] },
          { de: "auf + Akk (Wohin?)", fa: "Ø±ÙˆÛŒ (Ø­Ø±Ú©Øª)", article: "-", plural: "-", examples: [{ de: "Leg das Buch auf den Tisch.", fa: "Ú©ØªØ§Ø¨ Ø±Ø§ Ø±ÙˆÛŒ Ù…ÛŒØ² Ø¨Ú¯Ø°Ø§Ø±." }] },
          { de: "auf + Dat (Wo?)", fa: "Ø±ÙˆÛŒ (Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª)", article: "-", plural: "-", examples: [{ de: "Das Buch ist auf dem Tisch.", fa: "Ú©ØªØ§Ø¨ Ø±ÙˆÛŒ Ù…ÛŒØ² Ø§Ø³Øª." }] },
          { de: "an + Akk (Wohin?)", fa: "Ø¨Ù‡ (Ø­Ø±Ú©Øª)", article: "-", plural: "-", examples: [{ de: "HÃ¤ng das Bild an die Wand.", fa: "Ø¹Ú©Ø³ Ø±Ø§ Ø¨Ù‡ Ø¯ÛŒÙˆØ§Ø± Ø¨Ø²Ù†." }] },
          { de: "an + Dat (Wo?)", fa: "Ú©Ù†Ø§Ø±/Ø±ÙˆÛŒ (Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª)", article: "-", plural: "-", examples: [{ de: "Das Bild ist an der Wand.", fa: "Ø¹Ú©Ø³ Ø±ÙˆÛŒ Ø¯ÛŒÙˆØ§Ø± Ø§Ø³Øª." }] },
          { de: "neben + Akk", fa: "Ú©Ù†Ø§Ø± (Ø­Ø±Ú©Øª)", article: "-", plural: "-", examples: [{ de: "Stell den Stuhl neben das Bett.", fa: "ØµÙ†Ø¯لÛŒ Ø±Ø§ Ú©Ù†Ø§Ø± ØªØ®Øª Ø¨Ú¯Ø°Ø§Ø±." }] },
          { de: "neben + Dat", fa: "Ú©Ù†Ø§Ø± (Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª)", article: "-", plural: "-", examples: [{ de: "Der Stuhl steht neben dem Bett.", fa: "ØµÙ†Ø¯لÛŒ Ú©Ù†Ø§Ø± ØªØ®Øª Ø§Ø³Øª." }] },
          { de: "Ã¼ber + Akk", fa: "Ø¨Ø§لØ§ÛŒ (Ø­Ø±Ú©Øª)", article: "-", plural: "-", examples: [{ de: "Das Flugzeug fliegt Ã¼ber die Stadt.", fa: "Ù‡ÙˆØ§Ù¾ÛŒÙ…Ø§ Ø§Ø² Ø¨Ø§لØ§ÛŒ Ø´Ù‡Ø± Ù¾Ø±ÙˆØ§Ø² Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "Ã¼ber + Dat", fa: "Ø¨Ø§لØ§ÛŒ (Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª)", article: "-", plural: "-", examples: [{ de: "Die Lampe hÃ¤ngt Ã¼ber dem Tisch.", fa: "Ú†Ø±Ø§Øº Ø¨Ø§لØ§ÛŒ Ù…ÛŒØ² Ø¢ÙˆÛŒØ²Ø§Ù† Ø§Ø³Øª." }] },
          { de: "unter + Akk", fa: "Ø²ÛŒØ± (Ø­Ø±Ú©Øª)", article: "-", plural: "-", examples: [{ de: "Das Kind kriecht unter den Tisch.", fa: "Ø¨Ú†Ù‡ Ø²ÛŒØ± Ù…ÛŒØ² Ù…ÛŒâ€ŒØ®Ø²Ø¯." }] },
          { de: "unter + Dat", fa: "Ø²ÛŒØ± (Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª)", article: "-", plural: "-", examples: [{ de: "Die Schuhe sind unter dem Bett.", fa: "Ú©ÙØ´â€ŒÙ‡Ø§ Ø²ÛŒØ± ØªØ®Øª Ù‡Ø³ØªÙ†Ø¯." }] },
          { de: "vor + Akk", fa: "Ø¬لÙˆÛŒ (Ø­Ø±Ú©Øª)", article: "-", plural: "-", examples: [{ de: "Stell den MÃ¼lleimer vor die TÃ¼r.", fa: "Ø³Ø·ل Ø²Ø¨Ø§لÙ‡ Ø±Ø§ Ø¬لÙˆÛŒ Ø¯Ø± Ø¨Ú¯Ø°Ø§Ø±." }] },
          { de: "vor + Dat", fa: "Ø¬لÙˆÛŒ (Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª)", article: "-", plural: "-", examples: [{ de: "Der MÃ¼lleimer steht vor der TÃ¼r.", fa: "Ø³Ø·ل Ø²Ø¨Ø§لÙ‡ Ø¬لÙˆÛŒ Ø¯Ø± Ø§Ø³Øª." }] },
          { de: "hinter + Akk", fa: "Ù¾Ø´Øª (Ø­Ø±Ú©Øª)", article: "-", plural: "-", examples: [{ de: "Geh hinter das Haus.", fa: "Ù¾Ø´Øª Ø®Ø§Ù†Ù‡ Ø¨Ø±Ùˆ." }] },
          { de: "hinter + Dat", fa: "Ù¾Ø´Øª (Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª)", article: "-", plural: "-", examples: [{ de: "Der Garten ist hinter dem Haus.", fa: "Ø¨Ø§Øº Ù¾Ø´Øª Ø®Ø§Ù†Ù‡ Ø§Ø³Øª." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "In meiner Wohnung ist alles sehr gemÃ¼tlich. Im Wohnzimmer steht das Sofa neben dem Fenster. Auf dem Sofa liegen viele Kissen. Vor dem Sofa steht ein kleiner Tisch. Auf dem Tisch liegt eine Zeitschrift. An der Wand hÃ¤ngt ein groÃŸes Bild. In der KÃ¼che ist der KÃ¼hlschrank neben dem Herd. Auf dem Herd steht eine Tasse. Das Schlafzimmer ist hinter der KÃ¼che. Dort steht das Bett unter dem Fenster. Neben dem Bett steht eine Lampe. Vor dem Haus ist ein kleiner Garten mit vielen Blumen.",
      questions: [
        { question: "Ù…Ø¨ل Ú©Ù†Ø§Ø± Ú©Ø¬Ø§Ø³ØªØŸ", answer: "Ú©Ù†Ø§Ø± Ù¾Ù†Ø¬Ø±Ù‡." },
        { question: "Ø±ÙˆÛŒ Ù…ÛŒØ² Ø¬لÙˆÛŒ Ù…Ø¨ل Ú†ÛŒØ³ØªØŸ", answer: "ÛŒÚ© Ù…Ø¬لÙ‡." },
        { question: "ÛŒØ®Ú†Ø§ل Ú©Ø¬Ø§Ø³ØªØŸ", answer: "Ú©Ù†Ø§Ø± Ø§Ø¬Ø§Ù‚ Ú¯Ø§Ø²." },
        { question: "ØªØ®Øª Ø²ÛŒØ± Ú†ÛŒØ³ØªØŸ", answer: "Ø²ÛŒØ± Ù¾Ù†Ø¬Ø±Ù‡." }
      ]
    }
  ],
  writing: [
    {
      title: "ØªÙˆØµÛŒÙ Ø§ØªØ§Ù‚",
      prompt: "Ø§ØªØ§Ù‚ Ø®ÙˆØ¯ Ø±Ø§ ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯. Ø§Ø² Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡ Ø¯ÙˆØ·Ø±ÙÙ‡ Ø¨Ø§ Akkusativ Ùˆ Dativ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      steps: [
        { title: "Ù…Ø±Ø­لÙ‡ Û±: Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª", text: "Ø§Ø´ÛŒØ§Ø¡ Ú©Ø¬Ø§ Ù‡Ø³ØªÙ†Ø¯ØŸ Ø§Ø² Dativ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Das Bett steht neben dem Fenster.", fa: "ØªØ®Øª Ú©Ù†Ø§Ø± Ù¾Ù†Ø¬Ø±Ù‡ Ø§Ø³Øª." } },
        { title: "Ù…Ø±Ø­لÙ‡ Û²: Ø­Ø±Ú©Øª", text: "Ú†ÛŒØ²ÛŒ Ø±Ø§ Ú©Ø¬Ø§ Ù…ÛŒâ€ŒÚ¯Ø°Ø§Ø±ÛŒØ¯ØŸ Ø§Ø² Akkusativ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Ich stelle die Lampe auf den Tisch.", fa: "Ú†Ø±Ø§Øº Ø±Ø§ Ø±ÙˆÛŒ Ù…ÛŒØ² Ù…ÛŒâ€ŒÚ¯Ø°Ø§Ø±Ù…." } },
        { title: "Ù…Ø±Ø­لÙ‡ Û³: ØªØ±Ú©ÛŒØ¨", text: "Ø¬Ù…لØ§Øª Ø±Ø§ ØªØ±Ú©ÛŒØ¨ Ú©Ù†ÛŒØ¯.", example: { de: "Die BÃ¼cher sind in dem Regal.", fa: "Ú©ØªØ§Ø¨â€ŒÙ‡Ø§ Ø¯Ø± Ù‚ÙØ³Ù‡ Ù‡Ø³ØªÙ†Ø¯." } }
      ],
      modelAnswer: "Mein Zimmer ist nicht sehr groÃŸ, aber gemÃ¼tlich. Das Bett steht an der Wand neben dem Fenster. Auf dem Bett liegen eine Decke und ein Kissen. Neben dem Bett steht ein Nachttisch mit einer Lampe. Der Schreibtisch steht vor dem Fenster. Auf dem Schreibtisch steht mein Computer. Die BÃ¼cher sind in dem Regal an der Wand. Vor dem Bett liegt ein kleiner Teppich. An der Wand Ã¼ber dem Bett hÃ¤ngt ein Poster. Ich stelle meine Tasche immer unter den Schreibtisch."
    }
  ],
  listening: [
    {
      title: "WechselprÃ¤positionen",
      source: "German Two-Way Prepositions",
      link: "https://www.youtube.com/watch?v=JY5vQBqzOcE",
      instructions: "Ø¨Ù‡ Ø§ÛŒÙ† ÙˆÛŒØ¯ÛŒÙˆ Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ ØªÙˆØ¬Ù‡ Ú©Ù†ÛŒØ¯ Ú†Ø·ÙˆØ± Wohin (Akkusativ) Ùˆ Wo (Dativ) Ù…Ø´Ø®Øµ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯ Ú©Ø¯Ø§Ù… Ø­Ø§لØª Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø´ÙˆØ¯. Û±Û° Ù…Ø«Ø§ل Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯."
    }
  ],
  speaking: [
    {
      title: "ØªÙˆØµÛŒÙ Ù…Ú©Ø§Ù†â€ŒÙ‡Ø§",
      pattern: "Wo ist...? ل ... ist auf/in/neben/vor/hinter... (Dat) / Wohin...? ل ... auf/in/neben/vor/hinter... (Akk)",
      exercise: "Û±Û° Ø´ÛŒØ¡ Ø¯Ø± Ø§ØªØ§Ù‚ Ø®ÙˆØ¯ Ø±Ø§ ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯ Ùˆ Ø¨Ú¯ÙˆÛŒÛŒØ¯ Ú©Ø¬Ø§ Ù‡Ø³ØªÙ†Ø¯."
    }
  ],
  cultureTip: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ØŒ Ø¢Ù¾Ø§Ø±ØªÙ…Ø§Ù†â€ŒÙ‡Ø§ Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø§ØªØ§Ù‚â€ŒÙ‡Ø§ÛŒ Ú©ÙˆÚ†Ú©ÛŒ Ø¯Ø§Ø±Ù†Ø¯. ØªÙˆØµÛŒÙ Ø¯Ù‚ÛŒÙ‚ Ù…Ú©Ø§Ù† Ø§Ø´ÛŒØ§Ø¡ Ø¨Ø§ WechselprÃ¤positionen Ø¯Ø± Ù…Ú©Ø§لÙ…Ø§Øª Ø±ÙˆØ²Ù…Ø±Ù‡ Ùˆ Ø§Ù…ØªØ­Ø§Ù†Ø§Øª Ø¨Ø³ÛŒØ§Ø± Ø±Ø§ÛŒØ¬ Ø§Ø³Øª. Ù‡Ù…Ú†Ù†ÛŒÙ† Ø¯Ø± Ø±Ø³ØªÙˆØ±Ø§Ù† Ù…Ù…Ú©Ù† Ø§Ø³Øª Ø¨Ù¾Ø±Ø³ÛŒØ¯: Â«Wo ist die Toilette?Â» (Ø¯Ø³ØªØ´ÙˆÛŒÛŒ Ú©Ø¬Ø§Ø³ØªØŸ) ÛŒØ§ Â«Wo ist die Ausgang?Â» (Ø®Ø±ÙˆØ¬ Ú©Ø¬Ø§Ø³ØªØŸ).",
  examData: {
    questions: [
      { question: "Â«Ich gehe in ___ KÃ¼che.Â» Ú©Ø¯Ø§Ù… ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["die (Akk)", "der (Dat)", "dem (Dat)", "den (Akk)"], answer: 0 },
      { question: "Â«Das Buch liegt auf ___ Tisch.Â» Ú©Ø¯Ø§Ù… ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["dem (Dat)", "den (Akk)", "der (Dat)", "des (Gen)"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ø³Ø¤Ø§ل Ø¨Ø±Ø§ÛŒ Dativ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Wo?", "Wohin?", "Wann?", "Warum?"], answer: 0 },
      { question: "Â«Stell die Lampe auf ___ Tisch.Â» Ú©Ø¯Ø§Ù… ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["den (Akk)", "dem (Dat)", "der (Dat)", "des (Gen)"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ø­Ø±Ù Ø§Ø¶Ø§ÙÙ‡ Ø¯ÙˆØ·Ø±ÙÙ‡ Ù†ÛŒØ³ØªØŸ", options: ["in", "mit", "auf", "an"], answer: 1 },
      { question: "Â«Die Katze sitzt auf ___ Stuhl.Â» Ú©Ø¯Ø§Ù… ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["dem (Dat)", "den (Akk)", "der (Dat)", "des (Gen)"], answer: 0 },
      { question: "Â«Wohin?Â» Ø¨Ø±Ø§ÛŒ Ú†Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ù…Ú©Ø§Ù† Ø«Ø§Ø¨Øª", "Ø­Ø±Ú©Øª", "Ø²Ù…Ø§Ù†", "Ø¯لÛŒل"], answer: 1 },
      { question: "Â«Das Bild hÃ¤ngt an ___ Wand.Â» Ú©Ø¯Ø§Ù… ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["der (Dat)", "die (Akk)", "dem (Dat)", "den (Akk)"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich bin in der KÃ¼che.", "Ich bin in die KÃ¼che.", "Ich bin in dem KÃ¼che.", "Ich bin in den KÃ¼che."], answer: 0 },
      { question: "Â«nebenÂ» ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", options: ["Ø²ÛŒØ±", "Ø¨Ø§لØ§", "Ú©Ù†Ø§Ø±", "Ù¾Ø´Øª"], answer: 2 }
    ]
  }
};
