import { Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"
import css from './App.module.css'
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

export const Login = () => {
    const dispatch = useDispatch();

       const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value
        }))
        form.reset();
    }

    return (
        <div className={(css.registerWrap)}>
            <Heading className={(css.registerHeader)}>Please, fill in following fields to sign in</Heading>
            <form onSubmit={handleSubmit}>
                 <FormControl width={400} margin="auto" className={(css.formRegisterWrap)}>
                <FormLabel >Email address</FormLabel>
                <Input isRequired height={8} type='email' className={(css.email)} id="email"/>

                <FormLabel >Password</FormLabel>
                    <Input isRequired height={8} type='password' className={(css.password)} id="password"/>

                <Button colorScheme='teal' variant='solid' type="submit" className={(css.submitRegister)}>
                    Sign in
                </Button>
            </FormControl>
           </form>
        </div>
        )
}