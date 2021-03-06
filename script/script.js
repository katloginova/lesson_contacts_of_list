'use strict';


const template = document.getElementById('newContact').innerHTML;
const newName = document.getElementById('adderName');
const newSurname = document.getElementById('adderSurname');
const newPhone = document.getElementById('adderPhone');
const listContacts = document.getElementById('listContacts');


document.getElementById('adderBtn').addEventListener('click', onAddContactClick);
listContacts.addEventListener('click', onContactListClick);

function onAddContactClick() {
    if (!isInputsInvalid()) {
        addContact(newName.value, newSurname.value, newPhone.value, listContacts);
        resetForms();
    }
}

function onContactListClick(e) {
    if (e.target.classList.contains('delete-btn')) {
        deleteElem(e.target.closest('.list__item'));
    }
}

function isInputsInvalid() {
    return (
        newName.value === '' ||
        newSurname.value === '' ||
        newPhone.value === ''
    );
}


function addContact(name, surname, phone, parentElem) {
    const newContactTemplate = getNewContactTemplate(name, surname, phone);

    parentElem.insertAdjacentHTML('beforeend', newContactTemplate);
}

function getNewContactTemplate(name, surname, phone) {
    return template
        .replace('{{name}}', name)
        .replace('{{surname}}', surname)
        .replace('{{phone}}', phone);
}

function resetForms() {
    newName.value = '';
    newSurname.value = '';
    newPhone.value = '';
}

function deleteElem(elem) {
    elem.remove();
}