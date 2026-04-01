export const day51Data = {
  title: "Ø±ÙˆØ² ÛµÛ±: Ø¢Ø²Ù…ÙˆÙ† Ø´Ø¨ÛŒÙ‡â€ŒØ³Ø§Ø²ÛŒ B1 â€” Ø¨Ø®Ø´ Ù†ÙˆØ´ØªÙ† Ùˆ ØµØ­Ø¨Øª Ú©Ø±Ø¯Ù†",
  objective: "Ø§Ù…Ø±ÙˆØ² Ø¯Ùˆ Ù…Ù‡Ø§Ø±Øª ØªÙˆلÛŒØ¯ÛŒ B1 ÛŒØ¹Ù†ÛŒ Ù†ÙˆØ´ØªÙ† (Schreiben) Ùˆ ØµØ­Ø¨Øª Ú©Ø±Ø¯Ù† (Sprechen) Ø±Ø§ Ø´Ø¨ÛŒÙ‡â€ŒØ³Ø§Ø²ÛŒ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…. Ø´Ù…Ø§ ÛŒÚ© Ø§ÛŒÙ…ÛŒل Ø±Ø³Ù…ÛŒ Ù…ÛŒâ€ŒÙ†ÙˆÛŒØ³ÛŒØ¯ Ùˆ Ø¯Ø± ÛŒÚ© Ù…ØµØ§Ø­Ø¨Ù‡ Ø´ÙØ§Ù‡ÛŒ B1 Ø´Ø±Ú©Øª Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯.",

  grammarData: {
    subtitle: "Ø³Ø§Ø®ØªØ§Ø±Ù‡Ø§ÛŒ Ú©لÛŒØ¯ÛŒ Ù†ÙˆØ´ØªÙ† Ùˆ ØµØ­Ø¨Øª Ú©Ø±Ø¯Ù† Ø¯Ø± Ø³Ø·Ø­ B1",
    content: [
      {
        type: "text",
        title: "Û±. Ø³Ø§Ø®ØªØ§Ø± Ø§ÛŒÙ…ÛŒل Ø±Ø³Ù…ÛŒ (Formelle E-Mail)",
        text: "Ø¯Ø± Ø³Ø·Ø­ B1 Ø´Ù…Ø§ Ø¨Ø§ÛŒØ¯ Ø¨ØªÙˆØ§Ù†ÛŒØ¯ Ø§ÛŒÙ…ÛŒلâ€ŒÙ‡Ø§ÛŒ Ø±Ø³Ù…ÛŒ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯. Ø§ÛŒÙ† Ø§ÛŒÙ…ÛŒلâ€ŒÙ‡Ø§ Ø³Ø§Ø®ØªØ§Ø± Ù…Ø´Ø®ØµÛŒ Ø¯Ø§Ø±Ù†Ø¯ Ú©Ù‡ Ø¨Ø§ÛŒØ¯ Ø­ÙØ¸ Ú©Ù†ÛŒØ¯."
      },
      {
        type: "table",
        title: "Ø¨Ø®Ø´â€ŒÙ‡Ø§ÛŒ ÛŒÚ© Ø§ÛŒÙ…ÛŒل Ø±Ø³Ù…ÛŒ Ø¢لÙ…Ø§Ù†ÛŒ",
        rows: [
          { de: "Sehr geehrte Damen und Herren,", fa: "Ø®Ø§Ù†Ù…â€ŒÙ‡Ø§ Ùˆ Ø¢Ù‚Ø§ÛŒØ§Ù† Ù…Ø­ØªØ±Ù… (ÙˆÙ‚ØªÛŒ Ù†Ø§Ù… Ú¯ÛŒØ±Ù†Ø¯Ù‡ Ø±Ø§ Ù†Ù…ÛŒâ€ŒØ¯Ø§Ù†ÛŒØ¯)" },
          { de: "Sehr geehrter Herr MÃ¼ller, / Sehr geehrte Frau Schmidt,", fa: "Ø¬Ù†Ø§Ø¨ Ø¢Ù‚Ø§ÛŒ Ù…ÙˆلØ± / Ø³Ø±Ú©Ø§Ø± Ø®Ø§Ù†Ù… Ø§Ø´Ù…ÛŒØª" },
          { de: "hiermit mÃ¶chte ich Ihnen mitteilen, dass...", fa: "Ø¨Ø¯ÛŒÙ†â€ŒÙˆØ³ÛŒلÙ‡ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ø¨Ù‡ Ø´Ù…Ø§ Ø§Ø·لØ§Ø¹ Ø¯Ù‡Ù… Ú©Ù‡..." },
          { de: "Ich wÃ¼rde mich freuen, wenn Sie mir helfen kÃ¶nnten.", fa: "Ø®ÙˆØ´Ø­Ø§ل Ù…ÛŒâ€ŒØ´ÙˆÙ… Ø§Ú¯Ø± Ø¨ØªÙˆØ§Ù†ÛŒØ¯ Ø¨Ù‡ Ù…Ù† Ú©Ù…Ú© Ú©Ù†ÛŒØ¯." },
          { de: "FÃ¼r weitere Informationen stehe ich Ihnen gerne zur VerfÃ¼gung.", fa: "Ø¨Ø±Ø§ÛŒ Ø§Ø·لØ§Ø¹Ø§Øª Ø¨ÛŒØ´ØªØ± Ø¯Ø± Ø®Ø¯Ù…Øª Ø´Ù…Ø§ Ù‡Ø³ØªÙ…." },
          { de: "Mit freundlichen GrÃ¼ÃŸen", fa: "Ø¨Ø§ Ø§Ø­ØªØ±Ø§Ù… (Ù¾Ø§ÛŒØ§Ù† Ø§ÛŒÙ…ÛŒل Ø±Ø³Ù…ÛŒ)" }
        ]
      },
      {
        type: "text",
        title: "Û². ØªÚ©Ù†ÛŒÚ©â€ŒÙ‡Ø§ÛŒ ØµØ­Ø¨Øª Ú©Ø±Ø¯Ù† B1 (Redemittel)",
        text: "Ø¯Ø± Ø§Ù…ØªØ­Ø§Ù† Ø´ÙØ§Ù‡ÛŒ B1 Ø§Ø² Ø´Ù…Ø§ Ø§Ù†ØªØ¸Ø§Ø± Ù…ÛŒâ€ŒØ±ÙˆØ¯ Ú©Ù‡ Ø¨ØªÙˆØ§Ù†ÛŒØ¯ Ù†Ø¸Ø± Ø¨Ø¯Ù‡ÛŒØ¯ØŒ Ù…ÙˆØ§ÙÙ‚Øª/Ù…Ø®Ø§لÙØª Ú©Ù†ÛŒØ¯ Ùˆ Ø¯لÛŒل Ø¨ÛŒØ§ÙˆØ±ÛŒØ¯."
      },
      {
        type: "table",
        title: "Ø¹Ø¨Ø§Ø±Ø§Øª Ø·لØ§ÛŒÛŒ Ø¨Ø±Ø§ÛŒ ØµØ­Ø¨Øª Ú©Ø±Ø¯Ù†",
        rows: [
          { de: "Meiner Meinung nach...", fa: "Ø¨Ù‡ Ù†Ø¸Ø± Ù…Ù†..." },
          { de: "Ich bin der Meinung, dass...", fa: "Ù…Ù† Ø§ÛŒÙ† Ù†Ø¸Ø± Ø±Ø§ Ø¯Ø§Ø±Ù… Ú©Ù‡..." },
          { de: "Ich stimme zu / Ich stimme nicht zu.", fa: "Ù…ÙˆØ§ÙÙ‚Ù… / Ù…Ø®Ø§لÙÙ…." },
          { de: "Das stimmt, aber andererseits...", fa: "Ø¯Ø±Ø³ØªÙ‡ØŒ Ø§Ù…Ø§ Ø§Ø² Ø·Ø±Ù Ø¯ÛŒÚ¯Ù‡..." },
          { de: "Ein Beispiel dafÃ¼r ist...", fa: "ÛŒÚ© Ù…Ø«Ø§ل Ø¨Ø±Ø§ÛŒ Ø§ÛŒÙ† Ù…ÙˆØ¶ÙˆØ¹..." },
          { de: "Zusammenfassend kann man sagen, dass...", fa: "Ø¨Ù‡ Ø·ÙˆØ± Ø®لØ§ØµÙ‡ Ù…ÛŒâ€ŒØªÙˆØ§Ù† Ú¯ÙØª Ú©Ù‡..." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ†: Ù…Ù‡Ø§Ø±Øªâ€ŒÙ‡Ø§ÛŒ Ù†ÙˆØ´ØªÙ† Ùˆ ØµØ­Ø¨Øª B1",
        questions: [
          {
            question: "Ø¯Ø± ÛŒÚ© Ø§ÛŒÙ…ÛŒل Ø±Ø³Ù…ÛŒØŒ Ø§Ú¯Ø± Ù†Ø§Ù… Ú¯ÛŒØ±Ù†Ø¯Ù‡ Ø±Ø§ Ù†Ø¯Ø§Ù†ÛŒØ¯ØŒ Ú†Ø·ÙˆØ± Ø´Ø±ÙˆØ¹ Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯ØŸ",
            questionDe: "Wie beginnt man eine formelle E-Mail ohne Namen?",
            options: [
              { text: "Hallo!", isCorrect: false },
              { text: "Sehr geehrte Damen und Herren,", isCorrect: true },
              { text: "Lieber Freund,", isCorrect: false },
              { text: "Hi zusammen,", isCorrect: false }
            ],
            explanation: "Ø¯Ø±Ø³Øª Ø§Ø³Øª! ÙˆÙ‚ØªÛŒ Ù†Ø§Ù… Ú¯ÛŒØ±Ù†Ø¯Ù‡ Ø±Ø§ Ù†Ù…ÛŒâ€ŒØ¯Ø§Ù†ÛŒØ¯ØŒ Ø§Ø² Â«Sehr geehrte Damen und HerrenÂ» Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Ø¹Ø¨Ø§Ø±Øª Ø¨Ø±Ø§ÛŒ Ø®لØ§ØµÙ‡â€ŒÚ©Ø±Ø¯Ù† ÛŒÚ© Ù†Ø¸Ø± Ø¯Ø± Ù¾Ø§ÛŒØ§Ù† Ù…ÙˆÙ†ÙˆلÙˆÚ¯ Ù…Ù†Ø§Ø³Ø¨ Ø§Ø³ØªØŸ",
            questionDe: "Welches Redemittel passt fÃ¼r die Zusammenfassung?",
            options: [
              { text: "Ich weiÃŸ nicht.", isCorrect: false },
              { text: "Zusammenfassend kann man sagen, dass...", isCorrect: true },
              { text: "TschÃ¼ss!", isCorrect: false }
            ],
            explanation: "Ø¢ÙØ±ÛŒÙ†! Â«ZusammenfassendÂ» Ø¨Ù‡ØªØ±ÛŒÙ† Ø±Ø§Ù‡ Ø¨Ø±Ø§ÛŒ Ù†ØªÛŒØ¬Ù‡â€ŒÚ¯ÛŒØ±ÛŒ Ø¯Ø± Ø§Ù…ØªØ­Ø§Ù† B1 Ø§Ø³Øª."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "لØºØ§Øª Ù†Ø§Ù…Ù‡â€ŒÙ†Ú¯Ø§Ø±ÛŒ (Briefsprache)",
        words: [
          {
            de: "hiermit",
            fa: "Ø¨Ø¯ÛŒÙ†â€ŒÙˆØ³ÛŒلÙ‡",
            article: "-",
            plural: "-",
            examples: [{ de: "Hiermit mÃ¶chte ich mich fÃ¼r Ihre Hilfe bedanken.", fa: "Ø¨Ø¯ÛŒÙ†â€ŒÙˆØ³ÛŒلÙ‡ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ø§Ø² Ú©Ù…Ú© Ø´Ù…Ø§ ØªØ´Ú©Ø± Ú©Ù†Ù…." }]
          },
          {
            de: "die Beschwerde",
            fa: "Ø´Ú©Ø§ÛŒØª",
            article: "die",
            plural: "die Beschwerden",
            examples: [{ de: "Ich mÃ¶chte eine Beschwerde einreichen.", fa: "Ù…Ù† Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… ÛŒÚ© Ø´Ú©Ø§ÛŒØª Ø«Ø¨Øª Ú©Ù†Ù…." }]
          },
          {
            de: "zur VerfÃ¼gung stehen",
            fa: "Ø¯Ø± Ø®Ø¯Ù…Øª Ø¨ÙˆØ¯Ù†",
            article: "-",
            plural: "-",
            examples: [{ de: "FÃ¼r RÃ¼ckfragen stehe ich Ihnen gerne zur VerfÃ¼gung.", fa: "Ø¨Ø±Ø§ÛŒ Ø³ÙˆØ§لØ§Øª Ø¨ÛŒØ´ØªØ± Ø¯Ø± Ø®Ø¯Ù…Øª Ø´Ù…Ø§ Ù‡Ø³ØªÙ…." }]
          },
          {
            de: "die Meinung",
            fa: "Ù†Ø¸Ø± / Ø¹Ù‚ÛŒØ¯Ù‡",
            article: "die",
            plural: "die Meinungen",
            examples: [{ de: "Jeder hat eine andere Meinung.", fa: "Ù‡Ø±Ú©Ø³ÛŒ Ù†Ø¸Ø± Ù…ØªÙØ§ÙˆØªÛŒ Ø¯Ø§Ø±Ø¯." }]
          },
          {
            de: "zustimmen / widersprechen",
            fa: "Ù…ÙˆØ§ÙÙ‚Øª / Ù…Ø®Ø§لÙØª Ú©Ø±Ø¯Ù†",
            article: "-",
            plural: "-",
            examples: [{ de: "Ich stimme Ihnen zu, aber es gibt auch andere Seiten.", fa: "Ø¨Ø§ Ø´Ù…Ø§ Ù…ÙˆØ§ÙÙ‚Ù…ØŒ Ø§Ù…Ø§ Ø¬Ù†Ø¨Ù‡â€ŒÙ‡Ø§ÛŒ Ø¯ÛŒÚ¯Ø±ÛŒ Ù‡Ù… Ù‡Ø³Øª." }]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Eine formelle E-Mail\n\nSehr geehrte Damen und Herren,\n\nhiermit mÃ¶chte ich mich fÃ¼r den Deutschkurs bedanken, den ich letzte Woche besucht habe. Der Kurs war sehr hilfreich und die Lehrerin war sehr kompetent.\n\nAllerdings habe ich eine kleine Beschwerde: Der Kursraum war zu klein fÃ¼r so viele Teilnehmer. Manchmal war es sehr laut und ich konnte die Lehrerin nicht gut hÃ¶ren.\n\nIch wÃ¼rde mich freuen, wenn Sie bei zukÃ¼nftigen Kursen grÃ¶ÃŸere RÃ¤ume buchen kÃ¶nnten.\n\nMit freundlichen GrÃ¼ÃŸen\nAli Mohammadi",
      questions: [
        { question: "Ø¹لÛŒ Ø¯Ø± Ø§ÛŒÙ† Ø§ÛŒÙ…ÛŒل Ø§Ø² Ú†Ù‡ Ú†ÛŒØ²ÛŒ Ø´Ú©Ø§ÛŒØª Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", answer: "Ø§Ùˆ Ø´Ú©Ø§ÛŒØª Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ú©Ù‡ Ú©لØ§Ø³ Ø¨Ø±Ø§ÛŒ ØªØ¹Ø¯Ø§Ø¯ Ø²ÛŒØ§Ø¯ Ø´Ø±Ú©Øªâ€ŒÚ©Ù†Ù†Ø¯Ú¯Ø§Ù† Ø®ÛŒلÛŒ Ú©ÙˆÚ†Ú© Ø¨ÙˆØ¯." },
        { question: "Ø¹لÛŒ Ú†Ù‡ Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯ÛŒ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ØŸ", answer: "Ø§Ùˆ Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ Ú©Ù‡ Ø¨Ø±Ø§ÛŒ Ú©لØ§Ø³â€ŒÙ‡Ø§ÛŒ Ø¢ÛŒÙ†Ø¯Ù‡ Ø§ØªØ§Ù‚â€ŒÙ‡Ø§ÛŒ Ø¨Ø²Ø±Ú¯â€ŒØªØ±ÛŒ Ø±Ø²Ø±Ùˆ Ú©Ù†Ù†Ø¯." },
        { question: "Ø¬Ù…لÙ‡ Â«FÃ¼r RÃ¼ckfragen stehe ich Ihnen gerne zur VerfÃ¼gungÂ» ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", answer: "ÛŒØ¹Ù†ÛŒ Â«Ø¨Ø±Ø§ÛŒ Ø³ÙˆØ§لØ§Øª Ø¨ÛŒØ´ØªØ± Ø¯Ø± Ø®Ø¯Ù…Øª Ø´Ù…Ø§ Ù‡Ø³ØªÙ…Â» â€” ÛŒÚ© Ø¹Ø¨Ø§Ø±Øª Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯ Ø¯Ø± Ø§ÛŒÙ…ÛŒلâ€ŒÙ‡Ø§ÛŒ Ø±Ø³Ù…ÛŒ." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† ÛŒÚ© Ø§ÛŒÙ…ÛŒل Ø±Ø³Ù…ÛŒ Ø´Ú©Ø§ÛŒØª (Beschwerde-E-Mail)",
      prompt: "ÙØ±Ø¶ Ú©Ù†ÛŒØ¯ Ø¯Ø± ÛŒÚ© Ù‡Øªل Ø§Ù‚Ø§Ù…Øª Ø¯Ø§Ø´ØªÛŒØ¯ Ùˆ Ù…Ø´Ú©لØ§ØªÛŒ Ø¯Ø§Ø´ØªÛŒØ¯. ÛŒÚ© Ø§ÛŒÙ…ÛŒل Ø±Ø³Ù…ÛŒ Ø¨Ù‡ Ù…Ø¯ÛŒØ±ÛŒØª Ù‡Øªل Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.",
      steps: [
        { title: "Ø´Ø±ÙˆØ¹ Ø±Ø³Ù…ÛŒ", text: "Ø¨Ø§ Ø¹Ø¨Ø§Ø±Øª Ø±Ø³Ù…ÛŒ Ø´Ø±ÙˆØ¹ Ú©Ù†ÛŒØ¯.", example: { de: "Sehr geehrte Damen und Herren,", fa: "Ø®Ø§Ù†Ù…â€ŒÙ‡Ø§ Ùˆ Ø¢Ù‚Ø§ÛŒØ§Ù† Ù…Ø­ØªØ±Ù…" } },
        { title: "Ù…Ø¹Ø±ÙÛŒ Ø®ÙˆØ¯ Ùˆ Ù…ÙˆØ¶ÙˆØ¹", text: "Ø¨Ú¯ÙˆÛŒÛŒØ¯ Ú©ÛŒ Ø¨ÙˆØ¯ÛŒØ¯ Ùˆ Ù…Ø´Ú©ل Ú†ÛŒØ³Øª.", example: { de: "Ich war vom 10. bis 15. MÃ¤rz in Ihrem Hotel. Leider gab es einige Probleme.", fa: "Ù…Ù† Ø§Ø² Û±Û° ØªØ§ Û±Ûµ Ù…Ø§Ø±Ø³ Ø¯Ø± Ù‡Øªل Ø´Ù…Ø§ Ø¨ÙˆØ¯Ù…. Ù…ØªØ£Ø³ÙØ§Ù†Ù‡ Ù…Ø´Ú©لØ§ØªÛŒ ÙˆØ¬ÙˆØ¯ Ø¯Ø§Ø´Øª." } },
        { title: "Ø´Ø±Ø­ Ù…Ø´Ú©لØ§Øª", text: "Ù…Ø´Ú©لØ§Øª Ø±Ø§ لÛŒØ³Øª Ú©Ù†ÛŒØ¯.", example: { de: "Zum Beispiel funktionierte die Heizung nicht. AuÃŸerdem war das Zimmer nicht sauber.", fa: "Ù…Ø«لØ§Ù‹ Ú¯Ø±Ù…Ø§ÛŒØ´ Ú©Ø§Ø± Ù†Ù…ÛŒâ€ŒÚ©Ø±Ø¯. Ø¨Ù‡ Ø¹لØ§ÙˆÙ‡ Ø§ØªØ§Ù‚ ØªÙ…ÛŒØ² Ù†Ø¨ÙˆØ¯." } },
        { title: "Ø¯Ø±Ø®ÙˆØ§Ø³Øª Ùˆ Ù¾Ø§ÛŒØ§Ù†", text: "Ø¯Ø±Ø®ÙˆØ§Ø³Øª Ùˆ Ù¾Ø§ÛŒØ§Ù† Ø±Ø³Ù…ÛŒ.", example: { de: "Ich wÃ¼rde mich freuen, wenn Sie mir helfen kÃ¶nnten. Mit freundlichen GrÃ¼ÃŸen", fa: "Ø®ÙˆØ´Ø­Ø§ل Ù…ÛŒâ€ŒØ´ÙˆÙ… Ø§Ú¯Ø± Ø¨ØªÙˆØ§Ù†ÛŒØ¯ Ú©Ù…Ú© Ú©Ù†ÛŒØ¯. Ø¨Ø§ Ø§Ø­ØªØ±Ø§Ù…" } }
      ],
      modelAnswer: "Sehr geehrte Damen und Herren,\n\nhiermit mÃ¶chte ich mich Ã¼ber meinen Aufenthalt beschweren. Ich war vom 10. bis 15. MÃ¤rz in Zimmer 205.\n\nLeider funktionierte die Heizung nicht und es war sehr kalt. AuÃŸerdem war das Bad nicht sauber genug.\n\nIch wÃ¼rde mich freuen, wenn Sie mir eine Erstattung anbieten kÃ¶nnten.\n\nMit freundlichen GrÃ¼ÃŸen\nAli Mohammadi"
    }
  ],

  listening: [
    {
      title: "Û±. Ù†Ù…ÙˆÙ†Ù‡ Ø§Ù…ØªØ­Ø§Ù† Ø´ÙØ§Ù‡ÛŒ B1",
      source: "Goethe Institut â€” MÃ¼ndliche PrÃ¼fung B1",
      link: "https://www.youtube.com/watch?v=IWXPnN5foH8",
      instructions: "Û±. ÙˆÛŒØ¯ÛŒÙˆÛŒ Ù†Ù…ÙˆÙ†Ù‡ Ø§Ù…ØªØ­Ø§Ù† Ø´ÙØ§Ù‡ÛŒ B1 Ø±Ø§ Ø¨Ø¨ÛŒÙ†ÛŒØ¯.\nÛ². Ø¨Ù‡ Redemittelâ€ŒÙ‡Ø§ÛŒÛŒ Ú©Ù‡ Ø´Ø±Ú©Øªâ€ŒÚ©Ù†Ù†Ø¯Ú¯Ø§Ù† Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯ Ø¯Ù‚Øª Ú©Ù†ÛŒØ¯.\nÛ³. ÙˆÙ‚ØªÛŒ Ù…Ù…ØªØ­Ù† Ø³ÙˆØ§ل Ù…ÛŒâ€ŒÙ¾Ø±Ø³Ø¯ØŒ ÙˆÛŒØ¯ÛŒÙˆ Ø±Ø§ Ù…ØªÙˆÙ‚Ù Ú©Ù†ÛŒØ¯ Ùˆ Ø®ÙˆØ¯ØªØ§Ù† Ø¬ÙˆØ§Ø¨ Ø¨Ø¯Ù‡ÛŒØ¯."
    }
  ],

  speaking: [
    {
      title: "Ø´Ø¨ÛŒÙ‡â€ŒØ³Ø§Ø²ÛŒ Ø§Ù…ØªØ­Ø§Ù† Ø´ÙØ§Ù‡ÛŒ B1 â€” Monolog",
      pattern: "Heute spreche ich Ã¼ber das Thema ...\nMeiner Meinung nach ...\nEin Beispiel dafÃ¼r ist ...\nZusammenfassend kann man sagen, dass ...",
      exercise: "Û±. ÛŒÚ© Ù…ÙˆØ¶ÙˆØ¹ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ù†ÛŒØ¯: Umwelt, Reisen, Gesundheit.\nÛ². Û³ Ø¯Ù‚ÛŒÙ‚Ù‡ Ø¨Ø¯ÙˆÙ† ÙˆÙ‚ÙÙ‡ ØµØ­Ø¨Øª Ú©Ù†ÛŒØ¯.\nÛ³. Ø³Ø§Ø®ØªØ§Ø±: Ù†Ø¸Ø± â†’ Ø¯لÛŒل + Ù…Ø«Ø§ل â†’ Ù†ØªÛŒØ¬Ù‡â€ŒÚ¯ÛŒØ±ÛŒ.\nÛ´. ØµØ¯Ø§ÛŒ Ø®ÙˆØ¯ Ø±Ø§ Ø¶Ø¨Ø· Ú©Ù†ÛŒØ¯."
    }
  ],

  cultureTip: "Ø¯Ø± Ø§Ù…ØªØ­Ø§Ù† B1 (Goethe/Telc)ØŒ Ø¨Ø®Ø´ Schreiben Ø´Ø§Ù…ل Ù†ÙˆØ´ØªÙ† ÛŒÚ© Ø§ÛŒÙ…ÛŒل Ø±Ø³Ù…ÛŒ (Ø­Ø¯ÙˆØ¯ Û¸Û° Ú©لÙ…Ù‡) Ø§Ø³Øª. Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: Ø§Ú¯Ø± Ú†Ù†Ø¯ Ø§Ø´ØªØ¨Ø§Ù‡ Ú¯Ø±Ø§Ù…Ø±ÛŒ Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´ÛŒØ¯ ÙˆلÛŒ Ø³Ø§Ø®ØªØ§Ø± Ø§ÛŒÙ…ÛŒل Ø¯Ø±Ø³Øª Ø¨Ø§Ø´Ø¯ Ùˆ Ù¾ÛŒØ§Ù… Ø´Ù…Ø§ Ù‚Ø§Ø¨ل ÙÙ‡Ù… Ø¨Ø§Ø´Ø¯ØŒ Ù†Ù…Ø±Ù‡ Ø¨Ø§لØ§ÛŒÛŒ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒØ¯. Ù‡Ø±Ú¯Ø² ÛŒÚ© Ø§ÛŒÙ…ÛŒل Ø±Ø³Ù…ÛŒ Ø±Ø§ Ø¨Ø§ Â«HalloÂ» Ø´Ø±ÙˆØ¹ Ù†Ú©Ù†ÛŒØ¯!",

  examData: {
    questions: [
      { question: "Ø¯Ø± Ø§ÛŒÙ…ÛŒل Ø±Ø³Ù…ÛŒ Ø¢لÙ…Ø§Ù†ÛŒØŒ Ø¨Ø¹Ø¯ Ø§Ø² Ø³لØ§Ù… Ø±Ø³Ù…ÛŒ Ú†Ù‡ Ù…ÛŒâ€ŒÙ†ÙˆÛŒØ³ÛŒØ¯ØŸ", options: ["Ù‡ÛŒÚ†ÛŒ", "Hiermit mÃ¶chte ich Ihnen mitteilen, dass...", "Na, wie gehtلs?", "Ich bin Ali."], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¹Ø¨Ø§Ø±Øª Ø¨Ø±Ø§ÛŒ Ù¾Ø§ÛŒØ§Ù† Ø§ÛŒÙ…ÛŒل Ø±Ø³Ù…ÛŒ Ø¯Ø±Ø³Øª Ø§Ø³ØªØŸ", options: ["TschÃ¼ss!", "Bis bald!", "Mit freundlichen GrÃ¼ÃŸen", "Ciao!"], answer: 2 },
      { question: "Ø¨Ø±Ø§ÛŒ Ù…Ø®Ø§لÙØª Ù…Ø¤Ø¯Ø¨Ø§Ù†Ù‡ØŒ Ú©Ø¯Ø§Ù… Ø¹Ø¨Ø§Ø±Øª Ø¯Ø±Ø³Øª Ø§Ø³ØªØŸ", options: ["Nein, du hast Unrecht!", "Ich stimme Ihnen nicht zu, weil...", "Falsch!", "Quatsch!"], answer: 1 },
      { question: "Â«Zusammenfassend kann man sagenÂ» Ø¯Ø± Ú©Ø¬Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ø´Ø±ÙˆØ¹ Ù…Ú©Ø§لÙ…Ù‡", "Ù…Ø¹Ø±ÙÛŒ Ø®ÙˆØ¯", "Ù†ØªÛŒØ¬Ù‡â€ŒÚ¯ÛŒØ±ÛŒ", "Ø³لØ§Ù… Ú©Ø±Ø¯Ù†"], answer: 2 },
      { question: "Ø¨Ø±Ø§ÛŒ Ø®Ø±ÛŒØ¯Ù† ÙˆÙ‚Øª ÙÚ©Ø± Ú©Ø±Ø¯Ù† Ø¯Ø± Ø§Ù…ØªØ­Ø§Ù† Ø´ÙØ§Ù‡ÛŒØŒ Ú©Ø¯Ø§Ù… Ø¹Ø¨Ø§Ø±Øª Ø¨Ù‡ØªØ± Ø§Ø³ØªØŸ", options: ["(Ø³Ú©ÙˆØª)", "Ich weiÃŸ nicht.", "Das ist eine gute Frage. Lass mich kurz nachdenken.", "Nein."], answer: 2 },
      { question: "Â«Ich mÃ¶chte mich beschweren Ã¼ber...Â» ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", options: ["ØªØ´Ú©Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù…", "Ø´Ú©Ø§ÛŒØª Ù…ÛŒâ€ŒÚ©Ù†Ù…", "Ø³ÙØ§Ø±Ø´ Ù…ÛŒâ€ŒØ¯Ù‡Ù…", "Ø³لØ§Ù… Ù…ÛŒâ€ŒÚ©Ù†Ù…"], answer: 1 },
      { question: "Ø¨Ø±Ø§ÛŒ Ø¨Ø­Ø« Ø¯ÙˆØ·Ø±ÙÙ‡ØŒ Ú©Ø¯Ø§Ù… Ø³Ø§Ø®ØªØ§Ø± Ø¯Ø±Ø³Øª Ø§Ø³ØªØŸ", options: ["Ja, aber...", "Das stimmt, aber andererseits...", "Nein, und...", "Ich weiÃŸ, und deshalb..."], answer: 1 },
      { question: "Ø¯Ø± Ø§ÛŒÙ…ÛŒل Ø´Ú©Ø§ÛŒØªØŒ Ø¨Ø¹Ø¯ Ø§Ø² ØªÙˆØ¶ÛŒØ­ Ù…Ø´Ú©ل Ú†Ù‡ Ù…ÛŒâ€ŒÙ†ÙˆÛŒØ³ÛŒØ¯ØŸ", options: ["TschÃ¼ss!", "Ich wÃ¼rde mich freuen, wenn...", "Hallo!", "Danke!"], answer: 1 }
    ]
  }
};
