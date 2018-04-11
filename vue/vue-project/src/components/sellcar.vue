<template>
    <div class="w-sale-spk">
        <dl class="w-ac-dl">
            <dt>2011年7月奔驰E260L豪华{{ dtmsg }}</dt>
            <dd class="w-dd-g">
                <img alt="" src="../assets/image/w-tx01.jpg">
                <span><b>李先生：</b>迈腾换奔驰
本来开的迈腾，听说有直接换好车的好事就试试。换了奔驰就是不一样，起步迅猛，加速有力。操控很地道，推背感明显，感觉很皮实。经常跑长途，看中空间，尤其是后排的腿部空间和头部空间都很充裕。内饰做的很高档！关键是没加钱就换上了，有礼有面儿。
</span>
            </dd>
        </dl>
        <img class="w-img" src="../assets/image/w-picr01.jpg" alt="">
        <img class="w-img" src="../assets/image/w-picr01c.jpg" alt="">
        <dl class="w-ac-dl">
            <dt>购车者说</dt>
            <dd class="w-dd-g">
                <img alt="" src="../assets/image/w-tx02.jpg">
                <span><b>杨先生：</b>宝马3换宝马5
0元换车的活动，直接3系换5系，又不占用资金。对我们做生意的人来说再好不过的事了。操控起来都很好，但是毕竟车长，掉头，转弯，有时候一把过不来，不能像开3系那样玩了。
</span>
            </dd>
        </dl>
        <img class="w-img" src="../assets/image/w-picr02.jpg" alt="">
        <img class="w-img" src="../assets/image/w-picr02c.jpg" alt="">
        <dl class="w-ac-dl">
            <dt>购车者说</dt>
            <dd class="w-dd-g">
                <img alt="" src="../assets/image/w-tx03.jpg">
                <span><b>范小姐：</b>天籁换奥迪
一直是想换A6的，就是价格望而却步，所以好多年了都没有行动。听朋友介绍的“你我车”换车，询问了一下，可以不贴钱就换车，还可以在不用的日子出租来还贷款，一下子就心动了。本来的天籁没贴钱就换成了A6，实现了多年来的愿望，算是提前给自己的生日礼物吧~
</span>
            </dd>
        </dl>
        <img class="w-img" src="../assets/image/w-picr03.jpg" alt="">
        <img class="w-img" src="../assets/image/w-picr03c.jpg" alt="">
    </div>
</template>
<script>
  export default{
    props: ['dtmsg'],
  };
</script>
<style scoped>
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
  padding-left: 0.2667rem;
  font-size: 0.32rem;
}
.w-ac-dl .w-dt-big {
  font-size: 0.48rem;
}
.w-sale-spk {
  margin: 0 auto 1.333333rem;
  font-size: 0.4rem;
}
.w-sale-spk p {
  margin: 0.4rem 0;
}
.w-sale-spk .w-img {
  width: 10.0rem;
  display: block;
  margin: 0 auto 0.266667rem;
}
.w-dd-g span{
  width: 5.3333rem;
  float: right;
}
</style>