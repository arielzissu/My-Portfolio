'use strict'

var gProjs = createProjs();

function getProjs() {
    return gProjs;
}

function createProj(id, name, title, desc, url, labels) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: Date.now(),
        labels: labels,
    }
}

function createProjs() {
    return [
        createProj("pacman", "Pacman", "Better push those boxes", "lorem ipsum lorem ipsum lorem ipsum", "https://arielzissu.github.io/Pacmen/", ["Matrixes", "keyboard events"]),
        createProj("Game-Of-Life", "Game of life", "Better push those boxes", "lorem ipsum lorem ipsum lorem ipsum", "https://arielzissu.github.io/Game-Of-Life/", ["Matrixes", "keyboard events"]),
        createProj("mine-sweeper", "Mine Sweeper", "Better push those boxes", "lorem ipsum lorem ipsum lorem ipsum", "https://arielzissu.github.io/Mine-Sweeper/", ["Matrixes", "keyboard events"]),
    ];
}