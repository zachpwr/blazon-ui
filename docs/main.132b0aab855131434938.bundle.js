(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(45);function getFocusedBorderColor(props){return props.error?props.theme.colors.error:props.theme.colors.main}const TextInput=__importDefault(__webpack_require__(9)).default.input`
  background-color: ${props=>props.theme.colors.white};
  border: 1px solid ${function getBorderColor(props){return props.error?props.theme.colors.error:props.theme.colors.secondary}};
  border-radius: ${props=>props.theme.borderRadius};
  transition: 0.25s border-color ease-in-out, 0.25s box-shadow ease-in-out;
  cursor: text;
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 1em;
  padding: 0.75em 1em;
  outline: 0;
  appearance: none;

  &::placeholder {
    color: ${props=>props.theme.colors.secondary};
  }

  &:hover {
    border-color: ${props=>polished_1.mix(.5,props.theme.colors.white,getFocusedBorderColor(props))};
  }

  &:focus {
    border-color: ${getFocusedBorderColor};
    box-shadow: 0 0 0 2px ${props=>polished_1.transparentize(.75,getFocusedBorderColor(props))};

    &::selection {
      color: ${getFocusedBorderColor};
      background-color: ${props=>polished_1.transparentize(.75,getFocusedBorderColor(props))};
      display: inline-block;
    }
  }

  &:disabled {
    border-color: ${props=>props.theme.colors.secondary};
    background-color: ${props=>polished_1.mix(.5,props.theme.colors.white,props.theme.colors.secondary)};
    cursor: default;
  }
`;TextInput.displayName="TextInput",exports.default=TextInput},258:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const addon_links_1=__webpack_require__(259),React=__importStar(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(9)),react_1=__webpack_require__(7),button_1=__importDefault(__webpack_require__(64)),logo_png_1=__importDefault(__webpack_require__(262)),StoryColumn=styled_components_1.default.div`
  padding: 10% 20%;
`;react_1.storiesOf("Navigation|Home",module).add("Welcome",()=>React.createElement(StoryColumn,null,React.createElement("img",{src:logo_png_1.default,style:{width:32}}),React.createElement("h1",null,"Blazon UI"),React.createElement("p",null,"Blazon UI is a React component library."),React.createElement("p",null,React.createElement("a",{href:"https://www.npmjs.com/package/blazon-ui"},React.createElement("img",{src:"https://img.shields.io/npm/v/blazon-ui.svg?color=%23304FFE"}))," ",React.createElement("a",{href:"https://www.github.com/zachpwr/blazon-ui"},React.createElement("img",{src:"https://img.shields.io/badge/Github-zachpwr%2Fblazon--ui-3D5AFE.svg"}))," ",React.createElement("a",{href:"https://bundlephobia.com/result?p=blazon-ui"},React.createElement("img",{src:"https://img.shields.io/bundlephobia/minzip/blazon-ui.svg?color=%238C9EFF"}))),React.createElement("hr",null),React.createElement("p",null,React.createElement(button_1.default,{onClick:addon_links_1.linkTo("Navigation|Getting Started","Installing Blazon UI"),title:"Get Started with Blazon UI"},"💪🏻 Get Started →"),React.createElement(button_1.default,{color:"secondary",onClick:addon_links_1.linkTo("Navigation|Home","About Blazon UI"),title:"Learn More about Blazon UI"},"ℹ️ Learn More")))).add("About Blazon UI",()=>React.createElement(StoryColumn,null,React.createElement("img",{src:logo_png_1.default,style:{width:32}}),React.createElement("h1",null,"About Blazon UI"),React.createElement("p",null,React.createElement("b",null,"Blazon UI")," is an open source React component library written in Typescript. It provides a comprehensive set of styled components for creating colorful, responsive, a11y-friendly user interfaces."),React.createElement("p",null,"Blazon UI was created in 2019 by ",React.createElement("a",{href:"https://www.zachpwr.com"},"Zach Power"),", a software engineer @ Optimizely, Inc. in San Francisco, CA."),React.createElement("p",null,React.createElement(button_1.default,{onClick:addon_links_1.linkTo("Navigation|Getting Started","Installing Blazon UI"),title:"Install Blazon UI to your app"},"📲 Install Blazon UI →"))))}).call(this,__webpack_require__(4)(module))},262:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo.fc6e18dc.png"},275:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(45),styled_components_1=__importDefault(__webpack_require__(9)),DEFAULT_COLOR="main";function getPillColor(props){return props.theme.colors[props.color||DEFAULT_COLOR]}const Pill=styled_components_1.default.div`
  background-color: ${getPillColor};
  color: ${function getPillTextColor(props){const bgColor=getPillColor(props);return polished_1.getLuminance(bgColor)>.5?props.theme.colors.darkGray:props.theme.colors.white}};
  margin: 0 5px 10px 0;
  font-size: 1em;
  padding: 0.25em 0.75em;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.0625em;
  vertical-align: middle;
  cursor: default;
  display: inline-block;
  transition: 0.25s color ease-in-out, 0.25s background-color ease-in-out;

  &:last-of-type {
    margin-right: 0;
  }
