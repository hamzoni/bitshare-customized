(window.webpackJsonp = window.webpackJsonp || []).push([
    [12],
    {
        1731: function(e, t, a) {
            "use strict";
            var n = a(0),
                s = a.n(n),
                o = a(3),
                r = a.n(o),
                i = a(29),
                c = a(500),
                l = a(11),
                u = a.n(l),
                p = a(15),
                h = a.n(p),
                m = a(149),
                f = a(16),
                d = a(1),
                b = a.n(d),
                g = (function() {
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
            function _(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function v(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function y(e, t) {
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
                        _(this, t),
                        v(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    y(t, s.a.Component),
                    g(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    !f.a.are_equal_shallow(
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
                                    ? s.a.createElement(c.a, {
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
                                              ? s.a.createElement(i.a, {
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
                value: b.a.string,
                onChange: b.a.func,
                scroll_length: b.a.number
            }),
                (E = Object(m.a)(E, {asList: !0}));
            var k = (function(e) {
                function t() {
                    return (
                        _(this, t),
                        v(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    y(t, s.a.Component),
                    g(t, [
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
                                    ? h.a.translate(this.props.error)
                                    : this.formatAmount(this.props.amount);
                                return s.a.createElement(
                                    "div",
                                    {
                                        className: "amount-selector",
                                        style: this.props.style
                                    },
                                    s.a.createElement(
                                        "label",
                                        {className: "right-label"},
                                        this.props.display_balance
                                    ),
                                    s.a.createElement(r.a, {
                                        className: "left-label",
                                        component: "label",
                                        content: this.props.label
                                    }),
                                    s.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "inline-label input-wrapper"
                                        },
                                        s.a.createElement("input", {
                                            disabled: this.props.disabled,
                                            type: "text",
                                            value: e || "",
                                            placeholder: this.props.placeholder,
                                            onChange: this._onChange.bind(this),
                                            tabIndex: this.props.tabIndex
                                        }),
                                        s.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "form-label select floating-dropdown"
                                            },
                                            this.props.isPrice
                                                ? s.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "dropdown-wrapper inactive"
                                                      },
                                                      s.a.createElement(
                                                          "div",
                                                          null,
                                                          this.props.asset.get(
                                                              "symbol"
                                                          ),
                                                          "/",
                                                          this.props.base
                                                      )
                                                  )
                                                : s.a.createElement(E, {
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
                label: b.a.string,
                assets: b.a.array,
                amount: b.a.any,
                placeholder: b.a.string,
                onChange: b.a.func,
                tabIndex: b.a.number,
                error: b.a.string,
                scroll_length: b.a.number
            }),
                (k.defaultProps = {disabled: !1, tabIndex: 0}),
                (k = Object(m.a)(k)),
                (t.a = k);
        },
        1732: function(e, t, a) {
            "use strict";
            var n = a(0),
                s = a.n(n),
                o = a(29),
                r = a(45),
                i = a(67),
                c = a(1),
                l = a.n(c),
                u = (function() {
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
                    })(t, s.a.Component),
                    u(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = Number(
                                        this.props.balance.get("balance")
                                    ),
                                    t = this.props.balance.get("asset_type");
                                return s.a.createElement(o.a, {
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
                balance: r.a.ChainObject.isRequired,
                assetInfo: l.a.node,
                hide_asset: l.a.bool
            }),
                (p.defaultProps = {hide_asset: !1}),
                (t.a = Object(i.a)(p));
        },
        2065: function(e, t, a) {
            "use strict";
            a.r(t),
                function(e) {
                    var n = a(1812),
                        s = a(1734),
                        o = a(0),
                        r = a.n(o),
                        i = a(1732),
                        c = a(58),
                        l = a(3),
                        u = a.n(l),
                        p = a(237),
                        h = a(498),
                        m = a(30),
                        f = a(1731),
                        d = a(16),
                        b = a(15),
                        g = a.n(b),
                        _ = a(142),
                        v = a(1758),
                        y = a(11),
                        E = a.n(y),
                        k = a(10),
                        C = a(31),
                        S = a(497),
                        A = a(7),
                        w = a.n(A),
                        O = a(33),
                        j = a(1950),
                        I = a.n(j),
                        N = (function() {
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
                    var P = (function(t) {
                        function a(e) {
                            !(function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, a);
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
                                        a.__proto__ || Object.getPrototypeOf(a)
                                    ).call(this, e)
                                ),
                                n = a.getInitialState(),
                                o = I.a.parse(e.location.search) || {};
                            o.from &&
                                ((n.from_name = o.from),
                                k.ChainStore.getAccount(o.from)),
                                o.to &&
                                    ((n.to_name = o.to),
                                    k.ChainStore.getAccount(o.to)),
                                o.amount && (n.amount = o.amount),
                                o.asset &&
                                    ((n.asset_id = o.asset),
                                    (n.asset = k.ChainStore.getAsset(o.asset))),
                                o.memo && (n.memo = o.memo);
                            var r = m.a.getState().currentAccount;
                            return (
                                n.from_name || (n.from_name = r),
                                (t.state = n),
                                (t.onTrxIncluded = t.onTrxIncluded.bind(t)),
                                (t._updateFee = Object(s.a)(
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
                            })(a, r.a.Component),
                            N(
                                a,
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
                                            var a = this._getAvailableAssets()
                                                    .asset_types,
                                                n = this._getAvailableAssets(t)
                                                    .asset_types;
                                            if (1 === n.length) {
                                                var s = k.ChainStore.getAsset(
                                                    n[0]
                                                );
                                                1 !== a.length &&
                                                    this.onAmountChanged({
                                                        amount: t.amount,
                                                        asset: s
                                                    }),
                                                    n[0] !==
                                                        this.state
                                                            .fee_asset_id &&
                                                        s &&
                                                        this.state
                                                            .fee_asset_id !==
                                                            n[0] &&
                                                        this.setState({
                                                            feeAsset: s,
                                                            fee_asset_id: n[0]
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
                                                        from_account: k.ChainStore.getAccount(
                                                            e.currentAccount
                                                        ),
                                                        feeStatus: {},
                                                        fee_asset_id: "1.3.0",
                                                        feeAmount: new O.a({
                                                            amount: 0
                                                        })
                                                    },
                                                    function() {
                                                        t._updateFee(),
                                                            t._checkFeeStatus(
                                                                k.ChainStore.getAccount(
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
                                                a = e.amount,
                                                n = e.from_account,
                                                s = e.asset;
                                            if (s && n) {
                                                var o = n.getIn([
                                                        "balances",
                                                        s.get("id")
                                                    ]),
                                                    r = n.getIn([
                                                        "balances",
                                                        t.asset_id
                                                    ]);
                                                if (s && n) {
                                                    if (!o)
                                                        return this.setState({
                                                            balanceError: !0
                                                        });
                                                    var i = k.ChainStore.getObject(
                                                            o
                                                        ),
                                                        c = r
                                                            ? k.ChainStore.getObject(
                                                                  r
                                                              )
                                                            : null;
                                                    if (
                                                        ((c &&
                                                            0 !==
                                                                c.get(
                                                                    "balance"
                                                                )) ||
                                                            this.setState(
                                                                {
                                                                    fee_asset_id:
                                                                        "1.3.0"
                                                                },
                                                                this._updateFee
                                                            ),
                                                        i && t)
                                                    ) {
                                                        var l = Object(S.a)(
                                                            a,
                                                            s,
                                                            t,
                                                            i
                                                        );
                                                        null !== l &&
                                                            this.setState({
                                                                balanceError: !l
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
                                                var a = Object.keys(
                                                        t.get("balances").toJS()
                                                    ).sort(d.a.sortID),
                                                    n = {},
                                                    s = [];
                                                a.forEach(function(a) {
                                                    s.push(
                                                        Object(S.b)({
                                                            accountID: t.get(
                                                                "id"
                                                            ),
                                                            feeID: a,
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
                                                    Promise.all(s)
                                                        .then(function(t) {
                                                            a.forEach(function(
                                                                e,
                                                                a
                                                            ) {
                                                                n[e] = t[a];
                                                            }),
                                                                d.a.are_equal_shallow(
                                                                    e.state
                                                                        .feeStatus,
                                                                    n
                                                                ) ||
                                                                    e.setState({
                                                                        feeStatus: n
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
                                                a = t.fee_asset_id,
                                                n = t.from_account,
                                                s = t.asset_id,
                                                o = this._getAvailableAssets(t)
                                                    .fee_asset_types;
                                            if (
                                                (1 === o.length &&
                                                    o[0] !== a &&
                                                    (a = o[0]),
                                                !n)
                                            )
                                                return null;
                                            Object(S.b)({
                                                accountID: n.get("id"),
                                                feeID: a,
                                                options: ["price_per_kbyte"],
                                                data: {
                                                    type: "memo",
                                                    content: t.memo
                                                }
                                            }).then(function(t) {
                                                var a = t.fee,
                                                    o = t.hasBalance,
                                                    r = t.hasPoolBalance;
                                                return Object(S.d)(n, a).then(
                                                    function(t) {
                                                        return t
                                                            ? e.setState(
                                                                  {
                                                                      fee_asset_id: s
                                                                  },
                                                                  e._updateFee
                                                              )
                                                            : e.setState({
                                                                  feeAmount: a,
                                                                  fee_asset_id:
                                                                      a.asset_id,
                                                                  hasBalance: o,
                                                                  hasPoolBalance: r,
                                                                  error:
                                                                      !o || !r
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
                                                a = e.asset;
                                            a &&
                                                this.setState(
                                                    {
                                                        amount: t,
                                                        asset: a,
                                                        asset_id: a.get("id"),
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
                                                ? (_.a.unlisten(
                                                      this.onTrxIncluded
                                                  ),
                                                  _.a.reset())
                                                : e.closed &&
                                                  (_.a.unlisten(
                                                      this.onTrxIncluded
                                                  ),
                                                  _.a.reset());
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
                                            var a = this;
                                            t.preventDefault(),
                                                this.setState({error: null});
                                            var n = this.state,
                                                s = n.asset,
                                                o = n.amount,
                                                r = new O.a({
                                                    real: o,
                                                    asset_id: s.get("id"),
                                                    precision: s.get(
                                                        "precision"
                                                    )
                                                });
                                            c.a
                                                .transfer(
                                                    this.state.from_account.get(
                                                        "id"
                                                    ),
                                                    this.state.to_account.get(
                                                        "id"
                                                    ),
                                                    r.getAmount(),
                                                    s.get("id"),
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
                                                    a.resetForm.call(a),
                                                        _.a.unlisten(
                                                            a.onTrxIncluded
                                                        ),
                                                        _.a.listen(
                                                            a.onTrxIncluded
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
                                                        a.setState({error: t});
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
                                            var a = this.state.feeAmount,
                                                n = k.ChainStore.getObject(t),
                                                s = k.ChainStore.getObject(e),
                                                o = new O.a({
                                                    amount: n.get("balance"),
                                                    asset_id: s.get("id"),
                                                    precision: s.get(
                                                        "precision"
                                                    )
                                                });
                                            n &&
                                                (a.asset_id === o.asset_id &&
                                                    o.minus(a),
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
                                            var a = e.from_account,
                                                n = e.from_error,
                                                s = [],
                                                o = [];
                                            if (!a || !a.get("balances") || n)
                                                return {
                                                    asset_types: s,
                                                    fee_asset_types: o
                                                };
                                            var r = e.from_account
                                                .get("balances")
                                                .toJS();
                                            for (var i in ((s = Object.keys(
                                                r
                                            ).sort(d.a.sortID)),
                                            (o = Object.keys(r).sort(
                                                d.a.sortID
                                            )),
                                            r)) {
                                                var c = k.ChainStore.getObject(
                                                    r[i]
                                                );
                                                c &&
                                                    0 === c.get("balance") &&
                                                    (s.splice(s.indexOf(i), 1),
                                                    -1 !== o.indexOf(i) &&
                                                        o.splice(
                                                            o.indexOf(i),
                                                            1
                                                        ));
                                            }
                                            return {
                                                asset_types: s,
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
                                                a = t.propose,
                                                s = t.from_account,
                                                o = t.to_account,
                                                c = t.asset,
                                                l = t.asset_id,
                                                d = t.propose_account,
                                                b = t.feeAmount,
                                                _ = t.amount,
                                                y = t.error,
                                                C = t.to_name,
                                                S = t.from_name,
                                                A = t.memo,
                                                O = t.feeAsset,
                                                j = t.fee_asset_id,
                                                I = t.balanceError,
                                                N =
                                                    m.a.isMyAccount(s) ||
                                                    S ===
                                                        this.props
                                                            .passwordAccount;
                                            !s ||
                                                N ||
                                                a ||
                                                (e = r.a.createElement(
                                                    "span",
                                                    null,
                                                    g.a.translate(
                                                        "account.errors.not_yours"
                                                    ),
                                                    " (",
                                                    r.a.createElement(
                                                        "a",
                                                        {
                                                            onClick: this.onPropose.bind(
                                                                this,
                                                                !0
                                                            )
                                                        },
                                                        g.a.translate("propose")
                                                    ),
                                                    ")"
                                                ));
                                            var P = this._getAvailableAssets(),
                                                x = P.asset_types,
                                                F = P.fee_asset_types,
                                                T = null,
                                                B = this.state.feeAmount.getAmount(
                                                    {real: !0}
                                                );
                                            if (s && s.get("balances") && !e) {
                                                var D = s
                                                    .get("balances")
                                                    .toJS();
                                                if (
                                                    (1 === x.length &&
                                                        (c = k.ChainStore.getAsset(
                                                            x[0]
                                                        )),
                                                    x.length > 0)
                                                ) {
                                                    var R = c
                                                            ? c.get("id")
                                                            : x[0],
                                                        M = O
                                                            ? O.get("id")
                                                            : "1.3.0";
                                                    T = r.a.createElement(
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
                                                                B,
                                                                M
                                                            )
                                                        },
                                                        r.a.createElement(u.a, {
                                                            component: "span",
                                                            content:
                                                                "transfer.available"
                                                        }),
                                                        ":",
                                                        " ",
                                                        r.a.createElement(i.a, {
                                                            balance: D[R]
                                                        })
                                                    );
                                                } else T = "No funds";
                                            }
                                            var J = a && !d,
                                                L = parseFloat(
                                                    String.prototype.replace.call(
                                                        _,
                                                        /,/g,
                                                        ""
                                                    )
                                                ),
                                                q = L && !Object(n.a)(L),
                                                z = o && o.get("name") === C,
                                                U =
                                                    !s ||
                                                    !z ||
                                                    !q ||
                                                    !c ||
                                                    e ||
                                                    J ||
                                                    I,
                                                V = E.a.Set();
                                            V = V.add(s);
                                            var W = 1;
                                            return r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block vertical"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block shrink vertical medium-horizontal",
                                                        style: {
                                                            paddingTop: "2rem"
                                                        }
                                                    },
                                                    r.a.createElement(
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
                                                        r.a.createElement(u.a, {
                                                            content:
                                                                "transfer.header",
                                                            component: "h2"
                                                        }),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block"
                                                            },
                                                            r.a.createElement(
                                                                h.a,
                                                                {
                                                                    label:
                                                                        "transfer.from",
                                                                    ref: "from",
                                                                    accountName: S,
                                                                    onChange: this.fromChanged.bind(
                                                                        this
                                                                    ),
                                                                    onAccountChanged: this.onFromAccountChanged.bind(
                                                                        this
                                                                    ),
                                                                    account: s,
                                                                    size: 60,
                                                                    error: e,
                                                                    typeahead: !0,
                                                                    tabIndex: W++
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block"
                                                            },
                                                            r.a.createElement(
                                                                h.a,
                                                                {
                                                                    label:
                                                                        "transfer.to",
                                                                    ref: "to",
                                                                    accountName: C,
                                                                    onChange: this.toChanged.bind(
                                                                        this
                                                                    ),
                                                                    onAccountChanged: this.onToAccountChanged.bind(
                                                                        this
                                                                    ),
                                                                    account: o,
                                                                    size: 60,
                                                                    tabIndex: W++,
                                                                    typeahead: !0
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block transfer-input"
                                                            },
                                                            r.a.createElement(
                                                                f.a,
                                                                {
                                                                    label:
                                                                        "transfer.amount",
                                                                    amount: _,
                                                                    onChange: this.onAmountChanged.bind(
                                                                        this
                                                                    ),
                                                                    asset:
                                                                        x.length >
                                                                            0 &&
                                                                        c
                                                                            ? c.get(
                                                                                  "id"
                                                                              )
                                                                            : l ||
                                                                              x[0],
                                                                    assets: x,
                                                                    display_balance: T,
                                                                    tabIndex: W++
                                                                }
                                                            ),
                                                            this.state
                                                                .balanceError
                                                                ? r.a.createElement(
                                                                      "p",
                                                                      {
                                                                          className:
                                                                              "has-error no-margin",
                                                                          style: {
                                                                              paddingTop: 10
                                                                          }
                                                                      },
                                                                      r.a.createElement(
                                                                          u.a,
                                                                          {
                                                                              content:
                                                                                  "transfer.errors.insufficient"
                                                                          }
                                                                      )
                                                                  )
                                                                : null
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block transfer-input"
                                                            },
                                                            A && A.length
                                                                ? r.a.createElement(
                                                                      "label",
                                                                      {
                                                                          className:
                                                                              "right-label"
                                                                      },
                                                                      A.length
                                                                  )
                                                                : null,
                                                            r.a.createElement(
                                                                u.a,
                                                                {
                                                                    className:
                                                                        "left-label tooltip",
                                                                    component:
                                                                        "label",
                                                                    content:
                                                                        "transfer.memo",
                                                                    "data-place":
                                                                        "top",
                                                                    "data-tip": g.a.translate(
                                                                        "tooltip.memo_tip"
                                                                    )
                                                                }
                                                            ),
                                                            r.a.createElement(
                                                                "textarea",
                                                                {
                                                                    style: {
                                                                        marginBottom: 0
                                                                    },
                                                                    rows: "3",
                                                                    value: A,
                                                                    tabIndex: W++,
                                                                    onChange: this.onMemoChanged.bind(
                                                                        this
                                                                    )
                                                                }
                                                            ),
                                                            this.state.propose
                                                                ? r.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "error-area",
                                                                          style: {
                                                                              position:
                                                                                  "absolute"
                                                                          }
                                                                      },
                                                                      r.a.createElement(
                                                                          u.a,
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
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block transfer-input fee-row" +
                                                                    (this.state
                                                                        .propose
                                                                        ? " proposal"
                                                                        : "")
                                                            },
                                                            r.a.createElement(
                                                                f.a,
                                                                {
                                                                    refCallback: this.setNestedRef.bind(
                                                                        this
                                                                    ),
                                                                    label:
                                                                        "transfer.fee",
                                                                    disabled: !0,
                                                                    amount: B,
                                                                    onChange: this.onFeeChanged.bind(
                                                                        this
                                                                    ),
                                                                    asset:
                                                                        F.length &&
                                                                        b
                                                                            ? b.asset_id
                                                                            : 1 ===
                                                                              F.length
                                                                                ? F[0]
                                                                                : j ||
                                                                                  F[0],
                                                                    assets: F,
                                                                    tabIndex: W++,
                                                                    error:
                                                                        !1 ===
                                                                        this
                                                                            .state
                                                                            .hasPoolBalance
                                                                            ? "transfer.errors.insufficient"
                                                                            : null
                                                                }
                                                            ),
                                                            a
                                                                ? r.a.createElement(
                                                                      "button",
                                                                      {
                                                                          className: w()(
                                                                              "button float-right no-margin",
                                                                              {
                                                                                  disabled: U
                                                                              }
                                                                          ),
                                                                          type:
                                                                              "submit",
                                                                          value:
                                                                              "Submit",
                                                                          tabIndex: W++
                                                                      },
                                                                      r.a.createElement(
                                                                          u.a,
                                                                          {
                                                                              component:
                                                                                  "span",
                                                                              content:
                                                                                  "propose"
                                                                          }
                                                                      )
                                                                  )
                                                                : r.a.createElement(
                                                                      "button",
                                                                      {
                                                                          className: w()(
                                                                              "button float-right no-margin",
                                                                              {
                                                                                  disabled: U
                                                                              }
                                                                          ),
                                                                          type:
                                                                              "submit",
                                                                          value:
                                                                              "Submit",
                                                                          tabIndex: W++
                                                                      },
                                                                      r.a.createElement(
                                                                          u.a,
                                                                          {
                                                                              component:
                                                                                  "span",
                                                                              content:
                                                                                  "transfer.send"
                                                                          }
                                                                      )
                                                                  )
                                                        ),
                                                        a
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "full-width-content form-group transfer-input"
                                                                  },
                                                                  r.a.createElement(
                                                                      "label",
                                                                      {
                                                                          className:
                                                                              "left-label"
                                                                      },
                                                                      r.a.createElement(
                                                                          u.a,
                                                                          {
                                                                              content:
                                                                                  "account.propose_from"
                                                                          }
                                                                      )
                                                                  ),
                                                                  r.a.createElement(
                                                                      p.a,
                                                                      {
                                                                          account_names: m.a.getMyAccounts(),
                                                                          onChange: this.onProposeAccount.bind(
                                                                              this
                                                                          ),
                                                                          tabIndex: W++
                                                                      }
                                                                  )
                                                              )
                                                            : null,
                                                        y
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "content-block has-error"
                                                                  },
                                                                  y
                                                              )
                                                            : null,
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            a
                                                                ? r.a.createElement(
                                                                      "span",
                                                                      null,
                                                                      r.a.createElement(
                                                                          "button",
                                                                          {
                                                                              className:
                                                                                  " button",
                                                                              onClick: this.onPropose.bind(
                                                                                  this,
                                                                                  !1
                                                                              ),
                                                                              tabIndex: W++
                                                                          },
                                                                          r.a.createElement(
                                                                              u.a,
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
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-content small-12 medium-6 large-4 large-offset-1 right-column"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-content no-padding"
                                                            },
                                                            r.a.createElement(
                                                                v.a,
                                                                {
                                                                    accountsList: V,
                                                                    limit: 25,
                                                                    compactView: !0,
                                                                    filter:
                                                                        "transfer",
                                                                    fullHeight: !0
                                                                }
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement("div", {
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
                                                feeAmount: new O.a({amount: 0}),
                                                feeStatus: {}
                                            };
                                        }
                                    }
                                ]
                            ),
                            a
                        );
                    })();
                    t.default = Object(C.connect)(P, {
                        listenTo: function() {
                            return [m.a];
                        },
                        getProps: function() {
                            return {
                                currentAccount: m.a.getState().currentAccount,
                                passwordAccount: m.a.getState().passwordAccount,
                                contactsList: m.a.getState().accountContacts
                            };
                        }
                    });
                }.call(this, a(129).Buffer);
        }
    }
]);
//# sourceMappingURL=transfer.js.map
