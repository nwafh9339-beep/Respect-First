// تبديل الصفحات
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// محاكاة تسجيل الدخول (في الحقيقة يتم عبر Discord API)
function login() {
    const password = prompt("أدخل رمز الإدارة:");
    if (password === "123") { // باسورد وهمي للتجربة
        document.querySelectorAll('.admin-link').forEach(el => el.style.display = 'block');
        alert("أهلاً بك يا مسؤول");
    } else {
        alert("الرمز خطأ!");
    }
}

// إرسال الطلب لـ Discord Webhook
async function sendApplication() {
    const user = document.getElementById('discord-id').value;
    const exp = document.getElementById('experience').value;
    const webhookURL = "هنا_تحط_رابط_الويب_هوك";

    if(!user || !exp) return alert("عبّ البيانات أولاً!");

    const payload = {
        embeds: [{
            title: "تقديم جديد لـ Respect First",
            color: 5814783,
            fields: [
                { name: "صاحب التقديم", value: user },
                { name: "الخبرة", value: exp }
            ]
        }]
    };

    try {
        await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        alert("تم إرسال طلبك للإدارة!");
    } catch (err) {
        alert("خطأ في الإرسال");
    }
}
