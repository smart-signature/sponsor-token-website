<template>
  <div class="item-view">
    <div v-if="item">
      <div class="columns is-multiline is-mobile">
        <div class="column
           is-full-mobile">

          <p class="image is-128x128">
            <img id="image" style="width: 128px; height: 128px; border-color: #cfcfcf; border-style: solid; border-width: 1px;">
          </p>
          <form name="imgForm" id="imgForm" enctype="multipart/form-data" action="upload" method='post'>
            <input class="input-loc-img"  name="imgLocal" id="imgLocal" type='file' accept="image/*" @change="selectImage"/>
          </form> 

          <div class="content">
            <ul>
              <li>{{$t('ID')}}: {{item.id}}</li>
              <li>{{$t('Owner')}}：
                <router-link :to="{ name: 'User', params:{address: item.owner}}">
                  {{item.owner.slice(-6).toUpperCase()}}
                </router-link>
              </li>
              <li>{{$t('Current Price')}}：{{toDisplayedPrice(item.price)}}</li>
            </ul>
          </div>

          <template v-if="item.owner !== me.address">
            <div class="buttons">
              <button class="button is-danger is-outlined"
                      @click="onBuy(1)">{{ $t('BUY_BTN') }}</button>
              <button class="button is-danger is-outlined"
                      @click="onBuy(1.1)">{{ $t('PREMIUM_BUY_BTN', { rate: '10%' }) }}</button>
              <button class="button is-danger is-outlined"
                      @click="onBuy(1.2)">{{ $t('PREMIUM_BUY_BTN', { rate: '20%' }) }}</button>
              <button class="button is-danger is-outlined"
                      @click="onBuy(1.3)">{{ $t('PREMIUM_BUY_BTN', { rate: '30%' }) }}</button>
              <button class="button is-danger is-outlined"
                      @click="onBuy(1.4)">{{ $t('PREMIUM_BUY_BTN', { rate: '40%' }) }}</button>
              <button class="button is-danger is-outlined"
                      @click="onBuy(1.5)">{{ $t('PREMIUM_BUY_BTN', { rate: '50%' }) }}</button>
            </div>
            <article class="message is-danger">
              <div class="message-body">
                {{$t('BUY_PRICE_TIP')}}
              </div>
            </article>
          </template>

        </div>
      </div>
    </div>
    <div v-else-if="item === null">
      Token doesn't exist
    </div>
  </div>
</template>

<script>
import { buyItem } from "@/api";
import { toReadablePrice } from "@/util";
import { setNextPrice } from "@/api";

export default {
  name: "item-view",

  data: () => ({}),

  mounted: function() {
    document.getElementById("image").src = "https://bulma.io/images/placeholders/128x128.png";
  },

  computed: {
    itemId() {
      return this.$route.params.id;
    },
    me() {
      return this.$store.state.me || {};
    },
    item() {
      return this.$store.state.items[this.itemId];
    }
  },
  async created() {
    this.$store.dispatch("FETCH_ITEM", this.itemId);
  },

  watch: {},

  methods: {
    onBuy(rate) {
      if (this.$store.state.signInError) {
        return this.$router.push({ name: "Login" });
      }
      const buyPrice = this.item.price.times(rate).toFixed(0);
      buyItem(this.itemId, buyPrice)
        .then(txHash => {
          alert(this.$t("BUY_SUCCESS_MSG") + "txHash: " + txHash);
          setNextPrice(this.itemId, buyPrice);
        })
        .catch(e => {
          alert(this.$t("BUY_FAIL_MSG"));
          console.log(e);
        });
    },
    toDisplayedPrice(priceInWei) {
      const readable = toReadablePrice(priceInWei);
      return `${readable.price} ${readable.unit}`;
    },
    selectImage(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files)
      var oFReader = new FileReader();
      oFReader.readAsDataURL(files[0]);
      oFReader.onload = function (oFREvent) {
        document.getElementById("image").src = oFREvent.target.result;
      };
    }
  }
};
</script>
 <style scoped>

</style>
