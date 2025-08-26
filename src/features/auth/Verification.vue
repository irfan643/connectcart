<template>
  <IonPage>
    
    <div class="flex justify-center items-center">
      <IonToolbar class="ion-text-center">
       
          <h1>Verification</h1>
        
      </IonToolbar>
    </div>

   <IonContent class="ion-padding">
     <div class="grid gap-4 ">
        <IonTitle>
         Enter send code
       </IonTitle>
         <div>
          <p>
            We sent a verification code to your email. Please enter it below to continue.
          </p>
         </div>
  <div class="flex justify-center items-center">
    <ion-input-otp :length="7" color="tertiary"></ion-input-otp>
  </div>
     </div>  
  
    <div class=" flex justify-center items-center">
      <IonButton color="light" class="">
         resend code
      </IonButton>
     
    
    </div>
    
   
</IonContent>

  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonInputOtp,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import { ref } from "vue";
import { useToast } from "@/composable/useToast";
const { showToast } = useToast();
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");


const goBack = () => {
  router.back(); // navigate back in history stack
};
function login() {
  console.log("Logging in with:", email.value, password.value);
  if (!email.value || !password.value) {
    showToast("Email and password are required", "error");
    return;
  }
  showToast(`Logging in as ${email.value}...`, "success", "top");
}
</script>
