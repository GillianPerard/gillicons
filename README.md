# Gillicons

The mono-repository for the Gillicons project which aims to create and distribute free and open-source svg icons.

See all icons on [https://getgillicons.gillianperard.com](https://getgillicons.gillianperard.com).

This repository is composed of:

* **gillicons** (svg icons, sketch files, etc.)
* **angular-gillicons** (Angular component to use icons easily)
* **react-gillicons** (React component to use icons easily as well)

## Scripts

First of all, you need to stay in the root folder.

Then you'll be able to use the scripts written in the **package.json**:

* install:deps
* build:libs
* lint
* start:angular
* start:react
* publish:libs

And one other using directly node:

* semver

## Basic workflow

> Add a new icon

Install all the dependencies.

```sh
yarn install:deps
```

Create a new icon inside **gillicons.sketch** and 
export it to the **packages/gillicons/src/svgs** folder.

Build the libraries and link them all.

```sh
yarn build:libs
```

Test on the Angular app.

```sh
yarn start:angular
```

Test on the React app.

```sh
yarn start:react
```

If everything looks good, update the packages versions.

```sh
node semver x.x.x
```

Fill the new version you want.

Update the **[CHANGELOG.md](./CHANGELOG.md)**.
