function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    function formatFoodAmount() {
        return (foodAmount + 'гр ');
    }

    this.feed = function () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + 'корма');
    };

    this.dailyNorm = function (amount) {
        if (!arguments.length) {
            return formatFoodAmount();
        }
        if (amount < 50) {
            throw new Error("Нужно больше корма");
        } else if (amount > 100) {
            throw new Error("Нужно меньше корма");
        }
        foodAmount = amount;
    };
}
var barsik = new Cat('Барсик');
barsik.dailyNorm(54);
console.log(barsik.feed());
console.log(barsik.name);
barsik = null;


