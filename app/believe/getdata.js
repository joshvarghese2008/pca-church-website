import fsPromises from 'fs/promises';
import path from 'path';

export async function getLocalData() {
    const filePath = path.join(process.cwd(), 'app/believe/believestatements.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return objectData;
}