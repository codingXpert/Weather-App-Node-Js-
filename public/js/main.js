const submitBtn = document.getElementById('submitBtn');

const getInfo = (event) => {
    event.preventDefault();      // the problem with form is it tries to return
                                // back into its original or initial form after
                                // sending the data and refresh the page again 
                                // so to prevent we need  to pass an argument(event) to function and use preventDefault()
    alert('hii');
}

submitBtn.addEventListener('click' , getInfo);
