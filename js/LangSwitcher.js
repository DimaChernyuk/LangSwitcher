document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcher = document.querySelector('.languageSwitcher');
    const switchLabel = document.querySelector('.switchLabel');

    function updateLanguage() {
        const allContent = document.querySelectorAll('.lang-content');
        if (languageSwitcher.checked) {
            allContent.forEach(content => {
                content.classList.remove('active');
                if (content.classList.contains('ua')) {
                    content.classList.add('active');
                }
            });
            switchLabel.textContent = 'RU';
        } else {
            allContent.forEach(content => {
                content.classList.remove('active');
                if (content.classList.contains('ru')) {
                    content.classList.add('active');
                }
            });
            switchLabel.textContent = 'UA';
        }
    }

    languageSwitcher.addEventListener('change', updateLanguage);
    updateLanguage(); // Initialize the correct language on page load
});
