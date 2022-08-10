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
/******/ 	__webpack_require__.h = () => ("ee1ea8a634229de84c7d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MTQ5OWQ1NjVlYzZmMmNiNDMwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEZBQStCO0FBQy9CLGtIQUFpRTtBQUNqRSx1R0FBdUQ7QUFNdkQsdUhBQWlGO0FBQ2pGLG9IQUErRDtBQUUvRCx3R0FBc0Q7QUFDdEQsK0lBQXNFO0FBQ3RFLDhGQUErQztBQUUvQyxpR0FBbUM7QUFDbkMsc0lBQXlEO0FBR3pELG1CQUFPLENBQUMsc0VBQXVCLENBQUMsQ0FBQztBQUVqQyxpQ0FBaUM7QUFDakMsSUFBWSxjQUtYO0FBTEQsV0FBWSxjQUFjO0lBQ3hCLHFDQUFtQjtJQUNuQiw2QkFBVztJQUNYLDBDQUF3QjtJQUN4QixxQ0FBbUI7QUFDckIsQ0FBQyxFQUxXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBS3pCO0FBRUQsTUFBTSxTQUFTLEdBQUcsQ0FDaEIsTUFBYyxFQUNkLE9BQXVDLEVBQ3ZDLElBQXdCLEVBQ3hCLFNBQXlCLEVBQ2YsRUFBRTtJQUNaLE1BQU0sUUFBUSxHQUFHLDhCQUFjLEVBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsU0FBUyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDM0YsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNoQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDaEIsRUFBRSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtLQUM5QixDQUFDLENBQUM7SUFDSCxNQUFNLE9BQU8sR0FBRyw4QkFBYyxFQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLFNBQVMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQzFGLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO1FBQ2hCLElBQUksRUFBRSxN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L0IsT0FBTyxDQUNMO1FBTUUseUNBQWMsRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUM7O1lBQ21CLDJCQUFHLElBQUksRUFBQyxVQUFVLGVBQWE7Z0JBQ3BGLENBQ0wsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYscUJBQWUsbUNBQWUsRUFBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7OztVQ2hIakYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kdGFsZS8uL3N0YXRpYy9kdGFsZS9zaWRlL0dvQm9hcmQudHN4Iiwid2VicGFjazovL2R0YWxlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aWR0aCB9IGZyb20gJ2RvbS1oZWxwZXJzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiwgV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEJvdW5jZXJXcmFwcGVyIH0gZnJvbSAnLi4vLi4vQm91bmNlcldyYXBwZXInO1xuaW1wb3J0IEJ1dHRvblRvZ2dsZSBmcm9tICcuLi8uLi9CdXR0b25Ub2dnbGUnO1xuaW1wb3J0IEZpbHRlclNlbGVjdCBmcm9tICcuLi8uLi9wb3B1cHMvYW5hbHlzaXMvZmlsdGVycy9GaWx0ZXJTZWxlY3QnO1xuaW1wb3J0IENvbHVtblNlbGVjdCBmcm9tICcuLi8uLi9wb3B1cHMvY3JlYXRlL0NvbHVtblNlbGVjdCc7XG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBIaWRlU2lkZVBhbmVsQWN0aW9uIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9BcHBBY3Rpb25zJztcbmltcG9ydCB7IGJ1aWxkVVJMU3RyaW5nIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy91cmwtdXRpbHMnO1xuaW1wb3J0IHsgQXBwU3RhdGUsIEJhc2VPcHRpb24gfSBmcm9tICcuLi8uLi9yZWR1eC9zdGF0ZS9BcHBTdGF0ZSc7XG5pbXBvcnQgeyBSZW1vdmFibGVFcnJvciB9IGZyb20gJy4uLy4uL1JlbW92YWJsZUVycm9yJztcbmltcG9ydCAqIGFzIER0eXBlc1JlcG9zaXRvcnkgZnJvbSAnLi4vLi4vcmVwb3NpdG9yeS9EdHlwZXNSZXBvc2l0b3J5JztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi9zdHJpbmdVdGlscyc7XG5pbXBvcnQgeyBDb2x1bW5EZWYgfSBmcm9tICcuLi9EYXRhVmlld2VyU3RhdGUnO1xuaW1wb3J0ICogYXMgZ3UgZnJvbSAnLi4vZ3JpZFV0aWxzJztcbmltcG9ydCAqIGFzIG1lbnVGdW5jcyBmcm9tICcuLi9tZW51L2RhdGFWaWV3ZXJNZW51VXRpbHMnO1xuaW1wb3J0IHtIZWxtZXR9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbnJlcXVpcmUoJy4vTWlzc2luZ05vQ2hhcnRzLmNzcycpO1xuXG4vKiogRGlmZmVyZW50IE1pc3NpbmdObyBjaGFydHMgKi9cbmV4cG9ydCBlbnVtIE1pc3NpbmdOb0NoYXJ0IHtcbiAgSEVBVE1BUCA9ICdoZWF0bWFwJyxcbiAgQkFSID0gJ2JhcicsXG4gIERFTkRPR1JBTSA9ICdkZW5kcm9ncmFtJyxcbiAgTUFUUklYID0gJ21hdHJlZWV4Jyxcbn1cblxuY29uc3QgYnVpbGRVcmxzID0gKFxuICBkYXRhSWQ6IHN0cmluZyxcbiAgZGF0ZUNvbDogQmFzZU9wdGlvbjxzdHJpbmc+IHwgdW5kZWZpbmVkLFxuICBmcmVxOiBCYXNlT3B0aW9uPHN0cmluZz4sXG4gIGNoYXJ0VHlwZTogTWlzc2luZ05vQ2hhcnQsXG4pOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGltYWdlVXJsID0gYnVpbGRVUkxTdHJpbmcobWVudUZ1bmNzLmZ1bGxQYXRoKGAvZHRhbGUvbWlzc2luZ25vLyR7Y2hhcnRUeXBlfWAsIGRhdGFJZCksIHtcbiAgICBkYXRlX2luZGV4OiBkYXRlQ29sPy52YWx1ZSA/PyAnJyxcbiAgICBmcmVxOiBmcmVxLnZhbHVlLFxuICAgIGlkOiBgJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gLFxuICB9KTtcbiAgY29uc3QgZmlsZVVybCA9IGJ1aWxkVVJMU3RyaW5nKG1lbnVGdW5jcy5mdWxsUGF0aChgL2R0YWxlL21pc3Npbmduby8ke2NoYXJ0VHlwZX1gLCBkYXRhSWQpLCB7XG4gICAgZGF0ZV9pbmRleDogZGF0ZUNvbD8udmFsdWUgPz8gJycsXG4gICAgZnJlcTogZnJlcS52YWx1ZSxcbiAgICBmaWxlOiAndHJ1ZScsXG4gICAgaWQ6IGAke25ldyBEYXRlKCkuZ2V0VGltZSgpfWAsXG4gIH0pO1xuICByZXR1cm4gW2ltYWdlVXJsLCBmaWxlVXJsXTtcbn07XG5cbmNvbnN0IEZSRVFTID0gW1xuICAuLi5bJ0InLCAnQycsICdEJywgJ1cnLCAnTScsICdTTScsICdCTScsICdDQk0nLCAnTVMnLCAnU01TJywgJ0JNUycsICdDQk1TJywgJ1EnLCAnQlEnLCAnUVMnLCAnQlFTJywgJ1knLCAnQlknXSxcbiAgLi4uWydZUycsICdCWVMnLCAnQkgnLCAnSCcsICdUJywgJ1MnLCAnTCcsICdVJywgJ04nXSxcbl07XG5cbmNvbnN0IEdvQm9hcmQ6IFJlYWN0LkZDPFdpdGhUcmFuc2xhdGlvbj4gPSAoeyB0IH0pID0+IHtcbiAgY29uc3QgZGF0YUlkID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZGF0YUlkKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBoaWRlU2lkZVBhbmVsID0gKCk6IEhpZGVTaWRlUGFuZWxBY3Rpb24gPT4gZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlLkhJREVfU0lERV9QQU5FTCB9KTtcblxuICBjb25zdCBbY2hhcnRPcHRpb25zLCBmcmVxT3B0aW9uc10gPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIE9iamVjdC52YWx1ZXMoTWlzc2luZ05vQ2hhcnQpLm1hcCgodmFsdWUpID0+ICh7IHZhbHVlLCBsYWJlbDogdChgbWlzc2luZzoke2NhcGl0YWxpemUodmFsdWUpfWApIH0pKSxcbiAgICAgIEZSRVFTLm1hcCgoZikgPT4gKHsgbGFiZWw6IGAke2Z9IC0gJHt0KGYsIHsgbnM6ICdtaXNzaW5nJyB9KX1gLCB2YWx1ZTogZiB9KSkgYXMgQXJyYXk8QmFzZU9wdGlvbjxzdHJpbmc+PixcbiAgICBdLFxuICAgIFt0XSxcbiAgKTtcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlPEpTWC5FbGVtZW50PigpO1xuICBjb25zdCBbY2hhcnRUeXBlLCBzZXRDaGFydFR5cGVdID0gUmVhY3QudXNlU3RhdGUoTWlzc2luZ05vQ2hhcnQuSEVBVE1BUCk7XG4gIGNvbnN0IFtmcmVxLCBzZXRGcmVxXSA9IFJlYWN0LnVzZVN0YXRlKGZyZXFPcHRpb25zLmZpbmQoKGYpID0+IGYudmFsdWUgPT09ICdCUScpISk7XG4gIGNvbnN0IFtkYXRlQ29sLCBzZXREYXRlQ29sXSA9IFJlYWN0LnVzZVN0YXRlPEJhc2VPcHRpb248c3RyaW5nPj4oKTtcbiAgY29uc3QgW2RhdGVDb2xzLCBzZXREYXRlQ29sc10gPSBSZWFjdC51c2VTdGF0ZTxDb2x1bW5EZWZbXT4oW10pO1xuICBjb25zdCBbaW1hZ2VMb2FkaW5nLCBzZXRJbWFnZUxvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbZmlsZVVybCwgc2V0RmlsZVVybF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBEdHlwZXNSZXBvc2l0b3J5LmxvYWREdHlwZXMoZGF0YUlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlPy5lcnJvcikge1xuICAgICAgICBzZXRFcnJvcig8UmVtb3ZhYmxlRXJyb3Igey4uLnJlc3BvbnNlfSAvPik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZUNvbHMgPSByZXNwb25zZS5kdHlwZXMuZmlsdGVyKChjb2wpID0+IGd1LmlzRGF0ZUNvbChjb2wuZHR5cGUpKTtcbiAgICAgICAgc2V0RGF0ZUNvbHMoY3VycmVudERhdGVDb2xzKTtcbiAgICAgICAgc2V0RGF0ZUNvbChjdXJyZW50RGF0ZUNvbHMubGVuZ3RoID8geyB2YWx1ZTogY3VycmVudERhdGVDb2xzWzBdLm5hbWUgfSA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVybHMgPSBidWlsZFVybHMoZGF0YUlkLCBkYXRlQ29sLCBmcmVxLCBjaGFydFR5cGUpO1xuICAgIHNldEltYWdlTG9hZGluZyh0cnVlKTtcbiAgICBzZXRJbWFnZVVybCh1cmxzWzBdKTtcbiAgICBzZXRGaWxlVXJsKHVybHNbMV0pO1xuICB9LCBbZGF0ZUNvbCwgZnJlcSwgY2hhcnRUeXBlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxIZWxtZXQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2R0YWxlL3N0YXRpYy93Z28vd2dvLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9kdGFsZS9zdGF0aWMvd2dvL3dnby5wbGF5ZXIubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2R0YWxlL3N0YXRpYy93Z28vd2dvLnBsYXllci5jc3NcIiAvPlxuICAgICAgPC9IZWxtZXQ+ICovfVxuICAgICAgPGRpdiBkYXRhLXdnbz1cIlwiIHN0eWxlPXt7d2lkdGg6ICc3MDBweCd9fT5cbiAgICAgICAgU29ycnksIHlvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgV0dvLmpzLiBEb3dubG9hZCBTR0YgPGEgaHJlZj1cImdhbWUuc2dmXCI+ZGlyZWN0bHk8L2E+LlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydtZW51JywgJ21pc3NpbmcnLCAnc2lkZScsICdidWlsZGVycyddKShHb0JvYXJkKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVlMWVhOGE2MzQyMjlkZTg0YzdkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9