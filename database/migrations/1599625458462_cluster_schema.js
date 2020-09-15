'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClusterSchema extends Schema {
  up() {
    this.create('clusters', (table) => {
      table.increments()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable().unique()
      table.boolean('published').defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('clusters')
  }
}

module.exports = ClusterSchema
