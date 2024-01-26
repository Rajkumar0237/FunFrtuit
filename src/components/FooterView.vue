<template>
  <div>
    <footer class="w-full bg-[#1c3d79] p-8">
      <div class="flex flex-row justify-around">
        <div class="block">
          <h1 class="text-center font-light text-white">
            FUNFRUIT EN TU BANDEJA DE ENTRADA
          </h1>
          <p class="my-5 text-center font-light text-white">
            Regístrate para recibir ofertas y nuevo contenido de FUNFRUIT.
          </p>
          <input
            type="email"
            placeholder="Ingresa tu email"
            name=""
            class="border border-gray-200 my-5 bg-[#1c3d79] rounded-lg py-5 px-4 text-black w-full leading-normal"
          />
          <div class="flex justify-center items-center flex-row">
            <a href="" class="m-3 font-light text-white">Aviso de privacidad</a>
            <a href="" class="m-3 font-light text-white"
              >Términos y condiciones</a
            >
            <a href="" class="m-3 font-light text-white">©FUNFRUIT 2020</a>
          </div>
        </div>

        <div class="block">
          <a href="" class="block text-center font-light text-white my-5"
            >Contáctanos</a
          >
          <a href="" class="block text-center font-light text-white my-5"
            >Únete a nuestro equipo</a
          >
          <a href="" class="block text-center font-light text-white my-5"
            >Blog</a
          >

          <div class="flex justify-center gap-6 my-4">
            <img src="@/assets/facbook.svg" alt="" srcset="" />
            <img src="@/assets/instagram.svg" alt="" srcset="" />
            <img src="@/assets/twitter.svg" alt="" srcset="" />
          </div>
          <img src="@/assets/concept.svg" alt="" srcset="" class="my-5" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style></style>
