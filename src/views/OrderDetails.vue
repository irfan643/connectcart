<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="border-none ion-shadow-none">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        <IonTitle class="ion-text-center">Order Details</IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding bg-[#faf7fc]">
      
      <!-- Order Info -->
      <div class="space-y-3">
        <div class="flex justify-between summary-row">
          <span>Order number</span>
          <span>9X7Y6Z</span>
        </div>
        <div class="flex justify-between summary-row">
          <span>Date</span>
          <span>15/08/23</span>
        </div>
        <div class="flex justify-between summary-row">
          <span>Items</span>
          <span>3</span>
        </div>
        <div class="flex justify-between summary-row">
          <span>Total</span>
          <span>$245</span>
        </div>
      </div>

      <!-- Progress -->
      <div class="mt-6">
        <div class="flex justify-between summary-row mb-2">
          <span>Order status</span>
          <span>75%</span>
        </div>
        <IonProgressBar value="0.75" color="primary" class="rounded-lg h-2"></IonProgressBar>
        <p class="text-sm text-violet-500 mt-2">Estimated delivery: 2 days</p>
      </div>

      <!-- Items List -->
      <IonList lines="none" class="mt-6 p-0 space-y-4">
        <IonItem class="ion-no-padding">
          <IonThumbnail slot="start">
            <img src="https://via.placeholder.com/60x60?text=T-shirt" />
          </IonThumbnail>
          <IonLabel>
            <h2 class="font-bold">Liam Carter</h2>
            <p class="text-sm text-gray-500">Cotton T-shirt</p>
            <p class="font-semibold">$120</p>
          </IonLabel>
        </IonItem>

        <IonItem class="ion-no-padding">
          <IonThumbnail slot="start">
            <img src="https://via.placeholder.com/60x60?text=Jeans" />
          </IonThumbnail>
          <IonLabel>
            <h2 class="font-bold">Sophia Bennett</h2>
            <p class="text-sm text-gray-500">Denim Jeans</p>
            <p class="font-semibold">$75</p>
          </IonLabel>
        </IonItem>

        <IonItem class="ion-no-padding">
          <IonThumbnail slot="start">
            <img src="https://via.placeholder.com/60x60?text=Belt" />
          </IonThumbnail>
          <IonLabel>
            <h2 class="font-bold">Ethan Walker</h2>
            <p class="text-sm text-gray-500">Leather Belt</p>
            <p class="font-semibold">$50</p>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Bottom Info -->
      <div class="mt-6 space-y-3">
        <div class="flex justify-between summary-row">
          <span>Order number</span>
          <span>7FG8H9</span>
        </div>
        <div class="flex justify-between summary-row">
          <span>Transaction Date</span>
          <span>15/08/23</span>
        </div>
        <div class="flex justify-between summary-row">
          <span>Delivery Address</span>
          <span>123 Oak Street, Anytown</span>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonProgressBar,
} from '@ionic/vue'
</script>

<style scoped>
/* Utility: first span bold in every summary row */
.summary-row > span:first-child {
  @apply font-semibold text-gray-700;
}
</style>
