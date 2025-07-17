// main.js

// Functionalitate principala, se executa dupa incarcarea completa a DOM-ului
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

    // Funcționalitate pentru butoanele de contact (Business/Individual) și formulare
    const btnContactBusiness = document.getElementById('btn-contact-business'); // Buton generic de Business (poate exista pe index.html)
    const btnContactIndividuals = document.getElementById('btn-contact-individuals'); // Buton generic pentru Individuali (poate exista pe index.html)
    const btnContactBusinessHero = document.getElementById('btn-contact-business-hero'); // Buton specific paginii business-grow.html (secțiunea Hero)
    const btnContactBusinessPage = document.getElementById('btn-contact-business-page'); // Buton specific paginii business-grow.html (secțiunea de jos)

    const contactFormsContainer = document.getElementById('contact-forms-container');
    const closeContactForms = document.getElementById('close-contact-forms');
    const formBusiness = document.getElementById('form-business');
    const formIndividuals = document.getElementById('form-individuals');

    // Functie ajutatoare pentru a deschide un formular si a-l inchide pe celalalt
    function openContactForm(formToShow, formToHide) {
        if (contactFormsContainer) {
            contactFormsContainer.classList.remove('hidden');
        }
        if (formToShow) {
            formToShow.classList.remove('hidden');
        }
        if (formToHide) {
            formToHide.classList.add('hidden');
        }
    }

    // Adaugă listeneri pentru butoanele de contact Business
    if (btnContactBusiness) {
        btnContactBusiness.addEventListener('click', () => {
            openContactForm(formBusiness, formIndividuals);
        });
    }
    if (btnContactBusinessHero) {
        btnContactBusinessHero.addEventListener('click', () => {
            openContactForm(formBusiness, formIndividuals);
        });
    }
    if (btnContactBusinessPage) {
        btnContactBusinessPage.addEventListener('click', () => {
            openContactForm(formBusiness, formIndividuals);
        });
    }

    // Adaugă listener pentru butonul de contact Individuals
    if (btnContactIndividuals) {
        btnContactIndividuals.addEventListener('click', () => {
            openContactForm(formIndividuals, formBusiness);
        });
    }

    // Adaugă listener pentru butonul de închidere a formularelor
    if (closeContactForms) {
        closeContactForms.addEventListener('click', () => {
            if (contactFormsContainer) {
                contactFormsContainer.classList.add('hidden');
            }
            if (formBusiness) {
                formBusiness.classList.add('hidden');
            }
            if (formIndividuals) {
                formIndividuals.classList.add('hidden');
            }
        });
    }

    // Funcționalitate pentru dropdown-urile cu selecție multiplă
    function setupMultiSelectDropdown(toggleId, optionsId, selectedTextId) {
        const dropdownToggle = document.getElementById(toggleId);
        const dropdownOptions = document.getElementById(optionsId);
        const selectedTextSpan = document.getElementById(selectedTextId);
        const checkboxes = dropdownOptions ? dropdownOptions.querySelectorAll('input[type="checkbox"]') : [];

        if (dropdownToggle && dropdownOptions && selectedTextSpan) {
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
