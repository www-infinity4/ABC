(function(root){
  "use strict";

  root.INFINITY_CHANNEL = {
    id:"ABC",
    name:"ABC",
    tagline:"Roseanne-era comedy, 1990s TGIF, classic television and occasional newer favorites."
  };

  /*
   * This catalog favors verified YouTube pages and clearly labels retrospectives,
   * promos and interviews. A short source is never described as a full episode.
   * Longer classic episodes are used only when the source itself labels them complete.
   */
  root.ABC_CATALOG = [
    {id:"roseanne-cast-interviews",title:"Roseanne — Cast Interviews",year:2018,collection:"Roseanne Archive",category:"roseanne",videoId:"9G-aIJV0WdE",slotSeconds:900,sourceStart:0,cleared:true,source:"ABC"},
    {id:"roseanne-conners-back",title:"Roseanne — The Conners Are Back",year:2018,collection:"Roseanne Archive",category:"roseanne",videoId:"eJJRajwk45E",slotSeconds:600,sourceStart:0,cleared:true,source:"ABC"},
    {id:"roseanne-thirty-years",title:"Roseanne — It’s Been 30 Years",year:2018,collection:"Roseanne Archive",category:"roseanne",videoId:"byKZJFhFvBo",slotSeconds:600,sourceStart:0,cleared:true,source:"ABC"},
    {id:"roseanne-family-return",title:"The Conner Family Returns — ABC News Feature",year:2018,collection:"Roseanne Archive",category:"roseanne",videoId:"cqmH7qxmqNs",slotSeconds:900,sourceStart:0,cleared:true,source:"ABC News"},
    {id:"roseanne-questions",title:"Roseanne — Questions",year:2017,collection:"Roseanne Archive",category:"roseanne",videoId:"zFkJVYhzf2s",slotSeconds:600,sourceStart:0,cleared:true,source:"ABC"},
    {id:"tgif-death",title:"The Story of ABC’s TGIF",year:2026,collection:"1990s TGIF Retrospective",category:"tgif",videoId:"k0YrbE_4agM",slotSeconds:2700,sourceStart:0,cleared:true,source:"Television retrospective"},
    {id:"tgif-connected",title:"Every Hidden Connection Between the Friday Sitcoms",year:2026,collection:"1990s TGIF Retrospective",category:"tgif",videoId:"1l5CL7-mzkU",slotSeconds:2700,sourceStart:0,cleared:true,source:"Television retrospective"},
    {id:"perfect-strangers",title:"Perfect Strangers — A TGIF Retrospective",year:2024,collection:"ABC Comedy Retrospective",category:"tgif",videoId:"TWKSsEiUjZ0",slotSeconds:2700,sourceStart:0,cleared:true,source:"Television retrospective"},
    {id:"full-house-story",title:"The Story of Full House",year:2026,collection:"ABC Comedy Retrospective",category:"tgif",videoId:"ay6yelfBipY",slotSeconds:2700,sourceStart:0,cleared:true,source:"Television retrospective"},
    {id:"sabrina-tgif",title:"Sabrina the Teenage Witch — TGIF Look Back",year:2025,collection:"1990s TGIF Retrospective",category:"tgif",videoId:"EPjcCG-KVzI",slotSeconds:1800,sourceStart:0,cleared:true,source:"Television retrospective"},
    {id:"boy-meets-world",title:"Boy Meets World — 1998 ABC Archive",year:1998,collection:"TGIF Archive",category:"tgif",videoId:"EP7hHi8S9Hw",slotSeconds:600,sourceStart:0,cleared:true,source:"ABC broadcast archive"},
    {id:"abc-halloween-1996",title:"ABC Halloween Night — 1996 Archive",year:1996,collection:"ABC Broadcast Archive",category:"archive",videoId:"K2P6V6rQpuA",slotSeconds:600,sourceStart:0,cleared:true,source:"ABC broadcast archive"},
    {id:"abc-station-1993",title:"ABC Network — 1993 Station Break",year:1993,collection:"ABC Broadcast Archive",category:"archive",videoId:"3zLv2krkPc8",slotSeconds:600,sourceStart:0,cleared:true,source:"ABC broadcast archive"},
    {id:"barney-escape-artist",title:"Barney Miller — The Escape Artist",year:1975,collection:"Classic ABC Comedy · Full Episode",category:"classic-comedy",videoId:"JUtwLG55rdg",slotSeconds:1500,sourceStart:0,cleared:true,source:"Rapid Response"},
    {id:"barney-bus-stop",title:"Barney Miller — Bus Stop",year:1976,collection:"Classic ABC Comedy · Full Episode",category:"classic-comedy",videoId:"n_ijHmboVEs",slotSeconds:1500,sourceStart:0,cleared:true,source:"Rapid Response"},
    {id:"barney-hero",title:"Barney Miller — The Hero",year:1975,collection:"Classic ABC Comedy · Full Episode",category:"classic-comedy",videoId:"K8H5TIqNM-o",slotSeconds:1500,sourceStart:0,cleared:true,source:"Rapid Response"},
    {id:"barney-strike",title:"Barney Miller — Strike, Part 1",year:1977,collection:"Classic ABC Comedy · Full Episode",category:"classic-comedy",videoId:"kNRIY2BdS_s",slotSeconds:1500,sourceStart:0,cleared:true,source:"Rapid Response"},
    {id:"swat-jungle-war",title:"S.W.A.T. — Jungle War",year:1975,collection:"Classic ABC Action · Full Episode",category:"classic-drama",videoId:"4i04o9WE_7g",slotSeconds:3000,sourceStart:0,cleared:true,source:"Classic television archive"},
    {id:"2020-crossing-line",title:"20/20 — Crossing the Line",year:2021,collection:"ABC News · Full Episode",category:"news-special",videoId:"9-mmxynAI2Q",slotSeconds:3000,sourceStart:0,cleared:true,source:"20/20 archive"},
    {id:"abc-news-live",title:"ABC News Live",year:2026,collection:"Occasional Newer Programming · Live",category:"newer",videoId:"gN0PZCe-kwQ",slotSeconds:3600,sourceStart:0,cleared:true,source:"ABC News"},
    {id:"abc-news-prime",title:"ABC News Live Prime — Full Broadcast",year:2026,collection:"Occasional Newer Programming",category:"newer",videoId:"12r-pW_0B3E",slotSeconds:3600,sourceStart:0,cleared:true,source:"ABC News"}
  ];

  root.ABC_PREMIUM_TARGETS = [
    {title:"Roseanne (1988–1997)",note:"Top priority. Add complete classic episodes only when the rights-holder provides an authorized embeddable source."},
    {title:"Home Improvement · The Drew Carey Show · Spin City",note:"Build the weekday 1990s comedy block as authorized full episodes become available."},
    {title:"Family Matters · Step by Step · Boy Meets World · Sabrina",note:"Reserve Friday night for a genuine TGIF block; never substitute a trailer for an episode."},
    {title:"ABC Sunday Night Movie",note:"Use recognizable 1980s–1990s family movies only when a legitimate full-length source is playable."},
    {title:"General Hospital and classic ABC soaps",note:"Add older complete soap-opera episodes from official archive sources when available."}
  ];
})(window);
