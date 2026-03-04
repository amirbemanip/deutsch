export const day53Data = {
    title: "روز ۵۳: سفارش در کافه، رستوران و خرید لباس",
    objective: "در روز ۵۳ اصطلاحاتی را یاد می‌گیرید که برای یک شب‌نشینی در کافه و رستوران، و همچنین پرو کردن لباس در فروشگاه‌های آلمانی نیاز دارید. این جملات باعث می‌شوند مثل یک توریست حرفه‌ای رفتار کنید.",

    grammarData: {
        subtitle: "این بخش تمرکز روی گرامر ندارد، بلکه روی حفظ کردن قالب‌های آماده‌ی گفتاری است.",
        content: [
            {
                type: "text",
                title: "۱. مکالمات کافه و رستوران (Im Café / Restaurant)",
                text: "آلمانی‌ها معمولاً برای سفارش دادن بسیار مستقیم و مودب هستند. استفاده از hätte gern بهترین راه است."
            },
            {
                type: "examples",
                title: "سفارش غذا و پرداخت",
                items: [
                    { de: "Die Speisekarte, bitte.", fa: "منو (لیست غذاها) لطفاً." },
                    { de: "Ich hätte gern einen Kaffee.", fa: "من یک قهوه می‌خواستم. (بسیار مودبانه تا ich möchte)" },
                    { de: "Für mich bitte das Schnitzel.", fa: "برای من لطفاً شنیتسل بیاورید." },
                    { de: "Wir möchten zahlen, bitte.", fa: "ما می‌خواهیم حساب کنیم لطفاً." },
                    { de: "Zusammen oder getrennt?", fa: "با هم (در یک فاکتور) یا جداگانه؟ (گارسون همیشه این را می‌پرسد!)" },
                    { de: "Stimmt so.", fa: "بقیه‌ش مال خودتون (انعام دادن در آلمان. یعنی همینی که دادم درسته)." }
                ]
            },
            {
                type: "text",
                title: "۲. در فروشگاه لباس (Kleidung kaufen)",
                text: "آیا سایز لباس مناسب است؟ برای امتحان کردن و نظر دادن درباره لباس‌ها از این جملات استفاده کنید:"
            },
            {
                type: "examples",
                title: "پرو کردن و اندازه بودن",
                items: [
                    { de: "Kann ich das anprobieren?", fa: "می‌تونم این رو پرو کنم؟ (امتحان کردن لباس)" },
                    { de: "Wo ist die Umkleidekabine?", fa: "اتاقِ پرو کجاست؟" },
                    { de: "Das ist mir zu groß / zu klein.", fa: "این برای من خیلی بزرگ / خیلی کوچیک است." },
                    { de: "Haben Sie das in einer anderen Farbe?", fa: "آیا این را در رنگ دیگری دارید؟" },
                    { de: "Das passt mir gut. Ich nehme es.", fa: "این اندازه‌م هست. برمی‌دارمش (می‌خرمش)." }
                ]
            }
        ]
    },

    vocabData: {
        categories: [
            {
                title: "لغات کلیدی اندازه و غذا",
                words: [
                    {
                        de: "lecker",
                        fa: "خوشمزه",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Das Essen ist sehr lecker!", fa: "غذا خیلی خوشمزست!" }
                        ]
                    },
                    {
                        de: "die Rechnung",
                        fa: "صورتحساب / فاکتور",
                        article: "die",
                        plural: "die Rechnungen",
                        examples: [
                            { de: "Die Rechnung, bitte.", fa: "صورتحساب لطفاً." }
                        ]
                    },
                    {
                        de: "die Größe",
                        fa: "سایز / اندازه",
                        article: "die",
                        plural: "die Größen",
                        examples: [
                            { de: "Welche Größe haben Sie? - Größe M.", fa: "چه سایزی هستید؟ - سایز مدیوم." }
                        ]
                    },
                    {
                        de: "teuer / billig",
                        fa: "گران / ارزان",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "100 Euro? Das ist zu teuer!", fa: "۱۰۰ یورو؟ اون خیلی گرونه!" }
                        ]
                    }
                ]
            }
        ]
    },

    reading: [
        {
            text: "Am Abend im Restaurant\n\nKellner: Guten Abend! Was darf's sein?\nGast: Ich hätte gern ein Glas Rotwein.\nKellner: Und zum Essen?\nGast: Für mich das Steak mit Pommes, bitte.\n(Nach dem Essen)\nGast: Herr Ober, wir möchten zahlen!\nKellner: Zusammen oder getrennt?\nGast: Zusammen, bitte. Hier sind 30 Euro. Stimmt so (انعام).\nKellner: Vielen Dank! Schönen Abend noch.",
            questions: [
                { question: "مشتری برای سفارش مودبانه شراب قرمز از چه عبارتی استفاده کرد؟" },
                { question: "گارسون هنگام حساب کردن چه پرسید؟ (کلمات آلمانی)" },
                { question: "مشتری با گفتن «Stimmt so» چه منظوری به گارسون داشت؟" }
            ]
        }
    ],

    speaking: [
        {
            title: "تمرین کافه‌نشینی",
            pattern: "- Ich hätte gern...\n- Wir möchten zahlen.\n- Zusammen oder getrennt?\n- Stimmt so.",
            exercise: "جلوی آیینه بنشینید و لیوان چای خود را بردارید. تصور کنید در برلین هستید و می‌خواهید یک کیک و قهوه سفارش دهید. سفارش را با Ich hätte gern بدهید. سپس در نقش خودتان درخواست صورتحساب کنید، در نقش گارسون سوال zusammen/getrennt را بپرسید و در نهایت با یک انعام، بازی را تمام کنید!"
        }
    ]
};
