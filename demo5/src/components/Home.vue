<template>
  <div class="home">
      This is the Home Page
      <p></p>
      <button @click="goToMenu" class="btn btn-success"> Let's Order!</button>
      
      <body style="background-color: #222222; padding-bottom: 0">

      <div class="world">
          <div class="cube" tabindex="0">
              <div class="cube__front"></div>
              <div class="cube__back"></div>
              <div class="cube__left"></div>
              <div class="cube__right"></div>
              <div class="cube__top"></div>
              <div class="cube__bottom"></div>

          </div>
      </div>

      </body>


  </div>
</template>

<script>
export default {
  name: 'home',
  methods:{
    goToMenu(){
      //跳转到上一次的页面
      //this.$router.go(-1)

      //指定跳转的地址
      //this.$router.replace('/menu')

      //指定跳转路由的名字下
      //this.$router.replace({name:'menuLink'})

      //通过push进行跳转
      this.$router.push('/menu')
      //this.$router.push({name:'/menu'})


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


        body {
            margin: 0;
            overflow: hidden;
            width: 100vw;
            height: 100vh;
            background: #222;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }

        .world {
            -webkit-perspective: 800px;
            perspective: 800px;
            width: 100vh;
            height: 100vh;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -moz-grid-line;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }

        .cube {
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            width: 50vh;
            height: 50vh;
            position: relative;
            -webkit-animation: rotator 4.5s linear infinite;
            animation: rotator 4.5s linear infinite;
            outline: 0;
        }

        .cube * {
            background: #000;
            box-shadow: 0 0 3vh currentColor;
            -webkit-transition: background 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
            transition: background 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
        }

        .cube:hover * {
            background: currentColor;
            box-shadow: 0 0 20vh currentColor;
        }

        .cube .cube__front {
            color: deeppink;
            -webkit-transform: translateZ(25vh);
            transform: translateZ(25vh);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .cube .cube__right {
            color: lightcoral;
            -webkit-transform: rotateY(90deg) translateZ(25vh);
            transform: rotateY(90deg) translateZ(25vh);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .cube .cube__left {
            color: skyblue;
            -webkit-transform: rotateY(270deg) translateZ(25vh);
            transform: rotateY(270deg) translateZ(25vh);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .cube .cube__back {
            color: seagreen;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            -webkit-transform: rotateY(180deg) translateZ(25vh);
            transform: rotateY(180deg) translateZ(25vh);
        }

        .cube .cube__top {
            color: mediumseagreen;
            -webkit-transform: rotateX(90deg) translateZ(25vh);
            transform: rotateX(90deg) translateZ(25vh);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .cube .cube__bottom {
            color: dodgerblue;
            -webkit-transform: rotateX(270deg) translateZ(25vh);
            transform: rotateX(270deg) translateZ(25vh);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        @-webkit-keyframes rotator {
            0% {
                -webkit-transform: rotateX(0deg) rotateY(0deg);
                transform: rotateX(0deg) rotateY(0deg);
            }
            100% {
                -webkit-transform: rotateX(360deg) rotateY(360deg);
                transform: rotateX(360deg) rotateY(360deg);
            }
        }

        @keyframes rotator {
            0% {
                -webkit-transform: rotateX(0deg) rotateY(0deg);
                transform: rotateX(0deg) rotateY(0deg);
            }
            100% {
                -webkit-transform: rotateX(360deg) rotateY(360deg);
                transform: rotateX(360deg) rotateY(360deg);
            }
        }


    </style>

