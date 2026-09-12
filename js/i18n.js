/**
 * Bayu Sedana Portfolio - Internationalization (i18n)
 * Seamless instant bilingual switching (Indonesian / English)
 * Tone: Direct, Human, Professional, Zero AI Slop
 */

const translations = {
  id: {
    // Navigation
    nav_profile: "Profil",
    nav_experience: "Pengalaman",
    nav_projects: "Projects",
    nav_certs: "Certifications",
    nav_gallery: "Dokumentasi Training",
    back_to_profile: "← Kembali ke Profil",

    // Studio Hero
    hero_eyebrow: "PORTOFOLIO & PROFIL • 2026",
    hero_headline: "Software & Data Specialist",
    hero_badge_status: "Terbuka untuk Peluang Kerja Full-Time",
    hero_greeting: "Halo, saya Bayu Sedana.",
    hero_role: "Software & Data Specialist",
    hero_lead: "Praktisi IT dengan 5+ tahun pengalaman dalam rekayasa software, analitik data, dan arsitektur sistem. Terbuka untuk posisi full-time di bidang IT yang relevan, kolaborasi proyek teknologi, serta mentoring & pelatihan teknis.",
    cta_request_cv: "Minta CV Resmi (PDF)",
    btn_explore_works: "Jelajahi Karya ↓",
    badge_top: "5+ Tahun Pengalaman",
    badge_bottom: "Open to IT Roles & Mentoring",

    // Milestones Strip
    milestone_exp_num: "5+",
    milestone_exp_label: "Tahun Pengalaman",
    milestone_exp_sub: "Rekayasa software, data & solusi IT",
    milestone_corp_num: "3",
    milestone_corp_label: "Peran Formal In-House",
    milestone_corp_sub: "Glints, Indofun & Asosiasi AI",
    milestone_free_num: "Feb 2023",
    milestone_free_label: "Aktif Konsultasi & Freelance",
    milestone_free_sub: "Solusi IT, custom decks & mentoring",

    // Section Titles
    summary_title: "Tentang & Pendekatan Kerja",
    summary_p1: "Saya berfokus pada <strong>rekayasa perangkat lunak</strong> dan <strong>pengolahan data terapan</strong>. Mengembangkan layanan backend dengan Python dan Node.js, merancang struktur database SQL yang efisien, serta menerjemahkan data operasional menjadi insight yang dapat langsung digunakan untuk pengambilan keputusan bisnis.",
    summary_p2: "Rekam jejak kerja saya mencakup peran formal di <strong>PT Glints Indonesia Group</strong> (Software Engineer Trainee) dan <strong>PT Indofun Digital Technology</strong> (Business Support & Analytics), serta instruktur di <strong>Asosiasi AI Indonesia</strong>. Di luar peran korporat, sejak Februari 2023 saya aktif menjalankan proyek freelance: konsultasi arsitektur sistem IT, pembuatan <strong>custom presentation & pitch decks</strong> untuk kebutuhan bisnis, dan pelatihan teknis untuk institusi seperti Bank Indonesia.",
    summary_p3: "Saat ini saya terbuka untuk <strong>posisi full-time di bidang IT</strong> (Software Engineer, Data Analyst, maupun peran IT yang relevan), <strong>kolaborasi proyek</strong> (arsitektur sistem, automasi data, custom pitch decks), serta <strong>mentoring teknis & corporate training</strong>.",
    
    showcase_title: "Sorotan Karya Terpilih",
    showcase_subtitle: "Cuplikan hasil kerja nyata pada integrasi fintech, pemanfaatan machine learning, dan in-house enterprise training.",
    showcase_indofun_title: "ShopeePay & Indofun Fintech Partnership",
    showcase_indofun_desc: "Mengkoordinasikan integrasi teknis sistem pembayaran ShopeePay & DANA untuk game Idle Dynasty (Google Play Award 2021).",
    showcase_indofun_link: "Lihat Detail Kasus →",
    showcase_bi_title: "In-House Training: AI & Data Analytics Bank Indonesia",
    showcase_bi_desc: "Instruktur pelatihan teknis AI & analitik data terapan untuk staf analis Bank Indonesia KPw Jatim dan talenta GenBI Sulsel.",
    showcase_bi_link: "Buka Dokumentasi →",
    showcase_asha_title: "Workshop AI: Kreasi Konten Guru Abad 21",
    showcase_asha_desc: "Narasumber tunggal workshop AI generatif dan prompt engineering untuk otomatisasi materi ajar ratusan pendidik se-Indonesia.",
    showcase_asha_link: "Lihat Detail Workshop →",

    clients_title: "Mitra Pelatihan & Institusi",
    experience_title: "Pengalaman Kerja & Karir",
    
    // Experience Groups
    exp_group_formal: "Pengalaman Penuh Waktu (In-House)",
    exp_group_formal_badge: "Kantoran / Full-Time",
    exp_group_freelance: "Freelance & Konsultasi Independen",
    exp_group_freelance_badge: "Sejak Feb 2023",
    exp_freelance_intro: "Sejak Februari 2023, aktif menjalankan proyek independen: konsultasi arsitektur sistem IT, automasi data pipeline, produksi custom pitch decks eksekutif, dan bimbingan teknis institusi.",

    // Job: Asosiasi AI Indonesia
    exp_aai_org: "Asosiasi AI Indonesia",
    exp_aai_role: "Lead Instructor - Applied AI & Data Analytics",
    exp_aai_period: "Jul 2026 - Sekarang",
    exp_aai_b1: "Merancang kurikulum intensif dan mengajar praktisi industri dalam implementasi Machine Learning terapan, Data Analytics dengan Python, dan integrasi API AI.",
    exp_aai_b2: "Membimbing langsung ratusan peserta dan profesional korporat dalam penyelesaian end-to-end data capstone projects hingga lulus sertifikasi kompetensi nasional BNSP.",
    exp_aai_b3: "Menyelenggarakan program pelatihan in-house khusus instansi dan kemitraan kampus untuk akselerasi adopsi teknologi data modern.",

    // Job: Indofun
    exp_indofun_org: "PT Indofun Digital Technology",
    exp_indofun_role: "Business Support & Analytics Specialist",
    exp_indofun_period: "Jun 2021 - Agu 2022",
    exp_indofun_b1: "Memimpin integrasi teknis payment gateway fintech (ShopeePay & DANA) dan sinkronisasi server untuk game Idle Dynasty (Pemenang Google Play Store Award 2021).",
    exp_indofun_b2: "Mengeksekusi analisis data transaksi harian, pola belanja pemain, dan metrik retensi untuk mengoptimalkan event in-game dan keputusan operasional.",
    exp_indofun_b3: "Menyusun dokumentasi teknis infrastruktur server, API runbook, dan Standard Operating Procedure (SOP) internal tim operasi.",

    // Job: Glints
    exp_glints_org: "PT Glints Indonesia Group",
    exp_glints_role: "Software Engineer Trainee (Backend)",
    exp_glints_period: "Mar 2021 - Jun 2021",
    exp_glints_b1: "Mengembangkan RESTful API backend menggunakan Node.js dan Express dalam sprint Agile (Scrum) dengan standar code quality ketat.",
    exp_glints_b2: "Menulis rangkaian unit testing otomatis, menangani debugging endpoint, dan berpartisipasi aktif dalam peer code review bersama senior engineers.",
    exp_glints_b3: "Mengoptimalkan performa query database dan memastikan stabilitas layanan sebelum deployment ke staging environment.",

    // Freelance 1: IT Solutions & Custom Decks
    exp_consulting_org: "IT Solutions, Architecture & Custom Decks",
    exp_consulting_role: "Independent IT Consultant & Deck Specialist",
    exp_consulting_period: "Feb 2023 - Sekarang",
    exp_consulting_b1: "Memberikan konsultasi arsitektur sistem perangkat lunak, integrasi API, dan automasi alur kerja data bagi UMKM, digital agency, serta startup teknologi.",
    exp_consulting_b2: "Merancang dan memproduksi custom pitch decks eksekutif, dokumen strategi bisnis, dan model finansial terstruktur untuk presentasi pendanaan investor dan validasi produk.",
    exp_consulting_b3: "Mengevaluasi efisiensi biaya infrastruktur cloud/server dan merekomendasikan stack teknologi yang scalable sesuai anggaran bisnis klien.",

    // Freelance 2: Trainer & Mentor
    exp_trainer_org: "Technical Trainer & Data Science Mentor",
    exp_trainer_role: "Corporate Trainer & Technical Mentor",
    exp_trainer_period: "Feb 2023 - Sekarang",
    exp_trainer_b1: "Instruktur in-house training AI dan analitik data untuk institusi terkemuka, termasuk Bank Indonesia KPw Jatim dan GenBI Bank Indonesia Sulsel.",
    exp_trainer_b2: "Mentor teknis data science di Belajarlagi, MySkill, dan ITSTEP Academy; membimbing 100+ peserta membedah dataset riil menggunakan Python dan SQL.",
    exp_trainer_b3: "Pemateri kuliah tamu dan workshop aplikatif di BINUS Online Learning, Universitas Terbuka, dan Pusdiklat TNI.",

    // Skills
    skills_title: "Keahlian Teknis & Deliverables",
    skill_cat_languages: "Bahasa & Backend:",
    skill_cat_data: "Data & Machine Learning:",
    skill_cat_decks: "Deliverables & Custom Decks:",

    // Certifications
    certs_title: "Sertifikasi Pilihan & Pendidikan",
    view_all_certs: "Lihat Semua Sertifikasi →",
    view_all_projects: "Lihat Semua Proyek →",
    view_all_gallery: "Buka Dokumentasi Training →",

    // Projects Teaser & Gallery Teaser
    projects_teaser_title: "Pameran Karya & Proyek",
    projects_teaser_desc: "Eksplorasi 10 proyek publik meliputi machine learning Colab, dashboard Tableau, integrasi fintech ShopeePay, dan web app.",
    gallery_teaser_title: "Dokumentasi Pelatihan Lapangan",
    gallery_teaser_desc: "Dokumentasi visual saat membawakan materi AI dan data di Bank Indonesia Jatim, GenBI Sulsel, BINUS, dan kampus mitra.",

    // Projects Page
    projects_page_title: "Karya & Studi Kasus",
    projects_page_desc: "Kumpulan proyek publik di bidang rekayasa perangkat lunak, machine learning Python, integrasi fintech, visualisasi data Tableau, dan web app.",
    nda_disclaimer: "Catatan Keterbukaan Proyek: Proyek di bawah ini adalah portofolio yang dapat saya bagikan ke publik. Proyek komersial dan in-house lainnya tidak ditampilkan secara terbuka karena terikat perjanjian kerahasiaan (NDA).",
    filter_all: "Semua",
    filter_colab: "Google Colab",
    filter_apps: "Web App & Dashboard",
    filter_tableau: "Tableau",
    filter_indofun: "Indofun & Fintech",
    filter_workshop: "AI Workshop",
    btn_open_app: "Buka Live App ↗",
    btn_open_notebook: "Buka Notebook ↗",
    btn_open_tableau: "Buka Tableau ↗",
    btn_view_cover: "Lihat Cover ↗",
    btn_open_guide: "Buka Panduan ↗",
    btn_open_program: "Buka Program ↗",
    preview_tag: "Pratinjau ↗",

    // Project Cards Desc
    proj_desc_jakpus: "Aplikasi web dashboard interaktif untuk agregasi data dan monitoring indikator operasional wilayah Jakarta yang dideploy di Vercel.",
    proj_desc_sentiment: "Pemodelan klasifikasi sentimen teks menggunakan Python, preprocessing data teks, dan evaluasi algoritma machine learning di Google Colab.",
    proj_desc_detect: "Implementasi computer vision berbasis deep learning untuk mendeteksi objek sekaligus menghitung jumlah target visual secara otomatis.",
    proj_desc_aerial: "Deteksi dan pelacakan objek dari sudut pandang citra udara / drone (aerial imagery) menggunakan model deep learning di Google Colab.",
    proj_desc_tableau: "Kumpulan portofolio dashboard interaktif, visualisasi indikator metrik bisnis, dan eksplorasi data yang dipublikasikan di Tableau Public.",
    proj_desc_pendowo: "Portal profil bisnis digital dan informasi katalog layanan untuk House of Pendowo.",
    proj_desc_shopee_june: "Proposal integrasi dan kemitraan promosi fintech ShopeePay untuk pengguna baru game Idle Dynasty. Hanya menampilkan Halaman 1 (Cover) sesuai batasan kerahasiaan.",
    proj_desc_shopee_feb: "Perencanaan kemitraan promosi pembayaran ShopeePay dalam ajang Google Play Festival. Hanya menampilkan Halaman 1 (Cover) sesuai batasan kerahasiaan.",
    proj_desc_guide: "Portal dokumentasi dan panduan interaktif resmi untuk membantu pemain memahami mekanisme event, alur transaksi, dan panduan dasar game.",
    proj_desc_ashaedu: "Pelatihan pemanfaatan generative AI untuk para pendidik bersama Asha Edukasi dan Asosiasi AI Indonesia, membedah modul ajar berbasis AI, asesmen otomatis, dan media pembelajaran kreatif.",

    // Certifications Page
    certs_page_title: "Sertifikasi Profesional",
    certs_page_desc: "Kredensial dan sertifikasi resmi yang memvalidasi kompetensi di bidang data science, arsitektur SQL, dan cybersecurity.",
    btn_verify_online: "Verifikasi Online ↗",
    btn_open_pdf: "Buka PDF ↗",
    btn_view_full: "Buka Gambar ↗",

    // Gallery Page
    gallery_page_title: "Dokumentasi Training",
    gallery_page_desc: "Jurnal foto kegiatan dari sesi executive in-house training, workshop analitik data, dan kuliah tamu di berbagai institusi.",
    filter_client_all: "Semua Klien",
    filter_client_bi: "Bank Indonesia",
    filter_client_binus: "BINUS University",
    filter_client_ut: "Universitas Terbuka",
    filter_client_untag: "UNTAG Samarinda",
    filter_client_webinar: "Kuliah Umum",
    bi_album_title: "Pemanfaatan AI di Lingkungan Bank",
    bi_album_inst: "Bank Indonesia Kantor Perwakilan Jawa Timur",
    bi_album_desc: "Sesi training intensif mengenai pemanfaatan AI, pemodelan data terapan, dan otomasi analisis data untuk tim analis Bank Indonesia KPw Jawa Timur.",
    other_sessions_heading: "Dokumentasi Sesi Lainnya",

    // Footer
    footer_rights: "Hak cipta dilindungi undang-undang."
  },

  en: {
    // Navigation
    nav_profile: "Profile",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_certs: "Certifications",
    nav_gallery: "Training Documentation",
    back_to_profile: "← Back to Profile",

    // Studio Hero
    hero_eyebrow: "PORTFOLIO & PROFILE • 2026",
    hero_headline: "Software & Data Specialist",
    hero_badge_status: "Open to Full-Time Roles",
    hero_greeting: "Hello, I'm Bayu Sedana.",
    hero_role: "Software & Data Specialist",
    hero_lead: "IT practitioner with 5+ years of experience across software engineering, data analytics, and system architecture. Open for full-time positions in IT fields, technical project collaboration, and developer mentoring.",
    cta_request_cv: "Request Official CV (PDF)",
    btn_explore_works: "Explore Works ↓",
    badge_top: "5+ Years Experience",
    badge_bottom: "Open to IT Roles & Mentoring",

    // Milestones Strip
    milestone_exp_num: "5+",
    milestone_exp_label: "Years of Experience",
    milestone_exp_sub: "Software, data & IT solutions",
    milestone_corp_num: "3",
    milestone_corp_label: "Corporate & In-House Roles",
    milestone_corp_sub: "Glints, Indofun & Asosiasi AI",
    milestone_free_num: "Feb 2023",
    milestone_free_label: "Active Consulting & Freelance",
    milestone_free_sub: "IT systems, custom decks & mentoring",

    // Section Titles
    summary_title: "About & Approach",
    summary_p1: "I focus on <strong>software engineering</strong> and <strong>applied data processing</strong>. Developing backend services with Python and Node.js, designing reliable SQL database structures, and turning operational data into insights that directly support business decisions.",
    summary_p2: "My background includes formal in-house roles at <strong>PT Glints Indonesia Group</strong> (Software Engineer Trainee) and <strong>PT Indofun Digital Technology</strong> (Business Support & Analytics), as well as serving as an instructor at <strong>Asosiasi AI Indonesia</strong>. Alongside corporate roles, since February 2023 I have delivered independent freelance work: IT system consulting, <strong>custom pitch & presentation decks</strong> for business teams, and technical training for institutions such as Bank Indonesia.",
    summary_p3: "Currently open for <strong>full-time positions across IT fields</strong> (Software Engineer, Data Analyst, or suitable IT roles), <strong>project collaboration</strong> (system architecture, data automation, custom pitch decks), and <strong>technical mentoring & corporate training</strong>.",
    
    showcase_title: "Selected Case Studies",
    showcase_subtitle: "Real-world project deliverables across fintech integration, machine learning applications, and in-house enterprise training.",
    showcase_indofun_title: "ShopeePay & Indofun Fintech Partnership",
    showcase_indofun_desc: "Coordinated technical payment integration for ShopeePay & DANA with Idle Dynasty (Google Play Award 2021).",
    showcase_indofun_link: "View Case Details →",
    showcase_bi_title: "In-House Training: AI & Data Analytics Bank Indonesia",
    showcase_bi_desc: "Technical instructor for applied AI & data analytics training for Bank Indonesia East Java analysts and GenBI South Sulawesi.",
    showcase_bi_link: "View Documentation →",
    showcase_asha_title: "AI Workshop: Creative Content for 21st-Century Educators",
    showcase_asha_desc: "Sole speaker conducting generative AI and prompt engineering workshops for educators across Indonesia.",
    showcase_asha_link: "View Workshop Details →",

    clients_title: "Training Partners & Institutions",
    experience_title: "Work Experience & Career",
    
    // Experience Groups
    exp_group_formal: "Full-Time & In-House Roles",
    exp_group_formal_badge: "Formal / Full-Time",
    exp_group_freelance: "Freelance & Independent Consulting",
    exp_group_freelance_badge: "Since Feb 2023",
    exp_freelance_intro: "Since February 2023, actively executing independent initiatives: IT system architecture consulting, data pipeline automation, custom executive pitch decks, and institutional technical training.",

    // Job: Asosiasi AI Indonesia
    exp_aai_org: "Asosiasi AI Indonesia",
    exp_aai_role: "Lead Instructor - Applied AI & Data Analytics",
    exp_aai_period: "Jul 2026 - Present",
    exp_aai_b1: "Designed intensive curricula and led hands-on training for industry professionals in applied Machine Learning, Python data analytics, and AI API integrations.",
    exp_aai_b2: "Mentored hundreds of professionals through end-to-end data capstones, achieving successful national BNSP competency certifications.",
    exp_aai_b3: "Delivered tailored in-house training programs and university partnerships to accelerate the adoption of modern data technologies.",

    // Job: Indofun
    exp_indofun_org: "PT Indofun Digital Technology",
    exp_indofun_role: "Business Support & Analytics Specialist",
    exp_indofun_period: "Jun 2021 - Aug 2022",
    exp_indofun_b1: "Spearheaded technical fintech payment gateway integrations (ShopeePay & DANA) and server sync for Idle Dynasty (Google Play Store Award 2021).",
    exp_indofun_b2: "Executed daily transaction data analytics, player spending patterns, and retention metrics to optimize in-game campaigns and operational decisions.",
    exp_indofun_b3: "Authored comprehensive server infrastructure runbooks, API specifications, and team operational SOPs.",

    // Job: Glints
    exp_glints_org: "PT Glints Indonesia Group",
    exp_glints_role: "Software Engineer Trainee (Backend)",
    exp_glints_period: "Mar 2021 - Jun 2021",
    exp_glints_b1: "Engineered backend RESTful APIs using Node.js and Express in an Agile/Scrum team, adhering to strict code quality standards.",
    exp_glints_b2: "Wrote automated unit test suites, resolved production API bugs, and participated actively in rigorous peer code reviews with senior engineers.",
    exp_glints_b3: "Optimized database queries and verified system reliability prior to staging and production deployments.",

    // Freelance 1: IT Solutions & Custom Decks
    exp_consulting_org: "IT Solutions, Architecture & Custom Decks",
    exp_consulting_role: "Independent IT Consultant & Deck Specialist",
    exp_consulting_period: "Feb 2023 - Present",
    exp_consulting_b1: "Consulted on software architecture, API integrations, and workflow data automation pipelines for SMEs, digital agencies, and tech startups.",
    exp_consulting_b2: "Produced high-stakes custom executive pitch decks, business strategy dossiers, and structured financial models for investor fundraising and product validation.",
    exp_consulting_b3: "Audited infrastructure cost efficiency and recommended scalable technology stacks tailored to client budgets and roadmaps.",

    // Freelance 2: Trainer & Mentor
    exp_trainer_org: "Technical Trainer & Data Science Mentor",
    exp_trainer_role: "Corporate Trainer & Technical Mentor",
    exp_trainer_period: "Feb 2023 - Present",
    exp_trainer_b1: "Delivered specialized in-house AI and data analytics training for premier institutions, including Bank Indonesia East Java and GenBI South Sulawesi.",
    exp_trainer_b2: "Technical data science mentor at Belajarlagi, MySkill, and ITSTEP Academy, guiding 100+ learners through real-world dataset analysis with Python and SQL.",
    exp_trainer_b3: "Guest lecturer and workshop speaker for BINUS Online Learning, Universitas Terbuka, and Pusdiklat TNI.",

    // Skills
    skills_title: "Technical Skills & Deliverables",
    skill_cat_languages: "Languages & Backend:",
    skill_cat_data: "Data & Machine Learning:",
    skill_cat_decks: "Deliverables & Custom Decks:",

    // Certifications
    certs_title: "Featured Certifications & Education",
    view_all_certs: "View All Certifications →",
    view_all_projects: "View All Projects →",
    view_all_gallery: "View Training Documentation →",

    // Projects Teaser & Gallery Teaser
    projects_teaser_title: "Curated Works & Projects",
    projects_teaser_desc: "Explore 10 public projects across Python machine learning, Tableau dashboards, fintech integrations, and live web apps.",
    gallery_teaser_title: "Field Training Documentation",
    gallery_teaser_desc: "Photo journal from executive training sessions at Bank Indonesia East Java, GenBI South Sulawesi, BINUS, and university partners.",

    // Projects Page
    projects_page_title: "Works & Case Studies",
    projects_page_desc: "A showcase of engineering work across software development, Python machine learning, fintech integrations, Tableau BI, and web applications.",
    nda_disclaimer: "Project Disclosure: The projects listed below represent public portfolio work. Commercial and in-house enterprise projects subject to Non-Disclosure Agreements (NDAs) are omitted.",
    filter_all: "All",
    filter_colab: "Google Colab",
    filter_apps: "Web App & Dashboard",
    filter_tableau: "Tableau",
    filter_indofun: "Indofun & Fintech",
    filter_workshop: "AI Workshop",
    btn_open_app: "Open Live App ↗",
    btn_open_notebook: "Open Notebook ↗",
    btn_open_tableau: "Open Tableau ↗",
    btn_view_cover: "View Cover ↗",
    btn_open_guide: "Open Guide ↗",
    btn_open_program: "Open Program ↗",
    preview_tag: "Preview ↗",

    // Project Cards Desc
    proj_desc_jakpus: "Interactive web dashboard for operational data aggregation and regional monitoring in Jakarta, deployed on Vercel.",
    proj_desc_sentiment: "Text sentiment classification pipeline utilizing Python NLP preprocessing and machine learning models in Google Colab.",
    proj_desc_detect: "Deep learning computer vision implementation to detect and count visual object targets automatically.",
    proj_desc_aerial: "Object detection and aerial tracking pipeline for drone imagery built with deep learning in Google Colab.",
    proj_desc_tableau: "Collection of interactive business dashboards, performance indicators, and data analysis published on Tableau Public.",
    proj_desc_pendowo: "Digital business portal and service catalog website developed for House of Pendowo.",
    proj_desc_shopee_june: "Fintech promotional partnership proposal for ShopeePay user onboarding in Idle Dynasty. Displays Page 1 (Cover) only due to NDA.",
    proj_desc_shopee_feb: "Promotional campaign planning for ShopeePay payment partnership in Google Play Festival. Displays Page 1 (Cover) only due to NDA.",
    proj_desc_guide: "Official interactive guide and player documentation portal covering game mechanics, transaction flows, and tutorials.",
    proj_desc_ashaedu: "Generative AI training for 21st-century educators co-hosted by Asha Edukasi and Asosiasi AI Indonesia, exploring AI curriculum creation, automated assessment, and creative media.",

    // Certifications Page
    certs_page_title: "Professional Certifications",
    certs_page_desc: "Official certifications validating proficiency in data science, advanced SQL engineering, and cybersecurity.",
    btn_verify_online: "Verify Online ↗",
    btn_open_pdf: "Open PDF ↗",
    btn_view_full: "View Full Image ↗",

    // Gallery Page
    gallery_page_title: "Training Documentation",
    gallery_page_desc: "Photo journal from executive in-house training, hands-on data analytics workshops, and guest lectures.",
    filter_client_all: "All Clients",
    filter_client_bi: "Bank Indonesia",
    filter_client_binus: "BINUS University",
    filter_client_ut: "Universitas Terbuka",
    filter_client_untag: "UNTAG Samarinda",
    filter_client_webinar: "Public Seminars",
    bi_album_title: "Pemanfaatan AI di Lingkungan Bank",
    bi_album_inst: "Bank Indonesia East Java Regional Office",
    bi_album_desc: "Executive training session on AI utilization, applied machine learning, and workflow automation for Bank Indonesia analysts.",
    other_sessions_heading: "Other Documented Sessions",

    // Footer
    footer_rights: "All rights reserved."
  }
};

/**
 * Initialize language switcher
 */
function initI18n() {
  const savedLang = localStorage.getItem('preferred_lang') || 'id';
  applyLanguage(savedLang);

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const currentLang = document.documentElement.getAttribute('lang') || 'id';
      const newLang = currentLang === 'id' ? 'en' : 'id';
      applyLanguage(newLang);
    });
  }
}

/**
 * Apply selected language to the DOM
 */
function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('preferred_lang', lang);

  // Update toggle button active indicator
  document.querySelectorAll('.lang-opt-id').forEach(el => {
    if (lang === 'en') {
      el.classList.remove('lang-active');
    } else {
      el.classList.add('lang-active');
    }
  });
  document.querySelectorAll('.lang-opt-en').forEach(el => {
    if (lang === 'en') {
      el.classList.add('lang-active');
    } else {
      el.classList.remove('lang-active');
    }
  });

  const dict = translations[lang] || translations.id;

  // Translate elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Translate placeholder attributes if any
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
