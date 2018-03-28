"use strict";

var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "William Nordenstad";

        var greeting = document.createElement("p");
         var timeOfDayGreeting = "Tjena";
         var now = new Date();

         if (now.getHours() < 10) {
             timeOfDayGreeting = "Morsning";
        } else if (now.getHours() >= 17) {
             timeOfDayGreeting = "Hallå där";
        }

        greeting.textContent = timeOfDayGreeting +
             ", jag heter William och jag försöker lära mig att programmera.";

        var image = document.createElement("img");

        image.src = "william_defender.png";
        image.alt = "William Nordenstad";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(image);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);
