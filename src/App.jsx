import { useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
function App() {

  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl)

  useEffect(()  => {
    getUsers()
  }, [])

  return (
    <div>
      <h1>User CRUD</h1>
      <FormUser 
        createUser={createUser}
      />

      <div>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
