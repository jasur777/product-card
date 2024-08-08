<template>
    <div class="p-3 sm:p-3 md:p-5 bg-white w-auto h-auto rounded-xl b hover:scale-x-105 transition">
        <div class="">
            <img src="../assets/logo.svg" alt="" class="bg-no-repeat bg-cover bg-center">
        </div>
        <div class="">
            <div class="flex justify-between p-0 sm:p-2">
                <h2 class="font-medium text-sm sm:text-lg">Sneakers</h2>
                <div class="font-medium flex text-gray-600">Price:  <span class="text-black">40$</span></div>
            </div>
            <hr>
            <div class="overflow-auto resize-none no-scrollbar h-14 md:h-22 " >
                <p class="text-sm sm:text-xs font-medium text-gray-600 p-0 sm:p-2 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente explicabo quisquam nemo, eligendi, repudiandae nesciunt maiores officiis iste quo qui, ab dolor architecto esse. Rerum enim dolorum nulla natus.</p>
            </div>
            <button @click="openModal" class="bg-green-700 font-medium rounded-md text-white hover:bg-green-800 mt-2 text-xs sm:text-base p-1 sm:p-2">EDIT</button>
        </div>
    </div>
    <Modal :show="isModalVisible" @close="closeModal"/>
</template>
<script>
import { ref } from 'vue';
import Modal from '@/components/modal-card.vue';

export default {
    components: {
        Modal
    },
    setup() {
        const isModalVisible = ref(false);

        const openModal = () => {
            isModalVisible.value = true;
        };

        const closeModal = () => {
            isModalVisible.value = false;
        };

        return {
            isModalVisible,
            openModal,
            closeModal
        };
    }
};
</script>
<style>
.b{
    box-shadow: 0 10px 40px 10px rgba(134, 154, 184, .175);
    /* text-align: ; */
}
</style>