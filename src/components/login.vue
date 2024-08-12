<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();
    const showEye = ref(false);

    const login = () => {
      if (username.value === 'admin' && password.value === 'password') {
        localStorage.setItem('loggedIn', 'true');
        router.push({ name: 'MainPage' });
      } else {
        alert('Invalid credentials');
      }
    };
    
    const showEyeToggle = () => {
      showEye.value = !showEye.value;
    };
    return {
      username,
      password,
      login,
      showEye,
      showEyeToggle,
    };
    // const showEye = ref(false);
    
  }
}
</script>

<template>
  <div class=" min-h-screen min-w-full flex items-center justify-center select-none">
    <div class="bg-white lg:shadow-lg rounded-lg flex overflow-hidden lg:w-auto lg:h-full w-full h-full justify-center p-8 sm:pb-20 sm:pt-20 sm:pr-36 sm:pl-36">
      <div class="w-full h-full md:w-80">
        <h2 class="text-3xl font-semibold text-gray-900">WELCOME BACK</h2>
      <p class="text-gray-400 mb-8">Welcome back! Please enter your details.</p>
      <form @submit.prevent="login">
        <div class="mb-4">
            <label class="block text-gray-700">Email === (ADMIN)</label>
            <input v-model="username" type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required>
          </div>
          <div class="mb-4 relative">
            <label class="block text-gray-700">Password === (PASSWORD)</label>
            <input v-model="password" :type="showEye ? 'text' : 'password'"  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="********" required>
            <button @click="showEyeToggle" type="button" class="absolute right-3 top-9">
              <svg v-if="showEye" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>
            </button>
          </div>
          <div class="flex items-center justify-between mb-6">
            <label class="flex items-center">
              <input type="checkbox" class="form-checkbox scale-110" required>
              <span class="ml-2 text-gray-700 font-medium">Remember me</span>
            </label>
            <a href="#" class="text-gray-700 font-medium text-xs hover:underline">Forgot password</a>
          </div>
          <button class="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">Sign in</button>
      </form>
      </div>
    </div>

  </div>
</template>
