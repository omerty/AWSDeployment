import React from 'react';
import Frame, { FrameComponentProps } from 'react-frame-component';

function GistComponent() {
  const gistUrl = 'https://gist.github.com/465c877fe4e727d48cf889bbc1c3e8c6.git';

  const frameProps: FrameComponentProps = {
    style: { width: '100%', height: '100%' },
    initialContent: `<!DOCTYPE html><html><head></head><body><script src="${gistUrl}"></script></body></html>`,
    children: null, // Add an empty children prop to satisfy the type requirement
  };

  return (
    <div>
      <Frame {...frameProps} />
    </div>
  );
}

export default GistComponent;