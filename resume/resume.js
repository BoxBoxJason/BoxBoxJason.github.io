var LANGUAGES_BUTTONS = getLanguageComponent('resume-button', 'resume language buttons');
var RESUMES = getLanguageComponent('resume', 'resumes');
var current_language = "english";
var MAP = {
    'english': {
        'other': ['french', 'spanish'],
        'resume': RESUMES[0],
        'button': LANGUAGES_BUTTONS[0],
        'pdf': 'resume_en.pdf'
    },
    'french': {
        'other': ['english', 'spanish'],
        'resume': RESUMES[1],
        'button': LANGUAGES_BUTTONS[1],
        'pdf': 'resume_fr.pdf'
    },
    'spanish': {
        'other': ['french', 'english'],
        'resume': RESUMES[2],
        'button': LANGUAGES_BUTTONS[2],
        'pdf': 'resume_sp.pdf'
    }
};
LANGUAGES_BUTTONS.forEach(function (button) {
    button.onclick = function () {
        var language = button.id.split('-')[0];
        changeLanguage(language);
    };
});
function changeLanguage(selected_language) {
    if (selected_language != current_language) {
        MAP[selected_language]['other'].forEach(function (element) {
            MAP[element]['resume'].classList.remove('selected-resume');
            MAP[element]['button'].classList.remove('selected-language');
        });
        MAP[selected_language]['resume'].classList.add('selected-resume');
        MAP[selected_language]['button'].classList.add('selected-language');
        var DOWNLOAD_BUTTON = document.getElementById('download-resume-button');
        if (DOWNLOAD_BUTTON) {
            DOWNLOAD_BUTTON.href = "../assets/documents/" + MAP[selected_language]['pdf'];
        }
        current_language = selected_language;
    }
}
function getLanguageComponent(component_name, error_msg_name) {
    var english_component = document.getElementById('english-' + component_name);
    var spanish_component = document.getElementById('spanish-' + component_name);
    var french_component = document.getElementById('french-' + component_name);
    var components = [];
    if (english_component != null && french_component != null && spanish_component != null) {
        components = [english_component, french_component, spanish_component];
    }
    else {
        console.error('Some ' + error_msg_name + ' were not found ! Please reload page !');
    }
    return components;
}
