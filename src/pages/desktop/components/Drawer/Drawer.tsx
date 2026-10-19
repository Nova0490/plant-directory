import type { ReactNode } from 'react';
import { FocusTrap } from 'focus-trap-react';
import styles from './Drawer.module.css';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export function Drawer({ isOpen, onClose, title, children }: DrawerProps) {
  return (
    <FocusTrap active={isOpen}>
      <div>
        <div
          className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
          onClick={onClose}
          aria-hidden="true"
        />

        <aside
          className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
        >
          <header className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <button
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label="Закрыть"
            >
              ×
            </button>
          </header>

          <div className={styles.body}>{children}</div>
        </aside>
      </div>
    </FocusTrap>
  );
}