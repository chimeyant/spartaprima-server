import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AppInfo from 'App/Models/AppInfo'
import Env from "@ioc:Adonis/Core/Env"
import Drive from "@ioc:Adonis/Core/Drive"


export default class AppsController {
  async index({}:HttpContextContract){
    const appinfo = await AppInfo.query().first()

    const logourl = await Drive.getSignedUrl("images/apps/"+ appinfo?.app_logo)

   const data = {
    app_name: appinfo?.app_name,
    app_ver: appinfo?.app_ver,
    app_desc: appinfo?.app_desc,
    app_logo: appinfo?.app_logo == 'logo-opendata.png'? Env.get("BASE_URL")+  "/images/apps/"+ appinfo?.app_logo :Env.get("BASE_URL")+ logourl  ,
    app_theme: {
      mode:appinfo?.app_theme,
      color:appinfo?.app_color
    },
    app_background: Env.get("BASE_URL")+ "/images/apps/"+   appinfo?.app_background,
    app_nav : Env.get("BASE_URL")+ "/images/apps/"+   appinfo?.app_nav,
    app_url: appinfo?.app_url,
    app_company: appinfo?.app_company,
    app_slogan: appinfo?.app_slogan,
    app_address: appinfo?.app_address,
    app_wa: appinfo?.app_wa
   }

   return data;
  }

  async menus({auth}: HttpContextContract){
    const user = await auth.user

    const authent = await user?.authent

    let menus :{} = [];

    if(authent == 'superadmin'){
      menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/auth/dashboard",
        },
        {
          title: "",
          type: "divider",
        },
        {
          title: "DATA MASTER",
          icon: "settings",
          route: "/",
          type: "subMenu",
          submenus:[
            {
              title: "Informasi Aplikasi",
              icon: "mdi-desktop-mac-dashboard",
              route: "/auth/master-app-info",
              type: "item",
            },
          ]
        },

        {
          title: "HALAMAN DEPAN",
          icon: "settings",
          route: "/",
          type: "subMenu",
          submenus:[
            {
              title: "Slider",
              icon: "image",
              route: "/auth/halaman-depan-slider",
              type: "item",
            },
            {
              title: "Sponsor",
              icon: "mdi-storefront",
              route: "/auth/halaman-depan-sponsor",
              type: "item",
            },
          ]
        },



        { title: "UTILITAS", type: "subMenu", route: "/" , submenus:[
          {
            title: "Manajemen Pengguna",
            icon: "engineering",
            route: "/auth/user",
            type: "item",
          },
          {
            title: "Profil Pengguna",
            icon: "accessibility",
            route: "/auth/profil-akun",
            type: "item",
          },
          {
            title: "Ganti Kata Sandi",
            icon: "vpn_key",
            route: "/auth/chngpwd",
            type: "item",
          },
          {
            title: "File Management",
            icon: "mdi-file",
            route: "/auth/utility-file-management",
            type: "item",
          },
        ]},

      ];

      return menus;
    }

    /**
     * Menu Administrator
     */

    if(authent == 'administrator'){
      menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/auth/dashboard",
        },

        {
          title: "DATA MASTER",
          icon: "settings",
          route: "/",
          type: "subMenu",
          submenus:[

          ]
        },

        {
          title: "HALAMAN DEPAN",
          icon: "settings",
          route: "/",
          type: "subMenu",
          submenus:[
            {
              title: "Slider",
              icon: "image",
              route: "/auth/halaman-depan-slider",
              type: "item",
            },
            {
              title: "Sponsor",
              icon: "mdi-storefront",
              route: "/auth/page-under-construction",
              type: "item",
            },
          ]
        },

        { title: "Utility", type: "subheader", route: "/" },

        {
          title: "Akun Aplikasi",
          icon: "engineering",
          route: "/auth/user",
          type: "item",
        },
        {
          title: "Profil Pengguna",
          icon: "accessibility",
          route: "/auth/profil-akun",
          type: "item",
        },
        {
          title: "Ganti Kata Sandi",
          icon: "vpn_key",
          route: "/auth/chngpwd",
          type: "item",
        },

      ];
      return menus;
    }

    /**
     * Menu User
     */

    if(authent == 'user'){
      menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/auth/dashboard",
        },

        { title: "Utility", type: "subheader", route: "/" },
        {
          title: "Profil Pengguna",
          icon: "accessibility",
          route: "/auth/profil-akun",
          type: "item",
        },
        {
          title: "Ganti Kata Sandi",
          icon: "vpn_key",
          route: "/auth/chngpwd",
          type: "item",
        },

      ];
      return menus;
    }

  }
}
