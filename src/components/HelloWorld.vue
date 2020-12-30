<template>
  <div>
    Show people that are <input v-model="age" /> years old.
    <div v-for="person in people" :key="person.message">
      {{ person.name }}
    </div>
    <button @click="$pouch.post({ 'name': 'Joe', 'age': 78 })">Save Todo</button> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      //resultsPerPage: 25,
      //currentPage: 1,
      age: 78,
      message: ''
    };
  },
  // Use the pouch property to configure the component to (reactively) read data from pouchdb.
  pouch: {
    // The function returns a Mango-like selector that is run against the `people` database.
    // The result of the query is assigned to the `people` property.
    //pouch: function () {
      //if (!this.age) return;
      //return { age: this.age, type: "person" };
      // The simplest usage. queries all documents from the "todos" pouch database and assigns them to the "todos" vue property.
      //people: {/*empty selector*/}
    //},
    people: {/*empty selector*/}
    // You can also specify the database dynamically (local or remote), as well as limits, skip and sort order:
    /*       peopleInOtherDatabase: function() {
        return {
          database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
          selector: {type: "person"},
          sort: [{name: "asc"}],
          limit: this.resultsPerPage,
          skip: this.resultsPerPage * (this.currentPage - 1)
        }*/
  },
  mounted() {
    console.log(this.$pouch)
    //setTimeout(() => this.$pouch.put({ "_id": "1", "name": "Joe", "age": 78 }), 5000);
    setTimeout(() => this.$pouch.post({ "name": "Joe", "age": 78 }), 5000);
  },
};
</script>