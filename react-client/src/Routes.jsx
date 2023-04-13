import RegisterAndLoginForm from "./RegisterAndLoginForm.jsx";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";


export default function Routes() {
    const { username, id } = useContext(UserContext);

    if (username) {
        return <Chat />;
    }
    return (
        <RegisterAndLoginForm/>
    )
}