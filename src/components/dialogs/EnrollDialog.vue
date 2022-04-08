<template>
  <q-dialog v-model="show" @hide="hide" transition-show="scale" transition-hide="scale">
    <q-card style="min-width: 350px">
      <q-card-section class="q-pb-none">
        <div class="text-h6">Enroll Child</div>
      </q-card-section>

      <q-card-section v-if="selectedClass.children.length < 4" class="q-pt-none">
        <q-item-label v-if="isEnrolled()" style="color: red">Child Already Enrolled</q-item-label>
        <q-select v-model="selectedChild" :options="children" label="Select Child" />
      </q-card-section>
      <q-card-section v-else class="q-pt-none">
        <q-item-label style="color: red">Seats Full</q-item-label>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" @click="hide" />
        <q-btn
          flat
          :disable="isEnrolled() || selectedChild.value === -1"
          label="Submit"
          @click="submit"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Child } from '../models'

export default defineComponent({
  name: 'EnrollDialog',

  data() {
    return {
      selectedChild: {
        value: -1,
        label: ''
      }
    }
  },

  computed: {
    selectedClass() {
      return this.$store.getters['classes/selectedClass']
    },
    show() {
      return !!(this.$store.getters['classes/selectedClass']?.action === 'Enroll')
    },
    children() {
      return this.$store.getters['children/list'].map((x: Child) => {
        return {
          value: x.id,
          label: x.name
        }
      })
    },
    user() {
      return this.$store.getters['user/me']
    }
  },

  mounted() {
    console.log(this.selectedClass)
  },

  methods: {
    hide() {
      this.reset()
      this.$store.dispatch('classes/CLEAR_SELECTED_CLASS')
    },

    isEnrolled() {
      return !!(this.selectedChild.value &&
        !!this.selectedClass.children.find((y: number) => y === this.selectedChild.value))
    },

    async submit() {
      try {
        if (!this.selectedChild.value) {
          this.$q.notify({
            type: 'negative',
            timeout: 1000,
            message: 'Please Select a child'
          })

          return
        }

        this.$store.dispatch('classes/ENROLL', {
          classId: this.selectedClass.id,
          childId: this.selectedChild.value
        })

        this.$q.notify({
          type: 'positive',
          timeout: 1000,
          message: 'Child Enrolled'
        })
        this.hide()
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          timeout: 1000,
          message: 'Could not add child'
        })
      }
    },

    reset() {
      this.selectedChild = {
        value: -1,
        label: ''
      }
    }
  }
})
</script>

<style scoped></style>
