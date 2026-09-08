
type TableProps = {
  columns: string[];
  data: Record<string, string | number>[];
  striped?: boolean;
};

export function Table({ columns, data, striped = false }: TableProps) {
  return (
    <table className={`table ${striped ? "striped" : ""}`}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col}>{row[col.toLowerCase()]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}