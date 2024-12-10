const exteriorImage = document.getElementById('exteriorImage');
const interiorImage = document.getElementById('interiorImage');
const exteriorButtons = document.querySelectorAll('.exterior-color-palette .exterior-color');
const interiorButtons = document.querySelectorAll('.interior-color-palette .interior-color');
const exteriorSelectedColor = document.getElementById('exteriorSelectedColor');
const interiorSelectedColor = document.getElementById('interiorSelectedColor');

interiorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const imageName = this.getAttribute('data-image');
        const colorName = this.textContent.trim();
        interiorImage.src = imageName;
        interiorSelectedColor.textContent = `当前选择：${colorName}`;
    });
});

exteriorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const imageName = this.getAttribute('data-image');
        const colorName = this.textContent.trim();
        exteriorImage.src = imageName;
        exteriorSelectedColor.textContent = `当前选择：${colorName}`;
    });
});

// Disable right click on images
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Disable keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p' || e.key === 'c')) {
        e.preventDefault();
        return false;
    }
});

// Disable drag and drop
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});
