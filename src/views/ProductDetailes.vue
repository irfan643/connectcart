<template>
  <ion-page>
    <!-- Header -->
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-buttons slot="end" class="pr-2.5 ">
          <ion-icon aria-hidden="true" :icon="bag" class="size-6" />

        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->

    <ion-content>
      <!-- Product Image -->
      <ion-img :src="product.image" class="product-image" />
      <div class="ion-padding-start">
        <!-- Product Info -->
        <div class="product-info font-Manrope text-[#120D1C] ">
          <h2>{{ product.name }}</h2>
          <p>{{ product.tagline }}</p>
          <h6> {{ product.pricetag }}</h6>
          <p>{{ product.short_description }}</p>
          <!-- Size Selector -->
        </div>
        <div v-if="selectedSize" class="flex gap-3.5 my-12">

          <div v-for="item in ['Small', 'Medium', 'Large']">
            <div class="border-1 border-[#D6D1E8] rounded-lg px-4 py-2"
              :class="{ 'button_color ': selectedSize === item.toLowerCase() }"
              @click="selectedSize = item.toLowerCase()">{{ item }}</div>
          </div>
        </div>


        <!-- Description -->
        <ion-card class="shadow-none space-y-4 border-none text_color">
          <ion-card-header>
            <ion-card-title class="text_color   font-bold">
              Description
            </ion-card-title>
          </ion-card-header>

          <ion-card-content class="ion-no-padding product-info ion-padding-end ">
            <!-- Description Section -->
            <p class=" leading-relaxed text-base  text_color  pb-6 ">
              {{ product.description }}
            </p>

            <!-- Specification Section -->
<h1 class="font-Manrope text-[2.5rem] font-bold pb-6 text_color">
  Specification
</h1>

            <ion-grid>
              <ion-row>
                <ion-col size="6" v-for="(spec, index) in product.specs" :key="index">
                  <p class="mb-2">{{ spec }}</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <!-- Delivery & Returns -->
        <ion-card class="shadow-none ion-no-padding  border-none">
          <ion-card-header>
            <ion-card-title>Delivery & Returns</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p class="whitespace-pre-line text-base leading-relaxed text-gray-700">
              {{ product.description }}
            </p>
          </ion-card-content>
        </ion-card>

        <!-- Pair it With -->
        <ion-text>
          <h3>Pair it With</h3>
        </ion-text>
        <ion-grid>
          <div class=" flex   space-x-4 overflow-x-auto py-2 no-scrollbar ">
            <ion-row v-for="(item, index) in product.pairWith" :key="index">
              <ion-col>
                <Card :imageSrc="item.image" :title="item.name" :productId="index" cardWidth="w-42" />
              </ion-col>
            </ion-row>
          </div>
        </ion-grid>

        <!-- Store Info -->
        <ion-card>
          <ion-card-header>
            <ion-card-title>Store Information</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>{{ product.store.name }}</p>
            <ion-button expand="block">{{ product.store.actionText }}</ion-button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>

    <!-- Bottom Buy Button -->
    <ion-footer>
      <ion-toolbar>
        <ion-button expand="block" color="primary">Buy Now</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent,
  IonImg, IonSegment, IonSegmentButton, IonCard, IonCardHeader, IonCardTitle,
  IonCardContent, IonText, IonGrid, IonRow, IonCol, IonButton, IonFooter, IonIcon
} from '@ionic/vue'
import { bag, pricetag, } from 'ionicons/icons'
import Card from '@/components/Card.vue'
import { string } from 'zod';
const selectedSize = ref<string>(' ');


watch(selectedSize, (newValue: string) => {
  console.log("Selected size changed:", newValue);
});


const product = {
  image: '/public/image/Sneakers.png',
  name: 'Generic Product Store',
  tagline: 'generic product Name',
  pricetag: '$99.99',
  short_description: 'This is a versatile product suitable for various needs. It can be used as clothing, grocery, or medicine. Please select your preferred option below.',
  description: 'This versatile product is designed to meet a variety of needs, functioning as clothing, a grocery carrier, or a medicine container. Its adaptable nature makes it an essential item for everyday use. Detailed description of the product goes here...',
  specs: ['Dimension: 10x10x5', 'Weight: 0.5kg', 'Material: Polycarbonate'],
  delivery: 'Delivered within 2-3 business days. Returns within 30 days.',
  pairWith: [
    { image: '/public/image/limited_addition.png', name: 'Related Item 1' },
    { image: '/public/image/Sneakers.png', name: 'Related Item 2' },
    { image: '/public/image/Sneakers.png', name: 'Related Item 2' }


  ],
  store: { name: 'Generic Store', actionText: 'Visit Store' }
}
</script>

<style scoped>
.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 16px;
}

.product-info h2 {
  font-weight: 600;
  margin-bottom: 4px;
}

.product-info p {
  color: #120D1C;
  margin-bottom: px;
}
.custom-line-height {
  
  font-size: 16px; /* or any size you prefer */
  font-weight: bolder;
}
</style>
