import del from 'del';

/**
 * This function deletes:
 * <ul>
 *   <li>Everything in the directory</li>
 *   <li>The directory itself</li>
 * </ul>
 *
 * @param {String} directory - The directory to delete.
 * @param {Function} callback - Callback function.
 */
export function clean (directory, callback) {
    return del(['{' + directory + ',' + directory + '/**/*}'], callback);
}