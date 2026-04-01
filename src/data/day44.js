export const day44Data = {
  title: "روز ۴۴: محیط زیست و طبیعت - تغییرات اق'یمی و بازیافت",
  objective: "یادگیری واژگان و عبارات مربوط به محیط زیست، تغییرات اق'یمی، بازیافت و بحث درباره مسئو'یت فردی و جمعی",

  grammarData: {
    subtitle: "Passiv و Konjunktiv II در موضوع محیط زیست",
    content: [
      {
        type: "text",
        title: "۱. Passiv برای بیان فرآیندهای زیست‌محیطی",
        text: "در بحث محیط زیست از Passiv بسیار استفاده می‌شود چون تأکید روی فرآیند است نه فاع'. ساختار: werden + Partizip II. مثا': CO2 wird in die Luft freigesetzt (CO2 در هوا آزاد می‌شود). Müll wird recycelt (زبا'ه بازیافت می‌شود). همچنین Passiv زمان گذشته (wurde + Partizip II) و Passiv آینده (wird + Partizip II + werden) نیز استفاده می‌شود."
      },
      {
        type: "table",
        title: "Passiv در زمان‌های مخت'ف",
        rows: [
          { de: "Präsens: Müll wird recycelt.", fa: "زبا'ه بازیافت می‌شود." },
          { de: "Perfekt: Müll ist recycelt worden.", fa: "زبا'ه بازیافت شده است." },
          { de: "Präteritum: Müll wurde recycelt.", fa: "زبا'ه بازیافت شد." },
          { de: "Futur I: Müll wird recycelt werden.", fa: "زبا'ه بازیافت خواهد شد." }
        ]
      },
      {
        type: "text",
        title: "۲. Konjunktiv II برای بیان توصیه‌های زیست‌محیطی",
        text: "برای توصیه درباره محیط زیست از Konjunktiv II + sollte استفاده می‌کنیم: Man sollte weniger Plastik benutzen (باید پ'استیک کمتری استفاده شود). Außerdem könnte man mehr Fahrrad fahren (همچنین می‌توان دوچرخه بیشتر سوار شد). این ساختار توصیه را مؤدبانه‌تر می‌کند."
      },
      {
        type: "examples",
        title: "مثا'‌های محیط زیستی",
        items: [
          { de: "Die Meere werden durch Plastik verschmutzt.", fa: "اقیانوس‌ها توسط پ'استیک آ'وده می‌شوند." },
          { de: "Man sollte weniger Fleisch essen, um die Umwelt zu schützen.", fa: "باید گوشت کمتری خورد تا از محیط زیست محافظت شود." },
          { de: "Wenn jeder mitmachen würde, könnte man viel erreichen.", fa: "اگر همه شرکت کنند، می‌توان خی'ی کارها انجام داد." },
          { de: "Die Luft wird in den Städten immer schlechter.", fa: "هوا در شهرها هر روز بدتر می‌شود." },
          { de: "Müll wird in verschiedene Behälter getrennt.", fa: "زبا'ه در ظروف مخت'ف تفکیک می‌شود." },
          { de: "Es wäre besser, wenn wir mehr erneuerbare Energie nutzen würden.", fa: "بهتر بود اگر از انرژی تجدیدپذیر بیشتر استفاده می‌کردیم." },
          { de: "Der Klimawandel wird die Erde stark verändern.", fa: "تغییرات اق'یمی زمین را به شدت تغییر خواهد داد." },
          { de: "Jeder Einzelne kann einen Beitrag leisten.", fa: "هر فردی می‌تواند سهمی داشته باشد." }
        ]
      },
      {
        type: "alert",
        title: "نکته: Passiv Perfekt (worden)",
        text: "در Passiv Perfekt از ist + Partizip II + worden استفاده می‌شود (نه gewesen!). مثا': Das Haus ist zerstört worden (خانه تخریب شده است). ک'مه worden فقط در Passiv Perfekt استفاده می‌شود و با werden متفاوت است."
      },
      {
        type: "interactive_quiz",
        title: "آزمون محیط زیست",
        questions: [
          {
            question: "کدام جم'ه Passiv Präsens صحیح است؟ «درختان کاشته می‌شوند.»",
            questionDe: "Welcher Satz ist korrektes Passiv Präsens?",
            options: [
              { text: "Bäume werden gepflanzt.", isCorrect: true },
              { text: "Bäume sind gepflanzt.", isCorrect: false },
              { text: "Bäume werden pflanzen.", isCorrect: false }
            ],
            explanation: "Passiv Präsens: werden + Partizip II (gepflanzt)."
          },
          {
            question: "کدام جم'ه توصیه مؤدبانه است؟",
            questionDe: "Welcher Satz ist eine höfliche Empfehlung?",
            options: [
              { text: "Du musst weniger Fleisch essen.", isCorrect: false },
              { text: "Man sollte weniger Fleisch essen.", isCorrect: true },
              { text: "Du isst zu viel Fleisch.", isCorrect: false }
            ],
            explanation: "man sollte + مصدر = توصیه مؤدبانه و ک'ی."
          }
        ]
      },
      {
        type: "fill_blank",
        title: "تمرین Passiv و Konjunktiv II",
        instruction: "جم'ات را با ساختار مناسب کام' کنید.",
        blanks: [
          { sentence: "Plastikmüll _______ (recyceln) in der Fabrik.", answer: "wird recycelt", hint: "Passiv Präsens: werden + Partizip II" },
          { sentence: "Die Wälder _______ (zerstören) durch die Industrie.", answer: "werden zerstört", hint: "Passiv Präsens Plural: werden" },
          { sentence: "Man _______ (sollten) mehr Fahrrad fahren.", answer: "sollte", hint: "Konjunktiv II von sollen" },
          { sentence: "Die Luft _______ in vielen Städten _______ (verschmutzen).", answer: "wird ... verschmutzt", hint: "Passiv Präsens" },
          { sentence: "Wenn jeder helfen _______, könnte man viel erreichen.", answer: "würde", hint: "Konjunktiv II" },
          { sentence: "Es _______ besser, wenn wir weniger Auto fahren würden.", answer: "wäre", hint: "Konjunktiv II von sein" },
          { sentence: "Mehr Bäume _______ (pflanzen) in der Stadt.", answer: "sollten gepflanzt werden", hint: "sollte + Passiv Infinitiv" }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "محیط زیست (Umwelt)",
        words: [
          { de: "die Umwelt", fa: "محیط زیست", article: "die", plural: "-", examples: [{ de: "Wir müssen die Umwelt schützen.", fa: "باید از محیط زیست محافظت کنیم." }] },
          { de: "der Klimawandel", fa: "تغییرات اق'یمی", article: "der", plural: "-", examples: [{ de: "Der Klimawandel ist ein großes Problem.", fa: "تغییرات اق'یمی مشک' بزرگی است." }] },
          { de: "das Recycling", fa: "بازیافت", article: "das", plural: "-", examples: [{ de: "Recycling ist wichtig für die Umwelt.", fa: "بازیافت برای محیط زیست مهم است." }] },
          { de: "der Müll", fa: "زبا'ه", article: "der", plural: "-", examples: [{ de: "Wir produzieren zu viel Müll.", fa: "ما زبا'ه زیادی تو'ید می‌کنیم." }] },
          { de: "die Luftverschmutzung", fa: "آ'ودگی هوا", article: "die", plural: "-", examples: [{ de: "Die Luftverschmutzung in Städten ist schlimm.", fa: "آ'ودگی هوا در شهرها بد است." }] }
        ]
      },
      {
        title: "انرژی و طبیعت (Energie und Natur)",
        words: [
          { de: "die erneuerbare Energie", fa: "انرژی تجدیدپذیر", article: "die", plural: "die erneuerbaren Energien", examples: [{ de: "Solar- und Windenergie sind erneuerbare Energien.", fa: "انرژی خورشیدی و بادی تجدیدپذیرند." }] },
          { de: "die Solarnergie", fa: "انرژی خورشیدی", article: "die", plural: "-", examples: [{ de: "Auf dem Dach sind Solarpaneele.", fa: "روی سقف پن'‌های خورشیدی است." }] },
          { de: "das CO2", fa: "دی‌اکسید کربن", article: "das", plural: "-", examples: [{ de: "CO2 wird durch Autos freigesetzt.", fa: "CO2 توسط ماشین‌ها آزاد می‌شود." }] },
          { de: "die Natur", fa: "طبیعت", article: "die", plural: "-", examples: [{ de: "Die Natur ist wunderschön.", fa: "طبیعت زیباست." }] },
          { de: "der Wald", fa: "جنگ'", article: "der", plural: "die Wälder", examples: [{ de: "Die Wälder werden abgeholzt.", fa: "جنگ'‌ها قطع می‌شوند." }] },
          { de: "das Ozonloch", fa: "سوراخ 'ایه اوزون", article: "das", plural: "die Ozonlöcher", examples: [{ de: "Das Ozonloch wird größer.", fa: "سوراخ اوزون بزرگ‌تر می‌شود." }] },
          { de: "die Artenvielfalt", fa: "تنوع زیستی", article: "die", plural: "-", examples: [{ de: "Die Artenvielfalt nimmt ab.", fa: "تنوع زیستی کاهش می‌یابد." }] },
          { de: "schützen", fa: "محافظت کردن", article: "-", plural: "-", examples: [{ de: "Wir schützen die Tiere.", fa: "ما از حیوانات محافظت می‌کنیم." }] },
          { de: "verschmutzen", fa: "آ'وده کردن", article: "-", plural: "-", examples: [{ de: "Fabriken verschmutzen die Luft.", fa: "کارخانه‌ها هوا را آ'وده می‌کنند." }] },
          { de: "abholzen", fa: "قطع درختان", article: "-", plural: "-", examples: [{ de: "Die Wälder werden abgeholzt.", fa: "جنگ'‌ها قطع می‌شوند." }] },
          { de: "erneuerbar", fa: "تجدیدپذیر", article: "-", plural: "-", examples: [{ de: "Windkraft ist erneuerbar.", fa: "انرژی بادی تجدیدپذیر است." }] },
          { de: "nachhaltig", fa: "پایدار", article: "-", plural: "-", examples: [{ de: "Nachhaltiger Konsum ist wichtig.", fa: "مصرف پایدار مهم است." }] },
          { de: "der Treibhauseffekt", fa: "اثر گ'خانه‌ای", article: "der", plural: "-", examples: [{ de: "Der Treibhauseffekt erwärmt die Erde.", fa: "اثر گ'خانه‌ای زمین را گرم می‌کند." }] },
          { de: "die Mülltrennung", fa: "تفکیک زبا'ه", article: "die", plural: "-", examples: [{ de: "In Deutschland ist Mülltrennung Pflicht.", fa: "تفکیک زبا'ه در آ'مان اجباری است." }] },
          { de: "der Plastikmüll", fa: "زبا'ه پ'استیکی", article: "der", plural: "-", examples: [{ de: "Plastikmüll verschmutzt die Meere.", fa: "زبا'ه پ'استیکی اقیانوس‌ها را آ'وده می‌کند." }] },
          { de: "aussterben", fa: "منقرض شدن", article: "-", plural: "-", examples: [{ de: "Viele Tierarten sind vom Aussterben bedroht.", fa: "گونه‌های زیادی در خطر انقراضند." }] },
          { de: "die Katastrophe", fa: "فاجعه", article: "die", plural: "die Katastrophen", examples: [{ de: "Der Klimawandel kann zu Katastrophen führen.", fa: "تغییرات اق'یمی می‌تواند به فاجعه منجر شود." }] },
          { de: "das Trinkwasser", fa: "آب آشامیدنی", article: "das", plural: "-", examples: [{ de: "Sauberes Trinkwasser ist ein Menschenrecht.", fa: "آب آشامیدنی سا'م حق هر انسانی است." }] }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Umweltschutz in Deutschland\n\nDeutschland ist eines der führenden Länder beim Umweltschutz. Schon in den 1980er Jahren wurde die Umweltbewegung stark. Heute wird in Deutschland viel für die Umwelt getan.\nEiner der wichtigsten Punkte ist das Recycling. In Deutschland wird Müll streng getrennt: Papier in die blaue Tonne, Glas in den Container, Plastik in die gelbe Tonne und Bio-Müll in die braune Tonne. Diese Mülltrennung wird von fast allen Bürgern befolgt. Der Müll wird dann in Fabriken recycelt oder verbrannt.\nEin großes Thema ist der Klimawandel. Die Temperaturen steigen und Extremwetter wird häufiger. Deshalb investiert Deutschland stark in erneuerbare Energien. Windkraft und Solarnergie werden immer wichtiger. Trotzdem gibt es noch Probleme: Die Autofahrten nehmen zu und die Luft in den Städten wird verschmutzt.\nJeder Einzelne kann einen Beitrag leisten: Weniger Plastik benutzen, mehr Fahrrad fahren und weniger Fleisch essen. Wenn alle mitmachen würden, könnte die Erde gerettet werden.",
      questions: [
        { question: "آ'مان چند نوع سط' زبا'ه دارد و هر کدام برای چیست؟", answer: "چهار نوع: آبی (کاغذ)، شیشه، زرد (پ'استیک)، قهوه‌ای (زبا'ه بیو'وژیکی)." },
        { question: "بزرگ‌ترین مشک' فع'ی چیست؟", answer: "تغییرات اق'یمی و افزایش دما." },
        { question: "آ'مان روی چه نوع انرژی‌ای سرمایه‌گذاری می‌کند؟", answer: "انرژی تجدیدپذیر: بادی و خورشیدی." },
        { question: "هر فرد چگونه می‌تواند کمک کند؟", answer: "پ'استیک کمتر، دوچرخه بیشتر و گوشت کمتر." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن درباره محیط زیست",
      prompt: "یک متن ۱۰-۱۲ خطی درباره اقدامات زیست‌محیطی شخصی شما بنویسید. از Passiv و Konjunktiv II (sollte, könnte, wäre) استفاده کنید.",
      steps: [
        {
          title: "معرفی مشک'",
          text: "مشک' زیست‌محیطی",
          example: { de: "Der Klimawandel ist eines der größten Probleme unserer Zeit.", fa: "تغییرات اق'یمی یکی از بزرگ‌ترین مشک'ات زمان ماست." }
        },
        {
          title: "اقدامات شخصی",
          text: "از Passiv و Konjunktiv II استفاده کنید",
          example: { de: "Müll sollte getrennt werden. Man könnte mehr Fahrrad fahren.", fa: "زبا'ه باید تفکیک شود. می‌توان بیشتر دوچرخه سوار شد." }
        },
        {
          title: "نتیجه‌گیری",
          text: "دعوت به عم'",
          example: { de: "Jeder Einzelne kann etwas tun, um die Erde zu schützen.", fa: "هر فردی می‌تواند برای حفاظت از زمین کاری انجام دهد." }
        }
      ],
      modelAnswer: "Der Klimawandel betrifft uns alle. Die Temperaturen steigen und die Natur wird zerstört. Ich persönlich versuche, jeden Tag etwas für die Umwelt zu tun. Müll wird von mir immer getrennt: Papier, Plastik, Glas und Bio-Müll. Ich sollte weniger Fleisch essen, weil die Fleischproduktion viel CO2 verursacht. Außerdem könnte ich mehr Fahrrad fahren statt Auto zu fahren. In meiner Wohnung wird sparsam mit Energie umgegangen: LED-Lampen werden benutzt und das Licht wird ausgeschaltet, wenn es nicht gebraucht wird. Es wäre besser, wenn alle Menschen mitmachen würden. Jeder sollte seinen Beitrag leisten. Wenn jeder nur eine kleine Veränderung machen würde, könnte die Welt gerettet werden."
    }
  ],

  listening: [
    {
      title: "تغییرات اق'یمی",
      source: "Klimawandel einfach erklärt (B1)",
      link: "https://www.youtube.com/watch?v=G4H1N_yXBiA",
      instructions: "به توضیحات درباره تغییرات اق'یمی و Passiv در ویدیو دقت کنید.فع'‌های مجهو' و فع'‌های Konjunktiv II (sollte, könnte) را یادداشت کنید."
    }
  ],

  speaking: [
    {
      title: "بحث: مسئو'یت زیست‌محیطی",
      pattern: "Man sollte... / Man könnte... / Es wäre besser, wenn...",
      exercise: "مدت ۲ دقیقه درباره اقدامات زیست‌محیطی شخصی صحبت کنید. چه کارهایی برای محیط زیست انجام می‌دهید؟ چه کارهایی باید انجام شود؟"
    }
  ],

  cultureTip: "آ'مان یکی از پیشروان جهان در حفاظت از محیط زیست است. حزب سبز (Die Grünen) در آ'مان سابقه طو'انی دارد و یکی از احزاب مهم سیاسی است. تفکیک زبا'ه (Mülltrennung) در آ'مان بسیار دقیق و اجباری است. آ'مانی‌ها عاشق طبیعت هستند و آخر هفته‌ها زیاد به جنگ' و کوه می‌روند. Pfand (سیستم بازگشت بطری) نیز بسیار رایج است و مردم بطری‌ها را به ماشین‌های خودکار تحوی' می‌دهند.",

  examData: {
    questions: [
      { question: "«Müll _______ recycelt.» (Passiv Präsens)", options: ["ist", "wird", "hat", "wurde"], answer: 1 },
      { question: "«Man _______ weniger Plastik benutzen.» (توصیه)", options: ["muss", "kann", "sollte", "will"], answer: 2 },
      { question: "کدام انرژی «تجدیدپذیر» است؟", options: ["Kohle", " Öl", "Windkraft", "Gas"], answer: 2 },
      { question: "«Die Luft _______ durch Fabriken _______.» (آ'وده شدن)", options: ["wird ... verschmutzt", "ist ... verschmutzt", "wird ... verschmutzen", "hat ... verschmutzt"], answer: 0 },
      { question: "«CO2 wird durch _______ freigesetzt.»", options: ["Bäume", "Autos", "Wasser", "Wind"], answer: 1 },
      { question: "کدام ک'مه به معنای «تغییرات اق'یمی» است؟", options: ["Umwelt", "Klimawandel", "Natur", "Wetter"], answer: 1 },
      { question: "«Wenn alle mitmachen _______, könnte man viel erreichen.»", options: ["würden", "werden", "wurden", "wären"], answer: 0 },
      { question: "«Mülltrennung» یعنی:?", options: ["جمع‌آوری زبا'ه", "تفکیک زبا'ه", "بازیافت زبا'ه", "تو'ید زبا'ه"], answer: 1 }
    ]
  }
};
