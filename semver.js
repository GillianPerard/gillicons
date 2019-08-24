const fs = require('fs');
const readline = require('readline');
const globby = require('globby');
const semver = require('semver');

const rootPackagePath = './package.json';
const rootPackage = JSON.parse(fs.readFileSync(rootPackagePath).toString());
const currentVersion = rootPackage.version;

const updateRootPackageVersion = newVersion => {
    rootPackage.version = newVersion;
    const text = JSON.stringify(rootPackage, null, 4);
    fs.writeFileSync(rootPackagePath, text, 'utf8');
};

const updateAllVersions = newVersion => {
    const version = `^${newVersion}`;
    const packagePaths = globby.sync(['packages/**/package.json', '!**/node_modules']);
    packagePaths.forEach(packagePath => {

        const packageContent = JSON.parse(fs.readFileSync(packagePath).toString());
        packageContent.version = newVersion;

        if (packageContent.dependencies && packageContent.dependencies.gillicons) {
            packageContent.dependencies.gillicons = version;
        }

        if (packageContent['peerDependencies'] && packageContent['peerDependencies'].gillicons) {
            packageContent['peerDependencies'].gillicons = version;
        }

        if (packageContent.dependencies && packageContent.dependencies['react-gillicons']) {
            packageContent.dependencies['react-gillicons'] = version;
        }

        const text = JSON.stringify(packageContent, null, 4);
        fs.writeFileSync(packagePath, text, 'utf8');
    })
};

if (!semver.valid(currentVersion)) {
    throw new Error('The specified version in the root package.json is missing or incorrect.');
}

console.log(`The current version is: ${currentVersion}`);

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('New version> ');
rl.prompt();

rl.on('line', answer => {
    if (semver.valid(answer)) {
        updateRootPackageVersion(answer);
        updateAllVersions(answer);
        rl.close();
    } else {
        console.log('The new version is incorrect. Try again.');
    }
    rl.prompt();
}).on('close', () => {
    console.log('Versions updated!');
    process.exit(0);
});
