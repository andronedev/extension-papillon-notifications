function checkForLogin() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("jwtNotificationsToken") !== null) {
            return true;
        }
    }
    return false;
}

function openNotificationsSettings() {

    document.querySelectorAll(".tabLink").forEach(function (element) {
        if (element.id.toLowerCase().includes("/notifications/settings.html")) {
            element.click();
        }
    });

}
if (!checkForLogin()) {
    Toastify({
        text: "Vous n\'avez pas configuré les notifications. Cliquez ici pour les configurer.",
        duration: 5000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        stopOnFocus: true,
        onClick: function () { 
            openNotificationsSettings();
        }
    }).showToast();

}