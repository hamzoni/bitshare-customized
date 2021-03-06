import React from "react";
import Translate from "react-translate-component";
import cnames from "classnames";
import AccountActions from "actions/AccountActions";

export default class DropDownMenu extends React.Component {
    shouldComponentUpdate(np) {
        let shouldUpdate = false;
        for (let key in np) {
            if (typeof np[key] === "function") continue;
            shouldUpdate = shouldUpdate || np[key] !== this.props[key];
        }
        return shouldUpdate;
    }

    _onAddContact() {
        AccountActions.addAccountContact(this.props.currentAccount);
    }

    _onRemoveContact() {
        AccountActions.removeAccountContact(this.props.currentAccount);
    }

    render() {
        const {
            toggleLock,
            locked,
            active,
            passwordLogin,
            isMyAccount,
            showAccountLinks,
            tradeUrl,
            currentAccount,
            contacts
        } = this.props;

        let isContact = contacts.has(currentAccount);

        return (
            <ul className="dropdown dropdown-content">
                <li className="dropdown-item" onClick={toggleLock}>
                    <Translate
                        content={`header.${
                            this.props.locked ? "unlock_short" : "lock_short"
                        }`}
                    />
                </li>

                {locked ? (
                    <li
                        className={
                            "dropdown-item " +
                            cnames({
                                active:
                                    active.indexOf(
                                        `/create-account/${
                                            !passwordLogin
                                                ? "wallet"
                                                : "password"
                                        }`
                                    ) !== -1
                            })
                        }
                        onClick={this.props.onNavigate.bind(
                            this,
                            `/create-account/${
                                !passwordLogin ? "wallet" : "password"
                            }`
                        )}
                    >
                        <Translate content="header.create_account" />
                    </li>
                ) : null}

                {!this.props.locked ? (
                    <li
                        className="dropdown-item"
                        className={cnames({
                            active: active.indexOf("/account") !== -1
                        })}
                        onClick={this.props.onNavigate.bind(
                            this,
                            `/account/${currentAccount}`
                        )}
                    >
                        <Translate content="header.dashboard" />
                    </li>
                ) : null}

                {!isMyAccount && showAccountLinks ? (
                    <li
                        className="dropdown-item"
                        className="divider"
                        onClick={this[
                            isContact ? "_onRemoveContact" : "_onAddContact"
                        ].bind(this)}
                    >
                        <Translate
                            content={`account.${
                                isContact ? "unfollow" : "follow"
                            }`}
                        />
                    </li>
                ) : null}

                <li
                    className="dropdown-item"
                    className={cnames(
                        {active: active.indexOf("/market/") !== -1},
                        "column-show-small"
                    )}
                    onClick={this.props.onNavigate.bind(this, tradeUrl)}
                >
                    <Translate content="header.exchange" />
                </li>

                <li
                    className="dropdown-item"
                    className={cnames(
                        {active: active.indexOf("/explorer") !== -1},
                        "column-show-small"
                    )}
                    onClick={this.props.onNavigate.bind(
                        this,
                        "/explorer/blocks"
                    )}
                >
                    <Translate content="header.explorer" />
                </li>

                <li
                    className="dropdown-item"
                    className={
                        "dropdown-item " +
                        cnames({
                            active: active.indexOf("/transfer") !== -1,
                            disabled: !showAccountLinks
                        })
                    }
                    //onClick={this.props.onNavigate.bind(this, "/transfer")}
                >
                    <Translate content="header.payments_legacy" />
                </li>

                <li
                    className="dropdown-item"
                    className={cnames(
                        {active: active.indexOf("/settings") !== -1},
                        "divider",
                        "desktop-only"
                    )}
                    onClick={this.props.onNavigate.bind(this, "/settings")}
                >
                    <Translate content="header.settings" />
                </li>

                <li
                    className="dropdown-item"
                    className={cnames(
                        {active: active.indexOf("/settings") !== -1},
                        "divider",
                        "mobile-only",
                        "has-submenu"
                    )}
                    onClick={this.props.toggleDropdownSubmenu}
                >
                    <Translate content="header.settings" />{" "}
                </li>

                <li
                    className="dropdown-item"
                    className={cnames({
                        active: active.indexOf("/voting") !== -1,
                        disabled: !showAccountLinks
                    })}
                    onClick={this.props.onNavigate.bind(
                        this,
                        `/account/${currentAccount}/voting`
                    )}
                >
                    <Translate content="account.voting" />
                </li>

                {showAccountLinks ? (
                    <li
                        className="dropdown-item"
                        className={cnames(
                            {
                                active: active.indexOf("/accounts") !== -1
                            },
                            "divider"
                        )}
                        onClick={this.props.onNavigate.bind(this, "/accounts")}
                    >
                        <Translate content="explorer.accounts.title" />
                    </li>
                ) : null}
            </ul>
        );
    }
}
