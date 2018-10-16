/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
    document.getElementById("sortDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var y;
        for (y = 0; y < dropdowns.length; y++) {
            var openDropdown = dropdowns[y];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

// Sort images
function sortGrid() {
    var divToBeSorted = document.getElementById('imgcontainer').querySelectorAll('a');
    var myArr = Array.from(divToBeSorted);
    myArr.sort();
    document.getElementById('imgcontainer').appendChild(myArr[0]);
}

// Modal
var modal = document.getElementById('myModal');
var i;

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('imglightbox');
var modalImg = document.getElementById('showimg');
for (i = 0; i < img.length; i++) {
    img[i].onclick = function (e) {
        e.preventDefault();
        modal.style.display = 'block';
        modalImg.src = this.href;
    };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closebtn")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};