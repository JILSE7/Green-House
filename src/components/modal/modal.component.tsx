import { FC } from "react";

import Modal from 'react-modal';

Modal.setAppElement('#root');


export interface IProps {
  closeModal : () => void;
  styles     : Modal.Styles;
  children   : React.ReactNode;
  isOpen     : boolean;
}

const ModalComponent: FC<IProps> = ({ closeModal, styles, children, isOpen }) => {

  return (
    <div className="modal_container" onMouseLeave={() => closeModal()}>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}  
        style={styles}
      >
        {
          children
        }
      </Modal>
    </div >
  )
};

export default ModalComponent;
