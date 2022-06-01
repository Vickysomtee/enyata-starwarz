<template>
  <main>
    <section class="left-section">
      <img src="../assets/icons/starwarz.svg" alt="" srcset="" />
    </section>
    <section class="right-section">
      <div class="container">
        <h1>Login</h1>
        <p>Kindly enter your details to login</p>

        <form>
          <div class="inputs">
            <label for="email">Email Address</label>
            <input
              type="email"
              @change="validateEmail()"
              placeholder="kingsleyomin@enyata.com"
              v-model="email"
              id=""
            />
            <div v-if="buttonClicked && !email" class="required">
              Email Required
            </div>
            {{msg}}
           
          </div>

          <div class="inputs">
            <label for="password" class="password">Password</label>
            <input
              type="password"
              placeholder="***********"
              name=""
              id=""
              v-model="password"
            />
            <div v-if="buttonClicked && !password" class="required">
              Password Required
            </div>
          </div>

          <button @click.prevent="login" type="submit">Login</button>

          <div class="forgot">Forgot Password?</div>
        </form>
        <div class="policy">
          Privacy Policy <span class="and">and</span> Terms of services
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      msg: "",
      buttonClicked: false,
    };
  },

  methods: {

    validateEmail() {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return alert("Invalid emai address")
      } 
    },

    login() {

      this.validateEmail()

      this.buttonClicked = true;
      if (!this.email || !this.password) return;
      this.$router.push({
        name: "Overview",
      })
    },
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
}

.left-section {
  width: 34%;
  background: #031434;
}

img {
  position: relative;
  top: 400px;
  left: 80px;
}

.right-section {
  width: 65%;
  padding-top: 200px;
}

.container {
  width: 600px;
  border: 1px solid rgba(164, 167, 183, 0.3);
  border-radius: 8px;
  padding: 50px 10px;
  text-align: center;
  margin: 0 auto;
}

form {
  margin-top: 30px;
}

h1 {
  color: #434854;
  position: relative;
  right: 142px;
}

p {
  color: #737373;
  position: relative;
  right: 53px;
  font-size: 16px;
}

.inputs {
  margin-bottom: 40px;
}

label {
  display: block;
  position: relative;
  left: 130px;
  top: 8px;
  background: #fff;
  width: 95px;
  color: #b0b9c8;
  font-size: 12px;
}

.password {
  width: 65px;
}

input {
  width: 320px;
  height: 45px;
  border: 1px solid #a4a7b7;
  border-radius: 4px;
  padding-left: 30px;
}

.required {
  position: relative;
  right: 100px;
  top: 5px;
  color: red;
}

::placeholder {
  color: #0b2253;
  font-size: 16px;
  font-family: "inter", sans-serif;
}

button {
  margin-bottom: 20px;
  background: #0a74dc;
  color: #fff;
  width: 350px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  padding: 20px;
}

.forgot {
  color: #0a74dc;
}

.policy {
  margin-top: 90px;
  text-decoration: underline;
}

.span {
  font-size: 14px;
  color: #a4a7b7;
  text-decoration: none;
}
</style>