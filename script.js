@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400");

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* ================= VARIABLE ================ */
:root {
  --primary-color: hsl(9, 94%, 61%);
  --primary-color-alt: hsl(28, 72%, 83%);
  --second-color: #3e537c;
  --second-color-alt: hsla(220, 33%, 36%, 65%);
  --third-color: hsl(220, 36%, 28%);
  --white-color: #fbfbfb;
  --white-color-alt: hsl(12, 14%, 93%);
  --dark-color: hsl(300, 100%, 0%);
}

/* ================= BASE ==================== */
li {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  height: auto;
}
.bx {
  font-size: 2.5rem;
}
.container {
  padding: 0 2rem;
}

.favicon {
	border-radius: 50%;
}

/* -- BODY -- */
body {
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  background-color: var(--white-color);
}

/* ================= HEADER ================ */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-color);
  padding: 1rem 2rem;
}
.company-logo {
  font-size: 2.5rem;
  background: -webkit-linear-gradient(
    120deg,
    var(--primary-color-alt),
    var(--primary-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nav-items {
  display: flex;
}
.nav-item {
  margin: 0 2rem;
}
.nav-link {
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  position: relative;
  background: -webkit-linear-gradient(
    var(--primary-color-alt),
    var(--primary-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nav-link::before {
  content: "";
  background: linear-gradient(var(--primary-color), var(--primary-color-alt));
  width: 100%;
  height: 0.05rem;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 150ms;
}
.nav-link:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.menu-toggle {
  display: none;
}
.bx-menu,
.bx-x {
  cursor: pointer;
  background: -webkit-linear-gradient(
    120deg,
    var(--primary-color-alt),
    var(--primary-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: none !important;
}

/* ================= MAIN ================ */

/* -------- HOME SECTION -------------- */
.section-1 {
  background-color: var(--dark-color);
  display: grid;
}
/* .home-computer-container {} */

.slogan {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-bottom: 9rem;
}

.slogan .company-title {
  background: -webkit-linear-gradient(
    120deg,
    var(--primary-color-alt),
    var(--primary-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.slogan .company-slogan {
  background: -webkit-linear-gradient(
    120deg,
    var(--primary-color-alt),
    var(--primary-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
}

/* -------- OFFER SECTION ------------- */
.section-2 {
  margin: 2rem 0;
}
.offer {
  background-color: var(--dark-color);
  margin: 1rem 0;
  display: grid;
}
.offer img {
  background-color: var(--dark-color);
  padding: 0;
}
.offer-1 img {
  background-color: var(--dark-color);
  padding: 0;
}
.offer-3 img {
  background-color: var(--dark-color);
  padding: 0;
}
.offer-description {
  background-color: var(--white-color-alt);
  padding: 0 1rem;
}
.offer-description .offer-title {
  color: var(--second-color);
  font-size: 1.8rem;
  font-weight: 400;
  padding: 1.5rem 0 0.5rem 0;
}
.offer-description .offer-hook {
  color: var(--second-color-alt);
  font-size: 1.2rem;
}
.offer-description .cart-btn {
  cursor: pointer;
  color: var(--second-color-alt);
  font-size: 1.1rem;
  display: grid;
  place-items: center;
  margin: 2rem 0 1rem 0;
  width: 10rem;
  height: 3rem;
  background-image: linear-gradient(
    to top,
    var(--primary-color-alt),
    var(--primary-color)
  );
}
.offer-description .cart-btn:hover {
  background-image: linear-gradient(
    to bottom,
    var(--primary-color-alt),
    var(--primary-color)
  );
}

/* -------- PRODUCT SECTION ----------- */
.section-3 {
  display: grid;
  place-items: center;
  justify-content: space-around;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
}
.product {
  cursor: pointer;
  background-color: var(--white-color-alt);
  position: relative;
}
.product::before {
  content: "";
  background-image: linear-gradient(
    to bottom,
    hsla(29, 72%, 83%, 0.438),
    hsla(9, 94%, 61%, 0.507)
  );
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.product_add_cart {
  color: var(--white-color-alt);
  font-size: 1.2rem;
  background-color: hsl(9, 94%, 65%);
  padding: 1rem 0.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 300ms, color 300ms, box-shadow 300ms;
}
.product_add_cart:hover {
  color: var(--white-color);
  box-shadow: 0 1rem 0 -0.5rem hsl(17, 79%, 65%, 0.7),
    0 2rem 0 -1rem hsla(17, 79%, 65%, 0.65);
}
.btn-fill {  
  color: black;
  transition: 0.25s;
  border: 2px solid;
  border-color: black;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
 align-items: center;
 justify-content: center;
  place-items: center;
  margin: 2rem 0 1rem 0;
  width: 10rem;
  height: 3rem;
            
  &:hover,
  &:focus { 
    box-shadow: inset 0 0 0 2em var(--primary-color);
    border-color: var(--primary-color);
    color: #fff;
  }
}

/* ========= SUBSCRIBE SECTION ========== */
.section-5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}
.subscribe-input-label {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  color: var(--second-color);
}
input[type="text"] {
  padding: 0 0.5rem;
  font-size: 1.1rem;
  width: 100%;
  height: 3rem;
  border: none;
  background-color: hsl(220, 33%, 90%);
  color: var(--second-color-alt);
  transition: background-color 300ms;
}
input[type="text"]:focus {
  outline: none;
  background-color: hsl(220, 33%, 95%);
}
input[type="text"]::placeholder {
  color: var(--second-color-alt);
}
input[type="submit"] {
  cursor: pointer;
  background-image: linear-gradient(
    to top,
    var(--primary-color-alt),
    var(--primary-color)
  );
  color: var(--white-color-alt);
  margin: 1rem 0;
  border: none;
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
  transition: color 300ms;
}
input[type="submit"]:hover {
  background-image: linear-gradient(
    to bottom,
    var(--primary-color-alt),
    var(--primary-color)
  );
  color: var(--white-color);
}
/* =============== FOOTER =============== */
.top-footer {
  background-color: var(--second-color);
  display: flex;
  flex-direction: column;
}
.footer-title {
  font-weight: 500;
  font-size: 1.2rem;
  padding: 1rem 0;
  background-image: -webkit-linear-gradient(
    120deg,
    var(--primary-color-alt),
    var(--primary-color)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.footer-items h3 {
  cursor: pointer;
  font-weight: 300;
  font-size: 1.1rem;
  padding: 0.1rem 0;
  color: var(--white-color-alt);
}
.footer-items h3:hover {
  text-decoration: underline;
}
.footer-items h3:last-child {
  padding-bottom: 2rem;
}

.end-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--third-color);
}
.copyright {
  color: var(--white-color-alt);
  padding: 1rem 0;
  font-size: 0.9rem;
}
.copyright b {
  font-weight: inherit;
  font-size: 0.9rem;
}
.designer {
  color: hsla(0, 0%, 98%, 0.541);
  padding-bottom: 0.5rem;
  font-size: 0.9rem;
}
.designer:hover {
  text-decoration: underline;
}

/* =============== MEDIA QUERIES ======= */

@media screen and (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  /* ================= HEADER ================ */
  header {
    padding: 0.5rem 1rem;
  }
  .navbar {
    background-color: var(--dark-color);
    position: absolute;
    top: 3.5rem;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 500ms;
  }
  .show-navbar {
    display: flex;
    transform: scaleY(1);
    transform-origin: top;
    transition: transform 300ms;
  }
  .nav-items {
    display: flex;
    flex-direction: column;
  }
  .nav-item {
    margin: 0.5rem 0;
  }
  .menu-toggle {
    display: block;
  }
  .bx-menu {
    display: block !important;
  }
  .show-bx {
    display: block !important;
  }
  .hide-bx {
    display: none !important;
  }
}
@media (min-width: 769px) {
  header {
    padding: 1rem 5rem;
  }
  /* ================= MAIN ================ */

  /* -------- HOME SECTION -------------- */
  .section-1 {
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    padding: 0rem 4rem 0 5rem;
  }
  .slogan .company-title {
    max-width: 30rem;
    font-size: 1.8rem;
    letter-spacing: 0.5rem;
  }
  .slogan .company-slogan {
    max-width: 20rem;
    font-size: 1.3rem;
  }
  /* -------- OFFER SECTION ------------- */
  .section-2 {
    margin: 2rem 5rem;
  }
  .offer {
    margin: 5rem 0;
    align-items: center;
    grid-template-rows: auto auto;
  }
  .offer-1 {
    grid-template-areas: "offer-1-img offer-desc-1";
  }
  .offer-1 img {
    background-color: var(--dark-color);
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .offer-2 {
    grid-template-areas: "offer-desc-2 offer-2-img";
  }
  .offer-1-img {
    grid-area: offer-1-img;
    object-fit: fill;
  }
  .offer-2-img {
    grid-area: offer-2-img;
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
  .offer-3 {
    grid-template-areas: "offer-3-img offer-desc-3";
  }
  .offer-3-img {
    grid-area: offer-3-img;
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
  .offer-4 {
    grid-template-areas: "offer-desc-4 offer-4-img";
  }
  .offer-4-img {
    grid-area: offer-4-img;
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
  .offer-desc-1 {
    grid-area: offer-desc-1;
  }
  .offer-desc-2 {
    grid-area: offer-desc-2;
  }
  .offer-desc-3 {
    grid-area: offer-desc-3;
  }
  .offer-description .offer-title {
    font-size: 1.9rem;
    padding: 1.5rem 0 0.5rem 0;
  }
  .offer-description .offer-hook {
    max-width: 30rem;
  }
  .offer-description {
    background-color: var(--white-color-alt);
    padding: 2rem 1rem;
    height: 100%;
  }
  .offer-description .offer-title {
    padding: 0.5rem 0 1rem 0;
  }
  .offer-description .cart-btn {
    margin: 2rem 0 0.5rem 0;
  }
  /* -------- PRODUCT SECTION ----------- */
  .section-3 {
    gap: 5rem;
  }
  .product::before {
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 300ms;
  }
  .product:hover::before {
    transform: scaleY(1);
    transform-origin: top;
    transition: transform 300ms;
  }
  .product_add_cart {
    transform: scaleY(0);
    transform-origin: bottom;
  }
  .product:hover .product_add_cart {
    transform: translate(-50%, -50%) scaleY(1);
    transform-origin: top;
  }
  /* -------- SPONSOR SECTION ----------- */
  .section-4 {
    margin: 5rem 0;
  }
  /* ========= SUBSCRIBE SECTION ========== */
  .section-5 {
    padding: 1rem 0;
  }
  .section-5 .subscribe-container {
    display: flex;
    align-items: center;
  }
  input[type="text"] {
    padding: 0 1rem;
    width: 15rem;
  }
  input[type="submit"] {
    width: 10rem;
  }
  /* =============== FOOTER =============== */
  .top-footer {
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 8rem;
    padding-top: 2rem;
  }
  .footer-title {
    font-size: 1rem;
    padding: 1rem 0;
  }
  .footer-items h3 {
    font-size: 0.9rem;
  }

  .end-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--third-color);
  }
  .copyright {
    color: hsla(0, 0%, 98%, 0.747);
    padding: 1rem 0;
    font-size: 0.8rem;
  }
  .copyright b {
    font-size: 0.7rem;
  }
  .designer {
    color: hsla(0, 0%, 98%, 0.322);
    font-size: 0.8rem;
  }
}