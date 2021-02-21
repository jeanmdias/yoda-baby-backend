const Person = require("../models/Person");
const Group = require("../models/Group");

class PersonController {

    async create(req, res) {
        Person.create(req.query, function (err, person) {
            Group.findByIdAndUpdate(person.group, {$push: {persons: person}}, {new: true}).populate('persons').then(result => {
                return res.json(person);
            });
        });
    }

    async update(req, res) {
        Person.findByIdAndUpdate(req.params.id, req.query, {new: true}, function (err, data) {
            return res.json(data);
        });
    }

    async findAll(req, res) {
        const data = await Person.find({});
        return res.json(data);
    }

    async findById(req, res) {
        const person = await Person.findById(req.params.id);
        return res.json(person);
    }

    async delete(req, res) {
        const person = await Person.findById(req.params.id);
        await person.remove();
        return res.send();
    }

}

module.exports = new PersonController();