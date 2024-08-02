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
        <q-avatar size="32px" class="q-mr-sm">
          <q-img src="~assets/images/klein-64x64.png" alt="Homelab Avatar" />
        </q-avatar>
        <q-toolbar-title> Homelab Família Klein </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-grey-8">
      <q-list dark>
        <q-item-label header>Menu</q-item-label>

        <router-link to="/" class="q-item">
          <q-item>
            <q-item-section avatar>
              <q-img
                src="~assets/images/klein-64x64.png"
                alt="Home Icon"
                style="width: 64px; height: 64px"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Homelab Família Klein</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link to="/firefly3" class="q-item">
          <q-item>
            <q-item-section avatar>
              <q-img
                src="~assets/images/fireflyiii-64x64.png"
                alt="Firefly3 Icon"
                style="width: 64px; height: 64px"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Firefly 3</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link to="/pihole" class="q-item">
          <q-item>
            <q-item-section avatar>
              <q-img
                src="~assets/images/pihole-64x64.png"
                alt="Pihole Icon"
                style="width: 64px; height: 64px"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Pihole</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link to="/bitwarden" class="q-item">
          <q-item>
            <q-item-section avatar>
              <q-img
                src="~assets/images/bitwarden-64x64.png"
                alt="Bitwarden Icon"
                style="width: 64px; height: 64px"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Bitwarden</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link to="/monitorasites" class="q-item">
          <q-item>
            <q-item-section avatar>
              <q-img
                src="~assets/images/monitorasites-64x64.png"
                alt="MonitoraSites Icon"
                style="width: 64px; height: 64px"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Monitora Sites</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

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
