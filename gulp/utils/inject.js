import gulp from 'gulp';
import path from 'path';
import slash from 'slash';
import gulpLoadPlugins from 'gulp-load-plugins';
import {
    DEPENDENCIES,
    SRC_DIR
} from '../gulp.conf';

const plugins = gulpLoadPlugins();

export function inject (name, destinationDirectory) {
    return plugins.inject(gulp.src(getInjectablesDependenciesRef(name, destinationDirectory), {read: false}),
                          {name, transform: transformPath(destinationDirectory)})
}

/**
 * Returns the injectable dependency, mapping its filename to its path.
 *
 * @param {String} name - The dependency to be mapped.
 * @param {String} destinationDirectory - The destination directory.
 */
function getInjectablesDependenciesRef (name, destinationDirectory) {
    return DEPENDENCIES
        .filter(dep => dep['inject'] === name)
        .map(mapPath(destinationDirectory));
}

/**
 * Maps the path of the given dependency to its path according to the applications environment.
 *
 * @param {String} destinationDirectory - The destination directory.
 */
function mapPath (destinationDirectory) {
    return function (dep) {
        let envPath = dep.src;
        if (envPath.startsWith(SRC_DIR)) {
            envPath = path.join(destinationDirectory, dep.src.replace(SRC_DIR, ''));
        }
        return envPath;
    }
}

/**
 * Transform the path of a dependency to its location within the `dist` directory.
 *
 * @param {String} destinationDirectory - The destination directory.
 */
function transformPath (destinationDirectory) {
    return function (filepath) {
        if (filepath.startsWith(slash('/' + destinationDirectory))) {
            filepath = filepath.replace(slash('/' + destinationDirectory) + '/', '');
        }
        arguments[0] = path.join(filepath) + `?${Date.now()}`;
        return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
    };
}