const centaurBtn = document.getElementById('centaurBtn');
const urinesBtn = document.getElementById('urinesBtn');
const ancillaryBtn = document.getElementById('ancillaryBtn');
const remisolBtn = document.getElementById('remisolBtn');

const centaurForm = document.getElementById('centaur');
const urinesForm = document.getElementById('urines-bench');
const ancillaryForm = document.getElementById('ancillary');
const remisolForm = document.getElementById('remisol');

const addTaskInput = document.getElementById('add-task');

const taskCheck = document.getElementById('visual');

taskCheck.addEventListener('click', (e) => {
    taskCheck.classList.toggle('checked');
    const id = e.target.dataset.id;
    const task = document.querySelector(`td[data-id="${id}"]`);

    task.classList.toggle('completed');
})



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
    // Press 'n' when on page
    if (e.target.tagName === 'BODY' && e.key === 'n') {
        window.location.href = '/';
    }

    // Press 'h' when on page
    if (e.target.tagName === 'BODY' && e.key === 'h') {
        window.location.href = '/history';
    }

    // Press 'c' when on page
    if (e.target.tagName === 'BODY') {
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
    if (e.target.tagName === 'BODY') {
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
    if (e.target.tagName === 'BODY') {
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
    if (e.target.tagName === 'BODY') {
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

    // Focus task input with 't'
    if (e.target.tagName === 'BODY' && e.key === 't') {
        e.preventDefault();
        addTaskInput.focus();
    }

    // Blur task input with 'Escape'
    if (e.target.tagName === 'INPUT' && e.key === 'Escape') {
        addTaskInput.blur();
    }

    // Press 'Enter' when inside a cell
    if (e.target.tagName === 'TD') {
        if (e.key === 'Enter') {
            e.preventDefault();
            const id = e.target.dataset.id;
            const value = e.target.textContent;
            fetch('/update-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    value: value
                })
            });
            e.target.blur();
        }
    }

})


