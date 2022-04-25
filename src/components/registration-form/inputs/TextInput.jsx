export default function TextInput({name, label, value, setValue}) {
    const handleChange = (e) => {
        setValue((prev) => ({
            ...prev,
            [name]: e.target.value,
        }))
    }

    return (
        <label className='input__container field__container' label={label}>
            <span className='field__label'>{label}</span>
            <div className='relative'>
                <input type='text' className='field' name={name} value={value} onChange={handleChange}/>
                <div className='multiselect__spinner field__spinner' style={{display: 'none'}}></div>
            </div>
        </label>
    )
}