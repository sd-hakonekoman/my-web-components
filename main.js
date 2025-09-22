// メイン JavaScript ファイル
console.log('Study Components プロジェクトが開始されました！');

// グローバル関数
window.showMessage = function() {
    alert('学習を開始しましょう！コンポーネントの世界へようこそ 🎉');
};

// DOM が読み込まれた後に実行
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM が読み込まれました');
    
    // 簡単なインタラクションの例
    initializeInteractions();
    
    // コンポーネントのデモンストレーション
    setupComponentDemos();
});

// インタラクションの初期化
function initializeInteractions() {
    // ボタンにホバーエフェクトを追加
    const buttons = document.querySelectorAll('.sample-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // 入力フィールドの機能強化
    const inputs = document.querySelectorAll('.sample-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            console.log('入力フィールドにフォーカスしました');
        });
        
        input.addEventListener('input', function() {
            console.log('入力値:', this.value);
        });
    });
}

// コンポーネントデモのセットアップ
function setupComponentDemos() {
    // ボタンコンポーネントのデモ
    const primaryButtons = document.querySelectorAll('.sample-button.primary');
    primaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('Primary ボタンがクリックされました！', 'success');
        });
    });
    
    const secondaryButtons = document.querySelectorAll('.sample-button.secondary');
    secondaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('Secondary ボタンがクリックされました！', 'info');
        });
    });
    
    // カードコンポーネントのデモ
    const cards = document.querySelectorAll('.sample-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.backgroundColor = this.style.backgroundColor === 'rgb(232, 244, 253)' ? '' : '#e8f4fd';
        });
    });
}

// 通知システム
function showNotification(message, type = 'info') {
    // 既存の通知を削除
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 新しい通知を作成
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // スタイルを設定
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 24px',
        borderRadius: '6px',
        color: 'white',
        fontWeight: '500',
        zIndex: '1000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // タイプに応じて背景色を設定
    const colors = {
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        error: '#dc3545'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // DOMに追加
    document.body.appendChild(notification);
    
    // アニメーション
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // 3秒後に自動削除
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// ユーティリティ関数
const ComponentUtils = {
    // 要素の作成
    createElement: function(tag, className = '', textContent = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (textContent) element.textContent = textContent;
        return element;
    },
    
    // CSS変数の取得
    getCSSVariable: function(variableName) {
        return getComputedStyle(document.documentElement)
            .getPropertyValue(variableName).trim();
    },
    
    // デバウンス関数
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // 要素の表示/非表示切り替え
    toggle: function(element) {
        const isHidden = element.style.display === 'none';
        element.style.display = isHidden ? '' : 'none';
        return !isHidden;
    }
};

// モジュールとしてエクスポート（ES6 modules使用時）
export { ComponentUtils, showNotification };