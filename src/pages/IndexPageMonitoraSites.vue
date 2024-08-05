<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card class="row">
        <div class="col-6 flex flex-center">
          <img
            alt="MonitoraSites logo"
            src="~assets/images/monitorasites-450x450.png"
            style="width: 100px; height: 100px; padding: 8px"
          />
        </div>
        <div class="col-6 flex flex-center column">
          <p
            :style="{ color: statusCore === 'OK' ? 'green' : 'red' }"
            style="margin-bottom: 0"
          >
            Status API Core: {{ statusCore }}
          </p>
          <p
            :style="{ color: statusWPPConnect === 'OK' ? 'green' : 'red' }"
            style="margin-bottom: 0"
          >
            Status WPPConnect: {{ statusWPPConnect }}
          </p>
        </div>
      </q-card>
    </div>
  </div>

  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-black"
          active-color="blue"
          indicator-color="secondary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="lista" label="Lista" />
          <q-tab name="editar" label="Editar" />
          <q-tab name="novo" label="Novo" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="lista">
            <div style="color: black">
              <!-- Conditionally show the progress spinner or the content -->
              <div v-if="isLoading">
                <q-circular-progress
                  indeterminate
                  rounded
                  size="50px"
                  color="lime"
                  class="q-ma-md"
                />
              </div>
              <div v-else class="row">
                <div class="q-pa-md">
                  <q-table
                    flat
                    bordered
                    title="Alvos"
                    :rows="rows"
                    :columns="columns"
                  >
                    <template v-slot:header="props">
                      <q-tr :props="props">
                        <q-th auto-width />
                        <q-th
                          v-for="col in props.cols"
                          :key="col.name"
                          :props="props"
                        >
                          {{ col.label }}
                        </q-th>
                      </q-tr>
                    </template>

                    <template v-slot:body="props">
                      <q-tr :props="props">
                        <q-td auto-width>
                          <q-btn
                            size="sm"
                            color="accent"
                            round
                            dense
                            @click="props.expand = !props.expand"
                            :icon="props.expand ? 'remove' : 'add'"
                          />
                        </q-td>
                        <q-td
                          v-for="col in props.cols"
                          :key="col.name"
                          :props="props"
                        >
                          {{ col.value }}
                        </q-td>
                      </q-tr>
                      <q-tr v-show="props.expand" :props="props">
                        <q-td colspan="100%">
                          <!-- Apply width: 100% to the textarea -->
                          <textarea
                            v-model="props.row.conteudo"
                            style="width: 100%"
                          ></textarea>
                        </q-td>
                      </q-tr>
                    </template>
                  </q-table>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="editar">
            <div style="color: black">Form para EDITAR um item de alvo</div>
          </q-tab-panel>

          <q-tab-panel name="novo">
            <div style="color: black">Form para CRIAR um novo item de alvo</div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const tab = ref("lista");
    const statusCore = ref("Aguardando resposta...");
    const statusWPPConnect = ref("Aguardando resposta...");
    const isLoading = ref(true);

    // Access the environment variables
    const apiUrl = import.meta.env.VITE_API_URL;
    const wppUrl = import.meta.env.VITE_WPP_URL;

    // Function to check the status of the Core
    const checkCoreStatus = async () => {
      try {
        const response = await axios.get(apiUrl + "/up");
        statusCore.value = response.status === 200 ? "OK" : response.status;
      } catch (error) {
        statusCore.value = error.message;
      }
    };

    // Function to check the status of the WPPConnect
    const checkWPPConnectStatus = async () => {
      try {
        const response = await axios.get(wppUrl + "/api-docs/");
        statusWPPConnect.value =
          response.status === 200 ? "OK" : response.status;
      } catch (error) {
        statusWPPConnect.value = error.message;
      }
    };

    // Load list of targets
    const loadListaAlvos = async () => {
      try {
        const response = await axios.get(apiUrl + "/api/alvo");
        if (response.status === 200) {
          rows.value = response.data;
        } else {
          console.error("Failed to load data:", response.status);
        }
      } finally {
        isLoading.value = false;
      }
    };

    const columns = [
      {
        name: "id",
        required: true,
        label: "ID",
        align: "left",
        field: (row) => row.id,
        sortable: true,
      },
      {
        name: "nome",
        required: true,
        label: "Nome",
        align: "left",
        field: (row) => row.nome,
        sortable: true,
      },
      {
        name: "url",
        required: true,
        label: "URL",
        align: "left",
        field: (row) => row.url,
        sortable: true,
      },
      {
        name: "elemento",
        required: true,
        label: "Elemento",
        align: "left",
        field: (row) => row.elemento,
        sortable: true,
      },
      {
        name: "alerta",
        required: true,
        label: "Alerta",
        align: "left",
        field: (row) => row.alerta,
        sortable: true,
      },
      {
        name: "created_at",
        required: true,
        label: "Criação",
        align: "left",
        field: (row) => row.created_at,
        sortable: true,
      },
      {
        name: "updated_at",
        required: true,
        label: "Atualização",
        align: "left",
        field: (row) => row.updated_at,
        sortable: true,
      },
    ];

    const rows = ref([]); // Initialize rows as a reactive reference

    // Check the status on mount and set interval to check every 60 seconds
    onMounted(() => {
      checkCoreStatus();
      checkWPPConnectStatus();
      loadListaAlvos();
      setInterval(() => {
        checkCoreStatus();
        checkWPPConnectStatus();
      }, 60000); // 60000 ms = 60 seconds
    });

    return {
      tab,
      statusCore,
      statusWPPConnect,
      isLoading,
      columns,
      rows,
    };
  },
};
</script>
