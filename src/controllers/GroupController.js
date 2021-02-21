const Group = require("../models/Group");

class GroupController {

    async create(req, res) {
        Group.create(req.query, function (err, data) {
            return res.json(data);
        });
    }

    async update(req, res) {
        Group.findByIdAndUpdate(req.params.id, req.query, {new: true}, function (err, data) {
            return res.json(data);
        });
    }

    async findAll(req, res) {
        const data = await Group.find({});
        return res.json(data);
    }

    async findById(req, res) {
        const group = await Group.findById(req.params.id);
        return res.json(group);
    }

    async delete(req, res) {
        const group = await Group.findById(req.params.id);
        await group.remove();
        return res.send();
    }

}

module.exports = new GroupController();