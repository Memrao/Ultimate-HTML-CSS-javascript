// const API_URL = 'https://dummyjson.com/products';
// const LIMIT = 20;
// let currentPage = 1;
// let totalPages = 0;
// let selectedCategory = '';
// let searchQuery = '';

// document.addEventListener('DOMContentLoaded', () => {
//     fetchProducts();

//     // Add event listener to the search input
//     const searchInput = document.getElementById('searchInput');
//     searchInput.addEventListener('input', searchProducts);

//     // Add event listener to the filter dropdown
//     const filterDropdown = document.getElementById('filterDropdown');
//     filterDropdown.addEventListener('change', categoryChange);
// });

// function fetchProducts(page = 1, searchQuery = '', category = '') {
//     clearResults(); // Clear the previous results and pagination
//     const skip = (page - 1) * LIMIT;
//     let apiUrl = `${API_URL}?limit=${LIMIT}&skip=${skip}&q=${encodeURIComponent(searchQuery)}`;

//     // Modify the URL if a category is selected
//     if (category) {
//         apiUrl = `${API_URL}/category/${category}?limit=${LIMIT}&skip=${skip}`;
//     }

//     fetch(apiUrl)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return res.json();
//         })
//         .then(data => {
//             displayProducts(data.products, skip);
//             totalPages = Math.max(page, Math.ceil(data.total / LIMIT)); // Ensure totalPages considers the current page
//             setupPagination();
//         })
//         .catch(error => console.error('There was a problem with the fetch operation:', error));
// }

// function displayProducts(products, skip) {
//     const productTableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
//     productTableBody.innerHTML = '';

//     products.forEach((product, index) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${skip + index + 1}</td> <!-- Serial Number -->
//             <td>${product.title}</td>
//             <td>$${product.price.toFixed(2)}</td>
//         `;
//         productTableBody.appendChild(row);
//     });

//     applySearchHighlighting(); // Apply search highlighting and alternating row colors
// }

// function setupPagination() {
//     const pagination = document.getElementById('pagination');
//     pagination.innerHTML = '';

//     // Previous Link
//     const prevLink = createPaginationLink('« Previous', currentPage > 1 ? currentPage - 1 : 1);
//     pagination.appendChild(prevLink);

//     // Determine the range of pages to display
//     const maxPagesToShow = 10;
//     let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
//     let endPage = startPage + maxPagesToShow - 1;

//     if (endPage > totalPages) {
//         endPage = totalPages;
//         startPage = Math.max(1, endPage - maxPagesToShow + 1);
//     }

//     // Ensure at least 10 pages are shown if possible
//     if (startPage > 1) {
//         const firstPageLink = createPaginationLink(1, 1);
//         pagination.appendChild(firstPageLink);

//         if (startPage > 2) {
//             const ellipsis = document.createElement('span');
//             ellipsis.innerText = '...';
//             pagination.appendChild(ellipsis);
//         }
//     }

//     // Page Number Links
//     for (let i = startPage; i <= endPage; i++) {
//         const pageLink = createPaginationLink(i, i);
//         if (i === currentPage) {
//             pageLink.classList.add('active');
//         }
//         pagination.appendChild(pageLink);
//     }

//     // Show ellipsis if there are pages after the last shown one
//     if (endPage < totalPages) {
//         if (endPage < totalPages - 1) {
//             const ellipsis = document.createElement('span');
//             ellipsis.innerText = '...';
//             pagination.appendChild(ellipsis);
//         }

//         const lastPageLink = createPaginationLink(totalPages, totalPages);
//         pagination.appendChild(lastPageLink);
//     }

//     // Next Link
//     const nextLink = createPaginationLink('Next »', currentPage < totalPages ? currentPage + 1 : currentPage + 1);
//     pagination.appendChild(nextLink);
// }

