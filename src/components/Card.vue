<template>
  <ion-card
    :class="[
      'shadow-none ',
      cardWidth,
      cardHeight
    ]"
    @click="handleClick"
  >
    <!-- Content -->
    <ion-card-content class="ion-no-padding w-full flex flex-col h-full">
      <!-- Image -->
        <img
          :src="imageSrc"
          :alt="label"
          :class="[
            imageWidth,
            imageHeight
          ]"
        />
     

      <!-- Title -->
       <div class=" pl-2 py-2">
        <IonText class="text-[18px]  font-medium text-gray-900   ">
        {{ title }}
      </IonText>
       </div>
        
    </ion-card-content>
   
  </ion-card>
</template>

<script setup>
import { IonCard, IonCardContent, IonLabel, IonText } from '@ionic/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'label'
  },
  productId: {
    type: [String, Number],
    required: false
  },
  title: {
    type: String,
    default: 'Title'
  },
  cardWidth: {
    type: String,
    default: 'w-full' // control card width
  },
  cardHeight: {
    type: String,
    default: 'h-full' // control card height
  },
  
  imageWidth: {
    type: String,
    default: 'w-full' // image width
  },
  imageHeight: {
    type: String,
    default: 'h-[80%]' // image height
  },
  navigateTo: {
    type: String,
    default: '/Product/' // if set, auto navigate to this route
  }
})

const emit = defineEmits(['cardClick'])

function handleClick() {
  if (props.navigateTo && props.productId) {
    router.push({ path: `/Product/${props.productId}` })
    console.log(props.productId)
  } else {
    emit('cardClick', props.productId)
  }
}
</script>
