<template>
  <IonPage>
    <IonHeader class=" shadow-none ion-no-border border-b-1 border-[#634F96]">
      <IonToolbar >
        <IonTitle class="ion-text-capitalize  shadow-none  text_color   ion-text-center font-Manrope font-bold ">order</IonTitle>
   
        <div class="mt-2">

          <IonSegment class=" w-50    ion-no-padding " >
  
        <IonSegmentButton  class=" mt-2 size-4   "  value="Incoming" content-id="incoming" style="   --indicator-color:#E5E8EB; --indicator-height:4px;; --color-checked:#634F96">
        <IonLabel class="   capitalize  font-bold ">Incoming</IonLabel> 
           
        </IonSegmentButton>
        <IonSegmentButton  class="size-4 mt-2 "  value="past" content-id="past"  style="   --indicator-color:#E5E8EB; --indicator-height:4px;   --color-checked:#634F96">
        <ion-label class="  capitalize  font-bold">Past</ion-label> 
          
        </IonSegmentButton>
       </IonSegment>
        </div>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-no-padding ">
            <IonSegmentView>
         <IonSegmentContent id="incoming ion-no-padding" >

                
               <IonList lines="none">
               
                <IonItem  lines="none" >
          <div class="flex gap-3 ">

            <img src="../../../public/image/sope.png" class="size-16 rounded-lg" alt="sope">
            <IonLabel class="ion-align-content-center ">
              <h2 class=" text_color capitalize font-Manrope !text-[17px] ">handmade soap </h2>
              <p class="p_color">In Stock:50 </p>
            </IonLabel>
          </div>
        </IonItem>
        <IonItem   lines="none">
          <div class="flex gap-3 ">

            <img src="../../../public/image/sope.png" class="size-16 rounded-lg" alt="sope">
            <IonLabel class="ion-align-content-center ">
              <h2 class=" text_color capitalize font-Manrope !text-[17px] ">handmade soap </h2>
              <p class="p_color">In Stock:50 </p>
            </IonLabel>
          </div>
        </IonItem>
        <IonItem  button lines="none">
          <div class="flex gap-3 ">

            <img src="../../../public/image/sope.png" class="size-16 rounded-lg" alt="sope">
            <IonLabel class="ion-align-content-center ">
              <h2 class=" text_color capitalize font-Manrope !text-[17px] ">handmade soap </h2>
              <p class="p_color">In Stock:50 </p>
            </IonLabel>
          </div>
        </IonItem>
      </IonList>

         </IonSegmentContent>
        </IonSegmentView>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSegmentView,
  IonSegmentContent,
  IonButton,
  IonItem,
  IonList

} from "@ionic/vue";
</script>

<style scoped>
h1 {
  font-size: 24px;
  color: var(--ion-color-primary);
}
ion-segment-button{
  --padding-start: 0px;
   --padding-end: 0px;
    --padding-top: 0px;
     --padding-bottom: 0px;
     
}
ion-item{
  padding-top: 12px;
  --padding-start:10px;
}
</style>

