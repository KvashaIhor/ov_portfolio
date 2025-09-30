export function startTimer(targetId = 'timer') {
    let startTime = Date.now();
  
    function formatTime(ms) {
      const totalSeconds = Math.floor(ms / 1000);
      const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
      const secs = String(totalSeconds % 60).padStart(2, '0');
      const millis = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
      return `${mins}:${secs}:${millis}`;
    }
  
    const interval = setInterval(() => {
      let elapsed = Date.now() - startTime;
  
      
      if (elapsed >= 60000) {
        startTime = Date.now();
        elapsed = 0;
      }
  
      const el = document.getElementById(targetId);
      if (el) el.textContent = formatTime(elapsed);
    }, 20);
  
    return () => clearInterval(interval);
  }
  