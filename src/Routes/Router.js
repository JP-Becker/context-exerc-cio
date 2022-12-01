import { Route, Routes, BrowserRouter } from "react-router-dom"
import { HomePage } from "../pages/Home"
import { ErrorPage } from "../pages/Error"
import { CardUsers } from "../pages/CardsUsers"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { useState } from "react"

export const Router = () => {
    const context = useContext(GlobalContext)
    const {users, clickedCard, changeCard} = context

    console.log(clickedCard)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="*" element={<ErrorPage/>} />
                <Route path="/users" element={
                    users.map((user) => {
                        return <CardUsers
                            clickedCard={clickedCard}
                            changeCard={changeCard}
                            key={user.id}
                            id={user.id}
                            name={user.name}
                        />
                    })} />
            </Routes>   
        </BrowserRouter>
    )
}