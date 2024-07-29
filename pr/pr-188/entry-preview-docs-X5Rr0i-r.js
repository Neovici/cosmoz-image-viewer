import { a as renderToCanvas } from './chunk-FJPRWHXQ-C8bcENUK.js';
import { S as SourceType, e as enhanceArgTypes, a as SNIPPET_RENDERED } from './index-DIuzSMHf.js';
import { i as invariant } from './tiny-invariant-w-EUxzzv.js';
import { j } from './directive-helpers-BXW8nDWk.js';
import './index-Kjm4kNkQ.js';

var{window:globalWindow}=__STORYBOOK_MODULE_GLOBAL__.global;globalWindow.STORYBOOK_ENV="web-components";var api=__STORYBOOK_MODULE_PREVIEW_API__.start(renderToCanvas);api.forceReRender;api.clientApi.raw;function isValidComponent(tagName){if(!tagName)return !1;if(typeof tagName=="string")return !0;throw new Error('Provided component needs to be a string. e.g. component: "my-element"')}function isValidMetaData(customElements){if(!customElements)return !1;if(customElements.tags&&Array.isArray(customElements.tags)||customElements.modules&&Array.isArray(customElements.modules))return !0;throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`)}function getCustomElements(){return __STORYBOOK_MODULE_GLOBAL__.global.__STORYBOOK_CUSTOM_ELEMENTS__||__STORYBOOK_MODULE_GLOBAL__.global.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__}var{window: window$1,EventSource}=__STORYBOOK_MODULE_GLOBAL__.global;typeof module<"u"&&module?.hot?.decline&&(module.hot.decline(),new EventSource("__webpack_hmr").addEventListener("message",function(event){try{let{action}=JSON.parse(event.data);action==="built"&&window$1.location.reload();}catch{}}));

function mapItem(item,category){let type;switch(category){case"attributes":case"properties":type={name:item.type?.text||item.type};break;case"slots":type={name:"string"};break;default:type={name:"void"};break}return {name:item.name,required:!1,description:item.description,type,table:{category,type:{summary:item.type?.text||item.type},defaultValue:{summary:item.default!==void 0?item.default:item.defaultValue}}}}function mapEvent(item){let name=item.name.replace(/(-|_|:|\.|\s)+(.)?/g,(_match,_separator,chr)=>chr?chr.toUpperCase():"").replace(/^([A-Z])/,match=>match.toLowerCase());return name=`on${name.charAt(0).toUpperCase()+name.substr(1)}`,[{name,action:{name:item.name},table:{disable:!0}},mapItem(item,"events")]}function mapData(data,category){return data&&data.filter(item=>item&&item.name).reduce((acc,item)=>{if(item.kind==="method")return acc;switch(category){case"events":mapEvent(item).forEach(argType=>{invariant(argType.name),acc[argType.name]=argType;});break;default:acc[item.name]=mapItem(item,category);break}return acc},{})}var getMetaDataExperimental=(tagName,customElements)=>{if(!isValidComponent(tagName)||!isValidMetaData(customElements))return null;let metaData=customElements.tags.find(tag=>tag.name.toUpperCase()===tagName.toUpperCase());return metaData||__STORYBOOK_MODULE_CLIENT_LOGGER__.logger.warn(`Component not found in custom-elements.json: ${tagName}`),metaData},getMetaDataV1=(tagName,customElements)=>{if(!isValidComponent(tagName)||!isValidMetaData(customElements))return null;let metadata;return customElements?.modules?.forEach(_module=>{_module?.declarations?.forEach(declaration=>{declaration.tagName===tagName&&(metadata=declaration);});}),metadata||__STORYBOOK_MODULE_CLIENT_LOGGER__.logger.warn(`Component not found in custom-elements.json: ${tagName}`),metadata},getMetaData=(tagName,manifest)=>manifest?.version==="experimental"?getMetaDataExperimental(tagName,manifest):getMetaDataV1(tagName,manifest),extractArgTypesFromElements=(tagName,customElements)=>{let metaData=getMetaData(tagName,customElements);return metaData&&{...mapData(metaData.members??[],"properties"),...mapData(metaData.properties??[],"properties"),...mapData(metaData.attributes??[],"attributes"),...mapData(metaData.events??[],"events"),...mapData(metaData.slots??[],"slots"),...mapData(metaData.cssProperties??[],"css custom properties"),...mapData(metaData.cssParts??[],"css shadow parts")}},extractArgTypes=tagName=>{let cem=getCustomElements();return extractArgTypesFromElements(tagName,cem)},extractComponentDescription=tagName=>{let metaData=getMetaData(tagName,getCustomElements());return metaData&&metaData.description};var LIT_EXPRESSION_COMMENTS=/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;function skipSourceRender(context){let sourceParams=context?.parameters.docs?.source,isArgsStory=context?.parameters.__isArgsStory;return sourceParams?.type===SourceType.DYNAMIC?!1:!isArgsStory||sourceParams?.code||sourceParams?.type===SourceType.CODE}function sourceDecorator(storyFn,context){let story=storyFn(),renderedForSource=context?.parameters.docs?.source?.excludeDecorators?context.originalStoryFn(context.args,context):story,source;if(__STORYBOOK_MODULE_PREVIEW_API__.useEffect(()=>{let{id,unmappedArgs}=context;source&&__STORYBOOK_MODULE_PREVIEW_API__.addons.getChannel().emit(SNIPPET_RENDERED,{id,source,args:unmappedArgs});}),!skipSourceRender(context)){let container=window.document.createElement("div");renderedForSource instanceof DocumentFragment?j(renderedForSource.cloneNode(!0),container):j(renderedForSource,container),source=container.innerHTML.replace(LIT_EXPRESSION_COMMENTS,"");}return story}var decorators=[sourceDecorator],parameters={docs:{extractArgTypes,extractComponentDescription,story:{inline:!0},source:{type:SourceType.DYNAMIC,language:"html"}}},argTypesEnhancers=[enhanceArgTypes];

export { argTypesEnhancers, decorators, parameters };
