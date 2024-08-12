<script>
import { defineComponent, toRefs } from 'vue';
export default defineComponent({
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  setup(props, { emit }) {
    const { show } = toRefs(props);

    const closeModal = () => {
      emit('close');
    };

    return {
      show,
      closeModal
    };
  }
})
</script>

<template>
        <div class="flex fixed  w-screen h-screen top-0 left-0 z-10  justify-center items-center" style="background-color: rgba(0, 0, 0, 0.5)" v-if="show">
            <div class="bg-white m-5  rounded-lg relative select-none">
              <span class="justify-end flex hover:scale-1 w-9 h-9 rounded-2xl items-center bg-green-900 absolute p-2 -top-4 -right-4" @click="closeModal"><svg class="hover:scale-x-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>
              <div class=" w-full bg-green-900 rounded-t-md text-white  items-center text-center p-4 font-bold text-2xl">
                <p>AvionHealth</p>
              </div>
               <form class="p-4" >
                <div class="flex gap-4 pb-4">
                  <div class="">
                    <input class="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200" type="text" placeholder="name" required>
                </div>
                <div class="">
                    <input class="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200" type="text" placeholder="price" required>
                </div>
                </div>
                <div class="">
                    <input class="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200" type="text" placeholder="description" required>
                </div>
                <button type="button" class="hover:bg-green-900 bg-green-800 border-none outline-none text-white mt-5 font-medium p-3 rounded-full w-full relative bottom-0">EDIT</button>
               </form>
            </div>
          </div>     
</template>
