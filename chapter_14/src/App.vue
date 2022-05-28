<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBLock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- <transition> can only have 1 direct child, with exceptions.  -->
    <!-- You can create personalize classes added by Vue by adding the name property.
      This way, only the first word is replaced in the class. So, for ex
      if you have the v-enter-to becomes para-enter-to -->
    <!-- You can also change the class name entirely by stating it in the transition elemenet.
      You can write v-enter-from="first-state"
      This is particularly interesting when working with css libraries and stuff. -->
    <transition name="para">
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle paragraph</button>
  </div>
  <transition name="modal">
    <!-- When using transition in custom elements, the classes fall throuth the root of the child element
    Since, in this case, there are two root elements, so it doesn't work. -->
    <base-modal @close="hideDialog" v-if="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
  </transition>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedBLock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
    };
  },
  methods: {
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBLock = true;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: hsl(140, 94%, 31%);
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards;
  /* You can add animation through CSS transitions or CSS animations properties */
}

/* Vue adds determined classes on elements to control their begavior. So those classes should be used 
in the styling.
They are named accordingly to enter or leave 
the classes are being removed, so there is no use for the forward keyword.*/

.para-enter-from {
  animation: slide-scale 0.3s ease-out;
  /* opacity: 0;
  transform: translateY(-30px); */
}

.para-enter-active {
  animation: slide-scale 0.3s ease-out;
}

.para-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

.para-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}

.para-leave-active {
  animation: slide-scale 0.3s ease-out;
}

.para-leave-to {
  /* opacity: 0;
  transform: translateY(30px); */
}

.modal-enter-from {
}

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-enter-to {
}

.modal-leave-from {

}

.modal-leave-active {
animation: modal 0.3s ease-in;
}

.modal-leave-to {

}

@keyframes modal-leave {
  from {
    opacity: 1;
    tranform: translateY(0) scale(1);
  }

  to {

  }
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
