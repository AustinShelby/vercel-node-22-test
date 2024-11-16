export default function Home() {
  const setA = new Set([1, 2, 3]);
  const setB = new Set([2, 3, 4]);
  const symmetricDifference = setA.symmetricDifference(setB);
  return (
    <div>
      <dl>
        <dd>Set A</dd>
        <dt>({Array.from(setA.values()).join(", ")})</dt>
        <dd>Set B</dd>
        <dt>({Array.from(setB.values()).join(", ")})</dt>
        <dd>Symmetric Difference</dd>
        <dt>({Array.from(symmetricDifference.values()).join(", ")})</dt>
      </dl>
    </div>
  );
}
