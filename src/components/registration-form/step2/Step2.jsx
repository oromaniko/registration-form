export default function Step2({setIndex}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setIndex(2);
    };

    const handleGoToStep1 = (e) => {
        e.preventDefault();
        setIndex(0);
    };

    return (
        <form className='support-form__form'>
            <h3>Шаг 2: Заполните данные об Организации</h3>
            <div className='popup__tabs'></div>
            <div></div>
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