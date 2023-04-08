import { Button, FormControl, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react"
import css from './App.module.css'
import { useDispatch } from "react-redux"
import { register } from "redux/auth/operations"

export const Register = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        }))
        form.reset();
    }

    return (
        <div className={(css.registerWrap)}>
            <Heading className={(css.registerHeader)}>Please, fill in following fields to register</Heading>
            <form onSubmit={handleSubmit}>
                  <FormControl width={400} margin="auto" className={(css.formRegisterWrap)} >

                <FormLabel >Name</FormLabel>
                <Input  isRequired type='text' height={8} className={(css.name)} id="name"/>
                
                <FormLabel >Email address</FormLabel>
                <Input isRequired type='email' height={8} id="email"/>
                <FormHelperText className={(css.email)}>We'll never share your email.</FormHelperText>

                <FormLabel >Password</FormLabel>
                <Input isRequired type='password' height={8} id="password"  placeholder="At least 7 characters"/>
                <FormHelperText className={(css.password)}>We'll never share your password.</FormHelperText>

                <Button colorScheme='teal' variant='solid' type="submit" className={(css.submitRegister)}>
                    Register
                </Button>
            </FormControl>
          </form>
        </div>
    )
}