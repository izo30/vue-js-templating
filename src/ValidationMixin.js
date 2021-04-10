export const validationMixin = {
    methods: {
        isValidEmail(email) {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                return true;
            } else {
                return false;
            }
        }
    },

    created() {
        console.log('Created hook - Validation Mixin');
    }
}