<template>
    <div 
      v-for="category in categories" 
      :key="category.id" 
      @drop="onDrop($event, category.id)" 
      @dragover.prevent
      class="m-auto w-36 h-auto font-medium text-white bg-gray-500 gap-2 grid text-center mt-2 p-2 border border-red-700"
    >
      <h3>{{ category.title }}</h3>
      <div 
        draggable="true" 
        v-for="item in items.filter(x => x.categoryId === category.id)" 
        :key="item.id" 
        @dragstart="onDragStart($event, item)" 
        class="bg-slate-600 p-2"
      >
        <h5>{{ item.title }}</h5>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const items = ref([
        { id: 0, title: "Audi", categoryId: 0 },
        { id: 1, title: "BMW", categoryId: 0 },
        { id: 2, title: "Cat", categoryId: 1 }
      ]);
  
      const categories = ref([
        { id: 0, title: 'Cars' },
        { id: 1, title: 'Animals' }
      ]);
  
      function onDragStart(e, item) {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData('text/plain', item.id.toString());
      }
  
      function onDrop(e, categoryId) {
        e.preventDefault();
        const itemId = parseInt(e.dataTransfer.getData('text/plain'));
        items.value = items.value.map(x => {
          if (x.id === itemId) {
            return { ...x, categoryId };
          }
          return x;
        });
      }
  
      return {
        items,
        categories,
        onDragStart,
        onDrop
      };
    }
  }
  </script>
  