const program = require('commander');
const execSync = require('child_process').execSync;
const fs = require('fs');

const collect = (value, previous) => {
    return previous.concat([value]);
}

program
    .option('--cwd <folder_path>', 'Set the current working directory')
    .option('-e, --exclude <package>', 'Package not to be installed', collect, [])
    .option('--pure-lockfile', `Don’t generate a yarn.lock lockfile`)
    .parse(process.argv);

const exclude = program.exclude
let cwd = program.cwd;
cwd = cwd || '.';
const packageJson = 'package.json';
const packageTmpJson = 'package-tmp.json';
const fullPath = `${cwd}/${packageJson}`;
const fullPathTmp = `${cwd}/${packageTmpJson}`;
const hasExclude = exclude.length > 0;

if (hasExclude) {
    const buffer = fs.readFileSync(fullPath, 'utf-8');

    if (!buffer) {
        console.error(`Can not read file: ${fullPath}`);
        process.exit(1);
    }

    const file = JSON.parse(buffer);
    execSync(`cp ${fullPath} ${fullPathTmp}`);
    exclude.forEach(e => {
        if (file.dependencies) {
            delete file.dependencies[e];
        }

        if (file.devDependencies) {
            delete file.devDependencies[e];
        }

        if (file.peerDependencies) {
            delete file.peerDependencies[e];
        }
    });
    fs.writeFileSync(fullPath, JSON.stringify(file));
}

let command = `yarn --cwd ${cwd} install`;

if (program.pureLockfile) {
    command = `${command} --pure-lockfile`
}

execSync(command);

if (hasExclude) {
    execSync(`rm -f ${fullPath}`);
    execSync(`mv ${fullPathTmp} ${fullPath}`);
}

console.log('Packages successfully installed.');
process.exit(0);