export const day52Data = {
    title: "روز ۵۲: در سفر (فرودگاه، قطار و راهیابی)",
    objective: "امروز برای مسافرت‌های درون و بیرون شهری آماده می‌شویم. این جملات برای پیدا کردن مسیر، خرید بلیت و گم نشدن در آلمان حیاتی هستند.",

    grammarData: {
        subtitle: "این بخش تمرکز روی گرامر ندارد، بلکه روی حفظ کردن قالب‌های آماده‌ی گفتاری است.",
        content: [
            {
                type: "text",
                title: "۱. گم شدن و پرسیدن آدرس (Wegbeschreibung)",
                text: "وقتی در شهر غریبی هستید، این سه جمله شما را نجات می‌دهند:"
            },
            {
                type: "examples",
                title: "چگونه بپرسیم کجاییم؟",
                items: [
                    { de: "Entschuldigung, wie komme ich zum Bahnhof?", fa: "ببخشید، چطور می‌تونم به ایستگاه قطار برم؟" },
                    { de: "Wo ist hier die nächste Apotheke?", fa: "نزدیک‌ترین داروخانه این اطراف کجاست؟" },
                    { de: "Ich habe mich verlaufen.", fa: "من گم شده‌ام. (جمله‌ی طلایی!)" },
                    { de: "Können Sie mir das auf der Karte zeigen?", fa: "می‌تونید روی نقشه به من نشون بدید؟" }
                ]
            },
            {
                type: "text",
                title: "۲. ایستگاه قطار و وسایل نقلیه (Am Bahnhof / Im Bus)",
                text: "در آلمان استفاده از قطار (DB) و اتوبوس جزء جدایی‌ناپذیر زندگی است. اما قطارها گاهی تاخیر دارند!"
            },
            {
                type: "examples",
                title: "خرید بلیت و اطلاعات پرواز/سفر",
                items: [
                    { de: "Ein Ticket nach Berlin, bitte.", fa: "یک بلیت به مقصد برلین، لطفاً." },
                    { de: "Einfach oder hin und zurück?", fa: "یک‌طرفه یا رفت و برگشت؟ (سوال رایج مسئول باجه)" },
                    { de: "Von welchem Gleis fährt der Zug ab?", fa: "قطار از کدام سکو حرکت می‌کند؟" },
                    { de: "Hat der Zug Verspätung?", fa: "آیا قطار تاخیر دارد؟" },
                    { de: "Ist dieser Platz noch frei?", fa: "آیا این صندلی (جای نشستن) خالی است؟" }
                ]
            }
        ]
    },

    vocabData: {
        categories: [
            {
                title: "لغات کلیدی جهت‌یابی و سفر",
                words: [
                    {
                        de: "geradeaus",
                        fa: "مستقیم",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Gehen Sie immer geradeaus.", fa: "همیشه مستقیم (به همین مسیر) بروید." }
                        ]
                    },
                    {
                        de: "links / rechts",
                        fa: "چپ / راست",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Biegen Sie links ab.", fa: "به سمت چپ بپیچید." }
                        ]
                    },
                    {
                        de: "der Flughafen",
                        fa: "فرودگاه",
                        article: "der",
                        plural: "die Flughäfen",
                        examples: [
                            { de: "Wie lange dauert die Fahrt zum Flughafen?", fa: "مسیر تا فرودگاه چقدر طول می‌کشه؟" }
                        ]
                    },
                    {
                        de: "das Gepäck",
                        fa: "چمدان / بارِ سفر",
                        article: "das",
                        plural: "-",
                        examples: [
                            { de: "Wo ist mein Gepäck?", fa: "چمدان‌های من کجاست؟" }
                        ]
                    }
                ]
            }
        ]
    },

    reading: [
        {
            text: "Am Schalter 3 im Bahnhof\n\nReisender: Entschuldigung, ich brauche ein Ticket nach München.\nVerkäufer: Einfach oder hin und zurück?\nReisender: Nur einfach (Nur Hinfahrt), bitte. Wann fährt der nächste Zug?\nVerkäufer: Um 14:30 Uhr von Gleis 5.\nReisender: Super, danke! Hat der Zug Verspätung?\nVerkäufer: Nein, er ist pünktlich. Das macht 45 Euro, bitte.",
            questions: [
                { question: "مسافر بلیت رفت و برگشت می‌خواست یا یک‌طرفه؟ (کلمه‌ی آلمانی آن را بگویید)" },
                { question: "قطار از کدام سکو (Gleis) حرکت می‌کند؟" },
                { question: "آیا قطار با تاخیر (Verspätung) حرکت می‌کند یا سر وقت (pünktlich)؟" }
            ]
        }
    ],

    speaking: [
        {
            title: "تمرین مامور قطار!",
            pattern: "- Ein Ticket nach [Stadt], bitte.\n- Einfach oder hin und zurück?\n- Von welchem Gleis?",
            exercise: "سعی کنید مکالمه‌ی خرید یک بلیت قطار را به تنهایی بازی کنید. هم جای مسافر حرف بزنید که مقصدش فرانکفورت است، و هم جای مسئول باجه که می‌پرسد «رفت و برگشت؟» و در نهایت سکوی شماره ۷ را نشان می‌دهد."
        }
    ]
};
