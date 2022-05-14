import { createApp } from 'vue';

import App from './App.vue';

import BaseBadge from './components/BaseBadge.vue';


const app = createApp(App);
app.component('base-badge', BaseBadge);


app.mount('#app');

//Importing and mounting components in the main.js file makes those components global. This takes more time to load
//and it is harder to know where those components are being used. So, whenever there is a components only used
//in one place, this component should be declared localy, not globaly. 
//To register a component localy, just write the import statement inside the script tag of the parent-to-be component.
//Then, create a new element in the vue object and place inside the component property. 
//The component property requires an object with the name of the component being imported. You can use the 
//component using the kebab-case (used until now) with opening  and closing tags. Or it can be achieved using the 
//child component's name in PasCal case in a self-closing tag.

//The components can be imported localy inside another component which it is being used.
//The component element, inside the vue object, asks for an object of components. These can use kebab-case or PascalCase.
//Ex:
//components: {
//     "imported-element": ImportedElement,
//     ImportedElement: ImportedElement,
//     ImportedElement ---- which will be translated to the upper 
// }
//Also, the imported element can be place using:
// <imported-element></imported-element>
// or
// <ImportedElement />
//It is always recommended to keep a pattern. I think I'll use:
// components: {
//     ImportedElement
// }
// <ImportedElement />