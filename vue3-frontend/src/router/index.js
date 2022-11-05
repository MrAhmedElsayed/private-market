import { createRouter, createWebHistory } from "vue-router";
// authentication views
import LoginView from "@/views/authentication/LoginView";
import RegisterView from "@/views/authentication/RegisterView";
import ResetPasswordView from "@/views/authentication/ResetPasswordView";
// protected views
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/register", name: "register", component: RegisterView },
  {
    path: "/reset-password",
    name: "resetPassword",
    component: ResetPasswordView,
  },
  { path: "/about", name: "about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
