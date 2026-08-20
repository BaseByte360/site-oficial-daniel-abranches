/**
 * PROF. DANIEL 50999 - APLICAÇÃO CLIENTE (JS MODULAR)
 * DESIGN: DE STIJL ABSTRATO
 * Interatividade, Modais de Propostas, Acessibilidade & Formulário Seguro
 * Desenvolvido por BaseByte - Marketing e Tecnologia
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de módulos
  initNavigation();
  initAccessibility();
  initProposalModal();
  initVolunteerForm();
  initPhotoFrameGenerator();
  initClickCounter();
  initScrollAnimations();
});

/* ==========================================================================
   1. NAVEGAÇÃO & HEADER RESPONSIVO
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-item-link');

  // Toggle do menu mobile
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggle.innerHTML = isOpen
        ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    // Fechar ao clicar em qualquer link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      });
    });
  }

  // Spy de link ativo usando IntersectionObserver (Zero reflow forçado)
  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('section[id]');
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          const navTarget = document.querySelector(`.nav-item-link[href="#${sectionId}"]`);
          if (navTarget) {
            navLinks.forEach(l => l.classList.remove('active'));
            navTarget.classList.add('active');
          }
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(section => navObserver.observe(section));
  }
}

/* ==========================================================================
   2. ACESSIBILIDADE (ALTO CONTRASTE & FONTE)
   ========================================================================== */
function initAccessibility() {
  const contrastBtn = document.getElementById('contrastToggle');
  const fontIncBtn = document.getElementById('fontIncrease');
  const fontDecBtn = document.getElementById('fontDecrease');

  // Alternar Alto Contraste
  if (contrastBtn) {
    contrastBtn.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isHighContrast = document.body.classList.contains('high-contrast');
      showToast(isHighContrast ? 'ALTO CONTRASTE ATIVADO' : 'MODO PADRÃO ATIVADO');
    });
  }

  // Ajuste do tamanho da fonte
  let currentZoom = 100;
  if (fontIncBtn) {
    fontIncBtn.addEventListener('click', () => {
      if (currentZoom < 130) {
        currentZoom += 10;
        document.documentElement.style.fontSize = `${(16 * currentZoom) / 100}px`;
      }
    });
  }
  if (fontDecBtn) {
    fontDecBtn.addEventListener('click', () => {
      if (currentZoom > 90) {
        currentZoom -= 10;
        document.documentElement.style.fontSize = `${(16 * currentZoom) / 100}px`;
      }
    });
  }
}

/* ==========================================================================
   3. BASE DE DADOS E MODAL DE PROPOSTAS (DE STIJL)
   ========================================================================== */
