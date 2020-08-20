var orm = require("../config/orm.js");

// Call the orm functions
var burger = {

    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },

    insertBurger: function(burger_name, cb) {
        orm.insertBurger(burger_name, function(res) {
            cb(res);
        });
    },

    updateBurger: function(burger_id, cb) {
        orm.updateBurger(burger_id, function(res) {
            cb(res);
        });
    }
};

// Export
module.exports = burger;