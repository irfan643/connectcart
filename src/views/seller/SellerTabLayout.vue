<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>

      <IonTabBar slot="bottom">
        <!-- Product Management -->
        <IonTabButton tab="PorductMangement" href="/PorductMangement">
          <IonIcon aria-hidden="true" :icon="pricetag" />
          <IonLabel>Product <br></br> Management</IonLabel>
        </IonTabButton>

        <!-- Orders -->
        <IonTabButton tab="orders" href="/Orders">
          <IonIcon aria-hidden="true" :icon="reader" />
          <IonLabel>Order</IonLabel>
        </IonTabButton>

        <!-- Earnings -->
        <IonTabButton tab="Earnings" href="/Earings">
          <IonIcon aria-hidden="true" :icon="wallet" />
          <IonLabel>Earning</IonLabel>
        </IonTabButton>

        <!-- Profile -->
        <IonTabButton tab="Profile" href="/Profile">
          <IonIcon aria-hidden="true" :icon="personCircle" />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";

import { pricetag, reader, wallet, personCircle } from "ionicons/icons";
</script>
