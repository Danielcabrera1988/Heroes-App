import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom'


//el children seria el componente hijo a renderizar
export const PublicRoute = ({children}) => {
  const {user} = useContext(AuthContext)
    return (!user) ? children : <Navigate to={'/marvel'}/>
}
