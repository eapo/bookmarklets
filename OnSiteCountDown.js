javascript:(function() {
  var container = document.createElement('div');
  container.id = 'container';
  container.style.cssText='position:fixed;bottom:10vw;left:10vh;width:200px;height:200px;background-color:red;opacity:0.3;border-radius:15px;z-index:9999;user-select:none;cursor:move;box-shadow:#fff 3px 3px 1px;';
  
  var close = document.createElement('div');
  close.style.cssText='position:absolute;top:0;right:0;width:1em;height:1em;border:2px solid #fff;border-radius:15px;text-align:center;font-size:1.3em;font-weight:bold;cursor:pointer;padding:0.7em;color:#fff;line-height:0;text-indent:-0.3em;font-family:monospace;';
  close.innerHTML = 'X';
  close.addEventListener('click', function() {
    document.body.removeChild(container);
  });
  
  var input = document.createElement('input');
  input.id = 'countdown';
  input.type = 'number';
  input.accessKey = 's';
  input.title = 'Alt + s';
  input.style.cssText='width:100%;height:76%;font-size:72px;font-weight:bold;text-align:center;color:#fff;background-color:transparent;border:1px inset;border-radius:15px;';
  input.placeholder = 'Enter seconds';

  function playSound() {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 432;
    osc.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.18);
    ctx.oncomplete = function(event) {
      const audioBuffer = event.renderedBuffer;
      const audioData = new Float32Array(audioBuffer.length);
    }
  }
  
  function startCountdown() {
    var countdown = parseInt(input.value);
    container.style.opacity = '0.3';
    var interval = setInterval(function() {
      countdown--;
      input.value = countdown;
      if (countdown === 0) {
        clearInterval(interval);
        container.style.opacity = '1';
        playSound();
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
  
  function addButton(v,a) {
    var set1 = document.createElement('button');
    set1.textContent = v;
    set1.accessKey = a;
    set1.title = 'Alt + '+a;
    set1.style.cssText = 'font-size:18px;font-weight:bold;padding:0 1em;font-family:monospace;background:none;border:none;';
    set1.addEventListener('click', function(event) {
      event.preventDefault();
      input.value = v;
      startCountdown();
    });
    return set1;
  }
  
  controls.appendChild(addButton(9,1));
  controls.appendChild(addButton(28,2));
  controls.appendChild(addButton(57,3));
 
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
