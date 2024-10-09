const dogPic = document.querySelector(".dog-pic");
const left = document.querySelector(".fa-caret-left");
const right = document.querySelector(".fa-caret-right");
const dogName = document.querySelector(".dog-name");

let currDog = 1;

left.addEventListener("click", () => {
  if (currDog > 1) {
    currDog--;
    dogPic.src = `images/dog-${currDog}.jpg`;
    switch (currDog) {
      case 1:
        dogName.textContent = "German shepard";
        break;
      case 2:
        dogName.textContent = "Bulldog";
        break;
      case 3:
        dogName.textContent = "French Bulldog";
        break;
      case 4:
        dogName.textContent = "Siberian Husky";
        break;
      case 5:
        dogName.textContent = "Beagle";
        break;
      case 6:
        dogName.textContent = "Alaskan Malamute";
        break;
      case 7:
        dogName.textContent = "Pooodle";
        break;
      case 8:
        dogName.textContent = "Chihuahua";
        break;
      case 9:
        dogName.textContent = "Australian cattle";
        break;
      case 10:
        dogName.textContent = "Dachshund";
        break;
      case 11:
        dogName.textContent = "Bernese Mountain";
        break;
      case 12:
        dogName.textContent = "Rottweiler";
        break;
      case 13:
        dogName.textContent = "Boxer";
        break;
      case 14:
        dogName.textContent = "Bichon Frise";
        break;
      case 15:
        dogName.textContent = "Maltese";
        break;
      case 16:
        dogName.textContent = "Afghan Hound";
        break;
      case 17:
        dogName.textContent = "American Eskimo";
        break;
      case 18:
        dogName.textContent = "Yorkshire Terrier";
        break;
      case 19:
        dogName.textContent = "Newfoundland";
        break;
      case 20:
        dogName.textContent = "Havanese";

      default:
        break;
    }
  }
  if (currDog === 20) {
    currDog = 20;
    dogPic.src = `images/dog-${currDog}.jpg`;
    switch (currDog) {
      case 1:
        dogName.textContent = "German shepard";
        break;
      case 2:
        dogName.textContent = "Bulldog";
        break;
      case 3:
        dogName.textContent = "French Bulldog";
        break;
      case 4:
        dogName.textContent = "Siberian Husky";
        break;
      case 5:
        dogName.textContent = "Beagle";
        break;
      case 6:
        dogName.textContent = "Alaskan Malamute";
        break;
      case 7:
        dogName.textContent = "Pooodle";
        break;
      case 8:
        dogName.textContent = "Chihuahua";
        break;
      case 9:
        dogName.textContent = "Australian cattle";
        break;
      case 10:
        dogName.textContent = "Dachshund";
        break;
      case 11:
        dogName.textContent = "Bernese Mountain";
        break;
      case 12:
        dogName.textContent = "Rottweiler";
        break;
      case 13:
        dogName.textContent = "Boxer";
        break;
      case 14:
        dogName.textContent = "Bichon Frise";
        break;
      case 15:
        dogName.textContent = "Maltese";
        break;
      case 16:
        dogName.textContent = "Afghan Hound";
        break;
      case 17:
        dogName.textContent = "American Eskimo";
        break;
      case 18:
        dogName.textContent = "Yorkshire Terrier";
        break;
      case 19:
        dogName.textContent = "Newfoundland";
        break;
      case 20:
        dogName.textContent = "Havanese";

      default:
        break;
    }
  }
});

right.addEventListener("click", () => {
  if (currDog < 20) {
    currDog++;
    dogPic.src = `images/dog-${currDog}.jpg`;
    switch (currDog) {
      case 1:
        dogName.textContent = "German shepard";
        break;
      case 2:
        dogName.textContent = "Bulldog";
        break;
      case 3:
        dogName.textContent = "French Bulldog";
        break;
      case 4:
        dogName.textContent = "Siberian Husky";
        break;
      case 5:
        dogName.textContent = "Beagle";
        break;
      case 6:
        dogName.textContent = "Alaskan Malamute";
        break;
      case 7:
        dogName.textContent = "Pooodle";
        break;
      case 8:
        dogName.textContent = "Chihuahua";
        break;
      case 9:
        dogName.textContent = "Australian cattle";
        break;
      case 10:
        dogName.textContent = "Dachshund";
        break;
      case 11:
        dogName.textContent = "Bernese Mountain";
        break;
      case 12:
        dogName.textContent = "Rottweiler";
        break;
      case 13:
        dogName.textContent = "Boxer";
        break;
      case 14:
        dogName.textContent = "Bichon Frise";
        break;
      case 15:
        dogName.textContent = "Maltese";
        break;
      case 16:
        dogName.textContent = "Afghan Hound";
        break;
      case 17:
        dogName.textContent = "American Eskimo";
        break;
      case 18:
        dogName.textContent = "Yorkshire Terrier";
        break;
      case 19:
        dogName.textContent = "Newfoundland";
        break;
      case 20:
        dogName.textContent = "Havanese";

      default:
        break;
    }
  }
  if (currDog === 20) {
    currDog = 1;
    dogPic.src = `images/dog-${currDog}.jpg`;
    switch (currDog) {
      case 1:
        dogName.textContent = "German shepard";
        break;
      case 2:
        dogName.textContent = "Bulldog";
        break;
      case 3:
        dogName.textContent = "French Bulldog";
        break;
      case 4:
        dogName.textContent = "Siberian Husky";
        break;
      case 5:
        dogName.textContent = "Beagle";
        break;
      case 6:
        dogName.textContent = "Alaskan Malamute";
        break;
      case 7:
        dogName.textContent = "Pooodle";
        break;
      case 8:
        dogName.textContent = "Chihuahua";
        break;
      case 9:
        dogName.textContent = "Australian cattle";
        break;
      case 10:
        dogName.textContent = "Dachshund";
        break;
      case 11:
        dogName.textContent = "Bernese Mountain";
        break;
      case 12:
        dogName.textContent = "Rottweiler";
        break;
      case 13:
        dogName.textContent = "Boxer";
        break;
      case 14:
        dogName.textContent = "Bichon Frise";
        break;
      case 15:
        dogName.textContent = "Maltese";
        break;
      case 16:
        dogName.textContent = "Afghan Hound";
        break;
      case 17:
        dogName.textContent = "American Eskimo";
        break;
      case 18:
        dogName.textContent = "Yorkshire Terrier";
        break;
      case 19:
        dogName.textContent = "Newfoundland";
        break;
      case 20:
        dogName.textContent = "Havanese";

      default:
        break;
    }
  }
});
