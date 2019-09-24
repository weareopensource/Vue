<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row align="start" justify="center">
          <v-card class="ma-4 pa-8" outlined tile width="100%">
            <v-form ref="form" v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field :type="'password'" v-model="password" label="Password" required></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
                  <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
/**
 * Export default
 */
export default {
  data() {
    return {
      valid: false,
      email: 'seeduser@localhost.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password: 'zHwJKWk6z5Hp7tWFD143EK',
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        const { email } = this;
        const { password } = this;
        this.$store
          .dispatch('signin', { email, password })
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err));
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
