
const menu = [
	{
		id: 1,
		new:'신제품',
		title: 'DIOR BOOK TOTE 미디엄 백',
		category: 'fabric',
		price: 'w 4.550.000',
		img: "./img/1681232710_M1296ZEUP_M041_E01_GH.avif",
		desc: '화이트 & 블랙 Toile de Jouy Voyage 자수 (36 x 27.5 x 16.5cm)',
		hoverImg: "./img/1681232710_M1296ZEUP_M041_E03_GH.avif"
	},
	{
		id: 2,
		new:'신제품',
		title: 'LADY D-LITE 미디엄 백',
		category: 'fabric',
		price: 'w 6.400.000',
		img: "./img/1681232712_M0565OEUP_M88E_E01_GH.avif",
		desc: '베이지 멀티 컬러 Toile de Jouy Voyage 자수',
		hoverImg: "./img/1681232712_M0565OEUP_M88E_E03_GH.avif"
	},
	{
		id: 3,
		new:'신제품',
		title: 'SADDLE 스트랩 백',
		category: 'leather',
		price: 'w 5.550.000',
		img: "./img/1681232727_M0455CBAA_M52U_E01_GH.avif",
		desc: '캐러멜 베이지 그레인 송아지 가죽',
		hoverImg: "./img/1681232727_M0455CBAA_M52U_E03_GH.avif"
	},
	{
		id: 4,
		new:'신제품',
		title: 'LADY D-JOY 미디엄 백',
		category: 'leather',
		price: 'w 7.100.000',
		img: "./img/1681232746_M0540OPEH_M900_E01_GH.webp",
		desc: '블랙 까나쥬 양가죽',
		hoverImg: './img/1681232746_M0540OPEH_M900_E03_GH.avif'
	},
	{
		id: 5,
		new:'신제품',
		title: 'DIOR BOOK TOTE 스몰 백',
		category: 'fabric',
		price: 'w 4.440.000',
		img: "./img/1681232768_M1265ZEUP_M041_E01_GH.avif",
		desc: '화이트 & 블랙 Toile de Jouy Voyage 자수 (26.5 x 21 x 14cm)',
		hoverImg: './img/1681232769_M1265ZEUP_M041_E03_GH.avif'
	},
	{
		id: 6,
		new:'신제품',
		title: 'DIOR BOOK TOTE 미디엄 백',
		category: 'fabric',
		price: 'w 4.550.000',
		img: "./img/1681232792_M1296ZEUP_M88E_E01_GH.avif",
		desc: '베이지 멀티 컬러 Toile de Jouy Voyage 자수 (36 x 27.5 x 16.5cm)',
		hoverImg: './img/1681232792_M1296ZEUP_M88E_E03_GH.avif'
	},
	{
		id: 7,
		new:'신제품',
		title: 'LADY DIOR MY ABCDIOR 스몰 백',
		category: 'leather',
		price: 'w 7.500.000',
		img: "./img/1681232808_M0538ONGE_M52U_E01_GH.avif",
		desc: '샌드 컬러 까나쥬 양가죽',
		hoverImg: './img/1681232809_M0538ONGE_M52U_E03_GH.avif'
	},
	{
		id: 8,
		new:'신제품',
		title: 'DIOR CARO 미디엄 백',
		category: 'leather',
		price: 'w 5.900.000',
		img: "./img/1681232817_M9242UWHC_M52U_E01_GH.avif",
		desc: '캐러멜 베이지 서플 까나쥬 송아지 가죽',
		hoverImg: './img/1681232817_M9242UWHC_M52U_E03_GH.avif'
	},
	{
		id: 9,
		new:'신제품',
		title: 'DIOR BOOK TOTE 미디엄 백',
		category: 'fabric',
		price: 'w 4.550.000',
		img: "./img/1681232821_M1296ZEBN_M933_E01_GH.avif",
		desc: '화이트 멀티 컬러 Etoile de Voyage 자수 (36 x 27.5 x 16.5cm)',
		hoverImg: './img/1681232821_M1296ZEBN_M933_E03_GH.avif'
	},
];

const itemList = document.querySelector('.item-list');
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
	displayMenuItem(menu);
	displayMenuButtons();
});

function displayMenuItem(menuItems) {
	let displayMenu = menuItems.map(function (item) {
		return `        <div class="item">
		<div class="bag-title">
		<p>${item.new}</p>
		</div>
		<div class="thum">
		<img src="${item.img}" onmouseover="changeImage(this, '${item.hoverImg}')" onmouseout="restoreImage(this)" />
		</div>
		<div class="bottom">
		<div class="bag-info">
				<p class="name">${item.title}</p>
				<p class="price">${item.price}</p>
		</div>
		<div class="size">
			<p class="desc">${item.desc}</p>
		</div>
		</div>
</div>`;
	});
	displayMenu = displayMenu.join("");
	itemList.innerHTML = displayMenu;
}

function displayMenuButtons() {
	// 카테고리 별로 분류
	const categoires = menu.reduce(function (values, item) {
		if (!values.includes(item.category)) {
			values.push(item.category);
		}
		return values;
	}, ["all"]); // all -> values

	const categoryBtns = categoires.map(function (category) {
		return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
	}).join("");
	btnContainer.innerHTML = categoryBtns;

	const filterBtns = btnContainer.querySelectorAll(".filter-btn");


	filterBtns.forEach(function (btn) {
		btn.addEventListener("click", function (e) {
			const category = e.currentTarget.dataset.id; // 내가 클릭한 카테고리의 id
			const menuCategory = menu.filter(function (menuItem) { // menu 1~9
				if (menuItem.category === category) {
					return menuItem;
				}
			});
			if (category === "all") {
				displayMenuItem(menu);
			} else {
				displayMenuItem(menuCategory);
			}
		});
	});
};


function changeImage(element, hoverImg) {
  element.dataset.src = element.src;// 현재 이미지의 URL을 data-src 속성에 저장
  element.src = hoverImg;// 호버 이미지로 변경
  const descElement = element.parentNode.parentNode.querySelector('.desc');
  descElement.classList.add('show');
};

function restoreImage(element) {
  if (element.dataset.src) {
    element.src = element.dataset.src;// 원래 이미지로 복원
  }
  const descElement = element.parentNode.parentNode.querySelector('.desc');
  descElement.classList.remove('show');
};
