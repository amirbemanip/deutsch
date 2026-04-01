export const day26Data = {
  title: "روز ۲۶: سفر - حم' و نق'، مسیریابی و پرسیدن راه",
  objective: "در این درس یاد می‌گیرید چگونه درباره سفر صحبت کنید، راه بپرسید، مسیر توضیح دهید و از وسای' نق'یه مخت'ف استفاده کنید.",
  grammarData: {
    subtitle: "Reisen, Verkehr und Wegbeschreibung ' سفر، حم' و نق' و مسیریابی",
    content: [
      {
        type: "text",
        title: "پرسیدن راه",
        text: "وقتی در شهر هستید و مسیر را نمی‌دانید، از عبارت‌های مودبانه استفاده کنید: «Entschuldigung, wie komme ich zum/zur...?» یا «Wo ist bitte...?» مردم آ'مان معمو'اً با کما' می' کمک می‌کنند."
      },
      {
        type: "table",
        title: "عبارات پرسیدن راه",
        rows: [
          { de: "Entschuldigung, wo ist bitte der Bahnhof?", fa: "ببخشید، ایستگاه کجاست؟" },
          { de: "Wie komme ich zum Flughafen?", fa: "چطور به فرودگاه برسم؟" },
          { de: "Wie komme ich zur Post?", fa: "چطور به پست برسد؟" },
          { de: "Können Sie mir bitte helfen?", fa: "می‌توانید کمکم کنید؟" },
          { de: "Ist das weit von hier?", fa: "آیا از اینجا دور است؟" },
          { de: "Wie lange brauche ich dorthin?", fa: "چقدر طو' می‌کشد؟" },
          { de: "Gibt es hier eine U-Bahn-Station?", fa: "آیا اینجا ایستگاه مترو هست؟" }
        ]
      },
      {
        type: "table",
        title: "عبارات توضیح مسیر",
        rows: [
          { de: "Gehen Sie geradeaus.", fa: "مستقیم بروید." },
          { de: "Gehen Sie die erste/zweite Straße links/rechts.", fa: "خیابان او'/دوم چپ/راست بروید." },
          { de: "Biegen Sie links/rechts ab.", fa: "به چپ/راست بپیچید." },
          { de: "Dann sehen Sie den Bahnhof auf der rechten Seite.", fa: "بعد ایستگاه را در سمت راست می‌بینید." },
          { de: "Es ist gleich hier um die Ecke.", fa: "همین نزدیکی پیچ است." },
          { de: "Es ist etwa fünf Minuten zu Fuß.", fa: "حدود ۵ دقیقه پیاده است." },
          { de: "Nehmen Sie die erste links, dann geradeaus.", fa: "او'ی چپ، بعد مستقیم." }
        ]
      },
      {
        type: "table",
        title: "وسای' نق'یه",
        rows: [
          { de: "der Bus", fa: "اتوبوس" },
          { de: "die Straßenbahn / die Bahn", fa: "تراموا / قطار" },
          { de: "die U-Bahn", fa: "مترو" },
          { de: "der Zug", fa: "قطار (بین شهری)" },
          { de: "das Flugzeug", fa: "هواپیما" },
          { de: "das Taxi", fa: "تاکسی" },
          { de: "das Fahrrad", fa: "دوچرخه" },
          { de: "das Auto", fa: "ماشین" },
          { de: "zu Fuß", fa: "پیاده" }
        ]
      },
      {
        type: "examples",
        title: "مکا'مه نمونه: پرسیدن راه",
        items: [
          { de: "A: Entschuldigung, wie komme ich zum Bahnhof?", fa: "ببخشید، چطور به ایستگاه برسم؟" },
          { de: "B: Gehen Sie geradeaus und nehmen Sie dann die zweite Straße links.", fa: "مستقیم بروید و بعد خیابان دوم چپ." },
          { de: "A: Ist das weit?", fa: "دور است؟" },
          { de: "B: Nein, etwa zehn Minuten zu Fuß.", fa: "نه، حدود ۱۰ دقیقه پیاده." },
          { de: "A: Danke schön!", fa: "خی'ی ممنون!" },
          { de: "B: Bitte schön!", fa: "خواهش می‌کنم!" }
        ]
      },
      {
        type: "examples",
        title: "ب'یط و سفر",
        items: [
          { de: "Ich möchte eine Fahrkarte nach München, bitte.", fa: "یک ب'یط به مونیخ می‌خواهم." },
          { de: "Einfach oder hin und zurück?", fa: "یک‌طرفه یا رفت و برگشت؟" },
          { de: "Um welche Uhrzeit fährt der nächste Zug?", fa: "قطار بعدی چند حرکت می‌کند؟" },
          { de: "Der Zug fährt von Gleis 3 ab.", fa: "قطار از سکوی ۳ حرکت می‌کند." },
          { de: "Die Fahrt dauert etwa zwei Stunden.", fa: "سفر حدود ۲ ساعت طو' می‌کشد." },
          { de: "Wann kommen wir an?", fa: "کی می‌رسیم؟" }
        ]
      },
      {
        type: "alert",
        title: "نکته مهم: zum vs zur",
        text: "قب' از اسم‌های مذکر و خنثی: zum (zu + dem): zum Bahnhof, zum Flughafen. قب' از اسم‌های مؤنث: zur (zu + der): zur Post, zur Bank. به یاد داشته باشید که حرف اضافه zu برای مقصد استفاده می‌شود."
      },
      {
        type: "interactive_quiz",
        title: "سفر و مسیریابی",
        questions: [
          {
            question: "«Wie komme ich zum Bahnhof?» یعنی چه؟",
            questionDe: "Was bedeutet 'Wie komme ich zum Bahnhof'?",
            options: [
              { text: "چطور به ایستگاه برسم؟", isCorrect: true },
              { text: "ایستگاه کجاست؟", isCorrect: false },
              { text: "قطار کی می‌آید؟", isCorrect: false },
              { text: "ب'یط چقدر است؟", isCorrect: false }
            ],
            explanation: "«Wie komme ich zu...?» یعنی چطور به... برسم."
          },
          {
            question: "«Gehen Sie geradeaus.» یعنی چه؟",
            questionDe: "Was bedeutet 'Gehen Sie geradeaus'?",
            options: [
              { text: "مستقیم بروید.", isCorrect: true },
              { text: "به چپ بروید.", isCorrect: false },
              { text: "به راست بپیچید.", isCorrect: false },
              { text: "بمانید.", isCorrect: false }
            ],
            explanation: "geradeaus یعنی مستقیم."
          },
          {
            question: "«Einfach oder hin und zurück?» یعنی چه؟",
            questionDe: "Was bedeutet 'Einfach oder hin und zurück'?",
            options: [
              { text: "یک‌طرفه یا رفت و برگشت؟", isCorrect: true },
              { text: "ارزان یا گران؟", isCorrect: false },
              { text: "سریع یا آهسته؟", isCorrect: false },
              { text: "دور یا نزدیک؟", isCorrect: false }
            ],
            explanation: "einfach یک‌طرفه و hin und zurück رفت و برگشت است."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "مکا'مه سفر را کام' کنید",
        instruction: "عبارات مناسب را در جای خا'ی بنویسید.",
        blanks: [
          { sentence: "___, wo ist bitte der Bahnhof?", answer: "Entschuldigung", hint: "ببخشید" },
          { sentence: "Gehen Sie ___ und dann die erste Straße rechts.", answer: "geradeaus", hint: "مستقیم" },
          { sentence: "Ich möchte eine ___ nach Berlin, bitte.", answer: "Fahrkarte", hint: "ب'یط" },
          { sentence: "Um welche Uhrzeit ___ der nächste Zug?", answer: "fährt", hint: "حرکت می‌کند" },
          { sentence: "Der Zug fährt von ___ 5 ab.", answer: "Gleis", hint: "سکو" },
          { sentence: "___ Sie links ab.", answer: "Biegen", hint: "بپیچید" },
          { sentence: "Es ist etwa ___ Minuten zu Fuß.", answer: "fünf", hint: "۵ دقیقه" },
          { sentence: "Wann ___ wir an?", answer: "kommen", hint: "می‌رسیم" }
        ]
      }
    ]
  },
  vocabData: {
    categories: [
      {
        title: "واژگان سفر و حم' و نق'",
        words: [
          { de: "der Bahnhof", fa: "ایستگاه قطار", article: "der", plural: "Bahnhöfe", examples: [{ de: "Wo ist der nächste Bahnhof?", fa: "نزدیک‌ترین ایستگاه کجاست؟" }] },
          { de: "der Flughafen", fa: "فرودگاه", article: "der", plural: "Flughäfen", examples: [{ de: "Ich fahre zum Flughafen.", fa: "به فرودگاه می‌روم." }] },
          { de: "die Fahrkarte", fa: "ب'یط", article: "die", plural: "-n", examples: [{ de: "Ich brauche eine Fahrkarte.", fa: "ب'یط 'ازم دارم." }] },
          { de: "der Zug", fa: "قطار", article: "der", plural: "Züge", examples: [{ de: "Der Zug fährt um 8 Uhr ab.", fa: "قطار ساعت ۸ حرکت می‌کند." }] },
          { de: "die U-Bahn", fa: "مترو", article: "die", plural: "-en", examples: [{ de: "Nehmen Sie die U-Bahn.", fa: "مترو سوار شوید." }] },
          { de: "die Straßenbahn", fa: "تراموا", article: "die", plural: "-en", examples: [{ de: "Die Straßenbahn kommt alle 10 Minuten.", fa: "تراموا هر ۱۰ دقیقه می‌آید." }] },
          { de: "der Bus", fa: "اتوبوس", article: "der", plural: "Busse", examples: [{ de: "Welcher Bus fährt zum Zentrum?", fa: "کدام اتوبوس به مرکز شهر می‌رود؟" }] },
          { de: "das Taxi", fa: "تاکسی", article: "das", plural: "Taxis", examples: [{ de: "Rufen Sie bitte ein Taxi!", fa: "'طفاً یک تاکسی خبر کنید!" }] },
          { de: "das Flugzeug", fa: "هواپیما", article: "das", plural: "-e", examples: [{ de: "Das Flugzeug startet um 14 Uhr.", fa: "هواپیما ساعت ۱۴ پرواز می‌کند." }] },
          { de: "das Gleis", fa: "سکو / ری'", article: "das", plural: "-e", examples: [{ de: "Der Zug steht auf Gleis 3.", fa: "قطار روی سکوی ۳ است." }] },
          { de: "die Abfahrt", fa: "حرکت / عزیمت", article: "die", plural: "-en", examples: [{ de: "Die Abfahrt ist um 9 Uhr.", fa: "حرکت ساعت ۹ است." }] },
          { de: "die Ankunft", fa: "رسیدن / ورود", article: "die", plural: "Ankünfte", examples: [{ de: "Die Ankunft ist um 12 Uhr.", fa: "رسیدن ساعت ۱۲ است." }] },
          { de: "die Verspätung", fa: "تاخیر", article: "die", plural: "-en", examples: [{ de: "Der Zug hat 20 Minuten Verspätung.", fa: "قطار ۲۰ دقیقه تاخیر دارد." }] },
          { de: "der Fahrplan", fa: "برنامه حرکت", article: "der", plural: "Fahrpläne", examples: [{ de: "Wann kommt der nächste Bus? ' Schauen Sie im Fahrplan nach.", fa: "اتوبوس بعدی کی می‌آید؟ برنامه را نگاه کنید." }] },
          { de: "umsteigen", fa: "تعویض خط / عوض کردن", article: "-", plural: "-", examples: [{ de: "Sie müssen an der Station umsteigen.", fa: "باید در ایستگاه عوض کنید." }] },
          { de: "aussteigen", fa: "پیاده شدن", article: "-", plural: "-", examples: [{ de: "An der nächsten Haltestelle steigen Sie aus.", fa: "در ایستگاه بعدی پیاده شوید." }] },
          { de: "einsteigen", fa: "سوار شدن", article: "-", plural: "-", examples: [{ de: "Bitte einsteigen! Der Zug fährt gleich ab.", fa: "'طفاً سوار شوید! قطار به زودی حرکت می‌کند." }] }
        ]
      }
    ]
  },
  reading: [
    {
      text: "Gestern bin ich mit dem Zug nach Wien gefahren. Ich bin um 8 Uhr zum Bahnhof gegangen und habe eine Fahrkarte gekauft. Der Zug hatte leider 15 Minuten Verspätung. Im Zug habe ich mich hingesetzt und ein Buch gelesen. Die Fahrt hat drei Stunden gedauert. In Wien bin ich ausgestiegen und habe das Taxi zum Hotel genommen. Am nächsten Tag bin ich mit der U-Bahn durch die Stadt gefahren. Ich habe den Stephansdom besichtigt und bin dann zu Fuß durch die Altstadt spaziert. Am Abend bin ich mit dem Bus zum Restaurant gefahren. Es war ein toller Ausflug!",
      questions: [
        { question: "نویسنده با چه وسی'ه‌ای به وین رفت؟", answer: "با قطار." },
        { question: "قطار چقدر تاخیر داشت؟", answer: "۱۵ دقیقه." },
        { question: "سفر چقدر طو' کشید؟", answer: "سه ساعت." },
        { question: "او در وین چه کرد؟", answer: "استفانسدوم را دید و در شهر قدیمی پیاده‌روی کرد." }
      ]
    }
  ],
  writing: [
    {
      title: "توصیف یک سفر",
      prompt: "یک سفر گذشته را توصیف کنید. از واژگان سفر و Perfekt استفاده کنید.",
      steps: [
        { title: "مرح'ه ۱: رفتن", text: "چطور رفتید؟ کجا رفتید؟", example: { de: "Ich bin mit dem Zug nach Berlin gefahren.", fa: "با قطار به بر'ین رفتم." } },
        { title: "مرح'ه ۲: فعا'یت‌ها", text: "در مقصد چه کردید؟", example: { de: "Ich habe die Stadt besichtigt.", fa: "شهر را دیدم." } },
        { title: "مرح'ه ۳: برگشت", text: "چطور برگشتید؟", example: { de: "Am Sonntag bin ich mit dem Flugzeug zurückgeflogen.", fa: "یکشنبه با هواپیما برگشتم." } }
      ],
      modelAnswer: "Letzten Sommer bin ich mit meiner Familie nach Österreich gefahren. Wir sind mit dem Zug von München nach Salzburg gefahren. Die Fahrt hat etwa eineinhalb Stunden gedauert. In Salzburg sind wir zu Fuß durch die Altstadt gelaufen und haben den Dom besichtigt. Danach sind wir mit dem Bus zum Schloss Mirabell gefahren. Am Abend haben wir in einem Restaurant Wiener Schnitzel gegessen. Am nächsten Tag sind wir mit der Straßenbahn zum Mozart-Haus gefahren. Am Sonntag sind wir mit dem Zug nach Hause gefahren. Es war ein wunderschöner Ausflug!"
    }
  ],
  listening: [
    {
      title: "پرسیدن و توضیح مسیر",
      source: "German Asking for Directions",
      link: "https://www.youtube.com/watch?v=Jqny8aZzGzE",
      instructions: "به این ویدیو گوش دهید و توجه کنید چطور عبارت‌های مسیریابی مث' geradeaus, links, rechts, um die Ecke استفاده می‌شوند. مکا'مه را تکرار کنید."
    }
  ],
  speaking: [
    {
      title: "تمرین مسیریابی",
      pattern: "A: Entschuldigung, wie komme ich zum/zur...? B: Gehen Sie geradeaus, dann links. Es ist gleich dort.",
      exercise: "با یک نفر مکا'مه مسیریابی تمرین کنید. یکی سؤا' بپرسد و دیگری مسیر توضیح دهد."
    }
  ],
  cultureTip: "در آ'مان، سیستم حم' و نق' عمومی بسیار منظم و دقیق است. قطارها معمو'اً سر وقت حرکت می‌کنند (اگر تاخیر داشته باشند، خی'ی عجیب است!). ب'یط‌های مترو و اتوبوس باید قب' از سوار شدن خریداری و اعتبارسنجی شوند. در بعضی شهرها می‌توانید از اپ'یکیشن‌هایی مث' DB Navigator استفاده کنید.",
  examData: {
    questions: [
      { question: "«Wie komme ich zum Bahnhof?» یعنی چه؟", options: ["ایستگاه کجاست؟", "چطور به ایستگاه برسم؟", "قطار کی می‌آید؟", "ب'یط چقدر است؟"], answer: 1 },
      { question: "«Gehen Sie geradeaus.» یعنی چه؟", options: ["به چپ بروید.", "مستقیم بروید.", "به راست بپیچید.", "بمانید."], answer: 1 },
      { question: "«Fahrkarte» یعنی چه؟", options: ["قطار", "ب'یط", "ایستگاه", "سفر"], answer: 1 },
      { question: "«Biegen Sie links ab.» یعنی چه؟", options: ["مستقیم بروید.", "به چپ بپیچید.", "به راست بپیچید.", "پیاده شوید."], answer: 1 },
      { question: "«Einfach oder hin und zurück?» یعنی چه؟", options: ["یک‌طرفه یا رفت و برگشت؟", "ارزان یا گران؟", "سریع یا آهسته؟", "دور یا نزدیک؟"], answer: 0 },
      { question: "«Verspätung» یعنی چه؟", options: ["حرکت", "تاخیر", "رسیدن", "توقف"], answer: 1 },
      { question: "«umsteigen» یعنی چه؟", options: ["پیاده شدن", "سوار شدن", "تعویض خط", "حرکت کردن"], answer: 2 },
      { question: "«Gleis» یعنی چه؟", options: ["ب'یط", "سکو", "قطار", "ایستگاه"], answer: 1 },
      { question: "کدام جم'ه صحیح است؟", options: ["Ich fahre mit den Zug.", "Ich fahre mit dem Zug.", "Ich fahre mit der Zug.", "Ich fahre mit das Zug."], answer: 1 },
      { question: "«aussteigen» یعنی چه؟", options: ["سوار شدن", "پیاده شدن", "حرکت کردن", "تعویض کردن"], answer: 1 }
    ]
  }
};
