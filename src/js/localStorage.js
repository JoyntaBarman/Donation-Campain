function getStoredDonation () {
  const storedDonation = localStorage.getItem('Donation');
  const isArray = Array.isArray(JSON.parse(storedDonation));

  if(storedDonation) {
    return isArray? JSON.parse(storedDonation) : [];
  } else {
    return [];
  }
}

function saveDonationData (value) {
  const storedData = getStoredDonation();

  const findValue = storedData.find((element) => element === value)

  if(!findValue) {
    storedData.push(value);
    localStorage.setItem('Donation', JSON.stringify(storedData));
  }
}


export {getStoredDonation, saveDonationData}