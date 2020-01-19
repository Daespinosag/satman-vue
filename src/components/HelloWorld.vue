<template>
    <div class="hello">
        <alert-map>

        </alert-map>
    </div>
</template>

<script>
    import AlertMap from "./map/AlertMap"
    import User from "../store/models/users/User";

    export default {
        name: 'HelloWorld',
        components:{ AlertMap },
        props: {
            msg: String
        },
        created(){
            if (User.getters('getLoadStatus') !== 2){ this.initLoadInformation()}
        },
        computed: {

        },
        methods: {
            initLoadInformation(){
                Promise.all([ this.$store.dispatch('initUserInformation',{id : 1}).then((response) => response)])
                    .then(() => {
                        this.$store.dispatch('initFloodInformation').then((response) => { console.log(response)})
                        this.$store.dispatch('initLandslideInformation').then((response) => { console.log(response)})
                        console.log('ahora si termine')
                    })
                    .catch(() => { console.log('ahora si tenemos un error')})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding:0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
