"use strict";
self["webpackHotUpdatedtale"]("main",{

/***/ "./static/dtale/serverStateManagement.ts":
/*!***********************************************!*\
  !*** ./static/dtale/serverStateManagement.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteColumns = exports.deleteColumn = exports.toggleVisibility = exports.updateVisibility = exports.moveLeft = exports.moveRight = exports.moveToBack = exports.moveToFront = exports.loadFilteredRanges = exports.updateMaxRowHeight = exports.updateMaxColumnWidth = exports.updateLanguage = exports.updatePinMenu = exports.updateQueryEngine = exports.updateTheme = exports.editCell = exports.lastClickedCell = exports.updateFormats = exports.renameColumn = exports.moveFiltersToCustom = exports.dropFilteredRows = exports.updateSettings = exports.saveRangeHighlights = exports.unlockCols = exports.lockCols = exports.executeAction = void 0;
const url_utils_1 = __webpack_require__(/*! ../redux/actions/url-utils */ "./static/redux/actions/url-utils.ts");
const GenericRepository_1 = __webpack_require__(/*! ../repository/GenericRepository */ "./static/repository/GenericRepository.ts");
const baseGetter = async (apiEndpoint) => await (0, GenericRepository_1.getDataFromService)(`/dtale/${apiEndpoint}`);
const executeAction = async (route, dataId, params) => await (0, GenericRepository_1.getDataFromService)((0, url_utils_1.buildURLString)(`/dtale/${route}/${dataId}?`, params));
exports.executeAction = executeAction;
/**
 * Create a function to move a column one position left or right.
 *
 * @param selectedCol the column to move
 * @param props input parameters for column operations
 * @param action the movement to make
 * @return function to move a column
 */
function moveOnePosition(selectedCol, props, action) {
    const { columns, propagateState, dataId } = props;
    return () => {
        const locked = columns.filter((column) => column.locked);
        const unlocked = columns.filter((column) => !column.locked);
        const selectedIdx = unlocked.findIndex(({ name }) => name === selectedCol);
        if (action === 'right' && selectedIdx === unlocked.length - 1) {
            return;
        }
        if (action === 'left' && selectedIdx === 0) {
            return;
        }
        const moveToRightIdx = action === 'right' ? selectedIdx : selectedIdx - 1;
        const moveToRight = { ...unlocked[moveToRightIdx] };
        const moveToLeftIdx = action === 'right' ? selectedIdx + 1 : selectedIdx;
        const moveToLeft = { ...unlocked[moveToLeftIdx] };
        unlocked[moveToRightIdx] = moveToLeft;
        unlocked[moveToLeftIdx] = moveToRight;
        const finalCols = [...locked, ...unlocked];
        propagateState({ columns: finalCols, triggerResize: true }, async () => await (0, exports.executeAction)('update-column-position', dataId, { col: selectedCol, action }));
    };
}
/**
 * Create a function to move a column to the front or back.
 *
 * @param selectedCol the column to move
 * @param props input parameters for column operations
 * @param action the movement to make
 * @return a function to move a column
 */
function moveTo(selectedCol, props, action = 'front') {
    const { columns, propagateState, dataId } = props;
    return () => {
        const locked = columns.filter((column) => column.locked);
        const colsToMove = columns.filter((column) => selectedCol === column.name && !column.locked);
        const unselectedAndUnlockedCols = columns.filter(({ name }) => selectedCol !== name && !locked.find((column) => column.name === name));
        const finalCols = action === 'front'
            ? [...locked, ...colsToMove, ...unselectedAndUnlockedCols]
            : [...locked, ...unselectedAndUnlockedCols, ...colsToMove];
        propagateState({ columns: finalCols, triggerResize: true }, async () => await (0, exports.executeAction)('update-column-position', dataId, { col: selectedCol, action }));
    };
}
/**
 * Create a function to pin columns to the left-hand side of the grid.
 *
 * @param selectedCols the columns to pin
 * @param props input parameters for column operations
 * @return a function to pin columns
 */
function lockCols(selectedCols, props) {
    const { columns, propagateState, dataId } = props;
    return () => {
        const currentlyLocked = columns.filter((column) => column.locked);
        const newLocks = columns
            .filter(({ name }) => selectedCols.includes(name))
            .map((column) => ({ ...column, locked: true }));
        const locked = [...currentlyLocked, ...newLocks];
        propagateState({
            columns: [...locked, ...columns.filter(({ name }) => !locked.find((column) => column.name === name))],
            fixedColumnCount: locked.length,
            triggerResize: true,
        }, async () => await (0, exports.executeAction)('update-locked', dataId, { col: selectedCols[0], action: 'lock' }));
    };
}
exports.lockCols = lockCols;
/**
 * Create a function to unpin columns from the left-hand side of the grid.
 *
 * @param selectedCols the columns to unpin
 * @param props input parameters for column operations
 * @return a function unpin columns
 */
function unlockCols(selectedCols, props) {
    const { columns, propagateState, dataId } = props;
    return () => {
        const currentlyLocked = columns.filter((column) => column.locked);
        const unlocked = currentlyLocked
            .filter(({ name }) => selectedCols.includes(name))
            .map((column) => ({ ...column, locked: false }));
        const locked = currentlyLocked.filter(({ name }) => !selectedCols.includes(name));
        propagateState({
            columns: [...locked, ...unlocked, ...columns.filter((c) => !c.locked)],
            fixedColumnCount: locked.length,
            triggerResize: true,
        }, async () => await (0, exports.executeAction)('update-locked', dataId, { col: selectedCols[0], action: 'unlock' }));
    };
}
exports.unlockCols = unlockCols;
const persistVisibility = async (dataId, params) => await (0, GenericRepository_1.postDataToService)(`/dtale/update-visibility/${dataId}`, params);
const saveRangeHighlights = async (dataId, ranges) => await (0, GenericRepository_1.postDataToService)(`/dtale/save-range-highlights/${dataId}`, {
    ranges: JSON.stringify(ranges),
});
exports.saveRangeHighlights = saveRangeHighlights;
const updateSettings = async (settings, dataId) => await baseGetter((0, url_utils_1.buildURLString)(`update-settings/${dataId}?`, { settings: JSON.stringify(settings) }));
exports.updateSettings = updateSettings;
const dropFilteredRows = async (dataId, callback) => await baseGetter(`drop-filtered-rows/${dataId}`);
exports.dropFilteredRows = dropFilteredRows;
const moveFiltersToCustom = async (dataId) => await baseGetter(`move-filters-to-custom/${dataId}`);
exports.moveFiltersToCustom = moveFiltersToCustom;
const renameColumn = async (dataId, col, rename) => await baseGetter((0, url_utils_1.buildURLString)(`rename-col/${dataId}`, { col, rename }));
exports.renameColumn = renameColumn;
const updateFormats = async (dataId, col, format, all, nanDisplay) => await baseGetter((0, url_utils_1.buildURLString)(`update-formats/${dataId}`, {
    col,
    format: JSON.stringify(format),
    all: `${all}`,
    nanDisplay,
}));
exports.updateFormats = updateFormats;
const lastClickedCell = async (dataId, rowIndex, col) => {
    let colName = col ? col : '';
    return await baseGetter((0, url_utils_1.buildURLString)(`last-clicked-cell/${dataId}`, { rowIndex: `${rowIndex}`, colName }));
};
exports.lastClickedCell = lastClickedCell;
const editCell = async (dataId, col, rowIndex, updated) => await baseGetter((0, url_utils_1.buildURLString)(`edit-cell/${dataId}`, { col, rowIndex: `${rowIndex}`, updated }));
exports.editCell = editCell;
const updateTheme = async (theme) => await baseGetter((0, url_utils_1.buildURLString)('update-theme', { theme }));
exports.updateTheme = updateTheme;
const updateQueryEngine = async (engine) => await baseGetter((0, url_utils_1.buildURLString)('update-query-engine', { engine }));
exports.updateQueryEngine = updateQueryEngine;
const updatePinMenu = async (pinned) => await baseGetter((0, url_utils_1.buildURLString)('update-pin-menu', { pinned: `${pinned}` }));
exports.updatePinMenu = updatePinMenu;
const updateLanguage = async (language) => await baseGetter((0, url_utils_1.buildURLString)('update-language', { language }));
exports.updateLanguage = updateLanguage;
const updateMaxColumnWidth = async (width) => await baseGetter((0, url_utils_1.buildURLString)('update-maximum-column-width', { width: width ? `${width}` : '' }));
exports.updateMaxColumnWidth = updateMaxColumnWidth;
const updateMaxRowHeight = async (height) => await baseGetter((0, url_utils_1.buildURLString)('update-maximum-row-height', { height: `${height}` }));
exports.updateMaxRowHeight = updateMaxRowHeight;
const loadFilteredRanges = async (dataId) => await baseGetter(`load-filtered-ranges/${dataId}`);
exports.loadFilteredRanges = loadFilteredRanges;
const deleteCols = async (dataId, cols) => await baseGetter((0, url_utils_1.buildURLString)(`delete-col/${dataId}`, { cols: JSON.stringify(cols) }));
const moveToFront = (selectedCol, props) => moveTo(selectedCol, props, 'front');
exports.moveToFront = moveToFront;
const moveToBack = (selectedCol, props) => moveTo(selectedCol, props, 'back');
exports.moveToBack = moveToBack;
const moveRight = (selectedCol, props) => moveOnePosition(selectedCol, props, 'right');
exports.moveRight = moveRight;
const moveLeft = (selectedCol, props) => moveOnePosition(selectedCol, props, 'left');
exports.moveLeft = moveLeft;
const updateVisibility = async (dataId, visibility) => await persistVisibility(dataId, { visibility: JSON.stringify(visibility) });
exports.updateVisibility = updateVisibility;
const toggleVisibility = async (dataId, toggle) => await persistVisibility(dataId, { toggle });
exports.toggleVisibility = toggleVisibility;
const deleteColumn = async (dataId, col) => await deleteCols(dataId, [col]);
exports.deleteColumn = deleteColumn;
const deleteColumns = async (dataId, cols) => await deleteCols(dataId, cols);
exports.deleteColumns = deleteColumns;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("72e3958fde5b67a42403")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQURqQyx3QkFBZ0Isb0JBQ2lCO0FBQ3ZDLE1BQU0sWUFBWSxHQUFHLEtBQUssRUFBRSxNQUFjLEVBQUUsR0FBVyxFQUFjLEVBQUUsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQWxHLG9CQUFZLGdCQUFzRjtBQUN4RyxNQUFNLGFBQWEsR0FBRyxLQUFLLEVBQUUsTUFBYyxFQUFFLElBQWMsRUFBYyxFQUFFLENBQUMsTUFBTSxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQXJHLHFCQUFhLGlCQUF3Rjs7Ozs7Ozs7O1VDek9sSCIsInNvdXJjZXMiOlsid2VicGFjazovL2R0YWxlLy4vc3RhdGljL2R0YWxlL3NlcnZlclN0YXRlTWFuYWdlbWVudC50cyIsIndlYnBhY2s6Ly9kdGFsZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlzaWJpbGl0eVN0YXRlIH0gZnJvbSAnLi4vcG9wdXBzL2Rlc2NyaWJlL0Rlc2NyaWJlU3RhdGUnO1xuaW1wb3J0IHsgYnVpbGRVUkxTdHJpbmcgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3VybC11dGlscyc7XG5pbXBvcnQgeyBGaWx0ZXJlZFJhbmdlcywgSW5zdGFuY2VTZXR0aW5ncywgUXVlcnlFbmdpbmUsIFJhbmdlSGlnaGxpZ2h0Q29uZmlnIH0gZnJvbSAnLi4vcmVkdXgvc3RhdGUvQXBwU3RhdGUnO1xuaW1wb3J0IHsgQmFzZVJlc3BvbnNlLCBnZXREYXRhRnJvbVNlcnZpY2UsIHBvc3REYXRhVG9TZXJ2aWNlIH0gZnJvbSAnLi4vcmVwb3NpdG9yeS9HZW5lcmljUmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IENvbHVtbkRlZiwgQ29sdW1uRm9ybWF0LCBEYXRhVmlld2VyUHJvcGFnYXRlU3RhdGUgfSBmcm9tICcuL0RhdGFWaWV3ZXJTdGF0ZSc7XG5cbi8qKiBUeXBlLWRlZmludGlvbiBmb3IgYW55IGNhbGxiYWNrIGZ1bmN0aW9uICovXG50eXBlIENhbGxiYWNrID0gKHJlc3BvbnNlPzogUmVjb3JkPHN0cmluZywgYW55PikgPT4gdm9pZDtcblxuLyoqIFR5cGUtZGVmaW5pdGlvbiBmb3IgZnVuY3Rpb25zIHJldHVybmluZyBzdGFuZGFyZCBzdWNjZXNzIHJlc3BvbnNlcyAqL1xuZXhwb3J0IHR5cGUgQmFzZVJldHVybjxUID0gQmFzZVJlc3BvbnNlPiA9IFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG5cbmNvbnN0IGJhc2VHZXR0ZXIgPSBhc3luYyA8VCA9IEJhc2VSZXNwb25zZT4oYXBpRW5kcG9pbnQ6IHN0cmluZyk6IEJhc2VSZXR1cm48VD4gPT5cbiAgYXdhaXQgZ2V0RGF0YUZyb21TZXJ2aWNlPFQ+KGAvZHRhbGUvJHthcGlFbmRwb2ludH1gKTtcblxuZXhwb3J0IGNvbnN0IGV4ZWN1dGVBY3Rpb24gPSBhc3luYyAocm91dGU6IHN0cmluZywgZGF0YUlkOiBzdHJpbmcsIHBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IEJhc2VSZXR1cm4gPT5cbiAgYXdhaXQgZ2V0RGF0YUZyb21TZXJ2aWNlPEJhc2VSZXNwb25zZT4oYnVpbGRVUkxTdHJpbmcoYC9kdGFsZS8ke3JvdXRlfS8ke2RhdGFJZH0/YCwgcGFyYW1zKSk7XG5cbi8qKiBQYXJhbWV0ZXJzIHJlcXVpcmVkIGZvciBhbnkgY29sdW1uIG9wZXJhdGlvbiAobG9ja2luZyBvciBtb3ZpbmcpICovXG5leHBvcnQgaW50ZXJmYWNlIENvbHVtbk9wZXJhdGlvblByb3BzIHtcbiAgY29sdW1uczogQ29sdW1uRGVmW107XG4gIHByb3BhZ2F0ZVN0YXRlOiBEYXRhVmlld2VyUHJvcGFnYXRlU3RhdGU7XG4gIGRhdGFJZDogc3RyaW5nO1xufVxuXG4vKiogRGlmZmVyZW50IGNvbHVtbiBtb3ZlbWVudHMgKi9cbnR5cGUgTW92ZUFjdGlvbiA9ICdmcm9udCcgfCAnYmFjaycgfCAnbGVmdCcgfCAncmlnaHQnO1xuXG4vKipcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRvIG1vdmUgYSBjb2x1bW4gb25lIHBvc2l0aW9uIGxlZnQgb3IgcmlnaHQuXG4gKlxuICogQHBhcmFtIHNlbGVjdGVkQ29sIHRoZSBjb2x1bW4gdG8gbW92ZVxuICogQHBhcmFtIHByb3BzIGlucHV0IHBhcmFtZXRlcnMgZm9yIGNvbHVtbiBvcGVyYXRpb25zXG4gKiBAcGFyYW0gYWN0aW9uIHRoZSBtb3ZlbWVudCB0byBtYWtlXG4gKiBAcmV0dXJuIGZ1bmN0aW9uIHRvIG1vdmUgYSBjb2x1bW5cbiAqL1xuZnVuY3Rpb24gbW92ZU9uZVBvc2l0aW9uKHNlbGVjdGVkQ29sOiBzdHJpbmcsIHByb3BzOiBDb2x1bW5PcGVyYXRpb25Qcm9wcywgYWN0aW9uOiBNb3ZlQWN0aW9uKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgY29sdW1ucywgcHJvcGFnYXRlU3RhdGUsIGRhdGFJZCB9ID0gcHJvcHM7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgbG9ja2VkID0gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmxvY2tlZCk7XG4gICAgY29uc3QgdW5sb2NrZWQgPSBjb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiAhY29sdW1uLmxvY2tlZCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRJZHggPSB1bmxvY2tlZC5maW5kSW5kZXgoKHsgbmFtZSB9KSA9PiBuYW1lID09PSBzZWxlY3RlZENvbCk7XG4gICAgaWYgKGFjdGlvbiA9PT0gJ3JpZ2h0JyAmJiBzZWxlY3RlZElkeCA9PT0gdW5sb2NrZWQubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uID09PSAnbGVmdCcgJiYgc2VsZWN0ZWRJZHggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbW92ZVRvUmlnaHRJZHggPSBhY3Rpb24gPT09ICdyaWdodCcgPyBzZWxlY3RlZElkeCA6IHNlbGVjdGVkSWR4IC0gMTtcbiAgICBjb25zdCBtb3ZlVG9SaWdodCA9IHsgLi4udW5sb2NrZWRbbW92ZVRvUmlnaHRJZHhdIH07XG4gICAgY29uc3QgbW92ZVRvTGVmdElkeCA9IGFjdGlvbiA9PT0gJ3JpZ2h0JyA/IHNlbGVjdGVkSWR4ICsgMSA6IHNlbGVjdGVkSWR4O1xuICAgIGNvbnN0IG1vdmVUb0xlZnQgPSB7IC4uLnVubG9ja2VkW21vdmVUb0xlZnRJZHhdIH07XG4gICAgdW5sb2NrZWRbbW92ZVRvUmlnaHRJZHhdID0gbW92ZVRvTGVmdDtcbiAgICB1bmxvY2tlZFttb3ZlVG9MZWZ0SWR4XSA9IG1vdmVUb1JpZ2h0O1xuICAgIGNvbnN0IGZpbmFsQ29scyA9IFsuLi5sb2NrZWQsIC4uLnVubG9ja2VkXTtcbiAgICBwcm9wYWdhdGVTdGF0ZShcbiAgICAgIHsgY29sdW1uczogZmluYWxDb2xzLCB0cmlnZ2VyUmVzaXplOiB0cnVlIH0sXG4gICAgICBhc3luYyAoKSA9PiBhd2FpdCBleGVjdXRlQWN0aW9uKCd1cGRhdGUtY29sdW1uLXBvc2l0aW9uJywgZGF0YUlkLCB7IGNvbDogc2VsZWN0ZWRDb2wsIGFjdGlvbiB9KSxcbiAgICApO1xuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRvIG1vdmUgYSBjb2x1bW4gdG8gdGhlIGZyb250IG9yIGJhY2suXG4gKlxuICogQHBhcmFtIHNlbGVjdGVkQ29sIHRoZSBjb2x1bW4gdG8gbW92ZVxuICogQHBhcmFtIHByb3BzIGlucHV0IHBhcmFtZXRlcnMgZm9yIGNvbHVtbiBvcGVyYXRpb25zXG4gKiBAcGFyYW0gYWN0aW9uIHRoZSBtb3ZlbWVudCB0byBtYWtlXG4gKiBAcmV0dXJuIGEgZnVuY3Rpb24gdG8gbW92ZSBhIGNvbHVtblxuICovXG5mdW5jdGlvbiBtb3ZlVG8oc2VsZWN0ZWRDb2w6IHN0cmluZywgcHJvcHM6IENvbHVtbk9wZXJhdGlvblByb3BzLCBhY3Rpb246IE1vdmVBY3Rpb24gPSAnZnJvbnQnKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgY29sdW1ucywgcHJvcGFnYXRlU3RhdGUsIGRhdGFJZCB9ID0gcHJvcHM7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgbG9ja2VkID0gY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmxvY2tlZCk7XG4gICAgY29uc3QgY29sc1RvTW92ZSA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IHNlbGVjdGVkQ29sID09PSBjb2x1bW4ubmFtZSAmJiAhY29sdW1uLmxvY2tlZCk7XG4gICAgY29uc3QgdW5zZWxlY3RlZEFuZFVubG9ja2VkQ29scyA9IGNvbHVtbnMuZmlsdGVyKFxuICAgICAgKHsgbmFtZSB9KSA9PiBzZWxlY3RlZENvbCAhPT0gbmFtZSAmJiAhbG9ja2VkLmZpbmQoKGNvbHVtbikgPT4gY29sdW1uLm5hbWUgPT09IG5hbWUpLFxuICAgICk7XG4gICAgY29uc3QgZmluYWxDb2xzID1cbiAgICAgIGFjdGlvbiA9PT0gJ2Zyb250J1xuICAgICAgICA/IFsuLi5sb2NrZWQsIC4uLmNvbHNUb01vdmUsIC4uLnVuc2VsZWN0ZWRBbmRVbmxvY2tlZENvbHNdXG4gICAgICAgIDogWy4uLmxvY2tlZCwgLi4udW5zZWxlY3RlZEFuZFVubG9ja2VkQ29scywgLi4uY29sc1RvTW92ZV07XG4gICAgcHJvcGFnYXRlU3RhdGUoXG4gICAgICB7IGNvbHVtbnM6IGZpbmFsQ29scywgdHJpZ2dlclJlc2l6ZTogdHJ1ZSB9LFxuICAgICAgYXN5bmMgKCkgPT4gYXdhaXQgZXhlY3V0ZUFjdGlvbigndXBkYXRlLWNvbHVtbi1wb3NpdGlvbicsIGRhdGFJZCwgeyBjb2w6IHNlbGVjdGVkQ29sLCBhY3Rpb24gfSksXG4gICAgKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB0byBwaW4gY29sdW1ucyB0byB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIGdyaWQuXG4gKlxuICogQHBhcmFtIHNlbGVjdGVkQ29scyB0aGUgY29sdW1ucyB0byBwaW5cbiAqIEBwYXJhbSBwcm9wcyBpbnB1dCBwYXJhbWV0ZXJzIGZvciBjb2x1bW4gb3BlcmF0aW9uc1xuICogQHJldHVybiBhIGZ1bmN0aW9uIHRvIHBpbiBjb2x1bW5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2NrQ29scyhzZWxlY3RlZENvbHM6IHN0cmluZ1tdLCBwcm9wczogQ29sdW1uT3BlcmF0aW9uUHJvcHMpOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBjb2x1bW5zLCBwcm9wYWdhdGVTdGF0ZSwgZGF0YUlkIH0gPSBwcm9wcztcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50bHlMb2NrZWQgPSBjb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4ubG9ja2VkKTtcbiAgICBjb25zdCBuZXdMb2NrcyA9IGNvbHVtbnNcbiAgICAgIC5maWx0ZXIoKHsgbmFtZSB9KSA9PiBzZWxlY3RlZENvbHMuaW5jbHVkZXMobmFtZSkpXG4gICAgICAubWFwKChjb2x1bW4pID0+ICh7IC4uLmNvbHVtbiwgbG9ja2VkOiB0cnVlIH0pKTtcbiAgICBjb25zdCBsb2NrZWQgPSBbLi4uY3VycmVudGx5TG9ja2VkLCAuLi5uZXdMb2Nrc107XG4gICAgcHJvcGFnYXRlU3RhdGUoXG4gICAgICB7XG4gICAgICAgIGNvbHVtbnM6IFsuLi5sb2NrZWQsIC4uLmNvbHVtbnMuZmlsdGVyKCh7IG5hbWUgfSkgPT4gIWxvY2tlZC5maW5kKChjb2x1bW4pID0+IGNvbHVtbi5uYW1lID09PSBuYW1lKSldLFxuICAgICAgICBmaXhlZENvbHVtbkNvdW50OiBsb2NrZWQubGVuZ3RoLFxuICAgICAgICB0cmlnZ2VyUmVzaXplOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGFzeW5jICgpID0+IGF3YWl0IGV4ZWN1dGVBY3Rpb24oJ3VwZGF0ZS1sb2NrZWQnLCBkYXRhSWQsIHsgY29sOiBzZWxlY3RlZENvbHNbMF0sIGFjdGlvbjogJ2xvY2snIH0pLFxuICAgICk7XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gdG8gdW5waW4gY29sdW1ucyBmcm9tIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgZ3JpZC5cbiAqXG4gKiBAcGFyYW0gc2VsZWN0ZWRDb2xzIHRoZSBjb2x1bW5zIHRvIHVucGluXG4gKiBAcGFyYW0gcHJvcHMgaW5wdXQgcGFyYW1ldGVycyBmb3IgY29sdW1uIG9wZXJhdGlvbnNcbiAqIEByZXR1cm4gYSBmdW5jdGlvbiB1bnBpbiBjb2x1bW5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmxvY2tDb2xzKHNlbGVjdGVkQ29sczogc3RyaW5nW10sIHByb3BzOiBDb2x1bW5PcGVyYXRpb25Qcm9wcyk6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGNvbHVtbnMsIHByb3BhZ2F0ZVN0YXRlLCBkYXRhSWQgfSA9IHByb3BzO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRseUxvY2tlZCA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+IGNvbHVtbi5sb2NrZWQpO1xuICAgIGNvbnN0IHVubG9ja2VkID0gY3VycmVudGx5TG9ja2VkXG4gICAgICAuZmlsdGVyKCh7IG5hbWUgfSkgPT4gc2VsZWN0ZWRDb2xzLmluY2x1ZGVzKG5hbWUpKVxuICAgICAgLm1hcCgoY29sdW1uKSA9PiAoeyAuLi5jb2x1bW4sIGxvY2tlZDogZmFsc2UgfSkpO1xuICAgIGNvbnN0IGxvY2tlZCA9IGN1cnJlbnRseUxvY2tlZC5maWx0ZXIoKHsgbmFtZSB9KSA9PiAhc2VsZWN0ZWRDb2xzLmluY2x1ZGVzKG5hbWUpKTtcbiAgICBwcm9wYWdhdGVTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgY29sdW1uczogWy4uLmxvY2tlZCwgLi4udW5sb2NrZWQsIC4uLmNvbHVtbnMuZmlsdGVyKChjKSA9PiAhYy5sb2NrZWQpXSxcbiAgICAgICAgZml4ZWRDb2x1bW5Db3VudDogbG9ja2VkLmxlbmd0aCxcbiAgICAgICAgdHJpZ2dlclJlc2l6ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBhc3luYyAoKSA9PiBhd2FpdCBleGVjdXRlQWN0aW9uKCd1cGRhdGUtbG9ja2VkJywgZGF0YUlkLCB7IGNvbDogc2VsZWN0ZWRDb2xzWzBdLCBhY3Rpb246ICd1bmxvY2snIH0pLFxuICAgICk7XG4gIH07XG59XG5cbmNvbnN0IHBlcnNpc3RWaXNpYmlsaXR5ID0gYXN5bmMgKGRhdGFJZDogc3RyaW5nLCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBCYXNlUmV0dXJuID0+XG4gIGF3YWl0IHBvc3REYXRhVG9TZXJ2aWNlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4sIEJhc2VSZXNwb25zZT4oYC9kdGFsZS91cGRhdGUtdmlzaWJpbGl0eS8ke2RhdGFJZH1gLCBwYXJhbXMpO1xuXG5leHBvcnQgY29uc3Qgc2F2ZVJhbmdlSGlnaGxpZ2h0cyA9IGFzeW5jIChkYXRhSWQ6IHN0cmluZywgcmFuZ2VzOiBSYW5nZUhpZ2hsaWdodENvbmZpZyk6IEJhc2VSZXR1cm4gPT5cbiAgYXdhaXQgcG9zdERhdGFUb1NlcnZpY2U8UmVjb3JkPHN0cmluZywgc3RyaW5nPiwgQmFzZVJlc3BvbnNlPihgL2R0YWxlL3NhdmUtcmFuZ2UtaGlnaGxpZ2h0cy8ke2RhdGFJZH1gLCB7XG4gICAgcmFuZ2VzOiBKU09OLnN0cmluZ2lmeShyYW5nZXMpLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNldHRpbmdzID0gYXN5bmMgKHNldHRpbmdzOiBQYXJ0aWFsPEluc3RhbmNlU2V0dGluZ3M+LCBkYXRhSWQ6IHN0cmluZyk6IEJhc2VSZXR1cm4gPT5cbiAgYXdhaXQgYmFzZUdldHRlcihidWlsZFVSTFN0cmluZyhgdXBkYXRlLXNldHRpbmdzLyR7ZGF0YUlkfT9gLCB7IHNldHRpbmdzOiBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykgfSkpO1xuXG5leHBvcnQgY29uc3QgZHJvcEZpbHRlcmVkUm93cyA9IGFzeW5jIChkYXRhSWQ6IHN0cmluZywgY2FsbGJhY2s/OiBDYWxsYmFjayk6IEJhc2VSZXR1cm4gPT5cbiAgYXdhaXQgYmFzZUdldHRlcihgZHJvcC1maWx0ZXJlZC1yb3dzLyR7ZGF0YUlkfWApO1xuXG4vKiogUmVzcG9uc2UgY29udGVudHMgZm9yIHNldHRpbmdzIHVwZGF0ZSByZXF1ZXN0cyAqL1xuaW50ZXJmYWNlIFNldHRpbmdSZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZSB7XG4gIHNldHRpbmdzOiBJbnN0YW5jZVNldHRpbmdzO1xufVxuXG5leHBvcnQgY29uc3QgbW92ZUZpbHRlcnNUb0N1c3RvbSA9IGFzeW5jIChkYXRhSWQ6IHN0cmluZyk6IEJhc2VSZXR1cm48U2V0dGluZ1Jlc3BvbnNlPiA9PlxuICBhd2FpdCBiYXNlR2V0dGVyPFNldHRpbmdSZXNwb25zZT4oYG1vdmUtZmlsdGVycy10by1jdXN0b20vJHtkYXRhSWR9YCk7XG5cbmV4cG9ydCBjb25zdCByZW5hbWVDb2x1bW4gPSBhc3luYyAoZGF0YUlkOiBzdHJpbmcsIGNvbDogc3RyaW5nLCByZW5hbWU6IHN0cmluZyk6IEJhc2VSZXR1cm4gPT5cbiAgYXdhaXQgYmFzZUdldHRlcihidWlsZFVSTFN0cmluZyhgcmVuYW1lLWNvbC8ke2RhdGFJZH1gLCB7IGNvbCwgcmVuYW1lIH0pKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUZvcm1hdHMgPSBhc3luYyAoXG4gIGRhdGFJZDogc3RyaW5nLFxuICBjb2w6IHN0cmluZyxcbiAgZm9ybWF0OiBDb2x1bW5Gb3JtYXQsXG4gIGFsbDogYm9vbGVhbixcbiAgbmFuRGlzcGxheTogc3RyaW5nLFxuKTogQmFzZVJldHVybiA9PlxuICBhd2FpdCBiYXNlR2V0dGVyKFxuICAgIGJ1aWxkVVJMU3RyaW5nKGB1cGRhdGUtZm9ybWF0cy8ke2RhdGFJZH1gLCB7XG4gICAgICBjb2wsXG4gICAgICBmb3JtYXQ6IEpTT04uc3RyaW5naWZ5KGZvcm1hdCksXG4gICAgICBhbGw6IGAke2FsbH1gLFxuICAgICAgbmFuRGlzcGxheSxcbiAgICB9KSxcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGxhc3RDbGlja2VkQ2VsbCA9IGFzeW5jIChkYXRhSWQ6IHN0cmluZywgcm93SW5kZXg6IG51bWJlciwgY29sPzogc3RyaW5nKTogQmFzZVJldHVybiA9PiB7XG4gIGxldCBjb2xOYW1lOiBzdHJpbmcgPSBjb2wgPyBjb2wgOiAnJztcbiAgcmV0dXJuIGF3YWl0IGJhc2VHZXR0ZXIoYnVpbGRVUkxTdHJpbmcoYGxhc3QtY2xpY2tlZC1jZWxsLyR7ZGF0YUlkfWAsIHtyb3dJbmRleDogYCR7cm93SW5kZXh9YCwgY29sTmFtZX0pKTtcbn1cblxuZXhwb3J0IGNvbnN0IGVkaXRDZWxsID0gYXN5bmMgKGRhdGFJZDogc3RyaW5nLCBjb2w6IHN0cmluZywgcm93SW5kZXg6IG51bWJlciwgdXBkYXRlZDogc3RyaW5nKTogQmFzZVJldHVybiA9PlxuICBhd2FpdCBiYXNlR2V0dGVyKGJ1aWxkVVJMU3RyaW5nKGBlZGl0LWNlbGwvJHtkYXRhSWR9YCwgeyBjb2wsIHJvd0luZGV4OiBgJHtyb3dJbmRleH1gLCB1cGRhdGVkIH0pKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRoZW1lID0gYXN5bmMgKHRoZW1lOiBzdHJpbmcpOiBCYXNlUmV0dXJuID0+XG4gIGF3YWl0IGJhc2VHZXR0ZXIoYnVpbGRVUkxTdHJpbmcoJ3VwZGF0ZS10aGVtZScsIHsgdGhlbWUgfSkpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUXVlcnlFbmdpbmUgPSBhc3luYyAoZW5naW5lOiBRdWVyeUVuZ2luZSk6IEJhc2VSZXR1cm4gPT5cbiAgYXdhaXQgYmFzZUdldHRlcihidWlsZFVSTFN0cmluZygndXBkYXRlLXF1ZXJ5LWVuZ2luZScsIHsgZW5naW5lIH0pKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBpbk1lbnUgPSBhc3luYyAocGlubmVkOiBib29sZWFuKTogQmFzZVJldHVybiA9PlxuICBhd2FpdCBiYXNlR2V0dGVyKGJ1aWxkVVJMU3RyaW5nKCd1cGRhdGUtcGluLW1lbnUnLCB7IHBpbm5lZDogYCR7cGlubmVkfWAgfSkpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGFuZ3VhZ2UgPSBhc3luYyAobGFuZ3VhZ2U6IHN0cmluZyk6IEJhc2VSZXR1cm4gPT5cbiAgYXdhaXQgYmFzZUdldHRlcihidWlsZFVSTFN0cmluZygndXBkYXRlLWxhbmd1YWdlJywgeyBsYW5ndWFnZSB9KSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVNYXhDb2x1bW5XaWR0aCA9IGFzeW5jICh3aWR0aD86IG51bWJlcik6IEJhc2VSZXR1cm4gPT5cbiAgYXdhaXQgYmFzZUdldHRlcihidWlsZFVSTFN0cmluZygndXBkYXRlLW1heGltdW0tY29sdW1uLXdpZHRoJywgeyB3aWR0aDogd2lkdGggPyBgJHt3aWR0aH1gIDogJycgfSkpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTWF4Um93SGVpZ2h0ID0gYXN5bmMgKGhlaWdodDogbnVtYmVyKTogQmFzZVJldHVybiA9PlxuICBhd2FpdCBiYXNlR2V0dGVyKGJ1aWxkVVJMU3RyaW5nKCd1cGRhdGUtbWF4aW11bS1yb3ctaGVpZ2h0JywgeyBoZWlnaHQ6IGAke2hlaWdodH1gIH0pKTtcblxuLyoqIFJlc3BvbnNlIGNvbnRlbnRzIGZvciByYW5nZSBoaWdobGlnaHQgcmVxdWVzdHMgKi9cbmludGVyZmFjZSBSYW5nZVJlc3BvbnNlIGV4dGVuZHMgQmFzZVJlc3BvbnNlIHtcbiAgcmFuZ2VzOiBGaWx0ZXJlZFJhbmdlcztcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRGaWx0ZXJlZFJhbmdlcyA9IGFzeW5jIChkYXRhSWQ6IHN0cmluZyk6IEJhc2VSZXR1cm48UmFuZ2VSZXNwb25zZT4gPT5cbiAgYXdhaXQgYmFzZUdldHRlcjxSYW5nZVJlc3BvbnNlPihgbG9hZC1maWx0ZXJlZC1yYW5nZXMvJHtkYXRhSWR9YCk7XG5cbmNvbnN0IGRlbGV0ZUNvbHMgPSBhc3luYyAoZGF0YUlkOiBzdHJpbmcsIGNvbHM6IHN0cmluZ1tdKTogQmFzZVJldHVybiA9PlxuICBhd2FpdCBiYXNlR2V0dGVyKGJ1aWxkVVJMU3RyaW5nKGBkZWxldGUtY29sLyR7ZGF0YUlkfWAsIHsgY29sczogSlNPTi5zdHJpbmdpZnkoY29scykgfSkpO1xuXG5leHBvcnQgY29uc3QgbW92ZVRvRnJvbnQgPSAoc2VsZWN0ZWRDb2w6IHN0cmluZywgcHJvcHM6IENvbHVtbk9wZXJhdGlvblByb3BzKTogKCgpID0+IHZvaWQpID0+XG4gIG1vdmVUbyhzZWxlY3RlZENvbCwgcHJvcHMsICdmcm9udCcpO1xuZXhwb3J0IGNvbnN0IG1vdmVUb0JhY2sgPSAoc2VsZWN0ZWRDb2w6IHN0cmluZywgcHJvcHM6IENvbHVtbk9wZXJhdGlvblByb3BzKTogKCgpID0+IHZvaWQpID0+XG4gIG1vdmVUbyhzZWxlY3RlZENvbCwgcHJvcHMsICdiYWNrJyk7XG5leHBvcnQgY29uc3QgbW92ZVJpZ2h0ID0gKHNlbGVjdGVkQ29sOiBzdHJpbmcsIHByb3BzOiBDb2x1bW5PcGVyYXRpb25Qcm9wcyk6ICgoKSA9PiB2b2lkKSA9PlxuICBtb3ZlT25lUG9zaXRpb24oc2VsZWN0ZWRDb2wsIHByb3BzLCAncmlnaHQnKTtcbmV4cG9ydCBjb25zdCBtb3ZlTGVmdCA9IChzZWxlY3RlZENvbDogc3RyaW5nLCBwcm9wczogQ29sdW1uT3BlcmF0aW9uUHJvcHMpOiAoKCkgPT4gdm9pZCkgPT5cbiAgbW92ZU9uZVBvc2l0aW9uKHNlbGVjdGVkQ29sLCBwcm9wcywgJ2xlZnQnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVWaXNpYmlsaXR5ID0gYXN5bmMgKGRhdGFJZDogc3RyaW5nLCB2aXNpYmlsaXR5OiBWaXNpYmlsaXR5U3RhdGUpOiBCYXNlUmV0dXJuID0+XG4gIGF3YWl0IHBlcnNpc3RWaXNpYmlsaXR5KGRhdGFJZCwgeyB2aXNpYmlsaXR5OiBKU09OLnN0cmluZ2lmeSh2aXNpYmlsaXR5KSB9KTtcbmV4cG9ydCBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gYXN5bmMgKGRhdGFJZDogc3RyaW5nLCB0b2dnbGU6IHN0cmluZyk6IEJhc2VSZXR1cm4gPT5cbiAgYXdhaXQgcGVyc2lzdFZpc2liaWxpdHkoZGF0YUlkLCB7IHRvZ2dsZSB9KTtcbmV4cG9ydCBjb25zdCBkZWxldGVDb2x1bW4gPSBhc3luYyAoZGF0YUlkOiBzdHJpbmcsIGNvbDogc3RyaW5nKTogQmFzZVJldHVybiA9PiBhd2FpdCBkZWxldGVDb2xzKGRhdGFJZCwgW2NvbF0pO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbHVtbnMgPSBhc3luYyAoZGF0YUlkOiBzdHJpbmcsIGNvbHM6IHN0cmluZ1tdKTogQmFzZVJldHVybiA9PiBhd2FpdCBkZWxldGVDb2xzKGRhdGFJZCwgY29scyk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MmUzOTU4ZmRlNWI2N2E0MjQwM1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==