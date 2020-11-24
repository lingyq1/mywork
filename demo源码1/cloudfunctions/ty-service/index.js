parcelRequire = function (e, r, t, n) {
  var i, o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      p.resolve = function (r) {
        return e[t][1][r] || r
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this)
    }
    return r[t].exports;

    function p(e) {
      return f(p.resolve(e))
    }
  }
  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {}
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t
    }, {}]
  };
  for (var c = 0; c < t.length; c++) try {
    f(t[c])
  } catch (e) {
    i || (i = e)
  }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l
    }) : n && (this[n] = l)
  }
  if (parcelRequire = f, i) throw i;
  return f
}({
  "FOZT": [function (require, module, exports) {
    exports.filterValue = function (t, e) {
      for (let r in t) t[r] === e && delete t[r]
    }, exports.filterUndefined = function (t) {
      return exports.filterValue(t, void 0)
    }, exports.filterNull = function (t) {
      return exports.filterValue(t, null)
    }, exports.filterEmptyString = function (t) {
      return exports.filterValue(t, "")
    }, exports.warpPromise = function (t) {
      return function (...e) {
        return new Promise(function (r, n) {
          try {
            return t(...e).then(r).catch(n)
          } catch (o) {
            n(o)
          }
        })
      }
    }, exports.objKeySort = function (t) {
      const e = Object.keys(t).sort(),
        r = {};
      for (let n = 0; n < e.length; n++) r[e[n]] = t[e[n]];
      return r
    };
  }, {}],
  "gvuK": [function (require, module, exports) {
    function e(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), r.push.apply(r, o)
      }
      return r
    }

    function t(t) {
      for (var o = 1; o < arguments.length; o++) {
        var n = null != arguments[o] ? arguments[o] : {};
        o % 2 ? e(Object(n), !0).forEach(function (e) {
          r(t, e, n[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        })
      }
      return t
    }

    function r(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }
    const o = require("http"),
      n = require("request"),
      c = require("crypto"),
      s = require("wx-server-sdk"),
      i = require("./utils");
    module.exports = i.warpPromise(u);
    const a = "iot-collection",
      l = {
        developmentUrl: "https://openapi-cn.wgine.com/action",
        productionUrl: "https://openapi.tuyacn.com/faas",
        client_id: "",
        secret: "",
        headers: {
          sign_method: "HMAC-SHA256",
          "Content-Type": "application/json"
        },
        timeout: 15e3
      };
    async function u(e) {
      const r = e.config || l,
        u = e.method || "post",
        p = (new Date).valueOf(),
        {
          action: d,
          params: f
        } = (e.isDebug, e),
        b = e.wxContext || {},
        {
          APPID: m,
          OPENID: h
        } = b,
        O = s.database(),
        {
          data: g
        } = await O.collection(a).get();
      if ("hello" === d) return new Promise((e, t) => {
        e({
          result: "Welcome to the tuya cloud",
          success: !0
        })
      });
      const {
        AccessID: y,
        AppSecret: w,
        Schema: j,
        env: P
      } = g[0];
      r.client_id = y, r.secret = w, f && "cloud" === f.open_id && (f.open_id = h), f && "cloud" === f.app_schema && (f.app_schema = j);
      const _ = r.productionUrl;
      console.log("collection data is", g), console.log("params is ", e);
      const S = Object.assign({}, {
        action: d,
        params: t({}, f)
      });
      i.filterUndefined(S);
      const C = JSON.stringify(i.objKeySort(f)),
        D = `${r.client_id}${C}${p}`,
        v = e.client_id || r.client_id,
        x = {
          sign: c.createHmac("sha256", r.secret).update(D).digest("hex").toUpperCase(),
          wxAppId: c.createHash("md5").update(m).digest("hex"),
          client_id: v,
          t: p
        },
        A = {
          url: _,
          method: u,
          timeout: r.timeout || 15e3,
          headers: Object.assign({}, r.headers, e.headers, x),
          body: S,
          json: !0
        };
      try {
        return await new Promise(function (t, r) {
          n(A, function (n, c, s) {
            if (e && e.callback && e.callback(c), n) return r(n);
            if (200 === c.statusCode) {
              let e;
              try {
                e = "string" == typeof s ? JSON.parse(s) : s
              } catch (i) {
                e = s
              }
              return console.log("res", e), t(e)
            } {
              const e = new Error(`${c.statusCode} ${o.STATUS_CODES[c.statusCode]}`);
              e.statusCode = c.statusCode, r(e)
            }
          })
        })
      } catch (q) {
        console.log("err", q)
      }
    }
  }, {
    "./utils": "FOZT"
  }],
  "Focm": [function (require, module, exports) {
    const r = require("wx-server-sdk");
    r.init();
    const t = r.logger(),
      e = require("./httpRequest");
    exports.main = async function (s, o) {
      let {
        action: c,
        params: n,
        client_id: a
      } = s;
      const i = r.getWXContext(o);
      try {
        const {
          code: r,
          msg: s,
          success: o,
          result: u,
          t: g
        } = await e({
          params: n,
          action: c,
          wxContext: i,
          client_id: a
        });
        return {
          errorCode: r,
          errorMsg: s,
          data: u,
          success: o,
          t: g
        }
      } catch (d) {
        return t.info({
          errorCode: "500",
          errorMsg: d,
          action: c,
          params: n,
          client_id: a,
          t: g
        }), {
          errorCode: "500",
          errorMsg: d,
          data: [],
          success: !1,
          t: g
        }
      }
    };
  }, {
    "./httpRequest": "gvuK"
  }]
}, {}, ["Focm"], null)