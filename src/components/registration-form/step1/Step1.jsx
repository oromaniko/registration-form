import { object, string, ref } from 'yup';
import {useState} from "react";
import formSchema from "./shema";

const yupSchema = object({
    lastName: string().required(),
    firstName: string().required(),
    email: string().email().required(),
    job: string(),
    phone: string().required(),
    password: string().min(7).required(),
    confirmPassword: string().oneOf([ref('password'), null], 'Пароли должны совпадать'),
});

export default function Step1({setIndex, inputValues, setInputValue}) {
    const [validationError, setValidationError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationError('')
        try {
            yupSchema.validateSync(inputValues);
            setIndex(1);

        } catch (err) {
            setValidationError(String(err));
        }
    };

    return (
        <form className='support-form__form'>
            <h3>Шаг 1: Заполните Личные данные</h3>
            {Object.keys(formSchema).map((name, index) => {
                const Input = formSchema[name].component;
                return (<Input
                    key={index}
                    name={name}
                    label={formSchema[name].label}
                    value={inputValues[name]}
                    setValue={setInputValue}
                />)
            })}
            {validationError && <div style={{color: 'red'}}>{validationError}</div>}
            <div className='field__container'>
                <button className='btn' onClick={handleSubmit}>
                    Сохранить и продолжить
                </button>
            </div>
        </form>
    )
}