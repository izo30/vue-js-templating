<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <hr>
                <h2 class="alert alert-info">Filters</h2>
                <hr>
                <p> {{ text | toUpperCase | toLowerCase }} </p>
            </div>

            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <hr>
                <h2 class="alert alert-info">Mixins</h2>
                <hr>
                <Signup />
            </div>

            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <Signin />
            </div>

            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <hr>
                <h2 class="alert alert-info">Security</h2>
                <hr>
                <Security />
            </div>
        </div>
    </div>
</template>

<script>
    import Signup from './Signup.vue';
    import Signin from './Signin.vue';
    import Security from './Security.vue';

    export default {
        components: {
            Signup,
            Signin,
            Security,
            response: []
        },

        data() {
            return {
                text: 'Hello world!'
            }
        }, 

        filters: {
            toUpperCase(value) {
                return value.toUpperCase();
            }
        },

        methods: {
            
        }
    }
</script>

<style>

</style>
