<script>
  import { FormOne, CurrentForm, FormTwo } from "./store.js";

  import FormOneComponent from "./components/FormOne.svelte";
  import FormTwoComponent from "./components/FormTwo.svelte";

  console.log($FormOne);
</script>

<style>
  .container {
    color: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-80px);
  }
  .success {
    background-color: #9dff0087;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #00000033;
    color: green;
  }
  .success h1 {
    font-weight: bolder;
  }
</style>

<div class="container">
  {#if $CurrentForm.one}
    <FormOneComponent />
  {:else if $CurrentForm.two}
    <FormTwoComponent />
  {:else if $CurrentForm.success}
    <div class="success">
      <h1>Form submitted</h1>
    </div>
  {:else}
    <h3>Nothing to show</h3>
  {/if}

</div>
