const fashionTitle = document.querySelector('.fashion_title');
const fashionLi = document.querySelector('.fashion li');


window.addEventListener('DOMContentLoaded', function () {
	fashionTitle.classList.add('active');


	const win = window,
		header = document.querySelector('.gnbList'),
		headerOffsetTop = header.offsetTop;

	win.addEventListener('scroll', function () {
		if (win.pageYOffset >= headerOffsetTop) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	});
});


fashionLi.addEventListener('mouseenter', function () {
	fashionLi.style.color = '#535353';
	fashionLi.style.fontWeight = 'normal';
});
fashionLi.addEventListener('mouseleave', function () {
	perfumeLi.style.color = '#535353';
	perfumeLi.style.fontWeight = 'normal'
});




document.addEventListener('DOMContentLoaded', function () {
	const menuToggleBtn = document.querySelector('.bar');
	const gnb = document.querySelector('.gnbList');
	const closeBtn = document.querySelector('.close_btn');
	const title = document.querySelector('h1');

	menuToggleBtn.addEventListener('click', function () {
		fashionLi.style.color = '#535353';
		fashionLi.style.fontWeight = 'normal';
		gnb.classList.toggle('active');
		title.classList.toggle('show');
	});
	
	closeBtn.addEventListener("click", function () {
		fashionLi.style.color = '#535353';
		fashionLi.style.fontWeight = 'normal';
		gnb.classList.toggle('active');
		title.classList.toggle('show');
	});

});
