export const day18Data = {
  title: "Ø±ÙˆØ² Û±Û¸: Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡ (und, aber, oder, denn)",
  objective: "Ø¯Ø± Ø§ÛŒÙ† Ø¯Ø±Ø³ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒØ¯ Ú†Ú¯ÙˆÙ†Ù‡ Ø§Ø² Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡ (nebenordnende Konjunktionen) Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯ Ùˆ Ø¬Ù…لØ§Øª Ù…Ø±Ú©Ø¨ Ø¨Ø³Ø§Ø²ÛŒØ¯. ØªÙØ§ÙˆØª Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡ Ùˆ Ù¾ÛŒØ±Ùˆ Ø±Ø§ Ù…ÛŒâ€ŒØ´Ù†Ø§Ø³ÛŒØ¯.",
  grammarData: {
    subtitle: "Nebenordnende Konjunktionen ل Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡",
    content: [
      {
        type: "text",
        title: "Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡ Ú†ÛŒØ³ØªØŸ",
        text: "Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡ (nebenordnende Konjunktionen) Ø¯Ùˆ Ø¬Ù…لÙ‡ Ù…Ø³ØªÙ‚ل Ø±Ø§ Ø¨Ù‡ Ù‡Ù… ÙˆØµل Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯. Ù…Ù‡Ù…â€ŒØªØ±ÛŒÙ† Ø¢Ù†â€ŒÙ‡Ø§: und (Ùˆ)ØŒ aber (Ø§Ù…Ø§)ØŒ oder (ÛŒØ§)ØŒ denn (Ø²ÛŒØ±Ø§). Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: Ø¨Ø¹Ø¯ Ø§Ø² Ø§ÛŒÙ† Ø­Ø±ÙˆÙ Ø±Ø¨Ø·ØŒ ØªØ±ØªÛŒØ¨ Ú©لÙ…Ø§Øª Ø¹ÙˆØ¶ Ù†Ù…ÛŒâ€ŒØ´ÙˆØ¯. ÙØ¹ل Ù‡Ù…Ú†Ù†Ø§Ù† Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Ø¯ÙˆÙ… Ù…ÛŒâ€ŒÙ…Ø§Ù†Ø¯."
      },
      {
        type: "table",
        title: "Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡ Ø§ØµلÛŒ",
        rows: [
          { de: "und (Ùˆ)", fa: "Ø§Ø¶Ø§ÙÙ‡ Ú©Ø±Ø¯Ù† Ø§Ø·لØ§Ø¹Ø§Øª" },
          { de: "aber (Ø§Ù…Ø§)", fa: "Ø¨ÛŒØ§Ù† ØªØ¶Ø§Ø¯ Ùˆ ØªÙ†Ø§Ù‚Ø¶" },
          { de: "oder (ÛŒØ§)", fa: "Ø¨ÛŒØ§Ù† Ø§Ù†ØªØ®Ø§Ø¨" },
          { de: "denn (Ø²ÛŒØ±Ø§)", fa: "Ø¨ÛŒØ§Ù† Ø¯لÛŒل" },
          { de: "sondern (Ø¨لÚ©Ù‡)", fa: "Ù†ÙÛŒ Ø§ÙˆلÛŒ Ùˆ ØªØ£ÛŒÛŒØ¯ Ø¯ÙˆÙ…ÛŒ (Ø¨Ø¹Ø¯ Ø§Ø² Ø¬Ù…لÙ‡ Ù†ÙÛŒ)" }
        ]
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ Ø¨Ø§ Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡",
        items: [
          { de: "Ich trinke Kaffee und esse Kuchen.", fa: "Ù…Ù† Ù‚Ù‡ÙˆÙ‡ Ù…ÛŒâ€ŒÙ†ÙˆØ´Ù… Ùˆ Ú©ÛŒÚ© Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…." },
          { de: "Er ist jung, aber sehr klug.", fa: "Ø§Ùˆ Ø¬ÙˆØ§Ù† Ø§Ø³ØªØŒ Ø§Ù…Ø§ Ø¨Ø³ÛŒØ§Ø± Ø¨Ø§Ù‡ÙˆØ´ Ø§Ø³Øª." },
          { de: "MÃ¶chtest du Tee oder Kaffee?", fa: "Ú†Ø§ÛŒ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡ÛŒ ÛŒØ§ Ù‚Ù‡ÙˆÙ‡ØŸ" },
          { de: "Ich bleibe zu Hause, denn ich bin mÃ¼de.", fa: "Ø¯Ø± Ø®Ø§Ù†Ù‡ Ù…ÛŒâ€ŒÙ…Ø§Ù†Ù…ØŒ Ø²ÛŒØ±Ø§ Ø®Ø³ØªÙ‡â€ŒØ§Ù…." },
          { de: "Er trinkt nicht Kaffee, sondern Tee.", fa: "Ø§Ùˆ Ù‚Ù‡ÙˆÙ‡ Ù†Ù…ÛŒâ€ŒÙ†ÙˆØ´Ø¯ØŒ Ø¨لÚ©Ù‡ Ú†Ø§ÛŒ Ù…ÛŒâ€ŒÙ†ÙˆØ´Ø¯." },
          { de: "Sie singt und tanzt gern.", fa: "Ø§Ùˆ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ø¯ Ø¢ÙˆØ§Ø² Ø¨Ø®ÙˆØ§Ù†Ø¯ Ùˆ Ø¨Ø±Ù‚ØµØ¯." }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù… Ø¯Ø±Ø¨Ø§Ø±Ù‡ ØªØ±ØªÛŒØ¨ ÙØ¹ل!",
        text: "Ø¨Ø§ Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡ (und, aber, oder, denn) ÙØ¹ل Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Ø¯ÙˆÙ… Ù…ÛŒâ€ŒÙ…Ø§Ù†Ø¯. Ø§Ù…Ø§ Ø¨Ø§ Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù¾ÛŒØ±Ùˆ (dass, weil) ÙØ¹ل Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯. Ø§ÛŒÙ† Ù…Ù‡Ù…â€ŒØªØ±ÛŒÙ† ØªÙØ§ÙˆØª Ø§Ø³Øª!"
      },
      {
        type: "table",
        title: "Ù…Ù‚Ø§ÛŒØ³Ù‡: Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡ Ø¯Ø± Ù…Ù‚Ø§Ø¨ل Ù¾ÛŒØ±Ùˆ",
        rows: [
          { de: "Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡: ÙØ¹ل Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û²", fa: "Ich bin mÃ¼de, aber ich arbeite weiter." },
          { de: "Ù¾ÛŒØ±Ùˆ: ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø±", fa: "Ich weiÃŸ, dass er mÃ¼de ist." },
          { de: "Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡: Ø¯Ùˆ Ø¬Ù…لÙ‡ Ù…Ø³ØªÙ‚ل", fa: "Ù‡Ø± Ø¬Ù…لÙ‡ Ù…Ø¹Ù†Ø§ÛŒ Ú©Ø§Ù…ل Ø¯Ø§Ø±Ø¯" },
          { de: "Ù¾ÛŒØ±Ùˆ: Ø¬Ù…لÙ‡ Ø¯ÙˆÙ… ÙˆØ§Ø¨Ø³ØªÙ‡ Ø§Ø³Øª", fa: "Ø¨Ø¯ÙˆÙ† Ø¬Ù…لÙ‡ Ø§Ùˆل Ù†Ø§Ù‚Øµ Ø§Ø³Øª" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ø±Ø§ Ø¨Ø´Ù†Ø§Ø³ÛŒØ¯",
        questions: [
          {
            question: "Ú©Ø¯Ø§Ù… Ø­Ø±Ù Ø±Ø¨Ø· Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ø¯لÛŒل Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Welche Konjunktion zeigt einen Grund?",
            options: [
              { text: "denn", isCorrect: true },
              { text: "aber", isCorrect: false },
              { text: "oder", isCorrect: false },
              { text: "und", isCorrect: false }
            ],
            explanation: "Ø­Ø±Ù Ø±Ø¨Ø· denn Ø¨Ù‡ Ù…Ø¹Ù†Ø§ÛŒ Â«Ø²ÛŒØ±Ø§Â» Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ø¯لÛŒل Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          },
          {
            question: "Ø¨Ø¹Ø¯ Ø§Ø² Ø­Ø±Ù Ø±Ø¨Ø· Â«aberÂ» ÙØ¹ل Ú©Ø¬Ø§ Ù…ÛŒâ€ŒØ±ÙˆØ¯ØŸ",
            questionDe: "Wo steht das Verb nach لaberل?",
            options: [
              { text: "Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Ø¯ÙˆÙ…", isCorrect: true },
              { text: "Ø¯Ø± Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡", isCorrect: false },
              { text: "Ù‚Ø¨ل Ø§Ø² ÙØ§Ø¹ل", isCorrect: false },
              { text: "Ø¨Ø¹Ø¯ Ø§Ø² Ù…ÙØ¹Ùˆل", isCorrect: false }
            ],
            explanation: "Ø¨Ø§ Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡ ÙØ¹ل Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Ø¯ÙˆÙ… Ù…ÛŒâ€ŒÙ…Ø§Ù†Ø¯."
          },
          {
            question: "Â«sondernÂ» Ú©Ø¬Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wann verwendet man لsondernل?",
            options: [
              { text: "Ø¨Ø¹Ø¯ Ø§Ø² Ø¬Ù…لÙ‡ Ù†ÙÛŒ", isCorrect: true },
              { text: "Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ø¯لÛŒل", isCorrect: false },
              { text: "Ø¨Ø±Ø§ÛŒ Ø³Ø¤Ø§ل Ù¾Ø±Ø³ÛŒØ¯Ù†", isCorrect: false },
              { text: "Ø¨Ø±Ø§ÛŒ Ø´Ø±ÙˆØ¹ Ø¬Ù…لÙ‡", isCorrect: false }
            ],
            explanation: "sondern Ø¨Ø¹Ø¯ Ø§Ø² Ø¬Ù…لÙ‡ Ù†ÙÛŒ Ù…ÛŒâ€ŒØ¢ÛŒØ¯: Ù†Ù‡ A Ø¨لÚ©Ù‡ B."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ù…Ù†Ø§Ø³Ø¨ Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯",
        instruction: "Ø­Ø±Ù Ø±Ø¨Ø· Ù…Ù†Ø§Ø³Ø¨ Ø±Ø§ Ø¯Ø± Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯ (und, aber, oder, denn, sondern).",
        blanks: [
          { sentence: "Ich trinke Tee ___ esse Brot.", answer: "und", hint: "Ø§Ø¶Ø§ÙÙ‡ Ú©Ø±Ø¯Ù†: Ú†Ø§ÛŒ Ùˆ Ù†Ø§Ù†" },
          { sentence: "Er ist alt, ___ sehr aktiv.", answer: "aber", hint: "ØªØ¶Ø§Ø¯: Ù¾ÛŒØ± Ø§Ù…Ø§ ÙØ¹Ø§ل" },
          { sentence: "Gehst du links ___ rechts?", answer: "oder", hint: "Ø§Ù†ØªØ®Ø§Ø¨: Ú†Ù¾ ÛŒØ§ Ø±Ø§Ø³Øª" },
          { sentence: "Sie bleibt zu Hause, ___ sie ist krank.", answer: "denn", hint: "Ø¯لÛŒل: Ø²ÛŒØ±Ø§ Ø¨ÛŒÙ…Ø§Ø± Ø§Ø³Øª" },
          { sentence: "Er trinkt keinen Kaffee, ___ Tee.", answer: "sondern", hint: "Ù†ÙÛŒ Ùˆ ØªØ£ÛŒÛŒØ¯: Ù†Ù‡ Ù‚Ù‡ÙˆÙ‡ Ø¨لÚ©Ù‡ Ú†Ø§ÛŒ" },
          { sentence: "Wir spielen FuÃŸball ___ Basketball.", answer: "oder", hint: "Ø§Ù†ØªØ®Ø§Ø¨: ÙÙˆØªØ¨Ø§ل ÛŒØ§ Ø¨Ø³Ú©ØªØ¨Ø§ل" },
          { sentence: "Das Buch ist interessant, ___ lang.", answer: "aber", hint: "ØªØ¶Ø§Ø¯: Ø¬Ø§لØ¨ Ø§Ù…Ø§ Ø·ÙˆلØ§Ù†ÛŒ" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ùˆ ÙˆØ§Ú˜Ú¯Ø§Ù† Ù…Ø±ØªØ¨Ø·",
        words: [
          { de: "und", fa: "ÙˆØŒ Ùˆ Ù‡Ù…Ú†Ù†ÛŒÙ†", article: "-", plural: "-", examples: [{ de: "Er und ich spielen FuÃŸball.", fa: "Ø§Ùˆ Ùˆ Ù…Ù† ÙÙˆØªØ¨Ø§ل Ø¨Ø§Ø²ÛŒ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…." }] },
          { de: "aber", fa: "Ø§Ù…Ø§ØŒ ÙˆلÛŒ", article: "-", plural: "-", examples: [{ de: "Sie ist klein, aber stark.", fa: "Ø§Ùˆ Ú©ÙˆØªØ§Ù‡ Ø§Ø³ØªØŒ Ø§Ù…Ø§ Ù‚ÙˆÛŒ Ø§Ø³Øª." }] },
          { de: "oder", fa: "ÛŒØ§", article: "-", plural: "-", examples: [{ de: "Kaffee oder Tee?", fa: "Ù‚Ù‡ÙˆÙ‡ ÛŒØ§ Ú†Ø§ÛŒØŸ" }] },
          { de: "denn", fa: "Ø²ÛŒØ±Ø§ØŒ Ú†ÙˆÙ†", article: "-", plural: "-", examples: [{ de: "Ich gehe schlafen, denn ich bin mÃ¼de.", fa: "Ù…ÛŒâ€ŒØ®ÙˆØ§Ø¨Ù…ØŒ Ø²ÛŒØ±Ø§ Ø®Ø³ØªÙ‡â€ŒØ§Ù…." }] },
          { de: "sondern", fa: "Ø¨لÚ©Ù‡", article: "-", plural: "-", examples: [{ de: "Nicht KÃ¤lte, sondern Hitze.", fa: "Ù†Ù‡ Ø³Ø±Ù…Ø§ØŒ Ø¨لÚ©Ù‡ Ú¯Ø±Ù…Ø§." }] },
          { de: "also", fa: "Ù¾Ø³ØŒ Ø¨Ù†Ø§Ø¨Ø±Ø§ÛŒÙ†", article: "-", plural: "-", examples: [{ de: "Es regnet, also bleiben wir drinnen.", fa: "Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¢ÛŒØ¯ØŒ Ù¾Ø³ Ø¯Ø§Ø®ل Ù…ÛŒâ€ŒÙ…Ø§Ù†ÛŒÙ…." }] },
          { de: "trotzdem", fa: "Ø¨Ø§ Ø§ÛŒÙ† Ø­Ø§ل", article: "-", plural: "-", examples: [{ de: "Er ist mÃ¼de, trotzdem arbeitet er.", fa: "Ø§Ùˆ Ø®Ø³ØªÙ‡ Ø§Ø³ØªØŒ Ø¨Ø§ Ø§ÛŒÙ† Ø­Ø§ل Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "auÃŸerdem", fa: "Ø¹لØ§ÙˆÙ‡ Ø¨Ø± Ø§ÛŒÙ†", article: "-", plural: "-", examples: [{ de: "AuÃŸerdem brauche ich Brot.", fa: "Ø¹لØ§ÙˆÙ‡ Ø¨Ø± Ø§ÛŒÙ† Ù†Ø§Ù† لØ§Ø²Ù… Ø¯Ø§Ø±Ù…." }] },
          { de: "zuerst", fa: "Ø§ÙˆلØŒ Ø¯Ø± Ø§Ø¨ØªØ¯Ø§", article: "-", plural: "-", examples: [{ de: "Zuerst frÃ¼hstÃ¼cke ich.", fa: "Ø§Ùˆل ØµØ¨Ø­Ø§Ù†Ù‡ Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…." }] },
          { de: "dann", fa: "Ø¨Ø¹Ø¯ØŒ Ø³Ù¾Ø³", article: "-", plural: "-", examples: [{ de: "Dann gehe ich zur Arbeit.", fa: "Ø¨Ø¹Ø¯ Ø¨Ù‡ Ø³Ø± Ú©Ø§Ø± Ù…ÛŒâ€ŒØ±ÙˆÙ…." }] },
          { de: "danach", fa: "Ø¨Ø¹Ø¯ Ø§Ø² Ø¢Ù†", article: "-", plural: "-", examples: [{ de: "Danach mache ich Hausaufgaben.", fa: "Ø¨Ø¹Ø¯ Ø§Ø² Ø¢Ù† ØªÚ©لÛŒÙ Ù…ÛŒâ€ŒÙ†ÙˆÛŒØ³Ù…." }] },
          { de: "zum Beispiel", fa: "Ø¨Ø±Ø§ÛŒ Ù…Ø«Ø§ل", article: "-", plural: "-", examples: [{ de: "Ich mag Sport, zum Beispiel Tennis.", fa: "ÙˆØ±Ø²Ø´ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù…ØŒ Ù…Ø«لØ§Ù‹ ØªÙ†ÛŒØ³." }] },
          { de: "zwar", fa: "Ù‡Ø±Ú†Ù†Ø¯", article: "-", plural: "-", examples: [{ de: "Er ist zwar jung, aber erfahren.", fa: "Ù‡Ø±Ú†Ù†Ø¯ Ø¬ÙˆØ§Ù† Ø§Ø³ØªØŒ Ø§Ù…Ø§ Ø¨Ø§ØªØ¬Ø±Ø¨Ù‡ Ø§Ø³Øª." }] },
          { de: "nÃ¤mlich", fa: "ÛŒØ¹Ù†ÛŒØŒ Ø¨Ù‡ Ø§ÛŒÙ† Ø¯لÛŒل Ú©Ù‡", article: "-", plural: "-", examples: [{ de: "Ich komme spÃ¤ter, ich bin nÃ¤mlich mÃ¼de.", fa: "Ø¯ÛŒØ±ØªØ± Ù…ÛŒâ€ŒØ¢ÛŒÙ…ØŒ ÛŒØ¹Ù†ÛŒ Ø®Ø³ØªÙ‡â€ŒØ§Ù…." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Am Samstag gehe ich mit meiner Freundin in die Stadt. Wir gehen zuerst in ein CafÃ© und trinken Kaffee. Das CafÃ© ist klein, aber sehr gemÃ¼tlich. Dann gehen wir einkaufen. Meine Freundin kauft ein neues Kleid, und ich kaufe ein Buch. Danach essen wir im Restaurant. Wir bestellen Pizza und Salat. Es schmeckt sehr gut! Am Abend gehen wir ins Kino, denn es gibt einen guten Film. Das war ein toller Tag!",
      questions: [
        { question: "Ø¢Ù†â€ŒÙ‡Ø§ Ø§Ø¨ØªØ¯Ø§ Ú©Ø¬Ø§ Ù…ÛŒâ€ŒØ±ÙˆÙ†Ø¯ØŸ", answer: "Ø¨Ù‡ Ú©Ø§ÙÙ‡ Ù…ÛŒâ€ŒØ±ÙˆÙ†Ø¯ Ùˆ Ù‚Ù‡ÙˆÙ‡ Ù…ÛŒâ€ŒÙ†ÙˆØ´Ù†Ø¯." },
        { question: "Ø¯ÙˆØ³Øª Ø§Ùˆ Ú†Ù‡ Ù…ÛŒâ€ŒØ®Ø±Ø¯ØŸ", answer: "ÛŒÚ© لØ¨Ø§Ø³ Ø¬Ø¯ÛŒØ¯ Ù…ÛŒâ€ŒØ®Ø±Ø¯." },
        { question: "Ú†Ø±Ø§ Ø¢Ù†â€ŒÙ‡Ø§ Ø´Ø¨ Ø¨Ù‡ Ø³ÛŒÙ†Ù…Ø§ Ù…ÛŒâ€ŒØ±ÙˆÙ†Ø¯ØŸ", answer: "Ø²ÛŒØ±Ø§ ÛŒÚ© ÙÛŒلÙ… Ø®ÙˆØ¨ Ù‡Ø³Øª." },
        { question: "Ø¢Ù†â€ŒÙ‡Ø§ Ø¯Ø± Ø±Ø³ØªÙˆØ±Ø§Ù† Ú†Ù‡ Ø³ÙØ§Ø±Ø´ Ù…ÛŒâ€ŒØ¯Ù‡Ù†Ø¯ØŸ", answer: "Ù¾ÛŒØªØ²Ø§ Ùˆ Ø³Ø§لØ§Ø¯." }
      ]
    }
  ],
  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† ÛŒÚ© Ø±ÙˆØ² Ù…Ø¹Ù…ÙˆلÛŒ",
      prompt: "ÛŒÚ© Ø±ÙˆØ² Ù…Ø¹Ù…ÙˆلÛŒ Ø®ÙˆØ¯ Ø±Ø§ ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯. Ø§Ø² Ø­Ø¯Ø§Ù‚ل Û´ Ø­Ø±Ù Ø±Ø¨Ø· Ù…Ø®ØªلÙ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      steps: [
        { title: "Ù…Ø±Ø­لÙ‡ Û±: Ø´Ø±ÙˆØ¹ Ø±ÙˆØ²", text: "ØµØ¨Ø­ Ú†Ù‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯ØŸ Ø§Ø² zuerst Ùˆ dann Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Zuerst frÃ¼hstÃ¼cke ich, dann gehe ich zur Arbeit.", fa: "Ø§Ùˆل ØµØ¨Ø­Ø§Ù†Ù‡ Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…ØŒ Ø¨Ø¹Ø¯ Ø¨Ù‡ Ø³Ø± Ú©Ø§Ø± Ù…ÛŒâ€ŒØ±ÙˆÙ…." } },
        { title: "Ù…Ø±Ø­لÙ‡ Û²: ÙØ¹Ø§لÛŒØªâ€ŒÙ‡Ø§", text: "ÙØ¹Ø§لÛŒØªâ€ŒÙ‡Ø§ÛŒ Ø±ÙˆØ²Ø§Ù†Ù‡ Ø±Ø§ Ø¨Ø§ und Ùˆ aber Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.", example: { de: "Die Arbeit ist lang, aber interessant.", fa: "Ú©Ø§Ø± Ø·ÙˆلØ§Ù†ÛŒ Ø§Ø³ØªØŒ Ø§Ù…Ø§ Ø¬Ø§لØ¨ Ø§Ø³Øª." } },
        { title: "Ù…Ø±Ø­لÙ‡ Û³: Ø¹ØµØ± Ùˆ Ø´Ø¨", text: "Ø¹ØµØ± Ùˆ Ø´Ø¨ Ú†Ù‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯ØŸ Ø§Ø² denn Ùˆ danach Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Danach mache ich Sport, denn ich will fit bleiben.", fa: "Ø¨Ø¹Ø¯ ÙˆØ±Ø²Ø´ Ù…ÛŒâ€ŒÚ©Ù†Ù…ØŒ Ø²ÛŒØ±Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ø¢Ù…Ø§Ø¯Ù‡ Ø¨Ù…Ø§Ù†Ù…." } }
      ],
      modelAnswer: "Zuerst frÃ¼hstÃ¼cke ich um sieben Uhr. Ich trinke Kaffee und esse Brot. Dann gehe ich zur Arbeit. Die Arbeit ist lang, aber interessant. Danach esse ich zu Mittag. Ich esse Suppe und Salat. Am Nachmittag arbeite ich noch, denn ich habe viel zu tun. Am Abend koche ich das Abendessen, und danach sehe ich fern. Manchmal lese ich auch ein Buch, denn ich mag BÃ¼cher. Um elf Uhr gehe ich schlafen."
    }
  ],
  listening: [
    {
      title: "Ø­Ø±ÙˆÙ Ø±Ø¨Ø· Ø¯Ø± Ù…Ú©Ø§لÙ…Ù‡",
      source: "Deutsch lernen - Konjunktionen",
      link: "https://www.youtube.com/watch?v=0D34GQ-MSgs",
      instructions: "Ø¨Ù‡ Ø§ÛŒÙ† ÙˆÛŒØ¯ÛŒÙˆ Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ ØªÙˆØ¬Ù‡ Ú©Ù†ÛŒØ¯ Ú©Ù‡ Ø­Ø±ÙˆÙ Ø±Ø¨Ø· und, aber, oder, denn Ú†Ú¯ÙˆÙ†Ù‡ Ø¯Ø± Ø¬Ù…لØ§Øª Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯. Ø­Ø¯Ø§Ù‚ل Ûµ Ù…Ø«Ø§ل Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯."
    }
  ],
  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ù…Ú©Ø§لÙ…Ù‡ Ø¨Ø§ Ø­Ø±ÙˆÙ Ø±Ø¨Ø·",
      pattern: "A: Trinkst du Kaffee oder Tee? B: Ich trinke Kaffee, denn ich mag den Geschmack. Aber manchmal trinke ich auch Tee.",
      exercise: "ÛŒÚ© Ù…Ú©Ø§لÙ…Ù‡ Ú©ÙˆØªØ§Ù‡ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¹Ø§Ø¯Ø§Øª ØºØ°Ø§ÛŒÛŒ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯. Ø§Ø² Ø­Ø±ÙˆÙ Ø±Ø¨Ø· aber, oder, denn Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯."
    }
  ],
  cultureTip: "Ø¯Ø± ÙØ±Ù‡Ù†Ú¯ Ø¢لÙ…Ø§Ù†ÛŒØŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Ø­Ø±ÙˆÙ Ø±Ø¨Ø· ØµØ­ÛŒØ­ Ù†Ø´Ø§Ù†â€ŒØ¯Ù‡Ù†Ø¯Ù‡ Ù†Ø¸Ù… ÙÚ©Ø±ÛŒ Ø§Ø³Øª. Ø¹Ø¨Ø§Ø±Øª Â«alsoÂ» Ø¯Ø± Ù…Ú©Ø§لÙ…Ø§Øª Ø±ÙˆØ²Ù…Ø±Ù‡ Ø¨Ø³ÛŒØ§Ø± Ø±Ø§ÛŒØ¬ Ø§Ø³Øª Ùˆ Ø¨Ø±Ø§ÛŒ Ù†ØªÛŒØ¬Ù‡â€ŒÚ¯ÛŒØ±ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯. Ø¢لÙ…Ø§Ù†ÛŒâ€ŒÙ‡Ø§ ØªØ±Ø¬ÛŒØ­ Ù…ÛŒâ€ŒØ¯Ù‡Ù†Ø¯ Ø¯لØ§ÛŒل Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ø§ denn Ø¨ÛŒØ§Ù† Ú©Ù†Ù†Ø¯ØŒ Ù†Ù‡ ÙÙ‚Ø· Ø¬Ù…لÙ‡â€ŒÙ‡Ø§ÛŒ Ø³Ø§Ø¯Ù‡ Ø±Ø¯ÛŒÙ Ú©Ù†Ù†Ø¯.",
  examData: {
    questions: [
      { question: "Ú©Ø¯Ø§Ù… Ø­Ø±Ù Ø±Ø¨Ø· Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ø¯لÛŒل Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["aber", "denn", "oder", "und"], answer: 1 },
      { question: "ØªØ±ØªÛŒØ¨ ÙØ¹ل Ø¨Ø¹Ø¯ Ø§Ø² Ø­Ø±Ù Ø±Ø¨Ø· und Ú†Ú¯ÙˆÙ†Ù‡ Ø§Ø³ØªØŸ", options: ["ÙØ¹ل Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ Ù…ÛŒâ€ŒØ±ÙˆØ¯", "ÙØ¹ل Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Ø¯ÙˆÙ… Ù…ÛŒâ€ŒÙ…Ø§Ù†Ø¯", "ÙØ¹ل Ø§Ùˆل Ù…ÛŒâ€ŒØ¢ÛŒØ¯", "ÙØ¹ل Ø­Ø°Ù Ù…ÛŒâ€ŒØ´ÙˆØ¯"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich bin mÃ¼de, aber arbeite ich.", "Ich bin mÃ¼de, aber ich arbeite.", "Ich bin mÃ¼de, arbeite aber ich.", "Ich bin mÃ¼de, ich aber arbeite."], answer: 1 },
      { question: "sondern Ø¨Ø¹Ø¯ Ø§Ø² Ú†Ù‡ Ù†ÙˆØ¹ Ø¬Ù…لÙ‡â€ŒØ§ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ø¬Ù…لÙ‡ Ø³Ø¤Ø§لÛŒ", "Ø¬Ù…لÙ‡ Ù†ÙÛŒ", "Ø¬Ù…لÙ‡ Ø§Ù…Ø±ÛŒ", "Ø¬Ù…لÙ‡ Ø´Ø±Ø·ÛŒ"], answer: 1 },
      { question: "Ø­Ø±Ù Ø±Ø¨Ø· oder Ú†Ù‡ Ù…Ø¹Ù†Ø§ÛŒÛŒ Ø¯Ø§Ø±Ø¯ØŸ", options: ["Ø§Ù…Ø§", "Ø²ÛŒØ±Ø§", "ÛŒØ§", "Ùˆ"], answer: 2 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ Ø§Ø² Ù†Ø¸Ø± Ú¯Ø±Ø§Ù…Ø±ÛŒ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Er trinkt nicht Kaffee, sondern Tee.", "Er trinkt nicht Kaffee, aber Tee.", "Er trinkt nicht Kaffee, denn Tee.", "Er trinkt nicht Kaffee, oder Tee."], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ú¯Ø²ÛŒÙ†Ù‡ Ø­Ø±Ù Ø±Ø¨Ø· Ù‡Ù…â€ŒÙ¾Ø§ÛŒÙ‡ Ù†ÛŒØ³ØªØŸ", options: ["und", "dass", "aber", "oder"], answer: 1 },
      { question: "Ø¯Ø± Ø¬Ù…لÙ‡ Â«Es regnet, ___ bleiben wir zu Hause.Â» Ú©Ø¯Ø§Ù… Ù…Ù†Ø§Ø³Ø¨ Ø§Ø³ØªØŸ", options: ["aber", "und", "denn", "oder"], answer: 2 },
      { question: "Â«alsoÂ» Ø¨Ù‡ Ú†Ù‡ Ù…Ø¹Ù†Ø§Ø³ØªØŸ", options: ["Ø§Ù…Ø§", "Ù¾Ø³/Ø¨Ù†Ø§Ø¨Ø±Ø§ÛŒÙ†", "Ø²ÛŒØ±Ø§", "ÛŒØ§"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Sie singt, und tanzt sie.", "Sie singt und tanzt.", "Sie singt, und sie tanzt.", "Ù‡Ø± Ø¯Ùˆ Ú¯Ø²ÛŒÙ†Ù‡ Û² Ùˆ Û³"], answer: 3 }
    ]
  }
};
