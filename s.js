var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://sebajuffar.github.io/s.css';
    link.media = 'all';
    head.appendChild(link);
}

docReady(function() {
    var profile = getElementByAttribute("style", "font-size:18px; font-weight:bold ");
	var rating = getElementByAttribute("style", "font-size:23px; color:#FF0000;").innerHTML;
	var variacion = getElementByAttribute("href", "partidos_xjugador.asp?codigo=15168&ver=UltimoRanking").innerHTML;
	var ranking = getElementByText('Posición en el ranking:').parentElement.children[1].innerText;
	var profileParent = profile.parentNode;
	
	profile.remove();
	profileParent.innerHTML += `<td>
		<div class="profile-container">
			<div class="avatar-flip">
				<img src="http://drive.google.com/uc?export=view&id=1mzTXkLtbhy_ERvvr-tfWMrb7qfoQXyWA" height="170" width="170">
				<img src="http://drive.google.com/uc?export=view&id=1w9R7ssD26fDG76d17bmR-yK79N7gxjxB" height="170" width="170">
			</div>
			<div class="information-container">
				<h3 class="profile-code">Código #15168</h3>
				<h2>Sebastián Juffar</h2>
				<img src="imagenes/icono_puesto_5ta.gif" class="rating-image">
				<div class="info-box first">
					<h6 class="info-title">Rating</h6>
					<span id="profile-rating"></span>
				</div>
				<div class="ranking-box">
					<div class="info-box">
						<h6 class="info-title">Variación último ranking</h6>
						<a href="partidos_xjugador.asp?codigo=15168&ver=UltimoRanking" id="profile-variacion-rating"></a>
					</div>
					<div class="info-box">
						<h6 class="info-title">Posición en el ranking</h6>
						<span id="profile-posicion-ranking">#</span>
					</div>
				</div>
				<div class="club-association">
					<div class="info-box">
						<h6 class="info-title">Club</h6>
						<a class="club" href="clubes_ampliar.asp?codigo=198">
							<img src="http://drive.google.com/uc?export=view&id=1w9R7ssD26fDG76d17bmR-yK79N7gxjxB">
							<span>Estación Ping Pong</span>
						</a>
					</div>
					<div class="info-box">
						<h6 class="info-title">Asociación</h6>
						<a href="asociaciones_ampliar.asp?codigo=1" class="asociacion">
							<img src="http://drive.google.com/uc?export=view&id=1z1mWlOBKSa4kQjwFyWTV6x4XZQHyk9WA">
							<span>FeTeMBA</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</td>`;
	document.getElementById('profile-rating').innerHTML += rating;
	document.getElementById('profile-variacion-rating').innerHTML += variacion;
	document.getElementById('profile-posicion-ranking').innerHTML += ranking;
});

function getElementByText(searchText) {
	var aTags = document.getElementsByTagName("td");
	var found;

	for (var i = 0; i < aTags.length; i++) {
	  if (aTags[i].textContent == searchText) {
		return aTags[i];
	  }
	}
}

function getElementByAttribute(attribute, value) {
var arr_elms = [];
	arr_elms = document.body.getElementsByTagName("*");
	var elms_len = arr_elms.length;

	for (var i = 0; i < elms_len; i++) {
	  if(arr_elms[i].getAttribute(attribute) == value){  
	    return arr_elms[i];
	   }
	}
}

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 
