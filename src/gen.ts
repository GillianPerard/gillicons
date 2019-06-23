import * as fs from 'fs';
import camelCase from 'camelcase';
import del from 'del';
const XmlReader = require('xml-reader');

import { categories } from "./data/categories";

const destFolder = './gen';
const icons = fs.readdirSync('./src/svgs');
let indexImports = '';
let indexExport = 'export {\r';

del.sync(destFolder);
fs.mkdirSync(destFolder);

const iconTemplate = fs.readFileSync('./src/templates/icon.txt', 'utf-8');

icons.forEach((icon: string) => {
    const xml = fs.readFileSync(`./src/svgs/${icon}`, 'utf-8');
    const json = XmlReader.parseSync(xml);
    const name = icon.split('.')[0];
    const giName = camelCase(`gi-${name}`);
    const svgPath = json.children[0].attributes.d;
    const viewBox = json.attributes.viewBox;
    indexImports += `import { ${giName} } from './${giName}';\r`;
    indexExport += `\t${giName},\r`;

    let content = iconTemplate.replace('%GI_NAME%', giName);
    const iconCategories = categories.get(giName);
    if (!iconCategories) {
        throw new Error(`There is no category for ${giName}`);
    }
    content = content.replace('%CATEGORIES%', `["${iconCategories.join('", "')}"]`);
    content = content.replace('%NAME%', name);
    content = content.replace('%PATH%', svgPath);
    content = content.replace('%VIEW_BOX%', viewBox);
    fs.writeFileSync(`${destFolder}/${giName}.ts`, content)
});

indexImports += `import { IconDefinition } from './iconDefinition';\r`;
indexExport += '\tIconDefinition\r};';
const index = `${indexImports}\r${indexExport}`;
fs.writeFileSync(`${destFolder}/index.ts`, index);

fs.copyFileSync('./src/classes/iconDefinition.ts', `${destFolder}/iconDefinition.ts`);
fs.copyFileSync('./src/classes/category.ts', `${destFolder}/category.ts`);
