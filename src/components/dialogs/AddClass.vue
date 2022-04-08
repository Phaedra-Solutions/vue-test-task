<template>
  <q-dialog v-model="show" @hide="hide" transition-show="scale" transition-hide="scale">
    <q-card style="min-width: 350px">
      <q-card-section class="q-pb-none">
        <div class="text-h6">Add Class</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input placeholder="Name" dense autofocus v-model="name" @keyup.enter="prompt = false" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input
          placeholder="Description"
          dense
          autofocus
          v-model="description"
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
  name: 'AddClass',

  data() {
    return {
      name: '',
      description: ''
    }
  },

  computed: {
    show() {
      return this.$store.getters['classes/addDialog']
    },
    user() {
      return this.$store.getters['user/me']
    }
  },

  methods: {
    hide() {
      this.$store.dispatch('classes/HIDE_ADD_CLASS_DIALOG')
    },

    async submit() {
      try {
        if (!this.name || !this.description) {
          this.$q.notify({
            type: 'negative',
            timeout: 1000,
            message: 'Missing Fields'
          })

          return
        }

        this.$store.dispatch('classes/ADD_CLASS', {
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
      this.description = ''
    }
  }
})
</script>

<style scoped></style>
