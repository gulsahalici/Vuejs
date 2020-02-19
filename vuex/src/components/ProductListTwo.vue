<template>
    <div id="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in saleProducts" :key="product.id">
                <span class="name">{{product.name}}</span>
                <span class="price">{{product.price}} TL</span>
            </li>
        </ul>
        <button @click="reducePrice(1)">Reduce Price</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        computed:{
            products(){
                return this.$store.state.products;
            },
            /*saleProducts(){
                return this.$store.getters.saleProducts;
            }*/
            ...mapGetters([
                'saleProducts'
            ])
        },
        methods:{
            //reducePrice:function (amount) {
                /*this.$store.state.products.forEach(product=>{
                    product.price-=1;
                })*/
             //   this.$store.dispatch('reducePrice',amount);
                //commit('reducePrice');
           // }
            ...mapActions([
                'reducePrice'
            ])
        }
    }
</script>

<style>
    #product-list-two{
        background-color:#D1E4FF;
        box-shadow: 1px 2px 3px rgba(0,0,0,2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    #product-list-two ul{
        padding: 0;
        list-style-type: none;
    }
    #product-list-two ul li{
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.7);
    }
    .price{
        font-weight: bold;
        color: #860CE8;
        display: block;
    }

</style>
