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

        alert("Thank you, " + customerName + "! Your enquiry form has been completed.");

        enquiryForm.reset();
    });
}

/* Interactive flower collection */
const flowerDetails = {
  roses: "Roses are perfect for romantic occasions and anniversaries.",
  lilies: "Lilies are elegant flowers for celebrations and gifts.",
  tulips: "Tulips are colourful flowers for birthdays and special moments.",
  mixed: "Mixed bouquets combine seasonal flowers for every occasion."
};

function showFlowerDetails(flower) {
  const description = flowerDetails[flower];
  if (description) {
    alert(description);
  }
}

document.querySelectorAll(".product-card").forEach(function(card) {
  card.style.cursor = "pointer";
  card.setAttribute("tabindex", "0");

  card.addEventListener("click", function() {
    const name = card.textContent.toLowerCase();

    if (name.includes("rose")) {
      showFlowerDetails("roses");
    } else if (name.includes("lily") || name.includes("lilies")) {
      showFlowerDetails("lilies");
    } else if (name.includes("tulip")) {
      showFlowerDetails("tulips");
    } else {
      showFlowerDetails("mixed");
    }
  });

  card.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      card.click();
    }
  });
});