<template>
        
<!-- <h1 class="text-yellow-700">sadad</h1> -->
<section class=" m-auto">
    <div class="w-full h-full grid grid-cols-2 sm:grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>

    </div>
</section>
</template>
<script>
import Cards from "../components/card.vue";
import { defineComponent } from "vue";
export default defineComponent({
    components: {
        Cards
    },
//     props: {
//     show: {
//       type: Boolean,
//       required: true
//     }
//   },
//   setup(props, { emit }) {
//     const { show } = toRefs(props);

//     const closeModal = () => {
//       emit('close');
//     };

//     return {
//       show,
//       closeModal
//     };
//   }
})
</script>