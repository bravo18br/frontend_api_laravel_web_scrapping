<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-9 text-white">
    <q-header elevated class="bg-grey-6">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title> Homelab Família Klein </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-grey-8">
      <q-list dark>
        <q-item-label header>Menu</q-item-label>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="http://192.168.1.2/firefly3"
        >
          <q-item-section avatar>
            <q-img
              src="~assets/images/pihole.png"
              alt="Pihole Icon"
              style="width: 32px; height: 32px"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Firefly 3</q-item-label>
            <q-item-label caption>http://192.168.1.2/firefly3</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="https://quasar.dev"
        >
          <q-item-section avatar>
            <q-img
              src="~assets/images/icone_pihole.png"
              alt="Pihole Icon"
              style="width: 32px; height: 32px"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Pihole</q-item-label>
            <q-item-label caption>http://192.168.1.2/pihole</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MyLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
    };
  },
};
</script>
