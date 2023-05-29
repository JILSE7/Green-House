import { FC } from "react";
import { ModalComponent } from "../../../../components";
import { TermGlosary } from "../../../../interfaces";


import { ReactComponent as EditIcon } from '../../../../assets/svg/edit.svg';
import { ReactComponent as Delete } from '../../../../assets/svg/trash.svg';

const customStyles = {
  content: {
    top: '29px',
    left: '30px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    with: '526px',
    height: '364px',
    padding: '18px 24px',
  },
};


export interface IProps {
  closeModal: () => void;
  state: { isOpen: boolean, cords: { x: number, y: number }, data: TermGlosary };
}


const ModalDefinition: FC<IProps> = ({ closeModal, state }) => {

  const { term, definition, definition_by } = state.data;

  return (
    <ModalComponent
      styles={{
        ...customStyles, overlay:
          { zIndex: 1000, top: `${state.cords.y + 200}px`, left: `${state.cords.x + 200}px`, backgroundColor: 'transparent' },
      }}
      closeModal={closeModal}
      isOpen={state.isOpen}
    >
      <div className="animate__animated animate__fadeIn ">
        <div className="flex justify-between items-start">
          <h2 className="modal_title">{term}d</h2>
          <div className="flex-center">
            <EditIcon className="modal_definition_actions" />

            <Delete className="modal_definition_actions ml-8" />
          </div>
        </div>
        <span className="modal_subtitle">😄 Non-conformity</span>
        <p className="modal_definition">
          {definition}
        </p>

        <span>Definition by</span>
        <blockquote cite="https://www.ejemplo.com/articulo">
          <p style={{ color: "#3B82F6" }}>{definition_by}</p>
        </blockquote>
      </div>
    </ModalComponent>
  )
}

export default ModalDefinition;