import { useEffect } from "react"
import { useForm } from "react-hook-form"
import './styles/FormUser.css'

const FormUser = ({ createUser, userUpdate, updateUser, setUserUpdate, setIsFormClose }) => {
 
    const { handleSubmit, register, reset }= useForm()

    useEffect(() => {
      reset(userUpdate)
    }, [userUpdate])
 
    const submit = data => {
        if(userUpdate) {
            // Update
            updateUser(updateUser.id, data)
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
        setUserUpdate()
        }

        const handleExit = () => {
          setIsFormClose(true)
          reset({
            email:'',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''            
        })
        }
        

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div className="form__x" onClick={handleExit}>x</div>
      <h2 className="form__title">{ userUpdate ? 'Update User' : 'Create new user'}</h2>
      <label className="form__label"> 
        <span className="form__field__name">Email </span>
        <input className="form__field" {...register('email')} type="email" placeholder="user@email.com"/>
      </label>
      <label className="form__label">
        <span className="form__field__name">Password </span>
        <input className="form__field" {...register('password')} type="password" />
      </label>
      <label className="form__label">
        <span className="form__field__name">First name </span>
        <input className="form__field" {...register('first_name')} type="text" />
      </label>
      <label className="form__label">
        <span className="form__field__name">Last name </span>
        <input className="form__field"  {...register('last_name')} type="text" />
      </label>
      <label class Name="form__label">
        <span className="form__field__name">Birthday </span>
        <input className="form__field" {...register('birthday')} type="date" />
      </label>
      <button className="form__btn">{ userUpdate ? 'Update' : 'Create' }</button>
    </form>
  )
}

export default FormUser