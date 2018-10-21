const getSleepHours = day => {

  if(day === 'Monday'){

    return 9;

  }

  else if(day === 'Tuesday'){

    return 4;

  }

  else if(day === 'Wednesday'){

    return 7;

  }

  else if(day === 'Thursday'){

    return 8;

  }

  else if(day === 'Friday'){

    return 6;

  }

  else if(day === 'Saturday'){

    return 9;

  }

  else{

    return 10;

  }

};



const getActualSleepHours = () =>

  getSleepHours('Monday') + 

  getSleepHours('Tuesday') + 

  getSleepHours('Wednesday') +

  getSleepHours('Thursday') + 

  getSleepHours('Friday') + 

  getSleepHours('Saturday') +

  getSleepHours('Sunday');





const getIdealSleepHours = () =>{

  const idealHours = 9;

  return idealHours * 7;

}



const calculateSleepDebt = () =>{

  const actualSleepHours = getActualSleepHours();

  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){

    console.log("perfect amount of sleep!");

  }

  else if(actualSleepHours < idealSleepHours){

    console.log('you need some rest!');

    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');

  }else{

    console.log('you rest more than needed!');

  }

};



calculateSleepDebt();
