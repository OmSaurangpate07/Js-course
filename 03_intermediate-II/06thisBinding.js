const hitesh = {
    firstName: "Hitesh",
    lastName: "Choudhary",
    role: "Admin",
    getInfo: function () {
        console.log(`
        First name is: ${this.firstName}
        Last name is: ${this.lastName}
        Role is: ${this.role}
        `);
    }
}

const dj = {
    firstName: "The",
    lastName: "Rock",
    role: "Subadmin"
}

// hitesh.getInfo();
// dj.getInfo();

var djInfo = hitesh.getInfo.bind(dj);
djInfo();
