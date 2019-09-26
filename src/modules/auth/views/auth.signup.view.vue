<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row align="start" justify="center">
          <v-card class="ma-4 pa-8" outlined tile width="100%">
            <v-form ref="form" v-model="valid">
              <v-container>
                <v-row>
                  <v-col md="6" sm="12">
                    <v-text-field v-model="firstName" label="Firstname" required></v-text-field>
                  </v-col>
                  <v-col md="6" sm="12">
                    <v-text-field v-model="lastName" label="Lastname" required></v-text-field>
                  </v-col>
                  <v-col md="12" sm="12">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                  </v-col>
                  <v-col md="12" sm="12">
                    <v-text-field :type="'password'" v-model="password" label="Password" required></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
                  <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
                </v-row>
              </v-container>
            </v-form>
            <router-link to="/signin">SignIn</router-link> if you already have an account :) !
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
      firstName: '',
      lastName: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        const { firstName } = this;
        const { lastName } = this;
        const { email } = this;
        const { password } = this;
        this.$store
          .dispatch('signup', {
            email, password, firstName, lastName,
          })
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
