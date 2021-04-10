<template>
    <div>
        <h3>Signup</h3>
        <p v-if="signupSuccessful" class="alert alert-success">Signup Successful</p>
        <div class="form-group">
            <input class="form-control" type="email" v-model="email" placeholder="email">
            <p v-if="emailError">{{emailError}}</p>
        </div>
        <div class="form-group">
            <input class="form-control" type="text" v-model="password" placeholder="password">
            <p v-if="passwordError">{{passwordError}}</p>
        </div>

        <button class="btn btn-success" @click="signup">Signup</button>
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
            signupSuccessful: false
        }
    },

    methods: {

        isValidPassword(password) {
            if(password.length >= 6) {
                return true;
            } else {
                return false;
            }
        },

        signup() {
            this.emailError = '';
            this.passwordError = '';

            const isValidEmail = this.isValidEmail(this.email.trim());
            if(!isValidEmail) {
                this.emailError = 'Please enter a valid email address';
                this.signupSuccessful = false;
            }

            const isValidPassword = this.isValidPassword(this.password.trim());
            if(!isValidPassword) {
                this.passwordError = 'Please enter a password with 6 or more characters';
                this.signupSuccessful = false;
            }

            if(isValidEmail && isValidPassword) {
                this.signupSuccessful = true;
            }
        }
    },

    created() {
        console.log('Created hook - Signup');
    }
}
</script>