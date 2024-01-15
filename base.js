$(document).ready(function() {
    var logOut = document.getElementById('logout');
    logOut.onclick = function () {
        alert('logout successfully');
        localStorage.setItem('isLogedIn', false);
        localStorage.removeItem('userInfo');
    }
});