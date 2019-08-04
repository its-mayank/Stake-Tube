<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="~/assets/default.jpeg" alt="Card image cap" />
      <video class="card-img-top" controls id="myVideo_1" loop = "loop" width="320" height="260" >
        <source src="~/assets/Test_video_1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <div class="card-body">
        <h4 class="card-title">Price: {{propObject.price}}</h4>
        <h5 class="card-title">Name: {{propObject.name}}</h5>
        <p class="card-text">Description: {{propObject.description}}</p>
        <button class="btn btn-primary" v-on:click="displayDetails">Invest</button>
      </div>
    </div>
    <details-modal v-if="showModal" :propData="propObject">
    </details-modal>
  </div>
</template>

<script>
  import { bookProperty } from "../plugins/utils"

  var video = document.getElementById('myVideo_1');

import DetailsModal from "~/components/detailsModal.vue";

  const Web3 = require('web3')


export default {
  props: ["propObject"],
  data() {
    return {
      showModal: false
    }
  },
  components: {
    DetailsModal
  },
  methods: {
    displayDetails(){
      //
      bookProperty(3);
    }

  }
};
</script>
