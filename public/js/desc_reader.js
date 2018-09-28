require = function e(t, n, r) {
    function o(u, a) {
        if (!n[u]) {
            if (!t[u]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(u, !0);
                if (i) return i(u, !0);
                var s = new Error("Cannot find module '" + u + "'");
                throw s.code = "MODULE_NOT_FOUND", s
            }
            var c = n[u] = {
                exports: {}
            };
            t[u][0].call(c.exports, function(e) {
                var n = t[u][1][e];
                return o(n ? n : e)
            }, c, c.exports, e, t, n, r)
        }
        return n[u].exports
    }
    for (var i = "function" == typeof require && require, u = 0; u < r.length; u++) o(r[u]);
    return o
}({
    1: [function(e, t) {
        var n, r, o, i, u, a, l, s, c, f, d, p;
        l = e("./public_api.coffee"), i = e("../util/history.coffee"), c = e("./share.coffee"), a = e("./message_api.coffee"), r = e("./event_api.coffee"), o = e("../../../src/util/analytics/google_universal_analytics_api.coffee"), p = e("../../../src/util/go_to_url.coffee"), n = e("../util/animate.coffee"), f = e("./store.coffee"), s = e("./publication.coffee"), d = e("../util/capitalize.coffee"), u = e("../util/i18n.coffee"), t.exports = function(e, t, s, f) {
            var d, h, g, v, m, y, b, w, x, S, T, C, k, _, E;
            return d = {}, T = null, b = null, k = null, S = null, h = null, x = !1, w = function() {
                return u.init(t.locale, t.translations), d.custom = l(window.viewerReady, Reader.Env.platform, t), d.publication = t, d.router = s, d.domEl = function() {
                    return e
                }, b = i(s, t), k = c(d, t), Reader.instance = d, S = a(), S.on("setState", d.goToState), S.on("cartContentChanged", d.cartContentChanged), S.on("embed", function(e) {
                    return "function" == typeof T.handleEmbedMessage ? T.handleEmbedMessage(e) : void 0
                }), S.on("injectStyles", d.injectStyles), h = r(), T = f(d, t), l.activate(d), S.initialized(), v(s.originalUrl, function() {
                    return "function" == typeof T.activate && T.activate(), setTimeout(function() {
                        return y(300)
                    }), x = !0, Reader.Env.disableAnalytics ? void 0 : (o.load(Reader.Env.debug), Reader.log("bootstrap complete", {
                        platform: Reader.Env.platform
                    }))
                }), d
            }, v = function(e, t) {
                return b.stateFromUrl(e, function(e) {
                    return m(e, 0, t)
                })
            }, d.goToSpread = function(e) {
                var t;
                return t = b.stateForSpread(e), m(t)
            }, d.goToPage = function(e) {
                var t;
                return t = b.stateForPage(e), m(t)
            }, d.goToNextSpread = function() {
                var e;
                return e = b.stateForNextSpread(), m(e)
            }, d.goToPrevSpread = function() {
                var e;
                return e = b.stateForPrevSpread(), m(e)
            }, d.goToProduct = function(e) {
                var t;
                return t = b.stateForProduct(e), m(t)
            }, d.goToVideo = function(e) {
                var t;
                return t = b.stateForVideo(e), m(t)
            }, d.goToState = function(e) {
                return e ? b.deserializeState(e, function(e) {
                    var t;
                    return x ? m(e, 0) : t = e
                }) : void 0
            }, d.goToRelatedPublications = function() {
                return b.reset(), T.showRelatedPublications()
            }, d.injectStyles = function(e) {
                var t;
                return t = g(e.id), t.textContent = e.styles
            }, g = function(e) {
                var t;
                return (t = document.getElementById(e)) ? t : (t = document.createElement("STYLE"), t.id = e, document.head.prepend(t), t)
            }, m = function(e, n, r) {
                var o, i, u, a;
                return o = t.pageToIndex((null != (u = b.currentState().pages) ? u : [])[0]), a = t.pageToIndex(e.pages[0]), b.newState(e), i = null != e.product ? function() {
                    return _(e.product.hotspot, function() {
                        return S.stateChanged(b.currentSerializableState()), null != d.custom.productAction ? "function" == typeof r ? r() : void 0 : (T.goToProduct(e.product, r), h.productViewed(e.product))
                    })
                } : null != e.videoHotspot ? function() {
                    return S.stateChanged(b.currentSerializableState()), T.showVideo(e.videoHotspot.youtubeId), h.videoViewed(e.videoHotspot.videoUrl), "function" == typeof r ? r() : void 0
                } : function() {
                    var e, n, o, i;
                    for (S.stateChanged(b.currentSerializableState()), i = t.indexToPages(a), e = 0, n = i.length; n > e; e++) o = i[e], h.pageViewed(o);
                    return "function" == typeof r ? r() : void 0
                }, o === a ? i() : 1 === e.pages.length ? T.goToPage(e.pages[0], n, i) : T.goToSpread(a, n, i)
            }, _ = function(e, t) {
                return null != d.custom.productAction ? E(e, t) : T.showHotspotProducts(e, t)
            }, E = function(e, t) {
                return e.getProducts(function(e) {
                    var n, r;
                    return r = function(t) {
                        return b.newState(b.stateForProduct(null != t ? t : e[0]))
                    }, n = function() {
                        return b.newState(b.stateForCurrentSpread(e[0]))
                    }, d.custom.productAction(e, r, n), "function" == typeof t ? t() : void 0
                })
            }, d.currentSerializableState = function() {
                return b.currentSerializableState()
            }, d.currentState = function() {
                return b.currentState()
            }, d.activateHotspot = function(e) {
                var t, n;
                switch (e.type) {
                    case "product":
                        return _(e);
                    case "externalLink":
                        return n = d.outgoingLink(e.url), (null != (t = d.custom.linkAction) ? t : d.goToUrl)(n), h.linkViewed(e.url);
                    case "video":
                        return d.goToVideo(e);
                    case "pageReference":
                        return d.goToPage(Number(e.pageNumber))
                }
            }, d.goToUrl = function(e) {
                var t;
                return p(e, t = !1)
            }, d.linkToSelf = function() {
                return s.outgoingLink(t.canonicalUrl)
            }, d.linkToSpread = function(e) {
                return 0 > e || e >= t.length ? void 0 : s.generateLink(b.stateForSpread(e))
            }, d.outgoingLink = function(e) {
                return t.passQueryParams && null != e ? s.outgoingLink(e) : e
            }, d.redrawDynamicContent = function() {
                return T.redrawDynamicContent()
            }, C = function(e, t) {
                return T.goToState(e, t)
            }, d.hideLoader = y = function(t, r) {
                var o, i;
                return i = e.find("#reader"), o = e.find("#loader"), o.length > 0 ? n(o.children().first(), {
                    opacity: 0
                }, t, function() {
                    return n(i, {
                        opacity: 1
                    }, t, function() {
                        return e.addClass("loaded"), o.remove(), "function" == typeof r ? r() : void 0
                    })
                }) : void("function" == typeof r && r())
            }, d.destroy = function() {
                return T.destroy(), Reader.currencySymbol = null, delete Reader.instance
            }, d.cartContentChanged = function(e) {
                return T.cartContentChanged(e)
            }, d.showExternalContent = function(e, t) {
                return T.showExternalContent(e, t)
            }, d.on = function(t, n) {
                return e.on(t, n)
            }, d.off = function(t, n) {
                return e.off(t, n)
            }, d.trigger = function(t, n) {
                return e.triggerHandler(t, n)
            }, w()
        }
    }, {
        "../../../src/util/analytics/google_universal_analytics_api.coffee": 118,
        "../../../src/util/go_to_url.coffee": 122,
        "../util/animate.coffee": 49,
        "../util/capitalize.coffee": 57,
        "../util/history.coffee": 67,
        "../util/i18n.coffee": 68,
        "./event_api.coffee": 2,
        "./message_api.coffee": 13,
        "./public_api.coffee": 16,
        "./publication.coffee": 17,
        "./share.coffee": 19,
        "./store.coffee": 26
    }],
    2: [function(e, t) {
        var n, r, o;
        n = e("../util/custom_event.coffee"), o = {
            title: "title",
            description: "description",
            price: "price",
            discountedPrice: "salePrice",
            webshopIdentifier: "id",
            webshopUrl: "link",
            availability: "availability",
            itemGroupId: "itemGroupId",
            productType: "productType",
            brand: "brand",
            gtin: "gtin",
            mpn: "mpn",
            customLabel0: "customLabel0",
            customLabel1: "customLabel1",
            customLabel2: "customLabel2",
            customLabel3: "customLabel3",
            customLabel4: "customLabel4"
        }, r = function(e) {
            var t, n, r, i, u, a;
            i = {};
            for (t in e) a = e[t], n = o[t], n && (i[n] = a);
            return r = e.photoUrls || [], r.length > 0 && (i.imageLink = null != (u = r[0]) ? u.full : void 0), r.length > 1 && (i.additionalImageLinks = r.slice(1).map(function(e) {
                return e.full
            })), i
        }, t.exports = function() {
            var e, t;
            return e = {}, e.pageViewed = function(e) {
                return t("pageView", e)
            }, e.productViewed = function(e) {
                return t("productView", r(e))
            }, e.videoViewed = function(e) {
                return t("videoView", e)
            }, e.linkViewed = function(e) {
                return t("linkView", e)
            }, t = function(e, t) {
                return window.dispatchEvent(new n(e, {
                    detail: t
                }))
            }, e
        }
    }, {
        "../util/custom_event.coffee": 60
    }],
    3: [function(e, t) {
        var n, r, o, i, u;
        n = e("../util/template.coffee"), r = e("./view.coffee"), u = e("../util/on_click.coffee"), i = e("../util/next_frame.coffee"), o = e("../util/browser_zoom_active.coffee"), t.exports = function(t, a, l) {
            var s, c, f, d, p, h, g, v, m, y, b, w, x, S, T, C, k, _, E, R, j, z, N;
            return c = {}, d = null, v = null, S = null, p = null, j = null, w = null, c.render = function() {
                return d = $(n(e("../../views/core/feedback.jst.eco"), a)), v = d.find("form"), S = v.find(".remarks textarea"), p = v.find(".remarks #email"), j = v.find("[type=submit]"), r(d, c), b(), d
            }, c.destroy = function() {
                return $(document).off("touchstart.feedback"), $(window).off("resize.feedback"), null != d ? (c.deactivate(), d.remove(), d = S = p = v = null) : void 0
            }, c.deactivate = function() {
                return y("success"), y("error"), f(), S.blur(), p.blur(), null != w ? w.abort() : void 0
            }, c.activate = function() {
                return f(), S.prop("disabled", !1), p.prop("disabled", !1), j.prop("disabled", !0)
            }, b = function() {
                return v.on("submit", R), Reader.Env.ios && Reader.Env.tablet && x(), S.on("input", N), Reader.Env.retardedBrowser && S.on("keyup", N), $(document).on("touchstart.feedback", "#feedback .menu-bar", function() {
                    return null != S ? S.blur() : void 0
                }), j.prop("disabled", !0), Reader.Env.ie && Reader.Env.browserVersion < 10 ? s() : void 0
            }, m = function() {
                var e, t, n, r, o;
                for (e = {}, o = v.serializeArray(), n = 0, r = o.length; r > n; n++) t = o[n], t.name.indexOf("._placeholder-shim") > -1 || (e[t.name] = t.value);
                return e
            }, z = function(e) {
                return function(t) {
                    return t.preventDefault(), e.prop("checked", !e.prop("checked")), updatePlaceholder(), N()
                }
            }, N = function() {
                var e;
                return e = 0 !== S.val().length, j.prop("disabled", !e)
            }, f = function() {
                return p.prop("value", ""), p.trigger("change"), S.prop("value", ""), S.trigger("change")
            }, _ = function() {
                return d.addClass("sending"), j.prop("disabled", !0), S.prop("disabled", !0)
            }, E = function() {
                return k("success"), setTimeout(function() {
                    return u(d.find(".success-message"), function() {
                        return t.slideOut(300)
                    })
                }), w = null
            }, C = function(e) {
                return Reader.log("feedback send error", e), k("error"), u(d.find(".error-message"), function(e) {
                    return e.preventDefault(), y("error", 350, function() {
                        return j.prop("disabled", !1), S.prop("disabled", !1)
                    })
                }), w = null
            }, k = function(e) {
                var t;
                return t = d.find("." + e + "-message"), t.show(), i(function() {
                    return t.addClass("visible"), d.removeClass("sending")
                })
            }, y = function(e, t, n) {
                var r;
                return null == t && (t = 0), null == n && (n = null), r = d.find("." + e + "-message"), r.removeClass("visible"), setTimeout(function() {
                    return r.hide(), "function" == typeof n ? n() : void 0
                }, t)
            }, h = function() {
                var e;
                return e = m(), null == e.title && (e.title = $("title").text().replace(/^\s+|\s+$/g, "")), null == e.url && (e.url = document.location.toString()), null == e.user_agent && (e.user_agent = navigator.userAgent), o() && (e.browser_zoom = 1), e.iframed = window.self !== window.top, e
            }, R = function(e) {
                var t;
                return e.preventDefault(), t = h(), S.blur(), p.blur(), _(), T(t, {
                    success: E,
                    error: function(e, t) {
                        return C(t)
                    }
                }), Reader.log("send feedback")
            }, x = function() {
                var e;
                return e = function(e) {
                    return u(e, function() {
                        return e.focus()
                    }), e.on("touchstart", function(e) {
                        return e.preventDefault()
                    }), e.on("focus", function() {
                        return window.scrollTo(0, document.documentElement.offsetHeight - window.innerHeight), setTimeout(function() {
                            return window.scrollTo(0, document.documentElement.offsetHeight - window.innerHeight)
                        })
                    })
                }, e(S), e(p)
            }, g = function() {
                return d.parent().css({
                    height: ""
                }), setTimeout(function() {
                    return d.parent().css({
                        height: d.parent().height()
                    })
                })
            }, T = function(e, t) {
                return null == e && (e = {}), null == t && (t = {}), w = $.ajax($.extend(t, {
                    url: l.url("feedback"),
                    data: e,
                    timeout: 2e5
                }))
            }, s = function() {
                var e;
                return e = function(e) {
                    var t, n, r, o, i, u, a;
                    if (e && e.length > 0) return o = e.attr("placeholder"), r = !1, t = e.clone(), t.attr("name", t.attr("name") + "._placeholder-shim"), e.after(t), e.hide(), a = function() {
                        return r && t.val() !== o ? i() : "" === t.val() ? u() : void 0
                    }, u = function() {
                        return t.val(o), t.css({
                            color: "#ccc"
                        }), n(), r = !0
                    }, i = function() {
                        return t.css({
                            color: ""
                        }), t.val(t.val().replace(o, "")), r = !1
                    }, n = function() {
                        var e, n;
                        n = t[0].createTextRange(), n.collapse(!0);
                        try {
                            return n.moveStart("character", -1), n.select()
                        } catch (t) {
                            return e = t, "do nuttin"
                        }
                    }, t.on("keydown", function() {
                        return setTimeout(function() {
                            return t.val() !== o && e.val(t.val()), a(), e.trigger("keyup"), e.trigger("input")
                        })
                    }), t.on("focus", function() {
                        return r ? n() : void 0
                    }), t.on("click", function() {
                        return r ? n() : void 0
                    }), t.on("mousedown", function(e) {
                        if (r) {
                            if (Reader.Env.retardedBrowser) throw "omg shtap";
                            return e.preventDefault()
                        }
                    }), e.on("change", function() {
                        return t.val(e.val()), r = !1, a()
                    }), u()
                }, e(v.find("[name='remarks']")), e(v.find("[name='email']"))
            }, c
        }
    }, {
        "../../views/core/feedback.jst.eco": 82,
        "../util/browser_zoom_active.coffee": 55,
        "../util/next_frame.coffee": 70,
        "../util/on_click.coffee": 73,
        "../util/template.coffee": 79,
        "./view.coffee": 28
    }],
    4: [function(e, t) {
        var n, r, o, i, u;
        n = e("./image_size_picker.coffee"), i = e("../util/blank_image.coffee"), u = e("../util/blank_white_image.coffee"), o = e("./view.coffee"), r = e("../util/template.coffee"), t.exports = function(t) {
            var a, l, s, c, f, d, p, h, g, v, m, y;
            return a = {}, v = n(t), p = "at800", y = "at200", c = t.imageSizes.at1200, g = null, l = {}, a.numPages = function() {
                return t.numPages
            }, f = 0, a.initPage = function(e) {
                var t;
                return e.id = f++, e.innerHTML = "", t = document.createElement("IMG"), t.style.width = "100%", t.style.height = "100%", t.src = i, e.appendChild(t), e.appendChild(s(e)), l[e.id] = {
                    full: h(),
                    thumb: h()
                }
            }, a.loadPage = function(e, n) {
                var r, o, a, s, c;
                if (Number(n.dataset.num) !== e) return c = null != (o = t.getPageImageUrl(e, p)) ? o : i, s = null != (a = t.getPageImageUrl(e, y)) ? a : i, r = n.getElementsByTagName("IMG")[0], r.src = u, r.alt = t.getPageText(e) || "", l[n.id].full.get(c, function(e) {
                    return r.src = e.src
                }), l[n.id].thumb.get(s, function(e) {
                    return r.src === u ? r.src = e.src : void 0
                }), m(e, n), n.dataset.num = e
            }, a.resize = function(e) {
                return p = v(e, "fit-content")
            }, a.redrawDynamicContent = function(e, t) {
                return m(e, t)
            }, h = function() {
                var e;
                return e = document.createElement("IMG"), {
                    get: function(t, n) {
                        return e.complete && e.src === t ? n(e) : (e.src = t, e.complete ? n(e) : e.onload = function() {
                            return n(e)
                        })
                    }
                }
            }, s = function(e) {
                var t;
                return t = document.createElement("DIV"), t.className = "dynamic-hotspots", t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.width = c.width + "px", t.style.height = c.height + "px", t.style.transformOrigin = "0 0", t.style.overflow = "hidden", o(t, {
                    resize: function() {
                        return g = e.offsetHeight, t.style.transform = "scale(" + g / c.height + ")"
                    }
                }), t
            }, m = function(n, o) {
                var i, u, a, l;
                return i = o.getElementsByClassName("dynamic-hotspots")[0], (u = i.parentNode) ? (a = i.nextSibling, u.removeChild(i), i.innerHTML = "", i.style.transform = "scale(" + (g || o.offsetHeight) / c.height + ")", i.dataset.pageNum = n, l = t.pageToIndex(n), t.getHotspots(l).forEach(function(o) {
                    var u, a;
                    if (o.betaDynamic && "product" === o.type && d(n, l, o) && (a = 1 / t.numPagesFor(l), u = t.indexToPages(l).indexOf(n), o.spreadIndex === l)) return o.getProducts(function(t) {
                        var l;
                        if (Number(i.dataset.pageNum) === n) return l = $(r(e("../../views/core/dynamic_product.jst.eco"), t[0])), l.css({
                            top: 100 * o.position.top + "%",
                            left: (o.position.left - a * u) / a * 100 + "%",
                            width: o.position.width / a * 100 + "%",
                            height: 100 * o.position.height + "%"
                        }), i.appendChild(l[0])
                    })
                }), u.insertBefore(i, a)) : void 0
            }, d = function(e, n, r) {
                var o, i, u, a, l, s;
                return a = 1 / t.numPagesFor(n), i = t.indexToPages(n).indexOf(e), u = a * i, o = r.position.left, s = r.position.width, l = o + s, o >= u && u + a > o || l >= u && u + a > l
            }, a
        }
    }, {
        "../../views/core/dynamic_product.jst.eco": 81,
        "../util/blank_image.coffee": 52,
        "../util/blank_white_image.coffee": 53,
        "../util/template.coffee": 79,
        "./image_size_picker.coffee": 10,
        "./view.coffee": 28
    }],
    5: [function(e, t) {
        var n, r, o;
        r = e("./view.coffee"), o = e("../util/next_frame.coffee"), n = e("../util/animate.coffee"), t.exports = function(e, t) {
            var i, u, a, l, s, c, f, d, p, h, g, v, m, y;
            return u = {}, a = null, y = {
                domEl: {
                    position: "relative",
                    perspective: "3000px",
                    overflow: "visible"
                },
                page: {
                    position: "absolute",
                    top: 0,
                    width: "50%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d"
                },
                left: {
                    left: 0,
                    transformOrigin: "100% 50%"
                },
                right: {
                    left: "50%",
                    transformOrigin: "0% 50%"
                }
            }, c = null, l = null, f = null, m = null, s = function() {
                var n, o, i, a, s;
                for (h(t), t.css(y.domEl), s = t[0].children, n = 0, o = s.length; o > n; n++) i = s[n], /left/.test(i.className) ? (a = y.left, /back/.test(i.className) && (a = y.right)) : (a = y.right, /back/.test(i.className) && (a = y.left)), $(i).css($.extend(y.page, a)), e.initPage(i);
                return c = t[0].getElementsByClassName("page left")[0], l = t[0].getElementsByClassName("page right")[0], f = {
                    front: t[0].getElementsByClassName("flippingPage left front")[0],
                    back: t[0].getElementsByClassName("flippingPage left back")[0]
                }, m = {
                    front: t[0].getElementsByClassName("flippingPage right front")[0],
                    back: t[0].getElementsByClassName("flippingPage right back")[0]
                }, g(), r(t, {
                    resize: v
                }), u
            }, u.currentPageNum = function() {
                return 0 === a ? 1 : a
            }, u.goToPage = function(t, n, r) {
                var u, s;
                return n = 1.6 * n, t % 2 !== 0 && (t -= 1), t === a ? "function" == typeof r ? r() : void 0 : (p(a), t > a ? (s = m, u = "-0.499turn", e.loadPage(t, m.back), e.loadPage(t + 1, l)) : (s = f, u = "0.499turn", e.loadPage(t + 1, f.back), e.loadPage(t, c)), a = t, g(s), o(function() {
                    return i(s, u, n, function() {
                        return a === t ? (p(t), g(), o(function() {
                            return a === t ? (d(t), "function" == typeof r ? r() : void 0) : void 0
                        })) : void 0
                    })
                }))
            }, u.redrawDynamicContent = function() {
                return null != a ? (e.redrawDynamicContent(a, f.front), e.redrawDynamicContent(a + 1, m.front), e.redrawDynamicContent(a - 1, f.back), e.redrawDynamicContent(a + 2, m.back), e.redrawDynamicContent(a - 2, c), e.redrawDynamicContent(a + 3, l)) : void 0
            }, v = function() {
                var t;
                return t = f.front.getBoundingClientRect(), 0 === t.width && (t = m.front.getBoundingClientRect()), e.resize(t), p(a)
            }, i = function(e, r, o, i) {
                var u, a, l, s, c;
                for (t[0].style.zIndex = 10, c = "0 0 0 1px rgba(0,0,0, 0.07)", s = ["front", "back"], u = 0, a = s.length; a > u; u++) l = s[u], e[l].style.boxShadow = c;
                return n(e.front, {
                    transform: "rotateY(" + r + ")"
                }, o), n(e.back, {
                    transform: "rotateY(0)"
                }, o, function() {
                    var n, r, o;
                    for (o = ["front", "back"], n = 0, r = o.length; r > n; n++) l = o[n], e[l].style.boxShadow = "";
                    return t[0].style.zIndex = null, i()
                })
            }, g = function(e) {
                var t, r, o, i, u, a;
                for (u = ["front", "back"], a = [], r = 0, o = u.length; o > r; r++) i = u[r], f[i].style.zIndex = f === e ? 1 : null, m[i].style.zIndex = m === e ? 1 : null, t = "back" === i ? .5 : 0, n(f[i], {
                    transform: "rotateY(" + -t + "turn)"
                }), a.push(n(m[i], {
                    transform: "rotateY(" + t + "turn)"
                }));
                return a
            }, p = function(t) {
                return e.loadPage(t, f.front), e.loadPage(t + 1, m.front)
            }, d = function(t) {
                return e.loadPage(t - 1, f.back), e.loadPage(t + 2, m.back), e.loadPage(t - 2, c), e.loadPage(t + 3, l)
            }, h = function(e) {
                return e.html("<div class='page left front'></div>\n<div class='page right front'></div>\n<div class='flippingPage left back'></div><div class='flippingPage left front'></div>\n<div class='flippingPage right back'></div><div class='flippingPage right front'></div>")
            }, s()
        }
    }, {
        "../util/animate.coffee": 49,
        "../util/next_frame.coffee": 70,
        "./view.coffee": 28
    }],
    6: [function(e, t) {
        var n, r, o, i, u;
        u = e("../util/template.coffee"), n = e("./flip_content_loader.coffee"), r = e("./flipper.coffee"), i = e("./slider_view.coffee"), o = e("../desktop/hotspots_layer.coffee"), t.exports = function(t, a, l) {
            var s, c, f, d, p, h, g, v, m, y, b, w, x, S, T, C, k;
            return s = {}, t.html(u(e("../../views/core/flipper_view.jst.eco"))), h = null, g = t.find("#flipper"), y = null, b = t.find(".hotspots.layer"), T = null, C = t.find("#zoom_slider"), p = !1, c = {}, k = null, m = null, w = function() {
                var e;
                return t.addClass("flipper"), e = n(a), h = r(e, g), T = i(C, a, l), y = o(b, x(), a, l), s
            }, s.currentIndex = function() {
                return a.pageToIndex(h.currentPageNum())
            }, s.jumpToSpread = function(e, t) {
                var n, r;
                return null == t && (t = {}), 0 > e || e >= a.length ? void 0 : (n = f(e), S(n, c), c = n, y.deactivate(), y.unloadHotspots(), y.loadHotspots(e), r = a.indexToPages(e)[0], h.goToPage(r, t.duration, function() {
                    return y.activate(e), "function" == typeof t.callback ? t.callback() : void 0
                }), T.jumpToSpread(e, {
                    duration: 0
                }))
            }, s.enlargeTo = function(e, t, n, r) {
                return null == n && (n = 300), null == r && (r = null), C.css({
                    zIndex: 0,
                    visibility: "visible"
                }), g.css({
                    visibility: "hidden"
                }), T.enlargeTo(e, t, n, function() {
                    return "function" == typeof r ? r() : void 0
                })
            }, s.resetToNormalSize = function(e, t) {
                return T.resetToNormalSize(e, function() {
                    return g.css({
                        visibility: ""
                    }), C.css({
                        visibility: "",
                        zIndex: ""
                    }), "function" == typeof t ? t() : void 0
                })
            }, s.on = function() {
                return T.on.apply(T, arguments)
            }, s.off = function() {
                return T.off.apply(T, arguments)
            }, s.currentSlide = function() {
                return T.currentSlide()
            }, s.isEnlarged = function() {
                return T.isEnlarged()
            }, s.toggleHotspots = function() {}, s.enable = function() {
                return T.enable()
            }, s.disable = function() {
                return T.disable()
            }, s.resize = function() {
                return k = t.width(), m = t.height(), c = f(d()), S(c, {})
            }, s.redrawDynamicContent = function() {
                return h.redrawDynamicContent(), T.redrawDynamicContent()
            }, d = function() {
                return a.pageToIndex(h.currentPageNum())
            }, S = function(e, t) {
                return y.resize(e), e.left !== t.left ? b.css({
                    left: e.left
                }) : void 0
            }, f = function(e) {
                var t, n, r;
                return n = a.isFrontCover(e), t = a.isBackCover(e), r = n || t ? k / 2 : k, {
                    left: n ? r : 0,
                    top: 0,
                    width: r,
                    height: m
                }
            }, v = function() {
                return {
                    top: 0,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }, x = function() {
                return {
                    viewPort: v,
                    absoluteX: function() {
                        return c.left
                    },
                    absoluteY: function() {
                        return c.top
                    }
                }
            }, w()
        }
    }, {
        "../../views/core/flipper_view.jst.eco": 83,
        "../desktop/hotspots_layer.coffee": 34,
        "../util/template.coffee": 79,
        "./flip_content_loader.coffee": 4,
        "./flipper.coffee": 5,
        "./slider_view.coffee": 25
    }],
    7: [function(e, t) {
        t.exports = function(e, t) {
            var n, r, o, i, u, a, l, s, c, f, d, p, h, g, v, m, y, b, w, x;
            return null == t && (t = {}), null == t.allowDragSliding && (t.allowDragSliding = !Reader.Env.desktop), null == t.allowZoomOut && (t.allowZoomOut = !Reader.Env.desktop), v = 0, f = 0, n = 300, u = Reader.Env.hasMouse ? .07 : .3, w = .49, x = null != Reader.Env.mobile ? .002 : .0015, m = .3, p = Math.pow(10, -8), a = !0, c = !0, y = function(n) {
                return t.allowDragSliding ? ((v + n > 0 && e.isFirst() || 0 > v + n && e.isLast()) && (n *= m), v += n) : n
            }, b = function(e) {
                var t, n, r;
                return r = Math.min(-v, 0), n = Math.max(-v, 0), t = Math.min(Math.max(e, r), n), v += t, e - t
            }, l = function(n) {
                var r, o;
                return 0 === n.x ? 0 : (r = t.easyFlick ? Math.sqrt(Math.pow(n.x, 2) + Math.pow(n.y, 2)) : Math.abs(n.x), x > r ? 0 : (o = -1 * Math.round(n.x / Math.abs(n.x)), 1 === o && e.isLast() && (o = 0), -1 === o && e.isFirst() && (o = 0), 0 !== o && d("change spread", "flick"), o))
            }, i = function(t, n, r) {
                var o, i, u, a;
                return null == r && (r = !1), a = e.zoomScale() * n, p > a && (a = p), u = e.minScale(), i = e.maxScale(), u > a && 1 > n && (o = 4, n = 1 * (n - 1) / (o * u / a) + 1, a = e.zoomScale() * n), a > i && n > 1 && (o = 2, n = 1 * (n - 1) / (o * a / i) + 1, a = e.zoomScale() * n), e.zoomWithCenter(t, a), h()
            }, o = function(t) {
                var r, o;
                return r = null, Math.abs(e.defaultScale() - e.zoomScale()) < .001 ? (d("zoom", "tap zoom " + (e.zoomScale() < e.tapScale() ? "in" : "out")), r = e.tapScale()) : (d("zoom", "tap zoom " + (e.zoomScale() < e.defaultScale() ? "in" : "out")), r = e.defaultScale()), e.zoomWithCenter(t, r), h(), o = {
                    duration: n
                }
            }, g = function(t) {
                var n, r;
                return r = e.zoomScale(), n = Math.min(Math.max(r, e.minScale()), e.maxScale()), e.zoomWithCenter(t, n)
            }, r = function(n, r) {
                var o, i, l, s, c;
                return 0 === n && 0 === r ? 0 : (o = e.borderDistance({
                    x: e.x() + n,
                    y: e.y() + r
                }), l = 0 === o.left && 0 === o.right ? 1 : u, c = 0 === o.top && 0 === o.bottom ? 1 : u, i = t.allowDragSliding ? Math.min(Math.max(n, e.minX() - e.x()), e.maxX() - e.x()) : n * (e.isZoomedIn() ? l : 0), s = e.isZoomedIn() ? r * c : 0, e.moveBy(i, s), Reader.Env.hasMouse && a && (0 !== i || 0 !== s) && (d("panning", "drag"), a = !1), n - i)
            }, h = function() {
                return e.snapToBounds()
            }, d = function(e, n) {
                return t.log ? setTimeout(function() {
                    return Reader.log(e, {
                        method: n
                    })
                }) : void 0
            }, s = function(u) {
                var s, p, m, x, S, T, C, k, _, E, R, j, z;
                if (R = null, x = null, m = null != (T = u.numTouches) ? T : 0, S = v, e.startInteraction(), 0 === m) {
                    if (e.dragEnd(), -w > v && !e.isLast()) return d("change spread", "drag"), {
                        jumpTo: e.index + 1
                    };
                    if (v > w && !e.isFirst()) return d("change spread", "drag"), {
                        jumpTo: e.index - 1
                    };
                    if (u.previousNumTouches > 0 && 0 !== S && (v = 0, x = {
                            distance: 0,
                            duration: n
                        }), 1 === u.previousNumTouches)
                        if (_ = null != (C = u.velocity) ? C : {
                                x: 0,
                                y: 0
                            }, j = Math.abs(f), !e.isZoomedIn() && e.atXBorder() && .6 > j && !Reader.Env.hasMouse) {
                            if (0 !== (p = l(_))) return {
                                jumpTo: e.index + p
                            };
                            h(), R = {
                                duration: n
                            }
                        } else 0 === _.x && 0 === _.y || Reader.Env.hasMouse ? (h(), R = {
                            duration: n
                        }) : (e.isZoomedIn() || (_.y = 0), R = {
                            releaseVelocity: _,
                            callback: function() {
                                return h()
                            }
                        })
                } else 0 === u.previousNumTouches && (e.stopAnimations(), e.dragStart(), a = !0, f = 0, c = e.zoomScale());
                return s = Math.abs(v) <= t.slideBorderWidth, null != u.scaleDelta && 1 !== u.scaleDelta && (s || u.scaleDelta < 1) && (i(u.currentPoint, u.scaleDelta, u.mousewheel), R = {}), (m > 0 && null != u.xDelta || null != u.yDelta && (u.xDelta !== (k = u.yDelta) || 0 !== k)) && (E = b(u.xDelta), E = r(E, u.yDelta), R = {}, y(E), (0 !== v || 0 !== S) && (x = {
                    distance: v
                }), f += u.xDelta), (u.doubleTap || Reader.Env.hasMouse && u.click) && (o(u.currentPoint), R = {
                    duration: n
                }), 2 > m && u.previousNumTouches >= 2 && (z = c > e.zoomScale() ? "out" : "in", d("zoom", "pinch zoom " + z), 0 === m ? (g(u.previousPoint), h(), R = {
                    duration: n
                }) : (g(u.currentPoint), R = {
                    duration: 0
                })), null == R && (h(), R = {
                    duration: n
                }), e.commitInteraction(R), x
            }
        }
    }, {}],
    8: [function(e, t) {
        var n, r, o, i;
        n = e("camelcase"), r = e("decamelize"), o = null, i = {
            width: 36,
            height: 36
        }, t.exports = function(e) {
            var t, u, a, l, s, c;
            return t = {}, c = window.devicePixelRatio >= 2 ? 2 : 1, s = [], t.render = function(t, n) {
                var r, o, i, u, a;
                for (null == n && (n = {
                        left: 0,
                        top: 0,
                        width: e.width,
                        height: e.height
                    }), u = null != t ? t : [], a = [], o = 0, i = u.length; i > o; o++) r = u[o], r.showIndication && a.push(l(r, n));
                return a
            }, l = function(t, n) {
                var r, u, l, f, d, p, h, g, v, m;
                return r = e.getContext("2d"), f = a(t), v = Math.round(n.left + f.left * n.width), m = Math.round(n.top + f.top * n.height), (l = null != (p = o[t.type]) ? p : o.product) ? (h = [i.width * c, i.height * c], g = h[0], u = h[1], d = {
                    x: Math.round(v - g / 2),
                    y: Math.round(m - u / 2),
                    width: g,
                    height: u
                }, s.push(d), r.drawImage(l, d.x, d.y, d.width, d.height)) : void 0
            }, t.clearHotspotIcons = function() {
                var t, n, r, o;
                for (t = e.getContext("2d"), n = 0, r = s.length; r > n; n++) o = s[n], t.clearRect(o.x, o.y, o.width, o.height);
                return s.length = 0
            }, t.iconPosition = a = function(e) {
                return {
                    left: e.position.left + e.position.iconLeft * e.position.width,
                    top: e.position.top + e.position.iconTop * e.position.height
                }
            }, t.iconRect = function(t) {
                var n, r, o;
                if (t.showIndication) return o = i.width * c / e.width, n = i.height * c / e.height, r = a(t), r.width = o, r.height = n, r.left -= o / 2, r.top -= n / 2, r
            }, u = function() {
                var e, t, r, o, i, u, a, l, s, c, f, d, p, h, g, v;
                for (i = {}, t = function(e) {
                        var t, r, o, u;
                        return o = e.selectorText, (o.match(/^\.hotspot\-icon\.[\w-]+$/) || o.match(/^\.[\w-]+\.hotspot\-icon$/)) && (u = n(o.replace(".hotspot-icon", "").slice(1)), t = null != (r = /url\((.+)\)/.exec(e.style.backgroundImage)) ? r : [], null != t[1]) ? (i[u] = new Image, i[u].src = t[1].replace(/\"/g, "")) : void 0
                    }, r = function(e) {
                        var t;
                        return e ? null != (t = e.rules) ? t : e.cssRules : []
                    }, f = document.styleSheets, o = 0, l = f.length; l > o; o++)
                    if (v = f[o], null != v.href && v.href.match(Reader.Env.platform + "_reader"))
                        for (d = r(v), u = 0, s = d.length; s > u; u++) g = d[u], null != g.selectorText && t(g);
                for (e = null != (p = $("style#branding")[0]) ? p.sheet : void 0, h = r(e), a = 0, c = h.length; c > a; a++) g = h[a], null != g.selectorText && t(g);
                return i
            }, Reader.Env.retardedBrowser ? (o = {}, o.product = {
                width: i.width,
                height: i.height
            }, l = function(t) {
                var n, o;
                return n = $("<div class='hotspot-icon " + r(t.type, "-") + "'>"), o = a(t), n.css({
                    left: Math.round(1e4 * o.left) / 100 + "%",
                    top: Math.round(1e4 * o.top) / 100 + "%"
                }), $(e).append(n)
            }, t.clearHotspotIcons = function() {
                return $(e).html("")
            }) : null == o && (o = u()), t
        }
    }, {
        camelcase: 113,
        decamelize: 114
    }],
    9: [function(e, t) {
        var n, r;
        r = e("../util/template.coffee"), n = e("../../../src/bootstrap/spinner.coffee"), t.exports = function() {
            var t, o;
            return t = {}, o = {
                width: Reader.Env.desktop ? "800px" : "720px",
                background: "#fff"
            }, t.render = function(t, i) {
                var u, a, l, s, c;
                return null == i && (i = {}), s = $.extend({
                    url: t
                }, o), $.extend(s, i), Reader.Env.mobile && (s.width = window.innerWidth + "px"), u = $(r(e("../../views/util/iframed_content.jst.eco"), s)), c = u.find(".wrapper"), a = u.find("iframe"), l = $("<div>"), u.css({
                    background: s.background
                }), l.css({
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    background: s.background,
                    position: "absolute"
                }), l.append(n()), c.prepend(l), a.on("load", function() {
                    return $(l).remove()
                }), u
            }, t
        }
    }, {
        "../../../src/bootstrap/spinner.coffee": 117,
        "../../views/util/iframed_content.jst.eco": 112,
        "../util/template.coffee": 79
    }],
    10: [function(e, t) {
        var n, r;
        r = e("../util/boundingScale.coffee"), t.exports = n = function(e) {
            var t, o, i;
            return t = e.sortedImageSizes(), o = e.imageSizes, i = 1 / n.pixelDensity,
                function(e, n) {
                    var u, a, l, s, c;
                    for (c = null, u = 0, a = t.length; a > u; u++)
                        if (l = t[u], s = r(o[l], e, n), i >= s) {
                            c = l;
                            break
                        }
                    return null != c ? c : t[t.length - 1]
                }
        }, n.pixelDensity = Math.min(window.devicePixelRatio || 1, 2)
    }, {
        "../util/boundingScale.coffee": 54
    }],
    11: [function(e, t) {
        var n, r, o;
        r = e("../util/on_click_strict.coffee"), o = e("../util/on_double_click.coffee"), n = e("../util/drag_handler.coffee"), t.exports = function(e, t) {
            var i, u, a, l, s, c, f, d, p, h, g, v;
            return i = {}, p = {
                primary: {
                    x: 0,
                    y: 0
                },
                secondary: {
                    x: 0,
                    y: 0
                },
                count: null
            }, v = {
                x: 0,
                y: 0
            }, a = null, l = null, h = null, c = function() {
                return l = s(), Reader.Env.hasMouse ? r(e, function(e) {
                    var n;
                    return n = f(e), setTimeout(function() {
                        return t({
                            numTouches: 0,
                            velocity: 0,
                            click: !0,
                            currentPoint: n
                        })
                    })
                }) : o(e, function(e) {
                    return e.preventDefault(), a = f({
                        pageX: e.x,
                        pageY: e.y
                    })
                }), n(e, g), i
            }, i.refresh = function() {
                return l = s()
            }, g = function(e, n) {
                var r;
                return r = {
                    primary: e.touches[0] ? f(e.touches[0]) : void 0,
                    secondary: e.touches[1] ? f(e.touches[1]) : void 0,
                    count: e.numTouches,
                    timeStamp: e.timeStamp || (new Date).getTime(),
                    eventType: n
                }, setTimeout(function() {
                    var e;
                    return e = d(r, p), t(e), p = r
                })
            }, d = function(e, t) {
                var n, r, o, i, l, s, c, f, d, p, h, g, m;
                return g = e.count === t.count, f = "move" === e.eventType, c = null != a && "end" === e.eventType, e.primary || (e.primary = {
                    x: 0,
                    y: 0
                }), e.secondary || (e.secondary = e.primary), n = c ? a.x : (e.primary.x + e.secondary.x) / 2, r = c ? a.y : (e.primary.y + e.secondary.y) / 2, p = (t.primary.x + t.secondary.x) / 2, h = (t.primary.y + t.secondary.y) / 2, i = g && f ? n - p : 0, l = g && f ? r - h : 0, null != t.timeStamp && (o = e.timeStamp - t.timeStamp), m = 1, g && (s = u(e.primary, e.secondary), d = u(t.primary, t.secondary), 0 !== d && (m = s / d)), f && null != o && 0 !== o ? v = {
                    x: i / o,
                    y: l / o
                } : (0 !== e.count || c) && (v = {
                    x: 0,
                    y: 0
                }), c && (a = null), {
                    xDelta: i,
                    yDelta: l,
                    velocity: v,
                    currentPoint: {
                        x: n,
                        y: r
                    },
                    previousPoint: {
                        x: p,
                        y: h
                    },
                    scaleDelta: m,
                    numTouches: e.count,
                    previousNumTouches: t.count,
                    doubleTap: c
                }
            }, f = function(e) {
                return {
                    x: (e.pageX - l.left) / l.width,
                    y: (e.pageY - l.top) / l.height
                }
            }, s = function() {
                var t, n, r, o;
                n = {}, r = e[0].getBoundingClientRect();
                for (t in r) o = r[t], n[t] = o;
                return null == n.width && (n.width = n.right - n.left), null == n.height && (n.height = n.bottom - n.top), n
            }, u = function(e, t) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
            }, c()
        }
    }, {
        "../util/drag_handler.coffee": 62,
        "../util/on_click_strict.coffee": 74,
        "../util/on_double_click.coffee": 75
    }],
    12: [function(e, t) {
        var n, r;
        n = e("../util/template.coffee"), r = e("../util/on_click.coffee"), t.exports = function(t) {
            var o, i, u, a, l, s, c;
            return i = {}, t.html(n(e("../../views/core/main_menu.jst.eco"))), s = {}, o = null, c = null, a = function() {
                return c = t.find("#view_selector")
            }, i.deactivateItem = u = function(e) {
                return null != o && o.name === e ? ($(o).removeClass("active"), o = null) : void 0
            }, i.activateItem = function(e) {
                return o = s[e], $(o).addClass("active")
            }, i.activeItem = function() {
                return o
            }, i.hideItem = function(e) {
                return $(s[e]).hide()
            }, i.showItem = function(e) {
                return $(s[e]).show()
            }, i.addItem = function(e, t, n) {
                return null == n && (n = {}), s[e] = l(e, t, n), s[e].name = e, c.append(s[e])
            }, i.addClass = function(e, t) {
                return $(s[e]).addClass(t)
            }, i.removeClass = function(e, t) {
                return $(s[e]).removeClass(t)
            }, i.setData = function(e, t) {
                var n, r, o, i;
                n = $(s[e]).find(".icon"), o = [];
                for (r in t) i = t[r], o.push(n.attr("data-" + r, i));
                return o
            }, i.raise = function(e) {
                return null == e && (e = 300), t.css({
                    zIndex: 200
                }), setTimeout(function() {
                    return t.css({
                        zIndex: ""
                    })
                }, e)
            }, l = function(t, o, i) {
                var u, a, l, s;
                return "function" == typeof o ? u = function(e) {
                    return o(t, e)
                } : (u = function() {
                    return window.open(o)
                }, null == i.href && (i.href = o)), s = i.titleHtml, null == s && (s = document.createTextNode(null != (l = i.title) ? l : "")), a = $(n(e("../../views/core/main_menu_item.jst.eco"), {
                    name: t,
                    href: i.href,
                    target: i.target
                })), a.find(".content").append(s), r(a, function(e) {
                    return u(e), Reader.log("click menu item", {
                        which: t
                    })
                }), a.on("click", function(e) {
                    return e.preventDefault()
                }), a[0]
            }, a(), i
        }
    }, {
        "../../views/core/main_menu.jst.eco": 87,
        "../../views/core/main_menu_item.jst.eco": 88,
        "../util/on_click.coffee": 73,
        "../util/template.coffee": 79
    }],
    13: [function(e, t) {
        t.exports = function() {
            var e, t, n, r;
            return e = {}, t = {
                setState: [],
                cartContentChanged: [],
                embed: [],
                injectStyles: []
            }, n = function() {
                return null != window.addEventListener ? addEventListener("message", r, !1) : attachEvent("onmessage", r), e
            }, e.stateChanged = function(e) {
                var t;
                return t = JSON.stringify(["stateChange", {
                    state: e,
                    url: window.location.href
                }]), parent.postMessage(t, "*")
            }, e.initialized = function() {
                var e;
                return e = JSON.stringify(["initialized", {
                    platform: Reader.Env.platform
                }]), parent.postMessage(e, "*")
            }, e.on = function(e, n) {
                var r;
                return null != (r = t[e]) ? r.push(n) : void 0
            }, r = function(e) {
                var n, r, o, i, u, a, l, s, c, f, d;
                try {
                    s = JSON.parse(e.data), a = s[0], n = s[1]
                } catch (e) {
                    return void(o = e)
                }
                for (l = function() {
                        switch (a) {
                            case "setState":
                                return n.state;
                            case "cartContentChanged":
                                return n;
                            case "embed":
                                return n;
                            case "injectStyles":
                                return n
                        }
                    }(), f = null != (c = t[a]) ? c : [], d = [], i = 0, u = f.length; u > i; i++) r = f[i], d.push(r(l));
                return d
            }, n()
        }
    }, {}],
    14: [function(e, t) {
        var n;
        n = e("../util/blank_image.coffee"), t.exports = function(e, t) {
            var r, o, i, u, a, l, s;
            return null == t && (t = {}), r = {}, s = e.photoUrls, i = null, u = null, l = null, o = {}, r.init = function(e) {
                return e.contentEl.html($("<img/>"))
            }, r.beforeSlideChange = function(e, n) {
                return l = e, "function" == typeof t.beforeSlideChange ? t.beforeSlideChange(e, n) : void 0
            }, r.activateSlide = function(e) {
                var n, r;
                return u = e, i = e.index, r = null != (n = s[i]) ? n.full : void 0, Reader.log("view product media", {
                    type: "image",
                    url: r
                }), "function" == typeof t.onSlideChange ? t.onSlideChange(e) : void 0
            }, r.loadSlideContent = function(e, t, n) {
                var r;
                return a(e, null != (r = s[t]) ? r.full : void 0, function(e) {
                    return n(e)
                })
            }, r.unloadSlideContent = function(e) {
                var t;
                return t = e.contentEl.find("img"), t.attr("src", n), e.loaded = !1, o[e.index] = null
            }, r.renderContent = function(e) {
                return e.contentEl.find("img")[0].src = o[e.index].src
            }, a = function(e, t, n) {
                var r;
                return r = e.index, o[r] = new Image, o[r].onload = function() {
                    return e.index === r && "function" == typeof n ? n(o[r]) : void 0
                }, o[r].src = t
            }, r.resize = function() {}, r.atFirstSlide = function() {
                return 0 === i
            }, r.atLastSlide = function() {
                return i === s.length - 1
            }, r.currentIndex = function() {
                return i
            }, r.numSlides = e.photoUrls.length, r
        }
    }, {
        "../util/blank_image.coffee": 52
    }],
    15: [function(e, t) {
        var n, r, o, i = [].slice;
        o = e("../util/template.coffee"), n = e("./product_media_content_loader.coffee"), r = e("./slider.coffee"), t.exports = function(t) {
            var u, a, l, s, c, f, d, p, h;
            return u = {}, c = null, p = null, f = null, s = null, l = {}, u.render = function(i, l) {
                var h, g, v;
                c = i, c.html(o(e("../../views/core/hotspots/details_slider.jst.eco"), l)), f = c.find(".indicator"), s = n(l, {
                    beforeSlideChange: a,
                    onSlideChange: d
                }), p = r(s, c.find(".slider"), $.extend({
                    zoomable: !0,
                    retainScale: !1,
                    easyFlick: !1,
                    log: !1,
                    sizing: "fit-content"
                }, null != t ? t : {})), p.jumpTo(0, 0), v = [];
                for (g in p) h = p[g], v.push(null != u[g] ? u[g] : u[g] = h);
                return v
            }, u.destroy = function() {
                return null != c ? p.destroy() : void 0
            }, d = function(e) {
                return "function" == typeof l.onSlideChange ? l.onSlideChange(e) : void 0
            }, a = function(e, t) {
                return h(t), "function" == typeof l.beforeSlideChange ? l.beforeSlideChange(e, t) : void 0
            }, h = function(e) {
                return f.find(".current").removeClass("current"), $(f.children().get(null != e ? e : s.currentIndex())).addClass("current")
            }, u.jumpToNextSlide = function() {
                return s.atLastSlide() ? void 0 : p.jumpTo(s.currentIndex() + 1)
            }, u.jumpToPrevSlide = function() {
                return s.atFirstSlide() ? void 0 : p.jumpTo(s.currentIndex() - 1)
            }, u.resizeTo = function() {
                var e, t, n;
                return n = arguments[0], t = arguments[1], e = 3 <= arguments.length ? i.call(arguments, 2) : [], setTimeout(function() {
                    return setVideoSizes({
                        width: n.width,
                        height: n.height
                    })
                }), p.resizeTo.apply(p, [n, t].concat(i.call(e)))
            }, u.getThumbnail = function(e) {
                return s.thumbUrl(e)
            }, u.setIndicator = function(e) {
                return f = $(e), h()
            }, u.currentIndex = function() {
                return s.currentIndex()
            }, u.on = function(e, t) {
                return l[e] = t
            }, u
        }
    }, {
        "../../views/core/hotspots/details_slider.jst.eco": 85,
        "../util/template.coffee": 79,
        "./product_media_content_loader.coffee": 14,
        "./slider.coffee": 24
    }],
    16: [function(e, t) {
        var n, r, o, i;
        n = e("../util/custom_event.coffee"), o = [], i = null, t.exports = r = function(e, t, r) {
            var u, a, l, s, c, f;
            u = {}, a = {}, s = function(e) {
                var t, n;
                return t = document.createElement("pre"), n = document.createTextNode(e), t.appendChild(n), t.innerHTML
            }, f = function(e) {
                return null != i ? e(i) : o.push(function() {
                    return e(i)
                })
            }, u.publication = {
                slug: r.slug,
                groupSlug: r.groupSlug
            }, u.setHomeButtonAction = function(e, t) {
                return a.homeButtonAction = e, null != t ? a.homeButtonTitle = s(t) : void 0
            }, u.setCartButtonAction = function(e, t) {
                return a.cartButtonAction = e, null != t ? a.cartButtonTitle = s(t) : void 0
            }, u.setProductCtaAction = function(e) {
                return a.productCtaAction = e
            }, u.setProductAction = function(e) {
                return a.productAction = e
            }, u.setLinkAction = function(e) {
                return a.linkAction = e
            }, u.cartContentChanged = function(e) {
                return f(function(t) {
                    return t.cartContentChanged(e)
                })
            }, u.showExternalContent = function(e, t) {
                return null == t && (t = {}), f(function(n) {
                    return n.showExternalContent(e, t)
                })
            }, u._setRelatedPublications = function(e) {
                return r.relatedPublications = e
            }, Object.freeze(u);
            try {
                e && e(u, t)
            } catch (e) {
                l = e, console.log(l.message)
            }
            return c = new n("viewerReady", {
                detail: {
                    api: u,
                    platform: t
                }
            }), window.dispatchEvent(c), a
        }, r.activate = function(e) {
            var t, n, r;
            for (i = e, n = 0, r = o.length; r > n; n++)(t = o[n])();
            return o.length = 0
        }
    }, {
        "../util/custom_event.coffee": 60
    }],
    17: [function(e, t) {
        var n, r, o;
        r = e("../../../src/util/url.coffee"), o = e("../../../src/util/cookie.coffee"), n = e("./store.coffee"), t.exports = function(e) {
            var t, i, u, a, l, s, c, f, d, p, h, g, v, m, y, b, w, x, S, T, C, k, _, E, R;
            return i = {}, R = e.sizes.at1600.width, p = e.sizes.at1600.height, h = e.hotspots, b = e.spreads.length, g = {}, C = {}, w = [], x = {}, v = {}, u = null, y = null == e.config.layout || "booklet" === e.config.layout, l = e.analytics && e.analytics.customerGaToken && e.analytics.cookieConsentText, _ = l && !o.getCookie("ga_customer_consent"), E = "at200", m = function() {
                var t, n, r, o;
                return T(), i.id = e.id, i.slug = e.slug, i.groupSlug = e.groupSlug, i.title = e.config.publicationTitle, i.url = e.url, i.canonicalUrl = e.config.canonicalUrl, i.numPages = w.length, i.pages = w, i.length = b, i.aspectRatio = R / p, i.spreadAspectRatio = i.calcSpreadAspectRatio(), i.websiteUrl = e.config.websiteUrl, i.webshopCheckoutUrl = e.config.webshopCheckoutUrl, i.customerName = e.config.customerName, i.websiteDomain = a(e.config.websiteUrl), i.a4RelativeSize = null != (t = e.config.relativeSize) ? t : 1, i.feedbackReplyable = e.config.feedbackReplyable, i.showPrintButton = e.config.showPrintButton, i.enableSearch = e.config.enableSearch, i.exported = e.config.exported, i.disableSharing = e.config.disableSharing, i.translations = e.translations, i.locale = e.config.locale, i.enablePublitasBranding = e.config.enablePublitasBranding, i.relatedPublications = e.relatedPublications, i.sizing = null != (n = e.sizing) ? n : {}, i.isBooklet = y, i.passQueryParams = e.config.passQueryParams, i.imageSizes = e.sizes, i.transitionEffect = e.config.transitionEffect, i.branding = e.branding, i.pdfUrl = k(e.config.downloadPdfUrl), i.hotspotsVisibleOnHover = e.config.hotspotsVisibleOnHover, i.enableInStockInfo = e.config.enableInStockInfo, i.privacyPolicyUrl = e.config.privacyPolicyUrl, i.gaConsentBanner = _, Reader.currencySymbol = null != (r = e.config.currencySymbol) ? r : "â‚¬", Reader.callToActionButtonText = null != (o = e.branding) ? o.callToActionButtonText : void 0, i
            }, T = function() {
                var t, n, r, o, i, u, a, l, s, c, f, d;
                for (a = 0, l = e.spreads, c = [], d = n = 0, o = l.length; o > n; d = ++n) {
                    for (f = l[d], x[d] = [], s = f.pages, r = 0, i = s.length; i > r; r++) u = s[r], a++, w.push(u), v[a] = d, x[d].push(a);
                    c.push(function() {
                        var e, n, r, o, i;
                        for (o = null != (r = f.hotspots) ? r : [], i = [], e = 0, n = o.length; n > e; e++) t = o[e], i.push(S(t, d));
                        return i
                    }())
                }
                return c
            }, S = function(e, t) {
                var n, r;
                switch (e.spreadIndex = t, g[e.id] = e, e.publication = i, e.type) {
                    case "product":
                        return r = function() {
                            var t, r, o, i;
                            for (o = e.products, i = [], t = 0, r = o.length; r > t; t++) n = o[t], i.push(n.id);
                            return i
                        }(), delete e.products, e.getProducts = function(t) {
                            return null != e.products ? t(e.products) : c(r, function(n) {
                                return null == e.products && (e.products = n), t(e.products)
                            })
                        }
                }
            }, a = function(e) {
                return e ? e.replace("http://", "").replace("https://", "").replace("www.", "").replace(/\?.*$/, "").split("/")[0] : void 0
            }, k = function(e) {
                var t, n;
                return null == e ? void 0 : (n = r(e).pathname, 0 !== n.indexOf("/") && (n = "/" + n), t = window.location, t.protocol + "//" + t.host + n)
            }, i.getSpreadImageUrls = f = function(t, n) {
                var r, o, i, u, a;
                if (null == e.spreads[t]) return [];
                for (u = e.spreads[t].pages, a = [], r = 0, o = u.length; o > r; r++) i = u[r], a.push(i.images[n]);
                return a
            }, i.getSpreadText = function(t) {
                var n, r, o, i, u;
                for (i = e.spreads[t].pages, u = [], n = 0, r = i.length; r > n; n++) o = i[n], u.push(o.text);
                return u
            }, i.getPageImageUrl = function(e, t) {
                var n;
                return n = w[e - 1], n ? n.images[t] : void 0
            }, i.getPageText = function(e) {
                return (w[e - 1] || {}).text
            }, i.sortedImageSizes = function() {
                return Object.keys(e.sizes).sort(function(t, n) {
                    return e.sizes[t].height - e.sizes[n].height
                })
            }, i.pageToIndex = function(e) {
                return v[e]
            }, i.indexToPages = function(e) {
                return x[e]
            }, t = function() {
                return e.spreads
            }, i.getHotspots = function(t) {
                var n, r;
                return null != (n = null != (r = e.spreads[t]) ? r.hotspots : void 0) ? n : []
            }, i.getHotspot = function(e) {
                return g[e]
            }, i.getProduct = s = function(t, r) {
                var o;
                return null != C[t] ? r(C[t]) : (o = e.url + "/product/" + t + ".json", n.getJSON(o, function(e) {
                    return e ? (e.price && (e.price = parseFloat(e.price)), e.discountedPrice && (e.discountedPrice = parseFloat(e.discountedPrice)), null == C[t] && (C[t] = e), null == e.hotspot && (e.hotspot = g[e.hotspotId]), r(C[t])) : r()
                }))
            }, i.getProducts = c = function(e, t) {
                var n, r, o, i, u, a, l;
                for (a = [], u = 0, l = [], o = n = 0, i = e.length; i > n; o = ++n) r = e[o], l.push(function(n, r) {
                    return s(n, function(n) {
                        return a[r] = n, u++, u === e.length ? t(a) : void 0
                    })
                }(r, o));
                return l
            }, i.assignProducts = function(e, t) {
                var n, r, o, i;
                if (n = g[e]) {
                    for (r = 0, o = t.length; o > r; r++) i = t[r], i.hotspot = n;
                    return n.products = t
                }
            }, d = function(e) {
                return f(e, E)
            }, i.getThumbnailImageUrlForPage = function(e) {
                return 1 > e || e > w.length ? void 0 : w[e - 1].images[E]
            }, i.getPageCountForIndex = function(t) {
                return e.spreads[t].pages.length
            }, i.pageFormat = function() {
                return R > p ? "landscape" : "portrait"
            }, i.numPagesFor = function(t) {
                var n;
                return null != (n = e.spreads[t]) ? n.pages.length : void 0
            }, i.numHotspots = function(t) {
                var n, r;
                return (null != (n = (null != (r = e.spreads[t]) ? r : {}).hotspots) ? n : []).length
            }, i.isFrontCover = function(e) {
                return y ? 0 === e && 1 === i.numPagesFor(e) : !1
            }, i.isBackCover = function(e) {
                return y ? e === b - 1 && 1 === i.numPagesFor(e) : !1
            }, i.calcSpreadAspectRatio = function(t) {
                var n, r;
                return null == t && (t = "at1600"), r = e.sizes[t], n = y ? 2 : 1, n * r.width / r.height
            }, m()
        }
    }, {
        "../../../src/util/cookie.coffee": 121,
        "../../../src/util/url.coffee": 123,
        "./store.coffee": 26
    }],
    18: [function(e, t) {
        var n, r, o, i, u, a, l, s, c = [].slice;
        l = e("../util/on_click.coffee"), u = e("./view.coffee"), i = e("../util/template.coffee"), s = e("../util/i18n.coffee"), n = e("../util/scrollable.coffee"), o = e("./store.coffee"), r = e("../../../src/bootstrap/spinner.coffee"), a = e("../util/excerpt"), t.exports = function() {
            var t, f, d, p, h, g, v, m, y, b, w, x, S, T, C, k, _, E, R, j, z, N, A;
            return C = arguments[0], A = arguments[1], f = 3 <= arguments.length ? c.call(arguments, 2) : [], t = {}, g = null, z = null, d = null, R = null, j = null, N = null, S = f[f.length - 1], T = 2 === f.length ? f[0] : {}, null == T.autoSearch && (T.autoSearch = !0), x = null, w = function() {
                var e;
                return z = g.find("input"), R = g.find(".results"), e = g.find("form"), d = g.find("form .clear"), d.hide(), x && (z.val(x.text), d.show(), E(x.results, x.text)), e.on("submit", function(e) {
                    return h(), z.blur(), e.preventDefault()
                }), d.on("mousedown", function(e) {
                    return e.preventDefault()
                }), l(d, function() {
                    return p(), z.focus()
                }), z.on("touchstart", function() {
                    return z.focus()
                }), z.on("input", y), u(g, t)
            }, t.render = function() {
                return g = $(i(e("../../views/core/search_view.jst.eco"))), w(), g
            }, t.activate = function() {
                return x || k(s("search.empty_state")), null != j ? j : j = n(g.find(".scroll-wrapper"))
            }, t.deactivate = function() {
                return Reader.log("close search"), z.blur()
            }, t.selectSearchField = function() {
                return Reader.Env.retardedBrowser || z.focus(), z.select()
            }, t.destroy = function() {
                return t.deactivate(), null != j && j.destroy(), g.remove(), g = null, z = null, d = null, R = null, j = null, N = null
            }, y = function() {
                return 0 === z.val().length ? (v(), d.hide()) : (setTimeout(function() {
                    return d.show()
                }), T.autoSearch ? m() : void 0)
            }, m = function() {
                return null != N && clearTimeout(N), N = setTimeout(h, 250)
            }, h = function() {
                var e;
                return e = z.val(), "" !== e && (null != x ? x.text : void 0) !== e ? (k(s("search.searching"), !0), o.search(A, e, b(e)), Reader.log("do search", {
                    searchText: e
                })) : void 0
            }, p = function() {
                return z.val(""), k(s("search.empty_state")), d.hide(), x = null
            }, b = function(e) {
                return function(t) {
                    var n, r, o;
                    return o = null != (n = null != t && null != (r = t.hits) ? r.hit : void 0) ? n : [], x = {
                        text: e,
                        results: o
                    }, E(o, e)
                }
            }, E = function(e, t) {
                var n, r, o;
                if (R.html(""), 0 === e.length) k(s("search.no_results", {
                    keywords: t
                }));
                else
                    for (n = 0, r = e.length; r > n; n++) o = e[n], R.append(_(o, t));
                return setTimeout(v)
            }, k = function(t, n) {
                var o;
                return null == n && (n = !1), o = $(i(e("../../views/core/search_message.jst.eco"), {
                    message: t
                })), R.html(o), n ? R.find(".message").append($(r())) : void 0
            }, _ = function(t, n) {
                var r, o, u, s, c;
                return s = RegExp("(" + n + ")", "gi"), o = a(t.fields.contents, n, 150), o = o.replace(s, "<b>$1</b>"), u = Number(t.fields.page_number), c = {
                    pageNumber: u,
                    thumb: C.getThumbnailImageUrlForPage(u),
                    width: 80 * C.aspectRatio,
                    highlightedText: o
                }, r = $(i(e("../../views/core/search_result.jst.eco"), c)).data("pageNumber", u), l(r, function() {
                    return Reader.log("search result clicked", {
                        pageNumber: u
                    }), z.blur(), S(u)
                }), r
            }, v = function() {
                return null != j ? j.refresh() : void 0
            }, t
        }
    }, {
        "../../../src/bootstrap/spinner.coffee": 117,
        "../../views/core/search_message.jst.eco": 91,
        "../../views/core/search_result.jst.eco": 92,
        "../../views/core/search_view.jst.eco": 93,
        "../util/excerpt": 63,
        "../util/i18n.coffee": 68,
        "../util/on_click.coffee": 73,
        "../util/scrollable.coffee": 78,
        "../util/template.coffee": 79,
        "./store.coffee": 26,
        "./view.coffee": 28
    }],
    19: [function(e, t) {
        var n;
        n = e("../util/on_click.coffee"), t.exports = function(e, t) {
            var r, o, i;
            return r = e.router, i = function(n) {
                var i, u, a, l, s, c, f;
                return u = e.currentSerializableState(), s = encodeURIComponent(r.generateLink(u)), l = encodeURIComponent(document.title), (c = u.product) ? (f = c.photoUrls[0]) ? (a = encodeURIComponent(r.getAbsolute(f.thumb)), o(n, s, l, a)) : o(n, s, l, null) : (i = t.getThumbnailImageUrlForPage(1), a = encodeURIComponent(r.getAbsolute(i)), o(n, s, l, a))
            }, o = function(t, n, r, o) {
                switch (t) {
                    case "facebook":
                        e.goToUrl("https://www.facebook.com/sharer.php?t=" + r + "&u=" + n);
                        break;
                    case "twitter":
                        e.goToUrl("https://twitter.com/intent/tweet?text=" + r + "%20-%20" + n);
                        break;
                    case "email":
                        e.goToUrl("mailto:?subject=" + r + "&body=" + n);
                        break;
                    case "pintrest":
                        e.goToUrl("http://www.pinterest.com/pin/create/button/?" + ("url=" + n + "&description=" + r + "&") + (null != o ? "media=" + o : ""))
                }
                return Reader.log("share", {
                    state: e.currentSerializableState(),
                    target: t
                })
            }, n(e.domEl(), "[data-href^='/share/']", function(e) {
                var t;
                return t = $(e.element).data("href"), i(t.replace("/share/", ""))
            })
        }
    }, {
        "../util/on_click.coffee": 73
    }],
    20: [function(e, t) {
        var n, r;
        r = e("../util/i18n.coffee"), n = e("../../../src/util/color_math.coffee"), t.exports = function(e, t, o) {
            var i, u, a;
            return u = {}, i = "shopping_cart", a = function() {
                var a, l, s;
                return t = null != t ? t : r("shopping_cart.label"), o.addItem(i, e, {
                    title: t
                }), Reader.ctaColor && (s = n.rgb(Reader.ctaColor), a = n.contrast(s, [255, 255, 255]), l = n.contrast(s, [104, 101, 101]), l > a && o.addClass(i, "dark")), u
            }, u.cartContentChanged = function(e) {
                var t, n;
                if (e && null != e.numItems) return n = Number(e.numItems), t = n > 0 ? "full" : "empty", n >= 10 && (n = "9+"), Reader.Env.mobile || o.raise(1e3), o.removeClass(i, "full"), o.removeClass(i, "empty"), o.addClass(i, t), o.setData(i, {
                    "num-items": n
                })
            }, a()
        }
    }, {
        "../../../src/util/color_math.coffee": 120,
        "../util/i18n.coffee": 68
    }],
    21: [function(e, t) {
        var n, r, o, i, u, a, l;
        i = e("../util/template.coffee"), n = e("../util/css.coffee"), r = e("./slide_render_engine.coffee"), u = e("./view.coffee"), l = e("../util/grab_cursor.coffee"), o = e("../../../src/bootstrap/spinner.coffee"), a = e("../util/boundingScale.coffee"), t.exports = function(t, s) {
            var c, f, d, p, h, g, v, m, y, b, w, x, S, T, C, k, _, E, R, j, z, N, A, I, P, D, M;
            return c = {}, s = $.extend({
                zoomable: !0,
                sizing: "fit-height"
            }, null != s ? s : {}), b = null, p = null, T = null, x = null, w = null, P = D = 0, M = 1, k = 1, v = 0, h = 0, C = _ = {}, d = {
                left: 0,
                width: 1,
                top: 0,
                height: 1
            }, z = null, j = {}, A = null, S = function() {
                return b = $(i(e("../../views/core/slide.jst.eco"))), p = b.find(".content"), T = b.find(".loader"), p.css(n({
                    "transform-origin": "0 0"
                })), c.index = null, c.domEl = b, c.contentEl = p, c
            }, c.init = function(e) {
                return c.id = e, z = r(c, t), N(), u(b, {
                    resize: N
                })
            }, c.x = function() {
                return P
            }, c.y = function() {
                return D
            }, c.zoomScale = function() {
                return M
            }, c.moveTo = function(e, t) {
                return P = e, D = t
            }, c.moveBy = function(e, t) {
                return P += e, D += t
            }, c.snapToBounds = function() {
                return P = Math.min(Math.max(P, _.x), C.x), D = Math.min(Math.max(D, _.y), C.y)
            }, c.zoomWithCenter = function(e, t) {
                var n;
                if (s.zoomable) return n = t / M, P = (P - e.x) * n + e.x, D = (D - e.y) * n + e.y, c.setZoomScale(t)
            }, c.setZoomScale = function(e) {
                return isNaN(e) || M === e ? void 0 : (M = e, _ = I(), C = f())
            }, c.absoluteWidth = function() {
                return v * M
            }, c.absoluteHeight = function() {
                return h * M
            }, c.absoluteX = function() {
                return P * x
            }, c.absoluteY = function() {
                return D * w
            }, c.maxX = function() {
                return C.x
            }, c.maxY = function() {
                return C.y
            }, c.minX = function() {
                return _.x
            }, c.minY = function() {
                return _.y
            }, c.defaultScale = y = function(e) {
                var n;
                return null == e && (e = null), null != x ? (n = {
                    width: x,
                    height: w
                }, null != t.defaultScale ? t.defaultScale(c, s.sizing) : c.defaultScaleForRect(n, e)) : void 0
            }, c.tapScale = function() {
                return k
            }, c.maxScale = function() {
                return k
            }, c.minScale = function() {
                return c.defaultScaleForRect({
                    width: x,
                    height: w
                }, "fit-content")
            }, c.setBounds = function(e) {
                return d.top = e.top / w, d.left = e.left / x, d.width = e.width / x, d.height = e.height / w, C = f(), _ = I()
            }, c.defaultScaleForRect = function(e, t) {
                return null == t && (t = null), null != h ? (null == t && (t = s.sizing), a({
                    width: v,
                    height: h
                }, e, t)) : void 0
            }, c.isFirst = function() {
                return 0 === c.index
            }, c.isLast = function() {
                return c.index === t.numSlides - 1
            }, c.isFirstOrLast = function() {
                return c.isFirst() || c.isLast()
            }, c.isZoomedIn = function() {
                return M - y() > .05
            }, c.isZoomedOut = function() {
                return M - y() < -.005
            }, c.dragStart = function() {
                return Reader.Env.hasMouse && c.isZoomedIn() ? p.css({
                    cursor: l
                }) : void 0
            }, c.dragEnd = function() {
                return Reader.Env.hasMouse ? p.css({
                    cursor: ""
                }) : void 0
            }, c.loadContent = function(e, n) {
                return c.loadedIndex === e ? "function" == typeof n ? n() : void 0 : (c.unloadContent(), c.index = e, t.loadSlideContent(c, e, function(r) {
                    var o;
                    if (e === c.index) return o = [r.width, r.height], v = o[0], h = o[1], k = ("function" == typeof t.maxScale ? t.maxScale(c) : void 0) || 1, c.loadedIndex = e, "function" == typeof n ? n() : void 0
                }))
            }, c.unloadContent = function() {
                var e;
                return t.unloadSlideContent(c), e = [null, null], v = e[0], h = e[1], c.loadedIndex = null
            }, c.renderContent = function() {
                return t.renderContent(c)
            }, c.activate = function() {
                return c.current ? void 0 : (b.addClass("current"), c.current = !0, z.start(), "function" == typeof t.activateSlide ? t.activateSlide(c) : void 0)
            }, c.deactivate = function() {
                return c.current ? (b.removeClass("current"), c.current = !1, "function" == typeof t.deactivateSlide ? t.deactivateSlide(c) : void 0) : void 0
            }, c.willBecomeInactive = function() {
                return z.stop()
            }, c.reset = function(e, t) {
                return M = null, d = {
                    left: 0,
                    width: 1,
                    top: 0,
                    height: 1
                }, c.setZoomScale(null != t ? t : y()), P = function() {
                    switch (e) {
                        case "right":
                            return _.x;
                        default:
                            return C.x
                    }
                }(), D = m()
            }, c.startInteraction = function() {
                return z.startInteraction()
            }, c.commitInteraction = function(e) {
                return z.commitInteraction(e)
            }, c.stopAnimations = function() {
                return z.stopAnimations()
            }, c.redraw = function(e, t, n) {
                return z.render(e, t, n)
            }, c.resetAndRedraw = function(e, t) {
                return c.reset(), c.redraw(e, null, t)
            }, c.record = function() {
                return j = {
                    x: P,
                    y: D,
                    s: M
                }
            }, c.atXBorder = function() {
                return P === _.x || P === C.x
            }, c.atYBorder = function() {
                return D === _.y || D === C.y
            }, c.borderDistance = function(e) {
                return null == e && (e = {
                    x: P,
                    y: D
                }), {
                    left: e.x > C.x ? e.x - C.x : 0,
                    right: e.x < _.x ? e.x - _.x : 0,
                    top: e.y > C.y ? e.y - C.y : 0,
                    bottom: e.y < _.y ? e.y - _.y : 0
                }
            }, c.size = function() {
                return {
                    height: w,
                    width: x
                }
            }, c.viewPort = function() {
                return {
                    left: -((P - d.left) * x),
                    top: -((D - d.top) * w),
                    width: x * d.width,
                    height: w * d.height
                }
            }, c.normalizedBounds = function() {
                return d
            }, c.zoomable = function(e) {
                return null == e ? s.zoomable : s.zoomable = e
            }, c.sizing = function() {
                return s.sizing
            }, c.setSizing = function(e) {
                return s.sizing = e
            }, c.contentSize = function() {
                return {
                    width: v,
                    height: h
                }
            }, c.getCurrentPosition = function() {
                var e, t;
                return t = p.css("transform"), e = t.replace(/[^0-9-.,]/g, "").split(","), 6 === e.length ? {
                    x: Number(e[4]),
                    y: Number(e[5])
                } : {
                    x: Number(e[12]),
                    y: Number(e[13])
                }
            }, c.redrawDynamicContent = function() {
                return null != c.index ? t.redrawDynamicContent(c) : void 0
            }, c.hideLoader = function() {
                return null != A ? (T[0].removeChild(A), A = null) : void 0
            }, c.showLoader = function() {
                return null == A ? (A = o(), T[0].appendChild(A)) : void 0
            }, N = function(e, n) {
                var r;
                return r = [b.height(), b.width()], w = r[0], x = r[1], null != c.index && t.resize(c, {
                    width: x,
                    height: w
                }), "function" == typeof n ? n() : void 0
            }, R = function() {
                return v / x
            }, E = function() {
                return h / w
            }, m = function() {
                return g().centered.y
            }, g = function() {
                var e, t;
                return t = R() * M, e = E() * M, {
                    topLeftCorner: {
                        x: d.left,
                        y: d.top
                    },
                    centered: {
                        x: d.left + (d.width - t) / 2,
                        y: d.top + (d.height - e) / 2
                    },
                    bottomRightCorner: {
                        x: d.left + (d.width - t),
                        y: d.top + (d.height - e)
                    }
                }
            }, I = function() {
                var e, n, r;
                return r = g(), e = "function" == typeof t.contentAlignment ? t.contentAlignment(c) : void 0, n = "right" === e ? r.bottomRightCorner.x : "left" === e ? Math.min(r.topLeftCorner.x, r.bottomRightCorner.x) : Math.min(r.centered.x, r.bottomRightCorner.x), {
                    x: n,
                    y: Math.min(r.centered.y, r.bottomRightCorner.y)
                }
            }, f = function() {
                var e, n, r;
                return r = g(), e = "function" == typeof t.contentAlignment ? t.contentAlignment(c) : void 0, n = "right" === e ? Math.max(r.topLeftCorner.x, r.bottomRightCorner.x) : "left" === e ? r.topLeftCorner.x : Math.max(r.topLeftCorner.x, r.centered.x), {
                    x: n,
                    y: Math.max(r.topLeftCorner.y, r.centered.y)
                }
            }, S()
        }
    }, {
        "../../../src/bootstrap/spinner.coffee": 117,
        "../../views/core/slide.jst.eco": 95,
        "../util/boundingScale.coffee": 54,
        "../util/css.coffee": 58,
        "../util/grab_cursor.coffee": 66,
        "../util/template.coffee": 79,
        "./slide_render_engine.coffee": 23,
        "./view.coffee": 28
    }],
    22: [function(e, t) {
        var n;
        n = e("../util/blank_image.coffee"), t.exports = function(e) {
            var t, r, o, i, u, a;
            return t = {}, a = {}, i = e.sortedImageSizes().reverse(), o = function(e) {
                var t;
                return null != (t = a[e.id]) ? t : {}
            }, u = function(e, t, n) {
                var r, i;
                return r = o(e), null == r[t] ? (null == a[i = e.id] && (a[i] = {}), a[e.id][t] = n) : void 0
            }, r = function(e) {
                var t, r, o, i, u, l;
                l = a[e.id];
                for (t in l)
                    for (o = l[t], i = 0, u = o.length; u > i; i++) r = o[i], r.onload = null, r.src = n;
                return a[e.id] = {}
            }, t.getImages = function(e) {
                return o(e)[e.resolution]
            }, t.getImagesWithFallback = function(e) {
                var n, r, u;
                if (u = t.getImages(e), null != u ? u.loaded : void 0) return u;
                for (n = o(e), r = i.indexOf(e.resolution) + 1; r < i.length && r > 0 && (u = n[i[r]], null != u ? !u.loaded : !0);) r++;
                return (null != u ? u.loaded : void 0) ? u : []
            }, t.loadImages = function(t, n, r) {
                var i, a, l, s, c, f, d, p, h, g;
                if (i = o(t), null != i[n]) return void(i[n].loaded && "function" == typeof r && r());
                for (g = e.getSpreadImageUrls(t.index, n), s = [], d = 0, s.resolution = n, i[n] = s, l = function() {
                        return d++, d === g.length ? (u(t, n, s), s.loaded = !0, "function" == typeof r ? r() : void 0) : void 0
                    }, p = [], c = 0, f = g.length; f > c; c++) h = g[c], a = new Image, a.onload = l, s.push(a), p.push(a.src = h);
                return p
            }, t.clearBuffer = r, t
        }
    }, {
        "../util/blank_image.coffee": 52
    }],
    23: [function(e, t) {
        var n, r, o;
        r = e("../util/momentum_engine.coffee"), o = e("../util/next_frame.coffee"), n = e("../util/animate.coffee"), t.exports = function(e, t) {
            var i, u, a;
            return i = {}, a = {}, u = function() {
                var e;
                return e = i.css, e.init(), e
            }, i.css = function() {
                var i, u, l, s, c, f, d, p;
                return s = {}, f = null, u = [], s.init = function() {
                    return f = r()
                }, s.start = function() {}, s.stop = function() {}, s.render = function(n, r, o) {
                    var u, l;
                    return null == n && (n = 0), l = d(e), c(l, a) ? "function" == typeof o ? o() : void 0 : (u = a.scale !== l.scale, u && ("function" == typeof t.contentWillScale && t.contentWillScale(e, l.scale, n), Reader.Env.hasMouse && p(e, l.scale)), i(e.contentEl, l, n, r, function() {
                        return u && "function" == typeof t.contentDidScale && t.contentDidScale(e, l.scale), "function" == typeof o ? o() : void 0
                    }), a = l)
                }, s.stopAnimations = function() {
                    return u = []
                }, s.startInteraction = function() {
                    return f.cancel()
                }, s.commitInteraction = function(e) {
                    return null != e.releaseVelocity ? l(e.releaseVelocity, e.callback) : s.render(e.duration, e.timingFunction, e.callback)
                }, d = function(e) {
                    return {
                        x: e.absoluteX(),
                        y: e.absoluteY(),
                        scale: e.zoomScale()
                    }
                }, c = function(e, t) {
                    return e.x === t.x && e.y === t.y && e.scale === t.scale
                }, l = function(t, n) {
                    var r;
                    return u = f.getAnimationSteps(t, e), (r = function(t) {
                        var o, i, a;
                        return null != u[t] ? (e.moveBy(u[t].delta.x, u[t].delta.y), i = u[t], o = i.duration, a = i.timingFunction, s.render(o, a, function() {
                            return r(t + 1)
                        })) : null != n && 0 !== u.length ? ("function" == typeof n && n(), s.render(100)) : void 0
                    })(0)
                }, p = function(e, t) {
                    return t > e.defaultScale() ? (e.contentEl.removeClass("zoomable-in"), e.contentEl.addClass("zoomable-out")) : (e.contentEl.removeClass("zoomable-out"), e.contentEl.addClass("zoomable-in"))
                }, i = function(e, t, r, i, u) {
                    var l, s;
                    return null == r && (r = 0), l = {
                        translate: Math.round(t.x) + "px, " + Math.round(t.y) + "px"
                    }, i && (l["transition-timing-function"] = i), s = t.scale, null == s || isNaN(s) || a.scale === s || (l.scale = s), o(function() {
                        return n(e, l, r, u)
                    })
                }, s
            }(), u()
        }
    }, {
        "../util/animate.coffee": 49,
        "../util/momentum_engine.coffee": 69,
        "../util/next_frame.coffee": 70
    }],
    24: [function(e, t) {
        var n, r, o, i, u, a, l, s;
        a = e("../util/template.coffee"), i = e("./interaction_handler.coffee"), l = e("./view.coffee"), o = e("./gesture_handler.coffee"), s = e("../util/next_frame.coffee"), u = e("./slide.coffee"), n = e("../util/animate.coffee"), r = e("../util/css.coffee"), t.exports = function(t, c, f) {
            var d, p, h, g, v, m, y, b, w, x, S, T, C, k, _, E, R, j, z, N, A, I, P, D, M;
            return g = {}, c = $(c), f = $.extend({
                zoomable: !0,
                retainScale: !0,
                easyFlick: !0,
                sizing: "fit-height",
                slideDuration: 300,
                slideBorderWidth: .13,
                numSlides: 3,
                log: !0
            }, null != f ? f : {}), P = [], k = null, y = null, m = null, b = !1, C = null, w = null, D = {
                numTouches: 0
            }, M = null, S = function() {
                var n, r, o, u, s;
                for (c.html(a(e("../../views/core/slider.jst.eco"))), k = {
                        el: c.children(".panel"),
                        width: 0,
                        height: 0
                    }, C = i(c, function(e) {
                        return x(e)
                    }), s = l(c, {
                        resize: function(e, t) {
                            return g.resizeAndRedraw(e, t)
                        }
                    }), null == t.requestSlideChange && (t.requestSlideChange = g.jumpTo), T(), N(), o = [], n = 0, r = P.length; r > n; n++) u = P[n], o.push(E(u, -1));
                return o
            }, g.jumpTo = function(e, n, r, i) {
                var u, a, l;
                return null == i && (i = null), e = Number(e), u = I(e), null != u ? e === m ? "function" == typeof i ? i() : void 0 : (l = y, a = m, y = u, m = e, null == n && (n = f.slideDuration), Math.abs(m - a) > 1 && (n = 0), null == r && (r = a > m ? "right" : "left"), null != l && l.willBecomeInactive(), b || (w = o(u, f)), "function" == typeof t.beforeSlideChange && t.beforeSlideChange(l, e, u), s(function() {
                    return y === u ? (E(u, e), u.loadContent(e, function() {
                        return null != M && (M = Math.min(M, u.defaultScale())), u.reset(r, M), u.redraw(0, null, function() {
                            return u.renderContent()
                        })
                    }), s(function() {
                        return h(e, n, function() {
                            return y === u ? d(u, l, i) : void 0
                        })
                    })) : void 0
                })) : void 0
            }, g.resizeAndRedraw = function(e, t) {
                var n, r, o, i, u;
                if (u = N(t)) {
                    for (R(m), h(m), null != y && y.resetAndRedraw(e), o = [], n = 0, r = P.length; r > n; n++) i = P[n], i.index !== m && o.push(i.resetAndRedraw(0));
                    return o
                }
            }, g.customZoom = function(e) {
                return e(y)
            }, g.zoomable = function(e) {
                var t, n, r, o;
                for (f.zoomable = e, r = [], t = 0, n = P.length; n > t; t++) o = P[t], r.push(o.zoomable(e));
                return r
            }, g.setSizing = function(e) {
                var t, n, r, o;
                for (f.sizing = e, r = [], t = 0, n = P.length; n > t; t++) o = P[t], r.push(o.setSizing(e));
                return r
            }, g.currentIndex = function() {
                return m
            }, g.currentSlide = function() {
                return y
            }, g.domEl = c, g.reset = j = function() {
                return N(), m = null, y = null, "function" == typeof t.reset ? t.reset() : void 0
            }, g.disable = function() {
                return b = !0, w = null
            }, g.enable = function() {
                return b = !1, null != w ? w : w = o(y, f)
            }, g.destroy = function() {
                var e, t, n;
                for (e = 0, t = P.length; t > e; e++) n = P[e], n.unloadContent();
                return w = null
            }, g.redrawDynamicContent = function() {
                var e, t, n, r;
                for (n = [], e = 0, t = P.length; t > e; e++) r = P[e], n.push(r.redrawDynamicContent());
                return n
            }, T = function() {
                var e, n, r, o;
                return n = Math.min(null != (r = t.numSlides) ? r : 0, f.numSlides), P = function() {
                    var r, i, a;
                    for (a = [], e = r = 0, i = n; i >= 0 ? i > r : r > i; e = i >= 0 ? ++r : --r) o = u(t, {
                        zoomable: f.zoomable,
                        sizing: f.sizing
                    }), k.el.append(o.domEl), o.init(e), t.init(o), a.push(o);
                    return a
                }()
            }, x = function(e) {
                var t, n, r, o;
                if (null != w) return D = e, t = w(e), f.retainScale && (o = y.zoomScale() !== M, M = y.zoomScale(), o && M > y.minScale() && s(function() {
                    return z(m)
                })), null != t ? (Math.abs(t.distance) > f.slideBorderWidth && (t.distance > 0 && null != (n = I(m + 1)) && n.redraw(), t.distance < 0 && null != (r = I(m - 1)) && r.redraw()), s(function() {
                    return p(t)
                })) : void 0
            }, p = function(e) {
                return null != e.jumpTo ? (f.retainScale || (M = null), t.requestSlideChange(e.jumpTo)) : h(m - e.distance, e.duration)
            }, d = function(e, t, n) {
                var r, o, i, u, a, l, c;
                for (o = 0, u = P.length; u > o; o++) c = P[o], c.deactivate();
                for (e.activate(), l = v(m), i = 0, a = l.length; a > i; i++) r = l[i], r !== m && ! function() {
                    return c = I(r), c.loadContent(r, function() {
                        return c.renderContent()
                    })
                }();
                return s(function() {
                    return R(m), z(m)
                }), "function" == typeof n ? n(e) : void 0
            }, z = function(e) {
                var t, n, r;
                return n = Math.floor(P.length / 2), r = I(e - n), null != r && r !== y && (r.reset("right", M), r.redraw()), t = I(e + n), null != t && t !== y ? (t.reset("left", M), t.redraw()) : void 0
            }, h = function(e, t, r) {
                var o;
                return null == t && (t = 0), null == r && (r = null), o = _(e), n(k.el, {
                    translate: Math.round(-o) + "px, 0"
                }, t, r)
            }, N = function(e) {
                var t, n, r, o, i, u;
                return i = [k.width, k.height], o = i[0], r = i[1], u = [c.width(), c.height()], n = u[0], t = u[1], "function" == typeof e && e(), C.refresh(), r === t && o === n ? !1 : (k.width = n, k.height = t, !0)
            }, I = function(e) {
                var n;
                if (!(0 > e || e >= t.numSlides)) return n = e % P.length, P[n]
            }, R = function(e) {
                var t, n, r, o, i;
                for (o = v(e), i = [], n = 0, r = o.length; r > n; n++) t = o[n], i.push(E(I(t), t));
                return i
            }, E = function(e, t) {
                var n;
                return n = Math.round(_(t)), e.domEl.data("offset") !== n ? (A(e, n), e.domEl.data("offset", n)) : void 0
            }, A = function(e, t) {
                return e.domEl.css(r({
                    transform: "translate(" + t + "px, 0)"
                }))
            }, Reader.Env.desktop && (A = function(e, t) {
                return e.domEl.css({
                    left: t
                })
            }), _ = function(e) {
                return e * k.width * (1 + f.slideBorderWidth)
            }, v = function(e) {
                var n, r, o;
                return o = Math.max(0, e - Math.floor(P.length / 2)), n = Math.min(o + P.length, t.numSlides), o = Math.max(0, n - P.length),
                    function() {
                        r = [];
                        for (var e = o; n >= o ? n > e : e > n; n >= o ? e++ : e--) r.push(e);
                        return r
                    }.apply(this)
            }, S(), g
        }
    }, {
        "../../views/core/slider.jst.eco": 96,
        "../util/animate.coffee": 49,
        "../util/css.coffee": 58,
        "../util/next_frame.coffee": 70,
        "../util/template.coffee": 79,
        "./gesture_handler.coffee": 7,
        "./interaction_handler.coffee": 11,
        "./slide.coffee": 21,
        "./view.coffee": 28
    }],
    25: [function(e, t) {
        var n, r, o;
        o = e("../util/template.coffee"), n = e("../desktop/content_loader.coffee"), r = e("./slider.coffee"), t.exports = function(t, i, u) {
            var a, l, s, c, f, d, p;
            return a = {}, t.html(o(e("../../views/core/slider_view.jst.eco"))), l = n(i, u), p = r(l, t.find("#slider"), {
                sizing: "fit-content",
                retainScale: !1,
                slideDuration: 300,
                lowResMovement: !0,
                tapZoom: !1,
                slideBorderWidth: 0,
                zoomable: !1
            }), p.disable(), c = !1, f = $("<div>"), d = i.sortedImageSizes(), s = window.devicePixelRatio || 1, a.currentIndex = p.currentIndex, a.jumpToSpread = function(e, t) {
                return null == t && (t = {}), p.jumpTo(e, t.duration, t.alignment, t.callback)
            }, a.currentPages = function() {
                return i.indexToPages(p.currentIndex())
            }, a.setPublication = function(e) {
                return i = e
            }, a.currentSlide = function() {
                return p.currentSlide()
            }, a.numSlides = function() {
                return i.length
            }, a.toggleHotspots = function(e) {
                return l.toggleHotspots(e)
            }, a.enlargeTo = function(e, t, n, r) {
                return null == n && (n = 300), null == r && (r = null), c ? void 0 : (c = !0, f.triggerHandler("zoom"), p.customZoom(function(o) {
                    var u, a, l, c, f, h, g;
                    return f = d[d.indexOf(o.resolution) + 2], null == f && (f = d[d.length - 1]), a = i.imageSizes[f], c = p.domEl.offset(), l = a.height / s / o.contentSize().height, l <= o.zoomScale() && (l = 1.4 * o.zoomScale()), o.resolution = f, null != t ? (h = (t.x - c.left) / o.size().width, g = (t.y - c.top) / o.size().height) : h = g = .5, o.zoomable(!0), o.setBounds({
                        width: e.width,
                        height: e.height,
                        left: -c.left + e.left,
                        top: -c.top + e.top
                    }), o.zoomWithCenter({
                        x: h,
                        y: g
                    }, l), u = i.isFrontCover(o.index) || i.isBackCover(o.index), u && o.moveTo(o.minX(), o.y()), o.dragEnd(), o.zoomable(!1), o.redraw(n, null, r)
                }))
            }, a.resetToNormalSize = function(e, t) {
                return p.customZoom(function(n) {
                    return n.resolution = n.baseResolution, n.dragEnd(), n.resetAndRedraw(e, function() {
                        return c = !1, f.triggerHandler("zoom"), "function" == typeof t ? t() : void 0
                    })
                })
            }, a.isEnlarged = function() {
                return c
            }, a.on = function() {
                return f.on.apply(f, arguments)
            }, a.off = function() {
                return f.off.apply(f, arguments)
            }, a.enable = function() {
                return p.enable()
            }, a.disable = function() {
                return p.disable()
            }, a.redrawDynamicContent = function() {
                return p.redrawDynamicContent()
            }, a
        }
    }, {
        "../../views/core/slider_view.jst.eco": 97,
        "../desktop/content_loader.coffee": 30,
        "../util/template.coffee": 79,
        "./slider.coffee": 24
    }],
    26: [function(e, t) {
        t.exports = {
            getJSON: function(e, t) {
                return $.ajax({
                    url: e,
                    dataType: "json",
                    success: function(e) {
                        return t(e)
                    },
                    error: function() {
                        return t()
                    }
                })
            },
            search: function(e, t, n) {
                var r, o, i, u, a, l;
                for (i = [], u = t.split(" "), r = 0, o = u.length; o > r; r++) l = u[r], i.push("*" + l + "*"), i.push(l);
                return a = {
                    q: i.join("|"),
                    sort: "_score desc",
                    return: "contents,_score,page_number"
                }, $.get(e, a, n, "json")
            }
        }
    }, {}],
    27: [function(e, t) {
        var n, r, o, i;
        o = e("../core/youtube_player.coffee"), n = e("../util/template.coffee"), i = e("../../views/core/video_view.jst.eco"), t.exports = r = function(e) {
            var t;
            return t = $(n(i)), t.append(o(e)), t
        }
    }, {
        "../../views/core/video_view.jst.eco": 100,
        "../core/youtube_player.coffee": 29,
        "../util/template.coffee": 79
    }],
    28: [function(e, t) {
        var n, r, o;
        o = 0, r = {}, t.exports = n = function(e, t) {
            var i, u, a, l, s, c;
            return e = $(e), i = {}, c = e.data("view-id"), e.length > 0 ? null != r[c] ? r[c] : (c = o++, null == t && (t = {}), e.addClass("reader-view"), e.data("view-id", c), r[c] = i, a = function(e, t) {
                var r, o, i, u;
                for (null == t && (t = []), u = $(e).children(), o = 0, i = u.length; i > o; o++) r = u[o], $(r).hasClass("reader-view") ? t.push(n(r)) : a(r, t);
                return t
            }, i.domEl = e[0], i.subviews = l = function() {
                return a(e)
            }, i.superview = s = function() {
                return n(e.parents(".reader-view"))
            }, i.resize = function(e) {
                var n;
                return n = function() {
                    var t, r, o, i;
                    for (o = l(), t = 0, r = o.length; r > t; t++) i = o[t], i.resize(e);
                    return n.called = !0
                }, null == t.resize ? n() : (t.resize(e, n), n.called ? void 0 : n())
            }, i.destroy = u = function() {
                var n, o, u;
                n = function() {
                    var e, t, r, o;
                    for (r = l(), e = 0, t = r.length; t > e; e++) o = r[e], o.destroy();
                    return n.called = !0
                }, null != t.destroy ? (t.destroy(n), n.called || n()) : n(), e.data("view-id", null), delete r[c], u = [];
                for (o in i) u.push("function" == typeof i[o] ? i[o] = function() {} : i[o] = null);
                return u
            }, i.activate = function() {
                return t.activate ? t.activate.apply(t, arguments) : void 0
            }, i.deactivate = function() {
                return t.deactivate ? t.deactivate.apply(t, arguments) : void 0
            }, i) : void 0
        }
    }, {}],
    29: [function(e, t) {
        var n, r;
        n = e("../util/template.coffee"), r = e("../../views/core/youtube_player.jst.eco"), t.exports = function(e, t) {
            var o;
            return null == t && (t = {}), t = $.extend({
                color: "white",
                rel: 0,
                origin: window.location.protocol + "//" + window.location.hostname
            }, null != t ? t : {}), o = function() {
                var e, n, r;
                n = "";
                for (e in t) r = t[e], n += "&" + e + "=" + r;
                return n[0] = "?", n
            }, $(n(r, {
                youtubeId: e,
                options: o()
            }))
        }
    }, {
        "../../views/core/youtube_player.jst.eco": 101,
        "../util/template.coffee": 79
    }],
    30: [function(e, t) {
        var n, r, o, i, u, a, l;
        i = e("../core/slide_image_buffer.coffee"), o = e("../core/image_size_picker.coffee"), u = e("../util/template.coffee"), r = e("./hotspots_layer.coffee"), l = e("../util/next_frame.coffee"), a = e("../util/blank_image.coffee"), n = e("../util/animate.coffee"), t.exports = function(t, s) {
            var c, f, d, p, h, g, v, m, y, b, w, x, S, T, C, k, _, E, R;

            return c = {}, R = {}, w = {}, E = t.imageSizes, m = i(t, E), x = o(t), h = window.devicePixelRatio || 1, f = Reader.Env.vendor + "BackingStorePixelRatio", g = E.at1200, c.init = function(n) {
                var o, i, a;
                return n.contentEl.html(u(e("../../views/desktop/spread.jst.eco")).replace(/\s+</g, "<")), i = n.contentEl.find(".hotspots.layer"), o = r(i, n, t, s), a = n.contentEl.find(".spread"), R[n.id] = {
                    hotspotsLayer: o,
                    pages: a.find("img").toArray() || []
                }
            }, c.loadSlideContent = function(e, n, r) {
                var o;
                return e.baseResolution = d(e), e.resolution = e.baseResolution, "function" == typeof r && r(p(n, e.baseResolution)), e.showLoader(), o = t.getSpreadText(n), R[e.id].pages.forEach(function(e, t) {
                    return null != o[t] ? e.alt = o[t] : void 0
                }), m.loadImages(e, "at200", function() {
                    return l(function() {
                        return e.index === n ? S(e) : void 0
                    })
                }), m.loadImages(e, e.resolution, function() {
                    return l(function() {
                        return e.index === n ? S(e) : void 0
                    })
                }), v(e).loadHotspots(n)
            }, c.unloadSlideContent = function(e) {
                return R[e.id].pages.forEach(function(e) {
                    return e.src = a, e.alt = ""
                }), m.clearBuffer(e), e.contentEl.find(".dynamic-hotspots").html(""), v(e).unloadHotspots(e.index), e.baseResolution = null, e.resolution = null, e.rendered = null
            }, c.renderContent = function(e) {
                var t;
                return t = {
                    width: e.absoluteWidth(),
                    height: e.absoluteHeight()
                }, _(e, t), v(e).resize(t), T(e, e.index), S(e)
            }, c.contentWillScale = function(e, t) {
                var r, o, i, u;
                return u = e.contentSize(), e.rendered = null, o = e.getCurrentPosition(), r = {
                    translate: o.x + "px, " + o.y + "px",
                    scale: e.realScale
                }, i = e.absoluteHeight() / g.height, e.contentEl.find(".dynamic-hotspots").css({
                    transform: "scale(" + i / t + ")"
                }), v(e).isActive() && v(e).hide(), n(e.contentEl, r, 0), _(e, u)
            }, c.contentDidScale = function(e, t) {
                var r, o;
                return e.realScale = t, o = {
                    width: e.absoluteWidth(),
                    height: e.absoluteHeight()
                }, m.loadImages(e, e.resolution, function() {
                    return e.current ? l(function() {
                        return S(e)
                    }) : void 0
                }), t = e.absoluteHeight() / g.height, e.contentEl.find(".dynamic-hotspots").css({
                    transform: "scale(" + t + ")"
                }), n(e.contentEl, {
                    scale: 1
                }, 0), _(e, o), r = v(e), r.resize(o), r.isActive() ? r.show() : void 0
            }, c.redrawDynamicContent = function(e) {
                return e.contentEl.find(".dynamic-hotspots").html(""), T(e, e.index)
            }, p = function(e, t) {
                var n;
                return n = E[t], {
                    width: n.width * y(e) / h,
                    height: n.height / h
                }
            }, c.resize = function(e) {
                return e.baseResolution = d(e), e.resolution = e.baseResolution, m.loadImages(e, e.resolution, function() {
                    return l(function() {
                        return S(e)
                    })
                })
            }, c.contentAlignment = function(e) {
                switch (!1) {
                    case !t.isFrontCover(e.index):
                        return "right";
                    case !t.isBackCover(e.index):
                        return "left";
                    default:
                        return "free"
                }
            }, c.activateSlide = function(e) {
                return v(e).activate(e.index), "function" == typeof s.slideChanged && s.slideChanged(e, e.index), l(function() {
                    return S(e)
                })
            }, c.deactivateSlide = function(e) {
                return v(e).deactivate()
            }, c.beforeSlideChange = function(e) {
                return null != e ? c.deactivateSlide(e) : void 0
            }, c.preload = function() {}, c.numSlides = t.length, c.toggleHotspots = function(e) {
                var t, n, r, o;
                r = [];
                for (t in R) o = R[t], n = o.hotspotsLayer, r.push(e ? n.enable() : n.disable());
                return r
            }, S = function(e) {
                var t;
                if (e.rendered !== e.resolution && (t = m.getImagesWithFallback(e)).loaded) return k(e, t), e.hideLoader(), e.rendered = t.resolution
            }, T = function(e, n) {
                var r;
                return r = e.contentEl.find(".dynamic-hotspots"), r.css({
                    width: g.width * t.numPagesFor(n),
                    height: g.height,
                    transformOrigin: "0 0"
                }), t.getHotspots(e.index).forEach(function(t) {
                    return t.betaDynamic && "product" === t.type && n === e.index ? C(t, function(t) {
                        return l(function() {
                            return n === e.index ? r.append(t) : void 0
                        })
                    }) : void 0
                })
            }, C = function(t, n) {
                var r;
                return r = t.getProducts(function(r) {
                    var o;
                    return o = $(u(e("../../views/core/dynamic_product.jst.eco"), r[0])), o.css({
                        top: 100 * t.position.top + "%",
                        left: 100 * t.position.left + "%",
                        width: 100 * t.position.width + "%",
                        height: 100 * t.position.height + "%"
                    }), n(o)
                })
            }, k = function(e, t) {
                return R[e.id].pages.forEach(function(e, n) {
                    return null != t[n] ? e.src = t[n].src : void 0
                })
            }, _ = function(e, t) {
                var n, r;
                return r = {
                    width: Math.round(t.width / y(e.index)),
                    height: Math.round(t.height)
                }, n = E[e.resolution], n && Math.abs(n.width - r.width) <= 2 && Math.abs(n.height - r.height) <= 2 && (r = n), e.contentEl.css({
                    width: y(e.index) * r.width,
                    height: r.height
                }), R[e.id].pages.forEach(function(e) {
                    return e.style.width = r.width + "px", e.style.height = r.height + "px"
                })
            }, b = function() {
                return t.isBooklet ? 2 : 1
            }, y = function(e) {
                var n;
                return n = E[Object.keys(E)[0]], t.getSpreadImageUrls(e, n).length
            }, v = function(e) {
                return R[e.id].hotspotsLayer
            }, d = function(e, t) {
                return null == t && (t = null), null == t && (t = {
                    width: Math.round(e.size().width / b()),
                    height: Math.round(e.size().height)
                }), x(t, e.sizing())
            }, c
        }
    }, {
        "../../views/core/dynamic_product.jst.eco": 81,
        "../../views/desktop/spread.jst.eco": 109,
        "../core/image_size_picker.coffee": 10,
        "../core/slide_image_buffer.coffee": 22,
        "../util/animate.coffee": 49,
        "../util/blank_image.coffee": 52,
        "../util/next_frame.coffee": 70,
        "../util/template.coffee": 79,
        "./hotspots_layer.coffee": 34
    }],
    31: [function(e, t) {
        var n, r, o, i, u, a, l;
        u = e("../util/template.coffee"), n = e("../core/flipper_view.coffee"), o = e("../core/slider_view.coffee"), r = e("./progress_indicator.coffee"), i = e("./stepperButtons.coffee"), a = e("../core/view.coffee"), l = e("./zoom_controls.coffee"), t.exports = function(t, s, c) {
            var f, d, p, h, g, v, m, y, b, w, x, S, T, C, k, _, E, R, j, z, N, A, I, P, D, M, H, F, L, q, B, O, U, W;
            return f = {}, t.html(u(e("../../views/desktop/content_view.jst.eco"), s)), z = t.find("#publication_content"), L = t.find("#underlay"), p = t.find("#chrome"), B = t.find("#publication_wrapper"), S = t.find("#left_cover_page"), M = t.find("#right_cover_page"), h = $([S[0], M[0]]), N = null, O = null, U = t.find("#zoom_controls"), W = Reader.Env.retardedBrowser ? 0 : 300, g = null, j = null, H = null, x = !1, F = !1, w = function() {
                var l, d, h;
                return d = Reader.Env.browserVersion, h = !("flip" !== s.transitionEffect || !s.isBooklet || Reader.Env.ie && 11 > d || Reader.Env.ie && 11 === d && Reader.Env.windows10 || Reader.Env.safari && 9 > d), l = h ? n : o, N = l(z, s, {
                    goToUrl: c.goToUrl,
                    toggleZoom: f.toggleZoom,
                    activateHotspot: c.activateHotspot
                }), j = r(t.find("#progress_indicator"), s, {
                    goToSpread: c.goToSpread
                }), H = i(p, b), H.update(void 0, c.linkToSpread(1)), s.enablePublitasBranding && (t.addClass("branded"), t.find("#publitas_branding").html(u(e("../../views/core/publitas_branding.jst.eco")))), a(t, {
                    resize: D
                }), f
            }, f.currentIndex = function() {
                return N.currentIndex()
            }, f.goToSpread = function(e, t) {
                return null == t && (t = {}), (null != N ? N.isEnlarged() : void 0) && P(0), q(e, t.duration + 100), null != j && j.update(e), "undefined" != typeof spreadOverview && null !== spreadOverview && spreadOverview.update(e), null != H && H.update(c.linkToSpread(e - 1), c.linkToSpread(e + 1)), N.jumpToSpread(e, t)
            }, f.goToPrevNextSpread = b = function(e) {
                return x ? void 0 : ("nextSlide" === e ? c.goToNextSpread() : "prevSlide" === e && c.goToPrevSpread(), x = !0, setTimeout(function() {
                    return x = !1
                }, 100))
            }, f.zoom = function(e, n) {
                var r, o, i, u;
                if (!F && !N.isEnlarged()) {
                    F = !0, o = {}, u = t[0].getBoundingClientRect();
                    for (r in u) i = u[r], o[r] = i;
                    return null == o.width && (o.width = o.bottom - o.top), null == o.height && (o.height = o.right - o.left), z.addClass("zoomed"), p.css("visibility", "hidden"), N.enlargeTo(o, n, e, function() {
                        return setTimeout(function() {
                            return I(N.currentSlide()), H.positionInFrame(o), p.css("visibility", ""), F = !1, N.enable()
                        }, 50)
                    })
                }
            }, f.resetZoom = P = function(e) {
                return !F && N.isEnlarged() ? (F = !0, null == e && (e = W), N.disable(), A(), p.css("visibility", "hidden"), N.resetToNormalSize(e, function() {
                    return F = !1, t.removeClass("zoomed"), z.removeClass("zoomed"), H.resetPosition(), p.css("visibility", "")
                })) : void 0
            }, f.toggleZoom = function(e) {
                return null != g ? g(e) : N.isEnlarged() ? (f.resetZoom(W), Reader.log("zoom", {
                    method: (null != e ? "click" : "menu") + " zoom out"
                })) : (f.zoom(W, e), Reader.log("zoom", {
                    method: (null != e ? "click" : "menu") + " zoom in"
                }))
            }, f.isZoomedIn = function() {
                return N.isEnlarged()
            }, f.setZoomAction = function(e) {
                return g = e
            }, f.toggleHotspots = function(e) {
                return N.toggleHotspots(e)
            }, f.on = function() {
                return N.on.apply(N, arguments)
            }, f.redrawDynamicContent = function() {
                return N.redrawDynamicContent()
            }, q = function(e, n, r) {
                var o;
                return null == n && (n = 0), o = "", s.isBackCover(e) && (o = "back-cover"), s.isFrontCover(e) && (o = "front-cover"), t.addClass(o), h.css({
                    opacity: 0,
                    transition: "" === o ? "" : "none"
                }), setTimeout(function() {
                    return e === N.currentIndex() ? ("front-cover" !== o && t.removeClass("front-cover"), "back-cover" !== o && t.removeClass("back-cover"), h.css({
                        opacity: ""
                    }), "function" == typeof r ? r() : void 0) : void 0
                }, n)
            }, m = function(e) {
                var t, n;
                return t = e.height, n = s.spreadAspectRatio * e.height, n = Math.min(n, e.width), n = 2 * Math.round(n / 2), B.css({
                    top: e.top + Math.round((e.height - t) / 2),
                    left: e.left + Math.round((e.width - n) / 2),
                    height: Math.round(t),
                    width: n
                })
            }, y = function(e) {
                var t, n;
                return n = 2 * Math.round(e.width / 2), t = n / s.spreadAspectRatio, t = Math.min(t, e.height), B.css({
                    top: e.top + Math.round((e.height - t) / 2),
                    left: e.left + Math.round((e.width - n) / 2),
                    height: Math.round(t),
                    width: n
                })
            }, R = function() {
                return Reader.Env.iframed ? 0 : 750
            }, E = function() {
                return Reader.Env.iframed ? 0 : 500
            }, C = function() {
                return window.innerHeight < 400 ? 36 : 44
            }, k = function() {
                return window.innerHeight < 400 ? 36 : 44
            }, _ = function() {
                return Reader.Env.isBanner || "embedded" === Reader.Env.embedType ? 2 : 10
            }, T = function() {
                return Reader.Env.isBanner ? 2 : "embedded" === Reader.Env.embedType && s.gaConsentBanner ? 102 : "embedded" === Reader.Env.embedType ? 42 : s.enablePublitasBranding ? 30 : 20
            }, d = function() {
                var e, n, r, o;
                return e = T(), o = _(), n = C(), r = k(), {
                    height: Math.max(t.height(), E()) - (o + e),
                    width: Math.max(t.width(), R()) - (n + r),
                    top: o,
                    left: n
                }
            }, v = null, D = function(e, t) {
                var n;
                return P(), n = d(), n.width / n.height > s.spreadAspectRatio ? m(n) : y(n), "function" == typeof N.resize && N.resize(), "function" == typeof t ? t() : void 0
            }, I = function(e) {
                return O = l(U, e, s), O.render()
            }, A = function() {
                return null != O ? O.destroy() : void 0
            }, w()
        }
    }, {
        "../../views/core/publitas_branding.jst.eco": 90,
        "../../views/desktop/content_view.jst.eco": 102,
        "../core/flipper_view.coffee": 6,
        "../core/slider_view.coffee": 25,
        "../core/view.coffee": 28,
        "../util/template.coffee": 79,
        "./progress_indicator.coffee": 41,
        "./stepperButtons.coffee": 44,
        "./zoom_controls.coffee": 45
    }],
    32: [function(e, t) {
        var n;
        n = e("./legacy_embed_api.coffee"), t.exports = function(e, t) {
            var r, o, i, u, a, l;
            return r = {}, a = null, u = function() {
                return a = i(Reader.Env.embedApiVersion), r
            }, r.handleMessage = function(e) {
                switch (e) {
                    case "init-v2":
                        return a = i("v2");
                    case "embedded":
                        return a === o && (a = i("v1")), t(e), "function" == typeof a.onEmbedded ? a.onEmbedded() : void 0;
                    case "maximized":
                        return t(e), "function" == typeof a.onMaximized ? a.onMaximized() : void 0;
                    case null:
                        return t(null)
                }
            }, r.enlarge = function() {
                return a.enlarge()
            }, r.reset = function() {
                return a.reset()
            }, i = function(t) {
                switch (t) {
                    case "v2":
                        return l;
                    case "v1":
                        return n(e);
                    default:
                        return o
                }
            }, l = {
                enlarge: function() {
                    return parent.postMessage(JSON.stringify({
                        embed: "enlarge"
                    }), "*")
                },
                reset: function() {
                    return parent.postMessage(JSON.stringify({
                        embed: "reset"
                    }), "*")
                }
            }, o = {
                enlarge: function() {
                    return e.goToUrl(e.linkToSelf())
                },
                reset: function() {}
            }, u()
        }
    }, {
        "./legacy_embed_api.coffee": 35
    }],
    33: [function(e, t) {
        var n, r;
        n = e("../util/template.coffee"), r = e("../util/on_click.coffee"), t.exports = function(t, o) {
            var i, u;
            return i = {}, (u = function() {
                return t.html(n(e("../../views/desktop/embed_controls.jst.eco"))), r(t, "[data-href=open]", o.enlarge), r("#publication [data-href=open-publication]", o.enlarge), r("#publication [data-href=close-publication]", o.reset), i
            })()
        }
    }, {
        "../../views/desktop/embed_controls.jst.eco": 103,
        "../util/on_click.coffee": 73,
        "../util/template.coffee": 79
    }],
    34: [function(e, t) {
        var n, r, o, i, u, a;
        r = e("../core/hotspot_icon_renderer.coffee"), u = e("../util/next_frame.coffee"), a = e("../util/on_click_strict.coffee"), o = e("../util/template.coffee"), n = e("../util/animate.coffee"), i = e("../util/browser_zoom_level.coffee"), t.exports = function(t, l, s, c) {
            var f, d, p, h, g, v, m, y, b, w, x, S, T, C, k, _, E, R, j, z, N, A, I, P, D, M, H, F, L, q, B, O, U, W, V;
            return d = {}, p = null, R = null, E = {}, A = {}, v = null, m = 1, _ = null, j = !1, N = null, B = null, f = !1, b = !0, F = [], V = null, S = null, O = {
                left: 0,
                top: 0
            }, I = function() {
                var e;
                return t.html(""), p = g(), t.append(p), N = r(p), e = null, s.hotspotsVisibleOnHover && t.addClass("visible-on-hover"), t.on("mousemove", function(n) {
                    return u(function() {
                        return !b || 0 !== n.which && 0 !== n.buttons ? void 0 : (e = k({
                            x: n.pageX,
                            y: n.pageY
                        }), t.toggleClass("pointer", null != e))
                    })
                }), t.on("mouseleave", function() {
                    return null != e && W(e), e = null
                }), t.on("mouseenter", function() {
                    return O = t.parents("#publication_content").offset()
                }), a(t, function(t) {
                    var n;
                    return n = U({
                        x: t.pageX,
                        y: t.pageY
                    }), b && null != (null != e ? e : e = x(n)) ? (c.activateHotspot(e), Reader.log("click hotspot", {
                        hotspot: e
                    })) : c.toggleZoom({
                        x: t.pageX,
                        y: t.pageY
                    })
                }), t.on("mousemove", ".hotspot-tooltip", function(e) {
                    return e.stopPropagation()
                }), t.on("click", ".hotspot-tooltip", function(e) {
                    return e.preventDefault()
                }), d
            }, d.activate = function(e) {
                return v = e, f = !0, clearTimeout(B), B = setTimeout(function() {
                    return h(), H(e), B = setTimeout(function() {
                        return q(100)
                    })
                }, 500)
            }, d.deactivate = function() {
                return T(), v = null, f = !1
            }, d.isActive = function() {
                return f
            }, d.enable = function() {
                return b = !0, $(p).show()
            }, d.disable = function() {
                return b = !1, $(p).hide()
            }, d.resize = function(e, n) {
                var r;
                return null == n && (n = 0), e.width !== V || e.height !== S ? (r = [e.width, e.height], V = r[0], S = r[1], t.css({
                    width: Math.round(V),
                    height: Math.round(S)
                }), L(V, S), h(), H(v)) : void 0
            }, d.hide = function() {
                return T()
            }, d.show = function() {
                return q()
            }, d.loadHotspots = function(e) {
                var t, n, r, o, i, u, a, l;
                if (null == E[e]) {
                    for (l = [], o = {}, a = null != (u = s.getHotspots(e)) ? u : [], t = function(e) {
                            return l.push(e), o[e.id] = P(e)[0]
                        }, r = 0, i = a.length; i > r; r++) n = a[r], t(n);
                    return E[e] = l, A[e] = o, $(p).css({
                        opacity: 0
                    })
                }
            }, d.unloadHotspots = function(e) {
                return null != _ && $(w(_)).remove(), delete A[e], delete E[e]
            }, d.setPublication = function(e) {
                return s = e
            }, z = function(e) {
                var t, n, r, o;
                return r = e.position, o = [r.iconLeft, r.iconTop], t = o[0], n = o[1], e.showIndication || (t = n = .5), {
                    left: r.left + t * r.width,
                    top: r.top + n * r.height
                }
            }, P = function(t) {
                var n, r, i;
                return r = $(o(e("../../views/core/hotspot_indicator.jst.eco"), t).replace(/\s+</g, "<")), i = $(r).find(".hotspot-tooltip"), n = i.find(".content"), r[0].hotspotId = t.id, r[0].position = z(t), r[0].tooltip = i[0], null != i[0] && (r[0].tooltip.content = n[0]), r.css({
                    left: 100 * t.position.left + "%",
                    top: 100 * t.position.top + "%",
                    width: 100 * t.position.width + "%",
                    height: 100 * t.position.height + "%",
                    position: "absolute"
                }), i.css({
                    display: t.showTooltip ? "block" : "none",
                    color: Reader.tooltipColor || Reader.ctaDarkColor
                }), r
            }, k = function(e) {
                var t;
                return e = U(e), t = x(e), _ === t ? t : (_ && W(_), t && C(t), t)
            }, x = function(e) {
                var t, n, r, o, i, u, a, l, s, c;
                for (t = null, c = 1, s = null != (l = E[v]) ? l : [], o = 0, a = s.length; a > o; o++) {
                    if (r = s[o], u = N.iconRect(r), u && D(e, u)) return r;
                    D(e, r.position) && (i = z(r), n = y(e, {
                        x: i.left,
                        y: i.top
                    }), c > n && (t = r, c = n))
                }
                return t
            }, U = function(e) {
                return {
                    x: (e.x - (O.left + l.absoluteX())) / V,
                    y: (e.y - (O.top + l.absoluteY())) / S
                }
            }, M = function(e) {
                var t, n, r, o, i, u, a, s, c, f;
                return f = l.viewPort(), s = e.tooltip, null != s ? (null == s._width && (i = s.getBoundingClientRect(), s._height = i.bottom - i.top, s._width = i.right - i.left), a = 10, o = 10, n = {
                    width: 40,
                    height: 40
                }, n.left = e.position.left * V - n.width / 2, n.top = e.position.top * S - n.height / 2, t = "top", r = n.left - s._width / 2 - a, c = n.top - s._height - a, u = n.left + n.width / 2 + s._width / 2 + a, $(s).css({
                    marginLeft: s._width / -2
                }), (r < f.left || c < f.top) && (t = "right", u = n.left + n.width + s._width + a + o, $(s).css({
                    marginLeft: ""
                })), u > f.width + f.left && (t = "left", $(s).css({
                    marginLeft: ""
                })), $(s).removeClass("right").removeClass("left").removeClass("top"), $(s).addClass(t)) : void 0
            }, D = function(e, t) {
                return e.x > t.left && e.y > t.top && e.x < t.left + t.width && e.y < t.top + t.height
            }, y = function(e, t) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
            }, C = function(e) {
                var n;
                return (n = w(e)) ? ($(n).css({
                    visibility: "hidden"
                }), t.prepend(n), setTimeout(function() {
                    return _ === e ? (M(n), $(n).css({
                        visibility: ""
                    })) : void 0
                }), _ = e) : void 0
            }, W = function(e) {
                return _ = w(e), $(_).remove(), _ = null
            }, w = function(e) {
                return (A[v] || {})[e.id]
            }, H = function(e) {
                return N.render(s.getHotspots(e))
            }, h = function() {
                return N.clearHotspotIcons()
            }, T = function(e) {
                return null == e && (e = 0), null != B && clearTimeout(B), j = !1, null != _ && W(_), n(p, {
                    opacity: 0
                }, e)
            }, q = function(e) {
                return null == e && (e = 0), j = !0, n(p, {
                    opacity: 1
                }, e)
            }, L = function(e, t) {
                var n;
                return n = i(), p.width = e * p.scale * n, p.height = t * p.scale * n, $(p).css({
                    width: e,
                    height: t
                })
            }, g = function() {
                var e, t, n, r, o, i;
                return p = document.createElement("CANVAS"), t = p.getContext("2d"), e = null != (r = t.webkitBackingStorePixelRatio) ? r : 1, n = null != (o = window.devicePixelRatio) ? o : 1, i = n > e ? n : 1, p.scale = i, p
            }, I()
        }
    }, {
        "../../views/core/hotspot_indicator.jst.eco": 84,
        "../core/hotspot_icon_renderer.coffee": 8,
        "../util/animate.coffee": 49,
        "../util/browser_zoom_level.coffee": 56,
        "../util/next_frame.coffee": 70,
        "../util/on_click_strict.coffee": 74,
        "../util/template.coffee": 79
    }],
    35: [function(e, t) {
        t.exports = function() {
            var e, t, n, r, o, i, u, a, l, s;
            return e = {}, r = null, a = null, u = function() {
                var u, c;
                return u = Reader.Env, c = u.ie && u.browserVersion < 10, c || (c = u.ie && 7 === u.engineVersion && "6.3" === u.osVersionFull), c ? (r = n(i), a = n(s)) : (r = n(o), a = n(l)), $(function() {
                    return parent.postMessage(JSON.stringify({
                        embed: n(t)
                    }), "*")
                }), e
            }, e.enlarge = function() {
                return parent.postMessage(JSON.stringify({
                    embed: r
                }), "*")
            }, e.reset = function() {
                return parent.postMessage(JSON.stringify({
                    embed: a
                }), "*")
            }, e.onEmbedded = function() {
                return $("#publication [data-href=close-publication]").hide()
            }, e.onMaximized = function() {
                return $("#publication [data-href=close-publication]").show()
            }, t = function(e, t) {
                var n, r, o, i, u;
                for (e = arguments[0], t = arguments[1], e.vendor = "", i = ["webkit", "moz", "ms", "o"], n = 0, r = i.length; r > n; n++) o = i[n], null != t[o + "RequestAnimationFrame"] && (e.vendor = "-" + o + "-", e.nextFrame = t[o + "RequestAnimationFrame"]);
                return e.nextFrame = null != (u = t.requestAnimationFrame) ? u : e.nextFrame, e.transition = e.vendor + "transition", e.transform = e.vendor + "transform", null != e.timer && clearTimeout(e.timer), e.delay = function(t, n) {
                    return e.timer = setTimeout(t, n)
                }, e.s = e.style.setProperty ? function(e, t, n) {
                    return e.style.setProperty(t, n, null)
                } : function(e, t, n) {
                    return e.style[t] = n
                }, null == e.overlay ? (e.overlay = t.document.createElement("DIV"), e.placeHolder = t.document.createElement("DIV"), t.document.body.appendChild(e.overlay)) : void 0
            }, o = function(e, t) {
                var n, r, o, i, u, a, l, s, c, f, d, p, h, g;
                return e = arguments[0], t = arguments[1], c = e.s, u = e.nextFrame, n = e.delay, h = e.transition, p = e.transform, a = e.overlay, l = e.placeHolder, s = e.getBoundingClientRect(), g = s.right - s.left, o = s.bottom - s.top, f = g / o > t.innerWidth / innerHeight ? t.innerWidth / g : t.innerHeight / o, d = -(s.top - (t.innerHeight - o) / 2), i = -(s.left - (t.innerWidth - g) / 2), r = 500, u(function() {
                    var t, n, o, g, v, m;
                    for (c(a, "display", ""), c(a, "position", "fixed"), c(a, "z-index", "99999"), c(a, "background", "#fff"), c(a, "opacity", "0"), v = ["top", "right", "bottom", "left"], n = 0, o = v.length; o > n; n++) g = v[n], c(a, g, "0");
                    for (t in s) m = s[t], c(l, t, m + "px");
                    e.parentNode.insertBefore(l, e), c(e, "position", "fixed"), c(e, "pointer-events", "none"), c(e, "z-index", "99998");
                    for (t in s) m = s[t], c(e, t, m + "px");
                    return u(function() {
                        return c(a, h, "opacity " + .5 * r + "ms " + .5 * r + "ms"), c(e, h, "all " + r + "ms"), c(a, "opacity", "1"), c(e, p, "translate3d(" + i + "px, " + d + "px, 0) scale(" + f + ")")
                    })
                }), n(function() {
                    var o, i, u, l, s;
                    for (l = JSON.stringify(["embed", "maximized"]), e.contentWindow.postMessage(l, "*"), c(e, "height", "100%"), c(e, "width", "100%"), c(e, h, ""), c(e, p, ""), s = ["top", "right", "bottom", "left", "margin", "padding"], i = 0, u = s.length; u > i; i++) o = s[i], c(e, o, "0");
                    return n(function() {
                        return c(t.document.documentElement, "overflow", "hidden"), c(a, "opacity", "0"), c(e, "pointer-events", ""), n(function() {
                            return c(a, "display", "none")
                        }, r + 50)
                    }, 200)
                }, r + 50)
            }, l = function(e, t) {
                var n, r, o, i, u, a, l, s, c, f, d, p, h, g, v;
                return e = arguments[0], t = arguments[1], c = e.s, u = e.nextFrame, n = e.delay, g = e.transition, h = e.transform, a = e.overlay, l = e.placeHolder, s = l.getBoundingClientRect(), v = s.right - s.left, o = s.bottom - s.top, f = v / t.innerWidth, d = o / t.innerHeight, p = s.top - (t.innerHeight - o) / 2, i = s.left - (t.innerWidth - v) / 2, r = 500, u(function() {
                    return c(e, "opacity", "0"), c(e, "pointer-events", "none"), c(e, g, h + " " + r + "ms, opacity " + .5 * r + "ms " + .5 * r + "ms"), c(e, h, "translate3d(" + i + "px, " + p + "px, 0) scale(" + f + ", " + d + ")")
                }), n(function() {
                    var o;
                    return o = JSON.stringify(["embed", "embedded"]), e.contentWindow.postMessage(o, "*"), u(function() {
                        var t, n, o, i;
                        for (c(e, g, "opacity " + r + "ms"), c(e, h, ""), i = ["position", "z-index", "top", "right", "bottom", "left", "width", "height", "margin", "padding"], n = 0, o = i.length; o > n; n++) t = i[n], c(e, t, "");
                        return l.parentNode.removeChild(l)
                    }), n(function() {
                        return c(t.document.documentElement, "overflow", ""), c(e, "opacity", "1"), c(e, "pointer-events", ""), n(function() {
                            return c(e, g, "")
                        }, r + 50)
                    }, 200)
                }, r + 50)
            }, i = function(e, t) {
                var n, r, o, i, u, a, l, s, c;
                for (e = arguments[0], t = arguments[1], c = e.s, r = e.delay, a = e.overlay, l = e.placeHolder, u = JSON.stringify(["embed", "maximized"]), r(function() {
                        return e.contentWindow.postMessage(u, "*")
                    }), e.onload = function() {
                        return e.contentWindow.postMessage(u, "*")
                    }, e.parentNode.insertBefore(l, e), document.body.appendChild(e), c(e, "position", "absolute"), c(e, "height", "100%"), c(e, "width", "100%"), s = ["top", "right", "bottom", "left"], o = 0, i = s.length; i > o; o++) n = s[o], c(e, n, "0");
                return c(e, "z-index", "99998"), c(t.document.documentElement, "overflow", "hidden"), t.scrollTo(0, 0)
            }, s = function(e, t) {
                var n, r, o, i, u, a, l, s, c;
                for (e = arguments[0], t = arguments[1], c = e.s, r = e.delay, a = e.overlay, l = e.placeHolder, u = JSON.stringify(["embed", "embedded"]), r(function() {
                        return e.contentWindow.postMessage(u, "*")
                    }), e.onload = function() {
                        return e.contentWindow.postMessage(u, "*")
                    }, l.parentNode.insertBefore(e, l), l.parentNode.removeChild(l), s = ["position", "z-index", "top", "right", "bottom", "left", "width", "height", "margin", "padding"], o = 0, i = s.length; i > o; o++) n = s[o], c(e, n, "");
                return c(t.document.documentElement, "overflow", "")
            }, n = function(e) {
                return e.toString().match(/function[^{]+\{([\s\S]*)\}$/)[1]
            }, u()
        }
    }, {}],
    36: [function(e, t) {
        var n, r, o, i, u, a, l, s, c, f, d, p, h, g, v, m, y, b, w, x, S, T;
        b = e("../util/template.coffee"), p = e("./products_view.coffee"), a = e("../core/iframed_content.coffee"), o = e("./embed_api.coffee"), h = e("./related_publications_list.coffee"), r = e("./content_view.coffee"), f = e("./popup.coffee"), s = e("../core/main_menu.coffee"), c = e("../tablet/panel.coffee"), d = e("../util/printing.coffee"), i = e("./embed_controls.coffee"), x = e("../core/view.coffee"), S = e("../util/next_frame.coffee"), n = e("../util/animate.coffee"), w = e("../core/video_view.coffee"), m = e("../../../src/bootstrap/spinner.coffee"), v = e("../core/shopping_cart_icon.coffee"), T = e("../util/i18n.coffee"), y = e("../tablet/spread_overview.coffee"), u = e("../core/feedback.coffee"), g = e("../core/search_view.coffee"), l = e("../core/image_size_picker.coffee"), t.exports = function(t, C) {
            var k, _, E, R, j, z, N, A, I, P, D, M, H, F, L, q, B, O, U, W, V, X, Y, Z, G, J, Q, K, ee, te, ne, re, oe, ie, ue, ae, le, se;
            return k = {}, j = t.domEl(), se = null, j.append(b(e("../../views/desktop/navigator.jst.eco"))), E = j.find("#content"), J = p(t), F = a(), B = null, Z = null, X = null, I = null, N = null, ne = null, ae = null, _ = null, R = null, z = null, ee = null, G = null, L = function() {
                return z = o(t, U), ee = null != C.relatedPublications ? h(j.find("#related_publications"), C) : void 0, R = r(E, C, t), Z = f(j.find("#popup")), Z.on("close", function() {
                    return j.removeClass("popup-open")
                }), B = s(j.find("#main_menu")), X = c(j.find("#panel"), function(e) {
                    return B.deactivateItem(e)
                }), Y(B, X), G = d(), i(j.find("#embed_controls"), z), se = x(j, {
                    resize: V
                }), t.on("genericResize", function() {
                    return S(function() {
                        return se.resize(0)
                    })
                }), R.on("zoom", ue), ue(), se.resize(), Z.close(), k
            }, V = function() {
                var e, t, n, r;
                return t = !1, r = null, e = !0, n = !0, "maximized" === Reader.Env.embedType ? Reader.Env.isBanner = !1 : Reader.Env.iframed && (j.height() < 400 || j.width() < 400) ? (t = !0, r = z.enlarge, e = !1, Reader.Env.isBanner = !0, n = !1) : Reader.Env.iframed && (j.height() < 500 || j.width() < 800) ? (r = z.enlarge, e = !1, n = !1) : "embedded" === Reader.Env.embedType && (n = !1), Reader.Env.isBanner = t, j.toggleClass("banner", t), j.toggleClass("hotspots-disabled", !e), le(n), R.toggleHotspots(e), R.setZoomAction(r), G.setImageUrls(D())
            }, le = function(e) {
                return null != ee ? e ? (j.addClass("with-related-publications"), ee.render()) : (j.removeClass("with-related-publications"), ee.destroy()) : void 0
            }, k.activate = function() {
                return n(E, {
                    opacity: 1
                }, 200), $(document).on("keydown", W)
            }, k.goToPage = function(e, t, n) {
                return null == t && (t = 400), H(C.pageToIndex(e), {
                    duration: t,
                    callback: n
                })
            }, k.goToSpread = function(e, t, n) {
                return null == t && (t = 400), H(e, {
                    duration: t,
                    callback: n
                })
            }, k.redrawDynamicContent = function() {
                return R.redrawDynamicContent()
            }, H = function(e, t) {
                return e !== R.currentIndex() ? (Z.close(), null != ae && ae.update(e), R.goToSpread(e, t), G.setImageUrls(D())) : void 0
            }, k.goToProduct = function(e, t) {
                return e.hotspot.getProducts(function(n) {
                    var r;
                    return r = n.indexOf(e), ie(n, r, t)
                })
            }, k.showVideo = function(e) {
                return oe(w(e)), Z.onceOn("close", function() {
                    return t.goToSpread(R.currentIndex())
                })
            }, k.showHotspotProducts = function(e, n) {
                return re(e, function(e) {
                    return null != n ? n(e) : t.goToProduct(e[0])
                })
            }, k.showPopup = oe = function(e) {
                return j.addClass("popup-open"), Z.open(e)
            }, ie = function(e, t, n) {
                var r;
                return r = function() {
                    return J.renderProduct(t), "function" == typeof n ? n() : void 0
                }, J.currentProducts() === e ? r() : re(e[t].hotspot, r)
            }, re = function(e, n) {
                var r, o;
                return oe(m()), r = !1, o = e.getProducts(function(e) {
                    return r ? void 0 : (e !== J.currentProducts() && Z.replaceContent(J.render(e)), "function" == typeof n ? n(e) : void 0)
                }), Z.onceOn("close", function() {
                    var e, n, o, i, u;
                    for (t.goToSpread(R.currentIndex()), r = !0, o = null != i ? i : [], u = [], e = 0, n = o.length; n > e; e++) i = o[e], u.push(i.abort());
                    return u
                })
            }, O = function(e, t, n) {
                var r, o;
                return r = null != (o = B.activeItem()) ? o.name : void 0, r !== e && (X.slideIn(e, 300, n), setTimeout(function() {
                    return B.activateItem(e)
                }), Reader.log("open " + e.replace("_", " "), {
                    method: "menu button"
                })), null != r ? (B.deactivateItem(r), X.slideViewOut(r, 300), Reader.log("close panel", {
                    method: "menu button"
                })) : void 0
            }, Y = function(n, r) {
                var o, i, a, l, s, c, f;
                return Reader.Env.iframed || (o = null != (a = t.custom.homeButtonAction) ? a : t.outgoingLink(C.websiteUrl), null != o && (f = null != (l = t.custom.homeButtonTitle) ? l : C.websiteDomain, n.addItem("home", o, {
                    title: f
                }))), null != (o = null != (s = t.custom.cartButtonAction) ? s : C.webshopCheckoutUrl) && (_ = v(o, t.custom.cartButtonTitle, n)), n.addItem("zoom_in", function() {
                    return R.toggleZoom()
                }, {
                    title: T("zoom_in")
                }), n.addItem("zoom_out", function() {
                    return R.toggleZoom()
                }, {
                    title: T("zoom_out")
                }), n.addItem("spread_overview", O, {
                    title: T("spread_overview.label")
                }), ae = y(C, {
                    goToSpread: t.goToSpread,
                    currentIndex: R.currentIndex
                }), r.addView("spread_overview", ae.render), P && (n.addItem("fullscreen", M, {
                    title: T("fullscreen.label")
                }), n.addItem("exit-fullscreen", q, {
                    title: T("exit_fullscreen.label")
                })), null != C.pdfUrl && n.addItem("download_pdf", C.pdfUrl, {
                    title: T("pdf_download.label")
                }), C.privacyPolicyUrl && (i = t.outgoingLink(C.privacyPolicyUrl), n.addItem("privacy_policy", i, {
                    title: T("privacy_policy.label")
                })), C.feedbackReplyable && (n.addItem("feedback", O, {
                    title: T("feedback.label")
                }), I = u(r, C, t.router), r.addView("feedback", I.render)), C.showPrintButton && n.addItem("print", function() {
                    return window.print()
                }, {
                    title: T("print")
                }), C.enableSearch && "preview" !== Reader.Env.embedType && (ne = g(C, t.router.url("search"), function(e) {
                    return t.goToPage(e), S(function() {
                        return r.slideOut()
                    })
                }), c = function(e) {
                    return O(e, null, function() {
                        return ne.selectSearchField()
                    })
                }, n.addItem("search_view", c, {
                    title: T("search.label")
                }), r.addView("search_view", ne.render)), C.disableSharing || n.addItem("share", function(e, t) {
                    return t.preventDefault()
                }, {
                    titleHtml: $(b(e("../../views/core/share.jst.eco")))
                }), C.enablePublitasBranding ? n.addItem("publitas", Reader.PublitasBranding.ctaUrl, {
                    title: T("publitas_branding.tooltip"),
                    target: "_blank"
                }) : void 0
            }, W = function(e) {
                if ("INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName) {
                    switch (e.which) {
                        case 27:
                            R.isZoomedIn() && (R.resetZoom(), Reader.log("zoom", {
                                method: "keyboard zoom out"
                            }));
                            break;
                        case 37:
                            Z.isOpen() || R.isZoomedIn() || (R.goToPrevNextSpread("prevSlide"), Reader.log("change spread", {
                                method: "keyboard"
                            }));
                            break;
                        case 39:
                            Z.isOpen() || R.isZoomedIn() || (R.goToPrevNextSpread("nextSlide"), Reader.log("change spread", {
                                method: "keyboard"
                            }));
                            break;
                        case 70:
                            e.ctrlKey || (M(), Reader.log("go fullscreen", {
                                method: "keyboard"
                            }))
                    }
                    return !0
                }
            }, ue = function() {
                return R.isZoomedIn() ? (B.hideItem("zoom_in"), B.showItem("zoom_out"), j.addClass("zoomed")) : (B.hideItem("zoom_out"), B.showItem("zoom_in"), j.removeClass("zoomed"))
            }, M = function() {
                return te ? te.apply(j[0]) : void 0
            }, q = function() {
                return A ? A.apply(document) : void 0
            }, P = null != (Q = null != (K = document.fullscreenEnabled) ? K : document[Reader.Env.vendor + "FullscreenEnabled"]) ? Q : document[Reader.Env.vendor + "FullScreenEnabled"], te = j[0].requestFullscreen || j[0][Reader.Env.vendor + "RequestFullscreen"] || j[0][Reader.Env.vendor + "RequestFullScreen"], A = document.exitFullscreen || document[Reader.Env.vendor + "ExitFullscreen"] || document[Reader.Env.vendor + "ExitFullScreen"] || document[Reader.Env.vendor + "CancelFullScreen"], U = function(e) {
                return Reader.Env.embedType = e, j.attr("data-embed-type", Reader.Env.embedType), S(function() {
                    return se.resize()
                })
            }, D = function() {
                var e, t, n, r;
                return r = $("#publication_content")[0].getBoundingClientRect(), e = C.isBooklet ? 2 : 1, t = {
                    height: r.height,
                    width: r.width / e
                }, n = l(C), C.getSpreadImageUrls(R.currentIndex(), n(t))
            }, k.handleEmbedMessage = function(e) {
                return z.handleMessage(e)
            }, k.destroy = function() {
                return se.destroy(), j.html(""), j = null, $(document).off("keydown", W)
            }, k.cartContentChanged = function(e) {
                if (!_) throw new Error("no shopping cart icon present");
                return _.cartContentChanged(e)
            }, k.showExternalContent = function(e, t) {
                var n;
                return oe(F.render(e, t)), n = {}, Z.onceOn("close", function() {
                    var e, t, r, o, i;
                    for (i = null != (o = n.close) ? o : [], t = 0, r = i.length; r > t; t++)(e = i[t])();
                    return n = {}
                }), {
                    on: function(e, t) {
                        return null == n[e] && (n[e] = []), n[e].push(t)
                    }
                }
            }, L()
        }
    }, {
        "../../../src/bootstrap/spinner.coffee": 117,
        "../../views/core/share.jst.eco": 94,
        "../../views/desktop/navigator.jst.eco": 104,
        "../core/feedback.coffee": 3,
        "../core/iframed_content.coffee": 9,
        "../core/image_size_picker.coffee": 10,
        "../core/main_menu.coffee": 12,
        "../core/search_view.coffee": 18,
        "../core/shopping_cart_icon.coffee": 20,
        "../core/video_view.coffee": 27,
        "../core/view.coffee": 28,
        "../tablet/panel.coffee": 46,
        "../tablet/spread_overview.coffee": 48,
        "../util/animate.coffee": 49,
        "../util/i18n.coffee": 68,
        "../util/next_frame.coffee": 70,
        "../util/printing.coffee": 77,
        "../util/template.coffee": 79,
        "./content_view.coffee": 31,
        "./embed_api.coffee": 32,
        "./embed_controls.coffee": 33,
        "./popup.coffee": 37,
        "./products_view.coffee": 40,
        "./related_publications_list.coffee": 42
    }],
    37: [function(e, t) {
        var n, r, o;
        o = e("../util/on_click.coffee"), n = e("../core/view.coffee"), r = e("../util/async.coffee"), t.exports = function(e) {
            var t, i, u, a, l, s, c, f, d;
            return t = {}, l = !0, d = null, u = null, c = null, a = function() {
                return o(e, function(n) {
                    return n.target === e[0] && l ? (n.stopPropagation(), t.close(), Reader.log("close popup", {
                        method: "clicked empty space"
                    })) : void 0
                }), o(e, "[data-href=close]", function(e) {
                    return e.stopPropagation(), t.close(), Reader.log("close popup", {
                        method: "close button"
                    })
                }), $(document).on("keydown", function(e) {
                    return l && 27 === e.which ? (t.close(), Reader.log("close popup", {
                        method: "keyboard"
                    })) : void 0
                }), e.on("needsLayout", i), d = n(e, {
                    resize: f
                })
            }, f = function(e, t) {
                return "function" == typeof t && t(), l ? setTimeout(i, e) : void 0
            }, i = function() {
                var t, n;
                return (t = e.children()[0]) ? (n = t.getBoundingClientRect(), t.style.top = "50%", t.style.left = "50%", t.style.marginLeft = "-" + Math.round((n.right - n.left) / 2) + "px", t.style.marginTop = "-" + Math.round((n.bottom - n.top) / 2) + "px") : void 0
            }, t.close = function() {
                return l ? (null != c && c.cancel(), e.hide(), e.removeClass("open"), null != u && u.destroy(), u = null, l = !1, e.html(""), e.triggerHandler("close", [])) : void 0
            }, t.open = function(e) {
                return l ? void 0 : (l = !0, s(e))
            }, t.replaceContent = function(e) {
                return l ? (null != u && u.destroy(), u = null, s(e)) : t.open(e)
            }, s = function(t) {
                return null != c && c.cancel(), c = r([function(r) {
                    return e.html(t), t = $(e.children()), u = n(t[0]), t.css({
                        opacity: 0
                    }), e.show(), setTimeout(r)
                }, function(t) {
                    return e.addClass("open"), setTimeout(t)
                }, function(e) {
                    return i(), null != u && u.activate(), setTimeout(e)
                }]).then(function() {
                    return t.css({
                        opacity: ""
                    }), c = null, e.triggerHandler("open", [])
                })
            }, t.on = function(t, n) {
                return e.on(t, n)
            }, t.onceOn = function(t, n) {
                return e.one(t, n)
            }, t.off = function(t, n) {
                return e.off(t, n)
            }, t.isOpen = function() {
                return l
            }, a(), t
        }
    }, {
        "../core/view.coffee": 28,
        "../util/async.coffee": 50,
        "../util/on_click.coffee": 73
    }],
    38: [function(e, t) {
        var n, r;
        n = e("../core/product_media_slider.coffee"), r = e("../core/view.coffee"), t.exports = function(e) {
            var t, o, i, u, a, l;
            return o = null, i = null, a = null, l = null, t = n(e), u = t.render, t.activate = function() {
                return o.on("mousedown", "img", function(e) {
                    return e.preventDefault()
                }), Reader.Env.retardedBrowser ? r(l).resize() : void 0
            }, t.render = function(e, t) {
                return o = e, i = t, u(o, i), l = o.find(".slider")
            }, t.on("onSlideChange", function() {
                var e;
                return e = !1
            }), t
        }
    }, {
        "../core/product_media_slider.coffee": 15,
        "../core/view.coffee": 28
    }],
    39: [function(e, t) {
        var n, r, o, i, u, a, l, s, c;
        r = e("../tablet/product_media_slider.coffee"), r = e("./product_media_slider.coffee"),
            i = e("../util/template.coffee"), u = e("../core/view.coffee"), o = e("../util/scrollable.coffee"), c = e("../util/youtube_thumbnail_url.coffee"), n = e("../util/animate.coffee"), a = e("../core/youtube_player.coffee"), s = e("../util/on_click_strict.coffee"), l = e("../util/on_click.coffee"), t.exports = function(t) {
                var f, d, p, h, g, v, m, y, b, w, x, S, T, C, k, _, E, R, j, z;
                return S = "tablet" === Reader.Env.platform ? r : r, E = null, R = null, g = null, j = null, C = null, k = null, z = null, T = $(), f = {}, f.render = function(n) {
                    return C = n, g = $(i(e("../../views/core/product_view.jst.eco"), $.extend({}, C, {
                        webshopUrl: t.outgoingLink(C.webshopUrl),
                        disableSharing: t.publication.disableSharing,
                        enableInStockInfo: t.publication.enableInStockInfo
                    }))), R = g.find(".media-slider"), z = g.find(".video-link"), T = g.find(".media ul"), d(), u(g, f), g
                }, f.destroy = function() {
                    return null != g ? (p(), g.remove(), g = null, C = null) : void 0
                }, f.activate = function() {
                    return null != g ? (k = o(g.find(".description")), null != C.photoUrls && b(), null != C.video && x(), null != C.photoUrls && C.photoUrls.length > 0 && w(), g.addClass("active"), null == C.photoUrls && null != C.video ? setTimeout(_, 100) : void 0) : void 0
                }, f.resize = function() {
                    return null != k ? k.refresh() : void 0
                }, w = function() {
                    return m() && R.css({
                        paddingBottom: 60
                    }), E = S({
                        zoomable: !0,
                        retainScale: !1
                    }), E.on("beforeSlideChange", function(e, t) {
                        return setTimeout(function() {
                            return T.children(".active").removeClass("active"), T.children().eq(t).addClass("active")
                        })
                    }), E.render(R, C), "function" == typeof E.activate ? E.activate() : void 0
                }, b = function() {
                    var e;
                    return null != C.video ? (e = $("<li class='video'>"), e.append(z), T.append(e)) : void 0
                }, x = function() {
                    var e;
                    return y() ? (e = c(C.video.youtubeId), z.css(Reader.Env.retardedBrowser ? {
                        filter: "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e + "',sizingMethod='scale')"
                    } : {
                        backgroundImage: "url('" + e + "')"
                    })) : z.hide()
                }, v = function() {
                    var e, t;
                    return e = R[0].getBoundingClientRect(), t = m() ? 80 : 40, {
                        left: e.left + 20,
                        width: e.right - e.left - 40,
                        top: e.top + 20,
                        height: e.bottom - e.top - t
                    }
                }, _ = function() {
                    return null == j ? (z.addClass("active"), T.children(".active").removeClass("active"), j = $(a(C.video.youtubeId)), j.css({
                        transform: "scale(0)"
                    }), R.append(j), setTimeout(function() {
                        return n(R.find(".slider"), {
                            opacity: 0
                        }, 300), n(j, {
                            scale: 1
                        }, 300, function() {
                            return j.css({
                                transform: ""
                            })
                        })
                    })) : void 0
                }, h = function() {
                    return null != j && j.remove(), null != z && z.removeClass("active"), null != E && (T.children().eq(E.currentIndex()).addClass("active"), Reader.Env.retardedBrowser ? R.find(".slider").show() : R.find(".slider").css({
                        opacity: "",
                        visibility: ""
                    })), j = null
                }, m = function() {
                    return null != C.photoUrls && C.photoUrls.length > 1 || null != C.video && y()
                }, y = function() {
                    return null != C.photoUrls && C.photoUrls.length > 0
                }, f.deactivate = p = function() {
                    return null != g && g.removeClass("active"), null != E && E.destroy(), E = null, null != k && k.destroy(), k = null, h(), R = null
                }, d = function() {
                    var e;
                    return g.on("click", ".cta", function(e) {
                        return e.preventDefault()
                    }), s(g, ".cta", function(e) {
                        var n, r;
                        return e.preventDefault(), r = $(e.element).data("href"), null != (null != (n = t.custom) ? n.productCtaAction : void 0) ? t.custom.productCtaAction(C) : t.goToUrl(r), Reader.log("click product cta", {
                            productId: C.id,
                            url: r
                        })
                    }), e = g.find(".media"), l(z, function() {
                        var e;
                        return _(), e = "http://youtu.be/" + C.video.youtubeId, Reader.log("view product media", {
                            url: e,
                            type: "video"
                        })
                    }), l(e, ".photo", function(e) {
                        var t;
                        return t = Number($(e.currentTarget).data("index")), h(), E.jumpTo(t, 300)
                    })
                }, f
            }
    }, {
        "../../views/core/product_view.jst.eco": 89,
        "../core/view.coffee": 28,
        "../core/youtube_player.coffee": 29,
        "../tablet/product_media_slider.coffee": 47,
        "../util/animate.coffee": 49,
        "../util/on_click.coffee": 73,
        "../util/on_click_strict.coffee": 74,
        "../util/scrollable.coffee": 78,
        "../util/template.coffee": 79,
        "../util/youtube_thumbnail_url.coffee": 80,
        "./product_media_slider.coffee": 38
    }],
    40: [function(e, t) {
        var n, r, o, i, u;
        n = e("./product_view.coffee"), i = e("../core/view.coffee"), o = e("../util/template.coffee"), r = e("../util/scrollable.coffee"), u = e("../util/on_click.coffee"), t.exports = function(t) {
            var a, l, s, c, f, d, p, h, g, v;
            return d = null, v = null, p = null, f = null, h = n(t), c = [], s = null, a = {}, a.render = function(t) {
                var n, r, u, l;
                if (null != d && i(d).destroy(), c = t, d = $(Reader.Env.tablet ? o(e("../../views/tablet/products_view.jst.eco")) : o(e("../../views/desktop/products_view.jst.eco"))), l = i(d, a), p = d.find(".product-list"), f = d.find(".product-details"), 1 === t.length) d.addClass("compact");
                else
                    for (n = r = 0, u = t.length; u >= 0 ? u > r : r > u; n = u >= 0 ? ++r : --r) g(t[n], n);
                return d
            }, a.renderProduct = function(e) {
                var t;
                if (null != d && null != (t = c[e])) return h.deactivate(), f.html(h.render(t)), setTimeout(h.activate), s = t, p.find(".active").removeClass("active"), p.find("#product-" + t.id).addClass("active"), d.trigger("needsLayout")
            }, a.activate = function() {
                return null != d ? (a.resize(), l(), v = r(p), setTimeout(function() {
                    return null != d ? d.addClass("active") : void 0
                })) : void 0
            }, a.destroy = function(e) {
                return null != d ? ("function" == typeof e && e(), null != v && v.destroy(), v = null, d.remove(), d = null, c = null, s = null) : void 0
            }, a.resize = function(e, t) {
                return setTimeout(function() {
                    return null != v ? v.refresh() : void 0
                }), "function" == typeof t ? t() : void 0
            }, a.currentProducts = function() {
                return c
            }, g = function(t, n) {
                var r;
                return r = $(o(e("../../views/core/hotspots/product_badge.jst.eco"), t)), r.data("index", n), $(p.children()[0]).append(r)
            }, l = function() {
                return u(p, ".product-badge", 200, function(e) {
                    var n;
                    return n = Number($(e.element).data("index")), c[n] !== s ? (t.goToProduct(c[n]), Reader.log("change product", {
                        method: "badge click"
                    })) : void 0
                })
            }, a
        }
    }, {
        "../../views/core/hotspots/product_badge.jst.eco": 86,
        "../../views/desktop/products_view.jst.eco": 105,
        "../../views/tablet/products_view.jst.eco": 111,
        "../core/view.coffee": 28,
        "../util/on_click.coffee": 73,
        "../util/scrollable.coffee": 78,
        "../util/template.coffee": 79,
        "./product_view.coffee": 39
    }],
    41: [function(e, t) {
        var n;
        n = e("../util/template.coffee"), t.exports = function(t, r, o) {
            var i, u, a, l, s, c;
            return i = {}, t.html(n(e("../../views/desktop/progress_indicator.jst.eco"))), a = t.find(".first-page"), c = t.find(".total"), u = t.find(".page-numbers"), s = t.find(".last-page"), l = function() {
                return c.text(r.numPages), a.on("click", function() {
                    return i.goToFirstPage()
                }), s.on("click", function() {
                    return i.goToLastPage()
                }), i
            }, i.update = function(e) {
                return u.text(r.indexToPages(e).join("-")), 0 === e ? a.addClass("disabled") : a.removeClass("disabled"), e === r.length - 1 ? s.addClass("disabled") : s.removeClass("disabled")
            }, i.goToFirstPage = function() {
                return o.goToSpread(0), Reader.log("jump to first page")
            }, i.goToLastPage = function() {
                return o.goToSpread(r.length - 1), Reader.log("jump to last page")
            }, l()
        }
    }, {
        "../../views/desktop/progress_indicator.jst.eco": 106,
        "../util/template.coffee": 79
    }],
    42: [function(e, t) {
        var n, r;
        n = e("../util/template.coffee"), r = e("../util/formatDate.coffee"), t.exports = function(t, o) {
            var i, u, a;
            return i = {}, a = function() {
                return t.on("click", "a", u), i
            }, u = function(e) {
                var t;
                return t = $(e.currentTarget), Reader.log("visit related publication", {
                    id: t.data("id"),
                    url: t.attr("href")
                })
            }, i.render = function() {
                return t.html(n(e("../../views/desktop/related_publications_list.jst.eco"), {
                    relatedPublications: o.relatedPublications,
                    formatDate: r
                }))
            }, i.destroy = function() {
                return t.off("click", "a", u), t.html("")
            }, a()
        }
    }, {
        "../../views/desktop/related_publications_list.jst.eco": 107,
        "../util/formatDate.coffee": 64,
        "../util/template.coffee": 79
    }],
    43: [function(e, t) {
        var n, r, o, i, u, a, l;
        r = e("../util/template.coffee"), o = e("../core/view.coffee"), i = null != (u = null != (a = window.requestAnimationFrame) ? a : window[Reader.vendor + "RequestAnimationFrame"]) ? u : setTimeout, n = e("../util/drag_handler.coffee"), l = e("../../views/desktop/slide_map.jst.eco"), t.exports = function(e, t) {
            var u, a, s, c, f, d, p, h, g, v, m, y, b, w;
            return s = {}, p = t.index, e = $(e), v = null, w = null, y = null, f = null, c = null, s.render = function() {
                var n;
                return e.html($(r(l))), o(e, {
                    resize: b
                }), w = e.find(".spread"), v = e.find("#panner"), n = t.contentSize(), w[0].style.width = Math.round(n.width / n.height * 100) + "px", u(), w[0].onselectstart = function() {
                    return !1
                }
            }, s.destroy = function() {
                return null != y && y.stop(), null != c && c.destroy(), v.off("click"), e.remove()
            }, u = function() {
                var e, t;
                return t = !1, e = function() {
                    return m(), t ? void 0 : i(e)
                }, y = {
                    stop: function() {
                        return t = !0
                    }
                }, b(), c = a(), e()
            }, g = h = null, b = function() {
                var e;
                return e = t.viewPort(), f = d(w), g = e.width / t.absoluteWidth() * f.width, h = e.height / t.absoluteHeight() * f.height, v.css({
                    width: Math.round(g),
                    height: Math.round(h)
                })
            }, m = function() {
                var e, n;
                return n = t.viewPort(), e = {
                    left: Math.round(n.left * f.width / t.absoluteWidth()),
                    top: Math.round(n.top * f.height / t.absoluteHeight())
                }, v.css(e)
            }, a = function() {
                var e, r;
                return w.on("click", function(e) {
                    var n, r, o, i;
                    if (e.target !== v[0] && e.target.parentNode !== v[0]) return n = t.normalizedBounds(), r = [e.pageX - f.left, e.pageY - f.top], o = r[0], i = r[1], o -= g / 2, i -= h / 2, o = o * n.width / g - n.left, i = i * n.height / h - n.top, t.moveTo(-o, -i), t.snapToBounds(), t.redraw(), Reader.log("panning", {
                        method: "mini-map click"
                    })
                }), r = !0, e = {}, n(v, {
                    start: function(t) {
                        return e = t
                    },
                    move: function(n) {
                        var o, i, u, a;
                        return n.preventDefault(), a = [(e.x - n.x) / f.width, (e.y - n.y) / f.height], i = a[0], u = a[1], o = t.borderDistance({
                            x: t.x() + i,
                            y: t.y() + u
                        }), (o.left > 0 || o.right < 0) && (i *= .07), (o.top > 0 || o.bottom < 0) && (u *= .07), t.moveBy(i, u), t.redraw(), e = n, r && Reader.log("panning", {
                            method: "mini-map drag"
                        }), r = !1
                    },
                    end: function() {
                        return t.snapToBounds(), t.redraw(300)
                    }
                })
            }, d = function(e) {
                var t, n, r, o;
                n = {}, r = e[0].getBoundingClientRect();
                for (t in r) o = r[t], n[t] = o;
                return null == n.width && (n.width = n.right - n.left), null == n.height && (n.height = n.bottom - n.top), n
            }, s
        }
    }, {
        "../../views/desktop/slide_map.jst.eco": 108,
        "../core/view.coffee": 28,
        "../util/drag_handler.coffee": 62,
        "../util/template.coffee": 79
    }],
    44: [function(e, t) {
        var n;
        n = e("../util/on_click.coffee"), t.exports = function(e, t) {
            var r, o, i;
            return r = {}, o = e.find("#prev_slide"), i = e.find("#next_slide"), n(i, function(e) {
                return e.preventDefault(), i.hasClass("disabled") ? void 0 : (t("nextSlide"), Reader.log("change spread", {
                    method: "button"
                }))
            }), n(o, function(e) {
                return e.preventDefault(), o.hasClass("disabled") ? void 0 : (t("prevSlide"), Reader.log("change spread", {
                    method: "button"
                }))
            }), r.update = function(e, t) {
                return e ? (o.attr("href", e), o.removeClass("disabled")) : (o.attr("href", ""), o.addClass("disabled")), t ? (i.attr("href", t), i.removeClass("disabled")) : (i.attr("href", ""), i.addClass("disabled"))
            }, r.positionInFrame = function(e) {
                return o.css({
                    left: e.left
                }), i.css({
                    right: window.innerWidth - e.right
                })
            }, r.resetPosition = function() {
                return o.css({
                    left: ""
                }), i.css({
                    right: ""
                })
            }, r
        }
    }, {
        "../util/on_click.coffee": 73
    }],
    45: [function(e, t) {
        var n, r, o, i, u;
        o = e("../core/view.coffee"), r = e("../util/template.coffee"), n = e("./slide_map.coffee"), u = e("../util/on_scroll.coffee"), i = e("../util/off_scroll.coffee"), t.exports = function(t, a) {
            var l, s, c, f, d, p, h, g, v, m, y, b, w;
            return l = {}, t = $(t), p = null, y = null, c = null, v = null, b = {}, w = null, l.render = function() {
                return w = o(t, {
                    resize: m
                }), t.html(r(e("../../views/desktop/zoom_controls.jst.eco"))), p = n(t.find("#slide_map"), a), p.render(), m(), s()
            }, l.destroy = function() {
                return w.destroy(), g()
            }, g = function() {
                return null != p && p.destroy(), y.remove(), c.remove(), t.html("")
            }, m = function() {
                return b = {
                    width: a.domEl.width(),
                    height: a.domEl.height()
                }, v = 50 / Math.max(b.width, b.height)
            }, h = function(e, t) {
                return a.moveBy(e, t), a.snapToBounds(), a.redraw()
            }, s = function() {
                return y = d(), c = f()
            }, d = function() {
                var e;
                return e = function(e) {
                    var t, n, r;
                    return e.preventDefault(), e.stopPropagation(), t = [e.scrollDelta.x / b.width, e.scrollDelta.y / b.height], n = t[0], r = t[1], h(-n, -r), Reader.log("panning", {
                        method: "scroll"
                    })
                }, u(a.domEl, e), {
                    remove: function() {
                        return i(a.domEl, e)
                    }
                }
            }, f = function() {
                var e;
                return e = function(e) {
                    if ("INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName) {
                        switch (e.which) {
                            case 38:
                                h(0, v);
                                break;
                            case 40:
                                h(0, -v);
                                break;
                            case 39:
                                h(-v, 0);
                                break;
                            case 37:
                                h(v, 0);
                                break;
                            default:
                                return
                        }
                        return Reader.log("panning", {
                            method: "keyboard"
                        })
                    }
                }, $(document).on("keydown", e), {
                    remove: function() {
                        return $(document).off("keydown", e)
                    }
                }
            }, l
        }
    }, {
        "../../views/desktop/zoom_controls.jst.eco": 110,
        "../core/view.coffee": 28,
        "../util/off_scroll.coffee": 72,
        "../util/on_scroll.coffee": 76,
        "../util/template.coffee": 79,
        "./slide_map.coffee": 43
    }],
    46: [function(e, t) {
        var n, r, o, i, u;
        u = e("../util/on_click.coffee"), i = e("../util/next_frame.coffee"), n = e("../util/animate.coffee"), o = e("../core/view.coffee"), r = e("../util/drag_handler.coffee"), t.exports = function(e, t) {
            var a, l, s, c, f, d, p, h, g, v;
            return null == t && (t = null), c = {}, v = {}, l = null, p = function() {
                return u(e, function(e) {
                    return $(e.target).is(".drawer") || $(e.target).parents(".drawer").length > 0 ? !0 : (c.slideOut(), Reader.log("close panel", {
                        method: "empty space"
                    }))
                })
            }, c.addView = function(t, n) {
                var r;
                return r = $("<div id='" + t + "' class='drawer'>"), e.append(r), v[t] = {
                    id: t,
                    domEl: r,
                    viewEl: null,
                    render: n,
                    isOpen: !0,
                    rendered: !1
                }, Reader.Env.hasMouse || f(r, t), g(t, 0)
            }, c.slideIn = function(t, r, o) {
                var u;
                return null == r && (r = 300), u = v[t], null == u || u.isOpen ? void 0 : (a(u), e.addClass("open"), u.isOpen = !0, i(function() {
                    return n(u.domEl, {
                        translate: "0, 0"
                    }, r, function() {
                        return u.isOpen ? (u.domEl.css({
                            transform: ""
                        }), "function" == typeof o ? o() : void 0) : void 0
                    })
                }))
            }, c.slideViewOut = g = function(t, r, o) {
                var i;
                return null == r && (r = 300), i = v[t], null != i && i.isOpen ? (i.isOpen = !1, null == i.width && (i.width = i.domEl.width()), n(i.domEl, {
                    translate: "-" + (i.width + 10) + "px, 0"
                }, r, function() {
                    return s() || e.removeClass("open"), i.isOpen ? void 0 : (d(i), "function" == typeof o ? o() : void 0)
                })) : void 0
            }, c.slideOut = function(e, t) {
                var n, r;
                null == e && (e = 300);
                for (n in v) r = v[n], r.isOpen && g(n, e);
                return null != t ? setTimeout(t, e + 50) : void 0
            }, a = function(e) {
                return e.rendered || h(e), Reader.Env.desktop ? e.domEl.css({
                    visibility: ""
                }) : e.domEl.show(), o(e.viewEl).activate()
            }, s = function() {
                var e, t, n;
                t = !1;
                for (e in v)
                    if (n = v[e], n.isOpen) {
                        t = !0;
                        break
                    }
                return t
            }, h = function(e) {
                return e.viewEl = e.render(), e.domEl.html(e.viewEl), e.rendered = !0
            }, d = function(e) {
                return Reader.Env.desktop ? e.domEl.css({
                    visibility: "hidden"
                }) : e.domEl.hide(), e.rendered && o(e.viewEl).deactivate(), "function" == typeof t ? t(e.id) : void 0
            }, f = function(e, t) {
                var n, o;
                return o = null, n = null, r(e, {
                    start: function(e) {
                        return o = {
                            x: e.x,
                            y: e.y
                        }, n = 0
                    },
                    move: function(e) {
                        var t, r, i;
                        return i = [e.x - o.x, e.y - o.y], t = i[0], r = i[1], Math.abs(t) > Math.abs(r) && (n += t), o = {
                            x: e.x,
                            y: e.y
                        }
                    },
                    end: function() {
                        return -60 > n ? (g(t), Reader.log("close panel", {
                            method: "drag"
                        })) : void 0
                    }
                })
            }, c.isIn = function() {
                return 0 !== numOpen
            }, c.hide = function() {
                return e.hide()
            }, c.show = function() {
                return e.show()
            }, p(), c
        }
    }, {
        "../core/view.coffee": 28,
        "../util/animate.coffee": 49,
        "../util/drag_handler.coffee": 62,
        "../util/next_frame.coffee": 70,
        "../util/on_click.coffee": 73
    }],
    47: [function(e, t) {
        var n, r;
        n = e("../core/product_media_slider.coffee"), r = e("../util/on_click.coffee"), t.exports = function(e) {
            var t, o, i, u, a;
            return o = null, i = null, a = null, t = n(e), u = t.render, t.render = function(e, n) {
                var l;
                return o = e, i = n, u(o, i), a = o.find(".slider"), l = o.find(".indicator"), r(o, ".page-jumper a", function(e) {
                    return t.jumpTo(parseInt($(e.currentTarget).data("index")))
                })
            }, t
        }
    }, {
        "../core/product_media_slider.coffee": 15,
        "../util/on_click.coffee": 73
    }],
    48: [function(e, t) {
        var n, r, o, i, u;
        o = e("../util/template.coffee"), i = e("../core/view.coffee"), u = e("../util/on_click.coffee"), n = e("../util/big_list.coffee"), r = e("../util/scrollable.coffee"), t.exports = function(t, a) {
            var l, s, c, f, d, p, h, g, v, m;
            return l = {}, s = null, p = null, d = null, g = [], f = null, h = null, l.render = function() {
                var n, r, u, a, c;
                for (s = $(o(e("../../views/core/spread_overview.jst.eco"))), p = s.find(".list"), u = $(o(e("../../views/core/spread_overview_item.jst.eco")))[0], a = Math.min(t.length, 30), n = r = 0, c = a; c >= 0 ? c > r : r > c; n = c >= 0 ? ++r : --r) g.push(u.cloneNode(!0));
                return p.append(g), i(s, l), s
            }, l.activate = function() {
                return d || v(), null != d ? d.refresh(a.currentIndex()) : void 0
            }, l.update = function(e) {
                var t, n, r, o;
                for ($(g).removeClass("current"), o = [], t = 0, r = g.length; r > t; t++) n = g[t], Number($(n).data("index")) === Number(e) && o.push($(n).addClass("current"));
                return o
            }, l.destroy = function() {
                return s.remove()
            }, l.resize = function(e, t) {
                return "function" == typeof t && t(), null != d ? d.refresh(a.currentIndex()) : void 0
            }, c = function() {
                var e;
                return e = s.find(".list .spread").width(), Math.round(e / t.spreadAspectRatio)
            }, v = function() {
                var e;
                return (f = c()) ? (h = f + g[0].clientHeight, u(p, "li", 200, function(e) {
                    return a.goToSpread($(e.currentTarget).data("index")), Reader.log("change spread", {
                        method: "overview"
                    })
                }), e = {
                    renderContent: m,
                    positionForIndex: function(e) {
                        return {
                            top: e * h
                        }
                    },
                    indexForPosition: function(e) {
                        return Math.round((e.top - 10) / h)
                    },
                    length: function() {
                        return t.length
                    },
                    height: function() {
                        return h * t.length + 10
                    }
                }, d = n(s.find(".list"), r(s.find(".scroll-wrapper")), e, a.currentIndex()), i(s, l)) : void 0
            }, m = function(e, n) {
                var r, o, i, u, l, s, c, d, p, h;
                for (d = e.find(".spread"), s = null != (c = t.indexToPages(n)) ? c : [], h = t.getSpreadImageUrls(n, "at200"), u = d.find(".images"), i = Math.round(100 / h.length) + "%", d.find(".pages").text(s.join("-")), u.html(""), r = 0, l = h.length; l > r; r++) p = h[r], o = document.createElement("IMG"), o.height = f, o.src = p, u.append(o);
                return e.toggleClass("current", n === a.currentIndex()), d.toggleClass("back-cover", t.isBackCover(n)), d.toggleClass("front-cover", t.isFrontCover(n))
            }, l
        }
    }, {
        "../../views/core/spread_overview.jst.eco": 98,
        "../../views/core/spread_overview_item.jst.eco": 99,
        "../core/view.coffee": 28,
        "../util/big_list.coffee": 51,
        "../util/on_click.coffee": 73,
        "../util/scrollable.coffee": 78,
        "../util/template.coffee": 79
    }],
    49: [function(e, t) {
        var n;
        n = e("./next_frame.coffee"), t.exports = function() {
            var e, t, r, o, i, u, a, l, s, c, f, d, p, h, g, v, m, y, b;
            return a = !(Reader.Env.android2 || Reader.Env.ie && Reader.Env.ieVersion < 10 || Reader.Env.presto || Reader.Env.ios && 8 === Reader.Env.browserVersion && 1 === window.devicePixelRatio), y = 0, f = !1, v = null, e = null, u = null, r = null, t = null, o = Reader.Env.vendor + "TransitionEnd", i = Reader.Env.vendor + "TransitionStart", m = function() {
                var n;
                return e = b("transform"), r = b("transition"), t = b("transform-origin"), u = e, Reader.Env.ie && (u = "-ms-transform"), n = function() {
                    if (!Reader.Env.ie) return l;
                    switch (Reader.Env.browserVersion) {
                        case 8:
                            return c;
                        case 9:
                            return s;
                        default:
                            return l
                    }
                }(), n.animationStart = p, n.animationEnd = d, n.isAnimating = function() {
                    return f
                }, n
            }, l = function(e, u, a, l) {
                var s, c, f, v, m, y, b, w;
                return null == a && (a = 0), null == l && (l = null), e = $(e), 0 !== e.length ? (p(), "function" == typeof(c = e[0])._animCallback && c._animCallback(), f = g(u, e), b = null != (m = f["transition-timing-function"]) ? m : "", delete f["transition-timing-function"], a > 0 ? (s = function() {
                    var e;
                    e = [];
                    for (v in f) w = f[v], v !== t && e.push(v);
                    return e
                }().join(" "), f[r] = s + " " + a / 1e3 + "s " + b, y = function() {
                    return y.called ? void 0 : (y.called = !0, null != l && n(l), e.off(o, y), e[0].style.setProperty(r, "none", null), d())
                }, e.on(i, y), setTimeout(y, a + 50), e[0]._animCallback = y) : n(function() {
                    return "function" == typeof l && l(), d()
                }), h(f, e)) : void 0
            }, s = function(e, t, n, r) {
                var o, i;
                return null == n && (n = 0), null == r && (r = null), e = $(e), 0 !== e.length ? (p(), "function" == typeof(o = e[0])._animCallback && o._animCallback(), e.stop(!0, !0), i = g(t, e), e.animate(i, n, null, function() {
                    return d(), "function" == typeof r ? r() : void 0
                })) : void 0
            }, c = function(e, t, n, r) {
                var o, i, u, a, l, s, c, f;
                return null == n && (n = 0), null == r && (r = null), e = $(e), 0 !== e.length ? (p(), o = $.extend({}, t), null != o.translate && (f = o.translate, delete o.translate, u = f.split(","), i = u[0], c = u[1], i = i.replace(/\s+/, ""), c = c.replace(/\s+/, ""), a = [i, c], o.left = a[0], o.top = a[1]), s = null != (l = o["transition-timing-function"]) ? l : null, delete o["transition-timing-function"], null != o.scale && (o.zoom = parseFloat(o.scale), delete o.scale), e.animate(o, n, function() {
                    return "function" == typeof r && r(), d()
                })) : void 0
            }, g = function(n, r) {
                var o, i, l, s, c, f, d, p;
                o = {}, f = [], i = null != (c = r[0].style.getPropertyValue(u)) ? c : "";
                for (s in n) p = n[s], "translate" === s ? (d = "" + s + (a ? "3d" : ""), i = i.replace(new RegExp(d + "\\([^\\)]+\\)"), ""), f.push(d + "(" + p + (a ? ", 0" : "") + ")")) : "scale" === s ? (i = i.replace(/scale\([^\)]+\)/, ""), f.push(s + "(" + p + ")")) : "origin" === s ? o[t] = p : s.indexOf("rotate") > -1 ? (i = i.replace(new RegExp(s + "([^)]+)"), ""), f.push(s + "(" + p + ")")) : o[s] = p;
                return f.length > 0 && (l = f.join(" ") + " " + i, o[e] = l), o
            }, h = function(e, t) {
                var n, r, o, i;
                n = t[0], o = [];
                for (r in e) i = e[r], o.push(n.style.setProperty(r, i, null));
                return o
            }, p = function() {
                return y++, f = !0, null != v ? (clearTimeout(v), v = null) : void 0
            }, d = function() {
                return y--, 0 > y && (y = 0), 0 === y ? v = setTimeout(function() {
                    return f = !1
                }, 100) : void 0
            }, b = function(e) {
                var t;
                return t = "", Reader.Env.vendor && "ms" !== Reader.Env.vendor && (t = "-" + Reader.Env.vendor + "-"), "" + t + e
            }, m()
        }()
    }, {
        "./next_frame.coffee": 70
    }],
    50: [function(e, t) {
        t.exports = function(e, t) {
            var n, r, o, i, u, a, l;
            return u = e.length, r = 0, a = [], n = !1, o = function() {
                return r >= u
            }, i = function(u) {
                return n ? void 0 : (r++, null != u && a.push(u), o() ? "function" == typeof t ? t(a) : void 0 : "function" == typeof e[r] ? e[r](i) : void 0)
            }, "function" == typeof e[r] && e[r](i), l = {
                cancel: function() {
                    return n = !0, e.length = 0
                },
                then: function(e) {
                    return o() ? e(a) : t = e, l
                }
            }
        }
    }, {}],
    51: [function(e, t) {
        var n, r;
        r = e("./next_frame.coffee"), n = e("./scrollable.coffee"), t.exports = function(e, t, o, i) {
            var u, a, l, s, c, f, d, p, h, g, v, m;
            return a = {}, f = null, u = null != e[0].style.transform ? "transform" : Reader.Env.vendor + "Transform", c = function() {
                return f = e.children(), f.css({
                    position: "absolute"
                }), e.css({
                    position: "relative",
                    height: o.height()
                }), null == i && (i = 0), g(i, f), t.on("scroll", function(e, t) {
                    return r(function() {
                        return m({
                            top: t,
                            left: e
                        }, f)
                    })
                }), t.on("scrollEnd", o.flush), setTimeout(function() {
                    return v(i)
                }), a
            }, a.refresh = function(n) {
                return null == n && (n = 0), t.refresh(), f.data("index", null), e.css({
                    height: o.height()
                }), r(function() {
                    return "function" == typeof o.flush && o.flush(), v(n)
                })
            }, a.destroy = function() {
                var t;
                return e = null, t = null
            }, g = function(e, t) {
                var n, i, u, a, c, f, d, p, g, v, m, y;
                if (g = t.length, y = e - Math.ceil(g / 2), 0 > y && (y = 0), n = Math.min(y + g, o.length()), u = l(t), p = function() {
                        v = [];
                        for (var e = y; n >= y ? n > e : e > n; n >= y ? e++ : e--) v.push(e);
                        return v
                    }.apply(this), d = function() {
                        var e, t, n;
                        for (n = [], e = 0, t = p.length; t > e; e++) i = p[e], -1 === u.indexOf(i) && n.push(i);
                        return n
                    }(), 0 !== d.length) {
                    for (m = [], a = 0, c = t.length; c > a; a++) f = t[a], m.push(function(e) {
                        var t, n;
                        return e = $(e), t = e.data("index"), -1 === p.indexOf(t) ? (n = d.shift(), r(function() {
                            return null != n ? h(e, n) : s(e)
                        })) : void 0
                    }(f));
                    return m
                }
            }, h = function(e, t) {
                return o.renderContent(e, t), e.data("index", t), p(e, o.positionForIndex(t)), e.show()
            }, s = function(e) {
                return e.data("index", null), e.hide()
            }, p = function(e, t) {
                var n, r;
                return e[0].style[u] = "translate(" + (null != (n = t.left) ? n : 0) + "px, " + (null != (r = t.top) ? r : 0) + "px)"
            }, Reader.Env.retardedBrowser && (p = function(e, t) {
                return e.css(t)
            }), l = function(e) {
                var t, n, r, o, i;
                for (i = [], t = 0, o = e.length; o > t; t++) r = e[t], null != (n = $(r).data("index")) && i.push(Number(n));
                return i
            }, m = function(e, t) {
                return g(o.indexForPosition(e), t)
            }, d = function(e) {
                var t;
                return t = n(e)
            }, v = function(e) {
                var n;
                return n = o.positionForIndex(e), t.scrollTo(-n.left, -n.top)
            }, c()
        }
    }, {
        "./next_frame.coffee": 70,
        "./scrollable.coffee": 78
    }],
    52: [function(e, t) {
        t.exports = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    }, {}],
    53: [function(e, t) {
        t.exports = "data:image/gif;base64,R0lGODlhAQABAPAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
    }, {}],
    54: [function(e, t) {
        var n;
        t.exports = n = function(e, t, n) {
            switch (n) {
                case "fit-height":
                    return t.height / e.height;
                case "fit-content":
                    return Math.min(t.height / e.height, t.width / e.width);
                default:
                    return t.width / e.width
            }
        }
    }, {}],
    55: [function(e, t) {
        var n;
        n = e("./browser_zoom_level.coffee"), t.exports = function() {
            return 1 !== n()
        }
    }, {
        "./browser_zoom_level.coffee": 56
    }],
    56: [function(e, t) {
        var n;
        t.exports = n = function() {
            var e, t, n;
            return Reader.Env.ie ? screen.deviceXDPI / screen.logicalXDPI : (e = null != (n = document.height) ? n : document.documentElement.offsetHeight, t = document.documentElement.getBoundingClientRect().height, e / t)
        }
    }, {}],
    57: [function(e, t) {
        var n;
        t.exports = n = function(e) {
            return e += "", null != e && e.length > 0 ? e[0].toUpperCase() + e.slice(1, e.length) : void 0
        }
    }, {}],
    58: [function(e, t) {
        t.exports = function() {
            var e;
            return e = function(e) {
                var t, n, r;
                if (null == Reader.Env.vendor) return e;
                r = {};
                for (t in e) n = e[t], r["-" + Reader.Env.vendor + "-" + t] = n;
                return r
            }
        }()
    }, {}],
    59: [function(e, t) {
        var n, r, o, i = [].slice;
        o = e("./distance.coffee"), n = e("./drag_handler.coffee"), r = 40, t.exports = function() {
            var e, t, u, a, l, s, c, f, d, p, h;
            return l = arguments[0], d = 2 <= arguments.length ? i.call(arguments, 1) : [], l = $(l), c = d.length, e = d[c - 1], c > 1 && "string" == typeof d[0] && (h = d[0]), a = "number" == typeof d[c - 2] ? d[c - 2] : 0, s = null, t = null, p = function(e) {
                return t = null, s ? (clearTimeout(s), e.removeClass("hover")) : void 0
            }, f = function(t, n) {
                return function(i, u) {
                    switch (u) {
                        case "move":
                            if (null == n) return;
                            if (o(n, i) > r) return p(t);
                            break;
                        case "end":
                            if (null == n || 0 !== i.numTouches) return;
                            return p(t), e(i);
                        case "cancel":
                            return p(t)
                    }
                }
            }, u = function(e, n) {
                var r;
                if ("start" !== n) return "function" == typeof t ? t(e, n) : void 0;
                if (r = $(e.element), !r.attr("disabled") && 1 === e.numTouches) return t = f(r, e), -1 !== a ? s = setTimeout(function() {
                    return r.addClass("hover")
                }, a) : void 0
            }, null != h ? n(l, h, u) : n(l, u)
        }
    }, {
        "./distance.coffee": 61,
        "./drag_handler.coffee": 62
    }],
    60: [function(e, t) {
        var n;
        t.exports = "function" != typeof window.CustomEvent ? (n = function(e, t) {
            var n;
            return t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }, n.prototype = window.Event.prototype, n) : window.CustomEvent
    }, {}],
    61: [function(e, t) {
        t.exports = function(e, t) {
            var n, r;
            return n = t.x - e.x, r = t.y - e.y, Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2))
        }
    }, {}],
    62: [function(e, t) {
        var n = [].slice;
        t.exports = function() {
            var e, t, r, o, i, u, a, l, s, c, f, d, p, h;
            return r = arguments[0], d = 2 <= arguments.length ? n.call(arguments, 1) : [], t = d[d.length - 1], d.length > 1 && (p = d[0]), r = $(r), a = {}, o = function(e, n) {
                return "function" == typeof t ? t(n, e) : "function" == typeof t[e] ? t[e](n) : void 0
            }, u = function(e) {
                return function(t) {
                    var n;
                    return null != t.touches ? (t.touch = t.touches[0], t.numTouches = t.touches.length) : (t.touch = {
                        pageX: t.pageX,
                        pageY: t.pageY
                    }, t.numTouches = "touchend" === t.type ? 0 : 1), null != t.changedTouches && (n = t.changedTouches[0]), t.x = (null != n ? n : t).pageX, t.y = (null != n ? n : t).pageY, t.element = t.currentTarget, o(e, t, e)
                }
            }, l = !1, f = null, i = function(e) {
                return function(t) {
                    var n;
                    if (!(t.which > 1) && (n = l, l = "start" === e ? !0 : "end" === e ? !1 : l, l || n)) return Reader.Env.retardedBrowser && t.preventDefault(), "start" === e && (f = t.currentTarget, $(document).on("mousemove", c), $(document).on("mouseup", s)), "end" === e && ($(document).off("mousemove", c), $(document).off("mouseup", s)), t.touch = l ? t : null, t.touches = l ? [t] : [], t.numTouches = l ? 1 : 0, t.x = t.pageX, t.y = t.pageY, t.element = f, o(e, t)
                }
            }, c = i("move"), s = i("end"), e = function(e, t) {
                return null != p ? r.on(e, p, t) : r.on(e, t)
            }, h = function(e, t) {
                return null != p ? r.off(e, p, t) : r.off(e, t)
            }, Reader.Env.hasMouse ? e("mousedown", a.mousedown = i("start")) : (e("touchstart", a.touchstart = u("start")), e("touchmove", a.touchmove = u("move")), e("touchend", a.touchend = u("end")), e("touchcancel", a.touchcancel = u("cancel"))), {
                destroy: function() {
                    var e, t, n;
                    n = [];
                    for (e in a) t = a[e], n.push(h(e, t));
                    return n
                }
            }
        }
    }, {}],
    63: [function(e, t) {
        t.exports = function(e, t, n, r) {
            var o, i, u, a, l, s, c, f;
            return e && t ? (n = n || "100", r = r || "...", o = i = r, u = t.length, f = e.length, a = e.toLowerCase().indexOf(t.toLowerCase()), a === !1 ? e.substr(0, n) + r : (l = a - n, 0 >= l && (l = 0, i = ""), s = a + u + n, s >= f && (s = f, o = ""), c = e.substr(l, s - l), c = i + c + o)) : e
        }
    }, {}],
    64: [function(e, t) {
        t.exports = function(e) {
            var t, n, r;
            return t = new Date(e), r = t.getMonth(), n = t.getDate(), n = n >= 10 ? "" + n : "0" + n, r = r >= 9 ? "" + (r + 1) : "0" + (r + 1), n + "." + r
        }
    }, {}],
    65: [function(e, t) {
        t.exports = function() {
            var e;
            return "onwheel" in document.createElement("div") && (e = "wheel"), "onmousewheel" in document && null == e && (e = "mousewheel"), null == e && (e = "DOMMouseScroll"), e
        }
    }, {}],
    66: [function(e, t) {
        t.exports = function() {
            return Reader.Env.retardedBrowser ? "hand" : "-" + Reader.Env.vendor + "-grabbing"
        }()
    }, {}],
    67: [function(e, t) {
        var n;
        n = e("./i18n.coffee"), t.exports = function(e, t) {
            var r, o, i, u, a, l, s, c, f, d, p, h, g, v;
            return r = {}, i = [], l = {}, u = null, d = function() {
                return u = window.history.replaceState ? function(t) {
                    var n, r;
                    return n = p(t), r = e.generateUrl(n), window.history.replaceState(n, null, r)
                } : function(e) {
                    return window.location.hash = f(p(e))
                }, r
            }, r.newState = function(e) {
                return e = a(e), u(e), h(e), Reader.log("state change", {
                    state: e
                }), l
            }, r.stateForSpread = function(e) {
                return a({
                    pages: t.indexToPages(e)
                })
            }, r.stateForNextSpread = function() {
                var e;
                if (null != l.pages) return e = t.pageToIndex(l.pages[0]), r.stateForSpread(e + 1)
            }, r.stateForPrevSpread = function() {
                var e;
                if (null != l.pages) return e = t.pageToIndex(l.pages[0]), r.stateForSpread(e - 1)
            }, r.stateForCurrentSpread = function() {
                var e;
                if (null != l.pages) return e = t.pageToIndex(l.pages[0]), r.stateForSpread(e)
            }, r.stateForPage = function(e) {
                return {
                    pages: [e]
                }
            }, r.stateForProduct = function(e) {
                return {
                    product: e,
                    pages: t.indexToPages(e.hotspot.spreadIndex)
                }
            }, r.stateForVideo = function(e) {
                return "video" === e.type ? {
                    videoHotspot: e,
                    pages: t.indexToPages(e.spreadIndex)
                } : void 0
            }, r.stateFromUrl = g = function(t, n) {
                var o;
                return o = e.parseLink(t), c(o, function(e) {
                    return null != e.product && (e = r.stateForProduct(e.product)), null != e.videoHotspot && (e = r.stateForVideo(e.videoHotspot)), e = a(e), n(e)
                })
            }, r.currentState = function() {
                return l
            }, r.currentSerializableState = function() {
                return p(l)
            }, r.setPublication = function(e) {
                return t = e
            }, r.reset = function() {
                return l = {}
            }, r.onStateChange = function(e) {
                return i.push(e)
            }, r.deserializeState = function(e, t) {
                return c(e, t)
            }, o = function() {
                var e, t, n, r;
                for (r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e(l));
                return r
            }, p = function(e) {
                var t;
                return t = $.extend({}, e), t.product ? (t.productId = t.product.id, delete t.product) : t.videoHotspot && (t.videoHotspotId = t.videoHotspot.id, delete t.videoHotspot), t
            }, c = function(e, n) {
                var r, o, i;
                return i = o = $.extend({}, e), i.productId ? t.getProduct(i.productId, function(e) {
                    return e && (i.product = e), delete i.productId, n(i)
                }) : i.videoHotspotId ? (r = t.getHotspot(i.videoHotspotId), r && "video" === r.type && (i.videoHotspot = r), delete i.videoHotspotId, n(i)) : n(i)
            }, f = function(t) {
                return e.generatePath(t)
            }, s = function(e) {
                return g(window.location.href, e)
            }, h = function(e) {
                return l = e
            }, v = function(e) {
                var r, o;
                return o = t.title, r = n, o += e.product ? " - " + e.product.title : e.videoHotspot ? " - " + r("video") + " " + r("page") + " " + e.pages.join("-") : " - " + r("page") + " " + e.pages.join("-"), t.enablePublitasBranding && (o += " - " + r("powered_by_publitas")), o
            }, a = function(e) {
                var n, r, o, i;
                o = {};
                for (n in e) i = e[n], o[n] = i;
                return null == o.pages && (o.pages = null != (r = l.pages) ? r : [1]), isNaN(o.pages[0]) && (o.pages[0] = 1), (o.pages[0] < 1 || o.pages[0] > t.numPages) && (o.pages = [1]), o.pages[1] && (o.pages = t.indexToPages(t.pageToIndex(o.pages[0]))), o
            }, d()
        }
    }, {
        "./i18n.coffee": 68
    }],
    68: [function(e, t) {
        var n, r, o, i;
        r = e("make-plural"), i = {}, o = r.en, t.exports = n = function(e, t) {
            var n, r;
            return null == t && (t = {}), r = e.split(".").reduce(function(e, t) {
                return null != e ? e[t] : void 0
            }, i), null != t.count && (n = o(t.count), 0 === t.count && null != i.zero && (n = "zero"), r = i[n]), null != r && "string" == typeof r ? r.replace(/\{([a-zA-Z._]+)\}/g, function(e, n) {
                var r;
                return r = t[n], null != r ? r : "{" + n + "}"
            }) : e
        }, n.init = function(e, t) {
            return i = t, null != r[e] ? o = r[e] : void 0
        }
    }, {
        "make-plural": 116
    }],
    69: [function(e, t) {
        t.exports = function(e) {
            var t, n, r, o, i, u, a, l, s, c, f, d, p, h, g, v, m;
            return null == e && (e = {}), n = {}, v = 10, u = 1, h = .001, f = 400, c = 6, d = [null, null], s = d[0], m = d[1], a = null, p = null, o = !1, n.getAnimationSteps = function(e, n) {
                var u, l, c, f, d, h, y;
                for (f = [], d = n.size(), s = d.height, m = d.width, u = n.x(), l = n.y(), o = !1, i(e), c = new t({
                        velocity: $.extend({}, e)
                    }), f.push(c), n.zoomScale() === n.defaultScale() ? (p = .1, a = .99) : (a = .93, p = .6), h = function() {
                        var e, i, a, d, p, h;
                        if (!o) return e = n.borderDistance({
                            x: u,
                            y: l
                        }), c.overshot = {
                            x: e[r(e).x],
                            y: e[r(e).y]
                        }, h = c.step(v), u += h.x, l += h.y, a = {
                            x: c.velocity.x,
                            y: c.velocity.y
                        }, i = {
                            x: c.snap.x,
                            y: c.snap.y
                        }, (c.snap.x !== !1 || 0 === c.velocity.x) && (i.x = null != (d = 0 !== c.overshot.x ? r(e).x : void 0) ? d : !1), (c.snap.y !== !1 || 0 === c.velocity.y) && (i.y = null != (p = 0 !== c.overshot.y ? r(e).y : void 0) ? p : !1), c.snap.x !== i.x && (a.x = c.overshot.x / g(c.overshot.x * m) * -1), c.snap.y !== i.y && (a.y = c.overshot.y / g(c.overshot.y * s) * -1), a.x !== c.velocity.x || a.y !== c.velocity.y ? (c = new t({
                            velocity: a,
                            snap: i
                        }), f.push(c)) : void 0
                    }, h(), y = 1;
                    (0 !== c.velocity.x || 0 !== c.velocity.y) && 1e3 > y && !o;) h(), y++;
                return 0 === f[0].delta.x && 0 === f[0].delta.y && (f = []), f
            }, n.cancel = function() {
                return o = !0
            }, g = function(e) {
                return 0 === e ? 1 : Math.max(f, Math.sqrt(2 * Math.abs(e) / h))
            }, l = function(e) {
                return e.zoomScale() === e.defaultScale() ? .1 : borderDamping
            }, i = function(e) {
                var t, n, r, o, i, u, a;
                for (o = ["x", "y"], i = [], n = 0, r = o.length; r > n; n++) t = o[n], a = "x" === t ? m : s, u = e[t] > 0 ? 1 : -1, i.push(Math.abs(e[t] * a) > c ? e[t] = u * c / a : void 0);
                return i
            }, r = function(e) {
                var t, n, r, o, i, u;
                return r = [Math.abs(e.left), Math.abs(e.right)], n = r[0], i = r[1], o = [Math.abs(e.top), Math.abs(e.bottom)], u = o[0], t = o[1], {
                    x: n > i ? "left" : "right",
                    y: u > t ? "top" : "bottom"
                }
            }, t = function(e) {
                var t, n, r, o;
                return this.duration = null != (t = e.duration) ? t : 0, this.delta = {
                        x: 0,
                        y: 0
                    }, this.velocity = null != (n = e.velocity) ? n : {
                        x: 0,
                        y: 0
                    }, this.overshot = null != (r = e.overshot) ? r : {
                        x: 0,
                        y: 0
                    }, this.snap = null != (o = e.snap) ? o : {
                        x: !1,
                        y: !1
                    }, this.timingFunction = "cubic-bezier(0,0, 0.1, 1.0)", (this.snap.x || this.snap.y) && (this.timingFunction = "cubic-bezier(0.0, 0.4, 0.7, 1.0)"),
                    this.drag = function() {
                        return {
                            x: a * this.damping("x", m),
                            y: a * this.damping("y", s)
                        }
                    }, this.damping = function(e, t) {
                        var n;
                        return n = Math.abs(this.overshot[e] * t), n > 1 ? p : 1
                    }, this.cutoffReached = function(e, t, n) {
                        var r, o, i;
                        return r = Math.abs(this.velocity[t] * e * n), i = this.snap[t] !== !1, o = Math.abs(this.overshot[t] * n), u > r && !i || i && 1 > o
                    }, this.updateVelocity = function(e) {
                        return this.snap.x || (this.velocity.x = this.velocity.x * this.drag().x), this.snap.y || (this.velocity.y = this.velocity.y * this.drag().y), this.cutoffReached(e, "x", m) && (this.velocity.x = 0), this.cutoffReached(e, "y", s) ? this.velocity.y = 0 : void 0
                    }, this.step = function(e) {
                        var t, n;
                        return this.delta.x += t = this.velocity.x * e, this.delta.y += n = this.velocity.y * e, this.duration += e, this.updateVelocity(e), {
                            x: t,
                            y: n
                        }
                    }, this
            }, n
        }
    }, {}],
    70: [function(e, t) {
        var n, r, o, i;
        r = null != (o = null != (i = window.requestAnimationFrame) ? i : window[Reader.vendor + "RequestAnimationFrame"]) ? o : setTimeout, t.exports = n = function(e) {
            return r.apply(window, [e])
        }, n.testMode = function() {
            return r = function(e) {
                return e()
            }
        }
    }, {}],
    71: [function(e, t) {
        t.exports = function(e) {
            var t;
            return t = [e.pageX, e.pageY], e.x = t[0], e.y = t[1], e.element = e.currentTarget, e
        }
    }, {}],
    72: [function(e, t) {
        var n, r;
        r = e("./get_scroll_event_type.coffee"), n = r(), t.exports = function(e, t) {
            var r, o;
            return e = $(e)[0], r = null != (o = e._pbScrollHandlers) ? o : {}, $(e).off(n, r[t]), delete r[t]
        }
    }, {
        "./get_scroll_event_type.coffee": 65
    }],
    73: [function(e, t) {
        var n, r, o, i = [].slice;
        o = e("./normalize_click.coffee"), n = e("./custom_click_handler.coffee"), r = function() {
            var e, t, n;
            return t = arguments[0], n = 2 <= arguments.length ? i.call(arguments, 1) : [], t = $(t), e = n[n.length - 1], null != e ? (n[n.length - 1] = function(t) {
                return null == $(t.currentTarget).attr("disabled") ? e(o(t)) : void 0
            }, t.on.apply(t, ["click"].concat(n))) : void 0
        }, t.exports = Reader.Env.hasMouse ? r : n
    }, {
        "./custom_click_handler.coffee": 59,
        "./normalize_click.coffee": 71
    }],
    74: [function(e, t) {
        var n;
        n = e("./custom_click_handler.coffee"), t.exports = n
    }, {
        "./custom_click_handler.coffee": 59
    }],
    75: [function(e, t) {
        var n, r, o, i, u, a, l, s, c, f = [].slice;
        i = e("./distance.coffee"), s = e("./on_click.coffee"), l = e("./normalize_click.coffee"), o = Reader.Env.hasMouse ? 300 : 200, r = 100, c = function(e, t) {
            return t.timeStamp - e.timeStamp
        }, n = function() {
            var e, t, n, u, a, l, d;
            return t = arguments[0], l = 2 <= arguments.length ? f.call(arguments, 1) : [], t = $(t), e = l[l.length - 1], l.length > 1 && (d = l[0]), a = null, u = function(e) {
                return null != a && c(a, e) < o && i(a, e) < r
            }, n = function(t) {
                return u(t) ? (e(t), a = null) : a = t
            }, null != d ? s(t, d, n) : s(t, n), t.on("pbDblClick", d, function(t, n) {
                return e(n)
            })
        }, a = function() {
            var e, t, n;
            return t = arguments[0], n = 2 <= arguments.length ? f.call(arguments, 1) : [], t = $(t), e = n[n.length - 1], n[n.length - 1] = function(t) {
                return null == $(t.currentTarget).attr("disabled") ? e(l(t)) : void 0
            }, t.on.apply(t, ["dblclick"].concat(n))
        }, u = Reader.Env.hasMouse ? a : n, u.dblClickTime = o, t.exports = u
    }, {
        "./distance.coffee": 61,
        "./normalize_click.coffee": 71,
        "./on_click.coffee": 73
    }],
    76: [function(e, t) {
        var n, r, o, i, u, a;
        u = e("./get_scroll_event_type.coffee"), o = 0, n = 1, r = 2, i = u(), a = "DOMMouseScroll" === i ? function(e) {
            return function(t) {
                return 32768 === Math.abs(t.originalEvent.detail) ? $(document).height() : e
            }
        } : "mousewheel" === i ? function() {
            return function(e) {
                return 120 === Math.abs(e.originalEvent.wheelDelta) ? -0.5 : -1
            }
        } : function(e) {
            return function(t) {
                switch (t.originalEvent.deltaMode) {
                    case o:
                        return 1;
                    case n:
                        return e;
                    case r:
                        return $(document).height()
                }
            }
        }, t.exports = function(e, t) {
            var n, r, o, u, l;
            e = $(e);
            try {
                o = parseInt(e.css("line-height"))
            } catch (e) {
                r = e, o = 16
            }
            return isNaN(o) && (o = 16), l = a(o), u = function(e) {
                var n, r, o, i, u, a, s, c, f;
                return c = l(e), f = null != (o = e.originalEvent.wheelDeltaY) ? o : e.originalEvent.wheelDelta, r = (null != (i = e.originalEvent.deltaY) ? i : 0) * c || (null != f ? f : 0) * c || (null != (u = e.originalEvent.detail) ? u : 0) * c, n = (null != (a = e.originalEvent.deltaX) ? a : 0) * c || (null != (s = e.originalEvent.wheelDeltaX) ? s : 0) * c || 0, e.scrollDelta = {}, e.scrollDelta.x = n, e.scrollDelta.y = r, e.pageX = e.originalEvent.pageX, e.pageY = e.originalEvent.pageY, t(e)
            }, e.on(i, u), null == (n = e[0])._pbScrollHandlers && (n._pbScrollHandlers = {}), e[0]._pbScrollHandlers[t] = u
        }
    }, {
        "./get_scroll_event_type.coffee": 65
    }],
    77: [function(e, t) {
        t.exports = function() {
            var e, t;
            return e = {}, t = $("<div id='print'>"), $(document.body).append(t), e.setImageUrls = function(e) {
                var n, r, o;
                for ($("#print img").remove(), n = 0, r = e.length; r > n; n++) o = e[n], t.append("<img src='" + o + "'>");
                return 1 === e.length ? t.addClass("single") : t.removeClass("single")
            }, e
        }
    }, {}],
    78: [function(e, t) {
        var n, r;
        r = e("./next_frame.coffee"), t.exports = n = function(e) {
            var t, n, o, i, u;
            return e = $(e), e.length > 0 ? (t = {}, u = {}, o = function() {
                return e.css({
                    "-webkit-overflow-scrolling": "touch",
                    "overflow-y": "auto"
                }), (!Reader.Env.ios || u.contentHeight() > u.clipHeight() || u.contentWidth() > u.clipWidth()) && (e.on("scroll", n), e.on("touchmove", i)), u
            }, i = function(e) {
                return e.stopPropagation()
            }, n = function() {
                var e, n, r, o, i, a, l, s;
                for (i = [u.scrollLeft(), u.scrollTop()], r = i[0], s = i[1], l = null != (a = t.scroll) ? a : [], n = 0, o = l.length; o > n; n++) e = l[n], null != e && e(r, s);
                return setTimeout(function() {
                    var n, o, i, u, a;
                    for (u = null != (i = t.scrollEnd) ? i : [], a = [], n = 0, o = u.length; o > n; n++) e = u[n], null != e && a.push(e(r, s));
                    return a
                }, 50), !0
            }, u.scrollLeft = function() {
                return e[0].scrollLeft
            }, u.scrollTop = function() {
                return e[0].scrollTop
            }, u.contentHeight = function() {
                return e[0].scrollHeight
            }, u.clipHeight = function() {
                return e.height()
            }, u.contentWidth = function() {
                return e[0].scrollWidth
            }, u.clipWidth = function() {
                return e.width()
            }, u.refresh = function() {
                return u.destroy(), r(o)
            }, u.on = function(e, n) {
                return null == t[e] && (t[e] = []), t[e].push(n)
            }, u.scrollTo = function(t, r) {
                return null == t || isNaN(t) || (e[0].scrollLeft = -t), null == r || isNaN(r) || (e[0].scrollTop = -r), n()
            }, u.destroy = function() {
                return e.off("scroll", n), e.off("touchmove", i), e.css({
                    "-webkit-overflow-scrolling": "",
                    "overflow-y": ""
                })
            }, o()) : void 0
        }
    }, {
        "./next_frame.coffee": 70
    }],
    79: [function(e, t) {
        var n;
        n = e("./i18n.coffee"), t.exports = function(e, t) {
            var r;
            return null == t && (t = {}), r = $.extend({
                t: n
            }, t), e(r)
        }
    }, {
        "./i18n.coffee": 68
    }],
    80: [function(e, t) {
        t.exports = function(e) {
            return "//img.youtube.com/vi/" + e + "/0.jpg"
        }
    }, {}],
    81: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        var e, t, o, i;
                        n.push("<div class='dynamic-product-hotspot'><img src='"), n.push(r(this.photoUrls[0].full)), n.push('\' /><div class="description">'), n.push(r(this.description)), n.push("</div><h1>"), n.push(r(this.title)), n.push('</h1><div class=price><div class="container">'), this.discountedPrice && this.discountedPrice !== this.price && (n.push("<div class=original>"), n.push(r(this.price.toFixed(2))), n.push("</div>")), o = this.discountedPrice || this.price, i = o.toFixed(2).split("."), t = i[0], e = i[1], n.push("<span class='numeral'>"), n.push(r(t)), n.push("</span><span class='decimal-separator'>.</span><span class=cents>"), n.push(r(e)), n.push("</span></div></div></div>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    82: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div>"), this.feedbackReplyable && (n.push("<form action='/feedback'><div class='remarks'><textarea name=\"remarks\" placeholder=\""), n.push(r(this.t("feedback.placeholder"))), n.push('"></textarea><input type="email" name="email" id="email" placeholder=\''), n.push(r(this.t("feedback.email_placeholder"))), n.push(' \'><label for="remarks" id="email_label">'), n.push(this.t("feedback.email_label")), n.push('</label></div><div class="form-actions"><input type="submit"\n               value="'), n.push(r(this.t("feedback.submit_button_short"))), n.push('"></div><button type="submit">'), n.push(r(this.t("feedback.submit_button"))), n.push("</button></form>")), n.push('<div class="success-message"><span class="message">'), n.push(r(this.t("feedback.success_message"))), n.push('</span><span class="greetings">'), n.push(r(this.t("feedback.greetings_message"))), n.push('</span></div><div class="error-message"><span class="message">'), n.push(r(this.t("feedback.error_message"))), n.push("</span></div><div class='credits'><a href=\"https://www.publitas.com\" class='logo' target=\"_blank\"></a><p class='message'>This publication is published using Publitas.com software.</p><p class='disclaimer'>Â© Copyright "), n.push(r((new Date).getFullYear())), n.push(" Publitas.com B.V. All rights reserved.</p></div><div class='spinner'></div></div>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    83: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div id='flipper'></div><div class='hotspots layer zoomable-in'></div><div id='zoom_slider'></div>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    84: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        var e, t, o;
                        o = this.title, o || (o = null), "externalLink" === this.type ? (e = "external-link", null == o && (o = this.t("tooltip.external_link")), t = this.url) : "pageReference" === this.type ? (e = "page-reference", o = o ? o.replace("{page}", this.pageNumber) : this.t("tooltip.page_reference", {
                            page: this.pageNumber
                        })) : "video" === this.type ? (e = "video", null == o && (o = this.t("tooltip.video"))) : (e = "product", o = o ? o.replace("{first_product_title}", this.firstProductTitle) : this.t("tooltip.product")), this.showIndication && (e += " with-icon"), n.push("<div id='hotspot-"), n.push(r(this.id)), n.push("' class='hotspot-indicator "), n.push(r(e)), n.push("' data-id='"), n.push(r(this.id)), n.push("'><div class='hotspot-icon' style='left: "), n.push(r(100 * this.position.iconLeft)), n.push("%; top: "), n.push(r(100 * this.position.iconTop)), n.push('%\'><div class="hotspot-tooltip" data-id="'), n.push(r(this.id)), n.push("\"><a class='hotspot-action' href=\""), n.push(r(null != t ? t : "")), n.push('"><span>'), n.push(r(o)), n.push("</span></a><div class='tip'></div></div></div></div>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    85: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        var e, t, o;
                        if (n.push("<div class='slider'></div><div class='indicator'>"), this.photoUrls.length > 1)
                            for (e = t = 0, o = this.photoUrls.length; o >= 0 ? o > t : t > o; e = o >= 0 ? ++t : --t) n.push("<div class='dot "), n.push(r(0 === e ? "current" : "")), n.push("'></div>");
                        n.push("</div>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    86: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<li id='product-"), n.push(r(this.id)), n.push("' class=\"product-badge\" data-id='"), n.push(r(this.id)), n.push("' data-href=''><div class='content'><div class='thumb "), null != this.photoUrls && this.photoUrls.length > 0 || n.push(r("placeholder")), n.push("'>"), null != this.photoUrls && this.photoUrls.length > 0 ? (n.push('<img src="'), n.push(r(this.photoUrls[0].thumb)), n.push('">')) : null != this.video && (n.push('<img src="'), n.push(r(Reader.youtubeThumbnailUrl(this.video.youtubeId))), n.push('">')), n.push("</div><h1>"), n.push(r(this.title)), n.push("</h1><div class='overlay'></div></div></li>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    87: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<nav id='view_selector'><h2></h2></nav>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    88: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        var e, t;
                        this.href && (e = 'href="' + encodeURI(this.href) + '"'), this.target && (t = 'target="' + encodeURI(this.target) + '"'), n.push('<a data-href="'), n.push(r(this.name)), n.push('" '), n.push(r(this.safe(null != t ? t : ""))), n.push(r(this.safe(null != e ? e : ""))), n.push("><div class='icon'></div><div class='content'></div></a>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    89: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        var e, t, o, i, u;
                        if (n.push("<div id='product_"), n.push(r(this.id)), n.push("' class='product-view "), null == this.media && n.push(r("no-media")), n.push("'>"), (null != this.photoUrls || null != this.video) && (n.push("<div class='media-slider' data-product-id='"), n.push(r(this.id)), n.push("'></div>")), n.push("<div class='content-wrapper'><div class='content'>"), null != this.photoUrls && this.photoUrls.length > 0 && n.push("<section class='image-carousel'></section>"), n.push("<section class='summary'><h1>"), n.push(r(this.title)), n.push("</h1>"), this.enableInStockInfo && null != this.availability && (n.push('<div class="availability-state"><span>'), n.push(r(this.t("products.availability.title"))), n.push(': </span><span class="'), n.push(r(this.availability.replace(/\s+/g, "-"))), n.push('">'), n.push(r(this.t("products.availability." + this.availability.replace(/\s+/g, "_")))), n.push("</span></div>")), this.price && (n.push("<div class='price'>"), null != this.discountedPrice && this.discountedPrice !== this.price ? (n.push("<span class='old-price'>"), n.push(r(Reader.currencySymbol)), n.push(r(this.price.toFixed(2))), n.push("</span><span class='current-price'>"), n.push(r(Reader.currencySymbol)), n.push(r(this.discountedPrice.toFixed(2))), n.push("</span>")) : (n.push("<span class='current-price'>"), n.push(r(Reader.currencySymbol)), n.push(r(this.price.toFixed(2))), n.push("</span>")), n.push("</div>")), null != this.webshopUrl && (n.push("<a class='cta' data-href=\""), n.push(r(this.webshopUrl)), n.push('" href="'), n.push(r(this.webshopUrl)), n.push("\"><div class='cta-bg'></div><span class='cta-fg'>"), n.push(null != Reader.callToActionButtonText ? r(Reader.callToActionButtonText) : r(this.t("products.cta_webshop"))), n.push("</span></a>")), n.push("</section>"), null != this.photoUrls && this.photoUrls.length > 1 || null != this.photoUrls && null != this.video) {
                            for (n.push("<section class='media'><h2 class='section-title'>"), n.push(r(this.t("products.photos"))), n.push("</h2><ul>"), i = this.photoUrls, t = e = 0, o = i.length; o > e; t = ++e) u = i[t], n.push("<li class='photo'\n                data-index='"), n.push(r(t)), n.push("'\n                style=\"background-image: url('"), n.push(r(u.thumb)), n.push("')\"></li>");
                            n.push("</ul></section>")
                        }
                        null != this.video && (n.push("<section class='video'><h2 class='section-title'>"), n.push(r(this.t("products.video"))), n.push("</h2><a class='video-link'\n            title='"), n.push(r(this.t("cta.video"))), n.push("'\n            data-youtube-id='"), n.push(r(this.video.youtubeId)), n.push("'>"), n.push(r(this.t("cta.video"))), n.push("</a></section>")), null != this.description && (n.push("<section class='description'><h2 class='section-title'>"), n.push(r(this.t("products.description"))), n.push("</h2><p>"), n.push(this.description), n.push("</p></section>")), n.push("</div>"), this.disableSharing || n.push('<nav class=\'sharing\'><a id="facebook-button" data-href="/share/facebook"></a><a id="pintrest-button" data-href="/share/pintrest"></a><a id="twitter-button" data-href="/share/twitter"></a><a id="email-button" data-href="/share/email"></a></nav>'), n.push("</div></div>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    90: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div class='publitas-branding'><a href=\""), n.push(r(Reader.PublitasBranding.ctaUrl)), n.push('"\n     class=\'logo cta\'\n     target="_blank">powered by</a></div>\n')
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    91: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<span class='message'>"), n.push(r(this.message)), n.push("</span>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    92: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div class='result'><div class='page' style=\"width: "), n.push(r(this.width)), n.push("px; background-image: url('"), n.push(r(this.thumb)), n.push("')\"></div><div class='page-number'>"), n.push(r(this.t("page"))), n.push(r(" " + this.pageNumber)), n.push("</div><div class='text'>"), n.push(this.highlightedText), n.push("</div></div>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    93: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div class=\"search-view\"><!-- action and submit button are needed to get iOS8 to show the correct\n       keyboard with 'Search' as submit --><form action=\"#\" method=\"post\"><input type='search'\n           name='search'\n           autocomplete='off'\n           autocorrect='off'\n           autocapitalize='off'\n           placeholder='"), n.push(r(this.t("search.placeholder"))), n.push("'/><a class='clear'>âœ•</a><input type='submit' style=\"display: none\" value=\"Search\"></input></form><div class='scroll-wrapper'><div class='results'></div></div></div>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    94: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push('<nav class=\'sharing\'><a id="facebook-button" data-href="/share/facebook"><span>Facebook</span></a><a id="pintrest-button" data-href="/share/pintrest"><span>Pin It!</span></a><a id="twitter-button" data-href="/share/twitter"><span>Twitter</span></a><a id="email-button" data-href="/share/email"><span>Email</span></a></nav>\n')
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    95: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push('<div class="slide"><div class=\'loader\'></div><div class="content"></div></div>\n')
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    96: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div class='panel' tabindex='0'></div>\n\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    97: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div id='slider' class='slider'></div>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    98: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div class='spread-overview'><div class='scroll-wrapper'><ul class='list'></ul></div></div>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    99: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<li><div class='spread'><div class='images'></div><div class='overlay'></div><div class='pages'></div></div></li>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    100: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div class='video-view'><nav class='menu-bar'><a class='close' data-href='close'></a></nav></div>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    101: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push('<div class=\'youtube-player\'><iframe\n    id="foo"\n    type="text/html"\n    width="100%"\n    height=\'100%\'\n    src="//www.youtube-nocookie.com/embed/'), n.push(r(this.youtubeId)), n.push("?"), n.push(r(this.options)), n.push('"\n    allowfullscreen="1"\n    frameborder="0"\n  ></iframe><div class=\'cookie-consent\'>'), n.push(r(this.t("youtube_consent"))), n.push("</div></div>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    102: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div id='publication_wrapper'><div id='chrome'><a id='prev_slide' class='navButton'></a><a id='next_slide' class='navButton'></a><div id='progress_indicator'></div></div><div id=\"underlay\"></div><div id='left_cover_page'>"), this.branding && this.branding.logo && (n.push('<img src="'), n.push(r(this.branding.logo)), n.push("\" class='customer-logo' />")), n.push("</div><div id='right_cover_page'></div><div id='publication_content'></div><a data-href='open-publication' id='banner-cta'><div class='wrapper'><span class='cta-bg cta-fg'>"), n.push(r(this.t("open_embed"))), n.push("</span></div></a><div id='publitas_branding'></div><div id='embed_controls'></div></div><div id='zoom_controls'></div><a data-href='close-publication'>"), n.push(r(this.t("close_embed"))), n.push("</a>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    103: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push('<a href="'), n.push(r(Reader.PublitasBranding.ctaUrl)), n.push('"\n   target="_blank"\n   class="logo"></a><nav><a data-href="open">'), n.push(r(this.t("open_embed"))), n.push("</a></nav>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    104: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div id='reader'><div id='content'></div><div id='panel'></div><div id='main_menu'></div><div id='related_publications'></div><div id='popup'></div></div>\n\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    105: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div class='products-view'><nav class='menu-bar'><a class='close' data-href='close'></a></nav><div class='product-list'><ul></ul></div><div class='product-details'></div></div>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    106: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<span class='first-page'></span><span class='page-numbers'></span><span class='separator'>/</span><span class='total'></span><span class='last-page'></span>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    107: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        var e, t, o, i;
                        for (n.push("<h1>"), n.push(r(this.t("related_publications"))), n.push("</h1><ul>"), i = this.relatedPublications, e = 0, t = i.length; t > e; e++) o = i[e], n.push('<li><a href="'), n.push(r(o.url)), n.push('" data-id="'), n.push(r(o.id)), n.push('" title="'), n.push(r(o.title)), n.push('"><img src="'), n.push(r(o.coverImageUrl)), n.push('"/><section class="related-publications-container"><h2>'), n.push(r(o.title)), n.push("</h2>"), o.validFrom && o.offlineAt && (n.push("<p>"), n.push(r(this.formatDate(o.validFrom))), n.push(" - "), n.push(r(this.formatDate(o.offlineAt))), n.push("</p>")), n.push("</section></a></li>");
                        n.push("</ul>\n")
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    108: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("\n<div class='spread'><div class='slide-debug'></div><div id='panner'><div class='arrow top'></div><div class='arrow right'></div><div class='arrow bottom'></div><div class='arrow left'></div></div></div>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    109: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div class='spread'><img class='left'/><img class='right'/><div class='dynamic-hotspots'></div></div><div class=\"hotspots layer\"></div>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    110: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);

                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div id='slide_map'></div>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    111: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = e.safe,
                o = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, o || (o = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div class='products-view'><nav class='menu-bar'><a class='close' data-href='close'></a></nav><div class='product-list'><ul class='list'></ul></div><div class='product-details'></div></div>\n")
                    }).call(this)
                }.call(e), e.safe = r, e.escape = o, n.join("")
        }
    }, {}],
    112: [function(e, t) {
        t.exports = function(e) {
            e || (e = {});
            var t, n = [],
                r = function(e) {
                    return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? i(e) : ""
                },
                o = e.safe,
                i = e.escape;
            return t = e.safe = function(e) {
                    if (e && e.ecoSafe) return e;
                    ("undefined" == typeof e || null == e) && (e = "");
                    var t = new String(e);
                    return t.ecoSafe = !0, t
                }, i || (i = e.escape = function(e) {
                    return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }),
                function() {
                    (function() {
                        n.push("<div class='iframed-content'><nav class='menu-bar'><a class='close' data-href='close'></a></nav><div class='content'><div class='wrapper'><iframe src=\""), n.push(r(this.url)), n.push('"\n              width="'), n.push(r(this.width)), n.push('"\n              height="100%"\n              frameborder="0"></iframe></div></div></div>\n')
                    }).call(this)
                }.call(e), e.safe = o, e.escape = i, n.join("")
        }
    }, {}],
    113: [function(e, t) {
        "use strict";

        function n(e) {
            for (var t = !1, n = 0; n < e.length; n++) {
                var r = e.charAt(n);
                t && /[a-zA-Z]/.test(r) && r.toUpperCase() === r ? (e = e.substr(0, n) + "-" + e.substr(n), t = !1, n++) : t = r.toLowerCase() === r
            }
            return e
        }
        t.exports = function() {
            var e = [].map.call(arguments, function(e) {
                return e.trim()
            }).filter(function(e) {
                return e.length
            }).join("-");
            return e.length ? 1 === e.length ? e.toLowerCase() : /[_.\- ]+/.test(e) ? (e = n(e), e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, function(e, t) {
                return t.toUpperCase()
            })) : e === e.toUpperCase() ? e.toLowerCase() : e[0] !== e[0].toLowerCase() ? e[0].toLowerCase() + e.slice(1) : e : ""
        }
    }, {}],
    114: [function(e, t) {
        "use strict";
        t.exports = function(e, t) {
            if ("string" != typeof e) throw new TypeError("Expected a string");
            return t = "undefined" == typeof t ? "_" : t, e.replace(/([a-z\d])([A-Z])/g, "$1" + t + "$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + t + "$2").toLowerCase()
        }
    }, {}],
    115: [function(e, t) {
        ! function(e, n) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            "use strict";

            function n(e, t) {
                t = t || ne;
                var n = t.createElement("script");
                n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
            }

            function r(e) {
                var t = !!e && "length" in e && e.length,
                    n = ge.type(e);
                return "function" === n || ge.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }

            function o(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }

            function i(e, t, n) {
                return ge.isFunction(t) ? ge.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? ge.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? ge.grep(e, function(e) {
                    return ae.call(t, e) > -1 !== n
                }) : ke.test(t) ? ge.filter(t, e, n) : (t = ge.filter(t, e), ge.grep(e, function(e) {
                    return ae.call(t, e) > -1 !== n && 1 === e.nodeType
                }))
            }

            function u(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function a(e) {
                var t = {};
                return ge.each(e.match(Ne) || [], function(e, n) {
                    t[n] = !0
                }), t
            }

            function l(e) {
                return e
            }

            function s(e) {
                throw e
            }

            function c(e, t, n, r) {
                var o;
                try {
                    e && ge.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && ge.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }

            function f() {
                ne.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), ge.ready()
            }

            function d() {
                this.expando = ge.expando + d.uid++
            }

            function p(e) {
                return "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : e === +e + "" ? +e : He.test(e) ? JSON.parse(e) : e
            }

            function h(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(Fe, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                        try {
                            n = p(n)
                        } catch (e) {}
                        $e.set(e, t, n)
                    } else n = void 0;
                return n
            }

            function g(e, t, n, r) {
                var o, i = 1,
                    u = 20,
                    a = r ? function() {
                        return r.cur()
                    } : function() {
                        return ge.css(e, t, "")
                    },
                    l = a(),
                    s = n && n[3] || (ge.cssNumber[t] ? "" : "px"),
                    c = (ge.cssNumber[t] || "px" !== s && +l) && qe.exec(ge.css(e, t));
                if (c && c[3] !== s) {
                    s = s || c[3], n = n || [], c = +l || 1;
                    do i = i || ".5", c /= i, ge.style(e, t, c + s); while (i !== (i = a() / l) && 1 !== i && --u)
                }
                return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = s, r.start = c, r.end = o)), o
            }

            function v(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    o = We[r];
                return o ? o : (t = n.body.appendChild(n.createElement(r)), o = ge.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), We[r] = o, o)
            }

            function m(e, t) {
                for (var n, r, o = [], i = 0, u = e.length; u > i; i++) r = e[i], r.style && (n = r.style.display, t ? ("none" === n && (o[i] = Me.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && Oe(r) && (o[i] = v(r))) : "none" !== n && (o[i] = "none", Me.set(r, "display", n)));
                for (i = 0; u > i; i++) null != o[i] && (e[i].style.display = o[i]);
                return e
            }

            function y(e, t) {
                var n;
                return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? ge.merge([e], n) : n
            }

            function b(e, t) {
                for (var n = 0, r = e.length; r > n; n++) Me.set(e[n], "globalEval", !t || Me.get(t[n], "globalEval"))
            }

            function w(e, t, n, r, o) {
                for (var i, u, a, l, s, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; h > p; p++)
                    if (i = e[p], i || 0 === i)
                        if ("object" === ge.type(i)) ge.merge(d, i.nodeType ? [i] : i);
                        else if (Ge.test(i)) {
                    for (u = u || f.appendChild(t.createElement("div")), a = (Xe.exec(i) || ["", ""])[1].toLowerCase(), l = Ze[a] || Ze._default, u.innerHTML = l[1] + ge.htmlPrefilter(i) + l[2], c = l[0]; c--;) u = u.lastChild;
                    ge.merge(d, u.childNodes), u = f.firstChild, u.textContent = ""
                } else d.push(t.createTextNode(i));
                for (f.textContent = "", p = 0; i = d[p++];)
                    if (r && ge.inArray(i, r) > -1) o && o.push(i);
                    else if (s = ge.contains(i.ownerDocument, i), u = y(f.appendChild(i), "script"), s && b(u), n)
                    for (c = 0; i = u[c++];) Ye.test(i.type || "") && n.push(i);
                return f
            }

            function x() {
                return !0
            }

            function S() {
                return !1
            }

            function T() {
                try {
                    return ne.activeElement
                } catch (e) {}
            }

            function C(e, t, n, r, o, i) {
                var u, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n, n = void 0);
                    for (a in t) C(e, a, n, r, t[a], i);
                    return e
                }
                if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), o === !1) o = S;
                else if (!o) return e;
                return 1 === i && (u = o, o = function(e) {
                    return ge().off(e), u.apply(this, arguments)
                }, o.guid = u.guid || (u.guid = ge.guid++)), e.each(function() {
                    ge.event.add(this, t, o, r, n)
                })
            }

            function k(e, t) {
                return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? ge(">tbody", e)[0] || e : e
            }

            function _(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function E(e) {
                var t = ot.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function R(e, t) {
                var n, r, o, i, u, a, l, s;
                if (1 === t.nodeType) {
                    if (Me.hasData(e) && (i = Me.access(e), u = Me.set(t, i), s = i.events)) {
                        delete u.handle, u.events = {};
                        for (o in s)
                            for (n = 0, r = s[o].length; r > n; n++) ge.event.add(t, o, s[o][n])
                    }
                    $e.hasData(e) && (a = $e.access(e), l = ge.extend({}, a), $e.set(t, l))
                }
            }

            function j(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Ve.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }

            function z(e, t, r, o) {
                t = ie.apply([], t);
                var i, u, a, l, s, c, f = 0,
                    d = e.length,
                    p = d - 1,
                    h = t[0],
                    g = ge.isFunction(h);
                if (g || d > 1 && "string" == typeof h && !pe.checkClone && rt.test(h)) return e.each(function(n) {
                    var i = e.eq(n);
                    g && (t[0] = h.call(this, n, i.html())), z(i, t, r, o)
                });
                if (d && (i = w(t, e[0].ownerDocument, !1, e, o), u = i.firstChild, 1 === i.childNodes.length && (i = u), u || o)) {
                    for (a = ge.map(y(i, "script"), _), l = a.length; d > f; f++) s = i, f !== p && (s = ge.clone(s, !0, !0), l && ge.merge(a, y(s, "script"))), r.call(e[f], s, f);
                    if (l)
                        for (c = a[a.length - 1].ownerDocument, ge.map(a, E), f = 0; l > f; f++) s = a[f], Ye.test(s.type || "") && !Me.access(s, "globalEval") && ge.contains(c, s) && (s.src ? ge._evalUrl && ge._evalUrl(s.src) : n(s.textContent.replace(it, ""), c))
                }
                return e
            }

            function N(e, t, n) {
                for (var r, o = t ? ge.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || ge.cleanData(y(r)), r.parentNode && (n && ge.contains(r.ownerDocument, r) && b(y(r, "script")), r.parentNode.removeChild(r));
                return e
            }

            function A(e, t, n) {
                var r, o, i, u, a = e.style;
                return n = n || lt(e), n && (u = n.getPropertyValue(t) || n[t], "" !== u || ge.contains(e.ownerDocument, e) || (u = ge.style(e, t)), !pe.pixelMarginRight() && at.test(u) && ut.test(t) && (r = a.width, o = a.minWidth, i = a.maxWidth, a.minWidth = a.maxWidth = a.width = u, u = n.width, a.width = r, a.minWidth = o, a.maxWidth = i)), void 0 !== u ? u + "" : u
            }

            function I(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function P(e) {
                if (e in ht) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--;)
                    if (e = pt[n] + t, e in ht) return e
            }

            function D(e) {
                var t = ge.cssProps[e];
                return t || (t = ge.cssProps[e] = P(e) || e), t
            }

            function M(e, t, n) {
                var r = qe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function $(e, t, n, r, o) {
                var i, u = 0;
                for (i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; 4 > i; i += 2) "margin" === n && (u += ge.css(e, n + Be[i], !0, o)), r ? ("content" === n && (u -= ge.css(e, "padding" + Be[i], !0, o)), "margin" !== n && (u -= ge.css(e, "border" + Be[i] + "Width", !0, o))) : (u += ge.css(e, "padding" + Be[i], !0, o), "padding" !== n && (u += ge.css(e, "border" + Be[i] + "Width", !0, o)));
                return u
            }

            function H(e, t, n) {
                var r, o = lt(e),
                    i = A(e, t, o),
                    u = "border-box" === ge.css(e, "boxSizing", !1, o);
                return at.test(i) ? i : (r = u && (pe.boxSizingReliable() || i === e.style[t]), "auto" === i && (i = e["offset" + t[0].toUpperCase() + t.slice(1)]), i = parseFloat(i) || 0, i + $(e, t, n || (u ? "border" : "content"), r, o) + "px")
            }

            function F(e, t, n, r, o) {
                return new F.prototype.init(e, t, n, r, o)
            }

            function L() {
                vt && (ne.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(L) : e.setTimeout(L, ge.fx.interval), ge.fx.tick())
            }

            function q() {
                return e.setTimeout(function() {
                    gt = void 0
                }), gt = ge.now()
            }

            function B(e, t) {
                var n, r = 0,
                    o = {
                        height: e
                    };
                for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Be[r], o["margin" + n] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o
            }

            function O(e, t, n) {
                for (var r, o = (V.tweeners[t] || []).concat(V.tweeners["*"]), i = 0, u = o.length; u > i; i++)
                    if (r = o[i].call(n, t, e)) return r
            }

            function U(e, t, n) {
                var r, o, i, u, a, l, s, c, f = "width" in t || "height" in t,
                    d = this,
                    p = {},
                    h = e.style,
                    g = e.nodeType && Oe(e),
                    v = Me.get(e, "fxshow");
                n.queue || (u = ge._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
                    u.unqueued || a()
                }), u.unqueued++, d.always(function() {
                    d.always(function() {
                        u.unqueued--, ge.queue(e, "fx").length || u.empty.fire()
                    })
                }));
                for (r in t)
                    if (o = t[r], mt.test(o)) {
                        if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                            if ("show" !== o || !v || void 0 === v[r]) continue;
                            g = !0
                        }
                        p[r] = v && v[r] || ge.style(e, r)
                    }
                if (l = !ge.isEmptyObject(t), l || !ge.isEmptyObject(p)) {
                    f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], s = v && v.display, null == s && (s = Me.get(e, "display")), c = ge.css(e, "display"), "none" === c && (s ? c = s : (m([e], !0), s = e.style.display || s, c = ge.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != s) && "none" === ge.css(e, "float") && (l || (d.done(function() {
                        h.display = s
                    }), null == s && (c = h.display, s = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), l = !1;
                    for (r in p) l || (v ? "hidden" in v && (g = v.hidden) : v = Me.access(e, "fxshow", {
                        display: s
                    }), i && (v.hidden = !g), g && m([e], !0), d.done(function() {
                        g || m([e]), Me.remove(e, "fxshow");
                        for (r in p) ge.style(e, r, p[r])
                    })), l = O(g ? v[r] : 0, r, d), r in v || (v[r] = l.start, g && (l.end = l.start, l.start = 0))
                }
            }

            function W(e, t) {
                var n, r, o, i, u;
                for (n in e)
                    if (r = ge.camelCase(n), o = t[r], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), u = ge.cssHooks[r], u && "expand" in u) {
                        i = u.expand(i), delete e[r];
                        for (n in i) n in e || (e[n] = i[n], t[n] = o)
                    } else t[r] = o
            }

            function V(e, t, n) {
                var r, o, i = 0,
                    u = V.prefilters.length,
                    a = ge.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (o) return !1;
                        for (var t = gt || q(), n = Math.max(0, s.startTime + s.duration - t), r = n / s.duration || 0, i = 1 - r, u = 0, l = s.tweens.length; l > u; u++) s.tweens[u].run(i);
                        return a.notifyWith(e, [s, i, n]), 1 > i && l ? n : (l || a.notifyWith(e, [s, 1, 0]), a.resolveWith(e, [s]), !1)
                    },
                    s = a.promise({
                        elem: e,
                        props: ge.extend({}, t),
                        opts: ge.extend(!0, {
                            specialEasing: {},
                            easing: ge.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: gt || q(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = ge.Tween(e, s.opts, t, n, s.opts.specialEasing[t] || s.opts.easing);
                            return s.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? s.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; r > n; n++) s.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [s, 1, 0]), a.resolveWith(e, [s, t])) : a.rejectWith(e, [s, t]), this
                        }
                    }),
                    c = s.props;
                for (W(c, s.opts.specialEasing); u > i; i++)
                    if (r = V.prefilters[i].call(s, e, c, s.opts)) return ge.isFunction(r.stop) && (ge._queueHooks(s.elem, s.opts.queue).stop = ge.proxy(r.stop, r)), r;
                return ge.map(c, O, s), ge.isFunction(s.opts.start) && s.opts.start.call(e, s), s.progress(s.opts.progress).done(s.opts.done, s.opts.complete).fail(s.opts.fail).always(s.opts.always), ge.fx.timer(ge.extend(l, {
                    elem: e,
                    anim: s,
                    queue: s.opts.queue
                })), s
            }

            function X(e) {
                var t = e.match(Ne) || [];
                return t.join(" ")
            }

            function Y(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function Z(e, t, n, r) {
                var o;
                if (Array.isArray(t)) ge.each(t, function(t, o) {
                    n || Rt.test(e) ? r(e, o) : Z(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                });
                else if (n || "object" !== ge.type(t)) r(e, t);
                else
                    for (o in t) Z(e + "[" + o + "]", t[o], n, r)
            }

            function G(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, o = 0,
                        i = t.toLowerCase().match(Ne) || [];
                    if (ge.isFunction(n))
                        for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function J(e, t, n, r) {
                function o(a) {
                    var l;
                    return i[a] = !0, ge.each(e[a] || [], function(e, a) {
                        var s = a(t, n, r);
                        return "string" != typeof s || u || i[s] ? u ? !(l = s) : void 0 : (t.dataTypes.unshift(s), o(s), !1)
                    }), l
                }
                var i = {},
                    u = e === Lt;
                return o(t.dataTypes[0]) || !i["*"] && o("*")
            }

            function Q(e, t) {
                var n, r, o = ge.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                return r && ge.extend(!0, e, r), e
            }

            function K(e, t, n) {
                for (var r, o, i, u, a = e.contents, l = e.dataTypes;
                    "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (o in a)
                        if (a[o] && a[o].test(r)) {
                            l.unshift(o);
                            break
                        }
                if (l[0] in n) i = l[0];
                else {
                    for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                            i = o;
                            break
                        }
                        u || (u = o)
                    }
                    i = i || u
                }
                return i ? (i !== l[0] && l.unshift(i), n[i]) : void 0
            }

            function ee(e, t, n, r) {
                var o, i, u, a, l, s = {},
                    c = e.dataTypes.slice();
                if (c[1])
                    for (u in e.converters) s[u.toLowerCase()] = e.converters[u];
                for (i = c.shift(); i;)
                    if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift())
                        if ("*" === i) i = l;
                        else if ("*" !== l && l !== i) {
                    if (u = s[l + " " + i] || s["* " + i], !u)
                        for (o in s)
                            if (a = o.split(" "), a[1] === i && (u = s[l + " " + a[0]] || s["* " + a[0]])) {
                                u === !0 ? u = s[o] : s[o] !== !0 && (i = a[0], c.unshift(a[1]));
                                break
                            }
                    if (u !== !0)
                        if (u && e.throws) t = u(t);
                        else try {
                            t = u(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: u ? e : "No conversion from " + l + " to " + i
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }
            var te = [],
                ne = e.document,
                re = Object.getPrototypeOf,
                oe = te.slice,
                ie = te.concat,
                ue = te.push,
                ae = te.indexOf,
                le = {},
                se = le.toString,
                ce = le.hasOwnProperty,
                fe = ce.toString,
                de = fe.call(Object),
                pe = {},
                he = "3.2.1",
                ge = function(e, t) {
                    return new ge.fn.init(e, t)
                },
                ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                me = /^-ms-/,
                ye = /-([a-z])/g,
                be = function(e, t) {
                    return t.toUpperCase()
                };
            ge.fn = ge.prototype = {
                jquery: he,
                constructor: ge,
                length: 0,
                toArray: function() {
                    return oe.call(this)
                },
                get: function(e) {
                    return null == e ? oe.call(this) : 0 > e ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = ge.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return ge.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(ge.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(oe.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: ue,
                sort: te.sort,
                splice: te.splice
            }, ge.extend = ge.fn.extend = function() {
                var e, t, n, r, o, i, u = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    s = !1;
                for ("boolean" == typeof u && (s = u, u = arguments[a] || {}, a++), "object" == typeof u || ge.isFunction(u) || (u = {}), a === l && (u = this, a--); l > a; a++)
                    if (null != (e = arguments[a]))
                        for (t in e) n = u[t], r = e[t], u !== r && (s && r && (ge.isPlainObject(r) || (o = Array.isArray(r))) ? (o ? (o = !1, i = n && Array.isArray(n) ? n : []) : i = n && ge.isPlainObject(n) ? n : {}, u[t] = ge.extend(s, i, r)) : void 0 !== r && (u[t] = r));
                return u
            }, ge.extend({
                expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === ge.type(e)
                },
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = ge.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                },
                isPlainObject: function(e) {
                    var t, n;
                    return e && "[object Object]" === se.call(e) ? (t = re(e)) ? (n = ce.call(t, "constructor") && t.constructor, "function" == typeof n && fe.call(n) === de) : !0 : !1
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[se.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    n(e)
                },
                camelCase: function(e) {
                    return e.replace(me, "ms-").replace(ye, be)
                },
                each: function(e, t) {
                    var n, o = 0;
                    if (r(e))
                        for (n = e.length; n > o && t.call(e[o], o, e[o]) !== !1; o++);
                    else
                        for (o in e)
                            if (t.call(e[o], o, e[o]) === !1) break; return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(ve, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (r(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : ue.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : ae.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
                    return e.length = o, e
                },
                grep: function(e, t, n) {
                    for (var r, o = [], i = 0, u = e.length, a = !n; u > i; i++) r = !t(e[i], i), r !== a && o.push(e[i]);
                    return o
                },
                map: function(e, t, n) {
                    var o, i, u = 0,
                        a = [];
                    if (r(e))
                        for (o = e.length; o > u; u++) i = t(e[u], u, n), null != i && a.push(i);
                    else
                        for (u in e) i = t(e[u], u, n), null != i && a.push(i);
                    return ie.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, r, o;
                    return "string" == typeof t && (n = e[t], t = e, e = n), ge.isFunction(e) ? (r = oe.call(arguments, 2), o = function() {
                        return e.apply(t || this, r.concat(oe.call(arguments)))
                    }, o.guid = e.guid = e.guid || ge.guid++, o) : void 0
                },
                now: Date.now,
                support: pe
            }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = te[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                le["[object " + t + "]"] = t.toLowerCase()
            });
            var we = function(e) {
                function t(e, t, n, r) {
                    var o, i, u, a, l, s, c, d = t && t.ownerDocument,
                        h = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                    if (!r && ((t ? t.ownerDocument || t : q) !== I && A(t), t = t || I, D)) {
                        if (11 !== h && (l = me.exec(e)))
                            if (o = l[1]) {
                                if (9 === h) {
                                    if (!(u = t.getElementById(o))) return n;
                                    if (u.id === o) return n.push(u), n
                                } else if (d && (u = d.getElementById(o)) && F(t, u) && u.id === o) return n.push(u), n
                            } else {
                                if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                                if ((o = l[3]) && S.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), n
                            }
                        if (!(!S.qsa || V[e + " "] || M && M.test(e))) {
                            if (1 !== h) d = t, c = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((a = t.getAttribute("id")) ? a = a.replace(xe, Se) : t.setAttribute("id", a = L), s = _(e), i = s.length; i--;) s[i] = "#" + a + " " + p(s[i]);
                                c = s.join(","), d = ye.test(e) && f(t.parentNode) || t
                            }
                            if (c) try {
                                return Q.apply(n, d.querySelectorAll(c)), n
                            } catch (e) {} finally {
                                a === L && t.removeAttribute("id")
                            }
                        }
                    }
                    return R(e.replace(ae, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[L] = !0, e
                }

                function o(e) {
                    var t = I.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function i(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
                }

                function u(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function a(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function s(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t ? t.disabled === e : !1
                    }
                }

                function c(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, r) {
                            for (var o, i = e([], n.length, t), u = i.length; u--;) n[o = i[u]] && (n[o] = !(r[o] = n[o]))
                        })
                    })
                }

                function f(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function d() {}

                function p(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }

                function h(e, t, n) {
                    var r = t.dir,
                        o = t.next,
                        i = o || r,
                        u = n && "parentNode" === i,
                        a = O++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || u) return e(t, n, o);
                        return !1
                    } : function(t, n, l) {
                        var s, c, f, d = [B, a];
                        if (l) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || u) && e(t, n, l)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || u)
                                    if (f = t[L] || (t[L] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((s = c[i]) && s[0] === B && s[1] === a) return d[2] = s[2];
                                        if (c[i] = d, d[2] = e(t, n, l)) return !0
                                    } return !1
                    }
                }

                function g(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function v(e, n, r) {
                    for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
                    return r
                }

                function m(e, t, n, r, o) {
                    for (var i, u = [], a = 0, l = e.length, s = null != t; l > a; a++)(i = e[a]) && (!n || n(i, r, o)) && (u.push(i), s && t.push(a));
                    return u
                }

                function y(e, t, n, o, i, u) {
                    return o && !o[L] && (o = y(o)), i && !i[L] && (i = y(i, u)), r(function(r, u, a, l) {
                        var s, c, f, d = [],
                            p = [],
                            h = u.length,
                            g = r || v(t || "*", a.nodeType ? [a] : a, []),
                            y = !e || !r && t ? g : m(g, d, e, a, l),
                            b = n ? i || (r ? e : h || o) ? [] : u : y;
                        if (n && n(y, b, a, l), o)
                            for (s = m(b, p), o(s, [], a, l), c = s.length; c--;)(f = s[c]) && (b[p[c]] = !(y[p[c]] = f));
                        if (r) {
                            if (i || e) {
                                if (i) {
                                    for (s = [], c = b.length; c--;)(f = b[c]) && s.push(y[c] = f);
                                    i(null, b = [], s, l)
                                }
                                for (c = b.length; c--;)(f = b[c]) && (s = i ? ee(r, f) : d[c]) > -1 && (r[s] = !(u[s] = f))
                            }
                        } else b = m(b === u ? b.splice(h, b.length) : b), i ? i(null, u, b, l) : Q.apply(u, b)
                    })
                }

                function b(e) {
                    for (var t, n, r, o = e.length, i = T.relative[e[0].type], u = i || T.relative[" "], a = i ? 1 : 0, l = h(function(e) {
                            return e === t
                        }, u, !0), s = h(function(e) {
                            return ee(t, e) > -1
                        }, u, !0), c = [function(e, n, r) {
                            var o = !i && (r || n !== j) || ((t = n).nodeType ? l(e, n, r) : s(e, n, r));
                            return t = null, o
                        }]; o > a; a++)
                        if (n = T.relative[e[a].type]) c = [h(g(c), n)];
                        else {
                            if (n = T.filter[e[a].type].apply(null, e[a].matches), n[L]) {
                                for (r = ++a; o > r && !T.relative[e[r].type]; r++);
                                return y(a > 1 && g(c), a > 1 && p(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(ae, "$1"), n, r > a && b(e.slice(a, r)), o > r && b(e = e.slice(r)), o > r && p(e))
                            }
                            c.push(n)
                        }
                    return g(c)
                }

                function w(e, n) {
                    var o = n.length > 0,
                        i = e.length > 0,
                        u = function(r, u, a, l, s) {
                            var c, f, d, p = 0,
                                h = "0",
                                g = r && [],
                                v = [],
                                y = j,
                                b = r || i && T.find.TAG("*", s),
                                w = B += null == y ? 1 : Math.random() || .1,
                                x = b.length;
                            for (s && (j = u === I || u || s); h !== x && null != (c = b[h]); h++) {
                                if (i && c) {
                                    for (f = 0, u || c.ownerDocument === I || (A(c), a = !D); d = e[f++];)
                                        if (d(c, u || I, a)) {
                                            l.push(c);
                                            break
                                        }
                                    s && (B = w)
                                }
                                o && ((c = !d && c) && p--, r && g.push(c))
                            }
                            if (p += h, o && h !== p) {
                                for (f = 0; d = n[f++];) d(g, v, u, a);
                                if (r) {
                                    if (p > 0)
                                        for (; h--;) g[h] || v[h] || (v[h] = G.call(l));
                                    v = m(v)
                                }
                                Q.apply(l, v), s && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                            }
                            return s && (B = w, j = y), g
                        };
                    return o ? r(u) : u
                }
                var x, S, T, C, k, _, E, R, j, z, N, A, I, P, D, M, $, H, F, L = "sizzle" + 1 * new Date,
                    q = e.document,
                    B = 0,
                    O = 0,
                    U = n(),
                    W = n(),
                    V = n(),
                    X = function(e, t) {
                        return e === t && (N = !0), 0
                    },
                    Y = {}.hasOwnProperty,
                    Z = [],
                    G = Z.pop,
                    J = Z.push,
                    Q = Z.push,
                    K = Z.slice,
                    ee = function(e, t) {
                        for (var n = 0, r = e.length; r > n; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
                    oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                    ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                    ue = new RegExp(ne + "+", "g"),
                    ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    le = new RegExp("^" + ne + "*," + ne + "*"),
                    se = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    fe = new RegExp(ie),
                    de = new RegExp("^" + re + "$"),
                    pe = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re + "|[*])"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + ie),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /^(?:input|select|textarea|button)$/i,
                    ge = /^h\d$/i,
                    ve = /^[^{]+\{\s*\[native \w/,
                    me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ye = /[+~]/,
                    be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    we = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    Se = function(e, t) {
                        return t ? "\x00" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    Te = function() {
                        A()
                    },
                    Ce = h(function(e) {
                        return e.disabled === !0 && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    Q.apply(Z = K.call(q.childNodes), q.childNodes), Z[q.childNodes.length].nodeType
                } catch (e) {
                    Q = {
                        apply: Z.length ? function(e, t) {
                            J.apply(e, K.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                S = t.support = {}, k = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, A = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : q;
                    return r !== I && 9 === r.nodeType && r.documentElement ? (I = r, P = I.documentElement, D = !k(I), q !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), S.attributes = o(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), S.getElementsByTagName = o(function(e) {
                        return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                    }), S.getElementsByClassName = ve.test(I.getElementsByClassName), S.getById = o(function(e) {
                        return P.appendChild(e).id = L, !I.getElementsByName || !I.getElementsByName(L).length
                    }), S.getById ? (T.filter.ID = function(e) {
                        var t = e.replace(be, we);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, T.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && D) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (T.filter.ID = function(e) {
                        var t = e.replace(be, we);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, T.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && D) {
                            var n, r, o, i = t.getElementById(e);
                            if (i) {
                                if (n = i.getAttributeNode("id"), n && n.value === e) return [i];
                                for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                    if (n = i.getAttributeNode("id"), n && n.value === e) return [i]
                            }
                            return []
                        }
                    }), T.find.TAG = S.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : S.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return i
                    }, T.find.CLASS = S.getElementsByClassName && function(e, t) {
                        return "undefined" != typeof t.getElementsByClassName && D ? t.getElementsByClassName(e) : void 0
                    }, $ = [], M = [], (S.qsa = ve.test(I.querySelectorAll)) && (o(function(e) {
                        P.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + L + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || M.push(".#.+[+~]")
                    }), o(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = I.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), P.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                    })), (S.matchesSelector = ve.test(H = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(e) {
                        S.disconnectedMatch = H.call(e, "*"), H.call(e, "[s!='']:x"), $.push("!=", ie)
                    }), M = M.length && new RegExp(M.join("|")), $ = $.length && new RegExp($.join("|")), t = ve.test(P.compareDocumentPosition), F = t || ve.test(P.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, X = t ? function(e, t) {
                        if (e === t) return N = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !S.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === q && F(q, e) ? -1 : t === I || t.ownerDocument === q && F(q, t) ? 1 : z ? ee(z, e) - ee(z, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return N = !0, 0;
                        var n, r = 0,
                            o = e.parentNode,
                            i = t.parentNode,
                            a = [e],
                            l = [t];
                        if (!o || !i) return e === I ? -1 : t === I ? 1 : o ? -1 : i ? 1 : z ? ee(z, e) - ee(z, t) : 0;
                        if (o === i) return u(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; a[r] === l[r];) r++;
                        return r ? u(a[r], l[r]) : a[r] === q ? -1 : l[r] === q ? 1 : 0
                    }, I) : I
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== I && A(e), n = n.replace(ce, "='$1']"), !(!S.matchesSelector || !D || V[n + " "] || $ && $.test(n) || M && M.test(n))) try {
                        var r = H.call(e, n);
                        if (r || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {}
                    return t(n, I, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== I && A(e), F(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== I && A(e);
                    var n = T.attrHandle[t.toLowerCase()],
                        r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
                    return void 0 !== r ? r : S.attributes || !D ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.escape = function(e) {
                    return (e + "").replace(xe, Se)
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        o = 0;
                    if (N = !S.detectDuplicates, z = !S.sortStable && e.slice(0), e.sort(X), N) {
                        for (; t = e[o++];) t === e[o] && (r = n.push(o));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return z = null, e
                }, C = t.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += C(t);
                    return n
                }, T = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: pe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(be, we).toLowerCase();

                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = U[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, r) {
                            return function(o) {
                                var i = t.attr(o, e);
                                return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(ue, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, r, o) {
                            var i = "nth" !== e.slice(0, 3),
                                u = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === r && 0 === o ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var s, c, f, d, p, h, g = i !== u ? "nextSibling" : "previousSibling",
                                    v = t.parentNode,
                                    m = a && t.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    b = !1;
                                if (v) {
                                    if (i) {
                                        for (; g;) {
                                            for (d = t; d = d[g];)
                                                if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [u ? v.firstChild : v.lastChild], u && y) {
                                        for (d = v, f = d[L] || (d[L] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), s = c[e] || [], p = s[0] === B && s[1], b = p && s[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                            if (1 === d.nodeType && ++b && d === t) {
                                                c[e] = [B, p, b];
                                                break
                                            }
                                    } else if (y && (d = t, f = d[L] || (d[L] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), s = c[e] || [], p = s[0] === B && s[1], b = p), b === !1)
                                        for (;
                                            (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && (f = d[L] || (d[L] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [B, b]), d !== t)););
                                    return b -= o, b === r || b % r === 0 && b / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var o, i = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return i[L] ? i(n) : i.length > 1 ? (o = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, o = i(e, n), u = o.length; u--;) r = ee(e, o[u]), e[r] = !(t[r] = o[u])
                            }) : function(e) {
                                return i(e, 0, o)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = [],
                                n = [],
                                o = E(e.replace(ae, "$1"));
                            return o[L] ? r(function(e, t, n, r) {
                                for (var i, u = o(e, null, r, []), a = e.length; a--;)(i = u[a]) && (e[a] = !(t[a] = i))
                            }) : function(e, r, i) {
                                return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: r(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function(e) {
                            return e = e.replace(be, we),
                                function(t) {
                                    return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                }
                        }),
                        lang: r(function(e) {
                            return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === P
                        },
                        focus: function(e) {
                            return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: s(!1),
                        disabled: s(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ge.test(e.nodeName)
                        },
                        input: function(e) {
                            return he.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, T.pseudos.nth = T.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) T.pseudos[x] = a(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) T.pseudos[x] = l(x);
                return d.prototype = T.filters = T.pseudos, T.setFilters = new d, _ = t.tokenize = function(e, n) {
                    var r, o, i, u, a, l, s, c = W[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (a = e, l = [], s = T.preFilter; a;) {
                        (!r || (o = le.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(i = [])), r = !1, (o = se.exec(a)) && (r = o.shift(), i.push({
                            value: r,
                            type: o[0].replace(ae, " ")
                        }), a = a.slice(r.length));
                        for (u in T.filter) !(o = pe[u].exec(a)) || s[u] && !(o = s[u](o)) || (r = o.shift(), i.push({
                            value: r,
                            type: u,
                            matches: o
                        }), a = a.slice(r.length));
                        if (!r) break
                    }
                    return n ? a.length : a ? t.error(e) : W(e, l).slice(0)
                }, E = t.compile = function(e, t) {
                    var n, r = [],
                        o = [],
                        i = V[e + " "];
                    if (!i) {
                        for (t || (t = _(e)), n = t.length; n--;) i = b(t[n]), i[L] ? r.push(i) : o.push(i);
                        i = V(e, w(o, r)), i.selector = e
                    }
                    return i
                }, R = t.select = function(e, t, n, r) {
                    var o, i, u, a, l, s = "function" == typeof e && e,
                        c = !r && _(e = s.selector || e);
                    if (n = n || [], 1 === c.length) {
                        if (i = c[0] = c[0].slice(0), i.length > 2 && "ID" === (u = i[0]).type && 9 === t.nodeType && D && T.relative[i[1].type]) {
                            if (t = (T.find.ID(u.matches[0].replace(be, we), t) || [])[0], !t) return n;
                            s && (t = t.parentNode), e = e.slice(i.shift().value.length)
                        }
                        for (o = pe.needsContext.test(e) ? 0 : i.length; o-- && (u = i[o], !T.relative[a = u.type]);)
                            if ((l = T.find[a]) && (r = l(u.matches[0].replace(be, we), ye.test(i[0].type) && f(t.parentNode) || t))) {
                                if (i.splice(o, 1), e = r.length && p(i), !e) return Q.apply(n, r), n;
                                break
                            }
                    }
                    return (s || E(e, c))(r, t, !D, n, !t || ye.test(e) && f(t.parentNode) || t), n
                }, S.sortStable = L.split("").sort(X).join("") === L, S.detectDuplicates = !!N, A(), S.sortDetached = o(function(e) {
                    return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
                }), o(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || i("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), S.attributes && o(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || i("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), o(function(e) {
                    return null == e.getAttribute("disabled")
                }) || i(te, function(e, t, n) {
                    var r;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(e);
            ge.find = we, ge.expr = we.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = we.uniqueSort, ge.text = we.getText, ge.isXMLDoc = we.isXML, ge.contains = we.contains, ge.escapeSelector = we.escape;
            var xe = function(e, t, n) {
                    for (var r = [], o = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && ge(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                Se = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                Te = ge.expr.match.needsContext,
                Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                ke = /^.[^:#\[\.,]*$/;
            ge.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ge.find.matchesSelector(r, e) ? [r] : [] : ge.find.matches(e, ge.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, ge.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        o = this;
                    if ("string" != typeof e) return this.pushStack(ge(e).filter(function() {
                        for (t = 0; r > t; t++)
                            if (ge.contains(o[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; r > t; t++) ge.find(e, o[t], n);
                    return r > 1 ? ge.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(i(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(i(this, e || [], !0))
                },
                is: function(e) {
                    return !!i(this, "string" == typeof e && Te.test(e) ? ge(e) : e || [], !1).length
                }
            });
            var _e, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                Re = ge.fn.init = function(e, t, n) {
                    var r, o;
                    if (!e) return this;
                    if (n = n || _e, "string" == typeof e) {
                        if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Ce.test(r[1]) && ge.isPlainObject(t))
                                for (r in t) ge.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return o = ne.getElementById(r[2]), o && (this[0] = o, this.length = 1), this
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ge) : ge.makeArray(e, this)
                };
            Re.prototype = ge.fn, _e = ge(ne);
            var je = /^(?:parents|prev(?:Until|All))/,
                ze = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            ge.fn.extend({
                has: function(e) {
                    var t = ge(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; n > e; e++)
                            if (ge.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        o = this.length,
                        i = [],
                        u = "string" != typeof e && ge(e);
                    if (!Te.test(e))
                        for (; o > r; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (u ? u.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break
                                }
                    return this.pushStack(i.length > 1 ? ge.uniqueSort(i) : i)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? ae.call(ge(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), ge.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return xe(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return xe(e, "parentNode", n)
                },
                next: function(e) {
                    return u(e, "nextSibling")
                },
                prev: function(e) {
                    return u(e, "previousSibling")
                },
                nextAll: function(e) {
                    return xe(e, "nextSibling")
                },
                prevAll: function(e) {
                    return xe(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return xe(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return xe(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return Se((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return Se(e.firstChild)
                },
                contents: function(e) {
                    return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), ge.merge([], e.childNodes))
                }
            }, function(e, t) {
                ge.fn[e] = function(n, r) {
                    var o = ge.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = ge.filter(r, o)), this.length > 1 && (ze[e] || ge.uniqueSort(o), je.test(e) && o.reverse()), this.pushStack(o)
                }
            });
            var Ne = /[^\x20\t\r\n\f]+/g;
            ge.Callbacks = function(e) {
                e = "string" == typeof e ? a(e) : ge.extend({}, e);
                var t, n, r, o, i = [],
                    u = [],
                    l = -1,
                    s = function() {
                        for (o = o || e.once, r = t = !0; u.length; l = -1)
                            for (n = u.shift(); ++l < i.length;) i[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = i.length, n = !1);
                        e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
                    },
                    c = {
                        add: function() {
                            return i && (n && !t && (l = i.length - 1, u.push(n)), function t(n) {
                                ge.each(n, function(n, r) {
                                    ge.isFunction(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && "string" !== ge.type(r) && t(r)
                                })
                            }(arguments), n && !t && s()), this
                        },
                        remove: function() {
                            return ge.each(arguments, function(e, t) {
                                for (var n;
                                    (n = ge.inArray(t, i, n)) > -1;) i.splice(n, 1), l >= n && l--
                            }), this
                        },
                        has: function(e) {
                            return e ? ge.inArray(e, i) > -1 : i.length > 0
                        },
                        empty: function() {
                            return i && (i = []), this
                        },
                        disable: function() {
                            return o = u = [], i = n = "", this
                        },
                        disabled: function() {
                            return !i
                        },
                        lock: function() {
                            return o = u = [], n || t || (i = n = ""), this
                        },
                        locked: function() {
                            return !!o
                        },
                        fireWith: function(e, n) {
                            return o || (n = n || [], n = [e, n.slice ? n.slice() : n], u.push(n), t || s()), this
                        },
                        fire: function() {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return c
            }, ge.extend({
                Deferred: function(t) {
                    var n = [
                            ["notify", "progress", ge.Callbacks("memory"), ge.Callbacks("memory"), 2],
                            ["resolve", "done", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        o = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return o.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return ge.Deferred(function(t) {
                                    ge.each(n, function(n, r) {
                                        var o = ge.isFunction(e[r[4]]) && e[r[4]];
                                        i[r[1]](function() {
                                            var e = o && o.apply(this, arguments);
                                            e && ge.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(t, r, o) {
                                function i(t, n, r, o) {
                                    return function() {
                                        var a = this,
                                            c = arguments,
                                            f = function() {
                                                var e, f;
                                                if (!(u > t)) {
                                                    if (e = r.apply(a, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    f = e && ("object" == typeof e || "function" == typeof e) && e.then, ge.isFunction(f) ? o ? f.call(e, i(u, n, l, o), i(u, n, s, o)) : (u++, f.call(e, i(u, n, l, o), i(u, n, s, o), i(u, n, l, n.notifyWith))) : (r !== l && (a = void 0, c = [e]), (o || n.resolveWith)(a, c))
                                                }
                                            },
                                            d = o ? f : function() {
                                                try {
                                                    f()
                                                } catch (e) {
                                                    ge.Deferred.exceptionHook && ge.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= u && (r !== s && (a = void 0, c = [e]), n.rejectWith(a, c))
                                                }
                                            };
                                        t ? d() : (ge.Deferred.getStackHook && (d.stackTrace = ge.Deferred.getStackHook()), e.setTimeout(d))
                                    }
                                }
                                var u = 0;
                                return ge.Deferred(function(e) {
                                    n[0][3].add(i(0, e, ge.isFunction(o) ? o : l, e.notifyWith)), n[1][3].add(i(0, e, ge.isFunction(t) ? t : l)), n[2][3].add(i(0, e, ge.isFunction(r) ? r : s))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? ge.extend(e, o) : o
                            }
                        },
                        i = {};
                    return ge.each(n, function(e, t) {
                        var u = t[2],
                            a = t[5];
                        o[t[1]] = u.add, a && u.add(function() {
                            r = a
                        }, n[3 - e][2].disable, n[0][2].lock), u.add(t[3].fire), i[t[0]] = function() {
                            return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
                        }, i[t[0] + "With"] = u.fireWith
                    }), o.promise(i), t && t.call(i, i), i
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        o = oe.call(arguments),
                        i = ge.Deferred(),
                        u = function(e) {
                            return function(n) {
                                r[e] = this, o[e] = arguments.length > 1 ? oe.call(arguments) : n, --t || i.resolveWith(r, o)
                            }
                        };
                    if (1 >= t && (c(e, i.done(u(n)).resolve, i.reject, !t), "pending" === i.state() || ge.isFunction(o[n] && o[n].then))) return i.then();
                    for (; n--;) c(o[n], u(n), i.reject);
                    return i.promise()
                }
            });
            var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            ge.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }, ge.readyException = function(t) {
                e.setTimeout(function() {
                    throw t
                })
            };
            var Ie = ge.Deferred();
            ge.fn.ready = function(e) {
                return Ie.then(e).catch(function(e) {
                    ge.readyException(e)
                }), this
            }, ge.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (e === !0 ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, e !== !0 && --ge.readyWait > 0 || Ie.resolveWith(ne, [ge]))
                }
            }), ge.ready.then = Ie.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(ge.ready) : (ne.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
            var Pe = function(e, t, n, r, o, i, u) {
                    var a = 0,
                        l = e.length,
                        s = null == n;
                    if ("object" === ge.type(n)) {
                        o = !0;
                        for (a in n) Pe(e, t, a, n[a], !0, i, u)
                    } else if (void 0 !== r && (o = !0, ge.isFunction(r) || (u = !0), s && (u ? (t.call(e, r), t = null) : (s = t, t = function(e, t, n) {
                            return s.call(ge(e), n)
                        })), t))
                        for (; l > a; a++) t(e[a], n, u ? r : r.call(e[a], a, t(e[a], n)));
                    return o ? e : s ? t.call(e) : l ? t(e[0], n) : i
                },
                De = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
            d.uid = 1, d.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, De(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, o = this.cache(e);
                    if ("string" == typeof t) o[ge.camelCase(t)] = n;
                    else
                        for (r in t) o[ge.camelCase(r)] = t[r];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ge.camelCase(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            Array.isArray(t) ? t = t.map(ge.camelCase) : (t = ge.camelCase(t), t = t in r ? [t] : t.match(Ne) || []), n = t.length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || ge.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !ge.isEmptyObject(t)
                }
            };
            var Me = new d,
                $e = new d,
                He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Fe = /[A-Z]/g;
            ge.extend({
                hasData: function(e) {
                    return $e.hasData(e) || Me.hasData(e)
                },
                data: function(e, t, n) {
                    return $e.access(e, t, n)
                },
                removeData: function(e, t) {
                    $e.remove(e, t)
                },
                _data: function(e, t, n) {
                    return Me.access(e, t, n)
                },
                _removeData: function(e, t) {
                    Me.remove(e, t)
                }
            }), ge.fn.extend({
                data: function(e, t) {
                    var n, r, o, i = this[0],
                        u = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = $e.get(i), 1 === i.nodeType && !Me.get(i, "hasDataAttrs"))) {
                            for (n = u.length; n--;) u[n] && (r = u[n].name, 0 === r.indexOf("data-") && (r = ge.camelCase(r.slice(5)), h(i, r, o[r])));
                            Me.set(i, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        $e.set(this, e)
                    }) : Pe(this, function(t) {
                        var n;
                        if (i && void 0 === t) {
                            if (n = $e.get(i, e), void 0 !== n) return n;
                            if (n = h(i, e), void 0 !== n) return n
                        } else this.each(function() {
                            $e.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        $e.remove(this, e)
                    })
                }
            }), ge.extend({
                queue: function(e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = Me.get(e, t), n && (!r || Array.isArray(n) ? r = Me.access(e, t, ge.makeArray(n)) : r.push(n)), r || []) : void 0
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = ge.queue(e, t),
                        r = n.length,
                        o = n.shift(),
                        i = ge._queueHooks(e, t),
                        u = function() {
                            ge.dequeue(e, t)
                        };
                    "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, u, i)), !r && i && i.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return Me.get(e, n) || Me.access(e, n, {
                        empty: ge.Callbacks("once memory").add(function() {
                            Me.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), ge.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = ge.queue(this, e, t);
                        ge._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        ge.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        o = ge.Deferred(),
                        i = this,
                        u = this.length,
                        a = function() {
                            --r || o.resolveWith(i, [i])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; u--;) n = Me.get(i[u], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
                    return a(), o.promise(t)
                }
            });
            var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                qe = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
                Be = ["Top", "Right", "Bottom", "Left"],
                Oe = function(e, t) {
                    return e = t || e, "none" === e.style.display || "" === e.style.display && ge.contains(e.ownerDocument, e) && "none" === ge.css(e, "display")
                },
                Ue = function(e, t, n, r) {
                    var o, i, u = {};
                    for (i in t) u[i] = e.style[i], e.style[i] = t[i];
                    o = n.apply(e, r || []);
                    for (i in t) e.style[i] = u[i];
                    return o
                },
                We = {};
            ge.fn.extend({
                show: function() {
                    return m(this, !0)
                },
                hide: function() {
                    return m(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Oe(this) ? ge(this).show() : ge(this).hide()
                    })
                }
            });
            var Ve = /^(?:checkbox|radio)$/i,
                Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                Ye = /^$|\/(?:java|ecma)script/i,
                Ze = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td;
            var Ge = /<|&#?\w+;/;
            ! function() {
                var e = ne.createDocumentFragment(),
                    t = e.appendChild(ne.createElement("div")),
                    n = ne.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var Je = ne.documentElement,
                Qe = /^key/,
                Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                et = /^([^.]*)(?:\.(.+)|)/;
            ge.event = {
                global: {},
                add: function(e, t, n, r, o) {
                    var i, u, a, l, s, c, f, d, p, h, g, v = Me.get(e);
                    if (v)
                        for (n.handler && (i = n, n = i.handler, o = i.selector), o && ge.find.matchesSelector(Je, o), n.guid || (n.guid = ge.guid++), (l = v.events) || (l = v.events = {}), (u = v.handle) || (u = v.handle = function(t) {
                                return "undefined" != typeof ge && ge.event.triggered !== t.type ? ge.event.dispatch.apply(e, arguments) : void 0
                            }), t = (t || "").match(Ne) || [""], s = t.length; s--;) a = et.exec(t[s]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (f = ge.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = ge.event.special[p] || {}, c = ge.extend({
                            type: p,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && ge.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, i), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, u) !== !1 || e.addEventListener && e.addEventListener(p, u)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), ge.event.global[p] = !0)
                },
                remove: function(e, t, n, r, o) {
                    var i, u, a, l, s, c, f, d, p, h, g, v = Me.hasData(e) && Me.get(e);
                    if (v && (l = v.events)) {
                        for (t = (t || "").match(Ne) || [""], s = t.length; s--;)
                            if (a = et.exec(t[s]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                                for (f = ge.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = i = d.length; i--;) c = d[i], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                                u && !d.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || ge.removeEvent(e, p, v.handle), delete l[p])
                            } else
                                for (p in l) ge.event.remove(e, p + t[s], n, r, !0);
                        ge.isEmptyObject(l) && Me.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, o, i, u, a = ge.event.fix(e),
                        l = new Array(arguments.length),
                        s = (Me.get(this, "events") || {})[a.type] || [],
                        c = ge.event.special[a.type] || {};
                    for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                    if (a.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, a) !== !1) {
                        for (u = ge.event.handlers.call(this, a, s), t = 0;
                            (o = u[t++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = o.elem, n = 0;
                                (i = o.handlers[n++]) && !a.isImmediatePropagationStopped();)(!a.rnamespace || a.rnamespace.test(i.namespace)) && (a.handleObj = i, a.data = i.data, r = ((ge.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), void 0 !== r && (a.result = r) === !1 && (a.preventDefault(), a.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, o, i, u, a = [],
                        l = t.delegateCount,
                        s = e.target;
                    if (l && s.nodeType && !("click" === e.type && e.button >= 1))
                        for (; s !== this; s = s.parentNode || this)
                            if (1 === s.nodeType && ("click" !== e.type || s.disabled !== !0)) {
                                for (i = [], u = {}, n = 0; l > n; n++) r = t[n], o = r.selector + " ", void 0 === u[o] && (u[o] = r.needsContext ? ge(o, this).index(s) > -1 : ge.find(o, this, null, [s]).length), u[o] && i.push(r);
                                i.length && a.push({
                                    elem: s,
                                    handlers: i
                                })
                            }
                    return s = this, l < t.length && a.push({
                        elem: s,
                        handlers: t.slice(l)
                    }), a
                },
                addProp: function(e, t) {
                    Object.defineProperty(ge.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: ge.isFunction(t) ? function() {
                            return this.originalEvent ? t(this.originalEvent) : void 0
                        } : function() {
                            return this.originalEvent ? this.originalEvent[e] : void 0
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[ge.expando] ? e : new ge.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== T() && this.focus ? (this.focus(), !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === T() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && o(this, "input") ? (this.click(), !1) : void 0
                        },
                        _default: function(e) {
                            return o(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, ge.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, ge.Event = function(e, t) {
                return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? x : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void(this[ge.expando] = !0)) : new ge.Event(e, t)
            }, ge.Event.prototype = {
                constructor: ge.Event,
                isDefaultPrevented: S,
                isPropagationStopped: S,
                isImmediatePropagationStopped: S,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, ge.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, ge.event.addProp), ge.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                ge.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            o = e.relatedTarget,
                            i = e.handleObj;
                        return (!o || o !== r && !ge.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), ge.fn.extend({
                on: function(e, t, n, r) {
                    return C(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return C(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ge(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = S), this.each(function() {
                        ge.event.remove(this, e, n, t)
                    })
                }
            });
            var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                nt = /<script|<style|<link/i,
                rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                ot = /^true\/(.*)/,
                it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            ge.extend({
                htmlPrefilter: function(e) {
                    return e.replace(tt, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, o, i, u, a = e.cloneNode(!0),
                        l = ge.contains(e.ownerDocument, e);
                    if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                        for (u = y(a), i = y(e), r = 0, o = i.length; o > r; r++) j(i[r], u[r]);
                    if (t)
                        if (n)
                            for (i = i || y(e), u = u || y(a), r = 0, o = i.length; o > r; r++) R(i[r], u[r]);
                        else R(e, a);
                    return u = y(a, "script"), u.length > 0 && b(u, !l && y(e, "script")), a
                },
                cleanData: function(e) {
                    for (var t, n, r, o = ge.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (De(n)) {
                            if (t = n[Me.expando]) {
                                if (t.events)
                                    for (r in t.events) o[r] ? ge.event.remove(n, r) : ge.removeEvent(n, r, t.handle);
                                n[Me.expando] = void 0
                            }
                            n[$e.expando] && (n[$e.expando] = void 0)
                        }
                }
            }), ge.fn.extend({
                detach: function(e) {
                    return N(this, e, !0)
                },
                remove: function(e) {
                    return N(this, e)
                },
                text: function(e) {
                    return Pe(this, function(e) {
                        return void 0 === e ? ge.text(this) : this.empty().each(function() {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return z(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = k(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return z(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = k(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return z(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return z(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ge.cleanData(y(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                        return ge.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return Pe(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !nt.test(e) && !Ze[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = ge.htmlPrefilter(e);
                            try {
                                for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ge.cleanData(y(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return z(this, arguments, function(t) {
                        var n = this.parentNode;
                        ge.inArray(this, e) < 0 && (ge.cleanData(y(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), ge.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                ge.fn[e] = function(e) {
                    for (var n, r = [], o = ge(e), i = o.length - 1, u = 0; i >= u; u++) n = u === i ? this : this.clone(!0), ge(o[u])[t](n), ue.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var ut = /^margin/,
                at = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
                lt = function(t) {
                    var n = t.ownerDocument.defaultView;
                    return n && n.opener || (n = e), n.getComputedStyle(t)
                };
            ! function() {
                function t() {
                    if (a) {
                        a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Je.appendChild(u);
                        var t = e.getComputedStyle(a);
                        n = "1%" !== t.top, i = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Je.removeChild(u), a = null
                    }
                }
                var n, r, o, i, u = ne.createElement("div"),
                    a = ne.createElement("div");
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === a.style.backgroundClip, u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.appendChild(a), ge.extend(pe, {
                    pixelPosition: function() {
                        return t(), n
                    },
                    boxSizingReliable: function() {
                        return t(), r
                    },
                    pixelMarginRight: function() {
                        return t(), o
                    },
                    reliableMarginLeft: function() {
                        return t(), i
                    }
                }))
            }();
            var st = /^(none|table(?!-c[ea]).+)/,
                ct = /^--/,
                ft = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                dt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                pt = ["Webkit", "Moz", "ms"],
                ht = ne.createElement("div").style;
            ge.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = A(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, u, a = ge.camelCase(t),
                            l = ct.test(t),
                            s = e.style;
                        return l || (t = D(a)), u = ge.cssHooks[t] || ge.cssHooks[a], void 0 === n ? u && "get" in u && void 0 !== (o = u.get(e, !1, r)) ? o : s[t] : (i = typeof n, "string" === i && (o = qe.exec(n)) && o[1] && (n = g(e, t, o), i = "number"), null != n && n === n && ("number" === i && (n += o && o[3] || (ge.cssNumber[a] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (s[t] = "inherit"), u && "set" in u && void 0 === (n = u.set(e, n, r)) || (l ? s.setProperty(t, n) : s[t] = n)), void 0)
                    }
                },
                css: function(e, t, n, r) {
                    var o, i, u, a = ge.camelCase(t),
                        l = ct.test(t);
                    return l || (t = D(a)), u = ge.cssHooks[t] || ge.cssHooks[a], u && "get" in u && (o = u.get(e, !0, n)), void 0 === o && (o = A(e, t, r)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o
                }
            }), ge.each(["height", "width"], function(e, t) {
                ge.cssHooks[t] = {
                    get: function(e, n, r) {
                        return n ? !st.test(ge.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? H(e, t, r) : Ue(e, ft, function() {
                            return H(e, t, r)
                        }) : void 0
                    },
                    set: function(e, n, r) {
                        var o, i = r && lt(e),
                            u = r && $(e, t, r, "border-box" === ge.css(e, "boxSizing", !1, i), i);
                        return u && (o = qe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = ge.css(e, t)), M(e, n, u)
                    }
                }
            }), ge.cssHooks.marginLeft = I(pe.reliableMarginLeft, function(e, t) {
                return t ? (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px" : void 0
            }), ge.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                ge.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + Be[r] + t] = i[r] || i[r - 2] || i[0];
                        return o
                    }
                }, ut.test(e) || (ge.cssHooks[e + t].set = M)
            }), ge.fn.extend({
                css: function(e, t) {
                    return Pe(this, function(e, t, n) {
                        var r, o, i = {},
                            u = 0;
                        if (Array.isArray(t)) {
                            for (r = lt(e), o = t.length; o > u; u++) i[t[u]] = ge.css(e, t[u], !1, r);
                            return i
                        }
                        return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), ge.Tween = F, F.prototype = {
                constructor: F,
                init: function(e, t, n, r, o, i) {
                    this.elem = e, this.prop = n, this.easing = o || ge.easing._default, this.options = t, this.start = this.now = this.cur(),
                        this.end = r, this.unit = i || (ge.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = F.propHooks[this.prop];
                    return e && e.get ? e.get(this) : F.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = F.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
                }
            }, F.prototype.init.prototype = F.prototype, F.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                    },
                    set: function(e) {
                        ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, ge.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, ge.fx = F.prototype.init, ge.fx.step = {};
            var gt, vt, mt = /^(?:toggle|show|hide)$/,
                yt = /queueHooks$/;
            ge.Animation = ge.extend(V, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return g(n.elem, e, qe.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                        for (var n, r = 0, o = e.length; o > r; r++) n = e[r], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t)
                    },
                    prefilters: [U],
                    prefilter: function(e, t) {
                        t ? V.prefilters.unshift(e) : V.prefilters.push(e)
                    }
                }), ge.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? ge.extend({}, e) : {
                        complete: n || !n && t || ge.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !ge.isFunction(t) && t
                    };
                    return ge.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration = r.duration in ge.fx.speeds ? ge.fx.speeds[r.duration] : ge.fx.speeds._default), (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        ge.isFunction(r.old) && r.old.call(this), r.queue && ge.dequeue(this, r.queue)
                    }, r
                }, ge.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(Oe).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var o = ge.isEmptyObject(e),
                            i = ge.speed(t, n, r),
                            u = function() {
                                var t = V(this, ge.extend({}, e), i);
                                (o || Me.get(this, "finish")) && t.stop(!0)
                            };
                        return u.finish = u, o || i.queue === !1 ? this.each(u) : this.queue(i.queue, u)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                o = null != e && e + "queueHooks",
                                i = ge.timers,
                                u = Me.get(this);
                            if (o) u[o] && u[o].stop && r(u[o]);
                            else
                                for (o in u) u[o] && u[o].stop && yt.test(o) && r(u[o]);
                            for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                            (t || !n) && ge.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, n = Me.get(this),
                                r = n[e + "queue"],
                                o = n[e + "queueHooks"],
                                i = ge.timers,
                                u = r ? r.length : 0;
                            for (n.finish = !0, ge.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                            for (t = 0; u > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), ge.each(["toggle", "show", "hide"], function(e, t) {
                    var n = ge.fn[t];
                    ge.fn[t] = function(e, r, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, o)
                    }
                }), ge.each({
                    slideDown: B("show"),
                    slideUp: B("hide"),
                    slideToggle: B("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    ge.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), ge.timers = [], ge.fx.tick = function() {
                    var e, t = 0,
                        n = ge.timers;
                    for (gt = ge.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                    n.length || ge.fx.stop(), gt = void 0
                }, ge.fx.timer = function(e) {
                    ge.timers.push(e), ge.fx.start()
                }, ge.fx.interval = 13, ge.fx.start = function() {
                    vt || (vt = !0, L())
                }, ge.fx.stop = function() {
                    vt = null
                }, ge.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, ge.fn.delay = function(t, n) {
                    return t = ge.fx ? ge.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                        var o = e.setTimeout(n, t);
                        r.stop = function() {
                            e.clearTimeout(o)
                        }
                    })
                },
                function() {
                    var e = ne.createElement("input"),
                        t = ne.createElement("select"),
                        n = t.appendChild(ne.createElement("option"));
                    e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
                }();
            var bt, wt = ge.expr.attrHandle;
            ge.fn.extend({
                attr: function(e, t) {
                    return Pe(this, ge.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        ge.removeAttr(this, e)
                    })
                }
            }), ge.extend({
                attr: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === i && ge.isXMLDoc(e) || (o = ge.attrHooks[t.toLowerCase()] || (ge.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : (r = ge.find.attr(e, t), null == r ? void 0 : r))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!pe.radioValue && "radio" === t && o(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        o = t && t.match(Ne);
                    if (o && 1 === e.nodeType)
                        for (; n = o[r++];) e.removeAttribute(n)
                }
            }), bt = {
                set: function(e, t, n) {
                    return t === !1 ? ge.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = wt[t] || ge.find.attr;
                wt[t] = function(e, t, r) {
                    var o, i, u = t.toLowerCase();
                    return r || (i = wt[u], wt[u] = o, o = null != n(e, t, r) ? u : null, wt[u] = i), o
                }
            });
            var xt = /^(?:input|select|textarea|button)$/i,
                St = /^(?:a|area)$/i;
            ge.fn.extend({
                prop: function(e, t) {
                    return Pe(this, ge.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[ge.propFix[e] || e]
                    })
                }
            }), ge.extend({
                prop: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return 1 === i && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, o = ge.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = ge.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : xt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), pe.optSelected || (ge.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                ge.propFix[this.toLowerCase()] = this
            }), ge.fn.extend({
                addClass: function(e) {
                    var t, n, r, o, i, u, a, l = 0;
                    if (ge.isFunction(e)) return this.each(function(t) {
                        ge(this).addClass(e.call(this, t, Y(this)))
                    });
                    if ("string" == typeof e && e)
                        for (t = e.match(Ne) || []; n = this[l++];)
                            if (o = Y(n), r = 1 === n.nodeType && " " + X(o) + " ") {
                                for (u = 0; i = t[u++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                a = X(r), o !== a && n.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, o, i, u, a, l = 0;
                    if (ge.isFunction(e)) return this.each(function(t) {
                        ge(this).removeClass(e.call(this, t, Y(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(Ne) || []; n = this[l++];)
                            if (o = Y(n), r = 1 === n.nodeType && " " + X(o) + " ") {
                                for (u = 0; i = t[u++];)
                                    for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                                a = X(r), o !== a && n.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ge.isFunction(e) ? function(n) {
                        ge(this).toggleClass(e.call(this, n, Y(this), t), t)
                    } : function() {
                        var t, r, o, i;
                        if ("string" === n)
                            for (r = 0, o = ge(this), i = e.match(Ne) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else(void 0 === e || "boolean" === n) && (t = Y(this), t && Me.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Me.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + X(Y(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var Tt = /\r/g;
            ge.fn.extend({
                val: function(e) {
                    var t, n, r, o = this[0]; {
                        if (arguments.length) return r = ge.isFunction(e), this.each(function(n) {
                            var o;
                            1 === this.nodeType && (o = r ? e.call(this, n, ge(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = ge.map(o, function(e) {
                                return null == e ? "" : e + ""
                            })), t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                        });
                        if (o) return t = ge.valHooks[o.type] || ge.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Tt, "") : null == n ? "" : n)
                    }
                }
            }), ge.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = ge.find.attr(e, "value");
                            return null != t ? t : X(ge.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options,
                                u = e.selectedIndex,
                                a = "select-one" === e.type,
                                l = a ? null : [],
                                s = a ? u + 1 : i.length;
                            for (r = 0 > u ? s : a ? u : 0; s > r; r++)
                                if (n = i[r], !(!n.selected && r !== u || n.disabled || n.parentNode.disabled && o(n.parentNode, "optgroup"))) {
                                    if (t = ge(n).val(), a) return t;
                                    l.push(t)
                                }
                            return l
                        },
                        set: function(e, t) {
                            for (var n, r, o = e.options, i = ge.makeArray(t), u = o.length; u--;) r = o[u], (r.selected = ge.inArray(ge.valHooks.option.get(r), i) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), i
                        }
                    }
                }
            }), ge.each(["radio", "checkbox"], function() {
                ge.valHooks[this] = {
                    set: function(e, t) {
                        return Array.isArray(t) ? e.checked = ge.inArray(ge(e).val(), t) > -1 : void 0
                    }
                }, pe.checkOn || (ge.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var Ct = /^(?:focusinfocus|focusoutblur)$/;
            ge.extend(ge.event, {
                trigger: function(t, n, r, o) {
                    var i, u, a, l, s, c, f, d = [r || ne],
                        p = ce.call(t, "type") ? t.type : t,
                        h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (u = a = r = r || ne, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(p + ge.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), s = p.indexOf(":") < 0 && "on" + p, t = t[ge.expando] ? t : new ge.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ge.makeArray(n, [t]), f = ge.event.special[p] || {}, o || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                        if (!o && !f.noBubble && !ge.isWindow(r)) {
                            for (l = f.delegateType || p, Ct.test(l + p) || (u = u.parentNode); u; u = u.parentNode) d.push(u), a = u;
                            a === (r.ownerDocument || ne) && d.push(a.defaultView || a.parentWindow || e)
                        }
                        for (i = 0;
                            (u = d[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? l : f.bindType || p, c = (Me.get(u, "events") || {})[t.type] && Me.get(u, "handle"), c && c.apply(u, n), c = s && u[s], c && c.apply && De(u) && (t.result = c.apply(u, n), t.result === !1 && t.preventDefault());
                        return t.type = p, o || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !De(r) || s && ge.isFunction(r[p]) && !ge.isWindow(r) && (a = r[s], a && (r[s] = null), ge.event.triggered = p, r[p](), ge.event.triggered = void 0, a && (r[s] = a)), t.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = ge.extend(new ge.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    ge.event.trigger(r, null, t)
                }
            }), ge.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        ge.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? ge.event.trigger(e, t, n, !0) : void 0
                }
            }), ge.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                ge.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), ge.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), pe.focusin = "onfocusin" in e, pe.focusin || ge.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    ge.event.simulate(t, e.target, ge.event.fix(e))
                };
                ge.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            o = Me.access(r, t);
                        o || r.addEventListener(e, n, !0), Me.access(r, t, (o || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            o = Me.access(r, t) - 1;
                        o ? Me.access(r, t, o) : (r.removeEventListener(e, n, !0), Me.remove(r, t))
                    }
                }
            });
            var kt = e.location,
                _t = ge.now(),
                Et = /\?/;
            ge.parseXML = function(t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (e) {
                    n = void 0
                }
                return (!n || n.getElementsByTagName("parsererror").length) && ge.error("Invalid XML: " + t), n
            };
            var Rt = /\[\]$/,
                jt = /\r?\n/g,
                zt = /^(?:submit|button|image|reset|file)$/i,
                Nt = /^(?:input|select|textarea|keygen)/i;
            ge.param = function(e, t) {
                var n, r = [],
                    o = function(e, t) {
                        var n = ge.isFunction(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (Array.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e, function() {
                    o(this.name, this.value)
                });
                else
                    for (n in e) Z(n, e[n], t, o);
                return r.join("&")
            }, ge.fn.extend({
                serialize: function() {
                    return ge.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = ge.prop(this, "elements");
                        return e ? ge.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !ge(this).is(":disabled") && Nt.test(this.nodeName) && !zt.test(e) && (this.checked || !Ve.test(e))
                    }).map(function(e, t) {
                        var n = ge(this).val();
                        return null == n ? null : Array.isArray(n) ? ge.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(jt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(jt, "\r\n")
                        }
                    }).get()
                }
            });
            var At = /%20/g,
                It = /#.*$/,
                Pt = /([?&])_=[^&]*/,
                Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                $t = /^(?:GET|HEAD)$/,
                Ht = /^\/\//,
                Ft = {},
                Lt = {},
                qt = "*/".concat("*"),
                Bt = ne.createElement("a");
            Bt.href = kt.href, ge.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: kt.href,
                    type: "GET",
                    isLocal: Mt.test(kt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": qt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": ge.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Q(Q(e, ge.ajaxSettings), t) : Q(ge.ajaxSettings, e)
                },
                ajaxPrefilter: G(Ft),
                ajaxTransport: G(Lt),
                ajax: function(t, n) {
                    function r(t, n, r, a) {
                        var s, d, p, w, x, S = n;
                        c || (c = !0, l && e.clearTimeout(l), o = void 0, u = a || "", T.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, r && (w = K(h, T, r)), w = ee(h, w, T, s), s ? (h.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ge.lastModified[i] = x), x = T.getResponseHeader("etag"), x && (ge.etag[i] = x)), 204 === t || "HEAD" === h.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = w.state, d = w.data, p = w.error, s = !p)) : (p = S, (t || !S) && (S = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || S) + "", s ? m.resolveWith(g, [d, S, T]) : m.rejectWith(g, [T, S, p]), T.statusCode(b), b = void 0, f && v.trigger(s ? "ajaxSuccess" : "ajaxError", [T, h, s ? d : p]), y.fireWith(g, [T, S]), f && (v.trigger("ajaxComplete", [T, h]), --ge.active || ge.event.trigger("ajaxStop")))
                    }
                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var o, i, u, a, l, s, c, f, d, p, h = ge.ajaxSetup({}, n),
                        g = h.context || h,
                        v = h.context && (g.nodeType || g.jquery) ? ge(g) : ge.event,
                        m = ge.Deferred(),
                        y = ge.Callbacks("once memory"),
                        b = h.statusCode || {},
                        w = {},
                        x = {},
                        S = "canceled",
                        T = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!a)
                                        for (a = {}; t = Dt.exec(u);) a[t[1].toLowerCase()] = t[2];
                                    t = a[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return c ? u : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == c && (h.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (c) T.always(e[T.status]);
                                    else
                                        for (t in e) b[t] = [b[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || S;
                                return o && o.abort(t), r(0, t), this
                            }
                        };
                    if (m.promise(T), h.url = ((t || h.url || kt.href) + "").replace(Ht, kt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain) {
                        s = ne.createElement("a");
                        try {
                            s.href = h.url, s.href = s.href, h.crossDomain = Bt.protocol + "//" + Bt.host != s.protocol + "//" + s.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = ge.param(h.data, h.traditional)), J(Ft, h, n, T), c) return T;
                    f = ge.event && h.global, f && 0 === ge.active++ && ge.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !$t.test(h.type), i = h.url.replace(It, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (p = h.url.slice(i.length), h.data && (i += (Et.test(i) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (i = i.replace(Pt, "$1"), p = (Et.test(i) ? "&" : "?") + "_=" + _t++ + p), h.url = i + p), h.ifModified && (ge.lastModified[i] && T.setRequestHeader("If-Modified-Since", ge.lastModified[i]), ge.etag[i] && T.setRequestHeader("If-None-Match", ge.etag[i])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : h.accepts["*"]);
                    for (d in h.headers) T.setRequestHeader(d, h.headers[d]);
                    if (h.beforeSend && (h.beforeSend.call(g, T, h) === !1 || c)) return T.abort();
                    if (S = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), o = J(Lt, h, n, T)) {
                        if (T.readyState = 1, f && v.trigger("ajaxSend", [T, h]), c) return T;
                        h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                            T.abort("timeout")
                        }, h.timeout));
                        try {
                            c = !1, o.send(w, r)
                        } catch (e) {
                            if (c) throw e;
                            r(-1, e)
                        }
                    } else r(-1, "No Transport");
                    return T
                },
                getJSON: function(e, t, n) {
                    return ge.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return ge.get(e, void 0, t, "script")
                }
            }), ge.each(["get", "post"], function(e, t) {
                ge[t] = function(e, n, r, o) {
                    return ge.isFunction(n) && (o = o || r, r = n, n = void 0), ge.ajax(ge.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: r
                    }, ge.isPlainObject(e) && e))
                }
            }), ge._evalUrl = function(e) {
                return ge.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, ge.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (ge.isFunction(e) && (e = e.call(this[0])), t = ge(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return this.each(ge.isFunction(e) ? function(t) {
                        ge(this).wrapInner(e.call(this, t))
                    } : function() {
                        var t = ge(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = ge.isFunction(e);
                    return this.each(function(n) {
                        ge(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        ge(this).replaceWith(this.childNodes)
                    }), this
                }
            }), ge.expr.pseudos.hidden = function(e) {
                return !ge.expr.pseudos.visible(e)
            }, ge.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, ge.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            };
            var Ot = {
                    0: 200,
                    1223: 204
                },
                Ut = ge.ajaxSettings.xhr();
            pe.cors = !!Ut && "withCredentials" in Ut, pe.ajax = Ut = !!Ut, ge.ajaxTransport(function(t) {
                var n, r;
                return pe.cors || Ut && !t.crossDomain ? {
                    send: function(o, i) {
                        var u, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (u in t.xhrFields) a[u] = t.xhrFields[u];
                        t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        for (u in o) a.setRequestHeader(u, o[u]);
                        n = function(e) {
                            return function() {
                                n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(Ot[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                            4 === a.readyState && e.setTimeout(function() {
                                n && r()
                            })
                        }, n = n("abort");
                        try {
                            a.send(t.hasContent && t.data || null)
                        } catch (e) {
                            if (n) throw e
                        }
                    },
                    abort: function() {
                        n && n()
                    }
                } : void 0
            }), ge.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), ge.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return ge.globalEval(e), e
                    }
                }
            }), ge.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), ge.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function(r, o) {
                            t = ge("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                            }), ne.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var Wt = [],
                Vt = /(=)\?(?=&|$)|\?\?/;
            ge.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Wt.pop() || ge.expando + "_" + _t++;
                    return this[e] = !0, e
                }
            }), ge.ajaxPrefilter("json jsonp", function(t, n, r) {
                var o, i, u, a = t.jsonp !== !1 && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
                return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = ge.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Vt, "$1" + o) : t.jsonp !== !1 && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                    return u || ge.error(o + " was not called"), u[0]
                }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
                    u = arguments
                }, r.always(function() {
                    void 0 === i ? ge(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Wt.push(o)), u && ge.isFunction(i) && i(u[0]), u = i = void 0
                }), "script") : void 0
            }), pe.createHTMLDocument = function() {
                var e = ne.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
            }(), ge.parseHTML = function(e, t, n) {
                if ("string" != typeof e) return [];
                "boolean" == typeof t && (n = t, t = !1);
                var r, o, i;
                return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = ne.location.href, t.head.appendChild(r)) : t = ne), o = Ce.exec(e), i = !n && [], o ? [t.createElement(o[1])] : (o = w([e], t, i), i && i.length && ge(i).remove(), ge.merge([], o.childNodes))
            }, ge.fn.load = function(e, t, n) {
                var r, o, i, u = this,
                    a = e.indexOf(" ");
                return a > -1 && (r = X(e.slice(a)), e = e.slice(0, a)), ge.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), u.length > 0 && ge.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    i = arguments, u.html(r ? ge("<div>").append(ge.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    u.each(function() {
                        n.apply(this, i || [e.responseText, t, e])
                    })
                }), this
            }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                ge.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), ge.expr.pseudos.animated = function(e) {
                return ge.grep(ge.timers, function(t) {
                    return e === t.elem
                }).length
            }, ge.offset = {
                setOffset: function(e, t, n) {
                    var r, o, i, u, a, l, s, c = ge.css(e, "position"),
                        f = ge(e),
                        d = {};
                    "static" === c && (e.style.position = "relative"), a = f.offset(), i = ge.css(e, "top"), l = ge.css(e, "left"), s = ("absolute" === c || "fixed" === c) && (i + l).indexOf("auto") > -1, s ? (r = f.position(), u = r.top, o = r.left) : (u = parseFloat(i) || 0, o = parseFloat(l) || 0), ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, a))), null != t.top && (d.top = t.top - a.top + u), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : f.css(d)
                }
            }, ge.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        ge.offset.setOffset(this, e, t)
                    });
                    var t, n, r, o, i = this[0];
                    if (i) return i.getClientRects().length ? (r = i.getBoundingClientRect(), t = i.ownerDocument, n = t.documentElement, o = t.defaultView, {
                        top: r.top + o.pageYOffset - n.clientTop,
                        left: r.left + o.pageXOffset - n.clientLeft
                    }) : {
                        top: 0,
                        left: 0
                    }
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === ge.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), o(e[0], "html") || (r = e.offset()), r = {
                            top: r.top + ge.css(e[0], "borderTopWidth", !0),
                            left: r.left + ge.css(e[0], "borderLeftWidth", !0)
                        }), {
                            top: t.top - r.top - ge.css(n, "marginTop", !0),
                            left: t.left - r.left - ge.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === ge.css(e, "position");) e = e.offsetParent;
                        return e || Je
                    })
                }
            }), ge.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                ge.fn[e] = function(r) {
                    return Pe(this, function(e, r, o) {
                        var i;
                        return ge.isWindow(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o ? i ? i[t] : e[r] : void(i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o)
                    }, e, r, arguments.length)
                }
            }), ge.each(["top", "left"], function(e, t) {
                ge.cssHooks[t] = I(pe.pixelPosition, function(e, n) {
                    return n ? (n = A(e, t), at.test(n) ? ge(e).position()[t] + "px" : n) : void 0
                })
            }), ge.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                ge.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    ge.fn[r] = function(o, i) {
                        var u = arguments.length && (n || "boolean" != typeof o),
                            a = n || (o === !0 || i === !0 ? "margin" : "border");
                        return Pe(this, function(t, n, o) {
                            var i;
                            return ge.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? ge.css(t, n, a) : ge.style(t, n, o, a)
                        }, t, u ? o : void 0, u)
                    }
                })
            }), ge.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), ge.holdReady = function(e) {
                e ? ge.readyWait++ : ge.ready(!0)
            }, ge.isArray = Array.isArray, ge.parseJSON = JSON.parse, ge.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function() {
                return ge
            });
            var Xt = e.jQuery,
                Yt = e.$;
            return ge.noConflict = function(t) {
                return e.$ === ge && (e.$ = Yt), t && e.jQuery === ge && (e.jQuery = Xt), ge
            }, t || (e.jQuery = e.$ = ge), ge
        })
    }, {}],
    116: [function(e, t, n) {
        var r = [function(e, t) {
            return "other"
        }, function(e, t) {
            return t ? "other" : 1 == e ? "one" : "other"
        }, function(e, t) {
            return t ? "other" : 0 == e || 1 == e ? "one" : "other"
        }, function(e, t) {
            var n = String(e).split("."),
                r = !n[1];
            return t ? "other" : 1 == e && r ? "one" : "other"
        }];
        ! function(e, r) {
            "function" == typeof define && define.amd ? define(r) : "object" == typeof n ? t.exports = r : e.plurals = r
        }(this, {
            af: r[1],
            ak: r[2],
            am: function(e, t) {
                return t ? "other" : e >= 0 && 1 >= e ? "one" : "other"
            },
            ar: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e,
                    o = r && n[0].slice(-2);
                return t ? "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : o >= 3 && 10 >= o ? "few" : o >= 11 && 99 >= o ? "many" : "other"
            },
            ars: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e,
                    o = r && n[0].slice(-2);
                return t ? "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : o >= 3 && 10 >= o ? "few" : o >= 11 && 99 >= o ? "many" : "other"
            },
            as: function(e, t) {
                return t ? 1 == e || 5 == e || 7 == e || 8 == e || 9 == e || 10 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && 1 >= e ? "one" : "other"
            },
            asa: r[1],
            ast: r[3],
            az: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = r.slice(-1),
                    i = r.slice(-2),
                    u = r.slice(-3);
                return t ? 1 == o || 2 == o || 5 == o || 7 == o || 8 == o || 20 == i || 50 == i || 70 == i || 80 == i ? "one" : 3 == o || 4 == o || 100 == u || 200 == u || 300 == u || 400 == u || 500 == u || 600 == u || 700 == u || 800 == u || 900 == u ? "few" : 0 == r || 6 == o || 40 == i || 60 == i || 90 == i ? "many" : "other" : 1 == e ? "one" : "other"
            },
            be: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e,
                    o = r && n[0].slice(-1),
                    i = r && n[0].slice(-2);
                return t ? 2 != o && 3 != o || 12 == i || 13 == i ? "other" : "few" : 1 == o && 11 != i ? "one" : o >= 2 && 4 >= o && (12 > i || i > 14) ? "few" : r && 0 == o || o >= 5 && 9 >= o || i >= 11 && 14 >= i ? "many" : "other"
            },
            bem: r[1],
            bez: r[1],
            bg: r[1],
            bh: r[2],
            bm: r[0],
            bn: function(e, t) {
                return t ? 1 == e || 5 == e || 7 == e || 8 == e || 9 == e || 10 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && 1 >= e ? "one" : "other"
            },
            bo: r[0],
            br: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e,
                    o = r && n[0].slice(-1),
                    i = r && n[0].slice(-2),
                    u = r && n[0].slice(-6);
                return t ? "other" : 1 == o && 11 != i && 71 != i && 91 != i ? "one" : 2 == o && 12 != i && 72 != i && 92 != i ? "two" : (3 == o || 4 == o || 9 == o) && (10 > i || i > 19) && (70 > i || i > 79) && (90 > i || i > 99) ? "few" : 0 != e && r && 0 == u ? "many" : "other"
            },
            brx: r[1],
            bs: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = n[1] || "",
                    i = !n[1],
                    u = r.slice(-1),
                    a = r.slice(-2),
                    l = o.slice(-1),
                    s = o.slice(-2);
                return t ? "other" : i && 1 == u && 11 != a || 1 == l && 11 != s ? "one" : i && u >= 2 && 4 >= u && (12 > a || a > 14) || l >= 2 && 4 >= l && (12 > s || s > 14) ? "few" : "other"
            },
            ca: function(e, t) {
                var n = String(e).split("."),
                    r = !n[1];
                return t ? 1 == e || 3 == e ? "one" : 2 == e ? "two" : 4 == e ? "few" : "other" : 1 == e && r ? "one" : "other"
            },
            ce: r[1],
            cgg: r[1],
            chr: r[1],
            ckb: r[1],
            cs: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = !n[1];
                return t ? "other" : 1 == e && o ? "one" : r >= 2 && 4 >= r && o ? "few" : o ? "other" : "many"
            },
            cy: function(e, t) {
                return t ? 0 == e || 7 == e || 8 == e || 9 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : 3 == e || 4 == e ? "few" : 5 == e || 6 == e ? "many" : "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : 3 == e ? "few" : 6 == e ? "many" : "other"
            },
            da: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = Number(n[0]) == e;
                return t ? "other" : 1 != e && (o || 0 != r && 1 != r) ? "other" : "one"
            },
            de: r[3],
            dsb: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = n[1] || "",
                    i = !n[1],
                    u = r.slice(-2),
                    a = o.slice(-2);
                return t ? "other" : i && 1 == u || 1 == a ? "one" : i && 2 == u || 2 == a ? "two" : i && (3 == u || 4 == u) || 3 == a || 4 == a ? "few" : "other"
            },
            dv: r[1],
            dz: r[0],
            ee: r[1],
            el: r[1],
            en: function(e, t) {
                var n = String(e).split("."),
                    r = !n[1],
                    o = Number(n[0]) == e,
                    i = o && n[0].slice(-1),
                    u = o && n[0].slice(-2);
                return t ? 1 == i && 11 != u ? "one" : 2 == i && 12 != u ? "two" : 3 == i && 13 != u ? "few" : "other" : 1 == e && r ? "one" : "other"
            },
            eo: r[1],
            es: r[1],
            et: r[3],
            eu: r[1],
            fa: function(e, t) {
                return t ? "other" : e >= 0 && 1 >= e ? "one" : "other"
            },
            ff: function(e, t) {
                return t ? "other" : e >= 0 && 2 > e ? "one" : "other"
            },
            fi: r[3],
            fil: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = n[1] || "",
                    i = !n[1],
                    u = r.slice(-1),
                    a = o.slice(-1);
                return t ? 1 == e ? "one" : "other" : i && (1 == r || 2 == r || 3 == r) || i && 4 != u && 6 != u && 9 != u || !i && 4 != a && 6 != a && 9 != a ? "one" : "other"
            },
            fo: r[1],
            fr: function(e, t) {
                return t ? 1 == e ? "one" : "other" : e >= 0 && 2 > e ? "one" : "other"
            },
            fur: r[1],
            fy: r[3],
            ga: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e;
                return t ? 1 == e ? "one" : "other" : 1 == e ? "one" : 2 == e ? "two" : r && e >= 3 && 6 >= e ? "few" : r && e >= 7 && 10 >= e ? "many" : "other"
            },
            gd: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e;
                return t ? "other" : 1 == e || 11 == e ? "one" : 2 == e || 12 == e ? "two" : r && e >= 3 && 10 >= e || r && e >= 13 && 19 >= e ? "few" : "other"
            },
            gl: r[3],
            gsw: r[1],
            gu: function(e, t) {
                return t ? 1 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && 1 >= e ? "one" : "other"
            },
            guw: r[2],
            gv: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = !n[1],
                    i = r.slice(-1),
                    u = r.slice(-2);
                return t ? "other" : o && 1 == i ? "one" : o && 2 == i ? "two" : !o || 0 != u && 20 != u && 40 != u && 60 != u && 80 != u ? o ? "other" : "many" : "few"
            },
            ha: r[1],
            haw: r[1],
            he: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = !n[1],
                    i = Number(n[0]) == e,
                    u = i && n[0].slice(-1);
                return t ? "other" : 1 == e && o ? "one" : 2 == r && o ? "two" : o && (0 > e || e > 10) && i && 0 == u ? "many" : "other"
            },
            hi: function(e, t) {
                return t ? 1 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && 1 >= e ? "one" : "other"
            },
            hr: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = n[1] || "",
                    i = !n[1],
                    u = r.slice(-1),
                    a = r.slice(-2),
                    l = o.slice(-1),
                    s = o.slice(-2);
                return t ? "other" : i && 1 == u && 11 != a || 1 == l && 11 != s ? "one" : i && u >= 2 && 4 >= u && (12 > a || a > 14) || l >= 2 && 4 >= l && (12 > s || s > 14) ? "few" : "other"
            },
            hsb: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = n[1] || "",
                    i = !n[1],
                    u = r.slice(-2),
                    a = o.slice(-2);
                return t ? "other" : i && 1 == u || 1 == a ? "one" : i && 2 == u || 2 == a ? "two" : i && (3 == u || 4 == u) || 3 == a || 4 == a ? "few" : "other"
            },
            hu: function(e, t) {
                return t ? 1 == e || 5 == e ? "one" : "other" : 1 == e ? "one" : "other"
            },
            hy: function(e, t) {
                return t ? 1 == e ? "one" : "other" : e >= 0 && 2 > e ? "one" : "other"
            },
            id: r[0],
            ig: r[0],
            ii: r[0],
            in : r[0],
            io: r[3],
            is: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = Number(n[0]) == e,
                    i = r.slice(-1),
                    u = r.slice(-2);
                return t ? "other" : o && 1 == i && 11 != u || !o ? "one" : "other"
            },
            it: function(e, t) {
                var n = String(e).split("."),
                    r = !n[1];
                return t ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && r ? "one" : "other"
            },
            iu: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other"
            },
            iw: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = !n[1],
                    i = Number(n[0]) == e,
                    u = i && n[0].slice(-1);
                return t ? "other" : 1 == e && o ? "one" : 2 == r && o ? "two" : o && (0 > e || e > 10) && i && 0 == u ? "many" : "other"
            },
            ja: r[0],
            jbo: r[0],
            jgo: r[1],
            ji: r[3],
            jmc: r[1],
            jv: r[0],
            jw: r[0],
            ka: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = r.slice(-2);
                return t ? 1 == r ? "one" : 0 == r || o >= 2 && 20 >= o || 40 == o || 60 == o || 80 == o ? "many" : "other" : 1 == e ? "one" : "other"
            },
            kab: function(e, t) {
                return t ? "other" : e >= 0 && 2 > e ? "one" : "other"
            },
            kaj: r[1],
            kcg: r[1],
            kde: r[0],
            kea: r[0],
            kk: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e,
                    o = r && n[0].slice(-1);
                return t ? 6 == o || 9 == o || r && 0 == o && 0 != e ? "many" : "other" : 1 == e ? "one" : "other"
            },
            kkj: r[1],
            kl: r[1],
            km: r[0],
            kn: function(e, t) {
                return t ? "other" : e >= 0 && 1 >= e ? "one" : "other"
            },
            ko: r[0],
            ks: r[1],
            ksb: r[1],
            ksh: function(e, t) {
                return t ? "other" : 0 == e ? "zero" : 1 == e ? "one" : "other"
            },
            ku: r[1],
            kw: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other"
            },
            ky: r[1],
            lag: function(e, t) {
                var n = String(e).split("."),
                    r = n[0];
                return t ? "other" : 0 == e ? "zero" : 0 != r && 1 != r || 0 == e ? "other" : "one"
            },
            lb: r[1],
            lg: r[1],
            lkt: r[0],
            ln: r[2],
            lo: function(e, t) {
                return t && 1 == e ? "one" : "other"
            },
            lt: function(e, t) {
                var n = String(e).split("."),
                    r = n[1] || "",
                    o = Number(n[0]) == e,
                    i = o && n[0].slice(-1),
                    u = o && n[0].slice(-2);
                return t ? "other" : 1 == i && (11 > u || u > 19) ? "one" : i >= 2 && 9 >= i && (11 > u || u > 19) ? "few" : 0 != r ? "many" : "other"
            },
            lv: function(e, t) {
                var n = String(e).split("."),
                    r = n[1] || "",
                    o = r.length,
                    i = Number(n[0]) == e,
                    u = i && n[0].slice(-1),
                    a = i && n[0].slice(-2),
                    l = r.slice(-2),
                    s = r.slice(-1);
                return t ? "other" : i && 0 == u || a >= 11 && 19 >= a || 2 == o && l >= 11 && 19 >= l ? "zero" : 1 == u && 11 != a || 2 == o && 1 == s && 11 != l || 2 != o && 1 == s ? "one" : "other"
            },
            mas: r[1],
            mg: r[2],
            mgo: r[1],
            mk: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = n[1] || "",
                    i = !n[1],
                    u = r.slice(-1),
                    a = r.slice(-2),
                    l = o.slice(-1);
                return t ? 1 == u && 11 != a ? "one" : 2 == u && 12 != a ? "two" : 7 != u && 8 != u || 17 == a || 18 == a ? "other" : "many" : i && 1 == u || 1 == l ? "one" : "other"
            },
            ml: r[1],
            mn: r[1],
            mo: function(e, t) {
                var n = String(e).split("."),
                    r = !n[1],
                    o = Number(n[0]) == e,
                    i = o && n[0].slice(-2);
                return t ? 1 == e ? "one" : "other" : 1 == e && r ? "one" : !r || 0 == e || 1 != e && i >= 1 && 19 >= i ? "few" : "other"
            },
            mr: function(e, t) {
                return t ? 1 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : "other" : e >= 0 && 1 >= e ? "one" : "other"
            },
            ms: function(e, t) {
                return t && 1 == e ? "one" : "other"
            },
            mt: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e,
                    o = r && n[0].slice(-2);
                return t ? "other" : 1 == e ? "one" : 0 == e || o >= 2 && 10 >= o ? "few" : o >= 11 && 19 >= o ? "many" : "other"
            },
            my: r[0],
            nah: r[1],
            naq: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other"
            },
            nb: r[1],
            nd: r[1],
            ne: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e;
                return t ? r && e >= 1 && 4 >= e ? "one" : "other" : 1 == e ? "one" : "other"
            },
            nl: r[3],
            nn: r[1],
            nnh: r[1],
            no: r[1],
            nqo: r[0],
            nr: r[1],
            nso: r[2],
            ny: r[1],
            nyn: r[1],
            om: r[1],
            or: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e;
                return t ? 1 == e || 5 == e || r && e >= 7 && 9 >= e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : 1 == e ? "one" : "other"
            },
            os: r[1],
            pa: r[2],
            pap: r[1],
            pl: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = !n[1],
                    i = r.slice(-1),
                    u = r.slice(-2);
                return t ? "other" : 1 == e && o ? "one" : o && i >= 2 && 4 >= i && (12 > u || u > 14) ? "few" : o && 1 != r && (0 == i || 1 == i) || o && i >= 5 && 9 >= i || o && u >= 12 && 14 >= u ? "many" : "other"
            },
            prg: function(e, t) {
                var n = String(e).split("."),
                    r = n[1] || "",
                    o = r.length,
                    i = Number(n[0]) == e,
                    u = i && n[0].slice(-1),
                    a = i && n[0].slice(-2),
                    l = r.slice(-2),
                    s = r.slice(-1);
                return t ? "other" : i && 0 == u || a >= 11 && 19 >= a || 2 == o && l >= 11 && 19 >= l ? "zero" : 1 == u && 11 != a || 2 == o && 1 == s && 11 != l || 2 != o && 1 == s ? "one" : "other"
            },
            ps: r[1],
            pt: function(e, t) {
                var n = String(e).split("."),
                    r = n[0];
                return t ? "other" : 0 == r || 1 == r ? "one" : "other"
            },
            "pt-PT": r[3],
            rm: r[1],
            ro: function(e, t) {
                var n = String(e).split("."),
                    r = !n[1],
                    o = Number(n[0]) == e,
                    i = o && n[0].slice(-2);
                return t ? 1 == e ? "one" : "other" : 1 == e && r ? "one" : !r || 0 == e || 1 != e && i >= 1 && 19 >= i ? "few" : "other"
            },
            rof: r[1],
            root: r[0],
            ru: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = !n[1],
                    i = r.slice(-1),
                    u = r.slice(-2);
                return t ? "other" : o && 1 == i && 11 != u ? "one" : o && i >= 2 && 4 >= i && (12 > u || u > 14) ? "few" : o && 0 == i || o && i >= 5 && 9 >= i || o && u >= 11 && 14 >= u ? "many" : "other"
            },
            rwk: r[1],
            sah: r[0],
            saq: r[1],
            sd: r[1],
            sdh: r[1],
            se: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other"
            },
            seh: r[1],
            ses: r[0],
            sg: r[0],
            sh: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = n[1] || "",
                    i = !n[1],
                    u = r.slice(-1),
                    a = r.slice(-2),
                    l = o.slice(-1),
                    s = o.slice(-2);
                return t ? "other" : i && 1 == u && 11 != a || 1 == l && 11 != s ? "one" : i && u >= 2 && 4 >= u && (12 > a || a > 14) || l >= 2 && 4 >= l && (12 > s || s > 14) ? "few" : "other"
            },
            shi: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e;
                return t ? "other" : e >= 0 && 1 >= e ? "one" : r && e >= 2 && 10 >= e ? "few" : "other"
            },
            si: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = n[1] || "";
                return t ? "other" : 0 == e || 1 == e || 0 == r && 1 == o ? "one" : "other"
            },
            sk: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = !n[1];
                return t ? "other" : 1 == e && o ? "one" : r >= 2 && 4 >= r && o ? "few" : o ? "other" : "many"
            },
            sl: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = !n[1],
                    i = r.slice(-2);
                return t ? "other" : o && 1 == i ? "one" : o && 2 == i ? "two" : o && (3 == i || 4 == i) || !o ? "few" : "other"
            },
            sma: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other"
            },
            smi: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other"
            },
            smj: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other"
            },
            smn: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other"
            },
            sms: function(e, t) {
                return t ? "other" : 1 == e ? "one" : 2 == e ? "two" : "other"
            },
            sn: r[1],
            so: r[1],
            sq: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e,
                    o = r && n[0].slice(-1),
                    i = r && n[0].slice(-2);
                return t ? 1 == e ? "one" : 4 == o && 14 != i ? "many" : "other" : 1 == e ? "one" : "other"
            },
            sr: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = n[1] || "",
                    i = !n[1],
                    u = r.slice(-1),
                    a = r.slice(-2),
                    l = o.slice(-1),
                    s = o.slice(-2);
                return t ? "other" : i && 1 == u && 11 != a || 1 == l && 11 != s ? "one" : i && u >= 2 && 4 >= u && (12 > a || a > 14) || l >= 2 && 4 >= l && (12 > s || s > 14) ? "few" : "other"
            },
            ss: r[1],
            ssy: r[1],
            st: r[1],
            sv: function(e, t) {
                var n = String(e).split("."),
                    r = !n[1],
                    o = Number(n[0]) == e,
                    i = o && n[0].slice(-1),
                    u = o && n[0].slice(-2);
                return t ? 1 != i && 2 != i || 11 == u || 12 == u ? "other" : "one" : 1 == e && r ? "one" : "other"
            },
            sw: r[3],
            syr: r[1],
            ta: r[1],
            te: r[1],
            teo: r[1],
            th: r[0],
            ti: r[2],
            tig: r[1],
            tk: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e,
                    o = r && n[0].slice(-1);
                return t ? 6 == o || 9 == o || 10 == e ? "few" : "other" : 1 == e ? "one" : "other"
            },
            tl: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = n[1] || "",
                    i = !n[1],
                    u = r.slice(-1),
                    a = o.slice(-1);
                return t ? 1 == e ? "one" : "other" : i && (1 == r || 2 == r || 3 == r) || i && 4 != u && 6 != u && 9 != u || !i && 4 != a && 6 != a && 9 != a ? "one" : "other"
            },
            tn: r[1],
            to: r[0],
            tr: r[1],
            ts: r[1],
            tzm: function(e, t) {
                var n = String(e).split("."),
                    r = Number(n[0]) == e;
                return t ? "other" : 0 == e || 1 == e || r && e >= 11 && 99 >= e ? "one" : "other"
            },
            ug: r[1],
            uk: function(e, t) {
                var n = String(e).split("."),
                    r = n[0],
                    o = !n[1],
                    i = Number(n[0]) == e,
                    u = i && n[0].slice(-1),
                    a = i && n[0].slice(-2),
                    l = r.slice(-1),
                    s = r.slice(-2);
                return t ? 3 == u && 13 != a ? "few" : "other" : o && 1 == l && 11 != s ? "one" : o && l >= 2 && 4 >= l && (12 > s || s > 14) ? "few" : o && 0 == l || o && l >= 5 && 9 >= l || o && s >= 11 && 14 >= s ? "many" : "other"
            },
            ur: r[3],
            uz: r[1],
            ve: r[1],
            vi: function(e, t) {
                return t && 1 == e ? "one" : "other"
            },
            vo: r[1],
            vun: r[1],
            wa: r[2],
            wae: r[1],
            wo: r[0],
            xh: r[1],
            xog: r[1],
            yi: r[3],
            yo: r[0],
            yue: r[0],
            zh: r[0],
            zu: function(e, t) {
                return t ? "other" : e >= 0 && 1 >= e ? "one" : "other"
            }
        })
    }, {}],
    117: [function(e, t) {
        t.exports = function() {
            var e, t;
            return t = document.createElement("div"), t.className = "js-spinner", t.innerHTML = "<li class='a'></li><li class='b'></li><li class='c'></li><li class='d'></li>", e = function() {
                var e, n, r, o;
                return e = ["one", "two", "three", "four", "five", "six", "seven"], r = 0, n = function() {
                    var e;
                    for (e = t; e.parentNode;) e = e.parentNode;
                    return e !== document
                }, o = setInterval(function() {
                    return n() ? void clearInterval(o) : (r > 6 && (r = 0), t.className = "js-spinner " + e[r], r++)
                }, 200)
            }, setTimeout(e, 100), t
        }
    }, {}],
    118: [function(e, t) {
        var n, r = [].slice;
        n = e("../append_to_head.coffee"), window.GoogleAnalyticsObject || (window.GoogleAnalyticsObject = "ga"), window.ga || (window.ga = function() {
            var e;
            return (null != (e = window.ga).q ? e.q : e.q = []).push(arguments)
        }), t.exports = function() {
            var e, t, o, i, u;
            return o = "//www.google-analytics.com/analytics.js", t = "//www.google-analytics.com/analytics_debug.js", u = {}, e = {}, e.load = function(e) {
                var r;
                return null == e && (e = !1), window.ga.l = Number(new Date), r = document.createElement("script"), r.async = !0, r.src = e === !0 ? t : o, n(r)
            }, e.addTracker = function(e, t, n) {
                var r, o, i;
                null == n && (n = {}), null == u[e] && (u[e] = t), r = {
                    name: e
                };
                for (o in n) i = n[o], r[o] = i;
                return ga("create", t, window.location.hostname, r), n.dontAnonymize !== !0 ? ga(e + ".set", "anonymizeIp", !0) : void 0
            }, i = function() {
                var e, t, n, o, i;
                n = arguments[0], t = 2 <= arguments.length ? r.call(arguments, 1) : [], i = [];
                for (o in u) e = u[o], i.push(ga.apply(null, [o + "." + n].concat(r.call(t))));
                return i
            }, e.trackPageView = function(e) {
                return null != e ? i("send", "pageview", {
                    page: e
                }) : i("send", "pageview")
            }, e.trackEvent = function() {
                return i.apply(null, ["send", "event"].concat(r.call(arguments)))
            }, e.linkUrl = function(e) {
                var t;
                return t = e.indexOf("?") > -1 ? "&" : "?", e + t
            }, e.setVar = function(e, t, n) {
                return i("set", "dimension" + e, n)
            }, e.setUserVar = e.setVar, e.setSessionVar = e.setVar, e.setPageVar = e.setVar, e.unsetVar = function() {
                return console.log("universal analytics: unsetVar is not implemented yet")
            }, e
        }()
    }, {
        "../append_to_head.coffee": 119
    }],
    119: [function(e, t) {
        t.exports = function(e) {
            var t;
            return t = document.getElementsByTagName("script")[0], t.parentNode.appendChild(e)
        }
    }, {}],
    120: [function(e, t) {
        t.exports = function() {
            var e, t, n, r, o, i;
            return e = {}, e.lighter = function(t, n) {
                return e.brightness(t) > e.brightness(n) ? t : n
            }, e.darker = function(t, n) {
                return e.brightness(t) < e.brightness(n) ? t : n
            }, e.moreSaturated = function(t, n) {
                return e.saturation(t) > e.saturation(n) ? t : n
            }, e.saturation = function(t) {
                return e.hsb(t)[1]
            }, e.brightness = function(t) {
                return e.hsb(t)[2]
            }, e.hsb = function(e) {
                return o(i(e))
            }, e.rgb = function(e) {
                return i(e)
            }, e.contrast = function(e, n) {
                var o, u;
                return o = i(e), u = i(n), (r(o, u) + t(o, u)) / 2
            }, t = function(e, t) {
                return Math.abs(n(e) - n(t))
            }, r = function(e, t) {
                var n, r, o;
                for (n = 0, r = o = 0; 2 >= o; r = ++o) n += Math.max(e[0] - t[0]) - Math.min(e[0] - t[0]);
                return n
            }, n = function(e) {
                return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3
            }, i = function(e) {
                var t, n, r;
                return Array.isArray(e) ? e : (e = e.replace("#", ""), 3 === e.length && (e += e), r = parseInt(e.slice(0, 2), 16), n = parseInt(e.slice(2, 4), 16), t = parseInt(e.slice(4, 6), 16), [r, n, t])
            }, o = function(e) {
                var t, n, r, o, i, u, a, l, s;
                switch (l = e[0] / 255, r = e[1] / 255, t = e[2] / 255, a = Math.min(l, r, t), u = Math.max(l, r, t), i = (u + a) / 2, n = u - a, u) {
                    case a:
                        o = 0;
                        break;
                    case l:
                        o = 60 * (r - t) / n;
                        break;
                    case r:
                        o = 60 * (t - l) / n + 120;
                        break;
                    case t:
                        o = 60 * (l - r) / n + 240
                }
                return s = 0 === u ? 0 : n / u, o %= 360, s *= 100, i *= 100, [o, s, i]
            }, e
        }()
    }, {}],
    121: [function(e, t) {
        t.exports = function() {
            var e;
            return e = {}, e.setCookie = function(e, t, n, r) {
                var o, i;
                return n ? (o = new Date, o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + o.toGMTString()) : i = "", document.cookie = e + "=" + t + i + "; path=/" + r
            }, e.getCookie = function(e) {
                var t, n, r, o;
                for (o = e + "=", n = document.cookie.split(";"), r = 0; r < n.length;) {
                    for (t = n[r];
                        " " === t.charAt(0);) t = t.substring(1, t.length);
                    if (0 === t.indexOf(o)) return t.substring(o.length, t.length);
                    r++
                }
                return null
            }, e.deleteCookie = function(e) {
                return setCookie(e, "", -1)
            }, e
        }()
    }, {}],
    122: [function(e, t) {
        t.exports = function(e, t) {
            return null == t && (t = !1), t ? window.location = e : /^mailto/.test(e) ? window.top.location = e : window.open(e)
        }
    }, {}],
    123: [function(e, t) {
        t.exports = function() {
            var e, t;
            return t = document.createElement("a"), e = ["href", "protocol", "host", "hostname", "port", "pathname", "search", "hash"],
                function(n) {
                    var r, o, i, u;
                    for (t.href = n, u = {}, r = 0, o = e.length; o > r; r++) i = e[r], u[i] = t[i];
                    return u.host = u.host.replace(/:80$/, "").replace(/:443$/, ""), u
                }
        }()
    }, {}],
    reader: [function(e, t) {
        var n, r, o;
        window.$ = e("jquery"), r = e("./navigator.coffee"), o = e("../util/browser_zoom_active.coffee"), n = e("../core/base.coffee"), t.exports = function(e, t, i) {
            var u, a, l, s;
            return e = $(e), a = !1, l = function(e, t) {
                var n;
                return n = r(e, t), Reader.Env.iframed && Reader.log("iframed", {
                    width: window.innerWidth,
                    height: window.innerHeight
                }), u(), a = o(), a && Reader.log("browser zoom", {
                    type: "initial"
                }), n
            }, u = function() {
                return $(window).on("resize", function() {
                    return setTimeout(s)
                }), e.on("dragstart", "img", function(e) {
                    return e.preventDefault()
                }), Reader.Env.ie ? e.on("mousedown", "canvas", function(e) {
                    return e.preventDefault()
                }) : void 0
            }, s = function() {
                return setTimeout(function() {
                    return e.trigger("genericResize")
                }), !a && o() ? (a = o(), Reader.log("browser zoom")) : void 0
            }, n(e, t, i, l)
        }
    }, {
        "../core/base.coffee": 1,
        "../util/browser_zoom_active.coffee": 55,
        "./navigator.coffee": 36,
        jquery: 115
    }]
}, {}, []);