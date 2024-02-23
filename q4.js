// write a class to calculate the Uber price.

class UberPriceCalculator {
    constructor(baseFarePerKm, costPerKm, surgeMultiplier) {
      this.baseFarePerKm = baseFarePerKm;
      this.costPerKm = costPerKm;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice(distanceInKm, surge = 1) {
      const surgePrice = this.surgeMultiplier * surge;
      const totalFare = this.baseFarePerKm + (this.costPerKm * distanceInKm * surgePrice);
      return totalFare;
    }
  }
  
  // Example usage:
  const baseFare = 2.5; // in dollars
  const costPerKm = 1.5; // in dollars
  const surgeMultiplier = 1.2; // 20% surge
  const distance = 10; // in kilometers
  
  const calculator = new UberPriceCalculator(baseFare, costPerKm, surgeMultiplier);
  const price = calculator.calculatePrice(distance);
  
  console.log("Total fare:", price);
  

