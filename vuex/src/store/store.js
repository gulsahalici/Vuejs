import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store=new Vuex.Store({
    strict:true,
    state:{
        products:[
            {id:1,name:"Apple",price:100},
            {id:2,name:"Orange",price:80},
            {id:3,name:"Banana",price:120}
        ]
    },
    getters:{
        saleProducts:state => {
            var saleProducts=state.products.map(product=>{
                return{
                    name:'**'+product.name+'**',
                    price:product.price/2
                }
            });
            return saleProducts;
        }
    },
    mutations:{
        reducePrice:(state,payload) => {
                state.products.forEach(product=>{
                    product.price-=payload;
                })
        }
    },
    actions:{
        reducePrice:(context,payload)=>{
            setTimeout(function(){
                context.commit('reducePrice',payload)
            },2000)
        }
    }
})