// function createPaginationLink(text, pageNumber) {
//     const link = document.createElement('a');
//     link.innerText = text;
//     link.href = '#';
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (pageNumber !== currentPage) {
//             currentPage = pageNumber;
//             fetchProducts(currentPage, searchQuery, selectedCategory);
//         }
//     });
//     return link;
// }

// function searchProducts() {
//     searchQuery = document.getElementById('searchInput').value.trim();
//     currentPage = 1;
//     fetchProducts(currentPage, searchQuery, selectedCategory);
// }



// function categoryChange() {
//     selectedCategory = document.getElementById('filterDropdown').value;
//     currentPage = 1;
//     fetchProducts(currentPage, searchQuery, selectedCategory);
// }

// function applySearchHighlighting() {
//     const searchInput = document.getElementById('searchInput');
//     const table_rows = document.querySelectorAll('tbody tr');

//     table_rows.forEach((row, i) => {
//         let table_data = row.textContent.toLowerCase(),
//             search_data = searchInput.value.toLowerCase();

//         row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
//         row.style.setProperty('--delay', i / 25 + 's');
//     });

//     document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
//         visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
//     });
// }

// // Function to clear the product table and pagination
// function clearResults() {
//     const productTableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
//     const pagination = document.getElementById('pagination');

//     // Clear the product table and pagination
//     productTableBody.innerHTML = '';
//     pagination.innerHTML = '';
// }


// let currentPage = 1;
// let searchQuery = "";
// let selectedCategory = "";
// const limit = 20;

// const renderProducts = async(page, searchQuery, selectedCategory) => {
//     const skip = (page - 1) * limit;
//     let apiUrl = "https://dummyjson.com/products";

//     if (selectedCategory) {
//         apiUrl += `?category=${selectedCategory}&limit=${limit}&skip=${skip}`;
//     } else if (searchQuery) {
//         apiUrl += `?search?q=${searchQuery}&limit=${limit}&skip=${skip}`;
//     } else {
//         apiUrl += `?limit=${limit}&skip=${skip}`;
//     }

//     const response = await fetch(apiUrl);
//     const productsData = await response.json();
//     const products = productsData.products;
//     const total = productsData.total;
//     const totalPages = Math.ceil(total / limit);
//     const productTableBody = document.querySelector("#product tbody");
//     productTableBody.innerHTML = "";
//     products.forEach((product) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//       <td>${product.id}</td>
//       <td>${product.category}</td>
//       <td>${product.title}</td>
//       <td>${product.stock}</td>
//       <td>${product.warrantyInformation}</td>
//       <td>$${product.price}</td>
//     `;
//         productTableBody.appendChild(row);
//     });
//     renderPagination(totalPages);
// };

// const renderPagination = (totalPages) => {
//     const paginationContainer = document.querySelector(".pagination");
//     paginationContainer.innerHTML = "";

//     for (let i = 1; i <= totalPages; i++) {
//         const pageLi = document.createElement("li");
//         pageLi.innerHTML = `<a href="#">${i}</a>`;
//         if (i === currentPage) {
//             pageLi.classList.add("active");
//         }
//         paginationContainer.appendChild(pageLi);
//     }
// }


// let currentPage = 1;
// let searchQuery = "";
// let selectedCategory = "";
// const limit = 20;

// const renderProducts = async(page, searchQuery, selectedCategory) => {
//     const skip = (page - 1) * limit;
//     let apiUrl = "https://dummyjson.com/products";

//     // Ensure search query is encoded properly for multiple words
//     if (searchQuery) {
//         const encodedSearchQuery = encodeURIComponent(searchQuery.trim());
//         apiUrl += `/search?limit=${limit}&skip=${skip}&q=${encodedSearchQuery}`;
//     } else if (selectedCategory) {
//         apiUrl += `/category/${selectedCategory}?limit=${limit}&skip=${skip}`;
//     } else {
//         apiUrl += `?limit=${limit}&skip=${skip}`;
//     }

//     const response = await fetch(apiUrl);
//     const productsData = await response.json();
//     const products = productsData.products;
//     const total = productsData.total;
//     const totalPages = Math.ceil(total / limit);
//     const productTableBody = document.querySelector("#product tbody");
//     productTableBody.innerHTML = "";
//     products.forEach((product) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//       <td>${product.id}</td>
//       <td>${product.category}</td>
//       <td>${product.title}</td>
//       <td>${product.stock}</td>
//       <td>${product.warrantyInformation || 'N/A'}</td>
//       <td>$${product.price}</td>
//     `;
//         productTableBody.appendChild(row);
//     });
//     renderPagination(totalPages);
// };

// const renderPagination = (totalPages) => {
//     const paginationContainer = document.querySelector(".pagination");
//     paginationContainer.innerHTML = "";

//     for (let i = 1; i <= totalPages; i++) {
//         const pageLi = document.createElement("li");
//         pageLi.innerHTML = `<a href="#">${i}</a>`;
//         if (i === currentPage) {
//             pageLi.classList.add("active");
//         }
//         pageLi.addEventListener("click", () => {
//             currentPage = i;
//             renderProducts(currentPage, searchQuery, selectedCategory);
//         });
//         paginationContainer.appendChild(pageLi);
//     }
// };

// function searchFun() {
//     const input = document.querySelector("#Myinput");
//     searchQuery = input.value;
//     selectedCategory = ""; // Clear selected category when searching
//     currentPage = 1;
//     renderProducts(currentPage, searchQuery, selectedCategory);
// }

// function categoryChange() {
//     const categorySelect = document.querySelector("#categoryDropdown");
//     selectedCategory = categorySelect.value;
//     searchQuery = ""; // Clear search query when selecting a category
//     currentPage = 1;
//     renderProducts(currentPage, searchQuery, selectedCategory);
// }

// document.querySelector("#categoryDropdown").addEventListener("change", categoryChange);
// document.querySelector("#Myinput").addEventListener("input", searchFun);

// const fetchCategories = async() => {
//     const response = await fetch("https://dummyjson.com/products/categories");
//     const categories = await response.json();
//     const categoryDropdown = document.querySelector("#categoryDropdown");
//     categoryDropdown.innerHTML = `<option value="">All Categories</option>`;
//     categories.forEach((category) => {
//         const option = document.createElement("option");
//         option.value = category;
//         option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
//         categoryDropdown.appendChild(option);
//     });
// };

// // Initialize the page by fetching categories and rendering products
// fetchCategories();
// renderProducts(currentPage, searchQuery, selectedCategory);


const API_URL = 'https://dummyjson.com/products';
const CATEGORY_API_URL = 'https://dummyjson.com/products/categories';
const LIMIT = 20;
let currentPage = 1;
let totalPages = 0;
let selectedCategory = '';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    fetchCategories(); // Fetch and add categories to the dropdown
    document.getElementById('searchInput').addEventListener('input', searchCategories);
    document.getElementById('filterDropdown').addEventListener('change', categoryChange);
    fetchProducts(); // Fetch and display the initial product list
});

