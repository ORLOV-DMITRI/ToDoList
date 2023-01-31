const sideBar = document.getElementById("sidebar");
const sideBarClose = document.getElementById("sideBarClose");
const sideBarOpen = document.getElementById("sideBarOpen");
const main = document.getElementById("main");
const mainContent = document.getElementById("mainContent");

sideBarClose.onclick = SideBarClose;
sideBarOpen.onclick = SideBarOpen;

function SideBarClose() {
  sideBar.style.backgroundColor = "#11100f";
  sideBar.style.color = "#11100f";

  main.removeChild(sideBar);
  document.querySelector('.task-creation__input').focus();
}
function SideBarOpen() {
  main.insertBefore(sideBar, mainContent);

  sideBar.style.backgroundColor = "#252423";
  sideBar.style.color = "#fff";
  document.querySelector('.task-creation__input').focus();
}
