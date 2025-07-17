// main.js

// Functionalitate pentru meniul mobil
document.addEventListener('DOMContentLoaded', () => {
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

    // Funcționalitate pentru butoanele de contact (Business/Individual)
    const btnContactBusiness = document.getElementById('btn-contact-business'); // Buton generic de Business
    const btnContactIndividuals = document.getElementById('btn-contact-individuals'); // Buton generic pentru Individuali
    const btnContactBusinessHero = document.getElementById('btn-contact-business-hero'); // Buton specific paginii business-grow.html (secțiunea Hero)
    const btnContactBusinessPage = document.getElementById('btn-contact-business-page'); // Buton specific paginii business-grow.html (secțiunea de jos)

    const contactFormsContainer = document.getElementById('contact-forms-container');
    const closeContactForms = document.getElementById('close-contact-forms');
    const formBusiness = document.getElementById('form-business');
    const formIndividuals = document.getElementById('form-individuals');

    if (btnContactBusiness) {
        btnContactBusiness.addEventListener('click', () => {
            contactFormsContainer.classList.remove('hidden');
            formBusiness.classList.remove('hidden');
            formIndividuals.classList.add('hidden'); // Asigură-te că celălalt formular este ascuns
        });
    }

    if (btnContactIndividuals) {
        btnContactIndividuals.addEventListener('click', () => {
            contactFormsContainer.classList.remove('hidden');
            formIndividuals.classList.remove('hidden');
            formBusiness.classList.add('hidden'); // Asigură-te că celălalt formular este ascuns
        });
    }

    // Adaugă listeneri pentru butoanele specifice de pe business-grow.html
    if (btnContactBusinessHero) {
        btnContactBusinessHero.addEventListener('click', () => {
            contactFormsContainer.classList.remove('hidden');
            formBusiness.classList.remove('hidden');
            formIndividuals.classList.add('hidden');
        });
    }

    if (btnContactBusinessPage) {
        btnContactBusinessPage.addEventListener('click', () => {
            contactFormsContainer.classList.remove('hidden');
            formBusiness.classList.remove('hidden');
            formIndividuals.classList.add('hidden');
        });
    }

    if (closeContactForms) {
        closeContactForms.addEventListener('click', () => {
            contactFormsContainer.classList.add('hidden');
            formBusiness.classList.add('hidden');
            formIndividuals.classList.add('hidden');
        });
    }

    // Funcționalitate pentru dropdown-urile cu selecție multiplă
    function setupMultiSelectDropdown(toggleId, optionsId, selectedTextId) {
        const dropdownToggle = document.getElementById(toggleId);
        const dropdownOptions = document.getElementById(optionsId);
        const selectedTextSpan = document.getElementById(selectedTextId);
        const checkboxes = dropdownOptions ? dropdownOptions.querySelectorAll('input[type="checkbox"]') : [];

        if (dropdownToggle && dropdownOptions) {
            dropdownToggle.addEventListener('click', () => {
                dropdownOptions.classList.toggle('hidden');
            });

            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    const selectedValues = Array.from(checkboxes)
                        .filter(cb => cb.checked)
                        .map(cb => cb.value);

                    if (selectedValues.length === 0) {
                        selectedTextSpan.textContent = selectedTextSpan.dataset.placeholder || 'Selectează o provocare';
                        selectedTextSpan.classList.remove('text-gray-900');
                        selectedTextSpan.classList.add('text-gray-700');
                    } else {
                        selectedTextSpan.textContent = selectedValues.join(', ');
                        selectedTextSpan.classList.remove('text-gray-700');
                        selectedTextSpan.classList.add('text-gray-900');
                    }
                });
            });

            // Adaugă placeholder-ul inițial ca data attribute
            if (selectedTextSpan) {
                selectedTextSpan.dataset.placeholder = selectedTextSpan.textContent;
            }

            // Închide dropdown-ul dacă se dă click în afara lui
            document.addEventListener('click', (event) => {
                if (!dropdownToggle.contains(event.target) && !dropdownOptions.contains(event.target)) {
                    dropdownOptions.classList.add('hidden');
                }
            });
        }
    }

    setupMultiSelectDropdown('business-challenge-dropdown-toggle', 'business-challenge-options', 'selected-business-challenges');
    setupMultiSelectDropdown('individual-challenge-dropdown-toggle', 'individual-challenge-options', 'selected-individual-challenges');
});