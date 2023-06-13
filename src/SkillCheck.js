import { useContext, useEffect, useState } from 'react';
import { SKILL_LIST } from './consts.js';
import { CharacterContext } from './PlayerCharacter';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function SkillCheck(props) {
    // the value changes for attributes are detected by this
    const { stats } = useContext(CharacterContext);
    const [ skillList, setSkillList ] = useState([]);

    useEffect(()=>{
      Object.entries(SKILL_LIST).map(([key, value])=>{setSkillList(skillList.concat(value.name))})
    }, [SKILL_LIST]);

    // for requirement 9 - didn't have time to completely implement
    const handleRollResult = () => {
    }

    // for requirement 10 - I would try to make this component span across all the saved PlayerCharacter components
    // and then find the one with the highest stat for the skill and use that to roll

    return (
      <div className="SkillCheck">
        Skill Check:
        <Dropdown options={props.options} placeholder='Select an skill...' />
        <label>DC:
          <input type="text"/>
        </label>
        <button onClick={()=>handleRollResult}>Roll</button>
      </div>
    )
  }

  export default SkillCheck;