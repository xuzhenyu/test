<template>
    <div>
        <dl class="w-ac-dl">
            <dt>购车者说</dt>
        </dl>
        <div class="swiper-container swiper-gd">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><router-link :to="{name:'carspeak'}"><img src="../assets/image/demo/w-banner01.png" alt=""></router-link></div>
                <div class="swiper-slide"><img src="../assets/image/demo/w-banner02.png" alt=""></div>
                <div class="swiper-slide"><img src="../assets/image/demo/w-banner03.png" alt=""></div>
                <div class="swiper-slide"><img src="../assets/image/demo/w-banner04.png" alt=""></div>
                <div class="swiper-slide"><img src="../assets/image/demo/w-banner05.png" alt=""></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination w-btn-grop"></div>
        </div>
    </div>
</template>
<style scoped>
            /*-- 图片切换 --*/
        .swiper-container {
          width: 10.0rem;
          height: 7.506667rem;
        }

        .swiper-gd {
          margin-bottom: 1.333333rem !important;
        }
        .swiper-gd img {
          width: 10.0rem;
        }

        .swiper-pagination {
          width: 100%;
          right: 0;
          bottom: 0.266667rem;
          font-size: 0.32rem;
          padding: 0.133333rem 0.266667rem;
          border-radius: 0.133333rem;
          color: #fff;
        }
.swiper-pagination span{
    margin: 0 0.133333rem;
}
        .swiper-button-next, .swiper-button-prev {
          width: 0.36rem;
          height: 0.586667rem;
          background-position: 0.36rem 0.586667rem;
        }
        .w-ac-dl {
  max-width: 10.0rem;
  margin: 0 auto;
  color: #5f5f5f;
  overflow: hidden;
  margin-bottom: 0.266667rem;
}
.w-ac-dl dt {
  background: url(../assets/image/w_icon_line.png) no-repeat 0.33333rem 0.29333rem;
  background-size: 0.12rem 0.413333rem;
  padding-left: 0.6rem;
  height: 0.933333rem;
  line-height: 0.933333rem;
  font-size: 0.373333rem;
}
.w-ac-dl dd {
  padding-left: 0.6rem;
  font-size: 0.32rem;
}
.w-ac-dl .w-dt-big {
  font-size: 0.48rem;
}
</style>