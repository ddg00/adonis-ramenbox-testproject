'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const { RamenModel } = require("@ordentco/ramenbox/src/Model/RamenModel");

class Cluster extends RamenModel {
    static boot() {
        super.boot()

        this.addTrait('@provider:Lucid/Slugify', {
            fields: { slug: 'name' },
            strategy: 'dbIncrement',
            disableUpdates: true
        })
    }

    static get properties() {
        return [
            'id',
            'slug',
            'name',
            'published',
            'created_at',
            'updated_at'
        ]
    }
}

module.exports = Cluster
