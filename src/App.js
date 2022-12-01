import { Router } from "./Routes/Router";
import {ChakraProvider} from "@chakra-ui/react"
import { BASE_URL } from "./constants/BASE_URL.js";
import { useEffect, useState } from "react";
import axios from "axios"
import {GlobalContext} from "./contexts/GlobalContext"

function App() {
  const [users, setUsers] = useState([])
  const [clickedCard, setClickedCard] = useState("")
  
  useEffect(() => {
    fetchUsers()
  }, [])

  const changeCard = (userId) => {
      const findClickedCard = users.find((user) => {
          return user.id === userId
      })
      setClickedCard(findClickedCard)
  }
  
    const fetchUsers = () => {
      axios.get(BASE_URL, {
        headers:{
          Authorization: "joao-becker-ammal"
        }
      }).then((resp) => {
        setUsers(resp.data)
      }).catch((er) => {
        console.log(er)
      })
    };
  
    const context = {
      users: users,
      clickedCard: clickedCard,
      changeCard: changeCard
    };

  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider>
        <Router/>
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
