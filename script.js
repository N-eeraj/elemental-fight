modal = document.getElementById("modal");
overlay = document.getElementById("black-overlay");

function info()
{
    modal.style.transform = "scale(1)";
    overlay.style.transform = "scale(1)";
}

function closeModal()
{
    modal.style.transform = "scale(0)";
    overlay.style.transform = "scale(0)";
}