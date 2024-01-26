<template>
  <HeaderView />
  <section>
    <div class="my-16">
      <div class="flex flex-row justify-around my-12">
        <h2 class="text-4xl text-justify my-10 text-[#4f4f4f]">
          TODOS LOS PRODUCTOS
        </h2>
        <div class="gap-32"></div>
        <div class="flex flrx-row justify-around w-[420px] items-center my-10">
          <p class="font-bold text-xl px-4 mb-2">{{ val }}artículos</p>
          <select
            name=""
            id=""
            class="rounded w-full block bg-gray-300 text-gray-700 py-3 px-4 pr-6 border"
            v-model="selectedoption"
          >
            <option value="Todos">Todos</option>
            <option value="Doy Pack">Doy Pack</option>
            <option value="Vitroleros">Vitroleros</option>
            <option value="Snack">Snack</option>
          </select>
        </div>
      </div>

      <div class="flex flex-row justify-around">
        <div class="block mx-10 w-[416px]">
          <h2 class="text-4xl text-justify text-[#4f4f4f]">THE NUT HOUSE</h2>
          <p class="text-xl text-justify">
            Deliciosa línea premium de semillas y frutas secas empacadas, bajas
            en calorías.
          </p>
          <p class="text-xl my-3 text-justify">
            <b>Sabías que... </b>ás de ser riquísimos, los frutos secos ayudan a
            reducir los niveles de colesterol, a perder peso y a prevenir el
            deterioro cognitivo. ¡Se volverán tus favoritos!
          </p>
        </div>
        <div>
          <div v-if="selectedoption === 'Todos'">
            <div class="block w-[832px]">
              <div class="flex flex-col-3">
                <div class="flex flex-row justify-around flex-wrap">
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts1.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Mix Cereza
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts2.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Mix Papaya
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts3.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Mix Pina
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts4.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Mix Kiwi
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts5.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Miguelito Spicy Fruit Mix
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts6.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Miguelito Spicy Trail Mix
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts7.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nueces Mixtas Tostadas
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts8.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez de la India con Chipotle
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts9.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez de la India Tostadas y Salada
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts10.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez Pecanera Mitadas
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts11.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez Pecanera Mitadas con Chipotle
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts12.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Pistacho Tostado y Salada
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts13.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Almendra Entera
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts14.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Mango Enchilado
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts15.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nueces Mixtas Tostadas
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts16.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez de la India
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts17.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Mango Enchilado
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts18.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Pistache Tostado
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts19.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Mezcla de Higo y Nueces
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts20.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Mezcla de Frutos y Nueces
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts21.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez de la India Chipotle
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts22.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez de la India
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts23.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez Pecanera Chipotle
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts24.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez Pecanera en Mitadas
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts25.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Pistache Salada y Tostado
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts26.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Spicy Fruit Mix
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 p-3 border-red-500 mx-auto rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts27.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Spicy Trail Mix
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedoption === 'Doy Pack'">
            <div class="block w-[832px]">
              <div class="flex flex-col-3">
                <div class="flex flex-row justify-around flex-wrap">
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts19.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Mezcla de Higo y Nueces
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts20.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Mezcla de Frutos y Nueces
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts21.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez de la India Chipotle
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts22.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez de la India
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts23.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez Pecanera Chipotle
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts24.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez Pecanera en Mitadas
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts25.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Pistache Salada y Tostado
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts26.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Spicy Fruit Mix
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 p-3 border-red-500 mx-auto rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts27.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Spicy Trail Mix
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedoption === 'Vitroleros'">
            <div class="block w-[832px]">
              <div class="flex flex-col-3">
                <div class="flex flex-row justify-around flex-wrap">
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts7.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nueces Mixtas Tostadas
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts8.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez de la India con Chipotle
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts9.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez de la India Tostadas y Salada
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts10.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez Pecanera Mitadas
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts11.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez Pecanera Mitadas con Chipotle
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts12.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Pistacho Tostado y Salada
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts13.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Almendra Entera
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts14.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Mango Enchilado
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts15.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nueces Mixtas Tostadas
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts16.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Nuez de la India
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts17.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Mango Enchilado
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts18.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Pistache Tostado
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedoption === 'Snack'">
            <div class="block w-[832px]">
              <div class="flex flex-col-3">
                <div class="flex flex-row justify-around flex-wrap">
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts1.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Mix Cereza
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts2.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Mix Papaya
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts3.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Mix Pina
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts4.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Mix Kiwi
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts5.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Miguelito Spicy Fruit Mix
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                  <div class="block my-4 w-1/3">
                    <a href="">
                      <img
                        src="@/assets/TheNutHouse/nuts6.jpg"
                        alt=""
                        class="w-full"
                      />
                      <p class="text-center text-lg my-4">
                        Snack Miguelito Spicy Trail Mix
                        <a href=""></a>
                      </p>
                      <img
                        src="@/assets/TheNutHouse/detail.svg"
                        alt=""
                        class="block mx-auto"
                      />
                      <button
                        class="block my-4 mx-auto p-3 border-red-500 rounded bg-[#efc432] border"
                      >
                        comprar en
                        <img
                          src="@/assets/TheNutHouse/amazon-logo.svg"
                          alt=""
                          class="mx-1 inline-block items-end"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  name: "TheNutHouse",
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      selectedoption: "Todos",
      val: 27,
    };
  },
  watch: {
    selectedoption(newval) {
      if (newval === "Todos") {
        this.val = 27;
      } else if (newval === "Doy Pack") {
        this.val = 9;
      } else if (newval === "Vitroleros") {
        this.val = 12;
      } else if (newval === "Snack") {
        this.val = 6;
      }
    },
  },
};
</script>

<style></style>
