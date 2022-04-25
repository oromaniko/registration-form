import {useState} from "react";
import StepperHeader from "./StepperHeader";
import StepperBody from "./stepper-body/StepperBody";

export default function RegistrationForm() {
    const [stepIndex, setStepIndex] = useState(0);

    return (
        <div className='section section--green section--registration registration'>
            <div className='container'>
                <div className='registration'>
                    <div className='stepper'>
                        <StepperHeader index={stepIndex}/>
                        <StepperBody index={stepIndex} setIndex={setStepIndex} />
                    </div>
                </div>
            </div>
        </div>
    )
}