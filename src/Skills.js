import { useContext, useEffect, useState } from 'react';
import { CharacterContext } from './PlayerCharacter';

function Skills(props) {
    // the value changes for attributes are detected by this
    const { stats } = useContext(CharacterContext);
    // used to store the counter to add skill points
    const [points, setPoints] = useState(0);
    // used to track total skill value (skill points + modifier boost)
    const [skillValue, setSkillValue] = useState(0);
    // used to set the skill modifier for each attribute but never used directly
    // design would change as allotted time permits
    const [skillModifier, setSkillModifier] = useState(0);
    // used to store all the attributes and modifiers
    // with time, I would shift this to the Attribute component and have it be sent as part of the 'stat' store
    const [attributeModifiers, setAttributeModifiers] = useState({
        'Strength': 0, 
        'Dexterity': Math.floor((stats.Dexterity - 10) / 2),
        'Intelligence': Math.floor((stats.Intelligence - 10) / 2),
        'Constitution': Math.floor((stats.Constitution - 10) / 2),
        'Charisma': Math.floor((stats.Charisma - 10) / 2),
        'Wisdom': Math.floor((stats.Wisdom - 10) / 2)
    });
    // for requirement 5 - partially complete, excluding error and boundary checking
    const minToSpend = 0;
    const maxToSpend = 10 + (4 * Math.floor((stats.Intelligence - 10) / 2)); // error popup if exceeded

    // this is really messy... would refactor after store is updated in Attribute component
    // shouldn't it be 10+numMod+points in order to see DC? atm, this is use is only good for rolling, not DC checks (UI design upgrade maybe?)
    // note that the example for Acrobatics - points: 3 [+] [-] modifier (Dex): 2 total: 5 is wrong if Dex is 12, it'd be +1 modifier, not +2
    useEffect(()=>{
        if ( props.props.attributeModifier == 'Strength') {
            setAttributeModifiers((prevValue) => ({
                ...prevValue,
                [props.props.attributeModifier]: Math.floor((stats.Strength - 10) / 2)
            }))
            setSkillModifier(Math.floor((skillValue - 10) / 2));
        } else if ( props.props.attributeModifier == 'Dexterity') {
            setAttributeModifiers((prevValue) => ({
                ...prevValue,
                [props.props.attributeModifier]: Math.floor((stats.Dexterity - 10) / 2)
            }))
            setSkillModifier(Math.floor((skillValue - 10) / 2));
        } else if ( props.props.attributeModifier == 'Intelligence') {
            setAttributeModifiers((prevValue) => ({
                ...prevValue,
                [props.props.attributeModifier]: Math.floor((stats.Intelligence - 10) / 2)
            }))
            setSkillModifier(Math.floor((skillValue - 10) / 2));
        } else if ( props.props.attributeModifier == 'Constitution') {
            setAttributeModifiers((prevValue) => ({
                ...prevValue,
                [props.props.attributeModifier]: Math.floor((stats.Constitution - 10) / 2)
            }))
            setSkillModifier(Math.floor((skillValue - 10) / 2));
        } else if ( props.props.attributeModifier == 'Charisma') {
            setAttributeModifiers((prevValue) => ({
                ...prevValue,
                [props.props.attributeModifier]: Math.floor((stats.Charisma - 10) / 2)
            }))
            setSkillModifier(Math.floor((skillValue - 10) / 2));
        } else if ( props.props.attributeModifier == 'Wisdom') {
            setAttributeModifiers((prevValue) => ({
                ...prevValue,
                [props.props.attributeModifier]: Math.floor((stats.Wisdom - 10) / 2)
            }))
            setSkillModifier(Math.floor((skillValue - 10) / 2));
        } 
    }, [stats]);

    useEffect(()=>{
        setSkillValue(points + attributeModifiers[props.props.attributeModifier]);
    }, [points]);
    
  
    return (
      <div className="Skills">
        {props.props.name}:
        <text id={props.props.name}>{points}</text>
        (Modifier: {props.props.attributeModifier}) :
        {attributeModifiers[props.props.attributeModifier]}
        <button onClick={() => {setPoints(points + 1)}}>+</button>
        <button onClick={() => {setPoints(points - 1)}}>-</button>
        total : {skillValue}
      </div>
    )
  }

  export default Skills;