function fetchCategories() {
    fetch(CATEGORY_API_URL)
        .then(res => res.json())
        .then(data => {
            const filterDropdown = document.getElementById('filterDropdown');
            filterDropdown.innerHTML = '<option value="">All Categories</option>'; // Add default option

            data.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                filterDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Failed to fetch categories:', error));
}

function fetchProducts(page = 1, searchQuery = '', category = '') {
    clearResults();
    let apiUrl = `${API_URL}?limit=1000`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            let products = data.products || [];

            // Apply category filter first
            if (category) {
                products = products.filter(product =>
                    product.category.toLowerCase() === category.toLowerCase()
                );
            }

            totalPages = Math.ceil(products.length / LIMIT);
            const paginatedProducts = products.slice((page - 1) * LIMIT, page * LIMIT);

            displayProducts(paginatedProducts);
            setupPagination();
        })
        .catch(error => console.error('Fetch error:', error));
}

function displayProducts(products) {
    const productTableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    productTableBody.innerHTML = '';

    if (products.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="6">No products found.</td>`;
        productTableBody.appendChild(row);
    } else {
        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${(currentPage - 1) * LIMIT + index + 1}</td>
                <td>${highlightMatch(product.category)}</td>
                <td>${product.title}</td>
                <td>${product.stock}</td>
                <td>${product.warrantyInformation || 'N/A'}</td>
                <td>$${product.price.toFixed(2)}</td>
            `;
            productTableBody.appendChild(row);
        });
    }
}

function highlightMatch(text) {
    if (!searchQuery) return text;

    const query = searchQuery.toLowerCase();
    const lowerText = text.toLowerCase();
    const startIndex = lowerText.indexOf(query);

    if (startIndex === -1) return text;

    const highlighted = text.substring(startIndex, startIndex + query.length);
    return text.substring(0, startIndex) + `<span class="highlight">${highlighted}</span>` + text.substring(startIndex + query.length);
}

function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const prevLink = createPaginationLink('« Previous', currentPage > 1 ? currentPage - 1 : 1);
    pagination.appendChild(prevLink);

    const maxPagesToShow = 10;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    if (startPage > 1) {
        const firstPageLink = createPaginationLink(1, 1);
        pagination.appendChild(firstPageLink);

        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.innerText = '...';
            pagination.appendChild(ellipsis);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageLink = createPaginationLink(i, i);
        if (i === currentPage) {
            pageLink.classList.add('active');
        }
        pagination.appendChild(pageLink);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.innerText = '...';
            pagination.appendChild(ellipsis);
        }

        const lastPageLink = createPaginationLink(totalPages, totalPages);
        pagination.appendChild(lastPageLink);
    }

    const nextLink = createPaginationLink('Next »', currentPage < totalPages ? currentPage + 1 : totalPages);
    pagination.appendChild(nextLink);
}

function createPaginationLink(text, pageNumber) {
    const link = document.createElement('a');
    link.innerText = text;
    link.href = '#';
    link.classList.add('pagination-link');
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (pageNumber !== currentPage) {
            currentPage = pageNumber;
            fetchProducts(currentPage, searchQuery, selectedCategory);
        }
    });
    return link;
}

function searchCategories() {
    searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

    const filterDropdown = document.getElementById('filterDropdown');
    const options = filterDropdown.querySelectorAll('option');

    options.forEach(option => {
        const categoryText = option.textContent.toLowerCase();
        if (categoryText.includes(searchQuery)) {
            option.style.display = ''; // Show matching categories
        } else if (option.value) {
            option.style.display = 'none'; // Hide non-matching categories
        }
    });

    // Automatically select the first matching category and trigger a change event
    const firstVisibleOption = Array.from(options).find(option => option.style.display !== 'none');
    if (firstVisibleOption) {
        firstVisibleOption.selected = true;
        selectedCategory = firstVisibleOption.value;
        currentPage = 1;
        fetchProducts(currentPage, searchQuery, selectedCategory);
    }
}

function categoryChange() {
    selectedCategory = document.getElementById('filterDropdown').value;
    searchQuery = ''; // Reset the search query when filtering by category
    currentPage = 1;
    fetchProducts(currentPage, searchQuery, selectedCategory);
}

function clearResults() {
    const productTableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const pagination = document.getElementById('pagination');

    productTableBody.innerHTML = '';
    pagination.innerHTML = '';
}