const search = document.querySelector('input-group input'),
    table_rows = document.querySelectoraAll('tbody tr'),
    table_header = document.querySelectorAll('thead th');


search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent,
            search_data = search.value;
        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');

    });
    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgoundColor = (i)
    });
}