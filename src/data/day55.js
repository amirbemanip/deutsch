export const day55Data = {
    title: "روز ۵۵: آلمانی واقعی! (اصطلاحات کوچه بازاری و عامیانه)",
    objective: "تبریک می‌گویم! به آخرین روز از دوره‌ی ۵۵ روزه رسیدید. در این روز زبان خشک و رسمی کتابی را کنار می‌گذاریم و یاد می‌گیریم آلمانی‌ها در جمع‌های دوستانه (Umgangssprache) چطور صحبت می‌کنند.",

    grammarData: {
        subtitle: "این بخش تمرکز روی گرامر ندارد، بلکه روی حفظ کردن قالب‌های آماده‌ی گفتاری است.",
        content: [
            {
                type: "text",
                title: "۱. کلمات پرکننده و عامیانه (Füllwörter & Slang)",
                text: "آلمانی‌ها در صحبت‌های روزمره از کلماتی استفاده می‌کنند که شاید در هیچ دیکشنری رسمی معنی درست آن‌ها پیدا نشود! (مثل Halt, Quasi, Krass)"
            },
            {
                type: "examples",
                title: "شاخ‌های زبان آلمانی!",
                items: [
                    { de: "Krass / Geil!", fa: "خفن! / پشمام! (واژه‌ی Krass برای تعجب زیاد و Geil برای شدت عالی بودن به کار می‌رود)" },
                    { de: "Kein Bock!", fa: "حسش نیست! (به جای Ich habe keine Lust)" },
                    { de: "Ist mir Wurscht!", fa: "به درک! / واسم مهم نیست! (ترجمه لغوی: برای من سوسیس است!)" },
                    { de: "Mach kein Auge!", fa: "چشم نزن! / حسودی نکن!" },
                    { de: "Alter!", fa: "پسر! / داداش! (در جمع‌های بسیار صمیمی و دوستانه استفاده می‌شود)" }
                ]
            },
            {
                type: "text",
                title: "۲. اصطلاحات و ضرب‌المثل‌ها (Redewendungen)",
                text: "زبان آلمانی پر از ضرب‌المثل‌های عجیب و غریبی است که تا معنی اصطلاحی آن‌ها را ندانید، متوجه نمی‌شوید."
            },
            {
                type: "examples",
                title: "اصطلاحات رایج",
                items: [
                    { de: "Ich verstehe nur Bahnhof.", fa: "هیچی نمی‌فهمم! (انگار دارن به یه زبون دیگه حرف می‌زنن)" },
                    { de: "Da hast du Schwein gehabt!", fa: "خیلی شانس آوردی! (در آلمان خوک نماد شانس است)" },
                    { de: "Ich drücke dir die Daumen.", fa: "برات آرزوی موفقیت می‌کنم. (درحالی که شست‌ها را درون مشت فشار می‌دهند)" },
                    { de: "Abwarten und Tee trinken.", fa: "صبر کن و چای بنوش. (یعنی عجله نکن، ببینیم چی میشه)" }
                ]
            }
        ]
    },

    vocabData: {
        categories: [
            {
                title: "لغات کوچه بازاری (Slang)",
                words: [
                    {
                        de: "halt / quasi",
                        fa: "انگار / تو مایه‌های / اینطوری بگم (برای پر کردن مکث بین جملات)",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Das war halt so.", fa: "انگار اینجوری بود!" }
                        ]
                    },
                    {
                        de: "Mega / Hammer",
                        fa: "ترکوند! / محشر / بمب (برای بیان شدت فوق‌العاده بودن یک چیز)",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Die Party war der Hammer!", fa: "مهمونی بمب بود!" }
                        ]
                    },
                    {
                        de: "Kohle / Knete",
                        fa: "پول / مایه / چرک کف دست (به جای کلمه رسمی Geld)",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Ich habe momentan keine Kohle.", fa: "من الان هیچ مایه‌ای ندارم." }
                        ]
                    },
                    {
                        de: "die Karre",
                        fa: "ماشین / قراضه (به جای کلمه رسمی Auto در صحبت صمیمی)",
                        article: "die",
                        plural: "die Karren",
                        examples: [
                            { de: "Coole Karre hast du da!", fa: "عجب ماشین خفنی داری اونجا!" }
                        ]
                    }
                ]
            }
        ]
    },

    reading: [
        {
            text: "Ein Treffen mit Freunden am Freitagabend\n\nLukas: Alter, was geht ab? Lange nicht gesehen!\nJonas: Moin! Ja man, ich hatte so viel Stress auf der Arbeit. Ich bin komplett fertig.\nLukas: Ach krass. Gehen wir heute Abend auf eine Party? Ich habe voll Bock!\nJonas: Ne, echt nicht. Ich bin müde. Ich verstehe nur Bahnhof bei der Musik dort. Lass uns einfach ein Bier trinken.\nLukas: Ist mir Wurscht, Hauptsache wir chillen ein bisschen.\nJonas: Mega! Machen wir so.",
            questions: [
                { question: "لوکاس برای پرسیدن اینکه 'حالت چطوره/چه خبرا' با صمیمیت زیاد چه جمله‌ای (متفاوت از Na چه خبر) پرسید؟" },
                { question: "یوناس چرا به مهمانی نرفت؟ از چه کلمه‌ی Slang ای (برای بی حسی/بی میلی) استفاده کرد؟" },
                { question: "معنی Ich verstehe nur Bahnhof bei der Musik چیست؟" }
            ]
        }
    ],

    speaking: [
        {
            title: "تمرین لهسن آلمانی با لهجه‌ی دوستانه",
            pattern: "- Alter, was geht ab?\n- Ich habe (keinen) Bock.\n- Das ist mir Wurscht!\n- Krass!",
            exercise: "سعی کنید با صدای پرانرژی و دست تکان دادن (body language)، جملات بالا را روبه‌روی آینه بگویید. این جملات نیاز به اکت و احساس دارند. مثل یک آلمانی عصبانی یا خیلی هیجان‌زده!"
        }
    ]
};
