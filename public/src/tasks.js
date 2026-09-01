const centaurBtn = document.getElementById('centaurBtn');
const urinesBtn = document.getElementById('urinesBtn');
const ancillaryBtn = document.getElementById('ancillaryBtn');
const remisolBtn = document.getElementById('remisolBtn');

const centaurForm = document.getElementById('centaur');
const urinesForm = document.getElementById('urines-bench');
const ancillaryForm = document.getElementById('ancillary');
const remisolForm = document.getElementById('remisol');

centaurBtn.addEventListener('click', (e) => {
    centaurForm.classList.toggle('hidden');
    e.preventDefault();
    
    if (!ancillaryForm.classList.contains('hidden')) {
        ancillaryForm.classList.toggle('hidden');
        e.preventDefault();
    }
    if (!urinesForm.classList.contains('hidden')) {
        urinesForm.classList.toggle('hidden');
        e.preventDefault();
    }
    if (!remisolForm.classList.contains('hidden')) {
        remisolForm.classList.toggle('hidden');
        e.preventDefault();
    }
})

urinesBtn.addEventListener('click', (e) => {
    urinesForm.classList.toggle('hidden');
    e.preventDefault();

    if (!ancillaryForm.classList.contains('hidden')) {
        ancillaryForm.classList.toggle('hidden');
        e.preventDefault();
    }
    if (!centaurForm.classList.contains('hidden')) {
        centaurForm.classList.toggle('hidden');
        e.preventDefault();
    }
    if (!remisolForm.classList.contains('hidden')) {
        remisolForm.classList.toggle('hidden');
        e.preventDefault();
    }
})

ancillaryBtn.addEventListener('click', (e) => {
    ancillaryForm.classList.toggle('hidden');
    e.preventDefault();

    if (!urinesForm.classList.contains('hidden')) {
        urinesForm.classList.toggle('hidden');
        e.preventDefault();
    }
    if (!centaurForm.classList.contains('hidden')) {
        centaurForm.classList.toggle('hidden');
        e.preventDefault();
    }
    if (!remisolForm.classList.contains('hidden')) {
        remisolForm.classList.toggle('hidden');
        e.preventDefault();
    }
})

remisolBtn.addEventListener('click', (e) => {
    remisolForm.classList.toggle('hidden');
    e.preventDefault();

    if (!urinesForm.classList.contains('hidden')) {
        urinesForm.classList.toggle('hidden');
        e.preventDefault();
    }
    if (!centaurForm.classList.contains('hidden')) {
        centaurForm.classList.toggle('hidden');
        e.preventDefault();
    }
    if (!ancillaryForm.classList.contains('hidden')) {
        ancillaryForm.classList.toggle('hidden');
        e.preventDefault();
    }
})

document.addEventListener('keydown', (e) => {
    // Press 'b' when on page
    if (e.target.tagName === 'BODY' && e.key === 'b') {
        window.location.href = '/notes';
    }

    // Press 'c' when on page
    if (e.target.tagName === 'BODY' &&
        centaurForm.classList.contains('hidden')
    ) {
        if (e.key === 'c') {
            centaurForm.classList.toggle('hidden');
            e.preventDefault();
            
            if (!ancillaryForm.classList.contains('hidden')) {
                ancillaryForm.classList.toggle('hidden');
                e.preventDefault();
            }
            if (!urinesForm.classList.contains('hidden')) {
                urinesForm.classList.toggle('hidden');
                e.preventDefault();
            }
            if (!remisolForm.classList.contains('hidden')) {
                remisolForm.classList.toggle('hidden');
                e.preventDefault();
            }
        }
        
    }

    // Press 'u' when on page
    if (e.target.tagName === 'BODY' &&
        urinesForm.classList.contains('hidden')
    ) {
        if (e.key === 'u') {
            urinesForm.classList.toggle('hidden');
            e.preventDefault();

            if (!ancillaryForm.classList.contains('hidden')) {
                ancillaryForm.classList.toggle('hidden');
                e.preventDefault();
            }
            if (!centaurForm.classList.contains('hidden')) {
                centaurForm.classList.toggle('hidden');
                e.preventDefault();
            }
            if (!remisolForm.classList.contains('hidden')) {
                remisolForm.classList.toggle('hidden');
                e.preventDefault();
            }
        }
    }

    // Press 'a' when on page
    if (e.target.tagName === 'BODY' &&
        ancillaryForm.classList.contains('hidden')
    ) {
        if (e.key === 'a') {
            ancillaryForm.classList.toggle('hidden');
            e.preventDefault();

            if (!urinesForm.classList.contains('hidden')) {
                urinesForm.classList.toggle('hidden');
                e.preventDefault();
            }
            if (!centaurForm.classList.contains('hidden')) {
                centaurForm.classList.toggle('hidden');
                e.preventDefault();
            }
            if (!remisolForm.classList.contains('hidden')) {
                remisolForm.classList.toggle('hidden');
                e.preventDefault();
            }
        }
    }

    // Press 'r' when on page
    if (e.target.tagName === 'BODY' &&
        remisolForm.classList.contains('hidden')
    ) {
        if (e.key === 'r') {
            remisolForm.classList.toggle('hidden');
            e.preventDefault();

            if (!urinesForm.classList.contains('hidden')) {
                urinesForm.classList.toggle('hidden');
                e.preventDefault();
            }
            if (!centaurForm.classList.contains('hidden')) {
                centaurForm.classList.toggle('hidden');
                e.preventDefault();
            }
            if (!ancillaryForm.classList.contains('hidden')) {
                ancillaryForm.classList.toggle('hidden');
                e.preventDefault();
            }
        }
    }

})


