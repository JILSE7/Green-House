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


const modalMap = ['modal_subtitle', 'modal_definition', 'modal_definition_actions', 'modal_actions',  'modal_title', 'modal_container', 'glossary_abc_content_card_terms_item', 'animate__animated'];

const useDefinitionModal = () => {
  const [ModalState, setModalState] = useState<IState>(initialState);
  

  function closeModal() {
    setModalState(initialState);
  }

  function openModal (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, data: TermGlosary) {
    // closeModal();
/*     const id = setTimeout(() => {
      // const {pageX, pageY} = e;
      const left = e.target.offsetLeft! || 0;
      const top = e.target.offsetTop! || 0;
      setModalState({isOpen: true, cords: {x: left, y: top}, data});
      clearTimeout(id);
    }, 100); */
/*     console.log({e});
    const left = e.relatedTarget.offsetLeft! || 0;
    const x = e.clientX;
    const y = e.clientY;
    console.log({x, y});
    const mouseX = e.clientX + window.scrollX;
    const mouseY = e.clientY + window.scrollY;
    
    const {pageX, pageY} = e;
    const top = e.relatedTarget.offsetTop! || 0; */


    const element = e.target;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementLeft = rect.left + window.scrollX;

    setModalState({isOpen: true, cords: {x: elementLeft, y: elementTop}, data});
  }

  const closeClickOutsideModal = useCallback((e: any) => {
      if (modalMap.includes(e.target.classList[0])) return 
      closeModal();

      window.removeEventListener('click', closeClickOutsideModal);
    }, []);


  document.addEventListener('click', closeClickOutsideModal);
  

  return {
    openModal, 
    closeModal,
    ModalState
  }
};

export default useDefinitionModal;