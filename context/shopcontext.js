import { createContext, useState, useEffect } from "react";
import { useMoralis } from 'react-moralis'


export const ShopContext = createContext()

export const ShopProvider = ({children}) => {

    const [ username, setUsername] = useState('')
    const [nickname, setNickname ] = useState('')

    const {
        authenticate,
        isAuthenticated,
        enableWeb3,
        Moralis,
        user,
        isWeb3Enabled,
    } = useMoralis()

    useEffect(() => {
         ;(async() => {
         if(isAuthenticated){
          const currentUsername  = await user?.get('nickname')
          setUsername(currentUsername)
         }
         })()
    },[isAuthenticated, user, username])


const handleSetUsername = () => {
    if (user){
       if(nickname){
        user.set('nickname', nickname)
        user.save()
        setNickname('')
       }
       else{
        console.log("Can't set an empty nickname")
       }
    }
    else{
        console.log('No User')
    }
}

return (
    <ShopContext.Provider
    value ={{
      isAuthenticated,
      nickname,
      setNickname,
      username,
      handleSetUsername
    }}
    >
        {children}
    </ShopContext.Provider>
)

}