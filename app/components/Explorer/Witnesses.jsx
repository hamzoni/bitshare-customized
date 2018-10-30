import counterpart from "counterpart";
import React from "react";
import Immutable from "immutable";
import AccountImage from "../Account/AccountImage";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";
import {ChainStore} from "zcomjs";
import FormattedAsset from "../Utility/FormattedAsset";
import Translate from "react-translate-component";
import TimeAgo from "../Utility/TimeAgo";
import {connect} from "alt-react";
import SettingsActions from "actions/SettingsActions";
import SettingsStore from "stores/SettingsStore";
import classNames from "classnames";
import {withRouter} from "react-router-dom";
import {Table, Icon, Input, Popover} from "bitshares-ui-style-guide";

require("./masters.scss");

class MasterCard extends React.Component {
    static propTypes = {
        master: ChainTypes.ChainAccount.isRequired
    };

    _onCardClick(e) {
        e.preventDefault();
        this.props.history.push(`/account/${this.props.master.get("name")}`);
    }

    render() {
        let master_data = ChainStore.getMasterById(this.props.master.get("id"));
        if (!master_data) return null;
        let total_votes = master_data.get("total_votes");

        let master_aslot = master_data.get("last_aslot");
        let color = {};
        if (this.props.most_recent - master_aslot > 100) {
            color = {borderLeft: "1px solid #FCAB53"};
        } else {
            color = {borderLeft: "1px solid #50D2C2"};
        }
        let last_aslot_time = new Date(
            Date.now() -
                (this.props.most_recent - master_aslot) *
                    ChainStore.getObject("2.0.0").getIn([
                        "parameters",
                        "block_interval"
                    ]) *
                    1000
        );

        return (
            <div
                className="grid-content account-card"
                onClick={this._onCardClick.bind(this)}
            >
                <div className="card" style={color}>
                    <h4 className="text-center">
                        #{this.props.rank}: {this.props.master.get("name")}
                    </h4>
                    <div className="card-content">
                        <div className="text-center">
                            <AccountImage
                                account={this.props.master.get("name")}
                                size={{height: 64, width: 64}}
                            />
                        </div>
                        <br />
                        <table className="table key-value-table">
                            <tbody>
                                <tr>
                                    <td>Votes</td>
                                    <td>
                                        <FormattedAsset
                                            amount={total_votes}
                                            asset="1.3.0"
                                            decimalOffset={5}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Last&nbsp;Block</td>
                                    <td>
                                        <TimeAgo
                                            time={new Date(last_aslot_time)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Missed</td>
                                    <td>{master_data.get("total_missed")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
MasterCard = BindToChainState(MasterCard);
MasterCard = withRouter(MasterCard);

class MasterRow extends React.Component {
    static propTypes = {
        master: ChainTypes.ChainAccount.isRequired
    };

    _onRowClick(e) {
        e.preventDefault();
        this.props.history.push(`/account/${this.props.master.get("name")}`);
    }

    // componentWillUnmount() {
    //     ChainStore.unSubFrom("masters", ChainStore.getMasterById( this.props.master.get("id") ).get("id"));
    // }

    render() {
        let {master, isCurrent, rank} = this.props;
        let master_data = ChainStore.getMasterById(this.props.master.get("id"));
        if (!master_data) return null;
        let total_votes = master_data.get("total_votes");

        let master_aslot = master_data.get("last_aslot");
        let color = {};
        if (this.props.most_recent - master_aslot > 100) {
            color = {borderLeft: "1px solid #FCAB53"};
        } else {
            color = {borderLeft: "1px solid #50D2C2"};
        }
        let last_aslot_time = new Date(
            Date.now() -
                (this.props.most_recent - master_aslot) *
                    ChainStore.getObject("2.0.0").getIn([
                        "parameters",
                        "block_interval"
                    ]) *
                    1000
        );

        let currentClass = isCurrent ? "active-master" : "";

        let missed = master_data.get("total_missed");
        let missedClass = classNames(
            "txtlabel",
            {success: missed <= 500},
            {info: missed > 500 && missed <= 1250},
            {warning: missed > 1250 && missed <= 2000},
            {error: missed >= 200}
        );

        return (
            <tr className={currentClass} onClick={this._onRowClick.bind(this)}>
                <td>{rank}</td>
                <td style={color}>{master.get("name")}</td>
                <td>
                    <TimeAgo time={new Date(last_aslot_time)} />
                </td>
                <td>{master_data.get("last_confirmed_block_num")}</td>
                <td className={missedClass}>{missed}</td>
                <td>
                    <FormattedAsset
                        amount={master_data.get("total_votes")}
                        asset="1.3.0"
                        decimalOffset={5}
                    />
                </td>
            </tr>
        );
    }
}
MasterRow = BindToChainState(MasterRow);
MasterRow = withRouter(MasterRow);

class MasterList extends React.Component {
    static propTypes = {
        masters: ChainTypes.ChainObjectsList.isRequired
    };

    constructor() {
        super();
        this.state = {
            sortBy: "rank",
            inverseSort: true
        };

        this.handleBlockIdClick = this.handleBlockIdClick.bind(this);
    }

    _setSort(field) {
        this.setState({
            sortBy: field,
            inverseSort:
                field === this.state.sortBy
                    ? !this.state.inverseSort
                    : this.state.inverseSort
        });
    }

    handleBlockIdClick(blockId) {
        return () => {
            this.props.history.push(`/block/${blockId}`);
        };
    }

    render() {
        let {masters, current, cardView, masterList} = this.props;
        let {sortBy, inverseSort} = this.state;
        let most_recent_aslot = 0;
        let ranks = {};

        masters
            .filter(a => {
                if (!a) {
                    return false;
                }
                return masterList.indexOf(a.get("id")) !== -1;
            })
            .sort((a, b) => {
                if (a && b) {
                    return (
                        parseInt(b.get("total_votes"), 10) -
                        parseInt(a.get("total_votes"), 10)
                    );
                }
            })
            .forEach((w, index) => {
                if (w) {
                    let s = w.get("last_aslot");
                    if (most_recent_aslot < s) {
                        most_recent_aslot = s;
                    }

                    ranks[w.get("id")] = index + 1;
                }
            });

        let dataSource = [];
        if (masters.length > 0 && masters[1]) {
            dataSource = masters
                .filter(a => {
                    if (!a) {
                        return false;
                    }
                    let master = ChainStore.getObject(a.get("master_account"));
                    if (!master) return false;

                    let master_data = ChainStore.getMasterById(
                        master.get("id")
                    );
                    if (!master_data) return false;

                    let name = master.get("name");
                    if (!name) return false;
                    return name.indexOf(this.props.filter) !== -1;
                })
                .map(a => {
                    const master = ChainStore.getObject(
                        a.get("master_account")
                    );

                    const master_data = ChainStore.getMasterById(
                        master.get("id")
                    );

                    let master_aslot = master_data.get("last_aslot");

                    let last_aslot_time = new Date(
                        Date.now() -
                            (this.props.current_aslot - master_aslot) *
                                ChainStore.getObject("2.0.0").getIn([
                                    "parameters",
                                    "block_interval"
                                ]) *
                                1000
                    );

                    return {
                        id: a.get("id"),
                        key: master.get("name"),
                        rank: ranks[a.get("id")],
                        name: master.get("name"),
                        signing_key: master_data.get("signing_key"),
                        url: master_data.get("url"),
                        lastConfirmedBlock: {
                            id: master_data.get("last_confirmed_block_num"),
                            timestamp: last_aslot_time.getTime()
                        },
                        blocksMissed: master_data.get("total_missed"),
                        votes: master_data.get("total_votes")
                    };
                });
        }

        const urlValid = item => {
            const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            return regex.test(item);
        };

        const urlRender = item => {
            return (
                <Popover
                    content={
                        <a href={item} target="_blank">
                            {item}
                        </a>
                    }
                    trigger={"hover"}
                >
                    <Icon type="link" />
                </Popover>
            );
        };

        const keyRender = item => {
            return (
                <Popover content={<span>{item}</span>} trigger={"hover"}>
                    <Icon type="key" />
                </Popover>
            );
        };

        const columns = [
            {
                key: "#",
                title: "#",
                dataIndex: "rank",
                sorter: (a, b) => {
                    return a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0;
                }
            },
            {
                key: "name",
                title: "NAME",
                dataIndex: "name",
                sorter: (a, b) => {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                }
            },
            {
                key: "url",
                title: "URL",
                dataIndex: "url",
                align: "center",
                render: item => (
                    <div style={{width: "100%", textAlign: "center"}}>
                        {(item && urlValid(item) && urlRender(item)) || null}
                    </div>
                )
            },
            {
                key: "lastConfirmedBlock",
                title: "LAST CONFIRMED BLOCK",
                dataIndex: "lastConfirmedBlock",
                render: item => (
                    <span>
                        <a
                            style={{display: "inline-block", minWidth: "100px"}}
                            href="javascript:void(0)"
                            onClick={this.handleBlockIdClick(item.id)}
                        >
                            #{Number(item.id).toLocaleString()}
                        </a>{" "}
                        <TimeAgo time={new Date(item.timestamp)} />
                    </span>
                ),
                sorter: (a, b) => {
                    return a.lastConfirmedBlock.timestamp >
                        b.lastConfirmedBlock.timestamp
                        ? -1
                        : a.lastConfirmedBlock.timestamp <
                          b.lastConfirmedBlock.timestamp
                            ? 1
                            : 0;
                }
            },
            {
                key: "blocksMissed",
                title: "BLOCKS MISSED",
                dataIndex: "blocksMissed",
                render: item => {
                    const blocksMissedClassName = classNames(
                        "txtlabel",
                        {success: item <= 500},
                        {info: item > 500 && item <= 1250},
                        {warning: item > 1250 && item <= 2000},
                        {error: item >= 200}
                    );
                    return (
                        <span className={blocksMissedClassName}>{item}</span>
                    );
                },
                sorter: (a, b) => {
                    return a.blocksMissed > b.blocksMissed
                        ? 1
                        : a.blocksMissed < b.blocksMissed
                            ? -1
                            : 0;
                }
            },
            {
                key: "votes",
                title: "VOTES",
                dataIndex: "votes",
                render: item => (
                    <FormattedAsset
                        amount={item}
                        asset="1.3.0"
                        decimalOffset={5}
                    />
                ),
                sorter: (a, b) => {
                    return a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0;
                }
            },
            {
                key: "key",
                title: "KEY",
                dataIndex: "signing_key",
                align: "center",
                render: item => (
                    <div style={{textAlign: "center", width: "100%"}}>
                        {keyRender(item)}
                    </div>
                )
            }
        ];

        const getRowClassName = record => {
            if (record.id === current) return "active-master";

            return "";
        };

        return (
            <Table
                rowClassName={getRowClassName}
                columns={columns}
                dataSource={dataSource}
                pagination={false}
            />
        );
    }
}
MasterList = BindToChainState(MasterList, {
    show_loader: true
});
MasterList = withRouter(MasterList);

class Masters extends React.Component {
    static propTypes = {
        globalObject: ChainTypes.ChainObject.isRequired,
        dynGlobalObject: ChainTypes.ChainObject.isRequired
    };

    static defaultProps = {
        globalObject: "2.0.0",
        dynGlobalObject: "2.1.0"
    };

    constructor(props) {
        super(props);

        this.state = {
            filterMaster: props.filterMaster || "",
            cardView: props.cardView
        };
    }

    _onFilter(e) {
        e.preventDefault();
        this.setState({filterMaster: e.target.value.toLowerCase()});

        SettingsActions.changeViewSetting({
            filterMaster: e.target.value.toLowerCase()
        });
    }

    _toggleView() {
        SettingsActions.changeViewSetting({
            cardView: !this.state.cardView
        });

        this.setState({
            cardView: !this.state.cardView
        });
    }

    render() {
        let {dynGlobalObject, globalObject} = this.props;
        dynGlobalObject = dynGlobalObject.toJS();
        globalObject = globalObject.toJS();

        let current = ChainStore.getObject(dynGlobalObject.current_master),
            currentAccount = null;
        if (current) {
            currentAccount = ChainStore.getObject(
                current.get("master_account")
            );
        }

        return (
            <div className="grid-block">
                <div className="grid-block">
                    <div className="grid-block">
                        <div className="grid-content ">
                            <div className="explore-master--info">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                <Translate content="explorer.masters.current" />
                                            </th>
                                            <th>
                                                <Translate content="explorer.blocks.active_masters" />
                                            </th>
                                            <th>
                                                <Translate content="explorer.masters.participation" />
                                            </th>
                                            <th>
                                                <Translate content="explorer.masters.pay" />
                                            </th>
                                            <th>
                                                <Translate content="explorer.masters.budget" />
                                            </th>
                                            <th>
                                                <Translate content="explorer.masters.next_vote" />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {currentAccount
                                                    ? currentAccount.get("name")
                                                    : null}
                                            </td>
                                            <td>
                                                {
                                                    Object.keys(
                                                        globalObject.active_masters
                                                    ).length
                                                }
                                            </td>
                                            <td>
                                                {dynGlobalObject.participation}%
                                            </td>
                                            <td>
                                                <FormattedAsset
                                                    amount={
                                                        globalObject.parameters
                                                            .master_pay_per_block
                                                    }
                                                    asset="1.3.0"
                                                />
                                            </td>
                                            <td>
                                                {" "}
                                                <FormattedAsset
                                                    amount={
                                                        dynGlobalObject.master_budget
                                                    }
                                                    asset="1.3.0"
                                                />
                                            </td>
                                            <td>
                                                {" "}
                                                <TimeAgo
                                                    time={
                                                        new Date(
                                                            dynGlobalObject.next_maintenance_time +
                                                                "Z"
                                                        )
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Input
                                placeholder={counterpart.translate(
                                    "explorer.masters.filter_by_name"
                                )}
                                onChange={this._onFilter.bind(this)}
                                style={{
                                    width: "200px",
                                    marginBottom: "12px",
                                    marginTop: "4px"
                                }}
                                addonAfter={<Icon type="search" />}
                            />

                            <MasterList
                                current_aslot={dynGlobalObject.current_aslot}
                                current={current ? current.get("id") : null}
                                masters={Immutable.List(
                                    globalObject.active_masters
                                )}
                                masterList={globalObject.active_masters}
                                filter={this.state.filterMaster}
                                cardView={this.state.cardView}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Masters = BindToChainState(Masters);

class MasterStoreWrapper extends React.Component {
    render() {
        return <Masters {...this.props} />;
    }
}

MasterStoreWrapper = connect(
    MasterStoreWrapper,
    {
        listenTo() {
            return [SettingsStore];
        },
        getProps() {
            return {
                cardView: SettingsStore.getState().viewSettings.get("cardView"),
                filterMaster: SettingsStore.getState().viewSettings.get(
                    "filterMaster"
                )
            };
        }
    }
);

export default MasterStoreWrapper;
