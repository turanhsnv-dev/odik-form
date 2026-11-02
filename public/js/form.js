// Modern Odik Form & Troll Logic

document.addEventListener('DOMContentLoaded', () => {
  const escapeReasonBtn = document.getElementById('btn-escape-reason');
  const repentTextarea = document.getElementById('repentance-text');
  const repentCounter = document.getElementById('repentance-counter');
  const repentStatus = document.getElementById('repentance-status');
  const submitBtn = document.getElementById('submit-application-btn');
  const submitNotice = document.getElementById('submit-troll-notice');
  
  // Modals
  const analysisModal = document.getElementById('analysis-modal');
  const analysisProgress = document.getElementById('analysis-progress-bar');
  const analysisStepText = document.getElementById('analysis-step-text');
  const finalResultModal = document.getElementById('final-result-modal');

  let runawayCount = 0;
  const MAX_RUNAWAYS = 3;

  // 1. TROLL: Runaway "Keyfim elə istədi" button
  if (escapeReasonBtn) {
    const dodge = (e) => {
      e.preventDefault();
      window.soundFX.playSoftDenial();

      const deltaX = (Math.random() - 0.5) * 220;
      const deltaY = (Math.random() - 0.5) * 120;

      escapeReasonBtn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      escapeReasonBtn.classList.add('border-red-500/80', 'text-red-400');
      escapeReasonBtn.textContent = 'Qadağandır 🏃‍♂️';

      setTimeout(() => {
        escapeReasonBtn.textContent = 'Keyfim elə istədi';
      }, 900);
    };

    escapeReasonBtn.addEventListener('mouseenter', dodge);
    escapeReasonBtn.addEventListener('touchstart', dodge);
  }

  // 2. Repentance character tracker
  if (repentTextarea && repentCounter && repentStatus) {
    repentTextarea.addEventListener('input', () => {
      const len = repentTextarea.value.trim().length;
      repentCounter.textContent = `${len} / 150`;

      if (len === 0) {
        repentStatus.textContent = 'Ağsaqqallar səmimi üzrxahlıq gözləyir.';
        repentStatus.className = 'text-xs text-slate-500';
      } else if (len < 50) {
        repentStatus.textContent = 'Çox qısadır. Səmimiyyət hiss olunmur.';
        repentStatus.className = 'text-xs text-red-400';
      } else if (len < 120) {
        repentStatus.textContent = 'Yaxşılaşır... Bir az da peşmançılıq əlavə et.';
        repentStatus.className = 'text-xs text-amber-400';
      } else {
        repentStatus.textContent = '✓ Şura üzrxahlığı nəzərə almağa hazırdır.';
        repentStatus.className = 'text-xs text-emerald-400 font-medium';
      }
    });
  }

  // 3. TROLL: Submit button jump
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (runawayCount < MAX_RUNAWAYS) {
        runawayCount++;
        window.soundFX.playSoftDenial();

        const jumps = [
          { x: -120, y: -20, msg: 'Turan Həsənov hələ təsdiq etməyib.' },
          { x: 120, y: -25, msg: 'Ənvər Əliyev və Ülvi bəy düşünür...' },
          { x: 0, y: 35, msg: 'Cavidlər hələ qərar verməyib.' }
        ];

        const jump = jumps[runawayCount - 1];
        submitBtn.style.transform = `translate(${jump.x}px, ${jump.y}px)`;

        if (submitNotice) {
          submitNotice.textContent = jump.msg;
          submitNotice.classList.remove('hidden');
        }

        setTimeout(() => {
          if (runawayCount === MAX_RUNAWAYS) {
            submitBtn.style.transform = 'translate(0px, 0px)';
            submitBtn.textContent = 'Təsdiqlə və Göndər';
            submitBtn.classList.remove('from-zinc-800', 'to-zinc-700');
            submitBtn.classList.add('from-red-600', 'to-red-500', 'text-white');
            if (submitNotice) {
              submitNotice.textContent = 'İndi göndərə bilərsiniz.';
              submitNotice.className = 'text-xs text-emerald-400 text-center mb-3';
            }
          }
        }, 900);

        return;
      }

      // Proceed to actual submission
      submitApplication();
    });
  }

  function submitApplication() {
    window.soundFX.playClick();

    const formData = {
      fullName: 'Elçin Əliyev',
      leaveReason: document.querySelector('input[name="leaveReason"]:checked')?.value || 'Peşmanam',
      councilRespect: document.querySelector('input[name="councilRespect"]:checked')?.value || '100% Haqlıdır',
      compensation: document.querySelector('input[name="compensation"]:checked')?.value || '6 Basdırma Dönər',
      repentanceText: repentTextarea ? repentTextarea.value : ''
    };

    // Send to backend
    fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).catch(() => {});

    // Open Analysis Modal
    if (analysisModal) {
      analysisModal.classList.remove('hidden');
      analysisModal.classList.add('flex');
    }

    // Step by step analysis
    const steps = [
      { pct: 20, text: 'WhatsApp arxiv qeydləri araşdırılır...' },
      { pct: 50, text: '"Keyfim elə istədi" bəhanəsinin təsiri hesablanır...' },
      { pct: 75, text: 'Ağsaqqallar Şurasının rəyləri toplanır...' },
      { pct: 95, text: 'Cərimə hesablanır: 6 Basdırma Dönər...' },
      { pct: 100, text: 'Qərar hazırdır.' }
    ];

    let idx = 0;
    const interval = setInterval(() => {
      if (idx < steps.length) {
        const item = steps[idx];
        if (analysisProgress) analysisProgress.style.width = `${item.pct}%`;
        if (analysisStepText) analysisStepText.textContent = item.text;
        window.soundFX.playClick();
        idx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (analysisModal) {
            analysisModal.classList.add('hidden');
            analysisModal.classList.remove('flex');
          }
          showFinalDecision();
        }, 800);
      }
    }, 1200);
  }

  function showFinalDecision() {
    window.soundFX.playAmbientReveal();

    if (finalResultModal) {
      finalResultModal.classList.remove('hidden');
      finalResultModal.classList.add('flex');
    }

    const apologyText = encodeURIComponent(
      `Hörmətli Odik Şurası (Turan, Ənvər, Ülvi, Kamil, Cavid H., Cavid Q.),\n\n` +
      `Mən Elçin Əliyev, "Keyfim elə istədi" deyib qrupdan çıxdığım üçün hamınızdan səmimi qəlbdən üzr istəyirəm.\n` +
      `Portalda rəsmi formu doldurdum və 6 nəfərə basdırma dönər cəriməmi qəbul edirəm.\n\n` +
      `Xahiş edirəm məni Odik qrupuna geri qaytarın! 🙏😂`
    );

    const waBtn = document.getElementById('whatsapp-beg-btn');
    if (waBtn) {
      waBtn.href = `https://api.whatsapp.com/send?text=${apologyText}`;
    }
  }
});
