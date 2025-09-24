<template>
  <IonPage>
    <!-- Page Header -->
    <IonHeader>
      <IonToolbar>
         <IonTitle>profie</IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Page Content -->
    <IonContent class="ion-padding">
      <h2>Welcome to Ionic Vue </h2>
      <p>This is a basic page layout using Ionic + Vue.</p>

      <IonButton expand="block" @click="sayHello">
        Click Me
      </IonButton>
    </IonContent>
  </IonPage>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue'

const sayHello = () => {
  console.log("Hello from Ionic Vue!")
  alert("Hello from Ionic Vue!")
}
</script>

<style scoped>
h2 {
  margin-top: 10px;
  font-weight: bold;
  color: #3880ff; /* Ionic blue */
}
</style>

