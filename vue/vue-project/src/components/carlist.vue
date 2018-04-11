<template>
    <div id="car-list">
        <div class="w-banner">
            <img src="../assets/image/w_banner.jpg" alt="">
        </div>
        <div class="w-pic-group">
        <p class="w-p-more"><a href="#">更多车型</a><i>>></i></p>
        <ul>
            <li v-for="item in clist_attr">
                <p>{{ item.name }}<span>{{ item.price }}万</span></p>
                <a href="#"><img :src="item.img" alt=""></a>
            </li>
        </ul>
     </div>
    </div>
</template>
<script>
import axios from 'axios'
  export default{
          template:'#car-list',
          data(){
            return {
              clist_attr:[]
            }
          },
          mounted(){
            this.list_xr();
          },
          methods:{
            list_xr(){
              var _this = this;
               axios.get('../../static/carlist.json')
               .then(function(response){
                  console.log(response.data.result[0].name);
                  //console.log(JSON.stringify(response,null,' '));
                  _this.clist_attr = response.data.result;
               })
            }
          }
  }
</script>
<style scoped>
.w-pic-group {
  padding: 0.2rem 0.125rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
  overflow: hidden;
}
.w-pic-group ul {
  width: 9.466667rem;
  margin: 0 auto;
  overflow: hidden;
}
.w-pic-group li {
  width: 4.6rem;
  height: 2.666667rem;
  margin-bottom: 0.266667rem;
  float: left;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 0.106667rem;
  background-color: #f7f7f7;
}
.w-pic-group li p {
  position: absolute;
  top: 0.2rem;
  left: 0.24rem;
  font-size: 0.32rem;
  color: #8b8b8b;
}
.w-pic-group li p span {
  font-size: 0.373333rem;
  color: #ff8d29;
  display: block;
}
.w-pic-group li img {
  width: 4.6rem;
  height: 2.666667rem;
}
.w-pic-group li:nth-child(odd) {
  margin-right: 0.04rem;
}
.w-pic-group li:nth-child(even) {
  margin-right: 0;
}

.w-p-more {
  width: 9.466667rem;
  height: 1.066667rem;
  line-height: 1.066667rem;
  margin: 0 auto;
  text-align: right;
  font-size: 0.32rem;
}
.w-p-more a {
  color: #8b8b8b;
}
.w-p-more i {
  color: #ff8d29;
  font-style: normal;
}
.w-banner {
  padding: 0.2rem 0.125rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
}
.w-banner img {
  width: 9.333333rem;
  height: 4.0rem;
  text-align: center;
  margin: 0 auto;
  display: block;
}
</style>