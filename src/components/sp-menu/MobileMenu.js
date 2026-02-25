export function MobileMenu() {
  const menuButton = document.getElementById("menu-button");
  const dialog = document.getElementById("mobile-menu");
  const closeButton = document.getElementById("menu-close");

  const desktopQuery = window.matchMedia("(min-width: 768px)");

  let lastFocused = null;

  // transition が有効かどうか（reduce 対応）
  function isMotionReduced() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  // ARIA属性を更新する関数
  function setExpanded(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    // ボタンの読み上げ文言も変えたい場合は sr-only を入れ替える
  }

  // メニューを開くときは、最後にフォーカスしていた要素を記録しておいて、閉じたときに戻す
  function openMenu() {
    lastFocused = document.activeElement;
    setExpanded(true);

    // dialog をモーダル表示
    dialog.showModal();

    // showModal直後に state を open に（1フレーム遅らせると確実）
    dialog.dataset.state = "initial";
    requestAnimationFrame(() => {
      dialog.dataset.state = "open";
    });

    // 最初のフォーカスを「閉じる」または最初のリンクに
    closeButton.focus();
  }

  // メニューを閉じるときは、最後にフォーカスしていた要素に戻す
  function closeMenu() {
    setExpanded(false);

    // 既に閉じ処理中なら二重実行しない
    if (dialog.dataset.state === "closing") return;

    // reduce の人は即 close でOK
    if (isMotionReduced()) {
      dialog.close();
      return;
    }

    // フェードアウト開始
    dialog.dataset.state = "closing";

    // transition完了後に close
    const onEnd = (e) => {
      // opacity の transition が終わったタイミングだけ拾う（多重発火対策）
      if (e.target !== dialog || e.propertyName !== "opacity") return;
      dialog.removeEventListener("transitionend", onEnd);
      dialog.close();
    };
    dialog.addEventListener("transitionend", onEnd);

    // 元のボタンへフォーカスを戻す
    // if (lastFocused instanceof HTMLElement) lastFocused.focus();
  }

  // ボタンをクリックしたときの挙動
  menuButton.addEventListener("click", () => {
    dialog.open ? closeMenu() : openMenu();
  });

  // 閉じるボタンをクリックしたときの挙動
  closeButton.addEventListener("click", closeMenu);

  // dialogを閉じたとき（Escやclose()含む）
  dialog.addEventListener("close", () => {
    dialog.dataset.state = ""; // stateリセット

    setExpanded(false);

    // フォーカスをトリガーへ戻す
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  });

  // backdropクリック相当：dialog外側クリックで閉じる
  dialog.addEventListener("click", (e) => {
    // dialog要素自身をクリック＝背面クリックに近い
    if (e.target === dialog) closeMenu();

    // リンククリック時にもメニューを閉じる
    const link = e.target.closest("a");
    if (link) closeMenu();
  });

  // SPで開いている状態からPC幅に切り替わったら閉じる
  desktopQuery.addEventListener("change", (e) => {
    if (e.matches && dialog.open) closeMenu();
  });
}