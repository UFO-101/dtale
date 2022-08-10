"use strict";
self["webpackHotUpdatedtale"]("main",{

/***/ "./static/dtale/GridEventHandler.tsx":
/*!*******************************************!*\
  !*** ./static/dtale/GridEventHandler.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const AppActions_1 = __webpack_require__(/*! ../redux/actions/AppActions */ "./static/redux/actions/AppActions.ts");
const chartActions = __importStar(__webpack_require__(/*! ../redux/actions/charts */ "./static/redux/actions/charts.ts"));
const AppState_1 = __webpack_require__(/*! ../redux/state/AppState */ "./static/redux/state/AppState.ts");
const gridUtils_1 = __webpack_require__(/*! ./gridUtils */ "./static/dtale/gridUtils.tsx");
const MeasureText_1 = __webpack_require__(/*! ./MeasureText */ "./static/dtale/MeasureText.tsx");
const MenuTooltip_1 = __webpack_require__(/*! ./menu/MenuTooltip */ "./static/dtale/menu/MenuTooltip.tsx");
const rangeSelectUtils_1 = __webpack_require__(/*! ./rangeSelectUtils */ "./static/dtale/rangeSelectUtils.ts");
const serverStateManagement_1 = __webpack_require__(/*! ./serverStateManagement */ "./static/dtale/serverStateManagement.ts");
const SidePanel_1 = __webpack_require__(/*! ./side/SidePanel */ "./static/dtale/side/SidePanel.tsx");
const panelUtils = __importStar(__webpack_require__(/*! ./side/sidePanelUtils */ "./static/dtale/side/sidePanelUtils.ts"));
const gu = __importStar(__webpack_require__(/*! ./gridUtils */ "./static/dtale/gridUtils.tsx"));
const cellIsNotOnEdge = (cellIdx) => !cellIdx.startsWith('0|') && !cellIdx.endsWith('|0');
const GridEventHandler = ({ columns, data, t, children }) => {
    const { allowCellEdits, dataId, ribbonMenuOpen, menuPinned, ribbonDropdownOpen, sidePanelOpen, sidePanel, sidePanelOffset, dragResize, rangeSelect, rowRange, ctrlRows, settings, } = (0, react_redux_1.useSelector)((state) => ({
        allowCellEdits: state.allowCellEdits,
        dataId: state.dataId,
        ribbonMenuOpen: state.ribbonMenuOpen,
        menuPinned: state.menuPinned,
        ribbonDropdownOpen: state.ribbonDropdown.visible,
        sidePanelOpen: state.sidePanel.visible,
        sidePanel: state.sidePanel.view,
        sidePanelOffset: state.sidePanel.offset,
        dragResize: state.dragResize,
        rangeSelect: state.rangeSelect,
        rowRange: state.rowRange,
        ctrlRows: state.ctrlRows,
        settings: state.settings,
    }));
    const dispatch = (0, react_redux_1.useDispatch)();
    const openChart = (chartData) => dispatch(chartActions.openChart(chartData));
    const editCell = (editedCell) => dispatch({ type: AppActions_1.ActionType.EDIT_CELL, editedCell });
    const setRibbonVisibility = (show) => dispatch({ type: show ? AppActions_1.ActionType.SHOW_RIBBON_MENU : AppActions_1.ActionType.HIDE_RIBBON_MENU });
    const showTooltip = (element, content) => dispatch({ type: AppActions_1.ActionType.SHOW_MENU_TOOLTIP, element, content });
    const hideTooltip = () => dispatch({ type: AppActions_1.ActionType.HIDE_MENU_TOOLTIP });
    const updateRangeState = (state) => dispatch({ type: AppActions_1.ActionType.SET_RANGE_STATE, ...state });
    const [currY, setCurrY] = React.useState();
    const gridPanel = React.useRef(null);
    const hideTimeout = React.useRef(null);
    const showTimeout = React.useRef(null);
    const clickTimeout = React.useRef(null);
    React.useEffect(() => {
        const keyHandler = (e) => {
            document.onselectstart = () => !(e.key === 'Shift' && e.shiftKey) && e.key !== 'Meta';
        };
        window.addEventListener('keyup', keyHandler);
        window.addEventListener('keydown', keyHandler);
        return () => {
            window.removeEventListener('keyup', keyHandler);
            window.removeEventListener('keydown', keyHandler);
        };
    }, []);
    const handleRangeSelect = (cellIdx) => {
        if (rangeSelect) {
            const copyText = (0, rangeSelectUtils_1.buildCopyText)(data, columns, rangeSelect.start, cellIdx);
            const title = t('Copy Range to Clipboard?');
            openChart({
                ...copyText,
                type: AppState_1.PopupType.COPY_RANGE,
                title,
                size: 'sm',
                visible: true,
            });
        }
        else {
            updateRangeState((0, rangeSelectUtils_1.buildRangeState)({ rangeSelect: { start: cellIdx, end: cellIdx } }));
        }
    };
    const handleRowSelect = (cellIdx) => {
        const coords = (0, gridUtils_1.convertCellIdxToCoords)(cellIdx);
        if (rowRange) {
            const title = t('Copy Rows to Clipboard?');
            const callback = (copyText) => openChart({
                ...copyText,
                type: AppState_1.PopupType.COPY_ROW_RANGE,
                title,
                size: 'sm',
                visible: true,
            });
            (0, rangeSelectUtils_1.buildRowCopyText)(dataId, columns, { start: `${rowRange.start}`, end: `${coords[1]}` }, callback);
        }
        else {
            updateRangeState((0, rangeSelectUtils_1.buildRangeState)({ rowRange: { start: coords[1], end: coords[1] } }));
        }
    };
    const handleCtrlRowSelect = (cellIdx) => {
        const coords = (0, gridUtils_1.convertCellIdxToCoords)(cellIdx);
        if (ctrlRows) {
            updateRangeState((0, rangeSelectUtils_1.buildRangeState)({ ctrlRows: (0, rangeSelectUtils_1.toggleSelection)(ctrlRows, coords[1]) }));
        }
        else {
            updateRangeState((0, rangeSelectUtils_1.buildRangeState)({ ctrlRows: [coords[1]] }));
        }
    };
    const handleLongStringDisplay = (e, cellIdx) => {
        const resized = e.target.querySelector('div.resized');
        if (resized && resized.clientWidth < resized.scrollWidth) {
            const { colCfg, rec } = (0, gridUtils_1.getCell)(cellIdx, columns, data, settings.backgroundMode);
            const isLink = settings.columnFormats?.[colCfg.name]?.fmt?.link === true;
            const isHtml = settings.columnFormats?.[colCfg.name]?.fmt?.html === true;
            if (!isLink && !isHtml) {
                showTooltip(resized, rec.raw);
                return;
            }
        }
        hideTooltip();
    };
    const handleMouseMove = (e) => {
        setCurrY(e.clientY);
    };
    React.useEffect(() => {
        if (currY !== undefined && currY <= 5) {
            if (hideTimeout.current) {
                clearTimeout(hideTimeout.current);
            }
            hideTimeout.current = null;
            if (!ribbonMenuOpen) {
                showTimeout.current = setTimeout(() => {
                    if (currY !== undefined && currY <= 5) {
                        setRibbonVisibility(true);
                    }
                }, 500);
            }
        }
        else if (!ribbonDropdownOpen && ribbonMenuOpen && currY !== undefined && currY >= 35 && !hideTimeout.current) {
            hideTimeout.current = setTimeout(() => {
                setRibbonVisibility(false);
                hideTimeout.current = null;
            }, 2000);
            if (showTimeout.current) {
                clearTimeout(showTimeout.current);
                showTimeout.current = null;
            }
        }
    }, [currY]);
    const handleMouseOver = (e) => {
        const rangeExists = rangeSelect && rangeSelect.start;
        const rowRangeExists = rowRange && rowRange.start;
        const cellIdx = e.target.attributes?.cell_idx?.nodeValue;
        if (e.shiftKey) {
            if (rangeExists) {
                if (cellIdx && cellIsNotOnEdge(cellIdx)) {
                    updateRangeState((0, rangeSelectUtils_1.buildRangeState)({
                        rangeSelect: { ...rangeSelect, end: cellIdx ?? null },
                    }));
                }
            }
            if (rowRangeExists) {
                if (cellIdx && cellIdx.startsWith('0|')) {
                    const coords = (0, gridUtils_1.convertCellIdxToCoords)(cellIdx);
                    updateRangeState((0, rangeSelectUtils_1.buildRangeState)({ rowRange: { ...rowRange, end: coords[1] } }));
                }
            }
        }
        else if (rangeExists || rowRangeExists) {
            updateRangeState((0, rangeSelectUtils_1.buildRangeState)());
        }
        else if (cellIdx && Object.keys(data).length && cellIsNotOnEdge(cellIdx)) {
            handleLongStringDisplay(e, cellIdx);
        }
        else if (cellIdx) {
            hideTooltip();
        }
    };
    const handleClicks = (e) => {
        setRibbonVisibility(false);
        // check for range selected
        const cellIdx = e.target.attributes?.cell_idx?.nodeValue;
        const coords = (0, gridUtils_1.convertCellIdxToCoords)(cellIdx);
        let column_def = gu.getCol(coords[0], columns, settings.backgroundMode);
        (0, serverStateManagement_1.lastClickedCell)(dataId, coords[1], column_def?.name);
        if (e.shiftKey) {
            if (cellIdx && cellIsNotOnEdge(cellIdx)) {
                handleRangeSelect(cellIdx);
            }
            else if (cellIdx && cellIdx.startsWith('0|')) {
                handleRowSelect(cellIdx);
            }
            return;
        }
        else if (e.ctrlKey || e.metaKey) {
            if (cellIdx?.startsWith('0|')) {
                handleCtrlRowSelect(cellIdx);
            }
            return;
        }
        else if (cellIdx?.startsWith('0|')) {
            updateRangeState((0, rangeSelectUtils_1.buildRangeState)({ selectedRow: coords[1] }));
            return;
        }
        if (allowCellEdits) {
            if (clickTimeout.current === null) {
                clickTimeout.current = setTimeout(() => {
                    if (clickTimeout.current) {
                        clearTimeout(clickTimeout.current);
                        clickTimeout.current = null;
                    }
                }, 2000);
            }
            else {
                if (cellIdx) {
                    editCell(cellIdx);
                }
                if (clickTimeout.current) {
                    clearTimeout(clickTimeout.current);
                    clickTimeout.current = null;
                }
            }
        }
        updateRangeState((0, rangeSelectUtils_1.buildRangeState)());
    };
    return (React.createElement("div", { className: `h-100 w-100 d-flex ${menuPinned ? 'is-pinned' : ''}` },
        React.createElement("div", { className: `main-panel-content${sidePanelOpen ? ' is-half' : ''} ${sidePanel ?? ''} h-100 d-flex`, style: sidePanelOpen ? panelUtils.calcWidth(sidePanel, sidePanelOffset) : {}, onMouseOver: handleMouseOver, onMouseMove: handleMouseMove, onClick: handleClicks, ref: gridPanel }, children),
        React.createElement(MenuTooltip_1.MenuTooltip, null),
        React.createElement(MeasureText_1.MeasureText, null),
        React.createElement(SidePanel_1.SidePanel, { gridPanel: gridPanel.current }),
        dragResize && React.createElement("div", { className: "blue-line", style: { left: dragResize + 3 } })));
};
exports["default"] = (0, react_i18next_1.withTranslation)('main')(GridEventHandler);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1329d0ac73721cb84b48")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZmJiZTJlMzJlNWY3YjA3ZWExMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RkFBK0I7QUFDL0Isa0hBQWlFO0FBQ2pFLHVHQUF1RDtBQUV2RCxvSEFTcUM7QUFDckMsMEhBQXdEO0FBQ3hELDBHQUFrRjtBQUdsRiwyRkFBOEQ7QUFDOUQsaUdBQTRDO0FBQzVDLDJHQUFpRDtBQUNqRCwrR0FBaUg7QUFDakgsOEhBQTBEO0FBQzFELHFHQUE2QztBQUM3QywySEFBb0Q7QUFDcEQsZ0dBQWtDO0FBRWxDLE1BQU0sZUFBZSxHQUFHLENBQUMsT0FBZSxFQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBUTNHLE1BQU0sZ0JBQWdCLEdBQXNELENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO0lBQzdHLE1BQU0sRUFDSixjQUFjLEVBQ2QsTUFBTSxFQUNOLGNBQWMsRUFDZCxVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLEdBQ1QsR0FBRyw2QkFBVyxFQUFDLENBQUMsS0FBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztRQUNwQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07UUFDcEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1FBQ3BDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtRQUM1QixrQkFBa0IsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDaEQsYUFBYSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FB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Q0FBZSxHQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUM7SUFFRixPQUFPLENBQ0wsNkJBQUssU0FBUyxFQUFFLHNCQUFzQixVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ25FLDZCQUNFLFNBQVMsRUFBRSxxQkFBcUIsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxTQUFTLElBQUksRUFBRSxlQUFlLEVBQ2pHLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzdFLFdBQVcsRUFBRSxlQUFlLEVBQzVCLFdBQVcsRUFBRSxlQUFlLEVBQzVCLE9BQU8sRUFBRSxZQUFZLEVBQ3JCLEdBQUcsRUFBRSxTQUFTLElBRWIsUUFBUSxDQUNMO1FBQ04sb0JBQUMseUJBQVcsT0FBRztRQUNmLG9CQUFDLHlCQUFXLE9BQUc7UUFDZixvQkFBQyxxQkFBUyxJQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTyxHQUFJO1FBQzFDLFVBQVUsSUFBSSw2QkFBSyxTQUFTLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEdBQUksQ0FDekUsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYscUJBQWUsbUNBQWUsRUFBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7VUNuUnpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHRhbGUvLi9zdGF0aWMvZHRhbGUvR3JpZEV2ZW50SGFuZGxlci50c3giLCJ3ZWJwYWNrOi8vZHRhbGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiwgV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7XG4gIEFjdGlvblR5cGUsXG4gIEFwcEFjdGlvbnMsXG4gIEVkaXRlZENlbGxBY3Rpb24sXG4gIEhpZGVNZW51VG9vbHRpcEFjdGlvbixcbiAgSGlkZVJpYmJvbk1lbnVBY3Rpb24sXG4gIFNldFJhbmdlU3RhdGVBY3Rpb24sXG4gIFNob3dNZW51VG9vbHRpcEFjdGlvbixcbiAgU2hvd1JpYmJvbk1lbnVBY3Rpb24sXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvQXBwQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBjaGFydEFjdGlvbnMgZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9jaGFydHMnO1xuaW1wb3J0IHsgQXBwU3RhdGUsIFBvcHVwcywgUG9wdXBUeXBlLCBSYW5nZVN0YXRlIH0gZnJvbSAnLi4vcmVkdXgvc3RhdGUvQXBwU3RhdGUnO1xuXG5pbXBvcnQgeyBDb2x1bW5EZWYsIERhdGFWaWV3ZXJEYXRhLCBTdHJpbmdDb2x1bW5Gb3JtYXQgfSBmcm9tICcuL0RhdGFWaWV3ZXJTdGF0ZSc7XG5pbXBvcnQgeyBjb252ZXJ0Q2VsbElkeFRvQ29vcmRzLCBnZXRDZWxsIH0gZnJvbSAnLi9ncmlkVXRpbHMnO1xuaW1wb3J0IHsgTWVhc3VyZVRleHQgfSBmcm9tICcuL01lYXN1cmVUZXh0JztcbmltcG9ydCB7IE1lbnVUb29sdGlwIH0gZnJvbSAnLi9tZW51L01lbnVUb29sdGlwJztcbmltcG9ydCB7IGJ1aWxkQ29weVRleHQsIGJ1aWxkUmFuZ2VTdGF0ZSwgYnVpbGRSb3dDb3B5VGV4dCwgQ29weVRleHQsIHRvZ2dsZVNlbGVjdGlvbiB9IGZyb20gJy4vcmFuZ2VTZWxlY3RVdGlscyc7XG5pbXBvcnQgeyBsYXN0Q2xpY2tlZENlbGwgfSBmcm9tICcuL3NlcnZlclN0YXRlTWFuYWdlbWVudCc7XG5pbXBvcnQgeyBTaWRlUGFuZWwgfSBmcm9tICcuL3NpZGUvU2lkZVBhbmVsJztcbmltcG9ydCAqIGFzIHBhbmVsVXRpbHMgZnJvbSAnLi9zaWRlL3NpZGVQYW5lbFV0aWxzJztcbmltcG9ydCAqIGFzIGd1IGZyb20gJy4vZ3JpZFV0aWxzJztcblxuY29uc3QgY2VsbElzTm90T25FZGdlID0gKGNlbGxJZHg6IHN0cmluZyk6IGJvb2xlYW4gPT4gIWNlbGxJZHguc3RhcnRzV2l0aCgnMHwnKSAmJiAhY2VsbElkeC5lbmRzV2l0aCgnfDAnKTtcblxuLyoqIENvbXBvbmVudCBwcm9wZXJ0aWVzIGZvciBHcmlkRXZlbnRIYW5kbGVyICovXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRFdmVudEhhbmRsZXJQcm9wcyB7XG4gIGNvbHVtbnM6IENvbHVtbkRlZltdO1xuICBkYXRhOiBEYXRhVmlld2VyRGF0YTtcbn1cblxuY29uc3QgR3JpZEV2ZW50SGFuZGxlcjogUmVhY3QuRkM8R3JpZEV2ZW50SGFuZGxlclByb3BzICYgV2l0aFRyYW5zbGF0aW9uPiA9ICh7IGNvbHVtbnMsIGRhdGEsIHQsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGFsbG93Q2VsbEVkaXRzLFxuICAgIGRhdGFJZCxcbiAgICByaWJib25NZW51T3BlbixcbiAgICBtZW51UGlubmVkLFxuICAgIHJpYmJvbkRyb3Bkb3duT3BlbixcbiAgICBzaWRlUGFuZWxPcGVuLFxuICAgIHNpZGVQYW5lbCxcbiAgICBzaWRlUGFuZWxPZmZzZXQsXG4gICAgZHJhZ1Jlc2l6ZSxcbiAgICByYW5nZVNlbGVjdCxcbiAgICByb3dSYW5nZSxcbiAgICBjdHJsUm93cyxcbiAgICBzZXR0aW5ncyxcbiAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+ICh7XG4gICAgYWxsb3dDZWxsRWRpdHM6IHN0YXRlLmFsbG93Q2VsbEVkaXRzLFxuICAgIGRhdGFJZDogc3RhdGUuZGF0YUlkLFxuICAgIHJpYmJvbk1lbnVPcGVuOiBzdGF0ZS5yaWJib25NZW51T3BlbixcbiAgICBtZW51UGlubmVkOiBzdGF0ZS5tZW51UGlubmVkLFxuICAgIHJpYmJvbkRyb3Bkb3duT3Blbjogc3RhdGUucmliYm9uRHJvcGRvd24udmlzaWJsZSxcbiAgICBzaWRlUGFuZWxPcGVuOiBzdGF0ZS5zaWRlUGFuZWwudmlzaWJsZSxcbiAgICBzaWRlUGFuZWw6IHN0YXRlLnNpZGVQYW5lbC52aWV3LFxuICAgIHNpZGVQYW5lbE9mZnNldDogc3RhdGUuc2lkZVBhbmVsLm9mZnNldCxcbiAgICBkcmFnUmVzaXplOiBzdGF0ZS5kcmFnUmVzaXplLFxuICAgIHJhbmdlU2VsZWN0OiBzdGF0ZS5yYW5nZVNlbGVjdCxcbiAgICByb3dSYW5nZTogc3RhdGUucm93UmFuZ2UsXG4gICAgY3RybFJvd3M6IHN0YXRlLmN0cmxSb3dzLFxuICAgIHNldHRpbmdzOiBzdGF0ZS5zZXR0aW5ncyxcbiAgfSkpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9wZW5DaGFydCA9IChjaGFydERhdGE6IFBvcHVwcyk6IEFwcEFjdGlvbnM8dm9pZD4gPT4gZGlzcGF0Y2goY2hhcnRBY3Rpb25zLm9wZW5DaGFydChjaGFydERhdGEpKTtcbiAgY29uc3QgZWRpdENlbGwgPSAoZWRpdGVkQ2VsbDogc3RyaW5nKTogRWRpdGVkQ2VsbEFjdGlvbiA9PiBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGUuRURJVF9DRUxMLCBlZGl0ZWRDZWxsIH0pO1xuICBjb25zdCBzZXRSaWJib25WaXNpYmlsaXR5ID0gKHNob3c6IGJvb2xlYW4pOiBTaG93UmliYm9uTWVudUFjdGlvbiB8IEhpZGVSaWJib25NZW51QWN0aW9uID0+XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBzaG93ID8gQWN0aW9uVHlwZS5TSE9XX1JJQkJPTl9NRU5VIDogQWN0aW9uVHlwZS5ISURFX1JJQkJPTl9NRU5VIH0pO1xuICBjb25zdCBzaG93VG9vbHRpcCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgY29udGVudDogUmVhY3QuUmVhY3ROb2RlKTogU2hvd01lbnVUb29sdGlwQWN0aW9uID0+XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlLlNIT1dfTUVOVV9UT09MVElQLCBlbGVtZW50LCBjb250ZW50IH0pO1xuICBjb25zdCBoaWRlVG9vbHRpcCA9ICgpOiBIaWRlTWVudVRvb2x0aXBBY3Rpb24gPT4gZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlLkhJREVfTUVOVV9UT09MVElQIH0pO1xuICBjb25zdCB1cGRhdGVSYW5nZVN0YXRlID0gKHN0YXRlOiBSYW5nZVN0YXRlKTogU2V0UmFuZ2VTdGF0ZUFjdGlvbiA9PlxuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZS5TRVRfUkFOR0VfU1RBVEUsIC4uLnN0YXRlIH0pO1xuXG4gIGNvbnN0IFtjdXJyWSwgc2V0Q3VyclldID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigpO1xuICBjb25zdCBncmlkUGFuZWwgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBoaWRlVGltZW91dCA9IFJlYWN0LnVzZVJlZjxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBzaG93VGltZW91dCA9IFJlYWN0LnVzZVJlZjxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBjbGlja1RpbWVvdXQgPSBSZWFjdC51c2VSZWY8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGtleUhhbmRsZXIgPSAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgZG9jdW1lbnQub25zZWxlY3RzdGFydCA9ICgpOiBib29sZWFuID0+ICEoZS5rZXkgPT09ICdTaGlmdCcgJiYgZS5zaGlmdEtleSkgJiYgZS5rZXkgIT09ICdNZXRhJztcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleUhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5SGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleUhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlUmFuZ2VTZWxlY3QgPSAoY2VsbElkeDogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgaWYgKHJhbmdlU2VsZWN0KSB7XG4gICAgICBjb25zdCBjb3B5VGV4dCA9IGJ1aWxkQ29weVRleHQoZGF0YSwgY29sdW1ucywgcmFuZ2VTZWxlY3Quc3RhcnQsIGNlbGxJZHgpO1xuICAgICAgY29uc3QgdGl0bGUgPSB0KCdDb3B5IFJhbmdlIHRvIENsaXBib2FyZD8nKTtcbiAgICAgIG9wZW5DaGFydCh7XG4gICAgICAgIC4uLmNvcHlUZXh0LFxuICAgICAgICB0eXBlOiBQb3B1cFR5cGUuQ09QWV9SQU5HRSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHNpemU6ICdzbScsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlUmFuZ2VTdGF0ZShidWlsZFJhbmdlU3RhdGUoeyByYW5nZVNlbGVjdDogeyBzdGFydDogY2VsbElkeCwgZW5kOiBjZWxsSWR4IH0gfSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVSb3dTZWxlY3QgPSAoY2VsbElkeDogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgY29uc3QgY29vcmRzID0gY29udmVydENlbGxJZHhUb0Nvb3JkcyhjZWxsSWR4KTtcbiAgICBpZiAocm93UmFuZ2UpIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gdCgnQ29weSBSb3dzIHRvIENsaXBib2FyZD8nKTtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gKGNvcHlUZXh0OiBDb3B5VGV4dCk6IEFwcEFjdGlvbnM8dm9pZD4gPT5cbiAgICAgICAgb3BlbkNoYXJ0KHtcbiAgICAgICAgICAuLi5jb3B5VGV4dCxcbiAgICAgICAgICB0eXBlOiBQb3B1cFR5cGUuQ09QWV9ST1dfUkFOR0UsXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgc2l6ZTogJ3NtJyxcbiAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIGJ1aWxkUm93Q29weVRleHQoZGF0YUlkLCBjb2x1bW5zLCB7IHN0YXJ0OiBgJHtyb3dSYW5nZS5zdGFydH1gLCBlbmQ6IGAke2Nvb3Jkc1sxXX1gIH0sIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlUmFuZ2VTdGF0ZShidWlsZFJhbmdlU3RhdGUoeyByb3dSYW5nZTogeyBzdGFydDogY29vcmRzWzFdLCBlbmQ6IGNvb3Jkc1sxXSB9IH0pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ3RybFJvd1NlbGVjdCA9IChjZWxsSWR4OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCBjb29yZHMgPSBjb252ZXJ0Q2VsbElkeFRvQ29vcmRzKGNlbGxJZHgpO1xuICAgIGlmIChjdHJsUm93cykge1xuICAgICAgdXBkYXRlUmFuZ2VTdGF0ZShidWlsZFJhbmdlU3RhdGUoeyBjdHJsUm93czogdG9nZ2xlU2VsZWN0aW9uKGN0cmxSb3dzLCBjb29yZHNbMV0pIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlUmFuZ2VTdGF0ZShidWlsZFJhbmdlU3RhdGUoeyBjdHJsUm93czogW2Nvb3Jkc1sxXV0gfSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb25nU3RyaW5nRGlzcGxheSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50LCBjZWxsSWR4OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCByZXNpemVkID0gKGUudGFyZ2V0IGFzIGFueSkucXVlcnlTZWxlY3RvcignZGl2LnJlc2l6ZWQnKTtcbiAgICBpZiAocmVzaXplZCAmJiByZXNpemVkLmNsaWVudFdpZHRoIDwgcmVzaXplZC5zY3JvbGxXaWR0aCkge1xuICAgICAgY29uc3QgeyBjb2xDZmcsIHJlYyB9ID0gZ2V0Q2VsbChjZWxsSWR4LCBjb2x1bW5zLCBkYXRhLCBzZXR0aW5ncy5iYWNrZ3JvdW5kTW9kZSk7XG4gICAgICBjb25zdCBpc0xpbmsgPSBzZXR0aW5ncy5jb2x1bW5Gb3JtYXRzPy5bY29sQ2ZnLm5hbWVdPy5mbXQ/LmxpbmsgPT09IHRydWU7XG4gICAgICBjb25zdCBpc0h0bWwgPSAoc2V0dGluZ3MuY29sdW1uRm9ybWF0cz8uW2NvbENmZy5uYW1lXT8uZm10IGFzIFN0cmluZ0NvbHVtbkZvcm1hdCk/Lmh0bWwgPT09IHRydWU7XG4gICAgICBpZiAoIWlzTGluayAmJiAhaXNIdG1sKSB7XG4gICAgICAgIHNob3dUb29sdGlwKHJlc2l6ZWQsIHJlYy5yYXcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGhpZGVUb29sdGlwKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBzZXRDdXJyWShlLmNsaWVudFkpO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1cnJZICE9PSB1bmRlZmluZWQgJiYgY3VyclkgPD0gNSkge1xuICAgICAgaWYgKGhpZGVUaW1lb3V0LmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0LmN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgaGlkZVRpbWVvdXQuY3VycmVudCA9IG51bGw7XG4gICAgICBpZiAoIXJpYmJvbk1lbnVPcGVuKSB7XG4gICAgICAgIHNob3dUaW1lb3V0LmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoY3VyclkgIT09IHVuZGVmaW5lZCAmJiBjdXJyWSA8PSA1KSB7XG4gICAgICAgICAgICBzZXRSaWJib25WaXNpYmlsaXR5KHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFyaWJib25Ecm9wZG93bk9wZW4gJiYgcmliYm9uTWVudU9wZW4gJiYgY3VyclkgIT09IHVuZGVmaW5lZCAmJiBjdXJyWSA+PSAzNSAmJiAhaGlkZVRpbWVvdXQuY3VycmVudCkge1xuICAgICAgaGlkZVRpbWVvdXQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRSaWJib25WaXNpYmlsaXR5KGZhbHNlKTtcbiAgICAgICAgaGlkZVRpbWVvdXQuY3VycmVudCA9IG51bGw7XG4gICAgICB9LCAyMDAwKTtcbiAgICAgIGlmIChzaG93VGltZW91dC5jdXJyZW50KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzaG93VGltZW91dC5jdXJyZW50KTtcbiAgICAgICAgc2hvd1RpbWVvdXQuY3VycmVudCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCBbY3VyclldKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHJhbmdlRXhpc3RzID0gcmFuZ2VTZWxlY3QgJiYgcmFuZ2VTZWxlY3Quc3RhcnQ7XG4gICAgY29uc3Qgcm93UmFuZ2VFeGlzdHMgPSByb3dSYW5nZSAmJiByb3dSYW5nZS5zdGFydDtcbiAgICBjb25zdCBjZWxsSWR4ID0gKGUudGFyZ2V0IGFzIGFueSkuYXR0cmlidXRlcz8uY2VsbF9pZHg/Lm5vZGVWYWx1ZTtcbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgaWYgKHJhbmdlRXhpc3RzKSB7XG4gICAgICAgIGlmIChjZWxsSWR4ICYmIGNlbGxJc05vdE9uRWRnZShjZWxsSWR4KSkge1xuICAgICAgICAgIHVwZGF0ZVJhbmdlU3RhdGUoXG4gICAgICAgICAgICBidWlsZFJhbmdlU3RhdGUoe1xuICAgICAgICAgICAgICByYW5nZVNlbGVjdDogeyAuLi5yYW5nZVNlbGVjdCwgZW5kOiBjZWxsSWR4ID8/IG51bGwgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyb3dSYW5nZUV4aXN0cykge1xuICAgICAgICBpZiAoY2VsbElkeCAmJiBjZWxsSWR4LnN0YXJ0c1dpdGgoJzB8JykpIHtcbiAgICAgICAgICBjb25zdCBjb29yZHMgPSBjb252ZXJ0Q2VsbElkeFRvQ29vcmRzKGNlbGxJZHgpO1xuICAgICAgICAgIHVwZGF0ZVJhbmdlU3RhdGUoYnVpbGRSYW5nZVN0YXRlKHsgcm93UmFuZ2U6IHsgLi4ucm93UmFuZ2UsIGVuZDogY29vcmRzWzFdIH0gfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyYW5nZUV4aXN0cyB8fCByb3dSYW5nZUV4aXN0cykge1xuICAgICAgdXBkYXRlUmFuZ2VTdGF0ZShidWlsZFJhbmdlU3RhdGUoKSk7XG4gICAgfSBlbHNlIGlmIChjZWxsSWR4ICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCAmJiBjZWxsSXNOb3RPbkVkZ2UoY2VsbElkeCkpIHtcbiAgICAgIGhhbmRsZUxvbmdTdHJpbmdEaXNwbGF5KGUsIGNlbGxJZHgpO1xuICAgIH0gZWxzZSBpZiAoY2VsbElkeCkge1xuICAgICAgaGlkZVRvb2x0aXAoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tzID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBzZXRSaWJib25WaXNpYmlsaXR5KGZhbHNlKTtcbiAgICAvLyBjaGVjayBmb3IgcmFuZ2Ugc2VsZWN0ZWRcbiAgICBjb25zdCBjZWxsSWR4ID0gKGUudGFyZ2V0IGFzIGFueSkuYXR0cmlidXRlcz8uY2VsbF9pZHg/Lm5vZGVWYWx1ZTtcbiAgICBjb25zdCBjb29yZHMgPSBjb252ZXJ0Q2VsbElkeFRvQ29vcmRzKGNlbGxJZHgpO1xuXG4gICAgbGV0IGNvbHVtbl9kZWY6IENvbHVtbkRlZnx1bmRlZmluZWQgPSBndS5nZXRDb2woY29vcmRzWzBdLCBjb2x1bW5zLCBzZXR0aW5ncy5iYWNrZ3JvdW5kTW9kZSk7XG4gICAgbGFzdENsaWNrZWRDZWxsKGRhdGFJZCwgY29vcmRzWzFdLCBjb2x1bW5fZGVmPy5uYW1lKTtcbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgaWYgKGNlbGxJZHggJiYgY2VsbElzTm90T25FZGdlKGNlbGxJZHgpKSB7XG4gICAgICAgIGhhbmRsZVJhbmdlU2VsZWN0KGNlbGxJZHgpO1xuICAgICAgfSBlbHNlIGlmIChjZWxsSWR4ICYmIGNlbGxJZHguc3RhcnRzV2l0aCgnMHwnKSkge1xuICAgICAgICBoYW5kbGVSb3dTZWxlY3QoY2VsbElkeCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG4gICAgICBpZiAoY2VsbElkeD8uc3RhcnRzV2l0aCgnMHwnKSkge1xuICAgICAgICBoYW5kbGVDdHJsUm93U2VsZWN0KGNlbGxJZHgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2VsbElkeD8uc3RhcnRzV2l0aCgnMHwnKSkge1xuICAgICAgdXBkYXRlUmFuZ2VTdGF0ZShidWlsZFJhbmdlU3RhdGUoeyBzZWxlY3RlZFJvdzogY29vcmRzWzFdIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYWxsb3dDZWxsRWRpdHMpIHtcbiAgICAgIGlmIChjbGlja1RpbWVvdXQuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICBjbGlja1RpbWVvdXQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChjbGlja1RpbWVvdXQuY3VycmVudCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNsaWNrVGltZW91dC5jdXJyZW50KTtcbiAgICAgICAgICAgIGNsaWNrVGltZW91dC5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNlbGxJZHgpIHtcbiAgICAgICAgICBlZGl0Q2VsbChjZWxsSWR4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xpY2tUaW1lb3V0LmN1cnJlbnQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoY2xpY2tUaW1lb3V0LmN1cnJlbnQpO1xuICAgICAgICAgIGNsaWNrVGltZW91dC5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVSYW5nZVN0YXRlKGJ1aWxkUmFuZ2VTdGF0ZSgpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgaC0xMDAgdy0xMDAgZC1mbGV4ICR7bWVudVBpbm5lZCA/ICdpcy1waW5uZWQnIDogJyd9YH0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG1haW4tcGFuZWwtY29udGVudCR7c2lkZVBhbmVsT3BlbiA/ICcgaXMtaGFsZicgOiAnJ30gJHtzaWRlUGFuZWwgPz8gJyd9IGgtMTAwIGQtZmxleGB9XG4gICAgICAgIHN0eWxlPXtzaWRlUGFuZWxPcGVuID8gcGFuZWxVdGlscy5jYWxjV2lkdGgoc2lkZVBhbmVsISwgc2lkZVBhbmVsT2Zmc2V0KSA6IHt9fVxuICAgICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfVxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja3N9XG4gICAgICAgIHJlZj17Z3JpZFBhbmVsfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZW51VG9vbHRpcCAvPlxuICAgICAgPE1lYXN1cmVUZXh0IC8+XG4gICAgICA8U2lkZVBhbmVsIGdyaWRQYW5lbD17Z3JpZFBhbmVsLmN1cnJlbnR9IC8+XG4gICAgICB7ZHJhZ1Jlc2l6ZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtbGluZVwiIHN0eWxlPXt7IGxlZnQ6IGRyYWdSZXNpemUgKyAzIH19IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdtYWluJykoR3JpZEV2ZW50SGFuZGxlcik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMzI5ZDBhYzczNzIxY2I4NGI0OFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==