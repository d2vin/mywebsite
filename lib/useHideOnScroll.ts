import { useEffect, type RefObject } from 'react';

/** How long scrolling has to pause before a half-shown element settles, in ms. */
const SETTLE_DELAY = 140;
/** How long the settle animation takes, in ms. */
const SETTLE_DURATION = 240;

/**
 * Drives a `position: fixed` element (the site nav) so that scrolling down carries it
 * up and out of view along with the page, and scrolling up — from anywhere on the
 * page — slides it straight back into its resting spot at the top of the window.
 *
 * The element follows the scroll 1:1. If scrolling stops while it is half shown, it
 * finishes the move in the direction you were heading. Focusing anything inside it
 * (e.g. tabbing to a link) brings it back into view. While it is fully out of view it
 * carries a `data-hidden` attribute, for styling (e.g. dropping a shadow that would
 * otherwise peek in at the top of the window).
 */
export function useHideOnScroll(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let hideDistance = 0; // how far the element has to move up to be fully out of view
    let offset = 0; // how far it is currently moved up, 0..hideDistance
    let lastY = 0;
    let direction = 0; // 1 while scrolling down, -1 while scrolling up
    let scrollFrame = 0;
    let settleFrame = 0;
    let settleTimer = 0;

    // Clamped to the scrollable range so rubber-band overscroll at either end isn't treated as scrolling.
    const scrollTop = () => {
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      return Math.max(0, Math.min(window.scrollY, maxY));
    };

    // Near the top of the page, never tuck the element further up than it would sit if it scrolled with the page.
    const maxOffset = (y: number) => Math.min(hideDistance, y);

    const measure = () => {
      hideDistance = el.offsetHeight + (parseFloat(getComputedStyle(el).top) || 0);
    };

    const moveTo = (next: number) => {
      offset = next;
      el.style.transform = next > 0 ? `translate3d(0, ${-next}px, 0)` : '';
      const hidden = hideDistance > 0 && next >= hideDistance;
      if (hidden !== el.hasAttribute('data-hidden')) el.toggleAttribute('data-hidden', hidden);
    };

    const stopSettling = () => {
      window.clearTimeout(settleTimer);
      cancelAnimationFrame(settleFrame);
      settleFrame = 0;
    };

    const animateTo = (target: number) => {
      stopSettling();
      const from = offset;
      if (from === target) return;
      if (reducedMotion.matches) {
        moveTo(target);
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / SETTLE_DURATION, 1);
        moveTo(from + (target - from) * (1 - (1 - progress) ** 3)); // ease-out cubic
        settleFrame = progress < 1 ? requestAnimationFrame(step) : 0;
      };
      settleFrame = requestAnimationFrame(step);
    };

    const settle = () => {
      const limit = maxOffset(scrollTop());
      if (offset > 0 && offset < limit) animateTo(direction < 0 ? 0 : limit);
    };

    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        const y = scrollTop();
        const delta = y - lastY;
        lastY = y;
        if (!delta) return;
        direction = Math.sign(delta);
        stopSettling();
        moveTo(Math.max(0, Math.min(offset + delta, maxOffset(y))));
        settleTimer = window.setTimeout(settle, SETTLE_DELAY);
      });
    };

    const onResize = () => {
      // The hide distance changes across breakpoints; an element that was fully hidden should stay fully hidden.
      const wasHidden = hideDistance > 0 && offset >= hideDistance;
      measure();
      const limit = maxOffset(scrollTop());
      moveTo(wasHidden ? limit : Math.min(offset, limit));
    };

    const onFocusIn = () => animateTo(0);

    measure();
    lastY = scrollTop();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    el.addEventListener('focusin', onFocusIn);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      el.removeEventListener('focusin', onFocusIn);
      cancelAnimationFrame(scrollFrame);
      stopSettling();
      el.style.transform = '';
      el.removeAttribute('data-hidden');
    };
  }, [ref]);
}
