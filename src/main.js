import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

import { createRouter, createWebHistory } from "vue-router";

import Admin from "@/layouts/Admin.vue";
import App from "@/App.vue";
import Auth from "@/layouts/Auth.vue";
import Dashboard from "@/views/admin/Dashboard.vue";
import Index from "@/views/Index.vue";
import Landing from "@/views/Landing.vue";
import Login from "@/views/auth/Login.vue";
import Maps from "@/views/admin/Maps.vue";
import Profile from "@/views/Profile.vue";
import Register from "@/views/auth/Register.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import { createApp } from "vue";

// styles


// mouting point for the whole app


// layouts


// views for Admin layout


// views for Auth layout


// views without layouts


// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Index,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Landing,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
