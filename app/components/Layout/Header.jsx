import React from "react";
import {connect} from "alt-react";
import AccountActions from "actions/AccountActions";
import AccountStore from "stores/AccountStore";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import GatewayStore from "stores/GatewayStore";
import Icon from "../Icon/Icon";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import WalletDb from "stores/WalletDb";
import WalletUnlockStore from "stores/WalletUnlockStore";
import WalletUnlockActions from "actions/WalletUnlockActions";
import WalletManagerStore from "stores/WalletManagerStore";
import cnames from "classnames";
import TotalBalanceValue from "../Utility/TotalBalanceValue";
import ReactTooltip from "react-tooltip";
import {Apis} from "bitsharesjs-ws";
import notify from "actions/NotificationActions";
import {ChainStore} from "bitsharesjs";
import {List} from "immutable";
import {withRouter} from "react-router-dom";

import {getLogo} from "branding";
var logo = getLogo();

class Header extends React.Component {
    constructor(props) {
        super();
        this.state = {
            active: props.location.pathname,
            accountsListDropdownActive: false,
            dropdownActive: false,
            dropdownSubmenuActive: false
        };

        this.unlisten = null;
        this._closeDropdown = this._closeDropdown.bind(this);
        this._closeDropdownSubmenu = this._closeDropdownSubmenu.bind(this);
        this._closeAccountsListDropdown = this._closeAccountsListDropdown.bind(
            this
        );
        this.onBodyClick = this.onBodyClick.bind(this);
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen(newState => {
            if (this.unlisten && this.state.active !== newState.pathname) {
                this.setState({
                    active: newState.pathname
                });
            }
        });
    }

    componentDidMount() {
        setTimeout(() => {
            ReactTooltip.rebuild();
        }, 1250);

        document.body.addEventListener("click", this.onBodyClick, {
            capture: false,
            passive: true
        });
    }

