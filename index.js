         // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetSection = document.querySelector(this.getAttribute('href'));
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Handle contact form submission
        const contactForm = document.getElementById('contactForm');
        const messageBox = document.getElementById('messageBox');
        const messageTitle = document.getElementById('messageBoxTitle');
        const messageText = document.getElementById('messageBoxText');
        const closeMessageBoxButton = document.getElementById('messageBoxClose');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the page from reloading

            const userName = document.getElementById('name').value;
            const userEmail = document.getElementById('email').value;
            // const userMessage = document.getElementById('message').value; // Not used in message, so can be omitted for simplicity

            if (userName && userEmail) {
                messageTitle.textContent = 'Message Sent!';
                messageText.textContent = 'Thank you, ' + userName + '! We will get back to you soon.';
                messageBox.classList.add('show'); // Show the message box
                contactForm.reset(); // Clear the form fields
            } else {
                messageTitle.textContent = 'Error!';
                messageText.textContent = 'Please fill in your name and email address.';
                messageBox.classList.add('show'); // Show the error message
            }
        });

        // Close message box when OK button is clicked
        closeMessageBoxButton.addEventListener('click', function() {
            messageBox.classList.remove('show');
        });

        // Close message box if clicked outside the content (on the dark overlay)
        messageBox.addEventListener('click', function(event) {
            if (event.target === messageBox) {
                messageBox.classList.remove('show');
            }
        });
    