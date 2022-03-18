console.log("page loaded...");

var profile = document.querySelector('.card-body h1');

function editProfile() {
    profile.innerText = 'Joseph Begin';
}

var firstPerson = document.querySelector('#card-list-item-1');
var secondPerson = document.querySelector('#card-list-item-2');

var requests = document.querySelector('#conReq');
counter1 = 2;

var totalCon = document.querySelector('#yourCon');
counter2 = 418;

function accept1() {
    firstPerson.remove();
    counter1 -- ;
    requests.innerText = counter1;
    counter2 ++;
    totalCon.innerText = counter2;
};

function deny1() {
    firstPerson.remove();
    counter1 -- ;
    requests.innerText = counter1;
};

function accept2() {
    secondPerson.remove();
    counter1 -- ;
    requests.innerText = counter1;
    counter2 ++;
    totalCon.innerText = counter2;
};

function deny2() {
    secondPerson.remove();
    counter1 -- ;
    requests.innerText = counter1;
};
