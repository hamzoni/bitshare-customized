(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        1797: function(e, t, n) {
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
                r = n.n(s),
                c = n(7),
                i = n.n(c),
                l = n(32),
                u = n(21),
                p = n(20),
                m = n(16),
                d = n.n(m),
                h = n(2101),
                f = (n(1841), n(732)),
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
            function g(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function _(e, t) {
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
                        g(this, t),
                        _(
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
                                    r = e.className,
                                    c = e.updatedTab,
                                    l = e.disabled,
                                    u = e.subText,
                                    p = i()({"is-active": t}, r);
                                return (
                                    "string" == typeof s &&
                                        s.indexOf(".") > 0 &&
                                        (s = d.a.translate(s)),
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
                                                  c ? "*" : "",
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
                                                      c ? "*" : ""
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
                changeTab: r.a.func,
                isActive: r.a.bool.isRequired,
                index: r.a.number.isRequired,
                className: r.a.string,
                isLinkTo: r.a.string,
                subText: r.a.oneOfType([r.a.object, r.a.string])
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
                    g(this, t);
                    var n = _(
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
                                    r = o.a.Children.map(n, function(t, n) {
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
                                    s || (s = r[0].props.children),
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
                                            dataSource: r,
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
                                            {className: i()("tab-content", a)},
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
                setting: r.a.string,
                defaultActiveTab: r.a.number,
                segmented: r.a.bool
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
        1841: function(e, t, n) {
            "use strict";
            var a = n(0),
                o = n.n(a),
                s = n(32),
                r = n(258),
                c = n.n(r),
                i = n(45),
                l = n(25),
                u = n(20),
                p = n(21),
                m = n(36),
                d = n.n(m),
                h = (n(535), n(177)),
                f = n(34),
                b = n(3),
                g = n.n(b),
                _ = n(16),
                v = n.n(_),
                y = n(18),
                w = n(106),
                E = n(60),
                k = n(90),
                A = n(7),
                S = n.n(A),
                C = n(527),
                O = n(102),
                D = n.n(O),
                x = n(13),
                N = n(66),
                j = n(336),
                T = n(10),
                L = (n(536), n(11)),
                M = (n(546), n(2101)),
                P = n(2086),
                I = n(33),
                F = n(378),
                B = n(178),
                R = (n(550), n(551)),
                W = n(40),
                z = (function() {
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
            Object(W.h)();
            var J = function(e) {
                    var t = e.flag,
                        n = e.width,
                        a = void 0 === n ? 50 : n,
                        s = e.height,
                        r = void 0 === s ? 50 : s;
                    return o.a.createElement("img", {
                        height: r,
                        width: a,
                        src: "/language-dropdown/" + t.toUpperCase() + ".png"
                    });
                },
                U = (function(e) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (n.state = {
                                step: 1,
                                locales: u.a.getState().defaults.locale,
                                currentLocale: u.a
                                    .getState()
                                    .settings.get("locale")
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
                        })(t, o.a.Component),
                        z(t, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    var e = this;
                                    Object(F.a)(function(t) {
                                        e.setState({incognito: t});
                                    });
                                }
                            },
                            {
                                key: "onSelect",
                                value: function(e) {
                                    this.props.history.push(
                                        "/create-account/" + e
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = n(16),
                                        a = o.a.createElement(
                                            c.a,
                                            null,
                                            o.a.createElement(
                                                c.a.Button,
                                                {
                                                    title: "",
                                                    style: {width: "64px"}
                                                },
                                                o.a.createElement(
                                                    "a",
                                                    {
                                                        style: {
                                                            padding: "1rem",
                                                            border: "none"
                                                        },
                                                        className:
                                                            "button arrow-down"
                                                    },
                                                    o.a.createElement(J, {
                                                        flag: this.state
                                                            .currentLocale
                                                    })
                                                )
                                            ),
                                            o.a.createElement(
                                                c.a.Content,
                                                null,
                                                o.a.createElement(
                                                    "ul",
                                                    {
                                                        className:
                                                            "no-first-element-top-border"
                                                    },
                                                    this.state.locales.map(
                                                        function(t) {
                                                            return o.a.createElement(
                                                                "li",
                                                                {key: t},
                                                                o.a.createElement(
                                                                    "a",
                                                                    {
                                                                        onClick: function(
                                                                            n
                                                                        ) {
                                                                            n.preventDefault(),
                                                                                B.a.switchLocale(
                                                                                    t
                                                                                ),
                                                                                e.setState(
                                                                                    {
                                                                                        currentLocale: t
                                                                                    }
                                                                                );
                                                                        }
                                                                    },
                                                                    o.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "table-cell"
                                                                        },
                                                                        o.a.createElement(
                                                                            J,
                                                                            {
                                                                                width:
                                                                                    "20",
                                                                                height:
                                                                                    "20",
                                                                                flag: t
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
                                                                            g.a,
                                                                            {
                                                                                content:
                                                                                    "languages." +
                                                                                    t
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            );
                                                        }
                                                    )
                                                )
                                            )
                                        );
                                    return o.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-block align-center",
                                            id: "accountForm"
                                        },
                                        o.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block shrink vertical"
                                            },
                                            o.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-content shrink account-creation mono-no-border"
                                                },
                                                o.a.createElement(
                                                    "div",
                                                    null,
                                                    o.a.createElement(g.a, {
                                                        content:
                                                            "header.create_account",
                                                        component: "h4",
                                                        className: "align-left"
                                                    })
                                                ),
                                                o.a.createElement(
                                                    "div",
                                                    null,
                                                    o.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "shrink text-center"
                                                        },
                                                        o.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grp-menu-item overflow-visible account-drop-down mono-menu-country"
                                                            },
                                                            o.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grp-menu-item overflow-visible",
                                                                    "data-intro": t.translate(
                                                                        "walkthrough.language_flag"
                                                                    )
                                                                },
                                                                o.a.createElement(
                                                                    g.a,
                                                                    {
                                                                        unsafe: !0,
                                                                        content:
                                                                            "account.intro_text_1",
                                                                        component:
                                                                            "p",
                                                                        style: {
                                                                            float:
                                                                                "left",
                                                                            color:
                                                                                "#333"
                                                                        }
                                                                    }
                                                                ),
                                                                a
                                                            )
                                                        )
                                                    )
                                                ),
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block account-login-options"
                                                    },
                                                    o.a.createElement(
                                                        P.a,
                                                        {
                                                            id:
                                                                "account_login_button",
                                                            to:
                                                                "/create-account/password",
                                                            className:
                                                                "button primary mono-btn-pw",
                                                            "data-intro": t.translate(
                                                                "walkthrough.create_cloud_wallet"
                                                            )
                                                        },
                                                        o.a.createElement(g.a, {
                                                            content:
                                                                "header.create_account"
                                                        })
                                                    ),
                                                    o.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "button hollow primary mono-btn-pw",
                                                            onClick: function() {
                                                                p.a.changeSetting.defer(
                                                                    {
                                                                        setting:
                                                                            "passwordLogin",
                                                                        value: !0
                                                                    }
                                                                ),
                                                                    E.a
                                                                        .unlock()
                                                                        .catch(
                                                                            function() {}
                                                                        );
                                                            }
                                                        },
                                                        o.a.createElement(g.a, {
                                                            content:
                                                                "header.unlock_short"
                                                        })
                                                    )
                                                ),
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "additional-account-options"
                                                    },
                                                    o.a.createElement(
                                                        "h5",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "center"
                                                            }
                                                        },
                                                        o.a.createElement(I.a, {
                                                            string:
                                                                "account.optional.formatter",
                                                            keys: [
                                                                {
                                                                    type:
                                                                        "link",
                                                                    value:
                                                                        "/wallet/backup/restore",
                                                                    translation:
                                                                        "account.optional.restore_link",
                                                                    dataIntro: t.translate(
                                                                        "walkthrough.restore_account"
                                                                    ),
                                                                    arg:
                                                                        "restore_link"
                                                                },
                                                                {
                                                                    type:
                                                                        "link",
                                                                    value:
                                                                        "/create-account/wallet",
                                                                    translation:
                                                                        "account.optional.restore_form",
                                                                    dataIntro: t.translate(
                                                                        "walkthrough.create_local_wallet"
                                                                    ),
                                                                    arg:
                                                                        "restore_form"
                                                                }
                                                            ]
                                                        })
                                                    )
                                                ),
                                                o.a.createElement(R.a, null)
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                V = Object(s.connect)(U, {
                    listenTo: function() {
                        return [l.a];
                    },
                    getProps: function() {
                        return {
                            currentAccount:
                                l.a.getState().currentAccount ||
                                l.a.getState().passwordAccount
                        };
                    }
                }),
                q = n(547),
                H = n(548),
                G = n(731),
                Z = n(1848),
                $ = (function() {
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
            Object(W.h)();
            var K = (function(e) {
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
                    $(t, [
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
                                    D.a.rebuild();
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
                                    d.a.publish("mobile-menu", "toggle");
                            }
                        },
                        {
                            key: "_toggleLock",
                            value: function(e) {
                                e.preventDefault(),
                                    y.a.isLocked()
                                        ? E.a
                                              .unlock()
                                              .then(function() {
                                                  i.a.tryToSetCurrentAccount();
                                              })
                                              .catch(function() {})
                                        : E.a.lock(),
                                    this._closeDropdown();
                            }
                        },
                        {
                            key: "_onNavigate",
                            value: function(e, t) {
                                t.preventDefault(),
                                    "/accounts" == e &&
                                        p.a.changeViewSetting({
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
                                    d.a.publish("account_drop_down", "close"),
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
                                    N.a.addNotification({
                                        message: v.a.translate(
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
                                if (!!!y.a.getWallet()) return !1;
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
                                    r = n.passwordLogin,
                                    c = n.passwordAccount,
                                    i = n.height,
                                    u = l.a.getMyAccounts(),
                                    p = (Math.max(40, i - 67 - 36),
                                    T.ChainStore.getAccount(a)),
                                    m =
                                        !!p &&
                                        (l.a.isMyAccount(p) || (r && a === c));
                                !!p &&
                                    x.Apis.instance() &&
                                    x.Apis.instance().chain_id &&
                                    x.Apis.instance().chain_id.substr(0, 8);
                                if (s.size) {
                                    for (var d = u.length - 1; d >= 0; d--)
                                        s.has(u[d]) || u.splice(d, 1);
                                    s.forEach(function(e) {
                                        -1 === u.indexOf(e.name) &&
                                            u.push(e.name);
                                    });
                                }
                                var h = l.a.getMyAccounts(),
                                    b = (h.length,
                                    h.length && this.props.currentAccount
                                        ? o.a.createElement(
                                              "span",
                                              {
                                                  className: "total-value",
                                                  onClick: this
                                                      ._toggleAccountDropdownMenu
                                              },
                                              o.a.createElement(
                                                  C.a.AccountWrapper,
                                                  {
                                                      hiddenAssets: this.props
                                                          .hiddenAssets,
                                                      accounts: Object(L.List)([
                                                          this.props
                                                              .currentAccount
                                                      ]),
                                                      noTip: !0,
                                                      style: {minHeight: 15}
                                                  }
                                              )
                                          )
                                        : null),
                                    g = void 0;
                                return (
                                    a &&
                                        ((g =
                                            a.length > 20
                                                ? a.slice(0, 20) + ".."
                                                : a),
                                        u.indexOf(a) < 0 && m && u.push(a),
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
                                                            className: S()({
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
                                                                j.a,
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
                                                                        (n === g
                                                                            ? " current-account"
                                                                            : "")
                                                                },
                                                                n
                                                            )
                                                        )
                                                    );
                                                })),
                                    o.a.createElement(
                                        q.a,
                                        {className: "mono-profile"},
                                        o.a.createElement(
                                            H.a,
                                            {
                                                span: 24,
                                                className: "mono-bg-light"
                                            },
                                            o.a.createElement(
                                                q.a,
                                                {
                                                    type: "flex",
                                                    justify: "space-around",
                                                    align: "middle",
                                                    className: "mono-banner"
                                                },
                                                o.a.createElement(
                                                    H.a,
                                                    {
                                                        xs: 12,
                                                        sm: 13,
                                                        md: 14,
                                                        lg: 16,
                                                        xl: 16,
                                                        offset: 1
                                                    },
                                                    o.a.createElement(
                                                        q.a,
                                                        null,
                                                        o.a.createElement(
                                                            H.a,
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
                                                                f.a,
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
                                                            H.a,
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
                                                    H.a,
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
                                            H.a,
                                            {
                                                span: 24,
                                                className: "mono-btn-hide"
                                            },
                                            o.a.createElement(
                                                q.a,
                                                {
                                                    type: "flex",
                                                    justify: "space-between"
                                                },
                                                o.a.createElement(
                                                    H.a,
                                                    {
                                                        span: 6,
                                                        className:
                                                            "mono-btn-light"
                                                    },
                                                    o.a.createElement(
                                                        P.a,
                                                        {
                                                            to: "/",
                                                            onClick: this
                                                                .showModal
                                                        },
                                                        "Create Account"
                                                    ),
                                                    o.a.createElement(
                                                        G.a,
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
                                                            V,
                                                            null
                                                        )
                                                    )
                                                ),
                                                o.a.createElement(
                                                    H.a,
                                                    {
                                                        span: 6,
                                                        className:
                                                            "mono-btn-light"
                                                    },
                                                    o.a.createElement(
                                                        P.a,
                                                        {
                                                            to: "/",
                                                            onClick: this
                                                                .showModalSend
                                                        },
                                                        "Send"
                                                    ),
                                                    o.a.createElement(
                                                        G.a,
                                                        {
                                                            title: null,
                                                            footer: null,
                                                            visible: this.state
                                                                .visibleSend,
                                                            onOk: this.handleOk,
                                                            onCancel: this
                                                                .handleCancel
                                                        },
                                                        o.a.createElement(Z.a, {
                                                            onCloseModal: this.handleCancel.bind(
                                                                this
                                                            )
                                                        })
                                                    )
                                                ),
                                                o.a.createElement(
                                                    H.a,
                                                    {
                                                        span: 6,
                                                        className:
                                                            "mono-btn-light"
                                                    },
                                                    o.a.createElement(
                                                        P.a,
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
                                                    H.a,
                                                    {
                                                        span: 6,
                                                        className:
                                                            "mono-btn-light"
                                                    },
                                                    o.a.createElement(
                                                        P.a,
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
            K = Object(s.connect)(K, {
                listenTo: function() {
                    return [l.a, w.a, k.a, u.a, h.a];
                },
                getProps: function() {
                    var e = x.Apis.instance().chain_id;
                    return {
                        backedCoins: h.a.getState().backedCoins,
                        myActiveAccounts: l.a.getState().myActiveAccounts,
                        currentAccount:
                            l.a.getState().currentAccount ||
                            l.a.getState().passwordAccount,
                        passwordAccount: l.a.getState().passwordAccount,
                        locked: w.a.getState().locked,
                        current_wallet: k.a.getState().current_wallet,
                        lastMarket: u.a
                            .getState()
                            .viewSettings.get(
                                "lastMarket" + (e ? "_" + e.substr(0, 8) : "")
                            ),
                        starredAccounts: l.a.getState().starredAccounts,
                        passwordLogin: u.a
                            .getState()
                            .settings.get("passwordLogin"),
                        currentLocale: u.a.getState().settings.get("locale"),
                        hiddenAssets: u.a.getState().hiddenAssets,
                        settings: u.a.getState().settings,
                        locales: u.a.getState().defaults.locale,
                        contacts: l.a.getState().accountContacts
                    };
                }
            });
            t.a = Object(M.a)(K);
        },
        1848: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(539),
                    o = n(306),
                    s = n(0),
                    r = n.n(s),
                    c = n(36),
                    i = n.n(c),
                    l = (n(92), n(3)),
                    u = n.n(l),
                    p = n(10),
                    m = n(190),
                    d = n(305),
                    h = n(25),
                    f = n(251),
                    b = n(98),
                    g = n(27),
                    _ = n(142),
                    v = n(334),
                    y = n(45),
                    w = n(15),
                    E = (n(16), n(32)),
                    k = n(7),
                    A = n.n(k),
                    S = n(40),
                    C = n(547),
                    O = n(548),
                    D = n(124),
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
                    N = (function() {
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
                function j(e, t, n) {
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
                function T(e, t) {
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
                var P = (function(t) {
                        function n(e) {
                            T(this, n);
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
                                            feeAmount: new g.a({amount: 0}),
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
                                i.a.subscribe(
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
                            M(n, r.a.Component),
                            N(n, [
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
                                            feeAmount: new g.a({amount: 0}),
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
                                                i.a.publish(e.props.id, "open"),
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
                                            s = new g.a({
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
                                                    feeAmount: new g.a({
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
                                                r = a.getIn([
                                                    "balances",
                                                    t.asset_id
                                                ]);
                                            if (o && a) {
                                                if (!s)
                                                    return this.setState({
                                                        balanceError: !0
                                                    });
                                                var c = p.ChainStore.getObject(
                                                        s
                                                    ),
                                                    i = r
                                                        ? p.ChainStore.getObject(
                                                              r
                                                          )
                                                        : null;
                                                if (
                                                    ((i &&
                                                        0 !==
                                                            i.get("balance")) ||
                                                        this.setState(
                                                            {
                                                                fee_asset_id:
                                                                    "1.3.0"
                                                            },
                                                            this._updateFee
                                                        ),
                                                    c && t)
                                                ) {
                                                    if (!n)
                                                        return this.setState({
                                                            balanceError: !1
                                                        });
                                                    var l = Object(_.a)(
                                                        n,
                                                        o,
                                                        t,
                                                        c
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
                                                r = [];
                                            o.forEach(function(t) {
                                                r.push(
                                                    Object(_.b)({
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
                                                Promise.all(r)
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
                                            s = new g.a({
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
                                        var r = e.from_account
                                            .get("balances")
                                            .toJS();
                                        for (var c in ((o = Object.keys(r).sort(
                                            w.a.sortID
                                        )),
                                        (s = Object.keys(r).sort(w.a.sortID)),
                                        r)) {
                                            var i = p.ChainStore.getObject(
                                                r[c]
                                            );
                                            i &&
                                                0 === i.get("balance") &&
                                                (o.splice(o.indexOf(c), 1),
                                                -1 !== s.indexOf(c) &&
                                                    s.splice(s.indexOf(c), 1));
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
                                            Object(_.b)({
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
                                                    r = t.hasPoolBalance;
                                                return Object(_.d)(a, n).then(
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
                                                                  hasPoolBalance: r,
                                                                  error:
                                                                      !s || !r
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
                                            var r = a.get("balances").toJS(),
                                                c = t[0];
                                            this._setTotal(c, r[c]);
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
                                            r = t.from_account,
                                            c = t.from_name;
                                        e.preventDefault(),
                                            o &&
                                                s &&
                                                s != c &&
                                                (n ||
                                                    a ||
                                                    this.setState({
                                                        orig_account: r
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
                                                    to_account: r,
                                                    to_name: c
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
                                            c = n.to_account,
                                            i = n.asset,
                                            l = n.asset_id,
                                            b = n.propose_account,
                                            g = n.feeAmount,
                                            _ = n.amount,
                                            y = (n.error, n.to_name),
                                            w = n.from_name,
                                            E = n.memo,
                                            k = n.feeAsset,
                                            x = n.fee_asset_id,
                                            N = n.balanceError,
                                            T = (n.hidden,
                                            h.a.isMyAccount(s) ||
                                                w ===
                                                    this.props.passwordAccount),
                                            L = !(!s || T || o),
                                            M = this._getAvailableAssets(),
                                            P = M.asset_types,
                                            I = M.fee_asset_types,
                                            F = null,
                                            B = null,
                                            R = this.state.feeAmount.getAmount({
                                                real: !0
                                            });
                                        if (s && s.get("balances") && !L) {
                                            var W = s.get("balances").toJS(),
                                                z = this.state.balanceError
                                                    ? "has-error"
                                                    : "";
                                            if (
                                                (1 === P.length &&
                                                    (i = p.ChainStore.getAsset(
                                                        P[0]
                                                    )),
                                                P.length > 0)
                                            ) {
                                                var J = i ? i.get("id") : P[0],
                                                    U = k
                                                        ? k.get("id")
                                                        : "1.3.0";
                                                (F = r.a.createElement(
                                                    "span",
                                                    null,
                                                    r.a.createElement(u.a, {
                                                        component: "span",
                                                        content:
                                                            "transfer.available"
                                                    }),
                                                    ":",
                                                    " ",
                                                    r.a.createElement(
                                                        "span",
                                                        {
                                                            className: z,
                                                            style: {
                                                                borderBottom:
                                                                    "#A09F9F 1px dotted",
                                                                cursor:
                                                                    "pointer"
                                                            },
                                                            onClick: this._setTotal.bind(
                                                                this,
                                                                J,
                                                                W[J],
                                                                R,
                                                                U
                                                            )
                                                        },
                                                        r.a.createElement(v.a, {
                                                            balance: W[J]
                                                        })
                                                    )
                                                )),
                                                    U == J &&
                                                        this.state
                                                            .balanceError &&
                                                        (B = r.a.createElement(
                                                            "span",
                                                            null,
                                                            r.a.createElement(
                                                                "span",
                                                                {className: z},
                                                                r.a.createElement(
                                                                    u.a,
                                                                    {
                                                                        content:
                                                                            "transfer.errors.insufficient"
                                                                    }
                                                                )
                                                            )
                                                        ));
                                            } else
                                                (F = r.a.createElement(
                                                    "span",
                                                    null,
                                                    r.a.createElement(
                                                        "span",
                                                        {className: z},
                                                        r.a.createElement(u.a, {
                                                            content:
                                                                "transfer.errors.noFunds"
                                                        })
                                                    )
                                                )),
                                                    (B = r.a.createElement(
                                                        "span",
                                                        null,
                                                        r.a.createElement(
                                                            "span",
                                                            {className: z},
                                                            r.a.createElement(
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
                                                    _,
                                                    /,/g,
                                                    ""
                                                )
                                            ),
                                            H = q && !Object(a.a)(q),
                                            G =
                                                !s ||
                                                !H ||
                                                !i ||
                                                L ||
                                                V ||
                                                N ||
                                                (!h.a.isMyAccount(s) && !o),
                                            Z = this.props.tabIndex;
                                        return r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block vertical no-overflow "
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className: "content-block",
                                                    style: {
                                                        textAlign: "center",
                                                        textTransform: "none"
                                                    }
                                                },
                                                o
                                                    ? r.a.createElement(
                                                          "div",
                                                          {
                                                              style: {
                                                                  fontSize:
                                                                      "1.3rem",
                                                                  fontFamily:
                                                                      "Roboto-Medium, arial, sans-serif"
                                                              }
                                                          },
                                                          r.a.createElement(
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
                                                    : r.a.createElement(
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
                                                          r.a.createElement(
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
                                                r.a.createElement(
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
                                                    r.a.createElement(
                                                        "p",
                                                        null,
                                                        r.a.createElement(u.a, {
                                                            content:
                                                                "transfer.header_subheader",
                                                            wallet_name: Object(
                                                                S.l
                                                            )()
                                                        })
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "form",
                                                {noValidate: !0},
                                                r.a.createElement(
                                                    "div",
                                                    null,
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "content-block mono-bdbt"
                                                        },
                                                        r.a.createElement(f.a, {
                                                            label:
                                                                "transfer.to",
                                                            accountName: y,
                                                            account: c,
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
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "content-block transfer-input "
                                                        },
                                                        r.a.createElement(d.a, {
                                                            label:
                                                                "transfer.amount",
                                                            amount: _,
                                                            onChange: this.onAmountChanged.bind(
                                                                this
                                                            ),
                                                            asset:
                                                                P.length > 0 &&
                                                                i
                                                                    ? i.get(
                                                                          "id"
                                                                      )
                                                                    : l || P[0],
                                                            assets: P,
                                                            display_balance: F,
                                                            tabIndex: Z++
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "content-block transfer-input mono-bdbt"
                                                        },
                                                        E && E.length
                                                            ? r.a.createElement(
                                                                  "label",
                                                                  {
                                                                      className:
                                                                          "right-label"
                                                                  },
                                                                  E.length
                                                              )
                                                            : null,
                                                        r.a.createElement(u.a, {
                                                            className:
                                                                "left-label tooltip",
                                                            component: "label",
                                                            content:
                                                                "transfer.memo",
                                                            "data-place": "top"
                                                        }),
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                type: "text",
                                                                value: E,
                                                                placeholder:
                                                                    "Textbox",
                                                                tabIndex: Z++,
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
                                                                "content-block transfer-input "
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "no-margin no-padding"
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    id:
                                                                        "txFeeSelector",
                                                                    className:
                                                                        "small-12"
                                                                },
                                                                r.a.createElement(
                                                                    d.a,
                                                                    {
                                                                        label:
                                                                            "transfer.fee",
                                                                        disabled: !0,
                                                                        amount: R,
                                                                        onChange: this.onFeeChanged.bind(
                                                                            this
                                                                        ),
                                                                        asset:
                                                                            I.length &&
                                                                            g
                                                                                ? g.asset_id
                                                                                : 1 ===
                                                                                  I.length
                                                                                    ? I[0]
                                                                                    : x ||
                                                                                      I[0],
                                                                        assets: I,
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
                                                        ? r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "content-block transfer-input"
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
                                                                  m.a,
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
                                                    r.a.createElement(
                                                        C.a,
                                                        {
                                                            type: "flex",
                                                            justify:
                                                                "space-between"
                                                        },
                                                        r.a.createElement(
                                                            O.a,
                                                            {span: 11},
                                                            r.a.createElement(
                                                                D.a,
                                                                {
                                                                    className: A()(
                                                                        "button hollow primary mono-btn-vt "
                                                                    ),
                                                                    tabIndex: Z++,
                                                                    onClick: this
                                                                        .props
                                                                        .onCloseModal
                                                                },
                                                                r.a.createElement(
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
                                                        r.a.createElement(
                                                            O.a,
                                                            {span: 11},
                                                            o
                                                                ? r.a.createElement(
                                                                      D.a,
                                                                      (j(
                                                                          (e = {
                                                                              type:
                                                                                  "primary",
                                                                              className: A()(
                                                                                  " mono-btn-vt",
                                                                                  {
                                                                                      disabled: G
                                                                                  }
                                                                              )
                                                                          }),
                                                                          "type",
                                                                          "submit"
                                                                      ),
                                                                      j(
                                                                          e,
                                                                          "value",
                                                                          "Submit"
                                                                      ),
                                                                      j(
                                                                          e,
                                                                          "onClick",
                                                                          G
                                                                              ? null
                                                                              : this.onSubmit.bind(
                                                                                    this
                                                                                )
                                                                      ),
                                                                      j(
                                                                          e,
                                                                          "tabIndex",
                                                                          Z++
                                                                      ),
                                                                      e),
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
                                                                      D.a,
                                                                      (j(
                                                                          (t = {
                                                                              type:
                                                                                  "primary",
                                                                              className: A()(
                                                                                  "  mono-btn-vt",
                                                                                  {
                                                                                      disabled: G
                                                                                  }
                                                                              )
                                                                          }),
                                                                          "type",
                                                                          "submit"
                                                                      ),
                                                                      j(
                                                                          t,
                                                                          "value",
                                                                          "Submit"
                                                                      ),
                                                                      j(
                                                                          t,
                                                                          "onClick",
                                                                          G
                                                                              ? null
                                                                              : this.onSubmit.bind(
                                                                                    this
                                                                                )
                                                                      ),
                                                                      j(
                                                                          t,
                                                                          "tabIndex",
                                                                          Z++
                                                                      ),
                                                                      t),
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
                    I = (function(e) {
                        function t() {
                            return (
                                T(this, t),
                                L(
                                    this,
                                    (
                                        t.__proto__ || Object.getPrototypeOf(t)
                                    ).apply(this, arguments)
                                )
                            );
                        }
                        return (
                            M(t, r.a.Component),
                            N(t, [
                                {
                                    key: "render",
                                    value: function() {
                                        return r.a.createElement(
                                            P,
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
                (I = Object(E.connect)(I, {
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
                    (t.a = I);
            }.call(this, n(116).Buffer));
        }
    }
]);
//# sourceMappingURL=asset~dashboard~dashboard-accounts~explorer.js.map
