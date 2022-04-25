export default function StepperHeader({index}) {
    return (
        <div className='stepper-header'>
            {[0, 1, 2].map((dot) => {
                const isComplete = dot <= index ? 'complete' : ''
                return (
                    <div className={`stepper-point ${isComplete}`}></div>
                )
            })}
        </div>
    )
}