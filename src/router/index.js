import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheNutHouse from "../views/TheNutHouse.vue";
import FunFruit from "../views/FunFruit.vue";
import ProductosAGranel from "../views/ProductosAGranel.vue";
import AcercaFun from "../views/AcercaFun.vue";
import FundationFun from "../views/FundationFun.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/the-nut-house",
    name: "theNutHouse",
    component: TheNutHouse,
  },
  {
    path: "/thefun-fruit",
    name: "thefunfruit",
    component: FunFruit,
  },
  {
    path: "/productos-granel",
    name: "productos",
    component: ProductosAGranel,
  },
  {
    path: "/acerca-fun",
    name: "acerca",
    component: AcercaFun,
  },
  {
    path: "/fundation-fun",
    name: "fundation",
    component: FundationFun,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
