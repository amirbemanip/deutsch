export const day52Data = {
  title: "Ø±ÙˆØ² ÛµÛ²: Ø®Ø·Ø§Ù‡Ø§ÛŒ Ø±Ø§ÛŒØ¬ Ùˆ Ù†Ø­ÙˆÙ‡ Ø±ÙØ¹ Ø¢Ù†â€ŒÙ‡Ø§",
  objective: "Ø¯Ø± Ø§ÛŒÙ† Ø±ÙˆØ² Ø±Ø§ÛŒØ¬â€ŒØªØ±ÛŒÙ† Ø§Ø´ØªØ¨Ø§Ù‡Ø§ØªÛŒ Ú©Ù‡ ÙØ§Ø±Ø³ÛŒâ€ŒØ²Ø¨Ø§Ù†Ø§Ù† Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ù…Ø±ØªÚ©Ø¨ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯ Ø±Ø§ Ø¨Ø±Ø±Ø³ÛŒ Ùˆ Ø§ØµلØ§Ø­ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…. Ø¯Ø§Ù†Ø³ØªÙ† Ø§ÛŒÙ† Ø®Ø·Ø§Ù‡Ø§ Ø§Ø² Ø§Ø±ØªÚ©Ø§Ø¨ Ø¢Ù†â€ŒÙ‡Ø§ Ù…Ù‡Ù…â€ŒØªØ± Ø§Ø³Øª!",

  grammarData: {
    subtitle: "Û±Û° Ø®Ø·Ø§ÛŒ Ø·لØ§ÛŒÛŒ Ú©Ù‡ Ø¨Ø§ÛŒØ¯ Ø§Ø² Ø§Ù…Ø±ÙˆØ² ØªØ±Ú© Ú©Ù†ÛŒØ¯",
    content: [
      {
        type: "alert",
        title: "Ø®Ø·Ø§ÛŒ Ø´Ù…Ø§Ø±Ù‡ Û±: Ø³Ù† Ú¯ÙØªÙ† Ø¨Ø§ ÙØ¹ل Ø§Ø´ØªØ¨Ø§Ù‡",
        text: "Ø¯Ø± ÙØ§Ø±Ø³ÛŒ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÛŒÙ… Â«Ø³Ù† Ø¯Ø§Ø±Ù…Â» Ø§Ù…Ø§ Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ø³Ù† Â«Ø¨ÙˆØ¯Ù†Â» Ø§Ø³Øª!\nâŒ Ich habe 25 Jahre. (Ø§Ø´ØªØ¨Ø§Ù‡ â€” ØªØ­Øª ØªØ£Ø«ÛŒØ± ÙØ§Ø±Ø³ÛŒ)\nâœ… Ich bin 25 Jahre alt. (Ø¯Ø±Ø³Øª)"
      },
      {
        type: "alert",
        title: "Ø®Ø·Ø§ÛŒ Ø´Ù…Ø§Ø±Ù‡ Û²: Ú¯Ø±Ø³Ù†Ú¯ÛŒ/ØªØ´Ù†Ú¯ÛŒ Ø¨Ø§ ÙØ¹ل Ø§Ø´ØªØ¨Ø§Ù‡",
        text: "Ø¯Ø± ÙØ§Ø±Ø³ÛŒ Ù…ÛŒâ€ŒÚ¯ÙˆÛŒÛŒÙ… Â«Ú¯Ø±Ø³Ù†Ù‡â€ŒØ§Ù…Â» (= ÙØ¹ل Ø¨ÙˆØ¯Ù†) Ø§Ù…Ø§ Ø¢لÙ…Ø§Ù†ÛŒ ÙØ¹ل Ø¯Ø§Ø´ØªÙ†!\nâŒ Ich bin Hunger. (Ø§Ø´ØªØ¨Ø§Ù‡)\nâœ… Ich habe Hunger. / Ich habe Durst. (Ø¯Ø±Ø³Øª)"
      },
      {
        type: "alert",
        title: "Ø®Ø·Ø§ÛŒ Ø´Ù…Ø§Ø±Ù‡ Û³: ÙØ±Ø§Ù…ÙˆØ´ Ú©Ø±Ø¯Ù† Ø¢Ø±ØªÛŒÚ©ل",
        text: "Ø¯Ø± ÙØ§Ø±Ø³ÛŒ Ø¢Ø±ØªÛŒÚ©ل Ù†Ø¯Ø§Ø±ÛŒÙ…ØŒ Ù¾Ø³ ÙØ±Ø§Ù…ÙˆØ´ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…!\nâŒ Ich habe Auto. (Ø§Ø´ØªØ¨Ø§Ù‡)\nâœ… Ich habe ein Auto. (Ø¯Ø±Ø³Øª â€” Ù‡Ù…ÛŒØ´Ù‡ Ø¢Ø±ØªÛŒÚ©ل Ø¨Ú¯Ø°Ø§Ø±ÛŒØ¯)"
      },
      {
        type: "alert",
        title: "Ø®Ø·Ø§ÛŒ Ø´Ù…Ø§Ø±Ù‡ Û´: Ø¬Ø§ÛŒ ÙØ¹ل Ø¯Ø± Ø¬Ù…لÙ‡ ÙˆØ§Ø¨Ø³ØªÙ‡",
        text: "Ø¨Ø¹Ø¯ Ø§Ø² weil/dass/obwohl ÙØ¹ل Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ Ù…ÛŒâ€ŒØ±ÙˆØ¯!\nâŒ Ich weiÃŸ, dass er kommt morgen. (Ø§Ø´ØªØ¨Ø§Ù‡)\nâœ… Ich weiÃŸ, dass er morgen kommt. (Ø¯Ø±Ø³Øª â€” ÙØ¹ل Ø¢Ø®Ø±)"
      },
      {
        type: "alert",
        title: "Ø®Ø·Ø§ÛŒ Ø´Ù…Ø§Ø±Ù‡ Ûµ: akkusativ/dativ Ø§Ø´ØªØ¨Ø§Ù‡",
        text: "Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡ Ø¨Ø¹Ø¶ÛŒ akkusativ Ùˆ Ø¨Ø¹Ø¶ÛŒ dativ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù†Ø¯!\nâŒ Ich gehe in der Schule. (Ø§Ø´ØªØ¨Ø§Ù‡ â€” gehe = Ø­Ø±Ú©Øª = akkusativ)\nâœ… Ich gehe in die Schule. (Ø¯Ø±Ø³Øª)"
      },
      {
        type: "alert",
        title: "Ø®Ø·Ø§ÛŒ Ø´Ù…Ø§Ø±Ù‡ Û¶: Ø§ÙØ¹Ø§ل Ø¬Ø¯Ø§Ø´Ø¯Ù†ÛŒ â€” Ø¬Ø§ÛŒ Ù¾ÛŒØ´ÙˆÙ†Ø¯",
        text: "Ù¾ÛŒØ´ÙˆÙ†Ø¯ ÙØ¹ل Ø¬Ø¯Ø§Ø´Ø¯Ù†ÛŒ Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯!\nâŒ Ich aufstehe um 7 Uhr. (Ø§Ø´ØªØ¨Ø§Ù‡)\nâœ… Ich stehe um 7 Uhr auf. (Ø¯Ø±Ø³Øª)"
      },
      {
        type: "alert",
        title: "Ø®Ø·Ø§ÛŒ Ø´Ù…Ø§Ø±Ù‡ Û·: trotzdem Ø¨Ø§ ÙØ¹ل Ø§Ø´ØªØ¨Ø§Ù‡",
        text: "Ø¨Ø¹Ø¯ Ø§Ø² trotzdem ÙØ¹ل Ø¨Ø§ÛŒØ¯ Ø¨لØ§ÙØ§ØµلÙ‡ Ø¨ÛŒØ§ÛŒØ¯ (Ù…Ø«ل Ø§Ø¨ØªØ¯Ø§ÛŒ Ø¬Ù…لÙ‡)!\nâŒ Es regnet, trotzdem ich gehe spazieren. (Ø§Ø´ØªØ¨Ø§Ù‡)\nâœ… Es regnet, trotzdem gehe ich spazieren. (Ø¯Ø±Ø³Øª)"
      },
      {
        type: "alert",
        title: "Ø®Ø·Ø§ÛŒ Ø´Ù…Ø§Ø±Ù‡ Û¸: ÙØ±Ø§Ù…ÙˆØ´ÛŒ Partizip II Ø¯Ø± Perfekt",
        text: "Ø¯Ø± Perfekt Ø¨Ø§ÛŒØ¯ ge- Ùˆ -t/-en Ø§Ø¶Ø§ÙÙ‡ Ú©Ù†ÛŒØ¯!\nâŒ Ich habe spielen FuÃŸball. (Ø§Ø´ØªØ¨Ø§Ù‡)\nâœ… Ich habe FuÃŸball gespielt. (Ø¯Ø±Ø³Øª)"
      },
      {
        type: "alert",
        title: "Ø®Ø·Ø§ÛŒ Ø´Ù…Ø§Ø±Ù‡ Û¹: Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Â«es gibtÂ» Ø¨Ù‡ Ø¬Ø§ÛŒ Â«seinÂ»",
        text: "ÙˆÙ‚ØªÛŒ Ø§Ø² ÙˆØ¬ÙˆØ¯ Ú†ÛŒØ²ÛŒ ØµØ­Ø¨Øª Ù…ÛŒâ€ŒÚ©Ù†ÛŒØ¯:\nâŒ Es ist ein Park in der Stadt. (Ø§Ø´ØªØ¨Ø§Ù‡)\nâœ… Es gibt einen Park in der Stadt. (Ø¯Ø±Ø³Øª â€” es gibt = ÙˆØ¬ÙˆØ¯ Ø¯Ø§Ø±Ø¯)"
      },
      {
        type: "alert",
        title: "Ø®Ø·Ø§ÛŒ Ø´Ù…Ø§Ø±Ù‡ Û±Û°: ØµÙØª Ø¨Ø¯ÙˆÙ† ØµØ±Ù",
        text: "ØµÙØªâ€ŒÙ‡Ø§ Ù‚Ø¨ل Ø§Ø² Ø§Ø³Ù… Ø¨Ø§ÛŒØ¯ ØµØ±Ù Ø¨Ø´ÙˆÙ†Ø¯!\nâŒ Ich habe ein klein Kind. (Ø§Ø´ØªØ¨Ø§Ù‡)\nâœ… Ich habe ein kleines Kind. (Ø¯Ø±Ø³Øª â€” ØµÙØª + Ø§Ø³Ù…)"
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ†: Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ Ø¯Ø±Ø³Øª Ø§Ø³ØªØŸ",
        questions: [
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich habe 30 Jahre alt.", isCorrect: false },
              { text: "Ich bin 30 Jahre alt.", isCorrect: true },
              { text: "Ich bin 30 Jahre.", isCorrect: false }
            ],
            explanation: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ø³Ù† Ø¨Ø§ ÙØ¹ل sein Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯: Ich bin ... Jahre alt."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ Ø§Ø² Ù†Ø¸Ø± Ø¬Ø§ÛŒÚ¯Ø§Ù‡ ÙØ¹ل Ø¯Ø± Ø¬Ù…لÙ‡ ÙˆØ§Ø¨Ø³ØªÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ",
            questionDe: "Welcher Nebensatz ist richtig?",
            options: [
              { text: "Ich weiÃŸ, dass er kommt morgen.", isCorrect: false },
              { text: "Ich weiÃŸ, dass er morgen kommt.", isCorrect: true },
              { text: "Ich weiÃŸ, dass kommt er morgen.", isCorrect: false }
            ],
            explanation: "Ø¯Ø± Ø¬Ù…لÙ‡ ÙˆØ§Ø¨Ø³ØªÙ‡ Ø¨Ø§ dassØŒ ÙØ¹ل Ø¨Ù‡ Ø¢Ø®Ø± Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯."
          },
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ÙØ¹ل Ø¬Ø¯Ø§Ø´Ø¯Ù†ÛŒ Ø±Ø§ Ø¯Ø±Ø³Øª Ø¨Ù‡ Ú©Ø§Ø± Ø¨Ø±Ø¯Ù‡ØŸ",
            questionDe: "Welcher trennbare Satz ist richtig?",
            options: [
              { text: "Ich aufstehe um 7 Uhr.", isCorrect: false },
              { text: "Ich stehe um 7 Uhr auf.", isCorrect: true },
              { text: "Ich stehe auf um 7 Uhr.", isCorrect: false }
            ],
            explanation: "Ù¾ÛŒØ´ÙˆÙ†Ø¯ ÙØ¹ل Ø¬Ø¯Ø§Ø´Ø¯Ù†ÛŒ Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "لØºØ§Øª Ø®Ø·Ø§ Ùˆ Ø§ØµلØ§Ø­ (Fehler & Korrektur)",
        words: [
          { de: "der Fehler", fa: "Ø§Ø´ØªØ¨Ø§Ù‡ / Ø®Ø·Ø§", article: "der", plural: "die Fehler", examples: [{ de: "Jeder macht Fehler beim Lernen.", fa: "Ù‡Ø± Ú©Ø³ÛŒ Ù‡Ù†Ú¯Ø§Ù… ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø§Ø´ØªØ¨Ø§Ù‡ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "richtig / falsch", fa: "Ø¯Ø±Ø³Øª / Ø§Ø´ØªØ¨Ø§Ù‡", article: "-", plural: "-", examples: [{ de: "Das ist nicht richtig, das ist falsch.", fa: "Ø§ÛŒÙ† Ø¯Ø±Ø³Øª Ù†ÛŒØ³ØªØŒ Ø§Ø´ØªØ¨Ø§Ù‡ Ø§Ø³Øª." }] },
          { de: "die Regel", fa: "Ù‚Ø§Ù†ÙˆÙ† / Ù‚Ø§Ø¹Ø¯Ù‡", article: "die", plural: "die Regeln", examples: [{ de: "Diese Regel muss man lernen.", fa: "Ø§ÛŒÙ† Ù‚Ø§Ø¹Ø¯Ù‡ Ø±Ø§ Ø¨Ø§ÛŒØ¯ ÛŒØ§Ø¯ Ø¨Ú¯ÛŒØ±ÛŒ." }] },
          { de: "aufpassen", fa: "Ø¯Ù‚Øª Ú©Ø±Ø¯Ù† / Ù…ÙˆØ§Ø¸Ø¨ Ø¨ÙˆØ¯Ù†", article: "-", plural: "-", examples: [{ de: "Pass auf! Das ist wichtig!", fa: "Ø¯Ù‚Øª Ú©Ù†! Ø§ÛŒÙ† Ù…Ù‡Ù…Ù‡!" }] },
          { de: "verwechseln", fa: "Ø§Ø´ØªØ¨Ø§Ù‡ Ú¯Ø±ÙØªÙ† / Ù‚Ø§Ø·ÛŒ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich verwechsle immer لderل und لdasل.", fa: "Ù…Ù† Ù‡Ù…ÛŒØ´Ù‡ der Ùˆ das Ø±Ùˆ Ù‚Ø§Ø·ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ù…." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "HÃ¤ufige Fehler von AnfÃ¤ngern\n\nViele AnfÃ¤nger machen die gleichen Fehler. Zum Beispiel sagen sie لIch habe 25 Jahreل statt لIch bin 25 Jahre altل. Das kommt davon, dass man die Struktur der Muttersprache Ã¼bertrÃ¤gt.\n\nEin anderer hÃ¤ufiger Fehler ist, dass man die Artikel vergisst. Im Deutschen braucht man immer einen Artikel: der, die oder das. Ohne Artikel klingt der Satz falsch.\n\nAuch die Wortstellung im Nebensatz ist schwer. Nach لweilل oder لdassل muss das Verb am Ende stehen. Das ist eine Regel, die man nie vergessen darf!\n\nMein Tipp: Schreibe deine Fehler auf und wiederhole sie jeden Tag. So lernst du am besten!",
      questions: [
        { question: "Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ú†Ù‡ Ø®Ø·Ø§ÛŒÛŒ Ø±Ø§ Ù…Ø«Ø§ل Ù…ÛŒâ€ŒØ²Ù†Ø¯ Ú©Ù‡ Ø§Ø² ØªØ£Ø«ÛŒØ± Ø²Ø¨Ø§Ù† Ù…Ø§Ø¯Ø±ÛŒ Ù…ÛŒâ€ŒØ¢ÛŒØ¯ØŸ", answer: "Ú¯ÙØªÙ† لIch habe 25 Jahreل Ø¨Ù‡ Ø¬Ø§ÛŒ لIch bin 25 Jahre altل â€” Ú†ÙˆÙ† Ø¯Ø± ÙØ§Ø±Ø³ÛŒ ÙØ¹ل Ø¯Ø§Ø´ØªÙ† Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯." },
        { question: "Ú†Ø±Ø§ ÙØ±Ø§Ù…ÙˆØ´ Ú©Ø±Ø¯Ù† Ø¢Ø±ØªÛŒÚ©ل Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ù…Ø´Ú©لâ€ŒØ³Ø§Ø² Ø§Ø³ØªØŸ", answer: "Ú†ÙˆÙ† Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ù‡Ù…ÛŒØ´Ù‡ Ø¨Ø§ÛŒØ¯ Ø¢Ø±ØªÛŒÚ©ل (der/die/das) Ù‚Ø¨ل Ø§Ø³Ù… Ø¨Ø§Ø´Ø¯. Ø¨Ø¯ÙˆÙ† Ø¢Ø±ØªÛŒÚ©ل Ø¬Ù…لÙ‡ Ø§Ø´ØªØ¨Ø§Ù‡ Ø¨Ù‡ Ù†Ø¸Ø± Ù…ÛŒâ€ŒØ±Ø³Ø¯." },
        { question: "Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡ Ú†Ù‡ ØªÙˆØµÛŒÙ‡â€ŒØ§ÛŒ Ø¨Ø±Ø§ÛŒ Ø±ÙØ¹ Ø®Ø·Ø§Ù‡Ø§ Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ØŸ", answer: "Ø§Ùˆ ØªÙˆØµÛŒÙ‡ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ø§Ø´ØªØ¨Ø§Ù‡Ø§Øª Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯ Ùˆ Ù‡Ø± Ø±ÙˆØ² Ù…Ø±ÙˆØ± Ú©Ù†ÛŒØ¯." }
      ]
    }
  ],

  writing: [
    {
      title: "Ø§Ø´ØªØ¨Ø§Ù‡Ø§Øª Ø®ÙˆØ¯ Ø±Ø§ Ø´Ù†Ø§Ø³Ø§ÛŒÛŒ Ùˆ Ø§ØµلØ§Ø­ Ú©Ù†ÛŒØ¯",
      prompt: "Ûµ Ø¬Ù…لÙ‡ Ø²ÛŒØ± Ù‡Ø± Ú©Ø¯Ø§Ù… ÛŒÚ© Ø§Ø´ØªØ¨Ø§Ù‡ Ø¯Ø§Ø±Ù†Ø¯. Ø§Ø´ØªØ¨Ø§Ù‡ Ø±Ø§ Ù¾ÛŒØ¯Ø§ Ú©Ù†ÛŒØ¯ Ùˆ Ø¬Ù…لÙ‡ Ø¯Ø±Ø³Øª Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.",
      steps: [
        { title: "Ø¬Ù…لÙ‡ Û±", text: "Ich habe 30 Jahre alt. (Ú†Ù‡ Ø§Ø´ØªØ¨Ø§Ù‡ÛŒ Ø¯Ø§Ø±Ø¯ØŸ)", example: { de: "Ich bin 30 Jahre alt.", fa: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ø³Ù† Ø¨Ø§ ÙØ¹ل sein Ø§Ø³Øª." } },
        { title: "Ø¬Ù…لÙ‡ Û²", text: "Ich bin Hunger. (Ú†Ù‡ Ø§Ø´ØªØ¨Ø§Ù‡ÛŒ Ø¯Ø§Ø±Ø¯ØŸ)", example: { de: "Ich habe Hunger.", fa: "Ú¯Ø±Ø³Ù†Ú¯ÛŒ Ø¨Ø§ ÙØ¹ل haben Ø§Ø³Øª." } },
        { title: "Ø¬Ù…لÙ‡ Û³", text: "Ich weiÃŸ, dass er kommt morgen. (Ú†Ù‡ Ø§Ø´ØªØ¨Ø§Ù‡ÛŒ Ø¯Ø§Ø±Ø¯ØŸ)", example: { de: "Ich weiÃŸ, dass er morgen kommt.", fa: "ÙØ¹ل Ø¨Ù‡ Ø§Ù†ØªÙ‡Ø§ÛŒ Ø¬Ù…لÙ‡ ÙˆØ§Ø¨Ø³ØªÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯." } },
        { title: "Ø¬Ù…لÙ‡ Û´", text: "Ich aufstehe um 7 Uhr. (Ú†Ù‡ Ø§Ø´ØªØ¨Ø§Ù‡ÛŒ Ø¯Ø§Ø±Ø¯ØŸ)", example: { de: "Ich stehe um 7 Uhr auf.", fa: "Ù¾ÛŒØ´ÙˆÙ†Ø¯ ÙØ¹ل Ø¬Ø¯Ø§Ø´Ø¯Ù†ÛŒ Ø¨Ù‡ Ø¢Ø®Ø± Ø¬Ù…لÙ‡ Ù…ÛŒâ€ŒØ±ÙˆØ¯." } },
        { title: "Ø¬Ù…لÙ‡ Ûµ", text: "Es regnet, trotzdem ich gehe nicht raus. (Ú†Ù‡ Ø§Ø´ØªØ¨Ø§Ù‡ÛŒ Ø¯Ø§Ø±Ø¯ØŸ)", example: { de: "Es regnet, trotzdem gehe ich nicht raus.", fa: "Ø¨Ø¹Ø¯ Ø§Ø² trotzdem ÙØ¹ل Ø¨لØ§ÙØ§ØµلÙ‡ Ù…ÛŒâ€ŒØ¢ÛŒØ¯." } }
      ],
      modelAnswer: "1. Ich bin 30 Jahre alt. 2. Ich habe Hunger. 3. Ich weiÃŸ, dass er morgen kommt. 4. Ich stehe um 7 Uhr auf. 5. Es regnet, trotzdem gehe ich nicht raus."
    }
  ],

  listening: [
    {
      title: "Û±. ÙˆÛŒØ¯ÛŒÙˆÛŒ Ø¢Ù…ÙˆØ²Ø´ÛŒ Ø§Ø´ØªØ¨Ø§Ù‡Ø§Øª Ø±Ø§ÛŒØ¬",
      source: "Deutschlernen â€” HÃ¤ufige Fehler vermeiden",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "Û±. ÙˆÛŒØ¯ÛŒÙˆ Ø±Ø§ Ø¨Ø¨ÛŒÙ†ÛŒØ¯ Ùˆ Ø§Ø´ØªØ¨Ø§Ù‡Ø§Øª Ø±Ø§ÛŒØ¬ Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯.\nÛ². Ù‡Ø± Ø§Ø´ØªØ¨Ø§Ù‡ Ø±Ø§ Û³ Ø¨Ø§Ø± Ø¨Ø§ Ø¬Ù…لÙ‡ Ø¯Ø±Ø³Øª ØªÚ©Ø±Ø§Ø± Ú©Ù†ÛŒØ¯.\nÛ³. Ø§Ø² Ù‡Ø± Ø§Ø´ØªØ¨Ø§Ù‡ ÛŒÚ© Ù…Ø«Ø§ل Ø¬Ø¯ÛŒØ¯ Ø¨Ø±Ø§ÛŒ Ø®ÙˆØ¯ØªØ§Ù† Ø¨Ø³Ø§Ø²ÛŒØ¯."
    }
  ],

  speaking: [
    {
      title: "ØªÙ…Ø±ÛŒÙ† Ø§ØµلØ§Ø­ Ø®Ø·Ø§",
      pattern: "âŒ Ich habe 25 Jahre.\nâœ… Ich bin 25 Jahre alt.\n\nâŒ Ich bin Hunger.\nâœ… Ich habe Hunger.",
      exercise: "Ù‡Ø± Ú©Ø¯Ø§Ù… Ø§Ø² Û±Û° Ø®Ø·Ø§ÛŒ Ø§Ù…Ø±ÙˆØ² Ø±Ø§ Ø¨Ø§ ØµØ¯Ø§ÛŒ Ø¨لÙ†Ø¯ Ø¨Ø®ÙˆØ§Ù†ÛŒØ¯: Ø§Ùˆل Ø¬Ù…لÙ‡ Ø§Ø´ØªØ¨Ø§Ù‡ØŒ Ø¨Ø¹Ø¯ Ø¬Ù…لÙ‡ Ø¯Ø±Ø³Øª. Ø§ÛŒÙ† ØªÙ…Ø±ÛŒÙ† Ø¨Ù‡ Ù…ØºØ² Ø´Ù…Ø§ Ú©Ù…Ú© Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ø§لÚ¯ÙˆÛŒ ØµØ­ÛŒØ­ Ø±Ø§ Ø¬Ø§ÛŒÚ¯Ø²ÛŒÙ† Ú©Ù†Ø¯."
    }
  ],

  cultureTip: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: Ø¢لÙ…Ø§Ù†ÛŒâ€ŒÙ‡Ø§ Ù…Ø¹Ù…ÙˆلØ§Ù‹ ÙˆÙ‚ØªÛŒ Ù…ÛŒâ€ŒÙÙ‡Ù…Ù†Ø¯ Ø´Ù…Ø§ Ø¯Ø± Ø­Ø§ل ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù‡Ø³ØªÛŒØ¯ØŒ Ø§Ø´ØªØ¨Ø§Ù‡Ø§Øª Ø´Ù…Ø§ Ø±Ø§ Ù†Ø§Ø¯ÛŒØ¯Ù‡ Ù…ÛŒâ€ŒÚ¯ÛŒØ±Ù†Ø¯ Ùˆ Ø³Ø¹ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯ Ù…Ù†Ø¸ÙˆØ±ØªØ§Ù† Ø±Ø§ Ø¨ÙÙ‡Ù…Ù†Ø¯. Ù¾Ø³ Ø§Ø² Ø§Ø´ØªØ¨Ø§Ù‡ Ú©Ø±Ø¯Ù† Ù†ØªØ±Ø³ÛŒØ¯! Ø§Ù…Ø§ Ø§Ú¯Ø± Ù‡Ù…Ø§Ù† Ø§Ø´ØªØ¨Ø§Ù‡ Ø±Ø§ Ø¨Ø§Ø±Ù‡Ø§ ØªÚ©Ø±Ø§Ø± Ú©Ù†ÛŒØ¯ØŒ Ù…Ù…Ú©Ù† Ø§Ø³Øª Ù†ØªÙˆØ§Ù†ÛŒØ¯ Ù…Ù†Ø¸ÙˆØ±ØªØ§Ù† Ø±Ø§ Ø¨Ø±Ø³Ø§Ù†ÛŒØ¯. Ø¨Ù‡ØªØ±ÛŒÙ† Ø±ÙˆØ´: Ù‡Ø± Ù‡ÙØªÙ‡ Û³ Ø§Ø´ØªØ¨Ø§Ù‡ Ø±Ø§ÛŒØ¬ Ø®ÙˆØ¯ Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯ Ùˆ Ø±ÙˆÛŒ Ø¢Ù†â€ŒÙ‡Ø§ Ú©Ø§Ø± Ú©Ù†ÛŒØ¯.",

  examData: {
    questions: [
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich habe 20 Jahre alt.", "Ich bin 20 Jahre alt.", "Ich bin 20 Jahre.", "Ich habe 20 Jahre."], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ÙØ¹ل Ø¬Ø¯Ø§Ø´Ø¯Ù†ÛŒ Ø±Ø§ Ø¯Ø±Ø³Øª Ù†Ø´Ø§Ù† Ù…ÛŒâ€ŒØ¯Ù‡Ø¯ØŸ", options: ["Ich fernsehe jeden Tag.", "Ich sehe jeden Tag fern.", "Ich sehe fern jeden Tag.", "Ich jeden Tag sehe fern."], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ Ø¨Ø¹Ø¯ Ø§Ø² weil ÙØ¹ل Ø±Ø§ Ø¯Ø±Ø³Øª Ù‚Ø±Ø§Ø± Ø¯Ø§Ø¯Ù‡ØŸ", options: ["Ich bleibe zu Hause, weil es regnet stark.", "Ich bleibe zu Hause, weil stark es regnet.", "Ich bleibe zu Hause, weil regnet es stark.", "Ich bleibe zu Hause, weil es stark regnet."], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ trotzdem Ø±Ø§ Ø¯Ø±Ø³Øª Ø¨Ù‡ Ú©Ø§Ø± Ø¨Ø±Ø¯Ù‡ØŸ", options: ["Es ist kalt, trotzdem ich trinke Eis.", "Es ist kalt, trotzdem trinke ich Eis.", "Es ist kalt, trotzdem Eis ich trinke.", "Es ist kalt, trotzdem ich Eis trinke."], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ Perfekt Ø±Ø§ Ø¯Ø±Ø³Øª Ø³Ø§Ø®ØªÙ‡ØŸ", options: ["Ich habe spielen FuÃŸball.", "Ich habe gespielt FuÃŸball.", "Ich habe FuÃŸball gespielt.", "Ich FuÃŸball habe gespielt."], answer: 2 },
      { question: "Â«Ich habe DurstÂ» ÛŒØ¹Ù†ÛŒ...", options: ["Ù…Ù† Ú¯Ø±Ø³Ù†Ù‡â€ŒØ§Ù…", "Ù…Ù† ØªØ´Ù†Ù‡â€ŒØ§Ù…", "Ù…Ù† Ø®Ø³ØªÙ‡â€ŒØ§Ù…", "Ù…Ù† Ù…Ø±ÛŒØ¶Ù…"], answer: 1 },
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ Ø¢Ø±ØªÛŒÚ©ل Ø±Ø§ ÙØ±Ø§Ù…ÙˆØ´ Ù†Ú©Ø±Ø¯Ù‡ØŸ", options: ["Ich habe Auto.", "Ich habe ein Auto.", "Ich habe Auto ein.", "Auto ich habe."], answer: 1 },
      { question: "Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† ÙˆØ¬ÙˆØ¯ ÛŒÚ© Ù¾Ø§Ø±Ú© Ø¯Ø± Ø´Ù‡Ø±ØŒ Ú©Ø¯Ø§Ù… Ø¯Ø±Ø³Øª Ø§Ø³ØªØŸ", options: ["Es ist einen Park in der Stadt.", "Es gibt einen Park in der Stadt.", "Es gibt ein Park in der Stadt.", "Es ist ein Park in der Stadt."], answer: 1 }
    ]
  }
};
