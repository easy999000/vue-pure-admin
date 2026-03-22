import { $t } from "@/plugins/i18n";
import { about } from "@/router/enums";

export default {
  path: "/about",
  redirect: "/about/index",
  meta: {
    icon: "ri/file-info-line",
    title: $t("menus.pureAbout"),
    rank: about
  },
  children: [
    {
      path: "/about/index",
      name: "About",
      component: () => import("@/views/about/index.vue"),
      meta: {
        title: $t("menus.pureAbout")
      }
    },
    {
      path: "/about/index2",
      redirect: "/about/index3",
      name: "About2",
      component: () => import("@/views/about/index.vue"),
      meta: {
        title: $t("menus.pureAbout")
      }
    }
  ]
} satisfies RouteConfigsTable;
