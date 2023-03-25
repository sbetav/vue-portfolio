export function Menu(menu, menuBtn) {
    if (menu.value.classList.contains('hidden')) {
        menuBtn.value.disabled = true;
        menu.value.classList.remove('hidden');
        menu.value.classList.add('animate-menuSlideIn');
        setTimeout(() => {
            menu.value.classList.remove('animate-menuSlideIn');
            menuBtn.value.disabled = false;
        }, 800);

    } else {
        menu.value.classList.remove('animate-menuSlideIn');
        menu.value.classList.add('animate-menuSlideOut');
        menuBtn.value.disabled = true;
        setTimeout(() => {
            menu.value.classList.add('hidden');
            menu.value.classList.remove('animate-menuSlideOut');
            menuBtn.value.disabled = false;
        }, 500);
    }
}
