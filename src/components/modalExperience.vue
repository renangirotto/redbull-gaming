<template>
  <div v-if="active" class="modal">
    <div class="modal-container">
      <template v-if="target === 'modal-flex-em-furia'">
        <div class="modal-content flex-em-furia">
          <header class="modal-header">
            <button class="modal-close" @click="closeModal()"></button>
            <img
              class="img-header"
              :src="require(`@/assets/images/experience-flex-em-furia.png`)"
              alt=""
            />
            <img
              class="img-person"
              :src="require(`@/assets/images/header-flex-em-furia.png`)"
              alt=""
            />
            <p>
              O time já está formado e cheio de energia. Serão 5 partidas no
              modo ranqueado flexível de League of Legends, cada uma com uma
              condição especial: na primeira partida eles deverão jogar de
              Yordle; na segunda jogarão como Pirata; e na terceira como
              Demacia. Eles terão que vencer pelo menos 3 partidas para ganhar o
              desafio. O jogo vai funcionar semelhante a uma MD5. Caso alguma
              partida resulte em derrota, o desafio permanece para o próximo
              jogo, caso seja vitória, eles passam para o próximo.
              <strong>Data: 26/03 - 20h</strong>
            </p>
            <a
              href="http://www.twitch.tv/lannik1"
              target="_blank"
              class="twitch"
              >ACOMPANHE A TRANSMISSÃO</a
            >
          </header>

          <div class="modal-body modal-ffa">
            <div class="streamers">
              <div
                v-for="(streamer, index) in modals[0].streamersOne"
                :key="index"
                class="streamer"
              >
                <h4 class="streamer-name">{{ streamer.name }}</h4>
                <a :href="streamer.link" target="_blank" class="twitch"
                  >CONHEÇA O CANAL</a
                >
              </div>
            </div>
            <p class="message">
              *A programação pode sofrer alteração sem aviso prévio
            </p>
            <p class="doForm">
              Cadastre-se no formulário para ter a chance de ganhar aaasas e
              acompanhar as transmissões.
            </p>
          </div>
        </div>
      </template>
      <template v-if="target === 'modal-among-us-5head'">
        <div class="modal-content among-us-5head">
          <header class="modal-header">
            <button class="modal-close" @click="closeModal()"></button>
            <img
              class="img-header"
              :src="require(`@/assets/images/experience-among-us-5head.png`)"
              alt=""
            />
            <img
              class="img-person"
              :src="require(`@/assets/images/header-among-us-5head.png`)"
              alt=""
            />
            <p>
              Pro-players e streamers se juntam para jogar um mini campeonato de
              Among Us, com 5 rodadas (seguindo a ordem dos mapas: 3 no The
              Skeld, 1 no Mira HQ e 1 no Polus), computando pontos a depender do
              desempenho nas partidas. Vence o time que somar mais pontos dentre
              as 5 partidas. <br class="dont" />
              O esquema de pontuação será o seguinte: <br class="dont" />
              1. Quando os TRIPULANTES ganharem, todos que fizeram parte
              <br />do time ganham 1 ponto; <br class="dont" />
              2. Quando os IMPOSTORES ganharem, a dupla de impostores
              <br />ganha 2 pontos;
              <strong>Data: 01/04 - 19h</strong>
            </p>
            <a
              href="http://www.twitch.tv/zerobadass"
              target="_blank"
              class="twitch"
              >ACOMPANHE A TRANSMISSÃO</a
            >
          </header>

          <div class="modal-body modal-ffa">
            <div class="streamers">
              <div
                v-for="(streamer, index) in modals[1].streamersOne"
                :key="index"
                class="streamer"
              >
                <h4 class="streamer-name">{{ streamer.name }}</h4>
                <a :href="streamer.link" target="_blank" class="twitch"
                  >CONHEÇA O CANAL</a
                >
              </div>
            </div>
            <p class="message">
              *A programação pode sofrer alteração sem aviso prévio
            </p>
            <p class="doForm">
              Cadastre-se no formulário para ter a chance de ganhar aaasas e
              acompanhar as transmissões.
            </p>
          </div>
        </div>
      </template>
      <template v-if="target === 'modal-furia-em-campo'">
        <div class="modal-content furia-em-campo">
          <header class="modal-header">
            <button class="modal-close" @click="closeModal()"></button>
            <img
              class="img-header"
              :src="require(`@/assets/images/experience-furia-em-campo.png`)"
              alt=""
            />
            <img
              class="img-person"
              :src="require(`@/assets/images/header-furia-em-campo.png`)"
              alt=""
            />
            <p>
              O Estagiário convida o Claudinho, do Red Bull Bragantino, para
              recriar <br />os melhores gols da sua carreira no videogame.
              <strong>Data: 09/04 - 20h</strong>
            </p>
            <a
              href="http://www.twitch.tv/oestagiario"
              target="_blank"
              class="twitch"
              >ACOMPANHE A TRANSMISSÃO</a
            >
          </header>

          <div class="modal-body modal-ffa">
            <div class="streamers">
              <div
                v-for="(streamer, index) in modals[2].streamersOne"
                :key="index"
                class="streamer"
              >
                <h4 class="streamer-name">{{ streamer.name }}</h4>
              </div>
            </div>
            <p class="message">
              *A programação pode sofrer alteração sem aviso prévio
            </p>
            <p class="doForm">
              Cadastre-se no formulário para ter a chance de ganhar aaasas e
              acompanhar as transmissões.
            </p>
          </div>
        </div>
      </template>
      <template v-if="target === 'modal-olimpiadas-do-fallzao'">
        <div class="modal-content olimpiadas-do-fallzao">
          <header class="modal-header">
            <button class="modal-close" @click="closeModal()"></button>
            <img
              class="img-header"
              :src="
                require(`@/assets/images/experience-olimpiadas-do-fallzao.png`)
              "
              alt=""
            />
            <img
              class="img-person"
              :src="require(`@/assets/images/header-olimpiadas-do-fallzao.png`)"
              alt=""
            />
            <p>
              Mr. Fall promove uma "olimpíada" no Fall Guys entre 4 streamers
              com 5 partidas. Quem cumprir mais desafios dentro do jogo é o
              grande vencedor.
              <strong>Data: 16/04 - 20h</strong>
            </p>
            <a
              href="http://www.twitch.tv/mrfalll"
              target="_blank"
              class="twitch"
              >ACOMPANHE A TRANSMISSÃO</a
            >
          </header>

          <div class="modal-body modal-ffa">
            <div class="streamers">
              <div
                v-for="(streamer, index) in modals[3].streamersOne"
                :key="index"
                class="streamer"
              >
                <h4 class="streamer-name">{{ streamer.name }}</h4>
              </div>
            </div>
            <p class="message">
              *A programação pode sofrer alteração sem aviso prévio
            </p>
            <p class="doForm">
              Cadastre-se no formulário para ter a chance de ganhar aaasas e
              acompanhar as transmissões.
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
    },
    modalPosition: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      modals: [
        {
          title: "modal-flex-em-furia",
          streamersOne: [
            {
              name: "MANDS",
              link: "http://www.twitch.tv/mandstoledo",
            },
            {
              name: "LANNIK",
              link: "http://www.twitch.tv/lannik1",
            },
            {
              name: "Beenie",
              link: "http://www.twitch.tv/beenielol",
            },
            {
              name: "DAENERYSZ",
              link: "http://www.twitch.tv/daenerysz",
            },
            {
              name: "LUAN LEAL",
              link: "http://www.twitch.tv/upluanleal",
            },
          ],
        },
        {
          title: "modal-among-us-5head",
          streamersOne: [
            {
              name: "KRIKOR",
              link: "http://www.twitch.tv/gmkrikor",
            },
            {
              name: "RAFAEL MORAES",
              link: "http://www.twitch.tv/rafaelmoraesgm",
            },
            {
              name: "LALI",
              link: "http://www.twitch.tv/Lali",
            },
            {
              name: "BRINO",
              link: "http://www.twitch.tv/bruninzor",
            },
            {
              name: "MOUNT",
              link: "http://www.twitch.tv/mount",
            },
            {
              name: "GATA",
              link: "https://www.twitch.tv/gata",
            },
            {
              name: "ZERO",
              link: "http://www.twitch.tv/zerobadass",
            },
            {
              name: "GABS",
              link: "http://www.twitch.tv/gabssf",
            },
            {
              name: "KALERA",
              link: "http://www.twitch.tv/Kalera",
            },
            {
              name: "BRAVA",
              link: "http://www.twitch.tv/Brava",
            },
          ],
        },
        {
          title: "modal-furia-em-campo",
          streamersOne: [
            {
              name: "O ESTAGIÁRIO",
            },
            {
              name: "CLAUDINHO",
            },
          ],
        },
        {
          title: "modal-olimpiadas-do-fallzao",
          streamersOne: [
            {
              name: "Mr. Fall",
            },
            {
              name: "Convidados surpresa",
            },
          ],
        },
      ],
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: #ffffff;
  overflow: auto;

  .modal-container {
    width: 100%;
    max-width: 730px;
    padding: 85px 24px 120px;
    position: relative;

    @media (min-width: 992px) {
      max-width: 906px;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 92px;
      left: 18px;
      height: calc(100% - 216px);
      width: 8px;
      background-image: url("../assets/images/border-modal-left.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      @media (min-width: 992px) {
        left: 24px;
      }
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 92px;
      right: 18px;
      height: calc(100% - 216px);
      width: 7px;
      background-image: url("../assets/images/border-modal-right.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      @media (min-width: 992px) {
        rigth: 24px;
      }
    }
  }

  .modal-content {
    padding: 24px 24px 0;
    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 9px;
      background-image: url("../assets/images/border-modal-top.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background-image: url("../assets/images/border-modal-bottom.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &.among-us-5head {
      br {
        &:not(.dont) {
          display: none;

          @media (min-width: 992px) {
            display: initial;
          }
        }
      }
    }

    &.furia-em-campo {
      br {
        display: none;

        @media (min-width: 992px) {
          display: initial;
        }
      }
    }
  }

  .modal-header {
    position: relative;
    text-align: center;

    .modal-close {
      width: 24px;
      height: 24px;
      border: none;
      position: absolute;
      top: -8px;
      right: -14px;
      background-color: transparent;
      background-image: url("../assets/images/close.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;

      @media (min-width: 992px) {
        width: 16px;
        height: 16px;
        top: 0px;
        right: 0px;
      }
    }

    .img-header {
      width: 100%;
      margin-bottom: 40px;
      max-width: 630px;

      @media (min-width: 992px) {
        max-width: 774px;
      }
    }

    .img-person {
      width: 100%;
      max-width: 326px;
      margin-bottom: 24px;
    }

    p {
      margin-bottom: 15px;
      font-family: "Futura Com";
      font-weight: 500;
      font-size: 20px;
      line-height: 33px;
      text-align: center;
      color: #14192c;

      @media (min-width: 992px) {
        font-size: 24px;
      }

      strong {
        display: block;
        font-weight: 900;
      }
    }
  }

  .modal-body {
    &.modal-versus {
      display: flex;
      justify-content: center;
      margin-top: 50px;

      .streamers {
        margin-top: 40px;
      }

      .versus {
        position: relative;
        margin-right: 32px;
        margin-left: 32px;
        padding-bottom: 510px;

        @media (min-width: 992px) {
          margin-right: 50px;
          margin-left: 50px;
        }

        &::before {
          content: "";
          display: block;
          width: 12px;
          height: 100%;
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -6px;
          background-image: url("../assets/images/border-line.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        img {
          position: relative;
          min-width: 145px;
          max-width: 145px;
        }
      }
    }

    &.modal-ffa {
      margin-top: 92px;
      padding-bottom: 58px;

      .streamers {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .streamer {
          width: 100%;

          @media (min-width: 768px) {
            width: 45%;
          }
        }
      }
    }
  }

  .streamers {
    .streamer {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      .streamer-name {
        font-family: "Futura Com Book";
        font-weight: bold;
        font-size: 25px;
        line-height: 25px;
        text-transform: uppercase;
        text-align: center;
        color: #14192c;
      }

      .streamer-followers {
        margin-top: 5px;
        font-family: "Futura Com";
        font-weight: 500;
        font-size: 17px;
        line-height: 25px;
        color: #14192c;
      }

      a {
        margin-top: 10px;
      }
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    border-radius: 24px;
    text-decoration: none;

    &.twitch {
      min-height: 14px;
      padding: 10px 20px;
      font-family: "Futura Com";
      font-weight: 500;
      font-size: 13px;
      line-height: 2px;
      text-transform: uppercase;
      color: #ffffff;
      background-color: #6441a5;

      @media (min-width: 992px) {
        font-size: 20px;
      }
    }
  }

  .message {
    margin-top: 25px;
    margin-bottom: 15px;
    font-family: "Futura Com";
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #14192c;
  }

  .doForm {
    margin-top: 32px;
    margin-bottom: 15px;
    font-family: "Futura Com";
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #14192c;
  }
}
</style>