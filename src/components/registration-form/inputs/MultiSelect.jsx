import {countries} from "./countries";

export default function MultiSelect({setCountry}) {
    const handleSelectCountry = (country) => (e) => {
        e.preventDefault();
        setCountry(country);
    }
    return (
        <div tabIndex="-1" className="multiselect__content-wrapper" style={{maxHeight: "300px"}}>
            <ul className="multiselect__content" style={{display: "inline-block"}}>
                {countries.map(({code, img}) => (
                    <li className="multiselect__element" onClick={handleSelectCountry({code, img})}>
                    <span data-select="" data-selected="" data-deselect="" className="multiselect__option multiselect__option--highlight multiselect__option--selected">
                        <div data-v-35853040="" className="phone-code-block">
                            <img data-v-35853040="" src={img} alt=""/>
                                <div data-v-35853040="">+{code}</div>
                        </div>
                    </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}