// Add this before the closing </body> tag
document.addEventListener('DOMContentLoaded', function() {
  const codeSnippets = document.querySelectorAll('.code-snippet');
  
  codeSnippets.forEach((snippet, index) => {
    // Create wrapper and add classes
    const wrapper = document.createElement('div');
    wrapper.className = 'code-snippet-wrapper';
    
    // Create header with toggle button
    const header = document.createElement('div');
    header.className = 'code-snippet-header';
    
    // Determine which algorithm this is for the title
    let title = "Code Implementation";
    if (snippet.closest('.algorithm-explanation')) {
      const algorithmTitle = snippet.closest('.algorithm-explanation').querySelector('h3');
      if (algorithmTitle) {
        title = `${algorithmTitle.textContent.split(' ').pop()} Code Implementation`;
      }
    }
    
    header.innerHTML = `
      <span class="code-snippet-title">${title}</span>
      <button class="code-snippet-toggle" aria-expanded="false">
        <span class="show-text">Show Code</span>
        <span class="hide-text">Hide Code</span>
        <i class="fas fa-chevron-down"></i>
      </button>
    `;
    
    // Insert the header before the snippet
    const parent = snippet.parentNode;
    parent.insertBefore(wrapper, snippet);
    
    // Move snippet inside wrapper and add header
    wrapper.appendChild(header);
    wrapper.appendChild(snippet);
    
    // Set initial state
    snippet.classList.add('collapsed');
    
    // Add click event
    header.querySelector('.code-snippet-toggle').addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      snippet.classList.toggle('collapsed');
      wrapper.classList.toggle('expanded');
    });
  });
});