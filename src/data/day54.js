export const day54Data = {
  title: "Ø±ÙˆØ² ÛµÛ´: لÙ‡Ø¬Ù‡â€ŒÙ‡Ø§ØŒ Ø«Ø¨Øª Ø²Ø¨Ø§Ù† Ùˆ ØªÙØ§ÙˆØª Ø¢لÙ…Ø§Ù†/Ø§ØªØ±ÛŒØ´/Ø³ÙˆÛŒÛŒØ³",
  objective: "Ø¢لÙ…Ø§Ù†ÛŒ ÙÙ‚Ø· ÛŒÚ© Ø²Ø¨Ø§Ù† Ù†ÛŒØ³Øª! Ø¢لÙ…Ø§Ù†ÛŒ Ú©Ù‡ Ø¯Ø± Ù…ÙˆÙ†ÛŒØ® ØµØ­Ø¨Øª Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ø¨Ø§ Ø¢لÙ…Ø§Ù†ÛŒ Ø¨Ø±لÛŒÙ† ÛŒØ§ ÙˆÛŒÙ† ÙØ±Ù‚ Ø¯Ø§Ø±Ø¯. Ø¯Ø± Ø§ÛŒÙ† Ø±ÙˆØ² Ø¨Ø§ ØªÙØ§ÙˆØªâ€ŒÙ‡Ø§ÛŒ لÙ‡Ø¬Ù‡â€ŒØ§ÛŒ Ùˆ Ø«Ø¨Øª Ø²Ø¨Ø§Ù† Ø¢Ø´Ù†Ø§ Ù…ÛŒâ€ŒØ´ÙˆÛŒØ¯.",

  grammarData: {
    subtitle: "ØªÙØ§ÙˆØªâ€ŒÙ‡Ø§ÛŒ Ù…Ù†Ø·Ù‚Ù‡â€ŒØ§ÛŒ Ø²Ø¨Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒ",
    content: [
      {
        type: "text",
        title: "Û±. Ø³Ù‡ Ú©Ø´ÙˆØ±ØŒ ÛŒÚ© Ø²Ø¨Ø§Ù†ØŸ",
        text: "Ø²Ø¨Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒ Ø¯Ø± Ø³Ù‡ Ú©Ø´ÙˆØ± Ø¢لÙ…Ø§Ù†ØŒ Ø§ØªØ±ÛŒØ´ Ùˆ Ø³ÙˆÛŒÛŒØ³ Ø±Ø³Ù…ÛŒ Ø§Ø³Øª. Ø§Ù…Ø§ Ù‡Ø± Ú©Ø´ÙˆØ± Ú©لÙ…Ø§Øª Ùˆ ØªلÙØ¸ Ù…Ø®ØµÙˆØµ Ø®ÙˆØ¯Ø´ Ø±Ø§ Ø¯Ø§Ø±Ø¯. Ù…Ø«لØ§Ù‹ Â«Ø³ÛŒØ¨â€ŒØ²Ù…ÛŒÙ†ÛŒÂ» Ø¯Ø± Ø¢لÙ…Ø§Ù† KartoffelØŒ Ø¯Ø± Ø§ØªØ±ÛŒØ´ Erdapfel Ùˆ Ø¯Ø± Ø³ÙˆÛŒÛŒØ³ HÃ¤rdÃ¶pfli Ø§Ø³Øª!"
      },
      {
        type: "table",
        title: "ØªÙØ§ÙˆØª Ú©لÙ…Ø§Øª Ø¨ÛŒÙ† Ø¢لÙ…Ø§Ù†ØŒ Ø§ØªØ±ÛŒØ´ Ùˆ Ø³ÙˆÛŒÛŒØ³",
        rows: [
          { de: "Kartoffel (DE) / ErdÃ¤pfel (AT) / HÃ¤rdÃ¶pfli (CH)", fa: "Ø³ÛŒØ¨â€ŒØ²Ù…ÛŒÙ†ÛŒ â€” Ù‡Ø± Ø³Ù‡ Ú©Ø´ÙˆØ± ÛŒÚ© Ú†ÛŒØ²ØŒ Ø³Ù‡ Ú©لÙ…Ù‡ Ù…ØªÙØ§ÙˆØª!" },
          { de: "Tomate (DE) / Paradeiser (AT)", fa: "Ú¯ÙˆØ¬Ù‡â€ŒÙØ±Ù†Ú¯ÛŒ â€” Ø§ØªØ±ÛŒØ´ÛŒâ€ŒÙ‡Ø§ Ú©لÙ…Ù‡ Ú©Ø§Ù…لØ§Ù‹ Ù…ØªÙØ§ÙˆØªÛŒ Ø¯Ø§Ø±Ù†Ø¯" },
          { de: "TÃ¼te (DE) / Sackerl (AT) / SÃ¤ckli (CH)", fa: "Ú©ÛŒØ³Ù‡/Ù†Ø§ÛŒلÙˆÙ†" },
          { de: "JÃ¤nner (AT) / Januar (DE)", fa: "Ú˜Ø§Ù†ÙˆÛŒÙ‡ â€” Ø§ØªØ±ÛŒØ´ÛŒâ€ŒÙ‡Ø§ JÃ¤nner Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯" },
          { de: "GrÃ¼ÃŸ Gott (AT/DE-SÃ¼d) / Guten Tag (DE)", fa: "Ø³لØ§Ù… â€” Ø§ØªØ±ÛŒØ´ÛŒâ€ŒÙ‡Ø§ Ùˆ Ø¨Ø§ÙˆØ§Ø±ÛŒØ§ÛŒÛŒâ€ŒÙ‡Ø§ Ø§Ø² GrÃ¼ÃŸ Gott Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯" },
          { de: "Pfiat di (AT/DE-SÃ¼d) / TschÃ¼ss (DE)", fa: "Ø®Ø¯Ø§Ø­Ø§ÙØ¸ â€” Ø®Ø¯Ø§Ø­Ø§ÙØ¸ÛŒ Ø®ÙˆØ¯Ù…Ø§Ù†ÛŒ Ø¯Ø± Ø¬Ù†ÙˆØ¨" }
        ]
      },
      {
        type: "text",
        title: "Û². لÙ‡Ø¬Ù‡â€ŒÙ‡Ø§ÛŒ Ù…Ù‡Ù… Ø¢لÙ…Ø§Ù†ÛŒ",
        text: "لÙ‡Ø¬Ù‡ (Dialekt) Ø¨Ø§ Ø«Ø¨Øª Ø²Ø¨Ø§Ù† (Umgangssprache) ÙØ±Ù‚ Ø¯Ø§Ø±Ø¯. لÙ‡Ø¬Ù‡ ØªلÙØ¸ Ùˆ Ú©لÙ…Ø§Øª Ù…Ø­لÛŒ Ø§Ø³Øª. Ù…Ù‡Ù…â€ŒØªØ±ÛŒÙ† لÙ‡Ø¬Ù‡â€ŒÙ‡Ø§:"
      },
      {
        type: "examples",
        title: "لÙ‡Ø¬Ù‡â€ŒÙ‡Ø§ÛŒ Ù…Ø¹Ø±ÙˆÙ",
        items: [
          { de: "Bayerisch (Ø¨Ø§ÛŒØ±Ù†): Servus! / GrÃ¼ÃŸ Gott! / Mia san mia! (Ù…Ø§ Ù‡Ù…ÛŒÙ†ÛŒÙ… Ú©Ù‡ Ù‡Ø³ØªÛŒÙ…!)", fa: "لÙ‡Ø¬Ù‡ Ø¨Ø§ÙˆØ§Ø±ÛŒØ§ÛŒÛŒ: Ø¨Ø³ÛŒØ§Ø± Ø®ÙˆØ¯Ù…Ø§Ù†ÛŒ Ùˆ Ø¢Ù‡Ù†Ú¯ÛŒÙ†. Ø¨Ø§Ø²ÛŒÚ¯Ø±Ø§Ù†ÛŒ Ù…Ø«ل Arnold Schwarzenegger Ø¨Ø§ Ø§ÛŒÙ† لÙ‡Ø¬Ù‡ Ø­Ø±Ù Ù…ÛŒâ€ŒØ²Ù†Ù†Ø¯." },
          { de: "Berlinerisch (Ø¨Ø±لÛŒÙ†): ick (ich), dit (das), wa? (nicht wahr?)", fa: "لÙ‡Ø¬Ù‡ Ø¨Ø±لÛŒÙ†ÛŒ: Ø®ÛŒلÛŒ Ø³Ø±ÛŒØ¹ Ùˆ Ø¨Ø§ Ø­Ø°Ù Ø­Ø±ÙˆÙ. Â«Ick liebe ditÂ» = Â«Ich liebe dasÂ»" },
          { de: "KÃ¶lsch (Ú©لÙ†): Alaaf! / Was kÃ¼tt, dat kÃ¼tt.", fa: "لÙ‡Ø¬Ù‡ Ú©لÙ†ÛŒ: Ø¨Ø³ÛŒØ§Ø± Ø´Ø§Ø¯ Ùˆ Ù…ÙˆØ³ÛŒÙ‚Ø§ÛŒÛŒ. Ú©Ø§Ø±Ù†Ø§ÙˆØ§ل Ú©لÙ† Ø¨Ø§ Ø§ÛŒÙ† لÙ‡Ø¬Ù‡ Ø¨Ø±Ú¯Ø²Ø§Ø± Ù…ÛŒâ€ŒØ´ÙˆØ¯." },
          { de: "Schweizerdeutsch (Ø³ÙˆÛŒÛŒØ³): GrÃ¼ezi! / Merci vilmals!", fa: "لÙ‡Ø¬Ù‡ Ø³ÙˆÛŒÛŒØ³ÛŒ: Ø¨Ø±Ø§ÛŒ Ø¢لÙ…Ø§Ù†ÛŒâ€ŒØ²Ø¨Ø§Ù†Ø§Ù† Ù‡Ù… Ú¯Ø§Ù‡ÛŒ Ù‚Ø§Ø¨ل ÙÙ‡Ù… Ù†ÛŒØ³Øª! ØªØ±Ú©ÛŒØ¨ÛŒ Ø§Ø² Ø¢لÙ…Ø§Ù†ÛŒ Ùˆ ÙØ±Ø§Ù†Ø³ÙˆÛŒ." }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÙØ§ÙˆØªâ€ŒÙ‡Ø§ÛŒ Ù…Ù†Ø·Ù‚Ù‡â€ŒØ§ÛŒ",
        instruction: "Ú©لÙ…Ù‡ Ù…Ù†Ø·Ù‚Ù‡â€ŒØ§ÛŒ Ù…Ù†Ø§Ø³Ø¨ Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯:",
        blanks: [
          { sentence: "Ø¯Ø± Ø§ØªØ±ÛŒØ´ Ø¨Ù‡ Ú˜Ø§Ù†ÙˆÛŒÙ‡ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯ ___ .", answer: "JÃ¤nner", hint: "Ø¨Ø§ J Ø´Ø±ÙˆØ¹ Ù…ÛŒâ€ŒØ´ÙˆØ¯" },
          { sentence: "Ø¯Ø± Ø¨Ø§ÙˆØ§Ø±ÛŒØ§ Ø¨Ù‡ Ø¬Ø§ÛŒ Guten Tag Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯ ___ .", answer: "GrÃ¼ÃŸ Gott", hint: "Ø¨Ø§ G Ø´Ø±ÙˆØ¹ Ù…ÛŒâ€ŒØ´ÙˆØ¯" },
          { sentence: "Ø¯Ø± Ø§ØªØ±ÛŒØ´ Ø¨Ù‡ Ø³ÛŒØ¨â€ŒØ²Ù…ÛŒÙ†ÛŒ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯ ___ .", answer: "ErdÃ¤pfel", hint: "Ø³ÛŒØ¨ Ø²Ù…ÛŒÙ†ÛŒ = Ø²Ù…ÛŒÙ†â€ŒØ³ÛŒØ¨" },
          { sentence: "Ø¯Ø± Ø¢لÙ…Ø§Ù† Ø´Ù…Ø§لÛŒ Ø¨Ù‡ Ø³لØ§Ù… Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯ ___ .", answer: "Moin", hint: "Ú©ÙˆØªØ§Ù‡â€ŒØªØ±ÛŒÙ† Ø³لØ§Ù… Ø¢لÙ…Ø§Ù†ÛŒ" }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ†: لÙ‡Ø¬Ù‡ Ùˆ Ø«Ø¨Øª Ø²Ø¨Ø§Ù†",
        questions: [
          {
            question: "Ø¯Ø± Ø§ØªØ±ÛŒØ´ Ø¨Ù‡ Ø¬Ø§ÛŒ Tomate Ú†Ù‡ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯ØŸ",
            questionDe: "Was sagt man in Ã–sterreich statt لTomateل?",
            options: [
              { text: "Erdapfel", isCorrect: false },
              { text: "Paradeiser", isCorrect: true },
              { text: "HÃ¤rdÃ¶pfli", isCorrect: false }
            ],
            explanation: "Ø¯Ø± Ø§ØªØ±ÛŒØ´ Ú¯ÙˆØ¬Ù‡â€ŒÙØ±Ù†Ú¯ÛŒ Paradeiser Ù†Ø§Ù…ÛŒØ¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          },
          {
            question: "Â«Servus!Â» Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø¯Ø± Ú©Ø¬Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wo benutzt man لServusل?",
            options: [
              { text: "ÙÙ‚Ø· Ø¯Ø± Ø¨Ø±لÛŒÙ†", isCorrect: false },
              { text: "Ø¯Ø± Ø¬Ù†ÙˆØ¨ Ø¢لÙ…Ø§Ù† Ùˆ Ø§ØªØ±ÛŒØ´", isCorrect: true },
              { text: "Ø¯Ø± Ø³ÙˆÛŒÛŒØ³", isCorrect: false }
            ],
            explanation: "Servus Ø¯Ø± Ø¨Ø§ÙˆØ§Ø±ÛŒØ§ Ùˆ Ø§ØªØ±ÛŒØ´ Ø¨Ø³ÛŒØ§Ø± Ø±Ø§ÛŒØ¬ Ø§Ø³Øª. Ù‡Ù… Ø¨Ø±Ø§ÛŒ Ø³لØ§Ù… Ùˆ Ù‡Ù… Ø®Ø¯Ø§Ø­Ø§ÙØ¸ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "لØºØ§Øª لÙ‡Ø¬Ù‡ Ùˆ ØªÙØ§ÙˆØª Ù…Ù†Ø·Ù‚Ù‡â€ŒØ§ÛŒ (DialektwÃ¶rter)",
        words: [
          { de: "der Dialekt", fa: "لÙ‡Ø¬Ù‡", article: "der", plural: "die Dialekte", examples: [{ de: "Jeder Deutsche hat einen kleinen Dialekt.", fa: "Ù‡Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ú©Ù…ÛŒ لÙ‡Ø¬Ù‡ Ø¯Ø§Ø±Ø¯." }] },
          { de: "hochdeutsch", fa: "Ø¢لÙ…Ø§Ù†ÛŒ Ù…Ø¹ÛŒØ§Ø± / Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯", article: "-", plural: "-", examples: [{ de: "Bitte sprechen Sie Hochdeutsch!", fa: "لØ·ÙØ§Ù‹ Ø¢لÙ…Ø§Ù†ÛŒ Ù…Ø¹ÛŒØ§Ø± ØµØ­Ø¨Øª Ú©Ù†ÛŒØ¯!" }] },
          { de: "die Aussprache", fa: "ØªلÙØ¸", article: "die", plural: "die Aussprachen", examples: [{ de: "Die Aussprache in Bayern ist ganz anders.", fa: "ØªلÙØ¸ Ø¯Ø± Ø¨Ø§ÙˆØ§Ø±ÛŒØ§ Ú©Ø§Ù…لØ§Ù‹ Ù…ØªÙØ§ÙˆØª Ø§Ø³Øª." }] },
          { de: "regional", fa: "Ù…Ù†Ø·Ù‚Ù‡â€ŒØ§ÛŒ / Ù…Ø­لÛŒ", article: "-", plural: "-", examples: [{ de: "Das ist ein regionales Wort.", fa: "Ø§ÛŒÙ† ÛŒÚ© Ú©لÙ…Ù‡ Ù…Ø­لÛŒ Ø§Ø³Øª." }] },
          { de: "verstehen / nicht verstehen", fa: "ÙÙ‡Ù…ÛŒØ¯Ù† / Ù†ÙÙ‡Ù…ÛŒØ¯Ù†", article: "-", plural: "-", examples: [{ de: "Schweizerdeutsch kann ich kaum verstehen.", fa: "لÙ‡Ø¬Ù‡ Ø³ÙˆÛŒÛŒØ³ÛŒ Ø±Ø§ Ø¨Ù‡ Ø³Ø®ØªÛŒ Ù…ÛŒâ€ŒÙÙ‡Ù…Ù…." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Deutsch in drei LÃ¤ndern\n\nDeutsch wird nicht nur in Deutschland gesprochen. Auch in Ã–sterreich und der Schweiz ist Deutsch Amtssprache. Aber es gibt viele Unterschiede!\n\nIn Wien sagt man zum Beispiel لParadeiserل statt لTomateل und لJÃ¤nnerل statt لJanuarل. Das klingt fÃ¼r Deutsche manchmal komisch. In der Schweiz sagen die Leute لGrÃ¼eziل statt لGuten Tagل und لMerci vilmalsل statt لVielen Dankل.\n\nAuch in Deutschland selbst gibt es groÃŸe Unterschiede. In Bayern sagt man لServusل und لGrÃ¼ÃŸ Gottل, in Berlin لNa?ل und لIckل. Am besten lernt man zuerst Hochdeutsch, dann kann man sich Ã¼berall verstÃ¤ndigen.",
      questions: [
        { question: "Ø¯Ø± Ú©Ø¯Ø§Ù… Ø³Ù‡ Ú©Ø´ÙˆØ± Ø¢لÙ…Ø§Ù†ÛŒ Ø²Ø¨Ø§Ù† Ø±Ø³Ù…ÛŒ Ø§Ø³ØªØŸ", answer: "Ø¢لÙ…Ø§Ù†ØŒ Ø§ØªØ±ÛŒØ´ Ùˆ Ø³ÙˆÛŒÛŒØ³" },
        { question: "Ø¯Ø± ÙˆÛŒÙ† Ø¨Ù‡ Ø¬Ø§ÛŒ Tomate Ùˆ Januar Ú†Ù‡ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯ØŸ", answer: "Paradeiser Ùˆ JÃ¤nner" },
        { question: "Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ú†Ù‡ ØªÙˆØµÛŒÙ‡â€ŒØ§ÛŒ Ø¨Ø±Ø§ÛŒ ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ØŸ", answer: "Ø§Ùˆ ØªÙˆØµÛŒÙ‡ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ø§Ùˆل Ø¢لÙ…Ø§Ù†ÛŒ Ù…Ø¹ÛŒØ§Ø± (Hochdeutsch) ÛŒØ§Ø¯ Ø¨Ú¯ÛŒØ±ÛŒØ¯ ØªØ§ Ø¨ØªÙˆØ§Ù†ÛŒØ¯ Ù‡Ù…Ù‡â€ŒØ¬Ø§ Ø§Ø±ØªØ¨Ø§Ø· Ø¨Ø±Ù‚Ø±Ø§Ø± Ú©Ù†ÛŒØ¯." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù…Ù‚Ø§ÛŒØ³Ù‡ ØªÙØ§ÙˆØªâ€ŒÙ‡Ø§ÛŒ Ø²Ø¨Ø§Ù†ÛŒ",
      prompt: "ÛŒÚ© Ù…ØªÙ† Ú©ÙˆØªØ§Ù‡ (Ûµ Ø¬Ù…لÙ‡) Ø¯Ø±Ø¨Ø§Ø±Ù‡ ØªÙØ§ÙˆØªâ€ŒÙ‡Ø§ÛŒ Ø²Ø¨Ø§Ù†ÛŒ Ø¨ÛŒÙ† Ø¢لÙ…Ø§Ù†ØŒ Ø§ØªØ±ÛŒØ´ Ùˆ Ø³ÙˆÛŒÛŒØ³ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.",
      steps: [
        { title: "Ù…Ø¹Ø±ÙÛŒ Ù…ÙˆØ¶ÙˆØ¹", text: "Ø¨Ú¯ÙˆÛŒÛŒØ¯ Ø¢لÙ…Ø§Ù†ÛŒ Ø¯Ø± Ø³Ù‡ Ú©Ø´ÙˆØ± ØµØ­Ø¨Øª Ù…ÛŒâ€ŒØ´ÙˆØ¯.", example: { de: "Deutsch wird in drei LÃ¤ndern gesprochen: Deutschland, Ã–sterreich und die Schweiz.", fa: "Ø¢لÙ…Ø§Ù†ÛŒ Ø¯Ø± Ø³Ù‡ Ú©Ø´ÙˆØ± ØµØ­Ø¨Øª Ù…ÛŒâ€ŒØ´ÙˆØ¯: Ø¢لÙ…Ø§Ù†ØŒ Ø§ØªØ±ÛŒØ´ Ùˆ Ø³ÙˆÛŒÛŒØ³." } },
        { title: "Ù…Ø«Ø§ل ØªÙØ§ÙˆØª", text: "ÛŒÚ© ØªÙØ§ÙˆØª ÐºÐ¾Ð½ÐºÑ€ÐµÑ‚ÛŒ Ø¨ÛŒØ§ÙˆØ±ÛŒØ¯.", example: { de: "In Ã–sterreich sagt man لErdÃ¤pfelل statt لKartoffelل.", fa: "Ø¯Ø± Ø§ØªØ±ÛŒØ´ Ø¨Ù‡ Ø³ÛŒØ¨â€ŒØ²Ù…ÛŒÙ†ÛŒ ErdÃ¤pfel Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯." } },
        { title: "Ù†ØªÛŒØ¬Ù‡â€ŒÚ¯ÛŒØ±ÛŒ", text: "Ù†Ø¸Ø± Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ú¯ÙˆÛŒÛŒØ¯.", example: { de: "Ich finde diese Unterschiede sehr interessant!", fa: "Ù…Ù† Ø§ÛŒÙ† ØªÙØ§ÙˆØªâ€ŒÙ‡Ø§ Ø±Ø§ Ø®ÛŒلÛŒ Ø¬Ø§لØ¨ Ù…ÛŒâ€ŒØ¯Ø§Ù†Ù…!" } }
      ],
      modelAnswer: "Deutsch wird in Deutschland, Ã–sterreich und der Schweiz gesprochen. Es gibt aber viele Unterschiede! In Ã–sterreich sagt man لParadeiserل statt لTomateل. In der Schweiz sagt man لGrÃ¼eziل statt لGuten Tagل. Ich finde diese regionalen Unterschiede sehr interessant und mÃ¶chte eines Tages auch Bayerisch lernen!"
    }
  ],

  listening: [
    {
      title: "Û±. ØªÙØ§ÙˆØª لÙ‡Ø¬Ù‡â€ŒÙ‡Ø§ÛŒ Ø¢لÙ…Ø§Ù†ÛŒ",
      source: "German Dialects Compared",
      link: "https://www.youtube.com/watch?v=VlVbRqFJBUQ",
      instructions: "Û±. ÙˆÛŒØ¯ÛŒÙˆ Ø±Ø§ Ø¨Ø¨ÛŒÙ†ÛŒØ¯ Ùˆ Ø¨Ù‡ ØªÙØ§ÙˆØª ØªلÙØ¸â€ŒÙ‡Ø§ Ø¯Ù‚Øª Ú©Ù†ÛŒØ¯.\nÛ². Ø³Ø¹ÛŒ Ú©Ù†ÛŒØ¯ Ú†Ù†Ø¯ Ú©لÙ…Ù‡ Ø±Ø§ Ø¨Ø§ لÙ‡Ø¬Ù‡ Ø¨Ø§ÙˆØ§Ø±ÛŒØ§ÛŒÛŒ ØªÚ©Ø±Ø§Ø± Ú©Ù†ÛŒØ¯.\nÛ³. Ú©Ø¯Ø§Ù… لÙ‡Ø¬Ù‡ Ø¨Ø±Ø§ÛŒ Ø´Ù…Ø§ Ø¬Ø§لØ¨â€ŒØªØ± Ø§Ø³ØªØŸ"
    }
  ],

  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† لÙ‡Ø¬Ù‡ â€” Ø³لØ§Ù… Ø¨Ø§ لÙ‡Ø¬Ù‡â€ŒÙ‡Ø§ÛŒ Ù…Ø®ØªلÙ",
      pattern: "Hochdeutsch: Guten Tag!\nBayerisch: GrÃ¼ÃŸ Gott! / Servus!\nBerlinerisch: Na?\nSchweizerdeutsch: GrÃ¼ezi!\nNorddeutsch: Moin!",
      exercise: "Ù‡Ø± Ø³لØ§Ù… Ø±Ø§ Ø¨Ø§ لØ­Ù† Ùˆ Ø¢Ù‡Ù†Ú¯ Ù…Ù†Ø·Ù‚Ù‡â€ŒØ§ÛŒ ØªÚ©Ø±Ø§Ø± Ú©Ù†ÛŒØ¯. ØªØµÙˆØ± Ú©Ù†ÛŒØ¯ Ø¯Ø± Ù‡Ø± Ø´Ù‡Ø± Ù‡Ø³ØªÛŒØ¯ Ùˆ Ø¨Ø§ Ù…Ø±Ø¯Ù… Ù…Ø­لÛŒ Ø³لØ§Ù… Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯."
    }
  ],

  cultureTip: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: ÙˆÙ‚ØªÛŒ Ø¨Ù‡ Ø¢لÙ…Ø§Ù† Ø³ÙØ± Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯ØŒ Ù†Ú¯Ø±Ø§Ù† لÙ‡Ø¬Ù‡â€ŒÙ‡Ø§ Ù†Ø¨Ø§Ø´ÛŒØ¯! Ø§Ú©Ø«Ø± Ø¢لÙ…Ø§Ù†ÛŒâ€ŒÙ‡Ø§ ÙˆÙ‚ØªÛŒ Ù…ÛŒâ€ŒÙÙ‡Ù…Ù†Ø¯ Ø´Ù…Ø§ Ø®Ø§Ø±Ø¬ÛŒ Ù‡Ø³ØªÛŒØ¯ØŒ Ø³ÙˆÛŒÛŒÚ† Ø¨Ù‡ Hochdeutsch (Ø¢لÙ…Ø§Ù†ÛŒ Ù…Ø¹ÛŒØ§Ø±) Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯. Ø§Ù…Ø§ Ø§Ú¯Ø± Ø¨ØªÙˆØ§Ù†ÛŒØ¯ ÛŒÚ© Ú©لÙ…Ù‡ Ù…Ø­لÛŒ Ù…Ø«ل Servus ÛŒØ§ GrÃ¼ÃŸ Gott Ø±Ø§ Ø¨Ú¯ÙˆÛŒÛŒØ¯ØŒ Ø¨Ø³ÛŒØ§Ø± Ø®ÙˆØ´Ø­Ø§ل Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯ Ùˆ Ø¨Ø±Ø®ÙˆØ±Ø¯ Ú¯Ø±Ù…â€ŒØªØ±ÛŒ Ø®ÙˆØ§Ù‡Ù†Ø¯ Ø¯Ø§Ø´Øª!",

  examData: {
    questions: [
      { question: "Ø¯Ø± Ø§ØªØ±ÛŒØ´ Ø¨Ù‡ Ú˜Ø§Ù†ÙˆÛŒÙ‡ Ú†Ù‡ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯ØŸ", options: ["Januar", "JÃ¤nner", "Januarer", "Janier"], answer: 1 },
      { question: "Â«GrÃ¼ÃŸ GottÂ» Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø¯Ø± Ú©Ø¬Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ø¨Ø±لÛŒÙ†", "Ù‡Ø§Ù…Ø¨ÙˆØ±Ú¯", "Ø¬Ù†ÙˆØ¨ Ø¢لÙ…Ø§Ù† Ùˆ Ø§ØªØ±ÛŒØ´", "Ø³ÙˆÛŒÛŒØ³"], answer: 2 },
      { question: "Ø¯Ø± Ø§ØªØ±ÛŒØ´ Ø¨Ù‡ Ú¯ÙˆØ¬Ù‡â€ŒÙØ±Ù†Ú¯ÛŒ Ú†Ù‡ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯ØŸ", options: ["Tomate", "Paradeiser", "Erdapfel", "HÃ¤rdÃ¶pfli"], answer: 1 },
      { question: "Ø¢لÙ…Ø§Ù†ÛŒ Ù…Ø¹ÛŒØ§Ø± (Hochdeutsch) ÛŒØ¹Ù†ÛŒ...", options: ["Ø¢لÙ…Ø§Ù†ÛŒ Ú©ÙˆÙ‡Ø³ØªØ§Ù†ÛŒ", "Ø¢لÙ…Ø§Ù†ÛŒ Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯/Ø±Ø³Ù…ÛŒ", "Ø¢لÙ…Ø§Ù†ÛŒ Ø´Ù…Ø§لÛŒ", "Ø¢لÙ…Ø§Ù†ÛŒ Ø³ÙˆÛŒÛŒØ³ÛŒ"], answer: 1 },
      { question: "Â«ServusÂ» Ù‡Ù… Ø¨Ø±Ø§ÛŒ Ø³لØ§Ù… Ùˆ Ù‡Ù… Ø¨Ø±Ø§ÛŒ... Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯.", options: ["ØªØ´Ú©Ø±", "Ø®Ø¯Ø§Ø­Ø§ÙØ¸ÛŒ", "Ù…Ø¹Ø°Ø±Øªâ€ŒØ®ÙˆØ§Ù‡ÛŒ", "Ø¯Ø±Ø®ÙˆØ§Ø³Øª"], answer: 1 },
      { question: "Ø¯Ø± Ø³ÙˆÛŒÛŒØ³ Ø¨Ù‡ Ø¬Ø§ÛŒ Â«Guten TagÂ» Ú†Ù‡ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÙ†Ø¯ØŸ", options: ["Servus", "Moin", "GrÃ¼ezi", "Na"], answer: 2 },
      { question: "لÙ‡Ø¬Ù‡ Ø¨Ø±لÛŒÙ†ÛŒ Ø¨Ù‡ Ø¬Ø§ÛŒ Â«ichÂ» Ø§Ø² Ú†Ù‡ Ú©لÙ…Ù‡â€ŒØ§ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", options: ["mich", "ick", "isch", "ech"], answer: 1 },
      { question: "Â«MoinÂ» Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø¯Ø± Ú©Ø¬Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ø¬Ù†ÙˆØ¨ Ø¢لÙ…Ø§Ù†", "Ø§ØªØ±ÛŒØ´", "Ø´Ù…Ø§ل Ø¢لÙ…Ø§Ù†", "Ø³ÙˆÛŒÛŒØ³"], answer: 2 }
    ]
  }
};
