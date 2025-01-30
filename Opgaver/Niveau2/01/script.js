document.addEventListener("click", (event) => {
    const buttons = document.querySelectorAll('button');
    let isSelected = false;
    function toggleButton(selected) {
        if (selected) {
            buttons.classList.add('click');
        } else {
            buttons.classList.remove('click');
        }
    }
    buttons.addEventListener('click', function() {
        isSelected = !isSelected;
        toggleButton(isSelected);
    });

});