const PROPOSALS_DATA = {
  educacao: {
    title: "Educação Pública de Qualidade e Respeito aos Educadores",
    badge: "EIXO 01 // EDUCAÇÃO",
    quote: "Quem cuida do futuro precisa de respeito no presente.",
    description: "Combate rigoroso ao projeto de destruição, plataformização e privatização da escola pública estadual promovido pelo governo Tarcísio de Freitas.",
    fullDetails: [
      "<strong>Fim da Plataformização Compulsória:</strong> Enfrentamento direto à imposição desmedida de aplicativos e telas no processo pedagógico em detrimento do ensino humanizado e do papel central do professor em sala de aula.",
      "<strong>Implementação da Lei Federal 15.326/2026:</strong> Pressão e mobilização nas redes municipais de Jandira, Itapevi e região para garantir equiparação e valorização salarial dos professores da educação infantil a todo o quadro do magistério.",
      "<strong>Plano de Saúde Mental e Valorização Docente:</strong> Criação de diretrizes estaduais de prevenção ao adoecimento mental dos profissionais da educação e combate à sobrecarga de trabalho.",
      "<strong>Inclusão Escolar Completa para PcD:</strong> Garantia de cuidadores, profissionais de apoio e salas de recursos multifuncionais estruturadas para crianças com deficiência e neurodivergentes em todas as escolas estaduais.",
      "<strong>Infraestrutura e Merenda de Qualidade:</strong> Reforma física imediata de escolas estaduais sucateadas na Região Metropolitana Oeste."
    ]
  },
  transporte: {
    title: "Transporte Público Digno, Mobilidade e Fim da Escala 6x1",
    badge: "EIXO 02 // MOBILIDADE URBANA",
    quote: "Transporte público de qualidade é direito básico, não mercadoria.",
    description: "A luta por mobilidade urbana rápida, segura e acessível é também a luta pelo direito ao tempo livre e à dignidade do trabalhador paulista.",
    fullDetails: [
      "<strong>Tarifa Zero no Transporte Municipal de Jandira:</strong> Defesa da implantação da Tarifa Zero exclusiva para as linhas de ônibus municipais de Jandira, garantindo transporte gratuito e digno para toda a população da cidade.",
      "<strong>Redução Tarifária Estadual e Metropolitana:</strong> Luta ativa e intransigente na ALESP pela redução progressiva das passagens dos trens da CPTM, Metrô e ônibus intermunicipais gerenciados pela EMTU.",
      "<strong>Cancelamento da Concessão da ViaMobilidade:</strong> Posição firme pelo rompimento imediato do contrato das Linhas 8-Diamante e 9-Esmeralda, exigindo gestão pública eficiente e fim dos descarrilamentos, atrasos e panes constantes.",
      "<strong>Conexão com a Luta pelo Fim da Escala 6x1:</strong> Ninguém aguenta mais trabalhar 6 dias por semana e ainda perder 4 horas diárias em conduções precárias e lotadas.",
      "<strong>Emergência no Transporte de Jandira:</strong> Renovação imediata da frota sucateada de ônibus municipais e reforma estrutural completa do terminal rodoviário de Jandira."
    ]
  },
  meio_ambiente: {
    title: "Meio Ambiente, Sustentabilidade e Justiça Climática",
    badge: "EIXO 03 // SUSTENTABILIDADE",
    quote: "O futuro sustentável de Itapevi, Jandira e região começa agora.",
    description: "Políticas ambientais sérias para enfrentar o calor extremo, proteger as periferias de enchentes e valorizar a economia sustentável.",
    fullDetails: [
      "<strong>Combate Preventivo a Enchentes:</strong> Limpeza regular, desassoreamento contínuo e contenção de margens de rios, córregos e bacias regionais.",
      "<strong>Regularização Fundiária Socioambiental:</strong> Urbanização com saneamento básico e segurança para famílias que vivem em áreas de risco ou encostas.",
      "<strong>Parques Lineares e Reflorestamento Urbano:</strong> Ampliação de áreas verdes, arborização de bairros periféricos e criação de parques públicos para diminuir as ilhas de calor.",
      "<strong>Proteção da Biodiversidade Regional:</strong> Defesa ativa das matas remanescentes de Mata Atlântica e das nascentes da Região Metropolitana.",
      "<strong>Fortalecimento de Cooperativas de Reciclagem:</strong> Incentivo e investimento público direto em associações e cooperativas de catadores de materiais recicláveis."
    ]
  },
  juventude: {
    title: "Juventude no Poder, Emprego Digno e Cultura",
    badge: "EIXO 04 // JUVENTUDE",
    quote: "A juventude não quer só esperar o futuro, quer decidir o agora.",
    description: "Oportunidades reais de trabalho, estudos, cultura e protagonismo para a juventude das periferias.",
    fullDetails: [
      "<strong>Primeiro Emprego com Direitos:</strong> Fomento a programas estaduais de qualificação profissional com bolsa permanência e garantia de direitos trabalhistas.",
      "<strong>Acesso à Universidade Pública:</strong> Criação e ampliação de cursinhos populares preparatórios para vestibulares e ENEM nas cidades da Região Metropolitana.",
      "<strong>Cultura Viva nas Quebradas:</strong> Fundo de incentivo para saraus, batalhas de rima, dança, teatro e coletivos audiovisuais periféricos.",
      "<strong>Esporte e Lazer Comunitário:</strong> Abertura e iluminação de quadras públicas nos fins de semana e noites para práticas esportivas seguras."
    ]
  },
  cidadania: {
    title: "Cidadania, Direitos Humanos e Igualdade Social",
    badge: "EIXO 05 // DIREITOS HUMANOS",
    quote: "Políticas públicas para quem mais precisa.",
    description: "Defesa intransigente dos direitos humanos, equidade racial, igualdade de gênero e proteção às populações vulneráveis.",
    fullDetails: [
      "<strong>Combate à Violência Contra a Mulher:</strong> Fortalecimento das Delegacias da Mulher (DDMs) com atendimento 24h e suporte psicológico e jurídico para vítimas.",
      "<strong>Combate ao Racismo e Discriminação:</strong> Implementação efetiva do ensino de história e cultura afro-brasileira e indígena nas escolas estaduais.",
      "<strong>Respeito e Acolhimento LGBTQIA+:</strong> Criação de centros de referência e acolhimento para juventude em situação de vulnerabilidade.",
      "<strong>Assistência Social Ativa:</strong> Fortalecimento de cozinhas comunitárias e programas de combate à fome nas comunidades periféricas."
    ]
  }
};

