let db;

const request = indexedDB.open('BudgetDB');

request.onupgradeneeded = function (e) {
    console.log('Upgrade needed in IndexDB');
    db = e.target.result;
    if (db.objectStoreNames.length === 0) {
      db.createObjectStore('BudgetStore', { autoIncrement: true });
    }
  };

request.onerror = function (e) {
    console.log(`Error' ${e.target.errorCode}`);
  };

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
    }
}