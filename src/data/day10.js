export const day10Data = {
  title: "روز ۱۰: مرور کلی A1 + آزمون مینی",
  objective: "در پایان این روز، شما تمام گرامر سطح A1 (روزهای ۱ تا ۹) را مرور کرده‌اید و با یک آزمون ۲۰ سوالی، آمادگی خود را محک می‌زنید. این نقطه عطف یادگیری شماست!",
  level: "A1",

  grammarData: {
    subtitle: "مرور جامع گرامر A1",
    content: [
      {
        type: "text",
        title: "مرور سریع: الفبا و تلفظ (روز ۱)",
        text: "۲۶ حرف + ä, ö, ü, ß. ترکیب‌های مهم: ei=[aɪ], ie=[iː], eu=[ɔʏ], au=[aʊ], sch=[ʃ], ch=[x/ç], sp=[ʃp], st=[ʃt]."
      },
      {
        type: "table",
        title: "جدول مرور: آرتیکل‌ها و جنسیت (روز ۲)",
        rows: [
          { de: "der (مذکر): -er, روزها، ماه‌ها، مایعات", fa: "der Lehrer, der Montag, der Kaffee" },
          { de: "die (مؤنث): -ung, -e, -heit, -keit, -schaft, -tion, -tät", fa: "die Zeitung, die Lampe, die Universität" },
          { de: "das (خنثی): -chen, -lein, -ment, -um", fa: "das Mädchen, das Dokument, das Museum" },
          { de: "die (جمع): همه اسم‌ها", fa: "die Männer, die Frauen, die Kinder" }
        ]
      },
      {
        type: "table",
        title: "جدول مرور: افعال sein و haben (روز ۳)",
        rows: [
          { de: "sein: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind", fa: "Ich bin müde. Sie ist Lehrerin. Er ist 25 Jahre alt." },
          { de: "haben: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben", fa: "Ich habe Hunger. Sie haben keine Zeit. Er hat recht." }
        ]
      },
      {
        type: "table",
        title: "جدول مرور: ضمایر ملکی (روز ۴)",
        rows: [
          { de: "مذکر/خنثی: mein, dein, sein, ihr, unser, euer, ihr, Ihr", fa: "mein Bruder, sein Auto, unser Kind" },
          { de: "مؤنث/جمع: meine, deine, seine, ihre, unsere, eure, ihre, Ihre", fa: "meine Mutter, seine Katze, unsere Kinder" }
        ]
      },
      {
        type: "table",
        title: "جدول مرور: اعداد (روز ۵)",
        rows: [
          { de: "۰-۱۲: null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf", fa: "اعداد اصلی که باید حفظ شوند" },
          { de: "۱۳-۱۹: dreizehn, vierzehn... (عدد + zehn)", fa: "dreizehn = drei + zehn" },
          { de: "دهگان‌ها: zwanzig, dreißig, vierzig... (عدد + zig)", fa: "zwanzig, dreißig, vierzig, fünfzig" },
          { de: "اعداد ترکیبی: یکان + und + دهگان", fa: "25 = fünfundzwanzig (۵ و ۲۰)" }
        ]
      },
      {
        type: "table",
        title: "جدول مرور: نفی (روز ۶)",
        rows: [
          { de: "nicht: نفی فعل، صفت، قید", fa: "Ich bin nicht müde. Das ist nicht gut." },
          { de: "kein/keine: نفی اسم با آرتیکل", fa: "Ich habe keinen Hund. Sie hat keine Kinder." },
          { de: "kein = مذکر/خنثی، keine = مؤنث/جمع", fa: "kein Auto, keine Katze, keine Kinder" }
        ]
      },
      {
        type: "table",
        title: "جدول مرور: صرف فعل منظم (روز ۷)",
        rows: [
          { de: "الگو: -e, -st, -t, -en, -t, -en", fa: "lernen: lerne, lernst, lernt, lernen, lernt, lernen" },
          { de: "فعل با t/d در du: -est", fa: "arbeiten: du arbeitest (نه arbeitst!)" },
          { de: "تغییر صدا: fahren→fährst/fährt", fa: "fahren: du fährst, er fährt (a→ä)" },
          { de: "تغییر صدا: sprechen→sprichst/spricht", fa: "sprechen: du sprichst, er spricht (e→i)" }
        ]
      },
      {
        type: "table",
        title: "جدول مرور: حروف اضافه (روز ۸)",
        rows: [
          { de: "in: در / به داخل", fa: "Ich wohne in Berlin. / Ich gehe in die Schule." },
          { de: "auf: روی / به روی", fa: "Das Buch liegt auf dem Tisch." },
          { de: "aus: از / اهل", fa: "Ich komme aus dem Iran." },
          { de: "mit: با / همراه", fa: "Ich fahre mit dem Bus." },
          { de: "nach: به (شهرها) / بعد از", fa: "Ich fahre nach Berlin." },
          { de: "zu: به / نزد", fa: "Ich gehe zum Arzt." },
          { de: "von: از / از طرف", fa: "Ich komme von der Arbeit." }
        ]
      },
      {
        type: "table",
        title: "جدول مرور: Akkusativ (روز ۹)",
        rows: [
          { de: "فقط der → den (مذکر)", fa: "Ich sehe den Mann. Ich kaufe den Tisch." },
          { de: "die, das, جمع: بدون تغییر", fa: "Ich sehe die Frau. Ich kaufe das Buch." },
          { de: "ein → einen (مذکر)", fa: "Ich habe einen Bruder." },
          { de: "فعل‌های Akkusativ: sehen, kaufen, essen, trinken, lesen, suchen, brauchen, haben, machen, lieben", fa: "Ich esse den Apfel. Er liest das Buch." }
        ]
      },
      {
        type: "text",
        title: "ساختار جمله خبری: همیشه فعل در جایگاه ۲!",
        text: "فرمول: [فاعل/زمان/مکان] + [فعل] + [بقیه]\nIch lerne heute Deutsch. / Heute lerne ich Deutsch. / In Berlin lerne ich Deutsch.\nنکته: اگر زمان یا مکان اول بیاید، فعل در جایگاه ۲ و فاعل در جایگاه ۳ می‌رود."
      },
      {
        type: "alert",
        title: "نکات طلایی برای آزمون",
        text: "۱. آرتیکل همراه اسم یاد بگیرید. ۲. فعل sein و haben را حفظ باشید. ۳. فقط der→den در Akkusativ تغییر می‌کند. ۴. فعل همیشه در جایگاه ۲. ۵. اعداد: یکان + und + دهگان."
      },
      {
        type: "interactive_quiz",
        title: "آزمون مروری: ترکیبی",
        questions: [
          {
            question: "صرف فعل sein با «wir» چیست؟",
            questionDe: "Wie konjugiert man 'sein' mit 'wir'?",
            options: [
              { text: "wir bin", isCorrect: false },
              { text: "wir sind", isCorrect: true },
              { text: "wir seid", isCorrect: false }
            ],
            explanation: "درست! wir sind = ما هستیم."
          },
          {
            question: "آرتیکل «der Hund» در Akkusativ چه می‌شود؟",
            questionDe: "Was wird aus 'der Hund' im Akkusativ?",
            options: [
              { text: "der Hund", isCorrect: false },
              { text: "den Hund", isCorrect: true },
              { text: "dem Hund", isCorrect: false }
            ],
            explanation: "عالی! der → den در Akkusativ."
          },
          {
            question: "عدد ۴۷ به آلمانی چیست؟",
            questionDe: "Wie sagt man 47 auf Deutsch?",
            options: [
              { text: "vierzigsieben", isCorrect: false },
              { text: "siebenundvierzig", isCorrect: true },
              { text: "siebzigundvier", isCorrect: false }
            ],
            explanation: "درست! sieben (۷) + und (و) + vierzig (۴۰) = siebenundvierzig."
          },
          {
            question: "کدام جمله صحیح است؟",
            questionDe: "Welcher Satz ist richtig?",
            options: [
              { text: "Ich habe nicht Hund.", isCorrect: false },
              { text: "Ich habe keinen Hund.", isCorrect: true },
              { text: "Ich habe kein Hund.", isCorrect: false }
            ],
            explanation: "عالی! Hund مذکر است، پس keinen در Akkusativ."
          }
        ]
      }
    ]
  },

  vocabData: {
    categories: [
      {
        title: "کلمات ضروری A1 - مرور",
        words: [
          {
            de: "der Mensch",
            fa: "انسان",
            ipa: "[mɛnʃ]",
            article: "der",
            plural: "die Menschen",
            examples: [{ de: "Der Mensch ist sozial.", fa: "انسان اجتماعی است." }]
          },
          {
            de: "die Welt",
            fa: "جهان",
            ipa: "[vɛlt]",
            article: "die",
            examples: [{ de: "Die Welt ist schön.", fa: "جهان زیباست." }]
          },
          {
            de: "das Leben",
            fa: "زندگی",
            ipa: "[ˈleːbn̩]",
            article: "das",
            examples: [{ de: "Das Leben ist gut.", fa: "زندگی خوب است." }]
          },
          {
            de: "die Arbeit",
            fa: "کار",
            ipa: "[ˈaʁbaɪ̯t]",
            article: "die",
            plural: "die Arbeiten",
            examples: [{ de: "Ich habe viel Arbeit.", fa: "کار زیاد دارم." }]
          },
          {
            de: "das Glück",
            fa: "شانس / خوشبختی",
            ipa: "[ɡlʏk]",
            article: "das",
            examples: [{ de: "Viel Glück!", fa: "موفق باش!" }]
          },
          {
            de: "die Freude",
            fa: "شادی",
            ipa: "[ˈfʁɔʏ̯də]",
            article: "die",
            examples: [{ de: "Das macht mir Freude.", fa: "این به من شادی می‌دهد." }]
          },
          {
            de: "der Fehler",
            fa: "اشتباه",
            ipa: "[ˈfeːlɐ]",
            article: "der",
            plural: "die Fehler",
            examples: [{ de: "Kein Fehler!", fa: "اشتباه نکن!" }]
          },
          {
            de: "die Erfahrung",
            fa: "تجربه",
            ipa: "[ɛɐ̯ˈfaːʁʊŋ]",
            article: "die",
            plural: "die Erfahrungen",
            examples: [{ de: "Das ist eine gute Erfahrung.", fa: "این یک تجربه خوب است." }]
          },
          {
            de: "die Sprache",
            fa: "زبان",
            ipa: "[ˈʃpʁaːxə]",
            article: "die",
            plural: "die Sprachen",
            examples: [{ de: "Deutsch ist eine schöne Sprache.", fa: "آلمانی یک زبان زیباست." }]
          },
          {
            de: "das Ziel",
            fa: "هدف",
            ipa: "[tsiːl]",
            article: "das",
            plural: "die Ziele",
            examples: [{ de: "Mein Ziel ist B1.", fa: "هدف من سطح B1 است." }]
          }
        ]
      }
    ]
  },

  reading: [
    {
      text: "Mein Weg zum Deutsch (مسیر من به آلمانی)\n\nIch heiße Amir und bin 28 Jahre alt. Ich komme aus dem Iran und wohne jetzt in München. Ich bin Ingenieur und arbeite bei Siemens.\nVor einem Jahr konnte ich kein Deutsch. Meine erste Lehrerin war Frau Müller. Sie erklärt sehr gut. Jeden Tag lerne ich zwei Stunden Deutsch.\nMein Ziel ist B1. Ich möchte in Deutschland bleiben und eine gute Arbeit finden. Meine Familie unterstützt mich. Mein Vater sagt: «Deutsch ist wichtig!»\nHeute bin ich nicht mehr müde, sondern glücklich. Das Leben in Deutschland ist gut. Ich freue mich auf die Zukunft!",
      translation: [
        { de: "Mein Weg zum Deutsch", fa: "مسیر من به آلمانی" },
        { de: "Ich heiße Amir und bin 28 Jahre alt.", fa: "نام من امیر است و ۲۸ ساله‌ام." },
        { de: "Ich komme aus dem Iran und wohne jetzt in München.", fa: "از ایران هستم و الان در مونیخ زندگی می‌کنم." },
        { de: "Ich bin Ingenieur und arbeite bei Siemens.", fa: "مهندس هستم و در زیمنس کار می‌کنم." },
        { de: "Vor einem Jahr konnte ich kein Deutsch.", fa: "یک سال پیش آلمانی بلد نبودم." },
        { de: "Meine erste Lehrerin war Frau Müller.", fa: "اولین معلمم خانم مولر بود." },
        { de: "Sie erklärt sehr gut.", fa: "او خیلی خوب توضیح می‌دهد." },
        { de: "Jeden Tag lerne ich zwei Stunden Deutsch.", fa: "هر روز دو ساعت آلمانی یاد می‌گیرم." },
        { de: "Mein Ziel ist B1.", fa: "هدف من B1 است." },
        { de: "Ich möchte in Deutschland bleiben.", fa: "می‌خواهم در آلمان بمانم." },
        { de: "Meine Familie unterstützt mich.", fa: "خانواده‌ام حمایتم می‌کنند." },
        { de: "Heute bin ich nicht mehr müde, sondern glücklich.", fa: "امروز دیگر خسته نیستم، بلکه خوشحالم." },
        { de: "Ich freue mich auf die Zukunft!", fa: "به آینده امیدوارم!" }
      ],
      questions: [
        { question: "امیر چند ساله است و کجا زندگی می‌کند؟", answer: "۲۸ ساله و در مونیخ." },
        { question: "امیر کجا کار می‌کند؟", answer: "در زیمنس." },
        { question: "هدف امیر چیست؟", answer: "رسیدن به سطح B1 و ماندن در آلمان." },
        { question: "امیر امروز چه احساسی دارد؟", answer: "دیگر خسته نیست، بلکه خوشحال است." }
      ]
    }
  ],

  writing: [
    {
      title: "نوشتن خلاصه یادگیری ۱۰ روزه",
      prompt: "مسیر یادگیری خود را در ۱۰ روز گذشته خلاصه کنید.",
      steps: [
        {
          title: "شروع",
          text: "روز اول چه چیزهایی یاد گرفتید.",
          example: { de: "Am Tag 1 habe ich das Alphabet gelernt.", fa: "روز ۱ الفبا را یاد گرفتم." }
        },
        {
          title: "میانه",
          text: "مهم‌ترین چیزهایی که یاد گرفتید.",
          example: { de: "Ich habe Akkusativ und Präpositionen gelernt.", fa: "Akkusativ و حروف اضافه را یاد گرفتم." }
        },
        {
          title: "هدف",
          text: "هدف شما بعد از این ۱۰ روز.",
          example: { de: "Mein Ziel ist jetzt B1.", fa: "هدف من الان B1 است." }
        }
      ],
      modelAnswer: "In 10 Tagen habe ich viel gelernt. Am Tag 1 habe ich das Alphabet und die Aussprache gelernt. Dann habe ich Artikel, sein und haben gelernt. Am Tag 5 habe ich Zahlen gelernt. Am Tag 9 habe ich Akkusativ gelernt. Das war schwer, aber interessant. Mein Ziel ist B1. Ich freue mich!"
    }
  ],

  listening: [
    {
      title: "۱. مرور کلی (A1 hören)",
      instruction: "تمرین شنیداری:\n۱. جملات را بشنوید و مباحث گرامری هر جمله را مشخص کنید.\n۲. جملات را با صدای بلند تکرار کنید.",
      sentences: [
        { de: "Ich heiße Maria und bin 25 Jahre alt.", fa: "نام من ماریاست و ۲۵ ساله‌ام. (sein + سن)", tts: "Ich heiße Maria und bin 25 Jahre alt." },
        { de: "Ich komme aus dem Iran.", fa: "از ایران هستم. (kommen aus)", tts: "Ich komme aus dem Iran." },
        { de: "Ich habe keine Kinder.", fa: "بچه ندارم. (kein + نفی)", tts: "Ich habe keine Kinder." },
        { de: "Ich fahre mit dem Bus zur Arbeit.", fa: "با اتوبوس به سر کار می‌روم. (mit + nach/zu)", tts: "Ich fahre mit dem Bus zur Arbeit." },
        { de: "Ich sehe den Film.", fa: "فیلم را می‌بینم. (Akkusativ)", tts: "Ich sehe den Film." },
        { de: "Mein Vater ist Ingenieur.", fa: "پدرم مهندس است. (ضمیر ملکی + sein)", tts: "Mein Vater ist Ingenieur." }
      ]
    }
  ],

  speaking: [
    {
      title: "تمرین نهایی: معرفی کامل",
      pattern: "- Guten Tag! Wie heißen Sie?\n- Ich heiße Ali und bin 28 Jahre alt.\n- Woher kommen Sie?\n- Ich komme aus dem Iran, aber ich wohne jetzt in München.\n- Was machen Sie?\n- Ich bin Ingenieur und arbeite bei Siemens. Ich lerne Deutsch.\n- Haben Sie Familie?\n- Ja, ich habe eine Frau und ein Kind. Wir sind glücklich.",
      exercise: "تمرین نهایی:\nگام ۱: بخش pattern را بشنوید.\nگام ۲: خودتان را با اطلاعات واقعی معرفی کنید.\nگام ۳: بدون نگاه کردن به متن، مکالمه کامل انجام دهید."
    }
  ],

  cultureTip: "تبریک! شما ۱۰ روز اول یادگیری آلمانی را تمام کردید. در فرهنگ آلمانی، پشتکار و نظم (Disziplin) بسیار ارزشمند است. اگر هر روز فقط ۳۰ دقیقه آلمانی بخوانید، در ۶ ماه به سطح B1 می‌رسید. نکته مهم: در آلمان، امتحان‌های رسمی مثل Goethe-Zertifikat A1 و B1 برای مهاجرت و کار لازم است. هزینه امتحان A1 حدود ۲۰۰ یورو و B1 حدود ۲۵۰ یورو است. موفق باشید!",

  examData: {
    questions: [
      {
        question: "آرتیکل صحیح «Mädchen» (دختر) چیست؟",
        options: ["die Mädchen", "das Mädchen", "der Mädchen"],
        answer: 1
      },
      {
        question: "صرف فعل sein با «ihr» چیست؟",
        options: ["seid", "sind", "bist"],
        answer: 0
      },
      {
        question: "آرتیکل «der Mann» در Akkusativ چه می‌شود؟",
        options: ["der Mann", "den Mann", "dem Mann"],
        answer: 1
      },
      {
        question: "عدد ۳۵ به آلمانی چیست؟",
        options: ["dreißigfünf", "fünfunddreißig", "dreißigundfünf"],
        answer: 1
      },
      {
        question: "«Ich habe keine Zeit» یعنی چه؟",
        options: ["من وقت دارم", "من وقت ندارم", "من زمان هستم"],
        answer: 1
      },
      {
        question: "کدام حرف اضافه برای «اهل ایران بودن» استفاده می‌شود؟",
        options: ["von", "aus", "nach"],
        answer: 1
      },
      {
        question: "صرف فعل «fahren» با «er» (با تغییر صدا) چیست؟",
        options: ["er fahrt", "er fährt", "er fahret"],
        answer: 1
      },
      {
        question: "در جمله خبری، فعل در کجا قرار می‌گیرد؟",
        options: ["جایگاه ۱", "جایگاه ۲", "جایگاه ۳"],
        answer: 1
      },
      {
        question: "کدام جمله صحیح است؟",
        options: ["Ich sehe der Film.", "Ich sehe den Film.", "Ich sehe dem Film."],
        answer: 1
      },
      {
        question: "«nicht» برای چه چیزی استفاده می‌شود؟",
        options: ["نفی اسم", "نفی فعل/صفت", "نفی جمع"],
        answer: 1
      },
      {
        question: "«meine Schwester» در Akkusativ چه می‌شود؟",
        options: ["meinen Schwester", "meine Schwester", "meinem Schwester"],
        answer: 1
      },
      {
        question: "فعل «sehen» چه حالتی می‌گیرد؟",
        options: ["Nominativ", "Dativ", "Akkusativ"],
        answer: 2
      },
      {
        question: "«Ich fahre ___ dem Bus» یعنی چه؟",
        options: ["با اتوبوس می‌روم", "به اتوبوس می‌روم", "از اتوبوس می‌آیم"],
        answer: 0
      },
      {
        question: "پسوند -ung نشان‌دهنده چه جنسیتی است؟",
        options: ["der (مذکر)", "die (مؤنث)", "das (خنثی)"],
        answer: 1
      },
      {
        question: "«Ich bin 25 Jahre alt» یعنی چه؟",
        options: ["من ۲۵ سال دارم", "من ۲۵ ساله‌ام", "من ۲۵ سال شدم"],
        answer: 1
      },
      {
        question: "کدام فعل در du و er تغییر صدا دارد؟",
        options: ["lernen", "spielen", "sprechen", "arbeiten"],
        answer: 2
      },
      {
        question: "«Das ist kein Problem» یعنی چه؟",
        options: ["این مشکل است", "این مشکلی نیست", "این مشکل ندارد"],
        answer: 1
      },
      {
        question: "ضمیر «Sie» (رسمی) همیشه چطور نوشته می‌شود؟",
        options: ["با s کوچک", "با S بزرگ", "با S بزرگ فقط در ابتدای جمله"],
        answer: 1
      },
      {
        question: "۱۰۰ به آلمانی چیست؟",
        options: ["hundert", "tausend", "zehnzig"],
        answer: 0
      },
      {
        question: "کدام جمله ساختار صحیح دارد؟",
        options: ["Heute ich bin müde.", "Heute bin ich müde.", "Ich bin heute müde."],
        answer: 1
      }
    ]
  }
};
