const searchBox = document.getElementById("navBtnSearch");
const serachInput = document.getElementById("navSearch");

// Search Box open
searchBox.onclick = (event) => {
  serachInput.style.visibility = "visible";
  searchBox.style.cursor = "text";
  serachInput.focus();
};
window.onclick = (event) => {
  if (event.target.id != "navBtnSearch" && event.target.id != "navSearch") {
    serachInput.style.visibility = "collapse";
  }
  searchBox.style.cursor = "pointer";
  serachInput.value = " ";
};
serachInput.onkeydown = (event) => {
  if (event.keyCode === 27) {
    event.target.value = "";
    event.target.blur();
    serachInput.style.visibility = "collapse";
  }
};
///
