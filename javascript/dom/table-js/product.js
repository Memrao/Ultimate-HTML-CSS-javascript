// API URL to fetch product data
const apiUrl = 'https://dummyjson.com/products';

// Get the category and page from the URL query parameters
const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const page = parseInt(params.get('page')) || 1; // Default to page 1 if no page parameter

// Define pagination constants
const itemsPerPage = 20;

// Get the products container and pagination container elements
let productsContainer = document.getElementById('products-container');
let paginationContainer = document.getElementById('pagination-container');

// Check if the elements exist before trying to use them
if (!productsContainer || !paginationContainer) {
    console.error('Error: productsContainer or paginationContainer is null or undefined');
} else {
    // Function to render products
    const renderProducts = async(page) => {

        try {
            const response = await fetch(`${apiUrl}?limit=${itemsPerPage}&skip=${(page - 1) * itemsPerPage}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const products = data.products;
            console.log('Fetched Data:', products); // Check if data is fetched correctly

            // Clear any existing content in the products container and pagination controls
            productsContainer.innerHTML = '';
            paginationContainer.innerHTML = '';

            // Filter products based on the category
            const filteredProducts = category ?
                products.filter(product => product.category.toLowerCase() === category.toLowerCase()) :
                products;

            console.log('Filtered Products:', filteredProducts); // Check if filtering works

            // Calculate total pages
            const totalPages = Math.min(10, Math.ceil(filteredProducts.length / itemsPerPage)); // Limit to a maximum of 10 pages

            // Check if there are products to display
            if (filteredProducts.length > 0) {
                // Loop through the filtered and paginated data and create product items
                filteredProducts.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product.name');
                    productDiv.innerHTML = `
                        <h2>${product.title}</h2>
                        <p>Price: $${product.price}</p>
                        <p>${product.description}</p>
                    `;
                    productsContainer.appendChild(productDiv);

                    // Add event listener to category link
                    const categoryLink = productDiv.querySelector('h2');
                    categoryLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        const category = e.target.textContent;
                        window.location.href = `product.html?category=${category}&page=1`;
                    });
                });

                // Create pagination controls
                for (let i = 1; i <= totalPages; i++) {
                    const pageLink = document.createElement('a');
                    pageLink.href = `product.html?category=${category}&page=${i}`;
                    pageLink.textContent = i;
                    if (i === page) {
                        pageLink.classList.add('active'); // Highlight the current page
                    }
                    paginationContainer.appendChild(pageLink);
                }

                // Add previous and next page links
                if (page > 1) {
                    const prevLink = document.createElement('a');
                    prevLink.href = `product.html?category=${category}&page=${page - 1}`;
                    prevLink.textContent = 'Previous';
                    paginationContainer.insertBefore(prevLink, paginationContainer.firstChild);
                }
                if (page < totalPages) {

                    const nextLink = document.createElement('a');
                    nextLink.href = `product.html?category=${category}&page=${page + 1}`;
                    nextLink.textContent = 'Next';
                    paginationContainer.appendChild(nextLink);
                }
            } else {
                productsContainer.innerHTML = '<p>No products found for this category.</p>';
            }
        } catch (error) {
            console.error('Error fetching product data:', error);
            productsContainer.innerHTML = '<p>Failed to load products.</p>';
        }
    };

    // Call the renderProducts function
    renderProducts(page);
}