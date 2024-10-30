var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["CLIENT"] = 2] = "CLIENT";
    Role[Role["MANAGER"] = 3] = "MANAGER";
})(Role || (Role = {}));
console.log(Role);
