let dropdownMode = false;
let currentMenu = 0;

function tA(list,ctype) {
	if (dropdownMode) {
		list.add(ctype);
	} else {
		list.remove(ctype);
	}
}

function toggleActive() {
	dropdownMode = !dropdownMode;
	tA(document.querySelector("nav .menu span.first").classList,'active');
	tA(document.querySelector("nav .menu span.second").classList,'active');
	tA(document.querySelector("nav .menu span.third").classList,'active');
	tA(document.querySelector("nav>.dropdown").classList,'active');
	if (dropdownMode) {
		clearHorizon();
	}
}

function adjustTabs() {
	let tabs = document.querySelectorAll('.recommend.fourth .middle .tabs >li');
	let items = document.querySelectorAll('.recommend.fourth .middle .items');

	function clearTabs() {
		for(let i = 0;i<tabs.length;i++) {
			tabs[i].classList.remove('active');
			items[i].classList.remove('active');
		}
	}

	tabs.forEach((tab,i)=>{
		tab.addEventListener('click',()=>{
			if (tab.classList.contains('active')) {return;}
			clearTabs();
			tab.classList.add('active');
			items[i].classList.add('active');
		});
	});

	tabs[0].classList.add('active');
	items[0].classList.add('active');

	let lists = document.querySelectorAll("nav .left>li>a");
	lists.forEach((list,index) => {
		list.addEventListener('mouseenter',()=>{
			displayHorizon(index,true);
		});
	});
	document.querySelector("nav>.dropdown").addEventListener('mouseleave',()=>{
		if (currentMenu>-1) {
			clearHorizon();
		}
	});
}

function clearHorizon() {
	let lists = document.querySelectorAll("nav .dropdown .menuvertical");
	lists.forEach((list)=>{
		list.classList.remove('horizon');
		list.classList.remove('hidden');
	})
	document.querySelector("nav>.dropdown").classList.remove('horizon');
	if(!dropdownMode) {
		document.querySelector("nav>.dropdown").classList.remove('active');
	}
	currentMenu = -1;
}

function hideHorizon() {
	let lists = document.querySelectorAll("nav .dropdown .menuvertical");
	lists.forEach((list)=>{
		list.classList.add('hidden');
	})
}

function displayHorizon(num) {
	if(!dropdownMode) {
		clearHorizon();
		hideHorizon();
		document.querySelector("nav>.dropdown").classList.add('active');
		document.querySelector("nav>.dropdown").classList.add('horizon');
		document.querySelectorAll("nav .dropdown .menuvertical")[num].classList.add('horizon');
		document.querySelectorAll("nav .dropdown .menuvertical")[num].classList.remove('hidden');
		currentMenu = num;
	}
}

function init() {
	adjustTabs();
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		// scrollbar: {
		//   el: '.swiper-scrollbar',
		// },
	  });
}

init();