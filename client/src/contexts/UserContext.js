// UserContext.js
import { createContext, useContext } from 'react'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export default UserContext
