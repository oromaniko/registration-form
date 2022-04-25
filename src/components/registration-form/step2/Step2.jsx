import {number, object} from "yup";
import Country from "./Country";

const yupSchema = object({
    INN: number().required('ИНН должен состоять из 10 цифр'),
});

export default function Step2({setIndex, inputValues, setInputValue}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setIndex(1);
    };

    const handleGoToStep1 = (e) => {
        e.preventDefault();
        setIndex(0);
    };

    return (
        <form className='support-form__form'>
            <h3>Шаг 2: Заполните данные об Организации</h3>
            <div className="popup__tabs">
                <label>
                    <input type="radio" name="type" value="0" />
                    <span>Новая компания</span>
                </label>
                <label onClick={handleSubmit}>
                    <input type="radio" name="type" value="1" />
                    <span>Уже зарегистрирована</span>
                </label>
            </div>
            <div>
                <Country value={inputValues} setValue={setInputValue}/>
                <div className="field__container" label="[object Object],[object Object]">
                    <label className="checkbox">
                        <input type="checkbox" true-value="1" false-value="0" name="clientType" className="" value="1"/>
                        <span className="checkbox__img">
                            <svg className="sprite-customer">
                                <use xmlns="http://www.w3.org/1999/xlink"></use>
                            </svg>
                        </span>
                        <span className="checkbox__body"></span>
                        <span className="checkbox__text">
                            Регистрация в качестве заказчика
                        </span>
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" true-value="1" false-value="0" name="clientType" className="" value="2"/>
                        <span className="checkbox__img">
                            <svg className="sprite-customer">
                                <use xmlns="http://www.w3.org/1999/xlink"></use>
                            </svg>
                        </span>
                        <span className="checkbox__body"></span>
                        <span className="checkbox__text">
                            Регистрация в качестве поставщика
                        </span>
                    </label>
                </div>
                <div className="field__container" label="[object Object],[object Object]">
                    <div className="field__label">Тип организации</div>
                    <label className="radio">
                        <input type="radio" true-value="1" false-value="0" name="Юридическое лицо" value="LEGAL_ENTITY"/>
                        <span className="radio__body"></span>
                        <span className="radio__text">Юридическое лицо</span>
                    </label>
                    <label className="radio">
                        <input type="radio" true-value="1" false-value="0" name="Индивидуальный предприниматель" value="INDIVIDUAL"/>
                        <span className="radio__body"></span>
                        <span className="radio__text">Индивидуальный предприниматель</span>
                    </label>
                </div>
                <label className="input__container field__container" label="ИНН">
                    <span className="field__label">ИНН</span>
                    <div className="relative">
                        <input placeholder="" type="tel" className="field"/>
                        <div className="multiselect__spinner field__spinner" style={{display: "none"}}></div>
                    </div>
                </label>
            </div>
            <div className='btn-flex field__container' onClick={handleGoToStep1}>
                <button className='btn btn--bdr'>
                    Вернуться на шаг 1
                </button>
                <button className='btn' onClick={handleSubmit}>
                    Сохранить и продолжить
                </button>

            </div>
        </form>
    )
}