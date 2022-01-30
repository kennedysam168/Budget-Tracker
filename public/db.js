let db;

const request = indexedDB.open('budgetdb', 1);

request.onupgradeneeded = function (e) {
    console.log('Upgrade needed in IndexDB');
    db = e.target.result;
      db.createObjectStore('budgetdb', { autoIncrement: true });
  };


request.onsuccess = function(event) {
    db = event.target.result;
    if (navigator.onLine) {
      checkDatabase();
    }
  };
request.onerror = function (e) {
    console.log(`Error' ${e.target.errorCode}`);
  };

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.JSON())
      .then((res) => {
        if (res.length !== 0) {
            transaction = db.transaction(['budgetdb'], 'readwrite');
            const currentStore = transaction.objectStore('budgetdb');
            currentStore.clear();
            console.log('Clearing store 🧹');
          }
      })
      
    }
}

const saveRecord = (record) => {
    console.log('Save record invoked');
    const transaction = db.transaction(['budgetdb'], 'readwrite');
    const store = transaction.objectStore('budgetdb');
    store.add(record);
  };
  window.addEventListener('online', checkDatabase);

  request.onsuccess = function (e) {
    console.log('success');
    db = e.target.result;
  
    if (navigator.onLine) {
      console.log('Backend online! 🗄️');
      checkDatabase();
    }
  };

  window.addEventListener("online", checkDatabase);