`;Pill.displayName="Pill",exports.default=Pill},276:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(45);function getSwitchColor(props){return props.on?props.theme.colors.main:props.theme.colors.secondary}const Switch=__importDefault(__webpack_require__(9)).default.button`
  height: 1em;
  width: 2.5em;
  background-color: ${getSwitchColor};
  border: 0;
  outline: 0;
  height: 1em;
  border-radius: 100px;
  padding: 0.75em 1em;
  font-size: 1em;
  line-height: 1em;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.25s background-color ease-in-out;
  display: inline-block;
  vertical-align: middle;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    box-shadow: 0 0 0 2px ${props=>polished_1.transparentize(.75,getSwitchColor(props))};
  }

  &::before {
    width: 1em;
    height: 1em;
    padding: 0.5em;
    border-radius: 100px;
    background-color: ${props=>props.theme.colors.white};
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    right: ${props=>props.on?"0.25em":"calc(100% - 2.25em)"};
    transition: 0.25s right ease-in-out;
    transform: translateY(-50%);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background-color: ${getSwitchColor};
  }
`;Switch.displayName="Switch",exports.default=Switch},277:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),styled_components_1=__webpack_require__(9),theme_1=__importDefault(__webpack_require__(91)),ThemeProvider=props=>React.createElement(styled_components_1.ThemeProvider,{theme:props.theme||theme_1.default},props.children);ThemeProvider.displayName="ThemeProvider",exports.default=ThemeProvider;try{themeProvider.displayName="themeProvider",themeProvider.__docgenInfo={description:"",displayName:"themeProvider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"ITheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/themeProvider/index.tsx#themeProvider"]={docgenInfo:themeProvider.__docgenInfo,name:"themeProvider",path:"src/themeProvider/index.tsx#themeProvider"})}catch(__react_docgen_typescript_loader_error){}},280:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const GlobalStyle=__webpack_require__(9).createGlobalStyle`
  ${function getFontImport(props){return props.theme.fontImportUrl?`@import url('${props.theme.fontImportUrl}');`:""}}

  * {
    font-family: ${props=>props.theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 14px;
  }

  @media only screen and (max-device-width : 1024px) {
    html {
      font-size: 16px;
    }
  }
`;GlobalStyle.displayName="GlobalStyle",exports.default=GlobalStyle;try{GlobalStyleComponent.displayName="GlobalStyleComponent",GlobalStyleComponent.__docgenInfo={description:"",displayName:"GlobalStyleComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/globalStyle/index.tsx#GlobalStyleComponent"]={docgenInfo:GlobalStyleComponent.__docgenInfo,name:"GlobalStyleComponent",path:"src/globalStyle/index.tsx#GlobalStyleComponent"})}catch(__react_docgen_typescript_loader_error){}},281:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(282),_src_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(91),_src_theme__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_src_theme__WEBPACK_IMPORTED_MODULE_1__),_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(284),_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_2__);__webpack_exports__.a=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.create)({base:"light",brandTitle:"Blazon UI",brandUrl:"https://www.npmjs.com/package/blazon-ui",brandImage:_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_2___default.a,fontBase:_src_theme__WEBPACK_IMPORTED_MODULE_1___default.a.fontFamily,colorPrimary:_src_theme__WEBPACK_IMPORTED_MODULE_1___default.a.colors.darkGray,colorSecondary:_src_theme__WEBPACK_IMPORTED_MODULE_1___default.a.colors.main})},284:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/storybookLogo.12f7b20a.png"},285:function(module,exports,__webpack_require__){__webpack_require__(286),__webpack_require__(371),module.exports=__webpack_require__(372)},372:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(22),__webpack_require__(24),__webpack_require__(20),__webpack_require__(39);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),_src_themeProvider__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(277),_src_themeProvider__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_src_themeProvider__WEBPACK_IMPORTED_MODULE_6__),_src_globalStyle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(280),_src_globalStyle__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_src_globalStyle__WEBPACK_IMPORTED_MODULE_7__),_theme__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(281),req=(__webpack_require__(258),__webpack_require__(532));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{theme:_theme__WEBPACK_IMPORTED_MODULE_8__.a}});var _ref=react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_globalStyle__WEBPACK_IMPORTED_MODULE_7___default.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(req),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(function(story){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_themeProvider__WEBPACK_IMPORTED_MODULE_6___default.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,_ref,story()))})},module)}.call(this,__webpack_require__(373)(module))},532:function(module,exports,__webpack_require__){var map={"./alert.stories.tsx":533,"./button.stories.tsx":535,"./buttonGroup.stories.tsx":610,"./checkbox.stories.tsx":612,"./formSection.stories.tsx":614,"./gettingStarted.stories.tsx":616,"./home.stories.tsx":258,"./panel.stories.tsx":617,"./pill.stories.tsx":619,"./progressBar.stories.tsx":620,"./select.stories.tsx":629,"./switch.stories.tsx":631,"./textInput.stories.tsx":632,"./textInputGroup.stories.tsx":633};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=532},533:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(7),alert_1=__importDefault(__webpack_require__(534));react_1.storiesOf("Components|Atoms (Basic)/Alert",module).add("Default State",()=>React.createElement("div",null,React.createElement(alert_1.default,null,React.createElement("b",null,"Fáilte!")," Go raibh maith agat as clárú."),React.createElement(alert_1.default,{color:"success"},React.createElement("b",null,"Samþykkt!")," Umsóknin þín var staðfest og samþykkt."),React.createElement(alert_1.default,{color:"warning"},React.createElement("b",null,"Rabhadh!")," An do chuir thu eadar-theangachadh an teacsa seo?"),React.createElement(alert_1.default,{color:"error"},React.createElement("b",null,"Misslyckad!")," Programmet kunde inte kompilera på grund av syntaxfel."),React.createElement(alert_1.default,{color:"secondary"},React.createElement("b",null,"Интересный факт:")," C++ компилируемый, статически типизированный язык программирования общего назначения.")))}).call(this,__webpack_require__(4)(module))},534:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(45);function getAlertBorderColor(props){return props.theme.colors[props.color||"main"]}const Alert=__importDefault(__webpack_require__(9)).default.div`
  background-color: ${function getAlertBackground(props){return polished_1.mix(.5,props.theme.colors.white,getAlertBorderColor(props))}};
  border: 1px solid ${getAlertBorderColor};
  border-radius: ${props=>props.theme.borderRadius};
  padding: 10px;
  margin-bottom: 10px;
  color: ${function getAlertTextColor(props){return polished_1.mix(.75,props.theme.colors.darkGray,getAlertBorderColor(props))}};

  &:last-of-type {
    margin-bottom: 0;
  }
`;Alert.displayName="Alert",exports.default=Alert},535:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),addon_actions_1=__webpack_require__(44),react_1=__webpack_require__(7),button_1=__importDefault(__webpack_require__(64));react_1.storiesOf("Components|Atoms (Basic)/Button",module).add("With Plain Text",()=>React.createElement("div",null,React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked")},"Hello"),React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),color:"secondary"},"Hello"))).add("With Emojis",()=>React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked")},React.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))).add("Disabled State",()=>React.createElement("div",null,React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),disabled:!0},"Disabled"),React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),color:"secondary",disabled:!0},"Disabled")))}).call(this,__webpack_require__(4)(module))},610:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),addon_actions_1=__webpack_require__(44),react_1=__webpack_require__(7),button_1=__importDefault(__webpack_require__(64)),buttonGroup_1=__importDefault(__webpack_require__(611));react_1.storiesOf("Components|Molecules (Composite)/ButtonGroup",module).add("Default State",()=>React.createElement(buttonGroup_1.default,null,React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),color:"secondary"},"Hello"),React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),color:"secondary"},"Hello"),React.createElement(button_1.default,{onClick:addon_actions_1.action("clicked"),color:"secondary"},"Hello")))}).call(this,__webpack_require__(4)(module))},611:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const styled_components_1=__importDefault(__webpack_require__(9)),button_1=__importDefault(__webpack_require__(64)),ButtonGroup=styled_components_1.default.span`
  ${button_1.default} {
    border-radius: 0;
    margin-right: 0;
    z-index: 0;
    position: relative;

    &:first-of-type {
      border-top-left-radius: ${props=>props.theme.borderRadius};
      border-bottom-left-radius: ${props=>props.theme.borderRadius};
    }

    &:last-of-type {
      border-top-right-radius: ${props=>props.theme.borderRadius};
      border-bottom-right-radius: ${props=>props.theme.borderRadius};
    }

    &:focus {
      z-index: 1;
    }
  }
`;ButtonGroup.displayName="ButtonGroup",exports.default=ButtonGroup},612:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),addon_actions_1=__webpack_require__(44),react_1=__webpack_require__(7),checkbox_1=__importDefault(__webpack_require__(613)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[checked,setChecked]=React.useState(initialValue||!1);return render(checked,()=>{setChecked(!checked),addon_actions_1.action("click")(checked?"unchecked":"checked")})};react_1.storiesOf("Components|Atoms (Basic)/Checkbox",module).add("Default State",()=>React.createElement(DemoStateWrapper,{render:(checked,onClick)=>React.createElement(checkbox_1.default,{checked:checked,onClick:onClick})})).add("Disabled State",()=>React.createElement("div",null,React.createElement(checkbox_1.default,{disabled:!0,onClick:addon_actions_1.action("clicked")}),React.createElement("br",null),React.createElement(checkbox_1.default,{disabled:!0,checked:!0,onClick:addon_actions_1.action("clicked")})))}).call(this,__webpack_require__(4)(module))},613:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(45);function getBorderColor(props){return props.checked?props.theme.colors.main:props.theme.colors.secondary}const Checkbox=__importDefault(__webpack_require__(9)).default.button`
  border-radius: 1em;
  background-color: ${function getBackgroundColor(props){return props.checked?props.theme.colors.main:props.theme.colors.white}};
  border: 1px solid ${getBorderColor};
  height: 2em;
  width: 2em;
  padding: 0;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  transition: 0.25s border-color ease-in-out;
  position: relative;
  vertical-align: middle;
  font-size: 1em;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    border-color: ${function getHoverBorderColor(props){return props.theme.colors.main}};

    &::before {
      opacity: 1;
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props=>polished_1.transparentize(.75,getBorderColor(props))};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    border-color: ${getBorderColor};
  }

  &::before {
    content: '';
    width: 25%;
    height: 50%;
    border-width: 0 1px 1px 0;
    border-color: ${function getCheckColor(props){return props.theme.colors[props.checked?"white":"main"]}};
    border-style: solid;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    margin-top: -0.125em;
    opacity: ${props=>props.checked?1:0};
    transition: 0.25s opacity ease-in-out, 0.25s border-color ease-in-out;
  }
