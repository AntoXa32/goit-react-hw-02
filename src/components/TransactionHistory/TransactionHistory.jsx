import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <div className={css.container}>
      <table className={css.centeredTable}>
        <thead>
          <tr>
            <th className={css.tables}>Type</th>
            <th className={css.tables}>Amount</th>
            <th className={css.tables}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.background} key={id}>
              <td className={css.table}>{type}</td>
              <td className={css.table}>{amount}</td>
              <td className={css.table}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
