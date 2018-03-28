"use strict";

(function () {
    var rootElement = document.getElementById("root");

    var mainContainer = document.createElement("main");

   mainContainer.className = "container";

   var navigation = document.createElement("nav");

    navigation.className = "bottom-nav";

    var showHome = function () {
        mainContainer.innerHTML = "";

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

        mainContainer.appendChild(title);
        mainContainer.appendChild(greeting);
        mainContainer.appendChild(image);

        rootElement.appendChild(mainContainer);

        showMenu("home");
    };

    var showAbout = function () {
        console.log('Visa showAbout');
    }

    var showGithub = function () {
        mainContainer.innerHTML = "";

        var githubRequest = new XMLHttpRequest();

        githubRequest.addEventListener("load", renderGithubRepos);
        githubRequest.open("GET", "https://api.github.com/users/:willewilson/repos");
        githubRequest.send();
    }

    var showPresentation = function () {
        console.log('visa showPresentation');
    }

    var showMenu = function (selected) {
        navigation.innerHTML = "";

        var navElements = [{name: "Me", class: "home", nav: showHome},
                            {name: "Om", class: "free_breakfast", nav: showAbout},
                            {name: "Github", class: "folder", nav: showGithub},
                            {name: "Redovisning", class: "people", nav: showPresentation}];

        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            if (selected === element.class) {
                navElement.className = "active";
            }

            navElement.addEventListener("click", element.nav);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);

            navigation.appendChild(navElement);
        });

        rootElement.appendChild(navigation);
    };

    showHome();
})();
