export const day16Data = {
  title: "Ø±ÙˆØ² Û±Û¶: Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ (Trennbare Verben)",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ØŒ Ù†Ø­ÙˆÙ‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ùˆ ØªÙ…Ø±ÛŒÙ† Ø¬Ù…لÙ‡â€ŒØ³Ø§Ø²ÛŒ Ø¨Ø§ Ø¢Ù†Ù‡Ø§",
  grammarData: {
    subtitle: "Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ",
    content: [
      {
        type: "text",
        title: "Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ú†ÛŒØ³ØªØŸ",
        text: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒØŒ Ø¨Ø³ÛŒØ§Ø±ÛŒ Ø§Ø² Ø§ÙØ¹Ø§ل Ø¨Ø§ ÛŒÚ© Ù¾ÛŒØ´ÙˆÙ†Ø¯ (prefix) Ø´Ø±ÙˆØ¹ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯ Ú©Ù‡ Ø¯Ø± Ø¬Ù…لÙ‡ Ø³Ø§Ø¯Ù‡ Ø§Ø² ÙØ¹ل Ø¬Ø¯Ø§ Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ùˆ Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯. Ù…Ø«لØ§Ù‹: aufstehen â†’ Ich stehe um 7 Uhr auf (Ù…Ù† Ø³Ø§Ø¹Øª Û· Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆÙ…). Ù¾ÛŒØ´ÙˆÙ†Ø¯ لaufل Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ø±ÙØªÙ‡ Ø§Ø³Øª."
      },
      {
        type: "table",
        title: "Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ø±Ø§ÛŒØ¬",
        rows: [
          { de: "aufstehen (auf + stehen)", fa: "Ø¨لÙ†Ø¯ Ø´Ø¯Ù†" },
          { de: "ankommen (an + kommen)", fa: "Ø±Ø³ÛŒØ¯Ù†" },
          { de: "einkaufen (ein + kaufen)", fa: "Ø®Ø±ÛŒØ¯ Ú©Ø±Ø¯Ù†" },
          { de: "fernsehen (fern + sehen)", fa: "ØªلÙˆÛŒØ²ÛŒÙˆÙ† ØªÙ…Ø§Ø´Ø§ Ú©Ø±Ø¯Ù†" },
          { de: "aufmachen (auf + machen)", fa: "Ø¨Ø§Ø² Ú©Ø±Ø¯Ù†" },
          { de: "zumachen (zu + machen)", fa: "Ø¨Ø³ØªÙ†" },
          { de: "anfangen (an + fangen)", fa: "Ø´Ø±ÙˆØ¹ Ú©Ø±Ø¯Ù†" },
          { de: "aufhÃ¶ren (auf + hÃ¶ren)", fa: "Ù…ØªÙˆÙ‚Ù Ú©Ø±Ø¯Ù†" },
          { de: "mitkommen (mit + kommen)", fa: "Ù‡Ù…Ø±Ø§Ù‡ Ø¢Ù…Ø¯Ù†" },
          { de: "zurÃ¼ckkommen (zurÃ¼ck + kommen)", fa: "Ø¨Ø§Ø²Ú¯Ø´ØªÙ†" },
          { de: "abfahren (ab + fahren)", fa: "Ø­Ø±Ú©Øª Ú©Ø±Ø¯Ù† (Ù‚Ø·Ø§Ø±/Ø§ØªÙˆØ¨ÙˆØ³)" },
          { de: "aussteigen (aus + steigen)", fa: "Ù¾ÛŒØ§Ø¯Ù‡ Ø´Ø¯Ù†" },
          { de: "einsteigen (ein + steigen)", fa: "Ø³ÙˆØ§Ø± Ø´Ø¯Ù†" },
          { de: "vorstellen (vor + stellen)", fa: "Ù…Ø¹Ø±ÙÛŒ Ú©Ø±Ø¯Ù†" }
        ]
      },
      {
        type: "text",
        title: "Ù†Ø­ÙˆÙ‡ Ø³Ø§Ø®Øª Ø¬Ù…لÙ‡ Ø¨Ø§ Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡",
        text: "Ø¯Ø± Ø¬Ù…لÙ‡ Ø³Ø§Ø¯Ù‡: Ù¾ÛŒØ´ÙˆÙ†Ø¯ Ø¬Ø¯Ø§ Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ùˆ Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯. Ich stehe um 7 Uhr auf. Ø¯Ø± Ø¬Ù…لÙ‡ Ø¨Ø§ Modalverb: Ù¾ÛŒØ´ÙˆÙ†Ø¯ Ø¬Ø¯Ø§ Ù†Ù…ÛŒâ€ŒØ´ÙˆØ¯. Ich muss um 7 Uhr aufstehen. Ø¯Ø± Ø¬Ù…لÙ‡ Ø³ÙˆØ§لÛŒ: Stehst du um 7 Uhr auf?"
      },
      {
        type: "examples",
        title: "Ø¬Ù…لØ§Øª Ø¨Ø§ Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡",
        items: [
          { de: "Ich stehe um 7 Uhr auf.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û· Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆÙ…." },
          { de: "Der Zug kommt um 14 Uhr an.", fa: "Ù‚Ø·Ø§Ø± Ø³Ø§Ø¹Øª Û±Û´ Ù…ÛŒâ€ŒØ±Ø³Ø¯." },
          { de: "Wir kaufen im Supermarkt ein.", fa: "Ù…Ø§ Ø¯Ø± Ø³ÙˆÙ¾Ø±Ù…Ø§Ø±Ú©Øª Ø®Ø±ÛŒØ¯ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…." },
          { de: "Er sieht jeden Abend fern.", fa: "Ø§Ùˆ Ù‡Ø± Ø´Ø¨ ØªلÙˆÛŒØ²ÛŒÙˆÙ† ØªÙ…Ø§Ø´Ø§ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
          { de: "Mach bitte das Fenster auf!", fa: "لØ·ÙØ§Ù‹ Ù¾Ù†Ø¬Ø±Ù‡ Ø±Ø§ Ø¨Ø§Ø² Ú©Ù†!" },
          { de: "Die Schule fÃ¤ngt um 8 Uhr an.", fa: "Ù…Ø¯Ø±Ø³Ù‡ Ø³Ø§Ø¹Øª Û¸ Ø´Ø±ÙˆØ¹ Ù…ÛŒâ€ŒØ´ÙˆØ¯." },
          { de: "Ich komme gern mit.", fa: "Ù…Ù† Ø¨Ø§ Ú©Ù…Ø§ل Ù…ÛŒل Ù‡Ù…Ø±Ø§Ù‡ Ù…ÛŒâ€ŒØ¢ÛŒÙ…." },
          { de: "Wann fÃ¤hrt der Bus ab?", fa: "Ø§ØªÙˆØ¨ÙˆØ³ Ú†Ù‡ Ø³Ø§Ø¹ØªÛŒ Ø­Ø±Ú©Øª Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ" }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: Ø²Ù…Ø§Ù† Ú¯Ø°Ø´ØªÙ‡ Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡",
        text: "Ø¯Ø± Ø²Ù…Ø§Ù† Ú¯Ø°Ø´ØªÙ‡ (Perfekt)ØŒ Ù¾ÛŒØ´ÙˆÙ†Ø¯ Ø¨Ù‡ ÙØ¹ل Ú©Ù…Ú©ÛŒ Ù…ÛŒâ€ŒÚ†Ø³Ø¨Ø¯: aufstehen â†’ Ich bin aufgestanden. Ø§Ù…Ø§ Ø¯Ø± PrÃ¤teritumØŒ Ù¾ÛŒØ´ÙˆÙ†Ø¯ Ø¬Ø¯Ø§ Ù…ÛŒâ€ŒØ´ÙˆØ¯: Ich stand um 7 Uhr auf."
      },
      {
        type: "text",
        title: "ØªÙØ§ÙˆØª Ø¨Ø§ Ø§ÙØ¹Ø§ل ØºÛŒØ±Ù‚Ø§Ø¨ل ØªÙÚ©ÛŒÚ©",
        text: "Ø¨Ø¹Ø¶ÛŒ Ø§ÙØ¹Ø§ل Ù¾ÛŒØ´ÙˆÙ†Ø¯ Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ù†Ø¯Ø§Ø±Ù†Ø¯ Ùˆ Ù¾ÛŒØ´ÙˆÙ†Ø¯ Ù‡Ù…ÛŒØ´Ù‡ Ø¨Ù‡ ÙØ¹ل Ú†Ø³Ø¨ÛŒØ¯Ù‡ Ø§Ø³Øª Ù…Ø«ل: verstehen (ÙÙ‡Ù…ÛŒØ¯Ù†)ØŒ gefallen (Ø®ÙˆØ´ Ø¢Ù…Ø¯Ù†)ØŒ gehÃ¶ren (ØªØ¹لÙ‚ Ø¯Ø§Ø´ØªÙ†). Ø§ÛŒÙ† Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§ Ù†Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯."
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ†: Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡",
        questions: [
          {
            question: "ÙØ¹ل لaufstehenل Ø¯Ø± Ø¬Ù…لÙ‡ Ø³Ø§Ø¯Ù‡ Ú†Ú¯ÙˆÙ†Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie wird لaufstehenل im einfachen Satz verwendet?",
            options: [
              { text: "Ich stehe um 7 Uhr auf.", isCorrect: true },
              { text: "Ich aufstehe um 7 Uhr.", isCorrect: false },
              { text: "Ich stehe auf um 7 Uhr.", isCorrect: false },
              { text: "Ich aufstehe um 7 Uhr auf.", isCorrect: false }
            ],
            explanation: "Ø¯Ø± Ø¬Ù…لÙ‡ Ø³Ø§Ø¯Ù‡ØŒ Ù¾ÛŒØ´ÙˆÙ†Ø¯ Ø¬Ø¯Ø§ Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ùˆ Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯."
          },
          {
            question: "لÙ‚Ø·Ø§Ø± Ø³Ø§Ø¹Øª Û±Û´ Ù…ÛŒâ€ŒØ±Ø³Ø¯ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man لthe train arrives at 2 PMل?",
            options: [
              { text: "Der Zug kommt um 14 Uhr an.", isCorrect: true },
              { text: "Der Zug ankommt um 14 Uhr.", isCorrect: false },
              { text: "Der Zug kommt an um 14 Uhr.", isCorrect: false },
              { text: "Der Zug ankommt um 14 Uhr an.", isCorrect: false }
            ],
            explanation: "Ø§Ø² ÙØ¹ل ankommen Ø¨Ø§ Ù¾ÛŒØ´ÙˆÙ†Ø¯ an Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          },
          {
            question: "لÙ…Ù† Ù‡Ø± Ø´Ø¨ ØªلÙˆÛŒØ²ÛŒÙˆÙ† ØªÙ…Ø§Ø´Ø§ Ù…ÛŒâ€ŒÚ©Ù†Ù…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man لI watch TV every eveningل?",
            options: [
              { text: "Ich sehe jeden Abend fern.", isCorrect: true },
              { text: "Ich fernsehe jeden Abend.", isCorrect: false },
              { text: "Ich sehe fern jeden Abend.", isCorrect: false },
              { text: "Ich fernsehen jeden Abend.", isCorrect: false }
            ],
            explanation: "Ø§Ø² ÙØ¹ل fernsehen Ø¨Ø§ Ù¾ÛŒØ´ÙˆÙ†Ø¯ fern Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÚ©Ù…ÛŒل Ø¬Ù…لØ§Øª: Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡",
        instruction: "Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø±Ø§ Ø¨Ø§ Ø´Ú©ل ØµØ­ÛŒØ­ ÙØ¹ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ù¾Ø± Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Ich ___ um 7 Uhr ___. (aufstehen)", answer: "stehe ... auf", hint: "Ø¨لÙ†Ø¯ Ø´Ø¯Ù†" },
          { sentence: "Der Zug ___ um 14 Uhr ___. (ankommen)", answer: "kommt ... an", hint: "Ø±Ø³ÛŒØ¯Ù†" },
          { sentence: "Wir ___ im Supermarkt ___. (einkaufen)", answer: "kaufen ... ein", hint: "Ø®Ø±ÛŒØ¯ Ú©Ø±Ø¯Ù†" },
          { sentence: "Er ___ jeden Abend ___. (fernsehen)", answer: "sieht ... fern", hint: "ØªلÙˆÛŒØ²ÛŒÙˆÙ† ØªÙ…Ø§Ø´Ø§ Ú©Ø±Ø¯Ù†" },
          { sentence: "Mach bitte das Fenster ___. (aufmachen)", answer: "auf", hint: "Ø¨Ø§Ø² Ú©Ø±Ø¯Ù†" },
          { sentence: "Die Schule ___ um 8 Uhr ___. (anfangen)", answer: "fÃ¤ngt ... an", hint: "Ø´Ø±ÙˆØ¹ Ú©Ø±Ø¯Ù†" },
          { sentence: "Ich ___ gern ___. (mitkommen)", answer: "komme ... mit", hint: "Ù‡Ù…Ø±Ø§Ù‡ Ø¢Ù…Ø¯Ù†" },
          { sentence: "Wann ___ der Bus ___? (abfahren)", answer: "fÃ¤hrt ... ab", hint: "Ø­Ø±Ú©Øª Ú©Ø±Ø¯Ù†" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ø±Ø§ÛŒØ¬",
        words: [
          { de: "aufstehen", fa: "Ø¨لÙ†Ø¯ Ø´Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich stehe um 6 Uhr auf.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û¶ Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆÙ…." }] },
          { de: "ankommen", fa: "Ø±Ø³ÛŒØ¯Ù†", article: "-", plural: "-", examples: [{ de: "Der Zug kommt pÃ¼nktlich an.", fa: "Ù‚Ø·Ø§Ø± Ø¨Ù‡ Ù…ÙˆÙ‚Ø¹ Ù…ÛŒâ€ŒØ±Ø³Ø¯." }] },
          { de: "einkaufen", fa: "Ø®Ø±ÛŒØ¯ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Wir kaufen im Supermarkt ein.", fa: "Ù…Ø§ Ø¯Ø± Ø³ÙˆÙ¾Ø±Ù…Ø§Ø±Ú©Øª Ø®Ø±ÛŒØ¯ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…." }] },
          { de: "fernsehen", fa: "ØªلÙˆÛŒØ²ÛŒÙˆÙ† ØªÙ…Ø§Ø´Ø§ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Er sieht gern fern.", fa: "Ø§Ùˆ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ø¯ ØªلÙˆÛŒØ²ÛŒÙˆÙ† ØªÙ…Ø§Ø´Ø§ Ú©Ù†Ø¯." }] },
          { de: "aufmachen", fa: "Ø¨Ø§Ø² Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Mach das Fenster auf!", fa: "Ù¾Ù†Ø¬Ø±Ù‡ Ø±Ø§ Ø¨Ø§Ø² Ú©Ù†!" }] },
          { de: "zumachen", fa: "Ø¨Ø³ØªÙ†", article: "-", plural: "-", examples: [{ de: "Mach die TÃ¼r zu!", fa: "Ø¯Ø± Ø±Ø§ Ø¨Ø¨Ù†Ø¯!" }] },
          { de: "anfangen", fa: "Ø´Ø±ÙˆØ¹ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Die Veranstaltung fÃ¤ngt um 19 Uhr an.", fa: "Ù…Ø±Ø§Ø³Ù… Ø³Ø§Ø¹Øª Û±Û¹ Ø´Ø±ÙˆØ¹ Ù…ÛŒâ€ŒØ´ÙˆØ¯." }] },
          { de: "aufhÃ¶ren", fa: "Ù…ØªÙˆÙ‚Ù Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Es hÃ¶rt auf zu regnen.", fa: "Ø¨Ø§Ø±Ø§Ù† Ø¨Ù†Ø¯ Ù…ÛŒâ€ŒØ¢ÛŒØ¯." }] },
          { de: "mitkommen", fa: "Ù‡Ù…Ø±Ø§Ù‡ Ø¢Ù…Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Kommst du mit?", fa: "Ø¢ÛŒØ§ Ù‡Ù…Ø±Ø§Ù‡ Ù…ÛŒâ€ŒØ¢ÛŒÛŒØŸ" }] },
          { de: "zurÃ¼ckkommen", fa: "Ø¨Ø§Ø²Ú¯Ø´ØªÙ†", article: "-", plural: "-", examples: [{ de: "Ich komme morgen zurÃ¼ck.", fa: "Ù…Ù† ÙØ±Ø¯Ø§ Ø¨Ø±Ù…ÛŒâ€ŒÚ¯Ø±Ø¯Ù…." }] },
          { de: "abfahren", fa: "Ø­Ø±Ú©Øª Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Der Bus fÃ¤hrt um 8 Uhr ab.", fa: "Ø§ØªÙˆØ¨ÙˆØ³ Ø³Ø§Ø¹Øª Û¸ Ø­Ø±Ú©Øª Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "einsteigen", fa: "Ø³ÙˆØ§Ø± Ø´Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Bitte einsteigen!", fa: "لØ·ÙØ§Ù‹ Ø³ÙˆØ§Ø± Ø´ÙˆÛŒØ¯!" }] },
          { de: "aussteigen", fa: "Ù¾ÛŒØ§Ø¯Ù‡ Ø´Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Hier mÃ¼ssen Sie aussteigen.", fa: "Ø§ÛŒÙ†Ø¬Ø§ Ø¨Ø§ÛŒØ¯ Ù¾ÛŒØ§Ø¯Ù‡ Ø´ÙˆÛŒØ¯." }] },
          { de: "vorstellen", fa: "Ù…Ø¹Ø±ÙÛŒ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Darf ich mich vorstellen?", fa: "Ø¢ÛŒØ§ Ø§Ø¬Ø§Ø²Ù‡ Ù…Ø¹Ø±ÙÛŒ Ø®ÙˆØ¯Ù… Ø±Ø§ Ø¯Ø§Ø±Ù…ØŸ" }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Mein Tag: Ich stehe um 6:30 Uhr auf. Um 7 Uhr frÃ¼hstÃ¼cke ich. Um 7:30 Uhr steige ich in den Bus ein. Der Bus fÃ¤hrt um 7:45 Uhr ab. Ich komme um 8:15 Uhr an der Arbeit an. Um 12 Uhr mache ich Mittagspause. Um 17 Uhr hÃ¶re ich auf zu arbeiten. Um 17:30 Uhr steige ich aus dem Bus aus. Um 18 Uhr komme ich nach Hause zurÃ¼ck. Um 19 Uhr sehe ich fern. Um 22 Uhr mache ich das Licht aus und gehe ins Bett.",
      questions: [
        { question: "Ø§Ùˆ Ú†Ù‡ Ø³Ø§Ø¹ØªÛŒ Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", answer: "Ø§Ùˆ Ø³Ø§Ø¹Øª Û¶:Û³Û° Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆØ¯." },
        { question: "Ø§Ùˆ Ú†Ù‡ Ø³Ø§Ø¹ØªÛŒ Ø³ÙˆØ§Ø± Ø§ØªÙˆØ¨ÙˆØ³ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", answer: "Ø§Ùˆ Ø³Ø§Ø¹Øª Û·:Û³Û° Ø³ÙˆØ§Ø± Ø§ØªÙˆØ¨ÙˆØ³ Ù…ÛŒâ€ŒØ´ÙˆØ¯." },
        { question: "Ø§Ùˆ Ú†Ù‡ Ø³Ø§Ø¹ØªÛŒ Ø¨Ù‡ Ø³Ø± Ú©Ø§Ø± Ù…ÛŒâ€ŒØ±Ø³Ø¯ØŸ", answer: "Ø§Ùˆ Ø³Ø§Ø¹Øª Û¸:Û±Ûµ Ø¨Ù‡ Ø³Ø± Ú©Ø§Ø± Ù…ÛŒâ€ŒØ±Ø³Ø¯." },
        { question: "Ø§Ùˆ Ú†Ù‡ Ø³Ø§Ø¹ØªÛŒ Ø§Ø² Ú©Ø§Ø± Ø¯Ø³Øª Ù…ÛŒâ€ŒÚ©Ø´Ø¯ØŸ", answer: "Ø§Ùˆ Ø³Ø§Ø¹Øª Û±Û· Ø§Ø² Ú©Ø§Ø± Ø¯Ø³Øª Ù…ÛŒâ€ŒÚ©Ø´Ø¯." }
      ]
    }
  ],
  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡ Ø¨Ø§ Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡",
      prompt: "Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡ Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.",
      steps: [
        { title: "Ù‚Ø¯Ù… Ø§Ùˆل: ØµØ¨Ø­", text: "Ú©Ø§Ø±Ù‡Ø§ÛŒ ØµØ¨Ø­ Ø±Ø§ Ø¨Ø§ Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.", example: { de: "Ich stehe um 7 Uhr auf.", fa: "Ù…Ù† Ø³Ø§Ø¹Øª Û· Ø¨لÙ†Ø¯ Ù…ÛŒâ€ŒØ´ÙˆÙ…." } },
        { title: "Ù‚Ø¯Ù… Ø¯ÙˆÙ…: Ø±ÙˆØ²", text: "Ú©Ø§Ø±Ù‡Ø§ÛŒ Ø±ÙˆØ² Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.", example: { de: "Ich kaufe im Supermarkt ein.", fa: "Ù…Ù† Ø¯Ø± Ø³ÙˆÙ¾Ø±Ù…Ø§Ø±Ú©Øª Ø®Ø±ÛŒØ¯ Ù…ÛŒâ€ŒÚ©Ù†Ù…." } },
        { title: "Ù‚Ø¯Ù… Ø³ÙˆÙ…: Ø´Ø¨", text: "Ú©Ø§Ø±Ù‡Ø§ÛŒ Ø´Ø¨ Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.", example: { de: "Ich sehe am Abend fern.", fa: "Ù…Ù† Ø´Ø¨ ØªلÙˆÛŒØ²ÛŒÙˆÙ† ØªÙ…Ø§Ø´Ø§ Ù…ÛŒâ€ŒÚ©Ù†Ù…." } }
      ],
      modelAnswer: "Mein Tagesablauf:\n\nUm 6:30 Uhr stehe ich auf. Um 7 Uhr frÃ¼hstÃ¼cke ich. Um 7:30 Uhr steige ich in den Bus ein. Um 8 Uhr komme ich an der Arbeit an. Um 12 Uhr mache ich Mittagspause und kaufe im Supermarkt ein. Um 17 Uhr hÃ¶re ich auf zu arbeiten. Um 17:30 Uhr steige ich aus dem Bus aus. Um 18 Uhr komme ich nach Hause zurÃ¼ck. Um 19 Uhr sehe ich fern. Um 22 Uhr mache ich das Licht aus und gehe ins Bett."
    }
  ],
  listening: [
    {
      title: "Ú¯ÙˆØ´ Ø¯Ø§Ø¯Ù† Ø¨Ù‡ Ù…Ú©Ø§لÙ…Ù‡ Ø¨Ø§ Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡",
      source: "Deutsch lernen - Trennbare Verben",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "Ø¨Ù‡ Ù…Ú©Ø§لÙ…Ù‡ Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø´Ø¯Ù‡ Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
    }
  ],
  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡",
      pattern: "Ich [conjugated verb] [time/place] [prefix].",
      exercise: "Ø¬Ù…لØ§ØªÛŒ Ø¨Ø§ Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ø¨Ø³Ø§Ø²ÛŒØ¯ Ùˆ ØªÙ…Ø±ÛŒÙ† Ú©Ù†ÛŒØ¯."
    }
  ],
  cultureTip: "Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ø¨Ø³ÛŒØ§Ø± Ø±Ø§ÛŒØ¬ Ù‡Ø³ØªÙ†Ø¯ Ùˆ ØªØ³لØ· Ø¨Ø± Ø¢Ù†Ù‡Ø§ Ø¨Ø±Ø§ÛŒ Ù…Ú©Ø§لÙ…Ù‡ Ø±ÙˆØ²Ù…Ø±Ù‡ Ø¶Ø±ÙˆØ±ÛŒ Ø§Ø³Øª. Ø¯Ø± Ø²Ø¨Ø§Ù† Ø±ÙˆØ²Ù…Ø±Ù‡ Ø¢لÙ…Ø§Ù†ÛŒØŒ Ø¨Ø³ÛŒØ§Ø±ÛŒ Ø§Ø² Ú©Ø§Ø±Ù‡Ø§ÛŒ Ø±ÙˆØ²Ø§Ù†Ù‡ Ø¨Ø§ Ø§ÛŒÙ† Ø§ÙØ¹Ø§ل Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯. ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø§ÛŒÙ† Ø§ÙØ¹Ø§ل Ø¨Ù‡ Ø´Ù…Ø§ Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ø¯ ØªØ§ Ø·Ø¨ÛŒØ¹ÛŒâ€ŒØªØ± ØµØ­Ø¨Øª Ú©Ù†ÛŒØ¯.",
  examData: {
    questions: [
      { question: "لØ¨لÙ†Ø¯ Ø´Ø¯Ù†ل Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ Ú†ÛŒØ³ØªØŸ", options: ["aufstehen", "aufmachen", "einkaufen", "fernsehen"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich stehe um 7 Uhr auf.", "Ich aufstehe um 7 Uhr.", "Ich stehe auf um 7 Uhr.", "Ich aufstehe um 7 Uhr auf."], answer: 0 },
      { question: "لÙ‚Ø·Ø§Ø± Ø³Ø§Ø¹Øª Û±Û´ Ù…ÛŒâ€ŒØ±Ø³Ø¯ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Der Zug kommt um 14 Uhr an.", "Der Zug ankommt um 14 Uhr.", "Der Zug kommt an um 14 Uhr.", "Der Zug ankommt um 14 Uhr an."], answer: 0 },
      { question: "لØªلÙˆÛŒØ²ÛŒÙˆÙ† ØªÙ…Ø§Ø´Ø§ Ú©Ø±Ø¯Ù†ل Ú†Ú¯ÙˆÙ†Ù‡ Ú¯ÙØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["fernsehen", "aufstehen", "einkaufen", "ankommen"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… ÙØ¹ل Ø¬Ø¯Ø§Ø´ÙˆÙ†Ø¯Ù‡ Ù†ÛŒØ³ØªØŸ", options: ["verstehen", "aufstehen", "einkaufen", "fernsehen"], answer: 0 },
      { question: "لÙ…Ù† Ù‡Ø± Ø´Ø¨ ØªلÙˆÛŒØ²ÛŒÙˆÙ† ØªÙ…Ø§Ø´Ø§ Ù…ÛŒâ€ŒÚ©Ù†Ù…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich sehe jeden Abend fern.", "Ich fernsehe jeden Abend.", "Ich sehe fern jeden Abend.", "Ich fernsehen jeden Abend."], answer: 0 },
      { question: "لÙ¾Ù†Ø¬Ø±Ù‡ Ø±Ø§ Ø¨Ø§Ø² Ú©Ù†ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Mach das Fenster auf!", "Mach auf das Fenster!", "Aufmachen das Fenster!", "Fenster aufmachen!"], answer: 0 },
      { question: "لØ³ÙˆØ§Ø± Ø´Ø¯Ù†ل Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:", options: ["einsteigen", "aussteigen", "aufstehen", "abfahren"], answer: 0 }
    ]
  }
};