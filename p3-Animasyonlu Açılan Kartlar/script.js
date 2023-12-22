const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", () => {
        allInactive();
        item.classList.add("active");
    });
});

function allInactive(){
    items.forEach(item => {
        item.classList.remove("active");
    })
};