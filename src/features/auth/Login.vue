<template>
  <IonPage>
    <IonHeader class="  ion-no-border">
      <IonToolbar>
         <div class=" flex justify-between items-center ">
<IonRouterLink router-link="/tabs/tab1" router-direction="back">
  <IonIcon 
    :icon="arrowBackOutline" 
    class="text-2xl cursor-pointer pl-2.5" 
    @click="goBack"
  />
</IonRouterLink>
 <div class="absolute left-1/2 transform -translate-x-1/2 text-4xl font-Manrope font-semibold text-black">
            Welcome
          </div>           
          </div>
       


      </IonToolbar>

    </IonHeader>
    <IonContent class="ion-padding ">

      <div class="ion-margin-bottom    gap-5 flex flex-col  ">

        <div
          class="  w-full  border-2 border-gray-300 bg-[#F2F0F5] rounded-xl px-3 transition focus-within:border-[#6030ff]  focus-within:scale-105">

          <IonInput type="email" placeholder="Email" v-model="email" 
           
          class="  no-highlight"/>
        </div>


        <div
          class="  w-full bg-[#F2F0F5] border-2 border-gray-300 rounded-xl px-3 transition focus-within:border-[#6030ff]  focus-within:scale-105">

          <IonInput type="password" placeholder="Password" v-model="password" class="no-highlight">
            <IonInputPasswordToggle color="tertiary" slot="end"></IonInputPasswordToggle>
          </IonInput>



        </div>
      </div>
        <div class=" ion-margin-top font mb-4">
        <router-link to="/Forget">Forgot password</router-link>
      </div>
      <div >
              <IonButton expand="block" @click="login" color="tertiary"  
             class="btn font-bold  capitalize"
              
              >Log in</IonButton>

      </div>
     


      
      <div class="ion-text-center ion-margin-top">
       <div class="ion-text-center ion-margin-top">
        Don’t have an account? <router-link to="/signup" router-direction="forward">signup </router-link>
      </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonButton, IonHeader, IonInputPasswordToggle, IonToolbar,IonIcon } from '@ionic/vue'
import { ref } from 'vue'
import { useToast } from '@/composable/useToast'
import { arrowBackOutline } from 'ionicons/icons'
const { showToast } = useToast()
import { RouterLink, useRouter} from 'vue-router';


const router = useRouter();
const email = ref('')
const password = ref('')
     

 const goBack = () => {
  router.push({path:"/tabs/tab1", query: { routerDirection: "back" }}); // navigate back in history stack
};
function login() {
  console.log('Logging in with:', email.value, password.value)
  if (!email.value || !password.value) {
   
    showToast("Email and password are required", "error");
    return;
   

  }
  showToast(`Logging in as ${email.value}...`, "success", "top");
}
</script>




