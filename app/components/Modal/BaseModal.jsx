import React from "react";
import PropTypes from "prop-types";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import Modal from "react-foundation-apps/src/modal";
import Trigger from "react-foundation-apps/src/trigger";

class BaseModal extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.modalEscapeListener = function(e) {
            if (e.keyCode === 27) {
                ZfApi.publish(this.props.id, "close");
            }
        }.bind(this);

        document.addEventListener("keydown", this.modalEscapeListener);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.modalEscapeListener);
    }

    render() {
        const {props} = this;
        const {
            id,
            overlay,
            onClose,
            overlayClose,
            noCloseBtn,
            children
        } = props;

        return (
            <Modal
                id={id}
                overlay={overlay}
                onClose={onClose}
                overlayClose={overlayClose}
                style={{
                    bottom: {
                        width: "auto"
                    }
                }}
            >
                <div className="modal-header ">
                    {!noCloseBtn && (
                        <Trigger close={id}>
                            <a href="#" className="close-button">
                                &times;
                            </a>
                        </Trigger>
                    )}
                </div>
                <div className="modal-content ">{children}</div>
            </Modal>
        );
    }
}

BaseModal.defaultProps = {
    overlay: false
};

BaseModal.propTypes = {
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    className: PropTypes.string,
    overlay: PropTypes.bool,
    overlayClose: PropTypes.bool,
    noCloseBtn: PropTypes.bool
};

export default BaseModal;
