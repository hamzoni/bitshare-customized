(window.webpackJsonp = window.webpackJsonp || []).push([
    [13],
    {
        1831: function(e, t, n) {
            var a = n(29),
                r = n(1832),
                o = {},
                s = {},
                c = {};
            function i(e, t, n, a) {
                o[e] || (o[e] = []),
                    s[e] || (s[e] = []),
                    o[e].push(t),
                    s[e].push([n, t, new Date(a)]),
                    c[e] || (c[e] = {}),
                    c[e][n] || (c[e][n] = {deposit: [], withdrawal: []}),
                    c[e][n][t > 0 ? "deposit" : "withdrawal"].push(t);
            }
            function u(e, t, n, a, o, s, c, u, l) {
                return (
                    n || (n = {amount: "", currency: ""}),
                    a || (a = {amount: "", currency: ""}),
                    o || (o = {amount: "", currency: ""}),
                    n.amount && i(n.currency, n.amount, c, s),
                    a.amount && i(a.currency, -a.amount, c, s),
                    o.amount && i(o.currency, -o.amount, c, s),
                    e.push([
                        t,
                        r.printAmount(n),
                        n.currency,
                        r.printAmount(a),
                        a.currency,
                        r.printAmount(o),
                        o.currency,
                        "BTS-DEX",
                        l || "",
                        u || "",
                        s
                    ]),
                    e
                );
            }
            e.exports = {
                parseData: function(e, t, n) {
                    var a = [];
                    a.push([
                        "Type",
                        "Buy Amount",
                        "Buy Currency",
                        "Sell Amount",
                        "Sell Currency",
                        "Fee Amount",
                        "Fee Currency",
                        "Exchange",
                        "Trade Group",
                        "Comment",
                        "Date"
                    ]);
                    var o = {};
                    function s(e) {
                        o[e] || (o[e] = 0), o[e]++;
                    }
                    var c = Object.keys(e),
                        i = Array.isArray(c),
                        l = 0;
                    for (c = i ? c : c[Symbol.iterator](); ; ) {
                        var m;
                        if (i) {
                            if (l >= c.length) break;
                            m = c[l++];
                        } else {
                            if ((l = c.next()).done) break;
                            m = l.value;
                        }
                        var f = e[m],
                            p = f.timestamp,
                            d = f.type,
                            h = f.data,
                            _ = null;
                        switch (d) {
                            case "vesting_balance_withdraw":
                                var b = r.parseCurrency(h.amount);
                                (_ = r.parseCurrency(h.fee)),
                                    (a = u(
                                        a,
                                        "1.2.30665" === h.owner &&
                                        b.amount > 1e4
                                            ? "Income"
                                            : "Deposit",
                                        b,
                                        null,
                                        _,
                                        p,
                                        d,
                                        n + " : Vesting balance withdraw"
                                    )),
                                    s(d);
                                break;
                            case "balance_claim":
                                (a = u(
                                    a,
                                    "Deposit",
                                    r.parseCurrency(h.total_claimed),
                                    null,
                                    null,
                                    p,
                                    d,
                                    n + " : Balance claim"
                                )),
                                    s(d);
                                break;
                            case "transfer":
                                var g = r.parseCurrency(h.amount);
                                (_ = r.parseCurrency(h.fee)),
                                    (a =
                                        h.to == t
                                            ? u(
                                                  a,
                                                  "1.2.391938" === h.to &&
                                                  "1.2.381086" === h.from
                                                      ? "Income"
                                                      : "Deposit",
                                                  g,
                                                  null,
                                                  null,
                                                  p,
                                                  d,
                                                  n + " : From " + h.from
                                              )
                                            : u(
                                                  a,
                                                  "Withdrawal",
                                                  null,
                                                  g,
                                                  _,
                                                  p,
                                                  d,
                                                  n + ": To " + h.to
                                              )),
                                    s(d);
                                break;
                            case "fill_order":
                                var y = r.parseCurrency(h.pays),
                                    v = r.parseCurrency(h.receives);
                                "BTS" !==
                                    (_ = r.parseCurrency(h.fee)).currency &&
                                    (v.currency === _.currency
                                        ? ((v.amount -= _.amount),
                                          (_.amount = 0))
                                        : y.currency === _.currency &&
                                          ((y.amount -= _.amount),
                                          (_.amount = 0))),
                                    (a = u(a, "Trade", v, y, _, p, d)),
                                    s(d);
                                break;
                            case "asset_issue":
                                var k = r.parseCurrency(h.asset_to_issue);
                                (_ =
                                    h.issuer === t
                                        ? r.parseCurrency(h.fee)
                                        : null),
                                    h.issue_to_account === t &&
                                        (a = u(
                                            a,
                                            "Deposit",
                                            k,
                                            null,
                                            _,
                                            p,
                                            d,
                                            n + " : Issued to account"
                                        )),
                                    s(d);
                                break;
                            case "account_update":
                            case "proposal_create":
                            case "proposal_update":
                            case "account_whitelist":
                            case "worker_create":
                            case "limit_order_create":
                            case "limit_order_cancel":
                            case "call_order_update":
                                (_ = r.parseCurrency(h.fee)).amount > 0 &&
                                    ((a = u(
                                        a,
                                        "Withdrawal",
                                        null,
                                        _,
                                        null,
                                        p,
                                        d,
                                        d + " fee"
                                    )),
                                    s(d));
                                break;
                            case "account_create":
                                h.registrar === t &&
                                    ((a = u(
                                        a,
                                        "Withdrawal",
                                        null,
                                        (_ = r.parseCurrency(h.fee)),
                                        null,
                                        p,
                                        d,
                                        d + " fee"
                                    )),
                                    s(d));
                                break;
                            case "asset_fund_fee_pool":
                                (_ = r.parseCurrency(h.fee)),
                                    (a = u(
                                        a,
                                        "Withdrawal",
                                        null,
                                        r.parseCurrency({
                                            amount: h.amount,
                                            asset_id: "1.3.0"
                                        }),
                                        _,
                                        p,
                                        d,
                                        "" + d
                                    )),
                                    s(d);
                                break;
                            default:
                                console.log("Unhandled type:", d, h);
                        }
                    }
                    return a;
                },
                filterEntries: function(e, t, n) {
                    if (!t && !n) return e;
                    for (
                        var a = Object.keys(e), r = a.length - 1;
                        r >= 0;
                        r--
                    ) {
                        var o = a[r],
                            s = e[o],
                            c = s.timestamp,
                            i = s.type;
                        s.data,
                            t && i !== t
                                ? delete e[o]
                                : n && new Date(c).getTime() < n && delete e[o];
                    }
                    return (
                        console.log(
                            "Removed " +
                                (a.length - Object.keys(e).length) +
                                " entries by filtering"
                        ),
                        e
                    );
                },
                groupEntries: function(e) {
                    for (
                        var t = {}, n = Object.keys(e), r = n.length - 1;
                        r >= 0;
                        r--
                    ) {
                        var o = n[r],
                            s = e[o],
                            c = s.timestamp,
                            i = s.type,
                            u = s.data;
                        switch (i) {
                            case "fill_order":
                                var l = a(c),
                                    m =
                                        u.receives.asset_id +
                                        "_" +
                                        u.pays.asset_id,
                                    f = t[m],
                                    p = f ? a(f.timestamp) : null;
                                f &&
                                    l.isSame(p, "day") &&
                                    f.data.pays.asset_id === u.pays.asset_id &&
                                    f.data.receives.asset_id ===
                                        u.receives.asset_id &&
                                    ((u.pays.amount =
                                        parseInt(u.pays.amount, 10) +
                                        parseInt(f.data.pays.amount, 10)),
                                    (u.receives.amount =
                                        parseInt(u.receives.amount, 10) +
                                        parseInt(f.data.receives.amount, 10)),
                                    (u.fee.amount =
                                        parseInt(u.fee.amount, 10) +
                                        parseInt(f.data.fee.amount, 10)),
                                    (e[o].data = u),
                                    delete e[f.trx_id]),
                                    (t[m] = {data: u, timestamp: c, trx_id: o});
                        }
                    }
                    return (
                        console.log(
                            "Removed " +
                                (n.length - Object.keys(e).length) +
                                " fill_order entries by grouping"
                        ),
                        e
                    );
                }
            };
        },
        1832: function(e, t, n) {
            var a = n(10).ChainStore;
            e.exports = {
                parseCurrency: function(e) {
                    var t = a.getAsset(e.asset_id),
                        n = (function(e) {
                            if ("number" != typeof e)
                                throw new Error("Input must be a number");
                            return Math.pow(10, e);
                        })((t = t ? t.toJS() : {precision: 5}).precision);
                    return {
                        amount: e.amount / n,
                        currency: t.symbol,
                        asset_id: e.asset_id
                    };
                },
                printAmount: function(e) {
                    if (!e.amount || !e.currency) return "";
                    var t = a.getAsset(e.asset_id);
                    return (
                        (t = t ? t.toJS() : {precision: 5}),
                        e.amount.toFixed(t.precision)
                    );
                },
                getIndex: function(e) {
                    var t = e.split(".");
                    return parseInt(t[2], 10);
                }
            };
        },
        1833: function(e, t, n) {
            var a = n(1834),
                r = n(13),
                o = n(10),
                s = o.ChainTypes,
                c = o.ChainStore,
                i = o.FetchChain,
                u = s.operations,
                l = Object.keys(u),
                m = {},
                f = {};
            function p(e) {
                return new Promise(function(t, n) {
                    if (m[e]) return t(m[e]);
                    r.Apis.instance()
                        .db_api()
                        .exec("get_block", [e])
                        .then(function(n) {
                            (m[e] = new Date(n.timestamp + "Z")), t(m[e]);
                        })
                        .catch(n);
                });
            }
            function d(e) {
                return new Promise(function(t, n) {
                    var a;
                    if (f[e]) return t(f[e]);
                    i("getObject", e, void 0, ((a = {}), (a[e] = !1), a))
                        .then(function(n) {
                            var a = n.toJS();
                            (f[e] = {
                                symbol: a.symbol.replace(
                                    /OPEN\.|BRIDGE\.|RUDEX\.|GDEX\.|BLOCK\./,
                                    ""
                                ),
                                precision: a.precision
                            }),
                                t(f[e]);
                        })
                        .catch(function(e) {
                            n();
                        });
                });
            }
            e.exports = {
                connect: function() {
                    return new Promise(function(e) {
                        r.Apis.instance(a.apiNode, !0)
                            .init_promise.then(function(t) {
                                c.init(!1).then(function() {
                                    e(t);
                                });
                            })
                            .catch(function(e) {
                                console.error("Error connection to node:", e);
                            });
                    });
                },
                disconnect: function() {
                    r.Apis.instance().close();
                },
                getUser: function(e) {
                    return new Promise(function(t, n) {
                        var a;
                        i("getAccount", e, void 0, ((a = {}), (a[e] = !1), a))
                            .then(function(e) {
                                var n = e.toJS();
                                n.balances || (n.balances = {}),
                                    n.call_orders || (n.call_orders = []);
                                var a = Object.keys(n.balances);
                                t({
                                    accountId: n.id,
                                    assets: a,
                                    balances: n.balances
                                });
                            })
                            .catch(n);
                    });
                },
                getBlockTime: p,
                getAssetData: d,
                resolveAssets: function(e, t) {
                    return new Promise(function(n, a) {
                        var r = [],
                            o = {};
                        e &&
                            e.forEach(function(e) {
                                switch (l[e.op[0]]) {
                                    case "transfer":
                                        (o[e.op[1].amount.asset_id] = !0),
                                            (o[e.op[1].fee.asset_id] = !0);
                                        break;
                                    case "fill_order":
                                        (o[e.op[1].pays.asset_id] = !0),
                                            (o[e.op[1].receives.asset_id] = !0),
                                            (o[e.op[1].fee.asset_id] = !0);
                                        break;
                                    case "asset_issue":
                                        (o[
                                            e.op[1].asset_to_issue.asset_id
                                        ] = !0),
                                            (o[e.op[1].fee.asset_id] = !0);
                                }
                            }),
                            t &&
                                t.forEach(function(e) {
                                    o[e] = !0;
                                }),
                            Object.keys(o).forEach(function(e) {
                                !f[e] && e && r.push(d(e));
                            }),
                            Promise.all(r)
                                .then(n)
                                .catch(a);
                    });
                },
                resolveBlockTimes: function(e) {
                    return new Promise(function(t, n) {
                        var a = e.map(function(e) {
                            return (
                                e.block_time &&
                                    (m[e.block_num] = new Date(e.block_time)),
                                p(e.block_num)
                            );
                        });
                        Promise.all(a)
                            .then(t)
                            .catch(n);
                    });
                },
                getAsset: function(e) {
                    return f[e];
                },
                getBlock: function(e) {
                    return m[e];
                }
            };
        },
        1834: function(e, t) {
            e.exports = {
                apiNode: "wss://eu.nodes.bitshares.ws",
                useES: !0,
                esNode: "https://eswrapper.bitshares.eu",
                botPaymentAccounts: []
            };
        },
        1835: function(e, t, n) {
            var a = n(13),
                r = void 0;
            e.exports = function(e) {
                return (
                    (r = e ? fetch : n(1836)),
                    {
                        getAccountHistory: function(e, t, n, r) {
                            return new Promise(function(o, s) {
                                a.Apis.instance()
                                    .history_api()
                                    .exec("get_account_history", [e, t, n, r])
                                    .then(function(e) {
                                        o(e);
                                    })
                                    .catch(s);
                            });
                        },
                        getAccountHistoryES: function(e, t, n) {
                            var a =
                                arguments.length > 3 && void 0 !== arguments[3]
                                    ? arguments[3]
                                    : "https://eswrapper.bitshares.eu";
                            return (
                                console.log(
                                    "query",
                                    a +
                                        "/get_account_history?account_id=" +
                                        e +
                                        "&from_=" +
                                        n +
                                        "&size=" +
                                        t +
                                        "&sort_by=block_data.block_time&type=data&agg_field=operation_type"
                                ),
                                new Promise(function(o, s) {
                                    r(
                                        a +
                                            "/get_account_history?account_id=" +
                                            e +
                                            "&from_=" +
                                            n +
                                            "&size=" +
                                            t +
                                            "&sort_by=block_data.block_time&type=data&agg_field=operation_type"
                                    )
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            var t = e.map(function(e) {
                                                return {
                                                    id:
                                                        e.account_history
                                                            .operation_id,
                                                    op: JSON.parse(
                                                        e.operation_history.op
                                                    ),
                                                    result: JSON.parse(
                                                        e.operation_history
                                                            .operation_result
                                                    ),
                                                    block_num:
                                                        e.block_data.block_num,
                                                    block_time:
                                                        e.block_data
                                                            .block_time + "Z"
                                                };
                                            });
                                            o(t);
                                        })
                                        .catch(function() {
                                            o([]);
                                        });
                                })
                            );
                        }
                    }
                );
            };
        },
        1836: function(e, t) {},
        1842: function(e, t, n) {
            var a = n(1831),
                r = a.groupEntries,
                o = a.parseData,
                s = n(1833),
                c = s.resolveBlockTimes,
                i = s.resolveAssets,
                u = n(1835)(!0),
                l = u.getAccountHistoryES,
                m = u.getAccountHistory;
            e.exports = {
                groupEntries: r,
                parseData: o,
                getAccountHistoryES: l,
                getAccountHistory: m,
                resolveBlockTimes: c,
                resolveAssets: i
            };
        },
        1993: function(e, t, n) {
            "use strict";
            const a = n(1994),
                r = n(1995);
            function o(e, t) {
                return t.encode ? (t.strict ? a(e) : encodeURIComponent(e)) : e;
            }
            function s(e, t) {
                return t.decode ? r(e) : e;
            }
            function c(e) {
                const t = e.indexOf("?");
                return -1 === t ? "" : e.slice(t + 1);
            }
            function i(e, t) {
                const n = (function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, n, a) => {
                                    (t = /\[(\d*)\]$/.exec(e)),
                                        (e = e.replace(/\[\d*\]$/, "")),
                                        t
                                            ? (void 0 === a[e] && (a[e] = {}),
                                              (a[e][t[1]] = n))
                                            : (a[e] = n);
                                };
                            case "bracket":
                                return (e, n, a) => {
                                    (t = /(\[\])$/.exec(e)),
                                        (e = e.replace(/\[\]$/, "")),
                                        t
                                            ? void 0 !== a[e]
                                                ? (a[e] = [].concat(a[e], n))
                                                : (a[e] = [n])
                                            : (a[e] = n);
                                };
                            default:
                                return (e, t, n) => {
                                    void 0 !== n[e]
                                        ? (n[e] = [].concat(n[e], t))
                                        : (n[e] = t);
                                };
                        }
                    })(
                        (t = Object.assign(
                            {decode: !0, arrayFormat: "none"},
                            t
                        ))
                    ),
                    a = Object.create(null);
                if ("string" != typeof e) return a;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return a;
                for (const r of e.split("&")) {
                    let [e, o] = r.replace(/\+/g, " ").split("=");
                    (o = void 0 === o ? null : s(o, t)), n(s(e, t), o, a);
                }
                return Object.keys(a)
                    .sort()
                    .reduce((e, t) => {
                        const n = a[t];
                        return (
                            Boolean(n) &&
                            "object" == typeof n &&
                            !Array.isArray(n)
                                ? (e[t] = (function e(t) {
                                      return Array.isArray(t)
                                          ? t.sort()
                                          : "object" == typeof t
                                              ? e(Object.keys(t))
                                                    .sort(
                                                        (e, t) =>
                                                            Number(e) -
                                                            Number(t)
                                                    )
                                                    .map(e => t[e])
                                              : t;
                                  })(n))
                                : (e[t] = n),
                            e
                        );
                    }, Object.create(null));
            }
            (t.extract = c),
                (t.parse = i),
                (t.stringify = (e, t) => {
                    !1 ===
                        (t = Object.assign(
                            {encode: !0, strict: !0, arrayFormat: "none"},
                            t
                        )).sort && (t.sort = () => {});
                    const n = (function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return (t, n, a) =>
                                    null === n
                                        ? [o(t, e), "[", a, "]"].join("")
                                        : [
                                              o(t, e),
                                              "[",
                                              o(a, e),
                                              "]=",
                                              o(n, e)
                                          ].join("");
                            case "bracket":
                                return (t, n) =>
                                    null === n
                                        ? [o(t, e), "[]"].join("")
                                        : [o(t, e), "[]=", o(n, e)].join("");
                            default:
                                return (t, n) =>
                                    null === n
                                        ? o(t, e)
                                        : [o(t, e), "=", o(n, e)].join("");
                        }
                    })(t);
                    return e
                        ? Object.keys(e)
                              .sort(t.sort)
                              .map(a => {
                                  const r = e[a];
                                  if (void 0 === r) return "";
                                  if (null === r) return o(a, t);
                                  if (Array.isArray(r)) {
                                      const e = [];
                                      for (const t of r.slice())
                                          void 0 !== t &&
                                              e.push(n(a, t, e.length));
                                      return e.join("&");
                                  }
                                  return o(a, t) + "=" + o(r, t);
                              })
                              .filter(e => e.length > 0)
                              .join("&")
                        : "";
                }),
                (t.parseUrl = (e, t) => ({
                    url: e.split("?")[0] || "",
                    query: i(c(e), t)
                }));
        },
        1994: function(e, t, n) {
            "use strict";
            e.exports = e =>
                encodeURIComponent(e).replace(
                    /[!'()*]/g,
                    e =>
                        `%${e
                            .charCodeAt(0)
                            .toString(16)
                            .toUpperCase()}`
                );
        },
        1995: function(e, t, n) {
            "use strict";
            var a = new RegExp("%[a-f0-9]{2}", "gi"),
                r = new RegExp("(%[a-f0-9]{2})+", "gi");
            function o(e, t) {
                try {
                    return decodeURIComponent(e.join(""));
                } catch (e) {}
                if (1 === e.length) return e;
                t = t || 1;
                var n = e.slice(0, t),
                    a = e.slice(t);
                return Array.prototype.concat.call([], o(n), o(a));
            }
            function s(e) {
                try {
                    return decodeURIComponent(e);
                } catch (r) {
                    for (var t = e.match(a), n = 1; n < t.length; n++)
                        t = (e = o(t, n).join("")).match(a);
                    return e;
                }
            }
            e.exports = function(e) {
                if ("string" != typeof e)
                    throw new TypeError(
                        "Expected `encodedURI` to be of type `string`, got `" +
                            typeof e +
                            "`"
                    );
                try {
                    return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
                } catch (t) {
                    return (function(e) {
                        for (
                            var t = {"%FE%FF": "��", "%FF%FE": "��"},
                                n = r.exec(e);
                            n;

                        ) {
                            try {
                                t[n[0]] = decodeURIComponent(n[0]);
                            } catch (e) {
                                var a = s(n[0]);
                                a !== n[0] && (t[n[0]] = a);
                            }
                            n = r.exec(e);
                        }
                        t["%C2"] = "�";
                        for (var o = Object.keys(t), c = 0; c < o.length; c++) {
                            var i = o[c];
                            e = e.replace(new RegExp(i, "g"), t[i]);
                        }
                        return e;
                    })(e);
                }
            };
        },
        2107: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    var a = n(555),
                        r = n(310),
                        o = n(0),
                        s = n.n(o),
                        c = n(337),
                        i = n(48),
                        u = n(3),
                        l = n.n(u),
                        m = n(191),
                        f = n(256),
                        p = n(24),
                        d = n(309),
                        h = n(15),
                        _ = n(17),
                        b = n.n(_),
                        g = n(99),
                        y = n(1828),
                        v = n(11),
                        k = n.n(v),
                        A = n(10),
                        S = n(33),
                        E = n(143),
                        C = n(8),
                        w = n.n(C),
                        j = n(27),
                        x = n(1993),
                        I = n.n(x),
                        O = (function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    (a.enumerable = a.enumerable || !1),
                                        (a.configurable = !0),
                                        "value" in a && (a.writable = !0),
                                        Object.defineProperty(e, a.key, a);
                                }
                            }
                            return function(t, n, a) {
                                return n && e(t.prototype, n), a && e(t, a), t;
                            };
                        })();
                    var F = (function(t) {
                        function n(e) {
                            !(function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, n);
                            var t = (function(e, t) {
                                    if (!e)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called"
                                        );
                                    return !t ||
                                        ("object" != typeof t &&
                                            "function" != typeof t)
                                        ? e
                                        : t;
                                })(
                                    this,
                                    (
                                        n.__proto__ || Object.getPrototypeOf(n)
                                    ).call(this, e)
                                ),
                                a = n.getInitialState(),
                                o = I.a.parse(e.location.search) || {};
                            o.from &&
                                ((a.from_name = o.from),
                                A.ChainStore.getAccount(o.from)),
                                o.to &&
                                    ((a.to_name = o.to),
                                    A.ChainStore.getAccount(o.to)),
                                o.amount && (a.amount = o.amount),
                                o.asset &&
                                    ((a.asset_id = o.asset),
                                    (a.asset = A.ChainStore.getAsset(o.asset))),
                                o.memo && (a.memo = o.memo);
                            var s = p.a.getState().currentAccount;
                            return (
                                a.from_name || (a.from_name = s),
                                (t.state = a),
                                (t.onTrxIncluded = t.onTrxIncluded.bind(t)),
                                (t._updateFee = Object(r.a)(
                                    t._updateFee.bind(t),
                                    250
                                )),
                                (t._checkFeeStatus = t._checkFeeStatus.bind(t)),
                                (t._checkBalance = t._checkBalance.bind(t)),
                                t
                            );
                        }
                        return (
                            (function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError(
                                        "Super expression must either be null or a function, not " +
                                            typeof t
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                })),
                                    t &&
                                        (Object.setPrototypeOf
                                            ? Object.setPrototypeOf(e, t)
                                            : (e.__proto__ = t));
                            })(n, s.a.Component),
                            O(
                                n,
                                [
                                    {
                                        key: "componentWillMount",
                                        value: function() {
                                            (this.nestedRef = null),
                                                this._updateFee(),
                                                this._checkFeeStatus();
                                        }
                                    },
                                    {
                                        key: "shouldComponentUpdate",
                                        value: function(e, t) {
                                            var n = this._getAvailableAssets()
                                                    .asset_types,
                                                a = this._getAvailableAssets(t)
                                                    .asset_types;
                                            if (1 === a.length) {
                                                var r = A.ChainStore.getAsset(
                                                    a[0]
                                                );
                                                1 !== n.length &&
                                                    this.onAmountChanged({
                                                        amount: t.amount,
                                                        asset: r
                                                    }),
                                                    a[0] !==
                                                        this.state
                                                            .fee_asset_id &&
                                                        r &&
                                                        this.state
                                                            .fee_asset_id !==
                                                            a[0] &&
                                                        this.setState({
                                                            feeAsset: r,
                                                            fee_asset_id: a[0]
                                                        });
                                            }
                                            return !0;
                                        }
                                    },
                                    {
                                        key: "componentWillReceiveProps",
                                        value: function(e) {
                                            var t = this;
                                            e.currentAccount !==
                                                this.state.from_name &&
                                                e.currentAccount !==
                                                    this.props.currentAccount &&
                                                this.setState(
                                                    {
                                                        from_name:
                                                            e.currentAccount,
                                                        from_account: A.ChainStore.getAccount(
                                                            e.currentAccount
                                                        ),
                                                        feeStatus: {},
                                                        fee_asset_id: "1.3.0",
                                                        feeAmount: new j.a({
                                                            amount: 0
                                                        })
                                                    },
                                                    function() {
                                                        t._updateFee(),
                                                            t._checkFeeStatus(
                                                                A.ChainStore.getAccount(
                                                                    e.currentAccount
                                                                )
                                                            );
                                                    }
                                                );
                                        }
                                    },
                                    {
                                        key: "_checkBalance",
                                        value: function() {
                                            var e = this.state,
                                                t = e.feeAmount,
                                                n = e.amount,
                                                a = e.from_account,
                                                r = e.asset;
                                            if (r && a) {
                                                var o = a.getIn([
                                                        "balances",
                                                        r.get("id")
                                                    ]),
                                                    s = a.getIn([
                                                        "balances",
                                                        t.asset_id
                                                    ]);
                                                if (r && a) {
                                                    if (!o)
                                                        return this.setState({
                                                            balanceError: !0
                                                        });
                                                    var c = A.ChainStore.getObject(
                                                            o
                                                        ),
                                                        i = s
                                                            ? A.ChainStore.getObject(
                                                                  s
                                                              )
                                                            : null;
                                                    if (
                                                        ((i &&
                                                            0 !==
                                                                i.get(
                                                                    "balance"
                                                                )) ||
                                                            this.setState(
                                                                {
                                                                    fee_asset_id:
                                                                        "1.3.0"
                                                                },
                                                                this._updateFee
                                                            ),
                                                        c && t)
                                                    ) {
                                                        var u = Object(E.a)(
                                                            n,
                                                            r,
                                                            t,
                                                            c
                                                        );
                                                        null !== u &&
                                                            this.setState({
                                                                balanceError: !u
                                                            });
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        key: "_checkFeeStatus",
                                        value: function() {
                                            var e = this,
                                                t =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : this.state
                                                              .from_account;
                                            if (t) {
                                                var n = Object.keys(
                                                        t.get("balances").toJS()
                                                    ).sort(h.a.sortID),
                                                    a = {},
                                                    r = [];
                                                n.forEach(function(n) {
                                                    r.push(
                                                        Object(E.b)({
                                                            accountID: t.get(
                                                                "id"
                                                            ),
                                                            feeID: n,
                                                            options: [
                                                                "price_per_kbyte"
                                                            ],
                                                            data: {
                                                                type: "memo",
                                                                content:
                                                                    e.state.memo
                                                            }
                                                        })
                                                    );
                                                }),
                                                    Promise.all(r)
                                                        .then(function(t) {
                                                            n.forEach(function(
                                                                e,
                                                                n
                                                            ) {
                                                                a[e] = t[n];
                                                            }),
                                                                h.a.are_equal_shallow(
                                                                    e.state
                                                                        .feeStatus,
                                                                    a
                                                                ) ||
                                                                    e.setState({
                                                                        feeStatus: a
                                                                    }),
                                                                e._checkBalance();
                                                        })
                                                        .catch(function(e) {
                                                            console.error(e);
                                                        });
                                            }
                                        }
                                    },
                                    {
                                        key: "_updateFee",
                                        value: function() {
                                            var e = this,
                                                t =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : this.state,
                                                n = t.fee_asset_id,
                                                a = t.from_account,
                                                r = t.asset_id,
                                                o = this._getAvailableAssets(t)
                                                    .fee_asset_types;
                                            if (
                                                (1 === o.length &&
                                                    o[0] !== n &&
                                                    (n = o[0]),
                                                !a)
                                            )
                                                return null;
                                            Object(E.b)({
                                                accountID: a.get("id"),
                                                feeID: n,
                                                options: ["price_per_kbyte"],
                                                data: {
                                                    type: "memo",
                                                    content: t.memo
                                                }
                                            }).then(function(t) {
                                                var n = t.fee,
                                                    o = t.hasBalance,
                                                    s = t.hasPoolBalance;
                                                return Object(E.d)(a, n).then(
                                                    function(t) {
                                                        return t
                                                            ? e.setState(
                                                                  {
                                                                      fee_asset_id: r
                                                                  },
                                                                  e._updateFee
                                                              )
                                                            : e.setState({
                                                                  feeAmount: n,
                                                                  fee_asset_id:
                                                                      n.asset_id,
                                                                  hasBalance: o,
                                                                  hasPoolBalance: s,
                                                                  error:
                                                                      !o || !s
                                                              });
                                                    }
                                                );
                                            });
                                        }
                                    },
                                    {
                                        key: "fromChanged",
                                        value: function(e) {
                                            e ||
                                                this.setState({
                                                    from_account: null
                                                }),
                                                this.setState({
                                                    from_name: e,
                                                    error: null,
                                                    propose: !1,
                                                    propose_account: ""
                                                });
                                        }
                                    },
                                    {
                                        key: "toChanged",
                                        value: function(e) {
                                            this.setState({
                                                to_name: e,
                                                error: null
                                            });
                                        }
                                    },
                                    {
                                        key: "onFromAccountChanged",
                                        value: function(e) {
                                            var t = this;
                                            this.setState(
                                                {from_account: e, error: null},
                                                function() {
                                                    t._updateFee(),
                                                        t._checkFeeStatus();
                                                }
                                            );
                                        }
                                    },
                                    {
                                        key: "onToAccountChanged",
                                        value: function(e) {
                                            this.setState({
                                                to_account: e,
                                                error: null
                                            });
                                        }
                                    },
                                    {
                                        key: "onAmountChanged",
                                        value: function(e) {
                                            var t = e.amount,
                                                n = e.asset;
                                            n &&
                                                this.setState(
                                                    {
                                                        amount: t,
                                                        asset: n,
                                                        asset_id: n.get("id"),
                                                        error: null
                                                    },
                                                    this._checkBalance
                                                );
                                        }
                                    },
                                    {
                                        key: "onFeeChanged",
                                        value: function(e) {
                                            var t = e.asset;
                                            this.setState(
                                                {
                                                    feeAsset: t,
                                                    fee_asset_id: t.get("id"),
                                                    error: null
                                                },
                                                this._updateFee
                                            );
                                        }
                                    },
                                    {
                                        key: "onMemoChanged",
                                        value: function(e) {
                                            this.setState(
                                                {memo: e.target.value},
                                                this._updateFee
                                            );
                                        }
                                    },
                                    {
                                        key: "onTrxIncluded",
                                        value: function(e) {
                                            e.included &&
                                            e.broadcasted_transaction
                                                ? (g.a.unlisten(
                                                      this.onTrxIncluded
                                                  ),
                                                  g.a.reset())
                                                : e.closed &&
                                                  (g.a.unlisten(
                                                      this.onTrxIncluded
                                                  ),
                                                  g.a.reset());
                                        }
                                    },
                                    {
                                        key: "onPropose",
                                        value: function(e, t) {
                                            t.preventDefault(),
                                                this.setState({
                                                    propose: e,
                                                    propose_account: null
                                                });
                                        }
                                    },
                                    {
                                        key: "onProposeAccount",
                                        value: function(e) {
                                            this.setState({propose_account: e});
                                        }
                                    },
                                    {
                                        key: "resetForm",
                                        value: function() {
                                            this.setState({
                                                memo: "",
                                                to_name: "",
                                                amount: ""
                                            });
                                        }
                                    },
                                    {
                                        key: "onSubmit",
                                        value: function(t) {
                                            var n = this;
                                            t.preventDefault(),
                                                this.setState({error: null});
                                            var a = this.state,
                                                r = a.asset,
                                                o = a.amount,
                                                s = new j.a({
                                                    real: o,
                                                    asset_id: r.get("id"),
                                                    precision: r.get(
                                                        "precision"
                                                    )
                                                });
                                            i.a
                                                .transfer(
                                                    this.state.from_account.get(
                                                        "id"
                                                    ),
                                                    this.state.to_account.get(
                                                        "id"
                                                    ),
                                                    s.getAmount(),
                                                    r.get("id"),
                                                    this.state.memo
                                                        ? new e(
                                                              this.state.memo,
                                                              "utf-8"
                                                          )
                                                        : this.state.memo,
                                                    this.state.propose
                                                        ? this.state
                                                              .propose_account
                                                        : null,
                                                    this.state.feeAsset
                                                        ? this.state.feeAsset.get(
                                                              "id"
                                                          )
                                                        : "1.3.0"
                                                )
                                                .then(function() {
                                                    n.resetForm.call(n),
                                                        g.a.unlisten(
                                                            n.onTrxIncluded
                                                        ),
                                                        g.a.listen(
                                                            n.onTrxIncluded
                                                        );
                                                })
                                                .catch(function(e) {
                                                    var t = e.message
                                                        ? e.message.split(
                                                              "\n"
                                                          )[1] || e.message
                                                        : null;
                                                    console.log(
                                                        "error: ",
                                                        e,
                                                        t
                                                    ),
                                                        n.setState({error: t});
                                                });
                                        }
                                    },
                                    {
                                        key: "setNestedRef",
                                        value: function(e) {
                                            this.nestedRef = e;
                                        }
                                    },
                                    {
                                        key: "_setTotal",
                                        value: function(e, t) {
                                            var n = this.state.feeAmount,
                                                a = A.ChainStore.getObject(t),
                                                r = A.ChainStore.getObject(e),
                                                o = new j.a({
                                                    amount: a.get("balance"),
                                                    asset_id: r.get("id"),
                                                    precision: r.get(
                                                        "precision"
                                                    )
                                                });
                                            a &&
                                                (n.asset_id === o.asset_id &&
                                                    o.minus(n),
                                                this.setState(
                                                    {
                                                        amount: o.getAmount({
                                                            real: !0
                                                        })
                                                    },
                                                    this._checkBalance
                                                ));
                                        }
                                    },
                                    {
                                        key: "_getAvailableAssets",
                                        value: function() {
                                            var e =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : this.state,
                                                t = this.state.feeStatus;
                                            var n = e.from_account,
                                                a = e.from_error,
                                                r = [],
                                                o = [];
                                            if (!n || !n.get("balances") || a)
                                                return {
                                                    asset_types: r,
                                                    fee_asset_types: o
                                                };
                                            var s = e.from_account
                                                .get("balances")
                                                .toJS();
                                            for (var c in ((r = Object.keys(
                                                s
                                            ).sort(h.a.sortID)),
                                            (o = Object.keys(s).sort(
                                                h.a.sortID
                                            )),
                                            s)) {
                                                var i = A.ChainStore.getObject(
                                                    s[c]
                                                );
                                                i &&
                                                    0 === i.get("balance") &&
                                                    (r.splice(r.indexOf(c), 1),
                                                    -1 !== o.indexOf(c) &&
                                                        o.splice(
                                                            o.indexOf(c),
                                                            1
                                                        ));
                                            }
                                            return {
                                                asset_types: r,
                                                fee_asset_types: (o = o.filter(
                                                    function(e) {
                                                        return (
                                                            (function(e) {
                                                                return (
                                                                    void 0 ===
                                                                        t[e] ||
                                                                    (t[e] &&
                                                                        t[e]
                                                                            .hasPoolBalance)
                                                                );
                                                            })(e) &&
                                                            (function(e) {
                                                                return (
                                                                    void 0 ===
                                                                        t[e] ||
                                                                    (t[e] &&
                                                                        t[e]
                                                                            .hasBalance)
                                                                );
                                                            })(e)
                                                        );
                                                    }
                                                ))
                                            };
                                        }
                                    },
                                    {
                                        key: "render",
                                        value: function() {
                                            var e = null,
                                                t = this.state,
                                                n = t.propose,
                                                r = t.from_account,
                                                o = t.to_account,
                                                i = t.asset,
                                                u = t.asset_id,
                                                h = t.propose_account,
                                                _ = t.feeAmount,
                                                g = t.amount,
                                                v = t.error,
                                                S = t.to_name,
                                                E = t.from_name,
                                                C = t.memo,
                                                j = t.feeAsset,
                                                x = t.fee_asset_id,
                                                I = t.balanceError,
                                                O =
                                                    p.a.isMyAccount(r) ||
                                                    E ===
                                                        this.props
                                                            .passwordAccount;
                                            !r ||
                                                O ||
                                                n ||
                                                (e = s.a.createElement(
                                                    "span",
                                                    null,
                                                    b.a.translate(
                                                        "account.errors.not_yours"
                                                    ),
                                                    " (",
                                                    s.a.createElement(
                                                        "a",
                                                        {
                                                            onClick: this.onPropose.bind(
                                                                this,
                                                                !0
                                                            )
                                                        },
                                                        b.a.translate("propose")
                                                    ),
                                                    ")"
                                                ));
                                            var F = this._getAvailableAssets(),
                                                N = F.asset_types,
                                                B = F.fee_asset_types,
                                                T = null,
                                                P = this.state.feeAmount.getAmount(
                                                    {real: !0}
                                                );
                                            if (r && r.get("balances") && !e) {
                                                var D = r
                                                    .get("balances")
                                                    .toJS();
                                                if (
                                                    (1 === N.length &&
                                                        (i = A.ChainStore.getAsset(
                                                            N[0]
                                                        )),
                                                    N.length > 0)
                                                ) {
                                                    var R = i
                                                            ? i.get("id")
                                                            : N[0],
                                                        U = j
                                                            ? j.get("id")
                                                            : "1.3.0";
                                                    T = s.a.createElement(
                                                        "span",
                                                        {
                                                            style: {
                                                                borderBottom:
                                                                    "#A09F9F 1px dotted",
                                                                cursor:
                                                                    "pointer"
                                                            },
                                                            onClick: this._setTotal.bind(
                                                                this,
                                                                R,
                                                                D[R],
                                                                P,
                                                                U
                                                            )
                                                        },
                                                        s.a.createElement(l.a, {
                                                            component: "span",
                                                            content:
                                                                "transfer.available"
                                                        }),
                                                        ":",
                                                        " ",
                                                        s.a.createElement(c.a, {
                                                            balance: D[R]
                                                        })
                                                    );
                                                } else T = "No funds";
                                            }
                                            var J = n && !h,
                                                H = parseFloat(
                                                    String.prototype.replace.call(
                                                        g,
                                                        /,/g,
                                                        ""
                                                    )
                                                ),
                                                M = H && !Object(a.a)(H),
                                                W = o && o.get("name") === S,
                                                z =
                                                    !r ||
                                                    !W ||
                                                    !M ||
                                                    !i ||
                                                    e ||
                                                    J ||
                                                    I,
                                                $ = k.a.Set();
                                            $ = $.add(r);
                                            var q = 1;
                                            return s.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block vertical"
                                                },
                                                s.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block shrink vertical medium-horizontal",
                                                        style: {
                                                            paddingTop: "2rem"
                                                        }
                                                    },
                                                    s.a.createElement(
                                                        "form",
                                                        {
                                                            style: {
                                                                paddingBottom: 20,
                                                                overflow:
                                                                    "visible"
                                                            },
                                                            className:
                                                                "grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",
                                                            onSubmit: this.onSubmit.bind(
                                                                this
                                                            ),
                                                            noValidate: !0
                                                        },
                                                        s.a.createElement(l.a, {
                                                            content:
                                                                "transfer.header",
                                                            component: "h2"
                                                        }),
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block"
                                                            },
                                                            s.a.createElement(
                                                                f.a,
                                                                {
                                                                    label:
                                                                        "transfer.from",
                                                                    ref: "from",
                                                                    accountName: E,
                                                                    onChange: this.fromChanged.bind(
                                                                        this
                                                                    ),
                                                                    onAccountChanged: this.onFromAccountChanged.bind(
                                                                        this
                                                                    ),
                                                                    account: r,
                                                                    size: 60,
                                                                    error: e,
                                                                    typeahead: !0,
                                                                    tabIndex: q++
                                                                }
                                                            )
                                                        ),
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block"
                                                            },
                                                            s.a.createElement(
                                                                f.a,
                                                                {
                                                                    label:
                                                                        "transfer.to",
                                                                    ref: "to",
                                                                    accountName: S,
                                                                    onChange: this.toChanged.bind(
                                                                        this
                                                                    ),
                                                                    onAccountChanged: this.onToAccountChanged.bind(
                                                                        this
                                                                    ),
                                                                    account: o,
                                                                    size: 60,
                                                                    tabIndex: q++,
                                                                    typeahead: !0
                                                                }
                                                            )
                                                        ),
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block transfer-input"
                                                            },
                                                            s.a.createElement(
                                                                d.a,
                                                                {
                                                                    label:
                                                                        "transfer.amount",
                                                                    amount: g,
                                                                    onChange: this.onAmountChanged.bind(
                                                                        this
                                                                    ),
                                                                    asset:
                                                                        N.length >
                                                                            0 &&
                                                                        i
                                                                            ? i.get(
                                                                                  "id"
                                                                              )
                                                                            : u ||
                                                                              N[0],
                                                                    assets: N,
                                                                    display_balance: T,
                                                                    tabIndex: q++
                                                                }
                                                            ),
                                                            this.state
                                                                .balanceError
                                                                ? s.a.createElement(
                                                                      "p",
                                                                      {
                                                                          className:
                                                                              "has-error no-margin",
                                                                          style: {
                                                                              paddingTop: 10
                                                                          }
                                                                      },
                                                                      s.a.createElement(
                                                                          l.a,
                                                                          {
                                                                              content:
                                                                                  "transfer.errors.insufficient"
                                                                          }
                                                                      )
                                                                  )
                                                                : null
                                                        ),
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block transfer-input"
                                                            },
                                                            C && C.length
                                                                ? s.a.createElement(
                                                                      "label",
                                                                      {
                                                                          className:
                                                                              "right-label"
                                                                      },
                                                                      C.length
                                                                  )
                                                                : null,
                                                            s.a.createElement(
                                                                l.a,
                                                                {
                                                                    className:
                                                                        "left-label tooltip",
                                                                    component:
                                                                        "label",
                                                                    content:
                                                                        "transfer.memo",
                                                                    "data-place":
                                                                        "top"
                                                                }
                                                            ),
                                                            s.a.createElement(
                                                                "textarea",
                                                                {
                                                                    style: {
                                                                        marginBottom: 0
                                                                    },
                                                                    rows: "3",
                                                                    value: C,
                                                                    tabIndex: q++,
                                                                    onChange: this.onMemoChanged.bind(
                                                                        this
                                                                    )
                                                                }
                                                            ),
                                                            this.state.propose
                                                                ? s.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "error-area",
                                                                          style: {
                                                                              position:
                                                                                  "absolute"
                                                                          }
                                                                      },
                                                                      s.a.createElement(
                                                                          l.a,
                                                                          {
                                                                              content:
                                                                                  "transfer.warn_name_unable_read_memo",
                                                                              name: this
                                                                                  .state
                                                                                  .from_name
                                                                          }
                                                                      )
                                                                  )
                                                                : null
                                                        ),
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block transfer-input fee-row" +
                                                                    (this.state
                                                                        .propose
                                                                        ? " proposal"
                                                                        : "")
                                                            },
                                                            s.a.createElement(
                                                                d.a,
                                                                {
                                                                    refCallback: this.setNestedRef.bind(
                                                                        this
                                                                    ),
                                                                    label:
                                                                        "transfer.fee",
                                                                    disabled: !0,
                                                                    amount: P,
                                                                    onChange: this.onFeeChanged.bind(
                                                                        this
                                                                    ),
                                                                    asset:
                                                                        B.length &&
                                                                        _
                                                                            ? _.asset_id
                                                                            : 1 ===
                                                                              B.length
                                                                                ? B[0]
                                                                                : x ||
                                                                                  B[0],
                                                                    assets: B,
                                                                    tabIndex: q++,
                                                                    error:
                                                                        !1 ===
                                                                        this
                                                                            .state
                                                                            .hasPoolBalance
                                                                            ? "transfer.errors.insufficient"
                                                                            : null
                                                                }
                                                            ),
                                                            n
                                                                ? s.a.createElement(
                                                                      "button",
                                                                      {
                                                                          className: w()(
                                                                              "button float-right no-margin",
                                                                              {
                                                                                  disabled: z
                                                                              }
                                                                          ),
                                                                          type:
                                                                              "submit",
                                                                          value:
                                                                              "Submit",
                                                                          tabIndex: q++
                                                                      },
                                                                      s.a.createElement(
                                                                          l.a,
                                                                          {
                                                                              component:
                                                                                  "span",
                                                                              content:
                                                                                  "propose"
                                                                          }
                                                                      )
                                                                  )
                                                                : s.a.createElement(
                                                                      "button",
                                                                      {
                                                                          className: w()(
                                                                              "button float-right no-margin",
                                                                              {
                                                                                  disabled: z
                                                                              }
                                                                          ),
                                                                          type:
                                                                              "submit",
                                                                          value:
                                                                              "Submit",
                                                                          tabIndex: q++
                                                                      },
                                                                      s.a.createElement(
                                                                          l.a,
                                                                          {
                                                                              component:
                                                                                  "span",
                                                                              content:
                                                                                  "transfer.send"
                                                                          }
                                                                      )
                                                                  )
                                                        ),
                                                        n
                                                            ? s.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "full-width-content form-group transfer-input"
                                                                  },
                                                                  s.a.createElement(
                                                                      "label",
                                                                      {
                                                                          className:
                                                                              "left-label"
                                                                      },
                                                                      s.a.createElement(
                                                                          l.a,
                                                                          {
                                                                              content:
                                                                                  "account.propose_from"
                                                                          }
                                                                      )
                                                                  ),
                                                                  s.a.createElement(
                                                                      m.a,
                                                                      {
                                                                          account_names: p.a.getMyAccounts(),
                                                                          onChange: this.onProposeAccount.bind(
                                                                              this
                                                                          ),
                                                                          tabIndex: q++
                                                                      }
                                                                  )
                                                              )
                                                            : null,
                                                        v
                                                            ? s.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "content-block has-error"
                                                                  },
                                                                  v
                                                              )
                                                            : null,
                                                        s.a.createElement(
                                                            "div",
                                                            null,
                                                            n
                                                                ? s.a.createElement(
                                                                      "span",
                                                                      null,
                                                                      s.a.createElement(
                                                                          "button",
                                                                          {
                                                                              className:
                                                                                  " button",
                                                                              onClick: this.onPropose.bind(
                                                                                  this,
                                                                                  !1
                                                                              ),
                                                                              tabIndex: q++
                                                                          },
                                                                          s.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  component:
                                                                                      "span",
                                                                                  content:
                                                                                      "cancel"
                                                                              }
                                                                          )
                                                                      )
                                                                  )
                                                                : null
                                                        )
                                                    ),
                                                    s.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-content small-12 medium-6 large-4 large-offset-1 right-column"
                                                        },
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-content no-padding"
                                                            },
                                                            s.a.createElement(
                                                                y.a,
                                                                {
                                                                    accountsList: $,
                                                                    limit: 25,
                                                                    compactView: !0,
                                                                    filter:
                                                                        "transfer",
                                                                    fullHeight: !0
                                                                }
                                                            )
                                                        )
                                                    ),
                                                    s.a.createElement("div", {
                                                        className:
                                                            "grid-content medium-6 large-4"
                                                    })
                                                )
                                            );
                                        }
                                    }
                                ],
                                [
                                    {
                                        key: "getInitialState",
                                        value: function() {
                                            return {
                                                from_name: "",
                                                to_name: "",
                                                from_account: null,
                                                to_account: null,
                                                amount: "",
                                                asset_id: null,
                                                asset: null,
                                                memo: "",
                                                error: null,
                                                propose: !1,
                                                propose_account: "",
                                                feeAsset: null,
                                                fee_asset_id: "1.3.0",
                                                feeAmount: new j.a({amount: 0}),
                                                feeStatus: {}
                                            };
                                        }
                                    }
                                ]
                            ),
                            n
                        );
                    })();
                    t.default = Object(S.connect)(F, {
                        listenTo: function() {
                            return [p.a];
                        },
                        getProps: function() {
                            return {
                                currentAccount: p.a.getState().currentAccount,
                                passwordAccount: p.a.getState().passwordAccount,
                                contactsList: p.a.getState().accountContacts
                            };
                        }
                    });
                }.call(this, n(118).Buffer);
        }
    }
]);
//# sourceMappingURL=transfer.js.map
