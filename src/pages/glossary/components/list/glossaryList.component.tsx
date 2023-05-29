import { FC, useContext, useId } from "react";
import { GlossaryContext } from "../../../../context/glossary/GlossaryContext";
import { Card, Divider } from "../../../../components";
import GlossaryColumns from "./column/glossaryColumn.component";
import useDefinitionModal from "../../../../hooks/useDefinitionModal";
import ModalDefinition from "../modal/modalDefinition.component";


interface IProps {
  letterActive: string,
}

const GlossaryList: FC<IProps> = ({ letterActive }) => {
  const reactId = useId();
  const { state: { glossaryByLetter, glossaryBySearch } } = useContext(GlossaryContext);
  const {ModalState, closeModal, openModal} = useDefinitionModal();

  return (
    <div className="glossary_abc_content">
      {
        Object.entries(Object.keys(glossaryBySearch).length > 0 ? glossaryBySearch : glossaryByLetter).map(([letter, colums], i, array) => (
          <div className="w-full" key={reactId + letter}>
            <Card className="glossary_abc_content_card border-none  shadow-none" style={{ width: '100%' }}>
              <div className={`glossary_abc_content_card_letter ${letterActive === letter && 'glossary_abc_content_card_letter_active'}`}>
                <span>{letter}</span>
              </div>
              <GlossaryColumns data={colums} openModal={openModal} />
            </Card>
              {
                i !== array.length - 1 && <Divider style={{ marginTop: 24, marginBottom: 24 }} />
              }
          </div>
        ))
      }

      <ModalDefinition closeModal={closeModal} state={ModalState}/>
    </div>
  )
}

export default GlossaryList;