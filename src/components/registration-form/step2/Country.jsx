import {useState} from "react";

const countries = ['Россия', 'Абхазия', 'Грузия', 'Молдова']
export default function Country({value, setValue}) {
    const [isSelectVisible, setSelectVisible] = useState(false);

    const handleClick = (name) => (e) => {
        e.preventDefault();
        setValue((prev) => ({
            ...prev,
            country: name,
        }))
    }
    return (
        <label className="field__container select__container field__container" label="Страна регистрации">
            <span className="field__label">Страна регистрации</span>
            <input type="hidden" value="[object Object]"/>
            <div className="relative">
                <div tabIndex="0" className="multiselect form-select field" onClick={() => setSelectVisible(!isSelectVisible)}>
                    <div className="multiselect__select"></div>
                    <div className="multiselect__tags">
                        <div className="multiselect__tags-wrap" style={{display: "none"}}></div>
                        <div className="multiselect__spinner" style={{display: "none"}}></div>
                        <span className="multiselect__single">{value.country}</span>
                    </div>
                    {isSelectVisible && (
                        <div tabIndex="-1" className="multiselect__content-wrapper" style={{maxHeight: "300px"}}>
                            <ul className="multiselect__content" style={{display: "inline-block"}}>
                                {countries.map((name,index) => (
                                    <li key={index} className="multiselect__element" onClick={handleClick(name)}>
                                        <span data-select="" data-selected="" data-deselect="" className="multiselect__option multiselect__option--highlight multiselect__option--selected">
                                            <span>{name}</span></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </label>
    )
}