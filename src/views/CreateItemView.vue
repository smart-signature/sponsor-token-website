<template>
  <div class="createTokenView" style="background-image: url(./static/icons-background.svg)">
    <div class="hero-body">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey has-text-centered">Create Token</h3>
        <p class="subtitle has-text-grey has-text-centered">You can create your own token now</p>
        <div class="container">
          <div class="box" style="width: 400px;">
            <div class="field is-horizen">
              <label class="label">creator_fee</label>
              <div class="field has-addons">
                <p class="control is-expanded">
                    <input class="input"
                      type="number"
                      v-model="creator_fee"
                      placeholder="Token的创建者抽成，0-1000">
                </p>
              </div>
              <label class="label">ref_fee</label>
              <div class="field has-addons">
                <p class="control is-expanded">
                  <input class="input"
                        type="number"
                        v-model="ref_fee"
                        placeholder="Token的传播者抽成，0-1000">
                </p>
              </div>
              <label class="label">k</label>
              <div class="field has-addons">
                <p class="control is-expanded">
                  <input class="input "
                        type="number"
                        v-model="k"
                        placeholder="Token的裂变系数，10-1000">
                </p>
              </div>

              <!--<p class="help">This username is available</p>-->
              <label class="label">price</label>
              <div class="field has-addons ">
                <p class="control is-expanded">
                  <input class="input"
                        type="number"
                        v-model="price"
                        placeholder="Token的价格，1000-10000000">
                </p>
		<p class="control">
                  <a class="button is-static">
                  0.0001 EOS
                  </a>
                </p>
              </div>

              <label class="label">start_time</label>
              <div class="field ">
                <p class="control">
                  <input class="input"
                        type="text"
                        v-model="start_time"
                        placeholder="请输入裂变开始时间，> now">
                </p>
              </div>

              <label class="label">Token 简介</label>
              <div class="field ">
                <textarea class="textarea" placeholder="e.g. Hello world"
                  v-model="tDescription">
                </textarea>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link is-fullwidth"
                          @click="onSubmit">确认</button>
                </div>
                <div class="control">
                  <button class="button is-link is-fullwidth"
                          @click="login">login</button>
                </div		
                <div class="control">
                  <button class="button is-text">取消</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login, createToken, save2backend } from '@/api';
import Global from '@/Global.js';


export default {
  name: 'item-view',
  data: () => ({
    price: null,
    frozen1: null,
    frozen2: null,
    parentId: null,
    tName: null,
    tDescription: null,
  }),

  computed: {},
  // async created() {},

  watch: {},

  methods: {
    /*
    onSubmit() {
      
      // console.log(this.$store.state.me);
      // debugger;
      createToken({
        price: this.price,
        frozen1: this.frozen1,
        frozen2: this.frozen2,
        parentId: this.parentId,
      })
        .then((txHash) => {
          alert(`成功了，一会刷新. txHash: ${txHash}`);
          // const me = await api.getMe();
          debugger;
          save2backend({
            owner: this.$store.state.me.address,
            txHash,
            // price : this.price,
            // parentId:this.parentId,
            description: this.tDescription,
            title: this.tName,
          });
        })
        .catch((e) => {
          alert('出错了.');
          console.log(e);
        });
    },
    */
    onSubmit() {
      createToken({
        //from:Global.scatterAccount.name,
        to:'signature.bp',
        //memo: `create ${this.creator_fee} ${this.ref_fee} ${this.k} ${this.price} ${this.start_time}`
      });
    },
   login() {
      login();
    },
  },
};
</script>
 <style scoped>

</style>
