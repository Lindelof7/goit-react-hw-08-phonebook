import { Button, FormControl, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react"
import css from './App.module.css'

export const Register = () => {
    return (
        <div className={(css.registerWrap)}>
            <Heading className={(css.registerHeader)}>Please, fill in following fields to register</Heading>
            <FormControl width={400} margin="auto" className={(css.formRegisterWrap)}>
                <FormLabel >Email address</FormLabel>
                <Input type='email' />
                <FormHelperText className={(css.email)}>We'll never share your email.</FormHelperText>

                <FormLabel >Password</FormLabel>
                <Input type='password' />
                <FormHelperText className={(css.password)}>We'll never share your password.</FormHelperText>

                <Button colorScheme='teal' variant='solid' type="submit" className={(css.submitRegister)}>
                    Register
                </Button>
            </FormControl>
        </div>
    )
}