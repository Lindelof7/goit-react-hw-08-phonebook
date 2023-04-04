import { useSelector } from "react-redux";
import { selectErrorState } from "redux/selectors";

export const ErrorMessage = () => {

    const Error = useSelector(selectErrorState);

    return (
        Error && <h2>Sorry, our service has got a problem</h2>
    )
}