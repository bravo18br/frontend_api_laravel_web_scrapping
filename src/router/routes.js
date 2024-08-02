import MainLayout from "layouts/MainLayout.vue";
import IndexPage from "pages/IndexPage.vue";
import IndexPageFirefly3 from "pages/IndexPageFirefly3.vue";
import IndexPagePihole from "pages/IndexPagePihole.vue";
import IndexPageBitwarden from "pages/IndexPageBitwarden.vue";
import IndexPageMonitoraSites from "pages/IndexPageMonitoraSites.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", component: IndexPage }],
  },
  {
    path: "/firefly3",
    component: MainLayout,
    children: [{ path: "", component: IndexPageFirefly3 }],
  },
  {
    path: "/pihole",
    component: MainLayout,
    children: [{ path: "", component: IndexPagePihole }],
  },
  {
    path: "/bitwarden",
    component: MainLayout,
    children: [{ path: "", component: IndexPageBitwarden }],
  },
  {
    path: "/monitorasites",
    component: MainLayout,
    children: [{ path: "", component: IndexPageMonitoraSites }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
