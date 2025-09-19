<template>
  <IonPage>
    <IonHeader class="ion-no-border  shadow-none">
      <IonToolbar>
        
        <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        <IonTitle class="ion-text-center font-semibold  text_color ">Profile</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <!-- Profile Avatar + Name -->
        <div class=" p-0  flex justify-end  " >
           <IonButtons  >
            <IonButton  >
              <IonIcon :icon="pencil" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </div>
      
      <div class="ion-text-center ion-padding">
        
          
          <IonAvatar style="width: 100px; height: 100px; margin: auto">
          <img
            src="../../../public/image/store_avtar.png"
            alt="Profile Avatar"
          />
        </IonAvatar>
         
             
        
        <h2 class="mt-2 font-semibold">Ethan Carter</h2>
        <p class="driver-id text-gray-500">Driver ID: 123456</p>
      </div>

      <!-- Personal Information -->
      <IonLabel class="capitalize text-xl font-semibold my-2">
        Personal Information
      </IonLabel>
      <IonList>
        <!-- Email -->
        <IonItem lines="none" button style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="MailOpenOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>
            <h2>Email</h2>
            <p>ethan.carter@email.com</p>
          </IonLabel>
          <IonButtons slot="end">
            <IonButton fill="clear">
              <IonIcon :icon="pencil" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonItem>

        <!-- Phone -->
        <IonItem lines="none" button style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="CallOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>
            <h2>Phone Number</h2>
            <p>+1 (555) 123-4567</p>
          </IonLabel>
          <IonButtons slot="end">
            <IonButton fill="clear">
              <IonIcon :icon="pencil" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonItem>
      </IonList>

      <!-- Vehicle Information -->
      <IonLabel class="capitalize text-xl font-semibold my-2">
        Vehicle Information
      </IonLabel>
      <IonList>
        <!-- Vehicle Type -->
        <IonItem lines="none" style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="CarOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>
            <h2>Vehicle Type</h2>
            <p>Sedan</p>
          </IonLabel>
          <IonButtons slot="end">
            <IonButton fill="clear">
              <IonIcon :icon="pencil" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonItem>

        <!-- License Plate -->
        <IonItem lines="none" style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="IdCardOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>
            <h2>License Plate</h2>
            <p>ABC-123</p>
          </IonLabel>
          <IonButtons slot="end">
            <IonButton fill="clear">
              <IonIcon :icon=" pencil" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonItem>
      </IonList>

      <!-- Account Settings -->
      <IonLabel class="capitalize text-xl font-semibold my-2">
        Account Settings
      </IonLabel>
      <IonList>
        <!-- Password -->
        <IonItem lines="none" button style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="LockClosedOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>Update Password</IonLabel>
          <IonButtons slot="end">
            <IonButton fill="clear">
              <IonIcon :icon="pencil" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonItem>

        <!-- Notifications -->
        <IonItem lines="none" button style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="NotificationsOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>Notifications</IonLabel>
         
        </IonItem>

        <!-- Help -->
        <IonItem lines="none" button style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="HelpCircleOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>Help & Support</IonLabel>
          
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonAvatar,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/vue";
 import pencil from "@/assets/icon/pencil.svg";
// PascalCase icon imports
import {
  mailOpenOutline as MailOpenOutline,
  callOutline as CallOutline,
  carOutline as CarOutline,
  idCardOutline as IdCardOutline,
  lockClosedOutline as LockClosedOutline,
  notificationsOutline as NotificationsOutline,
  helpCircleOutline as HelpCircleOutline,
  pencilOutline as PencilOutline,
} from "ionicons/icons";
</script>
<style>
 p{
  color:#634F96 !important;
 }
</style>
