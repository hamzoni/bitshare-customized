import React from "react";
import TransactionBanner from "./TransactionBanner";
import "bulma/css/bulma.css";

class TransactionHeader extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="columns tq-w-100">
                            <div className="column">
                                <span className="tq-transaction-wrapper">
                                    <TransactionBanner />
                                </span>
                            </div>
                        </div>
                        <div className="columns tq-w-100">
                            <div className="column">
                                <button className="btn-tq-transaction">
                                    X
                                </button>
                            </div>
                            <div className="column">
                                <button className="btn-tq-transaction">
                                    X
                                </button>
                            </div>
                            <div className="column">
                                <button className="btn-tq-transaction">
                                    X
                                </button>
                            </div>
                            <div className="column">
                                <button className="btn-tq-transaction">
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TransactionHeader;
