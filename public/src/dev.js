const devBtns = document.querySelectorAll('.dataBtn');
const tables = document.querySelectorAll('[data-table]');
console.log(`TABLES: ${tables}`);
devBtns.forEach((button) => {
    button.addEventListener('click', () => {
        let selectedBtn = button.dataset.btn;
        console.log(`SELECTEDBTN: ${selectedBtn}`);
        devBtns.forEach((btn) => {
            btn.classList.remove('active');
        })
        tables.forEach((table) => {
            if (selectedBtn === table.dataset.table) {
                table.classList.toggle('hidden');
                button.classList.add('active');
            } else {
                table.classList.add('hidden');
            }
        })
    })
})