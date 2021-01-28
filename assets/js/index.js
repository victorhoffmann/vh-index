const btnSwitch = document.getElementById('btnSwitch');

btnSwitch.addEventListener('change', () => {
	document.body.classList.toggle('light');
});