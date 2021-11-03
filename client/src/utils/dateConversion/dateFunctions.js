export const forecastDays = (date) =>{
    let data = new Date(date).getDay()
    if(data===0){  
        return 'Sunday'
    }
    if(data===1){
        return 'Monday'
    }
    if(data===2){
        return 'Tuesday' 
       }
    if(data===3){
        return 'Wednesday'
        }
    if(data===4){
        return 'Thursday'
    }
    if(data===5){
        return 'Friday'
    }
    if(data===6){
        return 'Saturday'
    }
}