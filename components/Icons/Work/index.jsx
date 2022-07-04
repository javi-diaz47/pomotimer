function Work(props) {
  return (
      <svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M4 16h8V1.714C12 .768 11.328 0 10.5 0h-5C4.672 0 4 .768 4 1.714V16ZM6 2.286h4v1.143H6V2.286Zm10 2.857v9.143c0 .946-.672 1.714-1.5 1.714H13V3.429h1.5c.828 0 1.5.767 1.5 1.714ZM3 16H1.5C.672 16 0 15.232 0 14.286V5.143c0-.947.672-1.714 1.5-1.714H3V16Z"
          fill="#090936"
        />
      </svg>
    )
}


export { Work };

