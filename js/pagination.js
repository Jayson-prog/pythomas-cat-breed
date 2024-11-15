
document.addEventListener("DOMContentLoaded", function() {
    const itemsPerPage = 12;
    const breedSections = document.querySelectorAll(".box");

    function setupPagination(section) {
        const products = Array.from(section.querySelectorAll(".card"));
        let currentPage = 1;

        function displayPage(page) {
            products.forEach((product, index) => {
                product.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? "block" : "none";
            });
        }

        function createPaginationControls() {
            const paginationControls = document.createElement("div");
            paginationControls.classList.add("pagination-controls");
            paginationControls.innerHTML = `
                <button class="prevPage btn btn-outline-secondary my-2">Previous</button>
                <span class="pageNumber">Page ${currentPage}</span>
                <button class="nextPage btn btn-outline-secondary ms-2">Next</button>
            `;
            section.appendChild(paginationControls);

            paginationControls.querySelector(".prevPage").addEventListener("click", () => changePage(-1));
            paginationControls.querySelector(".nextPage").addEventListener("click", () => changePage(1));
        }

        function changePage(offset) {
            const totalPages = Math.ceil(products.length / itemsPerPage);
            currentPage = Math.min(Math.max(currentPage + offset, 1), totalPages);
            displayPage(currentPage);
            section.querySelector(".pageNumber").textContent = `Page ${currentPage}`;
        }

        displayPage(currentPage);
        createPaginationControls();
    }

    breedSections.forEach(section => {
        setupPagination(section);
    });
});

