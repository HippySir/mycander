let closeFn = null;
let itemEl = null;
function hander (e) {
    if (e.target === itemEl || itemEl.contains(e.target)) {
        return
    }
    if (typeof closeFn === 'function') {
        closeFn();
    }
}
const outSideClice = {
    inserted (el, binding) {
        closeFn = binding.value;
        itemEl = el;
        document.addEventListener('click', hander)
    },
    unbind () {
        document.removeEventListener('click', hander)
    }
}

export { outSideClice }