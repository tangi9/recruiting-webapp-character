import { useContext, useState } from 'react';
import { CharacterContext } from './PlayerCharacter';

function Attribute(props) {
    // the value changes for attributes are transmitted by this
    const { onValueChange } = useContext(CharacterContext);
    // this stores the increment/decremented value
    const [points, setPoints] = useState(10);
    // for requirement 4 - complete
    const attributeModifier = Math.floor((points - 10) / 2);
  
    return (
      <div className="Attribute">
        {props.attribute}:
        <text className={props.attribute}>{points}</text>
        (Modifier: {attributeModifier})
        <button onClick={() => {setPoints(points + 1); onValueChange([props.attribute, points + 1]);}}>+</button>
        <button onClick={() => {setPoints(points - 1); onValueChange([props.attribute, points - 1]);}}>-</button>
      </div>
    )
  }

  export default Attribute;