import React from "react";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";
import LinkToAccountById from "./LinkToAccountById";

class LinkToMasterById extends React.Component {
    static propTypes = {
        master: ChainTypes.ChainObject.isRequired
    };

    render() {
        let master_account = this.props.master.get("master_account");
        return <LinkToAccountById account={master_account} />;
    }
}
LinkToMasterById = BindToChainState(LinkToMasterById);

export default LinkToMasterById;
