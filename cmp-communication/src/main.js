import { createApp } from 'vue';

import App from './App.vue';
import ActiveElement from './components/ActiveElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';

const app = createApp(App);

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);

app.mount('#app');

// Initially, the App.vue file is sending the props to the KnowleddgeBase file, but this last one doesn't use the
//props for anything. The KnowledgeBase file just fowards the props (topics) to the KnowledgeGrid file which
// uses it to perform the v-for code.
//Plus, the KnowledgeElement send an emit event that is being passed through knowledgegrid and knowledgebase and
//is being used in the App.vue file. This passthrough system isn't uncommon in Vue but there are better ways
//to do this, by useng provide and inject.