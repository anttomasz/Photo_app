/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
    document.getElementById("sortDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

var modal = document.getElementById('myModal');
var i;

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('imglightbox');
var modalImg = document.getElementById('showimg');
var captionText = document.getElementById('caption');
for (i = 0; i < img.length; i++) {
    img[i].onclick = function (e) {
        e.preventDefault();
        modal.style.display = 'block';
        modalImg.src = this.href;
    };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};