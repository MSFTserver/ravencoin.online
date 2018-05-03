// GENERAL VARIABLES ---------------
const theBody = document.getElementsByTagName('body')[0],
	navigationPanel = document.getElementsByClassName('navigation')[0],
	navigationLinks = document.getElementById('nav-links'),
	backToTop = document.getElementById('back-to-top');

// SIDEBAR NAVIGATION TOGGLE -------
const sidebarToggleButton = document.getElementsByClassName('menu-btn'),
	sidebarToggle = sidebarToggleButton[0];

// SERVICES DETAILS BUTTONS --------
const assets = document.getElementById('assets'),
	algo = document.getElementById('algo'),
	messaging = document.getElementById('messaging');
	voting = document.getElementById('voting');
	halving = document.getElementById('halving');

const allServices = [assets, algo, messaging, voting, halving];

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

const assetsHTML = `<div class="col-12 title-section">
<h4 class="service-title">Asset Layer</h4>
</div>
<h4 class="col-12 text-blue">Comming Soon!</h4>
<div class="col-12 col-lg-6 skill">
<img src="img/asset-layer.png" alt="Asset Layer" class="image">
<h5 class="name">What are Assets?</h5>
<p class="desc">Assets are tokens that can be issued by users of the Raven protocol without the need to be mined. Users create these assets and decide their purpose and rules independent of the protocol. tokens are transferable and move with the same ease as other similarly functioning cryptocurrencies. In Ravencoin, an asset is just a limited quantity of a unique symbol, and transferable to any Ravencoin address. Assets created on the Raven protocol have several advantages: they are easier to use, tightly integrated with a native coin, and secured with fair POW mining and open source code not run by a centralized organization.</p>
</div>
<div class="col-12 col-lg-6 skill">
<img src="img/quality.png" alt="the system" class="image">
<h5 class="name">the Solution</h5>
<p class="desc">
bitcoin-like system that is fully asset aware. A system being asset aware provides two major advantages. First, it allows the client and RPC commands to protect the asset from being destroyed accidentally. Second, it allows a single native client to issue, track, and transfer the assets. Lastly, to provide security for the underlying assets, the bitcoin-like system functions only with a market value, a strong mining community, and wide distribution. Token names are guaranteed unique. The first to issue a token with a given name is the owner of that token project. The issuer of a token burns RVN and must provide a unique token name. The issuer determines the quantity issued, the number of decimal places, and whether they will be allowed to issue more of the same token in the future.</p>
</div>`;

const algoHTML = `<div class="col-12 title-section">
<h4 class="service-title">x16r Algorithm</h4>
</div>
<div class="col-12 col-lg-6 skill">
<img src="img/asic.png" alt="asic" class="image">
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
<img src="img/miner.png" alt="Hash order Example" class="image">
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

const messagingHTML = `<div class="col-12 title-section">
<h4 class="service-title">Messaging Protocol</h4>
</div>
<h4 class="col-12 text-blue">Comming Soon!</h4>
<div class="col-12 col-lg-6 skill">
<img src="img/messaging.png" alt="messaging" class="image">
<h5 class="name">the Issue</h5>
<p class="desc">A common problem with tokens/assets is that the token issuer cannot communicate with the token holders. This must be handled very carefully because the token holders do not always wish to be identified. The communication should allow the token holder to opt-out at any time. The message system should only allow select parties to use the message channel so that it is not a spam conduit.</p></div>
<div class="col-12 col-lg-6 skill">
<img src="img/messaging.png" alt="messaging" class="image">
<h5 class="name">The Solution</h5>
<p class="desc">The messaging system uses unique tokens to allow communication on the main token channel. For example, the COMPANY token would have a ~COMPANY:Alert token which allows alerts to be sent to all holders of COMPANY.
<br>
Messaging to token holders by authorized senders will be layered on top of the unique assets. The unique assets will act as a "talking stick" allowing messages to be sent by the channel owner. The KAAAWWW Protocol will be published with more information on this separately.</p></div>`;

const voteHTML = `<div class="col-12 title-section">
<h4 class="service-title">Voting</h4>
</div>
<h4 class="col-12 text-blue">Comming Soon!</h4>
<div class="col-12 col-lg-6 skill">
<img src="img/voting.png" alt="messaging" class="image">
<h5 class="name">The process</h5>
<p class="desc">By using the messaging system, the holders of a token can be notified of the vote, and by automatically issuing a VOTE token to every holder of a token, the vote can be automated from the client or through a web or mobile interface using the protocol built into Ravencoin</p></div>
<div class="col-12 col-lg-6 skill">
<img src="img/voting.png" alt="messaging" class="image">
<h5 class="name">how it works</h5>
<p class="desc">Tokens are created to represent votes. Ravencoin will create an exact number of VOTE tokens and distribute them 1:1 to the token holders. These votes can be sent via the protocol to addresses that tally the votes. Because the voting tokens move the same way as assets, delegation of votes, sometimes known as delegative or liquid democracy is possible.</p></div>`;

const halveHTML = `<div class="col-12 title-section">
<h4 class="service-title">Halving</h4>
</div>
<div class="col-12 col-lg-6 skill">
<img src="img/halving.png" alt="messaging" class="image">
<h5 class="name">What is Halving</h5>
<p class="desc">Ravencoins are created each time a user discovers a new block. The rate of block creation is adjusted every 2016 blocks to aim for a constant 1.4 day adjustment period. The number of Ravencoins generated per block is set to decrease geometrically, with a 50% reduction every 2,100,000 blocks. The result is that the number of ravencoins in existence will not exceed slightly less than 21 billion.
<br>
Because the number of Ravencoins created each time a user discovers a new block (the block reward) is halved based on a fixed interval of blocks, and the time it takes on average to discover a block can vary based on mining power and the network difficulty, the exact time when the block reward is halved can vary as well. Consequently, the time the last Ravencoin will be created will also vary, and is subject to speculation based on assumptions. </p></div>
<div class="col-12 col-lg-6 skill">
<img src="img/halving.png" alt="messaging" class="image">
<h5 class="name">When?</h5>
<p class="desc">In Approximately 4 years at block 2,100,000 the halving will take place and the reward per block will drop from 5,000 to 2,500 Raven. This will continue with each subsequent 2,100,000 blocks until the reward amount can no longer be halved.</p></div>`;

window.addEventListener('click', outsideModalClick);

function outsideModalClick(e) {
	if (e.target == modalServices) {
		closeModalWindow();
	};
};

function identifyService() {
	let reqService = currentService[0].id;
	if (reqService === 'assets') {
		detailsDiv.innerHTML = assetsHTML;
	} else if (reqService === 'algo') {
		detailsDiv.innerHTML = algoHTML;
	} else if (reqService === 'messaging') {
		detailsDiv.innerHTML = messagingHTML;
	} else if (reqService === 'voting') {
		detailsDiv.innerHTML = voteHTML;
	} else if (reqService === 'halving') {
		detailsDiv.innerHTML = halveHTML;
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
}), particlesJS.load("home-section", "assets/particles.json", function() {
    console.log("callback - particles-js config loaded")
});
