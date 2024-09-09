(() => {
  "use strict";
  var e = {
      1740: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EFeedbackButtonType =
            t.EFeedbackMode =
            t.ESelectedPosition =
            t.EViewableKey =
            t.ECreativeType =
            t.ELabelPosition =
            t.ConnectionEffectiveType =
              void 0),
          (function (e) {
            (e.SlowSecondGeneration = "slow-2g"),
              (e.SecondGeneration = "2g"),
              (e.ThirdGeneration = "3g"),
              (e.FourthGeneration = "4g");
          })(t.ConnectionEffectiveType || (t.ConnectionEffectiveType = {})),
          (function (e) {
            (e.Top = "Top"),
              (e.Bottom = "Bottom"),
              (e.TopOverlay = "Top Overlay"),
              (e.BottomOverlay = "Bottom Overlay");
          })(t.ELabelPosition || (t.ELabelPosition = {})),
          (function (e) {
            (e[(e.Agency = 0)] = "Agency"),
              (e[(e.Image = 1)] = "Image"),
              (e[(e.HTML5 = 4)] = "HTML5");
          })(t.ECreativeType || (t.ECreativeType = {})),
          (function (e) {
            (e.Viewcount = "viewcount"),
              (e.ImpressionsOnePx = "impressionsonepx"),
              (e.ViewUndetermined = "viewUndetermined");
          })(t.EViewableKey || (t.EViewableKey = {})),
          (function (e) {
            (e.AdPlacement = "ad placement"),
              (e.Automatic = "automatic"),
              (e.ParagraphById = "paragraph by id"),
              (e.ParagraphByClassName = "paragraph by class name"),
              (e.ParagraphByItemProp = "paragraph by item prop"),
              (e.SpecifiedElementById = "specified element by id"),
              (e.SpecifiedElementByClassName =
                "specified element by class name");
          })(t.ESelectedPosition || (t.ESelectedPosition = {})),
          (function (e) {
            (e.Standard = "standard"), (e.AllowClose = "allowClose");
          })(t.EFeedbackMode || (t.EFeedbackMode = {})),
          (function (e) {
            (e.Info = "info"),
              (e.Close = "close"),
              (e.InfoWithClose = "infoWithClose");
          })(t.EFeedbackButtonType || (t.EFeedbackButtonType = {}));
      },
      7322: function (e, t) {
        var i =
          (this && this.__awaiter) ||
          function (e, t, i, r) {
            return new (i || (i = Promise))(function (n, s) {
              function o(e) {
                try {
                  l(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function a(e) {
                try {
                  l(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(o, a);
              }
              l((r = r.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Global = void 0);
        t.Global = class {
          constructor(e = !1) {
            if (
              ((this.d = document),
              (this.w = window),
              (this.logOn = !1),
              (this.isReady = !1),
              (this.impressionsOnePxArea = 1e-4),
              (this.getHiddenProp = () => {
                const e = ["webkit", "moz", "ms", "o"];
                if ("hidden" in this.d) return "hidden";
                for (const t of e)
                  if (t + "Hidden" in document) return t + "Hidden";
                return null;
              }),
              (this.visibilityHandler = () => {
                (() => {
                  const e = this.getHiddenProp();
                  return !!e && this.d[e];
                })()
                  ? this.blurHandler()
                  : this.focusHanlder();
              }),
              !e)
            ) {
              let e;
              if (
                ((e =
                  !!this.getIeVersion(navigator.userAgent) ||
                  window.frameElement),
                e && void 0 !== window.inDapIF && window.inDapIF)
              ) {
                this.log("FIF mode");
                const e = this.useTopWindow();
                this.friendlyIframe = e.currentFrame;
              }
            }
            (this.isAMPFrame = this.isAMP()),
              this.docReady(() => (this.isReady = !0));
          }
          useTopWindow() {
            const e = this.getTopWindow();
            return (this.w = e.currentWindow), (this.d = this.w.document), e;
          }
          addElement(e, t, i, r = !1) {
            const n = this.d.createElement(e);
            for (const e in i)
              Object.prototype.hasOwnProperty.call(i, e) &&
                n.setAttribute(e, String(i[e]));
            return (
              r ? t.insertBefore(n, t.firstElementChild) : t.appendChild(n), n
            );
          }
          addEvent(e, t, i) {
            e &&
              t &&
              i &&
              (e.addEventListener
                ? e.addEventListener(t, i, !1)
                : e.attachEvent && e.attachEvent("on" + t, i));
          }
          addCss(e, t = this.d.getElementsByTagName("head")[0]) {
            const i = this.d.createElement("style");
            (i.type = "text/css"),
              i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(this.d.createTextNode(e)),
              t.appendChild(i);
          }
          log(...e) {
            this.logOn && console.log(e);
          }
          docReady(e, t = this.w, i = this.d) {
            const r = () => {
              this.log("ready"),
                i.removeEventListener("DOMContentLoaded", r, !1),
                t.removeEventListener("load", r, !1),
                e();
            };
            "complete" === i.readyState
              ? setTimeout(e)
              : (i.addEventListener("DOMContentLoaded", r, !1),
                t.addEventListener("load", r, !1));
          }
          winReady(e, t = this.w, i = this.d) {
            const r = () => {
              this.log("window loaded"),
                t.removeEventListener("load", r, !1),
                e();
            };
            t.addEventListener("load", r, !1);
          }
          tracking(e) {
            if (e) {
              new Image().src = e;
            }
          }
          isChild(e, t) {
            if (t) {
              let i = t.parentNode;
              for (; null != i; ) {
                if (i === e) return !0;
                i = i.parentNode;
              }
            }
            return !1;
          }
          getElementVisibility(e) {
            const t = e.getBoundingClientRect(),
              i = (t.right - t.left) * (t.bottom - t.top);
            if (0 === i) return 0;
            const r = Math.max(
                0,
                Math.min(t.bottom, this.w.innerHeight) - Math.max(0, t.top)
              ),
              n = Math.max(
                0,
                Math.min(t.right, this.w.innerWidth) - Math.max(0, t.left)
              );
            return Math.round((r * n * 100) / i);
          }
          checkTabVisibility(e, t) {
            (this.focusHanlder = e), (this.blurHandler = t);
            const i = this.getVisibilityEventName();
            i && this.addEvent(this.d, i, this.visibilityHandler);
          }
          clearTabVisibilityHandler() {
            const e = this.getVisibilityEventName();
            e && this.d.removeEventListener(e, this.visibilityHandler);
          }
          getVisibilityEventName() {
            let e = "";
            const t = this.getHiddenProp();
            return (
              t && (e = t.replace(/[H|h]idden/, "") + "visibilitychange"), e
            );
          }
          getIosVersion() {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
              const e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              if (e)
                return [
                  parseInt(e[1], 10),
                  parseInt(e[2], 10),
                  parseInt(e[3] || "0", 10),
                ];
            }
          }
          isExternal(e, t) {
            const i = this.getDomain(t);
            return -1 === e.indexOf(i);
          }
          getDomain(e) {
            let t = e;
            if (null != e) {
              const i = e.split(".").reverse();
              null != i && i.length > 1 && (t = i[1] + "." + i[0]);
            }
            return t;
          }
          offsetTop(e) {
            let t = 0;
            do {
              isNaN(e.offsetTop) || (t += e.offsetTop), (e = e.offsetParent);
            } while (e);
            return t;
          }
          isString(e) {
            return "string" == typeof e || e instanceof String;
          }
          isObjectEmpty(e) {
            return (
              "object" == typeof e &&
              !Array.isArray(e) &&
              null !== e &&
              0 === Object.keys(e).length &&
              Object.getPrototypeOf(e) === Object.prototype
            );
          }
          isFirefox() {
            return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
          }
          isSafari() {
            const e = this.w.navigator.userAgent;
            return !!(e.indexOf("Safari") > 0 && /iPad|iPhone|iPod/.test(e));
          }
          getPageHeight() {
            const e = this.d.body,
              t = this.d.documentElement;
            return Math.max(
              e.scrollHeight,
              e.offsetHeight,
              t.clientHeight,
              t.scrollHeight,
              t.offsetHeight
            );
          }
          getIeVersion(e) {
            e = e || navigator.userAgent;
            const t = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(e);
            return t ? parseInt(t[2], 10) : void 0;
          }
          offset(e) {
            const t = e.getBoundingClientRect(),
              i = this.w.pageYOffset || this.d.documentElement.scrollTop;
            return {
              top: t.top + i,
              bottom: t.bottom + i,
              left: t.left,
              right: t.right,
            };
          }
          triggerCustomEvent(
            e,
            t,
            i = null,
            r = { width: void 0, height: void 0 }
          ) {
            if (!e.length) return;
            let n;
            this.d.createEvent
              ? ((n = this.d.createEvent("HTMLEvents")), n.initEvent(e, !0, !0))
              : ((n = this.d.createEventObject()), (n.eventType = e)),
              (n.eventName = e),
              null !== i && (n.videoDuration = i),
              void 0 !== r.width && void 0 !== r.height && (n.creativeSize = r),
              (n.formatId = t),
              this.d.createEvent
                ? this.w.dispatchEvent(n)
                : this.w.fireEvent("on" + n.eventType, n);
          }
          getTopWindow() {
            let e = 5,
              t = window,
              i = this.getIeVersion(navigator.userAgent)
                ? null
                : window.frameElement;
            for (; e--; )
              try {
                t.parent &&
                  t.parent.document &&
                  ((i = t.frameElement),
                  (t = t.parent),
                  t === t.parent && (e = 0));
              } catch (e) {
                this.log("getTopWindow error", e);
              }
            return { currentWindow: t, currentFrame: i };
          }
          isMobile() {
            return "ontouchstart" in this.w;
          }
          getJson(e) {
            return i(this, void 0, void 0, function* () {
              const t = yield fetch(e);
              try {
                t.parsedBody = yield t.json();
              } catch (e) {
                throw new Error("JSON parsing error, " + e);
              }
              if (!t.ok)
                throw new Error("Server responded with " + t.statusText);
              return t;
            });
          }
          isValidStringField(e) {
            return Boolean(e) && this.isString(e);
          }
          limitString(e, t) {
            return e.length > t ? e.substring(0, t - 3) + "..." : e;
          }
          trackArrayOfPixels(e) {
            for (const t of e) t && this.tracking(t);
          }
          isAMP() {
            return this.w.context
              ? "AMP-AD" === this.w.context.tagName
              : this.w.name.indexOf('"tagName":"AMP-AD"') > -1;
          }
        };
      },
      885: (e, t, i) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ViewabilityCore = void 0);
        const r = i(7322);
        class n extends r.Global {
          constructor() {
            super(),
              (this.integration = 0),
              (this.resultLayer = null),
              (this.playingCreativeId = null),
              (this.pixels = {}),
              (this.threshold = []),
              (this.isIOCallbackCalled = !1),
              this.addEvent(this.d, "visibilitychange", () => {
                this.d.hidden
                  ? this.w.clearTimeout(this.ioTimeoutId)
                  : this.checkCurrentState();
              });
          }
          videoHandler(e, t) {
            const i = ["complete", "skip", "AdSkipped", "AdStopped"];
            i
              .concat([
                "pause",
                "AdPaused",
                "abort",
                "emptied",
                "ended",
                "error",
                "seeked",
                "seeking",
              ])
              .indexOf(e) > -1
              ? (this.playingCreativeId = null)
              : [
                  "start",
                  "AdStarted",
                  "AdPlaying",
                  "resume",
                  "play",
                  "playing",
                ].indexOf(e) > -1 &&
                ((this.playingCreativeId = t),
                void 0 !== this.intersectionObserverCallback &&
                  0 !== Object.keys(this.pixels).length &&
                  this.intersectionObserverCallback(
                    this.lastIntersectionObserverEntry
                  )),
              i.indexOf(e) > -1 && this.executePixels(t, "notviewable");
          }
          updateCreativePixels(e, t) {
            return (
              this.log("updateCreativePixels"),
              (this.isIOCallbackCalled = !1),
              void 0 !== this.intersectionObserverCallback &&
                this.intersectionObserverCallback(
                  this.lastIntersectionObserverEntry
                ),
              (this.pixels[e] = t)
            );
          }
          start(e, t, i) {
            this.log("start", e, t, i);
            if (
              ((e = this.checkElementStatus(e).element), (this.pixels = t), !e)
            )
              throw new Error(
                `Smart Viewability: passed element to measure is not valid and its value is "${e}"`
              );
            const r = this.mergeOptions(i, e);
            if (
              (r.videoIntegration ||
                (this.playingCreativeId = Object.keys(t)[0]
                  ? String(Object.keys(t)[0])
                  : "1"),
              (this.integration = r.videoIntegration || this.integration),
              r.logMessages && (this.logOn = !0),
              r.testLayer && (this.resultLayer = this.addInfoLayer()),
              i && i.threshold)
            ) {
              this.threshold = i.threshold;
              const e = "lastSent",
                t = "aboveCallback",
                r = "belowCallback";
              this.threshold.forEach((i) => {
                (i[e] = 0),
                  "function" != typeof i[t] && (i[t] = () => console.log()),
                  "function" != typeof i[r] && (i[r] = () => console.log());
              });
            }
            e.id || (e.id = "sas_" + new Date().getTime() + "rnd"),
              this.initIntersactionObserver(e, r),
              window.addEventListener("beforeunload", () => {
                this.executePixels(this.playingCreativeId, "notviewable");
              });
          }
          checkCurrentState() {
            void 0 === this.intersectionObserverCallback ||
              this.isIOCallbackCalled ||
              this.intersectionObserverCallback(
                this.lastIntersectionObserverEntry
              );
          }
          initIntersactionObserver(e, t) {
            this.intersectionObserverCallback = (i) => {
              (this.lastIntersectionObserverEntry = i),
                i &&
                  i.forEach((i) => {
                    this.checkThreshold(100 * i.intersectionRatio),
                      void 0 !== (null == t ? void 0 : t.area) &&
                      100 * i.intersectionRatio >= t.area &&
                      this.playingCreativeId &&
                      !this.d.hidden
                        ? (this.ioTimeoutId = this.w.setTimeout(() => {
                            (this.isIOCallbackCalled = !0),
                              this.triggerViewableEvent(t),
                              this.integration < 2 && r.unobserve(e);
                          }, 1e3 * (t.delay || 0)))
                        : this.w.clearTimeout(this.ioTimeoutId);
                  });
            };
            const i = { threshold: ((null == t ? void 0 : t.area) || 0) / 100 },
              r = new this.w.IntersectionObserver(
                this.intersectionObserverCallback,
                i
              );
            r.observe(e);
          }
          triggerViewableEvent(e) {
            this.log(
              `Element visible more than ${e.area}% for ${e.delay} seconds`
            ),
              this.executePixels(this.playingCreativeId, "viewable"),
              this.executeViewCallback(e),
              e.testLayer &&
                this.resultLayer &&
                (this.resultLayer.innerHTML = "&#10004;");
          }
          executeViewCallback(e) {
            e.viewCallback &&
              (e.viewCallback(),
              (e.viewCallback = void 0),
              this.log("View callback function called"));
          }
          checkElementStatus(e) {
            const t = { measurable: !0, element: e };
            if (!e || window.self === window.top || this.w.self === this.w.top)
              return this.log("No iframe detected"), t;
            this.log("Iframe detected");
            const i = this.useTopWindow();
            t.element =
              null === i.currentFrame ||
              i.currentFrame.parentNode === e.parentNode
                ? e
                : i.currentFrame;
            return (
              i.currentWindow.$sf && i.currentWindow.$sf.ext
                ? (this.log("SafeFrame detected"), (t.element = t.element || e))
                : void 0 !== window.inDapIF && window.inDapIF
                ? (this.log("Friendly iframe detected"), (t.element = e))
                : i.currentWindow === window.top
                ? this.log("Secured iframe detected")
                : this.isAMPFrame
                ? this.log("AMP iframe detected")
                : this.log("Cross-domain iframe detected"),
              t
            );
          }
          addInfoLayer() {
            const e = this.addElement("div", document.body, {
              id: `testLayer_${Math.round(1e5 * Math.random())}`,
              style:
                "width:60px;height:30px;position:fixed;top:0;right:0;background-color:yellow;\n\t\t\tcolor:blue;font-size:20px;text-align:center;padding-top:5px;z-index:99999;",
            });
            return (e.innerHTML = "0%"), e;
          }
          checkThreshold(e) {
            var t, i;
            const r = "area",
              n = "lastSent";
            for (const s of this.threshold)
              s[r] > e && s[n] <= 0
                ? (null === (t = s.belowCallback) || void 0 === t || t.call(s),
                  (s[n] = 1))
                : s[r] <= e &&
                  s[n] >= 0 &&
                  (null === (i = s.aboveCallback) || void 0 === i || i.call(s),
                  (s[n] = -1));
          }
          calculateArea(e, t) {
            return !this.isMobile() &&
              0 === e.videoIntegration &&
              t.clientHeight * t.clientWidth > 242500
              ? 30
              : 50;
          }
          mergeOptions(e, t) {
            const i = {
              area: null == e ? void 0 : e.area,
              testLayer: (null == e ? void 0 : e.testLayer) || !1,
              logMessages: (null == e ? void 0 : e.logMessages) || !1,
              videoIntegration: (null == e ? void 0 : e.videoIntegration) || 0,
              threshold: (null == e ? void 0 : e.threshold) || [],
              viewCallback: null == e ? void 0 : e.viewCallback,
            };
            return (
              e && e.delay
                ? (i.delay = e.delay)
                : (i.delay = i.videoIntegration ? 2 : 1),
              i.area || (i.area = this.calculateArea(i, t)),
              i
            );
          }
          executePixels(e, t) {
            if (null == e) return !1;
            let i = !1;
            return (
              this.pixels[e] &&
                this.pixels[e][t] &&
                (this.trackArrayOfPixels(this.pixels[e][t]),
                (i = !0),
                delete this.pixels[e],
                (this.playingCreativeId = null)),
              i
            );
          }
        }
        t.ViewabilityCore = n;
      },
    },
    t = {};
  function i(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var s = (t[r] = { exports: {} });
    return e[r].call(s.exports, s, s.exports, i), s.exports;
  }
  (() => {
    const e = i(1740),
      t = i(885);
    class r extends t.ViewabilityCore {
      constructor(t = e.EViewableKey.Viewcount) {
        var i;
        super(), this.log("constructor");
        const r = this.useTopWindow(),
          n = this.updateProtocol(
            null === (i = document.currentScript) || void 0 === i
              ? void 0
              : i.src
          );
        if (n) {
          const e = this.getParamsFromUrl(new URL(n));
          this.docReady(() => {
            let i = e.containerId ? this.d.getElementById(e.containerId) : null;
            !i &&
              r.currentWindow.$sf &&
              r.currentWindow.$sf.ext &&
              (i = r.currentWindow.document.body);
            const [n, s] = this.validateParams(i, e);
            this.init(n, s, t);
          });
        }
      }
      init(t, i, r) {
        this.log("init", t, i);
        const n = {};
        (n[i.cid] = { viewable: [this.preparePixel(r, i).href] }),
          r === e.EViewableKey.Viewcount &&
            (n[i.cid].undetermined = [
              this.preparePixel(e.EViewableKey.ViewUndetermined, i).href,
            ]);
        const s = {};
        r === e.EViewableKey.ImpressionsOnePx &&
          (s.area = this.impressionsOnePxArea),
          this.start(t, n, s);
      }
      getParamsFromUrl(e) {
        this.log("getParamsFromUrl", e);
        const t = e.searchParams.get("containerid"),
          i = e.searchParams.get("baseurl"),
          r = e.searchParams.get("pid"),
          n = e.searchParams.get("iid"),
          s = e.searchParams.get("fmtid"),
          o = e.searchParams.get("cid"),
          a = e.searchParams.get("rtbbid"),
          l = e.searchParams.get("rtbet"),
          d = e.searchParams.get("rtblt"),
          c = e.searchParams.get("rtbnid"),
          h = e.searchParams.get("rtbh");
        return {
          containerId: null === t ? void 0 : t,
          baseUrl: null === i ? void 0 : new URL(i),
          pid: null === r ? void 0 : Number(r),
          iid: null === n ? void 0 : Number(n),
          fmtid: null === s ? void 0 : Number(s),
          cid: null === o ? void 0 : Number(o),
          rtbbid: null === a ? void 0 : a,
          rtbet: null === l ? void 0 : Number(l),
          rtblt: null === d ? void 0 : d,
          rtbnid: null === c ? void 0 : Number(c),
          rtbh: null === h ? void 0 : h,
        };
      }
      validateParams(e, t) {
        var i;
        this.log("validateParams", t);
        for (const e in t)
          if (
            -1 === ["rtbbid", "rtbet", "rtblt", "rtbnid", "rtbh"].indexOf(e) &&
            void 0 === t[e]
          )
            throw new Error(
              `Smart ViewabilityExt: missing key ${e.toLowerCase()} in url`
            );
        if (!e)
          throw new Error(
            `Smart ViewabilityExt: cannot find element with id ${t.containerId}`
          );
        if (!t.baseUrl || !/\.smartadserver\.com/.test(t.baseUrl.href))
          throw new Error(
            `Smart ViewabilityExt: baseUrl key ${
              null === (i = t.baseUrl) || void 0 === i
                ? void 0
                : i.href.toLowerCase()
            } is not valid`
          );
        if (void 0 === t.cid || isNaN(t.cid))
          throw new Error(
            `Smart ViewabilityExt: cid key ${t.cid} must be number`
          );
        return [e, t];
      }
      preparePixel(e, t) {
        console.info("preparing pixel");
        this.log("preparePixel", e, t);
        const i = Date.now();
        let r = "";
        return (
          void 0 !== t.rtbbid &&
            void 0 !== t.rtbet &&
            void 0 !== t.rtbh &&
            void 0 !== t.rtblt &&
            void 0 !== t.rtbnid &&
            (r = `&rtb=1&rtbbid=${t.rtbbid}&rtbet=${t.rtbet}&rtblt=${t.rtblt}&rtbnid=${t.rtbnid}&rtbh=${t.rtbh}`),
          new URL(
            t.baseUrl +
              "track/action?sid=" +
              i +
              "&pid=" +
              t.pid +
              "&iid=" +
              t.iid +
              "&fmtid=" +
              t.fmtid +
              "&cid=" +
              t.cid +
              "&key=" +
              e +
              r +
              "&ts=" +
              i
          )
        );
      }
      updateProtocol(e) {
        this.log("updateProtocol", e);
        const t = this.w.location.protocol || "https:";
        return e ? (new RegExp(/^https?:/).test(e) ? "" : t) + e : "";
      }
    }
    new r(), new r(e.EViewableKey.ImpressionsOnePx);
  })();
})();
