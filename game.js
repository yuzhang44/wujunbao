var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "加载中 ...",
        LogoLine1: " ",
        LogoLine2: " ",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "选择玩家",
        Win: "你赢辣OAO!",
        Lose: "你输惹QAQ!",
        Score: "分数",
        Time: "时间",
        HiScore: "最高分: ",
        NewHiScore: "新纪录: ",
        YourScore: "你的分数: ",
        Accuracy: "精准度: ",
        Whacked: "击中数: ",
        Escaped: "未击中: ",
        Bombs: "地狱鞭打: ",
        Go: "Go!",
        TimeOver: "时间到!",
        Boss: "Boss"
    },
    Tutorial: {
        "tut_1.1": "游戏前景:吴军豹变成了龙鸣",
        "tut_1.2": "点击开始>>>",
        "tut_2.1": "在时间耗尽之前",
        "tut_2.2": "尽量锤下最多的吴军豹",
        "tut_3.1": "这是剩余时间",
        "tut_3.2": "email:wujunbao4@outlook.com",
        "tut_4.1": "这是你的分数",
        "tut_4.2": "(如果有什么建议可以发至邮箱内)",
        "tut_5.1": "这是吴军豹",
        "tut_5.2": "点击可以捶打吴军豹 ",
        "tut_6.1": "这个普通吴军豹",
        "tut_6.2": "可以加十分.",
        "tut_7.1": "这个吴军豹有绅士帽",
        "tut_7.2": "可以加一百分(难视)",
        "tut_8.1": "这个硬核吴军豹要捶三下才能下去",
        "tut_8.2": "但是可以增加三秒钟游戏时间",
        "tut_9.1": "不要抓到鞭子",
        "tut_9.2": "他会触发地狱鞭打抽掉你七秒的时间",
        "tut_10.1": "击败豫章山长吴军豹(boss)!",
        "tut_10.2": "拿到更多分数和游戏时间!",
        "tut_11.1": "准备好辣?祝你好运!",
        "tut_11.2": "冲冲冲,点击开始>>>",
        "tut_12.1": " ",
        "tut_12.2": " "
    },
    Results: {
        Title: "最高分"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !1,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !0,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "zh-cn"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "#",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "#",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "#",
        NewWindow: !1,
    },
    Gamecenter: {
        Enabled: !0
    }
};
var MobileAdInGamePreroll = {
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                c = b.MobileAdInGamePreroll,
                d = c + b.MobileAdInGamePreroll2,
                b = d + b.MobileAdInGamePreroll3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : e <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : e <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
            console.log("Ad rotating preroll enabled")
        } else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
            this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
                MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
                    MobileAdInGamePreroll.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
var MobileAdInGameHeader = {
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                c = b.MobileAdInGameHeader,
                d = c + b.MobileAdInGameHeader2,
                b = d + b.MobileAdInGameHeader3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : e <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" : e <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameFooter = {
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                c = b.MobileAdInGameFooter,
                d = c + b.MobileAdInGameFooter2,
                b = d + b.MobileAdInGameFooter3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : e <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" : e <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameEnd = {
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                c = b.MobileAdInGameEnd,
                d = c + b.MobileAdInGameEnd2,
                b = d + b.MobileAdInGameEnd3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : e <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : e <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
            console.log("Ad rotating end enabled")
        } else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
                MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
! function(b, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = b.document ? c(b, !0) : function(b) {
        if (!b.document) throw Error("jQuery requires a window with a document");
        return c(b)
    } : c(b)
}("undefined" != typeof window ? window : this, function(b, c) {
    function d(b, c) {
        c = c || z;
        var d = c.createElement("script");
        d.text = b;
        c.head.appendChild(d).parentNode.removeChild(d)
    }

    function e(b) {
        var c = !!b && "length" in b && b.length,
            d = j.type(b);
        return "function" !== d && !j.isWindow(b) && ("array" === d || 0 === c || "number" == typeof c && 0 < c && c - 1 in b)
    }

    function f(b, c) {
        return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
    }

    function l(b, c, d) {
        return j.isFunction(c) ? j.grep(b, function(b, v) {
            return !!c.call(b, v, b) !== d
        }) : c.nodeType ? j.grep(b, function(b) {
            return b === c !== d
        }) : "string" != typeof c ? j.grep(b, function(b) {
            return -1 < Da.call(c, b) !== d
        }) : Cc.test(c) ? j.filter(c, b, d) : (c = j.filter(c, b), j.grep(b, function(b) {
            return -1 < Da.call(c, b) !== d && 1 === b.nodeType
        }))
    }

    function r(b, c) {
        for (;
            (b = b[c]) && 1 !== b.nodeType;);
        return b
    }

    function p(b) {
        return b
    }

    function g(b) {
        throw b;
    }

    function m(b, c, d, A) {
        var g;
        try {
            b && j.isFunction(g = b.promise) ? g.call(b).done(c).fail(d) : b && j.isFunction(g = b.then) ? g.call(b, c, d) : c.apply(void 0, [b].slice(A))
        } catch (B) {
            d.apply(void 0, [B])
        }
    }

    function n() {
        z.removeEventListener("DOMContentLoaded", n);
        b.removeEventListener("load", n);
        j.ready()
    }

    function q() {
        this.expando = j.expando + q.uid++
    }

    function u(b, c, d) {
        var A;
        if (void 0 === d && 1 === b.nodeType)
            if (A = "data-" + c.replace(Dc, "-$&").toLowerCase(), d = b.getAttribute(A), "string" == typeof d) {
                try {
                    d = "true" === d || "false" !== d && ("null" === d ? null : d === +d + "" ? +d : Ec.test(d) ? JSON.parse(d) : d)
                } catch (g) {}
                Q.set(b, c, d)
            } else d = void 0;
        return d
    }

    function t(b, c, d, A) {
        var g, B = 1,
            e = 20,
            f = A ? function() {
                return A.cur()
            } : function() {
                return j.css(b, c, "")
            },
            m = f(),
            n = d && d[3] || (j.cssNumber[c] ? "" : "px"),
            l = (j.cssNumber[c] || "px" !== n && +m) && Ea.exec(j.css(b, c));
        if (l && l[3] !== n) {
            n = n || l[3];
            d = d || [];
            l = +m || 1;
            do B = B || ".5", l /= B, j.style(b, c, l + n); while (B !== (B = f() / m) && 1 !== B && --e)
        }
        return d && (l = +l || +m || 0, g = d[1] ? l + (d[1] + 1) * d[2] : +d[2], A && (A.unit = n, A.start = l, A.end =
            g)), g
    }

    function s(b, c) {
        for (var d, A, g = [], B = 0, e = b.length; B < e; B++)
            if (A = b[B], A.style)
                if (d = A.style.display, c) {
                    if ("none" === d && (g[B] = D.get(A, "display") || null, g[B] || (A.style.display = "")), "" === A.style.display && Ma(A)) {
                        d = g;
                        var f = B,
                            m, n = void 0;
                        m = A.ownerDocument;
                        var l = A.nodeName;
                        m = (A = Ab[l]) ? A : (n = m.body.appendChild(m.createElement(l)), A = j.css(n, "display"), n.parentNode.removeChild(n), "none" === A && (A = "block"), Ab[l] = A, A);
                        d[f] = m
                    }
                } else "none" !== d && (g[B] = "none", D.set(A, "display", d));
        for (B = 0; B < e; B++) null != g[B] && (b[B].style.display = g[B]);
        return b
    }

    function x(b, c) {
        var d;
        return d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : [], void 0 === c || c && f(b, c) ? j.merge([b], d) : d
    }

    function H(b, c) {
        for (var d = 0, A = b.length; d < A; d++) D.set(b[d], "globalEval", !c || D.get(c[d], "globalEval"))
    }

    function F(b, c, d, A, g) {
        for (var B, e, f, m, n = c.createDocumentFragment(), l = [], q = 0, p = b.length; q < p; q++)
            if (B = b[q], B || 0 === B)
                if ("object" === j.type(B)) j.merge(l, B.nodeType ? [B] : B);
                else if (Fc.test(B)) {
            e = e || n.appendChild(c.createElement("div"));
            f = (Bb.exec(B) || ["", ""])[1].toLowerCase();
            f = U[f] || U._default;
            e.innerHTML = f[1] + j.htmlPrefilter(B) + f[2];
            for (f = f[0]; f--;) e = e.lastChild;
            j.merge(l, e.childNodes);
            e = n.firstChild;
            e.textContent = ""
        } else l.push(c.createTextNode(B));
        n.textContent = "";
        for (q = 0; B = l[q++];)
            if (A && -1 < j.inArray(B, A)) g && g.push(B);
            else if (m = j.contains(B.ownerDocument, B), e = x(n.appendChild(B), "script"), m && H(e), d)
            for (f = 0; B = e[f++];) Cb.test(B.type || "") && d.push(B);
        return n
    }

    function K() {
        return !0
    }

    function V() {
        return !1
    }

    function ma() {
        try {
            return z.activeElement
        } catch (b) {}
    }

    function P(b, c, d, A, g, e) {
        var f, m;
        if ("object" == typeof c) {
            "string" != typeof d && (A = A || d, d = void 0);
            for (m in c) P(b, m, d, A, c[m], e);
            return b
        }
        if (null == A && null == g ? (g = d, A = d = void 0) : null == g && ("string" == typeof d ? (g = A, A = void 0) : (g = A, A = d, d = void 0)), !1 === g) g = V;
        else if (!g) return b;
        return 1 === e && (f = g, g = function(b) {
            return j().off(b), f.apply(this, arguments)
        }, g.guid = f.guid || (f.guid = j.guid++)), b.each(function() {
            j.event.add(this, c, g, A, d)
        })
    }

    function Db(b, c) {
        return f(b, "table") && f(11 !== c.nodeType ? c : c.firstChild, "tr") ? j(">tbody", b)[0] || b : b
    }

    function Gc(b) {
        return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b
    }

    function Hc(b) {
        var c = Ic.exec(b.type);
        return c ? b.type = c[1] : b.removeAttribute("type"), b
    }

    function Eb(b, c) {
        var d, A, g, e, f, m;
        if (1 === c.nodeType) {
            if (D.hasData(b) && (d = D.access(b), A = D.set(c, d), m = d.events))
                for (g in delete A.handle, A.events = {}, m) {
                    d = 0;
                    for (A = m[g].length; d < A; d++) j.event.add(c, g, m[g][d])
                }
            Q.hasData(b) && (e = Q.access(b), f = j.extend({}, e), Q.set(c, f))
        }
    }

    function xa(b, c, G, A) {
        c = Fb.apply([], c);
        var g, e, f, m, n = 0,
            l = b.length,
            q = l - 1,
            p = c[0],
            u = j.isFunction(p);
        if (u || 1 < l && "string" == typeof p && !I.checkClone && Jc.test(p)) return b.each(function(d) {
            var g = b.eq(d);
            u && (c[0] = p.call(this, d, g.html()));
            xa(g, c, G, A)
        });
        if (l && (g = F(c, b[0].ownerDocument, !1, b, A), e = g.firstChild, 1 === g.childNodes.length && (g = e), e || A)) {
            e = j.map(x(g, "script"), Gc);
            for (f = e.length; n < l; n++) m = g, n !== q && (m = j.clone(m, !0, !0), f && j.merge(e, x(m, "script"))), G.call(b[n], m, n);
            if (f) {
                g = e[e.length - 1].ownerDocument;
                j.map(e, Hc);
                for (n = 0; n < f; n++) m = e[n], Cb.test(m.type || "") && !D.access(m, "globalEval") && j.contains(g, m) && (m.src ? j._evalUrl && j._evalUrl(m.src) : d(m.textContent.replace(Lc, ""), g))
            }
        }
        return b
    }

    function Gb(b, c, d) {
        for (var g = c ? j.filter(c, b) : b, R = 0; null != (c = g[R]); R++) d || 1 !== c.nodeType || j.cleanData(x(c)), c.parentNode && (d && j.contains(c.ownerDocument, c) && H(x(c, "script")), c.parentNode.removeChild(c));
        return b
    }

    function Fa(b, c, d) {
        var g, R, e, f, m = b.style;
        return d = d || Na(b), d && (f = d.getPropertyValue(c) || d[c], "" !== f || j.contains(b.ownerDocument, b) || (f = j.style(b, c)), !I.pixelMarginRight() && gb.test(f) && Hb.test(c) && (g = m.width, R = m.minWidth, e = m.maxWidth, m.minWidth = m.maxWidth = m.width = f, f = d.width, m.width = g, m.minWidth = R, m.maxWidth = e)), void 0 !== f ? f + "" : f
    }

    function Ib(b, c) {
        return {
            get: function() {
                return b() ? void delete this.get : (this.get = c).apply(this, arguments)
            }
        }
    }

    function Jb(b) {
        var c = j.cssProps[b];
        if (!c) {
            var c = j.cssProps,
                d;
            a: if (d = b, !(d in Kb)) {
                for (var g = d[0].toUpperCase() + d.slice(1), R = Lb.length; R--;)
                    if (d = Lb[R] + g, d in Kb) break a;
                d = void 0
            }
            c = c[b] = d || b
        }
        return c
    }

    function Mb(b, c, d) {
        return (b = Ea.exec(c)) ? Math.max(0, b[2] - (d || 0)) + (b[3] || "px") : c
    }

    function Nb(b, c, d, g, R) {
        var e = 0;
        for (c = d === (g ? "border" : "content") ? 4 : "width" === c ? 1 : 0; 4 > c; c += 2) "margin" === d && (e += j.css(b, d + na[c], !0, R)), g ? ("content" === d && (e -= j.css(b, "padding" + na[c], !0, R)), "margin" !== d && (e -= j.css(b, "border" + na[c] + "Width", !0, R))) : (e += j.css(b, "padding" + na[c], !0, R), "padding" !== d && (e += j.css(b, "border" + na[c] + "Width", !0, R)));
        return e
    }

    function Ob(b, c, d) {
        var g, e = Na(b),
            f = Fa(b, c, e),
            m = "border-box" === j.css(b, "boxSizing", !1, e);
        return gb.test(f) ? f : (g = m && (I.boxSizingReliable() || f === b.style[c]), "auto" === f && (f = b["offset" + c[0].toUpperCase() + c.slice(1)]), f = parseFloat(f) || 0, f + Nb(b, c, d || (m ? "border" : "content"), g, e) + "px")
    }

    function S(b, c, d, g, j) {
        return new S.prototype.init(b, c, d, g, j)
    }

    function hb() {
        Oa && (!1 === z.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(hb) : b.setTimeout(hb, j.fx.interval), j.fx.tick())
    }

    function Pb() {
        return b.setTimeout(function() {
            ya = void 0
        }), ya = j.now()
    }

    function Pa(b, c) {
        var d, g = 0,
            j = {
                height: b
            };
        for (c = c ? 1 : 0; 4 > g; g += 2 - c) d = na[g], j["margin" + d] = j["padding" + d] = b;
        return c && (j.opacity = j.width = b), j
    }

    function Qb(b, c, d) {
        for (var g, j = (aa.tweeners[c] || []).concat(aa.tweeners["*"]), e = 0, f = j.length; e < f; e++)
            if (g = j[e].call(d, c, b)) return g
    }

    function aa(b, c, d) {
        var g, e, f = 0,
            m = aa.prefilters.length,
            n = j.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (e) return !1;
                for (var c = ya || Pb(), c = Math.max(0, q.startTime + q.duration - c), d = 1 - (c / q.duration || 0), y = 0, g = q.tweens.length; y < g; y++) q.tweens[y].run(d);
                return n.notifyWith(b, [q, d, c]), 1 > d && g ? c : (g || n.notifyWith(b, [q, 1, 0]), n.resolveWith(b, [q]), !1)
            },
            q = n.promise({
                elem: b,
                props: j.extend({}, c),
                opts: j.extend(!0, {
                    specialEasing: {},
                    easing: j.easing._default
                }, d),
                originalProperties: c,
                originalOptions: d,
                startTime: ya || Pb(),
                duration: d.duration,
                tweens: [],
                createTween: function(c, d) {
                    var y = j.Tween(b, q.opts, c, d, q.opts.specialEasing[c] || q.opts.easing);
                    return q.tweens.push(y), y
                },
                stop: function(c) {
                    var d = 0,
                        y = c ? q.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d < y; d++) q.tweens[d].run(1);
                    return c ? (n.notifyWith(b, [q, 1, 0]), n.resolveWith(b, [q, c])) : n.rejectWith(b, [q, c]), this
                }
            });
        c = q.props;
        d = q.opts.specialEasing;
        var p, u, r, t;
        for (g in c)
            if (p = j.camelCase(g), u = d[p], r = c[g], Array.isArray(r) && (u = r[1], r = c[g] = r[0]), g !== p && (c[p] = r, delete c[g]), t = j.cssHooks[p], t && "expand" in t)
                for (g in r = t.expand(r), delete c[p], r) g in c || (c[g] = r[g], d[g] = u);
            else d[p] = u;
        for (; f < m; f++)
            if (g = aa.prefilters[f].call(q, b, c, q.opts)) return j.isFunction(g.stop) && (j._queueHooks(q.elem, q.opts.queue).stop = j.proxy(g.stop, g)), g;
        return j.map(c, Qb, q), j.isFunction(q.opts.start) && q.opts.start.call(b, q), q.progress(q.opts.progress).done(q.opts.done, q.opts.complete).fail(q.opts.fail).always(q.opts.always), j.fx.timer(j.extend(l, {
            elem: b,
            anim: q,
            queue: q.opts.queue
        })), q
    }

    function oa(b) {
        return (b.match(W) || []).join(" ")
    }

    function pa(b) {
        return b.getAttribute && b.getAttribute("class") || ""
    }

    function ib(b, c, d, g) {
        var e;
        if (Array.isArray(c)) j.each(c, function(c, y) {
            d || Mc.test(b) ? g(b, y) : ib(b + "[" + ("object" == typeof y && null != y ? c : "") + "]", y, d, g)
        });
        else if (d || "object" !== j.type(c)) g(b, c);
        else
            for (e in c) ib(b + "[" + e + "]", c[e], d, g)
    }

    function Rb(b) {
        return function(c, d) {
            "string" != typeof c && (d = c, c = "*");
            var g, e = 0,
                f = c.toLowerCase().match(W) || [];
            if (j.isFunction(d))
                for (; g = f[e++];) "+" === g[0] ? (g = g.slice(1) || "*", (b[g] = b[g] || []).unshift(d)) : (b[g] = b[g] || []).push(d)
        }
    }

    function Sb(b, c, d, g) {
        function e(n) {
            var l;
            return f[n] = !0, j.each(b[n] || [], function(b, v) {
                var j = v(c, d, g);
                return "string" != typeof j || m || f[j] ? m ? !(l = j) : void 0 : (c.dataTypes.unshift(j), e(j), !1)
            }), l
        }
        var f = {},
            m = b === jb;
        return e(c.dataTypes[0]) || !f["*"] && e("*")
    }

    function kb(b, c) {
        var d, g, e = j.ajaxSettings.flatOptions || {};
        for (d in c) void 0 !== c[d] && ((e[d] ? b : g || (g = {}))[d] = c[d]);
        return g && j.extend(!0, b, g), b
    }
    var qa = [],
        z = b.document,
        Nc = Object.getPrototypeOf,
        ra = qa.slice,
        Fb = qa.concat,
        lb = qa.push,
        Da = qa.indexOf,
        Qa = {},
        Tb = Qa.toString,
        Ra = Qa.hasOwnProperty,
        Ub = Ra.toString,
        Oc = Ub.call(Object),
        I = {},
        j = function(b, c) {
            return new j.fn.init(b, c)
        },
        Pc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Qc = /^-ms-/,
        Rc = /-([a-z])/g,
        Sc = function(b, c) {
            return c.toUpperCase()
        };
    j.fn = j.prototype = {
        jquery: "3.2.1",
        constructor: j,
        length: 0,
        toArray: function() {
            return ra.call(this)
        },
        get: function(b) {
            return null == b ? ra.call(this) : 0 > b ? this[b + this.length] : this[b]
        },
        pushStack: function(b) {
            b = j.merge(this.constructor(), b);
            return b.prevObject = this, b
        },
        each: function(b) {
            return j.each(this, b)
        },
        map: function(b) {
            return this.pushStack(j.map(this, function(c, d) {
                return b.call(c, d, c)
            }))
        },
        slice: function() {
            return this.pushStack(ra.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(b) {
            var c = this.length;
            b = +b + (0 > b ? c : 0);
            return this.pushStack(0 <= b && b < c ? [this[b]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: lb,
        sort: qa.sort,
        splice: qa.splice
    };
    j.extend = j.fn.extend = function() {
        var b, c, d, g, e, f, m = arguments[0] || {},
            n = 1,
            l = arguments.length,
            q = !1;
        "boolean" == typeof m && (q = m, m = arguments[n] || {}, n++);
        "object" == typeof m || j.isFunction(m) || (m = {});
        for (n === l && (m = this, n--); n < l; n++)
            if (null != (b = arguments[n]))
                for (c in b) d = m[c], g = b[c], m !== g && (q && g && (j.isPlainObject(g) || (e = Array.isArray(g))) ? (e ? (e = !1, f = d && Array.isArray(d) ? d : []) : f = d && j.isPlainObject(d) ? d : {}, m[c] = j.extend(q, f, g)) : void 0 !== g && (m[c] = g));
        return m
    };
    j.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(b) {
            throw Error(b);
        },
        noop: function() {},
        isFunction: function(b) {
            return "function" === j.type(b)
        },
        isWindow: function(b) {
            return null != b && b === b.window
        },
        isNumeric: function(b) {
            var c = j.type(b);
            return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b))
        },
        isPlainObject: function(b) {
            var c, d;
            return !(!b || "[object Object]" !== Tb.call(b)) && (!(c = Nc(b)) || (d = Ra.call(c, "constructor") && c.constructor, "function" == typeof d && Ub.call(d) === Oc))
        },
        isEmptyObject: function(b) {
            for (var c in b) return !1;
            return !0
        },
        type: function(b) {
            return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? Qa[Tb.call(b)] || "object" : typeof b
        },
        globalEval: function(b) {
            d(b)
        },
        camelCase: function(b) {
            return b.replace(Qc, "ms-").replace(Rc, Sc)
        },
        each: function(b, c) {
            var d, g = 0;
            if (e(b))
                for (d = b.length; g < d && !1 !== c.call(b[g], g, b[g]); g++);
            else
                for (g in b)
                    if (!1 === c.call(b[g], g, b[g])) break; return b
        },
        trim: function(b) {
            return null == b ? "" : (b + "").replace(Pc, "")
        },
        makeArray: function(b, c) {
            var d = c || [];
            return null != b && (e(Object(b)) ? j.merge(d, "string" == typeof b ? [b] : b) : lb.call(d, b)), d
        },
        inArray: function(b, c, d) {
            return null == c ? -1 : Da.call(c, b, d)
        },
        merge: function(b, c) {
            for (var d = +c.length, g = 0, j = b.length; g < d; g++) b[j++] = c[g];
            return b.length = j, b
        },
        grep: function(b, c, d) {
            for (var g = [], j = 0, e = b.length, f = !d; j < e; j++) d = !c(b[j], j), d !== f && g.push(b[j]);
            return g
        },
        map: function(b, c, d) {
            var g, j, f = 0,
                m = [];
            if (e(b))
                for (g = b.length; f < g; f++) j = c(b[f], f, d), null != j && m.push(j);
            else
                for (f in b) j = c(b[f], f, d), null != j && m.push(j);
            return Fb.apply([], m)
        },
        guid: 1,
        proxy: function(b, c) {
            var d, g, e;
            if ("string" == typeof c && (d = b[c], c = b, b = d), j.isFunction(b)) return g = ra.call(arguments, 2), e = function() {
                return b.apply(c || this, g.concat(ra.call(arguments)))
            }, e.guid = b.guid = b.guid || j.guid++, e
        },
        now: Date.now,
        support: I
    });
    "function" == typeof Symbol && (j.fn[Symbol.iterator] = qa[Symbol.iterator]);
    j.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(b, c) {
        Qa["[object " + c + "]"] = c.toLowerCase()
    });
    var ia, mb = b,
        E = function(b, c, d, g) {
            var j, e, f, m, n, l = c && c.ownerDocument,
                q = c ? c.nodeType : 9;
            if (d = d || [], "string" != typeof b || !b || 1 !== q && 9 !== q && 11 !== q) return d;
            if (!g && ((c ? c.ownerDocument || c : X) !== J && ja(c), c = c || J, Y)) {
                if (11 !== q && (m = Tc.exec(b)))
                    if (j = m[1])
                        if (9 === q) {
                            if (!(e = c.getElementById(j))) return d;
                            if (e.id === j) return d.push(e), d
                        } else {
                            if (l && (e = l.getElementById(j)) && Ga(c, e) && e.id === j) return d.push(e), d
                        } else {
                    if (m[2]) return ka.apply(d, c.getElementsByTagName(b)), d;
                    if ((j = m[3]) && M.getElementsByClassName && c.getElementsByClassName) return ka.apply(d, c.getElementsByClassName(j)), d
                } if (M.qsa && !Sa[b + " "] && (!O || !O.test(b))) {
                    if (1 !== q) l = c, n = b;
                    else if ("object" !== c.nodeName.toLowerCase()) {
                        (f = c.getAttribute("id")) ? f = f.replace(Vb, Wb): c.setAttribute("id", f = N);
                        e = Ha(b);
                        for (j = e.length; j--;) e[j] = "#" + f + " " + Ta(e[j]);
                        n = e.join(",");
                        l = nb.test(b) && ob(c.parentNode) || c
                    }
                    if (n) try {
                        return ka.apply(d, l.querySelectorAll(n)), d
                    } catch (p) {} finally {
                        f === N && c.removeAttribute("id")
                    }
                }
            }
            return Xb(b.replace(Ua, "$1"), c, d, g)
        },
        pb = function() {
            function b(d, g) {
                return c.push(d + " ") > C.cacheLength && delete b[c.shift()], b[d + " "] = g
            }
            var c = [];
            return b
        },
        ba = function(b) {
            return b[N] = !0, b
        },
        da = function(b) {
            var c = J.createElement("fieldset");
            try {
                return !!b(c)
            } catch (d) {
                return !1
            } finally {
                c.parentNode && c.parentNode.removeChild(c)
            }
        },
        qb = function(b, c) {
            for (var d = b.split("|"), g = d.length; g--;) C.attrHandle[d[g]] = c
        },
        Yb = function(b, c) {
            var d = c && b,
                g = d && 1 === b.nodeType && 1 === c.nodeType && b.sourceIndex - c.sourceIndex;
            if (g) return g;
            if (d)
                for (; d = d.nextSibling;)
                    if (d === c) return -1;
            return b ? 1 : -1
        },
        Uc = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Vc = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        Zb = function(b) {
            return function(c) {
                return "form" in c ? c.parentNode && !1 === c.disabled ? "label" in c ? "label" in c.parentNode ? c.parentNode.disabled === b : c.disabled === b : c.isDisabled === b || c.isDisabled !== !b && Wc(c) === b : c.disabled === b : "label" in c && c.disabled === b
            }
        },
        sa = function(b) {
            return ba(function(c) {
                return c = +c, ba(function(d, g) {
                    for (var j, e = b([], d.length, c), f = e.length; f--;) d[j = e[f]] && (d[j] = !(g[j] = d[j]))
                })
            })
        },
        ob = function(b) {
            return b && "undefined" != typeof b.getElementsByTagName && b
        },
        $b = function() {},
        Ta = function(b) {
            for (var c = 0, d = b.length, g = ""; c < d; c++) g += b[c].value;
            return g
        },
        Va = function(b, c, d) {
            var g = c.dir,
                j = c.next,
                e = j || g,
                f = d && "parentNode" === e,
                m = Xc++;
            return c.first ? function(c, d, y) {
                for (; c = c[g];)
                    if (1 === c.nodeType || f) return b(c, d, y);
                return !1
            } : function(c, d, y) {
                var G, n, l, q = [ea, m];
                if (y)
                    for (; c = c[g];) {
                        if ((1 === c.nodeType || f) && b(c, d, y)) return !0
                    } else
                        for (; c = c[g];)
                            if (1 === c.nodeType || f)
                                if (l = c[N] || (c[N] = {}), n = l[c.uniqueID] || (l[c.uniqueID] = {}), j && j === c.nodeName.toLowerCase()) c = c[g] || c;
                                else {
                                    if ((G = n[e]) && G[0] === ea && G[1] === m) return q[2] = G[2];
                                    if (n[e] = q, q[2] = b(c, d, y)) return !0
                                }
                return !1
            }
        },
        rb = function(b) {
            return 1 < b.length ? function(c, d, g) {
                for (var j = b.length; j--;)
                    if (!b[j](c, d, g)) return !1;
                return !0
            } : b[0]
        },
        Wa = function(b, c, d, g, j) {
            for (var e, f = [], m = 0, n = b.length, l = null != c; m < n; m++)(e = b[m]) && (d && !d(e, g, j) || (f.push(e), l && c.push(m)));
            return f
        },
        sb = function(b, c, d, g, j, e) {
            return g && !g[N] && (g = sb(g)), j && !j[N] && (j = sb(j, e)), ba(function(e, f, m, n) {
                var B, l, q = [],
                    p = [],
                    u = f.length,
                    r;
                if (!(r = e)) {
                    r = c || "*";
                    for (var t = m.nodeType ? [m] : m, s = [], x = 0, D = t.length; x < D; x++) E(r, t[x], s);
                    r = s
                }
                r = !b || !e && c ? r : Wa(r, q, b, m, n);
                t = d ? j || (e ? b : u || g) ? [] : f : r;
                if (d && d(r, t, m, n), g) {
                    B = Wa(t, p);
                    g(B, [], m, n);
                    for (m = B.length; m--;)(l = B[m]) && (t[p[m]] = !(r[p[m]] = l))
                }
                if (e) {
                    if (j || b) {
                        if (j) {
                            B = [];
                            for (m = t.length; m--;)(l = t[m]) && B.push(r[m] = l);
                            j(null, t = [], B, n)
                        }
                        for (m = t.length; m--;)(l = t[m]) && -1 < (B = j ? ta(e, l) : q[m]) && (e[B] = !(f[B] = l))
                    }
                } else t = Wa(t === f ? t.splice(u, t.length) : t), j ? j(null, f, t, n) : ka.apply(f, t)
            })
        },
        tb = function(b) {
            var c, d, g, j = b.length,
                e = C.relative[b[0].type];
            d = e || C.relative[" "];
            for (var f = e ? 1 : 0, m = Va(function(b) {
                return b === c
            }, d, !0), n = Va(function(b) {
                return -1 < ta(c, b)
            }, d, !0), l = [
                function(b, v, d) {
                    b = !e && (d || v !== Xa) || ((c = v).nodeType ? m(b, v, d) : n(b, v, d));
                    return c = null, b
                }
            ]; f < j; f++)
                if (d = C.relative[b[f].type]) l = [Va(rb(l), d)];
                else {
                    if (d = C.filter[b[f].type].apply(null, b[f].matches), d[N]) {
                        for (g = ++f; g < j && !C.relative[b[g].type]; g++);
                        return sb(1 < f && rb(l), 1 < f && Ta(b.slice(0, f - 1).concat({
                            value: " " === b[f - 2].type ? "*" : ""
                        })).replace(Ua, "$1"), d, f < g && tb(b.slice(f, g)), g < j && tb(b = b.slice(g)), g < j && Ta(b))
                    }
                    l.push(d)
                }
            return rb(l)
        },
        za, M, C, Ya, ac, Ha, ub, Xb, Xa, la, Aa, ja, J, Z, Y, O, ua, Za, Ga, N = "sizzle" + 1 * new Date,
        X = mb.document,
        ea = 0,
        Xc = 0,
        bc = pb(),
        cc = pb(),
        Sa = pb(),
        vb = function(b, c) {
            return b === c && (Aa = !0), 0
        },
        Yc = {}.hasOwnProperty,
        va = [],
        Zc = va.pop,
        $c = va.push,
        ka = va.push,
        dc = va.slice,
        ta = function(b, c) {
            for (var d = 0, g = b.length; d < g; d++)
                if (b[d] === c) return d;
            return -1
        },
        ad = /[\x20\t\r\n\f]+/g,
        Ua = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        bd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        cd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        dd = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        ed = RegExp(":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
        fd = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        $a = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
            PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        gd = /^(?:input|select|textarea|button)$/i,
        hd = /^h\d$/i,
        Ia = /^[^{]+\{\s*\[native \w/,
        Tc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        nb = /[+~]/,
        fa = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
        ga = function(b, c, d) {
            b = "0x" + c - 65536;
            return b !== b || d ? c : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320)
        },
        Vb = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Wb = function(b, c) {
            return c ? "\x00" === b ? "\ufffd" : b.slice(0, -1) + "\\" + b.charCodeAt(b.length - 1).toString(16) + " " : "\\" + b
        },
        ec = function() {
            ja()
        },
        Wc = Va(function(b) {
            return !0 === b.disabled && ("form" in b || "label" in b)
        }, {
            dir: "parentNode",
            next: "legend"
        });
    try {
        ka.apply(va = dc.call(X.childNodes), X.childNodes), va[X.childNodes.length].nodeType
    } catch (Kd) {
        ka = {
            apply: va.length ? function(b, c) {
                $c.apply(b, dc.call(c))
            } : function(b, c) {
                for (var d = b.length, g = 0; b[d++] = c[g++];);
                b.length = d - 1
            }
        }
    }
    M = E.support = {};
    ac = E.isXML = function(b) {
        b = b && (b.ownerDocument || b).documentElement;
        return !!b && "HTML" !== b.nodeName
    };
    ja = E.setDocument = function(b) {
        var c, d;
        b = b ? b.ownerDocument || b : X;
        return b !== J && 9 === b.nodeType && b.documentElement ? (J = b, Z = J.documentElement, Y = !ac(J), X !== J && (d = J.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", ec, !1) : d.attachEvent && d.attachEvent("onunload", ec)), M.attributes = da(function(b) {
            return b.className = "i", !b.getAttribute("className")
        }), M.getElementsByTagName = da(function(b) {
            return b.appendChild(J.createComment("")), !b.getElementsByTagName("*").length
        }), M.getElementsByClassName = Ia.test(J.getElementsByClassName), M.getById = da(function(b) {
            return Z.appendChild(b).id = N, !J.getElementsByName || !J.getElementsByName(N).length
        }), M.getById ? (C.filter.ID = function(b) {
            var c = b.replace(fa, ga);
            return function(b) {
                return b.getAttribute("id") === c
            }
        }, C.find.ID = function(b, c) {
            if ("undefined" != typeof c.getElementById && Y) {
                var d = c.getElementById(b);
                return d ? [d] : []
            }
        }) : (C.filter.ID = function(b) {
            var c = b.replace(fa, ga);
            return function(b) {
                return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === c
            }
        }, C.find.ID = function(b, c) {
            if ("undefined" != typeof c.getElementById && Y) {
                var d, v, g, y = c.getElementById(b);
                if (y) {
                    if (d = y.getAttributeNode("id"), d && d.value === b) return [y];
                    g = c.getElementsByName(b);
                    for (v = 0; y = g[v++];)
                        if (d = y.getAttributeNode("id"), d && d.value === b) return [y]
                }
                return []
            }
        }), C.find.TAG = M.getElementsByTagName ? function(b, c) {
            return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName(b) : M.qsa ? c.querySelectorAll(b) : void 0
        } : function(b, c) {
            var d, v = [],
                g = 0,
                y = c.getElementsByTagName(b);
            if ("*" === b) {
                for (; d = y[g++];) 1 === d.nodeType && v.push(d);
                return v
            }
            return y
        }, C.find.CLASS = M.getElementsByClassName && function(b, c) {
            if ("undefined" != typeof c.getElementsByClassName && Y) return c.getElementsByClassName(b)
        }, ua = [], O = [], (M.qsa = Ia.test(J.querySelectorAll)) && (da(function(b) {
            Z.appendChild(b).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            b.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
            b.querySelectorAll("[selected]").length || O.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
            b.querySelectorAll("[id~=" + N + "-]").length || O.push("~=");
            b.querySelectorAll(":checked").length || O.push(":checked");
            b.querySelectorAll("a#" + N + "+*").length || O.push(".#.+[+~]")
        }), da(function(b) {
            b.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var c = J.createElement("input");
            c.setAttribute("type", "hidden");
            b.appendChild(c).setAttribute("name", "D");
            b.querySelectorAll("[name=d]").length && O.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
            2 !== b.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled");
            Z.appendChild(b).disabled = !0;
            2 !== b.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled");
            b.querySelectorAll("*,:x");
            O.push(",.*:")
        })), (M.matchesSelector = Ia.test(Za = Z.matches || Z.webkitMatchesSelector || Z.mozMatchesSelector || Z.oMatchesSelector || Z.msMatchesSelector)) && da(function(b) {
            M.disconnectedMatch = Za.call(b, "*");
            Za.call(b, "[s!='']:x");
            ua.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
        }), O = O.length && RegExp(O.join("|")), ua = ua.length && RegExp(ua.join("|")), c = Ia.test(Z.compareDocumentPosition), Ga = c || Ia.test(Z.contains) ? function(b, c) {
            var d = 9 === b.nodeType ? b.documentElement : b,
                v = c && c.parentNode;
            return b === v || !(!v || 1 !== v.nodeType || !(d.contains ? d.contains(v) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(v)))
        } : function(b, c) {
            if (c)
                for (; c = c.parentNode;)
                    if (c === b) return !0;
            return !1
        }, vb = c ? function(b, c) {
            if (b === c) return Aa = !0, 0;
            var d = !b.compareDocumentPosition - !c.compareDocumentPosition;
            return d ? d : (d = (b.ownerDocument || b) === (c.ownerDocument || c) ? b.compareDocumentPosition(c) : 1, 1 & d || !M.sortDetached && c.compareDocumentPosition(b) === d ? b === J || b.ownerDocument === X && Ga(X, b) ? -1 : c === J || c.ownerDocument === X && Ga(X, c) ? 1 : la ? ta(la, b) - ta(la, c) : 0 : 4 & d ? -1 : 1)
        } : function(b, c) {
            if (b === c) return Aa = !0, 0;
            var d, v = 0;
            d = b.parentNode;
            var g = c.parentNode,
                y = [b],
                j = [c];
            if (!d || !g) return b === J ? -1 : c === J ? 1 : d ? -1 : g ? 1 : la ? ta(la, b) - ta(la, c) : 0;
            if (d === g) return Yb(b, c);
            for (d = b; d = d.parentNode;) y.unshift(d);
            for (d = c; d = d.parentNode;) j.unshift(d);
            for (; y[v] === j[v];) v++;
            return v ? Yb(y[v], j[v]) : y[v] === X ? -1 : j[v] === X ? 1 : 0
        }, J) : J
    };
    E.matches = function(b, c) {
        return E(b, null, null, c)
    };
    E.matchesSelector = function(b, c) {
        if ((b.ownerDocument || b) !== J && ja(b), c = c.replace(dd, "='$1']"), M.matchesSelector && Y && !Sa[c + " "] && (!ua || !ua.test(c)) && (!O || !O.test(c))) try {
            var d = Za.call(b, c);
            if (d || M.disconnectedMatch || b.document && 11 !== b.document.nodeType) return d
        } catch (g) {}
        return 0 < E(c, J, null, [b]).length
    };
    E.contains = function(b, c) {
        return (b.ownerDocument || b) !== J && ja(b), Ga(b, c)
    };
    E.attr = function(b, c) {
        (b.ownerDocument || b) !== J && ja(b);
        var d = C.attrHandle[c.toLowerCase()],
            d = d && Yc.call(C.attrHandle, c.toLowerCase()) ? d(b, c, !Y) : void 0;
        return void 0 !== d ? d : M.attributes || !Y ? b.getAttribute(c) : (d = b.getAttributeNode(c)) && d.specified ? d.value : null
    };
    E.escape = function(b) {
        return (b + "").replace(Vb, Wb)
    };
    E.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    E.uniqueSort = function(b) {
        var c, d = [],
            g = 0,
            j = 0;
        if (Aa = !M.detectDuplicates, la = !M.sortStable && b.slice(0), b.sort(vb), Aa) {
            for (; c = b[j++];) c === b[j] && (g = d.push(j));
            for (; g--;) b.splice(d[g], 1)
        }
        return la = null, b
    };
    Ya = E.getText = function(b) {
        var c, d = "",
            g = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling) d += Ya(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            } else
            for (; c = b[g++];) d += Ya(c);
        return d
    };
    C = E.selectors = {
        cacheLength: 50,
        createPseudo: ba,
        match: $a,
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
            ATTR: function(b) {
                return b[1] = b[1].replace(fa, ga), b[3] = (b[3] || b[4] || b[5] || "").replace(fa, ga), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || E.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && E.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d = !b[6] && b[2];
                return $a.CHILD.test(b[0]) ? null : (b[3] ? b[2] = b[4] || b[5] || "" : d && ed.test(d) && (c = Ha(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (b[0] = b[0].slice(0, c), b[2] = d.slice(0, c)), b.slice(0, 3))
            }
        },
        filter: {
            TAG: function(b) {
                var c = b.replace(fa, ga).toLowerCase();
                return "*" === b ? function() {
                    return !0
                } : function(b) {
                    return b.nodeName && b.nodeName.toLowerCase() === c
                }
            },
            CLASS: function(b) {
                var c = bc[b + " "];
                return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && bc(b, function(b) {
                    return c.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") || "")
                })
            },
            ATTR: function(b, c, d) {
                return function(g) {
                    g = E.attr(g, b);
                    return null == g ? "!=" === c : !c || (g += "", "=" === c ? g === d : "!=" === c ? g !== d : "^=" === c ? d && 0 === g.indexOf(d) : "*=" === c ? d && -1 < g.indexOf(d) : "$=" === c ? d && g.slice(-d.length) === d : "~=" === c ? -1 < (" " + g.replace(ad, " ") + " ").indexOf(d) : "|=" === c && (g === d || g.slice(0, d.length + 1) === d + "-"))
                }
            },
            CHILD: function(b, c, d, g, j) {
                var e = "nth" !== b.slice(0, 3),
                    f = "last" !== b.slice(-4),
                    m = "of-type" === c;
                return 1 === g && 0 === j ? function(b) {
                    return !!b.parentNode
                } : function(c, d, y) {
                    var G, n, l, q, p, u;
                    d = e !== f ? "nextSibling" : "previousSibling";
                    var r = c.parentNode,
                        t = m && c.nodeName.toLowerCase();
                    y = !y && !m;
                    var s = !1;
                    if (r) {
                        if (e) {
                            for (; d;) {
                                for (q = c; q = q[d];)
                                    if (m ? q.nodeName.toLowerCase() === t : 1 === q.nodeType) return !1;
                                u = d = "only" === b && !u && "nextSibling"
                            }
                            return !0
                        }
                        if (u = [f ? r.firstChild : r.lastChild], f && y) {
                            q = r;
                            l = q[N] || (q[N] = {});
                            n = l[q.uniqueID] || (l[q.uniqueID] = {});
                            G = n[b] || [];
                            s = (p = G[0] === ea && G[1]) && G[2];
                            for (q = p && r.childNodes[p]; q = ++p && q && q[d] || (s = p = 0) || u.pop();)
                                if (1 === q.nodeType && ++s && q === c) {
                                    n[b] = [ea, p, s];
                                    break
                                }
                        } else if (y && (q = c, l = q[N] || (q[N] = {}), n = l[q.uniqueID] || (l[q.uniqueID] = {}), G = n[b] || [], p = G[0] === ea && G[1], s = p), !1 === s)
                            for (;
                                (q = ++p && q && q[d] || (s = p = 0) || u.pop()) && (!(m ? q.nodeName.toLowerCase() === t : 1 === q.nodeType) || !++s || !(y && (l = q[N] || (q[N] = {}), n = l[q.uniqueID] || (l[q.uniqueID] = {}), n[b] = [ea, s]), q === c)););
                        return s -= j, s === g || 0 === s % g && 0 <= s / g
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, g = C.pseudos[b] || C.setFilters[b.toLowerCase()] || E.error("unsupported pseudo: " + b);
                return g[N] ? g(c) : 1 < g.length ? (d = [b, b, "", c], C.setFilters.hasOwnProperty(b.toLowerCase()) ? ba(function(b, d) {
                    for (var v, j = g(b, c), e = j.length; e--;) v = ta(b, j[e]), b[v] = !(d[v] = j[e])
                }) : function(b) {
                    return g(b, 0, d)
                }) : g
            }
        },
        pseudos: {
            not: ba(function(b) {
                var c = [],
                    d = [],
                    g = ub(b.replace(Ua, "$1"));
                return g[N] ? ba(function(b, c, d, v) {
                    var y;
                    d = g(b, null, v, []);
                    for (v = b.length; v--;)(y = d[v]) && (b[v] = !(c[v] = y))
                }) : function(b, v, j) {
                    return c[0] = b, g(c, null, j, d), c[0] = null, !d.pop()
                }
            }),
            has: ba(function(b) {
                return function(c) {
                    return 0 < E(b, c).length
                }
            }),
            contains: ba(function(b) {
                return b = b.replace(fa, ga),
                    function(c) {
                        return -1 < (c.textContent || c.innerText || Ya(c)).indexOf(b)
                    }
            }),
            lang: ba(function(b) {
                return fd.test(b || "") || E.error("unsupported lang: " + b), b = b.replace(fa, ga).toLowerCase(),
                    function(c) {
                        var d;
                        do
                            if (d = Y ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-");
                        while ((c = c.parentNode) && 1 === c.nodeType);
                        return !1
                    }
            }),
            target: function(b) {
                var c = mb.location && mb.location.hash;
                return c && c.slice(1) === b.id
            },
            root: function(b) {
                return b === Z
            },
            focus: function(b) {
                return b === J.activeElement && (!J.hasFocus || J.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
            },
            enabled: Zb(!1),
            disabled: Zb(!0),
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" === c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            empty: function(b) {
                for (b = b.firstChild; b; b = b.nextSibling)
                    if (6 > b.nodeType) return !1;
                return !0
            },
            parent: function(b) {
                return !C.pseudos.empty(b)
            },
            header: function(b) {
                return hd.test(b.nodeName)
            },
            input: function(b) {
                return gd.test(b.nodeName)
            },
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            text: function(b) {
                var c;
                return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (c = b.getAttribute("type")) || "text" === c.toLowerCase())
            },
            first: sa(function() {
                return [0]
            }),
            last: sa(function(b, c) {
                return [c - 1]
            }),
            eq: sa(function(b, c, d) {
                return [0 > d ? d + c : d]
            }),
            even: sa(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: sa(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: sa(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: sa(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    C.pseudos.nth = C.pseudos.eq;
    for (za in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
    }) C.pseudos[za] = Uc(za);
    for (za in {
        submit: !0,
        reset: !0
    }) C.pseudos[za] = Vc(za);
    $b.prototype = C.filters = C.pseudos;
    C.setFilters = new $b;
    Ha = E.tokenize = function(b, c) {
        var d, g, j, e, f, m, n;
        if (f = cc[b + " "]) return c ? 0 : f.slice(0);
        f = b;
        m = [];
        for (n = C.preFilter; f;) {
            d && !(g = bd.exec(f)) || (g && (f = f.slice(g[0].length) || f), m.push(j = []));
            d = !1;
            (g = cd.exec(f)) && (d = g.shift(), j.push({
                value: d,
                type: g[0].replace(Ua, " ")
            }), f = f.slice(d.length));
            for (e in C.filter)!(g = $a[e].exec(f)) || n[e] && !(g = n[e](g)) || (d = g.shift(), j.push({
                value: d,
                type: e,
                matches: g
            }), f = f.slice(d.length));
            if (!d) break
        }
        return c ? f.length : f ? E.error(b) : cc(b, m).slice(0)
    };
    ia = (ub = E.compile = function(b, c) {
        var d, g = [],
            j = [],
            e = Sa[b + " "];
        if (!e) {
            c || (c = Ha(b));
            for (d = c.length; d--;) e = tb(c[d]), e[N] ? g.push(e) : j.push(e);
            d = Sa;
            var f = 0 < g.length,
                m = 0 < j.length,
                e = function(b, c, d, v, y) {
                    var e, G, n, l = 0,
                        q = "0",
                        B = b && [],
                        p = [],
                        u = Xa,
                        r = b || m && C.find.TAG("*", y),
                        t = ea += null == u ? 1 : Math.random() || 0.1,
                        s = r.length;
                    for (y && (Xa = c === J || c || y); q !== s && null != (e = r[q]); q++) {
                        if (m && e) {
                            G = 0;
                            for (c || e.ownerDocument === J || (ja(e), d = !Y); n = j[G++];)
                                if (n(e, c || J, d)) {
                                    v.push(e);
                                    break
                                }
                            y && (ea = t)
                        }
                        f && ((e = !n && e) && l--, b && B.push(e))
                    }
                    if (l += q, f && q !== l) {
                        for (G = 0; n = g[G++];) n(B, p, c, d);
                        if (b) {
                            if (0 < l)
                                for (; q--;) B[q] || p[q] || (p[q] = Zc.call(v));
                            p = Wa(p)
                        }
                        ka.apply(v, p);
                        y && !b && 0 < p.length && 1 < l + g.length && E.uniqueSort(v)
                    }
                    return y && (ea = t, Xa = u), B
                },
                e = f ? ba(e) : e,
                e = d(b, e);
            e.selector = b
        }
        return e
    }, Xb = E.select = function(b, c, d, g) {
        var j, e, f, m, n, l = "function" == typeof b && b,
            q = !g && Ha(b = l.selector || b);
        if (d = d || [], 1 === q.length) {
            if (e = q[0] = q[0].slice(0), 2 < e.length && "ID" === (f = e[0]).type && 9 === c.nodeType && Y && C.relative[e[1].type]) {
                if (c = (C.find.ID(f.matches[0].replace(fa, ga), c) || [])[0], !c) return d;
                l && (c = c.parentNode);
                b = b.slice(e.shift().value.length)
            }
            for (j = $a.needsContext.test(b) ? 0 : e.length; j-- && !(f = e[j], C.relative[m = f.type]);)
                if ((n = C.find[m]) && (g = n(f.matches[0].replace(fa, ga), nb.test(e[0].type) && ob(c.parentNode) || c))) {
                    if (e.splice(j, 1), b = g.length && Ta(e), !b) return ka.apply(d, g), d;
                    break
                }
        }
        return (l || ub(b, q))(g, c, !Y, d, !c || nb.test(b) && ob(c.parentNode) || c), d
    }, M.sortStable = N.split("").sort(vb).join("") === N, M.detectDuplicates = !!Aa, ja(), M.sortDetached = da(function(b) {
        return 1 & b.compareDocumentPosition(J.createElement("fieldset"))
    }), da(function(b) {
        return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
    }) || qb("type|href|height|width", function(b, c, d) {
        if (!d) return b.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
    }), M.attributes && da(function(b) {
        return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
    }) || qb("value", function(b, c, d) {
        if (!d && "input" === b.nodeName.toLowerCase()) return b.defaultValue
    }), da(function(b) {
        return null == b.getAttribute("disabled")
    }) || qb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(b, c, d) {
        var g;
        if (!d) return !0 === b[c] ? c.toLowerCase() : (g = b.getAttributeNode(c)) && g.specified ? g.value : null
    }), E);
    j.find = ia;
    j.expr = ia.selectors;
    j.expr[":"] = j.expr.pseudos;
    j.uniqueSort = j.unique = ia.uniqueSort;
    j.text = ia.getText;
    j.isXMLDoc = ia.isXML;
    j.contains = ia.contains;
    j.escapeSelector = ia.escape;
    var Ba = function(b, c, d) {
            for (var g = [], e = void 0 !== d;
                (b = b[c]) && 9 !== b.nodeType;)
                if (1 === b.nodeType) {
                    if (e && j(b).is(d)) break;
                    g.push(b)
                }
            return g
        },
        fc = function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
            return d
        },
        gc = j.expr.match.needsContext,
        hc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Cc = /^.[^:#\[\.,]*$/;
    j.filter = function(b, c, d) {
        var g = c[0];
        return d && (b = ":not(" + b + ")"), 1 === c.length && 1 === g.nodeType ? j.find.matchesSelector(g, b) ? [g] : [] : j.find.matches(b, j.grep(c, function(b) {
            return 1 === b.nodeType
        }))
    };
    j.fn.extend({
        find: function(b) {
            var c, d, g = this.length,
                e = this;
            if ("string" != typeof b) return this.pushStack(j(b).filter(function() {
                for (c = 0; c < g; c++)
                    if (j.contains(e[c], this)) return !0
            }));
            d = this.pushStack([]);
            for (c = 0; c < g; c++) j.find(b, e[c], d);
            return 1 < g ? j.uniqueSort(d) : d
        },
        filter: function(b) {
            return this.pushStack(l(this, b || [], !1))
        },
        not: function(b) {
            return this.pushStack(l(this, b || [], !0))
        },
        is: function(b) {
            return !!l(this, "string" == typeof b && gc.test(b) ? j(b) : b || [], !1).length
        }
    });
    var ic, id = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (j.fn.init = function(b, c, d) {
        var g, e;
        if (!b) return this;
        if (d = d || ic, "string" == typeof b) {
            if (g = "<" === b[0] && ">" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : id.exec(b), !g || !g[1] && c) return !c || c.jquery ? (c || d).find(b) : this.constructor(c).find(b);
            if (g[1]) {
                if (c = c instanceof j ? c[0] : c, j.merge(this, j.parseHTML(g[1], c && c.nodeType ? c.ownerDocument || c : z, !0)), hc.test(g[1]) && j.isPlainObject(c))
                    for (g in c) j.isFunction(this[g]) ? this[g](c[g]) : this.attr(g, c[g]);
                return this
            }
            return e = z.getElementById(g[2]), e && (this[0] = e, this.length = 1), this
        }
        return b.nodeType ? (this[0] = b, this.length = 1, this) : j.isFunction(b) ? void 0 !== d.ready ? d.ready(b) : b(j) : j.makeArray(b, this)
    }).prototype = j.fn;
    ic = j(z);
    var jd = /^(?:parents|prev(?:Until|All))/,
        kd = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    j.fn.extend({
        has: function(b) {
            var c = j(b, this),
                d = c.length;
            return this.filter(function() {
                for (var b = 0; b < d; b++)
                    if (j.contains(this, c[b])) return !0
            })
        },
        closest: function(b, c) {
            var d, g = 0,
                e = this.length,
                f = [],
                m = "string" != typeof b && j(b);
            if (!gc.test(b))
                for (; g < e; g++)
                    for (d = this[g]; d && d !== c; d = d.parentNode)
                        if (11 > d.nodeType && (m ? -1 < m.index(d) : 1 === d.nodeType && j.find.matchesSelector(d, b))) {
                            f.push(d);
                            break
                        }
            return this.pushStack(1 < f.length ? j.uniqueSort(f) : f)
        },
        index: function(b) {
            return b ? "string" == typeof b ? Da.call(j(b), this[0]) : Da.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(b, c) {
            return this.pushStack(j.uniqueSort(j.merge(this.get(), j(b, c))))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    j.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return Ba(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return Ba(b, "parentNode", d)
        },
        next: function(b) {
            return r(b, "nextSibling")
        },
        prev: function(b) {
            return r(b, "previousSibling")
        },
        nextAll: function(b) {
            return Ba(b, "nextSibling")
        },
        prevAll: function(b) {
            return Ba(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return Ba(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return Ba(b, "previousSibling", d)
        },
        siblings: function(b) {
            return fc((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return fc(b.firstChild)
        },
        contents: function(b) {
            return f(b, "iframe") ? b.contentDocument : (f(b, "template") && (b = b.content || b), j.merge([], b.childNodes))
        }
    }, function(b, c) {
        j.fn[b] = function(d, g) {
            var e = j.map(this, c, d);
            return "Until" !== b.slice(-5) && (g = d), g && "string" == typeof g && (e = j.filter(g, e)), 1 < this.length && (kd[b] || j.uniqueSort(e), jd.test(b) && e.reverse()), this.pushStack(e)
        }
    });
    var W = /[^\x20\t\r\n\f]+/g;
    j.Callbacks = function(b) {
        var c;
        if ("string" == typeof b) {
            var d = {};
            c = (j.each(b.match(W) || [], function(b, c) {
                d[c] = !0
            }), d)
        } else c = j.extend({}, b);
        b = c;
        var g, e, f, m, n = [],
            l = [],
            q = -1,
            p = function() {
                m = m || b.once;
                for (f = g = !0; l.length; q = -1)
                    for (e = l.shift(); ++q < n.length;)!1 === n[q].apply(e[0], e[1]) && b.stopOnFalse && (q = n.length, e = !1);
                b.memory || (e = !1);
                g = !1;
                m && (n = e ? [] : "")
            },
            u = {
                add: function() {
                    return n && (e && !g && (q = n.length - 1, l.push(e)), function Kc(c) {
                        j.each(c, function(c, d) {
                            j.isFunction(d) ? b.unique && u.has(d) || n.push(d) : d && d.length && "string" !== j.type(d) && Kc(d)
                        })
                    }(arguments), e && !g && p()), this
                },
                remove: function() {
                    return j.each(arguments, function(b, c) {
                        for (var d; - 1 < (d = j.inArray(c, n, d));) n.splice(d, 1), d <= q && q--
                    }), this
                },
                has: function(b) {
                    return b ? -1 < j.inArray(b, n) : 0 < n.length
                },
                empty: function() {
                    return n && (n = []), this
                },
                disable: function() {
                    return m = l = [], n = e = "", this
                },
                disabled: function() {
                    return !n
                },
                lock: function() {
                    return m = l = [], e || g || (n = e = ""), this
                },
                locked: function() {
                    return !!m
                },
                fireWith: function(b, c) {
                    return m || (c = c || [], c = [b, c.slice ? c.slice() : c], l.push(c), g || p()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!f
                }
            };
        return u
    };
    j.extend({
        Deferred: function(c) {
            var d = [
                    ["notify", "progress", j.Callbacks("memory"), j.Callbacks("memory"), 2],
                    ["resolve", "done", j.Callbacks("once memory"), j.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", j.Callbacks("once memory"), j.Callbacks("once memory"), 1, "rejected"]
                ],
                e = "pending",
                f = {
                    state: function() {
                        return e
                    },
                    always: function() {
                        return m.done(arguments).fail(arguments), this
                    },
                    "catch": function(b) {
                        return f.then(null, b)
                    },
                    pipe: function() {
                        var b = arguments;
                        return j.Deferred(function(c) {
                            j.each(d, function(d, g) {
                                var v = j.isFunction(b[g[4]]) && b[g[4]];
                                m[g[1]](function() {
                                    var b = v && v.apply(this, arguments);
                                    b && j.isFunction(b.promise) ? b.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[g[0] + "With"](this, v ? [b] : arguments)
                                })
                            });
                            b = null
                        }).promise()
                    },
                    then: function(c, v, e) {
                        function f(c, d, v, e) {
                            return function() {
                                var y = this,
                                    n = arguments,
                                    G = function() {
                                        var b, G;
                                        if (!(c < m)) {
                                            if (b = v.apply(y, n), b === d.promise()) throw new TypeError("Thenable self-resolution");
                                            G = b && ("object" == typeof b || "function" == typeof b) && b.then;
                                            j.isFunction(G) ? e ? G.call(b, f(m, d, p, e), f(m, d, g, e)) : (m++, G.call(b, f(m, d, p, e), f(m, d, g, e), f(m, d, p, d.notifyWith))) : (v !== p && (y = void 0, n = [b]), (e || d.resolveWith)(y, n))
                                        }
                                    },
                                    A = e ? G : function() {
                                        try {
                                            G()
                                        } catch (b) {
                                            j.Deferred.exceptionHook && j.Deferred.exceptionHook(b, A.stackTrace), c + 1 >= m && (v !== g && (y = void 0, n = [b]), d.rejectWith(y, n))
                                        }
                                    };
                                c ? A() : (j.Deferred.getStackHook && (A.stackTrace = j.Deferred.getStackHook()), b.setTimeout(A))
                            }
                        }
                        var m = 0;
                        return j.Deferred(function(b) {
                            d[0][3].add(f(0, b, j.isFunction(e) ? e : p, b.notifyWith));
                            d[1][3].add(f(0, b, j.isFunction(c) ? c : p));
                            d[2][3].add(f(0, b, j.isFunction(v) ? v : g))
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? j.extend(b, f) : f
                    }
                },
                m = {};
            return j.each(d, function(b, c) {
                var g = c[2],
                    v = c[5];
                f[c[1]] = g.add;
                v && g.add(function() {
                    e = v
                }, d[3 - b][2].disable, d[0][2].lock);
                g.add(c[3].fire);
                m[c[0]] = function() {
                    return m[c[0] + "With"](this === m ? void 0 : this, arguments), this
                };
                m[c[0] + "With"] = g.fireWith
            }), f.promise(m), c && c.call(m, m), m
        },
        when: function(b) {
            var c = arguments.length,
                d = c,
                g = Array(d),
                e = ra.call(arguments),
                f = j.Deferred(),
                n = function(b) {
                    return function(d) {
                        g[b] = this;
                        e[b] = 1 < arguments.length ? ra.call(arguments) : d;
                        --c || f.resolveWith(g, e)
                    }
                };
            if (1 >= c && (m(b, f.done(n(d)).resolve, f.reject, !c), "pending" === f.state() || j.isFunction(e[d] && e[d].then))) return f.then();
            for (; d--;) m(e[d], n(d), f.reject);
            return f.promise()
        }
    });
    var ld = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    j.Deferred.exceptionHook = function(c, d) {
        b.console && b.console.warn && c && ld.test(c.name) && b.console.warn("jQuery.Deferred exception: " + c.message, c.stack, d)
    };
    j.readyException = function(c) {
        b.setTimeout(function() {
            throw c;
        })
    };
    var wb = j.Deferred();
    j.fn.ready = function(b) {
        return wb.then(b)["catch"](function(b) {
            j.readyException(b)
        }), this
    };
    j.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(b) {
            (!0 === b ? --j.readyWait : j.isReady) || (j.isReady = !0, !0 !== b && 0 < --j.readyWait || wb.resolveWith(z, [j]))
        }
    });
    j.ready.then = wb.then;
    "complete" === z.readyState || "loading" !== z.readyState && !z.documentElement.doScroll ? b.setTimeout(j.ready) : (z.addEventListener("DOMContentLoaded", n), b.addEventListener("load", n));
    var ha = function(b, c, d, g, e, f, m) {
            var n = 0,
                q = b.length,
                l = null == d;
            if ("object" === j.type(d))
                for (n in e = !0, d) ha(b, c, n, d[n], !0, f, m);
            else if (void 0 !== g && (e = !0, j.isFunction(g) || (m = !0), l && (m ? (c.call(b, g), c = null) : (l = c, c = function(b, c, d) {
                return l.call(j(b), d)
            })), c))
                for (; n < q; n++) c(b[n], d, m ? g : g.call(b[n], n, c(b[n], d)));
            return e ? b : l ? c.call(b) : q ? c(b[0], d) : f
        },
        ab = function(b) {
            return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
        };
    q.uid = 1;
    q.prototype = {
        cache: function(b) {
            var c = b[this.expando];
            return c || (c = {}, ab(b) && (b.nodeType ? b[this.expando] = c : Object.defineProperty(b, this.expando, {
                value: c,
                configurable: !0
            }))), c
        },
        set: function(b, c, d) {
            var g;
            b = this.cache(b);
            if ("string" == typeof c) b[j.camelCase(c)] = d;
            else
                for (g in c) b[j.camelCase(g)] = c[g];
            return b
        },
        get: function(b, c) {
            return void 0 === c ? this.cache(b) : b[this.expando] && b[this.expando][j.camelCase(c)]
        },
        access: function(b, c, d) {
            return void 0 === c || c && "string" == typeof c && void 0 === d ? this.get(b, c) : (this.set(b, c, d), void 0 !== d ? d : c)
        },
        remove: function(b, c) {
            var d, g = b[this.expando];
            if (void 0 !== g) {
                if (void 0 !== c) {
                    Array.isArray(c) ? c = c.map(j.camelCase) : (c = j.camelCase(c), c = c in g ? [c] : c.match(W) || []);
                    for (d = c.length; d--;) delete g[c[d]]
                }(void 0 === c || j.isEmptyObject(g)) && (b.nodeType ? b[this.expando] = void 0 : delete b[this.expando])
            }
        },
        hasData: function(b) {
            b = b[this.expando];
            return void 0 !== b && !j.isEmptyObject(b)
        }
    };
    var D = new q,
        Q = new q,
        Ec = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Dc = /[A-Z]/g;
    j.extend({
        hasData: function(b) {
            return Q.hasData(b) || D.hasData(b)
        },
        data: function(b, c, d) {
            return Q.access(b, c, d)
        },
        removeData: function(b, c) {
            Q.remove(b, c)
        },
        _data: function(b, c, d) {
            return D.access(b, c, d)
        },
        _removeData: function(b, c) {
            D.remove(b, c)
        }
    });
    j.fn.extend({
        data: function(b, c) {
            var d, g, e, f = this[0],
                m = f && f.attributes;
            if (void 0 === b) {
                if (this.length && (e = Q.get(f), 1 === f.nodeType && !D.get(f, "hasDataAttrs"))) {
                    for (d = m.length; d--;) m[d] && (g = m[d].name, 0 === g.indexOf("data-") && (g = j.camelCase(g.slice(5)), u(f, g, e[g])));
                    D.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof b ? this.each(function() {
                Q.set(this, b)
            }) : ha(this, function(c) {
                var d;
                if (f && void 0 === c) {
                    if ((d = Q.get(f, b), void 0 !== d) || (d = u(f, b), void 0 !== d)) return d
                } else this.each(function() {
                    Q.set(this, b, c)
                })
            }, null, c, 1 < arguments.length, null, !0)
        },
        removeData: function(b) {
            return this.each(function() {
                Q.remove(this, b)
            })
        }
    });
    j.extend({
        queue: function(b, c, d) {
            var g;
            if (b) return c = (c || "fx") + "queue", g = D.get(b, c), d && (!g || Array.isArray(d) ? g = D.access(b, c, j.makeArray(d)) : g.push(d)), g || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var d = j.queue(b, c),
                g = d.length,
                e = d.shift(),
                f = j._queueHooks(b, c),
                m = function() {
                    j.dequeue(b, c)
                };
            "inprogress" === e && (e = d.shift(), g--);
            e && ("fx" === c && d.unshift("inprogress"), delete f.stop, e.call(b, m, f));
            !g && f && f.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return D.get(b, d) || D.access(b, d, {
                empty: j.Callbacks("once memory").add(function() {
                    D.remove(b, [c + "queue", d])
                })
            })
        }
    });
    j.fn.extend({
        queue: function(b, c) {
            var d = 2;
            return "string" != typeof b && (c = b, b = "fx", d--), arguments.length < d ? j.queue(this[0], b) : void 0 === c ? this : this.each(function() {
                var d = j.queue(this, b, c);
                j._queueHooks(this, b);
                "fx" === b && "inprogress" !== d[0] && j.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                j.dequeue(this, b)
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, c) {
            var d, g = 1,
                e = j.Deferred(),
                f = this,
                m = this.length,
                n = function() {
                    --g || e.resolveWith(f, [f])
                };
            "string" != typeof b && (c = b, b = void 0);
            for (b = b || "fx"; m--;)(d = D.get(f[m], b + "queueHooks")) && d.empty && (g++, d.empty.add(n));
            return n(), e.promise(c)
        }
    });
    var jc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ea = RegExp("^(?:([+-])=|)(" + jc + ")([a-z%]*)$", "i"),
        na = ["Top", "Right", "Bottom", "Left"],
        Ma = function(b, c) {
            return b = c || b, "none" === b.style.display || "" === b.style.display && j.contains(b.ownerDocument, b) && "none" === j.css(b, "display")
        },
        kc = function(b, c, d, g) {
            var e, j = {};
            for (e in c) j[e] = b.style[e], b.style[e] = c[e];
            d = d.apply(b, g || []);
            for (e in c) b.style[e] = j[e];
            return d
        },
        Ab = {};
    j.fn.extend({
        show: function() {
            return s(this, !0)
        },
        hide: function() {
            return s(this)
        },
        toggle: function(b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
                Ma(this) ? j(this).show() : j(this).hide()
            })
        }
    });
    var lc = /^(?:checkbox|radio)$/i,
        Bb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Cb = /^$|\/(?:java|ecma)script/i,
        U = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    U.optgroup = U.option;
    U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
    U.th = U.td;
    var Fc = /<|&#?\w+;/,
        bb = z.createDocumentFragment().appendChild(z.createElement("div")),
        cb = z.createElement("input");
    cb.setAttribute("type", "radio");
    cb.setAttribute("checked", "checked");
    cb.setAttribute("name", "t");
    bb.appendChild(cb);
    I.checkClone = bb.cloneNode(!0).cloneNode(!0).lastChild.checked;
    bb.innerHTML = "<textarea>x</textarea>";
    I.noCloneChecked = !!bb.cloneNode(!0).lastChild.defaultValue;
    !0;
    var db = z.documentElement,
        md = /^key/,
        nd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        mc = /^([^.]*)(?:\.(.+)|)/;
    j.event = {
        global: {},
        add: function(b, c, d, g, e) {
            var f, m, n, l, q, p, u, r, t, s;
            if (q = D.get(b)) {
                d.handler && (f = d, d = f.handler, e = f.selector);
                e && j.find.matchesSelector(db, e);
                d.guid || (d.guid = j.guid++);
                (l = q.events) || (l = q.events = {});
                (m = q.handle) || (m = q.handle = function(c) {
                    return "undefined" != typeof j && j.event.triggered !== c.type ? j.event.dispatch.apply(b, arguments) : void 0
                });
                c = (c || "").match(W) || [""];
                for (q = c.length; q--;) n = mc.exec(c[q]) || [], t = s = n[1], n = (n[2] || "").split(".").sort(), t && (u = j.event.special[t] || {}, t = (e ? u.delegateType : u.bindType) || t, u = j.event.special[t] || {}, p = j.extend({
                    type: t,
                    origType: s,
                    data: g,
                    handler: d,
                    guid: d.guid,
                    selector: e,
                    needsContext: e && j.expr.match.needsContext.test(e),
                    namespace: n.join(".")
                }, f), (r = l[t]) || (r = l[t] = [], r.delegateCount = 0, u.setup && !1 !== u.setup.call(b, g, n, m) || b.addEventListener && b.addEventListener(t, m)), u.add && (u.add.call(b, p), p.handler.guid || (p.handler.guid = d.guid)), e ? r.splice(r.delegateCount++, 0, p) : r.push(p), j.event.global[t] = !0)
            }
        },
        remove: function(b, c, d, g, e) {
            var f, m, n, q, l, p, u, r, t, s, x, C = D.hasData(b) && D.get(b);
            if (C && (q = C.events)) {
                c = (c || "").match(W) || [""];
                for (l = c.length; l--;)
                    if (n = mc.exec(c[l]) || [], t = x = n[1], s = (n[2] || "").split(".").sort(), t) {
                        u = j.event.special[t] || {};
                        t = (g ? u.delegateType : u.bindType) || t;
                        r = q[t] || [];
                        n = n[2] && RegExp("(^|\\.)" + s.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (m = f = r.length; f--;) p = r[f], !e && x !== p.origType || d && d.guid !== p.guid || n && !n.test(p.namespace) || g && g !== p.selector && ("**" !== g || !p.selector) || (r.splice(f, 1), p.selector && r.delegateCount--, u.remove && u.remove.call(b, p));
                        m && !r.length && (u.teardown && !1 !== u.teardown.call(b, s, C.handle) || j.removeEvent(b, t, C.handle), delete q[t])
                    } else
                        for (t in q) j.event.remove(b, t + c[l], d, g, !0);
                j.isEmptyObject(q) && D.remove(b, "handle events")
            }
        },
        dispatch: function(b) {
            var c = j.event.fix(b),
                d, g, e, f, m, n, q = Array(arguments.length);
            g = (D.get(this, "events") || {})[c.type] || [];
            var l = j.event.special[c.type] || {};
            q[0] = c;
            for (d = 1; d < arguments.length; d++) q[d] = arguments[d];
            if (c.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, c)) {
                n = j.event.handlers.call(this, c, g);
                for (d = 0;
                    (f = n[d++]) && !c.isPropagationStopped();) {
                    c.currentTarget = f.elem;
                    for (g = 0;
                        (m = f.handlers[g++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !c.rnamespace.test(m.namespace) || (c.handleObj = m, c.data = m.data, e = ((j.event.special[m.origType] || {}).handle || m.handler).apply(f.elem, q), void 0 !== e && !1 === (c.result = e) && (c.preventDefault(), c.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, c), c.result
            }
        },
        handlers: function(b, c) {
            var d, g, e, f, m, n = [],
                q = c.delegateCount,
                l = b.target;
            if (q && l.nodeType && !("click" === b.type && 1 <= b.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== b.type || !0 !== l.disabled)) {
                        f = [];
                        m = {};
                        for (d = 0; d < q; d++) g = c[d], e = g.selector + " ", void 0 === m[e] && (m[e] = g.needsContext ? -1 < j(e, this).index(l) : j.find(e, this, null, [l]).length), m[e] && f.push(g);
                        f.length && n.push({
                            elem: l,
                            handlers: f
                        })
                    }
            return l = this, q < c.length && n.push({
                elem: l,
                handlers: c.slice(q)
            }), n
        },
        addProp: function(b, c) {
            Object.defineProperty(j.Event.prototype, b, {
                enumerable: !0,
                configurable: !0,
                get: j.isFunction(c) ? function() {
                    if (this.originalEvent) return c(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[b]
                },
                set: function(c) {
                    Object.defineProperty(this, b, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: c
                    })
                }
            })
        },
        fix: function(b) {
            return b[j.expando] ? b : new j.Event(b)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ma() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ma() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && f(this, "input")) return this.click(), !1
                },
                _default: function(b) {
                    return f(b.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(b) {
                    void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
                }
            }
        }
    };
    j.removeEvent = function(b, c, d) {
        b.removeEventListener && b.removeEventListener(c, d)
    };
    j.Event = function(b, c) {
        return this instanceof j.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? K : V, this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode : b.target, this.currentTarget = b.currentTarget, this.relatedTarget = b.relatedTarget) : this.type = b, c && j.extend(this, c), this.timeStamp = b && b.timeStamp || j.now(), void(this[j.expando] = !0)) : new j.Event(b, c)
    };
    j.Event.prototype = {
        constructor: j.Event,
        isDefaultPrevented: V,
        isPropagationStopped: V,
        isImmediatePropagationStopped: V,
        isSimulated: !1,
        preventDefault: function() {
            var b = this.originalEvent;
            this.isDefaultPrevented = K;
            b && !this.isSimulated && b.preventDefault()
        },
        stopPropagation: function() {
            var b = this.originalEvent;
            this.isPropagationStopped = K;
            b && !this.isSimulated && b.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var b = this.originalEvent;
            this.isImmediatePropagationStopped = K;
            b && !this.isSimulated && b.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    j.each({
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
        "char": !0,
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
        which: function(b) {
            var c = b.button;
            return null == b.which && md.test(b.type) ? null != b.charCode ? b.charCode : b.keyCode : !b.which && void 0 !== c && nd.test(b.type) ? 1 & c ? 1 : 2 & c ? 3 : 4 & c ? 2 : 0 : b.which
        }
    }, j.event.addProp);
    j.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(b, c) {
        j.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var d, g = b.relatedTarget,
                    e = b.handleObj;
                return g && (g === this || j.contains(this, g)) || (b.type = e.origType, d = e.handler.apply(this, arguments), b.type = c), d
            }
        }
    });
    j.fn.extend({
        on: function(b, c, d, g) {
            return P(this, b, c, d, g)
        },
        one: function(b, c, d, g) {
            return P(this, b, c, d, g, 1)
        },
        off: function(b, c, d) {
            var g, e;
            if (b && b.preventDefault && b.handleObj) return g = b.handleObj, j(b.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
            if ("object" == typeof b) {
                for (e in b) this.off(e, c, b[e]);
                return this
            }
            return !1 !== c && "function" != typeof c || (d = c, c = void 0), !1 === d && (d = V), this.each(function() {
                j.event.remove(this, b, d, c)
            })
        }
    });
    var od = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        pd = /<script|<style|<link/i,
        Jc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ic = /^true\/(.*)/,
        Lc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    j.extend({
        htmlPrefilter: function(b) {
            return b.replace(od, "<$1></$2>")
        },
        clone: function(b, c, d) {
            var g, e, f, m, n = b.cloneNode(!0),
                l = j.contains(b.ownerDocument, b);
            if (!I.noCloneChecked && !(1 !== b.nodeType && 11 !== b.nodeType || j.isXMLDoc(b))) {
                m = x(n);
                f = x(b);
                g = 0;
                for (e = f.length; g < e; g++) {
                    var q = f[g],
                        p = m[g],
                        u = p.nodeName.toLowerCase();
                    "input" === u && lc.test(q.type) ? p.checked = q.checked : "input" !== u && "textarea" !== u || (p.defaultValue = q.defaultValue)
                }
            }
            if (c)
                if (d) {
                    f = f || x(b);
                    m = m || x(n);
                    g = 0;
                    for (e = f.length; g < e; g++) Eb(f[g], m[g])
                } else Eb(b, n);
            return m = x(n, "script"), 0 < m.length && H(m, !l && x(b, "script")), n
        },
        cleanData: function(b) {
            for (var c, d, g, e = j.event.special, f = 0; void 0 !== (d = b[f]); f++)
                if (ab(d)) {
                    if (c = d[D.expando]) {
                        if (c.events)
                            for (g in c.events) e[g] ? j.event.remove(d, g) : j.removeEvent(d, g, c.handle);
                        d[D.expando] = void 0
                    }
                    d[Q.expando] && (d[Q.expando] = void 0)
                }
        }
    });
    j.fn.extend({
        detach: function(b) {
            return Gb(this, b, !0)
        },
        remove: function(b) {
            return Gb(this, b)
        },
        text: function(b) {
            return ha(this, function(b) {
                return void 0 === b ? j.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b)
                })
            }, null, b, arguments.length)
        },
        append: function() {
            return xa(this, arguments, function(b) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && Db(this, b).appendChild(b)
            })
        },
        prepend: function() {
            return xa(this, arguments, function(b) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = Db(this, b);
                    c.insertBefore(b, c.firstChild)
                }
            })
        },
        before: function() {
            return xa(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this)
            })
        },
        after: function() {
            return xa(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++) 1 === b.nodeType && (j.cleanData(x(b, !1)), b.textContent = "");
            return this
        },
        clone: function(b, c) {
            return b = null != b && b, c = null == c ? b : c, this.map(function() {
                return j.clone(this, b, c)
            })
        },
        html: function(b) {
            return ha(this, function(b) {
                var c = this[0] || {},
                    d = 0,
                    g = this.length;
                if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof b && !pd.test(b) && !U[(Bb.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = j.htmlPrefilter(b);
                    try {
                        for (; d < g; d++) c = this[d] || {}, 1 === c.nodeType && (j.cleanData(x(c, !1)), c.innerHTML = b);
                        c = 0
                    } catch (e) {}
                }
                c && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = [];
            return xa(this, arguments, function(c) {
                var d = this.parentNode;
                0 > j.inArray(this, b) && (j.cleanData(x(this)), d && d.replaceChild(c, this))
            }, b)
        }
    });
    j.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        j.fn[b] = function(b) {
            for (var d = [], g = j(b), e = g.length - 1, f = 0; f <= e; f++) b = f === e ? this : this.clone(!0), j(g[f])[c](b), lb.apply(d, b.get());
            return this.pushStack(d)
        }
    });
    var Hb = /^margin/,
        gb = RegExp("^(" + jc + ")(?!px)[a-z%]+$", "i"),
        Na = function(c) {
            var d = c.ownerDocument.defaultView;
            return d && d.opener || (d = b), d.getComputedStyle(c)
        },
        fb = function() {
            if (ca) {
                ca.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                ca.innerHTML = "";
                db.appendChild(eb);
                var c = b.getComputedStyle(ca);
                nc = "1%" !== c.top;
                oc = "2px" === c.marginLeft;
                pc = "4px" === c.width;
                ca.style.marginRight = "50%";
                qc = "4px" === c.marginRight;
                db.removeChild(eb);
                ca = null
            }
        },
        nc, pc, qc, oc, eb = z.createElement("div"),
        ca = z.createElement("div");
    ca.style && (ca.style.backgroundClip = "content-box", ca.cloneNode(!0).style.backgroundClip = "", I.clearCloneStyle = "content-box" === ca.style.backgroundClip, eb.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", eb.appendChild(ca), j.extend(I, {
        pixelPosition: function() {
            return fb(), nc
        },
        boxSizingReliable: function() {
            return fb(), pc
        },
        pixelMarginRight: function() {
            return fb(), qc
        },
        reliableMarginLeft: function() {
            return fb(), oc
        }
    }));
    !0;
    var qd = /^(none|table(?!-c[ea]).+)/,
        rc = /^--/,
        rd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        sc = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Lb = ["Webkit", "Moz", "ms"],
        Kb = z.createElement("div").style;
    j.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = Fa(b, "opacity");
                        return "" === d ? "1" : d
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
            "float": "cssFloat"
        },
        style: function(b, c, d, g) {
            if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
                var e, f, m, n = j.camelCase(c),
                    l = rc.test(c),
                    q = b.style;
                return l || (c = Jb(n)), m = j.cssHooks[c] || j.cssHooks[n], void 0 === d ? m && "get" in m && void 0 !== (e = m.get(b, !1, g)) ? e : q[c] : (f = typeof d, "string" === f && (e = Ea.exec(d)) && e[1] && (d = t(b, c, e), f = "number"), null != d && d === d && ("number" === f && (d += e && e[3] || (j.cssNumber[n] ? "" : "px")), I.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (q[c] = "inherit"), m && "set" in m && void 0 === (d = m.set(b, d, g)) || (l ? q.setProperty(c, d) : q[c] = d)), void 0)
            }
        },
        css: function(b, c, d, g) {
            var e, f, m, n = j.camelCase(c);
            return rc.test(c) || (c = Jb(n)), m = j.cssHooks[c] || j.cssHooks[n], m && "get" in m && (e = m.get(b, !0, d)), void 0 === e && (e = Fa(b, c, g)), "normal" === e && c in sc && (e = sc[c]), "" === d || d ? (f = parseFloat(e), !0 === d || isFinite(f) ? f || 0 : e) : e
        }
    });
    j.each(["height", "width"], function(b, c) {
        j.cssHooks[c] = {
            get: function(b, d, g) {
                if (d) return !qd.test(j.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? Ob(b, c, g) : kc(b, rd, function() {
                    return Ob(b, c, g)
                })
            },
            set: function(b, d, g) {
                var e, f = g && Na(b);
                g = g && Nb(b, c, g, "border-box" === j.css(b, "boxSizing", !1, f), f);
                return g && (e = Ea.exec(d)) && "px" !== (e[3] || "px") && (b.style[c] = d, d = j.css(b, c)), Mb(b, d, g)
            }
        }
    });
    j.cssHooks.marginLeft = Ib(I.reliableMarginLeft, function(b, c) {
        if (c) return (parseFloat(Fa(b, "marginLeft")) || b.getBoundingClientRect().left - kc(b, {
            marginLeft: 0
        }, function() {
            return b.getBoundingClientRect().left
        })) + "px"
    });
    j.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        j.cssHooks[b + c] = {
            expand: function(d) {
                var g = 0,
                    e = {};
                for (d = "string" == typeof d ? d.split(" ") : [d]; 4 > g; g++) e[b + na[g] + c] = d[g] || d[g - 2] || d[0];
                return e
            }
        };
        Hb.test(b) || (j.cssHooks[b + c].set = Mb)
    });
    j.fn.extend({
        css: function(b, c) {
            return ha(this, function(b, c, d) {
                var g, e = {},
                    f = 0;
                if (Array.isArray(c)) {
                    d = Na(b);
                    for (g = c.length; f < g; f++) e[c[f]] = j.css(b, c[f], !1, d);
                    return e
                }
                return void 0 !== d ? j.style(b, c, d) : j.css(b, c)
            }, b, c, 1 < arguments.length)
        }
    });
    j.Tween = S;
    S.prototype = {
        constructor: S,
        init: function(b, c, d, g, e, f) {
            this.elem = b;
            this.prop = d;
            this.easing = e || j.easing._default;
            this.options = c;
            this.start = this.now = this.cur();
            this.end = g;
            this.unit = f || (j.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = S.propHooks[this.prop];
            return b && b.get ? b.get(this) : S.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = S.propHooks[this.prop];
            return this.options.duration ? this.pos = c = j.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : S.propHooks._default.set(this), this
        }
    };
    S.prototype.init.prototype = S.prototype;
    S.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = j.css(b.elem, b.prop, ""), c && "auto" !== c ? c : 0)
            },
            set: function(b) {
                j.fx.step[b.prop] ? j.fx.step[b.prop](b) : 1 !== b.elem.nodeType || null == b.elem.style[j.cssProps[b.prop]] && !j.cssHooks[b.prop] ? b.elem[b.prop] = b.now : j.style(b.elem, b.prop, b.now + b.unit)
            }
        }
    };
    S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    j.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        },
        _default: "swing"
    };
    j.fx = S.prototype.init;
    j.fx.step = {};
    var ya, Oa, sd = /^(?:toggle|show|hide)$/,
        td = /queueHooks$/;
    j.Animation = j.extend(aa, {
        tweeners: {
            "*": [
                function(b, c) {
                    var d = this.createTween(b, c);
                    return t(d.elem, b, Ea.exec(c), d), d
                }
            ]
        },
        tweener: function(b, c) {
            j.isFunction(b) ? (c = b, b = ["*"]) : b = b.match(W);
            for (var d, g = 0, e = b.length; g < e; g++) d = b[g], aa.tweeners[d] = aa.tweeners[d] || [], aa.tweeners[d].unshift(c)
        },
        prefilters: [
            function(b, c, d) {
                var g, e, f, m, n, l, q, p, u = "width" in c || "height" in c,
                    r = this,
                    t = {},
                    x = b.style,
                    C = b.nodeType && Ma(b),
                    z = D.get(b, "fxshow");
                d.queue || (m = j._queueHooks(b, "fx"), null == m.unqueued && (m.unqueued = 0, n = m.empty.fire, m.empty.fire = function() {
                    m.unqueued || n()
                }), m.unqueued++, r.always(function() {
                    r.always(function() {
                        m.unqueued--;
                        j.queue(b, "fx").length || m.empty.fire()
                    })
                }));
                for (g in c)
                    if (e = c[g], sd.test(e)) {
                        if (delete c[g], f = f || "toggle" === e, e === (C ? "hide" : "show")) {
                            if ("show" !== e || !z || void 0 === z[g]) continue;
                            C = !0
                        }
                        t[g] = z && z[g] || j.style(b, g)
                    }
                if (l = !j.isEmptyObject(c), l || !j.isEmptyObject(t))
                    for (g in u && 1 === b.nodeType && (d.overflow = [x.overflow, x.overflowX, x.overflowY], q = z && z.display, null == q && (q = D.get(b, "display")), p = j.css(b, "display"), "none" === p && (q ? p = q : (s([b], !0), q = b.style.display || q, p = j.css(b, "display"), s([b]))), ("inline" === p || "inline-block" === p && null != q) && "none" === j.css(b, "float") && (l || (r.done(function() {
                        x.display = q
                    }), null == q && (p = x.display, q = "none" === p ? "" : p)), x.display = "inline-block")), d.overflow && (x.overflow = "hidden", r.always(function() {
                        x.overflow = d.overflow[0];
                        x.overflowX = d.overflow[1];
                        x.overflowY = d.overflow[2]
                    })), l = !1, t) l || (z ? "hidden" in z && (C = z.hidden) : z = D.access(b, "fxshow", {
                        display: q
                    }), f && (z.hidden = !C), C && s([b], !0), r.done(function() {
                        C || s([b]);
                        D.remove(b, "fxshow");
                        for (g in t) j.style(b, g, t[g])
                    })), l = Qb(C ? z[g] : 0, g, r), g in z || (z[g] = l.start, C && (l.end = l.start, l.start = 0))
            }
        ],
        prefilter: function(b, c) {
            c ? aa.prefilters.unshift(b) : aa.prefilters.push(b)
        }
    });
    j.speed = function(b, c, d) {
        var g = b && "object" == typeof b ? j.extend({}, b) : {
            complete: d || !d && c || j.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !j.isFunction(c) && c
        };
        return j.fx.off ? g.duration = 0 : "number" != typeof g.duration && (g.duration in j.fx.speeds ? g.duration = j.fx.speeds[g.duration] : g.duration = j.fx.speeds._default), null != g.queue && !0 !== g.queue || (g.queue = "fx"), g.old = g.complete, g.complete = function() {
            j.isFunction(g.old) && g.old.call(this);
            g.queue && j.dequeue(this, g.queue)
        }, g
    };
    j.fn.extend({
        fadeTo: function(b, c, d, g) {
            return this.filter(Ma).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, g)
        },
        animate: function(b, c, d, g) {
            var e = j.isEmptyObject(b),
                f = j.speed(c, d, g);
            c = function() {
                var c = aa(this, j.extend({}, b), f);
                (e || D.get(this, "finish")) && c.stop(!0)
            };
            return c.finish = c, e || !1 === f.queue ? this.each(c) : this.queue(f.queue, c)
        },
        stop: function(b, c, d) {
            var g = function(b) {
                var c = b.stop;
                delete b.stop;
                c(d)
            };
            return "string" != typeof b && (d = c, c = b, b = void 0), c && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    e = null != b && b + "queueHooks",
                    f = j.timers,
                    m = D.get(this);
                if (e) m[e] && m[e].stop && g(m[e]);
                else
                    for (e in m) m[e] && m[e].stop && td.test(e) && g(m[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != b && f[e].queue !== b || (f[e].anim.stop(d), c = !1, f.splice(e, 1));
                !c && d || j.dequeue(this, b)
            })
        },
        finish: function(b) {
            return !1 !== b && (b = b || "fx"), this.each(function() {
                var c, d = D.get(this),
                    g = d[b + "queue"];
                c = d[b + "queueHooks"];
                var e = j.timers,
                    f = g ? g.length : 0;
                d.finish = !0;
                j.queue(this, b, []);
                c && c.stop && c.stop.call(this, !0);
                for (c = e.length; c--;) e[c].elem === this && e[c].queue === b && (e[c].anim.stop(!0), e.splice(c, 1));
                for (c = 0; c < f; c++) g[c] && g[c].finish && g[c].finish.call(this);
                delete d.finish
            })
        }
    });
    j.each(["toggle", "show", "hide"], function(b, c) {
        var d = j.fn[c];
        j.fn[c] = function(b, g, e) {
            return null == b || "boolean" == typeof b ? d.apply(this, arguments) : this.animate(Pa(c, !0), b, g, e)
        }
    });
    j.each({
        slideDown: Pa("show"),
        slideUp: Pa("hide"),
        slideToggle: Pa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        j.fn[b] = function(b, d, g) {
            return this.animate(c, b, d, g)
        }
    });
    j.timers = [];
    j.fx.tick = function() {
        var b, c = 0,
            d = j.timers;
        for (ya = j.now(); c < d.length; c++) b = d[c], b() || d[c] !== b || d.splice(c--, 1);
        d.length || j.fx.stop();
        ya = void 0
    };
    j.fx.timer = function(b) {
        j.timers.push(b);
        j.fx.start()
    };
    j.fx.interval = 13;
    j.fx.start = function() {
        Oa || (Oa = !0, hb())
    };
    j.fx.stop = function() {
        Oa = null
    };
    j.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    j.fn.delay = function(c, d) {
        return c = j.fx ? j.fx.speeds[c] || c : c, d = d || "fx", this.queue(d, function(d, g) {
            var e = b.setTimeout(d, c);
            g.stop = function() {
                b.clearTimeout(e)
            }
        })
    };
    var Ca = z.createElement("input"),
        ud = z.createElement("select").appendChild(z.createElement("option"));
    Ca.type = "checkbox";
    I.checkOn = "" !== Ca.value;
    I.optSelected = ud.selected;
    Ca = z.createElement("input");
    Ca.value = "t";
    Ca.type = "radio";
    I.radioValue = "t" === Ca.value;
    var tc, Ja = j.expr.attrHandle;
    j.fn.extend({
        attr: function(b, c) {
            return ha(this, j.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                j.removeAttr(this, b)
            })
        }
    });
    j.extend({
        attr: function(b, c, d) {
            var g, e, f = b.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof b.getAttribute ? j.prop(b, c, d) : (1 === f && j.isXMLDoc(b) || (e = j.attrHooks[c.toLowerCase()] || (j.expr.match.bool.test(c) ? tc : void 0)), void 0 !== d ? null === d ? void j.removeAttr(b, c) : e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : (b.setAttribute(c, d + ""), d) : e && "get" in e && null !== (g = e.get(b, c)) ? g : (g = j.find.attr(b, c), null == g ? void 0 : g))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (!I.radioValue && "radio" === c && f(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            }
        },
        removeAttr: function(b, c) {
            var d, g = 0,
                e = c && c.match(W);
            if (e && 1 === b.nodeType)
                for (; d = e[g++];) b.removeAttribute(d)
        }
    });
    tc = {
        set: function(b, c, d) {
            return !1 === c ? j.removeAttr(b, d) : b.setAttribute(d, d), d
        }
    };
    j.each(j.expr.match.bool.source.match(/\w+/g), function(b, c) {
        var d = Ja[c] || j.find.attr;
        Ja[c] = function(b, c, g) {
            var e, f, j = c.toLowerCase();
            return g || (f = Ja[j], Ja[j] = e, e = null != d(b, c, g) ? j : null, Ja[j] = f), e
        }
    });
    var vd = /^(?:input|select|textarea|button)$/i,
        wd = /^(?:a|area)$/i;
    j.fn.extend({
        prop: function(b, c) {
            return ha(this, j.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return this.each(function() {
                delete this[j.propFix[b] || b]
            })
        }
    });
    j.extend({
        prop: function(b, c, d) {
            var g, e, f = b.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && j.isXMLDoc(b) || (c = j.propFix[c] || c, e = j.propHooks[c]), void 0 !== d ? e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : b[c] = d : e && "get" in
                e && null !== (g = e.get(b, c)) ? g : b[c]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var c = j.find.attr(b, "tabindex");
                    return c ? parseInt(c, 10) : vd.test(b.nodeName) || wd.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    I.optSelected || (j.propHooks.selected = {
        get: function(b) {
            b = b.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(b) {
            b = b.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    });
    j.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        j.propFix[this.toLowerCase()] = this
    });
    j.fn.extend({
        addClass: function(b) {
            var c, d, g, e, f, m, n = 0;
            if (j.isFunction(b)) return this.each(function(c) {
                j(this).addClass(b.call(this, c, pa(this)))
            });
            if ("string" == typeof b && b)
                for (c = b.match(W) || []; d = this[n++];)
                    if (e = pa(d), g = 1 === d.nodeType && " " + oa(e) + " ") {
                        for (m = 0; f = c[m++];) 0 > g.indexOf(" " + f + " ") && (g += f + " ");
                        g = oa(g);
                        e !== g && d.setAttribute("class", g)
                    }
            return this
        },
        removeClass: function(b) {
            var c, d, g, e, f, m, n = 0;
            if (j.isFunction(b)) return this.each(function(c) {
                j(this).removeClass(b.call(this, c, pa(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof b && b)
                for (c = b.match(W) || []; d = this[n++];)
                    if (e = pa(d), g = 1 === d.nodeType && " " + oa(e) + " ") {
                        for (m = 0; f = c[m++];)
                            for (; - 1 < g.indexOf(" " + f + " ");) g = g.replace(" " + f + " ", " ");
                        g = oa(g);
                        e !== g && d.setAttribute("class", g)
                    }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b;
            return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : j.isFunction(b) ? this.each(function(d) {
                j(this).toggleClass(b.call(this, d, pa(this), c), c)
            }) : this.each(function() {
                var c, g, e, f;
                if ("string" === d) {
                    g = 0;
                    e = j(this);
                    for (f = b.match(W) || []; c = f[g++];) e.hasClass(c) ? e.removeClass(c) : e.addClass(c)
                } else void 0 !== b && "boolean" !== d || (c = pa(this), c && D.set(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || !1 === b ? "" : D.get(this, "__className__") || ""))
            })
        },
        hasClass: function(b) {
            var c, d = 0;
            for (b = " " + b + " "; c = this[d++];)
                if (1 === c.nodeType && -1 < (" " + oa(pa(c)) + " ").indexOf(b)) return !0;
            return !1
        }
    });
    var xd = /\r/g;
    j.fn.extend({
        val: function(b) {
            var c, d, g, e = this[0];
            if (arguments.length) return g = j.isFunction(b), this.each(function(d) {
                var e;
                1 === this.nodeType && (e = g ? b.call(this, d, j(this).val()) : b, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = j.map(e, function(b) {
                    return null == b ? "" : b + ""
                })), c = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, e, "value") || (this.value = e))
            });
            if (e) return c = j.valHooks[e.type] || j.valHooks[e.nodeName.toLowerCase()], c && "get" in c && void 0 !== (d = c.get(e, "value")) ? d : (d = e.value, "string" == typeof d ? d.replace(xd, "") : null == d ? "" : d)
        }
    });
    j.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = j.find.attr(b, "value");
                    return null != c ? c : oa(j.text(b))
                }
            },
            select: {
                get: function(b) {
                    var c, d, g = b.options,
                        e = b.selectedIndex,
                        m = "select-one" === b.type,
                        n = m ? null : [],
                        q = m ? e + 1 : g.length;
                    for (d = 0 > e ? q : m ? e : 0; d < q; d++)
                        if (c = g[d], (c.selected || d === e) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup"))) {
                            if (b = j(c).val(), m) return b;
                            n.push(b)
                        }
                    return n
                },
                set: function(b, c) {
                    for (var d, g, e = b.options, f = j.makeArray(c), m = e.length; m--;) g = e[m], (g.selected = -1 < j.inArray(j.valHooks.option.get(g), f)) && (d = !0);
                    return d || (b.selectedIndex = -1), f
                }
            }
        }
    });
    j.each(["radio", "checkbox"], function() {
        j.valHooks[this] = {
            set: function(b, c) {
                if (Array.isArray(c)) return b.checked = -1 < j.inArray(j(b).val(), c)
            }
        };
        I.checkOn || (j.valHooks[this].get = function(b) {
            return null === b.getAttribute("value") ? "on" : b.value
        })
    });
    var uc = /^(?:focusinfocus|focusoutblur)$/;
    j.extend(j.event, {
        trigger: function(c, d, g, e) {
            var f, m, n, q, l, p, u, r = [g || z],
                t = Ra.call(c, "type") ? c.type : c;
            f = Ra.call(c, "namespace") ? c.namespace.split(".") : [];
            if (m = n = g = g || z, 3 !== g.nodeType && 8 !== g.nodeType && !uc.test(t + j.event.triggered) && (-1 < t.indexOf(".") && (f = t.split("."), t = f.shift(), f.sort()), l = 0 > t.indexOf(":") && "on" + t, c = c[j.expando] ? c : new j.Event(t, "object" == typeof c && c), c.isTrigger = e ? 2 : 3, c.namespace = f.join("."), c.rnamespace = c.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = g), d = null == d ? [c] : j.makeArray(d, [c]), u = j.event.special[t] || {}, e || !u.trigger || !1 !== u.trigger.apply(g, d))) {
                if (!e && !u.noBubble && !j.isWindow(g)) {
                    q = u.delegateType || t;
                    for (uc.test(q + t) || (m = m.parentNode); m; m = m.parentNode) r.push(m), n = m;
                    n === (g.ownerDocument || z) && r.push(n.defaultView || n.parentWindow || b)
                }
                for (f = 0;
                    (m = r[f++]) && !c.isPropagationStopped();) c.type = 1 < f ? q : u.bindType || t, (p = (D.get(m, "events") || {})[c.type] && D.get(m, "handle")) && p.apply(m, d), (p = l && m[l]) && p.apply && ab(m) && (c.result = p.apply(m, d), !1 === c.result && c.preventDefault());
                return c.type = t, e || c.isDefaultPrevented() || u._default && !1 !== u._default.apply(r.pop(), d) || !ab(g) || l && j.isFunction(g[t]) && !j.isWindow(g) && (n = g[l], n && (g[l] = null), j.event.triggered = t, g[t](), j.event.triggered = void 0, n && (g[l] = n)), c.result
            }
        },
        simulate: function(b, c, d) {
            b = j.extend(new j.Event, d, {
                type: b,
                isSimulated: !0
            });
            j.event.trigger(b, null, c)
        }
    });
    j.fn.extend({
        trigger: function(b, c) {
            return this.each(function() {
                j.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            var d = this[0];
            if (d) return j.event.trigger(b, c, d, !0)
        }
    });
    j.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(b, c) {
        j.fn[c] = function(b, d) {
            return 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
        }
    });
    j.fn.extend({
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    I.focusin = "onfocusin" in b;
    I.focusin || j.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = function(b) {
            j.event.simulate(c, b.target, j.event.fix(b))
        };
        j.event.special[c] = {
            setup: function() {
                var g = this.ownerDocument || this,
                    e = D.access(g, c);
                e || g.addEventListener(b, d, !0);
                D.access(g, c, (e || 0) + 1)
            },
            teardown: function() {
                var g = this.ownerDocument || this,
                    e = D.access(g, c) - 1;
                e ? D.access(g, c, e) : (g.removeEventListener(b, d, !0), D.remove(g, c))
            }
        }
    });
    var Ka = b.location,
        vc = j.now(),
        xb = /\?/;
    j.parseXML = function(c) {
        var d;
        if (!c || "string" != typeof c) return null;
        try {
            d = (new b.DOMParser).parseFromString(c, "text/xml")
        } catch (g) {
            d = void 0
        }
        return d && !d.getElementsByTagName("parsererror").length || j.error("Invalid XML: " + c), d
    };
    var Mc = /\[\]$/,
        wc = /\r?\n/g,
        yd = /^(?:submit|button|image|reset|file)$/i,
        zd = /^(?:input|select|textarea|keygen)/i;
    j.param = function(b, c) {
        var d, g = [],
            e = function(b, c) {
                var d = j.isFunction(c) ? c() : c;
                g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(null == d ? "" : d)
            };
        if (Array.isArray(b) || b.jquery && !j.isPlainObject(b)) j.each(b, function() {
            e(this.name, this.value)
        });
        else
            for (d in b) ib(d, b[d], c, e);
        return g.join("&")
    };
    j.fn.extend({
        serialize: function() {
            return j.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = j.prop(this, "elements");
                return b ? j.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name && !j(this).is(":disabled") && zd.test(this.nodeName) && !yd.test(b) && (this.checked || !lc.test(b))
            }).map(function(b, c) {
                var d = j(this).val();
                return null == d ? null : Array.isArray(d) ? j.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(wc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(wc, "\r\n")
                }
            }).get()
        }
    });
    var Ad = /%20/g,
        Bd = /#.*$/,
        Cd = /([?&])_=[^&]*/,
        Dd = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ed = /^(?:GET|HEAD)$/,
        Fd = /^\/\//,
        xc = {},
        jb = {},
        yc = "*/".concat("*"),
        yb = z.createElement("a");
    yb.href = Ka.href;
    j.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ka.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ka.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yc,
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
                "text xml": j.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(b, c) {
            return c ? kb(kb(b, j.ajaxSettings), c) : kb(j.ajaxSettings, b)
        },
        ajaxPrefilter: Rb(xc),
        ajaxTransport: Rb(jb),
        ajax: function(c, d) {
            function g(c, d, n, l) {
                var r, t, v, y, G = d;
                if (!p) {
                    p = !0;
                    q && b.clearTimeout(q);
                    e = void 0;
                    m = l || "";
                    L.readyState = 0 < c ? 4 : 0;
                    l = 200 <= c && 300 > c || 304 === c;
                    if (n) {
                        v = s;
                        for (var wa = L, z, H, F, E, N = v.contents, I = v.dataTypes;
                            "*" === I[0];) I.shift(), void 0 === z && (z = v.mimeType || wa.getResponseHeader("Content-Type"));
                        if (z)
                            for (H in N)
                                if (N[H] && N[H].test(z)) {
                                    I.unshift(H);
                                    break
                                }
                        if (I[0] in n) F = I[0];
                        else {
                            for (H in n) {
                                if (!I[0] || v.converters[H + " " + I[0]]) {
                                    F = H;
                                    break
                                }
                                E || (E = H)
                            }
                            F = F || E
                        }
                        v = n = F ? (F !== I[0] && I.unshift(F), n[F]) : void 0
                    }
                    var M;
                    a: {
                        n = s;
                        z = v;
                        H = L;
                        F = l;
                        var T, P, O;
                        v = {};
                        wa = n.dataTypes.slice();
                        if (wa[1])
                            for (T in n.converters) v[T.toLowerCase()] = n.converters[T];
                        for (E = wa.shift(); E;)
                            if (n.responseFields[E] && (H[n.responseFields[E]] = z), !O && F && n.dataFilter && (z = n.dataFilter(z, n.dataType)), O = E, E = wa.shift())
                                if ("*" === E) E = O;
                                else if ("*" !== O && O !== E) {
                            if (T = v[O + " " + E] || v["* " +
                                E], !T)
                                for (M in v)
                                    if (P = M.split(" "), P[1] === E && (T = v[O + " " + P[0]] || v["* " + P[0]])) {
                                        !0 === T ? T = v[M] : !0 !== v[M] && (E = P[0], wa.unshift(P[1]));
                                        break
                                    }
                            if (!0 !== T)
                                if (T && n["throws"]) z = T(z);
                                else try {
                                    z = T(z)
                                } catch (Q) {
                                    M = {
                                        state: "parsererror",
                                        error: T ? Q : "No conversion from " + O + " to " + E
                                    };
                                    break a
                                }
                        }
                        M = {
                            state: "success",
                            data: z
                        }
                    }
                    v = M;
                    l ? (s.ifModified && (y = L.getResponseHeader("Last-Modified"), y && (j.lastModified[f] = y), y = L.getResponseHeader("etag"), y && (j.etag[f] = y)), 204 === c || "HEAD" === s.type ? G = "nocontent" : 304 === c ? G = "notmodified" : (G = v.state, r = v.data, t = v.error, l = !t)) : (t = G, !c && G || (G = "error", 0 > c && (c = 0)));
                    L.status = c;
                    L.statusText = (d || G) + "";
                    l ? D.resolveWith(x, [r, G, L]) : D.rejectWith(x, [L, G, t]);
                    L.statusCode(K);
                    K = void 0;
                    u && C.trigger(l ? "ajaxSuccess" : "ajaxError", [L, s, l ? r : t]);
                    J.fireWith(x, [L, G]);
                    u && (C.trigger("ajaxComplete", [L, s]), --j.active || j.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof c && (d = c, c = void 0);
            d = d || {};
            var e, f, m, n, q, l, p, u, t, r, s = j.ajaxSetup({}, d),
                x = s.context || s,
                C = s.context && (x.nodeType || x.jquery) ? j(x) : j.event,
                D = j.Deferred(),
                J = j.Callbacks("once memory"),
                K = s.statusCode || {},
                H = {},
                F = {},
                E = "canceled",
                L = {
                    readyState: 0,
                    getResponseHeader: function(b) {
                        var c;
                        if (p) {
                            if (!n)
                                for (n = {}; c = Dd.exec(m);) n[c[1].toLowerCase()] = c[2];
                            c = n[b.toLowerCase()]
                        }
                        return null == c ? null : c
                    },
                    getAllResponseHeaders: function() {
                        return p ? m : null
                    },
                    setRequestHeader: function(b, c) {
                        return null == p && (b = F[b.toLowerCase()] = F[b.toLowerCase()] || b, H[b] = c), this
                    },
                    overrideMimeType: function(b) {
                        return null == p && (s.mimeType = b), this
                    },
                    statusCode: function(b) {
                        var c;
                        if (b)
                            if (p) L.always(b[L.status]);
                            else
                                for (c in b) K[c] = [K[c], b[c]];
                        return this
                    },
                    abort: function(b) {
                        b = b || E;
                        return e && e.abort(b), g(0, b), this
                    }
                };
            if (D.promise(L), s.url = ((c || s.url || Ka.href) + "").replace(Fd, Ka.protocol + "//"), s.type = d.method || d.type || s.method || s.type, s.dataTypes = (s.dataType || "*").toLowerCase().match(W) || [""], null == s.crossDomain) {
                l = z.createElement("a");
                try {
                    l.href = s.url, l.href = l.href, s.crossDomain = yb.protocol + "//" + yb.host != l.protocol + "//" + l.host
                } catch (I) {
                    s.crossDomain = !0
                }
            }
            if (s.data && s.processData && "string" != typeof s.data && (s.data = j.param(s.data, s.traditional)), Sb(xc, s, d, L), p) return L;
            (u = j.event && s.global) && 0 === j.active++ && j.event.trigger("ajaxStart");
            s.type = s.type.toUpperCase();
            s.hasContent = !Ed.test(s.type);
            f = s.url.replace(Bd, "");
            s.hasContent ? s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (s.data = s.data.replace(Ad, "+")) : (r = s.url.slice(f.length), s.data && (f += (xb.test(f) ? "&" : "?") + s.data, delete s.data), !1 === s.cache && (f = f.replace(Cd, "$1"), r = (xb.test(f) ? "&" : "?") + "_=" + vc+++r), s.url = f + r);
            s.ifModified && (j.lastModified[f] && L.setRequestHeader("If-Modified-Since", j.lastModified[f]), j.etag[f] && L.setRequestHeader("If-None-Match", j.etag[f]));
            (s.data && s.hasContent && !1 !== s.contentType || d.contentType) && L.setRequestHeader("Content-Type", s.contentType);
            L.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + yc + "; q=0.01" : "") : s.accepts["*"]);
            for (t in s.headers) L.setRequestHeader(t, s.headers[t]);
            if (s.beforeSend && (!1 === s.beforeSend.call(x, L, s) || p)) return L.abort();
            if (E = "abort", J.add(s.complete), L.done(s.success), L.fail(s.error), e = Sb(jb, s, d, L)) {
                if (L.readyState = 1, u && C.trigger("ajaxSend", [L, s]), p) return L;
                s.async && 0 < s.timeout && (q = b.setTimeout(function() {
                    L.abort("timeout")
                }, s.timeout));
                try {
                    p = !1, e.send(H, g)
                } catch (N) {
                    if (p) throw N;
                    g(-1, N)
                }
            } else g(-1, "No Transport");
            return L
        },
        getJSON: function(b, c, d) {
            return j.get(b, c, d, "json")
        },
        getScript: function(b, c) {
            return j.get(b, void 0, c, "script")
        }
    });
    j.each(["get", "post"], function(b, c) {
        j[c] = function(b, d, g, e) {
            return j.isFunction(d) && (e = e || g, g = d, d = void 0), j.ajax(j.extend({
                url: b,
                type: c,
                dataType: e,
                data: d,
                success: g
            }, j.isPlainObject(b) && b))
        }
    });
    j._evalUrl = function(b) {
        return j.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    j.fn.extend({
        wrapAll: function(b) {
            var c;
            return this[0] && (j.isFunction(b) && (b = b.call(this[0])), c = j(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                for (var b = this; b.firstElementChild;) b = b.firstElementChild;
                return b
            }).append(this)), this
        },
        wrapInner: function(b) {
            return j.isFunction(b) ? this.each(function(c) {
                j(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = j(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = j.isFunction(b);
            return this.each(function(d) {
                j(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function(b) {
            return this.parent(b).not("body").each(function() {
                j(this).replaceWith(this.childNodes)
            }), this
        }
    });
    j.expr.pseudos.hidden = function(b) {
        return !j.expr.pseudos.visible(b)
    };
    j.expr.pseudos.visible = function(b) {
        return !(!b.offsetWidth && !b.offsetHeight && !b.getClientRects().length)
    };
    j.ajaxSettings.xhr = function() {
        try {
            return new b.XMLHttpRequest
        } catch (c) {}
    };
    var Gd = {
            "0": 200,
            1223: 204
        },
        La = j.ajaxSettings.xhr();
    I.cors = !!La && "withCredentials" in La;
    I.ajax = La = !!La;
    j.ajaxTransport(function(c) {
        var d, g;
        if (I.cors || La && !c.crossDomain) return {
            send: function(e, f) {
                var j, m = c.xhr();
                if (m.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields)
                    for (j in c.xhrFields) m[j] = c.xhrFields[j];
                c.mimeType && m.overrideMimeType && m.overrideMimeType(c.mimeType);
                c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (j in e) m.setRequestHeader(j, e[j]);
                d = function(b) {
                    return function() {
                        d && (d = g = m.onload = m.onerror = m.onabort = m.onreadystatechange = null, "abort" === b ? m.abort() : "error" === b ? "number" != typeof m.status ? f(0, "error") : f(m.status, m.statusText) : f(Gd[m.status] || m.status, m.statusText, "text" !== (m.responseType || "text") || "string" != typeof m.responseText ? {
                            binary: m.response
                        } : {
                            text: m.responseText
                        }, m.getAllResponseHeaders()))
                    }
                };
                m.onload = d();
                g = m.onerror = d("error");
                void 0 !== m.onabort ? m.onabort = g : m.onreadystatechange = function() {
                    4 === m.readyState && b.setTimeout(function() {
                        d && g()
                    })
                };
                d = d("abort");
                try {
                    m.send(c.hasContent && c.data || null)
                } catch (n) {
                    if (d) throw n;
                }
            },
            abort: function() {
                d && d()
            }
        }
    });
    j.ajaxPrefilter(function(b) {
        b.crossDomain && (b.contents.script = !1)
    });
    j.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(b) {
                return j.globalEval(b), b
            }
        }
    });
    j.ajaxPrefilter("script", function(b) {
        void 0 === b.cache && (b.cache = !1);
        b.crossDomain && (b.type = "GET")
    });
    j.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var c, d;
            return {
                send: function(g, e) {
                    c = j("<script>").prop({
                        charset: b.scriptCharset,
                        src: b.url
                    }).on("load error", d = function(b) {
                        c.remove();
                        d = null;
                        b && e("error" === b.type ? 404 : 200, b.type)
                    });
                    z.head.appendChild(c[0])
                },
                abort: function() {
                    d && d()
                }
            }
        }
    });
    var zc = [],
        zb = /(=)\?(?=&|$)|\?\?/;
    j.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = zc.pop() || j.expando + "_" + vc++;
            return this[b] = !0, b
        }
    });
    j.ajaxPrefilter("json jsonp", function(c, d, g) {
        var e, f, m, n = !1 !== c.jsonp && (zb.test(c.url) ? "url" : "string" == typeof c.data && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && zb.test(c.data) && "data");
        if (n || "jsonp" === c.dataTypes[0]) return e = c.jsonpCallback = j.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, n ? c[n] = c[n].replace(zb, "$1" + e) : !1 !== c.jsonp && (c.url += (xb.test(c.url) ? "&" : "?") + c.jsonp + "=" + e), c.converters["script json"] = function() {
            return m || j.error(e + " was not called"), m[0]
        }, c.dataTypes[0] = "json", f = b[e], b[e] = function() {
            m = arguments
        }, g.always(function() {
            void 0 === f ? j(b).removeProp(e) : b[e] = f;
            c[e] && (c.jsonpCallback = d.jsonpCallback, zc.push(e));
            m && j.isFunction(f) && f(m[0]);
            m = f = void 0
        }), "script"
    });
    var Hd = I,
        Ac, Bc = z.implementation.createHTMLDocument("").body;
    Ac = (Bc.innerHTML = "<form></form><form></form>", 2 === Bc.childNodes.length);
    Hd.createHTMLDocument = Ac;
    j.parseHTML = function(b, c, d) {
        if ("string" != typeof b) return [];
        "boolean" == typeof c && (d = c, c = !1);
        var g, e, f;
        return c || (I.createHTMLDocument ? (c = z.implementation.createHTMLDocument(""), g = c.createElement("base"), g.href = z.location.href, c.head.appendChild(g)) : c = z), e = hc.exec(b), f = !d && [], e ? [c.createElement(e[1])] : (e = F([b], c, f), f && f.length && j(f).remove(), j.merge([], e.childNodes))
    };
    j.fn.load = function(b, c, d) {
        var g, e, f, m = this,
            n = b.indexOf(" ");
        return -1 < n && (g = oa(b.slice(n)), b = b.slice(0, n)), j.isFunction(c) ? (d = c, c = void 0) : c && "object" == typeof c && (e = "POST"), 0 < m.length && j.ajax({
            url: b,
            type: e || "GET",
            dataType: "html",
            data: c
        }).done(function(b) {
            f = arguments;
            m.html(g ? j("<div>").append(j.parseHTML(b)).find(g) : b)
        }).always(d && function(b, c) {
            m.each(function() {
                d.apply(this, f || [b.responseText, c, b])
            })
        }), this
    };
    j.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        j.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    j.expr.pseudos.animated = function(b) {
        return j.grep(j.timers, function(c) {
            return b === c.elem
        }).length
    };
    j.offset = {
        setOffset: function(b, c, d) {
            var g, e, f, m, n, l, q = j.css(b, "position"),
                p = j(b),
                u = {};
            "static" === q && (b.style.position = "relative");
            n = p.offset();
            f = j.css(b, "top");
            l = j.css(b, "left");
            ("absolute" === q || "fixed" === q) && -1 < (f + l).indexOf("auto") ? (g = p.position(), m = g.top, e = g.left) : (m = parseFloat(f) || 0, e = parseFloat(l) || 0);
            j.isFunction(c) && (c = c.call(b, d, j.extend({}, n)));
            null != c.top && (u.top = c.top - n.top + m);
            null != c.left && (u.left = c.left - n.left + e);
            "using" in c ? c.using.call(b, u) : p.css(u)
        }
    };
    j.fn.extend({
        offset: function(b) {
            if (arguments.length) return void 0 === b ? this : this.each(function(c) {
                j.offset.setOffset(this, b, c)
            });
            var c, d, g, e, f = this[0];
            if (f) return f.getClientRects().length ? (g = f.getBoundingClientRect(), c = f.ownerDocument, d = c.documentElement, e = c.defaultView, {
                top: g.top + e.pageYOffset - d.clientTop,
                left: g.left + e.pageXOffset - d.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var b, c, d = this[0],
                    g = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === j.css(d, "position") ? c = d.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), f(b[0], "html") || (g = b.offset()), g = {
                    top: g.top + j.css(b[0], "borderTopWidth", !0),
                    left: g.left +
                        j.css(b[0], "borderLeftWidth", !0)
                }), {
                    top: c.top - g.top - j.css(d, "marginTop", !0),
                    left: c.left - g.left - j.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent; b && "static" === j.css(b, "position");) b = b.offsetParent;
                return b || db
            })
        }
    });
    j.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        j.fn[b] = function(g) {
            return ha(this, function(b, g, e) {
                var f;
                return j.isWindow(b) ? f = b : 9 === b.nodeType && (f = b.defaultView), void 0 === e ? f ? f[c] : b[g] : void(f ? f.scrollTo(d ? f.pageXOffset : e, d ? e : f.pageYOffset) : b[g] = e)
            }, b, g, arguments.length)
        }
    });
    j.each(["top", "left"], function(b, c) {
        j.cssHooks[c] = Ib(I.pixelPosition, function(b, d) {
            if (d) return d = Fa(b, c), gb.test(d) ? j(b).position()[c] + "px" : d
        })
    });
    j.each({
        Height: "height",
        Width: "width"
    }, function(b, c) {
        j.each({
            padding: "inner" + b,
            content: c,
            "": "outer" + b
        }, function(d, g) {
            j.fn[g] = function(e, f) {
                var m = arguments.length && (d || "boolean" != typeof e),
                    n = d || (!0 === e || !0 === f ? "margin" : "border");
                return ha(this, function(c, d, e) {
                    var f;
                    return j.isWindow(c) ? 0 === g.indexOf("outer") ? c["inner" + b] : c.document.documentElement["client" + b] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + b], f["scroll" + b], c.body["offset" + b], f["offset" + b], f["client" + b])) : void 0 === e ? j.css(c, d, n) : j.style(c, d, e, n)
                }, c, m ? e : void 0, m)
            }
        })
    });
    j.fn.extend({
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b, null, c)
        },
        delegate: function(b, c, d, g) {
            return this.on(c, b, d, g)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        }
    });
    j.holdReady = function(b) {
        b ? j.readyWait++ : j.ready(!0)
    };
    j.isArray = Array.isArray;
    j.parseJSON = JSON.parse;
    j.nodeName = f;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return j
    });
    var Id = b.jQuery,
        Jd = b.$;
    return j.noConflict = function(c) {
        return b.$ === j && (b.$ = Jd), c && b.jQuery === j && (b.jQuery = Id), j
    }, c || (b.jQuery = b.$ = j), j
});

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b) this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            e;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var f = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", f, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", f, !0);
                    f("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            e, f = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var l = document.createElement("object");
            l.id = "jukebox-flashstream-" + this.id;
            l.setAttribute("type", "application/x-shockwave-flash");
            l.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            l.setAttribute("width", "0");
            l.setAttribute("height", "0");
            f.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            f.flashvars = b.join("&amp;");
            for (e in f) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", f[e]), l.appendChild(b);
            c.outerHTML = l.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c = document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            f.play = !1;
            f.loop = !1;
            f.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in f) c.setAttribute(e, f[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                e;
            if (void 0 !== d[b]) e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var f in d)
                    if (e >= d[f].start && e <=
                        d[f].end) {
                        b = f;
                        break
                    }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" === typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                e: "3gp",
                m: ["audio/3gpp", "audio/amr"]
            }, {
                e: "aac",
                m: ["audio/aac", "audio/aacp"]
            }, {
                e: "amr",
                m: ["audio/amr", "audio/3gpp"]
            }, {
                e: "caf",
                m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
            }, {
                e: "m4a",
                m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
            }, {
                e: "mp3",
                m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
            }, {
                e: "mpga",
                m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
            }, {
                e: "mp4",
                m: ["audio/mp4", "video/mp4"]
            }, {
                e: "ogg",
                m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
            }, {
                e: "wav",
                m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
            }, {
                e: "webm",
                m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
            }], d, e, f = 0, l = c.length; f < l; f++)
                if (e = c[f].e, c[f].m.length && "object" === typeof c[f].m)
                    for (var r = 0, p = c[f].m.length; r < p; r++)
                        if (d = c[f].m[r], "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (g) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var f in c) d[f] = c[f];
            d.autoplay = !1;
            f = new jukebox.Player(d, b);
            f.isClone = !0;
            f.wasReady = !1;
            return this.__clones[f.id] = f
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d], c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                f = e.match(/\.([^\.]*)$/)[1];
            if (f && this.codecs[f]) return e
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = function() {
        this.init()
    };
    b.prototype = {
        init: function() {
            var b = this || c;
            b._codecs = {};
            b._howls = [];
            b._muted = !1;
            b._volume = 1;
            b._canPlayEvent = "canplaythrough";
            b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
            b.masterGain = null;
            b.noAudio = !1;
            b.usingWebAudio = !0;
            b.autoSuspend = !0;
            b.ctx = null;
            b.mobileAutoEnable = !0;
            b._setup();
            return b
        },
        volume: function(b) {
            var d = this || c;
            b = parseFloat(b);
            d.ctx || p();
            if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
                d._volume = b;
                if (d._muted) return d;
                d.usingWebAudio && (d.masterGain.gain.value = b);
                for (var e = 0; e < d._howls.length; e++)
                    if (!d._howls[e]._webAudio)
                        for (var f = d._howls[e]._getSoundIds(), l = 0; l < f.length; l++) {
                            var t = d._howls[e]._soundById(f[l]);
                            t && t._node && (t._node.volume = t._volume * b)
                        }
                    return d
            }
            return d._volume
        },
        mute: function(b) {
            var d = this || c;
            d.ctx || p();
            d._muted = b;
            d.usingWebAudio && (d.masterGain.gain.value = b ? 0 : d._volume);
            for (var e = 0; e < d._howls.length; e++)
                if (!d._howls[e]._webAudio)
                    for (var f = d._howls[e]._getSoundIds(), l = 0; l < f.length; l++) {
                        var t = d._howls[e]._soundById(f[l]);
                        t && t._node && (t._node.muted = b ? !0 : t._muted)
                    }
                return d
        },
        unload: function() {
            for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
            b.usingWebAudio && b.ctx && "undefined" !== typeof b.ctx.close && (b.ctx.close(), b.ctx = null, p());
            return b
        },
        codecs: function(b) {
            return (this || c)._codecs[b.replace(/^x-/, "")]
        },
        _setup: function() {
            var b = this || c;
            b.state = b.ctx ? b.ctx.state || "running" : "running";
            b._autoSuspend();
            if (!b.usingWebAudio)
                if ("undefined" !== typeof Audio) try {
                    var d = new Audio;
                    "undefined" === typeof d.oncanplaythrough && (b._canPlayEvent = "canplay")
                } catch (e) {
                    b.noAudio = !0
                } else b.noAudio = !0;
            try {
                d = new Audio, d.muted && (b.noAudio = !0)
            } catch (f) {}
            b.noAudio || b._setupCodecs();
            return b
        },
        _setupCodecs: function() {
            var b = this || c,
                d = null;
            try {
                d = "undefined" !== typeof Audio ? new Audio : null
            } catch (e) {
                return b
            }
            if (!d || "function" !== typeof d.canPlayType) return b;
            var f = d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                l = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
                l = l && 33 > parseInt(l[0].split("/")[1], 10);
            b._codecs = {
                mp3: !(l || !f && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!f,
                opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(d.canPlayType("audio/x-m4a;") || d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return b
        },
        _enableMobileAudio: function() {
            var b = this || c,
                d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(b._navigator && b._navigator.userAgent),
                e = !!("ontouchend" in window || b._navigator && 0 < b._navigator.maxTouchPoints || b._navigator && 0 < b._navigator.msMaxTouchPoints);
            if (!b._mobileEnabled && b.ctx && (d || e)) {
                b._mobileEnabled = !1;
                !b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
                b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
                var f = function() {
                    var c = b.ctx.createBufferSource();
                    c.buffer = b._scratchBuffer;
                    c.connect(b.ctx.destination);
                    "undefined" === typeof c.start ? c.noteOn(0) : c.start(0);
                    c.onended = function() {
                        c.disconnect(0);
                        b._mobileEnabled = !0;
                        b.mobileAutoEnable = !1;
                        document.removeEventListener("touchend", f, !0)
                    }
                };
                document.addEventListener("touchend", f, !0);
                return b
            }
        },
        _autoSuspend: function() {
            var b = this;
            if (b.autoSuspend && b.ctx && "undefined" !== typeof b.ctx.suspend && c.usingWebAudio) {
                for (var d = 0; d < b._howls.length; d++)
                    if (b._howls[d]._webAudio)
                        for (var e = 0; e < b._howls[d]._sounds.length; e++)
                            if (!b._howls[d]._sounds[e]._paused) return b;
                b._suspendTimer && clearTimeout(b._suspendTimer);
                b._suspendTimer = setTimeout(function() {
                    b.autoSuspend && (b._suspendTimer = null, b.state = "suspending", b.ctx.suspend().then(function() {
                        b.state = "suspended";
                        b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume())
                    }))
                }, 3E4);
                return b
            }
        },
        _autoResume: function() {
            var b = this;
            if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.state = "resuming", b.ctx.resume().then(function() {
                b.state = "running";
                for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
            }), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
        }
    };
    var c = new b,
        d = function(b) {
            !b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(b)
        };
    d.prototype = {
        init: function(b) {
            var d = this;
            c.ctx || p();
            d._autoplay = b.autoplay || !1;
            d._format = "string" !== typeof b.format ? b.format : [b.format];
            d._html5 = b.html5 || !1;
            d._muted = b.mute || !1;
            d._loop = b.loop || !1;
            d._pool = b.pool || 5;
            d._preload = "boolean" === typeof b.preload ? b.preload : !0;
            d._rate = b.rate || 1;
            d._sprite = b.sprite || {};
            d._src = "string" !== typeof b.src ? b.src : [b.src];
            d._volume = void 0 !== b.volume ? b.volume : 1;
            d._duration = 0;
            d._state = "unloaded";
            d._sounds = [];
            d._endTimers = {};
            d._queue = [];
            d._onend = b.onend ? [{
                fn: b.onend
            }] : [];
            d._onfade = b.onfade ? [{
                fn: b.onfade
            }] : [];
            d._onload = b.onload ? [{
                fn: b.onload
            }] : [];
            d._onloaderror = b.onloaderror ? [{
                fn: b.onloaderror
            }] : [];
            d._onpause = b.onpause ? [{
                fn: b.onpause
            }] : [];
            d._onplay = b.onplay ? [{
                fn: b.onplay
            }] : [];
            d._onstop = b.onstop ? [{
                fn: b.onstop
            }] : [];
            d._onmute = b.onmute ? [{
                fn: b.onmute
            }] : [];
            d._onvolume = b.onvolume ? [{
                fn: b.onvolume
            }] : [];
            d._onrate = b.onrate ? [{
                fn: b.onrate
            }] : [];
            d._onseek = b.onseek ? [{
                fn: b.onseek
            }] : [];
            d._onresume = [];
            d._webAudio = c.usingWebAudio && !d._html5;
            "undefined" !== typeof c.ctx && c.ctx && c.mobileAutoEnable && c._enableMobileAudio();
            c._howls.push(d);
            d._autoplay && d._queue.push({
                event: "play",
                action: function() {
                    d.play()
                }
            });
            d._preload && d.load();
            return d
        },
        load: function() {
            var b = null;
            if (c.noAudio) this._emit("loaderror", null, "No audio support.");
            else {
                "string" === typeof this._src && (this._src = [this._src]);
                for (var d = 0; d < this._src.length; d++) {
                    var n, q;
                    if (this._format && this._format[d]) n = this._format[d];
                    else {
                        q = this._src[d];
                        if ("string" !== typeof q) {
                            this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }(n = /^data:audio\/([^;,]+);/i.exec(q)) || (n = /\.([^.]+)$/.exec(q.split("?", 1)[0]));
                        n && (n = n[1].toLowerCase())
                    } if (c.codecs(n)) {
                        b = this._src[d];
                        break
                    }
                }
                if (b) {
                    this._src = b;
                    this._state = "loading";
                    "https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
                    new e(this);
                    if (this._webAudio) {
                        var p = this,
                            t = p._src;
                        if (f[t]) p._duration = f[t].duration, r(p);
                        else if (/^data:[^;]+;base64,/.test(t)) {
                            b = atob(t.split(",")[1]);
                            d = new Uint8Array(b.length);
                            for (n = 0; n < b.length; ++n) d[n] = b.charCodeAt(n);
                            l(d.buffer, p)
                        } else {
                            var s = new XMLHttpRequest;
                            s.open("GET", t, !0);
                            s.responseType = "arraybuffer";
                            s.onload = function() {
                                var b = (s.status + "")[0];
                                "0" !== b && "2" !== b && "3" !== b ? p._emit("loaderror", null, "Failed loading audio file with status: " +
                                    s.status + ".") : l(s.response, p)
                            };
                            s.onerror = function() {
                                p._webAudio && (p._html5 = !0, p._webAudio = !1, p._sounds = [], delete f[t], p.load())
                            };
                            try {
                                s.send()
                            } catch (x) {
                                s.onerror()
                            }
                        }
                    }
                    return this
                }
                this._emit("loaderror", null, "No codec support for selected audio sources.")
            }
        },
        play: function(b, d) {
            var e = this,
                f = null;
            if ("number" === typeof b) f = b, b = null;
            else {
                if ("string" === typeof b && "loaded" === e._state && !e._sprite[b]) return null;
                if ("undefined" === typeof b) {
                    b = "__default";
                    for (var l = 0, p = 0; p < e._sounds.length; p++) e._sounds[p]._paused && !e._sounds[p]._ended && (l++, f = e._sounds[p]._id);
                    1 === l ? b = null : f = null
                }
            }
            var r = f ? e._soundById(f) : e._inactiveSound();
            if (!r) return null;
            f && !b && (b = r._sprite || "__default");
            if ("loaded" !== e._state && !e._sprite[b]) return e._queue.push({
                event: "play",
                action: function() {
                    e.play(e._soundById(r._id) ? r._id : void 0)
                }
            }), r._id;
            if (f && !r._paused) return d || setTimeout(function() {
                e._emit("play", r._id)
            }, 0), r._id;
            e._webAudio && c._autoResume();
            var x = Math.max(0, 0 < r._seek ? r._seek : e._sprite[b][0] / 1E3),
                H = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) /
                    1E3 - x),
                F = 1E3 * H / Math.abs(r._rate);
            r._paused = !1;
            r._ended = !1;
            r._sprite = b;
            r._seek = x;
            r._start = e._sprite[b][0] / 1E3;
            r._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
            r._loop = !(!r._loop && !e._sprite[b][2]);
            var K = r._node;
            if (e._webAudio) f = function() {
                e._refreshBuffer(r);
                K.gain.setValueAtTime(r._muted || e._muted ? 0 : r._volume, c.ctx.currentTime);
                r._playStart = c.ctx.currentTime;
                "undefined" === typeof K.bufferSource.start ? r._loop ? K.bufferSource.noteGrainOn(0, x, 86400) : K.bufferSource.noteGrainOn(0, x, H) : r._loop ? K.bufferSource.start(0,
                    x, 86400) : K.bufferSource.start(0, x, H);
                Infinity !== F && (e._endTimers[r._id] = setTimeout(e._ended.bind(e, r), F));
                d || setTimeout(function() {
                    e._emit("play", r._id)
                }, 0)
            }, l = "running" === c.state, "loaded" === e._state && l ? f() : (e.once(l ? "load" : "resume", f, l ? r._id : null), e._clearTimer(r._id));
            else {
                var V = function() {
                        K.currentTime = x;
                        K.muted = r._muted || e._muted || c._muted || K.muted;
                        K.volume = r._volume * c.volume();
                        K.playbackRate = r._rate;
                        setTimeout(function() {
                            K.play();
                            Infinity !== F && (e._endTimers[r._id] = setTimeout(e._ended.bind(e, r), F));
                            d || e._emit("play", r._id)
                        }, 0)
                    },
                    f = "loaded" === e._state && (window && window.ejecta || !K.readyState && c._navigator.isCocoonJS);
                if (4 === K.readyState || f) V();
                else {
                    var ma = function() {
                        V();
                        K.removeEventListener(c._canPlayEvent, ma, !1)
                    };
                    K.addEventListener(c._canPlayEvent, ma, !1);
                    e._clearTimer(r._id)
                }
            }
            return r._id
        },
        pause: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "pause",
                action: function() {
                    d.pause(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
                d._clearTimer(e[f]);
                var l = d._soundById(e[f]);
                if (l && !l._paused && (l._seek = d.seek(e[f]), l._rateSeek = 0, l._paused = !0, d._stopFade(e[f]), l._node))
                    if (d._webAudio) {
                        if (!l._node.bufferSource) break;
                        "undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0);
                        d._cleanBuffer(l._node)
                    } else(!isNaN(l._node.duration) || Infinity === l._node.duration) && l._node.pause();
                c || d._emit("pause", l ? l._id : null)
            }
            return d
        },
        stop: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "stop",
                action: function() {
                    d.stop(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
                d._clearTimer(e[f]);
                var l = d._soundById(e[f]);
                if (l && (l._seek = l._start || 0, l._rateSeek = 0, l._paused = !0, l._ended = !0, d._stopFade(e[f]), l._node))
                    if (d._webAudio) {
                        if (!l._node.bufferSource) {
                            c || d._emit("stop", l._id);
                            break
                        }
                        "undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0);
                        d._cleanBuffer(l._node)
                    } else if (!isNaN(l._node.duration) || Infinity === l._node.duration) l._node.currentTime = l._start || 0, l._node.pause();
                l && !c && d._emit("stop", l._id)
            }
            return d
        },
        mute: function(b, d) {
            var e = this;
            if ("loaded" !== e._state) return e._queue.push({
                event: "mute",
                action: function() {
                    e.mute(b, d)
                }
            }), e;
            if ("undefined" === typeof d)
                if ("boolean" === typeof b) e._muted = b;
                else return e._muted;
            for (var f = e._getSoundIds(d), l = 0; l < f.length; l++) {
                var p = e._soundById(f[l]);
                p && (p._muted = b, e._webAudio && p._node ? p._node.gain.setValueAtTime(b ? 0 : p._volume, c.ctx.currentTime) : p._node && (p._node.muted = c._muted ? !0 : b), e._emit("mute", p._id))
            }
            return e
        },
        volume: function() {
            var b = this,
                d = arguments,
                e, f;
            if (0 === d.length) return b._volume;
            1 === d.length || 2 === d.length && "undefined" === typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var l;
            if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "volume",
                    action: function() {
                        b.volume.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._volume = e);
                f = b._getSoundIds(f);
                for (var p = 0; p < f.length; p++)
                    if (l = b._soundById(f[p])) l._volume = e, d[2] || b._stopFade(f[p]), b._webAudio && l._node && !l._muted ? l._node.gain.setValueAtTime(e, c.ctx.currentTime) : l._node && !l._muted && (l._node.volume = e * c.volume()), b._emit("volume", l._id)
            } else return (l = f ? b._soundById(f) : b._sounds[0]) ? l._volume : 0;
            return b
        },
        fade: function(b, d, e, f) {
            var l = this,
                p = Math.abs(b - d),
                r = b > d ? "out" : "in",
                x = p / 0.01,
                p = 0 < x ? e / x : e;
            4 > p && (x = Math.ceil(x / (4 / p)), p = 4);
            if ("loaded" !== l._state) return l._queue.push({
                event: "fade",
                action: function() {
                    l.fade(b, d, e, f)
                }
            }), l;
            l.volume(b, f);
            for (var H = l._getSoundIds(f), F = 0; F < H.length; F++) {
                var K = l._soundById(H[F]);
                if (K) {
                    f || l._stopFade(H[F]);
                    if (l._webAudio && !K._muted) {
                        var V = c.ctx.currentTime,
                            ma = V + e / 1E3;
                        K._volume = b;
                        K._node.gain.setValueAtTime(b, V);
                        K._node.gain.linearRampToValueAtTime(d, ma)
                    }
                    var P = b;
                    K._interval = setInterval(function(b, c) {
                        0 < x && (P += "in" === r ? 0.01 : -0.01);
                        P = Math.max(0, P);
                        P = Math.min(1, P);
                        P = Math.round(100 * P) / 100;
                        l._webAudio ? ("undefined" === typeof f && (l._volume = P), c._volume = P) : l.volume(P, b, !0);
                        P === d && (clearInterval(c._interval), c._interval = null, l.volume(P, b),
                            l._emit("fade", b))
                    }.bind(l, H[F], K), p)
                }
            }
            return l
        },
        _stopFade: function(b) {
            var d = this._soundById(b);
            d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this._emit("fade", b));
            return this
        },
        loop: function() {
            var b = arguments,
                c, d;
            if (0 === b.length) return this._loop;
            if (1 === b.length)
                if ("boolean" === typeof b[0]) this._loop = c = b[0];
                else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
            else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
            d = this._getSoundIds(d);
            for (var e = 0; e < d.length; e++)
                if (b = this._soundById(d[e]))
                    if (b._loop = c, this._webAudio && b._node && b._node.bufferSource && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            return this
        },
        rate: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var l;
            if ("number" === typeof e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "rate",
                    action: function() {
                        b.rate.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._rate = e);
                f = b._getSoundIds(f);
                for (var p = 0; p < f.length; p++)
                    if (l = b._soundById(f[p])) {
                        l._rateSeek = b.seek(f[p]);
                        l._playStart = b._webAudio ? c.ctx.currentTime : l._playStart;
                        l._rate = e;
                        b._webAudio && l._node && l._node.bufferSource ? l._node.bufferSource.playbackRate.value = e : l._node && (l._node.playbackRate = e);
                        var r = b.seek(f[p]),
                            r = 1E3 * ((b._sprite[l._sprite][0] + b._sprite[l._sprite][1]) / 1E3 - r) / Math.abs(l._rate);
                        if (b._endTimers[f[p]] || !l._paused) b._clearTimer(f[p]), b._endTimers[f[p]] = setTimeout(b._ended.bind(b, l), r);
                        b._emit("rate", l._id)
                    }
            } else return (l = b._soundById(f)) ? l._rate : b._rate;
            return b
        },
        seek: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : (f = b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            if ("undefined" === typeof f) return b;
            if ("loaded" !== b._state) return b._queue.push({
                event: "seek",
                action: function() {
                    b.seek.apply(b, d)
                }
            }), b;
            var l = b._soundById(f);
            if (l)
                if ("number" === typeof e && 0 <= e) {
                    var p = b.playing(f);
                    p && b.pause(f, !0);
                    l._seek = e;
                    l._ended = !1;
                    b._clearTimer(f);
                    p && b.play(f, !0);
                    !b._webAudio && l._node && (l._node.currentTime = e);
                    b._emit("seek", f)
                } else return b._webAudio ? (e = b.playing(f) ? c.ctx.currentTime - l._playStart : 0, l._seek + ((l._rateSeek ? l._rateSeek - l._seek : 0) + e * Math.abs(l._rate))) : l._node.currentTime;
            return b
        },
        playing: function(b) {
            if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused : !1;
            for (b = 0; b < this._sounds.length; b++)
                if (!this._sounds[b]._paused) return !0;
            return !1
        },
        duration: function(b) {
            var c = this._duration;
            (b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1E3);
            return c
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var b = this._sounds, d = 0; d < b.length; d++) {
                b[d]._paused || (this.stop(b[d]._id), this._emit("end", b[d]._id));
                this._webAudio || (b[d]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1));
                delete b[d]._node;
                this._clearTimer(b[d]._id);
                var e = c._howls.indexOf(this);
                0 <= e && c._howls.splice(e, 1)
            }
            b = !0;
            for (d = 0; d < c._howls.length; d++)
                if (c._howls[d]._src === this._src) {
                    b = !1;
                    break
                }
            f && b && delete f[this._src];
            c.noAudio = !1;
            this._state = "unloaded";
            this._sounds = [];
            return null
        },
        on: function(b, c, d, e) {
            b = this["_on" + b];
            "function" === typeof c && b.push(e ? {
                id: d,
                fn: c,
                once: e
            } : {
                id: d,
                fn: c
            });
            return this
        },
        off: function(b, c, d) {
            var e = this["_on" +
                    b],
                f = 0;
            if (c)
                for (f = 0; f < e.length; f++) {
                    if (c === e[f].fn && d === e[f].id) {
                        e.splice(f, 1);
                        break
                    }
                } else if (b) this["_on" + b] = [];
                else {
                    b = Object.keys(this);
                    for (f = 0; f < b.length; f++) 0 === b[f].indexOf("_on") && Array.isArray(this[b[f]]) && (this[b[f]] = [])
                }
            return this
        },
        once: function(b, c, d) {
            this.on(b, c, d, 1);
            return this
        },
        _emit: function(b, c, d) {
            for (var e = this["_on" + b], f = e.length - 1; 0 <= f; f--)
                if (!e[f].id || e[f].id === c || "load" === b) setTimeout(function(b) {
                    b.call(this, c, d)
                }.bind(this, e[f].fn), 0), e[f].once && this.off(b, e[f].fn, e[f].id);
            return this
        },
        _loadQueue: function() {
            var b = this;
            if (0 < b._queue.length) {
                var c = b._queue[0];
                b.once(c.event, function() {
                    b._queue.shift();
                    b._loadQueue()
                });
                c.action()
            }
            return b
        },
        _ended: function(b) {
            var d = b._sprite,
                d = !(!b._loop && !this._sprite[d][2]);
            this._emit("end", b._id);
            !this._webAudio && d && this.stop(b._id, !0).play(b._id);
            if (this._webAudio && d) {
                this._emit("play", b._id);
                b._seek = b._start || 0;
                b._rateSeek = 0;
                b._playStart = c.ctx.currentTime;
                var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
                this._endTimers[b._id] = setTimeout(this._ended.bind(this,
                    b), e)
            }
            this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start || 0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
            !this._webAudio && !d && this.stop(b._id);
            return this
        },
        _clearTimer: function(b) {
            this._endTimers[b] && (clearTimeout(this._endTimers[b]), delete this._endTimers[b]);
            return this
        },
        _soundById: function(b) {
            for (var c = 0; c < this._sounds.length; c++)
                if (b === this._sounds[c]._id) return this._sounds[c];
            return null
        },
        _inactiveSound: function() {
            this._drain();
            for (var b = 0; b < this._sounds.length; b++)
                if (this._sounds[b]._ended) return this._sounds[b].reset();
            return new e(this)
        },
        _drain: function() {
            var b = this._pool,
                c = 0,
                d = 0;
            if (!(this._sounds.length < b)) {
                for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
                for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--)
            }
        },
        _getSoundIds: function(b) {
            if ("undefined" === typeof b) {
                b = [];
                for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
                return b
            }
            return [b]
        },
        _refreshBuffer: function(b) {
            b._node.bufferSource = c.ctx.createBufferSource();
            b._node.bufferSource.buffer = f[this._src];
            b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
            if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            b._node.bufferSource.playbackRate.value = b._rate;
            return this
        },
        _cleanBuffer: function(b) {
            if (this._scratchBuffer) {
                b.bufferSource.onended = null;
                b.bufferSource.disconnect(0);
                try {
                    b.bufferSource.buffer = this._scratchBuffer
                } catch (c) {}
            }
            b.bufferSource = null;
            return this
        }
    };
    var e = function(b) {
        this._parent = b;
        this.init()
    };
    e.prototype = {
        init: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            b._sounds.push(this);
            this.create();
            return this
        },
        create: function() {
            var b = this._parent,
                d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
            b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent, this._loadFn, !1), this._node.src = b._src, this._node.preload = "auto", this._node.volume = d * c.volume(), this._node.load());
            return this
        },
        reset: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._rateSeek = this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            return this
        },
        _errorListener: function() {
            this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
            this._node.removeEventListener("error", this._errorListener, !1)
        },
        _loadListener: function() {
            var b = this._parent;
            b._duration = Math.ceil(10 * this._node.duration) / 10;
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
            this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
        }
    };
    var f = {},
        l = function(b, d) {
            c.ctx.decodeAudioData(b, function(b) {
                b && 0 < d._sounds.length && (f[d._src] = b, r(d, b))
            }, function() {
                d._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        r = function(b,
            c) {
            c && !b._duration && (b._duration = c.duration);
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
        },
        p = function() {
            try {
                "undefined" !== typeof AudioContext ? c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
            } catch (b) {
                c.usingWebAudio = !1
            }
            var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
                e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                e = e ? parseInt(e[1], 10) : null;
            if (d && e && 9 > e && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !d || c._navigator && !c._navigator.standalone && !d)) c.usingWebAudio = !1;
            c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.value = 1, c.masterGain.connect(c.ctx.destination));
            c._setup()
        };
    "function" === typeof define && define.amd && define([], function() {
        return {
            Howler: c,
            Howl: d
        }
    });
    "undefined" !== typeof exports && (exports.Howler = c, exports.Howl = d);
    "undefined" !== typeof window ? (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = e) : "undefined" !== typeof global && (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = e)
})();
(function() {
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
    HowlerGlobal.prototype.stereo = function(b) {
        if (!this.ctx || !this.ctx.listener) return this;
        for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
        return this
    };
    HowlerGlobal.prototype.pos = function(b, c, d) {
        if (!this.ctx || !this.ctx.listener) return this;
        c = "number" !== typeof c ? this._pos[1] : c;
        d = "number" !== typeof d ? this._pos[2] : d;
        if ("number" === typeof b) this._pos = [b, c, d], this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
        else return this._pos;
        return this
    };
    HowlerGlobal.prototype.orientation = function(b, c, d, e, g, m) {
        if (!this.ctx || !this.ctx.listener) return this;
        var n = this._orientation;
        c = "number" !== typeof c ? n[1] : c;
        d = "number" !== typeof d ? n[2] : d;
        e = "number" !== typeof e ? n[3] : e;
        g = "number" !== typeof g ? n[4] : g;
        m = "number" !== typeof m ? n[5] : m;
        if ("number" === typeof b) this._orientation = [b, c, d, e, g, m], this.ctx.listener.setOrientation(b, c, d, e, g, m);
        else return n;
        return this
    };
    var b = Howl.prototype.init;
    Howl.prototype.init = function(c) {
        this._orientation = c.orientation || [1, 0, 0];
        this._stereo = c.stereo || null;
        this._pos = c.pos || null;
        this._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
            coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : 360,
            coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
            distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : "inverse",
            maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : 1E4,
            panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : "HRTF",
            refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : 1,
            rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : 1
        };
        this._onstereo = c.onstereo ? [{
            fn: c.onstereo
        }] : [];
        this._onpos = c.onpos ? [{
            fn: c.onpos
        }] : [];
        this._onorientation = c.onorientation ? [{
            fn: c.onorientation
        }] : [];
        return b.call(this, c)
    };
    Howl.prototype.stereo = function(b, c) {
        var d = this;
        if (!d._webAudio) return d;
        if ("loaded" !== d._state) return d._queue.push({
            event: "stereo",
            action: function() {
                d.stereo(b, c)
            }
        }), d;
        var p = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof c)
            if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0];
            else return d._stereo;
        for (var g = d._getSoundIds(c), m = 0; m < g.length; m++) {
            var n = d._soundById(g[m]);
            if (n)
                if ("number" === typeof b) n._stereo = b, n._pos = [b, 0, 0], n._node && (n._pannerAttr.panningModel = "equalpower", (!n._panner || !n._panner.pan) && e(n, p), "spatial" === p ? n._panner.setPosition(b, 0, 0) : n._panner.pan.value = b), d._emit("stereo", n._id);
                else return n._stereo
        }
        return d
    };
    Howl.prototype.pos = function(b, c, d, p) {
        var g = this;
        if (!g._webAudio) return g;
        if ("loaded" !== g._state) return g._queue.push({
            event: "pos",
            action: function() {
                g.pos(b, c, d, p)
            }
        }), g;
        c = "number" !== typeof c ? 0 : c;
        d = "number" !== typeof d ? -0.5 : d;
        if ("undefined" === typeof p)
            if ("number" === typeof b) g._pos = [b, c, d];
            else return g._pos;
        for (var m = g._getSoundIds(p), n = 0; n < m.length; n++) {
            var q = g._soundById(m[n]);
            if (q)
                if ("number" === typeof b) q._pos = [b, c, d], q._node && ((!q._panner || q._panner.pan) && e(q, "spatial"), q._panner.setPosition(b, c, d)), g._emit("pos", q._id);
                else return q._pos
        }
        return g
    };
    Howl.prototype.orientation = function(b, c, d, p) {
        var g = this;
        if (!g._webAudio) return g;
        if ("loaded" !== g._state) return g._queue.push({
            event: "orientation",
            action: function() {
                g.orientation(b, c, d, p)
            }
        }), g;
        c = "number" !== typeof c ? g._orientation[1] : c;
        d = "number" !== typeof d ? g._orientation[2] : d;
        if ("undefined" === typeof p)
            if ("number" === typeof b) g._orientation = [b, c, d];
            else return g._orientation;
        for (var m = g._getSoundIds(p), n = 0; n < m.length; n++) {
            var q = g._soundById(m[n]);
            if (q)
                if ("number" === typeof b) q._orientation = [b, c, d], q._node && (q._panner || (q._pos || (q._pos = g._pos || [0, 0, -0.5]), e(q, "spatial")), q._panner.setOrientation(b, c, d)), g._emit("orientation", q._id);
                else return q._orientation
        }
        return g
    };
    Howl.prototype.pannerAttr = function() {
        var b = arguments,
            c, d;
        if (!this._webAudio) return this;
        if (0 === b.length) return this._pannerAttr;
        if (1 === b.length)
            if ("object" === typeof b[0]) c = b[0], "undefined" === typeof d && (this._pannerAttr = {
                coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : this._coneInnerAngle,
                coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : this._coneOuterAngle,
                coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : this._coneOuterGain,
                distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : this._distanceModel,
                maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : this._maxDistance,
                panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : this._panningModel,
                refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : this._refDistance,
                rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : this._rolloffFactor
            });
            else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr : this._pannerAttr;
        else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
        d = this._getSoundIds(d);
        for (var p = 0; p < d.length; p++)
            if (b = this._soundById(d[p])) {
                var g = b._pannerAttr,
                    g = {
                        coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : g.coneInnerAngle,
                        coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : g.coneOuterAngle,
                        coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : g.coneOuterGain,
                        distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : g.distanceModel,
                        maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : g.maxDistance,
                        panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : g.panningModel,
                        refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : g.refDistance,
                        rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : g.rolloffFactor
                    },
                    m = b._panner;
                m ? (m.coneInnerAngle = g.coneInnerAngle, m.coneOuterAngle = g.coneOuterAngle, m.coneOuterGain = g.coneOuterGain, m.distanceModel = g.distanceModel, m.maxDistance = g.maxDistance, m.panningModel = g.panningModel, m.refDistance = g.refDistance, m.rolloffFactor = g.rolloffFactor) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), e(b, "spatial"))
            }
        return this
    };
    var c = Sound.prototype.init;
    Sound.prototype.init = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._stereo = b._stereo;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        c.call(this);
        this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
    };
    var d = Sound.prototype.reset;
    Sound.prototype.reset = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        return d.call(this)
    };
    var e = function(b, c) {
        "spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain, b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.panningModel = b._pannerAttr.panningModel, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]), b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner = Howler.ctx.createStereoPanner(), b._panner.pan.value = b._stereo);
        b._panner.connect(b._node);
        b._paused || b._parent.pause(b._id, !0).play(b._id)
    }
})();
(function(b) {
    Number.prototype.map = function(b, c, d, e) {
        return d + (e - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function() {},
            f = function() {
                return d.apply(this instanceof e && b ? this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        e.prototype = this.prototype;
        f.prototype = new e;
        return f
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b, c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, e, f) {
            var l = ig.$new("canvas");
            l.width = b.width;
            l.height = b.height;
            var r = l.getContext("2d");
            ig.System.SCALE.CRISP(l, r);
            var s = ig.getVendorAttribute(r, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(r, "getImageDataHD");
            var x = b.width / s,
                H = b.height / s;
            l.width = Math.ceil(x);
            l.height = Math.ceil(H);
            r.drawImage(b, 0, 0, x, H);
            return 1 === s ? r.getImageData(c, d, e, f) : r.getImageDataHD(c, d, e, f)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
                    var l = d.requires[f];
                    ig.modules[l] ? ig.modules[l].loaded || (e = !1) : (e = !1, ig._loadScript(l, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    l = ig._loadQueue[c].requires;
                    for (f = 0; f < l.length; f++) d = ig.modules[l[f]], (!d || !d.loaded) && e.push(l[f]);
                    b.push(ig._loadQueue[c].name + " (requires: " + e.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(e, f) {
            var l = c++;
            d[l] = !0;
            var n = function() {
                d[l] && (b.requestAnimationFrame(n, f), e())
            };
            b.requestAnimationFrame(n, f);
            return l
        };
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var e = !1,
        f = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        l = 0;
    b.ig.Class = function() {};
    var r = function(b) {
        var c = this.prototype,
            d = {},
            e;
        for (e in b) "function" == typeof b[e] && "function" == typeof c[e] && f.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
            return function() {
                var e = this.parent;
                this.parent = d[b];
                var f = c.apply(this, arguments);
                this.parent = e;
                return f
            }
        }(e, b[e])) : c[e] = b[e]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!e) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var m = this.prototype;
        e = !0;
        var n = new this;
        e = !1;
        for (var q in c) n[q] = "function" == typeof c[q] && "function" == typeof m[q] && f.test(c[q]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = m[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(q, c[q]) : c[q];
        d.prototype = n;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = r;
        d.classId = n.classId = ++l;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
                d = this.width * b,
                e = this.height * b,
                f = ig.$new("canvas");
            f.width = d;
            f.height = e;
            for (var l = f.getContext("2d"), r = l.getImageData(0, 0, d, e), p = 0; p < e; p++)
                for (var g = 0; g < d; g++) {
                    var m = 4 * (Math.floor(p / b) * this.width + Math.floor(g / b)),
                        n = 4 * (p * d + g);
                    r.data[n] = c.data[m];
                    r.data[n + 1] = c.data[m + 1];
                    r.data[n + 2] = c.data[m + 2];
                    r.data[n + 3] = c.data[m + 3]
                }
            l.putImageData(r, 0, 0);
            this.data = f
        },
        draw: function(b, c, d, e, f, l) {
            if (this.loaded) {
                var r = ig.system.scale;
                f = (f ? f : this.width) * r;
                l = (l ? l : this.height) * r;
                ig.system.context.drawImage(this.data, d ? d * r : 0, e ? e * r : 0, f, l, ig.system.getDrawPos(b), ig.system.getDrawPos(c), f, l);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, e, f, l, r) {
            f = f ? f : e;
            if (this.loaded && !(e > this.width || f > this.height)) {
                var p = ig.system.scale,
                    g = Math.floor(e * p),
                    m = Math.floor(f * p),
                    n = l ? -1 : 1,
                    q = r ? -1 : 1;
                if (l || r) ig.system.context.save(), ig.system.context.scale(n, q);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * p, Math.floor(d * e / this.width) * f * p, g, m, ig.system.getDrawPos(b) * n - (l ? g : 0), ig.system.getDrawPos(c) * q - (r ? m : 0), g, m);
                (l || r) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var f = this.height + this.lineSpacing, l = 0; l < b.length; l++) this.draw(b[l], c, d + l * f, e)
            } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) l = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? l / 2 : l;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (l = 0; l < b.length; l++) e = b.charCodeAt(l), c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var e = ig.system.scale,
                f = this.widthMap[b] * e,
                l = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, f, l, ig.system.getDrawPos(c), ig.system.getDrawPos(d), f, l);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, f = 0; f < b.width; f++) {
                var l = 4 * f + 3;
                127 < c.data[l] ? e++ : 128 > c.data[l] && e && (this.widthMap.push(e), this.indices.push(f - e), d++, e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(f - e)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                        var f = new Audio(e);
                        f.load();
                        this.clips[b].push(f)
                    }
                return this.clips[b][0]
            }
            var l = new Audio(e);
            d && (l.addEventListener("canplaythrough", function p(c) {
                l.removeEventListener("canplaythrough", p, !1);
                d(b, !0, c)
            }, !1), l.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            l.preload = "auto";
            l.load();
            this.clips[b] = [l];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) f = new Audio(e), f.load(), this.clips[b].push(f);
            return l
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended && (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }), Object.defineProperty(this, "loop", {
                get: this.getLooping.bind(this),
                set: this.setLooping.bind(this)
            })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack || (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(), this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b = 0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt = ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, e, f) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, e, f);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                e = this;
            d.addEventListener("touchstart", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                e.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                e.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(b, c, d, e, f, l, r) {
        ig.system = new ig.System(b, d, e, f, l || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(r || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, e) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b, c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var e = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = e.vel.x;
            this.vel.y = e.vel.y;
            this.accel.x = e.accel.x;
            this.accel.y = e.accel.y;
            this.health = e.health;
            this._killed = e._killed;
            this.standing = e.standing;
            this.type = e.type;
            this.checkAgainst = e.checkAgainst;
            this.collides = e.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, e) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, e) {
            return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision = function(b, c) {
        var d = null;
        if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
        else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
        b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
    };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var f = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, f = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, f = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, f, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, f) {
            this.parent(b, c);
            this.tiledef = f || ig.CollisionMap.defaultTileDef;
            for (var l in this.tiledef) l | 0 > this.lastSlope && (this.lastSlope = l | 0)
        },
        trace: function(b, c, f, l, r, p) {
            var g = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                m = Math.ceil(Math.max(Math.abs(f), Math.abs(l)) / this.tilesize);
            if (1 < m)
                for (var n = f / m, q = l / m, u = 0; u < m && (n || q) && !(this._traceStep(g,
                    b, c, n, q, r, p, f, l, u), b = g.pos.x, c = g.pos.y, g.collision.x && (f = n = 0), g.collision.y && (l = q = 0), g.collision.slope); u++);
            else this._traceStep(g, b, c, f, l, r, p, f, l, 0);
            return g
        },
        _traceStep: function(b, c, f, l, r, p, g, m, n, q) {
            b.pos.x += l;
            b.pos.y += r;
            var u = 0;
            if (l) {
                var t = 0 < l ? p : 0,
                    s = 0 > l ? this.tilesize : 0,
                    u = Math.max(Math.floor(f / this.tilesize), 0),
                    x = Math.min(Math.ceil((f + g) / this.tilesize), this.height);
                l = Math.floor((b.pos.x + t) / this.tilesize);
                var H = Math.floor((c + t) / this.tilesize);
                if (0 < q || l == H || 0 > H || H >= this.width) H = -1;
                if (0 <= l && l < this.width)
                    for (var F =
                        u; F < x && !(-1 != H && (u = this.data[F][H], 1 < u && u <= this.lastSlope && this._checkTileDef(b, u, c, f, m, n, p, g, H, F))); F++)
                        if (u = this.data[F][l], 1 == u || u > this.lastSlope || 1 < u && this._checkTileDef(b, u, c, f, m, n, p, g, l, F)) {
                            if (1 < u && u <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = u;
                            c = b.pos.x = l * this.tilesize - t + s;
                            m = 0;
                            break
                        }
            }
            if (r) {
                t = 0 < r ? g : 0;
                r = 0 > r ? this.tilesize : 0;
                u = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                s = Math.min(Math.ceil((b.pos.x + p) / this.tilesize), this.width);
                F = Math.floor((b.pos.y + t) / this.tilesize);
                x = Math.floor((f + t) / this.tilesize);
                if (0 < q || F == x || 0 > x || x >= this.height) x = -1;
                if (0 <= F && F < this.height)
                    for (l = u; l < s && !(-1 != x && (u = this.data[x][l], 1 < u && u <= this.lastSlope && this._checkTileDef(b, u, c, f, m, n, p, g, l, x))); l++)
                        if (u = this.data[F][l], 1 == u || u > this.lastSlope || 1 < u && this._checkTileDef(b, u, c, f, m, n, p, g, l, F)) {
                            if (1 < u && u <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = u;
                            b.pos.y = F * this.tilesize - t + r;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, f, l, r, p, g, m, n, q) {
            var u = this.tiledef[c];
            if (!u) return !1;
            c = (u[2] -
                u[0]) * this.tilesize;
            var t = (u[3] - u[1]) * this.tilesize,
                s = u[4];
            g = f + r + (0 > t ? g : 0) - (n + u[0]) * this.tilesize;
            m = l + p + (0 < c ? m : 0) - (q + u[1]) * this.tilesize;
            if (0 < c * m - t * g) {
                if (0 > r * -t + p * c) return s;
                n = Math.sqrt(c * c + t * t);
                q = t / n;
                n = -c / n;
                var x = g * q + m * n,
                    u = q * x,
                    x = n * x;
                if (u * u + x * x >= r * r + p * p) return s || 0.5 > c * (m - p) - t * (g - r);
                b.pos.x = f + r - u;
                b.pos.y = l + p - x;
                b.collision.slope = {
                    x: c,
                    y: t,
                    nx: q,
                    ny: n
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0, 0, b, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, f, l) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + f,
                    y: c + l
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b, c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var f = 0; f < e; f++) {
                this.preRenderedChunks[f] = [];
                for (var l = 0; l < d; l++) this.preRenderedChunks[f][l] = this.preRenderChunk(l, f, l == d - 1 ? b - l * this.chunkSize : this.chunkSize, f == e - 1 ? c - f * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, e) {
            var f = d / this.tilesize / ig.system.scale + 1,
                l = e / this.tilesize / ig.system.scale + 1,
                r = b * this.chunkSize / ig.system.scale % this.tilesize,
                p = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var g = ig.$new("canvas");
            g.width = d;
            g.height = e;
            g.retinaResolutionEnabled = !1;
            e = g.getContext("2d");
            ig.System.scaleMode(g, e);
            d = ig.system.context;
            ig.system.context = e;
            for (e = 0; e < f; e++)
                for (var m = 0; m < l; m++)
                    if (e + b < this.width && m + c < this.height) {
                        var n = this.data[m + c][e + b];
                        n && this.tiles.drawTile(e * this.tilesize - r, m * this.tilesize - p, n - 1, this.tilesize)
                    }
            ig.system.context = d;
            return g
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d = this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                e = Math.max(Math.floor(c / this.chunkSize), 0),
                f = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                l = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                r = this.preRenderedChunks[0].length,
                p = this.preRenderedChunks.length;
            this.repeat || (f = Math.min(f, r), l = Math.min(l, p));
            for (var g = 0; e < l; e++) {
                for (var m = 0, n = d; n < f; n++) {
                    var q = this.preRenderedChunks[e % p][n % r],
                        u = -b + n * this.chunkSize - m,
                        t = -c + e * this.chunkSize - g;
                    ig.system.context.drawImage(q, u, t);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(u, t, this.chunkSize, this.chunkSize));
                    this.repeat && q.width < this.chunkSize && u + q.width < ig.system.realWidth && (m += this.chunkSize - q.width, f++)
                }
                this.repeat && q.height < this.chunkSize && t + q.height < ig.system.realHeight && (g += this.chunkSize - q.height, l++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), e = (this.scroll.y / this.tilesize).toInt(), f = this.scroll.x % this.tilesize, l = this.scroll.y % this.tilesize, r = -f - this.tilesize, f = ig.system.width + this.tilesize - f, p = ig.system.height + this.tilesize - l, g = -1, l = -l - this.tilesize; l < p; g++, l += this.tilesize) {
                var m = g + e;
                if (m >= this.height || 0 > m) {
                    if (!this.repeat) continue;
                    m = (m % this.height + this.height) % this.height
                }
                for (var n = -1, q = r; q < f; n++, q += this.tilesize) {
                    b = n + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[m][b])(c = this.anims[b -
                        1]) ? c.draw(q, l) : this.tiles.drawTile(q, l, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b = "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function(b, c, d, e) {
            var f = "string" === typeof b ? ig.global[b] : b;
            if (!f) throw "Can't spawn entity of type " + b;
            b = new f(c, d, e || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name && delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, f = Math.floor(d.pos.y / this.cellSize), l = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, r = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, p = Math.floor(d.pos.x / this.cellSize); p < l; p++)
                        for (var g = f; g < r; g++)
                            if (b[p])
                                if (b[p][g]) {
                                    for (var m = b[p][g], n = 0; n < m.length; n++) d.touches(m[n]) && !e[m[n].id] && (e[m[n].id] = !0, ig.Entity.checkPair(d, m[n]));
                                    m.push(d)
                                } else b[p][g] = [d];
                else b[p] = {}, b[p][g] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
    ig.System && (ig.System.SCALE = {
        CRISP: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
    var b = !1;
    try {
        b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length)
    } catch (c) {
        b = !0
    }
    ig.Input.inject({
        keydown: function(c) {
            var e = c.target.tagName;
            if (!("INPUT" == e || "TEXTAREA" == e))
                if (e = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > e && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), e = this.bindings[e]) this.actions[e] = !0, this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0), c.stopPropagation(), c.preventDefault()
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        },
        _jqueryAvailable: function() {
            return "undefined" !== typeof jQuery
        },
        addEvent: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.on(c, d);
            else b.addEventListener(c, d, e)
        },
        create: function(b) {
            return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
        },
        getElementByClass: function(b) {
            return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
        },
        getElementById: function(b) {
            return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
        },
        appendChild: function(b, c) {
            this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
        },
        appendToBody: function(b) {
            this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
        },
        resize: function(b, c, d) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
            else {
                var e = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = e
            }
        },
        resizeOffsetLeft: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e);
            else {
                var f = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = f
            }
        },
        css: function(b, c) {
            if (this.JQUERYAVAILABLE) b.css(c);
            else {
                var d = "",
                    e;
                for (e in c) d += e + ":" + c[e] + ";";
                this.attr(b, "style", d)
            }
        },
        getOffsets: function(b) {
            return this.JQUERYAVAILABLE ? (b = b.offset(), {
                left: b.left,
                top: b.top
            }) : {
                left: b.offsetLeft,
                top: b.offsetTop
            }
        },
        attr: function(b, c, d) {
            if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
            this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
        },
        show: function(b) {
            this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"))
        },
        hide: function(b) {
            this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"))
        },
        getQueryVariable: function(b) {
            for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
                var e = c[d].split("=");
                if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
            }
        },
        forcedDeviceDetection: function() {
            var b = this.getQueryVariable("device");
            if (b) switch (b) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function() {
            var b = this.getQueryVariable("force-rotate");
            if (b) switch (b) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
    Vector2 = ig.Class.extend({
        x: null,
        y: null,
        valType: "number",
        init: function(b, c) {
            typeof b === this.valType && typeof c === this.valType && (this.x = b, this.y = c)
        },
        row: function(b) {
            typeof b === this.valType && (this.y = b);
            return this.y
        },
        col: function(b) {
            typeof b === this.valType && (this.x = b);
            return this.x
        },
        magnitude: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        unitVector: function() {
            var b = this.magnitude();
            if (0 < b) return new Vector2(this.x / b, this.y / b);
            throw "Divide by 0 error in unitVector function of vector:" +
            this;
        },
        add: function(b) {
            return new Vector2(this.x + b.x, this.y + b.y)
        },
        subtract: function(b) {
            return new Vector2(this.x - b.x, this.y - b.y)
        },
        dotProduct: function(b) {
            return this.x * b.x + this.y * b.y
        },
        multiplyByScalar: function(b) {
            return new Vector2(b * this.x, b * this.y)
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !0,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(960, 540)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(540, 960)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
            MobileAdInGamePreroll: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll2: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd2: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width +
                    2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll3: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd3: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            }
        },
        init: function(b) {
            this.domHandler = b;
            if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
                var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = b.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = b.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function() {
            for (var b = 0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                ig.ua.mobile ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var d in this.adsToResize) {
                var b = ig.domHandler.getElementById("#" +
                        d),
                    c = ig.domHandler.getElementById("#" + d + "-Box"),
                    e = (window.innerWidth - this.adsToResize[d]["box-width"]) / 2 + "px",
                    f = (window.innerHeight - this.adsToResize[d]["box-height"]) / 2 + "px";
                b && ig.domHandler.css(b, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                c && ig.domHandler.css(c, {
                    left: e,
                    top: f
                })
            }
            for (d in this.dynamicClickableEntityDivs) {
                c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                b = ig.domHandler.getElementById("#" + d);
                if (ig.ua.mobile) var l = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    r = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    f = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    p = Math.floor(l * this.scaleRatioMultiplier.x) + "px",
                    r = Math.floor(r * this.scaleRatioMultiplier.y) + "px",
                    f = Math.floor(f * this.scaleRatioMultiplier.x) + "px",
                    c = Math.floor(e * this.scaleRatioMultiplier.y) + "px";
                else var e = ig.domHandler.getElementById("#canvas"),
                    e = ig.domHandler.getOffsets(e),
                    p = e.left,
                    g = e.top,
                    l = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    r = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    f = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    p = Math.floor(p + l * c) + "px",
                    r = Math.floor(g + r * c) + "px",
                    f = Math.floor(f * c) + "px",
                    c = Math.floor(e * c) + "px";
                ig.domHandler.css(b, {
                    "float": "left",
                    position: "absolute",
                    left: p,
                    top: r,
                    width: f,
                    height: c,
                    "z-index": 3
                })
            }
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            console.log("changing orientation ...");
            if (ig.ua.mobile) {
                var b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    c = this.domHandler.getElementById("#orientate"),
                    d = this.domHandler.getElementById("#game");
                b ? (this.domHandler.show(c), this.domHandler.hide(d), console.log("portrait" + window.innerWidth + "," + window.innerHeight)) : (this.domHandler.show(d), this.domHandler.hide(c), console.log("landscape" + window.innerWidth + "," + window.innerHeight))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function() {
            for (var b in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" + b),
                    d = ig.domHandler.getElementById("#" +
                        b + "-Box"),
                    e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
                    f = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {
                    left: e,
                    top: f
                })
            }
        },
        samsungFix: function() {
            ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) &&
                !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function(b) {
                b.preventDefault();
                return !1
            }, !1))
        },
        orientationInterval: null,
        orientationTimeout: null,
        orientationHandler: function() {
            this.reorient();
            window.scrollTo(0, 1)
        },
        orientationDelayHandler: function() {
            null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 100));
            null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function() {
                this.clearAllIntervals()
            }.bind(this), 2E3))
        },
        clearAllIntervals: function() {
            window.clearInterval(this.orientationInterval);
            this.orientationInterval = null;
            window.clearTimeout(this.orientationTimeout);
            this.orientationTimeout = null
        },
        eventListenerSetup: function() {
            ig.ua.iOS ? (window.addEventListener("orientationchange", this.orientationDelayHandler.bind(this)), window.addEventListener("resize", this.orientationDelayHandler.bind(this))) : (window.addEventListener("orientationchange", this.orientationHandler.bind(this)), window.addEventListener("resize", this.orientationHandler.bind(this)));
            document.ontouchmove = function(b) {
                window.scrollTo(0, 1);
                b.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
            },
            MJSHeader: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
            },
            MJSFooter: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
            },
            MJSEnd: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
            }
        },
        run: function(b, c) {
            if (this.apiAvailable[b]) this.apiAvailable[b](c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer",
        stayMuteFlag: !1,
        debug: !1,
        init: function() {
            this.debug && console.log(this.tagName)
        },
        play: function(b) {
            this.debug && console.log("play sound ", b)
        },
        stop: function() {
            this.debug && console.log("stop sound ")
        },
        volume: function() {
            this.debug && console.log("set volume")
        },
        mute: function(b) {
            this.debug && console.log("mute");
            "undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
        },
        unmute: function(b) {
            this.debug && console.log("unmute");
            "undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        playerType: "impact",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
            c && c.loop && (ig.music.loop = c.loop)
        },
        play: function(b) {
            console.log("playing " + b);
            this.stayMuteFlag || (this.bgmPlaying = !0, ig.music.play(b))
        },
        stop: function() {
            console.log("stopping bgm");
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function(b) {
            console.log("impactmusic:", b);
            ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.music.volume
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && this.stop()
        },
        unmute: function(b) {
            this.parent(b);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = new ig.Sound(b[d].path + ".*");
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            ig.soundManager.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.soundManager.volume
        },
        mute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !1
        },
        unmute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext]
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            "object" === typeof b ? b.stop() : "string" === typeof b && this.soundList[b].stop()
        },
        volume: function(b) {
            for (var c in this.soundList)
                if (this.soundList[c] !== ig.soundHandler.sfxPlayer.soundList.bgmBoss) {
                    if (0 > b) {
                        this.soundList[c].volume(0);
                        break
                    }
                    isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
                }
        },
        volumeSpecificSound: function(b, c) {
            b.volume(c)
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute(!0)
        },
        unmute: function(b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function() {}.bind(this)
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            if (!this.stayMuteFlag && !this.bgmPlaying)
                if ("object" === typeof b) this.bgmPlaying = !0, b.play();
                else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();
            else
                for (var c in this.soundList) {
                    this.soundList[c].play();
                    this.bgmPlaying = !0;
                    break
                }
        },
        stop: function(b) {
            this.parent(b);
            if (this.bgmPlaying) {
                for (var c in this.soundList) this.soundList[c].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function(b) {
            console.log("howler", b);
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute(!0)
        },
        unmute: function(b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        playerType: "jukebox",
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.0010,
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                this.soundList[d] = d;
                var e = b[d].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: b[d].startMp3,
                            end: b[d].endMp3,
                            loop: !0
                        }
                    }
                })
            }
        },
        play: function() {
            this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function() {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function(b) {
            console.log("jukebox:", b);
            0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) : 1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
        },
        getVolume: function() {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function(b) {
            this.parent(b);
            this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        playerType: "webaudio",
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        reinitOnPlay: !1,
        inputList: null,
        _volume: 1,
        soundList: {},
        init: function(b) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                Howler && Howler.ctx ? this.webaudio.context = Howler.ctx : ig && ig.webaudio_ctx ? this.webaudio.context = ig.webaudio_ctx : (this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, ig.webaudio_ctx = this.webaudio.context), this.isSupported = !0
            } catch (c) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (d) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && (this.inputList = b, this.initWebAudio(b))
        },
        initWebAudio: function(b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            this.webaudio.buffer = null;
            var c = "start",
                d = "stop",
                e = this.webaudio.context.createBufferSource();
            "function" !== typeof e.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof e.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var f in b) {
                this.soundList[f] = f;
                var d = b[f].path,
                    c = d + "." + ig.Sound.FORMAT.MP3.ext,
                    l = d + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (l = c) : (d = navigator.userAgent.toLowerCase(), -1 != d.indexOf("safari") && -1 >= d.indexOf("chrome") && (l = c), d.indexOf("win64") && (l = c));
                var r = new XMLHttpRequest;
                r.open("GET", l, !0);
                r.responseType = "arraybuffer";
                r.onload = function() {
                    this.webaudio.context.decodeAudioData(r.response, function(b) {
                        this.webaudio.buffer = b;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play(null, !0) : this.stop()
                    }.bind(this), function() {
                        console.log('Error decoding audio "' + l + '".')
                    })
                }.bind(this);
                r.send();
                if (4 == r.readyState && "undefined" !== typeof Audio) {
                    this.useHTML5Audio = !0;
                    try {
                        new Audio
                    } catch (p) {
                        this.useHTML5Audio = !1
                    }
                    this.useHTML5Audio && (console.log("Using HTML5 Audio"), this.webaudio = null, this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b))
                }
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio = this.webaudio;
                var b = function() {
                    var c = webaudio.context,
                        d = c.createBuffer(1, 1, 22050),
                        e = c.createBufferSource();
                    e.buffer = d;
                    e.connect(c.destination);
                    "undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
                    setTimeout(function() {
                        (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }.bind(this), 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function(b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff && (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var e = b[d].path,
                        c = e + "." + ig.Sound.FORMAT.OGG.ext,
                        e = e + "." + ig.Sound.FORMAT.MP3.ext,
                        f = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? f = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (f = e);
                    if (f) {
                        ig.ua.mobile ? ig.ua.iOS && (f = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (f = e));
                        this.audio.addEventListener("error", function() {
                            this.audio.error && 4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = f;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = f;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var l = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play(null, !0) : this.stop();
                            this.audio.removeEventListener("canplaythrough", l, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", l, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(b, c) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio) {
                    if (!c && this.reinitOnPlay && this.webaudio.source_loop.buffer == this.webaudio.buffer) {
                        if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0);
                        try {
                            this.webaudio.context.close();
                            this.webaudio.context = new this.AudioContext;
                            this.webaudio.gainNode = this.webaudio.context.createGain();
                            this.webaudio.gainNode.connect(this.webaudio.context.destination);
                            this.webaudio.gainNode.gain.value = this._volume;
                            var d = "start",
                                e = "stop",
                                f = this.webaudio.context.createBufferSource();
                            "function" !== typeof f.start && (d = "noteOn");
                            this.webaudio.compatibility.start = d;
                            "function" !== typeof f.stop && (e = "noteOff");
                            this.webaudio.compatibility.stop = e;
                            this.webaudio.source_loop = {};
                            this.play(null, !0)
                        } catch (l) {}
                    }
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            if (null == b || isNaN(b)) b = 0, this.pausedTime && (b = this.pausedTime);
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime +
                                (this.webaudio.buffer.duration - b));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0
                } else if (this.audio) {
                var r = this.audio;
                if (!this.muteFlag)
                    if (this.bgmPlaying = !0, isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime)), d = this._duration - b, this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null), this._onEndTimer = setTimeout(function() {
                        this.audio.currentTime = 0;
                        this.audio.pause();
                        this.pausedTime = 0;
                        if (this.inactiveAudio) {
                            var b = this.audio;
                            this.audio = this.inactiveAudio;
                            this.inactiveAudio = b
                        }
                        this.play()
                    }.bind(this), 1E3 * d + this.playDelay), 4 === r.readyState || !r.readyState && navigator.isCocoonJS) r.readyState = 4, r.currentTime = b, r.muted = this.muteFlag || r.muted, r.volume = this._volume, setTimeout(function() {
                        r.play()
                    }, 0);
                    else {
                        clearTimeout(this._onEndTimer);
                        this._onEndTimer = null;
                        var p = function() {
                            typeof("function" == this.play) && (this.play(), r.removeEventListener("canplaythrough", p, !1))
                        }.bind(this);
                        r.addEventListener("canplaythrough", p, !1)
                    }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                var b = this.audio;
                4 == b.readyState && (this.pausedTime = b.currentTime, b.currentTime = 0, b.pause(), clearTimeout(this._onEndTimer), this._onEndTimer = null)
            }
        },
        volume: function(b) {
            if (isNaN(b) || null == b) return this.getVolume();
            this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function() {
            return !this.isSupported ? 0 : this._volume
        },
        mute: function(b) {
            this.parent(b);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function(b) {
            this.parent(b);
            !this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
    SoundInfo = ig.Class.extend({
        FORMATS: {
            OGG: ".ogg",
            MP3: ".mp3"
        },
        sfx: {
            kittyopeningSound: {
                path: "media/audio/opening/kittyopening"
            },
            staticSound: {
                path: "media/audio/play/static"
            },
            openingSound: {
                path: "media/audio/opening/opening"
            },
            swing: {
                path: "media/audio/game/swing"
            },
            hammer: {
                path: "media/audio/game/hammer"
            },
            beep: {
                path: "media/audio/game/beep"
            },
            go: {
                path: "media/audio/game/go"
            },
            pop: {
                path: "media/audio/game/pop"
            },
            explode: {
                path: "media/audio/game/explode"
            },
            click: {
                path: "media/audio/game/click"
            },
            gaintime: {
                path: "media/audio/game/gaintime"
            },
            timeout: {
                path: "media/audio/game/timeout"
            },
            squeak1: {
                path: "media/audio/game/squeak_1"
            },
            squeak2: {
                path: "media/audio/game/squeak_2"
            },
            squeak3: {
                path: "media/audio/game/squeak_3"
            },
            woodhit: {
                path: "media/audio/game/woodhit"
            },
            bossAppear: {
                path: "media/audio/game/bossappear"
            },
            bossEsc: {
                path: "media/audio/game/bossesc"
            },
            bossWck: {
                path: "media/audio/game/bosswck"
            },
            bgmBoss: {
                path: "media/audio/boss"
            }
        },
        bgm: {
            background: {
                path: "media/audio/bgm",
                startMp3: 0,
                endMp3: 14.733
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo,
        init: function() {
            console.log("Initiating sound handler");
            this.initWindowHandler();
            ig.ua.mobile ? (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                loop: !0
            }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            })));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
        },
        checkBGM: function() {
            return this.bgmPlayer.stayMuteFlag
        },
        checkSFX: function() {
            return this.sfxPlayer.stayMuteFlag
        },
        muteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.mute(b)
        },
        muteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.mute(b)
        },
        unmuteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.unmute(b)
        },
        unmuteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.unmute(b)
        },
        muteAll: function(b) {
            this.muteSFX(b);
            this.muteBGM(b)
        },
        unmuteAll: function(b) {
            this.unmuteSFX(b);
            this.unmuteBGM(b)
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() {
            this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
        },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function() {
            var b = this.getHiddenProp();
            b && (b = b.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, this.visChange));
            window.addEventListener("pagehide", function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        },
        getHiddenProp: function() {
            var b = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var c = 0; c < b.length; c++)
                if (b[c] + "Hidden" in document) return b[c] + "Hidden";
            return null
        },
        isHidden: function() {
            var b = this.getHiddenProp();
            return !b ? !1 : document[b]
        },
        visChange: function() {
            ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && ig.soundHandler.forceUnMuteAll()
        },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var b;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var c = this.bgmPlayer.jukeboxPlayer;
                if (c) {
                    null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
                    b = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var d = 0.1;
                    ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
                    c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
                        ig.soundHandler.forcelooped = !1
                    }, d)) : c.setCurrentTime(b)))
                } else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
                    ig.soundHandler.forcelooped = !1
                }, d)) : ig.music.currentTrack.currentTime = c)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: {
            click: [ig.KEY.MOUSE1]
        },
        init: function() {
            ig.input.initMouse();
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        },
        getPos: function() {
            if (ig.ua.mobile) var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
            else b = ig.input.mouse.x, c = ig.input.mouse.y;
            return new Vector2(b, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        },
        init: function() {
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {
            x: 0,
            y: 0
        },
        rightStick: {
            x: 0,
            y: 0
        },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var b = navigator.getGamepads || navigator.webkitGetGamepads;
                b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = b
            }
        },
        isAvailable: function() {
            return this.isInit && this.isSupported
        },
        buttonPressed: function(b) {
            return "object" == typeof b ? b.pressed : 1 == b
        },
        buttonDown: function(b) {
            if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
        },
        buttonUp: function(b) {
            if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
        },
        clearPressed: function() {
            for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(b, c) {
            this.bindings[b] = c
        },
        unbind: function(b) {
            this.releases[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(b) {
            return this.states[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.releases[b]
        },
        clamp: function(b, c, d) {
            return b < c ? c : b > d ? d : b
        },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var b in this.bindings) {
                    for (var c = !1, d = 0; d < this.list.length; d++) {
                        var e = this.list[d];
                        if (e && e.buttons && this.buttonPressed(e.buttons[b])) {
                            c = !0;
                            break
                        }
                    }
                    c ? this.buttonDown(b) : this.buttonUp(b)
                }
                for (d = 0; d < this.list.length; d++)
                    if ((e = this.list[d]) && e.axes) {
                        b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            f = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(b) ? 0 : b;
                        this.leftStick.y += isNaN(c) ? 0 : c;
                        this.rightStick.x += isNaN(f) ? 0 : f;
                        this.rightStick.y += isNaN(e) ? 0 : e
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: {
            padJump: [ig.PADKEY.BUTTON_0]
        },
        init: function() {
            ig.gamepadInput.start();
            for (var b in this.bindings)
                for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() {
            ig.multitouchInput.start()
        },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
                        var d = ig.multitouchInput.touches[c];
                        b.push({
                            x: d.x,
                            y: d.y
                        })
                    }
                    return b
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        },
        touchmove: function(b) {
            if (ig.ua.touchDevice) {
                var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                    c = ig.system.scale * (c / ig.system.realWidth),
                    d = ig.system.scale * (d / ig.system.realHeight);
                if (b.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                    var e = {
                        left: 0,
                        top: 0
                    };
                    ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                    for (var f = 0; f < b.touches.length; f++) {
                        var l = b.touches[f];
                        l && this.touches.push({
                            x: (l.clientX - e.left) / c,
                            y: (l.clientY - e.top) / d
                        })
                    }
                } else this.windowMove(b)
            }
        },
        touchdown: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
            else if (ig.ua.touchDevice && b.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                for (var f = 0; f < b.touches.length; f++) {
                    var l = b.touches[f];
                    l && this.touches.push({
                        x: (l.clientX - e.left) / c,
                        y: (l.clientY - e.top) / d
                    })
                }
            }
        },
        touchup: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            c = ig.system.scale * (c / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
            else {
                this.lastEventUp = b;
                var d = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    b =
                        (b.changedTouches[0].clientX - d.left) / c;
                    for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
                }
            }
        },
        windowKeyDown: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                b = b.changedTouches ? b.changedTouches : [b];
                for (var f = 0; f < b.length; ++f) {
                    for (var l = b[f], r = "undefined" != typeof l.identifier ? l.identifier : "undefined" != typeof l.pointerId ? l.pointerId : 1, p = (l.clientX - e.left) / c, l = (l.clientY - e.top) / d, g = 0; g < this.touches.length; ++g) this.touches[g].identifier == r && this.touches.splice(g, 1);
                    this.touches.push({
                        x: p,
                        y: l,
                        identifier: r
                    })
                }
                for (c = 0; c < this.touches.length; c++);
            }
        },
        windowKeyUp: function(b) {
            b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
                1;
            for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight),
                e = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var f = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, l = 0; l < this.touches.length; ++l)
                    if (this.touches[l].identifier == f) {
                        var r = (b.clientY - e.top) / d;
                        this.touches[l].x = (b.clientX - e.left) / c;
                        this.touches[l].y = r
                    }
        }
    })
});
ig.baked = !0;
ig.module("plugins.fake-storage").requires("impact.game").defines(function() {
    ig.FakeStorage = ig.Class.extend({
        tempData: {},
        init: function() {
            ig.FakeStorage.instance = this
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        set: function(b, c) {
            this.tempData[b] = JSON.stringify(c)
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        get: function(b) {
            return "undefined" == typeof this.tempData[b] ? null : JSON.parse(this.tempData[b])
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        remove: function() {
            delete this.tempData.key
        },
        clear: function() {
            this.tempData = {}
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input", "plugins.fake-storage").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() {
            try {
                window.localStorage.setItem("test", "test"), this.storage = new ig.Storage
            } catch (b) {
                console.log("using fake storage"), this.storage = new ig.FakeStorage
            }
        },
        initMouse: function() {
            this.mouse = new Mouse
        },
        initKeyboard: function() {
            this.keyboard = new Keyboard
        },
        initMultitouch: function() {
            this.multitouch = new Multitouch
        },
        initGamepad: function() {
            this.gamepad = new Gamepad
        },
        press: function(b) {
            return ig.input.pressed(b) || this.gamepad && this.gamepad.press(b) ? !0 : !1
        },
        held: function(b) {
            return ig.input.state(b) || this.gamepad && this.gamepad.state(b) ? !0 : !1
        },
        release: function(b) {
            return ig.input.released(b) || this.gamepad && this.gamepad.released(b) ? !0 : !1
        },
        getClickPos: function() {
            return this.mouse.getPos()
        },
        getTouchesPos: function() {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function(b, c, d, e, f) {
            return b.x > c + e || b.x < c || b.y > d + f || b.y < d ? !1 : !0
        },
        _supportsLocalStorage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function(b) {
            return !this.localStorageSupport ? null : this.storage.isSet(b)
        },
        storageGet: function(b) {
            return !this.localStorageSupport ? null : this.storage.get(b)
        },
        storageSet: function(b, c) {
            if (!this.localStorageSupport) return null;
            this.storage.set(b, c)
        },
        assert: function(b, c, d) {
            if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " + b;
        }
    })
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        splashDesktop: new ig.Image("media/graphics/backgrounds/desktop/background.jpg"),
        splashMobile: new ig.Image("media/graphics/backgrounds/mobile/background.jpg"),
        barFrame: new ig.Image("media/graphics/splash/loading/progress_bar_base.png"),
        barImage: new ig.Image("media/graphics/splash/loading/progress_bar2.png"),
        barSize: {
            x: 360,
            y: 53
        },
        init: function(b, c) {
            this.parent(b, c);
            ig.apiHandler.run("MJSPreroll")
        },
        end: function() {
            this.parent();
            if (ig.ua.mobile) {
                var b = ig.domHandler.getElementById("#play");
                ig.domHandler.show(b)
            }
            ig.system.setGame(MyGame)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            var b = ig.system.scale,
                c;
            ig.ua.mobile ? (c = 865, this.splashMobile.draw(0, 0)) : (c = 450, this.splashDesktop.draw(0, 0));
            if (ig.ua.mobile) var d = 5 + ig.system.realWidth / 2 - this.barSize.x / 2,
                e = 391.5 + ig.system.realHeight / 2 - this.barSize.y / 2;
            else d = ig.system.realWidth / 2 - this.barSize.x / 2, e = 200 + ig.system.realHeight /
                2 - this.barSize.y / 2;
            d *= b;
            e *= b;
            this.barFrame.draw(d, e);
            var f = this.barSize.x * this._drawStatus;
            0 < f && this.barImage.draw(d, e, 0, 0, f * b, this.barSize.y);
            d = _STRINGS.Splash.Loading;
            ig.ua.mobile ? (e = ig.system.width / 2 - ig.system.context.measureText(d).width / 2, b = c * b + 18) : (e = ig.system.width / 2 - ig.system.context.measureText(d).width / 2, b = c * b + 35);
            ig.system.context.font = "bold 35px Mail Ray Stuff, Arial";
            ig.system.context.fillStyle = "#fee900";
            ig.system.context.fillText(d, e, b);
            ig.system.context.strokeText(d, e, b);
            ig.system.context.font = "bold 35px Amaranth, Arial";
            ig.system.context.fillStyle = "#fee900";
            ig.system.context.fillText("a", -400, -400)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens = b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, e) {
        var f = {},
            l = {},
            r = {},
            p = 0,
            g = !1,
            m = !1,
            n = !1;
        this.duration = d;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            n = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            p = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            m = !0;
            g = new ig.Timer;
            for (var d in c) this.initEnd(d, c, l);
            for (d in l) this.initStart(d, l, b, f), this.initDelta(d, r, b, l)
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, f) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ? d[b] + e[b] * f : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!m) return !1;
            if (this.delay) {
                if (g.delta() < this.delay) return;
                this.delay = 0;
                g.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (g.delta() + p) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in r) this.propUpdate(property, b, f, r, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    n && n.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in f) this.propSet(property, f, b);
                    p = 0;
                    g.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, l);
                    ig.merge(d, f);
                    ig.merge(f, c);
                    ig.merge(l, d);
                    for (property in l) this.initDelta(property, r, b, l);
                    p = 0;
                    g.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            g && g.delta && (p += g.delta())
        };
        this.resume = function() {
            this.paused = !1;
            g && g.reset && g.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, p += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
    };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn = function(b) {
        return b * b * b * b * b
    };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2, 10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn = function(b) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
    };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
                var d = ig.domHandler.getElementById("#" + c);
                ig.domHandler.hide(d)
            }
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0);
            console.log("spawn branding")
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) /
                2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            f = $("#" + f.id);
            f.css("float", "left");
            f.css("position", "absolute");
            if (ig.ua.mobile) {
                var l = window.innerHeight / mobileHeight,
                    r = window.innerWidth /
                    mobileWidth;
                f.css("left", this.pos.x * r);
                f.css("top", this.pos.y * l);
                f.css("width", this.size.x * r);
                f.css("height", this.size.y * l)
            } else l = w / 2 - destW / 2, r = h / 2 - destH / 2, console.log(l, r), f.css("left", l + this.pos.x * multiplier), f.css("top", r + this.pos.y * multiplier), f.css("width", this.size.x * multiplier), f.css("height", this.size.y * multiplier);
            e ? f.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : f.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            ig.system.context.textAlign = "left";
            320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function() {
    EntityButton = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: new Vector2(48, 48),
        fillColor: null,
        zIndex: 95E3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            !ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
            b = Math.floor(256 * Math.random());
            c = Math.floor(256 * Math.random());
            d = Math.floor(256 * Math.random());
            this.fillColor = "rgba(" + b + "," + d + "," + c + ",1)"
        },
        clicked: function() {
            throw "no implementation on clicked()";
        },
        clicking: function() {
            throw "no implementation on clicking()";
        },
        released: function() {
            throw "no implementation on released()";
        }
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function(b) {
            this.pos = new Vector2(b.pos.x, b.pos.y);
            this.size = new Vector2(b.size.x, b.size.y);
            var c = "more-games",
                d = "www.google.com",
                e = !1;
            b.div_layer_name && (c = b.div_layer_name);
            b.link && (d = b.link);
            b.newWindow && (e = b.newWindow);
            this.createClickableLayer(c, d, e)
        },
        createClickableLayer: function(b, c, d) {
            this.identifier = b;
            var e = ig.domHandler.getElementById("#" + b);
            e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
        },
        update: function(b, c) {
            this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.domHandler.create("div");
            ig.domHandler.attr(f, "id", b);
            var l = ig.domHandler.create("a");
            e ? (ig.domHandler.attr(l, "href", c), ig.domHandler.attr(l, "target", "_blank")) : ig.domHandler.attr(l, "href", c);
            c = ig.domHandler.create("img");
            ig.domHandler.css(c, {
                width: "100%",
                height: "100%"
            });
            ig.domHandler.attr(c, "src", d);
            d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                e = Math.floor(this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                var r = Math.floor(this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                    p = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
            } else e = ig.domHandler.getElementById("#canvas"), e = ig.domHandler.getOffsets(e), r = e.top, e = Math.floor(e.left + this.pos.x * d) + "px", r = Math.floor(r + this.pos.y * d) + "px", p = Math.floor(this.size.x * d) + "px", d = Math.floor(this.size.y * d) + "px";
            ig.domHandler.css(f, {
                "float": "left",
                position: "absolute",
                left: e,
                top: r,
                width: p,
                height: d,
                "z-index": 3
            });
            ig.domHandler.addEvent(f, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(l, c);
            ig.domHandler.appendChild(f, l);
            ig.domHandler.appendToBody(f);
            ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 64,
            y: 66
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (!ig.global.wm) {
                if ("undefined" == typeof wm)
                    if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer = new ClickableDivLayer(this));
                    else {
                        this.kill();
                        return
                    }
                this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo"
            }
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (e) {
                    console.log(e)
                }
                this.kill()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/sprites/btn_more_games.png", 360, 53),
        size: {
            x: 360,
            y: 53
        },
        zIndex: 750,
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        init: function(b, c, d) {
            ig.ua.mobile ? (b = 98, c = 891) : (b = 305, c = 477);
            this.parent(b, c, d);
            ig.global.wm || (this.div_layer_name = d.div_layer_name ? d.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill(), this.parent(b, -400, d))
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var e = 0, f = 1; 48 >= f; f += 1) b.lineTo(0 + 800 * Math.cos(2 * f * Math.PI / 48), 0 + 800 * Math.sin(2 * f * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        soundKey: "kittyopeningSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.sfxPlayer.play(this.soundKey)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 5500,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
            this.isPressed && !this.isReleased && "function" == typeof b.clicking && b.clicking();
            this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
        },
        refreshPos: function() {
            this.pos = ig.game.io.getClickPos()
        },
        update: function() {
            this.parent();
            this.refreshPos();
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof b.over && b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];
            else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed = ig.input.state("click")
        },
        addToClickedObjectList: function(b) {
            this.clickedObjectList.push(b)
        },
        removeFromClickedObjectList: function(b) {
            for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
                var e = this.clickedObjectList[d];
                e != b && c.push(e)
            }
            this.clickedObjectList = c
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("width", this.size.x * multiplier);
            $("#" + f.id).css("height", this.size.y * multiplier);
            $("#" + f.id).css("position", "absolute");
            var l = w / 2 - destW / 2,
                r = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + f.id).css("left", this.pos.x), $("#" + f.id).css("top", this.pos.y)) : ($("#" + f.id).css("left", l + this.pos.x * multiplier), $("#" + f.id).css("top", r + this.pos.y * multiplier));
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + f.id).width();
            dynamicClickableEntityDivs[b].height = $("#" + f.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.game-attachment").requires("impact.entity").defines(function() {
    EntityGameAttachment = ig.Entity.extend({
        size: {
            x: 68,
            y: 44
        },
        zIndex: 9,
        animHardHat: new ig.AnimationSheet("media/graphics/game/animation/moles/hardhat.png", 65, 42),
        animHardHat_boss: new ig.AnimationSheet("media/graphics/game/animation/moles/boss_hat.png", 88, 57),
        animMagicHat: new ig.AnimationSheet("media/graphics/game/animation/moles/magichat.png", 84, 54),
        animDeadEyes: new ig.AnimationSheet("media/graphics/game/animation/moles/eye.png", 56, 30),
        animStunStars: new ig.AnimationSheet("media/graphics/game/animation/hammer/stars.png", 196, 110),
        animWick: new ig.AnimationSheet("media/graphics/game/animation/wick.png", 90, 90),
        animHand: new ig.AnimationSheet("media/graphics/game/animation/moles/molehands.png", 84, 23),
        animHand_boss: new ig.AnimationSheet("media/graphics/game/animation/moles/boss_hand.png", 114, 31),
        animSheet: null,
        attachType: null,
        hasTween: !1,
        origin: {
            x: 0,
            y: 0
        },
        startOffset: {
            x: 0,
            y: 0
        },
        endOffset: {
            x: 0,
            y: 0
        },
        curOffset: {
            x: 0,
            y: 0
        },
        twDuration: null,
        twDuration_death: null,
        twEasing: null,
        twEasing_death: null,
        _setData: function(b) {
            switch (b) {
                case "hardHat":
                    this.size.x = 68;
                    this.size.y = 44;
                    this.animSheet = this.animHardHat;
                    this.startOffset = {
                        x: 8,
                        y: 40
                    };
                    this.endOffset = {
                        x: 8,
                        y: -55
                    };
                    this.zIndex = 11;
                    this.hasTween = !0;
                    this.twDuration = 0.75;
                    this.twDuration_death = 0.4;
                    this.twEasing = ig.Tween.Easing.Elastic.EaseOut;
                    this.twEasing_death = ig.Tween.Easing.Quadratic.EaseIn;
                    this.anims.idle = new ig.Animation(this.animSheet, 0.1, [0]);
                    this.addAnim("idle", 1, [0]);
                    break;
                case "hardHat_boss":
                    this.size.x = 88;
                    this.size.y = 57;
                    this.animSheet = this.animHardHat_boss;
                    this.startOffset = {
                        x: 12,
                        y: 70
                    };
                    this.endOffset = {
                        x: 12,
                        y: -35
                    };
                    this.zIndex = 11;
                    this.hasTween = !0;
                    this.twDuration = 0.75;
                    this.twDuration_death = 0.4;
                    this.twEasing = ig.Tween.Easing.Elastic.EaseOut;
                    this.twEasing_death = ig.Tween.Easing.Quadratic.EaseIn;
                    this.anims.idle = new ig.Animation(this.animSheet, 0.1, [0]);
                    this.addAnim("idle", 1, [0]);
                    break;
                case "magicHat":
                    this.size.x = 88;
                    this.size.y = 57;
                    this.animSheet = this.animMagicHat;
                    this.startOffset = {
                        x: 0,
                        y: 40
                    };
                    this.endOffset = {
                        x: 0,
                        y: -67
                    };
                    this.zIndex = 11;
                    this.hasTween = !0;
                    this.twDuration = 0.75;
                    this.twDuration_death = 0.4;
                    this.twEasing = ig.Tween.Easing.Elastic.EaseOut;
                    this.twEasing_death = ig.Tween.Easing.Quadratic.EaseIn;
                    this.anims.idle = new ig.Animation(this.animSheet, 0.1, [0]);
                    this.addAnim("idle", 1, [0]);
                    break;
                case "deadEyes":
                    this.size.x = 47;
                    this.size.y = 27;
                    this.animSheet = this.animDeadEyes;
                    this.startOffset = {
                        x: 18,
                        y: 62
                    };
                    this.endOffset = {
                        x: 18,
                        y: 22
                    };
                    this.zIndex = 12;
                    this.hasTween = !0;
                    this.twDuration = 0.75;
                    this.twDuration_death = 0.25;
                    this.twEasing_death = this.twEasing = ig.Tween.Easing.Quadratic.EaseIn;
                    this.anims.idle = new ig.Animation(this.animSheet, 0.1, [0]);
                    this.addAnim("idle", 1, [0]);
                    break;
                case "stunStars":
                    this.size.x = 196;
                    this.size.y = 110;
                    this.animSheet = this.animStunStars;
                    this.startOffset = {
                        x: -35,
                        y: -20
                    };
                    this.endOffset = {
                        x: -35,
                        y: -60
                    };
                    this.zIndex = 14;
                    this.hasTween = !0;
                    this.twDuration = 0.75;
                    this.twDuration_death = 0.3;
                    this.twEasing_death = this.twEasing = ig.Tween.Easing.Quadratic.EaseIn;
                    this.anims.idle = new ig.Animation(this.animSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
                    this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
                    break;
                case "wick":
                    this.size.x = 90;
                    this.size.y = 90;
                    this.animSheet = this.animWick;
                    this.startOffset = {
                        x: 50,
                        y: -50
                    };
                    this.endOffset = {
                        x: 50,
                        y: -50
                    };
                    this.zIndex = 14;
                    this.hasTween = !1;
                    this.twDuration = 0.75;
                    this.twDuration_death = 0.25;
                    this.twEasing = ig.Tween.Easing.Elastic.EaseOut;
                    this.twEasing_death = ig.Tween.Easing.Quadratic.EaseIn;
                    this.anims.idle = new ig.Animation(this.animSheet, 0.03, [0, 1, 2, 3, 4, 5]);
                    this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5]);
                    break;
                case "moleHand":
                    this.size.x = 88;
                    this.size.y = 24;
                    this.animSheet = this.animHand;
                    this.startOffset = {
                        x: 0,
                        y: 35
                    };
                    this.endOffset = {
                        x: 0,
                        y: 5
                    };
                    this.zIndex = 14;
                    this.hasTween = !0;
                    this.twDuration = 0.75;
                    this.twDuration_death = 0.25;
                    this.twEasing = ig.Tween.Easing.Elastic.EaseOut;
                    this.twEasing_death = ig.Tween.Easing.Quadratic.EaseIn;
                    this.anims.idle = new ig.Animation(this.animSheet, 1, [0]);
                    this.addAnim("idle", 1, [0]);
                    break;
                case "moleHand_boss":
                    this.size.x = 114, this.size.y = 31, this.animSheet = this.animHand_boss, this.startOffset = {
                        x: 0,
                        y: 55
                    }, this.endOffset = {
                        x: 0,
                        y: 35
                    }, this.zIndex = 14, this.hasTween = !0, this.twDuration = 0.75, this.twDuration_death = 0.25, this.twEasing = ig.Tween.Easing.Elastic.EaseOut, this.twEasing_death = ig.Tween.Easing.Quadratic.EaseIn, this.anims.idle = new ig.Animation(this.animSheet, 1, [0]), this.addAnim("idle", 1, [0])
            }
        },
        init: function(b, c, d, e) {
            this._setData(d);
            this.origin = {
                x: b,
                y: c
            };
            b += this.startOffset.x;
            c += this.startOffset.y;
            this.curOffset.x = this.startOffset.x;
            this.curOffset.y = this.startOffset.y;
            this.attachType = d;
            ig.game.sortEntitiesDeferred();
            this._startTween(!1);
            this.parent(b, c, d, e)
        },
        update: function() {
            this.attachTween && this.attachTween.update();
            this.pos.x = this.origin.x + this.curOffset.x;
            this.pos.y = this.origin.y + this.curOffset.y;
            this.parent()
        },
        attachTween: null,
        _startTween: function(b) {
            if (this.hasTween) {
                this.attachTween && this.attachTween.stop(!1);
                if (b) c = this.startOffset, this.curOffset.x = this.endOffset.x, this.curOffset.y = this.endOffset.y, d = this.twDuration_death;
                else {
                    var c = this.endOffset;
                    this.curOffset.x = this.startOffset.x;
                    this.curOffset.y = this.startOffset.y;
                    var d = this.twDuration
                }
                this.itemTween = this.tween({
                    curOffset: c
                }, d, {
                    entity: this,
                    easing: b ? this.twEasing_death : this.twEasing,
                    onComplete: function() {
                        this.entity.itemTween = null
                    }
                });
                this.itemTween.start()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.game-item").requires("impact.entity", "game.entities.game.game-attachment").defines(function() {
    EntityGameItem = ig.Entity.extend({
        size: {
            x: 87,
            y: 99
        },
        zIndex: 8,
        animMole1: new ig.AnimationSheet("media/graphics/game/animation/moles/mole1.png", 83, 94),
        animMole2: new ig.AnimationSheet("media/graphics/game/animation/moles/mole2.png", 83, 94),
        bombAnim: new ig.AnimationSheet("media/graphics/game/animation/bomb.png", 106, 97),
        bossAnim: new ig.AnimationSheet("media/graphics/game/animation/moles/boss.png", 113, 129),
        animSheet: null,
        type: null,
        typeNum: 0,
        points: 0,
        hits: 0,
        isAlive: !0,
        goingBack: !0,
        duration: 0,
        bossItem: !1,
        origin: {
            x: 0,
            y: 0
        },
        startOffset: {
            x: 0,
            y: 0
        },
        endOffset: {
            x: 0,
            y: 0
        },
        curOffset: {
            x: 0,
            y: 0
        },
        twEasing: null,
        twDuration: null,
        twDuration_death: null,
        itemType: null,
        _setItemData: function(b) {
            switch (b) {
                case 1:
                    this.type = "Regular Mole";
                    this.animSheet = 0.5 >= Math.random() ? this.animMole1 : this.animMole2;
                    this.hits = 1;
                    this.points = 10;
                    this.startOffset = {
                        x: 28,
                        y: -40
                    };
                    this.endOffset = {
                        x: 28,
                        y: -77
                    };
                    this.duration = 2 - ig.game.durRed_Amount;
                    this.hat = "none";
                    this.twEasing = ig.Tween.Easing.Quadratic.EaseIn;
                    this.twDuration = 0.1;
                    this.twDuration_death = 0.25;
                    break;
                case 2:
                    this.type = "Magician Mole";
                    this.animSheet = 0.5 >= Math.random() ? this.animMole1 : this.animMole2;
                    this.hits = 1;
                    this.points = 100;
                    this.startOffset = {
                        x: 28,
                        y: -40
                    };
                    this.endOffset = {
                        x: 28,
                        y: -77
                    };
                    this.duration = 1.2 - ig.game.durRed_Amount;
                    this.hat = "magicHat";
                    this.twEasing = ig.Tween.Easing.Quadratic.EaseIn;
                    this.twDuration = 0.1;
                    this.twDuration_death = 0.25;
                    break;
                case 3:
                    this.type = "Hard-Hat Mole";
                    this.animSheet = 0.5 >= Math.random() ? this.animMole1 : this.animMole2;
                    this.hits = 3;
                    this.points = 0;
                    this.startOffset = {
                        x: 28,
                        y: -40
                    };
                    this.endOffset = {
                        x: 28,
                        y: -77
                    };
                    this.duration = 1.7 - ig.game.durRed_Amount;
                    this.hat = "hardHat";
                    this.twEasing = ig.Tween.Easing.Quadratic.EaseIn;
                    this.twDuration = 0.1;
                    this.twDuration_death = 0.25;
                    break;
                case 4:
                    this.type = "Bomb";
                    this.animSheet = this.bombAnim;
                    this.hits = 3;
                    this.points = 0;
                    this.size.x = 106;
                    this.size.y = 97;
                    this.startOffset = {
                        x: 28,
                        y: -40
                    };
                    this.endOffset = {
                        x: 28,
                        y: -75
                    };
                    this.duration = 2 - ig.game.durRed_Amount;
                    this.hat = "none";
                    this.twEasing = ig.Tween.Easing.Quadratic.EaseIn;
                    this.twDuration_death = this.twDuration = 0.2;
                    break;
                case 5:
                    b = ig.game.getEntityByName("bossUi");
                    this.bossItem = !0;
                    this.type = "Boss";
                    this.animSheet = this.bossAnim;
                    this.hits = 100;
                    this.points = 0;
                    this.size.x = 113;
                    this.size.y = 129;
                    this.startOffset = {
                        x: 18,
                        y: -80
                    };
                    this.endOffset = {
                        x: 18,
                        y: -95
                    };
                    this.duration = b.boss_dur;
                    this.hat = "hardHat_boss";
                    this.twEasing = ig.Tween.Easing.Quadratic.EaseIn;
                    this.twDuration_death = this.twDuration = 0.2;
                    break;
                case 6:
                    b = ig.game.getEntityByName("bossUi");
                    this.bossItem = !0;
                    this.type = "Bomb";
                    this.animSheet = this.bombAnim;
                    this.hits = 1;
                    this.points = 0;
                    this.size.x = 106;
                    this.size.y = 97;
                    this.startOffset = {
                        x: 28,
                        y: -40
                    };
                    this.endOffset = {
                        x: 28,
                        y: -75
                    };
                    this.duration = b.boss_dur;
                    this.hat = "none";
                    this.twEasing = ig.Tween.Easing.Quadratic.EaseIn;
                    this.twDuration_death = this.twDuration = 0.2;
                    break;
                case 7:
                    this.type = "Boss", this.animSheet = this.bossAnim, this.hits = 100, this.points = 0, this.size.x = 113, this.size.y = 129, this.startOffset = {
                        x: 18,
                        y: -80
                    }, this.endOffset = {
                        x: 18,
                        y: -95
                    }, this.duration = 5, this.hat = "hardHat_boss", this.twEasing = ig.Tween.Easing.Quadratic.EaseIn, this.twDuration_death = this.twDuration = 0.2
            }
            this.anims.idle = new ig.Animation(this.animSheet, 0.1, [0]);
            this.addAnim("idle", 0.1, [0])
        },
        init: function(b, c, d, e) {
            this._setItemData(d);
            this.typeNum = d;
            this.origin = {
                x: b,
                y: c
            };
            b += this.startOffset.x;
            c += this.startOffset.y;
            this._addAttachment(this.hat, b, c);
            "Bomb" == this.type ? this._addAttachment("wick", b, c) : "Boss" == this.type ? this._addAttachment("moleHand_boss", b, c) : (this._addAttachment("moleHand", b, c), ig.game.accu_moleSpawn++);
            ig.game.sortEntitiesDeferred();
            this._startTween(!1);
            this.parent(b, c, d, e)
        },
        update: function() {
            this.itemTween && this.itemTween.update();
            ig.game.director.levels[ig.game.director.currentLevel] != LevelGameDesktop && ig.game.director.levels[ig.game.director.currentLevel] != LevelGameMobile && this._destroy();
            this.pos.x = this.origin.x + this.curOffset.x;
            this.pos.y = this.origin.y + this.curOffset.y;
            "end countdown" == ig.game.gameState && (!this.isAlive || 0 >= this.hits) && this._destroy();
            this._shakeUpdate();
            this.parent()
        },
        shakeDur: 0.25,
        shakeCur: 0,
        shakeDist: 6,
        shakeFrame: 0,
        shakeFrameLim: 3,
        shakeIsLeft: !0,
        _shake: function() {
            this.shakeCur = this.shakeDur
        },
        _shakeUpdate: function() {
            0 < this.shakeCur && (this.shakeCur -= ig.system.tick, this.shakeFrame++, 0 == this.shakeFrame % this.shakeFrameLim && (this.shakeFrame = 0, this.pos.x += this.shakeIsLeft ? -this.shakeDist : this.shakeDist, this.shakeIsLeft = !this.shakeIsLeft))
        },
        itemTween: null,
        _startTween: function(b) {
            this.itemTween && this.itemTween.stop(!1);
            if (b) b = this.startOffset, this.curOffset.x = this.endOffset.x, this.curOffset.y = this.endOffset.y, c = this.twDuration_death;
            else {
                b = this.endOffset;
                this.curOffset.x = this.startOffset.x;
                this.curOffset.y = this.startOffset.y;
                var c = this.twDuration
            }
            this.itemTween = this.tween({
                curOffset: b
            }, c, {
                entity: this,
                easing: this.twEasing,
                onComplete: function() {
                    this.entity.itemTween = null
                }
            });
            this.itemTween.start()
        },
        _dealDamage: function(b) {
            if ("Boss" == this.type) {
                var c = ig.game.getEntityByName("bossUi");
                c.boss_hits -= b;
                0 >= c.boss_hits && (this.isAlive = !1);
                this.hits = c.boss_hits
            } else this.hits -= b;
            ("Boss" == this.type || "Hard-Hat Mole" == this.type) && ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.woodhit);
            if (0 >= this.hits) return this._returnToHole(!0), !0;
            this._shake();
            return !1
        },
        returnDuration: 0.25,
        _returnToHole: function(b, c) {
            if (!this.isStunned)
                if ("Bomb" == this.type && b) this._destroy();
                else {
                    var d = ig.game.getEntityByName("gameControl");
                    this.pos.x = this.origin.x + this.endOffset.x;
                    this.pos.y = this.origin.y + this.endOffset.y;
                    b && "Boss" != this.type ? (this._addAttachment("deadEyes", this.pos.x, this.pos.y), this._addAttachment("stunStars", this.pos.x, this.pos.y), this.isAlive = !1, ig.game.accu_moleHit++, ig.game.boss_moleKillCount++) : b && "Boss" == this.type ? (d.boss_isAlive = !1, d._bossEnd(!0)) : !b && "Boss" == this.type && (d.boss_isAlive = !1, d.boss_spawnCd = d.boss_spawnCd_Def);
                    this.bossSpawn = c;
                    !b && ("Magician Mole" == this.type || "Normal Mole" == this.type) && "tutorial" != ig.game.gameState && d._adjustHardHatChance(!1);
                    this.goingBack = !1;
                    this.duration = this.returnDuration;
                    this._returnToHoleAttachments();
                    this._startTween(!0)
                }
        },
        bossSpawn: !1,
        _destroy: function() {
            "countdown" != ig.game.gameState && !this.bossItem && ig.game.numOfItems--;
            0 < this.hits && "Bomb" != this.type && ("Boss" != this.type && "in game" == ig.game.gameState && !this.bossSpawn) && ig.game.accu_escaped++;
            this._destroyAttachments();
            this.kill()
        },
        attachments: [],
        hat: "none",
        _addAttachment: function(b, c, d) {
            null == b || "none" == b || (b = ig.game.spawnEntity(EntityGameAttachment, c, d, b), this.attachments.push(b))
        },
        _destroyAttachments: function() {
            for (var b = 0; b < this.attachments.length; b++) this.attachments[b].kill();
            this.attachments = []
        },
        _returnToHoleAttachments: function() {
            for (var b = 0; b < this.attachments.length; b++) this.attachments[b]._startTween(!0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.game-hammer").requires("impact.entity").defines(function() {
    EntityGameHammer = ig.Entity.extend({
        size: {
            x: 237,
            y: 212
        },
        zIndex: 17,
        holeToHit: 0,
        hasHitted: !1,
        animSheet: new ig.AnimationSheet("media/graphics/game/animation/hammer/hammer.png", 237, 212),
        item: null,
        init: function(b, c, d, e) {
            this.addAnim("idle", 0.04, [0, 1, 2, 3, 4, 5]);
            this.holeToHit = d - 1;
            ig.game.sortEntitiesDeferred();
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.swing);
            this.parent(b, c, d, e)
        },
        update: function() {
            this.parent();
            ig.game.director.levels[ig.game.director.currentLevel] != LevelGameDesktop && ig.game.director.levels[ig.game.director.currentLevel] != LevelGameMobile ? this.kill() : (4 == this.currentAnim.frame && !this.hasHitted && (ig.game.getEntityByName("gameControl")._hitHole(this.holeToHit), this.hasHitted = !0), this.currentAnim.frame == this.currentAnim.sequence.length - 1 && this.kill())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.game-sfx").requires("impact.entity").defines(function() {
    EntityGameSfx = ig.Entity.extend({
        size: {
            x: 146,
            y: 61
        },
        zIndex: 15,
        animBomb: new ig.AnimationSheet("media/graphics/game/animation/explosion.png", 178, 178),
        animSheet: null,
        type: null,
        init: function(b, c, d, e) {
            switch (d) {
                case "explosion":
                    this.size.x = 178, this.size.y = 178, this.animSheet = this.animBomb, this.addAnim("idle", 0.1, [0, 1, 2, 3, 4, 5, 6, 7])
            }
            b -= this.size.x / 2;
            c -= this.size.y / 2;
            this.type = d;
            this.parent(b, c, d, e)
        },
        update: function() {
            this.currentAnim.frame >= this.currentAnim.sequence.length - 1 && this.kill();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.game-ground").requires("impact.entity", "game.entities.game.game-item", "game.entities.game.game-hammer", "game.entities.game.game-sfx").defines(function() {
    EntityGameGround = ig.Entity.extend({
        size: {
            x: 146,
            y: 61
        },
        zIndex: 10,
        cp_xOffset_left: 160,
        cp_xOffset_right: -10,
        cp_yOffset_up: 100,
        cp_yOffset_down: 45,
        ham_xOffset: 0,
        ham_yOffset: -170,
        animSheet: new ig.AnimationSheet("media/graphics/game/animation/ground.png", 146, 61),
        item: null,
        spCd: 0,
        spCd_Def: 0.4,
        init: function(b, c, d) {
            this.addAnim("idle", 0.1, [0]);
            this.parent(b, c, d)
        },
        update: function() {
            if (null != this.item && ("in game" == ig.game.gameState || "countdown" == ig.game.gameState)) this.item.duration -= ig.system.tick, this.item.duration <= this.item.returnDuration && (this.item.goingBack ? this.item._returnToHole(!1) : 0 >= this.item.duration && (this.item._destroy(), this.item = null));
            this.parent()
        },
        hasItem: !1,
        spawnDelay: 0.1,
        _spawnItem: function(b) {
            if (!(0 >= b)) {
                if (null == this.item) {
                    this.hasItem = !0;
                    var c = this;
                    setTimeout(function() {
                        c._spawnDelay(b)
                    }, c.spawnDelay);
                    return !0
                }
                return !1
            }
        },
        _spawnDelay: function(b) {
            this.item = ig.game.spawnEntity(EntityGameItem, this.pos.x, this.pos.y, b);
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.pop)
        },
        _checkIsHammered: function(b, c, d) {
            this._checkIsPressed(b, c) && (d++, ig.game.spawnEntity(EntityGameHammer, this.pos.x + this.ham_xOffset, this.pos.y + this.ham_yOffset, d))
        },
        _checkIsPressed: function(b, c) {
            return b >= this.pos.x + this.cp_xOffset_right && b <= this.pos.x + this.cp_xOffset_left && c <= this.pos.y + this.cp_yOffset_down && c >= this.pos.y - this.cp_yOffset_up
        },
        _hitHole: function() {
            var b = [];
            b.push(0);
            b.push(0);
            if (null != this.item) {
                if (!this.item.isAlive) return b;
                if ("Bomb" == this.item.type) this._createHitKillText(), ig.game.spawnEntity(EntityGameSfx, this.item.pos.x + 40, this.item.pos.y + 40, "explosion"), this.item._destroy(), this.item = null, b[1] = -7, ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.explode), ig.game.accu_bombs++;
                else {
                    b[0] = this.item.points;
                    var c = this.item._dealDamage(1);
                    if (("Hard-Hat Mole" == this.item.type || "Boss" == this.item.type) && c) {
                        ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.gaintime);
                        for (var d = 1; 20 >= d; d++) ig.game.spawnEntity(EntityGameStar, this.pos.x + this.size.x / 2, this.pos.y)
                    }
                    "Boss" == this.item.type && !c ? (this._createHitText_Boss(), b[0] = 10) : "Boss" == this.item.type && c && (b[0] = 500, b[1] = 8);
                    c && ("Regular Mole" == this.item.type ? ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.squeak2) : "Magician Mole" == this.item.type ? ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.squeak1) : "Hard-Hat Mole" == this.item.type ? ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.squeak3) : "Boss" == this.item.type && ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.squeak1));
                    0 >= this.item.hits && ("Hard-Hat Mole" == this.item.type ? b[1] = 3 : ("Magician Mole" == this.item.type || "Regular Mole" == this.item.type) && ig.game.getEntityByName("gameControl")._adjustHardHatChance(!0), this.spCd = this.spCd_Def);
                    0 >= this.item.hits && this._createHitKillText()
                }
            }
            return b
        },
        _createHitKillText: function() {
            var b = ig.game.getEntityByName("gameControl_UI"),
                c = "",
                d = "",
                e = this.item.type;
            switch (this.item.type) {
                case "Regular Mole":
                    c = "+10 " + _STRINGS.Game.Pts;
                    d = "#00FFFF";
                    break;
                case "Magician Mole":
                    c = "+100 " + _STRINGS.Game.Pts;
                    d = "#00FFFF";
                    break;
                case "Hard-Hat Mole":
                    c = "+3 " + _STRINGS.Game.Sec;
                    d = "#00ff2a";
                    break;
                case "Bomb":
                    c = "-7 " + _STRINGS.Game.Sec, d = "#ff0060"
            }
            b._addHitConfirm(this.pos.x, this.pos.y, c, d, e)
        },
        _createHitText_Boss: function() {
            ig.game.getEntityByName("gameControl_UI")._addHitConfirm(this.pos.x, this.pos.y, " ", " ", "BossHit")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.game-star").requires("impact.entity").defines(function() {
    EntityGameStar = ig.Entity.extend({
        size: {
            x: 146,
            y: 61
        },
        zIndex: 20,
        imgStar: new ig.Image("media/graphics/game/animation/moles/star.png", 178, 178),
        type: null,
        scale: 1,
        scaleSpeed: 0.01,
        init: function(b, c, d) {
            b += 30;
            var e = 0.5 >= Math.random() ? 1 : -1;
            b += 20 * Math.random() * e;
            e = 0.5 >= Math.random() ? 1 : -1;
            c += 20 * Math.random() * e;
            this.parent(b, c, d);
            this.tw_pos = {
                x: b,
                y: c
            };
            this.startTween_up()
        },
        update: function() {
            this.tw && this.tw.update()
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            b.rotate(this.angle * Math.PI / 180);
            b.translate(this.tw_pos.x - this.imgStar.width * this.scale / 2, this.tw_pos.y - this.imgStar.height * this.scale / 2);
            b.drawImage(this.imgStar.data, 0, 0, this.imgStar.width, this.imgStar.height, -this.imgStar.width / 2, -this.imgStar.height / 2, this.imgStar.width * this.scale, this.imgStar.height * this.scale);
            b.restore();
            this.scale -= this.scaleSpeed;
            0 >= this.scale && this.kill()
        },
        tw: null,
        tw_pos: {
            x: 0,
            y: 0
        },
        xSpeed: 0,
        startTween_up: function() {
            var b = 100 * Math.random(),
                c = 50 * Math.random(),
                d = ig.Tween.Easing.Quadratic.EaseIn;
            0.5 > Math.random() && (b = -b);
            0.5 > Math.random() && (c = -c);
            this.xSpeed = b;
            this.tw = this.tween({
                tw_pos: {
                    x: b + this.pos.x,
                    y: c + this.pos.y
                }
            }, 0.6, {
                entity: this,
                easing: d,
                onComplete: function() {
                    this.entity.tw = null
                }
            });
            this.tw.start()
        },
        update: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("plugins.time-counter").requires("impact.timer").defines(function() {
    ig.Timer.inject({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        storedDelta: 0,
        init: function(b) {
            this.parent(b)
        },
        set: function(b) {
            this.parent(b);
            this.countSet()
        },
        reset: function() {
            this.parent();
            this.countSet()
        },
        countSet: function() {
            var b = Math.abs(Math.floor(this.delta()));
            this.storedDelta = b;
            this.days = Math.floor(b / 86400);
            this.hours = Math.floor(b / 3600 % 24);
            this.minutes = Math.floor(b / 60 % 60);
            this.seconds = b % 60
        },
        countConvert: function(b, c) {
            c ? this.storedDelta > b ? (this.storedDelta = b, this.seconds--, 0 > this.seconds && (this.seconds = 59, this.minutes--, 0 > this.minutes && (this.minutes = 59, this.hours--, 0 > this.hours && (this.hours = 24, this.days--)))) : this.storedDelta < b && this.countSet() : this.storedDelta < b ? (this.storedDelta = b, this.seconds++, 60 < this.seconds && (this.seconds = 0, this.minutes++, 60 < this.minutes && (this.minutes = 0, this.hours++, 24 < this.hours && (this.hours = 0, this.days++)))) : this.storedDelta > b && this.countSet();
            return {
                d: this.days,
                h: this.hours,
                m: this.minutes,
                s: this.seconds
            }
        },
        getMS_asString: function() {
            var b = this.delta() + this.seconds,
                b = 100 * b.toFixed(2),
                b = Math.abs(b - 100),
                c = "",
                c = 10 > b ? "0" + b.toString() : b.toString();
            2 < c.length && (c = c.substr(0, 3));
            return c.replace(".", "")
        },
        countup: function() {
            return 0 > this.delta() ? {
                d: 0,
                h: 0,
                m: 0,
                s: 0
            } : this.countConvert(Math.floor(this.delta()))
        },
        countdown: function() {
            return 0 < this.delta() ? {
                d: 0,
                h: 0,
                m: 0,
                s: 0
            } : this.countConvert(Math.abs(Math.floor(this.delta())), !0)
        },
        countToString: function(b) {
            return {
                d: ("0" + b.d).slice(-2),
                h: ("0" + b.h).slice(-2),
                m: ("0" + b.m).slice(-2),
                s: ("0" + b.s).slice(-2)
            }
        },
        progress: function() {
            return 0 < this.delta() ? 1 : (this.target + this.delta()) / this.target
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.tutorial-window").requires("impact.entity", "plugins.time-counter").defines(function() {
    EntityTutorialWindow = ig.Entity.extend({
        name: "tutWindow",
        zIndex: 17,
        tut_num: 1,
        tut_max: 11,
        img_tutWindow: new ig.Image("media/graphics/game/tutwindow2.png"),
        img_hand: new ig.Image("media/graphics/game/tutorial/hand.png"),
        img_handStat: {
            x: 0,
            y: -500,
            angle: 0
        },
        tw_hand: null,
        gameController: null,
        btnSkipTut: null,
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.btnSkipTut = ig.game.spawnEntity(EntityBtnTutSkip, 0, 0), this.btnSkipTut.pos = ig.ua.mobile ? {
                x: 90,
                y: 15
            } : {
                x: 90,
                y: 12
            })
        },
        ready: function() {
            this.gameController = ig.game.getEntityByName("gameControl")
        },
        draw: function() {
            ig.ua.mobile ? (this.img_tutWindow.draw(45 + this.posOffset.x, 600 + this.posOffset.y), this.drawText(_STRINGS.Tutorial["tut_" + this.tut_num + ".1"], 137 + this.posOffset.x, 315 + this.posOffset.y, 24, "#0546ff"), this.drawText(_STRINGS.Tutorial["tut_" + this.tut_num + ".2"], 137 + this.posOffset.x, 330 + this.posOffset.y, 24, "#0546ff")) : (this.img_tutWindow.draw(251 + this.posOffset.x, 367 + this.posOffset.y), this.drawText(_STRINGS.Tutorial["tut_" + this.tut_num + ".1"], 240 + this.posOffset.x, 200 + this.posOffset.y, 22, "#0546ff"), this.drawText(_STRINGS.Tutorial["tut_" + this.tut_num + ".2"], 240 + this.posOffset.x, 210 + this.posOffset.y, 22, "#0546ff"));
            var b = ig.system.context;
            b.save();
            b.translate(this.img_handStat.x, this.img_handStat.y);
            b.rotate(this.img_handStat.angle * Math.PI / 180);
            b.drawImage(this.img_hand.data, 0, 0, this.img_hand.width, this.img_hand.height, -this.img_hand.width, -this.img_hand.height, this.img_hand.width, this.img_hand.height);
            b.restore()
        },
        update: function() {
            this.tween_win && this.tween_win.update();
            this.tw_hand && this.tw_hand.update();
            0 < this.pressCd && (this.pressCd -= ig.system.tick)
        },
        drawText: function(b, c, d, e, f) {
            var l = ig.system.context;
            l.measureText(b);
            l.save();
            l.font = e + "px Amaranth, Helvetica, Verdana";
            l.globalAlpha = 1;
            l.fillStyle = f;
            l.translate(c, d);
            l.textAlign = "center";
            this.tut_num > this.tut_max && (b = "");
            l.fillText(b, c, d);
            l.restore()
        },
        pressCd: 0,
        nextTutorial: function() {
            if (!(0 < this.pressCd && this.tut_num <= this.tut_max)) {
                this.tut_num++;
                var b = {
                        x: 0,
                        y: 0,
                        angle: 0
                    },
                    c = 1;
                3 == this.tut_num ? (ig.ua.mobile ? (this.img_handStat = {
                    x: 420,
                    y: 120,
                    angle: -90
                }, b = {
                    x: 460,
                    y: 120,
                    angle: -90
                }) : (this.img_handStat = {
                    x: 300,
                    y: 174,
                    angle: -90
                }, b = {
                    x: 340,
                    y: 174,
                    angle: -90
                }), c = 0.5) : 4 == this.tut_num ? (ig.ua.mobile ? (this.img_handStat = {
                    x: 420,
                    y: 190,
                    angle: -90
                }, b = {
                    x: 460,
                    y: 190,
                    angle: -90
                }) : (this.img_handStat = {
                    x: 300,
                    y: 254,
                    angle: -90
                }, b = {
                    x: 340,
                    y: 254,
                    angle: -90
                }), c = 0.5) : 5 == this.tut_num || 6 == this.tut_num ? (ig.ua.mobile ? (this.img_handStat = {
                    x: 170,
                    y: 450,
                    angle: -45
                }, b = {
                    x: 170,
                    y: 450,
                    angle: -20
                }) : (this.img_handStat = {
                    x: 550,
                    y: 145,
                    angle: -45
                }, b = {
                    x: 550,
                    y: 145,
                    angle: -20
                }), c = 0.5, this.gameController.holes[0]._spawnItem(1)) : 7 == this.tut_num ? (ig.ua.mobile ? (this.img_handStat = {
                    x: 350,
                    y: 450,
                    angle: -45
                }, b = {
                    x: 350,
                    y: 450,
                    angle: -20
                }) : (this.img_handStat = {
                    x: 720,
                    y: 145,
                    angle: -45
                }, b = {
                    x: 720,
                    y: 145,
                    angle: -20
                }), c = 0.5, this.gameController.holes[1]._spawnItem(2)) : 8 == this.tut_num ? (ig.ua.mobile ? (this.img_handStat = {
                    x: 550,
                    y: 450,
                    angle: -45
                }, b = {
                    x: 550,
                    y: 450,
                    angle: -20
                }) : (this.img_handStat = {
                    x: 890,
                    y: 145,
                    angle: -45
                }, b = {
                    x: 890,
                    y: 145,
                    angle: -20
                }), c = 0.5, this.gameController.holes[2]._spawnItem(3)) : 9 == this.tut_num ? (ig.ua.mobile ? (this.img_handStat = {
                    x: 170,
                    y: 580,
                    angle: -45
                }, b = {
                    x: 170,
                    y: 580,
                    angle: -20
                }) : (this.img_handStat = {
                    x: 550,
                    y: 280,
                    angle: -45
                }, b = {
                    x: 550,
                    y: 280,
                    angle: -20
                }), c = 0.5, this.gameController.holes[3]._spawnItem(4)) : 10 == this.tut_num ? (ig.ua.mobile ? (this.img_handStat = {
                    x: 350,
                    y: 580,
                    angle: -45
                }, b = {
                    x: 350,
                    y: 580,
                    angle: -20
                }) : (this.img_handStat = {
                    x: 720,
                    y: 280,
                    angle: -45
                }, b = {
                    x: 720,
                    y: 280,
                    angle: -20
                }), c = 0.5, this.gameController.holes[4]._spawnItem(7)) : 11 <= this.tut_num && (this.img_handStat = {
                    x: 550,
                    y: -500,
                    angle: -45
                }, b = {
                    x: 550,
                    y: -500,
                    angle: -45
                }, c = 0.5);
                this.tw_hand = this.tween({
                    img_handStat: b
                }, c, {
                    entity: this,
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    loop: ig.Tween.Loop.Reverse
                });
                this.tw_hand.start();
                this.tut_num > this.tut_max && this._tutorialEnd();
                if (this.tut_num > this.tut_max) {
                    for (b = 0; 8 >= b; b++) null != this.gameController.holes[b].item && (this.gameController.holes[b].item.duration = 0, this.gameController.holes[b].item._returnToHole(!1), this.gameController.cDown.set(3), this.gameController.cDown.unpause());
                    ig.game.gameState = "countdown";
                    this._hide()
                } else this.pressCd = 0.15
            }
        },
        _skipTutorial: function() {
            this.tut_num = 1E3;
            this.nextTutorial();
            var b = ig.game.getEntityByName("gameControl"),
                c = ig.game.getEntityByName("gameControl_UI");
            b.cDown.set(3);
            c.cDown_lastSec = 4
        },
        _tutorialEnd: function() {
            ig.game.getEntityByName("gameControl_UI")._tutorial(!1);
            this.tw_hand = null;
            this.btnSkipTut && this.btnSkipTut.kill()
        },
        posOffset: {
            x: 0,
            y: 0
        },
        isMoving: !1,
        tween_win: null,
        _hide: function() {
            this.isMoving = !0;
            this.tween_win = this.tween({
                posOffset: {
                    x: 0,
                    y: 500
                }
            }, 1, {
                entity: this,
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function() {
                    this.entity.tween_win = null;
                    this.entity.kill()
                }
            });
            this.tween_win.start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.boss-ui").requires("impact.entity", "plugins.time-counter").defines(function() {
    EntityBossUi = ig.Entity.extend({
        name: "bossUi",
        bossMode: !1,
        boss_txtDur: 100,
        boss_txtStart: 100,
        moleKillReq: 20,
        boss_hits: 15,
        boss_hitsCur: 15,
        boss_dur: 1.4,
        boss_durCur: 1.4,
        boss_durTotal: 15,
        boss_durTotalCur: 15,
        boss_whacked: !1,
        boss_escaped: !1,
        bgm: 0,
        bgm_loop: 8.229,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.bossMode && this._drawHpBar()
        },
        update: function() {
            this.bossMode ? (0 >= this.bgm ? (this.bgm = this.bgm_loop, ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.bgmBoss)) : this.bgm -= ig.system.tick, ig.soundHandler.sfxPlayer.volumeSpecificSound(ig.soundHandler.sfxPlayer.soundList.bgmBoss, ig.game.io.storage.get("whack-a-mole-musicVolume"))) : (ig.game.boss_moleKillCount >= this.moleKillReq && (this.bossMode = !0, this.boss_escaped = this.boss_whacked = !1, this.boss_txtDur = this.boss_txtStart), ig.soundHandler.sfxPlayer.volumeSpecificSound(ig.soundHandler.sfxPlayer.soundList.bgmBoss, 0))
        },
        bossStart: !1,
        _start: function() {
            this.boss_escaped = this.boss_whacked = !1;
            this.boss_dur = this.boss_durCur;
            this.boss_hits = this.boss_hitsCur;
            this.boss_durTotal = this.boss_durTotalCur;
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.bossAppear);
            this._startMusic();
            this.bossStart = !0
        },
        _startMusic: function() {
            ig.soundHandler.bgmPlayer.stop(ig.soundHandler.bgmPlayer.soundList.background);
            this.bgm = this.bgm_loop;
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.bgmBoss)
        },
        lastMoles: [],
        _editLastMoles: function(b) {
            this.lastMoles = [];
            this.lastMoles = b
        },
        _end: function(b) {
            this.bossMode ? (b ? this.boss_whacked = !0 : this.boss_escaped = !0, this.bossMode = !1, ig.game.boss_moleKillCount = 0, this.boss_txtDur = this.boss_txtStart, this.moleKillReq += 30, this.boss_durCur -= 0.15, this.boss_durTotalCur -= 0.35, this.boss_hitsCur += 3, 0.9 > this.boss_durCur && (this.boss_durCur = 0.8), 6 > this.boss_durTotalCur && (this.boss_durTotalCur = 6), 30 < this.boss_hitsCur && (this.this.boss_hitsCur = 30), b ? ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.bossWck) : ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.bossEsc), this._gameEnd(), this.bossStart = !1) : ig.game.getEntityByName("gameControl")._destroyBoss()
        },
        _gameEnd: function() {
            ig.soundHandler.sfxPlayer.stop(ig.soundHandler.sfxPlayer.soundList.bgmBoss);
            ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
            this.bgm = 1E3;
            this.bossMode = !1
        },
        imgHPBase: new ig.Image("media/graphics/game/bosshp_base.png"),
        imgHPMain: new ig.Image("media/graphics/game/bosshp_main.png"),
        _drawHpBar: function() {
            if (ig.ua.mobile) {
                this.imgHPBase.draw(140, 285);
                var b = 140,
                    c = 285,
                    d = 275,
                    e = 313
            } else this.imgHPBase.draw(52, 121), b = 52, c = 121, d = 188, e = 150;
            var f = this.boss_hits / this.boss_hitsCur;
            0 < f && this.imgHPMain.draw(b, c, 0, 0, this.imgHPMain.width * f, this.imgHPMain.height);
            b = _STRINGS.Game.Boss;
            c = ig.system.context;
            w = c.measureText(b).width;
            h = c.measureText("m").width;
            c.save();
            c.font = "29px Mail Ray Stuff, Helvetica, Verdana";
            c.globalAlpha = 1;
            c.fillStyle = "#ffffff";
            c.textAlign = "center";
            c.fillText(b, d, e);
            c.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.btn").requires("impact.entity", "plugins.data.vector").defines(function() {
    EntityBtn = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: [],
        logoImg: null,
        zIndex: 20,
        size: {
            x: 106,
            y: 111
        },
        isClicking: !1,
        isEnabled: !0,
        init: function(b, c, d) {
            this.logoImg = this.logo[0];
            this.parent(b, c, d)
        },
        draw: function() {
            this.isClicking && !this.checkMousePos() && (this.logoImg = this.logo[0], this.isClicking = !1);
            this.logoImg.draw(this.pos.x, this.pos.y)
        },
        checkMousePos: function() {
            var b = ig.game.getEntitiesByType(EntityPointer)[0];
            b.refreshPos();
            return b.pos.x >= this.pos.x && b.pos.x <= this.pos.x + this.size.x && b.pos.y >= this.pos.y && b.pos.y <= this.pos.y + this.size.y
        },
        clicked: function() {
            this.isClicking || (this.logoImg = this.logo[1], this.isClicking = !0)
        },
        clicking: function() {
            !this.isClicking && this.isEnabled && (this.logoImg = this.logo[1], this.isClicking = !0)
        },
        released: function() {
            this.logoImg = this.logo[0];
            this.isClicking = !1;
            this.isEnabled && this.interact()
        },
        interact: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.game.btn-home-start").requires("game.entities.game.btn").defines(function() {
    EntityBtnHomeStart = EntityBtn.extend({
        logo: [new ig.Image("media/graphics/game/first_play_button.png"), new ig.Image("media/graphics/game/first_play_button_Pressed.png")],
        size: {
            x: 296,
            y: 116
        },
        name: "startButton",
        zIndex: 1,
        init: function(b, c, d) {
            this.parent(b, -500, d)
        },
        interact: function() {
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.click);
            ig.game.getEntityByName("homeControl")._playButton()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.btn-restart").requires("game.entities.game.btn").defines(function() {
    EntityBtnRestart = EntityBtn.extend({
        logo: [new ig.Image("media/graphics/game/restart_button.png"), new ig.Image("media/graphics/game/restart_button_pressed.png")],
        size: {
            x: 52,
            y: 54
        },
        name: "restartButton",
        init: function(b, c, d) {
            this.zIndex = 101;
            this.parent(b, -400, d)
        },
        interact: function() {
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.click);
            ig.game.director.levels[ig.game.director.currentLevel] != LevelGameDesktop && ig.game.director.levels[ig.game.director.currentLevel] != LevelGameMobile ? ig.ua.mobile ? ig.game.director.jumpTo(LevelGameMobile) : ig.game.director.jumpTo(LevelGameDesktop) : ig.game.getEntityByName("gameControl_UI")._unpausingGame(!0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.btn-toHome").requires("game.entities.game.btn").defines(function() {
    EntityBtnToHome = EntityBtn.extend({
        logo: [new ig.Image("media/graphics/game/home_button.png"), new ig.Image("media/graphics/game/home_button_pressed.png")],
        size: {
            x: 52,
            y: 54
        },
        zIndex: 101,
        name: "toHomeButton",
        init: function(b, c, d) {
            this.parent(b, -400, d)
        },
        interact: function() {
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.click);
            if (ig.game.director.levels[ig.game.director.currentLevel] != LevelGameDesktop && ig.game.director.levels[ig.game.director.currentLevel] != LevelGameMobile) ig.ua.mobile ? ig.game.director.jumpTo(LevelTestMobile) : ig.game.director.jumpTo(LevelTestDesktop);
            else {
                var b = ig.game.getEntityByName("gameControl_UI");
                b.toHome = !0;
                b._unpausingGame(!0)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.btn-home-options").requires("game.entities.game.btn").defines(function() {
    EntityBtnHomeOptions = EntityBtn.extend({
        logo: [new ig.Image("media/graphics/game/button_option.png"), new ig.Image("media/graphics/game/button_option_pressed.png")],
        size: {
            x: 224,
            y: 89
        },
        name: "optionButton",
        zIndex: 1,
        init: function(b, c, d) {
            this.parent(b, -500, d)
        },
        interact: function() {
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.click);
            ig.game.getEntityByName("homeControl")._showOptionsWindow(!0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.btn-game-pause").requires("game.entities.game.btn").defines(function() {
    EntityBtnGamePause = EntityBtn.extend({
        logo: [new ig.Image("media/graphics/game/pause.png"), new ig.Image("media/graphics/game/pause.png")],
        size: {
            x: 31,
            y: 35
        },
        zIndex: 14,
        name: "gamePauseButton",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        interact: function() {
            if (!("pause" == ig.game.gameState || "end countdown" == ig.game.gameState || "countdown" == ig.game.gameState || "tutorial" == ig.game.gameState)) {
                ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.click);
                var b = ig.game.getEntityByName("gameControl"),
                    c = ig.game.getEntityByName("gameControl_UI");
                b._pauseGame();
                c._pauseGame()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.btn-game-play").requires("game.entities.game.btn").defines(function() {
    EntityBtnGamePlay = EntityBtn.extend({
        logo: [new ig.Image("media/graphics/game/play_button.png"), new ig.Image("media/graphics/game/play_button_pressed.png")],
        size: {
            x: 52,
            y: 54
        },
        zIndex: 17,
        name: "gamePlayButton",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        interact: function() {
            var b = ig.game.getEntityByName("gameControl_UI"),
                c = ig.game.getEntityByName("gameControl");
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.click);
            b._unpausingGame(!1);
            c._unpauseGame()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.btn-home-OK").requires("game.entities.game.btn").defines(function() {
    EntityBtnHomeOK = EntityBtn.extend({
        logo: [new ig.Image("media/graphics/game/ok_button.png"), new ig.Image("media/graphics/game/ok_button_pressed.png")],
        size: {
            x: 83,
            y: 56
        },
        name: "OKButton",
        zIndex: 801,
        init: function(b, c, d) {
            this.parent(b, -500, d)
        },
        interact: function() {
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.click);
            ig.game.getEntityByName("homeControl")._showOptionsWindow(!1)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.btn-tut-yes").requires("game.entities.game.btn").defines(function() {
    EntityBtnTutYes = EntityBtn.extend({
        logo: [new ig.Image("media/graphics/game/tutorial/yes_button.png"), new ig.Image("media/graphics/game/tutorial/yes_button_pressed.png")],
        size: {
            x: 83,
            y: 56
        },
        name: "tutYesButton",
        zIndex: 801,
        init: function(b, c, d) {
            ig.global.wm || (c = -500);
            this.parent(b, c, d)
        },
        interact: function() {
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.click);
            ig.game.isTutorial = !0;
            ig.game.getEntityByName("homeControl")._hideTutorialWindow()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.btn-tut-no").requires("game.entities.game.btn").defines(function() {
    EntityBtnTutNo = EntityBtn.extend({
        logo: [new ig.Image("media/graphics/game/tutorial/no_button.png"), new ig.Image("media/graphics/game/tutorial/no_button_pressed.png")],
        size: {
            x: 83,
            y: 56
        },
        name: "tutNoButton",
        zIndex: 801,
        init: function(b, c, d) {
            ig.global.wm || (c = -500);
            this.parent(b, c, d)
        },
        interact: function() {
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.click);
            ig.game.getEntityByName("homeControl")._hideTutorialWindow()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.btn-tutSkip").requires("game.entities.game.btn").defines(function() {
    EntityBtnTutSkip = EntityBtn.extend({
        logo: [new ig.Image("media/graphics/game/play_button.png"), new ig.Image("media/graphics/game/play_button_pressed.png")],
        size: {
            x: 52,
            y: 54
        },
        zIndex: 101,
        name: "skipTutButton",
        init: function(b, c, d) {
            this.parent(b, -400, d)
        },
        interact: function() {
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.click);
            ig.game.getEntityByName("tutWindow")._skipTutorial();
            this.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-control").requires("impact.entity", "plugins.time-counter").defines(function() {
    EntityGameControl = ig.Entity.extend({
        name: "gameControl",
        holes: [],
        holeCount: 0,
        gameTime: 0,
        cDown: null,
        resumeTime: null,
        score: 0,
        pointer: null,
        bossUI: null,
        init: function(b, c, d) {
            ig.global.wm || (ig.game.playerScore = 0, ig.game.accu_moleSpawn = 0, ig.game.accu_moleHit = 0, ig.game.accu_bombs = 0, ig.game.durRed_Amount = 0, ig.game.numOfItems = 0, ig.game.boss_moleKillCount = 0, ig.game.accu_escaped = 0, this.cDown = new ig.Timer(3), ig.game.isTutorial ? (ig.game.gameState = "tutorial", ig.game.spawnEntity(EntityTutorialWindow, 0, 0), this.cDown.pause()) : ig.game.gameState = "countdown", ig.global.wm || this._spawnHoles(), this.bossUI = ig.game.spawnEntity(EntityBossUi, 0, 0), this.parent(b, c, d))
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            var b = ig.game.getEntityByName("gameControl_UI");
            b._ready();
            ig.game.isTutorial && (b._tutorial(!0), ig.game.isTutorial = !1)
        },
        _startGame: function() {
            this.cDown.set(15);
            ig.game.gameState = "in game"
        },
        update: function() {
            if ("in game" == ig.game.gameState) {
                this.gameTime += ig.system.tick;
                this.cDown.countdown();
                0 <= this.cDown.delta() && (ig.game.playerScore = this.score, this.cDown = new ig.Timer(2.5), ig.game.gameState = "end countdown");
                this.bossUI.bossMode ? (this.bossUI.bossStart || this._bossStart(), 0 < this.bossUI.boss_dur && this._bossSpawnControl()) : (this._itemSpawnControl(), this._reduceDuration(), this._levelControl(), 0 < this.hhCd_time && (this.hhCd_time -= ig.system.tick, 0 > this.hhCd_time && (this.hhCd_time = 0)), this._spawnCdReduction());
                for (var b = 0; b < this.holes.length; b++) 0 < this.holes[b].spCd && (this.holes[b].spCd -= ig.system.tick);
                this._checkInputs()
            } else if ("countdown" == ig.game.gameState) this.cDown.countdown(), 0 <= this.cDown.delta() && this._startGame();
            else if ("end countdown" == ig.game.gameState) {
                if (this.cDown.countdown(), 0 <= this.cDown.delta() && !this.hasGameOver) {
                    for (b = 0; b < this.holes.length; b++) null != this.holes[b].item && (this.holes[b].item._returnToHole(!1), this.holes[b].item._destroy());
                    ig.game.spawnEntity(EntityGameoverControl, 0, 0);
                    this.hasGameOver = !0;
                    this.bossUI.bossMode && this.bossUI._gameEnd()
                }
            } else "pause countdown" == ig.game.gameState ? (this.resumeTime.countdown(), 0 <= this.resumeTime.delta() && this._resumeGame()) : "tutorial" == ig.game.gameState && this._checkInputs()
        },
        hasGameOver: !1,
        boss_spawnCd: 0,
        boss_spawnCd_Def: 0.2,
        boss_spawnCd_Start: 1.5,
        boss_isAlive: !1,
        _bossSpawnControl: function() {
            if (0 < this.boss_spawnCd) this.boss_spawnCd -= ig.system.tick;
            else {
                var b = !1;
                if (!this.boss_isAlive)
                    if (this.bossUI.boss_durTotal -= this.bossUI.boss_dur, 0 >= this.bossUI.boss_durTotal) this._bossEnd(!1);
                    else {
                        this.bossUI.boss_dur = this.bossUI.boss_durCur;
                        for (var c = null, d = null, e = -1, f = -1, l = 0, r = 1; 3 >= r; r++) {
                            for (c = this._getOpenHole();
                                (c.holeIndex == e || c.holeIndex == f) && 10 >= l;) c = this._getOpenHole(), l++;
                            if (10 < l) break; - 1 == e ? e = c.holeIndex : -1 == f && (f = c.holeIndex);
                            d = 0.5 >= Math.random() ? 5 : 6;
                            3 == r & 5 != d && !b ? d = 5 : 5 == d && b && (d = 6);
                            5 == d && (this.boss_isAlive = b = !0);
                            this.holes[c.holeIndex]._spawnItem(d)
                        }
                    }
            }
        },
        _bossStart: function() {
            this.bossUI._start();
            for (var b = [], c = 0; 8 >= c; c++) this.holes[c].spCd = this.boss_spawnCd_Start - 0.1, null != this.holes[c].item ? this.holes[c].item._returnToHole(!1, !0) : b.push(0);
            this.bossUI._editLastMoles(b);
            this.boss_spawnCd = this.boss_spawnCd_Start;
            ig.game.numOfItems = 0;
            this.cDown.set(Math.abs(this.cDown.delta()) + 8)
        },
        _bossEnd: function(b) {
            this.bossUI._end(b);
            this.boss_spawnCd = 3;
            for (b = 0; 8 >= b; b++) null != this.holes[b].item && this.holes[b].item.isAlive && (this.holes[b].item._returnToHole(!1, !1), this.holes[b].item.isAlive = !1);
            ig.game.numOfItems = 0;
            this.spawnCd = 1
        },
        _destroyBoss: function() {
            for (var b = 0; 8 >= b; b++) null != this.holes[b].item && "Boss" == this.holes[b].item.type && (this.holes[b].item._returnToHole(!1, !1), this.holes[b].item._destroy())
        },
        _spawnHoles: function() {
            if (ig.ua.mobile) b = 15, c = 431, d = 185, e = 160, this.holeCount = 9, f = 3;
            else {
                var b = 400,
                    c = 120,
                    d = 175,
                    e = 148;
                this.holeCount = 9;
                var f = 3
            }
            for (var l = b, r = 0, p = 1; p <= this.holeCount; p++) ig.game.spawnEntity(EntityGameGround, l, c), r++, r >= f ? (l = b, c += e, r = 0) : l += d;
            this.holes = ig.game.getEntitiesByType("EntityGameGround")
        },
        _checkInputs: function() {
            if (ig.input.pressed("click"))
                if ("in game" == ig.game.gameState) {
                    this.pointer.refreshPos();
                    for (var b = this.pointer.pos.x, c = this.pointer.pos.y, d = 0; d < this.holes.length; d++) this.holes[d]._checkIsHammered(b, c, d)
                } else "tutorial" == ig.game.gameState && (b = ig.game.getEntityByName("tutWindow"), !ig.game.getEntityByName("gameControl_UI").tut_homeBtn.checkMousePos() && !b.btnSkipTut.checkMousePos() && b.nextTutorial())
        },
        _pauseGame: function() {
            ig.game.gameState = "pause";
            this.cDown.pause()
        },
        _unpauseGame: function() {
            this.resumeTime = new ig.Timer(3);
            ig.game.gameState = "pause countdown"
        },
        _resumeGame: function() {
            ig.game.gameState = "in game";
            this.cDown.unpause()
        },
        _hitHole: function(b) {
            var c = [],
                c = this.holes[b]._hitHole();
            this.score += c[0];
            0 != c[1] && "in game" == ig.game.gameState && this.cDown.set(Math.abs(this.cDown.delta()) + c[1])
        },
        _showStats: function() {},
        chance_normal: 0.6,
        chance_magic: 0.75,
        chance_hh: 0.9,
        chance_hh_Min: 0.75,
        chance_hh_Max: 0.9,
        chance_hh_AdjDec: -0.01,
        chance_hh_AdjInc: 0.01,
        lastRoll: 0,
        numOfItems_Max: 0,
        spawnCd: 0,
        spawnCd_Def: 0.3,
        lastHole: 0,
        _itemSpawnControl: function() {
            if (0 < this.spawnCd) this.spawnCd -= ig.system.tick;
            else if (ig.game.numOfItems < this.numOfItems_Max) {
                var b = this._getOpenHole();
                b.hasFree && (this.holes[b.holeIndex]._spawnItem(this._getItemToSpawn()), ig.game.numOfItems++, this._showStats());
                this.spawnCd = this.spawnCd_Def
            }
        },
        _getOpenHole: function() {
            for (var b = [], c = {
                hasFree: !1,
                holeIndex: 0
            }, d = 0, e = 0; e < this.holes.length; e++) null == this.holes[e].item && 0 >= this.holes[e].spCd && b.push(e);
            if (0 >= b.length) return c;
            c.hasFree = !0;
            if (0 < b.length) {
                e = Math.floor(Math.random() * (b.length - 1));
                for (c.holeIndex = b[e]; this.lastHole == c.holeIndex && 10 > d;) e = Math.floor(Math.random() * (b.length - 1)), c.holeIndex = b[e], d++;
                this.lastHole = c.holeIndex
            }
            return c
        },
        _getOpenHoleCount: function() {
            for (var b = 0, c = 0; c < this.holes.length; c++) this.holes[c].hasItem || b++;
            return b
        },
        _adjustHardHatChance: function(b) {
            this.chance_hh += b ? this.chance_hh_AdjInc : this.chance_hh_AdjDec;
            this.chance_hh < this.chance_hh_Min ? this.chance_hh = this.chance_hh_Min : this.chance_hh > this.chance_hh_Max && (this.chance_hh = this.chance_hh_Max)
        },
        _getItemToSpawn: function() {
            var b = Math.random(),
                c = 4;
            1 >= this.level && (0.35 >= b ? c = 1 : 0.4 >= b ? c = 2 : 1 >= b && (c = 3));
            0 >= this.cDown.minutes && 45 >= this.cDown.seconds && (5 < this.cDown.seconds || this.level < this.maxLevel - 1) && 0 >= this.hhCd_time ? b <= this.chance_normal ? c = 1 : b <= this.chance_magic - 0.1 ? c = 2 : b <= this.chance_hh && (c = 3) : 0 >= this.cDown.minutes && 5 >= this.cDown.seconds ? b <= this.chance_normal ? c = 1 : b <= this.chance_magic ? c = 2 : 0.9 >= b && (c = 3) : 0 >= this.cDown.minutes && 0 < this.hhCd_time ? b <= this.chance_normal ? c = 1 : b <= this.chance_magic ? c = 2 : b <= this.chance_magic + 0.04 && (c = 3) : b <= this.chance_normal ? c = 1 : b <= this.chance_magic ? c = 2 : b <= this.chance_hh_Min && (c = 3);
            3 == c && 0 >= this.hhCd_time && this._hardHatSpawned();
            return c
        },
        level: 0,
        level_time: 0,
        maxLevel: 5,
        _levelControl: function() {
            this.level_time -= ig.system.tick;
            0 >= this.level_time && (this.level < this.maxLevel && this.level++, 1 == this.level ? (this.numOfItems_Max = 0, this.level_time = 7) : 2 == this.level ? (this.numOfItems_Max = 2, this.spawnCd_Def = 0.35, this.level_time = 15) : 3 == this.level ? (this.numOfItems_Max = 3, this.spawnCd_Def = 0.3, this.level_time = 25) : 4 == this.level ? (this.numOfItems_Max = 4, this.spawnCd_Def = 0.25, this.level_time = 35) : 5 == this.level && (this.numOfItems_Max = 5, this.spawnCd_Def = 0.2, this.level_time = 35))
        },
        hhCd_time: 0,
        hhCd_timeDef: 12,
        hhCd_count: 0,
        hhCd_countMax: 3,
        _hardHatSpawned: function() {
            this.hhCd_count++;
            this.hhCd_count >= this.hhCd_countMax && (this.hhCd_count = 0, this.hhCd_time = this.hhCd_timeDef)
        },
        durRed_sec: 50,
        durRed_secDef: 50,
        durRed_dec: 0.02,
        durRed_max: 0.25,
        _reduceDuration: function() {
            this.durRed_sec -= ig.system.tick;
            0 >= this.durRed_sec && (this.durRed_sec = this.durRed_secDef, ig.game.durRed_Amount += this.durRed_dec, ig.game.durRed_Amount > this.durRed_max && (ig.game.durRed_Amount = this.durRed_max))
        },
        spawnCd_sec: 50,
        spawnCd_secDef: 50,
        spawnCd_dec: 0.01,
        spawnCd_min: 0.1,
        _spawnCdReduction: function() {
            this.level < this.maxLevel || (this.spawnCd_sec -= ig.system.tick, 0 >= this.durRed_sec && (this.durRed_sec = this.spawnCd_secDef, this.spawnCd_Def -= this.spawnCd_dec, this.spawnCd_Def < this.spawnCd_min && (this.spawnCd_Def = this.spawnCd_min)))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-control-ui").requires("impact.entity", "plugins.time-counter").defines(function() {
    EntityGameControlUi = ig.Entity.extend({
        name: "gameControl_UI",
        zIndex: 16,
        gameController: null,
        imgTimer: new ig.Image("media/graphics/game/gui_1.png"),
        imgScore: new ig.Image("media/graphics/game/gui_2.png"),
        imgPauseWindow: new ig.Image("media/graphics/game/meny_option.png"),
        imgPauseText: new ig.Image("media/graphics/game/text_paused.png"),
        imgPauseBG_desk: new ig.Image("media/graphics/game/horizont_pause_blur.jpg"),
        imgPauseBG_mobile: new ig.Image("media/graphics/game/vertikale_pause_blur.jpg"),
        btn_gamePlayButton: null,
        btn_toHome: null,
        btn_restart: null,
        btn_pause: null,
        settings: null,
        init: function(b, c, d) {
            ig.global.wm || (this.gameController = ig.game.getEntityByName("gameControl"), this.parent(b, c, d))
        },
        _ready: function() {
            this.btn_gamePlayButton = ig.game.getEntityByName("gamePlayButton");
            this.btn_toHome = ig.game.getEntityByName("toHomeButton");
            this.btn_restart = ig.game.getEntityByName("restartButton");
            this.btn_pause = ig.game.getEntityByName("gamePauseButton");
            this.settings = ig.game.spawnEntity(EntitySettingsControl, 0, 0)
        },
        _getValue: function(b, c) {
            var d = 0;
            if (ig.ua.mobile) switch (b) {
                case "imgTimer":
                    switch (c) {
                        case "posX":
                            d = 156;
                            break;
                        case "posY":
                            d = 110
                    }
                    break;
                case "imgTimer_txt":
                    switch (c) {
                        case "posX":
                            d = this._getValue("imgTimer", "posX") - 9;
                            break;
                        case "posY":
                            d = this._getValue("imgTimer", "posY") - 29;
                            break;
                        case "fontSize":
                            d = 38;
                            break;
                        case "color":
                            d = "#954600";
                            break;
                        case "align":
                            d = "center"
                    }
                    break;
                case "imgScore":
                    switch (c) {
                        case "posX":
                            d = 160;
                            break;
                        case "posY":
                            d = 190
                    }
                    break;
                case "imgScore_txt":
                    switch (c) {
                        case "posX":
                            d = this._getValue("imgScore", "posX") - 13;
                            break;
                        case "posY":
                            d = this._getValue("imgScore", "posY") - 73;
                            break;
                        case "fontSize":
                            d = 30;
                            break;
                        case "color":
                            d = "#954600";
                            break;
                        case "align":
                            d = "center"
                    }
                    break;
                case "countdown_txt":
                    switch (c) {
                        case "posX":
                            d = 135;
                            break;
                        case "posY":
                            d = this.cDown_posY;
                            break;
                        case "fontSize":
                            d = this.cDown_fontSize;
                            break;
                        case "color":
                            d = "#FFFFFF";
                            break;
                        case "align":
                            d = "center"
                    }
            } else switch (b) {
                case "imgTimer":
                    switch (c) {
                        case "posX":
                            d = 62;
                            break;
                        case "posY":
                            d = 173
                    }
                    break;
                case "imgTimer_txt":
                    switch (c) {
                        case "posX":
                            d = this._getValue("imgTimer", "posX") + 37;
                            break;
                        case "posY":
                            d = this._getValue("imgTimer", "posY") + -62;
                            break;
                        case "fontSize":
                            d = 38;
                            break;
                        case "color":
                            d = "#954600";
                            break;
                        case "align":
                            d = "center"
                    }
                    break;
                case "imgScore":
                    switch (c) {
                        case "posX":
                            d = 62;
                            break;
                        case "posY":
                            d = 256
                    }
                    break;
                case "imgScore_txt":
                    switch (c) {
                        case "posX":
                            d = this._getValue("imgScore", "posX") + 37;
                            break;
                        case "posY":
                            d = this._getValue("imgScore", "posY") + -105;
                            break;
                        case "fontSize":
                            d = 34;
                            break;
                        case "color":
                            d = "#954600";
                            break;
                        case "align":
                            d = "center"
                    }
                    break;
                case "countdown_txt":
                    switch (c) {
                        case "posX":
                            d = 250;
                            break;
                        case "posY":
                            d = 150;
                            break;
                        case "fontSize":
                            d = this.cDown_fontSize;
                            break;
                        case "color":
                            d = "#FFFFFF";
                            break;
                        case "align":
                            d = "center"
                    }
            }
            return d
        },
        draw: function() {
            ig.global.wm || (this.imgTimer.draw(this._getValue("imgTimer", "posX"), this._getValue("imgTimer", "posY")), this.imgScore.draw(this._getValue("imgScore", "posX"), this._getValue("imgScore", "posY")), this.drawTimer(), this.drawText("imgScore_txt", this.gameController.score), this._drawHitConfirm(), this.isPaused && "end countdown" != ig.game.gameState && (this.btn_gamePlayButton.pos = this.pos_btnPlay, this.btn_toHome.pos = this.pos_btnToHome, this.btn_restart.pos = this.pos_btnRestart, ig.ua.mobile ? this.imgPauseBG_mobile.draw(0, 0) : this.imgPauseBG_desk.draw(0, 0), this.imgPauseWindow.draw(this.pos_pauseWindow.x, this.pos_pauseWindow.y), this.imgPauseText.draw(this.pos_pauseText.x, this.pos_pauseText.y), this.settings._draw(this.pos_settings)))
        },
        update: function() {
            this.tween_pauseWindow && this.tween_pauseWindow.update();
            this.tween_pauseText && this.tween_pauseText.update();
            this.tween_btnToHome && this.tween_btnToHome.update();
            this.tween_btnRestart && this.tween_btnRestart.update();
            this.tween_playButton && this.tween_playButton.update();
            this.tween_settings && this.tween_settings.update()
        },
        cDown_posYInc: 0.03,
        cDown_lastSec: 3,
        cDown_goDur: 50,
        cDown_endDur: 50,
        cDown_lastValue: "15",
        isTimeOver: !1,
        imgTimer_1: new ig.Image("media/graphics/game/effects/countdown_01.png"),
        imgTimer_2: new ig.Image("media/graphics/game/effects/countdown_02.png"),
        imgTimer_3: new ig.Image("media/graphics/game/effects/countdown_03.png"),
        imgTimer_go: new ig.Image("media/graphics/game/effects/countdown_go.png"),
        img_timeOver: new ig.Image("media/graphics/game/effects/timeover.png"),
        img_boss: new ig.Image("media/graphics/game/effects/boss_round.png"),
        img_bossWck: new ig.Image("media/graphics/game/effects/boss_whacked.png"),
        img_bossEsc: new ig.Image("media/graphics/game/effects/boss_escaped.png"),
        timerPos: {
            x: 0,
            y: 0
        },
        timerScale: 0.1,
        timerScale_Inc: 0.1,
        timerScale_Max: 1,
        drawTimer: function() {
            var b = "pause countdown" == ig.game.gameState ? this.gameController.resumeTime : this.gameController.cDown,
                c = b.seconds,
                d = b.minutes;
            b.getMS_asString();
            if ("countdown" == ig.game.gameState || "pause countdown" == ig.game.gameState) {
                b = this.imgTimer_1;
                switch (c) {
                    case 3:
                        b = this.imgTimer_3;
                        break;
                    case 2:
                        b = this.imgTimer_2;
                        break;
                    case 1:
                        b = this.imgTimer_1
                }
                this.cDown_lastSec != c && (this.cDown_lastSec = c, this.resetImgText(), ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.beep));
                this.drawImgText(b);
                this.drawText("imgTimer_txt", this.cDown_lastValue)
            } else "tutorial" == ig.game.gameState ? this.drawText("imgTimer_txt", this.cDown_lastValue) : "in game" == ig.game.gameState ? (50 == this.cDown_goDur && (this.resetImgText(), ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.go)), 1 < this.cDown_goDur && (this.cDown_goDur--, this.drawImgText(this.imgTimer_go), 1 >= this.cDown_goDur && 0 >= this.gameController.numOfItems_Max && (this.gameController.numOfItems_Max = 1)), this.gameController.bossUI.bossMode ? (this.gameController.bossUI.boss_txtDur == this.gameController.bossUI.boss_txtStart && this.resetImgText(), 1 < this.gameController.bossUI.boss_txtDur && (this.gameController.bossUI.boss_txtDur--, this.drawImgText(this.img_boss))) : this.gameController.bossUI.boss_whacked ? (this.gameController.bossUI.boss_txtDur == this.gameController.bossUI.boss_txtStart && this.resetImgText(), 1 < this.gameController.bossUI.boss_txtDur && (this.gameController.bossUI.boss_txtDur--, this.drawImgText(this.img_bossWck))) : this.gameController.bossUI.boss_escaped && (this.gameController.bossUI.boss_txtDur == this.gameController.bossUI.boss_txtStart && this.resetImgText(), 1 < this.gameController.bossUI.boss_txtDur && (this.gameController.bossUI.boss_txtDur--, this.drawImgText(this.img_bossEsc))), this.cDown_lastValue = 0 < d ? 10 < c ? d + ":" + c : d + ":0" + c : c, this.drawText("imgTimer_txt", this.cDown_lastValue)) : "end countdown" == ig.game.gameState && (this.drawText("imgTimer_txt", "0"), this.isTimeOver || (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.timeout), this.isTimeOver = !0, this.resetImgText()), this.gameController.hasGameOver || this.drawImgText(this.img_timeOver))
        },
        drawImgText: function(b) {
            this.timerPos = ig.ua.mobile ? {
                x: 630,
                y: 600
            } : {
                x: 830,
                y: 350
            };
            var c = ig.system.context;
            c.save();
            c.translate(this.timerPos.x - b.width * this.timerScale / 2, this.timerPos.y - b.height * this.timerScale / 2);
            c.drawImage(b.data, 0, 0, b.width, b.height, -b.width / 2, -b.height / 2, b.width * this.timerScale, b.height * this.timerScale);
            c.restore();
            this.timerScale += this.timerScale_Inc;
            this.timerScale > this.timerScale_Max && (this.timerScale = this.timerScale_Max)
        },
        resetImgText: function() {
            this.timerScale = 0.1
        },
        drawText: function(b, c) {
            var d, e, f = ig.system.context;
            f.measureText(c);
            d = this._getValue(b, "posX");
            e = this._getValue(b, "posY");
            f.save();
            f.font = this._getValue(b, "fontSize") + "px Mail Ray Stuff, Helvetica, Verdana";
            f.globalAlpha = "countdown_txt" == b ? this.cDown_fontAlpha : 1;
            f.fillStyle = this._getValue(b, "color");
            f.translate(d, e);
            f.textAlign = this._getValue(b, "align");
            f.fillText(c, d, e);
            f.restore()
        },
        isPaused: !1,
        isUnpausing: !1,
        pos_pauseWindow: {
            x: 0,
            y: 0
        },
        pos_pauseText: {
            x: 0,
            y: 0
        },
        pos_btnToHome: {
            x: 0,
            y: 0
        },
        pos_btnRestart: {
            x: 0,
            y: 0
        },
        pos_btnPlay: {
            x: 0,
            y: 0
        },
        pos_settings: {
            x: 0,
            y: 0
        },
        tween_pauseWindow: null,
        tween_pauseText: null,
        tween_btnToHome: null,
        tween_btnRestart: null,
        tween_playButton: null,
        tween_settings: null,
        _pauseGame: function() {
            this.isPaused = !0;
            this.settings.canControl = !0;
            this.btn_pause.isEnabled = !1;
            this._pauseGame_Tween(!0)
        },
        isRestart: !1,
        toHome: !1,
        _unpausingGame: function(b) {
            this.isUnpausing || (this.isUnpausing = !0, this._pauseGame_Tween(!1), this.isRestart = b, this.cDown_goDur = 50, this.gameController.bossUI.bossMode && b && (ig.soundHandler.sfxPlayer.stop(ig.soundHandler.sfxPlayer.soundList.bgmBoss), ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background), this.gameController.bossUI.bgm = 1E3, this.gameController.bossUI.bossMode = !1))
        },
        _unpauseGame: function() {
            this.isUnpausing = this.isPaused = !1;
            this.settings.canControl = !1;
            this.btn_pause.isEnabled = !0;
            this.isRestart && (this.toHome ? ig.ua.mobile ? ig.game.director.jumpTo(LevelTestMobile) : ig.game.director.jumpTo(LevelTestDesktop) : ig.ua.mobile ? ig.game.director.jumpTo(LevelGameMobile) : ig.game.director.jumpTo(LevelGameDesktop))
        },
        isPaused: !1,
        _pauseGame_Tween: function(b) {
            if (ig.ua.mobile)
                if (b) {
                    this.pos_pauseWindow = {
                        x: 49,
                        y: 972
                    };
                    this.pos_pauseText = {
                        x: 221,
                        y: 1010
                    };
                    this.pos_btnToHome = {
                        x: 156,
                        y: 1253
                    };
                    this.pos_btnRestart = {
                        x: 245,
                        y: 1253
                    };
                    this.pos_btnPlay = {
                        x: 337,
                        y: 1253
                    };
                    this.pos_settings = {
                        x: 0,
                        y: 678
                    };
                    var c = {
                            x: 49,
                            y: 294
                        },
                        d = {
                            x: 221,
                            y: 332
                        },
                        e = {
                            x: 156,
                            y: 575
                        },
                        f = {
                            x: 245,
                            y: 575
                        },
                        l = {
                            x: 337,
                            y: 575
                        },
                        r = {
                            x: 0,
                            y: 0
                        }
                } else this.pos_pauseWindow = {
                    x: 49,
                    y: 294
                }, this.pos_pauseText = {
                    x: 221,
                    y: 332
                }, this.pos_btnToHome = {
                    x: 156,
                    y: 575
                }, this.pos_btnRestart = {
                    x: 245,
                    y: 575
                }, this.pos_btnPlay = {
                    x: 337,
                    y: 575
                }, this.pos_settings = {
                    x: 0,
                    y: 0
                }, c = {
                    x: 49,
                    y: 972
                }, d = {
                    x: 221,
                    y: 1010
                }, e = {
                    x: 156,
                    y: 1253
                }, f = {
                    x: 245,
                    y: 1253
                }, l = {
                    x: 337,
                    y: 1253
                }, r = {
                    x: 0,
                    y: 678
                };
            else b ? (this.pos_pauseWindow = {
                x: 259,
                y: 518
            }, this.pos_pauseText = {
                x: 431,
                y: 556
            }, this.pos_btnToHome = {
                x: 361,
                y: 799
            }, this.pos_btnRestart = {
                x: 454,
                y: 799
            }, this.pos_btnPlay = {
                x: 547,
                y: 799
            }, this.pos_settings = {
                x: 0,
                y: 435
            }, c = {
                x: 259,
                y: 83
            }, d = {
                x: 431,
                y: 121
            }, e = {
                x: 361,
                y: 364
            }, f = {
                x: 454,
                y: 364
            }, l = {
                x: 547,
                y: 364
            }, r = {
                x: 0,
                y: 0
            }) : (this.pos_pauseWindow = {
                x: 259,
                y: 83
            }, this.pos_pauseText = {
                x: 431,
                y: 121
            }, this.pos_btnToHome = {
                x: 361,
                y: 364
            }, this.pos_btnRestart = {
                x: 454,
                y: 364
            }, this.pos_btnPlay = {
                x: 547,
                y: 364
            }, this.pos_settings = {
                x: 0,
                y: 0
            }, c = {
                x: 259,
                y: 518
            }, d = {
                x: 431,
                y: 556
            }, e = {
                x: 361,
                y: 799
            }, f = {
                x: 454,
                y: 799
            }, l = {
                x: 547,
                y: 799
            }, r = {
                x: 0,
                y: 435
            });
            var p = b ? 0.75 : 0.25;
            b = b ? ig.Tween.Easing.Elastic.EaseOut : ig.Tween.Easing.Quadratic.EaseIn;
            this.tween_pauseWindow = this.tween({
                pos_pauseWindow: c
            }, p, {
                entity: this,
                easing: b,
                onComplete: function() {
                    this.entity.isUnpausing && this.entity._unpauseGame();
                    this.entity.tween_pauseWindow = null
                }
            });
            this.tween_pauseWindow.start();
            this.tween_pauseText = this.tween({
                pos_pauseText: d
            }, p, {
                entity: this,
                easing: b,
                onComplete: function() {
                    this.entity.tween_pauseText = null
                }
            });
            this.tween_pauseText.start();
            this.tween_btnToHome = this.tween({
                pos_btnToHome: e
            }, p, {
                entity: this,
                easing: b,
                onComplete: function() {
                    this.entity.tween_btnToHome = null
                }
            });
            this.tween_btnToHome.start();
            this.tween_btnRestart = this.tween({
                pos_btnRestart: f
            }, p, {
                entity: this,
                easing: b,
                onComplete: function() {
                    this.entity.tween_btnRestart = null
                }
            });
            this.tween_btnRestart.start();
            this.tween_playButton = this.tween({
                pos_btnPlay: l
            }, p, {
                entity: this,
                easing: b,
                onComplete: function() {
                    this.entity.tween_playButton = null
                }
            });
            this.tween_playButton.start();
            this.tween_settings = this.tween({
                pos_settings: r
            }, p, {
                entity: this,
                easing: b,
                onComplete: function() {
                    this.entity.tween_settings = null
                }
            });
            this.tween_settings.start()
        },
        tut_homeBtn: null,
        pausePosX: null,
        _tutorial: function(b) {
            b ? (this.tut_homeBtn = ig.game.spawnEntity(EntityBtnToHome, this.btn_pause.pos.x, this.btn_pause.pos.y), this.tut_homeBtn.pos.y = this.btn_pause.pos.y, this.tut_homeBtn.name = "toHome_tutorial", this.btn_pause.isEnabled = b, this.pausePosX = this.btn_pause.pos.x, this.btn_pause.pos.x = -400) : (this.tut_homeBtn.pos.x = -400, this.btn_pause.pos.x = this.pausePosX)
        },
        hitConf: [],
        hitConf_dur: 0.7,
        hitConf_yInc: 4,
        hitConf_yAccel: 0.1,
        hitConf_scaleInc: 0.1,
        hitConf_font_start: 10,
        hitConf_font_end: 25,
        hitConf_font_inc: 1,
        img_score1: new ig.Image("media/graphics/game/effects/score01.png"),
        img_score2: new ig.Image("media/graphics/game/effects/score02.png"),
        img_score3: new ig.Image("media/graphics/game/effects/score03.png"),
        img_score4: new ig.Image("media/graphics/game/effects/score04.png"),
        img_score5: new ig.Image("media/graphics/game/effects/score05.png"),
        _addHitConfirm: function(b, c, d, e, f) {
            this.hitConf.push({
                x: b + 75,
                y: c - 40,
                yLim: c - 90,
                txt: d,
                color: e,
                fontSize: this.hitConf_font_start,
                fontIsInc: !0,
                speed: this.hitConf_yInc,
                scale: 0.1,
                dur: this.hitConf_dur,
                type: f
            })
        },
        _drawHitConfirm: function() {
            for (var b = ig.system.context, c = this.hitConf.length - 1; 0 <= c; c--) {
                b.measureText(this.hitConf[c].txt);
                b.measureText("m");
                this.hitConf[c].fontIsInc && (this.hitConf[c].fontSize += this.hitConf_font_inc, this.hitConf[c].fontSize >= this.hitConf_font_end && (this.hitConf[c].fontIsInc = !1));
                b.save();
                var d = this.img_score1;
                b.translate(this.hitConf[c].x, this.hitConf[c].y);
                switch (this.hitConf[c].type) {
                    case "Regular Mole":
                    case "BossHit":
                        d = this.img_score1;
                        break;
                    case "Magician Mole":
                        d = this.img_score2;
                        break;
                    case "Hard-Hat Mole":
                        d = this.img_score3;
                        break;
                    case "Bomb":
                        d = this.img_score4;
                        break;
                    case "Boss":
                        d = this.img_score5
                }
                b.drawImage(d.data, 0, 0, d.width, d.height, -d.width /
                    2, -d.height / 2, d.width, d.height);
                this.hitConf[c].scale += this.hitConf_scaleInc;
                1 < this.hitConf[c].scale && (this.hitConf[c].scale = 1);
                b.restore();
                this.hitConf[c].y -= this.hitConf[c].speed;
                this.hitConf[c].y < this.hitConf[c].yLim && (this.hitConf[c].y = this.hitConf[c].yLim);
                this.hitConf[c].speed -= this.hitConf_yAccel;
                0 > this.hitConf[c].speed && (this.hitConf[c].speed = 0);
                this.hitConf[c].dur -= ig.system.tick;
                0 >= this.hitConf[c].dur && this.hitConf.splice(c, 1)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.gameover-control").requires("impact.entity").defines(function() {
    EntityGameoverControl = ig.Entity.extend({
        name: "gameoverControl",
        zIndex: 30,
        imgGameOver: new ig.Image("media/graphics/game/gameover_window.png"),
        hiScore: 0,
        playerScore: 0,
        accu_moleEscaped: 0,
        accu_moleHit: 0,
        accu_bombs: 0,
        accuracy: 0,
        btn_toHome: null,
        btn_restart: null,
        hiScoreGet: !1,
        _getValue: function(b, c) {
            var d = 0;
            if (ig.ua.mobile) switch (b) {
                case "imgGameOver":
                    switch (c) {
                        case "startPosX":
                            d = 15;
                            break;
                        case "startPosY":
                            d = 560;
                            break;
                        case "endPosX":
                            d = 15;
                            break;
                        case "endPosY":
                            d = 220;
                            break;
                        case "tweenDur":
                            d = 1.5
                    }
                    break;
                case "btnToHome":
                    switch (c) {
                        case "startPosX":
                            d = 200;
                            break;
                        case "startPosY":
                            d = 884;
                            break;
                        case "endPosX":
                            d = 200;
                            break;
                        case "endPosY":
                            d = 544;
                            break;
                        case "tweenDur":
                            d = 1.5
                    }
                    break;
                case "btnRestart":
                    switch (c) {
                        case "startPosX":
                            d = 300;
                            break;
                        case "startPosY":
                            d = 884;
                            break;
                        case "endPosX":
                            d = 300;
                            break;
                        case "endPosY":
                            d = 544;
                            break;
                        case "tweenDur":
                            d = 1.5
                    }
                    break;
                case "txt_HiScore":
                    switch (c) {
                        case "posX":
                            d = 155;
                            break;
                        case "posY":
                            d = 75;
                            break;
                        case "fontSizeMax":
                            d = 25;
                            break;
                        case "color":
                            d = "#954600"
                    }
                    break;
                case "txt_YourScore":
                    switch (c) {
                        case "posX":
                            d = 155;
                            break;
                        case "posY":
                            d = 100;
                            break;
                        case "fontSizeMax":
                            d = 25;
                            break;
                        case "color":
                            d = "#954600"
                    }
                    break;
                case "txt_Accuracy":
                    switch (c) {
                        case "posX":
                            d = 155;
                            break;
                        case "posY":
                            d = 120;
                            break;
                        case "fontSizeMax":
                            d = 22;
                            break;
                        case "color":
                            d = "#954600"
                    }
                    break;
                case "txt_Whacked":
                    switch (c) {
                        case "posX":
                            d = 155;
                            break;
                        case "posY":
                            d = 130;
                            break;
                        case "fontSizeMax":
                            d = 22;
                            break;
                        case "color":
                            d = "#954600"
                    }
                    break;
                case "txt_Escaped":
                    switch (c) {
                        case "posX":
                            d = 155;
                            break;
                        case "posY":
                            d = 140;
                            break;
                        case "fontSizeMax":
                            d = 22;
                            break;
                        case "color":
                            d = "#954600"
                    }
                    break;
                case "txt_Bombs":
                    switch (c) {
                        case "posX":
                            d = 155;
                            break;
                        case "posY":
                            d = 150;
                            break;
                        case "fontSizeMax":
                            d = 22;
                            break;
                        case "color":
                            d = "#954600"
                    }
            } else switch (b) {
                case "imgGameOver":
                    switch (c) {
                        case "startPosX":
                            d = 230;
                            break;
                        case "startPosY":
                            d = 470;
                            break;
                        case "endPosX":
                            d = 230;
                            break;
                        case "endPosY":
                            d = 20;
                            break;
                        case "tweenDur":
                            d = 1.5
                    }
                    break;
                case "btnToHome":
                    switch (c) {
                        case "startPosX":
                            d = 410;
                            break;
                        case "startPosY":
                            d = 798;
                            break;
                        case "endPosX":
                            d = 410;
                            break;
                        case "endPosY":
                            d = 348;
                            break;
                        case "tweenDur":
                            d = 1.5
                    }
                    break;
                case "btnRestart":
                    switch (c) {
                        case "startPosX":
                            d = 520;
                            break;
                        case "startPosY":
                            d = 798;
                            break;
                        case "endPosX":
                            d = 520;
                            break;
                        case "endPosY":
                            d = 348;
                            break;
                        case "tweenDur":
                            d = 1.5
                    }
                    break;
                case "txt_HiScore":
                    switch (c) {
                        case "posX":
                            d = 263;
                            break;
                        case "posY":
                            d = 75;
                            break;
                        case "fontSizeMax":
                            d = 25;
                            break;
                        case "color":
                            d = "#954600"
                    }
                    break;
                case "txt_YourScore":
                    switch (c) {
                        case "posX":
                            d = 263;
                            break;
                        case "posY":
                            d = 100;
                            break;
                        case "fontSizeMax":
                            d = 25;
                            break;
                        case "color":
                            d = "#954600"
                    }
                    break;
                case "txt_Accuracy":
                    switch (c) {
                        case "posX":
                            d = 263;
                            break;
                        case "posY":
                            d = 120;
                            break;
                        case "fontSizeMax":
                            d = 22;
                            break;
                        case "color":
                            d = "#954600"
                    }
                    break;
                case "txt_Whacked":
                    switch (c) {
                        case "posX":
                            d = 263;
                            break;
                        case "posY":
                            d = 130;
                            break;
                        case "fontSizeMax":
                            d = 22;
                            break;
                        case "color":
                            d = "#954600"
                    }
                    break;
                case "txt_Escaped":
                    switch (c) {
                        case "posX":
                            d = 263;
                            break;
                        case "posY":
                            d = 140;
                            break;
                        case "fontSizeMax":
                            d = 22;
                            break;
                        case "color":
                            d = "#954600"
                    }
                    break;
                case "txt_Bombs":
                    switch (c) {
                        case "posX":
                            d = 263;
                            break;
                        case "posY":
                            d = 150;
                            break;
                        case "fontSizeMax":
                            d = 22;
                            break;
                        case "color":
                            d = "#954600"
                    }
            }
            return d
        },
        init: function() {
            if (!ig.global.wm) {
                this.playerScore = ig.game.playerScore;
                this.accu_moleSpawn = ig.game.accu_moleSpawn;
                this.accu_moleHit = ig.game.accu_moleHit;
                this.accu_moleEscaped = ig.game.accu_escaped;
                this.accu_bombs = ig.game.accu_bombs;
                this.accuracy = (100 * (this.accu_moleHit / this.accu_moleSpawn)).toFixed(2);
                null != ig.game.io.storage.get("whackAMole-hiScore") ? (this.hiScore = ig.game.io.storage.get("whackAMole-hiScore"), this.playerScore > this.hiScore ? (ig.game.io.storage.set("whackAMole-hiScore", this.playerScore), ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.bossWck), this.hiScoreGet = !0) : ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.bossEsc)) : (ig.game.io.storage.set("whackAMole-hiScore", this.playerScore), this.hiScoreGet = !0, ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.bossWck));
                this._startTween();
                for (var b = "txt_HiScore txt_YourScore txt_Accuracy txt_Whacked txt_Escaped txt_Bombs".split(" "), c = 0; c < b.length; c++) this.fontSizes.push({
                    cur: this._getValue(b[c], "fontSizeMax"),
                    end: this._getValue(b[c], "fontSizeMax")
                });
                ig.game.getEntityByName("gameControl_UI").btn_pause.isEnabled = !1;
                this._ready()
            }
        },
        _ready: function() {
            this.btn_toHome = ig.game.getEntityByName("toHomeButton");
            this.btn_restart = ig.game.getEntityByName("restartButton");
            this.btn_toHome.isEnabled = !1;
            this.btn_restart.isEnabled = !1
        },
        draw: function() {
            if (!ig.global.wm) {
                var b = ig.system.context;
                b.save();
                b.beginPath();
                b.globalAlpha = 0.4;
                b.rect(0, 0, 1E3, 1E3);
                b.fillStyle = "black";
                b.fill();
                b.restore();
                this.imgGameOver.draw(this.pos_imgGameOver.x, this.pos_imgGameOver.y);
                this.hiScoreGet ? (this.drawText("txt_HiScore", _STRINGS.Game.NewHiScore, this.playerScore, 0, "#954600", "#5C83FF"), this.drawText("txt_YourScore", _STRINGS.Game.YourScore, this.playerScore, 1, "#954600", "#5C83FF")) : (this.drawText("txt_HiScore", _STRINGS.Game.HiScore, this.hiScore, 0, "#954600", "#5C83FF"), this.drawText("txt_YourScore", _STRINGS.Game.YourScore, this.playerScore, 1, "#954600", "#FF3333"));
                50 < this.accuracy ? (this.drawText("txt_Accuracy", _STRINGS.Game.Accuracy, this.accuracy + "%", 2, "#954600", "#5C83FF"), this.drawText("txt_Whacked", _STRINGS.Game.Whacked, this.accu_moleHit, 3, "#954600", "#5C83FF"), this.drawText("txt_Escaped", _STRINGS.Game.Escaped, this.accu_moleEscaped, 4, "#954600", "#5C83FF")) : (this.drawText("txt_Accuracy", _STRINGS.Game.Accuracy, this.accuracy + "%", 2, "#954600", "#FF3333"), this.drawText("txt_Whacked", _STRINGS.Game.Whacked, this.accu_moleHit, 3, "#954600", "#FF3333"), this.drawText("txt_Escaped", _STRINGS.Game.Escaped, this.accu_moleEscaped, 4, "#954600", "#FF3333"));
                0 < this.accu_bombs ? this.drawText("txt_Bombs", _STRINGS.Game.Bombs, this.accu_bombs, 5, "#954600", "#FF3333") : this.drawText("txt_Bombs", _STRINGS.Game.Bombs, this.accu_bombs, 5, "#954600", "#5C83FF");
                this.btn_toHome.pos = this.pos_btnHome;
                this.btn_restart.pos = this.pos_btnRestart;
                this.btn_toHome.draw();
                this.btn_restart.draw()
            }
        },
        update: function() {
            this.tween_Window && this.tween_Window.update();
            this.tween_btnHome && this.tween_btnHome.update();
            this.tween_btnRestart && this.tween_btnRestart.update();
            this.parent()
        },
        drawText: function(b, c, d, e, f, l) {
            var r, p = ig.system.context;
            r = this._getValue(b, "posX");
            b = this._getValue(b, "posY") + this.pos_imgGameOver.y / 2;
            p.save();
            p.font = this.fontSizes[e].cur + "px Mail Ray Stuff, Helvetica, Verdana";
            p.globalAlpha = 1;
            p.translate(r, b);
            p.textAlign = "right";
            p.measureText(c);
            p.fillStyle = f;
            p.fillText(c, r, b);
            p.textAlign = "right";
            c = p.measureText(d).width;
            p.fillStyle = l;
            p.fillText(d, r + c, b);
            p.restore()
        },
        pos_imgGameOver: {
            x: 0,
            y: 0
        },
        pos_btnHome: {
            x: 0,
            y: 0
        },
        pos_btnRestart: {
            x: 0,
            y: 0
        },
        tween_Window: null,
        tween_btnHome: null,
        tween_btnRestart: null,
        _startTween: function() {
            this.pos_imgGameOver.x = this._getValue("imgGameOver", "startPosX");
            this.pos_imgGameOver.y = this._getValue("imgGameOver", "startPosY");
            var b = {
                    x: this._getValue("imgGameOver", "endPosX"),
                    y: this._getValue("imgGameOver", "endPosY")
                },
                c = this._getValue("imgGameOver", "tweenDur");
            this.tween_Window = this.tween({
                pos_imgGameOver: b
            }, c, {
                entity: this,
                easing: ig.Tween.Easing.Elastic.EaseOut,
                onComplete: function() {
                    this.entity._tweenEnds();
                    this.entity.tween_Window = null
                }
            });
            this.tween_Window.start();
            this.pos_btnHome.x = this._getValue("btnToHome", "startPosX");
            this.pos_btnHome.y = this._getValue("btnToHome", "startPosY");
            b = {
                x: this._getValue("btnToHome", "endPosX"),
                y: this._getValue("btnToHome", "endPosY")
            };
            c = this._getValue("btnToHome", "tweenDur");
            this.tween_btnHome = this.tween({
                pos_btnHome: b
            }, c, {
                entity: this,
                easing: ig.Tween.Easing.Elastic.EaseOut,
                onComplete: function() {
                    this.entity.tween_btnHome = null
                }
            });
            this.tween_btnHome.start();
            this.pos_btnRestart.x = this._getValue("btnRestart", "startPosX");
            this.pos_btnRestart.y = this._getValue("btnRestart", "startPosY");
            b = {
                x: this._getValue("btnRestart", "endPosX"),
                y: this._getValue("btnRestart", "endPosY")
            };
            c = this._getValue("btnRestart", "tweenDur");
            this.tween_btnRestart = this.tween({
                pos_btnRestart: b
            }, c, {
                entity: this,
                easing: ig.Tween.Easing.Elastic.EaseOut,
                onComplete: function() {
                    this.entity.tween_btnRestart = null
                }
            });
            this.tween_btnRestart.start()
        },
        _tweenEnds: function() {
            this.fontSize_phase = 1;
            this.btn_toHome.isEnabled = !0;
            this.btn_restart.isEnabled = !0
        },
        fontSizes: [],
        fontSize_curIndex: 0,
        fontSize_phase: 0,
        fontSize_inc: 3,
        _updateFontSizes: function() {
            1 == this.fontSize_phase && (this.fontSizes[this.fontSize_curIndex].cur += this.fontSize_inc, this.fontSizes[this.fontSize_curIndex].cur >= this.fontSizes[this.fontSize_curIndex].end && (this.fontSizes[this.fontSize_curIndex].cur = this.fontSizes[this.fontSize_curIndex].end, ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.pop), this.fontSize_curIndex++, this.fontSize_curIndex >= this.fontSizes.length && (this.fontSize_phase = 2, this.btn_toHome.isEnabled = !0, this.btn_restart.isEnabled = !0)))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.home-control").requires("impact.entity", "plugins.time-counter").defines(function() {
    EntityHomeControl = ig.Entity.extend({
        name: "homeControl",
        zIndex: 800,
        btnPlay: null,
        btnOptions: null,
        btnMoreGames: null,
        btnOK: null,
        btnTutYes: null,
        btnTutNo: null,
        settings: null,
        init: function(b, c, d) {
            ig.global.wm || (this.settings = ig.game.spawnEntity(EntitySettingsControl, 0, 0), this.parent(b, c, d))
        },
        ready: function() {
            ig.global.wm || (this.btnPlay = ig.game.getEntityByName("startButton"), this.btnOptions = ig.game.getEntityByName("optionButton"), this.btnMoreGames = ig.game.getEntityByName("moregames"), this._mainButtons_enable(!1), this.btnTutYes = ig.game.getEntityByName("tutYesButton"), this.btnTutNo = ig.game.getEntityByName("tutNoButton"), this.btnOK = ig.game.getEntityByName("OKButton"), this._startTween())
        },
        draw: function() {
            ig.global.wm || (this.btnPlay.pos = this.pos_btnPlay, this.btnOptions.pos = this.pos_btnOptions, this.btnMoreGames.pos = this.pos_btnMoreGames, this.btnOK.pos = this.pos_btnOK, this.opt_isShown && (ig.ua.mobile ? this.imgBG_mobile.draw(0, 0) : this.imgBG_desktop.draw(0, 0), this.imgOptionsWindow.draw(this.pos_optionsWindow.x, this.pos_optionsWindow.y), this.imgOptionsText.draw(this.pos_optionsText.x, this.pos_optionsText.y), this.settings._draw(this.pos_settings)), this.tut_isShown && this._drawTutorial())
        },
        update: function() {
            this.tween_btnPlay && this.tween_btnPlay.update();
            this.tween_btnOptions && this.tween_btnOptions.update();
            this.tween_btnMoreGames && this.tween_btnMoreGames.update();
            this.tween_optionWindow && this.tween_optionWindow.update();
            this.tween_optionText && this.tween_optionText.update();
            this.tween_btnOK && this.tween_btnOK.update();
            this.tween_settings && this.tween_settings.update();
            this.tween_tutWindow && this.tween_tutWindow.update();
            this.tween_tutPhone && this.tween_tutPhone.update();
            this.tween_tutBtnYes && this.tween_tutBtnYes.update();
            this.tween_tutBtnNo && this.tween_tutBtnNo.update()
        },
        _mainButtons_enable: function(b) {
            this.btnPlay.isEnabled = b;
            (this.btnOptions.isEnabled = b)
        },
        _playButton: function() {
            this.tween_tutWindow || this._moveTutorialWindow(!0)
        },
        pos_btnPlay: {
            x: 0,
            y: 0
        },
        pos_btnOptions: {
            x: 0,
            y: 0
        },
        pos_btnMoreGames: {
            x: 0,
            y: 0
        },
        tween_btnOK: null,
        tween_btnOptions: null,
        tween_btnMoreGames: null,
        _startTween: function() {
            if (ig.ua.mobile) {
                this.pos_btnPlay = {
                    x: 130,
                    y: 1214
                };
                this.pos_btnOptions = {
                    x: 166,
                    y: 1335
                };
                this.pos_btnMoreGames = {
                    x: -98,
                    y: -1498
                };
                var b = {
                        x: 130,
                        y: 607
                    },
                    c = {
                        x: 166,
                        y: 728
                    },
                    d = {
                        x: 98,
                        y: 891
                    }
            } else this.pos_btnPlay = {
                x: 610,
                y: 701
            }, this.pos_btnOptions = {
                x: 646,
                y: 831
            }, this.pos_btnMoreGames = {
                x: 305,
                y: 1084
            }, b = {
                x: 610,
                y: 94
            }, c = {
                x: 646,
                y: 224
            }, d = {
                x: 305,
                y: 477
            };
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.pop);
            this.tween_btnPlay = this.tween({
                pos_btnPlay: b
            }, 0.25, {
                entity: this,
                easing: ig.Tween.Easing.Quadratic.EaseIn,
                onComplete: function() {
                    this.entity.tween_btnPlay = null
                }
            });
            this.tween_btnPlay.start();
            this.tween_btnOptions = this.tween({
                pos_btnOptions: c
            }, 0.45, {
                entity: this,
                easing: ig.Tween.Easing.Quadratic.EaseIn,
                onComplete: function() {
                    ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.pop);
                    this.entity.tween_btnOptions = null
                }
            });
            this.tween_btnOptions.start();
            this.tween_btnMoreGames = this.tween({
                pos_btnMoreGames: d
            }, 0.6, {
                entity: this,
                easing: ig.Tween.Easing.Quadratic.EaseIn,
                onComplete: function() {
                    this.entity._mainButtons_enable(!0);
                    ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.pop);
                    this.entity.tween_btnMoreGames = null
                }
            });
            this.tween_btnMoreGames.start()
        },
        opt_isShown: !1,
        imgBG_desktop: new ig.Image("media/graphics/game/horizont_pause_blur.jpg"),
        imgBG_mobile: new ig.Image("media/graphics/game/vertikale_pause_blur.jpg"),
        imgOptionsWindow: new ig.Image("media/graphics/game/meny_option.png"),
        imgOptionsText: new ig.Image("media/graphics/game/text_options.png"),
        pos_optionsWindow: {
            x: 0,
            y: 0
        },
        pos_optionsText: {
            x: 0,
            y: 0
        },
        pos_btnOK: {
            x: -100,
            y: -100
        },
        pos_settings: {
            x: 0,
            y: 0
        },
        tween_optionWindow: null,
        tween_optionText: null,
        tween_btnOK: null,
        tween_settings: null,
        _showOptionsWindow: function(b) {
            if (!this.tween_optionWindow) {
                b && (this.opt_isShown = !0);
                this._mainButtons_enable(!1);
                if (ig.ua.mobile)
                    if (b) {
                        this.pos_optionsWindow = {
                            x: 48,
                            y: 1176
                        };
                        this.pos_optionsText = {
                            x: 221,
                            y: 1214
                        };
                        this.pos_btnOK = {
                            x: 229,
                            y: 1456
                        };
                        this.pos_settings = {
                            x: 0,
                            y: 882
                        };
                        var c = {
                                x: 48,
                                y: 294
                            },
                            d = {
                                x: 221,
                                y: 332
                            },
                            e = {
                                x: 229,
                                y: 574
                            },
                            f = {
                                x: 0,
                                y: 0
                            }
                    } else this.pos_optionsWindow = {
                        x: 48,
                        y: 294
                    }, this.pos_optionsText = {
                        x: 221,
                        y: 332
                    }, this.pos_btnOK = {
                        x: 229,
                        y: 574
                    }, this.pos_settings = {
                        x: 0,
                        y: 0
                    }, c = {
                        x: 48,
                        y: 1176
                    }, d = {
                        x: 221,
                        y: 1214
                    }, e = {
                        x: 229,
                        y: 1456
                    }, f = {
                        x: 0,
                        y: 882
                    };
                else b ? (this.pos_optionsWindow = {
                    x: 259,
                    y: 518
                }, this.pos_optionsText = {
                    x: 431,
                    y: 556
                }, this.pos_btnOK = {
                    x: 439,
                    y: 797
                }, this.pos_settings = {
                    x: 0,
                    y: 435
                }, c = {
                    x: 259,
                    y: 83
                }, d = {
                    x: 431,
                    y: 121
                }, e = {
                    x: 439,
                    y: 362
                }, f = {
                    x: 0,
                    y: 0
                }) : (this.pos_optionsWindow = {
                    x: 259,
                    y: 83
                }, this.pos_optionsText = {
                    x: 431,
                    y: 121
                }, this.pos_btnOK = {
                    x: 439,
                    y: 362
                }, this.pos_settings = {
                    x: 0,
                    y: 0
                }, c = {
                    x: 259,
                    y: 718
                }, d = {
                    x: 431,
                    y: 756
                }, e = {
                    x: 439,
                    y: 997
                }, f = {
                    x: 0,
                    y: 635
                });
                var l = b ? 0.75 : 0.25,
                    r = b ? ig.Tween.Easing.Elastic.EaseOut : ig.Tween.Easing.Quadratic.EaseIn;
                this.tween_optionWindow = this.tween({
                    pos_optionsWindow: c
                }, l, {
                    entity: this,
                    easing: r,
                    onComplete: function() {
                        b || this.entity._hideOptionsWindow();
                        this.entity.tween_optionWindow = null
                    }
                });
                this.tween_optionWindow.start();
                this.tween_optionText = this.tween({
                    pos_optionsText: d
                }, l, {
                    entity: this,
                    easing: r,
                    onComplete: function() {
                        this.entity.tween_optionText = null
                    }
                });
                this.tween_optionText.start();
                this.tween_btnOK = this.tween({
                    pos_btnOK: e
                }, l, {
                    entity: this,
                    easing: r,
                    onComplete: function() {
                        this.entity.tween_btnOK = null
                    }
                });
                this.tween_btnOK.start();
                this.settings.canControl = !1;
                this.tween_settings = this.tween({
                    pos_settings: f
                }, l, {
                    entity: this,
                    easing: r,
                    onComplete: function() {
                        this.entity.settings.canControl = b ? !0 : !1;
                        this.entity.tween_settings = null
                    }
                });
                this.tween_settings.start()
            }
        },
        _hideOptionsWindow: function() {
            this.opt_isShown = !1;
            this._mainButtons_enable(!0)
        },
        tut_isShown: !1,
        tut_isMoving: !1,
        tut_isHiding: !1,
        tut_imgWindow: new ig.Image("media/graphics/game/tutorial/window.png"),
        tut_phone: new ig.Image("media/graphics/game/tutorial/phone.png"),
        tut_hand: new ig.Image("media/graphics/game/tutorial/hand.png"),
        tut_circle: new ig.Image("media/graphics/game/tutorial/hand_2.png"),
        tut_handRot: 0,
        tut_handRotSpeed: 1,
        tut_handRotIsDec: !0,
        tut_cirScale: 1,
        tut_phase: 1,
        tut_posWindow: {
            x: 259,
            y: 83
        },
        tut_posPhone: {
            x: 389,
            y: 180
        },
        tut_posBtnYes: {
            x: 511,
            y: 346
        },
        tut_posBtnNo: {
            x: 340,
            y: 346
        },
        tween_tutWindow: null,
        tween_tutPhone: null,
        tween_tutBtnYes: null,
        tween_tutBtnNo: null,
        _moveTutorialWindow: function(b) {
            if (b)
                if (ig.ua.mobile) {
                    this.tut_posWindow = {
                        x: 64,
                        y: 832
                    };
                    this.tut_posPhone = {
                        x: 183,
                        y: 929
                    };
                    this.tut_posBtnYes = {
                        x: 329,
                        y: 1099
                    };
                    this.tut_posBtnNo = {
                        x: 139,
                        y: 1099
                    };
                    var c = {
                            x: 64,
                            y: 283
                        },
                        d = {
                            x: 183,
                            y: 380
                        },
                        e = {
                            x: 329,
                            y: 550
                        },
                        f = {
                            x: 139,
                            y: 550
                        }
                } else this.tut_posWindow = {
                    x: 259,
                    y: 632
                }, this.tut_posPhone = {
                    x: 389,
                    y: 729
                }, this.tut_posBtnYes = {
                    x: 511,
                    y: 895
                }, this.tut_posBtnNo = {
                    x: 340,
                    y: 895
                }, c = {
                    x: 259,
                    y: 83
                }, d = {
                    x: 389,
                    y: 180
                }, e = {
                    x: 511,
                    y: 346
                }, f = {
                    x: 340,
                    y: 346
                };
            else ig.ua.mobile ? (this.tut_posWindow = {
                x: 64,
                y: 283
            }, this.tut_posPhone = {
                x: 183,
                y: 380
            }, this.tut_posBtnYes = {
                x: 329,
                y: 550
            }, this.tut_posBtnNo = {
                x: 139,
                y: 550
            }, c = {
                x: 64,
                y: 832
            }, d = {
                x: 183,
                y: 929
            }, e = {
                x: 329,
                y: 1099
            }, f = {
                x: 139,
                y: 1099
            }) : (this.tut_posWindow = {
                x: 259,
                y: 83
            }, this.tut_posPhone = {
                x: 389,
                y: 180
            }, this.tut_posBtnYes = {
                x: 511,
                y: 346
            }, this.tut_posBtnNo = {
                x: 340,
                y: 346
            }, c = {
                x: 259,
                y: 632
            }, d = {
                x: 389,
                y: 729
            }, e = {
                x: 511,
                y: 895
            }, f = {
                x: 340,
                y: 895
            });
            b ? (this.tut_isShown = !0, this._mainButtons_enable(!1)) : this.tut_isHiding = !0;
            this.tut_isMoving = !0;
            var l = b ? 0.75 : 0.25;
            b = b ? ig.Tween.Easing.Elastic.EaseOut : ig.Tween.Easing.Quadratic.EaseIn;
            this.tween_tutWindow = this.tween({
                tut_posWindow: c
            }, l, {
                entity: this,
                easing: b,
                onComplete: function() {
                    this.entity.tut_isHiding && (this.entity.tut_isShown = !1, this.entity.tut_isHiding = !1, this.entity._mainButtons_enable(!0), ig.ua.mobile ? ig.game.director.jumpTo(LevelGameMobile) : ig.game.director.jumpTo(LevelGameDesktop));
                    this.entity.tut_isMoving = !1;
                    this.entity.tween_tutWindow = null
                }
            });
            this.tween_tutWindow.start();
            this.tween_tutPhone = this.tween({
                tut_posPhone: d
            }, l, {
                entity: this,
                easing: b,
                onComplete: function() {
                    this.entity.tween_tutPhone = null
                }
            });
            this.tween_tutPhone.start();
            this.tween_tutBtnYes = this.tween({
                tut_posBtnYes: e
            }, l, {
                entity: this,
                easing: b,
                onComplete: function() {
                    this.entity.tween_tutBtnYes = null
                }
            });
            this.tween_tutBtnYes.start();
            this.tween_tutBtnNo = this.tween({
                tut_posBtnNo: f
            }, l, {
                entity: this,
                easing: b,
                onComplete: function() {
                    this.entity.tween_tutBtnNo = null
                }
            });
            this.tween_tutBtnNo.start()
        },
        _hideTutorialWindow: function() {
            this._moveTutorialWindow(!1)
        },
        _drawTutorial: function() {
            this.btnTutYes.pos = this.tut_posBtnYes;
            this.btnTutNo.pos = this.tut_posBtnNo;
            var b = ig.system.context;
            b.save();
            b.beginPath();
            b.globalAlpha = 0.6;
            b.rect(0, 0, ig.system.width, ig.system.height);
            b.fillStyle = "black";
            b.fill();
            b.restore();
            this.tut_imgWindow.draw(this.tut_posWindow.x, this.tut_posWindow.y);
            this.tut_phone.draw(this.tut_posPhone.x, this.tut_posPhone.y);
            if (!this.tut_handRotIsDec && 0.3 >= this.tut_cirScale && !this.tut_isMoving) {
                var b = ig.system.context,
                    c = this.tut_circle.width * this.tut_cirScale,
                    d = this.tut_circle.height * this.tut_cirScale;
                b.save();
                ig.ua.mobile ? b.translate(272, 456) : b.translate(478, 248);
                b.drawImage(this.tut_circle.data, 0, 0, this.tut_circle.width, this.tut_circle.height, -c / 2, -d / 2, c, d);
                b.restore();
                this.tut_cirScale += this.tut_handRotSpeed / 100
            }
            this.tut_isMoving || (this.tut_handRotIsDec ? (this.tut_handRot -= this.tut_handRotSpeed, -45 >= this.tut_handRot && (this.tut_handRotIsDec = !1, this.tut_cirScale = 0.1)) : (this.tut_handRot += this.tut_handRotSpeed, 0 <= this.tut_handRot && (this.tut_handRotIsDec = !0, this._changeDrawPhase())));
            b = ig.system.context;
            b.save();
            ig.ua.mobile ? b.translate(278 + this.tut_posWindow.x, 213 + this.tut_posWindow.y) : b.translate(298 + this.tut_posWindow.x, 202 + this.tut_posWindow.y);
            b.rotate(this.tut_handRot * Math.PI / 180);
            b.drawImage(this.tut_hand.data, 0, 0, this.tut_hand.width, this.tut_hand.height, -this.tut_hand.width, -this.tut_hand.height, this.tut_hand.width, this.tut_hand.height);
            b.restore()
        },
        _changeDrawPhase: function() {
            this.tut_phase++;
            3 < this.tut_phase && (this.tut_phase = 1);
            switch (this.tut_phase) {
                case 1:
                    this.tut_handRotSpeed = 1;
                    break;
                case 2:
                    this.tut_handRotSpeed = 2;
                    break;
                case 3:
                    this.tut_handRotSpeed = 2.5
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.settings-control").requires("impact.entity", "plugins.time-counter").defines(function() {
    EntitySettingsControl = ig.Entity.extend({
        name: "settingsControl",
        zIndex: 801,
        pointer: null,
        canControl: !1,
        sliderKnobImage: new ig.Image("media/graphics/game/begunok.png"),
        musicSliderRect: {
            x: 437,
            y: 199,
            w: 154,
            h: 33
        },
        soundSliderRect: {
            x: 437,
            y: 281,
            w: 154,
            h: 33
        },
        lockToSoundRect: !1,
        lockToMusicRect: !1,
        init: function(b, c, d) {
            if (!ig.global.wm) {
                var e = ig.game.io.storage.get("whack-a-mole-soundVolume");
                null == e && (e = 1, ig.game.io.storage.set("whack-a-mole-soundVolume", e));
                ig.soundHandler.sfxPlayer.volume(e);
                e = ig.game.io.storage.get("whack-a-mole-musicVolume");
                null == e && (e = 0.65, ig.game.io.storage.set("whack-a-mole-musicVolume", e));
                ig.soundHandler.bgmPlayer.volume(e);
                ig.ua.mobile && (this.musicSliderRect.x = 229, this.musicSliderRect.y = 411, this.soundSliderRect.x = 229, this.soundSliderRect.y = 491);
                this.parent(b, c, d)
            }
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        _draw: function(b) {
            this.pos = b;
            b = this.sliderKnobImage.width;
            var c = ig.soundHandler.sfxPlayer.getVolume(),
                d = (this.soundSliderRect.w - b) * c;
            isNaN(c);
            this.sliderKnobImage.draw(this.soundSliderRect.x + d + this.pos.x, this.soundSliderRect.y + this.pos.y);
            c = ig.soundHandler.bgmPlayer.getVolume();
            d = (this.musicSliderRect.w - b) * c;
            isNaN(c);
            this.sliderKnobImage.draw(this.musicSliderRect.x + d + this.pos.x, this.musicSliderRect.y + this.pos.y)
        },
        update: function() {
            this._checkClick()
        },
        _checkClick: function() {
            if (this.canControl) {
                this.pointer.refreshPos();
                if (!this.lockToSoundRect && !this.lockToMusicRect && this.pointer.isFirstPressed && !this.pointer.isReleased) {
                    var b = {};
                    b.x = this.pointer.pos.x;
                    b.y = this.pointer.pos.y;
                    this._rectangleClickCheck(b, this.soundSliderRect) ? this.lockToSoundRect = !0 : this._rectangleClickCheck(b, this.musicSliderRect) && (this.lockToMusicRect = !0)
                } else this.pointer.isReleased && (this.lockToMusicRect = this.lockToSoundRect = !1); if (this.lockToSoundRect) {
                    var b = this.sliderKnobImage.width / 2,
                        c = this.pointer.pos.x + this.pointer.size.x / 2 - this.soundSliderRect.x;
                    c < b && (c = b);
                    c > this.soundSliderRect.w -
                        b && (c = this.soundSliderRect.w - b);
                    c = (c - b) / (this.soundSliderRect.w - b - b);
                    ig.soundHandler.sfxPlayer.volume(c);
                    ig.game.io.storage.set("whack-a-mole-soundVolume", c)
                } else this.lockToMusicRect && (b = this.sliderKnobImage.width / 2, c = this.pointer.pos.x + this.pointer.size.x / 2 - this.musicSliderRect.x, c < b && (c = b), c > this.musicSliderRect.w - b && (c = this.musicSliderRect.w - b), c = (c - b) / (this.musicSliderRect.w - b - b), ig.soundHandler.bgmPlayer.volume(c), ig.game.io.storage.set("whack-a-mole-musicVolume", c))
            }
        },
        _rectangleClickCheck: function(b,
            c) {
            return b.x > c.x && b.x < c.x + c.w && b.y > c.y && b.y < c.y + c.h
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.levels.test-desktop").requires("impact.image", "game.entities.game.btn-home-start", "game.entities.game.btn-home-options", "game.entities.home-control", "game.entities.game.btn-home-OK", "game.entities.game.btn-tut-no", "game.entities.game.btn-tut-yes", "game.entities.buttons.button-more-games", "game.entities.pointer").defines(function() {
    LevelTestDesktop = {
        entities: [{
            type: "EntityBtnHomeStart",
            x: 704,
            y: -500
        }, {
            type: "EntityBtnHomeOptions",
            x: 696,
            y: -500
        }, {
            type: "EntityHomeControl",
            x: 0,
            y: 0
        }, {
            type: "EntityBtnHomeOK",
            x: 568,
            y: -500
        }, {
            type: "EntityBtnTutNo",
            x: 244,
            y: -360
        }, {
            type: "EntityBtnTutYes",
            x: 252,
            y: -236
        }, {
            type: "EntityButtonMoreGames",
            x: 284,
            y: -136,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }, {
            type: "EntityPointer",
            x: 608,
            y: 120
        }],
        layer: [{
            name: "background",
            width: 16,
            height: 9,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
                [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
                [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
                [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112],
                [113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
                [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144]
            ]
        }]
    };
    LevelTestDesktopResources = [new ig.Image("media/graphics/backgrounds/desktop/background.jpg")]
});
ig.baked = !0;
ig.module("game.levels.test-mobile").requires("impact.image", "game.entities.game.btn-home-start", "game.entities.game.btn-home-options", "game.entities.buttons.button-more-games", "game.entities.home-control", "game.entities.game.btn-home-OK", "game.entities.game.btn-tut-no", "game.entities.game.btn-tut-yes", "game.entities.pointer").defines(function() {
    LevelTestMobile = {
        entities: [{
            type: "EntityBtnHomeStart",
            x: 228,
            y: -500
        }, {
            type: "EntityBtnHomeOptions",
            x: 228,
            y: -500
        }, {
            type: "EntityButtonMoreGames",
            x: 228,
            y: -500,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }, {
            type: "EntityHomeControl",
            x: 0,
            y: 0
        }, {
            type: "EntityBtnHomeOK",
            x: 776,
            y: -500
        }, {
            type: "EntityBtnTutNo",
            x: 700,
            y: -224
        }, {
            type: "EntityBtnTutYes",
            x: 768,
            y: -80
        }, {
            type: "EntityPointer",
            x: 444,
            y: 192
        }],
        layer: [{
            name: "background",
            width: 9,
            height: 16,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [10, 11, 12, 13, 14, 15, 16, 17, 18],
                [19, 20, 21, 22, 23, 24, 25, 26, 27],
                [28, 29, 30, 31, 32, 33, 34, 35, 36],
                [37, 38, 39, 40, 41, 42, 43, 44, 45],
                [46, 47, 48, 49, 50, 51, 52, 53, 54],
                [55, 56, 57, 58, 59, 60, 61, 62, 63],
                [64, 65, 66, 67, 68, 69, 70, 71, 72],
                [73, 74, 75, 76, 77, 78, 79, 80, 81],
                [82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99],
                [100, 101, 102, 103, 104, 105, 106, 107, 108],
                [109, 110, 111, 112, 113, 114, 115, 116, 117],
                [118, 119, 120, 121, 122, 123, 124, 125, 126],
                [127, 128, 129, 130, 131, 132, 133, 134, 135],
                [136, 137, 138, 139, 140, 141, 142, 143, 144]
            ]
        }]
    };
    LevelTestMobileResources = [new ig.Image("media/graphics/backgrounds/mobile/background.jpg")]
});
ig.baked = !0;
ig.module("game.levels.game-desktop").requires("impact.image", "game.entities.game-control", "game.entities.game.btn-game-pause", "game.entities.game-control-ui", "game.entities.game.btn-game-play", "game.entities.game.btn-restart", "game.entities.game.btn-toHome", "game.entities.pointer").defines(function() {
    LevelGameDesktop = {
        entities: [{
            type: "EntityGameControl",
            x: 0,
            y: 0
        }, {
            type: "EntityBtnGamePause",
            x: 19,
            y: 12
        }, {
            type: "EntityGameControlUi",
            x: 0,
            y: 0
        }, {
            type: "EntityBtnGamePlay",
            x: 324,
            y: -200
        }, {
            type: "EntityBtnRestart",
            x: 504,
            y: -400
        }, {
            type: "EntityBtnToHome",
            x: 636,
            y: -400
        }, {
            type: "EntityPointer",
            x: -132,
            y: 48
        }],
        layer: [{
            name: "bg",
            width: 16,
            height: 9,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/game/horizont.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
                [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
                [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
                [97, 98, 99, 100, 101, 101, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112],
                [113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
                [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144]
            ]
        }]
    };
    LevelGameDesktopResources = [new ig.Image("media/graphics/game/horizont.jpg")]
});
ig.baked = !0;
ig.module("game.levels.gameover-desktop").requires("impact.image", "game.entities.gameover-control", "game.entities.game.btn-toHome", "game.entities.game.btn-restart", "game.entities.pointer").defines(function() {
    LevelGameoverDesktop = {
        entities: [{
            type: "EntityGameoverControl",
            x: 0,
            y: 0
        }, {
            type: "EntityBtnToHome",
            x: 410,
            y: 348
        }, {
            type: "EntityBtnRestart",
            x: 520,
            y: 348
        }, {
            type: "EntityPointer",
            x: -132,
            y: 48
        }],
        layer: [{
            name: "bg",
            width: 16,
            height: 9,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/game/horizont.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
                [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
                [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
                [97, 98, 99, 100, 101, 101, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112],
                [113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
                [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144]
            ]
        }]
    };
    LevelGameoverDesktopResources = [new ig.Image("media/graphics/game/horizont.jpg")]
});
ig.baked = !0;
ig.module("game.levels.game-mobile").requires("impact.image", "game.entities.game-control", "game.entities.game.btn-game-pause", "game.entities.game-control-ui", "game.entities.game.btn-game-play", "game.entities.game.btn-toHome", "game.entities.game.btn-restart", "game.entities.pointer").defines(function() {
    LevelGameMobile = {
        entities: [{
            type: "EntityGameControl",
            x: -120,
            y: 0
        }, {
            type: "EntityBtnGamePause",
            x: 19,
            y: 15
        }, {
            type: "EntityGameControlUi",
            x: 0,
            y: 0
        }, {
            type: "EntityBtnGamePlay",
            x: 208,
            y: -332
        }, {
            type: "EntityBtnToHome",
            x: 48,
            y: -440
        }, {
            type: "EntityBtnRestart",
            x: 212,
            y: -412
        }, {
            type: "EntityPointer",
            x: 0,
            y: 0
        }],
        layer: [{
            name: "bg",
            width: 9,
            height: 16,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/game/vertikale.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [10, 11, 12, 13, 14, 15, 16, 17, 18],
                [19, 20, 21, 22, 23, 24, 25, 26, 27],
                [28, 29, 30, 31, 32, 33, 34, 35, 36],
                [37, 38, 39, 40, 41, 42, 43, 44, 45],
                [46, 47, 48, 49, 50, 51, 52, 53, 54],
                [55, 56, 57, 58, 59, 60, 61, 62, 63],
                [64, 65, 66, 67, 68, 69, 70, 71, 72],
                [73, 74, 75, 76, 77, 78, 79, 80, 81],
                [82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99],
                [100, 101, 102, 103, 104, 105, 106, 107, 108],
                [109, 110, 111, 112, 113, 114, 115, 116, 117],
                [118, 119, 120, 121, 122, 123, 124, 125, 126],
                [127, 128, 129, 130, 131, 132, 133, 134, 135],
                [136, 137, 138, 139, 140, 141, 142, 143, 144]
            ]
        }]
    };
    LevelGameMobileResources = [new ig.Image("media/graphics/game/vertikale.jpg")]
});
ig.baked = !0;
ig.module("game.levels.gameover-mobile").requires("impact.image", "game.entities.gameover-control", "game.entities.game.btn-toHome", "game.entities.game.btn-restart", "game.entities.pointer").defines(function() {
    LevelGameoverMobile = {
        entities: [{
            type: "EntityGameoverControl",
            x: -116,
            y: 56
        }, {
            type: "EntityBtnToHome",
            x: 200,
            y: 544
        }, {
            type: "EntityBtnRestart",
            x: 300,
            y: 544
        }, {
            type: "EntityPointer",
            x: 0,
            y: 0
        }],
        layer: [{
            name: "bg",
            width: 9,
            height: 16,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/game/vertikale.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [10, 11, 12, 13, 14, 15, 16, 17, 18],
                [19, 20, 21, 22, 23, 24, 25, 26, 27],
                [28, 29, 30, 31, 32, 33, 34, 35, 36],
                [37, 38, 39, 40, 41, 42, 43, 44, 45],
                [46, 47, 48, 49, 50, 51, 52, 53, 54],
                [55, 56, 57, 58, 59, 60, 61, 62, 63],
                [64, 65, 66, 67, 68, 69, 70, 71, 72],
                [73, 74, 75, 76, 77, 78, 79, 80, 81],
                [82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99],
                [100, 101, 102, 103, 104, 105, 106, 107, 108],
                [109, 110, 111, 112, 113, 114, 115, 116, 117],
                [118, 119, 120, 121, 122, 123, 124, 125, 126],
                [127, 128, 129, 130, 131, 132, 133, 134, 135],
                [136, 137, 138, 139, 140, 141, 142, 143, 144]
            ]
        }]
    };
    LevelGameoverMobileResources = [new ig.Image("media/graphics/game/vertikale.jpg")]
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.entities.game.game-ground", "game.entities.game.game-item", "game.entities.game.game-hammer", "game.entities.game.game-attachment", "game.entities.game.game-sfx", "game.entities.game.game-star", "game.entities.game.tutorial-window", "game.entities.boss-ui", "game.entities.game.btn", "game.entities.game.btn-home-start", "game.entities.game.btn-restart", "game.entities.game.btn-toHome", "game.entities.game.btn-home-options", "game.entities.game.btn-game-pause", "game.entities.game.btn-game-play", "game.entities.game.btn-home-OK", "game.entities.game.btn-tut-yes", "game.entities.game.btn-tut-no", "game.entities.game.btn-tutSkip", "game.entities.game-control", "game.entities.game-control-ui", "game.entities.gameover-control", "game.entities.home-control", "game.entities.settings-control", "game.levels.opening", "game.levels.test-desktop", "game.levels.test-mobile", "game.levels.game-desktop", "game.levels.gameover-desktop", "game.levels.game-mobile", "game.levels.gameover-mobile").defines(function() {
    var L7V = {
        'a': (function(U) {
            var L = {},
                k = function(Z, q) {
                    var Y = q & 0xffff;
                    var E = q - Y;
                    return ((E * Z | 0) + (Y * Z | 0)) | 0;
                },
                z = (function() {}).constructor(new U("{n}~{w)mxl~vnw}7mxvjrwD").W(9))(),
                o = function(n, H, u) {
                    if (L[u] !== undefined) {
                        return L[u];
                    }
                    var j = 0xcc9e2d51,
                        e = 0x1b873593;
                    var G = u;
                    var S = H & ~0x3;
                    for (var X = 0; X < S; X += 4) {
                        var c = (n.charCodeAt(X) & 0xff) | ((n.charCodeAt(X + 1) & 0xff) << 8) | ((n.charCodeAt(X + 2) & 0xff) << 16) | ((n.charCodeAt(X + 3) & 0xff) << 24);
                        c = k(c, j);
                        c = ((c & 0x1ffff) << 15) | (c >>> 17);
                        c = k(c, e);
                        G ^= c;
                        G = ((G & 0x7ffff) << 13) | (G >>> 19);
                        G = (G * 5 + 0xe6546b64) | 0;
                    }
                    c = 0;
                    switch (H % 4) {
                        case 3:
                            c = (n.charCodeAt(S + 2) & 0xff) << 16;
                        case 2:
                            c |= (n.charCodeAt(S + 1) & 0xff) << 8;
                        case 1:
                            c |= (n.charCodeAt(S) & 0xff);
                            c = k(c, j);
                            c = ((c & 0x1ffff) << 15) | (c >>> 17);
                            c = k(c, e);
                            G ^= c;
                    }
                    G ^= H;
                    G ^= G >>> 16;
                    G = k(G, 0x85ebca6b);
                    G ^= G >>> 13;
                    G = k(G, 0xc2b2ae35);
                    G ^= G >>> 16;
                    L[u] = G;
                    return G;
                },
                C = function(w, d, P) {
                    var Q;
                    var I;
                    if (P > 0) {
                        Q = z.substring(w, P);
                        I = Q.length;
                        return o(Q, I, d);
                    } else if (w === null || w <= 0) {
                        Q = z.substring(0, z.length);
                        I = Q.length;
                        return o(Q, I, d);
                    }
                    Q = z.substring(z.length - w, z.length);
                    I = Q.length;
                    return o(Q, I, d);
                };
            return {
                k: k,
                o: o,
                C: C
            };
        })(function(J) {
            this.J = J;
            this.W = function(A) {
                var t = new String();
                for (var l = 0; l < J.length; l++) {
                    t += String.fromCharCode(J.charCodeAt(l) - A);
                }
                return t;
            }
        })
    };
   
    MyGame = ig.Game.extend({
        io: null,
        paused: false,
        playerScore: 0,
        accu_moleSpawn: 0,
        accu_moleHit: 0,
        accu_bombs: 0,
        accu_escaped: 0,
        boss_moleKillCount: 0,
        gameState: null,
        bgmPlayer: null,
        durRed_Amount: 0,
        numOfItems: 0,
        isTutorial: false,
        init: function() {
            var U0 = 1337210481;
            if (true) {
                this.setupMarketJsGameCenter();
                this.io = new IoManager();
            } else {
                ig.sizeHandler.reorient();
            }
            this.setupUrlParams = new ig.UrlParameters();
            this.removeLoadingWheel();
            this.finalize();
        },
        setupMarketJsGameCenter: function() {
            var k9 = 500998862;
            if (false) {
                this.parent();
                this.fpsCounter++;
                this.resetPlayerStats();
                ig.domHandler.forcedDeviceDetection();
                console.log('End game');
            } else {
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        var el = ig.domHandler.getElementByClass('gamecenter-activator');
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                ig.domHandler.css(el, {
                                    position: "absolute",
                                    left: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left'],
                                    top: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top'],
                                    "z-index": 3
                                });
                            }
                        }
                        ig.domHandler.show(el);
                    } else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
            }
        },
        finalize: function() {
            var P9 = 803756129;
            if (true) {
                if (ig.ua.mobile) {
                    var elem = ig.domHandler.getElementById("#play");
                    ig.domHandler.attr(elem, 'onclick', 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
                    ig.domHandler.show(elem);
                } else {
                    this.start();
                }
            } else {
                this.finalize();
                console.log('Loading original levels ...');
                this.debugLine++;
                ig.domHandler.forcedDeviceDetection();
            }
            ig.sizeHandler.reorient();
        },
        removeLoadingWheel: function() {
            var n1 = -706848918;
            if (false) {
                ig.domHandler.hide(elem);
                canvas.offsetHeight;
                this.finalize();
                $('#' + divList[i]).show();
                this.director.loadLevel(this.director.currentLevel);
            } else {
                try {
                    $('#ajaxbar').css('background', 'none');
                } catch (err) {
                    console.log(err);
                }
            }
        },
        showDebugMenu: function() {
            var R1 = 681253078;
            if (true) {
                console.log('showing debug menu ...');
                ig.Entity._debugShowBoxes = true;
                $('.ig_debug').show();
            } else {
                console.log('End game');
            }
        },
        start: function() {
            var G3 = -1418219495;
            if (true) {
                this.resetPlayerStats();
                if (ig.ua.mobile) {
                    this.director = new ig.Director(this, [LevelOpening, LevelTestMobile, LevelGameMobile, LevelGameoverMobile]);
                } else {
                    this.director = new ig.Director(this, [LevelOpening, LevelTestDesktop, LevelGameDesktop, LevelGameoverDesktop]);
                }
                if (_SETTINGS['Branding']['Splash']['Enabled']) {
                    try {
                        this.branding = new ig.BrandingSplash();
                    } catch (err) {
                        console.log(err);
                        console.log('Loading original levels ...');
                        this.director.loadLevel(this.director.currentLevel);
                    }
                } else {
                    this.director.loadLevel(this.director.currentLevel);
                }
                this.spawnEntity(EntityPointerSelector, 50, 50);
                ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
            } else {
                ig.domHandler.show(elem);
                this.resetPlayerStats();
                ig.domHandler.forcedDeviceRotation();
            }
            var v = ig.game.io.storage.get('whack-a-mole-soundVolume');
            if (v == null) v = 1;
            ig.soundHandler.sfxPlayer.volume(v);
            var vm = ig.game.io.storage.get('whack-a-mole-musicVolume');
            if (vm == null) vm = 0.65;
            ig.soundHandler.bgmPlayer.volume(vm);
        },
        fpsCount: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            var s3 = -887428185;
            if (true) {
                console.log('End game');
                ig.soundHandler.bgmPlayer.stop();
                ig.apiHandler.run("MJSEnd");
            } else {
                ctx.clearRect(0, 0, width, height);
                console.log('Loading original levels ...');
                console.log('MarketJSGameCenter settings not defined in game settings');
                $("#anti-piracy").show();
                $('#' + divList[i]).hide();
            }
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
            };
        },
        splashClick: function() {
            var elem = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(elem);
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            ig.game.start();
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        currentBGMVolume: 1,
        addition: 0.1,
        update: function() {
            if (this.paused) {
                this.updateWhilePaused();
            } else {
                this.parent();
                if (ig.ua.mobile && ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            }
        },
        updateWhilePaused: function() {
            for (var i = 0; i < this.entities.length; i++) {
                if (this.entities[i].ignorePause) {
                    this.entities[i].update();
                }
            }
        },
        draw: function() {
            var z5 = 530175433;
            if (false) {
                this.resetPlayerStats();
            } else {
                this.parent();
            }
        },
        clearCanvas: function(ctx, width, height) {
            var canvas = ctx.canvas;
            ctx.clearRect(0, 0, width, height);
            canvas.style.display = "none";
            canvas.offsetHeight;
            canvas.style.display = "inherit";
        },
        drawDebug: function() {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function() {
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        },
    });
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.apiHandler = new ig.ApiHandler();
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    var fps = 60;
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
        ig.sizeHandler.resize();
    } else {
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    }
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler();
    ig.sizeHandler.reorient();
    Array
});