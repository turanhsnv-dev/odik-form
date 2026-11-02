// Cinematic Airlock Door Controller

document.addEventListener('DOMContentLoaded', () => {
  const doorContainer = document.getElementById('vault-door-container');
  const stage = document.getElementById('cinematic-stage');
  const triggerBtn = document.getElementById('open-gate-trigger');
  const statusLabel = document.getElementById('gate-status-label');
  const mainPortal = document.getElementById('main-council-portal');

  if (!triggerBtn) return;

  let isActivating = false;

  triggerBtn.addEventListener('click', () => {
    if (isActivating) return;
    isActivating = true;

    // 1. Tactile click feedback
    window.soundFX.playClick();
    triggerBtn.classList.add('scale-95', 'opacity-80');
    
    if (statusLabel) {
      statusLabel.textContent = 'Biometrik təsdiq: Elçin Əliyev...';
      statusLabel.className = 'text-xs tracking-widest text-[#ff4655] uppercase transition-all duration-300';
    }

    // 2. Cinematic Audio & Trigger Opening (450ms)
    setTimeout(() => {
      window.soundFX.playSubBassDrop();
      window.soundFX.playAirlockWhoosh();

      stage.classList.add('vault-opening');
    }, 450);

    // 3. Reveal Main Portal with Ambient Chime (1400ms)
    setTimeout(() => {
      window.soundFX.playAmbientReveal();

      if (mainPortal) {
        mainPortal.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
        mainPortal.classList.add('opacity-100', 'scale-100');
      }
    }, 1400);

    // 4. Smooth Fadeout of Door Layer (2600ms)
    setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
      if (doorContainer) {
        doorContainer.style.transition = 'opacity 0.8s ease, visibility 0.8s ease';
        doorContainer.style.opacity = '0';
        doorContainer.style.visibility = 'hidden';
      }
    }, 2400);
  });
});
