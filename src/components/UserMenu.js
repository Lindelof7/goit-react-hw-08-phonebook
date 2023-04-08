import { Button } from "@chakra-ui/react";
import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";

export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (<>
        <p>Welcome, {user.name}</p>
        <Button onClick={handleLogOut}>Log out</Button>
        </>
        )
}