new DataTable('#tableCRUD', {
    columnDefs: [
        {
            orderable: false,
            render: DataTable.render.select(),
            targets: 0
        }
    ],
    paging: true,
    searching: false,
    lengthChange: false,
    ordering: false,
    pageLength: 5,
    language: {
        paginate: {
            previous: 'Previous',
            next: 'Next'
        }
    },
    layout: {
        bottomEnd: {
            paging: {
                firstLast: false
            }
        }
    },
    select: {
        style: 'os',
        selector: 'td:first-child'
    }
});


const upsertModal = document.getElementById('upsertModal')
if (upsertModal) {
    upsertModal.addEventListener('show.bs.modal', event => {

        const button = event.relatedTarget
        const recipient = button.getAttribute('data-bs-whatever')
        const eid = button.getAttribute('data-bs-eid')

        const modalTitle = upsertModal.querySelector('.modal-title')
        modalTitle.textContent = recipient

        const elementId = upsertModal.querySelector('#hdnEmpID')
        elementId.value = eid;

        const btnElement = upsertModal.querySelector('#btnSave');
        if (parseInt(eid) > 0) {
            btnElement.textContent = "Save";
            btnElement.classList.remove('btn-success');
            btnElement.classList.add('btn-info');
        } else {
            btnElement.textContent = "Add";
            btnElement.classList.remove('btn-info');
            btnElement.classList.add('btn-success');
        }
    })
}


const deleteModal = document.getElementById('deleteModal')
if (deleteModal) {
    deleteModal.addEventListener('show.bs.modal', event => {

        const button = event.relatedTarget
        const eid = button.getAttribute('data-bs-eid')
        const elementId = deleteModal.querySelector('#hdnDelEmpID')

        elementId.value = eid;
    })
}