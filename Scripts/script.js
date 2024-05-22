const parkData = {
    yellowstone: {
        name: "Yellowstone National Park",
        location: "Wyoming, Montana, Idaho",
        description: "Yellowstone National Park is known for its geothermal features, wildlife, and stunning landscapes."
    },
    yosemite: {
        name: "Yosemite National Park",
        location: "California",
        description: "Yosemite National Park is renowned for its granite cliffs, waterfalls, giant sequoias, and diverse ecosystems."
    },
    grandcanyon: {
        name: "Grand Canyon National Park",
        location: "Arizona",
        description: "Grand Canyon National Park is famous for its immense and visually overwhelming canyon carved by the Colorado River."
    }
    // Add more parks as needed
};

function displayParkData(parkKey) {
    const data = parkData[parkKey];
    if (data) {
        document.getElementById('park-data').innerHTML = `
            <h2>${data.name}</h2>
            <p><strong>Location:</strong> ${data.location}</p>
            <p>${data.description}</p>
        `;
    } else {
        document.getElementById('park-data').innerHTML = '<p>Park data not available.</p>';
    }
}
