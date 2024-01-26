<template>
  <HeaderView />
  <section>
    <div class="flex justify-center items-center bg-[#1c3d79] h-[500px]">
      <img
        src="@/assets/Acerca/logo_fun4.svg"
        alt=""
        srcset=""
        class="object-contain"
      />
    </div>
    <div
      class="bg-[url('@/assets/Acerca/bgi2.png')] bg-auto bg-right-top bg-no-repeat"
    >
      <div class="flex justify-evenly items-center h-[500px]">
        <h1 class="text-6xl font-semibold text-[#225d38] w-[600px]">
          QUIÉNES SOMOS
        </h1>
        <p class="w-[600px] text-start text-sm font-sans">
          Fun Fruit nace con el nombre de Tepehuana, que hace referencia a la
          Sierra de Tepehuanes, ubicada al sur de Chihuahua y parte de Durango,
          lugar de donde es originaria la marca.<br />
          En el año 2000 se funda Fun Fruit con una imagen de un Sol feliz por
          encima del monte que hace referencia a la naturaleza de nuestros
          productos y lo amigable que son para la salud.
        </p>
      </div>
    </div>
    <div>
      <img src="@/assets/Acerca/bgi1.png" alt="" class="w-full h-[600px]" />
    </div>
    <div>
      <div class="text-center py-12">
        <h1 class="text-3xl font-semibold text-[#1c3d79]">
          CONOCE NUESTRAS LÍNEAS
        </h1>
      </div>
      <div class="flex justify-around h-[400px] mt-10">
        <div>
          <img src="@/assets/Acerca/img1.png" alt="" />
          <h2 class="text-2xl font-bold p-4">NUT HOUSE</h2>
        </div>
        <div>
          <img src="@/assets/Acerca/img2.png" alt="" />
          <h2 class="text-2xl font-bold p-4">FUNFRUIT</h2>
        </div>
        <div>
          <img src="@/assets/Acerca/img3.png" alt="" />
          <h2 class="text-2xl font-bold p-4">A GRANEL</h2>
        </div>
      </div>
    </div>
  </section>
  <FooterView />
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  name: "AcercaFun",
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style></style>
