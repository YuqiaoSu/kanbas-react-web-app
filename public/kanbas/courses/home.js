function openKanbasSideBar() {

    document.getElementById("HiddenKanbasSidebar").style.display = "block";
}

function closeKanbasSideBar() {
    document.getElementById("HiddenKanbasSidebar").style.display = "none";
}

function openCourseNavigation() {
    document.getElementById("HiddenCourseNavigation").style.display = "block";
    document.getElementById("HiddenXButton").style.display = "inline-block";
    document.getElementById("ChevronButton").style.display = "none";

}

function closeCourseNavigation() {
    document.getElementById("HiddenCourseNavigation").style.display = "none";
    document.getElementById("HiddenXButton").style.display = "none";
    document.getElementById("ChevronButton").style.display = "inline-block";}