`;Checkbox.displayName="Checkbox",exports.default=Checkbox},614:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(7),addon_actions_1=__webpack_require__(44),formSection_1=__importDefault(__webpack_require__(615)),textInput_1=__importDefault(__webpack_require__(122)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[text,setText]=React.useState(initialValue||"");return render(text,({target:target})=>{setText(target.value),addon_actions_1.action("change")(target.value)})};react_1.storiesOf("Components|Molecules (Composite)/FormSection",module).add("Default State",()=>React.createElement("div",null,React.createElement(formSection_1.default,{title:"Name"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})),React.createElement(formSection_1.default,{title:"Email Address"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})))).add("Required State",()=>React.createElement("div",null,React.createElement(formSection_1.default,{title:"Name",required:!0},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})),React.createElement(formSection_1.default,{title:"Email Address"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})))).add("Error State",()=>React.createElement("div",null,React.createElement(formSection_1.default,{title:"Name",required:!0,error:"Please enter your name"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange,error:!0})})),React.createElement(formSection_1.default,{title:"Email Address"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})}))))}).call(this,__webpack_require__(4)(module))},615:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(9)),SectionTitle=styled_components_1.default.div`
  font-size: 1em;
  margin-bottom: 5px;
  font-weight: 600;
  color: ${props=>props.theme.colors.darkGray};

  &::after {
    content: '${props=>props.required?" *":""}';
    color: ${props=>props.theme.colors.error};
    display: inline;
  }
