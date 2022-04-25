import MultiSelect from "./MultiSelect";
import {useState} from "react";
import {countries} from "./countries";
import InputMask from 'react-input-mask';

export default function PhoneInput({name, label, value, setValue}) {
    const [isSelectVisible, setIsSelectVisible] = useState(false);
    const [currentCountry, setCurrentCountry] = useState(countries[0]);
    const handleSelectVisible = (e) => {
        e.preventDefault();
        setIsSelectVisible(!isSelectVisible);
    }
    const handleChange = (e) => {
        setValue((prev) => ({
            ...prev,
            [name]: e.target.value,
        }))
    }

    return (
        <div data-v-493f45f2="" className="phone-container">
            <div data-v-493f45f2="" className="support-form__item">
                <span data-v-493f45f2="" className="field__label">Телефон</span>
                <div data-v-35853040="" data-v-493f45f2="" className="phone-container__item phone-container__item--select" onClick={handleSelectVisible}>
                    <div data-v-35853040="" tabIndex="0" className="multiselect phone-code form-select" deselect-label="Can't remove this value" item-value="id" return-object="">
                        <div className="multiselect__select"></div>
                        <div className="multiselect__tags">
                            <div className="multiselect__tags-wrap" style={{display: "none"}}></div>
                            <div className="multiselect__spinner" style={{display: "none"}}></div>
                            <span className="multiselect__single">
                                <div data-v-35853040="" className="phone-code-block">
                                    <img data-v-35853040="" src={currentCountry.img} alt="" />
                                </div>
                            </span>
                        </div>
                        {isSelectVisible && <MultiSelect setCountry={setCurrentCountry}/>}
                    </div>
                </div>
            </div>
            <div data-v-493f45f2="" className="support-form__item support-form__phone">
                <label data-v-493f45f2="" className="input__container field__container">
                    <div className="relative">
                        <InputMask mask={`+${currentCountry.code} 999-999-99-99`} placeholder="" type="tel" className="field" value={value} name={label} onChange={handleChange}/>
                        <div className="multiselect__spinner field__spinner" style={{display: "none"}}></div>
                    </div>
                </label>
            </div>
        </div>
    )
}