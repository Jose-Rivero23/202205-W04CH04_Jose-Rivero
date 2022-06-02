export function Display({ displayed }: { displayed: string }) {
    const template = <span className="number">{displayed}</span>;

    return template;
}
