export const day11Data = {
  title: "Ø±ÙˆØ² Û±Û±: Ø§Ø¹Ø¶Ø§ÛŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ + Ù…Ø´Ø§Øºل Ùˆ Ø­Ø±ÙÙ‡â€ŒÙ‡Ø§",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø§Ø³Ø§Ù…ÛŒ Ø§Ø¹Ø¶Ø§ÛŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ØŒ Ù…Ø´Ø§Øºل Ùˆ Ù†Ø­ÙˆÙ‡ ØªÙˆØµÛŒÙ Ø´Ø¬Ø±Ù‡â€ŒÙ†Ø§Ù…Ù‡ Ø®Ø§Ù†ÙˆØ§Ø¯Ú¯ÛŒ",
  grammarData: {
    subtitle: "Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ùˆ Ù…Ø´Ø§Øºل",
    content: [
      {
        type: "text",
        title: "Ø§Ø¹Ø¶Ø§ÛŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ",
        text: "die Familie (Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡)ØŒ der Vater / der Papa (Ù¾Ø¯Ø±)ØŒ die Mutter / die Mama (Ù…Ø§Ø¯Ø±)ØŒ der Sohn (Ù¾Ø³Ø±)ØŒ die Tochter (Ø¯Ø®ØªØ±)ØŒ der Bruder (Ø¨Ø±Ø§Ø¯Ø±)ØŒ die Schwester (Ø®ÙˆØ§Ù‡Ø±)ØŒ der GroÃŸvater / der Opa (Ù¾Ø¯Ø±Ø¨Ø²Ø±Ú¯)ØŒ die GroÃŸmutter / die Oma (Ù…Ø§Ø¯Ø±Ø¨Ø²Ø±Ú¯)ØŒ der Onkel (Ø¹Ù…Ùˆ/Ø¯Ø§ÛŒÛŒ)ØŒ die Tante (Ø¹Ù…Ù‡/Ø®Ø§لÙ‡)ØŒ der Cousin (Ù¾Ø³Ø±Ø¹Ù…Ùˆ/Ù¾Ø³Ø±Ø¯Ø§ÛŒÛŒ)ØŒ die Cousine (Ø¯Ø®ØªØ±Ø¹Ù…Ùˆ/Ø¯Ø®ØªØ±Ø¯Ø§ÛŒÛŒ)."
      },
      {
        type: "table",
        title: "Ø§Ø¹Ø¶Ø§ÛŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡",
        rows: [
          { de: "die Familie", fa: "Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡" },
          { de: "der Vater / der Papa", fa: "Ù¾Ø¯Ø±" },
          { de: "die Mutter / die Mama", fa: "Ù…Ø§Ø¯Ø±" },
          { de: "der Sohn", fa: "Ù¾Ø³Ø±" },
          { de: "die Tochter", fa: "Ø¯Ø®ØªØ±" },
          { de: "der Bruder", fa: "Ø¨Ø±Ø§Ø¯Ø±" },
          { de: "die Schwester", fa: "Ø®ÙˆØ§Ù‡Ø±" },
          { de: "der GroÃŸvater / der Opa", fa: "Ù¾Ø¯Ø±Ø¨Ø²Ø±Ú¯" },
          { de: "die GroÃŸmutter / die Oma", fa: "Ù…Ø§Ø¯Ø±Ø¨Ø²Ø±Ú¯" },
          { de: "die Eltern (plural)", fa: "ÙˆØ§لØ¯ÛŒÙ†" },
          { de: "die Geschwister (plural)", fa: "Ø®ÙˆØ§Ù‡Ø± Ùˆ Ø¨Ø±Ø§Ø¯Ø±Ù‡Ø§" },
          { de: "der Ehemann", fa: "Ø´ÙˆÙ‡Ø±" },
          { de: "die Ehefrau", fa: "Ù‡Ù…Ø³Ø± (Ø²Ù†)" },
          { de: "der Enkel", fa: "Ù†ÙˆÙ‡ (Ù¾Ø³Ø±)" },
          { de: "die Enkelin", fa: "Ù†ÙˆÙ‡ (Ø¯Ø®ØªØ±)" }
        ]
      },
      {
        type: "text",
        title: "ÙØ¹ل haben Ø¨Ø±Ø§ÛŒ ØªÙˆØµÛŒÙ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡",
        text: "Ø¨Ø±Ø§ÛŒ ØªÙˆØµÛŒÙ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ø§Ø² ÙØ¹ل haben Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: Ich habe einen Bruder (Ù…Ù† ÛŒÚ© Ø¨Ø±Ø§Ø¯Ø± Ø¯Ø§Ø±Ù…). Ich habe zwei Schwestern (Ù…Ù† Ø¯Ùˆ Ø®ÙˆØ§Ù‡Ø± Ø¯Ø§Ø±Ù…). ØªÙˆØ¬Ù‡: Ø¨Ø¹Ø¯ Ø§Ø² ÙØ¹ل habenØŒ Ù…ÙØ¹Ùˆل Ø¯Ø± Ø­Ø§لØª Akkusativ Ù‚Ø±Ø§Ø± Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯."
      },
      {
        type: "examples",
        title: "Ø¬Ù…لØ§Øª ØªÙˆØµÛŒÙ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡",
        items: [
          { de: "Ich habe eine groÃŸe Familie.", fa: "Ù…Ù† ÛŒÚ© Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ø¨Ø²Ø±Ú¯ Ø¯Ø§Ø±Ù…." },
          { de: "Mein Vater heiÃŸt Ahmad.", fa: "Ù¾Ø¯Ø±Ù… Ø§Ø­Ù…Ø¯ Ù†Ø§Ù… Ø¯Ø§Ø±Ø¯." },
          { de: "Meine Mutter ist Lehrerin.", fa: "Ù…Ø§Ø¯Ø±Ù… Ù…Ø¹لÙ… Ø§Ø³Øª." },
          { de: "Ich habe zwei BrÃ¼der und eine Schwester.", fa: "Ù…Ù† Ø¯Ùˆ Ø¨Ø±Ø§Ø¯Ø± Ùˆ ÛŒÚ© Ø®ÙˆØ§Ù‡Ø± Ø¯Ø§Ø±Ù…." },
          { de: "Mein Bruder ist Ã¤lter als ich.", fa: "Ø¨Ø±Ø§Ø¯Ø±Ù… Ø§Ø² Ù…Ù† Ø¨Ø²Ø±Ú¯ØªØ± Ø§Ø³Øª." },
          { de: "Meine GroÃŸmutter ist 80 Jahre alt.", fa: "Ù…Ø§Ø¯Ø±Ø¨Ø²Ø±Ú¯Ù… Û¸Û° Ø³Ø§لÙ‡ Ø§Ø³Øª." }
        ]
      },
      {
        type: "text",
        title: "Ù…Ø´Ø§Øºل Ùˆ Ø­Ø±ÙÙ‡â€ŒÙ‡Ø§",
        text: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ø¨Ø±Ø§ÛŒ Ù…Ø¹Ø±ÙÛŒ Ø´Øºل Ø§Ø² ÙØ¹ل sein Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: Ich bin Student (Ù…Ù† Ø¯Ø§Ù†Ø´Ø¬Ùˆ Ù‡Ø³ØªÙ…). Ø´Øºلâ€ŒÙ‡Ø§ Ø¨Ø¯ÙˆÙ† artikel Ù‡Ø³ØªÙ†Ø¯ Ø§Ù…Ø§ Ø§Ú¯Ø± Ø¨Ø§ artikel Ø¨ÛŒØ§ÛŒÙ†Ø¯ØŒ Ù…Ø°Ú©Ø± ÛŒØ§ Ù…Ø¤Ù†Ø« Ø¨ÙˆØ¯Ù† Ù…Ø´Ø®Øµ Ù…ÛŒâ€ŒØ´ÙˆØ¯: der Lehrer (Ù…Ø¹لÙ… Ù…Ø±Ø¯)ØŒ die Lehrerin (Ù…Ø¹لÙ… Ø²Ù†)."
      },
      {
        type: "table",
        title: "Ù…Ø´Ø§Øºل Ø±Ø§ÛŒØ¬",
        rows: [
          { de: "der Lehrer / die Lehrerin", fa: "Ù…Ø¹لÙ…" },
          { de: "der Arzt / die لrztin", fa: "Ø¯Ú©ØªØ±" },
          { de: "der Ingenieur / die Ingenieurin", fa: "Ù…Ù‡Ù†Ø¯Ø³" },
          { de: "der Student / die Studentin", fa: "Ø¯Ø§Ù†Ø´Ø¬Ùˆ" },
          { de: "der Koch / die KÃ¶chin", fa: "Ø¢Ø´Ù¾Ø²" },
          { de: "der Kellner / die Kellnerin", fa: "Ù¾ÛŒØ´Ø®Ø¯Ù…Øª" },
          { de: "der Polizist / die Polizistin", fa: "Ù¾لÛŒØ³" },
          { de: "der Fahrer / die Fahrerin", fa: "Ø±Ø§Ù†Ù†Ø¯Ù‡" },
          { de: "der VerkÃ¤ufer / die VerkÃ¤uferin", fa: "ÙØ±ÙˆØ´Ù†Ø¯Ù‡" },
          { de: "der Kaufmann / die Kauffrau", fa: "Ø¨Ø§Ø²Ø±Ú¯Ø§Ù†" },
          { de: "der Schriftsteller / die Schriftstellerin", fa: "Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡" },
          { de: "der Musiker / die Musikerin", fa: "Ù†ÙˆØ§Ø²Ù†Ø¯Ù‡/Ù…ÙˆØ³ÛŒÙ‚ÛŒØ¯Ø§Ù†" }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡: Ø´Øºل Ø¨Ø¯ÙˆÙ† Artikel",
        text: "ÙˆÙ‚ØªÛŒ Ø´Øºل Ø±Ø§ Ø¨Ø§ ÙØ¹ل sein Ù…Ø¹Ø±ÙÛŒ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…ØŒ artikel Ù†Ø¯Ø§Ø±Ø¯: Ich bin Lehrer (Ù…Ù† Ù…Ø¹لÙ… Ù‡Ø³ØªÙ…). Ø§Ù…Ø§ Ø§Ú¯Ø± Ø¨Ø®ÙˆØ§Ù‡ÛŒÙ… ØªÙˆØµÛŒÙ Ú©Ù†ÛŒÙ…ØŒ artikel Ø¯Ø§Ø±Ø¯: Ich bin ein guter Lehrer (Ù…Ù† ÛŒÚ© Ù…Ø¹لÙ… Ø®ÙˆØ¨ Ù‡Ø³ØªÙ…)."
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ†: Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ùˆ Ù…Ø´Ø§Øºل",
        questions: [
          {
            question: "لÙ¾Ø¯Ø±Ø¨Ø²Ø±Ú¯ل Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ Ú†ÛŒØ³ØªØŸ",
            questionDe: "Wie sagt man لgrandfatherل auf Deutsch?",
            options: [
              { text: "der GroÃŸvater", isCorrect: true },
              { text: "der Vater", isCorrect: false },
              { text: "der Onkel", isCorrect: false },
              { text: "der Bruder", isCorrect: false }
            ],
            explanation: "der GroÃŸvater ÛŒØ§ der Opa Ø¨Ù‡ Ù…Ø¹Ù†Ø§ÛŒ Ù¾Ø¯Ø±Ø¨Ø²Ø±Ú¯ Ø§Ø³Øª."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ",
            questionDe: "Welcher Satz ist korrekt?",
            options: [
              { text: "Ich bin Arzt.", isCorrect: true },
              { text: "Ich bin der Arzt.", isCorrect: false },
              { text: "Ich bin ein Arzt.", isCorrect: false },
              { text: "Ich bin die Arzt.", isCorrect: false }
            ],
            explanation: "Ø¨Ø¹Ø¯ Ø§Ø² ÙØ¹ل sein Ø¨Ø±Ø§ÛŒ Ù…Ø¹Ø±ÙÛŒ Ø´ØºلØŒ artikel Ù†Ù…ÛŒâ€ŒØ¢ÛŒØ¯."
          },
          {
            question: "لÙ…Ù† Ø¯Ùˆ Ø®ÙˆØ§Ù‡Ø± Ø¯Ø§Ø±Ù…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man لI have two sistersل?",
            options: [
              { text: "Ich habe zwei Schwestern.", isCorrect: true },
              { text: "Ich bin zwei Schwestern.", isCorrect: false },
              { text: "Ich habe zwei Schwester.", isCorrect: false },
              { text: "Ich habe zwei BrÃ¼der.", isCorrect: false }
            ],
            explanation: "der Bruder â†’ die BrÃ¼derØŒ die Schwester â†’ die Schwestern (Ø¬Ù…Ø¹ Ø¨ÛŒâ€ŒÙ‚Ø§Ø¹Ø¯Ù‡)"
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÚ©Ù…ÛŒل Ø¬Ù…لØ§Øª: Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡",
        instruction: "Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø±Ø§ Ø¨Ø§ Ú©لÙ…Ù‡ Ù…Ù†Ø§Ø³Ø¨ Ù¾Ø± Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Mein ___ heiÃŸt Hans.", answer: "Vater", hint: "Ù¾Ø¯Ø±" },
          { sentence: "Ich ___ zwei BrÃ¼der.", answer: "habe", hint: "ÙØ¹ل Ø¯Ø§Ø´ØªÙ†" },
          { sentence: "Meine Mutter ist ___.", answer: "Lehrerin", hint: "Ø´Øºل Ù…Ø¹لÙ… Ø²Ù†" },
          { sentence: "Mein GroÃŸvater ist 80 Jahre ___.", answer: "alt", hint: "Ù‚Ø¯ÛŒÙ…ÛŒ/Ø³Ù†" },
          { sentence: "Ich ___ Student.", answer: "bin", hint: "ÙØ¹ل sein Ø¨Ø±Ø§ÛŒ ich" },
          { sentence: "Meine ___ heiÃŸt Anna.", answer: "Schwester", hint: "Ø®ÙˆØ§Ù‡Ø±" },
          { sentence: "___ Eltern sind sehr nett.", answer: "Meine", hint: "Ù…Ø§لÚ©ÛŒØª Ù…Ø¤Ù†Ø« Ø¬Ù…Ø¹" },
          { sentence: "Er ist ___ Ingenieur.", answer: "ein", hint: "ÛŒÚ© Ù…Ù‡Ù†Ø¯Ø³" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "Ø§Ø¹Ø¶Ø§ÛŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡",
        words: [
          { de: "die Familie", fa: "Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡", article: "die", plural: "die Familien", examples: [{ de: "Meine Familie ist groÃŸ.", fa: "Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ù…Ù† Ø¨Ø²Ø±Ú¯ Ø§Ø³Øª." }] },
          { de: "der Vater", fa: "Ù¾Ø¯Ø±", article: "der", plural: "die VÃ¤ter", examples: [{ de: "Mein Vater arbeitet viel.", fa: "Ù¾Ø¯Ø±Ù… Ø²ÛŒØ§Ø¯ Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "die Mutter", fa: "Ù…Ø§Ø¯Ø±", article: "die", plural: "die MÃ¼tter", examples: [{ de: "Meine Mutter kocht gut.", fa: "Ù…Ø§Ø¯Ø±Ù… Ø®ÙˆØ¨ Ø¢Ø´Ù¾Ø²ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "der Sohn", fa: "Ù¾Ø³Ø±", article: "der", plural: "die SÃ¶hne", examples: [{ de: "Der Sohn ist sechs Jahre alt.", fa: "Ù¾Ø³Ø± Ø´Ø´ Ø³Ø§لÙ‡ Ø§Ø³Øª." }] },
          { de: "die Tochter", fa: "Ø¯Ø®ØªØ±", article: "die", plural: "die TÃ¶chter", examples: [{ de: "Die Tochter geht zur Schule.", fa: "Ø¯Ø®ØªØ± Ø¨Ù‡ Ù…Ø¯Ø±Ø³Ù‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯." }] },
          { de: "der Bruder", fa: "Ø¨Ø±Ø§Ø¯Ø±", article: "der", plural: "die BrÃ¼der", examples: [{ de: "Mein Bruder spielt FuÃŸball.", fa: "Ø¨Ø±Ø§Ø¯Ø±Ù… ÙÙˆØªØ¨Ø§ل Ø¨Ø§Ø²ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "die Schwester", fa: "Ø®ÙˆØ§Ù‡Ø±", article: "die", plural: "die Schwestern", examples: [{ de: "Meine Schwester ist jÃ¼nger.", fa: "Ø®ÙˆØ§Ù‡Ø±Ù… Ú©ÙˆÚ†Ú©ØªØ± Ø§Ø³Øª." }] },
          { de: "der GroÃŸvater", fa: "Ù¾Ø¯Ø±Ø¨Ø²Ø±Ú¯", article: "der", plural: "die GroÃŸvÃ¤ter", examples: [{ de: "Mein GroÃŸvater ist 75 Jahre alt.", fa: "Ù¾Ø¯Ø±Ø¨Ø²Ø±Ú¯Ù… Û·Ûµ Ø³Ø§لÙ‡ Ø§Ø³Øª." }] },
          { de: "die GroÃŸmutter", fa: "Ù…Ø§Ø¯Ø±Ø¨Ø²Ø±Ú¯", article: "die", plural: "die GroÃŸmÃ¼tter", examples: [{ de: "Meine GroÃŸmutter wohnt in Berlin.", fa: "Ù…Ø§Ø¯Ø±Ø¨Ø²Ø±Ú¯Ù… Ø¯Ø± Ø¨Ø±لÛŒÙ† Ø²Ù†Ø¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "der Ehemann", fa: "Ø´ÙˆÙ‡Ø±", article: "der", plural: "die EhemÃ¤nner", examples: [{ de: "Ihr Ehemann ist Arzt.", fa: "Ø´ÙˆÙ‡Ø±Ø´ Ø¯Ú©ØªØ± Ø§Ø³Øª." }] },
          { de: "die Ehefrau", fa: "Ù‡Ù…Ø³Ø± (Ø²Ù†)", article: "die", plural: "die Ehefrauen", examples: [{ de: "Seine Ehefrau ist Lehrerin.", fa: "Ù‡Ù…Ø³Ø±Ø´ Ù…Ø¹لÙ… Ø§Ø³Øª." }] },
          { de: "der Enkel", fa: "Ù†ÙˆÙ‡ (Ù¾Ø³Ø±)", article: "der", plural: "die Enkel", examples: [{ de: "Der Enkel besucht die Oma.", fa: "Ù†ÙˆÙ‡ Ø§Ø² Ù…Ø§Ø¯Ø±Ø¨Ø²Ø±Ú¯ Ø¯ÛŒØ¯Ù† Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] }
        ]
      },
      {
        title: "Ù…Ø´Ø§Øºل",
        words: [
          { de: "der Lehrer / die Lehrerin", fa: "Ù…Ø¹لÙ…", article: "der/die", plural: "die Lehrer/innen", examples: [{ de: "Er ist Lehrer an einer Schule.", fa: "Ø§Ùˆ Ù…Ø¹لÙ… Ù…Ø¯Ø±Ø³Ù‡ Ø§Ø³Øª." }] },
          { de: "der Arzt / die لrztin", fa: "Ø¯Ú©ØªØ±", article: "der/die", plural: "die لrzte/innen", examples: [{ de: "Die لrztin arbeitet im Krankenhaus.", fa: "Ø¯Ú©ØªØ± Ø²Ù† Ø¯Ø± Ø¨ÛŒÙ…Ø§Ø±Ø³ØªØ§Ù† Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "der Ingenieur / die Ingenieurin", fa: "Ù…Ù‡Ù†Ø¯Ø³", article: "der/die", plural: "die Ingenieure/innen", examples: [{ de: "Mein Vater ist Ingenieur.", fa: "Ù¾Ø¯Ø±Ù… Ù…Ù‡Ù†Ø¯Ø³ Ø§Ø³Øª." }] },
          { de: "der Student / die Studentin", fa: "Ø¯Ø§Ù†Ø´Ø¬Ùˆ", article: "der/die", plural: "die Studenten/innen", examples: [{ de: "Ich bin Student an der UniversitÃ¤t.", fa: "Ù…Ù† Ø¯Ø§Ù†Ø´Ø¬ÙˆÛŒ Ø¯Ø§Ù†Ø´Ú¯Ø§Ù‡ Ù‡Ø³ØªÙ…." }] },
          { de: "der Koch / die KÃ¶chin", fa: "Ø¢Ø´Ù¾Ø²", article: "der/die", plural: "die KÃ¶che/innen", examples: [{ de: "Der Koch bereitet das Essen zu.", fa: "Ø¢Ø´Ù¾Ø² ØºØ°Ø§ Ø±Ø§ Ø¢Ù…Ø§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "der Kellner / die Kellnerin", fa: "Ù¾ÛŒØ´Ø®Ø¯Ù…Øª", article: "der/die", plural: "die Kellner/innen", examples: [{ de: "Die Kellnerin bringt den Kaffee.", fa: "Ù¾ÛŒØ´Ø®Ø¯Ù…Øª Ù‚Ù‡ÙˆÙ‡ Ø±Ø§ Ù…ÛŒâ€ŒØ¢ÙˆØ±Ø¯." }] },
          { de: "der Polizist / die Polizistin", fa: "Ù¾لÛŒØ³", article: "der/die", plural: "die Polizisten/innen", examples: [{ de: "Der Polizist hilft den Menschen.", fa: "Ù¾لÛŒØ³ Ø¨Ù‡ Ù…Ø±Ø¯Ù… Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "der VerkÃ¤ufer / die VerkÃ¤uferin", fa: "ÙØ±ÙˆØ´Ù†Ø¯Ù‡", article: "der/die", plural: "die VerkÃ¤ufer/innen", examples: [{ de: "Die VerkÃ¤uferin ist freundlich.", fa: "ÙØ±ÙˆØ´Ù†Ø¯Ù‡ Ù…Ù‡Ø±Ø¨Ø§Ù† Ø§Ø³Øª." }] },
          { de: "der Kaufmann / die Kauffrau", fa: "Ø¨Ø§Ø²Ø±Ú¯Ø§Ù†", article: "der/die", plural: "die Kaufleute", examples: [{ de: "Er ist Kaufmann und reist viel.", fa: "Ø§Ùˆ Ø¨Ø§Ø²Ø±Ú¯Ø§Ù† Ø§Ø³Øª Ùˆ Ø²ÛŒØ§Ø¯ Ø³ÙØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "der Schriftsteller / die Schriftstellerin", fa: "Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡", article: "der/die", plural: "die Schriftsteller/innen", examples: [{ de: "Goethe war ein berÃ¼hmter Schriftsteller.", fa: "Ú¯ÙˆØªÙ‡ Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ù…Ø¹Ø±ÙˆÙÛŒ Ø¨ÙˆØ¯." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Das ist meine Familie. Mein Vater heiÃŸt Thomas und er ist Ingenieur. Meine Mutter heiÃŸt Maria und sie ist Lehrerin. Ich habe einen Bruder. Er heiÃŸt Lukas und er ist Student. Meine Schwester heiÃŸt Anna. Sie ist لrztin. Mein GroÃŸvater wohnt in MÃ¼nchen. Er ist 78 Jahre alt. Meine GroÃŸmutter ist 75 Jahre alt. Sie kocht sehr gut.",
      questions: [
        { question: "Ù¾Ø¯Ø± Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ú†Ù‡ Ù†Ø§Ù… Ø¯Ø§Ø±Ø¯ Ùˆ Ø´ØºلØ´ Ú†ÛŒØ³ØªØŸ", answer: "Ø§Ùˆ ØªÙˆÙ…Ø§Ø³ Ù†Ø§Ù… Ø¯Ø§Ø±Ø¯ Ùˆ Ù…Ù‡Ù†Ø¯Ø³ Ø§Ø³Øª." },
        { question: "Ø®ÙˆØ§Ù‡Ø± Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ú†Ù‡ Ø´ØºلÛŒ Ø¯Ø§Ø±Ø¯ØŸ", answer: "Ø§Ùˆ Ø¯Ú©ØªØ± Ø§Ø³Øª." },
        { question: "Ù¾Ø¯Ø±Ø¨Ø²Ø±Ú¯ Ú©Ø¬Ø§ Ø²Ù†Ø¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", answer: "Ø§Ùˆ Ø¯Ø± Ù…ÙˆÙ†ÛŒØ® Ø²Ù†Ø¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
        { question: "Ú†Ù†Ø¯ Ø³Ø§ل Ø§Ø² Ù¾Ø¯Ø±Ø¨Ø²Ø±Ú¯ Ø¨Ø²Ø±Ú¯ØªØ± Ø§Ø³ØªØŸ", answer: "Ù¾Ø¯Ø±Ø¨Ø²Ø±Ú¯ Û·Û¸ Ø³Ø§ل Ùˆ Ù…Ø§Ø¯Ø±Ø¨Ø²Ø±Ú¯ Û·Ûµ Ø³Ø§ل Ø¯Ø§Ø±Ø¯." }
      ]
    }
  ],
  writing: [
    {
      title: "ØªÙˆØµÛŒÙ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡",
      prompt: "Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯: Ù†Ø§Ù…ØŒ Ø³Ù†ØŒ Ø´Øºل Ùˆ Ø±Ø§Ø¨Ø·Ù‡ Ø¢Ù†Ù‡Ø§ Ø¨Ø§ Ø´Ù…Ø§.",
      steps: [
        { title: "Ù‚Ø¯Ù… Ø§Ùˆل: Ù…Ø¹Ø±ÙÛŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡", text: "Ø¬Ù…لÙ‡ Ø§Ùˆل Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ø±Ø§ Ù…Ø¹Ø±ÙÛŒ Ú©Ù†ÛŒØ¯.", example: { de: "Ich habe eine kleine Familie.", fa: "Ù…Ù† ÛŒÚ© Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ú©ÙˆÚ†Ú© Ø¯Ø§Ø±Ù…." } },
        { title: "Ù‚Ø¯Ù… Ø¯ÙˆÙ…: ØªÙˆØµÛŒÙ Ø§Ø¹Ø¶Ø§", text: "Ù‡Ø± Ø¹Ø¶Ùˆ Ø±Ø§ Ø¨Ø§ Ù†Ø§Ù…ØŒ Ø³Ù† Ùˆ Ø´Øºل ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯.", example: { de: "Mein Vater heiÃŸt Reza. Er ist 50 Jahre alt und Ingenieur.", fa: "Ù¾Ø¯Ø±Ù… Ø±Ø¶Ø§ Ù†Ø§Ù… Ø¯Ø§Ø±Ø¯. Ø§Ùˆ ÛµÛ° Ø³Ø§لÙ‡ Ùˆ Ù…Ù‡Ù†Ø¯Ø³ Ø§Ø³Øª." } },
        { title: "Ù‚Ø¯Ù… Ø³ÙˆÙ…: ØªÙˆØµÛŒÙ Ø±ÙˆØ§Ø¨Ø·", text: "Ø±Ø§Ø¨Ø·Ù‡ Ø¨ÛŒÙ† Ø§Ø¹Ø¶Ø§ Ø±Ø§ ØªÙˆØ¶ÛŒØ­ Ø¯Ù‡ÛŒØ¯.", example: { de: "Meine Eltern sind sehr nett.", fa: "ÙˆØ§لØ¯ÛŒÙ†Ù… Ø®ÛŒلÛŒ Ù…Ù‡Ø±Ø¨Ø§Ù† Ù‡Ø³ØªÙ†Ø¯." } }
      ],
      modelAnswer: "Das ist meine Familie. Mein Vater heiÃŸt Reza. Er ist 50 Jahre alt und arbeitet als Ingenieur. Meine Mutter heiÃŸt Fatima. Sie ist 48 Jahre alt und ist Lehrerin. Ich habe einen Bruder. Er heiÃŸt Ali und ist 22 Jahre alt. Er studiert Medizin. Meine Schwester heiÃŸt Sara. Sie ist 18 Jahre alt und macht Abitur. Mein GroÃŸvater wohnt in Teheran. Er ist 75 Jahre alt. Meine Familie ist sehr wichtig fÃ¼r mich."
    }
  ],
  listening: [
    {
      title: "Ú¯ÙˆØ´ Ø¯Ø§Ø¯Ù† Ø¨Ù‡ Ù…Ø¹Ø±ÙÛŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡",
      source: "Deutsch lernen - Familie",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "Ø¨Ù‡ Ù…Ø¹Ø±ÙÛŒ ÛŒÚ© Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ Ø§Ø·لØ§Ø¹Ø§Øª Ù‡Ø± Ø¹Ø¶Ùˆ (Ù†Ø§Ù…ØŒ Ø³Ù†ØŒ Ø´Øºل) Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
    }
  ],
  speaking: [
    {
      title: "Ù…Ø¹Ø±ÙÛŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡",
      pattern: "Das ist mein/meine [Familienmitglied]. Er/Sie heiÃŸt [Name]. Er/Sie ist [Alter] Jahre alt und ist [Beruf].",
      exercise: "Ø§Ø¹Ø¶Ø§ÛŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Ø§لÚ¯ÙˆÛŒ Ø¨Ø§لØ§ Ù…Ø¹Ø±ÙÛŒ Ú©Ù†ÛŒØ¯."
    }
  ],
  cultureTip: "Ø¯Ø± ÙØ±Ù‡Ù†Ú¯ Ø¢لÙ…Ø§Ù†ÛŒØŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ù‡Ø³ØªÙ‡â€ŒØ§ÛŒ (Ù¾Ø¯Ø±ØŒ Ù…Ø§Ø¯Ø±ØŒ ÙØ±Ø²Ù†Ø¯Ø§Ù†) Ø¨Ø³ÛŒØ§Ø± Ù…Ù‡Ù… Ø§Ø³Øª. Ø¨Ø³ÛŒØ§Ø±ÛŒ Ø§Ø² Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡â€ŒÙ‡Ø§ ÙÙ‚Ø· ÛŒÚ© ÛŒØ§ Ø¯Ùˆ ÙØ±Ø²Ù†Ø¯ Ø¯Ø§Ø±Ù†Ø¯. Ù¾Ø¯Ø±Ø¨Ø²Ø±Ú¯ Ùˆ Ù…Ø§Ø¯Ø±Ø¨Ø²Ø±Ú¯ Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø¬Ø¯Ø§ Ø²Ù†Ø¯Ú¯ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯. Ø¯Ø± Ø¢لÙ…Ø§Ù†ØŒ Ù…Ø§Ø¯Ø±Ø§Ù† Ø§ØºلØ¨ Ù¾Ø§Ø±Ù‡â€ŒÙˆÙ‚Øª Ú©Ø§Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯ ØªØ§ Ø¨ØªÙˆØ§Ù†Ù†Ø¯ Ø§Ø² ÙØ±Ø²Ù†Ø¯Ø§Ù† Ù…Ø±Ø§Ù‚Ø¨Øª Ú©Ù†Ù†Ø¯.",
  examData: {
    questions: [
      { question: "لØ®ÙˆØ§Ù‡Ø±ل Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ Ú†ÛŒØ³ØªØŸ", options: ["die Schwester", "der Bruder", "die Tochter", "die Mutter"], answer: 0 },
      { question: "لÙ…Ù† Ù…Ø¹لÙ… Ù‡Ø³ØªÙ…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich bin Lehrer.", "Ich bin der Lehrer.", "Ich bin ein Lehrer.", "Ich habe Lehrer."], answer: 0 },
      { question: "Ø¬Ù…Ø¹ لder Bruderل Ú†ÛŒØ³ØªØŸ", options: ["die BrÃ¼der", "die Bruders", "die Bruder", "die Bruderen"], answer: 0 },
      { question: "لÙˆØ§لØ¯ÛŒÙ†ل Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:", options: ["die Eltern", "die Kinder", "die Geschwister", "die GroÃŸeltern"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich habe eine Schwester.", "Ich bin eine Schwester.", "Ich ist eine Schwester.", "Ich sein eine Schwester."], answer: 0 },
      { question: "لÙ¾Ø¯Ø±Ø¨Ø²Ø±Ú¯ل Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:", options: ["der GroÃŸvater", "der Vater", "der Onkel", "der Bruder"], answer: 0 },
      { question: "ÙØ¹ل لØ¨ÙˆØ¯Ù†ل Ø¨Ø±Ø§ÛŒ لduل Ú†ÛŒØ³ØªØŸ", options: ["bist", "bin", "ist", "sind"], answer: 0 },
      { question: "لØ§Ùˆ Ø¯Ú©ØªØ± Ø§Ø³Øªل Ú†Ú¯ÙˆÙ†Ù‡ Ú¯ÙØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Er ist Arzt.", "Er hat Arzt.", "Er ist der Arzt.", "Er sein Arzt."], answer: 0 }
    ]
  }
};