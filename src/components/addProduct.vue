<template>
    <div class="max-w-md mx-auto bg-white shadow-md rounded flex pb-8 mb-4">
      <div class="w-full">
        <h2 class="mb-4 w-full h-20 bg-green-800 font-medium flex items-center justify-center text-white text-4xl">Add New Product</h2>
      <form @submit.prevent="submitForm" class="px-8">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
          <input v-model="productName" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter product name" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea v-model="productDescription" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter product description" required></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Price</label>
          <input v-model="productPrice" type="number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter product price" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Image</label>
          <input  type="file" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" accept="image/*" required>
        </div>
        <button type="submit" class="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Product</button>
      </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup(props, { emit }) {
    const productName = ref('');
    const productDescription = ref('');
    const productPrice = ref('');

    const submitForm = () => {
      emit('form-submitted', {
        productName: productName.value,
        productDescription: productDescription.value,
        productPrice: productPrice.value,
      });
    };

    return {
      productName,
      productDescription,
      productPrice,
      submitForm,
    };
  },
  };
  </script>
  
  <style scoped>
  </style>
  
