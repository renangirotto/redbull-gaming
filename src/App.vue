<template>
  <div class="app" id="app" :class="{ 'no-scroll': modalActive }">
    <div class="container" :class="{ 'no-scroll': modalActive }">
      <header class="hero">
        <h1>PROGRAMAÇÃO <br />DAS STREAM</h1>
        <p>
          Red Bull vai dar asas à FURIA GG, <br class="hide-desktop" />com
          desafios inusitados<br />
          que vão transformar grandes <br class="hide-desktop" />streamings
          <br class="hide-mobile" />
          em experiências <br class="hide-desktop" />ainda mais surpreendentes.
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
          >
            <div class="card-body">
              <div
                class="card-image"
                :style="{ backgroundImage: `url(${card.image})` }"
              >
                <h3 class="card-title">{{ card.title }}</h3>
              </div>
              <button
                class="plus"
                @click="openModal(card.modal)"
                :disabled="checkDate(card.date)"
              >
                {{ checkDate(card.date) ? "Veja como foi" : "Saiba mais" }}
              </button>
            </div>
            <footer class="card-footer">
              <button class="checkin" :disabled="checkDate(card.date)">
                {{ checkDate(card.date) ? "Desafio Concluído" : "Check-in" }}
              </button>
              <span class="checkin-text">168 check-ins</span>
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
          image: "https://dummyimage.com/100x100.png",
          title: "NOME DA EXPERIENCIA",
          modal: "modal-1",
          date: "03/20/2021",
        },
        {
          image: "https://dummyimage.com/100x100.png",
          title: "NOME DA EXPERIENCIA 2",
          modal: "modal-2",
          date: "03/27/2021",
        },
        {
          image: "https://dummyimage.com/100x100.png",
          title: "NOME DA EXPERIENCIA 3",
          modal: "modal-3",
          date: "04/03/2021",
        },
        {
          image: "https://dummyimage.com/100x100.png",
          title: "NOME DA EXPERIENCIA 4",
          modal: "modal-4",
          date: "04/10/2021",
        },
      ],
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
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      //Deactivate modal
      this.modalActive = false;
      //Bind template to null
      this.modalTarget = null;
      //unOverflow the body
      document.body.style.overflow = ''
    },
    checkDate(date) {
      //Check if experience date is older than today's date
      if (new Date() > new Date(date)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
.no-scroll {
  overflow: hidden;
}

.app {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 85px 24px 60px;
  position: relative;
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
    max-width: 1416px;
  }
}

.hero {
  margin-bottom: 56px;
  text-align: center;
  color: #000000;

  @media (min-width: 992px) {
    margin-bottom: 72px;
  }

  h1 {
    display: inline-block;
    padding: 32px 36px;
    margin: 0 auto 56px;
    font-family: "Futura Com Medium Condensed";
    font-weight: bold;
    font-size: 83px;
    line-height: 83px;
    text-align: center;
    text-transform: uppercase;
    color: #14192c;
    background-image: url("./assets/images/border-title-mobile.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 570px 230px;

    @media (min-width: 992px) {
      margin-bottom: 52px;
    }

    @media (min-width: 1200px) {
      padding: 32px 24px;
      font-size: 100px;
      background-image: url("./assets/images/border-title.png");
      background-size: 1147px 147px;
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
    font-size: 38px;
    line-height: 50px;
    text-align: center;
    color: #14192c;

    @media (min-width: 992px) {
      font-size: 42px;
      line-height: 58px;
    }
  }
}

.section-title {
  margin-bottom: 35px;
  font-family: "Futura Com Medium Condensed";
  font-weight: bold;
  font-size: 58px;
  text-align: center;
  text-transform: uppercase;
  color: #14192c;
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 48px;

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
    max-width: 318px;
    margin-bottom: 36px;

    @media (min-width: 992px) {
      max-width: 336px;
    }

    @media (min-width: 1400px) {
      margin-bottom: 0;
    }

    button {
      display: inline-block;
      width: 100%;
      height: 68px;
      border: none;
      border-radius: 36px;
      font-family: "Futura Com";
      font-weight: 500;
      font-size: 34px;
      color: #ffffff;
      background: transparent;
      cursor: pointer;

      @media (min-width: 992px) {
        height: 72px;
      }

      &.plus {
        background-color: #1f3574;
      }

      &.checkin {
        margin-bottom: 20px;
        background-color: #cf2148;
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
      background-size: 318px 391px;

      @media (min-width: 992px) {
        background-size: 336px 410px;
      }
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
    }

    .card-title {
      font-family: "Futura Com Medium Condensed";
      font-weight: bold;
      font-style: italic;
      font-size: 53px;
      line-height: 53px;
      text-transform: uppercase;
      color: #ffffff;
      -webkit-text-stroke: 1px black;

      @media (min-width: 992px) {
        font-size: 56px;
        line-height: 56px;
      }
    }

    .card-footer {
      box-sizing: border-box;
      width: 100%;
      padding: 0 11px;
      text-align: center;

      .checkin-text {
        font-family: "Futura Com";
        font-weight: 500;
        font-size: 22px;
      }
    }

    &.disabled {
      order: 1;

      .card-body {
        background-image: url("./assets/images/border-card-soft.png");
      }

      button {
        &.plus {
          background-color: #818080;
        }

        &.checkin {
          font-size: 29px;
          background-color: #a1a0a0;
        }
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
  font-size: 28px;

  @media (min-width: 992px) {
    font-size: 33px;
  }

  span {
    margin-top: 32px;
  }
}
</style>
