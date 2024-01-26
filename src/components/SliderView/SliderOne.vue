<template>
  <section>
    <div class="relative">
      <div class="slider">
        <img src="@/assets/wallnut.jpg" alt="" class="w-full" />
      </div>
      <div
        class="bg-[#225D38] absolute bottom-0 w-full flex justify-center items-center p-2 h-24"
      >
        <p class="text-white font-serif">
          Frescura y calidad garantizadas.<b> ¡Compra ya!</b>
        </p>
      </div>
    </div>
  </section>
  <section>
    <div class="container my-10 px-4">
      <div class="flex justify-center">
        <h2 class="text-4xl text-[#1c3d79] text-center">ELIGE TU PREFERIDO</h2>
      </div>
    </div>
  </section>
  <section>
    <div class="p-24 px-1">
      <ul class="flex justify-evenly">
        <li>
          <div class="flex justify-center">
            <img src="@/assets/nut1.png" alt="" />
          </div>
          <div><h3 class="text-[#1C3D79] p-5">ALMENDRA ENTERA</h3></div>
          <div class="m-4">
            <button
              class="bg-[#1c79b1] px-16 py-3 text-center rounded-sm text-white"
            >
              Ver Producto
            </button>
          </div>
        </li>
        <li>
          <div class="flex justify-center">
            <img src="@/assets/nut2.png" alt="" />
          </div>
          <div><h3 class="text-[#1C3D79] p-5">MANGO ENCHILADO</h3></div>
          <div class="m-4">
            <button
              class="bg-[#1c79b1] px-16 py-3 text-center rounded-sm text-white"
            >
              Ver Producto
            </button>
          </div>
        </li>
        <li>
          <div class="flex justify-center">
            <img src="@/assets/nut3.png" alt="" />
          </div>
          <div><h3 class="text-[#1C3D79] p-5">NVECES MIXTAS</h3></div>
          <div class="m-4">
            <button
              class="bg-[#1c79b1] px-16 py-3 text-center rounded-sm text-white"
            >
              Ver Producto
            </button>
          </div>
        </li>
        <li>
          <div class="flex justify-center">
            <img src="@/assets/nut4.png" alt="" />
          </div>
          <div><h3 class="text-[#1C3D79] p-5">NUEZ DELA INDIA</h3></div>
          <div class="m-4">
            <button
              class="bg-[#1c79b1] px-16 py-3 text-center rounded-sm text-white"
            >
              Ver Producto
            </button>
          </div>
        </li>
        <li>
          <div class="flex justify-center">
            <img src="@/assets/nut5.png" alt="" />
          </div>
          <div><h3 class="text-[#1C3D79] p-5">MANGO ENCHILADO</h3></div>
          <div class="m-4">
            <button
              class="bg-[#1c79b1] px-16 py-3 text-center rounded-sm text-white"
            >
              Ver Producto
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <div class="flex flex-row">
      <div class="flex flex-col w-full">
        <img src="@/assets/bg1.png" alt="" />
      </div>
      <div class="flex flex-col w-full">
        <img src="@/assets/bg2.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SliderOne",
};
</script>

<style></style>
