/**
 * 
 */

! function() {
    var define = void 0;
    ! function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {
                    exports: {}
                };
                b[g][0].call(k.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, k, k.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function(a, b) {
            var c, d, e;
            e = a("./util.coffee"), d = a("./event.coffee"), c = function() {
                function a(a) {
                    this.executor = a
                }
                return a.prototype.commands = [], a.prototype.isEventListenerAttached = !1, a.prototype.handlers = {}, a.prototype.execute = function(a) {
                    var b;
                    return b = Array.prototype.shift.apply(a), this.executor[b] ? this.executor[b].apply(this.executor, a) : e.debug("Unknown command: " + b), Array.prototype.unshift.call(a, b)
                }, a.prototype.push = function(a) {
                    var b, c, d; {
                        if (!e.isArray(a[0])) return e.isIOSDevice() === !0 && this.saveCommand(a), this.execute(a);
                        for (b = 0, d = a.length; d > b; b++) c = a[b], this.push(c)
                    }
                }, a.prototype.saveCommand = function(a) {
                    return this.commands.push(a), this.isPageShowEventHandlerReady() !== !0 ? this.attachPageShowEventHandler() : void 0
                }, a.prototype.isEventHandlerReady = function(a) {
                    return !!this.handlers[a]
                }, a.prototype.attachHandler = function(a) {
                    return this.handlers[a] = this[a + "Handler"].bind(this), d.addEvent(window, a, this.handlers[a])
                }, a.prototype.detachHandler = function(a) {
                    return d.removeEvent(window, a, this.handlers[a]), this.handlers[a] = void 0
                }, a.prototype.isPageShowEventHandlerReady = function() {
                    return this.isEventHandlerReady("pageshow")
                }, a.prototype.attachPageShowEventHandler = function() {
                    return this.attachHandler("pageshow")
                }, a.prototype.dettachPageShowEventHandler = function() {
                    return this.detachHandler("pageshow")
                }, a.prototype.attachRebuildEventHandler = function() {
                    return this.attachHandler("rebuild")
                }, a.prototype.dettachRebuildEventHandler = function() {
                    return this.detachHandler("rebuild")
                }, a.prototype.pageshowHandler = function(a) {
                    return a.persisted === !0 ? (this.dettachPageShowEventHandler(), this.attachRebuildEventHandler(), d.postEvent(document, "rebuild")) : void 0
                }, a.prototype.rebuildHandler = function() {
                    var a, b, c, d, e;
                    for (this.dettachRebuildEventHandler(), e = this.commands, this.commands = [], d = [], b = 0, c = e.length; c > b; b++) a = e[b], d.push(this.push(a));
                    return d
                }, a
            }(), b.exports = c
        }, {
            "./event.coffee": 12,
            "./util.coffee": 24
        }],
        2: [function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = [].slice;
            e = a("./widget.coffee"), d = a("./JSONP.coffee"), i = a("./cookie.coffee"), o = a("./pubsub.coffee"), r = a("./util.coffee"), m = a("./mall.coffee"), p = a("./qterm.coffee"), j = a("./crc32.js"), n = a("./meta.coffee"), f = a("./ad.coffee"), l = a("./logger.coffee"), q = a("./scroll-manager.coffee"), g = a("./bridge-manager.coffee"), h = a("./cms-widget.coffee"), k = a("./local-storage-cache"), c = function() {
                function a() {}
                var b, c, t, u, v, w;
                return b = "dable_uid", c = 63072e6, w = ("undefined" != typeof window && null !== window ? window.TEST_REFERRER : void 0) || r.getReferrer(), v = function(a) {
                    var b, c, d;
                    return b = j(a), c = "__rpksum", d = 6e5, i.set_cookie(c, b, d)
                }, u = function(a) {
                    var b, c;
                    return c = "__rpksum", b = j(a), i.check_cookie(c) === b
                }, t = function() {
                    var a, c, d, e, f, g;
                    return a = i.check_cookie(b), d = "undefined" != typeof window && null !== window && null != (e = window.location) && null != (f = e.href) && null != (g = f.match(/[\?\&]dable_uid=([^\#\&]+)/)) ? g[1] : void 0, c = {
                        cached_uid: ""
                    }, d ? c.cached_uid = d : a && "undefined" !== a && (c.cached_uid = a), c
                }, a.prototype.fetchPrefs = function(a) {
                    var e, f, g;
                    return this.prefs ? a(this.prefs) : (e = arguments, this.service_name ? (g = k.get("prefs_" + this.service_name)) ? a(g) : this.fetch_prefs_queue ? void this.fetch_prefs_queue.push(a) : (this.fetch_prefs_queue = [a], f = t(), this.cid && (f.cid = this.cid), void d.get(r.prefs_protocol() + "://" + r.api_server_domain() + ("/plugin/services/" + encodeURIComponent(this.service_name) + "/prefs2"), f, function(a) {
                        return function(d) {
                            var e, f, h, j, l, m, n, o;
                            for (a.prefs = d && d.result || null, g = r.clone(a.prefs), g.kakao_log_url = null, g.adx_log_url = null, k.set("prefs_" + a.service_name, g), j = a.fetch_prefs_queue, e = 0, f = j.length; f > e; e++)(h = j[e])(a.prefs);
                            a.fetch_prefs_queue = null, i.set_cookie(b, a.prefs.cid, c), (null != (l = a.prefs) && null != (m = l.service) ? m.custom_script_url : void 0) && r.includeScript(null != (n = a.prefs) && null != (o = n.service) ? o.custom_script_url : void 0)
                        }
                    }(this))) : setTimeout(function(a) {
                        return function() {
                            return a.fetchPrefs.apply(a, e)
                        }
                    }(this), 100))
                }, a.prototype.setHttpsOnly = function() {
                    return r.set_protocol("https:")
                }, a.prototype.setScrollBaseElement = function(a) {
                    return r.set_scroll_base_el(a)
                }, a.prototype.fetchUID = function(a) {
                    var b;
                    return b = function() {
                        var a;
                        return a = String(Math.round(9e7 * Math.random()) + 1e7) + ".", a += String((new Date).getTime())
                    }, this.uid ? a(this.uid) : this.fetchPrefs(function(c) {
                        var d;
                        return d = c.cid, a(d || b())
                    })
                }, a.prototype.fetchUserGroup = function(a) {
                    return this.fetchUID(function() {
                        return function(b) {
                            return a(Math.floor(b % 10) || null)
                        }
                    }(this))
                }, a.prototype.sendLog = function() {
                    var a, b, c, e, f, g, h, i, j, k, t, u, v, x, y, z, A;
                    if (f = arguments[0], h = 2 <= arguments.length ? s.call(arguments, 1) : [], null == f && (f = ""), g = arguments, !this.service_name) return setTimeout(function(a) {
                        return function() {
                            return a.sendLog.apply(a, g)
                        }
                    }(this), 100);
                    switch (y = function(a) {
                            var b, c, d, e, g;
                            for (d = [], b = 0, e = a.length; e > b; b++)
                                if (c = a[b], r.isArray(c)) Array.prototype.push.apply(d, y(c));
                                else if (c) {
                                if (("number" == (g = typeof c) || "string" === g) && (c = {
                                        id: c
                                    }), !c.id) continue;
                                n.is_hidden(f) && (c.is_hidden = 1), d.push(c)
                            }
                            return d
                        }, e = null, c = !1, a = null, z = function(b) {
                            var f, g, h;
                            if (!c) return c = !0, f = r.clone(b), f.sess_dur_sec = Math.floor((new Date - e) / 1e3), f.body_height = Math.floor(r.getElemHeight(a)), f.body_length = null != (h = n.read_body()) ? h.length : void 0, g = r.prefs_protocol() + "://" + r.reco_logging_server_domain(), g += "/s/" + encodeURIComponent(b.service.service_name) + "/u/" + encodeURIComponent(b.uid) + "/read?", d.get(g, f, function(a) {
                                return "OK" !== a ? r.debug("[RECO-LOGGING API ERROR] FROM " + g + ", " + a) : void 0
                            })
                        }, i = function(b) {
                            return (a = n.read_body_el()) ? (e = new Date, "complete" === ("undefined" != typeof document && null !== document ? document.readyState : void 0) ? q.listenByElement({
                                targetElement: a,
                                method: function() {
                                    return z(b)
                                },
                                offsetY: Math.max(r.getElemHeight(a) - 300, 300),
                                reregisterIntervalMs: 5e3 + parseInt(500 * Math.random(), 10)
                            }) : setTimeout(function() {
                                return i(b)
                            }, 1e3)) : void 0
                        }, x = {
                            site: this.service_name,
                            url: this.url || window.location.href,
                            ref: this.ref || w
                        }, null != this.mid && (x.mid = this.mid), null != this.gender && (x.gender = this.gender), null != this.birthyear && (x.birthyear = this.birthyear), x.action = f, this.payload_c && (x.c = this.payload_c), x.lang = r.getFullUserLanguage(), v = function(a) {
                            return function() {
                                return p.fetch(w, function(b) {
                                    return b && (x.q = encodeURIComponent(b), o.publish("qterm", x.q)), a.fetchPrefs(function(b) {
                                        return a.fetchUID(function(c) {
                                            return x.uid = c, x.cid = b.cid, x.service = b.service, x.sp_client = b.sp_client, x.kakao_log_url = b.kakao_log_url, x.adx_log_url = b.adx_log_url, x.service ? l.sendActionLog(x, function() {
                                                return "view" === x.action ? (i(x), n.update_item(a.service_name, x.items, {
                                                    is_update_article_body: b.service.collect_article_body_on_client === !0
                                                })) : void 0
                                            }) : void r.debug("Unknown SERVICE: " + a.service_name)
                                        })
                                    })
                                })
                            }
                        }(this), t = [], ("like" === f || "view" === f || "cart" === f || "buy" === f) && (t = y(h), t.length > 0 && o.publish("item_ids", function() {
                            var a, b, c;
                            for (c = [], a = 0, b = t.length; b > a; a++) k = t[a], c.push(k.id);
                            return c
                        }())), f) {
                        case "view":
                            for (j = 0, u = t.length; u > j; j++) k = t[j], b = n.read_item(), !k.c1 && b.category1 && (k.c1 = b.category1), !k.c2 && b.category2 && (k.c2 = b.category2), !k.c3 && b.category3 && (k.c3 = b.category3), !k.comment_count && b.comment_count && (k.comment_count = b.comment_count), b.url ? k.link = b.url : this.url && (k.link = this.url);
                            x.items = t, 0 === t.length && (x.action = "visit"), v();
                            break;
                        case "like":
                            x.items = t, 0 === t.length && (x.action = "visit"), v();
                            break;
                        case "cart":
                            x.items = t, v();
                            break;
                        case "buy":
                            x.items = t, 0 === t.length ? m.prepare(function() {
                                return function() {
                                    return m.auto.fetchBuyEndIds(function(a) {
                                        return x.items = a, v()
                                    })
                                }
                            }(this)) : (b = n.read_item(), t[0].id === b.item_id && (!t[0].c1 && b.category1 && (t[0].c1 = b.category1), !t[0].c2 && b.category2 && (t[0].c2 = b.category2), !t[0].c3 && b.category3 && (t[0].c3 = b.category3)), v());
                            break;
                        case "search":
                            x.q = encodeURIComponent(h[0]), o.publish("qterm", x.q), x.q || (x.action = "visit"), v();
                            break;
                        case "visit":
                            x.action = "visit", v();
                            break;
                        default:
                            A = function(a, b) {
                                var c;
                                return null == b && (b = 0), c = n.read_item(), (null != c ? c.item_id : void 0) ? a(c) : b > 3 ? a(null) : setTimeout(function() {
                                    return A(a, b + 1)
                                }, 100)
                            }, A(function(a) {
                                return (null != a ? a.item_id : void 0) ? (x.action = "view", k = {
                                    id: a.item_id
                                }, o.publish("item_ids", [k.id]), !k.c1 && (null != a ? a.category1 : void 0) && (k.c1 = a.category1), !k.c2 && (null != a ? a.category2 : void 0) && (k.c2 = a.category2), !k.c3 && (null != a ? a.category3 : void 0) && (k.c3 = a.category3), !k.comment_count && a.comment_count && (k.comment_count = a.comment_count), (null != a ? a.url : void 0) && (k.link = a.url), x.items = [k]) : x.action = "visit", v()
                            })
                    }
                    return this.action_type = f || "auto", this.items = t
                }, a.prototype.sendLogOnce = function(a) {
                    var b;
                    return this._log_sended || (this._log_sended = {}), 1 !== this._log_sended[a || "auto"] ? (this._log_sended[a || "auto"] = 1, b = arguments, this.sendLog.apply(this, b)) : void 0
                }, a.prototype.sendMallLog = function(a, b) {
                    return null == b && (b = !1), !this.run_once_checked || b ? (this.run_once_checked = !0, m.prepare(function(b) {
                        return function() {
                            var c, d;
                            return c = function(a, b) {
                                var c, d, e, f, g;
                                if (e = [], !a) return e;
                                if (!b) return a;
                                for (c = 0, f = a.length; f > c; c++) d = a[c], r.isArray(d) ? e.push(d) : d && ("number" == (g = typeof d) || "string" === g ? d = {
                                    id: d,
                                    order_id: b
                                } : d.order_id = b, e.push(d));
                                return e
                            }, d = m[a], d.isView() ? d.fetchItemIdViewPage(function(a) {
                                return v([a]), b.sendLog("view", a), !0
                            }) : d.isCart() ? d.fetchCartIds(function(a) {
                                var e, f;
                                return e = d.getOrderId(), f = c(a, e), f.unshift("cart"), v(f), b.sendLog.apply(b, f), !0
                            }) : d.isBuyEnd() ? d.fetchBuyEndIds(function(a) {
                                var e, f, g;
                                return f = d.getOrderId(), g = c(a, f), g.unshift("buy"), e = u(g), v(g), e ? !0 : (b.sendLog.apply(b, g), !0)
                            }) : d.isSearch() ? d.fetchSearchTerm(function(a) {
                                return b.sendLog("search", a), !0
                            }) : b.sendLog()
                        }
                    }(this)), !0) : void 0
                }, a.prototype.setService = function(a) {
                    return a && "string" == typeof a ? ("/" === a.substr(a.length - 1, 1) && (a = a.substr(0, a.length - 1)), this.service_name = a.toLowerCase(), void o.publish("service_name", this.service_name)) : r.debug("Unknown SERVICE: " + a)
                }, a.prototype.setServiceByWidth = function(a, b) {
                    return a && void 0 === b ? r.debug("setServiceByWidth requires two service names") : this.setService(r.isMobileView() ? b : a)
                }, a.prototype.service = a.prototype.setService, a.prototype.fetchService = function(a) {
                    return a(this.service_name)
                }, a.prototype.c = function(a) {
                    this.payload_c = a
                }, a.prototype.setCID = function(a) {
                    return this.cid = a, this.fetchPrefs(function() {})
                }, a.prototype.setUID = function(a) {
                    return null != a ? this.uid = a : void 0
                }, a.prototype.setMID = function(a) {
                    this.mid = a
                }, a.prototype.setURL = function(a) {
                    this.url = a
                }, a.prototype.setRef = function(a) {
                    this.ref = a
                }, a.prototype.setGender = function(a) {
                    return this.setUserInfo({
                        gender: a
                    })
                }, a.prototype.setBirthYear = function(a) {
                    return this.setUserInfo({
                        birthyear: a
                    })
                }, a.prototype.setUserInfo = function(a) {
                    var b, c;
                    if (a) return "string" == typeof arguments[0] && arguments[1] && (a = {}, a[arguments[0]] = arguments[1]), a.mid && (this.mid = a.mid), a.uid && (this.uid = a.uid), a.gender && (b = a.gender.toUpperCase(), "M" !== b && "F" !== b && "O" !== b ? r.debug("Invalid gender: " + a.gender) : this.gender = a.gender), a.birthyear ? (c = parseInt(a.birthyear), 1900 > c || c > (new Date).getFullYear() ? r.debug("Invalid birthyear: " + c) : this.birthyear = c) : void 0
                }, a.prototype.renderWidget = function() {
                    var a, b, c, d, f, g, h, i, j, k;
                    return d = arguments[0], h = arguments[1], j = 3 <= arguments.length ? s.call(arguments, 2) : [], d ? ("string" != typeof d ? (f = d, f.id ? c = f.id : (c = "_dblwdgt_" + Math.floor(99999999 * Math.random()), f.id = c)) : c = d, a = "function" == typeof(null != j ? j[0] : void 0) ? j[0] : "function" == typeof(null != j ? j[1] : void 0) ? j[1] : null, k = "object" == typeof(null != j ? j[0] : void 0) ? j[0] : {}, ((null != h ? h.ignore_items : void 0) || (null != h ? h.ignoreItems : void 0)) && (k = h || {}, h = null), g = (null != k ? k.ignore_items : void 0) || (null != k ? k.ignoreItems : void 0), i = function(b) {
                        return function(d, f) {
                            var j, l, m, o, p;
                            if (null == f && (f = 30), l = d.cid, p = d.uid, o = null, !h && f > 0 && !g) {
                                if (!b.action_type) return void setTimeout(function() {
                                    return i(d, f - 1)
                                }, 100);
                                h = function() {
                                    var a, b, c, d;
                                    for (c = this.items, d = [], a = 0, b = c.length; b > a; a++) m = c[a], d.push(m.id);
                                    return d
                                }.call(b), 0 === h.length && (j = n.read_item(["item_id", "published_time"]), (null != j ? j.item_id : void 0) ? (h = [j.item_id], o = j.published_time) : h = null)
                            }
                            return b.service_name && (k.service_name = b.service_name), b.url && (k.url = b.url), b.ref && (k.ref = b.ref), new e({
                                dom_id: c,
                                cid: l,
                                uid: p,
                                item_ids: h,
                                item_pub_date: o,
                                options: k,
                                callback: a
                            })
                        }
                    }(this), b = t(), this.uid || b.cached_uid ? (i({
                        cid: this.cid || b.cached_uid,
                        uid: this.uid || b.cached_uid
                    }), this.fetchPrefs(function() {
                        return function() {}
                    }(this))) : this.fetchPrefs(function(a) {
                        return function(b) {
                            return a.fetchUID(function(a) {
                                return i({
                                    cid: b.cid,
                                    uid: a
                                })
                            })
                        }
                    }(this))) : r.debug("dom id or element should be provided")
                }, a.prototype.renderWidgetByWidth = function() {
                    var a, b, c, d, e, f;
                    if (b = arguments[0], d = arguments[1], e = 3 <= arguments.length ? s.call(arguments, 2) : [], !b) return r.debug("renderWidgetByWidth needs target dom or dom_id");
                    if ("string" == typeof b) c = document.getElementById(b);
                    else {
                        if ("object" != typeof b) return r.debug("renderWidgetByWidth got unexpected parameter : " + b);
                        c = b
                    }
                    return c ? (a = r.isMobileView() ? "mo" : "pc", (f = c.getAttribute("data-widget_id-" + a)) ? (c.setAttribute("data-widget_id", f), this.renderWidget.apply(this, [c, d].concat(s.call(e)))) : r.debug("no data-widget_id-" + a + " in dom : " + b)) : r.debug("renderWidgetByWidth found no DOM from given target : " + b)
                }, a.prototype.renderBridge = function() {
                    var a, b, c, d, e;
                    return b = arguments[0], c = arguments[1], d = 3 <= arguments.length ? s.call(arguments, 2) : [], a = "function" == typeof(null != d ? d[0] : void 0) ? d[0] : "function" == typeof(null != d ? d[1] : void 0) ? d[1] : null, e = "object" == typeof(null != d ? d[0] : void 0) ? d[0] : {}, this.fetchPrefs(function(d) {
                        return function(f) {
                            var h, i, j;
                            return j = f.service.newsx_detail_page_url_pattern, h = function(f) {
                                return window.scroll(0, 0), e.is_bridge = 1, e.bridge_item_id = f, e.newsx_detail_page_url_pattern = j, d.renderWidget(b, c, e, a)
                            }, g.init({
                                dom_id_or_el: b,
                                onItemChange: h
                            }), i = j ? g.getItemIdFromUrlPattern() : g.getItemIdFromHashTag(), h(i)
                        }
                    }(this))
                }, a.prototype.setCookieDoc = function(a) {
                    return window.COOKIE_DOCUMENT = a
                }, a.prototype.widget = a.prototype.renderWidget, a.prototype.initCmsWidget = function(a, b) {
                    return h.init(a, b, this.renderWidget.bind(this))
                }, a.prototype.initAd = function(a) {
                    var b;
                    return b = arguments, this.service_name ? this.fetchPrefs(function(b) {
                        return function(c) {
                            return b.fetchUID(function(d) {
                                var e;
                                return f.init({
                                    service_name: b.service_name,
                                    cid: c.cid,
                                    uid: d,
                                    ad_id: a,
                                    service_id: null != c && null != (e = c.service) ? e.service_id : void 0
                                })
                            })
                        }
                    }(this)) : setTimeout(function(a) {
                        return function() {
                            return a.initAd.apply(a, b)
                        }
                    }(this), 100)
                }, a
            }(), b.exports = c
        }, {
            "./JSONP.coffee": 4,
            "./ad.coffee": 5,
            "./bridge-manager.coffee": 9,
            "./cms-widget.coffee": 10,
            "./cookie.coffee": 11,
            "./crc32.js": 34,
            "./local-storage-cache": 15,
            "./logger.coffee": 16,
            "./mall.coffee": 18,
            "./meta.coffee": 19,
            "./pubsub.coffee": 20,
            "./qterm.coffee": 21,
            "./scroll-manager.coffee": 22,
            "./util.coffee": 24,
            "./widget.coffee": 25
        }],
        3: [function(require, module, exports) {
            function _typeof(a) {
                "@babel/helpers - typeof";
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                    return typeof a
                } : function(a) {
                    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                })(a)
            }
            var JSON = window && window.JSON || function() {
                function f(a) {
                    return 10 > a ? "0" + a : a
                }

                function stringify(a, b) {
                    var c, d, e, f, g, h = /["\\\x00-\x1f\x7f-\x9f]/g;
                    switch (_typeof(a)) {
                        case "string":
                            return h.test(a) ? '"' + a.replace(h, function(a) {
                                var b = m[a];
                                return b ? b : (b = a.charCodeAt(), "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16))
                            }) + '"' : '"' + a + '"';
                        case "number":
                            return isFinite(a) ? String(a) : "null";
                        case "boolean":
                        case "null":
                            return String(a);
                        case "object":
                            if (!a) return "null";
                            if ("function" == typeof a.toJSON) return stringify(a.toJSON());
                            if (c = [], "number" == typeof a.length && !a.propertyIsEnumerable("length")) {
                                for (f = a.length, d = 0; f > d; d += 1) c.push(stringify(a[d], b) || "null");
                                return "[" + c.join(",") + "]"
                            }
                            if (b)
                                for (f = b.length, d = 0; f > d; d += 1) e = b[d], "string" == typeof e && (g = stringify(a[e], b), g && c.push(stringify(e) + ":" + g));
                            else
                                for (e in a) "string" == typeof e && (g = stringify(a[e], b), g && c.push(stringify(e) + ":" + g));
                            return "{" + c.join(",") + "}"
                    }
                }
                Date.prototype.toJSON = function() {
                    return this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z"
                };
                var m = {
                    "\b": "\\b",
                    "	": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                };
                return {
                    stringify: stringify,
                    parse: function parse(text, filter) {
                        function walk(a, b) {
                            var c, d;
                            if (b && "object" === _typeof(b))
                                for (c in b) Object.prototype.hasOwnProperty.apply(b, [c]) && (d = walk(c, b[c]), void 0 !== d ? b[c] = d : delete b[c]);
                            return filter(a, b)
                        }
                        var j;
                        if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof filter ? walk("", j) : j;
                        throw new SyntaxError("parseJSON")
                    }
                }
            }();
            module.exports = JSON, window && window.dable && (window.dable.JSON = JSON)
        }, {}],
        4: [function(a, b) {
            var c, d;
            c = null != (d = "undefined" != typeof window && null !== window ? window.TEST_JSONP : void 0) ? d : function() {
                var a, b, c, d, e;
                return a = 0, b = function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                }, d = function(a) {
                    var b, c, d;
                    return d = document.createElement("script"), c = document.getElementsByTagName("head")[0], b = !1, d.src = a, d.async = !0, d.onload = d.onreadystatechange = function() {
                        return b || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (b = !0, d.onload = d.onreadystatechange = null, !d || !d.parentNode) ? void 0 : d.parentNode.removeChild(d)
                    }, c.appendChild(d)
                }, e = function(a, c) {
                    var d, f, g, h, i, j, k;
                    if (i = [], b(c))
                        for (d = f = 0, h = c.length; h > f; d = ++f) k = c[d], j = e(a + "[" + d + "]", k), j && i.push(j);
                    else if ("object" == typeof c)
                        for (g in c) k = c[g], j = e(a + "[" + g + "]", k), j && i.push(j);
                    else a && i.push(encodeURIComponent(a) + "=" + encodeURIComponent(c));
                    return i.join("&")
                }, c = function(b, c, f) {
                    var g, h, i, j;
                    i = "?", c = c || {};
                    for (h in c) c.hasOwnProperty(h) && (j = e(h, c[h]), j && (i += j + "&"));
                    return g = "dbljson" + ++a, "undefined" != typeof window && null !== window && (window[g] = function(a) {
                        var b;
                        f && f(a);
                        try {} catch (c) {
                            b = c
                        }
                    }), d(b + i + "callback=" + g), g
                }, {
                    get: c
                }
            }(), b.exports = c
        }, {}],
        5: [function(a, b) {
            var c, d, e, f, g, h, i, j, k, l;
            c = a("./JSONP.coffee"), l = a("./util.coffee"), e = a("./ga.coffee"), i = function() {
                var a, b, c, d, e, f, g, h, i;
                for (h = {
                        body: null,
                        head: null
                    }, a = document.getElementsByTagName("div"), i = document.getElementsByTagName("span"), c = 0, e = a.length; e > c; c++) b = a[c], g = b.getAttribute("itemprop"), "articleBody" === g ? h.body = b : "headline" === g && (h.head = b);
                for (d = 0, f = i.length; f > d; d++) b = i[d], g = b.getAttribute("itemprop"), "articleBody" === g ? h.body = b : "headline" === g && (h.head = b);
                return h.body && h.head ? h : null
            }, d = function(a) {
                var b;
                return b = document.createElement("textarea"), b.innerHTML = a, b.value
            }, g = {
                read: function(a, b, d, e, f) {
                    var g;
                    return g = l.protocol() + "//" + l.api_server_domain() + "/inlink_ads", g += "/services/" + encodeURIComponent(a), g += "/users/" + encodeURIComponent(b) + "/" + d, c.get(g, {}, function(a) {
                        var b, c;
                        return null != a && null != (b = a.result) && (b.data.service_id = e), f(null != a && null != (c = a.result) ? c.data : void 0)
                    })
                }
            }, j = function(a, b) {
                return document.title = b.title, a.head.innerHTML = b.article_head, a.body.innerHTML = l.stripAndExecuteScript(b.article_body), e.sendForAd({
                    campaign_id: b.campaign_id,
                    content_id: b.content_id,
                    service_id: b.service_id
                })
            }, h = {
                read: function(a, b) {
                    var d, e, f, g, h, i, j, k, m;
                    return k = a.service_name, g = a.cid, m = a.uid, e = a.campaign_id, h = a.content_id, i = a.method, f = a.channel, j = a.service_id, d = l.protocol() + "//sp-api.dable.io", d += "/services/" + encodeURIComponent(k), d += "/users/" + encodeURIComponent(m), d += "/campaigns/" + encodeURIComponent(e), d += "/contents/" + encodeURIComponent(h), c.get(d, {
                        from: window.location.href,
                        cid: g,
                        method: i,
                        channel: f
                    }, function(a) {
                        var c;
                        return c = (null != a ? a.result : void 0) || {}, c.service_name = k, c.service_id = j, b(c)
                    })
                }
            }, k = function(a, b) {
                var d, e, f, g, h, i, j, k, m, n, o;
                if (!(location.href.indexOf("/preview") > -1)) return n = b.service_name, o = b.uid, d = b.ad_id, g = b.cid, k = b.method, f = b.channel, m = d.split("-"), e = m[0], h = m[1], i = encodeURIComponent, j = l.protocol() + "//sp-api.dable.io/services/" + i(n) + ("/users/" + i(o) + "/campaigns/" + i(e)) + ("/contents/" + i(h) + "/inlinkview" + a + "s"), c.get(j, {
                    cid: g,
                    method: k,
                    channel: f
                }, function() {})
            }, f = function(a) {
                var b, c, d, e, m, n, o, p, q;
                return p = a.service_name, q = a.uid, b = a.ad_id, d = a.cid, o = a.service_id, (m = i()) ? (b || (a.ad_id = b = l.readParam("dablead")), a.method = l.readParam("method"), a.channel = l.readParam("channel"), b.indexOf("-") > -1 ? (n = b.split("-"), c = n[0], e = n[1], c && e ? h.read({
                    service_name: p,
                    cid: d,
                    uid: q,
                    campaign_id: c,
                    content_id: e,
                    method: a.method,
                    channel: a.channel,
                    service_id: o
                }, function(b) {
                    return j(m, b), b.dablena ? (setTimeout(function() {
                        return k(5, a)
                    }, 5e3), setTimeout(function() {
                        return k(30, a)
                    }, 3e4)) : void 0
                }) : void 0) : g.read(p, q, b, o, function(a) {
                    return j(m, a)
                })) : setTimeout(function() {
                    return f(a)
                }, 300)
            }, b.exports = {
                init: f
            }
        }, {
            "./JSONP.coffee": 4,
            "./ga.coffee": 13,
            "./util.coffee": 24
        }],
        6: [function(a, b) {
            var c, d, e;
            e = a("./meta.coffee"), c = ["?????????", "?????????", "??????", "??????", "??????", "??????", "19???", "?????????", "??????", "????????????", "???????????????", "??????", "?????????", "??????", "??????"], d = function() {
                var a, b, d, f, g;
                for (f = e.get_meta_value("og:title"), a = e.get_meta_value("og:description"), b = 0, d = c.length; d > b; b++)
                    if (g = c[b], f.indexOf(g) > -1 || a.indexOf(g) > -1) return !0;
                return !1
            }, b.exports = {
                isAdultContent: d
            }
        }, {
            "./meta.coffee": 19
        }],
        7: [function(a, b) {
            var c, d, e, f;
            c = a("./JSON"), f = a("./util.coffee"), d = function(a, b) {
                var c;
                return c = new XMLHttpRequest, null != (null != c ? c.withCredentials : void 0) ? c.open(a, b, !0) : "undefined" != typeof XDomainRequest ? (c = new XDomainRequest, c.open(a, b)) : c = null, c
            }, e = function(a, b, e) {
                var g;
                return (g = d("POST", a)) ? (g.onload = function() {
                    var a;
                    return a = g.responseText, e ? e(a) : void 0
                }, g.onerror = function() {}, g.setRequestHeader && g.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), g.send(c.stringify(b)), g) : (f.debug("Your browser don't support CORS"), null)
            }, b.exports = {
                post: e
            }
        }, {
            "./JSON": 3,
            "./util.coffee": 24
        }],
        8: [function(a, b) {
            var c = {
                k: 1
            };
            ! function(a) {
                "$:nomunge";
                var b, c, d, e, f = 1,
                    g = !1,
                    h = "postMessage",
                    i = "addEventListener",
                    j = window[h];
                "undefined" != typeof window.opera && window.opera.version && 9 == parseInt(window.opera.version()) && Event.prototype.__defineGetter__("origin", function() {
                    return "http://" + this.domain
                }), a[h] = function(a, b, c) {
                    b && (a = encodeURIComponent("string" == typeof a ? a : JSON.stringify(a)), c = c || parent, j ? c[h](a, b.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : b && (c.location = b.replace(/#.*$/, "") + "#" + +new Date + f++ + "&" + a))
                }, a.receiveMessage = e = function(a, f, h) {
                    j ? (a && (d && e(), d = function(b) {
                        if ("string" == typeof f && b.origin !== f || "function" == typeof f && f(b.origin) === g) return g;
                        var c = {};
                        for (var d in b) c[d] = b[d];
                        try {
                            c.data = decodeURIComponent(c.data), c.data = JSON.parse(c.data)
                        } catch (e) {}
                        a(c)
                    }), window[i] ? window[a ? i : "removeEventListener"]("message", d, g) : window[a ? "attachEvent" : "detachEvent"]("onmessage", d)) : (b && clearInterval(b), b = null, a && (h = "number" == typeof f ? f : "number" == typeof h ? h : 100, b = setInterval(function() {
                        var b = document.location.hash,
                            d = /^#?\d+&/;
                        b !== c && d.test(b) && (c = b, a({
                            data: b.replace(d, "")
                        }))
                    }, h)))
                }
            }(c), b.exports = c
        }, {}],
        9: [function(a, b) {
            var c, d, e, f, g;
            g = a("./util.coffee"), d = function() {
                var a, b, c;
                return a = window.location.hash, b = "", (null != a ? a.indexOf("dable_bridge_item=") : void 0) > -1 && (b = null != (c = a.split("dable_bridge_item=")) ? c[1] : void 0), b
            }, e = function() {
                var a, b;
                return a = null, b = window.location.href, b.indexOf("newsx_item_id=") > -1 && (a = b.split("newsx_item_id=")[1].split("&")[0]), a
            }, c = function(a) {
                return null != a ? a.innerHTML = '<div style="text-align: center;">\n  <img src="//images.dable.io/static/i/loading_m.gif" />\n</div>' : void 0
            }, f = function(a) {
                var b, e, f;
                return b = a.dom_id_or_el, f = a.onItemChange, b ? (e = "string" != typeof b ? b : document.getElementById(b), window.addEventListener("hashchange", function() {
                    var a;
                    return c(e), a = d(), f(a)
                })) : g.debug("dom id or element should be provided")
            }, b.exports = {
                init: f,
                getItemIdFromHashTag: d,
                getItemIdFromUrlPattern: e
            }
        }, {
            "./util.coffee": 24
        }],
        10: [function(a, b) {
            var c, d;
            d = function(a) {
                var b, c;
                if ("u" !== (null != (c = a.previousSibling) ? c.tagName : void 0)) return b = document.createElement("u"), b.style.position = "absolute", b.style.margin = "-20px 0 0", b.style.background = "url(//static.dable.io/static/i/loading_s.gif) no-repeat 50%", b.style.width = "20px", b.style.height = "20px", b.style.display = "none", a.parentNode.insertBefore(b, a)
            }, c = function(a, b, e) {
                var f, g, h, i, j, k, l, m;
                return m = document.getElementById(a), g = document.getElementById(b), m && g || setTimeout(function() {
                    return c(a, b)
                }, 300), d(m), i = m.previousSibling, l = 100, k = 5e3, j = "", h = 0, (f = function() {
                    var b, c;
                    return null == g ? setTimeout(function() {
                        return f()
                    }, 500) : (c = (null != g ? g.value : void 0) || "", b = c.replace(j, ""), c.length > l && b.length > 0 ? (i.style.display = "block", e(a, c, {
                        nolink: 1
                    }, function() {
                        return i.style.display = "none"
                    }), j = c, setTimeout(function() {
                        return f()
                    }, k)) : setTimeout(function() {
                        return f()
                    }, 300))
                })()
            }, b.exports = {
                init: c
            }
        }, {}],
        11: [function(a, b) {
            var c, d;
            c = function(a) {
                var b, c, d, e, f, g, h, i, j;
                for (c = ("undefined" != typeof window && null !== window ? window.COOKIE_DOCUMENT : void 0) || ("undefined" != typeof window && null !== window ? window.document : void 0), j = "", b = (null != (h = c.cookie) ? h.split(";") : void 0) || [], i = RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), e = 0, f = b.length; f > e; e++) d = b[e], (g = d.match(i)) && (j = g[1]);
                return "null" === j && (j = ""), j
            }, d = function(a) {
                return function(b, d, e) {
                    var f, g, h, i, j, k;
                    for (f = ("undefined" != typeof window && null !== window ? window.COOKIE_DOCUMENT : void 0) || ("undefined" != typeof window && null !== window ? window.document : void 0), h = window.location.hostname.split("."), j = h.length - 1; j >= 0; j += -1)
                        if (i = h[j], g = h.slice(i).join("."), k = b + "=" + d + "; path=/; domain=." + g + "; ", k += "expires=" + new Date((new Date).getTime() + e).toGMTString() + ";", f.cookie = k, c(b)) return void(a.domain = g)
                }
            }(this), b.exports = {
                check_cookie: c,
                set_cookie: d
            }
        }, {}],
        12: [function(a, b) {
            var c, d, e;
            c = function(a, b, c, d) {
                return null == d && (d = ""), a.attachEvent ? (a["e" + b + c + d] = c, a["" + b + c + d] = function() {
                    return a["e" + b + c + d](window.event)
                }, a.attachEvent("on" + b, a["" + b + c + d])) : a.addEventListener(b, c, !1)
            }, e = function(a, b, c, d) {
                return null == d && (d = ""), a.detachEvent ? (a.detachEvent("on" + b, a["" + b + c + d]), a["" + b + c + d] = null) : a.removeEventListener(b, c, !1)
            }, d = function(a, b, c) {
                var d, e;
                return null == c && (c = 100), e = void 0, d = void 0, d = a.createEvent ? a : document, e = d.createEvent("Events"), e.initEvent(b, !0, !1), setTimeout(function() {
                    return d.dispatchEvent(e, c)
                })
            }, b.exports = {
                addEvent: c,
                removeEvent: e,
                postEvent: d
            }
        }, {}],
        13: [function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
            q = a("./util.coffee"), k = "UA", h = "64397972", e = [3, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], g = "166274536", f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], j = 400, i = 20, l = function() {
                return window.ga ? void 0 : function(a, b, c, d, e, f, g) {
                    return a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
                        return (a[e].q = a[e].q || []).push(arguments)
                    }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g)
                }(window, document, "script", q.protocol() + "//www.google-analytics.com/analytics.js", "ga")
            }, m = function(a) {
                var b, c;
                return 8e3 >= a ? (c = a > 0 ? Math.floor(a / j) : 0, c >= i && (c = i - 1), b = k + "-" + h + "-" + e[c]) : 16e3 >= a ? (c = a > 0 ? Math.floor((a - 8e3) / j) : 0, c >= i && (c = i - 1), b = k + "-" + g + "-" + f[c]) : b = null, b
            }, n = function(a, b, c, d, e) {
                var f, g;
                if (!(0 >= d || void 0 === e || void 0 === a) && (l(), g = m(e), null !== g)) return ga("create", g, "auto", {
                    name: "dable",
                    sampleRate: d
                }), f = {}, e && (f.dimension1 = e), b && (f.dimension2 = b), c && (f.dimension3 = c), ga("dable.send", "pageview", f)
            }, o = function(a) {
                var b, c, d, e;
                return b = a.campaign_id, c = a.content_id, e = a.service_id, l(), ga("create", k + "-64397972-4", "auto", {
                    name: "dablead"
                }), d = {}, e && (d.dimension1 = e), b && (d.dimension2 = b), c && (d.dimension3 = c), ga("dablead.send", "pageview", d)
            }, d = 4455, c = k + "-160159977-1", p = function(a, b, e, f, g) {
                var h, i;
                if (g === d) return l(), i = c, ga("create", i, "auto", {
                    name: "dable360",
                    sampleRate: Math.min(f * j, 100)
                }), h = {}, g && (h.dimension1 = g), b && (h.dimension2 = b), e && (h.dimension3 = e), ga("dable360.send", "pageview", h)
            }, b.exports = {
                send: n,
                sendForGa360Test: p,
                sendForAd: o
            }
        }, {
            "./util.coffee": 24
        }],
        14: [function(a, b) {
            function c(a) {
                var b = a.rate,
                    c = a.logFn,
                    d = "https://pixel.adsafeprotected.com/jload?anId=931153&advId=Dable&campId=IAS_Test_Campaign_Apr2021&adsafe_par&bidurl=null";
                100 * Math.random() < b && c(d)
            }
            b.exports = {
                logIASPixelRandomly: c
            }
        }, {}],
        15: [function(a, b) {
            var c = a("./JSON"),
                d = function() {
                    try {
                        return window.localStorage.setItem("foo", "bar"), window.localStorage.removeItem("foo"), !0
                    } catch (a) {
                        return !1
                    }
                }();
            if (d) {
                var e = "_dbl_",
                    f = function(a) {
                        if (!window.localStorage.getItem(e + a)) return null;
                        var b = c.parse(window.localStorage.getItem(e + a));
                        if (!b.expire_timestamp || !b.val) return null;
                        var d = (new Date).valueOf() > b.expire_timestamp;
                        return d ? (window.localStorage.removeItem(a), null) : b.val
                    },
                    g = function(a, b) {
                        var d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3600,
                            f = (new Date).valueOf() + 1e3 * d;
                        window.localStorage.setItem(e + a, c.stringify({
                            val: b,
                            expire_timestamp: f
                        }))
                    };
                b.exports = {
                    get: f,
                    set: g
                }
            } else b.exports = {
                get: function() {
                    return null
                },
                set: function() {
                    return null
                }
            }
        }, {
            "./JSON": 3
        }],
        16: [function(a, b) {
            var c, d, e, f, g, h, i, j, k;
            c = a("./JSONP.coffee"), k = a("./util.coffee"), e = a("./ga.coffee"), i = a("./scroll-manager.coffee"), d = a("./cookie.coffee"), f = a("./ias"), g = function(a) {
                var b;
                if (a) return b = document.createElement("img"), b.setAttribute("alt", ""), b.setAttribute("src", a), b.width = "1", b.height = "1", b.style.position = "absolute", b.style.top = "-9999px", b.style.left = "-9999px", document.body.appendChild(b)
            }, h = function(a) {
                var b;
                if (a) return b = document.createElement("script"), b.setAttribute("type", "text/javascript"), b.setAttribute("src", a), b.defer = !0, document.body.appendChild(b)
            }, j = function(a, b) {
                var i, j, l, m, n, o, p, q, r, s, t, u, v;
                if (u = a.service.service_type, t = a.site || a.service.service_name, i = a.service.collect_visit_log_once_a_day, a.z = String(Math.round(1e6 * Math.random())), n = k.prefs_protocol() + "://" + k.reco_logging_server_domain(), n += "/s/" + encodeURIComponent(t) + "/u/" + encodeURIComponent(a.uid) + "/" + a.action, l = k.clone(a), delete l.service, delete l.sp_client, delete l.uid, delete l.action, delete l.site, delete l.kakao_log_url, delete l.adx_log_url, !((null != (o = l.items) && null != (p = o[0]) ? p.c1 : void 0) && k.isBrokenTextEncoding(null != (q = l.items) && null != (r = q[0]) ? r.c1 : void 0))) {
                    if (i && "visit" === a.action) {
                        if (d.check_cookie("__dbl_v")) return;
                        j = new Date, s = 60 * (23 - j.getHours()) * 60 + 60 * (59 - j.getMinutes()) + (59 - j.getSeconds()), d.set_cookie("__dbl_v", "1", 1e3 * s)
                    }
                    return c.get(n, l, function(c) {
                        var d, f, g, h, i, j, m, o;
                        return "OK" !== c && k.debug("[RECO-LOGGING API ERROR] FROM " + n + ", " + c.result), b && b(), e.send(t, null != (g = l.items) && null != (h = g[0]) ? h.c1 : void 0, null != (i = l.items) && null != (j = i[0]) ? j.c2 : void 0, a.service.ga_sample_rate || 0, a.service.service_id), e.sendForGa360Test(t, null != (m = l.items) && null != (o = m[0]) ? o.c1 : void 0, null != (d = l.items) && null != (f = d[0]) ? f.c2 : void 0, a.service.ga_sample_rate || 0, a.service.service_id)
                    }), "jogunshop.com" !== t || "buy" !== a.action && "visit" !== a.action || ("buy" === a.action ? (v = k.protocol() + "//" + k.sp_api_server_domain() + "/logs", v += "/clients/jogunshop.com", v += "/users/" + encodeURIComponent(a.uid) + "/purchase", m = k.clone(l), m.value = function() {
                        var a, b, c, d, e;
                        for (e = 0, d = m.items, a = 0, c = d.length; c > a; a++) b = d[a], e += Number(b.total_sales || 0);
                        return e
                    }(), m.currency = "KRW", delete m.items, c.get(v, m, function() {})) : d.check_cookie("__dbl_jogun_pv") || (v = k.protocol() + "//" + k.sp_api_server_domain() + "/logs", v += "/clients/jogunshop.com", v += "/users/" + encodeURIComponent(a.uid) + "/visit", j = new Date, s = 60 * (23 - j.getHours()) * 60 + 60 * (59 - j.getMinutes()) + (59 - j.getSeconds()), d.set_cookie("__dbl_jogun_pv", "1", 1e3 * s), c.get(v, l, function() {}))), a.service.tg_client_name && setTimeout(function() {
                        return function() {
                            return ("undefined" != typeof window && null !== window ? window.dablena : void 0) || ! function(a, b, c, d, e, f) {
                                return a[c] = a[c] || function() {
                                    return (a[c].q = a[c].q || []).push(arguments)
                                }, e = b.createElement(d), e.async = 1, e.charset = "utf-8", e.src = k.protocol() + "//static.dable.io/dist/dablena.min.js", f = b.getElementsByTagName(d)[0], f.parentNode.insertBefore(e, f)
                            }(window, document, "dablena", "script"), dablena("init", a.service.tg_client_name), dablena("isTgClient", 1), dablena("track", "PageView")
                        }
                    }(this), 3e3), g(a.kakao_log_url), g(a.adx_log_url), f.logIASPixelRandomly({
                        rate: a.service.ga_sample_rate,
                        logFn: h
                    })
                }
            }, b.exports = {
                sendActionLog: j
            }
        }, {
            "./JSONP.coffee": 4,
            "./cookie.coffee": 11,
            "./ga.coffee": 13,
            "./ias": 14,
            "./scroll-manager.coffee": 22,
            "./util.coffee": 24
        }],
        17: [function(a, b) {
            var c = function() {
                function a(a, b) {
                    if (!e[a]) {
                        e[a] = {};
                        for (var c = 0; c < a.length; c++) e[a][a.charAt(c)] = c
                    }
                    return e[a][b]
                }
                var b = String.fromCharCode,
                    c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
                    e = {},
                    f = {
                        compressToBase64: function(a) {
                            if (null == a) return "";
                            var b = f._compress(a, 6, function(a) {
                                return c.charAt(a)
                            });
                            switch (b.length % 4) {
                                default:
                                case 0:
                                    return b;
                                case 1:
                                    return b + "===";
                                case 2:
                                    return b + "==";
                                case 3:
                                    return b + "="
                            }
                        },
                        decompressFromBase64: function(b) {
                            return null == b ? "" : "" == b ? null : f._decompress(b.length, 32, function(d) {
                                return a(c, b.charAt(d))
                            })
                        },
                        compressToUTF16: function(a) {
                            return null == a ? "" : f._compress(a, 15, function(a) {
                                return b(a + 32)
                            }) + " "
                        },
                        decompressFromUTF16: function(a) {
                            return null == a ? "" : "" == a ? null : f._decompress(a.length, 16384, function(b) {
                                return a.charCodeAt(b) - 32
                            })
                        },
                        compressToUint8Array: function(a) {
                            for (var b = f.compress(a), c = new Uint8Array(2 * b.length), d = 0, e = b.length; e > d; d++) {
                                var g = b.charCodeAt(d);
                                c[2 * d] = g >>> 8, c[2 * d + 1] = g % 256
                            }
                            return c
                        },
                        decompressFromUint8Array: function(a) {
                            if (null === a || void 0 === a) return f.decompress(a);
                            for (var c = new Array(a.length / 2), d = 0, e = c.length; e > d; d++) c[d] = 256 * a[2 * d] + a[2 * d + 1];
                            var g = [];
                            return c.forEach(function(a) {
                                g.push(b(a))
                            }), f.decompress(g.join(""))
                        },
                        compressToEncodedURIComponent: function(a) {
                            return null == a ? "" : f._compress(a, 6, function(a) {
                                return d.charAt(a)
                            })
                        },
                        decompressFromEncodedURIComponent: function(b) {
                            return null == b ? "" : "" == b ? null : (b = b.replace(/ /g, "+"), f._decompress(b.length, 32, function(c) {
                                return a(d, b.charAt(c))
                            }))
                        },
                        compress: function(a) {
                            return f._compress(a, 16, function(a) {
                                return b(a)
                            })
                        },
                        _compress: function(a, b, c) {
                            if (null == a) return "";
                            var d, e, f, g = {},
                                h = {},
                                i = "",
                                j = "",
                                k = "",
                                l = 2,
                                m = 3,
                                n = 2,
                                o = [],
                                p = 0,
                                q = 0;
                            for (f = 0; f < a.length; f += 1)
                                if (i = a.charAt(f), Object.prototype.hasOwnProperty.call(g, i) || (g[i] = m++, h[i] = !0), j = k + i, Object.prototype.hasOwnProperty.call(g, j)) k = j;
                                else {
                                    if (Object.prototype.hasOwnProperty.call(h, k)) {
                                        if (k.charCodeAt(0) < 256) {
                                            for (d = 0; n > d; d++) p <<= 1, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++;
                                            for (e = k.charCodeAt(0), d = 0; 8 > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++, e >>= 1
                                        } else {
                                            for (e = 1, d = 0; n > d; d++) p = p << 1 | e, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++, e = 0;
                                            for (e = k.charCodeAt(0), d = 0; 16 > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++, e >>= 1
                                        }
                                        l--, 0 == l && (l = Math.pow(2, n), n++), delete h[k]
                                    } else
                                        for (e = g[k], d = 0; n > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++, e >>= 1;
                                    l--, 0 == l && (l = Math.pow(2, n), n++), g[j] = m++, k = String(i)
                                } if ("" !== k) {
                                if (Object.prototype.hasOwnProperty.call(h, k)) {
                                    if (k.charCodeAt(0) < 256) {
                                        for (d = 0; n > d; d++) p <<= 1, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++;
                                        for (e = k.charCodeAt(0), d = 0; 8 > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++, e >>= 1
                                    } else {
                                        for (e = 1, d = 0; n > d; d++) p = p << 1 | e, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++, e = 0;
                                        for (e = k.charCodeAt(0), d = 0; 16 > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++, e >>= 1
                                    }
                                    l--, 0 == l && (l = Math.pow(2, n), n++), delete h[k]
                                } else
                                    for (e = g[k], d = 0; n > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++, e >>= 1;
                                l--, 0 == l && (l = Math.pow(2, n), n++)
                            }
                            for (e = 2, d = 0; n > d; d++) p = p << 1 | 1 & e, q == b - 1 ? (q = 0, o.push(c(p)), p = 0) : q++, e >>= 1;
                            for (;;) {
                                if (p <<= 1, q == b - 1) {
                                    o.push(c(p));
                                    break
                                }
                                q++
                            }
                            return o.join("")
                        },
                        decompress: function(a) {
                            return null == a ? "" : "" == a ? null : f._decompress(a.length, 32768, function(b) {
                                return a.charCodeAt(b)
                            })
                        },
                        _decompress: function(a, c, d) {
                            var e, f, g, h, i, j, k, l, m = [],
                                n = 4,
                                o = 4,
                                p = 3,
                                q = "",
                                r = [],
                                s = {
                                    val: d(0),
                                    position: c,
                                    index: 1
                                };
                            for (f = 0; 3 > f; f += 1) m[f] = f;
                            for (h = 0, j = Math.pow(2, 2), k = 1; k != j;) i = s.val & s.position, s.position >>= 1, 0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, k <<= 1;
                            switch (e = h) {
                                case 0:
                                    for (h = 0, j = Math.pow(2, 8), k = 1; k != j;) i = s.val & s.position, s.position >>= 1, 0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, k <<= 1;
                                    l = b(h);
                                    break;
                                case 1:
                                    for (h = 0, j = Math.pow(2, 16), k = 1; k != j;) i = s.val & s.position, s.position >>= 1, 0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, k <<= 1;
                                    l = b(h);
                                    break;
                                case 2:
                                    return ""
                            }
                            for (m[3] = l, g = l, r.push(l);;) {
                                if (s.index > a) return "";
                                for (h = 0, j = Math.pow(2, p), k = 1; k != j;) i = s.val & s.position, s.position >>= 1, 0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, k <<= 1;
                                switch (l = h) {
                                    case 0:
                                        for (h = 0, j = Math.pow(2, 8), k = 1; k != j;) i = s.val & s.position, s.position >>= 1, 0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, k <<= 1;
                                        m[o++] = b(h), l = o - 1, n--;
                                        break;
                                    case 1:
                                        for (h = 0, j = Math.pow(2, 16), k = 1; k != j;) i = s.val & s.position, s.position >>= 1, 0 == s.position && (s.position = c, s.val = d(s.index++)), h |= (i > 0 ? 1 : 0) * k, k <<= 1;
                                        m[o++] = b(h), l = o - 1, n--;
                                        break;
                                    case 2:
                                        return r.join("")
                                }
                                if (0 == n && (n = Math.pow(2, p), p++), m[l]) q = m[l];
                                else {
                                    if (l !== o) return null;
                                    q = g + g.charAt(0)
                                }
                                r.push(q), m[o++] = g + q.charAt(0), n--, g = q, 0 == n && (n = Math.pow(2, p), p++)
                            }
                        }
                    };
                return f
            }();
            "function" == typeof define && define.amd ? define(function() {
                return c
            }) : "undefined" != typeof b && null != b && (b.exports = c)
        }, {}],
        18: [function(a, b) {
            var c, d, e;
            e = a("./util.coffee"), d = function(a, b) {
                var f, g;
                if (null == b && (b = !1), c.auto) return a();
                if ("undefined" != typeof window && null !== window && null != (g = window.dable) ? g.mall : void 0) {
                    for (f in window.dable.mall) c[f] = window.dable.mall[f];
                    return a()
                }
                return b || e.includeScript(e.protocol() + "//static.dable.io/dist/mall.min.js"), setTimeout(function() {
                    return d(a, !0)
                }, 200)
            }, c = {
                prepare: d
            }, b.exports = c
        }, {
            "./util.coffee": 24
        }],
        19: [function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
            d = a("./ajax.coffee"), w = a("./util.coffee"), c = a("./JSONP.coffee"), i = a("./crc32.js"), n = function() {
                return null != ("undefined" != typeof document && null !== document ? document.querySelectorAll : void 0)
            }, u = function(a, b) {
                var c, d, e, f, g;
                for (c = a.split("/"), g = b.split("/"), "/" === b.substr(0, 1) && (c.splice(3, c.length), g.splice(0, 1)), d = 0, e = g.length; e > d; d++) f = g[d], ".." === f ? c.length > 3 && c.splice(-1, 1) : "." !== f && f && c.push(f);
                return c.join("/")
            }, e = function(a) {
                var b, c;
                return a ? (c = location.href, b = a.match(/https?:\/\/[^"^'^>]+/), (null != b ? b[0] : void 0) ? b[0] : (b = a.match(/\/\/[^"^'^\\^>]+/), (null != b ? b[0] : void 0) ? b[0] : (b = a.match(/[ \t\r\n]src="(\.?\.?\/[^"]+)"/), b || (b = a.match(/[ \t\r\n]src='(\.?\.?\/[^']+)'/)), (null != b ? b[1] : void 0) ? u(c, b[1]) : u(c, a)))) : ""
            }, f = function(a) {
                return null == a ? a : (a = a.replace(/\r?\n?/g, ""), a = a.replace(/<script(?:(?!<\/script>).)+(<\/script>)?/gi, ""), a = a.replace(/<[^>]*>/g, ""), a = a.replace(/[^0-9^\.]+/g, ""))
            }, g = function(a) {
                return null == a ? a : (a = a.replace(/&amp;/g, "&"), a = a.replace(/[\&]utm_[^=^&]+=[^&]+/g, ""), a = a.replace(/[\?]utm_[^=^&]+=[^&]+/g, "?"), a = a.replace(/\?\&/, "?"))
            }, h = function(a, b) {
                var c, d;
                return null == b && (b = {}), d = b.nocut, c = b.cut, a.match(/\uFFFD/) ? "" : null == a ? "" : (a = a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " "), d ? a : c ? a.substr(0, c) : a.substr(0, 200))
            }, m = function() {
                var a, b;
                return a = null, b = (new Date).valueOf() + 1e3,
                    function(c, d) {
                        var e, f, g, h, i, j, k;
                        if (null == d && (d = !0), (!a || b < (new Date).valueOf()) && (a = document.getElementsByTagName("meta")), e = a.length, !e) return "";
                        if (d) {
                            for (g = h = k = a.length - 1; 0 >= k ? 0 >= h : h >= 0; g = 0 >= k ? ++h : --h)
                                if (f = a[g], f.getAttribute("property") === c || f.getAttribute("name") === c) return f.getAttribute("content") || f.getAttribute("value") || ""
                        } else
                            for (i = 0, j = a.length; j > i; i++)
                                if (f = a[i], f.getAttribute("property") === c || f.getAttribute("name") === c) return f.getAttribute("content") || f.getAttribute("value") || "";
                        return ""
                    }
            }(), j = function() {
                var a;
                return a = null,
                    function() {
                        var b, c, d, e, f;
                        a || (a = document.getElementsByTagName("link"));
                        try {
                            for (d = e = f = a.length - 1; 0 >= f ? 0 >= e : e >= 0; d = 0 >= f ? ++e : --e)
                                if (c = a[d], "canonical" === c.getAttribute("rel")) return c.getAttribute("href")
                        } catch (g) {
                            return b = g, ""
                        }
                        return ""
                    }
            }(), l = function(a) {
                var b;
                return b = document.getElementById(a), null != b ? b.innerHTML : void 0
            }, k = function(a) {
                var b, c;
                return b = document.querySelectorAll(a), null != b && null != (c = b[0]) ? c.innerHTML : void 0
            }, r = function() {
                var a, b;
                return a = "object" == (b = typeof document.querySelector) || "function" === b, a && document.querySelector('[itemprop="articleBody"],.__dable_article_body')
            }, q = function() {
                var a;
                return n() ? (a = r(), (null != a ? a.innerText : void 0) || null) : null
            }, p = function(a) {
                var b, c, d, i, o;
                if (!n()) return null;
                for (a || (a = ["item_id", "no_meta_update", "url", "title", "image_url", "price", "author", "currency", "sale_price", "sale_currency", "availability", "description", "category1", "category2", "category3", "custom1", "custom2", "custom3", "custom4", "custom5", "published_time"]), i = {
                        no_meta_update: function() {
                            return h(m("dable:no_meta_update"))
                        },
                        item_id: function() {
                            return h(m("dable:item_id"))
                        },
                        url: function() {
                            var a;
                            return a = g(m("dable:url") || m("og:url") || j()), "//" === a.substr(0, 2) && (a = window.location.protocol + a), a
                        },
                        title: function() {
                            return h(k(".__dable_title") || m("dable:title") || m("og:title") || m("title") || document.title)
                        },
                        image_url: function() {
                            var a;
                            return a = e(m("dable:image") || m("og:image") || m("og:image:url")), "//" === a.substr(0, 2) && (a = window.location.protocol + a), a
                        },
                        price: function() {
                            return f(k(".__dable_price") || m("product:price:amount"))
                        },
                        author: function() {
                            return h(m("product:brand") || m("dable:author") || m("article:author") || m("author")) || null
                        },
                        currency: function() {
                            return h(m("product:price:currency"))
                        },
                        sale_price: function() {
                            return f(m("product:sale_price:amount"))
                        },
                        sale_currency: function() {
                            return h(m("product:sale_price:currency"))
                        },
                        availability: function() {
                            var a, b, c, d, e;
                            return b = null, a = document.querySelectorAll("[data-dable-availability]"), (null != a && null != (c = a[0]) ? c.hasAttribute("data-dable-availability") : void 0) && (e = null != a && null != (d = a[0]) ? d.getAttribute("data-dable-availability") : void 0, "displaynone" !== e && (b = "oos")), b || (b = k(".__dable_availability") && "oos" || m("product:availability") || null), b
                        },
                        description: function() {
                            return h(m("dable:description") || m("og:description")).substr(0, 100)
                        },
                        category1: function() {
                            return h(m("dable:section") || l("article:section") || m("article:section") || m("product:category"), {
                                cut: 64
                            })
                        },
                        category2: function() {
                            return h(m("dable:section2") || m("article:section2") || m("product:category2"), {
                                cut: 64
                            })
                        },
                        category3: function() {
                            return h(m("dable:section3") || m("article:section3") || m("product:category3"), {
                                cut: 64
                            })
                        },
                        custom1: function() {
                            return h(m("dable:custom1"))
                        },
                        custom2: function() {
                            return h(m("dable:custom2"))
                        },
                        custom3: function() {
                            return h(m("dable:custom3"))
                        },
                        custom4: function() {
                            return h(m("dable:custom4"))
                        },
                        custom5: function() {
                            return h(m("dable:custom5"))
                        },
                        published_time: function() {
                            return h(m("dable:published_time") || m("article:published_time")) || null
                        }
                    }, b = {}, c = 0, d = a.length; d > c; c++) o = a[c], b[o] = i[o]();
                return b
            }, s = function() {
                return function(a) {
                    var b, c, d, e, f;
                    for (a || (a = ["item_id", "url", "category1", "category2", "category3", "comment_count"]), e = {
                            item_id: function() {
                                return h(m("dable:item_id"))
                            },
                            url: function() {
                                var a;
                                return a = g(m("dable:url") || m("og:url") || j()), "//" === a.substr(0, 2) && (a = "http:" + a), a
                            },
                            category1: function() {
                                return h(l("article:section") || m("article:section") || m("product:category"), {
                                    cut: 64
                                })
                            },
                            category2: function() {
                                return h(m("article:section2") || m("product:category2"), {
                                    cut: 64
                                })
                            },
                            category3: function() {
                                return h(m("article:section3") || m("product:category3"), {
                                    cut: 64
                                })
                            },
                            comment_count: function() {
                                return h(m("dable:comment_count"))
                            },
                            published_time: function() {
                                return h(m("dable:published_time") || m("article:published_time")) || null
                            }
                        }, b = {}, c = 0, d = a.length; d > c; c++) f = a[c], b[f] = e[f]();
                    return b
                }
            }(), o = function(a) {
                var b, c;
                return b = function() {
                    return "view" !== a ? !0 : !/dable=/.test(window.location.href)
                }, c = function() {
                    return "oos" === p(["availability"]).availability || "out of stock" === p(["availability"]).availability
                }, b() ? !1 : c()
            }, v = function(a, b, e) {
                var f, g;
                if (0 !== (null != b ? b.length : void 0) && (null != b && null != (g = b[0]) ? g.id : void 0) && n()) return f = window.location.href, setTimeout(function() {
                    var g, h, j, k, l, m;
                    return h = e.is_update_article_body, j = null != b ? b[0].id : void 0, g = p(), g && g.title && "true" !== g.no_meta_update && !(g.item_id && j !== g.item_id || f !== window.location.href || w.isBrokenTextEncoding(g.title) || "superich.co.kr" === a && -1 === ("undefined" != typeof window && null !== window && null != (k = window.navigator) && null != (l = k.userAgent) ? l.indexOf("IE") : void 0)) ? (m = w.protocol() + "//" + w.api_server_domain() + "/items/services", m += "/" + encodeURIComponent(a) + "/id", m += "/" + encodeURIComponent(j) + "/checksum", c.get(m, {}, function(b) {
                        var e, f, k, l, n, o, p, r, s, t, u;
                        if (p = null != b && null != (r = b.result) ? r.checksum : void 0, o = null != b && null != (s = b.result) ? s.body_length : void 0, "BLOCKED" !== p) {
                            if (f = g.url, e = g.description, delete g.url, delete g.description, delete g.no_meta_update, delete g.item_id, n = i(g), f && (g.url = f), e && (g.description = e.substr(0, 100)), n !== p && (g.body_length = (null != (t = q()) ? t.length : void 0) || 0), m = w.protocol() + "//" + w.api_server_domain() + "/items/services", m += "/" + encodeURIComponent(a) + "/id", m += "/" + encodeURIComponent(j) + "/update", h && (k = q(), l = (null != k ? k.length : void 0) || 0, l > 100 && (l / o > 1.1 || .9 > l / o))) {
                                if (g.articleBody = k, u = d.post(m, g, function() {})) return;
                                delete g.articleBody
                            }
                            if (n !== p) return c.get(m, g, function() {})
                        }
                    })) : void 0
                }, window.TEST_META_UPDATE_DELAY || 5e3)
            }, "undefined" != typeof window && null !== window && null != (t = window.dable) && (t.__meta_test = p), b.exports = {
                read: p,
                read_body: q,
                read_body_el: r,
                read_item: s,
                get_meta_value: m,
                is_hidden: o,
                update_item: v,
                cleansing_value: h
            }
        }, {
            "./JSONP.coffee": 4,
            "./ajax.coffee": 7,
            "./crc32.js": 34,
            "./util.coffee": 24
        }],
        20: [function(a, b) {
            var c, d, e, f, g;
            c = {}, f = -1, e = function(a, b) {
                var d;
                return null == c[a] && (c[a] = []), d = (++f).toString(), c[a].push({
                    subscriberId: d,
                    func: b
                }), d
            }, d = function(a, b) {
                return c[a] ? (setTimeout(function() {
                    var d, e, f;
                    for (f = c[a], d = f.length || 0, e = []; d--;) e.push(f[d].func(b));
                    return e
                }, 0), !0) : !1
            }, g = function(a) {
                var b, d, e, f, g, h, i, j;
                for (b = 0, g = c.length; g > b; b++)
                    if (i = c[b], c[i])
                        for (j = c[i], d = f = 0, h = j.length; h > f; d = ++f)
                            if (e = j[d], e.subscriberId === a) return c[i].splice(d, 1), a;
                return !1
            }, b.exports = {
                publish: d,
                subscribe: e,
                unsubscribe: g
            }
        }, {}],
        21: [function(a, b) {
            var c, d, e, f, g, h;
            h = a("./util.coffee"), c = [{
                path: /(www\.)?bing\.com\/search/,
                param: "q"
            }, {
                path: "search.zum.com/search.zum",
                param: "query"
            }, {
                path: /(www\.)?google\.[a-z\.]+\/search/,
                param: "q"
            }, {
                path: /[a-z\.]*search\.naver\.com\/search\.naver/,
                param: "query"
            }, {
                path: /[a-z\.]*search\.daum\.net\/search/,
                param: "q"
            }], d = function(a, b) {
                var c, d;
                try {
                    return d = decodeURIComponent(a), b(d)
                } catch (e) {
                    return c = e, JSONP.get(h.protocol() + "//api.dable.io/util/decodeuriforeuckr", {
                        str: a
                    }, function(a) {
                        return b(a.result)
                    })
                }
            }, f = function(a, b) {
                var c, d, e, f;
                if (-1 === a.indexOf("?")) return null;
                for (f = a.substr(a.indexOf("?") + 1).split("&"), c = 0, d = f.length; d > c; c++)
                    if (e = f[c], 0 === e.indexOf(b + "=")) return e.substr(e.indexOf("=") + 1);
                return null
            }, g = function(a) {
                var b, d, e, f;
                for (f = null, b = 0, d = c.length; d > b; b++) e = c[b], e.path instanceof RegExp && e.path.test(a) ? f = e : "string" == typeof e.path && a.indexOf(e.path) > -1 && (f = e);
                return f
            }, e = function(a, b) {
                var c, e;
                return (c = g(a)) ? (e = f(a, c.param), d(e, function(a) {
                    return b(a)
                })) : b(null)
            }, b.exports = {
                fetch: e
            }
        }, {
            "./util.coffee": 24
        }],
        22: [function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o = [].slice;
            e = a("./event.coffee"), n = a("./util.coffee"), l = null, k = [], c = function(a, b) {
                var c, d, e, f, g;
                if (a.elapsed_milisec = a.elapsed_milisec + 100, a.elapsed_milisec >= 1e3) {
                    for (g = [], c = d = 0, f = k.length; f > d && (e = k[c], e); c = ++d) e.interval_id === a.interval_id ? (k.splice(c, 1), a.cb(b), clearInterval(a.interval_id), g.push(a.isIntervalRegistered = !1)) : g.push(void 0);
                    return g
                }
            }, d = function() {
                var a, b, d, e, f, g;
                for (g = n.getScrollY(), f = [], a = b = 0, e = k.length; e > b && (d = k[a], d); a = ++b) "offsetY" === d.cb_trigger_type ? d.offsety <= g ? (k.splice(a, 1), f.push(d.cb(g))) : f.push(void 0) : "watching_area" === d.cb_trigger_type && "start_and_end_once" === d.cb_timing ? d.expose_scroll_y.top <= g && g <= d.expose_scroll_y.bottom ? d.is_started ? f.push(void 0) : (d.is_started = !0, f.push(d.cb(g, "start"))) : d.is_started ? (d.is_started = !1, f.push(d.cb(g, "end"))) : f.push(void 0) : d.offsety <= g && g <= d.posEndY ? d.isIntervalRegistered ? f.push(void 0) : (d.isIntervalRegistered = !0, f.push(d.interval_id = setInterval(c.bind(null, d, g), 100))) : d.isIntervalRegistered ? (d.isIntervalRegistered = !1, clearInterval(d.interval_id), f.push(d.elapsed_milisec = 0)) : f.push(void 0);
                return f
            }, g = function() {
                return l && clearTimeout(l), l = setTimeout(d, 100)
            }, e.addEvent(n.get_scroll_base_el(), "scroll", g, 999999 * Math.random()), i = function(a, b) {
                var c, e, f, g, h, i, j, l;
                return e = null != (i = a.cb_trigger_type) ? i : "offsetY", c = a.cb_timing, h = a.offsety, g = null != (j = a.isWatchWithTimer) ? j : !1, f = null != (l = a.expose_scroll_y) ? l : null, k.push({
                    cb_trigger_type: e,
                    cb_timing: c,
                    offsety: h,
                    isWatchWithTimer: g,
                    expose_scroll_y: f,
                    elapsed_milisec: 0,
                    cb: b
                }), d()
            }, f = function(a) {
                var b, c, d;
                for (b = 0, d = k.length; d > b; b++)
                    if (c = k[b], c.cb === a) return !0;
                return !1
            }, m = function(a) {
                var b, c, d, e, f;
                for (f = [], b = c = 0, e = k.length; e > c; b = ++c) {
                    if (d = k[b], d.cb === a) {
                        clearTimeout(d.interval_id), k.splice(b, 1);
                        break
                    }
                    f.push(void 0)
                }
                return f
            }, j = function(a) {
                var b, c, d, e, f, g, h, j, k, l, p, q, r, s, t, u;
                s = a.targetElement, h = a.method, e = a.cb_trigger_type, d = a.cb_timing, j = null != (k = a.offsetY) ? k : 0, u = a.watching_top, t = a.watching_bottom, r = null != (l = a.reregisterIntervalMs) ? l : null, g = null != (p = a.isWatchWithTimer) ? p : !1, c = !1, b = function() {
                    var a;
                    return a = 1 <= arguments.length ? o.call(arguments, 0) : [], c = !0, h.apply(null, a)
                }, q = function(f) {
                    var h, k, l;
                    if (!c) return f || m(b), h = n.getOffsetY(s), h !== !1 && (l = h - n.getHeight().viewport + j, k = null, "watching_area" === e && (k = {
                        top: u - n.getHeight().viewport,
                        bottom: t
                    }), a = {
                        cb_trigger_type: e,
                        cb_timing: d,
                        offsety: l,
                        isWatchWithTimer: g,
                        expose_scroll_y: k
                    }, i(a, b)), r ? setTimeout(q, r) : void 0
                };
                try {
                    return top.window.location.href, q(!0)
                } catch (v) {
                    return f = v, h(null)
                }
            }, h = function(a) {
                var b, c, d, e, f, g, h;
                g = a.targetElement, d = null != (f = a.offsetY) ? f : 0;
                try {
                    top.window.location.href
                } catch (i) {
                    return b = i, !0
                }
                return h = n.getScrollY(), c = n.getOffsetY(g), c !== !1 ? (e = c - n.getHeight().viewport + d, h >= e) : !1
            }, b.exports = {
                listen: i,
                listenByElement: j,
                exists: f,
                unlisten: m,
                isElWithinOffsetY: h
            }
        }, {
            "./event.coffee": 12,
            "./util.coffee": 24
        }],
        23: [function(a, b) {
            var c, d, e, f, g, h, i, j;
            j = a("../util.coffee"), g = "ds-popup-" + parseInt(999999 * Math.random()), f = "ds-frame-" + parseInt(999999 * Math.random()), d = function(a) {
                var b, d, e, h, i, k, l, m, n;
                return b = a.campaign_id, m = a.is_mobile, e = a.custom_w, d = a.custom_h, document.getElementById(g) ? void 0 : (h = document.createElement("div"), h.id = g, h.style.position = "fixed", h.style.zIndex = "99999999", h.style.top = "0", h.style.right = "0", h.style.bottom = "0", h.style.left = "0", h.style.textAlign = "center", h.style.display = "none", h.style.overflow = "auto", i = document.createElement("div"), i.style.position = "fixed", i.style.top = "0", i.style.right = "0", i.style.bottom = "0", i.style.left = "0", i.style.backgroundColor = "#000", i.style.opacity = ".8", i.style.filter = "alpha(opacity=80)", i.onclick = c, k = document.createElement("div"), k.className = "dable-minicontent-wrap", m ? (n = e || "95%", l = d || "100%", k.style.position = "fixed", k.style.top = "0", k.style.right = "0", k.style.bottom = "0", k.style.left = "0", /^[0-9]+$/.test(l) && (l = Number(l), k.style.top = "50%", k.style.bottom = "auto", k.style.marginTop = "-" + l / 2 + "px")) : (n = e || 550, l = d || Math.max(j.getHeight().viewport - 100, 400), k.style.position = "absolute", k.style.top = "50px", k.style.left = "50%", k.style.margin = "0 0 0 -" + n / 2 + "px", k.style.width = n + "px", k.style.height = l + "px", k.style.borderRadius = "2px"), k.innerHTML = "<iframe src='about:blank' id='" + f + "' width='" + n + "' height='" + l + "' frameborder='0' scrolling='yes' ></iframe>", h.appendChild(i), h.appendChild(k), document.body.appendChild(h))
            }, e = !1, i = function(a) {
                var b, c, h, i, k, l, m, n, o, p, q, r, s, t, u;
                return b = a.campaign_id, c = a.content_id, u = null != (r = a.service_name) ? r : "", n = null != (s = a.is_content_request) ? s : !1, o = a.is_mobile, m = a.is_IOS, p = null != (t = a.nocache) ? t : !1, i = a.custom_w, h = a.custom_h, e || (l = /iPad|iPhone|iPod/.test(navigator.userAgent), j.insertCss(l ? ".dable-minicontent-body{overflow:hidden;position:fixed;}" : ".dable-minicontent-body{overflow:hidden;}"), j.insertCss(".dable-minicontent-wrap{overflow:auto;-webkit-overflow-scrolling:touch}"), e = !0), d({
                    campaign_id: b,
                    is_mobile: o,
                    custom_w: i,
                    custom_h: h
                }), q = document.getElementById(g), k = document.getElementById(f), k.src = j.protocol() + "//news.dable.io/" + encodeURIComponent(b + "-" + c) + "/minicontent?is_mobile=" + (o && "1" || "") + ("&is_IOS=" + (m && "1" || "")) + ("&from=" + encodeURIComponent(window.location.href)) + ("&service_name=" + encodeURIComponent(u)) + (n && "&is_content_request=1" || "") + (p && "&nocache=1" || ""), q.style.display = "block", document.body.className += " dable-minicontent-body"
            }, c = function() {
                var a;
                return a = document.getElementById(g), document.body.className = document.body.className.replace(" dable-minicontent-body", ""), a ? a.parentNode.removeChild(a) : void 0
            }, "undefined" != typeof window && null !== window && null != (h = window.dable) && (h.__minicontent = {
                show: i,
                close: c
            }), b.exports = {
                show: i,
                close: c
            }
        }, {
            "../util.coffee": 24
        }],
        24: [function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
            n = !1, c = 10;
            try {
                for (i = window, e = null, h = 0; c > h && (null != (q = i.parent) && null != (r = q.document) ? r.body : void 0) && (null != (s = i.parent) ? s.window : void 0) && i.parent !== i;) {
                    for (e = i.parent, d = e.window.innerHeight, p = null, j = e.document.getElementsByTagName("iframe"), m = 0, o = j.length; o > m; m++) l = j[m], l.contentWindow === i && (p = l);
                    if (n = !!p, !(null != j ? j.length : void 0) || !n) break;
                    i = i.parent.window, h++
                }
            } catch (v) {
                k = v
            }
            g = window, f = "https:" === ("undefined" != typeof window && null !== window && null != (t = window.location) ? t.protocol : void 0) ? "https:" : "http:", u = {
                is_parent_window_exists_and_accessible: function() {
                    return n
                },
                root_window: function() {
                    return i
                },
                get_scroll_base_el: function() {
                    return g
                },
                set_scroll_base_el: function(a) {
                    return g = a
                },
                get_parent_frame: function(a) {
                    var b, c, d, e, f, g;
                    try {
                        for (b = a.ownerDocument, g = b.defaultView || b.parentWindow, j = null != (e = g.parent) && null != (f = e.document) ? f.getElementsByTagName("iframe") : void 0, c = 0, d = j.length; d > c; c++)
                            if (l = j[c], l.contentWindow === g) return l
                    } catch (h) {
                        k = h
                    }
                    return null
                },
                api_server_domain: function() {
                    return ("undefined" != typeof window && null !== window ? window.TEST_API_SERVER_DOMAIN : void 0) || "api.dable.io"
                },
                sp_api_server_domain: function() {
                    return ("undefined" != typeof window && null !== window ? window.TEST_SP_API_SERVER_DOMAIN : void 0) || "sp-api.dable.io"
                },
                banner_server_domain: function() {
                    return ("undefined" != typeof window && null !== window ? window.TEST_BANNER_SERVER_DOMAIN : void 0) || "ax-bn.dable.io"
                },
                reco_logging_server_domain: function() {
                    return ("undefined" != typeof window && null !== window ? window.TEST_RECO_LOGGING_SERVER_DOMAIN : void 0) || "r-log.dable.io"
                },
                prefs_protocol: function() {
                    return ("undefined" != typeof window && null !== window ? window.TEST_PREFS_PROTOCOL : void 0) || "https"
                },
                set_protocol: function(a) {
                    return f = a
                },
                protocol: function() {
                    return f
                },
                debug: function(a) {
                    var b;
                    try {
                        return null != (b = window.console) && "function" == typeof b.log ? b.log("Dable DEBUG: " + a) : void 0
                    } catch (c) {
                        k = c
                    }
                },
                attr: function(a, b) {
                    return a.getAttribute(b)
                },
                isArray: function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                getUidGroup: function(a) {
                    var b, c;
                    return c = String(a).split(".")[0], b = parseInt(c.substr(c.length - 1, 1), 10)
                },
                isSafari: function() {
                    var a;
                    return a = navigator.userAgent.toLowerCase(), -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome") && -1 === a.indexOf("crios") && -1 === a.indexOf("fxios")
                },
                isMobileDevice: function() {
                    var a;
                    return a = navigator.userAgent || "", /(android).+mobile|\(.*ip(hone|od)|opera m(ob|in)i/i.test(a)
                },
                isMobileView: function() {
                    var a, b, c, d, e;
                    return e = window.innerWidth || (null != (a = document.documentElement) ? a.clientWidth : void 0) || (null != (b = document.body) ? b.clientWidth : void 0), d = 500 >= e, c = u.isMobileDevice(), c || d
                },
                isIOSDevice: function() {
                    var a;
                    return a = navigator.userAgent.toLowerCase(), /ip(hone|od|ad)/i.test(a)
                },
                isScrollBottom: function(a, b) {
                    var c, d, e, f, g, h, i, j, l, m, o;
                    if (null == b && (b = 10), n) try {
                        m = parent.window, c = parent.document
                    } catch (p) {
                        k = p
                    } else m = window, c = document;
                    try {
                        e = a && u.getElemHeight(a) + u.getOffsetY(a) || (null != c && null != (f = c.body) ? f.offsetHeight : void 0), o = 0, u.get_scroll_base_el() !== m && (null != (g = u.get_scroll_base_el()) ? g.scrollTop : void 0) ? o = u.get_scroll_base_el().scrollTop : "number" == typeof m.pageYOffset ? o = m.pageYOffset : (null != c && null != (h = c.documentElement) ? h.scrollTop : void 0) ? o = c.documentElement.scrollTop : (null != c && null != (i = c.body) ? i.scrollTop : void 0) && (o = c.body.scrollTop), d = m.innerHeight || (null != c && null != (j = c.documentElement) ? j.clientHeight : void 0) || (null != c && null != (l = c.body) ? l.clientHeight : void 0)
                    } catch (p) {
                        return k = p, !1
                    }
                    return d + o >= e - b
                },
                getScrollY: function() {
                    var a, b, c, d, e, f;
                    if (n) try {
                        e = parent, a = parent.document
                    } catch (g) {
                        k = g, e = window, a = document
                    } else e = window, a = document;
                    return f = 0, u.get_scroll_base_el() !== e && (null != (b = u.get_scroll_base_el()) ? b.scrollTop : void 0) ? f = u.get_scroll_base_el().scrollTop : "number" == typeof e.pageYOffset && 0 !== e.pageYOffset ? f = e.pageYOffset : (null != (c = a.documentElement) ? c.scrollTop : void 0) ? f = a.documentElement.scrollTop : (null != (d = a.body) ? d.scrollTop : void 0) && (f = a.body.scrollTop), f
                },
                getHeight: function() {
                    var a, b, c;
                    return c = n ? u.root_window() : window, a = c.document.body, b = c.document.documentElement || document.body, {
                        viewport: c.innerHeight || b.clientHeight,
                        window: Math.max(a.scrollHeight, a.offsetHeight, b.clientHeight, b.scrollHeight, b.offsetHeight)
                    }
                },
                getElemHeight: function(a) {
                    return null != a ? a.offsetHeight : void 0
                },
                isHidden: function(a) {
                    return 0 === a.offsetWidth && 0 === a.offsetHeight
                },
                getOffset: function(a, b) {
                    var c, d, e, f, g, h, i;
                    if (null == b && (b = !1), d = a, !a) return !1;
                    if (!b && u.isHidden(a)) return !1;
                    if (h = 0, i = 0, a)
                        for (;;)
                            if (h += a.offsetLeft || 0, i += a.offsetTop || 0, a = a.offsetParent, !a) break;
                    try {
                        return c = d.ownerDocument, g = c.defaultView || c.parentWindow, n && (null != (f = g.parent) ? f.window : void 0) && g.parent !== g ? (e = u.getOffset(u.get_parent_frame(d), !0), {
                            x: h + e.x,
                            y: i + e.y
                        }) : {
                            x: h,
                            y: i
                        }
                    } catch (j) {
                        return k = j, {
                            x: h,
                            y: i
                        }
                    }
                },
                getOffsetY: function(a) {
                    var b;
                    return b = u.getOffset(a), b ? b.y : !1
                },
                readParam: function() {
                    var a, b, c, d, e, f, g, h, i, j;
                    for (i = ("undefined" != typeof window && null !== window && null != (f = window.location) ? f.search : void 0) || "", e = {}, g = i.substr(1).split("&"), b = 0, d = g.length; d > b; b++) a = g[b], h = a.split("="), c = h[0], j = h[1], c && j && (e[c] = j);
                    return function(a) {
                        return e[a]
                    }
                }(),
                clone: function(a) {
                    var b, c;
                    if (null === a || "object" != typeof a || "isActiveClone" in a) return a;
                    c = a.constructor();
                    for (b in a) Object.prototype.hasOwnProperty.call(a, b) && (a.isActiveClone = null, c[b] = u.clone(a[b]), delete a.isActiveClone);
                    return c
                },
                isWifi: function() {
                    var a;
                    return a = ("undefined" != typeof navigator && null !== navigator ? navigator.connection : void 0) || ("undefined" != typeof navigator && null !== navigator ? navigator.mozConnection : void 0) || ("undefined" != typeof navigator && null !== navigator ? navigator.webkitConnection : void 0), a ? "wifi" === (null != a ? a.type : void 0) : null
                },
                getFullUserLanguage: function() {
                    var a, b;
                    return a = (null != (b = navigator.languages) ? b[0] : void 0) || navigator.language || navigator.userLanguage || "ko"
                },
                getDableLanguage: function() {
                    var a, b;
                    return a = u.getFullUserLanguage(), b = {
                        "zh-TW": "zh-TW",
                        "zh-Hant": "zh-TW",
                        "zh-HK": "zh-TW",
                        "zh-CN": "zh-CN",
                        "zh-Hans": "zh-CN",
                        "zh-SG": "zh-CN"
                    }, b[a] || a.split("-")[0].toLowerCase()
                },
                includeScript: function(a) {
                    var b;
                    return b = document.createElement("script"), b.type = "text/javascript", b.src = a, document.getElementsByTagName("head")[0].appendChild(b)
                },
                stripAndExecuteScript: function(a) {
                    var b, c, d, e, f, g, h, i, j;
                    for (i = [], j = "", b = a.replace(/<script[^>]* src=['"]([^>^'^"^ ]+)[^>]*><\/script>/gi, function() {
                            return i.push(arguments[1]), ""
                        }), b = a.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function() {
                            return j += arguments[1] + "\n", ""
                        }), d = 0, e = i.length; e > d; d++) g = i[d], u.includeScript(g);
                    if (window.execScript) try {
                        j && window.execScript(j)
                    } catch (l) {
                        k = l, ("undefined" != typeof window && null !== window && null != (f = window.console) ? f.log : void 0) && "undefined" != typeof console && null !== console && console.log(k)
                    } else c = document.getElementsByTagName("head")[0], h = document.createElement("script"), h.setAttribute("type", "text/javascript"), h.innerText = j, c.appendChild(h), c.removeChild(h);
                    return b
                },
                getReferrer: function() {
                    var a, b;
                    return b = document.referrer, (null != b ? b.indexOf("api.dable.io/widgets") : void 0) > -1 && (a = (null != b ? b.indexOf("?") : void 0) || -1, a > -1) ? b.substring(0, a) : b
                },
                insertCss: function(a) {
                    var b;
                    return b = document.createElement("style"), b.type = "text/css", b.styleSheet ? b.styleSheet.cssText = a : b.innerHTML = a, document.getElementsByTagName("head")[0].appendChild(b)
                },
                isBrokenTextEncoding: function(a) {
                    var b, c;
                    return "string" != typeof a ? !1 : (b = a.length, c = a.split("").filter(function(a) {
                        return a.charCodeAt(0) >= 128 && a.charCodeAt(0) < 256
                    }).length, 2 * c > b)
                }
            }, b.exports = u
        }, {}],
        25: [function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P = [].indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (b in this && this[b] === a) return b;
                    return -1
                },
                Q = function(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                };
            c = a("./JSON"), d = a("./JSONP.coffee"), C = a("./pubsub.coffee"), N = a("./util.coffee"), K = a("./ba-postmessage.js"), f = a("./adult.coffee"), w = a("./lz-string.js"), x = a("./meta.coffee"), k = a("./event.coffee"), E = a("./scroll-manager.coffee"), y = a("./sp/minicontent.coffee"), o = a("./widgets/inarticle.coffee"), F = a("./widgets/secret.coffee"), l = a("./widgets/floating.coffee"), p = a("./widgets/infinite-feed.coffee"), M = a("./widgets/up-down.coffee"), L = a("./widgets/storywidget.js"), n = function() {
                return ["width", "height", "widget_id", "passback_url", "passback_height"]
            }, G = function(a, b) {
                return K.postMessage(b, a.getAttribute("src") || a.getAttribute("data-org_src"), a.contentWindow)
            }, A = function(a, b, d) {
                var e, f, g, h, i, j, k, l;
                j = n(), f = document.createElement("form"), f.setAttribute("method", "POST"), f.setAttribute("action", a), f.setAttribute("target", d), f.setAttribute("data-dable_widget_el_id", b.id);
                for (i in b)
                    if (l = b[i], !(null == l || P.call(j, i) >= 0))
                        if (N.isArray(l))
                            for (h = 0, k = l.length; k > h; h++) e = l[h], g = document.createElement("input"), g.setAttribute("type", "hidden"), g.setAttribute("name", i), g.setAttribute("value", e), f.appendChild(g);
                        else g = document.createElement("input"), g.setAttribute("type", "hidden"), g.setAttribute("name", i), g.setAttribute("value", l && "object" == typeof l ? c.stringify(l) : l), f.appendChild(g);
                return document.body.appendChild(f), f.submit()
            }, u = function(a) {
                var b, c, d, e, f, g, h;
                return d = a.el, g = a.width, e = a.height, h = a.zoneid, c = a.category, f = location.protocol, b = document.createElement("div"), b.style.textAlign = "center", b.style.paddingTop = "5px", b.innerHTML = '<iframe width="' + g + '" height="' + e + '" frameborder="0" scrolling="no"\nsrc="' + N.protocol() + "//adtg.widerplanet.com/delivery/wfr.php?zoneid=" + h + "&category=" + c + "&cb=" + Math.floor(999999999 * Math.random()) + "&charset=UTF-8&loc=" + escape(window.location) + "&referer=" + escape(N.getReferrer()) + '")}"></iframe>', d.appendChild(b)
            }, r = function(a) {
                var b, c, d, e, g, h, i, j, k, l, m, n, o, p;
                return g = a.el, l = a.minwidth, j = a.maxwidth, o = a.width, h = a.height, n = a.slotid, d = a.auto, f.isAdultContent() ? void 0 : (p = "", m = "", k = "", i = "", e = "", o && (p = ";width:" + o + "px"), l && (m = ";min-width:" + l + "px"), j && (k = ";max-width:" + j + "px"), h && (i = ";height:" + h + "px"), d && (e = 'data-ad-format="auto"'), c = "" + p + i + m + k, b = document.createElement("div"), b.style.textAlign = "center", b.style.paddingTop = "5px", b.innerHTML = '<!-- Dable ?????? -->\n<ins class="adsbygoogle"\n   style="display:inline-block;' + c + '"\n   data-ad-client="ca-pub-1053900240830158"\n   data-ad-slot="' + n + '"\n   ' + e + "></ins>\n<script>\n</script>", g.appendChild(b))
            }, s = function() {
                var a, b, c;
                N.includeScript(N.protocol() + "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"), b = document.createElement("script"), b.type = "text/javascript", c = "(adsbygoogle = window.adsbygoogle || []).push({});";
                try {
                    b.appendChild(document.createTextNode(c))
                } catch (d) {
                    a = d, b.text = c
                }
                return document.body.appendChild(b)
            }, q = function(a, b) {
                var c;
                return c = document.createElement("div"), c.id = "d-" + a + "-" + parseInt(9999 * Math.random()), c.style.padding = "5px 0", c.style.backgroundColor = "#fff", c.setAttribute("data-widget_id", a), b.parentNode.insertBefore(c, b.nextSibling), dable("renderWidget", c.id)
            }, B = function(a, b, c, d) {
                var e, f;
                return f = d.passback_url, e = d.passback_height, setTimeout(function() {
                    var d;
                    if ("1" !== a.getAttribute("data-ready")) return d = document.createElement("iframe"), d.allowTransparency = "true", d.width = b, d.height = e || c, d.title = "?????? ?????????", d.style.border = 0, d.frameBorder = "0", d.scrolling = "no", d.src = f, a.parentNode.appendChild(d), a.parentNode.removeChild(a), d.parentNode.style.height = "auto"
                }, 3e3)
            }, t = function(a, b, d, e, f) {
                var g, h, i, j, k, l, m, o, p, t, v;
                k = n(), m = "undefined" != typeof window && null !== window && null != (o = window.location) && null != (p = o.href) && null != (t = p.match(/[\?\&]dable=([^\#\&]+)/)) ? t[1] : void 0, m && (f.method = m), f.client_width = a.clientWidth, j = N.isWifi(), j === !0 ? f.network = "wifi" : j === !1 && (f.network = "non-wifi"), f.lang = N.getDableLanguage(), v = N.getScrollY(), l = N.getOffsetY(a), v + 1500 > l && (f.pre_expose = 1), window === window.top && (f.is_top_win = 1);
                try {
                    top.window.location.href, f.top_win_accessible = 1
                } catch (w) {
                    h = w
                }
                return i = document.createElement("iframe"), i.allowTransparency = "true", i.width = d, i.height = e, i.title = "?????? ?????????", i.style.border = 0, i.frameBorder = "0", i.scrolling = "no", i.name = "dableframe-" + Math.random(), a.style.height = e + "px", a.style.overflow = "hidden",
                    a.innerHTML = "", a.appendChild(i), "ZRoO16lm" === (null != f ? f.widget_id : void 0) ? q("y74NAkXV", a) : "3xXAO07G" === (null != f ? f.widget_id : void 0) ? Math.random() > .5 ? q("OoRxD0ly", a) : q("ml6EJ074", a) : "AOoRE6Xy" === (null != f ? f.widget_id : void 0) ? u({
                        category: "thesingle",
                        el: a,
                        width: 250,
                        height: 250,
                        zoneid: "20088"
                    }) : "A6o3APlZ" === (null != f ? f.widget_id : void 0) ? q("ml6OBrX4", a) : "VPl15LlE" === (null != f ? f.widget_id : void 0) ? q("1oVxnLlP", a) : "wBoxeG78" === (null != f ? f.widget_id : void 0) ? q("6XgYNV7N", a) : "A1XDRG7e" === (null != f ? f.widget_id : void 0) ? (r({
                        el: a,
                        minwidth: 320,
                        maxwidth: 732,
                        height: 90,
                        slotid: "1516665626",
                        auto: !0
                    }), s()) : "V7a4VKoB" === (null != f ? f.widget_id : void 0) ? (r({
                        el: a,
                        width: 677,
                        height: 90,
                        slotid: "7321339225",
                        auto: !0
                    }), s()) : "2o2vBJoe" === (null != f ? f.widget_id : void 0) ? Math.random() > .5 ? (r({
                        el: a,
                        width: 320,
                        height: 100,
                        slotid: "8798072422",
                        auto: !0
                    }), s()) : q("OoR8Lely", a) : "qAlmxE71" === (null != f ? f.widget_id : void 0) ? (r({
                        el: a,
                        width: 640,
                        height: 90,
                        slotid: "7467502826",
                        auto: !0
                    }), s()) : "y74QqdlV" === (null != f ? f.widget_id : void 0) ? q("57w1eQX8", a) : "VPl10K7E" === (null != f ? f.widget_id : void 0) ? q("6oMgVGlb", a) : "QXekMV7e" === (null != f ? f.widget_id : void 0) && q("M7N4EmXb", a), (g = function() {
                        var a, g, h, j, l, m;
                        g = "?";
                        for (j in f)
                            if (m = f[j], !(null == m || P.call(k, j) >= 0))
                                if (N.isArray(m))
                                    for (h = 0, l = m.length; l > h; h++) a = m[h], "?" !== g && (g += "&"), g += encodeURIComponent(j) + "=" + encodeURIComponent(a);
                                else "object" == typeof m && (m = c.stringify(m)), "?" !== g && (g += "&"), g += encodeURIComponent(j) + "=" + encodeURIComponent(m);
                        g.length <= 2e3 ? (b += g, i.src = b, f.passback_url && B(i, d, e, f)) : (A(b, f, i.name), i.setAttribute("data-org_src", b))
                    })()
            }, m = function(a) {
                var b, c, d, e, f, g;
                d = null;
                try {
                    d = document.getElementById(a).getElementsByTagName("iframe")[0]
                } catch (h) {
                    for (b = h, g = document.getElementsByTagName("iframe"), e = 0, f = g.length; f > e; e++) c = g[e], c.src.indexOf("/widgets/id/") > -1 && (d = c)
                }
                return d
            }, H = function(a, b) {
                var c, d;
                return d = m(a), null != d && (d.height = b), document.getElementById(a) ? (c = document.getElementById(a), c.style.height = "auto") : void 0
            }, I = function(a, b) {
                var c;
                return c = m(a), null != c ? c.title = b : void 0
            }, v = function() {
                var a;
                return a = window.navigator.userAgent, (null != a ? a.indexOf("MSIE 7.0") : void 0) > -1 && /Trident\/[4567]\.0/.test(a) ? !0 : !1
            }(), z = function(a) {
                var b, c, d;
                return b = m(a), b.setAttribute("data-ready", "1"), d = [], c = function(a) {
                    var c;
                    return (null != b ? b.contentWindow : void 0) ? (c = N.getOffset(b), G(b, a + "=" + ((null != c ? c.x : void 0) || 0) + "," + ((null != c ? c.y : void 0) || 0))) : void 0
                }, E.listenByElement(d.indexOf(this.dable.q.executor.service_name) > -1 ? {
                    targetElement: b.parentNode,
                    method: function(a) {
                        return null !== a ? c("expose") : void 0
                    },
                    offsetY: b.parentNode.offsetHeight / 2,
                    reregisterIntervalMs: 5e3 + parseInt(500 * Math.random(), 10),
                    isWatchWithTimer: !0
                } : {
                    targetElement: b.parentNode,
                    method: function(a) {
                        return null !== a ? c("expose") : void 0
                    },
                    cb_trigger_type: "offsetY",
                    offsetY: Math.min(200, b.clientHeight || 200),
                    reregisterIntervalMs: 5e3 + parseInt(500 * Math.random(), 10)
                }), E.listenByElement({
                    targetElement: b.parentNode,
                    method: function(a, b) {
                        return null !== a && ("start" === b && c("exposure_start"), "end" === b) ? c("exposure_end") : void 0
                    },
                    cb_trigger_type: "watching_area",
                    cb_timing: "start_and_end_once",
                    watching_top: N.getOffsetY(b.parentNode),
                    watching_bottom: N.getOffsetY(b.parentNode) + N.getElemHeight(b.parentNode),
                    reregisterIntervalMs: 5e3 + parseInt(500 * Math.random(), 10)
                }), E.listenByElement({
                    targetElement: b.parentNode,
                    method: function() {
                        return c("pre_expose")
                    },
                    cb_trigger_type: "offsetY",
                    offsetY: -1e3,
                    reregisterIntervalMs: 5e3 + parseInt(500 * Math.random(), 10),
                    isWatchWithTimer: !1
                })
            }, i = "d-popup-" + parseInt(999999 * Math.random()), j = null, J = function(a) {
                var b, c, d, e, f, g, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D;
                return e = null != (q = a.id) ? q : "", A = null != (r = a.uid) ? r : "", y = null != (s = a.service_id) ? s : "", C = null != (t = a.widget_id) ? t : "", b = null != (u = a.ads) ? u : "", l = null != (v = a.is_geniee) ? v : !1, document.getElementById(i) ? void 0 : (j = e, B = window.innerWidth || (null != (w = document.documentElement) ? w.clientWidth : void 0) || (null != (x = document.body) ? x.clientWidth : void 0), B >= 680 ? (B = 680, d = 606) : (B = 320, d = 470), m = N.getFullUserLanguage().toLowerCase(), l ? (g = "introduction_geniee_ja.html", k = "Geniee??????????????????????????????????????????") : "ko" === m.substr(0, 2) ? (g = "introduction.html", k = "Dable ??????") : "zh-tw" === m || "zh-hant" === m.substr(0, 7) || "zh-hk" === m ? (g = "introduction_zh-hant.html", k = "Dable ??????") : "zh" === m.substr(0, 2) ? (g = "introduction_zh-hans.html", k = "Dable ??????") : "ja" === m.substr(0, 2) ? (g = "introduction_ja.html", k = "Dable?????????") : "id" === m.substr(0, 2) ? (g = "introduction_id.html", k = "Pengenalan Dable") : "vi" === m.substr(0, 2) ? (g = "introduction_vi.html", k = "gi???i thi???u Dable") : "th" === m.substr(0, 2) ? (g = "introduction_th.html", k = "Dable ????????????") : (g = "introduction_en.html", k = "Dable introduction"), c = encodeURIComponent, D = window.self !== window.top, z = N.protocol() + "//static.dable.io/static/html/" + g + "?from=" + c(window.location.href) + "&uid=" + c(A) + "&service_id=" + c(y) + "&widget_id=" + c(C) + "&wrapped=" + D + "&ads=" + c(b), f = "<iframe src=" + z + " title='" + k + "' width='" + B + "' height='" + d + "' frameborder='0' scrolling='yes' ></iframe>", D ? window.open(z, "Dable") : (n = document.createElement("div"), n.id = i, n.style.position = "fixed", n.style.zIndex = "99999999", n.style.top = "0", n.style.right = "0", n.style.bottom = "0", n.style.left = "0", n.style.WebkitOverflowScrolling = "touch", n.style.textAlign = "center", o = document.createElement("div"), o.style.position = "fixed", o.style.top = "0", o.style.right = "0", o.style.bottom = "0", o.style.left = "0", o.style.backgroundColor = "#000", o.style.opacity = ".8", o.style.filter = "alpha(opacity=80)", o.onclick = h, p = document.createElement("div"), p.style.position = "absolute", p.style.top = "50%", p.style.left = "50%", p.style.margin = "-" + d / 2 + "px 0 0 -" + B / 2 + "px", p.style.width = B + "px", p.style.height = d + "px", p.style.borderRadius = "8px", p.style.WebkitOverflowScrolling = "touch", p.style.overflowY = "scroll", p.style.overflowX = "hidden", p.innerHTML = f, n.appendChild(o), n.appendChild(p), document.body.appendChild(n)))
            }, h = function() {
                var a;
                return document.getElementById(i) && document.body.removeChild(document.getElementById(i)), j ? (a = m(j), a.contentWindow.focus()) : void 0
            }, g = {}, C.subscribe("service_name", function(a) {
                return g.service_name = a
            }), C.subscribe("item_ids", function(a) {
                return g.item_ids = a
            }), C.subscribe("qterm", function(a) {
                return g.qterm = a
            }), O = {}, e = function() {
                function a(a) {
                    var b, c, d, e, f, g, h, i;
                    return d = a.dom_id, c = a.cid, i = a.uid, e = a.item_ids, f = a.item_pub_date, g = null != (h = a.options) ? h : {}, b = a.callback, this.render_widget = Q(this.render_widget, this), d ? (this.cid = c, this.uid = i, this.widget_render_tried = 0, void this.fetch_widget_prefs(d, g, function(a) {
                        return function(c, g) {
                            return O[d] = {
                                item_ids: e,
                                loaded_callback: b
                            }, a.render_widget(d, c, g, e, f)
                        }
                    }(this))) : N.debug("dom id is required but empty")
                }
                return a.prototype.fetch_widget_prefs = function(a, b, d) {
                    var e, f, h, i, j, k;
                    return j = function(a, c) {
                        var d, f, g, i, j;
                        return null == c && (c = {}), f = c.default_val, d = c.cut, g = null != (i = c.opts_obj) ? i : h, null != b[a] ? j = b[a] : N.attr(e, "data-" + a) ? j = N.attr(e, "data-" + a) : f && (j = f), d && j ? g[a] = j.substr(0, d) : j ? g[a] = j : void 0
                    }, h = {}, e = document.getElementById(a), e && j("widget_id"), i = b.service_name || g.service_name, null == e || !i && !h.widget_id ? setTimeout(function(c) {
                        return function() {
                            return ++c.widget_render_tried > 10 ? N.debug("renderWidget found no DOM for this ID selector : " + a) : c.fetch_widget_prefs(a, b, d)
                        }
                    }(this), 50) : (h.from = window.location.href, h.url = b.url || window.location.href, h.ref = b.ref || N.getReferrer(), h.cid = this.cid, h.uid = this.uid, h.passback_url = b.passback_url, h.passback_height = b.passback_height, i && (h.site = i), k = function(a, b) {
                        return j(a, b), h[a] ? (h[a + "_lz"] = w.compressToEncodedURIComponent(h[a]), delete h[a]) : void 0
                    }, b.test && (h.test = 1), b.shows_preview_slot_index && (h.shows_preview_slot_index = 1), b.option_json && (h.option_json = b.option_json), b.ad_info && (h.ad_info = c.stringify(b.ad_info)), h.id = a, j("width", {
                        default_val: "100%"
                    }), j("height", {
                        default_val: "0"
                    }), j("ad_position"), j("widget_type1"), j("widget_type2"), j("widget_type3"), j("has_outline"), j("text_align"), j("title_type"), j("title_type1"), j("title_type2"), j("title_type3"), j("title_img"), j("title_img1"), j("title_img2"), j("title_img3"), k("title_text"), k("title_text1"), k("title_text2"), k("title_text3"), j("title_size"), j("title_size1"), j("title_size2"), j("title_size3"), j("has_thumbnail"), j("page_count"), j("type"), j("item_count"), j("item_size"), j("row_count"), j("line_color"), j("item_color"), j("price_color"), j("price_size"), j("has_price"), j("published_time_color"), j("published_time_size"), j("published_time_format"), j("has_published_time"), j("random"), j("channel_prefix"), j("channel"), j("infinite_scroll"), j("autoswipe_seconds"), j("promotions"), j("floating"), j("sliding"), j("inarticle"), j("custom_css"), j("self_type"), j("self_title_type"), j("self_title_img"), j("self_title_text"), j("self_title_size"), j("has_dable_logo"), j("abtest_index"), j("nolink"), j("item_props_order"), j("ad_campaign_id"), j("ad_request_id"), j("ad_content_id"), j("ad_response_method"), j("additional_ad_clicklog"), j("ad_clicklog"), j("opt_out"), j("inventory_id"), j("adx_request_id"), j("use_banner_server", !1), j("dable_creative_id"), j("banner_channel_name"), j("encrypted_bid_price"), j("bid_currency"), f = x.read_item(["category1", "category2", "category3"]), f.category1 && (h.category1 = f.category1), f.category2 && (h.category2 = f.category2), f.category3 && (h.category3 = f.category3), j("best_type"), j("category_level"), j("category1", {
                        cut: 64
                    }), j("category2", {
                        cut: 64
                    }), j("category3", {
                        cut: 64
                    }), j("iframe-src"), j("iframe-width"), j("iframe-height"), j("ad_mark_test"), h.ad_params = {}, j("gn_ext", {
                        opts_obj: h.ad_params
                    }), j("gn_efp", {
                        opts_obj: h.ad_params
                    }), j("gn_uids", {
                        opts_obj: h.ad_params
                    }), j("gn_zids", {
                        opts_obj: h.ad_params
                    }), j("is_bridge"), j("bridge_item_id"), j("top_win_href"), d(e, h))
                }, a.prototype.fetch_widget_items = function(a, b, c, d) {
                    return null == c && (c = !0), b = b || N.attr(a, "data-item_id") || g.item_ids, null == b && c ? setTimeout(function(e) {
                        return function() {
                            return "number" == typeof c && c--, e.fetch_widget_items(a, b, c, d)
                        }
                    }(this), 200) : (N.isArray(b) || (b = [b]), d(b))
                }, a.prototype.render_widget = function(a, b, c, d, e) {
                    return this.fetch_widget_items(b, d, !1, function() {
                        return function(a) {
                            var d;
                            if (a.length > 1 && (a = [a[parseInt(Math.random() * a.length)]]), c.item_id = a[0], null != e && (c.item_pub_date = e), N.readParam("dable_campaign_id") && (c.test_campaign_id = N.readParam("dable_campaign_id"), c.nolog = 1), N.readParam("dable_noad") && (c.nodablead = N.readParam("dable_noad")), c.use_banner_server) d = N.protocol() + "//" + N.banner_server_domain() + ("/widgets/id/" + c.widget_id) + (c.uid && "/users/" + c.uid || "");
                            else if (c.bridge_item_id) d = N.protocol() + "//" + N.api_server_domain() + ("/bridge/services/" + encodeURIComponent(c.site) + "/id/" + encodeURIComponent(c.widget_id) + "/item/" + encodeURIComponent(c.bridge_item_id));
                            else if (c.widget_id) d = N.protocol() + "//" + N.api_server_domain() + ("/widgets/id/" + c.widget_id) + (c.uid && "/users/" + c.uid || "");
                            else {
                                if (!c.site) return void N.debug("one of widget_id or service_name is required but empty");
                                d = N.protocol() + "//" + N.api_server_domain() + ("/widgets/services/" + encodeURIComponent(c.site)) + (c.uid && "/users/" + c.uid || "")
                            }
                            return c.pixel_ratio = window.devicePixelRatio || 1, t(b, d, c.width, c.height, c)
                        }
                    }(this))
                }, a
            }(), D = function(a, b) {
                var c, d;
                return (null != (c = a.match(new RegExp("^" + b + "=([^&]+).*$"))) ? c[1] : void 0) || (null != (d = a.match(new RegExp("&" + b + "=([^&]+).*$"))) ? d[1] : void 0) || null
            }, K.receiveMessage(function(a) {
                var b, d, e, f, g, i, j, k, n, q, r, s, t, u, v, w, x, A, B, C, P, Q, R, S;
                if (a.data && "string" == typeof a.data) {
                    try {
                        B = decodeURIComponent(a.data)
                    } catch (T) {
                        f = T, B = a.data
                    }
                    if (B.indexOf("show_dable_popup=1") > -1 ? J({
                            id: D(B, "id"),
                            uid: D(B, "uid"),
                            service_id: D(B, "service_id"),
                            is_geniee: "1" === D(B, "is_geniee"),
                            widget_id: D(B, "widget_id"),
                            ads: D(B, "ads")
                        }) : B.indexOf("close_dable_popup=1") > -1 && h(), B.indexOf("show_minicontent=") > -1 && (x = D(B, "show_minicontent").split("--"), y.show({
                            campaign_id: x[0],
                            content_id: x[1],
                            service_name: x[3],
                            is_mobile: N.isMobileDevice(),
                            is_IOS: N.isIOSDevice()
                        })), B.indexOf("close_minicontent=1") > -1 && y.close(), B.indexOf("on_bridge_item_clicked=") > -1 && (d = D(B, "on_bridge_item_clicked"), w = D(B, "newsx_detail_page_url_pattern"), t = ("undefined" != typeof window && null !== window && null != (C = window.location) && null != (P = C.pathname) ? P.indexOf("/bridge/services") : void 0) > -1, t ? K.postMessage("on_bridge_item_clicked=" + d + "&newsx_detail_page_url_pattern=" + w, "*") : w ? window.location.href = w.replace(":id", d) : window.location.hash = "#dable_bridge_item=" + d), n = D(B, "id"), !n) return;
                    if (B.indexOf("init=") > -1 && z(n), B.indexOf("check_and_page_expose=1") > -1 && (b = m(n), (null != b ? b.contentWindow : void 0) && E.isElWithinOffsetY({
                            targetElement: b.parentNode,
                            offsetY: 200
                        }) && (A = D(B, "page"), G(b, "page_expose=" + A))), B.indexOf("block_content=") > -1 && (b = m(n), (null != b ? b.contentWindow : void 0) && (e = D(B, "block_content"), G(b, "block_content=" + e))), B.indexOf("floating=") > -1) {
                        k = D(B, "floating");
                        try {
                            k = c.parse(k), l.init(n, k)
                        } catch (T) {
                            a = T
                        }
                    }
                    if (B.indexOf("is_updown_widget=") > -1 && M.init({
                            frame_id: n,
                            link_widget_id: D(B, "link_widget"),
                            threshold_top: Number(D(B, "threshold_top")) || 40,
                            threshold_bottom: Number(D(B, "threshold_bottom")) || 30
                        }), u = !1, B.indexOf("sliding=") > -1) {
                        k = D(B, "sliding");
                        try {
                            k = c.parse(k), u = F.init(n, k)
                        } catch (T) {
                            a = T
                        }
                    }
                    if (B.indexOf("is_infinite_feed=") > -1 && -1 === B.indexOf("floating=") && p.init(n, Number(D(B, "infinite_feed_scroll_amount"))), B.indexOf("if_height=") > -1 && (q = Number(D(B, "if_height")), !isNaN(q) && q > 0 && H(n, q)), B.indexOf("need_inarticle_init=") > -1 && o.init(n, c.parse(D(B, "need_inarticle_init"))), B.indexOf("error=") > -1) return j = D(B, "error"), N.debug(j);
                    if (B.indexOf("title=") > -1 && (S = D(B, "title"), I(n, S)), B.indexOf("has_recom") > -1 && (r = 1 === Number(D(B, "has_recom")), O[n] && O[n].loaded_callback && O[n].loaded_callback(r)), B.indexOf("close_dable_widget") > -1 && (i = D(B, "id"), i && (g = document.getElementById(i))))
                        for (Q = g.childNodes, s = 0, v = Q.length; v > s; s++) k = Q[s], k.style.display = "none";
                    if (B.indexOf("storyWidget") > -1) return R = B.split("storyItems=")[1], L.init({
                        storyWidgetId: D(B, "fid"),
                        storyWidgetItems: c.parse(R),
                        storyItemLength: Number(D(B, "storyWidgetItemsLength")),
                        storyClickedIndex: Number(D(B, "storyClickedIdx")),
                        storyMinicontIndex: c.parse(D(B, "miniContIdx"))
                    })
                }
            }), b.exports = e
        }, {
            "./JSON": 3,
            "./JSONP.coffee": 4,
            "./adult.coffee": 6,
            "./ba-postmessage.js": 8,
            "./event.coffee": 12,
            "./lz-string.js": 17,
            "./meta.coffee": 19,
            "./pubsub.coffee": 20,
            "./scroll-manager.coffee": 22,
            "./sp/minicontent.coffee": 23,
            "./util.coffee": 24,
            "./widgets/floating.coffee": 26,
            "./widgets/inarticle.coffee": 27,
            "./widgets/infinite-feed.coffee": 28,
            "./widgets/secret.coffee": 29,
            "./widgets/storywidget.js": 30,
            "./widgets/up-down.coffee": 31
        }],
        26: [function(a, b) {
            var c, d, e, f, g, h;
            e = a("../util.coffee"), c = a("../event.coffee"), f = {}, h = {}, g = {}, d = function(a, b) {
                var d, i, j, k, l, m, n, o, p;
                if ((null != b ? b.enabled : void 0) && (l = document.getElementById(a), "1" !== l.getAttribute("data-dable-floating"))) {
                    switch (l.setAttribute("data-dable-floating", "1"), l.style.width = b.width + "px", l.style.position = "fixed", l.style.zIndex = "99999999", i = "top" === (o = b.appear) || "bottom" === o, p = (b.vmargin || 0) + "px", m = (b.hmargin || 0) + "px", n = "-" + (Number(b.width) + 50) + "px", b.position) {
                        case "bottomright":
                            l.style.bottom = p, l.style.right = i ? n : m, l.style.transition = "0.3s ease-in";
                            break;
                        case "bottomleft":
                            l.style.bottom = p, l.style.left = i ? n : m, l.style.transition = "0.3s ease-in";
                            break;
                        case "bottomcenter":
                            n = "9999px", l.style.left = "50%", l.style.bottom = p, l.style.marginLeft = i ? n : "-" + b.width / 2 + "px";
                            break;
                        case "topright":
                            l.style.top = p, l.style.right = i ? n : m, l.style.transition = "0.3s ease-in";
                            break;
                        case "topleft":
                            l.style.top = p, l.style.left = i ? n : m, l.style.transition = "0.3s ease-in";
                            break;
                        case "topcenter":
                            n = "9999px", l.style.left = "50%", l.style.top = p, l.style.marginLeft = i ? n : "-" + b.width / 2 + "px"
                    }
                    return i ? (0 === l.getElementsByTagName("i").length && (k = document.createElement("i"), k.style.position = "absolute", k.style.top = "-7px", k.style.right = "-7px", k.style.width = "16px", k.style.height = "16px", k.style.margin = 0, k.style.padding = 0, k.style.border = 0, k.style.background = "url(" + e.protocol() + "//api.dable.io/static/i/x.png) no-repeat 0 0", k.style.cursor = "pointer", k.onclick = function() {
                        return d(!1), setTimeout(function() {
                            return l.style.display = "none"
                        }, 200)
                    }, l.appendChild(k)), d = function(a) {
                        if (a) switch (b.position) {
                            case "bottomright":
                            case "topright":
                                return l.style.right = m;
                            case "bottomleft":
                            case "topleft":
                                return l.style.left = m;
                            case "bottomcenter":
                            case "topcenter":
                                return l.style.marginLeft = m
                        } else switch (b.position) {
                            case "bottomright":
                            case "topright":
                                return l.style.right = n;
                            case "bottomleft":
                            case "topleft":
                                return l.style.left = n;
                            case "bottomcenter":
                            case "topcenter":
                                return l.style.marginLeft = n
                        }
                    }, f[a] && c.removeEvent(e.get_scroll_base_el(), "scroll", f[a]), j = function() {
                        var c, f, i, j, k, l;
                        return c = g[a], l = e.getScrollY(), k = e.getHeight(), "top" !== b.appear || "topright" !== (f = b.position) && "topleft" !== f ? "top" === b.appear ? j = b.appear_px <= l + k.viewport : "bottom" !== b.appear || "bottomright" !== (i = b.position) && "bottomleft" !== i ? "bottom" === b.appear && (j = b.appear_px >= k.window - k.viewport - l) : j = b.appear_px >= k.window - k.viewport - l : j = b.appear_px <= l, j !== c && (d(j), g[a] = j), h[a] = null
                    }, f[a] = function() {
                        return h[a] && clearTimeout(h[a]), h[a] = setTimeout(j, 100)
                    }, c.addEvent(e.get_scroll_base_el(), "scroll", f[a]), g[a] = null, j()) : void 0
                }
            }, b.exports = {
                init: d
            }
        }, {
            "../event.coffee": 12,
            "../util.coffee": 24
        }],
        27: [function(a, b) {
            var c, d, e, f, g, h, i, j, k, l;
            k = a("../meta.coffee"), i = k.read_body, j = k.read_body_el, l = ["img", "iframe", "figure"], c = 150, d = function(a) {
                var b, e, f, g, h, i, j, k, m, n, o;
                for (b = a.el, n = null != (k = a.t) ? k : "", j = a.min_article_length, n += (null != b && null != (m = b.innerHTML) ? m.toLowerCase() : void 0) || b.textContent, e = !1, f = 0, h = l.length; h > f; f++)
                    if (o = l[f], n.indexOf("<" + o) > -1) {
                        e = !0;
                        break
                    } for (; n.indexOf("<script") > -1;) n = n.substr(0, n.indexOf("<script")) + n.substr(n.indexOf("</script>") + 9);
                for (; n.indexOf("<style") > -1;) n = n.substr(0, n.indexOf("<style")) + n.substr(n.indexOf("</style>") + 8);
                for (g = 0, i = l.length; i > g; g++) o = l[g], n = n.replace(new RegExp("<" + o + "(.|[\r\n])*"), "");
                return n = n.replace(/<[^>]+>/g, "").replace(/^\s+/, "").replace(/\s+$/, ""), n.length > (j || c) ? !0 : n.length && !e && (null != b ? b.nextSibling : void 0) ? d({
                    el: b.nextSibling,
                    t: n,
                    min_article_length: j
                }) : !1
            }, e = function(a) {
                var b, c, e, g, h, i, j, k;
                if (e = a.el, h = a.l, j = a.pos_rate, i = a.min_article_length, k = Math.floor(h * j / 100) - 1, 1 > k && (k = h - 1), c = f(e), d({
                        el: c[k],
                        min_article_length: i
                    })) return c[k];
                for (g = 0; g++ < h;) {
                    if (h > k + g && (b = c[k + g], b && d({
                            el: b,
                            min_article_length: i
                        }))) return b;
                    if (k - g >= 0 && (b = c[k - g], b && d({
                            el: b,
                            min_article_length: i
                        }))) return b
                }
                return !1
            }, f = function(a) {
                var b, c, d, e, f, g, h;
                for (h = (null != (e = a.childNodes) ? e.length : void 0) || 0, d = [], b = c = 0, f = h - 1; f >= 0 ? f >= c : c >= f; b = f >= 0 ? ++c : --c) 8 !== a.childNodes[b].nodeType && (3 !== a.childNodes[b].nodeType || (g = a.childNodes[b].textContent || "", g.trim())) && d.push(a.childNodes[b]);
                return d
            }, h = function(a, b) {
                var c, d, g, i, j, k, l, m, n, o;
                if (l = b.pos_rate, j = b.min_article_length, !a || !(null != (m = a.childNodes) ? m.length : void 0)) return null;
                if (g = f(a).length, i = a.children.length, 3 >= g && 1 === i) return h(a.children[0], {
                    pos_rate: l,
                    min_article_length: j
                });
                if (o = e({
                        el: a,
                        l: g,
                        pos_rate: l,
                        min_article_length: j
                    }), !o) return !1;
                k = document.createElement("div"), k.className = "dable_placeholder", n = document.createElement("style"), d = "@media all and (min-width: 1px) and (max-width: 450px) { .dable_placeholder{ width: 100% !important; padding: 10px 0 !important; }}";
                try {
                    n.innerText = d
                } catch (p) {
                    c = p, n.cssText = d
                }
                return k.appendChild(n), a.insertBefore(k, o), k
            }, g = function(a, b) {
                var c, d, e, f, g, i, k, l, m, n, o, p, q, r, s, t, u;
                if (e = b.enabled, f = b["float"], t = b.width, q = null != (r = b.pos_rate) ? r : 50, n = b.min_article_length, e && (c = j(), c && (d = document.getElementById(a), p = c.querySelector(".dable_placeholder"), p || (p = h(c, {
                        pos_rate: q,
                        min_article_length: n
                    })), p))) {
                    if ("left" === f ? (p.style["float"] = f, p.style.padding = "10px 15px 10px 0") : "right" === f ? (p.style["float"] = f, p.style.padding = "10px 0 10px 15px") : (p.style.margin = "0 auto", p.style.padding = "10px 0"), p.style.width = t + "%", i = d.getElementsByTagName("iframe")[0], k = !i.src) {
                        for (s = document.getElementsByTagName("form"), l = 0, m = s.length; m > l; l++)
                            if (g = s[l], a === g.getAttribute("data-dable_widget_el_id")) {
                                u = g, o = document.createElement("input"), o.setAttribute("type", "hidden"), o.setAttribute("name", "inarticle_init"), o.setAttribute("value", "1"), u.appendChild(o);
                                break
                            }
                    } else {
                        if (i.src.indexOf("&inarticle_init=1") > -1) return;
                        i.src = i.src + "&inarticle_init=1"
                    }
                    return d.parentNode.removeChild(d), p.appendChild(d), u ? u.submit() : void 0
                }
            }, b.exports = {
                init: g
            }
        }, {
            "../meta.coffee": 19
        }],
        28: [function(a, b) {
            var c, d, e, f, g, h, i;
            c = a("../event.coffee"), f = a("../ba-postmessage.js"), g = a("../util.coffee"), h = {}, i = {}, e = function(a) {
                var b, c;
                return b = null != (c = a.getElementsByTagName("iframe")) ? c[0] : void 0, (null != b ? b.contentWindow : void 0) ? f.postMessage("load_infinite_feed", b.getAttribute("src") || b.getAttribute("data-org_src"), b.contentWindow) : void 0
            }, d = function(a, b) {
                var d, f, i, j;
                return j = document.getElementById(a), h["ifeed" + a] && c.removeEvent(g.get_scroll_base_el(), "scroll", h["ifeed" + a]), d = !1, f = 0, i = function() {
                    return d || b > -1 && f + 1 >= b ? void 0 : (d = !0, setTimeout(function() {
                        return d = !1, i()
                    }, 100), g.isScrollBottom(j, 200) ? (f++, e(j)) : void 0)
                }, c.addEvent(g.get_scroll_base_el(), "scroll", i, "if"), i()
            }, b.exports = {
                init: d
            }
        }, {
            "../ba-postmessage.js": 8,
            "../event.coffee": 12,
            "../util.coffee": 24
        }],
        29: [function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            j = a("../util.coffee"), d = a("../event.coffee"), h = a("../ba-postmessage.js"), g = !1, k = {}, m = {}, l = {}, i = function(a) {
                return a.className += " dable-secret-hidden", a.style.overflow = "hidden", a.style.maxHeight = "0px", a.style.transition = "max-height 1s"
            }, c = function(a) {
                var b, c;
                if (!a.getAttribute("dable-slided")) return a.setAttribute("dable-slided", "1"), a.className = a.className.replace(" dable-secret-hidden", ""), a.style.maxHeight = "1200px", b = null != (c = a.getElementsByTagName("iframe")) ? c[0] : void 0, (null != b ? b.contentWindow : void 0) ? h.postMessage("show_secret_widget", b.getAttribute("src") || b.getAttribute("data-org_src"), b.contentWindow) : void 0
            }, e = function(a) {
                for (; a = a.parentNode;)
                    if ("articleBody" === a.getAttribute("itemprop")) return j.getOffsetY(a);
                return 0
            }, f = function(a, b) {
                var f, h, l, n, o, p, q, r, s, t;
                return n = null != (p = b.enabled) ? p : !1, o = null != (q = b.for_article) ? q : !1, t = null != (r = b.top_offset) ? r : 0, l = document.getElementById(a), n ? (g || (j.insertCss(".dable-secret-hidden{height:0!important} .dable-secret-hidden iframe{position:absolute;top:-9999px;left:-9999px}"), g = !0), "1" === l.getAttribute("data-dable-sliding") ? !0 : (l.setAttribute("data-dable-sliding", "1"), i(l), f = o ? e(l) : 0, k["sliding" + a] && d.removeEvent(j.get_scroll_base_el(), "scroll", k["sliding" + a]), s = !1, h = function() {
                    var b;
                    return b = j.getScrollY(), !s && b > f + 300 && (s = !0), s && b <= Number(f + t) && (c(l), d.removeEvent(j.get_scroll_base_el(), "scroll", k["sliding" + a])), m["sliding" + a] = null
                }, k["sliding" + a] = function() {
                    return m["sliding" + a] && clearTimeout(m["sliding" + a]), m["sliding" + a] = setTimeout(h, 100)
                }, d.addEvent(j.get_scroll_base_el(), "scroll", k["sliding" + a]), setInterval(k["sliding" + a], 5e3), h(), !0)) : (l.style.overflow = "visible", !1)
            }, b.exports = {
                init: f
            }
        }, {
            "../ba-postmessage.js": 8,
            "../event.coffee": 12,
            "../util.coffee": 24
        }],
        30: [function(a, b) {
            function c() {
                x--, y = setTimeout(c, 1e3)
            }

            function d() {
                y = setTimeout(c, 1e3)
            }

            function e() {
                clearTimeout(y)
            }

            function f(a) {
                0 === x && (x = 1);
                var b = a.querySelector(".dable_status_bar i");
                b.style.transitionDuration = x + "s"
            }

            function g() {
                clearTimeout(A)
            }

            function h(a) {
                for (var b = document.querySelectorAll(".dable_story_li"), c = b[a], d = 0; d < b.length - 1; d++) b[d].classList.remove("current");
                c.classList.add("current")
            }

            function i(a) {
                for (var b = document.querySelectorAll(".dable_status_bar"), c = b[a], d = 0; d < b.length - 1; d++) b[d].classList.remove("playing");
                c.classList.add("playing")
            }

            function j(a) {
                for (var b = document.querySelectorAll(".dable_story_page_dot"), c = b[a], d = 0; d < b.length; d++) b[d].classList.remove("current");
                c.classList.add("current")
            }

            function k(a) {
                var b = a.querySelector("i"),
                    c = b.clientWidth;
                b.style.width = c + "px"
            }

            function l() {
                document.location.href.indexOf("storywidget=open") > -1 && history.back()
            }

            function m(a) {
                function b() {
                    I.style.height = window.innerWidth < 480 ? window.innerHeight + "px" : "640px"
                }

                function c(a) {
                    x = w, J.style.left = "-".concat(100 * a, "%");
                    for (var b = 0; b < L.length - 1; b++) L[b].removeAttribute("style"), L[b].style.width = 0;
                    h(a), i(a), j(a), M.style.display = 0 === a ? "none" : "block"
                }

                function m() {
                    p - 1 > z ? (z++, c(z), A = setTimeout(m, 1e3 * x)) : (l(), z = -1)
                }

                function s(a) {
                    A = setTimeout(m, 1e3 * a)
                }

                function u() {
                    g(), s(w), B = !0;
                    for (var a = 0; a < O.length; a++) O[a].classList.remove("pause")
                }

                function v() {
                    var a = K[z],
                        b = a.querySelector(".dable_status_bar");
                    B ? (k(b), g(), e(), O[z].classList.add("pause"), b.classList.remove("playing"), B = !1) : (f(b), s(x), d(), O[z].classList.remove("pause"), b.classList.add("playing"), B = !0)
                }

                function y() {
                    z > 0 && z--, c(z), u()
                }

                function D() {
                    z === p - 1 ? (l(), z = p - 1) : (z++, c(z), u())
                }

                function E(a) {
                    Q = a.touches[0].pageX, T = a.touches[0].pageY
                }

                function F(a) {
                    R = a.changedTouches[0].pageX, Q - R > 50 ? D() : -50 > Q - R ? y() : J.style.left = "-".concat(100 * z, "%"), U = a.changedTouches[0].pageY, -150 > T - U && l()
                }

                function G(a) {
                    S = a.touches[0].pageX, V = a.touches[0].pageY, J.style.left = -50 > T - V ? "-".concat(100 * z, "%") : "-".concat(100 * z - (S - Q) / 2, "%"), 0 > Q - S && 0 === z && (J.style.left = "0%")
                }

                function H(a) {
                    for (var b = document.getElementsByTagName("iframe") || void 0, c = 0; c < b.length; c++) {
                        var d = b[c].getAttribute("src") || b[c].getAttribute("data-org_src");
                        d.indexOf("dable") > -1 && d.indexOf(n) > -1 && t.postMessage(a, d, b[c].contentWindow)
                    }
                }
                n = a.storyWidgetId, o = a.storyWidgetItems, p = a.storyItemLength, q = a.storyClickedIndex, r = a.storyMinicontIndex, C(o, p, q), z = q;
                var I = document.getElementById("dable_story_wrapper"),
                    J = document.getElementById("dable_story_ul"),
                    K = document.querySelectorAll(".dable_story_li"),
                    L = document.querySelectorAll(".dable_status_bar i"),
                    M = document.getElementById("dable_prev"),
                    N = document.getElementById("dable_next"),
                    O = document.querySelectorAll(".dable_btn-pause");
                window.addEventListener("resize", b), setTimeout(function() {
                    c(z)
                }, 10), s(x), d(), b();
                for (var P = 0; P < O.length; P++) O[P].onclick = v;
                M.onclick = y, N.onclick = D;
                var Q, R, S, T, U, V;
                I.addEventListener("touchstart", E), I.addEventListener("touchend", F), I.addEventListener("touchmove", G), document.getElementById("dable_story_popup_bg").onclick = l;
                for (var W = document.querySelectorAll(".dable_btn-close"), X = 0; X < W.length; X++) W[X].onclick = l;
                for (var Y = document.querySelectorAll(".dable-logo"), Z = 0; Z < Y.length; Z++) Y[Z].onclick = function(a) {
                    a.preventDefault(), H("dable_logo_clicked"), l()
                };
                r && ! function() {
                    for (var a, b = [], c = 0; c < r.length; c++) a = r[c], b = K[a].querySelectorAll(".dable_link-btn");
                    for (var d = 0; d < b.length; d++) b[d].onclick = function(b) {
                        b.preventDefault(), H("mini_content_clicked," + a), l()
                    }
                }();
                var $ = {
                        storyWidgetId: n,
                        storyWidgetItems: o,
                        storyItemLength: p,
                        storyClickedIndex: z,
                        storyMinicontIndex: r
                    },
                    _ = document.location.href;
                document.location.href.indexOf("storywidget=open") > -1 ? history.replaceState($, "", _) : (_ += _.indexOf("?") > -1 ? "&storywidget=open" : "?storywidget=open", history.pushState($, "", _))
            }
            var n, o, p, q, r, s = a("../util.coffee"),
                t = a("../ba-postmessage.js"),
                u = "story-popup-".concat(parseInt(999999 * Math.random())),
                v = !1,
                w = 5,
                x = w,
                y = null,
                z = -1,
                A = null,
                B = !0,
                C = function(a, b, c) {
                    if (!document.getElementById(u)) {
                        v || (s.insertCss("\n      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');\n      #".concat(u, ", #").concat(u, " *,  #").concat(u, " *:before,  #").concat(u, " *:after {margin: 0; padding: 0; border: 0; outline: 0; background: none; color: inherit; font-size: inherit; text-decoration: inherit; vertical-align: baseline; box-sizing: content-box; line-height: normal;}\n      #").concat(u, " #dable_story_wrapper{top: 50%; left: 50%; width: 360px; height: 640px; margin: -320px 0 0 -180px;}\n      #").concat(u, " #dable_story_ul{margin: 0; padding: 0; transition: left 0.2s; left: -").concat(100 * c, "%;}\n      #").concat(u, " .dable_story_li {position: relative; float: left; width: 360px; height: 100%; list-style: none; box-sizing: border-box;}\n      #").concat(u, " .dable_story_li_header {overflow: hidden; position: relative; margin: 20px 0; padding: 0 15px;}\n      #").concat(u, " .dable_story_li_header_left{position: relative;top: -1px;left: 0;display: flex; height: 17px;}\n      #").concat(u, " .dable_story_li_header_right{position: absolute;top: 0;right: 15px;display: flex;}\n      #").concat(u, " .dable_story_li_header .dable_ad-mark {margin-right: 3px;color: #ccc;font-size: 12px;line-height: 17px;letter-spaicng: -0.1px;font-family: 'Open Sans', sans-serif}\n      #").concat(u, " .dable_story_li_header .dable_sp-mark-custom, #").concat(u, " .dable_story_li_header .dable_category {color: #656565;font-size: 11px;line-height: 17px;letter-spacing: -0.1px;font-family: 'Open Sans', sans-serif;}\n      #").concat(u, " .dable_story_li_header .dable_btn-pause {position: relative; margin-top: -3px; padding-left: 18px; margin-right: 10px; width: 29px; color: #A9A9A9;font-size: 10px;line-height: 20px;font-family: 'Open Sans', sans-serif; text-align: left; cursor: pointer;}\n      #").concat(u, " .dable_story_li_header .dable_btn-pause:before{position: absolute; top: 1px; left: 0; content: '\\f28b'; font-size: 15px; line-height: 20px; font-family: 'Font Awesome 5 Free'; font-weight: 700;}\n      #").concat(u, " .dable_story_li_header .dable_btn-pause:after{display: inline-block;content: 'Pause';color: #A9A9A9;font-size: 10px;line-height: 20px;font-family: 'Open Sans', sans-serif;}\n      #").concat(u, " .dable_story_li_header .dable_btn-pause.pause:before {position: absolute; top: 1px; left: 0; content: '\\f144'; font-size: 15px; line-height: 20px; font-family: 'Font Awesome 5 Free'; font-weight: 700;}\n      #").concat(u, " .dable_story_li_header .dable_btn-pause.pause:after {display: inline-block; content: 'Play';color: #A9A9A9;font-size: 10px;line-height: 20px;font-family: 'Open Sans', sans-serif;}\n      #").concat(u, " .dable_story_li_header .dable_btn-close{position: relative;overflow: hidden;width: 15px;height: 15px; cursor: pointer;}\n      #").concat(u, " .dable_story_li_header .dable_btn-close i{position: absolute;width: 1px;height: 20px;background-color: #777777;}\n      #").concat(u, " .dable_story_li_header .dable_btn-close i:first-child{top: 0px;left: 14.5px;transform: rotate(45deg);transform-origin: top left;}\n      #").concat(u, " .dable_story_li_header .dable_btn-close i:last-child{top: 0px;left: 0px;transform: rotate(-45deg);transform-origin: top right;}\n      #").concat(u, " .dable_story_li_header .dable-logo{margin-right: 18px;}\n      #").concat(u, " .dable_story_li_header .dable-logo .dable_powered-by{display: block; height: 17px; text-decoration: none; font-size: 0;}\n      #").concat(u, " .dable_story_li_header .dable-logo .dable_powered-by-by{vertical-align: middle; position: relative; display: inline-block; color: #ccc; font-size: 10px; font-weight: 400; line-height: 17px; padding-right: 3px;}\n      #").concat(u, " .dable_story_li_header .dable-logo .dable_powered-by-dable{display: inline-block; width: 40px; height: 14px; vertical-align: middle; background: url(//images.dable.io/static/i/logo-text-tiny-gray.png) no-repeat 0 0; background-size: 40px 12px; text-indent: -9999px; text-align: left;}\n      #").concat(u, " .dable_story_li .dable_status_bar{position: relative;margin-top: 17px;width: 100%;height: 2px;background-color: #D2D2D2;}\n      #").concat(u, " .dable_story_li .dable_status_bar i{position: absolute;top: 0;left: 0;background-color: #008CFF;width: 0%;height: 2px;}\n      #").concat(u, " .dable_story_li .dable_status_bar.playing i{width: 100% !important; transition-property: width; transition-timing-function: ease-out; transition-duration: ").concat(w, "s}\n      #").concat(u, " .dable_story_li .dable_thumbnail_wrap{overflow: hidden; position: relative; width: 100%;padding-bottom: 62.5%;}\n      #").concat(u, " .dable_story_li .dable_thumbnail{position: absolute; width: 100%; height: 100%; object-fit: cover; left: 0; top: 0;}\n      #").concat(u, " .dable_story_li .dable_name{overflow: hidden;margin-top: 20px;padding: 0 50px;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;height: auto;max-height: 60px; color: #222222;font-size: 15px;font-weight: 600;line-height: 20px;text-align: center;letter-spacing: -0.3px;font-family: 'Open Sans', sans-serif; text-decoration: none;}\n      #").concat(u, " .dable_story_li .dable_description{overflow: hidden;margin-top: 16px;padding: 0 50px;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;height: auto;max-height: 69px;color: #7B7B7B;font-size: 14px;font-weight: 400;line-height: 23px;text-align: center;letter-spacing: -0.3px;font-family: 'Open Sans', sans-serif;}\n      #").concat(u, " .dable_story_li .dable_read_more{position: absolute; top: 506px; left: 50%; width: 100%; transform: translateX(-50%);}\n      #").concat(u, " .dable_story_li .dable_read_more a{padding: 15px 50px; color: #222222;font-size: 12px;line-height: 17px;font-family: 'Open Sans', sans-serif;text-decoration: none; border: 1px solid #222; border-radius: 50px;}\n      #").concat(u, " #dable_story_page_arrs #dable_prev, #").concat(u, " #dable_story_page_arrs #dable_next{position: absolute; top: 50%; width: 30px; height: 75px; transform: translateY(-50%); background-color: #000; cursor: pointer}\n      #").concat(u, " #dable_story_page_arrs #dable_prev:hover, #").concat(u, " #dable_story_page_arrs #dable_next:hover{background-color: #008CFF}\n      #").concat(u, " #dable_story_page_arrs #dable_prev span, #").concat(u, " #dable_story_page_arrs #dable_next span{display: block; width: 12px; height: 12px; margin-left: 5px; border-color: #838383; border-width: 0 1px 1px 0; border-style: solid; margin-top: 28px; transform: rotate(-45deg);}\n      #").concat(u, " #dable_story_page_arrs #dable_prev span{margin-left: 12px; transform: rotate(135deg);}\n      #").concat(u, " #dable_story_page_arrs #dable_prev {left: 50%; margin-left: -230px;}\n      #").concat(u, " #dable_story_page_arrs #dable_next {right: 50%; margin-right: -230px;}\n      #").concat(u, " #dable_story_page_dots{position: absolute; top: 594px; width: 100%; font-size: 0; text-align: center;}\n      #").concat(u, " #dable_story_page_dots .dable_story_page_dot{display: inline-block; margin: 0 8px; width: 8px; height: 8px; background-color: #595959; border-radius: 4px;}\n      #").concat(u, " #dable_story_page_dots .dable_story_page_dot.current{background-color: #008CFF;}\n      @media screen and (max-width: 480px){\n        #").concat(u, " #dable_story_wrapper{top: auto; bottom: 0; width: 100%; height: 100vh; margin:0 0 0 -50%;}\n        #").concat(u, " .dable_story_li {width: ").concat(100 / b, "%;}\n        #").concat(u, " #dable_story_page_arrs{display: none;}\n        #").concat(u, " .dable_story_li .dable_read_more{top: 80%;}\n        #").concat(u, " #dable_story_page_dots{top: 93%;}\n      }")),
                            v = !0);
                        var d = document.getElementsByTagName("head")[0],
                            e = document.createElement("script");
                        e.src = "https://kit.fontawesome.com/ab13c4af94.js", e.crossorigin = "anonymous", d.appendChild(e);
                        var f = document.createElement("div");
                        f.id = u, f.style.position = "fixed", f.style.zIndex = "99999999", f.style.top = "0", f.style.right = "0", f.style.bottom = "0", f.style.left = "0", f.style.WebkitOverflowScrolling = "touch", f.style.textAlign = "center";
                        var g = document.createElement("div");
                        g.id = "dable_story_popup_bg", g.style.position = "fixed", g.style.top = "0", g.style.right = "0", g.style.bottom = "0", g.style.left = "0", g.style.backgroundColor = "#000", g.style.opacity = ".7", g.style.filter = "alpha(opacity=80)";
                        var h = document.createElement("div");
                        h.id = "dable_story_wrapper", h.style.position = "absolute", h.style.WebkitOverflowScrolling = "touch", h.style.overflowX = "hidden", h.style.backgroundColor = "#fff";
                        var i = document.createElement("ul");
                        i.id = "dable_story_ul", i.style.position = "absolute", i.style.top = "0", i.style.bottom = "0", i.style.left = "-".concat(100 * c, "%"), i.style.width = "".concat(100 * b, "%"), i.style.overflowX = "hidden", i.style.backgroundColor = "#fff";
                        for (var j = "", k = a && a.length || 0, l = 0; k > l; l++) {
                            var m = "",
                                n = a[l],
                                o = n.type,
                                p = n.category,
                                q = n.sp,
                                r = n.name,
                                t = n.description,
                                x = n.thumbnail,
                                y = n.link;
                            m = "article" === o ? "<div class='dable_story_li_header_left'>\n          <div class='dable_category'>".concat(p, "</div>\n        </div>") : "<div class='dable_story_li_header_left'>\n          <div class='dable_ad-mark'>AD</div>\n          <div class='dable_sp-mark-custom'>".concat(q, "</div>\n        </div>");
                            var z = "<li class= 'dable_story_li' style= 'width: ".concat(100 / b, "%'>\n        <div class='dable_story_li_header'>\n            ").concat(m, "\n            <div class='dable_story_li_header_right'>\n                <div class='dable_btn-pause'></div>\n                <div class='dable-logo'>\n                    <a href='https://static.dable.io/static/html/introduction.html' target='_blank' class='dable_powered-by'>\n                        <span class='dable_powered-by-by'>by</span>\n                        <span class='dable_powered-by-dable'>Dable</span>\n                    </a>\n                </div>\n                <div class='dable_btn-close'>\n                    <i></i>\n                    <i></i>\n                </div>\n            </div>\n            <div class='dable_status_bar'>\n                <i></i>\n            </div>\n        </div>\n        <a href='").concat(y, "' class='dable_link-btn'>\n          <div class='dable_thumbnail_wrap'>\n              <img class='dable_thumbnail' src='").concat(x, "'>\n          </div>\n          <div class='dable_name'>").concat(r, "</div>\n        </a>\n        <div class='dable_description'>\n            ").concat(t, "\n        </div>\n        <div class='dable_read_more'>\n            <a href='").concat(y, "' class='dable_link-btn'>Read More &gt;</a>\n        </div>\n    </li>");
                            j += z
                        }
                        i.innerHTML = j;
                        var A = document.createElement("div");
                        A.id = "dable_story_page_arrs", A.innerHTML = "<div class='dable_page-btn' id='dable_prev'><span></span></div><div class='dable_page-btn' id='dable_next'><span></span></div>";
                        var B = document.createElement("div");
                        B.id = "dable_story_page_dots";
                        for (var C = "", D = 0; b > D; D++) C += '<span class="dable_story_page_dot"></span>';
                        B.innerHTML = C, h.appendChild(i), h.appendChild(B), f.appendChild(g), f.appendChild(h), f.appendChild(A), document.body.appendChild(f)
                    }
                };
            b.exports = {
                init: m
            }
        }, {
            "../ba-postmessage.js": 8,
            "../util.coffee": 24
        }],
        31: [function(a, b) {
            var c, d, e, f, g, h, i, j, k;
            h = a("../util.coffee"), c = a("../event.coffee"), g = a("../ba-postmessage.js"), e = !1, i = {}, k = {}, j = {}, f = function(a, b, c, d) {
                if (null == d && (d = !1), b.getAttribute("data-updown-show") !== c)
                    if (b.setAttribute("data-updown-show", c), "down" === c) {
                        if (b.className = b.className.replace(" dable-updown-hidden", ""), b.style.height = d && h.getElemHeight(a) ? h.getElemHeight(a) + "px" : "auto", a.className.indexOf(!1)) return a.className = a.className + " dable-updown-hidden"
                    } else if (a.className = a.className.replace(" dable-updown-hidden", ""), a.style.height = d && h.getElemHeight(b) ? h.getElemHeight(b) + "px" : "auto", b.className.indexOf(!1)) return b.className = b.className + " dable-updown-hidden"
            }, d = function(a) {
                var b, d, g, j, l, m, n, o, p;
                return g = a.frame_id, j = a.link_widget_id, n = a.threshold_top, m = a.threshold_bottom, e || (h.insertCss(".dable-updown-hidden{display:none !important;}"), e = !0), d = document.getElementById(g), o = document.createElement("div"), o.id = "dablewidget_" + j + "_" + parseInt(9999 * Math.random()), o.className = o.className + " dable-updown-hidden", o.style.overflow = "hidden", o.setAttribute("data-widget_id", j), null != (l = d.parentNode) && l.insertBefore(o, d.nextSibling), dable("renderWidget", o.id), p = !0, b = function() {
                    var a, b, c, e, g, i, j, k;
                    return k = d.getAttribute("data-updown-show") || "down", j = null != (g = h.getHeight()) ? g.viewport : void 0, i = h.getScrollY(), a = h.getElemHeight(d) || h.getElemHeight(o), b = h.getOffsetY(d) || h.getOffsetY(o), a && j ? (c = "down" === k ? b + a - i : i + j - b, e = c / j * 100, "down" === k && n >= e && (f(o, d, "up", p), p = !1), "up" === k && m >= e ? f(o, d, "down") : void 0) : void 0
                }, i["updown" + g] = function() {
                    return k["updown" + g] && clearTimeout(k["updown" + g]), k["updown" + g] = setTimeout(b, 100)
                }, c.addEvent(h.get_scroll_base_el(), "scroll", i["updown" + g]), setInterval(i["updown" + g], 5e3), b(), !0
            }, b.exports = {
                init: d
            }
        }, {
            "../ba-postmessage.js": 8,
            "../event.coffee": 12,
            "../util.coffee": 24
        }],
        32: [function(a) {
            var b, c, d, e, f, g, h, i;
            if ((null != (h = window.dable) ? !h.plugin_loaded : !0) && (b = a("./lib/CommandQueue.coffee"), c = a("./lib/Executor.coffee"), i = a("./lib/util.coffee"), !/(MSIE 6|Firefox\/33)/.test(window.navigator.userAgent) && (i.readParam("dable_newsroom") && i.includeScript(i.protocol() + "//static.dable.io/dist/newsroom.min.js"), null == window.dable && (window.dable = function() {
                    return null == dable.q && (dable.q = []), dable.q.push(arguments)
                }), g = window.dable.q || [], i.isArray(g)))) {
                for (window.dable.q = new b(new c), d = 0, f = g.length; f > d; d++) e = g[d], window.dable.q.push(e);
                window.dable.plugin_loaded = !0
            }
        }, {
            "./lib/CommandQueue.coffee": 1,
            "./lib/Executor.coffee": 2,
            "./lib/util.coffee": 24
        }],
        33: [function(require, module, exports) {
            function _typeof(a) {
                "@babel/helpers - typeof";
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                    return typeof a
                } : function(a) {
                    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                })(a)
            }
            var JSON = this && this.JSON || function() {
                function f(a) {
                    return 10 > a ? "0" + a : a
                }

                function stringify(a, b) {
                    var c, d, e, f, g, h = /["\\\x00-\x1f\x7f-\x9f]/g;
                    switch (_typeof(a)) {
                        case "string":
                            return h.test(a) ? '"' + a.replace(h, function(a) {
                                var b = m[a];
                                return b ? b : (b = a.charCodeAt(), "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16))
                            }) + '"' : '"' + a + '"';
                        case "number":
                            return isFinite(a) ? String(a) : "null";
                        case "boolean":
                        case "null":
                            return String(a);
                        case "object":
                            if (!a) return "null";
                            if ("function" == typeof a.toJSON) return stringify(a.toJSON());
                            if (c = [], "number" == typeof a.length && !a.propertyIsEnumerable("length")) {
                                for (f = a.length, d = 0; f > d; d += 1) c.push(stringify(a[d], b) || "null");
                                return "[" + c.join(",") + "]"
                            }
                            if (b)
                                for (f = b.length, d = 0; f > d; d += 1) e = b[d], "string" == typeof e && (g = stringify(a[e], b), g && c.push(stringify(e) + ":" + g));
                            else
                                for (e in a) "string" == typeof e && (g = stringify(a[e], b), g && c.push(stringify(e) + ":" + g));
                            return "{" + c.join(",") + "}"
                    }
                }
                Date.prototype.toJSON = function() {
                    return this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z"
                };
                var m = {
                    "\b": "\\b",
                    "	": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                };
                return {
                    stringify: stringify,
                    parse: function parse(text, filter) {
                        function walk(a, b) {
                            var c, d;
                            if (b && "object" === _typeof(b))
                                for (c in b) Object.prototype.hasOwnProperty.apply(b, [c]) && (d = walk(c, b[c]), void 0 !== d ? b[c] = d : delete b[c]);
                            return filter(a, b)
                        }
                        var j;
                        if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof filter ? walk("", j) : j;
                        throw new SyntaxError("parseJSON")
                    }
                }
            }();
            module.exports = JSON
        }, {}],
        34: [function(a, b) {
            function c(a) {
                "@babel/helpers - typeof";
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                    return typeof a
                } : function(a) {
                    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                })(a)
            }
            var d = a("./JSON"),
                e = function(a) {
                    for (var b = function k(a) {
                            var b, d = [];
                            for (b in a) a.hasOwnProperty(b) && d.push([b, function() {
                                return a[b] && "object" == c(a[b]) && a[b].constructor != Array ? a[b].constructor == Object && k(a[b]) || a[b].constructor == Date && a[b].toJSON() || a[b].toString() : "function" == typeof a[b] ? a[b].toString() : a[b]
                            }()]);
                            return d.sort(function(a, b) {
                                return a[0] > b[0] ? 1 : -1
                            })
                        }, e = d.stringify(b(a)), f = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D", g = 4294967295, h = 0, i = 0, j = e.length; j > i; i++) h = 255 & (g ^ e.charCodeAt(i)), g = g >>> 8 ^ "0x" + f.substr((h << 3) + h, 8);
                    return g = 4294967295 ^ g, (0 > g && 4294967295 + g + 1 || g).toString(16)
                };
            b.exports = e
        }, {
            "./JSON": 33
        }]
    }, {}, [32])
}();