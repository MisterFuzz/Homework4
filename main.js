class Food {
    constructor(name, calories) {
        this.name = name;
        this.calories = parseInt(calories);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    const items = [];

    items.push(new Food("Banana", "20"));
    items.push(new Food("Hot Dog", "450"));

    document.getElementById("FButton").addEventListener("click", function() {
        let fName = document.getElementById("FName").value;
        let fCalories = document.getElementById("FCalories").value;

        items.push(new Food(fName, fCalories));

        console.log(items);

        let calorieTotal = 0;
        for (let i of items) {
            calorieTotal += i.calories;
        }

        document.getElementById("TCalories").value = calorieTotal;
    });
});
