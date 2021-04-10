<template>
    <div>
        <h3>Security</h3>
        <hr>
        
        <div>
            <h4>Mustache Text</h4>
            {{ text }}
        </div>
        <br>

        <div>
            <h4>V-html Text</h4>
            <span v-html="text"></span>
        </div>
        <br>

        <div class="form-group mt-">
            <input class="form-control" type="text" v-model="text" placeholder="Enter text here">
        </div>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
export default {
    name: 'Security',

    data() {
        return {
            text: 'hello',
            secure: false,
            insecure: false
        }
    },
}
</script>

<script>

function fetch() {
    data.sum = '0; alert(1); // '
    var total = 0; alert(1); // + 8;
}

</script>