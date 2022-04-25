import Spoiler from "./spoilers/Spoiler";
import Demands from "./spoilers/Demands";
import Examples from "./spoilers/Examples";
import Gis from '../../assets/gis.png';

export default function RegistrationInfo() {
    return (
        <div data-v-b77f7d0a="" className="col col-lg-5 col-md-6 col-xs-12 registration__info">
            <div data-v-b77f7d0a="" className="registration__tab">
                <div data-v-66209bb9="" data-v-b77f7d0a="" className="demands">
                    <div data-v-66209bb9="" className="demands__text">
                        Если у Вас уже есть учетная запись -
                        <a data-v-66209bb9="" href="#singin" className="demands__link popup-link">
                            Войдите в личный кабинет
                        </a>
                    </div>
                    <Spoiler title='Требования к программному обеспечению'>
                        <Demands/>
                    </Spoiler>
                    <Spoiler title='Уставные документы и шаблоны'>
                        <Examples/>
                    </Spoiler>
                </div>
            </div>
            <div data-v-b77f7d0a="" className="registration__tab">
                <div data-v-20a93402="" data-v-b77f7d0a="" className="gis">
                    <div data-v-20a93402="" className="gis__item">
                        <img data-v-20a93402="" src={Gis} alt="" />
                    </div>
                    <div data-v-20a93402="" className="gis__item">
                    <div data-v-20a93402="" className="gis__title">
                        Плагин ГИС "Независимый регистратор" на защите интересов участников контрактной системы
                    </div>
                        <div data-v-20a93402="" className="gis__body">
                            Плагин необходим для защиты прав и законных интересов поставщиков и заказчиков в ФАС России, в том числе при обжаловании. Позволяет
                            записывать в режиме реального времени все действия, совершаемые на электронной площадке
                        </div>
                        <div data-v-20a93402="" className="gis__link">
                            <a data-v-20a93402="" href="https://zakupki.gov.ru/epz/main/public/download/downloadDocument.html?id=33257" target="_blank">
                                СКАЧАТЬ ПЛАГИН ГИС НР
                                <svg data-v-20a93402="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect data-v-20a93402="" x="7.11133" width="1.77778" height="12" fill="#014DA8"></rect>
                                    <rect data-v-20a93402="" y="14" width="16" height="2" fill="#014DA8"></rect>
                                    <path data-v-20a93402="" d="M1.33398 5.5L8.00065 13L14.6673 5.5" stroke="#014DA8" strokeWidth="2"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}