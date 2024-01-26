<template>
  <section>
    <div class="container my-20">
      <div class="flex justify-center">
        <h2
          class="sm-w-1/2 w-full text-center text-3xl uppercase text-[#1C3D79]"
        >
          un delicioso<span class="text-[#f08828]"> snack </span>
          cualouier<br />
          moment del dia
        </h2>
      </div>
      <div class="flex justify-center my-5">
        <p class="text-sm">Elige el que más se te <b>antoje</b></p>
      </div>
    </div>
    <div class="flex flex-row h-[410px] gap-4">
      <div
        class="card shadow-lg rounded-lg cursor-pointer bg-transparent hover:bg-[#1c79b1]"
      >
        <img src="@/assets/snack1.png" alt="" />
        <h2 class="w-2/3 text-center mx-auto font-bold text-xl text-white">
          NUEZ DELA INDIA<br />SALADY TOSTADA
        </h2>
      </div>

      <div
        class="card shadow-lg rounded-lg cursor-pointer hover:bg-[#1c79b1] bg-transparent"
      >
        <img src="@/assets/snack2.png" alt="" />
        <h2 class="w-2/3 text-center mx-auto font-bold text-xl text-white"></h2>
      </div>
      <div
        class="card shadow-lg rounded-lg cursor-pointer hover:bg-[#1c79b1] bg-transparent"
      >
        <img src="@/assets/snack3.png" alt="" />
        <h2 class="w-2/3 text-center mx-auto font-bold text-xl text-white"></h2>
      </div>
      <div
        class="card shadow-2xl rounded-lg cursor-pointer hover:bg-[#1c79b1] bg-transparent"
      >
        <img src="@/assets/snack4.png" alt="" />
        <h2 class="w-2/3 text-center mx-auto font-bold text-xl text-white"></h2>
      </div>
    </div>
  </section>
  <section>
    <div class="text-center mt-16">
      <h1 class="text-center text-3xl py-6 text-[#1C3D79]">¿ SE TE ANTOJÓ ?</h1>
      <a href=""
        ><button
          class="my-4 mx-auto text-white bg-[#1C3D79] py-3 px-10 rounded"
        >
          Var todos los productos
        </button></a
      >
    </div>
  </section>
  <section>
    <div class="mt-12 p-2">
      <div class="flex justify-center my-6">
        <h2 class="text-3xl text-center text-[#1C3D79]">
          ¡ ENCUÉNTRANOS TAMBIÉN AQUÍ !
        </h2>
      </div>
      <div class="flex justify-center my-4">
        <p class="text-lg">Toda nuestra variedad <b>a tu alcance</b></p>
      </div>
    </div>
    <div class="card flex h-[220px] gap-5 mt-6">
      <div class="shadow-lg rounded-lg mb-8 hover:bg-gray-100 w-[437px]">
        <a href=""
          ><img src="@/assets/farmacia.png" alt="" class="px-16 py-8 mx-auto"
        /></a>
      </div>
      <div class="shadow-lg rounded-lg mb-8 hover:bg-gray-100 w-[437px]">
        <a href=""
          ><img src="@/assets/walmart.svg" alt="" class="px-16 py-8 mx-auto"
        /></a>
      </div>
      <div class="shadow-lg rounded-lg mb-8 hover:bg-gray-100 w-[437px]">
        <a href=""
          ><img src="@/assets/amazon.svg" alt="" class="px-16 py-8 mx-auto"
        /></a>
      </div>
    </div>

    <div class="p-24">
      <a href=""
        ><button
          class="my-4 mx-auto text-xl text-[#1C3D79] bg-[#efc432] py-3 px-10 rounded"
        >
          ¡Quiero comprar ahí!
        </button></a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "SliderTwo",
};
</script>

<style></style>
