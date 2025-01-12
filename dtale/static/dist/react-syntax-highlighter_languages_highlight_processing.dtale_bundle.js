(self["webpackChunkdtale"] = self["webpackChunkdtale"] || []).push([["react-syntax-highlighter_languages_highlight_processing"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/processing.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/processing.js ***!
  \*****************************************************************************************************/
/***/ ((module) => {

/*
Language: Processing
Description: Processing is a flexible software sketchbook and a language for learning how to code within the context of the visual arts.
Author: Erik Paluka <erik.paluka@gmail.com>
Website: https://processing.org
Category: graphics
*/

function processing(hljs) {
  return {
    name: 'Processing',
    keywords: {
      keyword: 'BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color ' +
        'double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject ' +
        'Object StringDict StringList Table TableRow XML ' +
        // Java keywords
        'false synchronized int abstract float private char boolean static null if const ' +
        'for true while long throw strictfp finally protected import native final return void ' +
        'enum else break transient new catch instanceof byte super volatile case assert short ' +
        'package default double public try this switch continue throws protected public private',
      literal: 'P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI',
      title: 'setup draw',
      built_in: 'displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key ' +
        'keyCode pixels focused frameCount frameRate height width ' +
        'size createGraphics beginDraw createShape loadShape PShape arc ellipse line point ' +
        'quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint ' +
        'curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex ' +
        'endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap ' +
        'strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased ' +
        'mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour ' +
        'millis minute month second year background clear colorMode fill noFill noStroke stroke alpha ' +
        'blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY ' +
        'screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ' +
        'ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle ' +
        'pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf ' +
        'nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset ' +
        'box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings ' +
        'loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput ' +
        'createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings ' +
        'saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale ' +
        'shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal ' +
        'pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap ' +
        'blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont ' +
        'loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil ' +
        'constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees ' +
        'radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
}

module.exports = processing;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfcHJvY2Vzc2luZy5kdGFsZV9idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2R0YWxlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHJvY2Vzc2luZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFByb2Nlc3NpbmdcbkRlc2NyaXB0aW9uOiBQcm9jZXNzaW5nIGlzIGEgZmxleGlibGUgc29mdHdhcmUgc2tldGNoYm9vayBhbmQgYSBsYW5ndWFnZSBmb3IgbGVhcm5pbmcgaG93IHRvIGNvZGUgd2l0aGluIHRoZSBjb250ZXh0IG9mIHRoZSB2aXN1YWwgYXJ0cy5cbkF1dGhvcjogRXJpayBQYWx1a2EgPGVyaWsucGFsdWthQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vcHJvY2Vzc2luZy5vcmdcbkNhdGVnb3J5OiBncmFwaGljc1xuKi9cblxuZnVuY3Rpb24gcHJvY2Vzc2luZyhobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1Byb2Nlc3NpbmcnLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiAnQnVmZmVyZWRSZWFkZXIgUFZlY3RvciBQRm9udCBQSW1hZ2UgUEdyYXBoaWNzIEhhc2hNYXAgYm9vbGVhbiBieXRlIGNoYXIgY29sb3IgJyArXG4gICAgICAgICdkb3VibGUgZmxvYXQgaW50IGxvbmcgU3RyaW5nIEFycmF5IEZsb2F0RGljdCBGbG9hdExpc3QgSW50RGljdCBJbnRMaXN0IEpTT05BcnJheSBKU09OT2JqZWN0ICcgK1xuICAgICAgICAnT2JqZWN0IFN0cmluZ0RpY3QgU3RyaW5nTGlzdCBUYWJsZSBUYWJsZVJvdyBYTUwgJyArXG4gICAgICAgIC8vIEphdmEga2V5d29yZHNcbiAgICAgICAgJ2ZhbHNlIHN5bmNocm9uaXplZCBpbnQgYWJzdHJhY3QgZmxvYXQgcHJpdmF0ZSBjaGFyIGJvb2xlYW4gc3RhdGljIG51bGwgaWYgY29uc3QgJyArXG4gICAgICAgICdmb3IgdHJ1ZSB3aGlsZSBsb25nIHRocm93IHN0cmljdGZwIGZpbmFsbHkgcHJvdGVjdGVkIGltcG9ydCBuYXRpdmUgZmluYWwgcmV0dXJuIHZvaWQgJyArXG4gICAgICAgICdlbnVtIGVsc2UgYnJlYWsgdHJhbnNpZW50IG5ldyBjYXRjaCBpbnN0YW5jZW9mIGJ5dGUgc3VwZXIgdm9sYXRpbGUgY2FzZSBhc3NlcnQgc2hvcnQgJyArXG4gICAgICAgICdwYWNrYWdlIGRlZmF1bHQgZG91YmxlIHB1YmxpYyB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgdGhyb3dzIHByb3RlY3RlZCBwdWJsaWMgcHJpdmF0ZScsXG4gICAgICBsaXRlcmFsOiAnUDJEIFAzRCBIQUxGX1BJIFBJIFFVQVJURVJfUEkgVEFVIFRXT19QSScsXG4gICAgICB0aXRsZTogJ3NldHVwIGRyYXcnLFxuICAgICAgYnVpbHRfaW46ICdkaXNwbGF5SGVpZ2h0IGRpc3BsYXlXaWR0aCBtb3VzZVkgbW91c2VYIG1vdXNlUHJlc3NlZCBwbW91c2VYIHBtb3VzZVkga2V5ICcgK1xuICAgICAgICAna2V5Q29kZSBwaXhlbHMgZm9jdXNlZCBmcmFtZUNvdW50IGZyYW1lUmF0ZSBoZWlnaHQgd2lkdGggJyArXG4gICAgICAgICdzaXplIGNyZWF0ZUdyYXBoaWNzIGJlZ2luRHJhdyBjcmVhdGVTaGFwZSBsb2FkU2hhcGUgUFNoYXBlIGFyYyBlbGxpcHNlIGxpbmUgcG9pbnQgJyArXG4gICAgICAgICdxdWFkIHJlY3QgdHJpYW5nbGUgYmV6aWVyIGJlemllckRldGFpbCBiZXppZXJQb2ludCBiZXppZXJUYW5nZW50IGN1cnZlIGN1cnZlRGV0YWlsIGN1cnZlUG9pbnQgJyArXG4gICAgICAgICdjdXJ2ZVRhbmdlbnQgY3VydmVUaWdodG5lc3Mgc2hhcGUgc2hhcGVNb2RlIGJlZ2luQ29udG91ciBiZWdpblNoYXBlIGJlemllclZlcnRleCBjdXJ2ZVZlcnRleCAnICtcbiAgICAgICAgJ2VuZENvbnRvdXIgZW5kU2hhcGUgcXVhZHJhdGljVmVydGV4IHZlcnRleCBlbGxpcHNlTW9kZSBub1Ntb290aCByZWN0TW9kZSBzbW9vdGggc3Ryb2tlQ2FwICcgK1xuICAgICAgICAnc3Ryb2tlSm9pbiBzdHJva2VXZWlnaHQgbW91c2VDbGlja2VkIG1vdXNlRHJhZ2dlZCBtb3VzZU1vdmVkIG1vdXNlUHJlc3NlZCBtb3VzZVJlbGVhc2VkICcgK1xuICAgICAgICAnbW91c2VXaGVlbCBrZXlQcmVzc2VkIGtleVByZXNzZWRrZXlSZWxlYXNlZCBrZXlUeXBlZCBwcmludCBwcmludGxuIHNhdmUgc2F2ZUZyYW1lIGRheSBob3VyICcgK1xuICAgICAgICAnbWlsbGlzIG1pbnV0ZSBtb250aCBzZWNvbmQgeWVhciBiYWNrZ3JvdW5kIGNsZWFyIGNvbG9yTW9kZSBmaWxsIG5vRmlsbCBub1N0cm9rZSBzdHJva2UgYWxwaGEgJyArXG4gICAgICAgICdibHVlIGJyaWdodG5lc3MgY29sb3IgZ3JlZW4gaHVlIGxlcnBDb2xvciByZWQgc2F0dXJhdGlvbiBtb2RlbFggbW9kZWxZIG1vZGVsWiBzY3JlZW5YIHNjcmVlblkgJyArXG4gICAgICAgICdzY3JlZW5aIGFtYmllbnQgZW1pc3NpdmUgc2hpbmluZXNzIHNwZWN1bGFyIGFkZCBjcmVhdGVJbWFnZSBiZWdpbkNhbWVyYSBjYW1lcmEgZW5kQ2FtZXJhIGZydXN0dW0gJyArXG4gICAgICAgICdvcnRobyBwZXJzcGVjdGl2ZSBwcmludENhbWVyYSBwcmludFByb2plY3Rpb24gY3Vyc29yIGZyYW1lUmF0ZSBub0N1cnNvciBleGl0IGxvb3Agbm9Mb29wIHBvcFN0eWxlICcgK1xuICAgICAgICAncHVzaFN0eWxlIHJlZHJhdyBiaW5hcnkgYm9vbGVhbiBieXRlIGNoYXIgZmxvYXQgaGV4IGludCBzdHIgdW5iaW5hcnkgdW5oZXggam9pbiBtYXRjaCBtYXRjaEFsbCBuZiAnICtcbiAgICAgICAgJ25mYyBuZnAgbmZzIHNwbGl0IHNwbGl0VG9rZW5zIHRyaW0gYXBwZW5kIGFycmF5Q29weSBjb25jYXQgZXhwYW5kIHJldmVyc2Ugc2hvcnRlbiBzb3J0IHNwbGljZSBzdWJzZXQgJyArXG4gICAgICAgICdib3ggc3BoZXJlIHNwaGVyZURldGFpbCBjcmVhdGVJbnB1dCBjcmVhdGVSZWFkZXIgbG9hZEJ5dGVzIGxvYWRKU09OQXJyYXkgbG9hZEpTT05PYmplY3QgbG9hZFN0cmluZ3MgJyArXG4gICAgICAgICdsb2FkVGFibGUgbG9hZFhNTCBvcGVuIHBhcnNlWE1MIHNhdmVUYWJsZSBzZWxlY3RGb2xkZXIgc2VsZWN0SW5wdXQgYmVnaW5SYXcgYmVnaW5SZWNvcmQgY3JlYXRlT3V0cHV0ICcgK1xuICAgICAgICAnY3JlYXRlV3JpdGVyIGVuZFJhdyBlbmRSZWNvcmQgUHJpbnRXcml0ZXJzYXZlQnl0ZXMgc2F2ZUpTT05BcnJheSBzYXZlSlNPTk9iamVjdCBzYXZlU3RyZWFtIHNhdmVTdHJpbmdzICcgK1xuICAgICAgICAnc2F2ZVhNTCBzZWxlY3RPdXRwdXQgcG9wTWF0cml4IHByaW50TWF0cml4IHB1c2hNYXRyaXggcmVzZXRNYXRyaXggcm90YXRlIHJvdGF0ZVggcm90YXRlWSByb3RhdGVaIHNjYWxlICcgK1xuICAgICAgICAnc2hlYXJYIHNoZWFyWSB0cmFuc2xhdGUgYW1iaWVudExpZ2h0IGRpcmVjdGlvbmFsTGlnaHQgbGlnaHRGYWxsb2ZmIGxpZ2h0cyBsaWdodFNwZWN1bGFyIG5vTGlnaHRzIG5vcm1hbCAnICtcbiAgICAgICAgJ3BvaW50TGlnaHQgc3BvdExpZ2h0IGltYWdlIGltYWdlTW9kZSBsb2FkSW1hZ2Ugbm9UaW50IHJlcXVlc3RJbWFnZSB0aW50IHRleHR1cmUgdGV4dHVyZU1vZGUgdGV4dHVyZVdyYXAgJyArXG4gICAgICAgICdibGVuZCBjb3B5IGZpbHRlciBnZXQgbG9hZFBpeGVscyBzZXQgdXBkYXRlUGl4ZWxzIGJsZW5kTW9kZSBsb2FkU2hhZGVyIFBTaGFkZXJyZXNldFNoYWRlciBzaGFkZXIgY3JlYXRlRm9udCAnICtcbiAgICAgICAgJ2xvYWRGb250IHRleHQgdGV4dEZvbnQgdGV4dEFsaWduIHRleHRMZWFkaW5nIHRleHRNb2RlIHRleHRTaXplIHRleHRXaWR0aCB0ZXh0QXNjZW50IHRleHREZXNjZW50IGFicyBjZWlsICcgK1xuICAgICAgICAnY29uc3RyYWluIGRpc3QgZXhwIGZsb29yIGxlcnAgbG9nIG1hZyBtYXAgbWF4IG1pbiBub3JtIHBvdyByb3VuZCBzcSBzcXJ0IGFjb3MgYXNpbiBhdGFuIGF0YW4yIGNvcyBkZWdyZWVzICcgK1xuICAgICAgICAncmFkaWFucyBzaW4gdGFuIG5vaXNlIG5vaXNlRGV0YWlsIG5vaXNlU2VlZCByYW5kb20gcmFuZG9tR2F1c3NpYW4gcmFuZG9tU2VlZCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzaW5nO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9