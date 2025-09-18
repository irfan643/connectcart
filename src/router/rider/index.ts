import { RouteRecordRaw } from "vue-router";
import RiderTabs from "@/views/rider/RiderTabs.vue";
const   Rider: Array <RouteRecordRaw>=[
{
    path:"/",
  component :RiderTabs,
  redirect:"/RiderDashborad",
  children:[
        {
          path:"RiderDashborad",
          component : ()=> import ("@/views/rider/RiderDashborad.vue")
        }, 
         {
          path:"Deliver",
          component : ()=> import ("@/views/rider/Delivers.vue")
        }, 
         {
          path:"RiderEaring",
          component : ()=> import ("@/views/rider/RiderEaring.vue")
        },
          {
          path:"Profile",
          component : ()=> import ("@/views/rider/RiderProfile.vue")
        }
  ]
}



]
export  default Rider;