`;SectionTitle.displayName="SectionTitle";const SectionError=styled_components_1.default.div`
  color: ${props=>props.theme.colors.error};
  margin-top: 5px;
  font-size: 0.75em;
  font-weight: 600;
`;SectionError.displayName="SectionError";const FormSection=styled_components_1.default(props=>React.createElement("div",{className:props.className},React.createElement(SectionTitle,{required:props.required},props.title),props.children,props.error&&React.createElement(SectionError,null,props.error)))`
  margin-bottom: 20px;
`;FormSection.displayName="FormSection",exports.default=FormSection},616:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const addon_links_1=__webpack_require__(259),React=__importStar(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(9)),react_1=__webpack_require__(7),logo_png_1=__importDefault(__webpack_require__(262)),button_1=__importDefault(__webpack_require__(64)),StoryColumn=styled_components_1.default.div`
  padding: 10% 20%;

  code {
    font-family: monospace;
    padding: 10px;
    background-color: ${({theme:theme})=>theme.colors.secondary};
    border-radius: ${({theme:theme})=>theme.borderRadius};
    display: block;
  }

  p code {
    display: inline-block;
    padding: 2px;
    margin: -2px 0;
  }
`;react_1.storiesOf("Navigation|Getting Started",module).add("Installing Blazon UI",()=>React.createElement(StoryColumn,null,React.createElement("img",{src:logo_png_1.default,style:{width:32}}),React.createElement("h1",null,"Installing Blazon UI"),React.createElement("p",null,"If your app uses React, it's super easy to integrate with ",React.createElement("b",null,"Blazon UI"),". Simply add ",React.createElement("code",null,"blazon-ui")," as a dependency in your ",React.createElement("i",null,"package.json")," file ",React.createElement("a",{href:"https://www.npmjs.com/package/blazon-ui"},"via NPM"),"."),React.createElement("code",null,"yarn add blazon-ui"),React.createElement("p",null,"Then, you should be good to start instantiating ",React.createElement("b",null,"Blazon UI")," components in your app."),React.createElement("p",null,React.createElement(button_1.default,{onClick:addon_links_1.linkTo("Navigation|Getting Started","Using Blazon UI"),title:"Start Using Blazon UI"},"👉🏻 Start Using Blazon UI →")))).add("Using Blazon UI",()=>React.createElement(StoryColumn,null,React.createElement("img",{src:logo_png_1.default,style:{width:32}}),React.createElement("h1",null,"Using Blazon UI"),React.createElement("p",null,"Once you've installed ",React.createElement("b",null,"Blazon UI")," to your React app, you'll need to install the ",React.createElement("i",null,"Theme Provider")," and"," ",React.createElement("i",null,"Global Style"),". Please wrap any part of your component hierarchy containing Blazon UI components with a"," ",React.createElement("code",null,"<ThemeProvider />"),". Additionally, include the ",React.createElement("code",null,"<GlobalStyle />")," at some point in your component hierarchy to apply global styles to the page."),React.createElement("p",null,"Below is the recommended setup for using ",React.createElement("b",null,"Blazon UI"),":"),React.createElement("code",null,"import { ThemeProvider, GlobalStyle } from 'blazon-ui';",React.createElement("br",null),"<ThemeProvider>",React.createElement("br",null),"  <GlobalStyle />",React.createElement("br",null),"  {/* Root of your React app */}",React.createElement("br",null),"</ThemeProvider>"),React.createElement("p",null,"Now that you've installed the global ",React.createElement("b",null,"Blazon UI"),' theme utilities, you can begin using the components listed in the "Components" section of these docs within your React app.'),React.createElement("p",null,React.createElement(button_1.default,{onClick:addon_links_1.linkTo("Components|Atoms (Basic)/Alert","Default State"),title:"See Blazon UI Components Now"},"👀 See Components Now →"))))}).call(this,__webpack_require__(4)(module))},617:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(9)),react_1=__webpack_require__(7),button_1=__importDefault(__webpack_require__(64)),panel_1=__importDefault(__webpack_require__(618)),pill_1=__importDefault(__webpack_require__(275)),switch_1=__importDefault(__webpack_require__(276)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[checked,setChecked]=React.useState(initialValue||!1);return render(checked,()=>{setChecked(!checked)})},SwitchContainer=styled_components_1.default.div`
  display: flex;
  align-items: center;

  ${switch_1.default} {
    flex-grow: 0;
    flex-shrink: 0;
  }
