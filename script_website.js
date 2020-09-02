/*=========================================*
 * Top (Header) Navigation Menu - [Start] *
 *=========================================*/
//Main arrMenu for Header + Footer reference
const arrMenu = ["index", "Blog", "About", "Policy", "Terms", "Contact"];

//Places duplicated to every HTML Pages' Headers
function headerMenu() {
  let navHeader = `<nav id="myTopnav">
  <a href="index.html"> <img src="../images/Logo/bolt-tech-logo.png" class="menu-logo"></a>`;
  
  //Places HTML files from JS to each HTML Pages actives
  var path = window.location.pathname,
  page = path.split("/").pop(),
  filename = page.split(".")[0];
  
  //Loop menu to every [highlighted] active pages | Reference from line 4
  arrMenu.forEach(element => {
    let classActive = (element == filename) ? 'class="active"' : '';
    
    if (element == arrMenu[0]) {
      navHeader += `<a href="${element}.html" ${classActive}>Home</a>`;
    }
    else { navHeader += `<a href="${element}.html" ${classActive}>${element}</a>`; }
  });

  //Responsive Menu & Search Function
  navHeader += ` 
      <a href="javascript:void(0);" class="icon" id="menu-icon">
        <i class="fa fa-bars"></i>
      </a>
      <!-- Website Search -->
      <div class="search-container">
        <form action="#">
          <input type="text" placeholder="Search.." name="search" required>
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    </nav>`;
  document.querySelector('header').innerHTML = navHeader;
}
headerMenu();

//Responsive header menu icon button in mobile
document.getElementById("menu-icon").addEventListener('click', function() {
  var navMenu = document.getElementById("myTopnav");
  if (navMenu.className === "nav") {
    navMenu.className += " responsive";
  } else {
    navMenu.className = "nav";
  }
});
/*=======================================*
 * Top (Header) Navigation Menu - [End] *
 *======================================*/

/*=============================*
 * (Contact) Form Page [Start] *
 *=============================*/

//To show Error Message when not filled in.
function validateForm() {
  const contactValidate = document.getElementById("contactForm"),
  fname = document.getElementById("fname").value,
  lname = document.getElementById("lname").value,
  phone = document.getElementById("phone").value,
  mail = document.getElementById("mail").value,
  country = document.getElementById("country").value,
  subject = document.getElementById("subject").value;

  //Validation Details
  errorFName = document.getElementById("errorFName");
  if (fname == "") {
    errorFName.innerHTML = "[ Enter your name! ]";
    console.log(contactValidate);
  }

  errorLName = document.getElementById("errorLName");
  if (lname == "") {
    errorLName.innerHTML = "[ Enter your last name! ]";
    console.log(contactValidate);
  }

  errorPhone = document.getElementById("errorPhone");
  if (phone == "") {
    errorPhone.innerHTML = "[ Enter your phone number! ]";
    console.log(contactValidate);
  }

  errorMail = document.getElementById("errorMail");
  if (mail == "") {
    errorMail.innerHTML = "[ Enter your email address! ]";
    console.log(contactValidate);
  }

  errorCountry = document.getElementById("errorCountry");
  if (country == "") {
    errorCountry.innerHTML = "[ Select your Country! ]";
    console.log(contactValidate);
  }

  errorSubject = document.getElementById("errorSubject");
  if (subject == "") {
    errorSubject.innerHTML = "[ Enter your message! ]";
    console.log(contactValidate);
  }

alert(`===================
Please fill in your forms.
===================`);
}
/*==========================*
 * (Contact) Form Page [End]
 *==========================*/

/*===========================*
 * Bottom (Footer) - [Start] *
 *===========================*/
function footerBottom() {
  let footerMenu = `
  <div class="footer-left">
  <span class="footer-heading">Bolt-Tech</span>
  <p class="footer-links"> |`;

//Reference from line 4 const arrMenu
  arrMenu.forEach(element => {
    //footerMenu += `<a href="${element}.html">${element}</a> |`;

    if (element == arrMenu[0]) {
      footerMenu += `<a href="${element}.html">Home</a> |`;
    }
    else { footerMenu += `<a href="${element}.html">${element}</a> |`; }
  });

  //Footer Icons & Info Details
  footerMenu += `
  </p>
      <p class="footer-company-name">Bolt-Tech created by Alaa Murrar &copy; ${new Date().getFullYear()}. All rights reserved.</p>
    </div>

    <div class="footer-center">

      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>[Location]</span> [City], [Country]</p>
      </div>

      <div>
        <i class="fa fa-phone"></i>
        <p>+123 45 678901</p>
      </div>

      <div class="mail-box">
        <i class="fa fa-envelope"></i>
        <p class="mail-button"><a href="mailto:contact@bolt-tech.com">contact@bolt-tech.com</a></p>
      </div>

    </div>

    <div class="footer-right">

      <p class="footer-company-about">
        <span>About the company</span>
        Bolt-Tech is a blog for tech-savvy and technology enthusiast whom interest in learning about latest news &amp;
        shopping in our site.
      </p>

      <div class="footer-icons">

        <a href="#"><i class="fa fa-facebook" id="social-icons"></i></a>
        <a href="#"><i class="fa fa-twitter" id="social-icons"></i></a>
        <a href="#"><i class="fa fa-github" id="social-icons"></i></a>
        <a href="#"><i class="fa fa-linkedin" id="social-icons"></i></a>

      </div>
    </div>`;

  document.querySelector('.footer-distributed').innerHTML = footerMenu;
}
footerBottom();
/*========================*
* Bottom (Footer) - [End] *
*=========================*/