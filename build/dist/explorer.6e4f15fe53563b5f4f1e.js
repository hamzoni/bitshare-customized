(window.webpackJsonp = window.webpackJsonp || []).push([
    [10],
    {
        1732: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(29),
                s = n(45),
                i = n(67),
                l = n(1),
                c = n.n(l),
                u = (function() {
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
            var p = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
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
                    })(t, r.a.Component),
                    u(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = Number(
                                        this.props.balance.get("balance")
                                    ),
                                    t = this.props.balance.get("asset_type");
                                return r.a.createElement(o.a, {
                                    amount: e,
                                    asset: t,
                                    asPercentage: this.props.asPercentage,
                                    assetInfo: this.props.assetInfo,
                                    replace: this.props.replace,
                                    hide_asset: this.props.hide_asset
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            (p.propTypes = {
                balance: s.a.ChainObject.isRequired,
                assetInfo: c.a.node,
                hide_asset: c.a.bool
            }),
                (p.defaultProps = {hide_asset: !1}),
                (t.a = Object(i.a)(p));
        },
        1735: function(e, t, n) {
            "use strict";
            var a = n(22),
                r = n(13),
                o = n(16),
                s = n(179),
                i = n(19),
                l = n(10),
                c = n(1769),
                u = n.n(c),
                p = n(91),
                m = (function() {
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
            var f = {},
                h = (function() {
                    function e() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e);
                    }
                    return (
                        m(e, [
                            {
                                key: "publishFeed",
                                value: function(e) {
                                    var t = e.publisher,
                                        n = e.asset_id,
                                        a = e.mcr,
                                        r = e.mssr,
                                        o = e.settlementPrice,
                                        l = e.cer,
                                        c = s.a.new_transaction();
                                    return (
                                        c.add_type_operation(
                                            "asset_publish_feed",
                                            {
                                                publisher: t,
                                                asset_id: n,
                                                feed: {
                                                    settlement_price: o.toObject(),
                                                    maintenance_collateral_ratio: a,
                                                    maximum_short_squeeze_ratio: r,
                                                    core_exchange_rate: l.toObject()
                                                }
                                            }
                                        ),
                                        function(e) {
                                            return i.a
                                                .process_transaction(
                                                    c,
                                                    null,
                                                    !0
                                                )
                                                .then(function() {
                                                    e(!0);
                                                })
                                                .catch(function(t) {
                                                    console.log(
                                                        "[AssetActions.js:150] ----- fundPool error -----\x3e",
                                                        t
                                                    ),
                                                        e(!1);
                                                });
                                        }
                                    );
                                }
                            },
                            {
                                key: "fundPool",
                                value: function(e, t, n, a) {
                                    var r = s.a.new_transaction(),
                                        l = o.a.get_asset_precision(
                                            t.get("precision")
                                        );
                                    return (
                                        r.add_type_operation(
                                            "asset_fund_fee_pool",
                                            {
                                                fee: {
                                                    amount: 0,
                                                    asset_id: "1.3.0"
                                                },
                                                from_account: e,
                                                asset_id: n.get("id"),
                                                amount: a * l
                                            }
                                        ),
                                        function(e) {
                                            return i.a
                                                .process_transaction(
                                                    r,
                                                    null,
                                                    !0
                                                )
                                                .then(function() {
                                                    e(!0);
                                                })
                                                .catch(function(t) {
                                                    console.log(
                                                        "[AssetActions.js:150] ----- fundPool error -----\x3e",
                                                        t
                                                    ),
                                                        e(!1);
                                                });
                                        }
                                    );
                                }
                            },
                            {
                                key: "claimPool",
                                value: function(e, t) {
                                    var n = s.a.new_transaction();
                                    return (
                                        n.add_type_operation(
                                            "asset_claim_pool",
                                            {
                                                fee: {
                                                    amount: 0,
                                                    asset_id: "1.3.0"
                                                },
                                                issuer: e.get("issuer"),
                                                asset_id: e.get("id"),
                                                amount_to_claim: t.toObject()
                                            }
                                        ),
                                        function(e) {
                                            return i.a
                                                .process_transaction(
                                                    n,
                                                    null,
                                                    !0
                                                )
                                                .then(function() {
                                                    e(!0);
                                                })
                                                .catch(function(t) {
                                                    console.log(
                                                        "[AssetActions.js:150] ----- claimPool error -----\x3e",
                                                        t
                                                    ),
                                                        e(!1);
                                                });
                                        }
                                    );
                                }
                            },
                            {
                                key: "updateOwner",
                                value: function(e, t) {
                                    var n = s.a.new_transaction();
                                    return (
                                        n.add_type_operation(
                                            "asset_update_issuer",
                                            {
                                                fee: {
                                                    amount: 0,
                                                    asset_id: "1.3.0"
                                                },
                                                issuer: e.issuer,
                                                asset_to_update: e.id,
                                                new_issuer: t
                                            }
                                        ),
                                        function(e) {
                                            return i.a
                                                .process_transaction(
                                                    n,
                                                    null,
                                                    !0
                                                )
                                                .then(function() {
                                                    e(!0);
                                                })
                                                .catch(function(t) {
                                                    console.log(
                                                        "[AssetActions.js:150] ----- updateOwner error -----\x3e",
                                                        t
                                                    ),
                                                        e(!1);
                                                });
                                        }
                                    );
                                }
                            },
                            {
                                key: "updateFeedProducers",
                                value: function(e, t, n) {
                                    var a = s.a.new_transaction();
                                    return (
                                        a.add_type_operation(
                                            "asset_update_feed_producers",
                                            {
                                                fee: {
                                                    amount: 0,
                                                    asset_id: "1.3.0"
                                                },
                                                issuer: e,
                                                asset_to_update: t.get("id"),
                                                new_feed_producers: n
                                            }
                                        ),
                                        function(e) {
                                            return i.a
                                                .process_transaction(
                                                    a,
                                                    null,
                                                    !0
                                                )
                                                .then(function() {
                                                    e(!0);
                                                })
                                                .catch(function(t) {
                                                    console.log(
                                                        "[AssetActions.js:150] ----- updateFeedProducers error -----\x3e",
                                                        t
                                                    ),
                                                        e(!1);
                                                });
                                        }
                                    );
                                }
                            },
                            {
                                key: "claimPoolFees",
                                value: function(e, t, n) {
                                    var a = s.a.new_transaction();
                                    return (
                                        a.add_type_operation(
                                            "asset_claim_fees",
                                            {
                                                fee: {amount: 0, asset_id: 0},
                                                issuer: e,
                                                amount_to_claim: {
                                                    asset_id: t.get("id"),
                                                    amount: n.getAmount()
                                                }
                                            }
                                        ),
                                        function(e) {
                                            return i.a
                                                .process_transaction(
                                                    a,
                                                    null,
                                                    !0
                                                )
                                                .then(function() {
                                                    e(!0);
                                                })
                                                .catch(function(t) {
                                                    console.log(
                                                        "[AssetActions.js:150] ----- claimFees error -----\x3e",
                                                        t
                                                    ),
                                                        e(!1);
                                                });
                                        }
                                    );
                                }
                            },
                            {
                                key: "createAsset",
                                value: function(e, t, n, a, r, c, p, m, f) {
                                    console.log(
                                        "create asset:",
                                        t,
                                        "flags:",
                                        n,
                                        "isBitAsset:",
                                        c,
                                        "bitasset_opts:",
                                        m
                                    );
                                    var h = s.a.new_transaction(),
                                        d = o.a.get_asset_precision(
                                            t.precision
                                        );
                                    u.a.config({DECIMAL_PLACES: t.precision});
                                    var b = new u.a(t.max_supply)
                                            .times(d)
                                            .toString(),
                                        y = new u.a(t.max_market_fee || 0)
                                            .times(d)
                                            .toString(),
                                        g = o.a.get_asset_precision(
                                            l.ChainStore.getAsset(
                                                r.base.asset_id
                                            ).get("precision")
                                        ),
                                        v = {
                                            fee: {amount: 0, asset_id: 0},
                                            issuer: e,
                                            symbol: t.symbol,
                                            precision: parseInt(
                                                t.precision,
                                                10
                                            ),
                                            common_options: {
                                                max_supply: b,
                                                market_fee_percent:
                                                    100 *
                                                        t.market_fee_percent ||
                                                    0,
                                                max_market_fee: y,
                                                issuer_permissions: a,
                                                flags: n,
                                                core_exchange_rate: {
                                                    base: {
                                                        amount:
                                                            r.base.amount * g,
                                                        asset_id:
                                                            r.base.asset_id
                                                    },
                                                    quote: {
                                                        amount:
                                                            r.quote.amount * d,
                                                        asset_id: "1.3.1"
                                                    }
                                                },
                                                whitelist_authorities: [],
                                                blacklist_authorities: [],
                                                whitelist_markets: [],
                                                blacklist_markets: [],
                                                description: f,
                                                extensions: null
                                            },
                                            is_prediction_market: p,
                                            extensions: null
                                        };
                                    return (
                                        c && (v.bitasset_opts = m),
                                        h.add_type_operation("asset_create", v),
                                        function(e) {
                                            return i.a
                                                .process_transaction(
                                                    h,
                                                    null,
                                                    !0
                                                )
                                                .then(function(t) {
                                                    e(!0);
                                                })
                                                .catch(function(t) {
                                                    console.log(
                                                        "[AssetActions.js:150] ----- createAsset error -----\x3e",
                                                        t
                                                    ),
                                                        e(!1);
                                                });
                                        }
                                    );
                                }
                            },
                            {
                                key: "updateAsset",
                                value: function(
                                    e,
                                    t,
                                    n,
                                    a,
                                    r,
                                    c,
                                    p,
                                    m,
                                    f,
                                    h,
                                    d,
                                    b,
                                    y,
                                    g,
                                    v
                                ) {
                                    var _ = s.a.new_transaction();
                                    if (v) {
                                        var k = o.a.get_asset_precision(
                                            r.get("precision")
                                        );
                                        u.a.config({
                                            DECIMAL_PLACES: r.get("precision")
                                        });
                                        var E = new u.a(n.max_supply)
                                                .times(k)
                                                .toString(),
                                            w = new u.a(n.max_market_fee || 0)
                                                .times(k)
                                                .toString(),
                                            x = l.ChainStore.getAsset(
                                                a.quote.asset_id
                                            ),
                                            O = o.a.get_asset_precision(
                                                x.get("precision")
                                            ),
                                            C = l.ChainStore.getAsset(
                                                a.base.asset_id
                                            ),
                                            S = o.a.get_asset_precision(
                                                C.get("precision")
                                            ),
                                            j = new u.a(a.quote.amount)
                                                .times(O)
                                                .toString(),
                                            A = new u.a(a.base.amount)
                                                .times(S)
                                                .toString();
                                        console.log("auths:", b);
                                        var T = {
                                            fee: {amount: 0, asset_id: 0},
                                            asset_to_update: r.get("id"),
                                            extensions: r.get("extensions"),
                                            issuer: e,
                                            new_issuer: t,
                                            new_options: {
                                                max_supply: E,
                                                max_market_fee: w,
                                                market_fee_percent:
                                                    100 * n.market_fee_percent,
                                                description: d,
                                                issuer_permissions: p,
                                                flags: c,
                                                whitelist_authorities: b.whitelist_authorities.toJS(),
                                                blacklist_authorities: b.blacklist_authorities.toJS(),
                                                whitelist_markets: b.whitelist_markets.toJS(),
                                                blacklist_markets: b.blacklist_markets.toJS(),
                                                extensions: r.getIn([
                                                    "options",
                                                    "extensions"
                                                ]),
                                                core_exchange_rate: {
                                                    quote: {
                                                        amount: j,
                                                        asset_id:
                                                            a.quote.asset_id
                                                    },
                                                    base: {
                                                        amount: A,
                                                        asset_id:
                                                            a.base.asset_id
                                                    }
                                                }
                                            }
                                        };
                                        (e !== t && t) || delete T.new_issuer,
                                            _.add_type_operation(
                                                "asset_update",
                                                T
                                            );
                                    }
                                    if (
                                        (console.log(
                                            "bitasset_opts:",
                                            f,
                                            "original_bitasset_opts:",
                                            h
                                        ),
                                        m &&
                                            (f.feed_lifetime_sec !==
                                                h.feed_lifetime_sec ||
                                                f.minimum_feeds !==
                                                    h.minimum_feeds ||
                                                f.force_settlement_delay_sec !==
                                                    h.force_settlement_delay_sec ||
                                                f.force_settlement_offset_percent !==
                                                    h.force_settlement_offset_percent ||
                                                f.maximum_force_settlement_volume !==
                                                    h.maximum_force_settlement_volume ||
                                                f.short_backing_asset !==
                                                    h.short_backing_asset))
                                    ) {
                                        var P = {
                                            fee: {amount: 0, asset_id: 0},
                                            asset_to_update: r.get("id"),
                                            issuer: e,
                                            new_options: f
                                        };
                                        _.add_type_operation(
                                            "asset_update_bitasset",
                                            P
                                        );
                                    }
                                    return (
                                        console.log(
                                            "feedProducers:",
                                            y,
                                            "originalFeedProducers:",
                                            g
                                        ),
                                        m &&
                                            !o.a.are_equal_shallow(y, g) &&
                                            _.add_type_operation(
                                                "asset_update_feed_producers",
                                                {
                                                    fee: {
                                                        amount: 0,
                                                        asset_id: "1.3.0"
                                                    },
                                                    issuer: e,
                                                    asset_to_update: r.get(
                                                        "id"
                                                    ),
                                                    new_feed_producers: y
                                                }
                                            ),
                                        i.a
                                            .process_transaction(_, null, !0)
                                            .then(function(e) {
                                                return !0;
                                            })
                                            .catch(function(e) {
                                                return (
                                                    console.log(
                                                        "[AssetActions.js:150] ----- updateAsset error -----\x3e",
                                                        e
                                                    ),
                                                    !1
                                                );
                                            })
                                    );
                                }
                            },
                            {
                                key: "getAssetList",
                                value: function(e, t) {
                                    var n = this,
                                        a =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2] &&
                                            arguments[2],
                                        o = e + "_" + t;
                                    return function(s) {
                                        if (!f[o]) {
                                            var i;
                                            return (
                                                (f[o] = !0),
                                                s({loading: !0}),
                                                (i = r.Apis.instance()
                                                    .db_api()
                                                    .exec("list_assets", [e, t])
                                                    .then(function(e) {
                                                        var t = [],
                                                            n = [];
                                                        e.forEach(function(e) {
                                                            l.ChainStore._updateObject(
                                                                e,
                                                                !1
                                                            ),
                                                                n.push(
                                                                    e.dynamic_asset_data_id
                                                                ),
                                                                e.bitasset_data_id &&
                                                                    t.push(
                                                                        e.bitasset_data_id
                                                                    );
                                                        });
                                                        var a = r.Apis.instance()
                                                                .db_api()
                                                                .exec(
                                                                    "get_objects",
                                                                    [n]
                                                                ),
                                                            i =
                                                                t.length > 0
                                                                    ? r.Apis.instance()
                                                                          .db_api()
                                                                          .exec(
                                                                              "get_objects",
                                                                              [
                                                                                  t
                                                                              ]
                                                                          )
                                                                    : null;
                                                        Promise.all([
                                                            a,
                                                            i
                                                        ]).then(function(t) {
                                                            return (
                                                                delete f[o],
                                                                s({
                                                                    assets: e,
                                                                    dynamic:
                                                                        t[0],
                                                                    bitasset_data:
                                                                        t[1],
                                                                    loading: !1
                                                                }),
                                                                e && e.length
                                                            );
                                                        });
                                                    })
                                                    .catch(function(e) {
                                                        console.log(
                                                            "Error in AssetActions.getAssetList: ",
                                                            e
                                                        ),
                                                            s({loading: !1}),
                                                            delete f[o];
                                                    })),
                                                a &&
                                                    p.c.forEach(function(t) {
                                                        n.getAssetList(
                                                            t + "." + e,
                                                            10
                                                        );
                                                    }),
                                                i
                                            );
                                        }
                                    };
                                }
                            },
                            {
                                key: "lookupAsset",
                                value: function(e, t) {
                                    var n = l.ChainStore.getAsset(e);
                                    return n
                                        ? {assets: [n], searchID: t, symbol: e}
                                        : function(n) {
                                              setTimeout(function() {
                                                  var a = l.ChainStore.getAsset(
                                                      e
                                                  );
                                                  a &&
                                                      n({
                                                          assets: [a],
                                                          searchID: t,
                                                          symbol: e
                                                      });
                                              }, 200);
                                          };
                                }
                            },
                            {
                                key: "reserveAsset",
                                value: function(e, t, n) {
                                    var a = s.a.new_transaction();
                                    return (
                                        a.add_type_operation("asset_reserve", {
                                            fee: {amount: 0, asset_id: 0},
                                            amount_to_reserve: {
                                                amount: e,
                                                asset_id: t
                                            },
                                            payer: n,
                                            extensions: []
                                        }),
                                        function(e) {
                                            return i.a
                                                .process_transaction(
                                                    a,
                                                    null,
                                                    !0
                                                )
                                                .then(function() {
                                                    return e(!0), !0;
                                                })
                                                .catch(function(t) {
                                                    return (
                                                        e(!1),
                                                        console.log(
                                                            "[AssetActions.js:150] ----- reserveAsset error -----\x3e",
                                                            t
                                                        ),
                                                        !1
                                                    );
                                                });
                                        }
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })();
            t.a = a.a.createActions(h);
        },
        1736: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return _;
            }),
                n.d(t, "a", function() {
                    return v;
                });
            var a = n(0),
                r = n.n(a),
                o = n(1),
                s = n.n(o),
                i = n(7),
                l = n.n(i),
                c = n(31),
                u = n(21),
                p = n(20),
                m = n(15),
                f = n.n(m),
                h = n(2077),
                d = (function() {
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
            function b(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function y(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function g(e, t) {
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
            }
            var v = (function(e) {
                function t() {
                    return (
                        b(this, t),
                        y(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    g(t, r.a.Component),
                    d(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.isActive,
                                    n = e.index,
                                    a = e.changeTab,
                                    o = e.title,
                                    s = e.className,
                                    i = e.updatedTab,
                                    c = e.disabled,
                                    u = e.subText,
                                    p = l()({"is-active": t}, s);
                                return (
                                    "string" == typeof o &&
                                        o.indexOf(".") > 0 &&
                                        (o = f.a.translate(o)),
                                    this.props.collapsed
                                        ? ("string" == typeof u &&
                                              (u = u.trim()),
                                          r.a.createElement(
                                              "option",
                                              {
                                                  value: n,
                                                  "data-is-link-to": this.props
                                                      .isLinkTo
                                              },
                                              r.a.createElement(
                                                  "span",
                                                  {className: "tab-title"},
                                                  o,
                                                  i ? "*" : "",
                                                  u && " (",
                                                  u && u,
                                                  u && ")"
                                              )
                                          ))
                                        : r.a.createElement(
                                              "li",
                                              {
                                                  className: p,
                                                  onClick: c
                                                      ? null
                                                      : a.bind(
                                                            this,
                                                            n,
                                                            this.props.isLinkTo
                                                        )
                                              },
                                              r.a.createElement(
                                                  "a",
                                                  null,
                                                  r.a.createElement(
                                                      "span",
                                                      {className: "tab-title"},
                                                      o,
                                                      i ? "*" : ""
                                                  ),
                                                  u &&
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "tab-subtext"
                                                          },
                                                          u
                                                      )
                                              )
                                          )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (v.propTypes = {
                changeTab: s.a.func,
                isActive: s.a.bool.isRequired,
                index: s.a.number.isRequired,
                className: s.a.string,
                isLinkTo: s.a.string,
                subText: s.a.oneOfType([s.a.object, s.a.string])
            }),
                (v.defaultProps = {
                    isActive: !1,
                    index: 0,
                    className: "",
                    isLinkTo: "",
                    subText: null
                });
            var _ = (function(e) {
                function t(e) {
                    b(this, t);
                    var n = y(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (n.state = {
                            activeTab: e.setting
                                ? e.viewSettings.get(
                                      e.setting,
                                      e.defaultActiveTab
                                  )
                                : e.defaultActiveTab,
                            width: window.innerWidth
                        }),
                        (n._setDimensions = n._setDimensions.bind(n)),
                        n
                    );
                }
                return (
                    g(t, r.a.Component),
                    d(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this._setDimensions(),
                                    window.addEventListener(
                                        "resize",
                                        this._setDimensions,
                                        {capture: !1, passive: !0}
                                    );
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = e.viewSettings.get(e.setting);
                                t !==
                                    this.props.viewSettings.get(
                                        this.props.setting
                                    ) && this.setState({activeTab: t});
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                window.removeEventListener(
                                    "resize",
                                    this._setDimensions
                                );
                            }
                        },
                        {
                            key: "_setDimensions",
                            value: function() {
                                var e = window.innerWidth;
                                e !== this.state.width &&
                                    this.setState({width: e});
                            }
                        },
                        {
                            key: "_changeTab",
                            value: function(e, t) {
                                e !== this.state.activeTab &&
                                    ("" !== t && this.props.history.push(t),
                                    this.props.setting &&
                                        u.a.changeViewSetting(
                                            (function(e, t, n) {
                                                return (
                                                    t in e
                                                        ? Object.defineProperty(
                                                              e,
                                                              t,
                                                              {
                                                                  value: n,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              }
                                                          )
                                                        : (e[t] = n),
                                                    e
                                                );
                                            })({}, this.props.setting, e)
                                        ),
                                    this.setState({activeTab: e}),
                                    this.props.onChangeTab &&
                                        this.props.onChangeTab(e));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.children,
                                    a = t.contentClass,
                                    o = t.tabsClass,
                                    s = t.style,
                                    i = t.segmented,
                                    c =
                                        this.state.width < 900 &&
                                        r.a.Children.count(n) > 2,
                                    u = null,
                                    p = r.a.Children.map(n, function(t, n) {
                                        if (!t) return null;
                                        if (c && t.props.disabled) return null;
                                        var a = n === e.state.activeTab;
                                        return (
                                            a && (u = t.props.children),
                                            r.a.cloneElement(t, {
                                                collapsed: c,
                                                isActive: a,
                                                changeTab: e._changeTab.bind(e),
                                                index: n
                                            })
                                        );
                                    }).filter(function(e) {
                                        return null !== e;
                                    });
                                return (
                                    u || (u = p[0].props.children),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: l()(
                                                this.props.actionButtons
                                                    ? "with-buttons"
                                                    : "",
                                                this.props.className
                                            )
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "service-selector"},
                                            r.a.createElement(
                                                "ul",
                                                {
                                                    style: s,
                                                    className: l()(
                                                        "button-group no-margin",
                                                        o,
                                                        {segmented: i}
                                                    )
                                                },
                                                c
                                                    ? r.a.createElement(
                                                          "li",
                                                          {
                                                              style: {
                                                                  paddingLeft: 10,
                                                                  paddingRight: 10,
                                                                  minWidth:
                                                                      "15rem"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              "select",
                                                              {
                                                                  value: this
                                                                      .state
                                                                      .activeTab,
                                                                  style: {
                                                                      marginTop: 10,
                                                                      marginBottom: 10
                                                                  },
                                                                  className:
                                                                      "bts-select",
                                                                  onChange: function(
                                                                      t
                                                                  ) {
                                                                      var n = parseInt(
                                                                          t
                                                                              .target
                                                                              .value,
                                                                          10
                                                                      );
                                                                      e._changeTab(
                                                                          n,
                                                                          t
                                                                              .target[
                                                                              n
                                                                          ]
                                                                              .attributes[
                                                                              "data-is-link-to"
                                                                          ]
                                                                              .value
                                                                      );
                                                                  }
                                                              },
                                                              p
                                                          )
                                                      )
                                                    : p,
                                                this.props.actionButtons
                                                    ? r.a.createElement(
                                                          "li",
                                                          {
                                                              className:
                                                                  "tabs-action-buttons"
                                                          },
                                                          this.props
                                                              .actionButtons
                                                      )
                                                    : null
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: l()("tab-content", a)},
                                            u
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (_.propTypes = {
                setting: s.a.string,
                defaultActiveTab: s.a.number,
                segmented: s.a.bool
            }),
                (_.defaultProps = {
                    active: 0,
                    defaultActiveTab: 0,
                    segmented: !0,
                    contentClass: "",
                    style: {}
                }),
                (_ = Object(c.connect)(_, {
                    listenTo: function() {
                        return [p.a];
                    },
                    getProps: function() {
                        return {viewSettings: p.a.getState().viewSettings};
                    }
                })),
                (_ = Object(h.a)(_));
        },
        1737: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(1774),
                s = n.n(o),
                i = (function() {
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
            var l = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {animateEnter: !1}), (e.timer = null), e;
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
                    })(t, r.a.Component),
                    i(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.enableAnimation();
                            }
                        },
                        {
                            key: "resetAnimation",
                            value: function() {
                                this.setState({animateEnter: !1}),
                                    this.enableAnimation();
                            }
                        },
                        {
                            key: "enableAnimation",
                            value: function() {
                                var e = this;
                                this.timer = setTimeout(function() {
                                    e.timer && e.setState({animateEnter: !0});
                                }, 2e3);
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                clearTimeout(this.timer), (this.timer = null);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.props.children
                                    ? r.a.createElement(
                                          s.a,
                                          {
                                              className: this.props.className,
                                              component: this.props.component,
                                              transitionName: this.props
                                                  .transitionName,
                                              transitionEnterTimeout: this.props
                                                  .enterTimeout,
                                              transitionEnter: this.state
                                                  .animateEnter,
                                              transitionLeave: !1
                                          },
                                          this.props.children
                                      )
                                    : r.a.createElement(this.props.component);
                            }
                        }
                    ]),
                    t
                );
            })();
            (l.defaultProps = {component: "span", enterTimeout: 2e3}),
                (t.a = l);
        },
        1743: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(257),
                s = n(15),
                i = n.n(s),
                l = n(1737),
                c = (function() {
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
            var u = (function(e) {
                function t(e) {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var n = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (n.state = {page: 1, pageSize: e.pageSize}), n;
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
                    })(t, r.a.Component),
                    c(t, [
                        {
                            key: "onChange",
                            value: function(e, t) {
                                this.setState({page: e, pageSize: t});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.state,
                                    n = t.page,
                                    a = t.pageSize,
                                    s = this.props,
                                    c = s.header,
                                    u = s.rows,
                                    p = s.extraRow,
                                    m = u.length,
                                    f = h(n, a);
                                function h(e, t) {
                                    for (
                                        var n = [], a = (e - 1) * t;
                                        a < Math.min(m, e * t);
                                        a++
                                    )
                                        n.push(u[a]);
                                    return n;
                                }
                                return (
                                    !f.length && m && (f = h(1, a)),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: "grid-content",
                                            style: this.props.style
                                        },
                                        r.a.createElement(
                                            "table",
                                            {className: this.props.className},
                                            c
                                                ? r.a.createElement(
                                                      "thead",
                                                      null,
                                                      c
                                                  )
                                                : null,
                                            this.props.withTransition && 1 === n
                                                ? r.a.createElement(
                                                      l.a,
                                                      {
                                                          component: "tbody",
                                                          transitionName:
                                                              "newrow"
                                                      },
                                                      f,
                                                      p
                                                  )
                                                : r.a.createElement(
                                                      "tbody",
                                                      null,
                                                      f,
                                                      p
                                                  )
                                        ),
                                        m > a
                                            ? r.a.createElement(o.a, {
                                                  style: {
                                                      paddingTop: "1rem",
                                                      paddingBottom: "1rem",
                                                      paddingLeft:
                                                          this.props
                                                              .leftPadding ||
                                                          null
                                                  },
                                                  total: m,
                                                  showTotal: function(t) {
                                                      return i.a.translate(
                                                          e.props.label,
                                                          {count: t}
                                                      );
                                                  },
                                                  pageSize: a,
                                                  current: n,
                                                  onChange: this.onChange.bind(
                                                      this
                                                  )
                                              })
                                            : null,
                                        this.props.children
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (u.defaultProps = {
                rows: [],
                pageSize: 15,
                label: "utility.total_x_items",
                className: "table",
                extraRow: null,
                style: {paddingBottom: "1rem"}
            }),
                (t.a = u);
        },
        1748: function(e, t, n) {
            "use strict";
            var a = n(89),
                r = n(11),
                o = n.n(r),
                s = n(22),
                i = n(1735),
                l = (function() {
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
            var c = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (e.assets = o.a.Map()),
                        (e.asset_symbol_to_id = {}),
                        (e.searchTerms = {}),
                        (e.lookupResults = []),
                        (e.assetsLoading = !1),
                        e.bindListeners({
                            onGetAssetList: i.a.getAssetList,
                            onLookupAsset: i.a.lookupAsset
                        }),
                        e
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
                    })(t, a["a"]),
                    l(t, [
                        {
                            key: "onGetAssetList",
                            value: function(e) {
                                var t = this;
                                if (!e) return !1;
                                (this.assetsLoading = e.loading),
                                    e.assets &&
                                        e.assets.forEach(function(n) {
                                            for (
                                                var a = 0;
                                                a < e.dynamic.length;
                                                a++
                                            )
                                                if (
                                                    e.dynamic[a].id ===
                                                    n.dynamic_asset_data_id
                                                ) {
                                                    n.dynamic = e.dynamic[a];
                                                    break;
                                                }
                                            if (n.bitasset_data_id) {
                                                n.market_asset = !0;
                                                for (
                                                    a = 0;
                                                    a < e.bitasset_data.length;
                                                    a++
                                                )
                                                    if (
                                                        e.bitasset_data[a]
                                                            .id ===
                                                        n.bitasset_data_id
                                                    ) {
                                                        n.bitasset_data =
                                                            e.bitasset_data[a];
                                                        break;
                                                    }
                                            } else n.market_asset = !1;
                                            (t.assets = t.assets.set(n.id, n)),
                                                (t.asset_symbol_to_id[
                                                    n.symbol
                                                ] =
                                                    n.id);
                                        });
                            }
                        },
                        {
                            key: "onLookupAsset",
                            value: function(e) {
                                (this.searchTerms[e.searchID] = e.symbol),
                                    (this.lookupResults = e.assets);
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = s.a.createStore(c, "AssetStore");
        },
        1749: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(3),
                s = n.n(o),
                i = n(10),
                l = n(45),
                c = n(67),
                u = n(15),
                p = n.n(u),
                m = n(500),
                f = n(29),
                h = n(11),
                d = n.n(h),
                b = n(7),
                y = n.n(b),
                g = n(149),
                v = n(1),
                _ = n.n(v),
                k = (function() {
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
            function E(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function w(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function x(e, t) {
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
            }
            var O = (function(e) {
                function t() {
                    return (
                        E(this, t),
                        w(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    x(t, r.a.Component),
                    k(t, [
                        {
                            key: "render",
                            value: function() {
                                return 0 !== this.props.assets.length &&
                                    this.props.value
                                    ? r.a.createElement(m.a, {
                                          entries: this.props.assets
                                              .map(function(e) {
                                                  return e && e.get("symbol");
                                              })
                                              .filter(function(e) {
                                                  return !!e;
                                              }),
                                          values: this.props.assets.reduce(
                                              function(e, t) {
                                                  return (
                                                      t &&
                                                          t.get("symbol") &&
                                                          (e[
                                                              t.get("symbol")
                                                          ] = t),
                                                      e
                                                  );
                                              },
                                              {}
                                          ),
                                          singleEntry: this.props.assets[0]
                                              ? r.a.createElement(f.a, {
                                                    asset: this.props.assets[0].get(
                                                        "id"
                                                    ),
                                                    amount: 0,
                                                    hide_amount: !0
                                                })
                                              : null,
                                          value: "",
                                          onChange: this.props.onChange
                                      })
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            (O.propTypes = {value: _.a.string, onChange: _.a.func}),
                (O = Object(g.a)(O, {asList: !0}));
            var C = (function(e) {
                function t() {
                    return (
                        E(this, t),
                        w(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    x(t, r.a.Component),
                    k(t, [
                        {
                            key: "getAsset",
                            value: function() {
                                return this.props.asset;
                            }
                        },
                        {
                            key: "getError",
                            value: function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props.assetInput,
                                    t = this.props.error;
                                return (
                                    t ||
                                        !e ||
                                        this.getNameType(e) ||
                                        (t = p.a.translate(
                                            "explorer.asset.invalid",
                                            {name: e}
                                        )),
                                    t
                                );
                            }
                        },
                        {
                            key: "getNameType",
                            value: function(e) {
                                return e
                                    ? i.ChainValidation.is_valid_symbol_error(
                                          e,
                                          !0
                                      )
                                        ? null
                                        : "symbol"
                                    : null;
                            }
                        },
                        {
                            key: "onInputChanged",
                            value: function(e) {
                                var t = e.target.value
                                    .trim()
                                    .substr(0, 16)
                                    .toUpperCase();
                                this.props.onChange &&
                                    t !== this.props.assetInput &&
                                    this.props.onChange(t);
                            }
                        },
                        {
                            key: "onKeyDown",
                            value: function(e) {
                                13 === e.keyCode &&
                                    (this.onFound(e), this.onAction(e));
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.props.onFound &&
                                    this.props.asset &&
                                    this.props.onFound(this.props.asset);
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                this.props.onFound &&
                                    e.asset !== this.props.asset &&
                                    this.props.onFound(e.asset);
                            }
                        },
                        {
                            key: "onFound",
                            value: function(e) {
                                e.preventDefault(),
                                    !this.props.onFound ||
                                        this.getError() ||
                                        this.props.disableActionButton ||
                                        (this.props.asset &&
                                            this.props.onFound(
                                                this.props.asset
                                            ));
                            }
                        },
                        {
                            key: "onAssetSelect",
                            value: function(e) {
                                e &&
                                    (this.props.onFound(e),
                                    this.props.onChange(e.get("symbol")));
                            }
                        },
                        {
                            key: "onAction",
                            value: function(e) {
                                e.preventDefault(),
                                    !this.props.onAction ||
                                        this.getError() ||
                                        this.props.disableActionButton ||
                                        (this.props.asset &&
                                            this.props.onAction(
                                                this.props.asset
                                            ));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.disabled,
                                    n = e.noLabel,
                                    a = this.getError(),
                                    o = void 0;
                                t ||
                                    (this.props.asset
                                        ? (o = this.props.asset.get("symbol"))
                                        : !a &&
                                          this.props.assetInput &&
                                          (a = p.a.translate(
                                              "explorer.asset.not_found",
                                              {name: this.props.assetInput}
                                          )));
                                var i = y()("button", {
                                    disabled:
                                        !this.props.asset ||
                                        a ||
                                        this.props.disableActionButton
                                });
                                return r.a.createElement(
                                    "div",
                                    {
                                        className: "asset-selector",
                                        style: this.props.style
                                    },
                                    r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {className: "header-area"},
                                            a || n
                                                ? null
                                                : r.a.createElement(
                                                      "label",
                                                      {
                                                          className:
                                                              "right-label"
                                                      },
                                                      "  ",
                                                      r.a.createElement(
                                                          "span",
                                                          null,
                                                          o
                                                      )
                                                  ),
                                            r.a.createElement(s.a, {
                                                component: "label",
                                                content: this.props.label
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: "input-area"},
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                r.a.createElement("input", {
                                                    style: this.props
                                                        .inputStyle,
                                                    disabled: this.props
                                                        .disabled,
                                                    type: "text",
                                                    value:
                                                        this.props.assetInput ||
                                                        "",
                                                    placeholder:
                                                        this.props
                                                            .placeholder ||
                                                        p.a.translate(
                                                            "explorer.assets.symbol"
                                                        ),
                                                    ref: "user_input",
                                                    onChange: this.onInputChanged.bind(
                                                        this
                                                    ),
                                                    onKeyDown: this.onKeyDown.bind(
                                                        this
                                                    ),
                                                    tabIndex: this.props
                                                        .tabIndex
                                                }),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    this.props.asset
                                                        ? r.a.createElement(O, {
                                                              ref: this.props
                                                                  .refCallback,
                                                              value: this.props.asset.get(
                                                                  "symbol"
                                                              ),
                                                              assets: d.a.List(
                                                                  this.props
                                                                      .assets
                                                              ),
                                                              onChange: this.onAssetSelect.bind(
                                                                  this
                                                              )
                                                          })
                                                        : null
                                                ),
                                                this.props.children,
                                                this.props.onAction
                                                    ? r.a.createElement(
                                                          "button",
                                                          {
                                                              className: i,
                                                              onClick: this.onAction.bind(
                                                                  this
                                                              )
                                                          },
                                                          r.a.createElement(
                                                              s.a,
                                                              {
                                                                  content: this
                                                                      .props
                                                                      .action_label
                                                              }
                                                          )
                                                      )
                                                    : null
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className: "error-area",
                                                style: {paddingBottom: "10px"}
                                            },
                                            r.a.createElement(
                                                "span",
                                                {
                                                    style: {
                                                        wordBreak: "break-all"
                                                    }
                                                },
                                                a
                                            )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (C.propTypes = {
                label: _.a.string,
                error: _.a.string,
                placeholder: _.a.string,
                onChange: _.a.func,
                onFound: _.a.func,
                assetInput: _.a.string,
                asset: l.a.ChainAsset,
                tabIndex: _.a.number,
                disableActionButton: _.a.bool
            }),
                (C.defaultProps = {disabled: !1}),
                (t.a = Object(c.a)(C));
        },
        1753: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return S;
            }),
                n.d(t, "a", function() {
                    return j;
                });
            var a = n(0),
                r = n.n(a),
                o = n(29),
                s = n(45),
                i = n(67),
                l = n(149),
                c = n(16),
                u = n(31),
                p = n(396),
                m = n(3),
                f = n.n(m),
                h = n(15),
                d = n.n(h),
                b = n(95),
                y = n.n(b),
                g = n(505),
                v = n(60),
                _ =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) &&
                                    (e[a] = n[a]);
                        }
                        return e;
                    },
                k = (function() {
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
            function E(e, t) {
                var n = {};
                for (var a in e)
                    t.indexOf(a) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, a) &&
                            (n[a] = e[a]));
                return n;
            }
            function w(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function x(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function O(e, t) {
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
            }
            var C = (function(e) {
                function t(e) {
                    return (
                        w(this, t),
                        x(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        )
                    );
                }
                return (
                    O(t, g["a"]),
                    k(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                y.a.rebuild();
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    (function e(t, n, a) {
                                        null === t && (t = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(
                                            t,
                                            n
                                        );
                                        if (void 0 === r) {
                                            var o = Object.getPrototypeOf(t);
                                            return null === o
                                                ? void 0
                                                : e(o, n, a);
                                        }
                                        if ("value" in r) return r.value;
                                        var s = r.get;
                                        return void 0 !== s
                                            ? s.call(a)
                                            : void 0;
                                    })(
                                        t.prototype.__proto__ ||
                                            Object.getPrototypeOf(t.prototype),
                                        "shouldComponentUpdate",
                                        this
                                    ).call(this, e) ||
                                    !c.a.are_equal_shallow(
                                        e.pulsate,
                                        this.props.pulsate
                                    ) ||
                                    e.toAsset !== this.props.toAsset ||
                                    e.fromAsset !== this.props.fromAsset ||
                                    e.amount !== this.props.amount
                                );
                            }
                        },
                        {
                            key: "getValue",
                            value: function() {
                                var e = this.props,
                                    t = e.amount,
                                    n = e.toAsset,
                                    a = e.fromAsset,
                                    r = e.fullPrecision,
                                    o = e.allMarketStats,
                                    s = e.coreAsset;
                                return v.a.convertValue(t, n, a, o, s, r);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.amount,
                                    n = e.toAsset,
                                    a = e.fromAsset,
                                    s = e.fullPrecision,
                                    i = E(e, [
                                        "amount",
                                        "toAsset",
                                        "fromAsset",
                                        "fullPrecision"
                                    ]),
                                    l = n.get("id"),
                                    u = n.get("symbol");
                                s || (t = c.a.get_asset_amount(t, a));
                                var p = this.getValue();
                                return p || 0 === p
                                    ? r.a.createElement(
                                          o.a,
                                          _(
                                              {
                                                  noPrefix: !0,
                                                  amount: p,
                                                  asset: l,
                                                  decimalOffset:
                                                      -1 !== u.indexOf("BTC")
                                                          ? 4
                                                          : this.props
                                                                .fullDecimals
                                                              ? 0
                                                              : this.props
                                                                    .noDecimals
                                                                  ? n.get(
                                                                        "precision"
                                                                    )
                                                                  : n.get(
                                                                        "precision"
                                                                    ) - 2
                                              },
                                              i
                                          )
                                      )
                                    : r.a.createElement(
                                          "div",
                                          {
                                              className: "tooltip inline-block",
                                              "data-place": "bottom",
                                              "data-tip": d.a.translate(
                                                  "tooltip.no_price"
                                              ),
                                              style: {fontSize: "0.9rem"}
                                          },
                                          r.a.createElement(f.a, {
                                              content: "account.no_price"
                                          })
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (C.defaultProps = {
                fullPrecision: !0,
                noDecimals: !1,
                fullDecimals: !1,
                hide_asset: !1
            }),
                (C = Object(l.a)(C, {
                    propNames: ["toAsset", "fromAsset", "coreAsset"],
                    defaultProps: {toAsset: "1.3.0", coreAsset: "1.3.0"}
                }));
            var S = (function(e) {
                function t() {
                    return (
                        w(this, t),
                        x(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    O(t, r.a.Component),
                    k(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.refCallback,
                                    n = E(e, ["refCallback"]);
                                return r.a.createElement(C, _({}, n, {ref: t}));
                            }
                        }
                    ]),
                    t
                );
            })();
            S = Object(u.connect)(S, {
                listenTo: function() {
                    return [p.a];
                },
                getProps: function() {
                    return {allMarketStats: p.a.getState().allMarketStats};
                }
            });
            var j = (function(e) {
                function t() {
                    return (
                        w(this, t),
                        x(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    O(t, r.a.Component),
                    k(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.balance,
                                    n = E(e, ["balance"]),
                                    a = !!t.getIn(["balance", "amount"]),
                                    o = Number(
                                        a
                                            ? t.getIn(["balance", "amount"])
                                            : t.get("balance")
                                    ),
                                    s = a
                                        ? t.getIn(["balance", "asset_id"])
                                        : t.get("asset_type");
                                return isNaN(o)
                                    ? r.a.createElement("span", null, "--")
                                    : r.a.createElement(
                                          S,
                                          _(
                                              {
                                                  amount: o,
                                                  fromAsset: s,
                                                  noDecimals: !0
                                              },
                                              n
                                          )
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (j.propTypes = {balance: s.a.ChainObject.isRequired}),
                (j = Object(i.a)(j, {keep_updating: !0}));
        },
        1801: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(45),
                s = n(67),
                i = n(132),
                l = (function() {
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
            var c = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
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
                    })(t, r.a.Component),
                    l(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.witness.get(
                                    "witness_account"
                                );
                                return r.a.createElement(i.a, {account: e});
                            }
                        }
                    ]),
                    t
                );
            })();
            (c.propTypes = {witness: o.a.ChainObject.isRequired}),
                (c = Object(s.a)(c)),
                (t.a = c);
        },
        1810: function(e, t, n) {
            "use strict";
            var a = n(1734),
                r = n(0),
                o = n.n(r),
                s = n(11),
                i = n.n(s),
                l = n(1742),
                c = n.n(l),
                u = n(16),
                p = n(3),
                m = n.n(p),
                f = n(28),
                h = n(31),
                d = n(29),
                b = n(149),
                y = n(45),
                g = n(67),
                v = (function() {
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
            var _ = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
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
                    })(t, o.a.Component),
                    v(t, [
                        {
                            key: "render",
                            value: function() {
                                return this.props.account
                                    ? o.a.createElement(
                                          "span",
                                          null,
                                          this.props.account.get("name")
                                      )
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            (_.propTypes = {account: y.a.ChainObject.isRequired}),
                (_.defaultProps = {autosubscribe: !1});
            var k = Object(g.a)(_),
                E = n(32),
                w = n(85),
                x = n(21),
                O = n(2077),
                C = (function() {
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
            var S = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.statsInterval = null), e;
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
                    })(t, o.a.Component),
                    C(t, [
                        {
                            key: "_onClick",
                            value: function(e) {
                                "/market/" + e !==
                                    this.props.location.pathname &&
                                    (w.a.switchMarket(),
                                    this.props.history.push("/market/" + e));
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                (this.statsChecked = new Date()),
                                    (this.statsInterval = w.a.getMarketStatsInterval(
                                        35e3,
                                        this.props.base,
                                        this.props.quote
                                    ));
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                this.statsInterval && this.statsInterval();
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return !u.a.are_equal_shallow(e, this.props);
                            }
                        },
                        {
                            key: "_onStar",
                            value: function(e, t, n) {
                                n.preventDefault(),
                                    this.props.starred
                                        ? x.a.removeStarMarket(e, t)
                                        : x.a.addStarMarket(e, t);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.quote,
                                    a = t.base,
                                    r = (t.noSymbols, t.stats),
                                    s = t.starred;
                                if (!n || !a) return null;
                                var i = n.get("symbol") + "_" + a.get("symbol"),
                                    l = n.get("symbol") + ":" + a.get("symbol"),
                                    c = this.props.getDynamicObject(
                                        n.get("dynamic_asset_data_id")
                                    ),
                                    p = this.props.getDynamicObject(
                                        a.get("dynamic_asset_data_id")
                                    ),
                                    m = u.a.convertPrice(n, a),
                                    f = {};
                                this.props.leftAlign && (f.textAlign = "left");
                                var h = "button outline",
                                    b = null;
                                this.props.compact &&
                                    ((h += " no-margin"),
                                    (b = {
                                        marginBottom: 0,
                                        fontSize: "0.75rem",
                                        padding: "4px 10px",
                                        borderRadius: "0px",
                                        letterSpacing: "0.05rem"
                                    }));
                                var y = this.props.columns
                                        .map(function(t) {
                                            switch (t.name) {
                                                case "star":
                                                    var f = s
                                                        ? "gold-star"
                                                        : "grey-star";
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onStar.bind(
                                                                e,
                                                                n.get("symbol"),
                                                                a.get("symbol")
                                                            ),
                                                            key: t.index
                                                        },
                                                        o.a.createElement(E.a, {
                                                            className: f,
                                                            name: "fi-star",
                                                            title:
                                                                "icons.fi_star.symbol"
                                                        })
                                                    );
                                                case "vol":
                                                    var y = r
                                                        ? r.volumeBase
                                                        : 0;
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            className:
                                                                "text-right",
                                                            key: t.index
                                                        },
                                                        u.a.format_volume(y)
                                                    );
                                                case "change":
                                                    var g = u.a.format_number(
                                                            r && r.change
                                                                ? r.change
                                                                : 0,
                                                            2
                                                        ),
                                                        v =
                                                            "0.00" === g
                                                                ? ""
                                                                : g > 0
                                                                    ? "change-up"
                                                                    : "change-down";
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            className:
                                                                "text-right " +
                                                                v,
                                                            key: t.index
                                                        },
                                                        g + "%"
                                                    );
                                                case "marketName":
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        o.a.createElement(
                                                            "div",
                                                            {
                                                                className: h,
                                                                style: b
                                                            },
                                                            l
                                                        )
                                                    );
                                                case "market":
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        e.props.name
                                                    );
                                                case "price":
                                                    var _ =
                                                            r && r.price
                                                                ? r.price.toReal()
                                                                : r &&
                                                                  r.close &&
                                                                  r.close.quote
                                                                      .amount &&
                                                                  r.close.base
                                                                      .amount
                                                                    ? u.a.get_asset_price(
                                                                          r
                                                                              .close
                                                                              .quote
                                                                              .amount,
                                                                          n,
                                                                          r
                                                                              .close
                                                                              .base
                                                                              .amount,
                                                                          a,
                                                                          !0
                                                                      )
                                                                    : u.a.get_asset_price(
                                                                          m
                                                                              .quote
                                                                              .amount,
                                                                          n,
                                                                          m.base
                                                                              .amount,
                                                                          a,
                                                                          !0
                                                                      ),
                                                        w = 6;
                                                    return (
                                                        -1 !==
                                                            [
                                                                "BTC",
                                                                "OPEN.BTC",
                                                                "TRADE.BTC",
                                                                "GOLD",
                                                                "SILVER"
                                                            ].indexOf(
                                                                a.get("symbol")
                                                            ) && (w = 8),
                                                        o.a.createElement(
                                                            "td",
                                                            {
                                                                onClick: e._onClick.bind(
                                                                    e,
                                                                    i
                                                                ),
                                                                className:
                                                                    "text-right",
                                                                key: t.index
                                                            },
                                                            u.a.format_number(
                                                                _,
                                                                _ > 1e3
                                                                    ? 0
                                                                    : _ > 10
                                                                        ? 2
                                                                        : w
                                                            )
                                                        )
                                                    );
                                                case "quoteSupply":
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        c
                                                            ? o.a.createElement(
                                                                  d.a,
                                                                  {
                                                                      style: {
                                                                          fontWeight:
                                                                              "bold"
                                                                      },
                                                                      amount: parseInt(
                                                                          c.get(
                                                                              "current_supply"
                                                                          ),
                                                                          10
                                                                      ),
                                                                      asset: n.get(
                                                                          "id"
                                                                      )
                                                                  }
                                                              )
                                                            : null
                                                    );
                                                case "baseSupply":
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        p
                                                            ? o.a.createElement(
                                                                  d.a,
                                                                  {
                                                                      style: {
                                                                          fontWeight:
                                                                              "bold"
                                                                      },
                                                                      amount: parseInt(
                                                                          p.get(
                                                                              "current_supply"
                                                                          ),
                                                                          10
                                                                      ),
                                                                      asset: a.get(
                                                                          "id"
                                                                      )
                                                                  }
                                                              )
                                                            : null
                                                    );
                                                case "issuer":
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        o.a.createElement(k, {
                                                            account: n.get(
                                                                "issuer"
                                                            )
                                                        })
                                                    );
                                                case "add":
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            },
                                                            key: t.index,
                                                            onClick: e.props.onCheckMarket.bind(
                                                                e,
                                                                i
                                                            )
                                                        },
                                                        o.a.createElement(
                                                            "input",
                                                            {
                                                                type:
                                                                    "checkbox",
                                                                checked:
                                                                    !!e.props
                                                                        .isChecked ||
                                                                    e.props
                                                                        .isDefault,
                                                                disabled:
                                                                    e.props
                                                                        .isDefault,
                                                                "data-tip": e
                                                                    .props
                                                                    .isDefault
                                                                    ? "This market is a default market and cannot be removed"
                                                                    : null
                                                            }
                                                        )
                                                    );
                                                case "remove":
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            key: t.index,
                                                            className:
                                                                "clickable",
                                                            onClick:
                                                                e.props
                                                                    .removeMarket
                                                        },
                                                        o.a.createElement(
                                                            "span",
                                                            {
                                                                style: {
                                                                    marginBottom:
                                                                        "6px",
                                                                    marginRight:
                                                                        "6px",
                                                                    zIndex: 999
                                                                },
                                                                className:
                                                                    "text float-right remove"
                                                            },
                                                            "–"
                                                        )
                                                    );
                                            }
                                        })
                                        .sort(function(e, t) {
                                            return e.key > t.key;
                                        }),
                                    g = "clickable";
                                return (
                                    this.props.current &&
                                        (g += " activeMarket"),
                                    o.a.createElement(
                                        "tr",
                                        {className: g, style: f},
                                        y
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (S.defaultProps = {noSymbols: !1}), (S = Object(O.a)(S));
            var j = Object(b.a)(S, {
                    propNames: ["quote", "base"],
                    defaultProps: {tempComponent: "tr"},
                    withDynamic: !0
                }),
                A = n(20),
                T = n(396),
                P = n(1748),
                N = n(131),
                M = n(1735),
                B = n(7),
                I = n.n(B),
                L = n(1749),
                D = n(15),
                q = n.n(D),
                R = n(38),
                W = n(10),
                F = n(1796),
                z = n.n(F),
                U = n(57),
                V = n.n(U),
                H = n(91),
                G = n(130),
                J = (function() {
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
            var K = (function(e) {
                    function t() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var e = (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (e.state = {
                                backingAsset: "",
                                error: !1,
                                valid: !1
                            }),
                            e
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
                        })(t, o.a.Component),
                        J(t, [
                            {
                                key: "_onMoveUp",
                                value: function(e) {
                                    var t = this.props.quotes.findIndex(
                                        function(t) {
                                            return t === e;
                                        }
                                    );
                                    x.a.modifyPreferedBases({
                                        oldIndex: t,
                                        newIndex: t - 1
                                    });
                                }
                            },
                            {
                                key: "_onMoveDown",
                                value: function(e) {
                                    var t = this.props.quotes.findIndex(
                                        function(t) {
                                            return t === e;
                                        }
                                    );
                                    x.a.modifyPreferedBases({
                                        oldIndex: t,
                                        newIndex: t + 1
                                    });
                                }
                            },
                            {
                                key: "_onRemove",
                                value: function(e) {
                                    var t = this.props.quotes.findIndex(
                                        function(t) {
                                            return t === e;
                                        }
                                    );
                                    t >= 0 &&
                                        x.a.modifyPreferedBases({remove: t});
                                }
                            },
                            {
                                key: "_onAdd",
                                value: function(e) {
                                    -1 ===
                                        this.props.quotes.findIndex(function(
                                            t
                                        ) {
                                            return t === e.get("symbol");
                                        }) &&
                                        x.a.modifyPreferedBases({
                                            add: e.get("symbol")
                                        });
                                }
                            },
                            {
                                key: "_onInputBackingAsset",
                                value: function(e) {
                                    this.setState({
                                        backingAsset: e.toUpperCase(),
                                        error: null
                                    });
                                }
                            },
                            {
                                key: "_onFoundBackingAsset",
                                value: function(e) {
                                    e &&
                                        (this.props.quotes.includes(
                                            e.get("symbol")
                                        )
                                            ? this.setState({
                                                  error:
                                                      "Asset already being used",
                                                  isValid: !1
                                              })
                                            : this.setState({isValid: !0}));
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.state.error,
                                        n = this.props.quotes.size;
                                    return o.a.createElement(
                                        G.a,
                                        {
                                            id: "quote_selection",
                                            overlay: !0,
                                            modalHeader:
                                                "exchange.quote_selection",
                                            noLogo: !0
                                        },
                                        o.a.createElement(
                                            "section",
                                            {
                                                className:
                                                    "block-list no-border-bottom"
                                            },
                                            o.a.createElement(
                                                "table",
                                                {className: "table"},
                                                o.a.createElement(
                                                    "thead",
                                                    null,
                                                    o.a.createElement(
                                                        "tr",
                                                        null,
                                                        o.a.createElement(
                                                            "th",
                                                            null
                                                        ),
                                                        o.a.createElement(
                                                            "th",
                                                            null,
                                                            o.a.createElement(
                                                                m.a,
                                                                {
                                                                    content:
                                                                        "account.quote"
                                                                }
                                                            )
                                                        ),
                                                        o.a.createElement(
                                                            "th",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "center"
                                                                }
                                                            },
                                                            o.a.createElement(
                                                                m.a,
                                                                {
                                                                    content:
                                                                        "exchange.move_down"
                                                                }
                                                            )
                                                        ),
                                                        o.a.createElement(
                                                            "th",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "center"
                                                                }
                                                            },
                                                            o.a.createElement(
                                                                m.a,
                                                                {
                                                                    content:
                                                                        "exchange.move_up"
                                                                }
                                                            )
                                                        ),
                                                        o.a.createElement(
                                                            "th",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "center"
                                                                }
                                                            },
                                                            o.a.createElement(
                                                                m.a,
                                                                {
                                                                    content:
                                                                        "exchange.remove"
                                                                }
                                                            )
                                                        )
                                                    )
                                                ),
                                                o.a.createElement(
                                                    "tbody",
                                                    null,
                                                    this.props.quotes.map(
                                                        function(t, a) {
                                                            return o.a.createElement(
                                                                "tr",
                                                                {key: t},
                                                                o.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    a + 1
                                                                ),
                                                                o.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    t
                                                                ),
                                                                o.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "text-center"
                                                                    },
                                                                    a !==
                                                                        n - 1 &&
                                                                        o.a.createElement(
                                                                            E.a,
                                                                            {
                                                                                onClick: e._onMoveDown.bind(
                                                                                    e,
                                                                                    t
                                                                                ),
                                                                                name:
                                                                                    "chevron-down",
                                                                                className:
                                                                                    "clickable"
                                                                            }
                                                                        )
                                                                ),
                                                                o.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "text-center"
                                                                    },
                                                                    0 !== a &&
                                                                        o.a.createElement(
                                                                            E.a,
                                                                            {
                                                                                onClick: e._onMoveUp.bind(
                                                                                    e,
                                                                                    t
                                                                                ),
                                                                                name:
                                                                                    "chevron-down",
                                                                                className:
                                                                                    "clickable rotate180"
                                                                            }
                                                                        )
                                                                ),
                                                                o.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "text-center"
                                                                    },
                                                                    n > 1 &&
                                                                        o.a.createElement(
                                                                            E.a,
                                                                            {
                                                                                onClick: e._onRemove.bind(
                                                                                    e,
                                                                                    t
                                                                                ),
                                                                                name:
                                                                                    "cross-circle",
                                                                                className:
                                                                                    "clickable"
                                                                            }
                                                                        )
                                                                )
                                                            );
                                                        }
                                                    )
                                                )
                                            ),
                                            o.a.createElement("br", null),
                                            o.a.createElement("br", null),
                                            o.a.createElement("br", null),
                                            o.a.createElement(
                                                "div",
                                                null,
                                                o.a.createElement(L.a, {
                                                    label:
                                                        "exchange.custom_quote",
                                                    onChange: this._onInputBackingAsset.bind(
                                                        this
                                                    ),
                                                    asset: this.state
                                                        .backingAsset,
                                                    assetInput: this.state
                                                        .backingAsset,
                                                    tabIndex: 1,
                                                    style: {
                                                        width: "100%",
                                                        paddingRight: "10px"
                                                    },
                                                    onFound: this._onFoundBackingAsset.bind(
                                                        this
                                                    ),
                                                    onAction: this._onAdd.bind(
                                                        this
                                                    ),
                                                    action_label:
                                                        "exchange.add_quote",
                                                    disableActionButton: !!t,
                                                    noLabel: !0
                                                }),
                                                o.a.createElement(
                                                    "div",
                                                    {className: "error-area"},
                                                    t
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Q = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var n = [],
                                    a = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (
                                        var s, i = e[Symbol.iterator]();
                                        !(a = (s = i.next()).done) &&
                                        (n.push(s.value), !t || n.length !== t);
                                        a = !0
                                    );
                                } catch (e) {
                                    (r = !0), (o = e);
                                } finally {
                                    try {
                                        !a && i.return && i.return();
                                    } finally {
                                        if (r) throw o;
                                    }
                                }
                                return n;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                Y = (function() {
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
            function Z(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function X(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function $(e, t) {
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
            }
            var ee = (function(e) {
                function t(e) {
                    Z(this, t);
                    var n = X(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (n.state = n._getInitialState(e)), n;
                }
                return (
                    $(t, o.a.Component),
                    Y(t, [
                        {
                            key: "_getInitialState",
                            value: function(e) {
                                var t =
                                    !!e.findMarketTab ||
                                    e.viewSettings.get(
                                        "myMarketsBase_" + e.index
                                    );
                                return {
                                    open: void 0 === t || t,
                                    inverseSort: e.viewSettings.get(
                                        "myMarketsInvert",
                                        !0
                                    ),
                                    sortBy: e.viewSettings.get(
                                        "myMarketsSort",
                                        "volume"
                                    )
                                };
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                e.findMarketTab !== this.props.findMarketTab &&
                                    this.setState(this._getInitialState(e));
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    !e.markets ||
                                    !this.props.markets ||
                                    (!u.a.are_equal_shallow(t, this.state) ||
                                        !u.a.are_equal_shallow(
                                            e.markets,
                                            this.props.markets
                                        ) ||
                                        e.starredMarkets !==
                                            this.props.starredMarkets ||
                                        e.marketStats !==
                                            this.props.marketStats ||
                                        e.userMarkets !==
                                            this.props.userMarkets)
                                );
                            }
                        },
                        {
                            key: "_inverseSort",
                            value: function() {
                                x.a.changeViewSetting({
                                    myMarketsInvert: !this.state.myMarketsInvert
                                }),
                                    this.setState({
                                        inverseSort: !this.state.inverseSort
                                    });
                            }
                        },
                        {
                            key: "_changeSort",
                            value: function(e) {
                                e !== this.state.sortBy
                                    ? (x.a.changeViewSetting({
                                          myMarketsSort: e
                                      }),
                                      this.setState({sortBy: e}))
                                    : this._inverseSort();
                            }
                        },
                        {
                            key: "_onToggle",
                            value: function() {
                                if (!this.props.findMarketTab) {
                                    var e = !this.state.open;
                                    this.setState({open: e});
                                    var t = {};
                                    (t[
                                        "myMarketsBase_" + this.props.index
                                    ] = e),
                                        x.a.changeViewSetting(t);
                                }
                            }
                        },
                        {
                            key: "_onToggleUserMarket",
                            value: function(e) {
                                var t = e.split("_"),
                                    n = Q(t, 2),
                                    a = n[0],
                                    r = n[1],
                                    o = !this.props.userMarkets.get(e);
                                x.a.setUserMarket(a, r, o);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.columns,
                                    a = t.markets,
                                    r = t.base,
                                    s = t.marketStats,
                                    i = t.starredMarkets,
                                    l = t.current,
                                    c = this.state,
                                    u = c.sortBy,
                                    p = c.inverseSort,
                                    f = c.open;
                                if (!a || !a.length) return null;
                                var h = n.map(function(t) {
                                        switch (t.name) {
                                            case "market":
                                                return o.a.createElement(
                                                    "th",
                                                    {
                                                        key: t.name,
                                                        className: "clickable",
                                                        onClick: e._changeSort.bind(
                                                            e,
                                                            "name"
                                                        )
                                                    },
                                                    o.a.createElement(m.a, {
                                                        content:
                                                            "exchange.market"
                                                    })
                                                );
                                            case "vol":
                                                return o.a.createElement(
                                                    "th",
                                                    {
                                                        key: t.name,
                                                        className: "clickable",
                                                        onClick: e._changeSort.bind(
                                                            e,
                                                            "volume"
                                                        ),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    o.a.createElement(m.a, {
                                                        content:
                                                            "exchange.vol_short"
                                                    })
                                                );
                                            case "price":
                                                return o.a.createElement(
                                                    "th",
                                                    {
                                                        key: t.name,
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    o.a.createElement(m.a, {
                                                        content:
                                                            "exchange.price"
                                                    })
                                                );
                                            case "quoteSupply":
                                                return o.a.createElement(
                                                    "th",
                                                    {key: t.name},
                                                    o.a.createElement(m.a, {
                                                        content:
                                                            "exchange.base_supply"
                                                    })
                                                );
                                            case "baseSupply":
                                                return o.a.createElement(
                                                    "th",
                                                    {key: t.name},
                                                    o.a.createElement(m.a, {
                                                        content:
                                                            "exchange.quote_supply"
                                                    })
                                                );
                                            case "change":
                                                return o.a.createElement(
                                                    "th",
                                                    {
                                                        key: t.name,
                                                        className: "clickable",
                                                        onClick: e._changeSort.bind(
                                                            e,
                                                            "change"
                                                        ),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    o.a.createElement(m.a, {
                                                        content:
                                                            "exchange.change"
                                                    })
                                                );
                                            case "issuer":
                                                return o.a.createElement(
                                                    "th",
                                                    {key: t.name},
                                                    o.a.createElement(m.a, {
                                                        content:
                                                            "explorer.assets.issuer"
                                                    })
                                                );
                                            case "add":
                                                return o.a.createElement(
                                                    "th",
                                                    {
                                                        key: t.name,
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    o.a.createElement(m.a, {
                                                        content:
                                                            "account.perm.confirm_add"
                                                    })
                                                );
                                            default:
                                                return o.a.createElement("th", {
                                                    key: t.name
                                                });
                                        }
                                    }),
                                    d = a
                                        .map(function(t) {
                                            return e.props.onlyLiquid &&
                                                s.get(t.id) &&
                                                0 == s.get(t.id).volumeBase
                                                ? null
                                                : o.a.createElement(j, {
                                                      key: t.id,
                                                      name:
                                                          "others" === r
                                                              ? o.a.createElement(
                                                                    "span",
                                                                    null,
                                                                    o.a.createElement(
                                                                        N.a,
                                                                        {
                                                                            name:
                                                                                t.quote
                                                                        }
                                                                    ),
                                                                    ":",
                                                                    o.a.createElement(
                                                                        N.a,
                                                                        {
                                                                            name:
                                                                                t.base
                                                                        }
                                                                    )
                                                                )
                                                              : o.a.createElement(
                                                                    N.a,
                                                                    {
                                                                        dataPlace:
                                                                            "left",
                                                                        name:
                                                                            t.quote
                                                                    }
                                                                ),
                                                      quote: t.quote,
                                                      base: t.base,
                                                      columns: n,
                                                      leftAlign: !0,
                                                      compact: !0,
                                                      noSymbols: !0,
                                                      stats: s.get(t.id),
                                                      starred: i.has(t.id),
                                                      current: l === t.id,
                                                      isChecked: e.props.userMarkets.has(
                                                          t.id
                                                      ),
                                                      isDefault:
                                                          e.props
                                                              .defaultMarkets &&
                                                          e.props.defaultMarkets.has(
                                                              t.id
                                                          ),
                                                      onCheckMarket: e._onToggleUserMarket.bind(
                                                          e
                                                      ),
                                                      location:
                                                          e.props.location,
                                                      history: e.props.history
                                                  });
                                        })
                                        .filter(function(e) {
                                            return null !== e;
                                        })
                                        .sort(function(e, t) {
                                            var n = e.key.split("_"),
                                                a = t.key.split("_"),
                                                r = s.get(n[0] + "_" + n[1]),
                                                o = s.get(a[0] + "_" + a[1]);
                                            switch (u) {
                                                case "name":
                                                    return n[0] > a[0]
                                                        ? p
                                                            ? -1
                                                            : 1
                                                        : n[0] < a[0]
                                                            ? p
                                                                ? 1
                                                                : -1
                                                            : n[1] > a[1]
                                                                ? p
                                                                    ? -1
                                                                    : 1
                                                                : n[1] < a[1]
                                                                    ? p
                                                                        ? 1
                                                                        : -1
                                                                    : 0;
                                                case "volume":
                                                    return r && o
                                                        ? p
                                                            ? o.volumeBase -
                                                              r.volumeBase
                                                            : r.volumeBase -
                                                              o.volumeBase
                                                        : 0;
                                                case "change":
                                                    return r && o
                                                        ? p
                                                            ? o.change -
                                                              r.change
                                                            : r.change -
                                                              o.change
                                                        : 0;
                                            }
                                        });
                                return o.a.createElement(
                                    "div",
                                    {style: {paddingRight: 10}},
                                    f
                                        ? o.a.createElement(
                                              "table",
                                              {
                                                  className:
                                                      "table table-hover text-right"
                                              },
                                              o.a.createElement(
                                                  "thead",
                                                  null,
                                                  o.a.createElement(
                                                      "tr",
                                                      null,
                                                      h
                                                  )
                                              ),
                                              d && d.length
                                                  ? o.a.createElement(
                                                        "tbody",
                                                        null,
                                                        d
                                                    )
                                                  : null
                                          )
                                        : null
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            ee.defaultProps = {maxRows: 20, onlyLiquid: !1};
            var te = (function(e) {
                function t(e) {
                    Z(this, t);
                    var n = X(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (n.clearInput = function() {
                            n.setState({myMarketFilter: ""});
                        }),
                        (n.handleSearchUpdate = function(e) {
                            n.setState({
                                myMarketFilter:
                                    e.target.value &&
                                    e.target.value.toUpperCase()
                            });
                        }),
                        (n.state = {
                            inverseSort: e.viewSettings.get(
                                "myMarketsInvert",
                                !0
                            ),
                            sortBy: e.viewSettings.get(
                                "myMarketsSort",
                                "volume"
                            ),
                            activeTab: e.viewSettings.get(
                                "favMarketTab",
                                "my-market"
                            ),
                            activeMarketTab: e.viewSettings.get(
                                "activeMarketTab",
                                0
                            ),
                            lookupQuote: null,
                            lookupBase: null,
                            inputValue: "",
                            minWidth: "100%",
                            findBaseInput: "USD",
                            activeFindBase: "USD"
                        }),
                        (n._setMinWidth = n._setMinWidth.bind(n)),
                        (n.getAssetList = Object(a.a)(
                            M.a.getAssetList.defer,
                            150
                        )),
                        n
                    );
                }
                return (
                    $(t, o.a.Component),
                    Y(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return !(
                                    i.a.is(
                                        e.searchAssets,
                                        this.props.searchAssets
                                    ) &&
                                    i.a.is(e.markets, this.props.markets) &&
                                    i.a.is(
                                        e.starredMarkets,
                                        this.props.starredMarkets
                                    ) &&
                                    i.a.is(
                                        e.defaultMarkets,
                                        this.props.defaultMarkets
                                    ) &&
                                    i.a.is(
                                        e.marketStats,
                                        this.props.marketStats
                                    ) &&
                                    u.a.are_equal_shallow(t, this.state) &&
                                    e.current === this.props.current &&
                                    e.minWidth === this.props.minWidth &&
                                    e.listHeight === this.props.listHeight &&
                                    e.preferredBases ===
                                        this.props.preferredBases &&
                                    e.onlyStars === this.props.onlyStars &&
                                    e.onlyLiquid === this.props.onlyLiquid &&
                                    e.assetsLoading ===
                                        this.props.assetsLoading &&
                                    e.userMarkets === this.props.userMarkets
                                );
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                if (
                                    (this.props.setMinWidth &&
                                        window.addEventListener(
                                            "resize",
                                            this._setMinWidth,
                                            {capture: !1, passive: !0}
                                        ),
                                    this.props.currrent)
                                ) {
                                    var e = this.props.current.split("_")[1],
                                        t = this.props.preferredBases.findIndex(
                                            function(t) {
                                                return t === e;
                                            }
                                        );
                                    -1 !== t &&
                                        t !== this.state.activeMarketTab &&
                                        this.setState({activeMarketTab: t});
                                }
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                var e = this.refs.favorites;
                                c.a.initialize(e), this._setMinWidth();
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                this.props.setMinWidth &&
                                    window.removeEventListener(
                                        "resize",
                                        this._setMinWidth
                                    ),
                                    clearTimeout(this.timer);
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                this.props.myMarketTab &&
                                    !e.myMarketTab &&
                                    this.refs.findSearchInput &&
                                    this.refs.findSearchInput.focus();
                            }
                        },
                        {
                            key: "_setMinWidth",
                            value: function() {
                                this.props.setMinWidth &&
                                    this.refs.favorites &&
                                    "my-market" === this.props.activeTab &&
                                    this.state.minWidth !==
                                        this.refs.favorites.offsetWidth &&
                                    this.setState({
                                        minWidth: this.refs.favorites
                                            .offsetWidth
                                    });
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                if (this.refs.favorites) {
                                    var e = this.refs.favorites;
                                    c.a.update(e);
                                }
                            }
                        },
                        {
                            key: "_inverseSort",
                            value: function() {
                                x.a.changeViewSetting({
                                    myMarketsInvert: !this.state.myMarketsInvert
                                }),
                                    this.setState({
                                        inverseSort: !this.state.inverseSort
                                    });
                            }
                        },
                        {
                            key: "_changeSort",
                            value: function(e) {
                                e !== this.state.sortBy
                                    ? (x.a.changeViewSetting({
                                          myMarketsSort: e
                                      }),
                                      this.setState({sortBy: e}))
                                    : this._inverseSort();
                            }
                        },
                        {
                            key: "_goMarkets",
                            value: function() {
                                this.props.history.push("/markets");
                            }
                        },
                        {
                            key: "_changeTab",
                            value: function(e) {
                                x.a.changeViewSetting({favMarketTab: e}),
                                    this.setState({activeTab: e}),
                                    this._setMinWidth();
                            }
                        },
                        {
                            key: "_onInputName",
                            value: function(e, t) {
                                var n = this,
                                    a = t.target.value.trim().toUpperCase(),
                                    r = !W.ChainValidation.is_valid_symbol_error(
                                        a,
                                        !0
                                    );
                                this.setState({inputValue: a}),
                                    (a && a.length >= 2 && !r) ||
                                        (this.state.inputValue !== a &&
                                            this.timer &&
                                            clearTimeout(this.timer),
                                        (this.timer = setTimeout(function() {
                                            n._lookupAssets(a, e);
                                        }, 1500)));
                            }
                        },
                        {
                            key: "_lookupAssets",
                            value: function(e) {
                                var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                                if (e || "" === e) {
                                    var n = e.toUpperCase().split(":"),
                                        a = n[0],
                                        r = 2 === n.length ? n[1] : null;
                                    this.setState({
                                        lookupQuote: a,
                                        lookupBase: r
                                    }),
                                        x.a.changeViewSetting.defer({
                                            marketLookupInput: e.toUpperCase()
                                        }),
                                        this.getAssetList(a, 50, t);
                                }
                            }
                        },
                        {
                            key: "toggleActiveMarketTab",
                            value: function(e) {
                                x.a.changeViewSetting({activeMarketTab: e}),
                                    this.setState({activeMarketTab: e});
                            }
                        },
                        {
                            key: "_onInputBaseAsset",
                            value: function(e) {
                                this.setState({
                                    findBaseInput: e.toUpperCase(),
                                    error: null
                                });
                            }
                        },
                        {
                            key: "_onFoundBaseAsset",
                            value: function(e) {
                                e &&
                                    this.setState({
                                        activeFindBase: e.get("symbol")
                                    });
                            }
                        },
                        {
                            key: "_getMarkets",
                            value: function() {
                                var e = this.props,
                                    t = e.searchAssets,
                                    n = e.defaultMarkets,
                                    a = e.onlyStars,
                                    r = e.userMarkets,
                                    o = e.preferredBases,
                                    s = e.starredMarkets,
                                    l = this.state,
                                    c = l.activeTab,
                                    u = l.lookupQuote,
                                    p = l.lookupBase,
                                    m = l.myMarketFilter,
                                    f = l.activeMarketTab,
                                    h = Object(H.d)(o),
                                    d = this._getBases(),
                                    b = [],
                                    y = {},
                                    g = [],
                                    v = "my-market" === c;
                                t.size &&
                                    t
                                        .filter(function(e) {
                                            try {
                                                if (e.options.description) {
                                                    var t = JSON.parse(
                                                        e.options.description
                                                    );
                                                    if (
                                                        "visible" in t &&
                                                        !t.visible
                                                    )
                                                        return !1;
                                                }
                                            } catch (e) {}
                                            return (
                                                -1 !== e.symbol.indexOf(u) &&
                                                e.symbol.length >= u.length
                                            );
                                        })
                                        .forEach(function(e) {
                                            d.forEach(function(t) {
                                                var n = e.symbol + "_" + t;
                                                t !== e.symbol &&
                                                    b.push([
                                                        n,
                                                        {
                                                            quote: e.symbol,
                                                            base: t
                                                        }
                                                    ]);
                                            });
                                        }),
                                    (b = b.filter(function(e) {
                                        return !p || e[1].quote === u;
                                    }));
                                var _ = v ? n : i.a.Map(b);
                                function k(e, t, n, r, i) {
                                    return {
                                        otherMarkets: n
                                            .filter(function(e) {
                                                if (e.base === e.quote)
                                                    return !1;
                                                if (v) {
                                                    var t =
                                                        e.quote + "_" + e.base;
                                                    return m
                                                        ? -1 !== t.indexOf(m)
                                                        : !(a && !s.has(t));
                                                }
                                                return (
                                                    !(u.length < 1) &&
                                                    -1 !== e.quote.indexOf(u)
                                                );
                                            })
                                            .map(function(n) {
                                                var a = n.quote + "_" + n.base;
                                                if (-1 !== t.indexOf(n.base)) {
                                                    r[e] || (r[e] = []);
                                                    var s = {
                                                        id: a,
                                                        quote: n.quote,
                                                        base: n.base
                                                    };
                                                    return (
                                                        r[e].find(function(e) {
                                                            return e.id === a;
                                                        }) || r[e].push(s),
                                                        null
                                                    );
                                                }
                                                if (
                                                    !o.includes(n.base) &&
                                                    -1 === h.indexOf(n.base)
                                                )
                                                    return {
                                                        id: a,
                                                        quote: n.quote,
                                                        base: n.base
                                                    };
                                            })
                                            .filter(function(e) {
                                                return !!e;
                                            })
                                            .take(v ? 100 : 20)
                                            .toArray()
                                            .concat(i),
                                        baseGroups: r
                                    };
                                }
                                if (
                                    (v &&
                                        r.size &&
                                        r.forEach(function(e, t) {
                                            _.has(t) || (_ = _.set(t, e));
                                        }),
                                    _.size > 0)
                                ) {
                                    var E = v
                                            ? o.get(f)
                                            : this.state.activeFindBase,
                                        w = k(E, [E], _, y, g);
                                    (g = w.otherMarkets),
                                        (y = w.baseGroups),
                                        H.c.forEach(function(e) {
                                            var t = e + "." + E;
                                            if (W.ChainStore.getAsset(t)) {
                                                var n = _.map(function(e) {
                                                        if (e.quote === e.base)
                                                            return null;
                                                        var n =
                                                            e.quote + "_" + t;
                                                        return _.has(n)
                                                            ? null
                                                            : {
                                                                  base: t,
                                                                  quote: e.quote
                                                              };
                                                    }, {}).filter(function(e) {
                                                        return !!e;
                                                    }),
                                                    a = k(E, [E, t], n, y, g);
                                                (g = a.otherMarkets),
                                                    (y = a.baseGroups);
                                            }
                                        });
                                }
                                return {baseGroups: y, otherMarkets: g};
                            }
                        },
                        {
                            key: "_getBases",
                            value: function() {
                                var e = this.props,
                                    t = e.preferredBases,
                                    n = e.searchAssets,
                                    a = this.state,
                                    r = a.lookupQuote,
                                    o = a.lookupBase,
                                    s = n
                                        .filter(function(e) {
                                            return o && o.length
                                                ? 0 === e.symbol.indexOf(o)
                                                : -1 !== e.symbol.indexOf(r);
                                        })
                                        .map(function(e) {
                                            if (o && o.length) {
                                                if (0 === e.symbol.indexOf(o))
                                                    return e.symbol;
                                            } else if (t.includes(e.symbol) && e.symbol.length >= r.length && e.symbol.length < r.length + 3) return e.symbol;
                                        })
                                        .filter(function(e) {
                                            return !!e;
                                        })
                                        .toArray();
                                return (s = (s = s.concat(
                                    t
                                        .filter(function(e) {
                                            return (
                                                !o ||
                                                !o.length ||
                                                0 === e.indexOf(o)
                                            );
                                        })
                                        .toArray()
                                )).filter(function(e) {
                                    return (
                                        !(o && o.length > 1) ||
                                        0 === e.indexOf(o)
                                    );
                                }));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.starredMarkets,
                                    r = t.marketStats,
                                    s = t.columns,
                                    i = t.assetsLoading,
                                    l = t.preferredBases,
                                    c = t.current,
                                    u = t.viewSettings,
                                    p = t.listHeight,
                                    h = this.state,
                                    d = h.activeMarketTab,
                                    b = "my-market" === h.activeTab,
                                    y = l.map(function(e) {
                                        return e;
                                    });
                                b ||
                                    (l = (l = l.clear()).push(
                                        this.state.activeFindBase
                                    )),
                                    b || (d = 0);
                                var g = this._getMarkets(),
                                    v = g.baseGroups,
                                    _ = g.otherMarkets,
                                    k = _ && _.length,
                                    E = "mymarkets-header clickable",
                                    O = I()(E, {inactive: !b}),
                                    C = I()(E, {inactive: b}),
                                    S = {
                                        minWidth: this.state.minWidth,
                                        minHeight: "6rem"
                                    };
                                p && (S.height = p);
                                var j = n(15);
                                return o.a.createElement(
                                    "div",
                                    {
                                        className: this.props.className,
                                        style: this.props.style
                                    },
                                    o.a.createElement(
                                        "div",
                                        {
                                            style: this.props.headerStyle,
                                            className:
                                                "grid-block shrink left-orderbook-header bottom-header"
                                        },
                                        o.a.createElement(
                                            "div",
                                            {
                                                ref: "myMarkets",
                                                className: O,
                                                onClick: this._changeTab.bind(
                                                    this,
                                                    "my-market"
                                                ),
                                                "data-intro": j.translate(
                                                    "walkthrough.my_markets_tab"
                                                )
                                            },
                                            o.a.createElement(m.a, {
                                                content: "exchange.market_name"
                                            })
                                        ),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className: C,
                                                onClick: this._changeTab.bind(
                                                    this,
                                                    "find-market"
                                                ),
                                                "data-intro": j.translate(
                                                    "walkthrough.find_markets_tab"
                                                )
                                            },
                                            o.a.createElement(m.a, {
                                                content: "exchange.more"
                                            })
                                        )
                                    ),
                                    this.props.controls
                                        ? o.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "small-12 medium-6",
                                                  style: {padding: "1rem 0"}
                                              },
                                              this.props.controls
                                                  ? o.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                paddingBottom:
                                                                    "0.5rem"
                                                            }
                                                        },
                                                        this.props.controls
                                                    )
                                                  : null
                                          )
                                        : null,
                                    b
                                        ? o.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block vertical shrink",
                                                  style: {
                                                      width: "100%",
                                                      textAlign: "left",
                                                      padding: "0.75rem 0.5rem"
                                                  }
                                              },
                                              o.a.createElement(
                                                  "div",
                                                  null,
                                                  o.a.createElement(
                                                      "label",
                                                      {
                                                          style: {
                                                              margin: "3px 0 0"
                                                          }
                                                      },
                                                      o.a.createElement(
                                                          "input",
                                                          {
                                                              style: {
                                                                  position:
                                                                      "relative",
                                                                  top: 3
                                                              },
                                                              className:
                                                                  "no-margin",
                                                              type: "checkbox",
                                                              checked: this
                                                                  .props
                                                                  .onlyLiquid,
                                                              onChange: function() {
                                                                  x.a.changeViewSetting(
                                                                      {
                                                                          onlyLiquid: !e
                                                                              .props
                                                                              .onlyLiquid
                                                                      }
                                                                  );
                                                              }
                                                          }
                                                      ),
                                                      o.a.createElement(
                                                          "span",
                                                          {
                                                              style: {
                                                                  paddingLeft:
                                                                      "0.4rem"
                                                              }
                                                          },
                                                          o.a.createElement(
                                                              m.a,
                                                              {
                                                                  content:
                                                                      "exchange.show_only_liquid"
                                                              }
                                                          )
                                                      )
                                                  ),
                                                  o.a.createElement(
                                                      "label",
                                                      {
                                                          style: {
                                                              margin: "3px 0 0"
                                                          }
                                                      },
                                                      o.a.createElement(
                                                          "input",
                                                          {
                                                              style: {
                                                                  position:
                                                                      "relative",
                                                                  top: 3
                                                              },
                                                              className:
                                                                  "no-margin",
                                                              type: "checkbox",
                                                              checked: this
                                                                  .props
                                                                  .onlyStars,
                                                              onChange: function() {
                                                                  w.a.toggleStars();
                                                              }
                                                          }
                                                      ),
                                                      o.a.createElement(
                                                          "span",
                                                          {
                                                              style: {
                                                                  paddingLeft:
                                                                      "0.4rem"
                                                              }
                                                          },
                                                          o.a.createElement(
                                                              f.a,
                                                              {
                                                                  string:
                                                                      "exchange.show_only_star_formatter",
                                                                  keys: [
                                                                      {
                                                                          type:
                                                                              "icon",
                                                                          value:
                                                                              "fi-star",
                                                                          className:
                                                                              "gold-star",
                                                                          arg:
                                                                              "star_icon"
                                                                      }
                                                                  ]
                                                              }
                                                          )
                                                      )
                                                  )
                                              ),
                                              o.a.createElement(
                                                  "div",
                                                  {className: "search-wrapper"},
                                                  o.a.createElement(
                                                      "form",
                                                      null,
                                                      o.a.createElement(
                                                          "input",
                                                          {
                                                              autoComplete:
                                                                  "off",
                                                              style: {
                                                                  fontSize:
                                                                      "0.9rem",
                                                                  height:
                                                                      "inherit",
                                                                  position:
                                                                      "relative",
                                                                  top: 1,
                                                                  padding: 2
                                                              },
                                                              type: "text",
                                                              className:
                                                                  "no-margin market-filter-input",
                                                              placeholder: q.a.translate(
                                                                  "exchange.filter"
                                                              ),
                                                              maxLength: "16",
                                                              name: "focus",
                                                              required:
                                                                  "required",
                                                              value: this.state
                                                                  .myMarketFilter,
                                                              onChange: this
                                                                  .handleSearchUpdate
                                                          }
                                                      ),
                                                      o.a.createElement(
                                                          "button",
                                                          {
                                                              className:
                                                                  "clear-text",
                                                              type: "reset",
                                                              onClick: this
                                                                  .clearInput
                                                          }
                                                      )
                                                  )
                                              )
                                          )
                                        : o.a.createElement(
                                              "div",
                                              {
                                                  style: {
                                                      width: "100%",
                                                      textAlign: "left",
                                                      padding: "0.75rem 0.5rem"
                                                  }
                                              },
                                              o.a.createElement(
                                                  "table",
                                                  null,
                                                  o.a.createElement(
                                                      "tbody",
                                                      null,
                                                      o.a.createElement(
                                                          "tr",
                                                          {
                                                              style: {
                                                                  width: "100%"
                                                              }
                                                          },
                                                          o.a.createElement(
                                                              "td",
                                                              null,
                                                              o.a.createElement(
                                                                  L.a,
                                                                  {
                                                                      onAssetSelect: this._onFoundBaseAsset.bind(
                                                                          this
                                                                      ),
                                                                      assets: y,
                                                                      onChange: this._onInputBaseAsset.bind(
                                                                          this
                                                                      ),
                                                                      asset: this
                                                                          .state
                                                                          .findBaseInput,
                                                                      assetInput: this
                                                                          .state
                                                                          .findBaseInput,
                                                                      tabIndex: 1,
                                                                      style: {
                                                                          width:
                                                                              "100%",
                                                                          paddingBottom:
                                                                              "1.5rem"
                                                                      },
                                                                      onFound: this._onFoundBaseAsset.bind(
                                                                          this
                                                                      ),
                                                                      label:
                                                                          "exchange.quote",
                                                                      noLabel: !0,
                                                                      inputStyle: {
                                                                          fontSize:
                                                                              "0.9rem"
                                                                      }
                                                                  }
                                                              )
                                                          )
                                                      ),
                                                      o.a.createElement(
                                                          "tr",
                                                          {
                                                              style: {
                                                                  width: "100%"
                                                              }
                                                          },
                                                          o.a.createElement(
                                                              "td",
                                                              null,
                                                              o.a.createElement(
                                                                  "label",
                                                                  null,
                                                                  o.a.createElement(
                                                                      m.a,
                                                                      {
                                                                          content:
                                                                              "account.user_issued_assets.name"
                                                                      }
                                                                  ),
                                                                  ":"
                                                              ),
                                                              o.a.createElement(
                                                                  "input",
                                                                  {
                                                                      style: {
                                                                          fontSize:
                                                                              "0.9rem",
                                                                          position:
                                                                              "relative",
                                                                          top: 1
                                                                      },
                                                                      type:
                                                                          "text",
                                                                      value: this
                                                                          .state
                                                                          .inputValue,
                                                                      onChange: this._onInputName.bind(
                                                                          this,
                                                                          !0
                                                                      ),
                                                                      placeholder: q.a.translate(
                                                                          "exchange.search"
                                                                      ),
                                                                      maxLength:
                                                                          "16",
                                                                      tabIndex: 2,
                                                                      ref:
                                                                          "findSearchInput"
                                                                  }
                                                              ),
                                                              this.state
                                                                  .assetNameError
                                                                  ? o.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "error-area",
                                                                            style: {
                                                                                paddingTop: 10
                                                                            }
                                                                        },
                                                                        o.a.createElement(
                                                                            "span",
                                                                            {
                                                                                style: {
                                                                                    wordBreak:
                                                                                        "break-all"
                                                                                }
                                                                            },
                                                                            o.a.createElement(
                                                                                m.a,
                                                                                {
                                                                                    content:
                                                                                        "explorer.asset.invalid",
                                                                                    name: this
                                                                                        .state
                                                                                        .inputValue
                                                                                }
                                                                            )
                                                                        )
                                                                    )
                                                                  : null
                                                          )
                                                      )
                                                  )
                                              )
                                          ),
                                    o.a.createElement(
                                        "ul",
                                        {className: "mymarkets-tabs"},
                                        b &&
                                            l.map(function(t, n) {
                                                return t
                                                    ? o.a.createElement(
                                                          "li",
                                                          {
                                                              key: t,
                                                              onClick: e.toggleActiveMarketTab.bind(
                                                                  e,
                                                                  n
                                                              ),
                                                              className: I()(
                                                                  "mymarkets-tab",
                                                                  {
                                                                      active:
                                                                          d ===
                                                                          n
                                                                  }
                                                              )
                                                          },
                                                          t
                                                      )
                                                    : null;
                                            }),
                                        b
                                            ? null
                                            : o.a.createElement(
                                                  "li",
                                                  {
                                                      className: I()(
                                                          "mymarkets-tab",
                                                          {active: !0}
                                                      )
                                                  },
                                                  this.state.activeFindBase
                                              ),
                                        b && k
                                            ? o.a.createElement(
                                                  "li",
                                                  {
                                                      key: "others",
                                                      style: {
                                                          textTransform:
                                                              "uppercase"
                                                      },
                                                      onClick: this.toggleActiveMarketTab.bind(
                                                          this,
                                                          l.size + 1
                                                      ),
                                                      className: I()(
                                                          "mymarkets-tab",
                                                          {
                                                              active:
                                                                  d ===
                                                                  l.size + 1
                                                          }
                                                      )
                                                  },
                                                  o.a.createElement(m.a, {
                                                      content: "exchange.others"
                                                  })
                                              )
                                            : null,
                                        b &&
                                            o.a.createElement(
                                                "li",
                                                {
                                                    key: "quote_edit",
                                                    style: {
                                                        textTransform:
                                                            "uppercase"
                                                    },
                                                    onClick: function() {
                                                        V.a.publish(
                                                            "quote_selection",
                                                            "open"
                                                        );
                                                    },
                                                    className: "mymarkets-tab"
                                                },
                                                " + "
                                            )
                                    ),
                                    o.a.createElement(
                                        "div",
                                        {
                                            style: S,
                                            className:
                                                "table-container grid-block vertical mymarkets-list",
                                            ref: "favorites"
                                        },
                                        i
                                            ? o.a.createElement(
                                                  "div",
                                                  {
                                                      style: {
                                                          position: "absolute",
                                                          paddingTop: "3rem",
                                                          textAlign: "center",
                                                          width: "100%"
                                                      }
                                                  },
                                                  o.a.createElement(R.a, {
                                                      type: "three-bounce"
                                                  })
                                              )
                                            : null,
                                        l
                                            .filter(function(e) {
                                                return e === l.get(d);
                                            })
                                            .map(function(t, n) {
                                                return o.a.createElement(ee, {
                                                    userMarkets:
                                                        e.props.userMarkets,
                                                    defaultMarkets:
                                                        e.props.defaultMarkets,
                                                    index: n,
                                                    allowChange: !1,
                                                    key: t,
                                                    current: c,
                                                    starredMarkets: a,
                                                    marketStats: r,
                                                    viewSettings: u,
                                                    columns: b
                                                        ? s
                                                        : e.props.findColumns ||
                                                          s,
                                                    markets: v[t],
                                                    base: t,
                                                    maxRows: b ? 20 : 10,
                                                    findMarketTab: !b,
                                                    location: e.props.location,
                                                    history: e.props.history,
                                                    onlyLiquid:
                                                        e.props.onlyLiquid && b
                                                });
                                            }),
                                        d === l.size + 1 && b && k
                                            ? o.a.createElement(ee, {
                                                  userMarkets: this.props
                                                      .userMarkets,
                                                  index: l.size,
                                                  current: c,
                                                  starredMarkets: a,
                                                  marketStats: r,
                                                  viewSettings: u,
                                                  columns: s,
                                                  markets: _,
                                                  base: "others",
                                                  maxRows: b ? 20 : 10,
                                                  findMarketTab: !b,
                                                  location: this.props.location,
                                                  history: this.props.history
                                              })
                                            : null
                                    ),
                                    o.a.createElement(K, {
                                        quotes: this.props.preferredBases
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (te.defaultProps = {activeTab: "my-market", setMinWidth: !1}),
                (te = z()(te, 50, {leading: !1}));
            var ne = (function(e) {
                function t() {
                    return (
                        Z(this, t),
                        X(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    $(t, o.a.Component),
                    Y(t, [
                        {
                            key: "render",
                            value: function() {
                                return o.a.createElement(te, this.props);
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = Object(h.connect)(ne, {
                listenTo: function() {
                    return [A.a, T.a, P.a];
                },
                getProps: function() {
                    return {
                        starredMarkets: A.a.getState().starredMarkets,
                        onlyLiquid: A.a
                            .getState()
                            .viewSettings.get("onlyLiquid", !0),
                        defaultMarkets: A.a.getState().defaultMarkets,
                        viewSettings: A.a.getState().viewSettings,
                        preferredBases: A.a.getState().preferredBases,
                        marketStats: T.a.getState().allMarketStats,
                        userMarkets: A.a.getState().userMarkets,
                        searchAssets: P.a.getState().assets,
                        onlyStars: T.a.getState().onlyStars,
                        assetsLoading: P.a.getState().assetsLoading
                    };
                }
            });
        },
        1925: function(e, t, n) {},
        2071: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(1736),
                s = n(15),
                i = n.n(s),
                l = n(11),
                c = n.n(l),
                u = n(508),
                p = n(45),
                m = n(67),
                f = n(10),
                h = n(29),
                d = n(3),
                b = n.n(d),
                y = n(506),
                g = n(31),
                v = n(21),
                _ = n(20),
                k = n(7),
                E = n.n(k),
                w = n(2077),
                x = n(503),
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
            function C(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function S(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function j(e, t) {
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
            }
            n(1925);
            var A = (function(e) {
                function t() {
                    return (
                        C(this, t),
                        S(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    j(t, r.a.Component),
                    O(t, [
                        {
                            key: "_onCardClick",
                            value: function(e) {
                                e.preventDefault(),
                                    this.props.history.push(
                                        "/account/" +
                                            this.props.witness.get("name")
                                    );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = f.ChainStore.getWitnessById(
                                    this.props.witness.get("id")
                                );
                                if (!e) return null;
                                var t = e.get("total_votes"),
                                    n = e.get("last_aslot"),
                                    a = {};
                                a =
                                    this.props.most_recent - n > 100
                                        ? {borderLeft: "1px solid #FCAB53"}
                                        : {borderLeft: "1px solid #50D2C2"};
                                var o = new Date(
                                    Date.now() -
                                        (this.props.most_recent - n) *
                                            f.ChainStore.getObject(
                                                "2.0.0"
                                            ).getIn([
                                                "parameters",
                                                "block_interval"
                                            ]) *
                                            1e3
                                );
                                return r.a.createElement(
                                    "div",
                                    {
                                        className: "grid-content account-card",
                                        onClick: this._onCardClick.bind(this)
                                    },
                                    r.a.createElement(
                                        "div",
                                        {className: "card", style: a},
                                        r.a.createElement(
                                            "h4",
                                            {className: "text-center"},
                                            "#",
                                            this.props.rank,
                                            ": ",
                                            this.props.witness.get("name")
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: "card-content"},
                                            r.a.createElement(
                                                "div",
                                                {className: "text-center"},
                                                r.a.createElement(u.a, {
                                                    account: this.props.witness.get(
                                                        "name"
                                                    ),
                                                    size: {
                                                        height: 64,
                                                        width: 64
                                                    }
                                                })
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(
                                                "table",
                                                {
                                                    className:
                                                        "table key-value-table"
                                                },
                                                r.a.createElement(
                                                    "tbody",
                                                    null,
                                                    r.a.createElement(
                                                        "tr",
                                                        null,
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            "Votes"
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                h.a,
                                                                {
                                                                    amount: t,
                                                                    asset:
                                                                        "1.3.0",
                                                                    decimalOffset: 5
                                                                }
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "tr",
                                                        null,
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            "Last Block"
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                y.a,
                                                                {
                                                                    time: new Date(
                                                                        o
                                                                    )
                                                                }
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "tr",
                                                        null,
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            "Missed"
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            e.get(
                                                                "total_missed"
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (A.propTypes = {witness: p.a.ChainAccount.isRequired}),
                (A = Object(m.a)(A)),
                (A = Object(w.a)(A));
            var T = (function(e) {
                function t() {
                    return (
                        C(this, t),
                        S(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    j(t, r.a.Component),
                    O(t, [
                        {
                            key: "_onRowClick",
                            value: function(e) {
                                e.preventDefault(),
                                    this.props.history.push(
                                        "/account/" +
                                            this.props.witness.get("name")
                                    );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.witness,
                                    n = e.isCurrent,
                                    a = e.rank,
                                    o = f.ChainStore.getWitnessById(
                                        this.props.witness.get("id")
                                    );
                                if (!o) return null;
                                o.get("total_votes");
                                var s = o.get("last_aslot"),
                                    i = {};
                                i =
                                    this.props.most_recent - s > 100
                                        ? {borderLeft: "1px solid #FCAB53"}
                                        : {borderLeft: "1px solid #50D2C2"};
                                var l = new Date(
                                        Date.now() -
                                            (this.props.most_recent - s) *
                                                f.ChainStore.getObject(
                                                    "2.0.0"
                                                ).getIn([
                                                    "parameters",
                                                    "block_interval"
                                                ]) *
                                                1e3
                                    ),
                                    c = n ? "active-witness" : "",
                                    u = o.get("total_missed"),
                                    p = E()(
                                        "txtlabel",
                                        {success: u <= 500},
                                        {info: u > 500 && u <= 1250},
                                        {warning: u > 1250 && u <= 2e3},
                                        {error: u >= 200}
                                    );
                                return r.a.createElement(
                                    "tr",
                                    {
                                        className: c,
                                        onClick: this._onRowClick.bind(this)
                                    },
                                    r.a.createElement("td", null, a),
                                    r.a.createElement(
                                        "td",
                                        {style: i},
                                        t.get("name")
                                    ),
                                    r.a.createElement(
                                        "td",
                                        null,
                                        r.a.createElement(y.a, {
                                            time: new Date(l)
                                        })
                                    ),
                                    r.a.createElement(
                                        "td",
                                        null,
                                        o.get("last_confirmed_block_num")
                                    ),
                                    r.a.createElement("td", {className: p}, u),
                                    r.a.createElement(
                                        "td",
                                        null,
                                        r.a.createElement(h.a, {
                                            amount: o.get("total_votes"),
                                            asset: "1.3.0",
                                            decimalOffset: 5
                                        })
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (T.propTypes = {witness: p.a.ChainAccount.isRequired}),
                (T = Object(m.a)(T)),
                (T = Object(w.a)(T));
            var P = (function(e) {
                function t() {
                    C(this, t);
                    var e = S(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (e.state = {sortBy: "rank", inverseSort: !0}),
                        (e.handleBlockIdClick = e.handleBlockIdClick.bind(e)),
                        e
                    );
                }
                return (
                    j(t, r.a.Component),
                    O(t, [
                        {
                            key: "_setSort",
                            value: function(e) {
                                this.setState({
                                    sortBy: e,
                                    inverseSort:
                                        e === this.state.sortBy
                                            ? !this.state.inverseSort
                                            : this.state.inverseSort
                                });
                            }
                        },
                        {
                            key: "handleBlockIdClick",
                            value: function(e) {
                                var t = this;
                                return function() {
                                    t.props.history.push("/block/" + e);
                                };
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.witnesses,
                                    a = t.current,
                                    o = (t.cardView, t.witnessList),
                                    s = this.state,
                                    i = (s.sortBy, s.inverseSort, 0),
                                    l = {};
                                n.filter(function(e) {
                                    return !!e && -1 !== o.indexOf(e.get("id"));
                                })
                                    .sort(function(e, t) {
                                        if (e && t)
                                            return (
                                                parseInt(
                                                    t.get("total_votes"),
                                                    10
                                                ) -
                                                parseInt(
                                                    e.get("total_votes"),
                                                    10
                                                )
                                            );
                                    })
                                    .forEach(function(e, t) {
                                        if (e) {
                                            var n = e.get("last_aslot");
                                            i < n && (i = n),
                                                (l[e.get("id")] = t + 1);
                                        }
                                    });
                                var c = [];
                                n.length > 0 &&
                                    n[1] &&
                                    (c = n
                                        .filter(function(t) {
                                            if (!t) return !1;
                                            var n = f.ChainStore.getObject(
                                                t.get("witness_account")
                                            );
                                            if (!n) return !1;
                                            if (
                                                !f.ChainStore.getWitnessById(
                                                    n.get("id")
                                                )
                                            )
                                                return !1;
                                            var a = n.get("name");
                                            return (
                                                !!a &&
                                                -1 !== a.indexOf(e.props.filter)
                                            );
                                        })
                                        .map(function(t) {
                                            var n = f.ChainStore.getObject(
                                                    t.get("witness_account")
                                                ),
                                                a = f.ChainStore.getWitnessById(
                                                    n.get("id")
                                                ),
                                                r = a.get("last_aslot"),
                                                o = new Date(
                                                    Date.now() -
                                                        (e.props.current_aslot -
                                                            r) *
                                                            f.ChainStore.getObject(
                                                                "2.0.0"
                                                            ).getIn([
                                                                "parameters",
                                                                "block_interval"
                                                            ]) *
                                                            1e3
                                                );
                                            return {
                                                id: t.get("id"),
                                                key: n.get("name"),
                                                rank: l[t.get("id")],
                                                name: n.get("name"),
                                                signing_key: a.get(
                                                    "signing_key"
                                                ),
                                                url: a.get("url"),
                                                lastConfirmedBlock: {
                                                    id: a.get(
                                                        "last_confirmed_block_num"
                                                    ),
                                                    timestamp: o.getTime()
                                                },
                                                blocksMissed: a.get(
                                                    "total_missed"
                                                ),
                                                votes: a.get("total_votes")
                                            };
                                        }));
                                var u = [
                                    {
                                        key: "#",
                                        title: "#",
                                        dataIndex: "rank",
                                        sorter: function(e, t) {
                                            return e.rank > t.rank
                                                ? 1
                                                : e.rank < t.rank
                                                    ? -1
                                                    : 0;
                                        }
                                    },
                                    {
                                        key: "name",
                                        title: "NAME",
                                        dataIndex: "name",
                                        sorter: function(e, t) {
                                            return e.name > t.name
                                                ? 1
                                                : e.name < t.name
                                                    ? -1
                                                    : 0;
                                        }
                                    },
                                    {
                                        key: "url",
                                        title: "URL",
                                        dataIndex: "url",
                                        align: "center",
                                        render: function(e) {
                                            return r.a.createElement(
                                                "div",
                                                {
                                                    style: {
                                                        width: "100%",
                                                        textAlign: "center"
                                                    }
                                                },
                                                (e &&
                                                    (function(e) {
                                                        return /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(
                                                            e
                                                        );
                                                    })(e) &&
                                                    (function(e) {
                                                        return r.a.createElement(
                                                            x.Popover,
                                                            {
                                                                content: r.a.createElement(
                                                                    "a",
                                                                    {
                                                                        href: e,
                                                                        target:
                                                                            "_blank"
                                                                    },
                                                                    e
                                                                ),
                                                                trigger: "hover"
                                                            },
                                                            r.a.createElement(
                                                                x.Icon,
                                                                {type: "link"}
                                                            )
                                                        );
                                                    })(e)) ||
                                                    null
                                            );
                                        }
                                    },
                                    {
                                        key: "lastConfirmedBlock",
                                        title: "LAST CONFIRMED BLOCK",
                                        dataIndex: "lastConfirmedBlock",
                                        render: function(t) {
                                            return r.a.createElement(
                                                "span",
                                                null,
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        style: {
                                                            display:
                                                                "inline-block",
                                                            minWidth: "100px"
                                                        },
                                                        href:
                                                            "javascript:void(0)",
                                                        onClick: e.handleBlockIdClick(
                                                            t.id
                                                        )
                                                    },
                                                    "#",
                                                    Number(
                                                        t.id
                                                    ).toLocaleString()
                                                ),
                                                " ",
                                                r.a.createElement(y.a, {
                                                    time: new Date(t.timestamp)
                                                })
                                            );
                                        },
                                        sorter: function(e, t) {
                                            return e.lastConfirmedBlock
                                                .timestamp >
                                                t.lastConfirmedBlock.timestamp
                                                ? -1
                                                : e.lastConfirmedBlock
                                                      .timestamp <
                                                  t.lastConfirmedBlock.timestamp
                                                    ? 1
                                                    : 0;
                                        }
                                    },
                                    {
                                        key: "blocksMissed",
                                        title: "BLOCKS MISSED",
                                        dataIndex: "blocksMissed",
                                        render: function(e) {
                                            var t = E()(
                                                "txtlabel",
                                                {success: e <= 500},
                                                {info: e > 500 && e <= 1250},
                                                {warning: e > 1250 && e <= 2e3},
                                                {error: e >= 200}
                                            );
                                            return r.a.createElement(
                                                "span",
                                                {className: t},
                                                e
                                            );
                                        },
                                        sorter: function(e, t) {
                                            return e.blocksMissed >
                                                t.blocksMissed
                                                ? 1
                                                : e.blocksMissed <
                                                  t.blocksMissed
                                                    ? -1
                                                    : 0;
                                        }
                                    },
                                    {
                                        key: "votes",
                                        title: "VOTES",
                                        dataIndex: "votes",
                                        render: function(e) {
                                            return r.a.createElement(h.a, {
                                                amount: e,
                                                asset: "1.3.0",
                                                decimalOffset: 5
                                            });
                                        },
                                        sorter: function(e, t) {
                                            return e.votes > t.votes
                                                ? 1
                                                : e.votes < t.votes
                                                    ? -1
                                                    : 0;
                                        }
                                    },
                                    {
                                        key: "key",
                                        title: "KEY",
                                        dataIndex: "signing_key",
                                        align: "center",
                                        render: function(e) {
                                            return r.a.createElement(
                                                "div",
                                                {
                                                    style: {
                                                        textAlign: "center",
                                                        width: "100%"
                                                    }
                                                },
                                                (function(e) {
                                                    return r.a.createElement(
                                                        x.Popover,
                                                        {
                                                            content: r.a.createElement(
                                                                "span",
                                                                null,
                                                                e
                                                            ),
                                                            trigger: "hover"
                                                        },
                                                        r.a.createElement(
                                                            x.Icon,
                                                            {type: "key"}
                                                        )
                                                    );
                                                })(e)
                                            );
                                        }
                                    }
                                ];
                                return r.a.createElement(x.Table, {
                                    rowClassName: function(e) {
                                        return e.id === a
                                            ? "active-witness"
                                            : "";
                                    },
                                    columns: u,
                                    dataSource: c,
                                    pagination: !1
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            (P.propTypes = {witnesses: p.a.ChainObjectsList.isRequired}),
                (P = Object(m.a)(P, {show_loader: !0})),
                (P = Object(w.a)(P));
            var N = (function(e) {
                function t(e) {
                    C(this, t);
                    var n = S(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (
                        (n.state = {
                            filterWitness: e.filterWitness || "",
                            cardView: e.cardView
                        }),
                        n
                    );
                }
                return (
                    j(t, r.a.Component),
                    O(t, [
                        {
                            key: "_onFilter",
                            value: function(e) {
                                e.preventDefault(),
                                    this.setState({
                                        filterWitness: e.target.value.toLowerCase()
                                    }),
                                    v.a.changeViewSetting({
                                        filterWitness: e.target.value.toLowerCase()
                                    });
                            }
                        },
                        {
                            key: "_toggleView",
                            value: function() {
                                v.a.changeViewSetting({
                                    cardView: !this.state.cardView
                                }),
                                    this.setState({
                                        cardView: !this.state.cardView
                                    });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.dynGlobalObject,
                                    n = e.globalObject;
                                (t = t.toJS()), (n = n.toJS());
                                var a = f.ChainStore.getObject(
                                        t.current_witness
                                    ),
                                    o = null;
                                return (
                                    a &&
                                        (o = f.ChainStore.getObject(
                                            a.get("witness_account")
                                        )),
                                    r.a.createElement(
                                        "div",
                                        {className: "grid-block"},
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-block"},
                                            r.a.createElement(
                                                "div",
                                                {className: "grid-block"},
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content "
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "explore-witness--info"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            null,
                                                            r.a.createElement(
                                                                "thead",
                                                                null,
                                                                r.a.createElement(
                                                                    "tr",
                                                                    null,
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            b.a,
                                                                            {
                                                                                content:
                                                                                    "explorer.witnesses.current"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            b.a,
                                                                            {
                                                                                content:
                                                                                    "explorer.blocks.active_witnesses"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            b.a,
                                                                            {
                                                                                content:
                                                                                    "explorer.witnesses.participation"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            b.a,
                                                                            {
                                                                                content:
                                                                                    "explorer.witnesses.pay"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            b.a,
                                                                            {
                                                                                content:
                                                                                    "explorer.witnesses.budget"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            b.a,
                                                                            {
                                                                                content:
                                                                                    "explorer.witnesses.next_vote"
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "tbody",
                                                                null,
                                                                r.a.createElement(
                                                                    "tr",
                                                                    null,
                                                                    r.a.createElement(
                                                                        "td",
                                                                        null,
                                                                        o
                                                                            ? o.get(
                                                                                  "name"
                                                                              )
                                                                            : null
                                                                    ),
                                                                    r.a.createElement(
                                                                        "td",
                                                                        null,
                                                                        Object.keys(
                                                                            n.active_witnesses
                                                                        ).length
                                                                    ),
                                                                    r.a.createElement(
                                                                        "td",
                                                                        null,
                                                                        t.participation,
                                                                        "%"
                                                                    ),
                                                                    r.a.createElement(
                                                                        "td",
                                                                        null,
                                                                        r.a.createElement(
                                                                            h.a,
                                                                            {
                                                                                amount:
                                                                                    n
                                                                                        .parameters
                                                                                        .witness_pay_per_block,
                                                                                asset:
                                                                                    "1.3.0"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "td",
                                                                        null,
                                                                        " ",
                                                                        r.a.createElement(
                                                                            h.a,
                                                                            {
                                                                                amount:
                                                                                    t.witness_budget,
                                                                                asset:
                                                                                    "1.3.0"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "td",
                                                                        null,
                                                                        " ",
                                                                        r.a.createElement(
                                                                            y.a,
                                                                            {
                                                                                time: new Date(
                                                                                    t.next_maintenance_time +
                                                                                        "Z"
                                                                                )
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(x.Input, {
                                                        placeholder: i.a.translate(
                                                            "explorer.witnesses.filter_by_name"
                                                        ),
                                                        onChange: this._onFilter.bind(
                                                            this
                                                        ),
                                                        style: {
                                                            width: "200px",
                                                            marginBottom:
                                                                "12px",
                                                            marginTop: "4px"
                                                        },
                                                        addonAfter: r.a.createElement(
                                                            x.Icon,
                                                            {type: "search"}
                                                        )
                                                    }),
                                                    r.a.createElement(P, {
                                                        current_aslot:
                                                            t.current_aslot,
                                                        current: a
                                                            ? a.get("id")
                                                            : null,
                                                        witnesses: c.a.List(
                                                            n.active_witnesses
                                                        ),
                                                        witnessList:
                                                            n.active_witnesses,
                                                        filter: this.state
                                                            .filterWitness,
                                                        cardView: this.state
                                                            .cardView
                                                    })
                                                )
                                            )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (N.propTypes = {
                globalObject: p.a.ChainObject.isRequired,
                dynGlobalObject: p.a.ChainObject.isRequired
            }),
                (N.defaultProps = {
                    globalObject: "2.0.0",
                    dynGlobalObject: "2.1.0"
                }),
                (N = Object(m.a)(N));
            var M = (function(e) {
                    function t() {
                        return (
                            C(this, t),
                            S(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        j(t, r.a.Component),
                        O(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(N, this.props);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                B = (M = Object(g.connect)(M, {
                    listenTo: function() {
                        return [_.a];
                    },
                    getProps: function() {
                        return {
                            cardView: _.a
                                .getState()
                                .viewSettings.get("cardView"),
                            filterWitness: _.a
                                .getState()
                                .viewSettings.get("filterWitness")
                        };
                    }
                })),
                I = (function() {
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
            function L(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function D(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function q(e, t) {
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
            }
            var R = (function(e) {
                function t() {
                    return (
                        L(this, t),
                        D(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        )
                    );
                }
                return (
                    q(t, r.a.Component),
                    I(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.committee_members,
                                    a = t.membersList,
                                    o = null,
                                    s = {};
                                n
                                    .filter(function(e) {
                                        return (
                                            !!e && -1 !== a.indexOf(e.get("id"))
                                        );
                                    })
                                    .forEach(function(e, t) {
                                        e && (s[e.get("id")] = t + 1);
                                    }),
                                    n.length > 0 &&
                                        n[1] &&
                                        (o = n
                                            .filter(function(t) {
                                                if (!t) return !1;
                                                var n = f.ChainStore.getObject(
                                                    t.get(
                                                        "committee_member_account"
                                                    )
                                                );
                                                return (
                                                    !!n &&
                                                    (!!f.ChainStore.getCommitteeMemberById(
                                                        n.get("id")
                                                    ) &&
                                                        -1 !==
                                                            n
                                                                .get("name")
                                                                .indexOf(
                                                                    e.props
                                                                        .filter ||
                                                                        ""
                                                                ))
                                                );
                                            })
                                            .map(function(e) {
                                                var t = f.ChainStore.getObject(
                                                        e.get(
                                                            "committee_member_account"
                                                        )
                                                    ),
                                                    n = f.ChainStore.getCommitteeMemberById(
                                                        t.get("id")
                                                    );
                                                return {
                                                    key: e.get("id"),
                                                    rank: s[e.get("id")],
                                                    name: t.get("name"),
                                                    votes: n.get("total_votes"),
                                                    url: n.get("url")
                                                };
                                            }));
                                var i = [
                                    {
                                        key: "#",
                                        title: "#",
                                        dataIndex: "rank",
                                        sorter: function(e, t) {
                                            return e.rank > t.rank
                                                ? 1
                                                : e.rank < t.rank
                                                    ? -1
                                                    : 0;
                                        }
                                    },
                                    {
                                        key: "name",
                                        title: "NAME",
                                        dataIndex: "name",
                                        sorter: function(e, t) {
                                            return e.name > t.name
                                                ? 1
                                                : e.name < t.name
                                                    ? -1
                                                    : 0;
                                        }
                                    },
                                    {
                                        key: "votes",
                                        title: "VOTES",
                                        dataIndex: "votes",
                                        render: function(e) {
                                            return r.a.createElement(h.a, {
                                                amount: e,
                                                asset: "1.3.0",
                                                decimalOffset: 5
                                            });
                                        },
                                        sorter: function(e, t) {
                                            return e.votes > t.votes
                                                ? 1
                                                : e.votes < t.votes
                                                    ? -1
                                                    : 0;
                                        }
                                    },
                                    {
                                        key: "url",
                                        title: "WEBPAGE",
                                        dataIndex: "url",
                                        render: function(e) {
                                            return r.a.createElement(
                                                "a",
                                                {href: e, target: "_blank"},
                                                e
                                            );
                                        }
                                    }
                                ];
                                return r.a.createElement(x.Table, {
                                    columns: i,
                                    dataSource: o,
                                    pagination: !1
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            (R.propTypes = {
                committee_members: p.a.ChainObjectsList.isRequired
            }),
                (R = Object(m.a)(R, {show_loader: !0}));
            var W = (function(e) {
                function t(e) {
                    L(this, t);
                    var n = D(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (
                        (n.state = {
                            filterCommitteeMember: e.filterCommitteeMember || ""
                        }),
                        n
                    );
                }
                return (
                    q(t, r.a.Component),
                    I(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    !c.a.is(
                                        e.globalObject,
                                        this.props.globalObject
                                    ) ||
                                    t.filterCommitteeMember !==
                                        this.state.filterCommitteeMember ||
                                    t.cardView !== this.state.cardView
                                );
                            }
                        },
                        {
                            key: "_onFilter",
                            value: function(e) {
                                e.preventDefault(),
                                    this.setState({
                                        filterCommitteeMember: e.target.value.toLowerCase()
                                    }),
                                    v.a.changeViewSetting({
                                        filterCommitteeMember: e.target.value.toLowerCase()
                                    });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.globalObject;
                                e = e.toJS();
                                var t = [];
                                for (var n in e.active_committee_members)
                                    e.active_committee_members.hasOwnProperty(
                                        n
                                    ) && t.push(e.active_committee_members[n]);
                                return r.a.createElement(
                                    "div",
                                    {className: "grid-block"},
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-block vertical medium-horizontal"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-block vertical"},
                                            r.a.createElement(
                                                "div",
                                                {className: "grid-content"},
                                                r.a.createElement(x.Input, {
                                                    placeholder: i.a.translate(
                                                        "explorer.witnesses.filter_by_name"
                                                    ),
                                                    onChange: this._onFilter.bind(
                                                        this
                                                    ),
                                                    style: {
                                                        width: "200px",
                                                        marginBottom: "12px",
                                                        marginTop: "4px"
                                                    },
                                                    addonAfter: r.a.createElement(
                                                        x.Icon,
                                                        {type: "search"}
                                                    )
                                                }),
                                                r.a.createElement(R, {
                                                    filter: this.state
                                                        .filterCommitteeMember,
                                                    committee_members: c.a.List(
                                                        e.active_committee_members
                                                    ),
                                                    membersList:
                                                        e.active_committee_members
                                                })
                                            )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (W.propTypes = {globalObject: p.a.ChainObject.isRequired}),
                (W.defaultProps = {globalObject: "2.0.0"}),
                (W = Object(m.a)(W));
            var F = (function(e) {
                    function t() {
                        return (
                            L(this, t),
                            D(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        q(t, r.a.Component),
                        I(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(W, this.props);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                z = (F = Object(g.connect)(F, {
                    listenTo: function() {
                        return [_.a];
                    },
                    getProps: function() {
                        return {
                            cardView: _.a
                                .getState()
                                .viewSettings.get("cardViewCommittee"),
                            filterCommitteeMember: _.a
                                .getState()
                                .viewSettings.get("filterCommitteeMember")
                        };
                    }
                })),
                U = n(118),
                V = n.n(U),
                H = n(499),
                G = n(1753),
                J = (function() {
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
            function K(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function Q(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function Y(e, t) {
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
            }
            var Z = f.ChainTypes.operations,
                X = Object.keys(Z),
                $ = {
                    general: [0, 25, 26, 27, 28, 32, 33, 37, 39, 40, 41],
                    asset: [
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        38,
                        42,
                        43,
                        44,
                        47,
                        48
                    ],
                    market: [1, 2, 3, 4, 45, 46],
                    account: [5, 6, 7, 8, 9],
                    business: [20, 21, 22, 23, 24, 29, 30, 31, 34, 35, 36]
                },
                ee = [5, 7, 20, 21, 34],
                te = (function(e) {
                    function t(e) {
                        return (
                            K(this, t),
                            Q(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this,
                                    e
                                )
                            )
                        );
                    }
                    return (
                        Y(t, r.a.Component),
                        J(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return !c.a.is(
                                        e.globalObject,
                                        this.props.globalObject
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.globalObject,
                                        n = e.settings,
                                        a = e.opIds;
                                    e.title;
                                    t = t.toJSON();
                                    var o = f.ChainStore.getAsset("1.3.0"),
                                        s = t.parameters.current_fees,
                                        l =
                                            t.parameters
                                                .network_percent_of_fee / 1e4,
                                        c = s.scale,
                                        u = s.parameters,
                                        p = n.get("unit") || o.get("symbol"),
                                        m = i.a.translate(
                                            "transaction.trxTypes"
                                        ),
                                        d = a.map(function(e) {
                                            var t = u.findIndex(function(t) {
                                                return t[0] === e;
                                            });
                                            if (-1 !== t) {
                                                var n = u[t],
                                                    a = n[0],
                                                    o = n[1],
                                                    s = X[a],
                                                    f = m[s],
                                                    d = l;
                                                10 === a && (d = 0.5 + 0.5 * l);
                                                var b = [],
                                                    y = !1,
                                                    g = E()("label", "info");
                                                for (var v in o) {
                                                    var _ = (o[v] * c) / 1e4,
                                                        k = _ * d,
                                                        w = i.a.translate(
                                                            "transaction.feeTypes"
                                                        ),
                                                        x = _
                                                            ? r.a.createElement(
                                                                  h.a,
                                                                  {
                                                                      amount: _,
                                                                      asset:
                                                                          "1.3.0"
                                                                  }
                                                              )
                                                            : w._none,
                                                        O = _
                                                            ? r.a.createElement(
                                                                  G.b,
                                                                  {
                                                                      fromAsset:
                                                                          "1.3.0",
                                                                      fullPrecision: !0,
                                                                      amount: _,
                                                                      toAsset: p,
                                                                      fullDecimals: !0
                                                                  }
                                                              )
                                                            : w._none,
                                                        C = k
                                                            ? r.a.createElement(
                                                                  h.a,
                                                                  {
                                                                      amount: k,
                                                                      asset:
                                                                          "1.3.0"
                                                                  }
                                                              )
                                                            : w._none,
                                                        S = k
                                                            ? r.a.createElement(
                                                                  G.b,
                                                                  {
                                                                      fromAsset:
                                                                          "1.3.0",
                                                                      fullPrecision: !0,
                                                                      amount: k,
                                                                      toAsset: p,
                                                                      fullDecimals: !0
                                                                  }
                                                              )
                                                            : w._none,
                                                        j = null;
                                                    y ||
                                                        ((y = !0),
                                                        (j = r.a.createElement(
                                                            "td",
                                                            {
                                                                rowSpan: "6",
                                                                style: {
                                                                    width:
                                                                        "15em"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                "span",
                                                                {className: g},
                                                                f
                                                            )
                                                        ))),
                                                        ee.indexOf(a) < 0
                                                            ? b.push(
                                                                  r.a.createElement(
                                                                      "tr",
                                                                      {
                                                                          key:
                                                                              a.toString() +
                                                                              v,
                                                                          className:
                                                                              "Annual Membership" ===
                                                                              w[
                                                                                  v
                                                                              ]
                                                                                  ? "linethrough"
                                                                                  : ""
                                                                      },
                                                                      j,
                                                                      r.a.createElement(
                                                                          "td",
                                                                          null,
                                                                          w[v]
                                                                      ),
                                                                      r.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          x,
                                                                          0 !==
                                                                              _ &&
                                                                          "BTS" !==
                                                                              p
                                                                              ? r.a.createElement(
                                                                                    "span",
                                                                                    null,
                                                                                    " / ",
                                                                                    O
                                                                                )
                                                                              : null
                                                                      ),
                                                                      r.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          8 !==
                                                                          t
                                                                              ? C
                                                                              : null,
                                                                          8 !==
                                                                              t &&
                                                                          0 !==
                                                                              _ &&
                                                                          "BTS" !==
                                                                              p
                                                                              ? r.a.createElement(
                                                                                    "span",
                                                                                    null,
                                                                                    " / ",
                                                                                    S
                                                                                )
                                                                              : null
                                                                      )
                                                                  )
                                                              )
                                                            : b.push(
                                                                  r.a.createElement(
                                                                      "tr",
                                                                      {
                                                                          key:
                                                                              a.toString() +
                                                                              v
                                                                      },
                                                                      j,
                                                                      r.a.createElement(
                                                                          "td",
                                                                          null,
                                                                          w[v]
                                                                      ),
                                                                      r.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          "- ",
                                                                          r.a.createElement(
                                                                              "sup",
                                                                              null,
                                                                              "*"
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          C,
                                                                          0 !==
                                                                              _ &&
                                                                          "BTS" !==
                                                                              p
                                                                              ? r.a.createElement(
                                                                                    "span",
                                                                                    null,
                                                                                    " / ",
                                                                                    S
                                                                                )
                                                                              : null
                                                                      )
                                                                  )
                                                              );
                                                }
                                                return r.a.createElement(
                                                    "tbody",
                                                    {key: t},
                                                    b
                                                );
                                            }
                                            console.warn(
                                                "Asking for non-existing fee id %d! Check group settings in Fees.jsx",
                                                e
                                            );
                                        });
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            this.props.title
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {className: "table"},
                                            r.a.createElement(
                                                "thead",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        r.a.createElement(b.a, {
                                                            content:
                                                                "explorer.block.op"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        r.a.createElement(b.a, {
                                                            content:
                                                                "explorer.fees.type"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        r.a.createElement(b.a, {
                                                            content:
                                                                "explorer.fees.fee"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        r.a.createElement(b.a, {
                                                            content:
                                                                "explorer.fees.feeltm"
                                                        })
                                                    )
                                                )
                                            ),
                                            d
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (te.propTypes = {globalObject: p.a.ChainObject.isRequired}),
                (te.defaultProps = {globalObject: "2.0.0"}),
                (te = Object(m.a)(te));
            var ne = (function(e) {
                    function t() {
                        return (
                            K(this, t),
                            Q(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        Y(t, r.a.Component),
                        J(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = i.a.translate(
                                            "transaction.feeGroups"
                                        ),
                                        t = [];
                                    for (var n in $) {
                                        var a = e[n],
                                            o = $[n];
                                        t.push(
                                            r.a.createElement(te, {
                                                key: n,
                                                settings: this.props.settings,
                                                opIds: o,
                                                title: a
                                            })
                                        );
                                    }
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className: "grid-block vertical",
                                            style: {overflow: "visible"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block small-12 shrink",
                                                style: {overflow: "visible"}
                                            },
                                            r.a.createElement(H.a, {
                                                path: "components/Fees"
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block small-12 ",
                                                style: {overflow: "visible"}
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "grid-content"},
                                                t
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ae = (function() {
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
            var re = (function(e) {
                    function t() {
                        return (
                            (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t),
                            (function(e, t) {
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
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
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
                        })(t, r.a.Component),
                        ae(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        V.a,
                                        {
                                            stores: [_.a],
                                            inject: {
                                                settings: _.a.getState()
                                                    .settings
                                            }
                                        },
                                        r.a.createElement(ne, this.props)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                oe = n(125),
                se = n(2063),
                ie = n(225),
                le = n(97),
                ce = n(509),
                ue = n(1801),
                pe = n(149),
                me = n(1788),
                fe = n.n(me),
                he = (function() {
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
            var de = (function(e) {
                    function t() {
                        return (
                            (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t),
                            (function(e, t) {
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
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
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
                        })(t, r.a.Component),
                        he(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    if (e.blocks.size < 20) return !1;
                                    var t = this.refs.trx_chart
                                        ? this.refs.trx_chart.chart
                                        : null;
                                    if (t && e.blocks !== this.props.blocks) {
                                        var n = this._getData(e),
                                            a = n.trxData,
                                            r = n.colors,
                                            o = t.series[0],
                                            s = o.xData[o.xData.length - 1];
                                        if (o.xData.length)
                                            return (
                                                a.forEach(function(e) {
                                                    e[0] > s &&
                                                        o.addPoint(
                                                            e,
                                                            !1,
                                                            o.xData.length >= 30
                                                        );
                                                }),
                                                (t.options.plotOptions.column.colors = r),
                                                t.redraw(),
                                                !1
                                            );
                                    }
                                    return (
                                        e.blocks !== this.props.blocks ||
                                        e.head_block !== this.props.head_block
                                    );
                                }
                            },
                            {
                                key: "_getData",
                                value: function(e) {
                                    var t = e.blocks,
                                        n = e.head_block,
                                        a = [],
                                        r = 0;
                                    return {
                                        colors: (a = t
                                            .filter(function(e) {
                                                return e.id >= n - 30;
                                            })
                                            .sort(function(e, t) {
                                                return e.id - t.id;
                                            })
                                            .takeLast(30)
                                            .map(function(e) {
                                                return (
                                                    (r = Math.max(
                                                        e.transactions.length,
                                                        r
                                                    )),
                                                    [
                                                        e.id,
                                                        e.transactions.length
                                                    ]
                                                );
                                            })
                                            .toArray()).map(function(e) {
                                            return e[1] <= 5
                                                ? "#50D2C2"
                                                : e[1] <= 10
                                                    ? "#A0D3E8"
                                                    : e[1] <= 20
                                                        ? "#FCAB53"
                                                        : "#deb869";
                                        }),
                                        trxData: a,
                                        max: r
                                    };
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this._getData(this.props),
                                        t = e.trxData,
                                        n = e.colors,
                                        a = e.max,
                                        o = i.a.translate(
                                            "explorer.blocks.transactions"
                                        ),
                                        s = {
                                            chart: {
                                                type: "column",
                                                backgroundColor:
                                                    "rgba(255, 0, 0, 0)",
                                                spacing: [0, 0, 5, 0],
                                                height: 100
                                            },
                                            title: {text: null},
                                            credits: {enabled: !1},
                                            legend: {enabled: !1},
                                            rangeSelector: {enabled: !1},
                                            navigator: {enabled: !1},
                                            scrollbar: {enabled: !1},
                                            tooltip: {
                                                shared: !1,
                                                formatter: function() {
                                                    return o + ": " + this.y;
                                                }
                                            },
                                            series: [
                                                {
                                                    name: "Transactions",
                                                    data: t,
                                                    color: "#50D2C2"
                                                }
                                            ],
                                            xAxis: {
                                                labels: {enabled: !1},
                                                title: {text: null}
                                            },
                                            yAxis: {
                                                min: 0,
                                                max: Math.max(1.5, a + 0.5),
                                                title: {text: null},
                                                labels: {enabled: !1},
                                                gridLineWidth: 0,
                                                currentPriceIndicator: {
                                                    enabled: !1
                                                }
                                            },
                                            plotOptions: {
                                                column: {
                                                    animation: !0,
                                                    minPointLength: 5,
                                                    colorByPoint: !0,
                                                    colors: n,
                                                    borderWidth: 0
                                                }
                                            }
                                        };
                                    return t.length
                                        ? r.a.createElement(fe.a, {
                                              ref: "trx_chart",
                                              config: s
                                          })
                                        : null;
                                }
                            }
                        ]),
                        t
                    );
                })(),
                be = n(576),
                ye = n(489);
            var ge = function(e, t, n) {
                    var a = null == e ? 0 : e.length;
                    return a
                        ? ((t =
                              a -
                              (t = n || void 0 === t ? 1 : Object(ye.a)(t))),
                          Object(be.a)(e, t < 0 ? 0 : t, a))
                        : [];
                },
                ve = (function() {
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
            var _e = (function(e) {
                    function t() {
                        return (
                            (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t),
                            (function(e, t) {
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
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
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
                        })(t, r.a.Component),
                        ve(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    if (e.blockTimes.length < 19) return !1;
                                    if (0 === this.props.blockTimes.length)
                                        return !0;
                                    var t = this.refs.chart
                                        ? this.refs.chart.chart
                                        : null;
                                    if (t) {
                                        var n = this._getData(e),
                                            a = n.blockTimes,
                                            r = n.colors,
                                            o = t.series[0],
                                            s = o.xData[o.xData.length - 1];
                                        if (o.xData.length)
                                            return (
                                                a.forEach(function(e) {
                                                    e[0] > s &&
                                                        o.addPoint(
                                                            e,
                                                            !1,
                                                            o.xData.length >= 30
                                                        );
                                                }),
                                                (t.options.plotOptions.column.colors = r),
                                                t.redraw(),
                                                !1
                                            );
                                    }
                                    return (
                                        e.blockTimes[
                                            e.blockTimes.length - 1
                                        ][0] !==
                                            this.props.blockTimes[
                                                this.props.blockTimes.length - 1
                                            ][0] ||
                                        e.blockTimes.length !==
                                            this.props.blockTimes.length
                                    );
                                }
                            },
                            {
                                key: "_getData",
                                value: function() {
                                    var e = this.props,
                                        t = e.blockTimes,
                                        n = e.head_block;
                                    return (
                                        t.filter(function(e) {
                                            return e[0] >= n - 30;
                                        }),
                                        t && t.length && (t = ge(t, 30)),
                                        {
                                            blockTimes: t,
                                            colors: t.map(function(e) {
                                                return e[1] <= 5
                                                    ? "#50D2C2"
                                                    : e[1] <= 10
                                                        ? "#A0D3E8"
                                                        : e[1] <= 20
                                                            ? "#FCAB53"
                                                            : "#deb869";
                                            })
                                        }
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this._getData(this.props),
                                        t = e.blockTimes,
                                        n = e.colors,
                                        a = i.a.translate(
                                            "explorer.blocks.block_time"
                                        ),
                                        o = {
                                            chart: {
                                                type: "column",
                                                backgroundColor:
                                                    "rgba(255, 0, 0, 0)",
                                                spacing: [0, 0, 5, 0],
                                                height: 100
                                            },
                                            title: {text: null},
                                            credits: {enabled: !1},
                                            legend: {enabled: !1},
                                            rangeSelector: {enabled: !1},
                                            navigator: {enabled: !1},
                                            scrollbar: {enabled: !1},
                                            tooltip: {
                                                shared: !1,
                                                formatter: function() {
                                                    return (
                                                        a + ": " + this.y + "s"
                                                    );
                                                }
                                            },
                                            series: [
                                                {
                                                    name: "Block time",
                                                    data: t,
                                                    color: "#50D2C2"
                                                }
                                            ],
                                            xAxis: {
                                                labels: {enabled: !1},
                                                title: {text: null}
                                            },
                                            yAxis: {
                                                min: 0,
                                                title: {text: null},
                                                labels: {enabled: !1},
                                                gridLineWidth: 0,
                                                currentPriceIndicator: {
                                                    enabled: !1
                                                }
                                            },
                                            plotOptions: {
                                                column: {
                                                    animation: !0,
                                                    minPointLength: 3,
                                                    colorByPoint: !0,
                                                    colors: n,
                                                    borderWidth: 0
                                                }
                                            }
                                        };
                                    return t.length
                                        ? r.a.createElement(fe.a, {
                                              ref: "chart",
                                              config: o
                                          })
                                        : null;
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ke = n(16),
                Ee = n(1742),
                we = n.n(Ee),
                xe = n(1737),
                Oe = (function() {
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
            function Ce(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function Se(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function je(e, t) {
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
            }
            n(748);
            var Ae = (function(e) {
                    function t() {
                        return (
                            Ce(this, t),
                            Se(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        je(t, r.a.Component),
                        Oe(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return e.blockTime !== this.props.blockTime;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.blockTime,
                                        t =
                                            new Date().getTime() -
                                            new Date(e).getTime(),
                                        n = E()(
                                            "txtlabel",
                                            {success: t <= 6e3},
                                            {info: t > 6e3 && t <= 15e3},
                                            {warning: t > 15e3 && t <= 25e3},
                                            {error: t > 25e3}
                                        );
                                    return e
                                        ? r.a.createElement(
                                              "h3",
                                              {className: n},
                                              r.a.createElement(y.a, {time: e})
                                          )
                                        : null;
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Te = (function(e) {
                    function t(e) {
                        Ce(this, t);
                        var n = Se(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (n.state = {
                                animateEnter: !1,
                                operationsHeight: null,
                                blocksHeight: null
                            }),
                            (n._updateHeight = n._updateHeight.bind(n)),
                            n
                        );
                    }
                    return (
                        je(t, r.a.Component),
                        Oe(t, [
                            {
                                key: "_getBlock",
                                value: function(e, t) {
                                    e &&
                                        ((e = parseInt(e, 10)),
                                        ie.a.getLatest(e, t));
                                }
                            },
                            {
                                key: "componentWillMount",
                                value: function() {
                                    window.addEventListener(
                                        "resize",
                                        this._updateHeight,
                                        {capture: !1, passive: !0}
                                    );
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    window.removeEventListener(
                                        "resize",
                                        this._updateHeight
                                    );
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    if (0 === e.latestBlocks.size)
                                        return this._getInitialBlocks();
                                    this.state.animateEnter ||
                                        this.setState({animateEnter: !0});
                                    var t = e.dynGlobalObject.get(
                                        "head_block_number"
                                    );
                                    return e.latestBlocks.size >= 20 &&
                                        e.dynGlobalObject.get(
                                            "head_block_number"
                                        ) !== e.latestBlocks.get(0).id
                                        ? this._getBlock(t, t)
                                        : void 0;
                                }
                            },
                            {
                                key: "componentDidMount",
                                value: function() {
                                    this._getInitialBlocks();
                                    var e = this.refs.operations;
                                    we.a.initialize(e);
                                    var t = this.refs.blocks;
                                    we.a.initialize(t), this._updateHeight();
                                }
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function(e, t) {
                                    return (
                                        !c.a.is(
                                            e.latestBlocks,
                                            this.props.latestBlocks
                                        ) ||
                                        !ke.a.are_equal_shallow(t, this.state)
                                    );
                                }
                            },
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    this._updateHeight();
                                }
                            },
                            {
                                key: "_getInitialBlocks",
                                value: function() {
                                    var e = parseInt(
                                        this.props.dynGlobalObject.get(
                                            "head_block_number"
                                        ),
                                        10
                                    );
                                    if (e)
                                        for (var t = 19; t >= 0; t--) {
                                            var n = !1;
                                            if (
                                                this.props.latestBlocks.size > 0
                                            )
                                                for (
                                                    var a = 0;
                                                    a <
                                                    this.props.latestBlocks
                                                        .size;
                                                    a++
                                                )
                                                    if (
                                                        this.props.latestBlocks.get(
                                                            a
                                                        ).id ===
                                                        e - t
                                                    ) {
                                                        n = !0;
                                                        break;
                                                    }
                                            n || this._getBlock(e - t, e);
                                        }
                                }
                            },
                            {
                                key: "_updateHeight",
                                value: function() {
                                    var e = this.refs.outerWrapper.offsetHeight,
                                        t = this.refs.operationsText
                                            .offsetHeight,
                                        n = this.refs.blocksText.offsetHeight;
                                    this.setState(
                                        {
                                            operationsHeight: e - t,
                                            blocksHeight: e - n
                                        },
                                        this.psUpdate
                                    );
                                }
                            },
                            {
                                key: "psUpdate",
                                value: function() {
                                    var e = this.refs.operations;
                                    we.a.update(e);
                                    var t = this.refs.blocks;
                                    we.a.update(t);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.latestBlocks,
                                        n = e.latestTransactions,
                                        a = e.globalObject,
                                        o = e.dynGlobalObject,
                                        s = e.coreAsset,
                                        i = this.state,
                                        l = i.blocksHeight,
                                        c = i.operationsHeight,
                                        u = this.props.getDynamicObject(
                                            s.get("dynamic_asset_data_id")
                                        ),
                                        p = null,
                                        m = null,
                                        f = null,
                                        d = 0,
                                        y = t.size,
                                        g = 0,
                                        v = [],
                                        _ = 0;
                                    if (t && t.size >= 20) {
                                        var k = void 0,
                                            E = void 0,
                                            w = void 0;
                                        t
                                            .filter(function(e, t) {
                                                return (
                                                    e.id ===
                                                    o.get("head_block_number") -
                                                        t
                                                );
                                            })
                                            .sort(function(e, t) {
                                                return e.id - t.id;
                                            })
                                            .forEach(function(e, t) {
                                                (d += e.transactions.length),
                                                    t > 0
                                                        ? (v.push([
                                                              e.id,
                                                              (e.timestamp -
                                                                  k) /
                                                                  1e3
                                                          ]),
                                                          (E = e.timestamp))
                                                        : (w = e.timestamp),
                                                    (k = e.timestamp);
                                            }),
                                            (p = t
                                                .sort(function(e, t) {
                                                    return t.id - e.id;
                                                })
                                                .take(20)
                                                .map(function(e) {
                                                    return r.a.createElement(
                                                        "tr",
                                                        {key: e.id},
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                se.a,
                                                                {
                                                                    to:
                                                                        "/block/" +
                                                                        e.id
                                                                },
                                                                "#",
                                                                ke.a.format_number(
                                                                    e.id,
                                                                    0
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                le.a,
                                                                {
                                                                    value:
                                                                        e.timestamp,
                                                                    format:
                                                                        "time"
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                ue.a,
                                                                {
                                                                    witness:
                                                                        e.witness
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            ke.a.format_number(
                                                                e.transactions
                                                                    .length,
                                                                0
                                                            )
                                                        )
                                                    );
                                                })
                                                .toArray());
                                        var x = 0;
                                        (m = n
                                            .sort(function(e, t) {
                                                return (
                                                    t.block_num - e.block_num
                                                );
                                            })
                                            .take(20)
                                            .map(function(e) {
                                                var t = 0;
                                                return e.operations
                                                    .map(function(n) {
                                                        return x > 15
                                                            ? null
                                                            : r.a.createElement(
                                                                  ce.a,
                                                                  {
                                                                      key: x++,
                                                                      op: n,
                                                                      result:
                                                                          e
                                                                              .operation_results[
                                                                              t++
                                                                          ],
                                                                      block:
                                                                          e.block_num,
                                                                      hideFee: !0,
                                                                      hideOpLabel: !1,
                                                                      current:
                                                                          "1.2.0",
                                                                      hideDate: !0,
                                                                      hidePending: !0
                                                                  }
                                                              );
                                                    })
                                                    .filter(function(e) {
                                                        return !!e;
                                                    });
                                            })
                                            .toArray()),
                                            (f = t.first().timestamp),
                                            (_ = v.reduce(function(e, t, n, a) {
                                                return e + t[1] / a.length;
                                            }, 0)),
                                            (g = d / ((E - w) / 1e3));
                                    }
                                    return r.a.createElement(
                                        "div",
                                        {
                                            ref: "outerWrapper",
                                            className: "grid-block vertical"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "align-center grid-block shrink small-horizontal blocks-row"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.current_block"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        null,
                                                        "#",
                                                        ke.a.format_number(
                                                            o.get(
                                                                "head_block_number"
                                                            ),
                                                            0
                                                        )
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.last_block"
                                                        })
                                                    ),
                                                    r.a.createElement(Ae, {
                                                        blockTime: f
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.trx_per_sec"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        null,
                                                        ke.a.format_number(g, 2)
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.avg_conf_time"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        null,
                                                        ke.a.format_number(
                                                            _ / 2,
                                                            2
                                                        ),
                                                        "s"
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "align-center grid-block shrink small-horizontal  blocks-row"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.active_witnesses"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        {
                                                            className:
                                                                "txtlabel success"
                                                        },
                                                        a.get(
                                                            "active_witnesses"
                                                        ).size
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.active_committee_members"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        {
                                                            className:
                                                                "txtlabel success"
                                                        },
                                                        a.get(
                                                            "active_committee_members"
                                                        ).size
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.trx_per_block"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        null,
                                                        ke.a.format_number(
                                                            d / y || 0,
                                                            2
                                                        )
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-6 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.recently_missed_blocks"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h2",
                                                        {
                                                            className:
                                                                "txtlabel warning",
                                                            style: {
                                                                fontWeight:
                                                                    "100"
                                                            }
                                                        },
                                                        o.get(
                                                            "recently_missed_count"
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "align-center grid-block shrink small-vertical medium-horizontal blocks-row"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-12 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.asset.summary.current_supply"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h3",
                                                        {className: "txtlabel"},
                                                        u
                                                            ? r.a.createElement(
                                                                  h.a,
                                                                  {
                                                                      amount: u.get(
                                                                          "current_supply"
                                                                      ),
                                                                      asset: s.get(
                                                                          "id"
                                                                      ),
                                                                      decimalOffset: 5
                                                                  }
                                                              )
                                                            : null
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-12 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.block_times"
                                                        })
                                                    ),
                                                    r.a.createElement(_e, {
                                                        blockTimes: v,
                                                        head_block_number: o.get(
                                                            "head_block_number"
                                                        )
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-12 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.blocks.trx_per_block"
                                                        })
                                                    ),
                                                    r.a.createElement(de, {
                                                        blocks: t,
                                                        head_block: o.get(
                                                            "head_block_number"
                                                        )
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block text-center small-12 medium-3"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content no-overflow clear-fix"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {className: "txtlabel"},
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.asset.summary.stealth_supply"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "h3",
                                                        {className: "txtlabel"},
                                                        u
                                                            ? r.a.createElement(
                                                                  h.a,
                                                                  {
                                                                      amount: u.get(
                                                                          "confidential_supply"
                                                                      ),
                                                                      asset: s.get(
                                                                          "id"
                                                                      ),
                                                                      decimalOffset: 5
                                                                  }
                                                              )
                                                            : null
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                ref: "transactionsBlock",
                                                className:
                                                    "grid-block no-overflow"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block small-12 medium-6 vertical no-overflow",
                                                    style: {paddingBottom: 0}
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block vertical no-overflow generic-bordered-box"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {ref: "operationsText"},
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "block-content-header"
                                                            },
                                                            r.a.createElement(
                                                                b.a,
                                                                {
                                                                    content:
                                                                        "account.recent"
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    "table fixed-height-2rem"
                                                            },
                                                            r.a.createElement(
                                                                "thead",
                                                                null,
                                                                r.a.createElement(
                                                                    "tr",
                                                                    null,
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            b.a,
                                                                            {
                                                                                content:
                                                                                    "account.votes.info"
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block",
                                                            style: {
                                                                maxHeight:
                                                                    c ||
                                                                    "400px",
                                                                overflow:
                                                                    "hidden"
                                                            },
                                                            ref: "operations"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    "table fixed-height-2rem"
                                                            },
                                                            r.a.createElement(
                                                                "tbody",
                                                                null,
                                                                m
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block medium-6 show-for-medium vertical no-overflow",
                                                    style: {
                                                        paddingBottom: 0,
                                                        paddingLeft: 5
                                                    }
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block vertical no-overflow generic-bordered-box"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {ref: "blocksText"},
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "block-content-header"
                                                            },
                                                            r.a.createElement(
                                                                b.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "explorer.blocks.recent"
                                                                }
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block vertical",
                                                            style: {
                                                                maxHeight:
                                                                    l ||
                                                                    "438px",
                                                                overflow:
                                                                    "hidden"
                                                            },
                                                            ref: "blocks"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    "table fixed-height-2rem"
                                                            },
                                                            r.a.createElement(
                                                                "thead",
                                                                null,
                                                                r.a.createElement(
                                                                    "tr",
                                                                    null,
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            b.a,
                                                                            {
                                                                                component:
                                                                                    "span",
                                                                                content:
                                                                                    "explorer.block.id"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            b.a,
                                                                            {
                                                                                component:
                                                                                    "span",
                                                                                content:
                                                                                    "explorer.block.date"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            b.a,
                                                                            {
                                                                                component:
                                                                                    "span",
                                                                                content:
                                                                                    "explorer.block.witness"
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "th",
                                                                        null,
                                                                        r.a.createElement(
                                                                            b.a,
                                                                            {
                                                                                component:
                                                                                    "span",
                                                                                content:
                                                                                    "explorer.block.count"
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                xe.a,
                                                                {
                                                                    component:
                                                                        "tbody",
                                                                    transitionName:
                                                                        "newrow"
                                                                },
                                                                p
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (Te.propTypes = {
                globalObject: p.a.ChainObject.isRequired,
                dynGlobalObject: p.a.ChainObject.isRequired
            }),
                (Te.defaultProps = {
                    globalObject: "2.0.0",
                    dynGlobalObject: "2.1.0",
                    latestBlocks: {},
                    assets: {},
                    accounts: {},
                    height: 1
                }),
                (Te = Object(m.a)(Te, {show_loader: !0}));
            var Pe = (Te = Object(pe.a)(Te, {
                    propNames: ["coreAsset"],
                    withDynamic: !0
                })),
                Ne = (function() {
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
            var Me = (function(e) {
                    function t() {
                        return (
                            (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t),
                            (function(e, t) {
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
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
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
                        })(t, r.a.Component),
                        Ne(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        V.a,
                                        {
                                            stores: [oe.a],
                                            inject: {
                                                latestBlocks: function() {
                                                    return oe.a.getState()
                                                        .latestBlocks;
                                                },
                                                latestTransactions: function() {
                                                    return oe.a.getState()
                                                        .latestTransactions;
                                                }
                                            }
                                        },
                                        r.a.createElement(Pe, null)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Be = n(1748),
                Ie = n(1),
                Le = n.n(Ie),
                De = n(1735),
                qe = n(132),
                Re = n(314),
                We = n(131),
                Fe = n(38),
                ze = n(96),
                Ue = n(1743),
                Ve = n(13),
                He =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  "function" == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? "symbol"
                                  : typeof e;
                          },
                Ge = (function() {
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
            function Je(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n),
                    e
                );
            }
            var Ke = new ze.a("__graphene__"),
                Qe = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var n = (function(e, t) {
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
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this
                                )
                            ),
                            a = Ve.Apis.instance().chain_id;
                        return (
                            (a = a ? a.substr(0, 8) : "4018d784"),
                            (n.state = {
                                chainID: a,
                                foundLast: !1,
                                lastAsset: "",
                                isLoading: !1,
                                totalAssets:
                                    "object" != He(Ke.get("totalAssets_" + a))
                                        ? Ke.get("totalAssets_" + a)
                                        : a && "4018d784" === a
                                            ? 3e3
                                            : 50,
                                assetsFetched: 0,
                                activeFilter: "market",
                                filterUIA: e.filterUIA || "",
                                filterMPA: e.filterMPA || "",
                                filterPM: e.filterPM || ""
                            }),
                            n
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
                        })(t, r.a.Component),
                        Ge(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e, t) {
                                    return (
                                        !c.a.is(e.assets, this.props.assets) ||
                                        !ke.a.are_equal_shallow(t, this.state)
                                    );
                                }
                            },
                            {
                                key: "componentWillMount",
                                value: function() {
                                    this._checkAssets(this.props.assets, !0);
                                }
                            },
                            {
                                key: "_checkAssets",
                                value: function(e, t) {
                                    this.setState({isLoading: !0});
                                    var n = e
                                        .sort(function(e, t) {
                                            return e.symbol > t.symbol
                                                ? 1
                                                : e.symbol < t.symbol
                                                    ? -1
                                                    : 0;
                                        })
                                        .last();
                                    0 === e.size || t
                                        ? (De.a.getAssetList.defer("A", 100),
                                          this.setState({assetsFetched: 100}))
                                        : e.size >= this.state.assetsFetched &&
                                          (De.a.getAssetList.defer(
                                              n.symbol,
                                              100
                                          ),
                                          this.setState({
                                              assetsFetched:
                                                  this.state.assetsFetched + 99
                                          })),
                                        e.size > this.state.totalAssets &&
                                            Ke.set(
                                                "totalAssets_" +
                                                    this.state.chainID,
                                                e.size
                                            ),
                                        this.state.assetsFetched >=
                                            this.state.totalAssets - 100 &&
                                            this.setState({isLoading: !1});
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    e.assets !== this.props.assets &&
                                        this._checkAssets(e.assets);
                                }
                            },
                            {
                                key: "linkToAccount",
                                value: function(e) {
                                    return e
                                        ? r.a.createElement(qe.a, {account: e})
                                        : r.a.createElement("span", null, "-");
                                }
                            },
                            {
                                key: "_toggleFilter",
                                value: function(e) {
                                    this.setState({activeFilter: e});
                                }
                            },
                            {
                                key: "_onFilter",
                                value: function(e, t) {
                                    this.setState(
                                        Je({}, e, t.target.value.toUpperCase())
                                    ),
                                        v.a.changeViewSetting(
                                            Je(
                                                {},
                                                e,
                                                t.target.value.toUpperCase()
                                            )
                                        );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props.assets,
                                        n = this.state.activeFilter,
                                        a = i.a
                                            .translate("markets.filter")
                                            .toUpperCase(),
                                        o = f.ChainStore.getAsset("1.3.0"),
                                        s = void 0,
                                        l = void 0,
                                        c = void 0;
                                    "user" == n &&
                                        (s = t
                                            .filter(function(t) {
                                                return (
                                                    !t.market_asset &&
                                                    -1 !==
                                                        t.symbol.indexOf(
                                                            e.state.filterUIA
                                                        )
                                                );
                                            })
                                            .map(function(t) {
                                                var n = Re.a.parseDescription(
                                                        t.options.description
                                                    ),
                                                    a =
                                                        t.symbol +
                                                        "_" +
                                                        (n.market
                                                            ? n.market
                                                            : o
                                                                ? o.get(
                                                                      "symbol"
                                                                  )
                                                                : "BTS");
                                                return r.a.createElement(
                                                    "tr",
                                                    {key: t.symbol},
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(
                                                            se.a,
                                                            {
                                                                to:
                                                                    "/asset/" +
                                                                    t.symbol
                                                            },
                                                            r.a.createElement(
                                                                We.a,
                                                                {name: t.symbol}
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        e.linkToAccount(
                                                            t.issuer
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(h.a, {
                                                            amount:
                                                                t.dynamic
                                                                    .current_supply,
                                                            asset: t.id,
                                                            hide_asset: !0
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(
                                                            se.a,
                                                            {
                                                                className:
                                                                    "button outline",
                                                                to:
                                                                    "/market/" +
                                                                    a
                                                            },
                                                            r.a.createElement(
                                                                b.a,
                                                                {
                                                                    content:
                                                                        "header.exchange"
                                                                }
                                                            )
                                                        )
                                                    )
                                                );
                                            })
                                            .sort(function(e, t) {
                                                return e.key > t.key
                                                    ? 1
                                                    : e.key < t.key
                                                        ? -1
                                                        : 0;
                                            })
                                            .toArray()),
                                        "market" == n &&
                                            (l = t
                                                .filter(function(t) {
                                                    return (
                                                        t.bitasset_data &&
                                                        !t.bitasset_data
                                                            .is_prediction_market &&
                                                        -1 !==
                                                            t.symbol.indexOf(
                                                                e.state
                                                                    .filterMPA
                                                            )
                                                    );
                                                })
                                                .map(function(t) {
                                                    var n = Re.a.parseDescription(
                                                            t.options
                                                                .description
                                                        ),
                                                        a =
                                                            t.symbol +
                                                            "_" +
                                                            (n.market
                                                                ? n.market
                                                                : o
                                                                    ? o.get(
                                                                          "symbol"
                                                                      )
                                                                    : "BTS");
                                                    return r.a.createElement(
                                                        "tr",
                                                        {key: t.symbol},
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                se.a,
                                                                {
                                                                    to:
                                                                        "/asset/" +
                                                                        t.symbol
                                                                },
                                                                r.a.createElement(
                                                                    We.a,
                                                                    {
                                                                        name:
                                                                            t.symbol
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            e.linkToAccount(
                                                                t.issuer
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                h.a,
                                                                {
                                                                    amount:
                                                                        t
                                                                            .dynamic
                                                                            .current_supply,
                                                                    asset: t.id,
                                                                    hide_asset: !0
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            null,
                                                            r.a.createElement(
                                                                se.a,
                                                                {
                                                                    className:
                                                                        "button outline",
                                                                    to:
                                                                        "/market/" +
                                                                        a
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        content:
                                                                            "header.exchange"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    );
                                                })
                                                .sort(function(e, t) {
                                                    return e.key > t.key
                                                        ? 1
                                                        : e.key < t.key
                                                            ? -1
                                                            : 0;
                                                })
                                                .toArray()),
                                        "prediction" == n &&
                                            (c = t
                                                .filter(function(t) {
                                                    var n = Re.a.parseDescription(
                                                        t.options.description
                                                    );
                                                    return (
                                                        t.bitasset_data &&
                                                        t.bitasset_data
                                                            .is_prediction_market &&
                                                        (-1 !==
                                                            t.symbol
                                                                .toLowerCase()
                                                                .indexOf(
                                                                    e.state.filterPM.toLowerCase()
                                                                ) ||
                                                            -1 !==
                                                                n.main
                                                                    .toLowerCase()
                                                                    .indexOf(
                                                                        e.state.filterPM.toLowerCase()
                                                                    ))
                                                    );
                                                })
                                                .map(function(e) {
                                                    var t = Re.a.parseDescription(
                                                            e.options
                                                                .description
                                                        ),
                                                        n =
                                                            e.symbol +
                                                            "_" +
                                                            (t.market
                                                                ? t.market
                                                                : o
                                                                    ? o.get(
                                                                          "symbol"
                                                                      )
                                                                    : "BTS");
                                                    return r.a.createElement(
                                                        "tr",
                                                        {
                                                            key: e.id.split(
                                                                "."
                                                            )[2]
                                                        },
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    width: "80%"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    style: {
                                                                        paddingTop: 10,
                                                                        fontWeight:
                                                                            "bold"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    se.a,
                                                                    {
                                                                        to:
                                                                            "/asset/" +
                                                                            e.symbol
                                                                    },
                                                                    r.a.createElement(
                                                                        We.a,
                                                                        {
                                                                            name:
                                                                                e.symbol
                                                                        }
                                                                    )
                                                                ),
                                                                t.condition
                                                                    ? r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          " (",
                                                                          t.condition,
                                                                          ")"
                                                                      )
                                                                    : null
                                                            ),
                                                            t
                                                                ? r.a.createElement(
                                                                      "div",
                                                                      {
                                                                          style: {
                                                                              padding:
                                                                                  "10px 20px 5px 0",
                                                                              lineHeight:
                                                                                  "18px"
                                                                          }
                                                                      },
                                                                      t.main
                                                                  )
                                                                : null,
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    style: {
                                                                        padding:
                                                                            "0 20px 5px 0",
                                                                        lineHeight:
                                                                            "18px"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    qe.a,
                                                                    {
                                                                        account:
                                                                            e.issuer
                                                                    }
                                                                ),
                                                                r.a.createElement(
                                                                    "span",
                                                                    null,
                                                                    " ",
                                                                    "-",
                                                                    " ",
                                                                    r.a.createElement(
                                                                        h.a,
                                                                        {
                                                                            amount:
                                                                                e
                                                                                    .dynamic
                                                                                    .current_supply,
                                                                            asset:
                                                                                e.id
                                                                        }
                                                                    )
                                                                ),
                                                                t.expiry
                                                                    ? r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          " - ",
                                                                          t.expiry
                                                                      )
                                                                    : null
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                style: {
                                                                    width: "20%"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                se.a,
                                                                {
                                                                    className:
                                                                        "button outline",
                                                                    to:
                                                                        "/market/" +
                                                                        n
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        content:
                                                                            "header.exchange"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    );
                                                })
                                                .sort(function(e, t) {
                                                    return e.key > t.key
                                                        ? -1
                                                        : e.key < t.key
                                                            ? 1
                                                            : 0;
                                                })
                                                .toArray());
                                    var u = r.a.createElement(
                                        "tr",
                                        null,
                                        r.a.createElement(
                                            "th",
                                            null,
                                            r.a.createElement(b.a, {
                                                component: "span",
                                                content:
                                                    "explorer.assets.symbol"
                                            })
                                        ),
                                        r.a.createElement(
                                            "th",
                                            null,
                                            r.a.createElement(b.a, {
                                                component: "span",
                                                content:
                                                    "explorer.assets.issuer"
                                            })
                                        ),
                                        r.a.createElement(
                                            "th",
                                            null,
                                            r.a.createElement(b.a, {
                                                component: "span",
                                                content: "markets.supply"
                                            })
                                        ),
                                        r.a.createElement("th", null)
                                    );
                                    return r.a.createElement(
                                        "div",
                                        {className: "grid-block vertical"},
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-block vertical"},
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block main-content small-12 medium-10 medium-offset-1 main-content vertical"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "generic-bordered-box"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "header-selector"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "selector"
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className: E()(
                                                                        "inline-block",
                                                                        {
                                                                            inactive:
                                                                                "market" !=
                                                                                n
                                                                        }
                                                                    ),
                                                                    onClick: this._toggleFilter.bind(
                                                                        this,
                                                                        "market"
                                                                    )
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        content:
                                                                            "explorer.assets.market"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className: E()(
                                                                        "inline-block",
                                                                        {
                                                                            inactive:
                                                                                "user" !=
                                                                                n
                                                                        }
                                                                    ),
                                                                    onClick: this._toggleFilter.bind(
                                                                        this,
                                                                        "user"
                                                                    )
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        content:
                                                                            "explorer.assets.user"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className: E()(
                                                                        "inline-block",
                                                                        {
                                                                            inactive:
                                                                                "prediction" !=
                                                                                n
                                                                        }
                                                                    ),
                                                                    onClick: this._toggleFilter.bind(
                                                                        this,
                                                                        "prediction"
                                                                    )
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        content:
                                                                            "explorer.assets.prediction"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    this.state.isLoading
                                                        ? r.a.createElement(
                                                              Fe.a,
                                                              null
                                                          )
                                                        : null,
                                                    "market" == n
                                                        ? r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "grid-block shrink"
                                                              },
                                                              r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "grid-content"
                                                                  },
                                                                  r.a.createElement(
                                                                      "input",
                                                                      {
                                                                          style: {
                                                                              maxWidth:
                                                                                  "500px"
                                                                          },
                                                                          placeholder: a,
                                                                          type:
                                                                              "text",
                                                                          value: this
                                                                              .state
                                                                              .filterMPA,
                                                                          onChange: this._onFilter.bind(
                                                                              this,
                                                                              "filterMPA"
                                                                          )
                                                                      }
                                                                  )
                                                              )
                                                          )
                                                        : null,
                                                    "market" == n
                                                        ? r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "grid-block",
                                                                  style: {
                                                                      paddingBottom: 20
                                                                  }
                                                              },
                                                              r.a.createElement(
                                                                  Ue.a,
                                                                  {
                                                                      header: u,
                                                                      rows: l
                                                                  }
                                                              )
                                                          )
                                                        : null,
                                                    "user" == n
                                                        ? r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "grid-block shrink"
                                                              },
                                                              r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "grid-content"
                                                                  },
                                                                  r.a.createElement(
                                                                      "input",
                                                                      {
                                                                          style: {
                                                                              maxWidth:
                                                                                  "500px"
                                                                          },
                                                                          placeholder: a,
                                                                          type:
                                                                              "text",
                                                                          value: this
                                                                              .state
                                                                              .filterUIA,
                                                                          onChange: this._onFilter.bind(
                                                                              this,
                                                                              "filterUIA"
                                                                          )
                                                                      }
                                                                  )
                                                              )
                                                          )
                                                        : null,
                                                    "user" == n
                                                        ? r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "grid-block",
                                                                  style: {
                                                                      paddingBottom: 20
                                                                  }
                                                              },
                                                              r.a.createElement(
                                                                  Ue.a,
                                                                  {
                                                                      header: u,
                                                                      rows: s
                                                                  }
                                                              )
                                                          )
                                                        : null,
                                                    "prediction" == n
                                                        ? r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "grid-block shrink"
                                                              },
                                                              r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "grid-content"
                                                                  },
                                                                  r.a.createElement(
                                                                      "input",
                                                                      {
                                                                          style: {
                                                                              maxWidth:
                                                                                  "500px"
                                                                          },
                                                                          placeholder: i.a
                                                                              .translate(
                                                                                  "markets.search"
                                                                              )
                                                                              .toUpperCase(),
                                                                          type:
                                                                              "text",
                                                                          value: this
                                                                              .state
                                                                              .filterPM,
                                                                          onChange: this._onFilter.bind(
                                                                              this,
                                                                              "filterPM"
                                                                          )
                                                                      }
                                                                  )
                                                              )
                                                          )
                                                        : null,
                                                    "prediction" == n
                                                        ? r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "grid-block",
                                                                  style: {
                                                                      paddingBottom: 20
                                                                  }
                                                              },
                                                              r.a.createElement(
                                                                  Ue.a,
                                                                  {
                                                                      rows: c,
                                                                      pageSize: 6
                                                                  }
                                                              )
                                                          )
                                                        : null
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (Qe.defaultProps = {assets: {}}),
                (Qe.propTypes = {assets: Le.a.object.isRequired});
            var Ye = Qe,
                Ze = (function() {
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
            !(function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
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
                })(t, r.a.Component),
                    Ze(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    V.a,
                                    {
                                        stores: [Be.a, _.a],
                                        inject: {
                                            assets: function() {
                                                return Be.a.getState().assets;
                                            },
                                            filterMPA: function() {
                                                return _.a
                                                    .getState()
                                                    .viewSettings.get(
                                                        "filterMPA"
                                                    );
                                            },
                                            filterUIA: function() {
                                                return _.a
                                                    .getState()
                                                    .viewSettings.get(
                                                        "filterUIA"
                                                    );
                                            }
                                        }
                                    },
                                    r.a.createElement(Ye, null)
                                );
                            }
                        }
                    ]);
            })();
            var Xe = n(30),
                $e = n(1734),
                et = n(58),
                tt = n(32),
                nt = n(1732),
                at = (function() {
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
            function rt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function ot(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function st(e, t) {
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
            }
            var it = (function(e) {
                function t() {
                    return (
                        rt(this, t),
                        ot(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    st(t, r.a.Component),
                    at(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    e.contacts !== this.props.contacts ||
                                    e.account !== this.props.account
                                );
                            }
                        },
                        {
                            key: "_onAddContact",
                            value: function(e, t) {
                                t.preventDefault(), et.a.addAccountContact(e);
                            }
                        },
                        {
                            key: "_onRemoveContact",
                            value: function(e, t) {
                                t.preventDefault(),
                                    et.a.removeAccountContact(e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.account,
                                    n = e.contacts;
                                if (!t) return null;
                                var a = t.getIn(["balances", "1.3.0"]) || null,
                                    o = t.get("name");
                                return r.a.createElement(
                                    "tr",
                                    {key: t.get("id")},
                                    r.a.createElement("td", null, t.get("id")),
                                    n.has(o)
                                        ? r.a.createElement(
                                              "td",
                                              {
                                                  onClick: this._onRemoveContact.bind(
                                                      this,
                                                      o
                                                  )
                                              },
                                              r.a.createElement(tt.a, {
                                                  name: "minus-circle",
                                                  title:
                                                      "icons.minus_circle.remove_contact"
                                              })
                                          )
                                        : r.a.createElement(
                                              "td",
                                              {
                                                  onClick: this._onAddContact.bind(
                                                      this,
                                                      o
                                                  )
                                              },
                                              r.a.createElement(tt.a, {
                                                  name: "plus-circle",
                                                  title:
                                                      "icons.plus_circle.add_contact"
                                              })
                                          ),
                                    r.a.createElement(
                                        "td",
                                        null,
                                        r.a.createElement(
                                            se.a,
                                            {to: "/account/" + o + "/overview"},
                                            o
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        null,
                                        a
                                            ? r.a.createElement(nt.a, {
                                                  balance: a
                                              })
                                            : "n/a"
                                    ),
                                    r.a.createElement(
                                        "td",
                                        null,
                                        a
                                            ? r.a.createElement(nt.a, {
                                                  balance: a,
                                                  asPercentage: !0
                                              })
                                            : "n/a"
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (it.propTypes = {account: p.a.ChainAccount.isRequired}),
                (it.defaultProps = {tempComponent: "tr", autosubscribe: !1}),
                (it = Object(m.a)(it));
            var lt = function(e) {
                return r.a.createElement(it, e);
            };
            lt = Object(g.connect)(lt, {
                listenTo: function() {
                    return [Xe.a];
                },
                getProps: function() {
                    return {contacts: Xe.a.getState().accountContacts};
                }
            });
            var ct = (function(e) {
                function t(e) {
                    rt(this, t);
                    var n = ot(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (n.state = {searchTerm: e.searchTerm, isLoading: !1}),
                        (n._searchAccounts = Object($e.a)(
                            n._searchAccounts,
                            200
                        )),
                        n
                    );
                }
                return (
                    st(t, r.a.Component),
                    at(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    !c.a.is(
                                        e.searchAccounts,
                                        this.props.searchAccounts
                                    ) ||
                                    t.searchTerm !== this.state.searchTerm ||
                                    t.isLoading !== this.state.isLoading
                                );
                            }
                        },
                        {
                            key: "_onSearchChange",
                            value: function(e) {
                                this.setState({
                                    searchTerm: e.target.value.toLowerCase(),
                                    isLoading: !0
                                }),
                                    this._searchAccounts(e.target.value);
                            }
                        },
                        {
                            key: "_searchAccounts",
                            value: function(e) {
                                et.a.accountSearch(e),
                                    this.setState({isLoading: !1});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.searchAccounts,
                                    t = this.state.searchTerm,
                                    n = [];
                                return (
                                    e.size > 0 &&
                                        t &&
                                        t.length > 0 &&
                                        (n = e
                                            .filter(function(e) {
                                                return -1 !== e.indexOf(t);
                                            })
                                            .sort(function(e, t) {
                                                return e > t
                                                    ? 1
                                                    : e < t
                                                        ? -1
                                                        : 0;
                                            })
                                            .map(function(e, t) {
                                                return r.a.createElement(lt, {
                                                    key: t,
                                                    account: e
                                                });
                                            })
                                            .toArray()),
                                    r.a.createElement(
                                        "div",
                                        {className: "grid-block"},
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block vertical medium-6 medium-offset-3"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-content shrink"
                                                },
                                                r.a.createElement(b.a, {
                                                    component: "h3",
                                                    content:
                                                        "explorer.accounts.title"
                                                }),
                                                r.a.createElement("input", {
                                                    type: "text",
                                                    value: this.state
                                                        .searchTerm,
                                                    onChange: this._onSearchChange.bind(
                                                        this
                                                    )
                                                })
                                            ),
                                            r.a.createElement(Ue.a, {
                                                header: r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "explorer.assets.id"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        r.a.createElement(
                                                            tt.a,
                                                            {
                                                                name: "user",
                                                                title:
                                                                    "icons.user.account"
                                                            }
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "account.name"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "gateway.balance"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        r.a.createElement(b.a, {
                                                            component: "span",
                                                            content:
                                                                "account.percent"
                                                        })
                                                    )
                                                ),
                                                rows: n,
                                                pageSize: 20
                                            }),
                                            this.state.isLoading
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              textAlign:
                                                                  "center",
                                                              padding: 10
                                                          }
                                                      },
                                                      r.a.createElement(Fe.a, {
                                                          type: "three-bounce"
                                                      })
                                                  )
                                                : null
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (ct.defaultProps = {searchAccounts: {}}),
                (ct.propTypes = {searchAccounts: Le.a.object.isRequired});
            var ut = ct,
                pt = (function() {
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
            var mt = (function(e) {
                    function t() {
                        return (
                            (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t),
                            (function(e, t) {
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
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
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
                        })(t, r.a.Component),
                        pt(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        V.a,
                                        {
                                            stores: [Xe.a],
                                            inject: {
                                                searchAccounts: function() {
                                                    return Xe.a.getState()
                                                        .searchAccounts;
                                                },
                                                searchTerm: function() {
                                                    return Xe.a.getState()
                                                        .searchTerm;
                                                }
                                            }
                                        },
                                        r.a.createElement(ut, null)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ft = n(396),
                ht = n(1810),
                dt = (function() {
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
            var bt = (function(e) {
                    function t() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var e = (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (e.state = {height: null}),
                            (e._setDimensions = e._setDimensions.bind(e)),
                            e
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
                        })(t, r.a.Component),
                        dt(t, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    window.addEventListener(
                                        "resize",
                                        this._setDimensions,
                                        {capture: !1, passive: !0}
                                    );
                                }
                            },
                            {
                                key: "componentDidMount",
                                value: function() {
                                    this._setDimensions();
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    window.removeEventListener(
                                        "resize",
                                        this._setDimensions
                                    );
                                }
                            },
                            {
                                key: "_setDimensions",
                                value: function() {
                                    var e = this.refs.wrapper.offsetHeight;
                                    e !== this.state.height &&
                                        this.setState({height: e});
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            ref: "wrapper",
                                            className: "grid-block no-overflow"
                                        },
                                        r.a.createElement(ht.a, {
                                            style: {width: "100%", padding: 20},
                                            listHeight: this.state.height
                                                ? this.state.height - 82
                                                : null,
                                            className: "no-overflow",
                                            headerStyle: {
                                                paddingTop: 0,
                                                borderTop: "none"
                                            },
                                            columns: [
                                                {name: "star", index: 1},
                                                {name: "market", index: 2},
                                                {name: "quoteSupply", index: 3},
                                                {name: "vol", index: 4},
                                                {name: "price", index: 5},
                                                {name: "change", index: 6}
                                            ]
                                        })
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                yt = (function() {
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
            !(function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
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
                })(t, r.a.Component),
                    yt(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    V.a,
                                    {
                                        stores: [_.a, Be.a, ft.a],
                                        inject: {
                                            starredMarkets: function() {
                                                return _.a.getState()
                                                    .starredMarkets;
                                            },
                                            viewSettings: function() {
                                                return _.a.getState()
                                                    .viewSettings;
                                            },
                                            lookupResults: function() {
                                                return Be.a.getState()
                                                    .lookupResults;
                                            },
                                            marketBase: function() {
                                                return ft.a.getState()
                                                    .marketBase;
                                            }
                                        }
                                    },
                                    r.a.createElement(bt, null)
                                );
                            }
                        }
                    ]);
            })();
            var gt = (function() {
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
            var vt = (function(e) {
                function t(e) {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var n = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (
                        (n.state = {
                            tabs: [
                                {
                                    name: "blocks",
                                    link: "/explorer/blocks",
                                    translate: "explorer.blocks.title",
                                    content: Me
                                },
                                {
                                    name: "accounts",
                                    link: "/explorer/accounts",
                                    translate: "explorer.accounts.title",
                                    content: mt
                                },
                                {
                                    name: "witnesses",
                                    link: "/explorer/witnesses",
                                    translate: "explorer.witnesses.title",
                                    content: B
                                },
                                {
                                    name: "committee_members",
                                    link: "/explorer/committee-members",
                                    translate:
                                        "explorer.committee_members.title",
                                    content: z
                                },
                                {
                                    name: "fees",
                                    link: "/explorer/fees",
                                    translate: "fees.title",
                                    content: re
                                }
                            ]
                        }),
                        n
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
                    })(t, r.a.Component),
                    gt(t, [
                        {
                            key: "render",
                            value: function() {
                                for (
                                    var e = this.props.match.params.tab,
                                        t = this.state.tabs.findIndex(function(
                                            t
                                        ) {
                                            return t.name === e;
                                        }),
                                        n = [],
                                        a = 0;
                                    a < this.state.tabs.length;
                                    a++
                                ) {
                                    var s = this.state.tabs[a],
                                        i = s.content,
                                        l = t == a ? "" : s.link;
                                    n.push(
                                        r.a.createElement(
                                            o.a,
                                            {
                                                key: a,
                                                title: s.translate,
                                                isLinkTo: l
                                            },
                                            r.a.createElement(i, null)
                                        )
                                    );
                                }
                                return r.a.createElement(
                                    o.b,
                                    {
                                        defaultActiveTab: t,
                                        segmented: !1,
                                        setting: "explorer-tabs",
                                        className: "account-tabs",
                                        tabsClass:
                                            "account-overview bordered-header content-block",
                                        contentClass:
                                            "tab-content explorer-tab-content padding"
                                    },
                                    n
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = vt;
        }
    }
]);
//# sourceMappingURL=explorer.js.map