`;react_1.storiesOf("Components|Atoms (Basic)/Panel",module).add("Empty State",()=>React.createElement(panel_1.default,null)).add("With Text",()=>React.createElement("div",null,React.createElement(panel_1.default,null,React.createElement("h1",null,"Baile Átha Cliath"," ",React.createElement(pill_1.default,{style:{fontSize:"1rem",float:"right"},color:"secondary"},"99€")),React.createElement("p",null,"Is é Baile Átha Cliath príomhchathair na hÉireann agus é ar an gcathair is mó sa tír freisin. Tá sé suite in oirthear na tíre, cois Life agus ar imeall Mhuir Éireann. Tá breis is 1.6 milliún duine ina gcónaí i mórcheantar Bhaile Átha Cliath agus deirtear go dtiocfaidh borradh agus fás ar an daonra sa todhchaí."),React.createElement(button_1.default,null,"Ticéid a cheannach"),React.createElement(button_1.default,{color:"secondary"},"Tuilleadh eolais")),React.createElement(panel_1.default,null,React.createElement("h1",null,"Reykjavík"," ",React.createElement(pill_1.default,{style:{fontSize:"1rem",float:"right"},color:"secondary"},"13.645kr")),React.createElement("p",null,"Reykjavík er höfuðborg Íslands, fjölmennasta sveitarfélag landsins og eina borgin. Þannig er Reykjavík efnahagsleg, menningarleg og stjórnmálaleg þungamiðja landsins. Rúmlega 126.000 manns búa í Reykjavík, þar af eru um 11% innflytjendur. Íbúar höfuðborgarsvæðisins eru yfir 200 þúsund í sjö sveitarfélögum. Opinbert heiti sveitarfélagsins Reykjavíkur er Reykjavíkurborg."),React.createElement(SwitchContainer,null,React.createElement(DemoStateWrapper,{render:(on,onClick)=>React.createElement(switch_1.default,{on:on,onClick:onClick}),initialValue:!0}),React.createElement("div",{style:{marginLeft:20}},"Sendu mér tölvupóst þegar þetta er í boði")))))}).call(this,__webpack_require__(4)(module))},618:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(45),Panel=__importDefault(__webpack_require__(9)).default.div`
  background-color: ${props=>props.theme.colors.white};
  border-radius: ${props=>props.theme.borderRadius};
  padding: 20px;
  box-shadow: 0 5px 20px ${props=>polished_1.transparentize(.9,props.theme.colors.darkGray)};
  margin-bottom: 20px;
