<script>
  import { FormTwo, CurrentForm } from "../store.js";

  let password = "";
  let confirmPassword = "";
  let error = {};

  const handleSubmit = () => {
    if (password.trim() === "") {
      error.password = "Password field is required";
      return;
    }
    if (confirmPassword.trim() === "") {
      error.confirmPassword = "Confirm Password field is required";
      return;
    }
    if (confirmPassword.trim() !== password.trim()) {
      error.password = "Password fields do not match";
      error.confirmPassword = "Password fields do not match";
      return;
    }
    FormTwo.setValues(password);
    CurrentForm.success();
  };
</script>

<style>
  .container {
    width: 30%;
    height: 50%;
    background-color: #d0d0d04a;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  }

  .container h1 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: bold;
  }

  .container hr {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .form div {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .form div label {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .form div input {
    padding: 10px;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    width: 70%;
    margin: 0 auto;
    transform: all 0.4s ease-in;
  }

  .form div input:active,
  .form div input:focus {
    width: 96%;
  }

  .form div code {
    color: red;
    text-align: center;
    margin-top: 10px;
  }

  .form div button {
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px 10px;
    font-size: 20px;
    outline: none;
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.4s ease-out;
  }

  .form div button:hover {
    transform: translateY(-1px);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
  }

  .form div button:active {
    transform: translateY(1px);
  }
</style>

<div class="container">
  <h1>Form Two</h1>
  <hr />
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <div>
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        bind:value={password}
        autocomplete="new-password" />
      {#if error.password}
        <code>{error.password}</code>
      {/if}
    </div>
    <div>
      <label>Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        bind:value={confirmPassword}
        autocomplete="new-password" />
      {#if error.confirmPassword}
        <code>{error.confirmPassword}</code>
      {/if}
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</div>
