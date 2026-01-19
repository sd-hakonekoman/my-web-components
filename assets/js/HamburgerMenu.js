export function HamburgerMenu() {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("menuButton");
    const label = document.getElementById("menuButtonLabel");
    const menu = document.getElementById("main-menu");
    const overlay = document.getElementById("menuOverlay");
    const main = document.getElementById("main");

    let lastFocused = null;

    const getFocusable = (root) => {
      return Array.from(
        root.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
    };

    // メニューを開く
    const openMenu = () => {
      lastFocused = document.activeElement;

      menu.hidden = false;
      overlay.hidden = false;

      button.setAttribute("aria-expanded", "true");
      label.textContent = "メニューを閉じる";

      if ("inert" in main) {
        main.inert = true;
      } else {
        main.setAttribute("aria-hidden", "true");
      }

      const focusables = getFocusable(menu);
      focusables[0].focus();
    };

    // メニューを閉じる
    const closeMenu = () => {
      menu.hidden = true;
      overlay.hidden = true;

      button.setAttribute("aria-expanded", "false");
      label.textContent = "メニューを開く";

      if ("inert" in main) {
        main.inert = false;
      } else {
        main.removeAttribute("aria-hidden");
      }

      (lastFocused || button).focus();
      lastFocused = null;
    };

    // イベント登録
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });

    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {
      if (menu.hidden) return;

      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }

      if (e.key !== "Tab") return;

      const focusables = getFocusable(menu);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  });
}