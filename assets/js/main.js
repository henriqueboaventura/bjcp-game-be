//notie https://github.com/jaredreich/notie

var notie=function(){function e(e){for(var t in e)L[t]=e[t]}function t(e,t,i){L.colorText.length>0&&(S.style.color=L.colorText),w(),z++,setTimeout(function(){z--},L.animationDelay+10),1===z&&(Y?n(function(){o(e,t,i)}):o(e,t,i))}function o(e,t,o){Y=!0;var i=0;switch(i="undefined"==typeof o||0===o?864e5:o>0&&o<1?1e3:1e3*o,D(A,"notie-background-success"),D(A,"notie-background-warning"),D(A,"notie-background-error"),D(A,"notie-background-info"),e){case 1:case"success":L.colorSuccess.length>0?A.style.backgroundColor=L.colorSuccess:x(A,"notie-background-success");break;case 2:case"warning":L.colorWarning.length>0?A.style.backgroundColor=L.colorWarning:x(A,"notie-background-warning");break;case 3:case"error":L.colorError.length>0?A.style.backgroundColor=L.colorError:x(A,"notie-background-error");break;case 4:case"info":L.colorInfo.length>0?A.style.backgroundColor=L.colorInfo:x(A,"notie-background-info")}S.innerHTML=t,A.style.top="-10000px",A.style.display="table",A.style.top="-"+A.offsetHeight-5+"px",F=setTimeout(function(){x(A,"notie-transition"),A.style.top=0,W=setTimeout(function(){n(function(){})},i)},20)}function n(e){clearTimeout(F),clearTimeout(W),A.style.top="-"+A.offsetHeight-5+"px",setTimeout(function(){D(A,"notie-transition"),A.style.top="-10000px",Y=!1,e&&e()},L.animationDelay+10)}function i(e,t,o,i,l){L.colorInfo.length>0&&(J.style.backgroundColor=L.colorInfo),L.colorSuccess.length>0&&(R.style.backgroundColor=L.colorSuccess),L.colorError.length>0&&(Z.style.backgroundColor=L.colorError),L.colorText.length>0&&(O.style.color=L.colorText,B.style.color=L.colorText,K.style.color=L.colorText),w(),Y?n(function(){c(e,t,o,i,l)}):c(e,t,o,i,l)}function c(e,t,o,n,i){function c(){O.innerHTML=e,B.innerHTML=t,K.innerHTML=o,j.style.top="-10000px",j.style.display="table",j.style.top="-"+j.offsetHeight-5+"px",V.style.display="block",setTimeout(function(){x(j,"notie-transition"),j.style.top=0,V.style.opacity="0.75",setTimeout(function(){$=!0},L.animationDelay+10)},20)}H(),R.onclick=function(){l(),n&&setTimeout(function(){n()},L.animationDelay+10)},Z.onclick=function(){l(),i&&setTimeout(function(){i()},L.animationDelay+10)},$?(l(),setTimeout(function(){c()},L.animationDelay+10)):c()}function l(){j.style.top="-"+j.offsetHeight-5+"px",V.style.opacity="0",setTimeout(function(){D(j,"notie-transition"),j.style.top="-10000px",V.style.display="none",M(),$=!1},L.animationDelay+10)}function a(e,t,o,i,c,l){L.colorInfo.length>0&&(P.style.backgroundColor=L.colorInfo),L.colorSuccess.length>0&&(U.style.backgroundColor=L.colorSuccess),L.colorError.length>0&&(X.style.backgroundColor=L.colorError),L.colorText.length>0&&(_.style.color=L.colorText,ee.style.color=L.colorText,te.style.color=L.colorText),w(),Q.setAttribute("autocapitalize",e.autocapitalize||"none"),Q.setAttribute("autocomplete",e.autocomplete||"off"),Q.setAttribute("autocorrect",e.autocorrect||"off"),Q.setAttribute("autofocus",e.autofocus||"true"),Q.setAttribute("inputmode",e.inputmode||"verbatim"),Q.setAttribute("max",e.max||""),Q.setAttribute("maxlength",e.maxlength||""),Q.setAttribute("min",e.min||""),Q.setAttribute("minlength",e.minlength||""),Q.setAttribute("placeholder",e.placeholder||""),Q.setAttribute("spellcheck",e.spellcheck||"default"),Q.setAttribute("step",e.step||"any"),Q.setAttribute("type",e.type||"text"),Q.value=e.prefilledValue||"",e.allowed?Q.oninput=function(){if(Array.isArray(e.allowed)){for(var t="",o=e.allowed,n=0;n<o.length;n++)"an"===o[n]?t+="0-9a-zA-Z":"a"===o[n]?t+="a-zA-Z":"n"===o[n]&&(t+="0-9"),"sp"===o[n]&&(t+=" ");var i=new RegExp("[^"+t+"]","g")}else"object"==typeof e.allowed&&(i=e.allowed);Q.value=Q.value.replace(i,"")}:Q.oninput=function(){return!0},Y?n(function(){r(t,o,i,c,l)}):r(t,o,i,c,l)}function r(e,t,o,n,i){function c(){_.innerHTML=e,ee.innerHTML=t,te.innerHTML=o,q.style.top="-10000px",q.style.display="table",q.style.top="-"+q.offsetHeight-5+"px",G.style.display="block",setTimeout(function(){x(q,"notie-transition"),q.style.top=0,G.style.opacity="0.75",setTimeout(function(){oe=!0,Q.focus()},L.animationDelay+10)},20)}H(),U.onclick=function(){d(),n&&setTimeout(function(){n(Q.value)},L.animationDelay+10)},X.onclick=function(){d(),i&&setTimeout(function(){i(Q.value)},L.animationDelay+10)},oe?(d(),setTimeout(function(){c()},L.animationDelay+10)):c()}function d(){q.style.top="-"+q.offsetHeight-5+"px",G.style.opacity="0",setTimeout(function(){D(q,"notie-transition"),G.style.display="none",q.style.top="-10000px",M(),oe=!1},L.animationDelay+10)}function s(e,t,o){L.colorInfo.length>0&&(ie.style.backgroundColor=L.colorInfo),L.colorNeutral.length>0&&(re.style.backgroundColor=L.colorNeutral),L.colorText.length>0&&(ce.style.color=L.colorText,re.style.color=L.colorText),w(),Y?n(function(){u(e,t,o)}):u(e,t,o)}function u(e,t,o){function n(e){ce.innerHTML=e,ne.style.bottom="-10000px",ne.style.display="table",ne.style.bottom="-"+ne.offsetHeight-5+"px",le.style.display="block",setTimeout(function(){x(ne,"notie-transition"),ne.style.bottom=0,le.style.opacity="0.75",setTimeout(function(){de=!0},L.animationDelay+10)},20)}H(),document.getElementById("notie-select-choices").innerHTML="",re.innerHTML=t;for(var i,c=0;c<o.length;c++){var l=document.createElement("div");if(l.innerHTML=o[c].title,x(l,"notie-select-choice"),ae.appendChild(l),L.colorText.length>0&&(l.style.color=L.colorText),o[c].type)switch(o[c].type){case 1:L.colorSuccess.length>0?l.style.backgroundColor=L.colorSuccess:x(l,"notie-background-success");break;case 2:L.colorWarning.length>0?l.style.backgroundColor=L.colorWarning:x(l,"notie-background-warning");break;case 3:L.colorError.length>0?l.style.backgroundColor=L.colorError:x(l,"notie-background-error");break;case 4:L.colorInfo.length>0?l.style.backgroundColor=L.colorInfo:x(l,"notie-background-info")}else o[c].color&&(l.style.backgroundColor=o[c].color);if(l.style.backgroundColor=window.getComputedStyle(l).backgroundColor,c>0&&l.style.backgroundColor===i.style.backgroundColor&&x(i,"notie-select-choice-bottom-border"),!o[c].handler)throw new Error('notie.select choice "'+l.title+'" must have a handler');l.onclick=function(e){return function(){m(),setTimeout(function(){o[e].handler()},L.animationDelay+10)}}(c),i=l}de?(m(),setTimeout(function(){n(e)},L.animationDelay+10)):n(e)}function m(){ne.style.bottom="-"+ne.offsetHeight-5+"px",le.style.opacity="0",setTimeout(function(){D(ne,"notie-transition"),ne.style.bottom="-10000px",le.style.display="none",M(),de=!1},L.animationDelay+10)}function p(){return Y||$||oe||de||Ae}function y(e){L.colorInfo.length>0&&(me.style.backgroundColor=L.colorInfo),L.colorSuccess.length>0&&(xe.style.backgroundColor=L.colorSuccess),L.colorError.length>0&&(De.style.backgroundColor=L.colorError),L.colorText.length>0&&(me.style.color=L.colorText),w(),Y?n(function(){f(e)}):f(e)}function f(e){function t(){He=e.initial||new Date,h(He),xe.innerHTML=e.yesText||"OK",De.innerHTML=e.noText||"Cancel",se.style.top="-10000px",se.style.display="table",se.style.top="-"+se.offsetHeight-5+"px",we.style.display="block",setTimeout(function(){x(se,"notie-transition"),se.style.top=0,we.style.opacity="0.75",setTimeout(function(){Ae=!0},L.animationDelay+10)},20)}H(),xe.onclick=function(){E(),e.yesCallback&&setTimeout(function(){e.yesCallback(He)},L.animationDelay+10)},De.onclick=function(){E(),e.noCallback&&setTimeout(function(){e.noCallback(He)},L.animationDelay+10)},Ae?(E(),setTimeout(function(){t()},L.animationDelay+10)):t()}function h(e){be.innerHTML=L.dateMonths[e.getMonth()],ve.innerHTML=e.getDate(),ke.innerHTML=e.getFullYear()}function g(){He.setMonth(He.getMonth()-1),h(He)}function b(){He.setMonth(He.getMonth()+1),h(He)}function v(){He.setDate(He.getDate()-1),h(He)}function k(){He.setDate(He.getDate()+1),h(He)}function C(){He.setFullYear(He.getFullYear()-1),h(He)}function T(){He.setFullYear(He.getFullYear()+1),h(He)}function E(){se.style.top="-"+se.offsetHeight-5+"px",we.style.opacity="0",setTimeout(function(){D(se,"notie-transition"),se.style.top="-10000px",we.style.display="none",M(),Ae=!1},L.animationDelay+10)}function x(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function D(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function w(){document.activeElement&&document.activeElement.blur()}function H(){Me=document.body.style.height,Le=document.body.style.overflow,document.body.style.height="100%",document.body.style.overflow="hidden"}function M(){document.body.style.height=Me,document.body.style.overflow=Le}var L={colorSuccess:"",colorWarning:"",colorError:"",colorInfo:"",colorNeutral:"",colorText:"",dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],animationDelay:300,backgroundClickDismiss:!0},A=document.createElement("div");A.id="notie-alert-outer",A.onclick=function(){n()},document.body.appendChild(A);var N=document.createElement("div");N.id="notie-alert-inner",A.appendChild(N);var I=document.createElement("div");I.id="notie-alert-content",N.appendChild(I);var S=document.createElement("span");S.id="notie-alert-text",I.appendChild(S);var F,W,Y=!1,z=0,j=document.createElement("div");j.id="notie-confirm-outer";var J=document.createElement("div");J.id="notie-confirm-inner",j.appendChild(J);var O=document.createElement("span");O.id="notie-confirm-text",J.appendChild(O);var R=document.createElement("div");R.id="notie-confirm-yes",j.appendChild(R);var Z=document.createElement("div");Z.id="notie-confirm-no",j.appendChild(Z);var B=document.createElement("span");B.id="notie-confirm-text-yes",R.appendChild(B);var K=document.createElement("span");K.id="notie-confirm-text-no",Z.appendChild(K);var V=document.createElement("div");V.id="notie-confirm-background",x(V,"notie-transition"),V.onclick=function(){L.backgroundClickDismiss&&l()},document.body.appendChild(j),document.body.appendChild(V);var $=!1,q=document.createElement("div");q.id="notie-input-outer";var G=document.createElement("div");G.id="notie-input-background",x(G,"notie-transition");var P=document.createElement("div");P.id="notie-input-inner",q.appendChild(P);var Q=document.createElement("input");Q.id="notie-input-field",q.appendChild(Q);var U=document.createElement("div");U.id="notie-input-yes",q.appendChild(U);var X=document.createElement("div");X.id="notie-input-no",q.appendChild(X);var _=document.createElement("span");_.id="notie-input-text",P.appendChild(_);var ee=document.createElement("span");ee.id="notie-input-text-yes",U.appendChild(ee);var te=document.createElement("span");te.id="notie-input-text-no",X.appendChild(te),document.body.appendChild(q),document.body.appendChild(G),G.onclick=function(){L.backgroundClickDismiss&&d()};var oe=!1,ne=document.createElement("div");ne.id="notie-select-outer";var ie=document.createElement("div");ie.id="notie-select-inner",ne.appendChild(ie);var ce=document.createElement("span");ce.id="notie-select-text",ie.appendChild(ce);var le=document.createElement("div");le.id="notie-select-background",x(le,"notie-transition");var ae=document.createElement("div");ae.id="notie-select-choices",ne.appendChild(ae);var re=document.createElement("div");re.id="notie-select-cancel",ne.appendChild(re),document.body.appendChild(ne),document.body.appendChild(le),le.onclick=function(){L.backgroundClickDismiss&&m()},re.onclick=function(){m()};var de=!1,se=document.createElement("div");se.id="notie-date-outer";var ue=document.createElement("div");ue.id="notie-date-selector",se.appendChild(ue);var me=document.createElement("div");me.id="notie-date-inner",se.appendChild(me);var pe='<div class="notie-date-arrow-up"></div>',ye='<div class="notie-date-arrow-down"></div>',fe=document.createElement("div");fe.className="notie-date-up",fe.innerHTML=pe,ue.appendChild(fe),fe.onclick=g;var he=document.createElement("div");he.className="notie-date-up",he.innerHTML=pe,ue.appendChild(he),he.onclick=v;var ge=document.createElement("div");ge.className="notie-date-up",ge.innerHTML=pe,ue.appendChild(ge),ge.onclick=C;var be=document.createElement("div");be.className="notie-date-text",ue.appendChild(be);var ve=document.createElement("div");ve.className="notie-date-text",ue.appendChild(ve);var ke=document.createElement("div");ke.className="notie-date-text",ue.appendChild(ke);var Ce=document.createElement("div");Ce.className="notie-date-down",Ce.innerHTML=ye,ue.appendChild(Ce),Ce.onclick=b;var Te=document.createElement("div");Te.className="notie-date-down",Te.innerHTML=ye,ue.appendChild(Te),Te.onclick=k;var Ee=document.createElement("div");Ee.className="notie-date-down",Ee.innerHTML=ye,ue.appendChild(Ee),Ee.onclick=T;var xe=document.createElement("div");xe.id="notie-date-yes",me.appendChild(xe);var De=document.createElement("div");De.id="notie-date-no",me.appendChild(De);var we=document.createElement("div");we.id="notie-date-background",x(we,"notie-transition"),we.onclick=function(){L.backgroundClickDismiss&&E()},document.body.appendChild(se),document.body.appendChild(we);var He,Me,Le,Ae=!1;return window.addEventListener("keydown",function(e){var t=13===e.which||13===e.keyCode,o=27===e.which||27===e.keyCode;Y?(t||o)&&n():$?t?R.click():o&&l():oe?t?U.click():o&&d():de?o&&m():Ae&&(t?xe.click():o&&E())}),{setOptions:e,alert:t,alertHide:n,confirm:i,input:a,select:s,date:y,isShowing:p}}();"object"==typeof module&&module.exports&&(module.exports=notie);

$(document).ready(function() {

  var current = null,
      points = 0;

  function getNextQuestion() {
    $.get(
      'next',
      {},
      function(data) {
        current = data.id;
        $.each(data.options, function(i, style) {
          elem = $('<h2>').html(style.name);
          $('#option-' + (i+1)).html(elem);
          $('#option-' + (i+1)).data('id', style.id);
        });

        type = $('<h3>').html(data.type);
        elem = $('<p>').append(data.content);

        $('.info').empty();
        $('.info').append(type).append(elem);
        attachEvents();
      },
      'json'
    );
  }

  function checkAnswer(elem) {
    detachEvents();
    $.get(
      'check/' + elem.data('id'),
      function(data) {
        if(data.status == true) {
          notie.alert('success', "That's Right!", 2);
          points++;
        } else {
          notie.alert('error', "The right answer is <strong>" + data.style + "<strong>", 2);
          points--;
          if(points < 0) {
            points = 0;
          }
        }
        $('.points').html(points);
          window.setTimeout(function() {
            getNextQuestion();
          }, 2000);
      }
    );
  }

  function attachEvents() {
    console.log('attach');
    $('.options').on('click', function(e) {
      checkAnswer($(this));
    });
  }

  function detachEvents() {
    console.log('detach');
    $('.options').unbind('click');
  }

  $('.js-start-game').on('click', function(e) {
    $('.intro').fadeOut('fast');
    getNextQuestion();
  });

  $( document ).ajaxStart(function() {
    $('.loader').fadeIn('fast');
  });
  $( document ).ajaxComplete(function() {
    $('.loader').fadeOut('fast');
  });

  $('.options').on('click', function(e) {
    attachEvents();
  });

});