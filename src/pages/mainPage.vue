<template>
<section class=" m-auto">
    <nav class="flex bg-slate-300 gap-10 font-medium text-xl cursor-pointer select-none justify-center p-2">
        <button @click="openModalProduct" class="bg-slate-400 p-2 rounded-md">add product</button>
        <!-- <button @click="logout" class="bg-slate-400 p-2 rounded-md">Login</button> -->
        <!-- <router-link to="/login">
            <button @click="goToAddProduct" class="bg-slate-400 p-2 rounded-md">Login</button>
        </router-link> -->
    </nav>
    <AddProduct :show="isModalAddProduct" @close="closeModalProduct"/>
    <cards/>
</section>
</template>
<script>
import Cards from "../pages/cardsPage.vue";
import { ref } from "vue";
import AddProduct from "@/components/addProduct.vue";
// import { useRouter } from 'vue-router';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

export default {
    components: {
        Cards,
        AddProduct,
    },
    setup(){
        // const router = useRouter();

// const goToAddProduct = () => {
//   router.push({ name: 'AddProductPage' });
// };
        const isModalAddProduct = ref(false);
        const openModalProduct = () => {
            isModalAddProduct.value = true;
            // router.push({ name: 'AddProduct' });
        };
        const closeModalProduct = () => {
            isModalAddProduct.value = false;
        };
        onMounted(() => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        router.push({ name: 'LoginPage' });
      }
    });

        return{
            // goToAddProduct,
            isModalAddProduct,
            openModalProduct,
            closeModalProduct,
        }
    }
}
</script>