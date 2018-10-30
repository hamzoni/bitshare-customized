import React from "react";
import AccountActions from "actions/AccountActions";
import AccountStore from "stores/AccountStore";
import SettingsStore from "stores/SettingsStore";
import WalletUnlockStore from "stores/WalletUnlockStore";
// import AccountLeftPanel from "./AccountLeftPanel";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";
import {connect} from "alt-react";
import accountUtils from "common/account_utils";
import {List} from "immutable";
import Page404 from "../Page404/Page404";

/* Nested routes */

import AccountOverview from "./AccountOverview";
import LoginSelector from "../LoginSelector";

class AccountPage extends React.Component {
    static propTypes = {
        account: ChainTypes.ChainAccount.isRequired
    };

    componentDidMount() {
        if (this.props.account) {
            AccountActions.setCurrentAccount.defer(
                this.props.account.get("name")
            );

            // Fetch possible fee assets here to avoid async issues later (will resolve assets)
            accountUtils.getPossibleFees(this.props.account, "transfer");
        }
    }

    componentWillReceiveProps(np) {
        if (np.account) {
            const npName = np.account.get("name");
            const currentName =
                this.props.account && this.props.account.get("name");

            if (!this.props.account || npName !== currentName) {
                // Update the current account in order to access the header right menu options
                AccountActions.setCurrentAccount.defer(npName);
                // Fetch possible fee assets here to avoid async issues later (will resolve assets)
                accountUtils.getPossibleFees(np.account, "transfer");
            }
        }
    }

    render() {
        let {
            currentAccount,
            myActiveAccounts,
            searchAccounts,
            settings,
            wallet_locked,
            account,
            hiddenAssets,
            passwordAccount,
        } = this.props;

        if (!account) {
            return <Page404 />;
        }
        let account_name = this.props.account.get("name");
        //console.log(account_name);
        let isMyAccount = AccountStore.isMyAccount(account);

        let passOnProps = {
            account_name,
            myActiveAccounts,
            searchAccounts,
            settings,
            wallet_locked,
            account,
            isMyAccount,
            hiddenAssets,
            contained: true,
            balances: account.get("balances", List()).toList(),
            orders: account.get("orders", List()).toList(),
            viewSettings: this.props.viewSettings,
            proxy: account.getIn(["options", "voting_account"]),
            history: this.props.history
        };
        return (
            <div className="grid-block page-layout">
                <div className="grid-block no-padding">                  
                    <AccountOverview {...passOnProps} />
                </div>
            </div>
        );
    }
}
AccountPage = BindToChainState(AccountPage, {
    show_loader: true
});

class AccountPageStoreWrapper extends React.Component {
    render() {
        //let account_name = this.props.match.params.account_name;
        let account_name = this.props.currentAccount;
        if(!account_name || this.props.locked) return  <LoginSelector />;
        return  <AccountPage {...this.props} account={account_name} />;
    }
}

export default connect(AccountPageStoreWrapper, {
    listenTo() {
        return [AccountStore, SettingsStore, WalletUnlockStore];
    },
    getProps() {
        return {
            searchAccounts: AccountStore.getState().searchAccounts,
            settings: SettingsStore.getState().settings,
            hiddenAssets: SettingsStore.getState().hiddenAssets,
            wallet_locked: WalletUnlockStore.getState().locked,
            viewSettings: SettingsStore.getState().viewSettings,
            myActiveAccounts: AccountStore.getState().myActiveAccounts,
                currentAccount:
                    AccountStore.getState().currentAccount ||
                    AccountStore.getState().passwordAccount,
            locked: WalletUnlockStore.getState().locked
        };
    }
});
