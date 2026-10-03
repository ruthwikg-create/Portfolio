import './style.css';

const projects=[
{id:'medaxis',n:'01',type:'SOFTWARE / CLINICAL ENGINEERING',title:'MedAxis 3D',desc:'A multimodal medical imaging and biomedical engineering workstation combining visualization, quantitative analysis, AI workflows, validation and structured equipment and research operations.',tags:['Medical Imaging','MONAI','3D','DICOM','AI Analytics'],github:'https://github.com/ruthwikg-create/MedAxis-3D',githubLabel:'View source on GitHub',detail:'MedAxis 3D is a research and educational medical imaging workstation combining source-derived visualization and quantitative analysis with configurable MONAI inference, validation, storage, authentication and research workflows. The repository describes DICOM and NIfTI import, 2D CT and MR viewing, multiplanar reconstruction, 3D surface reconstruction from volume-derived masks, segmentation validation, radiomics, cardiac and prostate analysis, DICOM SEG and SR export, audit and provenance workflows, and research-only cross-modality synthesis. The repository explicitly distinguishes software functionality from clinical validation and regulatory clearance.'},
{id:'biosimulx',n:'02',type:'SOFTWARE / BIOMEDICAL SIMULATION',title:'BioSimulX',desc:'A biomedical signal simulation and intelligence platform for generating, processing, analyzing and validating ECG, EEG, EMG, EOG and related research signals.',tags:['Signals','Simulation','ECG','EEG','EMG','Analytics'],github:'https://github.com/ruthwikg-create/biosimulx',githubLabel:'View repository',detail:'BioSimulX is a research-oriented web platform for biomedical signal simulation, processing, analysis, validation, calibration and dataset management. Its documented workflows include ECG, EEG, EMG, EOG and related signal work, signal processing and filtering, signal quality assessment, calibration and verification, research case management, provenance, validation and statistical analysis, regulatory research workflows, quality-system support, live acquisition research workflows and PhysioNet dataset integration. The project is positioned as a research, education, prototyping and engineering platform rather than a clinically validated medical device.'},
{id:'pulmoacoustic',n:'03',type:'SOFTWARE / RESPIRATORY RESEARCH',title:'PulmoAcoustic',desc:'A smartphone-only respiratory monitoring research app that uses the phone speaker and microphone as an active acoustic sensing pair for contactless respiratory-rate estimation.',tags:['Android','Acoustic Sensing','DSP','Respiration','Research'],github:'https://github.com/ruthwikg-create/PulmoAcoustic',githubLabel:'View source on GitHub',detail:'PulmoAcoustic is an adaptive smartphone-only contactless respiratory monitoring research app. Its documented approach uses a compatible Android phone built-in speaker and built-in microphone as an active acoustic sensing pair. The app emits a bounded high-frequency carrier, captures the reflected chest response, extracts a respiratory-related signal and reports a respiratory rate only when multiple estimators and a quality gate agree. The repository documents device-specific acoustic calibration, automatic optimization, guided chest-position scanning, I/Q demodulation, coherent phase extraction, respiratory-band analysis, spectral, autocorrelation and time-domain estimators, motion tracking, signal quality metrics, confidence scoring, local measurement history and research dataset support. The project is explicitly a research prototype and not a medical device.'},
{id:'phonocardio',n:'04',type:'SOFTWARE / CARDIAC ACOUSTICS',title:'PhonoCardio',desc:'An Android digital phonocardiography research prototype for real-time acoustic heart-sound capture, signal processing and measurement-quality feedback.',tags:['Android','Phonocardiography','PCM','Signal Processing','SNR'],github:'https://github.com/ruthwikg-create/PhonoCardio',githubLabel:'View source on GitHub',detail:'PhonoCardio is an Android-based digital phonocardiography research prototype. Its documented workflow captures acoustic signals through a headset or inline microphone, performs real-time on-device PCM processing, removes DC, applies high-pass and low-pass filtering, estimates adaptive noise, detects peaks and presents a live waveform, heart-rate estimate, signal quality, SNR and confidence. The repository notes that a microphone is the sensing element and describes a future roadmap covering notch filtering, adaptive noise cancellation, wavelet denoising, Shannon-energy processing, autocorrelation or FFT rate estimation, S1 and S2 segmentation, artifact rejection and signal-quality indices. It is a research and educational prototype and requires reference-device validation before clinical claims.'},
{id:'neurovision',n:'05',type:'SOFTWARE / MEDICAL AI',title:'NeuroVision AI',desc:'An AI-assisted medical imaging concept for brain and spine MRI workflows, using intelligent image processing and analysis to support faster and more structured interpretation.',tags:['Medical AI','MRI','Computer Vision','Analysis','AI Studio'],github:'https://github.com/RuthwikGoparaju/NeuroVision-AI',githubLabel:'View source on GitHub',detail:'NeuroVision AI is your renamed AI-assisted medical imaging project. The supplied repository currently presents it as an AI Studio application with a local Node.js workflow and Gemini API configuration. On the portfolio, it is positioned around your broader interest in medical AI, MRI-oriented imaging workflows and software tools for clinical technology. The repository itself should be treated as the source of truth for the currently implemented application details.'},
{id:'driver-safety',n:'06',type:'HARDWARE / EMBEDDED SAFETY',title:'Driver Safety Alert',desc:'An embedded safety prototype using an ESP32, accelerometer, gyroscope, OLED display and buzzer to observe motion conditions and provide immediate feedback.',tags:['ESP32','Sensors','Accelerometer','Gyroscope','OLED','Buzzer'],detail:'Driver Safety Alert is a hardware-based embedded safety prototype built around an ESP32 and motion-sensing components. The system uses an accelerometer and gyroscope to acquire motion information, while an OLED provides local visual feedback and a buzzer provides an immediate audible warning. The ESP32 acts as the central controller, acquiring sensor data, evaluating programmed conditions and converting them into real-time safety indications. The project demonstrates a compact sensing, processing, display and alert chain that can be extended with calibration, logging and more advanced decision logic.',images:['https://res.cloudinary.com/dns0nlupj/image/upload/v1791035386/P1_suc2r6.jpg','https://res.cloudinary.com/dns0nlupj/image/upload/v1791035386/P3_ueezb5.jpg']},
{id:'smart-health',n:'07',type:'HARDWARE / HEALTH MONITORING',title:'Smart Health Monitoring',desc:'An ESP32-based physiological monitoring prototype designed to acquire heart-rate information and provide an ECG-oriented monitoring workflow through connected sensing components.',tags:['ESP32','Heart Rate','ECG','Sensors','Realtime'],detail:'Smart Health Monitoring is a hardware-oriented biomedical monitoring prototype centered on an ESP32 and supporting physiological sensing components. The system is designed to acquire heart-rate information and provide an ECG section for observing cardiac electrical activity through an appropriate sensing interface. The ESP32 functions as the embedded processing and communication controller, receiving sensor information and making the measurements available for display or further processing. The architecture separates sensing, acquisition, signal handling and presentation so additional physiological parameters can be incorporated later.'}
];

