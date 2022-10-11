const API_NOTIFICATIONS_URL = "http://localhost:3000";

function isLogged() {
    return localStorage.getItem("jwtNotificationsToken") !== null;
}

function openNotificationsSettings() {

    document.querySelectorAll(".tabLink").forEach(function (element) {
        if (element.id.toLowerCase().includes("/notifications/settings.html")) {
            element.click();
        }
    });

}

if (!isLogged()) {
    Toastify({
        text: "Vous n'avez pas encore configuré les notifications. Cliquez ici pour le faire.",
        duration: 5000,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
        stopOnFocus: true,
        onClick: function () {
            openNotificationsSettings();
        }
    }).showToast();

}