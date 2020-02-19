<template>
    <div class="product">

        <strong>{{product.title}}</strong>
        <p>{{product.exp}}</p>
        <strong>{{product.price}} | {{product.count}}</strong>
        <br><br>
        <button @click="addToCart(product)">Add to basket</button>

    </div>
</template>

<script>
    export default {
        props:["product"],
        methods:{
            addToCart(product){
                this.$emit("addToCart",product)
            }
        }
    }
</script>

<style>
    .product{
        border:2px dashed indianred;
        padding: 5px 10px;
        width: 300px;
        margin-bottom: 10px;
    }
    .product:hover{
        border: 2px solid indianred;
        translation:all 1s ;
    }
</style>