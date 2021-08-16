document.body.classList.add('js-loading');
window.addEventListener("load", loadingFinished);
function loadingFinished() {
    document.body.classList.remove('js-loading');
}