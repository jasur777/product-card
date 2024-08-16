<template>
  <div v-if="show" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50" @click.self="closeModal">
    <div class="max-w-md w-full mx-auto bg-white shadow-md rounded p-6 relative">
      <span class="absolute top-4 right-4 cursor-pointer" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
      <form @submit.prevent="submitForm">
        <h2 class="text-xl font-semibold mb-4 text-center">Добавить продукт</h2>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Название продукта</label>
          <input v-model="productName" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Введите название продукта"  />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Описание продукта</label>
          <textarea v-model="productDescription" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Введите описание продукта" ></textarea>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">Цена</label>
          <input v-model="productPrice" type="number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Введите цену продукта"  />
        </div>
        <div class="mb-4">
          <a class="block text-gray-700 text-sm font-bold mb-2">Фото</a>
          <div 
          class="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer transition-colors duration-300 ease-in-out w-96 m-auto"
          @dragover.prevent="onDragOver"
          @dragleave.prevent="onDragLeave"
          @drop.prevent="onDrop"
          :class="{ 'border-blue-500': isDragging }"
        >
          <input
            type="file"
            ref="fileInput"
            @change="onFileChange"
            class="hidden"
            multiple
          />
          <p>{{ message }}</p>
          <button @click="triggerFileInput" class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition-colors">
            Выбрать файлы
          </button>
        </div>
        </div>
        <button @click="pp" type="submit" class="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Добавить продукт</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  import { ref, toRefs } from 'vue';
  
  export default {
    props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
    setup(props, { emit }) {
    const productName = ref('');
    const productDescription = ref('');
    const productPrice = ref('');

    const { show } = toRefs(props);
    
    const closeModal = () => {
      emit("close");
    };

    const submitForm = () => {
      emit('form-submitted', {
        productName: productName.value,
        productDescription: productDescription.value,
        productPrice: productPrice.value,
      });
    };
    const pp = () => {
      if(productName.value == '' || productDescription.value == '' || productPrice.value == ''){
        alert('вы не заполнили таблиц')
      }else{
        emit("close")
        // closeModal
      }
    };
    const message = ref('Перетащите файлы сюда или нажмите для выбора');
  const isDragging = ref(false);
  const files = ref([]);
  
   const onDragOver = () => {
    message.value = 'Отпустите файлы для загрузки';
    isDragging.value = true;
  };
  
  const onDragLeave = () => {
    message.value = 'Перетащите файлы сюда или нажмите для выбора';
    isDragging.value = false;
  };
  
  const onDrop = (event) => {
    files.value = [...event.dataTransfer.files];
    message.value = `${files.value.length} файл(ов) выбрано`;
    isDragging.value = false;
    handleFiles();
  };
  
  const onFileChange = (event) => {
    files.value = [...event.target.files];
    message.value = `${files.value.length} файл(ов) выбрано`;
    handleFiles();
  };
  
  const triggerFileInput = () => {
    document.querySelector('input[type="file"]').click();
  };
  
  const handleFiles = () => {
    files.value.forEach((file) => {
      console.log(`Файл: ${file.name}, размер: ${file.size}`);
    });
  };

    return {
      onDragOver,
      onDragLeave,
      onDrop,
      onFileChange,
      triggerFileInput,
      handleFiles,
      message,
      isDragging,
      files,
      productName,
      productDescription,
      productPrice,
      submitForm,
      show,
      closeModal,
      pp
    };
  },
  };
  </script>
  
  <style scoped>
  </style>
  
