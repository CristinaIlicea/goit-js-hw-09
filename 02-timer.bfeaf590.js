!function(){flatpickr("#datetime-picker",{});new Date;var e=document.getElementById("btn");e.disabled=!0;var t=(new Date).getTime(),a=[0],n=a[0];document.getElementsByTagName("input").addEventListener(n,(function(){a[0]<t?(e.disabled=!0,window.alert("Please choose a date in the future")):a[0]>=t&&(e.disabled=!1)}))}();
//# sourceMappingURL=02-timer.bfeaf590.js.map
