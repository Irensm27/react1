import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.validator.ts";


interface IFormProps {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {
    const {handleSubmit, register, formState: { errors, isValid }
    } = useForm<IFormProps>({mode:'all', resolver:joiResolver(userValidator)})

    const customHandler = (data: IFormProps) => {
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('username')}/>
                    <div>{errors.username && <div>{errors.username.message}</div>}</div>
                </label>

                <label>
                    <input type="text" {...register('password')}/>
                    <div>{errors.password && <div>{errors.password.message}</div>}</div>
                </label>

                <label>
                    <input type={'number'} {...register('age')}/>
                    <div>{errors.age && <div>{errors.age.message}</div>}</div>
                </label>
                <button disabled={!isValid}>send</button>
            </form>

        </div>
    );
};

export default FormComponent;