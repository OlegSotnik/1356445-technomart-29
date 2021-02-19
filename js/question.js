const feedbackLink = document.querySelector(".main-info-map-link");
const feedbackPopup = document.querySelector(".modal-question");
const feedbackClose = feedbackPopup.querySelector(".modal-question-close");
const feedbackNameField = feedbackPopup.querySelector(".position2");
const loginForm = feedbackPopup.querySelector(".modal-question-form");
const feedbackEmail = feedbackPopup.querySelector(".position4");
const feedbackCommentTextarea = feedbackPopup.querySelector(".comment-textarea");
const feedbackPopupActiv = document.querySelector(".modal-question .modal-show");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");

  if (storageName && storageEmail) {
    feedbackNameField.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackCommentTextarea.focus();
  } else {
    feedbackNameField.focus();
  }

});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
  });

loginForm.addEventListener("submit", function (evt) {
    if (!feedbackNameField.value || !feedbackEmail.value || !feedbackCommentTextarea.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
        localStorage.setItem("name", feedbackNameField.value);
        localStorage.setItem("email", feedbackEmail.value);
        }
      }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
      }
    }
  });

document.addEventListener('mousedown', function(e){
    if(e.target.closest('.modal-question') === null){
        e.preventDefault();
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
    }
});