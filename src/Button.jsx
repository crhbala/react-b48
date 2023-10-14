function Button({text,handClick}) {
  return (
    <button onClick={handClick}>{ text}</button>
  )
}

export default Button;