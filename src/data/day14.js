export const day14Data = {
  title: "Ø±ÙˆØ² Û±Û´: Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ Ùˆ ÙØµلâ€ŒÙ‡Ø§ - ØªÙˆØµÛŒÙ Ù‡ÙˆØ§",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ ØªÙˆØµÛŒÙ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ØŒ ÙØ¹لâ€ŒÙ‡Ø§ÛŒ Ù…Ø±Ø¨ÙˆØ· Ø¨Ù‡ Ù‡ÙˆØ§ Ùˆ ÙØµلâ€ŒÙ‡Ø§",
  grammarData: {
    subtitle: "Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ Ùˆ ÙØµلâ€ŒÙ‡Ø§",
    content: [
      {
        type: "text",
        title: "ÙØ¹لâ€ŒÙ‡Ø§ÛŒ Ø¨Ø¯ÙˆÙ† ÙØ§Ø¹ل (Impersonal Verbs)",
        text: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ø¨Ø±Ø§ÛŒ ØªÙˆØµÛŒÙ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ Ø§Ø² ÙØ¹لâ€ŒÙ‡Ø§ÛŒ Ø¨Ø¯ÙˆÙ† ÙØ§Ø¹ل Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯. ÙØ§Ø¹ل Ù‡Ù…ÛŒØ´Ù‡ لesل Ø§Ø³Øª: es regnet (Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯)ØŒ es schneit (Ø¨Ø±Ù Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯)ØŒ es ist heiÃŸ/schÃ¶n/kalt (Ù‡ÙˆØ§ Ú¯Ø±Ù…/Ø®ÙˆØ¨/Ø³Ø±Ø¯ Ø§Ø³Øª)."
      },
      {
        type: "table",
        title: "ÙØ¹لâ€ŒÙ‡Ø§ÛŒ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§",
        rows: [
          { de: "es regnet", fa: "Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯" },
          { de: "es schneit", fa: "Ø¨Ø±Ù Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯" },
          { de: "es blitzt", fa: "Ø¨Ø±Ù‚ Ù…ÛŒâ€ŒØ²Ù†Ø¯" },
          { de: "es donnert", fa: "Ø±Ø¹Ø¯ Ù…ÛŒâ€ŒØ²Ù†Ø¯" },
          { de: "es ist sonnig", fa: "Ù‡ÙˆØ§ Ø¢ÙØªØ§Ø¨ÛŒ Ø§Ø³Øª" },
          { de: "es ist bewÃ¶lkt", fa: "Ù‡ÙˆØ§ Ø§Ø¨Ø±ÛŒ Ø§Ø³Øª" },
          { de: "es ist windig", fa: "Ù‡ÙˆØ§ Ø¨Ø§Ø¯ÛŒ Ø§Ø³Øª" },
          { de: "es ist neblig", fa: "Ù‡ÙˆØ§ Ù…Ù‡â€ŒØ¢لÙˆØ¯ Ø§Ø³Øª" },
          { de: "es ist heiÃŸ", fa: "Ù‡ÙˆØ§ Ú¯Ø±Ù… Ø§Ø³Øª" },
          { de: "es ist kalt", fa: "Ù‡ÙˆØ§ Ø³Ø±Ø¯ Ø§Ø³Øª" },
          { de: "es ist warm", fa: "Ù‡ÙˆØ§ Ú¯Ø±Ù… Ø§Ø³Øª" },
          { de: "es ist kÃ¼hl", fa: "Ù‡ÙˆØ§ Ø®Ù†Ú© Ø§Ø³Øª" }
        ]
      },
      {
        type: "text",
        title: "ØªÙˆØµÛŒÙ Ù‡ÙˆØ§ Ø¨Ø§ ØµÙØª",
        text: "Ø¨Ø±Ø§ÛŒ ØªÙˆØµÛŒÙ Ù‡ÙˆØ§ Ø§Ø² ØµÙØªâ€ŒÙ‡Ø§ Ø¨Ø§ ÙØ¹ل sein Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: Heute ist es sonnig (Ø§Ù…Ø±ÙˆØ² Ù‡ÙˆØ§ Ø¢ÙØªØ§Ø¨ÛŒ Ø§Ø³Øª). Morgen wird es regnen (ÙØ±Ø¯Ø§ Ø¨Ø§Ø±Ø§Ù† Ø®ÙˆØ§Ù‡Ø¯ Ø¨Ø§Ø±ÛŒØ¯). Die Temperatur betrÃ¤gt 20 Grad (Ø¯Ù…Ø§ Û²Û° Ø¯Ø±Ø¬Ù‡ Ø§Ø³Øª)."
      },
      {
        type: "examples",
        title: "Ø¬Ù…لØ§Øª Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§",
        items: [
          { de: "Wie ist das Wetter heute?", fa: "Ø§Ù…Ø±ÙˆØ² Ù‡ÙˆØ§ Ú†Ø·ÙˆØ± Ø§Ø³ØªØŸ" },
          { de: "Heute ist es sonnig und warm.", fa: "Ø§Ù…Ø±ÙˆØ² Ù‡ÙˆØ§ Ø¢ÙØªØ§Ø¨ÛŒ Ùˆ Ú¯Ø±Ù… Ø§Ø³Øª." },
          { de: "Morgen wird es regnen.", fa: "ÙØ±Ø¯Ø§ Ø¨Ø§Ø±Ø§Ù† Ø®ÙˆØ§Ù‡Ø¯ Ø¨Ø§Ø±ÛŒØ¯." },
          { de: "Es ist 25 Grad.", fa: "Ù‡ÙˆØ§ Û²Ûµ Ø¯Ø±Ø¬Ù‡ Ø§Ø³Øª." },
          { de: "Im Winter ist es oft kalt.", fa: "Ø¯Ø± Ø²Ù…Ø³ØªØ§Ù† Ø§ØºلØ¨ Ø³Ø±Ø¯ Ø§Ø³Øª." },
          { de: "Im Sommer ist es heiÃŸ.", fa: "Ø¯Ø± ØªØ§Ø¨Ø³ØªØ§Ù† Ù‡ÙˆØ§ Ú¯Ø±Ù… Ø§Ø³Øª." },
          { de: "Die Sonne scheint.", fa: "Ø®ÙˆØ±Ø´ÛŒØ¯ Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯." },
          { de: "Der Wind weht stark.", fa: "Ø¨Ø§Ø¯ Ø´Ø¯ÛŒØ¯ Ù…ÛŒâ€ŒÙˆØ²Ø¯." }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡: ÙØµلâ€ŒÙ‡Ø§ Ùˆ Ù‡ÙˆØ§",
        text: "Ø¯Ø± Ù‡Ø± ÙØµل Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ÛŒ Ù…Ø¹Ù…Ùˆل Ø¢Ù† ÙØµل Ø±Ø§ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…: Ø¨Ù‡Ø§Ø± (warm, sonnig)ØŒ ØªØ§Ø¨Ø³ØªØ§Ù† (heiÃŸ, sonnig)ØŒ Ù¾Ø§ÛŒÛŒØ² (kÃ¼hl, regnerisch)ØŒ Ø²Ù…Ø³ØªØ§Ù† (kalt, schneereich)."
      },
      {
        type: "text",
        title: "ÙØµلâ€ŒÙ‡Ø§ Ùˆ ÙˆÛŒÚ˜Ú¯ÛŒâ€ŒÙ‡Ø§ÛŒØ´Ø§Ù†",
        text: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ØŒ ÙØµلâ€ŒÙ‡Ø§ ØªØ£Ø«ÛŒØ± Ø²ÛŒØ§Ø¯ÛŒ Ø¨Ø± Ø²Ù†Ø¯Ú¯ÛŒ Ù…Ø±Ø¯Ù… Ø¯Ø§Ø±Ù†Ø¯. Ø¯Ø± Ø²Ù…Ø³ØªØ§Ù† Ú©Ø±ÛŒØ³Ù…Ø³ Ø¬Ø´Ù† Ú¯Ø±ÙØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯. Ø¯Ø± Ø¨Ù‡Ø§Ø± Ø¬Ø´Ù†â€ŒÙ‡Ø§ÛŒ Ø¹ÛŒØ¯ Ù¾Ø§Ú© Ø¨Ø±Ú¯Ø²Ø§Ø± Ù…ÛŒâ€ŒØ´ÙˆØ¯. Ø¯Ø± ØªØ§Ø¨Ø³ØªØ§Ù† Ù…Ø±Ø¯Ù… Ø¨Ù‡ ØªØ¹Ø·ÛŒلØ§Øª Ù…ÛŒâ€ŒØ±ÙˆÙ†Ø¯ Ùˆ Ø¯Ø± Ù¾Ø§ÛŒÛŒØ² Ø¬Ø´Ù†â€ŒÙ‡Ø§ÛŒ Ø¨Ø±Ø¯Ø§Ø´Øª Ù…Ø­ØµÙˆل Ø¨Ø±Ú¯Ø²Ø§Ø± Ù…ÛŒâ€ŒØ´ÙˆØ¯."
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ†: Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§",
        questions: [
          {
            question: "لØ¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man لit rainsل?",
            options: [
              { text: "es regnet", isCorrect: true },
              { text: "es schneit", isCorrect: false },
              { text: "es blitzt", isCorrect: false },
              { text: "es donnert", isCorrect: false }
            ],
            explanation: "es regnet Ø¨Ù‡ Ù…Ø¹Ù†Ø§ÛŒ Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯ Ø§Ø³Øª."
          },
          {
            question: "لÙ‡ÙˆØ§ Ø¢ÙØªØ§Ø¨ÛŒ Ø§Ø³Øªل Ú†Ú¯ÙˆÙ†Ù‡ Ú¯ÙØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man لit is sunnyل?",
            options: [
              { text: "Es ist sonnig.", isCorrect: true },
              { text: "Es ist regnerisch.", isCorrect: false },
              { text: "Es ist windig.", isCorrect: false },
              { text: "Es ist bewÃ¶lkt.", isCorrect: false }
            ],
            explanation: "sonnig ØµÙØª Ø¢ÙØªØ§Ø¨ÛŒ Ø§Ø³Øª."
          },
          {
            question: "لØ¯Ø± Ø²Ù…Ø³ØªØ§Ù† Ø³Ø±Ø¯ Ø§Ø³Øªل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man لin winter it is coldل?",
            options: [
              { text: "Im Winter ist es kalt.", isCorrect: true },
              { text: "Im Winter schneit es.", isCorrect: false },
              { text: "Im Winter regnet es.", isCorrect: false },
              { text: "Im Winter ist es heiÃŸ.", isCorrect: false }
            ],
            explanation: "Ø§Ø² im + ÙØµل Ùˆ ist es + ØµÙØª Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÚ©Ù…ÛŒل Ø¬Ù…لØ§Øª: Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§",
        instruction: "Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø±Ø§ Ø¨Ø§ Ú©لÙ…Ù‡ Ù…Ù†Ø§Ø³Ø¨ Ù¾Ø± Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Heute ist es ___.", answer: "sonnig", hint: "Ø¢ÙØªØ§Ø¨ÛŒ" },
          { sentence: "Es ___ heute.", answer: "regnet", hint: "Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯" },
          { sentence: "Im Winter ist es ___.", answer: "kalt", hint: "Ø³Ø±Ø¯" },
          { sentence: "Morgen wird es ___.", answer: "schneien", hint: "Ø¨Ø±Ù Ø®ÙˆØ§Ù‡Ø¯ Ø¨Ø§Ø±ÛŒØ¯" },
          { sentence: "Es ist 25 ___.", answer: "Grad", hint: "Ø¯Ø±Ø¬Ù‡" },
          { sentence: "Die Sonne ___.", answer: "scheint", hint: "Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯" },
          { sentence: "Im Sommer ist es ___.", answer: "heiÃŸ", hint: "Ú¯Ø±Ù…" },
          { sentence: "Der Wind weht ___.", answer: "stark", hint: "Ø´Ø¯ÛŒØ¯" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "ÙØ¹لâ€ŒÙ‡Ø§ÛŒ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§",
        words: [
          { de: "regnen", fa: "Ø¨Ø§Ø±ÛŒØ¯Ù† (Ø¨Ø§Ø±Ø§Ù†)", article: "-", plural: "-", examples: [{ de: "Es regnet heute.", fa: "Ø§Ù…Ø±ÙˆØ² Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯." }] },
          { de: "schneien", fa: "Ø¨Ø§Ø±ÛŒØ¯Ù† (Ø¨Ø±Ù)", article: "-", plural: "-", examples: [{ de: "Im Winter schneit es oft.", fa: "Ø¯Ø± Ø²Ù…Ø³ØªØ§Ù† Ø§ØºلØ¨ Ø¨Ø±Ù Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯." }] },
          { de: "blitzen", fa: "Ø¨Ø±Ù‚ Ø²Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Es blitzt und donnert.", fa: "Ø¨Ø±Ù‚ Ùˆ Ø±Ø¹Ø¯ Ù…ÛŒâ€ŒØ²Ù†Ø¯." }] },
          { de: "donnern", fa: "Ø±Ø¹Ø¯ Ø²Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Es donnert stark.", fa: "Ø±Ø¹Ø¯ Ø´Ø¯ÛŒØ¯ Ù…ÛŒâ€ŒØ²Ù†Ø¯." }] },
          { de: "scheinen", fa: "ØªØ§Ø¨ÛŒØ¯Ù†", article: "-", plural: "-", examples: [{ de: "Die Sonne scheint.", fa: "Ø®ÙˆØ±Ø´ÛŒØ¯ Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯." }] },
          { de: "wehen", fa: "ÙˆØ²ÛŒØ¯Ù† (Ø¨Ø§Ø¯)", article: "-", plural: "-", examples: [{ de: "Der Wind weht.", fa: "Ø¨Ø§Ø¯ Ù…ÛŒâ€ŒÙˆØ²Ø¯." }] }
        ]
      },
      {
        title: "ØµÙØªâ€ŒÙ‡Ø§ÛŒ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§",
        words: [
          { de: "sonnig", fa: "Ø¢ÙØªØ§Ø¨ÛŒ", article: "-", plural: "-", examples: [{ de: "Heute ist es sonnig.", fa: "Ø§Ù…Ø±ÙˆØ² Ø¢ÙØªØ§Ø¨ÛŒ Ø§Ø³Øª." }] },
          { de: "bewÃ¶lkt", fa: "Ø§Ø¨Ø±ÛŒ", article: "-", plural: "-", examples: [{ de: "Morgen wird es bewÃ¶lkt.", fa: "ÙØ±Ø¯Ø§ Ø§Ø¨Ø±ÛŒ Ø®ÙˆØ§Ù‡Ø¯ Ø¨ÙˆØ¯." }] },
          { de: "regnerisch", fa: "Ø¨Ø§Ø±Ø§Ù†ÛŒ", article: "-", plural: "-", examples: [{ de: "Das Wetter ist regnerisch.", fa: "Ù‡ÙˆØ§ Ø¨Ø§Ø±Ø§Ù†ÛŒ Ø§Ø³Øª." }] },
          { de: "windig", fa: "Ø¨Ø§Ø¯ÛŒ", article: "-", plural: "-", examples: [{ de: "Heute ist es sehr windig.", fa: "Ø§Ù…Ø±ÙˆØ² Ø®ÛŒلÛŒ Ø¨Ø§Ø¯ÛŒ Ø§Ø³Øª." }] },
          { de: "neblig", fa: "Ù…Ù‡â€ŒØ¢لÙˆØ¯", article: "-", plural: "-", examples: [{ de: "Am Morgen ist es neblig.", fa: "ØµØ¨Ø­ Ù…Ù‡â€ŒØ¢لÙˆØ¯ Ø§Ø³Øª." }] },
          { de: "heiÃŸ", fa: "Ú¯Ø±Ù…", article: "-", plural: "-", examples: [{ de: "Im Sommer ist es heiÃŸ.", fa: "Ø¯Ø± ØªØ§Ø¨Ø³ØªØ§Ù† Ú¯Ø±Ù… Ø§Ø³Øª." }] },
          { de: "kalt", fa: "Ø³Ø±Ø¯", article: "-", plural: "-", examples: [{ de: "Im Winter ist es kalt.", fa: "Ø¯Ø± Ø²Ù…Ø³ØªØ§Ù† Ø³Ø±Ø¯ Ø§Ø³Øª." }] },
          { de: "warm", fa: "Ú¯Ø±Ù… (Ù…Ø·Ø¨ÙˆØ¹)", article: "-", plural: "-", examples: [{ de: "Der FrÃ¼hling ist warm.", fa: "Ø¨Ù‡Ø§Ø± Ú¯Ø±Ù… Ø§Ø³Øª." }] },
          { de: "kÃ¼hl", fa: "Ø®Ù†Ú©", article: "-", plural: "-", examples: [{ de: "Der Herbst ist kÃ¼hl.", fa: "Ù¾Ø§ÛŒÛŒØ² Ø®Ù†Ú© Ø§Ø³Øª." }] },
          { de: "schÃ¶n", fa: "Ø²ÛŒØ¨Ø§/Ø®ÙˆØ¨", article: "-", plural: "-", examples: [{ de: "Das Wetter ist schÃ¶n.", fa: "Ù‡ÙˆØ§ Ø®ÙˆØ¨ Ø§Ø³Øª." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Das Wetter in Deutschland: Im FrÃ¼hling ist das Wetter oft wechselhaft. Manchmal scheint die Sonne, manchmal regnet es. Im Sommer ist es heiÃŸ und sonnig. Die Temperaturen sind oft 25 bis 30 Grad. Im Herbst wird es kÃ¼hl und regnerisch. Die BlÃ¤tter werden bunt und fallen von den BÃ¤umen. Im Winter ist es kalt und oft schneit es. Die Temperaturen sind oft unter null Grad.",
      questions: [
        { question: "Ø¯Ø± Ø¨Ù‡Ø§Ø± Ù‡ÙˆØ§ Ú†Ø·ÙˆØ± Ø§Ø³ØªØŸ", answer: "Ø¯Ø± Ø¨Ù‡Ø§Ø± Ù‡ÙˆØ§ Ù…ØªØºÛŒØ± Ø§Ø³Øª: Ú¯Ø§Ù‡ÛŒ Ø¢ÙØªØ§Ø¨ÛŒ Ùˆ Ú¯Ø§Ù‡ÛŒ Ø¨Ø§Ø±Ø§Ù†ÛŒ." },
        { question: "Ø¯Ø± ØªØ§Ø¨Ø³ØªØ§Ù† Ø¯Ù…Ø§ Ú†Ù‚Ø¯Ø± Ø§Ø³ØªØŸ", answer: "Ø¯Ø± ØªØ§Ø¨Ø³ØªØ§Ù† Ø¯Ù…Ø§ Ø§ØºلØ¨ Û²Ûµ ØªØ§ Û³Û° Ø¯Ø±Ø¬Ù‡ Ø§Ø³Øª." },
        { question: "Ø¯Ø± Ù¾Ø§ÛŒÛŒØ² Ú†Ù‡ Ø§ØªÙØ§Ù‚ÛŒ Ø¨Ø±Ø§ÛŒ Ø¨Ø±Ú¯â€ŒÙ‡Ø§ Ù…ÛŒâ€ŒØ§ÙØªØ¯ØŸ", answer: "Ø¨Ø±Ú¯â€ŒÙ‡Ø§ Ø±Ù†Ú¯Ø§Ø±Ù†Ú¯ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯ Ùˆ Ø§Ø² Ø¯Ø±Ø®Øªâ€ŒÙ‡Ø§ Ù…ÛŒâ€ŒØ±ÛŒØ²Ù†Ø¯." },
        { question: "Ø¯Ø± Ø²Ù…Ø³ØªØ§Ù† Ø¯Ù…Ø§ Ú†Ù‚Ø¯Ø± Ø§Ø³ØªØŸ", answer: "Ø¯Ø± Ø²Ù…Ø³ØªØ§Ù† Ø¯Ù…Ø§ Ø§ØºلØ¨ Ø²ÛŒØ± ØµÙØ± Ø¯Ø±Ø¬Ù‡ Ø§Ø³Øª." }
      ]
    }
  ],
  writing: [
    {
      title: "ØªÙˆØµÛŒÙ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ Ø¯Ø± ÛŒÚ© Ù‡ÙØªÙ‡",
      prompt: "Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ÛŒ ÛŒÚ© Ù‡ÙØªÙ‡ Ø±Ø§ ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯: Ù‡Ø± Ø±ÙˆØ² Ù‡ÙˆØ§ Ú†Ø·ÙˆØ± Ø§Ø³Øª Ùˆ Ø¯Ù…Ø§ Ú†Ù‚Ø¯Ø± Ø§Ø³Øª.",
      steps: [
        { title: "Ù‚Ø¯Ù… Ø§Ùˆل: Ù…Ø¹Ø±ÙÛŒ", text: "Ø¬Ù…لÙ‡ Ø§Ùˆل Ù‡ÙØªÙ‡ Ø±Ø§ Ù…Ø¹Ø±ÙÛŒ Ú©Ù†ÛŒØ¯.", example: { de: "Das Wetter in dieser Woche:", fa: "Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ Ø¯Ø± Ø§ÛŒÙ† Ù‡ÙØªÙ‡:" } },
        { title: "Ù‚Ø¯Ù… Ø¯ÙˆÙ…: ØªÙˆØµÛŒÙ Ø±ÙˆØ²Ù‡Ø§", text: "Ù‡Ø± Ø±ÙˆØ² Ø±Ø§ Ø¨Ø§ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ Ùˆ Ø¯Ù…Ø§ ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯.", example: { de: "Am Montag ist es sonnig und 20 Grad.", fa: "Ø¯ÙˆØ´Ù†Ø¨Ù‡ Ù‡ÙˆØ§ Ø¢ÙØªØ§Ø¨ÛŒ Ùˆ Û²Û° Ø¯Ø±Ø¬Ù‡ Ø§Ø³Øª." } },
        { title: "Ù‚Ø¯Ù… Ø³ÙˆÙ…: Ù†ØªÛŒØ¬Ù‡â€ŒÚ¯ÛŒØ±ÛŒ", text: "Ø®لØ§ØµÙ‡ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ÛŒ Ù‡ÙØªÙ‡.", example: { de: "Das Wetter ist sehr schÃ¶n diese Woche.", fa: "Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ Ø¯Ø± Ø§ÛŒÙ† Ù‡ÙØªÙ‡ Ø®ÛŒلÛŒ Ø®ÙˆØ¨ Ø§Ø³Øª." } }
      ],
      modelAnswer: "Das Wetter in dieser Woche:\n\nAm Montag ist es sonnig und warm. Die Temperatur betrÃ¤gt 22 Grad.\nAm Dienstag ist es bewÃ¶lkt, aber es regnet nicht. Es ist 18 Grad.\nAm Mittwoch regnet es den ganzen Tag. Es ist nur 15 Grad.\nAm Donnerstag ist es neblig am Morgen, aber nachmittags scheint die Sonne. Es ist 19 Grad.\nAm Freitag ist es windig und kÃ¼hl. Es ist 14 Grad.\nAm Samstag ist es sonnig und schÃ¶n. Es ist 21 Grad.\nAm Sonntag ist es warm und sonnig. Es ist 24 Grad.\n\nDas Wetter ist sehr schÃ¶n diese Woche, besonders am Wochenende!"
    }
  ],
  listening: [
    {
      title: "Ú¯ÙˆØ´ Ø¯Ø§Ø¯Ù† Ø¨Ù‡ Ú¯Ø²Ø§Ø±Ø´ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§",
      source: "Deutsch lernen - Wetterbericht",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "Ø¨Ù‡ Ú¯Ø²Ø§Ø±Ø´ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ÛŒ Ù‡Ø± Ø±ÙˆØ² Ùˆ Ø¯Ù…Ø§ Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
    }
  ],
  speaking: [
    {
      title: "ØªÙˆØµÛŒÙ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§",
      pattern: "A: Wie ist das Wetter heute?\nB: Heute ist es [Adjektiv]. Die Temperatur betrÃ¤gt [Zahl] Grad.\nA: Und morgen?\nB: Morgen wird es [Verb/Adjektiv].",
      exercise: "Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ÛŒ Ø§Ù…Ø±ÙˆØ² Ùˆ ÙØ±Ø¯Ø§ Ø±Ø§ ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯."
    }
  ],
  cultureTip: "Ø¢لÙ…Ø§Ù†ÛŒâ€ŒÙ‡Ø§ Ø¹Ø§Ø´Ù‚ ØµØ­Ø¨Øª Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ Ù‡Ø³ØªÙ†Ø¯! Ø§ÛŒÙ† ÛŒÚ© Ù…ÙˆØ¶ÙˆØ¹ Ù…Ú©Ø§لÙ…Ù‡ Ø±Ø§ÛŒØ¬ Ø§Ø³Øª. Ø¯Ø± Ø¢لÙ…Ø§Ù†ØŒ Ø¢Ø¨ Ùˆ Ù‡ÙˆØ§ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ø¯ Ø¯Ø± ÛŒÚ© Ø±ÙˆØ² ØªØºÛŒÛŒØ± Ú©Ù†Ø¯ØŒ Ø¨Ù‡ Ù‡Ù…ÛŒÙ† Ø¯لÛŒل Ù…Ø±Ø¯Ù… Ø§ØºلØ¨ Ú†ØªØ± Ø¨Ø§ Ø®ÙˆØ¯ Ø­Ù…ل Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯. Ù‡ÙˆØ§Ø´Ù†Ø§Ø³ÛŒ Ø¢لÙ…Ø§Ù† (Deutscher Wetterdienst) Ø¨Ø³ÛŒØ§Ø± Ø¯Ù‚ÛŒÙ‚ Ø§Ø³Øª.",
  examData: {
    questions: [
      { question: "لØ¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["es regnet", "es schneit", "es blitzt", "es donnert"], answer: 0 },
      { question: "لÙ‡ÙˆØ§ Ø¢ÙØªØ§Ø¨ÛŒ Ø§Ø³Øªل Ú†Ú¯ÙˆÙ†Ù‡ Ú¯ÙØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Es ist sonnig.", "Es ist regnerisch.", "Es ist windig.", "Es ist bewÃ¶lkt."], answer: 0 },
      { question: "لØ¯Ø± Ø²Ù…Ø³ØªØ§Ù† Ø³Ø±Ø¯ Ø§Ø³Øªل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Im Winter ist es kalt.", "Im Winter schneit es.", "Im Winter regnet es.", "Im Winter ist es heiÃŸ."], answer: 0 },
      { question: "لØ¨Ø±Ù Ù…ÛŒâ€ŒØ¨Ø§Ø±Ø¯ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["es schneit", "es regnet", "es blitzt", "es donnert"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… ØµÙØª Ø¨Ø±Ø§ÛŒ ØªØ§Ø¨Ø³ØªØ§Ù† Ù…Ù†Ø§Ø³Ø¨ Ø§Ø³ØªØŸ", options: ["heiÃŸ", "kalt", "kÃ¼hl", "neblig"], answer: 0 },
      { question: "لØ®ÙˆØ±Ø´ÛŒØ¯ Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Die Sonne scheint.", "Die Sonne regnet.", "Die Sonne schneit.", "Die Sonne weht."], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… ÙØµل Ø³Ø±Ø¯ Ùˆ Ø¨Ø±ÙÛŒ Ø§Ø³ØªØŸ", options: ["der Winter", "der Sommer", "der FrÃ¼hling", "der Herbst"], answer: 0 },
      { question: "لÙ‡ÙˆØ§ Û²Ûµ Ø¯Ø±Ø¬Ù‡ Ø§Ø³Øªل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Es ist 25 Grad.", "Es ist 25 Uhr.", "Es ist 25 Meter.", "Es ist 25 Kilo."], answer: 0 }
    ]
  }
};