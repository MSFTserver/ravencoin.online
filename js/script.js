// GENERAL VARIABLES ---------------
const theBody = document.getElementsByTagName('body')[0],
	navigationPanel = document.getElementsByClassName('navigation')[0],
	navigationLinks = document.getElementById('nav-links'),
	backToTop = document.getElementById('back-to-top');

// SIDEBAR NAVIGATION TOGGLE -------
const sidebarToggleButton = document.getElementsByClassName('menu-btn'),
	sidebarToggle = sidebarToggleButton[0];

// SERVICES DETAILS BUTTONS --------
const designDevelopment = document.getElementById('design-development'),
	ecommerce = document.getElementById('ecommerce'),
	marketing = document.getElementById('marketing');

const allServices = [designDevelopment, ecommerce, marketing];

// SIDEBAR LINKS & SECTION IDs -------------------
let linkItems = ['go-home', 'go-about', 'go-services', 'go-portfolio', 'go-important-links'],
	linkSections = ['home-section', 'about-section', 'services-section', 'portfolio-section', 'important-links-section'];

function openNavMenu() {
	navigationPanel.classList.add('shown');
	navigationLinks.classList.add('slide-in');
	sidebarToggle.classList.add('pressed');
	theBody.classList.add('no-scroll');
}

function closeNavMenu() {
	navigationLinks.classList.add('slide-out');
	setTimeout(() => {
		navigationLinks.classList.remove('slide-in');
		navigationPanel.classList.remove('shown');
		navigationLinks.classList.remove('slide-out');
		theBody.classList.remove('no-scroll');
	}, 300);
	sidebarToggle.classList.remove('pressed');
};

sidebarToggle.addEventListener("click", () => {
	if (navigationPanel.classList.contains('shown')) {
		closeNavMenu();
	} else {
		openNavMenu();
	}
});

function outsideNavMenuClick(e) {
	if (e.target == navigationPanel) {
		closeNavMenu();
	};
};

window.addEventListener('click', outsideNavMenuClick);

// MODAL POPUP FOR SERVICES --------
const modalServices = document.getElementsByClassName('modal-services')[0],
	closeModal = document.getElementsByClassName('modal-popup-close')[0],
	modalWrapper = document.getElementById('modal-wrapper');

const detailsDiv = document.getElementById('service-details');

let currentService = [];

const devHTML = `<div class="col-12 title-section">
<h4 class="service-title">Asset Layer</h4>
</div>
<h4 class="col-12 text-blue">Comming Soon!</h4>
<div class="col-12 col-lg-6 skill">
<img src="img/responsive.png" alt="Asset Layer" class="image">
<h5 class="name">What are Assets?</h5>
<p class="desc">Assets are tokens that can be issued by users of the Raven protocol without the need to be mined. Users create these assets and decide their purpose and rules independent of the protocol. tokens are transferable and move with the same ease as other similarly functioning cryptocurrencies. In Ravencoin, an asset is just a limited quantity of a unique symbol, and transferable to any Ravencoin address. Assets created on the Raven protocol have several advantages: they are easier to use, tightly integrated with a native coin, and secured with fair POW mining and open source code not run by a centralized organization.</p>
</div>
<div class="col-12 col-lg-6 skill">
<img src="img/quality.png" alt="the system" class="image">
<h5 class="name">the Solution</h5>
<p class="desc">
bitcoin-like system that is fully asset aware. A system being asset aware provides two major advantages. First, it allows the client and RPC commands to protect the asset from being destroyed accidentally. Second, it allows a single native client to issue, track, and transfer the assets. Lastly, to provide security for the underlying assets, the bitcoin-like system functions only with a market value, a strong mining community, and wide distribution. Token names are guaranteed unique. The first to issue a token with a given name is the owner of that token project. The issuer of a token burns RVN and must provide a unique token name. The issuer determines the quantity issued, the number of decimal places, and whether they will be allowed to issue more of the same token in the future.</p>
</div>`;

