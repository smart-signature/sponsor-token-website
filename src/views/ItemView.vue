<template>
  <div class="item-view">
    <div v-if="item">
      <div class="columns is-multiline is-mobile">
        <div class="column
           is-full-mobile">

          <p class="image is-128x128">
            <img src="data:image/jpeg;base64,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">
          </p>
          <form name="imgForm" id="imgForm" enctype="multipart/form-data"
            action="upload" method='post'>
            <input class="input-loc-img"  name="imgLocal" id="imgLocal"
              type='file' accept="image/*" @change="selectImage"/>
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
              <li>{{$t('Token Name')}}:{{item.title}}</li>
              <li>{{$t('Token Description')}}:{{item.description}}</li>
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
import { buyItem, setNextPrice } from '@/api';
import { toReadablePrice } from '@/util';

export default {
  name: 'item-view',

  data: () => ({}),
  /*
  mounted: function() {
    // debugger;
    // console.log(item.owner !== me.address);
    // document.getElementById("image").src = "https://bulma.io/images/placeholders/128x128.png";
  }, */

  computed: {
    itemId() {
      return this.$route.params.id;
    },
    me() {
      // debugger;

      return this.$store.state.me || {};
    },
    item() {
      // debugger;

      return this.$store.state.items[this.itemId];
    }
  },
  async created() {
    // debugger;
    this.$store.dispatch('FETCH_ITEM', this.itemId);
  },

  watch: {},

  methods: {
    onBuy(rate) {
      if (this.$store.state.signInError) {
        return this.$router.push({ name: 'Login' });
      }
      const buyPrice = this.item.price.times(rate).toFixed(0);
      buyItem(this.itemId, buyPrice)
        .then( (txHash) => {
          alert(this.$t('BUY_SUCCESS_MSG') + `txHash: ${txHash}`);
          setNextPrice(this.itemId, buyPrice);
        })
        .catch((e) => {
          alert(this.$t('BUY_FAIL_MSG'));
          console.log(e);
        });
    },
    toDisplayedPrice(priceInWei) {
      const readable = toReadablePrice(priceInWei);
      return `${readable.price} ${readable.unit}`;
    },
    selectImage(e) {
      const files = e.target.files || e.dataTransfer.files;
      console.log(files);
      const oFReader = new FileReader();
      oFReader.readAsDataURL(files[0]);
      oFReader.onload = function (oFREvent) {
        document.getElementById('image').src = oFREvent.target.result;
      };
    },
  },
};
</script>
 <style scoped>

</style>
