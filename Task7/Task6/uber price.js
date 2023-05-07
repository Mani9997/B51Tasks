class Uber  {
    constructor(distance, time) {
        this.distance = distance;
        this.time = time;
    }
    calculatePrice() {
        const baseFare = 2.0;
        const distanceRate = 1.5;
        const timeRate = 0.3;
        const totalFare = baseFare + (distanceRate * this.distance) + (timeRate * this.time);
        return totalFare;
    }
}
 const rider1 = new Uber(10,30);
 const fare1 = rider1.calculatePrice();
 console.log(`the fare for this ride is $${fare1.toFixed(2)}.`);