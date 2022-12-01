import { useNavigate } from "react-router-dom"
import { goToUsersPage } from "../Routes/coordinator"
import { ContainerHome } from "./HomeStyle"

export const HomePage = (props) => {
    const navigate = useNavigate()

    return (
        <ContainerHome>
            <h1>Bem-vindo a página inicial</h1>
            <button onClick={() => goToUsersPage(navigate)}>Clique aqui para ver os usuários</button>
        </ContainerHome>
    )
}