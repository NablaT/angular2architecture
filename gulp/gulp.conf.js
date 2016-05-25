/**
 * This is the configuration file.
 *
 * This file is used by gulp tasks.
 */

import path from 'path';

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

///////////////////// Directories Paths /////////////////////

export const DIST_DIR     = 'dist';
export const SRC_DIR      = 'src';
export const APP_SRC      = path.join(SRC_DIR, 'app');
export const STYLES_SRC   = path.join(SRC_DIR, 'styles');
export const ASSETS_SRC   = path.join(SRC_DIR, 'assets');
export const DEV_DIR      = path.join(DIST_DIR, 'dev');
export const PROD_DIR     = path.join(DIST_DIR, 'prod');
export const TMP_DIR      = path.join(DIST_DIR, 'tmp');
export const TEMPLATE_DIR = path.join(DIST_DIR, 'template');

export const ALL_FILES        = 'src/**/*';
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