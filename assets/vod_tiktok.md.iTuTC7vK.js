import{d as _,h as f,aa as h,c,m as t,a4 as v,a5 as y,o as i,q as k,s as m,_ as b}from"./chunks/framework.B96iPRht.js";const l=o=>(k("data-v-1cc76f4c"),o=o(),m(),o),g={id:"main"},x=["src"],w=l(()=>t("path",{d:"M152.443 136.417l207.114 119.573-207.114 119.593z",fill:"#fff"},null,-1)),S=[w],j=l(()=>t("a",{href:"/"},[t("button",{id:"next"},"更多福利")],-1)),P=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","head":[["link",{"rel":"canonical","href":"https://vodtv.cn/vod/tiktok/"}]]},"headers":[],"relativePath":"vod/tiktok.md","filePath":"vod/tiktok.md","lastUpdated":1711077538000}'),B={name:"vod/tiktok.md"},C=_({...B,setup(o){const a=f(null),e=h({playing:!1,number:0,src:"https://cdntube2.b-cdn.net/mp4/ecbe0b502b545b0b67fcb0dcd9631d6c532b10dd.mp4"}),d=async()=>{const n=await(await fetch("https://fastly.jsdelivr.net/gh/cnly1987/cdn@master/tiktok.json")).json();a.value.src=n[e.number++],a.value.play()},r=()=>{a.value.play(),e.playing=!0},p=()=>{a.value.pause(),e.playing=!1},s=()=>{e.playing?p():r()};return(u,n)=>(i(),c("div",null,[t("section",g,[t("video",{src:e.src,id:"player",ref_key:"vidRef",ref:a,onClick:s,controls:"","webkit-playsinline":"",playsinline:"",autoplay:"","x-webkit-airplay":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true","x5-video-ignore-metadata":"true",controlslist:"nodownload"},null,8,x),v((i(),c("svg",{width:"512",height:"512",viewBox:"0 0 512 512",onClick:s},S,512)),[[y,!e.playing]])]),t("section",{id:"buttons",style:{"text-align":"center"}},[t("button",{id:"next",onClick:d},"播放下一个"),j])]))}}),D=b(C,[["__scopeId","data-v-1cc76f4c"]]);export{P as __pageData,D as default};
