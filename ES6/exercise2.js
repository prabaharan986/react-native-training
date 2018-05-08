var calculatePrice = (price, tax, discount=10) => {
    let taxablePrice = price - (price * (discount / 100));
    let priceWithTax =  taxablePrice + (taxablePrice * (tax / 100));
    return priceWithTax;
}

calculatePrice(500, 10); // 495
