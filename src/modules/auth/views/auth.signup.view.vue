<template>
  <div>
    <form @submit.prevent="signup">
      <h1>Sign Up</h1>
      <label for="firstname">Firstname</label>
      <div>
        <input id="firstname" type="text" v-model="firstname" required autofocus />
      </div>

      <label for="firstname">Lastname</label>
      <div>
        <input id="lastname" type="text" v-model="lastname" required autofocus />
      </div>

      <label for="email">E-Mail Address</label>
      <div>
        <input id="email" type="email" v-model="email" required />
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required />
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
        <input id="password-confirm" type="password" v-model="password_confirmation" required />
      </div>

      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
/**
 * Export default
 */
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password_confirmation: '',
      is_admin: null,
    };
  },
  methods: {
    signup() {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        is_admin: this.is_admin,
      };
      this.$store
        .dispatch('signup', data)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err));
    },
  },
};
</script>
