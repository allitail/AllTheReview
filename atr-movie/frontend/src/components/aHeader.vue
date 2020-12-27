<template>
  <header>
      <h1>
          <router-link to="/">
          <img alt="atr logo" src="../assets/atr.png">
          </router-link>
          </h1>

          <div class="aMenunav">
            <ul class="aMenu">
              <li><router-link to="/atrBoard/aList">게시판</router-link></li>
              <li><a href="javascript: ;">amenu1</a></li>
              <li><a href="javascript: ;">amenu2</a></li>
              <li><a href="javascript: ;">amenu3</a></li>
              <li><a href="javascript: ;">amenu4</a></li>
            </ul>
          </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
header {
  width: 100%;
  text-align: center;
  position: relative;
  height: 120px;
  border-bottom: 1px solid #35495e }

header h1 {
  position: absolute;
  top: 0;
  left: 100px; }

header ul.aMenu:after {
  display: block;
  clear: both;
  content: ''; }

header ul.aMenu {
  position: absolute;
  top: 20px;
  right: 50px; }

header ul.aMenu li {
  float: left;
  padding: 10px 20px;
  list-style: none; }

a {
  text-decoration: none;
  color: #333;
}
</style>