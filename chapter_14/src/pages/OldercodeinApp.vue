<div class="container">
    <user-list></user-list>
  </div>
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
    <!-- Adding the :css="false" disables the css animations for that transition. It is not necessary
      but it let vue knows you won't use css so it skips the anaylsis. It increases performance. -->
    <transition
      :css="false"
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
      <button @click="showUsers" v-if="usersAreVisible === false">
        Show users
      </button>
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