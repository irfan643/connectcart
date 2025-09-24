<template>
  <ion-page>
    <ion-tabs >
      <ion-router-outlet></ion-router-outlet>  
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="dashboard" href="/dashboard">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="packages" href="/packages">
          <ion-icon aria-hidden="true" :icon="cubeOutline" />
          <ion-label>Packages</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="return" href="/return">
          <ion-icon aria-hidden="true" :icon="refreshOutline" />
          <ion-label>Return and Issues</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/profile">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Profile</ion-label> 
        </ion-tab-button>

      </ion-tab-bar>  
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonTabBar, IonTabButton, IonTabs, 
  IonLabel, IonIcon, IonPage, IonRouterOutlet 
} from '@ionic/vue';
 import box from '@/assets/icon/box.svg'
import { person, home, car, pricetag, cubeOutline, refreshCircleOutline, refreshOutline } from 'ionicons/icons';
</script>
