var connection = require("../config/connect.js");

var orm = {
    
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertBurger: function(burger_name, cb) {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false,
        },
            function(err, result) {
                if (err) throw err;
                cb(result);
            }
        )
    },


    updateBurger: function(burgerID, cb) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerID}],
            function(err, result) {
                if (err) throw err;
                cb(result);
            }
        )
    }
}


// Export
module.exports = orm;