import {Children, useState} from "react";

export default function Spoiler({title, children}) {
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    const handleVisible = (e) => {
        e.preventDefault();
        setIsInfoVisible(!isInfoVisible);
    }
    return (
        <div data-v-724bbd2f="" data-v-66209bb9="" className="spoiler">
            <div data-v-724bbd2f="" className="spoiler__header" onClick={handleVisible}>
                <div data-v-66209bb9="" data-v-724bbd2f="">
                    {title}
                </div>
                <div data-v-724bbd2f="" className="spoiler__header-arrow">
                    <i data-v-724bbd2f="" className="icon-down-open"></i>
                </div>
            </div>
            {isInfoVisible && children}
        </div>
    )
}