'use strict'

const {
    RamenController,
} = require("@ordentco/ramenbox/src/Controller/RamenController");

const ClusterService = use('App/Services/Cluster')

class ClusterController extends RamenController {
    constructor() {
        super(new ClusterService());
    }
}

module.exports = ClusterController
