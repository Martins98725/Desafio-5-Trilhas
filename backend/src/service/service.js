const dataSource = require('../models');

class Service {
    constructor(model) {
        this.model = model;
    }

    async getAll(options = {}) {
        return dataSource[this.model].findAll(options);
    }

    async getById(id, options = {}) {
        return dataSource[this.model].findByPk(id, options);
    }

    async create(object) {
        return dataSource[this.model].create(object);
    }

    async update(object, id) {
        const listObject = dataSource[this.model].update(object, {
            where: { id: id }
        });
        if (listObject[0] === 0) {
            return false;
        }

        return true
    }

    async delete(id) {
        return dataSource[this.model].destroy({ where: { id: id } })
    }
}

module.exports = Service;