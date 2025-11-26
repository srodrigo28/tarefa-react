import "./CustomInput.scss"

const CustomInput = ( { label, value, onChange, onEnyterPress } ) => {
    const handKeyDown = (e) => {
        if(e.key === 'Enter'){
            onEnyterPress();
        }
        return
    }
    return(
        <div className="custom-input-container">
            <input 
                type="text" 
                value={value}
                className="custom-input"
                onChange={ (e) => onChange(e) }
                onKeyDown={ (e) => handKeyDown(e) }
            />

            { label ? (
                <label className={`
                    ${value.length > 0 
                        ? "shrink" : "" } 
                        custom-input-label`}>
                    {label}
                </label>
            ) : label }
        </div>
    )
}
export default CustomInput;