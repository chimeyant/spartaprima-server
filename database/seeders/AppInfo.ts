import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AppInfo from 'App/Models/AppInfo'

export default class AppInfoSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await AppInfo.createMany([
      {
        app_name:"Ant Apps Templates",
        app_ver:" 6",
        app_desc:"Aplikasi Templating",
        app_theme: "dark",
        app_color:"indigo",
        app_logo:null,
        app_background: null,
        app_url: "http://localhost",
        app_company:"Antsoft Media",
        app_slogan: "Made With Love",
        app_address:"Tangerang, Indonesia",
      }
    ])
  }
}
