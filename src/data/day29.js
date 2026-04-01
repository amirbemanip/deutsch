export const day29Data = {
  title: "Ø±ÙˆØ² Û²Û¹: Ø³لØ§Ù…ØªÛŒ - Ø¨Ø¯Ù†ØŒ Ø¨ÛŒÙ…Ø§Ø±ÛŒ Ùˆ Ù…Ø±Ø§Ø¬Ø¹Ù‡ Ø¨Ù‡ Ù¾Ø²Ø´Ú©",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù†Ø§Ù… Ø§Ø¹Ø¶Ø§ÛŒ Ø¨Ø¯Ù†ØŒ Ø¨ÛŒØ§Ù† Ø¹لØ§Ø¦Ù… Ø¨ÛŒÙ…Ø§Ø±ÛŒØŒ Ù…Ø±Ø§Ø¬Ø¹Ù‡ Ø¨Ù‡ Ù¾Ø²Ø´Ú© Ùˆ Ø®Ø±ÛŒØ¯ Ø¯Ø§Ø±Ùˆ Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ",

  grammarData: {
    subtitle: "Ø¨ÛŒØ§Ù† Ù…Ø´Ú©لØ§Øª Ø¬Ø³Ù…ÛŒ Ùˆ Ù…Ø±Ø§Ø¬Ø¹Ù‡ Ø¨Ù‡ Ù¾Ø²Ø´Ú©",
    content: [
      {
        type: "text",
        title: "Ú†Ú¯ÙˆÙ†Ù‡ Ø¯Ø±Ø¯ Ùˆ Ø¨ÛŒÙ…Ø§Ø±ÛŒ Ø±Ø§ Ø¨ÛŒØ§Ù† Ú©Ù†ÛŒÙ…ØŸ",
        text: "Ø¯Ø± Ø²Ø¨Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒ Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ø¯Ø±Ø¯ Ø§Ø² ÙØ¹ل haben (Ø¯Ø§Ø´ØªÙ†) ÛŒØ§ Ø³Ø§Ø®ØªØ§Ø± Â«mir tut ... wehÂ» Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…. Ù…Ø«Ø§ل: Ich habe Kopfschmerzen (Ù…Ù† Ø³Ø±Ø¯Ø±Ø¯ Ø¯Ø§Ø±Ù…) ÛŒØ§ Mir tut der Bauch weh (Ø´Ú©Ù…Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯)."
      },
      {
        type: "table",
        title: "Ø§Ø¹Ø¶Ø§ÛŒ Ø¨Ø¯Ù† (KÃ¶rperteile)",
        rows: [
          { de: "der Kopf", fa: "Ø³Ø±" },
          { de: "das Auge / die Augen", fa: "Ú†Ø´Ù… / Ú†Ø´Ù…â€ŒÙ‡Ø§" },
          { de: "das Ohr / die Ohren", fa: "Ú¯ÙˆØ´ / Ú¯ÙˆØ´â€ŒÙ‡Ø§" },
          { de: "die Nase", fa: "Ø¨ÛŒÙ†ÛŒ" },
          { de: "der Mund", fa: "Ø¯Ù‡Ø§Ù†" },
          { de: "der Arm / die Arme", fa: "Ø¨Ø§Ø²Ùˆ / Ø¨Ø§Ø²ÙˆÙ‡Ø§" },
          { de: "das Bein / die Beine", fa: "Ù¾Ø§ / Ù¾Ø§Ù‡Ø§" },
          { de: "der RÃ¼cken", fa: "Ù¾Ø´Øª (Ú©Ù…Ø±)" },
          { de: "der Bauch", fa: "Ø´Ú©Ù…" },
          { de: "das Herz", fa: "Ù‚لØ¨" },
          { de: "die Hand / die HÃ¤nde", fa: "Ø¯Ø³Øª / Ø¯Ø³Øªâ€ŒÙ‡Ø§" },
          { de: "der FuÃŸ / die FÃ¼ÃŸe", fa: "Ù¾Ø§ (Ù‚Ø¯Ù…) / Ù¾Ø§Ù‡Ø§" },
          { de: "der Hals", fa: "Ú¯لÙˆ" },
          { de: "der Zahn / die ZÃ¤hne", fa: "Ø¯Ù†Ø¯Ø§Ù† / Ø¯Ù†Ø¯Ø§Ù†â€ŒÙ‡Ø§" }
        ]
      },
      {
        type: "examples",
        title: "Ø¨ÛŒØ§Ù† Ø¹لØ§Ø¦Ù… Ø¨ÛŒÙ…Ø§Ø±ÛŒ",
        items: [
          { de: "Ich habe Kopfschmerzen.", fa: "Ù…Ù† Ø³Ø±Ø¯Ø±Ø¯ Ø¯Ø§Ø±Ù…." },
          { de: "Mir tut der RÃ¼cken weh.", fa: "Ú©Ù…Ø±Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
          { de: "Ich habe Fieber und Husten.", fa: "Ù…Ù† ØªØ¨ Ùˆ Ø³Ø±ÙÙ‡ Ø¯Ø§Ø±Ù…." },
          { de: "Mir ist schlecht.", fa: "Ø­Ø§لÙ… Ø¨Ø¯ Ø§Ø³Øª (Ø­Ø§لØª ØªÙ‡ÙˆØ¹ Ø¯Ø§Ø±Ù…)." },
          { de: "Ich bin erkÃ¤ltet.", fa: "Ù…Ù† Ø³Ø±Ù…Ø§ Ø®ÙˆØ±Ø¯Ù‡â€ŒØ§Ù…." },
          { de: "Ich habe eine Allergie gegen Pollen.", fa: "Ù…Ù† Ø¢لØ±Ú˜ÛŒ Ø¨Ù‡ Ú¯Ø±Ø¯Ù‡ Ú¯ÛŒØ§Ù‡Ø§Ù† Ø¯Ø§Ø±Ù…." },
          { de: "Tut es hier weh?", fa: "Ø¢ÛŒØ§ Ø§ÛŒÙ†Ø¬Ø§ Ø¯Ø±Ø¯ Ø¯Ø§Ø±Ø¯ØŸ" },
          { de: "Seit wann sind Sie krank?", fa: "Ø§Ø² Ú©ÙÛŒ Ù…Ø±ÛŒØ¶ Ù‡Ø³ØªÛŒØ¯ØŸ" }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…!",
        text: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ØŒ Ù…Ø±Ø§Ø¬Ø¹Ù‡ Ø¨Ù‡ Ù¾Ø²Ø´Ú© Ù†ÛŒØ§Ø² Ø¨Ù‡ Ø¨ÛŒÙ…Ù‡ Ø¯Ø±Ù…Ø§Ù†ÛŒ (Krankenversicherung) Ø¯Ø§Ø±Ø¯. Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø§Ø¨ØªØ¯Ø§ Ø¨Ø§ÛŒØ¯ ÙˆÙ‚Øª Ø¨Ú¯ÛŒØ±ÛŒØ¯ (einen Termin machen). Ø¯Ø± Ù…Ø·Ø¨ Ù¾Ø²Ø´Ú©ØŒ Ø§Ø¨ØªØ¯Ø§ Ø¨Ø§ÛŒØ¯ Ø®ÙˆØ¯ Ø±Ø§ Ù…Ø¹Ø±ÙÛŒ Ú©Ù†ÛŒØ¯ Ùˆ Ú©Ø§Ø±Øª Ø¨ÛŒÙ…Ù‡ Ø±Ø§ Ù†Ø´Ø§Ù† Ø¯Ù‡ÛŒØ¯."
      },
      {
        type: "interactive_quiz",
        title: "ØªØ³Øª Ø¹لØ§Ø¦Ù… Ø¨ÛŒÙ…Ø§Ø±ÛŒ",
        questions: [
          {
            question: "Ø´Ù…Ø§ Ø³Ø±Ø¯Ø±Ø¯ Ø¯Ø§Ø±ÛŒØ¯. Ú†Ú¯ÙˆÙ†Ù‡ Ø¨Ù‡ Ù¾Ø²Ø´Ú© Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÛŒØ¯ØŸ",
            questionDe: "Wie sagen Sie das dem Arzt?",
            options: [
              { text: "Ich habe Kopfschmerzen.", isCorrect: true },
              { text: "Ich bin Kopfschmerzen.", isCorrect: false },
              { text: "Mein Kopf ist Schmerzen.", isCorrect: false },
              { text: "Der Kopf tut weh.", isCorrect: false }
            ],
            explanation: "Ø¯Ø± Ø²Ø¨Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒØŒ Ø³Ø±Ø¯Ø±Ø¯ ÛŒÚ© Ø§Ø³Ù… Ù…Ø±Ú©Ø¨ Ø§Ø³Øª: die Kopfschmerzen (Ù‡Ù…ÛŒØ´Ù‡ Ø¬Ù…Ø¹). Ø¨Ø§ ÙØ¹ل haben Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ Ú©Ù…Ø± Ø´Ù…Ø§ Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯.",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich habe RÃ¼ckenweh.", isCorrect: false },
              { text: "Mir tut der RÃ¼cken weh.", isCorrect: true },
              { text: "Der RÃ¼cken ist weh.", isCorrect: false },
              { text: "Mein RÃ¼cken schmerzt nicht.", isCorrect: false }
            ],
            explanation: "Ø³Ø§Ø®ØªØ§Ø± ØµØ­ÛŒØ­: Mir tut + Ø¹Ø¶Ùˆ + weh. Ø§ÛŒÙ† Ø³Ø§Ø®ØªØ§Ø± Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ø¯Ø±Ø¯ Ø§Ø¹Ø¶Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          },
          {
            question: "Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡ÛŒØ¯ ÙˆÙ‚Øª Ù¾Ø²Ø´Ú© Ø¨Ú¯ÛŒØ±ÛŒØ¯. Ú†Ù‡ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÛŒØ¯ØŸ",
            questionDe: "Wie machen Sie einen Termin?",
            options: [
              { text: "Ich will Arzt.", isCorrect: false },
              { text: "Ich mÃ¶chte einen Termin machen.", isCorrect: true },
              { text: "Gib mir Termin.", isCorrect: false },
              { text: "Termin, bitte.", isCorrect: false }
            ],
            explanation: "Ø¹Ø¨Ø§Ø±Øª ØµØ­ÛŒØ­: Ich mÃ¶chte einen Termin machen. (Ù…Ù† Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… ÙˆÙ‚Øª Ø¨Ú¯ÛŒØ±Ù….)"
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÚ©Ù…ÛŒل Ø¬Ù…لØ§Øª Ù…Ø·Ø¨ Ù¾Ø²Ø´Ú©",
        instruction: "Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø±Ø§ Ø¨Ø§ Ú©لÙ…Ù‡ Ù…Ù†Ø§Ø³Ø¨ Ù¾Ø± Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Ich habe starke ___ (Ø³Ø±Ø¯Ø±Ø¯).", answer: "Kopfschmerzen", hint: "Ø³Ø±Ø¯Ø±Ø¯ = Kopfschmerzen (Ù‡Ù…ÛŒØ´Ù‡ Ø¬Ù…Ø¹)" },
          { sentence: "Mir tut der ___ (Ú©Ù…Ø±) weh.", answer: "RÃ¼cken", hint: "Ú©Ù…Ø± = der RÃ¼cken" },
          { sentence: "Ich bin ___. (Ø³Ø±Ù…Ø§ Ø®ÙˆØ±Ø¯Ù‡â€ŒØ§Ù…)", answer: "erkÃ¤ltet", hint: "Ø³Ø±Ù…Ø§ Ø®ÙˆØ±Ø¯Ù† = erkÃ¤ltet sein" },
          { sentence: "Mir ist ___. (Ø­Ø§لÙ… Ø¨Ø¯ Ø§Ø³Øª)", answer: "schlecht", hint: "Ø­Ø§ل Ø¨Ø¯ = schlecht sein" },
          { sentence: "Ich mÃ¶chte einen ___ machen. (ÙˆÙ‚Øª)", answer: "Termin", hint: "ÙˆÙ‚Øª Ú¯Ø±ÙØªÙ† = einen Termin machen" },
          { sentence: "Ich habe ___ und Husten. (ØªØ¨)", answer: "Fieber", hint: "ØªØ¨ = das Fieber" },
          { sentence: "Tut es hier ___? (Ø¯Ø±Ø¯ Ø¯Ø§Ø±Ø¯ØŸ)", answer: "weh", hint: "Ø¯Ø±Ø¯ Ú©Ø±Ø¯Ù† = wehtun" },
          { sentence: "Seit wann sind Sie ___? (Ù…Ø±ÛŒØ¶)", answer: "krank", hint: "Ù…Ø±ÛŒØ¶ = krank sein" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "Ø§Ø¹Ø¶Ø§ÛŒ Ø¨Ø¯Ù† (KÃ¶rperteile)",
        words: [
          { de: "der Kopf", fa: "Ø³Ø±", article: "der", plural: "die KÃ¶pfe", examples: [{ de: "Mein Kopf tut weh.", fa: "Ø³Ø±Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "das Auge", fa: "Ú†Ø´Ù…", article: "das", plural: "die Augen", examples: [{ de: "Meine Augen sind mÃ¼de.", fa: "Ú†Ø´Ù…â€ŒÙ‡Ø§ÛŒÙ… Ø®Ø³ØªÙ‡ Ù‡Ø³ØªÙ†Ø¯." }] },
          { de: "die Nase", fa: "Ø¨ÛŒÙ†ÛŒ", article: "die", plural: "die Nasen", examples: [{ de: "Meine Nase lÃ¤uft.", fa: "Ø¨ÛŒÙ†ÛŒâ€ŒØ§Ù… Ø¢Ø¨ Ù…ÛŒâ€ŒØ±ÛŒØ²Ø¯." }] },
          { de: "der RÃ¼cken", fa: "Ú©Ù…Ø±", article: "der", plural: "die RÃ¼cken", examples: [{ de: "Mein RÃ¼cken schmerzt.", fa: "Ú©Ù…Ø±Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "das Bein", fa: "Ù¾Ø§", article: "das", plural: "die Beine", examples: [{ de: "Mein Bein ist gebrochen.", fa: "Ù¾Ø§ÛŒÙ… Ø´Ú©Ø³ØªÙ‡ Ø§Ø³Øª." }] },
          { de: "das Herz", fa: "Ù‚لØ¨", article: "das", plural: "die Herzen", examples: [{ de: "Mein Herz schlÃ¤gt schnell.", fa: "Ù‚لØ¨Ù… ØªÙ†Ø¯ Ù…ÛŒâ€ŒØ²Ù†Ø¯." }] }
        ]
      },
      {
        title: "Ø¨ÛŒÙ…Ø§Ø±ÛŒ Ùˆ Ø¯Ø§Ø±Ùˆ (Krankheit und Medizin)",
        words: [
          { de: "die ErkÃ¤ltung", fa: "Ø³Ø±Ù…Ø§Ø®ÙˆØ±Ø¯Ú¯ÛŒ", article: "die", plural: "die ErkÃ¤ltungen", examples: [{ de: "Ich habe eine ErkÃ¤ltung.", fa: "Ù…Ù† Ø³Ø±Ù…Ø§Ø®ÙˆØ±Ø¯Ú¯ÛŒ Ø¯Ø§Ø±Ù…." }] },
          { de: "das Fieber", fa: "ØªØ¨", article: "das", plural: "-", examples: [{ de: "Das Fieber ist sehr hoch.", fa: "ØªØ¨ Ø®ÛŒلÛŒ Ø¨Ø§لØ§Ø³Øª." }] },
          { de: "der Husten", fa: "Ø³Ø±ÙÙ‡", article: "der", plural: "-", examples: [{ de: "Der Husten geht nicht weg.", fa: "Ø³Ø±ÙÙ‡ Ø§Ø² Ø¨ÛŒÙ† Ù†Ù…ÛŒâ€ŒØ±ÙˆØ¯." }] },
          { de: "die Tablette", fa: "Ù‚Ø±Øµ", article: "die", plural: "die Tabletten", examples: [{ de: "Nehmen Sie dreimal tÃ¤glich eine Tablette.", fa: "Ø±ÙˆØ²ÛŒ Ø³Ù‡ Ø¨Ø§Ø± ÛŒÚ© Ù‚Ø±Øµ Ù…ØµØ±Ù Ú©Ù†ÛŒØ¯." }] },
          { de: "die Apotheke", fa: "Ø¯Ø§Ø±ÙˆØ®Ø§Ù†Ù‡", article: "die", plural: "die Apotheken", examples: [{ de: "Die Apotheke ist um die Ecke.", fa: "Ø¯Ø§Ø±ÙˆØ®Ø§Ù†Ù‡ Ø³Ø± Ú©ÙˆÚ†Ù‡ Ø§Ø³Øª." }] },
          { die: "die Krankenkasse", fa: "Ø¨ÛŒÙ…Ù‡ Ø¯Ø±Ù…Ø§Ù†ÛŒ", article: "die", plural: "die Krankenkassen", examples: [{ de: "Haben Sie eine Krankenkasse?", fa: "Ø¢ÛŒØ§ Ø¨ÛŒÙ…Ù‡ Ø¯Ø±Ù…Ø§Ù†ÛŒ Ø¯Ø§Ø±ÛŒØ¯ØŸ" }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Beim Arzt\n\nGuten Morgen, ich bin der Doktor Weber. Was kann ich fÃ¼r Sie tun?\nGuten Morgen, Doktor. Ich bin seit drei Tagen krank. Ich habe starke Kopfschmerzen und Fieber. AuÃŸerdem tut mir der Hals sehr weh.\nHaben Sie auch Husten?\nJa, ich huste sehr viel. Mir ist auch schlecht, wenn ich esse.\nIch verstehe. Lassen Sie mich Ihre Kehle untersuchen. Ã–ffnen Sie bitte den Mund. Hmm, Ihr Hals ist sehr rot. Ich glaube, Sie haben eine Grippe. Ich schreibe Ihnen ein Rezept. Nehmen Sie bitte dreimal tÃ¤glich diese Tabletten. Trinken Sie viel Wasser und bleiben Sie zwei Tage im Bett.",
      questions: [
        { question: "Ø¨ÛŒÙ…Ø§Ø± Ú†Ù‡ Ø¹لØ§Ø¦Ù…ÛŒ Ø¯Ø§Ø±Ø¯ØŸ", answer: "Ø³Ø±Ø¯Ø±Ø¯ Ø´Ø¯ÛŒØ¯ØŒ ØªØ¨ØŒ Ú¯لÙˆØ¯Ø±Ø¯ Ùˆ Ø³Ø±ÙÙ‡. Ù‡Ù…Ú†Ù†ÛŒÙ† Ø­Ø§لØª ØªÙ‡ÙˆØ¹ Ø¯Ø§Ø±Ø¯." },
        { question: "Ø¯Ú©ØªØ± Ú†Ù‡ ØªØ´Ø®ÛŒØµÛŒ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ØŸ", answer: "Ø¯Ú©ØªØ± Ù…Ø¹ØªÙ‚Ø¯ Ø§Ø³Øª Ø¨ÛŒÙ…Ø§Ø± Ø¢Ù†ÙÙˆلØ§Ù†Ø²Ø§ (Grippe) Ø¯Ø§Ø±Ø¯." },
        { question: "Ø¯Ú©ØªØ± Ú†Ù‡ Ø¯Ø§Ø±ÙˆÛŒÛŒ ØªØ¬ÙˆÛŒØ² Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ùˆ Ú†Ù†Ø¯ Ø¨Ø§Ø± Ø¯Ø± Ø±ÙˆØ²ØŸ", answer: "Ù‚Ø±Øµ (Tabletten) Ú©Ù‡ Ø¨Ø§ÛŒØ¯ Ø³Ù‡ Ø¨Ø§Ø± Ø¯Ø± Ø±ÙˆØ² Ù…ØµØ±Ù Ø´ÙˆØ¯." },
        { question: "Ø¯Ú©ØªØ± Ú†Ù‡ ØªÙˆØµÛŒÙ‡â€ŒÙ‡Ø§ÛŒÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", answer: "Ø¢Ø¨ Ø²ÛŒØ§Ø¯ Ø¨Ù†ÙˆØ´ÛŒØ¯ Ùˆ Ø¯Ùˆ Ø±ÙˆØ² Ø¯Ø± Ø±Ø®ØªØ®ÙˆØ§Ø¨ Ø¨Ù…Ø§Ù†ÛŒØ¯." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ø¯Ø±Ø¨Ø§Ø±Ù‡ ØªØ¬Ø±Ø¨Ù‡ Ø¨ÛŒÙ…Ø§Ø±ÛŒ",
      prompt: "ÛŒÚ© Ù¾Ø§Ø±Ø§Ú¯Ø±Ø§Ù (Û¶ Ø®Ø·) Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø¢Ø®Ø±ÛŒÙ† Ø¨Ø§Ø±ÛŒ Ú©Ù‡ Ù…Ø±ÛŒØ¶ Ø´Ø¯ÛŒØ¯ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯. Ø¹لØ§Ø¦Ù…ØŒ Ù…Ø±Ø§Ø¬Ø¹Ù‡ Ø¨Ù‡ Ù¾Ø²Ø´Ú© Ùˆ Ø¯Ø±Ù…Ø§Ù† Ø±Ø§ Ø´Ø±Ø­ Ø¯Ù‡ÛŒØ¯.",
      steps: [
        { title: "Ø¹لØ§Ø¦Ù… Ø¨ÛŒÙ…Ø§Ø±ÛŒ", text: "ØªÙˆØ¶ÛŒØ­ Ø¯Ù‡ÛŒØ¯ Ú†Ù‡ Ø¹لØ§Ø¦Ù…ÛŒ Ø¯Ø§Ø´ØªÛŒØ¯.", example: { de: "Letzten Monat war ich krank. Ich hatte Fieber und Husten.", fa: "Ù…Ø§Ù‡ Ú¯Ø°Ø´ØªÙ‡ Ù…Ø±ÛŒØ¶ Ø¨ÙˆØ¯Ù…. ØªØ¨ Ùˆ Ø³Ø±ÙÙ‡ Ø¯Ø§Ø´ØªÙ…." } },
        { title: "Ù…Ø±Ø§Ø¬Ø¹Ù‡ Ø¨Ù‡ Ù¾Ø²Ø´Ú©", text: "ØªÙˆØ¶ÛŒØ­ Ø¯Ù‡ÛŒØ¯ Ø¨Ù‡ Ù¾Ø²Ø´Ú© Ù…Ø±Ø§Ø¬Ø¹Ù‡ Ú©Ø±Ø¯ÛŒØ¯.", example: { de: "Ich bin zum Arzt gegangen und habe einen Termin gemacht.", fa: "Ø¨Ù‡ Ù¾Ø²Ø´Ú© Ø±ÙØªÙ… Ùˆ ÙˆÙ‚Øª Ú¯Ø±ÙØªÙ…." } },
        { title: "Ø¯Ø±Ù…Ø§Ù†", text: "Ø¨Ú¯ÙˆÛŒÛŒØ¯ Ú†Ù‡ Ø¯Ø§Ø±ÙˆÛŒÛŒ Ù…ØµØ±Ù Ú©Ø±Ø¯ÛŒØ¯.", example: { de: "Der Arzt hat mir Tabletten verschrieben.", fa: "Ù¾Ø²Ø´Ú© Ø¨Ø±Ø§ÛŒÙ… Ù‚Ø±Øµ ØªØ¬ÙˆÛŒØ² Ú©Ø±Ø¯." } }
      ],
      modelAnswer: "Letzten Winter war ich sehr krank. Ich hatte starke Kopfschmerzen, Fieber und Husten. Mir tat auch der Hals weh. Ich bin zum Arzt gegangen. Der Arzt hat gesagt, dass ich eine Grippe habe. Er hat mir ein Rezept gegeben. Ich bin zur Apotheke gegangen und habe Tabletten gekauft. Nach einer Woche war ich wieder gesund. Jetzt trinke ich jeden Tag viel Wasser, um gesund zu bleiben."
    }
  ],

  listening: [
    {
      title: "Ú¯ÙˆØ´ Ø¯Ø§Ø¯Ù†: Ù…Ú©Ø§لÙ…Ù‡ Ø¨Ø§ Ù¾Ø²Ø´Ú©",
      source: "Deutsche Welle",
      link: "https://www.dw.com/de/langsam-gesprochene-nachrichten/s-60048529",
      instructions: "Ø¨Ù‡ Ù…Ú©Ø§لÙ…Ø§Øª Ø¯Ø± Ù…Ø·Ø¨ Ù¾Ø²Ø´Ú© Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯. Ø¹لØ§Ø¦Ù… Ø¨ÛŒÙ…Ø§Ø±ÛŒ Ùˆ ØªÙˆØµÛŒÙ‡â€ŒÙ‡Ø§ÛŒ Ù¾Ø²Ø´Ú© Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
    }
  ],

  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ú¯ÙØªØ§Ø±ÛŒ: ØªÙˆØ¶ÛŒØ­ Ø¹لØ§Ø¦Ù… Ø¨Ù‡ Ù¾Ø²Ø´Ú©",
      pattern: "Ich habe ... Mir tut ... weh. Seit wann?",
      exercise: "ØªØµÙˆØ± Ú©Ù†ÛŒØ¯ Ø¯Ø± Ù…Ø·Ø¨ Ù¾Ø²Ø´Ú© Ù‡Ø³ØªÛŒØ¯. Ø¹لØ§Ø¦Ù… Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ Ø´Ø±Ø­ Ø¯Ù‡ÛŒØ¯ Ùˆ Ø¨Ú¯ÙˆÛŒÛŒØ¯ Ø§Ø² Ú©ÙÛŒ Ù…Ø±ÛŒØ¶ Ù‡Ø³ØªÛŒØ¯."
    }
  ],

  cultureTip: "Ø³ÛŒØ³ØªÙ… Ø¯Ø±Ù…Ø§Ù†ÛŒ Ø¢لÙ…Ø§Ù† (Gesundheitssystem) ÛŒÚ©ÛŒ Ø§Ø² Ø¨Ù‡ØªØ±ÛŒÙ†â€ŒÙ‡Ø§ Ø¯Ø± Ø¬Ù‡Ø§Ù† Ø§Ø³Øª. Ù‡Ø± Ø³Ø§Ú©Ù† Ø¢لÙ…Ø§Ù† Ø¨Ø§ÛŒØ¯ Ø¨ÛŒÙ…Ù‡ Ø¯Ø±Ù…Ø§Ù†ÛŒ Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´Ø¯. Ø¯Ø§Ø±ÙˆØ®Ø§Ù†Ù‡â€ŒÙ‡Ø§ (Apotheken) Ø¹لØ§Ù…Øª Ù…Ø®ØµÙˆØµ Ø¢Ø¨ÛŒ Ø¯Ø§Ø±Ù†Ø¯ Ùˆ Ø¨Ø±Ø§ÛŒ Ø¨Ø³ÛŒØ§Ø±ÛŒ Ø§Ø² Ø¯Ø§Ø±ÙˆÙ‡Ø§ Ù†ÛŒØ§Ø² Ø¨Ù‡ Ù†Ø³Ø®Ù‡ Ù¾Ø²Ø´Ú© Ø§Ø³Øª. Ø§Ú¯Ø± Ø¯Ø± Ø´Ø¨ ÛŒØ§ Ø¢Ø®Ø± Ù‡ÙØªÙ‡ Ø¨ÛŒÙ…Ø§Ø± Ø´Ø¯ÛŒØ¯ØŒ Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒØ¯ Ø¨Ù‡ Ø¯Ø§Ø±ÙˆØ®Ø§Ù†Ù‡ Ø´Ø¨Ø§Ù†Ù‡â€ŒØ±ÙˆØ²ÛŒ (Notapotheke) Ù…Ø±Ø§Ø¬Ø¹Ù‡ Ú©Ù†ÛŒØ¯.",

  examData: {
    questions: [
      { question: "Ø´Ù…Ø§ Ø³Ø±Ø¯Ø±Ø¯ Ø¯Ø§Ø±ÛŒØ¯. Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich bin Kopfschmerzen.", "Ich habe Kopfschmerzen.", "Mir ist Kopfschmerzen.", "Der Kopf tut mir."], answer: 1 },
      { question: "Ú©Ù…Ø±Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:", options: ["Der RÃ¼cken tut weh.", "Mir tut der RÃ¼cken weh.", "Ich habe RÃ¼cken.", "Der RÃ¼cken ist weh."], answer: 1 },
      { question: "ØªØ¨ Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:", options: ["der Husten", "das Fieber", "die ErkÃ¤ltung", "der Schmerz"], answer: 1 },
      { question: "ÙˆÙ‚Øª Ù¾Ø²Ø´Ú© Ú¯Ø±ÙØªÙ†:", options: ["einen Termin machen", "einen Arzt kaufen", "zum Arzt gehen", "den Arzt rufen"], answer: 0 },
      { question: "Ù…Ù† Ø³Ø±Ù…Ø§ Ø®ÙˆØ±Ø¯Ù‡â€ŒØ§Ù…:", options: ["Ich bin kalt.", "Ich bin erkÃ¤ltet.", "Ich habe kalt.", "Ich fÃ¼hle kalt."], answer: 1 },
      { question: "Ø¯Ø§Ø±ÙˆØ®Ø§Ù†Ù‡ Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:", options: ["die Klinik", "das Krankenhaus", "die Apotheke", "der Arzt"], answer: 2 },
      { question: "Ù‚Ø±Øµ Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:", options: ["die Pille", "die Tablette", "das Medikament", "der Tropfen"], answer: 1 },
      { question: "Ø§Ø² Ú©ÙÛŒ Ù…Ø±ÛŒØ¶ Ù‡Ø³ØªÛŒØ¯ØŸ", options: ["Wann sind Sie krank?", "Seit wann sind Sie krank?", "Wie lange sind Sie krank?", "Warum sind Sie krank?"], answer: 1 },
      { question: "Ø­Ø§لÙ… Ø¨Ø¯ Ø§Ø³Øª:", options: ["Mir ist schlecht.", "Ich bin schlecht.", "Mir geht schlecht.", "Ich fÃ¼hle schlecht."], answer: 0 },
      { question: "Ø³Ø±ÙÙ‡ Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:", options: ["das Fieber", "die ErkÃ¤ltung", "der Husten", "der Schmerz"], answer: 2 }
    ]
  }
};
