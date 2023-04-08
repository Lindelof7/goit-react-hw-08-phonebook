import { useSelector } from "react-redux";
import { selectErrorState } from "redux/selectors";

export const ErrorMessage = () => {

    const Error = useSelector(selectErrorState);

    return (
        Error && <h2>Sorry, we don't have such page</h2>
    )
}