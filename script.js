window.addEventListener('DOMContentLoaded', function() {
    var trainButton = document.getElementById('train-button');
    var hireButton = document.getElementById('hire-button');
    var skillLevel = document.getElementById('skill-level');
    var currencyDisplay = document.getElementById('currency');

    var currentLevel = 0;
    var currency = 0;

    // Update skill level display
    function updateSkillLevel() {
        skillLevel.textContent = currentLevel;
    }

    // Update currency display
    function updateCurrency() {
        currencyDisplay.textContent = currency;
    }

    // Increase skill level when training button is clicked
    trainButton.addEventListener('click', function() {
        currentLevel++;
        updateSkillLevel();
    });

    // Hire a trainer when hire button is clicked
    hireButton.addEventListener('click', function() {
        if (currency >= 10) {
            currency -= 10;
            updateCurrency();
            setInterval(function() {
                currentLevel++;
                updateSkillLevel();
            }, 1000);
        }
    });

    // Update skill level every second
    setInterval(function() {
        currentLevel++;
        updateSkillLevel();
    }, 1000);
});
