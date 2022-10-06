
const addToStorage = breakTime => {
    let breakTimeObj = {};
  
    breakTimeObj = breakTime;
    
    localStorage.setItem('breakTimeObj', JSON.stringify(breakTimeObj));
  };
  
  const getStoredObj = () => {
    let breakTimeObj = 0;
  
    
    const storedbreakTimeObj = localStorage.getItem('breakTimeObj');
  
    if (storedbreakTimeObj) {
      breakTimeObj = JSON.parse(storedbreakTimeObj);
    }
  
  
    return breakTimeObj;
  };
  
  export { addToStorage, getStoredObj };