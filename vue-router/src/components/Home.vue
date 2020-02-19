<template>
    <div>
        <template v-for="user in users">
            <user-item :user=user :key="user.id"></user-item>
        </template>
    </div>
</template>

<script>
    import UserItem from "./UserItem";
    export default {
        name: "Home",
        components: {UserItem},
        data(){
            return{
                users:[]
            }
        },
        created() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => { return res.json()})
                .then( (users) =>{ this.users = users; } )
        }
    }
</script>
