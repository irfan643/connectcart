<template>
    <IonPage>
        <IonHeader class="ion-no-padding ion-no-border ">
            <IonToolbar>
                <IonTitle class="ion-text-center">Order</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
                      <div v-for="n in 10">
                                    <ion-item lines="none" class=" overflow-hidden pb-4">
                <!-- Product Image -->
                <ion-avatar slot="start" class="w-[70px] h-[93px] rounded-sm overflow-hidden"
                    style="--border-radius: 0.375rem;">
                    <img src="/public/image/night_suite.png" alt="Product" />
                </ion-avatar>

                <!-- Order Details -->
                <ion-label class="ml-4">
                    <h3 class="!font-bold text_font  font-Manrope">
                        Order number: <span class="font-normal">789012</span>
                    </h3>
                    <p class="text-sm   !text-[#634F96]">Order date: 2024-01-15</p>
                    <p class="text-sm !text-[#634F96]">Total: $150</p>
                </ion-label>

                <!-- Arrow Icon -->
                        <ion-icon aria-hidden="true" :icon="arrowForwardOutline" class="size-6" />

            </ion-item>
                      </div>
               
            <ion-item lines="none" class=" overflow-hidden pb-4">
                <!-- Product Image -->
                <ion-avatar slot="start" class="w-[70px] h-[93px] rounded-sm overflow-hidden"
                    style="--border-radius: 0.375rem;">
                    <img src="/public/image/night_suite.png" alt="Product" />
                </ion-avatar>

                <!-- Order Details -->
                <ion-label class="ml-4">
                    <h3 class="!font-bold text_font  font-Manrope">
                        Order number: <span class="font-normal">789012</span>
                    </h3>
                    <p class="text-sm   !text-[#634F96]">Order date: 2024-01-15</p>
                    <p class="text-sm !text-[#634F96]">Total: $150</p>
                </ion-label>

                <!-- Arrow Icon -->
                        <ion-icon aria-hidden="true" :icon="arrowForwardOutline" class="size-6" />

            </ion-item>
             <ion-item lines="none" class=" overflow-hidden pb-4">
                <!-- Product Image -->
                <ion-avatar slot="start" class="w-[70px] h-[93px] rounded-sm overflow-hidden"
                    style="--border-radius: 0.375rem;">
                    <img src="/public/image/coat.png" alt="Product" />
                </ion-avatar>

                <!-- Order Details -->
                <ion-label class="ml-4">
                    <h3 class="!font-bold text_font  font-Manrope">
                        Order number: <span class="font-normal">789012</span>
                    </h3>
                    <p class="text-sm   !text-[#634F96]">Order date: 2024-01-15</p>
                    <p class="text-sm !text-[#634F96]">Total: $150</p>
                </ion-label>

                <!-- Arrow Icon -->
                        <ion-icon aria-hidden="true" :icon="arrowForwardOutline" class="size-6" />

            </ion-item>
             <ion-item lines="none" class=" overflow-hidden ">
                <!-- Product Image -->
                <ion-avatar slot="start" class="w-[70px] h-[93px] rounded-sm overflow-hidden"
                    style="--border-radius: 0.375rem;">
                    <img src="/public/image/bag.png" alt="Product" />
                </ion-avatar>

                <!-- Order Details -->
                <ion-label class="ml-4">
                    <h3 class="!font-bold text_font  font-Manrope">
                        Order number: <span class="font-normal">789012</span>
                    </h3>
                    <p class="text-sm   !text-[#634F96]">Order date: 2024-01-15</p>
                    <p class="text-sm !text-[#634F96]">Total: $150</p>
                </ion-label>

                <!-- Arrow Icon -->
                        <ion-icon aria-hidden="true" :icon="arrowForwardOutline" class="size-6" />

            </ion-item>


            
        </IonContent>

    </IonPage>

</template>

<script setup lang="ts">

import { IonPage, IonContent, IonHeader, IonToolbar,IonLabel, IonAvatar,IonItem,IonTitle } from "@ionic/vue";
import { ref } from "vue"
import { arrowForwardOutline} from "ionicons/icons";




</script>
<style></style>
