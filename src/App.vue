<template>
  <div class="app" id="app" :class="{ 'no-scroll': modalActive }">
    <div class="container" :class="{ 'no-scroll': modalActive }">
      <header class="hero">
        <h1>CONHEÇA OS <br>DESAFIOS</h1>
        <p>
          Fique por dentro da programação, dê um check-in no seu desafio <br>preferido e role para baixo para se cadastrar e ter a chance de ganhar <br>aaasas pra acompanhar as transmissões.
        </p>
      </header>
      <section>
        <h2 class="section-title">OS DESAFIOS:</h2>
        <div class="cards">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="card"
            :class="{ disabled: checkDate(card.date) }"
            :ref="card.modal"
          >
            <div class="card-body">
              <div
                class="card-image"
                :class="card.image"
              >
                <h3 class="card-title">{{ card.title }}</h3>
              </div>
              <button
                class="plus"
                @click="openModal(card.modal)"
                :disabled="checkDate(card.date)"
              >
                Saiba mais
              </button>
            </div>
            <footer class="card-footer">
              <a
                :href="card.file"
                class="checkin"
                :class="{ disabled: !card.download }"
                @click="handleCheckin(card.experience)"
                download
              >
                {{ checkDate(card.date) ? "Desafio concluído" : "Check-in" }}
              </a>
              <span v-if="expReady" class="checkin-text">{{
                loadCheckin(card.experience)
              }}
              check-ins <br>já realizados</span>
            </footer>
          </div>
        </div>
        <div class="more">
          <img src="./assets/images/arrow.png" alt="" />
          <span>Deslize para saber mais</span>
        </div>
      </section>
    </div>
    <modal-experience
      :active="modalActive"
      :target="modalTarget"
      v-on:close-modal="closeModal()"
    />
  </div>
</template>

<script>
const fb = require("../firebaseConfig");

import ModalExperience from "./components/modalExperience.vue";

