export const day43Data = {
  title: "Ø±ÙˆØ² Û´Û³: Ø±Ø³Ø§Ù†Ù‡ Ùˆ ØªÚ©Ù†ÙˆÙ„ÙˆÚ˜ÛŒ â€” Ø§ÛŒÙ†ØªØ±Ù†Øª Ùˆ Ø²Ù†Ø¯Ú¯ÛŒ Ø¯ÛŒØ¬ÛŒØªØ§Ù„",
  objective: "Ø¯Ø± Ø§ÛŒÙ† Ø±ÙˆØ² Ø¯Ø±Ø¨Ø§Ø±Ù‡ ØªÚ©Ù†ÙˆÙ„ÙˆÚ˜ÛŒØŒ Ø§ÛŒÙ†ØªØ±Ù†ØªØŒ Ø´Ø¨Ú©Ù‡â€ŒÙ‡Ø§ÛŒ Ø§Ø¬ØªÙ…Ø§Ø¹ÛŒ Ùˆ ØªØ£Ø«ÛŒØ± Ø¢Ù†â€ŒÙ‡Ø§ Ø¨Ø± Ø²Ù†Ø¯Ú¯ÛŒ Ø±ÙˆØ²Ù…Ø±Ù‡ ÛŒØ§Ø¯ Ù…ÛŒâ€ŒÚ¯ÛŒØ±ÛŒØ¯ Ùˆ Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒØ¯ Ù…Ø²Ø§ÛŒØ§ Ùˆ Ù…Ø¹Ø§ÛŒØ¨ Ø±Ø§ Ø¨Ù‡ Ø¢Ù„Ù…Ø§Ù†ÛŒ Ø¨Ø­Ø« Ú©Ù†ÛŒØ¯.",

  grammarData: {
    subtitle: "Ø³Ø§Ø®ØªØ§Ø±Ù‡Ø§ÛŒ Ø¨Ø­Ø« Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ù…Ø²Ø§ÛŒØ§ Ùˆ Ù…Ø¹Ø§ÛŒØ¨",
    content: [
      {
        type: "text",
        title: "Û±. Ø¨ÛŒØ§Ù† Ù…Ø²Ø§ÛŒØ§ Ùˆ Ù…Ø¹Ø§ÛŒØ¨",
        text: "Ø¯Ø± Ø³Ø·Ø­ B1 Ø¨Ø§ÛŒØ¯ Ø¨ØªÙˆØ§Ù†ÛŒØ¯ Ø¯Ø±Ø¨Ø§Ø±Ù‡ ÛŒÚ© Ù…ÙˆØ¶ÙˆØ¹ Ù…Ø²Ø§ÛŒØ§ Ùˆ Ù…Ø¹Ø§ÛŒØ¨ Ø±Ø§ Ø¨ÛŒØ§Ù† Ú©Ù†ÛŒØ¯. Ø§Ø² Ø§ÛŒÙ† Ø³Ø§Ø®ØªØ§Ø±Ù‡Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯:"
      },
      {
        type: "table",
        title: "Ø¹Ø¨Ø§Ø±Ø§Øª Ù…Ø²Ø§ÛŒØ§ Ùˆ Ù…Ø¹Ø§ÛŒØ¨",
        rows: [
          { de: "Einerseits..., andererseits...", fa: "Ø§Ø² ÛŒÚ© Ø·Ø±Ù... Ø§Ø² Ø·Ø±Ù Ø¯ÛŒÚ¯Ø±..." },
          { de: "Auf der einen Seite..., auf der anderen Seite...", fa: "Ø¯Ø± ÛŒÚ© Ø·Ø±Ù... Ø¯Ø± Ø·Ø±Ù Ø¯ÛŒÚ¯Ø±..." },
          { de: "Zwar..., aber trotzdem...", fa: "Ø§Ú¯Ø±Ú†Ù‡... Ø§Ù…Ø§ Ø¨Ø§ Ø§ÛŒÙ† Ø­Ø§Ù„..." },
          { de: "Der Vorteil ist, dass... / Der Nachteil ist, dass...", fa: "Ù…Ø²ÛŒØª Ø§ÛŒÙ† Ø§Ø³Øª Ú©Ù‡... / Ø¹ÛŒØ¨ Ø§ÛŒÙ† Ø§Ø³Øª Ú©Ù‡..." }
        ]
      },
      {
        type: "examples",
        title: "Ù…Ø«Ø§Ù„ Ø¯Ø±Ø¨Ø§Ø±Ù‡ ØªÚ©Ù†ÙˆÙ„ÙˆÚ˜ÛŒ",
        items: [
          { de: "Einerseits ist das Internet sehr praktisch. Andererseits verbringen wir zu viel Zeit am Handy.", fa: "Ø§Ø² ÛŒÚ© Ø·Ø±Ù Ø§ÛŒÙ†ØªØ±Ù†Øª Ø®ÛŒÙ„ÛŒ Ø¹Ù…Ù„ÛŒ Ø§Ø³Øª. Ø§Ø² Ø·Ø±Ù Ø¯ÛŒÚ¯Ø± Ù…Ø§ ÙˆÙ‚Øª Ø²ÛŒØ§Ø¯ÛŒ Ø¨Ø§ Ú¯ÙˆØ´ÛŒ Ù…ÛŒâ€ŒÚ¯Ø°Ø±Ø§Ù†ÛŒÙ…." },
          { de: "Zwar gibt es viele Vorteile von Social Media, aber trotzdem sollten wir vorsichtig sein.", fa: "Ø§Ú¯Ø±Ú†Ù‡ Ù…Ø²Ø§ÛŒØ§ÛŒ Ø²ÛŒØ§Ø¯ÛŒ Ø§Ø² Ø´Ø¨Ú©Ù‡â€ŒÙ‡Ø§ÛŒ Ø§Ø¬ØªÙ…Ø§Ø¹ÛŒ ÙˆØ¬ÙˆØ¯ Ø¯Ø§Ø±Ø¯ØŒ Ø§Ù…Ø§ Ø¨Ø§ Ø§ÛŒÙ† Ø­Ø§Ù„ Ø¨Ø§ÛŒØ¯ Ù…Ø±Ø§Ù‚Ø¨ Ø¨Ø§Ø´ÛŒÙ…." }
        ]
      },
      {
        type: "fill_blank",
        title: "Ø¬Ø§ÛŒ Ø®Ø§Ù„ÛŒ Ø±Ø§ Ù¾Ø± Ú©Ù†ÛŒØ¯",
        instruction: "Ú©Ù„Ù…Ù‡ Ù…Ù†Ø§Ø³Ø¨ Ø±Ø§ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯:",
        blanks: [
          { sentence: "___ ist das Internet praktisch, ___ andererseits ist es auch gefaehrlich.", answer: "Einerseits", hint: "Ø§Ø² ÛŒÚ© Ø·Ø±Ù..." },
          { sentence: "Zwar gibt es viele Vorteile, ___ sollten wir aufpassen.", answer: "aber", hint: "Ø§Ù…Ø§..." },
          { sentence: "Der ___ ist, dass man schnell Informationen finden kann.", answer: "Vorteil", hint: "Ù…Ø²ÛŒØª = V..." }
        ]
      },
      {
        type: "interactive_quiz",
        title: "Ø¢Ø²Ù…ÙˆÙ†: Ø±Ø³Ø§Ù†Ù‡ Ùˆ ØªÚ©Ù†ÙˆÙ„ÙˆÚ˜ÛŒ",
        questions: [
          {
            question: "Ú©Ø¯Ø§Ù… Ø³Ø§Ø®ØªØ§Ø± Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ù…Ø²Ø§ÛŒØ§ Ùˆ Ù…Ø¹Ø§ÛŒØ¨ Ø¯Ø±Ø³Øª Ø§Ø³ØªØŸ",
            questionDe: "Welche Struktur ist fuer Pro und Contra richtig?",
            options: [
              { text: "Einerseits..., andererseits...", isCorrect: true },
              { text: "Zuerst..., dann...", isCorrect: false },
              { text: "Heute..., morgen...", isCorrect: false }
            ],
            explanation: "Einerseits/andererseits Ø³Ø§Ø®ØªØ§Ø± Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯ Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ù…Ø²Ø§ÛŒØ§ Ùˆ Ù…Ø¹Ø§ÛŒØ¨ Ø§Ø³Øª."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "Ù„ØºØ§Øª ØªÚ©Ù†ÙˆÙ„ÙˆÚ˜ÛŒ Ùˆ Ø§ÛŒÙ†ØªØ±Ù†Øª",
        words: [
          { de: "das Internet", fa: "Ø§ÛŒÙ†ØªØ±Ù†Øª", article: "das", plural: "-", examples: [{ de: "Ohne Internet waere das Leben anders.", fa: "Ø¨Ø¯ÙˆÙ† Ø§ÛŒÙ†ØªØ±Ù†Øª Ø²Ù†Ø¯Ú¯ÛŒ Ù…ØªÙØ§ÙˆØª Ø¨ÙˆØ¯." }] },
          { de: "die Webseite / die Website", fa: "ÙˆØ¨Ø³Ø§ÛŒØª", article: "die", plural: "die Webseiten", examples: [{ de: "Diese Webseite ist sehr nuetzlich.", fa: "Ø§ÛŒÙ† ÙˆØ¨Ø³Ø§ÛŒØª Ø¨Ø³ÛŒØ§Ø± Ù…ÙÛŒØ¯ Ø§Ø³Øª." }] },
          { de: "die Suchmaschine", fa: "Ù…ÙˆØªÙˆØ± Ø¬Ø³ØªØ¬Ùˆ", article: "die", plural: "die Suchmaschinen", examples: [{ de: "Google ist die bekannteste Suchmaschine.", fa: "Ú¯ÙˆÚ¯Ù„ Ù…Ø¹Ø±ÙˆÙâ€ŒØªØ±ÛŒÙ† Ù…ÙˆØªÙˆØ± Ø¬Ø³ØªØ¬Ùˆ Ø§Ø³Øª." }] },
          { de: "herunterladen", fa: "Ø¯Ø§Ù†Ù„ÙˆØ¯ Ú©Ø±Ø¯Ù†", article: "-", plural: "-", examples: [{ de: "Ich lade die App herunter.", fa: "Ø§Ù¾Ù„ÛŒÚ©ÛŒØ´Ù† Ø±Ø§ Ø¯Ø§Ù†Ù„ÙˆØ¯ Ù…ÛŒâ€ŒÚ©Ù†Ù…." }] },
          { de: "der Datenschutz", fa: "Ø­ÙØ§Ø¸Øª Ø§Ø² Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§", article: "der", plural: "-", examples: [{ de: "Datenschutz ist in Deutschland wichtig.", fa: "Ø­ÙØ§Ø¸Øª Ø§Ø² Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ Ø¯Ø± Ø¢Ù„Ù…Ø§Ù† Ù…Ù‡Ù… Ø§Ø³Øª." }] },
          { de: "die Privatsphaere", fa: "Ø­Ø±ÛŒÙ… Ø®ØµÙˆØµÛŒ", article: "die", plural: "-", examples: [{ de: "Die Privatsphaere leidet unter den sozialen Netzwerken.", fa: "Ø­Ø±ÛŒÙ… Ø®ØµÙˆØµÛŒ ØªØ­Øª ØªØ£Ø«ÛŒØ± Ø´Ø¨Ú©Ù‡â€ŒÙ‡Ø§ÛŒ Ø§Ø¬ØªÙ…Ø§Ø¹ÛŒ Ø¢Ø³ÛŒØ¨ Ù…ÛŒâ€ŒØ¨ÛŒÙ†Ø¯." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Leben ohne Smartphone\n\nIn einer Umfrage haben 1.000 Deutsche gefragt, ob sie einen Tag ohne Smartphone schaffen wuerden. Das Ergebnis war ueberraschend: Nur 15 Prozent sagten, dass sie das koennten. Die meisten Menschen sind heute suechtig nach ihren Handys.\nEinerseits haben Smartphones viele Vorteile. Man kann schnell Informationen finden und mit Freunden kommunizieren. Andererseits gibt es auch Nachteile. Viele Menschen verbringen zu viel Zeit vor dem Bildschirm.\nEin interessanter Trend ist das Digital Detox. Immer mehr Menschen versuchen, regelmaessig offline zu sein.",
      questions: [
        { question: "Ø¯Ø± Ù†Ø¸Ø±Ø³Ù†Ø¬ÛŒ Ú†Ù†Ø¯ Ø¯Ø±ØµØ¯ Ù…Ø±Ø¯Ù… Ú¯ÙØªÙ†Ø¯ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ù†Ø¯ Ø¨Ø¯ÙˆÙ† Ú¯ÙˆØ´ÛŒ Ø²Ù†Ø¯Ú¯ÛŒ Ú©Ù†Ù†Ø¯ØŸ", answer: "ÙÙ‚Ø· Û±Ûµ Ø¯Ø±ØµØ¯." },
        { question: "Ù…Ø²ÛŒØª Ú¯ÙˆØ´ÛŒ Ù‡ÙˆØ´Ù…Ù†Ø¯ Ú†ÛŒØ³ØªØŸ", answer: "Ù…ÛŒâ€ŒØªÙˆØ§Ù† Ø³Ø±ÛŒØ¹ Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ù¾ÛŒØ¯Ø§ Ú©Ø±Ø¯ Ùˆ Ø¨Ø§ Ø¯ÙˆØ³ØªØ§Ù† Ø§Ø±ØªØ¨Ø§Ø· Ø¨Ø±Ù‚Ø±Ø§Ø± Ú©Ø±Ø¯." },
        { question: "Digital Detox ÛŒØ¹Ù†ÛŒ Ú†Ù‡ØŸ", answer: "ØªÙ„Ø§Ø´ Ø¨Ø±Ø§ÛŒ offline Ø¨ÙˆØ¯Ù† Ø¨Ù‡ ØµÙˆØ±Øª Ù…Ù†Ø¸Ù… Ùˆ Ø¯ÙˆØ±ÛŒ Ø§Ø² Ú¯ÙˆØ´ÛŒ." }
      ]
    }
  ],

  writing: [
    {
      title: "Ù…Ø²Ø§ÛŒØ§ Ùˆ Ù…Ø¹Ø§ÛŒØ¨ ØªÚ©Ù†ÙˆÙ„ÙˆÚ˜ÛŒ",
      prompt: "ÛŒÚ© Ù…ØªÙ† Ú©ÙˆØªØ§Ù‡ (Û¶-Û· Ø¬Ù…Ù„Ù‡) Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ù…Ø²Ø§ÛŒØ§ Ùˆ Ù…Ø¹Ø§ÛŒØ¨ Ø§ÛŒÙ†ØªØ±Ù†Øª ÛŒØ§ Ø´Ø¨Ú©Ù‡â€ŒÙ‡Ø§ÛŒ Ø§Ø¬ØªÙ…Ø§Ø¹ÛŒ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯.",
      steps: [
        { title: "Ù…Ø²Ø§ÛŒØ§", text: "Ø§Ø² Einerseits Ø´Ø±ÙˆØ¹ Ú©Ù†ÛŒØ¯.", example: { de: "Einerseits ist das Internet sehr nuetzlich.", fa: "Ø§Ø² ÛŒÚ© Ø·Ø±Ù Ø§ÛŒÙ†ØªØ±Ù†Øª Ø®ÛŒÙ„ÛŒ Ù…ÙÛŒØ¯ Ø§Ø³Øª." } },
        { title: "Ù…Ø¹Ø§ÛŒØ¨", text: "Ø§Ø² Andererseits Ø§Ø¯Ø§Ù…Ù‡ Ø¯Ù‡ÛŒØ¯.", example: { de: "Andererseits verbringen wir zu viel Zeit online.", fa: "Ø§Ø² Ø·Ø±Ù Ø¯ÛŒÚ¯Ø± ÙˆÙ‚Øª Ø²ÛŒØ§Ø¯ÛŒ Ø¢Ù†Ù„Ø§ÛŒÙ† Ù…ÛŒâ€ŒÚ¯Ø°Ø±Ø§Ù†ÛŒÙ…." } },
        { title: "Ù†ØªÛŒØ¬Ù‡â€ŒÚ¯ÛŒØ±ÛŒ", text: "Ù†Ø¸Ø± Ù†Ù‡Ø§ÛŒÛŒ Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ú¯ÙˆÛŒÛŒØ¯.", example: { de: "Ich finde, wir sollten das Internet richtig nutzen.", fa: "ÙÚ©Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù… Ø¨Ø§ÛŒØ¯ Ø§Ø² Ø§ÛŒÙ†ØªØ±Ù†Øª Ø¯Ø±Ø³Øª Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒÙ…." } }
      ],
      modelAnswer: "Einerseits ist das Internet sehr praktisch. Man kann schnell Informationen finden und mit Freunden kommunizieren. Andererseits verbringen viele Menschen zu viel Zeit online. Zwar gibt es viele Vorteile, aber trotzdem sollten wir aufpassen. Ich finde, wir sollten das Internet richtig und bewusst nutzen."
    }
  ],

  listening: [
    {
      title: "Û±. Digital Detox Ùˆ Ø²Ù†Ø¯Ú¯ÛŒ Ø¢ÙÙ„Ø§ÛŒÙ†",
      source: "Easy German - Digital Detox",
      link: "https://www.youtube.com/watch?v=3JZ_DqEL7ig",
      instructions: "Û±. ÙˆÛŒØ¯ÛŒÙˆ Ø±Ø§ Ø¨Ø¨ÛŒÙ†ÛŒØ¯ Ùˆ Ù†Ú©Ø§Øª Ú©Ù„ÛŒØ¯ÛŒ Ø±Ø§ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯.\nÛ². Ø³Ø¹ÛŒ Ú©Ù†ÛŒØ¯ Ù†Ø¸Ø± Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ø¹Ø¯ Ø§Ø² ØªÙ…Ø§Ø´Ø§ Ø¨ÛŒØ§Ù† Ú©Ù†ÛŒØ¯."
    }
  ],

  speaking: [
    {
      title: "Ø¨Ø­Ø« Ø¯Ø±Ø¨Ø§Ø±Ù‡ ØªÚ©Ù†ÙˆÙ„ÙˆÚ˜ÛŒ",
      pattern: "Einerseits ist das Internet nuetzlich, andererseits...",
      exercise: "Û³ Ø¯Ù‚ÛŒÙ‚Ù‡ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ù…Ø²Ø§ÛŒØ§ Ùˆ Ù…Ø¹Ø§ÛŒØ¨ Ø´Ø¨Ú©Ù‡â€ŒÙ‡Ø§ÛŒ Ø§Ø¬ØªÙ…Ø§Ø¹ÛŒ ØµØ­Ø¨Øª Ú©Ù†ÛŒØ¯. Ø§Ø² Einerseits/Andererseits Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯."
    }
  ],

  cultureTip: "Ø¯Ø± Ø¢Ù„Ù…Ø§Ù† Ø¨Ø­Ø« Datenschutz (Ø­ÙØ§Ø¸Øª Ø§Ø² Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§) Ø¨Ø³ÛŒØ§Ø± Ø¬Ø¯ÛŒ Ø§Ø³Øª. GDPR (Ù‚ÙˆØ§Ù†ÛŒÙ† Ø­ÙØ§Ø¸Øª Ø§Ø² Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ÛŒ Ø§Ø±ÙˆÙ¾Ø§) Ø§Ø² Ø¢Ù„Ù…Ø§Ù† Ø¢Ù…Ø¯Ù‡. Ø¢Ù„Ù…Ø§Ù†ÛŒâ€ŒÙ‡Ø§ Ø¨Ø³ÛŒØ§Ø± Ø¨Ù‡ Ø­Ø±ÛŒÙ… Ø®ØµÙˆØµÛŒ Ø§Ù‡Ù…ÛŒØª Ù…ÛŒâ€ŒØ¯Ù‡Ù†Ø¯. Ù‡Ù…Ú†Ù†ÛŒÙ† Ù¾Ø¯ÛŒØ¯Ù‡ Digital Detox (Ø¯ÙˆØ±ÛŒ Ø¯Ø§ÙˆØ·Ù„Ø¨Ø§Ù†Ù‡ Ø§Ø² ØªÚ©Ù†ÙˆÙ„ÙˆÚ˜ÛŒ) Ø¯Ø± Ø¢Ù„Ù…Ø§Ù† Ø¨Ø³ÛŒØ§Ø± Ø±Ø§ÛŒØ¬ Ø´Ø¯Ù‡.",

  examData: {
    questions: [
      { question: "Ø¨Ø±Ø§ÛŒ Ø¨ÛŒØ§Ù† Ù…Ø²Ø§ÛŒØ§ Ùˆ Ù…Ø¹Ø§ÛŒØ¨ØŒ Ú©Ø¯Ø§Ù… Ø³Ø§Ø®ØªØ§Ø± Ø¯Ø±Ø³Øª Ø§Ø³ØªØŸ", options: ["Zuerst/dann", "Einerseits/andererseits", "Heute/morgen", "Links/rechts"], answer: 1 },
      { question: "Datenschutz ÛŒØ¹Ù†ÛŒ...", options: ["Ø­ÙØ§Ø¸Øª Ø§Ø² Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§", "Ø§Ù…Ù†ÛŒØª", "Ø±Ù…Ø² Ø¹Ø¨ÙˆØ±", "Ø§ÛŒÙ†ØªØ±Ù†Øª"], answer: 0 },
      { question: "Â«herunterladenÂ» ÛŒØ¹Ù†ÛŒ...", options: ["Ø¢Ù¾Ù„ÙˆØ¯ Ú©Ø±Ø¯Ù†", "Ø¯Ø§Ù†Ù„ÙˆØ¯ Ú©Ø±Ø¯Ù†", "Ù¾Ø§Ú© Ú©Ø±Ø¯Ù†", "Ø§Ø±Ø³Ø§Ù„ Ú©Ø±Ø¯Ù†"], answer: 1 },
      { question: "Digital Detox ÛŒØ¹Ù†ÛŒ...", options: ["Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø¨ÛŒØ´ØªØ± Ø§Ø² Ú¯ÙˆØ´ÛŒ", "Ø¯ÙˆØ±ÛŒ Ø§Ø² ØªÚ©Ù†ÙˆÙ„ÙˆÚ˜ÛŒ", "Ø®Ø±ÛŒØ¯ Ú¯ÙˆØ´ÛŒ Ø¬Ø¯ÛŒØ¯", "Ø¨Ø§Ø²ÛŒ Ú©Ø±Ø¯Ù†"], answer: 1 },
      { question: "Â«Zwar..., aber trotzdem...Â» ÛŒØ¹Ù†ÛŒ...", options: ["Ø§ÙˆÙ„... Ø¨Ø¹Ø¯...", "Ø§Ú¯Ø±Ú†Ù‡... Ø§Ù…Ø§...", "Ú†Ù¾... Ø±Ø§Ø³Øª...", "Ø¨Ù„Ù‡... Ù†Ù‡..."], answer: 1 },
      { question: "Privatsphaere ÛŒØ¹Ù†ÛŒ...", options: ["ÙØ¶Ø§ÛŒ Ø¹Ù…ÙˆÙ…ÛŒ", "Ø­Ø±ÛŒÙ… Ø®ØµÙˆØµÛŒ", "Ø´Ø¨Ú©Ù‡ Ø§Ø¬ØªÙ…Ø§Ø¹ÛŒ", "Ø§ÛŒÙ†ØªØ±Ù†Øª"], answer: 1 }
    ]
  }
};
