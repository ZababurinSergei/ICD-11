function slideDown(n) {
    var t = $(".dropdown:eq(0)", n);
    menuWidth = $("#menu").width();
    elementWidth = t.width();
    elementLeft = t.parent().position().left;
    menuWidth - (elementWidth + elementLeft) < 0 && t.animate({left: "-100"});
    t.slideDown(100)
}

var YAHOO, foolproof, providers, openid, providers_large, providers_small;
(function (n, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function (n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
})(typeof window != "undefined" ? window : this, function (n, t) {
    function ri(n) {
        var t = n.length, r = i.type(n);
        return r === "function" || i.isWindow(n) ? !1 : n.nodeType === 1 && t ? !0 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }

    function ui(n, t, r) {
        if (i.isFunction(t)) return i.grep(n, function (n, i) {
            return !!t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n, function (n) {
            return n === t !== r
        });
        if (typeof t == "string") {
            if (ue.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }

    function hr(n, t) {
        do n = n[t]; while (n && n.nodeType !== 1);
        return n
    }

    function oe(n) {
        var t = fi[n] = {};
        return i.each(n.match(h) || [], function (n, i) {
            t[i] = !0
        }), t
    }

    function cr() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded", a, !1), n.removeEventListener("load", a, !1)) : (u.detachEvent("onreadystatechange", a), n.detachEvent("onload", a))
    }

    function a() {
        (u.addEventListener || event.type === "load" || u.readyState === "complete") && (cr(), i.ready())
    }

    function yr(n, t, r) {
        if (r === undefined && n.nodeType === 1) {
            var u = "data-" + t.replace(vr, "-$1").toLowerCase();
            if (r = n.getAttribute(u), typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : ar.test(r) ? i.parseJSON(r) : r
                } catch (f) {
                }
                i.data(n, t, r)
            } else r = undefined
        }
        return r
    }

    function ei(n) {
        var t;
        for (t in n) if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0
    }

    function pr(n, t, r, u) {
        if (i.acceptData(n)) {
            var s, e, h = i.expando, l = n.nodeType, o = l ? i.cache : n, f = l ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || r !== undefined || typeof t != "string") return f || (f = l ? n[h] = c.pop() || i.guid++ : h), o[f] || (o[f] = l ? {} : {toJSON: i.noop}), (typeof t == "object" || typeof t == "function") && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)), e = o[f], u || (e.data || (e.data = {}), e = e.data), r !== undefined && (e[i.camelCase(t)] = r), typeof t == "string" ? (s = e[t], s == null && (s = e[i.camelCase(t)])) : s = e, s
        }
    }

    function wr(n, t, u) {
        if (i.acceptData(n)) {
            var e, s, h = n.nodeType, f = h ? i.cache : n, o = h ? n[i.expando] : i.expando;
            if (f[o]) {
                if (t && (e = u ? f[o] : f[o].data, e)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" ")), s = t.length; s--;) delete e[t[s]];
                    if (u ? !ei(e) : !i.isEmptyObject(e)) return
                }
                (u || (delete f[o].data, ei(f[o]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[o] : f[o] = null)
            }
        }
    }

    function vt() {
        return !0
    }

    function it() {
        return !1
    }

    function dr() {
        try {
            return u.activeElement
        } catch (n) {
        }
    }

    function gr(n) {
        var i = nu.split("|"), t = n.createDocumentFragment();
        if (t.createElement) while (i.length) t.createElement(i.pop());
        return t
    }

    function f(n, t) {
        var e, u, s = 0,
            r = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(t || "*") : undefined;
        if (!r) for (r = [], e = n.childNodes || n; (u = e[s]) != null; s++) !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return t === undefined || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }

    function be(n) {
        oi.test(n.type) && (n.defaultChecked = n.checked)
    }

    function eu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function ou(n) {
        return n.type = (i.find.attr(n, "type") !== null) + "/" + n.type, n
    }

    function su(n) {
        var t = ye.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function li(n, t) {
        for (var u, r = 0; (u = n[r]) != null; r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }

    function hu(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e) for (f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function ke(n, t) {
        var u, e, f;
        if (t.nodeType === 1) {
            if (u = t.nodeName.toLowerCase(), !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events) i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            u === "script" && t.text !== n.text ? (ou(t).text = n.text, su(t)) : u === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : u === "input" && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : u === "option" ? t.defaultSelected = t.selected = n.defaultSelected : (u === "input" || u === "textarea") && (t.defaultValue = n.defaultValue)
        }
    }

    function cu(t, r) {
        var u = i(r.createElement(t)).appendTo(r.body),
            f = n.getDefaultComputedStyle ? n.getDefaultComputedStyle(u[0]).display : i.css(u[0], "display");
        return u.detach(), f
    }

    function lu(n) {
        var r = u, t = ai[n];
        return t || (t = cu(n, r), t !== "none" && t || (ot = (ot || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = (ot[0].contentWindow || ot[0].contentDocument).document, r.write(), r.close(), t = cu(n, r), ot.detach()), ai[n] = t), t
    }

    function vu(n, t) {
        return {
            get: function () {
                var i = n();
                if (i != null) {
                    if (i) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
    }

    function wu(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = pu.length; i--;) if (t = pu[i] + r, t in n) return t;
        return u
    }

    function bu(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; u < s; u++) (r = n[u], r.style) && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || f !== "none" || (r.style.display = ""), r.style.display === "" && et(r) && (e[u] = i._data(r, "olddisplay", lu(r.nodeName)))) : e[u] || (o = et(r), (f && f !== "none" || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; u < s; u++) (r = n[u], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }

    function ku(n, t, i) {
        var r = to.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function du(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + w[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + w[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), r !== "padding" && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }

    function gu(n, t, u) {
        var o = !0, f = t === "width" ? n.offsetWidth : n.offsetHeight, e = k(n),
            s = r.boxSizing() && i.css(n, "boxSizing", !1, e) === "border-box";
        if (f <= 0 || f == null) {
            if (f = d(n, t, e), (f < 0 || f == null) && (f = n.style[t]), yt.test(f)) return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + du(n, t, u || (s ? "border" : "content"), o, e) + "px"
    }

    function e(n, t, i, r, u) {
        return new e.prototype.init(n, t, i, r, u)
    }

    function tf() {
        return setTimeout(function () {
            rt = undefined
        }), rt = i.now()
    }

    function bt(n, t) {
        var r, i = {height: n}, u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function rf(n, t, i) {
        for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; r < e; r++) if (u = f[r].call(i, t, n)) return u
    }

    function eo(n, t, u) {
        var f, l, p, a, o, b, y, w, c = this, v = {}, s = n.style, h = n.nodeType && et(n), e = i._data(n, "fxshow");
        u.queue || (o = i._queueHooks(n, "fx"), o.unqueued == null && (o.unqueued = 0, b = o.empty.fire, o.empty.fire = function () {
            o.unqueued || b()
        }), o.unqueued++, c.always(function () {
            c.always(function () {
                o.unqueued--;
                i.queue(n, "fx").length || o.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], y = i.css(n, "display"), w = lu(n.nodeName), y === "none" && (y = w), y === "inline" && i.css(n, "float") === "none" && (r.inlineBlockNeedsLayout && w !== "inline" ? s.zoom = 1 : s.display = "inline-block"));
        u.overflow && (s.overflow = "hidden", r.shrinkWrapBlocks() || c.always(function () {
            s.overflow = u.overflow[0];
            s.overflowX = u.overflow[1];
            s.overflowY = u.overflow[2]
        }));
        for (f in t) if (l = t[f], uo.exec(l)) {
            if (delete t[f], p = p || l === "toggle", l === (h ? "hide" : "show")) if (l === "show" && e && e[f] !== undefined) h = !0; else continue;
            v[f] = e && e[f] || i.style(n, f)
        }
        if (!i.isEmptyObject(v)) {
            e ? "hidden" in e && (h = e.hidden) : e = i._data(n, "fxshow", {});
            p && (e.hidden = !h);
            h ? i(n).show() : c.done(function () {
                i(n).hide()
            });
            c.done(function () {
                var t;
                i._removeData(n, "fxshow");
                for (t in v) i.style(n, t, v[t])
            });
            for (f in v) a = rf(h ? e[f] : 0, f, c), f in e || (e[f] = a.start, h && (a.end = a.start, a.start = f === "width" || f === "height" ? 1 : 0))
        }
    }

    function oo(n, t) {
        var r, f, e, u, o;
        for (r in n) if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
            u = o.expand(u);
            delete n[f];
            for (r in u) r in n || (n[r] = u[r], t[r] = e)
        } else t[f] = e
    }

    function uf(n, t, r) {
        var e, o, s = 0, l = wt.length, f = i.Deferred().always(function () {
            delete c.elem
        }), c = function () {
            if (o) return !1;
            for (var s = rt || tf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {specialEasing: {}}, r),
            originalProperties: t,
            originalOptions: r,
            startTime: rt || tf(),
            duration: r.duration,
            tweens: [],
            createTween: function (t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f), f
            },
            stop: function (t) {
                var i = 0, r = t ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; i < r; i++) u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
            }
        }), h = u.props;
        for (oo(h, u.opts.specialEasing); s < l; s++) if (e = wt[s].call(u, n, h, u.opts), e) return e;
        return i.map(h, rf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function vf(n) {
        return function (t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, f = 0, e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r)) while (u = e[f++]) u.charAt(0) === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function yf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function (n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o) return !(h = s)
                } else return t.dataTypes.unshift(s), e(s), !1
            }), h
        }

        var f = {}, o = n === bi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ki(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function vo(n, t, i) {
        for (var o, e, u, f, s = n.contents, r = n.dataTypes; r[0] === "*";) r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e) for (f in s) if (s[f] && s[f].test(e)) {
            r.unshift(f);
            break
        }
        if (r[0] in i) u = r[0]; else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        }
        if (u) return u !== r[0] && r.unshift(u), i[u]
    }

    function yo(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1]) for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;) if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u) if (u === "*") u = e; else if (e !== "*" && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f) for (h in o) if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                break
            }
            if (f !== !0) if (f && n.throws) t = f(t); else try {
                t = f(t)
            } catch (l) {
                return {state: "parsererror", error: f ? l : "No conversion from " + e + " to " + u}
            }
        }
        return {state: "success", data: t}
    }

    function di(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function (t, i) {
            r || wo.test(n) ? u(n, i) : di(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
        }); else if (r || i.type(t) !== "object") u(n, t); else for (f in t) di(n + "[" + f + "]", t[f], r, u)
    }

    function wf() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {
        }
    }

    function ns() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function bf(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }

    var c = [], l = c.slice, ir = c.concat, ti = c.push, rr = c.indexOf, ct = {}, gf = ct.toString,
        tt = ct.hasOwnProperty, ii = "".trim, r = {}, ur = "1.11.0", i = function (n, t) {
            return new i.fn.init(n, t)
        }, ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ie = /-([\da-z])/gi, re = function (n, t) {
            return t.toUpperCase()
        }, p, or, sr, h, fi, lt, o, lr, ar, vr, ot, ai, ff, of, sf, dt, gi, ni, nr, tr, kf, df;
    i.fn = i.prototype = {
        jquery: ur, constructor: i, selector: "", length: 0, toArray: function () {
            return l.call(this)
        }, get: function (n) {
            return n != null ? n < 0 ? this[n + this.length] : this[n] : l.call(this)
        }, pushStack: function (n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (n, t) {
            return i.each(this, n, t)
        }, map: function (n) {
            return this.pushStack(i.map(this, function (t, i) {
                return n.call(t, i, t)
            }))
        }, slice: function () {
            return this.pushStack(l.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (n) {
            var i = this.length, t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: ti, sort: c.sort, splice: c.splice
    };
    i.extend = i.fn.extend = function () {
        var r, e, t, f, o, s, n = arguments[0] || {}, u = 1, c = arguments.length, h = !1;
        for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++), typeof n == "object" || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++) if ((o = arguments[u]) != null) for (f in o) (r = n[f], t = o[f], n !== t) && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (ur + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (n) {
            throw new Error(n);
        }, noop: function () {
        }, isFunction: function (n) {
            return i.type(n) === "function"
        }, isArray: Array.isArray || function (n) {
            return i.type(n) === "array"
        }, isWindow: function (n) {
            return n != null && n == n.window
        }, isNumeric: function (n) {
            return n - parseFloat(n) >= 0
        }, isEmptyObject: function (n) {
            var t;
            for (t in n) return !1;
            return !0
        }, isPlainObject: function (n) {
            var t;
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (u) {
                return !1
            }
            if (r.ownLast) for (t in n) return tt.call(n, t);
            for (t in n) ;
            return t === undefined || tt.call(n, t)
        }, type: function (n) {
            return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? ct[gf.call(n)] || "object" : typeof n
        }, globalEval: function (t) {
            t && i.trim(t) && (n.execScript || function (t) {
                n.eval.call(n, t)
            })(t)
        }, camelCase: function (n) {
            return n.replace(te, "ms-").replace(ie, re)
        }, nodeName: function (n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (n, t, i) {
            var u, r = 0, f = n.length, e = ri(n);
            if (i) {
                if (e) {
                    for (; r < f; r++) if (u = t.apply(n[r], i), u === !1) break
                } else for (r in n) if (u = t.apply(n[r], i), u === !1) break
            } else if (e) {
                for (; r < f; r++) if (u = t.call(n[r], r, n[r]), u === !1) break
            } else for (r in n) if (u = t.call(n[r], r, n[r]), u === !1) break;
            return n
        }, trim: ii && !ii.call("﻿ ") ? function (n) {
            return n == null ? "" : ii.call(n)
        } : function (n) {
            return n == null ? "" : (n + "").replace(ne, "")
        }, makeArray: function (n, t) {
            var r = t || [];
            return n != null && (ri(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ti.call(r, n)), r
        }, inArray: function (n, t, i) {
            var r;
            if (t) {
                if (rr) return rr.call(t, n, i);
                for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++) if (i in t && t[i] === n) return i
            }
            return -1
        }, merge: function (n, t) {
            for (var r = +t.length, i = 0, u = n.length; i < r;) n[u++] = t[i++];
            if (r !== r) while (t[i] !== undefined) n[u++] = t[i++];
            return n.length = u, n
        }, grep: function (n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        }, map: function (n, t, i) {
            var u, r = 0, e = n.length, o = ri(n), f = [];
            if (o) for (; r < e; r++) u = t(n[r], r, i), u != null && f.push(u); else for (r in n) u = t(n[r], r, i), u != null && f.push(u);
            return ir.apply([], f)
        }, guid: 1, proxy: function (n, t) {
            var u, r, f;
            return (typeof t == "string" && (f = n[t], t = n, n = f), !i.isFunction(n)) ? undefined : (u = l.call(arguments, 2), r = function () {
                return n.apply(t || this, u.concat(l.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r)
        }, now: function () {
            return +new Date
        }, support: r
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (n, t) {
        ct["[object " + t + "]"] = t.toLowerCase()
    });
    p = function (n) {
        function u(n, t, i, u) {
            var w, h, c, v, k, y, d, a, nt, g;
            if ((t ? t.ownerDocument || t : s) !== e && p(t), t = t || e, i = i || [], !n || typeof n != "string") return i;
            if ((v = t.nodeType) !== 1 && v !== 9) return [];
            if (l && !u) {
                if (w = or.exec(n)) if (c = w[1]) {
                    if (v === 9) if (h = t.getElementById(c), h && h.parentNode) {
                        if (h.id === c) return i.push(h), i
                    } else return i; else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && et(t, h) && h.id === c) return i.push(h), i
                } else {
                    if (w[2]) return b.apply(i, t.getElementsByTagName(n)), i;
                    if ((c = w[3]) && r.getElementsByClassName && t.getElementsByClassName) return b.apply(i, t.getElementsByClassName(c)), i
                }
                if (r.qsa && (!o || !o.test(n))) {
                    if (a = d = f, nt = t, g = v === 9 && n, v === 1 && t.nodeName.toLowerCase() !== "object") {
                        for (y = vt(n), (d = t.getAttribute("id")) ? a = d.replace(sr, "\\$&") : t.setAttribute("id", a), a = "[id='" + a + "'] ", k = y.length; k--;) y[k] = a + yt(y[k]);
                        nt = gt.test(n) && ii(t.parentNode) || t;
                        g = y.join(",")
                    }
                    if (g) try {
                        return b.apply(i, nt.querySelectorAll(g)), i
                    } catch (tt) {
                    } finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return vr(n.replace(lt, "$1"), t, i, u)
        }

        function ni() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }

            var i = [];
            return n
        }

        function h(n) {
            return n[f] = !0, n
        }

        function c(n) {
            var t = e.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ti(n, i) {
            for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i
        }

        function pi(n, t) {
            var i = t && n,
                r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r) return r;
            if (i) while (i = i.nextSibling) if (i === t) return -1;
            return n ? 1 : -1
        }

        function hr(n) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }

        function cr(n) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }

        function tt(n) {
            return h(function (t) {
                return t = +t, h(function (i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ii(n) {
            return n && typeof n.getElementsByTagName !== ut && n
        }

        function wi() {
        }

        function vt(n, i) {
            var e, f, s, o, r, h, c, l = hi[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = nr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = tr.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(lt, " ")
                }), r = r.slice(e.length));
                for (o in t.filter) (f = at[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : hi(n, h).slice(0)
        }

        function yt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function ri(n, t, i) {
            var r = t.dir, u = i && r === "parentNode", e = bi++;
            return t.first ? function (t, i, f) {
                while (t = t[r]) if (t.nodeType === 1 || u) return n(t, i, f)
            } : function (t, i, o) {
                var s, h, c = [a, e];
                if (o) {
                    while (t = t[r]) if ((t.nodeType === 1 || u) && n(t, i, o)) return !0
                } else while (t = t[r]) if (t.nodeType === 1 || u) {
                    if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === a && s[1] === e) return c[2] = s[2];
                    if (h[r] = c, c[2] = n(t, i, o)) return !0
                }
            }
        }

        function ui(n) {
            return n.length > 1 ? function (t, i, r) {
                for (var u = n.length; u--;) if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function pt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++) (e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), h(function (f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, k = f || ar(t || "*", o.nodeType ? [o] : o, []),
                    v = n && (f || !t) ? pt(k, p, n, o, s) : k, h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r) for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;) (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;) (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;) (a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
            })
        }

        function ei(n) {
            for (var s, u, r, o = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function (n) {
                return n === s
            }, c, !0), a = ri(function (n) {
                return nt.call(s, n) > -1
            }, c, !0), e = [function (n, t, i) {
                return !h && (i || t !== ht) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
            }]; i < o; i++) if (u = t.relative[n[i].type]) e = [ri(ui(e), u)]; else {
                if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                    for (r = ++i; r < o; r++) if (t.relative[n[r].type]) break;
                    return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({value: n[i - 2].type === " " ? "*" : ""})).replace(lt, "$1"), u, i < r && ei(n.slice(i, r)), r < o && ei(n = n.slice(r)), r < o && yt(n))
                }
                e.push(u)
            }
            return ui(e)
        }

        function lr(n, i) {
            var r = i.length > 0, f = n.length > 0, o = function (o, s, h, c, l) {
                var y, d, w, k = 0, v = "0", g = o && [], p = [], nt = ht, tt = o || f && t.find.TAG("*", l),
                    it = a += nt == null ? 1 : Math.random() || .1, rt = tt.length;
                for (l && (ht = s !== e && s); v !== rt && (y = tt[v]) != null; v++) {
                    if (f && y) {
                        for (d = 0; w = n[d++];) if (w(y, s, h)) {
                            c.push(y);
                            break
                        }
                        l && (a = it)
                    }
                    r && ((y = !w && y) && k--, o && g.push(y))
                }
                if (k += v, r && v !== k) {
                    for (d = 0; w = i[d++];) w(g, p, s, h);
                    if (o) {
                        if (k > 0) while (v--) g[v] || p[v] || (p[v] = di.call(c));
                        p = pt(p)
                    }
                    b.apply(c, p);
                    l && !o && p.length > 0 && k + i.length > 1 && u.uniqueSort(c)
                }
                return l && (a = it, ht = nt), g
            };
            return r ? h(o) : o
        }

        function ar(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            return i
        }

        function vr(n, i, u, f) {
            var s, e, o, c, a, h = vt(n);
            if (!f && h.length === 1) {
                if (e = h[0] = h[0].slice(0), e.length > 2 && (o = e[0]).type === "ID" && r.getById && i.nodeType === 9 && l && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0], !i) return u;
                    n = n.slice(e.shift().value.length)
                }
                for (s = at.needsContext.test(n) ? 0 : e.length; s--;) {
                    if (o = e[s], t.relative[c = o.type]) break;
                    if ((a = t.find[c]) && (f = a(o.matches[0].replace(k, d), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                        if (e.splice(s, 1), n = f.length && yt(e), !n) return b.apply(u, f), u;
                        break
                    }
                }
            }
            return wt(n, h)(f, i, !l, u, gt.test(n) && ii(i.parentNode) || i), u
        }

        var it, r, t, st, oi, wt, ht, y, rt, p, e, v, l, o, g, ct, et, f = "sizzle" + -new Date, s = n.document, a = 0,
            bi = 0, si = ni(), hi = ni(), ci = ni(), bt = function (n, t) {
                return n === t && (rt = !0), 0
            }, ut = typeof undefined, li = -2147483648, ki = {}.hasOwnProperty, w = [], di = w.pop, gi = w.push, b = w.push,
            ai = w.slice, nt = w.indexOf || function (n) {
                for (var t = 0, i = this.length; t < i; t++) if (this[t] === n) return t;
                return -1
            },
            kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            i = "[\\x20\\t\\r\\n\\f]", ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", vi = ft.replace("w", "w#"),
            yi = "\\[" + i + "*(" + ft + ")" + i + "*(?:([*^$|!~]?=)" + i + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + vi + ")|)|)" + i + "*\\]",
            dt = ":(" + ft + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + yi.replace(3, 8) + ")*)|.*)\\)|)",
            lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
            nr = new RegExp("^" + i + "*," + i + "*"), tr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
            ir = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"), rr = new RegExp(dt),
            ur = new RegExp("^" + vi + "$"), at = {
                ID: new RegExp("^#(" + ft + ")"),
                CLASS: new RegExp("^\\.(" + ft + ")"),
                TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + yi),
                PSEUDO: new RegExp("^" + dt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + kt + ")$", "i"),
                needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
            }, fr = /^(?:input|select|textarea|button)$/i, er = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/,
            or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, sr = /'|\\/g,
            k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"), d = function (n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            };
        try {
            b.apply(w = ai.call(s.childNodes), s.childNodes);
            w[s.childNodes.length].nodeType
        } catch (yr) {
            b = {
                apply: w.length ? function (n, t) {
                    gi.apply(n, ai.call(t))
                } : function (n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];) ;
                    n.length = i - 1
                }
            }
        }
        r = u.support = {};
        oi = u.isXML = function (n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        p = u.setDocument = function (n) {
            var a, u = n ? n.ownerDocument || n : s, h = u.defaultView;
            return u === e || u.nodeType !== 9 || !u.documentElement ? e : (e = u, v = u.documentElement, l = !oi(u), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function () {
                p()
            }, !1) : h.attachEvent && h.attachEvent("onunload", function () {
                p()
            })), r.attributes = c(function (n) {
                return n.className = "i", !n.getAttribute("className")
            }), r.getElementsByTagName = c(function (n) {
                return n.appendChild(u.createComment("")), !n.getElementsByTagName("*").length
            }), r.getElementsByClassName = ot.test(u.getElementsByClassName) && c(function (n) {
                return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", n.getElementsByClassName("i").length === 2
            }), r.getById = c(function (n) {
                return v.appendChild(n).id = f, !u.getElementsByName || !u.getElementsByName(f).length
            }), r.getById ? (t.find.ID = function (n, t) {
                if (typeof t.getElementById !== ut && l) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }, t.filter.ID = function (n) {
                var t = n.replace(k, d);
                return function (n) {
                    return n.getAttribute("id") === t
                }
            }) : (delete t.find.ID, t.filter.ID = function (n) {
                var t = n.replace(k, d);
                return function (n) {
                    var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }), t.find.TAG = r.getElementsByTagName ? function (n, t) {
                if (typeof t.getElementsByTagName !== ut) return t.getElementsByTagName(n)
            } : function (n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if (n === "*") {
                    while (i = u[f++]) i.nodeType === 1 && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = r.getElementsByClassName && function (n, t) {
                if (typeof t.getElementsByClassName !== ut && l) return t.getElementsByClassName(n)
            }, g = [], o = [], (r.qsa = ot.test(u.querySelectorAll)) && (c(function (n) {
                n.innerHTML = "<select t=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[t^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + kt + ")");
                n.querySelectorAll(":checked").length || o.push(":checked")
            }), c(function (n) {
                var t = u.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (r.matchesSelector = ot.test(ct = v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector)) && c(function (n) {
                r.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                g.push("!=", dt)
            }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), a = ot.test(v.compareDocumentPosition), et = a || ot.test(v.contains) ? function (n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n, i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
            } : function (n, t) {
                if (t) while (t = t.parentNode) if (t === n) return !0;
                return !1
            }, bt = a ? function (n, t) {
                if (n === t) return rt = !0, 0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, i & 1 || !r.sortDetached && t.compareDocumentPosition(n) === i) ? n === u || n.ownerDocument === s && et(s, n) ? -1 : t === u || t.ownerDocument === s && et(s, t) ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0 : i & 4 ? -1 : 1
            } : function (n, t) {
                if (n === t) return rt = !0, 0;
                var i, r = 0, o = n.parentNode, h = t.parentNode, f = [n], e = [t];
                if (o && h) {
                    if (o === h) return pi(n, t)
                } else return n === u ? -1 : t === u ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0;
                for (i = n; i = i.parentNode;) f.unshift(i);
                for (i = t; i = i.parentNode;) e.unshift(i);
                while (f[r] === e[r]) r++;
                return r ? pi(f[r], e[r]) : f[r] === s ? -1 : e[r] === s ? 1 : 0
            }, u)
        };
        u.matches = function (n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function (n, t) {
            if ((n.ownerDocument || n) !== e && p(n), t = t.replace(ir, "='$1']"), r.matchesSelector && l && (!g || !g.test(t)) && (!o || !o.test(t))) try {
                var i = ct.call(n, t);
                if (i || r.disconnectedMatch || n.document && n.document.nodeType !== 11) return i
            } catch (f) {
            }
            return u(t, e, null, [n]).length > 0
        };
        u.contains = function (n, t) {
            return (n.ownerDocument || n) !== e && p(n), et(n, t)
        };
        u.attr = function (n, i) {
            (n.ownerDocument || n) !== e && p(n);
            var f = t.attrHandle[i.toLowerCase()],
                u = f && ki.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : undefined;
            return u !== undefined ? u : r.attributes || !l ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value : null
        };
        u.error = function (n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function (n) {
            var u, f = [], t = 0, i = 0;
            if (rt = !r.detectDuplicates, y = !r.sortStable && n.slice(0), n.sort(bt), rt) {
                while (u = n[i++]) u === n[i] && (t = f.push(i));
                while (t--) n.splice(f[t], 1)
            }
            return y = null, n
        };
        st = u.getText = function (n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else while (r = n[u++]) i += st(r);
            return i
        };
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: h,
            match: at,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (n) {
                    return n[1] = n[1].replace(k, d), n[3] = (n[4] || n[5] || "").replace(k, d), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                }, CHILD: function (n) {
                    return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && u.error(n[0]), n
                }, PSEUDO: function (n) {
                    var i, t = !n[5] && n[2];
                    return at.CHILD.test(n[0]) ? null : (n[3] && n[4] !== undefined ? n[2] = n[4] : t && rr.test(t) && (i = vt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function (n) {
                    var t = n.replace(k, d).toLowerCase();
                    return n === "*" ? function () {
                        return !0
                    } : function (n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (n) {
                    var t = si[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function (n) {
                        return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute !== ut && n.getAttribute("class") || "")
                    })
                }, ATTR: function (n, t, i) {
                    return function (r) {
                        var f = u.attr(r, n);
                        return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                }, CHILD: function (n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth", o = n.slice(-4) !== "last", e = t === "of-type";
                    return r === 1 && u === 0 ? function (n) {
                        return !!n.parentNode
                    } : function (t, i, h) {
                        var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling", p = t.parentNode,
                            g = e && t.nodeName.toLowerCase(), d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];) if (e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    w = b = n === "only" && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                for (k = p[f] || (p[f] = {}), v = k[n] || [], y = v[0] === a && v[1], l = v[0] === a && v[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();) if (c.nodeType === 1 && ++l && c === t) {
                                    k[n] = [a, y, l];
                                    break
                                }
                            } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a) l = v[1]; else while (c = ++y && c && c[b] || (l = y = 0) || w.pop()) if ((e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]), c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                }, PSEUDO: function (n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function (n, t) {
                        for (var u, f = r(n, i), e = f.length; e--;) u = nt.call(n, f[e]), n[u] = !(t[u] = f[e])
                    }) : function (n) {
                        return r(n, 0, e)
                    }) : r
                }
            },
            pseudos: {
                not: h(function (n) {
                    var i = [], r = [], t = wt(n.replace(lt, "$1"));
                    return t[f] ? h(function (n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--;) (e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function (n, u, f) {
                        return i[0] = n, t(i, null, f, r), !r.pop()
                    }
                }), has: h(function (n) {
                    return function (t) {
                        return u(n, t).length > 0
                    }
                }), contains: h(function (n) {
                    return function (t) {
                        return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                    }
                }), lang: h(function (n) {
                    return ur.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(), function (t) {
                        var i;
                        do if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
                }), target: function (t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                }, root: function (n) {
                    return n === v
                }, focus: function (n) {
                    return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                }, enabled: function (n) {
                    return n.disabled === !1
                }, disabled: function (n) {
                    return n.disabled === !0
                }, checked: function (n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                }, selected: function (n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                }, empty: function (n) {
                    for (n = n.firstChild; n; n = n.nextSibling) if (n.nodeType < 6) return !1;
                    return !0
                }, parent: function (n) {
                    return !t.pseudos.empty(n)
                }, header: function (n) {
                    return er.test(n.nodeName)
                }, input: function (n) {
                    return fr.test(n.nodeName)
                }, button: function (n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                }, text: function (n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                }, first: tt(function () {
                    return [0]
                }), last: tt(function (n, t) {
                    return [t - 1]
                }), eq: tt(function (n, t, i) {
                    return [i < 0 ? i + t : i]
                }), even: tt(function (n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }), odd: tt(function (n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }), lt: tt(function (n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }), gt: tt(function (n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (it in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) t.pseudos[it] = hr(it);
        for (it in {submit: !0, reset: !0}) t.pseudos[it] = cr(it);
        return wi.prototype = t.filters = t.pseudos, t.setFilters = new wi, wt = u.compile = function (n, t) {
            var r, u = [], e = [], i = ci[n + " "];
            if (!i) {
                for (t || (t = vt(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = ci(n, lr(e, u))
            }
            return i
        }, r.sortStable = f.split("").sort(bt).join("") === f, r.detectDuplicates = !!rt, p(), r.sortDetached = c(function (n) {
            return n.compareDocumentPosition(e.createElement("div")) & 1
        }), c(function (n) {
            return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#"
        }) || ti("type|href|height|width", function (n, t, i) {
            if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), r.attributes && c(function (n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
        }) || ti("value", function (n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue
        }), c(function (n) {
            return n.getAttribute("disabled") == null
        }) || ti(kt, function (n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = p;
    i.expr = p.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = p.uniqueSort;
    i.text = p.getText;
    i.isXMLDoc = p.isXML;
    i.contains = p.contains;
    var fr = i.expr.match.needsContext, er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ue = /^.[^:#\[\.,]*$/;
    i.filter = function (n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function (n) {
            return n.nodeType === 1
        }))
    };
    i.fn.extend({
        find: function (n) {
            var t, r = [], u = this, f = u.length;
            if (typeof n != "string") return this.pushStack(i(n).filter(function () {
                for (t = 0; t < f; t++) if (i.contains(u[t], this)) return !0
            }));
            for (t = 0; t < f; t++) i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
        }, filter: function (n) {
            return this.pushStack(ui(this, n || [], !1))
        }, not: function (n) {
            return this.pushStack(ui(this, n || [], !0))
        }, is: function (n) {
            return !!ui(this, typeof n == "string" && fr.test(n) ? i(n) : n || [], !1).length
        }
    });
    var ft, u = n.document, fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ee = i.fn.init = function (n, t) {
        var r, f;
        if (!n) return this;
        if (typeof n == "string") {
            if (r = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : fe.exec(n), r && (r[1] || !t)) {
                if (r[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), er.test(r[1]) && i.isPlainObject(t)) for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (f = u.getElementById(r[2]), f && f.parentNode) {
                    if (f.id !== r[2]) return ft.find(n);
                    this.length = 1;
                    this[0] = f
                }
                return this.context = u, this.selector = n, this
            }
            return !t || t.jquery ? (t || ft).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? typeof ft.ready != "undefined" ? ft.ready(n) : n(i) : (n.selector !== undefined && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
    };
    ee.prototype = i.fn;
    ft = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {children: !0, contents: !0, next: !0, prev: !0};
    i.extend({
        dir: function (n, t, r) {
            for (var f = [], u = n[t]; u && u.nodeType !== 9 && (r === undefined || u.nodeType !== 1 || !i(u).is(r));) u.nodeType === 1 && f.push(u), u = u[t];
            return f
        }, sibling: function (n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    i.fn.extend({
        has: function (n) {
            var t, r = i(n, this), u = r.length;
            return this.filter(function () {
                for (t = 0; t < u; t++) if (i.contains(this, r[t])) return !0
            })
        }, closest: function (n, t) {
            for (var r, f = 0, o = this.length, u = [], e = fr.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++) for (r = this[f]; r && r !== t; r = r.parentNode) if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                u.push(r);
                break
            }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        }, index: function (n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (n, t) {
            return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
        }, addBack: function (n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function (n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        }, parents: function (n) {
            return i.dir(n, "parentNode")
        }, parentsUntil: function (n, t, r) {
            return i.dir(n, "parentNode", r)
        }, next: function (n) {
            return hr(n, "nextSibling")
        }, prev: function (n) {
            return hr(n, "previousSibling")
        }, nextAll: function (n) {
            return i.dir(n, "nextSibling")
        }, prevAll: function (n) {
            return i.dir(n, "previousSibling")
        }, nextUntil: function (n, t, r) {
            return i.dir(n, "nextSibling", r)
        }, prevUntil: function (n, t, r) {
            return i.dir(n, "previousSibling", r)
        }, siblings: function (n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        }, children: function (n) {
            return i.sibling(n.firstChild)
        }, contents: function (n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (sr[n] || (f = i.unique(f)), or.test(n) && (f = f.reverse())), this.pushStack(f)
        }
    });
    h = /\S+/g;
    fi = {};
    i.Callbacks = function (n) {
        n = typeof n == "string" ? fi[n] || oe(n) : i.extend({}, n);
        var o, u, h, f, e, c, t = [], r = !n.once && [], l = function (i) {
            for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && e < f; e++) if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                u = !1;
                break
            }
            o = !1;
            t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
        }, s = {
            add: function () {
                if (t) {
                    var r = t.length;
                    (function e(r) {
                        i.each(r, function (r, u) {
                            var f = i.type(u);
                            f === "function" ? n.unique && s.has(u) || t.push(u) : u && u.length && f !== "string" && e(u)
                        })
                    })(arguments);
                    o ? f = t.length : u && (c = r, l(u))
                }
                return this
            }, remove: function () {
                return t && i.each(arguments, function (n, r) {
                    for (var u; (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), o && (u <= f && f--, u <= e && e--)
                }), this
            }, has: function (n) {
                return n ? i.inArray(n, t) > -1 : !!(t && t.length)
            }, empty: function () {
                return t = [], f = 0, this
            }, disable: function () {
                return t = r = u = undefined, this
            }, disabled: function () {
                return !t
            }, lock: function () {
                return r = undefined, u || s.disable(), this
            }, locked: function () {
                return !r
            }, fireWith: function (n, i) {
                return t && (!h || r) && (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
            }, fire: function () {
                return s.fireWith(this, arguments), this
            }, fired: function () {
                return !!h
            }
        };
        return s
    };
    i.extend({
        Deferred: function (n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]],
                f = "pending", r = {
                    state: function () {
                        return f
                    }, always: function () {
                        return t.done(arguments).fail(arguments), this
                    }, then: function () {
                        var n = arguments;
                        return i.Deferred(function (f) {
                            i.each(u, function (u, e) {
                                var o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function () {
                                    var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    }, promise: function (n) {
                        return n != null ? i.extend(n, r) : r
                    }
                }, t = {};
            return r.pipe = r.then, i.each(u, function (n, i) {
                var e = i[2], o = i[3];
                r[i[1]] = e.add;
                o && e.add(function () {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = function () {
                    return t[i[0] + "With"](this === t ? r : this, arguments), this
                };
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        }, when: function (n) {
            var t = 0, u = l.call(arguments), r = u.length, e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
                f = e === 1 ? n : i.Deferred(), h = function (n, t, i) {
                    return function (r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? l.call(arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                }, o, c, s;
            if (r > 1) for (o = new Array(r), c = new Array(r), s = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    });
    i.fn.ready = function (n) {
        return i.ready.promise().done(n), this
    };
    i.extend({
        isReady: !1, readyWait: 1, holdReady: function (n) {
            n ? i.readyWait++ : i.ready(!0)
        }, ready: function (n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!u.body) return setTimeout(i.ready);
                (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (lt.resolveWith(u, [i]), i.fn.trigger && i(u).trigger("ready").off("ready"))
            }
        }
    });
    i.ready.promise = function (t) {
        if (!lt) if (lt = i.Deferred(), u.readyState === "complete") setTimeout(i.ready); else if (u.addEventListener) u.addEventListener("DOMContentLoaded", a, !1), n.addEventListener("load", a, !1); else {
            u.attachEvent("onreadystatechange", a);
            n.attachEvent("onload", a);
            var r = !1;
            try {
                r = n.frameElement == null && u.documentElement
            } catch (e) {
            }
            r && r.doScroll && function f() {
                if (!i.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (n) {
                        return setTimeout(f, 50)
                    }
                    cr();
                    i.ready()
                }
            }()
        }
        return lt.promise(t)
    };
    o = typeof undefined;
    for (lr in i(r)) break;
    r.ownLast = lr !== "0";
    r.inlineBlockNeedsLayout = !1;
    i(function () {
        var t, n, i = u.getElementsByTagName("body")[0];
        i && (t = u.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", n = u.createElement("div"), i.appendChild(t).appendChild(n), typeof n.style.zoom !== o && (n.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (r.inlineBlockNeedsLayout = n.offsetWidth === 3) && (i.style.zoom = 1)), i.removeChild(t), t = n = null)
    }), function () {
        var n = u.createElement("div");
        if (r.deleteExpando == null) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (t) {
                r.deleteExpando = !1
            }
        }
        n = null
    }();
    i.acceptData = function (n) {
        var t = i.noData[(n.nodeName + " ").toLowerCase()], r = +n.nodeType || 1;
        return r !== 1 && r !== 9 ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
    };
    ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    vr = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ei(n)
        },
        data: function (n, t, i) {
            return pr(n, t, i)
        },
        removeData: function (n, t) {
            return wr(n, t)
        },
        _data: function (n, t, i) {
            return pr(n, t, i, !0)
        },
        _removeData: function (n, t) {
            return wr(n, t, !0)
        }
    });
    i.fn.extend({
        data: function (n, t) {
            var f, u, e, r = this[0], o = r && r.attributes;
            if (n === undefined) {
                if (this.length && (e = i.data(r), r.nodeType === 1 && !i._data(r, "parsedAttrs"))) {
                    for (f = o.length; f--;) u = o[f].name, u.indexOf("data-") === 0 && (u = i.camelCase(u.slice(5)), yr(r, u, e[u]));
                    i._data(r, "parsedAttrs", !0)
                }
                return e
            }
            return typeof n == "object" ? this.each(function () {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function () {
                i.data(this, n, t)
            }) : r ? yr(r, n, i.data(r, n)) : undefined
        }, removeData: function (n) {
            return this.each(function () {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function (n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
        }, dequeue: function (n, t) {
            t = t || "fx";
            var r = i.queue(n, t), e = r.length, u = r.shift(), f = i._queueHooks(n, t), o = function () {
                i.dequeue(n, t)
            };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        }, _queueHooks: function (n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function () {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                })
            })
        }
    });
    i.fn.extend({
        queue: function (n, t) {
            var r = 2;
            return (typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function () {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
        }, dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n)
            })
        }, clearQueue: function (n) {
            return this.queue(n || "fx", [])
        }, promise: function (n, t) {
            var r, f = 1, e = i.Deferred(), u = this, o = this.length, s = function () {
                --f || e.resolveWith(u, [u])
            };
            for (typeof n != "string" && (t = n, n = undefined), n = n || "fx"; o--;) r = i._data(u[o], n + "queueHooks"), r && r.empty && (f++, r.empty.add(s));
            return s(), e.promise(t)
        }
    });
    var at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = ["Top", "Right", "Bottom", "Left"],
        et = function (n, t) {
            return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
        }, b = i.access = function (n, t, r, u, f, e, o) {
            var s = 0, c = n.length, h = r == null;
            if (i.type(r) === "object") {
                f = !0;
                for (s in r) i.access(n, t, s, r[s], !0, e, o)
            } else if (u !== undefined && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function (n, t, r) {
                return h.call(i(n), r)
            })), t)) for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        }, oi = /^(?:checkbox|radio)$/i;
    (function () {
        var i = u.createDocumentFragment(), n = u.createElement("div"), t = u.createElement("input");
        if (n.setAttribute("className", "t"), n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a>", r.leadingWhitespace = n.firstChild.nodeType === 3, r.tbody = !n.getElementsByTagName("tbody").length, r.htmlSerialize = !!n.getElementsByTagName("link").length, r.html5Clone = u.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>", t.type = "checkbox", t.checked = !0, i.appendChild(t), r.appendChecked = t.checked, n.innerHTML = "<textarea>x<\/textarea>", r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, i.appendChild(n), n.innerHTML = "<input type='radio' checked='checked' name='t'/>", r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, r.noCloneEvent = !0, n.attachEvent && (n.attachEvent("onclick", function () {
            r.noCloneEvent = !1
        }), n.cloneNode(!0).click()), r.deleteExpando == null) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (f) {
                r.deleteExpando = !1
            }
        }
        i = n = t = null
    })(), function () {
        var t, i, f = u.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + t, (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"), r[t + "Bubbles"] = f.attributes[i].expando === !1);
        f = null
    }();
    var si = /^(?:input|select|textarea)$/i, se = /^key/, he = /^(?:mouse|contextmenu)|click/,
        br = /^(?:focusinfocus|focusoutblur)$/, kr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function (n, t, r, u, f) {
            var w, y, b, p, s, c, l, a, e, k, d, v = i._data(n);
            if (v) {
                for (r.handler && (p = r, r = p.handler, f = p.selector), r.guid || (r.guid = i.guid++), (y = v.events) || (y = v.events = {}), (c = v.handle) || (c = v.handle = function (n) {
                    return typeof i !== o && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(c.elem, arguments) : undefined
                }, c.elem = n), t = (t || "").match(h) || [""], b = t.length; b--;) (w = kr.exec(t[b]) || [], e = d = w[1], k = (w[2] || "").split(".").sort(), e) && (s = i.event.special[e] || {}, e = (f ? s.delegateType : s.bindType) || e, s = i.event.special[e] || {}, l = i.extend({
                    type: e,
                    origType: d,
                    data: u,
                    handler: r,
                    guid: r.guid,
                    selector: f,
                    needsContext: f && i.expr.match.needsContext.test(f),
                    namespace: k.join(".")
                }, p), (a = y[e]) || (a = y[e] = [], a.delegateCount = 0, s.setup && s.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = r.guid)), f ? a.splice(a.delegateCount++, 0, l) : a.push(l), i.event.global[e] = !0);
                n = null
            }
        },
        remove: function (n, t, r, u, f) {
            var y, o, s, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;) {
                    if (s = kr.exec(t[p]) || [], e = k = s[1], w = (s[2] || "").split(".").sort(), !e) {
                        for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], (f || k === o.origType) && (!r || r.guid === o.guid) && (!s || s.test(o.namespace)) && (!u || u === o.selector || u === "**" && o.selector) && (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                    b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
                }
                i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
            }
        },
        trigger: function (t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u], s = tt.call(t, "type") ? t.type : t,
                v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((o = h = f = f || u, f.nodeType !== 3 && f.nodeType !== 8) && !br.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."), s = v.shift(), v.sort()), a = s.indexOf(":") < 0 && "on" + s, t = t[i.expando] ? t : new i.Event(s, typeof t == "object" && t), t.isTrigger = e ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = f), r = r == null ? [t] : i.makeArray(r, [t]), c = i.event.special[s] || {}, e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s, br.test(p + s) || (o = o.parentNode); o; o = o.parentNode) y.push(o), h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                }
                for (w = 0; (o = y[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? p : c.bindType || s, l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"), l && l.apply(o, r), l = a && o[a], l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r), t.result === !1 && t.preventDefault());
                if (t.type = s, !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
                    h = f[a];
                    h && (f[a] = null);
                    i.event.triggered = s;
                    try {
                        f[s]()
                    } catch (b) {
                    }
                    i.event.triggered = undefined;
                    h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function (n) {
            n = i.event.fix(n);
            var e, f, t, r, o, s = [], h = l.call(arguments), c = (i._data(this, "events") || {})[n.type] || [],
                u = i.event.special[n.type] || {};
            if (h[0] = n, n.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c), e = 0; (r = s[e++]) && !n.isPropagationStopped();) for (n.currentTarget = r.elem, o = 0; (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();) (!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h), f !== undefined && (n.result = f) === !1 && (n.preventDefault(), n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n), n.result
            }
        },
        handlers: function (n, t) {
            var f, e, u, o, h = [], s = t.delegateCount, r = n.target;
            if (s && r.nodeType && (!n.button || n.type !== "click")) for (; r != this; r = r.parentNode || this) if (r.nodeType === 1 && (r.disabled !== !0 || n.type !== "click")) {
                for (u = [], o = 0; o < s; o++) e = t[o], f = e.selector + " ", u[f] === undefined && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(e);
                u.length && h.push({elem: r, handlers: u})
            }
            return s < t.length && h.push({elem: this, handlers: t.slice(s)}), h
        },
        fix: function (n) {
            if (n[i.expando]) return n;
            var e, o, s, r = n.type, f = n, t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = he.test(r) ? this.mouseHooks : se.test(r) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
            return n.target || (n.target = f.srcElement || u), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (n, t) {
                var i, e, r, f = t.button, o = t.fromElement;
                return n.pageX == null && t.clientX != null && (e = n.target.ownerDocument || u, r = e.documentElement, i = e.body, n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o), n.which || f === undefined || (n.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), n
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== dr() && this.focus) try {
                        return this.focus(), !1
                    } catch (n) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === dr() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (i.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                }, _default: function (n) {
                    return i.nodeName(n.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (n) {
                    n.result !== undefined && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function (n, t, r, u) {
            var f = i.extend(new i.Event, r, {type: n, isSimulated: !0, originalEvent: {}});
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = u.removeEventListener ? function (n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function (n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
    };
    i.Event = function (n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && (n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault()) ? vt : it) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        isDefaultPrevented: it,
        isPropagationStopped: it,
        isImmediatePropagationStopped: it,
        preventDefault: function () {
            var n = this.originalEvent;
            (this.isDefaultPrevented = vt, n) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function () {
            var n = this.originalEvent;
            (this.isPropagationStopped = vt, n) && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = vt;
            this.stopPropagation()
        }
    };
    i.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (n, t) {
        i.event.special[n] = {
            delegateType: t, bindType: t, handle: function (n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    r.submitBubbles || (i.event.special.submit = {
        setup: function () {
            if (i.nodeName(this, "form")) return !1;
            i.event.add(this, "click._submit keypress._submit", function (n) {
                var r = n.target, t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form : undefined;
                t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit", function (n) {
                    n._submit_bubble = !0
                }), i._data(t, "submitBubbles", !0))
            })
        }, postDispatch: function (n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        }, teardown: function () {
            if (i.nodeName(this, "form")) return !1;
            i.event.remove(this, "._submit")
        }
    });
    r.changeBubbles || (i.event.special.change = {
        setup: function () {
            if (si.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function (n) {
                n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), i.event.add(this, "click._change", function (n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0)
            })), !1;
            i.event.add(this, "beforeactivate._change", function (n) {
                var t = n.target;
                si.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function (n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), i._data(t, "changeBubbles", !0))
            })
        }, handle: function (n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return i.event.remove(this, "._change"), !si.test(this.nodeName)
        }
    });
    r.focusinBubbles || i.each({focus: "focusin", blur: "focusout"}, function (n, t) {
        var r = function (n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function () {
                var u = this.ownerDocument || this, f = i._data(u, t);
                f || u.addEventListener(n, r, !0);
                i._data(u, t, (f || 0) + 1)
            }, teardown: function () {
                var u = this.ownerDocument || this, f = i._data(u, t) - 1;
                f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0), i._removeData(u, t))
            }
        }
    });
    i.fn.extend({
        on: function (n, t, r, u, f) {
            var o, e;
            if (typeof n == "object") {
                typeof t != "string" && (r = r || t, t = undefined);
                for (o in n) this.on(o, t, r, n[o], f);
                return this
            }
            if (r == null && u == null ? (u = t, r = t = undefined) : u == null && (typeof t == "string" ? (u = r, r = undefined) : (u = r, r = t, t = undefined)), u === !1) u = it; else if (!u) return this;
            return f === 1 && (e = u, u = function (n) {
                return i().off(n), e.apply(this, arguments)
            }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function () {
                i.event.add(this, n, u, r, t)
            })
        }, one: function (n, t, i, r) {
            return this.on(n, t, i, r, 1)
        }, off: function (n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if (typeof n == "object") {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = it), this.each(function () {
                i.event.remove(this, n, r, t)
            })
        }, trigger: function (n, t) {
            return this.each(function () {
                i.event.trigger(n, t, this)
            })
        }, triggerHandler: function (n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var nu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ce = / jQuery\d+="(?:null|\d+)"/g, tu = new RegExp("<(?:" + nu + ")[\\s/>]", "i"), hi = /^\s+/,
        iu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ru = /<([\w:]+)/,
        uu = /<tbody/i, le = /<|&#?\w+;/, ae = /<(?:script|style|link)/i, ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fu = /^$|\/(?:java|ecma)script/i, ye = /^true\/(.*)/, pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, s = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            legend: [1, "<fieldset>", "<\/fieldset>"],
            area: [1, "<map>", "<\/map>"],
            param: [1, "<object>", "<\/object>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
        }, we = gr(u), ci = we.appendChild(u.createElement("div"));
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;
    i.extend({
        clone: function (n, t, u) {
            var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
            if (r.html5Clone || i.isXMLDoc(n) || !tu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (ci.innerHTML = n.outerHTML, ci.removeChild(s = ci.firstChild)), (!r.noCloneEvent || !r.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n)) for (e = f(s), h = f(n), o = 0; (c = h[o]) != null; ++o) e[o] && ke(c, e[o]);
            if (t) if (u) for (h = h || f(n), e = e || f(s), o = 0; (c = h[o]) != null; o++) hu(c, e[o]); else hu(n, s);
            return e = f(s, "script"), e.length > 0 && li(e, !l && f(n, "script")), e = h = c = null, s
        }, buildFragment: function (n, t, u, e) {
            for (var c, o, b, h, p, w, a, k = n.length, v = gr(t), l = [], y = 0; y < k; y++) if (o = n[y], o || o === 0) if (i.type(o) === "object") i.merge(l, o.nodeType ? [o] : o); else if (le.test(o)) {
                for (h = h || v.appendChild(t.createElement("div")), p = (ru.exec(o) || ["", ""])[1].toLowerCase(), a = s[p] || s._default, h.innerHTML = a[1] + o.replace(iu, "<$1><\/$2>") + a[2], c = a[0]; c--;) h = h.lastChild;
                if (!r.leadingWhitespace && hi.test(o) && l.push(t.createTextNode(hi.exec(o)[0])), !r.tbody) for (o = p === "table" && !uu.test(o) ? h.firstChild : a[1] === "<table>" && !uu.test(o) ? h : 0, c = o && o.childNodes.length; c--;) i.nodeName(w = o.childNodes[c], "tbody") && !w.childNodes.length && o.removeChild(w);
                for (i.merge(l, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = v.lastChild
            } else l.push(t.createTextNode(o));
            for (h && v.removeChild(h), r.appendChecked || i.grep(f(l, "input"), be), y = 0; o = l[y++];) if ((!e || i.inArray(o, e) === -1) && (b = i.contains(o.ownerDocument, o), h = f(v.appendChild(o), "script"), b && li(h), u)) for (c = 0; o = h[c++];) fu.test(o.type || "") && u.push(o);
            return h = null, v
        }, cleanData: function (n, t) {
            for (var u, s, f, e, a = 0, h = i.expando, l = i.cache, v = r.deleteExpando, y = i.event.special; (u = n[a]) != null; a++) if ((t || i.acceptData(u)) && (f = u[h], e = f && l[f], e)) {
                if (e.events) for (s in e.events) y[s] ? i.event.remove(u, s) : i.removeEvent(u, s, e.handle);
                l[f] && (delete l[f], v ? delete u[h] : typeof u.removeAttribute !== o ? u.removeAttribute(h) : u[h] = null, c.push(f))
            }
        }
    });
    i.fn.extend({
        text: function (n) {
            return b(this, function (n) {
                return n === undefined ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            }, null, n, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = eu(this, n);
                    t.appendChild(n)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = eu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        }, remove: function (n, t) {
            for (var r, e = n ? i.filter(n, this) : this, u = 0; (r = e[u]) != null; u++) t || r.nodeType !== 1 || i.cleanData(f(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && li(f(r, "script")), r.parentNode.removeChild(r));
            return this
        }, empty: function () {
            for (var n, t = 0; (n = this[t]) != null; t++) {
                for (n.nodeType === 1 && i.cleanData(f(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        }, clone: function (n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function () {
                return i.clone(this, n, t)
            })
        }, html: function (n) {
            return b(this, function (n) {
                var t = this[0] || {}, u = 0, e = this.length;
                if (n === undefined) return t.nodeType === 1 ? t.innerHTML.replace(ce, "") : undefined;
                if (typeof n == "string" && !ae.test(n) && (r.htmlSerialize || !tu.test(n)) && (r.leadingWhitespace || !hi.test(n)) && !s[(ru.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(iu, "<$1><\/$2>");
                    try {
                        for (; u < e; u++) t = this[u] || {}, t.nodeType === 1 && (i.cleanData(f(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (o) {
                    }
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        }, replaceWith: function () {
            var n = arguments[0];
            return this.domManip(arguments, function (t) {
                n = this.parentNode;
                i.cleanData(f(this));
                n && n.replaceChild(t, this)
            }), n && (n.length || n.nodeType) ? this : this.remove()
        }, detach: function (n) {
            return this.remove(n, !0)
        }, domManip: function (n, t) {
            n = ir.apply([], n);
            var h, u, c, o, v, s, e = 0, l = this.length, p = this, w = l - 1, a = n[0], y = i.isFunction(a);
            if (y || l > 1 && typeof a == "string" && !r.checkClone && ve.test(a)) return this.each(function (i) {
                var r = p.eq(i);
                y && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t)
            });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this), h = s.firstChild, s.childNodes.length === 1 && (s = h), h)) {
                for (o = i.map(f(s, "script"), ou), c = o.length; e < l; e++) u = s, e !== w && (u = i.clone(u, !0, !0), c && i.merge(o, f(u, "script"))), t.call(this[e], u, e);
                if (c) for (v = o[o.length - 1].ownerDocument, i.map(o, su), e = 0; e < c; e++) u = o[e], fu.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(pe, "")));
                s = h = null
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (n, t) {
        i.fn[n] = function (n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ti.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    ai = {}, function () {
        var t, i, n = u.createElement("div"),
            f = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        t = n.getElementsByTagName("a")[0];
        t.style.cssText = "float:left;opacity:.5";
        r.opacity = /^0.5/.test(t.style.opacity);
        r.cssFloat = !!t.style.cssFloat;
        n.style.backgroundClip = "content-box";
        n.cloneNode(!0).style.backgroundClip = "";
        r.clearCloneStyle = n.style.backgroundClip === "content-box";
        t = n = null;
        r.shrinkWrapBlocks = function () {
            var t, r, n, e;
            if (i == null) {
                if (t = u.getElementsByTagName("body")[0], !t) return;
                e = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
                r = u.createElement("div");
                n = u.createElement("div");
                t.appendChild(r).appendChild(n);
                i = !1;
                typeof n.style.zoom !== o && (n.style.cssText = f + ";width:1px;padding:1px;zoom:1", n.innerHTML = "<div><\/div>", n.firstChild.style.width = "5px", i = n.offsetWidth !== 3);
                t.removeChild(r);
                t = r = n = null
            }
            return i
        }
    }();
    var au = /^margin/, yt = new RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"), k, d, de = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (k = function (n) {
        return n.ownerDocument.defaultView.getComputedStyle(n, null)
    }, d = function (n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || k(n), u = r ? r.getPropertyValue(t) || r[t] : undefined, r && (u !== "" || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), yt.test(u) && au.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), u === undefined ? u : u + ""
    }) : u.documentElement.currentStyle && (k = function (n) {
        return n.currentStyle
    }, d = function (n, t, i) {
        var o, f, e, r, u = n.style;
        return i = i || k(n), r = i ? i[t] : undefined, r == null && u && u[t] && (r = u[t]), yt.test(r) && !de.test(t) && (o = u.left, f = n.runtimeStyle, e = f && f.left, e && (f.left = n.currentStyle.left), u.left = t === "fontSize" ? "1em" : r, r = u.pixelLeft + "px", u.left = o, e && (f.left = e)), r === undefined ? r : r + "" || "auto"
    }), function () {
        function a() {
            var f, t, r = u.getElementsByTagName("body")[0];
            r && (f = u.createElement("div"), t = u.createElement("div"), f.style.cssText = l, r.appendChild(f).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", i.swap(r, r.style.zoom != null ? {zoom: 1} : {}, function () {
                c = t.offsetWidth === 4
            }), o = !0, s = !1, h = !0, n.getComputedStyle && (s = (n.getComputedStyle(t, null) || {}).top !== "1%", o = (n.getComputedStyle(t, null) || {width: "4px"}).width === "4px"), r.removeChild(f), t = r = null)
        }

        var f, e, c, o, s, h, t = u.createElement("div"),
            l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            v = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        f = t.getElementsByTagName("a")[0];
        f.style.cssText = "float:left;opacity:.5";
        r.opacity = /^0.5/.test(f.style.opacity);
        r.cssFloat = !!f.style.cssFloat;
        t.style.backgroundClip = "content-box";
        t.cloneNode(!0).style.backgroundClip = "";
        r.clearCloneStyle = t.style.backgroundClip === "content-box";
        f = t = null;
        i.extend(r, {
            reliableHiddenOffsets: function () {
                if (e != null) return e;
                var i, n, f, t = u.createElement("div"), r = u.getElementsByTagName("body")[0];
                if (r) return t.setAttribute("className", "t"), t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", i = u.createElement("div"), i.style.cssText = l, r.appendChild(i).appendChild(t), t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", n = t.getElementsByTagName("td"), n[0].style.cssText = "padding:0;margin:0;border:0;display:none", f = n[0].offsetHeight === 0, n[0].style.display = "", n[1].style.display = "none", e = f && n[0].offsetHeight === 0, r.removeChild(i), t = r = null, e
            }, boxSizing: function () {
                return c == null && a(), c
            }, boxSizingReliable: function () {
                return o == null && a(), o
            }, pixelPosition: function () {
                return s == null && a(), s
            }, reliableMarginRight: function () {
                var r, f, t, i;
                if (h == null && n.getComputedStyle) {
                    if (r = u.getElementsByTagName("body")[0], !r) return;
                    f = u.createElement("div");
                    t = u.createElement("div");
                    f.style.cssText = l;
                    r.appendChild(f).appendChild(t);
                    i = t.appendChild(u.createElement("div"));
                    i.style.cssText = t.style.cssText = v;
                    i.style.marginRight = i.style.width = "0";
                    t.style.width = "1px";
                    h = !parseFloat((n.getComputedStyle(i, null) || {}).marginRight);
                    r.removeChild(f)
                }
                return h
            }
        })
    }();
    i.swap = function (n, t, i, r) {
        var f, u, e = {};
        for (u in t) e[u] = n.style[u], n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t) n.style[u] = e[u];
        return f
    };
    var vi = /alpha\([^)]*\)/i, ge = /opacity\s*=\s*([^)]*)/, no = /^(none|table(?!-c[ea]).+)/,
        to = new RegExp("^(" + at + ")(.*)$", "i"), io = new RegExp("^([+-])=(" + at + ")", "i"),
        ro = {position: "absolute", visibility: "hidden", display: "block"}, yu = {letterSpacing: 0, fontWeight: 400},
        pu = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = d(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: r.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (n, t, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, c, e, s = i.camelCase(t), h = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = wu(h, s)), e = i.cssHooks[t] || i.cssHooks[s], u !== undefined) {
                    if (c = typeof u, c === "string" && (o = io.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), c = "number"), u == null || u !== u) return;
                    if (c !== "number" || i.cssNumber[s] || (u += "px"), r.clearCloneStyle || u !== "" || t.indexOf("background") !== 0 || (h[t] = "inherit"), !e || !("set" in e) || (u = e.set(n, u, f)) !== undefined) try {
                        h[t] = "";
                        h[t] = u
                    } catch (l) {
                    }
                } else return e && "get" in e && (o = e.get(n, !1, f)) !== undefined ? o : h[t]
            }
        },
        css: function (n, t, r, u) {
            var s, f, e, o = i.camelCase(t);
            return (t = i.cssProps[o] || (i.cssProps[o] = wu(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), f === undefined && (f = d(n, t, u)), f === "normal" && t in yu && (f = yu[t]), r === "" || r) ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, u) {
                if (r) return n.offsetWidth === 0 && no.test(i.css(n, "display")) ? i.swap(n, ro, function () {
                    return gu(n, t, u)
                }) : gu(n, t, u)
            }, set: function (n, u, f) {
                var e = f && k(n);
                return ku(n, u, f ? du(n, t, f, r.boxSizing() && i.css(n, "boxSizing", !1, e) === "border-box", e) : 0)
            }
        }
    });
    r.opacity || (i.cssHooks.opacity = {
        get: function (n, t) {
            return ge.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (n, t) {
            var r = n.style, u = n.currentStyle, e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                f = u && u.filter || r.filter || "";
            (r.zoom = 1, (t >= 1 || t === "") && i.trim(f.replace(vi, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), t === "" || u && !u.filter)) || (r.filter = vi.test(f) ? f.replace(vi, e) : f + " " + e)
        }
    });
    i.cssHooks.marginRight = vu(r.reliableMarginRight, function (n, t) {
        if (t) return i.swap(n, {display: "inline-block"}, d, [n, "marginRight"])
    });
    i.each({margin: "", padding: "", border: "Width"}, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        au.test(n) || (i.cssHooks[n + t].set = ku)
    });
    i.fn.extend({
        css: function (n, t) {
            return b(this, function (n, t, r) {
                var f, e, o = {}, u = 0;
                if (i.isArray(t)) {
                    for (f = k(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        }, show: function () {
            return bu(this, !0)
        }, hide: function () {
            return bu(this)
        }, toggle: function (n) {
            return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function () {
                et(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e, init: function (n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        }, cur: function () {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        }, run: function (n) {
            var t, r = e.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : e.propHooks._default.set(this), this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function (n) {
                var t;
                return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
            }, set: function (n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function (n) {
            return n
        }, swing: function (n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    var rt, pt, uo = /^(?:toggle|show|hide)$/, nf = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
        fo = /queueHooks$/, wt = [eo], st = {
            "*": [function (n, t) {
                var f = this.createTween(n, t), s = f.cur(), u = nf.exec(t), e = u && u[3] || (i.cssNumber[n] ? "" : "px"),
                    r = (i.cssNumber[n] || e !== "px" && +s) && nf.exec(i.css(f.elem, n)), o = 1, h = 20;
                if (r && r[3] !== e) {
                    e = e || r[3];
                    u = u || [];
                    r = +s || 1;
                    do o = o || ".5", r = r / o, i.style(f.elem, n, r + e); while (o !== (o = f.cur() / s) && o !== 1 && --h)
                }
                return u && (r = f.start = +r || +s || 0, f.unit = e, f.end = u[1] ? r + (u[1] + 1) * u[2] : +u[2]), f
            }]
        };
    i.Animation = i.extend(uf, {
        tweener: function (n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], st[r] = st[r] || [], st[r].unshift(t)
        }, prefilter: function (n, t) {
            t ? wt.unshift(n) : wt.push(n)
        }
    });
    i.speed = function (n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function () {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function (n, t, i, r) {
            return this.filter(et).css("opacity", 0).show().end().animate({opacity: t}, n, i, r)
        }, animate: function (n, t, r, u) {
            var o = i.isEmptyObject(n), e = i.speed(t, r, u), f = function () {
                var t = uf(this, i.extend({}, n), e);
                (o || i._data(this, "finish")) && t.stop(!0)
            };
            return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        }, stop: function (n, t, r) {
            var u = function (n) {
                var t = n.stop;
                delete n.stop;
                t(r)
            };
            return typeof n != "string" && (r = t, t = n, n = undefined), t && n !== !1 && this.queue(n || "fx", []), this.each(function () {
                var o = !0, t = n != null && n + "queueHooks", e = i.timers, f = i._data(this);
                if (t) f[t] && f[t].stop && u(f[t]); else for (t in f) f[t] && f[t].stop && fo.test(t) && u(f[t]);
                for (t = e.length; t--;) e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(r), o = !1, e.splice(t, 1));
                (o || !r) && i.dequeue(this, n)
            })
        }, finish: function (n) {
            return n !== !1 && (n = n || "fx"), this.each(function () {
                var t, f = i._data(this), r = f[n + "queue"], e = f[n + "queueHooks"], u = i.timers,
                    o = r ? r.length : 0;
                for (f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function (n, t) {
        var r = i.fn[t];
        i.fn[t] = function (n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function () {
        var r, n = i.timers, t = 0;
        for (rt = i.now(); t < n.length; t++) r = n[t], r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop();
        rt = undefined
    };
    i.fx.timer = function (n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function () {
        pt || (pt = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function () {
        clearInterval(pt);
        pt = null
    };
    i.fx.speeds = {slow: 600, fast: 200, _default: 400};
    i.fn.delay = function (n, t) {
        return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
            var r = setTimeout(t, n);
            i.stop = function () {
                clearTimeout(r)
            }
        })
    }, function () {
        var i, n, f, e, t = u.createElement("div");
        t.setAttribute("className", "t");
        t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        i = t.getElementsByTagName("a")[0];
        f = u.createElement("select");
        e = f.appendChild(u.createElement("option"));
        n = t.getElementsByTagName("input")[0];
        i.style.cssText = "top:1px";
        r.getSetAttribute = t.className !== "t";
        r.style = /top/.test(i.getAttribute("style"));
        r.hrefNormalized = i.getAttribute("href") === "/a";
        r.checkOn = !!n.value;
        r.optSelected = e.selected;
        r.enctype = !!u.createElement("form").enctype;
        f.disabled = !0;
        r.optDisabled = !e.disabled;
        n = u.createElement("input");
        n.setAttribute("value", "");
        r.input = n.getAttribute("value") === "";
        n.value = "t";
        n.setAttribute("type", "radio");
        r.radioValue = n.value === "t";
        i = n = f = e = t = null
    }();
    ff = /\r/g;
    i.fn.extend({
        val: function (n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function (r) {
                var u;
                this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n, u == null ? u = "" : typeof u == "number" ? u += "" : i.isArray(u) && (u = i.map(u, function (n) {
                    return n == null ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value, typeof r == "string" ? r.replace(ff, "") : r == null ? "" : r) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = i.find.attr(n, "value");
                    return t != null ? t : i.text(n)
                }
            }, select: {
                get: function (n) {
                    for (var o, t, s = n.options, u = n.selectedIndex, f = n.type === "select-one" || u < 0, h = f ? null : [], c = f ? u + 1 : s.length, e = u < 0 ? c : f ? u : 0; e < c; e++) if (t = s[e], (t.selected || e === u) && (r.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                        if (o = i(t).val(), f) return o;
                        h.push(o)
                    }
                    return h
                }, set: function (n, t) {
                    for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--;) if (r = u[e], i.inArray(i.valHooks.option.get(r), o) >= 0) try {
                        r.selected = f = !0
                    } catch (s) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return f || (n.selectedIndex = -1), u
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            set: function (n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        };
        r.checkOn || (i.valHooks[this].get = function (n) {
            return n.getAttribute("value") === null ? "on" : n.value
        })
    });
    var ut, ef, v = i.expr.attrHandle, yi = /^(?:checked|selected)$/i, g = r.getSetAttribute, kt = r.input;
    i.fn.extend({
        attr: function (n, t) {
            return b(this, i.attr, n, t, arguments.length > 1)
        }, removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function (n, t, r) {
            var u, f, e = n.nodeType;
            if (n && e !== 3 && e !== 8 && e !== 2) {
                if (typeof n.getAttribute === o) return i.prop(n, t, r);
                if (e === 1 && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? ef : ut)), r !== undefined) if (r === null) i.removeAttr(n, t); else return u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : (n.setAttribute(t, r + ""), r); else return u && "get" in u && (f = u.get(n, t)) !== null ? f : (f = i.find.attr(n, t), f == null ? undefined : f)
            }
        }, removeAttr: function (n, t) {
            var r, u, e = 0, f = t && t.match(h);
            if (f && n.nodeType === 1) while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) ? kt && g || !yi.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(g ? r : u)
        }, attrHooks: {
            type: {
                set: function (n, t) {
                    if (!r.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var u = n.value;
                        return n.setAttribute("type", t), u && (n.value = u), t
                    }
                }
            }
        }
    });
    ef = {
        set: function (n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : kt && g || !yi.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
        var r = v[t] || i.find.attr;
        v[t] = kt && g || !yi.test(t) ? function (n, t, i) {
            var u, f;
            return i || (f = v[t], v[t] = u, u = r(n, t, i) != null ? t.toLowerCase() : null, v[t] = f), u
        } : function (n, t, r) {
            if (!r) return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    kt && g || (i.attrHooks.value = {
        set: function (n, t, r) {
            if (i.nodeName(n, "input")) n.defaultValue = t; else return ut && ut.set(n, t, r)
        }
    });
    g || (ut = {
        set: function (n, t, i) {
            var r = n.getAttributeNode(i);
            return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)), r.value = t += "", i === "value" || t === n.getAttribute(i) ? t : void 0
        }
    }, v.id = v.name = v.coords = function (n, t, i) {
        var r;
        if (!i) return (r = n.getAttributeNode(t)) && r.value !== "" ? r.value : null
    }, i.valHooks.button = {
        get: function (n, t) {
            var i = n.getAttributeNode(t);
            if (i && i.specified) return i.value
        }, set: ut.set
    }, i.attrHooks.contenteditable = {
        set: function (n, t, i) {
            ut.set(n, t === "" ? !1 : t, i)
        }
    }, i.each(["width", "height"], function (n, t) {
        i.attrHooks[t] = {
            set: function (n, i) {
                if (i === "") return n.setAttribute(t, "auto"), i
            }
        }
    }));
    r.style || (i.attrHooks.style = {
        get: function (n) {
            return n.style.cssText || undefined
        }, set: function (n, t) {
            return n.style.cssText = t + ""
        }
    });
    of = /^(?:input|select|textarea|button|object)$/i;
    sf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function (n, t) {
            return b(this, i.prop, n, t, arguments.length > 1)
        }, removeProp: function (n) {
            return n = i.propFix[n] || n, this.each(function () {
                try {
                    this[n] = undefined;
                    delete this[n]
                } catch (t) {
                }
            })
        }
    });
    i.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && e !== 3 && e !== 8 && e !== 2) return o = e !== 1 || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), r !== undefined ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
        }, propHooks: {
            tabIndex: {
                get: function (n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : of.test(n.nodeName) || sf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    });
    r.hrefNormalized || i.each(["href", "src"], function (n, t) {
        i.propHooks[t] = {
            get: function (n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    r.optSelected || (i.propHooks.selected = {
        get: function (n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        i.propFix[this.toLowerCase()] = this
    });
    r.enctype || (i.propFix.enctype = "encoding");
    dt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function (n) {
            var o, t, r, u, s, f, e = 0, c = this.length, l = typeof n == "string" && n;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (l) for (o = (n || "").match(h) || []; e < c; e++) if (t = this[e], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(dt, " ") : " "), r) {
                for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                f = i.trim(r);
                t.className !== f && (t.className = f)
            }
            return this
        }, removeClass: function (n) {
            var o, t, r, u, s, f, e = 0, c = this.length, l = arguments.length === 0 || typeof n == "string" && n;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (l) for (o = (n || "").match(h) || []; e < c; e++) if (t = this[e], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(dt, " ") : ""), r) {
                for (s = 0; u = o[s++];) while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                f = n ? i.trim(r) : "";
                t.className !== f && (t.className = f)
            }
            return this
        }, toggleClass: function (n, t) {
            var r = typeof n;
            return typeof t == "boolean" && r === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function () {
                if (r === "string") for (var t, f = 0, u = i(this), e = n.match(h) || []; t = e[f++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t); else (r === o || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        }, hasClass: function (n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++) if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(dt, " ").indexOf(i) >= 0) return !0;
            return !1
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
        i.fn[t] = function (n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function (n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }, bind: function (n, t, i) {
            return this.on(n, null, t, i)
        }, unbind: function (n, t) {
            return this.off(n, null, t)
        }, delegate: function (n, t, i, r) {
            return this.on(t, n, i, r)
        }, undelegate: function (n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var pi = i.now(), wi = /\?/,
        so = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function (t) {
        if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
        var f, r = null, u = i.trim(t + "");
        return u && !i.trim(u.replace(so, function (n, t, i, u) {
            return (f && t && (r = 0), r === 0) ? n : (f = i || t, r += !u - !i, "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    };
    i.parseXML = function (t) {
        var r, u;
        if (!t || typeof t != "string") return null;
        try {
            n.DOMParser ? (u = new DOMParser, r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t))
        } catch (f) {
            r = undefined
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
    };
    var nt, y, ho = /#.*$/, hf = /([?&])_=[^&]*/, co = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, lo = /^(?:GET|HEAD)$/,
        ao = /^\/\//, cf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lf = {}, bi = {},
        af = "*/".concat("*");
    try {
        y = location.href
    } catch (ts) {
        y = u.createElement("a");
        y.href = "";
        y = y.href
    }
    nt = cf.exec(y.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: y,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": af,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": i.parseJSON, "text xml": i.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (n, t) {
            return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
        },
        ajaxPrefilter: vf(lf),
        ajaxTransport: vf(bi),
        ajax: function (n, t) {
            function w(n, t, s, h) {
                var v, it, nt, y, w, c = t;
                e !== 2 && (e = 2, k && clearTimeout(k), l = undefined, b = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && n < 300 || n === 304, s && (y = vo(r, u, s)), y = yo(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), n === 204 || r.type === "HEAD" ? c = "nocontent" : n === 304 ? c = "notmodified" : (c = y.state, it = y.data, nt = y.error, v = !nt)) : (nt = c, (n || !c) && (c = "error", n < 0 && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? g.resolveWith(o, [it, c, u]) : g.rejectWith(o, [u, c, nt]), u.statusCode(p), p = undefined, a && d.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : nt]), tt.fireWith(o, [u, c]), a && (d.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
            }

            typeof n == "object" && (t = n, n = undefined);
            t = t || {};
            var s, c, f, b, k, a, l, v, r = i.ajaxSetup({}, t), o = r.context || r,
                d = r.context && (o.nodeType || o.jquery) ? i(o) : i.event, g = i.Deferred(),
                tt = i.Callbacks("once memory"), p = r.statusCode || {}, it = {}, rt = {}, e = 0, ut = "canceled", u = {
                    readyState: 0, getResponseHeader: function (n) {
                        var t;
                        if (e === 2) {
                            if (!v) for (v = {}; t = co.exec(b);) v[t[1].toLowerCase()] = t[2];
                            t = v[n.toLowerCase()]
                        }
                        return t == null ? null : t
                    }, getAllResponseHeaders: function () {
                        return e === 2 ? b : null
                    }, setRequestHeader: function (n, t) {
                        var i = n.toLowerCase();
                        return e || (n = rt[i] = rt[i] || n, it[n] = t), this
                    }, overrideMimeType: function (n) {
                        return e || (r.mimeType = n), this
                    }, statusCode: function (n) {
                        var t;
                        if (n) if (e < 2) for (t in n) p[t] = [p[t], n[t]]; else u.always(n[u.status]);
                        return this
                    }, abort: function (n) {
                        var t = n || ut;
                        return l && l.abort(t), w(0, t), this
                    }
                };
            if (g.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || y) + "").replace(ho, "").replace(ao, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""], r.crossDomain == null && (s = cf.exec(r.url.toLowerCase()), r.crossDomain = !!(s && (s[1] !== nt[1] || s[2] !== nt[2] || (s[3] || (s[1] === "http:" ? "80" : "443")) !== (nt[3] || (nt[1] === "http:" ? "80" : "443"))))), r.data && r.processData && typeof r.data != "string" && (r.data = i.param(r.data, r.traditional)), yf(lf, r, t, u), e === 2) return u;
            a = r.global;
            a && i.active++ == 0 && i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !lo.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (wi.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = hf.test(f) ? f.replace(hf, "$1_=" + pi++) : f + (wi.test(f) ? "&" : "?") + "_=" + pi++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
            (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + af + "; q=0.01" : "") : r.accepts["*"]);
            for (c in r.headers) u.setRequestHeader(c, r.headers[c]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || e === 2)) return u.abort();
            ut = "abort";
            for (c in {success: 1, error: 1, complete: 1}) u[c](r[c]);
            if (l = yf(bi, r, t, u), l) {
                u.readyState = 1;
                a && d.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (k = setTimeout(function () {
                    u.abort("timeout")
                }, r.timeout));
                try {
                    e = 1;
                    l.send(it, w)
                } catch (ft) {
                    if (e < 2) w(-1, ft); else throw ft;
                }
            } else w(-1, "No Transport");
            return u
        },
        getJSON: function (n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function (n, t) {
            return i.get(n, undefined, t, "script")
        }
    });
    i.each(["get", "post"], function (n, t) {
        i[t] = function (n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = undefined), i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    });
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n)
        }
    });
    i._evalUrl = function (n) {
        return i.ajax({url: n, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    };
    i.fn.extend({
        wrapAll: function (n) {
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function () {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        }, wrapInner: function (n) {
            return i.isFunction(n) ? this.each(function (t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = i(this), r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        }, wrap: function (n) {
            var t = i.isFunction(n);
            return this.each(function (r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function (n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && (n.style && n.style.display || i.css(n, "display")) === "none"
    };
    i.expr.filters.visible = function (n) {
        return !i.expr.filters.hidden(n)
    };
    var po = /%20/g, wo = /\[\]$/, pf = /\r?\n/g, bo = /^(?:submit|button|image|reset|file)$/i,
        ko = /^(?:input|select|textarea|keygen)/i;
    i.param = function (n, t) {
        var r, u = [], f = function (n, t) {
            t = i.isFunction(t) ? t() : t == null ? "" : t;
            u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
            f(this.name, this.value)
        }); else for (r in n) di(r, n[r], t, f);
        return u.join("&").replace(po, "+")
    };
    i.fn.extend({
        serialize: function () {
            return i.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function () {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ko.test(this.nodeName) && !bo.test(n) && (this.checked || !oi.test(n))
            }).map(function (n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                    return {name: t.name, value: n.replace(pf, "\r\n")}
                }) : {name: t.name, value: r.replace(pf, "\r\n")}
            }).get()
        }
    });
    i.ajaxSettings.xhr = n.ActiveXObject !== undefined ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && wf() || ns()
    } : wf;
    var go = 0, gt = {}, ht = i.ajaxSettings.xhr();
    if (n.ActiveXObject) i(n).on("unload", function () {
        for (var n in gt) gt[n](undefined, !0)
    });
    return r.cors = !!ht && "withCredentials" in ht, ht = r.ajax = !!ht, ht && i.ajaxTransport(function (n) {
        if (!n.crossDomain || r.cors) {
            var t;
            return {
                send: function (r, u) {
                    var e, f = n.xhr(), o = ++go;
                    if (f.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields) for (e in n.xhrFields) f[e] = n.xhrFields[e];
                    n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
                    n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (e in r) r[e] !== undefined && f.setRequestHeader(e, r[e] + "");
                    f.send(n.hasContent && n.data || null);
                    t = function (r, e) {
                        var s, c, h;
                        if (t && (e || f.readyState === 4)) if (delete gt[o], t = undefined, f.onreadystatechange = i.noop, e) f.readyState !== 4 && f.abort(); else {
                            h = {};
                            s = f.status;
                            typeof f.responseText == "string" && (h.text = f.responseText);
                            try {
                                c = f.statusText
                            } catch (l) {
                                c = ""
                            }
                            s || !n.isLocal || n.crossDomain ? s === 1223 && (s = 204) : s = h.text ? 200 : 404
                        }
                        h && u(s, c, h, f.getAllResponseHeaders())
                    };
                    n.async ? f.readyState === 4 ? setTimeout(t) : f.onreadystatechange = gt[o] = t : t()
                }, abort: function () {
                    t && t(undefined, !0)
                }
            }
        }
    }), i.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function (n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET", n.global = !1)
    }), i.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
            var t, r = u.head || i("head")[0] || u.documentElement;
            return {
                send: function (i, f) {
                    t = u.createElement("script");
                    t.async = !0;
                    n.scriptCharset && (t.charset = n.scriptCharset);
                    t.src = n.url;
                    t.onload = t.onreadystatechange = function (n, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || f(200, "success"))
                    };
                    r.insertBefore(t, r.firstChild)
                }, abort: function () {
                    if (t) t.onload(undefined, !0)
                }
            }
        }
    }), gi = [], ni = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var n = gi.pop() || i.expando + "_" + pi++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function (t, r, u) {
        var f, o, e,
            s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
        if (s || t.dataTypes[0] === "jsonp") return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (wi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function () {
            return e || i.error(f + " was not called"), e[0]
        }, t.dataTypes[0] = "json", o = n[f], n[f] = function () {
            e = arguments
        }, u.always(function () {
            n[f] = o;
            t[f] && (t.jsonpCallback = r.jsonpCallback, gi.push(f));
            e && i.isFunction(o) && o(e[0]);
            e = o = undefined
        }), "script"
    }), i.parseHTML = function (n, t, r) {
        if (!n || typeof n != "string") return null;
        typeof t == "boolean" && (r = t, t = !1);
        t = t || u;
        var f = er.exec(n), e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
    }, nr = i.fn.load, i.fn.load = function (n, t, r) {
        if (typeof n != "string" && nr) return nr.apply(this, arguments);
        var u, o, s, f = this, e = n.indexOf(" ");
        return e >= 0 && (u = n.slice(e, n.length), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = undefined) : t && typeof t == "object" && (s = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: t
        }).done(function (n) {
            o = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).complete(r && function (n, t) {
            f.each(r, o || [n.responseText, t, n])
        }), this
    }, i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    }, tr = n.document.documentElement, i.offset = {
        setOffset: function (n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"), a = i(n), f = {};
            l === "static" && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = (l === "absolute" || l === "fixed") && i.inArray("auto", [s, c]) > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            t.top != null && (f.top = t.top - u.top + h);
            t.left != null && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function (n) {
            if (arguments.length) return n === undefined ? this : this.each(function (t) {
                i.offset.setOffset(this, n, t)
            });
            var t, f, u = {top: 0, left: 0}, r = this[0], e = r && r.ownerDocument;
            if (e) return (t = e.documentElement, !i.contains(t, r)) ? u : (typeof r.getBoundingClientRect !== o && (u = r.getBoundingClientRect()), f = bf(e), {
                top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            })
        }, position: function () {
            if (this[0]) {
                var n, r, t = {top: 0, left: 0}, u = this[0];
                return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var n = this.offsetParent || tr; n && !i.nodeName(n, "html") && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || tr
            })
        }
    }), i.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (n, t) {
        var r = /Y/.test(t);
        i.fn[n] = function (u) {
            return b(this, function (n, u, f) {
                var e = bf(n);
                if (f === undefined) return e ? t in e ? e[t] : e.document.documentElement[u] : n[u];
                e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f
            }, n, u, arguments.length, null)
        }
    }), i.each(["top", "left"], function (n, t) {
        i.cssHooks[t] = vu(r.pixelPosition, function (n, r) {
            if (r) return r = d(n, t), yt.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({Height: "height", Width: "width"}, function (n, t) {
        i.each({padding: "inner" + n, content: t, "": "outer" + n}, function (r, u) {
            i.fn[u] = function (u, f) {
                var e = arguments.length && (r || typeof u != "boolean"),
                    o = r || (u === !0 || f === !0 ? "margin" : "border");
                return b(this, function (t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : t.nodeType === 9 ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : u === undefined ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : undefined, e, null)
            }
        })
    }), i.fn.size = function () {
        return this.length
    }, i.fn.andSelf = i.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function () {
        return i
    }), kf = n.jQuery, df = n.$, i.noConflict = function (t) {
        return n.$ === i && (n.$ = df), t && n.jQuery === i && (n.jQuery = kf), i
    }, typeof t === o && (n.jQuery = n.$ = i), i
}), function (n, t) {
    function i(t, i) {
        var u, f, e, o = t.nodeName.toLowerCase();
        return "area" === o ? (u = t.parentNode, f = u.name, !t.href || !f || u.nodeName.toLowerCase() !== "map") ? !1 : (e = n("img[usemap=#" + f + "]")[0], !!e && r(e)) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && r(t)
    }

    function r(t) {
        return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function () {
            return n.css(this, "visibility") === "hidden"
        }).length
    }

    var u = 0, f = /^ui-id-\d+$/;
    n.ui = n.ui || {};
    n.extend(n.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    n.fn.extend({
        focus: function (t) {
            return function (i, r) {
                return typeof i == "number" ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        n(t).focus();
                        r && r.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(n.fn.focus), scrollParent: function () {
            var t;
            return t = n.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(n.css(this, "position")) && /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? n(document) : t
        }, zIndex: function (i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length) for (var r = n(this[0]), u, f; r.length && r[0] !== document;) {
                if (u = r.css("position"), (u === "absolute" || u === "relative" || u === "fixed") && (f = parseInt(r.css("zIndex"), 10), !isNaN(f) && f !== 0)) return f;
                r = r.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++u)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                f.test(this.id) && n(this).removeAttr("id")
            })
        }
    });
    n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function (t) {
            return function (i) {
                return !!n.data(i, t)
            }
        }) : function (t, i, r) {
            return !!n.data(t, r[3])
        }, focusable: function (t) {
            return i(t, !isNaN(n.attr(t, "tabindex")))
        }, tabbable: function (t) {
            var r = n.attr(t, "tabindex"), u = isNaN(r);
            return (u || r >= 0) && i(t, !u)
        }
    });
    n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function (i, r) {
        function e(t, i, r, u) {
            return n.each(o, function () {
                i -= parseFloat(n.css(t, "padding" + this)) || 0;
                r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
                u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
            }), i
        }

        var o = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], u = r.toLowerCase(), f = {
            innerWidth: n.fn.innerWidth,
            innerHeight: n.fn.innerHeight,
            outerWidth: n.fn.outerWidth,
            outerHeight: n.fn.outerHeight
        };
        n.fn["inner" + r] = function (i) {
            return i === t ? f["inner" + r].call(this) : this.each(function () {
                n(this).css(u, e(this, i) + "px")
            })
        };
        n.fn["outer" + r] = function (t, i) {
            return typeof t != "number" ? f["outer" + r].call(this, t) : this.each(function () {
                n(this).css(u, e(this, t, !0, i) + "px")
            })
        }
    });
    n.fn.addBack || (n.fn.addBack = function (n) {
        return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
    });
    n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
        }
    }(n.fn.removeData));
    n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    n.support.selectstart = "onselectstart" in document.createElement("div");
    n.fn.extend({
        disableSelection: function () {
            return this.bind((n.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (n) {
                n.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    });
    n.extend(n.ui, {
        plugin: {
            add: function (t, i, r) {
                var u, f = n.ui[t].prototype;
                for (u in r) f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]])
            }, call: function (n, t, i) {
                var r, u = n.plugins[t];
                if (u && n.element[0].parentNode && n.element[0].parentNode.nodeType !== 11) for (r = 0; r < u.length; r++) n.options[u[r][0]] && u[r][1].apply(n.element, i)
            }
        }, hasScroll: function (t, i) {
            if (n(t).css("overflow") === "hidden") return !1;
            var r = i && i === "left" ? "scrollLeft" : "scrollTop", u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
        }
    })
}(jQuery), function (n, t) {
    var r = 0, i = Array.prototype.slice, u = n.cleanData;
    n.cleanData = function (t) {
        for (var i = 0, r; (r = t[i]) != null; i++) try {
            n(r).triggerHandler("remove")
        } catch (f) {
        }
        u(t)
    };
    n.widget = function (t, i, r) {
        var s, f, u, o, h = {}, e = t.split(".")[0];
        t = t.split(".")[1];
        s = e + "-" + t;
        r || (r = i, i = n.Widget);
        n.expr[":"][s.toLowerCase()] = function (t) {
            return !!n.data(t, s)
        };
        n[e] = n[e] || {};
        f = n[e][t];
        u = n[e][t] = function (n, t) {
            if (!this._createWidget) return new u(n, t);
            arguments.length && this._createWidget(n, t)
        };
        n.extend(u, f, {version: r.version, _proto: n.extend({}, r), _childConstructors: []});
        o = new i;
        o.options = n.widget.extend({}, o.options);
        n.each(r, function (t, r) {
            if (!n.isFunction(r)) {
                h[t] = r;
                return
            }
            h[t] = function () {
                var n = function () {
                    return i.prototype[t].apply(this, arguments)
                }, u = function (n) {
                    return i.prototype[t].apply(this, n)
                };
                return function () {
                    var i = this._super, f = this._superApply, t;
                    return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t
                }
            }()
        });
        u.prototype = n.widget.extend(o, {widgetEventPrefix: f ? o.widgetEventPrefix || t : t}, h, {
            constructor: u,
            namespace: e,
            widgetName: t,
            widgetFullName: s
        });
        f ? (n.each(f._childConstructors, function (t, i) {
            var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto)
        }), delete f._childConstructors) : i._childConstructors.push(u);
        n.widget.bridge(t, u)
    };
    n.widget.extend = function (r) {
        for (var o = i.call(arguments, 1), e = 0, s = o.length, u, f; e < s; e++) for (u in o[e]) f = o[e][u], o[e].hasOwnProperty(u) && f !== t && (r[u] = n.isPlainObject(f) ? n.isPlainObject(r[u]) ? n.widget.extend({}, r[u], f) : n.widget.extend({}, f) : f);
        return r
    };
    n.widget.bridge = function (r, u) {
        var f = u.prototype.widgetFullName || r;
        n.fn[r] = function (e) {
            var h = typeof e == "string", o = i.call(arguments, 1), s = this;
            return e = !h && o.length ? n.widget.extend.apply(null, [e].concat(o)) : e, h ? this.each(function () {
                var i, u = n.data(this, f);
                return u ? !n.isFunction(u[e]) || e.charAt(0) === "_" ? n.error("no such method '" + e + "' for " + r + " widget instance") : (i = u[e].apply(u, o), i !== u && i !== t ? (s = i && i.jquery ? s.pushStack(i.get()) : i, !1) : void 0) : n.error("cannot call methods on " + r + " prior to initialization; attempted to call method '" + e + "'")
            }) : this.each(function () {
                var t = n.data(this, f);
                t ? t.option(e || {})._init() : n.data(this, f, new u(e, this))
            }), s
        }
    };
    n.Widget = function () {
    };
    n.Widget._childConstructors = [];
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (t, i) {
            i = n(i || this.defaultElement || this)[0];
            this.element = n(i);
            this.uuid = r++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
            this.bindings = n();
            this.hoverable = n();
            this.focusable = n();
            i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (n) {
                    n.target === i && this.destroy()
                }
            }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: n.noop,
        _getCreateEventData: n.noop,
        _create: n.noop,
        _init: n.noop,
        destroy: function () {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: n.noop,
        widget: function () {
            return this.element
        },
        option: function (i, r) {
            var o = i, u, f, e;
            if (arguments.length === 0) return n.widget.extend({}, this.options);
            if (typeof i == "string") if (o = {}, u = i.split("."), i = u.shift(), u.length) {
                for (f = o[i] = n.widget.extend({}, this.options[i]), e = 0; e < u.length - 1; e++) f[u[e]] = f[u[e]] || {}, f = f[u[e]];
                if (i = u.pop(), arguments.length === 1) return f[i] === t ? null : f[i];
                f[i] = r
            } else {
                if (arguments.length === 1) return this.options[i] === t ? null : this.options[i];
                o[i] = r
            }
            return this._setOptions(o), this
        },
        _setOptions: function (n) {
            var t;
            for (t in n) this._setOption(t, n[t]);
            return this
        },
        _setOption: function (n, t) {
            return this.options[n] = t, n === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (t, i, r) {
            var f, u = this;
            typeof t != "boolean" && (r = i, i = t, t = !1);
            r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
            n.each(r, function (r, e) {
                function o() {
                    if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return (typeof e == "string" ? u[e] : e).apply(u, arguments)
                }

                typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                var s = r.match(/^(\w+)\s*(.*)$/), h = s[1] + u.eventNamespace, c = s[2];
                c ? f.delegate(c, h, o) : i.bind(h, o)
            })
        },
        _off: function (n, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            n.unbind(t).undelegate(t)
        },
        _delay: function (n, t) {
            function r() {
                return (typeof n == "string" ? i[n] : n).apply(i, arguments)
            }

            var i = this;
            return setTimeout(r, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t);
            this._on(t, {
                mouseenter: function (t) {
                    n(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (t) {
                    n(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t);
            this._on(t, {
                focusin: function (t) {
                    n(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function (t) {
                    n(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent, f) for (u in f) u in i || (i[u] = f[u]);
            return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
        }
    };
    n.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
        n.Widget.prototype["_" + t] = function (r, u, f) {
            typeof u == "string" && (u = {effect: u});
            var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
            u = u || {};
            typeof u == "number" && (u = {duration: u});
            o = !n.isEmptyObject(u);
            u.complete = f;
            u.delay && r.delay(u.delay);
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function (i) {
                n(this)[t]();
                f && f.call(r[0]);
                i()
            })
        }
    })
}(jQuery), function (n) {
    var t = !1;
    n(document).mouseup(function () {
        t = !1
    });
    n.widget("ui.mouse", {
        version: "1.10.4",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (n) {
                return t._mouseDown(n)
            }).bind("click." + this.widgetName, function (i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent")) return n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
            });
            this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i);
                this._mouseDownEvent = i;
                var r = this, u = i.which === 1,
                    f = typeof this.options.cancel == "string" && i.target.nodeName ? n(i.target).closest(this.options.cancel).length : !1;
                return !u || f || !this._mouseCapture(i) ? !0 : (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    r.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted)) ? (i.preventDefault(), !0) : (!0 === n.data(i.target, this.widgetName + ".preventClickEvent") && n.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (n) {
                    return r._mouseMove(n)
                }, this._mouseUpDelegate = function (n) {
                    return r._mouseUp(n)
                }, n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)
            }
        },
        _mouseMove: function (t) {
            return n.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery), function (n, t) {
    function a(n, t, i) {
        return [parseFloat(n[0]) * (l.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (l.test(n[1]) ? i / 100 : 1)]
    }

    function u(t, i) {
        return parseInt(n.css(t, i), 10) || 0
    }

    function y(t) {
        var i = t[0];
        return i.nodeType === 9 ? {
            width: t.width(),
            height: t.height(),
            offset: {top: 0, left: 0}
        } : n.isWindow(i) ? {
            width: t.width(),
            height: t.height(),
            offset: {top: t.scrollTop(), left: t.scrollLeft()}
        } : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }

    n.ui = n.ui || {};
    var f, r = Math.max, i = Math.abs, e = Math.round, o = /left|center|right/, s = /top|center|bottom/,
        h = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, l = /%$/, v = n.fn.position;
    n.position = {
        scrollbarWidth: function () {
            if (f !== t) return f;
            var u, r,
                i = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
                e = i.children()[0];
            return n("body").append(i), u = e.offsetWidth, i.css("overflow", "scroll"), r = e.offsetWidth, u === r && (r = i[0].clientWidth), i.remove(), f = u - r
        }, getScrollInfo: function (t) {
            var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                u = i === "scroll" || i === "auto" && t.width < t.element[0].scrollWidth,
                f = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
            return {width: f ? n.position.scrollbarWidth() : 0, height: u ? n.position.scrollbarWidth() : 0}
        }, getWithinInfo: function (t) {
            var i = n(t || window), r = n.isWindow(i[0]), u = !!i[0] && i[0].nodeType === 9;
            return {
                element: i,
                isWindow: r,
                isDocument: u,
                offset: i.offset() || {left: 0, top: 0},
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: r ? i.width() : i.outerWidth(),
                height: r ? i.height() : i.outerHeight()
            }
        }
    };
    n.fn.position = function (t) {
        if (!t || !t.of) return v.apply(this, arguments);
        t = n.extend({}, t);
        var b, f, l, w, p, d, g = n(t.of), tt = n.position.getWithinInfo(t.within), it = n.position.getScrollInfo(tt),
            k = (t.collision || "flip").split(" "), nt = {};
        return d = y(g), g[0].preventDefault && (t.at = "left top"), f = d.width, l = d.height, w = d.offset, p = n.extend({}, w), n.each(["my", "at"], function () {
            var n = (t[this] || "").split(" "), i, r;
            n.length === 1 && (n = o.test(n[0]) ? n.concat(["center"]) : s.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
            n[0] = o.test(n[0]) ? n[0] : "center";
            n[1] = s.test(n[1]) ? n[1] : "center";
            i = h.exec(n[0]);
            r = h.exec(n[1]);
            nt[this] = [i ? i[0] : 0, r ? r[0] : 0];
            t[this] = [c.exec(n[0])[0], c.exec(n[1])[0]]
        }), k.length === 1 && (k[1] = k[0]), t.at[0] === "right" ? p.left += f : t.at[0] === "center" && (p.left += f / 2), t.at[1] === "bottom" ? p.top += l : t.at[1] === "center" && (p.top += l / 2), b = a(nt.at, f, l), p.left += b[0], p.top += b[1], this.each(function () {
            var y, d, s = n(this), h = s.outerWidth(), c = s.outerHeight(), rt = u(this, "marginLeft"),
                ut = u(this, "marginTop"), ft = h + rt + u(this, "marginRight") + it.width,
                et = c + ut + u(this, "marginBottom") + it.height, o = n.extend({}, p),
                v = a(nt.my, s.outerWidth(), s.outerHeight());
            t.my[0] === "right" ? o.left -= h : t.my[0] === "center" && (o.left -= h / 2);
            t.my[1] === "bottom" ? o.top -= c : t.my[1] === "center" && (o.top -= c / 2);
            o.left += v[0];
            o.top += v[1];
            n.support.offsetFractions || (o.left = e(o.left), o.top = e(o.top));
            y = {marginLeft: rt, marginTop: ut};
            n.each(["left", "top"], function (i, r) {
                n.ui.position[k[i]] && n.ui.position[k[i]][r](o, {
                    targetWidth: f,
                    targetHeight: l,
                    elemWidth: h,
                    elemHeight: c,
                    collisionPosition: y,
                    collisionWidth: ft,
                    collisionHeight: et,
                    offset: [b[0] + v[0], b[1] + v[1]],
                    my: t.my,
                    at: t.at,
                    within: tt,
                    elem: s
                })
            });
            t.using && (d = function (n) {
                var u = w.left - o.left, v = u + f - h, e = w.top - o.top, y = e + l - c, a = {
                    target: {element: g, left: w.left, top: w.top, width: f, height: l},
                    element: {element: s, left: o.left, top: o.top, width: h, height: c},
                    horizontal: v < 0 ? "left" : u > 0 ? "right" : "center",
                    vertical: y < 0 ? "top" : e > 0 ? "bottom" : "middle"
                };
                f < h && i(u + v) < f && (a.horizontal = "center");
                l < c && i(e + y) < l && (a.vertical = "middle");
                a.important = r(i(u), i(v)) > r(i(e), i(y)) ? "horizontal" : "vertical";
                t.using.call(this, n, a)
            });
            s.offset(n.extend(o, {using: d}))
        })
    };
    n.ui.position = {
        fit: {
            left: function (n, t) {
                var e = t.within, u = e.isWindow ? e.scrollLeft : e.offset.left, o = e.width,
                    s = n.left - t.collisionPosition.marginLeft, i = u - s, f = s + t.collisionWidth - o - u, h;
                t.collisionWidth > o ? i > 0 && f <= 0 ? (h = n.left + i + t.collisionWidth - o - u, n.left += i - h) : n.left = f > 0 && i <= 0 ? u : i > f ? u + o - t.collisionWidth : u : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = r(n.left - s, n.left)
            }, top: function (n, t) {
                var o = t.within, u = o.isWindow ? o.scrollTop : o.offset.top, e = t.within.height,
                    s = n.top - t.collisionPosition.marginTop, i = u - s, f = s + t.collisionHeight - e - u, h;
                t.collisionHeight > e ? i > 0 && f <= 0 ? (h = n.top + i + t.collisionHeight - e - u, n.top += i - h) : n.top = f > 0 && i <= 0 ? u : i > f ? u + e - t.collisionHeight : u : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = r(n.top - s, n.top)
            }
        }, flip: {
            left: function (n, t) {
                var r = t.within, y = r.offset.left + r.scrollLeft, c = r.width,
                    o = r.isWindow ? r.scrollLeft : r.offset.left, l = n.left - t.collisionPosition.marginLeft,
                    a = l - o, v = l + t.collisionWidth - c - o,
                    u = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                    f = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
                    e = -2 * t.offset[0], s, h;
                a < 0 ? (s = n.left + u + f + e + t.collisionWidth - c - y, (s < 0 || s < i(a)) && (n.left += u + f + e)) : v > 0 && (h = n.left - t.collisionPosition.marginLeft + u + f + e - o, (h > 0 || i(h) < v) && (n.left += u + f + e))
            }, top: function (n, t) {
                var r = t.within, y = r.offset.top + r.scrollTop, a = r.height,
                    o = r.isWindow ? r.scrollTop : r.offset.top, v = n.top - t.collisionPosition.marginTop, s = v - o,
                    h = v + t.collisionHeight - a - o, p = t.my[1] === "top",
                    u = p ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                    f = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                    e = -2 * t.offset[1], c, l;
                s < 0 ? (l = n.top + u + f + e + t.collisionHeight - a - y, n.top + u + f + e > s && (l < 0 || l < i(s)) && (n.top += u + f + e)) : h > 0 && (c = n.top - t.collisionPosition.marginTop + u + f + e - o, n.top + u + f + e > h && (c > 0 || i(c) < h) && (n.top += u + f + e))
            }
        }, flipfit: {
            left: function () {
                n.ui.position.flip.left.apply(this, arguments);
                n.ui.position.fit.left.apply(this, arguments)
            }, top: function () {
                n.ui.position.flip.top.apply(this, arguments);
                n.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, function () {
        var t, i, r, u, f, e = document.getElementsByTagName("body")[0], o = document.createElement("div");
        t = document.createElement(e ? "div" : "body");
        r = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"};
        e && n.extend(r, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (f in r) t.style[f] = r[f];
        t.appendChild(o);
        i = e || document.documentElement;
        i.insertBefore(t, i.firstChild);
        o.style.cssText = "position: absolute; left: 10.7432222px;";
        u = n(o).offset().left;
        n.support.offsetFractions = u > 10 && u < 11;
        t.innerHTML = "";
        i.removeChild(t)
    }()
}(jQuery), function (n) {
    var r = 0, t = {}, i = {};
    t.height = t.paddingTop = t.paddingBottom = t.borderTopWidth = t.borderBottomWidth = "hide";
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show";
    n.widget("ui.accordion", {
        version: "1.10.4",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        _create: function () {
            var t = this.options;
            this.prevShow = this.prevHide = n();
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
            t.collapsible || t.active !== !1 && t.active != null || (t.active = 0);
            this._processPanels();
            t.active < 0 && (t.active += this.headers.length);
            this._refresh()
        },
        _getCreateEventData: function () {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : n(),
                content: this.active.length ? this.active.next() : n()
            }
        },
        _createIcons: function () {
            var t = this.options.icons;
            t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var n;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            });
            this._destroyIcons();
            n = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            });
            this.options.heightStyle !== "content" && n.css("height", "")
        },
        _setOption: function (n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            n === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t));
            this._super(n, t);
            n !== "collapsible" || t || this.options.active !== !1 || this._activate(0);
            n === "icons" && (this._destroyIcons(), t && this._createIcons());
            n === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)
        },
        _keydown: function (t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = n.ui.keyCode, u = this.headers.length, f = this.headers.index(t.target), r = !1;
                switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        r = this.headers[(f + 1) % u];
                        break;
                    case i.LEFT:
                    case i.UP:
                        r = this.headers[(f - 1 + u) % u];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t);
                        break;
                    case i.HOME:
                        r = this.headers[0];
                        break;
                    case i.END:
                        r = this.headers[u - 1]
                }
                r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), r.focus(), t.preventDefault())
            }
        },
        _panelKeyDown: function (t) {
            t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus()
        },
        refresh: function () {
            var t = this.options;
            this._processPanels();
            (t.active !== !1 || t.collapsible !== !0) && this.headers.length ? t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active) : (t.active = !1, this.active = n());
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function () {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function () {
            var t, i = this.options, u = i.heightStyle, e = this.element.parent(),
                f = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++r);
            this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
            this.active.next().addClass("ui-accordion-content-active").show();
            this.headers.attr("role", "tab").each(function (t) {
                var i = n(this), r = i.attr("id"), e = i.next(), u = e.attr("id");
                r || (r = f + "-header-" + t, i.attr("id", r));
                u || (u = f + "-panel-" + t, e.attr("id", u));
                i.attr("aria-controls", u);
                e.attr("aria-labelledby", r)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({"aria-hidden": "true"}).hide();
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(i.event);
            u === "fill" ? (t = e.height(), this.element.siblings(":visible").each(function () {
                var i = n(this), r = i.css("position");
                r !== "absolute" && r !== "fixed" && (t -= i.outerHeight(!0))
            }), this.headers.each(function () {
                t -= n(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : u === "auto" && (t = 0, this.headers.next().each(function () {
                t = Math.max(t, n(this).css("height", "").height())
            }).height(t))
        },
        _activate: function (t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: n.noop
            }))
        },
        _findActive: function (t) {
            return typeof t == "number" ? this.headers.eq(t) : n()
        },
        _setupEvents: function (t) {
            var i = {keydown: "_keydown"};
            t && n.each(t.split(" "), function (n, t) {
                i[t] = "_eventHandler"
            });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, i);
            this._on(this.headers.next(), {keydown: "_panelKeyDown"});
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function (t) {
            var i = this.options, u = this.active, r = n(t.currentTarget), f = r[0] === u[0], e = f && i.collapsible,
                s = e ? n() : r.next(), h = u.next(),
                o = {oldHeader: u, oldPanel: h, newHeader: e ? n() : r, newPanel: s};
            (t.preventDefault(), (!f || i.collapsible) && this._trigger("beforeActivate", t, o) !== !1) && (i.active = e ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(o), u.removeClass("ui-accordion-header-active ui-state-active"), i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), r.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function (t) {
            var r = t.newPanel, i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = r;
            this.prevHide = i;
            this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t));
            i.attr({"aria-hidden": "true"});
            i.prev().attr("aria-selected", "false");
            r.length && i.length ? i.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : r.length && this.headers.filter(function () {
                return n(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1);
            r.attr("aria-hidden", "false").prev().attr({"aria-selected": "true", tabIndex: 0, "aria-expanded": "true"})
        },
        _animate: function (n, r, u) {
            var l, f, e, a = this, h = 0, v = n.length && (!r.length || n.index() < r.index()),
                s = this.options.animate || {}, o = v && s.down || s, c = function () {
                    a._toggleComplete(u)
                };
            if (typeof o == "number" && (e = o), typeof o == "string" && (f = o), f = f || o.easing || s.easing, e = e || o.duration || s.duration, !r.length) return n.animate(i, e, f, c);
            if (!n.length) return r.animate(t, e, f, c);
            l = n.show().outerHeight();
            r.animate(t, {
                duration: e, easing: f, step: function (n, t) {
                    t.now = Math.round(n)
                }
            });
            n.hide().animate(i, {
                duration: e, easing: f, complete: c, step: function (n, t) {
                    t.now = Math.round(n);
                    t.prop !== "height" ? h += t.now : a.options.heightStyle !== "content" && (t.now = Math.round(l - r.outerHeight() - h), h = 0)
                }
            })
        },
        _toggleComplete: function (n) {
            var t = n.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
            t.length && (t.parent()[0].className = t.parent()[0].className);
            this._trigger("activate", null, n)
        }
    })
}(jQuery), function (n) {
    n.widget("ui.autocomplete", {
        version: "1.10.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var t, i, r, u = this.element[0].nodeName.toLowerCase(), f = u === "textarea", e = u === "input";
            this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable");
            this.valueMethod = this.element[f || e ? "val" : "text"];
            this.isNewMenu = !0;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function (u) {
                    if (this.element.prop("readOnly")) {
                        t = !0;
                        r = !0;
                        i = !0;
                        return
                    }
                    t = !1;
                    r = !1;
                    i = !1;
                    var f = n.ui.keyCode;
                    switch (u.keyCode) {
                        case f.PAGE_UP:
                            t = !0;
                            this._move("previousPage", u);
                            break;
                        case f.PAGE_DOWN:
                            t = !0;
                            this._move("nextPage", u);
                            break;
                        case f.UP:
                            t = !0;
                            this._keyEvent("previous", u);
                            break;
                        case f.DOWN:
                            t = !0;
                            this._keyEvent("next", u);
                            break;
                        case f.ENTER:
                        case f.NUMPAD_ENTER:
                            this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
                            break;
                        case f.TAB:
                            this.menu.active && this.menu.select(u);
                            break;
                        case f.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(u), u.preventDefault());
                            break;
                        default:
                            i = !0;
                            this._searchTimeout(u)
                    }
                }, keypress: function (r) {
                    if (t) {
                        t = !1;
                        (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault();
                        return
                    }
                    if (!i) {
                        var u = n.ui.keyCode;
                        switch (r.keyCode) {
                            case u.PAGE_UP:
                                this._move("previousPage", r);
                                break;
                            case u.PAGE_DOWN:
                                this._move("nextPage", r);
                                break;
                            case u.UP:
                                this._keyEvent("previous", r);
                                break;
                            case u.DOWN:
                                this._keyEvent("next", r)
                        }
                    }
                }, input: function (n) {
                    if (r) {
                        r = !1;
                        n.preventDefault();
                        return
                    }
                    this._searchTimeout(n)
                }, focus: function () {
                    this.selectedItem = null;
                    this.previous = this._value()
                }, blur: function (n) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching);
                    this.close(n);
                    this._change(n)
                }
            });
            this._initSource();
            this.menu = n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu");
            this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    n(t.target).closest(".ui-menu-item").length || this._delay(function () {
                        var t = this;
                        this.document.one("mousedown", function (r) {
                            r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close()
                        })
                    })
                }, menufocus: function (t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) {
                        this.menu.blur();
                        this.document.one("mousemove", function () {
                            n(t.target).trigger(t.originalEvent)
                        });
                        return
                    }
                    var r = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {item: r}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                }, menuselect: function (n, t) {
                    var i = t.item.data("ui-autocomplete-item"), r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function () {
                        this.previous = r;
                        this.selectedItem = i
                    }));
                    !1 !== this._trigger("select", n, {item: i}) && this._value(i.value);
                    this.term = this._value();
                    this.close(n);
                    this.selectedItem = i
                }
            });
            this.liveRegion = n("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
            this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function (n, t) {
            this._super(n, t);
            n === "source" && this._initSource();
            n === "appendTo" && this.menu.element.appendTo(this._appendTo());
            n === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function () {
            var i, r, t = this;
            n.isArray(this.options.source) ? (i = this.options.source, this.source = function (t, r) {
                r(n.ui.autocomplete.filter(i, t.term))
            }) : typeof this.options.source == "string" ? (r = this.options.source, this.source = function (i, u) {
                t.xhr && t.xhr.abort();
                t.xhr = n.ajax({
                    url: r, data: i, dataType: "json", success: function (n) {
                        u(n)
                    }, error: function () {
                        u([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (n) {
            clearTimeout(this.searching);
            this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, n))
            }, this.options.delay)
        },
        search: function (n, t) {
            return (n = n != null ? n : this._value(), this.term = this._value(), n.length < this.options.minLength) ? this.close(t) : this._trigger("search", t) === !1 ? void 0 : this._search(n)
        },
        _search: function (n) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({term: n}, this._response())
        },
        _response: function () {
            var t = ++this.requestIndex;
            return n.proxy(function (n) {
                t === this.requestIndex && this.__response(n);
                this.pending--;
                this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (n) {
            n && (n = this._normalize(n));
            this._trigger("response", null, {content: n});
            !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close()
        },
        close: function (n) {
            this.cancelSearch = !0;
            this._close(n)
        },
        _close: function (n) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n))
        },
        _change: function (n) {
            this.previous !== this._value() && this._trigger("change", n, {item: this.selectedItem})
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : n.map(t, function (t) {
                return typeof t == "string" ? {label: t, value: t} : n.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function (t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t);
            this.isNewMenu = !0;
            this.menu.refresh();
            i.show();
            this._resizeMenu();
            i.position(n.extend({of: this.element}, this.options.position));
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var n = this.menu.element;
            n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (t, i) {
            var r = this;
            n.each(i, function (n, i) {
                r._renderItemData(t, i)
            })
        },
        _renderItemData: function (n, t) {
            return this._renderItem(n, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function (t, i) {
            return n("<li>").append(n("<a>").text(i.label)).appendTo(t)
        },
        _move: function (n, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n)) {
                this._value(this.term);
                this.menu.blur();
                return
            }
            this.menu[n](t)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (n, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
        }
    });
    n.extend(n.ui.autocomplete, {
        escapeRegex: function (n) {
            return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (t, i) {
            var r = new RegExp(n.ui.autocomplete.escapeRegex(i), "i");
            return n.grep(t, function (n) {
                return r.test(n.label || n.value || n)
            })
        }
    });
    n.widget("ui.autocomplete", n.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (n) {
                    return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (n) {
            var t;
            (this._superApply(arguments), this.options.disabled || this.cancelSearch) || (t = n && n.length ? this.options.messages.results(n.length) : this.options.messages.noResults, this.liveRegion.text(t))
        }
    })
}(jQuery), function (n) {
    var t, i = "ui-button ui-widget ui-state-default ui-corner-all",
        r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        f = function () {
            var t = n(this);
            setTimeout(function () {
                t.find(":ui-button").button("refresh")
            }, 1)
        }, u = function (t) {
            var i = t.name, r = t.form, u = n([]);
            return i && (i = i.replace(/'/g, "\\'"), u = r ? n(r).find("[name='" + i + "']") : n("[name='" + i + "']", t.ownerDocument).filter(function () {
                return !this.form
            })), u
        };
    n.widget("ui.button", {
        version: "1.10.4",
        defaultElement: "<button>",
        options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}},
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f);
            typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var e = this, r = this.options, o = this.type === "checkbox" || this.type === "radio",
                s = o ? "" : "ui-state-active";
            r.label === null && (r.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                r.disabled || this === t && n(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                r.disabled || n(this).removeClass(s)
            }).bind("click" + this.eventNamespace, function (n) {
                r.disabled && (n.preventDefault(), n.stopImmediatePropagation())
            });
            this._on({
                focus: function () {
                    this.buttonElement.addClass("ui-state-focus")
                }, blur: function () {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            });
            o && this.element.bind("change" + this.eventNamespace, function () {
                e.refresh()
            });
            this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (r.disabled) return !1
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (r.disabled) return !1;
                n(this).addClass("ui-state-active");
                e.buttonElement.attr("aria-pressed", "true");
                var t = e.element[0];
                u(t).not(t).map(function () {
                    return n(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                if (r.disabled) return !1;
                n(this).addClass("ui-state-active");
                t = this;
                e.document.one("mouseup", function () {
                    t = null
                })
            }).bind("mouseup" + this.eventNamespace, function () {
                if (r.disabled) return !1;
                n(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function (t) {
                if (r.disabled) return !1;
                (t.keyCode === n.ui.keyCode.SPACE || t.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                n(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === n.ui.keyCode.SPACE && n(this).click()
            }));
            this._setOption("disabled", r.disabled);
            this._resetButton()
        },
        _determineButtonType: function () {
            var n, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
            this.type === "checkbox" || this.type === "radio" ? (n = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(i + " ui-state-active " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (n, t) {
            if (this._super(n, t), n === "disabled") {
                this.element.prop("disabled", !!t);
                t && this.buttonElement.removeClass("ui-state-focus");
                return
            }
            this._resetButton()
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t);
            this.type === "radio" ? u(this.element[0]).each(function () {
                n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var i = this.buttonElement.removeClass(r),
                e = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
                t = this.options.icons, f = t.primary && t.secondary, u = [];
            t.primary || t.secondary ? (this.options.text && u.push("ui-button-text-icon" + (f ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (u.push(f ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || i.attr("title", n.trim(e)))) : u.push("ui-button-text-only");
            i.addClass(u.join(" "))
        }
    });
    n.widget("ui.buttonset", {
        version: "1.10.4",
        options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (n, t) {
            n === "disabled" && this.buttons.button("option", n, t);
            this._super(n, t)
        },
        refresh: function () {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function () {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery), function (n, t) {
    function f() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._datepickerShowing = !1;
        this._inDialog = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        n.extend(this._defaults, this.regional[""]);
        this.dpDiv = e(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
    }

    function e(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function () {
            n(this).removeClass("ui-state-hover");
            this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).removeClass("ui-datepicker-prev-hover");
            this.className.indexOf("ui-datepicker-next") !== -1 && n(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function () {
            n.datepicker._isDisabledDatepicker(u.inline ? t.parent()[0] : u.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && n(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function r(t, i) {
        n.extend(t, i);
        for (var r in i) i[r] == null && (t[r] = i[r]);
        return t
    }

    n.extend(n.ui, {datepicker: {version: "1.10.4"}});
    var i = "datepicker", u;
    n.extend(f.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (n) {
            return r(this._defaults, n || {}), this
        },
        _attachDatepicker: function (t, i) {
            var r, f, u;
            r = t.nodeName.toLowerCase();
            f = r === "div" || r === "span";
            t.id || (this.uuid += 1, t.id = "dp" + this.uuid);
            u = this._newInst(n(t), f);
            u.settings = n.extend({}, i || {});
            r === "input" ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
        },
        _newInst: function (t, i) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? e(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, r) {
            var u = n(t);
            (r.append = n([]), r.trigger = n([]), u.hasClass(this.markerClassName)) || (this._attachments(u, r), u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(r), n.data(t, i, r), r.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, i) {
            var u, r, f, e = this._get(i, "appendText"), o = this._get(i, "isRTL");
            i.append && i.append.remove();
            e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append));
            t.unbind("focus", this._showDatepicker);
            i.trigger && i.trigger.remove();
            u = this._get(i, "showOn");
            (u === "focus" || u === "both") && t.focus(this._showDatepicker);
            (u === "button" || u === "both") && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: r,
                title: r
            }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
                src: f,
                alt: r,
                title: r
            }) : r)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
                return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function (n) {
            if (this._get(n, "autoSize") && !n.inline) {
                var r, u, f, t, i = new Date(2009, 11, 20), e = this._get(n, "dateFormat");
                e.match(/[DM]/) && (r = function (n) {
                    for (u = 0, f = 0, t = 0; t < n.length; t++) n[t].length > u && (u = n[t].length, f = t);
                    return f
                }, i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
                n.input.attr("size", this._formatDate(n, i).length)
            }
        },
        _inlineDatepicker: function (t, r) {
            var u = n(t);
            u.hasClass(this.markerClassName) || (u.addClass(this.markerClassName).append(r.dpDiv), n.data(t, i, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, u, f, e, o) {
            var h, c, l, a, v, s = this._dialogInst;
            return s || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = n("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, n.data(this._dialogInput[0], i, s)), r(s.settings, e || {}), u = u && u.constructor === Date ? this._formatDate(s, u) : u, this._dialogInput.val(u), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, l = document.documentElement.clientHeight, a = document.documentElement.scrollLeft || document.body.scrollLeft, v = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + a, l / 2 - 150 + v]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = f, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], i, s), this
        },
        _destroyDatepicker: function (t) {
            var r, u = n(t), f = n.data(t, i);
            u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), n.removeData(t, i), r === "input" ? (f.append.remove(), f.trigger.remove(), u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r === "div" || r === "span") && u.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function (t) {
            var r, u, f = n(t), e = n.data(t, i);
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), r === "input" ? (t.disabled = !1, e.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : (r === "div" || r === "span") && (u = f.children("." + this._inlineClass), u.children().removeClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function (n) {
                return n === t ? null : n
            }))
        },
        _disableDatepicker: function (t) {
            var r, u, f = n(t), e = n.data(t, i);
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), r === "input" ? (t.disabled = !0, e.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : (r === "div" || r === "span") && (u = f.children("." + this._inlineClass), u.children().addClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function (n) {
                return n === t ? null : n
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function (n) {
            if (!n) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] === n) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return n.data(t, i)
            } catch (r) {
                throw"Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function (i, u, f) {
            var o, c, s, h, e = this._getInst(i);
            if (arguments.length === 2 && typeof u == "string") return u === "defaults" ? n.extend({}, n.datepicker._defaults) : e ? u === "all" ? n.extend({}, e.settings) : this._get(e, u) : null;
            o = u || {};
            typeof u == "string" && (o = {}, o[u] = f);
            e && (this._curInst === e && this._hideDatepicker(), c = this._getDateDatepicker(i, !0), s = this._getMinMaxDate(e, "min"), h = this._getMinMaxDate(e, "max"), r(e.settings, o), s !== null && o.dateFormat !== t && o.minDate === t && (e.settings.minDate = this._formatDate(e, s)), h !== null && o.dateFormat !== t && o.maxDate === t && (e.settings.maxDate = this._formatDate(e, h)), "disabled" in o && (o.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(n(i), e), this._autoSize(e), this._setDate(e, c), this._updateAlternate(e), this._updateDatepicker(e))
        },
        _changeDatepicker: function (n, t, i) {
            this._optionDatepicker(n, t, i)
        },
        _refreshDatepicker: function (n) {
            var t = this._getInst(n);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (n, t) {
            var i = this._getInst(n);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (n, t) {
            var i = this._getInst(n);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var u, e, f, i = n.datepicker._getInst(t.target), r = !0, o = i.dpDiv.is(".ui-datepicker-rtl");
            if (i._keyEvent = !0, n.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    n.datepicker._hideDatepicker();
                    r = !1;
                    break;
                case 13:
                    return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]), u = n.datepicker._get(i, "onSelect"), u ? (e = n.datepicker._formatDate(i), u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(), !1;
                case 27:
                    n.datepicker._hideDatepicker();
                    break;
                case 33:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 34:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else t.keyCode === 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var i, r, u = n.datepicker._getInst(t.target);
            if (n.datepicker._get(u, "constrainInput")) return i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !i || i.indexOf(r) > -1
        },
        _doKeyUp: function (t) {
            var r, i = n.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal) try {
                r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i))
            } catch (u) {
            }
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
                var i, o, s, u, f, e, h;
                (i = n.datepicker._getInst(t), n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])), o = n.datepicker._get(i, "beforeShow"), s = o ? o.apply(t, [t, i]) : {}, s !== !1) && (r(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), u = !1, n(t).parents().each(function () {
                    return u |= n(this).css("position") === "fixed", !u
                }), f = {
                    left: n.datepicker._pos[0],
                    top: n.datepicker._pos[1]
                }, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, u), i.dpDiv.css({
                    position: n.datepicker._inDialog && n.blockUI ? "static" : u ? "fixed" : "absolute",
                    display: "none",
                    left: f.left + "px",
                    top: f.top + "px"
                }), i.inline || (e = n.datepicker._get(i, "showAnim"), h = n.datepicker._get(i, "duration"), i.dpDiv.zIndex(n(t).zIndex() + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null), n.datepicker._shouldFocusInput(i) && i.input.focus(), n.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4;
            u = t;
            t.dpDiv.empty().append(this._generateHTML(t));
            this._attachHandlers(t);
            t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, r = this._getNumberOfMonths(t), f = r[1];
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            f > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", 17 * f + "em");
            t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            t === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(t) && t.input.focus();
            t.yearshtml && (i = t.yearshtml, setTimeout(function () {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
                i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (n) {
            return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus")
        },
        _checkOffset: function (t, i, r) {
            var u = t.dpDiv.outerWidth(), f = t.dpDiv.outerHeight(), h = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
                s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i
        },
        _findPos: function (t) {
            for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && (t.type === "hidden" || t.nodeType !== 1 || n.expr.filters.hidden(t));) t = t[u ? "previousSibling" : "nextSibling"];
            return i = n(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function (t) {
            var u, e, f, o, r = this._curInst;
            r && (!t || r === n.data(t, i)) && this._datepickerShowing && (u = this._get(r, "showAnim"), e = this._get(r, "duration"), f = function () {
                n.datepicker._tidyDialog(r)
            }, n.effects && (n.effects.effect[u] || n.effects[u]) ? r.dpDiv.hide(u, n.datepicker._get(r, "showOptions"), e, f) : r.dpDiv[u === "slideDown" ? "slideUp" : u === "fadeIn" ? "fadeOut" : "hide"](u ? e : null, f), u || f(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (n) {
            n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if (n.datepicker._curInst) {
                var i = n(t.target), r = n.datepicker._getInst(i[0]);
                (i[0].id === n.datepicker._mainDivId || i.parents("#" + n.datepicker._mainDivId).length !== 0 || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, i, r) {
            var f = n(t), u = this._getInst(f[0]);
            this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + (r === "M" ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u))
        },
        _gotoToday: function (t) {
            var r, u = n(t), i = this._getInst(u[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear());
            this._notifyChange(i);
            this._adjustDate(u)
        },
        _selectMonthYear: function (t, i, r) {
            var f = n(t), u = this._getInst(f[0]);
            u["selected" + (r === "M" ? "Month" : "Year")] = u["draw" + (r === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(u);
            this._adjustDate(f)
        },
        _selectDay: function (t, i, r, u) {
            var f, e = n(t);
            n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function (t) {
            var i = n(t);
            this._selectDate(i, "")
        },
        _selectDate: function (t, i) {
            var u, f = n(t), r = this._getInst(f[0]);
            i = i != null ? i : this._formatDate(r);
            r.input && r.input.val(i);
            this._updateAlternate(r);
            u = this._get(r, "onSelect");
            u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var i, r, u, f = this._get(t, "altField");
            f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).each(function () {
                n(this).val(u)
            }))
        },
        noWeekends: function (n) {
            var t = n.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function (n) {
            var i, t = new Date(n.getTime());
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function (t, i, r) {
            if (t == null || i == null) throw"Invalid arguments";
            if (i = typeof i == "object" ? i.toString() : i + "", i === "") return null;
            for (var a, v, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = typeof y != "string" ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, s = -1, h = -1, p = -1, w = !1, u, l = function (n) {
                var i = o + 1 < t.length && t.charAt(o + 1) === n;
                return i && o++, i
            }, c = function (n) {
                var r = l(n), u = n === "@" ? 14 : n === "!" ? 20 : n === "y" && r ? 4 : n === "o" ? 3 : 2,
                    e = new RegExp("^\\d{1," + u + "}"), t = i.substring(f).match(e);
                if (!t) throw"Missing number at position " + f;
                return f += t[0].length, parseInt(t[0], 10)
            }, k = function (t, r, u) {
                var e = -1, o = n.map(l(t) ? u : r, function (n, t) {
                    return [[t, n]]
                }).sort(function (n, t) {
                    return -(n[1].length - t[1].length)
                });
                if (n.each(o, function (n, t) {
                    var r = t[1];
                    if (i.substr(f, r.length).toLowerCase() === r.toLowerCase()) return e = t[0], f += r.length, !1
                }), e !== -1) return e + 1;
                throw"Unknown name at position " + f;
            }, b = function () {
                if (i.charAt(f) !== t.charAt(o)) throw"Unexpected literal at position " + f;
                f++
            }, o = 0; o < t.length; o++) if (w) t.charAt(o) !== "'" || l("'") ? b() : w = !1; else switch (t.charAt(o)) {
                case"d":
                    h = c("d");
                    break;
                case"D":
                    k("D", g, nt);
                    break;
                case"o":
                    p = c("o");
                    break;
                case"m":
                    s = c("m");
                    break;
                case"M":
                    s = k("M", tt, it);
                    break;
                case"y":
                    e = c("y");
                    break;
                case"@":
                    u = new Date(c("@"));
                    e = u.getFullYear();
                    s = u.getMonth() + 1;
                    h = u.getDate();
                    break;
                case"!":
                    u = new Date((c("!") - this._ticksTo1970) / 1e4);
                    e = u.getFullYear();
                    s = u.getMonth() + 1;
                    h = u.getDate();
                    break;
                case"'":
                    l("'") ? b() : w = !0;
                    break;
                default:
                    b()
            }
            if (f < i.length && (v = i.substr(f), !/^\s+/.test(v))) throw"Extra/unparsed characters found in date: " + v;
            if (e === -1 ? e = (new Date).getFullYear() : e < 100 && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (e <= d ? 0 : -100)), p > -1) {
                s = 1;
                h = p;
                do {
                    if (a = this._getDaysInMonth(e, s - 1), h <= a) break;
                    s++;
                    h -= a
                } while (1)
            }
            if (u = this._daylightSavingAdjust(new Date(e, s - 1, h)), u.getFullYear() !== e || u.getMonth() + 1 !== s || u.getDate() !== h) throw"Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 864e9,
        formatDate: function (n, t, i) {
            if (!t) return "";
            var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (i ? i.dayNames : null) || this._defaults.dayNames,
                l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames, f = function (t) {
                    var i = u + 1 < n.length && n.charAt(u + 1) === t;
                    return i && u++, i
                }, e = function (n, t, i) {
                    var r = "" + t;
                    if (f(n)) while (r.length < i) r = "0" + r;
                    return r
                }, s = function (n, t, i, r) {
                    return f(n) ? r[t] : i[t]
                }, r = "", o = !1;
            if (t) for (u = 0; u < n.length; u++) if (o) n.charAt(u) !== "'" || f("'") ? r += n.charAt(u) : o = !1; else switch (n.charAt(u)) {
                case"d":
                    r += e("d", t.getDate(), 2);
                    break;
                case"D":
                    r += s("D", t.getDay(), h, c);
                    break;
                case"o":
                    r += e("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    r += e("m", t.getMonth() + 1, 2);
                    break;
                case"M":
                    r += s("M", t.getMonth(), l, a);
                    break;
                case"y":
                    r += f("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                    break;
                case"@":
                    r += t.getTime();
                    break;
                case"!":
                    r += t.getTime() * 1e4 + this._ticksTo1970;
                    break;
                case"'":
                    f("'") ? r += "'" : o = !0;
                    break;
                default:
                    r += n.charAt(u)
            }
            return r
        },
        _possibleChars: function (n) {
            for (var i = "", r = !1, u = function (i) {
                var r = t + 1 < n.length && n.charAt(t + 1) === i;
                return r && t++, r
            }, t = 0; t < n.length; t++) if (r) n.charAt(t) !== "'" || u("'") ? i += n.charAt(t) : r = !1; else switch (n.charAt(t)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    i += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    u("'") ? i += "'" : r = !0;
                    break;
                default:
                    i += n.charAt(t)
            }
            return i
        },
        _get: function (n, i) {
            return n.settings[i] !== t ? n.settings[i] : this._defaults[i]
        },
        _setDateFromField: function (n, t) {
            if (n.input.val() !== n.lastVal) {
                var f = this._get(n, "dateFormat"), r = n.lastVal = n.input ? n.input.val() : null,
                    u = this._getDefaultDate(n), i = u, e = this._getFormatConfig(n);
                try {
                    i = this.parseDate(f, r, e) || u
                } catch (o) {
                    r = t ? "" : r
                }
                n.selectedDay = i.getDate();
                n.drawMonth = n.selectedMonth = i.getMonth();
                n.drawYear = n.selectedYear = i.getFullYear();
                n.currentDay = r ? i.getDate() : 0;
                n.currentMonth = r ? i.getMonth() : 0;
                n.currentYear = r ? i.getFullYear() : 0;
                this._adjustInstDate(n)
            }
        },
        _getDefaultDate: function (n) {
            return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
        },
        _determineDate: function (t, i, r) {
            var f = function (n) {
                    var t = new Date;
                    return t.setDate(t.getDate() + n), t
                }, e = function (i) {
                    try {
                        return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                    } catch (h) {
                    }
                    for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
                        switch (u[2] || "d") {
                            case"d":
                            case"D":
                                r += parseInt(u[1], 10);
                                break;
                            case"w":
                            case"W":
                                r += parseInt(u[1], 10) * 7;
                                break;
                            case"m":
                            case"M":
                                e += parseInt(u[1], 10);
                                r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                                break;
                            case"y":
                            case"Y":
                                f += parseInt(u[1], 10);
                                r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                        }
                        u = s.exec(i)
                    }
                    return new Date(f, e, r)
                },
                u = i == null || i === "" ? r : typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r : f(i) : new Date(i.getTime());
            return u = u && u.toString() === "Invalid Date" ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u)
        },
        _daylightSavingAdjust: function (n) {
            return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null
        },
        _setDate: function (n, t, i) {
            var u = !t, f = n.selectedMonth, e = n.selectedYear,
                r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
            n.selectedDay = n.currentDay = r.getDate();
            n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
            n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
            f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
            this._adjustInstDate(n);
            n.input && n.input.val(u ? "" : this._formatDate(n))
        },
        _getDate: function (n) {
            return !n.currentYear || n.input && n.input.val() === "" ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
        },
        _attachHandlers: function (t) {
            var r = this._get(t, "stepMonths"), i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        n.datepicker._adjustDate(i, -r, "M")
                    }, next: function () {
                        n.datepicker._adjustDate(i, +r, "M")
                    }, hide: function () {
                        n.datepicker._hideDatepicker()
                    }, today: function () {
                        n.datepicker._gotoToday(i)
                    }, selectDay: function () {
                        return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return n.datepicker._selectMonthYear(i, this, "M"), !1
                    }, selectYear: function () {
                        return n.datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (n) {
            var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, f, y, ct, p, lt, l, u, at, vt,
                yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date,
                gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())),
                e = this._get(n, "isRTL"), li = this._get(n, "showButtonPanel"), hi = this._get(n, "hideIfNoPrevNext"),
                ni = this._get(n, "navigationAsDateFormat"), o = this._getNumberOfMonths(n),
                ai = this._get(n, "showCurrentAtPos"), ci = this._get(n, "stepMonths"), ti = o[0] !== 1 || o[1] !== 1,
                ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)),
                w = this._getMinMaxDate(n, "min"), v = this._getMinMaxDate(n, "max"), t = n.drawMonth - ai,
                r = n.drawYear;
            if (t < 0 && (t += 12, r--), v) for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - o[0] * o[1] + 1, v.getDate())), b = w && b < w ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;) t--, t < 0 && (t = 11, r--);
            for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k, et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (e ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (e ? "" : et) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, ot = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), st = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), ht = this._getDefaultDate(n), nt = "", f, y = 0; y < o[0]; y++) {
                for (ct = "", this.maxRows = 4, p = 0; p < o[1]; p++) {
                    if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) {
                        if (u += "<div class='ui-datepicker-group", o[1] > 1) switch (p) {
                            case 0:
                                u += " ui-datepicker-group-first";
                                l = " ui-corner-" + (e ? "right" : "left");
                                break;
                            case o[1] - 1:
                                u += " ui-datepicker-group-last";
                                l = " ui-corner-" + (e ? "left" : "right");
                                break;
                            default:
                                u += " ui-datepicker-group-middle";
                                l = ""
                        }
                        u += "'>"
                    }
                    for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && y === 0 ? e ? ut : rt : "") + (/all|right/.test(l) && y === 0 ? e ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", f = 0; f < 7; f++) vt = (f + c) % 7, at += "<th" + ((f + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
                    for (u += at + "<\/tr><\/thead><tbody>", yt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)), pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, tt = Math.ceil((pt + yt) / 7), wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)), bt = 0; bt < wt; bt++) {
                        for (u += "<tr>", kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", f = 0; f < 7; f++) d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, it = a && !si || !d[0] || w && i < w || v && i > v, kt += "<td class='" + ((f + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!a || g) && d[2] ? " title='" + d[2].replace(/'/g, "&#39;") + "'" : "") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
                        u += kt + "<\/tr>"
                    }
                    t++;
                    t > 11 && (t = 0, r++);
                    u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (o[0] > 0 && p === o[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
                    ct += u
                }
                nt += ct
            }
            return nt += ri, n._keyEvent = !1, nt
        },
        _generateMonthYearHeader: function (n, t, i, r, u, f, e, o) {
            var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"), b = this._get(n, "changeYear"),
                g = this._get(n, "showMonthAfterYear"), c = "<div class='ui-datepicker-title'>", l = "";
            if (f || !w) l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>"; else {
                for (k = r && r.getFullYear() === i, d = u && u.getFullYear() === i, l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; h < 12; h++) (!k || h >= r.getMonth()) && (!d || h <= u.getMonth()) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
                l += "<\/select>"
            }
            if (g || (c += l + (f || !(w && b) ? "&#xa0;" : "")), !n.yearshtml) if (n.yearshtml = "", f || !b) c += "<span class='ui-datepicker-year'>" + i + "<\/span>"; else {
                for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function (n) {
                    var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                    return isNaN(t) ? y : t
                }, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; s <= a; s++) n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                n.yearshtml += "<\/select>";
                c += n.yearshtml;
                n.yearshtml = null
            }
            return c += this._get(n, "yearSuffix"), g && (c += (f || !(w && b) ? "&#xa0;" : "") + l), c + "<\/div>"
        },
        _adjustInstDate: function (n, t, i) {
            var u = n.drawYear + (i === "Y" ? t : 0), f = n.drawMonth + (i === "M" ? t : 0),
                e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i === "D" ? t : 0),
                r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
            n.selectedDay = r.getDate();
            n.drawMonth = n.selectedMonth = r.getMonth();
            n.drawYear = n.selectedYear = r.getFullYear();
            (i === "M" || i === "Y") && this._notifyChange(n)
        },
        _restrictMinMax: function (n, t) {
            var i = this._getMinMaxDate(n, "min"), r = this._getMinMaxDate(n, "max"), u = i && t < i ? i : t;
            return r && u > r ? r : u
        },
        _notifyChange: function (n) {
            var t = this._get(n, "onChangeMonthYear");
            t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
        },
        _getNumberOfMonths: function (n) {
            var t = this._get(n, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function (n, t) {
            return this._determineDate(n, this._get(n, t + "Date"), null)
        },
        _getDaysInMonth: function (n, t) {
            return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (n, t) {
            return new Date(n, t, 1).getDay()
        },
        _canAdjustMonth: function (n, t, i, r) {
            var f = this._getNumberOfMonths(n),
                u = this._daylightSavingAdjust(new Date(i, r + (t < 0 ? t : f[0] * f[1]), 1));
            return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u)
        },
        _isInRange: function (n, t) {
            var i, f, e = this._getMinMaxDate(n, "min"), o = this._getMinMaxDate(n, "max"), r = null, u = null,
                s = this._get(n, "yearRange");
            return s && (i = s.split(":"), f = (new Date).getFullYear(), r = parseInt(i[0], 10), u = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += f), i[1].match(/[+\-].*/) && (u += f)), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || t.getFullYear() <= u)
        },
        _getFormatConfig: function (n) {
            var t = this._get(n, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(n, "dayNamesShort"),
                dayNames: this._get(n, "dayNames"),
                monthNamesShort: this._get(n, "monthNamesShort"),
                monthNames: this._get(n, "monthNames")
            }
        },
        _formatDate: function (n, t, i, r) {
            t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
            var u = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
            return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
        }
    });
    n.fn.datepicker = function (t) {
        if (!this.length) return this;
        n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick), n.datepicker.initialized = !0);
        n("#" + n.datepicker._mainDivId).length === 0 && n("body").append(n.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return typeof t == "string" && (t === "isDisabled" || t === "getDate" || t === "widget") ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function () {
            typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
        })
    };
    n.datepicker = new f;
    n.datepicker.initialized = !1;
    n.datepicker.uuid = (new Date).getTime();
    n.datepicker.version = "1.10.4"
}(jQuery), function (n) {
    var t = {buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0},
        i = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0};
    n.widget("ui.dialog", {
        version: "1.10.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (t) {
                    var i = n(this).css(t).offset().top;
                    i < 0 && n(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && n.fn.draggable && this._makeDraggable();
            this.options.resizable && n.fn.resizable && this._makeResizable();
            this._isOpen = !1
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function () {
            var n, t = this.originalPosition;
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(!0, !0).remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            n = t.parent.children().eq(t.index);
            n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: n.noop,
        enable: n.noop,
        close: function (t) {
            var i, r = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length) try {
                    i = this.document[0].activeElement;
                    i && i.nodeName.toLowerCase() !== "body" && n(i).blur()
                } catch (u) {
                }
                this._hide(this.uiDialog, this.options.hide, function () {
                    r._trigger("close", t)
                })
            }
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (n, t) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !t && this._trigger("focus", n), i
        },
        open: function () {
            var t = this;
            if (this._isOpen) {
                this._moveToTop() && this._focusTabbable();
                return
            }
            this._isOpen = !0;
            this.opener = n(this.document[0].activeElement);
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, !0);
            this._show(this.uiDialog, this.options.show, function () {
                t._focusTabbable();
                t._trigger("focus")
            });
            this._trigger("open")
        },
        _focusTabbable: function () {
            var n = this.element.find("[autofocus]");
            n.length || (n = this.element.find(":tabbable"));
            n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
            n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
            n.length || (n = this.uiDialog);
            n.eq(0).focus()
        },
        _keepFocus: function (t) {
            function i() {
                var t = this.document[0].activeElement, i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }

            t.preventDefault();
            i.call(this);
            this._delay(i)
        },
        _createWrapper: function () {
            this.uiDialog = n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._on(this.uiDialog, {
                keydown: function (t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) {
                        t.preventDefault();
                        this.close(t);
                        return
                    }
                    if (t.keyCode === n.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"), r = i.filter(":first"), u = i.filter(":last");
                        t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (u.focus(1), t.preventDefault()) : (r.focus(1), t.preventDefault())
                    }
                }, mousedown: function (n) {
                    this._moveToTop(n) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },
        _createTitlebar: function () {
            var t;
            this.uiDialogTitlebar = n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {
                mousedown: function (t) {
                    n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            });
            this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({
                label: this.options.closeText,
                icons: {primary: "ui-icon-closethick"},
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {
                click: function (n) {
                    n.preventDefault();
                    this.close(n)
                }
            });
            t = n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(t);
            this.uiDialog.attr({"aria-labelledby": t.attr("id")})
        },
        _title: function (n) {
            this.options.title || n.html("&#160;");
            n.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },
        _createButtons: function () {
            var i = this, t = this.options.buttons;
            if (this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(t) || n.isArray(t) && !t.length) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            n.each(t, function (t, r) {
                var u, f;
                r = n.isFunction(r) ? {click: r, text: t} : r;
                r = n.extend({type: "button"}, r);
                u = r.click;
                r.click = function () {
                    u.apply(i.element[0], arguments)
                };
                f = {icons: r.icons, text: r.showText};
                delete r.icons;
                delete r.showText;
                n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet)
            });
            this.uiDialog.addClass("ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function () {
            function i(n) {
                return {position: n.position, offset: n.offset}
            }

            var t = this, r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (r, u) {
                    n(this).addClass("ui-dialog-dragging");
                    t._blockFrames();
                    t._trigger("dragStart", r, i(u))
                },
                drag: function (n, r) {
                    t._trigger("drag", n, i(r))
                },
                stop: function (u, f) {
                    r.position = [f.position.left - t.document.scrollLeft(), f.position.top - t.document.scrollTop()];
                    n(this).removeClass("ui-dialog-dragging");
                    t._unblockFrames();
                    t._trigger("dragStop", u, i(f))
                }
            })
        },
        _makeResizable: function () {
            function r(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }

            var i = this, t = this.options, u = t.resizable, f = this.uiDialog.css("position"),
                e = typeof u == "string" ? u : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: t.maxWidth,
                maxHeight: t.maxHeight,
                minWidth: t.minWidth,
                minHeight: this._minHeight(),
                handles: e,
                start: function (t, u) {
                    n(this).addClass("ui-dialog-resizing");
                    i._blockFrames();
                    i._trigger("resizeStart", t, r(u))
                },
                resize: function (n, t) {
                    i._trigger("resize", n, r(t))
                },
                stop: function (u, f) {
                    t.height = n(this).height();
                    t.width = n(this).width();
                    n(this).removeClass("ui-dialog-resizing");
                    i._unblockFrames();
                    i._trigger("resizeStop", u, r(f))
                }
            }).css("position", f)
        },
        _minHeight: function () {
            var n = this.options;
            return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
        },
        _position: function () {
            var n = this.uiDialog.is(":visible");
            n || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            n || this.uiDialog.hide()
        },
        _setOptions: function (r) {
            var e = this, u = !1, f = {};
            n.each(r, function (n, r) {
                e._setOption(n, r);
                n in t && (u = !0);
                n in i && (f[n] = r)
            });
            u && (this._size(), this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", f)
        },
        _setOption: function (n, t) {
            var u, r, i = this.uiDialog;
            (n === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t), n !== "disabled") && (this._super(n, t), n === "appendTo" && this.uiDialog.appendTo(this._appendTo()), n === "buttons" && this._createButtons(), n === "closeText" && this.uiDialogTitlebarClose.button({label: "" + t}), n === "draggable" && (u = i.is(":data(ui-draggable)"), u && !t && i.draggable("destroy"), !u && t && this._makeDraggable()), n === "position" && this._position(), n === "resizable" && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && typeof t == "string" && i.resizable("option", "handles", t), r || t === !1 || this._makeResizable()), n === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var t, i, r, n = this.options;
            this.element.show().css({width: "auto", minHeight: 0, maxHeight: "none", height: 0});
            n.minWidth > n.width && (n.width = n.minWidth);
            t = this.uiDialog.css({height: "auto", width: n.width}).outerHeight();
            i = Math.max(0, n.minHeight - t);
            r = typeof n.maxHeight == "number" ? Math.max(0, n.maxHeight - t) : "none";
            n.height === "auto" ? this.element.css({
                minHeight: i,
                maxHeight: r,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var t = n(this);
                return n("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (t) {
            return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var t = this, i = this.widgetFullName;
                n.ui.dialog.overlayInstances || this._delay(function () {
                    n.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (r) {
                        t._allowInteraction(r) || (r.preventDefault(), n(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                });
                this.overlay = n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                this._on(this.overlay, {mousedown: "_keepFocus"});
                n.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function () {
            this.options.modal && this.overlay && (n.ui.dialog.overlayInstances--, n.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    });
    n.ui.dialog.overlayInstances = 0;
    n.uiBackCompat !== !1 && n.widget("ui.dialog", n.ui.dialog, {
        _position: function () {
            var t = this.options.position, i = [], r = [0, 0], u;
            t ? ((typeof t == "string" || typeof t == "object" && "0" in t) && (i = t.split ? t.split(" ") : [t[0], t[1]], i.length === 1 && (i[1] = i[0]), n.each(["left", "top"], function (n, t) {
                +i[n] === i[n] && (r[n] = i[n], i[n] = t)
            }), t = {
                my: i[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + i[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
                at: i.join(" ")
            }), t = n.extend({}, n.ui.dialog.prototype.options.position, t)) : t = n.ui.dialog.prototype.options.position;
            u = this.uiDialog.is(":visible");
            u || this.uiDialog.show();
            this.uiDialog.position(t);
            u || this.uiDialog.hide()
        }
    })
}(jQuery), function (n) {
    n.widget("ui.draggable", n.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            this.options.helper !== "original" || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var i = this.options;
            return this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), !this.handle) ? !1 : (n(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
                n("<div class='ui-draggable-iframeFix' style='background: #fff;'><\/div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(n(this).offset()).appendTo("body")
            }), !0)
        },
        _mouseStart: function (t) {
            var i = this.options;
            return (this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                }, parent: this._getParentOffset(), relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1) ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function (t, i) {
            if (this.offsetParentCssPosition === "fixed" && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            return this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var r = this, i = !1;
            return (n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), this.options.helper === "original" && !n.contains(this.element[0].ownerDocument, this.element[0])) ? !1 : (this.options.revert === "invalid" && !i || this.options.revert === "valid" && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                r._trigger("stop", t) !== !1 && r._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1)
        },
        _mouseUp: function (t) {
            return n("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function (t) {
            var r = this.options,
                i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t])) : r.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo(r.appendTo === "parent" ? this.element[0].parentNode : r.appendTo), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {left: +t[0], top: +t[1] || 0});
            "left" in t && (this.offset.click.left = t.left + this.margins.left);
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top" in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            var t = this.offsetParent.offset();
            return this.cssPosition === "absolute" && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition === "relative") {
                var n = this.element.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var u, t, i, r = this.options;
            if (!r.containment) {
                this.containment = null;
                return
            }
            if (r.containment === "window") {
                this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment === "document") {
                this.containment = [0, 0, n(document).width() - this.helperProportions.width - this.margins.left, (n(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment.constructor === Array) {
                this.containment = r.containment;
                return
            }
            (r.containment === "parent" && (r.containment = this.helper[0].parentNode), t = n(r.containment), i = t[0], i) && (u = t.css("overflow") !== "hidden", this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (u ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (u ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = t)
        },
        _convertPositionTo: function (t, i) {
            i || (i = this.position);
            var r = t === "absolute" ? 1 : -1,
                u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: u.scrollTop(),
                left: u.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * r,
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * r
            }
        },
        _generatePosition: function (t) {
            var i, e, u, f, r = this.options,
                h = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                o = t.pageX, s = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: h.scrollTop(),
                left: h.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (e = this.relative_container.offset(), i = [this.containment[0] + e.left, this.containment[1] + e.top, this.containment[2] + e.left, this.containment[3] + e.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (o = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (s = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (o = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (s = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, s = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, o = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f)), {
                top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1
        },
        _trigger: function (t, i, r) {
            return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r]), t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")), n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, i) {
            var r = n(this).data("ui-draggable"), u = r.options, f = n.extend({}, i, {item: r.element});
            r.sortables = [];
            n(u.connectToSortable).each(function () {
                var i = n.data(this, "ui-sortable");
                i && !i.options.disabled && (r.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, f))
            })
        }, stop: function (t, i) {
            var r = n(this).data("ui-draggable"), u = n.extend({}, i, {item: r.element});
            n.each(r.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper === "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, u))
            })
        }, drag: function (t, i) {
            var r = n(this).data("ui-draggable"), u = this;
            n.each(r.sortables, function () {
                var f = !1, e = this;
                this.instance.positionAbs = r.positionAbs;
                this.instance.helperProportions = r.helperProportions;
                this.instance.offset.click = r.offset.click;
                this.instance._intersectsWith(this.instance.containerCache) && (f = !0, n.each(r.sortables, function () {
                    return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== e && this.instance._intersectsWith(this.instance.containerCache) && n.contains(e.instance.element[0], this.instance.element[0]) && (f = !1), f
                }));
                f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = n(u).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return i.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    });
    n.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var t = n("body"), i = n(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor"));
            t.css("cursor", i.cursor)
        }, stop: function () {
            var t = n(this).data("ui-draggable").options;
            t._cursor && n("body").css("cursor", t._cursor)
        }
    });
    n.ui.plugin.add("draggable", "opacity", {
        start: function (t, i) {
            var r = n(i.helper), u = n(this).data("ui-draggable").options;
            r.css("opacity") && (u._opacity = r.css("opacity"));
            r.css("opacity", u.opacity)
        }, stop: function (t, i) {
            var r = n(this).data("ui-draggable").options;
            r._opacity && n(i.helper).css("opacity", r._opacity)
        }
    });
    n.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var t = n(this).data("ui-draggable");
            t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset())
        }, drag: function (t) {
            var r = n(this).data("ui-draggable"), i = r.options, u = !1;
            r.scrollParent[0] !== document && r.scrollParent[0].tagName !== "HTML" ? (i.axis && i.axis === "x" || (r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && i.axis === "y" || (r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && i.axis === "x" || (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? u = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (u = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed))), i.axis && i.axis === "y" || (t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? u = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (u = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))));
            u !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
        }
    });
    n.ui.plugin.add("draggable", "snap", {
        start: function () {
            var t = n(this).data("ui-draggable"), i = t.options;
            t.snapElements = [];
            n(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
                var i = n(this), r = i.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        }, drag: function (t, i) {
            for (var e, o, s, h, c, a, l, v, w, r = n(this).data("ui-draggable"), b = r.options, f = b.snapTolerance, y = i.offset.left, k = y + r.helperProportions.width, p = i.offset.top, d = p + r.helperProportions.height, u = r.snapElements.length - 1; u >= 0; u--) {
                if (c = r.snapElements[u].left, a = c + r.snapElements[u].width, l = r.snapElements[u].top, v = l + r.snapElements[u].height, k < c - f || y > a + f || d < l - f || p > v + f || !n.contains(r.snapElements[u].item.ownerDocument, r.snapElements[u].item)) {
                    r.snapElements[u].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {snapItem: r.snapElements[u].item}));
                    r.snapElements[u].snapping = !1;
                    continue
                }
                b.snapMode !== "inner" && (e = Math.abs(l - d) <= f, o = Math.abs(v - p) <= f, s = Math.abs(c - k) <= f, h = Math.abs(a - y) <= f, e && (i.position.top = r._convertPositionTo("relative", {
                    top: l - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v,
                    left: 0
                }).top - r.margins.top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c - r.helperProportions.width
                }).left - r.margins.left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - r.margins.left));
                w = e || o || s || h;
                b.snapMode !== "outer" && (e = Math.abs(l - p) <= f, o = Math.abs(v - d) <= f, s = Math.abs(c - y) <= f, h = Math.abs(a - k) <= f, e && (i.position.top = r._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - r.margins.top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c
                }).left - r.margins.left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a - r.helperProportions.width
                }).left - r.margins.left));
                !r.snapElements[u].snapping && (e || o || s || h || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {snapItem: r.snapElements[u].item}));
                r.snapElements[u].snapping = e || o || s || h || w
            }
        }
    });
    n.ui.plugin.add("draggable", "stack", {
        start: function () {
            var i, r = this.data("ui-draggable").options, t = n.makeArray(n(r.stack)).sort(function (t, i) {
                return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
            });
            t.length && (i = parseInt(n(t[0]).css("zIndex"), 10) || 0, n(t).each(function (t) {
                n(this).css("zIndex", i + t)
            }), this.css("zIndex", i + t.length))
        }
    });
    n.ui.plugin.add("draggable", "zIndex", {
        start: function (t, i) {
            var r = n(i.helper), u = n(this).data("ui-draggable").options;
            r.css("zIndex") && (u._zIndex = r.css("zIndex"));
            r.css("zIndex", u.zIndex)
        }, stop: function (t, i) {
            var r = n(this).data("ui-draggable").options;
            r._zIndex && n(i.helper).css("zIndex", r._zIndex)
        }
    })
}(jQuery), function (n) {
    function t(n, t, i) {
        return n > t && n < t + i
    }

    n.widget("ui.droppable", {
        version: "1.10.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var i, t = this.options, r = t.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = n.isFunction(r) ? r : function (n) {
                return n.is(r)
            };
            this.proportions = function () {
                if (arguments.length) i = arguments[0]; else return i ? i : i = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            };
            n.ui.ddmanager.droppables[t.scope] = n.ui.ddmanager.droppables[t.scope] || [];
            n.ui.ddmanager.droppables[t.scope].push(this);
            t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function () {
            for (var t = 0, i = n.ui.ddmanager.droppables[this.options.scope]; t < i.length; t++) i[t] === this && i.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (t, i) {
            t === "accept" && (this.accept = n.isFunction(i) ? i : function (n) {
                return n.is(i)
            });
            n.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass);
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function (t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function (t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function (t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function (t, i) {
            var r = i || n.ui.ddmanager.current, u = !1;
            return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var t = n.data(this, "ui-droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope === r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(t, {offset: t.element.offset()}), t.options.tolerance)) return u = !0, !1
            }), u) ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
        },
        ui: function (n) {
            return {
                draggable: n.currentItem || n.element,
                helper: n.helper,
                position: n.position,
                offset: n.positionAbs
            }
        }
    });
    n.ui.intersect = function (n, i, r) {
        if (!i.offset) return !1;
        var a, v, e = (n.positionAbs || n.position.absolute).left, o = (n.positionAbs || n.position.absolute).top,
            s = e + n.helperProportions.width, h = o + n.helperProportions.height, u = i.offset.left, f = i.offset.top,
            c = u + i.proportions().width, l = f + i.proportions().height;
        switch (r) {
            case"fit":
                return u <= e && s <= c && f <= o && h <= l;
            case"intersect":
                return u < e + n.helperProportions.width / 2 && s - n.helperProportions.width / 2 < c && f < o + n.helperProportions.height / 2 && h - n.helperProportions.height / 2 < l;
            case"pointer":
                return a = (n.positionAbs || n.position.absolute).left + (n.clickOffset || n.offset.click).left, v = (n.positionAbs || n.position.absolute).top + (n.clickOffset || n.offset.click).top, t(v, f, i.proportions().height) && t(a, u, i.proportions().width);
            case"touch":
                return (o >= f && o <= l || h >= f && h <= l || o < f && h > l) && (e >= u && e <= c || s >= u && s <= c || e < u && s > c);
            default:
                return !1
        }
    };
    n.ui.ddmanager = {
        current: null, droppables: {"default": []}, prepareOffsets: function (t, i) {
            var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null,
                e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            n:for (r = 0; r < u.length; r++) if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                for (f = 0; f < e.length; f++) if (e[f] === u[r].element[0]) {
                    u[r].proportions().height = 0;
                    continue n
                }
                (u[r].visible = u[r].element.css("display") !== "none", u[r].visible) && (o === "mousedown" && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions({
                    width: u[r].element[0].offsetWidth,
                    height: u[r].element[0].offsetHeight
                }))
            }
        }, drop: function (t, i) {
            var r = !1;
            return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), r
        }, dragStart: function (t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function () {
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            })
        }, drag: function (t, i) {
            t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var r, e, f, o = n.ui.intersect(t, this, this.options.tolerance),
                        u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    u && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function () {
                        return n.data(this, "ui-droppable").options.scope === e
                    }), f.length && (r = n.data(f[0], "ui-droppable"), r.greedyChild = u === "isover")), r && u === "isover" && (r.isover = !1, r.isout = !0, r._out.call(r, i)), this[u] = !0, this[u === "isout" ? "isover" : "isout"] = !1, this[u === "isover" ? "_over" : "_out"].call(this, i), r && u === "isout" && (r.isout = !1, r.isover = !0, r._over.call(r, i)))
                }
            })
        }, dragStop: function (t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable");
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
        }
    }
}(jQuery), function (n, t) {
    var i = "ui-effects-";
    n.effects = {effect: {}}, function (n, t) {
        function e(n, t, i) {
            var r = s[t.type] || {};
            return n == null ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n)) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : r.max < n ? r.max : n
        }

        function l(t) {
            var e = i(), o = e._rgba = [];
            return (t = t.toLowerCase(), r(v, function (n, i) {
                var r, s = i.re.exec(t), h = s && i.parse(s), f = i.space || "rgba";
                if (h) return r = e[f](h), e[u[f].cache] = r[u[f].cache], o = e._rgba = r._rgba, !1
            }), o.length) ? (o.join() === "0,0,0,0" && n.extend(o, f.transparent), e) : f[t]
        }

        function o(n, t, i) {
            return (i = (i + 1) % 1, i * 6 < 1) ? n + (t - n) * i * 6 : i * 2 < 1 ? t : i * 3 < 2 ? n + (t - n) * (2 / 3 - i) * 6 : n
        }

        var a = /^([\-+])=\s*(\d+\.?\d*)/, v = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (n) {
                    return [n[1], n[2], n[3], n[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (n) {
                    return [n[1] * 2.55, n[2] * 2.55, n[3] * 2.55, n[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (n) {
                    return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (n) {
                    return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (n) {
                    return [n[1], n[2] / 100, n[3] / 100, n[4]]
                }
            }], i = n.Color = function (t, i, r, u) {
                return new n.Color.fn.parse(t, i, r, u)
            }, u = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, s = {byte: {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, h = i.support = {},
            c = n("<p>")[0], f, r = n.each;
        c.style.cssText = "background-color:rgba(1,1,1,.5)";
        h.rgba = c.style.backgroundColor.indexOf("rgba") > -1;
        r(u, function (n, t) {
            t.cache = "_" + n;
            t.props.alpha = {idx: 3, type: "percent", def: 1}
        });
        i.fn = n.extend(i.prototype, {
            parse: function (o, s, h, c) {
                if (o === t) return this._rgba = [null, null, null, null], this;
                (o.jquery || o.nodeType) && (o = n(o).css(s), s = t);
                var a = this, v = n.type(o), y = this._rgba = [];
                return (s !== t && (o = [o, s, h, c], v = "array"), v === "string") ? this.parse(l(o) || f._default) : v === "array" ? (r(u.rgba.props, function (n, t) {
                    y[t.idx] = e(o[t.idx], t)
                }), this) : v === "object" ? (o instanceof i ? r(u, function (n, t) {
                    o[t.cache] && (a[t.cache] = o[t.cache].slice())
                }) : r(u, function (t, i) {
                    var u = i.cache;
                    r(i.props, function (n, t) {
                        if (!a[u] && i.to) {
                            if (n === "alpha" || o[n] == null) return;
                            a[u] = i.to(a._rgba)
                        }
                        a[u][t.idx] = e(o[n], t, !0)
                    });
                    a[u] && n.inArray(null, a[u].slice(0, 3)) < 0 && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u])))
                }), this) : void 0
            }, is: function (n) {
                var e = i(n), t = !0, f = this;
                return r(u, function (n, i) {
                    var o, u = e[i.cache];
                    return u && (o = f[i.cache] || i.to && i.to(f._rgba) || [], r(i.props, function (n, i) {
                        if (u[i.idx] != null) return t = u[i.idx] === o[i.idx]
                    })), t
                }), t
            }, _space: function () {
                var n = [], t = this;
                return r(u, function (i, r) {
                    t[r.cache] && n.push(i)
                }), n.pop()
            }, transition: function (n, t) {
                var f = i(n), c = f._space(), o = u[c], l = this.alpha() === 0 ? i("transparent") : this,
                    a = l[o.cache] || o.to(l._rgba), h = a.slice();
                return f = f[o.cache], r(o.props, function (n, i) {
                    var c = i.idx, r = a[c], u = f[c], o = s[i.type] || {};
                    u !== null && (r === null ? h[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), h[c] = e((u - r) * t + r, i)))
                }), this[c](h)
            }, blend: function (t) {
                if (this._rgba[3] === 1) return this;
                var r = this._rgba.slice(), u = r.pop(), f = i(t)._rgba;
                return i(n.map(r, function (n, t) {
                    return (1 - u) * f[t] + u * n
                }))
            }, toRgbaString: function () {
                var i = "rgba(", t = n.map(this._rgba, function (n, t) {
                    return n == null ? t > 2 ? 1 : 0 : n
                });
                return t[3] === 1 && (t.pop(), i = "rgb("), i + t.join() + ")"
            }, toHslaString: function () {
                var i = "hsla(", t = n.map(this.hsla(), function (n, t) {
                    return n == null && (n = t > 2 ? 1 : 0), t && t < 3 && (n = Math.round(n * 100) + "%"), n
                });
                return t[3] === 1 && (t.pop(), i = "hsl("), i + t.join() + ")"
            }, toHexString: function (t) {
                var i = this._rgba.slice(), r = i.pop();
                return t && i.push(~~(r * 255)), "#" + n.map(i, function (n) {
                    return n = (n || 0).toString(16), n.length === 1 ? "0" + n : n
                }).join("")
            }, toString: function () {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        });
        i.fn.parse.prototype = i.fn;
        u.hsla.to = function (n) {
            if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
            var i = n[0] / 255, r = n[1] / 255, f = n[2] / 255, s = n[3], u = Math.max(i, r, f), e = Math.min(i, r, f),
                t = u - e, o = u + e, h = o * .5, c, l;
            return c = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, l = t === 0 ? 0 : h <= .5 ? t / o : t / (2 - o), [Math.round(c) % 360, l, h, s == null ? 1 : s]
        };
        u.hsla.from = function (n) {
            if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
            var r = n[0] / 360, u = n[1], t = n[2], e = n[3], i = t <= .5 ? t * (1 + u) : t + u - t * u, f = 2 * t - i;
            return [Math.round(o(f, i, r + 1 / 3) * 255), Math.round(o(f, i, r) * 255), Math.round(o(f, i, r - 1 / 3) * 255), e]
        };
        r(u, function (u, f) {
            var s = f.props, o = f.cache, h = f.to, c = f.from;
            i.fn[u] = function (u) {
                if (h && !this[o] && (this[o] = h(this._rgba)), u === t) return this[o].slice();
                var l, a = n.type(u), v = a === "array" || a === "object" ? u : arguments, f = this[o].slice();
                return r(s, function (n, t) {
                    var i = v[a === "object" ? n : t.idx];
                    i == null && (i = f[t.idx]);
                    f[t.idx] = e(i, t)
                }), c ? (l = i(c(f)), l[o] = f, l) : i(f)
            };
            r(s, function (t, r) {
                i.fn[t] || (i.fn[t] = function (i) {
                    var f = n.type(i), h = t === "alpha" ? this._hsla ? "hsla" : "rgba" : u, o = this[h](),
                        s = o[r.idx], e;
                    return f === "undefined" ? s : (f === "function" && (i = i.call(this, s), f = n.type(i)), i == null && r.empty) ? this : (f === "string" && (e = a.exec(i), e && (i = s + parseFloat(e[2]) * (e[1] === "+" ? 1 : -1))), o[r.idx] = i, this[h](o))
                })
            })
        });
        i.hook = function (t) {
            var u = t.split(" ");
            r(u, function (t, r) {
                n.cssHooks[r] = {
                    set: function (t, u) {
                        var o, f, e = "";
                        if (u !== "transparent" && (n.type(u) !== "string" || (o = l(u)))) {
                            if (u = i(o || u), !h.rgba && u._rgba[3] !== 1) {
                                for (f = r === "backgroundColor" ? t.parentNode : t; (e === "" || e === "transparent") && f && f.style;) try {
                                    e = n.css(f, "backgroundColor");
                                    f = f.parentNode
                                } catch (s) {
                                }
                                u = u.blend(e && e !== "transparent" ? e : "_default")
                            }
                            u = u.toRgbaString()
                        }
                        try {
                            t.style[r] = u
                        } catch (s) {
                        }
                    }
                };
                n.fx.step[r] = function (t) {
                    t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0);
                    n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        };
        i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
        n.cssHooks.borderColor = {
            expand: function (n) {
                var t = {};
                return r(["Top", "Right", "Bottom", "Left"], function (i, r) {
                    t["border" + r + "Color"] = n
                }), t
            }
        };
        f = n.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery), function () {
        function i(t) {
            var r, u,
                i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                f = {};
            if (i && i.length && i[0] && i[i[0]]) for (u = i.length; u--;) r = i[u], typeof i[r] == "string" && (f[n.camelCase(r)] = i[r]); else for (r in i) typeof i[r] == "string" && (f[r] = i[r]);
            return f
        }

        function f(t, i) {
            var e = {}, r, f;
            for (r in i) f = i[r], t[r] !== f && (u[r] || (n.fx.step[r] || !isNaN(parseFloat(f))) && (e[r] = f));
            return e
        }

        var r = ["add", "remove", "toggle"], u = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
            n.fx.step[i] = function (n) {
                (n.end === "none" || n.setAttr) && (n.pos !== 1 || n.setAttr) || (jQuery.style(n.elem, i, n.end), n.setAttr = !0)
            }
        });
        n.fn.addBack || (n.fn.addBack = function (n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        });
        n.effects.animateClass = function (t, u, e, o) {
            var s = n.speed(u, e, o);
            return this.queue(function () {
                var e = n(this), h = e.attr("class") || "", o, u = s.children ? e.find("*").addBack() : e;
                u = u.map(function () {
                    var t = n(this);
                    return {el: t, start: i(this)}
                });
                o = function () {
                    n.each(r, function (n, i) {
                        t[i] && e[i + "Class"](t[i])
                    })
                };
                o();
                u = u.map(function () {
                    return this.end = i(this.el[0]), this.diff = f(this.start, this.end), this
                });
                e.attr("class", h);
                u = u.map(function () {
                    var i = this, t = n.Deferred(), r = n.extend({}, s, {
                        queue: !1, complete: function () {
                            t.resolve(i)
                        }
                    });
                    return this.el.animate(this.diff, r), t.promise()
                });
                n.when.apply(n, u.get()).done(function () {
                    o();
                    n.each(arguments, function () {
                        var t = this.el;
                        n.each(this.diff, function (n) {
                            t.css(n, "")
                        })
                    });
                    s.complete.call(e[0])
                })
            })
        };
        n.fn.extend({
            addClass: function (t) {
                return function (i, r, u, f) {
                    return r ? n.effects.animateClass.call(this, {add: i}, r, u, f) : t.apply(this, arguments)
                }
            }(n.fn.addClass), removeClass: function (t) {
                return function (i, r, u, f) {
                    return arguments.length > 1 ? n.effects.animateClass.call(this, {remove: i}, r, u, f) : t.apply(this, arguments)
                }
            }(n.fn.removeClass), toggleClass: function (i) {
                return function (r, u, f, e, o) {
                    return typeof u == "boolean" || u === t ? f ? n.effects.animateClass.call(this, u ? {add: r} : {remove: r}, f, e, o) : i.apply(this, arguments) : n.effects.animateClass.call(this, {toggle: r}, u, f, e)
                }
            }(n.fn.toggleClass), switchClass: function (t, i, r, u, f) {
                return n.effects.animateClass.call(this, {add: i, remove: t}, r, u, f)
            }
        })
    }(), function () {
        function r(t, i, r, u) {
            return n.isPlainObject(t) && (i = t, t = t.effect), t = {effect: t}, i == null && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), (typeof i == "number" || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t
        }

        function u(t) {
            return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects.effect[t] ? !0 : n.isFunction(t) ? !0 : typeof t == "object" && !t.effect ? !0 : !1
        }

        n.extend(n.effects, {
            version: "1.10.4", save: function (n, t) {
                for (var r = 0; r < t.length; r++) t[r] !== null && n.data(i + t[r], n[0].style[t[r]])
            }, restore: function (n, r) {
                for (var f, u = 0; u < r.length; u++) r[u] !== null && (f = n.data(i + r[u]), f === t && (f = ""), n.css(r[u], f))
            }, setMode: function (n, t) {
                return t === "toggle" && (t = n.is(":hidden") ? "show" : "hide"), t
            }, getBaseline: function (n, t) {
                var i, r;
                switch (n[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = n[0] / t.height
                }
                switch (n[1]) {
                    case"left":
                        r = 0;
                        break;
                    case"center":
                        r = .5;
                        break;
                    case"right":
                        r = 1;
                        break;
                    default:
                        r = n[1] / t.width
                }
                return {x: r, y: i}
            }, createWrapper: function (t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var i = {width: t.outerWidth(!0), height: t.outerHeight(!0), float: t.css("float")},
                    u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), f = {width: t.width(), height: t.height()}, r = document.activeElement;
                try {
                    r.id
                } catch (e) {
                    r = document.body
                }
                return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).focus(), u = t.parent(), t.css("position") === "static" ? (u.css({position: "relative"}), t.css({position: "relative"})) : (n.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), n.each(["top", "left", "bottom", "right"], function (n, r) {
                    i[r] = t.css(r);
                    isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(f), u.css(i).show()
            }, removeWrapper: function (t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus()), t
            }, setTransition: function (t, i, r, u) {
                return u = u || {}, n.each(i, function (n, i) {
                    var f = t.cssUnit(i);
                    f[0] > 0 && (u[i] = f[0] * r + f[1])
                }), u
            }
        });
        n.fn.extend({
            effect: function () {
                function e(i) {
                    function o() {
                        n.isFunction(e) && e.call(r[0]);
                        n.isFunction(i) && i()
                    }

                    var r = n(this), e = t.complete, u = t.mode;
                    (r.is(":hidden") ? u === "hide" : u === "show") ? (r[u](), o()) : f.call(r[0], t, o)
                }

                var t = r.apply(this, arguments), i = t.mode, u = t.queue, f = n.effects.effect[t.effect];
                return n.fx.off || !f ? i ? this[i](t.duration, t.complete) : this.each(function () {
                    t.complete && t.complete.call(this)
                }) : u === !1 ? this.each(e) : this.queue(u || "fx", e)
            }, show: function (n) {
                return function (t) {
                    if (u(t)) return n.apply(this, arguments);
                    var i = r.apply(this, arguments);
                    return i.mode = "show", this.effect.call(this, i)
                }
            }(n.fn.show), hide: function (n) {
                return function (t) {
                    if (u(t)) return n.apply(this, arguments);
                    var i = r.apply(this, arguments);
                    return i.mode = "hide", this.effect.call(this, i)
                }
            }(n.fn.hide), toggle: function (n) {
                return function (t) {
                    if (u(t) || typeof t == "boolean") return n.apply(this, arguments);
                    var i = r.apply(this, arguments);
                    return i.mode = "toggle", this.effect.call(this, i)
                }
            }(n.fn.toggle), cssUnit: function (t) {
                var i = this.css(t), r = [];
                return n.each(["em", "px", "%", "pt"], function (n, t) {
                    i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                }), r
            }
        })
    }(), function () {
        var t = {};
        n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (n, i) {
            t[i] = function (t) {
                return Math.pow(t, n + 2)
            }
        });
        n.extend(t, {
            Sine: function (n) {
                return 1 - Math.cos(n * Math.PI / 2)
            }, Circ: function (n) {
                return 1 - Math.sqrt(1 - n * n)
            }, Elastic: function (n) {
                return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
            }, Back: function (n) {
                return n * n * (3 * n - 2)
            }, Bounce: function (n) {
                for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11;) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
            }
        });
        n.each(t, function (t, i) {
            n.easing["easeIn" + t] = i;
            n.easing["easeOut" + t] = function (n) {
                return 1 - i(1 - n)
            };
            n.easing["easeInOut" + t] = function (n) {
                return n < .5 ? i(n * 2) / 2 : 1 - i(n * -2 + 2) / 2
            }
        })
    }()
}(jQuery), function (n) {
    var t = /up|down|vertical/, i = /up|left|vertical|horizontal/;
    n.effects.effect.blind = function (r, u) {
        var f = n(this), c = ["position", "top", "bottom", "left", "right", "height", "width"],
            p = n.effects.setMode(f, r.mode || "hide"), w = r.direction || "up", o = t.test(w),
            l = o ? "height" : "width", a = o ? "top" : "left", b = i.test(w), v = {}, y = p === "show", e, s, h;
        f.parent().is(".ui-effects-wrapper") ? n.effects.save(f.parent(), c) : n.effects.save(f, c);
        f.show();
        e = n.effects.createWrapper(f).css({overflow: "hidden"});
        s = e[l]();
        h = parseFloat(e.css(a)) || 0;
        v[l] = y ? s : 0;
        b || (f.css(o ? "bottom" : "right", 0).css(o ? "top" : "left", "auto").css({position: "absolute"}), v[a] = y ? h : s + h);
        y && (e.css(l, 0), b || e.css(a, h + s));
        e.animate(v, {
            duration: r.duration, easing: r.easing, queue: !1, complete: function () {
                p === "hide" && f.hide();
                n.effects.restore(f, c);
                n.effects.removeWrapper(f);
                u()
            }
        })
    }
}(jQuery), function (n) {
    n.effects.effect.bounce = function (t, i) {
        var r = n(this), v = ["position", "top", "bottom", "left", "right", "height", "width"],
            k = n.effects.setMode(r, t.mode || "effect"), f = k === "hide", y = k === "show", h = t.direction || "up",
            u = t.distance, p = t.times || 5, d = p * 2 + (y || f ? 1 : 0), c = t.duration / d, l = t.easing,
            e = h === "up" || h === "down" ? "top" : "left", w = h === "up" || h === "left", b, o, s, a = r.queue(),
            g = a.length;
        for ((y || f) && v.push("opacity"), n.effects.save(r, v), r.show(), n.effects.createWrapper(r), u || (u = r[e === "top" ? "outerHeight" : "outerWidth"]() / 3), y && (s = {opacity: 1}, s[e] = 0, r.css("opacity", 0).css(e, w ? -u * 2 : u * 2).animate(s, c, l)), f && (u = u / Math.pow(2, p - 1)), s = {}, s[e] = 0, b = 0; b < p; b++) o = {}, o[e] = (w ? "-=" : "+=") + u, r.animate(o, c, l).animate(s, c, l), u = f ? u * 2 : u / 2;
        f && (o = {opacity: 0}, o[e] = (w ? "-=" : "+=") + u, r.animate(o, c, l));
        r.queue(function () {
            f && r.hide();
            n.effects.restore(r, v);
            n.effects.removeWrapper(r);
            i()
        });
        g > 1 && a.splice.apply(a, [1, 0].concat(a.splice(g, d + 1)));
        r.dequeue()
    }
}(jQuery), function (n) {
    n.effects.effect.clip = function (t, i) {
        var r = n(this), h = ["position", "top", "bottom", "left", "right", "height", "width"],
            v = n.effects.setMode(r, t.mode || "hide"), f = v === "show", y = t.direction || "vertical",
            c = y === "vertical", o = c ? "height" : "width", l = c ? "top" : "left", s = {}, a, u, e;
        n.effects.save(r, h);
        r.show();
        a = n.effects.createWrapper(r).css({overflow: "hidden"});
        u = r[0].tagName === "IMG" ? a : r;
        e = u[o]();
        f && (u.css(o, 0), u.css(l, e / 2));
        s[o] = f ? e : 0;
        s[l] = f ? 0 : e / 2;
        u.animate(s, {
            queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                f || r.hide();
                n.effects.restore(r, h);
                n.effects.removeWrapper(r);
                i()
            }
        })
    }
}(jQuery), function (n) {
    n.effects.effect.drop = function (t, i) {
        var r = n(this), h = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            c = n.effects.setMode(r, t.mode || "hide"), e = c === "show", u = t.direction || "left",
            o = u === "up" || u === "down" ? "top" : "left", s = u === "up" || u === "left" ? "pos" : "neg",
            l = {opacity: e ? 1 : 0}, f;
        n.effects.save(r, h);
        r.show();
        n.effects.createWrapper(r);
        f = t.distance || r[o === "top" ? "outerHeight" : "outerWidth"](!0) / 2;
        e && r.css("opacity", 0).css(o, s === "pos" ? -f : f);
        l[o] = (e ? s === "pos" ? "+=" : "-=" : s === "pos" ? "-=" : "+=") + f;
        r.animate(l, {
            queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                c === "hide" && r.hide();
                n.effects.restore(r, h);
                n.effects.removeWrapper(r);
                i()
            }
        })
    }
}(jQuery), function (n) {
    n.effects.effect.explode = function (t, i) {
        function k() {
            l.push(this);
            l.length === o * c && d()
        }

        function d() {
            r.css({visibility: "visible"});
            n(l).remove();
            u || r.hide();
            i()
        }

        for (var o = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = o, r = n(this), b = n.effects.setMode(r, t.mode || "hide"), u = b === "show", w = r.show().css("visibility", "hidden").offset(), s = Math.ceil(r.outerWidth() / c), h = Math.ceil(r.outerHeight() / o), l = [], e, a, v, y, p, f = 0; f < o; f++) for (v = w.top + f * h, p = f - (o - 1) / 2, e = 0; e < c; e++) a = w.left + e * s, y = e - (c - 1) / 2, r.clone().appendTo("body").wrap("<div><\/div>").css({
            position: "absolute",
            visibility: "visible",
            left: -e * s,
            top: -f * h
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: s,
            height: h,
            left: a + (u ? y * s : 0),
            top: v + (u ? p * h : 0),
            opacity: u ? 0 : 1
        }).animate({
            left: a + (u ? 0 : y * s),
            top: v + (u ? 0 : p * h),
            opacity: u ? 1 : 0
        }, t.duration || 500, t.easing, k)
    }
}(jQuery), function (n) {
    n.effects.effect.fade = function (t, i) {
        var r = n(this), u = n.effects.setMode(r, t.mode || "toggle");
        r.animate({opacity: u}, {queue: !1, duration: t.duration, easing: t.easing, complete: i})
    }
}(jQuery), function (n) {
    n.effects.effect.fold = function (t, i) {
        var r = n(this), s = ["position", "top", "bottom", "left", "right", "height", "width"],
            h = n.effects.setMode(r, t.mode || "hide"), e = h === "show", c = h === "hide", f = t.size || 15,
            l = /([0-9]+)%/.exec(f), a = !!t.horizFirst, v = e !== a, y = v ? ["width", "height"] : ["height", "width"],
            p = t.duration / 2, u, o, w = {}, b = {};
        n.effects.save(r, s);
        r.show();
        u = n.effects.createWrapper(r).css({overflow: "hidden"});
        o = v ? [u.width(), u.height()] : [u.height(), u.width()];
        l && (f = parseInt(l[1], 10) / 100 * o[c ? 0 : 1]);
        e && u.css(a ? {height: 0, width: f} : {height: f, width: 0});
        w[y[0]] = e ? o[0] : f;
        b[y[1]] = e ? o[1] : 0;
        u.animate(w, p, t.easing).animate(b, p, t.easing, function () {
            c && r.hide();
            n.effects.restore(r, s);
            n.effects.removeWrapper(r);
            i()
        })
    }
}(jQuery), function (n) {
    n.effects.effect.highlight = function (t, i) {
        var r = n(this), u = ["backgroundImage", "backgroundColor", "opacity"],
            f = n.effects.setMode(r, t.mode || "show"), e = {backgroundColor: r.css("backgroundColor")};
        f === "hide" && (e.opacity = 0);
        n.effects.save(r, u);
        r.show().css({backgroundImage: "none", backgroundColor: t.color || "#ffff99"}).animate(e, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                f === "hide" && r.hide();
                n.effects.restore(r, u);
                i()
            }
        })
    }
}(jQuery), function (n) {
    n.effects.effect.pulsate = function (t, i) {
        var r = n(this), e = n.effects.setMode(r, t.mode || "show"), h = e === "show", a = e === "hide",
            v = h || e === "hide", o = (t.times || 5) * 2 + (v ? 1 : 0), c = t.duration / o, u = 0, f = r.queue(),
            l = f.length, s;
        for ((h || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1), s = 1; s < o; s++) r.animate({opacity: u}, c, t.easing), u = 1 - u;
        r.animate({opacity: u}, c, t.easing);
        r.queue(function () {
            a && r.hide();
            i()
        });
        l > 1 && f.splice.apply(f, [1, 0].concat(f.splice(l, o + 1)));
        r.dequeue()
    }
}(jQuery), function (n) {
    n.effects.effect.puff = function (t, i) {
        var r = n(this), e = n.effects.setMode(r, t.mode || "hide"), o = e === "hide",
            s = parseInt(t.percent, 10) || 150, f = s / 100,
            u = {height: r.height(), width: r.width(), outerHeight: r.outerHeight(), outerWidth: r.outerWidth()};
        n.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: e,
            complete: i,
            percent: o ? s : 100,
            from: o ? u : {
                height: u.height * f,
                width: u.width * f,
                outerHeight: u.outerHeight * f,
                outerWidth: u.outerWidth * f
            }
        });
        r.effect(t)
    };
    n.effects.effect.scale = function (t, i) {
        var u = n(this), r = n.extend(!0, {}, t), f = n.effects.setMode(u, t.mode || "effect"),
            s = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : f === "hide" ? 0 : 100),
            h = t.direction || "both", c = t.origin,
            e = {height: u.height(), width: u.width(), outerHeight: u.outerHeight(), outerWidth: u.outerWidth()},
            o = {y: h !== "horizontal" ? s / 100 : 1, x: h !== "vertical" ? s / 100 : 1};
        r.effect = "size";
        r.queue = !1;
        r.complete = i;
        f !== "effect" && (r.origin = c || ["middle", "center"], r.restore = !0);
        r.from = t.from || (f === "show" ? {height: 0, width: 0, outerHeight: 0, outerWidth: 0} : e);
        r.to = {
            height: e.height * o.y,
            width: e.width * o.x,
            outerHeight: e.outerHeight * o.y,
            outerWidth: e.outerWidth * o.x
        };
        r.fade && (f === "show" && (r.from.opacity = 0, r.to.opacity = 1), f === "hide" && (r.from.opacity = 1, r.to.opacity = 0));
        u.effect(r)
    };
    n.effects.effect.size = function (t, i) {
        var f, l, u, r = n(this),
            w = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            a = ["width", "height", "overflow"], v = ["fontSize"],
            e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            h = n.effects.setMode(r, t.mode || "effect"), y = t.restore || h !== "effect", c = t.scale || "both",
            b = t.origin || ["middle", "center"], k = r.css("position"),
            s = y ? w : ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            p = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
        h === "show" && r.show();
        f = {height: r.height(), width: r.width(), outerHeight: r.outerHeight(), outerWidth: r.outerWidth()};
        t.mode === "toggle" && h === "show" ? (r.from = t.to || p, r.to = t.from || f) : (r.from = t.from || (h === "show" ? p : f), r.to = t.to || (h === "hide" ? p : f));
        u = {
            from: {y: r.from.height / f.height, x: r.from.width / f.width},
            to: {y: r.to.height / f.height, x: r.to.width / f.width}
        };
        (c === "box" || c === "both") && (u.from.y !== u.to.y && (s = s.concat(e), r.from = n.effects.setTransition(r, e, u.from.y, r.from), r.to = n.effects.setTransition(r, e, u.to.y, r.to)), u.from.x !== u.to.x && (s = s.concat(o), r.from = n.effects.setTransition(r, o, u.from.x, r.from), r.to = n.effects.setTransition(r, o, u.to.x, r.to)));
        (c === "content" || c === "both") && u.from.y !== u.to.y && (s = s.concat(v).concat(a), r.from = n.effects.setTransition(r, v, u.from.y, r.from), r.to = n.effects.setTransition(r, v, u.to.y, r.to));
        n.effects.save(r, s);
        r.show();
        n.effects.createWrapper(r);
        r.css("overflow", "hidden").css(r.from);
        b && (l = n.effects.getBaseline(b, f), r.from.top = (f.outerHeight - r.outerHeight()) * l.y, r.from.left = (f.outerWidth - r.outerWidth()) * l.x, r.to.top = (f.outerHeight - r.to.outerHeight) * l.y, r.to.left = (f.outerWidth - r.to.outerWidth) * l.x);
        r.css(r.from);
        (c === "content" || c === "both") && (e = e.concat(["marginTop", "marginBottom"]).concat(v), o = o.concat(["marginLeft", "marginRight"]), a = w.concat(e).concat(o), r.find("*[width]").each(function () {
            var i = n(this),
                r = {height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth()};
            y && n.effects.save(i, a);
            i.from = {
                height: r.height * u.from.y,
                width: r.width * u.from.x,
                outerHeight: r.outerHeight * u.from.y,
                outerWidth: r.outerWidth * u.from.x
            };
            i.to = {
                height: r.height * u.to.y,
                width: r.width * u.to.x,
                outerHeight: r.height * u.to.y,
                outerWidth: r.width * u.to.x
            };
            u.from.y !== u.to.y && (i.from = n.effects.setTransition(i, e, u.from.y, i.from), i.to = n.effects.setTransition(i, e, u.to.y, i.to));
            u.from.x !== u.to.x && (i.from = n.effects.setTransition(i, o, u.from.x, i.from), i.to = n.effects.setTransition(i, o, u.to.x, i.to));
            i.css(i.from);
            i.animate(i.to, t.duration, t.easing, function () {
                y && n.effects.restore(i, a)
            })
        }));
        r.animate(r.to, {
            queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                r.to.opacity === 0 && r.css("opacity", r.from.opacity);
                h === "hide" && r.hide();
                n.effects.restore(r, s);
                y || (k === "static" ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : n.each(["top", "left"], function (n, t) {
                    r.css(t, function (t, i) {
                        var f = parseInt(i, 10), u = n ? r.to.left : r.to.top;
                        return i === "auto" ? u + "px" : f + u + "px"
                    })
                }));
                n.effects.removeWrapper(r);
                i()
            }
        })
    }
}(jQuery), function (n) {
    n.effects.effect.shake = function (t, i) {
        var r = n(this), v = ["position", "top", "bottom", "left", "right", "height", "width"],
            k = n.effects.setMode(r, t.mode || "effect"), f = t.direction || "left", o = t.distance || 20,
            y = t.times || 3, p = y * 2 + 1, u = Math.round(t.duration / p),
            s = f === "up" || f === "down" ? "top" : "left", h = f === "up" || f === "left", c = {}, l = {}, w = {}, a,
            e = r.queue(), b = e.length;
        for (n.effects.save(r, v), r.show(), n.effects.createWrapper(r), c[s] = (h ? "-=" : "+=") + o, l[s] = (h ? "+=" : "-=") + o * 2, w[s] = (h ? "-=" : "+=") + o * 2, r.animate(c, u, t.easing), a = 1; a < y; a++) r.animate(l, u, t.easing).animate(w, u, t.easing);
        r.animate(l, u, t.easing).animate(c, u / 2, t.easing).queue(function () {
            k === "hide" && r.hide();
            n.effects.restore(r, v);
            n.effects.removeWrapper(r);
            i()
        });
        b > 1 && e.splice.apply(e, [1, 0].concat(e.splice(b, p + 1)));
        r.dequeue()
    }
}(jQuery), function (n) {
    n.effects.effect.slide = function (t, i) {
        var r = n(this), s = ["position", "top", "bottom", "left", "right", "width", "height"],
            h = n.effects.setMode(r, t.mode || "show"), c = h === "show", f = t.direction || "left",
            e = f === "up" || f === "down" ? "top" : "left", o = f === "up" || f === "left", u, l = {};
        n.effects.save(r, s);
        r.show();
        u = t.distance || r[e === "top" ? "outerHeight" : "outerWidth"](!0);
        n.effects.createWrapper(r).css({overflow: "hidden"});
        c && r.css(e, o ? isNaN(u) ? "-" + u : -u : u);
        l[e] = (c ? o ? "+=" : "-=" : o ? "-=" : "+=") + u;
        r.animate(l, {
            queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                h === "hide" && r.hide();
                n.effects.restore(r, s);
                n.effects.removeWrapper(r);
                i()
            }
        })
    }
}(jQuery), function (n) {
    n.effects.effect.transfer = function (t, i) {
        var u = n(this), r = n(t.to), f = r.css("position") === "fixed", e = n("body"), o = f ? e.scrollTop() : 0,
            s = f ? e.scrollLeft() : 0, h = r.offset(),
            l = {top: h.top - o, left: h.left - s, height: r.innerHeight(), width: r.innerWidth()}, c = u.offset(),
            a = n("<div class='ui-effects-transfer'><\/div>").appendTo(document.body).addClass(t.className).css({
                top: c.top - o,
                left: c.left - s,
                height: u.innerHeight(),
                width: u.innerWidth(),
                position: f ? "fixed" : "absolute"
            }).animate(l, t.duration, t.easing, function () {
                a.remove();
                i()
            })
    }
}(jQuery), function (n) {
    n.widget("ui.menu", {
        version: "1.10.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-carat-1-e"},
            menus: "ul",
            position: {my: "left top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, n.proxy(function (n) {
                this.options.disabled && n.preventDefault()
            }, this));
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
            this._on({
                "mousedown .ui-menu-item > a": function (n) {
                    n.preventDefault()
                }, "click .ui-state-disabled > a": function (n) {
                    n.preventDefault()
                }, "click .ui-menu-item:has(a)": function (t) {
                    var i = n(t.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (t) {
                    var i = n(t.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active");
                    this.focus(t, i)
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (n, t) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(n, i)
                }, blur: function (t) {
                    this._delay(function () {
                        n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                }, keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function (t) {
                    n(t.target).closest(".ui-menu").length || this.collapseAll(t);
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var t = n(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (t) {
            function s(n) {
                return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            var i, f, r, e, u, o = !0;
            switch (t.keyCode) {
                case n.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case n.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case n.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case n.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case n.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case n.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case n.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case n.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case n.ui.keyCode.ENTER:
                case n.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case n.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    o = !1;
                    f = this.previousFilter || "";
                    r = String.fromCharCode(t.keyCode);
                    e = !1;
                    clearTimeout(this.filterTimer);
                    r === f ? e = !0 : r = f + r;
                    u = new RegExp("^" + s(r), "i");
                    i = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return u.test(n(this).children("a").text())
                    });
                    i = e && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i;
                    i.length || (r = String.fromCharCode(t.keyCode), u = new RegExp("^" + s(r), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return u.test(n(this).children("a").text())
                    }));
                    i.length ? (this.focus(t, i), i.length > 1 ? (this.previousFilter = r, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            o && t.preventDefault()
        },
        _activate: function (n) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(n) : this.select(n))
        },
        refresh: function () {
            var t, r = this.options.icons.submenu, i = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
            i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var t = n(this), i = t.prev("a"),
                    u = n("<span>").addClass("ui-menu-icon ui-icon " + r).data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(u);
                t.attr("aria-labelledby", i.attr("id"))
            });
            t = i.add(this.element);
            t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            t.children(":not(.ui-menu-item)").each(function () {
                var t = n(this);
                /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
            });
            t.children(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (n, t) {
            n === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu);
            this._super(n, t)
        },
        focus: function (n, t) {
            var i, r;
            this.blur(n, n && n.type === "focus");
            this._scrollIntoView(t);
            this.active = t.first();
            r = this.active.children("a").addClass("ui-state-focus");
            this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
            n && n.type === "keydown" ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay);
            i = t.children(".ui-menu");
            i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
            this.activeMenu = t.parent();
            this._trigger("focus", n, {item: t})
        },
        _scrollIntoView: function (t) {
            var e, o, i, r, u, f;
            this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.height(), i < 0 ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
        },
        blur: function (n, t) {
            (t || clearTimeout(this.timer), this.active) && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", n, {item: this.active}))
        },
        _startOpening: function (n) {
            (clearTimeout(this.timer), n.attr("aria-hidden") === "true") && (this.timer = this._delay(function () {
                this._close();
                this._open(n)
            }, this.delay))
        },
        _open: function (t) {
            var i = n.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (t, i) {
            clearTimeout(this.timer);
            this.timer = this._delay(function () {
                var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element);
                this._close(r);
                this.blur(t);
                this.activeMenu = r
            }, this.delay)
        },
        _close: function (n) {
            n || (n = this.active ? this.active.parent() : this.element);
            n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (n) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(n, t))
        },
        expand: function (n) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()), this._delay(function () {
                this.focus(n, t)
            }))
        },
        next: function (n) {
            this._move("next", "first", n)
        },
        previous: function (n) {
            this._move("prev", "last", n)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (n, t, i) {
            var r;
            this.active && (r = n === "first" || n === "last" ? this.active[n === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0));
            r && r.length && this.active || (r = this.activeMenu.children(".ui-menu-item")[t]());
            this.focus(i, r)
        },
        nextPage: function (t) {
            var i, r, u;
            if (!this.active) {
                this.next(t);
                return
            }
            this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = n(this), i.offset().top - r - u < 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))
        },
        previousPage: function (t) {
            var i, r, u;
            if (!this.active) {
                this.next(t);
                return
            }
            this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = n(this), i.offset().top - r + u > 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first()))
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (t) {
            this.active = this.active || n(t.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(t, !0);
            this._trigger("select", t, i)
        }
    })
}(jQuery), function (n, t) {
    n.widget("ui.progressbar", {
        version: "1.10.4", options: {max: 100, value: 0, change: null, complete: null}, min: 0, _create: function () {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);
            this._refreshValue()
        }, _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove()
        }, value: function (n) {
            if (n === t) return this.options.value;
            this.options.value = this._constrainedValue(n);
            this._refreshValue()
        }, _constrainedValue: function (n) {
            return n === t && (n = this.options.value), this.indeterminate = n === !1, typeof n != "number" && (n = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
        }, _setOptions: function (n) {
            var t = n.value;
            delete n.value;
            this._super(n);
            this.options.value = this._constrainedValue(t);
            this._refreshValue()
        }, _setOption: function (n, t) {
            n === "max" && (t = Math.max(this.min, t));
            this._super(n, t)
        }, _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        }, _refreshValue: function () {
            var t = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%");
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = n("<div class='ui-progressbar-overlay'><\/div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
            this.oldValue !== t && (this.oldValue = t, this._trigger("change"));
            t === this.options.max && this._trigger("complete")
        }
    })
}(jQuery), function (n) {
    function i(n) {
        return parseInt(n, 10) || 0
    }

    function t(n) {
        return !isNaN(parseInt(n, 10))
    }

    n.widget("ui.resizable", n.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function () {
            var e, f, r, i, o, u = this, t = this.options;
            if (this.element.addClass("ui-resizable"), n.extend(this, {
                _aspectRatio: !!t.aspectRatio,
                aspectRatio: t.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this.handles.constructor === String) for (this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, f = 0; f < e.length; f++) r = n.trim(e[f]), o = "ui-resizable-" + r, i = n("<div class='ui-resizable-handle " + o + "'><\/div>"), i.css({zIndex: t.zIndex}), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i);
            this._renderAxis = function (t) {
                var i, r, u, f;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = n(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element), f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(u, f), this._proportionallyResize()), !n(this.handles[i]).length
            };
            this._renderAxis(this.element);
            this._handles = n(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function () {
                u.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), u.axis = i && i[1] ? i[1] : "se")
            });
            t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                t.disabled || (n(this).removeClass("ui-resizable-autohide"), u._handles.show())
            }).mouseleave(function () {
                t.disabled || u.resizing || (n(this).addClass("ui-resizable-autohide"), u._handles.hide())
            }));
            this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t, i = function (t) {
                n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var r, i, u = !1;
            for (r in this.handles) i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0);
            return !this.options.disabled && u
        },
        _mouseStart: function (t) {
            var f, e, o, u = this.options, s = this.element.position(), r = this.element;
            return this.resizing = !0, /absolute/.test(r.css("position")) ? r.css({
                position: "absolute",
                top: r.css("top"),
                left: r.css("left")
            }) : r.is(".ui-draggable") && r.css({
                position: "absolute",
                top: s.top,
                left: s.left
            }), this._renderProxy(), f = i(this.helper.css("left")), e = i(this.helper.css("top")), u.containment && (f += n(u.containment).scrollLeft() || 0, e += n(u.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: f,
                top: e
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {width: r.width(), height: r.height()}, this.originalSize = this._helper ? {
                width: r.outerWidth(),
                height: r.outerHeight()
            } : {width: r.width(), height: r.height()}, this.originalPosition = {
                left: f,
                top: e
            }, this.sizeDiff = {
                width: r.outerWidth() - r.width(),
                height: r.outerHeight() - r.height()
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = typeof u.aspectRatio == "number" ? u.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", o === "auto" ? this.axis + "-resize" : o), r.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (t) {
            var i, e = this.helper, r = {}, u = this.originalMousePosition, o = this.axis, s = this.position.top,
                h = this.position.left, c = this.size.width, l = this.size.height, a = t.pageX - u.left || 0,
                v = t.pageY - u.top || 0, f = this._change[o];
            return f ? (i = f.apply(this, [t, a, v]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== s && (r.top = this.position.top + "px"), this.position.left !== h && (r.left = this.position.left + "px"), this.size.width !== c && (r.width = this.size.width + "px"), this.size.height !== l && (r.height = this.size.height + "px"), e.css(r), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || this._trigger("resize", t, this.ui()), !1) : !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var r, u, f, e, o, s, h, c = this.options, i = this;
            return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = {
                width: i.helper.width() - e,
                height: i.helper.height() - f
            }, s = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, {
                top: h,
                left: s
            })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (n) {
            var u, f, e, o, i, r = this.options;
            i = {
                minWidth: t(r.minWidth) ? r.minWidth : 0,
                maxWidth: t(r.maxWidth) ? r.maxWidth : Infinity,
                minHeight: t(r.minHeight) ? r.minHeight : 0,
                maxHeight: t(r.maxHeight) ? r.maxHeight : Infinity
            };
            (this._aspectRatio || n) && (u = i.minHeight * this.aspectRatio, e = i.minWidth / this.aspectRatio, f = i.maxHeight * this.aspectRatio, o = i.maxWidth / this.aspectRatio, u > i.minWidth && (i.minWidth = u), e > i.minHeight && (i.minHeight = e), f < i.maxWidth && (i.maxWidth = f), o < i.maxHeight && (i.maxHeight = o));
            this._vBoundaries = i
        },
        _updateCache: function (n) {
            this.offset = this.helper.offset();
            t(n.left) && (this.position.left = n.left);
            t(n.top) && (this.position.top = n.top);
            t(n.height) && (this.size.height = n.height);
            t(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function (n) {
            var i = this.position, r = this.size, u = this.axis;
            return t(n.height) ? n.width = n.height * this.aspectRatio : t(n.width) && (n.height = n.width / this.aspectRatio), u === "sw" && (n.left = i.left + (r.width - n.width), n.top = null), u === "nw" && (n.top = i.top + (r.height - n.height), n.left = i.left + (r.width - n.width)), n
        },
        _respectSize: function (n) {
            var i = this._vBoundaries, r = this.axis, u = t(n.width) && i.maxWidth && i.maxWidth < n.width,
                f = t(n.height) && i.maxHeight && i.maxHeight < n.height,
                e = t(n.width) && i.minWidth && i.minWidth > n.width,
                o = t(n.height) && i.minHeight && i.minHeight > n.height,
                s = this.originalPosition.left + this.originalSize.width, h = this.position.top + this.size.height,
                c = /sw|nw|w/.test(r), l = /nw|ne|n/.test(r);
            return e && (n.width = i.minWidth), o && (n.height = i.minHeight), u && (n.width = i.maxWidth), f && (n.height = i.maxHeight), e && c && (n.left = s - i.minWidth), u && c && (n.left = s - i.maxWidth), o && l && (n.top = h - i.minHeight), f && l && (n.top = h - i.maxHeight), n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null, n
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) for (var t, r, u, n, f = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                if (n = this._proportionallyResizeElements[i], !this.borderDif) for (this.borderDif = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; t < r.length; t++) this.borderDif[t] = (parseInt(r[t], 10) || 0) + (parseInt(u[t], 10) || 0);
                n.css({
                    height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function () {
            var t = this.element, i = this.options;
            this.elementOffset = t.offset();
            this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (n, t) {
                return {width: this.originalSize.width + t}
            }, w: function (n, t) {
                var i = this.originalSize, r = this.originalPosition;
                return {left: r.left + t, width: i.width - t}
            }, n: function (n, t, i) {
                var r = this.originalSize, u = this.originalPosition;
                return {top: u.top + i, height: r.height - i}
            }, s: function (n, t, i) {
                return {height: this.originalSize.height + i}
            }, se: function (t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            }, sw: function (t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }, ne: function (t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            }, nw: function (t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function (t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]);
            t !== "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    n.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
            var i = n(this).data("ui-resizable"), u = i.options, r = i._proportionallyResizeElements,
                f = r.length && /textarea/i.test(r[0].nodeName),
                s = f && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, h = f ? 0 : i.sizeDiff.width,
                c = {width: i.size.width - h, height: i.size.height - s},
                e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, o && e ? {top: o, left: e} : {}), {
                duration: u.animateDuration,
                easing: u.animateEasing,
                step: function () {
                    var u = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    r && r.length && n(r[0]).css({width: u.width, height: u.height});
                    i._updateCache(u);
                    i._propagate("resize", t)
                }
            })
        }
    });
    n.ui.plugin.add("resizable", "containment", {
        start: function () {
            var u, e, o, s, h, c, l, t = n(this).data("ui-resizable"), a = t.options, v = t.element, f = a.containment,
                r = f instanceof n ? f.get(0) : /parent/.test(f) ? v.parent().get(0) : f;
            r && (t.containerElement = n(r), /document/.test(f) || f === document ? (t.containerOffset = {
                left: 0,
                top: 0
            }, t.containerPosition = {left: 0, top: 0}, t.parentData = {
                element: n(document),
                left: 0,
                top: 0,
                width: n(document).width(),
                height: n(document).height() || document.body.parentNode.scrollHeight
            }) : (u = n(r), e = [], n(["Top", "Right", "Left", "Bottom"]).each(function (n, t) {
                e[n] = i(u.css("padding" + t))
            }), t.containerOffset = u.offset(), t.containerPosition = u.position(), t.containerSize = {
                height: u.innerHeight() - e[3],
                width: u.innerWidth() - e[1]
            }, o = t.containerOffset, s = t.containerSize.height, h = t.containerSize.width, c = n.ui.hasScroll(r, "left") ? r.scrollWidth : h, l = n.ui.hasScroll(r) ? r.scrollHeight : s, t.parentData = {
                element: r,
                left: o.left,
                top: o.top,
                width: c,
                height: l
            }))
        }, resize: function (t) {
            var f, o, s, h, i = n(this).data("ui-resizable"), a = i.options, r = i.containerOffset, c = i.position,
                e = i._aspectRatio || t.shiftKey, u = {top: 0, left: 0}, l = i.containerElement;
            l[0] !== document && /static/.test(l.css("position")) && (u = r);
            c.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - u.left), e && (i.size.height = i.size.width / i.aspectRatio), i.position.left = a.helper ? r.left : 0);
            c.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), e && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? r.top : 0);
            i.offset.left = i.parentData.left + i.position.left;
            i.offset.top = i.parentData.top + i.position.top;
            f = Math.abs((i._helper ? i.offset.left - u.left : i.offset.left - u.left) + i.sizeDiff.width);
            o = Math.abs((i._helper ? i.offset.top - u.top : i.offset.top - r.top) + i.sizeDiff.height);
            s = i.containerElement.get(0) === i.element.parent().get(0);
            h = /relative|absolute/.test(i.containerElement.css("position"));
            s && h && (f -= Math.abs(i.parentData.left));
            f + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - f, e && (i.size.height = i.size.width / i.aspectRatio));
            o + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - o, e && (i.size.width = i.size.height * i.aspectRatio))
        }, stop: function () {
            var t = n(this).data("ui-resizable"), r = t.options, u = t.containerOffset, f = t.containerPosition,
                e = t.containerElement, i = n(t.helper), o = i.offset(), s = i.outerWidth() - t.sizeDiff.width,
                h = i.outerHeight() - t.sizeDiff.height;
            t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            });
            t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            })
        }
    });
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var r = n(this).data("ui-resizable"), t = r.options, i = function (t) {
                n(t).each(function () {
                    var t = n(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            typeof t.alsoResize != "object" || t.alsoResize.parentNode ? i(t.alsoResize) : t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], i(t.alsoResize)) : n.each(t.alsoResize, function (n) {
                i(n)
            })
        }, resize: function (t, i) {
            var r = n(this).data("ui-resizable"), u = r.options, f = r.originalSize, e = r.originalPosition, s = {
                height: r.size.height - f.height || 0,
                width: r.size.width - f.width || 0,
                top: r.position.top - e.top || 0,
                left: r.position.left - e.left || 0
            }, o = function (t, r) {
                n(t).each(function () {
                    var t = n(this), f = n(this).data("ui-resizable-alsoresize"), u = {},
                        e = r && r.length ? r : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    n.each(e, function (n, t) {
                        var i = (f[t] || 0) + (s[t] || 0);
                        i && i >= 0 && (u[t] = i || null)
                    });
                    t.css(u)
                })
            };
            typeof u.alsoResize != "object" || u.alsoResize.nodeType ? o(u.alsoResize) : n.each(u.alsoResize, function (n, t) {
                o(n, t)
            })
        }, stop: function () {
            n(this).removeData("resizable-alsoresize")
        }
    });
    n.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = n(this).data("ui-resizable"), i = t.options, r = t.size;
            t.ghost = t.originalElement.clone();
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : "");
            t.ghost.appendTo(t.helper)
        }, resize: function () {
            var t = n(this).data("ui-resizable");
            t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
        }, stop: function () {
            var t = n(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    });
    n.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t = n(this).data("ui-resizable"), i = t.options, v = t.size, o = t.originalSize, s = t.originalPosition,
                h = t.axis, c = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid, f = c[0] || 1, e = c[1] || 1,
                l = Math.round((v.width - o.width) / f) * f, a = Math.round((v.height - o.height) / e) * e,
                r = o.width + l, u = o.height + a, y = i.maxWidth && i.maxWidth < r, p = i.maxHeight && i.maxHeight < u,
                w = i.minWidth && i.minWidth > r, b = i.minHeight && i.minHeight > u;
            i.grid = c;
            w && (r = r + f);
            b && (u = u + e);
            y && (r = r - f);
            p && (u = u - e);
            /^(se|s|e)$/.test(h) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(h) ? (t.size.width = r, t.size.height = u, t.position.top = s.top - a) : /^(sw)$/.test(h) ? (t.size.width = r, t.size.height = u, t.position.left = s.left - l) : (u - e > 0 ? (t.size.height = u, t.position.top = s.top - a) : (t.size.height = e, t.position.top = s.top + o.height - e), r - f > 0 ? (t.size.width = r, t.position.left = s.left - l) : (t.size.width = f, t.position.left = s.left + o.width - f))
        }
    })
}(jQuery), function (n) {
    n.widget("ui.selectable", n.ui.mouse, {
        version: "1.10.4",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var t, i = this;
            this.element.addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function () {
                t = n(i.options.filter, i.element[0]);
                t.addClass("ui-selectee");
                t.each(function () {
                    var t = n(this), i = t.offset();
                    n.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this.selectees = t.addClass("ui-selectee");
            this._mouseInit();
            this.helper = n("<div class='ui-selectable-helper'><\/div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy()
        },
        _mouseStart: function (t) {
            var i = this, r = this.options;
            (this.opos = [t.pageX, t.pageY], this.options.disabled) || (this.selectees = n(r.filter, this.element[0]), this._trigger("start", t), n(r.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var r = n.data(this, "selectable-item");
                r.startselected = !0;
                t.metaKey || t.ctrlKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, i._trigger("unselecting", t, {unselecting: r.element}))
            }), n(t.target).parents().addBack().each(function () {
                var u, r = n.data(this, "selectable-item");
                if (r) return u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"), r.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"), r.unselecting = !u, r.selecting = u, r.selected = u, u ? i._trigger("selecting", t, {selecting: r.element}) : i._trigger("unselecting", t, {unselecting: r.element}), !1
            }))
        },
        _mouseDrag: function (t) {
            if (this.dragged = !0, !this.options.disabled) {
                var e, o = this, s = this.options, i = this.opos[0], r = this.opos[1], u = t.pageX, f = t.pageY;
                return i > u && (e = u, u = i, i = e), r > f && (e = f, f = r, r = e), this.helper.css({
                    left: i,
                    top: r,
                    width: u - i,
                    height: f - r
                }), this.selectees.each(function () {
                    var e = n.data(this, "selectable-item"), h = !1;
                    e && e.element !== o.element[0] && (s.tolerance === "touch" ? h = !(e.left > u || e.right < i || e.top > f || e.bottom < r) : s.tolerance === "fit" && (h = e.left > i && e.right < u && e.top > r && e.bottom < f), h ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, o._trigger("selecting", t, {selecting: e.element}))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), o._trigger("unselecting", t, {unselecting: e.element}))), e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, o._trigger("unselecting", t, {unselecting: e.element})))))
                }), !1
            }
        },
        _mouseStop: function (t) {
            var i = this;
            return this.dragged = !1, n(".ui-unselecting", this.element[0]).each(function () {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting");
                r.unselecting = !1;
                r.startselected = !1;
                i._trigger("unselected", t, {unselected: r.element})
            }), n(".ui-selecting", this.element[0]).each(function () {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected");
                r.selecting = !1;
                r.selected = !0;
                r.startselected = !0;
                i._trigger("selected", t, {selected: r.element})
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    })
}(jQuery), function (n) {
    var t = 5;
    n.widget("ui.slider", n.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._keySliding = !1;
            this._mouseSliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = !1
        },
        _refresh: function () {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function () {
            var r, i, u = this.options,
                t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), f = [];
            for (i = u.values && u.values.length || 1, t.length > i && (t.slice(i).remove(), t = t.slice(0, i)), r = t.length; r < i; r++) f.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'><\/a>");
            this.handles = t.add(n(f.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function (t) {
                n(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function () {
            var t = this.options, i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = n("<div><\/div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            var n = this.handles.add(this.range).filter("a");
            this._off(n);
            this._on(n, this._handleEvents);
            this._hoverable(n);
            this._focusable(n)
        },
        _destroy: function () {
            this.handles.remove();
            this.range && this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var s, f, r, i, u, h, e, c, o = this, l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), s = {
                x: t.pageX,
                y: t.pageY
            }, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                var e = Math.abs(f - o.values(t));
                (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t)
            }), h = this._start(t, u), h === !1) ? !1 : (this._mouseSliding = !0, this._handleIndex = u, i.addClass("ui-state-active").focus(), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - e.left - i.width() / 2,
                top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0)
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (n) {
            var t = {x: n.pageX, y: n.pageY}, i = this._normValueFromMouse(t);
            return this._slide(n, this._handleIndex, i), !1
        },
        _mouseStop: function (n) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (n) {
            var i, r, t, u, f;
            return this.orientation === "horizontal" ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), t < 0 && (t = 0), this.orientation === "vertical" && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f)
        },
        _start: function (n, t) {
            var i = {handle: this.handles[t], value: this.value()};
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", n, i)
        },
        _slide: function (n, t, i) {
            var r, f, u;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > r || t === 1 && i < r) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i,
                values: f
            }), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i))) : i !== this.value() && (u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i
            }), u !== !1 && this.value(i))
        },
        _stop: function (n, t) {
            var i = {handle: this.handles[t], value: this.value()};
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
            this._trigger("stop", n, i)
        },
        _change: function (n, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {handle: this.handles[t], value: this.value()};
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
                this._lastChangedValue = t;
                this._trigger("change", n, i)
            }
        },
        value: function (n) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(n);
                this._refreshValue();
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function (t, i) {
            var u, f, r;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(i);
                this._refreshValue();
                this._change(null, t);
                return
            }
            if (arguments.length) if (n.isArray(arguments[0])) {
                for (u = this.options.values, f = arguments[0], r = 0; r < u.length; r += 1) u[r] = this._trimAlignValue(f[r]), this._change(null, r);
                this._refreshValue()
            } else return this.options.values && this.options.values.length ? this._values(t) : this.value(); else return this._values()
        },
        _setOption: function (t, i) {
            var r, u = 0;
            t === "range" && this.options.range === !0 && (i === "min" ? (this.options.value = this._values(0), this.options.values = null) : i === "max" && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null));
            n.isArray(this.options.values) && (u = this.options.values.length);
            n.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
                case"orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    break;
                case"value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), r = 0; r < u; r += 1) this._change(null, r);
                    this._animateOff = !1;
                    break;
                case"min":
                case"max":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0;
                    this._refresh();
                    this._animateOff = !1
            }
        },
        _value: function () {
            var n = this.options.value;
            return this._trimAlignValue(n)
        },
        _values: function (n) {
            var r, t, i;
            if (arguments.length) return r = this.options.values[n], this._trimAlignValue(r);
            if (this.options.values && this.options.values.length) {
                for (t = this.options.values.slice(), i = 0; i < t.length; i += 1) t[i] = this._trimAlignValue(t[i]);
                return t
            }
            return []
        },
        _trimAlignValue: function (n) {
            if (n <= this._valueMin()) return this._valueMin();
            if (n >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1, i = (n - this._valueMin()) % t, r = n - i;
            return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var s, t, c, f, h, e = this.options.range, i = this.options, r = this,
                u = this._animateOff ? !1 : i.animate, o = {};
            this.options.values && this.options.values.length ? this.handles.each(function (f) {
                t = (r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100;
                o[r.orientation === "horizontal" ? "left" : "bottom"] = t + "%";
                n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
                r.options.range === !0 && (r.orientation === "horizontal" ? (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({left: t + "%"}, i.animate), f === 1 && r.range[u ? "animate" : "css"]({width: t - s + "%"}, {
                    queue: !1,
                    duration: i.animate
                })) : (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({bottom: t + "%"}, i.animate), f === 1 && r.range[u ? "animate" : "css"]({height: t - s + "%"}, {
                    queue: !1,
                    duration: i.animate
                })));
                s = t
            }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? (c - f) / (h - f) * 100 : 0, o[this.orientation === "horizontal" ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({width: t + "%"}, i.animate), e === "max" && this.orientation === "horizontal" && this.range[u ? "animate" : "css"]({width: 100 - t + "%"}, {
                queue: !1,
                duration: i.animate
            }), e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({height: t + "%"}, i.animate), e === "max" && this.orientation === "vertical" && this.range[u ? "animate" : "css"]({height: 100 - t + "%"}, {
                queue: !1,
                duration: i.animate
            }))
        },
        _handleEvents: {
            keydown: function (i) {
                var o, u, r, f, e = n(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_UP:
                    case n.ui.keyCode.PAGE_DOWN:
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, n(i.target).addClass("ui-state-active"), o = this._start(i, e), o === !1)) return
                }
                f = this.options.step;
                u = this.options.values && this.options.values.length ? r = this.values(e) : r = this.value();
                switch (i.keyCode) {
                    case n.ui.keyCode.HOME:
                        r = this._valueMin();
                        break;
                    case n.ui.keyCode.END:
                        r = this._valueMax();
                        break;
                    case n.ui.keyCode.PAGE_UP:
                        r = this._trimAlignValue(u + (this._valueMax() - this._valueMin()) / t);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        r = this._trimAlignValue(u - (this._valueMax() - this._valueMin()) / t);
                        break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                        if (u === this._valueMax()) return;
                        r = this._trimAlignValue(u + f);
                        break;
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (u === this._valueMin()) return;
                        r = this._trimAlignValue(u - f)
                }
                this._slide(i, e, r)
            }, click: function (n) {
                n.preventDefault()
            }, keyup: function (t) {
                var i = n(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), n(t.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery), function (n) {
    function t(n, t, i) {
        return n > t && n < t + i
    }

    function i(n) {
        return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"))
    }

    n.widget("ui.sortable", n.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function () {
            var n = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? n.axis === "x" || i(this.items[0].item) : !1;
            this.offset = this.element.offset();
            this._mouseInit();
            this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();
            for (var n = this.items.length - 1; n >= 0; n--) this.items[n].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (t, i) {
            t === "disabled" ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : n.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (t, i) {
            var r = null, f = !1, u = this;
            return this.reverting ? !1 : this.options.disabled || this.options.type === "static" ? !1 : (this._refreshItems(t), n(t.target).parents().each(function () {
                if (n.data(this, u.widgetName + "-item") === u) return r = n(this), !1
            }), n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)), !r) ? !1 : this.options.handle && !i && (n(this.options.handle, r).find("*").addBack().each(function () {
                this === t.target && (f = !0)
            }), !f) ? !1 : (this.currentItem = r, this._removeCurrentsFromItems(), !0)
        },
        _mouseStart: function (t, i, r) {
            var f, e, u = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, n.extend(this.offset, {
                click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && u.cursor !== "auto" && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", u.cursor), this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r) for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", t, this._uiHash(this));
            return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            var e, u, f, o, i = this.options, r = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)), t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--) if ((u = this.items[e], f = u.item[0], o = this._intersectsWithPointer(u), o) && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[o === 1 ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !n.contains(this.element[0], f) : !0)) {
                if (this.direction = o === 1 ? "down" : "up", this.options.tolerance === "pointer" || this._intersectsWithSides(u)) this._rearrange(t, u); else break;
                this._trigger("change", t, this._uiHash());
                break
            }
            return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, i) {
            if (t) {
                if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
                    var e = this, f = this.placeholder.offset(), r = this.options.axis, u = {};
                    r && r !== "x" || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft));
                    r && r !== "y" || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function () {
                        e._clear(t)
                    })
                } else this._clear(t, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({target: null});
                this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (t) {
            var r = this._getItemsAsjQuery(t && t.connected), i = [];
            return t = t || {}, n(r).each(function () {
                var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
            }), !i.length && t.key && i.push(t.key + "="), i.join("&")
        },
        toArray: function (t) {
            var r = this._getItemsAsjQuery(t && t.connected), i = [];
            return t = t || {}, r.each(function () {
                i.push(n(t.item || this).attr(t.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function (n) {
            var t = this.positionAbs.left, h = t + this.helperProportions.width, i = this.positionAbs.top,
                c = i + this.helperProportions.height, r = n.left, f = r + n.width, u = n.top, e = u + n.height,
                o = this.offset.click.top, s = this.offset.click.left,
                l = this.options.axis === "x" || i + o > u && i + o < e,
                a = this.options.axis === "y" || t + s > r && t + s < f, v = l && a;
            return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? v : r < t + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < f && u < i + this.helperProportions.height / 2 && c - this.helperProportions.height / 2 < e
        },
        _intersectsWithPointer: function (n) {
            var u = this.options.axis === "x" || t(this.positionAbs.top + this.offset.click.top, n.top, n.height),
                f = this.options.axis === "y" || t(this.positionAbs.left + this.offset.click.left, n.left, n.width),
                e = u && f, i = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
            return e ? this.floating ? r && r === "right" || i === "down" ? 2 : 1 : i && (i === "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function (n) {
            var u = t(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height),
                f = t(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width),
                i = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
            return this.floating && r ? r === "right" && f || r === "left" && !f : i && (i === "down" && u || i === "up" && !u)
        },
        _getDragVerticalDirection: function () {
            var n = this.positionAbs.top - this.lastPositionAbs.top;
            return n !== 0 && (n > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var n = this.positionAbs.left - this.lastPositionAbs.left;
            return n !== 0 && (n > 0 ? "right" : "left")
        },
        refresh: function (n) {
            return this._refreshItems(n), this.refreshPositions(), this
        },
        _connectWith: function () {
            var n = this.options;
            return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
        },
        _getItemsAsjQuery: function (t) {
            function h() {
                s.push(this)
            }

            var r, u, e, i, s = [], f = [], o = this._connectWith();
            if (o && t) for (r = o.length - 1; r >= 0; r--) for (e = n(o[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
            for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = f.length - 1; r >= 0; r--) f[r][0].each(h);
            return n(s)
        },
        _removeCurrentsFromItems: function () {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = n.grep(this.items, function (n) {
                for (var i = 0; i < t.length; i++) if (t[i] === n.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (t) {
            this.items = [];
            this.containers = [this];
            var r, u, e, i, o, s, h, l, a = this.items,
                f = [[n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {item: this.currentItem}) : n(this.options.items, this.element), this]],
                c = this._connectWith();
            if (c && this.ready) for (r = c.length - 1; r >= 0; r--) for (e = n(c[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {item: this.currentItem}) : n(i.options.items, i.element), i]), this.containers.push(i));
            for (r = f.length - 1; r >= 0; r--) for (o = f[r][1], s = f[r][0], u = 0, l = s.length; u < l; u++) h = n(s[u]), h.data(this.widgetName + "-item", o), a.push({
                item: h,
                instance: o,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var r, f, u, i = this.items.length - 1; i >= 0; i--) (r = this.items[i], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (t) {
            t = t || this;
            var r, i = t.options;
            i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder, i.placeholder = {
                element: function () {
                    var u = t.currentItem[0].nodeName.toLowerCase(),
                        i = n("<" + u + ">", t.document[0]).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return u === "tr" ? t.currentItem.children().each(function () {
                        n("<td>&#160;<\/td>", t.document[0]).attr("colspan", n(this).attr("colspan") || 1).appendTo(i)
                    }) : u === "img" && i.attr("src", t.currentItem.attr("src")), r || i.css("visibility", "hidden"), i
                }, update: function (n, u) {
                    (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            });
            t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem));
            t.currentItem.after(t.placeholder);
            i.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function (r) {
            for (var f, v, s, l, y, h, o, p, a, c = null, e = null, u = this.containers.length - 1; u >= 0; u--) if (!n.contains(this.currentItem[0], this.containers[u].element[0])) if (this._intersectsWith(this.containers[u].containerCache)) {
                if (c && n.contains(this.containers[u].element[0], c.element[0])) continue;
                c = this.containers[u];
                e = u
            } else this.containers[u].containerCache.over && (this.containers[u]._trigger("out", r, this._uiHash(this)), this.containers[u].containerCache.over = 0);
            if (c) if (this.containers.length === 1) this.containers[e].containerCache.over || (this.containers[e]._trigger("over", r, this._uiHash(this)), this.containers[e].containerCache.over = 1); else {
                for (v = 1e4, s = null, a = c.floating || i(this.currentItem), l = a ? "left" : "top", y = a ? "width" : "height", h = this.positionAbs[l] + this.offset.click[l], f = this.items.length - 1; f >= 0; f--) n.contains(this.containers[e].element[0], this.items[f].item[0]) && this.items[f].item[0] !== this.currentItem[0] && (!a || t(this.positionAbs.top + this.offset.click.top, this.items[f].top, this.items[f].height)) && (o = this.items[f].item.offset()[l], p = !1, Math.abs(o - h) > Math.abs(o + this.items[f][y] - h) && (p = !0, o += this.items[f][y]), Math.abs(o - h) < v && (v = Math.abs(o - h), s = this.items[f], this.direction = p ? "up" : "down"));
                if (!s && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[e]) return;
                s ? this._rearrange(r, s, null, !0) : this._rearrange(r, null, this.containers[e].element, !0);
                this._trigger("change", r, this._uiHash());
                this.containers[e]._trigger("change", r, this._uiHash(this));
                this.currentContainer = this.containers[e];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[e]._trigger("over", r, this._uiHash(this));
                this.containers[e].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var r = this.options,
                i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper === "clone" ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || n(r.appendTo !== "parent" ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {left: +t[0], top: +t[1] || 0});
            "left" in t && (this.offset.click.left = t.left + this.margins.left);
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top" in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition === "absolute" && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition === "relative") {
                var n = this.currentItem.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, r, u, i = this.options;
            i.containment === "parent" && (i.containment = this.helper[0].parentNode);
            (i.containment === "document" || i.containment === "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (n(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
            /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0], r = n(i.containment).offset(), u = n(t).css("overflow") !== "hidden", this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (t, i) {
            i || (i = this.position);
            var r = t === "absolute" ? 1 : -1,
                u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
            }
        },
        _generatePosition: function (t) {
            var r, u, i = this.options, f = t.pageX, e = t.pageY,
                o = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                s = /(html|body)/i.test(o[0].tagName);
            return this.cssPosition !== "relative" || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)), {
                top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function (n, t, i, r) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var u = this.counter;
            this._delay(function () {
                u === this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function (n, t) {
            function u(n, t, i) {
                return function (r) {
                    i._trigger(n, r, t._uiHash(t))
                }
            }

            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && r.push(function (n) {
                this._trigger("receive", n, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !t && r.push(function (n) {
                this._trigger("update", n, this._uiHash())
            }), this !== this.currentContainer && (t || (r.push(function (n) {
                this._trigger("remove", n, this._uiHash())
            }), r.push(function (n) {
                return function (t) {
                    n._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), r.push(function (n) {
                return function (t) {
                    n._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || r.push(u("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(u("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!t) {
                    for (this._trigger("beforeStop", n, this._uiHash()), i = 0; i < r.length; i++) r[i].call(this, n);
                    this._trigger("stop", n, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (t || this._trigger("beforeStop", n, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
                for (i = 0; i < r.length; i++) r[i].call(this, n);
                this._trigger("stop", n, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || n([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    })
}(jQuery), function (n) {
    function t(n) {
        return function () {
            var t = this.element.val();
            n.apply(this, arguments);
            this._refresh();
            t !== this.element.val() && this._trigger("change")
        }
    }

    n.widget("ui.spinner", {
        version: "1.10.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            this.value() !== "" && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var t = {}, i = this.element;
            return n.each(["min", "max", "step"], function (n, r) {
                var u = i.attr(r);
                u !== undefined && u.length && (t[r] = u)
            }), t
        },
        _events: {
            keydown: function (n) {
                this._start(n) && this._keydown(n) && n.preventDefault()
            }, keyup: "_stop", focus: function () {
                this.previous = this.element.val()
            }, blur: function (n) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._stop();
                this._refresh();
                this.previous !== this.element.val() && this._trigger("change", n)
            }, mousewheel: function (n, t) {
                if (t) {
                    if (!this.spinning && !this._start(n)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, n);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(n)
                    }, 100);
                    n.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (t) {
                function r() {
                    var n = this.element[0] === this.document[0].activeElement;
                    n || (this.element.focus(), this.previous = i, this._delay(function () {
                        this.previous = i
                    }))
                }

                var i;
                (i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur;
                    r.call(this)
                }), this._start(t) !== !1) && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) {
                if (n(t.currentTarget).hasClass("ui-state-active")) {
                    if (this._start(t) === !1) return !1;
                    this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                }
            }, "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton");
            this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
            this.buttons.height() > Math.ceil(n.height() * .5) && n.height() > 0 && n.height(n.height());
            this.options.disabled && this.disable()
        },
        _keydown: function (t) {
            var r = this.options, i = n.ui.keyCode;
            switch (t.keyCode) {
                case i.UP:
                    return this._repeat(null, 1, t), !0;
                case i.DOWN:
                    return this._repeat(null, -1, t), !0;
                case i.PAGE_UP:
                    return this._repeat(null, r.page, t), !0;
                case i.PAGE_DOWN:
                    return this._repeat(null, -r.page, t), !0
            }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;<\/span><\/a>"
        },
        _start: function (n) {
            return !this.spinning && this._trigger("start", n) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function (n, t, i) {
            n = n || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function () {
                this._repeat(40, t, i)
            }, n);
            this._spin(t * this.options.step, i)
        },
        _spin: function (n, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1);
            i = this._adjustValue(i + n * this._increment(this.counter));
            this.spinning && this._trigger("spin", t, {value: i}) === !1 || (this._value(i), this.counter++)
        },
        _increment: function (t) {
            var i = this.options.incremental;
            return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function () {
            var n = this._precisionOf(this.options.step);
            return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))), n
        },
        _precisionOf: function (n) {
            var t = n.toString(), i = t.indexOf(".");
            return i === -1 ? 0 : t.length - i - 1
        },
        _adjustValue: function (n) {
            var r, i, t = this.options;
            return (r = t.min !== null ? t.min : 0, i = n - r, i = Math.round(i / t.step) * t.step, n = r + i, n = parseFloat(n.toFixed(this._precision())), t.max !== null && n > t.max) ? t.max : t.min !== null && n < t.min ? t.min : n
        },
        _stop: function (n) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n))
        },
        _setOption: function (n, t) {
            if (n === "culture" || n === "numberFormat") {
                var i = this._parse(this.element.val());
                this.options[n] = t;
                this.element.val(this._format(i));
                return
            }
            (n === "max" || n === "min" || n === "step") && typeof t == "string" && (t = this._parse(t));
            n === "icons" && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down));
            this._super(n, t);
            n === "disabled" && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: t(function (n) {
            this._super(n);
            this._value(this.element.val())
        }),
        _parse: function (n) {
            return typeof n == "string" && n !== "" && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n), n === "" || isNaN(n) ? null : n
        },
        _format: function (n) {
            return n === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function (n, t) {
            var i;
            n !== "" && (i = this._parse(n), i !== null && (t || (i = this._adjustValue(i)), n = this._format(i)));
            this.element.val(n);
            this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function (n) {
            this._stepUp(n)
        }),
        _stepUp: function (n) {
            this._start() && (this._spin((n || 1) * this.options.step), this._stop())
        },
        stepDown: t(function (n) {
            this._stepDown(n)
        }),
        _stepDown: function (n) {
            this._start() && (this._spin((n || 1) * -this.options.step), this._stop())
        },
        pageUp: t(function (n) {
            this._stepUp((n || 1) * this.options.page)
        }),
        pageDown: t(function (n) {
            this._stepDown((n || 1) * this.options.page)
        }),
        value: function (n) {
            if (!arguments.length) return this._parse(this.element.val());
            t(this._value).call(this, n)
        },
        widget: function () {
            return this.uiSpinner
        }
    })
}(jQuery), function (n, t) {
    function f() {
        return ++u
    }

    function r(n) {
        return n = n.cloneNode(!1), n.hash.length > 1 && decodeURIComponent(n.href.replace(i, "")) === decodeURIComponent(location.href.replace(i, ""))
    }

    var u = 0, i = /#.*$/;
    n.widget("ui.tabs", {
        version: "1.10.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function () {
            var i = this, t = this.options;
            this.running = !1;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (t) {
                n(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                n(this).closest("li").is(".ui-state-disabled") && this.blur()
            });
            this._processTabs();
            t.active = this._initialActive();
            n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function (n) {
                return i.tabs.index(n)
            }))).sort());
            this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n();
            this._refresh();
            this.active.length && this.load(t.active)
        },
        _initialActive: function () {
            var t = this.options.active, i = this.options.collapsible, r = location.hash.substring(1);
            return t === null && (r && this.tabs.each(function (i, u) {
                if (n(u).attr("aria-controls") === r) return t = i, !1
            }), t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (t === null || t === -1) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), t === -1 && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : n()}
        },
        _tabKeydown: function (t) {
            var r = n(this.document[0].activeElement).closest("li"), i = this.tabs.index(r), u = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                        i++;
                        break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.LEFT:
                        u = !1;
                        i--;
                        break;
                    case n.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;
                    case n.ui.keyCode.HOME:
                        i = 0;
                        break;
                    case n.ui.keyCode.SPACE:
                        t.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(i);
                        return;
                    case n.ui.keyCode.ENTER:
                        t.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(i === this.options.active ? !1 : i);
                        return;
                    default:
                        return
                }
                t.preventDefault();
                clearTimeout(this.activating);
                i = this._focusNextTab(i, u);
                t.ctrlKey || (r.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function (t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function (t) {
            return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (t, i) {
            function u() {
                return t > r && (t = 0), t < 0 && (t = r), t
            }

            for (var r = this.tabs.length - 1; n.inArray(u(), this.options.disabled) !== -1;) t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function (n, t) {
            return n = this._findNextTab(n, t), this.tabs.eq(n).focus(), n
        },
        _setOption: function (n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            if (n === "disabled") {
                this._setupDisabled(t);
                return
            }
            this._super(n, t);
            n === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0));
            n === "event" && this._setupEvents(t);
            n === "heightStyle" && this._setupHeightStyle(t)
        },
        _tabId: function (n) {
            return n.attr("aria-controls") || "ui-tabs-" + f()
        },
        _sanitizeSelector: function (n) {
            return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var t = this.options, i = this.tablist.children(":has(a[href])");
            t.disabled = n.map(i.filter(".ui-state-disabled"), function (n) {
                return i.index(n)
            });
            this._processTabs();
            t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = n());
            this._refresh()
        },
        _refresh: function () {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({"aria-selected": "false", tabIndex: -1});
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            });
            this.anchors = this.tabs.map(function () {
                return n("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({role: "presentation", tabIndex: -1});
            this.panels = n();
            this.anchors.each(function (i, u) {
                var e, f, s, h = n(u).uniqueId().attr("id"), o = n(u).closest("li"), c = o.attr("aria-controls");
                r(u) ? (e = u.hash, f = t.element.find(t._sanitizeSelector(e))) : (s = t._tabId(o), e = "#" + s, f = t.element.find(e), f.length || (f = t._createPanel(s), f.insertAfter(t.panels[i - 1] || t.tablist)), f.attr("aria-live", "polite"));
                f.length && (t.panels = t.panels.add(f));
                c && o.data("ui-tabs-aria-controls", c);
                o.attr({"aria-controls": e.substring(1), "aria-labelledby": h});
                f.attr("aria-labelledby", h)
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function () {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function (t) {
            return n("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function (t) {
            n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var i = 0, r; r = this.tabs[i]; i++) t === !0 || n.inArray(i, t) !== -1 ? n(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : n(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function (t) {
            var i = {
                click: function (n) {
                    n.preventDefault()
                }
            };
            t && n.each(t.split(" "), function (n, t) {
                i[t] = "_eventHandler"
            });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(this.anchors, i);
            this._on(this.tabs, {keydown: "_tabKeydown"});
            this._on(this.panels, {keydown: "_panelKeydown"});
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (t) {
            var i, r = this.element.parent();
            t === "fill" ? (i = r.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var t = n(this), r = t.css("position");
                r !== "absolute" && r !== "fixed" && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= n(this).outerHeight(!0)
            }), this.panels.each(function () {
                n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : t === "auto" && (i = 0, this.panels.each(function () {
                i = Math.max(i, n(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (t) {
            var u = this.options, r = this.active, c = n(t.currentTarget), i = c.closest("li"), f = i[0] === r[0],
                e = f && u.collapsible, o = e ? n() : this._getPanelForTab(i),
                s = r.length ? this._getPanelForTab(r) : n(),
                h = {oldTab: r, oldPanel: s, newTab: e ? n() : i, newPanel: o};
            (t.preventDefault(), i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1) || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h))
        },
        _toggle: function (t, i) {
            function e() {
                u.running = !1;
                u._trigger("activate", t, i)
            }

            function o() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                r.length && u.options.show ? u._show(r, u.options.show, e) : (r.show(), e())
            }

            var u = this, r = i.newPanel, f = i.oldPanel;
            this.running = !0;
            f.length && this.options.hide ? this._hide(f, this.options.hide, function () {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                o()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), f.hide(), o());
            f.attr({"aria-expanded": "false", "aria-hidden": "true"});
            i.oldTab.attr("aria-selected", "false");
            r.length && f.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function () {
                return n(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1);
            r.attr({"aria-expanded": "true", "aria-hidden": "false"});
            i.newTab.attr({"aria-selected": "true", tabIndex: 0})
        },
        _activate: function (t) {
            var r, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: r,
                currentTarget: r,
                preventDefault: n.noop
            }))
        },
        _findActive: function (t) {
            return t === !1 ? n() : this.tabs.eq(t)
        },
        _getIndex: function (n) {
            return typeof n == "string" && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))), n
        },
        _destroy: function () {
            this.xhr && this.xhr.abort();
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function () {
                n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            });
            this.tabs.each(function () {
                var t = n(this), i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            });
            this.panels.show();
            this.options.heightStyle !== "content" && this.panels.css("height", "")
        },
        enable: function (i) {
            var r = this.options.disabled;
            r !== !1 && (i === t ? r = !1 : (i = this._getIndex(i), r = n.isArray(r) ? n.map(r, function (n) {
                return n !== i ? n : null
            }) : n.map(this.tabs, function (n, t) {
                return t !== i ? t : null
            })), this._setupDisabled(r))
        },
        disable: function (i) {
            var r = this.options.disabled;
            if (r !== !0) {
                if (i === t) r = !0; else {
                    if (i = this._getIndex(i), n.inArray(i, r) !== -1) return;
                    r = n.isArray(r) ? n.merge([i], r).sort() : [i]
                }
                this._setupDisabled(r)
            }
        },
        load: function (t, i) {
            t = this._getIndex(t);
            var f = this, u = this.tabs.eq(t), o = u.find(".ui-tabs-anchor"), e = this._getPanelForTab(u),
                s = {tab: u, panel: e};
            r(o[0]) || (this.xhr = n.ajax(this._ajaxSettings(o, i, s)), this.xhr && this.xhr.statusText !== "canceled" && (u.addClass("ui-tabs-loading"), e.attr("aria-busy", "true"), this.xhr.success(function (n) {
                setTimeout(function () {
                    e.html(n);
                    f._trigger("load", i, s)
                }, 1)
            }).complete(function (n, t) {
                setTimeout(function () {
                    t === "abort" && f.panels.stop(!1, !0);
                    u.removeClass("ui-tabs-loading");
                    e.removeAttr("aria-busy");
                    n === f.xhr && delete f.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function (t, i, r) {
            var u = this;
            return {
                url: t.attr("href"), beforeSend: function (t, f) {
                    return u._trigger("beforeLoad", i, n.extend({jqXHR: t, ajaxSettings: f}, r))
                }
            }
        },
        _getPanelForTab: function (t) {
            var i = n(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
}(jQuery), function (n) {
    function i(t, i) {
        var r = (t.attr("aria-describedby") || "").split(/\s+/);
        r.push(i);
        t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
    }

    function r(t) {
        var u = t.data("ui-tooltip-id"), i = (t.attr("aria-describedby") || "").split(/\s+/), r = n.inArray(u, i);
        r !== -1 && i.splice(r, 1);
        t.removeData("ui-tooltip-id");
        i = n.trim(i.join(" "));
        i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
    }

    var t = 0;
    n.widget("ui.tooltip", {
        version: "1.10.4", options: {
            content: function () {
                var t = n(this).attr("title") || "";
                return n("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        }, _create: function () {
            this._on({mouseover: "open", focusin: "open"});
            this.tooltips = {};
            this.parents = {};
            this.options.disabled && this._disable()
        }, _setOption: function (t, i) {
            var r = this;
            if (t === "disabled") {
                this[i ? "_disable" : "_enable"]();
                this.options[t] = i;
                return
            }
            this._super(t, i);
            t === "content" && n.each(this.tooltips, function (n, t) {
                r._updateContent(t)
            })
        }, _disable: function () {
            var t = this;
            n.each(this.tooltips, function (i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r[0];
                t.close(u, !0)
            });
            this.element.find(this.options.items).addBack().each(function () {
                var t = n(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
            })
        }, _enable: function () {
            this.element.find(this.options.items).addBack().each(function () {
                var t = n(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        }, open: function (t) {
            var r = this, i = n(t ? t.target : this.element).closest(this.options.items);
            i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && t.type === "mouseover" && i.parents().each(function () {
                var t = n(this), i;
                t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0));
                t.attr("title") && (t.uniqueId(), r.parents[this.id] = {
                    element: this,
                    title: t.attr("title")
                }, t.attr("title", ""))
            }), this._updateContent(i, t))
        }, _updateContent: function (n, t) {
            var i, r = this.options.content, u = this, f = t ? t.type : null;
            if (typeof r == "string") return this._open(t, n, r);
            i = r.call(n[0], function (i) {
                n.data("ui-tooltip-open") && u._delay(function () {
                    t && (t.type = f);
                    this._open(t, n, i)
                })
            });
            i && this._open(t, n, i)
        }, _open: function (t, r, u) {
            function s(n) {
                (o.of = n, f.is(":hidden")) || f.position(o)
            }

            var f, e, h, o = n.extend({}, this.options.position);
            if (u) {
                if (f = this._find(r), f.length) {
                    f.find(".ui-tooltip-content").html(u);
                    return
                }
                r.is("[title]") && (t && t.type === "mouseover" ? r.attr("title", "") : r.removeAttr("title"));
                f = this._tooltip(r);
                i(r, f.attr("id"));
                f.find(".ui-tooltip-content").html(u);
                this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {mousemove: s}), s(t)) : f.position(n.extend({of: r}, this.options.position));
                f.hide();
                this._show(f, this.options.show);
                this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
                    f.is(":visible") && (s(o.of), clearInterval(h))
                }, n.fx.interval));
                this._trigger("open", t, {tooltip: f});
                e = {
                    keyup: function (t) {
                        if (t.keyCode === n.ui.keyCode.ESCAPE) {
                            var i = n.Event(t);
                            i.currentTarget = r[0];
                            this.close(i, !0)
                        }
                    }, remove: function () {
                        this._removeTooltip(f)
                    }
                };
                t && t.type !== "mouseover" || (e.mouseleave = "close");
                t && t.type !== "focusin" || (e.focusout = "close");
                this._on(!0, r, e)
            }
        }, close: function (t) {
            var f = this, i = n(t ? t.currentTarget : this.element), u = this._find(i);
            this.closing || (clearInterval(this.delayedShow), i.data("ui-tooltip-title") && i.attr("title", i.data("ui-tooltip-title")), r(i), u.stop(!0), this._hide(u, this.options.hide, function () {
                f._removeTooltip(n(this))
            }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && n.each(this.parents, function (t, i) {
                n(i.element).attr("title", i.title);
                delete f.parents[t]
            }), this.closing = !0, this._trigger("close", t, {tooltip: u}), this.closing = !1)
        }, _tooltip: function (i) {
            var u = "ui-tooltip-" + t++, r = n("<div>").attr({
                id: u,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return n("<div>").addClass("ui-tooltip-content").appendTo(r), r.appendTo(this.document[0].body), this.tooltips[u] = i, r
        }, _find: function (t) {
            var i = t.data("ui-tooltip-id");
            return i ? n("#" + i) : n()
        }, _removeTooltip: function (n) {
            n.remove();
            delete this.tooltips[n.attr("id")]
        }, _destroy: function () {
            var t = this;
            n.each(this.tooltips, function (i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r[0];
                t.close(u, !0);
                n("#" + i).remove();
                r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
            })
        }
    })
}(jQuery), function (n) {
    function r(t, i) {
        var r = new RegExp(n.ui.autocomplete.escapeRegex(i), "i");
        return n.grep(t, function (t) {
            return r.test(n("<div>").html(t.label || t.value || t).text())
        })
    }

    var t = n.ui.autocomplete.prototype, i = t._initSource;
    n.extend(t, {
        _initSource: function () {
            this.options.html && n.isArray(this.options.source) ? this.source = function (n, t) {
                t(r(this.options.source, n.term))
            } : i.call(this)
        }, _renderItem: function (t, i) {
            return n("<li><\/li>").data("item.autocomplete", i).append(n("<a><\/a>")[this.options.html ? "html" : "text"](i.label)).appendTo(t)
        }
    })
}(jQuery), function (n) {
    function i(n, t) {
        for (var i = window, r = (n || "").split("."); i && r.length;) i = i[r.shift()];
        return typeof i == "function" ? i : (t.push(n), Function.constructor.apply(null, t))
    }

    function u(n) {
        return n === "GET" || n === "POST"
    }

    function e(n, t) {
        u(t) || n.setRequestHeader("X-HTTP-Method-Override", t)
    }

    function o(t, i, r) {
        var u;
        r.indexOf("application/x-javascript") === -1 && (u = (t.getAttribute("data-ajax-mode") || "").toUpperCase(), n(t.getAttribute("data-ajax-update")).each(function (t, r) {
            var f;
            switch (u) {
                case"BEFORE":
                    f = r.firstChild;
                    n("<div />").html(i).contents().each(function () {
                        r.insertBefore(this, f)
                    });
                    break;
                case"AFTER":
                    n("<div />").html(i).contents().each(function () {
                        r.appendChild(this)
                    });
                    break;
                default:
                    n(r).html(i)
            }
        }))
    }

    function f(t, r) {
        var s, h, f, c;
        (s = t.getAttribute("data-ajax-confirm"), !s || window.confirm(s)) && (h = n(t.getAttribute("data-ajax-loading")), c = parseInt(t.getAttribute("data-ajax-loading-duration"), 10) || 0, n.extend(r, {
            context: t,
            type: t.getAttribute("data-ajax-method") || undefined,
            url: t.getAttribute("data-ajax-url") || undefined,
            beforeSend: function (n) {
                var r;
                return e(n, f), r = i(t.getAttribute("data-ajax-begin"), ["xhr"]).apply(this, arguments), r !== !1 && h.show(c), r
            },
            complete: function () {
                h.hide(c);
                i(t.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(this, arguments)
            },
            success: function (n, r, u) {
                o(t, n, u.getResponseHeader("Content-Type") || "text/html");
                i(t.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(this, arguments)
            },
            error: i(t.getAttribute("data-ajax-failure"), ["xhr", "status", "error"])
        }), r.data.push({
            name: "X-Requested-With",
            value: "XMLHttpRequest"
        }), f = r.type.toUpperCase(), u(f) || (r.type = "POST", r.data.push({
            name: "X-HTTP-Method-Override",
            value: f
        })), n.ajax(r))
    }

    function s(t) {
        var i = n(t).data(data_validation);
        return !i || !i.validate || i.validate()
    }

    var t = "unobtrusiveAjaxClick", r = "unobtrusiveAjaxClickTarget";
    data_validation = "unobtrusiveValidation";
    n(document).on("click", "a[data-ajax=true]", function (n) {
        n.preventDefault();
        f(this, {url: this.href, type: "GET", data: []})
    });
    n(document).on("click", "form[data-ajax=true] input[type=image]", function (i) {
        var r = i.target.name, u = n(i.target), f = n(u.parents("form")[0]), e = u.offset();
        f.data(t, [{name: r + ".x", value: Math.round(i.pageX - e.left)}, {
            name: r + ".y",
            value: Math.round(i.pageY - e.top)
        }]);
        setTimeout(function () {
            f.removeData(t)
        }, 0)
    });
    n(document).on("click", "form[data-ajax=true] :submit", function (i) {
        var f = i.currentTarget.name, e = n(i.target), u = n(e.parents("form")[0]);
        u.data(t, f ? [{name: f, value: i.currentTarget.value}] : []);
        u.data(r, e);
        setTimeout(function () {
            u.removeData(t);
            u.removeData(r)
        }, 0)
    });
    n(document).on("submit", "form[data-ajax=true]", function (i) {
        var e = n(this).data(t) || [], u = n(this).data(r), o = u && u.hasClass("cancel");
        (i.preventDefault(), o || s(this)) && f(this, {
            url: this.action,
            type: this.method || "GET",
            data: e.concat(n(this).serializeArray())
        })
    })
}(jQuery), function (n) {
    n.extend(n.fn, {
        validate: function (t) {
            if (!this.length) return t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(t.target).hasClass("cancel") && (i.cancelSubmit = !0);
                void 0 !== n(t.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function (t) {
                function r() {
                    var r;
                    return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && r.remove(), !1) : !0
                }

                return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        }, valid: function () {
            if (n(this[0]).is("form")) return this.validate().form();
            var t = !0, i = n(this[0].form).validate();
            return this.each(function () {
                t = t && i.element(this)
            }), t
        }, removeAttrs: function (t) {
            var i = {}, r = this;
            return n.each(t.split(/\s/), function (n, t) {
                i[t] = r.attr(t);
                r.removeAttr(t)
            }), i
        }, rules: function (t, i) {
            var r = this[0], o, u, h;
            if (t) {
                var e = n.data(r.form, "validator").settings, s = e.rules, f = n.validator.staticRules(r);
                switch (t) {
                    case"add":
                        n.extend(f, n.validator.normalizeRule(i));
                        delete f.messages;
                        s[r.name] = f;
                        i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                        break;
                    case"remove":
                        return i ? (o = {}, n.each(i.split(/\s/), function (n, t) {
                            o[t] = f[t];
                            delete f[t]
                        }), o) : (delete s[r.name], f)
                }
            }
            return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (h = u.required, delete u.required, u = n.extend({required: h}, u)), u
        }
    });
    n.extend(n.expr[":"], {
        blank: function (t) {
            return !n.trim("" + n(t).val())
        }, filled: function (t) {
            return !!n.trim("" + n(t).val())
        }, unchecked: function (t) {
            return !n(t).prop("checked")
        }
    });
    n.validator = function (t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    };
    n.validator.format = function (t, i) {
        return 1 === arguments.length ? function () {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function (n, i) {
            t = t.replace(RegExp("\\{" + n + "\\}", "g"), function () {
                return i
            })
        }), t)
    };
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (n) {
                this.lastActive = n;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
            },
            onfocusout: function (n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function (n, t) {
                (9 !== t.which || "" !== this.elementValue(n)) && (n.name in this.submitted || n === this.lastElement) && this.element(n)
            },
            onclick: function (n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function (t, i, r) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function (t, i, r) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function (t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function i(t) {
                    var i = n.data(this[0].form, "validator"), r = "on" + t.type.replace(/^validate/, "");
                    i.settings[r] && i.settings[r].call(i, this[0], t)
                }

                var r, t;
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                r = this.groups = {};
                n.each(this.settings.groups, function (t, i) {
                    "string" == typeof i && (i = i.split(/\s/));
                    n.each(i, function (n, i) {
                        r[i] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function (i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i);
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            }, element: function (t) {
                t = this.validationTargetFor(this.clean(t));
                this.lastElement = t;
                this.prepareElement(t);
                this.currentElements = n(t);
                var i = this.check(t) !== !1;
                return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            }, showErrors: function (t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t) this.errorList.push({message: t[i], element: this.findByName(i)[0]});
                    this.successList = n.grep(this.successList, function (n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (n) {
                var t = 0, i;
                for (i in n) t++;
                return t
            }, hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {
                }
            }, findLastActive: function () {
                var t = this.lastActive;
                return t && 1 === n.grep(this.errorList, function (n) {
                    return n.element.name === t.name
                }).length && t
            }, elements: function () {
                var t = this, i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            }, clean: function (t) {
                return n(t)[0]
            }, errors: function () {
                var t = this.settings.errorClass.replace(" ", ".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            }, reset: function () {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            }, prepareForm: function () {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            }, elementValue: function (t) {
                var r = n(t).attr("type"), i = n(t).val();
                return "radio" === r || "checkbox" === r ? n("input[name='" + n(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
            }, check: function (t) {
                var r, u;
                t = this.validationTargetFor(this.clean(t));
                var i, f = n(t).rules(), e = !1, s = this.elementValue(t);
                for (r in f) {
                    u = {method: r, parameters: f[r]};
                    try {
                        if (i = n.validator.methods[r].call(this, s, t, u.parameters), "dependency-mismatch" === i) {
                            e = !0;
                            continue
                        }
                        if (e = !1, "pending" === i) return this.toHide = this.toHide.not(this.errorsFor(t)), void 0;
                        if (!i) return this.formatAndAdd(t, u), !1
                    } catch (o) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + u.method + "' method.", o), o;
                    }
                }
                if (!e) return (this.objectLength(f) && this.successList.push(t), !0)
            }, customDataMessage: function (t, i) {
                return n(t).data("msg-" + i.toLowerCase()) || t.attributes && n(t).attr("data-msg-" + i.toLowerCase())
            }, customMessage: function (n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            }, findDefined: function () {
                for (var n = 0; arguments.length > n; n++) if (void 0 !== arguments[n]) return arguments[n];
                return void 0
            }, defaultMessage: function (t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || void 0, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            }, formatAndAdd: function (t, i) {
                var r = this.defaultMessage(t, i.method), u = /\$?\{(\d+)\}/g;
                "function" == typeof r ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({message: r, element: t});
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            }, addWrapper: function (n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
            }, defaultShowErrors: function () {
                for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight) for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return n(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t)));
                !i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            }, errorsFor: function (t) {
                var i = this.idOrName(t);
                return this.errors().filter(function () {
                    return n(this).attr("for") === i
                })
            }, idOrName: function (n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            }, validationTargetFor: function (n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]), n
            }, checkable: function (n) {
                return /radio|checkbox/i.test(n.type)
            }, findByName: function (t) {
                return n(this.currentForm).find("[name='" + t + "']")
            }, getLength: function (t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case"select":
                        return n("option:selected", i).length;
                    case"input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            }, depend: function (n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            }, dependTypes: {
                boolean: function (n) {
                    return n
                }, string: function (t, i) {
                    return !!n(t, i.form).length
                }, "function": function (n, t) {
                    return n(t)
                }
            }, optional: function (t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            }, startRequest: function (n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            }, stopRequest: function (t, i) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function (t) {
            var i = {}, r = n(t).attr("class");
            return r && n.each(r.split(" "), function () {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function (t) {
            var u = {}, e = n(t), f = e[0].getAttribute("type"), r, i;
            for (r in n.validator.methods) "required" === r ? (i = e.get(0).getAttribute(r), "" === i && (i = !0), i = !!i) : i = e.attr(r), /min|max/.test(r) && (null === f || /number|range|text/.test(f)) && (i = Number(i)), i ? u[r] = i : f === r && "range" !== f && (u[r] = !0);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u
        },
        dataRules: function (t) {
            var i, r, u = {}, f = n(t);
            for (i in n.validator.methods) r = f.data("rule-" + i.toLowerCase()), void 0 !== r && (u[i] = r);
            return u
        },
        staticRules: function (t) {
            var i = {}, r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function (t, i) {
            return n.each(t, function (r, u) {
                if (u === !1) return delete t[r], void 0;
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                        case"string":
                            f = !!n(u.depends, i.form).length;
                            break;
                        case"function":
                            f = u.depends.call(i, i)
                    }
                    f ? t[r] = void 0 !== u.param ? u.param : !0 : delete t[r]
                }
            }), n.each(t, function (r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }), n.each(["minlength", "maxlength"], function () {
                t[this] && (t[this] = Number(t[this]))
            }), n.each(["rangelength", "range"], function () {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function (t) {
            if ("string" == typeof t) {
                var i = {};
                n.each(t.split(/\s/), function () {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function (t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = void 0 !== r ? r : n.validator.messages[t];
            3 > i.length && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function (t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
            }, email: function (n, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
            }, url: function (n, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            }, date: function (n, t) {
                return this.optional(t) || !/Invalid|NaN/.test("" + new Date(n))
            }, dateISO: function (n, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(n)
            }, number: function (n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            }, digits: function (n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            }, creditcard: function (n, t) {
                var r, e;
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return !1;
                var f = 0, i = 0, u = !1;
                for (n = n.replace(/\D/g, ""), r = n.length - 1; r >= 0; r--) e = n.charAt(r), i = parseInt(e, 10), u && (i *= 2) > 9 && (i -= 9), f += i, u = !u;
                return 0 == f % 10
            }, minlength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r
            }, maxlength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || r >= u
            }, rangelength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r[0] && r[1] >= u
            }, min: function (n, t, i) {
                return this.optional(t) || n >= i
            }, max: function (n, t, i) {
                return this.optional(t) || i >= n
            }, range: function (n, t, i) {
                return this.optional(t) || n >= i[0] && i[1] >= n
            }, equalTo: function (t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    n(i).valid()
                }), t === u.val()
            }, remote: function (t, i, r) {
                var f, u, e;
                return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i), this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = "string" == typeof r && {url: r} || r, f.old === t) ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    success: function (r) {
                        var e, h, s, o;
                        u.settings.messages[i.name].remote = f.originalMessage;
                        e = r === !0 || "true" === r;
                        e ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (s = {}, o = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(o) ? o(t) : o, u.invalid[i.name] = !0, u.showErrors(s));
                        f.valid = e;
                        u.stopRequest(i, e)
                    }
                }, r)), "pending")
            }
        }
    });
    n.format = n.validator.format
}(jQuery), function (n) {
    var t = {}, i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function (n, i, r) {
        var u = n.port;
        "abort" === n.mode && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function (r) {
        var f = ("mode" in r ? r : n.ajaxSettings).mode, u = ("port" in r ? r : n.ajaxSettings).port;
        return "abort" === f ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
    })
}(jQuery), function (n) {
    n.extend(n.fn, {
        validateDelegate: function (t, i, r) {
            return this.bind(i, function (i) {
                var u = n(i.target);
                if (u.is(t)) return r.apply(u, arguments)
            })
        }
    })
}(jQuery), function (n) {
    function i(n, t, i) {
        n.rules[t] = i;
        n.message && (n.messages[t] = n.message)
    }

    function h(n) {
        return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }

    function f(n) {
        return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }

    function e(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }

    function o(n, t) {
        return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
    }

    function c(t, i) {
        var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']"), u = r.attr("data-valmsg-replace"),
            e = u ? n.parseJSON(u) !== !1 : null;
        r.removeClass("field-validation-valid").addClass("field-validation-error");
        t.data("unobtrusiveContainer", r);
        e ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide()
    }

    function l(t, i) {
        var u = n(this).find("[data-valmsg-summary=true]"), r = u.find("ul");
        r && r.length && i.errorList.length && (r.empty(), u.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(i.errorList, function () {
            n("<li />").html(this.message).appendTo(r)
        }))
    }

    function a(t) {
        var i = t.data("unobtrusiveContainer"), r = i.attr("data-valmsg-replace"), u = r ? n.parseJSON(r) : null;
        i && (i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), u && i.empty())
    }

    function v() {
        var t = n(this);
        t.data("validator").resetForm();
        t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
        t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
    }

    function s(t) {
        var i = n(t), r = i.data(u), f = n.proxy(v, t);
        return r || (r = {
            options: {
                errorClass: "input-validation-error",
                errorElement: "span",
                errorPlacement: n.proxy(c, t),
                invalidHandler: n.proxy(l, t),
                messages: {},
                rules: {},
                success: n.proxy(a, t)
            }, attachValidation: function () {
                i.unbind("reset." + u, f).bind("reset." + u, f).validate(this.options)
            }, validate: function () {
                return i.validate(), i.valid()
            }
        }, i.data(u, r)), r
    }

    var r = n.validator, t, u = "unobtrusiveValidation";
    r.unobtrusive = {
        adapters: [], parseElement: function (t, i) {
            var u = n(t), f = u.parents("form")[0], r, e, o;
            f && (r = s(f), r.options.rules[t.name] = e = {}, r.options.messages[t.name] = o = {}, n.each(this.adapters, function () {
                var i = "data-val-" + this.name, r = u.attr(i), s = {};
                r !== undefined && (i += "-", n.each(this.params, function () {
                    s[this] = u.attr(i + this)
                }), this.adapt({element: t, form: f, message: r, params: s, rules: e, messages: o}))
            }), n.extend(e, {__dummy__: !0}), i || r.attachValidation())
        }, parse: function (t) {
            var i = n(t).parents("form").andSelf().add(n(t).find("form")).filter("form");
            n(t).find(":input").filter("[data-val=true]").each(function () {
                r.unobtrusive.parseElement(this, !0)
            });
            i.each(function () {
                var n = s(this);
                n && n.attachValidation()
            })
        }
    };
    t = r.unobtrusive.adapters;
    t.add = function (n, t, i) {
        return i || (i = t, t = []), this.push({name: n, params: t, adapt: i}), this
    };
    t.addBool = function (n, t) {
        return this.add(n, function (r) {
            i(r, t || n, !0)
        })
    };
    t.addMinMax = function (n, t, r, u, f, e) {
        return this.add(n, [f || "min", e || "max"], function (n) {
            var f = n.params.min, e = n.params.max;
            f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
        })
    };
    t.addSingleVal = function (n, t, r) {
        return this.add(n, [t || "val"], function (u) {
            i(u, r || n, u.params[t])
        })
    };
    r.addMethod("__dummy__", function () {
        return !0
    });
    r.addMethod("regex", function (n, t, i) {
        var r;
        return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
    });
    r.addMethod("nonalphamin", function (n, t, i) {
        var r;
        return i && (r = n.match(/\W/g), r = r && r.length >= i), r
    });
    r.methods.extension ? (t.addSingleVal("accept", "mimtype"), t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept");
    t.addSingleVal("regex", "pattern");
    t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
    t.add("equalto", ["other"], function (t) {
        var r = e(t.element.name), u = t.params.other, s = o(u, r),
            h = n(t.form).find(":input").filter("[name='" + f(s) + "']")[0];
        i(t, "equalTo", h)
    });
    t.add("required", function (n) {
        (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
    });
    t.add("remote", ["url", "type", "additionalfields"], function (t) {
        var r = {url: t.params.url, type: t.params.type || "GET", data: {}}, u = e(t.element.name);
        n.each(h(t.params.additionalfields || t.element.name), function (i, e) {
            var s = o(e, u);
            r.data[s] = function () {
                return n(t.form).find(":input").filter("[name='" + f(s) + "']").val()
            }
        });
        i(t, "remote", r)
    });
    t.add("password", ["min", "nonalphamin", "regex"], function (n) {
        n.params.min && i(n, "minlength", n.params.min);
        n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin);
        n.params.regex && i(n, "regex", n.params.regex)
    });
    n(function () {
        r.unobtrusive.parse(document)
    })
}(jQuery), function (n) {
    function i(n) {
        return typeof n == "object" ? n : {top: n, left: n}
    }

    var t = n.scrollTo = function (t, i, r) {
        n(window).scrollTo(t, i, r)
    };
    t.defaults = {axis: "xy", duration: parseFloat(n.fn.jquery) >= 1.3 ? 0 : 1, limit: !0};
    t.window = function () {
        return n(window)._scrollable()
    };
    n.fn._scrollable = function () {
        return this.map(function () {
            var t = this,
                r = !t.nodeName || n.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1,
                i;
            return r ? (i = (t.contentWindow || t).document || t.ownerDocument || t, /webkit/i.test(navigator.userAgent) || i.compatMode == "BackCompat" ? i.body : i.documentElement) : t
        })
    };
    n.fn.scrollTo = function (r, u, f) {
        return typeof u == "object" && (f = u, u = 0), typeof f == "function" && (f = {onAfter: f}), r == "max" && (r = 9e9), f = n.extend({}, t.defaults, f), u = u || f.duration, f.queue = f.queue && f.axis.length > 1, f.queue && (u /= 2), f.offset = i(f.offset), f.over = i(f.over), this._scrollable().each(function () {
            function l(n) {
                h.animate(o, u, f.easing, n && function () {
                    n.call(this, r, f)
                })
            }

            if (r != null) {
                var s = this, h = n(s), e = r, c, o = {}, a = h.is("html,body");
                switch (typeof e) {
                    case"number":
                    case"string":
                        if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(e)) {
                            e = i(e);
                            break
                        }
                        if (e = n(e, this), !e.length) return;
                    case"object":
                        (e.is || e.style) && (c = (e = n(e)).offset())
                }
                n.each(f.axis.split(""), function (n, i) {
                    var y = i == "x" ? "Left" : "Top", u = y.toLowerCase(), r = "scroll" + y, p = s[r], w = t.max(s, i),
                        v;
                    c ? (o[r] = c[u] + (a ? 0 : p - h.offset()[u]), f.margin && (o[r] -= parseInt(e.css("margin" + y)) || 0, o[r] -= parseInt(e.css("border" + y + "Width")) || 0), o[r] += f.offset[u] || 0, f.over[u] && (o[r] += e[i == "x" ? "width" : "height"]() * f.over[u])) : (v = e[u], o[r] = v.slice && v.slice(-1) == "%" ? parseFloat(v) / 100 * w : v);
                    f.limit && /^\d+$/.test(o[r]) && (o[r] = o[r] <= 0 ? 0 : Math.min(o[r], w));
                    !n && f.queue && (p != o[r] && l(f.onAfterFirst), delete o[r])
                });
                l(f.onAfter)
            }
        }).end()
    };
    t.max = function (t, i) {
        var r = i == "x" ? "Width" : "Height", u = "scroll" + r;
        if (!n(t).is("html,body")) return t[u] - n(t)[r.toLowerCase()]();
        var f = "client" + r, e = t.ownerDocument.documentElement, o = t.ownerDocument.body;
        return Math.max(e[u], o[u]) - Math.min(e[f], o[f])
    }
}(jQuery), function (n) {
    n.address = function () {
        var ht = function (t) {
                var i = n.extend(n.Event(t), function () {
                    for (var r = {}, i = n.address.parameterNames(), t = 0, u = i.length; t < u; t++) r[i[t]] = n.address.parameter(i[t]);
                    return {
                        value: n.address.value(),
                        path: n.address.path(),
                        pathNames: n.address.pathNames(),
                        parameterNames: i,
                        parameters: r,
                        queryString: n.address.queryString()
                    }
                }.call(n.address));
                return n(n.address).trigger(i), i
            }, y = function (n) {
                return Array.prototype.slice.call(n)
            }, b = function () {
                return n().bind.apply(n(n.address), Array.prototype.slice.call(arguments)), n.address
            }, si = function () {
                return n().unbind.apply(n(n.address), Array.prototype.slice.call(arguments)), n.address
            }, rt = function () {
                return tt.pushState && t.state !== i
            }, pt = function () {
                return ("/" + s.pathname.replace(new RegExp(t.state), "") + s.search + (ut() ? "#" + ut() : "")).replace(ii, "/")
            }, ut = function () {
                var n = s.href.indexOf("#");
                return n != -1 ? s.href.substr(n + 1) : ""
            }, c = function () {
                return rt() ? pt() : ut()
            }, wt = function () {
                try {
                    return top.document !== i && top.document.title !== i && top.jQuery !== i && top.jQuery.address !== i && top.jQuery.address.frames() !== !1 ? top : window
                } catch (n) {
                    return window
                }
            }, bt = function () {
                return "javascript"
            }, ct = function (n) {
                return n = n.toString(), (t.strict && n.substr(0, 1) != "/" ? "/" : "") + n
            }, l = function (n, t) {
                return parseInt(n.css(t), 10)
            }, k = function () {
                if (!ot) {
                    var n = c(), i = decodeURI(r) != decodeURI(n);
                    i && (v && w < 7 ? s.reload() : (v && !et && t.history && a(lt, 50), r = n, d(o)))
                }
            }, d = function (n) {
                return a(hi, 10), ht(gt).isDefaultPrevented() || ht(n ? ni : ti).isDefaultPrevented()
            }, hi = function () {
                if (t.tracker !== "null" && t.tracker !== g) {
                    var f = n.isFunction(t.tracker) ? t.tracker : u[t.tracker],
                        r = (s.pathname + s.search + (n.address && !rt() ? n.address.value() : "")).replace(/\/\//, "/").replace(/^\/$/, "");
                    n.isFunction(f) ? f(r) : n.isFunction(u.urchinTracker) ? u.urchinTracker(r) : u.pageTracker !== i && n.isFunction(u.pageTracker._trackPageview) ? u.pageTracker._trackPageview(r) : u._gaq !== i && n.isFunction(u._gaq.push) && u._gaq.push(["_trackPageview", decodeURI(r)])
                }
            }, lt = function () {
                var n = bt() + ":" + o + ";document.open();document.writeln('<html><head><title>" + e.title.replace(/\'/g, "\\'") + "<\/title><script>var " + p + ' = "' + encodeURIComponent(c()).replace(/\'/g, "\\'") + (e.domain != s.hostname ? '";document.domain="' + e.domain : "") + "\";<\/script><\/head><\/html>');document.close();";
                w < 7 ? f.src = n : f.contentWindow.location.replace(n)
            }, kt = function () {
                if (it && ui != -1) {
                    for (var n, u = it.substr(ui + 1).split("&"), i = 0; i < u.length; i++) n = u[i].split("="), /^(autoUpdate|history|strict|wrap)$/.test(n[0]) && (t[n[0]] = isNaN(n[1]) ? /^(true|yes)$/i.test(n[1]) : parseInt(n[1], 10) !== 0), /^(state|tracker)$/.test(n[0]) && (t[n[0]] = n[1]);
                    it = g
                }
                r = c()
            }, dt = function () {
                var y, g, b;
                fi || (fi = h, kt(), n('a[rel*="address:"]').address(), t.wrap && (y = n("body"), g = n("body > *").wrapAll('<div style="padding:' + (l(y, "marginTop") + l(y, "paddingTop")) + "px " + (l(y, "marginRight") + l(y, "paddingRight")) + "px " + (l(y, "marginBottom") + l(y, "paddingBottom")) + "px " + (l(y, "marginLeft") + l(y, "paddingLeft")) + 'px;" />').parent().wrap('<div id="' + p + '" style="height:100%;overflow:auto;position:relative;' + (ft && !window.statusbar.visible ? "resize:both;" : "") + '" />'), n("html, body").css({
                    height: "100%",
                    margin: 0,
                    padding: 0,
                    overflow: "hidden"
                }), ft && n('<style type="text/css" />').appendTo("head").text("#" + p + "::-webkit-resizer { background-color: #fff; }")), v && !et && (b = e.getElementsByTagName("frameset")[0], f = e.createElement((b ? "" : "i") + "frame"), f.src = bt() + ":" + o, b ? (b.insertAdjacentElement("beforeEnd", f), b[b.cols ? "cols" : "rows"] += ",0", f.noResize = h, f.frameBorder = f.frameSpacing = 0) : (f.style.display = "none", f.style.width = f.style.height = 0, f.tabIndex = -1, e.body.insertAdjacentElement("afterBegin", f)), a(function () {
                    n(f).bind("load", function () {
                        var n = f.contentWindow;
                        r = n[p] !== i ? n[p] : "";
                        r != c() && (d(o), s.hash = r)
                    });
                    f.contentWindow[p] === i && lt()
                }, 50)), a(function () {
                    ht("init");
                    d(o)
                }, 1), rt() || (v && w > 7 || !v && et ? u.addEventListener ? u.addEventListener(nt, k, o) : u.attachEvent && u.attachEvent("on" + nt, k) : wi(k, 50)), "state" in window.history && n(window).trigger("popstate"))
            }, ci = function () {
                decodeURI(r) != decodeURI(c()) && (r = c(), d(o))
            }, li = function () {
                u.removeEventListener ? u.removeEventListener(nt, k, o) : u.detachEvent && u.detachEvent("on" + nt, k)
            }, ai = function (n) {
                n = n.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
                return {browser: t[1] || "", version: t[2] || "0"}
            }, vi = function () {
                var n = {}, t = ai(navigator.userAgent);
                return t.browser && (n[t.browser] = !0, n.version = t.version), n.chrome ? n.webkit = !0 : n.webkit && (n.safari = !0), n
            }, i, g = null, p = "jQueryAddress", yi = "string", nt = "hashchange", pi = "init", gt = "change",
            ni = "internalChange", ti = "externalChange", h = !0, o = !1,
            t = {autoUpdate: h, history: h, strict: h, frames: h, wrap: o}, at = vi(), w = parseFloat(at.version),
            ft = at.webkit || at.safari, v = !n.support.opacity, u = wt(), e = u.document, tt = u.history,
            s = u.location, wi = setInterval, a = setTimeout, ii = /\/{2,9}/g, ri = navigator.userAgent,
            et = "on" + nt in u, f, it = n("script:last").attr("src"), ui = it ? it.indexOf("?") : -1, vt = e.title,
            ot = o, fi = o, ei = h, st = o, r = c(), yt, oi;
        return v && (w = parseFloat(ri.substr(ri.indexOf("MSIE") + 4)), e.documentMode && e.documentMode != w && (w = e.documentMode != 8 ? 7 : 8), yt = e.onpropertychange, e.onpropertychange = function () {
            yt && yt.call(e);
            e.title != vt && e.title.indexOf("#" + c()) != -1 && (e.title = vt)
        }), tt.navigationMode && (tt.navigationMode = "compatible"), document.readyState == "complete" ? oi = setInterval(function () {
            n.address && (dt(), clearInterval(oi))
        }, 50) : (kt(), n(dt)), n(window).bind("popstate", ci).bind("unload", li), {
            bind: function () {
                return b.apply(this, y(arguments))
            }, unbind: function () {
                return si.apply(this, y(arguments))
            }, init: function () {
                return b.apply(this, [pi].concat(y(arguments)))
            }, change: function () {
                return b.apply(this, [gt].concat(y(arguments)))
            }, internalChange: function () {
                return b.apply(this, [ni].concat(y(arguments)))
            }, externalChange: function () {
                return b.apply(this, [ti].concat(y(arguments)))
            }, baseURL: function () {
                var n = s.href;
                return n.indexOf("#") != -1 && (n = n.substr(0, n.indexOf("#"))), /\/$/.test(n) && (n = n.substr(0, n.length - 1)), n
            }, autoUpdate: function (n) {
                return n !== i ? (t.autoUpdate = n, this) : t.autoUpdate
            }, history: function (n) {
                return n !== i ? (t.history = n, this) : t.history
            }, state: function (n) {
                if (n !== i) {
                    t.state = n;
                    var r = pt();
                    return t.state !== i && (tt.pushState ? r.substr(0, 3) == "/#/" && s.replace(t.state.replace(/^\/$/, "") + r.substr(2)) : r != "/" && r.replace(/^\/#/, "") != ut() && a(function () {
                        s.replace(t.state.replace(/^\/$/, "") + "/#" + r)
                    }, 1)), this
                }
                return t.state
            }, frames: function (n) {
                return n !== i ? (t.frames = n, u = wt(), this) : t.frames
            }, strict: function (n) {
                return n !== i ? (t.strict = n, this) : t.strict
            }, tracker: function (n) {
                return n !== i ? (t.tracker = n, this) : t.tracker
            }, wrap: function (n) {
                return n !== i ? (t.wrap = n, this) : t.wrap
            }, update: function () {
                return st = h, this.value(r), st = o, this
            }, title: function (n) {
                return n !== i ? (a(function () {
                    vt = e.title = n;
                    ei && f && f.contentWindow && f.contentWindow.document && (f.contentWindow.document.title = n, ei = o)
                }, 50), this) : e.title
            }, value: function (n) {
                if (n !== i) {
                    if (n = ct(n), n == "/" && (n = ""), r == n && !st) return;
                    if (r = n, t.autoUpdate || st) {
                        if (d(h)) return this;
                        rt() ? tt[t.history ? "pushState" : "replaceState"]({}, "", t.state.replace(/\/$/, "") + (r === "" ? "/" : r)) : (ot = h, ft ? t.history ? s.hash = "#" + r : s.replace("#" + r) : r != c() && (t.history ? s.hash = "#" + r : s.replace("#" + r)), v && !et && t.history && a(lt, 50), ft ? a(function () {
                            ot = o
                        }, 1) : ot = o)
                    }
                    return this
                }
                return ct(r)
            }, path: function (n) {
                if (n !== i) {
                    var t = this.queryString(), u = this.hash();
                    return this.value(n + (t ? "?" + t : "") + (u ? "#" + u : "")), this
                }
                return ct(r).split("#")[0].split("?")[0]
            }, pathNames: function () {
                var n = this.path(), t = n.replace(ii, "/").split("/");
                return (n.substr(0, 1) == "/" || n.length === 0) && t.splice(0, 1), n.substr(n.length - 1, 1) == "/" && t.splice(t.length - 1, 1), t
            }, queryString: function (n) {
                var t, u;
                return n !== i ? (t = this.hash(), this.value(this.path() + (n ? "?" + n : "") + (t ? "#" + t : "")), this) : (u = r.split("?"), u.slice(1, u.length).join("?").split("#")[0])
            }, parameter: function (t, r, u) {
                var f, o, h, c, e, l, s, a;
                if (r !== i) {
                    for (h = this.parameterNames(), o = [], r = r === i || r === g ? "" : r.toString(), f = 0; f < h.length; f++) for (c = h[f], e = this.parameter(c), typeof e == yi && (e = [e]), c == t && (e = r === g || r === "" ? [] : u ? e.concat([r]) : [r]), l = 0; l < e.length; l++) o.push(c + "=" + e[l]);
                    return n.inArray(t, h) == -1 && r !== g && r !== "" && o.push(t + "=" + r), this.queryString(o.join("&")), this
                }
                if (r = this.queryString(), r) {
                    for (s = [], o = r.split("&"), f = 0; f < o.length; f++) a = o[f].split("="), a[0] == t && s.push(a.slice(1).join("="));
                    if (s.length !== 0) return s.length != 1 ? s : s[0]
                }
            }, parameterNames: function () {
                var i = this.queryString(), r = [], u, t, f;
                if (i && i.indexOf("=") != -1) for (u = i.split("&"), t = 0; t < u.length; t++) f = u[t].split("=")[0], n.inArray(f, r) == -1 && r.push(f);
                return r
            }, hash: function (n) {
                if (n !== i) return this.value(r.split("#")[0] + (n ? "#" + n : "")), this;
                var t = r.split("#");
                return t.slice(1, t.length).join("#")
            }
        }
    }();
    n.fn.address = function (t) {
        return n(this).each(function () {
            n(this).data("address") || n(this).on("click", function (i) {
                var r, u;
                if (i.shiftKey || i.ctrlKey || i.metaKey || i.which == 2) return !0;
                r = i.currentTarget;
                n(r).is("a") && (i.preventDefault(), u = t ? t.call(r) : /address:/.test(n(r).attr("rel")) ? n(r).attr("rel").split("address:")[1].split(" ")[0] : n.address.state() !== undefined && !/^\/?$/.test(n.address.state()) ? n(r).attr("href").replace(new RegExp("^(.*" + n.address.state() + "|\\.)"), "") : n(r).attr("href").replace(/^(#\!?|\.)/, ""), n.address.value(u))
            }).on("submit", function (i) {
                var r = i.currentTarget, u, f;
                n(r).is("form") && (i.preventDefault(), u = n(r).attr("action"), f = t ? t.call(r) : (u.indexOf("?") != -1 ? u.replace(/&$/, "") : u + "?") + n(r).serialize(), n.address.value(f))
            }).data("address", !0)
        }), this
    }
}(jQuery);
$(document).ready(function () {
});
typeof YAHOO != "undefined" && YAHOO || (YAHOO = {});
YAHOO.namespace = function () {
    for (var u = arguments, t = null, n, i, r = 0; r < u.length; r = r + 1) for (i = ("" + u[r]).split("."), t = YAHOO, n = i[0] == "YAHOO" ? 1 : 0; n < i.length; n = n + 1) t[i[n]] = t[i[n]] || {}, t = t[i[n]];
    return t
};
YAHOO.log = function (n, t, i) {
    var r = YAHOO.widget.Logger;
    return r && r.log ? r.log(n, t, i) : !1
};
YAHOO.register = function (n, t, i) {
    var o = YAHOO.env.modules, r, f, e, s, u;
    for (o[n] || (o[n] = {
        versions: [],
        builds: []
    }), r = o[n], f = i.version, e = i.build, s = YAHOO.env.listeners, r.name = n, r.version = f, r.build = e, r.versions.push(f), r.builds.push(e), r.mainClass = t, u = 0; u < s.length; u = u + 1) s[u](r);
    t ? (t.VERSION = f, t.BUILD = e) : YAHOO.log("mainClass is undefined for module " + n, "warn")
};
YAHOO.env = YAHOO.env || {modules: [], listeners: []};
YAHOO.env.getVersion = function (n) {
    return YAHOO.env.modules[n] || null
};
YAHOO.env.parseUA = function (n) {
    var u = function (n) {
        var t = 0;
        return parseFloat(n.replace(/\./g, function () {
            return t++ == 1 ? "" : "."
        }))
    }, f = navigator, i = {
        ie: 0,
        opera: 0,
        gecko: 0,
        webkit: 0,
        chrome: 0,
        mobile: null,
        air: 0,
        ipad: 0,
        iphone: 0,
        ipod: 0,
        ios: null,
        android: 0,
        webos: 0,
        caja: f && f.cajaVersion,
        secure: !1,
        os: null
    }, r = n || navigator && navigator.userAgent, e = window && window.location, o = e && e.href, t;
    return i.secure = o && o.toLowerCase().indexOf("https") === 0, r && (/windows|win32/i.test(r) ? i.os = "windows" : /macintosh/i.test(r) ? i.os = "macintosh" : /rhino/i.test(r) && (i.os = "rhino"), /KHTML/.test(r) && (i.webkit = 1), t = r.match(/AppleWebKit\/([^\s]*)/), t && t[1] && (i.webkit = u(t[1]), / Mobile\//.test(r) ? (i.mobile = "Apple", t = r.match(/OS ([^\s]*)/), t && t[1] && (t = u(t[1].replace("_", "."))), i.ios = t, i.ipad = i.ipod = i.iphone = 0, t = r.match(/iPad|iPod|iPhone/), t && t[0] && (i[t[0].toLowerCase()] = i.ios)) : (t = r.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), t && (i.mobile = t[0]), /webOS/.test(r) && (i.mobile = "WebOS", t = r.match(/webOS\/([^\s]*);/), t && t[1] && (i.webos = u(t[1]))), / Android/.test(r) && (i.mobile = "Android", t = r.match(/Android ([^\s]*);/), t && t[1] && (i.android = u(t[1])))), t = r.match(/Chrome\/([^\s]*)/), t && t[1] ? i.chrome = u(t[1]) : (t = r.match(/AdobeAIR\/([^\s]*)/), t && (i.air = t[0]))), i.webkit || (t = r.match(/Opera[\s\/]([^\s]*)/), t && t[1] ? (i.opera = u(t[1]), t = r.match(/Version\/([^\s]*)/), t && t[1] && (i.opera = u(t[1])), t = r.match(/Opera Mini[^;]*/), t && (i.mobile = t[0])) : (t = r.match(/MSIE\s([^;]*)/), t && t[1] ? i.ie = u(t[1]) : (t = r.match(/Gecko\/([^\s]*)/), t && (i.gecko = 1, t = r.match(/rv:([^\s\)]*)/), t && t[1] && (i.gecko = u(t[1]))))))), i
};
YAHOO.env.ua = YAHOO.env.parseUA(), function () {
    if (YAHOO.namespace("util", "widget", "example"), "undefined" != typeof YAHOO_config) {
        var t = YAHOO_config.listener, i = YAHOO.env.listeners, r = !0, n;
        if (t) {
            for (n = 0; n < i.length; n++) if (i[n] == t) {
                r = !1;
                break
            }
            r && i.push(t)
        }
    }
}();
YAHOO.lang = YAHOO.lang || {}, function () {
    var n = YAHOO.lang, t = Object.prototype, u = "[object Array]", f = "[object Function]", e = "[object Object]",
        o = [],
        s = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;", "`": "&#x60;"},
        i = ["toString", "valueOf"], r = {
            isArray: function (n) {
                return t.toString.apply(n) === u
            }, isBoolean: function (n) {
                return typeof n == "boolean"
            }, isFunction: function (n) {
                return typeof n == "function" || t.toString.apply(n) === f
            }, isNull: function (n) {
                return n === null
            }, isNumber: function (n) {
                return typeof n == "number" && isFinite(n)
            }, isObject: function (t) {
                return t && (typeof t == "object" || n.isFunction(t)) || !1
            }, isString: function (n) {
                return typeof n == "string"
            }, isUndefined: function (n) {
                return typeof n == "undefined"
            }, _IEEnumFix: YAHOO.env.ua.ie ? function (r, u) {
                for (var e, o, f = 0; f < i.length; f = f + 1) e = i[f], o = u[e], n.isFunction(o) && o != t[e] && (r[e] = o)
            } : function () {
            }, escapeHTML: function (n) {
                return n.replace(/[&<>"'\/`]/g, function (n) {
                    return s[n]
                })
            }, extend: function (i, r, u) {
                if (!r || !i) throw new Error("extend failed, please check that all dependencies are included.");
                var e = function () {
                }, f;
                if (e.prototype = r.prototype, i.prototype = new e, i.prototype.constructor = i, i.superclass = r.prototype, r.prototype.constructor == t.constructor && (r.prototype.constructor = r), u) {
                    for (f in u) n.hasOwnProperty(u, f) && (i.prototype[f] = u[f]);
                    n._IEEnumFix(i.prototype, u)
                }
            }, augmentObject: function (t, i) {
                if (!i || !t) throw new Error("Absorb failed, verify dependencies.");
                var u = arguments, r, f, e = u[2];
                if (e && e !== !0) for (r = 2; r < u.length; r = r + 1) t[u[r]] = i[u[r]]; else {
                    for (f in i) !e && f in t || (t[f] = i[f]);
                    n._IEEnumFix(t, i)
                }
                return t
            }, augmentProto: function (t, i) {
                if (!i || !t) throw new Error("Augment failed, verify dependencies.");
                for (var u = [t.prototype, i.prototype], r = 2; r < arguments.length; r = r + 1) u.push(arguments[r]);
                return n.augmentObject.apply(this, u), t
            }, dump: function (t, i) {
                var u, f, r = [], e = "{...}", o = ", ";
                if (n.isObject(t)) {
                    if (t instanceof Date || "nodeType" in t && "tagName" in t) return t;
                    if (n.isFunction(t)) return "f(){...}"
                } else return t + "";
                if (i = n.isNumber(i) ? i : 3, n.isArray(t)) {
                    for (r.push("["), u = 0, f = t.length; u < f; u = u + 1) n.isObject(t[u]) ? r.push(i > 0 ? n.dump(t[u], i - 1) : e) : r.push(t[u]), r.push(o);
                    r.length > 1 && r.pop();
                    r.push("]")
                } else {
                    r.push("{");
                    for (u in t) n.hasOwnProperty(t, u) && (r.push(u + " => "), n.isObject(t[u]) ? r.push(i > 0 ? n.dump(t[u], i - 1) : e) : r.push(t[u]), r.push(o));
                    r.length > 1 && r.pop();
                    r.push("}")
                }
                return r.join("")
            }, substitute: function (t, i, r, u) {
                for (var o, l, a, h, f, s, c = [], v, w = t.length, y, p; ;) {
                    if (o = t.lastIndexOf("{", w), o < 0) break;
                    if (l = t.indexOf("}", o), o + 1 > l) break;
                    v = t.substring(o + 1, l);
                    h = v;
                    s = null;
                    a = h.indexOf(" ");
                    a > -1 && (s = h.substring(a + 1), h = h.substring(0, a));
                    f = i[h];
                    r && (f = r(h, f, s));
                    n.isObject(f) ? n.isArray(f) ? f = n.dump(f, parseInt(s, 10)) : (s = s || "", y = s.indexOf("dump"), y > -1 && (s = s.substring(4)), p = f.toString(), f = p === e || y > -1 ? n.dump(f, parseInt(s, 10)) : p) : n.isString(f) || n.isNumber(f) || (f = "~-" + c.length + "-~", c[c.length] = v);
                    t = t.substring(0, o) + f + t.substring(l + 1);
                    u === !1 && (w = o - 1)
                }
                for (o = c.length - 1; o >= 0; o = o - 1) t = t.replace(new RegExp("~-" + o + "-~"), "{" + c[o] + "}", "g");
                return t
            }, trim: function (n) {
                try {
                    return n.replace(/^\s+|\s+$/g, "")
                } catch (t) {
                    return n
                }
            }, merge: function () {
                for (var i = {}, r = arguments, u = r.length, t = 0; t < u; t = t + 1) n.augmentObject(i, r[t], !0);
                return i
            }, later: function (t, i, r, u, f) {
                t = t || 0;
                i = i || {};
                var e = r, s = u, h, c;
                if (n.isString(r) && (e = i[r]), !e) throw new TypeError("method undefined");
                return n.isUndefined(u) || n.isArray(s) || (s = [u]), h = function () {
                    e.apply(i, s || o)
                }, c = f ? setInterval(h, t) : setTimeout(h, t), {
                    interval: f, cancel: function () {
                        this.interval ? clearInterval(c) : clearTimeout(c)
                    }
                }
            }, isValue: function (t) {
                return n.isObject(t) || n.isString(t) || n.isNumber(t) || n.isBoolean(t)
            }
        };
    n.hasOwnProperty = t.hasOwnProperty ? function (n, t) {
        return n && n.hasOwnProperty && n.hasOwnProperty(t)
    } : function (t, i) {
        return !n.isUndefined(t[i]) && t.constructor.prototype[i] !== t[i]
    };
    r.augmentObject(n, r, !0);
    YAHOO.util.Lang = n;
    n.augment = n.augmentProto;
    YAHOO.augment = n.augmentProto;
    YAHOO.extend = n.extend
}();
YAHOO.register("yahoo", YAHOO, {version: "2.9.0", build: "2800"}), function () {
    var nt;
    YAHOO.env._id_counter = YAHOO.env._id_counter || 0;
    var n = YAHOO.util, et = YAHOO.lang, f = YAHOO.env.ua, y = YAHOO.lang.trim, ot = {}, tt = {},
        st = /^t(?:able|d|h)$/i, ht = /color$/i, t = window.document, e = t.documentElement, o = "ownerDocument",
        it = "defaultView", p = "documentElement", a = "compatMode", ct = "offsetLeft", lt = "offsetTop",
        s = "parentNode", w = "nodeType", h = "tagName", at = "getBoundingClientRect", u = "getComputedStyle",
        c = "currentStyle", v = "CSS1Compat", b = "class", i = "className", l = "", r = " ", vt = "(?:^|\\s)",
        yt = "(?= |$)", pt = "g", rt = "position", k = "relative", d = "left", g = "top", wt = "borderLeftWidth",
        bt = "borderTopWidth", kt = f.opera, ut = f.webkit, dt = f.gecko, ft = f.ie;
    n.Dom = {
        CUSTOM_ATTRIBUTES: e.hasAttribute ? {htmlFor: "for", className: b} : {"for": "htmlFor", "class": i},
        DOT_ATTRIBUTES: {checked: !0},
        get: function (i) {
            var f, u, e, r, o, s, h = null;
            if (i) {
                if (typeof i == "string" || typeof i == "number") {
                    if (f = i + "", i = t.getElementById(i), s = i ? i.attributes : null, i && s && s.id && s.id.value === f) return i;
                    if (i && t.all && (i = null, u = t.all[f], u && u.length)) for (r = 0, o = u.length; r < o; ++r) if (u[r].id === f) return u[r]
                } else if (n.Element && i instanceof n.Element) i = i.get("element"); else if (!i.nodeType && "length" in i) {
                    for (e = [], r = 0, o = i.length; r < o; ++r) e[e.length] = n.Dom.get(i[r]);
                    i = e
                }
                h = i
            }
            return h
        },
        getComputedStyle: function (t, i) {
            return window[u] ? t[o][it][u](t, null)[i] : t[c] ? n.Dom.IE_ComputedStyle.get(t, i) : void 0
        },
        getStyle: function (t, i) {
            return n.Dom.batch(t, n.Dom._getStyle, i)
        },
        _getStyle: function () {
            return window[u] ? function (t, i) {
                i = i === "float" ? i = "cssFloat" : n.Dom._toCamel(i);
                var r = t.style[i], f;
                return r || (f = t[o][it][u](t, null), f && (r = f[i])), r
            } : e[c] ? function (t, i) {
                var r;
                switch (i) {
                    case"opacity":
                        r = 100;
                        try {
                            r = t.filters["DXImageTransform.Microsoft.Alpha"].opacity
                        } catch (u) {
                            try {
                                r = t.filters("alpha").opacity
                            } catch (f) {
                            }
                        }
                        return r / 100;
                    case"float":
                        i = "styleFloat";
                    default:
                        return i = n.Dom._toCamel(i), r = t[c] ? t[c][i] : null, t.style[i] || r
                }
            } : void 0
        }(),
        setStyle: function (t, i, r) {
            n.Dom.batch(t, n.Dom._setStyle, {prop: i, val: r})
        },
        _setStyle: function () {
            return !window.getComputedStyle && t.documentElement.currentStyle ? function (t, i) {
                var u = n.Dom._toCamel(i.prop), r = i.val;
                if (t) switch (u) {
                    case"opacity":
                        r === "" || r === null || r === 1 ? t.style.removeAttribute("filter") : et.isString(t.style.filter) && (t.style.filter = "alpha(opacity=" + r * 100 + ")", t[c] && t[c].hasLayout || (t.style.zoom = 1));
                        break;
                    case"float":
                        u = "styleFloat";
                    default:
                        t.style[u] = r
                }
            } : function (t, i) {
                var r = n.Dom._toCamel(i.prop), u = i.val;
                t && (r == "float" && (r = "cssFloat"), t.style[r] = u)
            }
        }(),
        getXY: function (t) {
            return n.Dom.batch(t, n.Dom._getXY)
        },
        _canPosition: function (t) {
            return n.Dom._getStyle(t, "display") !== "none" && n.Dom._inDoc(t)
        },
        _getXY: function (t) {
            var r, u, f, e, s, h, c = Math.round, i = !1;
            return n.Dom._canPosition(t) && (f = t[at](), e = t[o], r = n.Dom.getDocumentScrollLeft(e), u = n.Dom.getDocumentScrollTop(e), i = [f[d], f[g]], (s || h) && (i[0] -= h, i[1] -= s), (u || r) && (i[0] += r, i[1] += u), i[0] = c(i[0]), i[1] = c(i[1])), i
        },
        getX: function (t) {
            var i = function (t) {
                return n.Dom.getXY(t)[0]
            };
            return n.Dom.batch(t, i, n.Dom, !0)
        },
        getY: function (t) {
            var i = function (t) {
                return n.Dom.getXY(t)[1]
            };
            return n.Dom.batch(t, i, n.Dom, !0)
        },
        setXY: function (t, i, r) {
            n.Dom.batch(t, n.Dom._setXY, {pos: i, noRetry: r})
        },
        _setXY: function (t, i) {
            var f = n.Dom._getStyle(t, rt), o = n.Dom.setStyle, r = i.pos, h = i.noRetry,
                u = [parseInt(n.Dom.getComputedStyle(t, d), 10), parseInt(n.Dom.getComputedStyle(t, g), 10)], e, s;
            if (e = n.Dom._getXY(t), !r || e === !1) return !1;
            f == "static" && (f = k, o(t, rt, f));
            isNaN(u[0]) && (u[0] = f == k ? 0 : t[ct]);
            isNaN(u[1]) && (u[1] = f == k ? 0 : t[lt]);
            r[0] !== null && o(t, d, r[0] - e[0] + u[0] + "px");
            r[1] !== null && o(t, g, r[1] - e[1] + u[1] + "px");
            h || (s = n.Dom._getXY(t), (r[0] !== null && s[0] != r[0] || r[1] !== null && s[1] != r[1]) && n.Dom._setXY(t, {
                pos: r,
                noRetry: !0
            }))
        },
        setX: function (t, i) {
            n.Dom.setXY(t, [i, null])
        },
        setY: function (t, i) {
            n.Dom.setXY(t, [null, i])
        },
        getRegion: function (t) {
            var i = function (t) {
                var i = !1;
                return n.Dom._canPosition(t) && (i = n.Region.getRegion(t)), i
            };
            return n.Dom.batch(t, i, n.Dom, !0)
        },
        getClientWidth: function () {
            return n.Dom.getViewportWidth()
        },
        getClientHeight: function () {
            return n.Dom.getViewportHeight()
        },
        getElementsByClassName: function (i, r, u, f, e, o) {
            var s, l;
            if (r = r || "*", u = u ? n.Dom.get(u) : null || t, !u) return [];
            var h = [], c = u.getElementsByTagName(r), a = n.Dom.hasClass;
            for (s = 0, l = c.length; s < l; ++s) a(c[s], i) && (h[h.length] = c[s]);
            return f && n.Dom.batch(h, f, e, o), h
        },
        hasClass: function (t, i) {
            return n.Dom.batch(t, n.Dom._hasClass, i)
        },
        _hasClass: function (t, u) {
            var e = !1, f;
            return t && u && (f = n.Dom._getAttribute(t, i) || l, f && (f = f.replace(/\s+/g, r)), e = u.exec ? u.test(f) : u && (r + f + r).indexOf(r + u + r) > -1), e
        },
        addClass: function (t, i) {
            return n.Dom.batch(t, n.Dom._addClass, i)
        },
        _addClass: function (t, u) {
            var f = !1, e;
            return t && u && (e = n.Dom._getAttribute(t, i) || l, n.Dom._hasClass(t, u) || (n.Dom.setAttribute(t, i, y(e + r + u)), f = !0)), f
        },
        removeClass: function (t, i) {
            return n.Dom.batch(t, n.Dom._removeClass, i)
        },
        _removeClass: function (t, r) {
            var e = !1, u, f, o;
            return t && r && (u = n.Dom._getAttribute(t, i) || l, n.Dom.setAttribute(t, i, u.replace(n.Dom._getClassRegex(r), l)), f = n.Dom._getAttribute(t, i), u !== f && (n.Dom.setAttribute(t, i, y(f)), e = !0, n.Dom._getAttribute(t, i) === "" && (o = t.hasAttribute && t.hasAttribute(b) ? b : i, t.removeAttribute(o)))), e
        },
        replaceClass: function (t, i, r) {
            return n.Dom.batch(t, n.Dom._replaceClass, {from: i, to: r})
        },
        _replaceClass: function (t, u) {
            var s, e, f, o = !1, h;
            return t && u && (e = u.from, f = u.to, f ? e ? e !== f && (h = n.Dom._getAttribute(t, i) || l, s = (r + h.replace(n.Dom._getClassRegex(e), r + f).replace(/\s+/g, r)).split(n.Dom._getClassRegex(f)), s.splice(1, 0, r + f), n.Dom.setAttribute(t, i, y(s.join(l))), o = !0) : o = n.Dom._addClass(t, u.to) : o = !1), o
        },
        generateId: function (t, i) {
            i = i || "yui-gen";
            var r = function (t) {
                if (t && t.id) return t.id;
                var r = i + YAHOO.env._id_counter++;
                if (t) {
                    if (t[o] && t[o].getElementById(r)) return n.Dom.generateId(t, r + i);
                    t.id = r
                }
                return r
            };
            return n.Dom.batch(t, r, n.Dom, !0) || r.apply(n.Dom, arguments)
        },
        isAncestor: function (t, i) {
            t = n.Dom.get(t);
            i = n.Dom.get(i);
            var r = !1;
            return t && i && t[w] && i[w] && (t.contains && t !== i ? r = t.contains(i) : t.compareDocumentPosition && (r = !!(t.compareDocumentPosition(i) & 16))), r
        },
        inDocument: function (t, i) {
            return n.Dom._inDoc(n.Dom.get(t), i)
        },
        _inDoc: function (t, i) {
            var r = !1;
            return t && t[h] && (i = i || t[o], r = n.Dom.isAncestor(i[p], t)), r
        },
        getElementsBy: function (i, r, u, f, e, o, s) {
            var h, l, c, a;
            if (r = r || "*", u = u ? n.Dom.get(u) : null || t, h = s ? null : [], u) {
                for (l = u.getElementsByTagName(r), c = 0, a = l.length; c < a; ++c) if (i(l[c])) if (s) {
                    h = l[c];
                    break
                } else h[h.length] = l[c];
                f && n.Dom.batch(h, f, e, o)
            }
            return h
        },
        getElementBy: function (t, i, r) {
            return n.Dom.getElementsBy(t, i, r, null, null, null, !0)
        },
        batch: function (t, i, r, u) {
            var e = [], o = u ? r : null, f;
            if (t = t && (t[h] || t.item) ? t : n.Dom.get(t), t && i) {
                if (t[h] || t.length === undefined) return i.call(o, t, r);
                for (f = 0; f < t.length; ++f) e[e.length] = i.call(o || t[f], t[f], r)
            } else return !1;
            return e
        },
        getDocumentHeight: function () {
            var i = t[a] != v || ut ? t.body.scrollHeight : e.scrollHeight;
            return Math.max(i, n.Dom.getViewportHeight())
        },
        getDocumentWidth: function () {
            var i = t[a] != v || ut ? t.body.scrollWidth : e.scrollWidth;
            return Math.max(i, n.Dom.getViewportWidth())
        },
        getViewportHeight: function () {
            var n = self.innerHeight, i = t[a];
            return (i || ft) && !kt && (n = i == v ? e.clientHeight : t.body.clientHeight), n
        },
        getViewportWidth: function () {
            var n = self.innerWidth, i = t[a];
            return (i || ft) && (n = i == v ? e.clientWidth : t.body.clientWidth), n
        },
        getAncestorBy: function (t, i) {
            while (t = t[s]) if (n.Dom._testElement(t, i)) return t;
            return null
        },
        getAncestorByClassName: function (t, i) {
            if (t = n.Dom.get(t), !t) return null;
            var r = function (t) {
                return n.Dom.hasClass(t, i)
            };
            return n.Dom.getAncestorBy(t, r)
        },
        getAncestorByTagName: function (t, i) {
            if (t = n.Dom.get(t), !t) return null;
            var r = function (n) {
                return n[h] && n[h].toUpperCase() == i.toUpperCase()
            };
            return n.Dom.getAncestorBy(t, r)
        },
        getPreviousSiblingBy: function (t, i) {
            while (t) if (t = t.previousSibling, n.Dom._testElement(t, i)) return t;
            return null
        },
        getPreviousSibling: function (t) {
            return (t = n.Dom.get(t), !t) ? null : n.Dom.getPreviousSiblingBy(t)
        },
        getNextSiblingBy: function (t, i) {
            while (t) if (t = t.nextSibling, n.Dom._testElement(t, i)) return t;
            return null
        },
        getNextSibling: function (t) {
            return (t = n.Dom.get(t), !t) ? null : n.Dom.getNextSiblingBy(t)
        },
        getFirstChildBy: function (t, i) {
            var r = n.Dom._testElement(t.firstChild, i) ? t.firstChild : null;
            return r || n.Dom.getNextSiblingBy(t.firstChild, i)
        },
        getFirstChild: function (t) {
            return (t = n.Dom.get(t), !t) ? null : n.Dom.getFirstChildBy(t)
        },
        getLastChildBy: function (t, i) {
            if (!t) return null;
            var r = n.Dom._testElement(t.lastChild, i) ? t.lastChild : null;
            return r || n.Dom.getPreviousSiblingBy(t.lastChild, i)
        },
        getLastChild: function (t) {
            return t = n.Dom.get(t), n.Dom.getLastChildBy(t)
        },
        getChildrenBy: function (t, i) {
            var r = n.Dom.getFirstChildBy(t, i), u = r ? [r] : [];
            return n.Dom.getNextSiblingBy(r, function (n) {
                return (!i || i(n)) && (u[u.length] = n), !1
            }), u
        },
        getChildren: function (t) {
            return t = n.Dom.get(t), !t, n.Dom.getChildrenBy(t)
        },
        getDocumentScrollLeft: function (n) {
            return n = n || t, Math.max(n[p].scrollLeft, n.body.scrollLeft)
        },
        getDocumentScrollTop: function (n) {
            return n = n || t, Math.max(n[p].scrollTop, n.body.scrollTop)
        },
        insertBefore: function (t, i) {
            return (t = n.Dom.get(t), i = n.Dom.get(i), !t || !i || !i[s]) ? null : i[s].insertBefore(t, i)
        },
        insertAfter: function (t, i) {
            return (t = n.Dom.get(t), i = n.Dom.get(i), !t || !i || !i[s]) ? null : i.nextSibling ? i[s].insertBefore(t, i.nextSibling) : i[s].appendChild(t)
        },
        getClientRegion: function () {
            var t = n.Dom.getDocumentScrollTop(), i = n.Dom.getDocumentScrollLeft(), r = n.Dom.getViewportWidth() + i,
                u = n.Dom.getViewportHeight() + t;
            return new n.Region(t, r, u, i)
        },
        setAttribute: function (t, i, r) {
            n.Dom.batch(t, n.Dom._setAttribute, {attr: i, val: r})
        },
        _setAttribute: function (t, i) {
            var r = n.Dom._toCamel(i.attr), u = i.val;
            t && t.setAttribute && (n.Dom.DOT_ATTRIBUTES[r] && t.tagName && t.tagName != "BUTTON" ? t[r] = u : (r = n.Dom.CUSTOM_ATTRIBUTES[r] || r, t.setAttribute(r, u)))
        },
        getAttribute: function (t, i) {
            return n.Dom.batch(t, n.Dom._getAttribute, i)
        },
        _getAttribute: function (t, i) {
            var r;
            return i = n.Dom.CUSTOM_ATTRIBUTES[i] || i, n.Dom.DOT_ATTRIBUTES[i] ? r = t[i] : t && "getAttribute" in t && (r = /^(?:href|src)$/.test(i) ? t.getAttribute(i, 2) : t.getAttribute(i)), r
        },
        _toCamel: function (n) {
            function i(n, t) {
                return t.toUpperCase()
            }

            var t = ot;
            return t[n] || (t[n] = n.indexOf("-") === -1 ? n : n.replace(/-([a-z])/gi, i))
        },
        _getClassRegex: function (t) {
            var i;
            return t !== undefined && (t.exec ? i = t : (i = tt[t], i || (t = t.replace(n.Dom._patterns.CLASS_RE_TOKENS, "\\$1"), t = t.replace(/\s+/g, r), i = tt[t] = new RegExp(vt + t + yt, pt)))), i
        },
        _patterns: {ROOT_TAG: /^body|html$/i, CLASS_RE_TOKENS: /([\.\(\)\^\$\*\+\?\|\[\]\{\}\\])/g},
        _testElement: function (n, t) {
            return n && n[w] == 1 && (!t || t(n))
        },
        _calcBorders: function (t, i) {
            var r = parseInt(n.Dom[u](t, bt), 10) || 0, f = parseInt(n.Dom[u](t, wt), 10) || 0;
            return dt && st.test(t[h]) && (r = 0, f = 0), i[0] += f, i[1] += r, i
        }
    };
    nt = n.Dom[u];
    f.opera && (n.Dom[u] = function (t, i) {
        var r = nt(t, i);
        return ht.test(i) && (r = n.Dom.Color.toRGB(r)), r
    });
    f.webkit && (n.Dom[u] = function (n, t) {
        var i = nt(n, t);
        return i === "rgba(0, 0, 0, 0)" && (i = "transparent"), i
    });
    f.ie && f.ie >= 8 && (n.Dom.DOT_ATTRIBUTES.type = !0)
}();
YAHOO.util.Region = function (n, t, i, r) {
    this.top = n;
    this.y = n;
    this[1] = n;
    this.right = t;
    this.bottom = i;
    this.left = r;
    this.x = r;
    this[0] = r;
    this.width = this.right - this.left;
    this.height = this.bottom - this.top
};
YAHOO.util.Region.prototype.contains = function (n) {
    return n.left >= this.left && n.right <= this.right && n.top >= this.top && n.bottom <= this.bottom
};
YAHOO.util.Region.prototype.getArea = function () {
    return (this.bottom - this.top) * (this.right - this.left)
};
YAHOO.util.Region.prototype.intersect = function (n) {
    var t = Math.max(this.top, n.top), i = Math.min(this.right, n.right), r = Math.min(this.bottom, n.bottom),
        u = Math.max(this.left, n.left);
    return r >= t && i >= u ? new YAHOO.util.Region(t, i, r, u) : null
};
YAHOO.util.Region.prototype.union = function (n) {
    var t = Math.min(this.top, n.top), i = Math.max(this.right, n.right), r = Math.max(this.bottom, n.bottom),
        u = Math.min(this.left, n.left);
    return new YAHOO.util.Region(t, i, r, u)
};
YAHOO.util.Region.prototype.toString = function () {
    return "Region {top: " + this.top + ", right: " + this.right + ", bottom: " + this.bottom + ", left: " + this.left + ", height: " + this.height + ", width: " + this.width + "}"
};
YAHOO.util.Region.getRegion = function (n) {
    var t = YAHOO.util.Dom.getXY(n), i = t[1], r = t[0] + n.offsetWidth, u = t[1] + n.offsetHeight, f = t[0];
    return new YAHOO.util.Region(i, r, u, f)
};
YAHOO.util.Point = function (n, t) {
    YAHOO.lang.isArray(n) && (t = n[1], n = n[0]);
    YAHOO.util.Point.superclass.constructor.call(this, t, n, t, n)
};
YAHOO.extend(YAHOO.util.Point, YAHOO.util.Region), function () {
    var t = YAHOO.util, s = "clientTop", h = "clientLeft", p = "parentNode", e = "right", w = "hasLayout", f = "px",
        c = "opacity", o = "auto", l = "borderLeftWidth", a = "borderTopWidth", v = "borderRightWidth",
        y = "borderBottomWidth", b = "visible", k = "transparent", i = "style", r = "currentStyle",
        d = /^width|height$/, g = /^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i,
        u = {
            get: function (n, i) {
                var u = n[r][i];
                return i === c ? t.Dom.getStyle(n, c) : !u || u.indexOf && u.indexOf(f) > -1 ? u : t.Dom.IE_COMPUTED[i] ? t.Dom.IE_COMPUTED[i](n, i) : g.test(u) ? t.Dom.IE.ComputedStyle.getPixel(n, i) : u
            }, getOffset: function (n, t) {
                var h = n[r][t], c = t.charAt(0).toUpperCase() + t.substr(1), s = "offset" + c, l = "pixel" + c, e = "",
                    u;
                return h == o ? (u = n[s], u === undefined && (e = 0), e = u, d.test(t) && (n[i][t] = u, n[s] > u && (e = u - (n[s] - u)), n[i][t] = o)) : (n[i][l] || n[i][t] || (n[i][t] = h), e = n[i][l]), e + f
            }, getBorderWidth: function (n, t) {
                var u = null;
                n[r][w] || (n[i].zoom = 1);
                switch (t) {
                    case a:
                        u = n[s];
                        break;
                    case y:
                        u = n.offsetHeight - n.clientHeight - n[s];
                        break;
                    case l:
                        u = n[h];
                        break;
                    case v:
                        u = n.offsetWidth - n.clientWidth - n[h]
                }
                return u + f
            }, getPixel: function (n, t) {
                var u = null, o = n[r][e], s = n[r][t];
                return n[i][e] = s, u = n[i].pixelRight, n[i][e] = o, u + f
            }, getMargin: function (n, i) {
                return n[r][i] == o ? 0 + f : t.Dom.IE.ComputedStyle.getPixel(n, i)
            }, getVisibility: function (n, t) {
                for (var i; (i = n[r]) && i[t] == "inherit";) n = n[p];
                return i ? i[t] : b
            }, getColor: function (n, i) {
                return t.Dom.Color.toRGB(n[r][i]) || k
            }, getBorderColor: function (n, i) {
                var u = n[r], f = u[i] || u.color;
                return t.Dom.Color.toRGB(t.Dom.Color.toHex(f))
            }
        }, n = {};
    n.top = n.right = n.bottom = n.left = n["width"] = n["height"] = u.getOffset;
    n.color = u.getColor;
    n[a] = n[v] = n[y] = n[l] = u.getBorderWidth;
    n.marginTop = n.marginRight = n.marginBottom = n.marginLeft = u.getMargin;
    n.visibility = u.getVisibility;
    n.borderColor = n.borderTopColor = n.borderRightColor = n.borderBottomColor = n.borderLeftColor = u.getBorderColor;
    t.Dom.IE_COMPUTED = n;
    t.Dom.IE_ComputedStyle = u
}(), function () {
    var i = parseInt, t = RegExp, n = YAHOO.util;
    n.Dom.Color = {
        KEYWORDS: {
            black: "000",
            silver: "c0c0c0",
            gray: "808080",
            white: "fff",
            maroon: "800000",
            red: "f00",
            purple: "800080",
            fuchsia: "f0f",
            green: "008000",
            lime: "0f0",
            olive: "808000",
            yellow: "ff0",
            navy: "000080",
            blue: "00f",
            teal: "008080",
            aqua: "0ff"
        },
        re_RGB: /^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,
        re_hex: /^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,
        re_hex3: /([0-9A-F])/gi,
        toRGB: function (r) {
            return n.Dom.Color.re_RGB.test(r) || (r = n.Dom.Color.toHex(r)), n.Dom.Color.re_hex.exec(r) && (r = "rgb(" + [i(t.$1, 16), i(t.$2, 16), i(t.$3, 16)].join(", ") + ")"), r
        },
        toHex: function (i) {
            if (i = n.Dom.Color.KEYWORDS[i] || i, n.Dom.Color.re_RGB.exec(i)) {
                i = [Number(t.$1).toString(16), Number(t.$2).toString(16), Number(t.$3).toString(16)];
                for (var r = 0; r < i.length; r++) i[r].length < 2 && (i[r] = "0" + i[r]);
                i = i.join("")
            }
            return i.length < 6 && (i = i.replace(n.Dom.Color.re_hex3, "$1$1")), i !== "transparent" && i.indexOf("#") < 0 && (i = "#" + i), i.toUpperCase()
        }
    }
}();
YAHOO.register("dom", YAHOO.util.Dom, {version: "2.9.0", build: "2800"});
YAHOO.util.CustomEvent = function (n, t, i, r, u) {
    this.type = n;
    this.scope = t || window;
    this.silent = i;
    this.fireOnce = u;
    this.fired = !1;
    this.firedWith = null;
    this.signature = r || YAHOO.util.CustomEvent.LIST;
    this.subscribers = [];
    !this.silent;
    var f = "_YUICEOnSubscribe";
    n !== f && (this.subscribeEvent = new YAHOO.util.CustomEvent(f, this, !0));
    this.lastError = null
};
YAHOO.util.CustomEvent.LIST = 0;
YAHOO.util.CustomEvent.FLAT = 1;
YAHOO.util.CustomEvent.prototype = {
    subscribe: function (n, t, i) {
        if (!n) throw new Error("Invalid callback for subscriber to '" + this.type + "'");
        this.subscribeEvent && this.subscribeEvent.fire(n, t, i);
        var r = new YAHOO.util.Subscriber(n, t, i);
        this.fireOnce && this.fired ? this.notify(r, this.firedWith) : this.subscribers.push(r)
    }, unsubscribe: function (n, t) {
        var r, i, f, u;
        if (!n) return this.unsubscribeAll();
        for (r = !1, i = 0, f = this.subscribers.length; i < f; ++i) u = this.subscribers[i], u && u.contains(n, t) && (this._delete(i), r = !0);
        return r
    }, fire: function () {
        var f, t;
        this.lastError = null;
        var r = this.subscribers.length, u = [].slice.call(arguments, 0), i = !0, n, e = !1;
        if (this.fireOnce) {
            if (this.fired) return !0;
            this.firedWith = u
        }
        if (this.fired = !0, !r && this.silent) return !0;
        for (!this.silent, f = this.subscribers.slice(), n = 0; n < r; ++n) if (t = f[n], t && t.fn) {
            if (i = this.notify(t, u), !1 === i) {
                !this.silent;
                break
            }
        } else e = !0;
        return i !== !1
    }, notify: function (n, t) {
        var i, r = null, u = n.getScope(this.scope), f = YAHOO.util.Event.throwErrors;
        if (!this.silent, this.signature == YAHOO.util.CustomEvent.FLAT) {
            t.length > 0 && (r = t[0]);
            try {
                i = n.fn.call(u, r, n.obj)
            } catch (e) {
                if (this.lastError = e, f) throw e;
            }
        } else try {
            i = n.fn.call(u, this.type, t, n.obj)
        } catch (o) {
            if (this.lastError = o, f) throw o;
        }
        return i
    }, unsubscribeAll: function () {
        for (var t = this.subscribers.length, n = t - 1; n > -1; n--) this._delete(n);
        return this.subscribers = [], t
    }, _delete: function (n) {
        var t = this.subscribers[n];
        t && (delete t.fn, delete t.obj);
        this.subscribers.splice(n, 1)
    }, toString: function () {
        return "CustomEvent: '" + this.type + "', context: " + this.scope
    }
};
YAHOO.util.Subscriber = function (n, t, i) {
    this.fn = n;
    this.obj = YAHOO.lang.isUndefined(t) ? null : t;
    this.overrideContext = i
};
YAHOO.util.Subscriber.prototype.getScope = function (n) {
    return this.overrideContext ? this.overrideContext === !0 ? this.obj : this.overrideContext : n
};
YAHOO.util.Subscriber.prototype.contains = function (n, t) {
    return t ? this.fn == n && this.obj == t : this.fn == n
};
YAHOO.util.Subscriber.prototype.toString = function () {
    return "Subscriber { obj: " + this.obj + ", overrideContext: " + (this.overrideContext || "no") + " }"
};
YAHOO.util.Event || (YAHOO.util.Event = function () {
    var r = !1, n = [], t = [], u = 0, i = [], s = 0,
        h = {63232: 38, 63233: 40, 63234: 37, 63235: 39, 63276: 33, 63277: 34, 25: 9}, f = YAHOO.env.ua.ie,
        e = "focusin", o = "focusout";
    return {
        POLL_RETRYS: 500,
        POLL_INTERVAL: 40,
        EL: 0,
        TYPE: 1,
        FN: 2,
        WFN: 3,
        UNLOAD_OBJ: 3,
        ADJ_SCOPE: 4,
        OBJ: 5,
        OVERRIDE: 6,
        CAPTURE: 7,
        lastError: null,
        isSafari: YAHOO.env.ua.webkit,
        webkit: YAHOO.env.ua.webkit,
        isIE: f,
        _interval: null,
        _dri: null,
        _specialTypes: {focusin: f ? "focusin" : "focus", focusout: f ? "focusout" : "blur"},
        DOMReady: !1,
        throwErrors: !1,
        startInterval: function () {
            this._interval || (this._interval = YAHOO.lang.later(this.POLL_INTERVAL, this, this._tryPreloadAttach, null, !0))
        },
        onAvailable: function (n, t, r, f, e) {
            for (var s = YAHOO.lang.isString(n) ? [n] : n, o = 0; o < s.length; o = o + 1) i.push({
                id: s[o],
                fn: t,
                obj: r,
                overrideContext: f,
                checkReady: e
            });
            u = this.POLL_RETRYS;
            this.startInterval()
        },
        onContentReady: function (n, t, i, r) {
            this.onAvailable(n, t, i, r, !0)
        },
        onDOMReady: function () {
            this.DOMReadyEvent.subscribe.apply(this.DOMReadyEvent, arguments)
        },
        _addListener: function (i, r, u, f, e, o) {
            var s, h, a, l, c;
            if (!u || !u.call) return !1;
            if (this._isValidCollection(i)) {
                for (s = !0, h = 0, a = i.length; h < a; ++h) s = this.on(i[h], r, u, f, e) && s;
                return s
            }
            if (YAHOO.lang.isString(i)) if (l = this.getEl(i), l) i = l; else {
                this.onAvailable(i, function () {
                    YAHOO.util.Event._addListener(i, r, u, f, e, o)
                });
                return !0
            }
            if (!i) return !1;
            if ("unload" == r && f !== this) return t[t.length] = [i, r, u, f, e], !0;
            c = i;
            e && (c = e === !0 ? f : e);
            var v = function (n) {
                return u.call(c, YAHOO.util.Event.getEvent(n, i), f)
            }, y = [i, r, u, v, c, f, e, o], p = n.length;
            n[p] = y;
            try {
                this._simpleAdd(i, r, v, o)
            } catch (w) {
                return this.lastError = w, this.removeListener(i, r, u), !1
            }
            return !0
        },
        _getType: function (n) {
            return this._specialTypes[n] || n
        },
        addListener: function (n, t, i, r, u) {
            var f = (t == e || t == o) && !YAHOO.env.ua.ie ? !0 : !1;
            return this._addListener(n, this._getType(t), i, r, u, f)
        },
        addFocusListener: function (n, t, i, r) {
            return this.on(n, e, t, i, r)
        },
        removeFocusListener: function (n, t) {
            return this.removeListener(n, e, t)
        },
        addBlurListener: function (n, t, i, r) {
            return this.on(n, o, t, i, r)
        },
        removeBlurListener: function (n, t) {
            return this.removeListener(n, o, t)
        },
        removeListener: function (i, r, u) {
            var f, o, h, s, e, c;
            if (r = this._getType(r), typeof i == "string") i = this.getEl(i); else if (this._isValidCollection(i)) {
                for (h = !0, f = i.length - 1; f > -1; f--) h = this.removeListener(i[f], r, u) && h;
                return h
            }
            if (!u || !u.call) return this.purgeElement(i, !1, r);
            if ("unload" == r) {
                for (f = t.length - 1; f > -1; f--) if (o = t[f], o && o[0] == i && o[1] == r && o[2] == u) return t.splice(f, 1), !0;
                return !1
            }
            if (s = null, e = arguments[3], "undefined" == typeof e && (e = this._getCacheIndex(n, i, r, u)), e >= 0 && (s = n[e]), !i || !s) return !1;
            c = s[this.CAPTURE] === !0 ? !0 : !1;
            try {
                this._simpleRemove(i, r, s[this.WFN], c)
            } catch (l) {
                return this.lastError = l, !1
            }
            return delete n[e][this.WFN], delete n[e][this.FN], n.splice(e, 1), !0
        },
        getTarget: function (n) {
            var t = n.target || n.srcElement;
            return this.resolveTextNode(t)
        },
        resolveTextNode: function (n) {
            try {
                if (n && 3 == n.nodeType) return n.parentNode
            } catch (t) {
                return null
            }
            return n
        },
        getPageX: function (n) {
            var t = n.pageX;
            return t || 0 === t || (t = n.clientX || 0, this.isIE && (t += this._getScrollLeft())), t
        },
        getPageY: function (n) {
            var t = n.pageY;
            return t || 0 === t || (t = n.clientY || 0, this.isIE && (t += this._getScrollTop())), t
        },
        getXY: function (n) {
            return [this.getPageX(n), this.getPageY(n)]
        },
        getRelatedTarget: function (n) {
            var t = n.relatedTarget;
            return t || (n.type == "mouseout" ? t = n.toElement : n.type == "mouseover" && (t = n.fromElement)), this.resolveTextNode(t)
        },
        getTime: function (n) {
            if (!n.time) {
                var t = (new Date).getTime();
                try {
                    n.time = t
                } catch (i) {
                    return this.lastError = i, t
                }
            }
            return n.time
        },
        stopEvent: function (n) {
            this.stopPropagation(n);
            this.preventDefault(n)
        },
        stopPropagation: function (n) {
            n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0
        },
        preventDefault: function (n) {
            n.preventDefault ? n.preventDefault() : n.returnValue = !1
        },
        getEvent: function (n) {
            var t = n || window.event, i;
            if (!t) for (i = this.getEvent.caller; i;) {
                if (t = i.arguments[0], t && Event == t.constructor) break;
                i = i.caller
            }
            return t
        },
        getCharCode: function (n) {
            var t = n.keyCode || n.charCode || 0;
            return YAHOO.env.ua.webkit && t in h && (t = h[t]), t
        },
        _getCacheIndex: function (n, t, i, r) {
            for (var f, u = 0, e = n.length; u < e; u = u + 1) if (f = n[u], f && f[this.FN] == r && f[this.EL] == t && f[this.TYPE] == i) return u;
            return -1
        },
        generateId: function (n) {
            var t = n.id;
            return t || (t = "yuievtautoid-" + s, ++s, n.id = t), t
        },
        _isValidCollection: function (n) {
            try {
                return n && typeof n != "string" && n.length && !n.tagName && !n.alert && typeof n[0] != "undefined"
            } catch (t) {
                return !1
            }
        },
        elCache: {},
        getEl: function (n) {
            return typeof n == "string" ? document.getElementById(n) : n
        },
        clearCache: function () {
        },
        DOMReadyEvent: new YAHOO.util.CustomEvent("DOMReady", YAHOO, 0, 0, 1),
        _load: function () {
            if (!r) {
                r = !0;
                var n = YAHOO.util.Event;
                n._ready();
                n._tryPreloadAttach()
            }
        },
        _ready: function () {
            var n = YAHOO.util.Event;
            n.DOMReady || (n.DOMReady = !0, n.DOMReadyEvent.fire(), n._simpleRemove(document, "DOMContentLoaded", n._ready))
        },
        _tryPreloadAttach: function () {
            var f;
            if (i.length === 0) {
                u = 0;
                this._interval && (this._interval.cancel(), this._interval = null);
                return
            }
            if (!this.locked) {
                if (this.isIE && !this.DOMReady) {
                    this.startInterval();
                    return
                }
                this.locked = !0;
                f = !r;
                f || (f = u > 0 && i.length > 0);
                for (var c = [], h = function (n, t) {
                    var i = n;
                    t.overrideContext && (i = t.overrideContext === !0 ? t.obj : t.overrideContext);
                    t.fn.call(i, t.obj)
                }, t, o, s = [], n = 0, e = i.length; n < e; n = n + 1) t = i[n], t && (o = this.getEl(t.id), o ? t.checkReady ? (r || o.nextSibling || !f) && (s.push(t), i[n] = null) : (h(o, t), i[n] = null) : c.push(t));
                for (n = 0, e = s.length; n < e; n = n + 1) t = s[n], h(this.getEl(t.id), t);
                if (u--, f) {
                    for (n = i.length - 1; n > -1; n--) t = i[n], t && t.id || i.splice(n, 1);
                    this.startInterval()
                } else this._interval && (this._interval.cancel(), this._interval = null);
                this.locked = !1
            }
        },
        purgeElement: function (n, t, i) {
            var u = YAHOO.lang.isString(n) ? this.getEl(n) : n, f = this.getListeners(u, i), r, o, e;
            if (f) for (r = f.length - 1; r > -1; r--) e = f[r], this.removeListener(u, e.type, e.fn);
            if (t && u && u.childNodes) for (r = 0, o = u.childNodes.length; r < o; ++r) this.purgeElement(u.childNodes[r], t, i)
        },
        getListeners: function (i, r) {
            var h = [], f, c, e, s, o, l, u;
            for (r ? r === "unload" ? f = [t] : (r = this._getType(r), f = [n]) : f = [n, t], c = YAHOO.lang.isString(i) ? this.getEl(i) : i, e = 0; e < f.length; e = e + 1) if (s = f[e], s) for (o = 0, l = s.length; o < l; ++o) u = s[o], u && u[this.EL] === c && (!r || r === u[this.TYPE]) && h.push({
                type: u[this.TYPE],
                fn: u[this.FN],
                obj: u[this.OBJ],
                adjust: u[this.OVERRIDE],
                scope: u[this.ADJ_SCOPE],
                index: o
            });
            return h.length ? h : null
        },
        _unload: function (i) {
            for (var r = YAHOO.util.Event, e, u, h = t.slice(), o, f = 0, s = t.length; f < s; ++f) if (u = h[f], u) {
                try {
                    o = window;
                    u[r.ADJ_SCOPE] && (o = u[r.ADJ_SCOPE] === !0 ? u[r.UNLOAD_OBJ] : u[r.ADJ_SCOPE]);
                    u[r.FN].call(o, r.getEvent(i, u[r.EL]), u[r.UNLOAD_OBJ])
                } catch (c) {
                }
                h[f] = null
            }
            if (u = null, o = null, t = null, n) {
                for (e = n.length - 1; e > -1; e--) if (u = n[e], u) try {
                    r.removeListener(u[r.EL], u[r.TYPE], u[r.FN], e)
                } catch (l) {
                }
                u = null
            }
            try {
                r._simpleRemove(window, "unload", r._unload);
                r._simpleRemove(window, "load", r._load)
            } catch (a) {
            }
        },
        _getScrollLeft: function () {
            return this._getScroll()[1]
        },
        _getScrollTop: function () {
            return this._getScroll()[0]
        },
        _getScroll: function () {
            var n = document.documentElement, t = document.body;
            return n && (n.scrollTop || n.scrollLeft) ? [n.scrollTop, n.scrollLeft] : t ? [t.scrollTop, t.scrollLeft] : [0, 0]
        },
        regCE: function () {
        },
        _simpleAdd: function () {
            return window.addEventListener ? function (n, t, i, r) {
                n.addEventListener(t, i, r)
            } : window.attachEvent ? function (n, t, i) {
                n.attachEvent("on" + t, i)
            } : function () {
            }
        }(),
        _simpleRemove: function () {
            return window.removeEventListener ? function (n, t, i, r) {
                n.removeEventListener(t, i, r)
            } : window.detachEvent ? function (n, t, i) {
                n.detachEvent("on" + t, i)
            } : function () {
            }
        }()
    }
}(), function () {
    var n = YAHOO.util.Event, t;
    if (n.on = n.addListener, n.onFocus = n.addFocusListener, n.onBlur = n.addBlurListener, n.isIE) if (self !== self.top) document.onreadystatechange = function () {
        document.readyState == "complete" && (document.onreadystatechange = null, n._ready())
    }; else {
        YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach, YAHOO.util.Event, !0);
        t = document.createElement("p");
        n._dri = setInterval(function () {
            try {
                t.doScroll("left");
                clearInterval(n._dri);
                n._dri = null;
                n._ready();
                t = null
            } catch (i) {
            }
        }, n.POLL_INTERVAL)
    } else n.webkit && n.webkit < 525 ? n._dri = setInterval(function () {
        var t = document.readyState;
        ("loaded" == t || "complete" == t) && (clearInterval(n._dri), n._dri = null, n._ready())
    }, n.POLL_INTERVAL) : n._simpleAdd(document, "DOMContentLoaded", n._ready);
    n._simpleAdd(window, "load", n._load);
    n._simpleAdd(window, "unload", n._unload);
    n._tryPreloadAttach()
}());
YAHOO.util.EventProvider = function () {
};
YAHOO.util.EventProvider.prototype = {
    __yui_events: null, __yui_subscribers: null, subscribe: function (n, t, i, r) {
        var f, u;
        this.__yui_events = this.__yui_events || {};
        f = this.__yui_events[n];
        f ? f.subscribe(t, i, r) : (this.__yui_subscribers = this.__yui_subscribers || {}, u = this.__yui_subscribers, u[n] || (u[n] = []), u[n].push({
            fn: t,
            obj: i,
            overrideContext: r
        }))
    }, unsubscribe: function (n, t, i) {
        var r, f, u, e;
        if (this.__yui_events = this.__yui_events || {}, r = this.__yui_events, n) {
            if (f = r[n], f) return f.unsubscribe(t, i)
        } else {
            u = !0;
            for (e in r) YAHOO.lang.hasOwnProperty(r, e) && (u = u && r[e].unsubscribe(t, i));
            return u
        }
        return !1
    }, unsubscribeAll: function (n) {
        return this.unsubscribe(n)
    }, createEvent: function (n, t) {
        var i, f, e, r, u;
        if (this.__yui_events = this.__yui_events || {}, i = t || {}, f = this.__yui_events, !f[n] && (e = new YAHOO.util.CustomEvent(n, i.scope || this, i.silent, YAHOO.util.CustomEvent.FLAT, i.fireOnce), f[n] = e, i.onSubscribeCallback && e.subscribeEvent.subscribe(i.onSubscribeCallback), this.__yui_subscribers = this.__yui_subscribers || {}, r = this.__yui_subscribers[n], r)) for (u = 0; u < r.length; ++u) e.subscribe(r[u].fn, r[u].obj, r[u].overrideContext);
        return f[n]
    }, fireEvent: function (n) {
        var t, r, i;
        if (this.__yui_events = this.__yui_events || {}, t = this.__yui_events[n], !t) return null;
        for (r = [], i = 1; i < arguments.length; ++i) r.push(arguments[i]);
        return t.fire.apply(t, r)
    }, hasEvent: function (n) {
        return this.__yui_events && this.__yui_events[n] ? !0 : !1
    }
}, function () {
    var n = YAHOO.util.Event, i = YAHOO.lang, t;
    YAHOO.util.KeyListener = function (t, r, u, f) {
        function o(t) {
            var o, u, i, f;
            if (r.shift || (r.shift = !1), r.alt || (r.alt = !1), r.ctrl || (r.ctrl = !1), t.shiftKey == r.shift && t.altKey == r.alt && t.ctrlKey == r.ctrl) if (u = r.keys, YAHOO.lang.isArray(u)) {
                for (f = 0; f < u.length; f++) if (o = u[f], i = n.getCharCode(t), o == i) {
                    e.fire(i, t);
                    break
                }
            } else i = n.getCharCode(t), u == i && e.fire(i, t)
        }

        t && r && !u;
        f || (f = YAHOO.util.KeyListener.KEYDOWN);
        var e = new YAHOO.util.CustomEvent("keyPressed");
        this.enabledEvent = new YAHOO.util.CustomEvent("enabled");
        this.disabledEvent = new YAHOO.util.CustomEvent("disabled");
        i.isString(t) && (t = document.getElementById(t));
        i.isFunction(u) ? e.subscribe(u) : e.subscribe(u.fn, u.scope, u.correctScope);
        this.enable = function () {
            if (!this.enabled) {
                n.on(t, f, o);
                this.enabledEvent.fire(r)
            }
            this.enabled = !0
        };
        this.disable = function () {
            this.enabled && (n.removeListener(t, f, o), this.disabledEvent.fire(r));
            this.enabled = !1
        };
        this.toString = function () {
            return "KeyListener [" + r.keys + "] " + t.tagName + (t.id ? "[" + t.id + "]" : "")
        }
    };
    t = YAHOO.util.KeyListener;
    t.KEYDOWN = "keydown";
    t.KEYUP = "keyup";
    t.KEY = {
        ALT: 18,
        BACK_SPACE: 8,
        CAPS_LOCK: 20,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        META: 224,
        NUM_LOCK: 144,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PAUSE: 19,
        PRINTSCREEN: 44,
        RIGHT: 39,
        SCROLL_LOCK: 145,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }
}();
YAHOO.register("event", YAHOO.util.Event, {version: "2.9.0", build: "2800"});
YAHOO.register("yahoo-dom-event", YAHOO, {version: "2.9.0", build: "2800"});
YAHOO.util.Connect = {
    _msxml_progid: ["Microsoft.XMLHTTP", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP"],
    _http_headers: {},
    _has_http_headers: !1,
    _use_default_post_header: !0,
    _default_post_header: "application/x-www-form-urlencoded; charset=UTF-8",
    _default_form_header: "application/x-www-form-urlencoded",
    _use_default_xhr_header: !0,
    _default_xhr_header: "XMLHttpRequest",
    _has_default_headers: !0,
    _isFormSubmit: !1,
    _default_headers: {},
    _poll: {},
    _timeOut: {},
    _polling_interval: 50,
    _transaction_id: 0,
    startEvent: new YAHOO.util.CustomEvent("start"),
    completeEvent: new YAHOO.util.CustomEvent("complete"),
    successEvent: new YAHOO.util.CustomEvent("success"),
    failureEvent: new YAHOO.util.CustomEvent("failure"),
    abortEvent: new YAHOO.util.CustomEvent("abort"),
    _customEvents: {
        onStart: ["startEvent", "start"],
        onComplete: ["completeEvent", "complete"],
        onSuccess: ["successEvent", "success"],
        onFailure: ["failureEvent", "failure"],
        onUpload: ["uploadEvent", "upload"],
        onAbort: ["abortEvent", "abort"]
    },
    setProgId: function (n) {
        this._msxml_progid.unshift(n)
    },
    setDefaultPostHeader: function (n) {
        typeof n == "string" ? (this._default_post_header = n, this._use_default_post_header = !0) : typeof n == "boolean" && (this._use_default_post_header = n)
    },
    setDefaultXhrHeader: function (n) {
        typeof n == "string" ? this._default_xhr_header = n : this._use_default_xhr_header = n
    },
    setPollingInterval: function (n) {
        typeof n == "number" && isFinite(n) && (this._polling_interval = n)
    },
    createXhrObject: function (n) {
        var r, t, i;
        try {
            t = new XMLHttpRequest;
            r = {conn: t, tId: n, xhr: !0}
        } catch (u) {
            for (i = 0; i < this._msxml_progid.length; ++i) try {
                t = new ActiveXObject(this._msxml_progid[i]);
                r = {conn: t, tId: n, xhr: !0};
                break
            } catch (f) {
            }
        } finally {
            return r
        }
    },
    getConnectionObject: function (n) {
        var t, i = this._transaction_id;
        try {
            n ? (t = {tId: i}, n === "xdr" ? (t.conn = this._transport, t.xdr = !0) : n === "upload" && (t.upload = !0)) : t = this.createXhrObject(i);
            t && this._transaction_id++
        } catch (r) {
        }
        return t
    },
    asyncRequest: function (n, t, i, r) {
        var e = i && i.argument ? i.argument : null, o = this, u, f;
        if (this._isFileUpload ? f = "upload" : i && i.xdr && (f = "xdr"), u = this.getConnectionObject(f), u) {
            if (i && i.customevents && this.initCustomEvents(u, i), this._isFormSubmit) {
                if (this._isFileUpload) return window.setTimeout(function () {
                    o.uploadFile(u, i, t, r)
                }, 10), u;
                n.toUpperCase() == "GET" ? this._sFormData.length !== 0 && (t += (t.indexOf("?") == -1 ? "?" : "&") + this._sFormData) : n.toUpperCase() == "POST" && (r = r ? this._sFormData + "&" + r : this._sFormData)
            }
            return (n.toUpperCase() == "GET" && i && i.cache === !1 && (t += (t.indexOf("?") == -1 ? "?" : "&") + "rnd=" + (new Date).valueOf().toString()), this._use_default_xhr_header && (this._default_headers["X-Requested-With"] || this.initHeader("X-Requested-With", this._default_xhr_header, !0)), n.toUpperCase() === "POST" && this._use_default_post_header && this._isFormSubmit === !1 && this.initHeader("Content-Type", this._default_post_header), u.xdr) ? (this.xdr(u, n, t, i, r), u) : (u.conn.open(n, t, !0), (this._has_default_headers || this._has_http_headers) && this.setHeader(u), this.handleReadyState(u, i), u.conn.send(r || ""), this._isFormSubmit === !0 && this.resetFormState(), this.startEvent.fire(u, e), u.startEvent && u.startEvent.fire(u, e), u)
        }
        return null
    },
    initCustomEvents: function (n, t) {
        var i;
        for (i in t.customevents) this._customEvents[i][0] && (n[this._customEvents[i][0]] = new YAHOO.util.CustomEvent(this._customEvents[i][1], t.scope ? t.scope : null), n[this._customEvents[i][0]].subscribe(t.customevents[i]))
    },
    handleReadyState: function (n, t) {
        var i = this, r = t && t.argument ? t.argument : null;
        t && t.timeout && (this._timeOut[n.tId] = window.setTimeout(function () {
            i.abort(n, t, !0)
        }, t.timeout));
        this._poll[n.tId] = window.setInterval(function () {
            n.conn && n.conn.readyState === 4 && (window.clearInterval(i._poll[n.tId]), delete i._poll[n.tId], t && t.timeout && (window.clearTimeout(i._timeOut[n.tId]), delete i._timeOut[n.tId]), i.completeEvent.fire(n, r), n.completeEvent && n.completeEvent.fire(n, r), i.handleTransactionResponse(n, t))
        }, this._polling_interval)
    },
    handleTransactionResponse: function (n, t, i) {
        var u, r, f = t && t.argument ? t.argument : null, e = n.r && n.r.statusText === "xdr:success" ? !0 : !1,
            o = n.r && n.r.statusText === "xdr:failure" ? !0 : !1, s = i;
        try {
            u = n.conn.status !== undefined && n.conn.status !== 0 || e ? n.conn.status : o && !s ? 0 : 13030
        } catch (h) {
            u = 13030
        }
        if (u >= 200 && u < 300 || u === 1223 || e) r = n.xdr ? n.r : this.createResponseObject(n, f), t && t.success && (t.scope ? t.success.apply(t.scope, [r]) : t.success(r)), this.successEvent.fire(r), n.successEvent && n.successEvent.fire(r); else {
            switch (u) {
                case 12002:
                case 12029:
                case 12030:
                case 12031:
                case 12152:
                case 13030:
                    r = this.createExceptionObject(n.tId, f, i ? i : !1);
                    t && t.failure && (t.scope ? t.failure.apply(t.scope, [r]) : t.failure(r));
                    break;
                default:
                    r = n.xdr ? n.response : this.createResponseObject(n, f);
                    t && t.failure && (t.scope ? t.failure.apply(t.scope, [r]) : t.failure(r))
            }
            this.failureEvent.fire(r);
            n.failureEvent && n.failureEvent.fire(r)
        }
        this.releaseObject(n);
        r = null
    },
    createResponseObject: function (n, t) {
        var i = {}, o = {}, r, e, u, f;
        try {
            for (e = n.conn.getAllResponseHeaders(), u = e.split("\n"), r = 0; r < u.length; r++) f = u[r].indexOf(":"), f != -1 && (o[u[r].substring(0, f)] = YAHOO.lang.trim(u[r].substring(f + 2)))
        } catch (s) {
        }
        return i.tId = n.tId, i.status = n.conn.status == 1223 ? 204 : n.conn.status, i.statusText = n.conn.status == 1223 ? "No Content" : n.conn.statusText, i.getResponseHeader = o, i.getAllResponseHeaders = e, i.responseText = n.conn.responseText, i.responseXML = n.conn.responseXML, t && (i.argument = t), i
    },
    createExceptionObject: function (n, t, i) {
        var r = {};
        return r.tId = n, i ? (r.status = -1, r.statusText = "transaction aborted") : (r.status = 0, r.statusText = "communication failure"), t && (r.argument = t), r
    },
    initHeader: function (n, t, i) {
        var r = i ? this._default_headers : this._http_headers;
        r[n] = t;
        i ? this._has_default_headers = !0 : this._has_http_headers = !0
    },
    setHeader: function (n) {
        var t;
        if (this._has_default_headers) for (t in this._default_headers) YAHOO.lang.hasOwnProperty(this._default_headers, t) && n.conn.setRequestHeader(t, this._default_headers[t]);
        if (this._has_http_headers) {
            for (t in this._http_headers) YAHOO.lang.hasOwnProperty(this._http_headers, t) && n.conn.setRequestHeader(t, this._http_headers[t]);
            this._http_headers = {};
            this._has_http_headers = !1
        }
    },
    resetDefaultHeaders: function () {
        this._default_headers = {};
        this._has_default_headers = !1
    },
    abort: function (n, t, i) {
        var r, f = t && t.argument ? t.argument : null, e, u;
        return n = n || {}, n.conn ? n.xhr ? this.isCallInProgress(n) && (n.conn.abort(), window.clearInterval(this._poll[n.tId]), delete this._poll[n.tId], i && (window.clearTimeout(this._timeOut[n.tId]), delete this._timeOut[n.tId]), r = !0) : n.xdr && (n.conn.abort(n.tId), r = !0) : n.upload ? (e = "yuiIO" + n.tId, u = document.getElementById(e), u && (YAHOO.util.Event.removeListener(u, "load"), document.body.removeChild(u), i && (window.clearTimeout(this._timeOut[n.tId]), delete this._timeOut[n.tId]), r = !0)) : r = !1, r === !0 && (this.abortEvent.fire(n, f), n.abortEvent && n.abortEvent.fire(n, f), this.handleTransactionResponse(n, t, !0)), r
    },
    isCallInProgress: function (n) {
        return n = n || {}, n.xhr && n.conn ? n.conn.readyState !== 4 && n.conn.readyState !== 0 : n.xdr && n.conn ? n.conn.isCallInProgress(n.tId) : n.upload === !0 ? document.getElementById("yuiIO" + n.tId) ? !0 : !1 : !1
    },
    releaseObject: function (n) {
        n && n.conn && (n.conn = null, n = null)
    }
};
YAHOO.register("connection_core", YAHOO.util.Connect, {version: "2.9.0", build: "2800"}), function () {
    var i = YAHOO.util.Dom, n = YAHOO.util.Event, u = YAHOO.lang, t = YAHOO.widget, r, f;
    YAHOO.widget.TreeView = function (n, t) {
        n && this.init(n);
        t ? this.buildTreeFromObject(t) : u.trim(this._el.innerHTML) && this.buildTreeFromMarkup(n)
    };
    r = t.TreeView;
    r.prototype = {
        id: null,
        _el: null,
        _nodes: null,
        locked: !1,
        _expandAnim: null,
        _collapseAnim: null,
        _animCount: 0,
        maxAnim: 2,
        _hasDblClickSubscriber: !1,
        _dblClickTimer: null,
        currentFocus: null,
        singleNodeHighlight: !1,
        _currentlyHighlighted: null,
        setExpandAnim: function (n) {
            this._expandAnim = t.TVAnim.isValid(n) ? n : null
        },
        setCollapseAnim: function (n) {
            this._collapseAnim = t.TVAnim.isValid(n) ? n : null
        },
        animateExpand: function (n, i) {
            if (this._expandAnim && this._animCount < this.maxAnim) {
                var u = this, r = t.TVAnim.getAnim(this._expandAnim, n, function () {
                    u.expandComplete(i)
                });
                return r && (++this._animCount, this.fireEvent("animStart", {node: i, type: "expand"}), r.animate()), !0
            }
            return !1
        },
        animateCollapse: function (n, i) {
            if (this._collapseAnim && this._animCount < this.maxAnim) {
                var u = this, r = t.TVAnim.getAnim(this._collapseAnim, n, function () {
                    u.collapseComplete(i)
                });
                return r && (++this._animCount, this.fireEvent("animStart", {
                    node: i,
                    type: "collapse"
                }), r.animate()), !0
            }
            return !1
        },
        expandComplete: function (n) {
            --this._animCount;
            this.fireEvent("animComplete", {node: n, type: "expand"})
        },
        collapseComplete: function (n) {
            --this._animCount;
            this.fireEvent("animComplete", {node: n, type: "collapse"})
        },
        init: function (n) {
            var u, f;
            this._el = i.get(n);
            this.id = i.generateId(this._el, "yui-tv-auto-id-");
            this.createEvent("animStart", this);
            this.createEvent("animComplete", this);
            this.createEvent("collapse", this);
            this.createEvent("collapseComplete", this);
            this.createEvent("expand", this);
            this.createEvent("expandComplete", this);
            this.createEvent("enterKeyPressed", this);
            this.createEvent("clickEvent", this);
            this.createEvent("focusChanged", this);
            u = this;
            this.createEvent("dblClickEvent", {
                scope: this, onSubscribeCallback: function () {
                    u._hasDblClickSubscriber = !0
                }
            });
            this.createEvent("labelClick", this);
            this.createEvent("highlightEvent", this);
            this._nodes = [];
            r.trees[this.id] = this;
            this.root = new t.RootNode(this);
            f = t.LogWriter;
            this._initEditor && this._initEditor()
        },
        buildTreeFromObject: function (n) {
            var i = function (n, r) {
                for (var f, e, l, o, c, s, h = 0; h < r.length; h++) if (f = r[h], u.isString(f)) e = new t.TextNode(f, n); else if (u.isObject(f)) {
                    l = f.children;
                    delete f.children;
                    o = f.type || "text";
                    delete f.type;
                    switch (u.isString(o) && o.toLowerCase()) {
                        case"text":
                            e = new t.TextNode(f, n);
                            break;
                        case"menu":
                            e = new t.MenuNode(f, n);
                            break;
                        case"html":
                            e = new t.HTMLNode(f, n);
                            break;
                        default:
                            if (c = u.isString(o) ? t[o] : o, u.isObject(c)) {
                                for (s = c; s && s !== t.Node; s = s.superclass.constructor) ;
                                s && (e = new c(f, n))
                            }
                    }
                    l && i(e, l)
                }
            };
            u.isArray(n) || (n = [n]);
            i(this.root, n)
        },
        buildTreeFromMarkup: function (n) {
            var t = function (n) {
                for (var r, h = [], f = {}, o, s, c, e = i.getFirstChild(n); e; e = i.getNextSibling(e)) switch (e.tagName.toUpperCase()) {
                    case"LI":
                        o = "";
                        f = {
                            expanded: i.hasClass(e, "expanded"),
                            title: e.title || e.alt || null,
                            className: u.trim(e.className.replace(/\bexpanded\b/, "")) || null
                        };
                        r = e.firstChild;
                        r.nodeType == 3 && (o = u.trim(r.nodeValue.replace(/[\n\t\r]*/g, "")), o ? (f.type = "text", f.label = o) : r = i.getNextSibling(r));
                        o || (r.tagName.toUpperCase() == "A" ? (f.type = "text", f.label = r.innerHTML, f.href = r.href, f.target = r.target, f.title = r.title || r.alt || f.title) : (f.type = "html", c = document.createElement("div"), c.appendChild(r.cloneNode(!0)), f.html = c.innerHTML, f.hasIcon = !0));
                        r = i.getNextSibling(r);
                        switch (r && r.tagName.toUpperCase()) {
                            case"UL":
                            case"OL":
                                f.children = t(r)
                        }
                        YAHOO.lang.JSON && (s = e.getAttribute("yuiConfig"), s && (s = YAHOO.lang.JSON.parse(s), f = YAHOO.lang.merge(f, s)));
                        h.push(f);
                        break;
                    case"UL":
                    case"OL":
                        f = {type: "text", label: "", children: t(r)};
                        h.push(f)
                }
                return h
            }, r = i.getChildrenBy(i.get(n), function (n) {
                var t = n.tagName.toUpperCase();
                return t == "UL" || t == "OL"
            });
            r.length && this.buildTreeFromObject(t(r[0]))
        },
        _getEventTargetTdEl: function (t) {
            for (var r = n.getTarget(t), f; r && !(r.tagName.toUpperCase() == "TD" && i.hasClass(r.parentNode, "ygtvrow"));) r = i.getAncestorByTagName(r, "td");
            return u.isNull(r) ? null : /\bygtv(blank)?depthcell/.test(r.className) ? null : r.id && (f = r.id.match(/\bygtv([^\d]*)(.*)/), f && f[2] && this._nodes[f[2]]) ? r : null
        },
        _onClickEvent: function (t) {
            var u = this, f = this._getEventTargetTdEl(t), r, e, o = function (i) {
                if (r.focus(), i || !r.href) {
                    r.toggle();
                    try {
                        n.preventDefault(t)
                    } catch (u) {
                    }
                }
            };
            f && (r = this.getNodeByElement(f), r) && (e = n.getTarget(t), (i.hasClass(e, r.labelStyle) || i.getAncestorByClassName(e, r.labelStyle)) && this.fireEvent("labelClick", r), this._closeEditor && this._closeEditor(!1), /\bygtv[tl][mp]h?h?/.test(f.className) ? o(!0) : this._dblClickTimer ? (window.clearTimeout(this._dblClickTimer), this._dblClickTimer = null) : this._hasDblClickSubscriber ? this._dblClickTimer = window.setTimeout(function () {
                u._dblClickTimer = null;
                u.fireEvent("clickEvent", {event: t, node: r}) !== !1 && o()
            }, 200) : u.fireEvent("clickEvent", {event: t, node: r}) !== !1 && o())
        },
        _onDblClickEvent: function (n) {
            if (this._hasDblClickSubscriber) {
                var t = this._getEventTargetTdEl(n);
                t && (/\bygtv[tl][mp]h?h?/.test(t.className) || (this.fireEvent("dblClickEvent", {
                    event: n,
                    node: this.getNodeByElement(t)
                }), this._dblClickTimer && (window.clearTimeout(this._dblClickTimer), this._dblClickTimer = null)))
            }
        },
        _onMouseOverEvent: function (n) {
            var t;
            (t = this._getEventTargetTdEl(n)) && (t = this.getNodeByElement(t)) && (t = t.getToggleEl()) && (t.className = t.className.replace(/\bygtv([lt])([mp])\b/gi, "ygtv$1$2h"))
        },
        _onMouseOutEvent: function (n) {
            var t;
            (t = this._getEventTargetTdEl(n)) && (t = this.getNodeByElement(t)) && (t = t.getToggleEl()) && (t.className = t.className.replace(/\bygtv([lt])([mp])h\b/gi, "ygtv$1$2"))
        },
        _onKeyDownEvent: function (t) {
            var s = n.getTarget(t), r = this.getNodeByElement(s), i = r, u = YAHOO.util.KeyListener.KEY, f, e, o;
            switch (t.keyCode) {
                case u.UP:
                    do i = i.previousSibling ? i.previousSibling : i.parent; while (i && !i._canHaveFocus());
                    i && i.focus();
                    n.preventDefault(t);
                    break;
                case u.DOWN:
                    do i.nextSibling ? i = i.nextSibling : (i.expand(), i = (i.children.length || null) && i.children[0]); while (i && !i._canHaveFocus);
                    i && i.focus();
                    n.preventDefault(t);
                    break;
                case u.LEFT:
                    do i = i.parent ? i.parent : i.previousSibling; while (i && !i._canHaveFocus());
                    i && i.focus();
                    n.preventDefault(t);
                    break;
                case u.RIGHT:
                    f = this;
                    o = function (n) {
                        f.unsubscribe("expandComplete", o);
                        e(n)
                    };
                    e = function (n) {
                        do if (n.isDynamic() && !n.childrenRendered) {
                            f.subscribe("expandComplete", o);
                            n.expand();
                            n = null;
                            break
                        } else n.expand(), n = n.children.length ? n.children[0] : n.nextSibling; while (n && !n._canHaveFocus());
                        n && n.focus()
                    };
                    e(i);
                    n.preventDefault(t);
                    break;
                case u.ENTER:
                    r.href ? r.target ? window.open(r.href, r.target) : window.location(r.href) : r.toggle();
                    this.fireEvent("enterKeyPressed", r);
                    n.preventDefault(t);
                    break;
                case u.HOME:
                    i = this.getRoot();
                    i.children.length && (i = i.children[0]);
                    i._canHaveFocus() && i.focus();
                    n.preventDefault(t);
                    break;
                case u.END:
                    i = i.parent.children;
                    i = i[i.length - 1];
                    i._canHaveFocus() && i.focus();
                    n.preventDefault(t);
                    break;
                case 107:
                case 187:
                    t.shiftKey ? r.parent.expandAll() : r.expand();
                    break;
                case 109:
                case 189:
                    t.shiftKey ? r.parent.collapseAll() : r.collapse()
            }
        },
        render: function () {
            var i = this.root.getHtml(), t = this.getEl();
            if (t.innerHTML = i, !this._hasEvents) {
                n.on(t, "click", this._onClickEvent, this, !0);
                n.on(t, "dblclick", this._onDblClickEvent, this, !0);
                n.on(t, "mouseover", this._onMouseOverEvent, this, !0);
                n.on(t, "mouseout", this._onMouseOutEvent, this, !0);
                n.on(t, "keydown", this._onKeyDownEvent, this, !0)
            }
            this._hasEvents = !0
        },
        getEl: function () {
            return this._el || (this._el = i.get(this.id)), this._el
        },
        regNode: function (n) {
            this._nodes[n.index] = n
        },
        getRoot: function () {
            return this.root
        },
        setDynamicLoad: function (n, t) {
            this.root.setDynamicLoad(n, t)
        },
        expandAll: function () {
            this.locked || this.root.expandAll()
        },
        collapseAll: function () {
            this.locked || this.root.collapseAll()
        },
        getNodeByIndex: function (n) {
            var t = this._nodes[n];
            return t ? t : null
        },
        getNodeByProperty: function (n, t) {
            var r, i;
            for (r in this._nodes) if (this._nodes.hasOwnProperty(r) && (i = this._nodes[r], n in i && i[n] == t || i.data && t == i.data[n])) return i;
            return null
        },
        getNodesByProperty: function (n, t) {
            var r = [], u, i;
            for (u in this._nodes) this._nodes.hasOwnProperty(u) && (i = this._nodes[u], (n in i && i[n] == t || i.data && t == i.data[n]) && r.push(i));
            return r.length ? r : null
        },
        getNodesBy: function (n) {
            var t = [], i, r;
            for (i in this._nodes) this._nodes.hasOwnProperty(i) && (r = this._nodes[i], n(r) && t.push(r));
            return t.length ? t : null
        },
        getNodeByElement: function (n) {
            var t = n, i;
            do {
                if (t && t.id && (i = t.id.match(/ygtv([^\d]*)(.*)/), i && i[2])) return this.getNodeByIndex(i[2]);
                if (t = t.parentNode, !t || !t.tagName) break
            } while (t.id !== this.id && t.tagName.toLowerCase() !== "body");
            return null
        },
        getHighlightedNode: function () {
            return this._currentlyHighlighted
        },
        removeNode: function (n, t) {
            if (n.isRoot()) return !1;
            var i = n.parent;
            return i.parent && (i = i.parent), this._deleteNode(n), t && i && i.childrenRendered && i.refresh(), !0
        },
        _removeChildren_animComplete: function (n) {
            this.unsubscribe(this._removeChildren_animComplete);
            this.removeChildren(n.node)
        },
        removeChildren: function (n) {
            if (n.expanded) {
                if (this._collapseAnim) {
                    this.subscribe("animComplete", this._removeChildren_animComplete, this, !0);
                    t.Node.prototype.collapse.call(n);
                    return
                }
                n.collapse()
            }
            while (n.children.length) this._deleteNode(n.children[0]);
            n.isRoot() && t.Node.prototype.expand.call(n);
            n.childrenRendered = !1;
            n.dynamicLoadComplete = !1;
            n.updateIcon()
        },
        _deleteNode: function (n) {
            this.removeChildren(n);
            this.popNode(n)
        },
        popNode: function (n) {
            for (var t = n.parent, r = [], i = 0, u = t.children.length; i < u; ++i) t.children[i] != n && (r[r.length] = t.children[i]);
            t.children = r;
            t.childrenRendered = !1;
            n.previousSibling && (n.previousSibling.nextSibling = n.nextSibling);
            n.nextSibling && (n.nextSibling.previousSibling = n.previousSibling);
            this.currentFocus == n && (this.currentFocus = null);
            this._currentlyHighlighted == n && (this._currentlyHighlighted = null);
            n.parent = null;
            n.previousSibling = null;
            n.nextSibling = null;
            n.tree = null;
            delete this._nodes[n.index]
        },
        destroy: function () {
            var t, i, r;
            for (this._destroyEditor && this._destroyEditor(), t = this.getEl(), n.removeListener(t, "click"), n.removeListener(t, "dblclick"), n.removeListener(t, "mouseover"), n.removeListener(t, "mouseout"), n.removeListener(t, "keydown"), i = 0; i < this._nodes.length; i++) r = this._nodes[i], r && r.destroy && r.destroy();
            t.innerHTML = "";
            this._hasEvents = !1
        },
        toString: function () {
            return "TreeView " + this.id
        },
        getNodeCount: function () {
            return this.getRoot().getNodeCount()
        },
        getTreeDefinition: function () {
            return this.getRoot().getNodeDefinition()
        },
        onExpand: function () {
        },
        onCollapse: function () {
        },
        setNodesProperty: function (n, t, i) {
            this.root.setNodesProperty(n, t);
            i && this.root.refresh()
        },
        onEventToggleHighlight: function (n) {
            var i;
            if ("node" in n && n.node instanceof t.Node) i = n.node; else if (n instanceof t.Node) i = n; else return !1;
            return i.toggleHighlight(), !1
        }
    };
    f = r.prototype;
    f.draw = f.render;
    YAHOO.augment(r, YAHOO.util.EventProvider);
    r.nodeCount = 0;
    r.trees = [];
    r.getTree = function (n) {
        var t = r.trees[n];
        return t ? t : null
    };
    r.getNode = function (n, t) {
        var i = r.getTree(n);
        return i ? i.getNodeByIndex(t) : null
    };
    r.FOCUS_CLASS_NAME = "ygtvfocus"
}(), function () {
    var n = YAHOO.util.Dom, t = YAHOO.lang, i = YAHOO.util.Event;
    YAHOO.widget.Node = function (n, t, i) {
        n && this.init(n, t, i)
    };
    YAHOO.widget.Node.prototype = {
        index: 0,
        children: null,
        tree: null,
        data: null,
        parent: null,
        depth: -1,
        expanded: !1,
        multiExpand: !0,
        renderHidden: !1,
        childrenRendered: !1,
        dynamicLoadComplete: !1,
        previousSibling: null,
        nextSibling: null,
        _dynLoad: !1,
        dataLoader: null,
        isLoading: !1,
        hasIcon: !0,
        iconMode: 0,
        nowrap: !1,
        isLeaf: !1,
        contentStyle: "",
        contentElId: null,
        enableHighlight: !0,
        highlightState: 0,
        propagateHighlightUp: !1,
        propagateHighlightDown: !1,
        className: null,
        _type: "Node",
        init: function (n, i, r) {
            if (this.data = {}, this.children = [], this.index = YAHOO.widget.TreeView.nodeCount, ++YAHOO.widget.TreeView.nodeCount, this.contentElId = "ygtvcontentel" + this.index, t.isObject(n)) for (var u in n) n.hasOwnProperty(u) && (u.charAt(0) == "_" || t.isUndefined(this[u]) || t.isFunction(this[u]) ? this.data[u] = n[u] : this[u] = n[u]);
            t.isUndefined(r) || (this.expanded = r);
            this.createEvent("parentChange", this);
            i && i.appendChild(this)
        },
        applyParent: function (n) {
            if (!n) return !1;
            this.tree = n.tree;
            this.parent = n;
            this.depth = n.depth + 1;
            this.tree.regNode(this);
            n.childrenRendered = !1;
            for (var t = 0, i = this.children.length; t < i; ++t) this.children[t].applyParent(this);
            return this.fireEvent("parentChange"), !0
        },
        appendChild: function (n) {
            if (this.hasChildren()) {
                var t = this.children[this.children.length - 1];
                t.nextSibling = n;
                n.previousSibling = t
            }
            return this.children[this.children.length] = n, n.applyParent(this), this.childrenRendered && this.expanded && (this.getChildrenEl().style.display = ""), n
        },
        appendTo: function (n) {
            return n.appendChild(this)
        },
        insertBefore: function (n) {
            var t = n.parent, i;
            return t && (this.tree && this.tree.popNode(this), i = n.isChildOf(t), t.children.splice(i, 0, this), n.previousSibling && (n.previousSibling.nextSibling = this), this.previousSibling = n.previousSibling, this.nextSibling = n, n.previousSibling = this, this.applyParent(t)), this
        },
        insertAfter: function (n) {
            var t = n.parent, i;
            if (t) {
                if (this.tree && this.tree.popNode(this), i = n.isChildOf(t), !n.nextSibling) return this.nextSibling = null, this.appendTo(t);
                t.children.splice(i + 1, 0, this);
                n.nextSibling.previousSibling = this;
                this.previousSibling = n;
                this.nextSibling = n.nextSibling;
                n.nextSibling = this;
                this.applyParent(t)
            }
            return this
        },
        isChildOf: function (n) {
            if (n && n.children) for (var t = 0, i = n.children.length; t < i; ++t) if (n.children[t] === this) return t;
            return -1
        },
        getSiblings: function () {
            for (var n = this.parent.children.slice(0), t = 0; t < n.length && n[t] != this; t++) ;
            return (n.splice(t, 1), n.length) ? n : null
        },
        showChildren: function () {
            this.tree.animateExpand(this.getChildrenEl(), this) || this.hasChildren() && (this.getChildrenEl().style.display = "")
        },
        hideChildren: function () {
            this.tree.animateCollapse(this.getChildrenEl(), this) || (this.getChildrenEl().style.display = "none")
        },
        getElId: function () {
            return "ygtv" + this.index
        },
        getChildrenElId: function () {
            return "ygtvc" + this.index
        },
        getToggleElId: function () {
            return "ygtvt" + this.index
        },
        getEl: function () {
            return n.get(this.getElId())
        },
        getChildrenEl: function () {
            return n.get(this.getChildrenElId())
        },
        getToggleEl: function () {
            return n.get(this.getToggleElId())
        },
        getContentEl: function () {
            return n.get(this.contentElId)
        },
        collapse: function () {
            if (this.expanded) {
                var n = this.tree.onCollapse(this);
                !1 !== n && (n = this.tree.fireEvent("collapse", this), !1 !== n) && (this.getEl() ? (this.hideChildren(), this.expanded = !1, this.updateIcon()) : this.expanded = !1, n = this.tree.fireEvent("collapseComplete", this))
            }
        },
        expand: function (n) {
            var t, i, r;
            if (!this.isLoading && (!this.expanded || n)) {
                if (t = !0, !n) {
                    if (t = this.tree.onExpand(this), !1 === t) return;
                    t = this.tree.fireEvent("expand", this)
                }
                if (!1 !== t) {
                    if (!this.getEl()) {
                        this.expanded = !0;
                        return
                    }
                    if (this.childrenRendered || (this.getChildrenEl().innerHTML = this.renderChildren()), this.expanded = !0, this.updateIcon(), this.isLoading) {
                        this.expanded = !1;
                        return
                    }
                    if (!this.multiExpand) for (i = this.getSiblings(), r = 0; i && r < i.length; ++r) i[r] != this && i[r].expanded && i[r].collapse();
                    this.showChildren();
                    t = this.tree.fireEvent("expandComplete", this)
                }
            }
        },
        updateIcon: function () {
            if (this.hasIcon) {
                var t = this.getToggleEl();
                t && (t.className = t.className.replace(/\bygtv(([tl][pmn]h?)|(loading))\b/gi, this.getStyle()))
            }
            t = n.get("ygtvtableel" + this.index);
            t && (this.expanded ? n.replaceClass(t, "ygtv-collapsed", "ygtv-expanded") : n.replaceClass(t, "ygtv-expanded", "ygtv-collapsed"))
        },
        getStyle: function () {
            if (this.isLoading) return "ygtvloading";
            var t = this.nextSibling ? "t" : "l", n = "n";
            return (this.hasChildren(!0) || this.isDynamic() && !this.getIconMode()) && (n = this.expanded ? "m" : "p"), "ygtv" + t + n
        },
        getHoverStyle: function () {
            var n = this.getStyle();
            return this.hasChildren(!0) && !this.isLoading && (n += "h"), n
        },
        expandAll: function () {
            for (var i = this.children.length, n, t = 0; t < i; ++t) if (n = this.children[t], n.isDynamic()) break; else if (n.multiExpand) n.expand(), n.expandAll(); else break
        },
        collapseAll: function () {
            for (var n = 0; n < this.children.length; ++n) this.children[n].collapse(), this.children[n].collapseAll()
        },
        setDynamicLoad: function (n, t) {
            n ? (this.dataLoader = n, this._dynLoad = !0) : (this.dataLoader = null, this._dynLoad = !1);
            t && (this.iconMode = t)
        },
        isRoot: function () {
            return this == this.tree.root
        },
        isDynamic: function () {
            return this.isLeaf ? !1 : !this.isRoot() && (this._dynLoad || this.tree.root._dynLoad)
        },
        getIconMode: function () {
            return this.iconMode || this.tree.root.iconMode
        },
        hasChildren: function (n) {
            return this.isLeaf ? !1 : this.children.length > 0 || n && this.isDynamic() && !this.dynamicLoadComplete
        },
        toggle: function () {
            !this.tree.locked && (this.hasChildren(!0) || this.isDynamic()) && (this.expanded ? this.collapse() : this.expand())
        },
        getHtml: function () {
            return this.childrenRendered = !1, ['<div class="ygtvitem" id="', this.getElId(), '">', this.getNodeHtml(), this.getChildrenHtml(), "<\/div>"].join("")
        },
        getChildrenHtml: function () {
            var n = [];
            return n[n.length] = '<div class="ygtvchildren" id="' + this.getChildrenElId() + '"', this.expanded && this.hasChildren() || (n[n.length] = ' style="display:none;"'), n[n.length] = ">", (this.hasChildren(!0) && this.expanded || this.renderHidden && !this.isDynamic()) && (n[n.length] = this.renderChildren()), n[n.length] = "<\/div>", n.join("")
        },
        renderChildren: function () {
            var n = this;
            if (this.isDynamic() && !this.dynamicLoadComplete) {
                if (this.isLoading = !0, this.tree.locked = !0, this.dataLoader) setTimeout(function () {
                    n.dataLoader(n, function () {
                        n.loadComplete()
                    })
                }, 10); else if (this.tree.root.dataLoader) setTimeout(function () {
                    n.tree.root.dataLoader(n, function () {
                        n.loadComplete()
                    })
                }, 10); else return "Error: data loader not found or not specified.";
                return ""
            }
            return this.completeRender()
        },
        completeRender: function () {
            for (var t = [], n = 0; n < this.children.length; ++n) t[t.length] = this.children[n].getHtml();
            return this.childrenRendered = !0, t.join("")
        },
        loadComplete: function () {
            if (this.getChildrenEl().innerHTML = this.completeRender(), this.propagateHighlightDown) if (this.highlightState !== 1 || this.tree.singleNodeHighlight) {
                if (this.highlightState === 0 || this.tree.singleNodeHighlight) for (n = 0; n < this.children.length; n++) this.children[n].unhighlight(!0)
            } else for (var n = 0; n < this.children.length; n++) this.children[n].highlight(!0);
            this.dynamicLoadComplete = !0;
            this.isLoading = !1;
            this.expand(!0);
            this.tree.locked = !1
        },
        getAncestor: function (n) {
            if (n >= this.depth || n < 0) return null;
            for (var t = this.parent; t.depth > n;) t = t.parent;
            return t
        },
        getDepthStyle: function (n) {
            return this.getAncestor(n).nextSibling ? "ygtvdepthcell" : "ygtvblankdepthcell"
        },
        getNodeHtml: function () {
            var n = [], t;
            for (n[n.length] = '<table id="ygtvtableel' + this.index + '" border="0" cellpadding="0" cellspacing="0" class="ygtvtable ygtvdepth' + this.depth, n[n.length] = " ygtv-" + (this.expanded ? "expanded" : "collapsed"), this.enableHighlight && (n[n.length] = " ygtv-highlight" + this.highlightState), this.className && (n[n.length] = " " + this.className), n[n.length] = '"><tr class="ygtvrow">', t = 0; t < this.depth; ++t) n[n.length] = '<td class="ygtvcell ' + this.getDepthStyle(t) + '"><div class="ygtvspacer"><\/div><\/td>';
            return this.hasIcon && (n[n.length] = '<td id="' + this.getToggleElId(), n[n.length] = '" class="ygtvcell ', n[n.length] = this.getStyle(), n[n.length] = '"><a href="#" class="ygtvspacer">&#160;<\/a><\/td>'), n[n.length] = '<td id="' + this.contentElId, n[n.length] = '" class="ygtvcell ', n[n.length] = this.contentStyle + ' ygtvcontent" ', n[n.length] = this.nowrap ? ' nowrap="nowrap" ' : "", n[n.length] = " >", n[n.length] = this.getContentHtml(), n[n.length] = "<\/td><\/tr><\/table>", n.join("")
        },
        getContentHtml: function () {
            return ""
        },
        refresh: function () {
            if (this.getChildrenEl().innerHTML = this.completeRender(), this.hasIcon) {
                var n = this.getToggleEl();
                n && (n.className = n.className.replace(/\bygtv[lt][nmp]h*\b/gi, this.getStyle()))
            }
        },
        toString: function () {
            return this._type + " (" + this.index + ")"
        },
        _focusHighlightedItems: [],
        _focusedItem: null,
        _canHaveFocus: function () {
            return this.getEl().getElementsByTagName("a").length > 0
        },
        _removeFocus: function () {
            this._focusedItem && (i.removeListener(this._focusedItem, "blur"), this._focusedItem = null);
            for (var t; t = this._focusHighlightedItems.shift();) n.removeClass(t, YAHOO.widget.TreeView.FOCUS_CLASS_NAME)
        },
        focus: function () {
            var r = !1, t = this, u;
            return this.tree.currentFocus && this.tree.currentFocus._removeFocus(), u = function (n) {
                n.parent && (u(n.parent), n.parent.expand())
            }, u(this), n.getElementsBy(function (n) {
                return /ygtv(([tl][pmn]h?)|(content))/.test(n.className)
            }, "td", t.getEl().firstChild, function (u) {
                if (n.addClass(u, YAHOO.widget.TreeView.FOCUS_CLASS_NAME), !r) {
                    var f = u.getElementsByTagName("a");
                    if (f.length) {
                        f = f[0];
                        f.focus();
                        t._focusedItem = f;
                        i.on(f, "blur", function () {
                            t.tree.fireEvent("focusChanged", {oldNode: t.tree.currentFocus, newNode: null});
                            t.tree.currentFocus = null;
                            t._removeFocus()
                        });
                        r = !0
                    }
                }
                t._focusHighlightedItems.push(u)
            }), r ? (this.tree.fireEvent("focusChanged", {
                oldNode: this.tree.currentFocus,
                newNode: this
            }), this.tree.currentFocus = this) : (this.tree.fireEvent("focusChanged", {
                oldNode: t.tree.currentFocus,
                newNode: null
            }), this.tree.currentFocus = null, this._removeFocus()), r
        },
        getNodeCount: function () {
            for (var n = 0, t = 0; n < this.children.length; n++) t += this.children[n].getNodeCount();
            return t + 1
        },
        getNodeDefinition: function () {
            var u, n, i, r;
            if (this.isDynamic()) return !1;
            for (n = t.merge(this.data), i = [], this.expanded && (n.expanded = this.expanded), this.multiExpand || (n.multiExpand = this.multiExpand), this.renderHidden && (n.renderHidden = this.renderHidden), this.hasIcon || (n.hasIcon = this.hasIcon), this.nowrap && (n.nowrap = this.nowrap), this.className && (n.className = this.className), this.editable && (n.editable = this.editable), this.enableHighlight || (n.enableHighlight = this.enableHighlight), this.highlightState && (n.highlightState = this.highlightState), this.propagateHighlightUp && (n.propagateHighlightUp = this.propagateHighlightUp), this.propagateHighlightDown && (n.propagateHighlightDown = this.propagateHighlightDown), n.type = this._type, r = 0; r < this.children.length; r++) {
                if (u = this.children[r].getNodeDefinition(), u === !1) return !1;
                i.push(u)
            }
            return i.length && (n.children = i), n
        },
        getToggleLink: function () {
            return "return false;"
        },
        setNodesProperty: function (n, i, r) {
            n.charAt(0) == "_" || t.isUndefined(this[n]) || t.isFunction(this[n]) ? this.data[n] = i : this[n] = i;
            for (var u = 0; u < this.children.length; u++) this.children[u].setNodesProperty(n, i);
            r && this.refresh()
        },
        toggleHighlight: function () {
            this.enableHighlight && (this.highlightState == 1 ? this.unhighlight() : this.highlight())
        },
        highlight: function (n) {
            if (this.enableHighlight) {
                if (this.tree.singleNodeHighlight && (this.tree._currentlyHighlighted && this.tree._currentlyHighlighted.unhighlight(n), this.tree._currentlyHighlighted = this), this.highlightState = 1, this._setHighlightClassName(), !this.tree.singleNodeHighlight) {
                    if (this.propagateHighlightDown) for (var t = 0; t < this.children.length; t++) this.children[t].highlight(!0);
                    this.propagateHighlightUp && this.parent && this.parent._childrenHighlighted()
                }
                n || this.tree.fireEvent("highlightEvent", this)
            }
        },
        unhighlight: function (n) {
            if (this.enableHighlight) {
                if (this.tree._currentlyHighlighted = null, this.highlightState = 0, this._setHighlightClassName(), !this.tree.singleNodeHighlight) {
                    if (this.propagateHighlightDown) for (var t = 0; t < this.children.length; t++) this.children[t].unhighlight(!0);
                    this.propagateHighlightUp && this.parent && this.parent._childrenHighlighted()
                }
                n || this.tree.fireEvent("highlightEvent", this)
            }
        },
        _childrenHighlighted: function () {
            var n = !1, i = !1, t;
            if (this.enableHighlight) {
                for (t = 0; t < this.children.length; t++) switch (this.children[t].highlightState) {
                    case 0:
                        i = !0;
                        break;
                    case 1:
                        n = !0;
                        break;
                    case 2:
                        n = i = !0
                }
                this.highlightState = n && i ? 2 : n ? 1 : 0;
                this._setHighlightClassName();
                this.propagateHighlightUp && this.parent && this.parent._childrenHighlighted()
            }
        },
        _setHighlightClassName: function () {
            var t = n.get("ygtvtableel" + this.index);
            t && (t.className = t.className.replace(/\bygtv-highlight\d\b/gi, "ygtv-highlight" + this.highlightState))
        }
    };
    YAHOO.augment(YAHOO.widget.Node, YAHOO.util.EventProvider)
}();
YAHOO.widget.RootNode = function (n) {
    this.init(null, null, !0);
    this.tree = n
};
YAHOO.extend(YAHOO.widget.RootNode, YAHOO.widget.Node, {
    _type: "RootNode", getNodeHtml: function () {
        return ""
    }, toString: function () {
        return this._type
    }, loadComplete: function () {
        this.tree.draw()
    }, getNodeCount: function () {
        for (var n = 0, t = 0; n < this.children.length; n++) t += this.children[n].getNodeCount();
        return t
    }, getNodeDefinition: function () {
        for (var n, i = [], t = 0; t < this.children.length; t++) {
            if (n = this.children[t].getNodeDefinition(), n === !1) return !1;
            i.push(n)
        }
        return i
    }, collapse: function () {
    }, expand: function () {
    }, getSiblings: function () {
        return null
    }, focus: function () {
    }
}), function () {
    var t = YAHOO.util.Dom, n = YAHOO.lang, i = YAHOO.util.Event;
    YAHOO.widget.TextNode = function (t, i, r) {
        t && (n.isString(t) && (t = {label: t}), this.init(t, i, r), this.setUpLabel(t))
    };
    YAHOO.extend(YAHOO.widget.TextNode, YAHOO.widget.Node, {
        labelStyle: "ygtvlabel",
        labelElId: null,
        label: null,
        title: null,
        href: null,
        target: "_self",
        _type: "TextNode",
        setUpLabel: function (t) {
            n.isString(t) ? t = {label: t} : t.style && (this.labelStyle = t.style);
            this.label = t.label;
            this.labelElId = "ygtvlabelel" + this.index
        },
        getLabelEl: function () {
            return t.get(this.labelElId)
        },
        getContentHtml: function () {
            var t = [];
            return t[t.length] = this.href ? "<a" : "<span", t[t.length] = ' id="' + n.escapeHTML(this.labelElId) + '"', t[t.length] = ' class="' + n.escapeHTML(this.labelStyle) + '"', this.href && (t[t.length] = ' href="' + n.escapeHTML(this.href) + '"', t[t.length] = ' target="' + n.escapeHTML(this.target) + '"'), this.title && (t[t.length] = ' title="' + n.escapeHTML(this.title) + '"'), t[t.length] = " >", t[t.length] = n.escapeHTML(this.label), t[t.length] = this.href ? "<\/a>" : "<\/span>", t.join("")
        },
        getNodeDefinition: function () {
            var n = YAHOO.widget.TextNode.superclass.getNodeDefinition.call(this);
            return n === !1 ? !1 : (n.label = this.label, this.labelStyle != "ygtvlabel" && (n.style = this.labelStyle), this.title && (n.title = this.title), this.href && (n.href = this.href), this.target != "_self" && (n.target = this.target), n)
        },
        toString: function () {
            return YAHOO.widget.TextNode.superclass.toString.call(this) + ": " + this.label
        },
        onLabelClick: function () {
            return !1
        },
        refresh: function () {
            YAHOO.widget.TextNode.superclass.refresh.call(this);
            var n = this.getLabelEl();
            n.innerHTML = this.label;
            n.tagName.toUpperCase() == "A" && (n.href = this.href, n.target = this.target)
        }
    })
}();
YAHOO.widget.MenuNode = function (n, t, i) {
    YAHOO.widget.MenuNode.superclass.constructor.call(this, n, t, i);
    this.multiExpand = !1
};
YAHOO.extend(YAHOO.widget.MenuNode, YAHOO.widget.TextNode, {_type: "MenuNode"}), function () {
    var i = YAHOO.util.Dom, t = YAHOO.lang, r = YAHOO.util.Event, n = function (n, t, i, r) {
        n && (this.init(n, t, i), this.initContent(n, r))
    };
    YAHOO.widget.HTMLNode = n;
    YAHOO.extend(n, YAHOO.widget.Node, {
        contentStyle: "ygtvhtml",
        html: null,
        _type: "HTMLNode",
        initContent: function (n, i) {
            this.setHtml(n);
            this.contentElId = "ygtvcontentel" + this.index;
            t.isUndefined(i) || (this.hasIcon = i)
        },
        setHtml: function (n) {
            this.html = t.isObject(n) && "html" in n ? n.html : n;
            var i = this.getContentEl();
            i && (i.innerHTML = n.nodeType && n.nodeType == 1 && n.tagName ? "" : this.html)
        },
        getContentHtml: function () {
            return typeof this.html == "string" ? this.html : (n._deferredNodes.push(this), n._timer || (n._timer = window.setTimeout(function () {
                for (var t; t = n._deferredNodes.pop();) t.getContentEl().appendChild(t.html);
                n._timer = null
            }, 0)), "")
        },
        getNodeDefinition: function () {
            var t = n.superclass.getNodeDefinition.call(this);
            return t === !1 ? !1 : (t.html = this.html, t)
        }
    });
    n._deferredNodes = [];
    n._timer = null
}(), function () {
    var i = YAHOO.util.Dom, t = YAHOO.lang, r = YAHOO.util.Event, n = YAHOO.widget.Calendar;
    YAHOO.widget.DateNode = function (n, t, i) {
        YAHOO.widget.DateNode.superclass.constructor.call(this, n, t, i)
    };
    YAHOO.extend(YAHOO.widget.DateNode, YAHOO.widget.TextNode, {
        _type: "DateNode", calendarConfig: null, fillEditorContainer: function (r) {
            var u, o = r.inputContainer, f, e;
            if (t.isUndefined(n)) {
                i.replaceClass(r.editorPanel, "ygtv-edit-DateNode", "ygtv-edit-TextNode");
                YAHOO.widget.DateNode.superclass.fillEditorContainer.call(this, r);
                return
            }
            r.nodeType != this._type ? (r.nodeType = this._type, r.saveOnEnter = !1, r.node.destroyEditorContents(r), r.inputObject = u = new n(o.appendChild(document.createElement("div"))), this.calendarConfig && (u.cfg.applyConfig(this.calendarConfig, !0), u.cfg.fireQueue()), u.selectEvent.subscribe(function () {
                this.tree._closeEditor(!0)
            }, this, !0)) : u = r.inputObject;
            r.oldValue = this.label;
            u.cfg.setProperty("selected", this.label, !1);
            f = u.cfg.getProperty("DATE_FIELD_DELIMITER");
            e = this.label.split(f);
            u.cfg.setProperty("pagedate", e[u.cfg.getProperty("MDY_MONTH_POSITION") - 1] + f + e[u.cfg.getProperty("MDY_YEAR_POSITION") - 1]);
            u.cfg.fireQueue();
            u.render();
            u.oDomContainer.focus()
        }, getEditorValue: function (i) {
            if (t.isUndefined(n)) return i.inputElement.value;
            var r = i.inputObject, f = r.getSelectedDates()[0], u = [];
            return u[r.cfg.getProperty("MDY_DAY_POSITION") - 1] = f.getDate(), u[r.cfg.getProperty("MDY_MONTH_POSITION") - 1] = f.getMonth() + 1, u[r.cfg.getProperty("MDY_YEAR_POSITION") - 1] = f.getFullYear(), u.join(r.cfg.getProperty("DATE_FIELD_DELIMITER"))
        }, displayEditedValue: function (n, t) {
            var i = t.node;
            i.label = n;
            i.getLabelEl().innerHTML = n
        }, getNodeDefinition: function () {
            var n = YAHOO.widget.DateNode.superclass.getNodeDefinition.call(this);
            return n === !1 ? !1 : (this.calendarConfig && (n.calendarConfig = this.calendarConfig), n)
        }
    })
}(), function () {
    var n = YAHOO.util.Dom, e = YAHOO.lang, t = YAHOO.util.Event, r = YAHOO.widget.TreeView, u = r.prototype, i, f;
    r.editorData = {
        active: !1,
        whoHasIt: null,
        nodeType: null,
        editorPanel: null,
        inputContainer: null,
        buttonsContainer: null,
        node: null,
        saveOnEnter: !0,
        oldValue: undefined
    };
    u.validator = null;
    u._initEditor = function () {
        this.createEvent("editorSaveEvent", this);
        this.createEvent("editorCancelEvent", this)
    };
    u._nodeEditing = function (i) {
        if (i.fillEditorContainer && i.editable) {
            var u, o, e, f = r.editorData;
            if (f.active = !0, f.whoHasIt = this, f.nodeType) u = f.editorPanel; else {
                f.editorPanel = u = this.getEl().appendChild(document.createElement("div"));
                n.addClass(u, "ygtv-label-editor");
                u.tabIndex = 0;
                o = f.buttonsContainer = u.appendChild(document.createElement("div"));
                n.addClass(o, "ygtv-button-container");
                e = o.appendChild(document.createElement("button"));
                n.addClass(e, "ygtvok");
                e.innerHTML = " ";
                e = o.appendChild(document.createElement("button"));
                n.addClass(e, "ygtvcancel");
                e.innerHTML = " ";
                t.on(o, "click", function (i) {
                    var u = t.getTarget(i), f = r.editorData, o = f.node, e = f.whoHasIt;
                    n.hasClass(u, "ygtvok") && (t.stopEvent(i), e._closeEditor(!0));
                    n.hasClass(u, "ygtvcancel") && (t.stopEvent(i), e._closeEditor(!1))
                });
                f.inputContainer = u.appendChild(document.createElement("div"));
                n.addClass(f.inputContainer, "ygtv-input");
                t.on(u, "keydown", function (n) {
                    var i = r.editorData, u = YAHOO.util.KeyListener.KEY, f = i.whoHasIt;
                    switch (n.keyCode) {
                        case u.ENTER:
                            t.stopEvent(n);
                            i.saveOnEnter && f._closeEditor(!0);
                            break;
                        case u.ESCAPE:
                            t.stopEvent(n);
                            f._closeEditor(!1)
                    }
                })
            }
            return f.node = i, f.nodeType && n.removeClass(u, "ygtv-edit-" + f.nodeType), n.addClass(u, " ygtv-edit-" + i._type), n.setStyle(u, "display", "block"), n.setXY(u, n.getXY(i.getContentEl())), u.focus(), i.fillEditorContainer(f), !0
        }
    };
    u.onEventEditNode = function (n) {
        return n instanceof YAHOO.widget.Node ? n.editNode() : n.node instanceof YAHOO.widget.Node && n.node.editNode(), !1
    };
    u._closeEditor = function (t) {
        var i = r.editorData, u = i.node, f = !0;
        u && i.active && (t ? f = i.node.saveEditorValue(i) !== !1 : this.fireEvent("editorCancelEvent", u), f && (n.setStyle(i.editorPanel, "display", "none"), i.active = !1, u.focus()))
    };
    u._destroyEditor = function () {
        var n = r.editorData;
        n && n.nodeType && (!n.active || n.whoHasIt === this) && (t.removeListener(n.editorPanel, "keydown"), t.removeListener(n.buttonContainer, "click"), n.node.destroyEditorContents(n), document.body.removeChild(n.editorPanel), n.nodeType = n.editorPanel = n.inputContainer = n.buttonsContainer = n.whoHasIt = n.node = null, n.active = !1)
    };
    i = YAHOO.widget.Node.prototype;
    i.editable = !1;
    i.editNode = function () {
        this.tree._nodeEditing(this)
    };
    i.fillEditorContainer = null;
    i.destroyEditorContents = function (n) {
        t.purgeElement(n.inputContainer, !0);
        n.inputContainer.innerHTML = ""
    };
    i.saveEditorValue = function (n) {
        var i = n.node, t, r = i.tree.validator;
        if (t = this.getEditorValue(n), e.isFunction(r) && (t = r(t, n.oldValue, i), e.isUndefined(t))) return !1;
        this.tree.fireEvent("editorSaveEvent", {
            newValue: t,
            oldValue: n.oldValue,
            node: i
        }) !== !1 && this.displayEditedValue(t, n)
    };
    i.getEditorValue = function () {
    };
    i.displayEditedValue = function () {
    };
    f = YAHOO.widget.TextNode.prototype;
    f.fillEditorContainer = function (n) {
        var t;
        n.nodeType != this._type ? (n.nodeType = this._type, n.saveOnEnter = !0, n.node.destroyEditorContents(n), n.inputElement = t = n.inputContainer.appendChild(document.createElement("input"))) : t = n.inputElement;
        n.oldValue = this.label;
        t.value = this.label;
        t.focus();
        t.select()
    };
    f.getEditorValue = function (n) {
        return n.inputElement.value
    };
    f.displayEditedValue = function (n, t) {
        var i = t.node;
        i.label = n;
        i.getLabelEl().innerHTML = n
    };
    f.destroyEditorContents = function (n) {
        n.inputContainer.innerHTML = ""
    }
}();
YAHOO.widget.TVAnim = function () {
    return {
        FADE_IN: "TVFadeIn", FADE_OUT: "TVFadeOut", getAnim: function (n, t, i) {
            return YAHOO.widget[n] ? new YAHOO.widget[n](t, i) : null
        }, isValid: function (n) {
            return YAHOO.widget[n]
        }
    }
}();
YAHOO.widget.TVFadeIn = function (n, t) {
    this.el = n;
    this.callback = t
};
YAHOO.widget.TVFadeIn.prototype = {
    animate: function () {
        var r = this, n = this.el.style, i, t;
        n.opacity = .1;
        n.filter = "alpha(opacity=10)";
        n.display = "";
        i = .4;
        t = new YAHOO.util.Anim(this.el, {opacity: {from: .1, to: 1, unit: ""}}, i);
        t.onComplete.subscribe(function () {
            r.onComplete()
        });
        t.animate()
    }, onComplete: function () {
        this.callback()
    }, toString: function () {
        return "TVFadeIn"
    }
};
YAHOO.widget.TVFadeOut = function (n, t) {
    this.el = n;
    this.callback = t
};
YAHOO.widget.TVFadeOut.prototype = {
    animate: function () {
        var t = this, n = new YAHOO.util.Anim(this.el, {opacity: {from: 1, to: .1, unit: ""}}, .4);
        n.onComplete.subscribe(function () {
            t.onComplete()
        });
        n.animate()
    }, onComplete: function () {
        var n = this.el.style;
        n.display = "none";
        n.opacity = 1;
        n.filter = "alpha(opacity=100)";
        this.callback()
    }, toString: function () {
        return "TVFadeOut"
    }
};
YAHOO.register("treeview", YAHOO.widget.TreeView, {version: "2.9.0", build: "2800"});
$(function () {
    $(".dropdown").each(function () {
        $(this).parent().eq(0).hoverIntent({
            timeout: 200, over: function () {
                slideDown(this)
            }, out: function () {
                var n = $(".dropdown:eq(0)", this);
                n.hasClass("hiddendropdown") || $(".dropdown").fadeOut(200)
            }
        });
        $(this).parent().eq(0).on("click", function () {
            slideDown(this)
        })
    })
}), function (n) {
    n.fn.hoverIntent = function (t, i) {
        var r = {sensitivity: 7, interval: 100, timeout: 0};
        r = n.extend(r, i ? {over: t, out: i} : t);
        var u, f, e, o, s = function (n) {
            u = n.pageX;
            f = n.pageY
        }, h = function (t, i) {
            if (i.hoverIntent_t = clearTimeout(i.hoverIntent_t), Math.abs(e - u) + Math.abs(o - f) < r.sensitivity) return n(i).unbind("mousemove", s), i.hoverIntent_s = 1, r.over.apply(i, [t]);
            e = u;
            o = f;
            i.hoverIntent_t = setTimeout(function () {
                h(t, i)
            }, r.interval)
        }, l = function (n, t) {
            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, r.out.apply(t, [n])
        }, c = function (t) {
            var u = jQuery.extend({}, t), i = this;
            i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t));
            t.type == "mouseenter" ? (e = u.pageX, o = u.pageY, n(i).bind("mousemove", s), i.hoverIntent_s != 1 && (i.hoverIntent_t = setTimeout(function () {
                h(u, i)
            }, r.interval))) : (n(i).unbind("mousemove", s), i.hoverIntent_s == 1 && (i.hoverIntent_t = setTimeout(function () {
                l(u, i)
            }, r.timeout)))
        };
        return this.bind("mouseenter", c).bind("mouseleave", c)
    }
}(jQuery), function (n, t, i) {
    var u = "watermark", f = "watermarkClass", h = "watermarkFocus", s = "watermarkSubmit", c = "watermarkMaxLength",
        e = "watermarkPassword", r = "watermarkText", o = /\r/g,
        p = /^(button|checkbox|hidden|image|radio|range|reset|submit)$/i,
        y = "input:data(" + u + "),textarea:data(" + u + ")", l = ":watermarkable", a = ["Page_ClientValidate"], v = !1,
        w = "placeholder" in document.createElement("input");
    n.watermark = n.watermark || {
        version: "3.1.4",
        runOnce: !0,
        options: {className: "watermark", useNative: !0, hideBeforeUnload: !0},
        hide: function (t) {
            n(t).filter(y).each(function () {
                n.watermark._hide(n(this))
            })
        },
        _hide: function (n, i) {
            var h = n[0], y = (h.value || "").replace(o, ""), l = n.data(r) || "", a = n.data(c) || 0, v = n.data(f), u,
                s;
            l.length && y == l && (h.value = "", n.data(e) && (n.attr("type") || "") === "text" && (u = n.data(e) || [], s = n.parent() || [], u.length && s.length && (s[0].removeChild(n[0]), s[0].appendChild(u[0]), n = u)), a && (n.attr("maxLength", a), n.removeData(c)), i && (n.attr("autocomplete", "off"), t.setTimeout(function () {
                n.select()
            }, 1)));
            v && n.removeClass(v)
        },
        show: function (t) {
            n(t).filter(y).each(function () {
                n.watermark._show(n(this))
            })
        },
        _show: function (t) {
            var a = t[0], p = (a.value || "").replace(o, ""), i = t.data(r) || "", y = t.attr("type") || "",
                w = t.data(f), u, s, l;
            p.length != 0 && p != i || t.data(h) ? n.watermark._hide(t) : (v = !0, t.data(e) && y === "password" && (u = t.data(e) || [], s = t.parent() || [], u.length && s.length && (s[0].removeChild(t[0]), s[0].appendChild(u[0]), t = u, t.attr("maxLength", i.length), a = t[0])), (y === "text" || y === "search") && (l = t.attr("maxLength") || 0, l > 0 && i.length > l && (t.data(c, l), t.attr("maxLength", i.length))), w && t.addClass(w), a.value = i)
        },
        hideAll: function () {
            v && (n.watermark.hide(l), v = !1)
        },
        showAll: function () {
            n.watermark.show(l)
        }
    };
    n.fn.watermark = n.fn.watermark || function (i, c) {
        if (!this.length) return this;
        var v = !1, a = typeof i == "string";
        return a && (i = i.replace(o, "")), typeof c == "object" ? (v = typeof c.className == "string", c = n.extend({}, n.watermark.options, c)) : typeof c == "string" ? (v = !0, c = n.extend({}, n.watermark.options, {className: c})) : c = n.watermark.options, typeof c.useNative != "function" && (c.useNative = c.useNative ? function () {
            return !0
        } : function () {
            return !1
        }), this.each(function () {
            var y = n(this), d, p, b, k;
            if (y.is(l)) {
                if (y.data(u)) (a || v) && (n.watermark._hide(y), a && y.data(r, i), v && y.data(f, c.className)); else {
                    if (w && c.useNative.call(this, y) && (y.attr("tagName") || "") !== "TEXTAREA") {
                        a && y.attr("placeholder", i);
                        return
                    }
                    y.data(r, a ? i : "");
                    y.data(f, c.className);
                    y.data(u, 1);
                    (y.attr("type") || "") === "password" ? (d = y.wrap("<span>").parent(), p = n(d.html().replace(/type=["']?password["']?/i, 'type="text"')), p.data(r, y.data(r)), p.data(f, y.data(f)), p.data(u, 1), p.attr("maxLength", i.length), p.focus(function () {
                        n.watermark._hide(p, !0)
                    }).bind("dragenter", function () {
                        n.watermark._hide(p)
                    }).bind("dragend", function () {
                        t.setTimeout(function () {
                            p.blur()
                        }, 1)
                    }), y.blur(function () {
                        n.watermark._show(y)
                    }).bind("dragleave", function () {
                        n.watermark._show(y)
                    }), p.data(e, y), y.data(e, p)) : y.focus(function () {
                        y.data(h, 1);
                        n.watermark._hide(y, !0)
                    }).blur(function () {
                        y.data(h, 0);
                        n.watermark._show(y)
                    }).bind("dragenter", function () {
                        n.watermark._hide(y)
                    }).bind("dragleave", function () {
                        n.watermark._show(y)
                    }).bind("dragend", function () {
                        t.setTimeout(function () {
                            n.watermark._show(y)
                        }, 1)
                    }).bind("drop", function (n) {
                        var t = y[0], i = n.originalEvent.dataTransfer.getData("Text");
                        (t.value || "").replace(o, "").replace(i, "") === y.data(r) && (t.value = i);
                        y.focus()
                    });
                    this.form && (b = this.form, k = n(b), k.data(s) || (k.submit(n.watermark.hideAll), b.submit ? (k.data(s, b.submit), b.submit = function (t, i) {
                        return function () {
                            var r = i.data(s);
                            n.watermark.hideAll();
                            r.apply ? r.apply(t, Array.prototype.slice.call(arguments)) : r()
                        }
                    }(b, k)) : (k.data(s, 1), b.submit = function (t) {
                        return function () {
                            n.watermark.hideAll();
                            delete t.submit;
                            t.submit()
                        }
                    }(b))))
                }
                n.watermark._show(y)
            }
        })
    };
    n.watermark.runOnce && (n.watermark.runOnce = !1, n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function (t) {
            return function (i) {
                return !!n.data(i, t)
            }
        }) : function (t, i, r) {
            return !!n.data(t, r[3])
        }, watermarkable: function (n) {
            var t, i = n.nodeName;
            return i === "TEXTAREA" ? !0 : i !== "INPUT" ? !1 : (t = n.getAttribute("type"), !t || !p.test(t))
        }
    }), function (t) {
        n.fn.val = function () {
            var f = Array.prototype.slice.call(arguments), e;
            return this.length ? f.length ? (t.apply(this, f), n.watermark.show(this), this) : this.data(u) ? (e = (this[0].value || "").replace(o, ""), e === (this.data(r) || "") ? "" : e) : t.apply(this) : f.length ? this : i
        }
    }(n.fn.val), a.length && n(function () {
        for (var r, u, i = a.length - 1; i >= 0; i--) r = a[i], u = t[r], typeof u == "function" && (t[r] = function (t) {
            return function () {
                return n.watermark.hideAll(), t.apply(null, Array.prototype.slice.call(arguments))
            }
        }(u))
    }), n(t).bind("beforeunload", function () {
        n.watermark.options.hideBeforeUnload && n.watermark.hideAll()
    }))
}(jQuery, window), function () {
    function nt(t) {
        function r(n, i, r, u, f, e) {
            for (; f >= 0 && e > f; f += t) {
                var o = u ? u[f] : f;
                r = i(r, n[o], o, n)
            }
            return r
        }

        return function (u, f, o, s) {
            f = e(f, s, 4);
            var h = !i(u) && n.keys(u), l = (h || u).length, c = t > 0 ? 0 : l - 1;
            return arguments.length < 3 && (o = u[h ? h[c] : c], c += t), r(u, f, o, h, c, l)
        }
    }

    function tt(n) {
        return function (i, r, f) {
            r = t(r, f);
            for (var o = u(i), e = n > 0 ? 0 : o - 1; e >= 0 && o > e; e += n) if (r(i[e], e, i)) return e;
            return -1
        }
    }

    function it(t, i, f) {
        return function (e, o, s) {
            var c = 0, h = u(e);
            if ("number" == typeof s) t > 0 ? c = s >= 0 ? s : Math.max(s + h, c) : h = s >= 0 ? Math.min(s + 1, h) : s + h + 1; else if (f && s && h) return s = f(e, o), e[s] === o ? s : -1;
            if (o !== o) return s = i(r.call(e, c, h), n.isNaN), s >= 0 ? s + c : -1;
            for (s = t > 0 ? c : h - 1; s >= 0 && h > s; s += t) if (e[s] === o) return s;
            return -1
        }
    }

    function rt(t, i) {
        var u = d.length, f = t.constructor, e = n.isFunction(f) && f.prototype || v, r = "constructor";
        for (n.has(t, r) && !n.contains(i, r) && i.push(r); u--;) r = d[u], r in t && t[r] !== e[r] && !n.contains(i, r) && i.push(r)
    }

    var a = this, lt = a._, s = Array.prototype, v = Object.prototype, at = Function.prototype, vt = s.push,
        r = s.slice, o = v.toString, yt = v.hasOwnProperty, pt = Array.isArray, ut = Object.keys, y = at.bind,
        ft = Object.create, p = function () {
        }, n = function (t) {
            return t instanceof n ? t : this instanceof n ? void (this._wrapped = t) : new n(t)
        }, e, t, h, f, b, k, d, c, ct, l;
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports._ = n) : a._ = n;
    n.VERSION = "1.8.3";
    e = function (n, t, i) {
        if (t === void 0) return n;
        switch (null == i ? 3 : i) {
            case 1:
                return function (i) {
                    return n.call(t, i)
                };
            case 2:
                return function (i, r) {
                    return n.call(t, i, r)
                };
            case 3:
                return function (i, r, u) {
                    return n.call(t, i, r, u)
                };
            case 4:
                return function (i, r, u, f) {
                    return n.call(t, i, r, u, f)
                }
        }
        return function () {
            return n.apply(t, arguments)
        }
    };
    t = function (t, i, r) {
        return null == t ? n.identity : n.isFunction(t) ? e(t, i, r) : n.isObject(t) ? n.matcher(t) : n.property(t)
    };
    n.iteratee = function (n, i) {
        return t(n, i, 1 / 0)
    };
    var w = function (n, t) {
        return function (i) {
            var e = arguments.length, r, u;
            if (2 > e || null == i) return i;
            for (r = 1; e > r; r++) for (var o = arguments[r], s = n(o), h = s.length, f = 0; h > f; f++) u = s[f], t && i[u] !== void 0 || (i[u] = o[u]);
            return i
        }
    }, et = function (t) {
        if (!n.isObject(t)) return {};
        if (ft) return ft(t);
        p.prototype = t;
        var i = new p;
        return p.prototype = null, i
    }, ot = function (n) {
        return function (t) {
            if (null != t) return t[n]
        }
    }, wt = Math.pow(2, 53) - 1, u = ot("length"), i = function (n) {
        var t = u(n);
        return "number" == typeof t && t >= 0 && wt >= t
    };
    n.each = n.forEach = function (t, r, u) {
        var f, o, s;
        if (r = e(r, u), i(t)) for (f = 0, o = t.length; o > f; f++) r(t[f], f, t); else for (s = n.keys(t), f = 0, o = s.length; o > f; f++) r(t[s[f]], s[f], t);
        return t
    };
    n.map = n.collect = function (r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length, c = Array(h), e = 0; h > e; e++) s = o ? o[e] : e, c[e] = u(r[s], s, r);
        return c
    };
    n.reduce = n.foldl = n.inject = nt(1);
    n.reduceRight = n.foldr = nt(-1);
    n.find = n.detect = function (t, r, u) {
        var f;
        return f = i(t) ? n.findIndex(t, r, u) : n.findKey(t, r, u), f !== void 0 && f !== -1 ? t[f] : void 0
    };
    n.filter = n.select = function (i, r, u) {
        var f = [];
        return r = t(r, u), n.each(i, function (n, t, i) {
            r(n, t, i) && f.push(n)
        }), f
    };
    n.reject = function (i, r, u) {
        return n.filter(i, n.negate(t(r)), u)
    };
    n.every = n.all = function (r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length, e = 0; h > e; e++) if (s = o ? o[e] : e, !u(r[s], s, r)) return !1;
        return !0
    };
    n.some = n.any = function (r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length, e = 0; h > e; e++) if (s = o ? o[e] : e, u(r[s], s, r)) return !0;
        return !1
    };
    n.contains = n.includes = n.include = function (t, r, u, f) {
        return i(t) || (t = n.values(t)), ("number" != typeof u || f) && (u = 0), n.indexOf(t, r, u) >= 0
    };
    n.invoke = function (t, i) {
        var u = r.call(arguments, 2), f = n.isFunction(i);
        return n.map(t, function (n) {
            var t = f ? i : n[i];
            return null == t ? t : t.apply(n, u)
        })
    };
    n.pluck = function (t, i) {
        return n.map(t, n.property(i))
    };
    n.where = function (t, i) {
        return n.filter(t, n.matcher(i))
    };
    n.findWhere = function (t, i) {
        return n.find(t, n.matcher(i))
    };
    n.max = function (r, u, f) {
        var h, o, e = -1 / 0, c = -1 / 0, s, l;
        if (null == u && null != r) for (r = i(r) ? r : n.values(r), s = 0, l = r.length; l > s; s++) h = r[s], h > e && (e = h); else u = t(u, f), n.each(r, function (n, t, i) {
            o = u(n, t, i);
            (o > c || o === -1 / 0 && e === -1 / 0) && (e = n, c = o)
        });
        return e
    };
    n.min = function (r, u, f) {
        var h, o, e = 1 / 0, c = 1 / 0, s, l;
        if (null == u && null != r) for (r = i(r) ? r : n.values(r), s = 0, l = r.length; l > s; s++) h = r[s], e > h && (e = h); else u = t(u, f), n.each(r, function (n, t, i) {
            o = u(n, t, i);
            (c > o || 1 / 0 === o && 1 / 0 === e) && (e = n, c = o)
        });
        return e
    };
    n.shuffle = function (t) {
        for (var u, e = i(t) ? t : n.values(t), o = e.length, f = Array(o), r = 0; o > r; r++) u = n.random(0, r), u !== r && (f[r] = f[u]), f[u] = e[r];
        return f
    };
    n.sample = function (t, r, u) {
        return null == r || u ? (i(t) || (t = n.values(t)), t[n.random(t.length - 1)]) : n.shuffle(t).slice(0, Math.max(0, r))
    };
    n.sortBy = function (i, r, u) {
        return r = t(r, u), n.pluck(n.map(i, function (n, t, i) {
            return {value: n, index: t, criteria: r(n, t, i)}
        }).sort(function (n, t) {
            var i = n.criteria, r = t.criteria;
            if (i !== r) {
                if (i > r || i === void 0) return 1;
                if (r > i || r === void 0) return -1
            }
            return n.index - t.index
        }), "value")
    };
    h = function (i) {
        return function (r, u, f) {
            var e = {};
            return u = t(u, f), n.each(r, function (n, t) {
                var f = u(n, t, r);
                i(e, n, f)
            }), e
        }
    };
    n.groupBy = h(function (t, i, r) {
        n.has(t, r) ? t[r].push(i) : t[r] = [i]
    });
    n.indexBy = h(function (n, t, i) {
        n[i] = t
    });
    n.countBy = h(function (t, i, r) {
        n.has(t, r) ? t[r]++ : t[r] = 1
    });
    n.toArray = function (t) {
        return t ? n.isArray(t) ? r.call(t) : i(t) ? n.map(t, n.identity) : n.values(t) : []
    };
    n.size = function (t) {
        return null == t ? 0 : i(t) ? t.length : n.keys(t).length
    };
    n.partition = function (i, r, u) {
        r = t(r, u);
        var f = [], e = [];
        return n.each(i, function (n, t, i) {
            (r(n, t, i) ? f : e).push(n)
        }), [f, e]
    };
    n.first = n.head = n.take = function (t, i, r) {
        if (null != t) return null == i || r ? t[0] : n.initial(t, t.length - i)
    };
    n.initial = function (n, t, i) {
        return r.call(n, 0, Math.max(0, n.length - (null == t || i ? 1 : t)))
    };
    n.last = function (t, i, r) {
        if (null != t) return null == i || r ? t[t.length - 1] : n.rest(t, Math.max(0, t.length - i))
    };
    n.rest = n.tail = n.drop = function (n, t, i) {
        return r.call(n, null == t || i ? 1 : t)
    };
    n.compact = function (t) {
        return n.filter(t, n.identity)
    };
    f = function (t, r, e, o) {
        for (var s, l, a, h = [], v = 0, c = o || 0, y = u(t); y > c; c++) if (s = t[c], i(s) && (n.isArray(s) || n.isArguments(s))) for (r || (s = f(s, r, e)), l = 0, a = s.length, h.length += a; a > l;) h[v++] = s[l++]; else e || (h[v++] = s);
        return h
    };
    n.flatten = function (n, t) {
        return f(n, t, !1)
    };
    n.without = function (t) {
        return n.difference(t, r.call(arguments, 1))
    };
    n.uniq = n.unique = function (i, r, f, e) {
        var o, c;
        n.isBoolean(r) || (e = f, f = r, r = !1);
        null != f && (f = t(f, e));
        for (var s = [], l = [], h = 0, a = u(i); a > h; h++) o = i[h], c = f ? f(o, h, i) : o, r ? (h && l === c || s.push(o), l = c) : f ? n.contains(l, c) || (l.push(c), s.push(o)) : n.contains(s, o) || s.push(o);
        return s
    };
    n.union = function () {
        return n.uniq(f(arguments, !0, !0))
    };
    n.intersection = function (t) {
        for (var r, i, f = [], o = arguments.length, e = 0, s = u(t); s > e; e++) if (r = t[e], !n.contains(f, r)) {
            for (i = 1; o > i && n.contains(arguments[i], r); i++) ;
            i === o && f.push(r)
        }
        return f
    };
    n.difference = function (t) {
        var i = f(arguments, !0, !0, 1);
        return n.filter(t, function (t) {
            return !n.contains(i, t)
        })
    };
    n.zip = function () {
        return n.unzip(arguments)
    };
    n.unzip = function (t) {
        for (var r = t && n.max(t, u).length || 0, f = Array(r), i = 0; r > i; i++) f[i] = n.pluck(t, i);
        return f
    };
    n.object = function (n, t) {
        for (var r = {}, i = 0, f = u(n); f > i; i++) t ? r[n[i]] = t[i] : r[n[i][0]] = n[i][1];
        return r
    };
    n.findIndex = tt(1);
    n.findLastIndex = tt(-1);
    n.sortedIndex = function (n, i, r, f) {
        var o;
        r = t(r, f, 1);
        for (var h = r(i), e = 0, s = u(n); s > e;) o = Math.floor((e + s) / 2), r(n[o]) < h ? e = o + 1 : s = o;
        return e
    };
    n.indexOf = it(1, n.findIndex, n.sortedIndex);
    n.lastIndexOf = it(-1, n.findLastIndex);
    n.range = function (n, t, i) {
        null == t && (t = n || 0, n = 0);
        i = i || 1;
        for (var u = Math.max(Math.ceil((t - n) / i), 0), f = Array(u), r = 0; u > r; r++, n += i) f[r] = n;
        return f
    };
    b = function (t, i, r, u, f) {
        if (!(u instanceof i)) return t.apply(r, f);
        var e = et(t.prototype), o = t.apply(e, f);
        return n.isObject(o) ? o : e
    };
    n.bind = function (t, i) {
        if (y && t.bind === y) return y.apply(t, r.call(arguments, 1));
        if (!n.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var f = r.call(arguments, 2), u = function () {
            return b(t, u, i, this, f.concat(r.call(arguments)))
        };
        return u
    };
    n.partial = function (t) {
        var i = r.call(arguments, 1), u = function () {
            for (var f = 0, o = i.length, e = Array(o), r = 0; o > r; r++) e[r] = i[r] === n ? arguments[f++] : i[r];
            for (; f < arguments.length;) e.push(arguments[f++]);
            return b(t, u, this, this, e)
        };
        return u
    };
    n.bindAll = function (t) {
        var i, r, u = arguments.length;
        if (1 >= u) throw new Error("bindAll must be passed function names");
        for (i = 1; u > i; i++) r = arguments[i], t[r] = n.bind(t[r], t);
        return t
    };
    n.memoize = function (t, i) {
        var r = function (u) {
            var f = r.cache, e = "" + (i ? i.apply(this, arguments) : u);
            return n.has(f, e) || (f[e] = t.apply(this, arguments)), f[e]
        };
        return r.cache = {}, r
    };
    n.delay = function (n, t) {
        var i = r.call(arguments, 2);
        return setTimeout(function () {
            return n.apply(null, i)
        }, t)
    };
    n.defer = n.partial(n.delay, n, 1);
    n.throttle = function (t, i, r) {
        var f, e, s, u = null, o = 0, h;
        return r || (r = {}), h = function () {
            o = r.leading === !1 ? 0 : n.now();
            u = null;
            s = t.apply(f, e);
            u || (f = e = null)
        }, function () {
            var l = n.now(), c;
            return o || r.leading !== !1 || (o = l), c = i - (l - o), f = this, e = arguments, 0 >= c || c > i ? (u && (clearTimeout(u), u = null), o = l, s = t.apply(f, e), u || (f = e = null)) : u || r.trailing === !1 || (u = setTimeout(h, c)), s
        }
    };
    n.debounce = function (t, i, r) {
        var u, f, e, s, o, h = function () {
            var c = n.now() - s;
            i > c && c >= 0 ? u = setTimeout(h, i - c) : (u = null, r || (o = t.apply(e, f), u || (e = f = null)))
        };
        return function () {
            e = this;
            f = arguments;
            s = n.now();
            var c = r && !u;
            return u || (u = setTimeout(h, i)), c && (o = t.apply(e, f), e = f = null), o
        }
    };
    n.wrap = function (t, i) {
        return n.partial(i, t)
    };
    n.negate = function (n) {
        return function () {
            return !n.apply(this, arguments)
        }
    };
    n.compose = function () {
        var n = arguments, t = n.length - 1;
        return function () {
            for (var r = t, i = n[t].apply(this, arguments); r--;) i = n[r].call(this, i);
            return i
        }
    };
    n.after = function (n, t) {
        return function () {
            if (--n < 1) return t.apply(this, arguments)
        }
    };
    n.before = function (n, t) {
        var i;
        return function () {
            return --n > 0 && (i = t.apply(this, arguments)), 1 >= n && (t = null), i
        }
    };
    n.once = n.partial(n.before, 2);
    k = !{toString: null}.propertyIsEnumerable("toString");
    d = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    n.keys = function (t) {
        var i, r;
        if (!n.isObject(t)) return [];
        if (ut) return ut(t);
        i = [];
        for (r in t) n.has(t, r) && i.push(r);
        return k && rt(t, i), i
    };
    n.allKeys = function (t) {
        var i, r;
        if (!n.isObject(t)) return [];
        i = [];
        for (r in t) i.push(r);
        return k && rt(t, i), i
    };
    n.values = function (t) {
        for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; u > i; i++) f[i] = t[r[i]];
        return f
    };
    n.mapObject = function (i, r, u) {
        r = t(r, u);
        for (var f, o = n.keys(i), h = o.length, s = {}, e = 0; h > e; e++) f = o[e], s[f] = r(i[f], f, i);
        return s
    };
    n.pairs = function (t) {
        for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; u > i; i++) f[i] = [r[i], t[r[i]]];
        return f
    };
    n.invert = function (t) {
        for (var u = {}, r = n.keys(t), i = 0, f = r.length; f > i; i++) u[t[r[i]]] = r[i];
        return u
    };
    n.functions = n.methods = function (t) {
        var r = [], i;
        for (i in t) n.isFunction(t[i]) && r.push(i);
        return r.sort()
    };
    n.extend = w(n.allKeys);
    n.extendOwn = n.assign = w(n.keys);
    n.findKey = function (i, r, u) {
        r = t(r, u);
        for (var f, o = n.keys(i), e = 0, s = o.length; s > e; e++) if (f = o[e], r(i[f], f, i)) return f
    };
    n.pick = function (t, i, r) {
        var c, o, l = {}, u = t, s, v, h, a;
        if (null == u) return l;
        for (n.isFunction(i) ? (o = n.allKeys(u), c = e(i, r)) : (o = f(arguments, !1, !1, 1), c = function (n, t, i) {
            return t in i
        }, u = Object(u)), s = 0, v = o.length; v > s; s++) h = o[s], a = u[h], c(a, h, u) && (l[h] = a);
        return l
    };
    n.omit = function (t, i, r) {
        if (n.isFunction(i)) i = n.negate(i); else {
            var u = n.map(f(arguments, !1, !1, 1), String);
            i = function (t, i) {
                return !n.contains(u, i)
            }
        }
        return n.pick(t, i, r)
    };
    n.defaults = w(n.allKeys, !0);
    n.create = function (t, i) {
        var r = et(t);
        return i && n.extendOwn(r, i), r
    };
    n.clone = function (t) {
        return n.isObject(t) ? n.isArray(t) ? t.slice() : n.extend({}, t) : t
    };
    n.tap = function (n, t) {
        return t(n), n
    };
    n.isMatch = function (t, i) {
        var e = n.keys(i), o = e.length, f, r, u;
        if (null == t) return !o;
        for (f = Object(t), r = 0; o > r; r++) if (u = e[r], i[u] !== f[u] || !(u in f)) return !1;
        return !0
    };
    c = function (t, i, r, u) {
        var h, a, e, s, f, l, v;
        if (t === i) return 0 !== t || 1 / t == 1 / i;
        if (null == t || null == i) return t === i;
        if (t instanceof n && (t = t._wrapped), i instanceof n && (i = i._wrapped), h = o.call(t), h !== o.call(i)) return !1;
        switch (h) {
            case"[object RegExp]":
            case"[object String]":
                return "" + t == "" + i;
            case"[object Number]":
                return +t != +t ? +i != +i : 0 == +t ? 1 / +t == 1 / i : +t == +i;
            case"[object Date]":
            case"[object Boolean]":
                return +t == +i
        }
        if (a = "[object Array]" === h, !a && ("object" != typeof t || "object" != typeof i || (e = t.constructor, s = i.constructor, e !== s && !(n.isFunction(e) && e instanceof e && n.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in i))) return !1;
        for (r = r || [], u = u || [], f = r.length; f--;) if (r[f] === t) return u[f] === i;
        if (r.push(t), u.push(i), a) {
            if (f = t.length, f !== i.length) return !1;
            for (; f--;) if (!c(t[f], i[f], r, u)) return !1
        } else {
            if (v = n.keys(t), f = v.length, n.keys(i).length !== f) return !1;
            for (; f--;) if (l = v[f], !n.has(i, l) || !c(t[l], i[l], r, u)) return !1
        }
        return r.pop(), u.pop(), !0
    };
    n.isEqual = function (n, t) {
        return c(n, t)
    };
    n.isEmpty = function (t) {
        return null == t ? !0 : i(t) && (n.isArray(t) || n.isString(t) || n.isArguments(t)) ? 0 === t.length : 0 === n.keys(t).length
    };
    n.isElement = function (n) {
        return !(!n || 1 !== n.nodeType)
    };
    n.isArray = pt || function (n) {
        return "[object Array]" === o.call(n)
    };
    n.isObject = function (n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n
    };
    n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
        n["is" + t] = function (n) {
            return o.call(n) === "[object " + t + "]"
        }
    });
    n.isArguments(arguments) || (n.isArguments = function (t) {
        return n.has(t, "callee")
    });
    "function" != typeof /./ && "object" != typeof Int8Array && (n.isFunction = function (n) {
        return "function" == typeof n || !1
    });
    n.isFinite = function (n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    };
    n.isNaN = function (t) {
        return n.isNumber(t) && t !== +t
    };
    n.isBoolean = function (n) {
        return n === !0 || n === !1 || "[object Boolean]" === o.call(n)
    };
    n.isNull = function (n) {
        return null === n
    };
    n.isUndefined = function (n) {
        return n === void 0
    };
    n.has = function (n, t) {
        return null != n && yt.call(n, t)
    };
    n.noConflict = function () {
        return a._ = lt, this
    };
    n.identity = function (n) {
        return n
    };
    n.constant = function (n) {
        return function () {
            return n
        }
    };
    n.noop = function () {
    };
    n.property = ot;
    n.propertyOf = function (n) {
        return null == n ? function () {
        } : function (t) {
            return n[t]
        }
    };
    n.matcher = n.matches = function (t) {
        return t = n.extendOwn({}, t), function (i) {
            return n.isMatch(i, t)
        }
    };
    n.times = function (n, t, i) {
        var u = Array(Math.max(0, n)), r;
        for (t = e(t, i, 1), r = 0; n > r; r++) u[r] = t(r);
        return u
    };
    n.random = function (n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    n.now = Date.now || function () {
        return (new Date).getTime()
    };
    var st = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, bt = n.invert(st),
        ht = function (t) {
            var r = function (n) {
                return t[n]
            }, i = "(?:" + n.keys(t).join("|") + ")", u = RegExp(i), f = RegExp(i, "g");
            return function (n) {
                return n = null == n ? "" : "" + n, u.test(n) ? n.replace(f, r) : n
            }
        };
    n.escape = ht(st);
    n.unescape = ht(bt);
    n.result = function (t, i, r) {
        var u = null == t ? void 0 : t[i];
        return u === void 0 && (u = r), n.isFunction(u) ? u.call(t) : u
    };
    ct = 0;
    n.uniqueId = function (n) {
        var t = ++ct + "";
        return n ? n + t : t
    };
    n.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var g = /(.)^/, kt = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
        dt = /\\|'|\r|\n|\u2028|\u2029/g, gt = function (n) {
            return "\\" + kt[n]
        };
    n.template = function (t, i, r) {
        var o, f, h;
        !i && r && (i = r);
        i = n.defaults({}, i, n.templateSettings);
        var c = RegExp([(i.escape || g).source, (i.interpolate || g).source, (i.evaluate || g).source].join("|") + "|$", "g"),
            e = 0, u = "__p+='";
        t.replace(c, function (n, i, r, f, o) {
            return u += t.slice(e, o).replace(dt, gt), e = o + n.length, i ? u += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : r ? u += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : f && (u += "';\n" + f + "\n__p+='"), n
        });
        u += "';\n";
        i.variable || (u = "with(obj||{}){\n" + u + "}\n");
        u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        try {
            o = new Function(i.variable || "obj", "_", u)
        } catch (s) {
            throw s.source = u, s;
        }
        return f = function (t) {
            return o.call(this, t, n)
        }, h = i.variable || "obj", f.source = "function(" + h + "){\n" + u + "}", f
    };
    n.chain = function (t) {
        var i = n(t);
        return i._chain = !0, i
    };
    l = function (t, i) {
        return t._chain ? n(i).chain() : i
    };
    n.mixin = function (t) {
        n.each(n.functions(t), function (i) {
            var r = n[i] = t[i];
            n.prototype[i] = function () {
                var t = [this._wrapped];
                return vt.apply(t, arguments), l(this, r.apply(n, t))
            }
        })
    };
    n.mixin(n);
    n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var i = s[t];
        n.prototype[t] = function () {
            var n = this._wrapped;
            return i.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], l(this, n)
        }
    });
    n.each(["concat", "join", "slice"], function (t) {
        var i = s[t];
        n.prototype[t] = function () {
            return l(this, i.apply(this._wrapped, arguments))
        }
    });
    n.prototype.value = function () {
        return this._wrapped
    };
    n.prototype.valueOf = n.prototype.toJSON = n.prototype.value;
    n.prototype.toString = function () {
        return "" + this._wrapped
    };
    "function" == typeof define && define.amd && define("underscore", [], function () {
        return n
    })
}.call(this);
foolproof = function () {
};
foolproof.is = function (n, t, i, r) {
    if (r) {
        var u = function (n) {
            return n == null || n == undefined || n == ""
        }, f = u(n), e = u(i);
        if (f && !e || e && !f) return !0
    }
    var o = function (n) {
        return +n == n && n.length > 0
    }, s = function (n) {
        var t = new RegExp(/(?=\d)^(?:(?!(?:10\D(?:0?[5-9]|1[0-4])\D(?:1582))|(?:0?9\D(?:0?[3-9]|1[0-3])\D(?:1752)))((?:0?[13578]|1[02])|(?:0?[469]|11)(?!\/31)(?!-31)(?!\.31)|(?:0?2(?=.?(?:(?:29.(?!000[04]|(?:(?:1[^0-6]|[2468][^048]|[3579][^26])00))(?:(?:(?:\d\d)(?:[02468][048]|[13579][26])(?!\x20BC))|(?:00(?:42|3[0369]|2[147]|1[258]|09)\x20BC))))))|(?:0?2(?=.(?:(?:\d\D)|(?:[01]\d)|(?:2[0-8])))))([-.\/])(0?[1-9]|[12]\d|3[01])\2(?!0000)((?=(?:00(?:4[0-5]|[0-3]?\d)\x20BC)|(?:\d{4}(?!\x20BC)))\d{4}(?:\x20BC)?)(?:$|(?=\x20\d)\x20))?((?:(?:0?[1-9]|1[012])(?::[0-5]\d){0,2}(?:\x20[aApP][mM]))|(?:[01]\d|2[0-3])(?::[0-5]\d){1,2})?$/);
        return t.test(n)
    }, h = function (n) {
        return n === !0 || n === !1 || n === "true" || n === "false"
    };
    s(n) ? (n = Date.parse(n), i = Date.parse(i)) : h(n) ? (n == "false" && (n = !1), i == "false" && (i = !1), n = !!n, i = !!i) : o(n) && (n = parseFloat(n), i = parseFloat(i));
    switch (t) {
        case"EqualTo":
            if (n == i) return !0;
            break;
        case"NotEqualTo":
            if (n != i) return !0;
            break;
        case"GreaterThan":
            if (n > i) return !0;
            break;
        case"LessThan":
            if (n < i) return !0;
            break;
        case"GreaterThanOrEqualTo":
            if (n >= i) return !0;
            break;
        case"LessThanOrEqualTo":
            if (n <= i) return !0;
            break;
        case"RegExMatch":
            return new RegExp(i).test(n);
        case"NotRegExMatch":
            return !new RegExp(i).test(n)
    }
    return !1
};
foolproof.getId = function (n, t) {
    var i = n.id.lastIndexOf("_") + 1;
    return n.id.substr(0, i) + t.replace(/\./g, "_")
};
foolproof.getName = function (n, t) {
    var i = n.name.lastIndexOf(".") + 1;
    return n.name.substr(0, i) + t
}, function () {
    jQuery.validator.addMethod("is", function (n, t, i) {
        var r = foolproof.getId(t, i.dependentproperty), u = i.operator, f = i.passonnull,
            e = document.getElementById(r).value;
        return foolproof.is(n, u, e, f) ? !0 : !1
    });
    jQuery.validator.addMethod("requiredif", function (n, t, i) {
        var o = foolproof.getName(t, i.dependentproperty), s = i.dependentvalue, h = i.operator, e = i.pattern,
            r = document.getElementsByName(o), u = null, f;
        if (r.length > 1) {
            for (f = 0; f != r.length; f++) if (r[f].checked) {
                u = r[f].value;
                break
            }
            u == null && (u = !1)
        } else u = r[0].value;
        if (foolproof.is(u, h, s)) if (e == null) {
            if (n != null && n.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "") return !0
        } else return new RegExp(e).test(n); else return !0;
        return !1
    });
    jQuery.validator.addMethod("requiredifempty", function (n, t, i) {
        var u = foolproof.getId(t, i.dependentproperty), r = document.getElementById(u).value;
        if (r == null || r.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") == "") {
            if (n != null && n.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "") return !0
        } else return !0;
        return !1
    });
    jQuery.validator.addMethod("requiredifnotempty", function (n, t, i) {
        var u = foolproof.getId(t, i.dependentproperty), r = document.getElementById(u).value;
        if (r != null && r.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "") {
            if (n != null && n.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "") return !0
        } else return !0;
        return !1
    });
    var n = function (n, t, i) {
        n.rules[t] = i;
        n.message && (n.messages[t] = n.message)
    }, t = $.validator.unobtrusive;
    t.adapters.add("requiredif", ["dependentproperty", "dependentvalue", "operator", "pattern"], function (t) {
        var i = {
            dependentproperty: t.params.dependentproperty,
            dependentvalue: t.params.dependentvalue,
            operator: t.params.operator,
            pattern: t.params.pattern
        };
        n(t, "requiredif", i)
    });
    t.adapters.add("is", ["dependentproperty", "operator", "passonnull"], function (t) {
        n(t, "is", {
            dependentproperty: t.params.dependentproperty,
            operator: t.params.operator,
            passonnull: t.params.passonnull
        })
    });
    t.adapters.add("requiredifempty", ["dependentproperty"], function (t) {
        n(t, "requiredifempty", {dependentproperty: t.params.dependentproperty})
    });
    t.adapters.add("requiredifnotempty", ["dependentproperty"], function (t) {
        n(t, "requiredifnotempty", {dependentproperty: t.params.dependentproperty})
    })
}();
!function () {
    function wi(n, t) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }

    function to(n) {
        return n != null && !isNaN(n)
    }

    function al(n) {
        return {
            left: function (t, i, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); r < u;) {
                    var f = r + u >>> 1;
                    n(t[f], i) < 0 ? r = f + 1 : u = f
                }
                return r
            }, right: function (t, i, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); r < u;) {
                    var f = r + u >>> 1;
                    n(t[f], i) > 0 ? u = f : r = f + 1
                }
                return r
            }
        }
    }

    function sk(n) {
        return n.length
    }

    function hk(n) {
        for (var t = 1; n * t % 1;) t *= 10;
        return t
    }

    function vl(n, t) {
        try {
            for (var i in t) Object.defineProperty(n.prototype, i, {value: t[i], enumerable: !1})
        } catch (r) {
            n.prototype = t
        }
    }

    function rt() {
    }

    function yl(n) {
        return wt + n in this
    }

    function ck(n) {
        return n = wt + n, n in this && delete this[n]
    }

    function pl() {
        var n = [];
        return this.forEach(function (t) {
            n.push(t)
        }), n
    }

    function wl() {
        var n = 0, t;
        for (t in this) t.charCodeAt(0) === vr && ++n;
        return n
    }

    function bl() {
        for (var n in this) if (n.charCodeAt(0) === vr) return !1;
        return !0
    }

    function ro() {
    }

    function lk(n, t, i) {
        return function () {
            var r = i.apply(t, arguments);
            return r === t ? n : r
        }
    }

    function uo(n, t) {
        var i, u, r;
        if (t in n) return t;
        for (t = t.charAt(0).toUpperCase() + t.substring(1), i = 0, u = fo.length; i < u; ++i) if (r = fo[i] + t, r in n) return r
    }

    function c() {
    }

    function eo() {
    }

    function kl(n) {
        function r() {
            for (var i = t, r = -1, f = i.length, u; ++r < f;) (u = i[r].on) && u.apply(this, arguments);
            return n
        }

        var t = [], i = new rt;
        return r.on = function (r, u) {
            var f = i.get(r), e;
            return arguments.length < 2 ? f && f.on : (f && (f.on = null, t = t.slice(0, e = t.indexOf(f)).concat(t.slice(e + 1)), i.remove(r)), u && t.push(i.set(r, {on: u})), n)
        }, r
    }

    function bt() {
        n.event.preventDefault()
    }

    function oo() {
        for (var t = n.event, i; i = t.sourceEvent;) t = i;
        return t
    }

    function so(t) {
        for (var i = new eo, r = 0, u = arguments.length; ++r < u;) i[arguments[r]] = kl(i);
        return i.of = function (r, u) {
            return function (f) {
                try {
                    var e = f.sourceEvent = n.event;
                    f.target = t;
                    n.event = f;
                    i[f.type].apply(r, u)
                } finally {
                    n.event = e
                }
            }
        }, i
    }

    function kt(n) {
        return yr(n, e), n
    }

    function lo(n) {
        return typeof n == "function" ? n : function () {
            return ho(n, this)
        }
    }

    function na(n) {
        return typeof n == "function" ? n : function () {
            return co(n, this)
        }
    }

    function ta(t, i) {
        function r() {
            this.removeAttribute(t)
        }

        function u() {
            this.removeAttributeNS(t.space, t.local)
        }

        function f() {
            this.setAttribute(t, i)
        }

        function e() {
            this.setAttributeNS(t.space, t.local, i)
        }

        function o() {
            var n = i.apply(this, arguments);
            n == null ? this.removeAttribute(t) : this.setAttribute(t, n)
        }

        function s() {
            var n = i.apply(this, arguments);
            n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
        }

        return t = n.ns.qualify(t), i == null ? t.local ? u : r : typeof i == "function" ? t.local ? s : o : t.local ? e : f
    }

    function ia(n) {
        return n.trim().replace(/\s+/g, " ")
    }

    function ra(t) {
        return new RegExp("(?:^|\\s+)" + n.requote(t) + "(?:\\s+|$)", "g")
    }

    function ua(n) {
        return n.trim().split(/^|\s+/)
    }

    function fa(n, t) {
        function r() {
            for (var r = -1; ++r < i;) n[r](this, t)
        }

        function u() {
            for (var r = -1, u = t.apply(this, arguments); ++r < i;) n[r](this, u)
        }

        n = ua(n).map(vk);
        var i = n.length;
        return typeof t == "function" ? u : r
    }

    function vk(n) {
        var t = ra(n);
        return function (i, r) {
            if (u = i.classList) return r ? u.add(n) : u.remove(n);
            var u = i.getAttribute("class") || "";
            r ? (t.lastIndex = 0, t.test(u) || i.setAttribute("class", ia(u + " " + n))) : i.setAttribute("class", ia(u.replace(t, " ")))
        }
    }

    function ea(n, t, i) {
        function r() {
            this.style.removeProperty(n)
        }

        function u() {
            this.style.setProperty(n, t, i)
        }

        function f() {
            var r = t.apply(this, arguments);
            r == null ? this.style.removeProperty(n) : this.style.setProperty(n, r, i)
        }

        return t == null ? r : typeof t == "function" ? f : u
    }

    function oa(n, t) {
        function i() {
            delete this[n]
        }

        function r() {
            this[n] = t
        }

        function u() {
            var i = t.apply(this, arguments);
            i == null ? delete this[n] : this[n] = i
        }

        return t == null ? i : typeof t == "function" ? u : r
    }

    function sa(t) {
        return typeof t == "function" ? t : (t = n.ns.qualify(t)).local ? function () {
            return this.ownerDocument.createElementNS(t.space, t.local)
        } : function () {
            return this.ownerDocument.createElementNS(this.namespaceURI, t)
        }
    }

    function ao(n) {
        return {__data__: n}
    }

    function ha(n) {
        return function () {
            return gl(this, n)
        }
    }

    function yk(n) {
        return arguments.length || (n = wi), function (t, i) {
            return t && i ? n(t.__data__, i.__data__) : !t - !i
        }
    }

    function dt(n, t) {
        for (var i = 0, u = n.length; i < u; i++) for (var f = n[i], r = 0, o = f.length, e; r < o; r++) (e = f[r]) && t(e, r, i);
        return n
    }

    function ca(n) {
        return yr(n, ut), n
    }

    function pk(n) {
        var t, i;
        return function (r, u, f) {
            var e = n[f].update, s = e.length, o;
            for (f != i && (i = f, t = 0), u >= t && (t = u + 1); !(o = e[t]) && ++t < s;) ;
            return o
        }
    }

    function bu() {
        var n = this.__transition__;
        n && ++n.active
    }

    function la(t, i, r) {
        function s() {
            var n = this[u];
            n && (this.removeEventListener(t, n, n.$), delete this[u])
        }

        function h() {
            var n = o(i, yt(arguments));
            s.call(this);
            this.addEventListener(t, this[u] = n, n.$ = r);
            n._ = i
        }

        function l() {
            var f = new RegExp("^__on([^.]+)" + n.requote(t) + "$"), u, i, r;
            for (i in this) (u = i.match(f)) && (r = this[i], this.removeEventListener(u[1], r, r.$), delete this[i])
        }

        var u = "__on" + t, f = t.indexOf("."), o = aa, e;
        return f > 0 && (t = t.substring(0, f)), e = ku.get(t), e && (t = e, o = wk), f ? i ? h : s : i ? c : l
    }

    function aa(t, i) {
        return function (r) {
            var u = n.event;
            n.event = r;
            i[0] = this.__data__;
            try {
                t.apply(this, i)
            } finally {
                n.event = u
            }
        }
    }

    function wk(n, t) {
        var i = aa(n, t);
        return function (n) {
            var t = this, r = n.relatedTarget;
            r && (r === t || r.compareDocumentPosition(t) & 8) || i.call(t, n)
        }
    }

    function du() {
        var t = ".dragsuppress-" + ++va, u = "click" + t,
            r = n.select(b).on("touchmove" + t, bt).on("dragstart" + t, bt).on("selectstart" + t, bt), i, f;
        return bi && (i = pt.style, f = i[bi], i[bi] = "none"), function (n) {
            r.on(t, null);
            if (bi && (i[bi] = f), n) {
                function e() {
                    r.on(u, null)
                }

                r.on(u, function () {
                    bt();
                    e()
                }, !0);
                setTimeout(e, 0)
            }
        }
    }

    function yo(n, t) {
        var r, i, u;
        return (t.changedTouches && (t = t.changedTouches[0]), r = n.ownerSVGElement || n, r.createSVGPoint) ? (i = r.createSVGPoint(), i.x = t.clientX, i.y = t.clientY, i = i.matrixTransform(n.getScreenCTM().inverse()), [i.x, i.y]) : (u = n.getBoundingClientRect(), [t.clientX - u.left - n.clientLeft, t.clientY - u.top - n.clientTop])
    }

    function bk() {
        return n.event.changedTouches[0].identifier
    }

    function kk() {
        return n.event.target
    }

    function dk() {
        return b
    }

    function ya(n) {
        return n > 0 ? 1 : n < 0 ? -1 : 0
    }

    function wo(n, t, i) {
        return (t[0] - n[0]) * (i[1] - n[1]) - (t[1] - n[1]) * (i[0] - n[0])
    }

    function pa(n) {
        return n > 1 ? 0 : n < -1 ? f : Math.acos(n)
    }

    function ki(n) {
        return n > 1 ? v : n < -1 ? -v : Math.asin(n)
    }

    function gk(n) {
        return ((n = Math.exp(n)) - 1 / n) / 2
    }

    function wa(n) {
        return ((n = Math.exp(n)) + 1 / n) / 2
    }

    function nd(n) {
        return ((n = Math.exp(2 * n)) - 1) / (n + 1)
    }

    function ba(n) {
        return (n = Math.sin(n / 2)) * n
    }

    function di() {
    }

    function gi(n, t, i) {
        return new go(n, t, i)
    }

    function go(n, t, i) {
        this.h = n;
        this.s = t;
        this.l = i
    }

    function ns(n, t, i) {
        function e(n) {
            return (n > 360 ? n -= 360 : n < 0 && (n += 360), n < 60) ? r + (u - r) * n / 60 : n < 180 ? u : n < 240 ? r + (u - r) * (240 - n) / 60 : r
        }

        function f(n) {
            return Math.round(e(n) * 255)
        }

        var r, u;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : t < 0 ? 0 : t > 1 ? 1 : t, i = i < 0 ? 0 : i > 1 ? 1 : i, u = i <= .5 ? i * (1 + t) : i + t - i * t, r = 2 * i - u, ot(f(n + 120), f(n), f(n - 120))
    }

    function nr(n, t, i) {
        return new rf(n, t, i)
    }

    function rf(n, t, i) {
        this.h = n;
        this.c = t;
        this.l = i
    }

    function ts(n, t, i) {
        return isNaN(n) && (n = 0), isNaN(t) && (t = 0), tr(i, Math.cos(n *= u) * t, Math.sin(n) * t)
    }

    function tr(n, t, i) {
        return new ff(n, t, i)
    }

    function ff(n, t, i) {
        this.l = n;
        this.a = t;
        this.b = i
    }

    function iv(n, t, i) {
        var r = (n + 16) / 116, u = r + t / 500, f = r - i / 200;
        return u = rs(u) * ga, r = rs(r) * nv, f = rs(f) * tv, ot(fs(3.2404542 * u - 1.5371385 * r - .4985314 * f), fs(-.969266 * u + 1.8760108 * r + .041556 * f), fs(.0556434 * u - .2040259 * r + 1.0572252 * f))
    }

    function rv(n, t, i) {
        return n > 0 ? nr(Math.atan2(i, t) * s, Math.sqrt(t * t + i * i), n) : nr(NaN, NaN, n)
    }

    function rs(n) {
        return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
    }

    function us(n) {
        return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
    }

    function fs(n) {
        return Math.round(255 * (n <= .00304 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
    }

    function uv(n) {
        return ot(n >> 16, n >> 8 & 255, n & 255)
    }

    function of(n) {
        return uv(n) + ""
    }

    function ot(n, t, i) {
        return new es(n, t, i)
    }

    function es(n, t, i) {
        this.r = n;
        this.g = t;
        this.b = i
    }

    function ir(n) {
        return n < 16 ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
    }

    function fv(n, t, i) {
        var f = 0, e = 0, o = 0, s, u, r;
        if (s = /([a-z]+)\((.*)\)/i.exec(n), s) {
            u = s[2].split(",");
            switch (s[1]) {
                case"hsl":
                    return i(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
                case"rgb":
                    return t(ss(u[0]), ss(u[1]), ss(u[2]))
            }
        }
        return (r = wr.get(n)) ? t(r.r, r.g, r.b) : (n == null || n.charAt(0) !== "#" || isNaN(r = parseInt(n.substring(1), 16)) || (n.length === 4 ? (f = (r & 3840) >> 4, f = f >> 4 | f, e = r & 240, e = e >> 4 | e, o = r & 15, o = o << 4 | o) : n.length === 7 && (f = (r & 16711680) >> 16, e = (r & 65280) >> 8, o = r & 255)), t(f, e, o))
    }

    function ev(n, t, i) {
        var f = Math.min(n /= 255, t /= 255, i /= 255), r = Math.max(n, t, i), u = r - f, e, s, o = (r + f) / 2;
        return u ? (s = o < .5 ? u / (r + f) : u / (2 - r - f), e = (n == r ? (t - i) / u + (t < i ? 6 : 0) : t == r ? (i - n) / u + 2 : (n - t) / u + 4) * 60) : (e = NaN, s = o > 0 && o < 1 ? 0 : e), gi(e, s, o)
    }

    function ov(n, t, i) {
        n = os(n);
        t = os(t);
        i = os(i);
        var u = us((.4124564 * n + .3575761 * t + .1804375 * i) / ga),
            r = us((.2126729 * n + .7151522 * t + .072175 * i) / nv),
            f = us((.0193339 * n + .119192 * t + .9503041 * i) / tv);
        return tr(116 * r - 16, 500 * (u - r), 200 * (r - f))
    }

    function os(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
    }

    function ss(n) {
        var t = parseFloat(n);
        return n.charAt(n.length - 1) === "%" ? Math.round(t * 2.55) : t
    }

    function o(n) {
        return typeof n == "function" ? n : function () {
            return n
        }
    }

    function a(n) {
        return n
    }

    function hs(n) {
        return function (t, i, r) {
            return arguments.length === 2 && typeof i == "function" && (r = i, i = null), sf(t, i, n, r)
        }
    }

    function sf(t, i, r, u) {
        function c() {
            var n = e.status, t;
            if (!n && e.responseText || n >= 200 && n < 300 || n === 304) {
                try {
                    t = r.call(f, e)
                } catch (i) {
                    s.error.call(f, i);
                    return
                }
                s.load.call(f, t)
            } else s.error.call(f, e)
        }

        var f = {}, s = n.dispatch("beforesend", "progress", "load", "error"), o = {}, e = new XMLHttpRequest, h = null;
        return !b.XDomainRequest || "withCredentials" in e || !/^(http(s)?:)?\/\//.test(t) || (e = new XDomainRequest), "onload" in e ? e.onload = e.onerror = c : e.onreadystatechange = function () {
            e.readyState > 3 && c()
        }, e.onprogress = function (t) {
            var i = n.event;
            n.event = t;
            try {
                s.progress.call(f, e)
            } finally {
                n.event = i
            }
        }, f.header = function (n, t) {
            return (n = (n + "").toLowerCase(), arguments.length < 2) ? o[n] : (t == null ? delete o[n] : o[n] = t + "", f)
        }, f.mimeType = function (n) {
            return arguments.length ? (i = n == null ? null : n + "", f) : i
        }, f.responseType = function (n) {
            return arguments.length ? (h = n, f) : h
        }, f.response = function (n) {
            return r = n, f
        }, ["get", "post"].forEach(function (n) {
            f[n] = function () {
                return f.send.apply(f, [n].concat(yt(arguments)))
            }
        }), f.send = function (n, r, u) {
            if (arguments.length === 2 && typeof r == "function" && (u = r, r = null), e.open(n, t, !0), i == null || "accept" in o || (o.accept = i + ",*/*"), e.setRequestHeader) for (var c in o) e.setRequestHeader(c, o[c]);
            if (i != null && e.overrideMimeType && e.overrideMimeType(i), h != null && (e.responseType = h), u != null) f.on("error", u).on("load", function (n) {
                u(null, n)
            });
            return s.beforesend.call(f, e), e.send(r == null ? null : r), f
        }, f.abort = function () {
            return e.abort(), f
        }, n.rebind(f, s, "on"), u == null ? f : f.get(td(u))
    }

    function td(n) {
        return n.length === 1 ? function (t, i) {
            n(t == null ? i : null)
        } : n
    }

    function ls() {
        var t = sv(), n = hv() - t;
        n > 24 ? (isFinite(n) && (clearTimeout(af), af = setTimeout(ls, n)), lf = 0) : (lf = 1, cs(ls))
    }

    function sv() {
        var n = Date.now();
        for (st = hf; st;) n >= st.t && (st.f = st.c(n - st.t)), st = st.n;
        return n
    }

    function hv() {
        for (var t, n = hf, i = Infinity; n;) n.f ? n = t ? t.n = n.n : hf = n.n : (n.t < i && (i = n.t), n = (t = n).n);
        return cf = t, i
    }

    function as(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
    }

    function id(n, t) {
        var i = Math.pow(10, r(8 - t) * 3);
        return {
            scale: t > 8 ? function (n) {
                return n / i
            } : function (n) {
                return n * i
            }, symbol: n
        }
    }

    function rd(t) {
        var f = t.decimal, e = t.thousands, i = t.grouping, r = t.currency, u = i ? function (n) {
            for (var r = n.length, u = [], f = 0, t = i[0]; r > 0 && t > 0;) u.push(n.substring(r -= t, r + t)), t = i[f = (f + 1) % i.length];
            return u.reverse().join(e)
        } : a;
        return function (t) {
            var o = vs.exec(t), w = o[1] || " ", s = o[2] || ">", d = o[3] || "", b = o[4] || "", l = o[5], a = +o[6],
                v = o[7], e = o[8], i = o[9], h = 1, y = "", c = "", k = !1, p;
            e && (e = +e.substring(1));
            (l || w === "0" && s === "=") && (l = w = "0", s = "=", v && (a -= Math.floor((a - 1) / 4)));
            switch (i) {
                case"n":
                    v = !0;
                    i = "g";
                    break;
                case"%":
                    h = 100;
                    c = "%";
                    i = "f";
                    break;
                case"p":
                    h = 100;
                    c = "%";
                    i = "r";
                    break;
                case"b":
                case"o":
                case"x":
                case"X":
                    b === "#" && (y = "0" + i.toLowerCase());
                case"c":
                case"d":
                    k = !0;
                    e = 0;
                    break;
                case"s":
                    h = -1;
                    i = "r"
            }
            return b === "$" && (y = r[0], c = r[1]), i != "r" || e || (i = "g"), e != null && (i == "g" ? e = Math.max(1, Math.min(21, e)) : (i == "e" || i == "f") && (e = Math.max(0, Math.min(20, e)))), i = lv.get(i) || ud, p = l && v, function (t) {
                var it = c, r, tt, g, o;
                if (k && t % 1) return "";
                r = t < 0 || t === 0 && 1 / t < 0 ? (t = -t, "-") : d;
                h < 0 ? (tt = n.formatPrefix(t, e), t = tt.scale(t), it = tt.symbol + c) : t *= h;
                t = i(t, e);
                var nt = t.lastIndexOf("."), b = nt < 0 ? t : t.substring(0, nt),
                    rt = nt < 0 ? "" : f + t.substring(nt + 1);
                return !l && v && (b = u(b)), g = y.length + b.length + rt.length + (p ? 0 : r.length), o = g < a ? new Array(g = a - g + 1).join(w) : "", p && (b = u(o + b)), r += y, t = b + rt, (s === "<" ? r + t + o : s === ">" ? o + r + t : s === "^" ? o.substring(0, g >>= 1) + r + t + o.substring(g) : r + (p ? t : o + t)) + it
            }
        }
    }

    function ud(n) {
        return n + ""
    }

    function ht() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function ei(n, t, i) {
        function e(t) {
            var i = n(t), r = f(i, 1);
            return t - i < r - t ? i : r
        }

        function u(i) {
            return t(i = n(new y(i - 1)), 1), i
        }

        function f(n, i) {
            return t(n = new y(+n), i), n
        }

        function o(n, r, f) {
            var e = u(n), o = [];
            if (f > 1) while (e < r) i(e) % f || o.push(new Date(+e)), t(e, 1); else while (e < r) o.push(new Date(+e)), t(e, 1);
            return o
        }

        function s(n, t, i) {
            try {
                y = ht;
                var r = new ht;
                return r._ = n, o(r, t, i)
            } finally {
                y = Date
            }
        }

        n.floor = n;
        n.round = e;
        n.ceil = u;
        n.offset = f;
        n.range = o;
        var r = n.utc = vf(n);
        return r.floor = r, r.round = vf(e), r.ceil = vf(u), r.offset = vf(f), r.range = s, n
    }

    function vf(n) {
        return function (t, i) {
            try {
                y = ht;
                var r = new ht;
                return r._ = t, n(r, i)._
            } finally {
                y = Date
            }
        }
    }

    function fd(t) {
        function r(n) {
            function t(t) {
                for (var e = [], r = -1, o = 0, f, s, h; ++r < i;) n.charCodeAt(r) === 37 && (e.push(n.substring(o, r)), (s = av[f = n.charAt(++r)]) != null && (f = n.charAt(++r)), (h = u[f]) && (f = h(t, s == null ? f === "e" ? " " : "0" : s)), e.push(f), o = r + 1);
                return e.push(n.substring(o, r)), e.join("")
            }

            var i = n.length;
            return t.parse = function (t) {
                var i = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null}, e = f(i, n, t, 0), u, r;
                return e != t.length ? null : ("p" in i && (i.H = i.H % 12 + i.p * 12), u = i.Z != null && y !== ht, r = new (u ? ht : y), "j" in i ? r.setFullYear(i.y, 0, i.j) : "w" in i && ("W" in i || "U" in i) ? (r.setFullYear(i.y, 0, 1), r.setFullYear(i.y, 0, "W" in i ? (i.w + 6) % 7 + i.W * 7 - (r.getDay() + 5) % 7 : i.w + i.U * 7 - (r.getDay() + 6) % 7)) : r.setFullYear(i.y, i.m, i.d), r.setHours(i.H + Math.floor(i.Z / 100), i.M + i.Z % 100, i.S, i.L), u ? r._ : r)
            }, t.toString = function () {
                return n
            }, t
        }

        function f(n, t, i, r) {
            for (var f, e, o, u = 0, s = t.length, h = i.length; u < s;) {
                if (r >= h) return -1;
                if (f = t.charCodeAt(u++), f === 37) {
                    if (o = t.charAt(u++), e = k[o in av ? t.charAt(u++) : o], !e || (r = e(n, i, r)) < 0) return -1
                } else if (f != i.charCodeAt(r++)) return -1
            }
            return r
        }

        function ft(n, t, i) {
            v.lastIndex = 0;
            var r = v.exec(t.substring(i));
            return r ? (n.w = it.get(r[0].toLowerCase()), i + r[0].length) : -1
        }

        function et(n, t, i) {
            a.lastIndex = 0;
            var r = a.exec(t.substring(i));
            return r ? (n.w = tt.get(r[0].toLowerCase()), i + r[0].length) : -1
        }

        function ot(n, t, i) {
            b.lastIndex = 0;
            var r = b.exec(t.substring(i));
            return r ? (n.m = ut.get(r[0].toLowerCase()), i + r[0].length) : -1
        }

        function st(n, t, i) {
            w.lastIndex = 0;
            var r = w.exec(t.substring(i));
            return r ? (n.m = rt.get(r[0].toLowerCase()), i + r[0].length) : -1
        }

        function ct(n, t, i) {
            return f(n, u.c.toString(), t, i)
        }

        function lt(n, t, i) {
            return f(n, u.x.toString(), t, i)
        }

        function at(n, t, i) {
            return f(n, u.X.toString(), t, i)
        }

        function vt(n, t, i) {
            var r = l.get(t.substring(i, i += 2).toLowerCase());
            return r == null ? -1 : (n.p = r, i)
        }

        var d = t.dateTime, g = t.date, nt = t.time, c = t.periods, e = t.days, o = t.shortDays, s = t.months,
            h = t.shortMonths, u, k;
        r.utc = function (n) {
            function i(n) {
                try {
                    y = ht;
                    var i = new y;
                    return i._ = n, t(i)
                } finally {
                    y = Date
                }
            }

            var t = r(n);
            return i.parse = function (n) {
                try {
                    y = ht;
                    var i = t.parse(n);
                    return i && i._
                } finally {
                    y = Date
                }
            }, i.toString = t.toString, i
        };
        r.multi = r.utc.multi = gd;
        var l = n.map(), a = yf(e), tt = pf(e), v = yf(o), it = pf(o), w = yf(s), rt = pf(s), b = yf(h), ut = pf(h);
        return c.forEach(function (n, t) {
            l.set(n.toLowerCase(), t)
        }), u = {
            a: function (n) {
                return o[n.getDay()]
            }, A: function (n) {
                return e[n.getDay()]
            }, b: function (n) {
                return h[n.getMonth()]
            }, B: function (n) {
                return s[n.getMonth()]
            }, c: r(d), d: function (n, t) {
                return p(n.getDate(), t, 2)
            }, e: function (n, t) {
                return p(n.getDate(), t, 2)
            }, H: function (n, t) {
                return p(n.getHours(), t, 2)
            }, I: function (n, t) {
                return p(n.getHours() % 12 || 12, t, 2)
            }, j: function (n, t) {
                return p(1 + i.dayOfYear(n), t, 3)
            }, L: function (n, t) {
                return p(n.getMilliseconds(), t, 3)
            }, m: function (n, t) {
                return p(n.getMonth() + 1, t, 2)
            }, M: function (n, t) {
                return p(n.getMinutes(), t, 2)
            }, p: function (n) {
                return c[+(n.getHours() >= 12)]
            }, S: function (n, t) {
                return p(n.getSeconds(), t, 2)
            }, U: function (n, t) {
                return p(i.sundayOfYear(n), t, 2)
            }, w: function (n) {
                return n.getDay()
            }, W: function (n, t) {
                return p(i.mondayOfYear(n), t, 2)
            }, x: r(g), X: r(nt), y: function (n, t) {
                return p(n.getFullYear() % 100, t, 2)
            }, Y: function (n, t) {
                return p(n.getFullYear() % 1e4, t, 4)
            }, Z: kd, "%": function () {
                return "%"
            }
        }, k = {
            a: ft,
            A: et,
            b: ot,
            B: st,
            c: ct,
            d: yv,
            e: yv,
            H: pv,
            I: pv,
            j: yd,
            L: bd,
            m: vd,
            M: pd,
            p: vt,
            S: wd,
            U: od,
            w: ed,
            W: sd,
            x: lt,
            X: at,
            y: cd,
            Y: hd,
            Z: ld,
            "%": dd
        }, r
    }

    function p(n, t, i) {
        var u = n < 0 ? "-" : "", r = (u ? -n : n) + "", f = r.length;
        return u + (f < i ? new Array(i - f + 1).join(t) + r : r)
    }

    function yf(t) {
        return new RegExp("^(?:" + t.map(n.requote).join("|") + ")", "i")
    }

    function pf(n) {
        for (var i = new rt, t = -1, r = n.length; ++t < r;) i.set(n[t].toLowerCase(), t);
        return i
    }

    function ed(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 1));
        return r ? (n.w = +r[0], i + r[0].length) : -1
    }

    function od(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i));
        return r ? (n.U = +r[0], i + r[0].length) : -1
    }

    function sd(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i));
        return r ? (n.W = +r[0], i + r[0].length) : -1
    }

    function hd(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 4));
        return r ? (n.y = +r[0], i + r[0].length) : -1
    }

    function cd(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.y = ad(+r[0]), i + r[0].length) : -1
    }

    function ld(n, t, i) {
        return /^[+-]\d{4}$/.test(t = t.substring(i, i + 5)) ? (n.Z = +t, i + 5) : -1
    }

    function ad(n) {
        return n + (n > 68 ? 1900 : 2e3)
    }

    function vd(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.m = r[0] - 1, i + r[0].length) : -1
    }

    function yv(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.d = +r[0], i + r[0].length) : -1
    }

    function yd(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 3));
        return r ? (n.j = +r[0], i + r[0].length) : -1
    }

    function pv(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.H = +r[0], i + r[0].length) : -1
    }

    function pd(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.M = +r[0], i + r[0].length) : -1
    }

    function wd(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.S = +r[0], i + r[0].length) : -1
    }

    function bd(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 3));
        return r ? (n.L = +r[0], i + r[0].length) : -1
    }

    function kd(n) {
        var t = n.getTimezoneOffset(), i = t > 0 ? "-" : "+", u = ~~(r(t) / 60), f = r(t) % 60;
        return i + p(u, "0", 2) + p(f, "0", 2)
    }

    function dd(n, t, i) {
        vv.lastIndex = 0;
        var r = vv.exec(t.substring(i, i + 1));
        return r ? i + r[0].length : -1
    }

    function gd(n) {
        for (var i = n.length, t = -1; ++t < i;) n[t][0] = this(n[t][0]);
        return function (t) {
            for (var r = 0, i = n[r]; !i[1](t);) i = n[++r];
            return i[0](t)
        }
    }

    function ps() {
    }

    function wv(n, t, i) {
        var r = i.s = n + t, u = r - n, f = r - u;
        i.t = n - f + (t - u)
    }

    function wf(n, t) {
        n && bs.hasOwnProperty(n.type) && bs[n.type](n, t)
    }

    function ks(n, t, i) {
        var u = -1, f = n.length - i, r;
        for (t.lineStart(); ++u < f;) r = n[u], t.point(r[0], r[1], r[2]);
        t.lineEnd()
    }

    function bv(n, t) {
        var i = -1, r = n.length;
        for (t.polygonStart(); ++i < r;) ks(n[i], t, 1);
        t.polygonEnd()
    }

    function ng() {
        function o(r, e) {
            r *= u;
            e = e * u / 2 + f / 4;
            var o = r - n, s = o >= 0 ? 1 : -1, h = s * o, c = Math.cos(e), l = Math.sin(e), a = i * l,
                v = t * c + a * Math.cos(h), y = a * s * Math.sin(h);
            gt.add(Math.atan2(y, v));
            n = r;
            t = c;
            i = l
        }

        var r, e, n, t, i;
        w.point = function (s, h) {
            w.point = o;
            n = (r = s) * u;
            t = Math.cos(h = (e = h) * u / 2 + f / 4);
            i = Math.sin(h)
        };
        w.lineEnd = function () {
            o(r, e)
        }
    }

    function oi(n) {
        var t = n[0], i = n[1], r = Math.cos(i);
        return [r * Math.cos(t), r * Math.sin(t), Math.sin(i)]
    }

    function kf(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
    }

    function rr(n, t) {
        return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
    }

    function ds(n, t) {
        n[0] += t[0];
        n[1] += t[1];
        n[2] += t[2]
    }

    function df(n, t) {
        return [n[0] * t, n[1] * t, n[2] * t]
    }

    function gf(n) {
        var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        n[0] /= t;
        n[1] /= t;
        n[2] /= t
    }

    function ne(n) {
        return [Math.atan2(n[1], n[0]), ki(n[2])]
    }

    function te(n, i) {
        return r(n[0] - i[0]) < t && r(n[1] - i[1]) < t
    }

    function gs(n, t) {
        n *= u;
        var i = Math.cos(t *= u);
        dr(i * Math.cos(n), i * Math.sin(n), Math.sin(t))
    }

    function dr(n, t, i) {
        ++kr;
        si += (n - si) / kr;
        hi += (t - hi) / kr;
        ct += (i - ct) / kr
    }

    function kv() {
        function r(r, f) {
            r *= u;
            var c = Math.cos(f *= u), o = c * Math.cos(r), s = c * Math.sin(r), h = Math.sin(f),
                e = Math.atan2(Math.sqrt((e = t * h - i * s) * e + (e = i * o - n * h) * e + (e = n * s - t * o) * e), n * o + t * s + i * h);
            ie += e;
            ni += e * (n + (n = o));
            ti += e * (t + (t = s));
            et += e * (i + (i = h));
            dr(n, t, i)
        }

        var n, t, i;
        g.point = function (f, e) {
            f *= u;
            var o = Math.cos(e *= u);
            n = o * Math.cos(f);
            t = o * Math.sin(f);
            i = Math.sin(e);
            g.point = r;
            dr(n, t, i)
        }
    }

    function dv() {
        g.point = gs
    }

    function tg() {
        function e(r, f) {
            r *= u;
            var p = Math.cos(f *= u), e = p * Math.cos(r), o = p * Math.sin(r), s = Math.sin(f), c = t * s - i * o,
                l = i * e - n * s, a = n * o - t * e, v = Math.sqrt(c * c + l * l + a * a), w = n * e + t * o + i * s,
                y = v && -pa(w) / v, h = Math.atan2(v, w);
            ur += y * c;
            fr += y * l;
            ii += y * a;
            ie += h;
            ni += h * (n + (n = e));
            ti += h * (t + (t = o));
            et += h * (i + (i = s));
            dr(n, t, i)
        }

        var r, f, n, t, i;
        g.point = function (o, s) {
            r = o;
            f = s;
            g.point = e;
            o *= u;
            var h = Math.cos(s *= u);
            n = h * Math.cos(o);
            t = h * Math.sin(o);
            i = Math.sin(s);
            dr(n, t, i)
        };
        g.lineEnd = function () {
            e(r, f);
            g.lineEnd = dv;
            g.point = gs
        }
    }

    function er() {
        return !0
    }

    function gv(n, t, i, r, u) {
        var h = [], s = [], v, o, a, f, c, l, e;
        if (n.forEach(function (n) {
            var o, i, f, e, t, r;
            if (!((o = n.length - 1) <= 0)) {
                if (i = n[0], f = n[o], te(i, f)) {
                    for (u.lineStart(), e = 0; e < o; ++e) u.point((i = n[e])[0], i[1]);
                    u.lineEnd();
                    return
                }
                t = new re(i, n, null, !0);
                r = new re(i, null, t, !1);
                t.o = r;
                h.push(t);
                s.push(r);
                t = new re(f, n, null, !1);
                r = new re(f, null, t, !0);
                t.o = r;
                h.push(t);
                s.push(r)
            }
        }), s.sort(t), ny(h), ny(s), h.length) {
            for (var e = 0, y = i, l = s.length; e < l; ++e) s[e].e = y = !y;
            for (v = h[0]; ;) {
                for (f = v, c = !0; f.v;) if ((f = f.n) === v) return;
                o = f.z;
                u.lineStart();
                do {
                    if (f.v = f.o.v = !0, f.e) {
                        if (c) for (e = 0, l = o.length; e < l; ++e) u.point((a = o[e])[0], a[1]); else r(f.x, f.n.x, 1, u);
                        f = f.n
                    } else {
                        if (c) for (o = f.p.z, e = o.length - 1; e >= 0; --e) u.point((a = o[e])[0], a[1]); else r(f.x, f.p.x, -1, u);
                        f = f.p
                    }
                    f = f.o;
                    o = f.z;
                    c = !c
                } while (!f.v);
                u.lineEnd()
            }
        }
    }

    function ny(n) {
        if (r = n.length) {
            for (var r, u = 0, t = n[0], i; ++u < r;) t.n = i = n[u], i.p = t, t = i;
            t.n = i = n[0];
            i.p = t
        }
    }

    function re(n, t, i, r) {
        this.x = n;
        this.z = t;
        this.o = i;
        this.e = r;
        this.v = !1;
        this.n = this.p = null
    }

    function ty(t, i, r, u) {
        return function (f, e) {
            function v(n, i) {
                var r = f(n, i);
                t(n = r[0], i = r[1]) && e.point(n, i)
            }

            function d(n, t) {
                var i = f(n, t);
                a.point(i[0], i[1])
            }

            function y() {
                o.point = d;
                a.lineStart()
            }

            function p() {
                o.point = v;
                a.lineEnd()
            }

            function b(n, t) {
                h.push([n, t]);
                var i = f(n, t);
                c.point(i[0], i[1])
            }

            function g() {
                c.lineStart();
                h = []
            }

            function nt() {
                var t, r, f;
                b(h[0][0], h[0][1]);
                c.lineEnd();
                var u = c.clean(), n = w.buffer(), i, t = n.length;
                if (h.pop(), l.push(h), h = null, t) {
                    if (u & 1) {
                        for (i = n[0], t = i.length - 1, r = -1, e.lineStart(); ++r < t;) e.point((f = i[r])[0], f[1]);
                        e.lineEnd();
                        return
                    }
                    t > 1 && u & 2 && n.push(n.pop().concat(n.shift()));
                    s.push(n.filter(ig))
                }
            }

            var a = i(e), k = f.invert(u[0], u[1]), o = {
                point: v, lineStart: y, lineEnd: p, polygonStart: function () {
                    o.point = b;
                    o.lineStart = g;
                    o.lineEnd = nt;
                    s = [];
                    l = [];
                    e.polygonStart()
                }, polygonEnd: function () {
                    o.point = v;
                    o.lineStart = y;
                    o.lineEnd = p;
                    s = n.merge(s);
                    var t = ug(k, l);
                    s.length ? gv(s, rg, t, r, e) : t && (e.lineStart(), r(null, null, 1, e), e.lineEnd());
                    e.polygonEnd();
                    s = l = null
                }, sphere: function () {
                    e.polygonStart();
                    e.lineStart();
                    r(null, null, 1, e);
                    e.lineEnd();
                    e.polygonEnd()
                }
            }, s, w = iy(), c = i(w), l, h;
            return o
        }
    }

    function ig(n) {
        return n.length > 1
    }

    function iy() {
        var n = [], t;
        return {
            lineStart: function () {
                n.push(t = [])
            }, point: function (n, i) {
                t.push([n, i])
            }, lineEnd: c, buffer: function () {
                var i = n;
                return n = [], t = null, i
            }, rejoin: function () {
                n.length > 1 && n.push(n.pop().concat(n.shift()))
            }
        }
    }

    function rg(n, i) {
        return ((n = n.x)[0] < 0 ? n[1] - v - t : v - n[1]) - ((i = i.x)[0] < 0 ? i[1] - v - t : v - i[1])
    }

    function ug(n, i) {
        var e = n[0], nt = n[1], ct = [Math.sin(e), -Math.cos(e), 0], a = 0, tt = 0, o, it, s, v, u, d, g;
        for (gt.reset(), o = 0, it = i.length; o < it; ++o) if (s = i[o], v = s.length, v) for (var h = s[0], y = h[0], rt = h[1] / 2 + f / 4, ut = Math.sin(rt), ft = Math.cos(rt), c = 1; ;) {
            c === v && (c = 0);
            n = s[c];
            var p = n[0], et = n[1] / 2 + f / 4, ot = Math.sin(et), st = Math.cos(et), r = p - y, w = r >= 0 ? 1 : -1,
                b = w * r, l = b > f, ht = ut * ot;
            if (gt.add(Math.atan2(ht * w * Math.sin(b), ft * st + ht * Math.cos(b))), a += l ? r + w * k : r, l ^ y >= e ^ p >= e && (u = rr(oi(h), oi(n)), gf(u), d = rr(ct, u), gf(d), g = (l ^ r >= 0 ? -1 : 1) * ki(d[2]), (nt > g || nt === g && (u[0] || u[1])) && (tt += l ^ r >= 0 ? 1 : -1)), !c++) break;
            y = p;
            ut = ot;
            ft = st;
            h = n
        }
        return (a < -t || a < t && gt < 0) ^ tt & 1
    }

    function fg(n) {
        var u = NaN, i = NaN, e = NaN, o;
        return {
            lineStart: function () {
                n.lineStart();
                o = 1
            }, point: function (s, h) {
                var c = s > 0 ? f : -f, l = r(s - u);
                r(l - f) < t ? (n.point(u, i = (i + h) / 2 > 0 ? v : -v), n.point(e, i), n.lineEnd(), n.lineStart(), n.point(c, i), n.point(s, i), o = 0) : e !== c && l >= f && (r(u - e) < t && (u -= e * t), r(s - c) < t && (s -= c * t), i = eg(u, i, s, h), n.point(e, i), n.lineEnd(), n.lineStart(), n.point(c, i), o = 0);
                n.point(u = s, i = h);
                e = c
            }, lineEnd: function () {
                n.lineEnd();
                u = i = NaN
            }, clean: function () {
                return 2 - o
            }
        }
    }

    function eg(n, i, u, f) {
        var e, o, s = Math.sin(n - u);
        return r(s) > t ? Math.atan((Math.sin(i) * (o = Math.cos(f)) * Math.sin(u) - Math.sin(f) * (e = Math.cos(i)) * Math.sin(n)) / (e * o * s)) : (i + f) / 2
    }

    function og(n, i, u, e) {
        var o, s;
        n == null ? (o = u * v, e.point(-f, o), e.point(0, o), e.point(f, o), e.point(f, 0), e.point(f, -o), e.point(0, -o), e.point(-f, -o), e.point(-f, 0), e.point(-f, o)) : r(n[0] - i[0]) > t ? (s = n[0] < i[0] ? f : -f, o = u * s / 2, e.point(-s, o), e.point(0, o), e.point(s, o)) : e.point(i[0], i[1])
    }

    function sg(n) {
        function s(n, t) {
            return Math.cos(n) * Math.cos(t) > i
        }

        function a(n) {
            var i, a, r, l, u;
            return {
                lineStart: function () {
                    l = r = !1;
                    u = 1
                }, point: function (v, y) {
                    var p = [v, y], w, b = s(v, y), d = e ? b ? 0 : h(v, y) : b ? h(v + (v < 0 ? f : -f), y) : 0, k;
                    !i && (l = r = b) && n.lineStart();
                    b !== r && (w = o(i, p), (te(i, w) || te(p, w)) && (p[0] += t, p[1] += t, b = s(p[0], p[1])));
                    b !== r ? (u = 0, b ? (n.lineStart(), w = o(p, i), n.point(w[0], w[1])) : (w = o(i, p), n.point(w[0], w[1]), n.lineEnd()), i = w) : c && i && e ^ b && (d & a || !(k = o(p, i, !0)) || (u = 0, e ? (n.lineStart(), n.point(k[0][0], k[0][1]), n.point(k[1][0], k[1][1]), n.lineEnd()) : (n.point(k[1][0], k[1][1]), n.lineEnd(), n.lineStart(), n.point(k[0][0], k[0][1]))));
                    !b || i && te(i, p) || n.point(p[0], p[1]);
                    i = p;
                    r = b;
                    a = d
                }, lineEnd: function () {
                    r && n.lineEnd();
                    i = null
                }, clean: function () {
                    return u | (l && r) << 1
                }
            }
        }

        function o(n, u, e) {
            var et = oi(n), ot = oi(u), rt = [1, 0, 0], a = rr(et, ot), ut = kf(a, a), b = a[0], k = ut - b * b, g, o,
                it;
            if (!k) return !e && n;
            var st = i * ut / k, ht = -i * b / k, ct = rr(rt, a), s = df(rt, st), lt = df(a, ht);
            ds(s, lt);
            var v = ct, p = kf(s, v), d = kf(v, v), ft = p * p - d * (kf(s, s) - 1);
            if (!(ft < 0)) {
                if (g = Math.sqrt(ft), o = df(v, (-p - g) / d), ds(o, s), o = ne(o), !e) return o;
                var h = n[0], y = u[0], c = n[1], l = u[1], w;
                y < h && (w = h, h = y, y = w);
                var nt = y - h, tt = r(nt - f) < t, at = tt || nt < t;
                return !tt && l < c && (w = c, c = l, l = w), (at ? tt ? c + l > 0 ^ o[1] < (r(o[0] - h) < t ? c : l) : c <= o[1] && o[1] <= l : nt > f ^ (h <= o[0] && o[0] <= y)) ? (it = df(v, (-p + g) / d), ds(it, s), [o, ne(it)]) : void 0
            }
        }

        function h(t, i) {
            var u = e ? n : f - n, r = 0;
            return t < -u ? r |= 1 : t > u && (r |= 2), i < -u ? r |= 4 : i > u && (r |= 8), r
        }

        var i = Math.cos(n), e = i > 0, c = r(i) > t, l = eh(n, 6 * u);
        return ty(s, a, l, e ? [0, -n] : [-f, n - f])
    }

    function ry(n, t, i, r) {
        return function (u) {
            var a = u.a, v = u.b, c = a.x, l = a.y, y = v.x, p = v.y, e = 0, o = 1, s = y - c, h = p - l, f;
            if (f = n - c, s || !(f > 0)) {
                if (f /= s, s < 0) {
                    if (f < e) return;
                    f < o && (o = f)
                } else if (s > 0) {
                    if (f > o) return;
                    f > e && (e = f)
                }
                if (f = i - c, s || !(f < 0)) {
                    if (f /= s, s < 0) {
                        if (f > o) return;
                        f > e && (e = f)
                    } else if (s > 0) {
                        if (f < e) return;
                        f < o && (o = f)
                    }
                    if (f = t - l, h || !(f > 0)) {
                        if (f /= h, h < 0) {
                            if (f < e) return;
                            f < o && (o = f)
                        } else if (h > 0) {
                            if (f > o) return;
                            f > e && (e = f)
                        }
                        if (f = r - l, h || !(f < 0)) {
                            if (f /= h, h < 0) {
                                if (f > o) return;
                                f > e && (e = f)
                            } else if (h > 0) {
                                if (f < e) return;
                                f < o && (o = f)
                            }
                            return e > 0 && (u.a = {x: c + e * s, y: l + e * h}), o < 1 && (u.b = {
                                x: c + o * s,
                                y: l + o * h
                            }), u
                        }
                    }
                }
            }
        }
    }

    function uy(i, u, f, e) {
        function o(n, e) {
            return r(n[0] - i) < t ? e > 0 ? 0 : 3 : r(n[0] - f) < t ? e > 0 ? 2 : 1 : r(n[1] - u) < t ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2
        }

        function h(n, t) {
            return s(n.x, t.x)
        }

        function s(n, t) {
            var i = o(n, 1), r = o(t, 1);
            return i !== r ? i - r : i === 0 ? t[1] - n[1] : i === 1 ? n[0] - t[0] : i === 2 ? n[1] - t[1] : t[0] - n[0]
        }

        return function (t) {
            function ot(n) {
                for (var u = 0, s = c.length, f = n[1], i = 0; i < s; ++i) for (var e = 1, o = c[i], h = o.length, r = o[0], t; e < h; ++e) t = o[e], r[1] <= f ? t[1] > f && wo(r, t, n) > 0 && ++u : t[1] <= f && wo(r, t, n) < 0 && --u, r = t;
                return u !== 0
            }

            function d(n, t, r, h) {
                var c = 0, l = 0;
                if (n == null || (c = o(n, r)) !== (l = o(t, r)) || s(n, t) < 0 ^ r > 0) {
                    do h.point(c === 0 || c === 3 ? i : f, c > 1 ? e : u); while ((c = (c + r + 4) % 4) !== l)
                } else h.point(t[0], t[1])
            }

            function g(n, t) {
                return i <= n && n <= f && u <= t && t <= e
            }

            function nt(n, i) {
                g(n, i) && t.point(n, i)
            }

            function st() {
                p.point = ut;
                c && c.push(y = []);
                k = !0;
                l = !1;
                w = b = NaN
            }

            function ht() {
                r && (ut(tt, it), rt && l && v.rejoin(), r.push(v.buffer()));
                p.point = nt;
                l && t.lineEnd()
            }

            function ut(n, i) {
                var r, u;
                n = Math.max(-gr, Math.min(gr, n));
                i = Math.max(-gr, Math.min(gr, i));
                r = g(n, i);
                c && y.push([n, i]);
                k ? (tt = n, it = i, rt = r, k = !1, r && (t.lineStart(), t.point(n, i))) : r && l ? t.point(n, i) : (u = {
                    a: {
                        x: w,
                        y: b
                    }, b: {x: n, y: i}
                }, et(u) ? (l || (t.lineStart(), t.point(u.a.x, u.a.y)), t.point(u.b.x, u.b.y), r || t.lineEnd(), a = !1) : r && (t.lineStart(), t.point(n, i), a = !1));
                w = n;
                b = i;
                l = r
            }

            var ft = t, v = iy(), et = ry(i, u, f, e), r, c, y, p = {
                point: nt, lineStart: st, lineEnd: ht, polygonStart: function () {
                    t = v;
                    r = [];
                    c = [];
                    a = !0
                }, polygonEnd: function () {
                    t = ft;
                    r = n.merge(r);
                    var u = ot([i, e]), f = a && u, o = r.length;
                    (f || o) && (t.polygonStart(), f && (t.lineStart(), d(null, null, 1, t), t.lineEnd()), o && gv(r, h, u, d, t), t.polygonEnd());
                    r = c = y = null
                }
            }, tt, it, rt, w, b, l, k, a;
            return p
        }
    }

    function fy(n, t) {
        function i(i, r) {
            return i = n(i, r), t(i[0], i[1])
        }

        return n.invert && t.invert && (i.invert = function (i, r) {
            return i = t.invert(i, r), i && n.invert(i[0], i[1])
        }), i
    }

    function th(n) {
        var t = 0, i = f / 3, r = uh(n), u = r(t, i);
        return u.parallels = function (n) {
            return arguments.length ? r(t = n[0] * f / 180, i = n[1] * f / 180) : [t / f * 180, i / f * 180]
        }, u
    }

    function ey(n, t) {
        function e(n, t) {
            var r = Math.sqrt(u - 2 * i * Math.sin(t)) / i;
            return [r * Math.sin(n *= i), f - r * Math.cos(n)]
        }

        var r = Math.sin(n), i = (r + Math.sin(t)) / 2, u = 1 + r * (2 * i - r), f = Math.sqrt(u) / i;
        return e.invert = function (n, t) {
            var r = f - t;
            return [Math.atan2(n, r) / i, ki((u - (n * n + r * r) * i * i) / (2 * i))]
        }, e
    }

    function hg() {
        function u(i, r) {
            rh += t * i - n * r;
            n = i;
            t = r
        }

        var i, r, n, t;
        lt.point = function (f, e) {
            lt.point = u;
            i = n = f;
            r = t = e
        };
        lt.lineEnd = function () {
            u(i, r)
        }
    }

    function cg(n, t) {
        n < ue && (ue = n);
        n > ee && (ee = n);
        t < fe && (fe = t);
        t > oe && (oe = t)
    }

    function lg() {
        function i(n, i) {
            t.push("M", n, ",", i, r)
        }

        function f(i, r) {
            t.push("M", i, ",", r);
            n.point = e
        }

        function e(n, i) {
            t.push("L", n, ",", i)
        }

        function u() {
            n.point = i
        }

        function o() {
            t.push("Z")
        }

        var r = sy(4.5), t = [], n = {
            point: i, lineStart: function () {
                n.point = f
            }, lineEnd: u, polygonStart: function () {
                n.lineEnd = o
            }, polygonEnd: function () {
                n.lineEnd = u;
                n.point = i
            }, pointRadius: function (t) {
                return r = sy(t), n
            }, result: function () {
                if (t.length) {
                    var n = t.join("");
                    return t = [], n
                }
            }
        };
        return n
    }

    function sy(n) {
        return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
    }

    function ci(n, t) {
        si += n;
        hi += t;
        ++ct
    }

    function hy() {
        function i(i, r) {
            var f = i - n, e = r - t, u = Math.sqrt(f * f + e * e);
            ni += u * (n + i) / 2;
            ti += u * (t + r) / 2;
            et += u;
            ci(n = i, t = r)
        }

        var n, t;
        nt.point = function (r, u) {
            nt.point = i;
            ci(n = r, t = u)
        }
    }

    function cy() {
        nt.point = ci
    }

    function ag() {
        function u(i, r) {
            var f = i - n, e = r - t, u = Math.sqrt(f * f + e * e);
            ni += u * (n + i) / 2;
            ti += u * (t + r) / 2;
            et += u;
            u = t * i - n * r;
            ur += u * (n + i);
            fr += u * (t + r);
            ii += u * 3;
            ci(n = i, t = r)
        }

        var i, r, n, t;
        nt.point = function (f, e) {
            nt.point = u;
            ci(i = n = f, r = t = e)
        };
        nt.lineEnd = function () {
            u(i, r)
        }
    }

    function vg(n) {
        function i(t, i) {
            n.moveTo(t, i);
            n.arc(t, i, r, 0, k)
        }

        function f(i, r) {
            n.moveTo(i, r);
            t.point = e
        }

        function e(t, i) {
            n.lineTo(t, i)
        }

        function u() {
            t.point = i
        }

        function o() {
            n.closePath()
        }

        var r = 4.5, t = {
            point: i, lineStart: function () {
                t.point = f
            }, lineEnd: u, polygonStart: function () {
                t.lineEnd = o
            }, polygonEnd: function () {
                t.lineEnd = u;
                t.point = i
            }, pointRadius: function (n) {
                return r = n, t
            }, result: c
        };
        return t
    }

    function ly(n) {
        function o(n) {
            return (f ? c : h)(n)
        }

        function h(t) {
            return vy(t, function (i, r) {
                i = n(i, r);
                t.point(i[0], i[1])
            })
        }

        function c(t) {
            function g(i, r) {
                i = n(i, r);
                t.point(i[0], i[1])
            }

            function l() {
                r = NaN;
                i.point = a;
                t.lineStart()
            }

            function a(i, l) {
                var a = oi([i, l]), v = n(i, l);
                e(r, u, c, o, s, h, r = v[0], u = v[1], c = i, o = a[0], s = a[1], h = a[2], f, t);
                t.point(r, u)
            }

            function v() {
                i.point = g;
                t.lineEnd()
            }

            function tt() {
                l();
                i.point = it;
                i.lineEnd = rt
            }

            function it(n, t) {
                a(y = n, nt = t);
                p = r;
                w = u;
                b = o;
                k = s;
                d = h;
                i.point = a
            }

            function rt() {
                e(r, u, c, o, s, h, p, w, y, b, k, d, f, t);
                i.lineEnd = v;
                v()
            }

            var y, nt, p, w, b, k, d, c, r, u, o, s, h, i = {
                point: g, lineStart: l, lineEnd: v, polygonStart: function () {
                    t.polygonStart();
                    i.lineStart = tt
                }, polygonEnd: function () {
                    t.polygonEnd();
                    i.lineStart = l
                }
            };
            return i
        }

        function e(u, f, o, h, c, l, a, v, y, p, w, b, k, d) {
            var it = a - u, rt = v - f, et = it * it + rt * rt;
            if (et > 4 * i && k--) {
                var nt = h + p, tt = c + w, g = l + b, ot = Math.sqrt(nt * nt + tt * tt + g * g),
                    vt = Math.asin(g /= ot), st = r(r(g) - 1) < t || r(o - y) < t ? (o + y) / 2 : Math.atan2(tt, nt),
                    ht = n(st, vt), ut = ht[0], ft = ht[1], ct = ut - u, lt = ft - f, at = rt * ct - it * lt;
                (at * at / et > i || r((it * ct + rt * lt) / et - .5) > .3 || h * p + c * w + l * b < s) && (e(u, f, o, h, c, l, ut, ft, st, nt /= ot, tt /= ot, g, k, d), d.point(ut, ft), e(ut, ft, st, nt, tt, g, a, v, y, p, w, b, k, d))
            }
        }

        var i = .5, s = Math.cos(30 * u), f = 16;
        return o.precision = function (n) {
            return arguments.length ? (f = (i = n * n) > 0 && 16, o) : Math.sqrt(i)
        }, o
    }

    function yg(n) {
        var t = ly(function (t, i) {
            return n([t * s, i * s])
        });
        return function (n) {
            return yy(t(n))
        }
    }

    function ay(n) {
        this.stream = n
    }

    function vy(n, t) {
        return {
            point: t, sphere: function () {
                n.sphere()
            }, lineStart: function () {
                n.lineStart()
            }, lineEnd: function () {
                n.lineEnd()
            }, polygonStart: function () {
                n.polygonStart()
            }, polygonEnd: function () {
                n.polygonEnd()
            }
        }
    }

    function ri(n) {
        return uh(function () {
            return n
        })()
    }

    function uh(t) {
        function r(n) {
            return n = l(n[0] * u, n[1] * u), [n[0] * i + h, c - n[1] * i]
        }

        function et(n) {
            return n = l.invert((n[0] - h) / i, (c - n[1]) / i), n && [n[0] * s, n[1] * s]
        }

        function o() {
            l = fy(tt = fh(b, k, d), e);
            var n = e(p, w);
            return h = v - n[0] * i, c = y + n[1] * i, nt()
        }

        function nt() {
            return f && (f.valid = !1, f = null), r
        }

        var e, tt, l, it = ly(function (n, t) {
            return n = e(n, t), [n[0] * i + h, c - n[1] * i]
        }), i = 150, v = 480, y = 250, p = 0, w = 0, b = 0, k = 0, d = 0, h, c, rt = nh, ut = a, g = null, ft = null, f;
        return r.stream = function (n) {
            return f && (f.valid = !1), f = yy(rt(tt, it(ut(n)))), f.valid = !0, f
        }, r.clipAngle = function (n) {
            return arguments.length ? (rt = n == null ? (g = n, nh) : sg((g = +n) * u), nt()) : g
        }, r.clipExtent = function (n) {
            return arguments.length ? (ft = n, ut = n ? uy(n[0][0], n[0][1], n[1][0], n[1][1]) : a, nt()) : ft
        }, r.scale = function (n) {
            return arguments.length ? (i = +n, o()) : i
        }, r.translate = function (n) {
            return arguments.length ? (v = +n[0], y = +n[1], o()) : [v, y]
        }, r.center = function (n) {
            return arguments.length ? (p = n[0] % 360 * u, w = n[1] % 360 * u, o()) : [p * s, w * s]
        }, r.rotate = function (n) {
            return arguments.length ? (b = n[0] % 360 * u, k = n[1] % 360 * u, d = n.length > 2 ? n[2] % 360 * u : 0, o()) : [b * s, k * s, d * s]
        }, n.rebind(r, it, "precision"), function () {
            return e = t.apply(this, arguments), r.invert = e.invert && et, o()
        }
    }

    function yy(n) {
        return vy(n, function (t, i) {
            n.point(t * u, i * u)
        })
    }

    function nu(n, t) {
        return [n, t]
    }

    function py(n, t) {
        return [n > f ? n - k : n < -f ? n + k : n, t]
    }

    function fh(n, t, i) {
        return n ? t || i ? fy(by(n), ky(t, i)) : by(n) : t || i ? ky(t, i) : py
    }

    function wy(n) {
        return function (t, i) {
            return t += n, [t > f ? t - k : t < -f ? t + k : t, i]
        }
    }

    function by(n) {
        var t = wy(n);
        return t.invert = wy(-n), t
    }

    function ky(n, t) {
        function e(n, t) {
            var e = Math.cos(t), o = Math.cos(n) * e, s = Math.sin(n) * e, h = Math.sin(t), c = h * i + o * r;
            return [Math.atan2(s * u - c * f, o * i - h * r), ki(c * u + s * f)]
        }

        var i = Math.cos(n), r = Math.sin(n), u = Math.cos(t), f = Math.sin(t);
        return e.invert = function (n, t) {
            var e = Math.cos(t), o = Math.cos(n) * e, s = Math.sin(n) * e, h = Math.sin(t), c = h * u - s * f;
            return [Math.atan2(s * u + h * f, o * i + c * r), ki(c * i - o * r)]
        }, e
    }

    function eh(n, t) {
        var i = Math.cos(n), r = Math.sin(n);
        return function (u, f, e, o) {
            var h = e * t, c, s;
            for (u != null ? (u = dy(i, u), f = dy(i, f), (e > 0 ? u < f : u > f) && (u += e * k)) : (u = n + e * k, f = n - .5 * h), s = u; e > 0 ? s > f : s < f; s -= h) o.point((c = ne([i, -r * Math.cos(s), -r * Math.sin(s)]))[0], c[1])
        }
    }

    function dy(n, i) {
        var r = oi(i), u;
        return r[0] -= n, gf(r), u = pa(-r[1]), ((-r[2] < 0 ? -u : u) + 2 * Math.PI - t) % (2 * Math.PI)
    }

    function gy(i, r, u) {
        var f = n.range(i, r - t, u).concat(r);
        return function (n) {
            return f.map(function (t) {
                return [n, t]
            })
        }
    }

    function np(i, r, u) {
        var f = n.range(i, r - t, u).concat(r);
        return function (n) {
            return f.map(function (t) {
                return [t, n]
            })
        }
    }

    function oh(n) {
        return n.source
    }

    function sh(n) {
        return n.target
    }

    function pg(n, t, i, r) {
        var f = Math.cos(t), c = Math.sin(t), e = Math.cos(r), l = Math.sin(r), a = f * Math.cos(n),
            v = f * Math.sin(n), y = e * Math.cos(i), p = e * Math.sin(i),
            u = 2 * Math.asin(Math.sqrt(ba(r - t) + f * e * ba(i - n))), o = 1 / Math.sin(u), h = u ? function (n) {
                var t = Math.sin(n *= u) * o, i = Math.sin(u - n) * o, r = i * a + t * y, f = i * v + t * p,
                    e = i * c + t * l;
                return [Math.atan2(f, r) * s, Math.atan2(e, Math.sqrt(r * r + f * f)) * s]
            } : function () {
                return [n * s, t * s]
            };
        return h.distance = u, h
    }

    function wg() {
        function f(f, e) {
            var h = Math.sin(e *= u), s = Math.cos(e), o = r((f *= u) - i), c = Math.cos(o);
            hh += Math.atan2(Math.sqrt((o = s * Math.sin(o)) * o + (o = t * h - n * s * c) * o), n * h + t * s * c);
            i = f;
            n = h;
            t = s
        }

        var i, n, t;
        li.point = function (r, e) {
            i = r * u;
            n = Math.sin(e *= u);
            t = Math.cos(e);
            li.point = f
        };
        li.lineEnd = function () {
            li.point = li.lineEnd = c
        }
    }

    function tu(n, t) {
        function i(t, i) {
            var f = Math.cos(t), r = Math.cos(i), u = n(f * r);
            return [u * r * Math.sin(t), u * Math.sin(i)]
        }

        return i.invert = function (n, i) {
            var r = Math.sqrt(n * n + i * i), u = t(r), f = Math.sin(u), e = Math.cos(u);
            return [Math.atan2(n * f, r * e), Math.asin(r && i * f / r)]
        }, i
    }

    function tp(n, i) {
        function s(n, i) {
            u > 0 ? i < -v + t && (i = -v + t) : i > v - t && (i = v - t);
            var f = u / Math.pow(e(i), r);
            return [f * Math.sin(r * n), u - f * Math.cos(r * n)]
        }

        var o = Math.cos(n), e = function (n) {
            return Math.tan(f / 4 + n / 2)
        }, r = n === i ? Math.sin(n) : Math.log(o / Math.cos(i)) / Math.log(e(i) / e(n)), u = o * Math.pow(e(n), r) / r;
        return r ? (s.invert = function (n, t) {
            var i = u - t, f = ya(r) * Math.sqrt(n * n + i * i);
            return [Math.atan2(n, i) / r, 2 * Math.atan(Math.pow(u / f, 1 / r)) - v]
        }, s) : se
    }

    function ip(n, i) {
        function o(n, t) {
            var i = f - t;
            return [i * Math.sin(u * n), f - i * Math.cos(u * n)]
        }

        var e = Math.cos(n), u = n === i ? Math.sin(n) : (e - Math.cos(i)) / (i - n), f = e / u + n;
        return r(u) < t ? nu : (o.invert = function (n, t) {
            var i = f - t;
            return [Math.atan2(n, i) / u, f - ya(u) * Math.sqrt(n * n + i * i)]
        }, o)
    }

    function se(n, t) {
        return [n, Math.log(Math.tan(f / 4 + t / 2))]
    }

    function rp(n) {
        var t = ri(n), r = t.scale, u = t.translate, e = t.clipExtent, i;
        return t.scale = function () {
            var n = r.apply(t, arguments);
            return n === t ? i ? t.clipExtent(null) : t : n
        }, t.translate = function () {
            var n = u.apply(t, arguments);
            return n === t ? i ? t.clipExtent(null) : t : n
        }, t.clipExtent = function (n) {
            var h = e.apply(t, arguments), o, s;
            return h === t ? (i = n == null) && (o = f * r(), s = u(), e([[s[0] - o, s[1] - o], [s[0] + o, s[1] + o]])) : i && (h = null), h
        }, t.clipExtent(null)
    }

    function ph(n, t) {
        return [Math.log(Math.tan(f / 4 + t / 2)), -n]
    }

    function or(n) {
        return n[0]
    }

    function iu(n) {
        return n[1]
    }

    function up(n) {
        for (var u = n.length, r = [0, 1], t = 2, i = 2; i < u; i++) {
            while (t > 1 && wo(n[r[t - 2]], n[r[t - 1]], n[i]) <= 0) --t;
            r[t++] = i
        }
        return r.slice(0, t)
    }

    function bg(n, t) {
        return n[0] - t[0] || n[1] - t[1]
    }

    function wh(n, t, i) {
        return (i[0] - t[0]) * (n[1] - t[1]) < (i[1] - t[1]) * (n[0] - t[0])
    }

    function fp(n, t, i, r) {
        var u = n[0], e = i[0], o = t[0] - u, s = r[0] - e, f = n[1], h = i[1], c = t[1] - f, l = r[1] - h,
            a = (s * (f - h) - l * (u - e)) / (l * o - s * c);
        return [u + a * o, f + a * c]
    }

    function ep(n) {
        var t = n[0], i = n[n.length - 1];
        return !(t[0] - i[0] || t[1] - i[1])
    }

    function kg() {
        le(this);
        this.edge = this.site = this.circle = null
    }

    function op(n) {
        var t = bh.pop() || new kg;
        return t.site = n, t
    }

    function gh(n) {
        lr(n);
        hr.remove(n);
        bh.push(n);
        le(n)
    }

    function dg(n) {
        var a = n.circle, o = a.x, s = a.cy, v = {x: o, y: s}, h = n.P, c = n.N, f = [n], u, i, l, e;
        for (gh(n), u = h; u.circle && r(o - u.circle.x) < t && r(s - u.circle.cy) < t;) h = u.P, f.unshift(u), gh(u), u = h;
        for (f.unshift(u), lr(u), i = c; i.circle && r(o - i.circle.x) < t && r(s - i.circle.cy) < t;) c = i.N, f.push(i), gh(i), i = c;
        for (f.push(i), lr(i), l = f.length, e = 1; e < l; ++e) i = f[e], u = f[e - 1], he(i.edge, u.site, i.site, v);
        u = f[0];
        i = f[l - 1];
        i.edge = fu(u.site, i.site, null, v);
        cr(u);
        cr(i)
    }

    function gg(n) {
        for (var b = n.x, k = n.y, i, r, a, v, u = hr._, f; u;) if (a = sp(u, k) - b, a > t) u = u.L; else if (v = b - nn(u, k), v > t) {
            if (!u.R) {
                i = u;
                break
            }
            u = u.R
        } else {
            a > -t ? (i = u.P, r = u) : v > -t ? (i = u, r = u.N) : i = r = u;
            break
        }
        if (f = op(n), hr.insert(i, f), i || r) {
            if (i === r) {
                lr(i);
                r = op(i.site);
                hr.insert(f, r);
                f.edge = r.edge = fu(i.site, f.site);
                cr(i);
                cr(r);
                return
            }
            if (!r) {
                f.edge = fu(i.site, f.site);
                return
            }
            lr(i);
            lr(r);
            var e = i.site, y = e.x, p = e.y, o = n.x - y, s = n.y - p, h = r.site, c = h.x - y, l = h.y - p,
                d = 2 * (o * l - s * c), g = o * o + s * s, nt = c * c + l * l,
                w = {x: (l * g - s * nt) / d + y, y: (o * nt - c * g) / d + p};
            he(r.edge, e, h, w);
            f.edge = fu(e, n, null, w);
            r.edge = fu(n, h, null, w);
            cr(i);
            cr(r)
        }
    }

    function sp(n, t) {
        var i = n.site, u = i.x, l = i.y, f = l - t, e;
        if (!f) return u;
        if (e = n.P, !e) return -Infinity;
        i = e.site;
        var o = i.x, a = i.y, r = a - t;
        if (!r) return o;
        var s = o - u, h = 1 / f - 1 / r, c = s / r;
        return h ? (-c + Math.sqrt(c * c - 2 * h * (s * s / (-2 * r) - a + r / 2 + l - f / 2))) / h + u : (u + o) / 2
    }

    function nn(n, t) {
        var r = n.N, i;
        return r ? sp(r, t) : (i = n.site, i.y === t ? i.x : Infinity)
    }

    function hp(n) {
        this.site = n;
        this.edges = []
    }

    function tn(n) {
        for (var s = n[0][0], h = n[1][0], c = n[0][1], l = n[1][1], i, u, f, e, b = ai, k = b.length, o, a, v, y, w, p; k--;) if (o = b[k], o && o.prepare()) for (v = o.edges, y = v.length, a = 0; a < y;) p = v[a].end(), f = p.x, e = p.y, w = v[++a % y].start(), i = w.x, u = w.y, (r(f - i) > t || r(e - u) > t) && (v.splice(a, 0, new ce(en(o.site, p, r(f - s) < t && l - e > t ? {
            x: s,
            y: r(i - s) < t ? u : l
        } : r(e - l) < t && h - f > t ? {x: r(u - l) < t ? i : h, y: l} : r(f - h) < t && e - c > t ? {
            x: h,
            y: r(i - h) < t ? u : c
        } : r(e - c) < t && f - s > t ? {x: r(u - c) < t ? i : s, y: c} : null), o.site, null)), ++y)
    }

    function cp(n, t) {
        return t.angle - n.angle
    }

    function rn() {
        le(this);
        this.x = this.y = this.arc = this.site = this.cy = null
    }

    function cr(n) {
        var w = n.P, b = n.N, u, t;
        if (w && b) {
            var s = w.site, h = n.site, c = b.site;
            if (s !== c) {
                var l = h.x, a = h.y, f = s.x - l, e = s.y - a, o = c.x - l, r = c.y - a, v = 2 * (f * r - e * o);
                if (!(v >= -po)) {
                    var k = f * f + e * e, d = o * o + r * r, y = (r * k - e * d) / v, p = (f * d - o * k) / v,
                        r = p + a, i = dh.pop() || new rn;
                    for (i.arc = n, i.site = h, i.x = y + l, i.y = r + Math.sqrt(y * y + p * p), i.cy = r, n.circle = i, u = null, t = uu._; t;) if (i.y < t.y || i.y === t.y && i.x <= t.x) if (t.L) t = t.L; else {
                        u = t.P;
                        break
                    } else if (t.R) t = t.R; else {
                        u = t;
                        break
                    }
                    uu.insert(u, i);
                    u || (kh = i)
                }
            }
        }
    }

    function lr(n) {
        var t = n.circle;
        t && (t.P || (kh = t.N), uu.remove(t), dh.push(t), le(t), n.circle = null)
    }

    function un(n) {
        for (var u = sr, e = ry(n[0][0], n[0][1], n[1][0], n[1][1]), f = u.length, i; f--;) i = u[f], (!fn(i, n) || !e(i) || r(i.a.x - i.b.x) < t && r(i.a.y - i.b.y) < t) && (i.a = i.b = null, u.splice(f, 1))
    }

    function fn(n, t) {
        var f = n.b;
        if (f) return !0;
        var i = n.a, h = t[0][0], c = t[1][0], e = t[0][1], o = t[1][1], p = n.l, w = n.r, l = p.x, a = p.y, v = w.x,
            y = w.y, s = (l + v) / 2, b = (a + y) / 2, r, u;
        if (y === a) {
            if (s < h || s >= c) return;
            if (l > v) {
                if (i) {
                    if (i.y >= o) return
                } else i = {x: s, y: e};
                f = {x: s, y: o}
            } else {
                if (i) {
                    if (i.y < e) return
                } else i = {x: s, y: o};
                f = {x: s, y: e}
            }
        } else if (r = (l - v) / (y - a), u = b - r * s, r < -1 || r > 1) if (l > v) {
            if (i) {
                if (i.y >= o) return
            } else i = {x: (e - u) / r, y: e};
            f = {x: (o - u) / r, y: o}
        } else {
            if (i) {
                if (i.y < e) return
            } else i = {x: (o - u) / r, y: o};
            f = {x: (e - u) / r, y: e}
        } else if (a < y) {
            if (i) {
                if (i.x >= c) return
            } else i = {x: h, y: r * h + u};
            f = {x: c, y: r * c + u}
        } else {
            if (i) {
                if (i.x < h) return
            } else i = {x: c, y: r * c + u};
            f = {x: h, y: r * h + u}
        }
        return n.a = i, n.b = f, !0
    }

    function lp(n, t) {
        this.l = n;
        this.r = t;
        this.a = this.b = null
    }

    function fu(n, t, i, r) {
        var u = new lp(n, t);
        return sr.push(u), i && he(u, n, t, i), r && he(u, t, n, r), ai[n.i].edges.push(new ce(u, n, t)), ai[t.i].edges.push(new ce(u, t, n)), u
    }

    function en(n, t, i) {
        var r = new lp(n, null);
        return r.a = t, r.b = i, sr.push(r), r
    }

    function he(n, t, i, r) {
        n.a || n.b ? n.l === i ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = i)
    }

    function ce(n, t, i) {
        var r = n.a, u = n.b;
        this.edge = n;
        this.site = t;
        this.angle = i ? Math.atan2(i.y - t.y, i.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
    }

    function nc() {
        this._ = null
    }

    function le(n) {
        n.U = n.C = n.L = n.R = n.P = n.N = null
    }

    function eu(n, t) {
        var i = t, r = t.R, u = i.U;
        u ? u.L === i ? u.L = r : u.R = r : n._ = r;
        r.U = u;
        i.U = r;
        i.R = r.L;
        i.R && (i.R.U = i);
        r.L = i
    }

    function ou(n, t) {
        var i = t, r = t.L, u = i.U;
        u ? u.L === i ? u.L = r : u.R = r : n._ = r;
        r.U = u;
        i.U = r;
        i.L = r.R;
        i.L && (i.L.U = i);
        r.R = i
    }

    function ap(n) {
        while (n.L) n = n.L;
        return n
    }

    function tc(n, t) {
        var i = n.sort(on).pop(), u, f, r, e;
        for (sr = [], ai = new Array(n.length), hr = new nc, uu = new nc; ;) if (r = kh, i && (!r || i.y < r.y || i.y === r.y && i.x < r.x)) (i.x !== u || i.y !== f) && (ai[i.i] = new hp(i), gg(i), u = i.x, f = i.y), i = n.pop(); else if (r) dg(r.arc); else break;
        return t && (un(t), tn(t)), e = {cells: ai, edges: sr}, hr = uu = sr = ai = null, e
    }

    function on(n, t) {
        return t.y - n.y || t.x - n.x
    }

    function sn(n, t, i) {
        return (n.x - i.x) * (t.y - n.y) - (n.x - t.x) * (i.y - n.y)
    }

    function hn(n) {
        return n.x
    }

    function cn(n) {
        return n.y
    }

    function vp() {
        return {leaf: !0, nodes: [], point: null, x: null, y: null}
    }

    function hu(n, t, i, r, u, f) {
        if (!n(t, i, r, u, f)) {
            var o = (i + u) * .5, s = (r + f) * .5, e = t.nodes;
            e[0] && hu(n, e[0], i, r, o, s);
            e[1] && hu(n, e[1], o, r, u, s);
            e[2] && hu(n, e[2], i, s, o, f);
            e[3] && hu(n, e[3], o, s, u, f)
        }
    }

    function ic(t, i) {
        t = n.rgb(t);
        i = n.rgb(i);
        var r = t.r, u = t.g, f = t.b, e = i.r - r, o = i.g - u, s = i.b - f;
        return function (n) {
            return "#" + ir(Math.round(r + e * n)) + ir(Math.round(u + o * n)) + ir(Math.round(f + s * n))
        }
    }

    function yp(n, t) {
        var u = {}, r = {}, i;
        for (i in n) i in t ? u[i] = vi(n[i], t[i]) : r[i] = n[i];
        for (i in t) i in n || (r[i] = t[i]);
        return function (n) {
            for (i in u) r[i] = u[i](n);
            return r
        }
    }

    function at(n, t) {
        return t -= n = +n, function (i) {
            return n + t * i
        }
    }

    function pp(n, t) {
        var s, u, f, h = 0, c = 0, r = [], e = [], o, i;
        for (n = n + "", t = t + "", cu.lastIndex = 0, u = 0; s = cu.exec(t); ++u) s.index && r.push(t.substring(h, c = s.index)), e.push({
            i: r.length,
            x: s[0]
        }), r.push(null), h = cu.lastIndex;
        for (h < t.length && r.push(t.substring(h)), u = 0, o = e.length; (s = cu.exec(n)) && u < o; ++u) if (i = e[u], i.x == s[0]) {
            if (i.i) if (r[i.i + 1] == null) for (r[i.i - 1] += i.x, r.splice(i.i, 1), f = u + 1; f < o; ++f) e[f].i--; else for (r[i.i - 1] += i.x + r[i.i + 1], r.splice(i.i, 2), f = u + 1; f < o; ++f) e[f].i -= 2; else if (r[i.i + 1] == null) r[i.i] = i.x; else for (r[i.i] = i.x + r[i.i + 1], r.splice(i.i + 1, 1), f = u + 1; f < o; ++f) e[f].i--;
            e.splice(u, 1);
            o--;
            u--
        } else i.x = at(parseFloat(s[0]), parseFloat(i.x));
        while (u < o) i = e.pop(), r[i.i + 1] == null ? r[i.i] = i.x : (r[i.i] = i.x + r[i.i + 1], r.splice(i.i + 1, 1)), o--;
        return r.length === 1 ? r[0] == null ? (i = e[0].x, function (n) {
            return i(n) + ""
        }) : function () {
            return t
        } : function (n) {
            for (u = 0; u < o; ++u) r[(i = e[u]).i] = i.x(n);
            return r.join("")
        }
    }

    function vi(t, i) {
        for (var r = n.interpolators.length, u; --r >= 0 && !(u = n.interpolators[r](t, i));) ;
        return u
    }

    function ae(n, t) {
        for (var u = [], r = [], e = n.length, o = t.length, f = Math.min(n.length, t.length), i = 0; i < f; ++i) u.push(vi(n[i], t[i]));
        for (; i < e; ++i) r[i] = n[i];
        for (; i < o; ++i) r[i] = t[i];
        return function (n) {
            for (i = 0; i < f; ++i) r[i] = u[i](n);
            return r
        }
    }

    function vn(n) {
        return function (t) {
            return t <= 0 ? 0 : t >= 1 ? 1 : n(t)
        }
    }

    function bp(n) {
        return function (t) {
            return 1 - n(1 - t)
        }
    }

    function kp(n) {
        return function (t) {
            return .5 * (t < .5 ? n(2 * t) : 2 - n(2 - 2 * t))
        }
    }

    function yn(n) {
        return n * n
    }

    function pn(n) {
        return n * n * n
    }

    function wn(n) {
        if (n <= 0) return 0;
        if (n >= 1) return 1;
        var t = n * n, i = t * n;
        return 4 * (n < .5 ? i : 3 * (n - t) + i - .75)
    }

    function bn(n) {
        return function (t) {
            return Math.pow(t, n)
        }
    }

    function kn(n) {
        return 1 - Math.cos(n * v)
    }

    function dn(n) {
        return Math.pow(2, 10 * (n - 1))
    }

    function gn(n) {
        return 1 - Math.sqrt(1 - n * n)
    }

    function ntt(n, t) {
        var i;
        return arguments.length < 2 && (t = .45), arguments.length ? i = t / k * Math.asin(1 / n) : (n = 1, i = t / 4), function (r) {
            return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - i) * k / t)
        }
    }

    function ttt(n) {
        return n || (n = 1.70158), function (t) {
            return t * t * ((n + 1) * t - n)
        }
    }

    function itt(n) {
        return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
    }

    function rtt(t, i) {
        t = n.hcl(t);
        i = n.hcl(i);
        var u = t.h, f = t.c, o = t.l, r = i.h - u, e = i.c - f, s = i.l - o;
        return isNaN(e) && (e = 0, f = isNaN(f) ? i.c : f), isNaN(r) ? (r = 0, u = isNaN(u) ? i.h : u) : r > 180 ? r -= 360 : r < -180 && (r += 360), function (n) {
            return ts(u + r * n, f + e * n, o + s * n) + ""
        }
    }

    function utt(t, i) {
        t = n.hsl(t);
        i = n.hsl(i);
        var u = t.h, f = t.s, o = t.l, r = i.h - u, e = i.s - f, s = i.l - o;
        return isNaN(e) && (e = 0, f = isNaN(f) ? i.s : f), isNaN(r) ? (r = 0, u = isNaN(u) ? i.h : u) : r > 180 ? r -= 360 : r < -180 && (r += 360), function (n) {
            return ns(u + r * n, f + e * n, o + s * n) + ""
        }
    }

    function ftt(t, i) {
        t = n.lab(t);
        i = n.lab(i);
        var r = t.l, u = t.a, f = t.b, e = i.l - r, o = i.a - u, s = i.b - f;
        return function (n) {
            return iv(r + e * n, u + o * n, f + s * n) + ""
        }
    }

    function dp(n, t) {
        return t -= n, function (i) {
            return Math.round(n + t * i)
        }
    }

    function gp(n) {
        var t = [n.a, n.b], i = [n.c, n.d], r = tw(t), u = nw(t, i), f = tw(ett(i, t, -u)) || 0;
        t[0] * i[1] < i[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1);
        this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-i[0], i[1])) * s;
        this.translate = [n.e, n.f];
        this.scale = [r, f];
        this.skew = f ? Math.atan2(u, f) * s : 0
    }

    function nw(n, t) {
        return n[0] * t[0] + n[1] * t[1]
    }

    function tw(n) {
        var t = Math.sqrt(nw(n, n));
        return t && (n[0] /= t, n[1] /= t), t
    }

    function ett(n, t, i) {
        return n[0] += i * t[0], n[1] += i * t[1], n
    }

    function rw(t, i) {
        var r = [], o = [], s, c = n.transform(t), l = n.transform(i), a = c.translate, u = l.translate, h = c.rotate,
            f = l.rotate, p = c.skew, v = l.skew, y = c.scale, e = l.scale;
        return a[0] != u[0] || a[1] != u[1] ? (r.push("translate(", null, ",", null, ")"), o.push({
            i: 1,
            x: at(a[0], u[0])
        }, {
            i: 3,
            x: at(a[1], u[1])
        })) : u[0] || u[1] ? r.push("translate(" + u + ")") : r.push(""), h != f ? (h - f > 180 ? f += 360 : f - h > 180 && (h += 360), o.push({
            i: r.push(r.pop() + "rotate(", null, ")") - 2,
            x: at(h, f)
        })) : f && r.push(r.pop() + "rotate(" + f + ")"), p != v ? o.push({
            i: r.push(r.pop() + "skewX(", null, ")") - 2,
            x: at(p, v)
        }) : v && r.push(r.pop() + "skewX(" + v + ")"), y[0] != e[0] || y[1] != e[1] ? (s = r.push(r.pop() + "scale(", null, ",", null, ")"), o.push({
            i: s - 4,
            x: at(y[0], e[0])
        }, {
            i: s - 2,
            x: at(y[1], e[1])
        })) : (e[0] != 1 || e[1] != 1) && r.push(r.pop() + "scale(" + e + ")"), s = o.length, function (n) {
            for (var t = -1, i; ++t < s;) r[(i = o[t]).i] = i.x(n);
            return r.join("")
        }
    }

    function ott(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0, function (i) {
            return (i - n) * t
        }
    }

    function stt(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0, function (i) {
            return Math.max(0, Math.min(1, (i - n) * t))
        }
    }

    function htt(n) {
        for (var t = n.source, i = n.target, u = ctt(t, i), r = [t], f; t !== u;) t = t.parent, r.push(t);
        for (f = r.length; i !== u;) r.splice(f, 0, i), i = i.parent;
        return r
    }

    function uw(n) {
        for (var i = [], t = n.parent; t != null;) i.push(n), n = t, t = t.parent;
        return i.push(n), i
    }

    function ctt(n, t) {
        if (n === t) return n;
        for (var r = uw(n), u = uw(t), i = r.pop(), f = u.pop(), e = null; i === f;) e = i, i = r.pop(), f = u.pop();
        return e
    }

    function ltt(n) {
        n.fixed |= 2
    }

    function att(n) {
        n.fixed &= -7
    }

    function vtt(n) {
        n.fixed |= 4;
        n.px = n.x;
        n.py = n.y
    }

    function ytt(n) {
        n.fixed &= -5
    }

    function fw(n, t, i) {
        var f = 0, e = 0, u;
        if (n.charge = 0, !n.leaf) for (var o = n.nodes, h = o.length, s = -1, r; ++s < h;) (r = o[s], r != null) && (fw(r, t, i), n.charge += r.charge, f += r.charge * r.cx, e += r.charge * r.cy);
        n.point && (n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5), u = t * i[n.point.index], n.charge += n.pointCharge = u, f += u * n.point.x, e += u * n.point.y);
        n.cx = f / n.charge;
        n.cy = e / n.charge
    }

    function lu(t, i) {
        return n.rebind(t, i, "sort", "children", "value"), t.nodes = t, t.links = nit, t
    }

    function ktt(n) {
        return n.children
    }

    function dtt(n) {
        return n.value
    }

    function gtt(n, t) {
        return t.value - n.value
    }

    function nit(t) {
        return n.merge(t.map(function (n) {
            return (n.children || []).map(function (t) {
                return {source: n, target: t}
            })
        }))
    }

    function tit(n) {
        return n.x
    }

    function iit(n) {
        return n.y
    }

    function rit(n, t, i) {
        n.y0 = t;
        n.y = i
    }

    function uc(t) {
        return n.range(t.length)
    }

    function fc(n) {
        for (var t = -1, r = n[0].length, i = []; ++t < r;) i[t] = 0;
        return i
    }

    function uit(n) {
        for (var t = 1, i = 0, r = n[0][1], u, f = n.length; t < f; ++t) (u = n[t][1]) > r && (i = t, r = u);
        return i
    }

    function fit(n) {
        return n.reduce(eit, 0)
    }

    function eit(n, t) {
        return n + t[1]
    }

    function oit(n, t) {
        return sw(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }

    function sw(n, t) {
        for (var i = -1, r = +n[0], f = (n[1] - r) / t, u = []; ++i <= t;) u[i] = f * i + r;
        return u
    }

    function sit(t) {
        return [n.min(t), n.max(t)]
    }

    function hw(n, t) {
        return n.parent == t.parent ? 1 : 2
    }

    function ec(n) {
        var t = n.children;
        return t && t.length ? t[0] : n._tree.thread
    }

    function oc(n) {
        var t = n.children, i;
        return t && (i = t.length) ? t[i - 1] : n._tree.thread
    }

    function ve(n, t) {
        var i = n.children, u, f, r;
        if (i && (f = i.length)) for (r = -1; ++r < f;) t(u = ve(i[r], t), n) > 0 && (n = u);
        return n
    }

    function hit(n, t) {
        return n.x - t.x
    }

    function cit(n, t) {
        return t.x - n.x
    }

    function lit(n, t) {
        return n.depth - t.depth
    }

    function vt(n, t) {
        function i(n, r) {
            var u = n.children, f, e, o, s;
            if (u && (s = u.length)) for (e = null, o = -1; ++o < s;) f = u[o], i(f, e), e = f;
            t(n, r)
        }

        i(n, null)
    }

    function ait(n) {
        for (var i = 0, f = 0, r = n.children, u = r.length, t; --u >= 0;) t = r[u]._tree, t.prelim += i, t.mod += i, i += t.shift + (f += t.change)
    }

    function vit(n, t, i) {
        n = n._tree;
        t = t._tree;
        var r = i / (t.number - n.number);
        n.change += r;
        t.change -= r;
        t.shift += i;
        t.prelim += i;
        t.mod += i
    }

    function yit(n, t, i) {
        return n._tree.ancestor.parent == t.parent ? n._tree.ancestor : i
    }

    function pit(n, t) {
        return n.value - t.value
    }

    function sc(n, t) {
        var i = n._pack_next;
        n._pack_next = t;
        t._pack_prev = n;
        t._pack_next = i;
        i._pack_prev = t
    }

    function cw(n, t) {
        n._pack_next = t;
        t._pack_prev = n
    }

    function lw(n, t) {
        var i = t.x - n.x, r = t.y - n.y, u = n.r + t.r;
        return .999 * u * u > i * i + r * r
    }

    function aw(n) {
        function h(n) {
            c = Math.min(n.x - n.r, c);
            l = Math.max(n.x + n.r, l);
            a = Math.min(n.y - n.r, a);
            v = Math.max(n.y + n.r, v)
        }

        if ((u = n.children) && (s = u.length)) {
            var u, c = Infinity, l = -Infinity, a = Infinity, v = -Infinity, i, r, t, f, e, o, s;
            if (u.forEach(wit), i = u[0], i.x = -i.r, i.y = 0, h(i), s > 1 && (r = u[1], r.x = r.r, r.y = 0, h(r), s > 2)) for (t = u[2], yw(i, r, t), h(t), sc(i, t), i._pack_prev = t, sc(t, r), r = i._pack_next, f = 3; f < s; f++) {
                yw(i, r, t = u[f]);
                var y = 0, p = 1, w = 1;
                for (e = r._pack_next; e !== r; e = e._pack_next, p++) if (lw(e, t)) {
                    y = 1;
                    break
                }
                if (y == 1) for (o = i._pack_prev; o !== e._pack_prev; o = o._pack_prev, w++) if (lw(o, t)) break;
                y ? (p < w || p == w && r.r < i.r ? cw(i, r = e) : cw(i = o, r), f--) : (sc(i, t), r = t, h(t))
            }
            var k = (c + l) / 2, d = (a + v) / 2, b = 0;
            for (f = 0; f < s; f++) t = u[f], t.x -= k, t.y -= d, b = Math.max(b, t.r + Math.sqrt(t.x * t.x + t.y * t.y));
            n.r = b;
            u.forEach(bit)
        }
    }

    function wit(n) {
        n._pack_next = n._pack_prev = n
    }

    function bit(n) {
        delete n._pack_next;
        delete n._pack_prev
    }

    function vw(n, t, i, r) {
        var u = n.children, f, e;
        if (n.x = t += r * n.x, n.y = i += r * n.y, n.r *= r, u) for (f = -1, e = u.length; ++f < e;) vw(u[f], t, i, r)
    }

    function yw(n, t, i) {
        var r = n.r + i.r, f = t.x - n.x, e = t.y - n.y, u, o, s, h;
        r && (f || e) ? (u = t.r + i.r, o = f * f + e * e, u *= u, r *= r, s = .5 + (r - u) / (2 * o), h = Math.sqrt(Math.max(0, 2 * u * (r + o) - (r -= o) * r - u * u)) / (2 * o), i.x = n.x + s * f + h * e, i.y = n.y + s * e - h * f) : (i.x = n.x + r, i.y = n.y)
    }

    function kit(t) {
        return 1 + n.max(t, function (n) {
            return n.y
        })
    }

    function dit(n) {
        return n.reduce(function (n, t) {
            return n + t.x
        }, 0) / n.length
    }

    function pw(n) {
        var t = n.children;
        return t && t.length ? pw(t[0]) : n
    }

    function ww(n) {
        var t = n.children, i;
        return t && (i = t.length) ? ww(t[i - 1]) : n
    }

    function hc(n) {
        return {x: n.x, y: n.y, dx: n.dx, dy: n.dy}
    }

    function bw(n, t) {
        var u = n.x + t[3], f = n.y + t[0], i = n.dx - t[1] - t[3], r = n.dy - t[0] - t[2];
        return i < 0 && (u += i / 2, i = 0), r < 0 && (f += r / 2, r = 0), {x: u, y: f, dx: i, dy: r}
    }

    function ar(n) {
        var t = n[0], i = n[n.length - 1];
        return t < i ? [t, i] : [i, t]
    }

    function ye(n) {
        return n.rangeExtent ? n.rangeExtent() : ar(n.range())
    }

    function git(n, t, i, r) {
        var u = i(n[0], n[1]), f = r(t[0], t[1]);
        return function (n) {
            return f(u(n))
        }
    }

    function cc(n, t) {
        var i = 0, r = n.length - 1, u = n[i], f = n[r], e;
        return f < u && (e = i, i = r, r = e, e = u, u = f, f = e), n[i] = t.floor(u), n[r] = t.ceil(f), n
    }

    function nrt(n) {
        return n ? {
            floor: function (t) {
                return Math.floor(t / n) * n
            }, ceil: function (t) {
                return Math.ceil(t / n) * n
            }
        } : kw
    }

    function trt(t, i, r, u) {
        var o = [], s = [], f = 0, e = Math.min(t.length, i.length) - 1;
        for (t[e] < t[0] && (t = t.slice().reverse(), i = i.slice().reverse()); ++f <= e;) o.push(r(t[f - 1], t[f])), s.push(u(i[f - 1], i[f]));
        return function (i) {
            var r = n.bisect(t, i, 1, e) - 1;
            return s[r](o[r](i))
        }
    }

    function dw(n, t, i, r) {
        function f() {
            var f = Math.min(n.length, t.length) > 2 ? trt : git, s = r ? stt : ott;
            return e = f(n, t, s, i), o = f(t, n, s, vi), u
        }

        function u(n) {
            return e(n)
        }

        var e, o;
        return u.invert = function (n) {
            return o(n)
        }, u.domain = function (t) {
            return arguments.length ? (n = t.map(Number), f()) : n
        }, u.range = function (n) {
            return arguments.length ? (t = n, f()) : t
        }, u.rangeRound = function (n) {
            return u.range(n).interpolate(dp)
        }, u.clamp = function (n) {
            return arguments.length ? (r = n, f()) : r
        }, u.interpolate = function (n) {
            return arguments.length ? (i = n, f()) : i
        }, u.ticks = function (t) {
            return ac(n, t)
        }, u.tickFormat = function (t, i) {
            return vc(n, t, i)
        }, u.nice = function (t) {
            return gw(n, t), f()
        }, u.copy = function () {
            return dw(n, t, i, r)
        }, f()
    }

    function lc(t, i) {
        return n.rebind(t, i, "range", "rangeRound", "interpolate", "clamp")
    }

    function gw(n, t) {
        return cc(n, nrt(au(n, t)[2]))
    }

    function au(n, t) {
        t == null && (t = 10);
        var r = ar(n), f = r[1] - r[0], i = Math.pow(10, Math.floor(Math.log(f / t) / Math.LN10)), u = t / f * i;
        return u <= .15 ? i *= 10 : u <= .35 ? i *= 5 : u <= .75 && (i *= 2), r[0] = Math.ceil(r[0] / i) * i, r[1] = Math.floor(r[1] / i) * i + i * .5, r[2] = i, r
    }

    function ac(t, i) {
        return n.range.apply(n, au(t, i))
    }

    function vc(t, i, u) {
        var e = au(t, i), f, o;
        if (u) {
            if (f = vs.exec(u), f.shift(), f[8] === "s") return o = n.formatPrefix(Math.max(r(e[0]), r(e[1]))), f[7] || (f[7] = "." + pe(o.scale(e[2]))), f[8] = "f", u = n.format(f.join("")), function (n) {
                return u(o.scale(n)) + o.symbol
            };
            f[7] || (f[7] = "." + irt(f[8], e));
            u = f.join("")
        } else u = ",." + pe(e[2]) + "f";
        return n.format(u)
    }

    function pe(n) {
        return -Math.floor(Math.log(n) / Math.LN10 + .01)
    }

    function irt(n, t) {
        var i = pe(t[2]);
        return n in nb ? Math.abs(i - pe(Math.max(r(t[0]), r(t[1])))) + +(n !== "e") : i - (n === "%") * 2
    }

    function tb(t, i, r, u) {
        function e(n) {
            return (r ? Math.log(n < 0 ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(i)
        }

        function o(n) {
            return r ? Math.pow(i, n) : -Math.pow(i, -n)
        }

        function f(n) {
            return t(e(n))
        }

        return f.invert = function (n) {
            return o(t.invert(n))
        }, f.domain = function (n) {
            return arguments.length ? (r = n[0] >= 0, t.domain((u = n.map(Number)).map(e)), f) : u
        }, f.base = function (n) {
            return arguments.length ? (i = +n, t.domain(u.map(e)), f) : i
        }, f.nice = function () {
            var n = cc(u.map(e), r ? Math : ib);
            return t.domain(n), u = n.map(o), f
        }, f.ticks = function () {
            var h = ar(u), t = [], c = h[0], l = h[1], n = Math.floor(e(c)), s = Math.ceil(e(l)), a = i % 1 ? 2 : i, f;
            if (isFinite(s - n)) {
                if (r) {
                    for (; n < s; n++) for (f = 1; f < a; f++) t.push(o(n) * f);
                    t.push(o(n))
                } else for (t.push(o(n)); n++ < s;) for (f = a - 1; f > 0; f--) t.push(o(n) * f);
                for (n = 0; t[n] < c; n++) ;
                for (s = t.length; t[s - 1] > l; s--) ;
                t = t.slice(n, s)
            }
            return t
        }, f.tickFormat = function (t, i) {
            if (!arguments.length) return yc;
            arguments.length < 2 ? i = yc : typeof i != "function" && (i = n.format(i));
            var s = Math.max(.1, t / f.ticks().length), h = r ? (u = 1e-12, Math.ceil) : (u = -1e-12, Math.floor), u;
            return function (n) {
                return n / o(h(e(n) + u)) <= s ? i(n) : ""
            }
        }, f.copy = function () {
            return tb(t.copy(), i, r, u)
        }, lc(f, t)
    }

    function rb(n, t, i) {
        function r(t) {
            return n(u(t))
        }

        var u = we(t), f = we(1 / t);
        return r.invert = function (t) {
            return f(n.invert(t))
        }, r.domain = function (t) {
            return arguments.length ? (n.domain((i = t.map(Number)).map(u)), r) : i
        }, r.ticks = function (n) {
            return ac(i, n)
        }, r.tickFormat = function (n, t) {
            return vc(i, n, t)
        }, r.nice = function (n) {
            return r.domain(gw(i, n))
        }, r.exponent = function (e) {
            return arguments.length ? (u = we(t = e), f = we(1 / t), n.domain(i.map(u)), r) : t
        }, r.copy = function () {
            return rb(n.copy(), t, i)
        }, lc(r, n)
    }

    function we(n) {
        return function (t) {
            return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
        }
    }

    function ub(t, i) {
        function r(n) {
            return u[((f.get(n) || (i.t === "range" ? f.set(n, t.push(n)) : NaN)) - 1) % u.length]
        }

        function o(i, r) {
            return n.range(t.length).map(function (n) {
                return i + r * n
            })
        }

        var f, u, e;
        return r.domain = function (n) {
            if (!arguments.length) return t;
            t = [];
            f = new rt;
            for (var e = -1, o = n.length, u; ++e < o;) f.has(u = n[e]) || f.set(u, t.push(u));
            return r[i.t].apply(r, i.a)
        }, r.range = function (n) {
            return arguments.length ? (u = n, e = 0, i = {t: "range", a: arguments}, r) : u
        }, r.rangePoints = function (n, f) {
            arguments.length < 2 && (f = 0);
            var s = n[0], h = n[1], c = (h - s) / (Math.max(1, t.length - 1) + f);
            return u = o(t.length < 2 ? (s + h) / 2 : s + c * f / 2, c), e = 0, i = {t: "rangePoints", a: arguments}, r
        }, r.rangeBands = function (n, f, s) {
            arguments.length < 2 && (f = 0);
            arguments.length < 3 && (s = f);
            var h = n[1] < n[0], l = n[+h], a = n[1 - h], c = (a - l) / (t.length - f + 2 * s);
            return u = o(l + c * s, c), h && u.reverse(), e = c * (1 - f), i = {t: "rangeBands", a: arguments}, r
        }, r.rangeRoundBands = function (n, f, s) {
            arguments.length < 2 && (f = 0);
            arguments.length < 3 && (s = f);
            var h = n[1] < n[0], c = n[+h], a = n[1 - h], l = Math.floor((a - c) / (t.length - f + 2 * s)),
                v = a - c - (t.length - f) * l;
            return u = o(c + Math.round(v / 2), l), h && u.reverse(), e = Math.round(l * (1 - f)), i = {
                t: "rangeRoundBands",
                a: arguments
            }, r
        }, r.rangeBand = function () {
            return e
        }, r.rangeExtent = function () {
            return ar(i.a[0])
        }, r.copy = function () {
            return ub(t, i)
        }, r.domain(t)
    }

    function fb(t, i) {
        function f() {
            var f = 0, e = i.length;
            for (r = []; ++f < e;) r[f - 1] = n.quantile(t, f / e);
            return u
        }

        function u(t) {
            if (!isNaN(t = +t)) return i[n.bisect(r, t)]
        }

        var r;
        return u.domain = function (n) {
            return arguments.length ? (t = n.filter(function (n) {
                return !isNaN(n)
            }).sort(wi), f()) : t
        }, u.range = function (n) {
            return arguments.length ? (i = n, f()) : i
        }, u.quantiles = function () {
            return r
        }, u.invertExtent = function (n) {
            return n = i.indexOf(n), n < 0 ? [NaN, NaN] : [n > 0 ? r[n - 1] : t[0], n < r.length ? r[n] : t[t.length - 1]]
        }, u.copy = function () {
            return fb(t, i)
        }, f()
    }

    function eb(n, t, i) {
        function r(t) {
            return i[Math.max(0, Math.min(e, Math.floor(u * (t - n))))]
        }

        function f() {
            return u = i.length / (t - n), e = i.length - 1, r
        }

        var u, e;
        return r.domain = function (i) {
            return arguments.length ? (n = +i[0], t = +i[i.length - 1], f()) : [n, t]
        }, r.range = function (n) {
            return arguments.length ? (i = n, f()) : i
        }, r.invertExtent = function (t) {
            return t = i.indexOf(t), t = t < 0 ? NaN : t / u + n, [t, t + 1 / u]
        }, r.copy = function () {
            return eb(n, t, i)
        }, f()
    }

    function ob(t, i) {
        function r(r) {
            if (r <= r) return i[n.bisect(t, r)]
        }

        return r.domain = function (n) {
            return arguments.length ? (t = n, r) : t
        }, r.range = function (n) {
            return arguments.length ? (i = n, r) : i
        }, r.invertExtent = function (n) {
            return n = i.indexOf(n), [t[n - 1], t[n]]
        }, r.copy = function () {
            return ob(t, i)
        }, r
    }

    function sb(n) {
        function t(n) {
            return +n
        }

        return t.invert = t, t.domain = t.range = function (i) {
            return arguments.length ? (n = i.map(t), t) : n
        }, t.ticks = function (t) {
            return ac(n, t)
        }, t.tickFormat = function (t, i) {
            return vc(n, t, i)
        }, t.copy = function () {
            return sb(n)
        }, t
    }

    function ort(n) {
        return n.innerRadius
    }

    function srt(n) {
        return n.outerRadius
    }

    function cb(n) {
        return n.startAngle
    }

    function lb(n) {
        return n.endAngle
    }

    function ab(n) {
        function t(t) {
            function a() {
                c.push("M", i(n(e), s))
            }

            for (var c = [], e = [], h = -1, v = t.length, l, y = o(r), p = o(u); ++h < v;) f.call(this, l = t[h], h) ? e.push([+y.call(this, l, h), +p.call(this, l, h)]) : e.length && (a(), e = []);
            return e.length && a(), c.length ? c.join("") : null
        }

        var r = or, u = iu, f = er, i = d, e = i.key, s = .7;
        return t.x = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.y = function (n) {
            return arguments.length ? (u = n, t) : u
        }, t.defined = function (n) {
            return arguments.length ? (f = n, t) : f
        }, t.interpolate = function (n) {
            return arguments.length ? (e = typeof n == "function" ? i = n : (i = be.get(n) || d).key, t) : e
        }, t.tension = function (n) {
            return arguments.length ? (s = n, t) : s
        }, t
    }

    function d(n) {
        return n.join("L")
    }

    function hrt(n) {
        return d(n) + "Z"
    }

    function crt(n) {
        for (var r = 0, u = n.length, t = n[0], i = [t[0], ",", t[1]]; ++r < u;) i.push("H", (t[0] + (t = n[r])[0]) / 2, "V", t[1]);
        return u > 1 && i.push("H", t[0]), i.join("")
    }

    function pc(n) {
        for (var i = 0, u = n.length, t = n[0], r = [t[0], ",", t[1]]; ++i < u;) r.push("V", (t = n[i])[1], "H", t[0]);
        return r.join("")
    }

    function wc(n) {
        for (var i = 0, u = n.length, t = n[0], r = [t[0], ",", t[1]]; ++i < u;) r.push("H", (t = n[i])[0], "V", t[1]);
        return r.join("")
    }

    function lrt(n, t) {
        return n.length < 4 ? d(n) : n[1] + ke(n.slice(1, n.length - 1), bc(n, t))
    }

    function art(n, t) {
        return n.length < 3 ? d(n) : n[0] + ke((n.push(n[0]), n), bc([n[n.length - 2]].concat(n, [n[1]]), t))
    }

    function vrt(n, t) {
        return n.length < 3 ? d(n) : n[0] + ke(n, bc(n, t))
    }

    function ke(n, t) {
        var o, h;
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return d(n);
        var c = n.length != t.length, f = "", s = n[0], i = n[1], e = t[0], r = e, u = 1;
        if (c && (f += "Q" + (i[0] - e[0] * 2 / 3) + "," + (i[1] - e[1] * 2 / 3) + "," + i[0] + "," + i[1], s = n[1], u = 2), t.length > 1) for (r = t[1], i = n[u], u++, f += "C" + (s[0] + e[0]) + "," + (s[1] + e[1]) + "," + (i[0] - r[0]) + "," + (i[1] - r[1]) + "," + i[0] + "," + i[1], o = 2; o < t.length; o++, u++) i = n[u], r = t[o], f += "S" + (i[0] - r[0]) + "," + (i[1] - r[1]) + "," + i[0] + "," + i[1];
        return c && (h = n[u], f += "Q" + (i[0] + r[0] * 2 / 3) + "," + (i[1] + r[1] * 2 / 3) + "," + h[0] + "," + h[1]), f
    }

    function bc(n, t) {
        for (var u = [], f = (1 - t) / 2, r, e = n[0], i = n[1], o = 1, s = n.length; ++o < s;) r = e, e = i, i = n[o], u.push([f * (i[0] - r[0]), f * (i[1] - r[1])]);
        return u
    }

    function vb(n) {
        if (n.length < 3) return d(n);
        var o = 1, s = n.length, t = n[0], i = t[0], r = t[1], u = [i, i, i, (t = n[1])[0]], f = [r, r, r, t[1]],
            e = [i, ",", r, "L", tt(fi, u), ",", tt(fi, f)];
        for (n.push(n[s - 1]); ++o <= s;) t = n[o], u.shift(), u.push(t[0]), f.shift(), f.push(t[1]), kc(e, u, f);
        return n.pop(), e.push("L", t), e.join("")
    }

    function yrt(n) {
        if (n.length < 4) return d(n);
        for (var f = [], i = -1, e = n.length, t, r = [0], u = [0]; ++i < 3;) t = n[i], r.push(t[0]), u.push(t[1]);
        for (f.push(tt(fi, r) + "," + tt(fi, u)), --i; ++i < e;) t = n[i], r.shift(), r.push(t[0]), u.shift(), u.push(t[1]), kc(f, r, u);
        return f.join("")
    }

    function prt(n) {
        for (var f, i = -1, e = n.length, o = e + 4, t, r = [], u = []; ++i < 4;) t = n[i % e], r.push(t[0]), u.push(t[1]);
        for (f = [tt(fi, r), ",", tt(fi, u)], --i; ++i < o;) t = n[i % e], r.shift(), r.push(t[0]), u.shift(), u.push(t[1]), kc(f, r, u);
        return f.join("")
    }

    function wrt(n, t) {
        var i = n.length - 1;
        if (i) for (var e = n[0][0], o = n[0][1], s = n[i][0] - e, h = n[i][1] - o, u = -1, r, f; ++u <= i;) r = n[u], f = u / i, r[0] = t * r[0] + (1 - t) * (e + f * s), r[1] = t * r[1] + (1 - t) * (o + f * h);
        return vb(n)
    }

    function tt(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
    }

    function kc(n, t, i) {
        n.push("C", tt(yb, t), ",", tt(yb, i), ",", tt(pb, t), ",", tt(pb, i), ",", tt(fi, t), ",", tt(fi, i))
    }

    function dc(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0])
    }

    function brt(n) {
        for (var t = 0, e = n.length - 1, i = [], f = n[0], r = n[1], u = i[0] = dc(f, r); ++t < e;) i[t] = (u + (u = dc(f = r, r = n[t + 1]))) / 2;
        return i[t] = u, i
    }

    function krt(n) {
        for (var c = [], e, o, s, u, f = brt(n), i = -1, h = n.length - 1; ++i < h;) e = dc(n[i], n[i + 1]), r(e) < t ? f[i] = f[i + 1] = 0 : (o = f[i] / e, s = f[i + 1] / e, u = o * o + s * s, u > 9 && (u = e * 3 / Math.sqrt(u), f[i] = u * o, f[i + 1] = u * s));
        for (i = -1; ++i <= h;) u = (n[Math.min(h, i + 1)][0] - n[Math.max(0, i - 1)][0]) / (6 * (1 + f[i] * f[i])), c.push([u || 0, f[i] * u || 0]);
        return c
    }

    function drt(n) {
        return n.length < 3 ? d(n) : n[0] + ke(n, krt(n))
    }

    function wb(n) {
        for (var t, u = -1, f = n.length, i, r; ++u < f;) t = n[u], i = t[0], r = t[1] + ui, t[0] = i * Math.cos(r), t[1] = i * Math.sin(r);
        return n
    }

    function bb(n) {
        function t(t) {
            function d() {
                p.push("M", i(n(w), s), a, l(n(v.reverse()), s), "Z")
            }

            for (var p = [], v = [], w = [], c = -1, g = t.length, y, nt = o(f), tt = o(e), it = f === r ? function () {
                return b
            } : o(r), rt = e === u ? function () {
                return k
            } : o(u), b, k; ++c < g;) h.call(this, y = t[c], c) ? (v.push([b = +nt.call(this, y, c), k = +tt.call(this, y, c)]), w.push([+it.call(this, y, c), +rt.call(this, y, c)])) : v.length && (d(), v = [], w = []);
            return v.length && d(), p.length ? p.join("") : null
        }

        var f = or, r = or, e = 0, u = iu, h = er, i = d, c = i.key, l = i, a = "L", s = .7;
        return t.x = function (n) {
            return arguments.length ? (f = r = n, t) : r
        }, t.x0 = function (n) {
            return arguments.length ? (f = n, t) : f
        }, t.x1 = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.y = function (n) {
            return arguments.length ? (e = u = n, t) : u
        }, t.y0 = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.y1 = function (n) {
            return arguments.length ? (u = n, t) : u
        }, t.defined = function (n) {
            return arguments.length ? (h = n, t) : h
        }, t.interpolate = function (n) {
            return arguments.length ? (c = typeof n == "function" ? i = n : (i = be.get(n) || d).key, l = i.reverse || i, a = i.closed ? "M" : "L", t) : c
        }, t.tension = function (n) {
            return arguments.length ? (s = n, t) : s
        }, t
    }

    function grt(n) {
        return n.radius
    }

    function kb(n) {
        return [n.x, n.y]
    }

    function nut(n) {
        return function () {
            var t = n.apply(this, arguments), i = t[0], r = t[1] + ui;
            return [i * Math.cos(r), i * Math.sin(r)]
        }
    }

    function tut() {
        return 64
    }

    function iut() {
        return "circle"
    }

    function db(n) {
        var t = Math.sqrt(n / f);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }

    function yu(n, t) {
        return yr(n, l), n.id = t, n
    }

    function il(n, t, i, r) {
        var u = n.id;
        return dt(n, typeof i == "function" ? function (n, f, e) {
            n.__transition__[u].tween.set(t, r(i.call(n, n.__data__, f, e)))
        } : (i = r(i), function (n) {
            n.__transition__[u].tween.set(t, i)
        }))
    }

    function rut(n) {
        return n == null && (n = ""), function () {
            this.textContent = n
        }
    }

    function ge(t, i, r, u) {
        var e = t.__transition__ || (t.__transition__ = {active: 0, count: 0}), f = e[r], o;
        f || (o = u.time, f = e[r] = {
            tween: new rt,
            time: o,
            ease: u.ease,
            delay: u.delay,
            duration: u.duration
        }, ++e.count, n.timer(function (u) {
            function v(u) {
                if (e.active > r) return a();
                e.active = r;
                f.event && f.event.start.call(t, s, i);
                f.tween.forEach(function (n, r) {
                    (r = r.call(t, s, i)) && l.push(r)
                });
                n.timer(function () {
                    return c.c = y(u || 1) ? er : y, 1
                }, 0, o)
            }

            function y(n) {
                if (e.active !== r) return a();
                for (var u = n / w, h = p(u), o = l.length; o > 0;) l[--o].call(t, h);
                if (u >= 1) return f.event && f.event.end.call(t, s, i), a()
            }

            function a() {
                return --e.count ? delete e[r] : delete t.__transition__, 1
            }

            var s = t.__data__, p = f.ease, h = f.delay, w = f.duration, c = st, l = [];
            if (c.t = h + o, h <= u) return v(u - h);
            c.c = v
        }, 0, o))
    }

    function nk(n, t) {
        n.attr("transform", function (n) {
            return "translate(" + t(n) + ",0)"
        })
    }

    function tk(n, t) {
        n.attr("transform", function (n) {
            return "translate(0," + t(n) + ")"
        })
    }

    function el(n) {
        return n.toISOString()
    }

    function ol(t, i, r) {
        function u(n) {
            return t(n)
        }

        function f(t, r) {
            var e = t[1] - t[0], f = e / r, u = n.bisect(no, f);
            return u == no.length ? [i.year, au(t.map(function (n) {
                return n / 31536e6
            }), r)[2]] : u ? i[f / no[u - 1] < no[u] / f ? u - 1 : u] : [eut, au(t, r)[2]]
        }

        return u.invert = function (n) {
            return pi(t.invert(n))
        }, u.domain = function (n) {
            return arguments.length ? (t.domain(n), u) : t.domain().map(pi)
        }, u.nice = function (n, t) {
            function o(i) {
                return !isNaN(i) && !n.range(i, pi(+i + 1), t).length
            }

            var r = u.domain(), e = ar(r), i = n == null ? f(e, 10) : typeof n == "number" && f(e, n);
            return i && (n = i[0], t = i[1]), u.domain(cc(r, t > 1 ? {
                floor: function (t) {
                    while (o(t = n.floor(t))) t = pi(t - 1);
                    return t
                }, ceil: function (t) {
                    while (o(t = n.ceil(t))) t = pi(+t + 1);
                    return t
                }
            } : n))
        }, u.ticks = function (n, t) {
            var i = ar(u.domain()),
                r = n == null ? f(i, 10) : typeof n == "number" ? f(i, n) : !n.range && [{range: n}, t];
            return r && (n = r[0], t = r[1]), n.range(i[0], pi(+i[1] + 1), t < 1 ? 1 : t)
        }, u.tickFormat = function () {
            return r
        }, u.copy = function () {
            return ol(t.copy(), i, r)
        }, lc(u, t)
    }

    function pi(n) {
        return new Date(n)
    }

    function out(n) {
        return JSON.parse(n.responseText)
    }

    function sut(n) {
        var t = it.createRange();
        return t.selectNode(it.body), t.createContextualFragment(n.responseText)
    }

    var n = {version: "3.4.4"}, io, r, wt, vr, fo, dl, yr, e, wu, ut, vo, ku, bi, va, ko, nf, da, tf, uf, pr, wr, hf,
        cf, lf, af, st, cs, cv, vs, lv, i, y, ft, ys, br, ws, bs, bf, gt, w, kr, ie, si, hi, ct, ni, ti, et, ur, fr, ii,
        g, nh, gr, ih, rh, lt, ue, fe, ee, oe, oy, nt, hh, li, ch, lh, ah, vh, yh, ru, sr, ai, hr, bh, kh, uu, dh, su,
        cu, iw, rc, ew, ow, kw, nb, yc, ib, ui, hb, be, gc, vu, nl, l, tl, yi, de, rl, gb, hl, uk;
    Date.now || (Date.now = function () {
        return +new Date
    });
    var cl = [].slice, yt = function (n) {
        return cl.call(n)
    }, it = document, pt = it.documentElement, b = window;
    try {
        yt(pt.childNodes)[0].nodeType
    } catch (hut) {
        yt = function (n) {
            for (var t = n.length, i = new Array(t); t--;) i[t] = n[t];
            return i
        }
    }
    try {
        it.createElement("div").style.setProperty("opacity", 0, "")
    } catch (cut) {
        var pu = b.Element.prototype, fk = pu.setAttribute, ek = pu.setAttributeNS,
            ll = b.CSSStyleDeclaration.prototype, ok = ll.setProperty;
        pu.setAttribute = function (n, t) {
            fk.call(this, n, t + "")
        };
        pu.setAttributeNS = function (n, t, i) {
            ek.call(this, n, t, i + "")
        };
        ll.setProperty = function (n, t, i) {
            ok.call(this, n, t + "", i)
        }
    }
    n.ascending = wi;
    n.descending = function (n, t) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    };
    n.min = function (n, t) {
        var r = -1, f = n.length, i, u;
        if (arguments.length === 1) {
            while (++r < f && !((i = n[r]) != null && i <= i)) i = undefined;
            while (++r < f) (u = n[r]) != null && i > u && (i = u)
        } else {
            while (++r < f && !((i = t.call(n, n[r], r)) != null && i <= i)) i = undefined;
            while (++r < f) (u = t.call(n, n[r], r)) != null && i > u && (i = u)
        }
        return i
    };
    n.max = function (n, t) {
        var r = -1, f = n.length, i, u;
        if (arguments.length === 1) {
            while (++r < f && !((i = n[r]) != null && i <= i)) i = undefined;
            while (++r < f) (u = n[r]) != null && u > i && (i = u)
        } else {
            while (++r < f && !((i = t.call(n, n[r], r)) != null && i <= i)) i = undefined;
            while (++r < f) (u = t.call(n, n[r], r)) != null && u > i && (i = u)
        }
        return i
    };
    n.extent = function (n, t) {
        var r = -1, e = n.length, i, u, f;
        if (arguments.length === 1) {
            while (++r < e && !((i = f = n[r]) != null && i <= i)) i = f = undefined;
            while (++r < e) (u = n[r]) != null && (i > u && (i = u), f < u && (f = u))
        } else {
            while (++r < e && !((i = f = t.call(n, n[r], r)) != null && i <= i)) i = undefined;
            while (++r < e) (u = t.call(n, n[r], r)) != null && (i > u && (i = u), f < u && (f = u))
        }
        return [i, f]
    };
    n.sum = function (n, t) {
        var u = 0, f = n.length, r, i = -1;
        if (arguments.length === 1) while (++i < f) isNaN(r = +n[i]) || (u += r); else while (++i < f) isNaN(r = +t.call(n, n[i], i)) || (u += r);
        return u
    };
    n.mean = function (n, t) {
        var e = n.length, u, i = 0, r = -1, f = 0;
        if (arguments.length === 1) while (++r < e) to(u = n[r]) && (i += (u - i) / ++f); else while (++r < e) to(u = t.call(n, n[r], r)) && (i += (u - i) / ++f);
        return f ? i : undefined
    };
    n.quantile = function (n, t) {
        var u = (n.length - 1) * t + 1, i = Math.floor(u), r = +n[i - 1], f = u - i;
        return f ? r + f * (n[i] - r) : r
    };
    n.median = function (t, i) {
        return arguments.length > 1 && (t = t.map(i)), t = t.filter(to), t.length ? n.quantile(t.sort(wi), .5) : undefined
    };
    io = al(wi);
    n.bisectLeft = io.left;
    n.bisect = n.bisectRight = io.right;
    n.bisector = function (n) {
        return al(n.length === 1 ? function (t, i) {
            return wi(n(t), i)
        } : n)
    };
    n.shuffle = function (n) {
        for (var t = n.length, r, i; t;) i = Math.random() * t-- | 0, r = n[t], n[t] = n[i], n[i] = r;
        return n
    };
    n.permute = function (n, t) {
        for (var i = t.length, r = new Array(i); i--;) r[i] = n[t[i]];
        return r
    };
    n.pairs = function (n) {
        for (var t = 0, i = n.length - 1, f, r = n[0], u = new Array(i < 0 ? 0 : i); t < i;) u[t] = [f = r, r = n[++t]];
        return u
    };
    n.zip = function () {
        var t, r, e;
        if (!(r = arguments.length)) return [];
        for (var i = -1, u = n.min(arguments, sk), f = new Array(u); ++i < u;) for (t = -1, e = f[i] = new Array(r); ++t < r;) e[t] = arguments[t][i];
        return f
    };
    n.transpose = function (t) {
        return n.zip.apply(n, t)
    };
    n.keys = function (n) {
        var t = [], i;
        for (i in n) t.push(i);
        return t
    };
    n.values = function (n) {
        var t = [], i;
        for (i in n) t.push(n[i]);
        return t
    };
    n.entries = function (n) {
        var i = [], t;
        for (t in n) i.push({key: t, value: n[t]});
        return i
    };
    n.merge = function (n) {
        for (var t = n.length, i, e = -1, r = 0, u, f; ++e < t;) r += n[e].length;
        for (u = new Array(r); --t >= 0;) for (f = n[t], i = f.length; --i >= 0;) u[--r] = f[i];
        return u
    };
    r = Math.abs;
    n.range = function (n, t, i) {
        if (arguments.length < 3 && (i = 1, arguments.length < 2 && (t = n, n = 0)), (t - n) / i == Infinity) throw new Error("infinite range");
        var e = [], u = hk(r(i)), o = -1, f;
        if (n *= u, t *= u, i *= u, i < 0) while ((f = n + i * ++o) > t) e.push(f / u); else while ((f = n + i * ++o) < t) e.push(f / u);
        return e
    };
    n.map = function (n) {
        var t = new rt, i;
        if (n instanceof rt) n.forEach(function (n, i) {
            t.set(n, i)
        }); else for (i in n) t.set(i, n[i]);
        return t
    };
    vl(rt, {
        has: yl, get: function (n) {
            return this[wt + n]
        }, set: function (n, t) {
            return this[wt + n] = t
        }, remove: ck, keys: pl, values: function () {
            var n = [];
            return this.forEach(function (t, i) {
                n.push(i)
            }), n
        }, entries: function () {
            var n = [];
            return this.forEach(function (t, i) {
                n.push({key: t, value: i})
            }), n
        }, size: wl, empty: bl, forEach: function (n) {
            for (var t in this) t.charCodeAt(0) === vr && n.call(this, t.substring(1), this[t])
        }
    });
    wt = "\x00";
    vr = wt.charCodeAt(0);
    n.nest = function () {
        function r(n, e, o) {
            if (o >= i.length) return f ? f.call(t, e) : u ? e.sort(u) : e;
            for (var l = -1, y = e.length, p = i[o++], a, s, h, c = new rt, v; ++l < y;) (v = c.get(a = p(s = e[l]))) ? v.push(s) : c.set(a, [s]);
            return n ? (s = n(), h = function (t, i) {
                s.set(t, r(n, i, o))
            }) : (s = {}, h = function (t, i) {
                s[t] = r(n, i, o)
            }), c.forEach(h), s
        }

        function o(n, t) {
            if (t >= i.length) return n;
            var r = [], u = e[t++];
            return n.forEach(function (n, i) {
                r.push({key: n, values: o(i, t)})
            }), u ? r.sort(function (n, t) {
                return u(n.key, t.key)
            }) : r
        }

        var t = {}, i = [], e = [], u, f;
        return t.map = function (n, t) {
            return r(t, n, 0)
        }, t.entries = function (t) {
            return o(r(n.map, t, 0), 0)
        }, t.key = function (n) {
            return i.push(n), t
        }, t.sortKeys = function (n) {
            return e[i.length - 1] = n, t
        }, t.sortValues = function (n) {
            return u = n, t
        }, t.rollup = function (n) {
            return f = n, t
        }, t
    };
    n.set = function (n) {
        var i = new ro, t, r;
        if (n) for (t = 0, r = n.length; t < r; ++t) i.add(n[t]);
        return i
    };
    vl(ro, {
        has: yl, add: function (n) {
            return this[wt + n] = !0, n
        }, remove: function (n) {
            return n = wt + n, n in this && delete this[n]
        }, values: pl, size: wl, empty: bl, forEach: function (n) {
            for (var t in this) t.charCodeAt(0) === vr && n.call(this, t.substring(1))
        }
    });
    n.behavior = {};
    n.rebind = function (n, t) {
        for (var i = 1, u = arguments.length, r; ++i < u;) n[r = arguments[i]] = lk(n, t, t[r]);
        return n
    };
    fo = ["webkit", "ms", "moz", "Moz", "o", "O"];
    n.dispatch = function () {
        for (var n = new eo, t = -1, i = arguments.length; ++t < i;) n[arguments[t]] = kl(n);
        return n
    };
    eo.prototype.on = function (n, t) {
        var r = n.indexOf("."), i = "";
        if (r >= 0 && (i = n.substring(r + 1), n = n.substring(0, r)), n) return arguments.length < 2 ? this[n].on(i) : this[n].on(i, t);
        if (arguments.length === 2) {
            if (t == null) for (n in this) if (this.hasOwnProperty(n)) this[n].on(i, null);
            return this
        }
    };
    n.event = null;
    n.requote = function (n) {
        return n.replace(dl, "\\$&")
    };
    dl = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    yr = {}.__proto__ ? function (n, t) {
        n.__proto__ = t
    } : function (n, t) {
        for (var i in t) n[i] = t[i]
    };
    var ho = function (n, t) {
        return t.querySelector(n)
    }, co = function (n, t) {
        return t.querySelectorAll(n)
    }, ak = pt[uo(pt, "matchesSelector")], gl = function (n, t) {
        return ak.call(n, t)
    };
    typeof Sizzle == "function" && (ho = function (n, t) {
        return Sizzle(n, t)[0] || null
    }, co = Sizzle, gl = Sizzle.matchesSelector);
    n.selection = function () {
        return vo
    };
    e = n.selection.prototype = [];
    e.select = function (n) {
        var o = [], i, f, e, t, r, s, u, h;
        for (n = lo(n), r = -1, s = this.length; ++r < s;) for (o.push(i = []), i.parentNode = (e = this[r]).parentNode, u = -1, h = e.length; ++u < h;) (t = e[u]) ? (i.push(f = n.call(t, t.__data__, u, r)), f && "__data__" in t && (f.__data__ = t.__data__)) : i.push(null);
        return kt(o)
    };
    e.selectAll = function (n) {
        var u = [], f, t, i, e;
        for (n = na(n), i = -1, e = this.length; ++i < e;) for (var o = this[i], r = -1, s = o.length; ++r < s;) (t = o[r]) && (u.push(f = yt(n.call(t, t.__data__, r, i))), f.parentNode = t);
        return kt(u)
    };
    wu = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    n.ns = {
        prefix: wu, qualify: function (n) {
            var t = n.indexOf(":"), i = n;
            return t >= 0 && (i = n.substring(0, t), n = n.substring(t + 1)), wu.hasOwnProperty(i) ? {
                space: wu[i],
                local: n
            } : n
        }
    };
    e.attr = function (t, i) {
        if (arguments.length < 2) {
            if (typeof t == "string") {
                var r = this.node();
                return t = n.ns.qualify(t), t.local ? r.getAttributeNS(t.space, t.local) : r.getAttribute(t)
            }
            for (i in t) this.each(ta(i, t[i]));
            return this
        }
        return this.each(ta(t, i))
    };
    e.classed = function (n, t) {
        if (arguments.length < 2) {
            if (typeof n == "string") {
                var r = this.node(), u = (n = ua(n)).length, i = -1;
                if (t = r.classList) {
                    while (++i < u) if (!t.contains(n[i])) return !1
                } else for (t = r.getAttribute("class"); ++i < u;) if (!ra(n[i]).test(t)) return !1;
                return !0
            }
            for (t in n) this.each(fa(t, n[t]));
            return this
        }
        return this.each(fa(n, t))
    };
    e.style = function (n, t, i) {
        var r = arguments.length;
        if (r < 3) {
            if (typeof n != "string") {
                r < 2 && (t = "");
                for (i in n) this.each(ea(i, n[i], t));
                return this
            }
            if (r < 2) return b.getComputedStyle(this.node(), null).getPropertyValue(n);
            i = ""
        }
        return this.each(ea(n, t, i))
    };
    e.property = function (n, t) {
        if (arguments.length < 2) {
            if (typeof n == "string") return this.node()[n];
            for (t in n) this.each(oa(t, n[t]));
            return this
        }
        return this.each(oa(n, t))
    };
    e.text = function (n) {
        return arguments.length ? this.each(typeof n == "function" ? function () {
            var t = n.apply(this, arguments);
            this.textContent = t == null ? "" : t
        } : n == null ? function () {
            this.textContent = ""
        } : function () {
            this.textContent = n
        }) : this.node().textContent
    };
    e.html = function (n) {
        return arguments.length ? this.each(typeof n == "function" ? function () {
            var t = n.apply(this, arguments);
            this.innerHTML = t == null ? "" : t
        } : n == null ? function () {
            this.innerHTML = ""
        } : function () {
            this.innerHTML = n
        }) : this.node().innerHTML
    };
    e.append = function (n) {
        return n = sa(n), this.select(function () {
            return this.appendChild(n.apply(this, arguments))
        })
    };
    e.insert = function (n, t) {
        return n = sa(n), t = lo(t), this.select(function () {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
        })
    };
    e.remove = function () {
        return this.each(function () {
            var n = this.parentNode;
            n && n.removeChild(this)
        })
    };
    e.data = function (n, t) {
        function o(n, i) {
            var r, l = n.length, a = i.length, k = Math.min(l, a), v = new Array(a), c = new Array(a), y = new Array(l),
                u, o;
            if (t) {
                var p = new rt, w = new rt, b = [], e;
                for (r = -1; ++r < l;) e = t.call(u = n[r], u.__data__, r), p.has(e) ? y[r] = u : p.set(e, u), b.push(e);
                for (r = -1; ++r < a;) e = t.call(i, o = i[r], r), (u = p.get(e)) ? (v[r] = u, u.__data__ = o) : w.has(e) || (c[r] = ao(o)), w.set(e, o), p.remove(e);
                for (r = -1; ++r < l;) p.has(b[r]) && (y[r] = n[r])
            } else {
                for (r = -1; ++r < k;) u = n[r], o = i[r], u ? (u.__data__ = o, v[r] = u) : c[r] = ao(o);
                for (; r < a; ++r) c[r] = ao(i[r]);
                for (; r < l; ++r) y[r] = n[r]
            }
            c.update = v;
            c.parentNode = v.parentNode = y.parentNode = n.parentNode;
            s.push(c);
            f.push(v);
            h.push(y)
        }

        var i = -1, u = this.length, r, e;
        if (!arguments.length) {
            for (n = new Array(u = (r = this[0]).length); ++i < u;) (e = r[i]) && (n[i] = e.__data__);
            return n
        }
        var s = ca([]), f = kt([]), h = kt([]);
        if (typeof n == "function") while (++i < u) o(r = this[i], n.call(r, r.parentNode.__data__, i)); else while (++i < u) o(r = this[i], n);
        return f.enter = function () {
            return s
        }, f.exit = function () {
            return h
        }, f
    };
    e.datum = function (n) {
        return arguments.length ? this.property("__data__", n) : this.property("__data__")
    };
    e.filter = function (n) {
        var e = [], u, f, r, t, o, i, s;
        for (typeof n != "function" && (n = ha(n)), t = 0, o = this.length; t < o; t++) for (e.push(u = []), u.parentNode = (f = this[t]).parentNode, i = 0, s = f.length; i < s; i++) (r = f[i]) && n.call(r, r.__data__, i, t) && u.push(r);
        return kt(e)
    };
    e.order = function () {
        for (var i = -1, f = this.length; ++i < f;) for (var r = this[i], u = r.length - 1, n = r[u], t; --u >= 0;) (t = r[u]) && (n && n !== t.nextSibling && n.parentNode.insertBefore(t, n), n = t);
        return this
    };
    e.sort = function (n) {
        n = yk.apply(this, arguments);
        for (var t = -1, i = this.length; ++t < i;) this[t].sort(n);
        return this.order()
    };
    e.each = function (n) {
        return dt(this, function (t, i, r) {
            n.call(t, t.__data__, i, r)
        })
    };
    e.call = function (n) {
        var t = yt(arguments);
        return n.apply(t[0] = this, t), this
    };
    e.empty = function () {
        return !this.node()
    };
    e.node = function () {
        for (var i, n = 0, r = this.length; n < r; n++) for (var u = this[n], t = 0, f = u.length; t < f; t++) if (i = u[t], i) return i;
        return null
    };
    e.size = function () {
        var n = 0;
        return this.each(function () {
            ++n
        }), n
    };
    ut = [];
    n.selection.enter = ca;
    n.selection.enter.prototype = ut;
    ut.append = e.append;
    ut.empty = e.empty;
    ut.node = e.node;
    ut.call = e.call;
    ut.size = e.size;
    ut.select = function (n) {
        for (var e = [], r, o, s, t, f, i, c, u = -1, h = this.length; ++u < h;) for (s = (t = this[u]).update, e.push(r = []), r.parentNode = t.parentNode, i = -1, c = t.length; ++i < c;) (f = t[i]) ? (r.push(s[i] = o = n.call(t.parentNode, f.__data__, i, u)), o.__data__ = f.__data__) : r.push(null);
        return kt(e)
    };
    ut.insert = function (n, t) {
        return arguments.length < 2 && (t = pk(this)), e.insert.call(this, n, t)
    };
    e.transition = function () {
        for (var r = yi || ++tl, u = [], f, n, s = de || {
            time: Date.now(),
            ease: wn,
            delay: 0,
            duration: 250
        }, t = -1, e = this.length; ++t < e;) {
            u.push(f = []);
            for (var o = this[t], i = -1, h = o.length; ++i < h;) (n = o[i]) && ge(n, i, r, s), f.push(n)
        }
        return yu(u, r)
    };
    e.interrupt = function () {
        return this.each(bu)
    };
    n.select = function (n) {
        var t = [typeof n == "string" ? ho(n, it) : n];
        return t.parentNode = pt, kt([t])
    };
    n.selectAll = function (n) {
        var t = yt(typeof n == "string" ? co(n, it) : n);
        return t.parentNode = pt, kt([t])
    };
    vo = n.select(pt);
    e.on = function (n, t, i) {
        var r = arguments.length;
        if (r < 3) {
            if (typeof n != "string") {
                r < 2 && (t = !1);
                for (i in n) this.each(la(i, n[i], t));
                return this
            }
            if (r < 2) return (r = this.node()["__on" + n]) && r._;
            i = !1
        }
        return this.each(la(n, t, i))
    };
    ku = n.map({mouseenter: "mouseover", mouseleave: "mouseout"});
    ku.forEach(function (n) {
        "on" + n in it && ku.remove(n)
    });
    bi = "onselectstart" in it ? null : uo(pt.style, "userSelect");
    va = 0;
    n.mouse = function (n) {
        return yo(n, oo())
    };
    n.touches = function (n, t) {
        return arguments.length < 2 && (t = oo().touches), t ? yt(t).map(function (t) {
            var i = yo(n, t);
            return i.identifier = t.identifier, i
        }) : []
    };
    n.behavior.drag = function () {
        function i() {
            this.on("mousedown.drag", f).on("touchstart.drag", e)
        }

        function u(i, u, f, e, o) {
            return function () {
                function d() {
                    var n = u(v, h), t, i;
                    n && (t = n[0] - c[0], i = n[1] - c[1], p |= t | i, c = n, y({
                        type: "drag",
                        x: n[0] + s[0],
                        y: n[1] + s[1],
                        dx: t,
                        dy: i
                    }))
                }

                function g() {
                    if (u(v, h)) {
                        b.on(e + l, null).on(o + l, null);
                        k(p && n.event.target === w);
                        y({type: "dragend"})
                    }
                }

                var a = this, w = n.event.target, v = a.parentNode, y = r.of(a, arguments), p = 0, h = i(),
                    l = ".drag" + (h == null ? "" : "-" + h), s, b = n.select(f()).on(e + l, d).on(o + l, g), k = du(),
                    c = u(v, h);
                t ? (s = t.apply(a, arguments), s = [s.x - c[0], s.y - c[1]]) : s = [0, 0];
                y({type: "dragstart"})
            }
        }

        var r = so(i, "drag", "dragstart", "dragend"), t = null, f = u(c, n.mouse, dk, "mousemove", "mouseup"),
            e = u(bk, n.touch, kk, "touchmove", "touchend");
        return i.origin = function (n) {
            return arguments.length ? (t = n, i) : t
        }, n.rebind(i, r, "on")
    };
    var f = Math.PI, k = 2 * f, v = f / 2, t = 1e-6, po = t * t, u = f / 180, s = 180 / f;
    var gu = Math.SQRT2, bo = 2, ka = 4;
    n.interpolateZoom = function (n, t) {
        function p(n) {
            var t = n * y, r, h;
            return v ? (r = wa(u), h = i / (bo * c) * (r * nd(gu * t + u) - gk(u)), [o + h * f, s + h * e, i * r / wa(gu * t + u)]) : [o + n * f, s + n * e, i * Math.exp(gu * t)]
        }

        var o = n[0], s = n[1], i = n[2], w = t[0], b = t[1], r = t[2], f = w - o, e = b - s, h = f * f + e * e,
            c = Math.sqrt(h), l = (r * r - i * i + ka * h) / (2 * i * bo * c),
            a = (r * r - i * i - ka * h) / (2 * r * bo * c), u = Math.log(Math.sqrt(l * l + 1) - l),
            k = Math.log(Math.sqrt(a * a + 1) - a), v = k - u, y = (v || Math.log(r / i)) / gu;
        return p.duration = y * 1e3, p
    };
    n.behavior.zoom = function () {
        function i(n) {
            n.on(k, ft).on(da + ".zoom", ht).on(d, ot).on("dblclick.zoom", ct).on(g, et)
        }

        function y(n) {
            return [(n[0] - t.x) / t.k, (n[1] - t.y) / t.k]
        }

        function st(n) {
            return [n[0] * t.k + t.x, n[1] * t.k + t.y]
        }

        function p(n) {
            t.k = Math.max(c[0], Math.min(c[1], n))
        }

        function o(n, i) {
            i = st(i);
            t.x += n[0] - i[0];
            t.y += n[1] - i[1]
        }

        function rt() {
            a && a.domain(tt.range().map(function (n) {
                return (n - t.x) / t.k
            }).map(tt.invert));
            v && v.domain(it.range().map(function (n) {
                return (n - t.y) / t.k
            }).map(it.invert))
        }

        function f(n) {
            n({type: "zoomstart"})
        }

        function r(n) {
            rt();
            n({type: "zoom", scale: t.k, translate: [t.x, t.y]})
        }

        function e(n) {
            n({type: "zoomend"})
        }

        function ft() {
            function v() {
                s = 1;
                o(n.mouse(t), l);
                r(i)
            }

            function p() {
                c.on(d, b === t ? ot : null).on(ut, null);
                a(s && n.event.target === h);
                e(i)
            }

            var t = this, h = n.event.target, i = u.of(t, arguments), s = 0, c = n.select(b).on(d, v).on(ut, p),
                l = y(n.mouse(t)), a = du();
            bu.call(t);
            f(i)
        }

        function et() {
            function v() {
                var r = n.touches(s);
                return a = t.k, r.forEach(function (n) {
                    n.identifier in i && (i[n.identifier] = y(n))
                }), r
            }

            function w() {
                for (var l = n.event.changedTouches, u, s, f, y, e = 0, a = l.length; e < a; ++e) i[l[e].identifier] = null;
                if (u = v(), s = Date.now(), u.length === 1) s - nt < 500 && (f = u[0], y = i[f.identifier], p(t.k * 2), o(f, y), bt(), r(h)), nt = s; else if (u.length > 1) {
                    var f = u[0], w = u[1], b = f[0] - w[0], k = f[1] - w[1];
                    c = b * b + k * k
                }
            }

            function ut() {
                for (var y = n.touches(s), t, f, u, e, l, b, v = 0, w = y.length; v < w; ++v, e = null) if (u = y[v], e = i[u.identifier]) {
                    if (f) break;
                    t = u;
                    f = e
                }
                e && (l = (l = u[0] - t[0]) * l + (l = u[1] - t[1]) * l, b = c && Math.sqrt(l / c), t = [(t[0] + u[0]) / 2, (t[1] + u[1]) / 2], f = [(f[0] + e[0]) / 2, (f[1] + e[1]) / 2], p(b * a));
                nt = null;
                o(t, f);
                r(h)
            }

            function ot() {
                var r, t, u, f;
                if (n.event.touches.length) {
                    for (r = n.event.changedTouches, t = 0, u = r.length; t < u; ++t) delete i[r[t].identifier];
                    for (f in i) return void v()
                }
                tt.on(l, null);
                it.on(k, ft).on(g, et);
                rt();
                e(h)
            }

            var s = this, h = u.of(s, arguments), i = {}, c = 0, a, l = ".zoom-" + n.event.changedTouches[0].identifier,
                b = "touchmove" + l, d = "touchend" + l, tt = n.select(n.event.target).on(b, ut).on(d, ot),
                it = n.select(s).on(k, null).on(g, w), rt = du();
            bu.call(s);
            w();
            f(h)
        }

        function ht() {
            var i = u.of(this, arguments), h;
            l ? clearTimeout(l) : (bu.call(this), f(i));
            l = setTimeout(function () {
                l = null;
                e(i)
            }, 50);
            bt();
            h = w || n.mouse(this);
            s || (s = y(h));
            p(Math.pow(2, nf() * .002) * t.k);
            o(h, s);
            r(i)
        }

        function ot() {
            s = null
        }

        function ct() {
            var i = u.of(this, arguments), s = n.mouse(this), c = y(s), h = Math.log(t.k) / Math.LN2;
            f(i);
            p(Math.pow(2, n.event.shiftKey ? Math.ceil(h) - 1 : Math.floor(h) + 1));
            o(s, c);
            r(i);
            e(i)
        }

        var t = {x: 0, y: 0, k: 1}, s, w, h = [960, 500], c = ko, k = "mousedown.zoom", d = "mousemove.zoom",
            ut = "mouseup.zoom", l, g = "touchstart.zoom", nt, u = so(i, "zoomstart", "zoom", "zoomend"), tt, a, it, v;
        return i.event = function (i) {
            i.each(function () {
                var i = u.of(this, arguments), o = t;
                yi ? n.select(this).transition().each("start.zoom", function () {
                    t = this.__chart__ || {x: 0, y: 0, k: 1};
                    f(i)
                }).tween("zoom:zoom", function () {
                    var u = h[0], s = h[1], f = u / 2, e = s / 2,
                        c = n.interpolateZoom([(f - t.x) / t.k, (e - t.y) / t.k, u / t.k], [(f - o.x) / o.k, (e - o.y) / o.k, u / o.k]);
                    return function (n) {
                        var o = c(n), s = u / o[2];
                        this.__chart__ = t = {x: f - o[0] * s, y: e - o[1] * s, k: s};
                        r(i)
                    }
                }).each("end.zoom", function () {
                    e(i)
                }) : (this.__chart__ = t, f(i), r(i), e(i))
            })
        }, i.translate = function (n) {
            return arguments.length ? (t = {x: +n[0], y: +n[1], k: t.k}, rt(), i) : [t.x, t.y]
        }, i.scale = function (n) {
            return arguments.length ? (t = {x: t.x, y: t.y, k: +n}, rt(), i) : t.k
        }, i.scaleExtent = function (n) {
            return arguments.length ? (c = n == null ? ko : [+n[0], +n[1]], i) : c
        }, i.center = function (n) {
            return arguments.length ? (w = n && [+n[0], +n[1]], i) : w
        }, i.size = function (n) {
            return arguments.length ? (h = n && [+n[0], +n[1]], i) : h
        }, i.x = function (n) {
            return arguments.length ? (a = n, tt = n.copy(), t = {x: 0, y: 0, k: 1}, i) : a
        }, i.y = function (n) {
            return arguments.length ? (v = n, it = n.copy(), t = {x: 0, y: 0, k: 1}, i) : v
        }, n.rebind(i, u, "on")
    };
    ko = [0, Infinity];
    da = "onwheel" in it ? (nf = function () {
        return -n.event.deltaY * (n.event.deltaMode ? 120 : 1)
    }, "wheel") : "onmousewheel" in it ? (nf = function () {
        return n.event.wheelDelta
    }, "mousewheel") : (nf = function () {
        return -n.event.detail
    }, "MozMousePixelScroll");
    di.prototype.toString = function () {
        return this.rgb() + ""
    };
    n.hsl = function (n, t, i) {
        return arguments.length === 1 ? n instanceof go ? gi(n.h, n.s, n.l) : fv("" + n, ev, gi) : gi(+n, +t, +i)
    };
    tf = go.prototype = new di;
    tf.brighter = function (n) {
        return n = Math.pow(.7, arguments.length ? n : 1), gi(this.h, this.s, this.l / n)
    };
    tf.darker = function (n) {
        return n = Math.pow(.7, arguments.length ? n : 1), gi(this.h, this.s, n * this.l)
    };
    tf.rgb = function () {
        return ns(this.h, this.s, this.l)
    };
    n.hcl = function (t, i, r) {
        return arguments.length === 1 ? t instanceof rf ? nr(t.h, t.c, t.l) : t instanceof ff ? rv(t.l, t.a, t.b) : rv((t = ov((t = n.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : nr(+t, +i, +r)
    };
    uf = rf.prototype = new di;
    uf.brighter = function (n) {
        return nr(this.h, this.c, Math.min(100, this.l + ef * (arguments.length ? n : 1)))
    };
    uf.darker = function (n) {
        return nr(this.h, this.c, Math.max(0, this.l - ef * (arguments.length ? n : 1)))
    };
    uf.rgb = function () {
        return ts(this.h, this.c, this.l).rgb()
    };
    n.lab = function (t, i, r) {
        return arguments.length === 1 ? t instanceof ff ? tr(t.l, t.a, t.b) : t instanceof rf ? ts(t.l, t.c, t.h) : ov((t = n.rgb(t)).r, t.g, t.b) : tr(+t, +i, +r)
    };
    var ef = 18, ga = .95047, nv = 1, tv = 1.08883, is = ff.prototype = new di;
    is.brighter = function (n) {
        return tr(Math.min(100, this.l + ef * (arguments.length ? n : 1)), this.a, this.b)
    };
    is.darker = function (n) {
        return tr(Math.max(0, this.l - ef * (arguments.length ? n : 1)), this.a, this.b)
    };
    is.rgb = function () {
        return iv(this.l, this.a, this.b)
    };
    n.rgb = function (n, t, i) {
        return arguments.length === 1 ? n instanceof es ? ot(n.r, n.g, n.b) : fv("" + n, ot, ns) : ot(~~n, ~~t, ~~i)
    };
    pr = es.prototype = new di;
    pr.brighter = function (n) {
        n = Math.pow(.7, arguments.length ? n : 1);
        var i = this.r, r = this.g, u = this.b, t = 30;
        return !i && !r && !u ? ot(t, t, t) : (i && i < t && (i = t), r && r < t && (r = t), u && u < t && (u = t), ot(Math.min(255, ~~(i / n)), Math.min(255, ~~(r / n)), Math.min(255, ~~(u / n))))
    };
    pr.darker = function (n) {
        return n = Math.pow(.7, arguments.length ? n : 1), ot(~~(n * this.r), ~~(n * this.g), ~~(n * this.b))
    };
    pr.hsl = function () {
        return ev(this.r, this.g, this.b)
    };
    pr.toString = function () {
        return "#" + ir(this.r) + ir(this.g) + ir(this.b)
    };
    wr = n.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    wr.forEach(function (n, t) {
        wr.set(n, uv(t))
    });
    n.functor = o;
    n.xhr = hs(a);
    n.dsv = function (n, t) {
        function i(n, i, r) {
            arguments.length < 3 && (r = i, i = null);
            var e = sf(n, t, i == null ? u : f(i), r);
            return e.row = function (n) {
                return arguments.length ? e.response((i = n) == null ? u : f(n)) : i
            }, e
        }

        function u(n) {
            return i.parse(n.responseText)
        }

        function f(n) {
            return function (t) {
                return i.parse(t.responseText, n)
            }
        }

        function s(t) {
            return t.map(r).join(n)
        }

        function r(n) {
            return e.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
        }

        var e = new RegExp('["' + n + "\n]"), o = n.charCodeAt(0);
        return i.parse = function (n, t) {
            var r;
            return i.parseRows(n, function (n, i) {
                if (r) return r(n, i - 1);
                var u = new Function("d", "return {" + n.map(function (n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]"
                }).join(",") + "}");
                r = t ? function (n, i) {
                    return t(u(n), i)
                } : u
            })
        }, i.parseRows = function (n, t) {
            function l() {
                var f, t, u, c;
                if (i >= s) return e;
                if (r) return r = !1, h;
                if (f = i, n.charCodeAt(f) === 34) {
                    for (t = f; t++ < s;) if (n.charCodeAt(t) === 34) {
                        if (n.charCodeAt(t + 1) !== 34) break;
                        ++t
                    }
                    return i = t + 2, u = n.charCodeAt(t + 1), u === 13 ? (r = !0, n.charCodeAt(t + 2) === 10 && ++i) : u === 10 && (r = !0), n.substring(f + 1, t).replace(/""/g, '"')
                }
                while (i < s) {
                    if (u = n.charCodeAt(i++), c = 1, u === 10) r = !0; else if (u === 13) r = !0, n.charCodeAt(i) === 10 && (++i, ++c); else if (u !== o) continue;
                    return n.substring(f, i - c)
                }
                return n.substring(f)
            }

            for (var h = {}, e = {}, c = [], s = n.length, i = 0, a = 0, u, r, f; (u = l()) !== e;) {
                for (f = []; u !== h && u !== e;) f.push(u), u = l();
                (!t || (f = t(f, a++))) && c.push(f)
            }
            return c
        }, i.format = function (t) {
            if (Array.isArray(t[0])) return i.formatRows(t);
            var f = new ro, u = [];
            return t.forEach(function (n) {
                for (var t in n) f.has(t) || u.push(f.add(t))
            }), [u.map(r).join(n)].concat(t.map(function (t) {
                return u.map(function (n) {
                    return r(t[n])
                }).join(n)
            })).join("\n")
        }, i.formatRows = function (n) {
            return n.map(s).join("\n")
        }, i
    };
    n.csv = n.dsv(",", "text/csv");
    n.tsv = n.dsv("\t", "text/tab-separated-values");
    n.touch = function (n, t, i) {
        if (arguments.length < 3 && (i = t, t = oo().changedTouches), t) for (var r = 0, f = t.length, u; r < f; ++r) if ((u = t[r]).identifier === i) return yo(n, u)
    };
    cs = b[uo(b, "requestAnimationFrame")] || function (n) {
        setTimeout(n, 17)
    };
    n.timer = function (n, t, i) {
        var u = arguments.length, f, r;
        u < 2 && (t = 0);
        u < 3 && (i = Date.now());
        f = i + t;
        r = {c: n, t: f, f: !1, n: null};
        cf ? cf.n = r : hf = r;
        cf = r;
        lf || (af = clearTimeout(af), lf = 1, cs(ls))
    };
    n.timer.flush = function () {
        sv();
        hv()
    };
    n.round = function (n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
    };
    cv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(id);
    n.formatPrefix = function (t, i) {
        var r = 0;
        return t && (t < 0 && (t *= -1), i && (t = n.round(t, as(t, i))), r = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), r = Math.max(-24, Math.min(24, Math.floor((r - 1) / 3) * 3))), cv[8 + r / 3]
    };
    vs = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
    lv = n.map({
        b: function (n) {
            return n.toString(2)
        }, c: function (n) {
            return String.fromCharCode(n)
        }, o: function (n) {
            return n.toString(8)
        }, x: function (n) {
            return n.toString(16)
        }, X: function (n) {
            return n.toString(16).toUpperCase()
        }, g: function (n, t) {
            return n.toPrecision(t)
        }, e: function (n, t) {
            return n.toExponential(t)
        }, f: function (n, t) {
            return n.toFixed(t)
        }, r: function (t, i) {
            return (t = n.round(t, as(t, i))).toFixed(Math.max(0, Math.min(20, as(t * (1 + 1e-15), i))))
        }
    });
    i = n.time = {};
    y = Date;
    ht.prototype = {
        getDate: function () {
            return this._.getUTCDate()
        }, getDay: function () {
            return this._.getUTCDay()
        }, getFullYear: function () {
            return this._.getUTCFullYear()
        }, getHours: function () {
            return this._.getUTCHours()
        }, getMilliseconds: function () {
            return this._.getUTCMilliseconds()
        }, getMinutes: function () {
            return this._.getUTCMinutes()
        }, getMonth: function () {
            return this._.getUTCMonth()
        }, getSeconds: function () {
            return this._.getUTCSeconds()
        }, getTime: function () {
            return this._.getTime()
        }, getTimezoneOffset: function () {
            return 0
        }, valueOf: function () {
            return this._.valueOf()
        }, setDate: function () {
            ft.setUTCDate.apply(this._, arguments)
        }, setDay: function () {
            ft.setUTCDay.apply(this._, arguments)
        }, setFullYear: function () {
            ft.setUTCFullYear.apply(this._, arguments)
        }, setHours: function () {
            ft.setUTCHours.apply(this._, arguments)
        }, setMilliseconds: function () {
            ft.setUTCMilliseconds.apply(this._, arguments)
        }, setMinutes: function () {
            ft.setUTCMinutes.apply(this._, arguments)
        }, setMonth: function () {
            ft.setUTCMonth.apply(this._, arguments)
        }, setSeconds: function () {
            ft.setUTCSeconds.apply(this._, arguments)
        }, setTime: function () {
            ft.setTime.apply(this._, arguments)
        }
    };
    ft = Date.prototype;
    i.year = ei(function (n) {
        return n = i.day(n), n.setMonth(0, 1), n
    }, function (n, t) {
        n.setFullYear(n.getFullYear() + t)
    }, function (n) {
        return n.getFullYear()
    });
    i.years = i.year.range;
    i.years.utc = i.year.utc.range;
    i.day = ei(function (n) {
        var t = new y(2e3, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
    }, function (n, t) {
        n.setDate(n.getDate() + t)
    }, function (n) {
        return n.getDate() - 1
    });
    i.days = i.day.range;
    i.days.utc = i.day.utc.range;
    i.dayOfYear = function (n) {
        var t = i.year(n);
        return Math.floor((n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5)
    };
    ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (n, t) {
        t = 7 - t;
        var r = i[n] = ei(function (n) {
            return (n = i.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
        }, function (n, t) {
            n.setDate(n.getDate() + Math.floor(t) * 7)
        }, function (n) {
            var r = i.year(n).getDay();
            return Math.floor((i.dayOfYear(n) + (r + t) % 7) / 7) - (r !== t)
        });
        i[n + "s"] = r.range;
        i[n + "s"].utc = r.utc.range;
        i[n + "OfYear"] = function (n) {
            var r = i.year(n).getDay();
            return Math.floor((i.dayOfYear(n) + (r + t) % 7) / 7)
        }
    });
    i.week = i.sunday;
    i.weeks = i.sunday.range;
    i.weeks.utc = i.sunday.utc.range;
    i.weekOfYear = i.sundayOfYear;
    var av = {"-": "", _: " ", "0": "0"}, h = /^\s*\d+/, vv = /^%/;
    n.locale = function (n) {
        return {numberFormat: rd(n), timeFormat: fd(n)}
    };
    ys = n.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    n.format = ys.numberFormat;
    n.geo = {};
    ps.prototype = {
        s: 0, t: 0, add: function (n) {
            wv(n, this.t, br);
            wv(br.s, this.s, this);
            this.s ? this.t += br.t : this.s = br.t
        }, reset: function () {
            this.s = this.t = 0
        }, valueOf: function () {
            return this.s
        }
    };
    br = new ps;
    n.geo.stream = function (n, t) {
        n && ws.hasOwnProperty(n.type) ? ws[n.type](n, t) : wf(n, t)
    };
    ws = {
        Feature: function (n, t) {
            wf(n.geometry, t)
        }, FeatureCollection: function (n, t) {
            for (var i = n.features, r = -1, u = i.length; ++r < u;) wf(i[r].geometry, t)
        }
    };
    bs = {
        Sphere: function (n, t) {
            t.sphere()
        }, Point: function (n, t) {
            n = n.coordinates;
            t.point(n[0], n[1], n[2])
        }, MultiPoint: function (n, t) {
            for (var i = n.coordinates, r = -1, u = i.length; ++r < u;) n = i[r], t.point(n[0], n[1], n[2])
        }, LineString: function (n, t) {
            ks(n.coordinates, t, 0)
        }, MultiLineString: function (n, t) {
            for (var i = n.coordinates, r = -1, u = i.length; ++r < u;) ks(i[r], t, 0)
        }, Polygon: function (n, t) {
            bv(n.coordinates, t)
        }, MultiPolygon: function (n, t) {
            for (var i = n.coordinates, r = -1, u = i.length; ++r < u;) bv(i[r], t)
        }, GeometryCollection: function (n, t) {
            for (var i = n.geometries, r = -1, u = i.length; ++r < u;) wf(i[r], t)
        }
    };
    n.geo.area = function (t) {
        return bf = 0, n.geo.stream(t, w), bf
    };
    gt = new ps;
    w = {
        sphere: function () {
            bf += 4 * f
        }, point: c, lineStart: c, lineEnd: c, polygonStart: function () {
            gt.reset();
            w.lineStart = ng
        }, polygonEnd: function () {
            var n = 2 * gt;
            bf += n < 0 ? 4 * f + n : n;
            w.lineStart = w.lineEnd = w.point = c
        }
    };
    n.geo.bounds = function () {
        function b(n, t) {
            v.push(l = [i = n, f = n]);
            t < o && (o = t);
            t > h && (h = t)
        }

        function g(n, t) {
            var d = oi([n * u, t * u]), c;
            if (y) {
                var w = rr(y, d), nt = [w[1], -w[0], 0], l = rr(nt, w);
                gf(l);
                l = ne(l);
                var g = n - a, p = g > 0 ? 1 : -1, v = l[0] * s * p, k = r(g) > 180;
                k ^ (p * a < v && v < p * n) ? (c = l[1] * s, c > h && (h = c)) : (v = (v + 360) % 360 - 180, k ^ (p * a < v && v < p * n)) ? (c = -l[1] * s, c < o && (o = c)) : (t < o && (o = t), t > h && (h = t));
                k ? n < a ? e(i, n) > e(i, f) && (f = n) : e(n, f) > e(i, f) && (i = n) : f >= i ? (n < i && (i = n), n > f && (f = n)) : n > a ? e(i, n) > e(i, f) && (f = n) : e(n, f) > e(i, f) && (i = n)
            } else b(n, t);
            y = d;
            a = n
        }

        function nt() {
            c.point = g
        }

        function tt() {
            l[0] = i;
            l[1] = f;
            c.point = b;
            y = null
        }

        function it(n, t) {
            if (y) {
                var i = n - a;
                p += r(i) > 180 ? i + (i > 0 ? 360 : -360) : i
            } else k = n, d = t;
            w.point(n, t);
            g(n, t)
        }

        function ut() {
            w.lineStart()
        }

        function ft() {
            it(k, d);
            w.lineEnd();
            r(p) > t && (i = -(f = 180));
            l[0] = i;
            l[1] = f;
            y = null
        }

        function e(n, t) {
            return (t -= n) < 0 ? t + 360 : t
        }

        function et(n, t) {
            return n[0] - t[0]
        }

        function rt(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }

        var i, o, f, h, a, k, d, y, p, v, l, c = {
            point: b, lineStart: nt, lineEnd: tt, polygonStart: function () {
                c.point = it;
                c.lineStart = ut;
                c.lineEnd = ft;
                p = 0;
                w.polygonStart()
            }, polygonEnd: function () {
                w.polygonEnd();
                c.point = b;
                c.lineStart = nt;
                c.lineEnd = tt;
                gt < 0 ? (i = -(f = 180), o = -(h = 90)) : p > t ? h = 90 : p < -t && (o = -90);
                l[0] = i;
                l[1] = f
            }
        };
        return function (t) {
            var a, p, w;
            if (h = f = -(i = o = Infinity), v = [], n.geo.stream(t, c), a = v.length, a) {
                v.sort(et);
                for (var s = 1, r = v[0], u, y = [r]; s < a; ++s) u = v[s], rt(u[0], r) || rt(u[1], r) ? (e(r[0], u[1]) > e(r[0], r[1]) && (r[1] = u[1]), e(u[0], r[1]) > e(r[0], r[1]) && (r[0] = u[0])) : y.push(r = u);
                p = -Infinity;
                for (var a = y.length - 1, s = 0, r = y[a], u; s <= a; r = u, ++s) u = y[s], (w = e(r[1], u[0])) > p && (p = w, i = u[0], f = r[1])
            }
            return v = l = null, i === Infinity || o === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[i, o], [f, h]]
        }
    }();
    n.geo.centroid = function (i) {
        kr = ie = si = hi = ct = ni = ti = et = ur = fr = ii = 0;
        n.geo.stream(i, g);
        var r = ur, u = fr, f = ii, e = r * r + u * u + f * f;
        return e < po && (r = ni, u = ti, f = et, ie < t && (r = si, u = hi, f = ct), e = r * r + u * u + f * f, e < po) ? [NaN, NaN] : [Math.atan2(u, r) * s, ki(f / Math.sqrt(e)) * s]
    };
    g = {
        sphere: c, point: gs, lineStart: kv, lineEnd: dv, polygonStart: function () {
            g.lineStart = tg
        }, polygonEnd: function () {
            g.lineStart = kv
        }
    };
    nh = ty(er, fg, og, [-f, -f / 2]);
    gr = 1e9;
    n.geo.clipExtent = function () {
        var t, i, r, u, n, f, e = {
            stream: function (t) {
                return n && (n.valid = !1), n = f(t), n.valid = !0, n
            }, extent: function (o) {
                return arguments.length ? (f = uy(t = +o[0][0], i = +o[0][1], r = +o[1][0], u = +o[1][1]), n && (n.valid = !1, n = null), e) : [[t, i], [r, u]]
            }
        };
        return e.extent([[0, 0], [960, 500]])
    };
    (n.geo.conicEqualArea = function () {
        return th(ey)
    }).raw = ey;
    n.geo.albers = function () {
        return n.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    };
    n.geo.albersUsa = function () {
        function r(n) {
            var t = n[0], i = n[1];
            return e = null, (s(t, i), e) || (h(t, i), e) || c(t, i), e
        }

        var i = n.geo.albers(), u = n.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            f = n.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), e, o = {
                point: function (n, t) {
                    e = [n, t]
                }
            }, s, h, c;
        return r.invert = function (n) {
            var e = i.scale(), o = i.translate(), t = (n[0] - o[0]) / e, r = (n[1] - o[1]) / e;
            return (r >= .12 && r < .234 && t >= -.425 && t < -.214 ? u : r >= .166 && r < .234 && t >= -.214 && t < -.115 ? f : i).invert(n)
        }, r.stream = function (n) {
            var t = i.stream(n), r = u.stream(n), e = f.stream(n);
            return {
                point: function (n, i) {
                    t.point(n, i);
                    r.point(n, i);
                    e.point(n, i)
                }, sphere: function () {
                    t.sphere();
                    r.sphere();
                    e.sphere()
                }, lineStart: function () {
                    t.lineStart();
                    r.lineStart();
                    e.lineStart()
                }, lineEnd: function () {
                    t.lineEnd();
                    r.lineEnd();
                    e.lineEnd()
                }, polygonStart: function () {
                    t.polygonStart();
                    r.polygonStart();
                    e.polygonStart()
                }, polygonEnd: function () {
                    t.polygonEnd();
                    r.polygonEnd();
                    e.polygonEnd()
                }
            }
        }, r.precision = function (n) {
            return arguments.length ? (i.precision(n), u.precision(n), f.precision(n), r) : i.precision()
        }, r.scale = function (n) {
            return arguments.length ? (i.scale(n), u.scale(n * .35), f.scale(n), r.translate(i.translate())) : i.scale()
        }, r.translate = function (n) {
            if (!arguments.length) return i.translate();
            var e = i.scale(), l = +n[0], a = +n[1];
            return s = i.translate(n).clipExtent([[l - .455 * e, a - .238 * e], [l + .455 * e, a + .238 * e]]).stream(o).point, h = u.translate([l - .307 * e, a + .201 * e]).clipExtent([[l - .425 * e + t, a + .12 * e + t], [l - .214 * e - t, a + .234 * e - t]]).stream(o).point, c = f.translate([l - .205 * e, a + .212 * e]).clipExtent([[l - .214 * e + t, a + .166 * e + t], [l - .115 * e - t, a + .234 * e - t]]).stream(o).point, r
        }, r.scale(1070)
    };
    lt = {
        point: c, lineStart: c, lineEnd: c, polygonStart: function () {
            rh = 0;
            lt.lineStart = hg
        }, polygonEnd: function () {
            lt.lineStart = lt.lineEnd = lt.point = c;
            ih += r(rh / 2)
        }
    };
    oy = {point: cg, lineStart: c, lineEnd: c, polygonStart: c, polygonEnd: c};
    nt = {
        point: ci, lineStart: hy, lineEnd: cy, polygonStart: function () {
            nt.lineStart = ag
        }, polygonEnd: function () {
            nt.point = ci;
            nt.lineStart = hy;
            nt.lineEnd = cy
        }
    };
    n.geo.path = function () {
        function t(t) {
            return t && (typeof i == "function" && r.pointRadius(+i.apply(this, arguments)), f && f.valid || (f = u(r)), n.geo.stream(t, f)), r.result()
        }

        function s() {
            return f = null, t
        }

        var i = 4.5, e, o, u, r, f;
        return t.area = function (t) {
            return ih = 0, n.geo.stream(t, u(lt)), ih
        }, t.centroid = function (t) {
            return si = hi = ct = ni = ti = et = ur = fr = ii = 0, n.geo.stream(t, u(nt)), ii ? [ur / ii, fr / ii] : et ? [ni / et, ti / et] : ct ? [si / ct, hi / ct] : [NaN, NaN]
        }, t.bounds = function (t) {
            return ee = oe = -(ue = fe = Infinity), n.geo.stream(t, u(oy)), [[ue, fe], [ee, oe]]
        }, t.projection = function (n) {
            return arguments.length ? (u = (e = n) ? n.stream || yg(n) : a, s()) : e
        }, t.context = function (n) {
            return arguments.length ? (r = (o = n) == null ? new lg : new vg(n), typeof i != "function" && r.pointRadius(i), s()) : o
        }, t.pointRadius = function (n) {
            return arguments.length ? (i = typeof n == "function" ? n : (r.pointRadius(+n), +n), t) : i
        }, t.projection(n.geo.albersUsa()).context(null)
    };
    n.geo.transform = function (n) {
        return {
            stream: function (t) {
                var r = new ay(t), i;
                for (i in n) r[i] = n[i];
                return r
            }
        }
    };
    ay.prototype = {
        point: function (n, t) {
            this.stream.point(n, t)
        }, sphere: function () {
            this.stream.sphere()
        }, lineStart: function () {
            this.stream.lineStart()
        }, lineEnd: function () {
            this.stream.lineEnd()
        }, polygonStart: function () {
            this.stream.polygonStart()
        }, polygonEnd: function () {
            this.stream.polygonEnd()
        }
    };
    n.geo.projection = ri;
    n.geo.projectionMutator = uh;
    (n.geo.equirectangular = function () {
        return ri(nu)
    }).raw = nu.invert = nu;
    n.geo.rotation = function (n) {
        function t(t) {
            return t = n(t[0] * u, t[1] * u), t[0] *= s, t[1] *= s, t
        }

        return n = fh(n[0] % 360 * u, n[1] * u, n.length > 2 ? n[2] * u : 0), t.invert = function (t) {
            return t = n.invert(t[0] * u, t[1] * u), t[0] *= s, t[1] *= s, t
        }, t
    };
    py.invert = nu;
    n.geo.circle = function () {
        function n() {
            var n = typeof t == "function" ? t.apply(this, arguments) : t, r = fh(-n[0] * u, -n[1] * u, 0).invert,
                i = [];
            return f(null, null, 1, {
                point: function (n, t) {
                    i.push(n = r(n, t));
                    n[0] *= s;
                    n[1] *= s
                }
            }), {type: "Polygon", coordinates: [i]}
        }

        var t = [0, 0], i, r = 6, f;
        return n.origin = function (i) {
            return arguments.length ? (t = i, n) : t
        }, n.angle = function (t) {
            return arguments.length ? (f = eh((i = +t) * u, r * u), n) : i
        }, n.precision = function (t) {
            return arguments.length ? (f = eh(i * u, (r = +t) * u), n) : r
        }, n.angle(90)
    };
    n.geo.distance = function (n, t) {
        var f = (t[0] - n[0]) * u, e = n[1] * u, o = t[1] * u, a = Math.sin(f), s = Math.cos(f), h = Math.sin(e),
            c = Math.cos(e), l = Math.sin(o), r = Math.cos(o), i;
        return Math.atan2(Math.sqrt((i = r * a) * i + (i = c * l - h * r * s) * i), h * l + c * r * s)
    };
    n.geo.graticule = function () {
        function i() {
            return {type: "MultiLineString", coordinates: nt()}
        }

        function nt() {
            return n.range(Math.ceil(f / v) * v, u, v).map(b).concat(n.range(Math.ceil(o / y) * y, e, y).map(k)).concat(n.range(Math.ceil(h / a) * a, s, a).filter(function (n) {
                return r(n % v) > t
            }).map(d)).concat(n.range(Math.ceil(l / w) * w, c, w).filter(function (n) {
                return r(n % y) > t
            }).map(g))
        }

        var s, h, u, f, c, l, e, o, a = 10, w = a, v = 90, y = 360, d, g, b, k, p = 2.5;
        return i.lines = function () {
            return nt().map(function (n) {
                return {type: "LineString", coordinates: n}
            })
        }, i.outline = function () {
            return {
                type: "Polygon",
                coordinates: [b(f).concat(k(e).slice(1), b(u).reverse().slice(1), k(o).reverse().slice(1))]
            }
        }, i.extent = function (n) {
            return arguments.length ? i.majorExtent(n).minorExtent(n) : i.minorExtent()
        }, i.majorExtent = function (n) {
            return arguments.length ? (f = +n[0][0], u = +n[1][0], o = +n[0][1], e = +n[1][1], f > u && (n = f, f = u, u = n), o > e && (n = o, o = e, e = n), i.precision(p)) : [[f, o], [u, e]]
        }, i.minorExtent = function (n) {
            return arguments.length ? (h = +n[0][0], s = +n[1][0], l = +n[0][1], c = +n[1][1], h > s && (n = h, h = s, s = n), l > c && (n = l, l = c, c = n), i.precision(p)) : [[h, l], [s, c]]
        }, i.step = function (n) {
            return arguments.length ? i.majorStep(n).minorStep(n) : i.minorStep()
        }, i.majorStep = function (n) {
            return arguments.length ? (v = +n[0], y = +n[1], i) : [v, y]
        }, i.minorStep = function (n) {
            return arguments.length ? (a = +n[0], w = +n[1], i) : [a, w]
        }, i.precision = function (n) {
            return arguments.length ? (p = +n, d = gy(l, c, 90), g = np(h, s, p), b = gy(o, e, 90), k = np(f, u, p), i) : p
        }, i.majorExtent([[-180, -90 + t], [180, 90 - t]]).minorExtent([[-180, -80 - t], [180, 80 + t]])
    };
    n.geo.greatArc = function () {
        function t() {
            return {type: "LineString", coordinates: [u || i.apply(this, arguments), f || r.apply(this, arguments)]}
        }

        var i = oh, u, r = sh, f;
        return t.distance = function () {
            return n.geo.distance(u || i.apply(this, arguments), f || r.apply(this, arguments))
        }, t.source = function (n) {
            return arguments.length ? (i = n, u = typeof n == "function" ? null : n, t) : i
        }, t.target = function (n) {
            return arguments.length ? (r = n, f = typeof n == "function" ? null : n, t) : r
        }, t.precision = function () {
            return arguments.length ? t : 0
        }, t
    };
    n.geo.interpolate = function (n, t) {
        return pg(n[0] * u, n[1] * u, t[0] * u, t[1] * u)
    };
    n.geo.length = function (t) {
        return hh = 0, n.geo.stream(t, li), hh
    };
    li = {sphere: c, point: c, lineStart: wg, lineEnd: c, polygonStart: c, polygonEnd: c};
    ch = tu(function (n) {
        return Math.sqrt(2 / (1 + n))
    }, function (n) {
        return 2 * Math.asin(n / 2)
    });
    (n.geo.azimuthalEqualArea = function () {
        return ri(ch)
    }).raw = ch;
    lh = tu(function (n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t)
    }, a);
    (n.geo.azimuthalEquidistant = function () {
        return ri(lh)
    }).raw = lh;
    (n.geo.conicConformal = function () {
        return th(tp)
    }).raw = tp;
    (n.geo.conicEquidistant = function () {
        return th(ip)
    }).raw = ip;
    ah = tu(function (n) {
        return 1 / n
    }, Math.atan);
    (n.geo.gnomonic = function () {
        return ri(ah)
    }).raw = ah;
    se.invert = function (n, t) {
        return [n, 2 * Math.atan(Math.exp(t)) - v]
    };
    (n.geo.mercator = function () {
        return rp(se)
    }).raw = se;
    vh = tu(function () {
        return 1
    }, Math.asin);
    (n.geo.orthographic = function () {
        return ri(vh)
    }).raw = vh;
    yh = tu(function (n) {
        return 1 / (1 + n)
    }, function (n) {
        return 2 * Math.atan(n)
    });
    (n.geo.stereographic = function () {
        return ri(yh)
    }).raw = yh;
    ph.invert = function (n, t) {
        return [-t, 2 * Math.atan(Math.exp(n)) - v]
    };
    (n.geo.transverseMercator = function () {
        var n = rp(ph), t = n.center, i = n.rotate;
        return n.center = function (n) {
            return n ? t([-n[1], n[0]]) : (n = t(), [-n[1], n[0]])
        }, n.rotate = function (n) {
            return n ? i([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = i(), [n[0], n[1], n[2] - 90])
        }, n.rotate([0, 0])
    }).raw = ph;
    n.geom = {};
    n.geom.hull = function (n) {
        function t(n) {
            if (n.length < 3) return [];
            for (var l = o(i), a = o(r), h = n.length, u = [], c = [], t = 0; t < h; t++) u.push([+l.call(this, n[t], t), +a.call(this, n[t], t), t]);
            for (u.sort(bg), t = 0; t < h; t++) c.push([u[t][0], -u[t][1]]);
            var f = up(u), e = up(c), v = e[0] === f[0], y = e[e.length - 1] === f[f.length - 1], s = [];
            for (t = f.length - 1; t >= 0; --t) s.push(n[u[f[t]][2]]);
            for (t = +v; t < e.length - y; ++t) s.push(n[u[e[t]][2]]);
            return s
        }

        var i = or, r = iu;
        return arguments.length ? t(n) : (t.x = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t.y = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t)
    };
    n.geom.polygon = function (n) {
        return yr(n, ru), n
    };
    ru = n.geom.polygon.prototype = [];
    ru.area = function () {
        for (var i = -1, r = this.length, t, n = this[r - 1], u = 0; ++i < r;) t = n, n = this[i], u += t[1] * n[0] - t[0] * n[1];
        return u * .5
    };
    ru.centroid = function (n) {
        var u = -1, f = this.length, e = 0, o = 0, i, t = this[f - 1], r;
        for (arguments.length || (n = -1 / (6 * this.area())); ++u < f;) i = t, t = this[u], r = i[0] * t[1] - t[0] * i[1], e += (i[0] + t[0]) * r, o += (i[1] + t[1]) * r;
        return [e * n, o * n]
    };
    ru.clip = function (n) {
        for (var f, o = ep(n), s = -1, h = this.length - ep(this), e, c, i = this[h - 1], t, r, u; ++s < h;) {
            for (f = n.slice(), n.length = 0, t = this[s], r = f[(c = f.length - o) - 1], e = -1; ++e < c;) u = f[e], wh(u, i, t) ? (wh(r, i, t) || n.push(fp(r, u, i, t)), n.push(u)) : wh(r, i, t) && n.push(fp(r, u, i, t)), r = u;
            o && n.push(n[0]);
            i = t
        }
        return n
    };
    bh = [];
    dh = [];
    hp.prototype.prepare = function () {
        for (var n = this.edges, t = n.length, i; t--;) i = n[t].edge, i.b && i.a || n.splice(t, 1);
        return n.sort(cp), n.length
    };
    ce.prototype = {
        start: function () {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        }, end: function () {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    };
    nc.prototype = {
        insert: function (n, t) {
            var i, r, u;
            if (n) {
                if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                    for (n = n.R; n.L;) n = n.L;
                    n.L = t
                } else n.R = t;
                i = n
            } else this._ ? (n = ap(this._), t.P = null, t.N = n, n.P = n.L = t, i = n) : (t.P = t.N = null, this._ = t, i = null);
            for (t.L = t.R = null, t.U = i, t.C = !0, n = t; i && i.C;) r = i.U, i === r.L ? (u = r.R, u && u.C ? (i.C = u.C = !1, r.C = !0, n = r) : (n === i.R && (eu(this, i), n = i, i = n.U), i.C = !1, r.C = !0, ou(this, r))) : (u = r.L, u && u.C ? (i.C = u.C = !1, r.C = !0, n = r) : (n === i.L && (ou(this, i), n = i, i = n.U), i.C = !1, r.C = !0, eu(this, r))), i = n.U;
            this._.C = !1
        }, remove: function (n) {
            n.N && (n.N.P = n.P);
            n.P && (n.P.N = n.N);
            n.N = n.P = null;
            var i = n.U, t, f = n.L, u = n.R, r, e;
            if (r = f ? u ? ap(u) : f : u, i ? i.L === n ? i.L = r : i.R = r : this._ = r, f && u ? (e = r.C, r.C = n.C, r.L = f, f.U = r, r !== u ? (i = r.U, r.U = n.U, n = r.R, i.L = n, r.R = u, u.U = r) : (r.U = i, i = r, n = r.R)) : (e = n.C, n = r), n && (n.U = i), !e) {
                if (n && n.C) {
                    n.C = !1;
                    return
                }
                do {
                    if (n === this._) break;
                    if (n === i.L) {
                        if (t = i.R, t.C && (t.C = !1, i.C = !0, eu(this, i), t = i.R), t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1, t.C = !0, ou(this, t), t = i.R);
                            t.C = i.C;
                            i.C = t.R.C = !1;
                            eu(this, i);
                            n = this._;
                            break
                        }
                    } else if (t = i.L, t.C && (t.C = !1, i.C = !0, ou(this, i), t = i.L), t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1, t.C = !0, eu(this, t), t = i.L);
                        t.C = i.C;
                        i.C = t.L.C = !1;
                        ou(this, i);
                        n = this._;
                        break
                    }
                    t.C = !0;
                    n = i;
                    i = i.U
                } while (!n.C);
                n && (n.C = !1)
            }
        }
    };
    n.geom.voronoi = function (n) {
        function i(n) {
            var o = new Array(n.length), t = r[0][0], i = r[0][1], u = r[1][0], f = r[1][1];
            return tc(e(n), r).cells.forEach(function (r, e) {
                var h = r.edges, s = r.site, c = o[e] = h.length ? h.map(function (n) {
                    var t = n.start();
                    return [t.x, t.y]
                }) : s.x >= t && s.x <= u && s.y >= i && s.y <= f ? [[t, f], [u, f], [u, i], [t, i]] : [];
                c.point = n[e]
            }), o
        }

        function e(n) {
            return n.map(function (n, i) {
                return {x: Math.round(s(n, i) / t) * t, y: Math.round(h(n, i) / t) * t, i: i}
            })
        }

        var u = or, f = iu, s = u, h = f, r = su;
        return n ? i(n) : (i.links = function (n) {
            return tc(e(n)).edges.filter(function (n) {
                return n.l && n.r
            }).map(function (t) {
                return {source: n[t.l.i], target: n[t.r.i]}
            })
        }, i.triangles = function (n) {
            var t = [];
            return tc(e(n)).cells.forEach(function (i, r) {
                for (var o = i.site, s = i.edges.sort(cp), h = -1, c = s.length, l, e, u = s[c - 1].edge, f = u.l === o ? u.r : u.l; ++h < c;) l = u, e = f, u = s[h].edge, f = u.l === o ? u.r : u.l, r < e.i && r < f.i && sn(o, e, f) < 0 && t.push([n[r], n[e.i], n[f.i]])
            }), t
        }, i.x = function (n) {
            return arguments.length ? (s = o(u = n), i) : u
        }, i.y = function (n) {
            return arguments.length ? (h = o(f = n), i) : f
        }, i.clipExtent = function (n) {
            return arguments.length ? (r = n == null ? su : n, i) : r === su ? null : r
        }, i.size = function (n) {
            return arguments.length ? i.clipExtent(n && [[0, 0], n]) : r === su ? null : r && r[1]
        }, i)
    };
    su = [[-1e6, -1e6], [1e6, 1e6]];
    n.geom.delaunay = function (t) {
        return n.geom.voronoi().triangles(t)
    };
    n.geom.quadtree = function (n, t, i, u, f) {
        function e(n) {
            function ut(n, t, i, u, f, e, o, s) {
                var h, c, l;
                isNaN(i) || isNaN(u) || (n.leaf ? (h = n.x, c = n.y, h != null ? r(h - i) + r(c - u) < .01 ? tt(n, t, i, u, f, e, o, s) : (l = n.point, n.x = n.y = n.point = null, tt(n, l, h, c, f, e, o, s), tt(n, t, i, u, f, e, o, s)) : (n.x = i, n.y = u, n.point = t)) : tt(n, t, i, u, f, e, o, s))
            }

            function tt(n, t, i, r, u, f, e, o) {
                var s = (u + e) * .5, h = (f + o) * .5, c = i >= s, l = r >= h, a = (l << 1) + c;
                n.leaf = !1;
                n = n.nodes[a] || (n.nodes[a] = vp());
                c ? u = s : e = s;
                l ? f = h : o = h;
                ut(n, t, i, r, u, f, e, o)
            }

            var l, ft = o(s), et = o(h), d, g, e, nt, a, v, y, p, b, k, it, rt, w;
            if (t != null) a = t, v = i, y = u, p = f; else if (y = p = -(a = v = Infinity), d = [], g = [], nt = n.length, c) for (e = 0; e < nt; ++e) l = n[e], l.x < a && (a = l.x), l.y < v && (v = l.y), l.x > y && (y = l.x), l.y > p && (p = l.y), d.push(l.x), g.push(l.y); else for (e = 0; e < nt; ++e) b = +ft(l = n[e], e), k = +et(l, e), b < a && (a = b), k < v && (v = k), b > y && (y = b), k > p && (p = k), d.push(b), g.push(k);
            if (it = y - a, rt = p - v, it > rt ? p = v + it : y = a + rt, w = vp(), w.add = function (n) {
                ut(w, n, +ft(n, ++e), +et(n, e), a, v, y, p)
            }, w.visit = function (n) {
                hu(n, w, a, v, y, p)
            }, e = -1, t == null) {
                while (++e < nt) ut(w, n[e], d[e], g[e], a, v, y, p);
                --e
            } else n.forEach(w.add);
            return d = g = n = l = null, w
        }

        var s = or, h = iu, c;
        return (c = arguments.length) ? (s = hn, h = cn, c === 3 && (f = i, u = t, i = t = 0), e(n)) : (e.x = function (n) {
            return arguments.length ? (s = n, e) : s
        }, e.y = function (n) {
            return arguments.length ? (h = n, e) : h
        }, e.extent = function (n) {
            return arguments.length ? (n == null ? t = i = u = f = null : (t = +n[0][0], i = +n[0][1], u = +n[1][0], f = +n[1][1]), e) : t == null ? null : [[t, i], [u, f]]
        }, e.size = function (n) {
            return arguments.length ? (n == null ? t = i = u = f = null : (t = i = 0, u = +n[0], f = +n[1]), e) : t == null ? null : [u - t, f - i]
        }, e)
    };
    n.interpolateRgb = ic;
    n.interpolateObject = yp;
    n.interpolateNumber = at;
    n.interpolateString = pp;
    cu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    n.interpolate = vi;
    n.interpolators = [function (n, t) {
        var i = typeof t;
        return (i === "string" ? wr.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? ic : pp : t instanceof di ? ic : Array.isArray(t) ? ae : i === "object" && isNaN(t) ? yp : at)(n, t)
    }];
    n.interpolateArray = ae;
    var wp = function () {
        return a
    }, ln = n.map({
        linear: wp, poly: bn, quad: function () {
            return yn
        }, cubic: function () {
            return pn
        }, sin: function () {
            return kn
        }, exp: function () {
            return dn
        }, circle: function () {
            return gn
        }, elastic: ntt, back: ttt, bounce: function () {
            return itt
        }
    }), an = n.map({
        "in": a, out: bp, "in-out": kp, "out-in": function (n) {
            return kp(bp(n))
        }
    });
    n.ease = function (n) {
        var t = n.indexOf("-"), i = t >= 0 ? n.substring(0, t) : n, r = t >= 0 ? n.substring(t + 1) : "in";
        return i = ln.get(i) || wp, r = an.get(r) || a, vn(r(i.apply(null, cl.call(arguments, 1))))
    };
    n.interpolateHcl = rtt;
    n.interpolateHsl = utt;
    n.interpolateLab = ftt;
    n.interpolateRound = dp;
    n.transform = function (t) {
        var i = it.createElementNS(n.ns.prefix.svg, "g");
        return (n.transform = function (n) {
            if (n != null) {
                i.setAttribute("transform", n);
                var t = i.transform.baseVal.consolidate()
            }
            return new gp(t ? t.matrix : iw)
        })(t)
    };
    gp.prototype.toString = function () {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    iw = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};
    n.interpolateTransform = rw;
    n.layout = {};
    n.layout.bundle = function () {
        return function (n) {
            for (var t = [], i = -1, r = n.length; ++i < r;) t.push(htt(n[i]));
            return t
        }
    };
    n.layout.chord = function () {
        function c() {
            var b = {}, d = [], it = n.range(r), g = [], v, t, nt, c, a, p, w;
            for (i = [], u = [], v = 0, c = -1; ++c < r;) {
                for (t = 0, a = -1; ++a < r;) t += f[c][a];
                d.push(t);
                g.push(n.range(r));
                v += t
            }
            for (o && it.sort(function (n, t) {
                return o(d[n], d[t])
            }), s && g.forEach(function (n, t) {
                n.sort(function (n, i) {
                    return s(f[t][n], f[t][i])
                })
            }), v = (k - e * r) / v, t = 0, c = -1; ++c < r;) {
                for (nt = t, a = -1; ++a < r;) {
                    var y = it[c], tt = g[y][a], rt = f[y][tt], ut = t, ft = t += rt * v;
                    b[y + "-" + tt] = {index: y, subindex: tt, startAngle: ut, endAngle: ft, value: rt}
                }
                u[y] = {index: y, startAngle: nt, endAngle: t, value: (t - nt) / v};
                t += e
            }
            for (c = -1; ++c < r;) for (a = c - 1; ++a < r;) p = b[c + "-" + a], w = b[a + "-" + c], (p.value || w.value) && i.push(p.value < w.value ? {
                source: w,
                target: p
            } : {source: p, target: w});
            h && l()
        }

        function l() {
            i.sort(function (n, t) {
                return h((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
            })
        }

        var t = {}, i, u, f, r, e = 0, o, s, h;
        return t.matrix = function (n) {
            return arguments.length ? (r = (f = n) && f.length, i = u = null, t) : f
        }, t.padding = function (n) {
            return arguments.length ? (e = n, i = u = null, t) : e
        }, t.sortGroups = function (n) {
            return arguments.length ? (o = n, i = u = null, t) : o
        }, t.sortSubgroups = function (n) {
            return arguments.length ? (s = n, i = null, t) : s
        }, t.sortChords = function (n) {
            return arguments.length ? (h = n, i && l(), t) : h
        }, t.chords = function () {
            return i || c(), i
        }, t.groups = function () {
            return u || c(), u
        }, t
    };
    n.layout.force = function () {
        function d(n) {
            return function (t, i, r, u) {
                var f;
                if (t.point !== n) {
                    var o = t.cx - n.x, s = t.cy - n.y, h = u - i, e = o * o + s * s;
                    if (h * h / k < e) return e < v && (f = t.charge / e, n.px -= o * f, n.py -= s * f), !0;
                    t.point && e && e < v && (f = t.pointCharge / e, n.px -= o * f, n.py -= s * f)
                }
                return !t.charge
            }
        }

        function g(i) {
            i.px = n.event.x;
            i.py = n.event.y;
            t.resume()
        }

        var t = {}, h = n.dispatch("start", "tick", "end"), f = [1, 1], c, r, l = .9, o = ptt, s = wtt, e = -30,
            v = btt, b = .1, k = .64, i = [], u = [], y, p, w;
        return t.tick = function () {
            if ((r *= .99) < .005) return h.end({type: "end", alpha: r = 0}), !0;
            for (var nt = i.length, it = u.length, tt, t, v, g, k, s, c, a, o = 0; o < it; ++o) t = u[o], v = t.source, g = t.target, c = g.x - v.x, a = g.y - v.y, (k = c * c + a * a) && (k = r * p[o] * ((k = Math.sqrt(k)) - y[o]) / k, c *= k, a *= k, g.x -= c * (s = v.weight / (g.weight + v.weight)), g.y -= a * s, v.x += c * (s = 1 - s), v.y += a * s);
            if ((s = r * b) && (c = f[0] / 2, a = f[1] / 2, o = -1, s)) while (++o < nt) t = i[o], t.x += (c - t.x) * s, t.y += (a - t.y) * s;
            if (e) for (fw(tt = n.geom.quadtree(i), r, w), o = -1; ++o < nt;) (t = i[o]).fixed || tt.visit(d(t));
            for (o = -1; ++o < nt;) t = i[o], t.fixed ? (t.x = t.px, t.y = t.py) : (t.x -= (t.px - (t.px = t.x)) * l, t.y -= (t.py - (t.py = t.y)) * l);
            h.tick({type: "tick", alpha: r})
        }, t.nodes = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t.links = function (n) {
            return arguments.length ? (u = n, t) : u
        }, t.size = function (n) {
            return arguments.length ? (f = n, t) : f
        }, t.linkDistance = function (n) {
            return arguments.length ? (o = typeof n == "function" ? n : +n, t) : o
        }, t.distance = t.linkDistance, t.linkStrength = function (n) {
            return arguments.length ? (s = typeof n == "function" ? n : +n, t) : s
        }, t.friction = function (n) {
            return arguments.length ? (l = +n, t) : l
        }, t.charge = function (n) {
            return arguments.length ? (e = typeof n == "function" ? n : +n, t) : e
        }, t.chargeDistance = function (n) {
            return arguments.length ? (v = n * n, t) : Math.sqrt(v)
        }, t.gravity = function (n) {
            return arguments.length ? (b = +n, t) : b
        }, t.theta = function (n) {
            return arguments.length ? (k = n * n, t) : Math.sqrt(k)
        }, t.alpha = function (i) {
            return arguments.length ? (i = +i, r ? r = i > 0 ? i : 0 : i > 0 && (h.start({
                type: "start",
                alpha: r = i
            }), n.timer(t.tick)), t) : r
        }, t.start = function () {
            function a(t, i) {
                var f;
                if (!c) {
                    for (c = new Array(h), r = 0; r < h; ++r) c[r] = [];
                    for (r = 0; r < o; ++r) f = u[r], c[f.source.index].push(f.target), c[f.target.index].push(f.source)
                }
                for (var e = c[n], r = -1, o = e.length, s; ++r < o;) if (!isNaN(s = e[r][t])) return s;
                return Math.random() * i
            }

            for (var h = i.length, l = u.length, v = f[0], b = f[1], c, r, n = 0; n < h; ++n) (r = i[n]).index = n, r.weight = 0;
            for (n = 0; n < l; ++n) r = u[n], typeof r.source == "number" && (r.source = i[r.source]), typeof r.target == "number" && (r.target = i[r.target]), ++r.source.weight, ++r.target.weight;
            for (n = 0; n < h; ++n) r = i[n], isNaN(r.x) && (r.x = a("x", v)), isNaN(r.y) && (r.y = a("y", b)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
            if (y = [], typeof o == "function") for (n = 0; n < l; ++n) y[n] = +o.call(this, u[n], n); else for (n = 0; n < l; ++n) y[n] = o;
            if (p = [], typeof s == "function") for (n = 0; n < l; ++n) p[n] = +s.call(this, u[n], n); else for (n = 0; n < l; ++n) p[n] = s;
            if (w = [], typeof e == "function") for (n = 0; n < h; ++n) w[n] = +e.call(this, i[n], n); else for (n = 0; n < h; ++n) w[n] = e;
            return t.resume()
        }, t.resume = function () {
            return t.alpha(.1)
        }, t.stop = function () {
            return t.alpha(0)
        }, t.drag = function () {
            if (c || (c = n.behavior.drag().origin(a).on("dragstart.force", ltt).on("drag.force", g).on("dragend.force", att)), !arguments.length) return c;
            this.on("mouseover.force", vtt).on("mouseout.force", ytt).call(c)
        }, n.rebind(t, h, "on")
    };
    var ptt = 20, wtt = 1, btt = Infinity;
    n.layout.hierarchy = function () {
        function u(f, e, o) {
            var s = r.call(n, f, e);
            if (f.depth = e, o.push(f), s && (c = s.length)) {
                for (var h = -1, c, a = f.children = new Array(c), v = 0, y = e + 1, l; ++h < c;) l = a[h] = u(s[h], y, o), l.parent = f, v += l.value;
                i && a.sort(i);
                t && (f.value = v)
            } else delete f.children, t && (f.value = +t.call(n, f, e) || 0);
            return f
        }

        function f(i, r) {
            var e = i.children, u = 0, o, s, h;
            if (e && (s = e.length)) for (o = -1, h = r + 1; ++o < s;) u += f(e[o], h); else t && (u = +t.call(n, i, r) || 0);
            return t && (i.value = u), u
        }

        function n(n) {
            var t = [];
            return u(n, 0, t), t
        }

        var i = gtt, r = ktt, t = dtt;
        return n.sort = function (t) {
            return arguments.length ? (i = t, n) : i
        }, n.children = function (t) {
            return arguments.length ? (r = t, n) : r
        }, n.value = function (i) {
            return arguments.length ? (t = i, n) : t
        }, n.revalue = function (n) {
            return f(n, 0), n
        }, n
    };
    n.layout.partition = function () {
        function u(n, t, i, r) {
            var f = n.children, e, o, s, h;
            if (n.x = t, n.y = n.depth * r, n.dx = i, n.dy = r, f && (o = f.length)) for (e = -1, i = n.value ? i / n.value : 0; ++e < o;) u(s = f[e], t, h = s.value * i, r), t += h
        }

        function f(n) {
            var t = n.children, i = 0, r, u;
            if (t && (u = t.length)) for (r = -1; ++r < u;) i = Math.max(i, f(t[r]));
            return 1 + i
        }

        function i(n, i) {
            var e = r.call(this, n, i);
            return u(e[0], 0, t[0], t[1] / f(e[0])), e
        }

        var r = n.layout.hierarchy(), t = [1, 1];
        return i.size = function (n) {
            return arguments.length ? (t = n, i) : t
        }, lu(i, r)
    };
    n.layout.pie = function () {
        function t(e) {
            var o = e.map(function (n, i) {
                    return +f.call(t, n, i)
                }), s = +(typeof r == "function" ? r.apply(this, arguments) : r),
                l = ((typeof u == "function" ? u.apply(this, arguments) : u) - s) / n.sum(o), c = n.range(e.length), h;
            return i != null && c.sort(i === rc ? function (n, t) {
                return o[t] - o[n]
            } : function (n, t) {
                return i(e[n], e[t])
            }), h = [], c.forEach(function (n) {
                var t;
                h[n] = {data: e[n], value: t = o[n], startAngle: s, endAngle: s += t * l}
            }), h
        }

        var f = Number, i = rc, r = 0, u = k;
        return t.value = function (n) {
            return arguments.length ? (f = n, t) : f
        }, t.sort = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t.startAngle = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.endAngle = function (n) {
            return arguments.length ? (u = n, t) : u
        }, t
    };
    rc = {};
    n.layout.stack = function () {
        function t(s, h) {
            var l = s.map(function (n, i) {
                return r.call(t, n, i)
            }), a = l.map(function (n) {
                return n.map(function (n, i) {
                    return [e.call(t, n, i), o.call(t, n, i)]
                })
            }), y = u.call(t, a, h);
            l = n.permute(l, y);
            a = n.permute(a, y);
            for (var w = f.call(t, a, h), b = l.length, k = l[0].length, v, p, c = 0; c < k; ++c) for (i.call(t, l[0][c], p = w[c], a[0][c][1]), v = 1; v < b; ++v) i.call(t, l[v][c], p += a[v - 1][c][1], a[v][c][1]);
            return s
        }

        var r = a, u = uc, f = fc, i = rit, e = tit, o = iit;
        return t.values = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.order = function (n) {
            return arguments.length ? (u = typeof n == "function" ? n : ew.get(n) || uc, t) : u
        }, t.offset = function (n) {
            return arguments.length ? (f = typeof n == "function" ? n : ow.get(n) || fc, t) : f
        }, t.x = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function (n) {
            return arguments.length ? (o = n, t) : o
        }, t.out = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t
    };
    ew = n.map({
        "inside-out": function (t) {
            for (var u = t.length, i, f = t.map(uit), e = t.map(fit), l = n.range(u).sort(function (n, t) {
                return f[n] - f[t]
            }), o = 0, s = 0, h = [], c = [], r = 0; r < u; ++r) i = l[r], o < s ? (o += e[i], h.push(i)) : (s += e[i], c.push(i));
            return c.reverse().concat(h)
        }, reverse: function (t) {
            return n.range(t.length).reverse()
        }, "default": uc
    });
    ow = n.map({
        silhouette: function (n) {
            for (var s = n.length, f = n[0].length, e = [], u = 0, r, i, o = [], t = 0; t < f; ++t) {
                for (r = 0, i = 0; r < s; r++) i += n[r][t][1];
                i > u && (u = i);
                e.push(i)
            }
            for (t = 0; t < f; ++t) o[t] = (u - e[t]) / 2;
            return o
        }, wiggle: function (n) {
            var a = n.length, h = n[0], v = h.length, i, t, r, u, c, l, f, e, o, s = [];
            for (s[0] = e = o = 0, t = 1; t < v; ++t) {
                for (i = 0, u = 0; i < a; ++i) u += n[i][t][1];
                for (i = 0, c = 0, f = h[t][0] - h[t - 1][0]; i < a; ++i) {
                    for (r = 0, l = (n[i][t][1] - n[i][t - 1][1]) / (2 * f); r < i; ++r) l += (n[r][t][1] - n[r][t - 1][1]) / f;
                    c += l * n[i][t][1]
                }
                s[t] = e -= u ? c / u * f : 0;
                e < o && (o = e)
            }
            for (t = 0; t < v; ++t) s[t] -= o;
            return s
        }, expand: function (n) {
            for (var r = n.length, f = n[0].length, o = 1 / r, t, u, e = [], i = 0; i < f; ++i) {
                for (t = 0, u = 0; t < r; t++) u += n[t][i][1];
                if (u) for (t = 0; t < r; t++) n[t][i][1] /= u; else for (t = 0; t < r; t++) n[t][i][1] = o
            }
            for (i = 0; i < f; ++i) e[i] = 0;
            return e
        }, zero: fc
    });
    n.layout.histogram = function () {
        function t(t, e) {
            for (var l = [], s = t.map(r, this), a = u.call(this, s, e), h = f.call(this, a, s, e), o, e = -1, y = s.length, v = h.length - 1, p = i ? 1 : 1 / y, c; ++e < v;) o = l[e] = [], o.dx = h[e + 1] - (o.x = h[e]), o.y = 0;
            if (v > 0) for (e = -1; ++e < y;) c = s[e], c >= a[0] && c <= a[1] && (o = l[n.bisect(h, c, 1, v) - 1], o.y += p, o.push(t[e]));
            return l
        }

        var i = !0, r = Number, u = sit, f = oit;
        return t.value = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.range = function (n) {
            return arguments.length ? (u = o(n), t) : u
        }, t.bins = function (n) {
            return arguments.length ? (f = typeof n == "number" ? function (t) {
                return sw(t, n)
            } : o(n), t) : f
        }, t.frequency = function (n) {
            return arguments.length ? (i = !!n, t) : i
        }, t
    };
    n.layout.tree = function () {
        function r(n, r) {
            function c(n, t) {
                var f = n.children, r = n._tree, o;
                if (f && (s = f.length)) {
                    for (var s, h = f[0], e, l = h, u, a = -1; ++a < s;) u = f[a], c(u, e), l = v(u, e, l), e = u;
                    ait(n);
                    o = .5 * (h._tree.prelim + u._tree.prelim);
                    t ? (r.prelim = t._tree.prelim + i(n, t), r.mod = r.prelim - o) : r.prelim = o
                } else t && (r.prelim = t._tree.prelim + i(n, t))
            }

            function l(n, t) {
                var i, r, u;
                if (n.x = n._tree.prelim + t, i = n.children, i && (u = i.length)) for (r = -1, t += n._tree.mod; ++r < u;) l(i[r], t)
            }

            function v(n, t, r) {
                if (t) {
                    for (var f = n, e = n, u = t, o = n.parent.children[0], h = f._tree.mod, c = e._tree.mod, l = u._tree.mod, a = o._tree.mod, s; u = oc(u), f = ec(f), u && f;) o = ec(o), e = oc(e), e._tree.ancestor = n, s = u._tree.prelim + l - f._tree.prelim - h + i(u, f), s > 0 && (vit(yit(u, n, r), n, s), h += s, c += s), l += u._tree.mod, h += f._tree.mod, a += o._tree.mod, c += e._tree.mod;
                    u && !oc(e) && (e._tree.thread = u, e._tree.mod += l - c);
                    f && !ec(o) && (o._tree.thread = f, o._tree.mod += h - a, r = n)
                }
                return r
            }

            var h = f.call(this, n, r), e = h[0];
            vt(e, function (n, t) {
                n._tree = {ancestor: n, prelim: 0, mod: 0, change: 0, shift: 0, number: t ? t._tree.number + 1 : 0}
            });
            c(e);
            l(e, -e._tree.prelim);
            var o = ve(e, cit), s = ve(e, hit), y = ve(e, lit), a = o.x - i(o, s) / 2, p = s.x + i(s, o) / 2,
                w = y.depth || 1;
            return vt(e, u ? function (n) {
                n.x *= t[0];
                n.y = n.depth * t[1];
                delete n._tree
            } : function (n) {
                n.x = (n.x - a) / (p - a) * t[0];
                n.y = n.depth / w * t[1];
                delete n._tree
            }), h
        }

        var f = n.layout.hierarchy().sort(null).value(null), i = hw, t = [1, 1], u = !1;
        return r.separation = function (n) {
            return arguments.length ? (i = n, r) : i
        }, r.size = function (n) {
            return arguments.length ? (u = (t = n) == null, r) : u ? null : t
        }, r.nodeSize = function (n) {
            return arguments.length ? (u = (t = n) != null, r) : u ? t : null
        }, lu(r, f)
    };
    n.layout.pack = function () {
        function i(n, i) {
            var c = f.call(this, n, i), e = c[0], o = u[0], s = u[1],
                l = t == null ? Math.sqrt : typeof t == "function" ? t : function () {
                    return t
                }, h;
            return e.x = e.y = 0, vt(e, function (n) {
                n.r = +l(n.value)
            }), vt(e, aw), r && (h = r * (t ? 1 : Math.max(2 * e.r / o, 2 * e.r / s)) / 2, vt(e, function (n) {
                n.r += h
            }), vt(e, aw), vt(e, function (n) {
                n.r -= h
            })), vw(e, o / 2, s / 2, t ? 1 : 1 / Math.max(2 * e.r / o, 2 * e.r / s)), c
        }

        var f = n.layout.hierarchy().sort(pit), r = 0, u = [1, 1], t;
        return i.size = function (n) {
            return arguments.length ? (u = n, i) : u
        }, i.radius = function (n) {
            return arguments.length ? (t = n == null || typeof n == "function" ? n : +n, i) : t
        }, i.padding = function (n) {
            return arguments.length ? (r = +n, i) : r
        }, lu(i, f)
    };
    n.layout.cluster = function () {
        function i(n, i) {
            var c = f.call(this, n, i), e = c[0], o, a = 0;
            vt(e, function (n) {
                var t = n.children;
                t && t.length ? (n.x = dit(t), n.y = kit(t)) : (n.x = o ? a += r(n, o) : 0, n.y = 0, o = n)
            });
            var s = pw(e), h = ww(e), l = s.x - r(s, h) / 2, v = h.x + r(h, s) / 2;
            return vt(e, u ? function (n) {
                n.x = (n.x - e.x) * t[0];
                n.y = (e.y - n.y) * t[1]
            } : function (n) {
                n.x = (n.x - l) / (v - l) * t[0];
                n.y = (1 - (e.y ? n.y / e.y : 1)) * t[1]
            }), c
        }

        var f = n.layout.hierarchy().sort(null).value(null), r = hw, t = [1, 1], u = !1;
        return i.separation = function (n) {
            return arguments.length ? (r = n, i) : r
        }, i.size = function (n) {
            return arguments.length ? (u = (t = n) == null, i) : u ? null : t
        }, i.nodeSize = function (n) {
            return arguments.length ? (u = (t = n) != null, i) : u ? t : null
        }, lu(i, f)
    };
    n.layout.treemap = function () {
        function c(n, t) {
            for (var r = -1, f = n.length, u, i; ++r < f;) i = (u = n[r]).value * (t < 0 ? 0 : t), u.area = isNaN(i) || i <= 0 ? 0 : i
        }

        function v(n) {
            var u = n.children;
            if (u && u.length) {
                var r = s(n), t = [], f = u.slice(), h, o = Infinity, a,
                    e = i === "slice" ? r.dx : i === "dice" ? r.dy : i === "slice-dice" ? n.depth & 1 ? r.dy : r.dx : Math.min(r.dx, r.dy),
                    y;
                for (c(f, r.dx * r.dy / n.value), t.area = 0; (y = f.length) > 0;) t.push(h = f[y - 1]), t.area += h.area, i !== "squarify" || (a = p(t, e)) <= o ? (f.pop(), o = a) : (t.area -= t.pop().area, l(t, e, r, !1), e = Math.min(r.dx, r.dy), t.length = t.area = 0, o = Infinity);
                t.length && (l(t, e, r, !0), t.length = t.area = 0);
                u.forEach(v)
            }
        }

        function y(n) {
            var u = n.children;
            if (u && u.length) {
                var i = s(n), f = u.slice(), r, t = [];
                for (c(f, i.dx * i.dy / n.value), t.area = 0; r = f.pop();) t.push(r), t.area += r.area, r.z != null && (l(t, r.z ? i.dx : i.dy, i, !f.length), t.length = t.area = 0);
                u.forEach(y)
            }
        }

        function p(n, t) {
            for (var i = n.area, r, u = 0, f = Infinity, o = -1, s = n.length; ++o < s;) (r = n[o].area) && (r < f && (f = r), r > u && (u = r));
            return i *= i, t *= t, i ? Math.max(t * u * e / i, i / (t * f * e)) : Infinity
        }

        function l(n, t, i, u) {
            var h = -1, c = n.length, o = i.x, s = i.y, e = t ? r(n.area / t) : 0, f;
            if (t == i.dx) {
                for ((u || e > i.dy) && (e = i.dy); ++h < c;) f = n[h], f.x = o, f.y = s, f.dy = e, o += f.dx = Math.min(i.x + i.dx - o, e ? r(f.area / e) : 0);
                f.z = !0;
                f.dx += i.x + i.dx - o;
                i.y += e;
                i.dy -= e
            } else {
                for ((u || e > i.dx) && (e = i.dx); ++h < c;) f = n[h], f.x = o, f.y = s, f.dx = e, s += f.dy = Math.min(i.y + i.dy - s, e ? r(f.area / e) : 0);
                f.z = !1;
                f.dy += i.y + i.dy - s;
                i.x += e;
                i.dx -= e
            }
        }

        function t(n) {
            var i = u || o(n), t = i[0];
            return t.x = 0, t.y = 0, t.dx = f[0], t.dy = f[1], u && o.revalue(t), c([t], t.dx * t.dy / t.value), (u ? y : v)(t), h && (u = i), i
        }

        var o = n.layout.hierarchy(), r = Math.round, f = [1, 1], a = null, s = hc, h = !1, u, i = "squarify",
            e = .5 * (1 + Math.sqrt(5));
        return t.size = function (n) {
            return arguments.length ? (f = n, t) : f
        }, t.padding = function (n) {
            function u(i) {
                var r = n.call(t, i, i.depth);
                return r == null ? hc(i) : bw(i, typeof r == "number" ? [r, r, r, r] : r)
            }

            function i(t) {
                return bw(t, n)
            }

            if (!arguments.length) return a;
            var r;
            return s = (a = n) == null ? hc : (r = typeof n) == "function" ? u : r === "number" ? (n = [n, n, n, n], i) : i, t
        }, t.round = function (n) {
            return arguments.length ? (r = n ? Math.round : Number, t) : r != Number
        }, t.sticky = function (n) {
            return arguments.length ? (h = n, u = null, t) : h
        }, t.ratio = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.mode = function (n) {
            return arguments.length ? (i = n + "", t) : i
        }, lu(t, o)
    };
    n.random = {
        normal: function (n, t) {
            var i = arguments.length;
            return i < 2 && (t = 1), i < 1 && (n = 0), function () {
                var r, u, i;
                do r = Math.random() * 2 - 1, u = Math.random() * 2 - 1, i = r * r + u * u; while (!i || i > 1);
                return n + t * r * Math.sqrt(-2 * Math.log(i) / i)
            }
        }, logNormal: function () {
            var t = n.random.normal.apply(n, arguments);
            return function () {
                return Math.exp(t())
            }
        }, bates: function (t) {
            var i = n.random.irwinHall(t);
            return function () {
                return i() / t
            }
        }, irwinHall: function (n) {
            return function () {
                for (var t = 0, i = 0; i < n; i++) t += Math.random();
                return t
            }
        }
    };
    n.scale = {};
    kw = {floor: a, ceil: a};
    n.scale.linear = function () {
        return dw([0, 1], [0, 1], vi, !1)
    };
    nb = {s: 1, g: 1, p: 1, r: 1, e: 1};
    n.scale.log = function () {
        return tb(n.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    yc = n.format(".0e");
    ib = {
        floor: function (n) {
            return -Math.ceil(-n)
        }, ceil: function (n) {
            return -Math.floor(-n)
        }
    };
    n.scale.pow = function () {
        return rb(n.scale.linear(), 1, [0, 1])
    };
    n.scale.sqrt = function () {
        return n.scale.pow().exponent(.5)
    };
    n.scale.ordinal = function () {
        return ub([], {t: "range", a: [[]]})
    };
    n.scale.category10 = function () {
        return n.scale.ordinal().range(rrt)
    };
    n.scale.category20 = function () {
        return n.scale.ordinal().range(urt)
    };
    n.scale.category20b = function () {
        return n.scale.ordinal().range(frt)
    };
    n.scale.category20c = function () {
        return n.scale.ordinal().range(ert)
    };
    var rrt = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(of),
        urt = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(of),
        frt = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(of),
        ert = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(of);
    n.scale.quantile = function () {
        return fb([], [])
    };
    n.scale.quantize = function () {
        return eb(0, 1, [0, 1])
    };
    n.scale.threshold = function () {
        return ob([.5], [0, 1])
    };
    n.scale.identity = function () {
        return sb([0, 1])
    };
    n.svg = {};
    n.svg.arc = function () {
        function n() {
            var e = t.apply(this, arguments), n = i.apply(this, arguments), o = r.apply(this, arguments) + ui,
                s = u.apply(this, arguments) + ui, h = (s < o && (h = o, o = s, s = h), s - o), c = h < f ? "0" : "1",
                l = Math.cos(o), a = Math.sin(o), v = Math.cos(s), y = Math.sin(s);
            return h >= hb ? e ? "M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "M0," + e + "A" + e + "," + e + " 0 1,0 0," + -e + "A" + e + "," + e + " 0 1,0 0," + e + "Z" : "M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "Z" : e ? "M" + n * l + "," + n * a + "A" + n + "," + n + " 0 " + c + ",1 " + n * v + "," + n * y + "L" + e * v + "," + e * y + "A" + e + "," + e + " 0 " + c + ",0 " + e * l + "," + e * a + "Z" : "M" + n * l + "," + n * a + "A" + n + "," + n + " 0 " + c + ",1 " + n * v + "," + n * y + "L0,0Z"
        }

        var t = ort, i = srt, r = cb, u = lb;
        return n.innerRadius = function (i) {
            return arguments.length ? (t = o(i), n) : t
        }, n.outerRadius = function (t) {
            return arguments.length ? (i = o(t), n) : i
        }, n.startAngle = function (t) {
            return arguments.length ? (r = o(t), n) : r
        }, n.endAngle = function (t) {
            return arguments.length ? (u = o(t), n) : u
        }, n.centroid = function () {
            var n = (t.apply(this, arguments) + i.apply(this, arguments)) / 2,
                f = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + ui;
            return [Math.cos(f) * n, Math.sin(f) * n]
        }, n
    };
    ui = -v;
    hb = k - t;
    n.svg.line = function () {
        return ab(a)
    };
    be = n.map({
        linear: d,
        "linear-closed": hrt,
        step: crt,
        "step-before": pc,
        "step-after": wc,
        basis: vb,
        "basis-open": yrt,
        "basis-closed": prt,
        bundle: wrt,
        cardinal: vrt,
        "cardinal-open": lrt,
        "cardinal-closed": art,
        monotone: drt
    });
    be.forEach(function (n, t) {
        t.key = n;
        t.closed = /-closed$/.test(n)
    });
    var yb = [0, 2 / 3, 1 / 3, 0], pb = [0, 1 / 3, 2 / 3, 0], fi = [0, 1 / 6, 2 / 3, 1 / 6];
    n.svg.line.radial = function () {
        var n = ab(wb);
        return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
    };
    pc.reverse = wc;
    wc.reverse = pc;
    n.svg.area = function () {
        return bb(a)
    };
    n.svg.area.radial = function () {
        var n = bb(wb);
        return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
    };
    n.svg.chord = function () {
        function n(n, r) {
            var u = h(this, t, n, r), f = h(this, i, n, r);
            return "M" + u.p0 + c(u.r, u.p1, u.a1 - u.a0) + (l(u, f) ? s(u.r, u.p1, u.r, u.p0) : s(u.r, u.p1, f.r, f.p0) + c(f.r, f.p1, f.a1 - f.a0) + s(f.r, f.p1, u.r, u.p0)) + "Z"
        }

        function h(n, t, i, f) {
            var s = t.call(n, i, f), o = r.call(n, s, f), h = u.call(n, s, f) + ui, c = e.call(n, s, f) + ui;
            return {r: o, a0: h, a1: c, p0: [o * Math.cos(h), o * Math.sin(h)], p1: [o * Math.cos(c), o * Math.sin(c)]}
        }

        function l(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1
        }

        function c(n, t, i) {
            return "A" + n + "," + n + " 0 " + +(i > f) + ",1 " + t
        }

        function s(n, t, i, r) {
            return "Q 0,0 " + r
        }

        var t = oh, i = sh, r = grt, u = cb, e = lb;
        return n.radius = function (t) {
            return arguments.length ? (r = o(t), n) : r
        }, n.source = function (i) {
            return arguments.length ? (t = o(i), n) : t
        }, n.target = function (t) {
            return arguments.length ? (i = o(t), n) : i
        }, n.startAngle = function (t) {
            return arguments.length ? (u = o(t), n) : u
        }, n.endAngle = function (t) {
            return arguments.length ? (e = o(t), n) : e
        }, n
    };
    n.svg.diagonal = function () {
        function n(n, u) {
            var e = t.call(this, n, u), o = i.call(this, n, u), s = (e.y + o.y) / 2,
                f = [e, {x: e.x, y: s}, {x: o.x, y: s}, o];
            return f = f.map(r), "M" + f[0] + "C" + f[1] + " " + f[2] + " " + f[3]
        }

        var t = oh, i = sh, r = kb;
        return n.source = function (i) {
            return arguments.length ? (t = o(i), n) : t
        }, n.target = function (t) {
            return arguments.length ? (i = o(t), n) : i
        }, n.projection = function (t) {
            return arguments.length ? (r = t, n) : r
        }, n
    };
    n.svg.diagonal.radial = function () {
        var t = n.svg.diagonal(), i = kb, r = t.projection;
        return t.projection = function (n) {
            return arguments.length ? r(nut(i = n)) : i
        }, t
    };
    n.svg.symbol = function () {
        function n(n, r) {
            return (gc.get(t.call(this, n, r)) || db)(i.call(this, n, r))
        }

        var t = iut, i = tut;
        return n.type = function (i) {
            return arguments.length ? (t = o(i), n) : t
        }, n.size = function (t) {
            return arguments.length ? (i = o(t), n) : i
        }, n
    };
    gc = n.map({
        circle: db, cross: function (n) {
            var t = Math.sqrt(n / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        }, diamond: function (n) {
            var t = Math.sqrt(n / (2 * nl)), i = t * nl;
            return "M0," + -t + "L" + i + ",0 0," + t + " " + -i + ",0Z"
        }, square: function (n) {
            var t = Math.sqrt(n) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        }, "triangle-down": function (n) {
            var t = Math.sqrt(n / vu), i = t * vu / 2;
            return "M0," + i + "L" + t + "," + -i + " " + -t + "," + -i + "Z"
        }, "triangle-up": function (n) {
            var t = Math.sqrt(n / vu), i = t * vu / 2;
            return "M0," + -i + "L" + t + "," + i + " " + -t + "," + i + "Z"
        }
    });
    n.svg.symbolTypes = gc.keys();
    vu = Math.sqrt(3);
    nl = Math.tan(30 * u);
    l = [];
    tl = 0;
    l.call = e.call;
    l.empty = e.empty;
    l.node = e.node;
    l.size = e.size;
    n.transition = function (n) {
        return arguments.length ? yi ? n.transition() : n : vo.transition()
    };
    n.transition.prototype = l;
    l.select = function (n) {
        var f = this.id, o = [], e, i, t, r, s;
        for (n = lo(n), r = -1, s = this.length; ++r < s;) {
            o.push(e = []);
            for (var h = this[r], u = -1, c = h.length; ++u < c;) (t = h[u]) && (i = n.call(t, t.__data__, u, r)) ? ("__data__" in t && (i.__data__ = t.__data__), ge(i, u, f, t.__transition__[f]), e.push(i)) : e.push(null)
        }
        return yu(o, f)
    };
    l.selectAll = function (n) {
        var u = this.id, s = [], h, f, t, e, c, i, l, r, v;
        for (n = na(n), i = -1, l = this.length; ++i < l;) for (var a = this[i], o = -1, y = a.length; ++o < y;) if (t = a[o]) for (c = t.__transition__[u], f = n.call(t, t.__data__, o, i), s.push(h = []), r = -1, v = f.length; ++r < v;) (e = f[r]) && ge(e, r, u, c), h.push(e);
        return yu(s, u)
    };
    l.filter = function (n) {
        var f = [], e, u, i, t, o;
        for (typeof n != "function" && (n = ha(n)), t = 0, o = this.length; t < o; t++) {
            f.push(e = []);
            for (var u = this[t], r = 0, s = u.length; r < s; r++) (i = u[r]) && n.call(i, i.__data__, r, t) && e.push(i)
        }
        return yu(f, this.id)
    };
    l.tween = function (n, t) {
        var i = this.id;
        return arguments.length < 2 ? this.node().__transition__[i].tween.get(n) : dt(this, t == null ? function (t) {
            t.__transition__[i].tween.remove(n)
        } : function (r) {
            r.__transition__[i].tween.set(n, t)
        })
    };
    l.attr = function (t, i) {
        function f() {
            this.removeAttribute(r)
        }

        function e() {
            this.removeAttributeNS(r.space, r.local)
        }

        function o(n) {
            return n == null ? f : (n += "", function () {
                var t = this.getAttribute(r), i;
                return t !== n && (i = u(t, n), function (n) {
                    this.setAttribute(r, i(n))
                })
            })
        }

        function s(n) {
            return n == null ? e : (n += "", function () {
                var t = this.getAttributeNS(r.space, r.local), i;
                return t !== n && (i = u(t, n), function (n) {
                    this.setAttributeNS(r.space, r.local, i(n))
                })
            })
        }

        if (arguments.length < 2) {
            for (i in t) this.attr(i, t[i]);
            return this
        }
        var u = t == "transform" ? rw : vi, r = n.ns.qualify(t);
        return il(this, "attr." + t, i, r.local ? s : o)
    };
    l.attrTween = function (t, i) {
        function u(n, t) {
            var u = i.call(this, n, t, this.getAttribute(r));
            return u && function (n) {
                this.setAttribute(r, u(n))
            }
        }

        function f(n, t) {
            var u = i.call(this, n, t, this.getAttributeNS(r.space, r.local));
            return u && function (n) {
                this.setAttributeNS(r.space, r.local, u(n))
            }
        }

        var r = n.ns.qualify(t);
        return this.tween("attr." + t, r.local ? f : u)
    };
    l.style = function (n, t, i) {
        function u() {
            this.style.removeProperty(n)
        }

        function f(t) {
            return t == null ? u : (t += "", function () {
                var r = b.getComputedStyle(this, null).getPropertyValue(n), u;
                return r !== t && (u = vi(r, t), function (t) {
                    this.style.setProperty(n, u(t), i)
                })
            })
        }

        var r = arguments.length;
        if (r < 3) {
            if (typeof n != "string") {
                r < 2 && (t = "");
                for (i in n) this.style(i, n[i], t);
                return this
            }
            i = ""
        }
        return il(this, "style." + n, t, f)
    };
    l.styleTween = function (n, t, i) {
        function r(r, u) {
            var f = t.call(this, r, u, b.getComputedStyle(this, null).getPropertyValue(n));
            return f && function (t) {
                this.style.setProperty(n, f(t), i)
            }
        }

        return arguments.length < 3 && (i = ""), this.tween("style." + n, r)
    };
    l.text = function (n) {
        return il(this, "text", n, rut)
    };
    l.remove = function () {
        return this.each("end.transition", function () {
            var n;
            this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this)
        })
    };
    l.ease = function (t) {
        var i = this.id;
        return arguments.length < 1 ? this.node().__transition__[i].ease : (typeof t != "function" && (t = n.ease.apply(n, arguments)), dt(this, function (n) {
            n.__transition__[i].ease = t
        }))
    };
    l.delay = function (n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].delay : dt(this, typeof n == "function" ? function (i, r, u) {
            i.__transition__[t].delay = +n.call(i, i.__data__, r, u)
        } : (n = +n, function (i) {
            i.__transition__[t].delay = n
        }))
    };
    l.duration = function (n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].duration : dt(this, typeof n == "function" ? function (i, r, u) {
            i.__transition__[t].duration = Math.max(1, n.call(i, i.__data__, r, u))
        } : (n = Math.max(1, n), function (i) {
            i.__transition__[t].duration = n
        }))
    };
    l.each = function (t, i) {
        var r = this.id, u, f;
        return arguments.length < 2 ? (u = de, f = yi, yi = r, dt(this, function (n, i, u) {
            de = n.__transition__[r];
            t.call(n, n.__data__, i, u)
        }), de = u, yi = f) : dt(this, function (u) {
            var f = u.__transition__[r];
            (f.event || (f.event = n.dispatch("start", "end"))).on(t, i)
        }), this
    };
    l.transition = function () {
        for (var h = this.id, f = ++tl, e = [], o, u, n, t, i = 0, s = this.length; i < s; i++) {
            e.push(o = []);
            for (var u = this[i], r = 0, c = u.length; r < c; r++) (n = u[r]) && (t = Object.create(n.__transition__[h]), t.delay += t.duration, ge(n, r, f, t)), o.push(n)
        }
        return yu(e, f)
    };
    n.svg.axis = function () {
        function i(i) {
            i.each(function () {
                var ut = n.select(this), p = this.__chart__ || e, i = this.__chart__ = e.copy(),
                    ot = s == null ? i.ticks ? i.ticks.apply(i, o) : i.domain() : s,
                    st = h == null ? i.tickFormat ? i.tickFormat.apply(i, o) : a : h,
                    w = ut.selectAll(".tick").data(ot, i),
                    y = w.enter().insert("g", ".domain").attr("class", "tick").style("opacity", t),
                    ht = n.transition(w.exit()).style("opacity", t).remove(),
                    it = n.transition(w.order()).style("opacity", 1), v, l = ye(i),
                    ft = ut.selectAll(".domain").data([0]),
                    b = (ft.enter().append("path").attr("class", "domain"), n.transition(ft)), rt, et;
                y.append("line");
                y.append("text");
                var k = y.select("line"), d = it.select("line"), g = w.select("text").text(st), nt = y.select("text"),
                    tt = it.select("text");
                switch (c) {
                    case"bottom":
                        v = nk;
                        k.attr("y2", r);
                        nt.attr("y", Math.max(r, 0) + f);
                        d.attr("x2", 0).attr("y2", r);
                        tt.attr("x", 0).attr("y", Math.max(r, 0) + f);
                        g.attr("dy", ".71em").style("text-anchor", "middle");
                        b.attr("d", "M" + l[0] + "," + u + "V0H" + l[1] + "V" + u);
                        break;
                    case"top":
                        v = nk;
                        k.attr("y2", -r);
                        nt.attr("y", -(Math.max(r, 0) + f));
                        d.attr("x2", 0).attr("y2", -r);
                        tt.attr("x", 0).attr("y", -(Math.max(r, 0) + f));
                        g.attr("dy", "0em").style("text-anchor", "middle");
                        b.attr("d", "M" + l[0] + "," + -u + "V0H" + l[1] + "V" + -u);
                        break;
                    case"left":
                        v = tk;
                        k.attr("x2", -r);
                        nt.attr("x", -(Math.max(r, 0) + f));
                        d.attr("x2", -r).attr("y2", 0);
                        tt.attr("x", -(Math.max(r, 0) + f)).attr("y", 0);
                        g.attr("dy", ".32em").style("text-anchor", "end");
                        b.attr("d", "M" + -u + "," + l[0] + "H0V" + l[1] + "H" + -u);
                        break;
                    case"right":
                        v = tk;
                        k.attr("x2", r);
                        nt.attr("x", Math.max(r, 0) + f);
                        d.attr("x2", r).attr("y2", 0);
                        tt.attr("x", Math.max(r, 0) + f).attr("y", 0);
                        g.attr("dy", ".32em").style("text-anchor", "start");
                        b.attr("d", "M" + u + "," + l[0] + "H0V" + l[1] + "H" + u)
                }
                i.rangeBand ? (rt = i, et = rt.rangeBand() / 2, p = i = function (n) {
                    return rt(n) + et
                }) : p.rangeBand ? p = i : ht.call(v, i);
                y.call(v, p);
                it.call(v, i)
            })
        }

        var e = n.scale.linear(), c = rl, r = 6, u = 6, f = 3, o = [10], s = null, h;
        return i.scale = function (n) {
            return arguments.length ? (e = n, i) : e
        }, i.orient = function (n) {
            return arguments.length ? (c = n in gb ? n + "" : rl, i) : c
        }, i.ticks = function () {
            return arguments.length ? (o = arguments, i) : o
        }, i.tickValues = function (n) {
            return arguments.length ? (s = n, i) : s
        }, i.tickFormat = function (n) {
            return arguments.length ? (h = n, i) : h
        }, i.tickSize = function (n) {
            var t = arguments.length;
            return t ? (r = +n, u = +arguments[t - 1], i) : r
        }, i.innerTickSize = function (n) {
            return arguments.length ? (r = +n, i) : r
        }, i.outerTickSize = function (n) {
            return arguments.length ? (u = +n, i) : u
        }, i.tickPadding = function (n) {
            return arguments.length ? (f = +n, i) : f
        }, i.tickSubdivide = function () {
            return arguments.length && i
        }, i
    };
    rl = "bottom";
    gb = {top: 1, right: 1, bottom: 1, left: 1};
    n.svg.brush = function () {
        function f(t) {
            t.each(function () {
                var i = n.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", w).on("touchstart.brush", w),
                    h = i.selectAll(".background").data([0]), e, o, s, t;
                h.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
                i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                e = i.selectAll(".resize").data(l, a);
                e.exit().remove();
                e.enter().append("g").attr("class", function (n) {
                    return "resize " + n
                }).style("cursor", function (n) {
                    return uut[n]
                }).append("rect").attr("x", function (n) {
                    return /[ew]$/.test(n) ? -3 : null
                }).attr("y", function (n) {
                    return /^[ns]/.test(n) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
                e.style("display", f.empty() ? "none" : null);
                o = n.transition(i);
                s = n.transition(h);
                r && (t = ye(r), s.attr("x", t[0]).attr("width", t[1] - t[0]), y(o));
                u && (t = ye(u), s.attr("y", t[0]).attr("height", t[1] - t[0]), p(o));
                v(o)
            })
        }

        function v(n) {
            n.selectAll(".resize").attr("transform", function (n) {
                return "translate(" + t[+/e$/.test(n)] + "," + i[+/^s/.test(n)] + ")"
            })
        }

        function y(n) {
            n.select(".extent").attr("x", t[0]);
            n.selectAll(".extent,.n>rect,.s>rect").attr("width", t[1] - t[0])
        }

        function p(n) {
            n.select(".extent").attr("y", i[0]);
            n.selectAll(".extent,.e>rect,.w>rect").attr("height", i[1] - i[0])
        }

        function w() {
            function at() {
                n.event.keyCode == 32 && (a || (w = null, l[0] -= t[1], l[1] -= i[1], a = 2), bt())
            }

            function vt() {
                n.event.keyCode == 32 && a == 2 && (l[0] += t[1], l[1] += i[1], a = 0, bt())
            }

            function tt() {
                var f = n.mouse(g), e = !1;
                nt && (f[0] += nt[0], f[1] += nt[1]);
                a || (n.event.altKey ? (w || (w = [(t[0] + t[1]) / 2, (i[0] + i[1]) / 2]), l[0] = t[+(f[0] < w[0])], l[1] = i[+(f[1] < w[1])]) : w = null);
                ht && ot(f, r, 0) && (y(k), e = !0);
                ct && ot(f, u, 1) && (p(k), e = !0);
                e && (v(k), rt({type: "brush", mode: a ? "move" : "resize"}))
            }

            function ot(n, r, u) {
                var k = ye(r), p = k[0], b = k[1], c = l[u], v = u ? i : t, d = v[1] - v[0], f, y;
                return a && (p -= c, b -= d + c), f = (u ? h : s) ? Math.max(p, Math.min(b, n[u])) : n[u], a ? y = (f += c) + d : (w && (c = Math.max(p, Math.min(b, 2 * w[u] - f))), c < f ? (y = f, f = c) : y = c), v[0] != f || v[1] != y ? (u ? o = null : e = null, v[0] = f, v[1] = y, !0) : void 0
            }

            function st() {
                tt();
                k.style("pointer-events", "all").selectAll(".resize").style("display", f.empty() ? "none" : null);
                n.select("body").style("cursor", null);
                ut.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
                lt();
                rt({type: "brushend"})
            }

            var g = this, it = n.select(n.event.target), rt = c.of(g, arguments), k = n.select(g), d = it.datum(),
                ht = !/^(n|s)$/.test(d) && r, ct = !/^(e|w)$/.test(d) && u, a = it.classed("extent"), lt = du(), w,
                l = n.mouse(g), nt, ut = n.select(b).on("keydown.brush", at).on("keyup.brush", vt), ft, et;
            if (n.event.changedTouches) ut.on("touchmove.brush", tt).on("touchend.brush", st); else ut.on("mousemove.brush", tt).on("mouseup.brush", st);
            k.interrupt().selectAll("*").interrupt();
            a ? (l[0] = t[0] - l[0], l[1] = i[0] - l[1]) : d ? (ft = +/w$/.test(d), et = +/^n/.test(d), nt = [t[1 - ft] - l[0], i[1 - et] - l[1]], l[0] = t[ft], l[1] = i[et]) : n.event.altKey && (w = l.slice());
            k.style("pointer-events", "none").selectAll(".resize").style("display", null);
            n.select("body").style("cursor", it.style("cursor"));
            rt({type: "brushstart"});
            tt()
        }

        var c = so(f, "brushstart", "brush", "brushend"), r = null, u = null, t = [0, 0], i = [0, 0], e, o, s = !0,
            h = !0, l = ul[0];
        return f.event = function (r) {
            r.each(function () {
                var u = c.of(this, arguments), r = {x: t, y: i, i: e, j: o}, f = this.__chart__ || r;
                this.__chart__ = r;
                yi ? n.select(this).transition().each("start.brush", function () {
                    e = f.i;
                    o = f.j;
                    t = f.x;
                    i = f.y;
                    u({type: "brushstart"})
                }).tween("brush:brush", function () {
                    var n = ae(t, r.x), f = ae(i, r.y);
                    return e = o = null, function (e) {
                        t = r.x = n(e);
                        i = r.y = f(e);
                        u({type: "brush", mode: "resize"})
                    }
                }).each("end.brush", function () {
                    e = r.i;
                    o = r.j;
                    u({type: "brush", mode: "resize"});
                    u({type: "brushend"})
                }) : (u({type: "brushstart"}), u({type: "brush", mode: "resize"}), u({type: "brushend"}))
            })
        }, f.x = function (n) {
            return arguments.length ? (r = n, l = ul[!r << 1 | !u], f) : r
        }, f.y = function (n) {
            return arguments.length ? (u = n, l = ul[!r << 1 | !u], f) : u
        }, f.clamp = function (n) {
            return arguments.length ? (r && u ? (s = !!n[0], h = !!n[1]) : r ? s = !!n : u && (h = !!n), f) : r && u ? [s, h] : r ? s : u ? h : null
        }, f.extent = function (n) {
            var s, h, c, l, a;
            return arguments.length ? (r && (s = n[0], h = n[1], u && (s = s[0], h = h[0]), e = [s, h], r.invert && (s = r(s), h = r(h)), h < s && (a = s, s = h, h = a), (s != t[0] || h != t[1]) && (t = [s, h])), u && (c = n[0], l = n[1], r && (c = c[1], l = l[1]), o = [c, l], u.invert && (c = u(c), l = u(l)), l < c && (a = c, c = l, l = a), (c != i[0] || l != i[1]) && (i = [c, l])), f) : (r && (e ? (s = e[0], h = e[1]) : (s = t[0], h = t[1], r.invert && (s = r.invert(s), h = r.invert(h)), h < s && (a = s, s = h, h = a))), u && (o ? (c = o[0], l = o[1]) : (c = i[0], l = i[1], u.invert && (c = u.invert(c), l = u.invert(l)), l < c && (a = c, c = l, l = a))), r && u ? [[s, c], [h, l]] : r ? [s, h] : u && [c, l])
        }, f.clear = function () {
            return f.empty() || (t = [0, 0], i = [0, 0], e = o = null), f
        }, f.empty = function () {
            return !!r && t[0] == t[1] || !!u && i[0] == i[1]
        }, n.rebind(f, c, "on")
    };
    var uut = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        }, ul = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []], fl = i.format = ys.timeFormat,
        ik = fl.utc, rk = ik("%Y-%m-%dT%H:%M:%S.%LZ");
    fl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? el : rk;
    el.parse = function (n) {
        var t = new Date(n);
        return isNaN(t) ? null : t
    };
    el.toString = rk.toString;
    i.second = ei(function (n) {
        return new y(Math.floor(n / 1e3) * 1e3)
    }, function (n, t) {
        n.setTime(n.getTime() + Math.floor(t) * 1e3)
    }, function (n) {
        return n.getSeconds()
    });
    i.seconds = i.second.range;
    i.seconds.utc = i.second.utc.range;
    i.minute = ei(function (n) {
        return new y(Math.floor(n / 6e4) * 6e4)
    }, function (n, t) {
        n.setTime(n.getTime() + Math.floor(t) * 6e4)
    }, function (n) {
        return n.getMinutes()
    });
    i.minutes = i.minute.range;
    i.minutes.utc = i.minute.utc.range;
    i.hour = ei(function (n) {
        var t = n.getTimezoneOffset() / 60;
        return new y((Math.floor(n / 36e5 - t) + t) * 36e5)
    }, function (n, t) {
        n.setTime(n.getTime() + Math.floor(t) * 36e5)
    }, function (n) {
        return n.getHours()
    });
    i.hours = i.hour.range;
    i.hours.utc = i.hour.utc.range;
    i.month = ei(function (n) {
        return n = i.day(n), n.setDate(1), n
    }, function (n, t) {
        n.setMonth(n.getMonth() + t)
    }, function (n) {
        return n.getMonth()
    });
    i.months = i.month.range;
    i.months.utc = i.month.utc.range;
    var no = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        sl = [[i.second, 1], [i.second, 5], [i.second, 15], [i.second, 30], [i.minute, 1], [i.minute, 5], [i.minute, 15], [i.minute, 30], [i.hour, 1], [i.hour, 3], [i.hour, 6], [i.hour, 12], [i.day, 1], [i.day, 2], [i.week, 1], [i.month, 1], [i.month, 3], [i.year, 1]],
        fut = fl.multi([[".%L", function (n) {
            return n.getMilliseconds()
        }], [":%S", function (n) {
            return n.getSeconds()
        }], ["%I:%M", function (n) {
            return n.getMinutes()
        }], ["%I %p", function (n) {
            return n.getHours()
        }], ["%a %d", function (n) {
            return n.getDay() && n.getDate() != 1
        }], ["%b %d", function (n) {
            return n.getDate() != 1
        }], ["%B", function (n) {
            return n.getMonth()
        }], ["%Y", er]]), eut = {
            range: function (t, i, r) {
                return n.range(Math.ceil(t / r) * r, +i, r).map(pi)
            }, floor: a, ceil: a
        };
    sl.year = i.year;
    i.scale = function () {
        return ol(n.scale.linear(), sl, fut)
    };
    hl = sl.map(function (n) {
        return [n[0].utc, n[1]]
    });
    uk = ik.multi([[".%L", function (n) {
        return n.getUTCMilliseconds()
    }], [":%S", function (n) {
        return n.getUTCSeconds()
    }], ["%I:%M", function (n) {
        return n.getUTCMinutes()
    }], ["%I %p", function (n) {
        return n.getUTCHours()
    }], ["%a %d", function (n) {
        return n.getUTCDay() && n.getUTCDate() != 1
    }], ["%b %d", function (n) {
        return n.getUTCDate() != 1
    }], ["%B", function (n) {
        return n.getUTCMonth()
    }], ["%Y", er]]);
    hl.year = i.year.utc;
    i.scale.utc = function () {
        return ol(n.scale.linear(), hl, uk)
    };
    n.text = hs(function (n) {
        return n.responseText
    });
    n.json = function (n, t) {
        return sf(n, "application/json", out, t)
    };
    n.html = function (n, t) {
        return sf(n, "text/html", sut, t)
    };
    n.xml = hs(function (n) {
        return n.responseXML
    });
    typeof define == "function" && define.amd ? define(n) : typeof module == "object" && module.exports ? module.exports = n : this.d3 = n
}(), function (n) {
    openid = {
        version: "1.3",
        demo: !1,
        demo_text: null,
        cookie_expires: 180,
        cookie_name: "openid_provider",
        cookie_path: "/",
        img_path: "../Content/images/",
        locale: null,
        sprite: null,
        signin_text: null,
        all_small: !1,
        no_sprite: !1,
        image_title: "{provider}",
        input_id: null,
        provider_url: null,
        provider_id: null,
        init: function (t) {
            var i, r, u;
            providers = n.extend({}, providers_large, providers_small);
            i = n("#openid_btns");
            this.input_id = t;
            n("#openid_choice").show();
            r = 0;
            for (id in providers_large) r > 3 && r % 4 == 0 && i.append("<br/>"), box = this.getBoxHTML(id, providers_large[id], this.all_small ? "small" : "large", r++), i.append(box);
            if (providers_small) {
                i.append("<br/>");
                for (id in providers_small) box = this.getBoxHTML(id, providers_small[id], "small", r++), i.append(box)
            }
            n("#openid_form").submit(this.submit);
            u = this.readCookie();
            u && this.signin(u, !0)
        },
        getBoxHTML: function (n, t, i, r) {
            var u, f, e;
            return this.no_sprite ? (u = i == "small" ? ".ico.gif" : ".gif", '<a title="' + this.image_title.replace("{provider}", t.name) + '" href="javascript:openid.signin(\'' + n + '\');" style="background: #FFF url(' + this.img_path + "../images." + i + "/" + n + u + ') no-repeat center center" class="' + n + " openid_" + i + '_btn"><\/a>') : (f = i == "small" ? -r * 24 : -r * 100, e = i == "small" ? -60 : 0, '<a title="' + this.image_title.replace("{provider}", t.name) + '" href="javascript:openid.signin(\'' + n + '\');" style="background: #FFF url(' + this.img_path + "openid-providers2-" + this.sprite + ".png); background-position: " + f + "px " + e + 'px" class="' + n + " openid_" + i + '_btn"><\/a>')
        },
        signin: function (t, i) {
            var r = providers[t];
            r && (this.highlight(t), this.setCookie(t), this.provider_id = t, this.provider_url = r.url, r.label ? this.useInputBox(r) : (n("#openid_input_area").empty(), i || n("#openid_form").submit()))
        },
        submit: function () {
            var url = openid.provider_url;
            return (url && (url = url.replace("{username}", n("#openid_username").val()), openid.setOpenIdUrl(url)), openid.demo) ? (alert(openid.demo_text + "\r\n" + document.getElementById(openid.input_id).value), !1) : url.indexOf("javascript:") == 0 ? (url = url.substr(11), eval(url), !1) : !0
        },
        setOpenIdUrl: function (t) {
            var i = document.getElementById(this.input_id);
            i != null ? i.value = t : n("#openid_form").append('<input type="hidden" id="' + this.input_id + '" name="' + this.input_id + '" value="' + t + '"/>')
        },
        highlight: function (t) {
            var i = n("#openid_highlight");
            i && i.replaceWith(n("#openid_highlight a")[0]);
            n("." + t).wrap('<div id="openid_highlight"><\/div>')
        },
        setCookie: function (n) {
            var t = new Date, i;
            t.setTime(t.getTime() + this.cookie_expires * 864e5);
            i = "; expires=" + t.toGMTString();
            document.cookie = this.cookie_name + "=" + n + i + "; path=" + this.cookie_path
        },
        readCookie: function () {
            for (var i = this.cookie_name + "=", r = document.cookie.split(";"), n, t = 0; t < r.length; t++) {
                for (n = r[t]; n.charAt(0) == " ";) n = n.substring(1, n.length);
                if (n.indexOf(i) == 0) return n.substring(i.length, n.length)
            }
            return null
        },
        useInputBox: function (t) {
            var u = n("#openid_input_area"), r = "", i = "openid_username", f = "", e = t.label, o = "";
            e && (r = "<p>" + e + "<\/p>");
            t.name == "OpenID" && (i = this.input_id, f = "http://", o = "background: #FFF url(" + this.img_path + "openid-inputicon.gif) no-repeat scroll 0 50%; padding-left:18px;");
            r += '<input id="' + i + '" type="text" style="' + o + '" name="' + i + '" value="' + f + '" /><input id="openid_submit" type="submit"  value="' + this.signin_text + '"/>';
            u.empty();
            u.append(r);
            n("#" + i).focus()
        },
        setDemoMode: function (n) {
            this.demo = n
        }
    }
}(jQuery);
providers_large = {
    WHO: {name: "WHO", url: "http://extranet.who.int/openid"},
    google: {name: "Google", url: "https://www.google.com/accounts/o8/id"},
    yahoo: {name: "Yahoo", url: "http://me.yahoo.com/"},
    myopenid: {name: "MyOpenID", label: "Enter your MyOpenID username.", url: "http://{username}.myopenid.com/"},
    openid: {name: "OpenID", label: "Enter your OpenID.", url: null}
};
providers_small = {};
openid.locale = "en";
openid.sprite = "en";
openid.demo_text = "In client demo mode. Normally would have submitted OpenID:";
openid.signin_text = "Sign-In";
openid.image_title = "log in with {provider}"
