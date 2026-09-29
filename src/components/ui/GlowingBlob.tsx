import React from 'react';

interface GlowingBlobProps {
  color?: string;
  size?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className?: string;
}

export const GlowingBlob: React.FC<GlowingBlobProps> = ({
  color = 'from-indigo-600/30 to-purple-600/30',
  size = 'w-96 h-96',
  top,
  left,
  right,
  bottom,
  className = '',
}) => {
  const positionStyles = {
    top: top ?? 'auto',
    left: left ?? 'auto',
    right: right ?? 'auto',
    bottom: bottom ?? 'auto',
  };

  return (
    <div
      style={positionStyles}
      className={`absolute rounded-full bg-gradient-to-r ${color} filter blur-3xl opacity-40 pointer-events-none animate-pulse-slow ${size} ${className}`}
    />
  );
};
