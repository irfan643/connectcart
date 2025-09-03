<template>
  <IonPage>
    <!-- Header -->
    <IonHeader  class="ion-no-border shadow-none">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/home" />
        </IonButtons>
        <IonTitle class="ion-text-center">Payment Methods</IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding">
         
             
        <!-- Payment Option -->
        <IonItem lines="none"
        button 
        class="rounded-lg"
        > 
        <div class="size-8  mr-6 ">
              <IonIcon :icon="Rectangle"  class=" size-8 "  ></IonIcon>
        </div>
            
            <div>
              <p class="font-medium">Credit Card</p>
              <p class="text-sm text-gray-500">Visa ending in 1234</p>
            </div>
          
          <IonButton  fill="clear"   slot="end" >
            <IonIcon slot="icon-only" :icon="chevronForwardOutline" class="text-gray-400 w-5 h-5" />

          </IonButton>
        </IonItem>

        <!-- PayPal -->
        
        <!-- Another Credit Card -->
      
      

      <!-- Add Payment Button -->
      <div class="mt-9 flex justify-center
      
      
      
       ">
        <IonButton expand="fill"   color="tertiary" class="bg-purple-600 hover:bg-purple-700 rounded-lg">
          Add Payment Method
        </IonButton>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup>
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonIcon, IonButton,
  IonItem
} from '@ionic/vue'
import  Rectangle from "../../public/image/Rectangle.svg"
import { chevronForwardOutline } from 'ionicons/icons'
import { ref } from 'vue'

// reactive selection
const selected = ref('')
</script>
