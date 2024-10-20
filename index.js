
// Task to build Task-Build-Your-Own-Virtual-Pet

  var pet = {
  name: prompt("What is your pet's name!"),
  type: prompt("What kind of pet is it (e.g dog, cat, dragon)?"),
  age: prompt(prompt("How old is your pet?")),
  happiness: prompt(prompt("How happy is your pet (0-100)?")),
  hunger: prompt(prompt("How hungry is your pet (0-100)?")),

  // Method to feed the pet
    feed: function() {
    this.hunger -= 20;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
    alert(`${this.name} has been fed! Hunger is now ${this.hunger}.`);
  },

  // Method to play with the pet
  play: function() {
    this.happiness += 20;
    if (this.happiness > 100) {
      this.happiness = 100;
    }
    alert(`${this.name} played and is happy! Happiness is now ${this.happiness}.`);
  },

  // Method to age the pet
  agePet: function() {
    this.age += 1;
    this.happiness -= 5;
    this.hunger += 10;

    if (this.happiness < 0) {
      this.happiness = 0;
    }

    alert(`${this.name} has aged! Age is now ${this.age}, Happiness is ${this.happiness}, and Hunger is ${this.hunger}.`);
  }
};

// Interactive part
function interactWithPet() {
  var userInput;
  
  do {
    userInput = prompt(`What would you like to do with suzi? Choose an action ${pet.name}?\n1 - Feed\n2 - Play\n3 - Age\n4 - Quit`);
    
    switch (userInput) {
      case '1':
        pet.feed();
        break;
      case '2':
        pet.play();
        break;
      case '3':
        pet.agePet();
        break;
      case '4':
        alert("Thank you! for taking care of suzi");
        break;
      default:
        alert("Invalid input! Please choose a number between 1 and 4.");
    }
  } while (userInput !== '4');
}

// Start interacting with the pet
interactWithPet();
