
export function ExternalLink({children, url}) {
    return (
        <a href={url} target="_blank" rel="noopener">
            {children}
        </a>
    );
}