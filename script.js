// قاعدة بيانات الكواكب
const planetsData = {
    sun: { n: "الشمس", d: "0 كم", m: "0", t: "5,500°C", tx: "نجم النظام الشمسي الذي يمدنا بالضوء والحرارة." },
    mercury: { n: "عطارد", d: "58 مليون كم", m: "0", t: "167°C", tx: "أصغر كوكب وأقربها للشمس، سطحه مليء بالفوهات." },
    venus: { n: "الزهرة", d: "108 مليون كم", m: "0", t: "464°C", tx: "كوكب بركاني غلافه الجوي يحبس الحرارة بشكل هائل." },
    earth: { n: "الأرض", d: "150 مليون كم", m: "1", t: "15°C", tx: "كوكب الحياة، يتميز بوجود الماء السائل وغلاف جوي مثالي." },
    mars: { n: "المريخ", d: "228 مليون كم", m: "2", t: "-65°C", tx: "الكوكب الأحمر، يحتوي على جبال وبراكين هي الأضخم في النظام." },
    jupiter: { n: "المشتري", d: "778 مليون كم", m: "95", t: "-110°C", tx: "أكبر كواكب المجموعة الشمسية وهو عملاق غازي." },
    saturn: { n: "زحل", d: "1.4 مليار كم", m: "146", t: "-140°C", tx: "يتميز بنظام حلقاته الجليدية الرائع وأقماره الكثيرة." },
    uranus: { n: "أورانوس", d: "2.8 مليار كم", m: "27", t: "-195°C", tx: "عملاق جليدي بارد يميل محور دورانه بشكل جانبي." },
    neptune: { n: "نبتون", d: "4.5 مليار كم", m: "14", t: "-201°C", tx: "أبعد كوكب، لونه أزرق عميق ورياحه شديدة القوة." }
};

/**
 * وظيفة عرض بيانات الكوكب في اللوحة الجانبية
 * @param {string} id - معرف الكوكب المختار
 */
function showPlanet(id) {
    const data = planetsData[id];
    
    // تحديث المحتوى النصي داخل اللوحة
    document.getElementById('p-name').innerText = data.n;
    document.getElementById('p-dist').innerText = data.d;
    document.getElementById('p-moons').innerText = data.m;
    document.getElementById('p-temp').innerText = data.t;
    document.getElementById('p-desc').innerText = data.tx;
    
    // إظهار اللوحة بإضافة الكلاس النشط
    document.getElementById('side-panel').classList.add('active');
}

/**
 * توليد النجوم بشكل عشوائي في الخلفية عند تحميل الصفحة
 */
const field = document.getElementById('star-field');
for(let i=0; i<250; i++) {
    let s = document.createElement('div');
    s.style.position = 'absolute';
    
    // أحجام عشوائية للنجوم
    let size = Math.random() * 2 + 'px';
    s.style.width = size; 
    s.style.height = size;
    
    s.style.background = '#fff'; 
    // مواقع عشوائية
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%'; 
    // شفافية عشوائية لإعطاء عمق
    s.style.opacity = Math.random();
    
    field.appendChild(s);
}