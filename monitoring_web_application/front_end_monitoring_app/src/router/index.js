import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  },
  {
    path: "/reset-password",
    name: "resetPassword",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "resetPassword" */ "@/views/ResetPassword.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue"),
    children: [
      {
        path: "/dashboard-main",
        name: "dashboardMain",
        component: () => import(/* webpackChunkName: "dashboardMain" */ "@/views/DashboardMain.vue")
      },
      {
        path: "/miners",
        name: "miners",
        component: () => import(/* webpackChunkName: "miners" */ "@/views/Miners.vue")
      },
      {
        path: "/alerts",
        name: "alerts",
        component: () => import(/* webpackChunkName: "alerts" */ "@/views/Alerts.vue")
      },
      {
        path: "/statistics",
        name: "statistics",
        component: () => import(/* webpackChunkName: "statistics" */ "@/views/Statistics.vue")
      },
      {
        path: "/view-of-miner",
        name: "viewOfMiner",
        component: () => import(/* webpackChunkName: "view of miners" */ "@/views/ViewOfMiner")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;