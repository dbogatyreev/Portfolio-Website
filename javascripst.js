document.addEventListener('DOMContentLoaded', function() {
    let iconBacks = document.querySelectorAll('.icon-back');

    iconBacks.forEach(function(iconBack) {
        let img = iconBack.querySelector('img');
        let tooltipText = img.alt;

        let tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = tooltipText;
        iconBack.appendChild(tooltip);
    });
});