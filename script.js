// دالة لتحديد من هو "الشخص المحدد" (الإداري)
function checkPermissions() {
    // هنا نضع "رمز دخول" بسيط كمثال
    const secretCode = prompt("أدخل رمز الإدارة لرؤية الأقسام المخفية (أو اضغط إلغاء للتقديم فقط):");
    
    if (secretCode === "RF100") { // الرمز السري هنا RF100
        document.querySelectorAll('.admin-link').forEach(el => {
            el.style.display = 'block'; // إظهار الأقسام الأربعة الأولى
        });
        alert("تم تفعيل صلاحيات الإدارة.");
    } else {
        document.querySelectorAll('.admin-link').forEach(el => {
            el.style.display = 'none'; // إخفاء الأقسام عن البقية
        });
        alert("أنت الآن في وضع 'التقديم' فقط.");
    }
}

// تشغيل الفحص عند تحميل الموقع
window.onload = checkPermissions;
