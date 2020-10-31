let root = document.documentElement;
document.addEventListener("scroll", evt => {
    root.style.setProperty("--scrolltop", root.scrollTop);
});
