
const UserCard = ({ user, deleteUser, setUserUpdate }) => {

    const handleDelete = () => {
        deleteUser(user.id)
    }

    const   handleEdit = () => {
        setUserUpdate(user)
    }

  return (
    <article>
          <h2>{user.first_name} {user.last_name}</h2>
          <hr />
          <ul>
            <li><span>Email</span><span>{user.email}</span></li>
            <li><span>Birthday</span><span>{user.birthday}</span></li>
          </ul>
          <hr />
          <footer>
            <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
            <button onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
          </footer>
        </article>
  )
}

export default UserCard