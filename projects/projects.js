"use strict";
var selected_language = 'all';
var finished = false;
var sort_order = 'asc';
setComboboxAction();
setCheckboxAction();
setRadioButtonsAction();
function filterProjectsByLanguageAndStatus(projects_object, language, finished) {
    for (let project of projects_object) {
        let project_finished = project.classList.contains('finished-project');
        if ((language === 'all' || project.classList.contains(language + "-project")) && (!finished || project_finished)) {
            project.style.display = 'block';
        }
        else {
            project.style.display = 'none';
        }
    }
}
function sortProjects() {
    let projects_array = Array.from(getAllProjects());
    projects_array.sort(function (a, b) {
        let a_date = a.getAttribute('data-date');
        let b_date = b.getAttribute('data-date');
        if (a_date && b_date) {
            if (a_date < b_date) {
                return sort_order === 'asc' ? -1 : 1;
            }
            if (a_date > b_date) {
                return sort_order === 'asc' ? 1 : -1;
            }
        }
        return 0;
    });
    let projects_container = document.getElementById('projects');
    if (projects_container) {
        projects_container.innerHTML = '';
        for (let project of projects_array) {
            projects_container.appendChild(project);
        }
    }
}
function getAllProjects() {
    return document.getElementsByClassName('project');
}
function filterProjects() {
    let projects = getAllProjects();
    filterProjectsByLanguageAndStatus(projects, selected_language, finished);
}
function setComboboxAction() {
    let combobox = document.getElementById('language-selector');
    if (combobox) {
        combobox.addEventListener('change', function () {
            selected_language = combobox.value;
            filterProjects();
        });
    }
}
function setCheckboxAction() {
    let checkbox = document.getElementById('finished-projects-selector');
    if (checkbox) {
        checkbox.addEventListener('change', function () {
            finished = checkbox.checked;
            filterProjects();
        });
    }
}
function setRadioButtonsAction() {
    let radio_buttons = document.getElementsByName('order-selector');
    for (let radio of radio_buttons) {
        radio.addEventListener('change', updateSelectedOrder);
    }
}
function updateSelectedOrder(event) {
    let event_target = event.target;
    if (event_target.checked) {
        sort_order = event_target.value;
        sortProjects();
    }
}
