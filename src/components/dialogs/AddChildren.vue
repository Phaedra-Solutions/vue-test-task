<template>
  <q-dialog v-model="show" @hide="hide" transition-show="scale" transition-hide="scale">
    <q-card style="min-width: 350px">
      <q-card-section class="q-pb-none">
        <div class="text-h6">Add Children</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input placeholder="Name" dense autofocus v-model="name" @keyup.enter="prompt = false" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input
          placeholder="Age"
          dense
          type="number"
          min="0"
          autofocus
          v-model="age"
          @keyup.enter="prompt = false"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" @click="hide" />
        <q-btn flat label="Add" @click="submit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AddChildren',

  data() {
    return {
      name: '',
      age: ''
    }
  },

  computed: {
    show() {
      return this.$store.getters['children/addDialog']
    },
    user() {
      return this.$store.getters['user/me']
    }
  },

  methods: {
    hide() {
      this.$store.dispatch('children/HIDE_ADD_CHILDREN_DIALOG')
    },

    async submit() {
      try {
        if (!this.name || !this.age) {
          this.$q.notify({
            type: 'negative',
            timeout: 1000,
            message: 'Missing Fields'
          })

          return
        }

        this.$store.dispatch('children/ADD_CHILD', {
          name: this.name,
          age: this.age,
          parent: this.user.id
        })

        this.$q.notify({
          type: 'positive',
          timeout: 1000,
          message: 'Child Added'
        })
        this.hide()
        this.reset()
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          timeout: 1000,
          message: 'Could not add child'
        })
      }
    },

    reset() {
      this.name = ''
      this.age = ''
    }
  }
})
</script>

<style scoped></style>