export default {
  name: "App",
  components: {
    ModalExperience,
  },
  data: function () {
    return {
      cards: [
        {
          experience: "flex-em-furia",
          image: "flex-em-furia",
          title: "FLEX EM FURIA",
          modal: "modal-flex-em-furia",
          date: "03/26/2021, 20:00:00",
          file: "https://firebasestorage.googleapis.com/v0/b/redbull-gaming-74ca0.appspot.com/o/Red%20Bull%20Desafios%20Extreaming%20-%20Flex%20em%20Furia.ics?alt=media&token=f57caad6-5c8a-44eb-a191-5f7af7e7325a",
          download: true
        },
        {
          experience: "among-us-5head",
          image: "among-us-5head",
          title: "AMONG US 5HEAD",
          modal: "modal-among-us-5head",
          date: "04/01/2021, 19:00:00",
          file: "https://firebasestorage.googleapis.com/v0/b/redbull-gaming-74ca0.appspot.com/o/Red%20Bull%20Desafios%20Extreaming%20-%20Among%20Us%205Head_1-4.ics?alt=media&token=800ced54-c004-44be-9c3f-d9c11f1b66d9",
          download: true
        },
        {
          experience: "furia-em-campo",
          image: "furia-em-campo",
          title: "FURIA EM CAMPO",
          modal: "modal-furia-em-campo",
          date: "04/09/2021, 20:00:00",
          file: "https://firebasestorage.googleapis.com/v0/b/redbull-gaming-74ca0.appspot.com/o/Red%20Bull%20Desafios%20Extreaming%20-%20Furia%20em%20Campo.ics?alt=media&token=a03e0c42-108e-44a6-ac0a-322a5749dab8",
          download: true
        },
        {
          experience: "olimpiadas-do-fallzao",
          image: "olimpiadas-do-fallzao",
          title: "OLIMPÍADAS DO FALLZÃO",
          modal: "modal-olimpiadas-do-fallzao",
          date: "04/16/2021, 20:00:00",
          file: "https://firebasestorage.googleapis.com/v0/b/redbull-gaming-74ca0.appspot.com/o/Red%20Bull%20Desafios%20Extreaming%20-%20Olimpi%CC%81adas%20do%20Fallza%CC%83o.ics?alt=media&token=57e9096f-7075-41a4-8e5e-d295df862aaf",
          download: true
        },
      ],
      expArray: [],
      expReady: false,
      modalActive: false,
      modalTarget: null,
    };
  },
  methods: {
    openModal(target) {
      //Active modal
      this.modalActive = true;
      //Bind template target
      this.modalTarget = target;
      //Overflow the body
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      //Deactivate modal
      this.modalActive = false;
      //Bind template to null
      this.modalTarget = null;
      //unOverflow the body
      document.body.style.overflow = "";
    },
    checkDate(date) {
      //Check if experience date is older than today's date
      if (new Date() > new Date(date)) {
        return true;
      } else {
        return false;
      }
    },
    checkDownload(exp) {
      if(localStorage.getItem(exp) === null) {
        return true;
      } else {
        return false;
      }
    },
    handleCheckin(exp) {
      if (localStorage.getItem(exp) === null) {
        //Get target object
        let target = this.expArray.find((element) => element.id === exp);

        //Get current total
        let total = target.total + 1;

        //Update the selected experience in firesote
        fb.expCollection.doc(exp).update({
          total: total,
        });

        //Update the selected experience in data array
        //Get index in the array
        let objIndex = this.expArray.findIndex(obj => obj.id === exp);
        //Update object in the array
        this.expArray.splice(objIndex, 1, {id: exp, total: total})

        this.cards.map(element => {
          if(element.experience === exp) {
            element.download = false
            return element
          } else {
            return element
          }
        })

        //Set local stoage to block checkin in the same experience
        localStorage.setItem(exp, true);
      }
    },
    loadCheckin(exp) {
      //Find element value on collection array
      let target = this.expArray.find((element) => element.id === exp);
      //Check if target is ready after async call
      if (target != undefined) {
        return `${target.total}`;
      }
    },
  },
  async mounted() {
    //Handle firebase collection
    await fb.expCollection.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let exp = doc.data();
        exp.id = doc.id;
        this.expArray.push(exp);
      });
    });

    //Check download state
    this.cards.map(element => {
      if(localStorage.getItem(element.experience) != null) {
        element.download = false
        return element
      } else {
        return element
      }
    })

    //Display markup after content load
    this.expReady = true;
  },
};
</script>

<style lang="scss">
.no-scroll {
  overflow: hidden;
}

