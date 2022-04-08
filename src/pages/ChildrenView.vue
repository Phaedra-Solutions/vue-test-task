<template>
  <q-page class="q-pa-sm">
    <div class="row justify-between">
      <div class="col-auto gSubtitleSM q-px-md q-pt-md">Children</div>
      <div class="col-auto">
        <q-btn color="primary" label="Add" @click="openDialog" />
      </div>
    </div>
    <q-markup-table flat square virtual-scroll>
      <thead class="gTextSMGrey">
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Age</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr class="bg-white cursor-pointer" v-for="(child, index) in children" :key="index">
          <td class="text-left gText12BBlack">{{ child.id }}</td>
          <td class="text-left gText12BBlack">{{ child.name }}</td>
          <td class="text-left gText12BBlack">{{ child.age }}</td>
          <td class="text-left gText12BBlack">
            <q-btn color="red" label="Delete" @click="() => deleteChild(child.id)" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
  <add-children />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AddChildren from 'components/dialogs/AddChildren.vue'

export default defineComponent({
  name: 'ChildrenView',

  components: { AddChildren },

  computed: {
    user() {
      return this.$store.getters['user/me']
    },
    children() {
      return this.$store.getters['children/list']
    }
  },

  methods: {
    openDialog() {
      this.$store.dispatch('children/SHOW_ADD_CHILDREN_DIALOG')
    },
    deleteChild(id: number) {
      this.$store.dispatch('classes/REMOVE_FROM_CLASS', id)
      this.$store.dispatch('children/DELETE_CHILD', id)
    }
  }
})
</script>
