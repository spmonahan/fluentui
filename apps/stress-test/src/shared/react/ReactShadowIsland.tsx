import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createDOMRenderer, RendererProvider } from '@griffel/react';
import './shadow-island';
import { getTestOptions } from '../utils/testOptions';

const observeStylesheets = (shadowIsland: HTMLElement, styleTagTarget: HTMLElement = document.head) => {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        const addedNodes = Array.from(mutation.addedNodes);
        for (const node of addedNodes) {
          if ((node as HTMLElement).tagName === 'STYLE') {
            if ((node as HTMLElement).getAttribute('data-make-styles-bucket')) {
              if (shadowIsland.shadowRoot) {
                console.log('update');
                // shadowIsland.shadowRoot.adoptedStyleSheets = [...window.__adoptedStylesheets__];
                shadowIsland.shadowRoot.adoptedStyleSheets = document.adoptedStyleSheets;
              }
            } else if ((node as HTMLElement).id.startsWith('fui-FluentProvider')) {
              // console.log('afdasfsadf')
              // shadowIsland.shadowRoot?.appendChild(node);
            }
          }
        }
      }
    });
  });
  observer.observe(styleTagTarget, { childList: true, subtree: true });
};

type ReactShadowIslandProps = {
  children: React.ReactNode;
  styleTagTarget?: HTMLElement;
  constructableStylesheets?: boolean;
};

export const ReactShadowIsland: React.FC<ReactShadowIslandProps> = ({
  children,
  styleTagTarget,
  constructableStylesheets,
}) => {
  const renderer = createDOMRenderer(document, { styleTagTarget, constructableStylesheets });
  return <RendererProvider renderer={renderer}>{children}</RendererProvider>;
};

export const mountReactShadowIsland: ReactDOM.Renderer = (element, container, _callback): React.Element => {
  const shadowIsland = container;

  const { constructableStylesheets } = getTestOptions();
  const construct = constructableStylesheets === 'true';

  const options = {
    styleTagTarget: !construct ? shadowIsland : undefined,
    constructableStylesheets: construct,
  };

  observeStylesheets(shadowIsland, options.styleTagTarget);

  return ReactDOM.render(<ReactShadowIsland {...options}>{element}</ReactShadowIsland>, shadowIsland.shadowRoot!);
};
