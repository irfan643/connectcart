<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle class="ion-text-center">cart</IonTitle>
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

   import { IonPage, IonContent, IonHeader,IonToolbar, IonTitle } from "@ionic/vue";
import {ref} from "vue"
    const increment =ref(0)
     function handclick (){
        increment.value++
     }



</script>
<style>
       
</style>
