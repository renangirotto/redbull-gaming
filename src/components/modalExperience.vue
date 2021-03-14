<template>
  <div v-if="active" class="modal">
    <div class="modal-container">
      <div class="modal-content">
        <header class="modal-header">
          <button class="modal-close" @click="closeModal()"></button>
          <img
            :src="require(`@/assets/images/experience-${target}.png`)"
            alt=""
          />
          <p>
            Red Bull vai dar asas à FURIA GG, com desafios inusitados<br />que
            vão transformar grandes streamings <br />
            em experiências ainda mais surpreendentes.
          </p>
          <a href="#" target="_blank" class="twitch"
            >ACOMPANHE O CANAL DA FÚRIA</a
          >
        </header>
        <template v-if="target === 'modal-1'">
          <div class="modal-body modal-versus">
            <div class="streamers">
              <div v-for="(streamer, index) in modals[0].streamersOne" :key="index" class="streamer">
                <h4 class="streamer-name">{{streamer.name}}</h4>
                <span class="streamer-followers">{{streamer.followers}}k followers</span>
                <a :href="streamer.link" target="_blank" class="twitch">CONHEÇA O CANAL</a>
              </div>
            </div>
            <div class="versus">
              <img src="../assets/images/vs.png" alt="" />
            </div>
            <div class="streamers">
              <div v-for="(streamer, index) in modals[0].streamersTwo" :key="index" class="streamer">
                <h4 class="streamer-name">{{streamer.name}}</h4>
                <span class="streamer-followers">{{streamer.followers}}k followers</span>
                <a :href="streamer.link" target="_blank" class="twitch">CONHEÇA O CANAL</a>
              </div>
            </div>
          </div>
        </template>
        <template v-if="target === 'modal-2'">
          <div class="modal-body modal-ffa">
            <div class="streamers">
              <div v-for="(streamer, index) in modals[1].streamersOne" :key="index" class="streamer">
                <h4 class="streamer-name">{{streamer.name}}</h4>
                <span class="streamer-followers">{{streamer.followers}}k followers</span>
                <a :href="streamer.link" target="_blank" class="twitch">CONHEÇA O CANAL</a>
              </div>
            </div>
          </div>
        </template>
        <template v-if="target === 'modal-3'">
          <div class="modal-body modal-versus">
            <div class="streamers">
              <div v-for="(streamer, index) in modals[2].streamersOne" :key="index" class="streamer">
                <h4 class="streamer-name">{{streamer.name}}</h4>
                <span class="streamer-followers">{{streamer.followers}}k followers</span>
                <a :href="streamer.link" target="_blank" class="twitch">CONHEÇA O CANAL</a>
              </div>
            </div>
            <div class="versus">
              <img src="../assets/images/vs.png" alt="" />
            </div>
            <div class="streamers">
              <div v-for="(streamer, index) in modals[2].streamersTwo" :key="index" class="streamer">
                <h4 class="streamer-name">{{streamer.name}}</h4>
                <span class="streamer-followers">{{streamer.followers}}k followers</span>
                <a :href="streamer.link" target="_blank" class="twitch">CONHEÇA O CANAL</a>
              </div>
            </div>
          </div>
        </template>
        <template v-if="target === 'modal-4'">
          <div class="modal-body modal-ffa">
            <div class="streamers">
              <div v-for="(streamer, index) in modals[3].streamersOne" :key="index" class="streamer">
                <h4 class="streamer-name">{{streamer.name}}</h4>
                <span class="streamer-followers">{{streamer.followers}}k followers</span>
                <a :href="streamer.link" target="_blank" class="twitch">CONHEÇA O CANAL</a>
              </div>
            </div>
          </div>
        </template>
      </div>
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
  },
  data: function () {
    return {
      modals: [
        {
          title: 'modal-1',
          streamersOne: [
            {
              name: 'streamer 1',
              followers: 100,
              link: '#'
            },
            {
              name: 'streamer 2',
              followers: 200,
              link: '#'
            },
            {
              name: 'streamer 3',
              followers: 300,
              link: '#1'
            },
            {
              name: 'streamer 4',
              followers: 400,
              link: '#1'
            },
          ],
          streamersTwo: [
            {
              name: 'streamer 5',
              followers: 100,
              link: '#'
            },
            {
              name: 'streamer 6',
              followers: 200,
              link: '#'
            },
            {
              name: 'streamer 7',
              followers: 300,
              link: '#1'
            },
            {
              name: 'streamer 8',
              followers: 400,
              link: '#1'
            },
          ],
        },
        {
          title: 'modal-2',
          streamersOne: [
            {
              name: 'streamer 1',
              followers: 100,
              link: '#'
            },
            {
              name: 'streamer 2',
              followers: 200,
              link: '#'
            },
            {
              name: 'streamer 3',
              followers: 300,
              link: '#1'
            },
            {
              name: 'streamer 4',
              followers: 400,
              link: '#1'
            },
            {
              name: 'streamer 5',
              followers: 100,
              link: '#'
            },
            {
              name: 'streamer 6',
              followers: 200,
              link: '#'
            },
            {
              name: 'streamer 7',
              followers: 300,
              link: '#1'
            },
            {
              name: 'streamer 8',
              followers: 400,
              link: '#1'
            }
          ],
        },
        {
          title: 'modal-3',
          streamersOne: [
            {
              name: 'streamer 1',
              followers: 100,
              link: '#'
            },
            {
              name: 'streamer 2',
              followers: 200,
              link: '#'
            },
            {
              name: 'streamer 3',
              followers: 300,
              link: '#1'
            },
            {
              name: 'streamer 4',
              followers: 400,
              link: '#1'
            },
          ],
          streamersTwo: [
            {
              name: 'streamer 5',
              followers: 100,
              link: '#'
            },
            {
              name: 'streamer 6',
              followers: 200,
              link: '#'
            },
            {
              name: 'streamer 7',
              followers: 300,
              link: '#1'
            },
            {
              name: 'streamer 8',
              followers: 400,
              link: '#1'
            },
          ],
        },
        {
          title: 'modal-4',
          streamersOne: [
            {
              name: 'streamer 1',
              followers: 100,
              link: '#'
            },
            {
              name: 'streamer 2',
              followers: 200,
              link: '#'
            },
            {
              name: 'streamer 3',
              followers: 300,
              link: '#1'
            },
            {
              name: 'streamer 4',
              followers: 400,
              link: '#1'
            },
            {
              name: 'streamer 5',
              followers: 100,
              link: '#'
            },
            {
              name: 'streamer 6',
              followers: 200,
              link: '#'
            },
            {
              name: 'streamer 7',
              followers: 300,
              link: '#1'
            },
            {
              name: 'streamer 8',
              followers: 400,
              link: '#1'
            }
          ]
        }
      ]
    }
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

    @media (min-width: 992px) {
      max-width: 906px;
    }
  }

  .modal-content {
    padding: 24px 24px 0;
    background-image: url('../assets/images/border-modal.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 730px 1058px;

    @media (min-width: 992px) {
      background-size: 906px 1085px;
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
      top: 0;
      right: 0;
      background-color: transparent;
      background-image: url("../assets/images/close.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;

      @media (min-width: 992px) {
        width: 16px;
        height: 16px;
      }
    }

    img {
      margin-bottom: 40px;
      max-width: 630px;

      @media (min-width: 992px) {
        max-width: 774px;
      }
    }

    p {
      margin-bottom: 15px;
      font-family: "Futura Com";
      font-weight: 500;
      font-size: 25px;
      line-height: 33px;
      text-align: center;
      color: #14192c;
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
          content: '';
          display: block;
          width: 12px;
          height: 100%;
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -6px;
          background-image: url('../assets/images/border-line.png');
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
          width: 45%;
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
    display: inline-block;
    border-radius: 24px;
    text-decoration: none;

    &.twitch {
      padding: 10px 20px;
      font-family: "Futura Com";
      font-weight: 500;
      font-size: 20px;
      line-height: 27px;
      text-transform: uppercase;
      color: #ffffff;
      background-color: #6441a5;
    }
  }
}
</style>