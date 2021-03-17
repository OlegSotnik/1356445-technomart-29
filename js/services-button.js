const buttonDelivery = document.querySelector(".button-delivery");
const buttonGuarantee = document.querySelector(".button-guarantee");
const buttonCredit = document.querySelector(".button-credit");

const servicesDelivery = document.querySelector(".services-delivery");
const servicesGuarantee = document.querySelector(".services-guarantee");
const servicesCredit = document.querySelector(".services-credit");


buttonDelivery.addEventListener("click", function (e) {
  e.preventDefault();
  servicesDelivery.classList.remove("none");
  servicesGuarantee.classList.add("none");
  servicesCredit.classList.add("none");

  servicesDelivery.classList.add("img-delivery");
  servicesGuarantee.classList.remove("img-guarantee");
  servicesCredit.classList.remove("img-credit");

  buttonDelivery.classList.add("services-button-checked");
  buttonGuarantee.classList.remove("services-button-checked");
  buttonCredit.classList.remove("services-button-checked");
});

buttonGuarantee.addEventListener("click", function (a) {
  a.preventDefault();
  servicesDelivery.classList.add("none");
  servicesGuarantee.classList.remove("none");
  servicesCredit.classList.add("none");

  servicesDelivery.classList.remove("img-delivery");
  servicesGuarantee.classList.add("img-guarantee");
  servicesCredit.classList.remove("img-credit");

  buttonDelivery.classList.remove("services-button-checked");
  buttonGuarantee.classList.add("services-button-checked");
  buttonCredit.classList.remove("services-button-checked");
});

buttonCredit.addEventListener("click", function (f) {
  f.preventDefault();
  servicesDelivery.classList.add("none");
  servicesGuarantee.classList.add("none");
  servicesCredit.classList.remove("none");

  servicesDelivery.classList.remove("img-delivery");
  servicesGuarantee.classList.remove("img-guarantee");
  servicesCredit.classList.add("img-credit");

  buttonDelivery.classList.remove("services-button-checked");
  buttonGuarantee.classList.remove("services-button-checked");
  buttonCredit.classList.add("services-button-checked");
});