"use client"
import { SubmitHandler, useForm } from 'react-hook-form'

interface RegisterProps {
    name: string;
    email: string;
    password: string;
}

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterProps>()

    const onSubmit: SubmitHandler<RegisterProps> = (data) => {
        console.log(data)
    }

    return (
        <div onSubmit={handleSubmit(onSubmit)} className='max-container padding-container flex justify-center'>
            <form className='border inline-flex flex-col gap-6 rounded-lg px-6 py-8 xl:my-12 my-8'>
                <h1 className='text-xl font-semibold text-center mb-2'>Register</h1>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text"
                        placeholder='John Doe'
                        {...register("name", {
                            required: "name is required"
                        })}
                        className='border px-2 py-1.5 rounded ml-2' />
                    {errors.name && <p className='text-red-500 text-xs'>{errors.name?.message}</p>}
                </div>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="email"
                        placeholder='john@gmail.com'
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "this must be a valid email" }
                        })}
                        className='border px-2 py-1.5 rounded ml-2' />
                    {errors.email && <p className='text-red-500 text-xs'>{errors.email?.message}</p>}
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password"
                        placeholder='Password'
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: "password must be at lest 8 character" }
                        })}
                        className='border rounded ml-2 py-1.5 px-2' />
                        {errors.password && <p className='text-red-500 text-xs  '>{errors.password?.message}</p>}
                </div>
                <div>
                        <button type='submit' className='bg-blue-700 text-white px-4 py-1.5 rounded cursor-pointer hover:bg-blue-800'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register