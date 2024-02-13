var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    var output = [];
    
    var applesPerBox = 4;
    var boxesPerPackage = 2;
    
    var currentAppleIndex = 0;
    while (currentAppleIndex < input.length) {
        var friendPackages = []; 
        
        for (var j = 0; j < boxesPerPackage; j++) {
            var packageBoxes = []; 
            
            for (var k = 0; k < applesPerBox; k++) {
                if (currentAppleIndex < input.length) {
                    packageBoxes.push(input[currentAppleIndex]);
                    currentAppleIndex++;
                }
            }
            
            if (packageBoxes.length > 0) {
                friendPackages.push(packageBoxes); 
            }
        }
        
        output.push(friendPackages); 
    }
    
    return output;
}

console.log(apples(input))
