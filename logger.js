var Logger = function () {

    var private_log = function (action, data) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("post", "https://log.nalrcs.org/" + action);
        xmlHttp.send(data);
    };

    return {
        logLogin: function (user, system, user_name, group_name, organization) {
            private_log('log_login', {
                "user": user,
                "system": system,
                "user_name": user_name,
                "group_name": group_name,
                "organization": organization
            });
        },
        log: function (system, user, action, category, label, description) {
            private_log('log', {
                "system": system,
                "user": user,
                "action": action,
                "category": category,
                "label": label,
                "description": description
            });
        },
    };
}();