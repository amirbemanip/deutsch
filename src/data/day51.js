export const day51Data = {
    title: "روز ۵۱: مکالمات کوچه و خیابان (احوالپرسی و تعارفات)",
    objective: "خوش آمدید به بخش ۵ روزه‌ی مکالمات بقا! در این روز با اصطلاحات رایجی آشنا می‌شویم که آلمانی‌ها هر روز در خیابان، با همسایه‌ها و دوستان خود استفاده می‌کنند. دیگر نیازی به جملات کتابی نیست!",

    grammarData: {
        subtitle: "این بخش تمرکز روی گرامر ندارد، بلکه روی حفظ کردن قالب‌های آماده‌ی گفتاری است.",
        content: [
            {
                type: "text",
                title: "۱. احوالپرسی‌های خودمانی (Begrüßung)",
                text: "آلمانی‌ها در خیابان همیشه از جملات کامل استفاده نمی‌کنند. کلمات کوتاه و سریع، کلید ارتباط طبیعی است."
            },
            {
                type: "examples",
                title: "جایگزین‌های جذاب برای Hallo و Wie geht es dir",
                items: [
                    { de: "Na?", fa: "چطوری؟ / چه خبر؟ (کوتاه‌ترین و محبوب‌ترین کلمه‌ی احوالپرسی در کل آلمان! در جواب هم می‌گویند: Na!)" },
                    { de: "Moin! / Moin Moin!", fa: "سلام (بیشتر در شمال آلمان، اما همه‌جا شنیده می‌شود. ربطی به صبح Morgen ندارد!)" },
                    { de: "Servus!", fa: "سلام / خداحافظ (در جنوب آلمان و اتریش بسیار رایج است)" },
                    { de: "Alles fit?", fa: "روبه‌راهی؟ / همه‌چی مرتبه؟ (به جای Wie gehts)" },
                    { de: "Was läuft?", fa: "چه خبر؟ (دقیقاً معادل What's up در انگلیسی)" }
                ]
            },
            {
                type: "text",
                title: "۲. خداحافظی‌های خیابانی (Verabschiedung)",
                text: "به جای کلمه‌ی خشک و رسمی Auf Wiedersehen، از این اصطلاحات استفاده کنید:"
            },
            {
                type: "examples",
                title: "خداحافظی‌های روزمره",
                items: [
                    { de: "Mach's gut!", fa: "مواظب خودت باش! / به سلامت! (بسیار صمیمی و زیبا)" },
                    { de: "Bis dann! / Bis später!", fa: "تا بعد! / می‌بینمت!" },
                    { de: "Schönen Tag noch!", fa: "روز خوبی داشته باشی! (مخصوصاً موقع خروج از مغازه یا سوپرمارکت)" },
                    { de: "Wir sehen uns!", fa: "همدیگر رو می‌بینیم!" }
                ]
            },
            {
                type: "alert",
                title: "جادوی کلمه‌ی Bitte",
                text: "کلمه‌ی Bitte فقط به معنای «لطفاً» نیست! \n- اگر کسی تشکر کرد (Danke) ➔ Bitte! (خواهش می‌کنم)\n- اگر چیزی رو متوجه نشدید ➔ Wie bitte? (ببخشید چی گفتی؟)\n- وقتی چیزی رو به کسی تعارف می‌کنید ➔ Bitte schön! (بفرمایید!)"
            }
        ]
    },

    vocabData: {
        categories: [
            {
                title: "واکنش‌های سریع (Reaktionen)",
                words: [
                    {
                        de: "Genau!",
                        fa: "دقیقاً! (برای تایید حرف طرف مقابل بسیار استفاده می‌شود)",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Das Wetter ist heute super. - Genau!", fa: "امروز هوا عالیه. - دقیقاً!" }
                        ]
                    },
                    {
                        de: "Ach so!",
                        fa: "آهان! / که اینطور!",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Der Zug hat Verspätung. - Ach so!", fa: "قطار تاخیر داره. - آهان که اینطور!" }
                        ]
                    },
                    {
                        de: "Kein Problem!",
                        fa: "مشکلی نیست! / فدای سرت!",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Entschuldigung für die Verspätung. - Kein Problem!", fa: "ببخشید بابت تاخیر. - مشکلی نیست!" }
                        ]
                    },
                    {
                        de: "Stimmt!",
                        fa: "درسته! / موافقم!",
                        article: "-",
                        plural: "-",
                        examples: [
                            { de: "Deutsch ist schwer. - Stimmt!", fa: "آلمانی سخته. - درسته!" }
                        ]
                    }
                ]
            }
        ]
    },

    reading: [
        {
            text: "Ein kurzes Gespräch auf der Straße\n\n(Ali trifft seinen Nachbarn Thomas)\nAli: Hallo Thomas, na, alles fit?\nThomas: Moin Ali! Ja, alles gut, danke. Und bei dir? Was läuft?\nAli: Nicht viel. Ich gehe gerade einkaufen.\nThomas: Ach so. Ich muss jetzt zur Arbeit.\nAli: Okay, dann mach's gut! Einen schönen Tag noch.\nThomas: Danke, dir auch! Bis dann!",
            questions: [
                { question: "علی برای احوالپرسی صمیمی با توماس از چه جمله‌ای (به جز سلام) استفاده کرد؟" },
                { question: "توماس برای خداحافظی گفت «Danke, dir auch!». این جمله یعنی چه؟" },
                { question: "جمله‌ی «Mach's gut» چه حسی را به مخاطب منتقل می‌کند؟" }
            ]
        }
    ],

    speaking: [
        {
            title: "تمرین سایه (Shadowing) در خیابان",
            pattern: "- Na?\n- Alles fit?\n- Mach's gut!",
            exercise: "تصور کنید در خیابان در حال قدم زدن هستید. با ۵ دوست خیالی خود به صورت گذری برخورد می‌کنید. هر بار با یک عبارت جدید (Moin, Na, Alles fit) با آن‌ها سلام و چاق‌سلامتی کنید و سریع با (Bis dann, Mach's gut) خداحافظی کنید. این کلمات باید مثل آب خوردن روی زبانتان بچرخند!"
        }
    ]
};
