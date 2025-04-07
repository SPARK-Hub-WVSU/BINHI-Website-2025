export function useMDXComponents(components) {
    return {
        strong: ({ children }) => (<strong className="text-primary font-bold text-pretty">{children}</strong>),
    }
}