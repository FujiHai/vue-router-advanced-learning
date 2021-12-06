<template>
  <div>
    <form action="">
      <h1>注册</h1>
      <p>请依次填写以下表单完成账号创建</p>
      <hr />

      <label for="email"><b>Email</b></label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        id="email"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        id="psw"
        required
      />

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input
        type="password"
        placeholder="Reapeat Password"
        name="psw-repeat"
        id="psw-repeat"
        required
      />
      <hr />
      <p>创建账号前你需要同意以下协议<a href="#">协议</a></p>

      <button type="submit" class="registerbtn">Register</button>
      <button type="button" class="registerbtn" @click="backHome">
        回到首页
      </button>

      <div class="container signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    backHome() {
      // 编程式导航-通过代码进行跳转
      // this.$router.push("/");
      this.$router.push({ name: "" });
    },
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>