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
    transform: 'translate(0, -50%)',
    with: '526px',
    height: 'auto',
    padding: '18px 24px',
    border: 'none',
    boxShadow: '0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)'
    
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
          { zIndex: 1000, top: `${state.cords.y + (term.length >= 25 ? 190 : 170) }px`, left: `${state.cords.x - 46}px`, backgroundColor: 'transparent', boxShadow: '' },
      }}
      closeModal={closeModal}
      isOpen={state.isOpen}
    >
      
        <div className="animate__animated animate__fadeIn modal_actions flex justify-between items-start">
          <h2 className="modal_title">{term}</h2>
          <div className="flex-center actions">
            <EditIcon className="modal_definition_actions cursor-pointer" />

            <Delete className="modal_definition_actions ml-8 cursor-pointer" />
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
    </ModalComponent>
  )
}

export default ModalDefinition;