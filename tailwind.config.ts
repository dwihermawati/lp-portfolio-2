import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const textSizes = {
  'display-3xl': '--text-display-3xl',
  'display-2xl': '--text-display-2xl',
  'display-xl': '--text-display-xl',
  'display-lg': '--text-display-lg',
  'display-md': '--text-display-md',
  'display-sm': '--text-display-sm',
  'display-xs': '--text-display-xs',
  'text-xl': '--text-xl',
  'text-lg': '--text-lg',
  'text-md': '--text-md',
  'text-sm': '--text-sm',
  'text-xs': '--text-xs',
};

const fontWeights = {
  regular: '--font-weight-regular',
  medium: '--font-weight-medium',
  semibold: '--font-weight-semibold',
  bold: '--font-weight-bold',
  extrabold: '--font-weight-extrabold',
};

const customTextPlugin = plugin(({ addUtilities }) => {
  const newUtilities: Record<string, any> = {};

  for (const [sizeName, sizeVar] of Object.entries(textSizes)) {
    for (const [weightName, weightVar] of Object.entries(fontWeights)) {
      const className = `.${sizeName}-${weightName}`;
      newUtilities[className] = {
        fontSize: `var(${sizeVar})`,
        lineHeight: `var(${sizeVar}--line-height)`,
        fontWeight: `var(${weightVar})`,
      };
    }
  }

  addUtilities(newUtilities);
});

const borderGradientPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    '.gradient-border': {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      backgroundImage:
        'linear-gradient(white, white), linear-gradient(90deg, #9747ff, #1179fc)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
    },
  });
});

export default {
  theme: {
    extend: {
      boxShadow: {
        'blue-glow': '0 0 17px rgba(17, 121, 252, 0.6)',
        // 'blue-glow': '0 4px 24px 0 rgba(17, 121, 252, 0.32)',
      },

      backgroundImage: {
        'purple-gradient': 'linear-gradient(90deg, #9747ff, #1179fc)',
      },

      animation: {
        breatheEdwin: 'breatheEdwin 4s ease-in-out infinite',
        breathe: 'breathe 3s ease-in-out infinite',

        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },

      keyframes: {
        breatheEdwin: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.15rem)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.95' },
        },

        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  plugins: [customTextPlugin, borderGradientPlugin],
} satisfies Config;
