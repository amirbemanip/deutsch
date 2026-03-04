export const day20Data = {
  "title": "روز 20 (تجمیع روزهای 77 تا 80)",
  "objective": "[روز 77] یادگیری جمله‌های مودب برای سفارش غذا و نوشیدنی در رستوران/کافه و خواستن Rechnung.\\n\\n[روز 78] یادگیری کلمات و جمله‌های مهم برای رزرو اتاق در هتل/هاستل (تعداد شب، نوع اتاق، Frühstück, Preis).\\n\\n[روز 79] تمرین چک‌این در هتل، توضیح مشکل در Zimmer (z.B. Fernseher funktioniert nicht) و پرداخت/خروج (auschecken).\\n\\n[روز 80] ترکیب مهارت‌های پول/قیمت، سفارش در رستوران و رزرو/چک‌این هتل در سه سناریوی سفر کوتاه (Urlaub).",
  "grammarData": {
    "subtitle": "Ich hätte gern … / Ich möchte … / Die Rechnung, bitte.\\nIch möchte ein Zimmer reservieren. / Haben Sie noch Zimmer frei?\\nEinchecken, Problem melden, Auschecken\\nسه صحنه‌ی سفر: im Laden, im Restaurant, im Hotel",
    "pronouns": [
      {
        "de": "سفارش مودبانه",
        "fa": "Ich hätte gern … / Ich möchte …",
        "type": "Ich hätte gern ein Schnitzel mit Pommes. – Ich möchte eine Pizza Margherita, bitte. – Für mich ein Wasser, bitte.[web:352][web:355][web:360]"
      },
      {
        "de": "از گارسون",
        "fa": "Anrede + آیا آماده‌ای؟ + alles zusammen?",
        "type": "Entschuldigung! – Sind Sie bereit zu bestellen? – Ja, ich hätte gern … . – Noch etwas? – Nein, danke. – Die Rechnung, bitte.[web:352][web:207][web:355]"
      },
      {
        "de": "پرسیدن ظرفیت",
        "fa": "Haben Sie freie Zimmer? / Haben Sie noch Zimmer frei?",
        "type": "Guten Tag, haben Sie noch ein Einzelzimmer frei? – Haben Sie noch Zimmer frei am Wochenende?[web:353][web:358]"
      },
      {
        "de": "رزروکردن",
        "fa": "Ich möchte ein Zimmer reservieren.",
        "type": "Ich möchte ein Doppelzimmer für zwei Nächte reservieren. – Ich brauche ein Einzelzimmer vom 10. bis 12. Mai.[web:353][web:358]"
      },
      {
        "de": "پرسیدن Preis و Frühstück",
        "fa": "Wie viel kostet das Zimmer pro Nacht? Ist das Frühstück inbegriffen?",
        "type": "Wie viel kostet das Zimmer pro Nacht? – 80 Euro. – Ist das Frühstück im Preis inbegriffen?[web:353][web:358]"
      },
      {
        "de": "چک‌این",
        "fa": "Ich habe eine Reservierung. / Ich möchte einchecken.",
        "type": "Guten Tag, ich habe eine Reservierung auf den Namen … . – Ich möchte einchecken. – Hier ist mein Pass.[web:356]"
      },
      {
        "de": "مشکل در Zimmer",
        "fa": "… funktioniert nicht. / … ist kaputt.",
        "type": "Der Fernseher in meinem Zimmer funktioniert nicht. – Die Klimaanlage ist kaputt.[web:356]"
      },
      {
        "de": "پرداخت و خروج",
        "fa": "Wir möchten auschecken. / Können wir die Rechnung bekommen?",
        "type": "Wir möchten morgen früh auschecken. – Können wir bitte die Rechnung bekommen? – Können wir mit Karte bezahlen?[web:356]"
      },
      {
        "de": "صحنه ۱ – خرید سوغاتی",
        "fa": "Preis fragen + bezahlen",
        "type": "Entschuldigung, wie viel kostet das T‑Shirt? – Es kostet 15 Euro neunundneunzig. – Ich nehme es. Ich zahle mit Karte.[web:357][web:359]"
      },
      {
        "de": "صحنه ۲ – Abendessen im Restaurant",
        "fa": "Bestellen + Rechnung",
        "type": "Im Restaurant: „Ich hätte gern eine Suppe als Vorspeise und das Schnitzel als Hauptgericht. Dazu ein Glas Wasser, bitte. Die Rechnung, bitte.“[web:352][web:355]"
      },
      {
        "de": "صحنه ۳ – Hotel: Reservierung + Problem + Auschecken",
        "fa": "ترکیب روز ۷۸ و ۷۹",
        "type": "Guten Tag, ich möchte ein Doppelzimmer für zwei Nächte reservieren. – Wie viel kostet das Zimmer pro Nacht? – Beim Check‑in: „Ich habe eine Reservierung auf den Namen …“ – Am nächsten Tag: „Die Dusche funktioniert nicht.“ – Beim Auschecken: „Wir möchten die Rechnung, bitte.“[web:353][web:356]"
      }
    ]
  },
  "vocabData": [
    {
      "de": "die Speisekarte",
      "fa": "منوی غذا",
      "usage": "Können wir bitte die Speisekarte sehen?[web:352]"
    },
    {
      "de": "die Vorspeise",
      "fa": "پیش‌غذا",
      "usage": "Als Vorspeise nehme ich eine Suppe.[web:352]"
    },
    {
      "de": "das Hauptgericht",
      "fa": "غذای اصلی",
      "usage": "Als Hauptgericht hätte ich gern das Hähnchen.[web:352]"
    },
    {
      "de": "die Nachspeise / der Nachtisch",
      "fa": "دسر",
      "usage": "Zum Nachtisch nehme ich ein Eis.[web:352]"
    },
    {
      "de": "die Rechnung",
      "fa": "صورت‌حساب",
      "usage": "Die Rechnung, bitte.[web:352][web:355]"
    },
    {
      "de": "stilles Wasser / Mineralwasser",
      "fa": "آب بدون گاز / گازدار",
      "usage": "Ich möchte ein stilles Wasser.[web:360]"
    },
    {
      "de": "die Reservierung / die Buchung",
      "fa": "رزرو / بوکینگ",
      "usage": "Ich habe eine Reservierung auf den Namen Ali.[web:356][web:353]"
    },
    {
      "de": "das Einzelzimmer",
      "fa": "اتاق یک‌نفره",
      "usage": "Ich brauche ein Einzelzimmer.[web:353][web:356]"
    },
    {
      "de": "das Doppelzimmer",
      "fa": "اتاق دونفره",
      "usage": "Wir möchten ein Doppelzimmer.[web:353][web:356]"
    },
    {
      "de": "frei / besetzt",
      "fa": "خالی / پر",
      "usage": "Sind noch Zimmer frei oder ist alles besetzt?[web:356]"
    },
    {
      "de": "die Rezeption",
      "fa": "رسپشن",
      "usage": "Ich gehe zur Rezeption.[web:356]"
    },
    {
      "de": "die Rechnung",
      "fa": "صورت‌حساب",
      "usage": "Wir möchten die Rechnung, bitte.[web:356]"
    },
    {
      "de": "einchecken / auschecken",
      "fa": "چک‌این / چک‌اوت",
      "usage": "Wir möchten um 14 Uhr einchecken und am Sonntag auschecken.[web:356]"
    },
    {
      "de": "die Klimaanlage",
      "fa": "کولر/تهویه",
      "usage": "Die Klimaanlage ist kaputt.[web:356]"
    },
    {
      "de": "der Schlüssel / die Schlüsselkarte",
      "fa": "کلید / کارت اتاق",
      "usage": "Hier ist Ihr Schlüssel für Zimmer 101.[web:356]"
    },
    {
      "de": "die Kreditkarte",
      "fa": "کارت اعتباری",
      "usage": "Kann ich mit Kreditkarte bezahlen?[web:356]"
    }
  ],
  "listening": [
    {
      "source": "Ordering in a Restaurant or Café – Lesson 30",
      "link": "https://www.youtube.com/watch?v=jJiE4Rfcl9w",
      "instructions": "۱) یک‌بار کامل ویدیو را ببین و به دیالوگ کامل «Bestellen – Essen – Rechnung» دقت کن.\n۲) جملات سفارش‌دادن را پاز کن و ۳ بار با صدای بلند تکرار کن: «Ich hätte gern … / Ich möchte …, bitte.»[web:352]\n۳) دو دیالوگ کوتاه خودت بساز: یکی فقط Getränk، یکی Essen + Getränk + Rechnung.",
      "title": "روز ۷۷: رستوران و کافه – سفارش‌دادن Essen & Trinken"
    },
    {
      "source": "Essential German Phrases for Hotels and Accommodations",
      "link": "https://www.olesentuition.co.uk/single-post/essential-german-words-and-phrases-to-book-a-hotel-or-accommodation",
      "instructions": "۱) بخش «Making a Reservation» را بخوان و جملات کلیدی مثل «Ich möchte ein Zimmer reservieren» را هایلایت کن.[web:353]\n۲) ۵ جمله‌ی مهم را روی کاغذ بنویس و ۳ بار با صدای بلند تمرین کن.\n۳) یک دیالوگ کوتاه تلفنی برای رزرو اتاق بنویس (سلام، تاریخ، نوع Zimmer، Preis، Frühstück).",
      "title": "روز ۷۸: هتل – رزروکردن اتاق (Reservierung)"
    },
    {
      "source": "German Hotel Vocabulary – Example Sentences",
      "link": "https://howtostudygerman.com/blog/german-vocabulary-for-hotels-and-accommodation",
      "instructions": "۱) چند مثال از بخش Example Sentences انتخاب کن، مخصوصاً آن‌هایی که درباره‌ی Fernseher/Klimaanlage/Rechnung هستند.[web:356]\n۲) آن‌ها را با صدای بلند تمرین کن و اسم وسیله را با چیزهای اتاقی که معمولاً برایت مهم است عوض کن (Wi‑Fi, Dusche…).\n۳) یک دیالوگ کوتاه با Rezeption بساز برای گزارش یک مشکل و درخواست حل آن.",
      "title": "روز ۷۹: هتل – چک‌این، مشکل در اتاق، پرداخت"
    },
    {
      "source": "6.3 – Shopping & Money | How to Ask the Price in German",
      "link": "https://www.youtube.com/watch?v=OJ-NPBYwvQo",
      "instructions": "۱) قسمتی از ویدیو را ببین که درباره‌ی «Wie viel kostet das?» و جواب‌هاست.\n۲) جمله‌های قیمت را با جملات رستوران و هتل که در روزهای ۷۷–۷۹ تمرین کردی ترکیب کن تا سه سناریوی کامل سفر بسازی.[web:359]",
      "title": "روز ۸۰: تمرین ترکیبی – Geld & Preise + Restaurant + Hotel"
    }
  ],
  "speaking": [
    {
      "pattern": "Ich hätte gern … / Ich möchte …, bitte. / Noch etwas? – Nein, danke. / Die Rechnung, bitte.",
      "exercise": "۱) منوی خیالی کوچکی روی کاغذ بنویس (۳ Essen + ۳ Getränke) و برای هرکدام سفارش بساز.\n۲) یک دیالوگ ۸–۱۰ جمله‌ای بنویس (Kellner/in – Gast) و آن را دو بار ضبط کن؛ یک بار آرام، یک بار با سرعت نزدیک به طبیعی.\n۳) دفعه‌ی بعدی که واقعاً به رستوران می‌روی، حداقل یک جمله از همین‌ها را عمداً به آلمانی بگو.",
      "title": "روز ۷۷: رستوران و کافه – سفارش‌دادن Essen & Trinken"
    },
    {
      "pattern": "Ich möchte ein Einzel-/Doppelzimmer für … Nächte reservieren. / Haben Sie noch Zimmer frei? / Wie viel kostet …?",
      "exercise": "۱) دو سناریو بنویس: یکی برای سفر کاری (Einzelzimmer)، یکی برای سفر با دوست (Doppelzimmer).\n۲) هر دو را به شکل دیالوگ تلفنی تمرین و ضبط کن.\n۳) تمرکز کن روی واضح گفتن Datum (از–تا) و تعداد Nächte.",
      "title": "روز ۷۸: هتل – رزروکردن اتاق (Reservierung)"
    },
    {
      "pattern": "Ich habe eine Reservierung auf den Namen … . / In meinem Zimmer … funktioniert nicht. / Wir möchten auschecken.",
      "exercise": "۱) سه دیالوگ کوتاه بنویس: چک‌این، Problem melden، چک‌اوت و پرداخت.\n۲) هر سه را ضبط کن؛ بعد گوش بده و ببین آیا می‌توانی آن‌ها را بدون متن هم بگویی.\n۳) تمرکز کن روی جمله‌های ثابت؛ مثلاً «Der Fernseher in meinem Zimmer funktioniert nicht.» را دقیق حفظ کن.",
      "title": "روز ۷۹: هتل – چک‌این، مشکل در اتاق، پرداخت"
    },
    {
      "pattern": "سه دیالوگ سفر: im Geschäft, im Restaurant, im Hotel",
      "exercise": "۱) سه دیالوگ ۸–۱۰ جمله‌ای بنویس: خرید کوچک، شام در رستوران، رزرو و چک‌این/چک‌اوت در هتل.\n۲) هر سه را پشت‌سر‌هم ضبط کن؛ بعد گوش بده و ببین کجا در Zahlen/Preise، سفارش، یا هتل گیر می‌کنی.\n۳) همان بخش‌ها را جداگانه چند بار دیگر تمرین کن تا تبدیل به جمله‌های آماده‌ی ذهنی شوند.",
      "title": "روز ۸۰: تمرین ترکیبی – Geld & Preise + Restaurant + Hotel"
    }
  ],
  "cultureTip": "[روز 77] عبارت «Ich hätte gern …» در رستوران آلمانی بسیار طبیعی و مودب است؛ اگر فقط همین را خوب و واضح بگویی، حتی با دایره‌ی لغت کم، سفارش‌دادن برایت راحت می‌شود.[web:352][web:355]\\n\\n[روز 78] در سفر در آلمانی‌زبان‌ها، اگر بتوانی به‌صورت ساده بگویی چه نوع Zimmer، چه تاریخی و با چه قیمتی می‌خواهی، در ۹۰٪ موارد مشکل خاصی نخواهی داشت؛ اینجا دقت تلفظ از دقت گرامر مهم‌تر است.[web:353][web:356]\\n\\n[روز 79] در هتل، کارمندان معمولاً راحت انگلیسی صحبت می‌کنند، اما اگر بتوانی چند جمله‌ی اصلی را به آلمانی بگویی، برخوردشان معمولاً گرم‌تر می‌شود و خودت هم اعتماد به نفس بیشتری می‌گیری.[web:353][web:356]\\n\\n[روز 80] وقتی برای اولین‌بار به یک کشور آلمانی‌زبان سفر می‌کنی، سه مهارت حیاتی همین‌ها هستند: قیمت‌پرسیدن، سفارش‌دادن، و هتل‌مدیریت‌کردن؛ اگر این بلاک ۷۶–۸۰ را خوب ببندی، سفر واقعی خیلی کم‌استرس‌تر خواهد بود.[web:352][web:353][web:351]"
};
