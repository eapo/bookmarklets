javascript:(function() {
  var container = document.createElement('div');
  container.id = 'container';
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.width = '200px';
  container.style.height = '200px';
  container.style.backgroundColor = 'red';
  container.style.opacity = '0.3';
  container.style.borderRadius = '10px';
  container.style.zIndex = '9999';
  container.style.userSelect = 'none';
  container.style.webkitUserSelect = 'none';
  container.style.msUserSelect = 'none';
  container.style.cursor = 'move';
  
  var close = document.createElement('div');
  close.style.position = 'absolute';
  close.style.top = '5px';
  close.style.right = '5px';
  close.style.width = '20px';
  close.style.height = '20px';
  close.style.backgroundColor = 'white';
  close.style.borderRadius = '50%';
  close.style.lineHeight = '20px';
  close.style.textAlign = 'center';
  close.style.fontSize = '14px';
  close.style.fontWeight = 'bold';
  close.style.cursor = 'pointer';
  close.innerHTML = 'X';
  close.addEventListener('click', function() {
    document.body.removeChild(container);
  });
  
  var input = document.createElement('input');
  input.id = 'countdown';
  input.type = 'number';
  input.style.width = '100%';
  input.style.height = '80%';
  input.style.fontSize = '72px';
  input.style.fontWeight = 'bold';
  input.style.textAlign = 'center';
  input.style.color = 'white';
  input.style.backgroundColor = 'transparent';
  input.placeholder = 'Enter seconds';

  var set10 = document.createElement('a');
  set10.href = '#';
  set10.textContent = '10';
  set10.style.cssText = 'font-size:18px;font-weight:bold;color:#ffffff !important';
  set10.style.padding = "0 1em";
  set10.addEventListener('click', function(event) {
    event.preventDefault();
    input.value = '10';
    startCountdown();
  });
  
  var set25 = document.createElement('a');
  set25.href = '#';
  set25.textContent = '25';
  set25.style.cssText = 'font-size:18px;font-weight:bold;color:#ffffff !important';
  set25.style.padding = "0 1em";
  set25.addEventListener('click', function(event) {
    event.preventDefault();
    input.value = '25';
    startCountdown();
  });
  
  var set50 = document.createElement('a');
  set50.href = '#';
  set50.textContent = '50';
  set50.style.cssText = 'font-size:18px;font-weight:bold;color:#ffffff !important';
  set50.style.padding = "0 1em";
  set50.addEventListener('click', function(event) {
    event.preventDefault();
    input.value = '50';
    startCountdown();
  });
  
  
  function startCountdown() {
    var countdown = parseInt(input.value);
    container.style.opacity = '0.3';
    var interval = setInterval(function() {
      countdown--;
      input.value = countdown;
      if (countdown === 0) {
        clearInterval(interval);
        container.style.opacity = '1';
      }
    }, 1000);
  }
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      startCountdown();
    }
  });

  var controls = document.createElement('div');
  controls.style.display = 'flex';
  controls.style.justifyContent = 'space-between';
  controls.style.marginTop = '10px';
  
  controls.appendChild(set10);
  controls.appendChild(set25);
  controls.appendChild(set50);
 
  container.appendChild(close);
  container.appendChild(input);
  container.appendChild(controls);
  document.body.appendChild(container);
  
  var isDragging = false;
  var offset = { x: 0, y: 0 };
  
  container.addEventListener('mousedown', function(event) {
    isDragging = true;
    offset.x = event.clientX - container.offsetLeft;
    offset.y = event.clientY - container.offsetTop;
  });
  
  container.addEventListener('mouseup', function() {
    isDragging = false;
  });
  
  container.addEventListener('mousemove', function(event) {
    if (isDragging) {
      container.style.left = (event.clientX - offset.x) + 'px';
      container.style.top = (event.clientY - offset.y) + 'px';
    }
  });
})();
