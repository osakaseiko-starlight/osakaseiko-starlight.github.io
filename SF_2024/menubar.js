function toggleMenu() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    // ハンバーガーメニューの状態をトグルする
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
}