`;Panel.displayName="Panel",exports.default=Panel},619:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(7),pill_1=__importDefault(__webpack_require__(275));react_1.storiesOf("Components|Atoms (Basic)/Pill",module).add("Default State",()=>React.createElement("div",null,React.createElement(pill_1.default,null,"Complete"),React.createElement(pill_1.default,{color:"success"},"Passed"),React.createElement(pill_1.default,{color:"error"},"Failed"),React.createElement(pill_1.default,{color:"warning"},"Pending"),React.createElement(pill_1.default,{color:"secondary"},"To Do")))}).call(this,__webpack_require__(4)(module))},620:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(7),addon_knobs_1=__webpack_require__(621),progressBar_1=__importDefault(__webpack_require__(628));react_1.storiesOf("Components|Atoms (Basic)/ProgressBar",module).addDecorator(addon_knobs_1.withKnobs).add("Default State",()=>{const progress=addon_knobs_1.number("Progress",100,{range:!0,min:0,max:100,step:1});return React.createElement("div",null,React.createElement(progressBar_1.default,{progress:0}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:progress/3}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:2*progress/3}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:progress}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:0,color:"secondary"}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:progress/3,color:"secondary"}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:2*progress/3,color:"secondary"}),React.createElement("br",null),React.createElement(progressBar_1.default,{progress:progress,color:"secondary"}),React.createElement("br",null))})}).call(this,__webpack_require__(4)(module))},628:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const ProgressBar=__importDefault(__webpack_require__(9)).default.div`
  position: relative;
  border-radius: ${props=>props.theme.borderRadius};
  height: 0.5em;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px ${props=>props.theme.colors.secondary};

  &::before {
    width: ${props=>String(props.progress)}%;
    transition: 0.25s width ease-in-out;
    display: block;
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${function getProgressBarColor(props){return props.color?props.theme.colors[props.color]:props.theme.colors.main}};
  }
`;ProgressBar.displayName="ProgressBar",exports.default=ProgressBar},629:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(7),addon_actions_1=__webpack_require__(44),select_1=__importDefault(__webpack_require__(630)),choices=[{value:"choice1",text:"Choice 1"},{value:"choice2",text:"Choice 2"},{value:"choice3",text:"Choice 3"}],DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[value,setValue]=React.useState(initialValue||choices[0].value);return render(value,newValue=>{setValue(newValue),addon_actions_1.action("select")(newValue)})};react_1.storiesOf("Components|Atoms (Basic)/Select",module).add("Default State",()=>React.createElement("div",null,React.createElement(DemoStateWrapper,{render:(value,onSelect)=>React.createElement(select_1.default,{onSelect:onSelect,choices:choices,value:value})}),React.createElement(DemoStateWrapper,{render:(value,onSelect)=>React.createElement(select_1.default,{onSelect:onSelect,choices:choices,value:value,color:"secondary"})}))).add("Disabled State",()=>React.createElement("div",null,React.createElement(select_1.default,{onSelect:addon_actions_1.action("select"),choices:choices,value:"choice1",disabled:!0}),React.createElement(select_1.default,{onSelect:addon_actions_1.action("select"),choices:choices,value:"choice1",color:"secondary",disabled:!0})))}).call(this,__webpack_require__(4)(module))},630:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(45),React=__importStar(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(9)),button_1=__importDefault(__webpack_require__(64)),DEFAULT_COLOR="main";const SelectMenuRow=styled_components_1.default.button`
  background-color: ${props=>props.theme.colors.white};
  padding: 0.75em 1em;
  margin: 5px 0;
  display: block;
  width: 100%;
  outline: 0;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: 0.25s background-color ease-in-out;
  font-size: 1em;
  -webkit-tap-highlight-color: ${props=>props.theme.colors.secondary};

  &:hover,
  &:focus {
    background-color: ${props=>polished_1.mix(.5,props.theme.colors.secondary,props.theme.colors.white)};
  }

  &:last-of-type {
    border-bottom: 0;
  }
`,SelectMenu=styled_components_1.default.div`
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: ${props=>props.theme.borderRadius};
  background-color: ${props=>props.theme.colors.white};
  min-width: 110%;
  max-width: 150%;
  margin: 5px 0 0 0;
  box-shadow: 0 2px 10px ${props=>polished_1.transparentize(.9,props.theme.colors.darkGray)};
