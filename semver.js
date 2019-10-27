const fs = require('fs');
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

const args = process.argv

if (args.length !== 3) {
    console.error('The semver command must look like to: node semver x.x.x.');
    process.exit(1);
}

if (!semver.valid(currentVersion)) {
    console.error('The specified version in the root package.json is missing or incorrect.');
    process.exit(1);
}

const newVersion = args[2];
if (!semver.valid(newVersion)) {
    console.error('The specified new version is not semver compliant.');
    process.exit(1);
}


if (!semver.gt(newVersion, currentVersion)) {
    console.error('The specified new version is not greater than the latest one.');
    process.exit(1);
}

updateRootPackageVersion(newVersion);
updateAllVersions(newVersion);

console.log(`Versions updated to ${newVersion}!`);
process.exit(0);