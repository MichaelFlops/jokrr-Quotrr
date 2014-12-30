Tasks = new Mongo.Collection("tasks");


if (Meteor.isClient) {
  Template.body.helpers ({
    tasks: function() {
      if (Session.get("hideCompleted")) {
        // if hide completed is checked, then filter the tasks
        return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
      } else {
        // otherwise return all of the jokes!
      return Tasks.find({}, {sort: {createdAt: -1}});
      }
    }, 
    hideCompleted: function() {
      return Session.get("hideCompleted");
    },
    incompleteCount: function() {
      return Tasks.find({checked: {$ne: true}}).count();
    }
});

  Template.body.events ({
  "submit .new-task": function(event) {
    // this function is called when you submit a new joke 'form'
    var text = event.target.text.value; 

    // replace Tasks.insert( ... ) with:
    Meteor.call("addTask", text);

    // the clear form
    event.target.text.value = "";

    // prevent default form submit
    return false;
  },
  "change .hide-completed input": function(event) {
    Session.set("hideCompleted", event.target.checked);
  }
});

  Template.task.events({
    "click .toggle-checked": function() {
      // set the checked propert to the opposite of its current value
      // replace Tasks.update( ... ) with:
      Meteor.call("setChecked", this._id, ! this.checked);
    },
    "click .delete": function() {
      if (confirm('are you sure you want to delete this joke/quote?')) {
      // replace the Tasks.remove(....) with...
      Meteor.call("deleteTask", this._id);
      };    
    }
});
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

Meteor.methods({
  addTask: function (text) {
  //makes sure that the user is logged in
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized bitch");
    }

    Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },

  deleteTask: function (taskId) {
    Tasks.remove(taskId);
  },
  setChecked: function (taskId, setChecked) {
    Tasks.update(taskId, { $set: { checked: setChecked}});
  }
});


