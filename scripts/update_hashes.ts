import * as path from 'path';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as process from 'process';

const PUBLIC_DIR = path.resolve('./public');
const INDEX_HTML = path.resolve(PUBLIC_DIR, 'index.html');

const REPLACES: RegExp[] = [
    /(?<=\b(src|href)=")(?!http)[^"]+(?=")/g,
];

const html = fs.readFileSync(INDEX_HTML, { encoding: 'utf-8' });
if (!html) {
    console.error(`Can not read file ${INDEX_HTML}`);
    process.exit(1);
}

const checksumFile = (path: string): string => {
    const hash = crypto.createHash('sha1');
    hash.setEncoding('hex');
    hash.write(fs.readFileSync(path));
    hash.end();
    return hash.read() || Date.now().toString(32);
  }

const hashByFile = new Map<string, string>();
const getHashForFile = (filename: string): string | null => {
    let hash = hashByFile.get(filename);
    if (hash) {
        return hash;
    }
    hash = checksumFile(path.resolve(PUBLIC_DIR, filename)).slice(0, 8)
    hashByFile.set(filename, hash);
    return hash;
}

const escapeRegExp = (value: string): string => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

const updatedHtml = REPLACES.reduce((html, regExp) => {
    let newHtml = html;
    // eslint-disable-next-line no-constant-condition
    const matches = Array.from(newHtml.matchAll(regExp))
    console.log('Found urls for updating', matches.map(m => m[0]));
    matches.forEach((match) => {
        const url = match[0];
        if (!url) {
            return;
        }
        const filename = url.split('?', 1)[0];
        const hash = getHashForFile(filename);
        let newUrl = url.replace(/[&?]hash=\w+\b/g, '');
        newUrl = newUrl + (newUrl.includes('?') ? '&' : '?') + `hash=${hash}`;
        if (newUrl === url) {
            console.log('Do not need to update', url);
        } else {
            newHtml = newHtml.replace(RegExp(escapeRegExp(url), 'g'), newUrl);
            console.log('Replaced urls: ', url, '=>', newUrl);
        }
    });

    return newHtml;
}, html);

if (updatedHtml !== html) {
    fs.writeFileSync(INDEX_HTML, updatedHtml, { encoding: 'utf-8' });
}
