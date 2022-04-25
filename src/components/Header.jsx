export default function Header() {
    return (
        <>
            <div className="bread-crumbs"
                 data-array="[{&amp;quot;title&amp;quot;:&amp;quot;\u0413\u043b\u0430\u0432\u043d\u0430\u044f&amp;quot;,&amp;quot;url&amp;quot;:&amp;quot;\/&amp;quot;},{&amp;quot;title&amp;quot;:&amp;quot;\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f&amp;quot;,&amp;quot;url&amp;quot;:&amp;quot;\/auth\/registration&amp;quot;}]">
                <div className="container">
                <span>
                    <a href="/">Главная</a>
                    <span className="bread-crumbs__separator">•</span>
                    <span>Регистрация</span>
                </span>
                </div>
            </div>
            <div className="page-title">
                <div className="container">
                    <div className="page-title__title">Регистрация</div>
                </div>
            </div>
        </>
    )
}