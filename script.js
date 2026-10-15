const enquiryForm = document.getElementById("enquiry-form");
const formFeedback = document.getElementById("form-feedback");

if (enquiryForm && formFeedback) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        const customerName = document
            .getElementById("customer-name")
            .value.trim();

        formFeedback.textContent =
            `Thank you, ${customerName}! Your enquiry form has been completed. ` +
            "This is a prototype, so your message has not been sent.";

        enquiryForm.reset();
    });
}