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
    React.useEffect(() => {
        console.log('loading go board');
        const wgo_min_js = document.createElement("script");
        const wgo_player_min_js = document.createElement("script");
        wgo_min_js.src = "/dtale/static/wgo/wgo.min.js";
        wgo_player_min_js.src = "/dtale/static/wgo/wgo.player.min.js";
        // wgo_min_js.async = true;
        // wgo_player_min_js.async = true;
        // wgo_min_js.defer = true;
        // wgo_player_min_js.defer = true;
        document.head.append(wgo_min_js);
        document.head.append(wgo_player_min_js);
        // cleanup on unmount
        return () => {
            console.log('unmounting go board');
            wgo_min_js.remove();
            wgo_player_min_js.remove();
        };
    }, []);
    return (React.createElement("div", { "data-wgo": "", style: { width: '700px' } },
        "Sorry, your browser doesn't support WGo.js. Download SGF ",
        React.createElement("a", { href: "game.sgf" }, "directly"),
        "."));
};
exports["default"] = (0, react_i18next_1.withTranslation)(['menu', 'missing', 'side', 'builders'])(GoBoard);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c38e1b58199d68b11c45")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYjJiZGEyOGExNDk3NThhNzkwMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEZBQStCO0FBQy9CLGtIQUFpRTtBQUNqRSx1R0FBdUQ7QUFNdkQsdUhBQWlGO0FBQ2pGLG9IQUErRDtBQUUvRCx3R0FBc0Q7QUFDdEQsK0lBQXNFO0FBQ3RFLDhGQUErQztBQUUvQyxpR0FBbUM7QUFDbkMsc0lBQXlEO0FBRXpELG1CQUFPLENBQUMsc0VBQXVCLENBQUMsQ0FBQztBQUVqQyxpQ0FBaUM7QUFDakMsSUFBWSxjQUtYO0FBTEQsV0FBWSxjQUFjO0lBQ3hCLHFDQUFtQjtJQUNuQiw2QkFBVztJQUNYLDBDQUF3QjtJQUN4QixxQ0FBbUI7QUFDckIsQ0FBQyxFQUxXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBS3pCO0FBRUQsTUFBTSxTQUFTLEdBQUcsQ0FDaEIsTUFBYyxFQUNkLE9BQXVDLEVBQ3ZDLElBQXdCLEVBQ3hCLFNBQXlCLEVBQ2YsRUFBRTtJQUNaLE1BQU0sUUFBUSxHQUFHLDhCQUFjLEVBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsU0FBUyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDM0YsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNoQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDaEIsRUFBRSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtLQUM5QixDQUFDLENBQUM7SUFDSCxNQUFNLE9BQU8sR0FBRyw4QkFBYyxFQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLFNBQVMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQzFGLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO1FBQ2hCLElBQUksRUFBRSxN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L0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxVQUFVLENBQUMsR0FBRyxHQUFHLDhCQUE4QixDQUFDO1FBQ2hELGlCQUFpQixDQUFDLEdBQUcsR0FBRyxxQ0FBcUMsQ0FBQztRQUM5RCwyQkFBMkI7UUFDM0Isa0NBQWtDO1FBQ2xDLDJCQUEyQjtRQUMzQixrQ0FBa0M7UUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxxQkFBcUI7UUFDckIsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQixpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLE9BQU8sQ0FDTCx5Q0FBYyxFQUFFLEVBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQzs7UUFDbUIsMkJBQUcsSUFBSSxFQUFDLFVBQVUsZUFBYTtZQUNwRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixxQkFBZSxtQ0FBZSxFQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7O1VDNUhqRiIsInNvdXJjZXMiOlsid2VicGFjazovL2R0YWxlLy4vc3RhdGljL2R0YWxlL3NpZGUvR29Cb2FyZC50c3giLCJ3ZWJwYWNrOi8vZHRhbGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpZHRoIH0gZnJvbSAnZG9tLWhlbHBlcnMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uLCBXaXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgQm91bmNlcldyYXBwZXIgfSBmcm9tICcuLi8uLi9Cb3VuY2VyV3JhcHBlcic7XG5pbXBvcnQgQnV0dG9uVG9nZ2xlIGZyb20gJy4uLy4uL0J1dHRvblRvZ2dsZSc7XG5pbXBvcnQgRmlsdGVyU2VsZWN0IGZyb20gJy4uLy4uL3BvcHVwcy9hbmFseXNpcy9maWx0ZXJzL0ZpbHRlclNlbGVjdCc7XG5pbXBvcnQgQ29sdW1uU2VsZWN0IGZyb20gJy4uLy4uL3BvcHVwcy9jcmVhdGUvQ29sdW1uU2VsZWN0JztcbmltcG9ydCB7IEFjdGlvblR5cGUsIEhpZGVTaWRlUGFuZWxBY3Rpb24gfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuaW1wb3J0IHsgYnVpbGRVUkxTdHJpbmcgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3VybC11dGlscyc7XG5pbXBvcnQgeyBBcHBTdGF0ZSwgQmFzZU9wdGlvbiB9IGZyb20gJy4uLy4uL3JlZHV4L3N0YXRlL0FwcFN0YXRlJztcbmltcG9ydCB7IFJlbW92YWJsZUVycm9yIH0gZnJvbSAnLi4vLi4vUmVtb3ZhYmxlRXJyb3InO1xuaW1wb3J0ICogYXMgRHR5cGVzUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9yZXBvc2l0b3J5L0R0eXBlc1JlcG9zaXRvcnknO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3N0cmluZ1V0aWxzJztcbmltcG9ydCB7IENvbHVtbkRlZiB9IGZyb20gJy4uL0RhdGFWaWV3ZXJTdGF0ZSc7XG5pbXBvcnQgKiBhcyBndSBmcm9tICcuLi9ncmlkVXRpbHMnO1xuaW1wb3J0ICogYXMgbWVudUZ1bmNzIGZyb20gJy4uL21lbnUvZGF0YVZpZXdlck1lbnVVdGlscyc7XG5cbnJlcXVpcmUoJy4vTWlzc2luZ05vQ2hhcnRzLmNzcycpO1xuXG4vKiogRGlmZmVyZW50IE1pc3NpbmdObyBjaGFydHMgKi9cbmV4cG9ydCBlbnVtIE1pc3NpbmdOb0NoYXJ0IHtcbiAgSEVBVE1BUCA9ICdoZWF0bWFwJyxcbiAgQkFSID0gJ2JhcicsXG4gIERFTkRPR1JBTSA9ICdkZW5kcm9ncmFtJyxcbiAgTUFUUklYID0gJ21hdHJlZWV4Jyxcbn1cblxuY29uc3QgYnVpbGRVcmxzID0gKFxuICBkYXRhSWQ6IHN0cmluZyxcbiAgZGF0ZUNvbDogQmFzZU9wdGlvbjxzdHJpbmc+IHwgdW5kZWZpbmVkLFxuICBmcmVxOiBCYXNlT3B0aW9uPHN0cmluZz4sXG4gIGNoYXJ0VHlwZTogTWlzc2luZ05vQ2hhcnQsXG4pOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGltYWdlVXJsID0gYnVpbGRVUkxTdHJpbmcobWVudUZ1bmNzLmZ1bGxQYXRoKGAvZHRhbGUvbWlzc2luZ25vLyR7Y2hhcnRUeXBlfWAsIGRhdGFJZCksIHtcbiAgICBkYXRlX2luZGV4OiBkYXRlQ29sPy52YWx1ZSA/PyAnJyxcbiAgICBmcmVxOiBmcmVxLnZhbHVlLFxuICAgIGlkOiBgJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gLFxuICB9KTtcbiAgY29uc3QgZmlsZVVybCA9IGJ1aWxkVVJMU3RyaW5nKG1lbnVGdW5jcy5mdWxsUGF0aChgL2R0YWxlL21pc3Npbmduby8ke2NoYXJ0VHlwZX1gLCBkYXRhSWQpLCB7XG4gICAgZGF0ZV9pbmRleDogZGF0ZUNvbD8udmFsdWUgPz8gJycsXG4gICAgZnJlcTogZnJlcS52YWx1ZSxcbiAgICBmaWxlOiAndHJ1ZScsXG4gICAgaWQ6IGAke25ldyBEYXRlKCkuZ2V0VGltZSgpfWAsXG4gIH0pO1xuICByZXR1cm4gW2ltYWdlVXJsLCBmaWxlVXJsXTtcbn07XG5cbmNvbnN0IEZSRVFTID0gW1xuICAuLi5bJ0InLCAnQycsICdEJywgJ1cnLCAnTScsICdTTScsICdCTScsICdDQk0nLCAnTVMnLCAnU01TJywgJ0JNUycsICdDQk1TJywgJ1EnLCAnQlEnLCAnUVMnLCAnQlFTJywgJ1knLCAnQlknXSxcbiAgLi4uWydZUycsICdCWVMnLCAnQkgnLCAnSCcsICdUJywgJ1MnLCAnTCcsICdVJywgJ04nXSxcbl07XG5cbmNvbnN0IEdvQm9hcmQ6IFJlYWN0LkZDPFdpdGhUcmFuc2xhdGlvbj4gPSAoeyB0IH0pID0+IHtcbiAgY29uc3QgZGF0YUlkID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuZGF0YUlkKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBoaWRlU2lkZVBhbmVsID0gKCk6IEhpZGVTaWRlUGFuZWxBY3Rpb24gPT4gZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlLkhJREVfU0lERV9QQU5FTCB9KTtcblxuICBjb25zdCBbY2hhcnRPcHRpb25zLCBmcmVxT3B0aW9uc10gPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIE9iamVjdC52YWx1ZXMoTWlzc2luZ05vQ2hhcnQpLm1hcCgodmFsdWUpID0+ICh7IHZhbHVlLCBsYWJlbDogdChgbWlzc2luZzoke2NhcGl0YWxpemUodmFsdWUpfWApIH0pKSxcbiAgICAgIEZSRVFTLm1hcCgoZikgPT4gKHsgbGFiZWw6IGAke2Z9IC0gJHt0KGYsIHsgbnM6ICdtaXNzaW5nJyB9KX1gLCB2YWx1ZTogZiB9KSkgYXMgQXJyYXk8QmFzZU9wdGlvbjxzdHJpbmc+PixcbiAgICBdLFxuICAgIFt0XSxcbiAgKTtcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlPEpTWC5FbGVtZW50PigpO1xuICBjb25zdCBbY2hhcnRUeXBlLCBzZXRDaGFydFR5cGVdID0gUmVhY3QudXNlU3RhdGUoTWlzc2luZ05vQ2hhcnQuSEVBVE1BUCk7XG4gIGNvbnN0IFtmcmVxLCBzZXRGcmVxXSA9IFJlYWN0LnVzZVN0YXRlKGZyZXFPcHRpb25zLmZpbmQoKGYpID0+IGYudmFsdWUgPT09ICdCUScpISk7XG4gIGNvbnN0IFtkYXRlQ29sLCBzZXREYXRlQ29sXSA9IFJlYWN0LnVzZVN0YXRlPEJhc2VPcHRpb248c3RyaW5nPj4oKTtcbiAgY29uc3QgW2RhdGVDb2xzLCBzZXREYXRlQ29sc10gPSBSZWFjdC51c2VTdGF0ZTxDb2x1bW5EZWZbXT4oW10pO1xuICBjb25zdCBbaW1hZ2VMb2FkaW5nLCBzZXRJbWFnZUxvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbZmlsZVVybCwgc2V0RmlsZVVybF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBEdHlwZXNSZXBvc2l0b3J5LmxvYWREdHlwZXMoZGF0YUlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlPy5lcnJvcikge1xuICAgICAgICBzZXRFcnJvcig8UmVtb3ZhYmxlRXJyb3Igey4uLnJlc3BvbnNlfSAvPik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZUNvbHMgPSByZXNwb25zZS5kdHlwZXMuZmlsdGVyKChjb2wpID0+IGd1LmlzRGF0ZUNvbChjb2wuZHR5cGUpKTtcbiAgICAgICAgc2V0RGF0ZUNvbHMoY3VycmVudERhdGVDb2xzKTtcbiAgICAgICAgc2V0RGF0ZUNvbChjdXJyZW50RGF0ZUNvbHMubGVuZ3RoID8geyB2YWx1ZTogY3VycmVudERhdGVDb2xzWzBdLm5hbWUgfSA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVybHMgPSBidWlsZFVybHMoZGF0YUlkLCBkYXRlQ29sLCBmcmVxLCBjaGFydFR5cGUpO1xuICAgIHNldEltYWdlTG9hZGluZyh0cnVlKTtcbiAgICBzZXRJbWFnZVVybCh1cmxzWzBdKTtcbiAgICBzZXRGaWxlVXJsKHVybHNbMV0pO1xuICB9LCBbZGF0ZUNvbCwgZnJlcSwgY2hhcnRUeXBlXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbG9hZGluZyBnbyBib2FyZCcpXG4gICAgY29uc3Qgd2dvX21pbl9qcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgY29uc3Qgd2dvX3BsYXllcl9taW5fanMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHdnb19taW5fanMuc3JjID0gXCIvZHRhbGUvc3RhdGljL3dnby93Z28ubWluLmpzXCI7XG4gICAgd2dvX3BsYXllcl9taW5fanMuc3JjID0gXCIvZHRhbGUvc3RhdGljL3dnby93Z28ucGxheWVyLm1pbi5qc1wiO1xuICAgIC8vIHdnb19taW5fanMuYXN5bmMgPSB0cnVlO1xuICAgIC8vIHdnb19wbGF5ZXJfbWluX2pzLmFzeW5jID0gdHJ1ZTtcbiAgICAvLyB3Z29fbWluX2pzLmRlZmVyID0gdHJ1ZTtcbiAgICAvLyB3Z29fcGxheWVyX21pbl9qcy5kZWZlciA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQod2dvX21pbl9qcyk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQod2dvX3BsYXllcl9taW5fanMpO1xuICAgIC8vIGNsZWFudXAgb24gdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndW5tb3VudGluZyBnbyBib2FyZCcpXG4gICAgICB3Z29fbWluX2pzLnJlbW92ZSgpO1xuICAgICAgd2dvX3BsYXllcl9taW5fanMucmVtb3ZlKCk7XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS13Z289XCJcIiBzdHlsZT17e3dpZHRoOiAnNzAwcHgnfX0+XG4gICAgICBTb3JyeSwgeW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBXR28uanMuIERvd25sb2FkIFNHRiA8YSBocmVmPVwiZ2FtZS5zZ2ZcIj5kaXJlY3RseTwvYT4uXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydtZW51JywgJ21pc3NpbmcnLCAnc2lkZScsICdidWlsZGVycyddKShHb0JvYXJkKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMzOGUxYjU4MTk5ZDY4YjExYzQ1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9