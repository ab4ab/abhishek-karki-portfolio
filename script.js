// ==================== DATA ====================
const PROJECTS = [
    // same data as before, paste your full PROJECTS array here
    // (I'll include a sample – you must copy the full array from the previous merged HTML)
    {
        id:1, title:"InSAR Time Series for Highway Subsidence", cat:"InSAR / Geotech", filter:"insar", loc:"Sloterdijk to Rijksweg, Netherlands",
        short:"13 Sentinel-1 images (Jan–May 2024) processed with SNAP+SNAPHU – displacement maps, A10 highway profiles.",
        full:"Processed 13 Sentinel-1 SLC images using SNAP + SNAPHU...",
        tech:["SNAP","SNAPHU","Sentinel-1"],
        pdf:"assets/portfolio-photos/insar/insar.pdf",
        media:[
            {type:"image",src:"assets/portfolio-photos/insar/Screenshot 2026-05-08 194722.png",caption:"Interferogram"},
            // ... other media
        ]
    },
    // ... include all 8 projects
];

const WORK_IMAGES = {
    balefi: { folder:"Balefi", files:['IMG_20230910_133439.jpg',...], captions:[...] },
    // ... all sites
};

const FREELANCE = [
    // ... exactly as in the old code
];

const SKILLS = [
    // ... all 8 skill objects
];

const CERTIFICATES = [
    // ... all certs
];
const CERT_THUMBS = [ ... ];

// ==================== LENIS ====================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// ==================== SCROLLTRIGGER REVEALS ====================
ScrollTrigger.batch(".reveal", {
    onEnter: (elements) => {
        gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        });
        elements.forEach(el => el.classList.add('visible'));
    },
    once: true,
});

// ==================== NAVBAR SCROLL ====================
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('scrolled', window.scrollY > 40);
    // Progress bar
    const bar = document.getElementById('progress-bar');
    const top = window.scrollY;
    const max = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (top / max * 100) + '%';
    // Back to top
    document.getElementById('btt').classList.toggle('on', window.scrollY > 400);
});

// ==================== NAV MOBILE TOGGLE ====================
document.getElementById('hbg').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
    document.getElementById('hbg').classList.toggle('open');
});

// ==================== PROJECT RENDERING ====================
function buildProjects() {
    const grid = document.getElementById('projGrid');
    grid.innerHTML = PROJECTS.map(p => `
        <div class="proj-card reveal" data-filter="${p.filter}" onclick="openProjModal(${p.id})">
            <div class="proj-thumb">
                <div class="proj-hover-mask"><div class="proj-view-btn"><i class="fas fa-search-plus"></i> Parse Case</div></div>
            </div>
            <div class="proj-body">
                <div class="proj-cat">${p.cat}</div>
                <h3>${p.title}</h3>
                <p>${p.short}</p>
                <div class="tech-row">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
            </div>
        </div>
    `).join('');
}

// ==================== FREELANCE RENDERING ====================
function buildFreelance() {
    document.getElementById('flGrid').innerHTML = FREELANCE.map(f => {
        let thumbs = '';
        if (f.files && f.files.length) {
            thumbs = f.files.map((file, i) => `
                <div class="fl-thumb" onclick="event.stopPropagation(); openCarouselFromList(${JSON.stringify(f.files.map((ff,ii)=>({ src:f.folder+ff, caption:f.captions?.[ii]||ff })))}, ${i})">
                    <img src="${f.folder + file}" alt="">
                </div>
            `).join('');
        }
        return `
            <div class="fl-card reveal">
                <div class="fl-top"><h3>${f.title}</h3><span class="fl-date">${f.date}</span></div>
                <p>${f.desc}</p>
                <div class="fl-thumbs">${thumbs}</div>
                ${f.pdf ? `<a href="${f.pdf}" target="_blank" class="btn btn-o" style="margin-top:0.8rem;"><i class="fas fa-file-alt"></i> Report</a>` : ''}
            </div>
        `;
    }).join('');
}

// ==================== SKILLS & CERTS RENDERING ====================
function buildSkills() {
    document.getElementById('skillsGrid').innerHTML = SKILLS.map(s => `
        <div class="sk-card reveal">
            <div class="sk-ic"><i class="fas ${s.icon}"></i></div>
            <h4>${s.title}</h4>
            <div class="sk-tags">${s.tags.map(t => `<span class="sk-tag">${t}</span>`).join('')}</div>
        </div>
    `).join('');
}

function buildCerts() {
    document.getElementById('certGrid').innerHTML = CERTIFICATES.map(c => `
        <div class="cert-item">
            <div class="cert-icon"><i class="fas ${c.icon}"></i></div>
            <div class="cert-details"><strong>${c.title}</strong><span>${c.desc}</span></div>
        </div>
    `).join('');

    const thumbs = document.getElementById('certThumbs');
    thumbs.innerHTML = CERT_THUMBS.map((c, i) => `
        <img src="assets/Cerififcations/${c.file}" onclick="openCarouselFromList(${JSON.stringify(CERT_THUMBS.map(cc=>'assets/Cerififcations/'+cc.file))}, ${i})">
    `).join('');
}

// ==================== FILTER ====================
window.filterProj = function(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    document.querySelectorAll('.proj-card').forEach(c => {
        c.style.display = (cat === 'all' || c.dataset.filter === cat) ? '' : 'none';
    });
};

