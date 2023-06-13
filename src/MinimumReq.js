function MinimumReq(props) {
    const classRequirementsName = props.character + props.name + 'CharacterClassRequirements';
    return (
            <div className={classRequirementsName}>
                {props.key} : {props.value}
            </div>
        )
}

export default MinimumReq;