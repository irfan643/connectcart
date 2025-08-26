<template>
  <IonPage>
    <IonHeader>
      <IonToolbar class="ion-centered">
        <!-- RouterLink wraps IonButton -->
        
          <IonButton fill="clear" class="text-2xl  font-bold" @click="gotologin">
            connectcard
          </IonButton>
     
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <p>Welcome to the app!</p>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonHeader, IonToolbar, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';
     
const router = useRouter();

function gotologin() {
  router.push('/login');
}
</script>

<style>
/* optional styling */
</style>
