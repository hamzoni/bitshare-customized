import React from "react";
import {connect} from "alt-react";
import AccountStore from "stores/AccountStore";
import {Link} from "react-router-dom";
import Translate from "react-translate-component";
import TranslateWithLinks from "./Utility/TranslateWithLinks";
import {isIncognito} from "feature_detect";
import SettingsActions from "actions/SettingsActions";
import WalletUnlockActions from "actions/WalletUnlockActions";
import ActionSheet from "react-foundation-apps/src/action-sheet";
import SettingsStore from "stores/SettingsStore";
import IntlActions from "actions/IntlActions";
import CreateAccount from "./Account/CreateAccount";
import CreateAccountPassword from "./Account/CreateAccountPassword";
import {Route} from "react-router-dom";
import {getWalletName, getLogo} from "branding";
var logo = getLogo();

class LoginSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            locales: SettingsStore.getState().defaults.locale,
            currentLocale: SettingsStore.getState().settings.get("locale")
        };
    }

    componentWillMount() {
        isIncognito(incognito => {
            this.setState({incognito});
        });
    }

    onSelect(route) {
        this.props.history.push("/create-account/" + route);
    }

    render() {
        const translator = require("counterpart");

        return (
            <div className="grid-block align-center" id="accountForm">
                <div className="grid-block shrink vertical">
                    <div className="grid-content shrink text-center account-creation">
                        <div>
                            <img src={logo} />
                        </div>

                        <div>
                            <Translate
                                content="header.create_account"
                                component="h4"
                            />
                        </div>

                        <div>
                            <Translate
                                content="account.intro_text_title"
                                component="h4"
                                wallet_name={getWalletName()}
                            />
                            <Translate
                                unsafe
                                content="account.intro_text_1"
                                component="p"
                            />
                        </div>

                        <div className="grid-block account-login-options">
                            <Link
                                id="account_login_button"
                                to="/create-account/password"
                                className="button primary tq-max-width"
                                data-intro={translator.translate(
                                    "walkthrough.create_cloud_wallet"
                                )}
                            >
                                <Translate content="header.create_account" />
                            </Link>

                            <span
                                className="button hollow primary tq-max-width"
                                onClick={() => {
                                    SettingsActions.changeSetting.defer({
                                        setting: "passwordLogin",
                                        value: true
                                    });
                                    WalletUnlockActions.unlock().catch(
                                        () => {}
                                    );
                                }}
                            >
                                <Translate content="header.unlock_short" />
                            </span>
                        </div>

                        <div className="additional-account-options">
                            <h5 style={{textAlign: "center"}}>
                                <TranslateWithLinks
                                    string="account.optional.formatter"
                                    keys={[
                                        {
                                            type: "link",
                                            value: "/wallet/backup/restore",
                                            translation:
                                                "account.optional.restore_link",
                                            dataIntro: translator.translate(
                                                "walkthrough.restore_account"
                                            ),
                                            arg: "restore_link"
                                        },
                                        {
                                            type: "link",
                                            value: "/create-account/wallet",
                                            translation:
                                                "account.optional.restore_form",
                                            dataIntro: translator.translate(
                                                "walkthrough.create_local_wallet"
                                            ),
                                            arg: "restore_form"
                                        }
                                    ]}
                                />
                            </h5>
                        </div>

                        <Route
                            path="/create-account/wallet"
                            exact
                            component={CreateAccount}
                        />
                        <Route
                            path="/create-account/password"
                            exact
                            component={CreateAccountPassword}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    LoginSelector,
    {
        listenTo() {
            return [AccountStore];
        },
        getProps() {
            return {
                currentAccount:
                    AccountStore.getState().currentAccount ||
                    AccountStore.getState().passwordAccount
            };
        }
    }
);
