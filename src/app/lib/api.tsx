export const sendQuotationForm = async (data: any) => {

    fetch('http://localhost:3000/api/emailData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(response => {

            if (response.ok) {
                return response.json();
            } else {
                alert("Some thing went wrong. try again later.");
                return null;
            }
        })
        .then(data => {

            if (data.message === "Success") {
                alert("Your quotation successfully sent. We will response as soon as possible Thank you!");
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            alert(error);
        });

    // Reload the page regardless of the success of the API call.
    window.location.reload();
};
