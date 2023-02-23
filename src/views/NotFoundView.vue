<template>

  <ContentBase>
      <figure class="error">
        <div class="four">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="zero">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="four">
          <span></span>
          <span></span>
          <span></span>
        </div>
    </figure>
    <h5 class="h5text">404 天呐！出错了 ~<br>您好像去了一个不存在的地方！ (灬ꈍ ꈍ灬)</h5>
    <div class="returnhome"><a href="/">返回 首页</a></div>
  </ContentBase>

</template>

<script>

import ContentBase from '../components/ContentBase';


export default {
  name: "NotFound",
  components: {
    ContentBase,
  },
};
</script>



<style scoped>

.h5text {
  text-align: center;
  line-height: 2em;
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: red;
}

.returnhome{
  height: 32px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.returnhome a{
  color:rgb(239, 0, 239);
}


figure {
    height: 200px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
}

.error {
	display: flex;
	width: 33em;
	justify-content: space-between;
}

.error > * {
	width: 10em;
	height: 10em;
	position: relative;
}

.error span {
	position: absolute;
	box-sizing: border-box;
	filter: opacity(0.8);
	transition: 0.3s;
}

.four span:nth-child(1) {
	width: 20%;
	height: 80%;
	left: 10%;
	background-color: yellowgreen;
}

.four span:nth-child(2) {
	width: 100%;
	height: 20%;
	top: 50%;
	background-color: turquoise;
}

.four span:nth-child(3) {
	width: 20%;
	height: 100%;
	right: 10%;
	background-color: pink;
}

.zero span:nth-child(1) {
	width: 20%;
	height: 100%;
	left: 10%;
	background-color: skyblue;
}

.zero span:nth-child(2) {
	width: 100%;
	height: 20%;
	top: 10%;
	background-color: plum;
}

.zero span:nth-child(3) {
	width: 20%;
	height: 100%;
	right: 10%;
	background-color: lightcoral;
}

.zero span:nth-child(4) {
	width: 100%;
	height: 20%;
	bottom: 10%;
	background-color: peachpuff;
}

.error:hover span {
	background-color: whitesmoke;
}

.error:hover .four span:nth-child(1) {
	left: 0;
	top: 20%;
}

.error:hover .four span:nth-child(2) {
	top: 0;
}

.error:hover .four span:nth-child(3) {
	right: 0;
}

.error:hover .zero span:nth-child(1) {
	left: 0;
}

.error:hover .zero span:nth-child(2) {
	top: 0;
}

.error:hover .zero span:nth-child(3) {
	right: 0;
}

.error:hover .zero span:nth-child(4) {
	bottom: 0;
}


</style>