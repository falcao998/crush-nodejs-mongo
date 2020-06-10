import Model from './model';

class Controller {
    constructor() {

    }
    getCrush() {
        return Model.find({});
    }
    select(req, res) {
        this.getCrush()
            .then(crush => res.status(200).json({ "result": crush }))
            .catch(error => res.status(400).json({ "result": error }));
    }

    getCrushById(id) {
        return Model.findById(id);
    }
    selectOne(req, res) {
        const id = { _id: req.param.id };

        this.getCrushById(id)
            .then(crush => res.status(200).json({ "result": crush }))
            .catch(error => res.status(400).json({ "error": error }));
    }

    deleteById(id) {
        return Model.deleteOne(id);
    }
    delete(req, res) {
        const id = { _id: req.param.id };

        this.deleteById(id)
            .then(crush => res.status(200).json({ "result": crush }))
            .catch(error => res.status(400).json({ "error": error }));
    }

    updateCrush(id, data) {
        return Model.findByIdAndUpdate(id,data);
    }
    update(req, res) {
        const id = { _id: req.param.id };

        this.deleteById(id)
            .then(crush => res.status(200).json({ "result": crush }))
            .catch(error => res.status(400).json({ "error": error }));
    }
}

export default Controller;