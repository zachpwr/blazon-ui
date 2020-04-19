(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(25);function getFocusedBorderColor(props){return props.error?props.theme.colors.error:props.theme.colors.main}const TextInput=__importDefault(__webpack_require__(10)).default.input`
  background-color: ${props=>props.theme.colors.white};
  border: 2px solid ${function getBorderColor(props){return props.error?props.theme.colors.error:polished_1.setLightness(.5,props.theme.colors.secondary)}};
  border-radius: ${props=>props.theme.borderRadius};
  transition: 0.25s border-color ease-in-out, 0.75s box-shadow ease-in-out;
  cursor: text;
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1em;
  padding: 0.75em 1em;
  outline: 0;
  appearance: none;
  height: 2.5em;

  &::placeholder {
    color: ${props=>polished_1.setLightness(.6,props.theme.colors.secondary)};
  }

  &:hover {
    border-color: ${getFocusedBorderColor};
  }

  &:focus {
    border-color: ${getFocusedBorderColor};
    box-shadow: 0 0 0 2px ${props=>polished_1.transparentize(.75,getFocusedBorderColor(props))};
    transition: 0.25s border-color ease-in-out, 0.25s box-shadow ease-in-out;

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
`;TextInput.displayName="TextInput",exports.default=TextInput},13:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const StoryColumn=__importDefault(__webpack_require__(10)).default.div`
  padding: 10% 20%;

  code {
    font-family: 'Roboto Mono', monospace;
    padding: 10px;
    background-color: ${({theme:theme})=>theme.colors.secondary};
    border-radius: ${({theme:theme})=>theme.borderRadius};
    display: block;
  }

  p code,
  h1 code,
  h2 code,
  h3 code,
  h4 code {
    display: inline-block;
    padding: 2px;
    margin: -2px 0;
  }

  h1 sup {
    font-size: 0.4em;
  }
`;exports.default=StoryColumn},162:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(25);function getBaseColor(props){return props.theme.colors[props.color||"main"]}const Pill=__importDefault(__webpack_require__(10)).default.div`
  background-color: ${function getPillBackground(props){return polished_1.setLightness(.9,getBaseColor(props))}};
  color: ${function getPillTextColor(props){return polished_1.setLightness(.2,getBaseColor(props))}};
  margin-right: 5px;
  font-size: 1em;
  padding: 0.25em 0.75em;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.0625em;
  vertical-align: middle;
  cursor: default;
  display: inline-block;
  transition: 0.25s color ease-in-out, 0.25s background-color ease-in-out;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  border: 2px solid ${function getPillBorderColor(props){return polished_1.setLightness(.8,getBaseColor(props))}};

  &:last-of-type {
    margin-right: 0;
  }
`;Pill.displayName="Pill",exports.default=Pill},245:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const addon_links_1=__webpack_require__(246),React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),button_1=__importDefault(__webpack_require__(52)),pill_1=__importDefault(__webpack_require__(162)),logo_png_1=__importDefault(__webpack_require__(249)),storyColumn_1=__importDefault(__webpack_require__(13));react_1.storiesOf("Navigation|Home",module).add("Welcome",()=>React.createElement(storyColumn_1.default,null,React.createElement("img",{src:logo_png_1.default,style:{width:32}}),React.createElement("h1",null,"Blazon UI"," ",React.createElement("sup",null,React.createElement(pill_1.default,{color:"warning"},"beta"))),React.createElement("p",null,"Blazon UI is a React component library."),React.createElement("p",null,React.createElement("a",{href:"https://www.npmjs.com/package/blazon-ui"},React.createElement("img",{src:"https://img.shields.io/npm/v/blazon-ui.svg?color=%23304FFE"}))," ",React.createElement("a",{href:"https://www.github.com/zachpwr/blazon-ui"},React.createElement("img",{src:"https://img.shields.io/badge/Github-zachpwr%2Fblazon--ui-3D5AFE.svg"}))," ",React.createElement("a",{href:"https://bundlephobia.com/result?p=blazon-ui"},React.createElement("img",{src:"https://img.shields.io/bundlephobia/minzip/blazon-ui.svg?color=%238C9EFF"}))),React.createElement("hr",null),React.createElement("p",null,React.createElement(button_1.default,{onClick:addon_links_1.linkTo("Navigation|Getting Started","Installing Blazon UI"),title:"Get Started with Blazon UI"},"💪🏻 Get Started →"),React.createElement(button_1.default,{color:"secondary",onClick:addon_links_1.linkTo("Navigation|Home","About Blazon UI"),title:"Learn More about Blazon UI"},"ℹ️ Learn More")))).add("About Blazon UI",()=>React.createElement(storyColumn_1.default,null,React.createElement("img",{src:logo_png_1.default,style:{width:32}}),React.createElement("h1",null,"About Blazon UI"),React.createElement("p",null,React.createElement("b",null,"Blazon UI")," is an open source React component library written in Typescript. It provides a comprehensive set of styled components for creating colorful, responsive, a11y-friendly user interfaces."),React.createElement("p",null,"Blazon UI was created in 2019 by ",React.createElement("a",{href:"https://www.zachpwr.com"},"Zach Power"),", a software engineer @ Optimizely, Inc. in San Francisco, CA."),React.createElement("p",null,React.createElement(button_1.default,{onClick:addon_links_1.linkTo("Navigation|Getting Started","Installing Blazon UI"),title:"Install Blazon UI to your app"},"📲 Install Blazon UI →"))))}).call(this,__webpack_require__(4)(module))},249:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo.fc6e18dc.png"},250:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(25),react_1=__importDefault(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(10));function getSwitchColor(props){return polished_1.setLightness(.5,props.on?props.theme.colors.main:props.theme.colors.secondary)}const SwitchLever=styled_components_1.default(props=>react_1.default.createElement("div",Object.assign({},props),react_1.default.createElement("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})))`
  height: 100%;
  background: white;
  position: absolute;
  top: 0;
  left: ${props=>props.on?100:0}%;
  transform: translateX(${props=>props.on?-100:0}%);
  border-radius: 100px;
  transition: 0.25s left ease-in-out, 0.25s transform ease-in-out;

  img {
    height: 100%;
  }

  &::before {
    content: '${props=>props.on?"On":"Off"}';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 0.75em;
    display: block;
    font-size: 0.75em;
    text-transform: uppercase;
    font-weight: 500;
    color: ${getSwitchColor};
    font-family: 'Roboto Mono', monospace;
  }
`,Switch=styled_components_1.default(props=>react_1.default.createElement("button",Object.assign({},props),react_1.default.createElement(SwitchLever,{on:props.on})))`
  height: 0.5em;
  width: 2.5em;
  background-color: ${getSwitchColor};
  border: 2px solid ${getSwitchColor};
  outline: 0;
  border-radius: 100px;
  padding: 0.75em 1em;
  font-size: 1em;
  line-height: 1em;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.25s background-color ease-in-out, 0.25s border-color ease-in-out;
  display: inline-block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    box-shadow: 0 0 0 2px ${props=>polished_1.transparentize(.75,getSwitchColor(props))};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background-color: ${getSwitchColor};
  }
`;Switch.displayName="Switch",exports.default=Switch},251:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),styled_components_1=__webpack_require__(10),theme_1=__importDefault(__webpack_require__(81)),ThemeProvider=props=>React.createElement(styled_components_1.ThemeProvider,{theme:props.theme||theme_1.default},props.children);ThemeProvider.displayName="ThemeProvider",exports.default=ThemeProvider;try{themeProvider.displayName="themeProvider",themeProvider.__docgenInfo={description:"",displayName:"themeProvider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"ITheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/themeProvider/index.tsx#themeProvider"]={docgenInfo:themeProvider.__docgenInfo,name:"themeProvider",path:"src/themeProvider/index.tsx#themeProvider"})}catch(__react_docgen_typescript_loader_error){}},253:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const GlobalStyle=__webpack_require__(10).createGlobalStyle`
  ${function getFontImport(props){return props.theme.fontImportUrl?"string"==typeof props.theme.fontImportUrl?`@import url('${props.theme.fontImportUrl}');`:Array.isArray(props.theme.fontImportUrl)?props.theme.fontImportUrl.map(url=>`@import url('${url}');`).join(""):void 0:""}}

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
`;GlobalStyle.displayName="GlobalStyle",exports.default=GlobalStyle;try{GlobalStyleComponent.displayName="GlobalStyleComponent",GlobalStyleComponent.__docgenInfo={description:"",displayName:"GlobalStyleComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/globalStyle/index.tsx#GlobalStyleComponent"]={docgenInfo:GlobalStyleComponent.__docgenInfo,name:"GlobalStyleComponent",path:"src/globalStyle/index.tsx#GlobalStyleComponent"})}catch(__react_docgen_typescript_loader_error){}},254:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(255),_src_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(81),_src_theme__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_src_theme__WEBPACK_IMPORTED_MODULE_1__),_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(257),_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_2__);__webpack_exports__.a=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.create)({base:"light",brandTitle:"Blazon UI",brandUrl:"https://www.npmjs.com/package/blazon-ui",brandImage:_assets_storybookLogo_png__WEBPACK_IMPORTED_MODULE_2___default.a,fontBase:_src_theme__WEBPACK_IMPORTED_MODULE_1___default.a.fontFamily,colorPrimary:_src_theme__WEBPACK_IMPORTED_MODULE_1___default.a.colors.darkGray,colorSecondary:_src_theme__WEBPACK_IMPORTED_MODULE_1___default.a.colors.main})},257:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/storybookLogo.12f7b20a.png"},258:function(module,exports,__webpack_require__){__webpack_require__(259),__webpack_require__(344),module.exports=__webpack_require__(345)},345:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(57),__webpack_require__(75),__webpack_require__(56),__webpack_require__(90);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),_src_themeProvider__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(251),_src_themeProvider__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_src_themeProvider__WEBPACK_IMPORTED_MODULE_6__),_src_globalStyle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(253),_src_globalStyle__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_src_globalStyle__WEBPACK_IMPORTED_MODULE_7__),_theme__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(254),req=(__webpack_require__(245),__webpack_require__(507));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{theme:_theme__WEBPACK_IMPORTED_MODULE_8__.a,showPanel:!1,sidebarAnimations:!0,isToolshown:!1}});var _ref=react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_globalStyle__WEBPACK_IMPORTED_MODULE_7___default.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(req),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(function(story){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_themeProvider__WEBPACK_IMPORTED_MODULE_6___default.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,_ref,story()))})},module)}.call(this,__webpack_require__(346)(module))},507:function(module,exports,__webpack_require__){var map={"./alert.stories.tsx":508,"./button.stories.tsx":510,"./buttonGroup.stories.tsx":511,"./checkbox.stories.tsx":513,"./formSection.stories.tsx":515,"./gettingStarted.stories.tsx":517,"./grid.stories.tsx":518,"./home.stories.tsx":245,"./panel.stories.tsx":519,"./pill.stories.tsx":521,"./progressBar.stories.tsx":522,"./select.stories.tsx":524,"./switch.stories.tsx":526,"./textInput.stories.tsx":527,"./textInputGroup.stories.tsx":528};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=507},508:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),alert_1=__importDefault(__webpack_require__(509)),storyColumn_1=__importDefault(__webpack_require__(13));react_1.storiesOf("Components|Atoms (Basic)/Alert",module).add("Default State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Alert />")," Component"),React.createElement("h2",null,"Default State"),React.createElement("h3",null,React.createElement("code",null,'color="main"')," (default)"),React.createElement(alert_1.default,null,React.createElement("b",null,"Fáilte!")," Go raibh maith agat as clárú."),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="success"')),React.createElement(alert_1.default,{color:"success"},React.createElement("b",null,"Samþykkt!")," Umsóknin þín var staðfest og samþykkt."),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="warning"')),React.createElement(alert_1.default,{color:"warning"},React.createElement("b",null,"Rabhadh!")," An do chuir thu eadar-theangachadh an teacsa seo?"),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="error"')),React.createElement(alert_1.default,{color:"error"},React.createElement("b",null,"Misslyckad!")," Programmet kunde inte kompilera på grund av syntaxfel."),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="secondary"')),React.createElement(alert_1.default,{color:"secondary"},React.createElement("b",null,"Интересный факт:")," C++ компилируемый, статически типизированный язык программирования общего назначения.")))}).call(this,__webpack_require__(4)(module))},509:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(25);function getBaseColor(props){return props.theme.colors[props.color||"main"]}const Alert=__importDefault(__webpack_require__(10)).default.div`
  background-color: ${function getAlertBackground(props){return polished_1.setLightness(.9,getBaseColor(props))}};
  border: 2px solid ${function getAlertBorderColor(props){return polished_1.setLightness(.8,getBaseColor(props))}};
  border-radius: ${props=>props.theme.borderRadius};
  padding: 10px;
  margin-bottom: 10px;
  color: ${function getAlertTextColor(props){return polished_1.setLightness(.2,getBaseColor(props))}};

  &:last-of-type {
    margin-bottom: 0;
  }
`;Alert.displayName="Alert",exports.default=Alert},510:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),button_1=__importDefault(__webpack_require__(52)),storyColumn_1=__importDefault(__webpack_require__(13));react_1.storiesOf("Components|Atoms (Basic)/Button",module).add("With Plain Text",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Button />")," Component"),React.createElement("h2",null,"With Plain Text"),React.createElement("h3",null,React.createElement("code",null,'color="main"')," (default)"),React.createElement(button_1.default,{onClick:()=>{console.log("clicked")}},"Hello"),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="success"')),React.createElement(button_1.default,{onClick:()=>{console.log("clicked")},color:"success"},"Hello"),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="error"')),React.createElement(button_1.default,{onClick:()=>{console.log("clicked")},color:"error"},"Hello"),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="warning"')),React.createElement(button_1.default,{onClick:()=>{console.log("clicked")},color:"warning"},"Hello"),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="secondary"')),React.createElement(button_1.default,{onClick:()=>{console.log("clicked")},color:"secondary"},"Hello"))).add("With Emojis",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Button />")," Component"),React.createElement("h2",null,"With Emojis"),React.createElement(button_1.default,{onClick:()=>{console.log("clicked")}},React.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯")))).add("Disabled State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Button />")," Component"),React.createElement("h2",null,"Disabled State"),React.createElement("h3",null,React.createElement("code",null,"disabled={true}")),React.createElement(button_1.default,{onClick:()=>{console.log("clicked")},disabled:!0},"Disabled"),React.createElement(button_1.default,{onClick:()=>{console.log("clicked")},color:"secondary",disabled:!0},"Disabled")))}).call(this,__webpack_require__(4)(module))},511:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),button_1=__importDefault(__webpack_require__(52)),buttonGroup_1=__importDefault(__webpack_require__(512)),storyColumn_1=__importDefault(__webpack_require__(13));react_1.storiesOf("Components|Molecules (Composite)/ButtonGroup",module).add("Default State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<ButtonGroup />")," Component"),React.createElement("h2",null,"Default State"),React.createElement(buttonGroup_1.default,null,React.createElement(button_1.default,{onClick:()=>{console.log("clicked")},color:"secondary"},"Hello"),React.createElement(button_1.default,{onClick:()=>{console.log("clicked")},color:"secondary"},"Hello"),React.createElement(button_1.default,{onClick:()=>{console.log("clicked")},color:"secondary"},"Hello"))))}).call(this,__webpack_require__(4)(module))},512:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const styled_components_1=__importDefault(__webpack_require__(10)),button_1=__importDefault(__webpack_require__(52)),ButtonGroup=styled_components_1.default.span`
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
`;ButtonGroup.displayName="ButtonGroup",exports.default=ButtonGroup},513:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),checkbox_1=__importDefault(__webpack_require__(514)),storyColumn_1=__importDefault(__webpack_require__(13)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[checked,setChecked]=React.useState(initialValue||!1);return render(checked,()=>{setChecked(!checked)})};react_1.storiesOf("Components|Atoms (Basic)/Checkbox",module).add("Default State",()=>React.createElement(DemoStateWrapper,{render:(checked,onClick)=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Checkbox />")," Component"),React.createElement("h2",null,"Default State"),React.createElement("h3",null,React.createElement("code",null,"checked=",`{${checked}}`)),React.createElement(checkbox_1.default,{checked:checked,onClick:onClick}))})).add("Disabled State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Checkbox />")," Component"),React.createElement("h2",null,"Disabled State"),React.createElement("h3",null,React.createElement("code",null,"disabled=","{true}")," ",React.createElement("code",null,"checked=","{false}")),React.createElement(checkbox_1.default,{disabled:!0,onClick:()=>{console.log("clicked")}}),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,"disabled=","{true}")," ",React.createElement("code",null,"checked=","{true}")),React.createElement(checkbox_1.default,{disabled:!0,checked:!0,onClick:()=>{console.log("clicked")}})))}).call(this,__webpack_require__(4)(module))},514:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(25);function getBorderColor(props){return polished_1.setLightness(.5,props.checked?props.theme.colors.main:props.theme.colors.secondary)}const Checkbox=__importDefault(__webpack_require__(10)).default.button`
  border-radius: 1em;
  background-color: ${function getBackgroundColor(props){return props.checked?props.theme.colors.main:props.theme.colors.white}};
  border: 2px solid ${getBorderColor};
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

    &::before {
      opacity: ${props=>props.checked?1:0};
    }
  }

  &::before {
    content: '';
    width: 25%;
    height: 50%;
    border-width: 0 2px 2px 0;
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
`;Checkbox.displayName="Checkbox",exports.default=Checkbox},515:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),formSection_1=__importDefault(__webpack_require__(516)),textInput_1=__importDefault(__webpack_require__(107)),storyColumn_1=__importDefault(__webpack_require__(13)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[text,setText]=React.useState(initialValue||"");return render(text,({target:target})=>{setText(target.value)})};react_1.storiesOf("Components|Molecules (Composite)/FormSection",module).add("Default State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<FormSection />")," Component"),React.createElement("h2",null,"Default State"),React.createElement(formSection_1.default,{title:"Name"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})))).add("Required State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<FormSection />")," Component"),React.createElement("h2",null,"Required State"),React.createElement("h3",null,React.createElement("code",null,"required={true}")),React.createElement(formSection_1.default,{title:"Name",required:!0},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange})})))).add("Error State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<FormSection />")," Component"),React.createElement("h2",null,"Error State"),React.createElement("h3",null,React.createElement("code",null,'error="Please enter your name"')," ",React.createElement("code",null,"required={true}")),React.createElement(formSection_1.default,{title:"Name",required:!0,error:"Please enter your name"},React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(textInput_1.default,{value:text,onChange:onChange,error:!0})}))))}).call(this,__webpack_require__(4)(module))},516:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(10)),SectionTitle=styled_components_1.default.div`
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
`;FormSection.displayName="FormSection",exports.default=FormSection},517:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const addon_links_1=__webpack_require__(246),React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),logo_png_1=__importDefault(__webpack_require__(249)),button_1=__importDefault(__webpack_require__(52)),storyColumn_1=__importDefault(__webpack_require__(13));react_1.storiesOf("Navigation|Getting Started",module).add("Installing Blazon UI",()=>React.createElement(storyColumn_1.default,null,React.createElement("img",{src:logo_png_1.default,style:{width:32}}),React.createElement("h1",null,"Installing Blazon UI"),React.createElement("p",null,"If your app uses React, it's super easy to integrate with ",React.createElement("b",null,"Blazon UI"),". Simply add ",React.createElement("code",null,"blazon-ui")," as a dependency in your ",React.createElement("i",null,"package.json")," file ",React.createElement("a",{href:"https://www.npmjs.com/package/blazon-ui"},"via NPM"),"."),React.createElement("code",null,"yarn add blazon-ui"),React.createElement("p",null,"Then, you should be good to start instantiating ",React.createElement("b",null,"Blazon UI")," components in your app."),React.createElement("p",null,React.createElement(button_1.default,{onClick:addon_links_1.linkTo("Navigation|Getting Started","Using Blazon UI"),title:"Start Using Blazon UI"},"👉🏻 Start Using Blazon UI →")))).add("Using Blazon UI",()=>React.createElement(storyColumn_1.default,null,React.createElement("img",{src:logo_png_1.default,style:{width:32}}),React.createElement("h1",null,"Using Blazon UI"),React.createElement("p",null,"Once you've installed ",React.createElement("b",null,"Blazon UI")," to your React app, you'll need to install the ",React.createElement("i",null,"Theme Provider")," and"," ",React.createElement("i",null,"Global Style"),". Please wrap any part of your component hierarchy containing Blazon UI components with a"," ",React.createElement("code",null,"<ThemeProvider />"),". Additionally, include the ",React.createElement("code",null,"<GlobalStyle />")," at some point in your component hierarchy to apply global styles to the page."),React.createElement("p",null,"Below is the recommended setup for using ",React.createElement("b",null,"Blazon UI"),":"),React.createElement("code",null,"import { ThemeProvider, GlobalStyle } from 'blazon-ui';",React.createElement("br",null),"<ThemeProvider>",React.createElement("br",null),"  <GlobalStyle />",React.createElement("br",null),"  {/* Root of your React app */}",React.createElement("br",null),"</ThemeProvider>"),React.createElement("p",null,"Now that you've installed the global ",React.createElement("b",null,"Blazon UI"),' theme utilities, you can begin using the components listed in the "Components" section of these docs within your React app.'),React.createElement("p",null,React.createElement(button_1.default,{onClick:addon_links_1.linkTo("Components|Atoms (Basic)/Alert","Default State"),title:"See Blazon UI Components Now"},"👀 See Components Now →"))))}).call(this,__webpack_require__(4)(module))},518:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),storyColumn_1=__importDefault(__webpack_require__(13));react_1.storiesOf("Components|Atoms (Basic)/Grid",module).add("Default State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"Grid")," Components"),React.createElement("h2",null,React.createElement("code",null,"<Grid.Container />")," Component"),React.createElement("p",null,"The ",React.createElement("code",null,"<Grid.Container />")," component provides a responsive shell to a grid-based layout. Grid row components should be placed within this container component. If the prop ",React.createElement("code",null,"fluid={true}"),"is used with this component, the container will span the width of its parent. If the prop"," ",React.createElement("code",null,"fluid={false}")," is used, the container will have a responsive width and will be centered within its parent."),React.createElement("h2",null,React.createElement("code",null,"<Grid.Row />")," Component"),React.createElement("p",null,"The ",React.createElement("code",null,"<Grid.Row />")," component is a vertically-padded flexbox for housing grid column components. Grid column components should be placed within this row component. If the prop"," ",React.createElement("code",null,"alignmentMode={start|end|center|baseline|stretch}"),"is used with this component, the row will vertically align child columns. If the prop"," ",React.createElement("code",null,"noGutter={false}")," is used, the row will not use vertical padding."),React.createElement("h2",null,React.createElement("code",null,"<Grid.Column />")," Component"),React.createElement("p",null,"The ",React.createElement("code",null,"<Grid.Column />")," component is a horizontally-padded span for other UI components. If the prop"," ",React.createElement("code",null,"colSpan={number|number[0-4]}"),"is used with this component, the flex basis for the column will be set. If an array of 5 numbers is provided, the column will use each item in the column as the column span width at each of the 5 responsive breakpoints in ascending order of size. If the prop ",React.createElement("code",null,"noGutter={false}")," is used, the column will not use horizontal padding. If the prop ",React.createElement("code",null,'spanMode="fitSpace"')," is used, the column will only span the width of its contents. If the prop ",React.createElement("code",null,"noWrap={true}")," is used, the contents of the column will not wrap. The prop"," ",React.createElement("code",null,"minWidth={string}")," can be used to set a minimum width for a column with any CSS unit.")))}).call(this,__webpack_require__(4)(module))},519:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(10)),react_1=__webpack_require__(5),button_1=__importDefault(__webpack_require__(52)),panel_1=__importDefault(__webpack_require__(520)),pill_1=__importDefault(__webpack_require__(162)),switch_1=__importDefault(__webpack_require__(250)),storyColumn_1=__importDefault(__webpack_require__(13)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[checked,setChecked]=React.useState(initialValue||!1);return render(checked,()=>{setChecked(!checked)})},SwitchContainer=styled_components_1.default.div`
  display: flex;
  align-items: center;

  ${switch_1.default} {
    flex-grow: 0;
    flex-shrink: 0;
  }
`;react_1.storiesOf("Components|Atoms (Basic)/Panel",module).add("Empty State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Panel />")," Component"),React.createElement("h2",null,"Empty State"),React.createElement(panel_1.default,null))).add("With Text",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Panel />")," Component"),React.createElement("h2",null,"With Text"),React.createElement(panel_1.default,null,React.createElement("h1",null,"Baile Átha Cliath"," ",React.createElement(pill_1.default,{style:{fontSize:"1rem",float:"right"},color:"secondary"},"99€")),React.createElement("p",null,"Is é Baile Átha Cliath príomhchathair na hÉireann agus é ar an gcathair is mó sa tír freisin. Tá sé suite in oirthear na tíre, cois Life agus ar imeall Mhuir Éireann. Tá breis is 1.6 milliún duine ina gcónaí i mórcheantar Bhaile Átha Cliath agus deirtear go dtiocfaidh borradh agus fás ar an daonra sa todhchaí."),React.createElement(button_1.default,null,"Ticéid a cheannach"),React.createElement(button_1.default,{color:"secondary"},"Tuilleadh eolais")),React.createElement(panel_1.default,null,React.createElement("h1",null,"Reykjavík"," ",React.createElement(pill_1.default,{style:{fontSize:"1rem",float:"right"},color:"secondary"},"13.645kr")),React.createElement("p",null,"Reykjavík er höfuðborg Íslands, fjölmennasta sveitarfélag landsins og eina borgin. Þannig er Reykjavík efnahagsleg, menningarleg og stjórnmálaleg þungamiðja landsins. Rúmlega 126.000 manns búa í Reykjavík, þar af eru um 11% innflytjendur. Íbúar höfuðborgarsvæðisins eru yfir 200 þúsund í sjö sveitarfélögum. Opinbert heiti sveitarfélagsins Reykjavíkur er Reykjavíkurborg."),React.createElement(SwitchContainer,null,React.createElement(DemoStateWrapper,{render:(on,onClick)=>React.createElement(switch_1.default,{on:on,onClick:onClick}),initialValue:!0}),React.createElement("div",{style:{marginLeft:20}},"Sendu mér tölvupóst þegar þetta er í boði")))))}).call(this,__webpack_require__(4)(module))},52:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(25),styled_components_1=__importDefault(__webpack_require__(10)),DEFAULT_COLOR="main";function getButtonColor(props){return props.theme.colors[props.color||DEFAULT_COLOR]}function getButtonTextColor(props){const bgColor=getButtonColor(props);return polished_1.getLuminance(bgColor)>.5?props.theme.colors.darkGray:props.theme.colors.white}const Button=styled_components_1.default.button`
  border-radius: ${props=>props.theme.borderRadius};
  background-color: ${getButtonColor};
  color: ${getButtonTextColor};
  border: 0;
  cursor: pointer;
  outline: 0;
  font-size: 1em;
  font-weight: 600;
  line-height: 1em;
  padding: 0.75em 1em;
  transition: 0.25s background-color ease-in-out;
  margin-right: 5px;
  user-select: none;
  white-space: nowrap;
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
`;Button.displayName="Button",exports.default=Button},520:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(25),Panel=__importDefault(__webpack_require__(10)).default.div`
  background-color: ${props=>props.theme.colors.white};
  border-radius: ${props=>props.theme.borderRadius};
  padding: 20px;
  box-shadow: 0 2px 8px ${props=>polished_1.transparentize(.8,props.theme.colors.darkGray)};
  margin-bottom: 20px;
`;Panel.displayName="Panel",exports.default=Panel},521:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),pill_1=__importDefault(__webpack_require__(162)),storyColumn_1=__importDefault(__webpack_require__(13));react_1.storiesOf("Components|Atoms (Basic)/Pill",module).add("Default State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Pill />")," Component"),React.createElement("h2",null,"Default State"),React.createElement("h3",null,React.createElement("code",null,'color="main"')," (default)"),React.createElement(pill_1.default,null,"Complete"),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="success"')),React.createElement(pill_1.default,{color:"success"},"Passed"),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="error"')),React.createElement(pill_1.default,{color:"error"},"Failed"),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="warning"')),React.createElement(pill_1.default,{color:"warning"},"Pending"),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,'color="secondary"')),React.createElement(pill_1.default,{color:"secondary"},"To Do")))}).call(this,__webpack_require__(4)(module))},522:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),progressBar_1=__importDefault(__webpack_require__(523)),storyColumn_1=__importDefault(__webpack_require__(13));react_1.storiesOf("Components|Atoms (Basic)/ProgressBar",module).add("Default State",()=>{return React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<ProgressBar />")," Component"),React.createElement("h2",null,"Default State"),React.createElement("h3",null,React.createElement("code",null,"progress={20}")," ",React.createElement("code",null,'color="main"')),React.createElement(progressBar_1.default,{progress:20,color:"main"}),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,"progress={40}")," ",React.createElement("code",null,'color="success"')),React.createElement(progressBar_1.default,{progress:40,color:"success"}),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,"progress={60}")," ",React.createElement("code",null,'color="error"')),React.createElement(progressBar_1.default,{progress:60,color:"error"}),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,"progress={80}")," ",React.createElement("code",null,'color="warning"')),React.createElement(progressBar_1.default,{progress:80,color:"warning"}),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,"progress={100}")," ",React.createElement("code",null,'color="secondary"')),React.createElement(progressBar_1.default,{progress:100,color:"secondary"}),React.createElement("br",null))})}).call(this,__webpack_require__(4)(module))},523:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(25);function getProgressBarColor(props){return polished_1.setLightness(.6,function getBaseColor(props){return props.color?props.theme.colors[props.color]:props.theme.colors.main}(props))}const ProgressBar=__importDefault(__webpack_require__(10)).default.div`
  position: relative;
  border-radius: ${props=>props.theme.borderRadius};
  height: 0.5em;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px ${getProgressBarColor}, 0 0 0 1px ${getProgressBarColor};

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
    background-color: ${getProgressBarColor};
  }
`;ProgressBar.displayName="ProgressBar",exports.default=ProgressBar},524:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),select_1=__importDefault(__webpack_require__(525)),storyColumn_1=__importDefault(__webpack_require__(13)),choices=[{value:"choice1",text:"Choice 1"},{value:"choice2",text:"Choice 2"},{value:"choice3",text:"Choice 3"}],DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[value,setValue]=React.useState(initialValue||choices[0].value);return render(value,newValue=>{setValue(newValue)})};react_1.storiesOf("Components|Atoms (Basic)/Select",module).add("Default State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Select />")," Component"),React.createElement("h2",null,"Default State"),React.createElement("h3",null,React.createElement("code",null,"onSelect={(value) => {}}")," ",React.createElement("code",null,"choices={[ { value: '', text: '' } ]}")," ",React.createElement("code",null,"value={''}")),React.createElement(DemoStateWrapper,{render:(value,onSelect)=>React.createElement(select_1.default,{onSelect:onSelect,choices:choices,value:value})}),React.createElement(DemoStateWrapper,{render:(value,onSelect)=>React.createElement(select_1.default,{onSelect:onSelect,choices:choices,value:value,color:"secondary"})}))).add("Disabled State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Select />")," Component"),React.createElement("h2",null,"Disabled State"),React.createElement("h3",null,React.createElement("code",null,"disabled={true}")),React.createElement(select_1.default,{onSelect:()=>{console.log("select")},choices:choices,value:"choice1",disabled:!0}),React.createElement(select_1.default,{onSelect:()=>{console.log("select")},choices:choices,value:"choice1",color:"secondary",disabled:!0})))}).call(this,__webpack_require__(4)(module))},525:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const polished_1=__webpack_require__(25),React=__importStar(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(10)),button_1=__importDefault(__webpack_require__(52)),DEFAULT_COLOR="main";const SelectMenuRow=styled_components_1.default.button`
  background-color: transparent;
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
  box-shadow: 0 2px 8px ${props=>polished_1.transparentize(.8,props.theme.colors.darkGray)};
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
      border-width: 0 2px 2px 0;
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
`;StyledSelect.displayName="Select",exports.default=StyledSelect},526:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),switch_1=__importDefault(__webpack_require__(250)),storyColumn_1=__importDefault(__webpack_require__(13)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[on,setOn]=React.useState(initialValue||!1);return render(on,()=>{setOn(!on)})};react_1.storiesOf("Components|Atoms (Basic)/Switch",module).add("Default State",()=>React.createElement(DemoStateWrapper,{render:(on,onClick)=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Switch />")," Component"),React.createElement("h2",null,"Default State"),React.createElement("h3",null,React.createElement("code",null,`on={${on}}`)," ",React.createElement("code",null,"onClick={() => {}}")),React.createElement(switch_1.default,{on:on,onClick:onClick}))})).add("Disabled State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<Switch />")," Component"),React.createElement("h2",null,"Default State"),React.createElement("h3",null,React.createElement("code",null,"disabled={true}")," ",React.createElement("code",null,"on={false}")),React.createElement(switch_1.default,{disabled:!0,onClick:()=>{console.log("clicked")}}),React.createElement("br",null),React.createElement("h3",null,React.createElement("code",null,"disabled={true}")," ",React.createElement("code",null,"on={true}")),React.createElement(switch_1.default,{disabled:!0,on:!0,onClick:()=>{console.log("clicked")}})))}).call(this,__webpack_require__(4)(module))},527:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),textInput_1=__importDefault(__webpack_require__(107)),storyColumn_1=__importDefault(__webpack_require__(13)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[text,setText]=React.useState(initialValue||"");return render(text,({target:target})=>{setText(target.value)})};react_1.storiesOf("Components|Atoms (Basic)/TextInput",module).add("Default State",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<TextInput />")," Component"),React.createElement("h2",null,"Default State"),React.createElement(textInput_1.default,{value:text,onChange:onChange}))})).add("With Placeholder",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<TextInput />")," Component"),React.createElement("h2",null,"With Placeholder"),React.createElement("h3",null,React.createElement("code",null,'placeholder="City"')),React.createElement(textInput_1.default,{value:text,onChange:onChange,placeholder:"City"}))})).add("With Text",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<TextInput />")," Component"),React.createElement("h2",null,"With Text"),React.createElement("h3",null,React.createElement("code",null,"value={''}")),React.createElement(textInput_1.default,{onChange:onChange,value:text,placeholder:"City"})),initialValue:"San Francisco, CA"})).add("Error State",()=>React.createElement(DemoStateWrapper,{render:(text,onChange)=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<TextInput />")," Component"),React.createElement("h2",null,"Error State"),React.createElement("h3",null,React.createElement("code",null,"error={true}")),React.createElement(textInput_1.default,{onChange:onChange,value:text,placeholder:"City",error:!0})),initialValue:"San Francisco, CA"})).add("Disabled State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<TextInput />")," Component"),React.createElement("h2",null,"Disabled State"),React.createElement("h3",null,React.createElement("code",null,"disabled={true}")),React.createElement(textInput_1.default,{value:"San Francisco, CA",disabled:!0})))}).call(this,__webpack_require__(4)(module))},528:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(5),textInput_1=__importDefault(__webpack_require__(107)),textInputGroup_1=__importDefault(__webpack_require__(529)),storyColumn_1=__importDefault(__webpack_require__(13)),DemoStateWrapper=({render:render,initialValue:initialValue})=>{const[state,setState]=React.useState(initialValue);return render(state,update=>{setState(Object.assign({},state,update))})};react_1.storiesOf("Components|Molecules (Composite)/TextInputGroup",module).add("Default State",()=>React.createElement(DemoStateWrapper,{render:(state,setState)=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<TextInputGroup />")," Component"),React.createElement("h2",null,"Default State"),React.createElement(textInputGroup_1.default,null,React.createElement(textInput_1.default,{value:state.county,onChange:({target:target})=>setState({county:target.value})}),React.createElement(textInput_1.default,{value:state.barony,onChange:({target:target})=>setState({barony:target.value})}))),initialValue:{barony:"",county:"",parish:"",townland:""}})).add("With Placeholder",()=>React.createElement(DemoStateWrapper,{render:(state,setState)=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<TextInputGroup />")," Component"),React.createElement("h2",null,"With Placeholder"),React.createElement(textInputGroup_1.default,null,React.createElement(textInput_1.default,{value:state.county,onChange:({target:target})=>setState({county:target.value}),placeholder:"Contae"}),React.createElement(textInput_1.default,{value:state.barony,onChange:({target:target})=>setState({barony:target.value}),placeholder:"Buí"}),React.createElement(textInput_1.default,{value:state.parish,onChange:({target:target})=>setState({parish:target.value}),placeholder:"Paróiste"}),React.createElement(textInput_1.default,{value:state.townland,onChange:({target:target})=>setState({townland:target.value}),placeholder:"Baile Fearainn"}))),initialValue:{barony:"",county:"",parish:"",townland:""}})).add("With Text",()=>React.createElement(DemoStateWrapper,{render:(state,setState)=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<TextInputGroup />")," Component"),React.createElement("h2",null,"With Text"),React.createElement(textInputGroup_1.default,null,React.createElement(textInput_1.default,{value:state.county,onChange:({target:target})=>setState({county:target.value}),placeholder:"Contae"}),React.createElement(textInput_1.default,{value:state.barony,onChange:({target:target})=>setState({barony:target.value}),placeholder:"Buí"}),React.createElement(textInput_1.default,{value:state.parish,onChange:({target:target})=>setState({parish:target.value}),placeholder:"Paróiste"}),React.createElement(textInput_1.default,{value:state.townland,onChange:({target:target})=>setState({townland:target.value}),placeholder:"Baile Fearainn"}))),initialValue:{barony:"Cionn tSáile",county:"Corcaigh",parish:"Cionn tSáile",townland:"Cnoc na Cathrach"}})).add("Error State",()=>React.createElement(DemoStateWrapper,{render:(state,setState)=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<TextInputGroup />")," Component"),React.createElement("h2",null,"Error State"),React.createElement(textInputGroup_1.default,null,React.createElement(textInput_1.default,{value:state.county,onChange:({target:target})=>setState({county:target.value}),placeholder:"Contae"}),React.createElement(textInput_1.default,{value:state.barony,onChange:({target:target})=>setState({barony:target.value}),placeholder:"Buí"}),React.createElement(textInput_1.default,{value:state.parish,onChange:({target:target})=>setState({parish:target.value}),placeholder:"Paróiste",error:!0}),React.createElement(textInput_1.default,{value:state.townland,onChange:({target:target})=>setState({townland:target.value}),placeholder:"Baile Fearainn",error:!0}))),initialValue:{barony:"Beanntraí",county:"Loch Garman",parish:"",townland:""}})).add("Disabled State",()=>React.createElement(storyColumn_1.default,null,React.createElement("h1",null,React.createElement("code",null,"<TextInputGroup />")," Component"),React.createElement("h2",null,"Disabled State"),React.createElement(textInputGroup_1.default,null,React.createElement(textInput_1.default,{value:"Port Láirge",disabled:!0}),React.createElement(textInput_1.default,{value:"Decies-within-Drum",disabled:!0}),React.createElement(textInput_1.default,{value:"An tArd Mór",disabled:!0}),React.createElement(textInput_1.default,{value:"Abainn",disabled:!0}))))}).call(this,__webpack_require__(4)(module))},529:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const styled_components_1=__importDefault(__webpack_require__(10)),textInput_1=__importDefault(__webpack_require__(107)),TextInputGroup=styled_components_1.default.div`
  ${textInput_1.default} {
    border-radius: 0;
    z-index: 0;
    position: relative;
    margin-top: -2px;

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
`;TextInputGroup.displayName="TextInputGroup",exports.default=TextInputGroup},81:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default={borderRadius:"5px",fontFamily:"'Roboto', sans-serif",fontImportUrl:["https://fonts.googleapis.com/css?family=Roboto:400,600,700","https://fonts.googleapis.com/css?family=Roboto+Mono:500"],colors:{darkGray:"#424242",error:"#ef5350",main:"#304ffe",secondary:"#e0e0e0",success:"#4caf50",warning:"#ffb300",white:"#fff"}}}},[[258,1,2]]]);
//# sourceMappingURL=main.286a1da35a727fea5f6c.bundle.js.map