import camelCase from 'camelcase';
import del from 'del';
import * as fs from 'fs';

const XmlReader = require('xml-reader');

import { categories } from './data/categories';

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
    const splitViewBox = viewBox.split(' ');
    const roundedWidth = Math.round(splitViewBox[2] / splitViewBox[3] * 1000) / 1000;
    const width = `${roundedWidth}em`;
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
    content = content.replace('%WIDTH%', width);
    fs.writeFileSync(`${destFolder}/${giName}.ts`, content);
});

indexImports += `import { IconDefinition } from './icon-definition';\r`;
indexExport += '\tIconDefinition\r};';
const index = `${indexImports}\r${indexExport}`;
fs.writeFileSync(`${destFolder}/index.ts`, index);

fs.copyFileSync('./src/classes/icon-definition.ts', `${destFolder}/icon-definition.ts`);
fs.copyFileSync('./src/classes/category.ts', `${destFolder}/category.ts`);
