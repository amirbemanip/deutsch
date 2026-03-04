import fs from 'fs';
import { pathToFileURL } from 'url';

async function run() {
    const sourcePath = 'd:/zaban asli/my-german-app/src/data';
    const outPath = 'd:/zaban asli/my-german-app/src/data_new';
    fs.mkdirSync(outPath, { recursive: true });

    for (let d = 1; d <= 50; d++) {
        const newData = {
            title: `روز ${d} (تجمیع روزهای ${d * 4 - 3} تا ${d * 4})`,
            objective: "",
            grammarData: { subtitle: "", pronouns: [], alphabet: [] },
            vocabData: [],
            listening: [],
            speaking: [],
            cultureTip: ""
        };

        let examQuestions = [];

        for (let i = 3; i >= 0; i--) {
            const oldDay = d * 4 - i;
            try {
                const fileUrl = pathToFileURL(`${sourcePath}/day${oldDay}.js`).href;
                const module = await import(fileUrl);
                const item = module[`day${oldDay}Data`];

                if (item.objective) newData.objective += `[روز ${oldDay}] ` + item.objective + "\\n\\n";

                if (item.grammarData) {
                    if (item.grammarData.subtitle) newData.grammarData.subtitle += item.grammarData.subtitle + "\\n";
                    if (item.grammarData.pronouns) newData.grammarData.pronouns.push(...item.grammarData.pronouns);
                    if (item.grammarData.alphabet) newData.grammarData.alphabet.push(...item.grammarData.alphabet);
                }

                if (item.vocabData) {
                    newData.vocabData.push(...item.vocabData);
                }
                if (item.listening && Object.keys(item.listening).length > 0) {
                    newData.listening.push({ ...item.listening, title: item.title });
                }
                if (item.speaking && Object.keys(item.speaking).length > 0) {
                    newData.speaking.push({ ...item.speaking, title: item.title });
                }
                if (item.cultureTip) {
                    newData.cultureTip += `[روز ${oldDay}] ` + item.cultureTip + "\\n\\n";
                }

                if (item.examData && item.examData.questions) {
                    examQuestions.push(...item.examData.questions);
                }
            } catch (e) {
                console.error(`Failed to load day ${oldDay}`, e);
            }
        }

        if (examQuestions.length > 0) {
            newData.examData = { questions: examQuestions };
        }

        newData.objective = newData.objective.replace(/\\n\\n$/, '');
        newData.grammarData.subtitle = newData.grammarData.subtitle.replace(/\\n$/, '');
        newData.cultureTip = newData.cultureTip.replace(/\\n\\n$/, '');

        if (newData.grammarData.alphabet.length === 0) delete newData.grammarData.alphabet;

        let contentStr = JSON.stringify(newData, null, 2);
        let content = `export const day${d}Data = ${contentStr};\n`;

        fs.writeFileSync(`${outPath}/day${d}.js`, content, 'utf-8');
    }
}
run();
