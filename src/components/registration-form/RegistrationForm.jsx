import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import RegistrationInfo from "./RegistrationInfo";

const steps = [Step1, Step2]

export default function RegistrationForm({index, setIndex}) {
    const Step = steps[index];
    return (
        <div className='stepper-body'>
            <div className='row between-xs'>
                <div className='col col-lg-5 col-md-6 col-xs-12 registration__form'>
                    <Step setIndex={setIndex}/>
                </div>
                <RegistrationInfo />
            </div>
        </div>
    )
}