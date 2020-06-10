import Model from './model';

class Controller {
    constructor() {

    }
    getCrush() {
        return Model.find({});
    }
    select(req, res) {
        this.getCrush()
        .then(crush => res.status(200).json({"result":crush}))
        .catch(error => res.status(400).json({"result":error}));
    }
}

export default Controller;