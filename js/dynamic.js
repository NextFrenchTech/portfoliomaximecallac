/*random chars text*/

const effectElement = document.querySelector(".effect");

effectElement.addEventListener("mouseover", applyEffect);

function applyEffect(e) {
	const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let i = 0;
    
	const interval = setInterval(() => {
        effectElement.innerText = effectElement.innerText
            .split("")
            .map((c, idx) => {
                if (idx < i) return e.target.dataset.value[idx];
                return alphabets[Math.floor(Math.random() * 26)];
            })
            .join("");
		
		if(i>=e.target.dataset.value.length) clearInterval(interval);
		i += 1/5;
		
	}, 75);
};