    componentWillUnmount() {
        if (this.unlisten) {
            this.unlisten();
            this.unlisten = null;
        }

        document.body.removeEventListener("click", this.onBodyClick);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.myActiveAccounts !== this.props.myActiveAccounts ||
            nextProps.currentAccount !== this.props.currentAccount ||
            nextProps.passwordLogin !== this.props.passwordLogin ||
            nextProps.locked !== this.props.locked ||
            nextProps.current_wallet !== this.props.current_wallet ||
            nextProps.lastMarket !== this.props.lastMarket ||
            nextProps.starredAccounts !== this.props.starredAccounts ||
            nextProps.currentLocale !== this.props.currentLocale ||
            nextState.active !== this.state.active ||
            nextState.hiddenAssets !== this.props.hiddenAssets ||
            nextState.accountsListDropdownActive !==
                this.state.accountsListDropdownActive ||
            nextProps.height !== this.props.height ||
            nextProps.location.pathname !== this.props.location.pathname
        );
    }

    _showSend(e) {
        e.preventDefault();
        if (this.send_modal) this.send_modal.show();
        this._closeDropdown();
    }

    _showDeposit(e) {
        e.preventDefault();
        this.refs.deposit_modal_new.show();
        this._closeDropdown();
    }

    _showWithdraw(e) {
        e.preventDefault();
        this._closeDropdown();
        this.refs.withdraw_modal_new.show();
    }

    _triggerMenu(e) {
        e.preventDefault();
        ZfApi.publish("mobile-menu", "toggle");
    }

    _toggleLock(e) {
        e.preventDefault();
        if (WalletDb.isLocked()) {
            WalletUnlockActions.unlock()
                .then(() => {
                    AccountActions.tryToSetCurrentAccount();
                })
                .catch(() => {});
        } else {
            WalletUnlockActions.lock();
        }
        this._closeDropdown();
    }

    _onNavigate(route, e) {
        e.preventDefault();

        // Set Accounts Tab as active tab
        if (route == "/accounts") {
            SettingsActions.changeViewSetting({
                dashboardEntry: "accounts"
            });
        }

        this.props.history.push(route);
        this._closeDropdown();
    }

    _closeAccountsListDropdown() {
        if (this.state.accountsListDropdownActive) {
            this.setState({
                accountsListDropdownActive: false
            });
        }
    }

    _closeMenuDropdown() {
        if (this.state.dropdownActive) {
            this.setState({
                dropdownActive: false
            });
        }
    }

    _closeDropdownSubmenu() {
        if (this.state.dropdownSubmenuActive) {
            this.setState({
                dropdownSubmenuActive: false
            });
        }
    }

    _closeDropdown() {
        this._closeMenuDropdown();
        this._closeAccountsListDropdown();
        this._closeDropdownSubmenu();
    }

    _onGoBack(e) {
        e.preventDefault();
        window.history.back();
    }

    _onGoForward(e) {
        e.preventDefault();
        window.history.forward();
    }

    _accountClickHandler(account_name, e) {
        e.preventDefault();
        ZfApi.publish("account_drop_down", "close");
        if (this.props.location.pathname.indexOf("/account/") !== -1) {
            let currentPath = this.props.location.pathname.split("/");
            currentPath[2] = account_name;
            this.props.history.push(currentPath.join("/"));
        }
        if (account_name !== this.props.currentAccount) {
            AccountActions.setCurrentAccount.defer(account_name);
            notify.addNotification({
                message: counterpart.translate("header.account_notify", {
                    account: account_name
                }),
                level: "success",
                autoDismiss: 2,
                position: "br"
            });
            this._closeDropdown();
        }
    }

    onBodyClick(e) {
        let el = e.target;
        let insideMenuDropdown = false;
        let insideAccountDropdown = false;

        do {
            if (
                el.classList &&
                el.classList.contains("account-dropdown-wrapper")
            ) {
                insideAccountDropdown = true;
                break;
            }

            if (
                el.classList &&
                el.classList.contains("menu-dropdown-wrapper")
            ) {
                insideMenuDropdown = true;
                break;
            }
        } while ((el = el.parentNode));

        if (!insideAccountDropdown) this._closeAccountsListDropdown();
        if (!insideMenuDropdown) {
            this._closeMenuDropdown();
            this._closeDropdownSubmenu();
        }
    }

    render() {
        let {active} = this.state;
        let {currentAccount, starredAccounts} = this.props;

        let tradingAccounts = AccountStore.getMyAccounts();
        const a = ChainStore.getAccount(currentAccount);

        if (starredAccounts.size) {
            for (let i = tradingAccounts.length - 1; i >= 0; i--) {
                if (!starredAccounts.has(tradingAccounts[i])) {
                    tradingAccounts.splice(i, 1);
                }
            }
            starredAccounts.forEach(account => {
                if (tradingAccounts.indexOf(account.name) === -1) {
                    tradingAccounts.push(account.name);
                }
            });
        }

        let dashboard = (
            <a
                className={cnames("logo", {
                    active:
                        active === "/" ||
                        (active.indexOf("dashboard") !== -1 &&
                            active.indexOf("account") === -1)
                })}
                onClick={this._onNavigate.bind(this, "/")}
            >
                <img style={{margin: 0, height: 40}} src={logo} />
            </a>
        );
        /* Dynamic Menu Item */
        let dynamicMenuItem;

        if (active.indexOf("news") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({active: active.indexOf("news") !== -1})}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="news"
                        title="icons.news"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="news.news"
                    />
                </a>
            );
        }
        if (active.indexOf("help") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({active: active.indexOf("help") !== -1})}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="question-circle"
                        title="icons.question_circle"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="header.help"
                    />
                </a>
            );
        }

        if (
            active.indexOf("/assets") !== -1 &&
            active.indexOf("explorer") === -1
        ) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/assets") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="assets"
                        title="icons.assets"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="explorer.assets.title"
                    />
                </a>
            );
        }
        if (active.indexOf("/signedmessages") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/signedmessages") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="text"
                        title="icons.text.signed_messages"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.signedmessages.menuitem"
                    />
                </a>
            );
        }
        if (active.indexOf("/member-stats") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/member-stats") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="text"
                        title="icons.text.membership_stats"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.member.stats"
                    />
                </a>
            );
        }
        if (active.indexOf("/vesting") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/vesting") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="hourglass"
                        title="icons.hourglass"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.vesting.title"
                    />
                </a>
            );
        }
        if (active.indexOf("/whitelist") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/whitelist") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="list"
                        title="icons.list"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.whitelist.title"
                    />
                </a>
            );
        }
        if (active.indexOf("/permissions") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/permissions") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="warning"
                        title="icons.warning"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.permissions"
                    />
                </a>
            );
        }

        return (
            <div className="header-container" style={{minHeight: "64px"}}>
                <div>
                    <div
                        className="header menu-group primary"
                        style={{flexWrap: "nowrap", justifyContent: "none"}}
                    >
                        {__ELECTRON__ ? (
                            <div className="grid-block show-for-medium shrink electron-navigation">
                                <ul className="menu-bar">
                                    <li>
                                        <div
                                            style={{
                                                marginLeft: "1rem",
                                                height: "3rem"
                                            }}
                                        >
                                            <div
                                                style={{marginTop: "0.5rem"}}
                                                onClick={this._onGoBack.bind(
                                                    this
                                                )}
                                                className="button outline small"
                                            >
                                                {"<"}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            style={{
                                                height: "3rem",
                                                marginLeft: "0.5rem",
                                                marginRight: "0.75rem"
                                            }}
                                        >
                                            <div
                                                style={{marginTop: "0.5rem"}}
                                                onClick={this._onGoForward.bind(
                                                    this
                                                )}
                                                className="button outline small"
                                            >
                                                >
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ) : null}

                        <ul className="menu-bar">
                            <li>{dashboard}</li>
                            <li>
                                <a
                                    style={{flexFlow: "row"}}
                                    className={cnames(
                                        active.indexOf("explorer") !== -1
                                            ? null
                                            : "column-hide-xs",
                                        {
                                            active:
                                                active.indexOf("explorer") !==
                                                -1
                                        }
                                    )}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        "/explorer/blocks"
                                    )}
                                >
                                    <Icon
                                        size="2x"
                                        style={{
                                            position: "relative",
                                            top: 0,
                                            left: -8
                                        }}
                                        name="server"
                                        title="icons.server"
                                    />
                                    <Translate
                                        className="column-hide-small"
                                        component="span"
                                        content="header.explorer"
                                    />
                                </a>
                            </li>
                            {/* Dynamic Menu Item */}
                            <li>{dynamicMenuItem}</li>
                        </ul>
                    </div>
                </div>

                <div
                    className="truncated active-account"
                    style={{cursor: "pointer"}}
                >
                    <div className="text account-name">{currentAccount}</div>
                </div>
                <div>
                    {this.props.currentAccount == null ? null : (
                        <span
                            onClick={this._toggleLock.bind(this)}
                            style={{cursor: "pointer"}}
                        >
                            <Icon
                                className="lock-unlock"
                                size="2x"
                                name={this.props.locked ? "locked" : "unlocked"}
                                title={
                                    this.props.locked
                                        ? "icons.locked.common"
                                        : "icons.unlocked.common"
                                }
                            />
                        </span>
                    )}
                </div>
            </div>
        );
    }
}

