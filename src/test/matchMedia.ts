type Listener = (event: MediaQueryListEvent) => void;

let matches = false;
const listeners = new Set<Listener>();

export function installMatchMediaMock() {
  window.matchMedia = (query: string) =>
    ({
      get matches() {
        return matches;
      },
      media: query,
      onchange: null,
      addEventListener: (_type: string, listener: Listener) => listeners.add(listener),
      removeEventListener: (_type: string, listener: Listener) => listeners.delete(listener),
      addListener: (listener: Listener) => listeners.add(listener),
      removeListener: (listener: Listener) => listeners.delete(listener),
      dispatchEvent: () => true,
    }) as unknown as MediaQueryList;
}

export function setMediaMatches(value: boolean) {
  matches = value;
  listeners.forEach((listener) => listener({ matches: value } as MediaQueryListEvent));
}

export function resetMatchMedia() {
  matches = false;
  listeners.clear();
}
