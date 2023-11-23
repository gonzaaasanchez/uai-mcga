import styles from './registerForm.module.css';
import { useForm } from 'react-hook-form';
import { Inputs } from './types';


const RegisterForm = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<Inputs>()
    const onSubmit = (data: Inputs) => {
        console.log(data)
        reset()
    };
    const ONLY_LETTERS = /^[a-zA-Z]+$/;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h1>React Hook Form</h1>
            <h2>Bienvenido: {watch('name')}</h2>
            <input placeholder='Nombre' {...register("name", {
                required: { value: true, message: 'El campo es requerido' },
                minLength: {
                    value: 2,
                    message: 'El nombre debe tener la menos 2 caracteres'
                },
                maxLength: {
                    value: 30,
                    message: 'El nombre debe tener menos de 30 caracteres'
                },
                pattern: {
                    value: ONLY_LETTERS,
                    message: 'El nombre sólo puede contener letras'
                }
            })}></input>
            <span className={styles.errors}>{errors.name?.message}</span>

            <input placeholder='Edad' {...register("age")}></input>

            <select {...register("city")}>
                <option value="">Seleccione una ciudad...</option>
                <option value="rosario">Rosario</option>
                <option value="bsas">Buenos Aiers</option>
                <option value="parana">Parana</option>
            </select>

            <div>
                <span>Aceptar</span>
                <input type="checkbox" {...register("check")}></input>
            </div>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default RegisterForm