/**
 * NeonButton.js
 * Helper for rendering cyberpunk glowing buttons on Canvas or DOM.
 */

export class NeonButton {
  static getStyle(accentColor = '#00f3ff') {
    return {
      padding: '14px 28px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#ffffff',
      backgroundColor: 'rgba(7, 9, 19, 0.85)',
      border: '2px solid ' + accentColor,
      borderRadius: '12px',
      boxShadow: '0 0 16px ' + accentColor + '66',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    };
  }
}
