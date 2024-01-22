export function Keywords({children}: { children: string[] }) {
  return (
    <div style={{fontSize: 1, color: 'white'}}>
      {children.join(' ')}
    </div>
  );
}
