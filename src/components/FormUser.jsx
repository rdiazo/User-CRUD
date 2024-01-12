import { useEffect } from "react"
import { useForm } from "react-hook-form"

const FormUser = ({ createUser, userUpdate, updateuser, setUserUpdate }) => {

    const { handleSubmit, register, reset }= useForm()

    useEffect(() => {
      reset(userUpdate)
    }, [userUpdate])
    

    const submit = data => {
        if(userUpdate) {
            // Update
            updateuser(updateUser.id, data)
            setUserUpdate()
        } else {
            // Crear
            createUser(data)
        }
        
        reset({
            email:'',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''            
        })
    }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label>
        <span>Email</span>
        <input {...register('email')} type="email" />
      </label>
      <label>
        <span>Password</span>
        <input {...register('password')} type="password" />
      </label>
      <label>
        <span>First name</span>
        <input {...register('first_name')} type="text" />
      </label>
      <label>
        <span>Last name</span>
        <input  {...register('last_name')} type="text" />
      </label>
      <label>
        <span>Birthday</span>
        <input {...register('birthday')} type="date" />
      </label>
      <button>{ userUpdate ? 'Update' : 'Create' }</button>
    </form>
  )
}

export default FormUser