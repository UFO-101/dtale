(self["webpackChunkdtale"] = self["webpackChunkdtale"] || []).push([["react-syntax-highlighter_languages_highlight_basic"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/basic.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/basic.js ***!
  \************************************************************************************************/
/***/ ((module) => {

/*
Language: BASIC
Author: Raphaël Assénat <raph@raphnet.net>
Description: Based on the BASIC reference from the Tandy 1000 guide
Website: https://en.wikipedia.org/wiki/Tandy_1000
*/

/** @type LanguageFn */
function basic(hljs) {
  return {
    name: 'BASIC',
    case_insensitive: true,
    illegal: '^\.',
    // Support explicitly typed variables that end with $%! or #.
    keywords: {
      $pattern: '[a-zA-Z][a-zA-Z0-9_$%!#]*',
      keyword:
        'ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE ' +
        'CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ ' +
        'DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ ' +
        'EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO ' +
        'HEX$ IF THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON ' +
        'OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET ' +
        'MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION ' +
        'BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET ' +
        'PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET ' +
        'RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP ' +
        'SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE ' +
        'WEND WIDTH WINDOW WRITE XOR'
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.COMMENT('REM', '$', {
        relevance: 10
      }),
      hljs.COMMENT('\'', '$', {
        relevance: 0
      }),
      {
        // Match line numbers
        className: 'symbol',
        begin: '^[0-9]+ ',
        relevance: 10
      },
      {
        // Match typed numeric constants (1000, 12.34!, 1.2e5, 1.5#, 1.2D2)
        className: 'number',
        begin: '\\b\\d+(\\.\\d+)?([edED]\\d+)?[#\!]?',
        relevance: 0
      },
      {
        // Match hexadecimal numbers (&Hxxxx)
        className: 'number',
        begin: '(&[hH][0-9a-fA-F]{1,4})'
      },
      {
        // Match octal numbers (&Oxxxxxx)
        className: 'number',
        begin: '(&[oO][0-7]{1,6})'
      }
    ]
  };
}

module.exports = basic;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfYmFzaWMuZHRhbGVfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxJQUFJO0FBQ3RDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2R0YWxlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBCQVNJQ1xuQXV0aG9yOiBSYXBoYcOrbCBBc3PDqW5hdCA8cmFwaEByYXBobmV0Lm5ldD5cbkRlc2NyaXB0aW9uOiBCYXNlZCBvbiB0aGUgQkFTSUMgcmVmZXJlbmNlIGZyb20gdGhlIFRhbmR5IDEwMDAgZ3VpZGVcbldlYnNpdGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RhbmR5XzEwMDBcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBiYXNpYyhobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0JBU0lDJyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGlsbGVnYWw6ICdeXFwuJyxcbiAgICAvLyBTdXBwb3J0IGV4cGxpY2l0bHkgdHlwZWQgdmFyaWFibGVzIHRoYXQgZW5kIHdpdGggJCUhIG9yICMuXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnW2EtekEtWl1bYS16QS1aMC05XyQlISNdKicsXG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnQUJTIEFTQyBBTkQgQVROIEFVVE98MCBCRUVQIEJMT0FEfDEwIEJTQVZFfDEwIENBTEwgQ0FMTFMgQ0RCTCBDSEFJTiBDSERJUiBDSFIkfDEwIENJTlQgQ0lSQ0xFICcgK1xuICAgICAgICAnQ0xFQVIgQ0xPU0UgQ0xTIENPTE9SIENPTSBDT01NT04gQ09OVCBDT1MgQ1NORyBDU1JMSU4gQ1ZEIENWSSBDVlMgREFUQSBEQVRFJCAnICtcbiAgICAgICAgJ0RFRkRCTCBERUZJTlQgREVGU05HIERFRlNUUiBERUZ8MCBTRUcgVVNSIERFTEVURSBESU0gRFJBVyBFRElUIEVORCBFTlZJUk9OIEVOVklST04kICcgK1xuICAgICAgICAnRU9GIEVRViBFUkFTRSBFUkRFViBFUkRFViQgRVJMIEVSUiBFUlJPUiBFWFAgRklFTEQgRklMRVMgRklYIEZPUnwwIEZSRSBHRVQgR09TVUJ8MTAgR09UTyAnICtcbiAgICAgICAgJ0hFWCQgSUYgVEhFTiBFTFNFfDAgSU5LRVkkIElOUCBJTlBVVCBJTlBVVCMgSU5QVVQkIElOU1RSIElNUCBJTlQgSU9DVEwgSU9DVEwkIEtFWSBPTiAnICtcbiAgICAgICAgJ09GRiBMSVNUIEtJTEwgTEVGVCQgTEVOIExFVCBMSU5FIExMSVNUIExPQUQgTE9DIExPQ0FURSBMT0YgTE9HIExQUklOVCBVU0lORyBMU0VUICcgK1xuICAgICAgICAnTUVSR0UgTUlEJCBNS0RJUiBNS0QkIE1LSSQgTUtTJCBNT0QgTkFNRSBORVcgTkVYVCBOT0lTRSBOT1QgT0NUJCBPTiBPUiBQRU4gUExBWSBTVFJJRyBPUEVOIE9QVElPTiAnICtcbiAgICAgICAgJ0JBU0UgT1VUIFBBSU5UIFBBTEVUVEUgUENPUFkgUEVFSyBQTUFQIFBPSU5UIFBPS0UgUE9TIFBSSU5UIFBSSU5UXSBQU0VUIFBSRVNFVCAnICtcbiAgICAgICAgJ1BVVCBSQU5ET01JWkUgUkVBRCBSRU0gUkVOVU0gUkVTRVR8MCBSRVNUT1JFIFJFU1VNRSBSRVRVUk58MCBSSUdIVCQgUk1ESVIgUk5EIFJTRVQgJyArXG4gICAgICAgICdSVU4gU0FWRSBTQ1JFRU4gU0dOIFNIRUxMIFNJTiBTT1VORCBTUEFDRSQgU1BDIFNRUiBTVEVQIFNUSUNLIFNUT1AgU1RSJCBTVFJJTkckIFNXQVAgJyArXG4gICAgICAgICdTWVNURU0gVEFCIFRBTiBUSU1FJCBUSU1FUiBUUk9GRiBUUk9OIFRPIFVTUiBWQUwgVkFSUFRSIFZBUlBUUiQgVklFVyBXQUlUIFdISUxFICcgK1xuICAgICAgICAnV0VORCBXSURUSCBXSU5ET1cgV1JJVEUgWE9SJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkNPTU1FTlQoJ1JFTScsICckJywge1xuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9KSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXFwnJywgJyQnLCB7XG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIE1hdGNoIGxpbmUgbnVtYmVyc1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogJ15bMC05XSsgJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gTWF0Y2ggdHlwZWQgbnVtZXJpYyBjb25zdGFudHMgKDEwMDAsIDEyLjM0ISwgMS4yZTUsIDEuNSMsIDEuMkQyKVxuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJ1xcXFxiXFxcXGQrKFxcXFwuXFxcXGQrKT8oW2VkRURdXFxcXGQrKT9bI1xcIV0/JyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBNYXRjaCBoZXhhZGVjaW1hbCBudW1iZXJzICgmSHh4eHgpXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnKCZbaEhdWzAtOWEtZkEtRl17MSw0fSknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBNYXRjaCBvY3RhbCBudW1iZXJzICgmT3h4eHh4eClcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICcoJltvT11bMC03XXsxLDZ9KSdcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzaWM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=