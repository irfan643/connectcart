<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home"></IonBackButton>
        </IonButtons>
        <IonTitle>Search</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <!-- Real Search Bar -->
      <IonSearchbar
        ref="searchbarRef"
        v-model="searchQuery"
        placeholder="Type to search..."
        show-clear-button="always"
        debounce="300"
        @ionInput="onSearch"
      ></IonSearchbar>

      <div v-if="searchQuery" class="mt-4">
        <p class="text-sm text-gray-500">Results for: <strong>{{ searchQuery }}</strong></p>
        <ul class="mt-2 space-y-2">
          <li v-for="(item, i) in results" :key="i" class="p-2 bg-gray-100 rounded">
            {{ item }}
          </li>
        </ul>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonSearchbar,onIonViewDidEnter } from '@ionic/vue'

const searchQuery = ref('')
const results = ref([])

// ref to searchbar
const searchbarRef = ref(null)

const onSearch = () => {
  if (searchQuery.value.trim()) {
    results.value = [
      `${searchQuery.value} item 1`,
      `${searchQuery.value} item 2`,
      `${searchQuery.value} item 3`  
    ]
  } else {
    results.value = []
  }
}

// Auto focus when page loads
onIonViewDidEnter(() => {
  const el = searchbarRef.value?.$el
  if (el && typeof el.setFocus === 'function') {
    el.setFocus()
  }
})
</script>
