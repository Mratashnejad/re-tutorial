import {useForm} from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
export const SubmitForm =()=>{
    const schema =  yup.object().shape({
        name : yup.string().required('Name is required'),
        family : yup.string(),
        email : yup.string().email('email is not true').required(),
        age : yup.number().positive().min(10).max(100),
        password : yup.string().min(8).max(128).matches(/[a-z]+/).matches(/[A-Z]+/).matches(/\d+/).required(),
        confirmPassword : yup.string().oneOf([yup.ref('password')] , 'password not matches').required()
    })

    const {register , handleSubmit ,formState:{errors}} = useForm({resolver : yupResolver(schema)})
    const onFormSubmit =(data)=>{
        console.log('the form is submited')
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <input type="text" placeholder="Name" {...register("name")} /><br />
            {errors.name && (<p>{errors.name?.message}</p>)}
            
            <input type="text" placeholder="Family" {...register("family")} /><br />
            <p>{errors.family?.message}</p> {/* Display family error message */}
            
            <input type="text" placeholder="Email" {...register("email")} /><br />
            <p>{errors.email?.message}</p> {/* Display email error message */}
            
            <input type="number" placeholder="Age" {...register("age")} /><br />
            <p>{errors.age?.message}</p> {/* Display age error message */}
            
            <input type="password" placeholder="Password" {...register("password")} /><br />
            <p>{errors.password?.message}</p> {/* Display password error message */}
            
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} /><br />
            <p>{errors.confirmPassword?.message}</p> {/* Display confirmPassword error message */}
            
            <input type='submit' />
        </form>

    )
}