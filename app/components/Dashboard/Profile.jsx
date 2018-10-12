import React from "react";
import {connect} from "alt-react";
import ActionSheet from "react-foundation-apps/src/action-sheet";
import AccountActions from "actions/AccountActions";
import AccountStore from "stores/AccountStore";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import DepositModal from "../Modal/DepositModal";
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
import AccountImage from "../Account/AccountImage";
import {ChainStore} from "bitsharesjs";
import WithdrawModal from "../Modal/WithdrawModalNew";
import {List} from "immutable";
import DropDownMenu from "../Layout/HeaderDropdown";
import {withRouter} from "react-router-dom";
import CreateAccoutModal from "../CreateAccountModal";
import {Link} from "react-router-dom";
import {Row, Col, Modal, Button} from "antd";
import SendModalDasboard from "../Modal/SendModalDasboard";

import {getLogo} from "branding";
var logo = getLogo();

class Header extends React.Component {
    constructor(props) {
        super();
        this.state = {
            active: props.location.pathname,
            accountsListDropdownActive: false,
            dropdownActive: false,
            dropdownSubmenuActive: false,
            visible: false,
            visibleSend: false
        };

        this.unlisten = null;
        this._toggleAccountDropdownMenu = this._toggleAccountDropdownMenu.bind(
            this
        );
        this._toggleDropdownMenu = this._toggleDropdownMenu.bind(this);
        this._closeDropdown = this._closeDropdown.bind(this);
        this._closeDropdownSubmenu = this._closeDropdownSubmenu.bind(this);
        this._toggleDropdownSubmenu = this._toggleDropdownSubmenu.bind(this);
        this._closeMenuDropdown = this._closeMenuDropdown.bind(this);
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
            nextState.dropdownActive !== this.state.dropdownActive ||
            nextState.dropdownSubmenuActive !==
                this.state.dropdownSubmenuActive ||
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

    _toggleAccountDropdownMenu() {
        // prevent state toggling if user cannot have multiple accounts

        const hasLocalWallet = !!WalletDb.getWallet();

        if (!hasLocalWallet) return false;

        this.setState({
            accountsListDropdownActive: !this.state.accountsListDropdownActive
        });
    }

    _toggleDropdownSubmenu(item = this.state.dropdownSubmenuActiveItem, e) {
        if (e) e.stopPropagation();

        this.setState({
            dropdownSubmenuActive: !this.state.dropdownSubmenuActive,
            dropdownSubmenuActiveItem: item
        });
    }

    _toggleDropdownMenu() {
        this.setState({
            dropdownActive: !this.state.dropdownActive
        });
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

    //Modal Create account
    showModal = e => {
        e.preventDefault();
        this.setState({
            visible: true
        });
    };

    showModalSend = e => {
        e.preventDefault();
        this.setState({
            visibleSend: true
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
            visibleSend: false
        });
    };

    handleCancel = () => {
        //console.log(e);
        this.setState({
            visible: false,
            visibleSend: false
        });
    };

    render() {
        let {active} = this.state;
        let {
            currentAccount,
            starredAccounts,
            passwordLogin,
            passwordAccount,
            height
        } = this.props;

        let tradingAccounts = AccountStore.getMyAccounts();
        let maxHeight = Math.max(40, height - 67 - 36) + "px";

        const a = ChainStore.getAccount(currentAccount);
        const showAccountLinks = !!a;
        const isMyAccount = !a
            ? false
            : AccountStore.isMyAccount(a) ||
              (passwordLogin && currentAccount === passwordAccount);
        const enableDepositWithdraw =
            !!a &&
            Apis.instance() &&
            Apis.instance().chain_id &&
            Apis.instance().chain_id.substr(0, 8) === "4018d784";

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

        let myAccounts = AccountStore.getMyAccounts();
        let myAccountCount = myAccounts.length;

        let walletBalance =
            myAccounts.length && this.props.currentAccount ? (
                <span
                    className="total-value"
                    onClick={this._toggleAccountDropdownMenu}
                >
                    <TotalBalanceValue.AccountWrapper
                        hiddenAssets={this.props.hiddenAssets}
                        accounts={List([this.props.currentAccount])}
                        noTip
                        style={{minHeight: 15}}
                    />
                </span>
            ) : null;

        // Account selector: Only active inside the exchange
        let account_display_name, accountsList;
        if (currentAccount) {
            account_display_name =
                currentAccount.length > 20
                    ? `${currentAccount.slice(0, 20)}..`
                    : currentAccount;
            if (tradingAccounts.indexOf(currentAccount) < 0 && isMyAccount) {
                tradingAccounts.push(currentAccount);
            }
            if (tradingAccounts.length >= 1) {
                accountsList = tradingAccounts
                    .sort()
                    .filter(name => name !== currentAccount)
                    .map(name => {
                        return (
                            <li
                                key={name}
                                className={cnames({
                                    active:
                                        active
                                            .replace("/account/", "")
                                            .indexOf(name) === 0
                                })}
                                onClick={this._accountClickHandler.bind(
                                    this,
                                    name
                                )}
                            >
                                <div
                                    style={{paddingTop: 0}}
                                    className="table-cell"
                                >
                                    <AccountImage
                                        style={{position: "relative", top: 4}}
                                        size={{height: 20, width: 20}}
                                        account={name}
                                    />
                                </div>
                                <div
                                    className="table-cell"
                                    style={{paddingLeft: 10}}
                                >
                                    <a
                                        className={
                                            "text lower-case" +
                                            (name === account_display_name
                                                ? " current-account"
                                                : "")
                                        }
                                    >
                                        {name}
                                    </a>
                                </div>
                            </li>
                        );
                    });
            }
        }

        return (
            <Row className="mono-profile">
                <Col span={24} className="mono-bg-light">
                    <Row
                        type="flex"
                        justify="space-around"
                        align="middle"
                        className="mono-banner"
                    >
                        <Col xs={12} sm={13} md={14} lg={16} xl={16} offset={1}>
                            <Row>
                                <Col
                                    xs={4}
                                    sm={4}
                                    md={2}
                                    lg={2}
                                    xl={2}
                                    className="mono-icon-user"
                                >
                                    <Icon
                                        size="2x"
                                        name="people"
                                        title="icons.manage_accounts"
                                    />
                                </Col>
                                <Col
                                    xs={20}
                                    sm={20}
                                    md={22}
                                    lg={22}
                                    xl={22}
                                    style={{float: "right"}}
                                >
                                    <span className="mono-fbold">
                                        {" "}
                                        {currentAccount}{" "}
                                    </span>
                                    <br />
                                    {walletBalance}
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={10} sm={8} md={4} lg={4} xl={4}>
                            <span>Zcom Balance</span>
                            <br />
                            <span className="mono-fbold">
                                {walletBalance}
                                .00 Zcom
                            </span>
                            <span style={{float: "right"}}>0.00 $</span>
                        </Col>
                    </Row>
                </Col>
                <Col span={24} className="mono-btn-hide">
                    <Row type="flex" justify="space-between">
                        <Col span={6} className="mono-btn-light">
                            <Link to="/" onClick={this.showModal}>
                                Create Account
                            </Link>
                            <Modal
                                title={null}
                                footer={null}
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <CreateAccoutModal />
                            </Modal>
                        </Col>
                        <Col span={6} className="mono-btn-light">
                            <Link to="/" onClick={this.showModalSend}>
                                Send
                            </Link>
                            <Modal
                                title={null}
                                footer={null}
                                visible={this.state.visibleSend}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <SendModalDasboard
                                    onCloseModal={this.handleCancel.bind(this)}
                                    // refCallback={e => {
                                    //     if (e) this.send_modal = e;
                                    // }}
                                    //from_name={currentAccount}
                                />
                            </Modal>
                        </Col>
                        <Col span={6} className="mono-btn-light">
                            <Link to={`/account/${currentAccount}/voting`}>
                                Voting
                            </Link>
                        </Col>
                        <Col span={6} className="mono-btn-light">
                            <Link to="/settings">Settings</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
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
