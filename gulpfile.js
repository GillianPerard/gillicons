const gulp = require('gulp');
const del = require('del');
const gulpCopy = require('gulp-copy');
const spawn = require('child_process').spawn;

const genConfigPath = './tsconfig.gen.json';

const genDestinationFolder = './src';
const destinationFolder = './lib';

// Tasks to optimize svg files
const svgo = () => {
    return spawn('./node_modules/svgo/bin/svgo', ['-f', './src/svgs', '-o', './src/tmp', '-p', '1', '--config', 'svgo.config.yml'])
};
const cleanSVG = () => del('./src/svgs');
const renameSVG = () => spawn('mv', ['./src/tmp', './src/svgs'])

// Tasks to generate all icon ts files
const cleanGen = () => {
    return del(['./gen', `${genDestinationFolder}/gen.js`, `${genDestinationFolder}/classes/category.js`, `${genDestinationFolder}/data/categories.js`])
};
const transpileGen = () => spawn('tsc', ['--project', genConfigPath]);
const generate = () => spawn('node', ['./src/gen.js']);

// Tasks to transpile icon ts files into js/d.ts files
const clean = () => del(destinationFolder);
const transpile = () => spawn('tsc');
const copy = () => {
    const sourceFiles = ['./package.json', './LICENSE', './README.md'];
    return gulp
        .src(sourceFiles)
        .pipe(gulpCopy(destinationFolder))
};

const optimize = (done) => gulp.series(svgo, cleanSVG, renameSVG)(done);
const build = (done) => gulp.series(cleanGen, clean, transpileGen, generate, transpile, copy, cleanGen)(done);

const tasks = [build, clean, cleanGen, cleanSVG, copy, generate, optimize, renameSVG, svgo, transpile, transpileGen];
tasks.forEach(t => {
    gulp.task(t);
});

