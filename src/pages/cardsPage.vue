<template>

<div class="w-full h-full grid grid-cols-2 sm:grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
</div>
    
</template>
<script>
import Card from '@/components/card.vue';
import { ref } from 'vue';
export default {
  components: {
    Card,
  },
  setup() {
    const submittedData = ref(null);

    const handleFormSubmission = (data) => {
      submittedData.value = data;
    };

    return {
      submittedData,
      handleFormSubmission,
    };
  },
};
</script>