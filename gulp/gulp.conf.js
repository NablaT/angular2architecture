/**
 * This is the configuration file.
 *
 * This file is used by gulp tasks.
 */

/**
 * @constant {String[]} Constant containing all path to shims dependencies we want in the project.
 */
export const SHIMS_DEPENDENCIES = [
    'node_modules/es6-shim/es6-shim.min.js'
];

/**
 * @constant {String[]} Constant containing all path to libraries dependencies we want in the project.
 */
export const LIBS_DEPENDENCIES = [
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js'
];

/**
 * @constant {String} The path of the development directory.
 */
export const DEV_PATH = 'dist/dev';

/**
 * @constant {String} The path of the production directory.
 */
export const PROD_PATH = 'dist/prod';

/**
 * @constant {String} Regular expression matching all files.
 */
export const ALL_FILES = 'src/**/*';

/**
 * @constant {String} Regular expression matching all typescript files.
 */
export const TYPESCRIPT_FILES = 'src/**/*.ts';

/**
 * @constant {String} Regular expression matching all sass files.
 */
export const SASS_FILES = 'src/**/*.scss';

/**
 * @constant {String} Regular expression matching all spec files.
 */
export const SPEC_FILES = 'src/**/*.spec.ts';

/**
 * @constant {String} The name of the index.
 */
export const INDEX = 'index.html';

/**
 * @constant {String} The libs tag name.
 */
export const LIBS = 'libs';

/**
 * @constant {String} The shim tag name.
 */
export const SHIMS = 'shims';