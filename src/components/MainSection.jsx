import {useState} from "react";
import StepperHeader from "./StepperHeader";
import RegistrationForm from "./registration-form/RegistrationForm";

export default function MainSection() {
    const [stepIndex, setStepIndex] = useState(0);

    return (
        <div className='section section--green section--registration registration'>
            <div className='container'>
                <div className='registration'>
                    <div className='stepper'>
                        <StepperHeader index={stepIndex}/>
                        <RegistrationForm index={stepIndex} setIndex={setStepIndex} />
                    </div>
                </div>
            </div>
        </div>
    )
}