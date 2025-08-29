<template>
    <IonPage>
         <IonHeader>
      <IonToolbar>
        <!-- Back button on the left -->
        <ion-buttons slot="start">
          <ion-back-button 
            default-href="/home" 
            :icon="arrowBack" 
          
          ></ion-back-button>
        </ion-buttons>

        <!-- Center title -->
        <IonTitle class="ion-text-center">
            product
        </IonTitle>
      </IonToolbar>
    </IonHeader>
            <IonContent class=" flex  justify-center items-center h-full ">
                      <div>
        <button @click="handclick"> click me</button>
        <div >{{ increment}}</div>  
    </div>
            </IonContent>
       
    </IonPage>
  
</template>

<script setup lang="ts">

   import {IonPage, IonContent, IonHeader,IonToolbar, IonBackButton,IonButtons,IonTitle } from "@ionic/vue";
   import { arrowBack } from "ionicons/icons";
import {ref} from "vue"

 
    const increment =ref(0)
     
     function handclick (){
        increment.value++
     }



</script>
<style>
       
</style>