const ecomHTML = `<div class="col-12 title-section">
<h4 class="service-title">x16r Algorithm</h4>
</div>
<div class="col-12 col-lg-6 skill">
<img src="img/partner.png" alt="Shopify Partner" class="image">
<h5 class="name">Asic Resistant</h5>
<p class="desc">The hashing algorithms are the same proven algorithms used in X15 + SHA512, but the ordering is changed based on the hash of the previous block. This reordering does not make an ASIC impossible to build, but it does require that the ASIC adapts to additional input, which is more easily accomplished by a CPU or GPU.
<br><br>
The X16R hashing algorithm consists of 16 hashing algorithms operating in chain fashion with the ordering dependent on the last 8 bytes (16 nibbles) of the hash of the previous block.
<br><br>
algorithms are as follows:</p>
<div class="algoLists">
<ul class="algoList">
	<li>0=blake</li>
	<li>1=bmw</li>
	<li>2=groestl</li>
	<li>3=jh</li>
</ul>
<ul class="algoList">
	<li>4=keccak</li>
	<li>5=skein</li>
	<li>6=luffa</li>
	<li>7=cubehash</li>
</ul>
<ul class="algoList">
	<li>8=shavite</li>
	<li>9=simd</li>
	<li>A=echo</li>
	<li>B=hamsi</li>
</ul>
<ul class="algoList">
	<li>C=fugue</li>
	<li>D=shabal</li>
	<li>E=whirlpool</li>
	<li>F=sha512</li>
</ul>
</div>
</div>
<div class="col-12 col-lg-6 skill">
<img src="img/tailored.png" alt="Hash order Example" class="image">
<h5 class="name">Hash order Example</h5>
<p class="desc">While chaining more algorithms together adds difficulty in constructing an ASIC, the X13, X15, and X17 all use the same ordering of hashing algorithms as the X11. This is likely to lead to faster manufacturing of ASICs for these algorithms as manufacturers only need to extend their existing design to accommodate the additional hashing algorithms.</p>
Previous Block Hash:
<br>
<b>0000000000000000007e8a29f052ac2870045ae3970270f97da00919b8e86287</b>
​<br>
The final 8 bytes: <b>7da00919b8e86287</b>
​<br>
Each hex digit (nibble) determines which algorithm to use next.
​<br>
cubehash -> shabal -> echo -> blake -> blake -> simd -> bmw -> simd -> hamsi ->
shavite -> whirlpool -> shavite -> luffa -> groestl -> shavite -> cubehash
</div>`;

const marketHTML = `<div class="coming-soon"><h2>COMING SOON! <span class="text-blue">:)</span></h2></div>`;

window.addEventListener('click', outsideModalClick);

function outsideModalClick(e) {
	if (e.target == modalServices) {
		closeModalWindow();
	};
};

function identifyService() {
	let reqService = currentService[0].id;
	if (reqService === 'design-development') {
		detailsDiv.innerHTML = devHTML;
	} else if (reqService === 'ecommerce') {
		detailsDiv.innerHTML = ecomHTML;
	} else if (reqService === 'marketing') {
		detailsDiv.innerHTML = marketHTML;
	} else {
		// console.log('FAILLLL')
	}
};

function openModalWindow() {
	modalServices.classList.add('shown');
	modalWrapper.classList.add('slide-in-modal');
	theBody.classList.add('no-scroll');
};

function closeModalWindow() {
	modalWrapper.classList.add('slide-out-modal');
	setTimeout(() => {
		modalWrapper.classList.remove('slide-out-modal');
		modalServices.classList.remove('shown');
		modalWrapper.classList.remove('slide-out-modal');
		theBody.classList.remove('no-scroll');
	}, 500);
	currentService.length = 0;
};

function changeModalContent(e) {
	currentService.length = 0;
	currentService.push(e);
	identifyService();
};

allServices.forEach((i) => {
	let $dis = i;
	i.addEventListener('click', () => {
		openModalWindow();
		changeModalContent($dis);
	});
});

closeModal.addEventListener('click', (i) => {
	i.preventDefault();
	closeModalWindow();
});

// ACTIVATING NAVBAR LINKS
(() => {
	for (i = 0; i < linkItems.length; i++) {
		let currentLink = `#${linkItems[i]}`,
			currentSection = `#${linkSections[i]}`;
		$(currentLink).click((i) => {
			i.preventDefault();
			closeNavMenu();
			$('html, body').animate({
				scrollTop: $(currentSection).offset().top
			}, 1000);
		});
	};
})();

// SCRIPS TO LOAD ONCE THE PAGE IS LOADED
window.addEventListener('load', () => {
	// PRELOADER ANIMATION
	setTimeout(
		function() {
	let preloader = document.getElementById('preloader');
	preloader.classList.add('animated');
	setTimeout(() => {
		preloader.classList.remove('shown');
		theBody.classList.remove('no-scroll');
	}, 300);
	// SCROLLREVEAL CONFIG
	window.sr = ScrollReveal();

	function grabElements(elem){
		return document.getElementsByClassName(elem);
	}

	let fadeInLeft = grabElements('fadeInLeft'),
		fadeInRight = grabElements('fadeInRight'),
		fadeIn = grabElements('fadeIn'),
		fadeInBottom = grabElements('fadeInBottom');

	sr.reveal(fadeInLeft, {
		duration: 1500,
		origin: 'left',
		distance: '50vw',
		scale: 1
	});

	sr.reveal(fadeInRight, {
		duration: 1500,
		origin: 'right',
		distance: '50vw',
		scale: 1
	});

	sr.reveal(fadeIn, {
		duration: 1500,
		origin: 'bottom'
	}, 200);

	sr.reveal(fadeInBottom, {
		duration: 1500,
		origin: 'bottom',
		distance: '50vh'
	}, 50);
	}, 5000);
});
