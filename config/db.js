
// This is sample database
// username:admin
// password:admin
// username:user
// password:user

const db = {
	users: {
		data: [{
            uid:0,
            name: 'admin',
            email: 'admin@gmail.com',
            password: '$argon2id$v=19$m=65536,t=3,p=4$/+37rf8wEfm+frnSUEOMQA$RyzxlLktJixULN/YU6bFx944SUL/tLwFKBQo+oxHZVE',
            status: "admin",
            has_agreed: true,
            is_deleted: false
        },{
            uid:1,
            name: 'user',
            email: 'user@gmail.com',
            password: '$argon2id$v=19$m=65536,t=3,p=4$yxJmtuA1Qsdbh92/J7i77w$WZ7WBs0Mxm2sHQ9twxvRITuE103gJ9hzBrw0GTbTup0',
            status: "member",
            has_agreed: true,
            is_deleted: false,
            fname: "user",
            lname: "user",
            address: "user",
            postcode: "user",
            pnumber: "094343434343",
        },{
            uid:2,
            name: 'jovenbandagosa',
            email: 'jovenbandagosa@gmail.com',
            password: '$argon2id$v=19$m=65536,t=3,p=4$+EecCbv/cH3irdqFN2r5PA$EZv3ukx3W5HhUj3Y38VjDA3DeBWdevDwvx0hJC2SrOw',
            status: "member",
            has_agreed: true,
            is_deleted: false,
            fname: "Joven",
            lname: "Bandagosa",
            address: "Bicol",
            postcode: "4800",
            pnumber: "09453627897",
        },]
	}
};


module.exports = {
    db
};
