/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import PDFViewer from './PDFViewer';

ReactModal.setAppElement('#app');

class Modal extends PureComponent {
  constructor() {
    super();
    this.state = {
      showModal: false,
      url: ''
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { trigger: Trigger, content } = this.props;
    const { url } = this.state;

    return (
      <div>
        <div onClick={this.handleOpenModal}>
          <Trigger />
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <PDFViewer
            url={content && url}
            id={content && content.id}
            showall
            outline={content && content.outline}
          />
          <button onClick={this.handleCloseModal} type="button">
            Close Modal
          </button>
        </ReactModal>
      </div>
    );
  }
}

Modal.propTypes = {
  trigger: PropTypes.string,
  content: PropTypes.string
};

Modal.defaultProps = {
  trigger: '',
  content: ''
};

export default Modal;
