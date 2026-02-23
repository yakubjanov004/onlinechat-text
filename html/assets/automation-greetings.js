(function(){
  "use strict";
  var STORE_KEY='qc_automation_greetings_v1';
  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function load(){try{return JSON.parse(localStorage.getItem(STORE_KEY)||'{"cards":[],"preview":""}');}catch(e){return {cards:[],preview:''};}}
  function save(d){try{localStorage.setItem(STORE_KEY,JSON.stringify(d));}catch(e){}}

  function captureCards(){
    return qsa('.two-col .card').map(function(c, i){
      var title=qs('h3',c)?.textContent?.trim()||('Greeting '+(i+1));
      var desc=qs('.card-description',c)?.textContent?.trim()||'';
      var enabled=!!qs('input[type="checkbox"]',c)?.checked;
      return {id:'g'+(i+1),title:title,desc:desc,enabled:enabled};
    });
  }

  function renderPreview(msg){
    var p=qs('[data-greeting-preview]'); if(p) p.textContent=msg||'Preview yo\'q';
  }

  function init(){
    if(!qs('[data-automation-greetings]')) return;
    var d=load();
    if(!d.cards?.length){ d.cards=captureCards(); save(d); }
    if(d.preview) renderPreview(d.preview);

    document.addEventListener('click', function(e){
      var a=e.target.closest('[data-greeting-action]');
      if(!a) return;
      var act=a.getAttribute('data-greeting-action');
      if(act==='save'){ var x=load(); x.cards=captureCards(); save(x); }
      if(act==='preview-random'){
        var cards=captureCards().filter(function(c){return c.enabled;});
        var selected=cards[Math.floor(Math.random()*Math.max(cards.length,1))];
        var msg=selected? selected.desc : 'Active greeting topilmadi';
        var x=load(); x.preview=msg; save(x); renderPreview(msg);
      }
    });
  }
  document.addEventListener('DOMContentLoaded', init);
})();