const chronometer = new Chronometer();
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const milDec = document.getElementById('milDec');
const milUni = document.getElementById('milUni');
const splits = document.getElementById('splits');

function printTime() {
  const time = chronometer.setTime().split('');
  printMinutes([time[0], time[1]]);
  printSeconds([time[3], time[4]]);
  printMilliseconds([time[6], time[7]]);
}

function printMinutes(min) {
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds(sec) {
  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

function printMilliseconds(mili) {
  milDec.innerHTML = mili[0];
  milUni.innerHTML = mili[1];
}

function printSplit() {
  const newSplit = document.createElement('li');
  newSplit.innerHTML = chronometer.setTime();
  splits.appendChild(newSplit);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.classList.add('stop');
  btnLeft.classList.remove('start');
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.add('split');
  btnRight.classList.remove('reset');
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.classList.add('start');
  btnLeft.classList.remove('stop');
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.classList.add('reset');
  btnRight.classList.remove('split');
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (btnLeft.innerHTML === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
  if (btnRight.innerHTML === 'RESET') {
    clearSplits();
    chronometer.resetClick();
    printTime();
  } else {
    printSplit();
  }
});
