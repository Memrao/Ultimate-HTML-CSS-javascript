document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.input-group input');
    const tableRows = document.querySelector('tbody');

    // // Updated products array with 10 items
    const products = [
        { id: 1, category: 'Makeup', image: '111.jpg', customer: 'Sana', location: 'Karachi', date: '17 Aug, 2024', amount: '$128.90' },
        { id: 2, category: 'Fridge', customer: 'Ali', location: 'Lahore', date: '15 Aug, 2024', amount: '$500' },
        { id: 3, category: 'TV', customer: 'Ahmed', location: 'Islamabad', date: '19 Aug, 2024', amount: '$800' },
        { id: 4, category: 'Mobile', customer: 'Ayesha', location: 'Quetta', date: '21 Aug, 2024', amount: '$200' },
        { id: 5, category: 'Washing Machine', image: '222.jpg', customer: 'Raza', location: 'Multan', date: '22 Aug, 2024', amount: '$350' },
        // { id: 6, category: 'Air Conditioner', image: '333.jpg', customer: 'Zara', location: 'Faisalabad', date: '23 Aug, 2024', amount: '$600' },
        // { id: 7, category: 'Microwave', image: '444.jpg', customer: 'Maya', location: 'Peshawar', date: '24 Aug, 2024', amount: '$120' },
        // { id: 8, category: 'Refrigerator', image: '555.jpg', customer: 'Ali', location: 'Quetta', date: '25 Aug, 2024', amount: '$450' },
        // { id: 9, category: 'Oven', image: '666.jpg', customer: 'Sara', location: 'Karachi', date: '26 Aug, 2024', amount: '$250' },
        // { id: 10, category: 'Toaster', image: '777.jpg', customer: 'Omar', location: 'Lahore', date: '27 Aug, 2024', amount: '$80' }
    ];

    // Function to create rows dynamically

    function createRows() {
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${product.id}</td>
            <td>
                <a href="product.html?category=${product.category}">
                    <img src="${product.image || 'default.jpg'}" alt="">${product.category}
                </a>
            </td>
            <td>${product.customer}</td>
            <td>${product.location}</td>
            <td><p class="status delivered">${product.date}</p></td>
            <td><strong>${product.amount}</strong></td>
        `;
            tableRows.appendChild(row);


        });
        // Add search functionality after rows are created
        search.addEventListener('input', searchTable);
    }

    // Function to filter table rows based on search input
    function searchTable() {
        const rows = tableRows.querySelectorAll('tr');
        const searchValue = search.value.toLowerCase();

        rows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            row.classList.toggle('hide', !rowText.includes(searchValue));
        });

        document.querySelectorAll('tbody tr:not(.hide)').forEach((visibleRow, index) => {
            visibleRow.style.backgroundColor = index % 2 === 0 ? 'transparent' : '#0000000b';
        });
    }

    createRows();
});