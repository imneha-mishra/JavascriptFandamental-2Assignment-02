
function calculateRemainingDays(eventDate){
    const currentDate=new Date();
    const eventDateTime=new Date(eventDate);

    const timeDefference = eventDateTime-currentDate;
    const daysRemaining= Math.ceil(timeDefference / (1000 *60 * 60 *24));
    return daysRemaining;
}
const eventDate ='2023-08-31';
console.log(calculateRemainingDays(eventDate));