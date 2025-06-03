function sortByPriceDesc() {
    const catalogs = document.querySelectorAll('.catalog');
    catalogs.forEach(catalog => {
        const items = Array.from(catalog.children);
        items.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price').textContent.match(/[\d.]+/)[0]);
            const priceB = parseFloat(b.querySelector('.price').textContent.match(/[\d.]+/)[0]);
            return priceB - priceA;
        });
        catalog.innerHTML = '';
        items.forEach(item => catalog.appendChild(item));
    });
}
