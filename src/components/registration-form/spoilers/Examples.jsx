const files = [
    {
        name: 'Анкета',
        weight: 32,
    },
    {
        name: 'Устав',
        weight: 45,
    },
    {
        name: 'Свидетельство',
        weight: 63,
    },
    {
        name: 'Уведомление',
        weight: 32,
    },
    {
        name: 'ИНН',
        weight: 32,
    },
    {
        name: 'Анкета',
        weight: 32,
    },
    {
        name: 'Анкета',
        weight: 32,
    },
]

export default function Examples() {
    return (
        <div className='spoiler_body'>
            {files.map(({name, weight}) => (
                <div>
                    <a href='#'>{name}</a>
                    <span> ({weight} КБ)</span>
                </div>
            ))}
        </div>
    )
}