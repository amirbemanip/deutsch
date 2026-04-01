export const day10Data = {
  title: "Ø±ÙˆØ² Û±Û°: Ø®Ø±ÛŒØ¯ Ùˆ ÙˆØ§Ø­Ø¯Ù‡Ø§ + Ø§Ø¹Ø¶Ø§ÛŒ Ø¨Ø¯Ù† Ùˆ Ø¨ÛŒØ§Ù† Ø¯Ø±Ø¯",
  objective: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø®Ø±ÛŒØ¯ Ú©Ø±Ø¯Ù†ØŒ ÙˆØ§Ø­Ø¯Ù‡Ø§ÛŒ Ø§Ù†Ø¯Ø§Ø²Ù‡â€ŒÚ¯ÛŒØ±ÛŒØŒ Ø§Ø¹Ø¶Ø§ÛŒ Ø¨Ø¯Ù† Ùˆ Ù†Ø­ÙˆÙ‡ Ø¨ÛŒØ§Ù† Ø¯Ø±Ø¯",
  grammarData: {
    subtitle: "Ø®Ø±ÛŒØ¯ØŒ ÙˆØ§Ø­Ø¯Ù‡Ø§ Ùˆ Ø§Ø¹Ø¶Ø§ÛŒ Ø¨Ø¯Ù†",
    content: [
      {
        type: "text",
        title: "ÙˆØ§Ø­Ø¯Ù‡Ø§ÛŒ Ø§Ù†Ø¯Ø§Ø²Ù‡â€ŒÚ¯ÛŒØ±ÛŒ Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ",
        text: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ø¨Ø±Ø§ÛŒ Ø®Ø±ÛŒØ¯ Ø§Ø² ÙˆØ§Ø­Ø¯Ù‡Ø§ÛŒ Ù…Ø®ØªلÙ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: das Kilo/kg (Ú©ÛŒلÙˆ)ØŒ der Liter/l (لÛŒØªØ±)ØŒ das Gramm/g (Ú¯Ø±Ù…)ØŒ das StÃ¼ck (Ø¹Ø¯Ø¯/ØªÚ©Ù‡). Ù…Ø«Ø§ل: ein Kilo Tomaten (ÛŒÚ© Ú©ÛŒلÙˆ Ú¯ÙˆØ¬Ù‡)ØŒ zwei Liter Milch (Ø¯Ùˆ لÛŒØªØ± Ø´ÛŒØ±)ØŒ fÃ¼nfhundert Gramm KÃ¤se (Ù¾Ø§Ù†ØµØ¯ Ú¯Ø±Ù… Ù¾Ù†ÛŒØ±)."
      },
      {
        type: "table",
        title: "ÙˆØ§Ø­Ø¯Ù‡Ø§ÛŒ Ø§Ù†Ø¯Ø§Ø²Ù‡â€ŒÚ¯ÛŒØ±ÛŒ",
        rows: [
          { de: "das Kilo / das Kilogramm", fa: "Ú©ÛŒلÙˆÚ¯Ø±Ù…" },
          { de: "der Liter", fa: "لÛŒØªØ±" },
          { de: "das Gramm", fa: "Ú¯Ø±Ù…" },
          { de: "das StÃ¼ck", fa: "Ø¹Ø¯Ø¯ / ØªÚ©Ù‡" },
          { de: "das Pfund", fa: "Ù†ÛŒÙ… Ú©ÛŒلÙˆ (Ù¾ÙˆÙ†Ø¯)" },
          { de: "die Flasche", fa: "Ø¨Ø·Ø±ÛŒ" },
          { de: "die Packung", fa: "Ø¨Ø³ØªÙ‡" },
          { de: "die Dose", fa: "Ù‚ÙˆØ·ÛŒ" },
          { de: "der Beutel", fa: "Ú©ÛŒØ³Ù‡" },
          { de: "die Scheibe", fa: "ÙˆØ±Ù‚Ù‡" }
        ]
      },
      {
        type: "examples",
        title: "Ø¬Ù…لØ§Øª Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ Ø¯Ø± Ø®Ø±ÛŒØ¯",
        items: [
          { de: "Was kostet das?", fa: "Ø§ÛŒÙ† Ú†Ù‚Ø¯Ø± Ù‚ÛŒÙ…Øª Ø¯Ø§Ø±Ø¯ØŸ" },
          { de: "Ich hÃ¤tte gern ein Kilo لpfel.", fa: "Ù…Ù† ÛŒÚ© Ú©ÛŒلÙˆ Ø³ÛŒØ¨ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù…." },
          { de: "Geben Sie mir bitte zweihundert Gramm Schinken.", fa: "لØ·ÙØ§Ù‹ Ø¯ÙˆÛŒØ³Øª Ú¯Ø±Ù… Ú˜Ø§Ù…Ø¨ÙˆÙ† Ø¨Ù‡ Ù…Ù† Ø¨Ø¯Ù‡ÛŒØ¯." },
          { de: "Macht zusammen fÃ¼nf Euro.", fa: "Ø±ÙˆÛŒ Ù‡Ù… Ù¾Ù†Ø¬ ÛŒÙˆØ±Ùˆ Ù…ÛŒâ€ŒØ´ÙˆØ¯." },
          { de: "Kann ich mit Karte zahlen?", fa: "Ø¢ÛŒØ§ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ù… Ø¨Ø§ Ú©Ø§Ø±Øª Ù¾Ø±Ø¯Ø§Ø®Øª Ú©Ù†Ù…ØŸ" },
          { de: "Das ist zu teuer!", fa: "Ø§ÛŒÙ† Ø®ÛŒلÛŒ Ú¯Ø±Ø§Ù† Ø§Ø³Øª!" },
          { de: "Haben Sie das auch billiger?", fa: "Ø¢ÛŒØ§ Ø§Ø±Ø²Ø§Ù†â€ŒØªØ± Ù‡Ù… Ø¯Ø§Ø±ÛŒØ¯ØŸ" },
          { de: "Das reicht, danke.", fa: "Ú©Ø§ÙÛŒ Ø§Ø³ØªØŒ Ù…Ù…Ù†ÙˆÙ†." }
        ]
      },
      {
        type: "text",
        title: "Ø§Ø¹Ø¶Ø§ÛŒ Ø¨Ø¯Ù† Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ",
        text: "der Kopf (Ø³Ø±)ØŒ das Auge (Ú†Ø´Ù… - Ø¬Ù…Ø¹ die Augen)ØŒ die Nase (Ø¨ÛŒÙ†ÛŒ)ØŒ der Mund (Ø¯Ù‡Ø§Ù†)ØŒ das Ohr (Ú¯ÙˆØ´ - Ø¬Ù…Ø¹ die Ohren)ØŒ der Arm (Ø¨Ø§Ø²Ùˆ)ØŒ die Hand (Ø¯Ø³Øª)ØŒ das Bein (Ù¾Ø§)ØŒ der RÃ¼cken (Ù¾Ø´Øª)ØŒ der Bauch (Ø´Ú©Ù…)."
      },
      {
        type: "table",
        title: "Ø§Ø¹Ø¶Ø§ÛŒ Ø¨Ø¯Ù†",
        rows: [
          { de: "der Kopf", fa: "Ø³Ø±" },
          { de: "das Auge (die Augen)", fa: "Ú†Ø´Ù…" },
          { de: "die Nase", fa: "Ø¨ÛŒÙ†ÛŒ" },
          { de: "der Mund", fa: "Ø¯Ù‡Ø§Ù†" },
          { de: "das Ohr (die Ohren)", fa: "Ú¯ÙˆØ´" },
          { de: "der Arm / die Arme", fa: "Ø¨Ø§Ø²Ùˆ" },
          { de: "die Hand / die HÃ¤nde", fa: "Ø¯Ø³Øª" },
          { de: "das Bein / die Beine", fa: "Ù¾Ø§" },
          { de: "der RÃ¼cken", fa: "Ù¾Ø´Øª" },
          { de: "der Bauch", fa: "Ø´Ú©Ù…" },
          { de: "der Zahn / die ZÃ¤hne", fa: "Ø¯Ù†Ø¯Ø§Ù†" },
          { de: "das Herz", fa: "Ù‚لØ¨" },
          { de: "der Finger", fa: "Ø§Ù†Ú¯Ø´Øª" },
          { de: "die Schulter", fa: "Ø´Ø§Ù†Ù‡" }
        ]
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: Ø¨ÛŒØ§Ù† Ø¯Ø±Ø¯",
        text: "Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ø¯Ø±Ø¯ Ø§Ø² ÙØ¹ل tun/sein Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: لMein Kopf tut wehل ÛŒØ§ لIch habe Kopfschmerzenل (Ø³Ø±Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯). Ø³Ø§Ø®ØªØ§Ø±: mein/mein + Ø¹Ø¶Ùˆ + tut weh"
      },
      {
        type: "examples",
        title: "Ø¨ÛŒØ§Ù† Ø¯Ø±Ø¯",
        items: [
          { de: "Mein Kopf tut weh.", fa: "Ø³Ø±Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
          { de: "Ich habe Bauchschmerzen.", fa: "Ø¯ل Ø¯Ø±Ø¯ Ø¯Ø§Ø±Ù…." },
          { de: "Mein RÃ¼cken tut weh.", fa: "Ú©Ù…Ø±Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
          { de: "Ich habe Zahnschmerzen.", fa: "Ø¯Ù†Ø¯Ø§Ù† Ø¯Ø±Ø¯ Ø¯Ø§Ø±Ù…." },
          { de: "Meine Augen tun weh.", fa: "Ú†Ø´Ù…â€ŒÙ‡Ø§ÛŒÙ… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
          { de: "Ich habe Halsschmerzen.", fa: "Ú¯لÙˆ Ø¯Ø±Ø¯ Ø¯Ø§Ø±Ù…." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ†: Ø®Ø±ÛŒØ¯ Ùˆ ÙˆØ§Ø­Ø¯Ù‡Ø§",
        questions: [
          {
            question: "ÙˆØ§Ø­Ø¯ Ú©ÛŒلÙˆÚ¯Ø±Ù… Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ Ú†ÛŒØ³ØªØŸ",
            questionDe: "Wie sagt man لkiloل auf Deutsch?",
            options: [
              { text: "das Kilo", isCorrect: true },
              { text: "der Liter", isCorrect: false },
              { text: "das Gramm", isCorrect: false },
              { text: "das StÃ¼ck", isCorrect: false }
            ],
            explanation: "das Kilo ÛŒØ§ das Kilogramm ÙˆØ§Ø­Ø¯ Ú©ÛŒلÙˆÚ¯Ø±Ù… Ø§Ø³Øª."
          },
          {
            question: "لÙ…Ù† Ø¯ÙˆÛŒØ³Øª Ú¯Ø±Ù… Ù¾Ù†ÛŒØ± Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù…ل Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:",
            questionDe: "Wie sagt man لI want 200 grams of cheeseل?",
            options: [
              { text: "Ich hÃ¤tte gern zweihundert Gramm KÃ¤se.", isCorrect: true },
              { text: "Ich hÃ¤tte gern zweihundert Kilo KÃ¤se.", isCorrect: false },
              { text: "Ich will zweihundert Gramm KÃ¤se.", isCorrect: false },
              { text: "Ich mÃ¶chte zweihundert KÃ¤se.", isCorrect: false }
            ],
            explanation: "Ø§Ø² لIch hÃ¤tte gernل Ø¨Ø±Ø§ÛŒ Ù…Ø¤Ø¯Ø¨Ø§Ù†Ù‡ Ø¯Ø±Ø®ÙˆØ§Ø³Øª Ú©Ø±Ø¯Ù† Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          },
          {
            question: "لØ³Ø±Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man لI have a headacheل?",
            options: [
              { text: "Mein Kopf tut weh.", isCorrect: true },
              { text: "Mein Kopf ist weh.", isCorrect: false },
              { text: "Ich bin Kopfschmerzen.", isCorrect: false },
              { text: "Ich tue Kopfschmerzen.", isCorrect: false }
            ],
            explanation: "Ø³Ø§Ø®ØªØ§Ø± ØµØ­ÛŒØ­: Mein/mein + Ø¹Ø¶Ùˆ + tut weh"
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÚ©Ù…ÛŒل Ø¬Ù…لØ§Øª: Ø®Ø±ÛŒØ¯",
        instruction: "Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø±Ø§ Ø¨Ø§ Ú©لÙ…Ù‡ Ù…Ù†Ø§Ø³Ø¨ Ù¾Ø± Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Ich hÃ¤tte gern ___ Kilo Tomaten.", answer: "ein", hint: "ÛŒÚ© Ú©ÛŒلÙˆ" },
          { sentence: "Was ___ das?", answer: "kostet", hint: "Ù‚ÛŒÙ…Øª Ú†Ù‚Ø¯Ø± Ø§Ø³ØªØŸ" },
          { sentence: "Geben Sie mir bitte zweihundert ___ KÃ¤se.", answer: "Gramm", hint: "ÙˆØ§Ø­Ø¯ Ú¯Ø±Ù…" },
          { sentence: "Kann ich mit ___ zahlen?", answer: "Karte", hint: "Ù¾Ø±Ø¯Ø§Ø®Øª Ø¨Ø§ Ú©Ø§Ø±Øª" },
          { sentence: "Mein RÃ¼cken ___ weh.", answer: "tut", hint: "Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯" },
          { sentence: "Ich habe Bauch___.", answer: "schmerzen", hint: "Ø¯ل Ø¯Ø±Ø¯" },
          { sentence: "Das ist zu ___!", answer: "teuer", hint: "Ú¯Ø±Ø§Ù†" },
          { sentence: "___ zusammen fÃ¼nf Euro.", answer: "Macht", hint: "Ø±ÙˆÛŒ Ù‡Ù… ... Ù…ÛŒâ€ŒØ´ÙˆØ¯" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "Ø®Ø±ÛŒØ¯ Ùˆ Ù…ÙˆØ§Ø¯ ØºØ°Ø§ÛŒÛŒ",
        words: [
          { de: "der Supermarkt", fa: "Ø³ÙˆÙ¾Ø±Ù…Ø§Ø±Ú©Øª", article: "der", plural: "die SupermÃ¤rkte", examples: [{ de: "Ich gehe in den Supermarkt.", fa: "Ù…Ù† Ø¨Ù‡ Ø³ÙˆÙ¾Ø±Ù…Ø§Ø±Ú©Øª Ù…ÛŒâ€ŒØ±ÙˆÙ…." }] },
          { de: "das GemÃ¼se", fa: "Ø³Ø¨Ø²ÛŒØ¬Ø§Øª", article: "das", plural: "-", examples: [{ de: "Ich kaufe frisches GemÃ¼se.", fa: "Ù…Ù† Ø³Ø¨Ø²ÛŒØ¬Ø§Øª ØªØ§Ø²Ù‡ Ù…ÛŒâ€ŒØ®Ø±Ù…." }] },
          { de: "das Obst", fa: "Ù…ÛŒÙˆÙ‡", article: "das", plural: "-", examples: [{ de: "MÃ¶chten Sie Obst?", fa: "Ø¢ÛŒØ§ Ù…ÛŒÙˆÙ‡ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡ÛŒØ¯ØŸ" }] },
          { de: "die Tomate", fa: "Ú¯ÙˆØ¬Ù‡â€ŒÙØ±Ù†Ú¯ÛŒ", article: "die", plural: "die Tomaten", examples: [{ de: "Die Tomaten sind rot.", fa: "Ú¯ÙˆØ¬Ù‡â€ŒÙ‡Ø§ Ù‚Ø±Ù…Ø² Ù‡Ø³ØªÙ†Ø¯." }] },
          { de: "der Apfel", fa: "Ø³ÛŒØ¨", article: "der", plural: "die لpfel", examples: [{ de: "Ich esse einen Apfel.", fa: "Ù…Ù† ÛŒÚ© Ø³ÛŒØ¨ Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…." }] },
          { de: "die Kartoffel", fa: "Ø³ÛŒØ¨â€ŒØ²Ù…ÛŒÙ†ÛŒ", article: "die", plural: "die Kartoffeln", examples: [{ de: "Kartoffeln sind sehr beliebt.", fa: "Ø³ÛŒØ¨â€ŒØ²Ù…ÛŒÙ†ÛŒ Ø®ÛŒلÛŒ Ù…Ø­Ø¨ÙˆØ¨ Ø§Ø³Øª." }] },
          { de: "die Milch", fa: "Ø´ÛŒØ±", article: "die", plural: "-", examples: [{ de: "Ich trinke Milch.", fa: "Ù…Ù† Ø´ÛŒØ± Ù…ÛŒâ€ŒÙ†ÙˆØ´Ù…." }] },
          { de: "der KÃ¤se", fa: "Ù¾Ù†ÛŒØ±", article: "der", plural: "die KÃ¤se", examples: [{ de: "Der KÃ¤se ist lecker.", fa: "Ù¾Ù†ÛŒØ± Ø®ÙˆØ´Ù…Ø²Ù‡ Ø§Ø³Øª." }] },
          { de: "das Brot", fa: "Ù†Ø§Ù†", article: "das", plural: "die Brote", examples: [{ de: "Ich kaufe frisches Brot.", fa: "Ù…Ù† Ù†Ø§Ù† ØªØ§Ø²Ù‡ Ù…ÛŒâ€ŒØ®Ø±Ù…." }] },
          { de: "das Fleisch", fa: "Ú¯ÙˆØ´Øª", article: "das", plural: "-", examples: [{ de: "Ich esse kein Fleisch.", fa: "Ù…Ù† Ú¯ÙˆØ´Øª Ù†Ù…ÛŒâ€ŒØ®ÙˆØ±Ù…." }] },
          { de: "der Fisch", fa: "Ù…Ø§Ù‡ÛŒ", article: "der", plural: "die Fische", examples: [{ de: "Fisch ist gesund.", fa: "Ù…Ø§Ù‡ÛŒ Ø³Ø§لÙ… Ø§Ø³Øª." }] },
          { de: "der Reis", fa: "Ø¨Ø±Ù†Ø¬", article: "der", plural: "-", examples: [{ de: "Wir essen Reis mit HÃ¤hnchen.", fa: "Ù…Ø§ Ø¨Ø±Ù†Ø¬ Ø¨Ø§ Ù…Ø±Øº Ù…ÛŒâ€ŒØ®ÙˆØ±ÛŒÙ…." }] }
        ]
      },
      {
        title: "Ø§Ø¹Ø¶Ø§ÛŒ Ø¨Ø¯Ù†",
        words: [
          { de: "der Kopf", fa: "Ø³Ø±", article: "der", plural: "die KÃ¶pfe", examples: [{ de: "Mein Kopf tut weh.", fa: "Ø³Ø±Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "das Auge", fa: "Ú†Ø´Ù…", article: "das", plural: "die Augen", examples: [{ de: "Sie hat blaue Augen.", fa: "Ø§Ùˆ Ú†Ø´Ù…â€ŒÙ‡Ø§ÛŒ Ø¢Ø¨ÛŒ Ø¯Ø§Ø±Ø¯." }] },
          { de: "die Nase", fa: "Ø¨ÛŒÙ†ÛŒ", article: "die", plural: "die Nasen", examples: [{ de: "Die Nase lÃ¤uft.", fa: "Ø¨ÛŒÙ†ÛŒ Ø¢Ø¨ Ù…ÛŒâ€ŒØ±ÛŒØ²Ø¯ (Ø³Ø±Ù…Ø§ Ø®ÙˆØ±Ø¯Ù‡)." }] },
          { de: "der Mund", fa: "Ø¯Ù‡Ø§Ù†", article: "der", plural: "die MÃ¼nder", examples: [{ de: "Mach den Mund auf!", fa: "Ø¯Ù‡Ø§Ù†Øª Ø±Ø§ Ø¨Ø§Ø² Ú©Ù†!" }] },
          { de: "die Hand", fa: "Ø¯Ø³Øª", article: "die", plural: "die HÃ¤nde", examples: [{ de: "Wasch die HÃ¤nde!", fa: "Ø¯Ø³Øªâ€ŒÙ‡Ø§ÛŒØª Ø±Ø§ Ø¨Ø´ÙˆØ±!" }] },
          { de: "das Bein", fa: "Ù¾Ø§", article: "das", plural: "die Beine", examples: [{ de: "Mein Bein tut weh.", fa: "Ù¾Ø§ÛŒÙ… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "der RÃ¼cken", fa: "Ù¾Ø´Øª/Ú©Ù…Ø±", article: "der", plural: "die RÃ¼cken", examples: [{ de: "Ich habe RÃ¼ckenschmerzen.", fa: "Ú©Ù…Ø±Ø¯Ø±Ø¯ Ø¯Ø§Ø±Ù…." }] },
          { de: "der Bauch", fa: "Ø´Ú©Ù…", article: "der", plural: "die BÃ¤uche", examples: [{ de: "Mein Bauch tut weh.", fa: "Ø´Ú©Ù…Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "der Zahn", fa: "Ø¯Ù†Ø¯Ø§Ù†", article: "der", plural: "die ZÃ¤hne", examples: [{ de: "Ich habe Zahnschmerzen.", fa: "Ø¯Ù†Ø¯Ø§Ù† Ø¯Ø±Ø¯ Ø¯Ø§Ø±Ù…." }] },
          { de: "der Finger", fa: "Ø§Ù†Ú¯Ø´Øª", article: "der", plural: "die Finger", examples: [{ de: "Er hat zehn Finger.", fa: "Ø§Ùˆ Ø¯Ù‡ Ø§Ù†Ú¯Ø´Øª Ø¯Ø§Ø±Ø¯." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Herr MÃ¼ller geht in den Supermarkt. Er braucht GemÃ¼se und Obst. Er kauft ein Kilo Tomaten fÃ¼r zwei Euro, eine Packung Nudeln fÃ¼r einen Euro und zwei Liter Milch fÃ¼r drei Euro. An der Kasse bezahlt er mit Karte. Die Kassiererin sagt: لDas macht zusammen sechs Euro.ل Herr MÃ¼ller sagt: لDanke! Auf Wiedersehen!ل",
      questions: [
        { question: "Ø¢Ù‚Ø§ÛŒ Ù…ÙˆلØ± Ø¨Ù‡ Ú©Ø¬Ø§ Ù…ÛŒâ€ŒØ±ÙˆØ¯ØŸ", answer: "Ø§Ùˆ Ø¨Ù‡ Ø³ÙˆÙ¾Ø±Ù…Ø§Ø±Ú©Øª Ù…ÛŒâ€ŒØ±ÙˆØ¯." },
        { question: "Ø§Ùˆ Ú†Ù‡ Ú†ÛŒØ²Ù‡Ø§ÛŒÛŒ Ù…ÛŒâ€ŒØ®Ø±Ø¯ØŸ", answer: "ÛŒÚ© Ú©ÛŒلÙˆ Ú¯ÙˆØ¬Ù‡ØŒ ÛŒÚ© Ø¨Ø³ØªÙ‡ Ù†ÙˆØ¯ل Ùˆ Ø¯Ùˆ لÛŒØªØ± Ø´ÛŒØ±." },
        { question: "Ø§Ùˆ Ú†Ù‚Ø¯Ø± Ù¾Ø±Ø¯Ø§Ø®Øª Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", answer: "Ø§Ùˆ Ø´Ø´ ÛŒÙˆØ±Ùˆ Ù¾Ø±Ø¯Ø§Ø®Øª Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
        { question: "Ø¢Ù‚Ø§ÛŒ Ù…ÙˆلØ± Ú†Ú¯ÙˆÙ†Ù‡ Ù¾Ø±Ø¯Ø§Ø®Øª Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", answer: "Ø¨Ø§ Ú©Ø§Ø±Øª Ù¾Ø±Ø¯Ø§Ø®Øª Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }
      ]
    }
  ],
  writing: [
    {
      title: "Ù†ÙˆØ´ØªÙ† لÛŒØ³Øª Ø®Ø±ÛŒØ¯",
      prompt: "ÛŒÚ© لÛŒØ³Øª Ø®Ø±ÛŒØ¯ Ø¨Ø±Ø§ÛŒ ÛŒÚ© Ù‡ÙØªÙ‡ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯ Ùˆ Ù…Ù‚Ø¯Ø§Ø± Ù‡Ø± Ú©Ø§لØ§ Ø±Ø§ Ù…Ø´Ø®Øµ Ú©Ù†ÛŒØ¯.",
      steps: [
        { title: "Ù‚Ø¯Ù… Ø§Ùˆل: لÛŒØ³Øª Ú©Ø§لØ§Ù‡Ø§", text: "Ú©Ø§لØ§Ù‡Ø§ÛŒ Ù…ÙˆØ±Ø¯ Ù†ÛŒØ§Ø² Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.", example: { de: "Brot, Milch, KÃ¤se, Tomaten...", fa: "Ù†Ø§Ù†ØŒ Ø´ÛŒØ±ØŒ Ù¾Ù†ÛŒØ±ØŒ Ú¯ÙˆØ¬Ù‡..." } },
        { title: "Ù‚Ø¯Ù… Ø¯ÙˆÙ…: Ù…Ø´Ø®Øµ Ú©Ø±Ø¯Ù† Ù…Ù‚Ø¯Ø§Ø±", text: "Ù…Ù‚Ø¯Ø§Ø± Ù‡Ø± Ú©Ø§لØ§ Ø±Ø§ Ø¨Ø§ ÙˆØ§Ø­Ø¯ Ù…Ù†Ø§Ø³Ø¨ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.", example: { de: "zwei Brote, ein Liter Milch, dreihundert Gramm KÃ¤se", fa: "Ø¯Ùˆ Ù†Ø§Ù†ØŒ ÛŒÚ© لÛŒØªØ± Ø´ÛŒØ±ØŒ Ø³ÛŒØµØ¯ Ú¯Ø±Ù… Ù¾Ù†ÛŒØ±" } },
        { title: "Ù‚Ø¯Ù… Ø³ÙˆÙ…: Ù†ÙˆØ´ØªÙ† Ø¬Ù…لØ§Øª Ú©Ø§Ù…ل", text: "Ø¬Ù…لØ§Øª Ú©Ø§Ù…ل Ø¨Ø§ ÙØ¹ل Ø®Ø±ÛŒØ¯Ù† Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.", example: { de: "Ich mÃ¶chte zwei Brote kaufen.", fa: "Ù…Ù† Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ø¯Ùˆ Ù†Ø§Ù† Ø¨Ø®Ø±Ù…." } }
      ],
      modelAnswer: "Meine Einkaufsliste fÃ¼r diese Woche:\n\n1. Ein Kilo لpfel - Ich mÃ¶chte einen Kilo لpfel kaufen.\n2. Zweihundert Gramm KÃ¤se - Geben Sie mir bitte zweihundert Gramm KÃ¤se.\n3. Zwei Liter Milch - Ich brauche zwei Liter Milch.\n4. Ein Brot - Ich hÃ¤tte gern ein Brot.\n5. Eine Packung Nudeln - Ich kaufe eine Packung Nudeln.\n6. Ein Kilo Tomaten - Die Tomaten kosten zwei Euro das Kilo.\n7. FÃ¼nfhundert Gramm Fleisch - Ich hÃ¤tte gern fÃ¼nfhundert Gramm Fleisch."
    }
  ],
  listening: [
    {
      title: "Ú¯ÙˆØ´ Ø¯Ø§Ø¯Ù† Ø¨Ù‡ Ù…Ú©Ø§لÙ…Ù‡ Ø¯Ø± Ø³ÙˆÙ¾Ø±Ù…Ø§Ø±Ú©Øª",
      source: "Deutsch lernen - Einkaufen",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "Ø¨Ù‡ Ù…Ú©Ø§لÙ…Ù‡ Ø¨ÛŒÙ† Ù…Ø´ØªØ±ÛŒ Ùˆ ÙØ±ÙˆØ´Ù†Ø¯Ù‡ Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ Ú©Ø§لØ§Ù‡Ø§ÛŒ Ø®Ø±ÛŒØ¯Ø§Ø±ÛŒ Ø´Ø¯Ù‡ Ùˆ Ù‚ÛŒÙ…Øª Ø¢Ù†Ù‡Ø§ Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
    }
  ],
  speaking: [
    {
      title: "Ù†Ù‚Ø´ Ø¨Ø§Ø²ÛŒ Ú©Ø±Ø¯Ù† Ø¯Ø± Ø³ÙˆÙ¾Ø±Ù…Ø§Ø±Ú©Øª",
      pattern: "A: Guten Tag! Was mÃ¶chten Sie?\nB: Ich hÃ¤tte gern [Ware].\nA: Wie viel?\nB: [Menge], bitte.\nA: Das macht [Preis] Euro.\nB: Kann ich mit Karte zahlen?",
      exercise: "Ø¨Ø§ ÛŒÚ© Ù†ÙØ± Ù†Ù‚Ø´ Ø®Ø±ÛŒØ¯Ø§Ø± Ùˆ ÙØ±ÙˆØ´Ù†Ø¯Ù‡ Ø±Ø§ Ø¨Ø§Ø²ÛŒ Ú©Ù†ÛŒØ¯. Ú©Ø§لØ§Ù‡Ø§ Ùˆ Ù…Ù‚Ø¯Ø§Ø± Ø¢Ù†Ù‡Ø§ Ø±Ø§ Ù…Ø´Ø®Øµ Ú©Ù†ÛŒØ¯."
    }
  ],
  cultureTip: "Ø¯Ø± Ø¢لÙ…Ø§Ù† Ø®Ø±ÛŒØ¯ Ø§Ø² Ø³ÙˆÙ¾Ø±Ù…Ø§Ø±Ú©Øª Ø¨Ø³ÛŒØ§Ø± Ø±Ø§ÛŒØ¬ Ø§Ø³Øª. Ø¢لØ¯ÛŒ (Aldi) Ùˆ لÛŒØ¯ل (Lidl) Ø§Ø² Ø§Ø±Ø²Ø§Ù†â€ŒØªØ±ÛŒÙ† Ø³ÙˆÙ¾Ø±Ù…Ø§Ø±Ú©Øªâ€ŒÙ‡Ø§ Ù‡Ø³ØªÙ†Ø¯. Ù…Ø±Ø¯Ù… Ø¢لÙ…Ø§Ù† Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø¨Ø§ Ú©Ø§Ø±Øª Ù¾Ø±Ø¯Ø§Ø®Øª Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯ Ø§Ù…Ø§ Ù¾Ùˆل Ù†Ù‚Ø¯ Ù‡Ù… Ø±Ø§ÛŒØ¬ Ø§Ø³Øª. Ø¯Ø± Ø¢لÙ…Ø§Ù† Ú©ÛŒØ³Ù‡â€ŒÙ‡Ø§ÛŒ Ù¾لØ§Ø³ØªÛŒÚ©ÛŒ Ø±Ø§ÛŒÚ¯Ø§Ù† Ù†ÛŒØ³Øª Ùˆ Ø¨Ø§ÛŒØ¯ Ú©ÛŒØ³Ù‡ Ø®ÙˆØ¯ Ø±Ø§ Ø¨ÛŒØ§ÙˆØ±ÛŒØ¯.",
  examData: {
    questions: [
      { question: "ÙˆØ§Ø­Ø¯ لÚ©ÛŒلÙˆÚ¯Ø±Ù…ل Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ Ú†ÛŒØ³ØªØŸ", options: ["das Kilo", "der Liter", "das Gramm", "das StÃ¼ck"], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ø¹Ø¨Ø§Ø±Øª ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich hÃ¤tte gern ein Kilo Tomaten.", "Ich hÃ¤tte gern ein Liter Tomaten.", "Ich hÃ¤tte gern ein Gramm Tomaten.", "Ich hÃ¤tte gern ein StÃ¼ck Tomaten."], answer: 0 },
      { question: "لØ³Ø±Ù… Ø¯Ø±Ø¯ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Mein Kopf tut weh.", "Mein Kopf ist weh.", "Ich bin Kopfschmerzen.", "Ich habe Kopfschmerzen."], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ú©لÙ…Ù‡ Ø¨Ù‡ Ù…Ø¹Ù†Ø§ÛŒ لÙ¾Ù†ÛŒØ±ل Ø§Ø³ØªØŸ", options: ["der KÃ¤se", "das Fleisch", "das Brot", "die Milch"], answer: 0 },
      { question: "لØ¢Ù† Ø®ÛŒلÛŒ Ú¯Ø±Ø§Ù† Ø§Ø³Øªل Ú†Ú¯ÙˆÙ†Ù‡ Ú¯ÙØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Das ist zu teuer!", "Das ist zu billig!", "Das ist zu viel!", "Das ist zu wenig!"], answer: 0 },
      { question: "لØ¨Ø§ Ú©Ø§Ø±Øª Ù¾Ø±Ø¯Ø§Ø®Øª Ù…ÛŒâ€ŒÚ©Ù†Ù…ل Ø¨Ù‡ Ø¢لÙ…Ø§Ù†ÛŒ:", options: ["Ich zahle mit Karte.", "Ich zahle mit Geld.", "Ich zahle mit Bargeld.", "Ich zahle mit Schein."], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… ÙˆØ§Ø­Ø¯ Ø¨Ø±Ø§ÛŒ Ù…Ø§ÛŒØ¹Ø§Øª Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["der Liter", "das Kilo", "das Gramm", "das StÃ¼ck"], answer: 0 },
      { question: "لØ±ÙˆÛŒ Ù‡Ù… Ù¾Ù†Ø¬ ÛŒÙˆØ±Ùˆ Ù…ÛŒâ€ŒØ´ÙˆØ¯ل Ú†Ú¯ÙˆÙ†Ù‡ Ú¯ÙØªÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Macht zusammen fÃ¼nf Euro.", "Kostet zusammen fÃ¼nf Euro.", "Ist zusammen fÃ¼nf Euro.", "Sind zusammen fÃ¼nf Euro."], answer: 0 }
    ]
  }
};