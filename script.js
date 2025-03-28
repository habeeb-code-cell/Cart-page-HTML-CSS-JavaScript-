document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#myform").addEventListener("submit", function (event) {
        event.preventDefault();

        let firstName = document.querySelector("#first-name").value;
        let lastName = document.querySelector("#last-name").value;
        let email = document.querySelector("#email").value;
        let birthDate = document.querySelector("#dob").value;
        let password = document.querySelector("#password").value;

        // ✅ Get radio button values correctly
        let partTimeChecked = document.getElementById("PartTime").checked;
        let fullTimeChecked = document.getElementById("fullTime").checked;

        let content = document.querySelector("form");
        content.innerHTML = `
            <h1>Welcome ${firstName} ${lastName}!</h1>
            <p>Your name is: ${firstName} ${lastName}</p>
            <p>Your email is: ${email}</p>
            <p>Your date of birth is: ${birthDate}</p>
            <p>Your password is: ${password}</p>
            <p style="color: red;">YOU HAVE BEEN REGISTERED!</p>
            <button class="yes">YES</button>
            <button class="no"><a href="form.html">NO</a></button>
        `;

        let jobtype = document.querySelector(".yes");
        if (jobtype) {
            jobtype.addEventListener("click", function () {
                if (partTimeChecked) {
                    window.location.href = "https://www.google.com";
                } else if (fullTimeChecked) {
                    window.location.href = "https://www.facebook.com";
                } else {
                    alert("Select a job type, please.");
                    location.reload();
                }
            });
        }
    });
});
