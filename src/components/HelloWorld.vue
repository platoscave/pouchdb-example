<template>
<div>
  Show people that are <input v-model="age"> years old. </input>
  <div v-for="person in people">
    {{ person.name }}
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        //resultsPerPage: 25,
        //currentPage: 1,
        age: 1
      }
    },
    // Use the pouch property to configure the component to (reactively) read data from pouchdb.
    pouch: {
      // The function returns a Mango-like selector that is run against the `people` database.
      // The result of the query is assigned to the `people` property.
      people: function() {
        if (!this.age) return;
        return {age: this.age, type: "person"}
      },
      // You can also specify the database dynamically (local or remote), as well as limits, skip and sort order:
/*       peopleInOtherDatabase: function() {
        return {
          database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
          selector: {type: "person"},
          sort: [{name: "asc"}],
          limit: this.resultsPerPage,
          skip: this.resultsPerPage * (this.currentPage - 1)
        }
      } */
    }
  })
</script>