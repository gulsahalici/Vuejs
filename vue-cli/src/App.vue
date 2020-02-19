<template>
    <div class="container">
        <div class="cart">
            <h3>Basket</h3>
            <ul>
                <li v-for="item in cartItems" :key="item.id">{{item.title}}</li>
            </ul>
            <p v-if="cartItems.length==0" >Your basket is emty.Start now shopping.</p>
        </div>

        <Product @addToCart="cartItems.push($event)" :product="product" v-for="product in productList" :key="product.id" />

    </div>
</template>

<script>
    import Product from "./components/Product"
    export default {
        components:{
            Product
        },
        data(){
            return{
                productList:[
                    {
                        id:1,
                        title:"Iphone",
                        price:100,
                        count:50,
                        exp:"Exp-1"
                    },
                    {
                        id:2,
                        title:"Apples",
                        price:50,
                        count:0,
                        exp:"Exp-2"
                    },
                    {
                        id:3,
                        title:"Mac Book",
                        price:2850,
                        count:500,
                        exp:"Exp-3"
                    }
                    ],
                cartItems:[]
            }
        }
    }
</script>

<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>