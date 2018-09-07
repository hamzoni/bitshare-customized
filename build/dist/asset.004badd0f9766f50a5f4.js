(window.webpackJsonp = window.webpackJsonp || []).push([
    [17],
    {
        1731: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                s = a(3),
                o = a.n(s),
                i = a(29),
                l = a(500),
                c = a(11),
                u = a.n(c),
                m = a(15),
                p = a.n(m),
                d = a(149),
                _ = a(16),
                h = a(1),
                f = a.n(h),
                b = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function g(e, t) {
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
            function v(e, t) {
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
            var E = (function(e) {
                function t() {
                    return (
                        g(this, t),
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
                    v(t, r.a.Component),
                    b(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    !_.a.are_equal_shallow(
                                        e.assets,
                                        this.props.assets
                                    ) ||
                                    e.value !== this.props.value ||
                                    e.scroll_length !== this.props.scroll_length
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.props.assets.length
                                    ? r.a.createElement(l.a, {
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
                                              ? r.a.createElement(i.a, {
                                                    asset: this.props.assets[0].get(
                                                        "id"
                                                    ),
                                                    amount: 0,
                                                    hide_amount: !0
                                                })
                                              : null,
                                          value: this.props.value,
                                          onChange: this.props.onChange,
                                          scroll_length: this.props
                                              .scroll_length
                                      })
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            (E.propTypes = {
                value: f.a.string,
                onChange: f.a.func,
                scroll_length: f.a.number
            }),
                (E = Object(d.a)(E, {asList: !0}));
            var k = (function(e) {
                function t() {
                    return (
                        g(this, t),
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
                    v(t, r.a.Component),
                    b(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.onAssetChange(this.props.asset);
                            }
                        },
                        {
                            key: "formatAmount",
                            value: function(e) {
                                return (
                                    e || (e = ""),
                                    "number" == typeof e && (e = e.toString()),
                                    e.trim().replace(/,/g, "")
                                );
                            }
                        },
                        {
                            key: "_onChange",
                            value: function(e) {
                                var t = e.target.value;
                                this.props.onChange &&
                                    this.props.onChange({
                                        amount: t,
                                        asset: this.props.asset
                                    });
                            }
                        },
                        {
                            key: "onAssetChange",
                            value: function(e) {
                                this.props.onChange &&
                                    this.props.onChange({
                                        amount: this.props.amount,
                                        asset: e
                                    });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.error
                                    ? p.a.translate(this.props.error)
                                    : this.formatAmount(this.props.amount);
                                return r.a.createElement(
                                    "div",
                                    {
                                        className: "amount-selector",
                                        style: this.props.style
                                    },
                                    r.a.createElement(
                                        "label",
                                        {className: "right-label"},
                                        this.props.display_balance
                                    ),
                                    r.a.createElement(o.a, {
                                        className: "left-label",
                                        component: "label",
                                        content: this.props.label
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "inline-label input-wrapper"
                                        },
                                        r.a.createElement("input", {
                                            disabled: this.props.disabled,
                                            type: "text",
                                            value: e || "",
                                            placeholder: this.props.placeholder,
                                            onChange: this._onChange.bind(this),
                                            tabIndex: this.props.tabIndex
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "form-label select floating-dropdown"
                                            },
                                            this.props.isPrice
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "dropdown-wrapper inactive"
                                                      },
                                                      r.a.createElement(
                                                          "div",
                                                          null,
                                                          this.props.asset.get(
                                                              "symbol"
                                                          ),
                                                          "/",
                                                          this.props.base
                                                      )
                                                  )
                                                : r.a.createElement(E, {
                                                      ref: this.props
                                                          .refCallback,
                                                      value: this.props.asset.get(
                                                          "symbol"
                                                      ),
                                                      assets: u.a.List(
                                                          this.props.assets
                                                      ),
                                                      onChange: this.onAssetChange.bind(
                                                          this
                                                      ),
                                                      scroll_length: this.props
                                                          .scroll_length
                                                  })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (k.propTypes = {
                label: f.a.string,
                assets: f.a.array,
                amount: f.a.any,
                placeholder: f.a.string,
                onChange: f.a.func,
                tabIndex: f.a.number,
                error: f.a.string,
                scroll_length: f.a.number
            }),
                (k.defaultProps = {disabled: !1, tabIndex: 0}),
                (k = Object(d.a)(k)),
                (t.a = k);
        },
        1735: function(e, t, a) {
            "use strict";
            var n = a(22),
                r = a(13),
                s = a(16),
                o = a(179),
                i = a(19),
                l = a(10),
                c = a(1769),
                u = a.n(c),
                m = a(91),
                p = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var d = {},
                _ = (function() {
                    function e() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e);
                    }
                    return (
                        p(e, [
                            {
                                key: "publishFeed",
                                value: function(e) {
                                    var t = e.publisher,
                                        a = e.asset_id,
                                        n = e.mcr,
                                        r = e.mssr,
                                        s = e.settlementPrice,
                                        l = e.cer,
                                        c = o.a.new_transaction();
                                    return (
                                        c.add_type_operation(
                                            "asset_publish_feed",
                                            {
                                                publisher: t,
                                                asset_id: a,
                                                feed: {
                                                    settlement_price: s.toObject(),
                                                    maintenance_collateral_ratio: n,
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
                                value: function(e, t, a, n) {
                                    var r = o.a.new_transaction(),
                                        l = s.a.get_asset_precision(
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
                                                asset_id: a.get("id"),
                                                amount: n * l
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
                                    var a = o.a.new_transaction();
                                    return (
                                        a.add_type_operation(
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
                                                    a,
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
                                    var a = o.a.new_transaction();
                                    return (
                                        a.add_type_operation(
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
                                                    a,
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
                                value: function(e, t, a) {
                                    var n = o.a.new_transaction();
                                    return (
                                        n.add_type_operation(
                                            "asset_update_feed_producers",
                                            {
                                                fee: {
                                                    amount: 0,
                                                    asset_id: "1.3.0"
                                                },
                                                issuer: e,
                                                asset_to_update: t.get("id"),
                                                new_feed_producers: a
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
                                value: function(e, t, a) {
                                    var n = o.a.new_transaction();
                                    return (
                                        n.add_type_operation(
                                            "asset_claim_fees",
                                            {
                                                fee: {amount: 0, asset_id: 0},
                                                issuer: e,
                                                amount_to_claim: {
                                                    asset_id: t.get("id"),
                                                    amount: a.getAmount()
                                                }
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
                                value: function(e, t, a, n, r, c, m, p, d) {
                                    console.log(
                                        "create asset:",
                                        t,
                                        "flags:",
                                        a,
                                        "isBitAsset:",
                                        c,
                                        "bitasset_opts:",
                                        p
                                    );
                                    var _ = o.a.new_transaction(),
                                        h = s.a.get_asset_precision(
                                            t.precision
                                        );
                                    u.a.config({DECIMAL_PLACES: t.precision});
                                    var f = new u.a(t.max_supply)
                                            .times(h)
                                            .toString(),
                                        b = new u.a(t.max_market_fee || 0)
                                            .times(h)
                                            .toString(),
                                        g = s.a.get_asset_precision(
                                            l.ChainStore.getAsset(
                                                r.base.asset_id
                                            ).get("precision")
                                        ),
                                        y = {
                                            fee: {amount: 0, asset_id: 0},
                                            issuer: e,
                                            symbol: t.symbol,
                                            precision: parseInt(
                                                t.precision,
                                                10
                                            ),
                                            common_options: {
                                                max_supply: f,
                                                market_fee_percent:
                                                    100 *
                                                        t.market_fee_percent ||
                                                    0,
                                                max_market_fee: b,
                                                issuer_permissions: n,
                                                flags: a,
                                                core_exchange_rate: {
                                                    base: {
                                                        amount:
                                                            r.base.amount * g,
                                                        asset_id:
                                                            r.base.asset_id
                                                    },
                                                    quote: {
                                                        amount:
                                                            r.quote.amount * h,
                                                        asset_id: "1.3.1"
                                                    }
                                                },
                                                whitelist_authorities: [],
                                                blacklist_authorities: [],
                                                whitelist_markets: [],
                                                blacklist_markets: [],
                                                description: d,
                                                extensions: null
                                            },
                                            is_prediction_market: m,
                                            extensions: null
                                        };
                                    return (
                                        c && (y.bitasset_opts = p),
                                        _.add_type_operation("asset_create", y),
                                        function(e) {
                                            return i.a
                                                .process_transaction(
                                                    _,
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
                                    a,
                                    n,
                                    r,
                                    c,
                                    m,
                                    p,
                                    d,
                                    _,
                                    h,
                                    f,
                                    b,
                                    g,
                                    y
                                ) {
                                    var v = o.a.new_transaction();
                                    if (y) {
                                        var E = s.a.get_asset_precision(
                                            r.get("precision")
                                        );
                                        u.a.config({
                                            DECIMAL_PLACES: r.get("precision")
                                        });
                                        var k = new u.a(a.max_supply)
                                                .times(E)
                                                .toString(),
                                            w = new u.a(a.max_market_fee || 0)
                                                .times(E)
                                                .toString(),
                                            x = l.ChainStore.getAsset(
                                                n.quote.asset_id
                                            ),
                                            A = s.a.get_asset_precision(
                                                x.get("precision")
                                            ),
                                            O = l.ChainStore.getAsset(
                                                n.base.asset_id
                                            ),
                                            P = s.a.get_asset_precision(
                                                O.get("precision")
                                            ),
                                            C = new u.a(n.quote.amount)
                                                .times(A)
                                                .toString(),
                                            N = new u.a(n.base.amount)
                                                .times(P)
                                                .toString();
                                        console.log("auths:", f);
                                        var S = {
                                            fee: {amount: 0, asset_id: 0},
                                            asset_to_update: r.get("id"),
                                            extensions: r.get("extensions"),
                                            issuer: e,
                                            new_issuer: t,
                                            new_options: {
                                                max_supply: k,
                                                max_market_fee: w,
                                                market_fee_percent:
                                                    100 * a.market_fee_percent,
                                                description: h,
                                                issuer_permissions: m,
                                                flags: c,
                                                whitelist_authorities: f.whitelist_authorities.toJS(),
                                                blacklist_authorities: f.blacklist_authorities.toJS(),
                                                whitelist_markets: f.whitelist_markets.toJS(),
                                                blacklist_markets: f.blacklist_markets.toJS(),
                                                extensions: r.getIn([
                                                    "options",
                                                    "extensions"
                                                ]),
                                                core_exchange_rate: {
                                                    quote: {
                                                        amount: C,
                                                        asset_id:
                                                            n.quote.asset_id
                                                    },
                                                    base: {
                                                        amount: N,
                                                        asset_id:
                                                            n.base.asset_id
                                                    }
                                                }
                                            }
                                        };
                                        (e !== t && t) || delete S.new_issuer,
                                            v.add_type_operation(
                                                "asset_update",
                                                S
                                            );
                                    }
                                    if (
                                        (console.log(
                                            "bitasset_opts:",
                                            d,
                                            "original_bitasset_opts:",
                                            _
                                        ),
                                        p &&
                                            (d.feed_lifetime_sec !==
                                                _.feed_lifetime_sec ||
                                                d.minimum_feeds !==
                                                    _.minimum_feeds ||
                                                d.force_settlement_delay_sec !==
                                                    _.force_settlement_delay_sec ||
                                                d.force_settlement_offset_percent !==
                                                    _.force_settlement_offset_percent ||
                                                d.maximum_force_settlement_volume !==
                                                    _.maximum_force_settlement_volume ||
                                                d.short_backing_asset !==
                                                    _.short_backing_asset))
                                    ) {
                                        var j = {
                                            fee: {amount: 0, asset_id: 0},
                                            asset_to_update: r.get("id"),
                                            issuer: e,
                                            new_options: d
                                        };
                                        v.add_type_operation(
                                            "asset_update_bitasset",
                                            j
                                        );
                                    }
                                    return (
                                        console.log(
                                            "feedProducers:",
                                            b,
                                            "originalFeedProducers:",
                                            g
                                        ),
                                        p &&
                                            !s.a.are_equal_shallow(b, g) &&
                                            v.add_type_operation(
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
                                                    new_feed_producers: b
                                                }
                                            ),
                                        i.a
                                            .process_transaction(v, null, !0)
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
                                    var a = this,
                                        n =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2] &&
                                            arguments[2],
                                        s = e + "_" + t;
                                    return function(o) {
                                        if (!d[s]) {
                                            var i;
                                            return (
                                                (d[s] = !0),
                                                o({loading: !0}),
                                                (i = r.Apis.instance()
                                                    .db_api()
                                                    .exec("list_assets", [e, t])
                                                    .then(function(e) {
                                                        var t = [],
                                                            a = [];
                                                        e.forEach(function(e) {
                                                            l.ChainStore._updateObject(
                                                                e,
                                                                !1
                                                            ),
                                                                a.push(
                                                                    e.dynamic_asset_data_id
                                                                ),
                                                                e.bitasset_data_id &&
                                                                    t.push(
                                                                        e.bitasset_data_id
                                                                    );
                                                        });
                                                        var n = r.Apis.instance()
                                                                .db_api()
                                                                .exec(
                                                                    "get_objects",
                                                                    [a]
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
                                                            n,
                                                            i
                                                        ]).then(function(t) {
                                                            return (
                                                                delete d[s],
                                                                o({
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
                                                            o({loading: !1}),
                                                            delete d[s];
                                                    })),
                                                n &&
                                                    m.c.forEach(function(t) {
                                                        a.getAssetList(
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
                                    var a = l.ChainStore.getAsset(e);
                                    return a
                                        ? {assets: [a], searchID: t, symbol: e}
                                        : function(a) {
                                              setTimeout(function() {
                                                  var n = l.ChainStore.getAsset(
                                                      e
                                                  );
                                                  n &&
                                                      a({
                                                          assets: [n],
                                                          searchID: t,
                                                          symbol: e
                                                      });
                                              }, 200);
                                          };
                                }
                            },
                            {
                                key: "reserveAsset",
                                value: function(e, t, a) {
                                    var n = o.a.new_transaction();
                                    return (
                                        n.add_type_operation("asset_reserve", {
                                            fee: {amount: 0, asset_id: 0},
                                            amount_to_reserve: {
                                                amount: e,
                                                asset_id: t
                                            },
                                            payer: a,
                                            extensions: []
                                        }),
                                        function(e) {
                                            return i.a
                                                .process_transaction(
                                                    n,
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
            t.a = n.a.createActions(_);
        },
        1736: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return v;
            }),
                a.d(t, "a", function() {
                    return y;
                });
            var n = a(0),
                r = a.n(n),
                s = a(1),
                o = a.n(s),
                i = a(7),
                l = a.n(i),
                c = a(31),
                u = a(21),
                m = a(20),
                p = a(15),
                d = a.n(p),
                _ = a(2077),
                h = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function f(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function b(e, t) {
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
            var y = (function(e) {
                function t() {
                    return (
                        f(this, t),
                        b(
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
                    h(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.isActive,
                                    a = e.index,
                                    n = e.changeTab,
                                    s = e.title,
                                    o = e.className,
                                    i = e.updatedTab,
                                    c = e.disabled,
                                    u = e.subText,
                                    m = l()({"is-active": t}, o);
                                return (
                                    "string" == typeof s &&
                                        s.indexOf(".") > 0 &&
                                        (s = d.a.translate(s)),
                                    this.props.collapsed
                                        ? ("string" == typeof u &&
                                              (u = u.trim()),
                                          r.a.createElement(
                                              "option",
                                              {
                                                  value: a,
                                                  "data-is-link-to": this.props
                                                      .isLinkTo
                                              },
                                              r.a.createElement(
                                                  "span",
                                                  {className: "tab-title"},
                                                  s,
                                                  i ? "*" : "",
                                                  u && " (",
                                                  u && u,
                                                  u && ")"
                                              )
                                          ))
                                        : r.a.createElement(
                                              "li",
                                              {
                                                  className: m,
                                                  onClick: c
                                                      ? null
                                                      : n.bind(
                                                            this,
                                                            a,
                                                            this.props.isLinkTo
                                                        )
                                              },
                                              r.a.createElement(
                                                  "a",
                                                  null,
                                                  r.a.createElement(
                                                      "span",
                                                      {className: "tab-title"},
                                                      s,
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
            (y.propTypes = {
                changeTab: o.a.func,
                isActive: o.a.bool.isRequired,
                index: o.a.number.isRequired,
                className: o.a.string,
                isLinkTo: o.a.string,
                subText: o.a.oneOfType([o.a.object, o.a.string])
            }),
                (y.defaultProps = {
                    isActive: !1,
                    index: 0,
                    className: "",
                    isLinkTo: "",
                    subText: null
                });
            var v = (function(e) {
                function t(e) {
                    f(this, t);
                    var a = b(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.state = {
                            activeTab: e.setting
                                ? e.viewSettings.get(
                                      e.setting,
                                      e.defaultActiveTab
                                  )
                                : e.defaultActiveTab,
                            width: window.innerWidth
                        }),
                        (a._setDimensions = a._setDimensions.bind(a)),
                        a
                    );
                }
                return (
                    g(t, r.a.Component),
                    h(t, [
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
                                            (function(e, t, a) {
                                                return (
                                                    t in e
                                                        ? Object.defineProperty(
                                                              e,
                                                              t,
                                                              {
                                                                  value: a,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              }
                                                          )
                                                        : (e[t] = a),
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
                                    a = t.children,
                                    n = t.contentClass,
                                    s = t.tabsClass,
                                    o = t.style,
                                    i = t.segmented,
                                    c =
                                        this.state.width < 900 &&
                                        r.a.Children.count(a) > 2,
                                    u = null,
                                    m = r.a.Children.map(a, function(t, a) {
                                        if (!t) return null;
                                        if (c && t.props.disabled) return null;
                                        var n = a === e.state.activeTab;
                                        return (
                                            n && (u = t.props.children),
                                            r.a.cloneElement(t, {
                                                collapsed: c,
                                                isActive: n,
                                                changeTab: e._changeTab.bind(e),
                                                index: a
                                            })
                                        );
                                    }).filter(function(e) {
                                        return null !== e;
                                    });
                                return (
                                    u || (u = m[0].props.children),
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
                                                    style: o,
                                                    className: l()(
                                                        "button-group no-margin",
                                                        s,
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
                                                                      var a = parseInt(
                                                                          t
                                                                              .target
                                                                              .value,
                                                                          10
                                                                      );
                                                                      e._changeTab(
                                                                          a,
                                                                          t
                                                                              .target[
                                                                              a
                                                                          ]
                                                                              .attributes[
                                                                              "data-is-link-to"
                                                                          ]
                                                                              .value
                                                                      );
                                                                  }
                                                              },
                                                              m
                                                          )
                                                      )
                                                    : m,
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
                                            {className: l()("tab-content", n)},
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
            (v.propTypes = {
                setting: o.a.string,
                defaultActiveTab: o.a.number,
                segmented: o.a.bool
            }),
                (v.defaultProps = {
                    active: 0,
                    defaultActiveTab: 0,
                    segmented: !0,
                    contentClass: "",
                    style: {}
                }),
                (v = Object(c.connect)(v, {
                    listenTo: function() {
                        return [m.a];
                    },
                    getProps: function() {
                        return {viewSettings: m.a.getState().viewSettings};
                    }
                })),
                (v = Object(_.a)(v));
        },
        2074: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                s = a(2063),
                o = a(3),
                i = a.n(o),
                l = a(132),
                c = a(149),
                u = a(29),
                m = a(133),
                p = a(131),
                d = a(506),
                _ = a(499),
                h = a(314),
                f = a(16),
                b = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var g = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (a.state = {time: e.time}), a;
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
                        b(t, [
                            {
                                key: "getHours",
                                value: function(e) {
                                    return e / 3600;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        this.getHours(this.state.time),
                                        "h"
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                y = a(10),
                v = a(13),
                E = a(33),
                k = a(512),
                w = a(7),
                x = a.n(w),
                A = a(498),
                O = a(1731),
                P = a(1735),
                C = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function N(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            var S = function(e, t) {
                    var a =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : function(e) {
                                  return e;
                              };
                    return function(n) {
                        return e.setState(N({}, t, a(n)));
                    };
                },
                j = function(e) {
                    return function(t) {
                        return t[e];
                    };
                },
                T = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.onAccountNameChanged = S(
                                a,
                                "funderAccountName"
                            )),
                            (a.onAccountChanged = S(a, "newFunderAccount")),
                            (a.onPoolInput = S(
                                a,
                                "fundPoolAmount",
                                j("amount")
                            )),
                            (a.onFundPool = function() {
                                return P.a.fundPool(
                                    a.state.newFunderAccount
                                        ? a.state.newFunderAccount.get("id")
                                        : null,
                                    a.props.core,
                                    a.props.asset,
                                    a.state.fundPoolAmount.replace(/,/g, "")
                                );
                            }),
                            (a.reset = function() {
                                a.setState(a.initialState());
                            }),
                            (a.initialState = function() {
                                return {
                                    funderAccountName:
                                        a.props.funderAccountName,
                                    fundPoolAmount: 0,
                                    fundPoolAsset: new E.a({
                                        amount: 0,
                                        precision: a.props.core.get(
                                            "precision"
                                        ),
                                        asset_id: a.props.core.get("id")
                                    }),
                                    claimPoolAmount: 0,
                                    claimPoolAmountAsset: new E.a({
                                        amount: 0,
                                        precision: a.props.core.get(
                                            "precision"
                                        ),
                                        asset_id: a.props.core.get("id")
                                    }),
                                    claimFeesAmount: 0,
                                    claimFeesAmountAsset: new E.a({
                                        amount: 0,
                                        precision: a.props.asset.get(
                                            "precision"
                                        ),
                                        asset_id: a.props.asset.get("id")
                                    })
                                };
                            }),
                            (a.onClaimPool = function() {
                                return P.a.claimPool(
                                    a.props.asset,
                                    a.state.claimPoolAmountAsset
                                );
                            }),
                            (a.state = a.initialState()),
                            a
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
                        C(t, [
                            {
                                key: "onClaimInput",
                                value: function(e, t) {
                                    var a = t.amount;
                                    this.state[e + "Asset"].setAmount({
                                        real: a
                                    }),
                                        this.setState(N({}, e, a));
                                }
                            },
                            {
                                key: "onClaimFees",
                                value: function() {
                                    var e = y.ChainStore.getAccount(
                                        this.props.funderAccountName
                                    );
                                    e &&
                                        P.a.claimPoolFees(
                                            e.get("id"),
                                            this.props.asset,
                                            this.state.claimFeesAmountAsset
                                        );
                                }
                            },
                            {
                                key: "renderFundPool",
                                value: function() {
                                    var e = this.props,
                                        t = this.state,
                                        a = this.onPoolInput,
                                        n = this.onFundPool,
                                        s = this.reset,
                                        o = this.onAccountNameChanged,
                                        l = this.onAccountChanged,
                                        c = e.asset,
                                        m = e.core,
                                        p = e.hideBalance,
                                        d = e.getDynamicObject,
                                        _ = t.funderAccountName,
                                        h = t.fundPoolAmount,
                                        f = t.newFunderAccount,
                                        b = null;
                                    p ||
                                        (b = d(c.get("dynamic_asset_data_id")));
                                    var g = m.get("id") || "1.3.0",
                                        v = 0;
                                    if (f) {
                                        var E = f.getIn(["balances", g]);
                                        if (E) {
                                            var k = y.ChainStore.getObject(E);
                                            k && (v = k.get("balance"));
                                        }
                                    }
                                    var w = r.a.createElement(
                                        "span",
                                        null,
                                        r.a.createElement(i.a, {
                                            component: "span",
                                            content: "transfer.available"
                                        }),
                                        ": ",
                                        r.a.createElement(u.a, {
                                            amount: v,
                                            asset: g
                                        })
                                    );
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        p ||
                                            r.a.createElement(
                                                "div",
                                                {
                                                    style: {
                                                        paddingBottom: "1.5rem"
                                                    }
                                                },
                                                r.a.createElement(i.a, {
                                                    content:
                                                        "explorer.asset.fee_pool.pool_balance"
                                                }),
                                                r.a.createElement(
                                                    "span",
                                                    null,
                                                    ": "
                                                ),
                                                b
                                                    ? r.a.createElement(u.a, {
                                                          amount: b.get(
                                                              "fee_pool"
                                                          ),
                                                          asset: g
                                                      })
                                                    : null
                                            ),
                                        r.a.createElement(A.a, {
                                            label:
                                                "transaction.funding_account",
                                            accountName: _,
                                            onChange: o,
                                            onAccountChanged: l,
                                            account: _,
                                            error: null,
                                            tabIndex: 1
                                        }),
                                        r.a.createElement(O.a, {
                                            label: "transfer.amount",
                                            display_balance: w,
                                            amount: h,
                                            onChange: a,
                                            asset: g,
                                            assets: [g],
                                            placeholder: "0.0",
                                            tabIndex: 2,
                                            style: {
                                                width: "100%",
                                                paddingTop: 16
                                            }
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: "1rem"},
                                                className: "button-group"
                                            },
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: x()("button", {
                                                        disabled: h <= 0
                                                    }),
                                                    onClick: n
                                                },
                                                r.a.createElement(i.a, {
                                                    content:
                                                        "transaction.trxTypes.asset_fund_fee_pool"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: "button outline",
                                                    onClick: s
                                                },
                                                r.a.createElement(i.a, {
                                                    content:
                                                        "account.perm.reset"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderClaimPool",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = this.onClaimPool,
                                        n = this.reset,
                                        s = this.state.claimPoolAmount,
                                        o = t.asset,
                                        l = t.core,
                                        c = (0, t.getDynamicObject)(
                                            o.get("dynamic_asset_data_id")
                                        ),
                                        m = l.get("id") || "1.3.0",
                                        p = c
                                            ? r.a.createElement(
                                                  "span",
                                                  {
                                                      onClick: function() {
                                                          e.state.claimPoolAmountAsset.setAmount(
                                                              {
                                                                  sats: c.get(
                                                                      "fee_pool"
                                                                  )
                                                              }
                                                          ),
                                                              e.setState({
                                                                  claimPoolAmount: e.state.claimPoolAmountAsset.getAmount(
                                                                      {real: !0}
                                                                  )
                                                              });
                                                      }
                                                  },
                                                  r.a.createElement(i.a, {
                                                      component: "span",
                                                      content:
                                                          "transfer.available"
                                                  }),
                                                  ": ",
                                                  r.a.createElement(u.a, {
                                                      amount: c.get("fee_pool"),
                                                      asset: m
                                                  })
                                              )
                                            : null;
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(i.a, {
                                            component: "p",
                                            content:
                                                "explorer.asset.fee_pool.claim_pool_text"
                                        }),
                                        r.a.createElement(O.a, {
                                            label: "transfer.amount",
                                            display_balance: p,
                                            amount: s,
                                            onChange: this.onClaimInput.bind(
                                                this,
                                                "claimPoolAmount"
                                            ),
                                            asset: m,
                                            assets: [m],
                                            placeholder: "0.0",
                                            tabIndex: 2,
                                            style: {
                                                width: "100%",
                                                paddingTop: 16
                                            }
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: "1rem"},
                                                className: "button-group"
                                            },
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: x()("button", {
                                                        disabled: s <= 0
                                                    }),
                                                    onClick: a
                                                },
                                                r.a.createElement(i.a, {
                                                    content:
                                                        "transaction.trxTypes.asset_claim_fee_pool"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: "button outline",
                                                    onClick: n
                                                },
                                                r.a.createElement(i.a, {
                                                    content:
                                                        "account.perm.reset"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderClaimFees",
                                value: function() {
                                    var e = this.props,
                                        t = this.state.claimFeesAmount,
                                        a = e.asset,
                                        n = (0, e.getDynamicObject)(
                                            a.get("dynamic_asset_data_id")
                                        ),
                                        s = n ? n.get("accumulated_fees") : 0,
                                        o =
                                            t > 0 &&
                                            this.state.claimFeesAmountAsset.getAmount() <=
                                                s,
                                        l = r.a.createElement(
                                            "span",
                                            null,
                                            r.a.createElement(i.a, {
                                                component: "span",
                                                content: "transfer.available"
                                            }),
                                            ": ",
                                            r.a.createElement(u.a, {
                                                amount: s,
                                                asset: a.get("id")
                                            })
                                        );
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(i.a, {
                                            component: "p",
                                            content:
                                                "explorer.asset.fee_pool.claim_text",
                                            asset: a.get("symbol")
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {style: {paddingBottom: "1rem"}},
                                            r.a.createElement(i.a, {
                                                content:
                                                    "explorer.asset.fee_pool.unclaimed_issuer_income"
                                            }),
                                            ": ",
                                            n
                                                ? r.a.createElement(u.a, {
                                                      amount: n.get(
                                                          "accumulated_fees"
                                                      ),
                                                      asset: a.get("id")
                                                  })
                                                : null
                                        ),
                                        r.a.createElement(O.a, {
                                            label: "transfer.amount",
                                            display_balance: l,
                                            amount: t,
                                            onChange: this.onClaimInput.bind(
                                                this,
                                                "claimFeesAmount"
                                            ),
                                            asset: a.get("id"),
                                            assets: [a.get("id")],
                                            placeholder: "0.0",
                                            tabIndex: 1,
                                            style: {
                                                width: "100%",
                                                paddingTop: 16
                                            }
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: "1rem"},
                                                className: "button-group"
                                            },
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: x()("button", {
                                                        disabled: !o
                                                    }),
                                                    onClick: this.onClaimFees.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(i.a, {
                                                    content:
                                                        "explorer.asset.fee_pool.claim_fees"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: "button outline",
                                                    onClick: this.reset.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(i.a, {
                                                    content:
                                                        "account.perm.reset"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return "fund" === this.props.type
                                        ? this.renderFundPool()
                                        : "claim" === this.props.type
                                            ? this.renderClaimPool()
                                            : "claim_fees" === this.props.type
                                                ? this.renderClaimFees()
                                                : void 0;
                                }
                            }
                        ]),
                        t
                    );
                })();
            T.defaultProps = {type: "fund"};
            var q = (T = Object(c.a)(T, {
                    propNames: ["asset", "core"],
                    defaultProps: {core: "1.3.0"},
                    withDynamic: !0
                })),
                F = a(30),
                I = a(31),
                R = a(45),
                D = a(67),
                L = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function B(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            var z = (function(e) {
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
                            new_issuer_account_id: null,
                            issuer_account_name: null
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
                    })(t, r.a.Component),
                    L(t, [
                        {
                            key: "onAccountNameChanged",
                            value: function(e, t) {
                                this.setState(B({}, e, t));
                            }
                        },
                        {
                            key: "onAccountChanged",
                            value: function(e, t) {
                                this.setState(B({}, e, t ? t.get("id") : null));
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function() {
                                var e = this;
                                P.a
                                    .updateOwner(
                                        this.props.asset,
                                        this.state.new_issuer_account_id
                                    )
                                    .then(function() {
                                        e.onReset();
                                    });
                            }
                        },
                        {
                            key: "onReset",
                            value: function() {
                                this.setState({
                                    new_issuer_account_id: null,
                                    issuer_account_name: null
                                });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.currentOwner;
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "div",
                                        {style: {paddingBottom: "1rem"}},
                                        r.a.createElement(A.a, {
                                            label:
                                                "account.user_issued_assets.current_issuer",
                                            accountName: e.get("name"),
                                            account: e.get("name"),
                                            error: null,
                                            tabIndex: 1,
                                            disabled: !0
                                        })
                                    ),
                                    r.a.createElement(A.a, {
                                        label:
                                            "account.user_issued_assets.new_issuer",
                                        accountName: this.state
                                            .issuer_account_name,
                                        onChange: this.onAccountNameChanged.bind(
                                            this,
                                            "issuer_account_name"
                                        ),
                                        onAccountChanged: this.onAccountChanged.bind(
                                            this,
                                            "new_issuer_account_id"
                                        ),
                                        account: this.state.issuer_account_name,
                                        error: null,
                                        tabIndex: 1,
                                        typeahead: !0,
                                        excludeAccounts: [e.get("name")]
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            style: {paddingTop: "1rem"},
                                            className: "button-group"
                                        },
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: x()("button", {
                                                    disabled: !this.state
                                                        .new_issuer_account_id
                                                }),
                                                onClick: this.onSubmit.bind(
                                                    this
                                                )
                                            },
                                            r.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.update_owner"
                                            })
                                        ),
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: "button outline",
                                                onClick: this.onReset.bind(this)
                                            },
                                            r.a.createElement(i.a, {
                                                content: "account.perm.reset"
                                            })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            z.propTypes = {
                account: R.a.ChainAccount.isRequired,
                currentOwner: R.a.ChainAccount.isRequired
            };
            var J = (z = Object(D.a)(z)),
                M = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var V = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
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
                            n = new E.a({
                                amount: 0,
                                asset_id: e.quote.get("id"),
                                precision: e.quote.get("precision")
                            }),
                            r = new E.a({
                                amount: 0,
                                asset_id: e.base.get("id"),
                                precision: e.base.get("precision")
                            }),
                            s = new E.h({quote: n, base: r});
                        return (
                            (a.state = {price: s, realPriceValue: s.toReal()}),
                            a
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
                        M(t, [
                            {
                                key: "onPriceChanged",
                                value: function(e) {
                                    var t = e.amount;
                                    this.state.price.setPriceFromReal(
                                        parseFloat(t)
                                    ),
                                        this.setState({realPriceValue: t}),
                                        this.props.onPriceChanged &&
                                            this.props.onPriceChanged(
                                                this.state.price.clone()
                                            );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.state,
                                        t = e.realPriceValue,
                                        a = e.price;
                                    return r.a.createElement(O.a, {
                                        label: this.props.label,
                                        amount: t,
                                        onChange: this.onPriceChanged.bind(
                                            this
                                        ),
                                        asset: a.base.asset_id,
                                        base: this.props.quote.get("symbol"),
                                        isPrice: !0,
                                        assets: [a.quote.asset_id],
                                        placeholder: "0.0",
                                        tabIndex: 1,
                                        style: {
                                            width: "100%",
                                            paddingRight: "10px"
                                        }
                                    });
                                }
                            }
                        ]),
                        t
                    );
                })(),
                U = (V = Object(c.a)(V, {
                    propNames: ["quote", "base"],
                    defaultProps: {base: "1.3.0"}
                })),
                W = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function G(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            var H = (function(e) {
                function t(e) {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var a = (function(e, t) {
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
                    return (a.state = a.resetState(e)), a;
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
                    W(t, [
                        {
                            key: "resetState",
                            value: function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props,
                                    t = e.account.get("id"),
                                    a = e.base.getIn([
                                        "bitasset",
                                        "current_feed"
                                    ]),
                                    n = a.get(
                                        "maintenance_collateral_ratio",
                                        1750
                                    ),
                                    r = a.get(
                                        "maximum_short_squeeze_ratio",
                                        1100
                                    );
                                return {
                                    publisher: e.account.get("name"),
                                    publisher_id: t,
                                    mcr: n,
                                    mcrValue: n / 1e3,
                                    mssr: r,
                                    mssrValue: r / 1e3
                                };
                            }
                        },
                        {
                            key: "onAccountNameChanged",
                            value: function(e, t) {
                                this.setState(G({}, e, t));
                            }
                        },
                        {
                            key: "onAccountChanged",
                            value: function(e, t) {
                                this.setState(G({}, e, t ? t.get("id") : null));
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function() {
                                P.a.publishFeed({
                                    publisher: this.state.publisher_id,
                                    asset_id: this.props.base.get("id"),
                                    mcr: this.state.mcr,
                                    mssr: this.state.mssr,
                                    settlementPrice: this.state.settlementPrice,
                                    cer: this.state.cer
                                });
                            }
                        },
                        {
                            key: "onPriceChanged",
                            value: function(e, t) {
                                this.setState(G({}, e, t));
                            }
                        },
                        {
                            key: "onSetRatio",
                            value: function(e, t) {
                                var a,
                                    n = t.amount;
                                n &&
                                    "string" == typeof n &&
                                    -1 !== n.indexOf(".") &&
                                    n.indexOf(".") + 4 !== n.length &&
                                    (n = n.substr(0, n.indexOf(".") + 4)),
                                    this.setState(
                                        (G((a = {}), e + "Value", n),
                                        G(
                                            a,
                                            e,
                                            Math.floor(1e3 * parseFloat(n))
                                        ),
                                        a)
                                    );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.quote,
                                    a = e.base,
                                    n = this.state,
                                    s = n.mcrValue,
                                    o = n.mssrValue,
                                    l = n.publisher;
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(A.a, {
                                        label: "explorer.asset.feed_producer",
                                        accountName: l,
                                        onChange: this.onAccountNameChanged.bind(
                                            this,
                                            "publisher"
                                        ),
                                        onAccountChanged: this.onAccountChanged.bind(
                                            this,
                                            "publisher_id"
                                        ),
                                        account: l,
                                        error: null,
                                        tabIndex: 1,
                                        typeahead: !0
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(U, {
                                        onPriceChanged: this.onPriceChanged.bind(
                                            this,
                                            "cer"
                                        ),
                                        label:
                                            "explorer.asset.fee_pool.core_exchange_rate",
                                        quote: t.get("id"),
                                        base: a.get("id")
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(U, {
                                        onPriceChanged: this.onPriceChanged.bind(
                                            this,
                                            "settlementPrice"
                                        ),
                                        label:
                                            "explorer.asset.price_feed.settlement_price",
                                        quote: t.get("id"),
                                        base: a.get("id")
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(O.a, {
                                        label:
                                            "explorer.asset.price_feed.maintenance_collateral_ratio",
                                        amount: s,
                                        onChange: this.onSetRatio.bind(
                                            this,
                                            "mcr"
                                        ),
                                        placeholder: "0.0",
                                        style: {
                                            width: "100%",
                                            paddingRight: "10px"
                                        }
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(O.a, {
                                        label:
                                            "explorer.asset.price_feed.maximum_short_squeeze_ratio",
                                        amount: o,
                                        onChange: this.onSetRatio.bind(
                                            this,
                                            "mssr"
                                        ),
                                        placeholder: "0.0",
                                        style: {
                                            width: "100%",
                                            paddingRight: "10px"
                                        }
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            style: {paddingTop: "1rem"},
                                            className: "button-group"
                                        },
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: x()("button", {
                                                    disabled: !1
                                                }),
                                                onClick: this.onSubmit.bind(
                                                    this
                                                )
                                            },
                                            r.a.createElement(i.a, {
                                                content:
                                                    "transaction.trxTypes.asset_publish_feed"
                                            })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (H.propTypes = {account: R.a.ChainAccount.isRequired}),
                (H = Object(D.a)(H));
            var Y = (H = Object(c.a)(H, {
                    propNames: ["quote", "base"],
                    defaultProps: {quote: "1.3.0"}
                })),
                Z = a(1736),
                K =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                Q = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function X(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            function $(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function ee(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function te(e, t) {
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
            var ae = (function(e) {
                    function t() {
                        return (
                            $(this, t),
                            ee(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        te(t, r.a.Component),
                        Q(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.isSet,
                                        a = e.name;
                                    return t
                                        ? r.a.createElement(
                                              "span",
                                              {className: "asset-flag"},
                                              r.a.createElement(
                                                  "span",
                                                  {className: "label info"},
                                                  r.a.createElement(i.a, {
                                                      content:
                                                          "account.user_issued_assets." +
                                                          a
                                                  })
                                              )
                                          )
                                        : r.a.createElement("span", null);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ne = (function(e) {
                    function t() {
                        return (
                            $(this, t),
                            ee(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        te(t, r.a.Component),
                        Q(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.isSet,
                                        a = e.name;
                                    return t
                                        ? r.a.createElement(
                                              "span",
                                              {className: "asset-flag"},
                                              r.a.createElement(
                                                  "span",
                                                  {className: "label info"},
                                                  r.a.createElement(i.a, {
                                                      content:
                                                          "account.user_issued_assets." +
                                                          a
                                                  })
                                              )
                                          )
                                        : r.a.createElement("span", null);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                re = (function(e) {
                    function t(e) {
                        $(this, t);
                        var a = ee(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.state = {
                                callOrders: [],
                                marginTableSort: "price",
                                sortDirection: !0
                            }),
                            a
                        );
                    }
                    return (
                        te(t, r.a.Component),
                        Q(t, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    var e = this;
                                    if (this.props.asset.has("bitasset")) {
                                        var t,
                                            a = (X(
                                                (t = {}),
                                                this.props.asset.get("id"),
                                                this.props.asset.toJS()
                                            ),
                                            X(
                                                t,
                                                this.props.backingAsset.get(
                                                    "id"
                                                ),
                                                this.props.backingAsset.toJS()
                                            ),
                                            t),
                                            n = this.props.asset.getIn(
                                                [
                                                    "bitasset",
                                                    "is_prediction_market"
                                                ],
                                                !1
                                            ),
                                            r = this.props.asset.getIn([
                                                "bitasset",
                                                "current_feed",
                                                "maximum_short_squeeze_ratio"
                                            ]),
                                            s = this.props.asset.getIn([
                                                "bitasset",
                                                "current_feed",
                                                "settlement_price"
                                            ]);
                                        n &&
                                            s.getIn(["base", "asset_id"]) ===
                                                s.getIn([
                                                    "quote",
                                                    "asset_id"
                                                ]) &&
                                            (a[
                                                this.props.backingAsset.get(
                                                    "id"
                                                )
                                            ] ||
                                                (a[
                                                    this.props.backingAsset.get(
                                                        "id"
                                                    )
                                                ] = {
                                                    precision: this.props.asset.get(
                                                        "precision"
                                                    )
                                                }),
                                            (s = (s = (s = (s = s.setIn(
                                                ["base", "amount"],
                                                1
                                            )).setIn(
                                                ["base", "asset_id"],
                                                this.props.backingAsset.get(
                                                    "id"
                                                )
                                            )).setIn(
                                                ["quote", "amount"],
                                                1
                                            )).setIn(
                                                ["quote", "asset_id"],
                                                this.props.asset.get("id")
                                            )),
                                            (r = 1e3));
                                        try {
                                            var o = new E.c({
                                                priceObject: s,
                                                market_base: this.props.asset.get(
                                                    "id"
                                                ),
                                                sqr: r,
                                                assets: a
                                            });
                                            v.Apis.instance()
                                                .db_api()
                                                .exec("get_call_orders", [
                                                    this.props.asset.get("id"),
                                                    300
                                                ])
                                                .then(function(t) {
                                                    var r = t.map(function(t) {
                                                        return new E.b(
                                                            t,
                                                            a,
                                                            e.props.asset.get(
                                                                "id"
                                                            ),
                                                            o,
                                                            n
                                                        );
                                                    });
                                                    e.setState({callOrders: r});
                                                });
                                        } catch (e) {}
                                    }
                                }
                            },
                            {
                                key: "_toggleSortOrder",
                                value: function(e) {
                                    e !== this.state.marginTableSort
                                        ? this.setState({marginTableSort: e})
                                        : this.setState({
                                              sortDirection: !this.state
                                                  .sortDirection
                                          });
                                }
                            },
                            {
                                key: "_assetType",
                                value: function(e) {
                                    return "bitasset" in e
                                        ? e.bitasset.is_prediction_market
                                            ? "Prediction"
                                            : "Smart"
                                        : "Simple";
                                }
                            },
                            {
                                key: "renderFlagIndicators",
                                value: function(e, t) {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        t.map(function(t) {
                                            return r.a.createElement(ae, {
                                                key: "flag_" + t,
                                                name: t,
                                                isSet: e[t]
                                            });
                                        })
                                    );
                                }
                            },
                            {
                                key: "renderPermissionIndicators",
                                value: function(e, t) {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        t.map(function(t) {
                                            return r.a.createElement(ne, {
                                                key: "perm_" + t,
                                                name: t,
                                                isSet: e[t]
                                            });
                                        })
                                    );
                                }
                            },
                            {
                                key: "formattedPrice",
                                value: function(e) {
                                    var t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1] &&
                                            arguments[1],
                                        a =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2] &&
                                            arguments[2],
                                        n = e.base,
                                        s = e.quote;
                                    return r.a.createElement(m.a, {
                                        base_amount: n.amount,
                                        base_asset: n.asset_id,
                                        quote_amount: s.amount,
                                        quote_asset: s.asset_id,
                                        hide_value: a,
                                        hide_symbols: t
                                    });
                                }
                            },
                            {
                                key: "renderAuthorityList",
                                value: function(e) {
                                    return e.map(function(e) {
                                        return r.a.createElement(
                                            "span",
                                            null,
                                            r.a.createElement(l.a, {account: e})
                                        );
                                    });
                                }
                            },
                            {
                                key: "renderMarketList",
                                value: function(e, t) {
                                    var a = e.symbol;
                                    return t.map(
                                        function(e) {
                                            if (e == a) return null;
                                            var t = e + "_" + a,
                                                n = e + "/" + a;
                                            return r.a.createElement(
                                                "span",
                                                {key: t},
                                                r.a.createElement(
                                                    s.a,
                                                    {to: "/market/" + t},
                                                    n
                                                ),
                                                " "
                                            );
                                        }.bind(this)
                                    );
                                }
                            },
                            {
                                key: "renderAboutBox",
                                value: function(e, t) {
                                    var a = y.ChainStore.getObject(
                                            e.issuer,
                                            !1,
                                            !1
                                        ),
                                        n = a ? a.get("name") : "",
                                        o = h.a.parseDescription(
                                            e.options.description
                                        ),
                                        l = o.main,
                                        c = o.short_name ? o.short_name : null,
                                        u = (l =
                                            l && l.length > 0
                                                ? l + " "
                                                : l).match(
                                            /(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g
                                        ),
                                        m = y.ChainStore.getAsset("1.3.0"),
                                        p = o.market
                                            ? o.market
                                            : m
                                                ? m.get("symbol")
                                                : "BTS";
                                    "bitasset" in e &&
                                        e.bitasset.is_prediction_market &&
                                        (p = (p = y.ChainStore.getAsset(
                                            e.bitasset.options
                                                .short_backing_asset
                                        ))
                                            ? p.get("symbol")
                                            : m.get("symbol")),
                                        e.symbol === m.get("symbol") &&
                                            (p = "USD"),
                                        u &&
                                            u.length &&
                                            u.forEach(function(e) {
                                                var t =
                                                    '<a target="_blank" rel="noopener noreferrer" href="' +
                                                    e +
                                                    '">' +
                                                    e +
                                                    "</a>";
                                                l = l.replace(e, t);
                                            });
                                    var d = f.a.replaceName(t),
                                        b = d.name,
                                        g = d.prefix;
                                    return r.a.createElement(
                                        "div",
                                        {style: {overflow: "visible"}},
                                        r.a.createElement(_.a, {
                                            path: "assets/" + e.symbol,
                                            alt_path: "assets/Asset",
                                            section: "summary",
                                            symbol: (g || "") + b,
                                            description: l,
                                            issuer: n,
                                            hide_issuer: "true"
                                        }),
                                        c
                                            ? r.a.createElement("p", null, c)
                                            : null,
                                        r.a.createElement(
                                            s.a,
                                            {
                                                className:
                                                    "button market-button",
                                                to:
                                                    "/market/" +
                                                    e.symbol +
                                                    "_" +
                                                    p
                                            },
                                            r.a.createElement(i.a, {
                                                content: "exchange.market"
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderSummary",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    t && (t = t.toJS());
                                    var a = e.options,
                                        n = h.a.getFlagBooleans(
                                            e.options.flags,
                                            this.props.asset.has(
                                                "bitasset_data_id"
                                            )
                                        ),
                                        s = Object.keys(n),
                                        o = t
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(i.a, {
                                                          content:
                                                              "explorer.asset.summary.current_supply"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(u.a, {
                                                          amount:
                                                              t.current_supply,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null,
                                        c = t
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(i.a, {
                                                          content:
                                                              "explorer.asset.summary.stealth_supply"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(u.a, {
                                                          amount:
                                                              t.confidential_supply,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null,
                                        m = n.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(i.a, {
                                                          content:
                                                              "explorer.asset.summary.market_fee"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      a.market_fee_percent /
                                                          100,
                                                      " % "
                                                  )
                                              )
                                            : null,
                                        d = n.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(i.a, {
                                                          content:
                                                              "explorer.asset.summary.max_market_fee"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(u.a, {
                                                          amount: +a.max_market_fee,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null;
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            r.a.createElement(p.a, {
                                                name: e.symbol
                                            })
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover"
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
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.summary.asset_type"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        this._assetType(e),
                                                        " "
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.summary.issuer"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(l.a, {
                                                            account: e.issuer
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.assets.precision"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        e.precision,
                                                        " "
                                                    )
                                                ),
                                                o,
                                                c,
                                                m,
                                                d
                                            )
                                        ),
                                        r.a.createElement("br", null),
                                        this.renderFlagIndicators(n, s)
                                    );
                                }
                            },
                            {
                                key: "renderPriceFeed",
                                value: function(e) {
                                    var t = r.a.createElement(i.a, {
                                            content:
                                                "explorer.asset.price_feed.title"
                                        }),
                                        a = e.bitasset;
                                    if (!("current_feed" in a))
                                        return r.a.createElement("div", {
                                            header: t
                                        });
                                    var n = a.current_feed,
                                        s =
                                            a.options
                                                .force_settlement_delay_sec,
                                        o =
                                            a.options
                                                .force_settlement_offset_percent,
                                        l = this.getGlobalSettlementPrice();
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            t
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover",
                                                style: {padding: "1.2rem"}
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
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed.settlement_price"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        this.formattedPrice(
                                                            n.settlement_price
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed.maintenance_collateral_ratio"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        n.maintenance_collateral_ratio /
                                                            1e3
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed.maximum_short_squeeze_ratio"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        n.maximum_short_squeeze_ratio /
                                                            1e3
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed.global_settlement_price"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        l || "-"
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover",
                                                style: {marginTop: "2rem"}
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
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed.settlement_delay"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(g, {
                                                            time: s
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed.force_settlement_offset"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        o / 100,
                                                        "% "
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeePool",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    t && (t = t.toJS());
                                    var a = e.options,
                                        n = y.ChainStore.getAsset("1.3.0");
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            r.a.createElement(i.a, {
                                                content:
                                                    "explorer.asset.fee_pool.title"
                                            })
                                        ),
                                        r.a.createElement(i.a, {
                                            component: "p",
                                            content:
                                                "explorer.asset.fee_pool.pool_text",
                                            unsafe: !0,
                                            asset: e.symbol,
                                            core: n.get("symbol")
                                        }),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table",
                                                style: {padding: "1.2rem"}
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
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.core_exchange_rate"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        this.formattedPrice(
                                                            a.core_exchange_rate
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.pool_balance"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        t
                                                            ? r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      asset:
                                                                          "1.3.0",
                                                                      amount:
                                                                          t.fee_pool
                                                                  }
                                                              )
                                                            : null
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.unclaimed_issuer_income"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        t
                                                            ? r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      asset:
                                                                          e.id,
                                                                      amount:
                                                                          t.accumulated_fees
                                                                  }
                                                              )
                                                            : null
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderAssetOwnerUpdate",
                                value: function(e) {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-content small-no-padding",
                                            style: {overflowY: "visible"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "asset-card no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "card-divider"},
                                                r.a.createElement(i.a, {
                                                    content:
                                                        "account.user_issued_assets.update_owner"
                                                })
                                            ),
                                            r.a.createElement(i.a, {
                                                component: "p",
                                                content:
                                                    "account.user_issued_assets.update_owner_text",
                                                asset: e.symbol
                                            }),
                                            r.a.createElement(J, {
                                                asset: e,
                                                account: this.props
                                                    .currentAccount,
                                                currentOwner: e.issuer
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeedPublish",
                                value: function(e) {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-content small-no-padding",
                                            style: {overflowY: "visible"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "asset-card no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "card-divider"},
                                                r.a.createElement(i.a, {
                                                    content:
                                                        "transaction.trxTypes.asset_publish_feed"
                                                })
                                            ),
                                            r.a.createElement(i.a, {
                                                component: "p",
                                                content:
                                                    "explorer.asset.feed_producer_text"
                                            }),
                                            r.a.createElement(Y, {
                                                base: e.id,
                                                account: this.props
                                                    .currentAccount,
                                                currentOwner: e.issuer
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeePoolFunding",
                                value: function(e) {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-content small-no-padding"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "asset-card no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "card-divider"},
                                                r.a.createElement(i.a, {
                                                    content:
                                                        "explorer.asset.fee_pool.fund"
                                                })
                                            ),
                                            r.a.createElement(i.a, {
                                                component: "p",
                                                content:
                                                    "explorer.asset.fee_pool.fund_text",
                                                asset: e.symbol
                                            }),
                                            r.a.createElement(q, {
                                                asset: e.symbol,
                                                funderAccountName: this.props
                                                    .currentAccount,
                                                hideBalance: !0
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeePoolClaiming",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    return (
                                        t && (t = t.toJS()),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-content small-no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "asset-card no-padding"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {className: "card-divider"},
                                                    r.a.createElement(i.a, {
                                                        content:
                                                            "explorer.asset.fee_pool.claim_balance"
                                                    })
                                                ),
                                                r.a.createElement(q, {
                                                    asset: e.symbol,
                                                    funderAccountName: this
                                                        .props.currentAccount,
                                                    dynamic: t,
                                                    hideBalance: !0,
                                                    type: "claim"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeesClaiming",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    return (
                                        t && (t = t.toJS()),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-content small-no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "asset-card no-padding"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {className: "card-divider"},
                                                    r.a.createElement(i.a, {
                                                        content:
                                                            "transaction.trxTypes.asset_claim_fees"
                                                    })
                                                ),
                                                r.a.createElement(q, {
                                                    asset: e.symbol,
                                                    dynamic: t,
                                                    funderAccountName: this
                                                        .props.currentAccount,
                                                    hideBalance: !0,
                                                    type: "claim_fees"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderPermissions",
                                value: function(e) {
                                    var t = e.options,
                                        a = h.a.getFlagBooleans(
                                            e.options.issuer_permissions,
                                            this.props.asset.has(
                                                "bitasset_data_id"
                                            )
                                        ),
                                        n = Object.keys(a),
                                        s = a.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(i.a, {
                                                          content:
                                                              "explorer.asset.permissions.max_market_fee"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(u.a, {
                                                          amount: +t.max_market_fee,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null,
                                        o = r.a.createElement(
                                            "tr",
                                            null,
                                            r.a.createElement(
                                                "td",
                                                null,
                                                r.a.createElement(i.a, {
                                                    content:
                                                        "explorer.asset.permissions.max_supply"
                                                })
                                            ),
                                            r.a.createElement(
                                                "td",
                                                null,
                                                r.a.createElement(u.a, {
                                                    amount: +t.max_supply,
                                                    asset: e.id
                                                })
                                            )
                                        );
                                    a.white_list &&
                                        r.a.createElement(
                                            "span",
                                            null,
                                            r.a.createElement("br", null),
                                            r.a.createElement(i.a, {
                                                content:
                                                    "explorer.asset.permissions.blacklist_authorities"
                                            }),
                                            ":  ",
                                            this.renderAuthorityList(
                                                t.blacklist_authorities
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(i.a, {
                                                content:
                                                    "explorer.asset.permissions.blacklist_markets"
                                            }),
                                            ":  ",
                                            this.renderMarketList(
                                                e,
                                                t.blacklist_markets
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(i.a, {
                                                content:
                                                    "explorer.asset.permissions.whitelist_authorities"
                                            }),
                                            ":  ",
                                            this.renderAuthorityList(
                                                t.whitelist_authorities
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(i.a, {
                                                content:
                                                    "explorer.asset.permissions.whitelist_markets"
                                            }),
                                            ":  ",
                                            this.renderMarketList(
                                                e,
                                                t.whitelist_markets
                                            )
                                        );
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            r.a.createElement(i.a, {
                                                content:
                                                    "explorer.asset.permissions.title"
                                            })
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover",
                                                style: {padding: "1.2rem"}
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                s,
                                                o
                                            )
                                        ),
                                        r.a.createElement("br", null),
                                        this.renderPermissionIndicators(a, n),
                                        r.a.createElement("br", null)
                                    );
                                }
                            },
                            {
                                key: "getMarginPositions",
                                value: function() {
                                    var e = this.state.sortDirection,
                                        t = {
                                            name: function(t, a) {
                                                var n = y.ChainStore.getAccount(
                                                    t.borrower,
                                                    !1
                                                );
                                                n && (n = n.get("name"));
                                                var r = y.ChainStore.getAccount(
                                                    a.borrower,
                                                    !1
                                                );
                                                return (
                                                    r && (r = r.get("name")),
                                                    n > r
                                                        ? e
                                                            ? 1
                                                            : -1
                                                        : n < r
                                                            ? e
                                                                ? -1
                                                                : 1
                                                            : 0
                                                );
                                            },
                                            price: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (t.call_price.toReal() -
                                                        a.call_price.toReal())
                                                );
                                            },
                                            collateral: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (a.collateral -
                                                        t.collateral)
                                                );
                                            },
                                            debt: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (a.debt - t.debt)
                                                );
                                            },
                                            ratio: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (t.getRatio() -
                                                        a.getRatio())
                                                );
                                            }
                                        };
                                    return this.state.callOrders.sort(
                                        t[this.state.marginTableSort]
                                    );
                                }
                            },
                            {
                                key: "getGlobalSettlementPrice",
                                value: function() {
                                    if (!this.state.callOrders) return null;
                                    for (
                                        var e = null,
                                            t = null,
                                            a = this.state.callOrders.length,
                                            n = 0;
                                        n < a;
                                        n++
                                    ) {
                                        var s = this.state.callOrders[n];
                                        null == e
                                            ? ((e = s), (t = s.getRatio()))
                                            : s.getRatio() < t &&
                                              ((t = s.getRatio()), (e = s));
                                    }
                                    if (null == e) return null;
                                    var o = e.debt,
                                        i = e.collateral;
                                    return r.a.createElement(m.a, {
                                        base_amount: i,
                                        base_asset: e.call_price.base.asset_id,
                                        quote_amount: o,
                                        quote_asset: e.call_price.quote.asset_id
                                    });
                                }
                            },
                            {
                                key: "renderMarginPositions",
                                value: function(e, t) {
                                    var a = e.bitasset;
                                    if (
                                        !("feeds" in a) ||
                                        0 == a.feeds.length ||
                                        a.is_prediction_market
                                    )
                                        return null;
                                    var n = new Date().getTime(),
                                        s = new Date(
                                            n -
                                                1e3 *
                                                    e.bitasset.options
                                                        .feed_lifetime_sec
                                        ),
                                        o = a.feeds;
                                    if (
                                        !(o = o
                                            .filter(function(e) {
                                                return new Date(e[1][0]) > s;
                                            })
                                            .sort(function(e, t) {
                                                return (
                                                    new Date(t[1][0]) -
                                                    new Date(e[1][0])
                                                );
                                            })).length
                                    )
                                        return null;
                                    for (
                                        var c = [],
                                            p = o[0][1][1].settlement_price,
                                            _ = o[0][1][1].core_exchange_rate,
                                            h = r.a.createElement(
                                                "thead",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "left"
                                                            }
                                                        },
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.publisher"
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
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.settlement_price"
                                                        }),
                                                        r.a.createElement(
                                                            "br",
                                                            null
                                                        ),
                                                        "(",
                                                        this.formattedPrice(
                                                            p,
                                                            !1,
                                                            !0
                                                        ),
                                                        ")"
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            },
                                                            className:
                                                                "column-hide-small"
                                                        },
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.core_exchange_rate"
                                                        }),
                                                        r.a.createElement(
                                                            "br",
                                                            null
                                                        ),
                                                        "(",
                                                        this.formattedPrice(
                                                            _,
                                                            !1,
                                                            !0
                                                        ),
                                                        ")"
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.maintenance_collateral_ratio"
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
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.maximum_short_squeeze_ratio"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            },
                                                            className:
                                                                "column-hide-small"
                                                        },
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.published"
                                                        })
                                                    )
                                                )
                                            ),
                                            f = 0;
                                        f < o.length;
                                        f++
                                    ) {
                                        var b = o[f],
                                            g = b[0],
                                            y = new Date(b[1][0] + "Z"),
                                            v = b[1][1].settlement_price,
                                            E = b[1][1].core_exchange_rate,
                                            k =
                                                "" +
                                                b[1][1]
                                                    .maintenance_collateral_ratio /
                                                    1e3,
                                            w =
                                                "" +
                                                b[1][1]
                                                    .maximum_short_squeeze_ratio /
                                                    1e3;
                                        c.push(
                                            r.a.createElement(
                                                "tr",
                                                {key: g},
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(l.a, {
                                                        account: g
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    this.formattedPrice(v, !0)
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    this.formattedPrice(E, !0)
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    k
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    w
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    r.a.createElement(d.a, {
                                                        time: y
                                                    })
                                                )
                                            )
                                        );
                                    }
                                    var x = r.a.createElement(
                                            "thead",
                                            null,
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "name"
                                                        ),
                                                        style: {
                                                            textAlign: "left"
                                                        }
                                                    },
                                                    r.a.createElement(i.a, {
                                                        content:
                                                            "transaction.borrower"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "clickable column-hide-small",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "collateral"
                                                        )
                                                    },
                                                    r.a.createElement(i.a, {
                                                        content:
                                                            "transaction.collateral"
                                                    }),
                                                    this.state.callOrders.length
                                                        ? r.a.createElement(
                                                              "span",
                                                              null,
                                                              " (",
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      amount: this.state.callOrders[0]
                                                                          .getCollateral()
                                                                          .getAmount(),
                                                                      asset: this.state.callOrders[0].getCollateral()
                                                                          .asset_id,
                                                                      hide_amount: !0
                                                                  }
                                                              ),
                                                              ")"
                                                          )
                                                        : null
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "clickable column-hide-small",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "debt"
                                                        )
                                                    },
                                                    r.a.createElement(i.a, {
                                                        content:
                                                            "transaction.borrow_amount"
                                                    }),
                                                    this.state.callOrders.length
                                                        ? r.a.createElement(
                                                              "span",
                                                              null,
                                                              " (",
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      amount: this.state.callOrders[0]
                                                                          .amountToReceive()
                                                                          .getAmount(),
                                                                      asset: this.state.callOrders[0].amountToReceive()
                                                                          .asset_id,
                                                                      hide_amount: !0
                                                                  }
                                                              ),
                                                              ")"
                                                          )
                                                        : null
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "clickable column-hide-small"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {
                                                            onClick: this._toggleSortOrder.bind(
                                                                this,
                                                                "price"
                                                            )
                                                        },
                                                        r.a.createElement(i.a, {
                                                            content:
                                                                "exchange.call"
                                                        })
                                                    ),
                                                    this.state.callOrders.length
                                                        ? r.a.createElement(
                                                              "span",
                                                              null,
                                                              " (",
                                                              r.a.createElement(
                                                                  m.a,
                                                                  {
                                                                      base_amount: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .base
                                                                          .amount,
                                                                      base_asset: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .base
                                                                          .asset_id,
                                                                      quote_amount: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .quote
                                                                          .amount,
                                                                      quote_asset: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .quote
                                                                          .asset_id,
                                                                      hide_value: !0,
                                                                      noPopOver: !0
                                                                  }
                                                              ),
                                                              ")"
                                                          )
                                                        : null
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(i.a, {
                                                        content:
                                                            "borrow.coll_ratio_target"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "ratio"
                                                        )
                                                    },
                                                    r.a.createElement(i.a, {
                                                        content:
                                                            "borrow.coll_ratio"
                                                    })
                                                )
                                            )
                                        ),
                                        A = t.map(function(e) {
                                            return r.a.createElement(
                                                "tr",
                                                {
                                                    className: "margin-row",
                                                    key: e.id
                                                },
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(l.a, {
                                                        account: e.borrower
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    r.a.createElement(u.a, {
                                                        amount: e.collateral,
                                                        asset: e.getCollateral()
                                                            .asset_id,
                                                        hide_asset: !0
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    r.a.createElement(u.a, {
                                                        amount: e.debt,
                                                        asset: e.amountToReceive()
                                                            .asset_id,
                                                        hide_asset: !0
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right",
                                                            paddingRight: 10
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    r.a.createElement(m.a, {
                                                        base_amount:
                                                            e.call_price.base
                                                                .amount,
                                                        base_asset:
                                                            e.call_price.base
                                                                .asset_id,
                                                        quote_amount:
                                                            e.call_price.quote
                                                                .amount,
                                                        quote_asset:
                                                            e.call_price.quote
                                                                .asset_id,
                                                        hide_symbols: !0
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right",
                                                            paddingRight: 10
                                                        }
                                                    },
                                                    e.order
                                                        .target_collateral_ratio
                                                        ? (
                                                              e.order
                                                                  .target_collateral_ratio /
                                                              1e3
                                                          ).toFixed(3)
                                                        : "-"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        className: e.getStatus(),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    e.getRatio().toFixed(3)
                                                )
                                            );
                                        });
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className: "grid-block",
                                            style: {paddingBottom: "1rem"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-content no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: ""},
                                                r.a.createElement(
                                                    Z.b,
                                                    {
                                                        defaultActiveTab: 0,
                                                        segmented: !1,
                                                        setting:
                                                            "bitassetDataTabs"
                                                    },
                                                    r.a.createElement(
                                                        Z.a,
                                                        {
                                                            title:
                                                                "explorer.asset.price_feed_data.title"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    " table order-table table-hover",
                                                                style: {
                                                                    padding:
                                                                        "1.2rem"
                                                                }
                                                            },
                                                            h,
                                                            r.a.createElement(
                                                                "tbody",
                                                                null,
                                                                c
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        Z.a,
                                                        {
                                                            title:
                                                                "explorer.asset.margin_positions.title"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    " table order-table table-hover",
                                                                style: {
                                                                    padding:
                                                                        "1.2rem"
                                                                }
                                                            },
                                                            x,
                                                            r.a.createElement(
                                                                "tbody",
                                                                null,
                                                                A
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.asset.toJS(),
                                        t = this.getMarginPositions(),
                                        a =
                                            "bitasset" in e
                                                ? this.renderPriceFeed(e)
                                                : null,
                                        n =
                                            "bitasset" in e
                                                ? this.renderMarginPositions(
                                                      e,
                                                      t
                                                  )
                                                : null;
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-container asset-page"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block page-layout"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block main-content wrap"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block medium-up-1",
                                                        style: {width: "100%"}
                                                    },
                                                    this.renderAboutBox(
                                                        e,
                                                        this.props.asset
                                                    )
                                                ),
                                                r.a.createElement(
                                                    Z.b,
                                                    {
                                                        setting:
                                                            "assetDataTabs",
                                                        className:
                                                            "grid-block vertical",
                                                        tabsClass:
                                                            "bordered-header content-block",
                                                        contentClass:
                                                            "tab-no-background",
                                                        segmented: !1
                                                    },
                                                    r.a.createElement(
                                                        Z.a,
                                                        {
                                                            title:
                                                                "explorer.asset.info"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-block vertical large-horizontal medium-up-1 large-up-2",
                                                                style: {
                                                                    paddingTop:
                                                                        "1rem"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-content small-no-padding"
                                                                },
                                                                this.renderSummary(
                                                                    e
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-content small-no-padding"
                                                                },
                                                                this.renderPermissions(
                                                                    e
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-content small-no-padding"
                                                                },
                                                                this.renderFeePool(
                                                                    e
                                                                )
                                                            ),
                                                            a
                                                                ? r.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "grid-content small-no-padding"
                                                                      },
                                                                      this.renderPriceFeed(
                                                                          e
                                                                      )
                                                                  )
                                                                : null
                                                        ),
                                                        n || null
                                                    ),
                                                    r.a.createElement(
                                                        Z.a,
                                                        {
                                                            title:
                                                                "explorer.asset.actions"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-block vertical large-horizontal medium-up-1 large-up-2",
                                                                style: {
                                                                    paddingTop:
                                                                        "1rem"
                                                                }
                                                            },
                                                            this.renderFeePoolFunding(
                                                                e
                                                            ),
                                                            this.renderFeePoolClaiming(
                                                                e
                                                            ),
                                                            this.renderFeesClaiming(
                                                                e
                                                            ),
                                                            this.renderAssetOwnerUpdate(
                                                                e
                                                            ),
                                                            "bitasset" in e &&
                                                            !e.bitasset
                                                                .is_prediction_market
                                                                ? this.renderFeedPublish(
                                                                      e
                                                                  )
                                                                : null
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
            (re = Object(I.connect)(re, {
                listenTo: function() {
                    return [F.a];
                },
                getProps: function() {
                    return {
                        currentAccount:
                            F.a.getState().currentAccount ||
                            F.a.getState().passwordAccount
                    };
                }
            })),
                (re = Object(c.a)(re, {propNames: ["backingAsset"]}));
            var se = (function(e) {
                function t() {
                    return (
                        $(this, t),
                        ee(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    te(t, r.a.Component),
                    Q(t, [
                        {
                            key: "render",
                            value: function() {
                                if (null === this.props.asset)
                                    return r.a.createElement(k.a, {
                                        subtitle: "asset_not_found_subtitle"
                                    });
                                var e = this.props.asset.has("bitasset")
                                    ? this.props.asset.getIn([
                                          "bitasset",
                                          "options",
                                          "short_backing_asset"
                                      ])
                                    : "1.3.0";
                                return r.a.createElement(
                                    re,
                                    K({}, this.props, {backingAsset: e})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            se = Object(c.a)(se, {withDynamic: !0});
            var oe = (function(e) {
                function t() {
                    return (
                        $(this, t),
                        ee(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    te(t, r.a.Component),
                    Q(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.match.params.symbol.toUpperCase();
                                return r.a.createElement(
                                    se,
                                    K({}, this.props, {asset: e})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = oe;
        }
    }
]);
//# sourceMappingURL=asset.js.map
