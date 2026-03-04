import fs from 'fs';
import { pathToFileURL } from 'url';

async function checkAll() {
    const sourcePath = 'd:/zaban asli/my-german-app/src/data';
    for (let d = 1; d <= 200; d++) {
        try {
            const fileUrl = pathToFileURL(`${sourcePath}/day${d}.js`).href;
            await import(fileUrl);
        } catch (e) {
            console.error(`Error in day${d}.js:`, e.message);
        }
    }
}
checkAll();
