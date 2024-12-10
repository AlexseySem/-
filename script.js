function showSection(sectionId) {
    // Скрываем все секции
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Отображаем выбранную секцию
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
