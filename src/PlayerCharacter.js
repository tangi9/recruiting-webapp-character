import { createContext, useContext, useEffect, useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import Attribute from './Attribute';
import CharacterClass from './CharacterClass';
import MinimumReq from './MinimumReq';
import Skill from './Skills';
import SkillCheck from './SkillCheck.js';

const CharacterContext = createContext();

function PlayerCharacter(props) {
    // for requirement 1 and 2 - complete
    const [stats, setStats] = useState({'Strength': 10, 'Dexterity': 10, 'Intelligence': 10, 'Constitution': 10, 'Charisma': 10, 'Wisdom': 10});
    
    // for requirement 3 - not complete
    const [toggleMinimumReqs, setToggleMinimumReqs] = useState(false);
    const [minimumReqs, setMinimumReqs] = useState([]);
    // for requirement 7 - not complete
    const totalPoints = 70; // error popup if exceeded

    // to update context as Attribute fields are updated
    const handleStatUpdate = ([key, value]) => {
        setStats((prevValue) => ({
            ...prevValue,
            [key]: value
        }));
    }

    // to update toggle of minimum requirements - not complete
    const handleToggleReq = ([toggle, name, requirements]) => {
        console.log(toggle);
        setToggleMinimumReqs(toggle);
        if (toggle) {
            setMinimumReqs([name, requirements]);
        }
    }

    return (
        <CharacterContext.Provider value={{stats, onValueChange: handleStatUpdate}}>
            <div id={props.name}>
                <section className="SkillCheck-section">
                    <h2>Skill Check</h2>
                    {<SkillCheck options={Object.entries(SKILL_LIST).map(([skillListKey, skillListValue]) => {return skillListValue.name})}/>}
                </section>
                <div className='CharacterBuilder'>
                    <section className="Attribute-section">
                        <h2>Attributes</h2>
                        {ATTRIBUTE_LIST.map((attribute) => {return <Attribute attribute={attribute} onValueChange={handleStatUpdate}/>})}
                    </section>
                    <section className="Class-section">
                        <h2>Classes</h2>
                        {Object.entries(CLASS_LIST).map(([classKey, classValue]) => {return <CharacterClass name={classKey} minimumReqs={classValue} />})} {/*onToggleReq={handleToggleReq}/>})} */}
                    </section>
                    {/* resume this later if time
                    {toggleMinimumReqs && 
                        <section className="Class-minimum-requirements-section">
                            <h2>{minimumReqs.name} Minimum Requirements</h2>
                            {minimumReqs.requirements.map(([reqKey, reqValue]) => {return <MinimumReq key={reqKey} value={reqValue}/>})}
                            <button onclick={() => handleToggleReq([false, props.name, props.minimumReqs])}>Close Requirement View</button>
                        </section>
                    } */}
                    <section className="Skill-section">
                        <h2>Skills</h2>
                        {Object.entries(SKILL_LIST).map(([skillListKey, skillListValue]) => {return <Skill props={skillListValue}/>})}
                    </section>
                </div>  
            </div>
        </CharacterContext.Provider>
    )
}

export default PlayerCharacter;
export { CharacterContext };
