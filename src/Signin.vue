<template>
    <div>
        <h3>Signin</h3>
        <p v-if="signinSuccessful" class="alert alert-success">Signin Successful</p>
        <div class="form-group">
            <input class="form-control" type="email" v-model="email" placeholder="email">
            <p v-if="emailError">{{emailError}}</p>
        </div>
        <div class="form-group">
            <input class="form-control" type="text" v-model="password" placeholder="password">
            <p v-if="passwordError">{{passwordError}}</p>
        </div>

        <button class="btn btn-primary" @click="signin">Signin</button>
    </div>
</template>

<script>
import { validationMixin } from './ValidationMixin';

export default {
    name: 'Signup',

    mixins: [validationMixin],

    data() {
        return {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            signinSuccessful: false
        }
    },

    methods: {

        isValidPassword(password) {
            if(password) {
                return true;
            } else {
                return false;
            }
        },

        signin() {
            this.emailError = '';
            this.passwordError = '';

            const isValidEmail = this.isValidEmail(this.email.trim());
            if(!isValidEmail) {
                this.emailError = 'Please enter a valid email address';
                this.signupSuccessful = false;
            }

            const isValidPassword = this.isValidPassword(this.password.trim());
            if(!isValidPassword) {
                this.passwordError = 'Please enter a password';
                this.signupSuccessful = false;
            }

            if(isValidEmail && isValidPassword) {
                this.signinSuccessful = true;
            }
        }
    }
}
</script>