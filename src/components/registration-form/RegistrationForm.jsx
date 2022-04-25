import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import RegistrationInfo from "./RegistrationInfo";
import {useState} from "react";

const steps = [Step1, Step2]

export default function RegistrationForm({index, setIndex}) {
    const [step1InputValues, setStep1InputValue] = useState({
        lastName: '',
        firstName: '',
        email: '',
        job: '',
        phone: '',
        password: '',
        confirmPassword: '',
    })

    const [step2InputValues, setStep2InputValue] = useState({
        country: 'Россия',
    })

    const inputValues = {
        0: {
            values: step1InputValues,
            setValue: setStep1InputValue,
        },
        1: {
            values: step2InputValues,
            setValue: setStep2InputValue,
        }
    }

    const Step = steps[index];
    return (
        <div className='stepper-body'>
            <div className='row between-xs'>
                <div className='col col-lg-5 col-md-6 col-xs-12 registration__form'>
                    <Step setIndex={setIndex} inputValues={inputValues[index].values} setInputValue={inputValues[index].setValue}/>
                </div>
                <RegistrationInfo />
            </div>
        </div>
    )
}