Header = connect(
    Header,
    {
        listenTo() {
            return [
                AccountStore,
                WalletUnlockStore,
                WalletManagerStore,
                SettingsStore,
                GatewayStore
            ];
        },
        getProps() {
            const chainID = Apis.instance().chain_id;
            return {
                backedCoins: GatewayStore.getState().backedCoins,
                myActiveAccounts: AccountStore.getState().myActiveAccounts,
                currentAccount:
                    AccountStore.getState().currentAccount ||
                    AccountStore.getState().passwordAccount,
                passwordAccount: AccountStore.getState().passwordAccount,
                locked: WalletUnlockStore.getState().locked,
                current_wallet: WalletManagerStore.getState().current_wallet,
                lastMarket: SettingsStore.getState().viewSettings.get(
                    `lastMarket${chainID ? "_" + chainID.substr(0, 8) : ""}`
                ),
                starredAccounts: AccountStore.getState().starredAccounts,
                passwordLogin: SettingsStore.getState().settings.get(
                    "passwordLogin"
                ),
                currentLocale: SettingsStore.getState().settings.get("locale"),
                hiddenAssets: SettingsStore.getState().hiddenAssets,
                settings: SettingsStore.getState().settings,
                locales: SettingsStore.getState().defaults.locale,
                contacts: AccountStore.getState().accountContacts
            };
        }
    }
);

export default withRouter(Header);
