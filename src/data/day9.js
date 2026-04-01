export const day9Data = {
  title: "Ø±ÙˆØ² Û¹: Ø­Ø§لØª Ù…ÙØ¹ÙˆلÛŒ (Akkusativ) - ØªØºÛŒÛŒØ± Ø­Ø±ÙˆÙ ØªØ¹Ø±ÛŒÙ",
  objective: "Ø¯Ø± Ø§ÛŒÙ† Ø¯Ø±Ø³ Ø­Ø§لØª Ù…ÙØ¹ÙˆلÛŒ Ø¢لÙ…Ø§Ù†ÛŒ Ø±Ø§ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒØ¯. Ù…ÛŒâ€ŒÙÙ‡Ù…ÛŒØ¯ Ú©Ù‡ Ú†Ú¯ÙˆÙ†Ù‡ Ø­Ø±ÙˆÙ ØªØ¹Ø±ÛŒÙ Ø¯Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ Ù…ÙØ¹Ùˆل Ù…Ø³ØªÙ‚ÛŒÙ… ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯.",
  grammarData: {
    subtitle: "Ø­Ø§لØª Ù…ÙØ¹ÙˆلÛŒ (Akkusativ) Ø¯Ø± Ø²Ø¨Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒ",
    content: [
      {
        type: "text",
        title: "Ú†Ø±Ø§ Ø­Ø§لØªâ€ŒÙ‡Ø§ÛŒ Ø¯Ø³ØªÙˆØ±ÛŒ Ù…Ù‡Ù… Ù‡Ø³ØªÙ†Ø¯ØŸ",
        text: "Ø¯Ø± Ø²Ø¨Ø§Ù† Ø¢لÙ…Ø§Ù†ÛŒØŒ Ø­Ø±Ù ØªØ¹Ø±ÛŒÙ Ùˆ Ø¶Ù…ÛŒØ± Ø¨Ø± Ø§Ø³Ø§Ø³ Ù†Ù‚Ø´ Ø¢Ù†Ù‡Ø§ Ø¯Ø± Ø¬Ù…لÙ‡ ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯. ÙØ§Ø¹ل (Ú©Ø³ÛŒ Ú©Ù‡ Ú©Ø§Ø± Ø±Ø§ Ø§Ù†Ø¬Ø§Ù… Ù…ÛŒâ€ŒØ¯Ù‡Ø¯) Ø¯Ø± Ø­Ø§لØª Nominativ Ø§Ø³Øª. Ù…ÙØ¹Ùˆل Ù…Ø³ØªÙ‚ÛŒÙ… (Ú©Ø³ÛŒ/Ú†ÛŒØ²ÛŒ Ú©Ù‡ Ú©Ø§Ø± Ø±ÙˆÛŒ Ø¢Ù† Ø§Ù†Ø¬Ø§Ù… Ù…ÛŒâ€ŒØ´ÙˆØ¯) Ø¯Ø± Ø­Ø§لØª Akkusativ Ù‚Ø±Ø§Ø± Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯.\n\nÙ…Ø«Ø§ل: Der Mann sieht die Frau.\nâ€¢ Der Mann = ÙØ§Ø¹ل (Nominativ) - Ú©Ø³ÛŒ Ú©Ù‡ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ø¯\nâ€¢ die Frau = Ù…ÙØ¹Ùˆل Ù…Ø³ØªÙ‚ÛŒÙ… (Akkusativ) - Ú©Ø³ÛŒ Ú©Ù‡ Ø¯ÛŒØ¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯"
      },
      {
        type: "text",
        title: "ØªØºÛŒÛŒØ±Ø§Øª Ø­Ø±Ù ØªØ¹Ø±ÛŒÙ Ø¯Ø± Akkusativ",
        text: "Ø¯Ø± Akkusativ ÙÙ‚Ø· Ø­Ø±Ù ØªØ¹Ø±ÛŒÙ Ù…Ø°Ú©Ø± ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯!\n\nâ€¢ der (Ù…Ø°Ú©Ø±) â†’ den\nâ€¢ die (Ù…Ø¤Ù†Ø«) â†’ die (Ø¨Ø¯ÙˆÙ† ØªØºÛŒÛŒØ±)\nâ€¢ das (Ø®Ù†Ø«ÛŒ) â†’ das (Ø¨Ø¯ÙˆÙ† ØªØºÛŒÛŒØ±)\nâ€¢ die (Ø¬Ù…Ø¹) â†’ die (Ø¨Ø¯ÙˆÙ† ØªØºÛŒÛŒØ±)\n\nÙ…Ø«Ø§ل:\nâ€¢ Ich sehe den Mann. (Ù…Ù† Ù…Ø±Ø¯ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù….)\nâ€¢ Ich sehe die Frau. (Ù…Ù† Ø²Ù† Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù….)\nâ€¢ Ich sehe das Kind. (Ù…Ù† Ø¨Ú†Ù‡ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù….)\nâ€¢ Ich sehe die Kinder. (Ù…Ù† Ø¨Ú†Ù‡â€ŒÙ‡Ø§ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù….)"
      },
      {
        type: "table",
        title: "Ø­Ø±ÙˆÙ ØªØ¹Ø±ÛŒÙ Ù…Ø¹ÛŒÙ†: Nominativ vs Akkusativ",
        rows: [
          { de: "Ù…Ø°Ú©Ø±: der â†’ den", fa: "Der Mann sieht den Film. (Ù…Ø±Ø¯ ÙÛŒلÙ… Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ø¯.)" },
          { de: "Ù…Ø¤Ù†Ø«: die â†’ die", fa: "Die Frau liest die Zeitung. (Ø²Ù† Ø±ÙˆØ²Ù†Ø§Ù…Ù‡ Ø±Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù†Ø¯.)" },
          { de: "Ø®Ù†Ø«ÛŒ: das â†’ das", fa: "Das Kind hat das Buch. (Ø¨Ú†Ù‡ Ú©ØªØ§Ø¨ Ø±Ø§ Ø¯Ø§Ø±Ø¯.)" },
          { de: "Ø¬Ù…Ø¹: die â†’ die", fa: "Die SchÃ¼ler lernen die WÃ¶rter. (Ø¯Ø§Ù†Ø´â€ŒØ¢Ù…ÙˆØ²Ø§Ù† Ú©لÙ…Ø§Øª Ø±Ø§ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯.)" }
        ]
      },
      {
        type: "text",
        title: "Ø­Ø±ÙˆÙ ØªØ¹Ø±ÛŒÙ Ù†Ø§Ù…Ø¹ÛŒÙ† Ø¯Ø± Akkusativ",
        text: "Ø­Ø±ÙˆÙ ØªØ¹Ø±ÛŒÙ Ù†Ø§Ù…Ø¹ÛŒÙ† Ù‡Ù… ÙÙ‚Ø· Ø¯Ø± Ù…Ø°Ú©Ø± ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯:\n\nâ€¢ ein â†’ einen\nâ€¢ eine â†’ eine (Ø¨Ø¯ÙˆÙ† ØªØºÛŒÛŒØ±)\nâ€¢ ein â†’ ein (Ø¨Ø¯ÙˆÙ† ØªØºÛŒÛŒØ±)\n\nÙ…Ø«Ø§ل:\nâ€¢ Ich kaufe einen Computer. (Ù…Ù† ÛŒÚ© Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ± Ù…ÛŒâ€ŒØ®Ø±Ù….)\nâ€¢ Ich kaufe eine Lampe. (Ù…Ù† ÛŒÚ© لØ§Ù…Ù¾ Ù…ÛŒâ€ŒØ®Ø±Ù….)\nâ€¢ Ich kaufe ein Buch. (Ù…Ù† ÛŒÚ© Ú©ØªØ§Ø¨ Ù…ÛŒâ€ŒØ®Ø±Ù….)\n\nÙ†Ú©ØªÙ‡: ÙÙ‚Ø· Ù…Ø°Ú©Ø± ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯: ein â†’ einen!"
      },
      {
        type: "table",
        title: "Ø­Ø±ÙˆÙ ØªØ¹Ø±ÛŒÙ Ù†Ø§Ù…Ø¹ÛŒÙ†: Nominativ vs Akkusativ",
        rows: [
          { de: "Ù…Ø°Ú©Ø±: ein â†’ einen", fa: "Ich habe einen Hund. (Ù…Ù† ÛŒÚ© Ø³Ú¯ Ø¯Ø§Ø±Ù….)" },
          { de: "Ù…Ø¤Ù†Ø«: eine â†’ eine", fa: "Ich habe eine Katze. (Ù…Ù† ÛŒÚ© Ú¯Ø±Ø¨Ù‡ Ø¯Ø§Ø±Ù….)" },
          { de: "Ø®Ù†Ø«ÛŒ: ein â†’ ein", fa: "Ich habe ein Zimmer. (Ù…Ù† ÛŒÚ© Ø§ØªØ§Ù‚ Ø¯Ø§Ø±Ù….)" }
        ]
      },
      {
        type: "text",
        title: "Ø¶Ù…Ø§ÛŒØ± Ø´Ø®ØµÛŒ Ø¯Ø± Akkusativ",
        text: "Ø¶Ù…Ø§ÛŒØ± Ø´Ø®ØµÛŒ Ù‡Ù… Ø¯Ø± Akkusativ ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯:\n\nâ€¢ ich â†’ mich: Er sieht mich. (Ø§Ùˆ Ù…Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ø¯.)\nâ€¢ du â†’ dich: Ich liebe dich. (Ù…Ù† ØªÙˆ Ø±Ø§ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù….)\nâ€¢ er â†’ ihn: Ich kenne ihn. (Ù…Ù† Ø§Ùˆ Ø±Ø§ Ù…ÛŒâ€ŒØ´Ù†Ø§Ø³Ù….)\nâ€¢ sie â†’ sie: Ich helfe ihr. (Ù…Ù† Ø¨Ù‡ Ø§Ùˆ Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ù….)\nâ€¢ es â†’ es: Ich sehe es. (Ù…Ù† Ø¢Ù† Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù….)\nâ€¢ wir â†’ uns: Er hilft uns. (Ø§Ùˆ Ø¨Ù‡ Ù…Ø§ Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ø¯.)\nâ€¢ ihr â†’ euch: Ich kenne euch. (Ù…Ù† Ø´Ù…Ø§ Ø±Ø§ Ù…ÛŒâ€ŒØ´Ù†Ø§Ø³Ù….)\nâ€¢ sie â†’ sie: Ich sehe sie. (Ù…Ù† Ø¢Ù†Ù‡Ø§ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù….)\nâ€¢ Sie â†’ Sie: Ich helfe Ihnen. (Ù…Ù† Ø¨Ù‡ Ø´Ù…Ø§ Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ù….)"
      },
      {
        type: "text",
        title: "Ø§ÙØ¹Ø§لÛŒ Ú©Ù‡ Akkusativ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯",
        text: "Ø§ÛŒÙ† ÙØ¹لâ€ŒÙ‡Ø§ Ù…ÙØ¹Ùˆل Ù…Ø³ØªÙ‚ÛŒÙ… (Akkusativ) Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯:\n\nâ€¢ sehen (Ø¯ÛŒØ¯Ù†): Ich sehe den Mann.\nâ€¢ lesen (Ø®ÙˆØ§Ù†Ø¯Ù†): Sie liest das Buch.\nâ€¢ haben (Ø¯Ø§Ø´ØªÙ†): Ich habe einen Bruder.\nâ€¢ kaufen (Ø®Ø±ÛŒØ¯Ù†): Er kauft das Auto.\nâ€¢ essen (Ø®ÙˆØ±Ø¯Ù†): Wir essen den Kuchen.\nâ€¢ trinken (Ù†ÙˆØ´ÛŒØ¯Ù†): Sie trinkt den Kaffee.\nâ€¢ machen (Ø§Ù†Ø¬Ø§Ù… Ø¯Ø§Ø¯Ù†): Ich mache die Hausaufgaben.\nâ€¢ lieben (Ø¯ÙˆØ³Øª Ø¯Ø§Ø´ØªÙ†): Ich liebe dich.\nâ€¢ kennen (Ø´Ù†Ø§Ø®ØªÙ†): Er kennt sie.\nâ€¢ brauchen (Ù†ÛŒØ§Ø² Ø¯Ø§Ø´ØªÙ†): Ich brauche Hilfe.\nâ€¢ suchen (Ø¬Ø³ØªØ¬Ùˆ Ú©Ø±Ø¯Ù†): Ich suche den SchlÃ¼ssel.\nâ€¢ finden (Ù¾ÛŒØ¯Ø§ Ú©Ø±Ø¯Ù†): Ich finde das Buch."
      },
      {
        type: "text",
        title: "Ø´Ù†Ø§Ø³Ø§ÛŒÛŒ Akkusativ Ø¯Ø± Ø¬Ù…لÙ‡",
        text: "Ø³Ø¤Ø§ل Â«Ú†Ù‡ Ú©Ø³ÛŒ/Ú†Ù‡ Ú†ÛŒØ²ÛŒ Ø±Ø§ØŸÂ» (Wen/Was?) Ø±Ø§ Ø§Ø² ÙØ¹ل Ø¨Ù¾Ø±Ø³ÛŒØ¯:\n\nIch kaufe den Computer. (Ù…Ù† Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ± Ø±Ø§ Ù…ÛŒâ€ŒØ®Ø±Ù….)\nØ³Ø¤Ø§ل: Was kaufe ich? â†’ den Computer (Akkusativ!)\n\nEr sieht die Frau. (Ø§Ùˆ Ø²Ù† Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ø¯.)\nØ³Ø¤Ø§ل: Wen sieht er? â†’ die Frau (Akkusativ!)\n\nSie trinkt den Kaffee. (Ø§Ùˆ Ù‚Ù‡ÙˆÙ‡ Ø±Ø§ Ù…ÛŒâ€ŒÙ†ÙˆØ´Ø¯.)\nØ³Ø¤Ø§ل: Was trinkt sie? â†’ den Kaffee (Akkusativ!)\n\nÙ‚Ø§Ø¹Ø¯Ù‡: Ø§Ú¯Ø± Ø¬ÙˆØ§Ø¨ Ø³Ø¤Ø§ل Â«Ú†Ù‡ Ú©Ø³ÛŒ/Ú†Ù‡ Ú†ÛŒØ²ÛŒ Ø±Ø§ØŸÂ» Ø§Ø³Ù…ÛŒ Ø¨Ø§Ø´Ø¯ØŒ Ø¢Ù† Ø§Ø³Ù… Akkusativ Ø§Ø³Øª."
      },
      {
        type: "alert",
        title: "âš ï¸ Ù†Ú©Ø§Øª Ù…Ù‡Ù… Akkusativ",
        text: "Û±. ÙÙ‚Ø· Ø­Ø±Ù ØªØ¹Ø±ÛŒÙ Ù…Ø°Ú©Ø± ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯! die Ùˆ das Ø¨Ø¯ÙˆÙ† ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÙ…Ø§Ù†Ù†Ø¯.\n\nÛ². ÙØ¹لâ€ŒÙ‡Ø§ÛŒ seinØŒ bleibenØŒ werden Akkusativ Ù†Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯ØŒ Ø¨لÚ©Ù‡ Nominativ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯:\n   Ich bin ein Mann. (Ù†Ù‡: Ich bin einen Mann.)\n\nÛ³. Ø¨Ø¹Ø¶ÛŒ ÙØ¹لâ€ŒÙ‡Ø§ Dativ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯ Ù†Ù‡ Akkusativ:\n   helfen (Ú©Ù…Ú© Ú©Ø±Ø¯Ù†): Ich helfe ihm. (Dativ)\n   danken (ØªØ´Ú©Ø± Ú©Ø±Ø¯Ù†): Ich danke dir. (Dativ)\n\nÛ´. Ø¶Ù…ÛŒØ± Ù…لÚ©ÛŒ Ù‡Ù… Ø¯Ø± Akkusativ ÙÙ‚Ø· Ø¯Ø± Ù…Ø°Ú©Ø± ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯:\n   meinen BruderØŒ meine SchwesterØŒ mein Kind\n\nÛµ. Ø¯Ø± Ø¬Ù…لØ§Øª Ø¨Ø§ Akkusativ Ùˆ DativØŒ Akkusativ Ù‚Ø¨ل Ø§Ø² Dativ Ù…ÛŒâ€ŒØ¢ÛŒØ¯ (Ù…Ø¹Ù…ÙˆلØ§Ù‹):\n   Ich gebe dem Mann den Brief. (Ù…Ù† Ù†Ø§Ù…Ù‡ Ø±Ø§ Ø¨Ù‡ Ù…Ø±Ø¯ Ù…ÛŒâ€ŒØ¯Ù‡Ù….)"
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§لâ€ŒÙ‡Ø§ÛŒ ÙØ±Ø§ÙˆØ§Ù† Ø¨Ø§ Akkusativ",
        items: [
          { de: "Ich sehe den Mann.", fa: "Ù…Ù† Ù…Ø±Ø¯ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…." },
          { de: "Er kauft das Auto.", fa: "Ø§Ùˆ Ù…Ø§Ø´ÛŒÙ† Ø±Ø§ Ù…ÛŒâ€ŒØ®Ø±Ø¯." },
          { de: "Sie liest die Zeitung.", fa: "Ø§Ùˆ Ø±ÙˆØ²Ù†Ø§Ù…Ù‡ Ø±Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù†Ø¯." },
          { de: "Wir essen den Kuchen.", fa: "Ù…Ø§ Ú©ÛŒÚ© Ø±Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ±ÛŒÙ…." },
          { de: "Ich liebe dich.", fa: "Ù…Ù† ØªÙˆ Ø±Ø§ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù…." },
          { de: "Er kennt meinen Bruder.", fa: "Ø§Ùˆ Ø¨Ø±Ø§Ø¯Ø± Ù…Ù† Ø±Ø§ Ù…ÛŒâ€ŒØ´Ù†Ø§Ø³Ø¯." },
          { de: "Sie trinkt den Tee.", fa: "Ø§Ùˆ Ú†Ø§ÛŒ Ø±Ø§ Ù…ÛŒâ€ŒÙ†ÙˆØ´Ø¯." },
          { de: "Ich brauche eine Lampe.", fa: "Ù…Ù† ÛŒÚ© لØ§Ù…Ù¾ Ù†ÛŒØ§Ø² Ø¯Ø§Ø±Ù…." },
          { de: "Er sucht seinen SchlÃ¼ssel.", fa: "Ø§Ùˆ Ú©لÛŒØ¯Ø´ Ø±Ø§ Ø¬Ø³ØªØ¬Ùˆ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
          { de: "Ich finde das Buch interessant.", fa: "Ù…Ù† Ú©ØªØ§Ø¨ Ø±Ø§ Ø¬Ø§لØ¨ Ù…ÛŒâ€ŒØ¯Ø§Ù†Ù…." },
          { de: "Sie macht die Hausaufgaben.", fa: "Ø§Ùˆ ØªÚ©Ø§لÛŒÙ Ø±Ø§ Ø§Ù†Ø¬Ø§Ù… Ù…ÛŒâ€ŒØ¯Ù‡Ø¯." },
          { de: "Wir lernen die neuen WÃ¶rter.", fa: "Ù…Ø§ Ú©لÙ…Ø§Øª Ø¬Ø¯ÛŒØ¯ Ø±Ø§ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒÙ…." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ† ØªØ¹Ø§Ù…لÛŒ: Akkusativ",
        questions: [
          {
            question: "Â«Ù…Ù† Ù…Ø±Ø¯ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…Â» Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Â«Ù…Ù† Ù…Ø±Ø¯ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…Â» auf Deutsch?",
            options: [
              { text: "Ich sehe der Mann.", isCorrect: false },
              { text: "Ich sehe den Mann.", isCorrect: true },
              { text: "Ich sehe das Mann.", isCorrect: false },
              { text: "Ich sehe die Mann.", isCorrect: false }
            ],
            explanation: "Ú†ÙˆÙ† Â«MannÂ» Ù…ÙØ¹Ùˆل Ù…Ø³ØªÙ‚ÛŒÙ… (Akkusativ) Ø§Ø³Øª Ùˆ Ù…Ø°Ú©Ø± Ø§Ø³ØªØŒ der â†’ den ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯."
          },
          {
            question: "Â«Ù…Ù† ÛŒÚ© Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ± Ù…ÛŒâ€ŒØ®Ø±Ù…Â» Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Â«Ù…Ù† ÛŒÚ© Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ± Ù…ÛŒâ€ŒØ®Ø±Ù…Â» auf Deutsch?",
            options: [
              { text: "Ich kaufe ein Computer.", isCorrect: false },
              { text: "Ich kaufe einen Computer.", isCorrect: true },
              { text: "Ich kaufe eine Computer.", isCorrect: false },
              { text: "Ich kaufe der Computer.", isCorrect: false }
            ],
            explanation: "Computer Ù…Ø°Ú©Ø± Ø§Ø³Øª (der Computer). Ø¯Ø± AkkusativØŒ ein â†’ einen ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯."
          },
          {
            question: "Â«Ù…Ù† ÛŒÚ© لØ§Ù…Ù¾ Ù†ÛŒØ§Ø² Ø¯Ø§Ø±Ù…Â» Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Â«Ù…Ù† ÛŒÚ© لØ§Ù…Ù¾ Ù†ÛŒØ§Ø² Ø¯Ø§Ø±Ù…Â» auf Deutsch?",
            options: [
              { text: "Ich brauche ein Lampe.", isCorrect: false },
              { text: "Ich brauche eine Lampe.", isCorrect: true },
              { text: "Ich brauche einen Lampe.", isCorrect: false },
              { text: "Ich brauche der Lampe.", isCorrect: false }
            ],
            explanation: "Lampe Ù…Ø¤Ù†Ø« Ø§Ø³Øª (die Lampe). Ø¯Ø± Akkusativ Ù…Ø¤Ù†Ø«ØŒ ØªØºÛŒÛŒØ±ÛŒ Ù†Ù…ÛŒâ€ŒÚ©Ù†Ø¯: eine â†’ eine."
          },
          {
            question: "Ø¶Ù…ÛŒØ± Â«duÂ» Ø¯Ø± Akkusativ Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie wird Â«duÂ» im Akkusativ?",
            options: [
              { text: "dir", isCorrect: false },
              { text: "dich", isCorrect: true },
              { text: "du", isCorrect: false },
              { text: "deiner", isCorrect: false }
            ],
            explanation: "Ø¶Ù…ÛŒØ± du Ø¯Ø± Akkusativ Ø¨Ù‡ dich ØªØ¨Ø¯ÛŒل Ù…ÛŒâ€ŒØ´ÙˆØ¯: Ich liebe dich. (Ù…Ù† ØªÙˆ Ø±Ø§ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù….)"
          },
          {
            question: "Ú©Ø¯Ø§Ù… ÙØ¹ل Akkusativ Ù†Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ØŸ",
            questionDe: "Welches Verb nimmt KEIN Akkusativ?",
            options: [
              { text: "sehen (Ø¯ÛŒØ¯Ù†)", isCorrect: false },
              { text: "kaufen (Ø®Ø±ÛŒØ¯Ù†)", isCorrect: false },
              { text: "sein (Ø¨ÙˆØ¯Ù†)", isCorrect: true },
              { text: "lesen (Ø®ÙˆØ§Ù†Ø¯Ù†)", isCorrect: false }
            ],
            explanation: "ÙØ¹ل seinØŒ Ù…Ú©Ù…ل Ø§Ø³Ù…ÛŒ Ø¯Ø± Nominativ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ Ù†Ù‡ Akkusativ: Ich bin ein Mann. (Ù†Ù‡ einen Mann)"
          }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "Ø­Ø±ÙˆÙ ØªØ¹Ø±ÛŒÙ Ø¯Ø± Akkusativ",
        words: [
          { de: "der â†’ den (Ù…Ø°Ú©Ø±)", fa: "ØªØºÛŒÛŒØ± Ø¯Ø± Akkusativ", article: "-", plural: "-", examples: [{ de: "Ich sehe den Mann.", fa: "Ù…Ù† Ù…Ø±Ø¯ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…." }, { de: "Er kauft den Computer.", fa: "Ø§Ùˆ Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ± Ø±Ø§ Ù…ÛŒâ€ŒØ®Ø±Ø¯." }] },
          { de: "die â†’ die (Ù…Ø¤Ù†Ø«)", fa: "Ø¨Ø¯ÙˆÙ† ØªØºÛŒÛŒØ±", article: "-", plural: "-", examples: [{ de: "Sie liest die Zeitung.", fa: "Ø§Ùˆ Ø±ÙˆØ²Ù†Ø§Ù…Ù‡ Ø±Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù†Ø¯." }, { de: "Ich habe die Lampe.", fa: "Ù…Ù† لØ§Ù…Ù¾ Ø±Ø§ Ø¯Ø§Ø±Ù…." }] },
          { de: "das â†’ das (Ø®Ù†Ø«ÛŒ)", fa: "Ø¨Ø¯ÙˆÙ† ØªØºÛŒÛŒØ±", article: "-", plural: "-", examples: [{ de: "Das Kind hat das Buch.", fa: "Ø¨Ú†Ù‡ Ú©ØªØ§Ø¨ Ø±Ø§ Ø¯Ø§Ø±Ø¯." }, { de: "Ich sehe das MÃ¤dchen.", fa: "Ù…Ù† Ø¯Ø®ØªØ± Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…." }] },
          { de: "die â†’ die (Ø¬Ù…Ø¹)", fa: "Ø¨Ø¯ÙˆÙ† ØªØºÛŒÛŒØ±", article: "-", plural: "-", examples: [{ de: "Ich sehe die Kinder.", fa: "Ù…Ù† Ø¨Ú†Ù‡â€ŒÙ‡Ø§ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…." }] },
          { de: "ein â†’ einen (Ù…Ø°Ú©Ø±)", fa: "ØªØºÛŒÛŒØ± Ø¯Ø± Akkusativ", article: "-", plural: "-", examples: [{ de: "Ich kaufe einen Hund.", fa: "Ù…Ù† ÛŒÚ© Ø³Ú¯ Ù…ÛŒâ€ŒØ®Ø±Ù…." }, { de: "Er hat einen Bruder.", fa: "Ø§Ùˆ ÛŒÚ© Ø¨Ø±Ø§Ø¯Ø± Ø¯Ø§Ø±Ø¯." }] },
          { de: "eine â†’ eine (Ù…Ø¤Ù†Ø«)", fa: "Ø¨Ø¯ÙˆÙ† ØªØºÛŒÛŒØ±", article: "-", plural: "-", examples: [{ de: "Ich habe eine Katze.", fa: "Ù…Ù† ÛŒÚ© Ú¯Ø±Ø¨Ù‡ Ø¯Ø§Ø±Ù…." }, { de: "Sie kauft eine Lampe.", fa: "Ø§Ùˆ ÛŒÚ© لØ§Ù…Ù¾ Ù…ÛŒâ€ŒØ®Ø±Ø¯." }] }
        ]
      },
      {
        title: "Ø¶Ù…Ø§ÛŒØ± Ø´Ø®ØµÛŒ Ø¯Ø± Akkusativ",
        words: [
          { de: "ich â†’ mich", fa: "Ù…Ù† â†’ Ù…Ø±Ø§", article: "-", plural: "-", examples: [{ de: "Er sieht mich.", fa: "Ø§Ùˆ Ù…Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ø¯." }, { de: "Sie liebt mich.", fa: "Ø§Ùˆ Ù…Ø±Ø§ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ø¯." }] },
          { de: "du â†’ dich", fa: "ØªÙˆ â†’ ØªÙˆ Ø±Ø§", article: "-", plural: "-", examples: [{ de: "Ich liebe dich.", fa: "Ù…Ù† ØªÙˆ Ø±Ø§ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù…." }, { de: "Ich sehe dich.", fa: "Ù…Ù† ØªÙˆ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…." }] },
          { de: "er â†’ ihn", fa: "Ø§Ùˆ (Ù…Ø°Ú©Ø±) â†’ Ø§Ùˆ Ø±Ø§", article: "-", plural: "-", examples: [{ de: "Ich kenne ihn.", fa: "Ù…Ù† Ø§Ùˆ Ø±Ø§ Ù…ÛŒâ€ŒØ´Ù†Ø§Ø³Ù…." }, { de: "Wir besuchen ihn.", fa: "Ù…Ø§ Ø§Ø² Ø§Ùˆ Ø¯ÛŒØ¯Ù† Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…." }] },
          { de: "sie â†’ sie", fa: "Ø§Ùˆ (Ù…Ø¤Ù†Ø«) â†’ Ø§Ùˆ Ø±Ø§", article: "-", plural: "-", examples: [{ de: "Er liebt sie.", fa: "Ø§Ùˆ Ø§Ùˆ Ø±Ø§ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ø¯." }, { de: "Ich helfe ihr.", fa: "Ù…Ù† Ø¨Ù‡ Ø§Ùˆ Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ù…." }] },
          { de: "wir â†’ uns", fa: "Ù…Ø§ â†’ Ù…Ø§ Ø±Ø§", article: "-", plural: "-", examples: [{ de: "Er hilft uns.", fa: "Ø§Ùˆ Ø¨Ù‡ Ù…Ø§ Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }, { de: "Sie sehen uns.", fa: "Ø¢Ù†Ù‡Ø§ Ù…Ø§ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù†Ø¯." }] },
          { de: "ihr â†’ euch", fa: "Ø´Ù…Ø§ (Ù…Ø­Ø§ÙˆØ±Ù‡â€ŒØ§ÛŒ) â†’ Ø´Ù…Ø§ Ø±Ø§", article: "-", plural: "-", examples: [{ de: "Ich kenne euch.", fa: "Ù…Ù† Ø´Ù…Ø§ Ø±Ø§ Ù…ÛŒâ€ŒØ´Ù†Ø§Ø³Ù…." }] },
          { de: "sie â†’ sie", fa: "Ø¢Ù†Ù‡Ø§ â†’ Ø¢Ù†Ù‡Ø§ Ø±Ø§", article: "-", plural: "-", examples: [{ de: "Ich sehe sie.", fa: "Ù…Ù† Ø¢Ù†Ù‡Ø§ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…." }] }
        ]
      },
      {
        title: "ÙØ¹لâ€ŒÙ‡Ø§ÛŒÛŒ Ú©Ù‡ Akkusativ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯",
        words: [
          { de: "sehen (Ø¯ÛŒØ¯Ù†)", fa: "Ich sehe...", article: "-", plural: "-", examples: [{ de: "Ich sehe den Film.", fa: "Ù…Ù† ÙÛŒلÙ… Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…." }, { de: "Siehst du den Mann?", fa: "Ø¢ÛŒØ§ Ù…Ø±Ø¯ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†ÛŒØŸ" }] },
          { de: "lesen (Ø®ÙˆØ§Ù†Ø¯Ù†)", fa: "Ich lese...", article: "-", plural: "-", examples: [{ de: "Ich lese das Buch.", fa: "Ù…Ù† Ú©ØªØ§Ø¨ Ø±Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù†Ù…." }, { de: "Sie liest die Zeitung.", fa: "Ø§Ùˆ Ø±ÙˆØ²Ù†Ø§Ù…Ù‡ Ø±Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù†Ø¯." }] },
          { de: "kaufen (Ø®Ø±ÛŒØ¯Ù†)", fa: "Ich kaufe...", article: "-", plural: "-", examples: [{ de: "Ich kaufe den Computer.", fa: "Ù…Ù† Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ± Ø±Ø§ Ù…ÛŒâ€ŒØ®Ø±Ù…." }, { de: "Er kauft ein Auto.", fa: "Ø§Ùˆ ÛŒÚ© Ù…Ø§Ø´ÛŒÙ† Ù…ÛŒâ€ŒØ®Ø±Ø¯." }] },
          { de: "essen (Ø®ÙˆØ±Ø¯Ù†)", fa: "Ich esse...", article: "-", plural: "-", examples: [{ de: "Wir essen den Kuchen.", fa: "Ù…Ø§ Ú©ÛŒÚ© Ø±Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ±ÛŒÙ…." }, { de: "Er isst einen Apfel.", fa: "Ø§Ùˆ ÛŒÚ© Ø³ÛŒØ¨ Ù…ÛŒâ€ŒØ®ÙˆØ±Ø¯." }] },
          { de: "trinken (Ù†ÙˆØ´ÛŒØ¯Ù†)", fa: "Ich trinke...", article: "-", plural: "-", examples: [{ de: "Ich trinke den Kaffee.", fa: "Ù…Ù† Ù‚Ù‡ÙˆÙ‡ Ø±Ø§ Ù…ÛŒâ€ŒÙ†ÙˆØ´Ù…." }, { de: "Sie trinkt Wasser.", fa: "Ø§Ùˆ Ø¢Ø¨ Ù…ÛŒâ€ŒÙ†ÙˆØ´Ø¯." }] },
          { de: "lieben (Ø¯ÙˆØ³Øª Ø¯Ø§Ø´ØªÙ†)", fa: "Ich liebe...", article: "-", plural: "-", examples: [{ de: "Ich liebe dich.", fa: "Ù…Ù† ØªÙˆ Ø±Ø§ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù…." }, { de: "Er liebt seine Frau.", fa: "Ø§Ùˆ Ø²Ù†Ø´ Ø±Ø§ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ø¯." }] },
          { de: "kennen (Ø´Ù†Ø§Ø®ØªÙ†)", fa: "Ich kenne...", article: "-", plural: "-", examples: [{ de: "Ich kenne ihn.", fa: "Ù…Ù† Ø§Ùˆ Ø±Ø§ Ù…ÛŒâ€ŒØ´Ù†Ø§Ø³Ù…." }, { de: "Kennst du das Restaurant?", fa: "Ø¢ÛŒØ§ Ø±Ø³ØªÙˆØ±Ø§Ù† Ø±Ø§ Ù…ÛŒâ€ŒØ´Ù†Ø§Ø³ÛŒØŸ" }] },
          { de: "brauchen (Ù†ÛŒØ§Ø² Ø¯Ø§Ø´ØªÙ†)", fa: "Ich brauche...", article: "-", plural: "-", examples: [{ de: "Ich brauche Hilfe.", fa: "Ù…Ù† Ú©Ù…Ú© Ù†ÛŒØ§Ø² Ø¯Ø§Ø±Ù…." }, { de: "Brauchst du das Buch?", fa: "Ø¢ÛŒØ§ Ú©ØªØ§Ø¨ Ø±Ø§ Ù†ÛŒØ§Ø² Ø¯Ø§Ø±ÛŒØŸ" }] },
          { de: "suchen (Ø¬Ø³ØªØ¬Ùˆ Ú©Ø±Ø¯Ù†)", fa: "Ich suche...", article: "-", plural: "-", examples: [{ de: "Ich suche den SchlÃ¼ssel.", fa: "Ù…Ù† Ú©لÛŒØ¯ Ø±Ø§ Ø¬Ø³ØªØ¬Ùˆ Ù…ÛŒâ€ŒÚ©Ù†Ù…." }, { de: "Sie sucht ihre Tasche.", fa: "Ø§Ùˆ Ú©ÛŒÙØ´ Ø±Ø§ Ø¬Ø³ØªØ¬Ùˆ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Der Geburtstag\n\nHeute hat Lisa Geburtstag. Sie wird fÃ¼nfundzwanzig Jahre alt. Ihre Freunde kommen zur Party. Anna bringt einen groÃŸen Kuchen mit. Thomas bringt die Blumen fÃ¼r Lisa. Peter kauft ein Geschenk.\n\nLisa sieht die GÃ¤ste und freut sich sehr. Sie kennt alle Freunde. Sie trinkt den Saft und isst den Kuchen. Am Ende singen alle: Â«Happy BirthdayÂ». Lisa liebt ihre Freunde.",
      questions: [
        { question: "لÛŒØ²Ø§ Ø§Ù…Ø±ÙˆØ² Ú†Ù†Ø¯ Ø³Ø§لÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", answer: "Ø¨ÛŒØ³Øª Ùˆ Ù¾Ù†Ø¬ Ø³Ø§لÙ‡ (fÃ¼nfundzwanzig Jahre alt)." },
        { question: "Ø¢Ù†Ø§ Ú†Ù‡ Ú†ÛŒØ²ÛŒ Ø¨Ø§ Ø®ÙˆØ¯ Ù…ÛŒâ€ŒØ¢ÙˆØ±Ø¯ØŸ", answer: "ÛŒÚ© Ú©ÛŒÚ© Ø¨Ø²Ø±Ú¯ (einen groÃŸen Kuchen)." },
        { question: "Ù¾ÛŒØªØ± Ú†Ù‡ Ú†ÛŒØ²ÛŒ Ù…ÛŒâ€ŒØ®Ø±Ø¯ØŸ", answer: "ÛŒÚ© Ù‡Ø¯ÛŒÙ‡ (ein Geschenk)." },
        { question: "لÛŒØ²Ø§ Ú†Ù‡ Ú†ÛŒØ²ÛŒ Ù…ÛŒâ€ŒÙ†ÙˆØ´Ø¯ØŸ", answer: "Ø¢Ø¨Ù…ÛŒÙˆÙ‡ (den Saft)." }
      ]
    }
  ],
  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† Ø¬Ù…لØ§Øª Ø¨Ø§ Akkusativ",
      prompt: "Û±Û° Ø¬Ù…لÙ‡ Ø¨Ø§ Ù…ÙØ¹Ùˆل Ù…Ø³ØªÙ‚ÛŒÙ… (Akkusativ) Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.",
      steps: [
        { title: "Ù…Ø±Ø­لÙ‡ Û±: Ø´Ù†Ø§Ø³Ø§ÛŒÛŒ ÙØ¹ل", text: "ÙØ¹لâ€ŒÙ‡Ø§ÛŒÛŒ Ú©Ù‡ Akkusativ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ù†ÛŒØ¯", example: { de: "sehen, kaufen, essen, trinken, lesen", fa: "Ø¯ÛŒØ¯Ù†ØŒ Ø®Ø±ÛŒØ¯Ù†ØŒ Ø®ÙˆØ±Ø¯Ù†ØŒ Ù†ÙˆØ´ÛŒØ¯Ù†ØŒ Ø®ÙˆØ§Ù†Ø¯Ù†" } },
        { title: "Ù…Ø±Ø­لÙ‡ Û²: ØªØºÛŒÛŒØ± Ø­Ø±Ù ØªØ¹Ø±ÛŒÙ", text: "Ø§Ú¯Ø± Ù…ÙØ¹Ùˆل Ù…Ø°Ú©Ø± Ø§Ø³ØªØŒ der â†’ den Ùˆ ein â†’ einen", example: { de: "der Mann â†’ den Mann, ein Hund â†’ einen Hund", fa: "Ù…Ø±Ø¯ â†’ Ù…Ø±Ø¯ Ø±Ø§ØŒ ÛŒÚ© Ø³Ú¯ â†’ ÛŒÚ© Ø³Ú¯ Ø±Ø§" } },
        { title: "Ù…Ø±Ø­لÙ‡ Û³: Ø³Ø§Ø®ØªÙ† Ø¬Ù…لÙ‡", text: "Ø¬Ù…لÙ‡ Ú©Ø§Ù…ل Ø¨Ø³Ø§Ø²ÛŒØ¯", example: { de: "Ich sehe den Mann.", fa: "Ù…Ù† Ù…Ø±Ø¯ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…." } }
      ]
    }
  ],
  listening: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ø´Ù†ÛŒØ¯Ø§Ø±ÛŒ: Akkusativ",
      source: "Deutsche Welle - Deutsch Lernen",
      link: "https://www.dw.com/de/deutsch-lernen/s-2055",
      instructions: "Ø¨Ù‡ ÙˆÛŒØ¯ÛŒÙˆ Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ Ø¬Ù…لØ§ØªÛŒ Ú©Ù‡ Akkusativ Ø¯Ø§Ø±Ù†Ø¯ Ø´Ù†Ø§Ø³Ø§ÛŒÛŒ Ú©Ù†ÛŒØ¯. Ø­Ø±ÙˆÙ ØªØ¹Ø±ÛŒÙ Ù…Ø°Ú©Ø± (den/einen) Ø±Ø§ Ù¾ÛŒØ¯Ø§ Ú©Ù†ÛŒØ¯."
    }
  ],
  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ú¯ÙØªØ§Ø±ÛŒ: ØªÙˆØµÛŒÙ Ø®Ø±ÛŒØ¯",
      pattern: "Ich kaufe [den/die/das] [Ø§Ø³Ù…]. Ich brauche [einen/eine/ein] [Ø§Ø³Ù…].",
      exercise: "Ø®Ø±ÛŒØ¯Ù‡Ø§ÛŒ Ø®ÙˆØ¯ Ø±Ø§ ØªÙˆØµÛŒÙ Ú©Ù†ÛŒØ¯. Ø¨Ú¯ÙˆÛŒÛŒØ¯ Ú†Ù‡ Ú†ÛŒØ²Ù‡Ø§ÛŒÛŒ Ù…ÛŒâ€ŒØ®Ø±ÛŒØ¯ Ùˆ Ù†ÛŒØ§Ø² Ø¯Ø§Ø±ÛŒØ¯. Ø§Ø² Akkusativ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯."
    }
  ],
  cultureTip: "Ø¯Ø± ÙØ±Ù‡Ù†Ú¯ Ø¢لÙ…Ø§Ù†ÛŒØŒ Ù‡Ø¯ÛŒÙ‡ Ø¯Ø§Ø¯Ù† Ø¯Ø± ØªÙˆلØ¯ Ø¨Ø³ÛŒØ§Ø± Ù…Ù‡Ù… Ø§Ø³Øª. Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ù‡Ø¯ÛŒÙ‡ Ø±Ø§ Ø¨Ø§Ø² Ù†Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯ ØªØ§ Ø¨Ø¹Ø¯ Ø§Ø² Ù…Ù‡Ù…Ø§Ù†ÛŒ. Ù†Ú©ØªÙ‡ Ø¬Ø§لØ¨: Ø§Ú¯Ø± Ú©Ø³ÛŒ Ø¯Ø± Ø¢لÙ…Ø§Ù† Ù‚Ø¨ل Ø§Ø² ØªÙˆلØ¯Ø´ Ø¨Ù‡ Ø§Ùˆ Â«ØªÙˆلØ¯ Ù…Ø¨Ø§Ø±Ú©Â» Ø¨Ú¯ÙˆÛŒØ¯ØŒ Ø¨Ø¯Ø´Ú¯ÙˆÙ† ØªلÙ‚ÛŒ Ù…ÛŒâ€ŒØ´ÙˆØ¯! Ù‡Ù…ÛŒØ´Ù‡ Ø¨Ø§ÛŒØ¯ Ù…Ù†ØªØ¸Ø± Ø¨Ù…Ø§Ù†ÛŒØ¯ ØªØ§ ØªØ§Ø±ÛŒØ® ØªÙˆلØ¯ ÙˆØ§Ù‚Ø¹ÛŒ Ø¨Ø±Ø³Ø¯.",
  examData: {
    questions: [
      { question: "Â«Ù…Ù† Ù…Ø±Ø¯ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…Â» Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich sehe der Mann.", "Ich sehe den Mann.", "Ich sehe das Mann.", "Ich sehe die Mann."], answer: 1 },
      { question: "Â«Ù…Ù† ÛŒÚ© Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ± Ù…ÛŒâ€ŒØ®Ø±Ù…Â» Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich kaufe ein Computer.", "Ich kaufe einen Computer.", "Ich kaufe eine Computer.", "Ich kaufe der Computer."], answer: 1 },
      { question: "Â«Ù…Ù† ÛŒÚ© لØ§Ù…Ù¾ Ù†ÛŒØ§Ø² Ø¯Ø§Ø±Ù…Â» Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich brauche ein Lampe.", "Ich brauche eine Lampe.", "Ich brauche einen Lampe.", "Ich brauche der Lampe."], answer: 1 },
      { question: "Ø¶Ù…ÛŒØ± Â«duÂ» Ø¯Ø± Akkusativ Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["dir", "dich", "du", "deiner"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… ÙØ¹ل Akkusativ Ù†Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ø¯ØŸ", options: ["sehen", "kaufen", "sein", "lesen"], answer: 2 },
      { question: "Ø¯Ø± AkkusativØŒ Ø­Ø±Ù ØªØ¹Ø±ÛŒÙ Ú©Ø¯Ø§Ù… Ø¬Ù†Ø³ÛŒØª ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", options: ["Ù…Ø¤Ù†Ø«", "Ø®Ù†Ø«ÛŒ", "Ù…Ø°Ú©Ø±", "Ø¬Ù…Ø¹"], answer: 2 },
      { question: "Â«Ù…Ù† ØªÙˆ Ø±Ø§ Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù…Â» Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich liebe du.", "Ich liebe dich.", "Ich liebe dir.", "Ich liebe dein."], answer: 1 },
      { question: "Â«Ø§Ùˆ Ø±ÙˆØ²Ù†Ø§Ù…Ù‡ Ø±Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù†Ø¯Â» Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Sie liest der Zeitung.", "Sie liest die Zeitung.", "Sie liest den Zeitung.", "Sie liest das Zeitung."], answer: 1 },
      { question: "Â«Ù…Ø§ Ú©ÛŒÚ© Ø±Ø§ Ù…ÛŒâ€ŒØ®ÙˆØ±ÛŒÙ…Â» Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Wir essen der Kuchen.", "Wir essen den Kuchen.", "Wir essen das Kuchen.", "Wir essen die Kuchen."], answer: 1 },
      { question: "Ø³Ø¤Ø§ل Ø¨Ø±Ø§ÛŒ Ø´Ù†Ø§Ø³Ø§ÛŒÛŒ Akkusativ Ú†ÛŒØ³ØªØŸ", options: ["Wer? (Ú©ÛŒØŸ)", "Was? (Ú†Ù‡ØŸ)", "Wen/Was? (Ú†Ù‡ Ú©Ø³ÛŒ/Ú†Ù‡ Ú†ÛŒØ²ÛŒ Ø±Ø§ØŸ)", "Wann? (Ú©ÛŒØŸ)"], answer: 2 }
    ]
  }
};
