var cat = prompt("You spot a kitty cat. Nice fur and propably likes tuna. Do you PET it, FEED it, or PLAY with it? ").toUpperCase();

switch(cat){
    case "PET":
        var bice = prompt("Wow, The cat drops a black box should you pick it up? y/n").toUpperCase();
        if ('Y' === bice) {
           alert("Suddenly you get sucked into a portal!");
            var exuj = prompt("That cat.... You look up and you are on a boat. A Pirate ship. It seems... 'EXPLORE','JUMP','OTHER'").toUpperCase();         
                if(exuj === 'EXPLORE') {
                        alert('What One Piece!?! This is amazing!');
                    } else if(exuj === 'JUMP') {
                            alert('You bounce like a boucing ball into the ocean!');
                        } else {
                            alert('Game over');    
                        }
            } else if ('N' === bice) {
                 alert("Cat snuff you off");
                 alert("Game over!");
            } else {
                alert("Game Over") ;   
            }
    break;
    case "FEED":
        var rice = prompt("Wow, The cat drops a black box should you pick it up? y/n").toUpperCase();
        if ('Y' === rice) {
            alert("Suddenly you get sucked into a portal!");
            var exux = prompt("That cat.... You look up and you are on a boat. A Pirate ship. It seems... 'EXPLORE','JUMP','OTHER'").toUpperCase();         
                if(exux === 'EXPLORE') {
                        alert('What One Piece!?! This is amazing!');
                    } else if(exux === 'JUMP') {
                            alert('You bounce like a boucing ball into the ocean!');
                        } else {
                            alert('Game over');    
                        }
            } else if ('N' === rice) {
                 alert("Cat snuff you off");
                 alert("Game over!");
            } else {
                alert("Game Over");
            }
    break;
    case "PLAY":
        var tice = prompt("Wow, The cat drops a black box should you pick it up? y/n").toUpperCase();
        if ('Y' === tice) {
            alert("Suddenly you get sucked into a portal!");
            var exun = prompt("That cat.... You look up and you are on a boat. A Pirate ship. It seems... 'EXPLORE','JUMP','OTHER'").toUpperCase();        
                if(exun === 'EXPLORE') {
                        alert('What One Piece!?! This is amazing!');
                    } else if(exun === 'JUMP') {
                            alert('You bounce like a boucing ball into the ocean!');
                        } else {
                            alert('Game over');      
                        }
            } else if ('N' === tice) {
                 alert("Cat snuff you off");
                 alert("Game over!");
            } else {
                alert("Game Over");  
            }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");

}
