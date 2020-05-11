<template>
  <v-container fluid>
    <v-row align="start" justify="center">
      <v-card
        class="mx-6 my-3"
        outlined
        tile
        width="100%"
        :style="{background: config.vuetify.theme.themes[theme].surface}"
        :flat="config.vuetify.theme.flat"
      >
        <v-container class="pa-10">
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  :type="'password'"
                  :rules="passwordRules"
                  v-model="password"
                  label="Password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
              <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
            </v-row>
          </v-form>
          <br />
          <router-link to="/signup">SignUp</router-link>if you have no account yet :) !
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>


<script>
/**
 * Module dependencies.
 */
import { mapGetters } from 'vuex';
/**
 * Export default
 */
export default {
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [(v) => !!v || 'Password is required'],
    };
  },
  computed: {
    ...mapGetters(['theme']),
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        const { email } = this;
        const { password } = this;
        this.$store
          .dispatch('signin', { email, password })
          .then(() => this.$router.push('/'))
          .catch((err) => console.log(err));
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
