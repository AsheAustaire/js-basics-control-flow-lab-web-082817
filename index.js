// Write your code in this file!

function scuberGreetingForFeet(feet) {

  if (feet < 400) {
    return 'This one is on me!';
  }

  else if (feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  }

  else if (feet > 2500) {
    return 'No can do.';
  }


}

function ternaryCheckCity(city) {

  return (city === 'NYC') ? 'Ok, sounds good.' :  'No go.';

}

function switchOnCharmFromTip(ammount) {

  switch (ammount){
    case 'generous' :
      return 'Thank you so much.'
      break;
    case 'not as generous' :
      return 'Thank you.'
      break;
    default :
      return 'Bye.'
      break;
  }
  switch (accountType) {
    case 'guest':
      permissionsLevel = 0;
    break;
    case 'user':
      permissionsLevel = 10;
      canViewProfiles = true;
    break;
    case 'admin':
      permissionsLevel = 20;
      canViewProfiles = true;
      canImpersonateUsers = true;
    break;
}

}
