import React from "react";
import {connect} from "alt-react";
import {ChainStore} from "zcomjs";
import Translate from "react-translate-component";
import cnames from "classnames";
import MarketsStore from "stores/MarketsStore";
import SettingsActions from "actions/SettingsActions";
import SettingsStore from "stores/SettingsStore";
import utils from "common/utils";
import PaginatedList from "../Utility/PaginatedList";
import MarketsRow from "./MarketsRow";

class MarketsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: "",
            showFlip: false,
            showHidden: false,
            markets: [],
            sortBy: "volumeQuote",
            sortDirection: true
        };

        this.update = this.update.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.update(nextProps);
    }

    componentWillMount() {
        this.update();
        ChainStore.subscribe(this.update);
    }

    componentWillUnmount() {
        ChainStore.unsubscribe(this.update);
    }

    _onToggleSort(key) {
        if (key === this.state.sortBy) {
            return this.setState({sortDirection: !this.state.sortDirection});
        }
        this.setState({sortBy: key});
    }

    update(nextProps = null) {
        let props = nextProps || this.props;
        let showFlip = props.forceDirection;

        if (props.markets && props.markets.size > 0) {
            let markets = props.markets
                .toArray()
                .map(market => {
                    let quote = ChainStore.getAsset(market.quote);
                    let base = ChainStore.getAsset(market.base);
                    if (!base || !quote) return null;
                    let marketName = `${market.base}_${market.quote}`;

                    return {
                        key: marketName,
                        inverted: undefined,
                        quote: market.quote,
                        base: market.base,
                        isHidden: props.hiddenMarkets.includes(marketName),
                        isFavorite: props.isFavorite,
                        marketStats: props.allMarketStats.get(marketName, {}),
                        isStarred: this.props.starredMarkets.has(marketName)
                    };
                })
                .filter(a => a !== null);
            this.setState({showFlip, markets});
        }
    }

    _toggleShowHidden(val) {
        if (this.state.showHidden === val) return;

        this.setState({
            showHidden: val
        });
    }

    _handleFilterInput(e) {
        e.preventDefault();
        this.setState({filter: e.target.value.toUpperCase()});
    }

    _handleHide(row, status) {
        if (this.props.handleHide) {
            return this.props.handleHide(row, status);
        }

        SettingsActions.hideMarket(row.key, status);
    }

    _handleFlip(row, status) {
        if (this.props.handleFlip) {
            return this.props.handleFlip(row, status);
        }

        SettingsActions.changeMarketDirection({
            [row.key]: status
        });
    }

    render() {
        let {markets, showFlip, showHidden, filter} = this.state;

        const marketRows = markets
            .filter(m => {
                if (!!filter || m.isStarred) return true;
                if (
                    this.props.onlyLiquid &&
                    (m.marketStats && "volumeBase" in m.marketStats)
                ) {
                    return !!m.marketStats.volumeBase;
                } else {
                    return true;
                }
            })
            .sort((a, b) => {
                const {sortBy, sortDirection} = this.state;

                switch (sortBy) {
                    case "price":
                        if (a.marketStats.price && b.marketStats.price) {
                            if (sortDirection) {
                                return (
                                    b.marketStats.price.toReal() -
                                    a.marketStats.price.toReal()
                                );
                            }

                            return (
                                a.marketStats.price.toReal() -
                                b.marketStats.price.toReal()
                            );
                        }
                        break;

                    case "change":
                        if (sortDirection) {
                            return (
                                parseFloat(b.marketStats[sortBy]) -
                                parseFloat(a.marketStats[sortBy])
                            );
                        } else {
                            return (
                                parseFloat(a.marketStats[sortBy]) -
                                parseFloat(b.marketStats[sortBy])
                            );
                        }

                        break;

                    default:
                        if (sortDirection) {
                            return (
                                b.marketStats[sortBy] - a.marketStats[sortBy]
                            );
                        } else {
                            return (
                                a.marketStats[sortBy] - b.marketStats[sortBy]
                            );
                        }
                }
            })
            .map(row => {
                let visible = true;

                if (row.isHidden !== this.state.showHidden) {
                    visible = false;
                } else if (filter) {
                    const quoteObject = ChainStore.getAsset(row.quote);
                    const baseObject = ChainStore.getAsset(row.base);

                    const {isBitAsset: quoteIsBitAsset} = utils.replaceName(
                        quoteObject
                    );
                    const {isBitAsset: baseIsBitAsset} = utils.replaceName(
                        baseObject
                    );

                    let quoteSymbol = row.quote;
                    let baseSymbol = row.base;

                    if (quoteIsBitAsset) {
                        quoteSymbol = "bit" + quoteSymbol;
                    }

                    if (baseIsBitAsset) {
                        baseSymbol = "bit" + baseSymbol;
                    }

                    const filterPair = filter.includes(":");

                    if (filterPair) {
                        const quoteFilter = filter.split(":")[0].trim();
                        const baseFilter = filter.split(":")[1].trim();

                        visible =
                            quoteSymbol
                                .toLowerCase()
                                .includes(String(quoteFilter).toLowerCase()) &&
                            baseSymbol
                                .toLowerCase()
                                .includes(String(baseFilter).toLowerCase());
                    } else {
                        visible =
                            quoteSymbol
                                .toLowerCase()
                                .includes(String(filter).toLowerCase()) ||
                            baseSymbol
                                .toLowerCase()
                                .includes(String(filter).toLowerCase());
                    }
                }

                if (!visible) return null;

                return (
                    <MarketsRow
                        {...row}
                        handleHide={this._handleHide.bind(
                            this,
                            row,
                            !row.isHidden
                        )}
                        handleFlip={this._handleFlip.bind(
                            this,
                            row,
                            !row.inverted
                        )}
                        starredMarkets={this.props.starredMarkets}
                    />
                );
            })
            .filter(r => !!r);
        return <div />;
    }
}

export default connect(
    MarketsTable,
    {
        listenTo() {
            return [SettingsStore, MarketsStore];
        },
        getProps() {
            let {marketDirections, hiddenMarkets} = SettingsStore.getState();
            return {
                marketDirections,
                hiddenMarkets,
                allMarketStats: MarketsStore.getState().allMarketStats,
                starredMarkets: SettingsStore.getState().starredMarkets,
                onlyLiquid: SettingsStore.getState().viewSettings.get(
                    "onlyLiquid",
                    true
                )
            };
        }
    }
);
