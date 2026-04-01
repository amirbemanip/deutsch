export const day39Data = {
  title: "Ø±ÙˆØ² Û³Û¹: Ú¯ÙØªØ§Ø± ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… (Indirekte Rede)",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù†Ø­ÙˆÙ‡ Ù†Ù‚ل Ù‚Ùˆل ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… Ø¯Ø± Ø²Ø¨Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒ Ø¨Ø§ dass Ùˆ Konjunktiv I",

  grammarData: {
    subtitle: "Indirekte Rede: Ù†Ù‚ل Ù‚Ùˆل Ø¢Ù†Ú†Ù‡ Ø¯ÛŒÚ¯Ø±Ø§Ù† Ú¯ÙØªÙ‡â€ŒØ§Ù†Ø¯",
    content: [
      {
        type: "text",
        title: "Û±. Indirekte Rede Ú†ÛŒØ³ØªØŸ",
        text: "ÙˆÙ‚ØªÛŒ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡ÛŒÙ… Ø­Ø±Ù Ú©Ø³ÛŒ Ø±Ø§ Ø¨Ø¯ÙˆÙ† Ù†Ù‚ل Ù…Ø³ØªÙ‚ÛŒÙ… Ø¨ÛŒØ§Ù† Ú©Ù†ÛŒÙ…ØŒ Ø§Ø² Ú¯ÙØªØ§Ø± ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…. Ø¯Ùˆ Ø±ÙˆØ´ ÙˆØ¬ÙˆØ¯ Ø¯Ø§Ø±Ø¯: Ø±ÙˆØ´ Ø³Ø§Ø¯Ù‡ Ø¨Ø§ dass (Ú©Ù‡ + Ø¬Ù…لÙ‡ Ø¹Ø§Ø¯ÛŒ) Ùˆ Ø±ÙˆØ´ Ø±Ø³Ù…ÛŒ Ø¨Ø§ Konjunktiv I. Ø¯Ø± Ø³Ø·Ø­ B1ØŒ Ø±ÙˆØ´ dass Ø±Ø§ÛŒØ¬â€ŒØªØ± Ùˆ Ø¢Ø³Ø§Ù†â€ŒØªØ± Ø§Ø³Øª. Konjunktiv I Ø¨ÛŒØ´ØªØ± Ø¯Ø± Ø±ÙˆØ²Ù†Ø§Ù…Ù‡â€ŒÙ†Ú¯Ø§Ø±ÛŒ Ùˆ Ù…ØªÙˆÙ† Ø±Ø³Ù…ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
      },
      {
        type: "table",
        title: "Ø§ÙØ¹Ø§ل Ú¯Ø²Ø§Ø±Ø´â€ŒØ¯Ù‡Ù†Ø¯Ù‡ (Verba dicendi)",
        rows: [
          { de: "sagen (dass)", fa: "Ú¯ÙØªÙ†: Er sagt, dass er mÃ¼de ist." },
          { de: "meinen", fa: "Ù†Ø¸Ø± Ø¯Ø§Ø¯Ù†: Er meint, dass das falsch ist." },
          { de: "behaupten", fa: "Ø§Ø¯Ø¹Ø§ Ú©Ø±Ø¯Ù†: Sie behauptet, dass sie krank ist." },
          { de: "erklÃ¤ren", fa: "ØªÙˆØ¶ÛŒØ­ Ø¯Ø§Ø¯Ù†: Er erklÃ¤rt, dass es einfach ist." },
          { de: "berichten", fa: "Ú¯Ø²Ø§Ø±Ø´ Ø¯Ø§Ø¯Ù†: Sie berichtet, dass alles gut ist." },
          { de: "fragen, ob", fa: "Ù¾Ø±Ø³ÛŒØ¯Ù† Ø¢ÛŒØ§: Er fragt, ob ich komme." },
          { de: "antworten, dass", fa: "Ø¬ÙˆØ§Ø¨ Ø¯Ø§Ø¯Ù†: Sie antwortet, dass sie kommt." },
          { de: "mitteilen, dass", fa: "Ø§Ø·لØ§Ø¹ Ø¯Ø§Ø¯Ù†: Er teilt mit, dass er verreist." }
        ]
      },
      {
        type: "text",
        title: "Û². Ø³Ø§Ø®ØªØ§Ø± Ø¨Ø§ dass",
        text: "Ø¨Ø¹Ø¯ Ø§Ø² ÙØ¹ل Ú¯Ø²Ø§Ø±Ø´â€ŒØ¯Ù‡Ù†Ø¯Ù‡ + dassØŒ Ø¬Ù…لÙ‡ ÙˆØ§Ø¨Ø³ØªÙ‡ Ø¨Ø§ ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø± Ù…ÛŒâ€ŒØ¢ÛŒØ¯. Ø²Ù…Ø§Ù† ÙØ¹ل Ø­ÙØ¸ Ù…ÛŒâ€ŒØ´ÙˆØ¯ (Present â†’ PresentØŒ Perfekt â†’ Perfekt). Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: Ø§Ú¯Ø± ÙØ§Ø¹ل Ø¬Ù…لÙ‡ Ù†Ù‚لâ€ŒÙ‚ÙˆلÛŒ Ø¹ÙˆØ¶ Ø´ÙˆØ¯ØŒ Ø¶Ù…ÛŒØ±Ù‡Ø§ Ù‡Ù… Ø¹ÙˆØ¶ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯. Ù…Ø«Ø§ل: Er sagt: لIch bin mÃ¼de.\" â†’ Er sagt, dass er mÃ¼de ist."
      },
      {
        type: "text",
        title: "Û³. Konjunktiv I (Ù…Ø¹Ø±ÙÛŒ Ù…Ø®ØªØµØ±)",
        text: "Ø¯Ø± Ø±ÙˆØ²Ù†Ø§Ù…Ù‡â€ŒÙ‡Ø§ Ùˆ Ø§Ø®Ø¨Ø§Ø±ØŒ Ø§Ø² Konjunktiv I Ø¨Ø±Ø§ÛŒ Ù†Ù‚ل Ù‚Ùˆل ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: Er sagt, er sei mÃ¼de (Ø§Ùˆ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒØ¯ Ø®Ø³ØªÙ‡ Ø§Ø³Øª). Ø´Ú©ل Konjunktiv I: sei (fÃ¼r sein), habe (fÃ¼r haben), gehe, komme, mache... Ø§Ù…Ø§ Ø¯Ø± Ù…Ú©Ø§لÙ…Ù‡ Ø±ÙˆØ²Ù…Ø±Ù‡ØŒ Ø±ÙˆØ´ dass Ø¨Ø³ÛŒØ§Ø± Ø±Ø§ÛŒØ¬â€ŒØªØ± Ø§Ø³Øª."
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ Ù†Ù‚ل Ù‚Ùˆل ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ…",
        items: [
          { de: "Direkt: لIch habe Hunger.\" â†’ Indirekt: Er sagt, dass er Hunger hat.", fa: "Ù…Ø³ØªÙ‚ÛŒÙ…: Â«Ú¯Ø±Ø³Ù†Ù‡â€ŒØ§Ù….Â» â†’ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ…: Ø§Ùˆ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒØ¯ Ú©Ù‡ Ú¯Ø±Ø³Ù†Ù‡ Ø§Ø³Øª." },
          { de: "Direkt: لIch komme morgen.\" â†’ Indirekt: Sie sagt, dass sie morgen kommt.", fa: "Ù…Ø³ØªÙ‚ÛŒÙ…: Â«ÙØ±Ø¯Ø§ Ù…ÛŒâ€ŒØ¢ÛŒÙ….Â» â†’ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ…: Ø§Ùˆ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒØ¯ Ú©Ù‡ ÙØ±Ø¯Ø§ Ù…ÛŒâ€ŒØ¢ÛŒØ¯." },
          { de: "Direkt: لIch bin nicht einverstanden.\" â†’ Er meint, dass er nicht einverstanden sei.", fa: "Ù…Ø³ØªÙ‚ÛŒÙ…: Â«Ù…ÙˆØ§ÙÙ‚Ù… Ù†ÛŒØ³ØªÙ….Â» â†’ Ø§Ùˆ Ù†Ø¸Ø±Ø´ Ø§ÛŒÙ† Ø§Ø³Øª Ú©Ù‡ Ù…ÙˆØ§ÙÙ‚ Ù†ÛŒØ³Øª." },
          { de: "Direkt: لHast du Zeit?\" â†’ Er fragt, ob ich Zeit habe.", fa: "Ù…Ø³ØªÙ‚ÛŒÙ…: Â«ÙˆÙ‚Øª Ø¯Ø§Ø±ÛŒØŸÂ» â†’ Ø§Ùˆ Ù…ÛŒâ€ŒÙ¾Ø±Ø³Ø¯ Ø¢ÛŒØ§ ÙˆÙ‚Øª Ø¯Ø§Ø±Ù…." },
          { de: "Die Polizei berichtet, dass der Mann verschwunden ist.", fa: "Ù¾لÛŒØ³ Ú¯Ø²Ø§Ø±Ø´ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ Ú©Ù‡ Ù…Ø±Ø¯ Ù†Ø§Ù¾Ø¯ÛŒØ¯ Ø´Ø¯Ù‡ Ø§Ø³Øª." },
          { de: "Der Arzt erklÃ¤rt, dass die Behandlung dauert.", fa: "Ù¾Ø²Ø´Ú© ØªÙˆØ¶ÛŒØ­ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ Ú©Ù‡ Ø¯Ø±Ù…Ø§Ù† Ø·Ùˆل Ù…ÛŒâ€ŒÚ©Ø´Ø¯." }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: ØªØºÛŒÛŒØ± Ø¶Ù…ÛŒØ±Ù‡Ø§",
        text: "ÙˆÙ‚ØªÛŒ Ù†Ù‚ل Ù‚Ùˆل Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯ØŒ Ø¶Ù…ÛŒØ±Ù‡Ø§ Ø¨Ø§ÛŒØ¯ ØªØºÛŒÛŒØ± Ú©Ù†Ù†Ø¯. Ø§Ú¯Ø± Ø´Ø®Øµ Ø§Ùˆل (ich) ØµØ­Ø¨Øª Ú©Ø±Ø¯Ù‡ØŒ ÙˆÙ‚ØªÛŒ Ø´Ù…Ø§ Ù†Ù‚ل Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯ Ø¨Ø§ÛŒØ¯ Ø¨Ù‡ Ø§Ùˆ/Ø¢Ù†â€ŒÙ‡Ø§ ØªØºÛŒÛŒØ± Ø¯Ù‡ÛŒØ¯. Ù…Ø«Ø§ل: Er sagt: لIch bin mÃ¼de.\" â†’ Er sagt, dass ER mÃ¼de ist. (Ù†Ù‡ dass ICH mÃ¼de bin). Ø§ÛŒÙ† Ø±Ø§ÛŒØ¬â€ŒØªØ±ÛŒÙ† Ø§Ø´ØªØ¨Ø§Ù‡ Ø²Ø¨Ø§Ù†â€ŒØ¢Ù…ÙˆØ²Ø§Ù† Ø§Ø³Øª."
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ† Indirekte Rede",
        questions: [
          {
            question: "Ù†Ù‚ل Ù‚Ùˆل ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ…: Er sagt: لIch komme morgen.\" â†’ Er sagt, dass ...",
            questionDe: "Wie lautet der indirekte Satz?",
            options: [
              { text: "er kommt morgen.", isCorrect: false },
              { text: "er morgen kommt.", isCorrect: true },
              { text: "er morgen komme.", isCorrect: false }
            ],
            explanation: "Ø¨Ø§ dass ÙØ¹ل Ø¯Ø± Ø¢Ø®Ø± Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ¢ÛŒØ¯. Ø¶Ù…ÛŒØ± ich Ø¨Ù‡ er ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯."
          },
          {
            question: "Ø¨Ø±Ø§ÛŒ Ø³Ø¤Ø§ل ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… Ø§Ø² Ú†Ù‡ Ú©لÙ…Ù‡â€ŒØ§ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Welches Wort benutzt man fÃ¼r indirekte Fragen?",
            options: [
              { text: "dass", isCorrect: false },
              { text: "ob", isCorrect: true },
              { text: "wenn", isCorrect: false }
            ],
            explanation: "Ø¨Ø±Ø§ÛŒ Ø³Ø¤Ø§ل Ø¨لÙ‡/Ø®ÛŒØ± ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… Ø§Ø² ob Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: Er fragt, ob ich komme."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÙ…Ø±ÛŒÙ† Indirekte Rede",
        instruction: "Ø¬Ù…لØ§Øª Ù…Ø³ØªÙ‚ÛŒÙ… Ø±Ø§ Ø¨Ù‡ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… ØªØ¨Ø¯ÛŒل Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Er sagt: لIch bin krank.\" â†’ Er sagt, dass er krank _______.", answer: "ist", hint: "Ø¶Ù…ÛŒØ± ich â†’ erØŒ ÙØ¹ل ist" },
          { sentence: "Sie sagt: لIch habe keine Zeit.\" â†’ Sie sagt, dass sie keine Zeit _______.", answer: "hat", hint: "Ø¶Ù…ÛŒØ± ich â†’ sieØŒ ÙØ¹ل hat" },
          { sentence: "Er fragt: لKommst du morgen?\" â†’ Er fragt, _______ ich morgen komme.", answer: "ob", hint: "Ø³Ø¤Ø§ل ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… â†’ ob" },
          { sentence: "Sie sagt: لIch war in Berlin.\" â†’ Sie sagt, dass sie in Berlin _______.", answer: "war", hint: "Ø²Ù…Ø§Ù† Ú¯Ø°Ø´ØªÙ‡ Ø­ÙØ¸ Ù…ÛŒâ€ŒØ´ÙˆØ¯" },
          { sentence: "Er meint: لDas ist falsch.\" â†’ Er meint, dass das falsch _______.", answer: "ist", hint: "ÙØ¹ل ist Ø¯Ø± Ø¢Ø®Ø±" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "Ú¯ÙØªØ§Ø± Ùˆ Ø§Ø±ØªØ¨Ø§Ø· (Sprechen und Kommunikation)",
        words: [
          { de: "die Aussage", fa: "Ø§Ø¸Ù‡Ø§Ø± / Ø¨ÛŒØ§Ù†", article: "die", plural: "die Aussagen", examples: [{ de: "Die Aussage des Zeugen war wichtig.", fa: "Ø§Ø¸Ù‡Ø§Ø± Ø´Ø§Ù‡Ø¯ Ù…Ù‡Ù… Ø¨ÙˆØ¯." }] },
          { de: "die Meinung", fa: "Ù†Ø¸Ø± / Ø¹Ù‚ÛŒØ¯Ù‡", article: "die", plural: "die Meinungen", examples: [{ de: "Meiner Meinung nach ist das richtig.", fa: "Ø¨Ù‡ Ù†Ø¸Ø± Ù…Ù† Ø§ÛŒÙ† Ø¯Ø±Ø³Øª Ø§Ø³Øª." }] },
          { de: "behaupten", fa: "Ø§Ø¯Ø¹Ø§ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Er behauptet, dass er unschuldig ist.", fa: "Ø§Ùˆ Ø§Ø¯Ø¹Ø§ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ú©Ù‡ Ø¨ÛŒâ€ŒÚ¯Ù†Ø§Ù‡ Ø§Ø³Øª." }] },
          { de: "bestÃ¤tigen", fa: "ØªØ£ÛŒÛŒØ¯ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Die Polizei bestÃ¤tigt, dass der Mann gefunden wurde.", fa: "Ù¾لÛŒØ³ ØªØ£ÛŒÛŒØ¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ú©Ù‡ Ù…Ø±Ø¯ Ù¾ÛŒØ¯Ø§ Ø´Ø¯Ù‡." }] },
          { de: "bezweifeln", fa: "Ø´Ú© Ú©Ø±Ø¯Ù† / ØªØ±Ø¯ÛŒØ¯ Ø¯Ø§Ø´ØªÙ†", article: "-", plural: "-", examples: [{ de: "Ich bezweifle, dass er die Wahrheit sagt.", fa: "Ø´Ú© Ø¯Ø§Ø±Ù… Ú©Ù‡ Ø­Ù‚ÛŒÙ‚Øª Ø±Ø§ Ø¨Ú¯ÙˆÛŒØ¯." }] }
        ]
      },
      {
        title: "Ø±Ø³Ø§Ù†Ù‡ Ùˆ Ø®Ø¨Ø± (Medien und Nachrichten)",
        words: [
          { de: "der Bericht", fa: "Ú¯Ø²Ø§Ø±Ø´", article: "der", plural: "die Berichte", examples: [{ de: "Der Bericht zeigt, dass die Zahlen steigen.", fa: "Ú¯Ø²Ø§Ø±Ø´ Ù†Ø´Ø§Ù† Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ Ú©Ù‡ Ø§Ø¹Ø¯Ø§Ø¯ Ø¨Ø§لØ§ Ù…ÛŒâ€ŒØ±ÙˆÙ†Ø¯." }] },
          { de: "die Nachricht", fa: "Ø®Ø¨Ø±", article: "die", plural: "die Nachrichten", examples: [{ de: "Die Nachrichten berichten, dass es regnen wird.", fa: "Ø§Ø®Ø¨Ø§Ø± Ú¯Ø²Ø§Ø±Ø´ Ù…ÛŒâ€ŒØ¯Ù‡Ù†Ø¯ Ú©Ù‡ Ø¨Ø§Ø±Ø§Ù† Ø®ÙˆØ§Ù‡Ø¯ Ø¢Ù…Ø¯." }] },
          { de: "das Interview", fa: "Ù…ØµØ§Ø­Ø¨Ù‡", article: "das", plural: "die Interviews", examples: [{ de: "Im Interview sagt er, dass er zufrieden ist.", fa: "Ø¯Ø± Ù…ØµØ§Ø­Ø¨Ù‡ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒØ¯ Ú©Ù‡ Ø±Ø§Ø¶ÛŒ Ø§Ø³Øª." }] },
          { de: "der Zeuge", fa: "Ø´Ø§Ù‡Ø¯", article: "der", plural: "die Zeugen", examples: [{ de: "Der Zeuge sagt, dass er nichts gesehen hat.", fa: "Ø´Ø§Ù‡Ø¯ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒØ¯ Ú©Ù‡ Ú†ÛŒØ²ÛŒ Ù†Ø¯ÛŒØ¯Ù‡." }] },
          { de: "die Ãœberschrift", fa: "ØªÛŒØªØ± / Ø¹Ù†ÙˆØ§Ù† Ø®Ø¨Ø±", article: "die", plural: "die Ãœberschriften", examples: [{ de: "Die Ãœberschrift besagt, dass der Markt sinkt.", fa: "ØªÛŒØªØ± Ø­Ø§Ú©ÛŒ Ø§Ø² Ø¢Ù† Ø§Ø³Øª Ú©Ù‡ Ø¨Ø§Ø²Ø§Ø± Ø³Ù‚ÙˆØ· Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "der Journalist", fa: "Ø±ÙˆØ²Ù†Ø§Ù…Ù‡â€ŒÙ†Ú¯Ø§Ø±", article: "der", plural: "die Journalisten", examples: [{ de: "Der Journalist fragt, ob das stimmt.", fa: "Ø±ÙˆØ²Ù†Ø§Ù…Ù‡â€ŒÙ†Ú¯Ø§Ø± Ù…ÛŒâ€ŒÙ¾Ø±Ø³Ø¯ Ø¢ÛŒØ§ Ø§ÛŒÙ† Ø¯Ø±Ø³Øª Ø§Ø³Øª." }] },
          { de: "verÃ¶ffentlichen", fa: "Ù…Ù†ØªØ´Ø± Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Die Zeitung verÃ¶ffentlicht, dass die Steuern steigen.", fa: "Ø±ÙˆØ²Ù†Ø§Ù…Ù‡ Ù…Ù†ØªØ´Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ú©Ù‡ Ù…Ø§لÛŒØ§Øªâ€ŒÙ‡Ø§ Ø¨Ø§لØ§ Ù…ÛŒâ€ŒØ±ÙˆÙ†Ø¯." }] },
          { de: "die Quelle", fa: "Ù…Ù†Ø¨Ø¹", article: "die", plural: "die Quellen", examples: [{ de: "Aus welcher Quelle stammt diese Information?", fa: "Ø§ÛŒÙ† Ø§Ø·لØ§Ø¹Ø§Øª Ø§Ø² Ú©Ø¯Ø§Ù… Ù…Ù†Ø¨Ø¹ Ø§Ø³ØªØŸ" }] },
          { de: "vertrauenswÃ¼rdig", fa: "Ù‚Ø§Ø¨ل Ø§Ø¹ØªÙ…Ø§Ø¯", article: "-", plural: "-", examples: [{ de: "Ist diese Quelle vertrauenswÃ¼rdig?", fa: "Ø¢ÛŒØ§ Ø§ÛŒÙ† Ù…Ù†Ø¨Ø¹ Ù‚Ø§Ø¨ل Ø§Ø¹ØªÙ…Ø§Ø¯ Ø§Ø³ØªØŸ" }] },
          { de: "die Schlagzeile", fa: "ØªÛŒØªØ± Ø®Ø¨Ø±ÛŒ", article: "die", plural: "die Schlagzeilen", examples: [{ de: "Das ist eine groÃŸe Schlagzeile.", fa: "Ø§ÛŒÙ† ÛŒÚ© ØªÛŒØªØ± Ø¨Ø²Ø±Ú¯ Ø§Ø³Øª." }] },
          { de: "berichten Ã¼ber", fa: "Ú¯Ø²Ø§Ø±Ø´ Ø¯Ø§Ø¯Ù† Ø¯Ø±Ø¨Ø§Ø±Ù‡", article: "-", plural: "-", examples: [{ de: "Die Medien berichten Ã¼ber den Unfall.", fa: "Ø±Ø³Ø§Ù†Ù‡â€ŒÙ‡Ø§ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø­Ø§Ø¯Ø«Ù‡ Ú¯Ø²Ø§Ø±Ø´ Ù…ÛŒâ€ŒØ¯Ù‡Ù†Ø¯." }] },
          { de: "die Tageszeitung", fa: "Ø±ÙˆØ²Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡", article: "die", plural: "die Tageszeitungen", examples: [{ de: "Ich lese jeden Morgen die Tageszeitung.", fa: "Ù‡Ø± ØµØ¨Ø­ Ø±ÙˆØ²Ù†Ø§Ù…Ù‡ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù†Ù…." }] },
          { de: "der Pressesprecher", fa: "Ø³Ø®Ù†Ú¯ÙˆÛŒ Ù…Ø·Ø¨ÙˆØ¹Ø§ØªÛŒ", article: "der", plural: "die Pressesprecher", examples: [{ de: "Der Pressesprecher teilt mit, dass die Regierung handelt.", fa: "Ø³Ø®Ù†Ú¯Ùˆ Ø§Ø·لØ§Ø¹ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ Ú©Ù‡ Ø¯ÙˆلØª Ø§Ù‚Ø¯Ø§Ù… Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "das Zitat", fa: "Ù†Ù‚ل Ù‚Ùˆل", article: "das", plural: "die Zitate", examples: [{ de: "Das Zitat stammt von Einstein.", fa: "Ù†Ù‚ل Ù‚Ùˆل Ø§Ø² Ø§ÛŒÙ†Ø´ØªÛŒÙ† Ø§Ø³Øª." }] },
          { de: "angeblich", fa: "Ø¨Ù‡ Ø§Ø¯Ø¹Ø§ÛŒ / Ø¸Ø§Ù‡Ø±Ø§Ù‹", article: "-", plural: "-", examples: [{ de: "Angeblich hat er das gesagt.", fa: "Ø¸Ø§Ù‡Ø±Ø§Ù‹ Ø§Ùˆ Ø§ÛŒÙ† Ø±Ø§ Ú¯ÙØªÙ‡." }] },
          { de: "offenbar", fa: "Ø¸Ø§Ù‡Ø±Ø§Ù‹ / Ø¢Ø´Ú©Ø§Ø±Ø§", article: "-", plural: "-", examples: [{ de: "Offenbar hat niemand gewusst, dass er krank war.", fa: "Ø¸Ø§Ù‡Ø±Ø§Ù‹ Ú©Ø³ÛŒ Ù†Ù…ÛŒâ€ŒØ¯Ø§Ù†Ø³Øª Ú©Ù‡ Ø§Ùˆ Ù…Ø±ÛŒØ¶ Ø¨ÙˆØ¯Ù‡." }] },
          { de: "laut (+ Dativ)", fa: "Ø·Ø¨Ù‚ / Ø¨Ù‡ Ú¯ÙØªÙ‡", article: "-", plural: "-", examples: [{ de: "Laut dem Bericht ist das Kind gesund.", fa: "Ø·Ø¨Ù‚ Ú¯Ø²Ø§Ø±Ø´ØŒ Ú©ÙˆØ¯Ú© Ø³Ø§لÙ… Ø§Ø³Øª." }] },
          { de: "mitteilen", fa: "Ø§Ø·لØ§Ø¹ Ø¯Ø§Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Er teilt mit, dass das Meeting verschoben ist.", fa: "Ø§Ùˆ Ø§Ø·لØ§Ø¹ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ Ú©Ù‡ Ø¬لØ³Ù‡ Ø¨Ù‡ ØªØ¹ÙˆÛŒÙ‚ Ø§ÙØªØ§Ø¯Ù‡." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Eine Pressekonferenz in Berlin\n\nBei einer Pressekonferenz in Berlin hat der Gesundheitsminister wichtige Informationen mitgeteilt. Er berichtet, dass die Zahl der Kranken in den letzten Wochen stark gestiegen ist. Laut offiziellen Berichten seien mehr als 50.000 Menschen betroffen. Der Minister bestÃ¤tigt, dass die Regierung neue MaÃŸnahmen ergreifen wird.\nEin Journalist fragt, ob die Schulen geschlossen werden. Der Pressesprecher antwortet, dass man die Situation genau beobachte. Er betont, dass es wichtig sei, ruhig zu bleiben. Angeblich soll es einen neuen Plan geben, aber offiziell wurde nichts bestÃ¤tigt.\nEin Experte meint, dass die MaÃŸnahmen zu spÃ¤t kommen. Er bezweifelt, dass sie wirksam genug sind. Trotzdem hofft er, dass die Lage sich in den nÃ¤chsten Wochen verbessert. Die BÃ¼rger hoffen, dass alles bald vorbei ist.",
      questions: [
        { question: "ÙˆØ²ÛŒØ± Ø¨Ù‡Ø¯Ø§Ø´Øª Ú†Ù‡ Ø®Ø¨Ø±ÛŒ Ø§Ø¹لØ§Ù… Ú©Ø±Ø¯ØŸ", answer: "ØªØ¹Ø¯Ø§Ø¯ Ø¨ÛŒÙ…Ø§Ø±Ø§Ù† Ø¯Ø± Ù‡ÙØªÙ‡â€ŒÙ‡Ø§ÛŒ Ø§Ø®ÛŒØ± Ø¨Ù‡ Ø´Ø¯Øª Ø§ÙØ²Ø§ÛŒØ´ ÛŒØ§ÙØªÙ‡." },
        { question: "Ø±ÙˆØ²Ù†Ø§Ù…Ù‡â€ŒÙ†Ú¯Ø§Ø± Ú†Ù‡ Ø³Ø¤Ø§لÛŒ Ù¾Ø±Ø³ÛŒØ¯ØŸ", answer: "Ø¢ÛŒØ§ Ù…Ø¯Ø§Ø±Ø³ Ø¨Ø³ØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯." },
        { question: "Ú©Ø§Ø±Ø´Ù†Ø§Ø³ Ú†Ù‡ Ù†Ø¸Ø±ÛŒ Ø¯Ø§Ø´ØªØŸ", answer: "Ø§Ùˆ Ø´Ú© Ø¯Ø§Ø´Øª Ú©Ù‡ Ø§Ù‚Ø¯Ø§Ù…Ø§Øª Ú©Ø§ÙÛŒ Ø¨Ø§Ø´Ù†Ø¯ Ùˆ ÙÚ©Ø± Ù…ÛŒâ€ŒÚ©Ø±Ø¯ Ø¯ÛŒØ± Ø´Ø¯Ù‡." },
        { question: "Ù…Ø±Ø¯Ù… Ú†Ù‡ Ø§Ù…ÛŒØ¯ÛŒ Ø¯Ø§Ø±Ù†Ø¯ØŸ", answer: "Ø§Ù…ÛŒØ¯ÙˆØ§Ø±Ù†Ø¯ Ú©Ù‡ Ù‡Ù…Ù‡ Ú†ÛŒØ² Ø¨Ù‡ Ø²ÙˆØ¯ÛŒ ØªÙ…Ø§Ù… Ø´ÙˆØ¯." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ú¯Ø²Ø§Ø±Ø´ Ø®Ø¨Ø±ÛŒ",
      prompt: "ÛŒÚ© Ù…ØªÙ† Û¸-Û±Û° Ø®Ø·ÛŒ Ø¨Ù‡ Ø³Ø¨Ú© Ú¯Ø²Ø§Ø±Ø´ Ø®Ø¨Ø±ÛŒ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯. Ø§Ø² Ø§ÙØ¹Ø§ل Ú¯Ø²Ø§Ø±Ø´â€ŒØ¯Ù‡Ù†Ø¯Ù‡ (berichten, bestÃ¤tigen, erklÃ¤ren) Ùˆ dass Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      steps: [
        {
          title: "Ø´Ø±ÙˆØ¹ Ø®Ø¨Ø±ÛŒ",
          text: "Ø¨Ø§ ÛŒÚ© Ø¬Ù…لÙ‡ Ø±Ø³Ù…ÛŒ Ø´Ø±ÙˆØ¹ Ú©Ù†ÛŒØ¯",
          example: { de: "Laut den Nachrichten hat der BÃ¼rgermeister eine wichtige Entscheidung getroffen.", fa: "Ø¨Ù‡ Ú¯ÙØªÙ‡ Ø§Ø®Ø¨Ø§Ø±ØŒ Ø´Ù‡Ø±Ø¯Ø§Ø± ØªØµÙ…ÛŒÙ… Ù…Ù‡Ù…ÛŒ Ú¯Ø±ÙØªÙ‡." }
        },
        {
          title: "Ù†Ù‚ل Ù‚Ùˆل Ø¨Ø§ dass",
          text: "Ø§Ø² ÙØ¹لâ€ŒÙ‡Ø§ÛŒ Ú¯Ø²Ø§Ø±Ø´â€ŒØ¯Ù‡Ù†Ø¯Ù‡ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯",
          example: { de: "Er erklÃ¤rt, dass die Stadt mehr GrÃ¼nflÃ¤chen braucht.", fa: "Ø§Ùˆ ØªÙˆØ¶ÛŒØ­ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ Ú©Ù‡ Ø´Ù‡Ø± Ø¨Ù‡ ÙØ¶Ø§ÛŒ Ø³Ø¨Ø² Ø¨ÛŒØ´ØªØ±ÛŒ Ù†ÛŒØ§Ø² Ø¯Ø§Ø±Ø¯." }
        },
        {
          title: "Ù†Ø¸Ø±Ø§Øª Ù…Ø®ØªلÙ",
          text: "Ù†Ø¸Ø±Ø§Øª Ù…ÙˆØ§ÙÙ‚ Ùˆ Ù…Ø®Ø§لÙ",
          example: { de: "Einige BÃ¼rger meinen, dass das zu teuer ist.", fa: "Ø¨Ø±Ø®ÛŒ Ø´Ù‡Ø±ÙˆÙ†Ø¯Ø§Ù† Ù…Ø¹ØªÙ‚Ø¯Ù†Ø¯ Ú©Ù‡ Ø§ÛŒÙ† Ø®ÛŒلÛŒ Ú¯Ø±Ø§Ù† Ø§Ø³Øª." }
        }
      ],
      modelAnswer: "Laut einem Bericht der Tageszeitung hat die Stadt Frankfurt eine neue Umweltinitiative gestartet. Die BÃ¼rgermeisterin erklÃ¤rt, dass die LuftqualitÃ¤t in der Stadt besser werden muss. Sie bestÃ¤tigt, dass mehr BÃ¤ume gepflanzt werden. Einige Anwohner berichten, dass sie die neue Initiative unterstÃ¼tzen. Sie meinen, dass mehr Radwege wichtig sind. Andere BÃ¼rger bezweifeln, dass die MaÃŸnahmen ausreichen. Sie behaupten, dass die Industrie auch etwas tun muss. Der Stadtsprecher teilt mit, dass es einen neuen Plan gibt. Er hofft, dass alle BÃ¼rger mitmachen. Experten bestÃ¤tigen, dass solche Initiativen langfristig wirken."
    }
  ],

  listening: [
    {
      title: "Ú¯Ø²Ø§Ø±Ø´ Ø®Ø¨Ø±ÛŒ",
      source: "Tagesschau - Indirekte Rede",
      link: "https://www.youtube.com/watch?v=JjVs3Ow2bCE",
      instructions: "Ø¨Ù‡ Ù†Ù‚Ù„ Ù‚ÙˆÙ„â€ŒÙ‡Ø§ÛŒ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… Ø¯Ø± Ø§Ø®Ø¨Ø§Ø± Ø¯Ù‚Øª Ú©Ù†ÛŒØ¯. Ú¯ÙˆÛŒÙ†Ø¯Ù‡ Ø§Ø®Ø¨Ø§Ø± Ù…Ø¹Ù…ÙˆÙ„Ø§Ù‹ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒØ¯: Der Minister sagte, dass... ÛŒØ§ Experten berichten, dass... Ø§ÛŒÙ† Ø§ÙØ¹Ø§Ù„ Ú¯Ø²Ø§Ø±Ø´â€ŒØ¯Ù‡Ù†Ø¯Ù‡ Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
    }
  ],

  speaking: [
    {
      title: "Ù†Ù‚ل Ù‚Ùˆل Ø®Ø¨Ø±ÛŒ",
      pattern: "Er/Sie sagt, dass... / Er/Sie meint, dass... / Er/Sie fragt, ob...",
      exercise: "ÛŒÚ© Ø®Ø¨Ø± Ø±Ø§ Ø¨Ø±Ø§ÛŒ Ø¯ÙˆØ³ØªØªØ§Ù† ØªØ¹Ø±ÛŒÙ Ú©Ù†ÛŒØ¯. Ø§Ø² Ù†Ù‚ل Ù‚Ùˆل ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯: Â«Ø±Ø¦ÛŒØ³â€ŒØ¬Ù…Ù‡ÙˆØ± Ú¯ÙØª Ú©Ù‡...Â»ØŒ Â«Ú©Ø§Ø±Ø´Ù†Ø§Ø³Ø§Ù† Ù…Ø¹ØªÙ‚Ø¯Ù†Ø¯ Ú©Ù‡...Â»ØŒ Â«Ù…Ø±Ø¯Ù… Ù…ÛŒâ€ŒÙ¾Ø±Ø³Ù†Ø¯ Ø¢ÛŒØ§...Â»"
    }
  ],

  cultureTip: "Ø¯Ø± Ø±ÙˆØ²Ù†Ø§Ù…Ù‡â€ŒÙ†Ú¯Ø§Ø±ÛŒ Ø¢Ù„Ù…Ø§Ù†ÛŒØŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Konjunktiv I Ø¨Ø±Ø§ÛŒ Ù†Ù‚Ù„ Ù‚ÙˆÙ„ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… Ø¨Ø³ÛŒØ§Ø± Ø±Ø§ÛŒØ¬ Ùˆ Ø­ØªÛŒ Ø§Ù„Ø²Ø§Ù…ÛŒ Ø§Ø³Øª. Ù…Ø«Ù„Ø§Ù‹ Ø¯Ø± Ø±ÙˆØ²Ù†Ø§Ù…Ù‡â€ŒÙ‡Ø§ Ù…ÛŒâ€ŒÙ†ÙˆÛŒØ³Ù†Ø¯: Der Minister sagte, er sei der Meinung, dass... (ÙˆØ²ÛŒØ± Ú¯ÙØª Ú©Ù‡ Ù†Ø¸Ø±Ø´ Ø§ÛŒÙ† Ø§Ø³Øª). Ø§Ú¯Ø± Konjunktiv I Ø¨Ø§ Konjunktiv II Ù‚Ø§Ø¨Ù„ Ø§Ø´ØªØ¨Ø§Ù‡ Ø¨Ø§Ø´Ø¯ØŒ Ø§Ø² Konjunktiv II Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯. Ø¯Ø± Ù…Ú©Ø§Ù„Ù…Ù‡ Ø±ÙˆØ²Ù…Ø±Ù‡ØŒ Ù…Ø±Ø¯Ù… Ø¹Ø§Ø¯ÛŒ Ø§Ø² dass Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯.",

  examData: {
    questions: [
      { question: "Ø¯Ø± Ù†Ù‚ل Ù‚Ùˆل ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… Ø¨Ø§ dassØŒ ÙØ¹ل Ú©Ø¬Ø§ Ù…ÛŒâ€ŒØ±ÙˆØ¯ØŸ", options: ["Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û²", "Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Û±", "Ø¢Ø®Ø± Ø¬Ù…لÙ‡", "Ø¨Ø¹Ø¯ Ø§Ø² dass"], answer: 2 },
      { question: "Â«Er sagt: لIch bin mÃ¼de.\"Â» Ø¨Ù‡ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ…:?", options: ["Er sagt, dass er ist mÃ¼de.", "Er sagt, dass er mÃ¼de ist.", "Er sagt, dass ich mÃ¼de bin.", "Er sagt, er sei mÃ¼de."], answer: 1 },
      { question: "Ø¨Ø±Ø§ÛŒ Ø³Ø¤Ø§ل ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ… Ø§Ø² Ú†Ù‡ Ú©لÙ…Ù‡â€ŒØ§ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["dass", "ob", "wenn", "falls"], answer: 1 },
      { question: "Â«Sie fragt: لHast du Zeit?\"Â» Ø¨Ù‡ ØºÛŒØ±Ù…Ø³ØªÙ‚ÛŒÙ…:?", options: ["Sie fragt, dass ich Zeit habe.", "Sie fragt, ob ich Zeit habe.", "Sie fragt, ob ich Zeit bin.", "Sie fragt, ob du Zeit hast."], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… ÙØ¹ل Ú¯Ø²Ø§Ø±Ø´â€ŒØ¯Ù‡Ù†Ø¯Ù‡ Ù†ÛŒØ³ØªØŸ", options: ["berichten", "behaupten", "bestÃ¤tigen", "besuchen"], answer: 3 },
      { question: "Â«Laut dem Bericht ...Â» Ø¨Ù‡ Ú†Ù‡ Ù…Ø¹Ù†Ø§Ø³ØªØŸ", options: ["Ø¯Ø± Ú¯Ø²Ø§Ø±Ø´", "Ø·Ø¨Ù‚ Ú¯Ø²Ø§Ø±Ø´", "Ø§Ø² Ú¯Ø²Ø§Ø±Ø´", "Ø¨Ø±Ø§ÛŒ Ú¯Ø²Ø§Ø±Ø´"], answer: 1 },
      { question: "Ø¯Ø± Ø±ÙˆØ²Ù†Ø§Ù…Ù‡â€ŒÙ†Ú¯Ø§Ø±ÛŒ Ø¢لÙ…Ø§Ù†ÛŒ Ø§Ø² Ú†Ù‡ Ø´Ú©لÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Konjunktiv I", "Konjunktiv II", "Passiv", "Perfekt"], answer: 0 },
      { question: "Â«Der Zeuge sagt, dass er nichts gesehen _______.Â»", options: ["ist", "hat", "hatte", "wird"], answer: 1 }
    ]
  }
};
