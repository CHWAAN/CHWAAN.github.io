document.addEventListener('DOMContentLoaded', function () {
    const displayButtons = document.querySelectorAll('.displayButton');
    const svgContainer = document.getElementById('svgContainer');
    const svgContent = document.getElementById('svgContent');
    const closeButton = document.getElementById('closeButton');

    displayButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const targetId = button.getAttribute('data-target');
            const svgCode = document.getElementById(targetId).value;
            svgContent.innerHTML = svgCode;
            svgContainer.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function () {
        svgContainer.style.display = 'none';
        svgContent.innerHTML = '';
    });
});
