import { globalStyle } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';

export const fontWrapper = style({
  fontFamily: '"Paperlogy", sans-serif',
});

/* HTML & Body Styles */
globalStyle('html, body', {
  fontSize: '62.5%',
  fontFamily: '"Paperlogy", sans-serif',
  scrollbarWidth: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  scrollBehavior: 'smooth',
  background: '#0F101B',
  margin: '0',
  padding: '0',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});
