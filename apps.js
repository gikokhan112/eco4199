document.addEventListener("DOMContentLoaded", function () {
    // Sample app data
    const apps = [
        {
            id: 1,
            title: "Gta 5",
            icon: "apk-icon.jpg",
            downloadLink: "app1-details.html"
        },
        {
            id: 2,
            title: "Sample App 2",
            icon: "app2-icon.jpg",
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
