
const phoneBook = [
    { name: 'Jacques', number: '098756475' },
    { name: 'Mitchell', number: '384756938' },
];

function renderphoneBook(){
    let output = '<ol>'
    phoneBook.forEach((contact)=>{
        output += `<li>${contact.name} - ${contact.number}<li>`
    });

    output += '</ol>';
    document.body.innerHTML= output
}

function saveContact(contact){
    //USING PROMISES
    return new Promise((resolve,reject)=>{
        
    setTimeout(()=> {

        //let the promise caller know that we were successful
        resolve(contact);

        //failed to save our contact
        // reject(newError('failed to save contact'))

    },5000)
    });
}

const newContact = {
    name:'Cam',
    number: '239293774',
}

renderphoneBook();

async function init(){
    try{
        //await the promise
        const response = await saveContact(newContact);

        //hizi next 2 lines hazitokua run... na ikifail itaenda straight to catch
        phoneBook.push(response)
        renderphoneBook();
    }
    catch(err){
        //handle the error
        alert(err.message)
    }
}
init ()



    // //USING CALLBACKS 
    // setTimeout(()=> {
    //     phoneBook.push(contact);

    //     //let the caller know that we have saved
    //     callback()
    // },5000)


// const promise = saveContact(newContact);

// promise.then ((response) => {

//     //handle success
//     phoneBook.push(response)
//     renderphoneBook();
// }).catch((err) =>{
//     //handle error
//     alert(err.message)
// })