export const day31Data = {
  title: "Ø±ÙˆØ² Û³Û±: Ù‡ÙˆØ§ + Ø¬Ù…لØ§Øª Ø´Ø±Ø·ÛŒ Ø¨Ø§ wenn",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ ÙˆØ§Ú˜Ú¯Ø§Ù† Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ØŒ Ø¨ÛŒØ§Ù† Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ Ùˆ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Ø¬Ù…لØ§Øª Ø´Ø±Ø·ÛŒ Ø¨Ø§ wenn",

  grammarData: {
    subtitle: "Ø¬Ù…لØ§Øª Ø´Ø±Ø·ÛŒ Ø²Ù…Ø§Ù†ÛŒ Ø¨Ø§ wenn",
    content: [
      {
        type: "text",
        title: "Ø¬Ù…لÙ‡ Ø´Ø±Ø·ÛŒ Ø¨Ø§ wenn Ú†ÛŒØ³ØªØŸ",
        text: "Ú©لÙ…Ù‡ wenn Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ø¯Ùˆ Ù…Ø¹Ù†ÛŒ Ø¯Ø§Ø±Ø¯: Û±. Ø§Ú¯Ø± (Ø´Ø±Ø·ÛŒ) Û². ÙˆÙ‚ØªÛŒ (Ø²Ù…Ø§Ù†ÛŒ). Ø¯Ø± Ù‡Ø± Ø¯Ùˆ Ø­Ø§لØªØŒ wenn ÛŒÚ© Subjunktion Ø§Ø³ØªØŒ ÛŒØ¹Ù†ÛŒ ÙØ¹ل Ø±Ø§ Ø¨Ù‡ Ø¢Ø®Ø± Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒÙØ±Ø³ØªØ¯. Ø§Ù…Ø§ ÙØ¹ل Ø¬Ù…لÙ‡ Ø§ØµلÛŒ (Hauptsatz) Ø¨لØ§ÙØ§ØµلÙ‡ Ø¨Ø¹Ø¯ Ø§Ø² Ú©Ø§Ù…Ø§ Ø¨Ù‡ Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û² Ù…ÛŒâ€ŒØ¢ÛŒØ¯."
      },
      {
        type: "alert",
        title: "ÙØ±Ù…Ùˆل Ù…Ù‡Ù…!",
        text: "Wenn + ÙØ§Ø¹ل + Ø¨Ù‚ÛŒÙ‡ Ú©لÙ…Ø§Øª + ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø± (Ú©Ø§Ù…Ø§) â†’ ÙØ§Ø¹ل + ÙØ¹ل Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û² + Ø¨Ù‚ÛŒÙ‡ Ú©لÙ…Ø§Øª. Ù…Ø«Ø§ل: Wenn es regnet, bleibe ich zu Hause. (Ø§Ú¯Ø±/ÙˆÙ‚ØªÛŒ Ø¨Ø§Ø±Ø§Ù† Ø¨ÛŒØ§ÛŒØ¯ØŒ Ø¯Ø± Ø®Ø§Ù†Ù‡ Ù…ÛŒâ€ŒÙ…Ø§Ù†Ù….)"
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ Ø¨Ø§ wenn",
        items: [
          { de: "Wenn es regnet, nehme ich einen Regenschirm mit.", fa: "ÙˆÙ‚ØªÛŒ Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¢ÛŒØ¯ØŒ Ú†ØªØ± Ø¨Ø§ Ø®ÙˆØ¯Ù… Ù…ÛŒâ€ŒØ¨Ø±Ù…." },
          { de: "Wenn die Sonne scheint, gehe ich spazieren.", fa: "ÙˆÙ‚ØªÛŒ Ø¢ÙØªØ§Ø¨ Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯ØŒ Ù¾ÛŒØ§Ø¯Ù‡â€ŒØ±ÙˆÛŒ Ù…ÛŒâ€ŒØ±ÙˆÙ…." },
          { de: "Wenn es schneit, bleiben die Kinder zu Hause.", fa: "ÙˆÙ‚ØªÛŒ Ø¨Ø±Ù Ù…ÛŒâ€ŒØ¢ÛŒØ¯ØŒ Ø¨Ú†Ù‡â€ŒÙ‡Ø§ Ø¯Ø± Ø®Ø§Ù†Ù‡ Ù…ÛŒâ€ŒÙ…Ø§Ù†Ù†Ø¯." },
          { de: "Wenn es kalt ist, trage ich einen Mantel.", fa: "ÙˆÙ‚ØªÛŒ Ù‡ÙˆØ§ Ø³Ø±Ø¯ Ø§Ø³ØªØŒ Ù¾Ø§لØªÙˆ Ù…ÛŒâ€ŒÙ¾ÙˆØ´Ù…." },
          { de: "Wenn es windig ist, fliegen wir keinen Drachen.", fa: "ÙˆÙ‚ØªÛŒ Ø¨Ø§Ø¯ Ù…ÛŒâ€ŒÙˆØ²Ø¯ØŒ Ø¨Ø§Ø¯Ø¨Ø§Ø¯Ú© Ù¾Ø±ÙˆØ§Ø² Ù†Ù…ÛŒâ€ŒØ¯Ù‡ÛŒÙ…." },
          { de: "Im Sommer ist es oft heiÃŸ, deshalb gehen wir schwimmen.", fa: "ØªØ§Ø¨Ø³ØªØ§Ù† Ø§ØºلØ¨ Ù‡ÙˆØ§ Ú¯Ø±Ù… Ø§Ø³ØªØŒ Ø¨Ù‡ Ù‡Ù…ÛŒÙ† Ø¯لÛŒل Ø´Ù†Ø§ Ù…ÛŒâ€ŒØ±ÙˆÛŒÙ…." }
        ]
      },
      {
        type: "table",
        title: "ÙˆØ§Ú˜Ú¯Ø§Ù† Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ (Wetter)",
        rows: [
          { de: "es regnet", fa: "Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¢ÛŒØ¯" },
          { de: "es schneit", fa: "Ø¨Ø±Ù Ù…ÛŒâ€ŒØ¢ÛŒØ¯" },
          { de: "es ist bewÃ¶lkt", fa: "Ù‡ÙˆØ§ Ø§Ø¨Ø±ÛŒ Ø§Ø³Øª" },
          { de: "die Sonne scheint", fa: "Ø¢ÙØªØ§Ø¨ Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯" },
          { de: "es ist windig", fa: "Ø¨Ø§Ø¯ Ù…ÛŒâ€ŒÙˆØ²Ø¯" },
          { de: "es ist neblig", fa: "Ù…Ù‡â€ŒØ¢لÙˆØ¯ Ø§Ø³Øª" },
          { de: "es ist heiÃŸ / warm / kalt / kÃ¼hl", fa: "Ù‡ÙˆØ§ Ø¯Ø§Øº / Ú¯Ø±Ù… / Ø³Ø±Ø¯ / Ø®Ù†Ú© Ø§Ø³Øª" },
          { de: "das Gewitter", fa: "Ø±Ø¹Ø¯ Ùˆ Ø¨Ø±Ù‚" },
          { de: "der Regenbogen", fa: "Ø±Ù†Ú¯ÛŒÙ†â€ŒÚ©Ù…Ø§Ù†" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "ØªØ³Øª Ø¬Ù…لØ§Øª wenn",
        questions: [
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ Â«ÙˆÙ‚ØªÛŒ Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¢ÛŒØ¯ØŒ Ø¯Ø± Ø®Ø§Ù†Ù‡ Ù…ÛŒâ€ŒÙ…Ø§Ù†Ù….Â»",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Wenn es regnet, ich bleibe zu Hause.", isCorrect: false },
              { text: "Wenn es regnet, bleibe ich zu Hause.", isCorrect: true },
              { text: "Es regnet wenn, bleibe ich zu Hause.", isCorrect: false },
              { text: "Ich bleibe zu Hause wenn es regnet.", isCorrect: false }
            ],
            explanation: "Ø¨Ø¹Ø¯ Ø§Ø² Ú©Ø§Ù…Ø§ØŒ ÙØ¹ل (bleibe) Ø¨Ù‡ Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û² Ù…ÛŒâ€ŒØ¢ÛŒØ¯ Ùˆ Ø³Ù¾Ø³ ÙØ§Ø¹ل (ich). Ø§ÛŒÙ† Ù‚Ø§Ù†ÙˆÙ† Ù‡Ù…ÛŒØ´Ù‡ Ø§Ø¬Ø±Ø§ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          },
          {
            question: "ÙØ¹ل Ø¯Ø± Ú©Ø¯Ø§Ù… Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Ù‚Ø±Ø§Ø± Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ØŸ Wenn die Sonne ___, ___ wir im Park.",
            questionDe: "Wo steht das Verb?",
            options: [
              { text: "scheint / spielen", isCorrect: true },
              { text: "spielen / scheint", isCorrect: false },
              { text: "scheint / wir spielen", isCorrect: false },
              { text: "spielen / wir scheint", isCorrect: false }
            ],
            explanation: "scheint Ø¯Ø± Ø¢Ø®Ø± Ø¬Ù…لÙ‡ wenn Ùˆ spielen Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û² Ø¬Ù…لÙ‡ Ø§ØµلÛŒ."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÚ©Ù…ÛŒل Ø¬Ù…لØ§Øª Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§",
        instruction: "Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø±Ø§ Ø¨Ø§ Ø´Ú©ل ØµØ­ÛŒØ­ ÙØ¹ل Ù¾Ø± Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Wenn es ___, gehe ich nicht raus. (Ø¨Ø§Ø±Ø§Ù†)", answer: "regnet", hint: "Ø¨Ø§Ø±Ø§Ù† Ø¢Ù…Ø¯Ù† = es regnet" },
          { sentence: "Wenn die Sonne ___, gehe ich spazieren. (Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯)", answer: "scheint", hint: "Ø¢ÙØªØ§Ø¨ ØªØ§Ø¨ÛŒØ¯Ù† = die Sonne scheint" },
          { sentence: "Wenn es ___ ist, trage ich eine Jacke. (Ø³Ø±Ø¯)", answer: "kalt", hint: "Ø³Ø±Ø¯ = kalt" },
          { sentence: "Wenn es ___, bleiben die Kinder zu Hause. (Ø¨Ø±Ù)", answer: "schneit", hint: "Ø¨Ø±Ù Ø¢Ù…Ø¯Ù† = es schneit" },
          { sentence: "Im Winter ist es oft ___. (Ø§Ø¨Ø±ÛŒ)", answer: "bewÃ¶lkt", hint: "Ø§Ø¨Ø±ÛŒ = bewÃ¶lkt" },
          { sentence: "Wenn es ___ ist, bleibe ich drinnen. (Ú¯Ø±Ù…)", answer: "heiÃŸ", hint: "Ú¯Ø±Ù… = heiÃŸ" },
          { sentence: "___ es regnet, nehme ich einen Schirm.", answer: "Wenn", hint: "Ø§Ú¯Ø±/ÙˆÙ‚ØªÛŒ = wenn" },
          { sentence: "Im FrÃ¼hling ___ die Sonne oft. (Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯)", answer: "scheint", hint: "ØªØ§Ø¨ÛŒØ¯Ù† = scheinen â†’ scheint" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ (Das Wetter)",
        words: [
          { de: "der Regen", fa: "Ø¨Ø§Ø±Ø§Ù†", article: "der", plural: "-", examples: [{ de: "Der Regen ist stark heute.", fa: "Ø§Ù…Ø±ÙˆØ² Ø¨Ø§Ø±Ø§Ù† Ø´Ø¯ÛŒØ¯ Ø§Ø³Øª." }] },
          { de: "der Schnee", fa: "Ø¨Ø±Ù", article: "der", plural: "-", examples: [{ de: "Im Winter liegt viel Schnee.", fa: "Ø²Ù…Ø³ØªØ§Ù† Ø¨Ø±Ù Ø²ÛŒØ§Ø¯ÛŒ Ù…ÛŒâ€ŒÙ†Ø´ÛŒÙ†Ø¯." }] },
          { de: "die Sonne", fa: "Ø¢ÙØªØ§Ø¨ / Ø®ÙˆØ±Ø´ÛŒØ¯", article: "die", plural: "-", examples: [{ de: "Die Sonne scheint hell.", fa: "Ø¢ÙØªØ§Ø¨ Ø¯Ø±Ø®Ø´Ø§Ù† Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯." }] },
          { de: "der Wind", fa: "Ø¨Ø§Ø¯", article: "der", plural: "die Winde", examples: [{ de: "Heute ist es sehr windig.", fa: "Ø§Ù…Ø±ÙˆØ² Ø®ÛŒلÛŒ Ø¨Ø§Ø¯ Ù…ÛŒâ€ŒÙˆØ²Ø¯." }] },
          { de: "die Wolke", fa: "Ø§Ø¨Ø±", article: "die", plural: "die Wolken", examples: [{ de: "Am Himmel sind viele Wolken.", fa: "Ø¯Ø± Ø¢Ø³Ù…Ø§Ù† Ø§Ø¨Ø±Ù‡Ø§ÛŒ Ø²ÛŒØ§Ø¯ÛŒ Ù‡Ø³Øª." }] },
          { de: "die Temperatur", fa: "Ø¯Ù…Ø§", article: "die", plural: "die Temperaturen", examples: [{ de: "Die Temperatur liegt bei 25 Grad.", fa: "Ø¯Ù…Ø§ Û²Ûµ Ø¯Ø±Ø¬Ù‡ Ø§Ø³Øª." }] }
        ]
      },
      {
        title: "ÙØ¹لâ€ŒÙ‡Ø§ÛŒ Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§",
        words: [
          { de: "regnen", fa: "Ø¨Ø§Ø±ÛŒØ¯Ù† (Ø¨Ø§Ø±Ø§Ù†)", article: "-", plural: "-", examples: [{ de: "Es regnet den ganzen Tag.", fa: "ØªÙ…Ø§Ù… Ø±ÙˆØ² Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¢ÛŒØ¯." }] },
          { de: "schneien", fa: "Ø¨Ø§Ø±ÛŒØ¯Ù† (Ø¨Ø±Ù)", article: "-", plural: "-", examples: [{ de: "Morgen wird es schneien.", fa: "ÙØ±Ø¯Ø§ Ø¨Ø±Ù Ø®ÙˆØ§Ù‡Ø¯ Ø¢Ù…Ø¯." }] },
          { de: "scheinen", fa: "ØªØ§Ø¨ÛŒØ¯Ù†", article: "-", plural: "-", examples: [{ de: "Die Sonne scheint.", fa: "Ø¢ÙØªØ§Ø¨ Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯." }] },
          { de: "wehen", fa: "ÙˆØ²ÛŒØ¯Ù† (Ø¨Ø§Ø¯)", article: "-", plural: "-", examples: [{ de: "Der Wind weht stark.", fa: "Ø¨Ø§Ø¯ Ø´Ø¯ÛŒØ¯ Ù…ÛŒâ€ŒÙˆØ²Ø¯." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Das Wetter in Deutschland\n\nDas Wetter in Deutschland ist sehr unterschiedlich. Im FrÃ¼hling ist es oft bewÃ¶lkt und es regnet viel. Wenn die Sonne scheint, gehen viele Menschen in den Park. Im Sommer kann es sehr heiÃŸ werden, manchmal Ã¼ber 30 Grad. Dann gehen die Leute schwimmen.\nIm Herbst wird es kÃ¼hler und die BlÃ¤tter werden bunt. Wenn es windig ist, fallen die BlÃ¤tter von den BÃ¤umen. Der Winter ist kalt und manchmal schneit es. Wenn es schneit, spielen die Kinder drauÃŸen im Schnee. Wenn es sehr kalt ist, bleiben sie aber zu Hause.",
      questions: [
        { question: "Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ Ø¯Ø± Ø¨Ù‡Ø§Ø± Ú†Ú¯ÙˆÙ†Ù‡ Ø§Ø³ØªØŸ", answer: "Ø§ØºلØ¨ Ø§Ø¨Ø±ÛŒ Ø§Ø³Øª Ùˆ Ø¨Ø§Ø±Ø§Ù† Ø²ÛŒØ§Ø¯ÛŒ Ù…ÛŒâ€ŒØ¢ÛŒØ¯." },
        { question: "Ù…Ø±Ø¯Ù… ÙˆÙ‚ØªÛŒ Ø¢ÙØªØ§Ø¨ Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯ Ú†Ù‡ Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯ØŸ", answer: "Ø¨Ù‡ Ù¾Ø§Ø±Ú© Ù…ÛŒâ€ŒØ±ÙˆÙ†Ø¯." },
        { question: "ÙˆÙ‚ØªÛŒ Ø¨Ø§Ø¯ Ù…ÛŒâ€ŒÙˆØ²Ø¯ Ú†Ù‡ Ø§ØªÙØ§Ù‚ÛŒ Ù…ÛŒâ€ŒØ§ÙØªØ¯ØŸ", answer: "Ø¨Ø±Ú¯â€ŒÙ‡Ø§ Ø§Ø² Ø¯Ø±Ø®Øªâ€ŒÙ‡Ø§ Ù…ÛŒâ€ŒØ±ÛŒØ²Ù†Ø¯." },
        { question: "Ø¨Ú†Ù‡â€ŒÙ‡Ø§ Ø¯Ø± Ø²Ù…Ø³ØªØ§Ù† Ú†Ù‡ Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯ØŸ", answer: "ÙˆÙ‚ØªÛŒ Ø¨Ø±Ù Ù…ÛŒâ€ŒØ¢ÛŒØ¯ Ø¨ÛŒØ±ÙˆÙ† Ø¨Ø§Ø²ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯ØŒ Ø§Ù…Ø§ ÙˆÙ‚ØªÛŒ Ø®ÛŒلÛŒ Ø³Ø±Ø¯ Ø§Ø³Øª Ø¯Ø± Ø®Ø§Ù†Ù‡ Ù…ÛŒâ€ŒÙ…Ø§Ù†Ù†Ø¯." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§",
      prompt: "ÛŒÚ© Ù¾Ø§Ø±Ø§Ú¯Ø±Ø§Ù (Û¶ Ø®Ø·) Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ Ø¯Ø± Ø´Ù‡Ø± Ø®ÙˆØ¯ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯. Ø§Ø² Ø¬Ù…لØ§Øª Ø´Ø±Ø·ÛŒ Ø¨Ø§ wenn Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      steps: [
        { title: "ØªÙˆØµÛŒÙ Ú©لÛŒ", text: "Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ Ø±Ø§ Ø¯Ø± ÙØµلâ€ŒÙ‡Ø§ÛŒ Ù…Ø®ØªلÙ ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯.", example: { de: "Im Sommer ist es sehr heiÃŸ.", fa: "ØªØ§Ø¨Ø³ØªØ§Ù† Ø®ÛŒلÛŒ Ú¯Ø±Ù… Ø§Ø³Øª." } },
        { title: "Ø¬Ù…لØ§Øª Ø´Ø±Ø·ÛŒ", text: "Ø§Ø² wenn Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ø´Ø±Ø· Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", example: { de: "Wenn es regnet, bleibe ich zu Hause.", fa: "ÙˆÙ‚ØªÛŒ Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¢ÛŒØ¯ Ø¯Ø± Ø®Ø§Ù†Ù‡ Ù…ÛŒâ€ŒÙ…Ø§Ù†Ù…." } },
        { title: "Ù†ØªÛŒØ¬Ù‡â€ŒÚ¯ÛŒØ±ÛŒ", text: "Ù†Ø¸Ø± Ú©لÛŒ Ø®ÙˆØ¯ Ø±Ø§ Ø¨ÛŒØ§Ù† Ú©Ù†ÛŒØ¯.", example: { de: "Ich mag den FrÃ¼hling am liebsten.", fa: "Ù…Ù† Ø¨Ù‡Ø§Ø± Ø±Ø§ Ø¨ÛŒØ´ØªØ± Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù…." } }
      ],
      modelAnswer: "In meiner Stadt ist das Wetter sehr unterschiedlich. Im Sommer ist es oft heiÃŸ und die Sonne scheint. Wenn es sehr heiÃŸ ist, gehe ich schwimmen. Im Winter ist es kalt und manchmal schneit es. Wenn es schneit, bleibe ich zu Hause und trinke heiÃŸen Tee. Im FrÃ¼hling regnet es viel, aber die Blumen blÃ¼hen. Ich mag den Sommer am liebsten, weil ich die Sonne liebe."
    }
  ],

  listening: [
    {
      title: "Ú¯ÙˆØ´ Ø¯Ø§Ø¯Ù†: Ù¾ÛŒØ´â€ŒØ¨ÛŒÙ†ÛŒ Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§",
      source: "Deutsche Wettervorhersage",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "Ø¨Ù‡ Ù¾ÛŒØ´â€ŒØ¨ÛŒÙ†ÛŒ Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ ÙˆØ§Ú˜Ú¯Ø§Ù† Ù…Ø±Ø¨ÙˆØ· Ø¨Ù‡ Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ Ø±Ø§ Ø´Ù†Ø§Ø³Ø§ÛŒÛŒ Ú©Ù†ÛŒØ¯."
    }
  ],

  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ú¯ÙØªØ§Ø±ÛŒ: ØªÙˆØµÛŒÙ Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§",
      pattern: "Wenn es ... (gehe ich / bleibe ich / trage ich ...)",
      exercise: "Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ Ø¯Ø± Û´ ÙØµل ØµØ­Ø¨Øª Ú©Ù†ÛŒØ¯ Ùˆ Ø¨Ú¯ÙˆÛŒÛŒØ¯ Ø¯Ø± Ù‡Ø± Ø´Ø±Ø§ÛŒØ·ÛŒ Ú†Ù‡ Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯."
    }
  ],

  cultureTip: "Ø¢لÙ…Ø§Ù†ÛŒâ€ŒÙ‡Ø§ Ø¹Ø§Ø´Ù‚ ØµØ­Ø¨Øª Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ Ù‡Ø³ØªÙ†Ø¯! Ø§ÛŒÙ† ÛŒÚ© Ù…ÙˆØ¶ÙˆØ¹ Ø¹Ø§لÛŒ Ø¨Ø±Ø§ÛŒ Ø´Ø±ÙˆØ¹ Ù…Ú©Ø§لÙ…Ù‡ (Small Talk) Ø§Ø³Øª. Ø¬Ù…لÙ‡ Â«SchÃ¶nes Wetter heute, nicht wahr?Â» (Ø§Ù…Ø±ÙˆØ² Ù‡ÙˆØ§ Ù‚Ø´Ù†Ú¯Ù‡ØŒ Ù†Ù‡ØŸ) ÛŒÚ©ÛŒ Ø§Ø² Ø±Ø§ÛŒØ¬â€ŒØªØ±ÛŒÙ† Ø¬Ù…لØ§Øª Ø´Ø±ÙˆØ¹ Ù…Ú©Ø§لÙ…Ù‡ Ø¯Ø± Ø¢لÙ…Ø§Ù† Ø§Ø³Øª. Ù‡Ù…Ú†Ù†ÛŒÙ† Ù…Ø±Ø§Ù‚Ø¨ Ø¨Ø§Ø´ÛŒØ¯: Ø¢Ø¨â€ŒÙˆÙ‡ÙˆØ§ Ø¯Ø± Ø¢لÙ…Ø§Ù† Ø¨Ø³ÛŒØ§Ø± ØªØºÛŒÛŒØ±Ù¾Ø°ÛŒØ± Ø§Ø³Øª Ùˆ Ù…Ù…Ú©Ù† Ø§Ø³Øª ØµØ¨Ø­ Ø¢ÙØªØ§Ø¨ÛŒ Ùˆ Ø¹ØµØ± Ø¨Ø§Ø±Ø§Ù†ÛŒ Ø¨Ø§Ø´Ø¯!",

  examData: {
    questions: [
      { question: "ÙˆÙ‚ØªÛŒ Ø¨Ø§Ø±Ø§Ù† Ù…ÛŒâ€ŒØ¢ÛŒØ¯ Ú†ØªØ± Ù…ÛŒâ€ŒØ¨Ø±Ù…:", options: ["Wenn es regnet, nehme ich einen Schirm.", "Wenn es regnet, ich nehme einen Schirm.", "Es regnet wenn nehme ich Schirm.", "Ich nehme Schirm wenn es regnet."], answer: 0 },
      { question: "Ø¨Ø±Ù Ø¢Ù…Ø¯Ù†:", options: ["es regnet", "es schneit", "es ist windig", "es ist bewÃ¶lkt"], answer: 1 },
      { question: "Ø¢ÙØªØ§Ø¨ Ù…ÛŒâ€ŒØªØ§Ø¨Ø¯:", options: ["Die Sonne scheint.", "Die Sonne regnet.", "Die Sonne weht.", "Die Sonne schneit."], answer: 0 },
      { question: "Ù‡ÙˆØ§ Ø³Ø±Ø¯ Ø§Ø³Øª:", options: ["Es ist heiÃŸ.", "Es ist warm.", "Es ist kalt.", "Es ist kÃ¼hl."], answer: 2 },
      { question: "Ø§Ø¨Ø±ÛŒ:", options: ["sonnig", "bewÃ¶lkt", "windig", "regnerisch"], answer: 1 },
      { question: "ÙˆÙ‚ØªÛŒ Ù‡ÙˆØ§ Ú¯Ø±Ù… Ø§Ø³Øª Ø´Ù†Ø§ Ù…ÛŒâ€ŒØ±ÙˆÙ…:", options: ["Wenn es heiÃŸ ist, gehe ich schwimmen.", "Wenn es heiÃŸ ist, ich gehe schwimmen.", "Es heiÃŸ wenn gehe ich schwimmen.", "Ich schwimme wenn heiÃŸ ist."], answer: 0 },
      { question: "Ø¨Ø§Ø¯ Ù…ÛŒâ€ŒÙˆØ²Ø¯:", options: ["Es weht.", "Der Wind weht.", "Die Wolke weht.", "Der Regen weht."], answer: 1 },
      { question: "Ù…Ù† Ø¨Ù‡Ø§Ø± Ø±Ø§ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù…:", options: ["Ich mag den FrÃ¼hling.", "Ich mag der FrÃ¼hling.", "Ich mag das FrÃ¼hling.", "Ich mag die FrÃ¼hling."], answer: 0 },
      { question: "Ø¯Ø± Ø®Ø§Ù†Ù‡ Ù…Ø§Ù†Ø¯Ù†:", options: ["zu Hause bleiben", "nach Hause gehen", "nach Hause kommen", "zu Hause fahren"], answer: 0 },
      { question: "Ø¯Ù…Ø§ÛŒ Ù‡ÙˆØ§ Û²Ûµ Ø¯Ø±Ø¬Ù‡:", options: ["Die Temperatur liegt bei 25 Grad.", "Das Wetter ist 25 Grad.", "Es ist 25 Grad warm.", "Die Temperatur ist 25."], answer: 0 }
    ]
  }
};
