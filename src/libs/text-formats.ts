export default function moneyFormat(money: number): string {
  return `${new Intl.NumberFormat('uk-UA', {}).format(money)} ₴`;
}
