import { useContext } from "react";
import {Card, Divider} from "../../../../components";
import Button from "../../../../components/button/button.component";
import InputSearch from "./../inputSearch";
import { GlossaryContext } from "../../../../context/glossary/GlossaryContext";



const Hero = () => {

  const { filterBySearch } = useContext(GlossaryContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const search = e.target.value.trim().toLocaleLowerCase(); 
   filterBySearch(search)
  }

  return (
    <Card className="hero_card_container" style={{width: '1116px'}}>
      <div className="flex-between mb-4">
        <h3 className="hero_card_glossary">Glossary</h3>
        <Button title="New World" />
      </div>
      <Divider />

      <div className="hero_card_main flex-between">
        <div className="hero_card_main_title">
          <h1 className="hero_card_title mb-2">If you are looking for definitions of a term, find it here</h1>
          <p className="mb-6" >If you need clarification on a word or just want to brush up on your team knowledge, our glossary is here for you.</p>
          <InputSearch onChange={handleChange}  />
        </div>
        <div className="relative border">
          <div className="hero_card_main_mural_willowy" />
          <div className="hero_card_main_mural_williwy_open_book" />
          <div className="hero_card_main_mural_williwy_stack_books" />
        </div>
      </div>
    </Card>
  )
}

export default Hero;