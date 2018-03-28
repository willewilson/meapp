"use strict";

var github = function () {
    var showGithub = function () {
        window.mainContainer.innerHTML = "";

        var githubRequest = new XMLHttpRequest();

        githubRequest.addEventListener("load", renderGithubRepos);
        githubRequest.open("GET", "https://api.github.com/users/:willewilson/repos");
        githubRequest.send();
    }
}
