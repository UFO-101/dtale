self["webpackHotUpdatedtale"]("main",{

/***/ "./static/dtale/side/wgo/wgo.min.js":
/*!******************************************!*\
  !*** ./static/dtale/side/wgo/wgo.min.js ***!
  \******************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! MIT license, more info: wgo.waltheri.net */
(function (v, q) {
  var m = document.getElementsByTagName("script"),
      g = {
    version: "2.3.1",
    B: 1,
    W: -1,
    ERROR_REPORT: !0,
    DIR: m[m.length - 1].src.split("?")[0].split("/").slice(0, -1).join("/") + "/",
    lang: "en",
    i18n: {
      en: {}
    }
  };
  g.opera = -1 != navigator.userAgent.search(/(opera)(?:.*version)?[ \/]([\w.]+)/i);
  g.webkit = -1 != navigator.userAgent.search(/(webkit)[ \/]([\w.]+)/i);
  g.msie = -1 != navigator.userAgent.search(/(msie) ([\w.]+)/i);
  g.mozilla = -1 != navigator.userAgent.search(/(mozilla)(?:.*? rv:([\w.]+))?/i) && !g.webkit && !g.msie;

  g.t = function (a) {
    var b = g.i18n[g.lang][a] || g.i18n.en[a];

    if (b) {
      for (var c = 1; c < arguments.length; c++) {
        b = b.replace("$", arguments[c]);
      }

      return b;
    }

    return a;
  };

  g.extendClass = function (a, b) {
    b.prototype = Object.create(a.prototype);
    b.prototype.constructor = b;
    b.prototype.super = a;
    return b;
  };

  g.abstractMethod = function () {
    throw Error("unimplemented abstract method");
  };

  g.clone = function (a) {
    if (a && "object" == _typeof(a)) {
      var b = a.constructor == Array ? [] : {},
          c;

      for (c in a) {
        b[c] = a[c] == a ? a : g.clone(a[c]);
      }

      return b;
    }

    return a;
  };

  g.filterHTML = function (a) {
    return a && "string" == typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;") : a;
  };

  var h = function h(a, b) {
    b = b || {};

    for (var c in b) {
      this[c] = b[c];
    }

    for (c in g.Board.default) {
      this[c] === q && (this[c] = g.Board.default[c]);
    }

    for (c in h.themes.default) {
      this.theme[c] === q && (this.theme[c] = h.themes.default[c]);
    }

    this.tx = this.section.left;
    this.ty = this.section.top;
    this.bx = this.size - 1 - this.section.right;
    this.by = this.size - 1 - this.section.bottom;
    this.init();
    a.appendChild(this.element);
    this.pixelRatio = v.devicePixelRatio || 1;
    this.width && this.height ? this.setDimensions(this.width, this.height) : this.width ? this.setWidth(this.width) : this.height && this.setHeight(this.height);
  };

  h.themes = {};
  h.themes.old = {
    shadowColor: "rgba(32,32,32,0.5)",
    shadowTransparentColor: "rgba(32,32,32,0)",
    shadowBlur: 0,
    shadowSize: function shadowSize(a) {
      return a.shadowSize;
    },
    markupBlackColor: "rgba(255,255,255,0.8)",
    markupWhiteColor: "rgba(0,0,0,0.8)",
    markupNoneColor: "rgba(0,0,0,0.8)",
    markupLinesWidth: function markupLinesWidth(a) {
      return a.autoLineWidth ? a.stoneRadius / 7 : a.lineWidth;
    },
    gridLinesWidth: 1,
    gridLinesColor: function gridLinesColor(a) {
      return "rgba(0,0,0," + Math.min(1, a.stoneRadius / 15) + ")";
    },
    starColor: "#000",
    starSize: function starSize(a) {
      return a.starSize * (a.width / 300 + 1);
    },
    stoneSize: function stoneSize(a) {
      return a.stoneSize * Math.min(a.fieldWidth, a.fieldHeight) / 2;
    },
    coordinatesColor: "rgba(0,0,0,0.7)",
    font: function font(a) {
      return a.font;
    },
    linesShift: .5
  };
  h.themes.default = {
    shadowColor: "rgba(62,32,32,0.5)",
    shadowTransparentColor: "rgba(62,32,32,0)",
    shadowBlur: function shadowBlur(a) {
      return .1 * a.stoneRadius;
    },
    shadowSize: 1,
    markupBlackColor: "rgba(255,255,255,0.9)",
    markupWhiteColor: "rgba(0,0,0,0.7)",
    markupNoneColor: "rgba(0,0,0,0.7)",
    markupLinesWidth: function markupLinesWidth(a) {
      return a.stoneRadius / 8;
    },
    gridLinesWidth: function gridLinesWidth(a) {
      return a.stoneRadius / 15;
    },
    gridLinesColor: "#654525",
    starColor: "#531",
    starSize: function starSize(a) {
      return a.stoneRadius / 8 + 1;
    },
    stoneSize: function stoneSize(a) {
      return Math.min(a.fieldWidth, a.fieldHeight) / 2;
    },
    coordinatesColor: "#531",
    variationColor: "rgba(0,32,128,0.8)",
    font: "calibri",
    linesShift: .25
  };

  var k = function k(a, b) {
    return "function" == typeof b.theme[a] ? b.theme[a](b) : b.theme[a];
  },
      m = {
    draw: function draw(a, b) {
      var c = b.getX(a.x),
          e = b.getY(a.y),
          d = b.stoneRadius;
      this.beginPath();
      var f = k("shadowBlur", b),
          d = Math.max(0, d - .5),
          n = this.createRadialGradient(c - b.ls, e - b.ls, d - 1 - f, c - b.ls, e - b.ls, d + f);
      n.addColorStop(0, k("shadowColor", b));
      n.addColorStop(1, k("shadowTransparentColor", b));
      this.fillStyle = n;
      this.arc(c - b.ls, e - b.ls, d + f, 0, 2 * Math.PI, !0);
      this.fill();
    },
    clear: function clear(a, b) {
      var c = b.getX(a.x),
          e = b.getY(a.y),
          d = b.stoneRadius;
      this.clearRect(c - 1.1 * d - b.ls, e - 1.1 * d - b.ls, 2.2 * d, 2.2 * d);
    }
  },
      p = function p(a, b, c) {
    return a.obj_arr[b][c][0].c == g.B ? k("markupBlackColor", a) : a.obj_arr[b][c][0].c == g.W ? k("markupWhiteColor", a) : k("markupNoneColor", a);
  },
      D = function D(a, b, c) {
    return a.obj_arr[b][c][0] && a.obj_arr[b][c][0].c == g.W || a.obj_arr[b][c][0].c == g.B;
  },
      w,
      y = function y(a) {
    for (var b = a.angle, c = a.angle, e = 0; e < a.lines.length; e++) {
      var b = b + a.lines[e],
          c = c - a.lines[e],
          d = a.ctx,
          f = a.x,
          n = a.y,
          g = a.radius,
          h = b,
          k = c,
          m = a.factor,
          l = a.thickness;
      d.strokeStyle = "rgba(64,64,64,0.2)";
      d.lineWidth = g / 30 * l;
      d.beginPath();
      var g = g - Math.max(1, d.lineWidth),
          l = f + g * Math.cos(h * Math.PI),
          h = n + g * Math.sin(h * Math.PI),
          f = f + g * Math.cos(k * Math.PI),
          n = n + g * Math.sin(k * Math.PI),
          r = k = void 0,
          r = k = void 0;
      f > l ? (k = (n - h) / (f - l), r = Math.atan(k)) : f == l ? r = Math.PI / 2 : (k = (n - h) / (f - l), r = Math.atan(k) - Math.PI);
      g *= m;
      k = Math.sin(r) * g;
      r = Math.cos(r) * g;
      g = l + k;
      m = h - r;
      k = f + k;
      r = n - r;
      d.moveTo(l, h);
      d.bezierCurveTo(g, m, k, r, f, n);
      d.stroke();
    }
  };

  h.drawHandlers = {
    NORMAL: {
      stone: {
        draw: function draw(a, b) {
          var c = b.getX(a.x),
              e = b.getY(a.y),
              d = b.stoneRadius,
              f;
          a.c == g.W ? (f = this.createRadialGradient(c - 2 * d / 5, e - 2 * d / 5, d / 3, c - d / 5, e - d / 5, 5 * d / 5), f.addColorStop(0, "#fff"), f.addColorStop(1, "#aaa")) : (f = this.createRadialGradient(c - 2 * d / 5, e - 2 * d / 5, 1, c - d / 5, e - d / 5, 4 * d / 5), f.addColorStop(0, "#666"), f.addColorStop(1, "#000"));
          this.beginPath();
          this.fillStyle = f;
          this.arc(c - b.ls, e - b.ls, Math.max(0, d - .5), 0, 2 * Math.PI, !0);
          this.fill();
        }
      },
      shadow: m
    },
    PAINTED: {
      stone: {
        draw: function draw(a, b) {
          var c = b.getX(a.x),
              e = b.getY(a.y),
              d = b.stoneRadius,
              f;
          a.c == g.W ? (f = this.createRadialGradient(c - 2 * d / 5, e - 2 * d / 5, 2, c - d / 5, e - d / 5, 4 * d / 5), f.addColorStop(0, "#fff"), f.addColorStop(1, "#ddd")) : (f = this.createRadialGradient(c - 2 * d / 5, e - 2 * d / 5, 1, c - d / 5, e - d / 5, 4 * d / 5), f.addColorStop(0, "#111"), f.addColorStop(1, "#000"));
          this.beginPath();
          this.fillStyle = f;
          this.arc(c - b.ls, e - b.ls, Math.max(0, d - .5), 0, 2 * Math.PI, !0);
          this.fill();
          this.beginPath();
          this.lineWidth = d / 6;
          a.c == g.W ? (this.strokeStyle = "#999", this.arc(c + d / 8, e + d / 8, d / 2, 0, Math.PI / 2, !1)) : (this.strokeStyle = "#ccc", this.arc(c - d / 8, e - d / 8, d / 2, Math.PI, 1.5 * Math.PI));
          this.stroke();
        }
      },
      shadow: m
    },
    GLOW: {
      stone: {
        draw: function draw(a, b) {
          var c = b.getX(a.x),
              e = b.getY(a.y),
              d = b.stoneRadius,
              f;
          a.c == g.W ? (f = this.createRadialGradient(c - 2 * d / 5, e - 2 * d / 5, d / 3, c - d / 5, e - d / 5, 8 * d / 5), f.addColorStop(0, "#fff"), f.addColorStop(1, "#666")) : (f = this.createRadialGradient(c - 2 * d / 5, e - 2 * d / 5, 1, c - d / 5, e - d / 5, 3 * d / 5), f.addColorStop(0, "#555"), f.addColorStop(1, "#000"));
          this.beginPath();
          this.fillStyle = f;
          this.arc(c - b.ls, e - b.ls, Math.max(0, d - .5), 0, 2 * Math.PI, !0);
          this.fill();
        }
      },
      shadow: m
    },
    SHELL: {
      stone: {
        draw: function draw(a, b) {
          var c,
              e,
              d = b.stoneRadius;
          w = w || Math.ceil(9999999 * Math.random());
          c = b.getX(a.x);
          e = b.getY(a.y);
          var f;
          f = a.c == g.W ? "#aaa" : "#000";
          this.beginPath();
          this.fillStyle = f;
          this.arc(c - b.ls, e - b.ls, Math.max(0, d - .5), 0, 2 * Math.PI, !0);
          this.fill();

          if (a.c == g.W) {
            f = w % (3 + a.x * b.size + a.y) % 3;
            var n = b.size * b.size + a.x * b.size + a.y,
                n = 2 / n * (w % n);
            0 == f ? y({
              ctx: this,
              x: c,
              y: e,
              radius: d,
              angle: n,
              lines: [.1, .12, .11, .1, .09, .09, .09, .09],
              factor: .25,
              thickness: 1.75
            }) : 1 == f ? y({
              ctx: this,
              x: c,
              y: e,
              radius: d,
              angle: n,
              lines: [.1, .09, .08, .07, .06, .06, .06, .06, .06, .06, .06],
              factor: .2,
              thickness: 1.5
            }) : y({
              ctx: this,
              x: c,
              y: e,
              radius: d,
              angle: n,
              lines: [.12, .14, .13, .12, .12, .12],
              factor: .3,
              thickness: 2
            });
            f = this.createRadialGradient(c - 2 * d / 5, e - 2 * d / 5, d / 3, c - d / 5, e - d / 5, 5 * d / 5);
            f.addColorStop(0, "rgba(255,255,255,0.9)");
            f.addColorStop(1, "rgba(255,255,255,0)");
          } else f = this.createRadialGradient(c + .4 * d, e + .4 * d, 0, c + .5 * d, e + .5 * d, d), f.addColorStop(0, "rgba(32,32,32,1)"), f.addColorStop(1, "rgba(0,0,0,0)"), this.beginPath(), this.fillStyle = f, this.arc(c - b.ls, e - b.ls, Math.max(0, d - .5), 0, 2 * Math.PI, !0), this.fill(), f = this.createRadialGradient(c - .4 * d, e - .4 * d, 1, c - .5 * d, e - .5 * d, 1.5 * d), f.addColorStop(0, "rgba(64,64,64,1)"), f.addColorStop(1, "rgba(0,0,0,0)");

          this.beginPath();
          this.fillStyle = f;
          this.arc(c - b.ls, e - b.ls, Math.max(0, d - .5), 0, 2 * Math.PI, !0);
          this.fill();
        }
      },
      shadow: m
    },
    MONO: {
      stone: {
        draw: function draw(a, b) {
          var c = b.getX(a.x),
              e = b.getY(a.y),
              d = b.stoneRadius,
              f = k("markupLinesWidth", b) || 1;
          this.fillStyle = a.c == g.W ? "white" : "black";
          this.beginPath();
          this.arc(c, e, Math.max(0, d - f), 0, 2 * Math.PI, !0);
          this.fill();
          this.lineWidth = f;
          this.strokeStyle = "black";
          this.stroke();
        }
      }
    },
    CR: {
      stone: {
        draw: function draw(a, b) {
          var c = b.getX(a.x),
              e = b.getY(a.y),
              d = b.stoneRadius;
          this.strokeStyle = a.c || p(b, a.x, a.y);
          this.lineWidth = a.lineWidth || k("markupLinesWidth", b) || 1;
          this.beginPath();
          this.arc(c - b.ls, e - b.ls, d / 2, 0, 2 * Math.PI, !0);
          this.stroke();
        }
      }
    },
    LB: {
      stone: {
        draw: function draw(a, b) {
          var c = b.getX(a.x),
              e = b.getY(a.y),
              d = b.stoneRadius,
              f = a.font || k("font", b) || "";
          this.fillStyle = a.c || p(b, a.x, a.y);
          this.font = 1 == a.text.length ? Math.round(1.5 * d) + "px " + f : 2 == a.text.length ? Math.round(1.2 * d) + "px " + f : Math.round(d) + "px " + f;
          this.beginPath();
          this.textBaseline = "middle";
          this.textAlign = "center";
          this.fillText(a.text, c, e, 2 * d);
        }
      },
      grid: {
        draw: function draw(a, b) {
          if (!D(b, a.x, a.y) && !a._nodraw) {
            var c = b.getX(a.x),
                e = b.getY(a.y),
                d = b.stoneRadius;
            this.clearRect(c - d, e - d, 2 * d, 2 * d);
          }
        },
        clear: function clear(a, b) {
          if (!D(b, a.x, a.y)) {
            a._nodraw = !0;
            var c;
            b.grid.clear();
            b.grid.draw(b);

            for (var e = 0; e < b.size; e++) {
              for (var d = 0; d < b.size; d++) {
                for (var f = 0; f < b.obj_arr[e][d].length; f++) {
                  var g = b.obj_arr[e][d][f];
                  c = g.type ? "string" == typeof g.type ? h.drawHandlers[g.type] : g.type : b.stoneHandler;
                  c.grid && c.grid.draw.call(b.grid.getContext(g), g, b);
                }
              }
            }

            for (e = 0; e < b.obj_list.length; e++) {
              g = b.obj_list[e], c = g.handler, c.grid && c.grid.draw.call(b.grid.getContext(g.args), g.args, b);
            }

            delete a._nodraw;
          }
        }
      }
    },
    SQ: {
      stone: {
        draw: function draw(a, b) {
          var c = b.getX(a.x),
              e = b.getY(a.y),
              d = Math.round(b.stoneRadius);
          this.strokeStyle = a.c || p(b, a.x, a.y);
          this.lineWidth = a.lineWidth || k("markupLinesWidth", b) || 1;
          this.beginPath();
          this.rect(Math.round(c - d / 2) - b.ls, Math.round(e - d / 2) - b.ls, d, d);
          this.stroke();
        }
      }
    },
    TR: {
      stone: {
        draw: function draw(a, b) {
          var c = b.getX(a.x),
              e = b.getY(a.y),
              d = b.stoneRadius;
          this.strokeStyle = a.c || p(b, a.x, a.y);
          this.lineWidth = a.lineWidth || k("markupLinesWidth", b) || 1;
          this.beginPath();
          this.moveTo(c - b.ls, e - b.ls - Math.round(d / 2));
          this.lineTo(Math.round(c - d / 2) - b.ls, Math.round(e + d / 3) + b.ls);
          this.lineTo(Math.round(c + d / 2) + b.ls, Math.round(e + d / 3) + b.ls);
          this.closePath();
          this.stroke();
        }
      }
    },
    MA: {
      stone: {
        draw: function draw(a, b) {
          var c = b.getX(a.x),
              e = b.getY(a.y),
              d = b.stoneRadius;
          this.strokeStyle = a.c || p(b, a.x, a.y);
          this.lineCap = "round";
          this.lineWidth = 2 * (a.lineWidth || k("markupLinesWidth", b) || 1) - 1;
          this.beginPath();
          this.moveTo(Math.round(c - d / 2), Math.round(e - d / 2));
          this.lineTo(Math.round(c + d / 2), Math.round(e + d / 2));
          this.moveTo(Math.round(c + d / 2) - 1, Math.round(e - d / 2));
          this.lineTo(Math.round(c - d / 2) - 1, Math.round(e + d / 2));
          this.stroke();
          this.lineCap = "butt";
        }
      }
    },
    SL: {
      stone: {
        draw: function draw(a, b) {
          var c = b.getX(a.x),
              e = b.getY(a.y),
              d = b.stoneRadius;
          this.fillStyle = a.c || p(b, a.x, a.y);
          this.beginPath();
          this.rect(c - d / 2, e - d / 2, d, d);
          this.fill();
        }
      }
    },
    SM: {
      stone: {
        draw: function draw(a, b) {
          var c = b.getX(a.x),
              e = b.getY(a.y),
              d = b.stoneRadius;
          this.strokeStyle = a.c || p(b, a.x, a.y);
          this.lineWidth = 2 * (a.lineWidth || k("markupLinesWidth", b) || 1);
          this.beginPath();
          this.arc(c - d / 3, e - d / 3, d / 6, 0, 2 * Math.PI, !0);
          this.stroke();
          this.beginPath();
          this.arc(c + d / 3, e - d / 3, d / 6, 0, 2 * Math.PI, !0);
          this.stroke();
          this.beginPath();
          this.moveTo(c - d / 1.5, e);
          this.bezierCurveTo(c - d / 1.5, e + d / 2, c + d / 1.5, e + d / 2, c + d / 1.5, e);
          this.stroke();
        }
      }
    },
    outline: {
      stone: {
        draw: function draw(a, b) {
          this.globalAlpha = a.alpha ? a.alpha : .3;
          a.stoneStyle ? h.drawHandlers[a.stoneStyle].stone.draw.call(this, a, b) : b.stoneHandler.stone.draw.call(this, a, b);
          this.globalAlpha = 1;
        }
      }
    },
    mini: {
      stone: {
        draw: function draw(a, b) {
          b.stoneRadius /= 2;
          a.stoneStyle ? h.drawHandlers[a.stoneStyle].stone.draw.call(this, a, b) : b.stoneHandler.stone.draw.call(this, a, b);
          b.stoneRadius *= 2;
        }
      }
    }
  };
  h.coordinates = {
    grid: {
      draw: function draw(a, b) {
        var c, e, d, f, g, h;
        this.fillStyle = k("coordinatesColor", b);
        this.textBaseline = "middle";
        this.textAlign = "center";
        this.font = b.stoneRadius + "px " + (b.font || "");
        d = b.getX(-.75);
        f = b.getX(b.size - .25);
        g = b.getY(-.75);
        h = b.getY(b.size - .25);

        for (var l = 0; l < b.size; l++) {
          c = l + 65, 73 <= c && c++, e = b.getY(l), this.fillText(b.size - l, d, e), this.fillText(b.size - l, f, e), e = b.getX(l), this.fillText(String.fromCharCode(c), e, g), this.fillText(String.fromCharCode(c), e, h);
        }

        this.fillStyle = "black";
      }
    }
  };

  h.CanvasLayer = function () {
    this.element = document.createElement("canvas");
    this.context = this.element.getContext("2d");
    this.pixelRatio = v.devicePixelRatio || 1;
    1 < this.pixelRatio && this.context.scale(this.pixelRatio, this.pixelRatio);
  };

  h.CanvasLayer.prototype = {
    constructor: h.CanvasLayer,
    setDimensions: function setDimensions(a, b) {
      this.element.width = a;
      this.element.style.width = a / this.pixelRatio + "px";
      this.element.height = b;
      this.element.style.height = b / this.pixelRatio + "px";
    },
    appendTo: function appendTo(a, b) {
      this.element.style.position = "absolute";
      this.element.style.zIndex = b;
      a.appendChild(this.element);
    },
    removeFrom: function removeFrom(a) {
      a.removeChild(this.element);
    },
    getContext: function getContext() {
      return this.context;
    },
    draw: function draw(a) {},
    clear: function clear() {
      this.context.clearRect(0, 0, this.element.width, this.element.height);
    }
  };
  h.GridLayer = g.extendClass(h.CanvasLayer, function () {
    this.super.call(this);
  });

  h.GridLayer.prototype.draw = function (a) {
    var b;
    this.context.beginPath();
    this.context.lineWidth = k("gridLinesWidth", a);
    this.context.strokeStyle = k("gridLinesColor", a);
    var c = Math.round(a.left),
        e = Math.round(a.top),
        d = Math.round(a.fieldWidth * (a.size - 1)),
        f = Math.round(a.fieldHeight * (a.size - 1));
    this.context.strokeRect(c - a.ls, e - a.ls, d, f);

    for (var g = 1; g < a.size - 1; g++) {
      b = Math.round(a.getX(g)) - a.ls, this.context.moveTo(b, e), this.context.lineTo(b, e + f), b = Math.round(a.getY(g)) - a.ls, this.context.moveTo(c, b), this.context.lineTo(c + d, b);
    }

    this.context.stroke();
    this.context.fillStyle = k("starColor", a);
    if (a.starPoints[a.size]) for (var h in a.starPoints[a.size]) {
      this.context.beginPath(), this.context.arc(a.getX(a.starPoints[a.size][h].x) - a.ls, a.getY(a.starPoints[a.size][h].y) - a.ls, k("starSize", a), 0, 2 * Math.PI, !0), this.context.fill();
    }
  };

  h.MultipleCanvasLayer = g.extendClass(h.CanvasLayer, function () {
    this.init(4);
  });

  h.MultipleCanvasLayer.prototype.init = function (a) {
    var b, c;
    this.layers = a;
    this.elements = [];
    this.contexts = [];
    this.pixelRatio = v.devicePixelRatio || 1;

    for (var e = 0; e < a; e++) {
      b = document.createElement("canvas"), c = b.getContext("2d"), 1 < this.pixelRatio && c.scale(this.pixelRatio, this.pixelRatio), this.elements.push(b), this.contexts.push(c);
    }
  };

  h.MultipleCanvasLayer.prototype.appendTo = function (a, b) {
    for (var c = 0; c < this.layers; c++) {
      this.elements[c].style.position = "absolute", this.elements[c].style.zIndex = b, a.appendChild(this.elements[c]);
    }
  };

  h.MultipleCanvasLayer.prototype.removeFrom = function (a) {
    for (var b = 0; b < this.layers; b++) {
      a.removeChild(this.elements[b]);
    }
  };

  h.MultipleCanvasLayer.prototype.getContext = function (a) {
    return a.x % 2 ? a.y % 2 ? this.contexts[0] : this.contexts[1] : a.y % 2 ? this.contexts[2] : this.contexts[3];
  };

  h.MultipleCanvasLayer.prototype.clear = function (a, b) {
    for (var c = 0; c < this.layers; c++) {
      this.contexts[c].clearRect(0, 0, this.elements[c].width, this.elements[c].height);
    }
  };

  h.MultipleCanvasLayer.prototype.setDimensions = function (a, b) {
    for (var c = 0; c < this.layers; c++) {
      this.elements[c].width = a, this.elements[c].style.width = a / this.pixelRatio + "px", this.elements[c].height = b, this.elements[c].style.height = b / this.pixelRatio + "px";
    }
  };

  h.ShadowLayer = g.extendClass(h.MultipleCanvasLayer, function (a, b, c) {
    this.init(2);
    this.shadowSize = b === q ? 1 : b;
    this.board = a;
  });

  h.ShadowLayer.prototype.getContext = function (a) {
    return a.x % 2 && a.y % 2 || !(a.x % 2 || a.y % 2) ? this.contexts[0] : this.contexts[1];
  };

  h.ShadowLayer.prototype.setDimensions = function (a, b) {
    this.super.prototype.setDimensions.call(this, a, b);

    for (var c = 0; c < this.layers; c++) {
      this.contexts[c].setTransform(1, 0, 0, 1, Math.round(this.shadowSize * this.board.stoneRadius / 7), Math.round(this.shadowSize * this.board.stoneRadius / 7));
    }
  };

  var E = function E(a, b) {
    var c = b.getX(a.x),
        e = b.getY(a.y),
        d = b.stoneRadius;
    this.clearRect(c - 2 * d - b.ls, e - 2 * d - b.ls, 4 * d, 4 * d);
  },
      z = function z() {
    return 3 * this.width / (4 * (this.bx + 1 - this.tx) + 2) - this.fieldWidth * this.tx;
  },
      A = function A() {
    return 3 * this.height / (4 * (this.by + 1 - this.ty) + 2) - this.fieldHeight * this.ty;
  },
      B = function B(a, b) {
    for (var c, e = 0; e < this.obj_arr[a][b].length; e++) {
      var d = this.obj_arr[a][b][e];
      c = d.type ? "string" == typeof d.type ? h.drawHandlers[d.type] : d.type : this.stoneHandler;

      for (var f in c) {
        c[f].clear ? c[f].clear.call(this[f].getContext(d), d, this) : E.call(this[f].getContext(d), d, this);
      }
    }
  },
      x = function x(a, b) {
    for (var c, e = 0; e < this.obj_arr[a][b].length; e++) {
      var d = this.obj_arr[a][b][e];
      c = d.type ? "string" == typeof d.type ? h.drawHandlers[d.type] : d.type : this.stoneHandler;

      for (var f in c) {
        c[f].draw.call(this[f].getContext(d), d, this);
      }
    }
  },
      F = function F(a) {
    var b;
    b = a.layerX * this.pixelRatio;
    b -= this.left;
    b /= this.fieldWidth;
    b = Math.round(b);
    a = a.layerY * this.pixelRatio;
    a -= this.top;
    a /= this.fieldHeight;
    a = Math.round(a);
    return {
      x: b >= this.size ? -1 : b,
      y: a >= this.size ? -1 : a
    };
  },
      C = function C() {
    this.element.style.width = this.width / this.pixelRatio + "px";
    this.element.style.height = this.height / this.pixelRatio + "px";
    this.stoneRadius = k("stoneSize", this);
    this.ls = k("linesShift", this);

    for (var a = 0; a < this.layers.length; a++) {
      this.layers[a].setDimensions(this.width, this.height);
    }
  };

  h.prototype = {
    constructor: h,
    init: function init() {
      this.obj_arr = [];

      for (var a = 0; a < this.size; a++) {
        this.obj_arr[a] = [];

        for (var b = 0; b < this.size; b++) {
          this.obj_arr[a][b] = [];
        }
      }

      this.obj_list = [];
      this.layers = [];
      this.listeners = [];
      this.element = document.createElement("div");
      this.element.className = "wgo-board";
      this.element.style.position = "relative";
      this.background && ("#" == this.background[0] ? this.element.style.backgroundColor = this.background : this.element.style.backgroundImage = "url('" + this.background + "')");
      this.grid = new h.GridLayer();
      this.shadow = new h.ShadowLayer(this, k("shadowSize", this));
      this.stone = new h.MultipleCanvasLayer();
      this.addLayer(this.grid, 100);
      this.addLayer(this.shadow, 200);
      this.addLayer(this.stone, 300);
    },
    setWidth: function setWidth(a) {
      this.width = a;
      this.width *= this.pixelRatio;
      this.fieldHeight = this.fieldWidth = 4 * this.width / (4 * (this.bx + 1 - this.tx) + 2);
      this.left = z.call(this);
      this.height = (this.by - this.ty + 1.5) * this.fieldHeight;
      this.top = A.call(this);
      C.call(this);
      this.redraw();
    },
    setHeight: function setHeight(a) {
      this.height = a;
      this.height *= this.pixelRatio;
      this.fieldWidth = this.fieldHeight = 4 * this.height / (4 * (this.by + 1 - this.ty) + 2);
      this.top = A.call(this);
      this.width = (this.bx - this.tx + 1.5) * this.fieldWidth;
      this.left = z.call(this);
      C.call(this);
      this.redraw();
    },
    setDimensions: function setDimensions(a, b) {
      this.width = a || parseInt(this.element.style.width, 10);
      this.width *= this.pixelRatio;
      this.height = b || parseInt(this.element.style.height, 10);
      this.height *= this.pixelRatio;
      this.fieldWidth = 4 * this.width / (4 * (this.bx + 1 - this.tx) + 2);
      this.fieldHeight = 4 * this.height / (4 * (this.by + 1 - this.ty) + 2);
      this.left = z.call(this);
      this.top = A.call(this);
      C.call(this);
      this.redraw();
    },
    getSection: function getSection() {
      return this.section;
    },
    setSection: function setSection(a, b, c, e) {
      this.section = "object" == _typeof(a) ? a : {
        top: a,
        right: b,
        bottom: c,
        left: e
      };
      this.tx = this.section.left;
      this.ty = this.section.top;
      this.bx = this.size - 1 - this.section.right;
      this.by = this.size - 1 - this.section.bottom;
      this.setDimensions();
    },
    setSize: function setSize(a) {
      a = a || 19;

      if (a != this.size) {
        this.size = a;
        this.obj_arr = [];

        for (a = 0; a < this.size; a++) {
          this.obj_arr[a] = [];

          for (var b = 0; b < this.size; b++) {
            this.obj_arr[a][b] = [];
          }
        }

        this.bx = this.size - 1 - this.section.right;
        this.by = this.size - 1 - this.section.bottom;
        this.setDimensions();
      }
    },
    redraw: function redraw() {
      try {
        for (var a = 0; a < this.layers.length; a++) {
          this.layers[a].clear(this), this.layers[a].draw(this);
        }

        for (a = 0; a < this.size; a++) {
          for (var b = 0; b < this.size; b++) {
            x.call(this, a, b);
          }
        }

        for (a = 0; a < this.obj_list.length; a++) {
          var c = this.obj_list[a],
              e = c.handler,
              d;

          for (d in e) {
            e[d].draw.call(this[d].getContext(c.args), c.args, this);
          }
        }
      } catch (f) {
        console.log("WGo board failed to render. Error: " + f.message);
      }
    },
    getX: function getX(a) {
      return this.left + a * this.fieldWidth;
    },
    getY: function getY(a) {
      return this.top + a * this.fieldHeight;
    },
    addLayer: function addLayer(a, b) {
      a.appendTo(this.element, b);
      a.setDimensions(this.width, this.height);
      this.layers.push(a);
    },
    removeLayer: function removeLayer(a) {
      var b = this.layers.indexOf(a);
      0 <= b && (this.layers.splice(b, 1), a.removeFrom(this.element));
    },
    update: function update(a) {
      var b;
      if (a.remove && "all" == a.remove) this.removeAllObjects();else if (a.remove) for (b = 0; b < a.remove.length; b++) {
        this.removeObject(a.remove[b]);
      }
      if (a.add) for (b = 0; b < a.add.length; b++) {
        this.addObject(a.add[b]);
      }
    },
    addObject: function addObject(a) {
      if (a.constructor == Array) for (var b = 0; b < a.length; b++) {
        this.addObject(a[b]);
      } else try {
        B.call(this, a.x, a.y);

        for (var b = this.obj_arr[a.x][a.y], c = 0; c < b.length; c++) {
          if (b[c].type == a.type) {
            b[c] = a;
            x.call(this, a.x, a.y);
            return;
          }
        }

        a.type ? b.push(a) : b.unshift(a);
        x.call(this, a.x, a.y);
      } catch (e) {
        console.log("WGo board failed to render. Error: " + e.message);
      }
    },
    removeObject: function removeObject(a) {
      if (a.constructor == Array) for (var b = 0; b < a.length; b++) {
        this.removeObject(a[b]);
      } else try {
        for (var c = 0; c < this.obj_arr[a.x][a.y].length; c++) {
          if (this.obj_arr[a.x][a.y][c].type == a.type) {
            b = c;
            break;
          }
        }

        b !== q && (B.call(this, a.x, a.y), this.obj_arr[a.x][a.y].splice(b, 1), x.call(this, a.x, a.y));
      } catch (e) {
        console.log("WGo board failed to render. Error: " + e.message);
      }
    },
    removeObjectsAt: function removeObjectsAt(a, b) {
      this.obj_arr[a][b].length && (B.call(this, a, b), this.obj_arr[a][b] = []);
    },
    removeAllObjects: function removeAllObjects() {
      this.obj_arr = [];

      for (var a = 0; a < this.size; a++) {
        this.obj_arr[a] = [];

        for (var b = 0; b < this.size; b++) {
          this.obj_arr[a][b] = [];
        }
      }

      this.redraw();
    },
    addCustomObject: function addCustomObject(a, b) {
      this.obj_list.push({
        handler: a,
        args: b
      });
      this.redraw();
    },
    removeCustomObject: function removeCustomObject(a, b) {
      for (var c = 0; c < this.obj_list.length; c++) {
        var e = this.obj_list[c];
        if (e.handler == a && e.args == b) return this.obj_list.splice(c, 1), this.redraw(), !0;
      }

      return !1;
    },
    addEventListener: function addEventListener(a, b) {
      var c = this,
          e = {
        type: a,
        callback: b,
        handleEvent: function handleEvent(a) {
          var e = F.call(c, a);
          b(e.x, e.y, a);
        }
      };
      this.element.addEventListener(a, e, !0);
      this.listeners.push(e);
    },
    removeEventListener: function removeEventListener(a, b) {
      for (var c = 0; c < this.listeners.length; c++) {
        var e = this.listeners[c];
        if (e.type == a && e.callback == b) return this.element.removeEventListener(e.type, e, !0), this.listeners.splice(c, 1), !0;
      }

      return !1;
    },
    getState: function getState() {
      return {
        objects: g.clone(this.obj_arr),
        custom: g.clone(this.obj_list)
      };
    },
    restoreState: function restoreState(a) {
      this.obj_arr = a.objects || this.obj_arr;
      this.obj_list = a.custom || this.obj_list;
      this.redraw();
    }
  };
  h.default = {
    size: 19,
    width: 0,
    height: 0,
    font: "Calibri",
    lineWidth: 1,
    autoLineWidth: !1,
    starPoints: {
      19: [{
        x: 3,
        y: 3
      }, {
        x: 9,
        y: 3
      }, {
        x: 15,
        y: 3
      }, {
        x: 3,
        y: 9
      }, {
        x: 9,
        y: 9
      }, {
        x: 15,
        y: 9
      }, {
        x: 3,
        y: 15
      }, {
        x: 9,
        y: 15
      }, {
        x: 15,
        y: 15
      }],
      13: [{
        x: 3,
        y: 3
      }, {
        x: 9,
        y: 3
      }, {
        x: 3,
        y: 9
      }, {
        x: 9,
        y: 9
      }],
      9: [{
        x: 4,
        y: 4
      }]
    },
    stoneHandler: h.drawHandlers.SHELL,
    starSize: 1,
    shadowSize: 1,
    stoneSize: 1,
    section: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    background: g.DIR + "wood1.jpg",
    theme: {}
  };
  g.Board = h;

  var s = function s(a) {
    this.size = a || 19;
    this.schema = [];

    for (a = 0; a < this.size * this.size; a++) {
      this.schema[a] = 0;
    }
  };

  s.prototype = {
    constructor: g.Position,
    get: function get(a, b) {
      return 0 > a || 0 > b || a >= this.size || b >= this.size ? q : this.schema[a * this.size + b];
    },
    set: function set(a, b, c) {
      this.schema[a * this.size + b] = c;
      return this;
    },
    clear: function clear() {
      for (var a = 0; a < this.size * this.size; a++) {
        this.schema[a] = 0;
      }

      return this;
    },
    clone: function clone() {
      var a = new s(this.size);
      a.schema = this.schema.slice(0);
      return a;
    },
    compare: function compare(a) {
      for (var b = [], c = [], e = 0; e < this.size * this.size; e++) {
        this.schema[e] && !a.schema[e] ? c.push({
          x: Math.floor(e / this.size),
          y: e % this.size
        }) : this.schema[e] != a.schema[e] && b.push({
          x: Math.floor(e / this.size),
          y: e % this.size,
          c: a.schema[e]
        });
      }

      return {
        add: b,
        remove: c
      };
    }
  };
  g.Position = s;

  var m = function m(a, b, c, e) {
    this.size = a || 19;
    this.repeating = b === q ? "KO" : b;
    this.allow_rewrite = c || !1;
    this.allow_suicide = e || !1;
    this.stack = [];
    this.stack[0] = new s(this.size);
    this.stack[0].capCount = {
      black: 0,
      white: 0
    };
    this.turn = g.B;
    Object.defineProperty(this, "position", {
      get: function get() {
        return this.stack[this.stack.length - 1];
      },
      set: function set(a) {
        this.stack[this.stack.length - 1] = a;
      }
    });
  },
      t = function t(a, b, c, e, d) {
    0 <= c && c < a.size && 0 <= e && e < a.size && a.get(c, e) == d && (a.set(c, e, 0), b.push({
      x: c,
      y: e
    }), t(a, b, c, e - 1, d), t(a, b, c, e + 1, d), t(a, b, c - 1, e, d), t(a, b, c + 1, e, d));
  },
      u = function u(a, b, c, e, d) {
    if (0 > c || c >= a.size || 0 > e || e >= a.size) return !0;
    if (0 == a.get(c, e)) return !1;
    if (!0 == b.get(c, e) || a.get(c, e) == -d) return !0;
    b.set(c, e, !0);
    return u(a, b, c, e - 1, d) && u(a, b, c, e + 1, d) && u(a, b, c - 1, e, d) && u(a, b, c + 1, e, d);
  },
      l = function l(a, b, c, e) {
    var d = [];

    if (0 <= b && b < a.size && 0 <= c && c < a.size && a.get(b, c) == e) {
      var f = new s(a.size);
      u(a, f, b, c, e) && t(a, d, b, c, e);
    }

    return d;
  };

  m.prototype = {
    constructor: m,
    getPosition: function getPosition() {
      return this.stack[this.stack.length - 1];
    },
    play: function play(a, b, c, e) {
      if (!this.isOnBoard(a, b)) return 1;
      if (!this.allow_rewrite && 0 != this.position.get(a, b)) return 2;
      c || (c = this.turn);
      var d = this.position.clone();
      d.set(a, b, c);
      var f = c,
          h = l(d, a - 1, b, -c).concat(l(d, a + 1, b, -c), l(d, a, b - 1, -c), l(d, a, b + 1, -c));

      if (!h.length) {
        var k = new s(this.size);
        if (u(d, k, a, b, c)) if (this.allow_suicide) f = -c, t(d, h, a, b, c);else return 3;
      }

      if (k = this.repeating) {
        a: {
          var m;
          if ("KO" == this.repeating && 0 <= this.stack.length - 2) m = this.stack.length - 2;else if ("ALL" == this.repeating) m = 0;else {
            a = !0;
            break a;
          }

          for (var p = this.stack.length - 2; p >= m; p--) {
            if (this.stack[p].get(a, b) == d.get(a, b)) {
              for (var k = !0, q = 0; q < this.size * this.size; q++) {
                if (this.stack[p].schema[q] != d.schema[q]) {
                  k = !1;
                  break;
                }
              }

              if (k) {
                a = !1;
                break a;
              }
            }
          }

          a = !0;
        }

        k = !a;
      }

      if (k) return 4;
      if (e) return !1;
      d.color = c;
      d.capCount = {
        black: this.position.capCount.black,
        white: this.position.capCount.white
      };
      f == g.B ? d.capCount.black += h.length : d.capCount.white += h.length;
      this.pushPosition(d);
      this.turn = -c;
      return h;
    },
    pass: function pass(a) {
      this.pushPosition();
      a ? (this.position.color = a, this.turn = -a) : (this.position.color = this.turn, this.turn = -this.turn);
    },
    isValid: function isValid(a, b, c) {
      return "number" != typeof this.play(a, b, c, !0);
    },
    isOnBoard: function isOnBoard(a, b) {
      return 0 <= a && 0 <= b && a < this.size && b < this.size;
    },
    addStone: function addStone(a, b, c) {
      return this.isOnBoard(a, b) && 0 == this.position.get(a, b) ? (this.position.set(a, b, c || 0), !0) : !1;
    },
    removeStone: function removeStone(a, b) {
      return this.isOnBoard(a, b) && 0 != this.position.get(a, b) ? (this.position.set(a, b, 0), !0) : !1;
    },
    setStone: function setStone(a, b, c) {
      return this.isOnBoard(a, b) ? (this.position.set(a, b, c || 0), !0) : !1;
    },
    getStone: function getStone(a, b) {
      return this.isOnBoard(a, b) ? this.position.get(a, b) : 0;
    },
    pushPosition: function pushPosition(a) {
      a || (a = this.position.clone(), a.capCount = {
        black: this.position.capCount.black,
        white: this.position.capCount.white
      }, a.color = this.position.color);
      this.stack.push(a);
      a.color && (this.turn = -a.color);
      return this;
    },
    popPosition: function popPosition() {
      var a = null;
      0 < this.stack.length && (a = this.stack.pop(), this.turn = 0 == this.stack.length ? g.B : this.position.color ? -this.position.color : -this.turn);
      return a;
    },
    firstPosition: function firstPosition() {
      this.stack = [];
      this.stack[0] = new s(this.size);
      this.stack[0].capCount = {
        black: 0,
        white: 0
      };
      this.turn = g.B;
      return this;
    },
    getCaptureCount: function getCaptureCount(a) {
      return a == g.B ? this.position.capCount.black : this.position.capCount.white;
    },
    validatePosition: function validatePosition() {
      for (var a, b, c = 0, e = 0, d = [], f = this.position.clone(), h = 0; h < this.size; h++) {
        for (var k = 0; k < this.size; k++) {
          if (a = this.position.get(h, k)) b = d.length, d = d.concat(l(f, h - 1, k, -a), l(f, h + 1, k, -a), l(f, h, k - 1, -a), l(f, h, k + 1, -a)), a == g.B ? e += d - b : c += d - b;
        }
      }

      this.position.capCount.black += e;
      this.position.capCount.white += c;
      this.position.schema = f.schema;
      return d;
    }
  };
  g.Game = m;
  v.WGo = g;
})(window);

/***/ }),

/***/ "./static/dtale/side/wgo/wgo.player.min.js":
/*!*************************************************!*\
  !*** ./static/dtale/side/wgo/wgo.player.min.js ***!
  \*************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! MIT license, more info: wgo.waltheri.net */
(function (b, p) {
  var g = function g(u) {
    var a = new r(JSON.parse(JSON.stringify(u.getProperties()))),
        c;

    for (c in u.children) {
      a.appendChild(g(u.children[c]));
    }

    return a;
  },
      f = function f(u, a) {
    var c;
    if (a[u] !== p) return a[u];

    for (var h in a.children) {
      if (c = f(u, a.children[h])) return c;
    }

    return !1;
  },
      l = function l(a, c) {
    a.push(JSON.parse(JSON.stringify(c.getProperties())));

    if (1 < c.children.length) {
      for (var h = [], e = 0; e < c.children.length; e++) {
        var d = [];
        l(d, c.children[e]);
        h.push(d);
      }

      a.push(h);
    } else c.children.length && l(a, c.children[0]);
  },
      d = function d(c, a) {
    for (var h = a, e, b = 1; b < c.length; b++) {
      if (c[b].constructor == Array) for (var k = 0; k < c[b].length; k++) {
        e = new r(c[b][k][0]), h.appendChild(e), d(c[b][k], e);
      } else e = new r(c[b]), h.insertAfter(e), h = e;
    }
  },
      k = function k(c) {
    return "string" == typeof c ? c.replace(/\\/g, "\\\\").replace(/]/g, "\\]") : c;
  },
      a = function a(c, _a) {
    return String.fromCharCode(97 + c) + String.fromCharCode(97 + _a);
  },
      h = function h(c, a, _h) {
    if (a.length) {
      _h.sgf += c;

      for (var e in a) {
        _h.sgf += "[" + a[e] + "]";
      }
    }
  },
      n = function n(c, e) {
    if (c.move) {
      var d = "";
      c.move.pass || (d = a(c.move.x, c.move.y));
      e.sgf = c.move.c == b.B ? e.sgf + ("B[" + d + "]") : e.sgf + ("W[" + d + "]");
    }

    if (c.setup) {
      var d = [],
          m = [],
          f = [],
          q;

      for (q in c.setup) {
        c.setup[q].c == b.B ? d.push(a(c.setup[q].x, c.setup[q].y)) : c.setup[q].c == b.W ? m.push(a(c.setup[q].x, c.setup[q].y)) : f.push(a(c.setup[q].x, c.setup[q].y));
      }

      h("AB", d, e);
      h("AW", m, e);
      h("AE", f, e);
    }

    if (c.markup) {
      d = {};

      for (q in c.markup) {
        d[c.markup[q].type] = d[c.markup[q].type] || [], "LB" == c.markup[q].type ? d.LB.push(a(c.markup[q].x, c.markup[q].y) + ":" + k(c.markup[q].text)) : d[c.markup[q].type].push(a(c.markup[q].x, c.markup[q].y));
      }

      for (var g in d) {
        h(g, d[g], e);
      }
    }

    q = c.getProperties();

    for (g in q) {
      "object" != _typeof(q[g]) && (e.sgf = "turn" == g ? e.sgf + ("PL[" + (q[g] == b.B ? "B" : "W") + "]") : "comment" == g ? e.sgf + ("C[" + k(q[g]) + "]") : e.sgf + (g + "[" + k(q[g]) + "]"));
    }

    if (1 == c.children.length) e.sgf += "\n;", n(c.children[0], e);else if (1 < c.children.length) for (g in c.children) {
      q = c.children[g], d = e, d.sgf += "(\n;", n(q, d), d.sgf += "\n)";
    }
  },
      m = function m() {
    this.size = 19;
    this.info = {};
    this.root = new r();
    this.propertyCount = this.nodeCount = 0;
  };

  m.prototype = {
    constructor: m,
    clone: function clone() {
      var c = new m();
      c.size = this.size;
      c.info = JSON.parse(JSON.stringify(this.info));
      c.root = g(this.root);
      c.nodeCount = this.nodeCount;
      c.propertyCount = this.propertyCount;
      return c;
    },
    hasComments: function hasComments() {
      return !!f("comment", this.root);
    }
  };

  m.fromSgf = function (c) {
    return b.SGF.parse(c);
  };

  m.fromJGO = function (c) {
    c = "string" == typeof c ? JSON.parse(c) : c;
    var a = new m();
    a.info = JSON.parse(JSON.stringify(c.info));
    a.size = c.size;
    a.nodeCount = c.nodeCount;
    a.propertyCount = c.propertyCount;
    a.root = new r(c.game[0]);
    d(c.game, a.root);
    return a;
  };

  m.prototype.toSgf = function () {
    var c = {
      sgf: "(\n;"
    },
        a = {},
        e;

    for (e in this.info) {
      "black" == e ? (this.info.black.name && (a.PB = k(this.info.black.name)), this.info.black.rank && (a.BR = k(this.info.black.rank)), this.info.black.team && (a.BT = k(this.info.black.team))) : "white" == e ? (this.info.white.name && (a.PW = k(this.info.white.name)), this.info.white.rank && (a.WR = k(this.info.white.rank)), this.info.white.team && (a.WT = k(this.info.white.team))) : a[e] = k(this.info[e]);
    }

    this.size && (a.SZ = this.size);
    a.AP || (a.AP = "WGo.js:2");
    a.FF || (a.FF = "4");
    a.GM || (a.GM = "1");
    a.CA || (a.CA = "UTF-8");

    for (e in a) {
      a[e] && (c.sgf += e + "[" + a[e] + "]");
    }

    n(this.root, c);
    c.sgf += ")";
    return c.sgf;
  };

  m.prototype.toJGO = function (c) {
    var a = {};
    a.size = this.size;
    a.info = JSON.parse(JSON.stringify(this.info));
    a.nodeCount = this.nodeCount;
    a.propertyCount = this.propertyCount;
    a.game = [];
    l(a.game, this.root);
    return c ? JSON.stringify(a) : a;
  };

  var e = function e(c) {
    var a;
    c.name ? (a = b.filterHTML(c.name), c.rank && (a += " (" + b.filterHTML(c.rank) + ")"), c.team && (a += ", " + b.filterHTML(c.team))) : (c.team && (a = b.filterHTML(c.team)), c.rank && (a += " (" + b.filterHTML(c.rank) + ")"));
    return a;
  };

  m.infoFormatters = {
    black: e,
    white: e,
    TM: function TM(c) {
      if (0 == c) return b.t("none");
      var a,
          e = Math.floor(c / 60);
      1 == e ? a = "1 " + b.t("minute") : 1 < e && (a = e + " " + b.t("minutes"));
      e = c % 60;
      1 == e ? a += " 1 " + b.t("second") : 1 < e && (a += " " + e + " " + b.t("seconds"));
      return a;
    },
    RE: function RE(c) {
      return '<a href="javascript: void(0)" onclick="this.parentNode.innerHTML = \'' + b.filterHTML(c) + '\'" title="' + b.t("res-show-tip") + '">' + b.t("show") + "</a>";
    }
  };
  m.infoList = "black white AN CP DT EV GN GC HA ON OT RE RO RU SO TM US PC KM".split(" ");
  b.Kifu = m;

  var c = function c(_c, a, e) {
    for (var h = 0; h < _c.length; h++) {
      if (_c[h].x == a.x && _c[h].y == a.y) {
        _c[h][e] = a[e];
        return;
      }
    }

    _c.push(a);
  },
      q = function q(c, a) {
    if (c) for (var e = 0; e < c.length; e++) {
      if (c[e].x == a.x && c[e].y == a.y) {
        c.splice(e, 1);
        break;
      }
    }
  },
      r = function r(c, a) {
    this.parent = a || null;
    this.children = [];
    if (c) for (var e in c) {
      this[e] = c[e];
    }
  };

  r.prototype = {
    constructor: r,
    getChild: function getChild(c) {
      c = c || 0;
      return this.children[c] ? this.children[c] : null;
    },
    addSetup: function addSetup(a) {
      this.setup = this.setup || [];
      c(this.setup, a, "c");
      return this;
    },
    removeSetup: function removeSetup(c) {
      q(this.setup, c);
      return this;
    },
    addMarkup: function addMarkup(a) {
      this.markup = this.markup || [];
      c(this.markup, a, "type");
      return this;
    },
    removeMarkup: function removeMarkup(c) {
      q(this.markup, c);
      return this;
    },
    remove: function remove() {
      var c = this.parent;
      if (!c) throw new Exception("Root node cannot be removed");

      for (var a in c.children) {
        if (c.children[a] == this) {
          c.children.splice(a, 1);
          break;
        }
      }

      c.children = c.children.concat(this.children);
      this.parent = null;
      return c;
    },
    insertAfter: function insertAfter(c) {
      for (var a in this.children) {
        this.children[a].parent = c;
      }

      c.children = c.children.concat(this.children);
      c.parent = this;
      this.children = [c];
      return c;
    },
    appendChild: function appendChild(c) {
      c.parent = this;
      this.children.push(c);
      return c;
    },
    getProperties: function getProperties() {
      var c = {},
          a;

      for (a in this) {
        this.hasOwnProperty(a) && "children" != a && "parent" != a && "_" != a[0] && (c[a] = this[a]);
      }

      return c;
    }
  };
  b.KNode = r;

  var y = function y(c, a) {
    for (var e = c.size, h = [], d = [], b = 0; b < e * e; b++) {
      c.schema[b] && !a.schema[b] ? d.push({
        x: Math.floor(b / e),
        y: b % e
      }) : c.schema[b] != a.schema[b] && h.push({
        x: Math.floor(b / e),
        y: b % e,
        c: a.schema[b]
      });
    }

    return {
      add: h,
      remove: d
    };
  },
      e = function e(c, a, _e) {
    this.kifu = c;
    this.node = this.kifu.root;
    this.allow_illegal = _e || !1;
    this.game = new b.Game(this.kifu.size, this.allow_illegal ? "NONE" : "KO", this.allow_illegal, this.allow_illegal);
    this.path = {
      m: 0
    };
    this.kifu.info.HA && 1 < this.kifu.info.HA && (this.game.turn = b.W);
    this.change = v(this.game, this.node, !0);
    this.rememberPath = a ? !0 : !1;
  },
      w = function w(c, a) {
    var e = [],
        h,
        d;

    for (d in c) {
      h = !0;

      for (var b in a) {
        if (c[d].x == a[b].x && c[d].y == a[b].y) {
          h = !1;
          break;
        }
      }

      h && e.push(c[d]);
    }

    return e;
  },
      v = function v(c, a, e) {
    a.parent && (a.parent._last_selected = a.parent.children.indexOf(a));

    if (a.move != p) {
      if (a.move.pass) return c.pass(a.move.c), {
        add: [],
        remove: []
      };
      c = c.play(a.move.x, a.move.y, a.move.c);
      if ("number" == typeof c) throw new x(c, a);

      for (var h in c) {
        if (c[h].x == a.move.x && c[h].y == a.move.y) return {
          add: [],
          remove: c
        };
      }

      return {
        add: [a.move],
        remove: c
      };
    }

    e || c.pushPosition();
    e = [];
    var d = [];
    if (a.setup != p) for (h in a.setup) {
      a.setup[h].c ? (c.setStone(a.setup[h].x, a.setup[h].y, a.setup[h].c), e.push(a.setup[h])) : (c.removeStone(a.setup[h].x, a.setup[h].y), d.push(a.setup[h]));
    }
    a.turn && (c.turn = a.turn);
    return {
      add: e,
      remove: d
    };
  },
      z = function z(c) {
    c === p && this.rememberPath && (c = this.node._last_selected);
    c = c || 0;
    var a = this.node.children[c];
    if (!a) return !1;
    var e = v(this.game, a);
    this.path.m++;
    1 < this.node.children.length && (this.path[this.path.m] = c);
    this.node = a;
    return e;
  },
      A = function A() {
    if (!this.node.parent) return !1;
    this.node = this.node.parent;
    this.game.popPosition();
    this.node.turn && (this.game.turn = this.node.turn);
    this.path[this.path.m] !== p && delete this.path[this.path.m];
    this.path.m--;
    return !0;
  },
      B = function B() {
    this.game.firstPosition();
    this.node = this.kifu.root;
    this.path = {
      m: 0
    };
    this.kifu.info.HA && 1 < this.kifu.info.HA && (this.game.turn = b.W);
    this.change = v(this.game, this.node, !0);
  };

  e.prototype = {
    constructor: e,
    next: function next(c) {
      this.change = z.call(this, c);
      return this;
    },
    last: function last() {
      var c;

      for (this.change = {
        add: [],
        remove: []
      }; c = z.call(this);) {
        var a = this.change;
        a.add = w(a.add, c.remove).concat(c.add);
        a.remove = w(a.remove, c.add).concat(c.remove);
      }

      return this;
    },
    previous: function previous() {
      var c = this.game.getPosition();
      A.call(this);
      this.change = y(c, this.game.getPosition());
      return this;
    },
    first: function first() {
      var c = this.game.getPosition();
      B.call(this);
      this.change = y(c, this.game.getPosition());
      return this;
    },
    goTo: function goTo(c) {
      if (c === p) return this;
      var a = this.game.getPosition();
      B.call(this);

      for (var e = 0; e < c.m && z.call(this, c[e + 1]); e++) {
        ;
      }

      this.change = y(a, this.game.getPosition());
      return this;
    },
    previousFork: function previousFork() {
      for (var c = this.game.getPosition(); A.call(this) && 1 == this.node.children.length;) {
        ;
      }

      this.change = y(c, this.game.getPosition());
      return this;
    },
    getPosition: function getPosition() {
      return this.game.getPosition();
    },
    allowIllegalMoves: function allowIllegalMoves(c) {
      c ? (this.game.allow_rewrite = !0, this.game.allow_suicide = !0, this.repeating = "NONE") : (this.game.allow_rewrite = !1, this.game.allow_suicide = !1, this.repeating = "KO");
    }
  };
  b.KifuReader = e;

  var x = function x(c, a) {
    this.name = "InvalidMoveError";
    this.message = "Invalid move in kifu detected. ";

    if (a.move && a.move.c !== p && a.move.x !== p && a.move.y !== p) {
      var e = a.move.x;
      7 < a.move.x && e++;
      String.fromCharCode(e + 65);
      this.message += "Trying to play " + (a.move.c == b.WHITE ? "white" : "black") + " move on " + String.fromCharCode(a.move.x + 65) + "" + (19 - a.move.y);
    } else this.message += "Move object doesn't contain arbitrary attributes.";

    if (c) switch (c) {
      case 1:
        this.message += ", but these coordinates are not on board.";
        break;

      case 2:
        this.message += ", but there already is a stone.";
        break;

      case 3:
        this.message += ", but this move is a suicide.";
        break;

      case 4:
        this.message += ", but this position already occured.";
    } else this.message += ".";
  };

  x.prototype = Error();
  x.prototype.constructor = x;
  b.InvalidMoveError = x;
  b.i18n.en.show = "show";
  b.i18n.en["res-show-tip"] = "Click to show result.";
})(WGo);

(function (b, p) {
  b.SGF = {};

  var g = function g(a, d, b, e, c, k) {
    d = k == d ? "black" : "white";
    b.info[d] = b.info[d] || {};
    b.info[d][a] = c[0];
  },
      f = b.SGF.properties = {};

  f.B = f.W = function (a, d, k, e) {
    d.move = !k[0] || 19 >= a.size && "tt" == k[0] ? {
      pass: !0,
      c: "B" == e ? b.B : b.W
    } : {
      x: k[0].charCodeAt(0) - 97,
      y: k[0].charCodeAt(1) - 97,
      c: "B" == e ? b.B : b.W
    };
  };

  f.AB = f.AW = function (a, d, k, e) {
    for (var c in k) {
      d.addSetup({
        x: k[c].charCodeAt(0) - 97,
        y: k[c].charCodeAt(1) - 97,
        c: "AB" == e ? b.B : b.W
      });
    }
  };

  f.AE = function (a, d, b) {
    for (var e in b) {
      d.addSetup({
        x: b[e].charCodeAt(0) - 97,
        y: b[e].charCodeAt(1) - 97
      });
    }
  };

  f.PL = function (a, d, k) {
    d.turn = "b" == k[0] || "B" == k[0] ? b.B : b.W;
  };

  f.C = function (a, d, b) {
    d.comment = b.join();
  };

  f.LB = function (a, d, b) {
    for (var e in b) {
      d.addMarkup({
        x: b[e].charCodeAt(0) - 97,
        y: b[e].charCodeAt(1) - 97,
        type: "LB",
        text: b[e].substr(3)
      });
    }
  };

  f.CR = f.SQ = f.TR = f.SL = f.MA = function (a, d, b, e) {
    for (var c in b) {
      d.addMarkup({
        x: b[c].charCodeAt(0) - 97,
        y: b[c].charCodeAt(1) - 97,
        type: e
      });
    }
  };

  f.SZ = function (a, d, b) {
    a.size = parseInt(b[0]);
  };

  f.BR = f.WR = g.bind(this, "rank", "BR");
  f.PB = f.PW = g.bind(this, "name", "PB");
  f.BT = f.WT = g.bind(this, "team", "BT");

  f.TM = function (a, d, b, e) {
    a.info[e] = b[0];
    d.BL = b[0];
    d.WL = b[0];
  };

  var l = /\(|\)|(;(\s*[A-Z]+(\s*((\[\])|(\[(.|\s)*?([^\\]\]))))+)*)/g,
      d = /[A-Z]+(\s*((\[\])|(\[(.|\s)*?([^\\]\]))))+/g,
      k = /[A-Z]+/,
      a = /(\[\])|(\[(.|\s)*?([^\\]\]))/g;

  b.SGF.parse = function (h) {
    var f = [],
        g,
        e,
        c,
        q = new b.Kifu(),
        r = null;
    h = h.match(l);

    for (var p in h) {
      if ("(" == h[p]) f.push(r);else if (")" == h[p]) r = f.pop();else {
        r && q.nodeCount++;
        r = r ? r.appendChild(new b.KNode()) : q.root;
        g = h[p].match(d) || [];
        q.propertyCount += g.length;

        for (var w in g) {
          c = k.exec(g[w])[0];
          e = g[w].match(a);

          for (var v in e) {
            e[v] = e[v].substring(1, e[v].length - 1).replace(/\\(?!\\)/g, "");
          }

          if (b.SGF.properties[c]) b.SGF.properties[c](q, r, e, c);else 1 >= e.length && (e = e[0]), r.parent ? r[c] = e : q.info[c] = e;
        }
      }
    }

    return q;
  };
})(WGo);

(function (b) {
  var p = function p(c, a) {
    this.name = "FileError";
    this.message = 1 == a ? "File '" + c + "' is empty." : 2 == a ? "Network error. It is not possible to read '" + c + "'." : "File '" + c + "' hasn't been found on server.";
  };

  p.prototype = Error();
  p.prototype.constructor = p;
  b.FileError = p;

  var g = b.loadFromUrl = function (c, a) {
    var e = new XMLHttpRequest();

    e.onreadystatechange = function () {
      if (4 == e.readyState) if (200 == e.status) {
        if (0 == e.responseText.length) throw new p(c, 1);
        a(e.responseText);
      } else throw new p(c);
    };

    try {
      e.open("GET", c, !0), e.send();
    } catch (d) {
      throw new p(c, 2);
    }
  },
      f = function f(c) {
    c.change && this.board.update(c.change);
    this.temp_marks && this.board.removeObject(this.temp_marks);
    var a = [];
    this.notification();
    c.node.move && this.config.markLastMove && (c.node.move.pass ? this.notification(b.t((c.node.move.c == b.B ? "b" : "w") + "pass")) : a.push({
      type: "CR",
      x: c.node.move.x,
      y: c.node.move.y
    }));
    if (1 < c.node.children.length && this.config.displayVariations) for (var e = 0; e < c.node.children.length; e++) {
      c.node.children[e].move && !c.node.children[e].move.pass && a.push({
        type: "LB",
        text: String.fromCharCode(65 + e),
        x: c.node.children[e].move.x,
        y: c.node.children[e].move.y,
        c: this.board.theme.variationColor || "rgba(0,32,128,0.8)"
      });
    }

    if (c.node.markup) {
      for (e in c.node.markup) {
        for (var d = 0; d < a.length; d++) {
          c.node.markup[e].x == a[d].x && c.node.markup[e].y == a[d].y && (a.splice(d, 1), d--);
        }
      }

      a = a.concat(c.node.markup);
    }

    this.temp_marks = a;
    this.board.addObject(a);
  },
      l = function l(c) {
    this.board.setSize(c.kifu.size);
    this.board.removeAllObjects();
    this.config.enableWheel && this.setWheel(!0);
  },
      d = function d(c, a) {
    return c == a.element || c == a.element ? !1 : c._wgo_scrollable || c.scrollHeight > c.offsetHeight && "auto" == window.getComputedStyle(c).overflow ? !0 : d(c.parentNode, a);
  },
      k = function k(c) {
    var a = c.wheelDelta || -1 * c.detail;
    return d(c.target, this) ? !0 : 0 > a ? (this.next(), this.config.lockScroll && c.preventDefault && c.preventDefault(), !this.config.lockScroll) : 0 < a ? (this.previous(), this.config.lockScroll && c.preventDefault && c.preventDefault(), !this.config.lockScroll) : !0;
  },
      a = function a(c) {
    if (document.querySelector("input:focus, textarea:focus")) return !0;

    switch (c.keyCode) {
      case 39:
        this.next();
        break;

      case 37:
        this.previous();
        break;

      default:
        return !0;
    }

    this.config.lockScroll && c.preventDefault && c.preventDefault();
    return !this.config.lockScroll;
  },
      h = function h(c, a) {
    if (!this.kifuReader || !this.kifuReader.node) return !1;

    for (var e in this.kifuReader.node.children) {
      if (this.kifuReader.node.children[e].move && this.kifuReader.node.children[e].move.x == c && this.kifuReader.node.children[e].move.y == a) {
        this.next(e);
        break;
      }
    }
  },
      n = function n(c) {
    this.config = c;

    for (var a in n.default) {
      void 0 === this.config[a] && void 0 !== n.default[a] && (this.config[a] = n.default[a]);
    }

    this.element = document.createElement("div");
    this.board = new b.Board(this.element, this.config.board);
    this.init();
    this.initGame();
  };

  n.prototype = {
    constructor: n,
    init: function init() {
      this.kifu = null;
      this.listeners = {
        kifuLoaded: [l.bind(this)],
        update: [f.bind(this)],
        frozen: [],
        unfrozen: []
      };
      this.config.kifuLoaded && this.addEventListener("kifuLoaded", this.config.kifuLoaded);
      this.config.update && this.addEventListener("update", this.config.update);
      this.config.frozen && this.addEventListener("frozen", this.config.frozen);
      this.config.unfrozen && this.addEventListener("unfrozen", this.config.unfrozen);
      this.board.addEventListener("click", h.bind(this));
      this.element.addEventListener("click", this.focus.bind(this));
      this.focus();
    },
    initGame: function initGame() {
      this.config.sgf ? this.loadSgf(this.config.sgf, this.config.move) : this.config.json ? this.loadJSON(this.config.json, this.config.move) : this.config.sgfFile && this.loadSgfFromFile(this.config.sgfFile, this.config.move);
    },
    update: function update(c) {
      this.kifuReader && this.kifuReader.change && (c = {
        type: "update",
        op: c,
        target: this,
        node: this.kifuReader.node,
        position: this.kifuReader.getPosition(),
        path: this.kifuReader.path,
        change: this.kifuReader.change
      }, this.dispatchEvent(c));
    },
    loadKifu: function loadKifu(c, a) {
      this.kifu = c;
      this.kifuReader = new b.KifuReader(this.kifu, this.config.rememberPath, this.config.allowIllegalMoves);
      this.dispatchEvent({
        type: "kifuLoaded",
        target: this,
        kifu: this.kifu
      });
      this.update("init");
      a && this.goTo(a);
    },
    loadSgf: function loadSgf(c, a) {
      try {
        this.loadKifu(b.Kifu.fromSgf(c), a);
      } catch (e) {
        this.error(e);
      }
    },
    loadJSON: function loadJSON(c, a) {
      try {
        this.loadKifu(b.Kifu.fromJGO(c), a);
      } catch (e) {
        this.error(e);
      }
    },
    loadSgfFromFile: function loadSgfFromFile(a, e) {
      var d = this;

      try {
        g(a, function (a) {
          d.loadSgf(a, e);
        });
      } catch (b) {
        this.error(b);
      }
    },
    addEventListener: function addEventListener(a, e) {
      this.listeners[a] = this.listeners[a] || [];
      this.listeners[a].push(e);
    },
    removeEventListener: function removeEventListener(a, e) {
      if (this.listeners[a]) {
        var d = this.listeners[a].indexOf(e);
        -1 != d && this.listeners[a].splice(d, 1);
      }
    },
    dispatchEvent: function dispatchEvent(a) {
      if (this.listeners[a.type]) for (var e in this.listeners[a.type]) {
        this.listeners[a.type][e](a);
      }
    },
    notification: function notification(a) {
      console && a && console.log(a);
    },
    help: function help(a) {
      console && console.log(a);
    },
    error: function error(a) {
      if (!b.ERROR_REPORT) throw a;
      console && console.log(a);
    },
    next: function next(a) {
      if (!this.frozen && this.kifu) try {
        this.kifuReader.next(a), this.update();
      } catch (e) {
        this.error(e);
      }
    },
    previous: function previous() {
      if (!this.frozen && this.kifu) try {
        this.kifuReader.previous(), this.update();
      } catch (a) {
        this.error(a);
      }
    },
    last: function last() {
      if (!this.frozen && this.kifu) try {
        this.kifuReader.last(), this.update();
      } catch (a) {
        this.error(a);
      }
    },
    first: function first() {
      if (!this.frozen && this.kifu) try {
        this.kifuReader.first(), this.update();
      } catch (a) {
        this.error(a);
      }
    },
    goTo: function goTo(a) {
      if (!this.frozen && this.kifu) {
        var e;
        "function" == typeof a && (a = a.call(this));
        "number" == typeof a ? (e = b.clone(this.kifuReader.path), e.m = a || 0) : e = a;

        try {
          this.kifuReader.goTo(e), this.update();
        } catch (d) {
          this.error(d);
        }
      }
    },
    getGameInfo: function getGameInfo() {
      if (!this.kifu) return null;
      var a = {},
          e;

      for (e in this.kifu.info) {
        -1 != b.Kifu.infoList.indexOf(e) && (b.Kifu.infoFormatters[e] ? a[b.t(e)] = b.Kifu.infoFormatters[e](this.kifu.info[e]) : a[b.t(e)] = b.filterHTML(this.kifu.info[e]));
      }

      return a;
    },
    setFrozen: function setFrozen(a) {
      this.frozen = a;
      this.dispatchEvent({
        type: this.frozen ? "frozen" : "unfrozen",
        target: this
      });
    },
    appendTo: function appendTo(a) {
      a.appendChild(this.element);
    },
    focus: function focus() {
      this.config.enableKeys && this.setKeys(!0);
    },
    setKeys: function setKeys(c) {
      document.onkeydown = c ? a.bind(this) : null;
    },
    setWheel: function setWheel(a) {
      !this._wheel_listener && a ? (this._wheel_listener = k.bind(this), a = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll", this.element.addEventListener(a, this._wheel_listener)) : this._wheel_listener && !a && (a = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll", this.element.removeEventListener(a, this._wheel_listener), delete this._wheel_listener);
    },
    setCoordinates: function setCoordinates(a) {
      !this.coordinates && a ? (this.board.setSection(-.5, -.5, -.5, -.5), this.board.addCustomObject(b.Board.coordinates)) : this.coordinates && !a && (this.board.setSection(0, 0, 0, 0), this.board.removeCustomObject(b.Board.coordinates));
      this.coordinates = a;
    }
  };
  n.default = {
    sgf: void 0,
    json: void 0,
    sgfFile: void 0,
    move: void 0,
    board: {},
    enableWheel: !0,
    lockScroll: !0,
    enableKeys: !0,
    rememberPath: !0,
    kifuLoaded: void 0,
    update: void 0,
    frozen: void 0,
    unfrozen: void 0,
    allowIllegalMoves: !1,
    markLastMove: !0,
    displayVariations: !0
  };
  b.Player = n;
  var m = {
    "about-text": "<h1>WGo.js Player 2.0</h1><p>WGo.js Player is extension of WGo.js, HTML5 library for purposes of game of go. It allows to replay go game records and it has many features like score counting. It is also designed to be easily extendable.</p><p>WGo.js is open source licensed under <a href='http://en.wikipedia.org/wiki/MIT_License' target='_blank'>MIT license</a>. You can use and modify any code from this project.</p><p>You can find more information at <a href='http://wgo.waltheri.net/player' target='_blank'>wgo.waltheri.net/player</a></p><p>Copyright &copy; 2013 Jan Prokop</p>",
    black: "Black",
    white: "White",
    DT: "Date",
    KM: "Komi",
    HA: "Handicap",
    AN: "Annotations",
    CP: "Copyright",
    GC: "Game comments",
    GN: "Game name",
    ON: "Fuseki",
    OT: "Overtime",
    TM: "Basic time",
    RE: "Result",
    RO: "Round",
    RU: "Rules",
    US: "Recorder",
    PC: "Place",
    EV: "Event",
    SO: "Source",
    none: "none",
    bpass: "Black passed.",
    wpass: "White passed."
  },
      e;

  for (e in m) {
    b.i18n.en[e] = m[e];
  }
})(WGo);

(function (b) {
  var p = 0,
      g = function g(d, b, a) {
    var h = {};
    h.element = document.createElement("div");
    h.element.className = "wgo-player-" + d;
    h.wrapper = document.createElement("div");
    h.wrapper.className = "wgo-player-" + d + "-wrapper";
    h.element.appendChild(h.wrapper);
    b.appendChild(h.element);
    a || (h.element.style.display = "none");
    return h;
  },
      f = function f(d) {
    var b;

    if (b = this.currentLayout.layout ? this.currentLayout.layout[d] : this.currentLayout[d]) {
      this.regions[d].element.style.display = "block";
      b.constructor != Array && (b = [b]);

      for (var a in b) {
        this.components[b[a]] || (this.components[b[a]] = new l.component[b[a]](this)), this.components[b[a]].appendTo(this.regions[d].wrapper), this.components[b[a]]._detachFromPlayer = !1;
      }
    } else this.regions[d].element.style.display = "none";
  },
      l = b.extendClass(b.Player, function (d, k) {
    this.config = k;

    for (var a in l.default) {
      void 0 === this.config[a] && void 0 !== l.default[a] && (this.config[a] = l.default[a]);
    }

    for (a in b.Player.default) {
      void 0 === this.config[a] && void 0 !== b.Player.default[a] && (this.config[a] = b.Player.default[a]);
    }

    this.element = d;
    this.element.innerHTML = "";
    this.classes = (this.element.className ? this.element.className + " " : "") + "wgo-player-main";
    this.element.className = this.classes;
    this.element.id || (this.element.id = "wgo_" + p++);
    this.dom = {};
    this.dom.center = document.createElement("div");
    this.dom.center.className = "wgo-player-center";
    this.dom.board = document.createElement("div");
    this.dom.board.className = "wgo-player-board";
    this.regions = {};
    this.regions.left = g("left", this.element);
    this.element.appendChild(this.dom.center);
    this.regions.right = g("right", this.element);
    this.regions.top = g("top", this.dom.center);
    this.dom.center.appendChild(this.dom.board);
    this.regions.bottom = g("bottom", this.dom.center);
    this.board = new b.Board(this.dom.board, this.config.board);
    this.init();
    this.components = {};
    window.addEventListener("resize", function () {
      this.noresize || this.updateDimensions();
    }.bind(this));
    this.updateDimensions();
    this.initGame();
  });

  l.prototype.appendTo = function (d) {
    d.appendChild(this.element);
    this.updateDimensions();
  };

  l.prototype.updateDimensions = function () {
    for (var d = window.getComputedStyle(this.element), b = []; this.element.firstChild;) {
      b.push(this.element.firstChild), this.element.removeChild(this.element.firstChild);
    }

    for (var a = parseInt(d.width), h = parseInt(d.height), n = parseInt(d.maxHeight) || 0, d = 0; d < b.length; d++) {
      this.element.appendChild(b[d]);
    }

    if (a != this.width || h != this.height || n != this.maxHeight) {
      this.width = a;
      this.height = h;
      this.maxHeight = n;

      a: if (b = this.config.layout, b.constructor == Array) {
        a = this.height || this.maxHeight;

        for (h = 0; h < b.length; h++) {
          if (!b[h].conditions || !(b[h].conditions.minWidth && !(b[h].conditions.minWidth <= this.width) || b[h].conditions.minHeight && a && !(b[h].conditions.minHeight <= a) || b[h].conditions.maxWidth && !(b[h].conditions.maxWidth >= this.width) || b[h].conditions.maxHeight && a && !(b[h].conditions.maxHeight >= a) || b[h].conditions.custom && !b[h].conditions.custom.call(this))) {
            b = b[h];
            break a;
          }
        }

        b = void 0;
      }

      if ((this.currentLayout = b) && this.lastLayout != this.currentLayout) {
        this.element.className = this.currentLayout.className ? this.classes + " " + this.currentLayout.className : this.classes;

        for (var g in this.components) {
          this.components[g]._detachFromPlayer = !0;
        }

        f.call(this, "left");
        f.call(this, "right");
        f.call(this, "top");
        f.call(this, "bottom");

        for (g in this.components) {
          this.components[g]._detachFromPlayer && this.components[g].element.parentNode && this.components[g].element.parentNode.removeChild(this.components[g].element);
        }

        this.lastLayout = this.currentLayout;
      }

      b = this.dom.board.clientWidth;
      (g = this.height || this.maxHeight) && (g -= this.regions.top.element.offsetHeight + this.regions.bottom.element.offsetHeight);
      g && g < b ? g != this.board.height && this.board.setHeight(g) : b != this.board.width && this.board.setWidth(b);
      b = g - b;
      0 < b ? (this.dom.board.style.height = g + "px", this.dom.board.style.paddingTop = b / 2 + "px") : (this.dom.board.style.height = "auto", this.dom.board.style.paddingTop = "0");
      this.regions.left.element.style.height = this.dom.center.offsetHeight + "px";
      this.regions.right.element.style.height = this.dom.center.offsetHeight + "px";

      for (d in this.components) {
        this.components[d].updateDimensions && this.components[d].updateDimensions();
      }
    }
  };

  l.prototype.showMessage = function (d, f, a) {
    this.info_overlay = document.createElement("div");
    this.info_overlay.style.width = this.element.offsetWidth + "px";
    this.info_overlay.style.height = this.element.offsetHeight + "px";
    this.info_overlay.className = "wgo-info-overlay";
    this.element.appendChild(this.info_overlay);
    var h = document.createElement("div");
    h.className = "wgo-info-message";
    h.innerHTML = d;
    d = document.createElement("div");
    d.className = "wgo-info-close";
    a || (d.innerHTML = b.t("BP:closemsg"));
    h.appendChild(d);
    this.info_overlay.appendChild(h);
    f ? this.info_overlay.addEventListener("click", function (a) {
      f(a);
    }) : a || this.info_overlay.addEventListener("click", function (a) {
      this.hideMessage();
    }.bind(this));
    this.setFrozen(!0);
  };

  l.prototype.hideMessage = function () {
    this.element.removeChild(this.info_overlay);
    this.setFrozen(!1);
  };

  l.prototype.error = function (d) {
    if (!b.ERROR_REPORT) throw d;

    switch (d.name) {
      case "InvalidMoveError":
        this.showMessage("<h1>" + d.name + "</h1><p>" + d.message + '</p><p>If this message isn\'t correct, please report it by clicking <a href="#">here</a>, otherwise contact maintainer of this site.</p>');
        break;

      case "FileError":
        this.showMessage("<h1>" + d.name + "</h1><p>" + d.message + "</p><p>Please contact maintainer of this site. Note: it is possible to read files only from this host.</p>");
        break;

      default:
        this.showMessage("<h1>" + d.name + "</h1><p>" + d.message + "</p><pre>" + d.stacktrace + '</pre><p>Please contact maintainer of this site. You can also report it <a href="#">here</a>.</p>');
    }
  };

  l.component = {};
  l.layouts = {
    one_column: {
      top: [],
      bottom: []
    },
    no_comment: {
      top: [],
      bottom: []
    },
    right_top: {
      top: [],
      right: []
    },
    right: {
      right: []
    },
    minimal: {
      bottom: []
    }
  };
  l.dynamicLayout = [{
    conditions: {
      minWidth: 650
    },
    layout: l.layouts.right_top,
    className: "wgo-twocols wgo-large"
  }, {
    conditions: {
      minWidth: 550,
      minHeight: 600
    },
    layout: l.layouts.one_column,
    className: "wgo-medium"
  }, {
    conditions: {
      minWidth: 350
    },
    layout: l.layouts.no_comment,
    className: "wgo-small"
  }, {
    layout: l.layouts.no_comment,
    className: "wgo-xsmall"
  }];
  l.default = {
    layout: l.dynamicLayout
  };
  b.i18n.en["BP:closemsg"] = "click anywhere to close this window";
  l.attributes = {
    "data-wgo": function dataWgo(b) {
      b && ("(" == b[0] ? this.sgf = b : this.sgfFile = b);
    },
    "data-wgo-board": function dataWgoBoard(b) {
      this.board = eval("({" + b + "})");
    },
    "data-wgo-onkifuload": function dataWgoOnkifuload(b) {
      this.kifuLoaded = new Function(b);
    },
    "data-wgo-onupdate": function dataWgoOnupdate(b) {
      this.update = new Function(b);
    },
    "data-wgo-onfrozen": function dataWgoOnfrozen(b) {
      this.frozen = new Function(b);
    },
    "data-wgo-onunfrozen": function dataWgoOnunfrozen(b) {
      this.unfrozen = new Function(b);
    },
    "data-wgo-layout": function dataWgoLayout(b) {
      this.layout = eval("({" + b + "})");
    },
    "data-wgo-enablewheel": function dataWgoEnablewheel(b) {
      "false" == b.toLowerCase() && (this.enableWheel = !1);
    },
    "data-wgo-lockscroll": function dataWgoLockscroll(b) {
      "false" == b.toLowerCase() && (this.lockScroll = !1);
    },
    "data-wgo-enablekeys": function dataWgoEnablekeys(b) {
      "false" == b.toLowerCase() && (this.enableKeys = !1);
    },
    "data-wgo-rememberpath": function dataWgoRememberpath(b) {
      "false" == b.toLowerCase() && (this.rememberPath = !1);
    },
    "data-wgo-allowillegal": function dataWgoAllowillegal(b) {
      "false" != b.toLowerCase() && (this.allowIllegalMoves = !0);
    },
    "data-wgo-move": function dataWgoMove(b) {
      var f = parseInt(b);
      this.move = f ? f : eval("({" + b + "})");
    },
    "data-wgo-marklastmove": function dataWgoMarklastmove(b) {
      "false" == b.toLowerCase() && (this.markLastMove = !1);
    },
    "data-wgo-diagram": function dataWgoDiagram(b) {
      b && ("(" == b[0] ? this.sgf = b : this.sgfFile = b, this.enableWheel = this.enableKeys = this.markLastMove = !1, this.layout = {
        top: [],
        right: [],
        left: [],
        bottom: []
      });
    }
  };
  b.BasicPlayer = l;
  window.addEventListener("load", function () {
    for (var b = document.querySelectorAll("[data-wgo],[data-wgo-diagram]"), f = 0; f < b.length; f++) {
      for (var a = b[f], h = void 0, g = void 0, h = void 0, g = {}, m = 0; m < a.attributes.length; m++) {
        h = a.attributes[m], l.attributes[h.name] && l.attributes[h.name].call(g, h.value, h.name);
      }

      h = new l(a, g);
      a._wgo_player = h;
    }
  });
})(WGo);

(function (b, p) {
  var g = function g() {
    this.element = document.createElement("div");
  };

  g.prototype = {
    constructor: g,
    appendTo: function appendTo(b) {
      b.appendChild(this.element);
    },
    getWidth: function getWidth() {
      var b = window.getComputedStyle(this.element);
      return parseInt(b.width);
    },
    getHeight: function getHeight() {
      var b = window.getComputedStyle(this.element);
      return parseInt(b.height);
    },
    updateDimensions: function updateDimensions() {}
  };
  b.BasicPlayer.component.Component = g;
})(WGo);

(function () {
  var b = function b(a) {
    this[a] = {};
    var b = this[a];
    b.box = document.createElement("div");
    b.box.className = "wgo-box-wrapper wgo-player-wrapper wgo-" + a;
    b.name = document.createElement("div");
    b.name.className = "wgo-box-title";
    b.name.innerHTML = a;
    b.box.appendChild(b.name);
    a = document.createElement("div");
    a.className = "wgo-player-info";
    b.box.appendChild(a);
    b.info = {};
    b.info.rank = p("rank");
    b.info.rank.val.innerHTML = "-";
    b.info.caps = p("caps");
    b.info.caps.val.innerHTML = "0";
    b.info.time = p("time");
    b.info.time.val.innerHTML = "--:--";
    a.appendChild(b.info.rank.wrapper);
    a.appendChild(b.info.caps.wrapper);
    a.appendChild(b.info.time.wrapper);
  },
      p = function p(a) {
    var b = {};
    b.wrapper = document.createElement("div");
    b.wrapper.className = "wgo-player-info-box-wrapper";
    b.box = document.createElement("div");
    b.box.className = "wgo-player-info-box";
    b.wrapper.appendChild(b.box);
    b.title = document.createElement("div");
    b.title.className = "wgo-player-info-title";
    b.title.innerHTML = WGo.t(a);
    b.box.appendChild(b.title);
    b.val = document.createElement("div");
    b.val.className = "wgo-player-info-value";
    b.box.appendChild(b.val);
    return b;
  },
      g = function g(a) {
    a = a.kifu.info || {};
    a.black ? (this.black.name.innerHTML = WGo.filterHTML(a.black.name) || WGo.t("black"), this.black.info.rank.val.innerHTML = WGo.filterHTML(a.black.rank) || "-") : (this.black.name.innerHTML = WGo.t("black"), this.black.info.rank.val.innerHTML = "-");
    a.white ? (this.white.name.innerHTML = WGo.filterHTML(a.white.name) || WGo.t("white"), this.white.info.rank.val.innerHTML = WGo.filterHTML(a.white.rank) || "-") : (this.white.name.innerHTML = WGo.t("white"), this.white.info.rank.val.innerHTML = "-");
    this.black.info.caps.val.innerHTML = "0";
    this.white.info.caps.val.innerHTML = "0";
    a.TM ? (this.setPlayerTime("black", a.TM), this.setPlayerTime("white", a.TM)) : (this.black.info.time.val.innerHTML = "--:--", this.white.info.time.val.innerHTML = "--:--");
    this.updateDimensions();
  },
      f = function f(a) {
    var b, d;
    a.style.fontSize ? (d = parseInt(a.style.fontSize), a.style.fontSize = "", b = window.getComputedStyle(a), b = parseInt(b.fontSize), a.style.fontSize = d + "px") : (b = window.getComputedStyle(a), b = d = parseInt(b.fontSize));
    if (!(d == b && a.scrollHeight <= a.offsetHeight)) if (a.scrollHeight > a.offsetHeight) for (d -= 2; a.scrollHeight > a.offsetHeight && 1 < d;) {
      a.style.fontSize = d + "px", d -= 2;
    } else if (d < b) {
      for (d += 2; a.scrollHeight <= a.offsetHeight && d <= b;) {
        a.style.fontSize = d + "px", d += 2;
      }

      a.scrollHeight > a.offsetHeight && (a.style.fontSize = d - 4 + "px");
    }
  },
      l = function l(a) {
    a.node.BL && this.setPlayerTime("black", a.node.BL);
    a.node.WL && this.setPlayerTime("white", a.node.WL);
    void 0 !== a.position.capCount.black && (this.black.info.caps.val.innerHTML = a.position.capCount.black);
    void 0 !== a.position.capCount.white && (this.white.info.caps.val.innerHTML = a.position.capCount.white);
  },
      d = WGo.extendClass(WGo.BasicPlayer.component.Component, function (a) {
    this.super(a);
    this.element.className = "wgo-infobox";
    b.call(this, "white");
    b.call(this, "black");
    this.element.appendChild(this.white.box);
    this.element.appendChild(this.black.box);
    a.addEventListener("kifuLoaded", g.bind(this));
    a.addEventListener("update", l.bind(this));
  });

  d.prototype.setPlayerTime = function (a, b) {
    var d = Math.floor(b / 60),
        f = Math.round(b) % 60;
    this[a].info.time.val.innerHTML = d + ":" + (10 > f ? "0" + f : f);
  };

  d.prototype.updateDimensions = function () {
    f(this.black.name);
    f(this.white.name);
  };

  var k = WGo.BasicPlayer.layouts;
  k.right_top.right.push("InfoBox");
  k.right.right.push("InfoBox");
  k.one_column.top.push("InfoBox");
  k.no_comment.top.push("InfoBox");
  WGo.i18n.en.rank = "Rank";
  WGo.i18n.en.caps = "Caps";
  WGo.i18n.en.time = "Time";
  WGo.BasicPlayer.component.InfoBox = d;
})(WGo);

(function (b, p) {
  var g = function g(a) {
    var b, d;
    b = a.charCodeAt(0) - 97;
    0 > b && (b += 32);
    7 < b && b--;
    d = a.charCodeAt(1) - 48;
    2 < a.length && (d = 10 * d + (a.charCodeAt(2) - 48));
    d = this.kifuReader.game.size - d;
    this._tmp_mark = {
      type: "MA",
      x: b,
      y: d
    };
    this.board.addObject(this._tmp_mark);
  },
      f = function f() {
    this.board.removeObject(this._tmp_mark);
    delete this._tmp_mark;
  },
      l = function l(a, b) {
    for (var d in a) {
      a[d].className && "wgo-move-link" == a[d].className ? (a[d].addEventListener("mouseover", g.bind(b, a[d].innerHTML)), a[d].addEventListener("mouseout", f.bind(b))) : a[d].childNodes && a[d].childNodes.length && l(a[d].childNodes, b);
    }
  },
      d = function d(a, _d) {
    var f = '<div class="wgo-info-list">';
    _d && (f += '<div class="wgo-info-title">' + b.t("gameinfo") + "</div>");

    for (var g in a) {
      f += '<div class="wgo-info-item"><span class="wgo-info-label">' + g + '</span><span class="wgo-info-value">' + a[g] + "</span></div>";
    }

    return f + "</div>";
  },
      k = b.extendClass(b.BasicPlayer.component.Component, function (a) {
    this.super(a);
    this.player = a;
    this.element.className = "wgo-commentbox";
    this.box = document.createElement("div");
    this.box.className = "wgo-box-wrapper wgo-comments-wrapper";
    this.element.appendChild(this.box);
    this.comments_title = document.createElement("div");
    this.comments_title.className = "wgo-box-title";
    this.comments_title.innerHTML = b.t("comments");
    this.box.appendChild(this.comments_title);
    this.comments = document.createElement("div");
    this.comments.className = "wgo-comments-content";
    this.box.appendChild(this.comments);
    this.help = document.createElement("div");
    this.help.className = "wgo-help";
    this.help.style.display = "none";
    this.comments.appendChild(this.help);
    this.notification = document.createElement("div");
    this.notification.className = "wgo-notification";
    this.notification.style.display = "none";
    this.comments.appendChild(this.notification);
    this.comment_text = document.createElement("div");
    this.comment_text.className = "wgo-comment-text";
    this.comments.appendChild(this.comment_text);
    a.addEventListener("kifuLoaded", function (h) {
      h.kifu.hasComments() ? (this.comments_title.innerHTML = b.t("comments"), this.element.className = "wgo-commentbox", this._update = function (a) {
        this.setComments(a);
      }.bind(this), a.addEventListener("update", this._update)) : (this.comments_title.innerHTML = b.t("gameinfo"), this.element.className = "wgo-commentbox wgo-gameinfo", this._update && (a.removeEventListener("update", this._update), delete this._update), this.comment_text.innerHTML = d(h.target.getGameInfo()));
    }.bind(this));

    a.notification = function (a) {
      a ? (this.notification.style.display = "block", this.notification.innerHTML = a, this.is_notification = !0) : (this.notification.style.display = "none", this.is_notification = !1);
    }.bind(this);

    a.help = function (a) {
      a ? (this.help.style.display = "block", this.help.innerHTML = a, this.is_help = !0) : (this.help.style.display = "none", this.is_help = !1);
    }.bind(this);
  });

  k.prototype.setComments = function (a) {
    this.player._tmp_mark && f.call(this.player);
    var b = "";
    a.node.parent || (b = d(a.target.getGameInfo(), !0));
    this.comment_text.innerHTML = b + this.getCommentText(a.node.comment, this.player.config.formatNicks, this.player.config.formatMoves);
    this.player.config.formatMoves && this.comment_text.childNodes && this.comment_text.childNodes.length && l(this.comment_text.childNodes, this.player);
  };

  k.prototype.getCommentText = function (a, d, f) {
    return a ? (a = "<p>" + b.filterHTML(a).replace(/\n/g, "</p><p>") + "</p>", d && (a = a.replace(/(<p>)([^:]{3,}:)\s/g, '<p><span class="wgo-comments-nick">$2</span> ')), f && (a = a.replace(/\b[a-zA-Z]1?\d\b/g, '<a href="javascript:void(0)" class="wgo-move-link">$&</a>')), a) : "";
  };

  b.BasicPlayer.default.formatNicks = !0;
  b.BasicPlayer.default.formatMoves = !0;

  b.BasicPlayer.attributes["data-wgo-formatnicks"] = function (a) {
    "false" == a.toLowerCase() && (this.formatNicks = !1);
  };

  b.BasicPlayer.attributes["data-wgo-formatmoves"] = function (a) {
    "false" == a.toLowerCase() && (this.formatMoves = !1);
  };

  b.BasicPlayer.layouts.right_top.right.push("CommentBox");
  b.BasicPlayer.layouts.right.right.push("CommentBox");
  b.BasicPlayer.layouts.one_column.bottom.push("CommentBox");
  b.i18n.en.comments = "Comments";
  b.i18n.en.gameinfo = "Game info";
  b.BasicPlayer.component.CommentBox = k;
})(WGo);

(function (b, p) {
  var g = b.extendClass(b.BasicPlayer.component.Component, function (a) {
    this.super(a);
    this.widgets = [];
    this.element.className = "wgo-player-control";
    this.iconBar = document.createElement("div");
    this.iconBar.className = "wgo-control-wrapper";
    this.element.appendChild(this.iconBar);
    var b, d;

    for (d in g.widgets) {
      b = new g.widgets[d].constructor(a, g.widgets[d].args), b.appendTo(this.iconBar), this.widgets.push(b);
    }
  });

  g.prototype.updateDimensions = function () {
    this.element.className = 340 > this.element.clientWidth ? "wgo-player-control wgo-340" : 440 > this.element.clientWidth ? "wgo-player-control wgo-440" : "wgo-player-control";
  };

  var f = b.BasicPlayer.control = {},
      l = function l(a) {
    a.node.parent || this.disabled ? a.node.parent && this.disabled && this.enable() : this.disable();
  },
      d = function d(a) {
    a.node.children.length || this.disabled ? a.node.children.length && this.disabled && this.enable() : this.disable();
  },
      k = function k(a) {
    (this._disabled = this.disabled) || this.disable();
  },
      a = function a(_a2) {
    this._disabled || this.enable();
    delete this._disabled;
  };

  f.Widget = function (a, b) {
    this.element = this.element || document.createElement(b.type || "div");
    this.element.className = "wgo-widget-" + b.name;
    this.init(a, b);
  };

  f.Widget.prototype = {
    constructor: f.Widget,
    init: function init(a, b) {
      b && (b.disabled && this.disable(), b.init && b.init.call(this, a));
    },
    appendTo: function appendTo(a) {
      a.appendChild(this.element);
    },
    disable: function disable() {
      this.disabled = !0;
      -1 == this.element.className.search("wgo-disabled") && (this.element.className += " wgo-disabled");
    },
    enable: function enable() {
      this.disabled = !1;
      this.element.className = this.element.className.replace(" wgo-disabled", "");
      this.element.disabled = "";
    }
  };
  f.Group = b.extendClass(f.Widget, function (a, b) {
    this.element = document.createElement("div");
    this.element.className = "wgo-ctrlgroup wgo-ctrlgroup-" + b.name;
    var d, f;

    for (f in b.widgets) {
      d = new b.widgets[f].constructor(a, b.widgets[f].args), d.appendTo(this.element);
    }
  });
  f.Clickable = b.extendClass(f.Widget, function (a, b) {
    this.super(a, b);
  });

  f.Clickable.prototype.init = function (a, b) {
    var d,
        f = this;
    d = b.togglable ? function () {
      f.disabled || (b.click.call(f, a) ? f.select() : f.unselect());
    } : function () {
      f.disabled || b.click.call(f, a);
    };
    this.element.addEventListener("click", d);
    this.element.addEventListener("touchstart", function (a) {
      a.preventDefault();
      d();
      b.multiple && (f._touch_i = 0, f._touch_int = window.setInterval(function () {
        500 < f._touch_i && d();
        f._touch_i += 100;
      }, 100));
      return !1;
    });
    b.multiple && this.element.addEventListener("touchend", function (a) {
      window.clearInterval(f._touch_int);
    });
    b.disabled && this.disable();
    b.init && b.init.call(this, a);
  };

  f.Clickable.prototype.select = function () {
    this.selected = !0;
    -1 == this.element.className.search("wgo-selected") && (this.element.className += " wgo-selected");
  };

  f.Clickable.prototype.unselect = function () {
    this.selected = !1;
    this.element.className = this.element.className.replace(" wgo-selected", "");
  };

  f.Button = b.extendClass(f.Clickable, function (a, c) {
    var d = this.element = document.createElement("button");
    d.className = "wgo-button wgo-button-" + c.name;
    d.title = b.t(c.name);
    this.init(a, c);
  });

  f.Button.prototype.disable = function () {
    f.Button.prototype.super.prototype.disable.call(this);
    this.element.disabled = "disabled";
  };

  f.Button.prototype.enable = function () {
    f.Button.prototype.super.prototype.enable.call(this);
    this.element.disabled = "";
  };

  f.MenuItem = b.extendClass(f.Clickable, function (a, c) {
    var d = this.element = document.createElement("div");
    d.className = "wgo-menu-item wgo-menu-item-" + c.name;
    d.title = b.t(c.name);
    d.innerHTML = d.title;
    this.init(a, c);
  });
  f.MoveNumber = b.extendClass(f.Widget, function (a) {
    this.element = document.createElement("form");
    this.element.className = "wgo-player-mn-wrapper";
    var b = this.move = document.createElement("input");
    b.type = "text";
    b.value = "0";
    b.maxlength = 3;
    b.className = "wgo-player-mn-value";
    this.element.appendChild(b);

    this.element.onsubmit = b.onchange = function (a) {
      a.goTo(this.getValue());
      return !1;
    }.bind(this, a);

    a.addEventListener("update", function (a) {
      this.setValue(a.path.m);
    }.bind(this));
    a.addEventListener("kifuLoaded", this.enable.bind(this));
    a.addEventListener("frozen", this.disable.bind(this));
    a.addEventListener("unfrozen", this.enable.bind(this));
  });

  f.MoveNumber.prototype.disable = function () {
    f.MoveNumber.prototype.super.prototype.disable.call(this);
    this.move.disabled = "disabled";
  };

  f.MoveNumber.prototype.enable = function () {
    f.MoveNumber.prototype.super.prototype.enable.call(this);
    this.move.disabled = "";
  };

  f.MoveNumber.prototype.setValue = function (a) {
    this.move.value = a;
  };

  f.MoveNumber.prototype.getValue = function () {
    return parseInt(this.move.value);
  };

  var h = function h(a) {
    if (a._menu_tmp) delete a._menu_tmp;else {
      if (!a.menu) {
        a.menu = document.createElement("div");
        a.menu.className = "wgo-player-menu";
        a.menu.style.position = "absolute";
        a.menu.style.display = "none";
        this.element.parentElement.appendChild(a.menu);
        var b, d;

        for (d in g.menu) {
          b = new g.menu[d].constructor(a, g.menu[d].args, !0), b.appendTo(a.menu);
        }
      }

      if ("none" != a.menu.style.display) return a.menu.style.display = "none", document.removeEventListener("click", a._menu_ev), delete a._menu_ev, this.unselect(), !1;
      a.menu.style.display = "block";
      b = this.element.offsetTop;
      d = this.element.offsetLeft;
      this.element.parentElement.parentElement.parentElement.parentElement == a.regions.bottom.wrapper ? (a.menu.style.left = d + "px", a.menu.style.top = b - a.menu.offsetHeight + 1 + "px") : (a.menu.style.left = d + "px", a.menu.style.top = b + this.element.offsetHeight + "px");
      a._menu_ev = h.bind(this, a);
      a._menu_tmp = !0;
      document.addEventListener("click", a._menu_ev);
      return !0;
    }
  };

  g.menu = [{
    constructor: f.MenuItem,
    args: {
      name: "switch-coo",
      togglable: !0,
      click: function click(a) {
        a.setCoordinates(!a.coordinates);
        return a.coordinates;
      },
      init: function init(a) {
        a.coordinates && this.select();
      }
    }
  }];
  g.widgets = [{
    constructor: f.Group,
    args: {
      name: "left",
      widgets: [{
        constructor: f.Button,
        args: {
          name: "menu",
          togglable: !0,
          click: h
        }
      }]
    }
  }, {
    constructor: f.Group,
    args: {
      name: "right",
      widgets: [{
        constructor: f.Button,
        args: {
          name: "about",
          click: function click(a) {
            a.showMessage(b.t("about-text"));
          }
        }
      }]
    }
  }, {
    constructor: f.Group,
    args: {
      name: "control",
      widgets: [{
        constructor: f.Button,
        args: {
          name: "first",
          disabled: !0,
          init: function init(b) {
            b.addEventListener("update", l.bind(this));
            b.addEventListener("frozen", k.bind(this));
            b.addEventListener("unfrozen", a.bind(this));
          },
          click: function click(a) {
            a.first();
          }
        }
      }, {
        constructor: f.Button,
        args: {
          name: "multiprev",
          disabled: !0,
          multiple: !0,
          init: function init(b) {
            b.addEventListener("update", l.bind(this));
            b.addEventListener("frozen", k.bind(this));
            b.addEventListener("unfrozen", a.bind(this));
          },
          click: function click(a) {
            var c = b.clone(a.kifuReader.path);
            c.m -= 10;
            a.goTo(c);
          }
        }
      }, {
        constructor: f.Button,
        args: {
          name: "previous",
          disabled: !0,
          multiple: !0,
          init: function init(b) {
            b.addEventListener("update", l.bind(this));
            b.addEventListener("frozen", k.bind(this));
            b.addEventListener("unfrozen", a.bind(this));
          },
          click: function click(a) {
            a.previous();
          }
        }
      }, {
        constructor: f.MoveNumber
      }, {
        constructor: f.Button,
        args: {
          name: "next",
          disabled: !0,
          multiple: !0,
          init: function init(b) {
            b.addEventListener("update", d.bind(this));
            b.addEventListener("frozen", k.bind(this));
            b.addEventListener("unfrozen", a.bind(this));
          },
          click: function click(a) {
            a.next();
          }
        }
      }, {
        constructor: f.Button,
        args: {
          name: "multinext",
          disabled: !0,
          multiple: !0,
          init: function init(b) {
            b.addEventListener("update", d.bind(this));
            b.addEventListener("frozen", k.bind(this));
            b.addEventListener("unfrozen", a.bind(this));
          },
          click: function click(a) {
            var c = b.clone(a.kifuReader.path);
            c.m += 10;
            a.goTo(c);
          }
        }
      }, {
        constructor: f.Button,
        args: {
          name: "last",
          disabled: !0,
          init: function init(b) {
            b.addEventListener("update", d.bind(this));
            b.addEventListener("frozen", k.bind(this));
            b.addEventListener("unfrozen", a.bind(this));
          },
          click: function click(a) {
            a.last();
          }
        }
      }]
    }
  }];
  var n = b.BasicPlayer.layouts;
  n.right_top.top.push("Control");
  n.right.right.push("Control");
  n.one_column.top.push("Control");
  n.no_comment.bottom.push("Control");
  n.minimal.bottom.push("Control");
  var n = {
    about: "About",
    first: "First",
    multiprev: "10 moves back",
    previous: "Previous",
    next: "Next",
    multinext: "10 moves forward",
    last: "Last",
    "switch-coo": "Display coordinates",
    menu: "Menu"
  },
      m;

  for (m in n) {
    b.i18n.en[m] = n[m];
  }

  b.BasicPlayer.component.Control = g;
})(WGo);

(function (b) {
  var p = function p(b, g) {
    this.player.frozen || this._lastX == b && this._lastY == g || (this._lastX = b, this._lastY = g, this._last_mark && this.board.removeObject(this._last_mark), -1 != b && -1 != g && this.player.kifuReader.game.isValid(b, g) ? (this._last_mark = {
      type: "outline",
      x: b,
      y: g,
      c: this.player.kifuReader.game.turn
    }, this.board.addObject(this._last_mark)) : delete this._last_mark);
  },
      g = function g() {
    this._last_mark && (this.board.removeObject(this._last_mark), delete this._last_mark, delete this._lastX, delete this._lastY);
  };

  b.Player.Editable = {};

  b.Player.Editable = function (b, g) {
    this.player = b;
    this.board = g;
    this.editMode = !1;
  };

  b.Player.Editable.prototype.set = function (f) {
    if (!this.editMode && f) this.originalReader = this.player.kifuReader, this.player.kifuReader = new b.KifuReader(this.player.kifu.clone(), this.originalReader.rememberPath, this.originalReader.allow_illegal, this.originalReader.allow_illegal), this.player.kifuReader.goTo(this.originalReader.path), this._ev_click = this._ev_click || this.play.bind(this), this._ev_move = this._ev_move || p.bind(this), this._ev_out = this._ev_out || g.bind(this), this.board.addEventListener("click", this._ev_click), this.board.addEventListener("mousemove", this._ev_move), this.board.addEventListener("mouseout", this._ev_out), this.editMode = !0;else if (this.editMode && !f) {
      this.originalReader.goTo(this.player.kifuReader.path);
      f = this.originalReader;

      for (var l = this.player.kifuReader.getPosition(), d = this.originalReader.getPosition(), k = l.size, a = [], h = [], n = 0; n < k * k; n++) {
        l.schema[n] && !d.schema[n] ? h.push({
          x: Math.floor(n / k),
          y: n % k
        }) : l.schema[n] != d.schema[n] && a.push({
          x: Math.floor(n / k),
          y: n % k,
          c: d.schema[n]
        });
      }

      f.change = {
        add: a,
        remove: h
      };
      this.player.kifuReader = this.originalReader;
      this.player.update(!0);
      this.board.removeEventListener("click", this._ev_click);
      this.board.removeEventListener("mousemove", this._ev_move);
      this.board.removeEventListener("mouseout", this._ev_out);
      this.editMode = !1;
    }
  };

  b.Player.Editable.prototype.play = function (f, g) {
    !this.player.frozen && this.player.kifuReader.game.isValid(f, g) && (this.player.kifuReader.node.appendChild(new b.KNode({
      move: {
        x: f,
        y: g,
        c: this.player.kifuReader.game.turn
      },
      _edited: !0
    })), this.player.next(this.player.kifuReader.node.children.length - 1));
  };

  b.BasicPlayer && b.BasicPlayer.component.Control && b.BasicPlayer.component.Control.menu.push({
    constructor: b.BasicPlayer.control.MenuItem,
    args: {
      name: "editmode",
      togglable: !0,
      click: function click(f) {
        this._editable = this._editable || new b.Player.Editable(f, f.board);

        this._editable.set(!this._editable.editMode);

        return this._editable.editMode;
      },
      init: function init(b) {
        var g = this;
        b.addEventListener("frozen", function (b) {
          (g._disabled = g.disabled) || g.disable();
        });
        b.addEventListener("unfrozen", function (b) {
          g._disabled || g.enable();
          delete g._disabled;
        });
      }
    }
  });
  b.i18n.en.editmode = "Edit mode";
})(WGo);

(function (b) {
  var p = function p(b, f, a, g) {
    this.originalPosition = b;
    this.position = b.clone();
    this.board = f;
    this.komi = a;
    this.output = g;
  },
      g = p.state = {
    UNKNOWN: 0,
    BLACK_STONE: 1,
    WHITE_STONE: -1,
    BLACK_CANDIDATE: 2,
    WHITE_CANDIDATE: -2,
    BLACK_NEUTRAL: 3,
    WHITE_NEUTRAL: -3,
    NEUTRAL: 4
  },
      f = function f(b, g, a, h, n) {
    var m = b.get(g, a);
    void 0 !== m && m != h && m != n && (b.set(g, a, h), f(b, g - 1, a, h, n), f(b, g, a - 1, h, n), f(b, g + 1, a, h, n), f(b, g, a + 1, h, n));
  },
      l = function l(b, g, a, f, n) {
    var m = g.get(a, f);
    b.get(a, f) != m && (b.set(a, f, m), l(b, g, a - 1, f, n), l(b, g, a, f - 1, n), l(b, g, a + 1, f, n), l(b, g, a, f + 1, n));
  };

  p.prototype.start = function () {
    this.calculate();
    this.saved_state = this.board.getState();
    this.displayScore();

    this._click = function (d, k) {
      var a = this.originalPosition.get(d, k);
      a == b.W ? this.position.get(d, k) == g.WHITE_STONE ? f(this.position, d, k, g.BLACK_CANDIDATE, g.BLACK_STONE) : (l(this.position, this.originalPosition, d, k, g.BLACK_STONE), this.calculate()) : a == b.B ? this.position.get(d, k) == g.BLACK_STONE ? f(this.position, d, k, g.WHITE_CANDIDATE, g.WHITE_STONE) : (l(this.position, this.originalPosition, d, k, g.WHITE_STONE), this.calculate()) : (a = this.position.get(d, k), a == g.BLACK_CANDIDATE ? this.position.set(d, k, g.BLACK_NEUTRAL) : a == g.WHITE_CANDIDATE ? this.position.set(d, k, g.WHITE_NEUTRAL) : a == g.BLACK_NEUTRAL ? this.position.set(d, k, g.BLACK_CANDIDATE) : a == g.WHITE_NEUTRAL && this.position.set(d, k, g.WHITE_CANDIDATE));
      this.board.restoreState({
        objects: b.clone(this.saved_state.objects)
      });
      this.displayScore();
    }.bind(this);

    this.board.addEventListener("click", this._click);
  };

  p.prototype.end = function () {
    this.board.restoreState({
      objects: b.clone(this.saved_state.objects)
    });
    this.board.removeEventListener("click", this._click);
  };

  p.prototype.displayScore = function () {
    for (var d = [], f = [], a = [], h = [], n = [], m = 0; m < this.position.size; m++) {
      for (var e = 0; e < this.position.size; e++) {
        s = this.position.get(m, e), t = this.originalPosition.get(m, e), s == g.BLACK_CANDIDATE ? d.push({
          x: m,
          y: e,
          type: "mini",
          c: b.B
        }) : s == g.WHITE_CANDIDATE ? f.push({
          x: m,
          y: e,
          type: "mini",
          c: b.W
        }) : s == g.NEUTRAL && a.push({
          x: m,
          y: e
        }), t == b.W && s != g.WHITE_STONE ? n.push({
          x: m,
          y: e,
          type: "outline",
          c: b.W
        }) : t == b.B && s != g.BLACK_STONE && h.push({
          x: m,
          y: e,
          type: "outline",
          c: b.B
        });
      }
    }

    for (m = 0; m < h.length; m++) {
      this.board.removeObjectsAt(h[m].x, h[m].y);
    }

    for (m = 0; m < n.length; m++) {
      this.board.removeObjectsAt(n[m].x, n[m].y);
    }

    this.board.addObject(n);
    this.board.addObject(h);
    this.board.addObject(d);
    this.board.addObject(f);
    a = "<p style='font-weight: bold;'>" + b.t("RE") + "</p>";
    m = d.length + n.length + this.originalPosition.capCount.black;
    e = f.length + h.length + this.originalPosition.capCount.white + parseFloat(this.komi);
    a += "<p>" + b.t("black") + ": " + d.length + " + " + (n.length + this.originalPosition.capCount.black) + " = " + m + "</br>";
    a += b.t("white") + ": " + f.length + " + " + (h.length + this.originalPosition.capCount.white) + " + " + this.komi + " = " + e + "</p>";
    a = m > e ? a + ("<p style='font-weight: bold;'>" + b.t("bwin", m - e) + "</p>") : a + ("<p style='font-weight: bold;'>" + b.t("wwin", e - m) + "</p>");
    this.output(a);
  };

  p.prototype.calculate = function () {
    var b, f, a, h, n, m;
    b = this.position;

    for (m = !0; m;) {
      m = !1;

      for (var e = 0; e < b.size; e++) {
        for (var c = 0; c < b.size; c++) {
          if (f = b.get(c, e), f == g.UNKNOWN || f == g.BLACK_CANDIDATE || f == g.WHITE_CANDIDATE) {
            a = [b.get(c - 1, e), b.get(c, e - 1), b.get(c + 1, e), b.get(c, e + 1)];
            n = h = !1;

            for (var l = 0; 4 > l; l++) {
              a[l] == g.BLACK_STONE || a[l] == g.BLACK_CANDIDATE ? h = !0 : a[l] == g.WHITE_STONE || a[l] == g.WHITE_CANDIDATE ? n = !0 : a[l] == g.NEUTRAL && (n = h = !0);
            }

            a = !1;
            h && n ? a = g.NEUTRAL : h ? a = g.BLACK_CANDIDATE : n && (a = g.WHITE_CANDIDATE);
            a && f != a && (m = !0, b.set(c, e, a));
          }
        }
      }
    }
  };

  b.ScoreMode = p;
  b.BasicPlayer && b.BasicPlayer.component.Control && b.BasicPlayer.component.Control.menu.push({
    constructor: b.BasicPlayer.control.MenuItem,
    args: {
      name: "scoremode",
      togglable: !0,
      click: function click(d) {
        if (this.selected) return d.setFrozen(!1), this._score_mode.end(), delete this._score_mode, d.notification(), d.help(), !1;
        d.setFrozen(!0);
        d.help("<p>" + b.t("help_score") + "</p>");
        this._score_mode = new b.ScoreMode(d.kifuReader.game.position, d.board, d.kifu.info.KM || .5, d.notification);

        this._score_mode.start();

        return !0;
      }
    }
  });
  b.i18n.en.scoremode = "Count score";
  b.i18n.en.score = "Score";
  b.i18n.en.bwin = "Black wins by $ points.";
  b.i18n.en.wwin = "White wins by $ points.";
  b.i18n.en.help_score = "Click on stones to mark them dead or alive. You can also set and unset territory points by clicking on them. Territories must be completely bordered.";
})(WGo);

(function (b, p) {
  var g = {
    active: !0,
    query: {}
  },
      f = function f(b) {
    try {
      g.query = JSON.parse('{"' + window.location.hash.substr(1).replace("=", '":') + "}");
    } catch (f) {
      g.query = {};
    }
  };

  window.addEventListener("hashchange", function () {
    if ("" != window.location.hash && g.active) {
      f();

      for (var b in g.query) {
        var k = document.getElementById(b);
        k && k._wgo_player && k._wgo_player.goTo(l);
      }
    }
  });
  window.addEventListener("DOMContentLoaded", function () {
    "" != window.location.hash && g.active && f();
  });
  window.addEventListener("load", function () {
    if ("" != window.location.hash && g.active) for (var b in g.query) {
      var f = document.getElementById(b);

      if (f && f._wgo_player) {
        f.scrollIntoView();
        break;
      }
    }
  });

  var l = function l() {
    if (g.query[this.element.id]) return g.query[this.element.id].goto;
  };

  b.Player.default.move = l;
  b.BasicPlayer && b.BasicPlayer.component.Control && b.BasicPlayer.component.Control.menu.push({
    constructor: b.BasicPlayer.control.MenuItem,
    args: {
      name: "permalink",
      click: function click(d) {
        var f = location.href.split("#")[0] + "#" + d.element.id + '={"goto":' + JSON.stringify(d.kifuReader.path) + "}";
        d.showMessage("<h1>" + b.t("permalink") + '</h1><p><input class="wgo-permalink" type="text" value=\'' + f + '\' onclick="this.select(); event.stopPropagation()"/></p>');
      }
    }
  });
  b.Player.permalink = g;
  b.i18n.en.permalink = "Permanent link";
})(WGo);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./static/dtale/side/wgo/wgo.player.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./static/dtale/side/wgo/wgo.player.css ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:application/font-woff;base64,d09GRgABAAAAAA7AAA4AAAAAF/gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABRAAAAEQAAABWPeFIaGNtYXAAAAGIAAAAUwAAAWqgWeonY3Z0IAAAAdwAAAAUAAAAHAZL/5RmcGdtAAAB8AAABPkAAAmRigp4O2dhc3AAAAbsAAAACAAAAAgAAAAQZ2x5ZgAABvQAAATOAAAHOkwwDxtoZWFkAAALxAAAADUAAAA2/xq8WmhoZWEAAAv8AAAAIAAAACQHWgNcaG10eAAADBwAAAApAAAAMCQrAABsb2NhAAAMSAAAABoAAAAaDNEK1G1heHAAAAxkAAAAIAAAACAA6wn3bmFtZQAADIQAAAFqAAACjoKZ70Fwb3N0AAAN8AAAAHgAAACk4zP/3HByZXAAAA5oAAAAVgAAAFaSoZr/eJxjYGRmYZzAwMrAwVTFtIeBgaEHQjM+YDBkZGJgYGJgZWbACgLSXFMYHF4wvJBmDvqfxRDFzMPgDxRmBMkBAL9aCsd4nGNgYGBmgGAZBkYGEEgB8hjBfBYGDyDNx8DBwMTAxsDwgvEFzwv+F+IvpP//Byl8wQDmC7+QAvElGMW/i38V/yT+AWoOEmBkQxcZeQAAVo0S/wB4nGNgQANGDEbMPP83gjAAEL4D43icnVXZdtNWFJU8ZHASOmSgoA7X3DhQ68qEKRgwaSrFdiEdHAitBB2kDHTkncc+62uOQrtWH/m07n09JLR0rbYsls++R1tn2DrnRhwjKn0aiGvUoZKXA6msPZZK90lc13Uvj5UMBnFdthJPSZuonSRKat3sUC7xWOsqWSdYJ+PlIFZPVZ5noAziFB5lSUQbRBuplyZJ4onjJ4kWZxAfJUkgJaMQp9LIUEI1GsRS1aFM6dCr1xNx00DKRqMedVhU90PFJ8c1p9SsA0YqVznCFevVRr4bpwMve5DEOsGzrYcxHnisfpQqkIqR6cg/dkpOlIaBVHHUoVbi6DCTX/eRTCrNQKaMYkWl7oG43f102xYxPXQ6vi5KlUaqurnOKJrt0fGogygP2cbppNzQ2fbw5RlTVKtdcbPtQGYNXErJbHSfRAAdJlLj6QFONZwCqRn1R8XZ588BEslclKo8VTKHegOZMzt7cTHtbiersnCknwcyb3Z2452HQ6dXh3/R+hdM4cxHj+Jifj5C+lBqfiJOJKVGWMzyp4YfcVcgQrkxiAsXyuBThDl0RdrZZl3jtTH2hs/5SqlhPQna6KP4fgr9TiQrHGdRo/VInM1j13Wt3GdQS7W7Fzsyr0OVIu7vCwuuM+eEYZ4WC1VfnvneBTT/Bohn/EDeNIVL+5YpSrRvm6JMu2iKCu0SVKVdNsUU7YoppmnPmmKG9h1TzNKeMzLj/8vc55H7HN7xkJv2XeSmfQ+5ad9HbtoPkJtWITdtHblpLyA3rUZu2lWjOnYEGgZpF1IVQdA0svph3Fab9UDWjDR8aWDyLmLI+upER521tcofxX914gsHcmmip7siF5viLq/bFj483e6rj5pG3bDV+MaR8jAeRnocmtBZ+c3hv+1N3S6a7jKqMugBFUwKwABl7UAC0zrbCaT1mqf48gdgXIZ4zkpDtVSfO4am7+V5X/exOfG+x+3GLrdcd3kJWdYNcmP28N9SZKrrH+UtrVQnR6wrJ49VaxhDKrwour6SlHu0tRu/KKmy8l6U1srnk5CbPYMbQlu27mGwI0xpyiUeXlOlKD3UUo6yQyxvKco84JSLC1qGxLgOdQ9qa8TpoXoYGwshhqG0vRBwSCldFd+0ynfxHqtr2Oj4xRXh6XpyEhGf4ir7UfBU10b96A7avGbdMoMpVaqn+4xPsa/b9lFZaaSOsxe3VAfXNOsaORXTT+Rr4HRvOGjdAz1UfDRBI1U1x+jGKGM0ljXl3wR0MVZ+w2jVYvs93E+dpFWsuUuY7JsT9+C0u/0q+7WcW0bW/dcGvW3kip8jMb8tCvw7B2K3ZA3UO5OBGAvIWdAYxhYmdxiug23EbfY/Jqf/34aFRXJXOxq7eerD1ZNRJXfZ8rjLTXZZ16M2R9VOGvsIjS0PN+bY4XIstsRgQbb+wf8x7gF3aVEC4NDIZZiI2nShnurh6h6rsW04VxIBds2x43QAegAuQd8cu9bzCYD13CPnLsB9cgh2yCH4lByCz8i5BfA5OQRfkEMwIIdgl5w7AA/IIXhIDsEeOQSPyNkE+JIcgq/IIYjJIUjIuQ3wmByCJ+QQfE0OwTdGrk5k/pYH2QD6zqKbQKmdGhzaOGRGrk3Y+zxY9oFFZB9aROqRkesT6lMeLPV7i0j9wSJSfzRyY0L9iQdL/dkiUn+xiNRnxpeZIymvDp7zjg7+BJfqrV4AAAAAAQAB//8AD3icnVVNaBtXEJ6Ztz/ySlr97T7JsrKyVtIqROAk+rGDg521LWqIDylWIHZijGmTkBACaUjaHgKlPZVQktJA6MGHnkopFBJKLiXQQ4PJIYdQQk49hRJ67CGU9BC5sysZKbSnitXMvJn93sybNzMLtLu7+1B8T7uQhiq87xsGKoiLBVSOrdzz3l3zJSGqrFNOaQggujoKYUBnwt/HEqtQwBl+RVHwBDNUuuHLy+u+tDIExX0T45mqVYlHx3RIUzqSqGPJ1eyUJY+iPVNqTLdTLa/WkKzRyiW9XXY91kw3RfzNbXty0t4ewycBX9jYWOhtbbcDTncdu3fHnhwbm7Txsu1cZNOdhY3t7Y0FvLywAcGZ/sZzIgoOTMERv10rkqrl00QiAsQRL4IAQkFn+KgACKdAVbUuaJqhdjyv7JVkRZf1qm1pesn1au3W9EwziKwvNWQ2xUQE5hElnpNm70XCQmlWKiF7zpSld6R5O1wzPbscSgF93mcM+lnS9UuhGFIOiH/4ir6CKGg/Girur6O0dNTC1GTxpWn2TuZcN4cfG47R+ytpOUSOlQxgAmD3vljnsydgBjrg+3MzSRIKLoJCghRxAYRKQj0PKvtQgbNFehd03VgCRO0kJyGqdWznaMautpuRbL3abnl1dLV9GFxZYzrTmsKyq2tFlI2ZeeSb4zSYuGdut+bVWtYycYpa8+QgvjIilyJGSG7Pbxz+fDkSO64kVad65ICcKM+Ghlwl7SaT+Ozqzh87V0Oyuocx8JPDJ6c+ihtHhO7lnbSdjyV9zwqsUdeOFfIHcpevP7pGVx6/fHyFrj0KchDc/2vxjYjBQc7AzoM5VHVcXLlncDlPQwQFRjgNJHRBW6CrQg+yoQlVOw+aIjTlPCjAzxoIgV3OiiE6Eyv3oow+zGjCCF0AnVTS1QuMoz6OhjiBRH0gcZ/8T4/r637Uyspau+G1m2O5OnKea1yNM0EJlBpZBxOold2aVx70U5ObaQ5bx3C62chKO4OaexC9YN0oYkikJdKbS71Di1u4uYRPy05E0Sc0nUQ81jtUbbWq+LTaUiuaLpTop73ZuBf/Mx6fY3YHLzKdi+PK/QGWmamkGY2iVe2Db+kMJSWGSYYyMgCEyGCLwZ1k+E4SUISKX+IqJ6RTSjhUIJwpBM6EzBg6JCihDgdFczAlsqm3MiDpg2HUrRsjB1vcol/2ogqM6yMW3Awafq9HYpD2E0G+l7hsotCxM5Sq47B6xfqwJHHzX3UW7nM63Gccan5leJigmajLvRWlDkJWppK6BjGMBcdyTbQcbMwjd9KIL/yhe3N19ea3AcHTQ790a6Bk0nv6HzGwzyt0g8PPQuSBTBkq9eeFOpgX+ogs3uPZ8YV0HLnKwtfW5KSFHxqFyGszWcAXhaT5enSxtz+t0We8vwVFv0A88hF41nMeuVQBl+OxVDJmxS2ReMtttcGX57KI2+zqriwUJP52/C67yxu/m+k8/pRPm/tne1Ozs/jr7GB2sa+HtBaepQwL/jwIHQl4UgcfH1QAz0RQUVXlBDNF7YKqqMvjuXgMoVjIlcfdTDKWjUtdgSgaYxxPQwafFdfjL0o7pKVQkxrR001ZcKw331lOQQZ/WgvWQx1+6ex3+DnbZ71nff4P1mMzzwAAeJxjYGRgYABinX0v98fz23xl4GZ+ARRhOKcZUQOhFWz+//+/kXkVMw+Qy8HABBIFAGrpDLwAAAB4nGNgZGBgDvqfxRDF/IKB4f9f5tUMQBEUwAMAjKIFvHicY37BwMC8ioGBMRWIvwDZkUC8AIgFoWwQLmBgYIoA4j0MDACthQZKAAAAAAAAAABqAMoA6AFqAjQCegKeAuADEANGA50AAAABAAAADABFAAMAAAAAAAIAEgAfAG4AAABbCZEAAAAAeJx1j8tOwkAYhc8gaIDEGPUBJi4MxFCg0Q0LQ0KEjXHBQhN3pZS2pHTIdIDwAL6Dax/G5/K0nRDjpc3MfP/57wDO8AmB8rvjKVmgTqvkCk5wb/mI+oPlKvnJco2eF8sN3ODVchMXeKNPVOu0lni3LHAuKpYrOBWXlo+oX1mukm8t13AsxpYbeBaPlpu4Fh8jtd7rOIyMbI3a0u31XTnbS0UpTr1EehsTKZ3JoVyo1ARJohxfrXah6sS+SrNpEG4STx/sA/Sd3iRIA+2ZYJ4XzLaha8xCLrRaybEtJddaLQPfOJEx60G3+70FRlBYYw+NGCEiGEi0qLb5uuihz1tixgjJyDIqRgoPCRUPG2ZEhSejPeRZ0EqpBoxIyA583ivsmKnQYbZfRGSYMiZkhYR19B/+30qf1XqYMC/l0czL+8wPE2bYMselajhHPosuekuMf0wluXXuW1LxqTvF7obqAF3+/2zxBVzeduQAAHicbYzbCsMgEER3WzVpYj9lofkk0ZVIvWEsJX/fUl97HmbgDAxcYLDAfzQAXlGgRIUTznjDBVfUeJehc3pMtqTEuYuQfVE1mpM2vXOsZEOzkZ20O9vn+kviVPupxqJHDae9OTr50t6mubkX4uxoE9/nF8AH4bUk2Eu4AMhSWLEBAY5ZuQgACABjILABI0SwAyNwsgQoCUVSRLIKAgcqsQYBRLEkAYhRWLBAiFixBgNEsSYBiFFYuAQAiFixBgFEWVlZWbgB/4WwBI2xBQBEAAA= */ "data:application/font-woff;base64,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"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtZXRhZGF0YT5Db3B5cmlnaHQgKEMpIDIwMTIgYnkgb3JpZ2luYWwgYXV0aG9ycyBAIGZvbnRlbGxvLmNvbTwvbWV0YWRhdGE+CjxkZWZzPgo8Zm9udCBpZD0id2dvLWljb25zIiBob3Jpei1hZHYteD0iMTAwMCIgPgo8Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJ3Z28taWNvbnMiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc3RyZXRjaD0ibm9ybWFsIiB1bml0cy1wZXItZW09IjEwMDAiIGFzY2VudD0iODUwIiBkZXNjZW50PSItMTUwIiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImZhc3QtZm9yd2FyZCIgdW5pY29kZT0iJiN4ZTgxNzsiIGQ9Ik04NjYgMzc0cTE0LTEwIDE0LTI0dC0xNC0yMmwtMzcyLTI0OHEtMjItMTQtMzctNnQtMTUgMzZsMCA0ODJxMCAyOCAxNSAzNnQzNy02eiBtLTQ1NCAwcTE0LTEwIDE0LTI0dC0xNC0yMmwtMzYwLTI0OHEtMjAtMTQtMzYtNnQtMTYgMzZsMCA0ODJxMCAyOCAxNiAzNnQzNi02eiIgaG9yaXotYWR2LXg9Ijg4MCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InRvLWVuZC0xIiB1bmljb2RlPSImI3hlODFhOyIgZD0iTTQxMiAzNzRxMTQtMTAgMTQtMjQgMC0xMi0xNC0yMmwtMzYyLTIyOHEtMjItMTQtMzYtNXQtMTQgMzVsMCA0NDJxMCAyNiAxNCAzNXQzNi01eiBtMTE0IDI2OHE3NCAwIDc0LTU4bDAtNDY2cTAtNTgtNzQtNTgtNzYgMC03NiA1OGwwIDQ2NnEwIDU4IDc2IDU4eiIgaG9yaXotYWR2LXg9IjYwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InBsYXktMSIgdW5pY29kZT0iJiN4ZTgwYzsiIGQ9Ik00ODYgMzc2cTE0LTEwIDE0LTI2IDAtMTQtMTQtMjRsLTQyOC0yNjZxLTI0LTE2LTQxLTZ0LTE3IDQwbDAgNTE0cTAgMzAgMTcgNDB0NDEtNnoiIGhvcml6LWFkdi14PSI1MDAiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVjayIgdW5pY29kZT0iJiN4ZTgxMzsiIGQ9Ik03ODYgMzMxbDAtMTc3cTAtNjYtNDctMTE0dC0xMTQtNDdsLTQ2NCAwcS02NiAwLTExNCA0N3QtNDcgMTE0bDAgNDY0cTAgNjYgNDcgMTE0dDExNCA0N2w0NjQgMHEzNSAwIDY1LTE0IDgtNCAxMC0xM3QtNS0xNmwtMjctMjdxLTYtNi0xMy02LTIgMC01IDEtMTMgMy0yNSAzbC00NjQgMHEtMzcgMC02My0yNnQtMjYtNjNsMC00NjRxMC0zNyAyNi02M3Q2My0yNmw0NjQgMHEzNyAwIDYzIDI2dDI2IDYzbDAgMTQycTAgNyA1IDEybDM2IDM2cTYgNiAxMyA2IDMgMCA3LTIgMTEtNCAxMS0xNnogbTEyOSAyNzNsLTQ1NC00NTRxLTEzLTEzLTMyLTEzdC0zMiAxM2wtMjQwIDI0MHEtMTMgMTMtMTMgMzJ0MTMgMzJsNjEgNjFxMTMgMTMgMzIgMTN0MzItMTNsMTQ3LTE0NyAzNjEgMzYxcTEzIDEzIDMyIDEzdDMyLTEzbDYxLTYxcTEzLTEzIDEzLTMydC0xMy0zMnoiIGhvcml6LWFkdi14PSI5MjguNTcxIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0ibWVudSIgdW5pY29kZT0iJiN4ZTgxYjsiIGQ9Ik02NTAgNDAwcTIyIDAgMzYtMTV0MTQtMzUtMTUtMzUtMzUtMTVsLTYwMCAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHogbS02MDAgMTAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHEyMiAwIDM2LTE1dDE0LTM1LTE1LTM1LTM1LTE1bC02MDAgMHogbTYwMC0zMDBxMjIgMCAzNi0xNXQxNC0zNS0xNS0zNS0zNS0xNWwtNjAwIDBxLTIwIDAtMzUgMTV0LTE1IDM1IDE0IDM1IDM2IDE1bDYwMCAweiIgaG9yaXotYWR2LXg9IjcwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNvbW1lbnQiIHVuaWNvZGU9IiYjeGU4MDA7IiBkPSJNNzgxIDY2MmwtNjI1IDBxLTIxIDAtMzctMTV0LTE2LTM2bDAtMzY1cTAtMjEgMTYtMzd0MzctMTZsMTU2IDAgMC05IDkgOSA0NjAgMHEyMSAwIDM3IDE2dDE2IDM3bDAgMzY1cTAgMjEtMTYgMzZ0LTM3IDE1eiBtMCAxMDVxNjUgMCAxMTEtNDZ0NDYtMTExbDAtMzY1cTAtNjUtNDYtMTExdC0xMTEtNDZsLTQxNiAwLTE1Ni0xNTYgMCAxNTYtNTMgMHEtNjUgMC0xMTEgNDZ0LTQ2IDExMWwwIDM2NXEwIDY1IDQ2IDExMXQxMTEgNDZsNjI1IDB6IiBob3Jpei1hZHYteD0iOTM4IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaGVscC1jaXJjbGVkIiB1bmljb2RlPSImI3hlODBmOyIgZD0iTTUwMCA4MmwwIDEwN3EwIDgtNSAxM3QtMTMgNWwtMTA3IDBxLTggMC0xMy01dC01LTEzbDAtMTA3cTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3ogbTE0MyAzNzVxMCA0OS0zMSA5MXQtNzcgNjUtOTUgMjNxLTEzNiAwLTIwNy0xMTktOC0xMyA0LTIzbDc0LTU2cTQtMyAxMS0zIDkgMCAxNCA3IDMwIDM4IDQ4IDUxIDE5IDEzIDQ4IDEzIDI3IDAgNDgtMTV0MjEtMzNxMC0yMS0xMS0zNHQtMzgtMjVxLTM1LTE2LTY0LTQ4dC0yOS03MGwwLTIwcTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3EwIDExIDEyIDI4dDMwIDI4cTE4IDEwIDI3IDE2dDI2IDIwIDI1IDI3IDE2IDM0IDcgNDV6IG0yMTQtMTA3cTAtMTE3LTU3LTIxNXQtMTU2LTE1Ni0yMTUtNTctMjE1IDU3LTE1NiAxNTYtNTcgMjE1IDU3IDIxNSAxNTYgMTU2IDIxNSA1NyAyMTUtNTcgMTU2LTE1NiA1Ny0yMTV6IiBob3Jpei1hZHYteD0iODU3LjE0MyIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNoZWNrLWVtcHR5IiB1bmljb2RlPSImI3hlODE0OyIgZD0iTTYyNSA3MDdsLTQ2NCAwcS0zNyAwLTYzLTI2dC0yNi02M2wwLTQ2NHEwLTM3IDI2LTYzdDYzLTI2bDQ2NCAwcTM3IDAgNjMgMjZ0MjYgNjNsMCA0NjRxMCAzNy0yNiA2M3QtNjMgMjZ6IG0xNjEtODlsMC00NjRxMC02Ni00Ny0xMTR0LTExNC00N2wtNDY0IDBxLTY2IDAtMTE0IDQ3dC00NyAxMTRsMCA0NjRxMCA2NiA0NyAxMTR0MTE0IDQ3bDQ2NCAwcTY2IDAgMTE0LTQ3dDQ3LTExNHoiIGhvcml6LWFkdi14PSI3ODUuNzE0IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlLWVtcHR5IiB1bmljb2RlPSImI3hlODE2OyIgZD0iTTQyOSA2NTRxLTgzIDAtMTUyLTQxdC0xMTAtMTEwLTQxLTE1MiA0MS0xNTIgMTEwLTExMCAxNTItNDEgMTUyIDQxIDExMCAxMTAgNDEgMTUyLTQxIDE1Mi0xMTAgMTEwLTE1MiA0MXogbTQyOS0zMDRxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlIiB1bmljb2RlPSImI3hlODE1OyIgZD0iTTg1NyAzNTBxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaW5mbyIgdW5pY29kZT0iJiN4ZTgwMTsiIGQ9Ik0zNTcgMTAwbDAtNzFxMC0xNS0xMS0yNXQtMjUtMTFsLTI4NiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMzYgMCAwIDIxNC0zNiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMjE0IDBxMTUgMCAyNS0xMXQxMS0yNWwwLTMyMSAzNiAwcTE1IDAgMjUtMTF0MTEtMjV6IG0tNzEgNjQzbDAtMTA3cTAtMTUtMTEtMjV0LTI1LTExbC0xNDMgMHEtMTUgMC0yNSAxMXQtMTEgMjVsMCAxMDdxMCAxNSAxMSAyNXQyNSAxMWwxNDMgMHExNSAwIDI1LTExdDExLTI1eiIgaG9yaXotYWR2LXg9IjM1Ny4xNDMiIC8+CjwvZm9udD4KPC9kZWZzPgo8L3N2Zz4= */ "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtZXRhZGF0YT5Db3B5cmlnaHQgKEMpIDIwMTIgYnkgb3JpZ2luYWwgYXV0aG9ycyBAIGZvbnRlbGxvLmNvbTwvbWV0YWRhdGE+CjxkZWZzPgo8Zm9udCBpZD0id2dvLWljb25zIiBob3Jpei1hZHYteD0iMTAwMCIgPgo8Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJ3Z28taWNvbnMiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc3RyZXRjaD0ibm9ybWFsIiB1bml0cy1wZXItZW09IjEwMDAiIGFzY2VudD0iODUwIiBkZXNjZW50PSItMTUwIiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImZhc3QtZm9yd2FyZCIgdW5pY29kZT0iJiN4ZTgxNzsiIGQ9Ik04NjYgMzc0cTE0LTEwIDE0LTI0dC0xNC0yMmwtMzcyLTI0OHEtMjItMTQtMzctNnQtMTUgMzZsMCA0ODJxMCAyOCAxNSAzNnQzNy02eiBtLTQ1NCAwcTE0LTEwIDE0LTI0dC0xNC0yMmwtMzYwLTI0OHEtMjAtMTQtMzYtNnQtMTYgMzZsMCA0ODJxMCAyOCAxNiAzNnQzNi02eiIgaG9yaXotYWR2LXg9Ijg4MCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InRvLWVuZC0xIiB1bmljb2RlPSImI3hlODFhOyIgZD0iTTQxMiAzNzRxMTQtMTAgMTQtMjQgMC0xMi0xNC0yMmwtMzYyLTIyOHEtMjItMTQtMzYtNXQtMTQgMzVsMCA0NDJxMCAyNiAxNCAzNXQzNi01eiBtMTE0IDI2OHE3NCAwIDc0LTU4bDAtNDY2cTAtNTgtNzQtNTgtNzYgMC03NiA1OGwwIDQ2NnEwIDU4IDc2IDU4eiIgaG9yaXotYWR2LXg9IjYwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InBsYXktMSIgdW5pY29kZT0iJiN4ZTgwYzsiIGQ9Ik00ODYgMzc2cTE0LTEwIDE0LTI2IDAtMTQtMTQtMjRsLTQyOC0yNjZxLTI0LTE2LTQxLTZ0LTE3IDQwbDAgNTE0cTAgMzAgMTcgNDB0NDEtNnoiIGhvcml6LWFkdi14PSI1MDAiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVjayIgdW5pY29kZT0iJiN4ZTgxMzsiIGQ9Ik03ODYgMzMxbDAtMTc3cTAtNjYtNDctMTE0dC0xMTQtNDdsLTQ2NCAwcS02NiAwLTExNCA0N3QtNDcgMTE0bDAgNDY0cTAgNjYgNDcgMTE0dDExNCA0N2w0NjQgMHEzNSAwIDY1LTE0IDgtNCAxMC0xM3QtNS0xNmwtMjctMjdxLTYtNi0xMy02LTIgMC01IDEtMTMgMy0yNSAzbC00NjQgMHEtMzcgMC02My0yNnQtMjYtNjNsMC00NjRxMC0zNyAyNi02M3Q2My0yNmw0NjQgMHEzNyAwIDYzIDI2dDI2IDYzbDAgMTQycTAgNyA1IDEybDM2IDM2cTYgNiAxMyA2IDMgMCA3LTIgMTEtNCAxMS0xNnogbTEyOSAyNzNsLTQ1NC00NTRxLTEzLTEzLTMyLTEzdC0zMiAxM2wtMjQwIDI0MHEtMTMgMTMtMTMgMzJ0MTMgMzJsNjEgNjFxMTMgMTMgMzIgMTN0MzItMTNsMTQ3LTE0NyAzNjEgMzYxcTEzIDEzIDMyIDEzdDMyLTEzbDYxLTYxcTEzLTEzIDEzLTMydC0xMy0zMnoiIGhvcml6LWFkdi14PSI5MjguNTcxIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0ibWVudSIgdW5pY29kZT0iJiN4ZTgxYjsiIGQ9Ik02NTAgNDAwcTIyIDAgMzYtMTV0MTQtMzUtMTUtMzUtMzUtMTVsLTYwMCAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHogbS02MDAgMTAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHEyMiAwIDM2LTE1dDE0LTM1LTE1LTM1LTM1LTE1bC02MDAgMHogbTYwMC0zMDBxMjIgMCAzNi0xNXQxNC0zNS0xNS0zNS0zNS0xNWwtNjAwIDBxLTIwIDAtMzUgMTV0LTE1IDM1IDE0IDM1IDM2IDE1bDYwMCAweiIgaG9yaXotYWR2LXg9IjcwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNvbW1lbnQiIHVuaWNvZGU9IiYjeGU4MDA7IiBkPSJNNzgxIDY2MmwtNjI1IDBxLTIxIDAtMzctMTV0LTE2LTM2bDAtMzY1cTAtMjEgMTYtMzd0MzctMTZsMTU2IDAgMC05IDkgOSA0NjAgMHEyMSAwIDM3IDE2dDE2IDM3bDAgMzY1cTAgMjEtMTYgMzZ0LTM3IDE1eiBtMCAxMDVxNjUgMCAxMTEtNDZ0NDYtMTExbDAtMzY1cTAtNjUtNDYtMTExdC0xMTEtNDZsLTQxNiAwLTE1Ni0xNTYgMCAxNTYtNTMgMHEtNjUgMC0xMTEgNDZ0LTQ2IDExMWwwIDM2NXEwIDY1IDQ2IDExMXQxMTEgNDZsNjI1IDB6IiBob3Jpei1hZHYteD0iOTM4IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaGVscC1jaXJjbGVkIiB1bmljb2RlPSImI3hlODBmOyIgZD0iTTUwMCA4MmwwIDEwN3EwIDgtNSAxM3QtMTMgNWwtMTA3IDBxLTggMC0xMy01dC01LTEzbDAtMTA3cTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3ogbTE0MyAzNzVxMCA0OS0zMSA5MXQtNzcgNjUtOTUgMjNxLTEzNiAwLTIwNy0xMTktOC0xMyA0LTIzbDc0LTU2cTQtMyAxMS0zIDkgMCAxNCA3IDMwIDM4IDQ4IDUxIDE5IDEzIDQ4IDEzIDI3IDAgNDgtMTV0MjEtMzNxMC0yMS0xMS0zNHQtMzgtMjVxLTM1LTE2LTY0LTQ4dC0yOS03MGwwLTIwcTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3EwIDExIDEyIDI4dDMwIDI4cTE4IDEwIDI3IDE2dDI2IDIwIDI1IDI3IDE2IDM0IDcgNDV6IG0yMTQtMTA3cTAtMTE3LTU3LTIxNXQtMTU2LTE1Ni0yMTUtNTctMjE1IDU3LTE1NiAxNTYtNTcgMjE1IDU3IDIxNSAxNTYgMTU2IDIxNSA1NyAyMTUtNTcgMTU2LTE1NiA1Ny0yMTV6IiBob3Jpei1hZHYteD0iODU3LjE0MyIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNoZWNrLWVtcHR5IiB1bmljb2RlPSImI3hlODE0OyIgZD0iTTYyNSA3MDdsLTQ2NCAwcS0zNyAwLTYzLTI2dC0yNi02M2wwLTQ2NHEwLTM3IDI2LTYzdDYzLTI2bDQ2NCAwcTM3IDAgNjMgMjZ0MjYgNjNsMCA0NjRxMCAzNy0yNiA2M3QtNjMgMjZ6IG0xNjEtODlsMC00NjRxMC02Ni00Ny0xMTR0LTExNC00N2wtNDY0IDBxLTY2IDAtMTE0IDQ3dC00NyAxMTRsMCA0NjRxMCA2NiA0NyAxMTR0MTE0IDQ3bDQ2NCAwcTY2IDAgMTE0LTQ3dDQ3LTExNHoiIGhvcml6LWFkdi14PSI3ODUuNzE0IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlLWVtcHR5IiB1bmljb2RlPSImI3hlODE2OyIgZD0iTTQyOSA2NTRxLTgzIDAtMTUyLTQxdC0xMTAtMTEwLTQxLTE1MiA0MS0xNTIgMTEwLTExMCAxNTItNDEgMTUyIDQxIDExMCAxMTAgNDEgMTUyLTQxIDE1Mi0xMTAgMTEwLTE1MiA0MXogbTQyOS0zMDRxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlIiB1bmljb2RlPSImI3hlODE1OyIgZD0iTTg1NyAzNTBxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaW5mbyIgdW5pY29kZT0iJiN4ZTgwMTsiIGQ9Ik0zNTcgMTAwbDAtNzFxMC0xNS0xMS0yNXQtMjUtMTFsLTI4NiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMzYgMCAwIDIxNC0zNiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMjE0IDBxMTUgMCAyNS0xMXQxMS0yNWwwLTMyMSAzNiAwcTE1IDAgMjUtMTF0MTEtMjV6IG0tNzEgNjQzbDAtMTA3cTAtMTUtMTEtMjV0LTI1LTExbC0xNDMgMHEtMTUgMC0yNSAxMXQtMTEgMjVsMCAxMDdxMCAxNSAxMSAyNXQyNSAxMWwxNDMgMHExNSAwIDI1LTExdDExLTI1eiIgaG9yaXotYWR2LXg9IjM1Ny4xNDMiIC8+CjwvZm9udD4KPC9kZWZzPgo8L3N2Zz4="), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*--- Icons ------------------------------------------------------------------------*/\n\n@font-face {\n  font-family: 'wgo-icons';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff'),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* Available icons: */\n.wgo-icon-fast-forward:before { content: '\\e817'; }\n.wgo-icon-to-end:before { content: '\\e81a'; }\n.wgo-icon-play:before { content: '\\e80c'; }\n.wgo-icon-check:before { content: '\\e813'; }\n.wgo-icon-menu:before { content: '\\e81b'; }\n.wgo-icon-comment:before { content: '\\e800'; }\n.wgo-icon-help-circled:before { content: '\\e80f'; }\n.wgo-icon-check-empty:before { content: '\\e814'; }\n.wgo-icon-circle-empty:before { content: '\\e816'; }\n.wgo-icon-circle:before { content: '\\e815'; }\n.wgo-icon-info:before { content: '\\e801'; }\n\n/*--- /Icons -----------------------------------------------------------------------*/\n\n/*--- Basic ------------------------------------------------------------------------*/\n\n.wgo-player-main {\n\tfont-family: Calibri, Tahoma, Arial;\n\tcolor: black;\n\tmargin: 0 auto;\n\twidth: 100%;\n\theight: 100%;\n\tline-height: normal;\n\tfont-size: 16px;\n\tposition: relative;\n\t-webkit-tap-highlight-color: rgba(0,0,0,0);\n\t-webkit-tap-highlight-color: transparent; /* For some Androids */\n}\n\n.wgo-player-main:after {\n\tcontent: \"\";\n\tclear: both;\n\tdisplay: block;\n}\n\n/*--- /Basic -----------------------------------------------------------------------*/\n\n/*--- Regions ----------------------------------------------------------------------*/\n\n.wgo-player-left, .wgo-player-center, .wgo-player-right  {\n\tfloat: left;\n}\n\n.wgo-player-center {\n\twidth: 100%;\n}\n\n.wgo-player-left-wrapper, .wgo-player-right-wrapper  {\n\theight: 100%;\n\tposition: relative;\n}\n\n/*--- /Regions ----------------------------------------------------------------------*/\n\n/*--- Two columns modificatons ------------------------------------------------------*/\n\n.wgo-twocols .wgo-player-left, .wgo-twocols  .wgo-player-right  {\n\twidth: 30%;\n}\n\n.wgo-twocols .wgo-player-center {\n\twidth: 70%;\n}\n\n/*--- /Two columns modificatons ------------------------------------------------------*/\n\n/*--- Board --------------------------------------------------------------------------*/\n\n.wgo-player-board {\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n}\n\n.wgo-board {\n\tmargin: 0 auto;\n    background-color: #CEB053;\n    border-top: #F0E7A7 solid 1px;\n    border-right: #D1A974 solid 1px;\n    border-left: #CCB467 solid 1px;\n    border-bottom: #665926 solid 3px;\n    /*border-right: #665926 solid 3px;*/\n    border-radius: 3px;\n}\n\n/*--- /Board --------------------------------------------------------------------------*/\n\n/*--- Box styles ----------------------------------------------------------------------*/\n\n.wgo-box-wrapper {\n\tbackground: rgba(226,226,226,0.5);\n\tborder: 1px solid rgba(200,200,200,0.5);\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n}\n\n.wgo-box-title {\n\tmargin: 0 10px;\n\tline-height: 40px;\n\tfont-weight: bold;\n\tfont-size: 20px;\n\theight: 40px;\n\toverflow: hidden;\n}\n\n/*--- /Box styles ----------------------------------------------------------------------*/\n\n/*--- Player box -----------------------------------------------------------------------*/\n\n.wgo-player-wrapper .wgo-box-title::after {\n\tcontent: ' ';\n\tfloat: right;\n\tmargin-top: 10px;\n\tmargin-right: 2px;\n\twidth: 18px;\n\theight: 18px;\n\tborder-radius: 9px;\n\tbox-shadow: 1px 1px 1px 1px rgba(127, 127, 127, 0.3);\n}\n\n.wgo-player-wrapper.wgo-black .wgo-box-title::after {\n\tbackground: rgb(35,36,39);\n\tbackground: linear-gradient(135deg,  rgba(35,36,39,1) 0%,rgba(0,0,0,1) 100%);\n}\n\n.wgo-player-wrapper.wgo-white .wgo-box-title::after {\n\tbackground: rgb(255,255,255);\n\tbackground: linear-gradient(135deg,  rgba(255,255,255,1) 0%,rgba(246,246,246,1) 47%,rgba(237,237,237,1) 100%);\n}\n\n.wgo-player-info {\n\tpadding: 0 2%;\n}\n\n.wgo-player-info-box-wrapper {\n\twidth: 33.3%;\n\tdisplay: inline-block;\n}\n\n.wgo-player-info-box {\n\tpadding: 0px 1px;\n\tmargin: 0 3%;\n\tborder: 1px solid rgba(200,200,200,0.3);\n\tbackground-color: rgba(255,255,255,0.3);\n\tborder-radius: 2px;\n\tfont-size: 12px;\n\ttext-align: center;\n}\n\n.wgo-player-info-title {\n\tfont-size: 11px;\n\toverflow: hidden;\n}\n\n/* right and left modifications*/\n\n.wgo-player-left .wgo-infobox, .wgo-player-right .wgo-infobox {\n\toverflow: hidden;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tleft: 10px;\n}\n\n.wgo-player-right .wgo-player-wrapper, .wgo-player-left .wgo-player-wrapper {\n\theight: 85px;\n\tborder-bottom: 0;\n}\n\n/* top and bottom modifications */\n\n.wgo-player-top .wgo-player-info, .wgo-player-bottom .wgo-player-info {\n\tposition: absolute;\n\twidth: 40%;\n\tright: 0;\n\ttop: 4px;\n\tbottom: 4px;\n\toverflow: hidden;\n\ttext-align: right;\n}\n\n.wgo-player-top .wgo-player-wrapper, .wgo-player-bottom .wgo-player-wrapper {\n\theight: 40px;\n\tdisplay: inline-block;\n\twidth: 50%;\n\tmargin: 0;\n\tposition: relative;\n}\n\n.wgo-player-top .wgo-player-wrapper.wgo-black {\n\tborder-left-width: 0;\n}\n\n.wgo-player-top .wgo-infobox .wgo-box-title, .wgo-player-bottom .wgo-infobox .wgo-box-title {\n\tposition: absolute;\n\tright: 40%;\n\tleft: 0;\n\tmargin: 0 5px;\n\tz-index: 500;\n}\n\n.wgo-player-top .wgo-player-wrapper .wgo-box-title::after {\n\tfloat: left;\n\tmargin-right: 7px;\n}\n\n/* S modification */\n\n.wgo-small .wgo-player-top .wgo-player-info, .wgo-small .wgo-player-bottom .wgo-player-info,\n.wgo-xsmall .wgo-player-top .wgo-player-info, .wgo-xsmall .wgo-player-bottom .wgo-player-info  {\n\twidth: 30%;\t\n}\n\n.wgo-small .wgo-player-top .wgo-infobox .wgo-box-title, .wgo-small  .wgo-player-bottom .wgo-infobox .wgo-box-title,\n.wgo-xsmall .wgo-player-top .wgo-infobox .wgo-box-title, .wgo-xsmall  .wgo-player-bottom .wgo-infobox .wgo-box-title {\n\tright: 30%;\n}\n\n.wgo-small .wgo-player-info-box-wrapper,\n.wgo-xsmall .wgo-player-info-box-wrapper {\n\twidth: 50%;\n}\n\n.wgo-small .wgo-player-info-box-wrapper:last-child,\n.wgo-xsmall .wgo-player-info-box-wrapper:last-child {\n\tdisplay: none;\n}\n\n/* XS modification */\n\n.wgo-xsmall .wgo-player-info-title {\n\tdisplay: none;\n}\n\n.wgo-xsmall .wgo-player-wrapper { \n\tdisplay: block;\n\theight: 30px;\n\twidth: 100%;\n}\n\n.wgo-xsmall .wgo-infobox{ \n\tmargin-bottom: 4px;\n}\n\n.wgo-xsmall .wgo-box-title { \n\tfont-size: 15px;\n\theight: 30px;\n\tline-height: 30px;\n}\n\n.wgo-xsmall .wgo-player-wrapper.wgo-black {\n\tborder-top: 0;\n\tborder-left-width: 1px;\n}\n\n.wgo-xsmall .wgo-player-wrapper .wgo-box-title::after {\n\tcontent: ' ';\n\tmargin-top: 7px;\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 7px;\n}\n\n/*--- /Player box -----------------------------------------------------------------------*/\n\n/*--- Comments box ----------------------------------------------------------------------*/\n\n.wgo-comments-wrapper {\n\toverflow: auto;\n\tmargin: 0 0 0 0;\n\theight: 100%;\n\tposition: relative;\n\tbox-sizing: border-box;\n}\n\n.wgo-comments-content {\n\tpadding: 3px 5px;\n\tborder: 1px solid rgba(200,200,200,0.3);\n\tbackground-color: rgba(255,255,255,0.3);\n\tborder-radius: 2px;\n\toverflow-y: auto;\n}\n\n.wgo-comments-content p {\n\tfont-size: 0.9em;\n\tmargin: 0.5em 0;\n}\n\n.wgo-help { \n\tbackground-color: rgba(236, 226, 216, 0.90);\n\tpadding: 1px 7px;\n\tmargin-bottom: 5px;\n}\n\n.wgo-notification { \n\tbackground-color: rgba(16, 16, 16, 0.95);\n\tcolor: white;\n\tpadding: 1px 7px;\n\tmargin-bottom: 5px;\n}\n\n.wgo-commentbox .wgo-box-title {\t\n\tbackground-repeat: no-repeat;\n\tbackground-position: right center;\n\tbackground-size: 24px;\n}\n\n.wgo-commentbox .wgo-box-title::after {\n\tcontent: '\\e800';\n\tfont-family: \"wgo-icons\";\n\tfloat: right;\n\tfont-weight: normal;\n\tfont-size: 0.9em;\n\tpadding-top: 4px;\n\twidth: 22px;\n\ttext-align: center;\n}\n\n.wgo-commentbox.wgo-gameinfo .wgo-box-title::after {\n\tcontent: '\\e801';\n\tpadding-top: 2px;\n}\n\n.wgo-comments-nick {\n\tcolor: rgba(0,0,0,0.75);\n}\n\na.wgo-move-link { \n\ttext-decoration: none; \n\tborder-bottom:1px dotted; \n}\n\n/* right and left modifications */\n\n.wgo-player-right .wgo-comments-content, .wgo-player-left .wgo-comments-content {\n\tposition: absolute;\n\tleft: 10px;\n\tright: 10px;\n\tbottom: 10px;\n\ttop: 40px;\n}\n\n.wgo-player-right .wgo-commentbox, .wgo-player-left .wgo-commentbox {\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\tleft: 10px;\n\ttop: 170px;\n}\n\n/* top and bottom modifications */\n\n.wgo-player-top .wgo-comments-content, .wgo-player-bottom .wgo-comments-content {\n\tposition: absolute;\n\tleft: 40px;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\t\n}\n\n/* TODO: handle too long title */\n.wgo-player-top .wgo-commentbox .wgo-box-title, .wgo-player-bottom .wgo-commentbox .wgo-box-title { \n\ttransform: rotate(-90deg);\n\t-ms-transform: rotate(-90deg);\n\t-webkit-transform: rotate(-90deg);\n\tposition: absolute;\n\tleft: -50px;\n\ttop: 55px;\n}\n\n.wgo-player-top .wgo-comments-wrapper, .wgo-player-bottom .wgo-comments-wrapper {\n\tmargin-top: 10px;\n\theight: 150px;\n}\n\n/* game info table */\n\n.wgo-commentbox .wgo-info-list {\n\tdisplay: table;\n\twidth: 100%;\n}\n\n.wgo-commentbox .wgo-info-title {\n\tdisplay: table-caption;\n\tfont-weight: 600;\n\tborder-bottom: 2px solid rgba(200, 200, 200, 0.3);\n\tpadding: 2px 0;\n}\n\n.wgo-commentbox .wgo-info-item {\n\tdisplay: table-row;\n}\n\n.wgo-commentbox .wgo-info-label, .wgo-commentbox .wgo-info-value {\n\tdisplay: table-cell;\n\tborder-bottom: 1px solid rgba(200, 200, 200, 0.3);\n\tpadding: 2px 15px 2px 0;\n}\n\n.wgo-commentbox .wgo-info-label {\n\tcolor: #000;\n}\n\n.wgo-commentbox .wgo-info-value {\n\tcolor: #4c4c4c;\n}\n\n/* in gameinfo, last row is without border*/\n.wgo-commentbox.wgo-gameinfo .wgo-info-item:last-child .wgo-info-label, .wgo-commentbox.wgo-gameinfo .wgo-info-item:last-child .wgo-info-value {\n\tborder-bottom: 0;\n}\n\n/*--- /Comments box ----------------------------------------------------------------------*/\n\n/*--- Control box ------------------------------------------------------------------------*/\n\n.wgo-player-control {\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n}\n\n.wgo-control-wrapper {\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.wgo-ctrlgroup-left {\n\tfloat: left;\n}\n\n.wgo-ctrlgroup-right {\n\tfloat: right;\n}\n\n.wgo-ctrlgroup-control {\n\tmargin: 0 auto;\n}\n\n/* button widget */\n\nbutton.wgo-button {\n\tborder: 1px solid rgba(200,200,200,0.3);\n\tborder-radius: 2px;\n\tbackground-color: rgba(255,255,255,0.3);\n\twidth: 44px;\n\theight: 44px;\n\tmargin: 0 3px;\n\tvertical-align: middle;\n}\n\nbutton.wgo-button:not([disabled]):hover, \ninput[type=\"text\"].wgo-player-mn-value:focus {\n\tbackground-color: rgba(255,255,255,0.45);\n\tborder: 1px solid rgba(100,100,100,0.3);\n\tbox-shadow: 0 0 20px 0 rgba(150,150,150,0.5);\n}\n\nbutton.wgo-button.wgo-selected {\n\tbackground-color: rgba(255,255,255,0.6);\n\tborder: 1px solid rgba(0,0,0,0.5);\n}\n\nbutton.wgo-button.wgo-selected:hover {\n\tbackground-color: rgba(255,255,255,0.7);\n\tborder: 1px solid rgba(0,0,0,0.7);\n}\n\n.wgo-button::before {\n\tfont-family: \"wgo-icons\";\n\tfont-size: 36px;\n\tdisplay: inline-block;\n}\n\n.wgo-button[disabled]::before, input[type=\"text\"].wgo-player-mn-value[disabled] {\n\tcolor: rgba(64,64,64,0.5);\n}\n\n.wgo-button:not([disabled]):active::before {\n\tposition: relative;\n\ttop: 1px;\n\tleft: 1px;\n}\n\n.wgo-button-first::before, .wgo-button-multiprev::before, .wgo-button-previous::before  {\n\ttransform: scaleX(-1);\n\t-moz-transform: scaleX(-1);\n\t-webkit-transform: scaleX(-1);\n\t-ms-transform: scaleX(-1);\n}\n\n.wgo-button-first::before {\n\tcontent: '\\e81a';\n}\n\n.wgo-button-multiprev::before {\n\tcontent: '\\e817';\n\tmargin-left: -5px;\n}\n\n.wgo-button-previous::before {\n\tcontent: '\\e80c';\n}\n\n.wgo-button-next::before {\n\tcontent: '\\e80c';\n}\n\n.wgo-button-multinext::before {\n\tcontent: '\\e817';\n}\n\n.wgo-button-last::before {\n\tcontent: '\\e81a';\n}\n\n.wgo-button-menu::before  {\n\tcontent: '\\e81b';\n\tfont-size: 25px;\n\tfont-weight: normal;\n\tpadding-top: 5px;\n}\n.wgo-button-about::before  {\n\tcontent: '\\e80f';\n\tfont-size: 30px;\n\tfont-weight: normal;\n}\n\n/* move number widget */\n\ninput[type=\"text\"].wgo-player-mn-value  {\n\tborder: 1px solid rgba(200,200,200,0.3);\n\tborder-radius: 2px;\n\tbackground-color: rgba(255,255,255,0.3);\n\twidth: 28px;\n\tfont-weight: bold;\n\tfont-size: 15px;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\toutline: 0;\n}\n\n.wgo-player-mn-wrapper {\n\tdisplay: inline-block;\n\twidth: 38px;\n\ttext-align: center;\n}\n\n/* top and bottom modifications */\n\n.wgo-player-top .wgo-player-control {\n\tpadding-bottom: 5px;\n}\n\n.wgo-player-bottom .wgo-player-control {\n\tpadding-top: 5px;\n}\n\n/* display less buttons */\n\n.wgo-440 .wgo-button-multiprev, \n.wgo-440 .wgo-button-multinext {\n\tdisplay: none;\n}\n\n.wgo-340 .wgo-button-multiprev, \n.wgo-340 .wgo-button-multinext, \n.wgo-340 .wgo-button-first, \n.wgo-340 .wgo-button-last {\n\tdisplay: none;\n}\n\n/*--- /Control box ------------------------------------------------------------------------*/\n\n/*--- Control menu -------------------------------------------------------------------------*/\n\n.wgo-player-menu {\n\tborder: 1px solid rgba(0,0,0,0.5);\n\tz-index: 900;\n\tmargin-top: -1px;\n\tbox-shadow: 0 0 20px 0 rgba(127,127,127,0.5);\n\tfont-weight: bold;\n\tcolor: #292929;\n\ttext-align: left;\n}\n\n.wgo-menu-item {\n\tpadding: 5px 10px 5px 5px;\n\tbackground-color: rgba(255,255,255,0.85);\n\tcursor: pointer;\n\tbackground-repeat: no-repeat;\n\tbackground-position: left center;\n\tbackground-size: 25px;\n}\n\n.wgo-menu-item:not(.wgo-disabled):hover {\n\tbackground-color: rgba(225,225,225,0.85);\n}\n\n.wgo-menu-item::before {\n\tcontent: ' ';\n\tfont-family: \"wgo-icons\";\n\tcolor: #000;\n\twidth: 20px;\n\tdisplay: inline-block;\n\tfont-weight: normal;\n}\n\n.wgo-menu-item.wgo-selected::before {\n\tcontent: '\\e813';\n}\n\n.wgo-menu-item.wgo-disabled {\n\tcolor: #888;\n\tcursor: Default;\n}\n\n.wgo-menu-item.wgo-disabled::before {\n\tcolor: #888;\n}\n\n/*--- /Control menu -------------------------------------------------------------------------*/\n\n/*--- Overlay window ----------------------------------------------------------------------*/\n\n.wgo-info-overlay {\n\tposition: absolute;\n\tz-index: 1000;\n}\n\n.wgo-info-message {\n\tmargin: 15% auto;\n\tmin-height: 50%;\n\tmax-height: 70%;\n\tmin-width: 50%;\n\tmax-width: 70%;\n\tbackground-color: rgba(0,0,0,0.95);\n\toverflow: auto;\n\tpadding: 20px;\n\tbox-sizing:border-box;\n\t-moz-box-sizing:border-box;\n\t-webkit-box-sizing:border-box;\n\tcolor: #d9d9d9;\n\tbox-shadow: 0px 0px 50px 5px rgb(0,0,0);\n\tborder: 1px solid #333;\n\tposition: relative;\n}\n\n.wgo-info-message a {\n\tcolor: #fff !important;\n}\n\n.wgo-info-message h1 {\n\tfont-size: 2em !important;\n\tcolor: #fff !important;\n\tfont-weight: bold !important;\n\tmargin: 0 0 20px 0 !important;\n\tpadding: 0 !important;\n}\n\n.wgo-info-close {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 10px;\n\tfont-size: 10px;\n}\n\n/*--- /Overlay window ----------------------------------------------------------------------*/\n\n/*--- Permalinks ---------------------------------------------------------------------------*/\n\ninput[type=\"text\"].wgo-permalink {\n\tpadding: 7px 10px !important;\n\tborder: 1px solid white !important;\n\tcolor: white !important;\n\twidth: 100% !important;\n\tbackground-color: rgba(0,0,0,0) !important;\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n}\n\n/*--- /Permalinks ---------------------------------------------------------------------------*/\n", "",{"version":3,"sources":["webpack://./static/dtale/side/wgo/wgo.player.css"],"names":[],"mappings":"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","sourcesContent":["/*--- Icons ------------------------------------------------------------------------*/\n\n@font-face {\n  font-family: 'wgo-icons';\n  src: url('data:application/font-woff;base64,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') format('woff'),\n       url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtZXRhZGF0YT5Db3B5cmlnaHQgKEMpIDIwMTIgYnkgb3JpZ2luYWwgYXV0aG9ycyBAIGZvbnRlbGxvLmNvbTwvbWV0YWRhdGE+CjxkZWZzPgo8Zm9udCBpZD0id2dvLWljb25zIiBob3Jpei1hZHYteD0iMTAwMCIgPgo8Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJ3Z28taWNvbnMiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc3RyZXRjaD0ibm9ybWFsIiB1bml0cy1wZXItZW09IjEwMDAiIGFzY2VudD0iODUwIiBkZXNjZW50PSItMTUwIiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImZhc3QtZm9yd2FyZCIgdW5pY29kZT0iJiN4ZTgxNzsiIGQ9Ik04NjYgMzc0cTE0LTEwIDE0LTI0dC0xNC0yMmwtMzcyLTI0OHEtMjItMTQtMzctNnQtMTUgMzZsMCA0ODJxMCAyOCAxNSAzNnQzNy02eiBtLTQ1NCAwcTE0LTEwIDE0LTI0dC0xNC0yMmwtMzYwLTI0OHEtMjAtMTQtMzYtNnQtMTYgMzZsMCA0ODJxMCAyOCAxNiAzNnQzNi02eiIgaG9yaXotYWR2LXg9Ijg4MCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InRvLWVuZC0xIiB1bmljb2RlPSImI3hlODFhOyIgZD0iTTQxMiAzNzRxMTQtMTAgMTQtMjQgMC0xMi0xNC0yMmwtMzYyLTIyOHEtMjItMTQtMzYtNXQtMTQgMzVsMCA0NDJxMCAyNiAxNCAzNXQzNi01eiBtMTE0IDI2OHE3NCAwIDc0LTU4bDAtNDY2cTAtNTgtNzQtNTgtNzYgMC03NiA1OGwwIDQ2NnEwIDU4IDc2IDU4eiIgaG9yaXotYWR2LXg9IjYwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InBsYXktMSIgdW5pY29kZT0iJiN4ZTgwYzsiIGQ9Ik00ODYgMzc2cTE0LTEwIDE0LTI2IDAtMTQtMTQtMjRsLTQyOC0yNjZxLTI0LTE2LTQxLTZ0LTE3IDQwbDAgNTE0cTAgMzAgMTcgNDB0NDEtNnoiIGhvcml6LWFkdi14PSI1MDAiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVjayIgdW5pY29kZT0iJiN4ZTgxMzsiIGQ9Ik03ODYgMzMxbDAtMTc3cTAtNjYtNDctMTE0dC0xMTQtNDdsLTQ2NCAwcS02NiAwLTExNCA0N3QtNDcgMTE0bDAgNDY0cTAgNjYgNDcgMTE0dDExNCA0N2w0NjQgMHEzNSAwIDY1LTE0IDgtNCAxMC0xM3QtNS0xNmwtMjctMjdxLTYtNi0xMy02LTIgMC01IDEtMTMgMy0yNSAzbC00NjQgMHEtMzcgMC02My0yNnQtMjYtNjNsMC00NjRxMC0zNyAyNi02M3Q2My0yNmw0NjQgMHEzNyAwIDYzIDI2dDI2IDYzbDAgMTQycTAgNyA1IDEybDM2IDM2cTYgNiAxMyA2IDMgMCA3LTIgMTEtNCAxMS0xNnogbTEyOSAyNzNsLTQ1NC00NTRxLTEzLTEzLTMyLTEzdC0zMiAxM2wtMjQwIDI0MHEtMTMgMTMtMTMgMzJ0MTMgMzJsNjEgNjFxMTMgMTMgMzIgMTN0MzItMTNsMTQ3LTE0NyAzNjEgMzYxcTEzIDEzIDMyIDEzdDMyLTEzbDYxLTYxcTEzLTEzIDEzLTMydC0xMy0zMnoiIGhvcml6LWFkdi14PSI5MjguNTcxIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0ibWVudSIgdW5pY29kZT0iJiN4ZTgxYjsiIGQ9Ik02NTAgNDAwcTIyIDAgMzYtMTV0MTQtMzUtMTUtMzUtMzUtMTVsLTYwMCAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHogbS02MDAgMTAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHEyMiAwIDM2LTE1dDE0LTM1LTE1LTM1LTM1LTE1bC02MDAgMHogbTYwMC0zMDBxMjIgMCAzNi0xNXQxNC0zNS0xNS0zNS0zNS0xNWwtNjAwIDBxLTIwIDAtMzUgMTV0LTE1IDM1IDE0IDM1IDM2IDE1bDYwMCAweiIgaG9yaXotYWR2LXg9IjcwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNvbW1lbnQiIHVuaWNvZGU9IiYjeGU4MDA7IiBkPSJNNzgxIDY2MmwtNjI1IDBxLTIxIDAtMzctMTV0LTE2LTM2bDAtMzY1cTAtMjEgMTYtMzd0MzctMTZsMTU2IDAgMC05IDkgOSA0NjAgMHEyMSAwIDM3IDE2dDE2IDM3bDAgMzY1cTAgMjEtMTYgMzZ0LTM3IDE1eiBtMCAxMDVxNjUgMCAxMTEtNDZ0NDYtMTExbDAtMzY1cTAtNjUtNDYtMTExdC0xMTEtNDZsLTQxNiAwLTE1Ni0xNTYgMCAxNTYtNTMgMHEtNjUgMC0xMTEgNDZ0LTQ2IDExMWwwIDM2NXEwIDY1IDQ2IDExMXQxMTEgNDZsNjI1IDB6IiBob3Jpei1hZHYteD0iOTM4IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaGVscC1jaXJjbGVkIiB1bmljb2RlPSImI3hlODBmOyIgZD0iTTUwMCA4MmwwIDEwN3EwIDgtNSAxM3QtMTMgNWwtMTA3IDBxLTggMC0xMy01dC01LTEzbDAtMTA3cTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3ogbTE0MyAzNzVxMCA0OS0zMSA5MXQtNzcgNjUtOTUgMjNxLTEzNiAwLTIwNy0xMTktOC0xMyA0LTIzbDc0LTU2cTQtMyAxMS0zIDkgMCAxNCA3IDMwIDM4IDQ4IDUxIDE5IDEzIDQ4IDEzIDI3IDAgNDgtMTV0MjEtMzNxMC0yMS0xMS0zNHQtMzgtMjVxLTM1LTE2LTY0LTQ4dC0yOS03MGwwLTIwcTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3EwIDExIDEyIDI4dDMwIDI4cTE4IDEwIDI3IDE2dDI2IDIwIDI1IDI3IDE2IDM0IDcgNDV6IG0yMTQtMTA3cTAtMTE3LTU3LTIxNXQtMTU2LTE1Ni0yMTUtNTctMjE1IDU3LTE1NiAxNTYtNTcgMjE1IDU3IDIxNSAxNTYgMTU2IDIxNSA1NyAyMTUtNTcgMTU2LTE1NiA1Ny0yMTV6IiBob3Jpei1hZHYteD0iODU3LjE0MyIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNoZWNrLWVtcHR5IiB1bmljb2RlPSImI3hlODE0OyIgZD0iTTYyNSA3MDdsLTQ2NCAwcS0zNyAwLTYzLTI2dC0yNi02M2wwLTQ2NHEwLTM3IDI2LTYzdDYzLTI2bDQ2NCAwcTM3IDAgNjMgMjZ0MjYgNjNsMCA0NjRxMCAzNy0yNiA2M3QtNjMgMjZ6IG0xNjEtODlsMC00NjRxMC02Ni00Ny0xMTR0LTExNC00N2wtNDY0IDBxLTY2IDAtMTE0IDQ3dC00NyAxMTRsMCA0NjRxMCA2NiA0NyAxMTR0MTE0IDQ3bDQ2NCAwcTY2IDAgMTE0LTQ3dDQ3LTExNHoiIGhvcml6LWFkdi14PSI3ODUuNzE0IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlLWVtcHR5IiB1bmljb2RlPSImI3hlODE2OyIgZD0iTTQyOSA2NTRxLTgzIDAtMTUyLTQxdC0xMTAtMTEwLTQxLTE1MiA0MS0xNTIgMTEwLTExMCAxNTItNDEgMTUyIDQxIDExMCAxMTAgNDEgMTUyLTQxIDE1Mi0xMTAgMTEwLTE1MiA0MXogbTQyOS0zMDRxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlIiB1bmljb2RlPSImI3hlODE1OyIgZD0iTTg1NyAzNTBxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaW5mbyIgdW5pY29kZT0iJiN4ZTgwMTsiIGQ9Ik0zNTcgMTAwbDAtNzFxMC0xNS0xMS0yNXQtMjUtMTFsLTI4NiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMzYgMCAwIDIxNC0zNiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMjE0IDBxMTUgMCAyNS0xMXQxMS0yNWwwLTMyMSAzNiAwcTE1IDAgMjUtMTF0MTEtMjV6IG0tNzEgNjQzbDAtMTA3cTAtMTUtMTEtMjV0LTI1LTExbC0xNDMgMHEtMTUgMC0yNSAxMXQtMTEgMjVsMCAxMDdxMCAxNSAxMSAyNXQyNSAxMWwxNDMgMHExNSAwIDI1LTExdDExLTI1eiIgaG9yaXotYWR2LXg9IjM1Ny4xNDMiIC8+CjwvZm9udD4KPC9kZWZzPgo8L3N2Zz4=') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* Available icons: */\n.wgo-icon-fast-forward:before { content: '\\e817'; }\n.wgo-icon-to-end:before { content: '\\e81a'; }\n.wgo-icon-play:before { content: '\\e80c'; }\n.wgo-icon-check:before { content: '\\e813'; }\n.wgo-icon-menu:before { content: '\\e81b'; }\n.wgo-icon-comment:before { content: '\\e800'; }\n.wgo-icon-help-circled:before { content: '\\e80f'; }\n.wgo-icon-check-empty:before { content: '\\e814'; }\n.wgo-icon-circle-empty:before { content: '\\e816'; }\n.wgo-icon-circle:before { content: '\\e815'; }\n.wgo-icon-info:before { content: '\\e801'; }\n\n/*--- /Icons -----------------------------------------------------------------------*/\n\n/*--- Basic ------------------------------------------------------------------------*/\n\n.wgo-player-main {\n\tfont-family: Calibri, Tahoma, Arial;\n\tcolor: black;\n\tmargin: 0 auto;\n\twidth: 100%;\n\theight: 100%;\n\tline-height: normal;\n\tfont-size: 16px;\n\tposition: relative;\n\t-webkit-tap-highlight-color: rgba(0,0,0,0);\n\t-webkit-tap-highlight-color: transparent; /* For some Androids */\n}\n\n.wgo-player-main:after {\n\tcontent: \"\";\n\tclear: both;\n\tdisplay: block;\n}\n\n/*--- /Basic -----------------------------------------------------------------------*/\n\n/*--- Regions ----------------------------------------------------------------------*/\n\n.wgo-player-left, .wgo-player-center, .wgo-player-right  {\n\tfloat: left;\n}\n\n.wgo-player-center {\n\twidth: 100%;\n}\n\n.wgo-player-left-wrapper, .wgo-player-right-wrapper  {\n\theight: 100%;\n\tposition: relative;\n}\n\n/*--- /Regions ----------------------------------------------------------------------*/\n\n/*--- Two columns modificatons ------------------------------------------------------*/\n\n.wgo-twocols .wgo-player-left, .wgo-twocols  .wgo-player-right  {\n\twidth: 30%;\n}\n\n.wgo-twocols .wgo-player-center {\n\twidth: 70%;\n}\n\n/*--- /Two columns modificatons ------------------------------------------------------*/\n\n/*--- Board --------------------------------------------------------------------------*/\n\n.wgo-player-board {\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n}\n\n.wgo-board {\n\tmargin: 0 auto;\n    background-color: #CEB053;\n    border-top: #F0E7A7 solid 1px;\n    border-right: #D1A974 solid 1px;\n    border-left: #CCB467 solid 1px;\n    border-bottom: #665926 solid 3px;\n    /*border-right: #665926 solid 3px;*/\n    border-radius: 3px;\n}\n\n/*--- /Board --------------------------------------------------------------------------*/\n\n/*--- Box styles ----------------------------------------------------------------------*/\n\n.wgo-box-wrapper {\n\tbackground: rgba(226,226,226,0.5);\n\tborder: 1px solid rgba(200,200,200,0.5);\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n}\n\n.wgo-box-title {\n\tmargin: 0 10px;\n\tline-height: 40px;\n\tfont-weight: bold;\n\tfont-size: 20px;\n\theight: 40px;\n\toverflow: hidden;\n}\n\n/*--- /Box styles ----------------------------------------------------------------------*/\n\n/*--- Player box -----------------------------------------------------------------------*/\n\n.wgo-player-wrapper .wgo-box-title::after {\n\tcontent: ' ';\n\tfloat: right;\n\tmargin-top: 10px;\n\tmargin-right: 2px;\n\twidth: 18px;\n\theight: 18px;\n\tborder-radius: 9px;\n\tbox-shadow: 1px 1px 1px 1px rgba(127, 127, 127, 0.3);\n}\n\n.wgo-player-wrapper.wgo-black .wgo-box-title::after {\n\tbackground: rgb(35,36,39);\n\tbackground: -moz-linear-gradient(-45deg,  rgba(35,36,39,1) 0%, rgba(0,0,0,1) 100%);\n\tbackground: -webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(35,36,39,1)), color-stop(100%,rgba(0,0,0,1)));\n\tbackground: -webkit-linear-gradient(-45deg,  rgba(35,36,39,1) 0%,rgba(0,0,0,1) 100%);\n\tbackground: -o-linear-gradient(-45deg,  rgba(35,36,39,1) 0%,rgba(0,0,0,1) 100%);\n\tbackground: -ms-linear-gradient(-45deg,  rgba(35,36,39,1) 0%,rgba(0,0,0,1) 100%);\n\tbackground: linear-gradient(135deg,  rgba(35,36,39,1) 0%,rgba(0,0,0,1) 100%);\n}\n\n.wgo-player-wrapper.wgo-white .wgo-box-title::after {\n\tbackground: rgb(255,255,255);\n\tbackground: -moz-linear-gradient(-45deg,  rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);\n\tbackground: -webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(255,255,255,1)), color-stop(47%,rgba(246,246,246,1)), color-stop(100%,rgba(237,237,237,1)));\n\tbackground: -webkit-linear-gradient(-45deg,  rgba(255,255,255,1) 0%,rgba(246,246,246,1) 47%,rgba(237,237,237,1) 100%);\n\tbackground: -o-linear-gradient(-45deg,  rgba(255,255,255,1) 0%,rgba(246,246,246,1) 47%,rgba(237,237,237,1) 100%);\n\tbackground: -ms-linear-gradient(-45deg,  rgba(255,255,255,1) 0%,rgba(246,246,246,1) 47%,rgba(237,237,237,1) 100%);\n\tbackground: linear-gradient(135deg,  rgba(255,255,255,1) 0%,rgba(246,246,246,1) 47%,rgba(237,237,237,1) 100%);\n}\n\n.wgo-player-info {\n\tpadding: 0 2%;\n}\n\n.wgo-player-info-box-wrapper {\n\twidth: 33.3%;\n\tdisplay: inline-block;\n}\n\n.wgo-player-info-box {\n\tpadding: 0px 1px;\n\tmargin: 0 3%;\n\tborder: 1px solid rgba(200,200,200,0.3);\n\tbackground-color: rgba(255,255,255,0.3);\n\tborder-radius: 2px;\n\tfont-size: 12px;\n\ttext-align: center;\n}\n\n.wgo-player-info-title {\n\tfont-size: 11px;\n\toverflow: hidden;\n}\n\n/* right and left modifications*/\n\n.wgo-player-left .wgo-infobox, .wgo-player-right .wgo-infobox {\n\toverflow: hidden;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tleft: 10px;\n}\n\n.wgo-player-right .wgo-player-wrapper, .wgo-player-left .wgo-player-wrapper {\n\theight: 85px;\n\tborder-bottom: 0;\n}\n\n/* top and bottom modifications */\n\n.wgo-player-top .wgo-player-info, .wgo-player-bottom .wgo-player-info {\n\tposition: absolute;\n\twidth: 40%;\n\tright: 0;\n\ttop: 4px;\n\tbottom: 4px;\n\toverflow: hidden;\n\ttext-align: right;\n}\n\n.wgo-player-top .wgo-player-wrapper, .wgo-player-bottom .wgo-player-wrapper {\n\theight: 40px;\n\tdisplay: inline-block;\n\twidth: 50%;\n\tmargin: 0;\n\tposition: relative;\n}\n\n.wgo-player-top .wgo-player-wrapper.wgo-black {\n\tborder-left-width: 0;\n}\n\n.wgo-player-top .wgo-infobox .wgo-box-title, .wgo-player-bottom .wgo-infobox .wgo-box-title {\n\tposition: absolute;\n\tright: 40%;\n\tleft: 0;\n\tmargin: 0 5px;\n\tz-index: 500;\n}\n\n.wgo-player-top .wgo-player-wrapper .wgo-box-title::after {\n\tfloat: left;\n\tmargin-right: 7px;\n}\n\n/* S modification */\n\n.wgo-small .wgo-player-top .wgo-player-info, .wgo-small .wgo-player-bottom .wgo-player-info,\n.wgo-xsmall .wgo-player-top .wgo-player-info, .wgo-xsmall .wgo-player-bottom .wgo-player-info  {\n\twidth: 30%;\t\n}\n\n.wgo-small .wgo-player-top .wgo-infobox .wgo-box-title, .wgo-small  .wgo-player-bottom .wgo-infobox .wgo-box-title,\n.wgo-xsmall .wgo-player-top .wgo-infobox .wgo-box-title, .wgo-xsmall  .wgo-player-bottom .wgo-infobox .wgo-box-title {\n\tright: 30%;\n}\n\n.wgo-small .wgo-player-info-box-wrapper,\n.wgo-xsmall .wgo-player-info-box-wrapper {\n\twidth: 50%;\n}\n\n.wgo-small .wgo-player-info-box-wrapper:last-child,\n.wgo-xsmall .wgo-player-info-box-wrapper:last-child {\n\tdisplay: none;\n}\n\n/* XS modification */\n\n.wgo-xsmall .wgo-player-info-title {\n\tdisplay: none;\n}\n\n.wgo-xsmall .wgo-player-wrapper { \n\tdisplay: block;\n\theight: 30px;\n\twidth: 100%;\n}\n\n.wgo-xsmall .wgo-infobox{ \n\tmargin-bottom: 4px;\n}\n\n.wgo-xsmall .wgo-box-title { \n\tfont-size: 15px;\n\theight: 30px;\n\tline-height: 30px;\n}\n\n.wgo-xsmall .wgo-player-wrapper.wgo-black {\n\tborder-top: 0;\n\tborder-left-width: 1px;\n}\n\n.wgo-xsmall .wgo-player-wrapper .wgo-box-title::after {\n\tcontent: ' ';\n\tmargin-top: 7px;\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 7px;\n}\n\n/*--- /Player box -----------------------------------------------------------------------*/\n\n/*--- Comments box ----------------------------------------------------------------------*/\n\n.wgo-comments-wrapper {\n\toverflow: auto;\n\tmargin: 0 0 0 0;\n\theight: 100%;\n\tposition: relative;\n\tbox-sizing: border-box;\n}\n\n.wgo-comments-content {\n\tpadding: 3px 5px;\n\tborder: 1px solid rgba(200,200,200,0.3);\n\tbackground-color: rgba(255,255,255,0.3);\n\tborder-radius: 2px;\n\toverflow-y: auto;\n}\n\n.wgo-comments-content p {\n\tfont-size: 0.9em;\n\tmargin: 0.5em 0;\n}\n\n.wgo-help { \n\tbackground-color: rgba(236, 226, 216, 0.90);\n\tpadding: 1px 7px;\n\tmargin-bottom: 5px;\n}\n\n.wgo-notification { \n\tbackground-color: rgba(16, 16, 16, 0.95);\n\tcolor: white;\n\tpadding: 1px 7px;\n\tmargin-bottom: 5px;\n}\n\n.wgo-commentbox .wgo-box-title {\t\n\tbackground-repeat: no-repeat;\n\tbackground-position: right center;\n\tbackground-size: 24px;\n}\n\n.wgo-commentbox .wgo-box-title::after {\n\tcontent: '\\e800';\n\tfont-family: \"wgo-icons\";\n\tfloat: right;\n\tfont-weight: normal;\n\tfont-size: 0.9em;\n\tpadding-top: 4px;\n\twidth: 22px;\n\ttext-align: center;\n}\n\n.wgo-commentbox.wgo-gameinfo .wgo-box-title::after {\n\tcontent: '\\e801';\n\tpadding-top: 2px;\n}\n\n.wgo-comments-nick {\n\tcolor: rgba(0,0,0,0.75);\n}\n\na.wgo-move-link { \n\ttext-decoration: none; \n\tborder-bottom:1px dotted; \n}\n\n/* right and left modifications */\n\n.wgo-player-right .wgo-comments-content, .wgo-player-left .wgo-comments-content {\n\tposition: absolute;\n\tleft: 10px;\n\tright: 10px;\n\tbottom: 10px;\n\ttop: 40px;\n}\n\n.wgo-player-right .wgo-commentbox, .wgo-player-left .wgo-commentbox {\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\tleft: 10px;\n\ttop: 170px;\n}\n\n/* top and bottom modifications */\n\n.wgo-player-top .wgo-comments-content, .wgo-player-bottom .wgo-comments-content {\n\tposition: absolute;\n\tleft: 40px;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\t\n}\n\n/* TODO: handle too long title */\n.wgo-player-top .wgo-commentbox .wgo-box-title, .wgo-player-bottom .wgo-commentbox .wgo-box-title { \n\ttransform: rotate(-90deg);\n\t-ms-transform: rotate(-90deg);\n\t-webkit-transform: rotate(-90deg);\n\tposition: absolute;\n\tleft: -50px;\n\ttop: 55px;\n}\n\n.wgo-player-top .wgo-comments-wrapper, .wgo-player-bottom .wgo-comments-wrapper {\n\tmargin-top: 10px;\n\theight: 150px;\n}\n\n/* game info table */\n\n.wgo-commentbox .wgo-info-list {\n\tdisplay: table;\n\twidth: 100%;\n}\n\n.wgo-commentbox .wgo-info-title {\n\tdisplay: table-caption;\n\tfont-weight: 600;\n\tborder-bottom: 2px solid rgba(200, 200, 200, 0.3);\n\tpadding: 2px 0;\n}\n\n.wgo-commentbox .wgo-info-item {\n\tdisplay: table-row;\n}\n\n.wgo-commentbox .wgo-info-label, .wgo-commentbox .wgo-info-value {\n\tdisplay: table-cell;\n\tborder-bottom: 1px solid rgba(200, 200, 200, 0.3);\n\tpadding: 2px 15px 2px 0;\n}\n\n.wgo-commentbox .wgo-info-label {\n\tcolor: #000;\n}\n\n.wgo-commentbox .wgo-info-value {\n\tcolor: #4c4c4c;\n}\n\n/* in gameinfo, last row is without border*/\n.wgo-commentbox.wgo-gameinfo .wgo-info-item:last-child .wgo-info-label, .wgo-commentbox.wgo-gameinfo .wgo-info-item:last-child .wgo-info-value {\n\tborder-bottom: 0;\n}\n\n/*--- /Comments box ----------------------------------------------------------------------*/\n\n/*--- Control box ------------------------------------------------------------------------*/\n\n.wgo-player-control {\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n}\n\n.wgo-control-wrapper {\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.wgo-ctrlgroup-left {\n\tfloat: left;\n}\n\n.wgo-ctrlgroup-right {\n\tfloat: right;\n}\n\n.wgo-ctrlgroup-control {\n\tmargin: 0 auto;\n}\n\n/* button widget */\n\nbutton.wgo-button {\n\tborder: 1px solid rgba(200,200,200,0.3);\n\tborder-radius: 2px;\n\tbackground-color: rgba(255,255,255,0.3);\n\twidth: 44px;\n\theight: 44px;\n\tmargin: 0 3px;\n\tvertical-align: middle;\n}\n\nbutton.wgo-button:not([disabled]):hover, \ninput[type=\"text\"].wgo-player-mn-value:focus {\n\tbackground-color: rgba(255,255,255,0.45);\n\tborder: 1px solid rgba(100,100,100,0.3);\n\tbox-shadow: 0 0 20px 0 rgba(150,150,150,0.5);\n}\n\nbutton.wgo-button.wgo-selected {\n\tbackground-color: rgba(255,255,255,0.6);\n\tborder: 1px solid rgba(0,0,0,0.5);\n}\n\nbutton.wgo-button.wgo-selected:hover {\n\tbackground-color: rgba(255,255,255,0.7);\n\tborder: 1px solid rgba(0,0,0,0.7);\n}\n\n.wgo-button::before {\n\tfont-family: \"wgo-icons\";\n\tfont-size: 36px;\n\tdisplay: inline-block;\n}\n\n.wgo-button[disabled]::before, input[type=\"text\"].wgo-player-mn-value[disabled] {\n\tcolor: rgba(64,64,64,0.5);\n}\n\n.wgo-button:not([disabled]):active::before {\n\tposition: relative;\n\ttop: 1px;\n\tleft: 1px;\n}\n\n.wgo-button-first::before, .wgo-button-multiprev::before, .wgo-button-previous::before  {\n\ttransform: scaleX(-1);\n\t-moz-transform: scaleX(-1);\n\t-webkit-transform: scaleX(-1);\n\t-ms-transform: scaleX(-1);\n}\n\n.wgo-button-first::before {\n\tcontent: '\\e81a';\n}\n\n.wgo-button-multiprev::before {\n\tcontent: '\\e817';\n\tmargin-left: -5px;\n}\n\n.wgo-button-previous::before {\n\tcontent: '\\e80c';\n}\n\n.wgo-button-next::before {\n\tcontent: '\\e80c';\n}\n\n.wgo-button-multinext::before {\n\tcontent: '\\e817';\n}\n\n.wgo-button-last::before {\n\tcontent: '\\e81a';\n}\n\n.wgo-button-menu::before  {\n\tcontent: '\\e81b';\n\tfont-size: 25px;\n\tfont-weight: normal;\n\tpadding-top: 5px;\n}\n.wgo-button-about::before  {\n\tcontent: '\\e80f';\n\tfont-size: 30px;\n\tfont-weight: normal;\n}\n\n/* move number widget */\n\ninput[type=\"text\"].wgo-player-mn-value  {\n\tborder: 1px solid rgba(200,200,200,0.3);\n\tborder-radius: 2px;\n\tbackground-color: rgba(255,255,255,0.3);\n\twidth: 28px;\n\tfont-weight: bold;\n\tfont-size: 15px;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\toutline: 0;\n}\n\n.wgo-player-mn-wrapper {\n\tdisplay: inline-block;\n\twidth: 38px;\n\ttext-align: center;\n}\n\n/* top and bottom modifications */\n\n.wgo-player-top .wgo-player-control {\n\tpadding-bottom: 5px;\n}\n\n.wgo-player-bottom .wgo-player-control {\n\tpadding-top: 5px;\n}\n\n/* display less buttons */\n\n.wgo-440 .wgo-button-multiprev, \n.wgo-440 .wgo-button-multinext {\n\tdisplay: none;\n}\n\n.wgo-340 .wgo-button-multiprev, \n.wgo-340 .wgo-button-multinext, \n.wgo-340 .wgo-button-first, \n.wgo-340 .wgo-button-last {\n\tdisplay: none;\n}\n\n/*--- /Control box ------------------------------------------------------------------------*/\n\n/*--- Control menu -------------------------------------------------------------------------*/\n\n.wgo-player-menu {\n\tborder: 1px solid rgba(0,0,0,0.5);\n\tz-index: 900;\n\tmargin-top: -1px;\n\tbox-shadow: 0 0 20px 0 rgba(127,127,127,0.5);\n\tfont-weight: bold;\n\tcolor: #292929;\n\ttext-align: left;\n}\n\n.wgo-menu-item {\n\tpadding: 5px 10px 5px 5px;\n\tbackground-color: rgba(255,255,255,0.85);\n\tcursor: pointer;\n\tbackground-repeat: no-repeat;\n\tbackground-position: left center;\n\tbackground-size: 25px;\n}\n\n.wgo-menu-item:not(.wgo-disabled):hover {\n\tbackground-color: rgba(225,225,225,0.85);\n}\n\n.wgo-menu-item::before {\n\tcontent: ' ';\n\tfont-family: \"wgo-icons\";\n\tcolor: #000;\n\twidth: 20px;\n\tdisplay: inline-block;\n\tfont-weight: normal;\n}\n\n.wgo-menu-item.wgo-selected::before {\n\tcontent: '\\e813';\n}\n\n.wgo-menu-item.wgo-disabled {\n\tcolor: #888;\n\tcursor: Default;\n}\n\n.wgo-menu-item.wgo-disabled::before {\n\tcolor: #888;\n}\n\n/*--- /Control menu -------------------------------------------------------------------------*/\n\n/*--- Overlay window ----------------------------------------------------------------------*/\n\n.wgo-info-overlay {\n\tposition: absolute;\n\tz-index: 1000;\n}\n\n.wgo-info-message {\n\tmargin: 15% auto;\n\tmin-height: 50%;\n\tmax-height: 70%;\n\tmin-width: 50%;\n\tmax-width: 70%;\n\tbackground-color: rgba(0,0,0,0.95);\n\toverflow: auto;\n\tpadding: 20px;\n\tbox-sizing:border-box;\n\t-moz-box-sizing:border-box;\n\t-webkit-box-sizing:border-box;\n\tcolor: #d9d9d9;\n\tbox-shadow: 0px 0px 50px 5px rgb(0,0,0);\n\tborder: 1px solid #333;\n\tposition: relative;\n}\n\n.wgo-info-message a {\n\tcolor: #fff !important;\n}\n\n.wgo-info-message h1 {\n\tfont-size: 2em !important;\n\tcolor: #fff !important;\n\tfont-weight: bold !important;\n\tmargin: 0 0 20px 0 !important;\n\tpadding: 0 !important;\n}\n\n.wgo-info-close {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 10px;\n\tfont-size: 10px;\n}\n\n/*--- /Overlay window ----------------------------------------------------------------------*/\n\n/*--- Permalinks ---------------------------------------------------------------------------*/\n\ninput[type=\"text\"].wgo-permalink {\n\tpadding: 7px 10px !important;\n\tborder: 1px solid white !important;\n\tcolor: white !important;\n\twidth: 100% !important;\n\tbackground-color: rgba(0,0,0,0) !important;\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n}\n\n/*--- /Permalinks ---------------------------------------------------------------------------*/\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./static/dtale/side/wgo/wgo.player.css":
/*!**********************************************!*\
  !*** ./static/dtale/side/wgo/wgo.player.css ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./wgo.player.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./static/dtale/side/wgo/wgo.player.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./wgo.player.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./static/dtale/side/wgo/wgo.player.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./wgo.player.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./static/dtale/side/wgo/wgo.player.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_wgo_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./static/dtale/side/GoBoard.tsx":
/*!***************************************!*\
  !*** ./static/dtale/side/GoBoard.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
__webpack_require__(/*! ./wgo/wgo.min.js */ "./static/dtale/side/wgo/wgo.min.js");
__webpack_require__(/*! ./wgo/wgo.player.css */ "./static/dtale/side/wgo/wgo.player.css");
__webpack_require__(/*! ./wgo/wgo.player.min.js */ "./static/dtale/side/wgo/wgo.player.min.js");
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
        const wgo_min_js = document.createElement("script");
        const wgo_player_min_js = document.createElement("script");
        wgo_min_js.src = "wgo/wgo.min.js";
        wgo_player_min_js.src = "wgo/wgo.player.min.js";
        wgo_min_js.async = true;
        wgo_player_min_js.async = true;
        wgo_min_js.defer = true;
        wgo_player_min_js.defer = true;
        document.body.append(wgo_min_js);
        document.body.append(wgo_player_min_js);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { "data-wgo": "", style: { width: '700px' } },
            "Sorry, your browser doesn't support WGo.js. Download SGF ",
            React.createElement("a", { href: "game.sgf" }, "directly"),
            ".")));
};
exports["default"] = (0, react_i18next_1.withTranslation)(['menu', 'missing', 'side', 'builders'])(GoBoard);


/***/ }),

/***/ "data:application/font-woff;base64,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":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;base64,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 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:application/font-woff;base64,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";

/***/ }),

/***/ "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtZXRhZGF0YT5Db3B5cmlnaHQgKEMpIDIwMTIgYnkgb3JpZ2luYWwgYXV0aG9ycyBAIGZvbnRlbGxvLmNvbTwvbWV0YWRhdGE+CjxkZWZzPgo8Zm9udCBpZD0id2dvLWljb25zIiBob3Jpei1hZHYteD0iMTAwMCIgPgo8Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJ3Z28taWNvbnMiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc3RyZXRjaD0ibm9ybWFsIiB1bml0cy1wZXItZW09IjEwMDAiIGFzY2VudD0iODUwIiBkZXNjZW50PSItMTUwIiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImZhc3QtZm9yd2FyZCIgdW5pY29kZT0iJiN4ZTgxNzsiIGQ9Ik04NjYgMzc0cTE0LTEwIDE0LTI0dC0xNC0yMmwtMzcyLTI0OHEtMjItMTQtMzctNnQtMTUgMzZsMCA0ODJxMCAyOCAxNSAzNnQzNy02eiBtLTQ1NCAwcTE0LTEwIDE0LTI0dC0xNC0yMmwtMzYwLTI0OHEtMjAtMTQtMzYtNnQtMTYgMzZsMCA0ODJxMCAyOCAxNiAzNnQzNi02eiIgaG9yaXotYWR2LXg9Ijg4MCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InRvLWVuZC0xIiB1bmljb2RlPSImI3hlODFhOyIgZD0iTTQxMiAzNzRxMTQtMTAgMTQtMjQgMC0xMi0xNC0yMmwtMzYyLTIyOHEtMjItMTQtMzYtNXQtMTQgMzVsMCA0NDJxMCAyNiAxNCAzNXQzNi01eiBtMTE0IDI2OHE3NCAwIDc0LTU4bDAtNDY2cTAtNTgtNzQtNTgtNzYgMC03NiA1OGwwIDQ2NnEwIDU4IDc2IDU4eiIgaG9yaXotYWR2LXg9IjYwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InBsYXktMSIgdW5pY29kZT0iJiN4ZTgwYzsiIGQ9Ik00ODYgMzc2cTE0LTEwIDE0LTI2IDAtMTQtMTQtMjRsLTQyOC0yNjZxLTI0LTE2LTQxLTZ0LTE3IDQwbDAgNTE0cTAgMzAgMTcgNDB0NDEtNnoiIGhvcml6LWFkdi14PSI1MDAiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVjayIgdW5pY29kZT0iJiN4ZTgxMzsiIGQ9Ik03ODYgMzMxbDAtMTc3cTAtNjYtNDctMTE0dC0xMTQtNDdsLTQ2NCAwcS02NiAwLTExNCA0N3QtNDcgMTE0bDAgNDY0cTAgNjYgNDcgMTE0dDExNCA0N2w0NjQgMHEzNSAwIDY1LTE0IDgtNCAxMC0xM3QtNS0xNmwtMjctMjdxLTYtNi0xMy02LTIgMC01IDEtMTMgMy0yNSAzbC00NjQgMHEtMzcgMC02My0yNnQtMjYtNjNsMC00NjRxMC0zNyAyNi02M3Q2My0yNmw0NjQgMHEzNyAwIDYzIDI2dDI2IDYzbDAgMTQycTAgNyA1IDEybDM2IDM2cTYgNiAxMyA2IDMgMCA3LTIgMTEtNCAxMS0xNnogbTEyOSAyNzNsLTQ1NC00NTRxLTEzLTEzLTMyLTEzdC0zMiAxM2wtMjQwIDI0MHEtMTMgMTMtMTMgMzJ0MTMgMzJsNjEgNjFxMTMgMTMgMzIgMTN0MzItMTNsMTQ3LTE0NyAzNjEgMzYxcTEzIDEzIDMyIDEzdDMyLTEzbDYxLTYxcTEzLTEzIDEzLTMydC0xMy0zMnoiIGhvcml6LWFkdi14PSI5MjguNTcxIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0ibWVudSIgdW5pY29kZT0iJiN4ZTgxYjsiIGQ9Ik02NTAgNDAwcTIyIDAgMzYtMTV0MTQtMzUtMTUtMzUtMzUtMTVsLTYwMCAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHogbS02MDAgMTAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHEyMiAwIDM2LTE1dDE0LTM1LTE1LTM1LTM1LTE1bC02MDAgMHogbTYwMC0zMDBxMjIgMCAzNi0xNXQxNC0zNS0xNS0zNS0zNS0xNWwtNjAwIDBxLTIwIDAtMzUgMTV0LTE1IDM1IDE0IDM1IDM2IDE1bDYwMCAweiIgaG9yaXotYWR2LXg9IjcwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNvbW1lbnQiIHVuaWNvZGU9IiYjeGU4MDA7IiBkPSJNNzgxIDY2MmwtNjI1IDBxLTIxIDAtMzctMTV0LTE2LTM2bDAtMzY1cTAtMjEgMTYtMzd0MzctMTZsMTU2IDAgMC05IDkgOSA0NjAgMHEyMSAwIDM3IDE2dDE2IDM3bDAgMzY1cTAgMjEtMTYgMzZ0LTM3IDE1eiBtMCAxMDVxNjUgMCAxMTEtNDZ0NDYtMTExbDAtMzY1cTAtNjUtNDYtMTExdC0xMTEtNDZsLTQxNiAwLTE1Ni0xNTYgMCAxNTYtNTMgMHEtNjUgMC0xMTEgNDZ0LTQ2IDExMWwwIDM2NXEwIDY1IDQ2IDExMXQxMTEgNDZsNjI1IDB6IiBob3Jpei1hZHYteD0iOTM4IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaGVscC1jaXJjbGVkIiB1bmljb2RlPSImI3hlODBmOyIgZD0iTTUwMCA4MmwwIDEwN3EwIDgtNSAxM3QtMTMgNWwtMTA3IDBxLTggMC0xMy01dC01LTEzbDAtMTA3cTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3ogbTE0MyAzNzVxMCA0OS0zMSA5MXQtNzcgNjUtOTUgMjNxLTEzNiAwLTIwNy0xMTktOC0xMyA0LTIzbDc0LTU2cTQtMyAxMS0zIDkgMCAxNCA3IDMwIDM4IDQ4IDUxIDE5IDEzIDQ4IDEzIDI3IDAgNDgtMTV0MjEtMzNxMC0yMS0xMS0zNHQtMzgtMjVxLTM1LTE2LTY0LTQ4dC0yOS03MGwwLTIwcTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3EwIDExIDEyIDI4dDMwIDI4cTE4IDEwIDI3IDE2dDI2IDIwIDI1IDI3IDE2IDM0IDcgNDV6IG0yMTQtMTA3cTAtMTE3LTU3LTIxNXQtMTU2LTE1Ni0yMTUtNTctMjE1IDU3LTE1NiAxNTYtNTcgMjE1IDU3IDIxNSAxNTYgMTU2IDIxNSA1NyAyMTUtNTcgMTU2LTE1NiA1Ny0yMTV6IiBob3Jpei1hZHYteD0iODU3LjE0MyIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNoZWNrLWVtcHR5IiB1bmljb2RlPSImI3hlODE0OyIgZD0iTTYyNSA3MDdsLTQ2NCAwcS0zNyAwLTYzLTI2dC0yNi02M2wwLTQ2NHEwLTM3IDI2LTYzdDYzLTI2bDQ2NCAwcTM3IDAgNjMgMjZ0MjYgNjNsMCA0NjRxMCAzNy0yNiA2M3QtNjMgMjZ6IG0xNjEtODlsMC00NjRxMC02Ni00Ny0xMTR0LTExNC00N2wtNDY0IDBxLTY2IDAtMTE0IDQ3dC00NyAxMTRsMCA0NjRxMCA2NiA0NyAxMTR0MTE0IDQ3bDQ2NCAwcTY2IDAgMTE0LTQ3dDQ3LTExNHoiIGhvcml6LWFkdi14PSI3ODUuNzE0IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlLWVtcHR5IiB1bmljb2RlPSImI3hlODE2OyIgZD0iTTQyOSA2NTRxLTgzIDAtMTUyLTQxdC0xMTAtMTEwLTQxLTE1MiA0MS0xNTIgMTEwLTExMCAxNTItNDEgMTUyIDQxIDExMCAxMTAgNDEgMTUyLTQxIDE1Mi0xMTAgMTEwLTE1MiA0MXogbTQyOS0zMDRxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlIiB1bmljb2RlPSImI3hlODE1OyIgZD0iTTg1NyAzNTBxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaW5mbyIgdW5pY29kZT0iJiN4ZTgwMTsiIGQ9Ik0zNTcgMTAwbDAtNzFxMC0xNS0xMS0yNXQtMjUtMTFsLTI4NiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMzYgMCAwIDIxNC0zNiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMjE0IDBxMTUgMCAyNS0xMXQxMS0yNWwwLTMyMSAzNiAwcTE1IDAgMjUtMTF0MTEtMjV6IG0tNzEgNjQzbDAtMTA3cTAtMTUtMTEtMjV0LTI1LTExbC0xNDMgMHEtMTUgMC0yNSAxMXQtMTEgMjVsMCAxMDdxMCAxNSAxMSAyNXQyNSAxMWwxNDMgMHExNSAwIDI1LTExdDExLTI1eiIgaG9yaXotYWR2LXg9IjM1Ny4xNDMiIC8+CjwvZm9udD4KPC9kZWZzPgo8L3N2Zz4=":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtZXRhZGF0YT5Db3B5cmlnaHQgKEMpIDIwMTIgYnkgb3JpZ2luYWwgYXV0aG9ycyBAIGZvbnRlbGxvLmNvbTwvbWV0YWRhdGE+CjxkZWZzPgo8Zm9udCBpZD0id2dvLWljb25zIiBob3Jpei1hZHYteD0iMTAwMCIgPgo8Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJ3Z28taWNvbnMiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc3RyZXRjaD0ibm9ybWFsIiB1bml0cy1wZXItZW09IjEwMDAiIGFzY2VudD0iODUwIiBkZXNjZW50PSItMTUwIiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImZhc3QtZm9yd2FyZCIgdW5pY29kZT0iJiN4ZTgxNzsiIGQ9Ik04NjYgMzc0cTE0LTEwIDE0LTI0dC0xNC0yMmwtMzcyLTI0OHEtMjItMTQtMzctNnQtMTUgMzZsMCA0ODJxMCAyOCAxNSAzNnQzNy02eiBtLTQ1NCAwcTE0LTEwIDE0LTI0dC0xNC0yMmwtMzYwLTI0OHEtMjAtMTQtMzYtNnQtMTYgMzZsMCA0ODJxMCAyOCAxNiAzNnQzNi02eiIgaG9yaXotYWR2LXg9Ijg4MCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InRvLWVuZC0xIiB1bmljb2RlPSImI3hlODFhOyIgZD0iTTQxMiAzNzRxMTQtMTAgMTQtMjQgMC0xMi0xNC0yMmwtMzYyLTIyOHEtMjItMTQtMzYtNXQtMTQgMzVsMCA0NDJxMCAyNiAxNCAzNXQzNi01eiBtMTE0IDI2OHE3NCAwIDc0LTU4bDAtNDY2cTAtNTgtNzQtNTgtNzYgMC03NiA1OGwwIDQ2NnEwIDU4IDc2IDU4eiIgaG9yaXotYWR2LXg9IjYwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InBsYXktMSIgdW5pY29kZT0iJiN4ZTgwYzsiIGQ9Ik00ODYgMzc2cTE0LTEwIDE0LTI2IDAtMTQtMTQtMjRsLTQyOC0yNjZxLTI0LTE2LTQxLTZ0LTE3IDQwbDAgNTE0cTAgMzAgMTcgNDB0NDEtNnoiIGhvcml6LWFkdi14PSI1MDAiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVjayIgdW5pY29kZT0iJiN4ZTgxMzsiIGQ9Ik03ODYgMzMxbDAtMTc3cTAtNjYtNDctMTE0dC0xMTQtNDdsLTQ2NCAwcS02NiAwLTExNCA0N3QtNDcgMTE0bDAgNDY0cTAgNjYgNDcgMTE0dDExNCA0N2w0NjQgMHEzNSAwIDY1LTE0IDgtNCAxMC0xM3QtNS0xNmwtMjctMjdxLTYtNi0xMy02LTIgMC01IDEtMTMgMy0yNSAzbC00NjQgMHEtMzcgMC02My0yNnQtMjYtNjNsMC00NjRxMC0zNyAyNi02M3Q2My0yNmw0NjQgMHEzNyAwIDYzIDI2dDI2IDYzbDAgMTQycTAgNyA1IDEybDM2IDM2cTYgNiAxMyA2IDMgMCA3LTIgMTEtNCAxMS0xNnogbTEyOSAyNzNsLTQ1NC00NTRxLTEzLTEzLTMyLTEzdC0zMiAxM2wtMjQwIDI0MHEtMTMgMTMtMTMgMzJ0MTMgMzJsNjEgNjFxMTMgMTMgMzIgMTN0MzItMTNsMTQ3LTE0NyAzNjEgMzYxcTEzIDEzIDMyIDEzdDMyLTEzbDYxLTYxcTEzLTEzIDEzLTMydC0xMy0zMnoiIGhvcml6LWFkdi14PSI5MjguNTcxIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0ibWVudSIgdW5pY29kZT0iJiN4ZTgxYjsiIGQ9Ik02NTAgNDAwcTIyIDAgMzYtMTV0MTQtMzUtMTUtMzUtMzUtMTVsLTYwMCAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHogbS02MDAgMTAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHEyMiAwIDM2LTE1dDE0LTM1LTE1LTM1LTM1LTE1bC02MDAgMHogbTYwMC0zMDBxMjIgMCAzNi0xNXQxNC0zNS0xNS0zNS0zNS0xNWwtNjAwIDBxLTIwIDAtMzUgMTV0LTE1IDM1IDE0IDM1IDM2IDE1bDYwMCAweiIgaG9yaXotYWR2LXg9IjcwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNvbW1lbnQiIHVuaWNvZGU9IiYjeGU4MDA7IiBkPSJNNzgxIDY2MmwtNjI1IDBxLTIxIDAtMzctMTV0LTE2LTM2bDAtMzY1cTAtMjEgMTYtMzd0MzctMTZsMTU2IDAgMC05IDkgOSA0NjAgMHEyMSAwIDM3IDE2dDE2IDM3bDAgMzY1cTAgMjEtMTYgMzZ0LTM3IDE1eiBtMCAxMDVxNjUgMCAxMTEtNDZ0NDYtMTExbDAtMzY1cTAtNjUtNDYtMTExdC0xMTEtNDZsLTQxNiAwLTE1Ni0xNTYgMCAxNTYtNTMgMHEtNjUgMC0xMTEgNDZ0LTQ2IDExMWwwIDM2NXEwIDY1IDQ2IDExMXQxMTEgNDZsNjI1IDB6IiBob3Jpei1hZHYteD0iOTM4IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaGVscC1jaXJjbGVkIiB1bmljb2RlPSImI3hlODBmOyIgZD0iTTUwMCA4MmwwIDEwN3EwIDgtNSAxM3QtMTMgNWwtMTA3IDBxLTggMC0xMy01dC01LTEzbDAtMTA3cTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3ogbTE0MyAzNzVxMCA0OS0zMSA5MXQtNzcgNjUtOTUgMjNxLTEzNiAwLTIwNy0xMTktOC0xMyA0LTIzbDc0LTU2cTQtMyAxMS0zIDkgMCAxNCA3IDMwIDM4IDQ4IDUxIDE5IDEzIDQ4IDEzIDI3IDAgNDgtMTV0MjEtMzNxMC0yMS0xMS0zNHQtMzgtMjVxLTM1LTE2LTY0LTQ4dC0yOS03MGwwLTIwcTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3EwIDExIDEyIDI4dDMwIDI4cTE4IDEwIDI3IDE2dDI2IDIwIDI1IDI3IDE2IDM0IDcgNDV6IG0yMTQtMTA3cTAtMTE3LTU3LTIxNXQtMTU2LTE1Ni0yMTUtNTctMjE1IDU3LTE1NiAxNTYtNTcgMjE1IDU3IDIxNSAxNTYgMTU2IDIxNSA1NyAyMTUtNTcgMTU2LTE1NiA1Ny0yMTV6IiBob3Jpei1hZHYteD0iODU3LjE0MyIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNoZWNrLWVtcHR5IiB1bmljb2RlPSImI3hlODE0OyIgZD0iTTYyNSA3MDdsLTQ2NCAwcS0zNyAwLTYzLTI2dC0yNi02M2wwLTQ2NHEwLTM3IDI2LTYzdDYzLTI2bDQ2NCAwcTM3IDAgNjMgMjZ0MjYgNjNsMCA0NjRxMCAzNy0yNiA2M3QtNjMgMjZ6IG0xNjEtODlsMC00NjRxMC02Ni00Ny0xMTR0LTExNC00N2wtNDY0IDBxLTY2IDAtMTE0IDQ3dC00NyAxMTRsMCA0NjRxMCA2NiA0NyAxMTR0MTE0IDQ3bDQ2NCAwcTY2IDAgMTE0LTQ3dDQ3LTExNHoiIGhvcml6LWFkdi14PSI3ODUuNzE0IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlLWVtcHR5IiB1bmljb2RlPSImI3hlODE2OyIgZD0iTTQyOSA2NTRxLTgzIDAtMTUyLTQxdC0xMTAtMTEwLTQxLTE1MiA0MS0xNTIgMTEwLTExMCAxNTItNDEgMTUyIDQxIDExMCAxMTAgNDEgMTUyLTQxIDE1Mi0xMTAgMTEwLTE1MiA0MXogbTQyOS0zMDRxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlIiB1bmljb2RlPSImI3hlODE1OyIgZD0iTTg1NyAzNTBxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaW5mbyIgdW5pY29kZT0iJiN4ZTgwMTsiIGQ9Ik0zNTcgMTAwbDAtNzFxMC0xNS0xMS0yNXQtMjUtMTFsLTI4NiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMzYgMCAwIDIxNC0zNiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMjE0IDBxMTUgMCAyNS0xMXQxMS0yNWwwLTMyMSAzNiAwcTE1IDAgMjUtMTF0MTEtMjV6IG0tNzEgNjQzbDAtMTA3cTAtMTUtMTEtMjV0LTI1LTExbC0xNDMgMHEtMTUgMC0yNSAxMXQtMTEgMjVsMCAxMDdxMCAxNSAxMSAyNXQyNSAxMWwxNDMgMHExNSAwIDI1LTExdDExLTI1eiIgaG9yaXotYWR2LXg9IjM1Ny4xNDMiIC8+CjwvZm9udD4KPC9kZWZzPgo8L3N2Zz4= ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtZXRhZGF0YT5Db3B5cmlnaHQgKEMpIDIwMTIgYnkgb3JpZ2luYWwgYXV0aG9ycyBAIGZvbnRlbGxvLmNvbTwvbWV0YWRhdGE+CjxkZWZzPgo8Zm9udCBpZD0id2dvLWljb25zIiBob3Jpei1hZHYteD0iMTAwMCIgPgo8Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJ3Z28taWNvbnMiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc3RyZXRjaD0ibm9ybWFsIiB1bml0cy1wZXItZW09IjEwMDAiIGFzY2VudD0iODUwIiBkZXNjZW50PSItMTUwIiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImZhc3QtZm9yd2FyZCIgdW5pY29kZT0iJiN4ZTgxNzsiIGQ9Ik04NjYgMzc0cTE0LTEwIDE0LTI0dC0xNC0yMmwtMzcyLTI0OHEtMjItMTQtMzctNnQtMTUgMzZsMCA0ODJxMCAyOCAxNSAzNnQzNy02eiBtLTQ1NCAwcTE0LTEwIDE0LTI0dC0xNC0yMmwtMzYwLTI0OHEtMjAtMTQtMzYtNnQtMTYgMzZsMCA0ODJxMCAyOCAxNiAzNnQzNi02eiIgaG9yaXotYWR2LXg9Ijg4MCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InRvLWVuZC0xIiB1bmljb2RlPSImI3hlODFhOyIgZD0iTTQxMiAzNzRxMTQtMTAgMTQtMjQgMC0xMi0xNC0yMmwtMzYyLTIyOHEtMjItMTQtMzYtNXQtMTQgMzVsMCA0NDJxMCAyNiAxNCAzNXQzNi01eiBtMTE0IDI2OHE3NCAwIDc0LTU4bDAtNDY2cTAtNTgtNzQtNTgtNzYgMC03NiA1OGwwIDQ2NnEwIDU4IDc2IDU4eiIgaG9yaXotYWR2LXg9IjYwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9InBsYXktMSIgdW5pY29kZT0iJiN4ZTgwYzsiIGQ9Ik00ODYgMzc2cTE0LTEwIDE0LTI2IDAtMTQtMTQtMjRsLTQyOC0yNjZxLTI0LTE2LTQxLTZ0LTE3IDQwbDAgNTE0cTAgMzAgMTcgNDB0NDEtNnoiIGhvcml6LWFkdi14PSI1MDAiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVjayIgdW5pY29kZT0iJiN4ZTgxMzsiIGQ9Ik03ODYgMzMxbDAtMTc3cTAtNjYtNDctMTE0dC0xMTQtNDdsLTQ2NCAwcS02NiAwLTExNCA0N3QtNDcgMTE0bDAgNDY0cTAgNjYgNDcgMTE0dDExNCA0N2w0NjQgMHEzNSAwIDY1LTE0IDgtNCAxMC0xM3QtNS0xNmwtMjctMjdxLTYtNi0xMy02LTIgMC01IDEtMTMgMy0yNSAzbC00NjQgMHEtMzcgMC02My0yNnQtMjYtNjNsMC00NjRxMC0zNyAyNi02M3Q2My0yNmw0NjQgMHEzNyAwIDYzIDI2dDI2IDYzbDAgMTQycTAgNyA1IDEybDM2IDM2cTYgNiAxMyA2IDMgMCA3LTIgMTEtNCAxMS0xNnogbTEyOSAyNzNsLTQ1NC00NTRxLTEzLTEzLTMyLTEzdC0zMiAxM2wtMjQwIDI0MHEtMTMgMTMtMTMgMzJ0MTMgMzJsNjEgNjFxMTMgMTMgMzIgMTN0MzItMTNsMTQ3LTE0NyAzNjEgMzYxcTEzIDEzIDMyIDEzdDMyLTEzbDYxLTYxcTEzLTEzIDEzLTMydC0xMy0zMnoiIGhvcml6LWFkdi14PSI5MjguNTcxIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0ibWVudSIgdW5pY29kZT0iJiN4ZTgxYjsiIGQ9Ik02NTAgNDAwcTIyIDAgMzYtMTV0MTQtMzUtMTUtMzUtMzUtMTVsLTYwMCAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHogbS02MDAgMTAwcS0yMCAwLTM1IDE1dC0xNSAzNSAxNCAzNSAzNiAxNWw2MDAgMHEyMiAwIDM2LTE1dDE0LTM1LTE1LTM1LTM1LTE1bC02MDAgMHogbTYwMC0zMDBxMjIgMCAzNi0xNXQxNC0zNS0xNS0zNS0zNS0xNWwtNjAwIDBxLTIwIDAtMzUgMTV0LTE1IDM1IDE0IDM1IDM2IDE1bDYwMCAweiIgaG9yaXotYWR2LXg9IjcwMCIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNvbW1lbnQiIHVuaWNvZGU9IiYjeGU4MDA7IiBkPSJNNzgxIDY2MmwtNjI1IDBxLTIxIDAtMzctMTV0LTE2LTM2bDAtMzY1cTAtMjEgMTYtMzd0MzctMTZsMTU2IDAgMC05IDkgOSA0NjAgMHEyMSAwIDM3IDE2dDE2IDM3bDAgMzY1cTAgMjEtMTYgMzZ0LTM3IDE1eiBtMCAxMDVxNjUgMCAxMTEtNDZ0NDYtMTExbDAtMzY1cTAtNjUtNDYtMTExdC0xMTEtNDZsLTQxNiAwLTE1Ni0xNTYgMCAxNTYtNTMgMHEtNjUgMC0xMTEgNDZ0LTQ2IDExMWwwIDM2NXEwIDY1IDQ2IDExMXQxMTEgNDZsNjI1IDB6IiBob3Jpei1hZHYteD0iOTM4IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaGVscC1jaXJjbGVkIiB1bmljb2RlPSImI3hlODBmOyIgZD0iTTUwMCA4MmwwIDEwN3EwIDgtNSAxM3QtMTMgNWwtMTA3IDBxLTggMC0xMy01dC01LTEzbDAtMTA3cTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3ogbTE0MyAzNzVxMCA0OS0zMSA5MXQtNzcgNjUtOTUgMjNxLTEzNiAwLTIwNy0xMTktOC0xMyA0LTIzbDc0LTU2cTQtMyAxMS0zIDkgMCAxNCA3IDMwIDM4IDQ4IDUxIDE5IDEzIDQ4IDEzIDI3IDAgNDgtMTV0MjEtMzNxMC0yMS0xMS0zNHQtMzgtMjVxLTM1LTE2LTY0LTQ4dC0yOS03MGwwLTIwcTAtOCA1LTEzdDEzLTVsMTA3IDBxOCAwIDEzIDV0NSAxM3EwIDExIDEyIDI4dDMwIDI4cTE4IDEwIDI3IDE2dDI2IDIwIDI1IDI3IDE2IDM0IDcgNDV6IG0yMTQtMTA3cTAtMTE3LTU3LTIxNXQtMTU2LTE1Ni0yMTUtNTctMjE1IDU3LTE1NiAxNTYtNTcgMjE1IDU3IDIxNSAxNTYgMTU2IDIxNSA1NyAyMTUtNTcgMTU2LTE1NiA1Ny0yMTV6IiBob3Jpei1hZHYteD0iODU3LjE0MyIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNoZWNrLWVtcHR5IiB1bmljb2RlPSImI3hlODE0OyIgZD0iTTYyNSA3MDdsLTQ2NCAwcS0zNyAwLTYzLTI2dC0yNi02M2wwLTQ2NHEwLTM3IDI2LTYzdDYzLTI2bDQ2NCAwcTM3IDAgNjMgMjZ0MjYgNjNsMCA0NjRxMCAzNy0yNiA2M3QtNjMgMjZ6IG0xNjEtODlsMC00NjRxMC02Ni00Ny0xMTR0LTExNC00N2wtNDY0IDBxLTY2IDAtMTE0IDQ3dC00NyAxMTRsMCA0NjRxMCA2NiA0NyAxMTR0MTE0IDQ3bDQ2NCAwcTY2IDAgMTE0LTQ3dDQ3LTExNHoiIGhvcml6LWFkdi14PSI3ODUuNzE0IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlLWVtcHR5IiB1bmljb2RlPSImI3hlODE2OyIgZD0iTTQyOSA2NTRxLTgzIDAtMTUyLTQxdC0xMTAtMTEwLTQxLTE1MiA0MS0xNTIgMTEwLTExMCAxNTItNDEgMTUyIDQxIDExMCAxMTAgNDEgMTUyLTQxIDE1Mi0xMTAgMTEwLTE1MiA0MXogbTQyOS0zMDRxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlIiB1bmljb2RlPSImI3hlODE1OyIgZD0iTTg1NyAzNTBxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01Ny0yMTUgNTctMTU2IDE1Ni01NyAyMTUgNTcgMjE1IDE1NiAxNTYgMjE1IDU3IDIxNS01NyAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMTQzIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0iaW5mbyIgdW5pY29kZT0iJiN4ZTgwMTsiIGQ9Ik0zNTcgMTAwbDAtNzFxMC0xNS0xMS0yNXQtMjUtMTFsLTI4NiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMzYgMCAwIDIxNC0zNiAwcS0xNSAwLTI1IDExdC0xMSAyNWwwIDcxcTAgMTUgMTEgMjV0MjUgMTFsMjE0IDBxMTUgMCAyNS0xMXQxMS0yNWwwLTMyMSAzNiAwcTE1IDAgMjUtMTF0MTEtMjV6IG0tNzEgNjQzbDAtMTA3cTAtMTUtMTEtMjV0LTI1LTExbC0xNDMgMHEtMTUgMC0yNSAxMXQtMTEgMjVsMCAxMDdxMCAxNSAxMSAyNXQyNSAxMWwxNDMgMHExNSAwIDI1LTExdDExLTI1eiIgaG9yaXotYWR2LXg9IjM1Ny4xNDMiIC8+CjwvZm9udD4KPC9kZWZzPgo8L3N2Zz4=";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f9a69f5d4f507fe8002c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yOWM5YzQwNGRkMzNiYzUwYzk5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUErQyxDQUFDLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0VBQUMsSUFBSUMsQ0FBQyxHQUFDQyxRQUFRLENBQUNDLG9CQUFULENBQThCLFFBQTlCLENBQU47RUFBQSxJQUE4Q0MsQ0FBQyxHQUFDO0lBQUNDLE9BQU8sRUFBQyxPQUFUO0lBQWlCQyxDQUFDLEVBQUMsQ0FBbkI7SUFBcUJDLENBQUMsRUFBQyxDQUFDLENBQXhCO0lBQTBCQyxZQUFZLEVBQUMsQ0FBQyxDQUF4QztJQUEwQ0MsR0FBRyxFQUFDUixDQUFDLENBQUNBLENBQUMsQ0FBQ1MsTUFBRixHQUFTLENBQVYsQ0FBRCxDQUFjQyxHQUFkLENBQWtCQyxLQUFsQixDQUF3QixHQUF4QixFQUE2QixDQUE3QixFQUFnQ0EsS0FBaEMsQ0FBc0MsR0FBdEMsRUFBMkNDLEtBQTNDLENBQWlELENBQWpELEVBQW1ELENBQUMsQ0FBcEQsRUFBdURDLElBQXZELENBQTRELEdBQTVELElBQWlFLEdBQS9HO0lBQW1IQyxJQUFJLEVBQUMsSUFBeEg7SUFBNkhDLElBQUksRUFBQztNQUFDQyxFQUFFLEVBQUM7SUFBSjtFQUFsSSxDQUFoRDtFQUEyTGIsQ0FBQyxDQUFDYyxLQUFGLEdBQVEsQ0FBQyxDQUFELElBQUlDLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIscUNBQTNCLENBQVo7RUFBOEVqQixDQUFDLENBQUNrQixNQUFGLEdBQVMsQ0FBQyxDQUFELElBQUlILFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsd0JBQTNCLENBQWI7RUFBa0VqQixDQUFDLENBQUNtQixJQUFGLEdBQU8sQ0FBQyxDQUFELElBQUlKLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsa0JBQTNCLENBQVg7RUFBMERqQixDQUFDLENBQUNvQixPQUFGLEdBQVUsQ0FB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QUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLGNBQWMsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxPQUFPLFVBQVUsTUFBTSxRQUFRLFVBQVUsTUFBTSxhQUFhLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxP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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHRhbGUvLi9zdGF0aWMvZHRhbGUvc2lkZS93Z28vd2dvLm1pbi5qcyIsIndlYnBhY2s6Ly9kdGFsZS8uL3N0YXRpYy9kdGFsZS9zaWRlL3dnby93Z28ucGxheWVyLm1pbi5qcyIsIndlYnBhY2s6Ly9kdGFsZS8uL3N0YXRpYy9kdGFsZS9zaWRlL3dnby93Z28ucGxheWVyLmNzcyIsIndlYnBhY2s6Ly9kdGFsZS8uL3N0YXRpYy9kdGFsZS9zaWRlL3dnby93Z28ucGxheWVyLmNzcz9kYmJlIiwid2VicGFjazovL2R0YWxlLy4vc3RhdGljL2R0YWxlL3NpZGUvR29Cb2FyZC50c3giLCJ3ZWJwYWNrOi8vZHRhbGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBNSVQgbGljZW5zZSwgbW9yZSBpbmZvOiB3Z28ud2FsdGhlcmkubmV0ICovKGZ1bmN0aW9uKHYscSl7dmFyIG09ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIiksZz17dmVyc2lvbjpcIjIuMy4xXCIsQjoxLFc6LTEsRVJST1JfUkVQT1JUOiEwLERJUjptW20ubGVuZ3RoLTFdLnNyYy5zcGxpdChcIj9cIilbMF0uc3BsaXQoXCIvXCIpLnNsaWNlKDAsLTEpLmpvaW4oXCIvXCIpK1wiL1wiLGxhbmc6XCJlblwiLGkxOG46e2VuOnt9fX07Zy5vcGVyYT0tMSE9bmF2aWdhdG9yLnVzZXJBZ2VudC5zZWFyY2goLyhvcGVyYSkoPzouKnZlcnNpb24pP1sgXFwvXShbXFx3Ll0rKS9pKTtnLndlYmtpdD0tMSE9bmF2aWdhdG9yLnVzZXJBZ2VudC5zZWFyY2goLyh3ZWJraXQpWyBcXC9dKFtcXHcuXSspL2kpO2cubXNpZT0tMSE9bmF2aWdhdG9yLnVzZXJBZ2VudC5zZWFyY2goLyhtc2llKSAoW1xcdy5dKykvaSk7Zy5tb3ppbGxhPS0xIT1uYXZpZ2F0b3IudXNlckFnZW50LnNlYXJjaCgvKG1vemlsbGEpKD86Lio/IHJ2OihbXFx3Ll0rKSk/L2kpJiYhZy53ZWJraXQmJiFnLm1zaWU7Zy50PVxuZnVuY3Rpb24oYSl7dmFyIGI9Zy5pMThuW2cubGFuZ11bYV18fGcuaTE4bi5lblthXTtpZihiKXtmb3IodmFyIGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWI9Yi5yZXBsYWNlKFwiJFwiLGFyZ3VtZW50c1tjXSk7cmV0dXJuIGJ9cmV0dXJuIGF9O2cuZXh0ZW5kQ2xhc3M9ZnVuY3Rpb24oYSxiKXtiLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGEucHJvdG90eXBlKTtiLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1iO2IucHJvdG90eXBlLnN1cGVyPWE7cmV0dXJuIGJ9O2cuYWJzdHJhY3RNZXRob2Q9ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcihcInVuaW1wbGVtZW50ZWQgYWJzdHJhY3QgbWV0aG9kXCIpO307Zy5jbG9uZT1mdW5jdGlvbihhKXtpZihhJiZcIm9iamVjdFwiPT10eXBlb2YgYSl7dmFyIGI9YS5jb25zdHJ1Y3Rvcj09QXJyYXk/W106e30sYztmb3IoYyBpbiBhKWJbY109YVtjXT09YT9hOmcuY2xvbmUoYVtjXSk7cmV0dXJuIGJ9cmV0dXJuIGF9O2cuZmlsdGVySFRNTD1mdW5jdGlvbihhKXtyZXR1cm4gYSYmXG5cInN0cmluZ1wiPT10eXBlb2YgYT9hLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvPi9nLFwiJmd0O1wiKTphfTt2YXIgaD1mdW5jdGlvbihhLGIpe2I9Ynx8e307Zm9yKHZhciBjIGluIGIpdGhpc1tjXT1iW2NdO2ZvcihjIGluIGcuQm9hcmQuZGVmYXVsdCl0aGlzW2NdPT09cSYmKHRoaXNbY109Zy5Cb2FyZC5kZWZhdWx0W2NdKTtmb3IoYyBpbiBoLnRoZW1lcy5kZWZhdWx0KXRoaXMudGhlbWVbY109PT1xJiYodGhpcy50aGVtZVtjXT1oLnRoZW1lcy5kZWZhdWx0W2NdKTt0aGlzLnR4PXRoaXMuc2VjdGlvbi5sZWZ0O3RoaXMudHk9dGhpcy5zZWN0aW9uLnRvcDt0aGlzLmJ4PXRoaXMuc2l6ZS0xLXRoaXMuc2VjdGlvbi5yaWdodDt0aGlzLmJ5PXRoaXMuc2l6ZS0xLXRoaXMuc2VjdGlvbi5ib3R0b207dGhpcy5pbml0KCk7YS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO3RoaXMucGl4ZWxSYXRpbz12LmRldmljZVBpeGVsUmF0aW98fDE7dGhpcy53aWR0aCYmdGhpcy5oZWlnaHQ/XG50aGlzLnNldERpbWVuc2lvbnModGhpcy53aWR0aCx0aGlzLmhlaWdodCk6dGhpcy53aWR0aD90aGlzLnNldFdpZHRoKHRoaXMud2lkdGgpOnRoaXMuaGVpZ2h0JiZ0aGlzLnNldEhlaWdodCh0aGlzLmhlaWdodCl9O2gudGhlbWVzPXt9O2gudGhlbWVzLm9sZD17c2hhZG93Q29sb3I6XCJyZ2JhKDMyLDMyLDMyLDAuNSlcIixzaGFkb3dUcmFuc3BhcmVudENvbG9yOlwicmdiYSgzMiwzMiwzMiwwKVwiLHNoYWRvd0JsdXI6MCxzaGFkb3dTaXplOmZ1bmN0aW9uKGEpe3JldHVybiBhLnNoYWRvd1NpemV9LG1hcmt1cEJsYWNrQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuOClcIixtYXJrdXBXaGl0ZUNvbG9yOlwicmdiYSgwLDAsMCwwLjgpXCIsbWFya3VwTm9uZUNvbG9yOlwicmdiYSgwLDAsMCwwLjgpXCIsbWFya3VwTGluZXNXaWR0aDpmdW5jdGlvbihhKXtyZXR1cm4gYS5hdXRvTGluZVdpZHRoP2Euc3RvbmVSYWRpdXMvNzphLmxpbmVXaWR0aH0sZ3JpZExpbmVzV2lkdGg6MSxncmlkTGluZXNDb2xvcjpmdW5jdGlvbihhKXtyZXR1cm5cInJnYmEoMCwwLDAsXCIrXG5NYXRoLm1pbigxLGEuc3RvbmVSYWRpdXMvMTUpK1wiKVwifSxzdGFyQ29sb3I6XCIjMDAwXCIsc3RhclNpemU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3RhclNpemUqKGEud2lkdGgvMzAwKzEpfSxzdG9uZVNpemU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3RvbmVTaXplKk1hdGgubWluKGEuZmllbGRXaWR0aCxhLmZpZWxkSGVpZ2h0KS8yfSxjb29yZGluYXRlc0NvbG9yOlwicmdiYSgwLDAsMCwwLjcpXCIsZm9udDpmdW5jdGlvbihhKXtyZXR1cm4gYS5mb250fSxsaW5lc1NoaWZ0Oi41fTtoLnRoZW1lcy5kZWZhdWx0PXtzaGFkb3dDb2xvcjpcInJnYmEoNjIsMzIsMzIsMC41KVwiLHNoYWRvd1RyYW5zcGFyZW50Q29sb3I6XCJyZ2JhKDYyLDMyLDMyLDApXCIsc2hhZG93Qmx1cjpmdW5jdGlvbihhKXtyZXR1cm4uMSphLnN0b25lUmFkaXVzfSxzaGFkb3dTaXplOjEsbWFya3VwQmxhY2tDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiLG1hcmt1cFdoaXRlQ29sb3I6XCJyZ2JhKDAsMCwwLDAuNylcIixtYXJrdXBOb25lQ29sb3I6XCJyZ2JhKDAsMCwwLDAuNylcIixcbm1hcmt1cExpbmVzV2lkdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3RvbmVSYWRpdXMvOH0sZ3JpZExpbmVzV2lkdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3RvbmVSYWRpdXMvMTV9LGdyaWRMaW5lc0NvbG9yOlwiIzY1NDUyNVwiLHN0YXJDb2xvcjpcIiM1MzFcIixzdGFyU2l6ZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5zdG9uZVJhZGl1cy84KzF9LHN0b25lU2l6ZTpmdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5taW4oYS5maWVsZFdpZHRoLGEuZmllbGRIZWlnaHQpLzJ9LGNvb3JkaW5hdGVzQ29sb3I6XCIjNTMxXCIsdmFyaWF0aW9uQ29sb3I6XCJyZ2JhKDAsMzIsMTI4LDAuOClcIixmb250OlwiY2FsaWJyaVwiLGxpbmVzU2hpZnQ6LjI1fTt2YXIgaz1mdW5jdGlvbihhLGIpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGIudGhlbWVbYV0/Yi50aGVtZVthXShiKTpiLnRoZW1lW2FdfSxtPXtkcmF3OmZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5nZXRYKGEueCksZT1iLmdldFkoYS55KSxkPWIuc3RvbmVSYWRpdXM7XG50aGlzLmJlZ2luUGF0aCgpO3ZhciBmPWsoXCJzaGFkb3dCbHVyXCIsYiksZD1NYXRoLm1heCgwLGQtLjUpLG49dGhpcy5jcmVhdGVSYWRpYWxHcmFkaWVudChjLWIubHMsZS1iLmxzLGQtMS1mLGMtYi5scyxlLWIubHMsZCtmKTtuLmFkZENvbG9yU3RvcCgwLGsoXCJzaGFkb3dDb2xvclwiLGIpKTtuLmFkZENvbG9yU3RvcCgxLGsoXCJzaGFkb3dUcmFuc3BhcmVudENvbG9yXCIsYikpO3RoaXMuZmlsbFN0eWxlPW47dGhpcy5hcmMoYy1iLmxzLGUtYi5scyxkK2YsMCwyKk1hdGguUEksITApO3RoaXMuZmlsbCgpfSxjbGVhcjpmdW5jdGlvbihhLGIpe3ZhciBjPWIuZ2V0WChhLngpLGU9Yi5nZXRZKGEueSksZD1iLnN0b25lUmFkaXVzO3RoaXMuY2xlYXJSZWN0KGMtMS4xKmQtYi5scyxlLTEuMSpkLWIubHMsMi4yKmQsMi4yKmQpfX0scD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGEub2JqX2FycltiXVtjXVswXS5jPT1nLkI/ayhcIm1hcmt1cEJsYWNrQ29sb3JcIixhKTphLm9ial9hcnJbYl1bY11bMF0uYz09XG5nLlc/ayhcIm1hcmt1cFdoaXRlQ29sb3JcIixhKTprKFwibWFya3VwTm9uZUNvbG9yXCIsYSl9LEQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBhLm9ial9hcnJbYl1bY11bMF0mJmEub2JqX2FycltiXVtjXVswXS5jPT1nLld8fGEub2JqX2FycltiXVtjXVswXS5jPT1nLkJ9LHcseT1mdW5jdGlvbihhKXtmb3IodmFyIGI9YS5hbmdsZSxjPWEuYW5nbGUsZT0wO2U8YS5saW5lcy5sZW5ndGg7ZSsrKXt2YXIgYj1iK2EubGluZXNbZV0sYz1jLWEubGluZXNbZV0sZD1hLmN0eCxmPWEueCxuPWEueSxnPWEucmFkaXVzLGg9YixrPWMsbT1hLmZhY3RvcixsPWEudGhpY2tuZXNzO2Quc3Ryb2tlU3R5bGU9XCJyZ2JhKDY0LDY0LDY0LDAuMilcIjtkLmxpbmVXaWR0aD1nLzMwKmw7ZC5iZWdpblBhdGgoKTt2YXIgZz1nLU1hdGgubWF4KDEsZC5saW5lV2lkdGgpLGw9ZitnKk1hdGguY29zKGgqTWF0aC5QSSksaD1uK2cqTWF0aC5zaW4oaCpNYXRoLlBJKSxmPWYrZypNYXRoLmNvcyhrKk1hdGguUEkpLG49bitcbmcqTWF0aC5zaW4oaypNYXRoLlBJKSxyPWs9dm9pZCAwLHI9az12b2lkIDA7Zj5sPyhrPShuLWgpLyhmLWwpLHI9TWF0aC5hdGFuKGspKTpmPT1sP3I9TWF0aC5QSS8yOihrPShuLWgpLyhmLWwpLHI9TWF0aC5hdGFuKGspLU1hdGguUEkpO2cqPW07az1NYXRoLnNpbihyKSpnO3I9TWF0aC5jb3MocikqZztnPWwrazttPWgtcjtrPWYraztyPW4tcjtkLm1vdmVUbyhsLGgpO2QuYmV6aWVyQ3VydmVUbyhnLG0sayxyLGYsbik7ZC5zdHJva2UoKX19O2guZHJhd0hhbmRsZXJzPXtOT1JNQUw6e3N0b25lOntkcmF3OmZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5nZXRYKGEueCksZT1iLmdldFkoYS55KSxkPWIuc3RvbmVSYWRpdXMsZjthLmM9PWcuVz8oZj10aGlzLmNyZWF0ZVJhZGlhbEdyYWRpZW50KGMtMipkLzUsZS0yKmQvNSxkLzMsYy1kLzUsZS1kLzUsNSpkLzUpLGYuYWRkQ29sb3JTdG9wKDAsXCIjZmZmXCIpLGYuYWRkQ29sb3JTdG9wKDEsXCIjYWFhXCIpKTooZj10aGlzLmNyZWF0ZVJhZGlhbEdyYWRpZW50KGMtXG4yKmQvNSxlLTIqZC81LDEsYy1kLzUsZS1kLzUsNCpkLzUpLGYuYWRkQ29sb3JTdG9wKDAsXCIjNjY2XCIpLGYuYWRkQ29sb3JTdG9wKDEsXCIjMDAwXCIpKTt0aGlzLmJlZ2luUGF0aCgpO3RoaXMuZmlsbFN0eWxlPWY7dGhpcy5hcmMoYy1iLmxzLGUtYi5scyxNYXRoLm1heCgwLGQtLjUpLDAsMipNYXRoLlBJLCEwKTt0aGlzLmZpbGwoKX19LHNoYWRvdzptfSxQQUlOVEVEOntzdG9uZTp7ZHJhdzpmdW5jdGlvbihhLGIpe3ZhciBjPWIuZ2V0WChhLngpLGU9Yi5nZXRZKGEueSksZD1iLnN0b25lUmFkaXVzLGY7YS5jPT1nLlc/KGY9dGhpcy5jcmVhdGVSYWRpYWxHcmFkaWVudChjLTIqZC81LGUtMipkLzUsMixjLWQvNSxlLWQvNSw0KmQvNSksZi5hZGRDb2xvclN0b3AoMCxcIiNmZmZcIiksZi5hZGRDb2xvclN0b3AoMSxcIiNkZGRcIikpOihmPXRoaXMuY3JlYXRlUmFkaWFsR3JhZGllbnQoYy0yKmQvNSxlLTIqZC81LDEsYy1kLzUsZS1kLzUsNCpkLzUpLGYuYWRkQ29sb3JTdG9wKDAsXCIjMTExXCIpLFxuZi5hZGRDb2xvclN0b3AoMSxcIiMwMDBcIikpO3RoaXMuYmVnaW5QYXRoKCk7dGhpcy5maWxsU3R5bGU9Zjt0aGlzLmFyYyhjLWIubHMsZS1iLmxzLE1hdGgubWF4KDAsZC0uNSksMCwyKk1hdGguUEksITApO3RoaXMuZmlsbCgpO3RoaXMuYmVnaW5QYXRoKCk7dGhpcy5saW5lV2lkdGg9ZC82O2EuYz09Zy5XPyh0aGlzLnN0cm9rZVN0eWxlPVwiIzk5OVwiLHRoaXMuYXJjKGMrZC84LGUrZC84LGQvMiwwLE1hdGguUEkvMiwhMSkpOih0aGlzLnN0cm9rZVN0eWxlPVwiI2NjY1wiLHRoaXMuYXJjKGMtZC84LGUtZC84LGQvMixNYXRoLlBJLDEuNSpNYXRoLlBJKSk7dGhpcy5zdHJva2UoKX19LHNoYWRvdzptfSxHTE9XOntzdG9uZTp7ZHJhdzpmdW5jdGlvbihhLGIpe3ZhciBjPWIuZ2V0WChhLngpLGU9Yi5nZXRZKGEueSksZD1iLnN0b25lUmFkaXVzLGY7YS5jPT1nLlc/KGY9dGhpcy5jcmVhdGVSYWRpYWxHcmFkaWVudChjLTIqZC81LGUtMipkLzUsZC8zLGMtZC81LGUtZC81LDgqZC81KSxmLmFkZENvbG9yU3RvcCgwLFxuXCIjZmZmXCIpLGYuYWRkQ29sb3JTdG9wKDEsXCIjNjY2XCIpKTooZj10aGlzLmNyZWF0ZVJhZGlhbEdyYWRpZW50KGMtMipkLzUsZS0yKmQvNSwxLGMtZC81LGUtZC81LDMqZC81KSxmLmFkZENvbG9yU3RvcCgwLFwiIzU1NVwiKSxmLmFkZENvbG9yU3RvcCgxLFwiIzAwMFwiKSk7dGhpcy5iZWdpblBhdGgoKTt0aGlzLmZpbGxTdHlsZT1mO3RoaXMuYXJjKGMtYi5scyxlLWIubHMsTWF0aC5tYXgoMCxkLS41KSwwLDIqTWF0aC5QSSwhMCk7dGhpcy5maWxsKCl9fSxzaGFkb3c6bX0sU0hFTEw6e3N0b25lOntkcmF3OmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxkPWIuc3RvbmVSYWRpdXM7dz13fHxNYXRoLmNlaWwoOTk5OTk5OSpNYXRoLnJhbmRvbSgpKTtjPWIuZ2V0WChhLngpO2U9Yi5nZXRZKGEueSk7dmFyIGY7Zj1hLmM9PWcuVz9cIiNhYWFcIjpcIiMwMDBcIjt0aGlzLmJlZ2luUGF0aCgpO3RoaXMuZmlsbFN0eWxlPWY7dGhpcy5hcmMoYy1iLmxzLGUtYi5scyxNYXRoLm1heCgwLGQtLjUpLDAsMipNYXRoLlBJLFxuITApO3RoaXMuZmlsbCgpO2lmKGEuYz09Zy5XKXtmPXclKDMrYS54KmIuc2l6ZSthLnkpJTM7dmFyIG49Yi5zaXplKmIuc2l6ZSthLngqYi5zaXplK2EueSxuPTIvbioodyVuKTswPT1mP3koe2N0eDp0aGlzLHg6Yyx5OmUscmFkaXVzOmQsYW5nbGU6bixsaW5lczpbLjEsLjEyLC4xMSwuMSwuMDksLjA5LC4wOSwuMDldLGZhY3RvcjouMjUsdGhpY2tuZXNzOjEuNzV9KToxPT1mP3koe2N0eDp0aGlzLHg6Yyx5OmUscmFkaXVzOmQsYW5nbGU6bixsaW5lczpbLjEsLjA5LC4wOCwuMDcsLjA2LC4wNiwuMDYsLjA2LC4wNiwuMDYsLjA2XSxmYWN0b3I6LjIsdGhpY2tuZXNzOjEuNX0pOnkoe2N0eDp0aGlzLHg6Yyx5OmUscmFkaXVzOmQsYW5nbGU6bixsaW5lczpbLjEyLC4xNCwuMTMsLjEyLC4xMiwuMTJdLGZhY3RvcjouMyx0aGlja25lc3M6Mn0pO2Y9dGhpcy5jcmVhdGVSYWRpYWxHcmFkaWVudChjLTIqZC81LGUtMipkLzUsZC8zLGMtZC81LGUtZC81LDUqZC81KTtmLmFkZENvbG9yU3RvcCgwLFxuXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIik7Zi5hZGRDb2xvclN0b3AoMSxcInJnYmEoMjU1LDI1NSwyNTUsMClcIil9ZWxzZSBmPXRoaXMuY3JlYXRlUmFkaWFsR3JhZGllbnQoYysuNCpkLGUrLjQqZCwwLGMrLjUqZCxlKy41KmQsZCksZi5hZGRDb2xvclN0b3AoMCxcInJnYmEoMzIsMzIsMzIsMSlcIiksZi5hZGRDb2xvclN0b3AoMSxcInJnYmEoMCwwLDAsMClcIiksdGhpcy5iZWdpblBhdGgoKSx0aGlzLmZpbGxTdHlsZT1mLHRoaXMuYXJjKGMtYi5scyxlLWIubHMsTWF0aC5tYXgoMCxkLS41KSwwLDIqTWF0aC5QSSwhMCksdGhpcy5maWxsKCksZj10aGlzLmNyZWF0ZVJhZGlhbEdyYWRpZW50KGMtLjQqZCxlLS40KmQsMSxjLS41KmQsZS0uNSpkLDEuNSpkKSxmLmFkZENvbG9yU3RvcCgwLFwicmdiYSg2NCw2NCw2NCwxKVwiKSxmLmFkZENvbG9yU3RvcCgxLFwicmdiYSgwLDAsMCwwKVwiKTt0aGlzLmJlZ2luUGF0aCgpO3RoaXMuZmlsbFN0eWxlPWY7dGhpcy5hcmMoYy1iLmxzLGUtYi5scyxNYXRoLm1heCgwLFxuZC0uNSksMCwyKk1hdGguUEksITApO3RoaXMuZmlsbCgpfX0sc2hhZG93Om19LE1PTk86e3N0b25lOntkcmF3OmZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5nZXRYKGEueCksZT1iLmdldFkoYS55KSxkPWIuc3RvbmVSYWRpdXMsZj1rKFwibWFya3VwTGluZXNXaWR0aFwiLGIpfHwxO3RoaXMuZmlsbFN0eWxlPWEuYz09Zy5XP1wid2hpdGVcIjpcImJsYWNrXCI7dGhpcy5iZWdpblBhdGgoKTt0aGlzLmFyYyhjLGUsTWF0aC5tYXgoMCxkLWYpLDAsMipNYXRoLlBJLCEwKTt0aGlzLmZpbGwoKTt0aGlzLmxpbmVXaWR0aD1mO3RoaXMuc3Ryb2tlU3R5bGU9XCJibGFja1wiO3RoaXMuc3Ryb2tlKCl9fX0sQ1I6e3N0b25lOntkcmF3OmZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5nZXRYKGEueCksZT1iLmdldFkoYS55KSxkPWIuc3RvbmVSYWRpdXM7dGhpcy5zdHJva2VTdHlsZT1hLmN8fHAoYixhLngsYS55KTt0aGlzLmxpbmVXaWR0aD1hLmxpbmVXaWR0aHx8ayhcIm1hcmt1cExpbmVzV2lkdGhcIixiKXx8MTt0aGlzLmJlZ2luUGF0aCgpO1xudGhpcy5hcmMoYy1iLmxzLGUtYi5scyxkLzIsMCwyKk1hdGguUEksITApO3RoaXMuc3Ryb2tlKCl9fX0sTEI6e3N0b25lOntkcmF3OmZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5nZXRYKGEueCksZT1iLmdldFkoYS55KSxkPWIuc3RvbmVSYWRpdXMsZj1hLmZvbnR8fGsoXCJmb250XCIsYil8fFwiXCI7dGhpcy5maWxsU3R5bGU9YS5jfHxwKGIsYS54LGEueSk7dGhpcy5mb250PTE9PWEudGV4dC5sZW5ndGg/TWF0aC5yb3VuZCgxLjUqZCkrXCJweCBcIitmOjI9PWEudGV4dC5sZW5ndGg/TWF0aC5yb3VuZCgxLjIqZCkrXCJweCBcIitmOk1hdGgucm91bmQoZCkrXCJweCBcIitmO3RoaXMuYmVnaW5QYXRoKCk7dGhpcy50ZXh0QmFzZWxpbmU9XCJtaWRkbGVcIjt0aGlzLnRleHRBbGlnbj1cImNlbnRlclwiO3RoaXMuZmlsbFRleHQoYS50ZXh0LGMsZSwyKmQpfX0sZ3JpZDp7ZHJhdzpmdW5jdGlvbihhLGIpe2lmKCFEKGIsYS54LGEueSkmJiFhLl9ub2RyYXcpe3ZhciBjPWIuZ2V0WChhLngpLGU9Yi5nZXRZKGEueSksXG5kPWIuc3RvbmVSYWRpdXM7dGhpcy5jbGVhclJlY3QoYy1kLGUtZCwyKmQsMipkKX19LGNsZWFyOmZ1bmN0aW9uKGEsYil7aWYoIUQoYixhLngsYS55KSl7YS5fbm9kcmF3PSEwO3ZhciBjO2IuZ3JpZC5jbGVhcigpO2IuZ3JpZC5kcmF3KGIpO2Zvcih2YXIgZT0wO2U8Yi5zaXplO2UrKylmb3IodmFyIGQ9MDtkPGIuc2l6ZTtkKyspZm9yKHZhciBmPTA7ZjxiLm9ial9hcnJbZV1bZF0ubGVuZ3RoO2YrKyl7dmFyIGc9Yi5vYmpfYXJyW2VdW2RdW2ZdO2M9Zy50eXBlP1wic3RyaW5nXCI9PXR5cGVvZiBnLnR5cGU/aC5kcmF3SGFuZGxlcnNbZy50eXBlXTpnLnR5cGU6Yi5zdG9uZUhhbmRsZXI7Yy5ncmlkJiZjLmdyaWQuZHJhdy5jYWxsKGIuZ3JpZC5nZXRDb250ZXh0KGcpLGcsYil9Zm9yKGU9MDtlPGIub2JqX2xpc3QubGVuZ3RoO2UrKylnPWIub2JqX2xpc3RbZV0sYz1nLmhhbmRsZXIsYy5ncmlkJiZjLmdyaWQuZHJhdy5jYWxsKGIuZ3JpZC5nZXRDb250ZXh0KGcuYXJncyksZy5hcmdzLFxuYik7ZGVsZXRlIGEuX25vZHJhd319fX0sU1E6e3N0b25lOntkcmF3OmZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5nZXRYKGEueCksZT1iLmdldFkoYS55KSxkPU1hdGgucm91bmQoYi5zdG9uZVJhZGl1cyk7dGhpcy5zdHJva2VTdHlsZT1hLmN8fHAoYixhLngsYS55KTt0aGlzLmxpbmVXaWR0aD1hLmxpbmVXaWR0aHx8ayhcIm1hcmt1cExpbmVzV2lkdGhcIixiKXx8MTt0aGlzLmJlZ2luUGF0aCgpO3RoaXMucmVjdChNYXRoLnJvdW5kKGMtZC8yKS1iLmxzLE1hdGgucm91bmQoZS1kLzIpLWIubHMsZCxkKTt0aGlzLnN0cm9rZSgpfX19LFRSOntzdG9uZTp7ZHJhdzpmdW5jdGlvbihhLGIpe3ZhciBjPWIuZ2V0WChhLngpLGU9Yi5nZXRZKGEueSksZD1iLnN0b25lUmFkaXVzO3RoaXMuc3Ryb2tlU3R5bGU9YS5jfHxwKGIsYS54LGEueSk7dGhpcy5saW5lV2lkdGg9YS5saW5lV2lkdGh8fGsoXCJtYXJrdXBMaW5lc1dpZHRoXCIsYil8fDE7dGhpcy5iZWdpblBhdGgoKTt0aGlzLm1vdmVUbyhjLWIubHMsXG5lLWIubHMtTWF0aC5yb3VuZChkLzIpKTt0aGlzLmxpbmVUbyhNYXRoLnJvdW5kKGMtZC8yKS1iLmxzLE1hdGgucm91bmQoZStkLzMpK2IubHMpO3RoaXMubGluZVRvKE1hdGgucm91bmQoYytkLzIpK2IubHMsTWF0aC5yb3VuZChlK2QvMykrYi5scyk7dGhpcy5jbG9zZVBhdGgoKTt0aGlzLnN0cm9rZSgpfX19LE1BOntzdG9uZTp7ZHJhdzpmdW5jdGlvbihhLGIpe3ZhciBjPWIuZ2V0WChhLngpLGU9Yi5nZXRZKGEueSksZD1iLnN0b25lUmFkaXVzO3RoaXMuc3Ryb2tlU3R5bGU9YS5jfHxwKGIsYS54LGEueSk7dGhpcy5saW5lQ2FwPVwicm91bmRcIjt0aGlzLmxpbmVXaWR0aD0yKihhLmxpbmVXaWR0aHx8ayhcIm1hcmt1cExpbmVzV2lkdGhcIixiKXx8MSktMTt0aGlzLmJlZ2luUGF0aCgpO3RoaXMubW92ZVRvKE1hdGgucm91bmQoYy1kLzIpLE1hdGgucm91bmQoZS1kLzIpKTt0aGlzLmxpbmVUbyhNYXRoLnJvdW5kKGMrZC8yKSxNYXRoLnJvdW5kKGUrZC8yKSk7dGhpcy5tb3ZlVG8oTWF0aC5yb3VuZChjK1xuZC8yKS0xLE1hdGgucm91bmQoZS1kLzIpKTt0aGlzLmxpbmVUbyhNYXRoLnJvdW5kKGMtZC8yKS0xLE1hdGgucm91bmQoZStkLzIpKTt0aGlzLnN0cm9rZSgpO3RoaXMubGluZUNhcD1cImJ1dHRcIn19fSxTTDp7c3RvbmU6e2RyYXc6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmdldFgoYS54KSxlPWIuZ2V0WShhLnkpLGQ9Yi5zdG9uZVJhZGl1czt0aGlzLmZpbGxTdHlsZT1hLmN8fHAoYixhLngsYS55KTt0aGlzLmJlZ2luUGF0aCgpO3RoaXMucmVjdChjLWQvMixlLWQvMixkLGQpO3RoaXMuZmlsbCgpfX19LFNNOntzdG9uZTp7ZHJhdzpmdW5jdGlvbihhLGIpe3ZhciBjPWIuZ2V0WChhLngpLGU9Yi5nZXRZKGEueSksZD1iLnN0b25lUmFkaXVzO3RoaXMuc3Ryb2tlU3R5bGU9YS5jfHxwKGIsYS54LGEueSk7dGhpcy5saW5lV2lkdGg9MiooYS5saW5lV2lkdGh8fGsoXCJtYXJrdXBMaW5lc1dpZHRoXCIsYil8fDEpO3RoaXMuYmVnaW5QYXRoKCk7dGhpcy5hcmMoYy1kLzMsZS1kLzMsZC82LDAsMipcbk1hdGguUEksITApO3RoaXMuc3Ryb2tlKCk7dGhpcy5iZWdpblBhdGgoKTt0aGlzLmFyYyhjK2QvMyxlLWQvMyxkLzYsMCwyKk1hdGguUEksITApO3RoaXMuc3Ryb2tlKCk7dGhpcy5iZWdpblBhdGgoKTt0aGlzLm1vdmVUbyhjLWQvMS41LGUpO3RoaXMuYmV6aWVyQ3VydmVUbyhjLWQvMS41LGUrZC8yLGMrZC8xLjUsZStkLzIsYytkLzEuNSxlKTt0aGlzLnN0cm9rZSgpfX19LG91dGxpbmU6e3N0b25lOntkcmF3OmZ1bmN0aW9uKGEsYil7dGhpcy5nbG9iYWxBbHBoYT1hLmFscGhhP2EuYWxwaGE6LjM7YS5zdG9uZVN0eWxlP2guZHJhd0hhbmRsZXJzW2Euc3RvbmVTdHlsZV0uc3RvbmUuZHJhdy5jYWxsKHRoaXMsYSxiKTpiLnN0b25lSGFuZGxlci5zdG9uZS5kcmF3LmNhbGwodGhpcyxhLGIpO3RoaXMuZ2xvYmFsQWxwaGE9MX19fSxtaW5pOntzdG9uZTp7ZHJhdzpmdW5jdGlvbihhLGIpe2Iuc3RvbmVSYWRpdXMvPTI7YS5zdG9uZVN0eWxlP2guZHJhd0hhbmRsZXJzW2Euc3RvbmVTdHlsZV0uc3RvbmUuZHJhdy5jYWxsKHRoaXMsXG5hLGIpOmIuc3RvbmVIYW5kbGVyLnN0b25lLmRyYXcuY2FsbCh0aGlzLGEsYik7Yi5zdG9uZVJhZGl1cyo9Mn19fX07aC5jb29yZGluYXRlcz17Z3JpZDp7ZHJhdzpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZCxmLGcsaDt0aGlzLmZpbGxTdHlsZT1rKFwiY29vcmRpbmF0ZXNDb2xvclwiLGIpO3RoaXMudGV4dEJhc2VsaW5lPVwibWlkZGxlXCI7dGhpcy50ZXh0QWxpZ249XCJjZW50ZXJcIjt0aGlzLmZvbnQ9Yi5zdG9uZVJhZGl1cytcInB4IFwiKyhiLmZvbnR8fFwiXCIpO2Q9Yi5nZXRYKC0uNzUpO2Y9Yi5nZXRYKGIuc2l6ZS0uMjUpO2c9Yi5nZXRZKC0uNzUpO2g9Yi5nZXRZKGIuc2l6ZS0uMjUpO2Zvcih2YXIgbD0wO2w8Yi5zaXplO2wrKyljPWwrNjUsNzM8PWMmJmMrKyxlPWIuZ2V0WShsKSx0aGlzLmZpbGxUZXh0KGIuc2l6ZS1sLGQsZSksdGhpcy5maWxsVGV4dChiLnNpemUtbCxmLGUpLGU9Yi5nZXRYKGwpLHRoaXMuZmlsbFRleHQoU3RyaW5nLmZyb21DaGFyQ29kZShjKSxlLGcpLHRoaXMuZmlsbFRleHQoU3RyaW5nLmZyb21DaGFyQ29kZShjKSxcbmUsaCk7dGhpcy5maWxsU3R5bGU9XCJibGFja1wifX19O2guQ2FudmFzTGF5ZXI9ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTt0aGlzLmNvbnRleHQ9dGhpcy5lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTt0aGlzLnBpeGVsUmF0aW89di5kZXZpY2VQaXhlbFJhdGlvfHwxOzE8dGhpcy5waXhlbFJhdGlvJiZ0aGlzLmNvbnRleHQuc2NhbGUodGhpcy5waXhlbFJhdGlvLHRoaXMucGl4ZWxSYXRpbyl9O2guQ2FudmFzTGF5ZXIucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpoLkNhbnZhc0xheWVyLHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oYSxiKXt0aGlzLmVsZW1lbnQud2lkdGg9YTt0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGg9YS90aGlzLnBpeGVsUmF0aW8rXCJweFwiO3RoaXMuZWxlbWVudC5oZWlnaHQ9Yjt0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0PWIvdGhpcy5waXhlbFJhdGlvK1wicHhcIn0sYXBwZW5kVG86ZnVuY3Rpb24oYSxiKXt0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb249XG5cImFic29sdXRlXCI7dGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleD1iO2EuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KX0scmVtb3ZlRnJvbTpmdW5jdGlvbihhKXthLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCl9LGdldENvbnRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0fSxkcmF3OmZ1bmN0aW9uKGEpe30sY2xlYXI6ZnVuY3Rpb24oKXt0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsMCx0aGlzLmVsZW1lbnQud2lkdGgsdGhpcy5lbGVtZW50LmhlaWdodCl9fTtoLkdyaWRMYXllcj1nLmV4dGVuZENsYXNzKGguQ2FudmFzTGF5ZXIsZnVuY3Rpb24oKXt0aGlzLnN1cGVyLmNhbGwodGhpcyl9KTtoLkdyaWRMYXllci5wcm90b3R5cGUuZHJhdz1mdW5jdGlvbihhKXt2YXIgYjt0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7dGhpcy5jb250ZXh0LmxpbmVXaWR0aD1rKFwiZ3JpZExpbmVzV2lkdGhcIixhKTt0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGU9ayhcImdyaWRMaW5lc0NvbG9yXCIsXG5hKTt2YXIgYz1NYXRoLnJvdW5kKGEubGVmdCksZT1NYXRoLnJvdW5kKGEudG9wKSxkPU1hdGgucm91bmQoYS5maWVsZFdpZHRoKihhLnNpemUtMSkpLGY9TWF0aC5yb3VuZChhLmZpZWxkSGVpZ2h0KihhLnNpemUtMSkpO3RoaXMuY29udGV4dC5zdHJva2VSZWN0KGMtYS5scyxlLWEubHMsZCxmKTtmb3IodmFyIGc9MTtnPGEuc2l6ZS0xO2crKyliPU1hdGgucm91bmQoYS5nZXRYKGcpKS1hLmxzLHRoaXMuY29udGV4dC5tb3ZlVG8oYixlKSx0aGlzLmNvbnRleHQubGluZVRvKGIsZStmKSxiPU1hdGgucm91bmQoYS5nZXRZKGcpKS1hLmxzLHRoaXMuY29udGV4dC5tb3ZlVG8oYyxiKSx0aGlzLmNvbnRleHQubGluZVRvKGMrZCxiKTt0aGlzLmNvbnRleHQuc3Ryb2tlKCk7dGhpcy5jb250ZXh0LmZpbGxTdHlsZT1rKFwic3RhckNvbG9yXCIsYSk7aWYoYS5zdGFyUG9pbnRzW2Euc2l6ZV0pZm9yKHZhciBoIGluIGEuc3RhclBvaW50c1thLnNpemVdKXRoaXMuY29udGV4dC5iZWdpblBhdGgoKSxcbnRoaXMuY29udGV4dC5hcmMoYS5nZXRYKGEuc3RhclBvaW50c1thLnNpemVdW2hdLngpLWEubHMsYS5nZXRZKGEuc3RhclBvaW50c1thLnNpemVdW2hdLnkpLWEubHMsayhcInN0YXJTaXplXCIsYSksMCwyKk1hdGguUEksITApLHRoaXMuY29udGV4dC5maWxsKCl9O2guTXVsdGlwbGVDYW52YXNMYXllcj1nLmV4dGVuZENsYXNzKGguQ2FudmFzTGF5ZXIsZnVuY3Rpb24oKXt0aGlzLmluaXQoNCl9KTtoLk11bHRpcGxlQ2FudmFzTGF5ZXIucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oYSl7dmFyIGIsYzt0aGlzLmxheWVycz1hO3RoaXMuZWxlbWVudHM9W107dGhpcy5jb250ZXh0cz1bXTt0aGlzLnBpeGVsUmF0aW89di5kZXZpY2VQaXhlbFJhdGlvfHwxO2Zvcih2YXIgZT0wO2U8YTtlKyspYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLGM9Yi5nZXRDb250ZXh0KFwiMmRcIiksMTx0aGlzLnBpeGVsUmF0aW8mJmMuc2NhbGUodGhpcy5waXhlbFJhdGlvLHRoaXMucGl4ZWxSYXRpbyksXG50aGlzLmVsZW1lbnRzLnB1c2goYiksdGhpcy5jb250ZXh0cy5wdXNoKGMpfTtoLk11bHRpcGxlQ2FudmFzTGF5ZXIucHJvdG90eXBlLmFwcGVuZFRvPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7Yzx0aGlzLmxheWVycztjKyspdGhpcy5lbGVtZW50c1tjXS5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsdGhpcy5lbGVtZW50c1tjXS5zdHlsZS56SW5kZXg9YixhLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudHNbY10pfTtoLk11bHRpcGxlQ2FudmFzTGF5ZXIucHJvdG90eXBlLnJlbW92ZUZyb209ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTA7Yjx0aGlzLmxheWVycztiKyspYS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRzW2JdKX07aC5NdWx0aXBsZUNhbnZhc0xheWVyLnByb3RvdHlwZS5nZXRDb250ZXh0PWZ1bmN0aW9uKGEpe3JldHVybiBhLnglMj9hLnklMj90aGlzLmNvbnRleHRzWzBdOnRoaXMuY29udGV4dHNbMV06YS55JTI/dGhpcy5jb250ZXh0c1syXTp0aGlzLmNvbnRleHRzWzNdfTtcbmguTXVsdGlwbGVDYW52YXNMYXllci5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtjPHRoaXMubGF5ZXJzO2MrKyl0aGlzLmNvbnRleHRzW2NdLmNsZWFyUmVjdCgwLDAsdGhpcy5lbGVtZW50c1tjXS53aWR0aCx0aGlzLmVsZW1lbnRzW2NdLmhlaWdodCl9O2guTXVsdGlwbGVDYW52YXNMYXllci5wcm90b3R5cGUuc2V0RGltZW5zaW9ucz1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2M8dGhpcy5sYXllcnM7YysrKXRoaXMuZWxlbWVudHNbY10ud2lkdGg9YSx0aGlzLmVsZW1lbnRzW2NdLnN0eWxlLndpZHRoPWEvdGhpcy5waXhlbFJhdGlvK1wicHhcIix0aGlzLmVsZW1lbnRzW2NdLmhlaWdodD1iLHRoaXMuZWxlbWVudHNbY10uc3R5bGUuaGVpZ2h0PWIvdGhpcy5waXhlbFJhdGlvK1wicHhcIn07aC5TaGFkb3dMYXllcj1nLmV4dGVuZENsYXNzKGguTXVsdGlwbGVDYW52YXNMYXllcixmdW5jdGlvbihhLGIsYyl7dGhpcy5pbml0KDIpO3RoaXMuc2hhZG93U2l6ZT1cbmI9PT1xPzE6Yjt0aGlzLmJvYXJkPWF9KTtoLlNoYWRvd0xheWVyLnByb3RvdHlwZS5nZXRDb250ZXh0PWZ1bmN0aW9uKGEpe3JldHVybiBhLnglMiYmYS55JTJ8fCEoYS54JTJ8fGEueSUyKT90aGlzLmNvbnRleHRzWzBdOnRoaXMuY29udGV4dHNbMV19O2guU2hhZG93TGF5ZXIucHJvdG90eXBlLnNldERpbWVuc2lvbnM9ZnVuY3Rpb24oYSxiKXt0aGlzLnN1cGVyLnByb3RvdHlwZS5zZXREaW1lbnNpb25zLmNhbGwodGhpcyxhLGIpO2Zvcih2YXIgYz0wO2M8dGhpcy5sYXllcnM7YysrKXRoaXMuY29udGV4dHNbY10uc2V0VHJhbnNmb3JtKDEsMCwwLDEsTWF0aC5yb3VuZCh0aGlzLnNoYWRvd1NpemUqdGhpcy5ib2FyZC5zdG9uZVJhZGl1cy83KSxNYXRoLnJvdW5kKHRoaXMuc2hhZG93U2l6ZSp0aGlzLmJvYXJkLnN0b25lUmFkaXVzLzcpKX07dmFyIEU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmdldFgoYS54KSxlPWIuZ2V0WShhLnkpLGQ9Yi5zdG9uZVJhZGl1czt0aGlzLmNsZWFyUmVjdChjLVxuMipkLWIubHMsZS0yKmQtYi5scyw0KmQsNCpkKX0sej1mdW5jdGlvbigpe3JldHVybiAzKnRoaXMud2lkdGgvKDQqKHRoaXMuYngrMS10aGlzLnR4KSsyKS10aGlzLmZpZWxkV2lkdGgqdGhpcy50eH0sQT1mdW5jdGlvbigpe3JldHVybiAzKnRoaXMuaGVpZ2h0Lyg0Kih0aGlzLmJ5KzEtdGhpcy50eSkrMiktdGhpcy5maWVsZEhlaWdodCp0aGlzLnR5fSxCPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGU9MDtlPHRoaXMub2JqX2FyclthXVtiXS5sZW5ndGg7ZSsrKXt2YXIgZD10aGlzLm9ial9hcnJbYV1bYl1bZV07Yz1kLnR5cGU/XCJzdHJpbmdcIj09dHlwZW9mIGQudHlwZT9oLmRyYXdIYW5kbGVyc1tkLnR5cGVdOmQudHlwZTp0aGlzLnN0b25lSGFuZGxlcjtmb3IodmFyIGYgaW4gYyljW2ZdLmNsZWFyP2NbZl0uY2xlYXIuY2FsbCh0aGlzW2ZdLmdldENvbnRleHQoZCksZCx0aGlzKTpFLmNhbGwodGhpc1tmXS5nZXRDb250ZXh0KGQpLGQsdGhpcyl9fSx4PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLFxuZT0wO2U8dGhpcy5vYmpfYXJyW2FdW2JdLmxlbmd0aDtlKyspe3ZhciBkPXRoaXMub2JqX2FyclthXVtiXVtlXTtjPWQudHlwZT9cInN0cmluZ1wiPT10eXBlb2YgZC50eXBlP2guZHJhd0hhbmRsZXJzW2QudHlwZV06ZC50eXBlOnRoaXMuc3RvbmVIYW5kbGVyO2Zvcih2YXIgZiBpbiBjKWNbZl0uZHJhdy5jYWxsKHRoaXNbZl0uZ2V0Q29udGV4dChkKSxkLHRoaXMpfX0sRj1mdW5jdGlvbihhKXt2YXIgYjtiPWEubGF5ZXJYKnRoaXMucGl4ZWxSYXRpbztiLT10aGlzLmxlZnQ7Yi89dGhpcy5maWVsZFdpZHRoO2I9TWF0aC5yb3VuZChiKTthPWEubGF5ZXJZKnRoaXMucGl4ZWxSYXRpbzthLT10aGlzLnRvcDthLz10aGlzLmZpZWxkSGVpZ2h0O2E9TWF0aC5yb3VuZChhKTtyZXR1cm57eDpiPj10aGlzLnNpemU/LTE6Yix5OmE+PXRoaXMuc2l6ZT8tMTphfX0sQz1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5zdHlsZS53aWR0aD10aGlzLndpZHRoL3RoaXMucGl4ZWxSYXRpbytcInB4XCI7dGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodD1cbnRoaXMuaGVpZ2h0L3RoaXMucGl4ZWxSYXRpbytcInB4XCI7dGhpcy5zdG9uZVJhZGl1cz1rKFwic3RvbmVTaXplXCIsdGhpcyk7dGhpcy5scz1rKFwibGluZXNTaGlmdFwiLHRoaXMpO2Zvcih2YXIgYT0wO2E8dGhpcy5sYXllcnMubGVuZ3RoO2ErKyl0aGlzLmxheWVyc1thXS5zZXREaW1lbnNpb25zKHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpfTtoLnByb3RvdHlwZT17Y29uc3RydWN0b3I6aCxpbml0OmZ1bmN0aW9uKCl7dGhpcy5vYmpfYXJyPVtdO2Zvcih2YXIgYT0wO2E8dGhpcy5zaXplO2ErKyl7dGhpcy5vYmpfYXJyW2FdPVtdO2Zvcih2YXIgYj0wO2I8dGhpcy5zaXplO2IrKyl0aGlzLm9ial9hcnJbYV1bYl09W119dGhpcy5vYmpfbGlzdD1bXTt0aGlzLmxheWVycz1bXTt0aGlzLmxpc3RlbmVycz1bXTt0aGlzLmVsZW1lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmVsZW1lbnQuY2xhc3NOYW1lPVwid2dvLWJvYXJkXCI7dGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uPVxuXCJyZWxhdGl2ZVwiO3RoaXMuYmFja2dyb3VuZCYmKFwiI1wiPT10aGlzLmJhY2tncm91bmRbMF0/dGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvcj10aGlzLmJhY2tncm91bmQ6dGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cInVybCgnXCIrdGhpcy5iYWNrZ3JvdW5kK1wiJylcIik7dGhpcy5ncmlkPW5ldyBoLkdyaWRMYXllcjt0aGlzLnNoYWRvdz1uZXcgaC5TaGFkb3dMYXllcih0aGlzLGsoXCJzaGFkb3dTaXplXCIsdGhpcykpO3RoaXMuc3RvbmU9bmV3IGguTXVsdGlwbGVDYW52YXNMYXllcjt0aGlzLmFkZExheWVyKHRoaXMuZ3JpZCwxMDApO3RoaXMuYWRkTGF5ZXIodGhpcy5zaGFkb3csMjAwKTt0aGlzLmFkZExheWVyKHRoaXMuc3RvbmUsMzAwKX0sc2V0V2lkdGg6ZnVuY3Rpb24oYSl7dGhpcy53aWR0aD1hO3RoaXMud2lkdGgqPXRoaXMucGl4ZWxSYXRpbzt0aGlzLmZpZWxkSGVpZ2h0PXRoaXMuZmllbGRXaWR0aD00KnRoaXMud2lkdGgvKDQqKHRoaXMuYngrMS1cbnRoaXMudHgpKzIpO3RoaXMubGVmdD16LmNhbGwodGhpcyk7dGhpcy5oZWlnaHQ9KHRoaXMuYnktdGhpcy50eSsxLjUpKnRoaXMuZmllbGRIZWlnaHQ7dGhpcy50b3A9QS5jYWxsKHRoaXMpO0MuY2FsbCh0aGlzKTt0aGlzLnJlZHJhdygpfSxzZXRIZWlnaHQ6ZnVuY3Rpb24oYSl7dGhpcy5oZWlnaHQ9YTt0aGlzLmhlaWdodCo9dGhpcy5waXhlbFJhdGlvO3RoaXMuZmllbGRXaWR0aD10aGlzLmZpZWxkSGVpZ2h0PTQqdGhpcy5oZWlnaHQvKDQqKHRoaXMuYnkrMS10aGlzLnR5KSsyKTt0aGlzLnRvcD1BLmNhbGwodGhpcyk7dGhpcy53aWR0aD0odGhpcy5ieC10aGlzLnR4KzEuNSkqdGhpcy5maWVsZFdpZHRoO3RoaXMubGVmdD16LmNhbGwodGhpcyk7Qy5jYWxsKHRoaXMpO3RoaXMucmVkcmF3KCl9LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oYSxiKXt0aGlzLndpZHRoPWF8fHBhcnNlSW50KHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCwxMCk7dGhpcy53aWR0aCo9dGhpcy5waXhlbFJhdGlvO1xudGhpcy5oZWlnaHQ9Ynx8cGFyc2VJbnQodGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCwxMCk7dGhpcy5oZWlnaHQqPXRoaXMucGl4ZWxSYXRpbzt0aGlzLmZpZWxkV2lkdGg9NCp0aGlzLndpZHRoLyg0Kih0aGlzLmJ4KzEtdGhpcy50eCkrMik7dGhpcy5maWVsZEhlaWdodD00KnRoaXMuaGVpZ2h0Lyg0Kih0aGlzLmJ5KzEtdGhpcy50eSkrMik7dGhpcy5sZWZ0PXouY2FsbCh0aGlzKTt0aGlzLnRvcD1BLmNhbGwodGhpcyk7Qy5jYWxsKHRoaXMpO3RoaXMucmVkcmF3KCl9LGdldFNlY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZWN0aW9ufSxzZXRTZWN0aW9uOmZ1bmN0aW9uKGEsYixjLGUpe3RoaXMuc2VjdGlvbj1cIm9iamVjdFwiPT10eXBlb2YgYT9hOnt0b3A6YSxyaWdodDpiLGJvdHRvbTpjLGxlZnQ6ZX07dGhpcy50eD10aGlzLnNlY3Rpb24ubGVmdDt0aGlzLnR5PXRoaXMuc2VjdGlvbi50b3A7dGhpcy5ieD10aGlzLnNpemUtMS10aGlzLnNlY3Rpb24ucmlnaHQ7dGhpcy5ieT1cbnRoaXMuc2l6ZS0xLXRoaXMuc2VjdGlvbi5ib3R0b207dGhpcy5zZXREaW1lbnNpb25zKCl9LHNldFNpemU6ZnVuY3Rpb24oYSl7YT1hfHwxOTtpZihhIT10aGlzLnNpemUpe3RoaXMuc2l6ZT1hO3RoaXMub2JqX2Fycj1bXTtmb3IoYT0wO2E8dGhpcy5zaXplO2ErKyl7dGhpcy5vYmpfYXJyW2FdPVtdO2Zvcih2YXIgYj0wO2I8dGhpcy5zaXplO2IrKyl0aGlzLm9ial9hcnJbYV1bYl09W119dGhpcy5ieD10aGlzLnNpemUtMS10aGlzLnNlY3Rpb24ucmlnaHQ7dGhpcy5ieT10aGlzLnNpemUtMS10aGlzLnNlY3Rpb24uYm90dG9tO3RoaXMuc2V0RGltZW5zaW9ucygpfX0scmVkcmF3OmZ1bmN0aW9uKCl7dHJ5e2Zvcih2YXIgYT0wO2E8dGhpcy5sYXllcnMubGVuZ3RoO2ErKyl0aGlzLmxheWVyc1thXS5jbGVhcih0aGlzKSx0aGlzLmxheWVyc1thXS5kcmF3KHRoaXMpO2ZvcihhPTA7YTx0aGlzLnNpemU7YSsrKWZvcih2YXIgYj0wO2I8dGhpcy5zaXplO2IrKyl4LmNhbGwodGhpcyxhLFxuYik7Zm9yKGE9MDthPHRoaXMub2JqX2xpc3QubGVuZ3RoO2ErKyl7dmFyIGM9dGhpcy5vYmpfbGlzdFthXSxlPWMuaGFuZGxlcixkO2ZvcihkIGluIGUpZVtkXS5kcmF3LmNhbGwodGhpc1tkXS5nZXRDb250ZXh0KGMuYXJncyksYy5hcmdzLHRoaXMpfX1jYXRjaChmKXtjb25zb2xlLmxvZyhcIldHbyBib2FyZCBmYWlsZWQgdG8gcmVuZGVyLiBFcnJvcjogXCIrZi5tZXNzYWdlKX19LGdldFg6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubGVmdCthKnRoaXMuZmllbGRXaWR0aH0sZ2V0WTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50b3ArYSp0aGlzLmZpZWxkSGVpZ2h0fSxhZGRMYXllcjpmdW5jdGlvbihhLGIpe2EuYXBwZW5kVG8odGhpcy5lbGVtZW50LGIpO2Euc2V0RGltZW5zaW9ucyh0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTt0aGlzLmxheWVycy5wdXNoKGEpfSxyZW1vdmVMYXllcjpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxheWVycy5pbmRleE9mKGEpOzA8PWImJih0aGlzLmxheWVycy5zcGxpY2UoYixcbjEpLGEucmVtb3ZlRnJvbSh0aGlzLmVsZW1lbnQpKX0sdXBkYXRlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEucmVtb3ZlJiZcImFsbFwiPT1hLnJlbW92ZSl0aGlzLnJlbW92ZUFsbE9iamVjdHMoKTtlbHNlIGlmKGEucmVtb3ZlKWZvcihiPTA7YjxhLnJlbW92ZS5sZW5ndGg7YisrKXRoaXMucmVtb3ZlT2JqZWN0KGEucmVtb3ZlW2JdKTtpZihhLmFkZClmb3IoYj0wO2I8YS5hZGQubGVuZ3RoO2IrKyl0aGlzLmFkZE9iamVjdChhLmFkZFtiXSl9LGFkZE9iamVjdDpmdW5jdGlvbihhKXtpZihhLmNvbnN0cnVjdG9yPT1BcnJheSlmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl0aGlzLmFkZE9iamVjdChhW2JdKTtlbHNlIHRyeXtCLmNhbGwodGhpcyxhLngsYS55KTtmb3IodmFyIGI9dGhpcy5vYmpfYXJyW2EueF1bYS55XSxjPTA7YzxiLmxlbmd0aDtjKyspaWYoYltjXS50eXBlPT1hLnR5cGUpe2JbY109YTt4LmNhbGwodGhpcyxhLngsYS55KTtyZXR1cm59YS50eXBlP2IucHVzaChhKTpiLnVuc2hpZnQoYSk7XG54LmNhbGwodGhpcyxhLngsYS55KX1jYXRjaChlKXtjb25zb2xlLmxvZyhcIldHbyBib2FyZCBmYWlsZWQgdG8gcmVuZGVyLiBFcnJvcjogXCIrZS5tZXNzYWdlKX19LHJlbW92ZU9iamVjdDpmdW5jdGlvbihhKXtpZihhLmNvbnN0cnVjdG9yPT1BcnJheSlmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl0aGlzLnJlbW92ZU9iamVjdChhW2JdKTtlbHNlIHRyeXtmb3IodmFyIGM9MDtjPHRoaXMub2JqX2FyclthLnhdW2EueV0ubGVuZ3RoO2MrKylpZih0aGlzLm9ial9hcnJbYS54XVthLnldW2NdLnR5cGU9PWEudHlwZSl7Yj1jO2JyZWFrfWIhPT1xJiYoQi5jYWxsKHRoaXMsYS54LGEueSksdGhpcy5vYmpfYXJyW2EueF1bYS55XS5zcGxpY2UoYiwxKSx4LmNhbGwodGhpcyxhLngsYS55KSl9Y2F0Y2goZSl7Y29uc29sZS5sb2coXCJXR28gYm9hcmQgZmFpbGVkIHRvIHJlbmRlci4gRXJyb3I6IFwiK2UubWVzc2FnZSl9fSxyZW1vdmVPYmplY3RzQXQ6ZnVuY3Rpb24oYSxiKXt0aGlzLm9ial9hcnJbYV1bYl0ubGVuZ3RoJiZcbihCLmNhbGwodGhpcyxhLGIpLHRoaXMub2JqX2FyclthXVtiXT1bXSl9LHJlbW92ZUFsbE9iamVjdHM6ZnVuY3Rpb24oKXt0aGlzLm9ial9hcnI9W107Zm9yKHZhciBhPTA7YTx0aGlzLnNpemU7YSsrKXt0aGlzLm9ial9hcnJbYV09W107Zm9yKHZhciBiPTA7Yjx0aGlzLnNpemU7YisrKXRoaXMub2JqX2FyclthXVtiXT1bXX10aGlzLnJlZHJhdygpfSxhZGRDdXN0b21PYmplY3Q6ZnVuY3Rpb24oYSxiKXt0aGlzLm9ial9saXN0LnB1c2goe2hhbmRsZXI6YSxhcmdzOmJ9KTt0aGlzLnJlZHJhdygpfSxyZW1vdmVDdXN0b21PYmplY3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtjPHRoaXMub2JqX2xpc3QubGVuZ3RoO2MrKyl7dmFyIGU9dGhpcy5vYmpfbGlzdFtjXTtpZihlLmhhbmRsZXI9PWEmJmUuYXJncz09YilyZXR1cm4gdGhpcy5vYmpfbGlzdC5zcGxpY2UoYywxKSx0aGlzLnJlZHJhdygpLCEwfXJldHVybiExfSxhZGRFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9XG50aGlzLGU9e3R5cGU6YSxjYWxsYmFjazpiLGhhbmRsZUV2ZW50OmZ1bmN0aW9uKGEpe3ZhciBlPUYuY2FsbChjLGEpO2IoZS54LGUueSxhKX19O3RoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGEsZSwhMCk7dGhpcy5saXN0ZW5lcnMucHVzaChlKX0scmVtb3ZlRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2M8dGhpcy5saXN0ZW5lcnMubGVuZ3RoO2MrKyl7dmFyIGU9dGhpcy5saXN0ZW5lcnNbY107aWYoZS50eXBlPT1hJiZlLmNhbGxiYWNrPT1iKXJldHVybiB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLnR5cGUsZSwhMCksdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGMsMSksITB9cmV0dXJuITF9LGdldFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJue29iamVjdHM6Zy5jbG9uZSh0aGlzLm9ial9hcnIpLGN1c3RvbTpnLmNsb25lKHRoaXMub2JqX2xpc3QpfX0scmVzdG9yZVN0YXRlOmZ1bmN0aW9uKGEpe3RoaXMub2JqX2Fycj1hLm9iamVjdHN8fFxudGhpcy5vYmpfYXJyO3RoaXMub2JqX2xpc3Q9YS5jdXN0b218fHRoaXMub2JqX2xpc3Q7dGhpcy5yZWRyYXcoKX19O2guZGVmYXVsdD17c2l6ZToxOSx3aWR0aDowLGhlaWdodDowLGZvbnQ6XCJDYWxpYnJpXCIsbGluZVdpZHRoOjEsYXV0b0xpbmVXaWR0aDohMSxzdGFyUG9pbnRzOnsxOTpbe3g6Myx5OjN9LHt4OjkseTozfSx7eDoxNSx5OjN9LHt4OjMseTo5fSx7eDo5LHk6OX0se3g6MTUseTo5fSx7eDozLHk6MTV9LHt4OjkseToxNX0se3g6MTUseToxNX1dLDEzOlt7eDozLHk6M30se3g6OSx5OjN9LHt4OjMseTo5fSx7eDo5LHk6OX1dLDk6W3t4OjQseTo0fV19LHN0b25lSGFuZGxlcjpoLmRyYXdIYW5kbGVycy5TSEVMTCxzdGFyU2l6ZToxLHNoYWRvd1NpemU6MSxzdG9uZVNpemU6MSxzZWN0aW9uOnt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MH0sYmFja2dyb3VuZDpnLkRJUitcIndvb2QxLmpwZ1wiLHRoZW1lOnt9fTtnLkJvYXJkPWg7dmFyIHM9ZnVuY3Rpb24oYSl7dGhpcy5zaXplPVxuYXx8MTk7dGhpcy5zY2hlbWE9W107Zm9yKGE9MDthPHRoaXMuc2l6ZSp0aGlzLnNpemU7YSsrKXRoaXMuc2NoZW1hW2FdPTB9O3MucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpnLlBvc2l0aW9uLGdldDpmdW5jdGlvbihhLGIpe3JldHVybiAwPmF8fDA+Ynx8YT49dGhpcy5zaXplfHxiPj10aGlzLnNpemU/cTp0aGlzLnNjaGVtYVthKnRoaXMuc2l6ZStiXX0sc2V0OmZ1bmN0aW9uKGEsYixjKXt0aGlzLnNjaGVtYVthKnRoaXMuc2l6ZStiXT1jO3JldHVybiB0aGlzfSxjbGVhcjpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8dGhpcy5zaXplKnRoaXMuc2l6ZTthKyspdGhpcy5zY2hlbWFbYV09MDtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgYT1uZXcgcyh0aGlzLnNpemUpO2Euc2NoZW1hPXRoaXMuc2NoZW1hLnNsaWNlKDApO3JldHVybiBhfSxjb21wYXJlOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxjPVtdLGU9MDtlPHRoaXMuc2l6ZSp0aGlzLnNpemU7ZSsrKXRoaXMuc2NoZW1hW2VdJiZcbiFhLnNjaGVtYVtlXT9jLnB1c2goe3g6TWF0aC5mbG9vcihlL3RoaXMuc2l6ZSkseTplJXRoaXMuc2l6ZX0pOnRoaXMuc2NoZW1hW2VdIT1hLnNjaGVtYVtlXSYmYi5wdXNoKHt4Ok1hdGguZmxvb3IoZS90aGlzLnNpemUpLHk6ZSV0aGlzLnNpemUsYzphLnNjaGVtYVtlXX0pO3JldHVybnthZGQ6YixyZW1vdmU6Y319fTtnLlBvc2l0aW9uPXM7dmFyIG09ZnVuY3Rpb24oYSxiLGMsZSl7dGhpcy5zaXplPWF8fDE5O3RoaXMucmVwZWF0aW5nPWI9PT1xP1wiS09cIjpiO3RoaXMuYWxsb3dfcmV3cml0ZT1jfHwhMTt0aGlzLmFsbG93X3N1aWNpZGU9ZXx8ITE7dGhpcy5zdGFjaz1bXTt0aGlzLnN0YWNrWzBdPW5ldyBzKHRoaXMuc2l6ZSk7dGhpcy5zdGFja1swXS5jYXBDb3VudD17YmxhY2s6MCx3aGl0ZTowfTt0aGlzLnR1cm49Zy5CO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicG9zaXRpb25cIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGgtXG4xXX0sc2V0OmZ1bmN0aW9uKGEpe3RoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGgtMV09YX19KX0sdD1mdW5jdGlvbihhLGIsYyxlLGQpezA8PWMmJmM8YS5zaXplJiYwPD1lJiZlPGEuc2l6ZSYmYS5nZXQoYyxlKT09ZCYmKGEuc2V0KGMsZSwwKSxiLnB1c2goe3g6Yyx5OmV9KSx0KGEsYixjLGUtMSxkKSx0KGEsYixjLGUrMSxkKSx0KGEsYixjLTEsZSxkKSx0KGEsYixjKzEsZSxkKSl9LHU9ZnVuY3Rpb24oYSxiLGMsZSxkKXtpZigwPmN8fGM+PWEuc2l6ZXx8MD5lfHxlPj1hLnNpemUpcmV0dXJuITA7aWYoMD09YS5nZXQoYyxlKSlyZXR1cm4hMTtpZighMD09Yi5nZXQoYyxlKXx8YS5nZXQoYyxlKT09LWQpcmV0dXJuITA7Yi5zZXQoYyxlLCEwKTtyZXR1cm4gdShhLGIsYyxlLTEsZCkmJnUoYSxiLGMsZSsxLGQpJiZ1KGEsYixjLTEsZSxkKSYmdShhLGIsYysxLGUsZCl9LGw9ZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGQ9W107aWYoMDw9YiYmYjxhLnNpemUmJjA8PWMmJmM8YS5zaXplJiZcbmEuZ2V0KGIsYyk9PWUpe3ZhciBmPW5ldyBzKGEuc2l6ZSk7dShhLGYsYixjLGUpJiZ0KGEsZCxiLGMsZSl9cmV0dXJuIGR9O20ucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjptLGdldFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGgtMV19LHBsYXk6ZnVuY3Rpb24oYSxiLGMsZSl7aWYoIXRoaXMuaXNPbkJvYXJkKGEsYikpcmV0dXJuIDE7aWYoIXRoaXMuYWxsb3dfcmV3cml0ZSYmMCE9dGhpcy5wb3NpdGlvbi5nZXQoYSxiKSlyZXR1cm4gMjtjfHwoYz10aGlzLnR1cm4pO3ZhciBkPXRoaXMucG9zaXRpb24uY2xvbmUoKTtkLnNldChhLGIsYyk7dmFyIGY9YyxoPWwoZCxhLTEsYiwtYykuY29uY2F0KGwoZCxhKzEsYiwtYyksbChkLGEsYi0xLC1jKSxsKGQsYSxiKzEsLWMpKTtpZighaC5sZW5ndGgpe3ZhciBrPW5ldyBzKHRoaXMuc2l6ZSk7aWYodShkLGssYSxiLGMpKWlmKHRoaXMuYWxsb3dfc3VpY2lkZSlmPS1jLHQoZCxoLGEsYixjKTtcbmVsc2UgcmV0dXJuIDN9aWYoaz10aGlzLnJlcGVhdGluZyl7YTp7dmFyIG07aWYoXCJLT1wiPT10aGlzLnJlcGVhdGluZyYmMDw9dGhpcy5zdGFjay5sZW5ndGgtMiltPXRoaXMuc3RhY2subGVuZ3RoLTI7ZWxzZSBpZihcIkFMTFwiPT10aGlzLnJlcGVhdGluZyltPTA7ZWxzZXthPSEwO2JyZWFrIGF9Zm9yKHZhciBwPXRoaXMuc3RhY2subGVuZ3RoLTI7cD49bTtwLS0paWYodGhpcy5zdGFja1twXS5nZXQoYSxiKT09ZC5nZXQoYSxiKSl7Zm9yKHZhciBrPSEwLHE9MDtxPHRoaXMuc2l6ZSp0aGlzLnNpemU7cSsrKWlmKHRoaXMuc3RhY2tbcF0uc2NoZW1hW3FdIT1kLnNjaGVtYVtxXSl7az0hMTticmVha31pZihrKXthPSExO2JyZWFrIGF9fWE9ITB9az0hYX1pZihrKXJldHVybiA0O2lmKGUpcmV0dXJuITE7ZC5jb2xvcj1jO2QuY2FwQ291bnQ9e2JsYWNrOnRoaXMucG9zaXRpb24uY2FwQ291bnQuYmxhY2ssd2hpdGU6dGhpcy5wb3NpdGlvbi5jYXBDb3VudC53aGl0ZX07Zj09Zy5CP2QuY2FwQ291bnQuYmxhY2srPVxuaC5sZW5ndGg6ZC5jYXBDb3VudC53aGl0ZSs9aC5sZW5ndGg7dGhpcy5wdXNoUG9zaXRpb24oZCk7dGhpcy50dXJuPS1jO3JldHVybiBofSxwYXNzOmZ1bmN0aW9uKGEpe3RoaXMucHVzaFBvc2l0aW9uKCk7YT8odGhpcy5wb3NpdGlvbi5jb2xvcj1hLHRoaXMudHVybj0tYSk6KHRoaXMucG9zaXRpb24uY29sb3I9dGhpcy50dXJuLHRoaXMudHVybj0tdGhpcy50dXJuKX0saXNWYWxpZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuXCJudW1iZXJcIiE9dHlwZW9mIHRoaXMucGxheShhLGIsYywhMCl9LGlzT25Cb2FyZDpmdW5jdGlvbihhLGIpe3JldHVybiAwPD1hJiYwPD1iJiZhPHRoaXMuc2l6ZSYmYjx0aGlzLnNpemV9LGFkZFN0b25lOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5pc09uQm9hcmQoYSxiKSYmMD09dGhpcy5wb3NpdGlvbi5nZXQoYSxiKT8odGhpcy5wb3NpdGlvbi5zZXQoYSxiLGN8fDApLCEwKTohMX0scmVtb3ZlU3RvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5pc09uQm9hcmQoYSxcbmIpJiYwIT10aGlzLnBvc2l0aW9uLmdldChhLGIpPyh0aGlzLnBvc2l0aW9uLnNldChhLGIsMCksITApOiExfSxzZXRTdG9uZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMuaXNPbkJvYXJkKGEsYik/KHRoaXMucG9zaXRpb24uc2V0KGEsYixjfHwwKSwhMCk6ITF9LGdldFN0b25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuaXNPbkJvYXJkKGEsYik/dGhpcy5wb3NpdGlvbi5nZXQoYSxiKTowfSxwdXNoUG9zaXRpb246ZnVuY3Rpb24oYSl7YXx8KGE9dGhpcy5wb3NpdGlvbi5jbG9uZSgpLGEuY2FwQ291bnQ9e2JsYWNrOnRoaXMucG9zaXRpb24uY2FwQ291bnQuYmxhY2ssd2hpdGU6dGhpcy5wb3NpdGlvbi5jYXBDb3VudC53aGl0ZX0sYS5jb2xvcj10aGlzLnBvc2l0aW9uLmNvbG9yKTt0aGlzLnN0YWNrLnB1c2goYSk7YS5jb2xvciYmKHRoaXMudHVybj0tYS5jb2xvcik7cmV0dXJuIHRoaXN9LHBvcFBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9bnVsbDswPHRoaXMuc3RhY2subGVuZ3RoJiZcbihhPXRoaXMuc3RhY2sucG9wKCksdGhpcy50dXJuPTA9PXRoaXMuc3RhY2subGVuZ3RoP2cuQjp0aGlzLnBvc2l0aW9uLmNvbG9yPy10aGlzLnBvc2l0aW9uLmNvbG9yOi10aGlzLnR1cm4pO3JldHVybiBhfSxmaXJzdFBvc2l0aW9uOmZ1bmN0aW9uKCl7dGhpcy5zdGFjaz1bXTt0aGlzLnN0YWNrWzBdPW5ldyBzKHRoaXMuc2l6ZSk7dGhpcy5zdGFja1swXS5jYXBDb3VudD17YmxhY2s6MCx3aGl0ZTowfTt0aGlzLnR1cm49Zy5CO3JldHVybiB0aGlzfSxnZXRDYXB0dXJlQ291bnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PWcuQj90aGlzLnBvc2l0aW9uLmNhcENvdW50LmJsYWNrOnRoaXMucG9zaXRpb24uY2FwQ291bnQud2hpdGV9LHZhbGlkYXRlUG9zaXRpb246ZnVuY3Rpb24oKXtmb3IodmFyIGEsYixjPTAsZT0wLGQ9W10sZj10aGlzLnBvc2l0aW9uLmNsb25lKCksaD0wO2g8dGhpcy5zaXplO2grKylmb3IodmFyIGs9MDtrPHRoaXMuc2l6ZTtrKyspaWYoYT10aGlzLnBvc2l0aW9uLmdldChoLFxuaykpYj1kLmxlbmd0aCxkPWQuY29uY2F0KGwoZixoLTEsaywtYSksbChmLGgrMSxrLC1hKSxsKGYsaCxrLTEsLWEpLGwoZixoLGsrMSwtYSkpLGE9PWcuQj9lKz1kLWI6Yys9ZC1iO3RoaXMucG9zaXRpb24uY2FwQ291bnQuYmxhY2srPWU7dGhpcy5wb3NpdGlvbi5jYXBDb3VudC53aGl0ZSs9Yzt0aGlzLnBvc2l0aW9uLnNjaGVtYT1mLnNjaGVtYTtyZXR1cm4gZH19O2cuR2FtZT1tO3YuV0dvPWd9KSh3aW5kb3cpO1xuIiwiLyohIE1JVCBsaWNlbnNlLCBtb3JlIGluZm86IHdnby53YWx0aGVyaS5uZXQgKi8oZnVuY3Rpb24oYixwKXt2YXIgZz1mdW5jdGlvbih1KXt2YXIgYT1uZXcgcihKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHUuZ2V0UHJvcGVydGllcygpKSkpLGM7Zm9yKGMgaW4gdS5jaGlsZHJlbilhLmFwcGVuZENoaWxkKGcodS5jaGlsZHJlbltjXSkpO3JldHVybiBhfSxmPWZ1bmN0aW9uKHUsYSl7dmFyIGM7aWYoYVt1XSE9PXApcmV0dXJuIGFbdV07Zm9yKHZhciBoIGluIGEuY2hpbGRyZW4paWYoYz1mKHUsYS5jaGlsZHJlbltoXSkpcmV0dXJuIGM7cmV0dXJuITF9LGw9ZnVuY3Rpb24oYSxjKXthLnB1c2goSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjLmdldFByb3BlcnRpZXMoKSkpKTtpZigxPGMuY2hpbGRyZW4ubGVuZ3RoKXtmb3IodmFyIGg9W10sZT0wO2U8Yy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXt2YXIgZD1bXTtsKGQsYy5jaGlsZHJlbltlXSk7aC5wdXNoKGQpfWEucHVzaChoKX1lbHNlIGMuY2hpbGRyZW4ubGVuZ3RoJiZsKGEsYy5jaGlsZHJlblswXSl9LGQ9ZnVuY3Rpb24oYyxcbmEpe2Zvcih2YXIgaD1hLGUsYj0xO2I8Yy5sZW5ndGg7YisrKWlmKGNbYl0uY29uc3RydWN0b3I9PUFycmF5KWZvcih2YXIgaz0wO2s8Y1tiXS5sZW5ndGg7aysrKWU9bmV3IHIoY1tiXVtrXVswXSksaC5hcHBlbmRDaGlsZChlKSxkKGNbYl1ba10sZSk7ZWxzZSBlPW5ldyByKGNbYl0pLGguaW5zZXJ0QWZ0ZXIoZSksaD1lfSxrPWZ1bmN0aW9uKGMpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZSgvXFxcXC9nLFwiXFxcXFxcXFxcIikucmVwbGFjZSgvXS9nLFwiXFxcXF1cIik6Y30sYT1mdW5jdGlvbihjLGEpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3K2MpK1N0cmluZy5mcm9tQ2hhckNvZGUoOTcrYSl9LGg9ZnVuY3Rpb24oYyxhLGgpe2lmKGEubGVuZ3RoKXtoLnNnZis9Yztmb3IodmFyIGUgaW4gYSloLnNnZis9XCJbXCIrYVtlXStcIl1cIn19LG49ZnVuY3Rpb24oYyxlKXtpZihjLm1vdmUpe3ZhciBkPVwiXCI7Yy5tb3ZlLnBhc3N8fChkPWEoYy5tb3ZlLngsYy5tb3ZlLnkpKTtlLnNnZj1cbmMubW92ZS5jPT1iLkI/ZS5zZ2YrKFwiQltcIitkK1wiXVwiKTplLnNnZisoXCJXW1wiK2QrXCJdXCIpfWlmKGMuc2V0dXApe3ZhciBkPVtdLG09W10sZj1bXSxxO2ZvcihxIGluIGMuc2V0dXApYy5zZXR1cFtxXS5jPT1iLkI/ZC5wdXNoKGEoYy5zZXR1cFtxXS54LGMuc2V0dXBbcV0ueSkpOmMuc2V0dXBbcV0uYz09Yi5XP20ucHVzaChhKGMuc2V0dXBbcV0ueCxjLnNldHVwW3FdLnkpKTpmLnB1c2goYShjLnNldHVwW3FdLngsYy5zZXR1cFtxXS55KSk7aChcIkFCXCIsZCxlKTtoKFwiQVdcIixtLGUpO2goXCJBRVwiLGYsZSl9aWYoYy5tYXJrdXApe2Q9e307Zm9yKHEgaW4gYy5tYXJrdXApZFtjLm1hcmt1cFtxXS50eXBlXT1kW2MubWFya3VwW3FdLnR5cGVdfHxbXSxcIkxCXCI9PWMubWFya3VwW3FdLnR5cGU/ZC5MQi5wdXNoKGEoYy5tYXJrdXBbcV0ueCxjLm1hcmt1cFtxXS55KStcIjpcIitrKGMubWFya3VwW3FdLnRleHQpKTpkW2MubWFya3VwW3FdLnR5cGVdLnB1c2goYShjLm1hcmt1cFtxXS54LGMubWFya3VwW3FdLnkpKTtcbmZvcih2YXIgZyBpbiBkKWgoZyxkW2ddLGUpfXE9Yy5nZXRQcm9wZXJ0aWVzKCk7Zm9yKGcgaW4gcSlcIm9iamVjdFwiIT10eXBlb2YgcVtnXSYmKGUuc2dmPVwidHVyblwiPT1nP2Uuc2dmKyhcIlBMW1wiKyhxW2ddPT1iLkI/XCJCXCI6XCJXXCIpK1wiXVwiKTpcImNvbW1lbnRcIj09Zz9lLnNnZisoXCJDW1wiK2socVtnXSkrXCJdXCIpOmUuc2dmKyhnK1wiW1wiK2socVtnXSkrXCJdXCIpKTtpZigxPT1jLmNoaWxkcmVuLmxlbmd0aCllLnNnZis9XCJcXG47XCIsbihjLmNoaWxkcmVuWzBdLGUpO2Vsc2UgaWYoMTxjLmNoaWxkcmVuLmxlbmd0aClmb3IoZyBpbiBjLmNoaWxkcmVuKXE9Yy5jaGlsZHJlbltnXSxkPWUsZC5zZ2YrPVwiKFxcbjtcIixuKHEsZCksZC5zZ2YrPVwiXFxuKVwifSxtPWZ1bmN0aW9uKCl7dGhpcy5zaXplPTE5O3RoaXMuaW5mbz17fTt0aGlzLnJvb3Q9bmV3IHI7dGhpcy5wcm9wZXJ0eUNvdW50PXRoaXMubm9kZUNvdW50PTB9O20ucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjptLGNsb25lOmZ1bmN0aW9uKCl7dmFyIGM9XG5uZXcgbTtjLnNpemU9dGhpcy5zaXplO2MuaW5mbz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuaW5mbykpO2Mucm9vdD1nKHRoaXMucm9vdCk7Yy5ub2RlQ291bnQ9dGhpcy5ub2RlQ291bnQ7Yy5wcm9wZXJ0eUNvdW50PXRoaXMucHJvcGVydHlDb3VudDtyZXR1cm4gY30saGFzQ29tbWVudHM6ZnVuY3Rpb24oKXtyZXR1cm4hIWYoXCJjb21tZW50XCIsdGhpcy5yb290KX19O20uZnJvbVNnZj1mdW5jdGlvbihjKXtyZXR1cm4gYi5TR0YucGFyc2UoYyl9O20uZnJvbUpHTz1mdW5jdGlvbihjKXtjPVwic3RyaW5nXCI9PXR5cGVvZiBjP0pTT04ucGFyc2UoYyk6Yzt2YXIgYT1uZXcgbTthLmluZm89SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjLmluZm8pKTthLnNpemU9Yy5zaXplO2Eubm9kZUNvdW50PWMubm9kZUNvdW50O2EucHJvcGVydHlDb3VudD1jLnByb3BlcnR5Q291bnQ7YS5yb290PW5ldyByKGMuZ2FtZVswXSk7ZChjLmdhbWUsYS5yb290KTtyZXR1cm4gYX07bS5wcm90b3R5cGUudG9TZ2Y9XG5mdW5jdGlvbigpe3ZhciBjPXtzZ2Y6XCIoXFxuO1wifSxhPXt9LGU7Zm9yKGUgaW4gdGhpcy5pbmZvKVwiYmxhY2tcIj09ZT8odGhpcy5pbmZvLmJsYWNrLm5hbWUmJihhLlBCPWsodGhpcy5pbmZvLmJsYWNrLm5hbWUpKSx0aGlzLmluZm8uYmxhY2sucmFuayYmKGEuQlI9ayh0aGlzLmluZm8uYmxhY2sucmFuaykpLHRoaXMuaW5mby5ibGFjay50ZWFtJiYoYS5CVD1rKHRoaXMuaW5mby5ibGFjay50ZWFtKSkpOlwid2hpdGVcIj09ZT8odGhpcy5pbmZvLndoaXRlLm5hbWUmJihhLlBXPWsodGhpcy5pbmZvLndoaXRlLm5hbWUpKSx0aGlzLmluZm8ud2hpdGUucmFuayYmKGEuV1I9ayh0aGlzLmluZm8ud2hpdGUucmFuaykpLHRoaXMuaW5mby53aGl0ZS50ZWFtJiYoYS5XVD1rKHRoaXMuaW5mby53aGl0ZS50ZWFtKSkpOmFbZV09ayh0aGlzLmluZm9bZV0pO3RoaXMuc2l6ZSYmKGEuU1o9dGhpcy5zaXplKTthLkFQfHwoYS5BUD1cIldHby5qczoyXCIpO2EuRkZ8fChhLkZGPVwiNFwiKTthLkdNfHwoYS5HTT1cblwiMVwiKTthLkNBfHwoYS5DQT1cIlVURi04XCIpO2ZvcihlIGluIGEpYVtlXSYmKGMuc2dmKz1lK1wiW1wiK2FbZV0rXCJdXCIpO24odGhpcy5yb290LGMpO2Muc2dmKz1cIilcIjtyZXR1cm4gYy5zZ2Z9O20ucHJvdG90eXBlLnRvSkdPPWZ1bmN0aW9uKGMpe3ZhciBhPXt9O2Euc2l6ZT10aGlzLnNpemU7YS5pbmZvPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5pbmZvKSk7YS5ub2RlQ291bnQ9dGhpcy5ub2RlQ291bnQ7YS5wcm9wZXJ0eUNvdW50PXRoaXMucHJvcGVydHlDb3VudDthLmdhbWU9W107bChhLmdhbWUsdGhpcy5yb290KTtyZXR1cm4gYz9KU09OLnN0cmluZ2lmeShhKTphfTt2YXIgZT1mdW5jdGlvbihjKXt2YXIgYTtjLm5hbWU/KGE9Yi5maWx0ZXJIVE1MKGMubmFtZSksYy5yYW5rJiYoYSs9XCIgKFwiK2IuZmlsdGVySFRNTChjLnJhbmspK1wiKVwiKSxjLnRlYW0mJihhKz1cIiwgXCIrYi5maWx0ZXJIVE1MKGMudGVhbSkpKTooYy50ZWFtJiYoYT1iLmZpbHRlckhUTUwoYy50ZWFtKSksXG5jLnJhbmsmJihhKz1cIiAoXCIrYi5maWx0ZXJIVE1MKGMucmFuaykrXCIpXCIpKTtyZXR1cm4gYX07bS5pbmZvRm9ybWF0dGVycz17YmxhY2s6ZSx3aGl0ZTplLFRNOmZ1bmN0aW9uKGMpe2lmKDA9PWMpcmV0dXJuIGIudChcIm5vbmVcIik7dmFyIGEsZT1NYXRoLmZsb29yKGMvNjApOzE9PWU/YT1cIjEgXCIrYi50KFwibWludXRlXCIpOjE8ZSYmKGE9ZStcIiBcIitiLnQoXCJtaW51dGVzXCIpKTtlPWMlNjA7MT09ZT9hKz1cIiAxIFwiK2IudChcInNlY29uZFwiKToxPGUmJihhKz1cIiBcIitlK1wiIFwiK2IudChcInNlY29uZHNcIikpO3JldHVybiBhfSxSRTpmdW5jdGlvbihjKXtyZXR1cm4nPGEgaHJlZj1cImphdmFzY3JpcHQ6IHZvaWQoMClcIiBvbmNsaWNrPVwidGhpcy5wYXJlbnROb2RlLmlubmVySFRNTCA9IFxcJycrYi5maWx0ZXJIVE1MKGMpKydcXCdcIiB0aXRsZT1cIicrYi50KFwicmVzLXNob3ctdGlwXCIpKydcIj4nK2IudChcInNob3dcIikrXCI8L2E+XCJ9fTttLmluZm9MaXN0PVwiYmxhY2sgd2hpdGUgQU4gQ1AgRFQgRVYgR04gR0MgSEEgT04gT1QgUkUgUk8gUlUgU08gVE0gVVMgUEMgS01cIi5zcGxpdChcIiBcIik7XG5iLktpZnU9bTt2YXIgYz1mdW5jdGlvbihjLGEsZSl7Zm9yKHZhciBoPTA7aDxjLmxlbmd0aDtoKyspaWYoY1toXS54PT1hLngmJmNbaF0ueT09YS55KXtjW2hdW2VdPWFbZV07cmV0dXJufWMucHVzaChhKX0scT1mdW5jdGlvbihjLGEpe2lmKGMpZm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspaWYoY1tlXS54PT1hLngmJmNbZV0ueT09YS55KXtjLnNwbGljZShlLDEpO2JyZWFrfX0scj1mdW5jdGlvbihjLGEpe3RoaXMucGFyZW50PWF8fG51bGw7dGhpcy5jaGlsZHJlbj1bXTtpZihjKWZvcih2YXIgZSBpbiBjKXRoaXNbZV09Y1tlXX07ci5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOnIsZ2V0Q2hpbGQ6ZnVuY3Rpb24oYyl7Yz1jfHwwO3JldHVybiB0aGlzLmNoaWxkcmVuW2NdP3RoaXMuY2hpbGRyZW5bY106bnVsbH0sYWRkU2V0dXA6ZnVuY3Rpb24oYSl7dGhpcy5zZXR1cD10aGlzLnNldHVwfHxbXTtjKHRoaXMuc2V0dXAsYSxcImNcIik7cmV0dXJuIHRoaXN9LHJlbW92ZVNldHVwOmZ1bmN0aW9uKGMpe3EodGhpcy5zZXR1cCxcbmMpO3JldHVybiB0aGlzfSxhZGRNYXJrdXA6ZnVuY3Rpb24oYSl7dGhpcy5tYXJrdXA9dGhpcy5tYXJrdXB8fFtdO2ModGhpcy5tYXJrdXAsYSxcInR5cGVcIik7cmV0dXJuIHRoaXN9LHJlbW92ZU1hcmt1cDpmdW5jdGlvbihjKXtxKHRoaXMubWFya3VwLGMpO3JldHVybiB0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXt2YXIgYz10aGlzLnBhcmVudDtpZighYyl0aHJvdyBuZXcgRXhjZXB0aW9uKFwiUm9vdCBub2RlIGNhbm5vdCBiZSByZW1vdmVkXCIpO2Zvcih2YXIgYSBpbiBjLmNoaWxkcmVuKWlmKGMuY2hpbGRyZW5bYV09PXRoaXMpe2MuY2hpbGRyZW4uc3BsaWNlKGEsMSk7YnJlYWt9Yy5jaGlsZHJlbj1jLmNoaWxkcmVuLmNvbmNhdCh0aGlzLmNoaWxkcmVuKTt0aGlzLnBhcmVudD1udWxsO3JldHVybiBjfSxpbnNlcnRBZnRlcjpmdW5jdGlvbihjKXtmb3IodmFyIGEgaW4gdGhpcy5jaGlsZHJlbil0aGlzLmNoaWxkcmVuW2FdLnBhcmVudD1jO2MuY2hpbGRyZW49Yy5jaGlsZHJlbi5jb25jYXQodGhpcy5jaGlsZHJlbik7XG5jLnBhcmVudD10aGlzO3RoaXMuY2hpbGRyZW49W2NdO3JldHVybiBjfSxhcHBlbmRDaGlsZDpmdW5jdGlvbihjKXtjLnBhcmVudD10aGlzO3RoaXMuY2hpbGRyZW4ucHVzaChjKTtyZXR1cm4gY30sZ2V0UHJvcGVydGllczpmdW5jdGlvbigpe3ZhciBjPXt9LGE7Zm9yKGEgaW4gdGhpcyl0aGlzLmhhc093blByb3BlcnR5KGEpJiZcImNoaWxkcmVuXCIhPWEmJlwicGFyZW50XCIhPWEmJlwiX1wiIT1hWzBdJiYoY1thXT10aGlzW2FdKTtyZXR1cm4gY319O2IuS05vZGU9cjt2YXIgeT1mdW5jdGlvbihjLGEpe2Zvcih2YXIgZT1jLnNpemUsaD1bXSxkPVtdLGI9MDtiPGUqZTtiKyspYy5zY2hlbWFbYl0mJiFhLnNjaGVtYVtiXT9kLnB1c2goe3g6TWF0aC5mbG9vcihiL2UpLHk6YiVlfSk6Yy5zY2hlbWFbYl0hPWEuc2NoZW1hW2JdJiZoLnB1c2goe3g6TWF0aC5mbG9vcihiL2UpLHk6YiVlLGM6YS5zY2hlbWFbYl19KTtyZXR1cm57YWRkOmgscmVtb3ZlOmR9fSxlPWZ1bmN0aW9uKGMsYSxlKXt0aGlzLmtpZnU9XG5jO3RoaXMubm9kZT10aGlzLmtpZnUucm9vdDt0aGlzLmFsbG93X2lsbGVnYWw9ZXx8ITE7dGhpcy5nYW1lPW5ldyBiLkdhbWUodGhpcy5raWZ1LnNpemUsdGhpcy5hbGxvd19pbGxlZ2FsP1wiTk9ORVwiOlwiS09cIix0aGlzLmFsbG93X2lsbGVnYWwsdGhpcy5hbGxvd19pbGxlZ2FsKTt0aGlzLnBhdGg9e206MH07dGhpcy5raWZ1LmluZm8uSEEmJjE8dGhpcy5raWZ1LmluZm8uSEEmJih0aGlzLmdhbWUudHVybj1iLlcpO3RoaXMuY2hhbmdlPXYodGhpcy5nYW1lLHRoaXMubm9kZSwhMCk7dGhpcy5yZW1lbWJlclBhdGg9YT8hMDohMX0sdz1mdW5jdGlvbihjLGEpe3ZhciBlPVtdLGgsZDtmb3IoZCBpbiBjKXtoPSEwO2Zvcih2YXIgYiBpbiBhKWlmKGNbZF0ueD09YVtiXS54JiZjW2RdLnk9PWFbYl0ueSl7aD0hMTticmVha31oJiZlLnB1c2goY1tkXSl9cmV0dXJuIGV9LHY9ZnVuY3Rpb24oYyxhLGUpe2EucGFyZW50JiYoYS5wYXJlbnQuX2xhc3Rfc2VsZWN0ZWQ9YS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihhKSk7XG5pZihhLm1vdmUhPXApe2lmKGEubW92ZS5wYXNzKXJldHVybiBjLnBhc3MoYS5tb3ZlLmMpLHthZGQ6W10scmVtb3ZlOltdfTtjPWMucGxheShhLm1vdmUueCxhLm1vdmUueSxhLm1vdmUuYyk7aWYoXCJudW1iZXJcIj09dHlwZW9mIGMpdGhyb3cgbmV3IHgoYyxhKTtmb3IodmFyIGggaW4gYylpZihjW2hdLng9PWEubW92ZS54JiZjW2hdLnk9PWEubW92ZS55KXJldHVybnthZGQ6W10scmVtb3ZlOmN9O3JldHVybnthZGQ6W2EubW92ZV0scmVtb3ZlOmN9fWV8fGMucHVzaFBvc2l0aW9uKCk7ZT1bXTt2YXIgZD1bXTtpZihhLnNldHVwIT1wKWZvcihoIGluIGEuc2V0dXApYS5zZXR1cFtoXS5jPyhjLnNldFN0b25lKGEuc2V0dXBbaF0ueCxhLnNldHVwW2hdLnksYS5zZXR1cFtoXS5jKSxlLnB1c2goYS5zZXR1cFtoXSkpOihjLnJlbW92ZVN0b25lKGEuc2V0dXBbaF0ueCxhLnNldHVwW2hdLnkpLGQucHVzaChhLnNldHVwW2hdKSk7YS50dXJuJiYoYy50dXJuPWEudHVybik7cmV0dXJue2FkZDplLFxucmVtb3ZlOmR9fSx6PWZ1bmN0aW9uKGMpe2M9PT1wJiZ0aGlzLnJlbWVtYmVyUGF0aCYmKGM9dGhpcy5ub2RlLl9sYXN0X3NlbGVjdGVkKTtjPWN8fDA7dmFyIGE9dGhpcy5ub2RlLmNoaWxkcmVuW2NdO2lmKCFhKXJldHVybiExO3ZhciBlPXYodGhpcy5nYW1lLGEpO3RoaXMucGF0aC5tKys7MTx0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoJiYodGhpcy5wYXRoW3RoaXMucGF0aC5tXT1jKTt0aGlzLm5vZGU9YTtyZXR1cm4gZX0sQT1mdW5jdGlvbigpe2lmKCF0aGlzLm5vZGUucGFyZW50KXJldHVybiExO3RoaXMubm9kZT10aGlzLm5vZGUucGFyZW50O3RoaXMuZ2FtZS5wb3BQb3NpdGlvbigpO3RoaXMubm9kZS50dXJuJiYodGhpcy5nYW1lLnR1cm49dGhpcy5ub2RlLnR1cm4pO3RoaXMucGF0aFt0aGlzLnBhdGgubV0hPT1wJiZkZWxldGUgdGhpcy5wYXRoW3RoaXMucGF0aC5tXTt0aGlzLnBhdGgubS0tO3JldHVybiEwfSxCPWZ1bmN0aW9uKCl7dGhpcy5nYW1lLmZpcnN0UG9zaXRpb24oKTtcbnRoaXMubm9kZT10aGlzLmtpZnUucm9vdDt0aGlzLnBhdGg9e206MH07dGhpcy5raWZ1LmluZm8uSEEmJjE8dGhpcy5raWZ1LmluZm8uSEEmJih0aGlzLmdhbWUudHVybj1iLlcpO3RoaXMuY2hhbmdlPXYodGhpcy5nYW1lLHRoaXMubm9kZSwhMCl9O2UucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjplLG5leHQ6ZnVuY3Rpb24oYyl7dGhpcy5jaGFuZ2U9ei5jYWxsKHRoaXMsYyk7cmV0dXJuIHRoaXN9LGxhc3Q6ZnVuY3Rpb24oKXt2YXIgYztmb3IodGhpcy5jaGFuZ2U9e2FkZDpbXSxyZW1vdmU6W119O2M9ei5jYWxsKHRoaXMpOyl7dmFyIGE9dGhpcy5jaGFuZ2U7YS5hZGQ9dyhhLmFkZCxjLnJlbW92ZSkuY29uY2F0KGMuYWRkKTthLnJlbW92ZT13KGEucmVtb3ZlLGMuYWRkKS5jb25jYXQoYy5yZW1vdmUpfXJldHVybiB0aGlzfSxwcmV2aW91czpmdW5jdGlvbigpe3ZhciBjPXRoaXMuZ2FtZS5nZXRQb3NpdGlvbigpO0EuY2FsbCh0aGlzKTt0aGlzLmNoYW5nZT15KGMsdGhpcy5nYW1lLmdldFBvc2l0aW9uKCkpO1xucmV0dXJuIHRoaXN9LGZpcnN0OmZ1bmN0aW9uKCl7dmFyIGM9dGhpcy5nYW1lLmdldFBvc2l0aW9uKCk7Qi5jYWxsKHRoaXMpO3RoaXMuY2hhbmdlPXkoYyx0aGlzLmdhbWUuZ2V0UG9zaXRpb24oKSk7cmV0dXJuIHRoaXN9LGdvVG86ZnVuY3Rpb24oYyl7aWYoYz09PXApcmV0dXJuIHRoaXM7dmFyIGE9dGhpcy5nYW1lLmdldFBvc2l0aW9uKCk7Qi5jYWxsKHRoaXMpO2Zvcih2YXIgZT0wO2U8Yy5tJiZ6LmNhbGwodGhpcyxjW2UrMV0pO2UrKyk7dGhpcy5jaGFuZ2U9eShhLHRoaXMuZ2FtZS5nZXRQb3NpdGlvbigpKTtyZXR1cm4gdGhpc30scHJldmlvdXNGb3JrOmZ1bmN0aW9uKCl7Zm9yKHZhciBjPXRoaXMuZ2FtZS5nZXRQb3NpdGlvbigpO0EuY2FsbCh0aGlzKSYmMT09dGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDspO3RoaXMuY2hhbmdlPXkoYyx0aGlzLmdhbWUuZ2V0UG9zaXRpb24oKSk7cmV0dXJuIHRoaXN9LGdldFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2FtZS5nZXRQb3NpdGlvbigpfSxcbmFsbG93SWxsZWdhbE1vdmVzOmZ1bmN0aW9uKGMpe2M/KHRoaXMuZ2FtZS5hbGxvd19yZXdyaXRlPSEwLHRoaXMuZ2FtZS5hbGxvd19zdWljaWRlPSEwLHRoaXMucmVwZWF0aW5nPVwiTk9ORVwiKToodGhpcy5nYW1lLmFsbG93X3Jld3JpdGU9ITEsdGhpcy5nYW1lLmFsbG93X3N1aWNpZGU9ITEsdGhpcy5yZXBlYXRpbmc9XCJLT1wiKX19O2IuS2lmdVJlYWRlcj1lO3ZhciB4PWZ1bmN0aW9uKGMsYSl7dGhpcy5uYW1lPVwiSW52YWxpZE1vdmVFcnJvclwiO3RoaXMubWVzc2FnZT1cIkludmFsaWQgbW92ZSBpbiBraWZ1IGRldGVjdGVkLiBcIjtpZihhLm1vdmUmJmEubW92ZS5jIT09cCYmYS5tb3ZlLnghPT1wJiZhLm1vdmUueSE9PXApe3ZhciBlPWEubW92ZS54Ozc8YS5tb3ZlLngmJmUrKztTdHJpbmcuZnJvbUNoYXJDb2RlKGUrNjUpO3RoaXMubWVzc2FnZSs9XCJUcnlpbmcgdG8gcGxheSBcIisoYS5tb3ZlLmM9PWIuV0hJVEU/XCJ3aGl0ZVwiOlwiYmxhY2tcIikrXCIgbW92ZSBvbiBcIitTdHJpbmcuZnJvbUNoYXJDb2RlKGEubW92ZS54K1xuNjUpK1wiXCIrKDE5LWEubW92ZS55KX1lbHNlIHRoaXMubWVzc2FnZSs9XCJNb3ZlIG9iamVjdCBkb2Vzbid0IGNvbnRhaW4gYXJiaXRyYXJ5IGF0dHJpYnV0ZXMuXCI7aWYoYylzd2l0Y2goYyl7Y2FzZSAxOnRoaXMubWVzc2FnZSs9XCIsIGJ1dCB0aGVzZSBjb29yZGluYXRlcyBhcmUgbm90IG9uIGJvYXJkLlwiO2JyZWFrO2Nhc2UgMjp0aGlzLm1lc3NhZ2UrPVwiLCBidXQgdGhlcmUgYWxyZWFkeSBpcyBhIHN0b25lLlwiO2JyZWFrO2Nhc2UgMzp0aGlzLm1lc3NhZ2UrPVwiLCBidXQgdGhpcyBtb3ZlIGlzIGEgc3VpY2lkZS5cIjticmVhaztjYXNlIDQ6dGhpcy5tZXNzYWdlKz1cIiwgYnV0IHRoaXMgcG9zaXRpb24gYWxyZWFkeSBvY2N1cmVkLlwifWVsc2UgdGhpcy5tZXNzYWdlKz1cIi5cIn07eC5wcm90b3R5cGU9RXJyb3IoKTt4LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj14O2IuSW52YWxpZE1vdmVFcnJvcj14O2IuaTE4bi5lbi5zaG93PVwic2hvd1wiO2IuaTE4bi5lbltcInJlcy1zaG93LXRpcFwiXT1cIkNsaWNrIHRvIHNob3cgcmVzdWx0LlwifSkoV0dvKTsoZnVuY3Rpb24oYixwKXtiLlNHRj17fTt2YXIgZz1mdW5jdGlvbihhLGQsYixlLGMsayl7ZD1rPT1kP1wiYmxhY2tcIjpcIndoaXRlXCI7Yi5pbmZvW2RdPWIuaW5mb1tkXXx8e307Yi5pbmZvW2RdW2FdPWNbMF19LGY9Yi5TR0YucHJvcGVydGllcz17fTtmLkI9Zi5XPWZ1bmN0aW9uKGEsZCxrLGUpe2QubW92ZT0ha1swXXx8MTk+PWEuc2l6ZSYmXCJ0dFwiPT1rWzBdP3twYXNzOiEwLGM6XCJCXCI9PWU/Yi5COmIuV306e3g6a1swXS5jaGFyQ29kZUF0KDApLTk3LHk6a1swXS5jaGFyQ29kZUF0KDEpLTk3LGM6XCJCXCI9PWU/Yi5COmIuV319O2YuQUI9Zi5BVz1mdW5jdGlvbihhLGQsayxlKXtmb3IodmFyIGMgaW4gaylkLmFkZFNldHVwKHt4OmtbY10uY2hhckNvZGVBdCgwKS05Nyx5OmtbY10uY2hhckNvZGVBdCgxKS05NyxjOlwiQUJcIj09ZT9iLkI6Yi5XfSl9O2YuQUU9ZnVuY3Rpb24oYSxkLGIpe2Zvcih2YXIgZSBpbiBiKWQuYWRkU2V0dXAoe3g6YltlXS5jaGFyQ29kZUF0KDApLTk3LHk6YltlXS5jaGFyQ29kZUF0KDEpLVxuOTd9KX07Zi5QTD1mdW5jdGlvbihhLGQsayl7ZC50dXJuPVwiYlwiPT1rWzBdfHxcIkJcIj09a1swXT9iLkI6Yi5XfTtmLkM9ZnVuY3Rpb24oYSxkLGIpe2QuY29tbWVudD1iLmpvaW4oKX07Zi5MQj1mdW5jdGlvbihhLGQsYil7Zm9yKHZhciBlIGluIGIpZC5hZGRNYXJrdXAoe3g6YltlXS5jaGFyQ29kZUF0KDApLTk3LHk6YltlXS5jaGFyQ29kZUF0KDEpLTk3LHR5cGU6XCJMQlwiLHRleHQ6YltlXS5zdWJzdHIoMyl9KX07Zi5DUj1mLlNRPWYuVFI9Zi5TTD1mLk1BPWZ1bmN0aW9uKGEsZCxiLGUpe2Zvcih2YXIgYyBpbiBiKWQuYWRkTWFya3VwKHt4OmJbY10uY2hhckNvZGVBdCgwKS05Nyx5OmJbY10uY2hhckNvZGVBdCgxKS05Nyx0eXBlOmV9KX07Zi5TWj1mdW5jdGlvbihhLGQsYil7YS5zaXplPXBhcnNlSW50KGJbMF0pfTtmLkJSPWYuV1I9Zy5iaW5kKHRoaXMsXCJyYW5rXCIsXCJCUlwiKTtmLlBCPWYuUFc9Zy5iaW5kKHRoaXMsXCJuYW1lXCIsXCJQQlwiKTtmLkJUPWYuV1Q9Zy5iaW5kKHRoaXMsXCJ0ZWFtXCIsXG5cIkJUXCIpO2YuVE09ZnVuY3Rpb24oYSxkLGIsZSl7YS5pbmZvW2VdPWJbMF07ZC5CTD1iWzBdO2QuV0w9YlswXX07dmFyIGw9L1xcKHxcXCl8KDsoXFxzKltBLVpdKyhcXHMqKChcXFtcXF0pfChcXFsoLnxcXHMpKj8oW15cXFxcXVxcXSkpKSkrKSopL2csZD0vW0EtWl0rKFxccyooKFxcW1xcXSl8KFxcWygufFxccykqPyhbXlxcXFxdXFxdKSkpKSsvZyxrPS9bQS1aXSsvLGE9LyhcXFtcXF0pfChcXFsoLnxcXHMpKj8oW15cXFxcXVxcXSkpL2c7Yi5TR0YucGFyc2U9ZnVuY3Rpb24oaCl7dmFyIGY9W10sZyxlLGMscT1uZXcgYi5LaWZ1LHI9bnVsbDtoPWgubWF0Y2gobCk7Zm9yKHZhciBwIGluIGgpaWYoXCIoXCI9PWhbcF0pZi5wdXNoKHIpO2Vsc2UgaWYoXCIpXCI9PWhbcF0pcj1mLnBvcCgpO2Vsc2V7ciYmcS5ub2RlQ291bnQrKztyPXI/ci5hcHBlbmRDaGlsZChuZXcgYi5LTm9kZSk6cS5yb290O2c9aFtwXS5tYXRjaChkKXx8W107cS5wcm9wZXJ0eUNvdW50Kz1nLmxlbmd0aDtmb3IodmFyIHcgaW4gZyl7Yz1rLmV4ZWMoZ1t3XSlbMF07XG5lPWdbd10ubWF0Y2goYSk7Zm9yKHZhciB2IGluIGUpZVt2XT1lW3ZdLnN1YnN0cmluZygxLGVbdl0ubGVuZ3RoLTEpLnJlcGxhY2UoL1xcXFwoPyFcXFxcKS9nLFwiXCIpO2lmKGIuU0dGLnByb3BlcnRpZXNbY10pYi5TR0YucHJvcGVydGllc1tjXShxLHIsZSxjKTtlbHNlIDE+PWUubGVuZ3RoJiYoZT1lWzBdKSxyLnBhcmVudD9yW2NdPWU6cS5pbmZvW2NdPWV9fXJldHVybiBxfX0pKFdHbyk7KGZ1bmN0aW9uKGIpe3ZhciBwPWZ1bmN0aW9uKGMsYSl7dGhpcy5uYW1lPVwiRmlsZUVycm9yXCI7dGhpcy5tZXNzYWdlPTE9PWE/XCJGaWxlICdcIitjK1wiJyBpcyBlbXB0eS5cIjoyPT1hP1wiTmV0d29yayBlcnJvci4gSXQgaXMgbm90IHBvc3NpYmxlIHRvIHJlYWQgJ1wiK2MrXCInLlwiOlwiRmlsZSAnXCIrYytcIicgaGFzbid0IGJlZW4gZm91bmQgb24gc2VydmVyLlwifTtwLnByb3RvdHlwZT1FcnJvcigpO3AucHJvdG90eXBlLmNvbnN0cnVjdG9yPXA7Yi5GaWxlRXJyb3I9cDt2YXIgZz1iLmxvYWRGcm9tVXJsPWZ1bmN0aW9uKGMsYSl7dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O2Uub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoND09ZS5yZWFkeVN0YXRlKWlmKDIwMD09ZS5zdGF0dXMpe2lmKDA9PWUucmVzcG9uc2VUZXh0Lmxlbmd0aCl0aHJvdyBuZXcgcChjLDEpO2EoZS5yZXNwb25zZVRleHQpfWVsc2UgdGhyb3cgbmV3IHAoYyk7fTt0cnl7ZS5vcGVuKFwiR0VUXCIsYywhMCksZS5zZW5kKCl9Y2F0Y2goZCl7dGhyb3cgbmV3IHAoYyxcbjIpO319LGY9ZnVuY3Rpb24oYyl7Yy5jaGFuZ2UmJnRoaXMuYm9hcmQudXBkYXRlKGMuY2hhbmdlKTt0aGlzLnRlbXBfbWFya3MmJnRoaXMuYm9hcmQucmVtb3ZlT2JqZWN0KHRoaXMudGVtcF9tYXJrcyk7dmFyIGE9W107dGhpcy5ub3RpZmljYXRpb24oKTtjLm5vZGUubW92ZSYmdGhpcy5jb25maWcubWFya0xhc3RNb3ZlJiYoYy5ub2RlLm1vdmUucGFzcz90aGlzLm5vdGlmaWNhdGlvbihiLnQoKGMubm9kZS5tb3ZlLmM9PWIuQj9cImJcIjpcIndcIikrXCJwYXNzXCIpKTphLnB1c2goe3R5cGU6XCJDUlwiLHg6Yy5ub2RlLm1vdmUueCx5OmMubm9kZS5tb3ZlLnl9KSk7aWYoMTxjLm5vZGUuY2hpbGRyZW4ubGVuZ3RoJiZ0aGlzLmNvbmZpZy5kaXNwbGF5VmFyaWF0aW9ucylmb3IodmFyIGU9MDtlPGMubm9kZS5jaGlsZHJlbi5sZW5ndGg7ZSsrKWMubm9kZS5jaGlsZHJlbltlXS5tb3ZlJiYhYy5ub2RlLmNoaWxkcmVuW2VdLm1vdmUucGFzcyYmYS5wdXNoKHt0eXBlOlwiTEJcIix0ZXh0OlN0cmluZy5mcm9tQ2hhckNvZGUoNjUrXG5lKSx4OmMubm9kZS5jaGlsZHJlbltlXS5tb3ZlLngseTpjLm5vZGUuY2hpbGRyZW5bZV0ubW92ZS55LGM6dGhpcy5ib2FyZC50aGVtZS52YXJpYXRpb25Db2xvcnx8XCJyZ2JhKDAsMzIsMTI4LDAuOClcIn0pO2lmKGMubm9kZS5tYXJrdXApe2ZvcihlIGluIGMubm9kZS5tYXJrdXApZm9yKHZhciBkPTA7ZDxhLmxlbmd0aDtkKyspYy5ub2RlLm1hcmt1cFtlXS54PT1hW2RdLngmJmMubm9kZS5tYXJrdXBbZV0ueT09YVtkXS55JiYoYS5zcGxpY2UoZCwxKSxkLS0pO2E9YS5jb25jYXQoYy5ub2RlLm1hcmt1cCl9dGhpcy50ZW1wX21hcmtzPWE7dGhpcy5ib2FyZC5hZGRPYmplY3QoYSl9LGw9ZnVuY3Rpb24oYyl7dGhpcy5ib2FyZC5zZXRTaXplKGMua2lmdS5zaXplKTt0aGlzLmJvYXJkLnJlbW92ZUFsbE9iamVjdHMoKTt0aGlzLmNvbmZpZy5lbmFibGVXaGVlbCYmdGhpcy5zZXRXaGVlbCghMCl9LGQ9ZnVuY3Rpb24oYyxhKXtyZXR1cm4gYz09YS5lbGVtZW50fHxjPT1hLmVsZW1lbnQ/ITE6XG5jLl93Z29fc2Nyb2xsYWJsZXx8Yy5zY3JvbGxIZWlnaHQ+Yy5vZmZzZXRIZWlnaHQmJlwiYXV0b1wiPT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjKS5vdmVyZmxvdz8hMDpkKGMucGFyZW50Tm9kZSxhKX0saz1mdW5jdGlvbihjKXt2YXIgYT1jLndoZWVsRGVsdGF8fC0xKmMuZGV0YWlsO3JldHVybiBkKGMudGFyZ2V0LHRoaXMpPyEwOjA+YT8odGhpcy5uZXh0KCksdGhpcy5jb25maWcubG9ja1Njcm9sbCYmYy5wcmV2ZW50RGVmYXVsdCYmYy5wcmV2ZW50RGVmYXVsdCgpLCF0aGlzLmNvbmZpZy5sb2NrU2Nyb2xsKTowPGE/KHRoaXMucHJldmlvdXMoKSx0aGlzLmNvbmZpZy5sb2NrU2Nyb2xsJiZjLnByZXZlbnREZWZhdWx0JiZjLnByZXZlbnREZWZhdWx0KCksIXRoaXMuY29uZmlnLmxvY2tTY3JvbGwpOiEwfSxhPWZ1bmN0aW9uKGMpe2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXNcIikpcmV0dXJuITA7c3dpdGNoKGMua2V5Q29kZSl7Y2FzZSAzOTp0aGlzLm5leHQoKTtcbmJyZWFrO2Nhc2UgMzc6dGhpcy5wcmV2aW91cygpO2JyZWFrO2RlZmF1bHQ6cmV0dXJuITB9dGhpcy5jb25maWcubG9ja1Njcm9sbCYmYy5wcmV2ZW50RGVmYXVsdCYmYy5wcmV2ZW50RGVmYXVsdCgpO3JldHVybiF0aGlzLmNvbmZpZy5sb2NrU2Nyb2xsfSxoPWZ1bmN0aW9uKGMsYSl7aWYoIXRoaXMua2lmdVJlYWRlcnx8IXRoaXMua2lmdVJlYWRlci5ub2RlKXJldHVybiExO2Zvcih2YXIgZSBpbiB0aGlzLmtpZnVSZWFkZXIubm9kZS5jaGlsZHJlbilpZih0aGlzLmtpZnVSZWFkZXIubm9kZS5jaGlsZHJlbltlXS5tb3ZlJiZ0aGlzLmtpZnVSZWFkZXIubm9kZS5jaGlsZHJlbltlXS5tb3ZlLng9PWMmJnRoaXMua2lmdVJlYWRlci5ub2RlLmNoaWxkcmVuW2VdLm1vdmUueT09YSl7dGhpcy5uZXh0KGUpO2JyZWFrfX0sbj1mdW5jdGlvbihjKXt0aGlzLmNvbmZpZz1jO2Zvcih2YXIgYSBpbiBuLmRlZmF1bHQpdm9pZCAwPT09dGhpcy5jb25maWdbYV0mJnZvaWQgMCE9PW4uZGVmYXVsdFthXSYmXG4odGhpcy5jb25maWdbYV09bi5kZWZhdWx0W2FdKTt0aGlzLmVsZW1lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmJvYXJkPW5ldyBiLkJvYXJkKHRoaXMuZWxlbWVudCx0aGlzLmNvbmZpZy5ib2FyZCk7dGhpcy5pbml0KCk7dGhpcy5pbml0R2FtZSgpfTtuLnByb3RvdHlwZT17Y29uc3RydWN0b3I6bixpbml0OmZ1bmN0aW9uKCl7dGhpcy5raWZ1PW51bGw7dGhpcy5saXN0ZW5lcnM9e2tpZnVMb2FkZWQ6W2wuYmluZCh0aGlzKV0sdXBkYXRlOltmLmJpbmQodGhpcyldLGZyb3plbjpbXSx1bmZyb3plbjpbXX07dGhpcy5jb25maWcua2lmdUxvYWRlZCYmdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2lmdUxvYWRlZFwiLHRoaXMuY29uZmlnLmtpZnVMb2FkZWQpO3RoaXMuY29uZmlnLnVwZGF0ZSYmdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsdGhpcy5jb25maWcudXBkYXRlKTt0aGlzLmNvbmZpZy5mcm96ZW4mJnRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZyb3plblwiLFxudGhpcy5jb25maWcuZnJvemVuKTt0aGlzLmNvbmZpZy51bmZyb3plbiYmdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidW5mcm96ZW5cIix0aGlzLmNvbmZpZy51bmZyb3plbik7dGhpcy5ib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixoLmJpbmQodGhpcykpO3RoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmZvY3VzLmJpbmQodGhpcykpO3RoaXMuZm9jdXMoKX0saW5pdEdhbWU6ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5zZ2Y/dGhpcy5sb2FkU2dmKHRoaXMuY29uZmlnLnNnZix0aGlzLmNvbmZpZy5tb3ZlKTp0aGlzLmNvbmZpZy5qc29uP3RoaXMubG9hZEpTT04odGhpcy5jb25maWcuanNvbix0aGlzLmNvbmZpZy5tb3ZlKTp0aGlzLmNvbmZpZy5zZ2ZGaWxlJiZ0aGlzLmxvYWRTZ2ZGcm9tRmlsZSh0aGlzLmNvbmZpZy5zZ2ZGaWxlLHRoaXMuY29uZmlnLm1vdmUpfSx1cGRhdGU6ZnVuY3Rpb24oYyl7dGhpcy5raWZ1UmVhZGVyJiZ0aGlzLmtpZnVSZWFkZXIuY2hhbmdlJiZcbihjPXt0eXBlOlwidXBkYXRlXCIsb3A6Yyx0YXJnZXQ6dGhpcyxub2RlOnRoaXMua2lmdVJlYWRlci5ub2RlLHBvc2l0aW9uOnRoaXMua2lmdVJlYWRlci5nZXRQb3NpdGlvbigpLHBhdGg6dGhpcy5raWZ1UmVhZGVyLnBhdGgsY2hhbmdlOnRoaXMua2lmdVJlYWRlci5jaGFuZ2V9LHRoaXMuZGlzcGF0Y2hFdmVudChjKSl9LGxvYWRLaWZ1OmZ1bmN0aW9uKGMsYSl7dGhpcy5raWZ1PWM7dGhpcy5raWZ1UmVhZGVyPW5ldyBiLktpZnVSZWFkZXIodGhpcy5raWZ1LHRoaXMuY29uZmlnLnJlbWVtYmVyUGF0aCx0aGlzLmNvbmZpZy5hbGxvd0lsbGVnYWxNb3Zlcyk7dGhpcy5kaXNwYXRjaEV2ZW50KHt0eXBlOlwia2lmdUxvYWRlZFwiLHRhcmdldDp0aGlzLGtpZnU6dGhpcy5raWZ1fSk7dGhpcy51cGRhdGUoXCJpbml0XCIpO2EmJnRoaXMuZ29UbyhhKX0sbG9hZFNnZjpmdW5jdGlvbihjLGEpe3RyeXt0aGlzLmxvYWRLaWZ1KGIuS2lmdS5mcm9tU2dmKGMpLGEpfWNhdGNoKGUpe3RoaXMuZXJyb3IoZSl9fSxcbmxvYWRKU09OOmZ1bmN0aW9uKGMsYSl7dHJ5e3RoaXMubG9hZEtpZnUoYi5LaWZ1LmZyb21KR08oYyksYSl9Y2F0Y2goZSl7dGhpcy5lcnJvcihlKX19LGxvYWRTZ2ZGcm9tRmlsZTpmdW5jdGlvbihhLGUpe3ZhciBkPXRoaXM7dHJ5e2coYSxmdW5jdGlvbihhKXtkLmxvYWRTZ2YoYSxlKX0pfWNhdGNoKGIpe3RoaXMuZXJyb3IoYil9fSxhZGRFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGEsZSl7dGhpcy5saXN0ZW5lcnNbYV09dGhpcy5saXN0ZW5lcnNbYV18fFtdO3RoaXMubGlzdGVuZXJzW2FdLnB1c2goZSl9LHJlbW92ZUV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oYSxlKXtpZih0aGlzLmxpc3RlbmVyc1thXSl7dmFyIGQ9dGhpcy5saXN0ZW5lcnNbYV0uaW5kZXhPZihlKTstMSE9ZCYmdGhpcy5saXN0ZW5lcnNbYV0uc3BsaWNlKGQsMSl9fSxkaXNwYXRjaEV2ZW50OmZ1bmN0aW9uKGEpe2lmKHRoaXMubGlzdGVuZXJzW2EudHlwZV0pZm9yKHZhciBlIGluIHRoaXMubGlzdGVuZXJzW2EudHlwZV0pdGhpcy5saXN0ZW5lcnNbYS50eXBlXVtlXShhKX0sXG5ub3RpZmljYXRpb246ZnVuY3Rpb24oYSl7Y29uc29sZSYmYSYmY29uc29sZS5sb2coYSl9LGhlbHA6ZnVuY3Rpb24oYSl7Y29uc29sZSYmY29uc29sZS5sb2coYSl9LGVycm9yOmZ1bmN0aW9uKGEpe2lmKCFiLkVSUk9SX1JFUE9SVCl0aHJvdyBhO2NvbnNvbGUmJmNvbnNvbGUubG9nKGEpfSxuZXh0OmZ1bmN0aW9uKGEpe2lmKCF0aGlzLmZyb3plbiYmdGhpcy5raWZ1KXRyeXt0aGlzLmtpZnVSZWFkZXIubmV4dChhKSx0aGlzLnVwZGF0ZSgpfWNhdGNoKGUpe3RoaXMuZXJyb3IoZSl9fSxwcmV2aW91czpmdW5jdGlvbigpe2lmKCF0aGlzLmZyb3plbiYmdGhpcy5raWZ1KXRyeXt0aGlzLmtpZnVSZWFkZXIucHJldmlvdXMoKSx0aGlzLnVwZGF0ZSgpfWNhdGNoKGEpe3RoaXMuZXJyb3IoYSl9fSxsYXN0OmZ1bmN0aW9uKCl7aWYoIXRoaXMuZnJvemVuJiZ0aGlzLmtpZnUpdHJ5e3RoaXMua2lmdVJlYWRlci5sYXN0KCksdGhpcy51cGRhdGUoKX1jYXRjaChhKXt0aGlzLmVycm9yKGEpfX0sXG5maXJzdDpmdW5jdGlvbigpe2lmKCF0aGlzLmZyb3plbiYmdGhpcy5raWZ1KXRyeXt0aGlzLmtpZnVSZWFkZXIuZmlyc3QoKSx0aGlzLnVwZGF0ZSgpfWNhdGNoKGEpe3RoaXMuZXJyb3IoYSl9fSxnb1RvOmZ1bmN0aW9uKGEpe2lmKCF0aGlzLmZyb3plbiYmdGhpcy5raWZ1KXt2YXIgZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLmNhbGwodGhpcykpO1wibnVtYmVyXCI9PXR5cGVvZiBhPyhlPWIuY2xvbmUodGhpcy5raWZ1UmVhZGVyLnBhdGgpLGUubT1hfHwwKTplPWE7dHJ5e3RoaXMua2lmdVJlYWRlci5nb1RvKGUpLHRoaXMudXBkYXRlKCl9Y2F0Y2goZCl7dGhpcy5lcnJvcihkKX19fSxnZXRHYW1lSW5mbzpmdW5jdGlvbigpe2lmKCF0aGlzLmtpZnUpcmV0dXJuIG51bGw7dmFyIGE9e30sZTtmb3IoZSBpbiB0aGlzLmtpZnUuaW5mbyktMSE9Yi5LaWZ1LmluZm9MaXN0LmluZGV4T2YoZSkmJihiLktpZnUuaW5mb0Zvcm1hdHRlcnNbZV0/YVtiLnQoZSldPWIuS2lmdS5pbmZvRm9ybWF0dGVyc1tlXSh0aGlzLmtpZnUuaW5mb1tlXSk6XG5hW2IudChlKV09Yi5maWx0ZXJIVE1MKHRoaXMua2lmdS5pbmZvW2VdKSk7cmV0dXJuIGF9LHNldEZyb3plbjpmdW5jdGlvbihhKXt0aGlzLmZyb3plbj1hO3RoaXMuZGlzcGF0Y2hFdmVudCh7dHlwZTp0aGlzLmZyb3plbj9cImZyb3plblwiOlwidW5mcm96ZW5cIix0YXJnZXQ6dGhpc30pfSxhcHBlbmRUbzpmdW5jdGlvbihhKXthLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCl9LGZvY3VzOmZ1bmN0aW9uKCl7dGhpcy5jb25maWcuZW5hYmxlS2V5cyYmdGhpcy5zZXRLZXlzKCEwKX0sc2V0S2V5czpmdW5jdGlvbihjKXtkb2N1bWVudC5vbmtleWRvd249Yz9hLmJpbmQodGhpcyk6bnVsbH0sc2V0V2hlZWw6ZnVuY3Rpb24oYSl7IXRoaXMuX3doZWVsX2xpc3RlbmVyJiZhPyh0aGlzLl93aGVlbF9saXN0ZW5lcj1rLmJpbmQodGhpcyksYT12b2lkIDAhPT1kb2N1bWVudC5vbm1vdXNld2hlZWw/XCJtb3VzZXdoZWVsXCI6XCJET01Nb3VzZVNjcm9sbFwiLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGEsXG50aGlzLl93aGVlbF9saXN0ZW5lcikpOnRoaXMuX3doZWVsX2xpc3RlbmVyJiYhYSYmKGE9dm9pZCAwIT09ZG9jdW1lbnQub25tb3VzZXdoZWVsP1wibW91c2V3aGVlbFwiOlwiRE9NTW91c2VTY3JvbGxcIix0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLHRoaXMuX3doZWVsX2xpc3RlbmVyKSxkZWxldGUgdGhpcy5fd2hlZWxfbGlzdGVuZXIpfSxzZXRDb29yZGluYXRlczpmdW5jdGlvbihhKXshdGhpcy5jb29yZGluYXRlcyYmYT8odGhpcy5ib2FyZC5zZXRTZWN0aW9uKC0uNSwtLjUsLS41LC0uNSksdGhpcy5ib2FyZC5hZGRDdXN0b21PYmplY3QoYi5Cb2FyZC5jb29yZGluYXRlcykpOnRoaXMuY29vcmRpbmF0ZXMmJiFhJiYodGhpcy5ib2FyZC5zZXRTZWN0aW9uKDAsMCwwLDApLHRoaXMuYm9hcmQucmVtb3ZlQ3VzdG9tT2JqZWN0KGIuQm9hcmQuY29vcmRpbmF0ZXMpKTt0aGlzLmNvb3JkaW5hdGVzPWF9fTtuLmRlZmF1bHQ9e3NnZjp2b2lkIDAsanNvbjp2b2lkIDAsc2dmRmlsZTp2b2lkIDAsXG5tb3ZlOnZvaWQgMCxib2FyZDp7fSxlbmFibGVXaGVlbDohMCxsb2NrU2Nyb2xsOiEwLGVuYWJsZUtleXM6ITAscmVtZW1iZXJQYXRoOiEwLGtpZnVMb2FkZWQ6dm9pZCAwLHVwZGF0ZTp2b2lkIDAsZnJvemVuOnZvaWQgMCx1bmZyb3plbjp2b2lkIDAsYWxsb3dJbGxlZ2FsTW92ZXM6ITEsbWFya0xhc3RNb3ZlOiEwLGRpc3BsYXlWYXJpYXRpb25zOiEwfTtiLlBsYXllcj1uO3ZhciBtPXtcImFib3V0LXRleHRcIjpcIjxoMT5XR28uanMgUGxheWVyIDIuMDwvaDE+PHA+V0dvLmpzIFBsYXllciBpcyBleHRlbnNpb24gb2YgV0dvLmpzLCBIVE1MNSBsaWJyYXJ5IGZvciBwdXJwb3NlcyBvZiBnYW1lIG9mIGdvLiBJdCBhbGxvd3MgdG8gcmVwbGF5IGdvIGdhbWUgcmVjb3JkcyBhbmQgaXQgaGFzIG1hbnkgZmVhdHVyZXMgbGlrZSBzY29yZSBjb3VudGluZy4gSXQgaXMgYWxzbyBkZXNpZ25lZCB0byBiZSBlYXNpbHkgZXh0ZW5kYWJsZS48L3A+PHA+V0dvLmpzIGlzIG9wZW4gc291cmNlIGxpY2Vuc2VkIHVuZGVyIDxhIGhyZWY9J2h0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTUlUX0xpY2Vuc2UnIHRhcmdldD0nX2JsYW5rJz5NSVQgbGljZW5zZTwvYT4uIFlvdSBjYW4gdXNlIGFuZCBtb2RpZnkgYW55IGNvZGUgZnJvbSB0aGlzIHByb2plY3QuPC9wPjxwPllvdSBjYW4gZmluZCBtb3JlIGluZm9ybWF0aW9uIGF0IDxhIGhyZWY9J2h0dHA6Ly93Z28ud2FsdGhlcmkubmV0L3BsYXllcicgdGFyZ2V0PSdfYmxhbmsnPndnby53YWx0aGVyaS5uZXQvcGxheWVyPC9hPjwvcD48cD5Db3B5cmlnaHQgJmNvcHk7IDIwMTMgSmFuIFByb2tvcDwvcD5cIixcbmJsYWNrOlwiQmxhY2tcIix3aGl0ZTpcIldoaXRlXCIsRFQ6XCJEYXRlXCIsS006XCJLb21pXCIsSEE6XCJIYW5kaWNhcFwiLEFOOlwiQW5ub3RhdGlvbnNcIixDUDpcIkNvcHlyaWdodFwiLEdDOlwiR2FtZSBjb21tZW50c1wiLEdOOlwiR2FtZSBuYW1lXCIsT046XCJGdXNla2lcIixPVDpcIk92ZXJ0aW1lXCIsVE06XCJCYXNpYyB0aW1lXCIsUkU6XCJSZXN1bHRcIixSTzpcIlJvdW5kXCIsUlU6XCJSdWxlc1wiLFVTOlwiUmVjb3JkZXJcIixQQzpcIlBsYWNlXCIsRVY6XCJFdmVudFwiLFNPOlwiU291cmNlXCIsbm9uZTpcIm5vbmVcIixicGFzczpcIkJsYWNrIHBhc3NlZC5cIix3cGFzczpcIldoaXRlIHBhc3NlZC5cIn0sZTtmb3IoZSBpbiBtKWIuaTE4bi5lbltlXT1tW2VdfSkoV0dvKTsoZnVuY3Rpb24oYil7dmFyIHA9MCxnPWZ1bmN0aW9uKGQsYixhKXt2YXIgaD17fTtoLmVsZW1lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtoLmVsZW1lbnQuY2xhc3NOYW1lPVwid2dvLXBsYXllci1cIitkO2gud3JhcHBlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2gud3JhcHBlci5jbGFzc05hbWU9XCJ3Z28tcGxheWVyLVwiK2QrXCItd3JhcHBlclwiO2guZWxlbWVudC5hcHBlbmRDaGlsZChoLndyYXBwZXIpO2IuYXBwZW5kQ2hpbGQoaC5lbGVtZW50KTthfHwoaC5lbGVtZW50LnN0eWxlLmRpc3BsYXk9XCJub25lXCIpO3JldHVybiBofSxmPWZ1bmN0aW9uKGQpe3ZhciBiO2lmKGI9dGhpcy5jdXJyZW50TGF5b3V0LmxheW91dD90aGlzLmN1cnJlbnRMYXlvdXQubGF5b3V0W2RdOnRoaXMuY3VycmVudExheW91dFtkXSl7dGhpcy5yZWdpb25zW2RdLmVsZW1lbnQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7Yi5jb25zdHJ1Y3RvciE9QXJyYXkmJihiPVtiXSk7Zm9yKHZhciBhIGluIGIpdGhpcy5jb21wb25lbnRzW2JbYV1dfHxcbih0aGlzLmNvbXBvbmVudHNbYlthXV09bmV3IGwuY29tcG9uZW50W2JbYV1dKHRoaXMpKSx0aGlzLmNvbXBvbmVudHNbYlthXV0uYXBwZW5kVG8odGhpcy5yZWdpb25zW2RdLndyYXBwZXIpLHRoaXMuY29tcG9uZW50c1tiW2FdXS5fZGV0YWNoRnJvbVBsYXllcj0hMX1lbHNlIHRoaXMucmVnaW9uc1tkXS5lbGVtZW50LnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9LGw9Yi5leHRlbmRDbGFzcyhiLlBsYXllcixmdW5jdGlvbihkLGspe3RoaXMuY29uZmlnPWs7Zm9yKHZhciBhIGluIGwuZGVmYXVsdCl2b2lkIDA9PT10aGlzLmNvbmZpZ1thXSYmdm9pZCAwIT09bC5kZWZhdWx0W2FdJiYodGhpcy5jb25maWdbYV09bC5kZWZhdWx0W2FdKTtmb3IoYSBpbiBiLlBsYXllci5kZWZhdWx0KXZvaWQgMD09PXRoaXMuY29uZmlnW2FdJiZ2b2lkIDAhPT1iLlBsYXllci5kZWZhdWx0W2FdJiYodGhpcy5jb25maWdbYV09Yi5QbGF5ZXIuZGVmYXVsdFthXSk7dGhpcy5lbGVtZW50PWQ7dGhpcy5lbGVtZW50LmlubmVySFRNTD1cblwiXCI7dGhpcy5jbGFzc2VzPSh0aGlzLmVsZW1lbnQuY2xhc3NOYW1lP3RoaXMuZWxlbWVudC5jbGFzc05hbWUrXCIgXCI6XCJcIikrXCJ3Z28tcGxheWVyLW1haW5cIjt0aGlzLmVsZW1lbnQuY2xhc3NOYW1lPXRoaXMuY2xhc3Nlczt0aGlzLmVsZW1lbnQuaWR8fCh0aGlzLmVsZW1lbnQuaWQ9XCJ3Z29fXCIrcCsrKTt0aGlzLmRvbT17fTt0aGlzLmRvbS5jZW50ZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmRvbS5jZW50ZXIuY2xhc3NOYW1lPVwid2dvLXBsYXllci1jZW50ZXJcIjt0aGlzLmRvbS5ib2FyZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMuZG9tLmJvYXJkLmNsYXNzTmFtZT1cIndnby1wbGF5ZXItYm9hcmRcIjt0aGlzLnJlZ2lvbnM9e307dGhpcy5yZWdpb25zLmxlZnQ9ZyhcImxlZnRcIix0aGlzLmVsZW1lbnQpO3RoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRvbS5jZW50ZXIpO3RoaXMucmVnaW9ucy5yaWdodD1nKFwicmlnaHRcIix0aGlzLmVsZW1lbnQpO1xudGhpcy5yZWdpb25zLnRvcD1nKFwidG9wXCIsdGhpcy5kb20uY2VudGVyKTt0aGlzLmRvbS5jZW50ZXIuYXBwZW5kQ2hpbGQodGhpcy5kb20uYm9hcmQpO3RoaXMucmVnaW9ucy5ib3R0b209ZyhcImJvdHRvbVwiLHRoaXMuZG9tLmNlbnRlcik7dGhpcy5ib2FyZD1uZXcgYi5Cb2FyZCh0aGlzLmRvbS5ib2FyZCx0aGlzLmNvbmZpZy5ib2FyZCk7dGhpcy5pbml0KCk7dGhpcy5jb21wb25lbnRzPXt9O3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZnVuY3Rpb24oKXt0aGlzLm5vcmVzaXplfHx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKX0uYmluZCh0aGlzKSk7dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7dGhpcy5pbml0R2FtZSgpfSk7bC5wcm90b3R5cGUuYXBwZW5kVG89ZnVuY3Rpb24oZCl7ZC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO3RoaXMudXBkYXRlRGltZW5zaW9ucygpfTtsLnByb3RvdHlwZS51cGRhdGVEaW1lbnNpb25zPWZ1bmN0aW9uKCl7Zm9yKHZhciBkPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCksXG5iPVtdO3RoaXMuZWxlbWVudC5maXJzdENoaWxkOyliLnB1c2godGhpcy5lbGVtZW50LmZpcnN0Q2hpbGQpLHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQuZmlyc3RDaGlsZCk7Zm9yKHZhciBhPXBhcnNlSW50KGQud2lkdGgpLGg9cGFyc2VJbnQoZC5oZWlnaHQpLG49cGFyc2VJbnQoZC5tYXhIZWlnaHQpfHwwLGQ9MDtkPGIubGVuZ3RoO2QrKyl0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYltkXSk7aWYoYSE9dGhpcy53aWR0aHx8aCE9dGhpcy5oZWlnaHR8fG4hPXRoaXMubWF4SGVpZ2h0KXt0aGlzLndpZHRoPWE7dGhpcy5oZWlnaHQ9aDt0aGlzLm1heEhlaWdodD1uO2E6aWYoYj10aGlzLmNvbmZpZy5sYXlvdXQsYi5jb25zdHJ1Y3Rvcj09QXJyYXkpe2E9dGhpcy5oZWlnaHR8fHRoaXMubWF4SGVpZ2h0O2ZvcihoPTA7aDxiLmxlbmd0aDtoKyspaWYoIWJbaF0uY29uZGl0aW9uc3x8IShiW2hdLmNvbmRpdGlvbnMubWluV2lkdGgmJiEoYltoXS5jb25kaXRpb25zLm1pbldpZHRoPD1cbnRoaXMud2lkdGgpfHxiW2hdLmNvbmRpdGlvbnMubWluSGVpZ2h0JiZhJiYhKGJbaF0uY29uZGl0aW9ucy5taW5IZWlnaHQ8PWEpfHxiW2hdLmNvbmRpdGlvbnMubWF4V2lkdGgmJiEoYltoXS5jb25kaXRpb25zLm1heFdpZHRoPj10aGlzLndpZHRoKXx8YltoXS5jb25kaXRpb25zLm1heEhlaWdodCYmYSYmIShiW2hdLmNvbmRpdGlvbnMubWF4SGVpZ2h0Pj1hKXx8YltoXS5jb25kaXRpb25zLmN1c3RvbSYmIWJbaF0uY29uZGl0aW9ucy5jdXN0b20uY2FsbCh0aGlzKSkpe2I9YltoXTticmVhayBhfWI9dm9pZCAwfWlmKCh0aGlzLmN1cnJlbnRMYXlvdXQ9YikmJnRoaXMubGFzdExheW91dCE9dGhpcy5jdXJyZW50TGF5b3V0KXt0aGlzLmVsZW1lbnQuY2xhc3NOYW1lPXRoaXMuY3VycmVudExheW91dC5jbGFzc05hbWU/dGhpcy5jbGFzc2VzK1wiIFwiK3RoaXMuY3VycmVudExheW91dC5jbGFzc05hbWU6dGhpcy5jbGFzc2VzO2Zvcih2YXIgZyBpbiB0aGlzLmNvbXBvbmVudHMpdGhpcy5jb21wb25lbnRzW2ddLl9kZXRhY2hGcm9tUGxheWVyPVxuITA7Zi5jYWxsKHRoaXMsXCJsZWZ0XCIpO2YuY2FsbCh0aGlzLFwicmlnaHRcIik7Zi5jYWxsKHRoaXMsXCJ0b3BcIik7Zi5jYWxsKHRoaXMsXCJib3R0b21cIik7Zm9yKGcgaW4gdGhpcy5jb21wb25lbnRzKXRoaXMuY29tcG9uZW50c1tnXS5fZGV0YWNoRnJvbVBsYXllciYmdGhpcy5jb21wb25lbnRzW2ddLmVsZW1lbnQucGFyZW50Tm9kZSYmdGhpcy5jb21wb25lbnRzW2ddLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbXBvbmVudHNbZ10uZWxlbWVudCk7dGhpcy5sYXN0TGF5b3V0PXRoaXMuY3VycmVudExheW91dH1iPXRoaXMuZG9tLmJvYXJkLmNsaWVudFdpZHRoOyhnPXRoaXMuaGVpZ2h0fHx0aGlzLm1heEhlaWdodCkmJihnLT10aGlzLnJlZ2lvbnMudG9wLmVsZW1lbnQub2Zmc2V0SGVpZ2h0K3RoaXMucmVnaW9ucy5ib3R0b20uZWxlbWVudC5vZmZzZXRIZWlnaHQpO2cmJmc8Yj9nIT10aGlzLmJvYXJkLmhlaWdodCYmdGhpcy5ib2FyZC5zZXRIZWlnaHQoZyk6YiE9XG50aGlzLmJvYXJkLndpZHRoJiZ0aGlzLmJvYXJkLnNldFdpZHRoKGIpO2I9Zy1iOzA8Yj8odGhpcy5kb20uYm9hcmQuc3R5bGUuaGVpZ2h0PWcrXCJweFwiLHRoaXMuZG9tLmJvYXJkLnN0eWxlLnBhZGRpbmdUb3A9Yi8yK1wicHhcIik6KHRoaXMuZG9tLmJvYXJkLnN0eWxlLmhlaWdodD1cImF1dG9cIix0aGlzLmRvbS5ib2FyZC5zdHlsZS5wYWRkaW5nVG9wPVwiMFwiKTt0aGlzLnJlZ2lvbnMubGVmdC5lbGVtZW50LnN0eWxlLmhlaWdodD10aGlzLmRvbS5jZW50ZXIub2Zmc2V0SGVpZ2h0K1wicHhcIjt0aGlzLnJlZ2lvbnMucmlnaHQuZWxlbWVudC5zdHlsZS5oZWlnaHQ9dGhpcy5kb20uY2VudGVyLm9mZnNldEhlaWdodCtcInB4XCI7Zm9yKGQgaW4gdGhpcy5jb21wb25lbnRzKXRoaXMuY29tcG9uZW50c1tkXS51cGRhdGVEaW1lbnNpb25zJiZ0aGlzLmNvbXBvbmVudHNbZF0udXBkYXRlRGltZW5zaW9ucygpfX07bC5wcm90b3R5cGUuc2hvd01lc3NhZ2U9ZnVuY3Rpb24oZCxmLGEpe3RoaXMuaW5mb19vdmVybGF5PVxuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmluZm9fb3ZlcmxheS5zdHlsZS53aWR0aD10aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGgrXCJweFwiO3RoaXMuaW5mb19vdmVybGF5LnN0eWxlLmhlaWdodD10aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0K1wicHhcIjt0aGlzLmluZm9fb3ZlcmxheS5jbGFzc05hbWU9XCJ3Z28taW5mby1vdmVybGF5XCI7dGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW5mb19vdmVybGF5KTt2YXIgaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2guY2xhc3NOYW1lPVwid2dvLWluZm8tbWVzc2FnZVwiO2guaW5uZXJIVE1MPWQ7ZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2QuY2xhc3NOYW1lPVwid2dvLWluZm8tY2xvc2VcIjthfHwoZC5pbm5lckhUTUw9Yi50KFwiQlA6Y2xvc2Vtc2dcIikpO2guYXBwZW5kQ2hpbGQoZCk7dGhpcy5pbmZvX292ZXJsYXkuYXBwZW5kQ2hpbGQoaCk7Zj90aGlzLmluZm9fb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbmZ1bmN0aW9uKGEpe2YoYSl9KTphfHx0aGlzLmluZm9fb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihhKXt0aGlzLmhpZGVNZXNzYWdlKCl9LmJpbmQodGhpcykpO3RoaXMuc2V0RnJvemVuKCEwKX07bC5wcm90b3R5cGUuaGlkZU1lc3NhZ2U9ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5pbmZvX292ZXJsYXkpO3RoaXMuc2V0RnJvemVuKCExKX07bC5wcm90b3R5cGUuZXJyb3I9ZnVuY3Rpb24oZCl7aWYoIWIuRVJST1JfUkVQT1JUKXRocm93IGQ7c3dpdGNoKGQubmFtZSl7Y2FzZSBcIkludmFsaWRNb3ZlRXJyb3JcIjp0aGlzLnNob3dNZXNzYWdlKFwiPGgxPlwiK2QubmFtZStcIjwvaDE+PHA+XCIrZC5tZXNzYWdlKyc8L3A+PHA+SWYgdGhpcyBtZXNzYWdlIGlzblxcJ3QgY29ycmVjdCwgcGxlYXNlIHJlcG9ydCBpdCBieSBjbGlja2luZyA8YSBocmVmPVwiI1wiPmhlcmU8L2E+LCBvdGhlcndpc2UgY29udGFjdCBtYWludGFpbmVyIG9mIHRoaXMgc2l0ZS48L3A+Jyk7XG5icmVhaztjYXNlIFwiRmlsZUVycm9yXCI6dGhpcy5zaG93TWVzc2FnZShcIjxoMT5cIitkLm5hbWUrXCI8L2gxPjxwPlwiK2QubWVzc2FnZStcIjwvcD48cD5QbGVhc2UgY29udGFjdCBtYWludGFpbmVyIG9mIHRoaXMgc2l0ZS4gTm90ZTogaXQgaXMgcG9zc2libGUgdG8gcmVhZCBmaWxlcyBvbmx5IGZyb20gdGhpcyBob3N0LjwvcD5cIik7YnJlYWs7ZGVmYXVsdDp0aGlzLnNob3dNZXNzYWdlKFwiPGgxPlwiK2QubmFtZStcIjwvaDE+PHA+XCIrZC5tZXNzYWdlK1wiPC9wPjxwcmU+XCIrZC5zdGFja3RyYWNlKyc8L3ByZT48cD5QbGVhc2UgY29udGFjdCBtYWludGFpbmVyIG9mIHRoaXMgc2l0ZS4gWW91IGNhbiBhbHNvIHJlcG9ydCBpdCA8YSBocmVmPVwiI1wiPmhlcmU8L2E+LjwvcD4nKX19O2wuY29tcG9uZW50PXt9O2wubGF5b3V0cz17b25lX2NvbHVtbjp7dG9wOltdLGJvdHRvbTpbXX0sbm9fY29tbWVudDp7dG9wOltdLGJvdHRvbTpbXX0scmlnaHRfdG9wOnt0b3A6W10scmlnaHQ6W119LHJpZ2h0OntyaWdodDpbXX0sXG5taW5pbWFsOntib3R0b206W119fTtsLmR5bmFtaWNMYXlvdXQ9W3tjb25kaXRpb25zOnttaW5XaWR0aDo2NTB9LGxheW91dDpsLmxheW91dHMucmlnaHRfdG9wLGNsYXNzTmFtZTpcIndnby10d29jb2xzIHdnby1sYXJnZVwifSx7Y29uZGl0aW9uczp7bWluV2lkdGg6NTUwLG1pbkhlaWdodDo2MDB9LGxheW91dDpsLmxheW91dHMub25lX2NvbHVtbixjbGFzc05hbWU6XCJ3Z28tbWVkaXVtXCJ9LHtjb25kaXRpb25zOnttaW5XaWR0aDozNTB9LGxheW91dDpsLmxheW91dHMubm9fY29tbWVudCxjbGFzc05hbWU6XCJ3Z28tc21hbGxcIn0se2xheW91dDpsLmxheW91dHMubm9fY29tbWVudCxjbGFzc05hbWU6XCJ3Z28teHNtYWxsXCJ9XTtsLmRlZmF1bHQ9e2xheW91dDpsLmR5bmFtaWNMYXlvdXR9O2IuaTE4bi5lbltcIkJQOmNsb3NlbXNnXCJdPVwiY2xpY2sgYW55d2hlcmUgdG8gY2xvc2UgdGhpcyB3aW5kb3dcIjtsLmF0dHJpYnV0ZXM9e1wiZGF0YS13Z29cIjpmdW5jdGlvbihiKXtiJiYoXCIoXCI9PWJbMF0/XG50aGlzLnNnZj1iOnRoaXMuc2dmRmlsZT1iKX0sXCJkYXRhLXdnby1ib2FyZFwiOmZ1bmN0aW9uKGIpe3RoaXMuYm9hcmQ9ZXZhbChcIih7XCIrYitcIn0pXCIpfSxcImRhdGEtd2dvLW9ua2lmdWxvYWRcIjpmdW5jdGlvbihiKXt0aGlzLmtpZnVMb2FkZWQ9bmV3IEZ1bmN0aW9uKGIpfSxcImRhdGEtd2dvLW9udXBkYXRlXCI6ZnVuY3Rpb24oYil7dGhpcy51cGRhdGU9bmV3IEZ1bmN0aW9uKGIpfSxcImRhdGEtd2dvLW9uZnJvemVuXCI6ZnVuY3Rpb24oYil7dGhpcy5mcm96ZW49bmV3IEZ1bmN0aW9uKGIpfSxcImRhdGEtd2dvLW9udW5mcm96ZW5cIjpmdW5jdGlvbihiKXt0aGlzLnVuZnJvemVuPW5ldyBGdW5jdGlvbihiKX0sXCJkYXRhLXdnby1sYXlvdXRcIjpmdW5jdGlvbihiKXt0aGlzLmxheW91dD1ldmFsKFwiKHtcIitiK1wifSlcIil9LFwiZGF0YS13Z28tZW5hYmxld2hlZWxcIjpmdW5jdGlvbihiKXtcImZhbHNlXCI9PWIudG9Mb3dlckNhc2UoKSYmKHRoaXMuZW5hYmxlV2hlZWw9ITEpfSxcImRhdGEtd2dvLWxvY2tzY3JvbGxcIjpmdW5jdGlvbihiKXtcImZhbHNlXCI9PVxuYi50b0xvd2VyQ2FzZSgpJiYodGhpcy5sb2NrU2Nyb2xsPSExKX0sXCJkYXRhLXdnby1lbmFibGVrZXlzXCI6ZnVuY3Rpb24oYil7XCJmYWxzZVwiPT1iLnRvTG93ZXJDYXNlKCkmJih0aGlzLmVuYWJsZUtleXM9ITEpfSxcImRhdGEtd2dvLXJlbWVtYmVycGF0aFwiOmZ1bmN0aW9uKGIpe1wiZmFsc2VcIj09Yi50b0xvd2VyQ2FzZSgpJiYodGhpcy5yZW1lbWJlclBhdGg9ITEpfSxcImRhdGEtd2dvLWFsbG93aWxsZWdhbFwiOmZ1bmN0aW9uKGIpe1wiZmFsc2VcIiE9Yi50b0xvd2VyQ2FzZSgpJiYodGhpcy5hbGxvd0lsbGVnYWxNb3Zlcz0hMCl9LFwiZGF0YS13Z28tbW92ZVwiOmZ1bmN0aW9uKGIpe3ZhciBmPXBhcnNlSW50KGIpO3RoaXMubW92ZT1mP2Y6ZXZhbChcIih7XCIrYitcIn0pXCIpfSxcImRhdGEtd2dvLW1hcmtsYXN0bW92ZVwiOmZ1bmN0aW9uKGIpe1wiZmFsc2VcIj09Yi50b0xvd2VyQ2FzZSgpJiYodGhpcy5tYXJrTGFzdE1vdmU9ITEpfSxcImRhdGEtd2dvLWRpYWdyYW1cIjpmdW5jdGlvbihiKXtiJiYoXCIoXCI9PVxuYlswXT90aGlzLnNnZj1iOnRoaXMuc2dmRmlsZT1iLHRoaXMuZW5hYmxlV2hlZWw9dGhpcy5lbmFibGVLZXlzPXRoaXMubWFya0xhc3RNb3ZlPSExLHRoaXMubGF5b3V0PXt0b3A6W10scmlnaHQ6W10sbGVmdDpbXSxib3R0b206W119KX19O2IuQmFzaWNQbGF5ZXI9bDt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe2Zvcih2YXIgYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtd2dvXSxbZGF0YS13Z28tZGlhZ3JhbV1cIiksZj0wO2Y8Yi5sZW5ndGg7ZisrKXtmb3IodmFyIGE9YltmXSxoPXZvaWQgMCxnPXZvaWQgMCxoPXZvaWQgMCxnPXt9LG09MDttPGEuYXR0cmlidXRlcy5sZW5ndGg7bSsrKWg9YS5hdHRyaWJ1dGVzW21dLGwuYXR0cmlidXRlc1toLm5hbWVdJiZsLmF0dHJpYnV0ZXNbaC5uYW1lXS5jYWxsKGcsaC52YWx1ZSxoLm5hbWUpO2g9bmV3IGwoYSxnKTthLl93Z29fcGxheWVyPWh9fSl9KShXR28pOyhmdW5jdGlvbihiLHApe3ZhciBnPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIil9O2cucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpnLGFwcGVuZFRvOmZ1bmN0aW9uKGIpe2IuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KX0sZ2V0V2lkdGg6ZnVuY3Rpb24oKXt2YXIgYj13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpO3JldHVybiBwYXJzZUludChiLndpZHRoKX0sZ2V0SGVpZ2h0OmZ1bmN0aW9uKCl7dmFyIGI9d2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KTtyZXR1cm4gcGFyc2VJbnQoYi5oZWlnaHQpfSx1cGRhdGVEaW1lbnNpb25zOmZ1bmN0aW9uKCl7fX07Yi5CYXNpY1BsYXllci5jb21wb25lbnQuQ29tcG9uZW50PWd9KShXR28pOyhmdW5jdGlvbigpe3ZhciBiPWZ1bmN0aW9uKGEpe3RoaXNbYV09e307dmFyIGI9dGhpc1thXTtiLmJveD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2IuYm94LmNsYXNzTmFtZT1cIndnby1ib3gtd3JhcHBlciB3Z28tcGxheWVyLXdyYXBwZXIgd2dvLVwiK2E7Yi5uYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yi5uYW1lLmNsYXNzTmFtZT1cIndnby1ib3gtdGl0bGVcIjtiLm5hbWUuaW5uZXJIVE1MPWE7Yi5ib3guYXBwZW5kQ2hpbGQoYi5uYW1lKTthPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YS5jbGFzc05hbWU9XCJ3Z28tcGxheWVyLWluZm9cIjtiLmJveC5hcHBlbmRDaGlsZChhKTtiLmluZm89e307Yi5pbmZvLnJhbms9cChcInJhbmtcIik7Yi5pbmZvLnJhbmsudmFsLmlubmVySFRNTD1cIi1cIjtiLmluZm8uY2Fwcz1wKFwiY2Fwc1wiKTtiLmluZm8uY2Fwcy52YWwuaW5uZXJIVE1MPVwiMFwiO2IuaW5mby50aW1lPXAoXCJ0aW1lXCIpO2IuaW5mby50aW1lLnZhbC5pbm5lckhUTUw9XG5cIi0tOi0tXCI7YS5hcHBlbmRDaGlsZChiLmluZm8ucmFuay53cmFwcGVyKTthLmFwcGVuZENoaWxkKGIuaW5mby5jYXBzLndyYXBwZXIpO2EuYXBwZW5kQ2hpbGQoYi5pbmZvLnRpbWUud3JhcHBlcil9LHA9ZnVuY3Rpb24oYSl7dmFyIGI9e307Yi53cmFwcGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yi53cmFwcGVyLmNsYXNzTmFtZT1cIndnby1wbGF5ZXItaW5mby1ib3gtd3JhcHBlclwiO2IuYm94PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yi5ib3guY2xhc3NOYW1lPVwid2dvLXBsYXllci1pbmZvLWJveFwiO2Iud3JhcHBlci5hcHBlbmRDaGlsZChiLmJveCk7Yi50aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2IudGl0bGUuY2xhc3NOYW1lPVwid2dvLXBsYXllci1pbmZvLXRpdGxlXCI7Yi50aXRsZS5pbm5lckhUTUw9V0dvLnQoYSk7Yi5ib3guYXBwZW5kQ2hpbGQoYi50aXRsZSk7Yi52YWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtiLnZhbC5jbGFzc05hbWU9XG5cIndnby1wbGF5ZXItaW5mby12YWx1ZVwiO2IuYm94LmFwcGVuZENoaWxkKGIudmFsKTtyZXR1cm4gYn0sZz1mdW5jdGlvbihhKXthPWEua2lmdS5pbmZvfHx7fTthLmJsYWNrPyh0aGlzLmJsYWNrLm5hbWUuaW5uZXJIVE1MPVdHby5maWx0ZXJIVE1MKGEuYmxhY2submFtZSl8fFdHby50KFwiYmxhY2tcIiksdGhpcy5ibGFjay5pbmZvLnJhbmsudmFsLmlubmVySFRNTD1XR28uZmlsdGVySFRNTChhLmJsYWNrLnJhbmspfHxcIi1cIik6KHRoaXMuYmxhY2submFtZS5pbm5lckhUTUw9V0dvLnQoXCJibGFja1wiKSx0aGlzLmJsYWNrLmluZm8ucmFuay52YWwuaW5uZXJIVE1MPVwiLVwiKTthLndoaXRlPyh0aGlzLndoaXRlLm5hbWUuaW5uZXJIVE1MPVdHby5maWx0ZXJIVE1MKGEud2hpdGUubmFtZSl8fFdHby50KFwid2hpdGVcIiksdGhpcy53aGl0ZS5pbmZvLnJhbmsudmFsLmlubmVySFRNTD1XR28uZmlsdGVySFRNTChhLndoaXRlLnJhbmspfHxcIi1cIik6KHRoaXMud2hpdGUubmFtZS5pbm5lckhUTUw9V0dvLnQoXCJ3aGl0ZVwiKSxcbnRoaXMud2hpdGUuaW5mby5yYW5rLnZhbC5pbm5lckhUTUw9XCItXCIpO3RoaXMuYmxhY2suaW5mby5jYXBzLnZhbC5pbm5lckhUTUw9XCIwXCI7dGhpcy53aGl0ZS5pbmZvLmNhcHMudmFsLmlubmVySFRNTD1cIjBcIjthLlRNPyh0aGlzLnNldFBsYXllclRpbWUoXCJibGFja1wiLGEuVE0pLHRoaXMuc2V0UGxheWVyVGltZShcIndoaXRlXCIsYS5UTSkpOih0aGlzLmJsYWNrLmluZm8udGltZS52YWwuaW5uZXJIVE1MPVwiLS06LS1cIix0aGlzLndoaXRlLmluZm8udGltZS52YWwuaW5uZXJIVE1MPVwiLS06LS1cIik7dGhpcy51cGRhdGVEaW1lbnNpb25zKCl9LGY9ZnVuY3Rpb24oYSl7dmFyIGIsZDthLnN0eWxlLmZvbnRTaXplPyhkPXBhcnNlSW50KGEuc3R5bGUuZm9udFNpemUpLGEuc3R5bGUuZm9udFNpemU9XCJcIixiPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGEpLGI9cGFyc2VJbnQoYi5mb250U2l6ZSksYS5zdHlsZS5mb250U2l6ZT1kK1wicHhcIik6KGI9d2luZG93LmdldENvbXB1dGVkU3R5bGUoYSksYj1cbmQ9cGFyc2VJbnQoYi5mb250U2l6ZSkpO2lmKCEoZD09YiYmYS5zY3JvbGxIZWlnaHQ8PWEub2Zmc2V0SGVpZ2h0KSlpZihhLnNjcm9sbEhlaWdodD5hLm9mZnNldEhlaWdodClmb3IoZC09MjthLnNjcm9sbEhlaWdodD5hLm9mZnNldEhlaWdodCYmMTxkOylhLnN0eWxlLmZvbnRTaXplPWQrXCJweFwiLGQtPTI7ZWxzZSBpZihkPGIpe2ZvcihkKz0yO2Euc2Nyb2xsSGVpZ2h0PD1hLm9mZnNldEhlaWdodCYmZDw9YjspYS5zdHlsZS5mb250U2l6ZT1kK1wicHhcIixkKz0yO2Euc2Nyb2xsSGVpZ2h0PmEub2Zmc2V0SGVpZ2h0JiYoYS5zdHlsZS5mb250U2l6ZT1kLTQrXCJweFwiKX19LGw9ZnVuY3Rpb24oYSl7YS5ub2RlLkJMJiZ0aGlzLnNldFBsYXllclRpbWUoXCJibGFja1wiLGEubm9kZS5CTCk7YS5ub2RlLldMJiZ0aGlzLnNldFBsYXllclRpbWUoXCJ3aGl0ZVwiLGEubm9kZS5XTCk7dm9pZCAwIT09YS5wb3NpdGlvbi5jYXBDb3VudC5ibGFjayYmKHRoaXMuYmxhY2suaW5mby5jYXBzLnZhbC5pbm5lckhUTUw9XG5hLnBvc2l0aW9uLmNhcENvdW50LmJsYWNrKTt2b2lkIDAhPT1hLnBvc2l0aW9uLmNhcENvdW50LndoaXRlJiYodGhpcy53aGl0ZS5pbmZvLmNhcHMudmFsLmlubmVySFRNTD1hLnBvc2l0aW9uLmNhcENvdW50LndoaXRlKX0sZD1XR28uZXh0ZW5kQ2xhc3MoV0dvLkJhc2ljUGxheWVyLmNvbXBvbmVudC5Db21wb25lbnQsZnVuY3Rpb24oYSl7dGhpcy5zdXBlcihhKTt0aGlzLmVsZW1lbnQuY2xhc3NOYW1lPVwid2dvLWluZm9ib3hcIjtiLmNhbGwodGhpcyxcIndoaXRlXCIpO2IuY2FsbCh0aGlzLFwiYmxhY2tcIik7dGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMud2hpdGUuYm94KTt0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5ibGFjay5ib3gpO2EuYWRkRXZlbnRMaXN0ZW5lcihcImtpZnVMb2FkZWRcIixnLmJpbmQodGhpcykpO2EuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLGwuYmluZCh0aGlzKSl9KTtkLnByb3RvdHlwZS5zZXRQbGF5ZXJUaW1lPWZ1bmN0aW9uKGEsYil7dmFyIGQ9XG5NYXRoLmZsb29yKGIvNjApLGY9TWF0aC5yb3VuZChiKSU2MDt0aGlzW2FdLmluZm8udGltZS52YWwuaW5uZXJIVE1MPWQrXCI6XCIrKDEwPmY/XCIwXCIrZjpmKX07ZC5wcm90b3R5cGUudXBkYXRlRGltZW5zaW9ucz1mdW5jdGlvbigpe2YodGhpcy5ibGFjay5uYW1lKTtmKHRoaXMud2hpdGUubmFtZSl9O3ZhciBrPVdHby5CYXNpY1BsYXllci5sYXlvdXRzO2sucmlnaHRfdG9wLnJpZ2h0LnB1c2goXCJJbmZvQm94XCIpO2sucmlnaHQucmlnaHQucHVzaChcIkluZm9Cb3hcIik7ay5vbmVfY29sdW1uLnRvcC5wdXNoKFwiSW5mb0JveFwiKTtrLm5vX2NvbW1lbnQudG9wLnB1c2goXCJJbmZvQm94XCIpO1dHby5pMThuLmVuLnJhbms9XCJSYW5rXCI7V0dvLmkxOG4uZW4uY2Fwcz1cIkNhcHNcIjtXR28uaTE4bi5lbi50aW1lPVwiVGltZVwiO1dHby5CYXNpY1BsYXllci5jb21wb25lbnQuSW5mb0JveD1kfSkoV0dvKTsoZnVuY3Rpb24oYixwKXt2YXIgZz1mdW5jdGlvbihhKXt2YXIgYixkO2I9YS5jaGFyQ29kZUF0KDApLTk3OzA+YiYmKGIrPTMyKTs3PGImJmItLTtkPWEuY2hhckNvZGVBdCgxKS00ODsyPGEubGVuZ3RoJiYoZD0xMCpkKyhhLmNoYXJDb2RlQXQoMiktNDgpKTtkPXRoaXMua2lmdVJlYWRlci5nYW1lLnNpemUtZDt0aGlzLl90bXBfbWFyaz17dHlwZTpcIk1BXCIseDpiLHk6ZH07dGhpcy5ib2FyZC5hZGRPYmplY3QodGhpcy5fdG1wX21hcmspfSxmPWZ1bmN0aW9uKCl7dGhpcy5ib2FyZC5yZW1vdmVPYmplY3QodGhpcy5fdG1wX21hcmspO2RlbGV0ZSB0aGlzLl90bXBfbWFya30sbD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgZCBpbiBhKWFbZF0uY2xhc3NOYW1lJiZcIndnby1tb3ZlLWxpbmtcIj09YVtkXS5jbGFzc05hbWU/KGFbZF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLGcuYmluZChiLGFbZF0uaW5uZXJIVE1MKSksYVtkXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIixmLmJpbmQoYikpKTpcbmFbZF0uY2hpbGROb2RlcyYmYVtkXS5jaGlsZE5vZGVzLmxlbmd0aCYmbChhW2RdLmNoaWxkTm9kZXMsYil9LGQ9ZnVuY3Rpb24oYSxkKXt2YXIgZj0nPGRpdiBjbGFzcz1cIndnby1pbmZvLWxpc3RcIj4nO2QmJihmKz0nPGRpdiBjbGFzcz1cIndnby1pbmZvLXRpdGxlXCI+JytiLnQoXCJnYW1laW5mb1wiKStcIjwvZGl2PlwiKTtmb3IodmFyIGcgaW4gYSlmKz0nPGRpdiBjbGFzcz1cIndnby1pbmZvLWl0ZW1cIj48c3BhbiBjbGFzcz1cIndnby1pbmZvLWxhYmVsXCI+JytnKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJ3Z28taW5mby12YWx1ZVwiPicrYVtnXStcIjwvc3Bhbj48L2Rpdj5cIjtyZXR1cm4gZitcIjwvZGl2PlwifSxrPWIuZXh0ZW5kQ2xhc3MoYi5CYXNpY1BsYXllci5jb21wb25lbnQuQ29tcG9uZW50LGZ1bmN0aW9uKGEpe3RoaXMuc3VwZXIoYSk7dGhpcy5wbGF5ZXI9YTt0aGlzLmVsZW1lbnQuY2xhc3NOYW1lPVwid2dvLWNvbW1lbnRib3hcIjt0aGlzLmJveD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGhpcy5ib3guY2xhc3NOYW1lPVwid2dvLWJveC13cmFwcGVyIHdnby1jb21tZW50cy13cmFwcGVyXCI7dGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYm94KTt0aGlzLmNvbW1lbnRzX3RpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dGhpcy5jb21tZW50c190aXRsZS5jbGFzc05hbWU9XCJ3Z28tYm94LXRpdGxlXCI7dGhpcy5jb21tZW50c190aXRsZS5pbm5lckhUTUw9Yi50KFwiY29tbWVudHNcIik7dGhpcy5ib3guYXBwZW5kQ2hpbGQodGhpcy5jb21tZW50c190aXRsZSk7dGhpcy5jb21tZW50cz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMuY29tbWVudHMuY2xhc3NOYW1lPVwid2dvLWNvbW1lbnRzLWNvbnRlbnRcIjt0aGlzLmJveC5hcHBlbmRDaGlsZCh0aGlzLmNvbW1lbnRzKTt0aGlzLmhlbHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmhlbHAuY2xhc3NOYW1lPVwid2dvLWhlbHBcIjt0aGlzLmhlbHAuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbnRoaXMuY29tbWVudHMuYXBwZW5kQ2hpbGQodGhpcy5oZWxwKTt0aGlzLm5vdGlmaWNhdGlvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMubm90aWZpY2F0aW9uLmNsYXNzTmFtZT1cIndnby1ub3RpZmljYXRpb25cIjt0aGlzLm5vdGlmaWNhdGlvbi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO3RoaXMuY29tbWVudHMuYXBwZW5kQ2hpbGQodGhpcy5ub3RpZmljYXRpb24pO3RoaXMuY29tbWVudF90ZXh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dGhpcy5jb21tZW50X3RleHQuY2xhc3NOYW1lPVwid2dvLWNvbW1lbnQtdGV4dFwiO3RoaXMuY29tbWVudHMuYXBwZW5kQ2hpbGQodGhpcy5jb21tZW50X3RleHQpO2EuYWRkRXZlbnRMaXN0ZW5lcihcImtpZnVMb2FkZWRcIixmdW5jdGlvbihoKXtoLmtpZnUuaGFzQ29tbWVudHMoKT8odGhpcy5jb21tZW50c190aXRsZS5pbm5lckhUTUw9Yi50KFwiY29tbWVudHNcIiksdGhpcy5lbGVtZW50LmNsYXNzTmFtZT1cIndnby1jb21tZW50Ym94XCIsXG50aGlzLl91cGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy5zZXRDb21tZW50cyhhKX0uYmluZCh0aGlzKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIix0aGlzLl91cGRhdGUpKToodGhpcy5jb21tZW50c190aXRsZS5pbm5lckhUTUw9Yi50KFwiZ2FtZWluZm9cIiksdGhpcy5lbGVtZW50LmNsYXNzTmFtZT1cIndnby1jb21tZW50Ym94IHdnby1nYW1laW5mb1wiLHRoaXMuX3VwZGF0ZSYmKGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLHRoaXMuX3VwZGF0ZSksZGVsZXRlIHRoaXMuX3VwZGF0ZSksdGhpcy5jb21tZW50X3RleHQuaW5uZXJIVE1MPWQoaC50YXJnZXQuZ2V0R2FtZUluZm8oKSkpfS5iaW5kKHRoaXMpKTthLm5vdGlmaWNhdGlvbj1mdW5jdGlvbihhKXthPyh0aGlzLm5vdGlmaWNhdGlvbi5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIix0aGlzLm5vdGlmaWNhdGlvbi5pbm5lckhUTUw9YSx0aGlzLmlzX25vdGlmaWNhdGlvbj0hMCk6KHRoaXMubm90aWZpY2F0aW9uLnN0eWxlLmRpc3BsYXk9XG5cIm5vbmVcIix0aGlzLmlzX25vdGlmaWNhdGlvbj0hMSl9LmJpbmQodGhpcyk7YS5oZWxwPWZ1bmN0aW9uKGEpe2E/KHRoaXMuaGVscC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIix0aGlzLmhlbHAuaW5uZXJIVE1MPWEsdGhpcy5pc19oZWxwPSEwKToodGhpcy5oZWxwLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy5pc19oZWxwPSExKX0uYmluZCh0aGlzKX0pO2sucHJvdG90eXBlLnNldENvbW1lbnRzPWZ1bmN0aW9uKGEpe3RoaXMucGxheWVyLl90bXBfbWFyayYmZi5jYWxsKHRoaXMucGxheWVyKTt2YXIgYj1cIlwiO2Eubm9kZS5wYXJlbnR8fChiPWQoYS50YXJnZXQuZ2V0R2FtZUluZm8oKSwhMCkpO3RoaXMuY29tbWVudF90ZXh0LmlubmVySFRNTD1iK3RoaXMuZ2V0Q29tbWVudFRleHQoYS5ub2RlLmNvbW1lbnQsdGhpcy5wbGF5ZXIuY29uZmlnLmZvcm1hdE5pY2tzLHRoaXMucGxheWVyLmNvbmZpZy5mb3JtYXRNb3Zlcyk7dGhpcy5wbGF5ZXIuY29uZmlnLmZvcm1hdE1vdmVzJiZ0aGlzLmNvbW1lbnRfdGV4dC5jaGlsZE5vZGVzJiZcbnRoaXMuY29tbWVudF90ZXh0LmNoaWxkTm9kZXMubGVuZ3RoJiZsKHRoaXMuY29tbWVudF90ZXh0LmNoaWxkTm9kZXMsdGhpcy5wbGF5ZXIpfTtrLnByb3RvdHlwZS5nZXRDb21tZW50VGV4dD1mdW5jdGlvbihhLGQsZil7cmV0dXJuIGE/KGE9XCI8cD5cIitiLmZpbHRlckhUTUwoYSkucmVwbGFjZSgvXFxuL2csXCI8L3A+PHA+XCIpK1wiPC9wPlwiLGQmJihhPWEucmVwbGFjZSgvKDxwPikoW146XXszLH06KVxccy9nLCc8cD48c3BhbiBjbGFzcz1cIndnby1jb21tZW50cy1uaWNrXCI+JDI8L3NwYW4+ICcpKSxmJiYoYT1hLnJlcGxhY2UoL1xcYlthLXpBLVpdMT9cXGRcXGIvZywnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwid2dvLW1vdmUtbGlua1wiPiQmPC9hPicpKSxhKTpcIlwifTtiLkJhc2ljUGxheWVyLmRlZmF1bHQuZm9ybWF0Tmlja3M9ITA7Yi5CYXNpY1BsYXllci5kZWZhdWx0LmZvcm1hdE1vdmVzPSEwO2IuQmFzaWNQbGF5ZXIuYXR0cmlidXRlc1tcImRhdGEtd2dvLWZvcm1hdG5pY2tzXCJdPVxuZnVuY3Rpb24oYSl7XCJmYWxzZVwiPT1hLnRvTG93ZXJDYXNlKCkmJih0aGlzLmZvcm1hdE5pY2tzPSExKX07Yi5CYXNpY1BsYXllci5hdHRyaWJ1dGVzW1wiZGF0YS13Z28tZm9ybWF0bW92ZXNcIl09ZnVuY3Rpb24oYSl7XCJmYWxzZVwiPT1hLnRvTG93ZXJDYXNlKCkmJih0aGlzLmZvcm1hdE1vdmVzPSExKX07Yi5CYXNpY1BsYXllci5sYXlvdXRzLnJpZ2h0X3RvcC5yaWdodC5wdXNoKFwiQ29tbWVudEJveFwiKTtiLkJhc2ljUGxheWVyLmxheW91dHMucmlnaHQucmlnaHQucHVzaChcIkNvbW1lbnRCb3hcIik7Yi5CYXNpY1BsYXllci5sYXlvdXRzLm9uZV9jb2x1bW4uYm90dG9tLnB1c2goXCJDb21tZW50Qm94XCIpO2IuaTE4bi5lbi5jb21tZW50cz1cIkNvbW1lbnRzXCI7Yi5pMThuLmVuLmdhbWVpbmZvPVwiR2FtZSBpbmZvXCI7Yi5CYXNpY1BsYXllci5jb21wb25lbnQuQ29tbWVudEJveD1rfSkoV0dvKTsoZnVuY3Rpb24oYixwKXt2YXIgZz1iLmV4dGVuZENsYXNzKGIuQmFzaWNQbGF5ZXIuY29tcG9uZW50LkNvbXBvbmVudCxmdW5jdGlvbihhKXt0aGlzLnN1cGVyKGEpO3RoaXMud2lkZ2V0cz1bXTt0aGlzLmVsZW1lbnQuY2xhc3NOYW1lPVwid2dvLXBsYXllci1jb250cm9sXCI7dGhpcy5pY29uQmFyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dGhpcy5pY29uQmFyLmNsYXNzTmFtZT1cIndnby1jb250cm9sLXdyYXBwZXJcIjt0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pY29uQmFyKTt2YXIgYixkO2ZvcihkIGluIGcud2lkZ2V0cyliPW5ldyBnLndpZGdldHNbZF0uY29uc3RydWN0b3IoYSxnLndpZGdldHNbZF0uYXJncyksYi5hcHBlbmRUbyh0aGlzLmljb25CYXIpLHRoaXMud2lkZ2V0cy5wdXNoKGIpfSk7Zy5wcm90b3R5cGUudXBkYXRlRGltZW5zaW9ucz1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5jbGFzc05hbWU9MzQwPnRoaXMuZWxlbWVudC5jbGllbnRXaWR0aD9cblwid2dvLXBsYXllci1jb250cm9sIHdnby0zNDBcIjo0NDA+dGhpcy5lbGVtZW50LmNsaWVudFdpZHRoP1wid2dvLXBsYXllci1jb250cm9sIHdnby00NDBcIjpcIndnby1wbGF5ZXItY29udHJvbFwifTt2YXIgZj1iLkJhc2ljUGxheWVyLmNvbnRyb2w9e30sbD1mdW5jdGlvbihhKXthLm5vZGUucGFyZW50fHx0aGlzLmRpc2FibGVkP2Eubm9kZS5wYXJlbnQmJnRoaXMuZGlzYWJsZWQmJnRoaXMuZW5hYmxlKCk6dGhpcy5kaXNhYmxlKCl9LGQ9ZnVuY3Rpb24oYSl7YS5ub2RlLmNoaWxkcmVuLmxlbmd0aHx8dGhpcy5kaXNhYmxlZD9hLm5vZGUuY2hpbGRyZW4ubGVuZ3RoJiZ0aGlzLmRpc2FibGVkJiZ0aGlzLmVuYWJsZSgpOnRoaXMuZGlzYWJsZSgpfSxrPWZ1bmN0aW9uKGEpeyh0aGlzLl9kaXNhYmxlZD10aGlzLmRpc2FibGVkKXx8dGhpcy5kaXNhYmxlKCl9LGE9ZnVuY3Rpb24oYSl7dGhpcy5fZGlzYWJsZWR8fHRoaXMuZW5hYmxlKCk7ZGVsZXRlIHRoaXMuX2Rpc2FibGVkfTtmLldpZGdldD1cbmZ1bmN0aW9uKGEsYil7dGhpcy5lbGVtZW50PXRoaXMuZWxlbWVudHx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChiLnR5cGV8fFwiZGl2XCIpO3RoaXMuZWxlbWVudC5jbGFzc05hbWU9XCJ3Z28td2lkZ2V0LVwiK2IubmFtZTt0aGlzLmluaXQoYSxiKX07Zi5XaWRnZXQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpmLldpZGdldCxpbml0OmZ1bmN0aW9uKGEsYil7YiYmKGIuZGlzYWJsZWQmJnRoaXMuZGlzYWJsZSgpLGIuaW5pdCYmYi5pbml0LmNhbGwodGhpcyxhKSl9LGFwcGVuZFRvOmZ1bmN0aW9uKGEpe2EuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMuZGlzYWJsZWQ9ITA7LTE9PXRoaXMuZWxlbWVudC5jbGFzc05hbWUuc2VhcmNoKFwid2dvLWRpc2FibGVkXCIpJiYodGhpcy5lbGVtZW50LmNsYXNzTmFtZSs9XCIgd2dvLWRpc2FibGVkXCIpfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmRpc2FibGVkPSExO3RoaXMuZWxlbWVudC5jbGFzc05hbWU9dGhpcy5lbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFwiIHdnby1kaXNhYmxlZFwiLFxuXCJcIik7dGhpcy5lbGVtZW50LmRpc2FibGVkPVwiXCJ9fTtmLkdyb3VwPWIuZXh0ZW5kQ2xhc3MoZi5XaWRnZXQsZnVuY3Rpb24oYSxiKXt0aGlzLmVsZW1lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmVsZW1lbnQuY2xhc3NOYW1lPVwid2dvLWN0cmxncm91cCB3Z28tY3RybGdyb3VwLVwiK2IubmFtZTt2YXIgZCxmO2ZvcihmIGluIGIud2lkZ2V0cylkPW5ldyBiLndpZGdldHNbZl0uY29uc3RydWN0b3IoYSxiLndpZGdldHNbZl0uYXJncyksZC5hcHBlbmRUbyh0aGlzLmVsZW1lbnQpfSk7Zi5DbGlja2FibGU9Yi5leHRlbmRDbGFzcyhmLldpZGdldCxmdW5jdGlvbihhLGIpe3RoaXMuc3VwZXIoYSxiKX0pO2YuQ2xpY2thYmxlLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGEsYil7dmFyIGQsZj10aGlzO2Q9Yi50b2dnbGFibGU/ZnVuY3Rpb24oKXtmLmRpc2FibGVkfHwoYi5jbGljay5jYWxsKGYsYSk/Zi5zZWxlY3QoKTpmLnVuc2VsZWN0KCkpfTpmdW5jdGlvbigpe2YuZGlzYWJsZWR8fFxuYi5jbGljay5jYWxsKGYsYSl9O3RoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixkKTt0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCk7ZCgpO2IubXVsdGlwbGUmJihmLl90b3VjaF9pPTAsZi5fdG91Y2hfaW50PXdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbigpezUwMDxmLl90b3VjaF9pJiZkKCk7Zi5fdG91Y2hfaSs9MTAwfSwxMDApKTtyZXR1cm4hMX0pO2IubXVsdGlwbGUmJnRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixmdW5jdGlvbihhKXt3aW5kb3cuY2xlYXJJbnRlcnZhbChmLl90b3VjaF9pbnQpfSk7Yi5kaXNhYmxlZCYmdGhpcy5kaXNhYmxlKCk7Yi5pbml0JiZiLmluaXQuY2FsbCh0aGlzLGEpfTtmLkNsaWNrYWJsZS5wcm90b3R5cGUuc2VsZWN0PWZ1bmN0aW9uKCl7dGhpcy5zZWxlY3RlZD0hMDstMT09dGhpcy5lbGVtZW50LmNsYXNzTmFtZS5zZWFyY2goXCJ3Z28tc2VsZWN0ZWRcIikmJlxuKHRoaXMuZWxlbWVudC5jbGFzc05hbWUrPVwiIHdnby1zZWxlY3RlZFwiKX07Zi5DbGlja2FibGUucHJvdG90eXBlLnVuc2VsZWN0PWZ1bmN0aW9uKCl7dGhpcy5zZWxlY3RlZD0hMTt0aGlzLmVsZW1lbnQuY2xhc3NOYW1lPXRoaXMuZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShcIiB3Z28tc2VsZWN0ZWRcIixcIlwiKX07Zi5CdXR0b249Yi5leHRlbmRDbGFzcyhmLkNsaWNrYWJsZSxmdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMuZWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO2QuY2xhc3NOYW1lPVwid2dvLWJ1dHRvbiB3Z28tYnV0dG9uLVwiK2MubmFtZTtkLnRpdGxlPWIudChjLm5hbWUpO3RoaXMuaW5pdChhLGMpfSk7Zi5CdXR0b24ucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXtmLkJ1dHRvbi5wcm90b3R5cGUuc3VwZXIucHJvdG90eXBlLmRpc2FibGUuY2FsbCh0aGlzKTt0aGlzLmVsZW1lbnQuZGlzYWJsZWQ9XCJkaXNhYmxlZFwifTtmLkJ1dHRvbi5wcm90b3R5cGUuZW5hYmxlPVxuZnVuY3Rpb24oKXtmLkJ1dHRvbi5wcm90b3R5cGUuc3VwZXIucHJvdG90eXBlLmVuYWJsZS5jYWxsKHRoaXMpO3RoaXMuZWxlbWVudC5kaXNhYmxlZD1cIlwifTtmLk1lbnVJdGVtPWIuZXh0ZW5kQ2xhc3MoZi5DbGlja2FibGUsZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLmVsZW1lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtkLmNsYXNzTmFtZT1cIndnby1tZW51LWl0ZW0gd2dvLW1lbnUtaXRlbS1cIitjLm5hbWU7ZC50aXRsZT1iLnQoYy5uYW1lKTtkLmlubmVySFRNTD1kLnRpdGxlO3RoaXMuaW5pdChhLGMpfSk7Zi5Nb3ZlTnVtYmVyPWIuZXh0ZW5kQ2xhc3MoZi5XaWRnZXQsZnVuY3Rpb24oYSl7dGhpcy5lbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO3RoaXMuZWxlbWVudC5jbGFzc05hbWU9XCJ3Z28tcGxheWVyLW1uLXdyYXBwZXJcIjt2YXIgYj10aGlzLm1vdmU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2IudHlwZT1cInRleHRcIjtiLnZhbHVlPVxuXCIwXCI7Yi5tYXhsZW5ndGg9MztiLmNsYXNzTmFtZT1cIndnby1wbGF5ZXItbW4tdmFsdWVcIjt0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYik7dGhpcy5lbGVtZW50Lm9uc3VibWl0PWIub25jaGFuZ2U9ZnVuY3Rpb24oYSl7YS5nb1RvKHRoaXMuZ2V0VmFsdWUoKSk7cmV0dXJuITF9LmJpbmQodGhpcyxhKTthLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIixmdW5jdGlvbihhKXt0aGlzLnNldFZhbHVlKGEucGF0aC5tKX0uYmluZCh0aGlzKSk7YS5hZGRFdmVudExpc3RlbmVyKFwia2lmdUxvYWRlZFwiLHRoaXMuZW5hYmxlLmJpbmQodGhpcykpO2EuYWRkRXZlbnRMaXN0ZW5lcihcImZyb3plblwiLHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpKTthLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmZyb3plblwiLHRoaXMuZW5hYmxlLmJpbmQodGhpcykpfSk7Zi5Nb3ZlTnVtYmVyLnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7Zi5Nb3ZlTnVtYmVyLnByb3RvdHlwZS5zdXBlci5wcm90b3R5cGUuZGlzYWJsZS5jYWxsKHRoaXMpO1xudGhpcy5tb3ZlLmRpc2FibGVkPVwiZGlzYWJsZWRcIn07Zi5Nb3ZlTnVtYmVyLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXtmLk1vdmVOdW1iZXIucHJvdG90eXBlLnN1cGVyLnByb3RvdHlwZS5lbmFibGUuY2FsbCh0aGlzKTt0aGlzLm1vdmUuZGlzYWJsZWQ9XCJcIn07Zi5Nb3ZlTnVtYmVyLnByb3RvdHlwZS5zZXRWYWx1ZT1mdW5jdGlvbihhKXt0aGlzLm1vdmUudmFsdWU9YX07Zi5Nb3ZlTnVtYmVyLnByb3RvdHlwZS5nZXRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBwYXJzZUludCh0aGlzLm1vdmUudmFsdWUpfTt2YXIgaD1mdW5jdGlvbihhKXtpZihhLl9tZW51X3RtcClkZWxldGUgYS5fbWVudV90bXA7ZWxzZXtpZighYS5tZW51KXthLm1lbnU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLm1lbnUuY2xhc3NOYW1lPVwid2dvLXBsYXllci1tZW51XCI7YS5tZW51LnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIjthLm1lbnUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChhLm1lbnUpO1xudmFyIGIsZDtmb3IoZCBpbiBnLm1lbnUpYj1uZXcgZy5tZW51W2RdLmNvbnN0cnVjdG9yKGEsZy5tZW51W2RdLmFyZ3MsITApLGIuYXBwZW5kVG8oYS5tZW51KX1pZihcIm5vbmVcIiE9YS5tZW51LnN0eWxlLmRpc3BsYXkpcmV0dXJuIGEubWVudS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGEuX21lbnVfZXYpLGRlbGV0ZSBhLl9tZW51X2V2LHRoaXMudW5zZWxlY3QoKSwhMTthLm1lbnUuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7Yj10aGlzLmVsZW1lbnQub2Zmc2V0VG9wO2Q9dGhpcy5lbGVtZW50Lm9mZnNldExlZnQ7dGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ9PWEucmVnaW9ucy5ib3R0b20ud3JhcHBlcj8oYS5tZW51LnN0eWxlLmxlZnQ9ZCtcInB4XCIsYS5tZW51LnN0eWxlLnRvcD1iLWEubWVudS5vZmZzZXRIZWlnaHQrMStcInB4XCIpOihhLm1lbnUuc3R5bGUubGVmdD1cbmQrXCJweFwiLGEubWVudS5zdHlsZS50b3A9Yit0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0K1wicHhcIik7YS5fbWVudV9ldj1oLmJpbmQodGhpcyxhKTthLl9tZW51X3RtcD0hMDtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixhLl9tZW51X2V2KTtyZXR1cm4hMH19O2cubWVudT1be2NvbnN0cnVjdG9yOmYuTWVudUl0ZW0sYXJnczp7bmFtZTpcInN3aXRjaC1jb29cIix0b2dnbGFibGU6ITAsY2xpY2s6ZnVuY3Rpb24oYSl7YS5zZXRDb29yZGluYXRlcyghYS5jb29yZGluYXRlcyk7cmV0dXJuIGEuY29vcmRpbmF0ZXN9LGluaXQ6ZnVuY3Rpb24oYSl7YS5jb29yZGluYXRlcyYmdGhpcy5zZWxlY3QoKX19fV07Zy53aWRnZXRzPVt7Y29uc3RydWN0b3I6Zi5Hcm91cCxhcmdzOntuYW1lOlwibGVmdFwiLHdpZGdldHM6W3tjb25zdHJ1Y3RvcjpmLkJ1dHRvbixhcmdzOntuYW1lOlwibWVudVwiLHRvZ2dsYWJsZTohMCxjbGljazpofX1dfX0se2NvbnN0cnVjdG9yOmYuR3JvdXAsYXJnczp7bmFtZTpcInJpZ2h0XCIsXG53aWRnZXRzOlt7Y29uc3RydWN0b3I6Zi5CdXR0b24sYXJnczp7bmFtZTpcImFib3V0XCIsY2xpY2s6ZnVuY3Rpb24oYSl7YS5zaG93TWVzc2FnZShiLnQoXCJhYm91dC10ZXh0XCIpKX19fV19fSx7Y29uc3RydWN0b3I6Zi5Hcm91cCxhcmdzOntuYW1lOlwiY29udHJvbFwiLHdpZGdldHM6W3tjb25zdHJ1Y3RvcjpmLkJ1dHRvbixhcmdzOntuYW1lOlwiZmlyc3RcIixkaXNhYmxlZDohMCxpbml0OmZ1bmN0aW9uKGIpe2IuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLGwuYmluZCh0aGlzKSk7Yi5hZGRFdmVudExpc3RlbmVyKFwiZnJvemVuXCIsay5iaW5kKHRoaXMpKTtiLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmZyb3plblwiLGEuYmluZCh0aGlzKSl9LGNsaWNrOmZ1bmN0aW9uKGEpe2EuZmlyc3QoKX19fSx7Y29uc3RydWN0b3I6Zi5CdXR0b24sYXJnczp7bmFtZTpcIm11bHRpcHJldlwiLGRpc2FibGVkOiEwLG11bHRpcGxlOiEwLGluaXQ6ZnVuY3Rpb24oYil7Yi5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsXG5sLmJpbmQodGhpcykpO2IuYWRkRXZlbnRMaXN0ZW5lcihcImZyb3plblwiLGsuYmluZCh0aGlzKSk7Yi5hZGRFdmVudExpc3RlbmVyKFwidW5mcm96ZW5cIixhLmJpbmQodGhpcykpfSxjbGljazpmdW5jdGlvbihhKXt2YXIgYz1iLmNsb25lKGEua2lmdVJlYWRlci5wYXRoKTtjLm0tPTEwO2EuZ29UbyhjKX19fSx7Y29uc3RydWN0b3I6Zi5CdXR0b24sYXJnczp7bmFtZTpcInByZXZpb3VzXCIsZGlzYWJsZWQ6ITAsbXVsdGlwbGU6ITAsaW5pdDpmdW5jdGlvbihiKXtiLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIixsLmJpbmQodGhpcykpO2IuYWRkRXZlbnRMaXN0ZW5lcihcImZyb3plblwiLGsuYmluZCh0aGlzKSk7Yi5hZGRFdmVudExpc3RlbmVyKFwidW5mcm96ZW5cIixhLmJpbmQodGhpcykpfSxjbGljazpmdW5jdGlvbihhKXthLnByZXZpb3VzKCl9fX0se2NvbnN0cnVjdG9yOmYuTW92ZU51bWJlcn0se2NvbnN0cnVjdG9yOmYuQnV0dG9uLGFyZ3M6e25hbWU6XCJuZXh0XCIsZGlzYWJsZWQ6ITAsbXVsdGlwbGU6ITAsXG5pbml0OmZ1bmN0aW9uKGIpe2IuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLGQuYmluZCh0aGlzKSk7Yi5hZGRFdmVudExpc3RlbmVyKFwiZnJvemVuXCIsay5iaW5kKHRoaXMpKTtiLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmZyb3plblwiLGEuYmluZCh0aGlzKSl9LGNsaWNrOmZ1bmN0aW9uKGEpe2EubmV4dCgpfX19LHtjb25zdHJ1Y3RvcjpmLkJ1dHRvbixhcmdzOntuYW1lOlwibXVsdGluZXh0XCIsZGlzYWJsZWQ6ITAsbXVsdGlwbGU6ITAsaW5pdDpmdW5jdGlvbihiKXtiLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIixkLmJpbmQodGhpcykpO2IuYWRkRXZlbnRMaXN0ZW5lcihcImZyb3plblwiLGsuYmluZCh0aGlzKSk7Yi5hZGRFdmVudExpc3RlbmVyKFwidW5mcm96ZW5cIixhLmJpbmQodGhpcykpfSxjbGljazpmdW5jdGlvbihhKXt2YXIgYz1iLmNsb25lKGEua2lmdVJlYWRlci5wYXRoKTtjLm0rPTEwO2EuZ29UbyhjKX19fSx7Y29uc3RydWN0b3I6Zi5CdXR0b24sYXJnczp7bmFtZTpcImxhc3RcIixcbmRpc2FibGVkOiEwLGluaXQ6ZnVuY3Rpb24oYil7Yi5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsZC5iaW5kKHRoaXMpKTtiLmFkZEV2ZW50TGlzdGVuZXIoXCJmcm96ZW5cIixrLmJpbmQodGhpcykpO2IuYWRkRXZlbnRMaXN0ZW5lcihcInVuZnJvemVuXCIsYS5iaW5kKHRoaXMpKX0sY2xpY2s6ZnVuY3Rpb24oYSl7YS5sYXN0KCl9fX1dfX1dO3ZhciBuPWIuQmFzaWNQbGF5ZXIubGF5b3V0cztuLnJpZ2h0X3RvcC50b3AucHVzaChcIkNvbnRyb2xcIik7bi5yaWdodC5yaWdodC5wdXNoKFwiQ29udHJvbFwiKTtuLm9uZV9jb2x1bW4udG9wLnB1c2goXCJDb250cm9sXCIpO24ubm9fY29tbWVudC5ib3R0b20ucHVzaChcIkNvbnRyb2xcIik7bi5taW5pbWFsLmJvdHRvbS5wdXNoKFwiQ29udHJvbFwiKTt2YXIgbj17YWJvdXQ6XCJBYm91dFwiLGZpcnN0OlwiRmlyc3RcIixtdWx0aXByZXY6XCIxMCBtb3ZlcyBiYWNrXCIscHJldmlvdXM6XCJQcmV2aW91c1wiLG5leHQ6XCJOZXh0XCIsbXVsdGluZXh0OlwiMTAgbW92ZXMgZm9yd2FyZFwiLFxubGFzdDpcIkxhc3RcIixcInN3aXRjaC1jb29cIjpcIkRpc3BsYXkgY29vcmRpbmF0ZXNcIixtZW51OlwiTWVudVwifSxtO2ZvcihtIGluIG4pYi5pMThuLmVuW21dPW5bbV07Yi5CYXNpY1BsYXllci5jb21wb25lbnQuQ29udHJvbD1nfSkoV0dvKTsoZnVuY3Rpb24oYil7dmFyIHA9ZnVuY3Rpb24oYixnKXt0aGlzLnBsYXllci5mcm96ZW58fHRoaXMuX2xhc3RYPT1iJiZ0aGlzLl9sYXN0WT09Z3x8KHRoaXMuX2xhc3RYPWIsdGhpcy5fbGFzdFk9Zyx0aGlzLl9sYXN0X21hcmsmJnRoaXMuYm9hcmQucmVtb3ZlT2JqZWN0KHRoaXMuX2xhc3RfbWFyayksLTEhPWImJi0xIT1nJiZ0aGlzLnBsYXllci5raWZ1UmVhZGVyLmdhbWUuaXNWYWxpZChiLGcpPyh0aGlzLl9sYXN0X21hcms9e3R5cGU6XCJvdXRsaW5lXCIseDpiLHk6ZyxjOnRoaXMucGxheWVyLmtpZnVSZWFkZXIuZ2FtZS50dXJufSx0aGlzLmJvYXJkLmFkZE9iamVjdCh0aGlzLl9sYXN0X21hcmspKTpkZWxldGUgdGhpcy5fbGFzdF9tYXJrKX0sZz1mdW5jdGlvbigpe3RoaXMuX2xhc3RfbWFyayYmKHRoaXMuYm9hcmQucmVtb3ZlT2JqZWN0KHRoaXMuX2xhc3RfbWFyayksZGVsZXRlIHRoaXMuX2xhc3RfbWFyayxkZWxldGUgdGhpcy5fbGFzdFgsZGVsZXRlIHRoaXMuX2xhc3RZKX07XG5iLlBsYXllci5FZGl0YWJsZT17fTtiLlBsYXllci5FZGl0YWJsZT1mdW5jdGlvbihiLGcpe3RoaXMucGxheWVyPWI7dGhpcy5ib2FyZD1nO3RoaXMuZWRpdE1vZGU9ITF9O2IuUGxheWVyLkVkaXRhYmxlLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oZil7aWYoIXRoaXMuZWRpdE1vZGUmJmYpdGhpcy5vcmlnaW5hbFJlYWRlcj10aGlzLnBsYXllci5raWZ1UmVhZGVyLHRoaXMucGxheWVyLmtpZnVSZWFkZXI9bmV3IGIuS2lmdVJlYWRlcih0aGlzLnBsYXllci5raWZ1LmNsb25lKCksdGhpcy5vcmlnaW5hbFJlYWRlci5yZW1lbWJlclBhdGgsdGhpcy5vcmlnaW5hbFJlYWRlci5hbGxvd19pbGxlZ2FsLHRoaXMub3JpZ2luYWxSZWFkZXIuYWxsb3dfaWxsZWdhbCksdGhpcy5wbGF5ZXIua2lmdVJlYWRlci5nb1RvKHRoaXMub3JpZ2luYWxSZWFkZXIucGF0aCksdGhpcy5fZXZfY2xpY2s9dGhpcy5fZXZfY2xpY2t8fHRoaXMucGxheS5iaW5kKHRoaXMpLHRoaXMuX2V2X21vdmU9dGhpcy5fZXZfbW92ZXx8XG5wLmJpbmQodGhpcyksdGhpcy5fZXZfb3V0PXRoaXMuX2V2X291dHx8Zy5iaW5kKHRoaXMpLHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fZXZfY2xpY2spLHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuX2V2X21vdmUpLHRoaXMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsdGhpcy5fZXZfb3V0KSx0aGlzLmVkaXRNb2RlPSEwO2Vsc2UgaWYodGhpcy5lZGl0TW9kZSYmIWYpe3RoaXMub3JpZ2luYWxSZWFkZXIuZ29Ubyh0aGlzLnBsYXllci5raWZ1UmVhZGVyLnBhdGgpO2Y9dGhpcy5vcmlnaW5hbFJlYWRlcjtmb3IodmFyIGw9dGhpcy5wbGF5ZXIua2lmdVJlYWRlci5nZXRQb3NpdGlvbigpLGQ9dGhpcy5vcmlnaW5hbFJlYWRlci5nZXRQb3NpdGlvbigpLGs9bC5zaXplLGE9W10saD1bXSxuPTA7bjxrKms7bisrKWwuc2NoZW1hW25dJiYhZC5zY2hlbWFbbl0/aC5wdXNoKHt4Ok1hdGguZmxvb3Iobi9rKSxcbnk6biVrfSk6bC5zY2hlbWFbbl0hPWQuc2NoZW1hW25dJiZhLnB1c2goe3g6TWF0aC5mbG9vcihuL2spLHk6biVrLGM6ZC5zY2hlbWFbbl19KTtmLmNoYW5nZT17YWRkOmEscmVtb3ZlOmh9O3RoaXMucGxheWVyLmtpZnVSZWFkZXI9dGhpcy5vcmlnaW5hbFJlYWRlcjt0aGlzLnBsYXllci51cGRhdGUoITApO3RoaXMuYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fZXZfY2xpY2spO3RoaXMuYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuX2V2X21vdmUpO3RoaXMuYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsdGhpcy5fZXZfb3V0KTt0aGlzLmVkaXRNb2RlPSExfX07Yi5QbGF5ZXIuRWRpdGFibGUucHJvdG90eXBlLnBsYXk9ZnVuY3Rpb24oZixnKXshdGhpcy5wbGF5ZXIuZnJvemVuJiZ0aGlzLnBsYXllci5raWZ1UmVhZGVyLmdhbWUuaXNWYWxpZChmLGcpJiYodGhpcy5wbGF5ZXIua2lmdVJlYWRlci5ub2RlLmFwcGVuZENoaWxkKG5ldyBiLktOb2RlKHttb3ZlOnt4OmYsXG55OmcsYzp0aGlzLnBsYXllci5raWZ1UmVhZGVyLmdhbWUudHVybn0sX2VkaXRlZDohMH0pKSx0aGlzLnBsYXllci5uZXh0KHRoaXMucGxheWVyLmtpZnVSZWFkZXIubm9kZS5jaGlsZHJlbi5sZW5ndGgtMSkpfTtiLkJhc2ljUGxheWVyJiZiLkJhc2ljUGxheWVyLmNvbXBvbmVudC5Db250cm9sJiZiLkJhc2ljUGxheWVyLmNvbXBvbmVudC5Db250cm9sLm1lbnUucHVzaCh7Y29uc3RydWN0b3I6Yi5CYXNpY1BsYXllci5jb250cm9sLk1lbnVJdGVtLGFyZ3M6e25hbWU6XCJlZGl0bW9kZVwiLHRvZ2dsYWJsZTohMCxjbGljazpmdW5jdGlvbihmKXt0aGlzLl9lZGl0YWJsZT10aGlzLl9lZGl0YWJsZXx8bmV3IGIuUGxheWVyLkVkaXRhYmxlKGYsZi5ib2FyZCk7dGhpcy5fZWRpdGFibGUuc2V0KCF0aGlzLl9lZGl0YWJsZS5lZGl0TW9kZSk7cmV0dXJuIHRoaXMuX2VkaXRhYmxlLmVkaXRNb2RlfSxpbml0OmZ1bmN0aW9uKGIpe3ZhciBnPXRoaXM7Yi5hZGRFdmVudExpc3RlbmVyKFwiZnJvemVuXCIsXG5mdW5jdGlvbihiKXsoZy5fZGlzYWJsZWQ9Zy5kaXNhYmxlZCl8fGcuZGlzYWJsZSgpfSk7Yi5hZGRFdmVudExpc3RlbmVyKFwidW5mcm96ZW5cIixmdW5jdGlvbihiKXtnLl9kaXNhYmxlZHx8Zy5lbmFibGUoKTtkZWxldGUgZy5fZGlzYWJsZWR9KX19fSk7Yi5pMThuLmVuLmVkaXRtb2RlPVwiRWRpdCBtb2RlXCJ9KShXR28pOyhmdW5jdGlvbihiKXt2YXIgcD1mdW5jdGlvbihiLGYsYSxnKXt0aGlzLm9yaWdpbmFsUG9zaXRpb249Yjt0aGlzLnBvc2l0aW9uPWIuY2xvbmUoKTt0aGlzLmJvYXJkPWY7dGhpcy5rb21pPWE7dGhpcy5vdXRwdXQ9Z30sZz1wLnN0YXRlPXtVTktOT1dOOjAsQkxBQ0tfU1RPTkU6MSxXSElURV9TVE9ORTotMSxCTEFDS19DQU5ESURBVEU6MixXSElURV9DQU5ESURBVEU6LTIsQkxBQ0tfTkVVVFJBTDozLFdISVRFX05FVVRSQUw6LTMsTkVVVFJBTDo0fSxmPWZ1bmN0aW9uKGIsZyxhLGgsbil7dmFyIG09Yi5nZXQoZyxhKTt2b2lkIDAhPT1tJiZtIT1oJiZtIT1uJiYoYi5zZXQoZyxhLGgpLGYoYixnLTEsYSxoLG4pLGYoYixnLGEtMSxoLG4pLGYoYixnKzEsYSxoLG4pLGYoYixnLGErMSxoLG4pKX0sbD1mdW5jdGlvbihiLGcsYSxmLG4pe3ZhciBtPWcuZ2V0KGEsZik7Yi5nZXQoYSxmKSE9bSYmKGIuc2V0KGEsZixtKSxsKGIsZyxhLTEsZixuKSxsKGIsZyxhLGYtMSxuKSxsKGIsZyxhK1xuMSxmLG4pLGwoYixnLGEsZisxLG4pKX07cC5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLmNhbGN1bGF0ZSgpO3RoaXMuc2F2ZWRfc3RhdGU9dGhpcy5ib2FyZC5nZXRTdGF0ZSgpO3RoaXMuZGlzcGxheVNjb3JlKCk7dGhpcy5fY2xpY2s9ZnVuY3Rpb24oZCxrKXt2YXIgYT10aGlzLm9yaWdpbmFsUG9zaXRpb24uZ2V0KGQsayk7YT09Yi5XP3RoaXMucG9zaXRpb24uZ2V0KGQsayk9PWcuV0hJVEVfU1RPTkU/Zih0aGlzLnBvc2l0aW9uLGQsayxnLkJMQUNLX0NBTkRJREFURSxnLkJMQUNLX1NUT05FKToobCh0aGlzLnBvc2l0aW9uLHRoaXMub3JpZ2luYWxQb3NpdGlvbixkLGssZy5CTEFDS19TVE9ORSksdGhpcy5jYWxjdWxhdGUoKSk6YT09Yi5CP3RoaXMucG9zaXRpb24uZ2V0KGQsayk9PWcuQkxBQ0tfU1RPTkU/Zih0aGlzLnBvc2l0aW9uLGQsayxnLldISVRFX0NBTkRJREFURSxnLldISVRFX1NUT05FKToobCh0aGlzLnBvc2l0aW9uLHRoaXMub3JpZ2luYWxQb3NpdGlvbixcbmQsayxnLldISVRFX1NUT05FKSx0aGlzLmNhbGN1bGF0ZSgpKTooYT10aGlzLnBvc2l0aW9uLmdldChkLGspLGE9PWcuQkxBQ0tfQ0FORElEQVRFP3RoaXMucG9zaXRpb24uc2V0KGQsayxnLkJMQUNLX05FVVRSQUwpOmE9PWcuV0hJVEVfQ0FORElEQVRFP3RoaXMucG9zaXRpb24uc2V0KGQsayxnLldISVRFX05FVVRSQUwpOmE9PWcuQkxBQ0tfTkVVVFJBTD90aGlzLnBvc2l0aW9uLnNldChkLGssZy5CTEFDS19DQU5ESURBVEUpOmE9PWcuV0hJVEVfTkVVVFJBTCYmdGhpcy5wb3NpdGlvbi5zZXQoZCxrLGcuV0hJVEVfQ0FORElEQVRFKSk7dGhpcy5ib2FyZC5yZXN0b3JlU3RhdGUoe29iamVjdHM6Yi5jbG9uZSh0aGlzLnNhdmVkX3N0YXRlLm9iamVjdHMpfSk7dGhpcy5kaXNwbGF5U2NvcmUoKX0uYmluZCh0aGlzKTt0aGlzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuX2NsaWNrKX07cC5wcm90b3R5cGUuZW5kPWZ1bmN0aW9uKCl7dGhpcy5ib2FyZC5yZXN0b3JlU3RhdGUoe29iamVjdHM6Yi5jbG9uZSh0aGlzLnNhdmVkX3N0YXRlLm9iamVjdHMpfSk7XG50aGlzLmJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuX2NsaWNrKX07cC5wcm90b3R5cGUuZGlzcGxheVNjb3JlPWZ1bmN0aW9uKCl7Zm9yKHZhciBkPVtdLGY9W10sYT1bXSxoPVtdLG49W10sbT0wO208dGhpcy5wb3NpdGlvbi5zaXplO20rKylmb3IodmFyIGU9MDtlPHRoaXMucG9zaXRpb24uc2l6ZTtlKyspcz10aGlzLnBvc2l0aW9uLmdldChtLGUpLHQ9dGhpcy5vcmlnaW5hbFBvc2l0aW9uLmdldChtLGUpLHM9PWcuQkxBQ0tfQ0FORElEQVRFP2QucHVzaCh7eDptLHk6ZSx0eXBlOlwibWluaVwiLGM6Yi5CfSk6cz09Zy5XSElURV9DQU5ESURBVEU/Zi5wdXNoKHt4Om0seTplLHR5cGU6XCJtaW5pXCIsYzpiLld9KTpzPT1nLk5FVVRSQUwmJmEucHVzaCh7eDptLHk6ZX0pLHQ9PWIuVyYmcyE9Zy5XSElURV9TVE9ORT9uLnB1c2goe3g6bSx5OmUsdHlwZTpcIm91dGxpbmVcIixjOmIuV30pOnQ9PWIuQiYmcyE9Zy5CTEFDS19TVE9ORSYmaC5wdXNoKHt4Om0seTplLHR5cGU6XCJvdXRsaW5lXCIsXG5jOmIuQn0pO2ZvcihtPTA7bTxoLmxlbmd0aDttKyspdGhpcy5ib2FyZC5yZW1vdmVPYmplY3RzQXQoaFttXS54LGhbbV0ueSk7Zm9yKG09MDttPG4ubGVuZ3RoO20rKyl0aGlzLmJvYXJkLnJlbW92ZU9iamVjdHNBdChuW21dLngsblttXS55KTt0aGlzLmJvYXJkLmFkZE9iamVjdChuKTt0aGlzLmJvYXJkLmFkZE9iamVjdChoKTt0aGlzLmJvYXJkLmFkZE9iamVjdChkKTt0aGlzLmJvYXJkLmFkZE9iamVjdChmKTthPVwiPHAgc3R5bGU9J2ZvbnQtd2VpZ2h0OiBib2xkOyc+XCIrYi50KFwiUkVcIikrXCI8L3A+XCI7bT1kLmxlbmd0aCtuLmxlbmd0aCt0aGlzLm9yaWdpbmFsUG9zaXRpb24uY2FwQ291bnQuYmxhY2s7ZT1mLmxlbmd0aCtoLmxlbmd0aCt0aGlzLm9yaWdpbmFsUG9zaXRpb24uY2FwQ291bnQud2hpdGUrcGFyc2VGbG9hdCh0aGlzLmtvbWkpO2ErPVwiPHA+XCIrYi50KFwiYmxhY2tcIikrXCI6IFwiK2QubGVuZ3RoK1wiICsgXCIrKG4ubGVuZ3RoK3RoaXMub3JpZ2luYWxQb3NpdGlvbi5jYXBDb3VudC5ibGFjaykrXG5cIiA9IFwiK20rXCI8L2JyPlwiO2ErPWIudChcIndoaXRlXCIpK1wiOiBcIitmLmxlbmd0aCtcIiArIFwiKyhoLmxlbmd0aCt0aGlzLm9yaWdpbmFsUG9zaXRpb24uY2FwQ291bnQud2hpdGUpK1wiICsgXCIrdGhpcy5rb21pK1wiID0gXCIrZStcIjwvcD5cIjthPW0+ZT9hKyhcIjxwIHN0eWxlPSdmb250LXdlaWdodDogYm9sZDsnPlwiK2IudChcImJ3aW5cIixtLWUpK1wiPC9wPlwiKTphKyhcIjxwIHN0eWxlPSdmb250LXdlaWdodDogYm9sZDsnPlwiK2IudChcInd3aW5cIixlLW0pK1wiPC9wPlwiKTt0aGlzLm91dHB1dChhKX07cC5wcm90b3R5cGUuY2FsY3VsYXRlPWZ1bmN0aW9uKCl7dmFyIGIsZixhLGgsbixtO2I9dGhpcy5wb3NpdGlvbjtmb3IobT0hMDttOyl7bT0hMTtmb3IodmFyIGU9MDtlPGIuc2l6ZTtlKyspZm9yKHZhciBjPTA7YzxiLnNpemU7YysrKWlmKGY9Yi5nZXQoYyxlKSxmPT1nLlVOS05PV058fGY9PWcuQkxBQ0tfQ0FORElEQVRFfHxmPT1nLldISVRFX0NBTkRJREFURSl7YT1bYi5nZXQoYy0xLGUpLGIuZ2V0KGMsXG5lLTEpLGIuZ2V0KGMrMSxlKSxiLmdldChjLGUrMSldO249aD0hMTtmb3IodmFyIGw9MDs0Pmw7bCsrKWFbbF09PWcuQkxBQ0tfU1RPTkV8fGFbbF09PWcuQkxBQ0tfQ0FORElEQVRFP2g9ITA6YVtsXT09Zy5XSElURV9TVE9ORXx8YVtsXT09Zy5XSElURV9DQU5ESURBVEU/bj0hMDphW2xdPT1nLk5FVVRSQUwmJihuPWg9ITApO2E9ITE7aCYmbj9hPWcuTkVVVFJBTDpoP2E9Zy5CTEFDS19DQU5ESURBVEU6biYmKGE9Zy5XSElURV9DQU5ESURBVEUpO2EmJmYhPWEmJihtPSEwLGIuc2V0KGMsZSxhKSl9fX07Yi5TY29yZU1vZGU9cDtiLkJhc2ljUGxheWVyJiZiLkJhc2ljUGxheWVyLmNvbXBvbmVudC5Db250cm9sJiZiLkJhc2ljUGxheWVyLmNvbXBvbmVudC5Db250cm9sLm1lbnUucHVzaCh7Y29uc3RydWN0b3I6Yi5CYXNpY1BsYXllci5jb250cm9sLk1lbnVJdGVtLGFyZ3M6e25hbWU6XCJzY29yZW1vZGVcIix0b2dnbGFibGU6ITAsY2xpY2s6ZnVuY3Rpb24oZCl7aWYodGhpcy5zZWxlY3RlZClyZXR1cm4gZC5zZXRGcm96ZW4oITEpLFxudGhpcy5fc2NvcmVfbW9kZS5lbmQoKSxkZWxldGUgdGhpcy5fc2NvcmVfbW9kZSxkLm5vdGlmaWNhdGlvbigpLGQuaGVscCgpLCExO2Quc2V0RnJvemVuKCEwKTtkLmhlbHAoXCI8cD5cIitiLnQoXCJoZWxwX3Njb3JlXCIpK1wiPC9wPlwiKTt0aGlzLl9zY29yZV9tb2RlPW5ldyBiLlNjb3JlTW9kZShkLmtpZnVSZWFkZXIuZ2FtZS5wb3NpdGlvbixkLmJvYXJkLGQua2lmdS5pbmZvLktNfHwuNSxkLm5vdGlmaWNhdGlvbik7dGhpcy5fc2NvcmVfbW9kZS5zdGFydCgpO3JldHVybiEwfX19KTtiLmkxOG4uZW4uc2NvcmVtb2RlPVwiQ291bnQgc2NvcmVcIjtiLmkxOG4uZW4uc2NvcmU9XCJTY29yZVwiO2IuaTE4bi5lbi5id2luPVwiQmxhY2sgd2lucyBieSAkIHBvaW50cy5cIjtiLmkxOG4uZW4ud3dpbj1cIldoaXRlIHdpbnMgYnkgJCBwb2ludHMuXCI7Yi5pMThuLmVuLmhlbHBfc2NvcmU9XCJDbGljayBvbiBzdG9uZXMgdG8gbWFyayB0aGVtIGRlYWQgb3IgYWxpdmUuIFlvdSBjYW4gYWxzbyBzZXQgYW5kIHVuc2V0IHRlcnJpdG9yeSBwb2ludHMgYnkgY2xpY2tpbmcgb24gdGhlbS4gVGVycml0b3JpZXMgbXVzdCBiZSBjb21wbGV0ZWx5IGJvcmRlcmVkLlwifSkoV0dvKTsoZnVuY3Rpb24oYixwKXt2YXIgZz17YWN0aXZlOiEwLHF1ZXJ5Ont9fSxmPWZ1bmN0aW9uKGIpe3RyeXtnLnF1ZXJ5PUpTT04ucGFyc2UoJ3tcIicrd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLnJlcGxhY2UoXCI9XCIsJ1wiOicpK1wifVwiKX1jYXRjaChmKXtnLnF1ZXJ5PXt9fX07d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsZnVuY3Rpb24oKXtpZihcIlwiIT13aW5kb3cubG9jYXRpb24uaGFzaCYmZy5hY3RpdmUpe2YoKTtmb3IodmFyIGIgaW4gZy5xdWVyeSl7dmFyIGs9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYik7ayYmay5fd2dvX3BsYXllciYmay5fd2dvX3BsYXllci5nb1RvKGwpfX19KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbigpe1wiXCIhPXdpbmRvdy5sb2NhdGlvbi5oYXNoJiZnLmFjdGl2ZSYmZigpfSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXtpZihcIlwiIT13aW5kb3cubG9jYXRpb24uaGFzaCYmXG5nLmFjdGl2ZSlmb3IodmFyIGIgaW4gZy5xdWVyeSl7dmFyIGY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYik7aWYoZiYmZi5fd2dvX3BsYXllcil7Zi5zY3JvbGxJbnRvVmlldygpO2JyZWFrfX19KTt2YXIgbD1mdW5jdGlvbigpe2lmKGcucXVlcnlbdGhpcy5lbGVtZW50LmlkXSlyZXR1cm4gZy5xdWVyeVt0aGlzLmVsZW1lbnQuaWRdLmdvdG99O2IuUGxheWVyLmRlZmF1bHQubW92ZT1sO2IuQmFzaWNQbGF5ZXImJmIuQmFzaWNQbGF5ZXIuY29tcG9uZW50LkNvbnRyb2wmJmIuQmFzaWNQbGF5ZXIuY29tcG9uZW50LkNvbnRyb2wubWVudS5wdXNoKHtjb25zdHJ1Y3RvcjpiLkJhc2ljUGxheWVyLmNvbnRyb2wuTWVudUl0ZW0sYXJnczp7bmFtZTpcInBlcm1hbGlua1wiLGNsaWNrOmZ1bmN0aW9uKGQpe3ZhciBmPWxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdK1wiI1wiK2QuZWxlbWVudC5pZCsnPXtcImdvdG9cIjonK0pTT04uc3RyaW5naWZ5KGQua2lmdVJlYWRlci5wYXRoKStcIn1cIjtkLnNob3dNZXNzYWdlKFwiPGgxPlwiK1xuYi50KFwicGVybWFsaW5rXCIpKyc8L2gxPjxwPjxpbnB1dCBjbGFzcz1cIndnby1wZXJtYWxpbmtcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVxcJycrZisnXFwnIG9uY2xpY2s9XCJ0aGlzLnNlbGVjdCgpOyBldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiLz48L3A+Jyl9fX0pO2IuUGxheWVyLnBlcm1hbGluaz1nO2IuaTE4bi5lbi5wZXJtYWxpbms9XCJQZXJtYW5lbnQgbGlua1wifSkoV0dvKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtiYXNlNjQsZDA5R1JnQUJBQUFBQUE3QUFBNEFBQUFBRi9nQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJQVXk4eUFBQUJSQUFBQUVRQUFBQldQZUZJYUdOdFlYQUFBQUdJQUFBQVV3QUFBV3FnV2VvblkzWjBJQUFBQWR3QUFBQVVBQUFBSEFaTC81Um1jR2R0QUFBQjhBQUFCUGtBQUFtUmlncDRPMmRoYzNBQUFBYnNBQUFBQ0FBQUFBZ0FBQUFRWjJ4NVpnQUFCdlFBQUFUT0FBQUhPa3d3RHh0b1pXRmtBQUFMeEFBQUFEVUFBQUEyL3hxOFdtaG9aV0VBQUF2OEFBQUFJQUFBQUNRSFdnTmNhRzEwZUFBQURCd0FBQUFwQUFBQU1DUXJBQUJzYjJOaEFBQU1TQUFBQUJvQUFBQWFETkVLMUcxaGVIQUFBQXhrQUFBQUlBQUFBQ0FBNnduM2JtRnRaUUFBRElRQUFBRnFBQUFDam9LWjcwRndiM04wQUFBTjhBQUFBSGdBQUFDazR6UC8zSEJ5WlhBQUFBNW9BQUFBVmdBQUFGYVNvWnIvZUp4allHUm1ZWnpBd01yQXdWVEZ0SWVCZ2FFSFFqTStZREJrWkdKZ1lHSmdaV2JBQ2dMU1hGTVlIRjR3dkpCbUR2cWZ4UkRGek1QZ0R4Um1CTWtCQUw5YUNzZDRuR05nWUdCbWdHQVpCa1lHRUVnQjhoakJmQllHRHlETng4REJ3TVRBeHNEd2d2RUZ6d3YrRitJdnBQLy9CeWw4d1FEbUM3K1FBdkVsR01XL2kzOFYveVQrQVdvT0VtQmtReGNaZVFBQVZvMFMvd0I0bkdOZ1FBTkdERWJNUFA4M2dqQUFFTDRENDNpY25WWFpkdE5XRkpVOFpIQVNPbVNnb0E3WDNEaFE2OHFFS1Jnd2FTckZkaUVkSEFpdEJCMmtESFRrbmNjKzYydU9RcnRXSC9tMDduMDlKTFIwcmJZc2xzKytSMXRuMkRyblJod2pLbjBhaUd2VW9aS1hBNm1zUFpaSzkwbGMxM1V2ajVVTUJuRmR0aEpQU1p1b25TUkthdDNzVUM3eFdPc3FXU2RZSitQbElGWlBWWjVub0F6aUZCNWxTVVFiUkJ1cGx5Wko0b25qSjRrV1p4QWZKVWtnSmFNUXA5TElVRUkxR3NSUzFhRk02ZENyMXhOeDAwREtScU1lZFZoVTkwUEZKOGMxcDlTc0EwWXFWem5DRmV2VlJyNGJwd012ZTVERU9zR3pyWWN4SG5pc2ZwUXFrSXFSNmNnL2RrcE9sSWFCVkhIVW9WYmk2RENUWC9lUlRDck5RS2FNWWtXbDdvRzQzZjEwMnhZeFBYUTZ2aTVLbFVhcXVybk9LSnJ0MGZHb2d5Z1AyY2JwcE56UTJmYnc1UmxUVkt0ZGNiUHRRR1lOWEVySmJIU2ZSQUFkSmxMajZRRk9OWndDcVJuMVI4WFo1ODhCRXNsY2xLbzhWVEtIZWdPWk16dDdjVEh0YmllcnNuQ2tud2N5YjNaMjQ1MkhRNmRYaDMvUitoZE00Y3hIaitKaWZqNUMrbEJxZmlKT0pLVkdXTXp5cDRZZmNWY2dRcmt4aUFzWHl1QlRoRGwwUmRyWlpsM2p0VEgyaHMvNVNxbGhQUW5hNktQNGZncjlUaVFySEdkUm8vVkluTTFqMTNXdDNHZFFTN1c3RnpzeXIwT1ZJdTd2Q3d1dU0rZUVZWjRXQzFWZm52bmVCVFQvQm9obi9FRGVOSVZMKzVZcFNyUnZtNkpNdTJpS0N1MFNWS1ZkTnNVVTdZb3BwbW5QbW1LRzloMVR6TktlTXpMai84dmM1NUg3SE43eGtKdjJYZVNtZlErNWFkOUhidG9Qa0p0V0lUZHRIYmxwTHlBM3JVWnUybFdqT25ZRUdnWnBGMUlWUWRBMHN2cGgzRmFiOVVEV2pEUjhhV0R5TG1MSSt1cEVSNTIxdGNvZnhYOTE0Z3NIY21taXA3c2lGNXZpTHEvYkZqNDgzZTZyajVwRzNiRFYrTWFSOGpBZVJub2NtdEJaK2MzaHYrMU4zUzZhN2pLcU11Z0JGVXdLd0FCbDdVQUMwenJiQ2FUMW1xZjQ4Z2RnWElaNHprcER0VlNmTzRhbTcrVjVYL2V4T2ZHK3grM0dMcmRjZDNrSldkWU5jbVAyOE45U1pLcnJIK1V0clZRblI2d3JKNDlWYXhoREtyd291cjZTbEh1MHRSdS9LS215OGw2VTFzcm5rNUNiUFlNYlFsdTI3bUd3STB4cHlpVWVYbE9sS0QzVVVvNnlReXh2S2NvODRKU0xDMXFHeExnT2RROXFhOFRwb1hvWUd3c2hocUcwdlJCd1NDbGRGZCsweW5meEhxdHIyT2o0eFJYaDZYcHlFaEdmNGlyN1VmQlUxMGI5NkE3YXZHYmRNb01wVmFxbis0eFBzYS9iOWxGWmFhU09zeGUzVkFmWE5Pc2FPUlhUVCtScjRIUnZPR2pkQXoxVWZEUkJJMVUxeCtqR0tHTTBsalhsM3dSME1WWit3MmpWWXZzOTNFK2RwRldzdVV1WTdKc1Q5K0MwdS8wcSs3V2NXMGJXL2RjR3ZXM2tpcDhqTWI4dEN2dzdCMkszWkEzVU81T0JHQXZJV2RBWXhoWW1keGl1ZzIzRWJmWS9KcWYvMzRhRlJYSlhPeHE3ZWVyRDFaTlJKWGZaOHJqTFRYWloxNk0yUjlWT0d2c0lqUzBQTitiWTRYSXN0c1JnUWJiK3dmOHg3Z0YzYVZFQzRORElaWmlJMm5TaG51cmg2aDZyc1cwNFZ4SUJkczJ4NDNRQWVnQXVRZDhjdTliekNZRDEzQ1BuTHNCOWNnaDJ5Q0g0bEJ5Q3o4aTVCZkE1T1FSZmtFTXdJSWRnbDV3N0FBL0lJWGhJRHNFZU9RU1B5TmtFK0pJY2dxL0lJWWpKSVVqSXVRM3dtQnlDSitRUWZFME93VGRHcms1ay9wWUgyUUQ2enFLYlFLbWRHaHphT0dSR3JrM1krenhZOW9GRlpCOWFST3FSa2VzVDZsTWVMUFY3aTBqOXdTSlNmelJ5WTBMOWlRZEwvZGtpVW4reGlOUm54cGVaSXltdkRwN3pqZzcrQkpmcXJWNEFBQUFBQVFBQi8vOEFEM2ljblZWTmFCdFhFSjZadHoveVNscjk3VDdKc3JLeVZ0SXFST0FrK3JHRGc1MjFMV3FJRHlsV0lIWmlqR21Ua0JBQ2FVamFIZ0tsUFpWUWt0SkE2TUdIbmtvcEZCSktMaVhRUTRQSklZZFFRazQ5aFJKNjdDR1U5QkM1c3lzWktiU25pdFhNdkpuOTNzeWJOek1MdEx1NysxQjhUN3VRaGlxODd4c0dLb2lMQlZTT3JkenozbDN6SlNHcXJGTk9hUWdndWpvS1lVQm53dC9IRXF0UXdCbCtSVkh3QkROVXV1SEx5K3UrdERJRXhYMFQ0NW1xVllsSHgzUklVenFTcUdQSjFleVVKWStpUFZOcVRMZFRMYS9Xa0t6UnlpVzlYWFk5MWt3M1Jmek5iWHR5MHQ0ZXd5Y0JYOWpZV09odGJiY0RUbmNkdTNmSG5od2JtN1R4c3UxY1pOT2RoWTN0N1kwRnZMeXdBY0daL3Naeklnb09UTUVSdjEwcmtxcmwwMFFpQXNRUkw0SUFRa0ZuK0tnQUNLZEFWYlV1YUpxaGRqeXY3SlZrUlpmMXFtMXBlc24xYXUzVzlFd3ppS3d2TldRMnhVUUU1aEVsbnBObTcwWENRbWxXS2lGN3pwU2xkNlI1TzF3elBic2NTZ0Y5M21jTStsblM5VXVoR0ZJT2lILzRpcjZDS0dnL0dpcnVyNk8wZE5UQzFHVHhwV24yVHVaY040Y2ZHNDdSK3l0cE9VU09sUXhnQW1EM3Zsam5zeWRnQmpyZyszTXpTUklLTG9KQ2doUnhBWVJLUWowUEt2dFFnYk5GZWhkMDNWZ0NSTzBrSnlHcWRXem5hTWF1dHB1UmJMM2FibmwxZExWOUdGeFpZenJUbXNLeXEydEZsSTJaZWVTYjR6U1l1R2R1dCtiVld0WXljWXBhOCtRZ3ZqSWlseUpHU0c3UGJ4eitmRGtTTzY0a1ZhZDY1SUNjS00rR2hsd2w3U2FUK096cXpoODdWME95dW9jeDhKUERKNmMraWh0SGhPN2xuYlNkanlWOXp3cXNVZGVPRmZJSGNwZXZQN3BHVng2L2ZIeUZyajBLY2hEYy8ydnhqWWpCUWM3QXpvTTVWSFZjWExsbmNEbFBRd1FGUmpnTkpIUkJXNkNyUWcreW9RbFZPdythSWpUbFBDakF6eG9JZ1YzT2lpRTZFeXYzb293K3pHakNDRjBBblZUUzFRdU1vejZPaGppQlJIMGdjWi84VDQvcjYzN1V5c3BhdStHMW0yTzVPbktlYTF5Tk0wRUpsQnBaQnhPb2xkMmFWeDcwVTVPYmFRNWJ4M0M2MmNoS080T2FleEM5WU4wb1lraWtKZEtiUzcxRGkxdTR1WVJQeTA1RTBTYzBuVVE4MWp0VWJiV3ErTFRhVWl1YUxwVG9wNzNadUJmL014NmZZM1lITHpLZGkrUEsvUUdXbWFta0dZMmlWZTJEYitrTUpTV0dTWVl5TWdDRXlHQ0x3WjFrK0U0U1VJU0tYK0lxSjZSVFNqaFVJSndwQk02RXpCZzZKQ2loRGdkRmN6QWxzcW0zTWlEcGcySFVyUnNqQjF2Y29sLzJvZ3FNNnlNVzNBd2FmcTlIWXBEMkUwRytsN2hzb3RDeE01U3E0N0I2eGZxd0pISHpYM1VXN25NNjNHY2NhbjVsZUppZ21hakx2UldsRGtKV3BwSzZCakdNQmNkeVRiUWNiTXdqZDlLSUwveWhlM04xOWVhM0FjSFRRNzkwYTZCazBudjZIekd3enl0MGc4UFBRdVNCVEJrcTllZUZPcGdYK29nczN1UFo4WVYwSExuS3d0Zlc1S1NGSHhxRnlHc3pXY0FYaGFUNWVuU3h0eit0MFdlOHZ3VkZ2MEE4OGhGNDFuTWV1VlFCbCtPeFZESm14UzJSZU10dHRjR1g1N0tJMit6cXJpd1VKUDUyL0M2N3l4dS9tK2s4L3BSUG0vdG5lMU96cy9qcjdHQjJzYStIdEJhZXBRd0wvandJSFFsNFVnY2ZIMVFBejBSUVVWWGxCRE5GN1lLcXFNdmp1WGdNb1ZqSWxjZmRUREtXalV0ZGdTZ2FZeHhQUXdhZkZkZmpMMG83cEtWUWt4clIwMDFaY0t3MzMxbE9RUVovV2d2V1F4MSs2ZXgzK0RuYlo3MW5mZjRQMW1Nenp3QUFlSnhqWUdSZ1lBQmluWDB2OThmejIzeGw0R1orQVJSaE9LY1pVUU9oRld6Ky8vKy9rWGtWTXcrUXk4SEFCQklGQUdycERMd0FBQUI0bkdOZ1pHQmdEdnFmeFJERi9JS0I0ZjlmNXRVTVFCRVV3QU1BaktJRnZIaWNZMzdCd01DOGlvR0JNUldJdndEWmtVQzhBSWdGb1d3UUxtQmdZSW9BNGowTURBQ3RoUVpLQUFBQUFBQUFBQUJxQU1vQTZBRnFBalFDZWdLZUF1QURFQU5HQTUwQUFBQUJBQUFBREFCRkFBTUFBQUFBQUFJQUVnQWZBRzRBQUFCYkNaRUFBQUFBZUp4MWo4dE93a0FZaGM4Z2FJREVHUFVCSmk0TXhGQ2cwUTBMUTBLRWpYSEJRaE4zcFpTMnBIVElkSUR3QUw2RGF4L0c1L0swblJEanBjM01mUC81N3dETzhBbUI4cnZqS1ZtZ1RxdmtDazV3Yi9tSStvUGxLdm5KY28yZUY4c04zT0RWY2hNWGVLTlBWT3UwbG5pM0xIQXVLcFlyT0JXWGxvK29YMW11a204dDEzQXN4cFliZUJhUGxwdTRGaDhqdGQ3ck9JeU1iSTNhMHUzMVhUbmJTMFVwVHIxRWVoc1RLWjNKb1Z5bzFBUkpvaHhmclhhaDZzUytTck5wRUc0U1R4L3NBL1NkM2lSSUErMlpZSjRYekxhaGE4eENMclJheWJFdEpkZGFMUVBmT0pFeDYwRzMrNzBGUmxCWVl3K05HQ0VpR0VpMHFMYjV1dWloejF0aXhnakp5RElxUmdvUENSVVBHMlpFaFNlalBlUlowRXFwQm94SXlBNTgzaXZzbUtuUVliWmZSR1NZTWlaa2hZUjE5Qi8rMzBxZjFYcVlNQy9sMGN6TCs4d1BFMmJZTXNlbGFqaEhQb3N1ZWt1TWYwd2x1WFh1VzFMeHFUdkY3b2JxQUYzKy8yenhCVnplZHVRQUFIaWNiWXpiQ3NNZ0VFUjNXelZwWWo5bG9ma2swWlZJdldFc0pYL2ZVbDk3SG1iZ0RBeGNZTERBZnpRQVhsR2dSSVVUem5qREJWZlVlSmVoYzNwTXRxVEV1WXVRZlZFMW1wTTJ2WE9zWkVPemtaMjBPOXZuK2t2aVZQdXB4cUpIRGFlOU9UcjUwdDZtdWJrWDR1eG9FOS9uRjhBSDRiVWsyRXU0QU1oU1dMRUJBWTVadVFnQUNBQmpJTEFCSTBTd0F5TndzZ1FvQ1VWU1JMSUtBZ2Nxc1FZQlJMRWtBWWhSV0xCQWlGaXhCZ05Fc1NZQmlGRll1QVFBaUZpeEJnRkVXVmxaV2JnQi80V3dCSTJ4QlFCRUFBQT1cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQnpkR0Z1WkdGc2IyNWxQU0p1YnlJL1BnbzhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBnbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4dFpYUmhaR0YwWVQ1RGIzQjVjbWxuYUhRZ0tFTXBJREl3TVRJZ1lua2diM0pwWjJsdVlXd2dZWFYwYUc5eWN5QkFJR1p2Ym5SbGJHeHZMbU52YlR3dmJXVjBZV1JoZEdFK0NqeGtaV1p6UGdvOFptOXVkQ0JwWkQwaWQyZHZMV2xqYjI1eklpQm9iM0pwZWkxaFpIWXRlRDBpTVRBd01DSWdQZ284Wm05dWRDMW1ZV05sSUdadmJuUXRabUZ0YVd4NVBTSjNaMjh0YVdOdmJuTWlJR1p2Ym5RdGQyVnBaMmgwUFNJME1EQWlJR1p2Ym5RdGMzUnlaWFJqYUQwaWJtOXliV0ZzSWlCMWJtbDBjeTF3WlhJdFpXMDlJakV3TURBaUlHRnpZMlZ1ZEQwaU9EVXdJaUJrWlhOalpXNTBQU0l0TVRVd0lpQXZQZ284YldsemMybHVaeTFuYkhsd2FDQm9iM0pwZWkxaFpIWXRlRDBpTVRBd01DSWdMejRLUEdkc2VYQm9JR2RzZVhCb0xXNWhiV1U5SW1aaGMzUXRabTl5ZDJGeVpDSWdkVzVwWTI5a1pUMGlKaU40WlRneE56c2lJR1E5SWswNE5qWWdNemMwY1RFMExURXdJREUwTFRJMGRDMHhOQzB5TW13dE16Y3lMVEkwT0hFdE1qSXRNVFF0TXpjdE5uUXRNVFVnTXpac01DQTBPREp4TUNBeU9DQXhOU0F6Tm5Rek55MDJlaUJ0TFRRMU5DQXdjVEUwTFRFd0lERTBMVEkwZEMweE5DMHlNbXd0TXpZd0xUSTBPSEV0TWpBdE1UUXRNell0Tm5RdE1UWWdNelpzTUNBME9ESnhNQ0F5T0NBeE5pQXpOblF6TmkwMmVpSWdhRzl5YVhvdFlXUjJMWGc5SWpnNE1DSWdMejRLUEdkc2VYQm9JR2RzZVhCb0xXNWhiV1U5SW5SdkxXVnVaQzB4SWlCMWJtbGpiMlJsUFNJbUkzaGxPREZoT3lJZ1pEMGlUVFF4TWlBek56UnhNVFF0TVRBZ01UUXRNalFnTUMweE1pMHhOQzB5TW13dE16WXlMVEl5T0hFdE1qSXRNVFF0TXpZdE5YUXRNVFFnTXpWc01DQTBOREp4TUNBeU5pQXhOQ0F6TlhRek5pMDFlaUJ0TVRFMElESTJPSEUzTkNBd0lEYzBMVFU0YkRBdE5EWTJjVEF0TlRndE56UXROVGd0TnpZZ01DMDNOaUExT0d3d0lEUTJObkV3SURVNElEYzJJRFU0ZWlJZ2FHOXlhWG90WVdSMkxYZzlJall3TUNJZ0x6NEtQR2RzZVhCb0lHZHNlWEJvTFc1aGJXVTlJbkJzWVhrdE1TSWdkVzVwWTI5a1pUMGlKaU40WlRnd1l6c2lJR1E5SWswME9EWWdNemMyY1RFMExURXdJREUwTFRJMklEQXRNVFF0TVRRdE1qUnNMVFF5T0MweU5qWnhMVEkwTFRFMkxUUXhMVFowTFRFM0lEUXdiREFnTlRFMGNUQWdNekFnTVRjZ05EQjBOREV0Tm5vaUlHaHZjbWw2TFdGa2RpMTRQU0kxTURBaUlDOCtDanhuYkhsd2FDQm5iSGx3YUMxdVlXMWxQU0pqYUdWamF5SWdkVzVwWTI5a1pUMGlKaU40WlRneE16c2lJR1E5SWswM09EWWdNek14YkRBdE1UYzNjVEF0TmpZdE5EY3RNVEUwZEMweE1UUXRORGRzTFRRMk5DQXdjUzAyTmlBd0xURXhOQ0EwTjNRdE5EY2dNVEUwYkRBZ05EWTBjVEFnTmpZZ05EY2dNVEUwZERFeE5DQTBOMncwTmpRZ01IRXpOU0F3SURZMUxURTBJRGd0TkNBeE1DMHhNM1F0TlMweE5td3RNamN0TWpkeExUWXROaTB4TXkwMkxUSWdNQzAxSURFdE1UTWdNeTB5TlNBemJDMDBOalFnTUhFdE16Y2dNQzAyTXkweU5uUXRNall0TmpOc01DMDBOalJ4TUMwek55QXlOaTAyTTNRMk15MHlObXcwTmpRZ01IRXpOeUF3SURZeklESTJkREkySURZemJEQWdNVFF5Y1RBZ055QTFJREV5YkRNMklETTJjVFlnTmlBeE15QTJJRE1nTUNBM0xUSWdNVEV0TkNBeE1TMHhObm9nYlRFeU9TQXlOek5zTFRRMU5DMDBOVFJ4TFRFekxURXpMVE15TFRFemRDMHpNaUF4TTJ3dE1qUXdJREkwTUhFdE1UTWdNVE10TVRNZ016SjBNVE1nTXpKc05qRWdOakZ4TVRNZ01UTWdNeklnTVROME16SXRNVE5zTVRRM0xURTBOeUF6TmpFZ016WXhjVEV6SURFeklETXlJREV6ZERNeUxURXpiRFl4TFRZeGNURXpMVEV6SURFekxUTXlkQzB4TXkwek1ub2lJR2h2Y21sNkxXRmtkaTE0UFNJNU1qZ3VOVGN4SWlBdlBnbzhaMng1Y0dnZ1oyeDVjR2d0Ym1GdFpUMGliV1Z1ZFNJZ2RXNXBZMjlrWlQwaUppTjRaVGd4WWpzaUlHUTlJazAyTlRBZ05EQXdjVEl5SURBZ016WXRNVFYwTVRRdE16VXRNVFV0TXpVdE16VXRNVFZzTFRZd01DQXdjUzB5TUNBd0xUTTFJREUxZEMweE5TQXpOU0F4TkNBek5TQXpOaUF4Tld3Mk1EQWdNSG9nYlMwMk1EQWdNVEF3Y1MweU1DQXdMVE0xSURFMWRDMHhOU0F6TlNBeE5DQXpOU0F6TmlBeE5XdzJNREFnTUhFeU1pQXdJRE0yTFRFMWRERTBMVE0xTFRFMUxUTTFMVE0xTFRFMWJDMDJNREFnTUhvZ2JUWXdNQzB6TURCeE1qSWdNQ0F6TmkweE5YUXhOQzB6TlMweE5TMHpOUzB6TlMweE5Xd3ROakF3SURCeExUSXdJREF0TXpVZ01UVjBMVEUxSURNMUlERTBJRE0xSURNMklERTFiRFl3TUNBd2VpSWdhRzl5YVhvdFlXUjJMWGc5SWpjd01DSWdMejRLUEdkc2VYQm9JR2RzZVhCb0xXNWhiV1U5SW1OdmJXMWxiblFpSUhWdWFXTnZaR1U5SWlZamVHVTRNREE3SWlCa1BTSk5Oemd4SURZMk1td3ROakkxSURCeExUSXhJREF0TXpjdE1UVjBMVEUyTFRNMmJEQXRNelkxY1RBdE1qRWdNVFl0TXpkME16Y3RNVFpzTVRVMklEQWdNQzA1SURrZ09TQTBOakFnTUhFeU1TQXdJRE0zSURFMmRERTJJRE0zYkRBZ016WTFjVEFnTWpFdE1UWWdNelowTFRNM0lERTFlaUJ0TUNBeE1EVnhOalVnTUNBeE1URXRORFowTkRZdE1URXhiREF0TXpZMWNUQXROalV0TkRZdE1URXhkQzB4TVRFdE5EWnNMVFF4TmlBd0xURTFOaTB4TlRZZ01DQXhOVFl0TlRNZ01IRXROalVnTUMweE1URWdORFowTFRRMklERXhNV3d3SURNMk5YRXdJRFkxSURRMklERXhNWFF4TVRFZ05EWnNOakkxSURCNklpQm9iM0pwZWkxaFpIWXRlRDBpT1RNNElpQXZQZ284WjJ4NWNHZ2daMng1Y0dndGJtRnRaVDBpYUdWc2NDMWphWEpqYkdWa0lpQjFibWxqYjJSbFBTSW1JM2hsT0RCbU95SWdaRDBpVFRVd01DQTRNbXd3SURFd04zRXdJRGd0TlNBeE0zUXRNVE1nTld3dE1UQTNJREJ4TFRnZ01DMHhNeTAxZEMwMUxURXpiREF0TVRBM2NUQXRPQ0ExTFRFemRERXpMVFZzTVRBM0lEQnhPQ0F3SURFeklEVjBOU0F4TTNvZ2JURTBNeUF6TnpWeE1DQTBPUzB6TVNBNU1YUXROemNnTmpVdE9UVWdNak54TFRFek5pQXdMVEl3TnkweE1Ua3RPQzB4TXlBMExUSXpiRGMwTFRVMmNUUXRNeUF4TVMweklEa2dNQ0F4TkNBM0lETXdJRE00SURRNElEVXhJREU1SURFeklEUTRJREV6SURJM0lEQWdORGd0TVRWME1qRXRNek54TUMweU1TMHhNUzB6TkhRdE16Z3RNalZ4TFRNMUxURTJMVFkwTFRRNGRDMHlPUzAzTUd3d0xUSXdjVEF0T0NBMUxURXpkREV6TFRWc01UQTNJREJ4T0NBd0lERXpJRFYwTlNBeE0zRXdJREV4SURFeUlESTRkRE13SURJNGNURTRJREV3SURJM0lERTJkREkySURJd0lESTFJREkzSURFMklETTBJRGNnTkRWNklHMHlNVFF0TVRBM2NUQXRNVEUzTFRVM0xUSXhOWFF0TVRVMkxURTFOaTB5TVRVdE5UY3RNakUxSURVM0xURTFOaUF4TlRZdE5UY2dNakUxSURVM0lESXhOU0F4TlRZZ01UVTJJREl4TlNBMU55QXlNVFV0TlRjZ01UVTJMVEUxTmlBMU55MHlNVFY2SWlCb2IzSnBlaTFoWkhZdGVEMGlPRFUzTGpFME15SWdMejRLUEdkc2VYQm9JR2RzZVhCb0xXNWhiV1U5SW1Ob1pXTnJMV1Z0Y0hSNUlpQjFibWxqYjJSbFBTSW1JM2hsT0RFME95SWdaRDBpVFRZeU5TQTNNRGRzTFRRMk5DQXdjUzB6TnlBd0xUWXpMVEkyZEMweU5pMDJNMnd3TFRRMk5IRXdMVE0zSURJMkxUWXpkRFl6TFRJMmJEUTJOQ0F3Y1RNM0lEQWdOak1nTWpaME1qWWdOak5zTUNBME5qUnhNQ0F6TnkweU5pQTJNM1F0TmpNZ01qWjZJRzB4TmpFdE9EbHNNQzAwTmpSeE1DMDJOaTAwTnkweE1UUjBMVEV4TkMwME4yd3RORFkwSURCeExUWTJJREF0TVRFMElEUTNkQzAwTnlBeE1UUnNNQ0EwTmpSeE1DQTJOaUEwTnlBeE1UUjBNVEUwSURRM2JEUTJOQ0F3Y1RZMklEQWdNVEUwTFRRM2REUTNMVEV4TkhvaUlHaHZjbWw2TFdGa2RpMTRQU0kzT0RVdU56RTBJaUF2UGdvOFoyeDVjR2dnWjJ4NWNHZ3RibUZ0WlQwaVkybHlZMnhsTFdWdGNIUjVJaUIxYm1samIyUmxQU0ltSTNobE9ERTJPeUlnWkQwaVRUUXlPU0EyTlRSeExUZ3pJREF0TVRVeUxUUXhkQzB4TVRBdE1URXdMVFF4TFRFMU1pQTBNUzB4TlRJZ01URXdMVEV4TUNBeE5USXROREVnTVRVeUlEUXhJREV4TUNBeE1UQWdOREVnTVRVeUxUUXhJREUxTWkweE1UQWdNVEV3TFRFMU1pQTBNWG9nYlRReU9TMHpNRFJ4TUMweE1UY3ROVGN0TWpFMWRDMHhOVFl0TVRVMkxUSXhOUzAxTnkweU1UVWdOVGN0TVRVMklERTFOaTAxTnlBeU1UVWdOVGNnTWpFMUlERTFOaUF4TlRZZ01qRTFJRFUzSURJeE5TMDFOeUF4TlRZdE1UVTJJRFUzTFRJeE5Yb2lJR2h2Y21sNkxXRmtkaTE0UFNJNE5UY3VNVFF6SWlBdlBnbzhaMng1Y0dnZ1oyeDVjR2d0Ym1GdFpUMGlZMmx5WTJ4bElpQjFibWxqYjJSbFBTSW1JM2hsT0RFMU95SWdaRDBpVFRnMU55QXpOVEJ4TUMweE1UY3ROVGN0TWpFMWRDMHhOVFl0TVRVMkxUSXhOUzAxTnkweU1UVWdOVGN0TVRVMklERTFOaTAxTnlBeU1UVWdOVGNnTWpFMUlERTFOaUF4TlRZZ01qRTFJRFUzSURJeE5TMDFOeUF4TlRZdE1UVTJJRFUzTFRJeE5Yb2lJR2h2Y21sNkxXRmtkaTE0UFNJNE5UY3VNVFF6SWlBdlBnbzhaMng1Y0dnZ1oyeDVjR2d0Ym1GdFpUMGlhVzVtYnlJZ2RXNXBZMjlrWlQwaUppTjRaVGd3TVRzaUlHUTlJazB6TlRjZ01UQXdiREF0TnpGeE1DMHhOUzB4TVMweU5YUXRNalV0TVRGc0xUSTROaUF3Y1MweE5TQXdMVEkxSURFeGRDMHhNU0F5Tld3d0lEY3hjVEFnTVRVZ01URWdNalYwTWpVZ01URnNNellnTUNBd0lESXhOQzB6TmlBd2NTMHhOU0F3TFRJMUlERXhkQzB4TVNBeU5Xd3dJRGN4Y1RBZ01UVWdNVEVnTWpWME1qVWdNVEZzTWpFMElEQnhNVFVnTUNBeU5TMHhNWFF4TVMweU5Xd3dMVE15TVNBek5pQXdjVEUxSURBZ01qVXRNVEYwTVRFdE1qVjZJRzB0TnpFZ05qUXpiREF0TVRBM2NUQXRNVFV0TVRFdE1qVjBMVEkxTFRFeGJDMHhORE1nTUhFdE1UVWdNQzB5TlNBeE1YUXRNVEVnTWpWc01DQXhNRGR4TUNBeE5TQXhNU0F5TlhReU5TQXhNV3d4TkRNZ01IRXhOU0F3SURJMUxURXhkREV4TFRJMWVpSWdhRzl5YVhvdFlXUjJMWGc5SWpNMU55NHhORE1pSUM4K0Nqd3ZabTl1ZEQ0S1BDOWtaV1p6UGdvOEwzTjJaejQ9XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qLS0tIEljb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3dnby1pY29ucyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCdzdmcnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIEF2YWlsYWJsZSBpY29uczogKi9cXG4ud2dvLWljb24tZmFzdC1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6ICdcXFxcZTgxNyc7IH1cXG4ud2dvLWljb24tdG8tZW5kOmJlZm9yZSB7IGNvbnRlbnQ6ICdcXFxcZTgxYSc7IH1cXG4ud2dvLWljb24tcGxheTpiZWZvcmUgeyBjb250ZW50OiAnXFxcXGU4MGMnOyB9XFxuLndnby1pY29uLWNoZWNrOmJlZm9yZSB7IGNvbnRlbnQ6ICdcXFxcZTgxMyc7IH1cXG4ud2dvLWljb24tbWVudTpiZWZvcmUgeyBjb250ZW50OiAnXFxcXGU4MWInOyB9XFxuLndnby1pY29uLWNvbW1lbnQ6YmVmb3JlIHsgY29udGVudDogJ1xcXFxlODAwJzsgfVxcbi53Z28taWNvbi1oZWxwLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogJ1xcXFxlODBmJzsgfVxcbi53Z28taWNvbi1jaGVjay1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiAnXFxcXGU4MTQnOyB9XFxuLndnby1pY29uLWNpcmNsZS1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiAnXFxcXGU4MTYnOyB9XFxuLndnby1pY29uLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAnXFxcXGU4MTUnOyB9XFxuLndnby1pY29uLWluZm86YmVmb3JlIHsgY29udGVudDogJ1xcXFxlODAxJzsgfVxcblxcbi8qLS0tIC9JY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLyotLS0gQmFzaWMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ud2dvLXBsYXllci1tYWluIHtcXG5cXHRmb250LWZhbWlseTogQ2FsaWJyaSwgVGFob21hLCBBcmlhbDtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxuXFx0LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogRm9yIHNvbWUgQW5kcm9pZHMgKi9cXG59XFxuXFxuLndnby1wbGF5ZXItbWFpbjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0Y2xlYXI6IGJvdGg7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qLS0tIC9CYXNpYyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLyotLS0gUmVnaW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ud2dvLXBsYXllci1sZWZ0LCAud2dvLXBsYXllci1jZW50ZXIsIC53Z28tcGxheWVyLXJpZ2h0ICB7XFxuXFx0ZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi53Z28tcGxheWVyLWNlbnRlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi53Z28tcGxheWVyLWxlZnQtd3JhcHBlciwgLndnby1wbGF5ZXItcmlnaHQtd3JhcHBlciAge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qLS0tIC9SZWdpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qLS0tIFR3byBjb2x1bW5zIG1vZGlmaWNhdG9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi53Z28tdHdvY29scyAud2dvLXBsYXllci1sZWZ0LCAud2dvLXR3b2NvbHMgIC53Z28tcGxheWVyLXJpZ2h0ICB7XFxuXFx0d2lkdGg6IDMwJTtcXG59XFxuXFxuLndnby10d29jb2xzIC53Z28tcGxheWVyLWNlbnRlciB7XFxuXFx0d2lkdGg6IDcwJTtcXG59XFxuXFxuLyotLS0gL1R3byBjb2x1bW5zIG1vZGlmaWNhdG9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qLS0tIEJvYXJkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ud2dvLXBsYXllci1ib2FyZCB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ud2dvLWJvYXJkIHtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NFQjA1MztcXG4gICAgYm9yZGVyLXRvcDogI0YwRTdBNyBzb2xpZCAxcHg7XFxuICAgIGJvcmRlci1yaWdodDogI0QxQTk3NCBzb2xpZCAxcHg7XFxuICAgIGJvcmRlci1sZWZ0OiAjQ0NCNDY3IHNvbGlkIDFweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogIzY2NTkyNiBzb2xpZCAzcHg7XFxuICAgIC8qYm9yZGVyLXJpZ2h0OiAjNjY1OTI2IHNvbGlkIDNweDsqL1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi8qLS0tIC9Cb2FyZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLyotLS0gQm94IHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ud2dvLWJveC13cmFwcGVyIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDIyNiwyMjYsMjI2LDAuNSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwwLjUpO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ud2dvLWJveC10aXRsZSB7XFxuXFx0bWFyZ2luOiAwIDEwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDQwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKi0tLSAvQm94IHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4vKi0tLSBQbGF5ZXIgYm94IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ud2dvLXBsYXllci13cmFwcGVyIC53Z28tYm94LXRpdGxlOjphZnRlciB7XFxuXFx0Y29udGVudDogJyAnO1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdG1hcmdpbi1yaWdodDogMnB4O1xcblxcdHdpZHRoOiAxOHB4O1xcblxcdGhlaWdodDogMThweDtcXG5cXHRib3JkZXItcmFkaXVzOiA5cHg7XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMTI3LCAxMjcsIDEyNywgMC4zKTtcXG59XFxuXFxuLndnby1wbGF5ZXItd3JhcHBlci53Z28tYmxhY2sgLndnby1ib3gtdGl0bGU6OmFmdGVyIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMzUsMzYsMzkpO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICByZ2JhKDM1LDM2LDM5LDEpIDAlLHJnYmEoMCwwLDAsMSkgMTAwJSk7XFxufVxcblxcbi53Z28tcGxheWVyLXdyYXBwZXIud2dvLXdoaXRlIC53Z28tYm94LXRpdGxlOjphZnRlciB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI0NiwyNDYsMjQ2LDEpIDQ3JSxyZ2JhKDIzNywyMzcsMjM3LDEpIDEwMCUpO1xcbn1cXG5cXG4ud2dvLXBsYXllci1pbmZvIHtcXG5cXHRwYWRkaW5nOiAwIDIlO1xcbn1cXG5cXG4ud2dvLXBsYXllci1pbmZvLWJveC13cmFwcGVyIHtcXG5cXHR3aWR0aDogMzMuMyU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4ud2dvLXBsYXllci1pbmZvLWJveCB7XFxuXFx0cGFkZGluZzogMHB4IDFweDtcXG5cXHRtYXJnaW46IDAgMyU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwwLjMpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndnby1wbGF5ZXItaW5mby10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAxMXB4O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIHJpZ2h0IGFuZCBsZWZ0IG1vZGlmaWNhdGlvbnMqL1xcblxcbi53Z28tcGxheWVyLWxlZnQgLndnby1pbmZvYm94LCAud2dvLXBsYXllci1yaWdodCAud2dvLWluZm9ib3gge1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRsZWZ0OiAxMHB4O1xcbn1cXG5cXG4ud2dvLXBsYXllci1yaWdodCAud2dvLXBsYXllci13cmFwcGVyLCAud2dvLXBsYXllci1sZWZ0IC53Z28tcGxheWVyLXdyYXBwZXIge1xcblxcdGhlaWdodDogODVweDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4vKiB0b3AgYW5kIGJvdHRvbSBtb2RpZmljYXRpb25zICovXFxuXFxuLndnby1wbGF5ZXItdG9wIC53Z28tcGxheWVyLWluZm8sIC53Z28tcGxheWVyLWJvdHRvbSAud2dvLXBsYXllci1pbmZvIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDQwJTtcXG5cXHRyaWdodDogMDtcXG5cXHR0b3A6IDRweDtcXG5cXHRib3R0b206IDRweDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ud2dvLXBsYXllci10b3AgLndnby1wbGF5ZXItd3JhcHBlciwgLndnby1wbGF5ZXItYm90dG9tIC53Z28tcGxheWVyLXdyYXBwZXIge1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ud2dvLXBsYXllci10b3AgLndnby1wbGF5ZXItd3JhcHBlci53Z28tYmxhY2sge1xcblxcdGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xcbn1cXG5cXG4ud2dvLXBsYXllci10b3AgLndnby1pbmZvYm94IC53Z28tYm94LXRpdGxlLCAud2dvLXBsYXllci1ib3R0b20gLndnby1pbmZvYm94IC53Z28tYm94LXRpdGxlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDQwJTtcXG5cXHRsZWZ0OiAwO1xcblxcdG1hcmdpbjogMCA1cHg7XFxuXFx0ei1pbmRleDogNTAwO1xcbn1cXG5cXG4ud2dvLXBsYXllci10b3AgLndnby1wbGF5ZXItd3JhcHBlciAud2dvLWJveC10aXRsZTo6YWZ0ZXIge1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdG1hcmdpbi1yaWdodDogN3B4O1xcbn1cXG5cXG4vKiBTIG1vZGlmaWNhdGlvbiAqL1xcblxcbi53Z28tc21hbGwgLndnby1wbGF5ZXItdG9wIC53Z28tcGxheWVyLWluZm8sIC53Z28tc21hbGwgLndnby1wbGF5ZXItYm90dG9tIC53Z28tcGxheWVyLWluZm8sXFxuLndnby14c21hbGwgLndnby1wbGF5ZXItdG9wIC53Z28tcGxheWVyLWluZm8sIC53Z28teHNtYWxsIC53Z28tcGxheWVyLWJvdHRvbSAud2dvLXBsYXllci1pbmZvICB7XFxuXFx0d2lkdGg6IDMwJTtcXHRcXG59XFxuXFxuLndnby1zbWFsbCAud2dvLXBsYXllci10b3AgLndnby1pbmZvYm94IC53Z28tYm94LXRpdGxlLCAud2dvLXNtYWxsICAud2dvLXBsYXllci1ib3R0b20gLndnby1pbmZvYm94IC53Z28tYm94LXRpdGxlLFxcbi53Z28teHNtYWxsIC53Z28tcGxheWVyLXRvcCAud2dvLWluZm9ib3ggLndnby1ib3gtdGl0bGUsIC53Z28teHNtYWxsICAud2dvLXBsYXllci1ib3R0b20gLndnby1pbmZvYm94IC53Z28tYm94LXRpdGxlIHtcXG5cXHRyaWdodDogMzAlO1xcbn1cXG5cXG4ud2dvLXNtYWxsIC53Z28tcGxheWVyLWluZm8tYm94LXdyYXBwZXIsXFxuLndnby14c21hbGwgLndnby1wbGF5ZXItaW5mby1ib3gtd3JhcHBlciB7XFxuXFx0d2lkdGg6IDUwJTtcXG59XFxuXFxuLndnby1zbWFsbCAud2dvLXBsYXllci1pbmZvLWJveC13cmFwcGVyOmxhc3QtY2hpbGQsXFxuLndnby14c21hbGwgLndnby1wbGF5ZXItaW5mby1ib3gtd3JhcHBlcjpsYXN0LWNoaWxkIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBYUyBtb2RpZmljYXRpb24gKi9cXG5cXG4ud2dvLXhzbWFsbCAud2dvLXBsYXllci1pbmZvLXRpdGxlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud2dvLXhzbWFsbCAud2dvLXBsYXllci13cmFwcGVyIHsgXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2dvLXhzbWFsbCAud2dvLWluZm9ib3h7IFxcblxcdG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLndnby14c21hbGwgLndnby1ib3gtdGl0bGUgeyBcXG5cXHRmb250LXNpemU6IDE1cHg7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ud2dvLXhzbWFsbCAud2dvLXBsYXllci13cmFwcGVyLndnby1ibGFjayB7XFxuXFx0Ym9yZGVyLXRvcDogMDtcXG5cXHRib3JkZXItbGVmdC13aWR0aDogMXB4O1xcbn1cXG5cXG4ud2dvLXhzbWFsbCAud2dvLXBsYXllci13cmFwcGVyIC53Z28tYm94LXRpdGxlOjphZnRlciB7XFxuXFx0Y29udGVudDogJyAnO1xcblxcdG1hcmdpbi10b3A6IDdweDtcXG5cXHR3aWR0aDogMTRweDtcXG5cXHRoZWlnaHQ6IDE0cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4vKi0tLSAvUGxheWVyIGJveCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLyotLS0gQ29tbWVudHMgYm94IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi53Z28tY29tbWVudHMtd3JhcHBlciB7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0bWFyZ2luOiAwIDAgMCAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLndnby1jb21tZW50cy1jb250ZW50IHtcXG5cXHRwYWRkaW5nOiAzcHggNXB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsMC4zKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi53Z28tY29tbWVudHMtY29udGVudCBwIHtcXG5cXHRmb250LXNpemU6IDAuOWVtO1xcblxcdG1hcmdpbjogMC41ZW0gMDtcXG59XFxuXFxuLndnby1oZWxwIHsgXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDIyNiwgMjE2LCAwLjkwKTtcXG5cXHRwYWRkaW5nOiAxcHggN3B4O1xcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLndnby1ub3RpZmljYXRpb24geyBcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2LCAxNiwgMTYsIDAuOTUpO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAxcHggN3B4O1xcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLndnby1jb21tZW50Ym94IC53Z28tYm94LXRpdGxlIHtcXHRcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxufVxcblxcbi53Z28tY29tbWVudGJveCAud2dvLWJveC10aXRsZTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICdcXFxcZTgwMCc7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJ3Z28taWNvbnNcXFwiO1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcblxcdGZvbnQtc2l6ZTogMC45ZW07XFxuXFx0cGFkZGluZy10b3A6IDRweDtcXG5cXHR3aWR0aDogMjJweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53Z28tY29tbWVudGJveC53Z28tZ2FtZWluZm8gLndnby1ib3gtdGl0bGU6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnXFxcXGU4MDEnO1xcblxcdHBhZGRpbmctdG9wOiAycHg7XFxufVxcblxcbi53Z28tY29tbWVudHMtbmljayB7XFxuXFx0Y29sb3I6IHJnYmEoMCwwLDAsMC43NSk7XFxufVxcblxcbmEud2dvLW1vdmUtbGluayB7IFxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxuXFx0Ym9yZGVyLWJvdHRvbToxcHggZG90dGVkOyBcXG59XFxuXFxuLyogcmlnaHQgYW5kIGxlZnQgbW9kaWZpY2F0aW9ucyAqL1xcblxcbi53Z28tcGxheWVyLXJpZ2h0IC53Z28tY29tbWVudHMtY29udGVudCwgLndnby1wbGF5ZXItbGVmdCAud2dvLWNvbW1lbnRzLWNvbnRlbnQge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAxMHB4O1xcblxcdHJpZ2h0OiAxMHB4O1xcblxcdGJvdHRvbTogMTBweDtcXG5cXHR0b3A6IDQwcHg7XFxufVxcblxcbi53Z28tcGxheWVyLXJpZ2h0IC53Z28tY29tbWVudGJveCwgLndnby1wbGF5ZXItbGVmdCAud2dvLWNvbW1lbnRib3gge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0bGVmdDogMTBweDtcXG5cXHR0b3A6IDE3MHB4O1xcbn1cXG5cXG4vKiB0b3AgYW5kIGJvdHRvbSBtb2RpZmljYXRpb25zICovXFxuXFxuLndnby1wbGF5ZXItdG9wIC53Z28tY29tbWVudHMtY29udGVudCwgLndnby1wbGF5ZXItYm90dG9tIC53Z28tY29tbWVudHMtY29udGVudCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDQwcHg7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRcXG59XFxuXFxuLyogVE9ETzogaGFuZGxlIHRvbyBsb25nIHRpdGxlICovXFxuLndnby1wbGF5ZXItdG9wIC53Z28tY29tbWVudGJveCAud2dvLWJveC10aXRsZSwgLndnby1wbGF5ZXItYm90dG9tIC53Z28tY29tbWVudGJveCAud2dvLWJveC10aXRsZSB7IFxcblxcdHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuXFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAtNTBweDtcXG5cXHR0b3A6IDU1cHg7XFxufVxcblxcbi53Z28tcGxheWVyLXRvcCAud2dvLWNvbW1lbnRzLXdyYXBwZXIsIC53Z28tcGxheWVyLWJvdHRvbSAud2dvLWNvbW1lbnRzLXdyYXBwZXIge1xcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxuXFx0aGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLyogZ2FtZSBpbmZvIHRhYmxlICovXFxuXFxuLndnby1jb21tZW50Ym94IC53Z28taW5mby1saXN0IHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLndnby1jb21tZW50Ym94IC53Z28taW5mby10aXRsZSB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2FwdGlvbjtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMyk7XFxuXFx0cGFkZGluZzogMnB4IDA7XFxufVxcblxcbi53Z28tY29tbWVudGJveCAud2dvLWluZm8taXRlbSB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG5cXG4ud2dvLWNvbW1lbnRib3ggLndnby1pbmZvLWxhYmVsLCAud2dvLWNvbW1lbnRib3ggLndnby1pbmZvLXZhbHVlIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMyk7XFxuXFx0cGFkZGluZzogMnB4IDE1cHggMnB4IDA7XFxufVxcblxcbi53Z28tY29tbWVudGJveCAud2dvLWluZm8tbGFiZWwge1xcblxcdGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ud2dvLWNvbW1lbnRib3ggLndnby1pbmZvLXZhbHVlIHtcXG5cXHRjb2xvcjogIzRjNGM0YztcXG59XFxuXFxuLyogaW4gZ2FtZWluZm8sIGxhc3Qgcm93IGlzIHdpdGhvdXQgYm9yZGVyKi9cXG4ud2dvLWNvbW1lbnRib3gud2dvLWdhbWVpbmZvIC53Z28taW5mby1pdGVtOmxhc3QtY2hpbGQgLndnby1pbmZvLWxhYmVsLCAud2dvLWNvbW1lbnRib3gud2dvLWdhbWVpbmZvIC53Z28taW5mby1pdGVtOmxhc3QtY2hpbGQgLndnby1pbmZvLXZhbHVlIHtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4vKi0tLSAvQ29tbWVudHMgYm94IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qLS0tIENvbnRyb2wgYm94IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLndnby1wbGF5ZXItY29udHJvbCB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ud2dvLWNvbnRyb2wtd3JhcHBlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2dvLWN0cmxncm91cC1sZWZ0IHtcXG5cXHRmbG9hdDogbGVmdDtcXG59XFxuXFxuLndnby1jdHJsZ3JvdXAtcmlnaHQge1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuXFxuLndnby1jdHJsZ3JvdXAtY29udHJvbCB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi8qIGJ1dHRvbiB3aWRnZXQgKi9cXG5cXG5idXR0b24ud2dvLWJ1dHRvbiB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwwLjMpO1xcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XFxuXFx0d2lkdGg6IDQ0cHg7XFxuXFx0aGVpZ2h0OiA0NHB4O1xcblxcdG1hcmdpbjogMCAzcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuYnV0dG9uLndnby1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyLCBcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ud2dvLXBsYXllci1tbi12YWx1ZTpmb2N1cyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQ1KTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwMCwxMDAsMTAwLDAuMyk7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDE1MCwxNTAsMTUwLDAuNSk7XFxufVxcblxcbmJ1dHRvbi53Z28tYnV0dG9uLndnby1zZWxlY3RlZCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC41KTtcXG59XFxuXFxuYnV0dG9uLndnby1idXR0b24ud2dvLXNlbGVjdGVkOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjcpO1xcbn1cXG5cXG4ud2dvLWJ1dHRvbjo6YmVmb3JlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIndnby1pY29uc1xcXCI7XFxuXFx0Zm9udC1zaXplOiAzNnB4O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLndnby1idXR0b25bZGlzYWJsZWRdOjpiZWZvcmUsIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXS53Z28tcGxheWVyLW1uLXZhbHVlW2Rpc2FibGVkXSB7XFxuXFx0Y29sb3I6IHJnYmEoNjQsNjQsNjQsMC41KTtcXG59XFxuXFxuLndnby1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTo6YmVmb3JlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAxcHg7XFxuXFx0bGVmdDogMXB4O1xcbn1cXG5cXG4ud2dvLWJ1dHRvbi1maXJzdDo6YmVmb3JlLCAud2dvLWJ1dHRvbi1tdWx0aXByZXY6OmJlZm9yZSwgLndnby1idXR0b24tcHJldmlvdXM6OmJlZm9yZSAge1xcblxcdHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG5cXHQtbW96LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG5cXHQtbXMtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcbn1cXG5cXG4ud2dvLWJ1dHRvbi1maXJzdDo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiAnXFxcXGU4MWEnO1xcbn1cXG5cXG4ud2dvLWJ1dHRvbi1tdWx0aXByZXY6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogJ1xcXFxlODE3JztcXG5cXHRtYXJnaW4tbGVmdDogLTVweDtcXG59XFxuXFxuLndnby1idXR0b24tcHJldmlvdXM6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogJ1xcXFxlODBjJztcXG59XFxuXFxuLndnby1idXR0b24tbmV4dDo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiAnXFxcXGU4MGMnO1xcbn1cXG5cXG4ud2dvLWJ1dHRvbi1tdWx0aW5leHQ6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogJ1xcXFxlODE3JztcXG59XFxuXFxuLndnby1idXR0b24tbGFzdDo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiAnXFxcXGU4MWEnO1xcbn1cXG5cXG4ud2dvLWJ1dHRvbi1tZW51OjpiZWZvcmUgIHtcXG5cXHRjb250ZW50OiAnXFxcXGU4MWInO1xcblxcdGZvbnQtc2l6ZTogMjVweDtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcblxcdHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi53Z28tYnV0dG9uLWFib3V0OjpiZWZvcmUgIHtcXG5cXHRjb250ZW50OiAnXFxcXGU4MGYnO1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKiBtb3ZlIG51bWJlciB3aWRnZXQgKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ud2dvLXBsYXllci1tbi12YWx1ZSAge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsMC4zKTtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xcblxcdHdpZHRoOiAyOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMTVweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0b3V0bGluZTogMDtcXG59XFxuXFxuLndnby1wbGF5ZXItbW4td3JhcHBlciB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAzOHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogdG9wIGFuZCBib3R0b20gbW9kaWZpY2F0aW9ucyAqL1xcblxcbi53Z28tcGxheWVyLXRvcCAud2dvLXBsYXllci1jb250cm9sIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ud2dvLXBsYXllci1ib3R0b20gLndnby1wbGF5ZXItY29udHJvbCB7XFxuXFx0cGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuLyogZGlzcGxheSBsZXNzIGJ1dHRvbnMgKi9cXG5cXG4ud2dvLTQ0MCAud2dvLWJ1dHRvbi1tdWx0aXByZXYsIFxcbi53Z28tNDQwIC53Z28tYnV0dG9uLW11bHRpbmV4dCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLndnby0zNDAgLndnby1idXR0b24tbXVsdGlwcmV2LCBcXG4ud2dvLTM0MCAud2dvLWJ1dHRvbi1tdWx0aW5leHQsIFxcbi53Z28tMzQwIC53Z28tYnV0dG9uLWZpcnN0LCBcXG4ud2dvLTM0MCAud2dvLWJ1dHRvbi1sYXN0IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKi0tLSAvQ29udHJvbCBib3ggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4vKi0tLSBDb250cm9sIG1lbnUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLndnby1wbGF5ZXItbWVudSB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjUpO1xcblxcdHotaW5kZXg6IDkwMDtcXG5cXHRtYXJnaW4tdG9wOiAtMXB4O1xcblxcdGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgxMjcsMTI3LDEyNywwLjUpO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGNvbG9yOiAjMjkyOTI5O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi53Z28tbWVudS1pdGVtIHtcXG5cXHRwYWRkaW5nOiA1cHggMTBweCA1cHggNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44NSk7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ud2dvLW1lbnUtaXRlbTpub3QoLndnby1kaXNhYmxlZCk6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LDIyNSwyMjUsMC44NSk7XFxufVxcblxcbi53Z28tbWVudS1pdGVtOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICcgJztcXG5cXHRmb250LWZhbWlseTogXFxcIndnby1pY29uc1xcXCI7XFxuXFx0Y29sb3I6ICMwMDA7XFxuXFx0d2lkdGg6IDIwcHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi53Z28tbWVudS1pdGVtLndnby1zZWxlY3RlZDo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiAnXFxcXGU4MTMnO1xcbn1cXG5cXG4ud2dvLW1lbnUtaXRlbS53Z28tZGlzYWJsZWQge1xcblxcdGNvbG9yOiAjODg4O1xcblxcdGN1cnNvcjogRGVmYXVsdDtcXG59XFxuXFxuLndnby1tZW51LWl0ZW0ud2dvLWRpc2FibGVkOjpiZWZvcmUge1xcblxcdGNvbG9yOiAjODg4O1xcbn1cXG5cXG4vKi0tLSAvQ29udHJvbCBtZW51IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qLS0tIE92ZXJsYXkgd2luZG93IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi53Z28taW5mby1vdmVybGF5IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ei1pbmRleDogMTAwMDtcXG59XFxuXFxuLndnby1pbmZvLW1lc3NhZ2Uge1xcblxcdG1hcmdpbjogMTUlIGF1dG87XFxuXFx0bWluLWhlaWdodDogNTAlO1xcblxcdG1heC1oZWlnaHQ6IDcwJTtcXG5cXHRtaW4td2lkdGg6IDUwJTtcXG5cXHRtYXgtd2lkdGg6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOTUpO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Ym94LXNpemluZzpib3JkZXItYm94O1xcblxcdC1tb3otYm94LXNpemluZzpib3JkZXItYm94O1xcblxcdC13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O1xcblxcdGNvbG9yOiAjZDlkOWQ5O1xcblxcdGJveC1zaGFkb3c6IDBweCAwcHggNTBweCA1cHggcmdiKDAsMCwwKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLndnby1pbmZvLW1lc3NhZ2UgYSB7XFxuXFx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG59XFxuXFxuLndnby1pbmZvLW1lc3NhZ2UgaDEge1xcblxcdGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XFxuXFx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG5cXHRmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xcblxcdG1hcmdpbjogMCAwIDIwcHggMCAhaW1wb3J0YW50O1xcblxcdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLndnby1pbmZvLWNsb3NlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4vKi0tLSAvT3ZlcmxheSB3aW5kb3cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLyotLS0gUGVybWFsaW5rcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXS53Z28tcGVybWFsaW5rIHtcXG5cXHRwYWRkaW5nOiA3cHggMTBweCAhaW1wb3J0YW50O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XFxuXFx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuXFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKi0tLSAvUGVybWFsaW5rcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0YXRpYy9kdGFsZS9zaWRlL3dnby93Z28ucGxheWVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxRkFBcUY7O0FBRXJGO0VBQ0Usd0JBQXdCO0VBQ3hCOzREQUNvcEs7RUFDcHBLLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUEscUJBQXFCO0FBQ3JCLGdDQUFnQyxnQkFBZ0IsRUFBRTtBQUNsRCwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUMsd0JBQXdCLGdCQUFnQixFQUFFO0FBQzFDLHlCQUF5QixnQkFBZ0IsRUFBRTtBQUMzQyx3QkFBd0IsZ0JBQWdCLEVBQUU7QUFDMUMsMkJBQTJCLGdCQUFnQixFQUFFO0FBQzdDLGdDQUFnQyxnQkFBZ0IsRUFBRTtBQUNsRCwrQkFBK0IsZ0JBQWdCLEVBQUU7QUFDakQsZ0NBQWdDLGdCQUFnQixFQUFFO0FBQ2xELDBCQUEwQixnQkFBZ0Is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Q0FDQyxZQUFZO0NBQ1osd0JBQXdCO0NBQ3hCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBLDhGQUE4Rjs7QUFFOUYsNEZBQTRGOztBQUU1RjtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGVBQWU7Q0FDZixjQUFjO0NBQ2QsY0FBYztDQUNkLGtDQUFrQztDQUNsQyxjQUFjO0NBQ2QsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQiwwQkFBMEI7Q0FDMUIsNkJBQTZCO0NBQzdCLGNBQWM7Q0FDZCx1Q0FBdUM7Q0FDdkMsc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCOztBQUVBLDZGQUE2Rjs7QUFFN0YsNkZBQTZGOztBQUU3RjtDQUNDLDRCQUE0QjtDQUM1QixrQ0FBa0M7Q0FDbEMsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QiwwQ0FBMEM7Q0FDMUMsc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQiw4QkFBOEI7QUFDL0I7O0FBRUEsOEZBQThGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLS0tIEljb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3dnby1pY29ucyc7XFxuICBzcmM6IHVybCgnZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7YmFzZTY0LGQwOUdSZ0FCQUFBQUFBN0FBQTRBQUFBQUYvZ0FBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUFV5OHlBQUFCUkFBQUFFUUFBQUJXUGVGSWFHTnRZWEFBQUFHSUFBQUFVd0FBQVdxZ1dlb25ZM1owSUFBQUFkd0FBQUFVQUFBQUhBWkwvNVJtY0dkdEFBQUI4QUFBQlBrQUFBbVJpZ3A0TzJkaGMzQUFBQWJzQUFBQUNBQUFBQWdBQUFBUVoyeDVaZ0FBQnZRQUFBVE9BQUFIT2t3d0R4dG9aV0ZrQUFBTHhBQUFBRFVBQUFBMi94cThXbWhvWldFQUFBdjhBQUFBSUFBQUFDUUhXZ05jYUcxMGVBQUFEQndBQUFBcEFBQUFNQ1FyQUFCc2IyTmhBQUFNU0FBQUFCb0FBQUFhRE5FSzFHMWhlSEFBQUF4a0FBQUFJQUFBQUNBQTZ3bjNibUZ0WlFBQURJUUFBQUZxQUFBQ2pvS1o3MEZ3YjNOMEFBQU44QUFBQUhnQUFBQ2s0elAvM0hCeVpYQUFBQTVvQUFBQVZnQUFBRmFTb1pyL2VKeGpZR1JtWVp6QXdNckF3VlRGdEllQmdhRUhRak0rWURCa1pHSmdZR0pnWldiQUNnTFNYRk1ZSEY0d3ZKQm1EdnFmeFJERnpNUGdEeFJtQk1rQkFMOWFDc2Q0bkdOZ1lHQm1nR0FaQmtZR0VFZ0I4aGpCZkJZR0R5RE54OERCd01UQXhzRHdndkVGend2K0YrSXZwUC8vQnlsOHdRRG1DNytRQXZFbEdNVy9pMzhWL3lUK0FXb09FbUJrUXhjWmVRQUFWbzBTL3dCNG5HTmdRQU5HREViTVBQODNnakFBRUw0RDQzaWNuVlhaZHROV0ZKVThaSEFTT21TZ29BN1gzRGhRNjhxRUtSZ3dhU3JGZGlFZEhBaXRCQjJrREhUa25jYys2MnVPUXJ0V0gvbTA3bjA5SkxSMHJiWXNscysrUjF0bjJEcm5SaHdqS24wYWlHdlVvWktYQTZtc1BaWks5MGxjMTNVdmo1VU1CbkZkdGhKUFNadW9uU1JLYXQzc1VDN3hXT3NxV1NkWUorUGxJRlpQVlo1bm9BemlGQjVsU1VRYlJCdXBseVpKNG9uako0a1daeEFmSlVrZ0phTVFwOUxJVUVJMUdzUlMxYUZNNmRDcjF4TngwMERLUnFNZWRWaFU5MFBGSjhjMXA5U3NBMFlxVnpuQ0ZldlZScjRicHdNdmU1REVPc0d6clljeEhuaXNmcFFxa0lxUjZjZy9ka3BPbElhQlZISFVvVmJpNkRDVFgvZVJUQ3JOUUthTVlrV2w3b0c0M2YxMDJ4WXhQWFE2dmk1S2xVYXF1cm5PS0pydDBmR29neWdQMmNicHBOelEyZmJ3NVJsVFZLdGRjYlB0UUdZTlhFckpiSFNmUkFBZEpsTGo2UUZPTlp3Q3FSbjFSOFhaNTg4QkVzbGNsS284VlRLSGVnT1pNenQ3Y1RIdGJpZXJzbkNrbndjeWIzWjI0NTJIUTZkWGgzL1IraGRNNGN4SGorSmlmajVDK2xCcWZpSk9KS1ZHV016eXA0WWZjVmNnUXJreGlBc1h5dUJUaERsMFJkclpabDNqdFRIMmhzLzVTcWxoUFFuYTZLUDRmZ3I5VGlRckhHZFJvL1ZJbk0xajEzV3QzR2RRUzdXN0Z6c3lyME9WSXU3dkN3dXVNK2VFWVo0V0MxVmZudm5lQlRUL0JvaG4vRURlTklWTCs1WXBTclJ2bTZKTXUyaUtDdTBTVktWZE5zVVU3WW9wcG1uUG1tS0c5aDFUek5LZU16TGovOHZjNTVIN0hON3hrSnYyWGVTbWZRKzVhZDlIYnRvUGtKdFdJVGR0SGJscEx5QTNyVVp1MmxXak9uWUVHZ1pwRjFJVlFkQTBzdnBoM0ZhYjlVRFdqRFI4YVdEeUxtTEkrdXBFUjUyMXRjb2Z4WDkxNGdzSGNtbWlwN3NpRjV2aUxxL2JGajQ4M2U2cmo1cEczYkRWK01hUjhqQWVSbm9jbXRCWitjM2h2KzFOM1M2YTdqS3FNdWdCRlV3S3dBQmw3VUFDMHpyYkNhVDFtcWY0OGdkZ1hJWjR6a3BEdFZTZk80YW03K1Y1WC9leE9mRyt4KzNHTHJkY2Qza0pXZFlOY21QMjhOOVNaS3JySCtVdHJWUW5SNndySjQ5VmF4aERLcndvdXI2U2xIdTB0UnUvS0tteThsNlUxc3JuazVDYlBZTWJRbHUyN21Hd0kweHB5aVVlWGxPbEtEM1VVbzZ5UXl4dktjbzg0SlNMQzFxR3hMZ09kUTlxYThUcG9Yb1lHd3NoaHFHMHZSQndTQ2xkRmQrMHluZnhIcXRyMk9qNHhSWGg2WHB5RWhHZjRpcjdVZkJVMTBiOTZBN2F2R2JkTW9NcFZhcW4rNHhQc2EvYjlsRlphYVNPc3hlM1ZBZlhOT3NhT1JYVFQrUnI0SFJ2T0dqZEF6MVVmRFJCSTFVMXgrakdLR00wbGpYbDN3UjBNVlordzJqVll2czkzRStkcEZXc3VVdVk3SnNUOStDMHUvMHErN1djVzBiVy9kY0d2VzNraXA4ak1iOHRDdnc3QjJLM1pBM1VPNU9CR0F2SVdkQVl4aFltZHhpdWcyM0ViZlkvSnFmLzM0YUZSWEpYT3hxN2VlckQxWk5SSlhmWjhyakxUWFpaMTZNMlI5Vk9HdnNJalMwUE4rYlk0WElzdHNSZ1FiYit3Zjh4N2dGM2FWRUM0TkRJWlppSTJuU2hudXJoNmg2cnNXMDRWeElCZHMyeDQzUUFlZ0F1UWQ4Y3U5YnpDWUQxM0NQbkxzQjljZ2gyeUNINGxCeUN6OGk1QmZBNU9RUmZrRU13SUlkZ2w1dzdBQS9JSVhoSURzRWVPUVNQeU5rRStKSWNncS9JSVlqSklVakl1UTN3bUJ5Q0orUVFmRTBPd1RkR3JrNWsvcFlIMlFENnpxS2JRS21kR2h6YU9HUkdyazNZK3p4WTlvRkZaQjlhUk9xUmtlc1Q2bE1lTFBWN2kwajl3U0pTZnpSeVkwTDlpUWRML2RraVVuK3hpTlJueHBlWkl5bXZEcDd6amc3K0JKZnFyVjRBQUFBQUFRQUIvLzhBRDNpY25WVk5hQnRYRUo2WnR6L3lTbHI5N1Q3SnNyS3lWdElxUk9BaytyR0RnNTIxTFdxSUR5bFdJSFppakdtVGtCQUNhVWphSGdLbFBaVlFrdEpBNk1HSG5rb3BGQkpLTGlYUVE0UEpJWWRRUWs0OWhSSjY3Q0dVOUJDNXN5c1pLYlNuaXRYTXZKbjkzc3liTnpNTHRMdTcrMUI4VDd1UWhpcTg3eHNHS29pTEJWU09yZHp6M2wzekpTR3FyRk5PYVFnZ3Vqb0tZVUJud3QvSEVxdFF3QmwrUlZId0JETlV1dUhMeSt1K3RESUV4WDBUNDVtcVZZbEh4M1JJVXpxU3FHUEoxZXlVSlkraVBWTnFUTGRUTGEvV2tLelJ5aVc5WFhZOTFrdzNSZnpOYlh0eTB0NGV3eWNCWDlqWVdPaHRiYmNEVG5jZHUzZkhuaHdibTdUeHN1MWNaTk9kaFkzdDdZMEZ2THl3QWNHWi9zWnpJZ29PVE1FUnYxMHJrcXJsMDBRaUFzUVJMNElBUWtGbitLZ0FDS2RBVmJVdWFKcWhkanl2N0pWa1JaZjFxbTFwZXNuMWF1M1c5RXd6aUt3dk5XUTJ4VVFFNWhFbG5wTm03MFhDUW1sV0tpRjd6cFNsZDZSNU8xd3pQYnNjU2dGOTNtY00rbG5TOVV1aEdGSU9pSC80aXI2Q0tHZy9HaXJ1cjZPMGROVEMxR1R4cFduMlR1WmNONGNmRzQ3Uit5dHBPVVNPbFF4Z0FtRDN2bGpuc3lkZ0JqcmcrM016U1JJS0xvSkNnaFJ4QVlSS1FqMFBLdnRRZ2JORmVoZDAzVmdDUk8wa0p5R3FkV3puYU1hdXRwdVJiTDNhYm5sMWRMVjlHRnhaWXpyVG1zS3lxMnRGbEkyWmVlU2I0elNZdUdkdXQrYlZXdFl5Y1lwYTgrUWd2aklpbHlKR1NHN1BieHorZkRrU082NGtWYWQ2NUlDY0tNK0dobHdsN1NhVCtPenF6aDg3VjBPeXVvY3g4SlBESjZjK2lodEhoTzdsbmJTZGp5Vjl6d3FzVWRlT0ZmSUhjcGV2UDdwR1Z4Ni9mSHlGcmowS2NoRGMvMnZ4allqQlFjN0F6b001VkhWY1hMbG5jRGxQUXdRRlJqZ05KSFJCVzZDclFnK3lvUWxWT3crYUlqVGxQQ2pBenhvSWdWM09paUU2RXl2M29vdyt6R2pDQ0YwQW5WVFMxUXVNb3o2T2hqaUJSSDBnY1ovOFQ0L3I2MzdVeXNwYXUrRzFtMk81T25LZWExeU5NMEVKbEJwWkJ4T29sZDJhVng3MFU1T2JhUTVieDNDNjJjaEtPNE9hZXhDOVlOMG9Za2lrSmRLYlM3MURpMXU0dVlSUHkwNUUwU2MwblVRODFqdFViYldxK0xUYVVpdWFMcFRvcDczWnVCZi9NeDZmWTNZSEx6S2RpK1BLL1FHV21hbWtHWTJpVmUyRGIra01KU1dHU1lZeU1nQ0V5R0NMd1oxaytFNFNVSVNLWCtJcUo2UlRTamhVSUp3cEJNNkV6Qmc2SkNpaERnZEZjekFsc3FtM01pRHBnMkhVclJzakIxdmNvbC8yb2dxTTZ5TVczQXdhZnE5SFlwRDJFMEcrbDdoc290Q3hNNVNxNDdCNnhmcXdKSEh6WDNVVzduTTYzR2NjYW41bGVKaWdtYWpMdlJXbERrSldwcEs2QmpHTUJjZHlUYlFjYk13amQ5S0lML3loZTNOMTllYTNBY0hUUTc5MGE2QmswbnY2SHpHd3p5dDBnOFBQUXVTQlRCa3E5ZWVGT3BnWCtvZ3MzdVBaOFlWMEhMbkt3dGZXNUtTRkh4cUZ5R3N6V2NBWGhhVDVlblN4dHordDBXZTh2d1ZGdjBBODhoRjQxbk1ldVZRQmwrT3hWREpteFMyUmVNdHR0Y0dYNTdLSTIrenFyaXdVSlA1Mi9DNjd5eHUvbStrOC9wUlBtL3RuZTFPenMvanI3R0Iyc2ErSHRCYWVwUXdML2p3SUhRbDRVZ2NmSDFRQXowUlFVVlhsQkRORjdZS3FxTXZqdVhnTW9WaklsY2ZkVERLV2pVdGRnU2dhWXh4UFF3YWZGZGZqTDBvN3BLVlFreHJSMDAxWmNLdzMzMWxPUVFaL1dndldReDErNmV4MytEbmJaNzFuZmY0UDFtTXp6d0FBZUp4allHUmdZQUJpblgwdjk4ZnoyM3hsNEdaK0FSUmhPS2NaVVFPaEZXeisvLysva1hrVk13K1F5OEhBQkJJRkFHcnBETHdBQUFCNG5HTmdaR0JnRHZxZnhSREYvSUtCNGY5ZjV0VU1RQkVVd0FNQWpLSUZ2SGljWTM3QndNQzhpb0dCTVJXSXZ3RFprVUM4QUlnRm9Xd1FMbUJnWUlvQTRqME1EQUN0aFFaS0FBQUFBQUFBQUFCcUFNb0E2QUZxQWpRQ2VnS2VBdUFERUFOR0E1MEFBQUFCQUFBQURBQkZBQU1BQUFBQUFBSUFFZ0FmQUc0QUFBQmJDWkVBQUFBQWVKeDFqOHRPd2tBWWhjOGdhSURFR1BVQkppNE14RkNnMFEwTFEwS0VqWEhCUWhOM3BaUzJwSFRJZElEd0FMNkRheC9HNS9LMG5SRGpwYzNNZlAvNTd3RE84QW1COHJ2aktWbWdUcXZrQ2s1d2IvbUkrb1BsS3ZuSmNvMmVGOHNOM09EVmNoTVhlS05QVk91MGxuaTNMSEF1S3BZck9CV1hsbytvWDFtdWttOHQxM0FzeHBZYmVCYVBscHU0Rmg4anRkN3JPSXlNYkkzYTB1MzFYVG5iUzBVcFRyMUVlaHNUS1ozSm9WeW8xQVJKb2h4ZnJYYWg2c1MrU3JOcEVHNFNUeC9zQS9TZDNpUklBKzJaWUo0WHpMYWhhOHhDTHJSYXliRXRKZGRhTFFQZk9KRXg2MEczKzcwRlJsQllZdytOR0NFaUdFaTBxTGI1dXVpaHoxdGl4Z2pKeURJcVJnb1BDUlVQRzJaRWhTZWpQZVJaMEVxcEJveEl5QTU4M2l2c21LblFZYlpmUkdTWU1pWmtoWVIxOUIvKzMwcWYxWHFZTUMvbDBjekwrOHdQRTJiWU1zZWxhamhIUG9zdWVrdU1mMHdsdVhYdVcxTHhxVHZGN29icUFGMysvMnp4QlZ6ZWR1UUFBSGljYll6YkNzTWdFRVIzV3pWcFlqOWxvZmtrMFpWSXZXRXNKWC9mVWw5N0htYmdEQXhjWUxEQWZ6UUFYbEdnUklVVHpuakRCVmZVZUplaGMzcE10cVRFdVl1UWZWRTFtcE0ydlhPc1pFT3prWjIwTzl2bitrdmlWUHVweHFKSERhZTlPVHI1MHQ2bXVia1g0dXhvRTkvbkY4QUg0YlVrMkV1NEFNaFNXTEVCQVk1WnVRZ0FDQUJqSUxBQkkwU3dBeU53c2dRb0NVVlNSTElLQWdjcXNRWUJSTEVrQVloUldMQkFpRml4QmdORXNTWUJpRkZZdUFRQWlGaXhCZ0ZFV1ZsWldiZ0IvNFd3QkkyeEJRQkVBQUE9JykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgIHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJ6ZEdGdVpHRnNiMjVsUFNKdWJ5SS9QZ284SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQZ284YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHRaWFJoWkdGMFlUNURiM0I1Y21sbmFIUWdLRU1wSURJd01USWdZbmtnYjNKcFoybHVZV3dnWVhWMGFHOXljeUJBSUdadmJuUmxiR3h2TG1OdmJUd3ZiV1YwWVdSaGRHRStDanhrWldaelBnbzhabTl1ZENCcFpEMGlkMmR2TFdsamIyNXpJaUJvYjNKcGVpMWhaSFl0ZUQwaU1UQXdNQ0lnUGdvOFptOXVkQzFtWVdObElHWnZiblF0Wm1GdGFXeDVQU0ozWjI4dGFXTnZibk1pSUdadmJuUXRkMlZwWjJoMFBTSTBNREFpSUdadmJuUXRjM1J5WlhSamFEMGlibTl5YldGc0lpQjFibWwwY3kxd1pYSXRaVzA5SWpFd01EQWlJR0Z6WTJWdWREMGlPRFV3SWlCa1pYTmpaVzUwUFNJdE1UVXdJaUF2UGdvOGJXbHpjMmx1WnkxbmJIbHdhQ0JvYjNKcGVpMWhaSFl0ZUQwaU1UQXdNQ0lnTHo0S1BHZHNlWEJvSUdkc2VYQm9MVzVoYldVOUltWmhjM1F0Wm05eWQyRnlaQ0lnZFc1cFkyOWtaVDBpSmlONFpUZ3hOenNpSUdROUlrMDROallnTXpjMGNURTBMVEV3SURFMExUSTBkQzB4TkMweU1td3RNemN5TFRJME9IRXRNakl0TVRRdE16Y3ROblF0TVRVZ016WnNNQ0EwT0RKeE1DQXlPQ0F4TlNBek5uUXpOeTAyZWlCdExUUTFOQ0F3Y1RFMExURXdJREUwTFRJMGRDMHhOQzB5TW13dE16WXdMVEkwT0hFdE1qQXRNVFF0TXpZdE5uUXRNVFlnTXpac01DQTBPREp4TUNBeU9DQXhOaUF6Tm5Rek5pMDJlaUlnYUc5eWFYb3RZV1IyTFhnOUlqZzRNQ0lnTHo0S1BHZHNlWEJvSUdkc2VYQm9MVzVoYldVOUluUnZMV1Z1WkMweElpQjFibWxqYjJSbFBTSW1JM2hsT0RGaE95SWdaRDBpVFRReE1pQXpOelJ4TVRRdE1UQWdNVFF0TWpRZ01DMHhNaTB4TkMweU1td3RNell5TFRJeU9IRXRNakl0TVRRdE16WXROWFF0TVRRZ016VnNNQ0EwTkRKeE1DQXlOaUF4TkNBek5YUXpOaTAxZWlCdE1URTBJREkyT0hFM05DQXdJRGMwTFRVNGJEQXRORFkyY1RBdE5UZ3ROelF0TlRndE56WWdNQzAzTmlBMU9Hd3dJRFEyTm5Fd0lEVTRJRGMySURVNGVpSWdhRzl5YVhvdFlXUjJMWGc5SWpZd01DSWdMejRLUEdkc2VYQm9JR2RzZVhCb0xXNWhiV1U5SW5Cc1lYa3RNU0lnZFc1cFkyOWtaVDBpSmlONFpUZ3dZenNpSUdROUlrMDBPRFlnTXpjMmNURTBMVEV3SURFMExUSTJJREF0TVRRdE1UUXRNalJzTFRReU9DMHlOalp4TFRJMExURTJMVFF4TFRaMExURTNJRFF3YkRBZ05URTBjVEFnTXpBZ01UY2dOREIwTkRFdE5ub2lJR2h2Y21sNkxXRmtkaTE0UFNJMU1EQWlJQzgrQ2p4bmJIbHdhQ0JuYkhsd2FDMXVZVzFsUFNKamFHVmpheUlnZFc1cFkyOWtaVDBpSmlONFpUZ3hNenNpSUdROUlrMDNPRFlnTXpNeGJEQXRNVGMzY1RBdE5qWXRORGN0TVRFMGRDMHhNVFF0TkRkc0xUUTJOQ0F3Y1MwMk5pQXdMVEV4TkNBME4zUXRORGNnTVRFMGJEQWdORFkwY1RBZ05qWWdORGNnTVRFMGRERXhOQ0EwTjJ3ME5qUWdNSEV6TlNBd0lEWTFMVEUwSURndE5DQXhNQzB4TTNRdE5TMHhObXd0TWpjdE1qZHhMVFl0TmkweE15MDJMVElnTUMwMUlERXRNVE1nTXkweU5TQXpiQzAwTmpRZ01IRXRNemNnTUMwMk15MHlOblF0TWpZdE5qTnNNQzAwTmpSeE1DMHpOeUF5TmkwMk0zUTJNeTB5Tm13ME5qUWdNSEV6TnlBd0lEWXpJREkyZERJMklEWXpiREFnTVRReWNUQWdOeUExSURFeWJETTJJRE0yY1RZZ05pQXhNeUEySURNZ01DQTNMVElnTVRFdE5DQXhNUzB4Tm5vZ2JURXlPU0F5TnpOc0xUUTFOQzAwTlRSeExURXpMVEV6TFRNeUxURXpkQzB6TWlBeE0yd3RNalF3SURJME1IRXRNVE1nTVRNdE1UTWdNekowTVRNZ016SnNOakVnTmpGeE1UTWdNVE1nTXpJZ01UTjBNekl0TVROc01UUTNMVEUwTnlBek5qRWdNell4Y1RFeklERXpJRE15SURFemRETXlMVEV6YkRZeExUWXhjVEV6TFRFeklERXpMVE15ZEMweE15MHpNbm9pSUdodmNtbDZMV0ZrZGkxNFBTSTVNamd1TlRjeElpQXZQZ284WjJ4NWNHZ2daMng1Y0dndGJtRnRaVDBpYldWdWRTSWdkVzVwWTI5a1pUMGlKaU40WlRneFlqc2lJR1E5SWswMk5UQWdOREF3Y1RJeUlEQWdNell0TVRWME1UUXRNelV0TVRVdE16VXRNelV0TVRWc0xUWXdNQ0F3Y1MweU1DQXdMVE0xSURFMWRDMHhOU0F6TlNBeE5DQXpOU0F6TmlBeE5XdzJNREFnTUhvZ2JTMDJNREFnTVRBd2NTMHlNQ0F3TFRNMUlERTFkQzB4TlNBek5TQXhOQ0F6TlNBek5pQXhOV3cyTURBZ01IRXlNaUF3SURNMkxURTFkREUwTFRNMUxURTFMVE0xTFRNMUxURTFiQzAyTURBZ01Ib2diVFl3TUMwek1EQnhNaklnTUNBek5pMHhOWFF4TkMwek5TMHhOUzB6TlMwek5TMHhOV3d0TmpBd0lEQnhMVEl3SURBdE16VWdNVFYwTFRFMUlETTFJREUwSURNMUlETTJJREUxYkRZd01DQXdlaUlnYUc5eWFYb3RZV1IyTFhnOUlqY3dNQ0lnTHo0S1BHZHNlWEJvSUdkc2VYQm9MVzVoYldVOUltTnZiVzFsYm5RaUlIVnVhV052WkdVOUlpWWplR1U0TURBN0lpQmtQU0pOTnpneElEWTJNbXd0TmpJMUlEQnhMVEl4SURBdE16Y3RNVFYwTFRFMkxUTTJiREF0TXpZMWNUQXRNakVnTVRZdE16ZDBNemN0TVRac01UVTJJREFnTUMwNUlEa2dPU0EwTmpBZ01IRXlNU0F3SURNM0lERTJkREUySURNM2JEQWdNelkxY1RBZ01qRXRNVFlnTXpaMExUTTNJREUxZWlCdE1DQXhNRFZ4TmpVZ01DQXhNVEV0TkRaME5EWXRNVEV4YkRBdE16WTFjVEF0TmpVdE5EWXRNVEV4ZEMweE1URXRORFpzTFRReE5pQXdMVEUxTmkweE5UWWdNQ0F4TlRZdE5UTWdNSEV0TmpVZ01DMHhNVEVnTkRaMExUUTJJREV4TVd3d0lETTJOWEV3SURZMUlEUTJJREV4TVhReE1URWdORFpzTmpJMUlEQjZJaUJvYjNKcGVpMWhaSFl0ZUQwaU9UTTRJaUF2UGdvOFoyeDVjR2dnWjJ4NWNHZ3RibUZ0WlQwaWFHVnNjQzFqYVhKamJHVmtJaUIxYm1samIyUmxQU0ltSTNobE9EQm1PeUlnWkQwaVRUVXdNQ0E0TW13d0lERXdOM0V3SURndE5TQXhNM1F0TVRNZ05Xd3RNVEEzSURCeExUZ2dNQzB4TXkwMWRDMDFMVEV6YkRBdE1UQTNjVEF0T0NBMUxURXpkREV6TFRWc01UQTNJREJ4T0NBd0lERXpJRFYwTlNBeE0zb2diVEUwTXlBek56VnhNQ0EwT1Mwek1TQTVNWFF0TnpjZ05qVXRPVFVnTWpOeExURXpOaUF3TFRJd055MHhNVGt0T0MweE15QTBMVEl6YkRjMExUVTJjVFF0TXlBeE1TMHpJRGtnTUNBeE5DQTNJRE13SURNNElEUTRJRFV4SURFNUlERXpJRFE0SURFeklESTNJREFnTkRndE1UVjBNakV0TXpOeE1DMHlNUzB4TVMwek5IUXRNemd0TWpWeExUTTFMVEUyTFRZMExUUTRkQzB5T1MwM01Hd3dMVEl3Y1RBdE9DQTFMVEV6ZERFekxUVnNNVEEzSURCeE9DQXdJREV6SURWME5TQXhNM0V3SURFeElERXlJREk0ZERNd0lESTRjVEU0SURFd0lESTNJREUyZERJMklESXdJREkxSURJM0lERTJJRE0wSURjZ05EVjZJRzB5TVRRdE1UQTNjVEF0TVRFM0xUVTNMVEl4TlhRdE1UVTJMVEUxTmkweU1UVXROVGN0TWpFMUlEVTNMVEUxTmlBeE5UWXROVGNnTWpFMUlEVTNJREl4TlNBeE5UWWdNVFUySURJeE5TQTFOeUF5TVRVdE5UY2dNVFUyTFRFMU5pQTFOeTB5TVRWNklpQm9iM0pwZWkxaFpIWXRlRDBpT0RVM0xqRTBNeUlnTHo0S1BHZHNlWEJvSUdkc2VYQm9MVzVoYldVOUltTm9aV05yTFdWdGNIUjVJaUIxYm1samIyUmxQU0ltSTNobE9ERTBPeUlnWkQwaVRUWXlOU0EzTURkc0xUUTJOQ0F3Y1Mwek55QXdMVFl6TFRJMmRDMHlOaTAyTTJ3d0xUUTJOSEV3TFRNM0lESTJMVFl6ZERZekxUSTJiRFEyTkNBd2NUTTNJREFnTmpNZ01qWjBNallnTmpOc01DQTBOalJ4TUNBek55MHlOaUEyTTNRdE5qTWdNalo2SUcweE5qRXRPRGxzTUMwME5qUnhNQzAyTmkwME55MHhNVFIwTFRFeE5DMDBOMnd0TkRZMElEQnhMVFkySURBdE1URTBJRFEzZEMwME55QXhNVFJzTUNBME5qUnhNQ0EyTmlBME55QXhNVFIwTVRFMElEUTNiRFEyTkNBd2NUWTJJREFnTVRFMExUUTNkRFEzTFRFeE5Ib2lJR2h2Y21sNkxXRmtkaTE0UFNJM09EVXVOekUwSWlBdlBnbzhaMng1Y0dnZ1oyeDVjR2d0Ym1GdFpUMGlZMmx5WTJ4bExXVnRjSFI1SWlCMWJtbGpiMlJsUFNJbUkzaGxPREUyT3lJZ1pEMGlUVFF5T1NBMk5UUnhMVGd6SURBdE1UVXlMVFF4ZEMweE1UQXRNVEV3TFRReExURTFNaUEwTVMweE5USWdNVEV3TFRFeE1DQXhOVEl0TkRFZ01UVXlJRFF4SURFeE1DQXhNVEFnTkRFZ01UVXlMVFF4SURFMU1pMHhNVEFnTVRFd0xURTFNaUEwTVhvZ2JUUXlPUzB6TURSeE1DMHhNVGN0TlRjdE1qRTFkQzB4TlRZdE1UVTJMVEl4TlMwMU55MHlNVFVnTlRjdE1UVTJJREUxTmkwMU55QXlNVFVnTlRjZ01qRTFJREUxTmlBeE5UWWdNakUxSURVM0lESXhOUzAxTnlBeE5UWXRNVFUySURVM0xUSXhOWG9pSUdodmNtbDZMV0ZrZGkxNFBTSTROVGN1TVRReklpQXZQZ284WjJ4NWNHZ2daMng1Y0dndGJtRnRaVDBpWTJseVkyeGxJaUIxYm1samIyUmxQU0ltSTNobE9ERTFPeUlnWkQwaVRUZzFOeUF6TlRCeE1DMHhNVGN0TlRjdE1qRTFkQzB4TlRZdE1UVTJMVEl4TlMwMU55MHlNVFVnTlRjdE1UVTJJREUxTmkwMU55QXlNVFVnTlRjZ01qRTFJREUxTmlBeE5UWWdNakUxSURVM0lESXhOUzAxTnlBeE5UWXRNVFUySURVM0xUSXhOWG9pSUdodmNtbDZMV0ZrZGkxNFBTSTROVGN1TVRReklpQXZQZ284WjJ4NWNHZ2daMng1Y0dndGJtRnRaVDBpYVc1bWJ5SWdkVzVwWTI5a1pUMGlKaU40WlRnd01Uc2lJR1E5SWswek5UY2dNVEF3YkRBdE56RnhNQzB4TlMweE1TMHlOWFF0TWpVdE1URnNMVEk0TmlBd2NTMHhOU0F3TFRJMUlERXhkQzB4TVNBeU5Xd3dJRGN4Y1RBZ01UVWdNVEVnTWpWME1qVWdNVEZzTXpZZ01DQXdJREl4TkMwek5pQXdjUzB4TlNBd0xUSTFJREV4ZEMweE1TQXlOV3d3SURjeGNUQWdNVFVnTVRFZ01qVjBNalVnTVRGc01qRTBJREJ4TVRVZ01DQXlOUzB4TVhReE1TMHlOV3d3TFRNeU1TQXpOaUF3Y1RFMUlEQWdNalV0TVRGME1URXRNalY2SUcwdE56RWdOalF6YkRBdE1UQTNjVEF0TVRVdE1URXRNalYwTFRJMUxURXhiQzB4TkRNZ01IRXRNVFVnTUMweU5TQXhNWFF0TVRFZ01qVnNNQ0F4TURkeE1DQXhOU0F4TVNBeU5YUXlOU0F4TVd3eE5ETWdNSEV4TlNBd0lESTFMVEV4ZERFeExUSTFlaUlnYUc5eWFYb3RZV1IyTFhnOUlqTTFOeTR4TkRNaUlDOCtDand2Wm05dWRENEtQQzlrWldaelBnbzhMM04yWno0PScpIGZvcm1hdCgnc3ZnJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBBdmFpbGFibGUgaWNvbnM6ICovXFxuLndnby1pY29uLWZhc3QtZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiAnXFxcXGU4MTcnOyB9XFxuLndnby1pY29uLXRvLWVuZDpiZWZvcmUgeyBjb250ZW50OiAnXFxcXGU4MWEnOyB9XFxuLndnby1pY29uLXBsYXk6YmVmb3JlIHsgY29udGVudDogJ1xcXFxlODBjJzsgfVxcbi53Z28taWNvbi1jaGVjazpiZWZvcmUgeyBjb250ZW50OiAnXFxcXGU4MTMnOyB9XFxuLndnby1pY29uLW1lbnU6YmVmb3JlIHsgY29udGVudDogJ1xcXFxlODFiJzsgfVxcbi53Z28taWNvbi1jb21tZW50OmJlZm9yZSB7IGNvbnRlbnQ6ICdcXFxcZTgwMCc7IH1cXG4ud2dvLWljb24taGVscC1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6ICdcXFxcZTgwZic7IH1cXG4ud2dvLWljb24tY2hlY2stZW1wdHk6YmVmb3JlIHsgY29udGVudDogJ1xcXFxlODE0JzsgfVxcbi53Z28taWNvbi1jaXJjbGUtZW1wdHk6YmVmb3JlIHsgY29udGVudDogJ1xcXFxlODE2JzsgfVxcbi53Z28taWNvbi1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJ1xcXFxlODE1JzsgfVxcbi53Z28taWNvbi1pbmZvOmJlZm9yZSB7IGNvbnRlbnQ6ICdcXFxcZTgwMSc7IH1cXG5cXG4vKi0tLSAvSWNvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qLS0tIEJhc2ljIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLndnby1wbGF5ZXItbWFpbiB7XFxuXFx0Zm9udC1mYW1pbHk6IENhbGlicmksIFRhaG9tYSwgQXJpYWw7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRsaW5lLWhlaWdodDogbm9ybWFsO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcblxcdC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIEZvciBzb21lIEFuZHJvaWRzICovXFxufVxcblxcbi53Z28tcGxheWVyLW1haW46YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGNsZWFyOiBib3RoO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKi0tLSAvQmFzaWMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qLS0tIFJlZ2lvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLndnby1wbGF5ZXItbGVmdCwgLndnby1wbGF5ZXItY2VudGVyLCAud2dvLXBsYXllci1yaWdodCAge1xcblxcdGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4ud2dvLXBsYXllci1jZW50ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2dvLXBsYXllci1sZWZ0LXdyYXBwZXIsIC53Z28tcGxheWVyLXJpZ2h0LXdyYXBwZXIgIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKi0tLSAvUmVnaW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4vKi0tLSBUd28gY29sdW1ucyBtb2RpZmljYXRvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ud2dvLXR3b2NvbHMgLndnby1wbGF5ZXItbGVmdCwgLndnby10d29jb2xzICAud2dvLXBsYXllci1yaWdodCAge1xcblxcdHdpZHRoOiAzMCU7XFxufVxcblxcbi53Z28tdHdvY29scyAud2dvLXBsYXllci1jZW50ZXIge1xcblxcdHdpZHRoOiA3MCU7XFxufVxcblxcbi8qLS0tIC9Ud28gY29sdW1ucyBtb2RpZmljYXRvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4vKi0tLSBCb2FyZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLndnby1wbGF5ZXItYm9hcmQge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLndnby1ib2FyZCB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRUIwNTM7XFxuICAgIGJvcmRlci10b3A6ICNGMEU3QTcgc29saWQgMXB4O1xcbiAgICBib3JkZXItcmlnaHQ6ICNEMUE5NzQgc29saWQgMXB4O1xcbiAgICBib3JkZXItbGVmdDogI0NDQjQ2NyBzb2xpZCAxcHg7XFxuICAgIGJvcmRlci1ib3R0b206ICM2NjU5MjYgc29saWQgM3B4O1xcbiAgICAvKmJvcmRlci1yaWdodDogIzY2NTkyNiBzb2xpZCAzcHg7Ki9cXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4vKi0tLSAvQm9hcmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qLS0tIEJveCBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLndnby1ib3gtd3JhcHBlciB7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgyMjYsMjI2LDIyNiwwLjUpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsMC41KTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLndnby1ib3gtdGl0bGUge1xcblxcdG1hcmdpbjogMCAxMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyotLS0gL0JveCBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLyotLS0gUGxheWVyIGJveCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLndnby1wbGF5ZXItd3JhcHBlciAud2dvLWJveC10aXRsZTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcgJztcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDJweDtcXG5cXHR3aWR0aDogMThweDtcXG5cXHRoZWlnaHQ6IDE4cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogOXB4O1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDEyNywgMTI3LCAxMjcsIDAuMyk7XFxufVxcblxcbi53Z28tcGxheWVyLXdyYXBwZXIud2dvLWJsYWNrIC53Z28tYm94LXRpdGxlOjphZnRlciB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDM1LDM2LDM5KTtcXG5cXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICByZ2JhKDM1LDM2LDM5LDEpIDAlLCByZ2JhKDAsMCwwLDEpIDEwMCUpO1xcblxcdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAlLHJnYmEoMzUsMzYsMzksMSkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgwLDAsMCwxKSkpO1xcblxcdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgIHJnYmEoMzUsMzYsMzksMSkgMCUscmdiYSgwLDAsMCwxKSAxMDAlKTtcXG5cXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAgcmdiYSgzNSwzNiwzOSwxKSAwJSxyZ2JhKDAsMCwwLDEpIDEwMCUpO1xcblxcdGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAgcmdiYSgzNSwzNiwzOSwxKSAwJSxyZ2JhKDAsMCwwLDEpIDEwMCUpO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICByZ2JhKDM1LDM2LDM5LDEpIDAlLHJnYmEoMCwwLDAsMSkgMTAwJSk7XFxufVxcblxcbi53Z28tcGxheWVyLXdyYXBwZXIud2dvLXdoaXRlIC53Z28tYm94LXRpdGxlOjphZnRlciB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcXG5cXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDEpIDQ3JSwgcmdiYSgyMzcsMjM3LDIzNywxKSAxMDAlKTtcXG5cXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCg0NyUscmdiYSgyNDYsMjQ2LDI0NiwxKSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDIzNywyMzcsMjM3LDEpKSk7XFxuXFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI0NiwyNDYsMjQ2LDEpIDQ3JSxyZ2JhKDIzNywyMzcsMjM3LDEpIDEwMCUpO1xcblxcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjQ2LDI0NiwyNDYsMSkgNDclLHJnYmEoMjM3LDIzNywyMzcsMSkgMTAwJSk7XFxuXFx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjQ2LDI0NiwyNDYsMSkgNDclLHJnYmEoMjM3LDIzNywyMzcsMSkgMTAwJSk7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNDYsMjQ2LDI0NiwxKSA0NyUscmdiYSgyMzcsMjM3LDIzNywxKSAxMDAlKTtcXG59XFxuXFxuLndnby1wbGF5ZXItaW5mbyB7XFxuXFx0cGFkZGluZzogMCAyJTtcXG59XFxuXFxuLndnby1wbGF5ZXItaW5mby1ib3gtd3JhcHBlciB7XFxuXFx0d2lkdGg6IDMzLjMlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLndnby1wbGF5ZXItaW5mby1ib3gge1xcblxcdHBhZGRpbmc6IDBweCAxcHg7XFxuXFx0bWFyZ2luOiAwIDMlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsMC4zKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53Z28tcGxheWVyLWluZm8tdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMTFweDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiByaWdodCBhbmQgbGVmdCBtb2RpZmljYXRpb25zKi9cXG5cXG4ud2dvLXBsYXllci1sZWZ0IC53Z28taW5mb2JveCwgLndnby1wbGF5ZXItcmlnaHQgLndnby1pbmZvYm94IHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0bGVmdDogMTBweDtcXG59XFxuXFxuLndnby1wbGF5ZXItcmlnaHQgLndnby1wbGF5ZXItd3JhcHBlciwgLndnby1wbGF5ZXItbGVmdCAud2dvLXBsYXllci13cmFwcGVyIHtcXG5cXHRoZWlnaHQ6IDg1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLyogdG9wIGFuZCBib3R0b20gbW9kaWZpY2F0aW9ucyAqL1xcblxcbi53Z28tcGxheWVyLXRvcCAud2dvLXBsYXllci1pbmZvLCAud2dvLXBsYXllci1ib3R0b20gLndnby1wbGF5ZXItaW5mbyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiA0MCU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0dG9wOiA0cHg7XFxuXFx0Ym90dG9tOiA0cHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLndnby1wbGF5ZXItdG9wIC53Z28tcGxheWVyLXdyYXBwZXIsIC53Z28tcGxheWVyLWJvdHRvbSAud2dvLXBsYXllci13cmFwcGVyIHtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLndnby1wbGF5ZXItdG9wIC53Z28tcGxheWVyLXdyYXBwZXIud2dvLWJsYWNrIHtcXG5cXHRib3JkZXItbGVmdC13aWR0aDogMDtcXG59XFxuXFxuLndnby1wbGF5ZXItdG9wIC53Z28taW5mb2JveCAud2dvLWJveC10aXRsZSwgLndnby1wbGF5ZXItYm90dG9tIC53Z28taW5mb2JveCAud2dvLWJveC10aXRsZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiA0MCU7XFxuXFx0bGVmdDogMDtcXG5cXHRtYXJnaW46IDAgNXB4O1xcblxcdHotaW5kZXg6IDUwMDtcXG59XFxuXFxuLndnby1wbGF5ZXItdG9wIC53Z28tcGxheWVyLXdyYXBwZXIgLndnby1ib3gtdGl0bGU6OmFmdGVyIHtcXG5cXHRmbG9hdDogbGVmdDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuLyogUyBtb2RpZmljYXRpb24gKi9cXG5cXG4ud2dvLXNtYWxsIC53Z28tcGxheWVyLXRvcCAud2dvLXBsYXllci1pbmZvLCAud2dvLXNtYWxsIC53Z28tcGxheWVyLWJvdHRvbSAud2dvLXBsYXllci1pbmZvLFxcbi53Z28teHNtYWxsIC53Z28tcGxheWVyLXRvcCAud2dvLXBsYXllci1pbmZvLCAud2dvLXhzbWFsbCAud2dvLXBsYXllci1ib3R0b20gLndnby1wbGF5ZXItaW5mbyAge1xcblxcdHdpZHRoOiAzMCU7XFx0XFxufVxcblxcbi53Z28tc21hbGwgLndnby1wbGF5ZXItdG9wIC53Z28taW5mb2JveCAud2dvLWJveC10aXRsZSwgLndnby1zbWFsbCAgLndnby1wbGF5ZXItYm90dG9tIC53Z28taW5mb2JveCAud2dvLWJveC10aXRsZSxcXG4ud2dvLXhzbWFsbCAud2dvLXBsYXllci10b3AgLndnby1pbmZvYm94IC53Z28tYm94LXRpdGxlLCAud2dvLXhzbWFsbCAgLndnby1wbGF5ZXItYm90dG9tIC53Z28taW5mb2JveCAud2dvLWJveC10aXRsZSB7XFxuXFx0cmlnaHQ6IDMwJTtcXG59XFxuXFxuLndnby1zbWFsbCAud2dvLXBsYXllci1pbmZvLWJveC13cmFwcGVyLFxcbi53Z28teHNtYWxsIC53Z28tcGxheWVyLWluZm8tYm94LXdyYXBwZXIge1xcblxcdHdpZHRoOiA1MCU7XFxufVxcblxcbi53Z28tc21hbGwgLndnby1wbGF5ZXItaW5mby1ib3gtd3JhcHBlcjpsYXN0LWNoaWxkLFxcbi53Z28teHNtYWxsIC53Z28tcGxheWVyLWluZm8tYm94LXdyYXBwZXI6bGFzdC1jaGlsZCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogWFMgbW9kaWZpY2F0aW9uICovXFxuXFxuLndnby14c21hbGwgLndnby1wbGF5ZXItaW5mby10aXRsZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLndnby14c21hbGwgLndnby1wbGF5ZXItd3JhcHBlciB7IFxcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGhlaWdodDogMzBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLndnby14c21hbGwgLndnby1pbmZvYm94eyBcXG5cXHRtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi53Z28teHNtYWxsIC53Z28tYm94LXRpdGxlIHsgXFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLndnby14c21hbGwgLndnby1wbGF5ZXItd3JhcHBlci53Z28tYmxhY2sge1xcblxcdGJvcmRlci10b3A6IDA7XFxuXFx0Ym9yZGVyLWxlZnQtd2lkdGg6IDFweDtcXG59XFxuXFxuLndnby14c21hbGwgLndnby1wbGF5ZXItd3JhcHBlciAud2dvLWJveC10aXRsZTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcgJztcXG5cXHRtYXJnaW4tdG9wOiA3cHg7XFxuXFx0d2lkdGg6IDE0cHg7XFxuXFx0aGVpZ2h0OiAxNHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLyotLS0gL1BsYXllciBib3ggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qLS0tIENvbW1lbnRzIGJveCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ud2dvLWNvbW1lbnRzLXdyYXBwZXIge1xcblxcdG92ZXJmbG93OiBhdXRvO1xcblxcdG1hcmdpbjogMCAwIDAgMDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi53Z28tY29tbWVudHMtY29udGVudCB7XFxuXFx0cGFkZGluZzogM3B4IDVweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLDAuMyk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ud2dvLWNvbW1lbnRzLWNvbnRlbnQgcCB7XFxuXFx0Zm9udC1zaXplOiAwLjllbTtcXG5cXHRtYXJnaW46IDAuNWVtIDA7XFxufVxcblxcbi53Z28taGVscCB7IFxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyMjYsIDIxNiwgMC45MCk7XFxuXFx0cGFkZGluZzogMXB4IDdweDtcXG5cXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi53Z28tbm90aWZpY2F0aW9uIHsgXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMTYsIDE2LCAwLjk1KTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0cGFkZGluZzogMXB4IDdweDtcXG5cXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi53Z28tY29tbWVudGJveCAud2dvLWJveC10aXRsZSB7XFx0XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ud2dvLWNvbW1lbnRib3ggLndnby1ib3gtdGl0bGU6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnXFxcXGU4MDAnO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwid2dvLWljb25zXFxcIjtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXHRmb250LXNpemU6IDAuOWVtO1xcblxcdHBhZGRpbmctdG9wOiA0cHg7XFxuXFx0d2lkdGg6IDIycHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2dvLWNvbW1lbnRib3gud2dvLWdhbWVpbmZvIC53Z28tYm94LXRpdGxlOjphZnRlciB7XFxuXFx0Y29udGVudDogJ1xcXFxlODAxJztcXG5cXHRwYWRkaW5nLXRvcDogMnB4O1xcbn1cXG5cXG4ud2dvLWNvbW1lbnRzLW5pY2sge1xcblxcdGNvbG9yOiByZ2JhKDAsMCwwLDAuNzUpO1xcbn1cXG5cXG5hLndnby1tb3ZlLWxpbmsgeyBcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcblxcdGJvcmRlci1ib3R0b206MXB4IGRvdHRlZDsgXFxufVxcblxcbi8qIHJpZ2h0IGFuZCBsZWZ0IG1vZGlmaWNhdGlvbnMgKi9cXG5cXG4ud2dvLXBsYXllci1yaWdodCAud2dvLWNvbW1lbnRzLWNvbnRlbnQsIC53Z28tcGxheWVyLWxlZnQgLndnby1jb21tZW50cy1jb250ZW50IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMTBweDtcXG5cXHRyaWdodDogMTBweDtcXG5cXHRib3R0b206IDEwcHg7XFxuXFx0dG9wOiA0MHB4O1xcbn1cXG5cXG4ud2dvLXBsYXllci1yaWdodCAud2dvLWNvbW1lbnRib3gsIC53Z28tcGxheWVyLWxlZnQgLndnby1jb21tZW50Ym94IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGxlZnQ6IDEwcHg7XFxuXFx0dG9wOiAxNzBweDtcXG59XFxuXFxuLyogdG9wIGFuZCBib3R0b20gbW9kaWZpY2F0aW9ucyAqL1xcblxcbi53Z28tcGxheWVyLXRvcCAud2dvLWNvbW1lbnRzLWNvbnRlbnQsIC53Z28tcGxheWVyLWJvdHRvbSAud2dvLWNvbW1lbnRzLWNvbnRlbnQge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiA0MHB4O1xcblxcdHJpZ2h0OiAwO1xcblxcdHRvcDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0XFxufVxcblxcbi8qIFRPRE86IGhhbmRsZSB0b28gbG9uZyB0aXRsZSAqL1xcbi53Z28tcGxheWVyLXRvcCAud2dvLWNvbW1lbnRib3ggLndnby1ib3gtdGl0bGUsIC53Z28tcGxheWVyLWJvdHRvbSAud2dvLWNvbW1lbnRib3ggLndnby1ib3gtdGl0bGUgeyBcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogLTUwcHg7XFxuXFx0dG9wOiA1NXB4O1xcbn1cXG5cXG4ud2dvLXBsYXllci10b3AgLndnby1jb21tZW50cy13cmFwcGVyLCAud2dvLXBsYXllci1ib3R0b20gLndnby1jb21tZW50cy13cmFwcGVyIHtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdGhlaWdodDogMTUwcHg7XFxufVxcblxcbi8qIGdhbWUgaW5mbyB0YWJsZSAqL1xcblxcbi53Z28tY29tbWVudGJveCAud2dvLWluZm8tbGlzdCB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi53Z28tY29tbWVudGJveCAud2dvLWluZm8tdGl0bGUge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjMpO1xcblxcdHBhZGRpbmc6IDJweCAwO1xcbn1cXG5cXG4ud2dvLWNvbW1lbnRib3ggLndnby1pbmZvLWl0ZW0ge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuXFxuLndnby1jb21tZW50Ym94IC53Z28taW5mby1sYWJlbCwgLndnby1jb21tZW50Ym94IC53Z28taW5mby12YWx1ZSB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjMpO1xcblxcdHBhZGRpbmc6IDJweCAxNXB4IDJweCAwO1xcbn1cXG5cXG4ud2dvLWNvbW1lbnRib3ggLndnby1pbmZvLWxhYmVsIHtcXG5cXHRjb2xvcjogIzAwMDtcXG59XFxuXFxuLndnby1jb21tZW50Ym94IC53Z28taW5mby12YWx1ZSB7XFxuXFx0Y29sb3I6ICM0YzRjNGM7XFxufVxcblxcbi8qIGluIGdhbWVpbmZvLCBsYXN0IHJvdyBpcyB3aXRob3V0IGJvcmRlciovXFxuLndnby1jb21tZW50Ym94Lndnby1nYW1laW5mbyAud2dvLWluZm8taXRlbTpsYXN0LWNoaWxkIC53Z28taW5mby1sYWJlbCwgLndnby1jb21tZW50Ym94Lndnby1nYW1laW5mbyAud2dvLWluZm8taXRlbTpsYXN0LWNoaWxkIC53Z28taW5mby12YWx1ZSB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLyotLS0gL0NvbW1lbnRzIGJveCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4vKi0tLSBDb250cm9sIGJveCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi53Z28tcGxheWVyLWNvbnRyb2wge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLndnby1jb250cm9sLXdyYXBwZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndnby1jdHJsZ3JvdXAtbGVmdCB7XFxuXFx0ZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi53Z28tY3RybGdyb3VwLXJpZ2h0IHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcblxcbi53Z28tY3RybGdyb3VwLWNvbnRyb2wge1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBidXR0b24gd2lkZ2V0ICovXFxuXFxuYnV0dG9uLndnby1idXR0b24ge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsMC4zKTtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xcblxcdHdpZHRoOiA0NHB4O1xcblxcdGhlaWdodDogNDRweDtcXG5cXHRtYXJnaW46IDAgM3B4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbmJ1dHRvbi53Z28tYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlciwgXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLndnby1wbGF5ZXItbW4tdmFsdWU6Zm9jdXMge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40NSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgxMDAsMTAwLDEwMCwwLjMpO1xcblxcdGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgxNTAsMTUwLDE1MCwwLjUpO1xcbn1cXG5cXG5idXR0b24ud2dvLWJ1dHRvbi53Z28tc2VsZWN0ZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuNSk7XFxufVxcblxcbmJ1dHRvbi53Z28tYnV0dG9uLndnby1zZWxlY3RlZDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC43KTtcXG59XFxuXFxuLndnby1idXR0b246OmJlZm9yZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJ3Z28taWNvbnNcXFwiO1xcblxcdGZvbnQtc2l6ZTogMzZweDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi53Z28tYnV0dG9uW2Rpc2FibGVkXTo6YmVmb3JlLCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ud2dvLXBsYXllci1tbi12YWx1ZVtkaXNhYmxlZF0ge1xcblxcdGNvbG9yOiByZ2JhKDY0LDY0LDY0LDAuNSk7XFxufVxcblxcbi53Z28tYnV0dG9uOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6OmJlZm9yZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdGxlZnQ6IDFweDtcXG59XFxuXFxuLndnby1idXR0b24tZmlyc3Q6OmJlZm9yZSwgLndnby1idXR0b24tbXVsdGlwcmV2OjpiZWZvcmUsIC53Z28tYnV0dG9uLXByZXZpb3VzOjpiZWZvcmUgIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxuXFx0LW1vei10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxuXFx0LW1zLXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG59XFxuXFxuLndnby1idXR0b24tZmlyc3Q6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogJ1xcXFxlODFhJztcXG59XFxuXFxuLndnby1idXR0b24tbXVsdGlwcmV2OjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICdcXFxcZTgxNyc7XFxuXFx0bWFyZ2luLWxlZnQ6IC01cHg7XFxufVxcblxcbi53Z28tYnV0dG9uLXByZXZpb3VzOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICdcXFxcZTgwYyc7XFxufVxcblxcbi53Z28tYnV0dG9uLW5leHQ6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogJ1xcXFxlODBjJztcXG59XFxuXFxuLndnby1idXR0b24tbXVsdGluZXh0OjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICdcXFxcZTgxNyc7XFxufVxcblxcbi53Z28tYnV0dG9uLWxhc3Q6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogJ1xcXFxlODFhJztcXG59XFxuXFxuLndnby1idXR0b24tbWVudTo6YmVmb3JlICB7XFxuXFx0Y29udGVudDogJ1xcXFxlODFiJztcXG5cXHRmb250LXNpemU6IDI1cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXHRwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG4ud2dvLWJ1dHRvbi1hYm91dDo6YmVmb3JlICB7XFxuXFx0Y29udGVudDogJ1xcXFxlODBmJztcXG5cXHRmb250LXNpemU6IDMwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyogbW92ZSBudW1iZXIgd2lkZ2V0ICovXFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLndnby1wbGF5ZXItbW4tdmFsdWUgIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLDAuMyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcXG5cXHR3aWR0aDogMjhweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRmb250LXNpemU6IDE1cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdG91dGxpbmU6IDA7XFxufVxcblxcbi53Z28tcGxheWVyLW1uLXdyYXBwZXIge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMzhweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIHRvcCBhbmQgYm90dG9tIG1vZGlmaWNhdGlvbnMgKi9cXG5cXG4ud2dvLXBsYXllci10b3AgLndnby1wbGF5ZXItY29udHJvbCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLndnby1wbGF5ZXItYm90dG9tIC53Z28tcGxheWVyLWNvbnRyb2wge1xcblxcdHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi8qIGRpc3BsYXkgbGVzcyBidXR0b25zICovXFxuXFxuLndnby00NDAgLndnby1idXR0b24tbXVsdGlwcmV2LCBcXG4ud2dvLTQ0MCAud2dvLWJ1dHRvbi1tdWx0aW5leHQge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53Z28tMzQwIC53Z28tYnV0dG9uLW11bHRpcHJldiwgXFxuLndnby0zNDAgLndnby1idXR0b24tbXVsdGluZXh0LCBcXG4ud2dvLTM0MCAud2dvLWJ1dHRvbi1maXJzdCwgXFxuLndnby0zNDAgLndnby1idXR0b24tbGFzdCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyotLS0gL0NvbnRyb2wgYm94IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLyotLS0gQ29udHJvbCBtZW51IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi53Z28tcGxheWVyLW1lbnUge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC41KTtcXG5cXHR6LWluZGV4OiA5MDA7XFxuXFx0bWFyZ2luLXRvcDogLTFweDtcXG5cXHRib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMTI3LDEyNywxMjcsMC41KTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRjb2xvcjogIzI5MjkyOTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ud2dvLW1lbnUtaXRlbSB7XFxuXFx0cGFkZGluZzogNXB4IDEwcHggNXB4IDVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuODUpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMjVweDtcXG59XFxuXFxuLndnby1tZW51LWl0ZW06bm90KC53Z28tZGlzYWJsZWQpOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwyMjUsMjI1LDAuODUpO1xcbn1cXG5cXG4ud2dvLW1lbnUtaXRlbTo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiAnICc7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJ3Z28taWNvbnNcXFwiO1xcblxcdGNvbG9yOiAjMDAwO1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ud2dvLW1lbnUtaXRlbS53Z28tc2VsZWN0ZWQ6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogJ1xcXFxlODEzJztcXG59XFxuXFxuLndnby1tZW51LWl0ZW0ud2dvLWRpc2FibGVkIHtcXG5cXHRjb2xvcjogIzg4ODtcXG5cXHRjdXJzb3I6IERlZmF1bHQ7XFxufVxcblxcbi53Z28tbWVudS1pdGVtLndnby1kaXNhYmxlZDo6YmVmb3JlIHtcXG5cXHRjb2xvcjogIzg4ODtcXG59XFxuXFxuLyotLS0gL0NvbnRyb2wgbWVudSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4vKi0tLSBPdmVybGF5IHdpbmRvdyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ud2dvLWluZm8tb3ZlcmxheSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi53Z28taW5mby1tZXNzYWdlIHtcXG5cXHRtYXJnaW46IDE1JSBhdXRvO1xcblxcdG1pbi1oZWlnaHQ6IDUwJTtcXG5cXHRtYXgtaGVpZ2h0OiA3MCU7XFxuXFx0bWluLXdpZHRoOiA1MCU7XFxuXFx0bWF4LXdpZHRoOiA3MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjk1KTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG5cXHQtbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG5cXHRjb2xvcjogI2Q5ZDlkOTtcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDUwcHggNXB4IHJnYigwLDAsMCk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzMzMztcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi53Z28taW5mby1tZXNzYWdlIGEge1xcblxcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxufVxcblxcbi53Z28taW5mby1tZXNzYWdlIGgxIHtcXG5cXHRmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xcblxcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcXG5cXHRtYXJnaW46IDAgMCAyMHB4IDAgIWltcG9ydGFudDtcXG5cXHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi53Z28taW5mby1jbG9zZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLyotLS0gL092ZXJsYXkgd2luZG93IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qLS0tIFBlcm1hbGlua3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ud2dvLXBlcm1hbGluayB7XFxuXFx0cGFkZGluZzogN3B4IDEwcHggIWltcG9ydGFudDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xcblxcdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcblxcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyotLS0gL1Blcm1hbGlua3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL3dnby5wbGF5ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL3dnby5wbGF5ZXIuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi93Z28ucGxheWVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IHdpZHRoIH0gZnJvbSAnZG9tLWhlbHBlcnMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uLCBXaXRoVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgQm91bmNlcldyYXBwZXIgfSBmcm9tICcuLi8uLi9Cb3VuY2VyV3JhcHBlcic7XG5pbXBvcnQgQnV0dG9uVG9nZ2xlIGZyb20gJy4uLy4uL0J1dHRvblRvZ2dsZSc7XG5pbXBvcnQgRmlsdGVyU2VsZWN0IGZyb20gJy4uLy4uL3BvcHVwcy9hbmFseXNpcy9maWx0ZXJzL0ZpbHRlclNlbGVjdCc7XG5pbXBvcnQgQ29sdW1uU2VsZWN0IGZyb20gJy4uLy4uL3BvcHVwcy9jcmVhdGUvQ29sdW1uU2VsZWN0JztcbmltcG9ydCB7IEFjdGlvblR5cGUsIEhpZGVTaWRlUGFuZWxBY3Rpb24gfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuaW1wb3J0IHsgYnVpbGRVUkxTdHJpbmcgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3VybC11dGlscyc7XG5pbXBvcnQgeyBBcHBTdGF0ZSwgQmFzZU9wdGlvbiB9IGZyb20gJy4uLy4uL3JlZHV4L3N0YXRlL0FwcFN0YXRlJztcbmltcG9ydCB7IFJlbW92YWJsZUVycm9yIH0gZnJvbSAnLi4vLi4vUmVtb3ZhYmxlRXJyb3InO1xuaW1wb3J0ICogYXMgRHR5cGVzUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9yZXBvc2l0b3J5L0R0eXBlc1JlcG9zaXRvcnknO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3N0cmluZ1V0aWxzJztcbmltcG9ydCB7IENvbHVtbkRlZiB9IGZyb20gJy4uL0RhdGFWaWV3ZXJTdGF0ZSc7XG5pbXBvcnQgKiBhcyBndSBmcm9tICcuLi9ncmlkVXRpbHMnO1xuaW1wb3J0ICogYXMgbWVudUZ1bmNzIGZyb20gJy4uL21lbnUvZGF0YVZpZXdlck1lbnVVdGlscyc7XG5cbnJlcXVpcmUoJy4vTWlzc2luZ05vQ2hhcnRzLmNzcycpO1xucmVxdWlyZSgnLi93Z28vd2dvLm1pbi5qcycpO1xucmVxdWlyZSgnLi93Z28vd2dvLnBsYXllci5jc3MnKTtcbnJlcXVpcmUoJy4vd2dvL3dnby5wbGF5ZXIubWluLmpzJyk7XG5cbi8qKiBEaWZmZXJlbnQgTWlzc2luZ05vIGNoYXJ0cyAqL1xuZXhwb3J0IGVudW0gTWlzc2luZ05vQ2hhcnQge1xuICBIRUFUTUFQID0gJ2hlYXRtYXAnLFxuICBCQVIgPSAnYmFyJyxcbiAgREVORE9HUkFNID0gJ2RlbmRyb2dyYW0nLFxuICBNQVRSSVggPSAnbWF0cmVlZXgnLFxufVxuXG5jb25zdCBidWlsZFVybHMgPSAoXG4gIGRhdGFJZDogc3RyaW5nLFxuICBkYXRlQ29sOiBCYXNlT3B0aW9uPHN0cmluZz4gfCB1bmRlZmluZWQsXG4gIGZyZXE6IEJhc2VPcHRpb248c3RyaW5nPixcbiAgY2hhcnRUeXBlOiBNaXNzaW5nTm9DaGFydCxcbik6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBidWlsZFVSTFN0cmluZyhtZW51RnVuY3MuZnVsbFBhdGgoYC9kdGFsZS9taXNzaW5nbm8vJHtjaGFydFR5cGV9YCwgZGF0YUlkKSwge1xuICAgIGRhdGVfaW5kZXg6IGRhdGVDb2w/LnZhbHVlID8/ICcnLFxuICAgIGZyZXE6IGZyZXEudmFsdWUsXG4gICAgaWQ6IGAke25ldyBEYXRlKCkuZ2V0VGltZSgpfWAsXG4gIH0pO1xuICBjb25zdCBmaWxlVXJsID0gYnVpbGRVUkxTdHJpbmcobWVudUZ1bmNzLmZ1bGxQYXRoKGAvZHRhbGUvbWlzc2luZ25vLyR7Y2hhcnRUeXBlfWAsIGRhdGFJZCksIHtcbiAgICBkYXRlX2luZGV4OiBkYXRlQ29sPy52YWx1ZSA/PyAnJyxcbiAgICBmcmVxOiBmcmVxLnZhbHVlLFxuICAgIGZpbGU6ICd0cnVlJyxcbiAgICBpZDogYCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YCxcbiAgfSk7XG4gIHJldHVybiBbaW1hZ2VVcmwsIGZpbGVVcmxdO1xufTtcblxuY29uc3QgRlJFUVMgPSBbXG4gIC4uLlsnQicsICdDJywgJ0QnLCAnVycsICdNJywgJ1NNJywgJ0JNJywgJ0NCTScsICdNUycsICdTTVMnLCAnQk1TJywgJ0NCTVMnLCAnUScsICdCUScsICdRUycsICdCUVMnLCAnWScsICdCWSddLFxuICAuLi5bJ1lTJywgJ0JZUycsICdCSCcsICdIJywgJ1QnLCAnUycsICdMJywgJ1UnLCAnTiddLFxuXTtcblxuY29uc3QgR29Cb2FyZDogUmVhY3QuRkM8V2l0aFRyYW5zbGF0aW9uPiA9ICh7IHQgfSkgPT4ge1xuICBjb25zdCBkYXRhSWQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5kYXRhSWQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGhpZGVTaWRlUGFuZWwgPSAoKTogSGlkZVNpZGVQYW5lbEFjdGlvbiA9PiBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGUuSElERV9TSURFX1BBTkVMIH0pO1xuXG4gIGNvbnN0IFtjaGFydE9wdGlvbnMsIGZyZXFPcHRpb25zXSA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAgT2JqZWN0LnZhbHVlcyhNaXNzaW5nTm9DaGFydCkubWFwKCh2YWx1ZSkgPT4gKHsgdmFsdWUsIGxhYmVsOiB0KGBtaXNzaW5nOiR7Y2FwaXRhbGl6ZSh2YWx1ZSl9YCkgfSkpLFxuICAgICAgRlJFUVMubWFwKChmKSA9PiAoeyBsYWJlbDogYCR7Zn0gLSAke3QoZiwgeyBuczogJ21pc3NpbmcnIH0pfWAsIHZhbHVlOiBmIH0pKSBhcyBBcnJheTxCYXNlT3B0aW9uPHN0cmluZz4+LFxuICAgIF0sXG4gICAgW3RdLFxuICApO1xuXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8SlNYLkVsZW1lbnQ+KCk7XG4gIGNvbnN0IFtjaGFydFR5cGUsIHNldENoYXJ0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZShNaXNzaW5nTm9DaGFydC5IRUFUTUFQKTtcbiAgY29uc3QgW2ZyZXEsIHNldEZyZXFdID0gUmVhY3QudXNlU3RhdGUoZnJlcU9wdGlvbnMuZmluZCgoZikgPT4gZi52YWx1ZSA9PT0gJ0JRJykhKTtcbiAgY29uc3QgW2RhdGVDb2wsIHNldERhdGVDb2xdID0gUmVhY3QudXNlU3RhdGU8QmFzZU9wdGlvbjxzdHJpbmc+PigpO1xuICBjb25zdCBbZGF0ZUNvbHMsIHNldERhdGVDb2xzXSA9IFJlYWN0LnVzZVN0YXRlPENvbHVtbkRlZltdPihbXSk7XG4gIGNvbnN0IFtpbWFnZUxvYWRpbmcsIHNldEltYWdlTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtmaWxlVXJsLCBzZXRGaWxlVXJsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIER0eXBlc1JlcG9zaXRvcnkubG9hZER0eXBlcyhkYXRhSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2U/LmVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKDxSZW1vdmFibGVFcnJvciB7Li4ucmVzcG9uc2V9IC8+KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlQ29scyA9IHJlc3BvbnNlLmR0eXBlcy5maWx0ZXIoKGNvbCkgPT4gZ3UuaXNEYXRlQ29sKGNvbC5kdHlwZSkpO1xuICAgICAgICBzZXREYXRlQ29scyhjdXJyZW50RGF0ZUNvbHMpO1xuICAgICAgICBzZXREYXRlQ29sKGN1cnJlbnREYXRlQ29scy5sZW5ndGggPyB7IHZhbHVlOiBjdXJyZW50RGF0ZUNvbHNbMF0ubmFtZSB9IDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXJscyA9IGJ1aWxkVXJscyhkYXRhSWQsIGRhdGVDb2wsIGZyZXEsIGNoYXJ0VHlwZSk7XG4gICAgc2V0SW1hZ2VMb2FkaW5nKHRydWUpO1xuICAgIHNldEltYWdlVXJsKHVybHNbMF0pO1xuICAgIHNldEZpbGVVcmwodXJsc1sxXSk7XG4gIH0sIFtkYXRlQ29sLCBmcmVxLCBjaGFydFR5cGVdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHdnb19taW5fanMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIGNvbnN0IHdnb19wbGF5ZXJfbWluX2pzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICB3Z29fbWluX2pzLnNyYyA9IFwid2dvL3dnby5taW4uanNcIjtcbiAgICB3Z29fcGxheWVyX21pbl9qcy5zcmMgPSBcIndnby93Z28ucGxheWVyLm1pbi5qc1wiO1xuICAgIHdnb19taW5fanMuYXN5bmMgPSB0cnVlO1xuICAgIHdnb19wbGF5ZXJfbWluX2pzLmFzeW5jID0gdHJ1ZTtcbiAgICB3Z29fbWluX2pzLmRlZmVyID0gdHJ1ZTtcbiAgICB3Z29fcGxheWVyX21pbl9qcy5kZWZlciA9IHRydWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQod2dvX21pbl9qcyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQod2dvX3BsYXllcl9taW5fanMpO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGRhdGEtd2dvPVwiXCIgc3R5bGU9e3t3aWR0aDogJzcwMHB4J319PlxuICAgICAgU29ycnksIHlvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgV0dvLmpzLiBEb3dubG9hZCBTR0YgPGEgaHJlZj1cImdhbWUuc2dmXCI+ZGlyZWN0bHk8L2E+LlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydtZW51JywgJ21pc3NpbmcnLCAnc2lkZScsICdidWlsZGVycyddKShHb0JvYXJkKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY5YTY5ZjVkNGY1MDdmZTgwMDJjXCIpIl0sIm5hbWVzIjpbInYiLCJxIiwibSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnIiwidmVyc2lvbiIsIkIiLCJXIiwiRVJST1JfUkVQT1JUIiwiRElSIiwibGVuZ3RoIiwic3JjIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJsYW5nIiwiaTE4biIsImVuIiwib3BlcmEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzZWFyY2giLCJ3ZWJraXQiLCJtc2llIiwibW96aWxsYSIsInQiLCJhIiwiYiIsImMiLCJhcmd1bWVudHMiLCJyZXBsYWNlIiwiZXh0ZW5kQ2xhc3MiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiYWJzdHJhY3RNZXRob2QiLCJFcnJvciIsImNsb25lIiwiQXJyYXkiLCJmaWx0ZXJIVE1MIiwiaCIsIkJvYXJkIiwiZGVmYXVsdCIsInRoZW1lcyIsInRoZW1lIiwidHgiLCJzZWN0aW9uIiwibGVmdCIsInR5IiwidG9wIiwiYngiLCJzaXplIiwicmlnaHQiLCJieSIsImJvdHRvbSIsImluaXQiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJwaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0RGltZW5zaW9ucyIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwib2xkIiwic2hhZG93Q29sb3IiLCJzaGFkb3dUcmFuc3BhcmVudENvbG9yIiwic2hhZG93Qmx1ciIsInNoYWRvd1NpemUiLCJtYXJrdXBCbGFja0NvbG9yIiwibWFya3VwV2hpdGVDb2xvciIsIm1hcmt1cE5vbmVDb2xvciIsIm1hcmt1cExpbmVzV2lkdGgiLCJhdXRvTGluZVdpZHRoIiwic3RvbmVSYWRpdXMiLCJsaW5lV2lkdGgiLCJncmlkTGluZXNXaWR0aCIsImdyaWRMaW5lc0NvbG9yIiwiTWF0aCIsIm1pbiIsInN0YXJDb2xvciIsInN0YXJTaXplIiwic3RvbmVTaXplIiwiZmllbGRXaWR0aCIsImZpZWxkSGVpZ2h0IiwiY29vcmRpbmF0ZXNDb2xvciIsImZvbnQiLCJsaW5lc1NoaWZ0IiwidmFyaWF0aW9uQ29sb3IiLCJrIiwiZHJhdyIsImdldFgiLCJ4IiwiZSIsImdldFkiLCJ5IiwiZCIsImJlZ2luUGF0aCIsImYiLCJtYXgiLCJuIiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJscyIsImFkZENvbG9yU3RvcCIsImZpbGxTdHlsZSIsImFyYyIsIlBJIiwiZmlsbCIsImNsZWFyIiwiY2xlYXJSZWN0IiwicCIsIm9ial9hcnIiLCJEIiwidyIsImFuZ2xlIiwibGluZXMiLCJjdHgiLCJyYWRpdXMiLCJmYWN0b3IiLCJsIiwidGhpY2tuZXNzIiwic3Ryb2tlU3R5bGUiLCJjb3MiLCJzaW4iLCJyIiwiYXRhbiIsIm1vdmVUbyIsImJlemllckN1cnZlVG8iLCJzdHJva2UiLCJkcmF3SGFuZGxlcnMiLCJOT1JNQUwiLCJzdG9uZSIsInNoYWRvdyIsIlBBSU5URUQiLCJHTE9XIiwiU0hFTEwiLCJjZWlsIiwicmFuZG9tIiwiTU9OTyIsIkNSIiwiTEIiLCJ0ZXh0Iiwicm91bmQiLCJ0ZXh0QmFzZWxpbmUiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsImdyaWQiLCJfbm9kcmF3IiwidHlwZSIsInN0b25lSGFuZGxlciIsImNhbGwiLCJnZXRDb250ZXh0Iiwib2JqX2xpc3QiLCJoYW5kbGVyIiwiYXJncyIsIlNRIiwicmVjdCIsIlRSIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiTUEiLCJsaW5lQ2FwIiwiU0wiLCJTTSIsIm91dGxpbmUiLCJnbG9iYWxBbHBoYSIsImFscGhhIiwic3RvbmVTdHlsZSIsIm1pbmkiLCJjb29yZGluYXRlcyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIkNhbnZhc0xheWVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJzY2FsZSIsInN0eWxlIiwiYXBwZW5kVG8iLCJwb3NpdGlvbiIsInpJbmRleCIsInJlbW92ZUZyb20iLCJyZW1vdmVDaGlsZCIsIkdyaWRMYXllciIsInN0cm9rZVJlY3QiLCJzdGFyUG9pbnRzIiwiTXVsdGlwbGVDYW52YXNMYXllciIsImxheWVycyIsImVsZW1lbnRzIiwiY29udGV4dHMiLCJwdXNoIiwiU2hhZG93TGF5ZXIiLCJib2FyZCIsInNldFRyYW5zZm9ybSIsIkUiLCJ6IiwiQSIsIkYiLCJsYXllclgiLCJsYXllclkiLCJDIiwibGlzdGVuZXJzIiwiY2xhc3NOYW1lIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImFkZExheWVyIiwicmVkcmF3IiwicGFyc2VJbnQiLCJnZXRTZWN0aW9uIiwic2V0U2VjdGlvbiIsInNldFNpemUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInJlbW92ZUxheWVyIiwiaW5kZXhPZiIsInNwbGljZSIsInVwZGF0ZSIsInJlbW92ZSIsInJlbW92ZUFsbE9iamVjdHMiLCJyZW1vdmVPYmplY3QiLCJhZGQiLCJhZGRPYmplY3QiLCJ1bnNoaWZ0IiwicmVtb3ZlT2JqZWN0c0F0IiwiYWRkQ3VzdG9tT2JqZWN0IiwicmVtb3ZlQ3VzdG9tT2JqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrIiwiaGFuZGxlRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0U3RhdGUiLCJvYmplY3RzIiwiY3VzdG9tIiwicmVzdG9yZVN0YXRlIiwicyIsInNjaGVtYSIsIlBvc2l0aW9uIiwiZ2V0Iiwic2V0IiwiY29tcGFyZSIsImZsb29yIiwicmVwZWF0aW5nIiwiYWxsb3dfcmV3cml0ZSIsImFsbG93X3N1aWNpZGUiLCJzdGFjayIsImNhcENvdW50IiwiYmxhY2siLCJ3aGl0ZSIsInR1cm4iLCJkZWZpbmVQcm9wZXJ0eSIsInUiLCJnZXRQb3NpdGlvbiIsInBsYXkiLCJpc09uQm9hcmQiLCJjb25jYXQiLCJjb2xvciIsInB1c2hQb3NpdGlvbiIsInBhc3MiLCJpc1ZhbGlkIiwiYWRkU3RvbmUiLCJyZW1vdmVTdG9uZSIsInNldFN0b25lIiwiZ2V0U3RvbmUiLCJwb3BQb3NpdGlvbiIsInBvcCIsImZpcnN0UG9zaXRpb24iLCJnZXRDYXB0dXJlQ291bnQiLCJ2YWxpZGF0ZVBvc2l0aW9uIiwiR2FtZSIsIldHbyIsIndpbmRvdyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImdldFByb3BlcnRpZXMiLCJjaGlsZHJlbiIsImluc2VydEFmdGVyIiwic2dmIiwibW92ZSIsInNldHVwIiwibWFya3VwIiwiaW5mbyIsInJvb3QiLCJwcm9wZXJ0eUNvdW50Iiwibm9kZUNvdW50IiwiaGFzQ29tbWVudHMiLCJmcm9tU2dmIiwiU0dGIiwiZnJvbUpHTyIsImdhbWUiLCJ0b1NnZiIsIm5hbWUiLCJQQiIsInJhbmsiLCJCUiIsInRlYW0iLCJCVCIsIlBXIiwiV1IiLCJXVCIsIlNaIiwiQVAiLCJGRiIsIkdNIiwiQ0EiLCJ0b0pHTyIsImluZm9Gb3JtYXR0ZXJzIiwiVE0iLCJSRSIsImluZm9MaXN0IiwiS2lmdSIsInBhcmVudCIsImdldENoaWxkIiwiYWRkU2V0dXAiLCJyZW1vdmVTZXR1cCIsImFkZE1hcmt1cCIsInJlbW92ZU1hcmt1cCIsIkV4Y2VwdGlvbiIsImhhc093blByb3BlcnR5IiwiS05vZGUiLCJraWZ1Iiwibm9kZSIsImFsbG93X2lsbGVnYWwiLCJwYXRoIiwiSEEiLCJjaGFuZ2UiLCJyZW1lbWJlclBhdGgiLCJfbGFzdF9zZWxlY3RlZCIsIm5leHQiLCJsYXN0IiwicHJldmlvdXMiLCJmaXJzdCIsImdvVG8iLCJwcmV2aW91c0ZvcmsiLCJhbGxvd0lsbGVnYWxNb3ZlcyIsIktpZnVSZWFkZXIiLCJXSElURSIsIkludmFsaWRNb3ZlRXJyb3IiLCJzaG93IiwicHJvcGVydGllcyIsImNoYXJDb2RlQXQiLCJBQiIsIkFXIiwiQUUiLCJQTCIsImNvbW1lbnQiLCJzdWJzdHIiLCJiaW5kIiwiQkwiLCJXTCIsIm1hdGNoIiwiZXhlYyIsInN1YnN0cmluZyIsIkZpbGVFcnJvciIsImxvYWRGcm9tVXJsIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiLCJ0ZW1wX21hcmtzIiwibm90aWZpY2F0aW9uIiwiY29uZmlnIiwibWFya0xhc3RNb3ZlIiwiZGlzcGxheVZhcmlhdGlvbnMiLCJlbmFibGVXaGVlbCIsInNldFdoZWVsIiwiX3dnb19zY3JvbGxhYmxlIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm92ZXJmbG93IiwicGFyZW50Tm9kZSIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJ0YXJnZXQiLCJsb2NrU2Nyb2xsIiwicHJldmVudERlZmF1bHQiLCJxdWVyeVNlbGVjdG9yIiwia2V5Q29kZSIsImtpZnVSZWFkZXIiLCJpbml0R2FtZSIsImtpZnVMb2FkZWQiLCJmcm96ZW4iLCJ1bmZyb3plbiIsImZvY3VzIiwibG9hZFNnZiIsImpzb24iLCJsb2FkSlNPTiIsInNnZkZpbGUiLCJsb2FkU2dmRnJvbUZpbGUiLCJvcCIsImRpc3BhdGNoRXZlbnQiLCJsb2FkS2lmdSIsImVycm9yIiwiaGVscCIsImdldEdhbWVJbmZvIiwic2V0RnJvemVuIiwiZW5hYmxlS2V5cyIsInNldEtleXMiLCJvbmtleWRvd24iLCJfd2hlZWxfbGlzdGVuZXIiLCJvbm1vdXNld2hlZWwiLCJzZXRDb29yZGluYXRlcyIsIlBsYXllciIsIkRUIiwiS00iLCJBTiIsIkNQIiwiR0MiLCJHTiIsIk9OIiwiT1QiLCJSTyIsIlJVIiwiVVMiLCJQQyIsIkVWIiwiU08iLCJub25lIiwiYnBhc3MiLCJ3cGFzcyIsIndyYXBwZXIiLCJkaXNwbGF5IiwiY3VycmVudExheW91dCIsImxheW91dCIsInJlZ2lvbnMiLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwiX2RldGFjaEZyb21QbGF5ZXIiLCJpbm5lckhUTUwiLCJjbGFzc2VzIiwiaWQiLCJkb20iLCJjZW50ZXIiLCJub3Jlc2l6ZSIsInVwZGF0ZURpbWVuc2lvbnMiLCJmaXJzdENoaWxkIiwibWF4SGVpZ2h0IiwiY29uZGl0aW9ucyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJsYXN0TGF5b3V0IiwiY2xpZW50V2lkdGgiLCJwYWRkaW5nVG9wIiwic2hvd01lc3NhZ2UiLCJpbmZvX292ZXJsYXkiLCJvZmZzZXRXaWR0aCIsImhpZGVNZXNzYWdlIiwic3RhY2t0cmFjZSIsImxheW91dHMiLCJvbmVfY29sdW1uIiwibm9fY29tbWVudCIsInJpZ2h0X3RvcCIsIm1pbmltYWwiLCJkeW5hbWljTGF5b3V0IiwiYXR0cmlidXRlcyIsImV2YWwiLCJGdW5jdGlvbiIsInRvTG93ZXJDYXNlIiwiQmFzaWNQbGF5ZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwidmFsdWUiLCJfd2dvX3BsYXllciIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiQ29tcG9uZW50IiwiYm94IiwidmFsIiwiY2FwcyIsInRpbWUiLCJ0aXRsZSIsInNldFBsYXllclRpbWUiLCJmb250U2l6ZSIsIkluZm9Cb3giLCJfdG1wX21hcmsiLCJjaGlsZE5vZGVzIiwicGxheWVyIiwiY29tbWVudHNfdGl0bGUiLCJjb21tZW50cyIsImNvbW1lbnRfdGV4dCIsIl91cGRhdGUiLCJzZXRDb21tZW50cyIsImlzX25vdGlmaWNhdGlvbiIsImlzX2hlbHAiLCJnZXRDb21tZW50VGV4dCIsImZvcm1hdE5pY2tzIiwiZm9ybWF0TW92ZXMiLCJnYW1laW5mbyIsIkNvbW1lbnRCb3giLCJ3aWRnZXRzIiwiaWNvbkJhciIsImNvbnRyb2wiLCJkaXNhYmxlZCIsImVuYWJsZSIsImRpc2FibGUiLCJfZGlzYWJsZWQiLCJXaWRnZXQiLCJHcm91cCIsIkNsaWNrYWJsZSIsInRvZ2dsYWJsZSIsImNsaWNrIiwic2VsZWN0IiwidW5zZWxlY3QiLCJtdWx0aXBsZSIsIl90b3VjaF9pIiwiX3RvdWNoX2ludCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNlbGVjdGVkIiwiQnV0dG9uIiwiTWVudUl0ZW0iLCJNb3ZlTnVtYmVyIiwibWF4bGVuZ3RoIiwib25zdWJtaXQiLCJvbmNoYW5nZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJfbWVudV90bXAiLCJtZW51IiwicGFyZW50RWxlbWVudCIsIl9tZW51X2V2Iiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsImFib3V0IiwibXVsdGlwcmV2IiwibXVsdGluZXh0IiwiQ29udHJvbCIsIl9sYXN0WCIsIl9sYXN0WSIsIl9sYXN0X21hcmsiLCJFZGl0YWJsZSIsImVkaXRNb2RlIiwib3JpZ2luYWxSZWFkZXIiLCJfZXZfY2xpY2siLCJfZXZfbW92ZSIsIl9ldl9vdXQiLCJfZWRpdGVkIiwiX2VkaXRhYmxlIiwiZWRpdG1vZGUiLCJvcmlnaW5hbFBvc2l0aW9uIiwia29taSIsIm91dHB1dCIsInN0YXRlIiwiVU5LTk9XTiIsIkJMQUNLX1NUT05FIiwiV0hJVEVfU1RPTkUiLCJCTEFDS19DQU5ESURBVEUiLCJXSElURV9DQU5ESURBVEUiLCJCTEFDS19ORVVUUkFMIiwiV0hJVEVfTkVVVFJBTCIsIk5FVVRSQUwiLCJzdGFydCIsImNhbGN1bGF0ZSIsInNhdmVkX3N0YXRlIiwiZGlzcGxheVNjb3JlIiwiX2NsaWNrIiwiZW5kIiwicGFyc2VGbG9hdCIsIlNjb3JlTW9kZSIsIl9zY29yZV9tb2RlIiwic2NvcmVtb2RlIiwic2NvcmUiLCJid2luIiwid3dpbiIsImhlbHBfc2NvcmUiLCJhY3RpdmUiLCJxdWVyeSIsImxvY2F0aW9uIiwiaGFzaCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJnb3RvIiwiaHJlZiIsInBlcm1hbGluayJdLCJzb3VyY2VSb290IjoiIn0=