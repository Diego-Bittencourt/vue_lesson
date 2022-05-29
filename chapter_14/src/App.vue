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
    <transition 
    name="para" 
    @before-enter="beforeEnter" 
    @before-leave="beforeLeave"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave"
    @enter-cancelled="enterCancelled"
    @leave-cancelled="leaveCancelled"
    >
      <!-- You can listen to the animation events. Each event has a name and they pass the html element
      the <transition> tag is holding. 
      The after-enter hook triggers when the animation is completed.-->
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <!-- the mode allows to control what happens first -->
    <button @click="showUsers" v-if="usersAreVisible === false">Show users</button>
    <button @click="hideUsers" v-else>Hide users</button>
    </transition>
    <!-- There is an exception about using more than one direct child element inside a transition element
    If only one element is in the DOM at certain time, then you can put them inside the transition tag
    If, in a certain moment, both elements are in the DOM, the transition won't work. -->
    <!-- USING V-ELSE IS RECOMMENDED -->
  </div>

  <!-- When using transition in custom elements, the classes fall throuth the root of the child element
    Since, in this case, there are two root elements, so it doesn't work. -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
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
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    enterCancelled() {clearInterval(this.enterInterval)},
    leaveCancelled() {clearInterval(this.leaveInterval)},
    afterLeave() {
      console.log("afterLeave");
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval); // Inside an arrow function, the this. keyword as expected.
          done();
        }
      }, 20);
    },
    afterEnter() {
      console.log("After animation");
    },
    // Keep in mind that, in JS, the code execution goes on and only launches the setInterval function
    // So, the hook "after enter" is triggered before this animation complete because of the setInterval function.
    // This can be solved by using a second argument as a function to let Vue know we are done.
    // I tested and, aparently, the second argument can be named freely, but the same word should be
    // called as a function later.
    enter(el, done) {
      console.log("enter");
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    beforeLeave(el) {
      console.log("Before Leave");
      console.log(el);
      el.style.opacity = 1;
    },
    beforeEnter(el) {
      console.log("Before Enter");
      el.style.opacity = 0;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
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

/* .para-enter-from {
  animation: slide-scale 0.3s ease-out;
  /* opacity: 0;
  transform: translateY(-30px); 
}

.para-enter-active {
  animation: slide-scale 0.3s ease-out;
}

/* .para-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
/* } */

/* .para-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
/* }  

.para-leave-active {
  animation: slide-scale 0.3s ease-out;
} 

/* .para-leave-to {
  /* opacity: 0;
  transform: translateY(30px); */
/* }  */
/* I commented out all the para... css class because I'm going to animate the paragraph with only JS. */

.fade-button-enter-from,
.fade-button-leave-from {
  opacity: 0;

}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
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
