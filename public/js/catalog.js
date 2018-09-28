// MAIN JS
! function e(a, c, u) {
    function s(t, n) {
        if (!c[t]) {
            if (!a[t]) {
                var r = "function" == typeof require && require;
                if (!n && r) return r(t, !0);
                if (l) return l(t, !0);
                var o = new Error("Cannot find module '" + t + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            var i = c[t] = {
                exports: {}
            };
            a[t][0].call(i.exports, function(e) {
                var n = a[t][1][e];
                return s(n || e)
            }, i, i.exports, e, a, c, u)
        }
        return c[t].exports
    }
    for (var l = "function" == typeof require && require, n = 0; n < u.length; n++) s(u[n]);
    return s
}({
    1: [function(e, n) {
        var _, x, S;
        x = e("../../../src/util/url.coffee"), S = e("../../../src/util/cookie.coffee"), _ = e("./store.coffee"), n.exports = function(p) {
            var a, o, e, s, r, n, i, c, d, t, u, l, h, g, v, f, m, b, w, k, y;
            return a = {}, y = p.sizes.at1000.width, i = p.sizes.at1000.height, p.hotspots, l = p.spreads.length, c = {}, m = {}, h = [], g = {}, d = {}, u = null == p.config.layout || "booklet" === p.config.layout, e = p.analytics && p.analytics.customerGaToken && p.analytics.cookieConsentText, w = e && !S.getCookie("ga_customer_consent"), k = "at200", t = function() {
                var e, n, t, r;
                return f(), a.id = p.id, a.slug = p.slug, a.groupSlug = p.groupSlug, a.title = p.config.publicationTitle, a.url = p.url, a.canonicalUrl = p.config.canonicalUrl, a.numPages = h.length, a.pages = h, a.length = l, a.aspectRatio = y / i, a.spreadAspectRatio = a.calcSpreadAspectRatio(), a.websiteUrl = p.config.websiteUrl, a.webshopCheckoutUrl = p.config.webshopCheckoutUrl, a.customerName = p.config.customerName, a.websiteDomain = o(p.config.websiteUrl), a.a4RelativeSize = null != (e = p.config.relativeSize) ? e : 1, a.feedbackReplyable = p.config.feedbackReplyable, a.showPrintButton = p.config.showPrintButton, a.enableSearch = p.config.enableSearch, a.exported = p.config.exported, a.disableSharing = p.config.disableSharing, a.translations = p.translations, a.locale = p.config.locale, a.enablePublitasBranding = p.config.enablePublitasBranding, a.relatedPublications = p.relatedPublications, a.sizing = null != (n = p.sizing) ? n : {}, a.isBooklet = u, a.passQueryParams = p.config.passQueryParams, a.imageSizes = p.sizes, a.transitionEffect = p.config.transitionEffect, a.branding = p.branding, a.pdfUrl = b(p.config.downloadPdfUrl), a.hotspotsVisibleOnHover = p.config.hotspotsVisibleOnHover, a.enableInStockInfo = p.config.enableInStockInfo, a.privacyPolicyUrl = p.config.privacyPolicyUrl, a.gaConsentBanner = w, Reader.currencySymbol = null != (t = p.config.currencySymbol) ? t : "\u20ac", Reader.callToActionButtonText = null != (r = p.branding) ? r.callToActionButtonText : void 0, a
            }, f = function() {
                var i, e, n, t, r, o, a, c, u, s, l, f;
                for (a = 0, c = p.spreads, s = [], f = e = 0, t = c.length; e < t; f = ++e) {
                    for (l = c[f], g[f] = [], n = 0, r = (u = l.pages).length; n < r; n++) o = u[n], a++, h.push(o), d[a] = f, g[f].push(a);
                    s.push(function() {
                        var e, n, t, r, o;
                        for (o = [], e = 0, n = (r = null != (t = l.hotspots) ? t : []).length; e < n; e++) i = r[e], o.push(v(i, f));
                        return o
                    }())
                }
                return s
            }, v = function(o, e) {
                var i, t;
                switch (o.spreadIndex = e, (c[o.id] = o).publication = a, o.type) {
                    case "product":
                        return t = function() {
                            var e, n, t, r;
                            for (r = [], e = 0, n = (t = o.products).length; e < n; e++) i = t[e], r.push(i.id);
                            return r
                        }(), delete o.products, o.getProducts = function(n) {
                            return null != o.products ? n(o.products) : r(t, function(e) {
                                return null == o.products && (o.products = e), n(o.products)
                            })
                        }
                }
            }, o = function(e) {
                return e ? e.replace("http://", "").replace("https://", "").replace("www.", "").replace(/\?.*$/, "").split("/")[0] : void 0
            }, b = function(e) {
                var n, t;
                return null == e ? void 0 : (0 !== (t = x(e).pathname).indexOf("/") && (t = "/" + t), (n = window.location).protocol + "//" + n.host + t)
            }, a.getSpreadImageUrls = n = function(e, n) {
                var t, r, o, i, a;
                if (null == p.spreads[e]) return [];
                for (a = [], t = 0, r = (i = p.spreads[e].pages).length; t < r; t++) o = i[t], a.push(o.images[n]);
                return a
            }, a.getSpreadText = function(e) {
                var n, t, r, o, i;
                for (i = [], n = 0, t = (o = p.spreads[e].pages).length; n < t; n++) r = o[n], i.push(r.text);
                return i
            }, a.getPageImageUrl = function(e, n) {
                var t;
                return (t = h[e - 1]) ? t.images[n] : void 0
            }, a.getPageText = function(e) {
                return (h[e - 1] || {}).text
            }, a.sortedImageSizes = function() {
                return Object.keys(p.sizes).sort(function(e, n) {
                    return p.sizes[e].height - p.sizes[n].height
                })
            }, a.pageToIndex = function(e) {
                return d[e]
            }, a.indexToPages = function(e) {
                return g[e]
            },
                function() {
                    return p.spreads
                }, a.getHotspots = function(e) {
                var n, t;
                return null != (n = null != (t = p.spreads[e]) ? t.hotspots : void 0) ? n : []
            }, a.getHotspot = function(e) {
                return c[e]
            }, a.getProduct = s = function(n, t) {
                var e;
                return null != m[n] ? t(m[n]) : (e = p.url + "/product/" + n + ".json", _.getJSON(e, function(e) {
                    return e ? (e.price && (e.price = parseFloat(e.price)), e.discountedPrice && (e.discountedPrice = parseFloat(e.discountedPrice)), null == m[n] && (m[n] = e), null == e.hotspot && (e.hotspot = c[e.hotspotId]), t(m[n])) : t()
                }))
            }, a.getProducts = r = function(t, r) {
                var e, o, n, i, a, c, u;
                for (c = [], u = [], n = e = a = 0, i = t.length; e < i; n = ++e) o = t[n], u.push(function(e, n) {
                    return s(o, function(e) {
                        return c[n] = e, ++a === t.length ? r(c) : void 0
                    })
                }(0, n));
                return u
            }, a.assignProducts = function(e, n) {
                var t, r, o;
                if (t = c[e]) {
                    for (r = 0, o = n.length; r < o; r++) n[r].hotspot = t;
                    return t.products = n
                }
            },
                function(e) {
                    return n(e, k)
                }, a.getThumbnailImageUrlForPage = function(e) {
                return e < 1 || e > h.length ? void 0 : h[e - 1].images[k]
            }, a.getPageCountForIndex = function(e) {
                return p.spreads[e].pages.length
            }, a.pageFormat = function() {
                return i < y ? "landscape" : "portrait"
            }, a.numPagesFor = function(e) {
                var n;
                return null != (n = p.spreads[e]) ? n.pages.length : void 0
            }, a.numHotspots = function(e) {
                var n, t;
                return (null != (n = (null != (t = p.spreads[e]) ? t : {}).hotspots) ? n : []).length
            }, a.isFrontCover = function(e) {
                return !!u && (0 === e && 1 === a.numPagesFor(e))
            }, a.isBackCover = function(e) {
                return !!u && (e === l - 1 && 1 === a.numPagesFor(e))
            }, a.calcSpreadAspectRatio = function(e) {
                var n;
                return null == e && (e = "at1000"), n = p.sizes[e], (u ? 2 : 1) * n.width / n.height
            }, t()
        }
    }, {
        "../../../src/util/cookie.coffee": 38,
        "../../../src/util/url.coffee": 40,
        "./store.coffee": 2
    }],
    2: [function(e, n) {
        n.exports = {
            getJSON: function(e, n) {
                return $.ajax({
                    url: e,
                    dataType: "json",
                    success: function(e) {
                        return n(e)
                    },
                    error: function() {
                        return n()
                    }
                })
            },
            search: function(e, n, t) {
                var r, o, i, a, c, u;
                for (i = [], r = 0, o = (a = n.split(" ")).length; r < o; r++) u = a[r], i.push("*" + u + "*"), i.push(u);
                return c = {
                    q: i.join("|"),
                    sort: "_score desc",
                    "return": "contents,_score,page_number"
                }, $.get(e, c, t, "json")
            }
        }
    }, {}],

    6: [function(e, n) {
        "use strict";

        function t() {
            if (c.length) throw c.shift()
        }

        function r(e) {
            var n;
            (n = a.length ? a.pop() : new o).task = e, i(n)
        }

        function o() {
            this.task = null
        }
        var i = e("./raw"),
            a = [],
            c = [],
            u = i.makeRequestCallFromTimer(t);
        n.exports = r, o.prototype.call = function() {
            try {
                this.task.call()
            } catch (e) {
                r.onerror ? r.onerror(e) : (c.push(e), u())
            } finally {
                this.task = null, a[a.length] = this
            }
        }
    }, {
        "./raw": 7
    }],
    7: [function(e, f) {
        (function(e) {
            "use strict";

            function n(e) {
                a.length || (i(), !0), a[a.length] = e
            }

            function t() {
                for (; c < a.length;) {
                    var e = c;
                    if (c += 1, a[e].call(), u < c) {
                        for (var n = 0, t = a.length - c; n < t; n++) a[n] = a[n + c];
                        a.length -= c, c = 0
                    }
                }
                a.length = 0, c = 0, !1
            }

            function r(e) {
                var n = 1,
                    t = new l(e),
                    r = document.createTextNode("");
                return t.observe(r, {
                    characterData: !0
                }),
                    function() {
                        n = -n, r.data = n
                    }
            }

            function o(r) {
                return function() {
                    function e() {
                        clearTimeout(n), clearInterval(t), r()
                    }
                    var n = setTimeout(e, 0),
                        t = setInterval(e, 50)
                }
            }
            f.exports = n;
            var i, a = [],
                c = 0,
                u = 1024,
                s = void 0 !== e ? e : self,
                l = s.MutationObserver || s.WebKitMutationObserver;
            i = "function" == typeof l ? r(t) : o(t), n.requestFlush = i, n.makeRequestCallFromTimer = o
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    9: [function(e, n) {
        var r, o, a, c, u;
        a = 20, o = 1e4, r = e("./src/image-data"), u = e("./src/to-rgb-vectors"), c = e("./src/find-clusters.coffee"), n.exports = function(e, t, i) {
            return r(e, o).then(function(e) {
                var r, o, n;
                return n = u(e), o = (o = c(n, t, a)).sort(function(e, n) {
                    return n.count() - e.count()
                }), i({
                    numSamples: n.length,
                    colors: function() {
                        var e, n, t;
                        for (t = [], e = 0, n = o.length; e < n; e++) r = o[e], t.push(r.centroid());
                        return t
                    }(),
                    counts: function() {
                        var e, n, t;
                        for (t = [], e = 0, n = o.length; e < n; e++) r = o[e], t.push(r.count());
                        return t
                    }()
                })
            })
        }
    }, {
        "./src/find-clusters.coffee": 11,
        "./src/image-data": 12,
        "./src/to-rgb-vectors": 14
    }],
    10: [function(e, n) {
        var f;
        f = e("./square-distance"), n.exports = function() {
            var c, u, s, i, l;
            return i = [0, 0, 0], l = [], s = u = null, (c = {}).add = function(e) {
                var n, t, r, o;
                for (n = t = 0, r = e.length; t < r; n = ++t) o = e[n], i[n] += o;
                return l.push(e)
            }, c.count = function() {
                return l.length
            }, c.centroid = function() {
                var e, n, t, r, o, i, a;
                if (null != u && s === l.length) return u;
                if (r = c.mean()) {
                    for (u = l[0], s = l.length, i = f(r, u), n = 0, t = (o = l.slice(1)).length; n < t; n++) a = o[n], (e = f(r, a)) < i && (u = a, i = e);
                    return u
                }
            }, c.mean = function() {
                var e, n, t, r, o;
                if (0 !== (e = l.length)) {
                    for (r = [], n = 0, t = i.length; n < t; n++) o = i[n], r.push(Math.round(o / e));
                    return r
                }
            }, c.clear = function() {
                return i = null, l.length = 0, s = u = null
            }, c
        }
    }, {
        "./square-distance": 13
    }],
    11: [function(e, n) {
        var c, u, s, f, l, p, d, a;
        c = e("./cluster.coffee"), l = e("./square-distance"), n.exports = function(e, r, n) {
            var t, o, i, a;
            if (r = Math.min(e.length, r), e.length === r) return u(e, r);
            for (i = 0, t = p(r, 3, 255), a = null; i < n && !s(t, a);) a = o, o = function() {
                var e, n, t;
                for (t = [], e = 0, n = r; 0 <= n ? e < n : n < e; 0 <= n ? ++e : --e) t.push(c());
                return t
            }(), t = d(e, t, o), i++;
            return o
        }, d = function(e, n, t) {
            var r, o, i, a, c, u, s, l;
            for (i = 0, c = e.length; i < c; i++) l = e[i], (r = t[f(n, l)]).add(l);
            for (s = [], o = a = 0, u = t.length; a < u; o = ++a) 0 < (r = t[o]).count() && s.push(r.mean());
            return s
        }, f = function(e, n) {
            var t, r, o, i, a, c, u;
            for (u = 195076, i = a = r = 0, c = e.length; a < c; i = ++a) t = e[i], (o = l(t, n)) < u && (r = i, u = o);
            return r
        }, p = function(e, r, n) {
            var t, o, i, a, c, u;
            for (t = n / e, u = [], o = i = 0, a = e; 0 <= a ? i < a : a < i; o = 0 <= a ? ++i : --i) c = Math.round(t * o + t / 2), u.push(function() {
                var e, n, t;
                for (t = [], e = 0, n = r; 0 <= n ? e < n : n < e; 0 <= n ? ++e : --e) t.push(c);
                return t
            }());
            return u
        }, s = function(e, n) {
            var t, r, o, i;
            if (!n) return !1;
            for (r = o = 0, i = e.length; o < i; r = ++o)
                if (t = e[r], !a(t, n[r].centroid())) return !1;
            return !0
        }, a = function(e, n) {
            var t, r, o;
            if (e && !n || n && !e || !e && !n) return !1;
            for (t = r = 0, o = e.length; r < o; t = ++r)
                if (e[t] !== n[t]) return !1;
            return !0
        }, u = function(e, r) {
            var n, o, t, i;
            for (n = function() {
                var e, n, t;
                for (t = [], o = e = 0, n = r; 0 <= n ? e < n : n < e; o = 0 <= n ? ++e : --e) t.push(c());
                return t
            }(), o = t = 0, i = n.length; t < i; o = ++t) n[o].add(e.at(o));
            return n
        }
    }, {
        "./cluster.coffee": 10,
        "./square-distance": 13
    }],
    12: [function(e, n) {
        function o(e, n) {
            var t = i(e, n),
                r = document.createElement("canvas"),
                o = r.getContext("2d");
            return r.width = t.width, r.height = t.height, o.drawImage(e, 0, 0, t.width, t.height), o.getImageData(0, 0, t.width, t.height).data
        }

        function i(e, n) {
            var t = e.width / e.height,
                r = Math.sqrt(n / t),
                o = r * t;
            return {
                width: Math.round(o),
                height: Math.round(r)
            }
        }
        var a = e("promise");
        n.exports = function(e, n) {
            var t = new Image,
                r = new a(function(e) {
                    t.onload = function() {
                        e(o(t, n))
                    }
                });
            return t.src = e.src ? e.src : e || "", r
        }
    }, {
        promise: 15
    }],
    13: [function(e, n) {
        n.exports = function(e, n) {
            for (var t = 0, r = e.length, o = 0; o < r; o++) t += Math.pow(n[o] - e[o], 2);
            return t
        }
    }, {}],
    14: [function(e, n) {
        n.exports = function(e) {
            for (var n, t = [], r = e.length / 4, o = 0; o < r; o++) n = 4 * o, t.push(Array.prototype.slice.apply(e, [n, n + 3]));
            return t
        }
    }, {}],
    15: [function(e, n) {
        "use strict";
        n.exports = e("./lib")
    }, {
        "./lib": 20
    }],
    16: [function(e, n) {
        "use strict";

        function a() {}

        function r(e) {
            try {
                return e.then
            } catch (e) {
                return v = e, m
            }
        }

        function o(e, n) {
            try {
                return e(n)
            } catch (e) {
                return v = e, m
            }
        }

        function i(e, n, t) {
            try {
                e(n, t)
            } catch (e) {
                return v = e, m
            }
        }

        function c(e) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._45 = 0, this._81 = 0, this._65 = null, this._54 = null, e !== a && h(e, this)
        }

        function u(r, o, i) {
            return new r.constructor(function(e, n) {
                var t = new c(a);
                t.then(e, n), s(r, new d(o, i, t))
            })
        }

        function s(e, n) {
            for (; 3 === e._81;) e = e._65;
            return c._10 && c._10(e), 0 === e._81 ? 0 === e._45 ? (e._45 = 1, void(e._54 = n)) : 1 === e._45 ? (e._45 = 2, void(e._54 = [e._54, n])) : void e._54.push(n) : void t(e, n)
        }

        function t(t, r) {
            g(function() {
                var e = 1 === t._81 ? r.onFulfilled : r.onRejected;
                if (null !== e) {
                    var n = o(e, t._65);
                    n === m ? f(r.promise, v) : l(r.promise, n)
                } else 1 === t._81 ? l(r.promise, t._65) : f(r.promise, t._65)
            })
        }

        function l(e, n) {
            if (n === e) return f(e, new TypeError("A promise cannot be resolved with itself."));
            if (n && ("object" == typeof n || "function" == typeof n)) {
                var t = r(n);
                if (t === m) return f(e, v);
                if (t === e.then && n instanceof c) return e._81 = 3, e._65 = n, void p(e);
                if ("function" == typeof t) return void h(t.bind(n), e)
            }
            e._81 = 1, e._65 = n, p(e)
        }

        function f(e, n) {
            e._81 = 2, e._65 = n, c._97 && c._97(e, n), p(e)
        }

        function p(e) {
            if (1 === e._45 && (s(e, e._54), e._54 = null), 2 === e._45) {
                for (var n = 0; n < e._54.length; n++) s(e, e._54[n]);
                e._54 = null
            }
        }

        function d(e, n, t) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t
        }

        function h(e, n) {
            var t = !1,
                r = i(e, function(e) {
                    t || (t = !0, l(n, e))
                }, function(e) {
                    t || (t = !0, f(n, e))
                });
            t || r !== m || (t = !0, f(n, v))
        }
        var g = e("asap/raw"),
            v = null,
            m = {};
        (n.exports = c)._10 = null, c._97 = null, c._61 = a, c.prototype.then = function(e, n) {
            if (this.constructor !== c) return u(this, e, n);
            var t = new c(a);
            return s(this, new d(e, n, t)), t
        }
    }, {
        "asap/raw": 7
    }],
    17: [function(e, n) {
        "use strict";
        var t = e("./core.js");
        (n.exports = t).prototype.done = function() {
            (arguments.length ? this.then.apply(this, arguments) : this).then(null, function(e) {
                setTimeout(function() {
                    throw e
                }, 0)
            })
        }
    }, {
        "./core.js": 16
    }],
    18: [function(e, n) {
        "use strict";

        function r(e) {
            var n = new u(u._61);
            return n._81 = 1, n._65 = e, n
        }
        var u = e("./core.js");
        n.exports = u;
        var o = r(!0),
            i = r(!1),
            a = r(null),
            c = r(void 0),
            s = r(0),
            l = r("");
        u.resolve = function(t) {
            if (t instanceof u) return t;
            if (null === t) return a;
            if (void 0 === t) return c;
            if (!0 === t) return o;
            if (!1 === t) return i;
            if (0 === t) return s;
            if ("" === t) return l;
            if ("object" == typeof t || "function" == typeof t) try {
                var e = t.then;
                if ("function" == typeof e) return new u(e.bind(t))
            } catch (t) {
                return new u(function(e, n) {
                    n(t)
                })
            }
            return r(t)
        }, u.all = function(e) {
            var c = Array.prototype.slice.call(e);
            return new u(function(r, o) {
                function i(n, e) {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        if (e instanceof u && e.then === u.prototype.then) {
                            for (; 3 === e._81;) e = e._65;
                            return 1 === e._81 ? i(n, e._65) : (2 === e._81 && o(e._65), void e.then(function(e) {
                                i(n, e)
                            }, o))
                        }
                        var t = e.then;
                        if ("function" == typeof t) return void new u(t.bind(e)).then(function(e) {
                            i(n, e)
                        }, o)
                    }
                    c[n] = e, 0 == --a && r(c)
                }
                if (0 === c.length) return r([]);
                for (var a = c.length, e = 0; e < c.length; e++) i(e, c[e])
            })
        }, u.reject = function(t) {
            return new u(function(e, n) {
                n(t)
            })
        }, u.race = function(e) {
            return new u(function(n, t) {
                e.forEach(function(e) {
                    u.resolve(e).then(n, t)
                })
            })
        }, u.prototype["catch"] = function(e) {
            return this.then(null, e)
        }
    }, {
        "./core.js": 16
    }],
    19: [function(e, n) {
        "use strict";
        var t = e("./core.js");
        (n.exports = t).prototype["finally"] = function(n) {
            return this.then(function(e) {
                return t.resolve(n()).then(function() {
                    return e
                })
            }, function(e) {
                return t.resolve(n()).then(function() {
                    throw e
                })
            })
        }
    }, {
        "./core.js": 16
    }],
    20: [function(e, n) {
        "use strict";
        n.exports = e("./core.js"), e("./done.js"), e("./finally.js"), e("./es6-extensions.js"), e("./node-extensions.js"), e("./synchronous.js")
    }, {
        "./core.js": 16,
        "./done.js": 17,
        "./es6-extensions.js": 18,
        "./finally.js": 19,
        "./node-extensions.js": 21,
        "./synchronous.js": 22
    }],
    21: [function(e, n) {
        "use strict";

        function t(e, n) {
            for (var t = [], r = 0; r < n; r++) t.push("a" + r);
            var o = ["return function (" + t.join(",") + ") {", "var self = this;", "return new Promise(function (rs, rj) {", "var res = fn.call(", ["self"].concat(t).concat([a]).join(","), ");", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");
            return Function(["Promise", "fn"], o)(i, e)
        }

        function r(e) {
            for (var n = Math.max(e.length - 1, 3), t = [], r = 0; r < n; r++) t.push("a" + r);
            var o = ["return function (" + t.join(",") + ") {", "var self = this;", "var args;", "var argLength = arguments.length;", "if (arguments.length > " + n + ") {", "args = new Array(arguments.length + 1);", "for (var i = 0; i < arguments.length; i++) {", "args[i] = arguments[i];", "}", "}", "return new Promise(function (rs, rj) {", "var cb = " + a + ";", "var res;", "switch (argLength) {", t.concat(["extra"]).map(function(e, n) {
                return "case " + n + ":res = fn.call(" + ["self"].concat(t.slice(0, n)).concat("cb").join(",") + ");break;"
            }).join(""), "default:", "args[argLength] = cb;", "res = fn.apply(self, args);", "}", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");
            return Function(["Promise", "fn"], o)(i, e)
        }
        var i = e("./core.js"),
            o = e("asap");
        (n.exports = i).denodeify = function(e, n) {
            return "number" == typeof n && n !== 1 / 0 ? t(e, n) : r(e)
        };
        var a = "function (err, res) {if (err) { rj(err); } else { rs(res); }}";
        i.nodeify = function(r) {
            return function() {
                var e = Array.prototype.slice.call(arguments),
                    n = "function" == typeof e[e.length - 1] ? e.pop() : null,
                    t = this;
                try {
                    return r.apply(this, arguments).nodeify(n, t)
                } catch (r) {
                    if (null == n) return new i(function(e, n) {
                        n(r)
                    });
                    o(function() {
                        n.call(t, r)
                    })
                }
            }
        }, i.prototype.nodeify = function(n, t) {
            return "function" != typeof n ? this : void this.then(function(e) {
                o(function() {
                    n.call(t, null, e)
                })
            }, function(e) {
                o(function() {
                    n.call(t, e)
                })
            })
        }
    }, {
        "./core.js": 16,
        asap: 6
    }],
    22: [function(e, n) {
        "use strict";
        var t = e("./core.js");
        (n.exports = t).enableSynchronous = function() {
            t.prototype.isPending = function() {
                return 0 == this.getState()
            }, t.prototype.isFulfilled = function() {
                return 1 == this.getState()
            }, t.prototype.isRejected = function() {
                return 2 == this.getState()
            }, t.prototype.getValue = function() {
                if (3 === this._81) return this._65.getValue();
                if (!this.isFulfilled()) throw new Error("Cannot get a value of an unfulfilled promise.");
                return this._65
            }, t.prototype.getReason = function() {
                if (3 === this._81) return this._65.getReason();
                if (!this.isRejected()) throw new Error("Cannot get a rejection reason of a non-rejected promise.");
                return this._65
            }, t.prototype.getState = function() {
                return 3 === this._81 ? this._65.getState() : -1 === this._81 || -2 === this._81 ? 0 : this._81
            }
        }, t.disableSynchronous = function() {
            t.prototype.isPending = void 0, t.prototype.isFulfilled = void 0, t.prototype.isRejected = void 0, t.prototype.getValue = void 0, t.prototype.getReason = void 0, t.prototype.getState = void 0
        }
    }, {
        "./core.js": 16
    }],
    23: [function(i) {
        var f, o, r, a, c, u, s, l, t, p, n, d, h, g, v, m, b, w, k, y, _, x, S, j, E, I, R, T, C, P, N, z, L, U, A, V, B, M, F, q, O, H;
        c = i("./util/analytics/logger.coffee"), window.Reader = {
            getBrowserEnv: i("./bootstrap/browser_env.coffee"),
            PublitasBranding: {
                ctaUrl: "https://www.publitas.com/?utm_source=publitas&utm_medium=viewer&utm_campaign=free"
            },
            log: c.log
        }, _ = i("./util/cookie.coffee"), I = i("./util/go_to_url.coffee"), g = i("./util/append_to_head.coffee"), s = i("./util/analytics/publitas_logger.coffee"), u = i("../assets/js/core/publication.coffee"), l = i("./bootstrap/router.coffee"), t = i("./bootstrap/spinner.coffee"), f = i("./util/color_math.coffee"), p = i("./util/url.coffee"),
            S = i("palette.js"), a = 50, h = {
            init: function(n, e, t) {
                var r, o;
                return o = l(window.location.href), Reader.Env = M(e, o), N(e) ? (r = o.initialRedirectUrl()) ? I(r, !0) : null == b[e.platform] ? I(o.unsupportedBrowserUrl(), !0) : (O(n), null != t ? T(n, t, o) : E(o, function(e) {
                    return T(n, e, o)
                })) : I(o.unsupportedBrowserUrl(), !0)
            }
        }, T = function(n, t, r) {
            var e, o;
            return null == t.config && (t.config = {}), null == t.analytics && (t.analytics = {}), Reader.Env = x(Reader.Env, t), (null != (o = t.config) ? o.disableAnalytics : void 0) || C(t, r.basePath),  F(n, Reader.Env), e = {}, m(Reader.Env.platform, e), Reader.Env.iframed && (document.body.style.background = "transparent"), "desktop" === Reader.Env.platform && y(e, function(e) {
                return e ? n.className = n.className + " light-ui" : void 0
            }), null == t.url && (t.url = r.baseUrl), b[Reader.Env.platform](n, function() {
                var e;
                return e = u(t), c.add(s(e)), i("reader")(n, e, r)
            })
        }, b = {
            mobile: function(e, n) {
                return B(e), d(), L("mobile", e, n)
            },
            tablet: function(e, n) {
                return B(e), d(), L("tablet", e, n)
            },
            desktop: function(e, n) {
                return L("desktop", e, n)
            }
        }, E = function(e, n) {
            var t;
            return (t = new XMLHttpRequest).onreadystatechange = function() {
                return 4 === t.readyState ? n(JSON.parse(t.responseText)) : void 0
            }, t.open("GET", e.url("data.json")), t.setRequestHeader("Accept", "application/json"), t.send()
        }, N = function(e) {
            var n, t, r;
            return t = !1, n = e.engine, r = e.engineVersion, "trident" === n && 7 <= r && (t = !0), "gecko" === n && 12 <= r && (t = !0), "webkit" !== n || e.android2 || (t = !0), "opera" === e.browser && 12 <= e.browserVersion && (t = !0), e.bot && (t = !0), t
        }, x = function(e, n) {
            var t;
            return e.disableAnalytics = null != (t = n.config) ? t.disableAnalytics : void 0, e
        }, F = function(e, n) {
            var t, r, o, i, a, c;
            for (r = [], o = 0, i = (a = ["platform", "device", "os", "browser", "engine"]).length; o < i; o++) t = a[o], r.push(n[t]), (c = n[t + "Version"]) && r.push("" + n[t] + c);
            return n.iframed && r.push("iframed"), e.className = e.className + " " + r.join(" "), n.embedType ? e.setAttribute("data-embed-type", n.embedType) : void 0
        }, A = function(e, n) {
            var t;
            return t = document.createElement(e), "style" === e ? (t = document.createElement("link"), null != n && (t.href = n), t.rel = "stylesheet", t.type = "text/css") : t.src = n, t
        }, z = function(e, n, t) {
            var r;
            return Reader.Env.development && "style" === e && (n += k()), r = A(e, n), g(r), null != Reader.Env.ie && Reader.Env.ieVersion < 11 && null != t ? r.onreadystatechange = function() {
                return "complete" === r.readyState || "loaded" === r.readyState ? (t(), r.onreadystatechange = null) : void 0
            } : null != t && (r.onload = t), r
        }, L = function(e, n, t) {
            var r, o, i, a, c, u, s, l, f, p, d, h;
            for (i = 2 <= window.devicePixelRatio ? "data-" + e + "-retina-css" : "data-" + e + "-css", c = n.getAttribute("data-" + e + "-js").split(","), o = n.getAttribute(i).split(","), h = z("style", o), l = c.length + 1, f = 0, s = U(n), V(h, s, r = function() {
                return l <= ++f ? t() : void 0
            }), d = [], a = 0, u = c.length; a < u; a++) p = c[a], d.push(z("script", p, r));
            return d
        }, V = function(e, n, t) {
            var r;
            return n() ? t() : r = setInterval(function() {
                return n() ? (t(), clearInterval(r)) : void 0
            }, 10)
        }, n = function(e, n) {
            var t;
            return (t = document.createElement("meta")).name = e, t.content = n, g(t)
        }, O = function(e) {
            var n;
            return (n = document.createElement("div")).id = "loader", n.innerHTML = "<img class='customer-logo' src='' />", n.appendChild(t()), e.appendChild(n)
        }, U = function(n) {
            return window.getComputedStyle ? function() {
                var e;
                return null != (e = window.getComputedStyle(n)) && "both" === e.getPropertyValue("clear")
            } : function() {
                return 1 <= document.styleSheets.length
            }
        }, B = function(e) {
            var n;
            return n = function(e) {
                return e.preventDefault()
            }, e.addEventListener("touchmove", n), window.addEventListener("gesturestart", n), Reader.enableBrowserScrollAndZoom = function() {
                return e.removeEventListener("touchmove", n), window.removeEventListener("gesturestart", n)
            }
        }, d = function() {
            var e;
            return e = "initial-scale=1", Reader.Env.android && (e += ",target-densityDpi=medium-dpi"), Reader.Env.mobileSafari && (e += ",minimal-ui"), n("viewport", e), Reader.Env.mobileSafari ? n("apple-mobile-web-app-capable", "yes") : void 0
        }, m = function(e, n) {
            var t, r, o, i, a, c, u, s, l;
            if (n.logo)
                for (r = 0, o = (i = document.getElementsByClassName("customer-logo")).length; r < o; r++) i[r].src = n.logo;
            return (u = document.createElement("STYLE")).id = "branding", Reader.ctaTextColor = l = null != (a = n.ctaButtonTextColor) ? a : "#fff", Reader.ctaBgColor = t = null != (c = n.ctaButtonBackgroundColor) ? c : "#51a8d6", Reader.ctaLightColor = n.ctaLightColor = f.lighter(l, t), Reader.ctaDarkColor = n.ctaDarkColor = f.darker(l, t), Reader.tooltipColor = n.tooltipColor, n.ctaColor = f.moreSaturated(l, t), f.saturation(n.ctaColor) < 20 && (n.ctaColor = f.darker(l, t)), Reader.ctaColor = n.ctaColor,  g(u)
        }, y = function(e, n) {
            var t, r;
            return t = a, null != e.bgImage ? (0 !== (r = p(e.bgImage).pathname).indexOf("/") && (r = "/" + r), S(r, 7, function(e) {
                return n(f.brightness(e.colors[0]) < t)
            })) : n(null != e.bgColor && f.brightness(e.bgColor) < t)
        }, C = function(e, n) {
            var t, r;
            return n = n.replace(/\/$/, ""), r = P(e, n), t = o(r, {
                groupSlug: e.groupSlug
            }), c.add(t)
        }, q = function(e, n) {
            var t, r;
            return H.init(e.locale, e.translations), (t = document.createElement("div")).id = "ga_consent", r = j[Reader.Env.platform], t.innerHTML = r({
                text: e.analytics.cookieConsentText,
                privacyURL: e.config.privacyPolicyUrl,
                no: H("ga_consent.no"),
                yes: H("ga_consent.yes"),
                readMore: H("ga_consent.read_more")
            }), document.getElementById("reader") && document.getElementById("reader").appendChild(t), document.getElementById("consent_yes") && (document.getElementById("consent_yes").onclick = function() {
                return _.setCookie("ga_customer_consent", "yes", 10950, e.groupSlug), R(), n && n()
            }), document.getElementById("consent_no") ? document.getElementById("consent_no").onclick = function() {
                return _.setCookie("ga_customer_consent", "no", 10950, e.groupSlug), R()
            } : void 0
        }, R = function() {
            var e;
            return (e = document.getElementById("ga_consent")).parentNode.removeChild(e)
        }, P = function(e, n) {
            var t;
            return h = r, String(window.location.host).match(/integration\d*-view\.publitas\.com/) ? h.addTracker("publitas", "UA-334020-21", {
                storage: "none",
                storeGac: !1,
                allowLinker: !0
            }) : (h.addTracker("publitas", "UA-334020-17", {
                storage: "none",
                storeGac: !1,
                allowLinker: !0,
                sampleRate: 1.15
            }), h.addTracker("publitasUnsampled", "UA-334020-42", {
                storage: "none",
                storeGac: !1,
                allowLinker: !0
            })), null != e.accountId && h.setVar(1, "account id", String(e.accountId)), null != e.groupId && h.setVar(2, "group id", String(e.groupId)), h.setVar(3, "pid-build", e.id + " master"), null != e.analytics.gaTags && h.setVar(4, "tags", String(e.analytics.gaTags)), (t = _.getCookie("ga_customer_consent")) && "yes" === t && e.analytics.customerGaToken && e.analytics.cookieConsentText || e.analytics.customerGaToken && !e.analytics.cookieConsentText ? h.addTracker("customer", e.analytics.customerGaToken, {
                cookiePath: n,
                allowLinker: !0,
                dontAnonymize: !0
            }) : e.analytics.customerGaToken && e.analytics.customerGaToken && !t ? setTimeout(function() {
                return q(e, function() {
                    return h.addTracker("customer", e.analytics.customerGaToken, {
                        cookiePath: n,
                        allowLinker: !0,
                        dontAnonymize: !0
                    })
                })
            }, 500) : t && "no" === t && e.analytics.customerGaToken && !0, h
        }, k = function() {
            return "?cache-buster=" + (new Date).getTime()
        }, M = function(e, n) {
            var t;
            return e.debug = "true" === n.queryParams().debug, n.internalQueryParam("debug"), (t = n.queryParams().publitas_embed) && (e.embedApiVersion = "v2", e.embedType = t, n.internalQueryParam("publitas_embed")), e
        }, Reader.Bootstrap = h
    }, {
        "../assets/js/core/publication.coffee": 1,
        "./bootstrap/browser_env.coffee": 24,
        "./bootstrap/router.coffee": 25,
        "./bootstrap/spinner.coffee": 26,
        // "./util/analytics/ga_logger.coffee": 30,
        // "./util/analytics/google_universal_analytics_api.coffee": 31,
        "./util/analytics/logger.coffee": 32,
        "./util/analytics/publitas_logger.coffee": 33,
        "./util/append_to_head.coffee": 34,
        // "./util/apply_ab_tests.coffee": 36,
        "./util/color_math.coffee": 37,
        "./util/cookie.coffee": 38,
        "./util/go_to_url.coffee": 39,
        "./util/url.coffee": 40,
        "palette.js": 9,
        reader: "reader"
    }],
    24: [function(e, n) {
        n.exports = function(d) {
            var e, h;
            return h = {}, d = d.toLowerCase().replace(/_/g, "."), (e = function(e, n) {
                var t, r, o, i, a, c, u, s, l, f, p;
                for (t = 0, o = n.length; t < o; t++)
                    if (r = (a = n[t])[0], l = a[1], f = d.match(l)) {
                        if (h[e] = r, h[r] = !0, 1 < f.length) {
                            if (p = f[f.length - 1], "gecko" === r && (p = null != (c = d.match(/rv:([\d.]+)/)) ? c[1] : void 0), "opera" === r && (p = null != (u = null != (s = d.match(/version\/([\d.]+)/)) ? s[1] : void 0) ? u : p), null == p) continue;
                            i = parseInt(p.match(/^\d+/)[0]), h[e + "Version"] = h[r + "Version"] = i, h["" + r + i] = !0, h[e + "VersionFull"] = h[r + "VersionFull"] = p
                        }
                        return
                    }
                return h[e] = "other"
            })("platform", [
                ["mobile", /iphone os .* like mac os x/],
                ["mobile", /android.*mobile/],
                ["mobile", /windows phone/],
                ["mobile", /iemobile/],
                ["mobile", /linux.*tizen.*family\s{0,1}hub/],
                ["tablet", /os .* like mac os x/],
                ["tablet", /android/],
                ["desktop", /windows/],
                ["desktop", /macintosh.*mac os x/],
                ["desktop", /linux/],
                ["desktop", /cros/]
            ]), e("device", [
                ["ipad", /ipad/],
                ["ipod", /ipod/],
                ["iphone", /iphone/]
            ]), e("os", [
                ["ios", /os ([\d.]+) like mac os x/],
                ["android", /android\s?([\d.]+)?/],
                ["winmobile", /windows phone os ([\d.]+)/],
                ["mac", /macintosh.*mac os x ([\d.]+)/],
                ["windows", /windows nt ([\d.]+)/],
                ["windows", /windows ([\d.]+)/],
                ["linux", /linux/]
            ]), e("engine", [
                ["webkit", /webkit\/([\d.]+)/],
                ["gecko", /gecko\/([\d.]+)/],
                ["trident", /trident\/([\d.]+)/],
                ["presto", /presto\/([\d.]+)/]
            ]), e("browser", [
                ["opera", /opera[\s\/]([\d.]+)/],
                ["edge", /edge\/([\d.]+)/],
                ["chrome", /(chrome|crios)\/([\d.]+)/],
                ["safari", /version\/([\d.]+).*safari/],
                ["firefox", /firefox\/([\d.]+)/],
                ["iemobile", /iemobile ([\d.]+)/],
                ["ie", /msie ([\d.]+)/],
                ["ie", /trident\/7\.0.+rv\:([\d.]+)/],
                ["embedded", /cpu.*os.*like mac os x.*webkit/]
            ]), h.ie && null != document.documentMode && (h.browserVersion = document.documentMode), navigator.standalone && (h.browser = "embedded", h.embedded = !0), null != h.android && "safari" === h.browser && (h.browser = "android", h.androidBrowser = !0), null == h.mobile || null == h.ios || null == h.safari || "chrome" === h.browser || h.embedded || (h.mobileSafari = !0), d.match(/bot/gi) && (h.browser = "bot", h.bot = !0, -1 !== d.indexOf("googlebot-mobile") ? h.platform = "mobile" : "other" === h.platform && (h.platform = "desktop"), h.mobile = "mobile" === h.platform, h.desktop = "desktop" === h.platform, null == h.vendor && (h.vendor = "webkit")), h.hasMouse = h.desktop, h.webkit && (h.vendor = "webkit"), h.gecko && (h.vendor = "moz"), h.trident && (h.vendor = "ms"), h.presto && (h.vendor = "o"), h.iframed = window.self !== window.top, h.webviewed = d.match("publitas web view integration"), h.retardedBrowser = h.ie && h.browserVersion < 9, h
        }
    }, {}],
    25: [function(e, n) {
        var k;
        k = e("../util/url.coffee"), n.exports = function(u) {
            var s, t, o, r, n, i, a, c, l, e, f, p, d, h, g, v, m, b, w;
            return g = {
                "page/:pages": function(o) {
                    var i;
                    return {
                        pages: function() {
                            var e, n, t, r;
                            for (r = [], e = 0, n = (t = o.split("-")).length; e < n; e++) i = t[e], r.push(Number(i));
                            return r
                        }()
                    }
                },
                "": function() {
                    return {
                        pages: [1]
                    }
                }
            }, o = null, d = {}, f = [], h = [], e = function() {
                var e;
                return null == u && (u = window.location.href), e = k(u), d = m(e.search), h = n(), o = l(e), s.originalUrl = u, s.baseUrl = o, s.basePath = o.replace(e.protocol + "//" + e.host, ""), s
            }, (s = {}).url = function(e) {
                return o + "/" + e
            }, s.getAbsolute = function(e) {
                return k(e).href
            }, s.generateUrl = function(e, n) {
                return null == n && (n = {}), t(s.generateLink(e, n), b(d))
            }, s.generateLink = function(e, n) {
                var t;
                return null == n && (n = {}), t = c(e), o + (n.hash ? "/#" : "/") + t
            }, s.generatePath = c = function(e) {
                return ""
            }, s.outgoingLink = function(e) {
                return t(e, b(w(f, d)))
            }, s.parseLink = function(e) {
                var n, t, r;
                return 0 !== e.indexOf(o) ? {} : null != (t = null != (r = (n = a(e)).route) ? r.parser.apply(r, n.params) : void 0) ? t : {}
            }, s.unsupportedBrowserUrl = function() {
                return o + "/unsupported"
            }, s.noIframeUrl = function() {
                return o + "/iframed"
            }, s.initialRedirectUrl = function() {
                var e, n, t, r, o, i, a, c;
                if (!s.usesHashFallback()) return null;
                for (a = s.parseLink(u), t = s.generateUrl(a, {
                    hash: !0
                }), n = document.createElement("a"), c = document.createElement("a"), n.href = u, c.href = t, r = 0, o = (i = ["protocol", "host", "pathname"]).length; r < o; r++)
                    if (n[e = i[r]] !== c[e]) return t;
                return null
            }, s.usesHashFallback = function() {
                return !window.history.replaceState
            }, s.queryParams = function() {
                return d
            }, s.internalQueryParam = function(e) {
                return f.push(e)
            }, p = /:\w+/g, i = /([^:])\/\/+/g, l = function(e) {
                var n;
                return n = e.protocol + "//" + e.host + "/" + e.pathname, (n = v(n)).replace(/\/$/, "")
            }, n = function() {
                var e, n, t;
                for (t in n = [], g) e = g[t], n.push({
                    matcher: r(t),
                    parser: e
                });
                return n
            }, r = function(e) {
                return e = e.replace(p, "([^/?]+)"), new RegExp("(?:[/#]+)(" + e + ")\\/?(?:\\?([\\s\\S]*))?$")
            }, a = function(e) {
                var n, t, r, o;
                for (r = null, n = 0, t = h.length; n < t && (o = h[n], !(r = e.match(o.matcher))); n++);
                return null == r && (r = []), {
                    string: r[0],
                    route: o,
                    params: r.slice(2)
                }
            }, v = function(e) {
                var n;
                return e = e.replace(i, "$1/"), (n = a(e).string) ? e.substring(0, e.lastIndexOf(n)) : e
            }, t = function(e, n) {
                var t, r, o, i;
                if (e) return n ? (e = (o = e.split("#"))[0], t = o[1], (e = (i = e.split("?"))[0]) + ("?" + (r = (r = i[1]) ? r + "&" : "") + n) + (t = t ? "#" + t : "")) : e
            }, m = function(e) {
                var n, t, r, o, i, a, c;
                for (o = {}, n = 0, r = (i = (e || "").replace(/^\?/, "").split("&")).length; n < r; n++) t = (a = i[n].split("="))[0], (c = a[1]) && (o[t] = c);
                return o
            }, b = function(e) {
                var n, t;
                for (n in t = "", e) t += "&" + n + "=" + e[n];
                return t.slice(1)
            }, w = function(e, n) {
                var t, r, o;
                for (r in t = {}, n) o = n[r], -1 === e.indexOf(r) && (t[r] = o);
                return t
            }, e()
        }
    }, {
        "../util/url.coffee": 40
    }],
    26: [function(e, n) {
        n.exports = function() {
            var o;
            return (o = document.createElement("div")).className = "js-spinner", o.innerHTML = "<li class='a'></li><li class='b'></li><li class='c'></li><li class='d'></li>", setTimeout(function() {
                var e, n, t, r;
                return e = ["one", "two", "three", "four", "five", "six", "seven"], t = 0, n = function() {
                    var e;
                    for (e = o; e.parentNode;) e = e.parentNode;
                    return e !== document
                }, r = setInterval(function() {
                    return n() ? void clearInterval(r) : (6 < t && (t = 0), o.className = "js-spinner " + e[t], t++)
                }, 200)
            }, 100), o
        }
    }, {}],

    32: [function(e, n, t) {
        var r, a;
        a = [], r = function(e, n) {
            var t, r, o, i;
            for (i = [], t = 0, r = a.length; t < r; t++) o = a[t], i.push(o(e, n));
            return i
        }, t.log = r, t.add = function(e) {
            return a.push(e)
        }, t.enable = function() {
            return context.log = r
        }, t.disable = function() {
            return context.log = function() {}
        }, t.clearLoggers = function() {
            return a.length = 0
        }
    }, {}],
    33: [function(e, n) {
        n.exports = function(t) {
            var r, o, i;
            return i = new Image, r = "https://analytics.publitas.com/collect.png", o = function(n) {
                var e;
                return e = Object.keys(n).map(function(e) {
                    return e + "=" + encodeURIComponent(n[e])
                }).join("&"), i.src = r + "?" + e + "&_t=" + (new Date).getTime()
            },
                function(e, n) {
                    switch (e) {
                        case "state change":
                            if (null == n.state.product) return;
                            return o({
                                type: "product-view",
                                publicationId: t.id,
                                productId: n.state.product.id
                            });
                        case "bootstrap complete":
                            return o({
                                type: "publication-view",
                                publicationId: t.id,
                                platform: n.platform,
                                referrer: document.referrer || "unknown",
                                location: window.location
                            })
                    }
                }
        }
    }, {}],
    34: [function(e, n) {
        n.exports = function(e) {
            return document.getElementsByTagName("script")[0].parentNode.appendChild(e)
        }
    }, {}],
    35: [function(e, n) {
        var i, t, a, c;
        i = function(e, n) {
            return !!n.config[e.abFlag]
        }, a = function(e, n) {
            switch (t(e)) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                default:
                    return 100 * n < e.percentage
            }
        }, c = function(e, n, t) {
            var r;
            return (r = new Date).setFullYear(r.getFullYear() + 1), document.cookie = e.cookieName + "=" + (t ? "true" : "false") + "; expires=" + r.toGMTString() + "; path=" + n + ";"
        }, t = function(e) {
            var n;
            return null != (n = RegExp(e.cookieName + "=([^;]+)").exec(document.cookie)) ? n[1] : void 0
        }, n.exports = function(e, n, t, r) {
            var o;
            if (i(e, n)) return o = a(e, r), n.config[e.featureFlag] = o, c(e, t, o), o ? e : void 0
        }
    }, {}],
    37: [function(e, n) {
        var t, o, r, i, a, c;
        n.exports = (t = {
            lighter: function(e, n) {
                return t.brightness(e) > t.brightness(n) ? e : n
            },
            darker: function(e, n) {
                return t.brightness(e) < t.brightness(n) ? e : n
            },
            moreSaturated: function(e, n) {
                return t.saturation(e) > t.saturation(n) ? e : n
            },
            saturation: function(e) {
                return t.hsb(e)[1]
            },
            brightness: function(e) {
                return t.hsb(e)[2]
            },
            hsb: function(e) {
                return a(c(e))
            },
            rgb: function(e) {
                return c(e)
            },
            contrast: function(e, n) {
                var t, r;
                return t = c(e), r = c(n), (i(t, r) + o(t, r)) / 2
            }
        }, o = function(e, n) {
            return Math.abs(r(e) - r(n))
        }, i = function(e, n) {
            var t, r;
            for (r = t = 0; r <= 2; ++r) t += Math.max(e[0] - n[0]) - Math.min(e[0] - n[0]);
            return t
        }, r = function(e) {
            return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3
        }, c = function(e) {
            return Array.isArray(e) ? e : (3 === (e = e.replace("#", "")).length && (e += e), [parseInt(e.slice(0, 2), 16), parseInt(e.slice(2, 4), 16), parseInt(e.slice(4, 6), 16)])
        }, a = function(e) {
            var n, t, r, o, i, a, c, u, s;
            switch (u = e[0] / 255, r = e[1] / 255, n = e[2] / 255, c = Math.min(u, r, n), i = ((a = Math.max(u, r, n)) + c) / 2, t = a - c, a) {
                case c:
                    o = 0;
                    break;
                case u:
                    o = 60 * (r - n) / t;
                    break;
                case r:
                    o = 60 * (n - u) / t + 120;
                    break;
                case n:
                    o = 60 * (u - r) / t + 240
            }
            return s = 0 === a ? 0 : t / a, [o %= 360, s *= 100, i *= 100]
        }, t)
    }, {}],
    38: [function(e, n) {
        n.exports = {
            setCookie: function(e, n, t, r) {
                var o, i;
                return t ? ((o = new Date).setTime(o.getTime() + 24 * t * 60 * 60 * 1e3), i = "; expires=" + o.toGMTString()) : i = "", document.cookie = e + "=" + n + i + "; path=/" + r
            },
            getCookie: function(e) {
                var n, t, r, o;
                for (o = e + "=", t = document.cookie.split(";"), r = 0; r < t.length;) {
                    for (n = t[r];
                         " " === n.charAt(0);) n = n.substring(1, n.length);
                    if (0 === n.indexOf(o)) return n.substring(o.length, n.length);
                    r++
                }
                return null
            },
            deleteCookie: function(e) {
                return setCookie(e, "", -1)
            }
        }
    }, {}],
    39: [function(e, n) {
        n.exports = function(e, n) {
            return null == n && (n = !1), n ? window.location = e : /^mailto/.test(e) ? window.top.location = e : window.open(e)
        }
    }, {}],
    40: [function(e, n) {
        var i, a;
        n.exports = (a = document.createElement("a"), i = ["href", "protocol", "host", "hostname", "port", "pathname", "search", "hash"], function(e) {
            var n, t, r, o;
            for (a.href = e, o = {}, n = 0, t = i.length; n < t; n++) o[r = i[n]] = a[r];
            return o.host = o.host.replace(/:80$/, "").replace(/:443$/, ""), o
        })
    }, {}]
}, {}, [23]);
// END MAIN JS