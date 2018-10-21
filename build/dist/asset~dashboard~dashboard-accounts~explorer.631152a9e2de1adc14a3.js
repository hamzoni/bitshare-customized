(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        1814: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return w;
            }),
                n.d(t, "a", function() {
                    return y;
                });
            var a = n(0),
                o = n.n(a),
                s = n(1),
                i = n.n(s),
                r = n(8),
                c = n.n(r),
                l = n(33),
                u = n(22),
                p = n(21),
                d = n(17),
                m = n.n(d),
                h = n(2119),
                f = (n(1852), n(745)),
                b = (function() {
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
            function _(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function g(e, t) {
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
            var y = (function(e) {
                function t() {
                    return (
                        _(this, t),
                        g(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    v(t, o.a.Component),
                    b(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.isActive,
                                    n = e.index,
                                    a = e.changeTab,
                                    s = e.title,
                                    i = e.className,
                                    r = e.updatedTab,
                                    l = e.disabled,
                                    u = e.subText,
                                    p = c()({"is-active": t}, i);
                                return (
                                    "string" == typeof s &&
                                        s.indexOf(".") > 0 &&
                                        (s = m.a.translate(s)),
                                    this.props.collapsed
                                        ? ("string" == typeof u &&
                                              (u = u.trim()),
                                          o.a.createElement(
                                              "option",
                                              {
                                                  value: n,
                                                  "data-is-link-to": this.props
                                                      .isLinkTo
                                              },
                                              o.a.createElement(
                                                  "span",
                                                  {className: "tab-title"},
                                                  s,
                                                  r ? "*" : "",
                                                  u && " (",
                                                  u && u,
                                                  u && ")"
                                              )
                                          ))
                                        : o.a.createElement(
                                              "li",
                                              {
                                                  className: p,
                                                  onClick: l
                                                      ? null
                                                      : a.bind(
                                                            this,
                                                            n,
                                                            this.props.isLinkTo
                                                        )
                                              },
                                              o.a.createElement(
                                                  "a",
                                                  null,
                                                  o.a.createElement(
                                                      "span",
                                                      {
                                                          className:
                                                              "tab-title mono-fix-title"
                                                      },
                                                      s,
                                                      " ",
                                                      r ? "*" : ""
                                                  ),
                                                  u &&
                                                      o.a.createElement(
                                                          "span",
                                                          {
                                                              className:
                                                                  "tab-subtext",
                                                              style: {
                                                                  paddingLeft:
                                                                      "0.2rem"
                                                              }
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
                changeTab: i.a.func,
                isActive: i.a.bool.isRequired,
                index: i.a.number.isRequired,
                className: i.a.string,
                isLinkTo: i.a.string,
                subText: i.a.oneOfType([i.a.object, i.a.string])
            }),
                (y.defaultProps = {
                    isActive: !1,
                    index: 0,
                    className: "",
                    isLinkTo: "",
                    subText: null
                });
            var w = (function(e) {
                function t(e) {
                    _(this, t);
                    var n = g(
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
                    v(t, o.a.Component),
                    b(t, [
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
                                    s = (t.tabsClass,
                                    t.style,
                                    t.segmented,
                                    null),
                                    i = o.a.Children.map(n, function(t, n) {
                                        if (!t) return null;
                                        var a = n === e.state.activeTab;
                                        return (
                                            a && (s = t.props.children),
                                            o.a.cloneElement(t, {
                                                isActive: a,
                                                changeTab: e._changeTab.bind(e),
                                                index: n
                                            })
                                        );
                                    }).filter(function(e) {
                                        return null !== e;
                                    });
                                return (
                                    s || (s = i[0].props.children),
                                    o.a.createElement(
                                        "div",
                                        {className: "mono-list-item"},
                                        o.a.createElement(f.a, {
                                            grid: {
                                                gutter: 16,
                                                xs: 4,
                                                sm: 4,
                                                md: 4,
                                                lg: 4,
                                                xl: 6
                                            },
                                            size: "large",
                                            header: null,
                                            footer: null,
                                            dataSource: i,
                                            renderItem: function(e) {
                                                return o.a.createElement(
                                                    f.a.Item,
                                                    null,
                                                    e
                                                );
                                            }
                                        }),
                                        o.a.createElement(
                                            "div",
                                            {className: c()("tab-content", a)},
                                            s
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (w.propTypes = {
                setting: i.a.string,
                defaultActiveTab: i.a.number,
                segmented: i.a.bool
            }),
                (w.defaultProps = {
                    active: 0,
                    defaultActiveTab: 0,
                    segmented: !0,
                    contentClass: "",
                    style: {}
                }),
                (w = Object(l.connect)(w, {
                    listenTo: function() {
                        return [p.a];
                    },
                    getProps: function() {
                        return {viewSettings: p.a.getState().viewSettings};
                    }
                })),
                (w = Object(h.a)(w));
        },
        1852: function(e, t, n) {
            "use strict";
            var a = n(0),
                o = n.n(a),
                s = n(33),
                i = (n(169), n(48)),
                r = n(24),
                c = n(21),
                l = n(22),
                u = n(39),
                p = n.n(u),
                d = (n(551), n(178)),
                m = n(36),
                h = (n(3), n(17)),
                f = n.n(h),
                b = n(19),
                _ = n(109),
                g = n(54),
                v = n(91),
                y = n(8),
                w = n.n(y),
                A = n(543),
                S = n(103),
                k = n.n(S),
                E = n(13),
                C = n(68),
                D = n(340),
                O = n(10),
                x = (n(552), n(11)),
                T = (n(562), n(2119)),
                N = n(563),
                j = n(2105),
                L = n(389),
                M = n(390),
                I = n(529),
                P = n(1865),
                F = n(40),
                B = (function() {
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
            Object(F.h)();
            var R = (function(e) {
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
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (n.showModal = function(e) {
                            e.preventDefault(), n.setState({visible: !0});
                        }),
                        (n.showModalSend = function(e) {
                            e.preventDefault(), n.setState({visibleSend: !0});
                        }),
                        (n.handleOk = function(e) {
                            console.log(e),
                                n.setState({visible: !1, visibleSend: !1});
                        }),
                        (n.handleCancel = function() {
                            n.setState({visible: !1, visibleSend: !1});
                        }),
                        (n.state = {
                            active: e.location.pathname,
                            accountsListDropdownActive: !1,
                            dropdownActive: !1,
                            dropdownSubmenuActive: !1,
                            visible: !1,
                            visibleSend: !1
                        }),
                        (n.unlisten = null),
                        (n._toggleAccountDropdownMenu = n._toggleAccountDropdownMenu.bind(
                            n
                        )),
                        (n._toggleDropdownMenu = n._toggleDropdownMenu.bind(n)),
                        (n._closeDropdown = n._closeDropdown.bind(n)),
                        (n._closeDropdownSubmenu = n._closeDropdownSubmenu.bind(
                            n
                        )),
                        (n._toggleDropdownSubmenu = n._toggleDropdownSubmenu.bind(
                            n
                        )),
                        (n._closeMenuDropdown = n._closeMenuDropdown.bind(n)),
                        (n._closeAccountsListDropdown = n._closeAccountsListDropdown.bind(
                            n
                        )),
                        (n.onBodyClick = n.onBodyClick.bind(n)),
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
                    })(t, o.a.Component),
                    B(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                var e = this;
                                this.unlisten = this.props.history.listen(
                                    function(t) {
                                        e.unlisten &&
                                            e.state.active !== t.pathname &&
                                            e.setState({active: t.pathname});
                                    }
                                );
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                setTimeout(function() {
                                    k.a.rebuild();
                                }, 1250),
                                    document.body.addEventListener(
                                        "click",
                                        this.onBodyClick,
                                        {capture: !1, passive: !0}
                                    );
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                this.unlisten &&
                                    (this.unlisten(), (this.unlisten = null)),
                                    document.body.removeEventListener(
                                        "click",
                                        this.onBodyClick
                                    );
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    e.myActiveAccounts !==
                                        this.props.myActiveAccounts ||
                                    e.currentAccount !==
                                        this.props.currentAccount ||
                                    e.passwordLogin !==
                                        this.props.passwordLogin ||
                                    e.locked !== this.props.locked ||
                                    e.current_wallet !==
                                        this.props.current_wallet ||
                                    e.lastMarket !== this.props.lastMarket ||
                                    e.starredAccounts !==
                                        this.props.starredAccounts ||
                                    e.currentLocale !==
                                        this.props.currentLocale ||
                                    t.active !== this.state.active ||
                                    t.hiddenAssets !==
                                        this.props.hiddenAssets ||
                                    t.dropdownActive !==
                                        this.state.dropdownActive ||
                                    t.dropdownSubmenuActive !==
                                        this.state.dropdownSubmenuActive ||
                                    t.accountsListDropdownActive !==
                                        this.state.accountsListDropdownActive ||
                                    e.height !== this.props.height ||
                                    e.location.pathname !==
                                        this.props.location.pathname
                                );
                            }
                        },
                        {
                            key: "_showSend",
                            value: function(e) {
                                e.preventDefault(),
                                    this.send_modal && this.send_modal.show(),
                                    this._closeDropdown();
                            }
                        },
                        {
                            key: "_showDeposit",
                            value: function(e) {
                                e.preventDefault(),
                                    this.refs.deposit_modal_new.show(),
                                    this._closeDropdown();
                            }
                        },
                        {
                            key: "_showWithdraw",
                            value: function(e) {
                                e.preventDefault(),
                                    this._closeDropdown(),
                                    this.refs.withdraw_modal_new.show();
                            }
                        },
                        {
                            key: "_triggerMenu",
                            value: function(e) {
                                e.preventDefault(),
                                    p.a.publish("mobile-menu", "toggle");
                            }
                        },
                        {
                            key: "_toggleLock",
                            value: function(e) {
                                e.preventDefault(),
                                    b.a.isLocked()
                                        ? g.a
                                              .unlock()
                                              .then(function() {
                                                  i.a.tryToSetCurrentAccount();
                                              })
                                              .catch(function() {})
                                        : g.a.lock(),
                                    this._closeDropdown();
                            }
                        },
                        {
                            key: "_onNavigate",
                            value: function(e, t) {
                                t.preventDefault(),
                                    "/accounts" == e &&
                                        l.a.changeViewSetting({
                                            dashboardEntry: "accounts"
                                        }),
                                    this.props.history.push(e),
                                    this._closeDropdown();
                            }
                        },
                        {
                            key: "_closeAccountsListDropdown",
                            value: function() {
                                this.state.accountsListDropdownActive &&
                                    this.setState({
                                        accountsListDropdownActive: !1
                                    });
                            }
                        },
                        {
                            key: "_closeMenuDropdown",
                            value: function() {
                                this.state.dropdownActive &&
                                    this.setState({dropdownActive: !1});
                            }
                        },
                        {
                            key: "_closeDropdownSubmenu",
                            value: function() {
                                this.state.dropdownSubmenuActive &&
                                    this.setState({dropdownSubmenuActive: !1});
                            }
                        },
                        {
                            key: "_closeDropdown",
                            value: function() {
                                this._closeMenuDropdown(),
                                    this._closeAccountsListDropdown(),
                                    this._closeDropdownSubmenu();
                            }
                        },
                        {
                            key: "_onGoBack",
                            value: function(e) {
                                e.preventDefault(), window.history.back();
                            }
                        },
                        {
                            key: "_onGoForward",
                            value: function(e) {
                                e.preventDefault(), window.history.forward();
                            }
                        },
                        {
                            key: "_accountClickHandler",
                            value: function(e, t) {
                                if (
                                    (t.preventDefault(),
                                    p.a.publish("account_drop_down", "close"),
                                    -1 !==
                                        this.props.location.pathname.indexOf(
                                            "/account/"
                                        ))
                                ) {
                                    var n = this.props.location.pathname.split(
                                        "/"
                                    );
                                    (n[2] = e),
                                        this.props.history.push(n.join("/"));
                                }
                                e !== this.props.currentAccount &&
                                    (i.a.setCurrentAccount.defer(e),
                                    C.a.addNotification({
                                        message: f.a.translate(
                                            "header.account_notify",
                                            {account: e}
                                        ),
                                        level: "success",
                                        autoDismiss: 2,
                                        position: "br"
                                    }),
                                    this._closeDropdown());
                            }
                        },
                        {
                            key: "_toggleAccountDropdownMenu",
                            value: function() {
                                if (!!!b.a.getWallet()) return !1;
                                this.setState({
                                    accountsListDropdownActive: !this.state
                                        .accountsListDropdownActive
                                });
                            }
                        },
                        {
                            key: "_toggleDropdownSubmenu",
                            value: function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.state
                                                  .dropdownSubmenuActiveItem,
                                    t = arguments[1];
                                t && t.stopPropagation(),
                                    this.setState({
                                        dropdownSubmenuActive: !this.state
                                            .dropdownSubmenuActive,
                                        dropdownSubmenuActiveItem: e
                                    });
                            }
                        },
                        {
                            key: "_toggleDropdownMenu",
                            value: function() {
                                this.setState({
                                    dropdownActive: !this.state.dropdownActive
                                });
                            }
                        },
                        {
                            key: "onBodyClick",
                            value: function(e) {
                                var t = e.target,
                                    n = !1,
                                    a = !1;
                                do {
                                    if (
                                        t.classList &&
                                        t.classList.contains(
                                            "account-dropdown-wrapper"
                                        )
                                    ) {
                                        a = !0;
                                        break;
                                    }
                                    if (
                                        t.classList &&
                                        t.classList.contains(
                                            "menu-dropdown-wrapper"
                                        )
                                    ) {
                                        n = !0;
                                        break;
                                    }
                                } while ((t = t.parentNode));
                                a || this._closeAccountsListDropdown(),
                                    n ||
                                        (this._closeMenuDropdown(),
                                        this._closeDropdownSubmenu());
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.state.active,
                                    n = this.props,
                                    a = n.currentAccount,
                                    s = n.starredAccounts,
                                    i = n.passwordLogin,
                                    c = n.passwordAccount,
                                    l = n.height,
                                    u = r.a.getMyAccounts(),
                                    p = (Math.max(40, l - 67 - 36),
                                    O.ChainStore.getAccount(a)),
                                    d =
                                        !!p &&
                                        (r.a.isMyAccount(p) || (i && a === c));
                                !!p &&
                                    E.Apis.instance() &&
                                    E.Apis.instance().chain_id &&
                                    E.Apis.instance().chain_id.substr(0, 8);
                                if (s.size) {
                                    for (var h = u.length - 1; h >= 0; h--)
                                        s.has(u[h]) || u.splice(h, 1);
                                    s.forEach(function(e) {
                                        -1 === u.indexOf(e.name) &&
                                            u.push(e.name);
                                    });
                                }
                                var f = r.a.getMyAccounts(),
                                    b = (f.length,
                                    f.length && this.props.currentAccount
                                        ? o.a.createElement(
                                              "span",
                                              {
                                                  className: "total-value",
                                                  onClick: this
                                                      ._toggleAccountDropdownMenu
                                              },
                                              o.a.createElement(
                                                  A.a.AccountWrapper,
                                                  {
                                                      hiddenAssets: this.props
                                                          .hiddenAssets,
                                                      accounts: Object(x.List)([
                                                          this.props
                                                              .currentAccount
                                                      ]),
                                                      noTip: !0,
                                                      style: {minHeight: 15}
                                                  }
                                              )
                                          )
                                        : null),
                                    _ = void 0;
                                return (
                                    a &&
                                        ((_ =
                                            a.length > 20
                                                ? a.slice(0, 20) + ".."
                                                : a),
                                        u.indexOf(a) < 0 && d && u.push(a),
                                        u.length >= 1 &&
                                            u
                                                .sort()
                                                .filter(function(e) {
                                                    return e !== a;
                                                })
                                                .map(function(n) {
                                                    return o.a.createElement(
                                                        "li",
                                                        {
                                                            key: n,
                                                            className: w()({
                                                                active:
                                                                    0 ===
                                                                    t
                                                                        .replace(
                                                                            "/account/",
                                                                            ""
                                                                        )
                                                                        .indexOf(
                                                                            n
                                                                        )
                                                            }),
                                                            onClick: e._accountClickHandler.bind(
                                                                e,
                                                                n
                                                            )
                                                        },
                                                        o.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    paddingTop: 0
                                                                },
                                                                className:
                                                                    "table-cell"
                                                            },
                                                            o.a.createElement(
                                                                D.a,
                                                                {
                                                                    style: {
                                                                        position:
                                                                            "relative",
                                                                        top: 4
                                                                    },
                                                                    size: {
                                                                        height: 20,
                                                                        width: 20
                                                                    },
                                                                    account: n
                                                                }
                                                            )
                                                        ),
                                                        o.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "table-cell",
                                                                style: {
                                                                    paddingLeft: 10
                                                                }
                                                            },
                                                            o.a.createElement(
                                                                "a",
                                                                {
                                                                    className:
                                                                        "text lower-case" +
                                                                        (n === _
                                                                            ? " current-account"
                                                                            : "")
                                                                },
                                                                n
                                                            )
                                                        )
                                                    );
                                                })),
                                    o.a.createElement(
                                        L.a,
                                        {className: "mono-profile"},
                                        o.a.createElement(
                                            M.a,
                                            {
                                                span: 24,
                                                className: "mono-bg-light"
                                            },
                                            o.a.createElement(
                                                L.a,
                                                {
                                                    type: "flex",
                                                    justify: "space-around",
                                                    align: "middle",
                                                    className: "mono-banner"
                                                },
                                                o.a.createElement(
                                                    M.a,
                                                    {
                                                        xs: 12,
                                                        sm: 13,
                                                        md: 14,
                                                        lg: 16,
                                                        xl: 16,
                                                        offset: 1
                                                    },
                                                    o.a.createElement(
                                                        L.a,
                                                        null,
                                                        o.a.createElement(
                                                            M.a,
                                                            {
                                                                xs: 4,
                                                                sm: 4,
                                                                md: 2,
                                                                lg: 2,
                                                                xl: 2,
                                                                className:
                                                                    "mono-icon-user"
                                                            },
                                                            o.a.createElement(
                                                                m.a,
                                                                {
                                                                    size: "2x",
                                                                    name:
                                                                        "people",
                                                                    title:
                                                                        "icons.manage_accounts"
                                                                }
                                                            )
                                                        ),
                                                        o.a.createElement(
                                                            M.a,
                                                            {
                                                                xs: 20,
                                                                sm: 20,
                                                                md: 22,
                                                                lg: 22,
                                                                xl: 22,
                                                                style: {
                                                                    float:
                                                                        "right"
                                                                }
                                                            },
                                                            o.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "mono-fbold"
                                                                },
                                                                " ",
                                                                a,
                                                                " "
                                                            ),
                                                            o.a.createElement(
                                                                "br",
                                                                null
                                                            ),
                                                            b
                                                        )
                                                    )
                                                ),
                                                o.a.createElement(
                                                    M.a,
                                                    {
                                                        xs: 10,
                                                        sm: 8,
                                                        md: 4,
                                                        lg: 4,
                                                        xl: 4
                                                    },
                                                    o.a.createElement(
                                                        "span",
                                                        null,
                                                        "Zcom Balance"
                                                    ),
                                                    o.a.createElement(
                                                        "br",
                                                        null
                                                    ),
                                                    o.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "mono-fbold"
                                                        },
                                                        b,
                                                        ".00 Zcom"
                                                    ),
                                                    o.a.createElement(
                                                        "span",
                                                        {
                                                            style: {
                                                                float: "right"
                                                            }
                                                        },
                                                        "0.00 $"
                                                    )
                                                )
                                            )
                                        ),
                                        o.a.createElement(
                                            M.a,
                                            {
                                                span: 24,
                                                className: "mono-btn-hide"
                                            },
                                            o.a.createElement(
                                                L.a,
                                                {
                                                    type: "flex",
                                                    justify: "space-between"
                                                },
                                                o.a.createElement(
                                                    M.a,
                                                    {
                                                        span: 6,
                                                        className:
                                                            "mono-btn-light"
                                                    },
                                                    o.a.createElement(
                                                        j.a,
                                                        {
                                                            to: "/",
                                                            onClick: this
                                                                .showModal
                                                        },
                                                        "Create Account"
                                                    ),
                                                    o.a.createElement(
                                                        I.a,
                                                        {
                                                            title: null,
                                                            footer: null,
                                                            visible: this.state
                                                                .visible,
                                                            onOk: this.handleOk,
                                                            onCancel: this
                                                                .handleCancel
                                                        },
                                                        o.a.createElement(
                                                            N.a,
                                                            null
                                                        )
                                                    )
                                                ),
                                                o.a.createElement(
                                                    M.a,
                                                    {
                                                        span: 6,
                                                        className:
                                                            "mono-btn-light"
                                                    },
                                                    o.a.createElement(
                                                        j.a,
                                                        {
                                                            to: "/",
                                                            onClick: this
                                                                .showModalSend
                                                        },
                                                        "Send"
                                                    ),
                                                    o.a.createElement(
                                                        I.a,
                                                        {
                                                            title: null,
                                                            footer: null,
                                                            visible: this.state
                                                                .visibleSend,
                                                            onOk: this.handleOk,
                                                            onCancel: this
                                                                .handleCancel
                                                        },
                                                        o.a.createElement(P.a, {
                                                            onCloseModal: this.handleCancel.bind(
                                                                this
                                                            )
                                                        })
                                                    )
                                                ),
                                                o.a.createElement(
                                                    M.a,
                                                    {
                                                        span: 6,
                                                        className:
                                                            "mono-btn-light"
                                                    },
                                                    o.a.createElement(
                                                        j.a,
                                                        {
                                                            to:
                                                                "/account/" +
                                                                a +
                                                                "/voting"
                                                        },
                                                        "Voting"
                                                    )
                                                ),
                                                o.a.createElement(
                                                    M.a,
                                                    {
                                                        span: 6,
                                                        className:
                                                            "mono-btn-light"
                                                    },
                                                    o.a.createElement(
                                                        j.a,
                                                        {to: "/settings"},
                                                        "Settings"
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
            (R = Object(s.connect)(R, {
                listenTo: function() {
                    return [r.a, _.a, v.a, c.a, d.a];
                },
                getProps: function() {
                    var e = E.Apis.instance().chain_id;
                    return {
                        backedCoins: d.a.getState().backedCoins,
                        myActiveAccounts: r.a.getState().myActiveAccounts,
                        currentAccount:
                            r.a.getState().currentAccount ||
                            r.a.getState().passwordAccount,
                        passwordAccount: r.a.getState().passwordAccount,
                        locked: _.a.getState().locked,
                        current_wallet: v.a.getState().current_wallet,
                        lastMarket: c.a
                            .getState()
                            .viewSettings.get(
                                "lastMarket" + (e ? "_" + e.substr(0, 8) : "")
                            ),
                        starredAccounts: r.a.getState().starredAccounts,
                        passwordLogin: c.a
                            .getState()
                            .settings.get("passwordLogin"),
                        currentLocale: c.a.getState().settings.get("locale"),
                        hiddenAssets: c.a.getState().hiddenAssets,
                        settings: c.a.getState().settings,
                        locales: c.a.getState().defaults.locale,
                        contacts: r.a.getState().accountContacts
                    };
                }
            })),
                (t.a = Object(T.a)(R));
        },
        1865: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(555),
                    o = n(310),
                    s = n(0),
                    i = n.n(s),
                    r = n(39),
                    c = n.n(r),
                    l = (n(93), n(3)),
                    u = n.n(l),
                    p = n(10),
                    d = n(191),
                    m = n(309),
                    h = n(24),
                    f = n(256),
                    b = n(99),
                    _ = n(27),
                    g = n(143),
                    v = n(337),
                    y = n(48),
                    w = n(15),
                    A = (n(17), n(33)),
                    S = n(8),
                    k = n.n(S),
                    E = n(40),
                    C = n(389),
                    D = n(390),
                    O = n(126),
                    x =
                        Object.assign ||
                        function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var a in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        a
                                    ) && (e[a] = n[a]);
                            }
                            return e;
                        },
                    T = (function() {
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
                function N(e, t, n) {
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
                function j(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                }
                function L(e, t) {
                    if (!e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                }
                function M(e, t) {
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
                var I = (function(t) {
                        function n(e) {
                            j(this, n);
                            var t = L(
                                this,
                                (n.__proto__ || Object.getPrototypeOf(n)).call(
                                    this,
                                    e
                                )
                            );
                            return (
                                (t.onClose = function(e) {
                                    e.preventDefault(),
                                        t.setState({
                                            open: !1,
                                            from_name: "",
                                            to_name: "",
                                            from_account: null,
                                            to_account: null,
                                            orig_account: null,
                                            amount: "",
                                            asset_id: null,
                                            asset: null,
                                            memo: "",
                                            error: null,
                                            knownScammer: null,
                                            propose: !1,
                                            propose_account: "",
                                            feeAsset: null,
                                            fee_asset_id: "1.3.0",
                                            feeAmount: new _.a({amount: 0}),
                                            feeStatus: {},
                                            maxAmount: !1,
                                            hidden: !1
                                        });
                                }),
                                (t.state = t.getInitialState(e)),
                                (t.nestedRef = null),
                                (t.onTrxIncluded = t.onTrxIncluded.bind(t)),
                                (t._updateFee = Object(o.a)(
                                    t._updateFee.bind(t),
                                    250
                                )),
                                (t._checkFeeStatus = t._checkFeeStatus.bind(t)),
                                (t._checkBalance = t._checkBalance.bind(t)),
                                c.a.subscribe(
                                    "transaction_confirm_actions",
                                    function(e, n) {
                                        "close" == n &&
                                            t.setState({hidden: !1});
                                    }
                                ),
                                t
                            );
                        }
                        return (
                            M(n, i.a.Component),
                            T(n, [
                                {
                                    key: "getInitialState",
                                    value: function() {
                                        return {
                                            from_name: "",
                                            to_name: "",
                                            from_account: null,
                                            to_account: null,
                                            orig_account: null,
                                            amount: "",
                                            asset_id: null,
                                            asset: null,
                                            memo: "",
                                            error: null,
                                            knownScammer: null,
                                            propose: !1,
                                            propose_account: "",
                                            feeAsset: null,
                                            fee_asset_id: "1.3.0",
                                            feeAmount: new _.a({amount: 0}),
                                            feeStatus: {},
                                            maxAmount: !1,
                                            hidden: !1
                                        };
                                    }
                                },
                                {
                                    key: "show",
                                    value: function() {
                                        var e = this;
                                        this.setState(
                                            {open: !0, hidden: !1},
                                            function() {
                                                c.a.publish(e.props.id, "open"),
                                                    e._initForm();
                                            }
                                        );
                                    }
                                },
                                {
                                    key: "onSubmit",
                                    value: function(t) {
                                        var n = this;
                                        t.preventDefault(),
                                            this.setState({error: null});
                                        var a = this.state.asset,
                                            o = this.state.amount,
                                            s = new _.a({
                                                real: o,
                                                asset_id: a.get("id"),
                                                precision: a.get("precision")
                                            });
                                        this.setState({hidden: !0}),
                                            y.a
                                                .transfer(
                                                    this.state.from_account.get(
                                                        "id"
                                                    ),
                                                    this.state.to_account.get(
                                                        "id"
                                                    ),
                                                    s.getAmount(),
                                                    a.get("id"),
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
                                                    n.onClose(),
                                                        b.a.unlisten(
                                                            n.onTrxIncluded
                                                        ),
                                                        b.a.listen(
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
                                    key: "_initForm",
                                    value: function() {
                                        this.props.to_name !=
                                            this.props.from_name &&
                                            this.setState({
                                                to_name: this.props.to_name,
                                                to_account: p.ChainStore.getAccount(
                                                    this.props.to_name
                                                )
                                            }),
                                            this.props.from_name &&
                                                this.setState({
                                                    from_name: this.props
                                                        .from_name,
                                                    from_account: p.ChainStore.getAccount(
                                                        this.props.from_name
                                                    )
                                                });
                                        var e = this.props.currentAccount;
                                        if (
                                            (this.state.from_name ||
                                                this.setState({from_name: e}),
                                            this.props.asset_id &&
                                                this.state.asset_id !==
                                                    this.props.asset_id)
                                        ) {
                                            var t = p.ChainStore.getAsset(
                                                this.props.asset_id
                                            );
                                            t &&
                                                this.setState({
                                                    asset_id: this.props
                                                        .asset_id,
                                                    asset: t
                                                });
                                        }
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
                                            var o = p.ChainStore.getAsset(a[0]);
                                            1 !== n.length &&
                                                this.onAmountChanged({
                                                    amount: t.amount,
                                                    asset: o
                                                }),
                                                a[0] !==
                                                    this.state.fee_asset_id &&
                                                    o &&
                                                    this.state.fee_asset_id !==
                                                        a[0] &&
                                                    this.setState({
                                                        feeAsset: o,
                                                        fee_asset_id: a[0]
                                                    });
                                        }
                                        return (
                                            t.open &&
                                                !this.state.open &&
                                                this._checkFeeStatus(t),
                                            !(!t.open && !this.state.open)
                                        );
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
                                                    from_name: e.from_name,
                                                    from_account: p.ChainStore.getAccount(
                                                        e.from_name
                                                    ),
                                                    to_name: e.to_name
                                                        ? e.to_name
                                                        : "",
                                                    to_account: e.to_name
                                                        ? p.ChainStore.getAccount(
                                                              e.to_name
                                                          )
                                                        : null,
                                                    feeStatus: {},
                                                    fee_asset_id: "1.3.0",
                                                    feeAmount: new _.a({
                                                        amount: 0
                                                    })
                                                },
                                                function() {
                                                    t._updateFee(),
                                                        t._checkFeeStatus();
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
                                            o = e.asset;
                                        if (o && a) {
                                            this._updateFee();
                                            var s = a.getIn([
                                                    "balances",
                                                    o.get("id")
                                                ]),
                                                i = a.getIn([
                                                    "balances",
                                                    t.asset_id
                                                ]);
                                            if (o && a) {
                                                if (!s)
                                                    return this.setState({
                                                        balanceError: !0
                                                    });
                                                var r = p.ChainStore.getObject(
                                                        s
                                                    ),
                                                    c = i
                                                        ? p.ChainStore.getObject(
                                                              i
                                                          )
                                                        : null;
                                                if (
                                                    ((c &&
                                                        0 !==
                                                            c.get("balance")) ||
                                                        this.setState(
                                                            {
                                                                fee_asset_id:
                                                                    "1.3.0"
                                                            },
                                                            this._updateFee
                                                        ),
                                                    r && t)
                                                ) {
                                                    if (!n)
                                                        return this.setState({
                                                            balanceError: !1
                                                        });
                                                    var l = Object(g.a)(
                                                        n,
                                                        o,
                                                        t,
                                                        r
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
                                                    : this.state,
                                            n = t.from_account,
                                            a = t.open;
                                        if (n && a) {
                                            var o = Object.keys(
                                                    n.get("balances").toJS()
                                                ).sort(w.a.sortID),
                                                s = {},
                                                i = [];
                                            o.forEach(function(t) {
                                                i.push(
                                                    Object(g.b)({
                                                        accountID: n.get("id"),
                                                        feeID: t,
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
                                                Promise.all(i)
                                                    .then(function(t) {
                                                        o.forEach(function(
                                                            e,
                                                            n
                                                        ) {
                                                            s[e] = t[n];
                                                        }),
                                                            w.a.are_equal_shallow(
                                                                e.state
                                                                    .feeStatus,
                                                                s
                                                            ) ||
                                                                e.setState({
                                                                    feeStatus: s
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
                                    key: "_setTotal",
                                    value: function(e, t) {
                                        var n = this.state.feeAmount,
                                            a = p.ChainStore.getObject(t),
                                            o = p.ChainStore.getObject(e),
                                            s = new _.a({
                                                amount: a.get("balance"),
                                                asset_id: o.get("id"),
                                                precision: o.get("precision")
                                            });
                                        a &&
                                            (n.asset_id === s.asset_id &&
                                                s.minus(n),
                                            this.setState(
                                                {
                                                    maxAmount: !0,
                                                    amount: s.getAmount({
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
                                            o = [],
                                            s = [];
                                        if (!n || !n.get("balances") || a)
                                            return {
                                                asset_types: o,
                                                fee_asset_types: s
                                            };
                                        var i = e.from_account
                                            .get("balances")
                                            .toJS();
                                        for (var r in ((o = Object.keys(i).sort(
                                            w.a.sortID
                                        )),
                                        (s = Object.keys(i).sort(w.a.sortID)),
                                        i)) {
                                            var c = p.ChainStore.getObject(
                                                i[r]
                                            );
                                            c &&
                                                0 === c.get("balance") &&
                                                (o.splice(o.indexOf(r), 1),
                                                -1 !== s.indexOf(r) &&
                                                    s.splice(s.indexOf(r), 1));
                                        }
                                        return {
                                            asset_types: o,
                                            fee_asset_types: (s = s.filter(
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
                                    key: "_updateFee",
                                    value: function() {
                                        var e = this,
                                            t =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : this.state;
                                        if (t.open) {
                                            var n = t.fee_asset_id,
                                                a = t.from_account,
                                                o = t.asset_id,
                                                s = this._getAvailableAssets(t)
                                                    .fee_asset_types;
                                            if (
                                                (1 === s.length &&
                                                    s[0] !== n &&
                                                    (n = s[0]),
                                                !a)
                                            )
                                                return null;
                                            Object(g.b)({
                                                accountID: a.get("id"),
                                                feeID: n,
                                                options: ["price_per_kbyte"],
                                                data: {
                                                    type: "memo",
                                                    content: t.memo
                                                }
                                            }).then(function(t) {
                                                var n = t.fee,
                                                    s = t.hasBalance,
                                                    i = t.hasPoolBalance;
                                                return Object(g.d)(a, n).then(
                                                    function(t) {
                                                        return t
                                                            ? e.setState(
                                                                  {
                                                                      fee_asset_id: o
                                                                  },
                                                                  e._updateFee
                                                              )
                                                            : e.setState({
                                                                  feeAmount: n,
                                                                  fee_asset_id:
                                                                      n.asset_id,
                                                                  hasBalance: s,
                                                                  hasPoolBalance: i,
                                                                  error:
                                                                      !s || !i
                                                              });
                                                    }
                                                );
                                            });
                                        }
                                    }
                                },
                                {
                                    key: "setNestedRef",
                                    value: function(e) {
                                        this.nestedRef = e;
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
                                                    error: null,
                                                    maxAmount: !1
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
                                        var t = this._getAvailableAssets()
                                                .asset_types,
                                            n = this.state,
                                            a = n.from_account,
                                            o = n.from_error,
                                            s = n.maxAmount;
                                        if (a && a.get("balances") && !o && s) {
                                            var i = a.get("balances").toJS(),
                                                r = t[0];
                                            this._setTotal(r, i[r]);
                                        }
                                        this.setState(
                                            {memo: e.target.value},
                                            this._updateFee
                                        );
                                    }
                                },
                                {
                                    key: "onTrxIncluded",
                                    value: function(e) {
                                        e.included && e.broadcasted_transaction
                                            ? (b.a.unlisten(this.onTrxIncluded),
                                              b.a.reset())
                                            : e.closed &&
                                              (b.a.unlisten(this.onTrxIncluded),
                                              b.a.reset());
                                    }
                                },
                                {
                                    key: "onPropose",
                                    value: function(e) {
                                        var t = this.state,
                                            n = t.propose,
                                            a = t.orig_account,
                                            o = t.to_account,
                                            s = t.to_name,
                                            i = t.from_account,
                                            r = t.from_name;
                                        e.preventDefault(),
                                            o &&
                                                s &&
                                                s != r &&
                                                (n ||
                                                    a ||
                                                    this.setState({
                                                        orig_account: i
                                                    }),
                                                n &&
                                                    ((o = a),
                                                    (s = a.get("name"))),
                                                (n = !n),
                                                this.setState({
                                                    propose: n,
                                                    propose_account: null,
                                                    from_account: o,
                                                    from_name: s,
                                                    to_account: i,
                                                    to_name: r
                                                }));
                                    }
                                },
                                {
                                    key: "onProposeAccount",
                                    value: function(e) {
                                        this.setState({propose_account: e});
                                    }
                                },
                                {
                                    key: "render",
                                    value: function() {
                                        var e,
                                            t,
                                            n = this.state,
                                            o = n.propose,
                                            s = n.from_account,
                                            r = n.to_account,
                                            c = n.asset,
                                            l = n.asset_id,
                                            b = n.propose_account,
                                            _ = n.feeAmount,
                                            g = n.amount,
                                            y = (n.error, n.to_name),
                                            w = n.from_name,
                                            A = n.memo,
                                            S = n.feeAsset,
                                            x = n.fee_asset_id,
                                            T = n.balanceError,
                                            j = (n.hidden,
                                            h.a.isMyAccount(s) ||
                                                w ===
                                                    this.props.passwordAccount),
                                            L = !(!s || j || o),
                                            M = this._getAvailableAssets(),
                                            I = M.asset_types,
                                            P = M.fee_asset_types,
                                            F = null,
                                            B = null,
                                            R = this.state.feeAmount.getAmount({
                                                real: !0
                                            });
                                        if (s && s.get("balances") && !L) {
                                            var z = s.get("balances").toJS(),
                                                W = this.state.balanceError
                                                    ? "has-error"
                                                    : "";
                                            if (
                                                (1 === I.length &&
                                                    (c = p.ChainStore.getAsset(
                                                        I[0]
                                                    )),
                                                I.length > 0)
                                            ) {
                                                var J = c ? c.get("id") : I[0],
                                                    U = S
                                                        ? S.get("id")
                                                        : "1.3.0";
                                                (F = i.a.createElement(
                                                    "span",
                                                    null,
                                                    i.a.createElement(u.a, {
                                                        component: "span",
                                                        content:
                                                            "transfer.available"
                                                    }),
                                                    ":",
                                                    " ",
                                                    i.a.createElement(
                                                        "span",
                                                        {
                                                            className: W,
                                                            style: {
                                                                borderBottom:
                                                                    "#A09F9F 1px dotted",
                                                                cursor:
                                                                    "pointer"
                                                            },
                                                            onClick: this._setTotal.bind(
                                                                this,
                                                                J,
                                                                z[J],
                                                                R,
                                                                U
                                                            )
                                                        },
                                                        i.a.createElement(v.a, {
                                                            balance: z[J]
                                                        })
                                                    )
                                                )),
                                                    U == J &&
                                                        this.state
                                                            .balanceError &&
                                                        (B = i.a.createElement(
                                                            "span",
                                                            null,
                                                            i.a.createElement(
                                                                "span",
                                                                {className: W},
                                                                i.a.createElement(
                                                                    u.a,
                                                                    {
                                                                        content:
                                                                            "transfer.errors.insufficient"
                                                                    }
                                                                )
                                                            )
                                                        ));
                                            } else
                                                (F = i.a.createElement(
                                                    "span",
                                                    null,
                                                    i.a.createElement(
                                                        "span",
                                                        {className: W},
                                                        i.a.createElement(u.a, {
                                                            content:
                                                                "transfer.errors.noFunds"
                                                        })
                                                    )
                                                )),
                                                    (B = i.a.createElement(
                                                        "span",
                                                        null,
                                                        i.a.createElement(
                                                            "span",
                                                            {className: W},
                                                            i.a.createElement(
                                                                u.a,
                                                                {
                                                                    content:
                                                                        "transfer.errors.noFunds"
                                                                }
                                                            )
                                                        )
                                                    ));
                                        }
                                        var V = o && !b,
                                            q = parseFloat(
                                                String.prototype.replace.call(
                                                    g,
                                                    /,/g,
                                                    ""
                                                )
                                            ),
                                            H = q && !Object(a.a)(q),
                                            G =
                                                !s ||
                                                !H ||
                                                !c ||
                                                L ||
                                                V ||
                                                T ||
                                                (!h.a.isMyAccount(s) && !o),
                                            Z = this.props.tabIndex;
                                        return i.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block vertical no-overflow "
                                            },
                                            i.a.createElement(
                                                "div",
                                                {
                                                    className: "content-block",
                                                    style: {
                                                        textAlign: "center",
                                                        textTransform: "none"
                                                    }
                                                },
                                                o
                                                    ? i.a.createElement(
                                                          "div",
                                                          {
                                                              style: {
                                                                  fontSize:
                                                                      "1.3rem",
                                                                  fontFamily:
                                                                      "Roboto-Medium, arial, sans-serif"
                                                              }
                                                          },
                                                          i.a.createElement(
                                                              u.a,
                                                              {
                                                                  unsafe: !0,
                                                                  content:
                                                                      "modal.send.header_propose",
                                                                  with: {
                                                                      fromName: w
                                                                  }
                                                              }
                                                          )
                                                      )
                                                    : i.a.createElement(
                                                          "div",
                                                          {
                                                              style: {
                                                                  fontSize:
                                                                      "1.3rem",
                                                                  fontFamily:
                                                                      "Roboto-Medium, arial, sans-serif",
                                                                  color: "#333"
                                                              }
                                                          },
                                                          i.a.createElement(
                                                              u.a,
                                                              {
                                                                  unsafe: !0,
                                                                  content:
                                                                      "modal.send.header",
                                                                  with: {
                                                                      fromName: w
                                                                  },
                                                                  style: {
                                                                      color:
                                                                          "#003d65"
                                                                  }
                                                              }
                                                          )
                                                      ),
                                                i.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            marginTop: 10,
                                                            fontSize: "0.7rem",
                                                            marginLeft: "0",
                                                            marginRight: "0",
                                                            color: "#b3b3b3"
                                                        }
                                                    },
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement(u.a, {
                                                            content:
                                                                "transfer.header_subheader",
                                                            wallet_name: Object(
                                                                E.l
                                                            )()
                                                        })
                                                    )
                                                )
                                            ),
                                            i.a.createElement(
                                                "form",
                                                {noValidate: !0},
                                                i.a.createElement(
                                                    "div",
                                                    null,
                                                    i.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "content-block mono-bdbt"
                                                        },
                                                        i.a.createElement(f.a, {
                                                            label:
                                                                "transfer.to",
                                                            accountName: y,
                                                            account: r,
                                                            onChange: this.toChanged.bind(
                                                                this
                                                            ),
                                                            onAccountChanged: this.onToAccountChanged.bind(
                                                                this
                                                            ),
                                                            size: 60,
                                                            typeahead: !0,
                                                            tabIndex: Z++,
                                                            hideImage: !0
                                                        })
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "content-block transfer-input "
                                                        },
                                                        i.a.createElement(m.a, {
                                                            label:
                                                                "transfer.amount",
                                                            amount: g,
                                                            onChange: this.onAmountChanged.bind(
                                                                this
                                                            ),
                                                            asset:
                                                                I.length > 0 &&
                                                                c
                                                                    ? c.get(
                                                                          "id"
                                                                      )
                                                                    : l || I[0],
                                                            assets: I,
                                                            display_balance: F,
                                                            tabIndex: Z++
                                                        })
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "content-block transfer-input mono-bdbt"
                                                        },
                                                        A && A.length
                                                            ? i.a.createElement(
                                                                  "label",
                                                                  {
                                                                      className:
                                                                          "right-label"
                                                                  },
                                                                  A.length
                                                              )
                                                            : null,
                                                        i.a.createElement(u.a, {
                                                            className:
                                                                "left-label tooltip",
                                                            component: "label",
                                                            content:
                                                                "transfer.memo",
                                                            "data-place": "top"
                                                        }),
                                                        i.a.createElement(
                                                            "input",
                                                            {
                                                                type: "text",
                                                                value: A,
                                                                placeholder:
                                                                    "Textbox",
                                                                tabIndex: Z++,
                                                                onChange: this.onMemoChanged.bind(
                                                                    this
                                                                )
                                                            }
                                                        ),
                                                        this.state.propose
                                                            ? i.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "error-area",
                                                                      style: {
                                                                          position:
                                                                              "absolute"
                                                                      }
                                                                  },
                                                                  i.a.createElement(
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
                                                    i.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "content-block transfer-input "
                                                        },
                                                        i.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "no-margin no-padding"
                                                            },
                                                            i.a.createElement(
                                                                "div",
                                                                {
                                                                    id:
                                                                        "txFeeSelector",
                                                                    className:
                                                                        "small-12"
                                                                },
                                                                i.a.createElement(
                                                                    m.a,
                                                                    {
                                                                        label:
                                                                            "transfer.fee",
                                                                        disabled: !0,
                                                                        amount: R,
                                                                        onChange: this.onFeeChanged.bind(
                                                                            this
                                                                        ),
                                                                        asset:
                                                                            P.length &&
                                                                            _
                                                                                ? _.asset_id
                                                                                : 1 ===
                                                                                  P.length
                                                                                    ? P[0]
                                                                                    : x ||
                                                                                      P[0],
                                                                        assets: P,
                                                                        display_balance: B,
                                                                        tabIndex: Z++,
                                                                        error:
                                                                            !1 ===
                                                                            this
                                                                                .state
                                                                                .hasPoolBalance
                                                                                ? "transfer.errors.insufficient"
                                                                                : null,
                                                                        scroll_length: 2
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    o
                                                        ? i.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "content-block transfer-input"
                                                              },
                                                              i.a.createElement(
                                                                  "label",
                                                                  {
                                                                      className:
                                                                          "left-label"
                                                                  },
                                                                  i.a.createElement(
                                                                      u.a,
                                                                      {
                                                                          content:
                                                                              "account.propose_from"
                                                                      }
                                                                  )
                                                              ),
                                                              i.a.createElement(
                                                                  d.a,
                                                                  {
                                                                      account_names: h.a.getMyAccounts(),
                                                                      onChange: this.onProposeAccount.bind(
                                                                          this
                                                                      ),
                                                                      tabIndex: Z++
                                                                  }
                                                              )
                                                          )
                                                        : null,
                                                    i.a.createElement(
                                                        C.a,
                                                        {
                                                            type: "flex",
                                                            justify:
                                                                "space-between"
                                                        },
                                                        i.a.createElement(
                                                            D.a,
                                                            {span: 11},
                                                            i.a.createElement(
                                                                O.a,
                                                                {
                                                                    className: k()(
                                                                        "button hollow primary mono-btn-vt "
                                                                    ),
                                                                    tabIndex: Z++,
                                                                    onClick: this
                                                                        .props
                                                                        .onCloseModal
                                                                },
                                                                i.a.createElement(
                                                                    u.a,
                                                                    {
                                                                        component:
                                                                            "span",
                                                                        content:
                                                                            "transfer.cancel"
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            D.a,
                                                            {span: 11},
                                                            o
                                                                ? i.a.createElement(
                                                                      O.a,
                                                                      (N(
                                                                          (e = {
                                                                              type:
                                                                                  "primary",
                                                                              className: k()(
                                                                                  " mono-btn-vt",
                                                                                  {
                                                                                      disabled: G
                                                                                  }
                                                                              )
                                                                          }),
                                                                          "type",
                                                                          "submit"
                                                                      ),
                                                                      N(
                                                                          e,
                                                                          "value",
                                                                          "Submit"
                                                                      ),
                                                                      N(
                                                                          e,
                                                                          "onClick",
                                                                          G
                                                                              ? null
                                                                              : this.onSubmit.bind(
                                                                                    this
                                                                                )
                                                                      ),
                                                                      N(
                                                                          e,
                                                                          "tabIndex",
                                                                          Z++
                                                                      ),
                                                                      e),
                                                                      i.a.createElement(
                                                                          u.a,
                                                                          {
                                                                              component:
                                                                                  "span",
                                                                              content:
                                                                                  "propose"
                                                                          }
                                                                      )
                                                                  )
                                                                : i.a.createElement(
                                                                      O.a,
                                                                      (N(
                                                                          (t = {
                                                                              type:
                                                                                  "primary",
                                                                              className: k()(
                                                                                  "  mono-btn-vt",
                                                                                  {
                                                                                      disabled: G
                                                                                  }
                                                                              )
                                                                          }),
                                                                          "type",
                                                                          "submit"
                                                                      ),
                                                                      N(
                                                                          t,
                                                                          "value",
                                                                          "Submit"
                                                                      ),
                                                                      N(
                                                                          t,
                                                                          "onClick",
                                                                          G
                                                                              ? null
                                                                              : this.onSubmit.bind(
                                                                                    this
                                                                                )
                                                                      ),
                                                                      N(
                                                                          t,
                                                                          "tabIndex",
                                                                          Z++
                                                                      ),
                                                                      t),
                                                                      i.a.createElement(
                                                                          u.a,
                                                                          {
                                                                              component:
                                                                                  "span",
                                                                              content:
                                                                                  "transfer.send"
                                                                          }
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
                            n
                        );
                    })(),
                    P = (function(e) {
                        function t() {
                            return (
                                j(this, t),
                                L(
                                    this,
                                    (
                                        t.__proto__ || Object.getPrototypeOf(t)
                                    ).apply(this, arguments)
                                )
                            );
                        }
                        return (
                            M(t, i.a.Component),
                            T(t, [
                                {
                                    key: "render",
                                    value: function() {
                                        return i.a.createElement(
                                            I,
                                            x({}, this.props, {
                                                ref: this.props.refCallback
                                            })
                                        );
                                    }
                                }
                            ]),
                            t
                        );
                    })();
                (P = Object(A.connect)(P, {
                    listenTo: function() {
                        return [h.a];
                    },
                    getProps: function(e) {
                        return {
                            currentAccount: h.a.getState().currentAccount,
                            passwordAccount: h.a.getState().passwordAccount,
                            tabIndex: e.tabIndex || 0
                        };
                    }
                })),
                    (t.a = P);
            }.call(this, n(118).Buffer));
        }
    }
]);
//# sourceMappingURL=asset~dashboard~dashboard-accounts~explorer.js.map
