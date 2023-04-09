/*
Define a function that can answer the role of a user.
A user can be on following roles:
Admin - with all access
Subadmin - with access to create/delete course
Testprep - with access to create/delete tests
User - consume all content
other - trial user

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role) {
    switch (role) {
        case "Admin":
            return `${name} is admin with all access`
            break;
        case "Subadmin":
            return `${name} is subadmin with access to create/delete cources`
            break;
        case "Testprep":
            return `${name} is test prep with access to create/delete tests cources`
            break;
        case "User":
            return `${name} is a user to consume content`
            break;
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("Om", "User"));

var getRole = getUserRole("Hitesh", "Admin");
console.log(getRole);