// ==================== PROJECT MODAL ====================
window.openProjModal = function(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    document.getElementById('mHead').innerHTML = `<div class="m-cat">${p.cat}</div><h2 class="m-title">${p.title}</h2><div class="m-loc">${p.loc}</div>`;
    document.getElementById('mDesc').innerHTML = `<p class="m-desc">${p.full}</p><p><strong>Technologies:</strong> ${p.tech.join(', ')}</p>`;
    const gallery = document.getElementById('mGallery');
    gallery.innerHTML = p.media.map((m, i) => {
        if (m.type === 'image') {
            return `<div class="m-media-wrap" onclick="openCarouselFromList(${JSON.stringify(p.media.map(mm=>({ src:mm.src, caption:mm.caption })))}, ${i})"><img src="${m.src}" alt=""></div>`;
        } else {
            return `<div class="m-media-wrap" onclick="openVideoModal('${m.src}')"><video muted><source src="${m.src}" type="video/mp4"></video></div>`;
        }
    }).join('');
    document.getElementById('mPdf').innerHTML = p.pdf ? `<a href="${p.pdf}" target="_blank" class="btn btn-o" style="display:inline-flex;"><i class="fas fa-file-alt"></i> Full Report</a>` : '';
    document.getElementById('projModal').classList.add('on');
    document.body.style.overflow = 'hidden';
};

window.closeModal = function(id) {
    document.getElementById(id).classList.remove('on');
    document.body.style.overflow = '';
};

// ==================== CAROUSEL & VIDEO ====================
let currentMediaList = [], currentMediaIndex = 0;
window.openCarouselFromList = function(list, idx) {
    currentMediaList = list;
    currentMediaIndex = idx;
    updateCarousel();
    document.getElementById('carouselModal').classList.add('active');
};
function updateCarousel() {
    const img = document.getElementById('carouselImage');
    const cap = document.getElementById('carouselCaption');
    if (currentMediaList.length && currentMediaIndex < currentMediaList.length) {
        const item = currentMediaList[currentMediaIndex];
        if (typeof item === 'string') {
            img.src = item;
            cap.textContent = '';
        } else {
            img.src = item.src;
            cap.textContent = item.caption || '';
        }
    }
}
window.prevImage = function() { if (currentMediaList.length) { currentMediaIndex = (currentMediaIndex - 1 + currentMediaList.length) % currentMediaList.length; updateCarousel(); }};
window.nextImage = function() { if (currentMediaList.length) { currentMediaIndex = (currentMediaIndex + 1) % currentMediaList.length; updateCarousel(); }};
window.closeCarousel = function() { document.getElementById('carouselModal').classList.remove('active'); currentMediaList = []; };
window.openVideoModal = function(src) {
    document.getElementById('videoPlayer').src = src;
    document.getElementById('videoModal').classList.add('active');
};
window.closeVideoModal = function() {
    document.getElementById('videoPlayer').pause();
    document.getElementById('videoPlayer').src = '';
    document.getElementById('videoModal').classList.remove('active');
};

// Attach close events
document.querySelector('.close-carousel').addEventListener('click', closeCarousel);
document.querySelector('.close-video').addEventListener('click', closeVideoModal);
document.querySelector('.carousel-prev').addEventListener('click', prevImage);
document.querySelector('.carousel-next').addEventListener('click', nextImage);
document.addEventListener('keydown', (e) => {
    if (document.getElementById('carouselModal').classList.contains('active')) {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeCarousel();
    }
    if (document.getElementById('videoModal').classList.contains('active') && e.key === 'Escape') {
        closeVideoModal();
    }
});

// ==================== WORK GALLERY ====================
window.openWorkGallery = function(siteId) {
    const site = WORK_IMAGES[siteId];
    if (!site || !site.files.length) return;
    const base = `assets/Professional Career/${site.folder}/`;
    const media = site.files.map((f, i) => ({ src: base + f, caption: site.captions?.[i] || f }));
    openCarouselFromList(media, 0);
};

// ==================== HERO TYPED EFFECT ====================
const words = ["Computational Geomatics Expert", "Hydraulic Mesh Analyst", "Civil Infrastructure Engineer"];
let wi = 0, ci = 0, isDel = false;
function type() {
    const el = document.getElementById('typed');
    const cur = words[wi];
    el.textContent = isDel ? cur.substring(0, ci--) : cur.substring(0, ci++);
    if (!isDel && ci > cur.length) { setTimeout(() => isDel = true, 1500); }
    else if (isDel && ci < 0) { isDel = false; wi = (wi + 1) % words.length; ci = 0; }
    setTimeout(type, isDel ? 40 : 80);
}
type();

// ==================== TEXT SCRAMBLE (Splitting.js + GSAP) ====================
Splitting();
document.querySelectorAll('[data-splitting]').forEach(el => {
    const chars = el.querySelectorAll('.char');
    gsap.fromTo(chars, {
        opacity: 0,
        rotateX: -90,
        y: 10
    }, {
        opacity: 1,
        rotateX: 0,
        y: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
        }
    });
});

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    buildProjects();
    buildFreelance();
    buildSkills();
    buildCerts();
});