<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-6">
        <div class="border p-5">
          <h4 class="text-center">Decide Gender By Name</h4>
          <hr />
          <div class="text-center">
            <input type="text" v-model="name" placeholder="Name..." class="form-control mt-3 text-black-50" />
            <button class="btn btn-primary mt-3" @click="check">Start</button>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <div v-if="isLoading">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div v-else class="mt-3">
              <div v-if="result">
                <p>Name : {{ result.name }}</p>
                <p>Gender : {{ result.gender }}</p>
                <p>Probability : {{ result.probability }}</p>
                <p>Count : {{ result.count }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { axios } from "axios";
import { ref } from "@vue/reactivity";
import { checkGender } from "./composables/checkGender.js";
export default {
  setup() {
    let name = ref("");//for getting name from input 
    let result = ref(null);//for result
    let isLoading = ref(false);//for loading

    let check = async () => {
      isLoading.value = true;
      let fetchedResult = await checkGender(name.value);
      result.value = fetchedResult.value;
      // console.log(result.value);
      isLoading.value = false;
    };

    return { name, check, result, isLoading };
  },
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>