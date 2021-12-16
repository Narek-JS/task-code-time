const SECTION_6_BOXES_DATA = [
    {
        title:'Education',
        subtitle:'Brief price Description',
        img:'./assets/images/img1section5.png',
        money:'0',
        moneyIcon: '$',
        count:'per/month',
        lists:[
            'Only 2 Operators',
            'Abandoned Cart',
            'Facebook & Instagram Ads',
            'Order Notifications',
            'Landing Pages'
        ],
        buttonText:'Order Now'
        
    },
    {
        title:'Professional',
        subtitle:'Brief price Description',
        img:'./assets/images/img2section5.png',
        money:'10',
        moneyIcon: '$',
        count:'per/month',
        lists:[
            'Only 2 Operators',
            'Abandoned Cart',
            'Facebook & Instagram Ads',
            'Order Notifications',
            'Landing Pages'
        ],
        buttonText:'Order Now'
        
    },
    {
        title:'Business',
        subtitle:'Brief price Description',
        img:'./assets/images/img3section5.png',
        money:'99',
        moneyIcon: '$',
        count:'per/month',
        lists:[
            'Only 2 Operators',
            'Abandoned Cart',
            'Facebook & Instagram Ads',
            'Order Notifications',
            'Landing Pages'
        ],
        buttonText:'Order Now'
        
    },
];
const SECTION_2_BOXES_DATA = [
  {
    title: 'Management',
    svg:`<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7857 17.7833L7.49714 11.4617L11.66 7.25717L17.919 13.6086L13.7857 17.7833ZM34.4524 0.190063V9.13577H28.5476V0.190063H34.4524ZM55.5029 11.4617L49.2143 17.7833L45.081 13.6086L51.34 7.25717L55.5029 11.4617ZM9.35714 28.5181V34.4819H0.5V28.5181H9.35714ZM53.6429 28.5181H62.5V34.4819H53.6429V28.5181ZM13.7857 56.8462H49.2143C50.7803 56.8462 52.2822 57.4745 53.3896 58.5929C54.4969 59.7114 55.119 61.2283 55.119 62.81H7.88095C7.88095 61.2283 8.50306 59.7114 9.61042 58.5929C10.7178 57.4745 12.2197 56.8462 13.7857 56.8462ZM31.5 12.1177C36.1981 12.1177 40.7038 14.0027 44.0259 17.3579C47.348 20.7132 49.2143 25.264 49.2143 30.0091V53.8643H13.7857V30.0091C13.7857 25.264 15.652 20.7132 18.9741 17.3579C22.2962 14.0027 26.8019 12.1177 31.5 12.1177Z" fill="#03D6F3"/>
        </svg>`,
  },
  {
    title: 'Customer Support',
    svg:`<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5 26.9899C31.4309 26.9899 32.3238 27.3597 32.982 28.018C33.6403 28.6762 34.0101 29.5691 34.0101 30.5C34.0101 31.4309 33.6403 32.3238 32.982 32.982C32.3238 33.6403 31.4309 34.0101 30.5 34.0101C29.5691 34.0101 28.6762 33.6403 28.018 32.982C27.3597 32.3238 26.9899 31.4309 26.9899 30.5C26.9899 29.5691 27.3597 28.6762 28.018 28.018C28.6762 27.3597 29.5691 26.9899 30.5 26.9899ZM3.19132 3.19132C8.21078 -1.82814 19.0921 0.418328 30.5 7.89487C41.9079 0.418328 52.7892 -1.82814 57.8087 3.19132C62.8281 8.21078 60.5817 19.0921 53.1051 30.5C60.5817 41.9079 62.8281 52.7892 57.8087 57.8087C52.7892 62.8281 41.9079 60.5817 30.5 53.1051C19.0921 60.5817 8.21078 62.8281 3.19132 57.8087C-1.82814 52.7892 0.418328 41.9079 7.89487 30.5C0.418328 19.0921 -1.82814 8.21078 3.19132 3.19132ZM42.9258 18.0742C45.067 20.2505 47.0326 22.4618 48.8579 24.6732C53.7018 17.1967 55.4569 10.7732 52.8243 8.17568C50.2268 5.54309 43.8033 7.29815 36.3268 12.1421C38.5382 13.9674 40.7495 15.933 42.9258 18.0742ZM18.0742 42.9258C15.933 40.7495 13.9674 38.5382 12.1421 36.3268C7.29815 43.8033 5.54309 50.2268 8.17568 52.8243C10.7732 55.4569 17.1967 53.7018 24.6732 48.8579C22.4618 47.0326 20.2505 45.067 18.0742 42.9258ZM8.17568 8.17568C5.54309 10.7732 7.29815 17.1967 12.1421 24.6732C13.9674 22.4618 15.933 20.2505 18.0742 18.0742C20.2505 15.933 22.4618 13.9674 24.6732 12.1421C17.1967 7.29815 10.7732 5.54309 8.17568 8.17568ZM23.0586 37.9414C25.5156 40.3985 28.0429 42.645 30.5 44.6458C32.9571 42.645 35.4844 40.3985 37.9414 37.9414C40.3985 35.4844 42.645 32.9571 44.6458 30.5C42.645 28.0429 40.3985 25.5156 37.9414 23.0586C35.4844 20.6015 32.9571 18.355 30.5 16.3542C28.0429 18.355 25.5156 20.6015 23.0586 23.0586C20.6015 25.5156 18.355 28.0429 16.3542 30.5C18.355 32.9571 20.6015 35.4844 23.0586 37.9414ZM52.8243 52.8243C55.4569 50.2268 53.7018 43.8033 48.8579 36.3268C47.0326 38.5382 45.067 40.7495 42.9258 42.9258C40.7495 45.067 38.5382 47.0326 36.3268 48.8579C43.8033 53.7018 50.2268 55.4569 52.8243 52.8243Z" fill="white"/>
        </svg> `,
    },
  {
    title: 'Collaborative',
    svg:`<svg width="63" height="53" viewBox="0 0 63 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M51.5873 26.5H45.9109V35.0145H37.3964V40.6909H51.5873V26.5ZM17.5291 17.9855H26.0436V12.3091H11.8527V26.5H17.5291V17.9855ZM57.2636 0.956421H6.17636C4.6709 0.956421 3.22709 1.55446 2.16257 2.61899C1.09804 3.68351 0.5 5.12731 0.5 6.63277V46.3672C0.5 47.8727 1.09804 49.3165 2.16257 50.381C3.22709 51.4455 4.6709 52.0436 6.17636 52.0436H57.2636C58.7691 52.0436 60.2129 51.4455 61.2774 50.381C62.342 49.3165 62.94 47.8727 62.94 46.3672V6.63277C62.94 5.12731 62.342 3.68351 61.2774 2.61899C60.2129 1.55446 58.7691 0.956421 57.2636 0.956421ZM57.2636 46.3672H6.17636V6.63277H57.2636V46.3672Z" fill="#03D6F3"/>
        </svg>`,
  }
];
const LISTS_IN_FOOTER = [
  ['Price Item One', 'Price Item One', 'Price Item One'],
  ['Price Item One', 'Price Item One', 'Price Item One']
];
const PATHS_TO_SOCIAL_NETWORKS = {
  twinter:{
    path:'https://best-developer.netlify.app',
    icon:`<svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.645 4.18529C32.4202 4.71364 31.0873 5.09388 29.7144 5.24198C31.1398 4.39517 32.2072 3.05736 32.7164 1.47954C31.3788 2.27521 29.9136 2.83315 28.3855 3.12861C27.7469 2.44587 26.9745 1.90197 26.1165 1.5308C25.2585 1.15963 24.3332 0.969143 23.3983 0.971208C19.6159 0.971208 16.5739 4.0372 16.5739 7.79964C16.5739 8.32798 16.6379 8.85632 16.742 9.36465C11.0783 9.06846 6.02705 6.36271 2.66887 2.22002C2.05697 3.26516 1.73632 4.45517 1.74026 5.66625C1.74026 8.03579 2.94505 10.1251 4.78224 11.3539C3.69955 11.3113 2.64222 11.0137 1.69624 10.4854V10.5694C1.69624 13.8876 4.04176 16.6374 7.16779 17.2698C6.58084 17.4222 5.97704 17.5002 5.37062 17.5019C4.92633 17.5019 4.50606 17.4579 4.08178 17.3979C4.94634 20.1036 7.46398 22.0689 10.4619 22.1329C8.1164 23.9701 5.17849 25.0508 1.98843 25.0508C1.41605 25.0508 0.887711 25.0308 0.339355 24.9668C3.36532 26.908 6.95565 28.0288 10.8222 28.0288C23.3743 28.0288 30.2428 17.63 30.2428 8.60416C30.2428 8.30797 30.2428 8.01178 30.2227 7.71558C31.5516 6.74295 32.7164 5.53817 33.645 4.18529Z" fill="white"/>
          </svg>`
  },
  facebook:{
    path:'https://www.facebook.com/narek.petrosyan.52012',
    icon:`<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.7103 0.489746H2.25117C1.54271 0.489746 0.970337 1.06212 0.970337 1.77058V31.2297C0.970337 31.9382 1.54271 32.5105 2.25117 32.5105H31.7103C32.4187 32.5105 32.9911 31.9382 32.9911 31.2297V1.77058C32.9911 1.06212 32.4187 0.489746 31.7103 0.489746ZM28.0119 9.83581H25.4542C23.4489 9.83581 23.0607 10.7884 23.0607 12.1893V15.2753H27.8478L27.2234 20.1065H23.0607V32.5105H18.0694V20.1105H13.8947V15.2753H18.0694V11.713C18.0694 7.57835 20.5951 5.32488 24.2855 5.32488C26.0546 5.32488 27.5716 5.45697 28.0159 5.51701V9.83581H28.0119Z" fill="white"/>
          </svg> `
  },
  linkdin:{
    path:'https://www.linkedin.com/in/narek-petrosyan-a70452216',
    icon:`<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.6981 0.489746H2.23896C1.5305 0.489746 0.95813 1.06212 0.95813 1.77058V31.2297C0.95813 31.9382 1.5305 32.5105 2.23896 32.5105H31.6981C32.4065 32.5105 32.9789 31.9382 32.9789 31.2297V1.77058C32.9789 1.06212 32.4065 0.489746 31.6981 0.489746ZM10.4563 27.7755H5.70521V12.4935H10.4563V27.7755ZM8.08275 10.4042C7.53811 10.4042 7.00569 10.2427 6.55283 9.94008C6.09997 9.63749 5.74701 9.20741 5.53859 8.70422C5.33016 8.20103 5.27562 7.64734 5.38188 7.11316C5.48813 6.57897 5.75041 6.08829 6.13553 5.70317C6.52066 5.31805 7.01133 5.05577 7.54552 4.94952C8.0797 4.84326 8.63339 4.8978 9.13658 5.10623C9.63977 5.31465 10.0699 5.66761 10.3724 6.12047C10.675 6.57333 10.8365 7.10574 10.8365 7.65039C10.8325 9.17138 9.59974 10.4042 8.08275 10.4042ZM28.2438 27.7755H23.4968V20.3426C23.4968 18.5695 23.4647 16.292 21.0272 16.292C18.5576 16.292 18.1773 18.2213 18.1773 20.2145V27.7755H13.4342V12.4935H17.9892V14.5829H18.0532C18.6856 13.3821 20.2346 12.1133 22.5481 12.1133C27.3593 12.1133 28.2438 15.2793 28.2438 19.394V27.7755Z" fill="white"/>
          </svg>`
  }
}
const MANUE_LISTS = ['Home', 'Product', 'About', 'Contact'];