`;class Select extends React.Component{constructor(props){super(props),this.state={menuIsVisible:!1},this.toggleMenu=(()=>{const{menuIsVisible:menuIsVisible}=this.state;this.setState({menuIsVisible:!menuIsVisible})}),this.closeMenu=(()=>{this.setState({menuIsVisible:!1}),this.buttonRef.current&&this.buttonRef.current.focus()}),this.handleGlobalClick=(e=>{this.containerRef.current&&e.target instanceof Node&&this.containerRef.current.contains(e.target)||this.closeMenu()}),this.handleSelect=(value=>{const{onSelect:onSelect}=this.props;onSelect(value),this.closeMenu()}),this.renderMenu=(()=>React.createElement(SelectMenu,null,this.props.choices.map(({value:value,text:text})=>React.createElement(SelectMenuRow,{key:value,onClick:()=>this.handleSelect(value)},text)))),this.containerRef=React.createRef(),this.buttonRef=React.createRef()}componentDidMount(){window.addEventListener("mousedown",this.handleGlobalClick,!1)}componentWillUnmount(){window.removeEventListener("mousedown",this.handleGlobalClick,!1)}render(){const{className:className,color:color,value:value,choices:choices,disabled:disabled}=this.props,{menuIsVisible:menuIsVisible}=this.state,buttonText=choices.reduce((acc,choice)=>acc||choice.value!==value?acc:choice.text,"");return React.createElement("span",{className:className,ref:this.containerRef},React.createElement(button_1.default,{color:color,onClick:this.toggleMenu,disabled:disabled,ref:this.buttonRef},buttonText),menuIsVisible&&this.renderMenu())}}const StyledSelect=styled_components_1.default(props=>React.createElement(Select,Object.assign({},props)))`
  margin-right: 5px;
  position: relative;
  display: inline-block;
  margin-right: 5px;

  ${button_1.default} {
    ${polished_1.ellipsis("200px")}
    position: relative;
    padding-right: 2.5em;

    &::after {
      content: '';
      width: 0.5em;
      height: 0.5em;
      display: inline-block;
      border-width: 0 1px 1px 0;
      border-style: solid;
      transform: translateY(-50%) rotate(45deg);
      margin-top: -2px;
      position: absolute;
      right: 1em;
      top: 50%;
      border-color: ${function getArrowColor(props){const bgColor=function getDropdownColor(props){return props.theme.colors[props.color||DEFAULT_COLOR]}(props);return polished_1.getLuminance(bgColor)>.5?props.theme.colors.darkGray:props.theme.colors.white}};
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;StyledSelect.displayName="Select",exports.default=StyledSelect},631:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(7),addon_actions_1=__webpack_require__(44),switch_1=__importDefault(__webpack_require__(276)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[on,setOn]=React.useState(initialValue||!1);return render(on,()=>{setOn(!on),addon_actions_1.action("click")(on?"off":"on")})};react_1.storiesOf("Components|Atoms (Basic)/Switch",module).add("Default State",()=>React.createElement(DemoStateWrapper,{render:(on,onClick)=>React.createElement(switch_1.default,{on:on,onClick:onClick})})).add("Disabled State",()=>React.createElement("div",null,React.createElement(switch_1.default,{disabled:!0,onClick:addon_actions_1.action("clicked")}),React.createElement("br",null),React.createElement(switch_1.default,{disabled:!0,on:!0,onClick:addon_actions_1.action("clicked")})))}).call(this,__webpack_require__(4)(module))},632:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),addon_actions_1=__webpack_require__(44),react_1=__webpack_require__(7),textInput_1=__importDefault(__webpack_require__(122)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[text,setText]=React.useState(initialValue||"");return render(text,({target:target})=>{setText(target.value),addon_actions_1.action("change")(target.value)})};react_1.storiesOf("Components|Atoms (Basic)/TextInput",module).add("Default State",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})).add("With Placeholder",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange,placeholder:"City"})})).add("With Text",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{onChange:onChange,value:text,placeholder:"City"}),initialValue:"San Francisco, CA"})).add("Error State",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{onChange:onChange,value:text,placeholder:"City",error:!0}),initialValue:"San Francisco, CA"})).add("Disabled",()=>React.createElement(textInput_1.default,{value:"San Francisco, CA",disabled:!0}))}).call(this,__webpack_require__(4)(module))},633:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),addon_actions_1=__webpack_require__(44),react_1=__webpack_require__(7),textInput_1=__importDefault(__webpack_require__(122)),textInputGroup_1=__importDefault(__webpack_require__(634)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[state,setState]=React.useState(initialValue);return render(state,update=>{setState(Object.assign({},state,update)),addon_actions_1.action("change")(Object.assign({},state,update))})};react_1.storiesOf("Components|Molecules (Composite)/TextInputGroup",module).add("Default State",()=>React.createElement(DemoStateWrapper,{render:(state,setState)=>React.createElement(textInputGroup_1.default,null,React.createElement(textInput_1.default,{value:state.county,onChange:({target:target})=>setState({county:target.value})}),React.createElement(textInput_1.default,{value:state.barony,onChange:({target:target})=>setState({barony:target.value})})),initialValue:{barony:"",county:"",parish:"",townland:""}})).add("With Placeholder",()=>React.createElement(DemoStateWrapper,{render:(state,setState)=>React.createElement(textInputGroup_1.default,null,React.createElement(textInput_1.default,{value:state.county,onChange:({target:target})=>setState({county:target.value}),placeholder:"Contae"}),React.createElement(textInput_1.default,{value:state.barony,onChange:({target:target})=>setState({barony:target.value}),placeholder:"Buí"}),React.createElement(textInput_1.default,{value:state.parish,onChange:({target:target})=>setState({parish:target.value}),placeholder:"Paróiste"}),React.createElement(textInput_1.default,{value:state.townland,onChange:({target:target})=>setState({townland:target.value}),placeholder:"Baile Fearainn"})),initialValue:{barony:"",county:"",parish:"",townland:""}})).add("With Text",()=>React.createElement(DemoStateWrapper,{render:(state,setState)=>React.createElement(textInputGroup_1.default,null,React.createElement(textInput_1.default,{value:state.county,onChange:({target:target})=>setState({county:target.value}),placeholder:"Contae"}),React.createElement(textInput_1.default,{value:state.barony,onChange:({target:target})=>setState({barony:target.value}),placeholder:"Buí"}),React.createElement(textInput_1.default,{value:state.parish,onChange:({target:target})=>setState({parish:target.value}),placeholder:"Paróiste"}),React.createElement(textInput_1.default,{value:state.townland,onChange:({target:target})=>setState({townland:target.value}),placeholder:"Baile Fearainn"})),initialValue:{barony:"Cionn tSáile",county:"Corcaigh",parish:"Cionn tSáile",townland:"Cnoc na Cathrach"}})).add("Error State",()=>React.createElement(DemoStateWrapper,{render:(state,setState)=>React.createElement(textInputGroup_1.default,null,React.createElement(textInput_1.default,{value:state.county,onChange:({target:target})=>setState({county:target.value}),placeholder:"Contae"}),React.createElement(textInput_1.default,{value:state.barony,onChange:({target:target})=>setState({barony:target.value}),placeholder:"Buí"}),React.createElement(textInput_1.default,{value:state.parish,onChange:({target:target})=>setState({parish:target.value}),placeholder:"Paróiste",error:!0}),React.createElement(textInput_1.default,{value:state.townland,onChange:({target:target})=>setState({townland:target.value}),placeholder:"Baile Fearainn",error:!0})),initialValue:{barony:"Beanntraí",county:"Loch Garman",parish:"",townland:""}})).add("Disabled State",()=>React.createElement(textInputGroup_1.default,null,React.createElement(textInput_1.default,{value:"Port Láirge",disabled:!0}),React.createElement(textInput_1.default,{value:"Decies-within-Drum",disabled:!0}),React.createElement(textInput_1.default,{value:"An tArd Mór",disabled:!0}),React.createElement(textInput_1.default,{value:"Abainn",disabled:!0})))}).call(this,__webpack_require__(4)(module))},634:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const styled_components_1=__importDefault(__webpack_require__(9)),textInput_1=__importDefault(__webpack_require__(122)),TextInputGroup=styled_components_1.default.div`
  ${textInput_1.default} {
    border-radius: 0;
    z-index: 0;
    position: relative;
    margin-top: -1px;

    &:first-of-type {
      border-top-left-radius: ${props=>props.theme.borderRadius};
      border-top-right-radius: ${props=>props.theme.borderRadius};
      margin-top: 0;
    }

    &:last-of-type {
      border-bottom-left-radius: ${props=>props.theme.borderRadius};
      border-bottom-right-radius: ${props=>props.theme.borderRadius};
    }

    &:hover {
      z-index: 1;
    }

    &:focus {
      z-index: 2;
    }
  }
`;TextInputGroup.displayName="TextInputGroup",exports.default=TextInputGroup},64:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(45),styled_components_1=__importDefault(__webpack_require__(9)),DEFAULT_COLOR="main";function getButtonColor(props){return props.theme.colors[props.color||DEFAULT_COLOR]}function getButtonTextColor(props){const bgColor=getButtonColor(props);return polished_1.getLuminance(bgColor)>.5?props.theme.colors.darkGray:props.theme.colors.white}const Button=styled_components_1.default.button`
  border-radius: ${props=>props.theme.borderRadius};
  background-color: ${getButtonColor};
  color: ${getButtonTextColor};
  border: 0;
  cursor: pointer;
  outline: 0;
  font-size: 1em;
  line-height: 1em;
  padding: 0.75em 1em;
  transition: 0.25s background-color ease-in-out;
  margin-right: 5px;
  user-select: none;
  -webkit-tap-highlight-color: ${props=>polished_1.transparentize(.5,getButtonColor(props))};

  &:hover {
    background-color: ${props=>polished_1.mix(.9,getButtonColor(props),getButtonTextColor(props))};
  }

  &:active {
    transition: 0.05s background-color ease-in-out;
    background-color: ${props=>polished_1.mix(.85,getButtonColor(props),getButtonTextColor(props))};
    color: ${props=>polished_1.mix(.1,getButtonColor(props),getButtonTextColor(props))};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props=>polished_1.transparentize(.75,getButtonColor(props))};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
    background-color: ${getButtonColor};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;Button.displayName="Button",exports.default=Button},91:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default={borderRadius:"5px",fontFamily:"'Roboto', sans-serif",fontImportUrl:"https://fonts.googleapis.com/css?family=Roboto:400,600,700",colors:{darkGray:"#424242",error:"#ef5350",main:"#304ffe",secondary:"#e0e0e0",success:"#4caf50",warning:"#ffb300",white:"#fff"}}}},[[285,1,2]]]);
//# sourceMappingURL=main.132b0aab855131434938.bundle.js.map