<template>
  <IonPage>
    <IonHeader class="shadow-none ion-no-border border-b-1 border-[#634F96]">
      <IonToolbar>
        <IonTitle
          class="ion-text-capitalize shadow-none text_color ion-text-center font-Manrope font-bold"
        >
          order
        </IonTitle>

        <div class="mt-2">
          <!-- set default value to 'incoming' -->
          <IonSegment value="incoming" class="w-50 ion-no-padding">
            <IonSegmentButton
              value="incoming"
              content-id="incoming"
              class="mt-2 size-4"
              style="--indicator-color:#E5E8EB; --indicator-height:4px; --color-checked:#634F96"
            >
              <IonLabel class="capitalize font-bold">Incoming</IonLabel>
            </IonSegmentButton>

            <IonSegmentButton
              value="past"
              content-id="past"
              class="mt-2 size-4"
              style="--indicator-color:#E5E8EB; --indicator-height:4px; --color-checked:#634F96"
            >
              <IonLabel class="capitalize font-bold">Past</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-no-padding">
      <IonSegmentView>
        <!-- must match the content-id -->
        <IonSegmentContent id="incoming">
          <IonList lines="none">
            <IonItem lines="none" button 
            @click="goto(452154)"
            >
              <div class="flex gap-3">
                <img
                  src="../../../public/image/night_suite.png"
                  class="size-16 rounded-lg border-1 border-gray-300"
                  alt="soap"
                />
                <IonLabel class="ion-align-content-center">
                  <h2 class="text_color capitalize font-Manrope !text-[17px]">
                    handmade soap
                  </h2>
                  <p class="p_color">In Stock:50</p>
                </IonLabel>
              </div>
              <div slot="end" class="p_color">
                {{ formatCurrency(12) }}
              </div>
            </IonItem>

            <!-- repeat items if needed -->
          </IonList>
        </IonSegmentContent>

        <IonSegmentContent id="past">
           
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
  IonItem,
  IonList,
} from "@ionic/vue";
import { formatCurrency } from "@/utils/id";
import { useRouter } from "vue-router";
const route =useRouter();
function goto(id:number){
  route.push(`/OrderInfo/+${id}`)
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  color: var(--ion-color-primary);
}
ion-segment-button {
  --padding-start: 0px;
  --padding-end: 0px;
  --padding-top: 0px;
  --padding-bottom: 0px;
}
ion-item {
  padding-top: 12px;
  --padding-start: 10px;
}
</style>
