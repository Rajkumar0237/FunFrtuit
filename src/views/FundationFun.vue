<template>
  <HeaderView />
  <section>
    <div class="bg-[url('@/assets/Fundation/index.png')] bg-cover h-[500px]">
      <div class="block justify-center p-60">
        <img
          src="@/assets/Fundation/fundcion-logo.svg"
          alt=""
          srcset=""
          class="mx-auto"
        />
        <h2 class="text-xl text-center mt-2 px-4 text-[#5fa1a3]">
          Asociación Ministerios de Amor A.C.
        </h2>
      </div>
    </div>

    <div class="flex w-full justify-around my-8 items-center">
      <div class="w-[629px]">
        <img src="@/assets/Fundation/fundacion-1.png" alt="" srcset="" />
      </div>
      <div class="w-[550px]">
        <h2 class="text-lg text-[#5fa1a3] font-extrabold">UNIDOS</h2>
        <p class="text-justify p-2">
          En Fun Fruit estamos comprometidos con la sociedad, creemos en el
          talento de los pequeños que no tienen los recursos necesarios, razón
          por la cual apoyamos a la Asociación Misterios de Amor A.C. dedicada
          al apoyo de infantes en situación de calle.
        </p>
      </div>
    </div>

    <div class="flex w-full justify-around my-11 items-center">
      <div class="w-[550px]">
        <h2 class="text-lg text-[#1c3d79] font-extrabold">AYUDAMOS</h2>
        <p class="text-justify p-2">
          Por medio de la Fundación, convertimos sueños en realidades,
          transformamos caras tristes en momentos de alegría y bienestar
          ayudando a cambiar el entorno de los pequeños dándoles nueva
          oportunidad y esperanza.
        </p>
      </div>
      <div class="w-[629px]">
        <img src="@/assets/Fundation/fundacion2.png" alt="" srcset="" />
      </div>
    </div>
  </section>
  <FooterView />
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  name: "FundationFun",
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style></style>
