document.getElementById("yeslast").addEventListener("click", function() {
    window.location.href = "yespage.html";
});


const no= document.getElementById("lastno");
no.addEventListener("mouseover",function() {
    const randomX = Math.random() * (window.innerWidth - no.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - no.offsetHeight);
    no.style.position = "absolute"; 
    no.style.left = `${randomX}px`;
    no.style.top = `${randomY}px`;
});
