const API_NOTIFICATIONS_URL = "http://localhost:3000";

function isLogged() {
    return new Promise(function (resolve, reject) {
        let token = localStorage.getItem("jwtNotificationsToken")
        if (token) {
            fetch(API_NOTIFICATIONS_URL + "/login/?token=" + token, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                if (response.status == 200) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            }).then((data) => {
                if (data.success) {
                    return true
                } else {
                    resolve(false)
                }
            }).catch((error) => {
                resolve(false)
            })
        } else {
            resolve(false)
        }
    })
}

function openNotificationsSettings() {

    document.querySelectorAll(".tabLink").forEach(function (element) {
        if (element.id.toLowerCase().includes("/notifications/settings.html")) {
            element.click();
        }
    });

}

isLogged().then((logged) => {
    if (!logged) {
        // remove token if it exists
        localStorage.removeItem("jwtNotificationsToken")

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

})