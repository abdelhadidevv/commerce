export default function stringify(res) {
  const { data } = JSON.parse(JSON.stringify(res));
  return data;
}
