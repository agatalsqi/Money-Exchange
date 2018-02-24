module.exports = function makeExchange(currency) {
    if (currency <= 10000) {
        if (currency > 0) {
            var coins = {
                H: 50,
                Q: 25,
                D: 10,
                N: 5,
                P: 1
            };
                var coinsAmounts = {};
                var currentNominalAmount = Math.floor(currency / coins['H']);
                var coinsRemainder = currency % coins['H'];
                if (currentNominalAmount){
                    coinsAmounts.H = currentNominalAmount;
                }
                if (coinsRemainder) {
                    currentNominalAmount = Math.floor(coinsRemainder / coins['Q']);
                    coinsRemainder = coinsRemainder % coins['Q'];
                    if (currentNominalAmount) {
                        coinsAmounts.Q = currentNominalAmount;
                    }
                    if (coinsRemainder) {
                        currentNominalAmount = Math.floor(coinsRemainder / coins['D']);
                        coinsRemainder = coinsRemainder % coins['D'];
                        if (currentNominalAmount) {
                            coinsAmounts.D = currentNominalAmount;
                        }
                        if (coinsRemainder) {
                            currentNominalAmount = Math.floor(coinsRemainder / coins['N']);
                            coinsRemainder = coinsRemainder % coins['N'];
                            if (currentNominalAmount) {
                                coinsAmounts.N = currentNominalAmount;
                            }
                            if (coinsRemainder) {
                                currentNominalAmount = Math.floor(coinsRemainder / coins['P']);
                                if (currentNominalAmount){
                                    coinsAmounts.P = currentNominalAmount;
                                } 
                            }
                        }
                    }
                }
                console.log(coinsAmounts);
                return coinsAmounts;
            }
            else {
                return {};
            }
        }
    else {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
}