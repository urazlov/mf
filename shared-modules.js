const packageJson = require('./package.json');

const packages = [
    '@angular/core',
    '@angular/common',
    '@angular/common/http',
    '@angular/router',
    '@angular/forms',
    '@ngrx/store',
];

const sharedNpm = Object.entries(packageJson.dependencies).reduce((acc, next) => {
    if (!packages.includes(next[0])) {
        return acc;
    }

    const packageName = next[0];
    const requiredVersion = next[1];
    const strictVersion = true;

    return {
        ...acc,
        [packageName]: {
            singleton: false,
            strictVersion,
            requiredVersion,
        },
    };
}, {});

module.exports = sharedNpm;
