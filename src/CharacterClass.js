import { useContext, useEffect, useState } from 'react';
import { CharacterContext } from './PlayerCharacter';

function CharacterClass(props) {
    // the value changes for attributes are detected by this
    const { stats, handleToggleReq } = useContext(CharacterContext);
    // these are used to store if the min req have been met and what color the text should then switch to
    const [textColor, setTextColor] = useState({color: 'rgb(177, 173, 173)'});
    const [validClass, setValidClass] = useState(false);

    // for requirement 2 - complete
    // based on the changes in stats and validClass, the colour of the class is toggled based on its min req 
    // (grey being unmet and red being met)
    useEffect(()=>{
        ((stats.Strength >= props.minimumReqs.Strength) 
        && (stats.Dexterity >= props.minimumReqs.Dexterity)
        && (stats.Intelligence >= props.minimumReqs.Intelligence) 
        && (stats.Constitution >= props.minimumReqs.Constitution)
        && (stats.Charisma >= props.minimumReqs.Charisma) 
        && (stats.Wisdom >= props.minimumReqs.Wisdom)) ? setValidClass(true) : setValidClass(false);
        validClass ? setTextColor({color: 'rgb(204, 13, 13)'}) : setTextColor({color: 'rgb(177, 173, 173)'});
    }, [stats, validClass]);
    
    return (
        <button className="CharacterClass" style={textColor} 
        onClick={() => {handleToggleReq([true, props.name, props.minimumReqs])}}>{props.name}</button>
    )
  }

  export default CharacterClass;