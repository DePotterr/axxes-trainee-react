import { useContext } from 'react'
import { UserContext } from '../../providers/UserProvider'

const useUser = () => {
  const { user, setUser } = useContext(UserContext)

  return { user, setUser }
}

export default useUser