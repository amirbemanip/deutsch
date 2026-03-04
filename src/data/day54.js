export const day54Data = {
    title: "روز ۵۴: مواقع ضروری، پزشک و پلیس",
    objective: "هیچ‌کس دوست ندارد در کشور غریب بیمار شود یا به کمک نیاز پیدا کند، اما دانستن عبارات اورژانسی و نحوه مراجعه به پزشک یا ادارات، بسیار مهم است.",

    grammarData: {
        subtitle: "این بخش تمرکز روی گرامر ندارد، بلکه روی حفظ کردن قالب‌های آماده‌ی گفتاری است.",
        content: [
            {
                type: "text",
                title: "۱. مکالمات مطب دکتر (Beim Arzt)",
                text: "همانطور که قبلا یاد گرفتیم، برای نوبت گرفتن باید بگویید: Ich brauche einen Termin. اما وقتی پیش دکتر رفتید چه بگویید؟"
            },
            {
                type: "examples",
                title: "بیان علائم بیماری",
                items: [
                    { de: "Mir ist schlecht / Mir ist schwindelig.", fa: "حالم به هم می‌خوره (تهوع دارم) / سرم گیج می‌ره." },
                    { de: "Ich habe Fieber und Husten.", fa: "من تب و سرفه دارم." },
                    { de: "Ich brauche ein Rezept für diese Medikamente.", fa: "من برای این داروها نسخه نیاز دارم." },
                    { de: "Ich brauche eine Krankschreibung.", fa: "من یک گواهی استعلاجی (برای محل کار/مدرسه) می‌خوام." }
                ]
            },
            {
                type: "text",
                title: "۲. کلمات اورژانسی و پلیس (Notfälle und Polizei)",
                text: "اگر اتفاق جدی افتاد یا چیزی را گم کردید، این جملات را استفاده کنید (شماره اورژانس پزشکی و آتش‌نشانی در آلمان 112 و پلیس 110 است)."
            },
            {
                type: "examples",
                title: "درخواست کمک فوری",
                items: [
                    { de: "Helfen Sie mir, bitte!", fa: "لطفاً به من کمک کنید!" },
                    { de: "Ich habe meinen Pass / mein Handy verloren.", fa: "من پاسپورتم / گوشیم را گم کرده‌ام." },
                    { de: "Rufen Sie einen Krankenwagen!", fa: "یک آمبولانس خبر کنید!" },
                    { de: "Wo ist die Polizei?", fa: "پلیس کجاست؟" }
                ]
            }
        ]
    },

    vocabData: {
        categories: [
            {
                title: "لغات کلیدی سلامتی و اورژانس",
                words: [
                    {
                        de: "die Versicherung",
                        fa: "بیمه",
                        article: "die",
                        plural: "die Versicherungen",
                        examples: [
                            { de: "Haben Sie Ihre Versichertenkarte dabei?", fa: "کارت بیمه خود را همراه دارید؟" }
                        ]
                    },
                    {
                        de: "der Schmerz / die Schmerzen",
                        fa: "درد",
                        article: "der",
                        plural: "die Schmerzen",
                        examples: [
                            { de: "Ich habe starke Schmerzen im Bauch.", fa: "من درد شدیدی در شکمم دارم." }
                        ]
                    },
                    {
                        de: "gestohlen",
                        fa: "دزدیده شده (صفت/مفعولی)",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Mein Portemonnaie wurde gestohlen.", fa: "کیف پولم دزدیده شد." }
                        ]
                    },
                    {
                        de: "gefährlich / sicher",
                        fa: "خطرناک / امن",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Ist diese Gegend sicher?", fa: "آیا این منطقه امن است؟" }
                        ]
                    }
                ]
            }
        ]
    },

    reading: [
        {
            text: "Ein Notfall auf der Straße\n\nEin Tourist verliert plötzlich das Bewusstsein (از هوش رفتن) in der Straße. Ein Mann sieht das und ruft sofort 112 an. \nMann: Hallo! Bitte schicken Sie einen Krankenwagen! Hier ist ein Notfall in der Hauptstraße 10.\nZentrale: Ist die Person wach? Atmet sie?\nMann: Nein, die Person ist ohnmächtig. Bitte kommen Sie schnell!\nZentrale: Der Krankenwagen ist unterwegs (در راه است).",
            questions: [
                { question: "مرد شماره چه سازمانی را گرفت؟ 112 برای چیست؟" },
                { question: "اپراتور پرسید: «آیا شخص بیدار است؟». جمله‌ی آلمانی آن چیست؟" },
                { question: "مرد در جواب گفت حال شخص چگونه است؟ (کدام کلمه نشان‌دهنده‌ی بیهوشی بود؟)" }
            ]
        }
    ],

    speaking: [
        {
            title: "تمرین شرایط بحرانی (بسیار مهم)",
            pattern: "- Helfen Sie mir!\n- Rufen Sie die Polizei / den Krankenwagen!\n- Mir ist [schlecht/schwindelig].",
            exercise: "تصور کنید در خیابان کیف شما را زده‌اند یا حالتان به شدت بد شده است. با صدای بلند و استرس ساختگی فریاد بزنید (Helfen Sie mir) و درخواست پلیس یا آمبولانس کنید. سعی کنید این کلمات را در ذهن ناخودآگاه خود حک کنید."
        }
    ]
};
