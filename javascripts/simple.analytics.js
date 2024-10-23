/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2023-05-03; f270; v11) */
!function(l, t, e, n, p) {
  try {
    var h = undefined,
        f = !0,
        d = !1,
        r = "true",
        a = "https:",
        m = "pageview",
        u = "event",
        i = "error",
        o = l.console,
        c = "doNotTrack",
        g = l.navigator,
        s = l.location,
        v = s.host,
        y = l.document,
        _ = g.userAgent,
        w = "Not sending request ",
        b = w + "when ",
        E = d,
        O = encodeURIComponent,
        x = decodeURIComponent,
        S = JSON.stringify,
        M = l.addEventListener,
        k = "https://queue." + e,
        q = y.documentElement || {},
        A = "language",
        $ = "Height",
        j = "scroll",
        D = g.userAgentData,
        C = j + $,
        R = "offset" + $,
        H = "client" + $,
        P = "pagehide",
        T = "platform",
        U = "platformVersion",
        I = "https://docs.simpleanalytics.com",
        V = 0,
        B = /(bot|spider|crawl)/i.test(_) && !/(cubot)/i.test(_),
        N = l.screen,
        z = y.currentScript || y.querySelector('script[src*="' + e + '"]');
    
    p = function() {
      var t = [].slice.call(arguments);
      return t.unshift("Simple Analytics:"), Function.prototype.apply.call(o.warn, o, t);
    };
    
    var F = function(t, e) {
      p("Error in your " + t + " function:", e);
    },
    W = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    },
    G = function(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    },
    J = function(t, e) {
      return t && t.getAttribute("data-" + e);
    },
    L = function(t) {
      return Array.isArray(t) ? t : "string" == typeof t && t.length ? t.split(/, ?/) : [];
    },
    Y = function(t) {
      return t && t.constructor === Object;
    },
    Z = function() {
      for (var t = {}, e = arguments, n = 0; n < e.length; n++) {
        var r = e[n];
        if (Y(r))
          for (var a in r)
            W(r, a) && (t[a] = r[a]);
      }
      return t;
    },
    K = l.sa_settings,
    Q = K || Object.keys(t).length;
    
    t = Z(t, K), Q && p("Settings", t);
    
    var X = L(t.ignoreMetrics || J(z, "ignore-metrics")),
        tt = function(e) {
          return 0 === X.filter(function(t) {
            return new RegExp("^" + e).test(t);
          }).length;
        },
        et = Date.now,
        nt = function() {
          var e = l.crypto || l.msCrypto,
              t = [1e7] + -1e3 + -4e3 + -8e3 + -1e11,
              n = /[018]/g;
          
          try {
            return t.replace(n, function(t) {
              return (t ^ e.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16);
            });
          } catch (r) {
            return t.replace(n, function(t) {
              var e = 16 * Math.random() | 0;
              return (t < 2 ? e : 3 & e | 8).toString(16);
            });
          }
        },
        rt = function(t) {
          return "function" == typeof t;
        },
        at = "namespace",
        it = t[at] || J(z, at) || "sa",
        ot = l[it + "_metadata"],
        ct = function(t, e) {
          Y(ot) && (t = Z(t, ot));
          var n = l[Mt];
          if (!rt(n)) return t;
          try {
            return Z(t, n.call(l, Z(t, e)));
          } catch (r) {
            F("metadata", r);
          }
        },
        st = t.strictUtm || J(z, "strict-utm") == r,
        ut = function(a) {
          return s.search.slice(1).split("&").filter(function(t) {
            var e = a || !tt("ut"),
                n = Ot.map(G).join("|"),
                r = e ? "^(" + n + ")=" : "^((utm_)" + (st ? "" : "?") + "(source|medium|content|term|campaign)" + (st ? "" : "|ref") + "|" + n + ")=";
            return e && !Ot.length ? d : new RegExp(r).test(t);
          }).join("&") || h;
        },
        lt = it + "_loaded";
    
    if (l[lt] == f) return p(w + "twice");
    l.sa_event_loaded = f, l[lt] = f;
    
    var pt = function(e, t, n) {
          e = n ? e : Z(At, Dt, e),
          g.brave && !n && (e.brave = f),
          g._duckduckgoloader_ && !n && (e.duck = f);
          var r = new Image;
          t && (r.onerror = t, r.onload = t),
          r.src = k + "/simple.gif?" + Object.keys(e).filter(function(t) {
            return e[t] != h;
          }).map(function(t) {
            return O(t) + "=" + O(e[t]);
          }).join("&") + "&time=" + Date.now();
        },
        ht = t.hostname || J(z, "hostname"),
        ft = ht || v,
        dt = {
          version: "cdn_latest_11",
          hostname: ft
        };
    
    n = function(t) {
      t = t.stack ? t + " " + t.stack : t,
      p(t),
      pt(Z(dt, {
        type: i,
        error: t,
        path: s.pathname
      }), h, f);
    },
    M(i, function(t) {
      t.filename && -1 < t.filename.indexOf(e) && n(t.message);
    }, d);
    
    var mt, gt = et(),
        vt = 0,
        yt = t.mode || J(z, "mode"),
        _t = !!(ee = t.collectDnt) === ee ? t.collectDnt : J(z, "ignore-dnt") == r || J(z, "skip-dnt") == r || J(z, "collect-dnt") == r,
        wt = !("false" == J(z, "auto-collect") || t.autoCollect === d),
        bt = t.saGlobal || J(z, "sa-global") || it + "_" + u,
        Et = L(t.ignorePages || J(z, "ignore-pages")),
        Ot = L(t.allowParams || J(z, "allow-params")),
        xt = L(t.nonUniqueHostnames || J(z, "non-unique-hostnames")),
        St = t.pathOverwriter || J(z, "path-overwriter"),
        Mt = t.metadataCollector || J(z, "metadata-collector");
    
    try {
      mt = tt("c") ? Intl.DateTimeFormat().resolvedOptions().timeZone : h;
    } catch (ne) {
      p(ne);
    }
    
    var kt = g.webdriver || l.__nightmare || l.callPhantom || l._phantom || l.phantom || l.__polypane || l._bot || B || Math.random() == Math.random(),
        qt = tt("t") || tt("scro");
    
    kt && (dt.bot = f);
    
    var At = Z(dt, {
      ua: tt("us") ? _ : h,
      https: s.protocol == a,
      timezone: mt,
      page_id: qt ? nt() : h,
      session_id: tt("se") ? nt() : h
    });
    
    if (At.sri = d, D && (At.mobile = D.mobile, At.brands = S(D.brands)), y.doctype || p("Add DOCTYPE html for accurate dimensions"), ft !== v && (At.hostname_original = v), !_t && c in g && "1" == g[c]) return p(b + c + " is enabled. See " + I + "/dnt");
    
    -1 != v.indexOf(".") && !/^[0-9.:]+$/.test(v) || ht || p("Set hostname on " + v + ". See " + I + "/overwrite-domain-name");
    
    var $t, jt, Dt = {},
        Ct = (y.referrer || "").replace(v, ft).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/, "$4").replace(/^([^/]+)$/, "$1").split("?")[0].replace(/\/$/, "");
    
    if (function() {
        try {
          var e = O(m);
          $t = l[bt],
          jt = $t && $t.q ? $t.q : [],
          l[bt] = pt.bind(l, Z(At, {
            queue: f
          })),
          jt.map(function(t) {
            var e = t[0];
            t = t[1],
            "string" == typeof e && t && e === u && pt(Z(At, t));
          });
        } catch (ne) {
          F(m, ne);
        }
      }(), tt("sm")) return E;
    
    if (l.deviceMemory && (Dt.device_memory = l.deviceMemory), N && N.width && (Dt.resolution = N.width + "x" + N.height), tt("di") || (Dt.path = St && rt(St) ? St.call(l, s) : s.pathname + s.search.replace(/ref=[a-z0-9\-_]+/g, "")), (l.innerHeight || q[R] || q[H]) && (Dt.viewport = Math.max(l.innerHeight, q[R], q[H]) + "x" + Math.max(l.innerWidth, q.clientWidth), Dt[C] = Math.max(l[C] || q[C] || V)), Ct && !/^unknown/.test(Ct) && (Dt.referrer = Ct), !wt || Et.indexOf(s.pathname) > -1 || xt.indexOf(v) > -1 || function() {
        try {
          var t = Z(Dt, ct({
            id: nt()
          }, f));
          pt(t, function(t) {
            t = t.type,
            "error" === t && E++,
            E >= 5 && (l[P] = d);
          });
        } catch (ne) {
          F(m, ne);
        }
      }(), E > 0) return;
    
    var Rt = function() {
      pt(Z(Dt, {
        type: u,
        event: u,
        id: nt()
      }));
    };
    
    l.sa_event = function(t) {
      return Rt(), !1;
    };
    
    M && M(P, Rt);
  } catch (ne) {
    p(ne);
  }
}(window, {
  allowParams: "utm_source,utm_campaign",
  hostname: "mywebsite.com",
  mode: "hash",
  namespace: "sa"
}, "simpleanalyticscdn.com");
