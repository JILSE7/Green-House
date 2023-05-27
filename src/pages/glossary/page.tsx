import { Hero, AbcMenu } from "./components/"
import { useLetter } from "../../hooks";
import GlossaryList from "./components/list/glossaryList.component";

const GlossaryPage = () => {
  const { handleLetterActive, letterActive } = useLetter();
  return (
    <section>
      <Hero />
      <div className="glossary_abc_container">
        <AbcMenu handleLetterActive={handleLetterActive} letterActive={letterActive} />
        <GlossaryList letterActive={letterActive} />
      </div>
    </section >
  )
}

export default GlossaryPage