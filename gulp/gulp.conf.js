/**
 * This is the configuration file.
 *
 * This file is used by gulp tasks.
 */

import path from 'path';

export const INDEX              = 'index.html';
export const DIST_DIR           = 'dist';
export const SRC_DIR            = 'src';
export const APP_SRC            = path.join(SRC_DIR, 'app');
export const STYLES_SRC         = path.join(SRC_DIR, 'styles');
export const ASSETS_SRC         = path.join(SRC_DIR, 'assets');
export const DEV_DIR            = path.join(DIST_DIR, 'dev');
export const PROD_DIR           = path.join(DIST_DIR, 'prod');
export const TMP_DIR            = path.join(DIST_DIR, 'tmp');
export const TEMPLATE_DIR       = path.join(DIST_DIR, 'template');
export const JS_PROD_NPM_BUNDLE = 'shims.js';
export const JS_PROD_DIR        = path.join(PROD_DIR, 'js');

export const NPM_DEPENDENCIES = [
    {src: 'node_modules/core-js/client/shim.min.js', inject: 'shims'},
    {src: 'node_modules/zone.js/dist/zone.js', inject: 'libs'},
    {src: 'node_modules/reflect-metadata/Reflect.js', inject: 'libs'},
    {src: 'node_modules/systemjs/dist/system.src.js', inject: 'libs'}
];

const CSS_INJECTABLES = [
    {src: path.join(STYLES_SRC, 'main.css'), inject: 'css'}
];

export const DEPENDENCIES = NPM_DEPENDENCIES.concat(CSS_INJECTABLES);