function BurgerBtn(props) {
  return (
    <svg
      width={32}
      height={9}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y={0.5} width={32} height={3} rx={1.5} fill="#090936" />
      <rect x={11} y={5.5} width={21} height={3} rx={1.5} fill="#090936" />
    </svg>
  );
}

export { BurgerBtn };
