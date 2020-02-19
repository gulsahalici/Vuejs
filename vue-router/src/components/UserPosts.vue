<template>
    <div>
        <router-link :to="userLink">Back to User</router-link>
    <div v-for="post in posts" :key="post.id">
        <h4>{{post.title}}</h4>
        <p>{{post.body}}</p>
        <hr>
    </div>
    </div>
</template>

<script>
    export default {
        name: "UserPosts",
        data(){
            return{
                posts:{}
            }
        },
        computed:{
            userLink(){
                return '/user/'+this.$route.params.userId
            }
        },
        created() {
            fetch('https://jsonplaceholder.typicode.com/posts?userId='+this.$route.params.userId)
                .then((res) => { return res.json()})
                .then((posts) => {this.posts=posts})
        }
    }
</script>
