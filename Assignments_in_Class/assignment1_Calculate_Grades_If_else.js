let mymarks = 89;
if (mymarks >= 90 && mymarks <= 100) {
    console.log(`Marks = ${mymarks}  :Grade A`);
}else if (mymarks >= 80 && mymarks < 90) {
    console.log(`Marks = ${mymarks}  :Grade B`);
}else if (mymarks >= 70 && mymarks < 80) {
    console.log(`Marks = ${mymarks}  :Grade C`);   
}else if (mymarks >= 60 && mymarks < 70) {
    console.log(`Marks = ${mymarks}  :Grade D`);   
}else if (mymarks >= 0 && mymarks < 60) {
    console.log(`Marks = ${mymarks}  :Grade F`);           
} else {
    console.log(`Marks = ${mymarks}  :Invalid marks`);      
    }