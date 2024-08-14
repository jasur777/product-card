<template>
<section class=" m-auto">
    <nav class="flex bg-slate-300 gap-10 font-medium text-xl cursor-pointer select-none justify-center p-2">
        <!-- <ul class="bg-slate-400 p-2 rounded-md" @click="activeComponent = 'Cards'">CARD</ul>
        <ul class="bg-slate-400 p-2 rounded-md" @click="activeComponent = 'login'">LOGIN</ul> -->
    <router-link to="/addProduct">
        <button  class="bg-slate-400 p-2 rounded-md">add product</button>
    </router-link>
    <router-link to="/draganddrop">
        <button class="bg-slate-400 p-2 rounded-md">Drag and drop</button>
    </router-link>
        <!-- <div>
    <AddProductForm @add-product="addProduct" />
    <div class="product-list">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :img="product.img"
        :name="product.name"
        :description="product.description"
        :price="product.price"
      />
    </div>
  </div> -->
    </nav>
    <cards/>
    <!-- <addProduct/>
    <ProductCard/> -->
</section>
<!-- <Cards/>
<login/> -->
<!-- <component :is="activeComponent"> </component> -->
</template>
<script>
import Cards from "../pages/cardsPage.vue";
// import addProduct from "@/components/addProduct.vue";
// import ProductCard from "@/components/productCard.vue";
// import login from "../components/login.vue";
// import { ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Cards,
        // addProduct,
        // ProductCard,
        // login
    },
//     setup(){
//         const products = ref([]);

// const addProduct = (newProduct) => {
//   products.value.push(newProduct);
// };

// return {
//   products,
//   addProduct,
// };
//     }
    // setup(){
    //     const activeComponent = ref();

    // return {
    //     activeComponent
    // }
    
})
</script>