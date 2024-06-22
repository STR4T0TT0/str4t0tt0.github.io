function displayPostTags() {
    // Select all elements with class 'tags'
    const tagElements = document.querySelectorAll('.tags');

    // Loop through each tag element
    tagElements.forEach(tagElement => {
        // Get the tags text content and split into an array
        const tags = tagElement.textContent.split(', ');

        // Create a new span element for each tag
        const tagsHtml = tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');

        // Replace the original content with formatted tags
        tagElement.innerHTML = tagsHtml;
    });
}

// Call the function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayPostTags);

function displayArticlesByTag(tagName) {
    // Select all articles
    const articles = document.querySelectorAll('article');

    // Loop through each article
    articles.forEach(article => {
        // Get the tags for the current article
        const tagsElement = article.querySelector('.tags');
        if (!tagsElement) return; // Skip if tags element not found

        const tags = tagsElement.textContent.split(', ');

        // Check if the current article has the desired tag
        if (tags.includes(tagName.trim())) {
            // Create a link to the article
            const link = document.createElement('a');
            link.href = article.querySelector('h2 a').href;
            link.textContent = article.querySelector('h2 a').textContent;

            // Append the link to a container (e.g., a div with id 'articlesByTag')
            const container = document.getElementById('articlesByTag');
            container.appendChild(link);
            container.appendChild(document.createElement('br')); // Optional: Add line break
        }
    });
}

// Example usage: Display articles with the tag 'cybersecurity'
displayArticlesByTag('cybersecurity');
