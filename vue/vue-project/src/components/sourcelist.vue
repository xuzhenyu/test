<template>
<!--     <ul id="thelist" class="w-car-list">
        <li>
            <img src="image/w_list_pic.jpg" alt="">
            <p class="w-lp-r">
                <strong>奥迪A6 2013款 2.0T 自动40TFSI奥迪A6 2013款 2.0T 自动40TFSI</strong>
                <i>上海/2014年8月/5.6万公里</i>
                <span>48.80万</span>
            </p>
        </li>
        <li>
            <img src="image/w_list_pic.jpg" alt="">
            <p class="w-lp-r">
                <strong>奥迪A6 2013款 2.0T 自动40TFSI</strong>
                <i>上海/2014年8月/5.6万公里</i>
                <span>48.80万</span>
            </p>
        </li>
        <li>
            <img src="image/w_list_pic.jpg" alt="">
            <p class="w-lp-r">
                <strong>奥迪A6 2013款 2.0T 自动40TFSI奥迪A6 2013款 2.0T 自动40TFSI</strong>
                <i>上海/2014年8月/5.6万公里</i>
                <span>48.80万</span>
            </p>
        </li>
        <li>
            <img src="image/w_list_pic.jpg" alt="">
            <p class="w-lp-r">
                <strong>奥迪A6 2013款 2.0T 自动40TFSI</strong>
                <i>上海/2014年8月/5.6万公里</i>
                <span>48.80万</span>
            </p>
        </li>
        <li>
            <img src="image/w_list_pic.jpg" alt="">
            <p class="w-lp-r">
                <strong>奥迪A6 2013款 2.0T 奥迪A6 2013款 2.0T 自动40TFSI</strong>
                <i>上海/2014年8月/5.6万公里</i>
                <span>48.80万</span>
            </p>
        </li>
        <li>
            <img src="image/w_list_pic.jpg" alt="">
            <p class="w-lp-r">
                <strong>奥迪A6 2013款 2.0T 自动40TFSI</strong>
                <i>上海/2014年8月/5.6万公里</i>
                <span>48.80万</span>
            </p>
        </li>
        <li>
            <img src="image/w_list_pic.jpg" alt="">
            <p class="w-lp-r">
                <strong>奥迪A6 2013款 2.0T 自动40TFSI</strong>
                <i>上海/2014年8月/5.6万公里</i>
                <span>48.80万</span>
            </p>
        </li>
    </ul> -->
    <div>
    <p v-for="item in list">
    Line:
    <span v-text="item"></span>
    </p>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">    </infinite-loading>
  </div>
</template>
<script>
import InfiniteLoading from 'mint-ui';
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    onInfinite() {
      setTimeout(() => {
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i);
        }
        this.list = this.list.concat(temp);
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      }, 1000);
    }
  },
  components: {
    InfiniteLoading
  }
};
</script>
<style scoped>
.w-car-list{
    margin-bottom: 1.0667rem;
}
.w-car-list li {
  padding: 0.266667rem 0.1333rem;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.w-car-list li img {
  width: 3.066667rem;
  height: 2.133333rem;
  float: left;
}
.w-car-list .w-lp-r {
  width: 6.0rem;
  float: right;
}
.w-car-list .w-lp-r strong {
  height: 1.0rem;
  font-size: 0.346667rem;
  display: block;
  font-weight: normal;
}
.w-car-list .w-lp-r i {
  font-size: 0.32rem;
  color: #bebebe;
  font-style: normal;
  display: block;
  margin: 0 0 0.133333rem;
}
.w-car-list .w-lp-r span {
  font-size: 0.466667rem;
  color: #ff4a23;
}
</style>