const iconLocation = document.querySelector('.icon-location');
const headerManueUl = document.querySelector('.header__manu ul');
const headerMobileManueUl = document.querySelector('.header__mobile-manu__navbar ul');

const singUpBtn = document.querySelector('.headar-btn');
const logo = document.querySelector('.logo');
const iconMobileMenuIcon = document.querySelector('.header__mobile-manu__icon');
const navBar = document.querySelector('.header__mobile-manu__navbar')
const section6ContentBoxes = document.querySelector('.section6-content__wrapper-boxes');
const section2ContentBoxes = document.querySelector('.section2-content__wrapper-boxes');
const navBarInFooter = document.querySelector('.footer-box-1 nav');
const pathToSocialNetworks = document.querySelector('.footer__contact__wrapper-3');
let map, infoWindow;


const templateSection6ContentBoxes = `
    <div class="section6-content__wrapper-boxes__box" >
        <h3 class="title">/-/title/-/</h3>  
        <span>Brief price Description</span>    
        <img src="/-/path/-/" alt="image">
        <div class="section6-content__wrapper-boxes__box__money">
            <div>
                <span class="num">/-/num/-/</span>
                <span class="dollars">$</span>
            </div>
            <span class="costom">Per/ month</span>
        </div>
        <ul>/-/lists/-/</ul>
        <button class="btn blue-btn" type='button'>Learn More</button>
    </div>
`;
const templateSection2ContentBoxes = `
  <div class="section2-content__wrapper-boxes__box" >
    /-/svg/-/
    <h3 class="title">/-/title/-/</h3>      
    <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>                       
    <a href="#">Learn More</a>
  </div>
`;
const templateUlInNavBar = `
  <ul>/-/lists-1/-/</ul>
  <ul>/-/lists-2/-/</ul>
`;

