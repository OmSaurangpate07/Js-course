var User = {
    name: "",
    getUserName: function() {
        console.log(`User name is: ${this.name}`);
    },
};

var hitesh = Object.create(User);
// console.log(hitesh);
hitesh.name = "Hitesh Choudhary";
hitesh.getUserName();

var om = Object.create(User, {
    name: {value: "Om Saurangpate"},
});

om.getUserName();
