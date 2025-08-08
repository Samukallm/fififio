// Função para esconder tudo e mostrar emoji de segredo
document.addEventListener('DOMContentLoaded', function() {
	const btn = document.getElementById('fifioBtn');
	btn.addEventListener('click', function() {
		document.body.innerHTML = '<div id="emojiSegredo" style="display:flex;justify-content:center;align-items:center;height:100vh;width:100vw;"><span style="font-size:0;transition:font-size 4s cubic-bezier(.68,-0.55,.27,1.55);">🤫</span></div>';
		setTimeout(function() {
			const emoji = document.querySelector('#emojiSegredo span');
			emoji.style.fontSize = '8rem';
		}, 50);
		// Após 4 segundos, some o emoji e mostra a imagem e texto
		setTimeout(function() {
			const emojiDiv = document.getElementById('emojiSegredo');
			if (emojiDiv) emojiDiv.style.display = 'none';
			// Adiciona imagem e texto abaixo
			const imgDiv = document.createElement('div');
			imgDiv.style.display = 'flex';
			imgDiv.style.flexDirection = 'column';
			imgDiv.style.justifyContent = 'center';
			imgDiv.style.alignItems = 'center';
			imgDiv.style.height = '100vh';
			imgDiv.innerHTML = '<img id="fifioDormis" src="imgs/fifio dormis.jpg" alt="Fifio dormis" class="fade-in-img" style="max-width:90vw;max-height:60vh;border-radius:16px;box-shadow:0 4px 24px #0008;">' +
				'<p id="textoFifio" class="fade-in-text" style="color:white;font-size:2rem;margin-top:2rem;text-align:center;">Feliz dia dos pais Fifio, não sei se é repentino pra você ou não, mas a verdade é que pai é quem cria e sendo sincero você é o cara que foi presente, se preocupa comigo quando eu tô fazendo merda, arrumou o curso do senai pra mim, stlk fifio você é foda demais pra mim mano</p>' +
				'<button id="proximoTextoBtn" style="margin-top:2rem;padding:0.5rem 2rem;font-size:1.2rem;border-radius:8px;border:none;background:#6c63ff;color:white;cursor:pointer;opacity:0;transition:opacity 1s;">Próximo texto</button>';
			// Ativa o fade-in do botão depois do texto
			setTimeout(function() {
				const btnProx = document.getElementById('proximoTextoBtn');
				if (btnProx) btnProx.style.opacity = '1';
			}, 2200);
			// Lógica para trocar o texto ao clicar no botão
			setTimeout(function() {
				const btnProx = document.getElementById('proximoTextoBtn');
				if (btnProx) {
					btnProx.addEventListener('click', function() {
						const texto = document.getElementById('textoFifio');
						const img = document.getElementById('fifioDormis');
						if (img) {
							img.style.opacity = '0';
							setTimeout(function() {
								img.src = 'imgs/fifio doido.jpg';
								img.classList.remove('fade-in-img');
								void img.offsetWidth; // força reflow
								img.classList.add('fade-in-img');
								img.style.opacity = '1';
							}, 200);
						}
						if (texto) {
							texto.style.opacity = '0';
							setTimeout(function() {
								texto.textContent = 'Nunca contei pra ninguém, mas o dia que eu mais tive medo na minha vida foi o dia que você ia ser operado, foi o dia que eu mais orei pra Deus não deixar alguém sumir da minha vida, nunca senti tanto desespero, medo, ansiedade, só queria que tudo acabasse logo e a gente fumasse um narga juntos logo, mas graças a Deus você voltou, e hoje eu só tenho a agradecer por você estar aqui comigo.';
								texto.classList.remove('fade-in-text');
								void texto.offsetWidth; // força reflow
								texto.classList.add('fade-in-text');
								texto.style.opacity = '1';
							}, 400);
						}
						btnProx.style.display = 'none';
						// Adiciona o botão penúltimo
						const btnPenultimo = document.createElement('button');
						btnPenultimo.id = 'penultimoTextoBtn';
						btnPenultimo.textContent = 'Próximo texto';
						btnPenultimo.style.marginTop = '2rem';
						btnPenultimo.style.padding = '0.5rem 2rem';
						btnPenultimo.style.fontSize = '1.2rem';
						btnPenultimo.style.borderRadius = '8px';
						btnPenultimo.style.border = 'none';
						btnPenultimo.style.background = '#6c63ff';
						btnPenultimo.style.color = 'white';
						btnPenultimo.style.cursor = 'pointer';
						btnPenultimo.style.opacity = '0';
						btnPenultimo.style.transition = 'opacity 1s';
						texto.parentNode.appendChild(btnPenultimo);
						setTimeout(function() {
							btnPenultimo.style.opacity = '1';
						}, 1200);
						btnPenultimo.addEventListener('click', function() {
							// Animação para trocar para o terceiro texto e imagem
							if (img) {
								img.style.opacity = '0';
								setTimeout(function() {
									img.src = 'imgs/fifio brocano.jpg';
									img.classList.remove('fade-in-img');
									void img.offsetWidth;
									img.classList.add('fade-in-img');
									img.style.opacity = '1';
								}, 200);
							}
							if (texto) {
								texto.style.opacity = '0';
								setTimeout(function() {
									texto.textContent = 'Hoje eu posso dizer que a pessoa que sou hoje é po sua causa, você me ensinou a ser uma pessoa melhor, mais humano, mais compreensivo, mais paciente, você me ensinou a ser um cara melhor, e eu só tenho a agradecer por tudo que você fez por mim.';
									texto.classList.remove('fade-in-text');
									void texto.offsetWidth;
									texto.classList.add('fade-in-text');
									texto.style.opacity = '1';
								}, 400);
							}
							btnPenultimo.style.display = 'none';
							// Adiciona o último botão
							const btnUltimo = document.createElement('button');
							btnUltimo.id = 'ultimoTextoBtn';
							btnUltimo.textContent = 'Último texto';
							btnUltimo.style.marginTop = '2rem';
							btnUltimo.style.padding = '0.5rem 2rem';
							btnUltimo.style.fontSize = '1.2rem';
							btnUltimo.style.borderRadius = '8px';
							btnUltimo.style.border = 'none';
							btnUltimo.style.background = '#ff6347';
							btnUltimo.style.color = 'white';
							btnUltimo.style.cursor = 'pointer';
							btnUltimo.style.opacity = '0';
							btnUltimo.style.transition = 'opacity 1s';
							texto.parentNode.appendChild(btnUltimo);
							setTimeout(function() {
								btnUltimo.style.opacity = '1';
							}, 1200);
							btnUltimo.addEventListener('click', function() {
								// Animação para trocar para o texto e imagem final
								if (img) {
									img.style.opacity = '0';
									setTimeout(function() {
										img.src = 'imgs/fifio de moto.jpg';
										img.classList.remove('fade-in-img');
										void img.offsetWidth;
										img.classList.add('fade-in-img');
										img.style.opacity = '1';
									}, 200);
								}
								if (texto) {
									texto.style.opacity = '0';
									setTimeout(function() {
										texto.textContent = 'É isso Fifio, como eu não tenho grana pra te dar um presentão dhr, eu fiz o site porque você merece de coração mano, eu te amo Samu, você é a melhor pessoa que apareceu na minha vida talvez eu te mande isso hoje sla kkkkkkkk, mas é isso, Feliz dia dos pais Fifio, você sim é o melhor pai do mundo.';
										texto.classList.remove('fade-in-text');
										void texto.offsetWidth;
										texto.classList.add('fade-in-text');
										texto.style.opacity = '1';
									}, 400);
								}
								btnUltimo.style.display = 'none';
							});
						});
					});
				}
			}, 2300);
			document.body.appendChild(imgDiv);
			// Ativa o fade-in da imagem
			setTimeout(function() {
				const img = document.getElementById('fifioDormis');
				if (img) img.style.opacity = '1';
			}, 100);
			// Ativa o fade-in do texto depois da imagem
			setTimeout(function() {
				const texto = document.getElementById('textoFifio');
				if (texto) texto.style.opacity = '1';
			}, 1200);
		}, 4050);
	});
});
function criarEstrelaPiscante() {
    const estrela = document.createElement('div');
    estrela.className = 'estrela-piscante';
    estrela.style.left = Math.random() * window.innerWidth + 'px';
    estrela.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(estrela);
    setTimeout(() => estrela.remove(), 4000 + Math.random() * 2000);
}

setInterval(() => {
    criarEstrelaPiscante();
}, 500);
