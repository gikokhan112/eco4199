document.addEventListener("DOMContentLoaded", function () {
    // Sample app data
    const apps = [
        {
            id: 1,
            title: "Best Cheat Loader_ 200m brutal edition",
            icon: "1.jpg",
            downloadLink: "app1-details.html"
        },
        {
            id: 2,
            title: "Best Cheat Loader_ v4 esp fix",
            icon: "2.jpg",
            downloadLink: "app2-details.html"
        }
    ];

    const appsContainer = document.getElementById("apps-container");
    const searchBar = document.getElementById("search-bar");

    function displayApps(filteredApps) {
        appsContainer.innerHTML = ""; // Clear the container
        filteredApps.forEach(addApp);
    }

    function addApp(app) {
        const appElement = document.createElement("div");
        appElement.classList.add("app-item");
        appElement.innerHTML = `
            <img src="${app.icon}" alt="${app.title} Icon">
            <h2>${app.title}</h2>
            <a href="${app.downloadLink}" class="download-btn">Download</a>
        `;
        appsContainer.appendChild(appElement);
    }

    function handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredApps = apps.filter(app =>
            app.title.toLowerCase().includes(searchTerm)
        );
        displayApps(filteredApps);
    }

    // Display all apps initially
    displayApps(apps);

    // Add search functionality
    searchBar.addEventListener("input", handleSearch);
});
