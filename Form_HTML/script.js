document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sampleForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Form validation
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = document.getElementById("age").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const country = document.getElementById("country").value;

        if (!fname || !lname || !email || !age || !gender || !country) {
            alert("Please fill out all required fields.");
            return;
        }

        // Submit the form data (for demo, we just log it to the console)
        console.log({
            firstName: fname,
            lastName: lname,
            email: email,
            age: age,
            gender: gender.value,
            country: country,
            comments: document.getElementById("comments").value.trim(),
            hobbies: Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(hobby => hobby.value)
        });

        alert("Form submitted successfully!");

        // If you need to actually submit the form, uncomment the line below
        // form.submit();
    });
});
