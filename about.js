// Function to load and display data
async function loadAboutData() {
    try {
        // Fetch data from the JSON file
        const response = await fetch('about.json'); // Adjust path if needed
        if (!response.ok) throw new Error("Failed to fetch About data.");

        const data = await response.json();

        // Update title and description (if any)
        document.getElementById('about-title').textContent = data.title || "About Us";
        document.getElementById('about-description').textContent = data.description || "Meet our team members";

        // Display team members
        const teamList = document.getElementById('team-list');
        data.tutors.forEach(member => {
            // Create and add member elements
            const memberElement = createMemberElement(member);
            teamList.appendChild(memberElement);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

// Function to create a member element
function createMemberElement(member) {
    // Container for each member
    const memberElement = document.createElement('div');
    memberElement.classList.add('member');

    // Image
    const memberImage = document.createElement('img');
    memberImage.src = member.image_url;
    memberImage.alt = member.name;
    memberImage.width = 100;
    memberElement.appendChild(memberImage);

    // Name
    const memberName = document.createElement('h3');
    memberName.textContent = member.name;
    memberElement.appendChild(memberName);

    // NIM
    const memberNIM = document.createElement('p');
    memberNIM.textContent = `NIM: ${member.nim}`;
    memberElement.appendChild(memberNIM);

    // Instagram
    const memberInstagram = document.createElement('p');
    memberInstagram.textContent = `IG: ${member.instagram}`;
    memberElement.appendChild(memberInstagram);

    return memberElement;
}

// Call loadAboutData when the page loads
document.addEventListener('DOMContentLoaded', loadAboutData);
