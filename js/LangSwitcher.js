document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcher = document.querySelector('.languageSwitcher');
    const switchLabel = document.querySelector('.switchLabel');
    const switchWrapper = document.querySelector('.switch');

    function updateLanguage() {
        const allContent = document.querySelectorAll('.lang-content');
        if (languageSwitcher.checked) {
            allContent.forEach(content => {
                content.classList.remove('active');
                if (content.classList.contains('ua')) {
                    content.classList.add('active');
                }
            });
            switchLabel.textContent = 'UA';
            switchWrapper.classList.remove('language-switcher-ru');
            switchWrapper.classList.add('language-switcher-ua');
        } else {
            allContent.forEach(content => {
                content.classList.remove('active');
                if (content.classList.contains('ru')) {
                    content.classList.add('active');
                }
            });
            switchLabel.textContent = 'RU';
            switchWrapper.classList.remove('language-switcher-ua');
            switchWrapper.classList.add('language-switcher-ru');
        }
    }

    languageSwitcher.addEventListener('change', updateLanguage);
    updateLanguage(); 
});
