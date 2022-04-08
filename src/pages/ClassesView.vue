<template>
  <q-page class="q-pa-sm">
    <div class="row justify-between">
      <div class="col-auto gSubtitleSM q-px-md q-pt-md">Classes</div>
      <div class="col-auto">
        <q-btn color="primary" @click="openDialog" label="Add" />
      </div>
    </div>
    <q-markup-table flat square virtual-scroll>
      <thead class="gTextSMGrey">
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Seats</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr class="bg-white cursor-pointer" v-for="(classObj, index) in classes" :key="index">
          <td class="text-left gText12BBlack">{{ classObj.id }}</td>
          <td class="text-left gText12BBlack">{{ classObj.name }}</td>
          <td class="text-left gText12BBlack">{{ classObj.children.length }}</td>
          <td class="text-left gText12BBlack">
            <q-btn
              color="primary"
              @click="() => openUnrollDialog(classObj)"
              label="Unroll"
              class="q-mr-md"
            />
            <q-btn color="primary" @click="() => openEnrollDialog(classObj)" label="Enroll" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <add-class />
    <enroll-dialog />
    <unroll-dialog />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AddClass from 'components/dialogs/AddClass.vue'
import EnrollDialog from 'components/dialogs/EnrollDialog.vue'
import UnrollDialog from 'components/dialogs/UnrollDialog.vue'
import { Class } from '../components/models'

export default defineComponent({
  name: 'ClassesrenView',
  components: { AddClass, EnrollDialog, UnrollDialog },

  computed: {
    classes() {
      return this.$store.getters['classes/list']
    }
  },
  methods: {
    openDialog() {
      this.$store.dispatch('classes/SHOW_ADD_CLASS_DIALOG')
    },
    openEnrollDialog(_class: Class) {
      this.$store.dispatch('classes/SELECT_CLASS', { ..._class, action: 'Enroll' })
    },
    openUnrollDialog(_class: Class) {
      this.$store.dispatch('classes/SELECT_CLASS', { ..._class, action: 'Unroll' })
    }
  }
})
</script>