function initProposalModal() {
  const modalBackdrop = document.getElementById('proposalModal');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  const detailButtons = document.querySelectorAll('[data-proposal-target]');

  const modalBadge = document.getElementById('modalProposalBadge');
  const modalTitle = document.getElementById('modalProposalTitle');
  const modalQuote = document.getElementById('modalProposalQuote');
  const modalDesc = document.getElementById('modalProposalDesc');
  const modalList = document.getElementById('modalProposalList');

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetKey = btn.getAttribute('data-proposal-target');
      const data = PROPOSALS_DATA[targetKey];
      if (!data) return;

      if (modalBadge) modalBadge.textContent = data.badge;
      if (modalTitle) modalTitle.textContent = data.title;
      if (modalQuote) modalQuote.textContent = `"${data.quote}"`;
      if (modalDesc) modalDesc.textContent = data.description;
      if (modalList) {
        modalList.innerHTML = data.fullDetails.map(item => `
          <li style="display:flex; align-items:flex-start; gap:10px; margin-bottom:12px; font-size:0.92rem; color:#121212; line-height:1.5;">
            <span style="font-family:'JetBrains Mono',monospace; color:#E52222; font-weight:900; margin-top:1px;">[+]</span>
            <div>${item}</div>
          </li>
        `).join('');
      }

      modalBackdrop?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modalBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   4. FORMULÁRIO DE VOLUNTARIADO & INTEGRAÇÃO WHATSAPP
   ========================================================================== */
function initVolunteerForm() {
  const form = document.getElementById('volunteerForm');
  const phoneInput = document.getElementById('volunteerPhone');

  // Máscara de Telefone / WhatsApp Brasileiro
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.slice(0, 11);

      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if (v.length > 5) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
      } else if (v.length > 0) {
        v = v.replace(/^(\d*)/, '($1');
      }
      e.target.value = v;
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Proteção Honeypot anti-bot
      const honeypot = document.getElementById('website_field');
      if (honeypot && honeypot.value.trim() !== '') {
        return;
      }

      const name = document.getElementById('volunteerName')?.value.trim() || '';
      const phone = document.getElementById('volunteerPhone')?.value.trim() || '';
      const email = document.getElementById('volunteerEmail')?.value.trim() || '';
      const city = document.getElementById('volunteerCity')?.value.trim() || 'Região Metropolitana SP';

      // Checkboxes selecionados
      const interests = [];
      if (document.getElementById('optMaterials')?.checked) interests.push('Receber materiais e informativos');
      if (document.getElementById('optWhatsappGroup')?.checked) interests.push('Participar do grupo de WhatsApp');

      if (!name || !phone || !email) {
        showToast('PREENCHA SEU NOME, WHATSAPP E E-MAIL');
        return;
      }

      // Montagem da mensagem formatada para o WhatsApp de Campanha (11 91273-0806)
      const interestsText = interests.length > 0 ? `\n*Formas de apoio:* \n- ${interests.join('\n- ')}` : '';
      const emailText = email ? `\n*E-mail:* ${email}` : '';
      const whatsappMessage = `Olá Prof. Daniel e equipe!\n\nQuero me somar à campanha *Prof. Daniel 50999* pela Educação e pela Juventude!\n\n*Nome:* ${name}\n*WhatsApp:* ${phone}${emailText}\n*Cidade/Bairro:* ${city}${interestsText}\n\n_Mensagem enviada pelo site oficial danielabranches.com.br_`;

      const targetNumber = '5511912730806';
      const encodedMsg = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedMsg}`;

      showToast('REDIRECIONANDO PARA O WHATSAPP...');

      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        form.reset();
      }, 800);
    });
  }
}

/* ==========================================================================
   5. GERADOR DE FOTO COM MOLDURA OFICIAL (CANVAS INTERATIVO)
   ========================================================================== */
function initPhotoFrameGenerator() {
  const canvas = document.getElementById('photoCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dropzone = document.getElementById('frameDropzone');
  const placeholder = document.getElementById('framePlaceholder');
  const fileInput = document.getElementById('userPhotoInput');
  const controlsPanel = document.getElementById('frameControls');
  const zoomSlider = document.getElementById('photoZoomRange');
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const btnRotate = document.getElementById('btnRotatePhoto');
  const btnReset = document.getElementById('btnResetPhoto');
  const btnChange = document.getElementById('btnChangePhoto');
  const btnDownload = document.getElementById('btnDownloadPhoto');

  // Carregar Moldura Oficial
  const frameImg = new Image();
  frameImg.src = 'Moldura_Foto.png';
  let isFrameLoaded = false;
  frameImg.onload = () => {
    isFrameLoaded = true;
    drawCanvas();
  };

  let userImg = null;
  const userState = {
    x: 0,
    y: 0,
    scale: 1,
    baseScale: 1,
    rotation: 0,
    isDragging: false,
    startX: 0,
    startY: 0
  };

  function drawCanvas() {
    ctx.clearRect(0, 0, 1000, 1000);

    // Fundo branco
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 1000, 1000);

    // Foto do Usuário
    if (userImg) {
      ctx.save();
      ctx.translate(500 + userState.x, 500 + userState.y);
      ctx.rotate((userState.rotation * Math.PI) / 180);
      const totalScale = userState.baseScale * userState.scale;
      ctx.scale(totalScale, totalScale);
      ctx.drawImage(userImg, -userImg.naturalWidth / 2, -userImg.naturalHeight / 2);
      ctx.restore();
    }

    // Moldura Oficial em sobreposição
    if (isFrameLoaded) {
      ctx.drawImage(frameImg, 0, 0, 1000, 1000);
    }
  }

  function handleFile(file) {
    if (!file || !file.type.startsWith('image/')) {
      showToast('POR FAVOR SELECIONE UM ARQUIVO DE IMAGEM VÁLIDO');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        userImg = img;
        // Escala base para preencher o quadro 1000x1000
        userState.baseScale = Math.max(1000 / userImg.naturalWidth, 1000 / userImg.naturalHeight);
        userState.scale = 1;
        userState.x = 0;
        userState.y = 0;
        userState.rotation = 0;

        if (zoomSlider) zoomSlider.value = 1;
        if (placeholder) placeholder.style.display = 'none';
        if (controlsPanel) controlsPanel.style.display = 'flex';
        if (btnDownload) btnDownload.removeAttribute('disabled');

        drawCanvas();
        showToast('FOTO CARREGADA! AJUSTE O ENQUADRAMENTO');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Upload por clique no placeholder ou no botão de trocar
  placeholder?.addEventListener('click', () => fileInput?.click());
  btnChange?.addEventListener('click', () => fileInput?.click());

  fileInput?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  });

  // Drag and Drop de arquivos
  if (dropzone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('dragover-active');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('dragover-active');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files[0]) {
        handleFile(dt.files[0]);
      }
    });
  }

  // Arraste / Pan da Imagem (Mouse & Touch)
  function getEventCoordinates(e) {
    if (e.touches && e.touches.length > 0) {
      return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
    }
    return { clientX: e.clientX, clientY: e.clientY };
  }

  function startDrag(e) {
    if (!userImg) return;
    userState.isDragging = true;
    const coords = getEventCoordinates(e);
    userState.startX = coords.clientX;
    userState.startY = coords.clientY;
    dropzone?.classList.add('is-dragging');
  }

  function doDrag(e) {
    if (!userState.isDragging || !userImg) return;
    const coords = getEventCoordinates(e);
    const rect = canvas.getBoundingClientRect();
    const factor = 1000 / (rect.width || 1);

    const dx = (coords.clientX - userState.startX) * factor;
    const dy = (coords.clientY - userState.startY) * factor;

    userState.x += dx;
    userState.y += dy;

    userState.startX = coords.clientX;
    userState.startY = coords.clientY;

    drawCanvas();
  }

  function stopDrag() {
    if (userState.isDragging) {
      userState.isDragging = false;
      dropzone?.classList.remove('is-dragging');
    }
  }

  canvas.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', doDrag);
  window.addEventListener('mouseup', stopDrag);

  canvas.addEventListener('touchstart', (e) => {
    if (userImg) {
      e.preventDefault();
      startDrag(e);
    }
  }, { passive: false });

  window.addEventListener('touchmove', (e) => {
    if (userState.isDragging) {
      e.preventDefault();
      doDrag(e);
    }
  }, { passive: false });

  window.addEventListener('touchend', stopDrag);

  // Zoom via Slider
  zoomSlider?.addEventListener('input', (e) => {
    userState.scale = parseFloat(e.target.value);
    drawCanvas();
  });

  // Botões de Zoom + e -
  btnZoomIn?.addEventListener('click', () => {
    userState.scale = Math.min(3, parseFloat((userState.scale + 0.1).toFixed(2)));
    if (zoomSlider) zoomSlider.value = userState.scale;
    drawCanvas();
  });

  btnZoomOut?.addEventListener('click', () => {
    userState.scale = Math.max(0.5, parseFloat((userState.scale - 0.1).toFixed(2)));
    if (zoomSlider) zoomSlider.value = userState.scale;
    drawCanvas();
  });

  // Zoom via Scroll do Mouse no Canvas
  canvas.addEventListener('wheel', (e) => {
    if (!userImg) return;
    e.preventDefault();
    const zoomStep = e.deltaY < 0 ? 0.08 : -0.08;
    userState.scale = Math.max(0.5, Math.min(3, parseFloat((userState.scale + zoomStep).toFixed(2))));
    if (zoomSlider) zoomSlider.value = userState.scale;
    drawCanvas();
  }, { passive: false });

  // Girar 90 graus no sentido horário
  btnRotate?.addEventListener('click', () => {
    if (!userImg) return;
    userState.rotation = (userState.rotation + 90) % 360;
    drawCanvas();
  });

  // Centralizar / Resetar
  btnReset?.addEventListener('click', () => {
    if (!userImg) return;
    userState.x = 0;
    userState.y = 0;
    userState.scale = 1;
    userState.rotation = 0;
    if (zoomSlider) zoomSlider.value = 1;
    drawCanvas();
  });

  // Modal de Resultado (iPhone / Mobile Fallback)
  const resultModal = document.getElementById('photoResultModal');
  const closeResultModalBtn = document.getElementById('closePhotoModalBtn');
  const modalResultImg = document.getElementById('modalResultImage');
  const btnModalShare = document.getElementById('btnModalShare');
  const btnModalDirectDownload = document.getElementById('btnModalDirectDownload');

  function openPhotoModal(dataUrl, blobUrl) {
    if (!resultModal) return;
    if (modalResultImg) modalResultImg.src = dataUrl;
    if (btnModalDirectDownload) {
      btnModalDirectDownload.href = blobUrl || dataUrl;
      btnModalDirectDownload.download = 'foto-apoio-prof-daniel-50999.png';
    }
    resultModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePhotoModal() {
    if (!resultModal) return;
    resultModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeResultModalBtn?.addEventListener('click', closePhotoModal);
  resultModal?.addEventListener('click', (e) => {
    if (e.target === resultModal) closePhotoModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resultModal?.classList.contains('active')) {
      closePhotoModal();
    }
  });

  function isIOSDevice() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  let currentBlob = null;
  let currentDataUrl = null;

  async function triggerShareOrDownload() {
    if (!userImg) {
      showToast('POR FAVOR, CARREGUE UMA FOTO PRIMEIRO');
      return;
    }

    drawCanvas();
    showToast('PROCESSANDO SUA FOTO...');

    canvas.toBlob(async (blob) => {
      if (!blob) {
        showToast('ERRO AO PROCESSAR IMAGEM');
        return;
      }

      currentBlob = blob;
      currentDataUrl = canvas.toDataURL('image/png', 1.0);
      const blobUrl = URL.createObjectURL(blob);
      const fileName = 'foto-apoio-prof-daniel-50999.png';
      const file = new File([blob], fileName, { type: 'image/png' });
      const isIOS = isIOSDevice();

      // 1. Tentar Web Share API se suportada (padrão no iOS Safari 15+ e Android)
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: 'Foto de Apoio - Prof. Daniel 50999',
            text: 'Eu apoio o Prof. Daniel 50999 para Deputado Estadual!'
          });
          showToast('FOTO SALVA / COMPARTILHADA COM SUCESSO!');
          return;
        } catch (err) {
          if (err.name === 'AbortError') {
            // Usuário fechou a folha de compartilhamento nativa sem salvar
            return;
          }
          console.warn('Web Share API fallthrough:', err);
        }
      }

      // 2. Se for iPhone ou navegador móvel onde <a download> não é suportado
      if (isIOS) {
        openPhotoModal(currentDataUrl, blobUrl);
        showToast('SEGURE O DEDO NA FOTO PARA SALVAR');
        return;
      }

      // 3. Download padrão (Desktop / Android Chrome)
      try {
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();

        setTimeout(() => {
          document.body.removeChild(link);
        }, 1200);

        showToast('FOTO BAIXADA COM SUCESSO!');
      } catch (err) {
        console.error('Download fallback to modal:', err);
        openPhotoModal(currentDataUrl, blobUrl);
      }
    }, 'image/png', 0.95);
  }

  btnDownload?.addEventListener('click', triggerShareOrDownload);

  btnModalShare?.addEventListener('click', async () => {
    if (!currentBlob) return;
    const file = new File([currentBlob], 'foto-apoio-prof-daniel-50999.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: 'Foto de Apoio - Prof. Daniel 50999',
          text: 'Eu apoio o Prof. Daniel 50999 para Deputado Estadual!'
        });
      } catch (e) {
        if (e.name !== 'AbortError') console.error(e);
      }
    } else {
      showToast('SEGURE O DEDO NA FOTO PARA SALVAR');
    }
  });
}

/* ==========================================================================
   6. ANIMAÇÕES NO SCROLL (INTERSECTION OBSERVER SUTIL)
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.proposal-stijl-card, .timeline-stijl-item, .form-stijl-card, .frame-generator-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      observer.observe(el);
    });
  }
}

/* ==========================================================================
   6. TOAST DE FEEDBACK DE STIJL
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-stijl';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}

/* ==========================================================================
   7. BOTÃO INTERATIVO DE APOIO & ANIMAÇÃO DE +1 E EMOJIS (Nº 50999)
   ========================================================================== */
function initClickCounter() {
  const counterBtn = document.getElementById('voteCounterBtn');
  if (!counterBtn) return;

  const countDisplay = document.getElementById('voteCountDisplay');

  // Base de persistência
  const STORAGE_KEY_COUNT = 'daniel_50999_prod_votes';
  const STORAGE_KEY_LOCAL = 'daniel_50999_prod_user_votes';

  let totalVotes = parseInt(localStorage.getItem(STORAGE_KEY_COUNT) || '0', 10);
  if (isNaN(totalVotes)) {
    totalVotes = 0;
  }

  function updateDisplay(animate = false) {
    if (countDisplay) {
      countDisplay.textContent = totalVotes.toLocaleString('pt-BR');
      if (animate) {
        countDisplay.classList.remove('count-pop');
        void countDisplay.offsetWidth;
        countDisplay.classList.add('count-pop');
      }
    }
  }

  updateDisplay(false);

  // Emojis solicitados: coração, joinha, estrelinha e sóis
  const EMOJI_POOL = ['❤️', '💖', '👍', '⭐', '✨', '☀️', '🌟', '💛'];

  function spawnParticles(originX, originY) {
    // Gerar entre 6 e 8 emojis por clique
    const particleCount = 7;
    for (let i = 0; i < particleCount; i++) {
      const emoji = EMOJI_POOL[Math.floor(Math.random() * EMOJI_POOL.length)];
      const el = document.createElement('span');
      el.className = 'emoji-particle';
      el.textContent = emoji;

      // Deslocamentos e trajetórias radiais
      const dx = (Math.random() - 0.5) * 140 + 'px';
      const dy = -(Math.random() * 95 + 65) + 'px';
      const rot = (Math.random() - 0.5) * 90 + 'deg';

      el.style.left = `${originX}px`;
      el.style.top = `${originY}px`;
      el.style.setProperty('--dx', dx);
      el.style.setProperty('--dy', dy);
      el.style.setProperty('--rot', rot);

      document.body.appendChild(el);

      el.addEventListener('animationend', () => {
        el.remove();
      });
    }

    // Spawn do indicador "+1" flutuante
    const plusOne = document.createElement('span');
    plusOne.className = 'plus-one-particle';
    plusOne.textContent = '+1';
    plusOne.style.left = `${originX - 12}px`;
    plusOne.style.top = `${originY - 18}px`;
    document.body.appendChild(plusOne);

    plusOne.addEventListener('animationend', () => {
      plusOne.remove();
    });
  }

  // Cross-Tab Sync via BroadcastChannel
  let broadcast = null;
  if ('BroadcastChannel' in window) {
    try {
      broadcast = new BroadcastChannel('daniel_50999_votes_channel');
      broadcast.onmessage = (event) => {
        if (event.data && event.data.type === 'VOTE_UPDATE' && typeof event.data.count === 'number') {
          totalVotes = Math.max(totalVotes, event.data.count);
          updateDisplay(true);
        }
      };
    } catch (e) {
      console.warn('BroadcastChannel error:', e);
    }
  }

  // Sincronização via evento storage (fallback entre abas)
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY_COUNT && e.newValue) {
      const newCount = parseInt(e.newValue, 10);
      if (!isNaN(newCount) && newCount > totalVotes) {
        totalVotes = newCount;
        updateDisplay(true);
      }
    }
  });

  // Handler de Clique no Botão
  counterBtn.addEventListener('click', (e) => {
    // Animação tátil de clique
    counterBtn.classList.remove('btn-clicked');
    void counterBtn.offsetWidth;
    counterBtn.classList.add('btn-clicked');

    // Posição de origem das partículas
    const rect = counterBtn.getBoundingClientRect();
    const originX = (e.clientX && e.clientX > 0) ? e.clientX : (rect.left + rect.width / 2);
    const originY = (e.clientY && e.clientY > 0) ? e.clientY : (rect.top + rect.height / 2);

    // Incrementar contagem local
    totalVotes += 1;
    localStorage.setItem(STORAGE_KEY_COUNT, totalVotes.toString());

    const userVotes = parseInt(localStorage.getItem(STORAGE_KEY_LOCAL) || '0', 10) + 1;
    localStorage.setItem(STORAGE_KEY_LOCAL, userVotes.toString());

    updateDisplay(true);
    spawnParticles(originX, originY);

    // Notificar outras abas abertas
    if (broadcast) {
      broadcast.postMessage({ type: 'VOTE_UPDATE', count: totalVotes });
    }
  });
}
