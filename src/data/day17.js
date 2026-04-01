export const day17Data = {
  title: "Ø±ÙˆØ² Û±Û·: Ù…Ø±ÙˆØ± Ø¬Ø§Ù…Ø¹ A1 - Ø¢Ø²Ù…ÙˆÙ† Ø¢Ø²Ù…Ø§ÛŒØ´ÛŒ",
  objective: "Ù…Ø±ÙˆØ± Ú©Ø§Ù…ل ØªÙ…Ø§Ù… Ù…Ø¨Ø§Ø­Ø« A1 Ùˆ Ø¢Ù…Ø§Ø¯Ú¯ÛŒ Ø¨Ø±Ø§ÛŒ Ø¢Ø²Ù…ÙˆÙ† A1",
  grammarData: {
    subtitle: "Ù…Ø±ÙˆØ± Ø¬Ø§Ù…Ø¹ Ú¯Ø±Ø§Ù…Ø± A1",
    content: [
      {
        type: "text",
        title: "Ù…Ø±ÙˆØ± Artikel Ùˆ Ø¬Ù†Ø³ÛŒØª Ø§Ø³Ù…",
        text: "Ø¯Ø± Ø¢لÙ…Ø§Ù†ÛŒ Ø³Ù‡ Ø¬Ù†Ø³ÛŒØª ÙˆØ¬ÙˆØ¯ Ø¯Ø§Ø±Ø¯: Ù…Ø°Ú©Ø± (der)ØŒ Ù…Ø¤Ù†Ø« (die) Ùˆ Ø®Ù†Ø«ÛŒ (das). Ù‚ÙˆØ§Ø¹Ø¯ Ú©لÛŒ: Ø§Ø³Ø§Ù…ÛŒ Ø¨Ø§ -ung, -heit, -keit, -schaft Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ù…Ø¤Ù†Ø« Ù‡Ø³ØªÙ†Ø¯ (die Zeitung). Ø§Ø³Ø§Ù…ÛŒ Ø¨Ø§ -chen, -lein Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ø®Ù†Ø«ÛŒ Ù‡Ø³ØªÙ†Ø¯ (das MÃ¤dchen). Ø§Ø³Ø§Ù…ÛŒ Ø¨Ø§ -er Ø¨Ø±Ø§ÛŒ Ø§Ø´Ø®Ø§Øµ Ù…Ø¹Ù…ÙˆلØ§Ù‹ Ù…Ø°Ú©Ø± Ù‡Ø³ØªÙ†Ø¯ (der Lehrer)."
      },
      {
        type: "table",
        title: "Ù…Ø±ÙˆØ± Artikel",
        rows: [
          { de: "der (Ù…Ø°Ú©Ø±)", fa: "der Mann, der Tisch, der Apfel" },
          { de: "die (Ù…Ø¤Ù†Ø«)", fa: "die Frau, die Lampe, die Banane" },
          { de: "das (Ø®Ù†Ø«ÛŒ)", fa: "das Kind, das Buch, das Haus" },
          { de: "die (Ø¬Ù…Ø¹)", fa: "die MÃ¤nner, die Frauen, die Kinder" }
        ]
      },
      {
        type: "text",
        title: "Ù…Ø±ÙˆØ± ÙØ¹ل sein Ùˆ haben",
        text: "sein (Ø¨ÙˆØ¯Ù†): ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. haben (Ø¯Ø§Ø´ØªÙ†): ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben. Ø§ÛŒÙ† Ø¯Ùˆ ÙØ¹ل Ù…Ù‡Ù…â€ŒØªØ±ÛŒÙ† Ø§ÙØ¹Ø§ل Ø¢لÙ…Ø§Ù†ÛŒ Ù‡Ø³ØªÙ†Ø¯."
      },
      {
        type: "table",
        title: "Ù…Ø±ÙˆØ± Ø¶Ù…ÛŒØ±Ù‡Ø§",
        rows: [
          { de: "ich", fa: "Ù…Ù†" },
          { de: "du", fa: "ØªÙˆ" },
          { de: "er/sie/es", fa: "Ø§Ùˆ (Ù…Ø°Ú©Ø±/Ù…Ø¤Ù†Ø«/Ø®Ù†Ø«ÛŒ)" },
          { de: "wir", fa: "Ù…Ø§" },
          { de: "ihr", fa: "Ø´Ù…Ø§ (Ø¬Ù…Ø¹ Ø®ÙˆØ¯Ù…Ø§Ù†ÛŒ)" },
          { de: "sie/Sie", fa: "Ø¢Ù†Ù‡Ø§/Ø´Ù…Ø§ (Ø±Ø³Ù…ÛŒ)" }
        ]
      },
      {
        type: "text",
        title: "Ù…Ø±ÙˆØ± Ø§Ø¹Ø¯Ø§Ø¯",
        text: "ØµÙØ± ØªØ§ Ø¨ÛŒØ³Øª: null, eins, zwei, drei, vier, fÃ¼nf, sechs, sieben, acht, neun, zehn, elf, zwÃ¶lf, dreizehn, vierzehn, fÃ¼nfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig. Ø³ÛŒ: dreiÃŸig. Ú†Ù‡ل: vierzig. Ù¾Ù†Ø¬zig: fÃ¼nfzig."
      },
      {
        type: "alert",
        title: "Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…: Ù†ÙÛŒ Ø¨Ø§ nicht Ùˆ kein",
        text: "nicht Ø¨Ø±Ø§ÛŒ Ù†ÙÛŒ ÙØ¹لØŒ ØµÙØª Ùˆ Ù‚ÛŒØ¯ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: Ich spreche nicht Deutsch (Ù…Ù† Ø¢لÙ…Ø§Ù†ÛŒ ØµØ­Ø¨Øª Ù†Ù…ÛŒâ€ŒÚ©Ù†Ù…). kein Ø¨Ø±Ø§ÛŒ Ù†ÙÛŒ Ø§Ø³Ù… Ø¨Ø¯ÙˆÙ† artikel Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯: Ich habe kein Auto (Ù…Ù† Ù…Ø§Ø´ÛŒÙ† Ù†Ø¯Ø§Ø±Ù…)."
      },
      {
        type: "text",
        title: "Ù…Ø±ÙˆØ± Ø§ÙØ¹Ø§ل Ø¨Ø§Ù‚Ø§Ø¹Ø¯Ù‡",
        text: "Ø§ÙØ¹Ø§ل Ø¨Ø§Ù‚Ø§Ø¹Ø¯Ù‡ Ø¯Ø± Ø­Ø§ل Ø­Ø§Ø¶Ø±: machen (ich mache, du machst, er macht, wir machen, ihr macht, sie machen). Ù‚Ø§Ø¹Ø¯Ù‡: Ø­Ø°Ù -en Ùˆ Ø§Ø¶Ø§ÙÙ‡ Ù¾Ø³ÙˆÙ†Ø¯ Ù…Ù†Ø§Ø³Ø¨: -e, -st, -t, -en, -t, -en."
      },
      {
        type: "examples",
        title: "Ù…Ø±ÙˆØ± Ø­Ø±ÙˆÙ Ø§Ø¶Ø§ÙÙ‡",
        items: [
          { de: "mit + Dativ", fa: "Ø¨Ø§: mit meinem Freund (Ø¨Ø§ Ø¯ÙˆØ³ØªÙ…)" },
          { de: "fÃ¼r + Akkusativ", fa: "Ø¨Ø±Ø§ÛŒ: fÃ¼r meine Mutter (Ø¨Ø±Ø§ÛŒ Ù…Ø§Ø¯Ø±Ù…)" },
          { de: "aus + Dativ", fa: "Ø§Ø²: aus Deutschland (Ø§Ø² Ø¢لÙ…Ø§Ù†)" },
          { de: "in + Dativ/Akkusativ", fa: "Ø¯Ø±/Ø¨Ù‡: in der Schule (Ø¯Ø± Ù…Ø¯Ø±Ø³Ù‡) / in die Schule (Ø¨Ù‡ Ù…Ø¯Ø±Ø³Ù‡)" },
          { de: "an + Dativ/Akkusativ", fa: "Ø¯Ø±/Ø¨Ù‡: an der Wand (Ø±ÙˆÛŒ Ø¯ÛŒÙˆØ§Ø±) / an die Wand (Ø¨Ù‡ Ø¯ÛŒÙˆØ§Ø±)" },
          { de: "auf + Dativ/Akkusativ", fa: "Ø±ÙˆÛŒ: auf dem Tisch (Ø±ÙˆÛŒ Ù…ÛŒØ²) / auf den Tisch (Ø¨Ù‡ Ø±ÙˆÛŒ Ù…ÛŒØ²)" }
        ]
      },
      {
        type: "text",
        title: "Ù…Ø±ÙˆØ± Akkusativ",
        text: "Ø¯Ø± AkkusativØŒ artikel Ù…Ø°Ú©Ø± ØªØºÛŒÛŒØ± Ù…ÛŒâ€ŒÚ©Ù†Ø¯: der â†’ den, ein â†’ einen. Ù…Ø«Ø§ل: Ich sehe den Mann (Ù…Ù† Ù…Ø±Ø¯ Ø±Ø§ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ù…). Ich habe einen Bruder (Ù…Ù† ÛŒÚ© Ø¨Ø±Ø§Ø¯Ø± Ø¯Ø§Ø±Ù…). Ù…Ø¤Ù†Ø« Ùˆ Ø®Ù†Ø«ÛŒ ØªØºÛŒÛŒØ± Ù†Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯."
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ† Ø¬Ø§Ù…Ø¹ A1",
        questions: [
          {
            question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ",
            questionDe: "Welcher Satz ist korrekt?",
            options: [
              { text: "Ich bin mÃ¼de.", isCorrect: true },
              { text: "Ich habe mÃ¼de.", isCorrect: false },
              { text: "Ich ist mÃ¼de.", isCorrect: false },
              { text: "Ich sein mÃ¼de.", isCorrect: false }
            ],
            explanation: "Ø§Ø² ÙØ¹ل sein Ø¨Ø±Ø§ÛŒ ØªÙˆØµÛŒÙ Ø­Ø§لØª Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          },
          {
            question: "Ù†ÙÛŒ لÙ…Ù† Ù…Ø§Ø´ÛŒÙ† Ù†Ø¯Ø§Ø±Ù…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man لI donلt have a carل?",
            options: [
              { text: "Ich habe kein Auto.", isCorrect: true },
              { text: "Ich habe nicht Auto.", isCorrect: false },
              { text: "Ich nicht habe Auto.", isCorrect: false },
              { text: "Ich bin kein Auto.", isCorrect: false }
            ],
            explanation: "Ø§Ø² kein Ø¨Ø±Ø§ÛŒ Ù†ÙÛŒ Ø§Ø³Ù… Ø¨Ø¯ÙˆÙ† artikel Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          },
          {
            question: "لØ¨Ø§ Ø¯ÙˆØ³ØªÙ…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ",
            questionDe: "Wie sagt man لwith my friendل?",
            options: [
              { text: "mit meinem Freund", isCorrect: true },
              { text: "fÃ¼r meinen Freund", isCorrect: false },
              { text: "aus meinem Freund", isCorrect: false },
              { text: "von meinem Freund", isCorrect: false }
            ],
            explanation: "mit Ù‡Ù…ÛŒØ´Ù‡ Ø¨Ø§ Dativ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "ØªÚ©Ù…ÛŒل Ø¬Ù…لØ§Øª: Ù…Ø±ÙˆØ± A1",
        instruction: "Ø¬Ø§ÛŒ Ø®Ø§لÛŒ Ø±Ø§ Ø¨Ø§ Ú©لÙ…Ù‡ Ù…Ù†Ø§Ø³Ø¨ Ù¾Ø± Ú©Ù†ÛŒØ¯.",
        blanks: [
          { sentence: "Ich ___ Student.", answer: "bin", hint: "ÙØ¹ل sein Ø¨Ø±Ø§ÛŒ ich" },
          { sentence: "Er ___ ein Buch.", answer: "hat", hint: "ÙØ¹ل haben Ø¨Ø±Ø§ÛŒ er" },
          { sentence: "Ich sehe ___ Mann. (Akkusativ)", answer: "den", hint: "der â†’ den Ø¯Ø± Akkusativ" },
          { sentence: "Ich habe ___ Auto.", answer: "kein", hint: "Ù†ÙÛŒ Ø§Ø³Ù… Ø¨Ø¯ÙˆÙ† artikel" },
          { sentence: "Sie kommt ___ Deutschland.", answer: "aus", hint: "Ø§Ø² Ø¢لÙ…Ø§Ù†" },
          { sentence: "Ich gehe ___ Schule.", answer: "in die", hint: "Ø¨Ù‡ Ù…Ø¯Ø±Ø³Ù‡" },
          { sentence: "Er arbeitet ___ einer Firma.", answer: "bei", hint: "Ø¯Ø± ÛŒÚ© Ø´Ø±Ú©Øª" },
          { sentence: "Wir fahren ___ Zug.", answer: "mit dem", hint: "Ø¨Ø§ Ù‚Ø·Ø§Ø±" },
          { sentence: "Das ist ___ Tisch.", answer: "ein", hint: "ÛŒÚ© Ù…ÛŒØ²" },
          { sentence: "Ich komme ___ Iran.", answer: "aus dem", hint: "Ø§Ø² Ø§ÛŒØ±Ø§Ù†" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "Ù…Ø±ÙˆØ± ÙˆØ§Ú˜Ú¯Ø§Ù† A1",
        words: [
          { de: "der Mensch", fa: "Ø§Ù†Ø³Ø§Ù†", article: "der", plural: "die Menschen", examples: [{ de: "Die Menschen sind nett.", fa: "Ù…Ø±Ø¯Ù… Ù…Ù‡Ø±Ø¨Ø§Ù† Ù‡Ø³ØªÙ†Ø¯." }] },
          { de: "das Land", fa: "Ú©Ø´ÙˆØ±", article: "das", plural: "die LÃ¤nder", examples: [{ de: "Deutschland ist ein schÃ¶nes Land.", fa: "Ø¢لÙ…Ø§Ù† Ú©Ø´ÙˆØ± Ø²ÛŒØ¨Ø§ÛŒÛŒ Ø§Ø³Øª." }] },
          { de: "die Stadt", fa: "Ø´Ù‡Ø±", article: "die", plural: "die StÃ¤dte", examples: [{ de: "Berlin ist eine groÃŸe Stadt.", fa: "Ø¨Ø±لÛŒÙ† Ø´Ù‡Ø± Ø¨Ø²Ø±Ú¯ÛŒ Ø§Ø³Øª." }] },
          { de: "die Sprache", fa: "Ø²Ø¨Ø§Ù†", article: "die", plural: "die Sprachen", examples: [{ de: "Deutsch ist eine schwere Sprache.", fa: "Ø¢لÙ…Ø§Ù†ÛŒ Ø²Ø¨Ø§Ù† Ø³Ø®ØªÛŒ Ø§Ø³Øª." }] },
          { de: "das Geld", fa: "Ù¾Ùˆل", article: "das", plural: "-", examples: [{ de: "Ich habe kein Geld.", fa: "Ù…Ù† Ù¾Ùˆل Ù†Ø¯Ø§Ø±Ù…." }] },
          { de: "die Arbeit", fa: "Ú©Ø§Ø±", article: "die", plural: "die Arbeiten", examples: [{ de: "Die Arbeit ist wichtig.", fa: "Ú©Ø§Ø± Ù…Ù‡Ù… Ø§Ø³Øª." }] },
          { de: "das Essen", fa: "ØºØ°Ø§", article: "das", plural: "die Essen", examples: [{ de: "Das Essen ist lecker.", fa: "ØºØ°Ø§ Ø®ÙˆØ´Ù…Ø²Ù‡ Ø§Ø³Øª." }] },
          { de: "das Wasser", fa: "Ø¢Ø¨", article: "das", plural: "-", examples: [{ de: "Ich trinke Wasser.", fa: "Ù…Ù† Ø¢Ø¨ Ù…ÛŒâ€ŒÙ†ÙˆØ´Ù…." }] },
          { de: "das Kind", fa: "Ø¨Ú†Ù‡", article: "das", plural: "die Kinder", examples: [{ de: "Das Kind spielt.", fa: "Ø¨Ú†Ù‡ Ø¨Ø§Ø²ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ø¯." }] },
          { de: "die Zeit", fa: "ÙˆÙ‚Øª", article: "die", plural: "die Zeiten", examples: [{ de: "Ich habe keine Zeit.", fa: "Ù…Ù† ÙˆÙ‚Øª Ù†Ø¯Ø§Ø±Ù…." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Ich heiÃŸe Maria und komme aus Ã–sterreich. Ich bin 25 Jahre alt und wohne in Wien. Ich studiere Germanistik an der UniversitÃ¤t. Ich spreche Deutsch, Englisch und ein bisschen FranzÃ¶sisch. Meine Familie ist klein: Ich habe einen Bruder und eine Schwester. Mein Vater ist Arzt und meine Mutter ist Lehrerin. In meiner Freizeit lese ich gern und gehe ins Kino. Am Wochenende treffe ich mich mit meinen Freunden.",
      questions: [
        { question: "Ù…Ø§Ø±ÛŒØ§ Ø§Ù‡ل Ú©Ø¬Ø§Ø³ØªØŸ", answer: "Ø§Ùˆ Ø§Ù‡ل Ø§ØªØ±ÛŒØ´ Ø§Ø³Øª." },
        { question: "Ø§Ùˆ Ú†Ù†Ø¯ Ø³Ø§ل Ø¯Ø§Ø±Ø¯ØŸ", answer: "Ø§Ùˆ Û²Ûµ Ø³Ø§ل Ø¯Ø§Ø±Ø¯." },
        { question: "Ø§Ùˆ Ú†Ù‡ Ø²Ø¨Ø§Ù†â€ŒÙ‡Ø§ÛŒÛŒ ØµØ­Ø¨Øª Ù…ÛŒâ€ŒÚ©Ù†Ø¯ØŸ", answer: "Ø§Ùˆ Ø¢لÙ…Ø§Ù†ÛŒØŒ Ø§Ù†Ú¯لÛŒØ³ÛŒ Ùˆ Ú©Ù…ÛŒ ÙØ±Ø§Ù†Ø³ÙˆÛŒ ØµØ­Ø¨Øª Ù…ÛŒâ€ŒÚ©Ù†Ø¯." },
        { question: "Ø´Øºل Ù¾Ø¯Ø± Ùˆ Ù…Ø§Ø¯Ø±Ø´ Ú†ÛŒØ³ØªØŸ", answer: "Ù¾Ø¯Ø±Ø´ Ø¯Ú©ØªØ± Ùˆ Ù…Ø§Ø¯Ø±Ø´ Ù…Ø¹لÙ… Ø§Ø³Øª." }
      ]
    }
  ],
  writing: [
    {
      title: "Ù…ÙˆÙ†ÙˆلÙˆÚ¯ A1: Ø®ÙˆØ¯ Ø±Ø§ Ù…Ø¹Ø±ÙÛŒ Ú©Ù†ÛŒØ¯",
      prompt: "ÛŒÚ© Ù…ØªÙ† Û±Û°Û° Ú©لÙ…Ù‡â€ŒØ§ÛŒ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø®ÙˆØ¯ØªØ§Ù† Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯: Ù†Ø§Ù…ØŒ Ø³Ù†ØŒ Ù…لÛŒØªØŒ Ø´Øºل/ØªØ­ØµÛŒلØŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ØŒ Ø³Ø±Ú¯Ø±Ù…ÛŒâ€ŒÙ‡Ø§ Ùˆ Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡.",
      steps: [
        { title: "Ù‚Ø¯Ù… Ø§Ùˆل: Ù…Ø¹Ø±ÙÛŒ", text: "Ù†Ø§Ù…ØŒ Ø³Ù† Ùˆ Ù…لÛŒØª.", example: { de: "Ich heiÃŸe Ali und bin 30 Jahre alt. Ich komme aus dem Iran.", fa: "Ù…Ù† Ø¹لÛŒ Ù†Ø§Ù… Ø¯Ø§Ø±Ù… Ùˆ Û³Û° Ø³Ø§لÙ‡ Ù‡Ø³ØªÙ…. Ù…Ù† Ø§Ø² Ø§ÛŒØ±Ø§Ù† Ù‡Ø³ØªÙ…." } },
        { title: "Ù‚Ø¯Ù… Ø¯ÙˆÙ…: Ø´Øºل Ùˆ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡", text: "Ø´Øºل Ùˆ Ø§Ø¹Ø¶Ø§ÛŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡.", example: { de: "Ich bin Ingenieur. Ich habe eine kleine Familie.", fa: "Ù…Ù† Ù…Ù‡Ù†Ø¯Ø³ Ù‡Ø³ØªÙ…. Ù…Ù† ÛŒÚ© Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ Ú©ÙˆÚ†Ú© Ø¯Ø§Ø±Ù…." } },
        { title: "Ù‚Ø¯Ù… Ø³ÙˆÙ…: Ø³Ø±Ú¯Ø±Ù…ÛŒ Ùˆ Ø¨Ø±Ù†Ø§Ù…Ù‡", text: "Ø³Ø±Ú¯Ø±Ù…ÛŒâ€ŒÙ‡Ø§ Ùˆ Ø¨Ø±Ù†Ø§Ù…Ù‡ Ø±ÙˆØ²Ø§Ù†Ù‡.", example: { de: "In meiner Freizeit lese ich gern.", fa: "Ø¯Ø± Ø§ÙˆÙ‚Ø§Øª ÙØ±Ø§ØºØª Ø¯ÙˆØ³Øª Ø¯Ø§Ø±Ù… Ú©ØªØ§Ø¨ Ø¨Ø®ÙˆØ§Ù†Ù…." } }
      ],
      modelAnswer: "Ich heiÃŸe Ali und bin 30 Jahre alt. Ich komme aus dem Iran und wohne jetzt in Berlin. Ich bin Ingenieur und arbeite in einer Firma. Meine Familie ist klein. Ich habe einen Bruder und eine Schwester. Mein Vater ist Arzt und meine Mutter ist Lehrerin. Ich spreche Persisch, Deutsch und Englisch. In meiner Freizeit lese ich gern und gehe ins Fitnessstudio. Am Wochenende treffe ich mich mit meinen Freunden. Ich stehe um 7 Uhr auf und gehe um 23 Uhr ins Bett."
    }
  ],
  listening: [
    {
      title: "Ú¯ÙˆØ´ Ø¯Ø§Ø¯Ù† Ø¨Ù‡ Ù…Ø¹Ø±ÙÛŒ A1",
      source: "Deutsch lernen - Sich vorstellen A1",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructions: "Ø¨Ù‡ Ù…Ø¹Ø±ÙÛŒ ÛŒÚ© Ù†ÙØ± Ú¯ÙˆØ´ Ø¯Ù‡ÛŒØ¯ Ùˆ Ø§Ø·لØ§Ø¹Ø§Øª (Ù†Ø§Ù…ØŒ Ø³Ù†ØŒ Ù…لÛŒØªØŒ Ø´ØºلØŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡) Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
    }
  ],
  speaking: [
    {
      title: "Ù…ÙˆÙ†ÙˆلÙˆÚ¯ A1: Ù…Ø¹Ø±ÙÛŒ Ú©Ø§Ù…ل",
      pattern: "Ich heiÃŸe [Name]. Ich bin [Alter] Jahre alt und komme aus [Land]. Ich wohne in [Stadt]. Ich bin [Beruf]. Meine Familie hat [Anzahl] Personen. In meiner Freizeit [Hobby]. Am [Tag] [AktivitÃ¤t].",
      exercise: "Ø®ÙˆØ¯ Ø±Ø§ Ú©Ø§Ù…ل Ù…Ø¹Ø±ÙÛŒ Ú©Ù†ÛŒØ¯: Ù†Ø§Ù…ØŒ Ø³Ù†ØŒ Ù…لÛŒØªØŒ Ø´Ù‡Ø±ØŒ Ø´ØºلØŒ Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡ØŒ Ø³Ø±Ú¯Ø±Ù…ÛŒ Ùˆ Ø¨Ø±Ù†Ø§Ù…Ù‡ Ù‡ÙØªÚ¯ÛŒ."
    }
  ],
  cultureTip: "Ø¢Ø²Ù…ÙˆÙ† A1 Ú¯ÙˆØªÙ‡ Ø´Ø§Ù…ل Ú†Ù‡Ø§Ø± Ø¨Ø®Ø´ Ø§Ø³Øª: Ø®ÙˆØ§Ù†Ø¯Ù† (Lesen)ØŒ Ù†ÙˆØ´ØªÙ† (Schreiben)ØŒ Ø´Ù†ÛŒØ¯Ù† (HÃ¶ren) Ùˆ ØµØ­Ø¨Øª Ú©Ø±Ø¯Ù† (Sprechen). Ø¨Ø±Ø§ÛŒ Ù‚Ø¨ÙˆلÛŒ Ø¨Ø§ÛŒØ¯ Ø­Ø¯Ø§Ù‚ل Û¶Û°Ùª Ø§Ù…ØªÛŒØ§Ø² Ø¯Ø± Ù‡Ø± Ø¨Ø®Ø´ Ú©Ø³Ø¨ Ú©Ù†ÛŒØ¯. Ø¢Ù…Ø§Ø¯Ú¯ÛŒ Ø¨Ø±Ø§ÛŒ Ø¢Ø²Ù…ÙˆÙ† Ø´Ø§Ù…ل ØªÙ…Ø±ÛŒÙ† Ù‡Ø± Ú†Ù‡Ø§Ø± Ù…Ù‡Ø§Ø±Øª Ùˆ Ø¢Ø´Ù†Ø§ÛŒÛŒ Ø¨Ø§ ÙØ±Ù…Øª Ø³ÙˆØ§لØ§Øª Ø§Ø³Øª.",
  examData: {
    questions: [
      { question: "Ú©Ø¯Ø§Ù… Ø¬Ù…لÙ‡ ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["Ich bin mÃ¼de.", "Ich habe mÃ¼de.", "Ich ist mÃ¼de.", "Ich sein mÃ¼de."], answer: 0 },
      { question: "Ù†ÙÛŒ لÙ…Ù† Ù…Ø§Ø´ÛŒÙ† Ù†Ø¯Ø§Ø±Ù…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich habe kein Auto.", "Ich habe nicht Auto.", "Ich nicht habe Auto.", "Ich bin kein Auto."], answer: 0 },
      { question: "لØ¨Ø§ Ø¯ÙˆØ³ØªÙ…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["mit meinem Freund", "fÃ¼r meinen Freund", "aus meinem Freund", "von meinem Freund"], answer: 0 },
      { question: "der Ø¯Ø± Akkusativ Ú†Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["den", "dem", "des", "die"], answer: 0 },
      { question: "ÙØ¹ل sein Ø¨Ø±Ø§ÛŒ لduل Ú†ÛŒØ³ØªØŸ", options: ["bist", "bin", "ist", "sind"], answer: 0 },
      { question: "لÙ…Ù† Ø¢لÙ…Ø§Ù†ÛŒ ØµØ­Ø¨Øª Ù†Ù…ÛŒâ€ŒÚ©Ù†Ù…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich spreche nicht Deutsch.", "Ich spreche kein Deutsch.", "Ich nicht spreche Deutsch.", "Ich bin nicht Deutsch."], answer: 0 },
      { question: "Ú©Ø¯Ø§Ù… artikel Ø¨Ø±Ø§ÛŒ das Land ØµØ­ÛŒØ­ Ø§Ø³ØªØŸ", options: ["das", "der", "die", "dem"], answer: 0 },
      { question: "لØ§Ùˆ Ø§Ø² Ø¢لÙ…Ø§Ù† Ù…ÛŒâ€ŒØ¢ÛŒØ¯ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Er kommt aus Deutschland.", "Er kommt von Deutschland.", "Er kommt in Deutschland.", "Er kommt nach Deutschland."], answer: 0 },
      { question: "لÙ…Ù† ÙˆÙ‚Øª Ù†Ø¯Ø§Ø±Ù…ل Ú†Ú¯ÙˆÙ†Ù‡ Ø¨ÛŒØ§Ù† Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ", options: ["Ich habe keine Zeit.", "Ich habe nicht Zeit.", "Ich bin keine Zeit.", "Ich nicht habe Zeit."], answer: 0 },
      { question: "ÙØ¹ل haben Ø¨Ø±Ø§ÛŒ لwirل Ú†ÛŒØ³ØªØŸ", options: ["haben", "hat", "hast", "habt"], answer: 0 }
    ]
  }
};