//How does the value of this keyword behave in a function passed as a callback of setTimeout()
//the callback function is called as a regular function, not as a method of an object.
const alarm = {
  ringer: function () {
    console.log("The " + this.color + " alarm: Ring!!!");
  },
  color: "red"
}

alarm.ringer();