for(let i = 0; i < MANUE_LISTS.length; i++){
  const leis = `<li>${MANUE_LISTS[i]}</li>`;

  headerManueUl.insertAdjacentHTML('beforeend', leis);
  headerMobileManueUl.insertAdjacentHTML('beforeend', leis);
}
for(let i = 0; i < SECTION_2_BOXES_DATA.length; i++){
  let section = templateSection2ContentBoxes
    .replace('/-/title/-/', SECTION_2_BOXES_DATA[i].title)
    .replace('/-/svg/-/', SECTION_2_BOXES_DATA[i].svg)

  section2ContentBoxes.insertAdjacentHTML('beforeend', section);
}

for(let i = 0; i < SECTION_6_BOXES_DATA.length; i++){
  let lists = ``;
  for(let j = 0; j < SECTION_6_BOXES_DATA[i].lists.length; j++) {
    lists += `<li>${SECTION_6_BOXES_DATA[i].lists[j]}</li> `
  }

  let section = templateSection6ContentBoxes
    .replace('/-/title/-/', SECTION_6_BOXES_DATA[i].title)
    .replace('/-/path/-/', SECTION_6_BOXES_DATA[i].img)
    .replace('/-/num/-/', SECTION_6_BOXES_DATA[i].money)
    .replace('/-/lists/-/', lists)
      
  section6ContentBoxes.insertAdjacentHTML('beforeend', section);
}

