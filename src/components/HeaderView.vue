<template>
  <header class="">
    <div
      class="bg-yellow-400 h-10 flex items-center justify-center border-gray-500"
    >
      <p class="text-gray-600 font-serif">
        <b>!The Nut House Ilego a Amazon!</b> pide tu <b>Producto</b> preferido.
      </p>
    </div>
    <div
      class="header flex justify-center p-6 border-b-2 border-[#E2E8F0] border-solid"
    >
      <img src="@/assets/logo.svg" alt="" />
    </div>

    <div class="border rounded-md shadow-md">
      <ul class="flex justify-around p-6 font-sans text-black gap-x-2">
        <li>
          <router-link to="/the-nut-house">The Nut House</router-link>
        </li>
        <li><router-link to="/thefun-fruit">Fun Fruit </router-link></li>
        <li>
          <router-link to="/productos-granel">Productos a granel</router-link>
        </li>
        <li><router-link to="/acerca-fun">Acerca de Fun Fruit</router-link></li>
        <li><router-link to="/fundation-fun">Fundación</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style></style>
