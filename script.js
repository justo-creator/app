document.addEventListener('DOMContentLoaded', () => {
    const nameUser = document.getElementById('nameUser');
    const countNumber = document.getElementById('countNumber');
    const initialAmount = document.getElementById('initialAmount');
    const accountForm = document.getElementById('accountForm');
    const listHistory = document.getElementById('listHistory');

    const createBankAccount = (event) => {
        event.preventDefault(); // Previene la recarga de la página

        const inputText = nameUser.value.trim();
        const inputCount = countNumber.value;
        const initialAmountValue = initialAmount.value;

        if (!inputText || !inputCount || !initialAmountValue) {
            alert('Por favor, complete todos los campos');
            return;
        }

        const createLi = document.createElement('li');
        const createSpan = document.createElement('span');

        createSpan.textContent = `Nombre: ${inputText}, Cuenta: ${inputCount}, Monto Inicial: ${initialAmountValue}`;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', editAccount);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteAccount);

        createLi.appendChild(createSpan);
        createLi.appendChild(editBtn);
        createLi.appendChild(deleteBtn);
        listHistory.appendChild(createLi);

        nameUser.value = '';
        countNumber.value = '';
        initialAmount.value = '';
    };

    const editAccount = (event) => {
        const li = event.target.parentElement;
        const span = li.querySelector('span');
        const currentText = span.textContent;
        const [currentName, currentCount, currentAmount] = currentText.match(/: ([^,]+)/g).map(text => text.slice(2));

        const editInput = prompt('Ingrese nuevo nombre, cuenta y monto inicial separados por comas', `${currentName}, ${currentCount}, ${currentAmount}`);
        if (!editInput) return;

        const editInputArr = editInput.split(',');
        const newName = editInputArr[0]?.trim();
        const newCount = editInputArr[1]?.trim();
        const newInitialAmount = editInputArr[2]?.trim();

        if (!newName || !newCount || !newInitialAmount) {
            alert('Por favor, complete todos los campos');
            return;
        }

        span.textContent = `Nombre: ${newName}, Cuenta: ${newCount}, Monto Inicial: ${newInitialAmount}`;
    };

    const deleteAccount = (event) => {
        const li = event.target.parentElement;
        listHistory.removeChild(li);
    };

    accountForm.addEventListener('submit', createBankAccount);
    
});
