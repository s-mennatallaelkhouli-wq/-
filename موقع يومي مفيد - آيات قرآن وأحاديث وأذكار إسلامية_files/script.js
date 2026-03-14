// JavaScript لموقع يومي مفيد
console.log("مرحبا بك في موقع يومي مفيد! ابدأ يومك بالخير.");

const hadiths = [
    {
        text: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
        ref: "رواه البخاري ومسلم",
        meaning: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى."
    },
    {
        text: "الدِّينُ النَّصِيحَةُ",
        ref: "رواه مسلم",
        meaning: "الدين النصيحة."
    },
    {
        text: "لاَ تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي ظَاهِرِينَ عَلَى الْحَقِّ لَا يَضُرُّهُمْ مَنْ خَذَلَهُمْ حَتَّى يَأْتِيَ أَمْرُ اللَّهِ وَهُمْ عَلَى ذَلِكَ",
        ref: "رواه مسلم",
        meaning: "لا تزال طائفة من أمتي ظاهرين على الحق لا يضرهم من خذلهم حتى يأتي أمر الله وهم على ذلك."
    },
    {
        text: "مَنْ حَسَّنَ حَسَنَةً كُتِبَتْ لَهُ عَشْرُ أَمْثَالِهَا وَمَنْ سِيءَ سَيِّئَةً كُتِبَتْ لَهُ مِثْلُهَا أَوْ غُفِرَتْ لَهُ",
        ref: "رواه البخاري",
        meaning: "من حسن حسنة كتبت له عشر أمثالها، ومن سيء سيئة كتبت له مثلها أو غفرت له."
    },
    {
        text: "الإِيمَانُ بِضْعٌ وَسِتُّونَ شُعْبَةً وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ",
        ref: "رواه البخاري ومسلم",
        meaning: "الإيمان بضع وستون شعبة والحياء شعبة من الإيمان."
    },
    {
        text: "لاَ ضَرَرَ وَلاَ ضِرَارَ",
        ref: "رواه ابن ماجه والدارقطني",
        meaning: "لا ضرر ولا ضرار."
    },
    {
        text: "مَنْ سَنَّ فِي الإِسْلاَمِ سُنَّةً حَسَنَةً فَلَهُ أَجْرُهَا وَأَجْرُ مَنْ عَمِلَ بِهَا بَعْدَهُ مِنْ غَيْرِ أَنْ يَنْقُصَ مِنْ أُجُورِهِمْ شَيْءٌ",
        ref: "رواه مسلم",
        meaning: "من سن في الإسلام سنة حسنة فله أجرها وأجر من عمل بها بعده من غير أن ينقص من أجورهم شيء."
    }
];

const tips = [
    "ابدأ يومك بقراءة القرآن لمدة 10 دقائق.",
    "مارس الرياضة يوميًا للحفاظ على الصحة.",
    "كن صادقًا في أعمالك وكلماتك.",
    "ساعد الآخرين دون انتظار مقابل.",
    "تعلم شيئًا جديدًا كل يوم."
];

function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

document.addEventListener('DOMContentLoaded', function() {
    const day = getDayOfYear();

    // تحديث حديث اليوم
    const hadithIndex = day % hadiths.length;
    const hadithSection = document.querySelector('#hadith p:nth-child(2)');
    const meaningSection = document.querySelector('#hadith p:nth-child(3)');
    if (hadithSection) {
        hadithSection.innerHTML = `<strong>${hadiths[hadithIndex].ref}:</strong> "${hadiths[hadithIndex].text}"`;
    }
    if (meaningSection) {
        meaningSection.textContent = hadiths[hadithIndex].meaning;
    }

    // زر نصيحة عشوائية
    const tipSection = document.querySelector('#tips');
    if (tipSection) {
        const button = document.createElement('button');
        button.textContent = 'أظهر نصيحة عشوائية';
        button.style.background = 'linear-gradient(45deg, #007bff, #ffffff)';
        button.style.color = '#333';
        button.style.border = 'none';
        button.style.padding = '10px 20px';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.marginTop = '20px';
        tipSection.appendChild(button);

        button.addEventListener('click', function() {
            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            alert(randomTip);
        });
    }

    // تذكير يومي
    const now = new Date();
    const reminder = document.createElement('div');
    reminder.innerHTML = `<p>تذكير: اليوم ${now.toLocaleDateString('ar-SA')}. ابدأ يومك بالصلاة والدعاء.</p>`;
    reminder.style.background = '#e8f5e8';
    reminder.style.padding = '10px';
    reminder.style.borderRadius = '5px';
    reminder.style.marginTop = '20px';
    document.querySelector('#home').appendChild(reminder);
});