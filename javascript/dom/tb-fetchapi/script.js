const API_URL = 'https://dummyjson.com/products';
const CATEGORY_API_URL = 'https://dummyjson.com/products/categories';
const PRODUCT_API_URL = 'https://dummyjson.com/products/search';
const LIMIT = 20; // Fetch 20 products per page
let currentPage = 1;
let totalPages = 0;
let selectedCategory = '';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    fetchCategories(); // Fetch and add categories to the dropdown
    document.getElementById('searchInput').addEventListener('input', searchProducts);
    document.getElementById('filterDropdown').addEventListener('change', categoryChange);
    fetchProducts(); // Fetch and display the initial product list
});

// Fetch and populate categories in the dropdown using async/await
async function fetchCategories() {
    try {
        const res = await fetch(CATEGORY_API_URL);
        const response = await res.json();
        console.log('Categories API Response:', response); // Log the response to check its structure
        const categories = response; // Adjust if needed based on the response structure

        const filterDropdown = document.getElementById('filterDropdown');
        filterDropdown.innerHTML = '<option value="">All Categories</option>'; // Default option

        categories.forEach(category => {
            if (category && typeof category.name === 'string') {
                const option = document.createElement('option');
                option.value = category.slug; // Use 'slug' or any other identifier if needed
                option.textContent = category.name; // Use the 'name' property for display
                filterDropdown.appendChild(option);
            } else {
                console.error('Unexpected category format:', category); // Log unexpected formats
            }
        });
    } catch (error) {
        console.error('Failed to fetch categories:', error);
    }
}

// Fetch products using async/await
async function fetchProducts(page = 1, searchQuery = '', category = '') {
    clearResults();
    const skip = (page - 1) * LIMIT;
    let apiUrl;

    if (category) {
        // Fetch products by category
        apiUrl = `https://dummyjson.com/products/category/${encodeURIComponent(category)}?limit=${LIMIT}&skip=${skip}`;
    } else if (searchQuery) {
        // Fetch products that match the search query
        apiUrl = `${PRODUCT_API_URL}?q=${encodeURIComponent(searchQuery)}&limit=${LIMIT}&skip=${skip}`;
    } else {
        // Fetch products if no category or search query
        apiUrl = `${API_URL}?limit=${LIMIT}&skip=${skip}`;
    }

    try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        const products = data.products || [];
        totalPages = Math.ceil(data.total / LIMIT); // Calculate total pages
        displayProducts(products, searchQuery);
        setupPagination();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayProducts(products, searchQuery) {
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
                <td>${product.id}</td>
                <td>${product.category}</td>
                <td>
                    <a href="product.html?id=${product.id}" class="product-link">${highlightSearchTerm(product.title, searchQuery)}</a>
                </td>
                <td>${product.stock || 'N/A'}</td>
                <td>${product.warrantyInformation || 'N/A'}</td>
                <td>$${product.price.toFixed(2)}</td>
            `;
            productTableBody.appendChild(row);
        });
    }
}

// Highlight the search term in the product title
function highlightSearchTerm(text, searchQuery) {
    if (!searchQuery) return text; // No search query, return text as is
    const regex = new RegExp(`(${searchQuery})`, 'gi'); // Case-insensitive search
    return text.replace(regex, '<mark>$1</mark>'); // Wrap matches in <mark> tag for highlighting
}

// Setup pagination links
function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const maxPagesToShow = 10; // Show 10 pages at a time
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Previous button
    const prevLink = createPaginationLink('« Previous', currentPage > 1 ? currentPage - 1 : 1);
    pagination.appendChild(prevLink);

    // Add "1" page if start page is greater than 1
    if (startPage > 1) {
        const firstPageLink = createPaginationLink(1, 1);
        pagination.appendChild(firstPageLink);

        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.innerText = '...';
            pagination.appendChild(ellipsis);
        }
    }

    // Pagination links for visible pages
    for (let i = startPage; i <= endPage; i++) {
        const pageLink = createPaginationLink(i, i);
        if (i === currentPage) {
            pageLink.classList.add('active');
        }
        pagination.appendChild(pageLink);
    }

    // Add "last" page if end page is less than total pages
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.innerText = '...';
            pagination.appendChild(ellipsis);
        }

        const lastPageLink = createPaginationLink(totalPages, totalPages);
        pagination.appendChild(lastPageLink);
    }

    // Next button
    const nextLink = createPaginationLink('Next »', currentPage < totalPages ? currentPage + 1 : totalPages);
    pagination.appendChild(nextLink);
}

// Create a pagination link
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

// Handle product search
function searchProducts() {
    searchQuery = document.getElementById('searchInput').value.trim();
    selectedCategory = ''; // Reset category when searching
    currentPage = 1; // Reset to page 1 after a search
    fetchProducts(currentPage, searchQuery, selectedCategory);
}

// Handle category change
function categoryChange() {
    selectedCategory = document.getElementById('filterDropdown').value;
    searchQuery = ''; // Reset search when category is selected
    currentPage = 1; // Reset to page 1
    fetchProducts(currentPage, searchQuery, selectedCategory);
}

// Clear results and pagination
function clearResults() {
    const productTableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const pagination = document.getElementById('pagination');
    productTableBody.innerHTML = '';
    pagination.innerHTML = '';
}