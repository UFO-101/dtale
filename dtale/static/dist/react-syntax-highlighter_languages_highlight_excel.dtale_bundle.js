(self["webpackChunkdtale"] = self["webpackChunkdtale"] || []).push([["react-syntax-highlighter_languages_highlight_excel"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/excel.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/excel.js ***!
  \************************************************************************************************/
/***/ ((module) => {

/*
Language: Excel formulae
Author: Victor Zhou <OiCMudkips@users.noreply.github.com>
Description: Excel formulae
Website: https://products.office.com/en-us/excel/
*/

/** @type LanguageFn */
function excel(hljs) {
  return {
    name: 'Excel formulae',
    aliases: [
      'xlsx',
      'xls'
    ],
    case_insensitive: true,
    // built-in functions imported from https://web.archive.org/web/20160513042710/https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188
    keywords: {
      $pattern: /[a-zA-Z][\w\.]*/,
      built_in: 'ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST'
    },
    contains: [
      {
        /* matches a beginning equal sign found in Excel formula examples */
        begin: /^=/,
        end: /[^=]/,
        returnEnd: true,
        illegal: /=/, /* only allow single equal sign at front of line */
        relevance: 10
      },
      /* technically, there can be more than 2 letters in column names, but this prevents conflict with some keywords */
      {
        /* matches a reference to a single cell */
        className: 'symbol',
        begin: /\b[A-Z]{1,2}\d+\b/,
        end: /[^\d]/,
        excludeEnd: true,
        relevance: 0
      },
      {
        /* matches a reference to a range of cells */
        className: 'symbol',
        begin: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,
        relevance: 0
      },
      hljs.BACKSLASH_ESCAPE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'number',
        begin: hljs.NUMBER_RE + '(%)?',
        relevance: 0
      },
      /* Excel formula comments are done by putting the comment in a function call to N() */
      hljs.COMMENT(/\bN\(/, /\)/,
        {
          excludeBegin: true,
          excludeEnd: true,
          illegal: /\n/
        })
    ]
  };
}

module.exports = excel;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfZXhjZWwuZHRhbGVfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsSUFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLElBQUksVUFBVSxJQUFJO0FBQ3hDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHRhbGUvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9leGNlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEV4Y2VsIGZvcm11bGFlXG5BdXRob3I6IFZpY3RvciBaaG91IDxPaUNNdWRraXBzQHVzZXJzLm5vcmVwbHkuZ2l0aHViLmNvbT5cbkRlc2NyaXB0aW9uOiBFeGNlbCBmb3JtdWxhZVxuV2Vic2l0ZTogaHR0cHM6Ly9wcm9kdWN0cy5vZmZpY2UuY29tL2VuLXVzL2V4Y2VsL1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGV4Y2VsKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRXhjZWwgZm9ybXVsYWUnLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICd4bHN4JyxcbiAgICAgICd4bHMnXG4gICAgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIC8vIGJ1aWx0LWluIGZ1bmN0aW9ucyBpbXBvcnRlZCBmcm9tIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDE2MDUxMzA0MjcxMC9odHRwczovL3N1cHBvcnQub2ZmaWNlLmNvbS9lbi11cy9hcnRpY2xlL0V4Y2VsLWZ1bmN0aW9ucy1hbHBoYWJldGljYWwtYjM5NDQ1NzItMjU1ZC00ZWZiLWJiOTYtYzZkOTAwMzNlMTg4XG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAvW2EtekEtWl1bXFx3XFwuXSovLFxuICAgICAgYnVpbHRfaW46ICdBQlMgQUNDUklOVCBBQ0NSSU5UTSBBQ09TIEFDT1NIIEFDT1QgQUNPVEggQUdHUkVHQVRFIEFERFJFU1MgQU1PUkRFR1JDIEFNT1JMSU5DIEFORCBBUkFCSUMgQVJFQVMgQVNDIEFTSU4gQVNJTkggQVRBTiBBVEFOMiBBVEFOSCBBVkVERVYgQVZFUkFHRSBBVkVSQUdFQSBBVkVSQUdFSUYgQVZFUkFHRUlGUyBCQUhUVEVYVCBCQVNFIEJFU1NFTEkgQkVTU0VMSiBCRVNTRUxLIEJFU1NFTFkgQkVUQURJU1QgQkVUQS5ESVNUIEJFVEFJTlYgQkVUQS5JTlYgQklOMkRFQyBCSU4ySEVYIEJJTjJPQ1QgQklOT01ESVNUIEJJTk9NLkRJU1QgQklOT00uRElTVC5SQU5HRSBCSU5PTS5JTlYgQklUQU5EIEJJVExTSElGVCBCSVRPUiBCSVRSU0hJRlQgQklUWE9SIENBTEwgQ0VJTElORyBDRUlMSU5HLk1BVEggQ0VJTElORy5QUkVDSVNFIENFTEwgQ0hBUiBDSElESVNUIENISUlOViBDSElURVNUIENISVNRLkRJU1QgQ0hJU1EuRElTVC5SVCBDSElTUS5JTlYgQ0hJU1EuSU5WLlJUIENISVNRLlRFU1QgQ0hPT1NFIENMRUFOIENPREUgQ09MVU1OIENPTFVNTlMgQ09NQklOIENPTUJJTkEgQ09NUExFWCBDT05DQVQgQ09OQ0FURU5BVEUgQ09ORklERU5DRSBDT05GSURFTkNFLk5PUk0gQ09ORklERU5DRS5UIENPTlZFUlQgQ09SUkVMIENPUyBDT1NIIENPVCBDT1RIIENPVU5UIENPVU5UQSBDT1VOVEJMQU5LIENPVU5USUYgQ09VTlRJRlMgQ09VUERBWUJTIENPVVBEQVlTIENPVVBEQVlTTkMgQ09VUE5DRCBDT1VQTlVNIENPVVBQQ0QgQ09WQVIgQ09WQVJJQU5DRS5QIENPVkFSSUFOQ0UuUyBDUklUQklOT00gQ1NDIENTQ0ggQ1VCRUtQSU1FTUJFUiBDVUJFTUVNQkVSIENVQkVNRU1CRVJQUk9QRVJUWSBDVUJFUkFOS0VETUVNQkVSIENVQkVTRVQgQ1VCRVNFVENPVU5UIENVQkVWQUxVRSBDVU1JUE1UIENVTVBSSU5DIERBVEUgREFURURJRiBEQVRFVkFMVUUgREFWRVJBR0UgREFZIERBWVMgREFZUzM2MCBEQiBEQkNTIERDT1VOVCBEQ09VTlRBIEREQiBERUMyQklOIERFQzJIRVggREVDMk9DVCBERUNJTUFMIERFR1JFRVMgREVMVEEgREVWU1EgREdFVCBESVNDIERNQVggRE1JTiBET0xMQVIgRE9MTEFSREUgRE9MTEFSRlIgRFBST0RVQ1QgRFNUREVWIERTVERFVlAgRFNVTSBEVVJBVElPTiBEVkFSIERWQVJQIEVEQVRFIEVGRkVDVCBFTkNPREVVUkwgRU9NT05USCBFUkYgRVJGLlBSRUNJU0UgRVJGQyBFUkZDLlBSRUNJU0UgRVJST1IuVFlQRSBFVVJPQ09OVkVSVCBFVkVOIEVYQUNUIEVYUCBFWFBPTi5ESVNUIEVYUE9ORElTVCBGQUNUIEZBQ1RET1VCTEUgRkFMU0V8MCBGLkRJU1QgRkRJU1QgRi5ESVNULlJUIEZJTFRFUlhNTCBGSU5EIEZJTkRCIEYuSU5WIEYuSU5WLlJUIEZJTlYgRklTSEVSIEZJU0hFUklOViBGSVhFRCBGTE9PUiBGTE9PUi5NQVRIIEZMT09SLlBSRUNJU0UgRk9SRUNBU1QgRk9SRUNBU1QuRVRTIEZPUkVDQVNULkVUUy5DT05GSU5UIEZPUkVDQVNULkVUUy5TRUFTT05BTElUWSBGT1JFQ0FTVC5FVFMuU1RBVCBGT1JFQ0FTVC5MSU5FQVIgRk9STVVMQVRFWFQgRlJFUVVFTkNZIEYuVEVTVCBGVEVTVCBGViBGVlNDSEVEVUxFIEdBTU1BIEdBTU1BLkRJU1QgR0FNTUFESVNUIEdBTU1BLklOViBHQU1NQUlOViBHQU1NQUxOIEdBTU1BTE4uUFJFQ0lTRSBHQVVTUyBHQ0QgR0VPTUVBTiBHRVNURVAgR0VUUElWT1REQVRBIEdST1dUSCBIQVJNRUFOIEhFWDJCSU4gSEVYMkRFQyBIRVgyT0NUIEhMT09LVVAgSE9VUiBIWVBFUkxJTksgSFlQR0VPTS5ESVNUIEhZUEdFT01ESVNUIElGIElGRVJST1IgSUZOQSBJRlMgSU1BQlMgSU1BR0lOQVJZIElNQVJHVU1FTlQgSU1DT05KVUdBVEUgSU1DT1MgSU1DT1NIIElNQ09UIElNQ1NDIElNQ1NDSCBJTURJViBJTUVYUCBJTUxOIElNTE9HMTAgSU1MT0cyIElNUE9XRVIgSU1QUk9EVUNUIElNUkVBTCBJTVNFQyBJTVNFQ0ggSU1TSU4gSU1TSU5IIElNU1FSVCBJTVNVQiBJTVNVTSBJTVRBTiBJTkRFWCBJTkRJUkVDVCBJTkZPIElOVCBJTlRFUkNFUFQgSU5UUkFURSBJUE1UIElSUiBJU0JMQU5LIElTRVJSIElTRVJST1IgSVNFVkVOIElTRk9STVVMQSBJU0xPR0lDQUwgSVNOQSBJU05PTlRFWFQgSVNOVU1CRVIgSVNPREQgSVNSRUYgSVNURVhUIElTTy5DRUlMSU5HIElTT1dFRUtOVU0gSVNQTVQgSklTIEtVUlQgTEFSR0UgTENNIExFRlQgTEVGVEIgTEVOIExFTkIgTElORVNUIExOIExPRyBMT0cxMCBMT0dFU1QgTE9HSU5WIExPR05PUk0uRElTVCBMT0dOT1JNRElTVCBMT0dOT1JNLklOViBMT09LVVAgTE9XRVIgTUFUQ0ggTUFYIE1BWEEgTUFYSUZTIE1ERVRFUk0gTURVUkFUSU9OIE1FRElBTiBNSUQgTUlEQnMgTUlOIE1JTklGUyBNSU5BIE1JTlVURSBNSU5WRVJTRSBNSVJSIE1NVUxUIE1PRCBNT0RFIE1PREUuTVVMVCBNT0RFLlNOR0wgTU9OVEggTVJPVU5EIE1VTFRJTk9NSUFMIE1VTklUIE4gTkEgTkVHQklOT00uRElTVCBORUdCSU5PTURJU1QgTkVUV09SS0RBWVMgTkVUV09SS0RBWVMuSU5UTCBOT01JTkFMIE5PUk0uRElTVCBOT1JNRElTVCBOT1JNSU5WIE5PUk0uSU5WIE5PUk0uUy5ESVNUIE5PUk1TRElTVCBOT1JNLlMuSU5WIE5PUk1TSU5WIE5PVCBOT1cgTlBFUiBOUFYgTlVNQkVSVkFMVUUgT0NUMkJJTiBPQ1QyREVDIE9DVDJIRVggT0REIE9EREZQUklDRSBPRERGWUlFTEQgT0RETFBSSUNFIE9ERExZSUVMRCBPRkZTRVQgT1IgUERVUkFUSU9OIFBFQVJTT04gUEVSQ0VOVElMRS5FWEMgUEVSQ0VOVElMRS5JTkMgUEVSQ0VOVElMRSBQRVJDRU5UUkFOSy5FWEMgUEVSQ0VOVFJBTksuSU5DIFBFUkNFTlRSQU5LIFBFUk1VVCBQRVJNVVRBVElPTkEgUEhJIFBIT05FVElDIFBJIFBNVCBQT0lTU09OLkRJU1QgUE9JU1NPTiBQT1dFUiBQUE1UIFBSSUNFIFBSSUNFRElTQyBQUklDRU1BVCBQUk9CIFBST0RVQ1QgUFJPUEVSIFBWIFFVQVJUSUxFIFFVQVJUSUxFLkVYQyBRVUFSVElMRS5JTkMgUVVPVElFTlQgUkFESUFOUyBSQU5EIFJBTkRCRVRXRUVOIFJBTksuQVZHIFJBTksuRVEgUkFOSyBSQVRFIFJFQ0VJVkVEIFJFR0lTVEVSLklEIFJFUExBQ0UgUkVQTEFDRUIgUkVQVCBSSUdIVCBSSUdIVEIgUk9NQU4gUk9VTkQgUk9VTkRET1dOIFJPVU5EVVAgUk9XIFJPV1MgUlJJIFJTUSBSVEQgU0VBUkNIIFNFQVJDSEIgU0VDIFNFQ0ggU0VDT05EIFNFUklFU1NVTSBTSEVFVCBTSEVFVFMgU0lHTiBTSU4gU0lOSCBTS0VXIFNLRVcuUCBTTE4gU0xPUEUgU01BTEwgU1FMLlJFUVVFU1QgU1FSVCBTUVJUUEkgU1RBTkRBUkRJWkUgU1RERVYgU1RERVYuUCBTVERFVi5TIFNUREVWQSBTVERFVlAgU1RERVZQQSBTVEVZWCBTVUJTVElUVVRFIFNVQlRPVEFMIFNVTSBTVU1JRiBTVU1JRlMgU1VNUFJPRFVDVCBTVU1TUSBTVU1YMk1ZMiBTVU1YMlBZMiBTVU1YTVkyIFNXSVRDSCBTWUQgVCBUQU4gVEFOSCBUQklMTEVRIFRCSUxMUFJJQ0UgVEJJTExZSUVMRCBULkRJU1QgVC5ESVNULjJUIFQuRElTVC5SVCBURElTVCBURVhUIFRFWFRKT0lOIFRJTUUgVElNRVZBTFVFIFQuSU5WIFQuSU5WLjJUIFRJTlYgVE9EQVkgVFJBTlNQT1NFIFRSRU5EIFRSSU0gVFJJTU1FQU4gVFJVRXwwIFRSVU5DIFQuVEVTVCBUVEVTVCBUWVBFIFVOSUNIQVIgVU5JQ09ERSBVUFBFUiBWQUxVRSBWQVIgVkFSLlAgVkFSLlMgVkFSQSBWQVJQIFZBUlBBIFZEQiBWTE9PS1VQIFdFQlNFUlZJQ0UgV0VFS0RBWSBXRUVLTlVNIFdFSUJVTEwgV0VJQlVMTC5ESVNUIFdPUktEQVkgV09SS0RBWS5JTlRMIFhJUlIgWE5QViBYT1IgWUVBUiBZRUFSRlJBQyBZSUVMRCBZSUVMRERJU0MgWUlFTERNQVQgWi5URVNUIFpURVNUJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgLyogbWF0Y2hlcyBhIGJlZ2lubmluZyBlcXVhbCBzaWduIGZvdW5kIGluIEV4Y2VsIGZvcm11bGEgZXhhbXBsZXMgKi9cbiAgICAgICAgYmVnaW46IC9ePS8sXG4gICAgICAgIGVuZDogL1tePV0vLFxuICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6IC89LywgLyogb25seSBhbGxvdyBzaW5nbGUgZXF1YWwgc2lnbiBhdCBmcm9udCBvZiBsaW5lICovXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICAvKiB0ZWNobmljYWxseSwgdGhlcmUgY2FuIGJlIG1vcmUgdGhhbiAyIGxldHRlcnMgaW4gY29sdW1uIG5hbWVzLCBidXQgdGhpcyBwcmV2ZW50cyBjb25mbGljdCB3aXRoIHNvbWUga2V5d29yZHMgKi9cbiAgICAgIHtcbiAgICAgICAgLyogbWF0Y2hlcyBhIHJlZmVyZW5jZSB0byBhIHNpbmdsZSBjZWxsICovXG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAvXFxiW0EtWl17MSwyfVxcZCtcXGIvLFxuICAgICAgICBlbmQ6IC9bXlxcZF0vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8qIG1hdGNoZXMgYSByZWZlcmVuY2UgdG8gYSByYW5nZSBvZiBjZWxscyAqL1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogL1tBLVpdezAsMn1cXGQqOltBLVpdezAsMn1cXGQqLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IGhsanMuTlVNQkVSX1JFICsgJyglKT8nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAvKiBFeGNlbCBmb3JtdWxhIGNvbW1lbnRzIGFyZSBkb25lIGJ5IHB1dHRpbmcgdGhlIGNvbW1lbnQgaW4gYSBmdW5jdGlvbiBjYWxsIHRvIE4oKSAqL1xuICAgICAgaGxqcy5DT01NRU5UKC9cXGJOXFwoLywgL1xcKS8sXG4gICAgICAgIHtcbiAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICBpbGxlZ2FsOiAvXFxuL1xuICAgICAgICB9KVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleGNlbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==