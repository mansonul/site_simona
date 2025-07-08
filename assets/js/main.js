// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Functionalitate pentru meniul mobil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Închide meniul mobil când se apasă pe un link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Functionalitate pentru formularele de contact (pop-up)
    const contactFormsContainer = document.getElementById('contact-forms-container');
    const btnContactBusiness = document.getElementById('btn-contact-business');
    const btnContactIndividuals = document.getElementById('btn-contact-individuals');
    const formBusiness = document.getElementById('form-business');
    const formIndividuals = document.getElementById('form-individuals');
    const closeContactFormsButton = document.getElementById('close-contact-forms');

    function showForm(formToShow) {
        contactFormsContainer.classList.remove('hidden');
        formBusiness.classList.add('hidden');
        formIndividuals.classList.add('hidden');
        formToShow.classList.remove('hidden');
        document.body.classList.add('overflow-hidden'); // Blochează scroll-ul pe fundal
    }

    function hideForms() {
        contactFormsContainer.classList.add('hidden');
        document.body.classList.remove('overflow-hidden'); // Reactivează scroll-ul
    }

    if (btnContactBusiness) {
        btnContactBusiness.addEventListener('click', () => {
            showForm(formBusiness);
        });
    }

    if (btnContactIndividuals) {
        btnContactIndividuals.addEventListener('click', () => {
            showForm(formIndividuals);
        });
    }

    if (closeContactFormsButton) {
        closeContactFormsButton.addEventListener('click', hideForms);
    }

    // Închide formularul și la click în afara lui (pe overlay)
    if (contactFormsContainer) {
        contactFormsContainer.addEventListener('click', (event) => {
            if (event.target === contactFormsContainer) {
                hideForms();
            }
        });
    }
});