const createUlForFooter = (function () {
  let lists1 = '';
  let lists2 = '';
  for(let i = 0; i <= LISTS_IN_FOOTER.length; i++){
    lists1 += `<li>${LISTS_IN_FOOTER[0][i]}</li> `;
    lists2 += `<li>${LISTS_IN_FOOTER[1][i]}</li> `
  }
  let section = templateUlInNavBar
      .replace('/-/lists-1/-/', lists1)
      .replace('/-/lists-2/-/', lists2);

  navBarInFooter.insertAdjacentHTML('beforeend', section);
})();

const createPathsToSocialNetworks = (function () {
  const keys = Object.keys(PATHS_TO_SOCIAL_NETWORKS);

  for(let i = 0; i < keys.length; i++) {
    const aTag = document.querySelector('a');
    aTag.target = '_blank';
    aTag.href = PATHS_TO_SOCIAL_NETWORKS[keys[i]].path;
    aTag.innerHTML = '';
    aTag.insertAdjacentHTML('beforeend', PATHS_TO_SOCIAL_NETWORKS[keys[i]].icon);
    pathToSocialNetworks.appendChild(aTag)
  }
})();

iconMobileMenuIcon.addEventListener('click', () => {
  if(navBar.classList.value.indexOf('header__mobile-manu__navbar__activ') !== -1) {
    navBar.classList.value = 'header__mobile-manu__navbar';
    singUpBtn.classList.remove('headar-btn__activ');
    singUpBtn.classList.add('headar-btn');
    logo.classList.remove('logo__activ');
    logo.classList.add('logo');
  }else {
    navBar.classList.value = 'header__mobile-manu__navbar__activ';
    singUpBtn.classList.add('headar-btn__activ') 
    singUpBtn.classList.remove('headar-btn') 
    logo.classList.add('logo__activ');
    logo.classList.remove('logo');
  }
})

getStartedBtn.addEventListener('click',() => {
  location.href = location.href +"?tandz"
})



function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  const findCurentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }
  locationButton.addEventListener("click", () => {
    findCurentLocation()
  });
  iconLocation.addEventListener("click", () => {
    findCurentLocation()
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
