const fs = require('fs');
const camelCase = require('camelcase');
const del = require('del');
const XmlReader = require('xml-reader');

const destFolder = './lib';
const icons = fs.readdirSync('./src/svgs');
let indexImports = '';
let indexExport = 'export {\r';

del.sync(destFolder);
fs.mkdirSync(destFolder);

fs.writeFileSync(`${destFolder}/icon-definition.d.ts`, `export default interface IconDefinition {
    name: string;
    svgPath: string;
    viewBox: string;
}`);

icons.forEach((icon, index) => {
    const xml = fs.readFileSync(`./src/svgs/${icon}`, 'utf-8');
    const json = XmlReader.parseSync(xml);
    const name = camelCase(`gi-${icon.split('.')[0]}`);
    const svgPath = json.children[0].attributes.d;
    const viewBox = json.attributes.viewBox;
    indexImports += `import ${name} from './${name}';\r`
    indexExport += `\t${name}${index !== icons.length - 1 ? ',' : ''}\r`
    fs.writeFileSync(`${destFolder}/${name}.js`, `const ${name} = { name: '${name}', svgPath: '${svgPath}', viewBox: '${viewBox}' };\rexport default ${name};`)
    fs.writeFileSync(`${destFolder}/${name}.d.ts`, `import IconDefinition from './icon-definition';\rdeclare const ${name}: IconDefinition;\rexport default ${name};`)
})

const index = `${indexImports}\r${indexExport}};`;
fs.writeFileSync(`${destFolder}/index.js`, index);
fs.writeFileSync(`${destFolder}/index.d.ts`, index);

fs.copyFileSync('package.json', `${destFolder}/package.json`);
fs.copyFileSync('LICENSE', `${destFolder}/LICENSE`);
fs.copyFileSync('README.md', `${destFolder}/README.md`);