.app {
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 32px 24px 100px;
  position: relative;
  margin: 0 auto;
  background: rgba(251, 251, 251, 1);
  background: -moz-linear-gradient(
    top,
    rgba(251, 251, 251, 1) 0%,
    rgba(255, 255, 255, 1) 50%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(251, 251, 251, 1)),
    color-stop(50%, rgba(255, 255, 255, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(251, 251, 251, 1) 0%,
    rgba(255, 255, 255, 1) 50%
  );
  background: -o-linear-gradient(
    top,
    rgba(251, 251, 251, 1) 0%,
    rgba(255, 255, 255, 1) 50%
  );
  background: -ms-linear-gradient(
    top,
    rgba(251, 251, 251, 1) 0%,
    rgba(255, 255, 255, 1) 50%
  );
  background: linear-gradient(
    to bottom,
    rgba(251, 251, 251, 1) 0%,
    rgba(255, 255, 255, 1) 50%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fbfbfb', endColorstr='#ffffff', GradientType=0 );

  @media (min-width: 992px) {
    width: auto;
  }

  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 0px solid transparent;
    border-right: 60vw solid transparent;
    border-bottom: 106px solid #f5f5f5;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 60vw solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 106px solid #f5f5f5;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  br {
    &.hide-desktop {
      @media (min-width: 992px) {
        display: none;
      }
    }

    &.hide-mobile {
      display: none;

      @media (min-width: 992px) {
        display: initial;
      }
    }
  }
}

.container {
  max-width: 654px;
  margin: 0 auto;

  @media (min-width: 992px) {
    max-width: 1280px;
  }
}

.hero {
  margin-bottom: 50px;
  text-align: center;
  color: #000000;

  @media (min-width: 992px) {
    margin-bottom: 52px;
  }

  h1 {
    display: inline-block;
    padding: 20px;
    margin: 0 auto 32px;
    font-family: "Futura Com Medium Condensed";
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    color: #14192c;
    background-image: url("./assets/images/border-title-mobile.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 262px 156px;

    @media (min-width: 768px) {
      padding: 32px 36px;
      font-size: 72px;
      line-height: 72px;
      background-size: 412px 202px;
    }

    @media (min-width: 1200px) {
      padding: 32px 24px;
      font-size: 72px;
      background-image: url("./assets/images/border-title.png");
      background-size: 662px 137px;
    }

    br {
      @media (min-width: 1200px) {
        display: none;
      }
    }
  }

  p {
    font-family: "Futura Com";
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #14192c;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 40px;
    }
  }
}

.section-title {
  margin-bottom: 35px;
  font-family: "Futura Com Medium Condensed";
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  color: #14192c;

  @media (min-width: 992px) {
    font-size: 58px;
  }
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 32px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  @media (min-width: 1400px) {
    justify-content: space-between;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 272px;
    margin-bottom: 24px;

    // @media (min-width: 768px) {
    //   max-width: 318px;;
    // }

    // @media (min-width: 992px) {
    //   max-width: 336px;
    // }

    @media (min-width: 1400px) {
      margin-bottom: 0;
    }

    a, button {
      display: inline-block;
      width: 100%;
      height: 48px;
      border: none;
      border-radius: 36px;
      font-family: "Futura Com";
      font-weight: 500;
      font-size: 28px;
      color: #ffffff;
      background: transparent;
      cursor: pointer;

      &.plus {
        background-color: #1f3574;
      }

      &.checkin {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1  0px;
        text-decoration: none;
        background-color: #cf2148;

        &.disabled {
          pointer-events: none;
        }
      }
    }

    .card-body {
      box-sizing: border-box;
      width: 100%;
      padding: 21px 14px;
      margin-bottom: 16px;
      background-image: url("./assets/images/border-card.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 272px 362px;

      // @media (min-width: 768px) {
      //   background-size: 318px 391px;
      // }

      // @media (min-width: 992px) {
      //   background-size: 336px 410px;
      // }
    }

    .card-image {
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
      width: 100%;
      max-width: 292px;
      height: 271px;
      padding: 6px;
      margin-bottom: 10px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      @media (min-width: 992px) {
        max-width: 308px;
        height: 286px;
      }

      &.flex-em-furia {
        background-image: url('./assets/images/flex-em-furia.jpg');
      }

      &.among-us-5head {
        background-image: url('./assets/images/among-us-5head.jpg');
      }

      &.furia-em-campo {
        background-image: url('./assets/images/furia-em-campo.jpg');
      }
      
      &.olimpiadas-do-fallzao {
        background-image: url('./assets/images/olimpiadas-do-fallzao.jpg');
      }
    }

    .card-title {
      font-family: "Futura Com Medium Condensed";
      font-weight: bold;
      font-style: italic;
      font-size: 44px;
      line-height: 48px;
      text-transform: uppercase;
      color: #ffffff;
      -webkit-text-stroke: 1px black;

      // @media (min-width: 768px) {
      //   font-size: 53px;
      //   line-height: 53px;
      // }

      // @media (min-width: 992px) {
      //   font-size: 54px;
      //   line-height: 56px;
      // }
    }

    .card-footer {
      box-sizing: border-box;
      width: 100%;
      padding: 0 11px;
      text-align: center;

      .checkin-text {
        font-family: "Futura Com";
        font-weight: 500;
        font-size: 20px;
        line-height: 1.5;
      }
    }

    &.disabled {
      order: 1;

      .card-image {
        filter: grayscale(100%);
      }

      .card-body {
        background-image: url("./assets/images/border-card-soft.png");
      }

      a, button {
        &.plus {
          background-color: #818080;
        }

        &.checkin {
          font-size: 29px;
          background-color: #a1a0a0;
        }
      }

      a {
        pointer-events: none;
      }
    }
  }
}

.more {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Futura Com";
  font-weight: 500;
  font-size: 20px;

  img {
    width: 56px;
  }

  span {
    margin-top: 32px;
  }
}
</style>