document.querySelector('#app').innerHTML=`
<div class="cursor-glow"></div><div class="noise"></div>
<header class="site-header"><a class="brand" href="#top"><span class="brand-mark">R</span><span>RUTHWIK</span></a>
<nav class="desktop-nav"><a href="#work">Work</a><a href="#clinical">Clinical</a><a href="#principles">Principles</a><a href="#tools">Tools</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
<button class="menu-button" aria-label="Toggle navigation"><span></span><span></span></button></header>
<main id="top">
<section class="hero section hero-magnetic">
  <div class="hero-space-stars"></div>
  <div class="hero-space-glow glow-one"></div>
  <div class="hero-space-glow glow-two"></div>
  <canvas id="field-canvas" aria-label="Interactive magnetic particle field"></canvas>
  <div class="hero-copy">
    <div class="eyebrow reveal"><span class="dot"></span> BIOMEDICAL ENGINEER · HYDERABAD, INDIA</div>
    <h1 class="hero-title reveal">I build<br><span>technology</span><br>for human health.</h1>
    <div class="hero-bottom reveal">
      <p class="hero-lede">Clinical engineering, medical AI, 3D visualization and embedded systems, connected by one goal: making complex healthcare technology more useful.</p>
      <a class="arrow-link" href="#work">Explore my work <span>↘</span></a>
    </div>
  </div>
</section>

<section class="statement section dark"><div class="section-index">00 / PRINCIPLE</div><div class="statement-content"><p class="display-statement">Engineering at the intersection of <em>medicine</em>, <em>intelligence</em> and <em>human experience.</em></p><div class="statement-meta"><span>01</span><span>BUILD</span><span>TEST</span><span>VERIFY</span></div></div></section>

<section id="principles" class="principles section"><div class="section-heading reveal"><div><div class="section-index">01 / THE WAY I BUILD</div><h2>Ideas I want<br><span>to build by.</span></h2></div><p>A few principles that describe how I think about biomedical engineering, AI and the kind of work I want to create.</p></div><div class="principles-grid">
<article class="principle-card reveal"><span>01</span><h3>Use AI where it creates real value.</h3><p>I like using AI for healthcare when it can make a workflow clearer, a tool more useful, or a difficult task easier to understand.</p></article>
<article class="principle-card reveal"><span>02</span><h3>Build software when software can solve it.</h3><p>I'm especially interested in software tools, medical applications and digital systems rather than adding hardware when a software-first approach can solve the problem.</p></article>
<article class="principle-card reveal"><span>03</span><h3>Learn by building, testing and refining.</h3><p>I like trying something new, making a working prototype, finding what breaks, and improving it through repeated iterations.</p></article>
<article class="principle-card reveal"><span>04</span><h3>Make complex technology useful to people.</h3><p>My goal is to connect engineering, design and healthcare around practical users, real workflows and problems that are worth solving.</p></article>
</div></section>

<section id="work" class="work section"><div class="section-heading reveal"><div><div class="section-index">02 / SELECTED WORK</div><h2>Projects built<br><span>to be useful.</span></h2></div><p>Software, devices and visual systems exploring practical problems in healthcare.</p></div>
<div class="project-list">${projects.map(p=>`<article class="project-card reveal" data-project="${p.id}"><div class="project-number">${p.n}</div><div class="project-copy"><div class="project-top"><span>${p.type}</span><span>${p.github?'GITHUB':'PORTFOLIO'}</span></div><h3>${p.title}</h3><p>${p.desc}</p><div class="tag-row">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="project-actions"><button class="project-open">View project <span>↗</span></button>${p.github?`<a class="project-github" href="${p.github}" target="_blank" rel="noopener noreferrer">${p.githubLabel} <span>↗</span></a>`:''}</div></div></article>`).join('')}</div></section>

<section id="clinical" class="clinical section dark"><div class="section-index">03 / CLINICAL ENGINEERING</div><div class="clinical-grid"><div class="clinical-title"><h2>From the<br><span>bench</span> to<br>the bedside.</h2></div><div class="clinical-copy"><p class="large-copy">My clinical engineering experience connects engineering theory with equipment that has to work reliably around patients and healthcare teams.</p><div class="equipment-list"><div><span>01</span> ECG MACHINES</div><div><span>02</span> PATIENT MONITORS</div><div><span>03</span> INFUSION & SYRINGE PUMPS</div><div><span>04</span> DEFIBRILLATORS</div><div><span>05</span> C-ARM IMAGING</div></div><p class="small-copy">Preventive maintenance · corrective maintenance · functional testing · performance verification · calibration support · fault diagnosis · root-cause analysis.</p></div></div></section>

<section class="systems section"><div class="section-heading reveal"><div><div class="section-index">04 / CAPABILITIES</div><h2>A technical<br><span>toolkit.</span></h2></div></div><div class="capability-grid">
<div class="capability reveal"><span>01</span><h3>Clinical</h3><p>Medical equipment · Calibration · PM / CM · Functional testing · Fault diagnosis · Root cause analysis</p></div>
<div class="capability reveal"><span>02</span><h3>Digital & AI</h3><p>AI-assisted development · Medical AI · Computer vision · Medical imaging · Web & app prototyping · 3D visualization</p></div>
<div class="capability reveal"><span>03</span><h3>Embedded</h3><p>ESP32 · Arduino · Sensors · Embedded systems · Biomedical instrumentation · IoT</p></div>
<div class="capability reveal"><span>04</span><h3>Design</h3><p>SolidWorks · MATLAB · Proteus · LabVIEW · 3D printing · Technical visualization</p></div>
</div></section>


<section id="tools" class="tools-section section">
  <div class="section-heading reveal">
    <div>
      <div class="section-index">05 / APPS & TOOLS</div>
      <h2>Tools I use<br><span>to build.</span></h2>
    </div>
    <p>AI platforms, design tools, engineering software and productivity apps that support my way of building.</p>
  </div>
  <div class="tools-marquee">
    <div class="tools-track">
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo google">G</div><strong>Google AI Studio</strong><small>PRO</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo anti">A</div><strong>Antigravity</strong><small>PRO</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo stitch">S</div><strong>Google Stitch</strong><small>PRO</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo canva">C</div><strong>Canva</strong><small>PRO</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo word">W</div><strong>Microsoft Word</strong><small>PRO</small></div>
      <div class="tool-item" data-level="INTERMEDIATE" data-years="Intermediate"><div class="tool-logo android">⌁</div><strong>Android Studio</strong><small>INTERMEDIATE</small></div>
      <div class="tool-item" data-level="INTERMEDIATE" data-years="Intermediate"><div class="tool-logo figma">F</div><strong>Figma</strong><small>INTERMEDIATE</small></div>
      <div class="tool-item" data-level="INTERMEDIATE" data-years="Intermediate"><div class="tool-logo matlab">M</div><strong>MATLAB</strong><small>INTERMEDIATE</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo proteus">P</div><strong>Proteus</strong><small>PRO</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo solidworks">SW</div><strong>SolidWorks</strong><small>PRO</small></div>
      <div class="tool-item" data-level="INTERMEDIATE" data-years="Intermediate"><div class="tool-logo easyeda">E</div><strong>EasyEDA</strong><small>INTERMEDIATE</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo arduino">∞</div><strong>Arduino IDE</strong><small>PRO</small></div>
    
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo google">G</div><strong>Google AI Studio</strong><small>PRO</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo anti">A</div><strong>Antigravity</strong><small>PRO</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo stitch">S</div><strong>Google Stitch</strong><small>PRO</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo canva">C</div><strong>Canva</strong><small>PRO</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo word">W</div><strong>Microsoft Word</strong><small>PRO</small></div>
      <div class="tool-item" data-level="INTERMEDIATE" data-years="Intermediate"><div class="tool-logo android">⌁</div><strong>Android Studio</strong><small>INTERMEDIATE</small></div>
      <div class="tool-item" data-level="INTERMEDIATE" data-years="Intermediate"><div class="tool-logo figma">F</div><strong>Figma</strong><small>INTERMEDIATE</small></div>
      <div class="tool-item" data-level="INTERMEDIATE" data-years="Intermediate"><div class="tool-logo matlab">M</div><strong>MATLAB</strong><small>INTERMEDIATE</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo proteus">P</div><strong>Proteus</strong><small>PRO</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo solidworks">SW</div><strong>SolidWorks</strong><small>PRO</small></div>
      <div class="tool-item" data-level="INTERMEDIATE" data-years="Intermediate"><div class="tool-logo easyeda">E</div><strong>EasyEDA</strong><small>INTERMEDIATE</small></div>
      <div class="tool-item" data-level="PRO" data-years="Pro"><div class="tool-logo arduino">∞</div><strong>Arduino IDE</strong><small>PRO</small></div>
    </div>
  </div>
  <div class="tool-focus" aria-live="polite"><span class="focus-label">HOVER A TOOL</span><strong>Move your cursor over a tool</strong><small>The marquee pauses and shows the experience level.</small></div>
  <div class="ai-build-note reveal">
    <span>BUILDING WITH AI</span>
    <p>I'm interested in building <strong>apps, web apps and websites</strong> by combining modern development with AI tools, from idea and interface design through implementation, testing and iteration.</p>
  </div>
</section>

<section id="about" class="about section"><div class="section-index">06 / ABOUT ME</div><div class="about-grid"><div class="about-title"><h2>Who I am<br><span>and what I build.</span></h2></div><div class="about-copy"><p class="large-copy">I'm Ruthwik Goparaju, a Biomedical Engineering student at University College of Engineering, Osmania University, Hyderabad.</p><p>I'm interested in the space where healthcare, engineering and modern software meet. My strongest curiosity is around medical AI, clinical technology, medical imaging, 3D interfaces and digital tools that can make healthcare workflows easier to understand or operate.</p><p>I enjoy building software-first solutions, experimenting with AI-assisted development, designing interfaces and turning biomedical ideas into working prototypes. I also work with embedded systems and biomedical instrumentation when a physical prototype is the right way to explore a problem.</p><p>Beyond engineering, I'm interested in writing books. I want to turn thoughts, real-life situations from my own life, things I observe in other people, conversations that stay with me and moments happening around me into stories and ideas. I also want to use AI tools to help shape, refine and develop those ideas while keeping the experiences and voice genuinely mine.</p><div class="about-focus-grid"><div><span>INTERESTS</span><strong>Healthcare AI · Medical imaging · 3D visualization · Clinical engineering · Assistive technology</strong></div><div><span>WHAT I ENJOY</span><strong>Ideation -> interface design -> implementation -> testing -> iteration</strong></div><div><span>WORK STYLE</span><strong>Curious · hands-on · software-first · prototype-driven</strong></div><div><span>DIRECTION</span><strong>Biomedical software · medical technology · AI-powered healthcare tools</strong></div><div><span>CAREER INTEREST</span><strong>Service engineering · Application engineering · Clinical engineering</strong></div><div><span>WRITING INTEREST</span><strong>Books · real-life situations · observations · reflection · AI-assisted editing</strong></div></div><div class="timeline"><div><span>2023 TO 2027</span><strong>B.E. Biomedical Engineering</strong><small>University College of Engineering, Osmania University</small></div><div><span>EXPERIENCE</span><strong>Apollo Hospital</strong><small>Clinical engineering internship · medical equipment exposure</small></div><div><span>FOCUS</span><strong>Medical Technology</strong><small>AI · medical imaging · 3D · clinical engineering · software tools</small></div></div></div></div></section>

<section class="credentials section"><div class="section-index">07 / CREDENTIALS</div><div class="credential-table">
<div><span>01</span><strong>Good Regulatory Practices</strong><small>WHO / CDSCO</small></div><div><span>02</span><strong>Biomedical Equipment Workshop</strong><small>Biomedical engineering</small></div><div><span>03</span><strong>ECG Simulator Workshop</strong><small>Medical instrumentation</small></div><div><span>04</span><strong>IoT Embedded Sensing Workshop</strong><small>Embedded systems</small></div><div><span>05</span><strong>Biomaterials Workshop</strong><small>Biomaterials & tissue engineering</small></div><div><span>06</span><strong>Research: Scaffolds & Biomaterial Applications</strong><small>MediTech 2023</small></div>
</div></section>

<section id="contact" class="contact section dark"><div class="contact-space" aria-hidden="true"><canvas id="contact-field-canvas"></canvas><div class="contact-stars"></div><div class="contact-orbit orbit-one"></div><div class="contact-orbit orbit-two"></div><div class="contact-signal"></div></div><div class="section-index">08 / CONTACT</div><div class="contact-inner"><div class="contact-kicker">OPEN CHANNEL</div><h2>Let's build<br><span>what comes next.</span></h2><p>Have a project, internship opportunity, research idea or collaboration in biomedical technology? I'm open to conversations around healthcare software, AI, clinical technology and useful digital tools.</p><a class="contact-button" href="mailto:ruthwik.biomed@gmail.com">Start a conversation <span>↗</span></a><a class="contact-email" href="mailto:ruthwik.biomed@gmail.com">ruthwik.biomed@gmail.com</a></div></section>
</main>
<footer><div class="footer-brand">RUTHWIK</div><div>BIOMEDICAL ENGINEERING<br>AI · 3D · CLINICAL TECHNOLOGY</div><div>© 2026 RUTHWIK GOPARAJU</div><div>CREATED BY RUTHWIK GOPARAJU</div><div><a href="mailto:ruthwik.biomed@gmail.com">ruthwik.biomed@gmail.com</a></div></footer>

<div class="project-modal" aria-hidden="true">
<button class="modal-close" aria-label="Close project">×</button>
<div class="modal-inner">
  <div class="modal-meta"><span class="modal-number"></span><span class="modal-type"></span></div>
  <h2 class="modal-title"></h2>
  <p class="modal-description"></p>
  <div class="modal-tags"></div>
  <div class="modal-links"></div>
  <div class="modal-story"></div>
  <div class="modal-images"></div>
</div>
</div>`;

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>glow.style.transform=`translate3d(${e.clientX-160}px,${e.clientY-160}px,0)`);
const menu=document.querySelector('.menu-button'),nav=document.querySelector('.desktop-nav');
menu.onclick=()=>{nav.classList.toggle('open');menu.classList.toggle('open')};
document.querySelectorAll('.desktop-nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));

const modal=document.querySelector('.project-modal');
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.querySelector('.modal-close').onclick=closeModal;
modal.onclick=e=>{if(e.target===modal)closeModal()};
document.querySelectorAll('.project-card').forEach(card=>card.onclick=(event)=>{ if(event.target.closest('.project-github')) return;
 const p=projects.find(x=>x.id===card.dataset.project);
 document.querySelector('.modal-number').textContent=p.n;
 document.querySelector('.modal-type').textContent=p.type;
 document.querySelector('.modal-title').textContent=p.title;
 document.querySelector('.modal-description').textContent=p.desc;
 document.querySelector('.modal-tags').innerHTML=p.tags.map(t=>`<span>${t}</span>`).join('');
 document.querySelector('.modal-story').textContent=p.detail;
 const modalLinks=document.querySelector('.modal-links');
 modalLinks.innerHTML=p.github?`<a class="modal-github" href="${p.github}" target="_blank" rel="noopener noreferrer">${p.githubLabel} <span>↗</span></a>`:'';
 const imageBox=document.querySelector('.modal-images');
 imageBox.innerHTML=(p.images||[]).map((src,i)=>`<figure><img src="${src}" alt="${p.title} project image ${i+1}" loading="lazy"><figcaption>Driver Safety Alert · prototype view ${String(i+1).padStart(2,'0')}</figcaption></figure>`).join('');
 modal.classList.add('open');
 modal.setAttribute('aria-hidden','false');
});
window.onkeydown=e=>{if(e.key==='Escape')closeModal()};


const toolItems=[...document.querySelectorAll('.tool-item')];
const track=document.querySelector('.tools-track');
const focus=document.querySelector('.tool-focus');
toolItems.forEach(item=>{
  item.addEventListener('mouseenter',()=>{
    track.classList.add('paused');
    toolItems.forEach(x=>x.classList.remove('active'));
    item.classList.add('active');
    focus.innerHTML=`<span class="focus-label">${item.dataset.level}</span><strong>${item.querySelector('strong').textContent}</strong><small>Experience level: ${item.dataset.years}</small>`;
  });
  item.addEventListener('mouseleave',()=>{
    item.classList.remove('active');
    track.classList.remove('paused');
    focus.innerHTML='<span class="focus-label">HOVER A TOOL</span><strong>Move your cursor over a tool</strong><small>The marquee pauses and shows the experience level.</small>';
  });
});

/* Dense galaxy particle fields for the hero and contact pages.
   The motion is intentionally inspired by the interactive visual language of modern
   Antigravity-style product sites, while remaining an original implementation.
   Particles orbit through a layered galaxy, respond to depth and repel the cursor. */
function createMagneticField(canvas, host, options={}){
  if(!canvas || !host) return;
  const ctx=canvas.getContext('2d',{alpha:true});
  const baseCount=options.count||1800;
  const particles=[];
  const pointer={x:0,y:0,active:false};
  let width=1,height=1,dpr=1,raf=0;
  const tint=options.tint||[152,164,255];
  const rand=(a,b)=>a+Math.random()*(b-a);
  const TAU=Math.PI*2;

  function resize(){
    const r=host.getBoundingClientRect();
    width=Math.max(1,r.width); height=Math.max(1,r.height);
    dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(width*dpr);
    canvas.height=Math.round(height*dpr);
    canvas.style.width=width+'px';
    canvas.style.height=height+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  function seed(){
    particles.length=0;
    const cx=width*.5, cy=height*.5;
    const maxR=Math.hypot(width,height)*.62;
    const count=width<650?Math.round(baseCount*.62):baseCount;
    for(let i=0;i<count;i++){
      const arm=i%5;
      const radius=Math.pow(Math.random(),.72)*maxR;
      const armAngle=arm/5*TAU;
      const swirl=radius*.00215;
      const angle=armAngle+swirl+rand(-.48,.48);
      const ellipse=rand(.68,1.05);
      const x=cx+Math.cos(angle)*radius*ellipse;
      const y=cy+Math.sin(angle)*radius;
      const z=Math.random();
      particles.push({
        x,y,
        ox:x,oy:y,
        vx:rand(-.035,.035),vy:rand(-.035,.035),
        angle,radius,arm,ellipse,z,
        size:rand(.45,1.65)+(z*.7),
        alpha:rand(.25,.78),
        twinkle:Math.random()*TAU
      });
    }
  }

  function updatePointer(e){
    const r=host.getBoundingClientRect();
    const inside=e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom;
    if(!inside){pointer.active=false;return;}
    pointer.x=e.clientX-r.left;
    pointer.y=e.clientY-r.top;
    pointer.active=true;
  }
  function clearPointer(){pointer.active=false;}

  window.addEventListener('pointermove',updatePointer,{passive:true});
  window.addEventListener('pointerleave',clearPointer,{passive:true});
  window.addEventListener('blur',clearPointer,{passive:true});
  window.addEventListener('resize',()=>{resize();seed()},{passive:true});
  resize();
  seed();

  function frame(now){
    ctx.clearRect(0,0,width,height);
    const t=now*.001;
    const cx=width*.5,cy=height*.5;
    const minDim=Math.min(width,height);
    const repelRadius=Math.max(120,minDim*.23);

    for(const p of particles){
      const orbitSpeed=(.00045+(1-p.z)*.0009);
      p.angle+=orbitSpeed*(p.radius/Math.max(minDim,1)+.45);
      const breathing=Math.sin(t*.35+p.twinkle)*(.8+p.z*1.6);
      const targetX=cx+Math.cos(p.angle+p.arm*.02)*(p.radius+breathing)*p.ellipse;
      const targetY=cy+Math.sin(p.angle+p.arm*.02)*(p.radius+breathing);

      p.vx+=(targetX-p.x)*(.00038+(1-p.z)*.00028);
      p.vy+=(targetY-p.y)*(.00038+(1-p.z)*.00028);

      if(pointer.active){
        const dx=p.x-pointer.x;
        const dy=p.y-pointer.y;
        const d=Math.hypot(dx,dy)||.001;
        if(d<repelRadius){
          const falloff=Math.pow(1-d/repelRadius,2);
          const force=(.7+2.6*(1-p.z))*falloff;
          p.vx+=(dx/d)*force;
          p.vy+=(dy/d)*force;
        }
      }

      // Gentle return force keeps the field coherent after the cursor leaves.
      p.vx*=.925;
      p.vy*=.925;
      p.x+=p.vx;
      p.y+=p.vy;

      if(p.x<-80||p.x>width+80||p.y<-80||p.y>height+80){
        p.x=p.ox;p.y=p.oy;p.vx=0;p.vy=0;
      }

      const dist=pointer.active?Math.hypot(p.x-pointer.x,p.y-pointer.y):9999;
      const local=pointer.active?Math.max(0,1-dist/repelRadius):0;
      const tw=.78+.22*Math.sin(t*1.7+p.twinkle);
      const alpha=Math.min(.95,p.alpha*tw+local*.25);
      const radius=p.size*(.7+p.z*.9)+local*1.25;
      ctx.beginPath();
      ctx.fillStyle=`rgba(${tint[0]},${tint[1]},${tint[2]},${alpha})`;
      ctx.arc(p.x,p.y,radius,0,TAU);
      ctx.fill();
    }

    // A restrained galaxy core gives the field depth without covering the typography.
    const core=ctx.createRadialGradient(cx,cy,0,cx,cy,minDim*.46);
    core.addColorStop(0,'rgba(116,130,255,.08)');
    core.addColorStop(.35,'rgba(86,100,210,.035)');
    core.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=core;
    ctx.fillRect(0,0,width,height);

    raf=requestAnimationFrame(frame);
  }
  raf=requestAnimationFrame(frame);
  return ()=>{
    cancelAnimationFrame(raf);
    window.removeEventListener('pointermove',updatePointer);
    window.removeEventListener('pointerleave',clearPointer);
    window.removeEventListener('blur',clearPointer);
  };
}

createMagneticField(document.querySelector('#field-canvas'),document.querySelector('.hero-magnetic'),{count:2300,tint:[153,166,255]});
createMagneticField(document.querySelector('#contact-field-canvas'),document.querySelector('#contact'),{count:1700,tint:[153,166,255]});
