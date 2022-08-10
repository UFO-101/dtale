"use strict";
self["webpackHotUpdatedtale"]("main",{

/***/ "./static/dtale/side/GoBoard.tsx":
/*!***************************************!*\
  !*** ./static/dtale/side/GoBoard.tsx ***!
  \***************************************/
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
exports.MissingNoChart = void 0;
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const AppActions_1 = __webpack_require__(/*! ../../redux/actions/AppActions */ "./static/redux/actions/AppActions.ts");
const url_utils_1 = __webpack_require__(/*! ../../redux/actions/url-utils */ "./static/redux/actions/url-utils.ts");
const RemovableError_1 = __webpack_require__(/*! ../../RemovableError */ "./static/RemovableError.tsx");
const DtypesRepository = __importStar(__webpack_require__(/*! ../../repository/DtypesRepository */ "./static/repository/DtypesRepository.ts"));
const stringUtils_1 = __webpack_require__(/*! ../../stringUtils */ "./static/stringUtils.ts");
const gu = __importStar(__webpack_require__(/*! ../gridUtils */ "./static/dtale/gridUtils.tsx"));
const menuFuncs = __importStar(__webpack_require__(/*! ../menu/dataViewerMenuUtils */ "./static/dtale/menu/dataViewerMenuUtils.tsx"));
__webpack_require__(/*! ./MissingNoCharts.css */ "./static/dtale/side/MissingNoCharts.css");
/** Different MissingNo charts */
var MissingNoChart;
(function (MissingNoChart) {
    MissingNoChart["HEATMAP"] = "heatmap";
    MissingNoChart["BAR"] = "bar";
    MissingNoChart["DENDOGRAM"] = "dendrogram";
    MissingNoChart["MATRIX"] = "matreeex";
})(MissingNoChart = exports.MissingNoChart || (exports.MissingNoChart = {}));
const buildUrls = (dataId, dateCol, freq, chartType) => {
    const imageUrl = (0, url_utils_1.buildURLString)(menuFuncs.fullPath(`/dtale/missingno/${chartType}`, dataId), {
        date_index: dateCol?.value ?? '',
        freq: freq.value,
        id: `${new Date().getTime()}`,
    });
    const fileUrl = (0, url_utils_1.buildURLString)(menuFuncs.fullPath(`/dtale/missingno/${chartType}`, dataId), {
        date_index: dateCol?.value ?? '',
        freq: freq.value,
        file: 'true',
        id: `${new Date().getTime()}`,
    });
    return [imageUrl, fileUrl];
};
const FREQS = [
    ...['B', 'C', 'D', 'W', 'M', 'SM', 'BM', 'CBM', 'MS', 'SMS', 'BMS', 'CBMS', 'Q', 'BQ', 'QS', 'BQS', 'Y', 'BY'],
    ...['YS', 'BYS', 'BH', 'H', 'T', 'S', 'L', 'U', 'N'],
];
const GoBoard = ({ t }) => {
    const dataId = (0, react_redux_1.useSelector)((state) => state.dataId);
    const dispatch = (0, react_redux_1.useDispatch)();
    const hideSidePanel = () => dispatch({ type: AppActions_1.ActionType.HIDE_SIDE_PANEL });
    const [chartOptions, freqOptions] = React.useMemo(() => [
        Object.values(MissingNoChart).map((value) => ({ value, label: t(`missing:${(0, stringUtils_1.capitalize)(value)}`) })),
        FREQS.map((f) => ({ label: `${f} - ${t(f, { ns: 'missing' })}`, value: f })),
    ], [t]);
    const [error, setError] = React.useState();
    const [chartType, setChartType] = React.useState(MissingNoChart.HEATMAP);
    const [freq, setFreq] = React.useState(freqOptions.find((f) => f.value === 'BQ'));
    const [dateCol, setDateCol] = React.useState();
    const [dateCols, setDateCols] = React.useState([]);
    const [imageLoading, setImageLoading] = React.useState(true);
    const [imageUrl, setImageUrl] = React.useState();
    const [fileUrl, setFileUrl] = React.useState();
    React.useEffect(() => {
        DtypesRepository.loadDtypes(dataId).then((response) => {
            if (response?.error) {
                setError(React.createElement(RemovableError_1.RemovableError, { ...response }));
                return;
            }
            if (response) {
                const currentDateCols = response.dtypes.filter((col) => gu.isDateCol(col.dtype));
                setDateCols(currentDateCols);
                setDateCol(currentDateCols.length ? { value: currentDateCols[0].name } : undefined);
            }
        });
    }, []);
    React.useEffect(() => {
        const urls = buildUrls(dataId, dateCol, freq, chartType);
        setImageLoading(true);
        setImageUrl(urls[0]);
        setFileUrl(urls[1]);
    }, [dateCol, freq, chartType]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { "data-wgo": "", style: { width: '700px' } },
            "Sorry, your browser doesn't support WGo.js. Download SGF ",
            React.createElement("a", { href: "game.sgf" }, "directly"),
            ".")));
};
exports["default"] = (0, react_i18next_1.withTranslation)(['menu', 'missing', 'side', 'builders'])(GoBoard);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("15794ddfe580a4216ca2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZjE5ODk4MTg3OTg5ZTI0Y2FhZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEZBQStCO0FBQy9CLGtIQUFpRTtBQUNqRSx1R0FBdUQ7QUFNdkQsdUhBQWlGO0FBQ2pGLG9IQUErRDtBQUUvRCx3R0FBc0Q7QUFDdEQsK0lBQXNFO0FBQ3RFLDhGQUErQztBQUUvQyxpR0FBbUM7QUFDbkMsc0lBQXlEO0FBRXpELG1CQUFPLENBQUMsc0VBQXVCLENBQUMsQ0FBQztBQUVqQyxpQ0FBaUM7QUFDakMsSUFBWSxjQUtYO0FBTEQsV0FBWSxjQUFjO0lBQ3hCLHFDQUFtQjtJQUNuQiw2QkFBVztJQUNYLDBDQUF3QjtJQUN4QixxQ0FBbUI7QUFDckIsQ0FBQyxFQUxXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBS3pCO0FBRUQsTUFBTSxTQUFTLEdBQUcsQ0FDaEIsTUFBYyxFQUNkLE9BQXVDLEVBQ3ZDLElBQXdCLEVBQ3hCLFNBQXlCLEVBQ2YsRUFBRTtJQUNaLE1BQU0sUUFBUSxHQUFHLDhCQUFjLEVBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsU0FBUyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDM0YsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNoQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDaEIsRUFBRSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtLQUM5QixDQUFDLENBQUM7SUFDSCxNQUFNLE9BQU8sR0FBRyw4QkFBYyxFQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLFNBQVMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQzFGLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO1FBQ2hCLElBQUksRUFBRSxN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L0IsT0FBTyxDQUNMO1FBQ0UseUNBQWMsRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUM7O1lBQ2lCLDJCQUFHLElBQUksRUFBQyxVQUFVLGVBQWE7Z0JBQ2xGLENBQ0wsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYscUJBQWUsbUNBQWUsRUFBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7OztVQzFHakYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kdGFsZS8uL3N0YXRpYy9kdGFsZS9zaWRlL0dvQm9hcmQudHN4Iiwid2VicGFjazovL2R0YWxlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aWR0aCB9IGZyb20gJ2RvbS1oZWxwZXJzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiwgV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEJvdW5jZXJXcmFwcGVyIH0gZnJvbSAnLi4vLi4vQm91bmNlcldyYXBwZXInO1xuaW1wb3J0IEJ1dHRvblRvZ2dsZSBmcm9tICcuLi8uLi9CdXR0b25Ub2dnbGUnO1xuaW1wb3J0IEZpbHRlclNlbGVjdCBmcm9tICcuLi8uLi9wb3B1cHMvYW5hbHlzaXMvZmlsdGVycy9GaWx0ZXJTZWxlY3QnO1xuaW1wb3J0IENvbHVtblNlbGVjdCBmcm9tICcuLi8uLi9wb3B1cHMvY3JlYXRlL0NvbHVtblNlbGVjdCc7XG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBIaWRlU2lkZVBhbmVsQWN0aW9uIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9BcHBBY3Rpb25zJztcbmltcG9ydCB7IGJ1aWxkVVJMU3RyaW5nIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy91cmwtdXRpbHMnO1xuaW1wb3J0IHsgQXBwU3RhdGUsIEJhc2VPcHRpb24gfSBmcm9tICcuLi8uLi9yZWR1eC9zdGF0ZS9BcHBTdGF0ZSc7XG5pbXBvcnQgeyBSZW1vdmFibGVFcnJvciB9IGZyb20gJy4uLy4uL1JlbW92YWJsZUVycm9yJztcbmltcG9ydCAqIGFzIER0eXBlc1JlcG9zaXRvcnkgZnJvbSAnLi4vLi4vcmVwb3NpdG9yeS9EdHlwZXNSZXBvc2l0b3J5JztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi9zdHJpbmdVdGlscyc7XG5pbXBvcnQgeyBDb2x1bW5EZWYgfSBmcm9tICcuLi9EYXRhVmlld2VyU3RhdGUnO1xuaW1wb3J0ICogYXMgZ3UgZnJvbSAnLi4vZ3JpZFV0aWxzJztcbmltcG9ydCAqIGFzIG1lbnVGdW5jcyBmcm9tICcuLi9tZW51L2RhdGFWaWV3ZXJNZW51VXRpbHMnO1xuXG5yZXF1aXJlKCcuL01pc3NpbmdOb0NoYXJ0cy5jc3MnKTtcblxuLyoqIERpZmZlcmVudCBNaXNzaW5nTm8gY2hhcnRzICovXG5leHBvcnQgZW51bSBNaXNzaW5nTm9DaGFydCB7XG4gIEhFQVRNQVAgPSAnaGVhdG1hcCcsXG4gIEJBUiA9ICdiYXInLFxuICBERU5ET0dSQU0gPSAnZGVuZHJvZ3JhbScsXG4gIE1BVFJJWCA9ICdtYXRyZWVleCcsXG59XG5cbmNvbnN0IGJ1aWxkVXJscyA9IChcbiAgZGF0YUlkOiBzdHJpbmcsXG4gIGRhdGVDb2w6IEJhc2VPcHRpb248c3RyaW5nPiB8IHVuZGVmaW5lZCxcbiAgZnJlcTogQmFzZU9wdGlvbjxzdHJpbmc+LFxuICBjaGFydFR5cGU6IE1pc3NpbmdOb0NoYXJ0LFxuKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBpbWFnZVVybCA9IGJ1aWxkVVJMU3RyaW5nKG1lbnVGdW5jcy5mdWxsUGF0aChgL2R0YWxlL21pc3Npbmduby8ke2NoYXJ0VHlwZX1gLCBkYXRhSWQpLCB7XG4gICAgZGF0ZV9pbmRleDogZGF0ZUNvbD8udmFsdWUgPz8gJycsXG4gICAgZnJlcTogZnJlcS52YWx1ZSxcbiAgICBpZDogYCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YCxcbiAgfSk7XG4gIGNvbnN0IGZpbGVVcmwgPSBidWlsZFVSTFN0cmluZyhtZW51RnVuY3MuZnVsbFBhdGgoYC9kdGFsZS9taXNzaW5nbm8vJHtjaGFydFR5cGV9YCwgZGF0YUlkKSwge1xuICAgIGRhdGVfaW5kZXg6IGRhdGVDb2w/LnZhbHVlID8/ICcnLFxuICAgIGZyZXE6IGZyZXEudmFsdWUsXG4gICAgZmlsZTogJ3RydWUnLFxuICAgIGlkOiBgJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gLFxuICB9KTtcbiAgcmV0dXJuIFtpbWFnZVVybCwgZmlsZVVybF07XG59O1xuXG5jb25zdCBGUkVRUyA9IFtcbiAgLi4uWydCJywgJ0MnLCAnRCcsICdXJywgJ00nLCAnU00nLCAnQk0nLCAnQ0JNJywgJ01TJywgJ1NNUycsICdCTVMnLCAnQ0JNUycsICdRJywgJ0JRJywgJ1FTJywgJ0JRUycsICdZJywgJ0JZJ10sXG4gIC4uLlsnWVMnLCAnQllTJywgJ0JIJywgJ0gnLCAnVCcsICdTJywgJ0wnLCAnVScsICdOJ10sXG5dO1xuXG5jb25zdCBHb0JvYXJkOiBSZWFjdC5GQzxXaXRoVHJhbnNsYXRpb24+ID0gKHsgdCB9KSA9PiB7XG4gIGNvbnN0IGRhdGFJZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmRhdGFJZCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaGlkZVNpZGVQYW5lbCA9ICgpOiBIaWRlU2lkZVBhbmVsQWN0aW9uID0+IGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZS5ISURFX1NJREVfUEFORUwgfSk7XG5cbiAgY29uc3QgW2NoYXJ0T3B0aW9ucywgZnJlcU9wdGlvbnNdID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICBPYmplY3QudmFsdWVzKE1pc3NpbmdOb0NoYXJ0KS5tYXAoKHZhbHVlKSA9PiAoeyB2YWx1ZSwgbGFiZWw6IHQoYG1pc3Npbmc6JHtjYXBpdGFsaXplKHZhbHVlKX1gKSB9KSksXG4gICAgICBGUkVRUy5tYXAoKGYpID0+ICh7IGxhYmVsOiBgJHtmfSAtICR7dChmLCB7IG5zOiAnbWlzc2luZycgfSl9YCwgdmFsdWU6IGYgfSkpIGFzIEFycmF5PEJhc2VPcHRpb248c3RyaW5nPj4sXG4gICAgXSxcbiAgICBbdF0sXG4gICk7XG5cbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxKU1guRWxlbWVudD4oKTtcbiAgY29uc3QgW2NoYXJ0VHlwZSwgc2V0Q2hhcnRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlKE1pc3NpbmdOb0NoYXJ0LkhFQVRNQVApO1xuICBjb25zdCBbZnJlcSwgc2V0RnJlcV0gPSBSZWFjdC51c2VTdGF0ZShmcmVxT3B0aW9ucy5maW5kKChmKSA9PiBmLnZhbHVlID09PSAnQlEnKSEpO1xuICBjb25zdCBbZGF0ZUNvbCwgc2V0RGF0ZUNvbF0gPSBSZWFjdC51c2VTdGF0ZTxCYXNlT3B0aW9uPHN0cmluZz4+KCk7XG4gIGNvbnN0IFtkYXRlQ29scywgc2V0RGF0ZUNvbHNdID0gUmVhY3QudXNlU3RhdGU8Q29sdW1uRGVmW10+KFtdKTtcbiAgY29uc3QgW2ltYWdlTG9hZGluZywgc2V0SW1hZ2VMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2ZpbGVVcmwsIHNldEZpbGVVcmxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgRHR5cGVzUmVwb3NpdG9yeS5sb2FkRHR5cGVzKGRhdGFJZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZT8uZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoPFJlbW92YWJsZUVycm9yIHsuLi5yZXNwb25zZX0gLz4pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGVDb2xzID0gcmVzcG9uc2UuZHR5cGVzLmZpbHRlcigoY29sKSA9PiBndS5pc0RhdGVDb2woY29sLmR0eXBlKSk7XG4gICAgICAgIHNldERhdGVDb2xzKGN1cnJlbnREYXRlQ29scyk7XG4gICAgICAgIHNldERhdGVDb2woY3VycmVudERhdGVDb2xzLmxlbmd0aCA/IHsgdmFsdWU6IGN1cnJlbnREYXRlQ29sc1swXS5uYW1lIH0gOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cmxzID0gYnVpbGRVcmxzKGRhdGFJZCwgZGF0ZUNvbCwgZnJlcSwgY2hhcnRUeXBlKTtcbiAgICBzZXRJbWFnZUxvYWRpbmcodHJ1ZSk7XG4gICAgc2V0SW1hZ2VVcmwodXJsc1swXSk7XG4gICAgc2V0RmlsZVVybCh1cmxzWzFdKTtcbiAgfSwgW2RhdGVDb2wsIGZyZXEsIGNoYXJ0VHlwZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgZGF0YS13Z289XCJcIiBzdHlsZT17e3dpZHRoOiAnNzAwcHgnfX0+XG4gICAgICBTb3JyeSwgeW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBXR28uanMuIERvd25sb2FkIFNHRiA8YSBocmVmPVwiZ2FtZS5zZ2ZcIj5kaXJlY3RseTwvYT4uXG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ21lbnUnLCAnbWlzc2luZycsICdzaWRlJywgJ2J1aWxkZXJzJ10pKEdvQm9hcmQpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTU3OTRkZGZlNTgwYTQyMTZjYTJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=