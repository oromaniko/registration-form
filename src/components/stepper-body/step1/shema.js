import TextInput from "../inputs/TextInput";
import PasswordInput from "../inputs/PasswordInput";

const formSchema = {
    lastName: {
        label: 'Фамилия',
        component: TextInput,
    },
    firstName: {
        label: 'Имя',
        component: TextInput,
    },
    email: {
        label: 'E-mail',
        component: TextInput,
    },
    job: {
        label: 'Должность',
        component: TextInput,
    },
    phone: {
        label: 'Телефон',
        component: TextInput,
    },
    password: {
        label: 'Пароль',
        component: PasswordInput,
    },
    confirmPassword: {
        label: 'Подтвердите пароль',
        component: PasswordInput,
    },
}

export default formSchema;