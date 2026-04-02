document.addEventListener('DOMContentLoaded', () => {
    // --- プレイヤーデータ設定 ---
    // 新しいプレイヤーを追加・編集する場合はこの配列を書き換えてください
    const players = [
        {
            name: "AM 老師",
            role: "オーナー",
            image: "images/roushi.png", // 画像ファイルのパスを修正
            x: "https://x.com/amloushi", // XのURL
            youtube: "https://www.youtube.com/@am-rousi/streams", // YouTube
            tiktok: "https://www.tiktok.com/@amroushi01" // TikTok
        },
        {
            name: "KunKun",
            role: "モデレーター",
            image: "images/kunkun.png",
            x: "",
            youtube: "",
            tiktok: "https://www.tiktok.com/@kunkun_o_o"
        },
        {
            name: "俺はお前",
            role: "モデレーター",
            image: "images/ore.png",
            x: "https://x.com/T4139282616645",
            youtube: "",
            tiktok: "https://www.tiktok.com/@love52552"
        },
        {
            name: "らふた",
            role: "モデレーター",
            image: "images/rafuta.png",
            x: "",
            youtube: "",
            tiktok: "https://www.tiktok.com/@rfutatyan"
        },
        {
            name: "axie",
            role: "アスリート",
            image: "images/axie.png",
            x: "https://x.com/axiefnbr1",
            youtube: "",
            tiktok: "https://www.tiktok.com/@axie.ps5.fnbr1"
        },
        {
            name: "kuya",
            role: "アスリート",
            image: "images/kuya.png",
            x: "https://x.com/AMKuyafv",
            youtube: "",
            tiktok: "https://www.tiktok.com/@am_kuyafv"
        },
        {
            name: "yuta",
            role: "アスリート",
            image: "images/yuta.png",
            x: "https://x.com/Eo5oqbd4rf85010",
            youtube: "",
            tiktok: "https://www.tiktok.com/@cs.yuta"
        },
        {
            name: "ゆり",
            role: "アスリート",
            image: "images/yuri.png",
            x: "https://x.com/RtxGoe7",
            youtube: "",
            tiktok: "https://www.tiktok.com/@yarina365"
        },
        {
            name: "えいちゃん",
            role: "アスリート",
            image: "images/eichan.png",
            x: "",
            youtube: "",
            tiktok: "https://www.tiktok.com/@meil_vl"
        },
        {
            name: "yufuto",
            role: "アスリート",
            image: "images/yufuto.png",
            x: "",
            youtube: "",
            tiktok: "https://www.tiktok.com/@yufuto"
        },
        {
            name: "ヌーン",
            role: "アスリート",
            image: "images/noon.png",
            x: "",
            youtube: "",
            tiktok: "https://www.tiktok.com/@sudamasakininaritai02"
        },
        {
            name: "ヒカル",
            role: "アスリート",
            image: "images/hikaru.png",
            x: "",
            youtube: "",
            tiktok: "https://www.tiktok.com/@hikaru9226"
        },
        {
            name: "okapi",
            role: "アスリート",
            image: "images/okapi.png",
            x: "",
            youtube: "",
            tiktok: "https://www.tiktok.com/@am_okapii"
        },
        {
            name: "はなこ",
            role: "アスリート",
            image: "images/hanako.png",
            x: "https://x.com/hanako2niei",
            youtube: "",
            tiktok: "https://www.tiktok.com/@tomuyankuruzu"
        },
        {
            name: "如月 ねこ",
            role: "アスリート",
            image: "images/kisaragi.png",
            x: "https://x.com/ki3ragi_neko",
            youtube: "https://www.youtube.com/@kisaragi_neko02",
            tiktok: "https://www.tiktok.com/@kisaragi_neko"
        },
        {
            name: "にゃんｺ",
            role: "アスリート",
            image: "images/nyanko.png",
            x: "",
            youtube: "",
            tiktok: "https://www.tiktok.com/@dt_net85"
        },

    ];

    // --- プレイヤーカードのレンダリング ---
    const rosterGrid = document.getElementById('roster-grid');

    if (rosterGrid) {
        players.forEach(player => {
            const card = document.createElement('div');
            card.className = 'player-card';

            // SNSリンクのHTML生成
            let snsHtml = '';
            if (player.x) snsHtml += `<a href="${player.x}" target="_blank" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>`;
            if (player.youtube) snsHtml += `<a href="${player.youtube}" target="_blank" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>`;
            if (player.tiktok) snsHtml += `<a href="${player.tiktok}" target="_blank" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>`;

            // 画像またはプレースホルダ
            const imageHtml = player.image
                ? `<img src="${player.image}" alt="${player.name}" class="card-image" 
                    onload="this.parentElement.classList.add('has-image')" 
                    onerror="this.parentElement.classList.remove('has-image'); this.style.display='none';">`
                : '';

            card.innerHTML = `
                <div class="card-image-placeholder">
                    ${imageHtml}
                </div>
                <div class="card-content">
                    <h3 class="player-name">${player.name}</h3>
                    <p class="player-role">${player.role}</p>
                    <div class="player-sns">
                        ${snsHtml}
                    </div>
                </div>
                <div class="card-glow"></div>
            `;
            rosterGrid.appendChild(card);
        });
    }

    // --- スクロールアニメーション (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // ロゴ画像のエラーハンドリング
    const logoImg = document.getElementById('logo');
    if (logoImg) {
        logoImg.addEventListener('error', function () {
            this.style.display = 'none';
        });
    }
});
