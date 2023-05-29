import { useCallback, useState } from "react";
import { TermGlosary } from "../interfaces";


interface IState {
  isOpen: boolean,
  cords: {x: number, y: number},
  data: TermGlosary
}

const initialState: IState = {
  isOpen: false,
  cords: {x: 0, y: 0},
  data: {definition: '', definition_by: '', glossary_sets: [], term: '', type: '', id: ''}
}


const modalMap = ['modal_subtitle', 'modal_definition', 'modal_title', 'modal_container', 'glossary_abc_content_card_terms_item', 'animate__animated'];

const useDefinitionModal = () => {
  const [ModalState, setModalState] = useState<IState>(initialState);

  function closeModal() {
    setModalState(initialState);
  }

  function openModal (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, data: TermGlosary) {
    closeModal();
    const id = setTimeout(() => {
      const {pageX, pageY} = e;
      setModalState({isOpen: true, cords: {x: pageX, y: pageY}, data});
      clearTimeout(id);
    }, 50);
  }

  const closeOutsideModal = useCallback((e: any) => {
      if (modalMap.includes(e.target.classList[0])) return 
      closeModal();

      window.removeEventListener('click', closeOutsideModal);
    }, []);


  document.addEventListener('click', closeOutsideModal);
  

  return {
    openModal, 
    closeModal,
    ModalState
  }
};

export default useDefinitionModal;