'use strict'

const moment = require('moment')

const {
    RamenServices
} = require('@ordentco/ramenbox/src/Services/RamenServices')

const Cluster = use("App/Models/Cluster");

class ClusterService extends RamenServices {
    constructor() {
        super(Cluster)
        this.repositories = {}
    }
}

module.exports = ClusterService