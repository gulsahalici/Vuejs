<template>
    <div id="product-list-one" class="container">
        <h2>Product List One</h2>
        <ul>
            <li v-for="product in products" :key="product.id">
                <span class="name">{{product.name}}</span>
                <span class="price">{{product.price}} TL</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed:{
            products(){
                return this.$store.state.products;
            },
            saleProducts(){
                return this.$store.getters.saleProducts;
            }
        }
    }
</script>

<style>
    #product-list-one{
        background-color:#FFF8B1;
        box-shadow: 1px 2px 3px rgba(0,0,0,2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    #product-list-one ul{
        padding: 0;
    }
    #product-list-one ul li{
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.7);
    }
    .price{
        font-weight: bold;
        color: #E8800C;
    }
</style>
