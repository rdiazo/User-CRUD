import { useForm } from "react-hook-form"

const FormUser = ({ createUser }) => {

    const { handleSubmit, register, reset }= useForm()

    const submit = data => {
        createUser(data)
    }

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Add</button>
    </form>
  )
}

export default FormUser