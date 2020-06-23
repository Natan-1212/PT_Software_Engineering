/////Combine objects, arrays, and functions/////

/*1-Create an object, called crayonBox, that has a property that is an array. 
The array should have the names of some crayons. 
Log one of the elements of that array.

const crayonPicker = (color) => {
    const crayonBox = {
        colors: ['red','green','blue','yellow','black']
    };
    return crayonBox.colors[color];
}; 
console.log(crayonPicker(1));// result = success =>green

2-Create an object bottle that has a property that is an object: cap. 
cap can have properties like material: 'metal' or 'plastic', color: blue or white etc.
 Log one of the properties of that inner object.
const bottle = {
    cap:{
        material:['metal','plastic','glass'],
        color:['blue','red','white','green', 'grey'],
        size:['small','medium','large', 'extra-large']
    }
}
console.log(bottle.cap.material[2]); // result=success =>glass
console.log(bottle.cap.size);  // result = success =>[ 'small', 'medium', 'large', 'extra-large']


3-Create an array called receipt that has at least one object in it. 
The inner objects should be items that have a name and a price. 
Log one of the properties of that inner object.

const receipt = [
   desktop = {
        name: 'IMac', 
        price:'$1,290' },
    television = {
        name:'Samsung',    
        price:'$960'
    }
];
console.log(receipt[1].name); // result=success =>Samsung 

4-Create an array called apartmentBuilding that has an array as one of its elements, 
the inner array should be the names of the tenants. Log one of the elements of the inner array

let apartmentBuilding = [
    namesOfTenants = ['Natan', 'Motasam', 'Angel','Jose', 'Hector']
];
console.log(apartmentBuilding[0][0]); // result=success => Natan */
