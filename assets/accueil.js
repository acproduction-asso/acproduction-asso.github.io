/* galerie : la vidéo ne joue que lorsqu'on survole sa bande (et jamais si l'appareil demande moins d'animations) */
(function(){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
document.querySelectorAll(".bd video").forEach(v=>{const b=v.closest(".bd");
 const go=()=>{v.preload="auto";v.play().catch(()=>{});},stop=()=>v.pause();
 b.addEventListener("mouseenter",go);b.addEventListener("focus",go);b.addEventListener("mouseleave",stop);b.addEventListener("blur",stop);});})();
